// The one Markdown renderer of the static documentation site. It turns a language manual
// page into article HTML with typeset mathematics, highlighted code, rewritten links, and
// heading anchors. It touches no DOM: the build prerenders every route with it, and the
// libraries it uses (marked, KaTeX, Prism) are passed in so that the exact files the site
// ships are the ones that render it.

export const code_language_labels = {
    python: "Python",
    javascript: "JavaScript",
    typescript: "TypeScript",
    rust: "Rust",
    kotlin: "Kotlin",
    swift: "Swift",
    bash: "Shell",
    text: "Text",
};

const code_language_aliases = {
    py: "python",
    python: "python",
    js: "javascript",
    javascript: "javascript",
    ts: "typescript",
    typescript: "typescript",
    rs: "rust",
    rust: "rust",
    kt: "kotlin",
    kotlin: "kotlin",
    swift: "swift",
    sh: "bash",
    shell: "bash",
    bash: "bash",
    zsh: "bash",
    console: "bash",
    text: "text",
    txt: "text",
    plain: "text",
    output: "text",
};

export const highlighted_code_languages = ["python", "javascript", "typescript", "rust", "kotlin", "swift", "bash"];
export const shell_code_languages = new Set(["bash"]);

const example_marker_pattern = /^<!--\s*symi-example:\s*(.*?)\s*-->\s*$/s;

export function escape_html(text) {
    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

export function heading_slug(text) {
    const slug = String(text).replace(/[^a-zA-Z0-9]+/g, "_").replace(/^_+|_+$/g, "").toLowerCase();
    return slug === "" ? "unnamed" : slug;
}

export function legacy_heading_identifier(text) {
    const match = String(text).trim().match(/^[A-Za-z0-9_.]+/);
    return match == null ? null : match[0];
}

export function normalize_code_language(info) {
    const words = String(info || "").trim().split(/\s+/).filter(word => word !== "");
    const language = code_language_aliases[(words[0] || "").toLowerCase()] || (words[0] ? words[0].toLowerCase() : "text");
    return { language, signature: words.slice(1).includes("signature") };
}

// A shell example may show a prompt before each command and interleave its output. The copied
// text is only the commands, without their prompts; any other example is copied verbatim.
export function copy_text(source, language) {
    const text = String(source).replace(/\n$/, "");
    if (!shell_code_languages.has(language)) {
        return text;
    }
    const lines = text.split("\n");
    const prompted = lines.filter(line => /^\$ /.test(line));
    return prompted.length === 0 ? text : prompted.map(line => line.slice(2)).join("\n");
}

export function example_marker_fields(html) {
    const match = String(html).trim().match(example_marker_pattern);
    if (match == null) {
        return null;
    }
    const fields = {};
    for (const field of match[1].split(/\s+/)) {
        const separator = field.indexOf("=");
        if (separator > 0) {
            fields[field.slice(0, separator)] = field.slice(separator + 1);
        }
    }
    return fields;
}

export function highlight_code(source, language, prism) {
    const grammar = prism != null && prism.languages != null ? prism.languages[language] : null;
    if (grammar == null || !highlighted_code_languages.includes(language)) {
        return escape_html(source);
    }
    return prism.highlight(source, grammar, language);
}

export function render_mathematics_markup(source, display_mode, katex, errors) {
    const delimiters = display_mode ? ["\\[", "\\]"] : ["\\(", "\\)"];
    if (katex == null || typeof katex.renderToString !== "function") {
        return `<code class="symi-math-source">${escape_html(delimiters[0] + source + delimiters[1])}</code>`;
    }
    try {
        return katex.renderToString(source, {
            displayMode: display_mode,
            throwOnError: true,
            strict: "ignore",
            trust: false,
            output: "htmlAndMathml",
        });
    } catch (error) {
        errors.push({ source, message: String(error && error.message ? error.message : error) });
        return `<code class="symi-math-source" data-math-error="true">${escape_html(delimiters[0] + source + delimiters[1])}</code>`;
    }
}

function mathematics_extensions(katex, errors) {
    const tokenize = (text, opening, closing, type) => {
        if (!text.startsWith(opening)) {
            return undefined;
        }
        const closing_index = text.indexOf(closing, opening.length);
        if (closing_index < 0) {
            return undefined;
        }
        return {
            type,
            raw: text.slice(0, closing_index + closing.length),
            text: text.slice(opening.length, closing_index),
        };
    };
    return [
        {
            name: "inline_mathematics",
            level: "inline",
            start(text) { return text.indexOf("\\("); },
            tokenizer(text) { return tokenize(text, "\\(", "\\)", "inline_mathematics"); },
            renderer(token) { return render_mathematics_markup(token.text, false, katex, errors); },
        },
        {
            name: "display_mathematics",
            level: "inline",
            start(text) { return text.indexOf("\\["); },
            tokenizer(text) { return tokenize(text, "\\[", "\\]", "display_mathematics"); },
            renderer(token) { return render_mathematics_markup(token.text, true, katex, errors); },
        },
    ];
}

export function plain_text_of_tokens(tokens) {
    return (tokens || []).map(token => {
        if (token.type === "inline_mathematics" || token.type === "display_mathematics") {
            return token.text;
        }
        if (token.type === "html") {
            return "";
        }
        if (Array.isArray(token.tokens) && token.tokens.length > 0) {
            return plain_text_of_tokens(token.tokens);
        }
        if (token.type === "escape") {
            return token.text;
        }
        return typeof token.text === "string" ? token.text : "";
    }).join("").replace(/\s+/g, " ").trim();
}

function code_block_html(token, marker, prism) {
    const { language, signature } = normalize_code_language(token.lang);
    const source = String(token.text);
    const highlighted = highlight_code(source, language, prism);
    const language_class = `language-${escape_html(language)}`;
    if (signature) {
        return `<div class="symi-signature" data-code-language="${escape_html(language)}">`
            + `<pre class="${language_class}" tabindex="0"><code class="${language_class}">${highlighted}</code></pre></div>\n`;
    }
    const is_output = marker != null && marker.kind === "output";
    const label = is_output ? "Output" : (code_language_labels[language] || language);
    const kind = is_output ? "output" : "example";
    const identifier = marker != null && marker.identifier ? ` id="example-${escape_html(marker.identifier)}"` : "";
    const example_reference = marker != null && marker.example ? ` data-example="${escape_html(marker.example)}"` : "";
    return `<figure class="symi-code symi-code-${kind}" data-code-language="${escape_html(language)}" data-code-kind="${kind}"${identifier}${example_reference}>`
        + `<figcaption class="symi-code-header"><span class="symi-code-label">${escape_html(label)}</span></figcaption>`
        + `<pre class="symi-code-body ${language_class}" tabindex="0"><code class="${language_class}">${highlighted}</code></pre>`
        + `</figure>\n`;
}

function first_paragraph_text(tokens) {
    for (const token of tokens) {
        const text = token.type === "paragraph" ? plain_text_of_tokens(token.tokens) : "";
        if (text !== "") {
            return text;
        }
    }
    return "";
}

// Render one manual page. `routes` rewrites links for `language`; the result carries the
// article HTML, the headings in reading order (for the outline and the concept index), the
// page title and description, and any mathematics KaTeX rejected.
export function render_documentation_markdown(markdown, { marked, katex, prism, routes, language }) {
    const math_errors = [];
    const headings = [];
    const used_identifiers = new Set();
    const markers = new Map();
    const unique_identifier = base => {
        let identifier = base;
        let suffix = 2;
        while (used_identifiers.has(identifier)) {
            identifier = `${base}_${suffix}`;
            suffix += 1;
        }
        used_identifiers.add(identifier);
        return identifier;
    };
    for (const match of String(markdown).matchAll(/\bid="([^"]+)"/g)) {
        used_identifiers.add(match[1]);
    }
    const instance = new marked.Marked({ gfm: true });
    instance.use({
        extensions: mathematics_extensions(katex, math_errors),
        renderer: {
            heading(token) {
                const inner = this.parser.parseInline(token.tokens);
                const text = plain_text_of_tokens(token.tokens);
                if (token.depth === 1) {
                    return `<h1 id="page-title">${inner}</h1>\n`;
                }
                const identifier = unique_identifier(heading_slug(text));
                const legacy = token.depth === 3 ? legacy_heading_identifier(text) : null;
                const legacy_anchor = legacy != null && legacy !== identifier && !used_identifiers.has(legacy)
                    ? (used_identifiers.add(legacy), `<span id="${escape_html(legacy)}" class="symi-legacy-anchor"></span>`)
                    : "";
                headings.push({ depth: token.depth, identifier, text });
                return `<h${token.depth} id="${escape_html(identifier)}">${legacy_anchor}${inner}`
                    + `<a class="symi-heading-permalink" href="#${escape_html(identifier)}" aria-label="Link to this section: ${escape_html(text)}">#</a>`
                    + `</h${token.depth}>\n`;
            },
            code(token) {
                return code_block_html(token, markers.get(token) || null, prism);
            },
            link(token) {
                const inner = this.parser.parseInline(token.tokens);
                const target = routes.rewrite_href(token.href, language);
                const title = token.title ? ` title="${escape_html(token.title)}"` : "";
                const external = target.external ? ` class="symi-external-link" rel="noopener"` : "";
                return `<a href="${escape_html(target.href)}"${title}${external}>${inner}</a>`;
            },
        },
    });
    const tokens = instance.lexer(String(markdown));
    let pending_marker = null;
    for (const token of tokens) {
        if (token.type === "html") {
            pending_marker = example_marker_fields(token.text);
            if (pending_marker != null) {
                token.text = "";
            }
            continue;
        }
        if (token.type === "space") {
            continue;
        }
        if (token.type === "code" && pending_marker != null) {
            markers.set(token, pending_marker);
        }
        pending_marker = null;
    }
    const title_token = tokens.find(token => token.type === "heading" && token.depth === 1);
    const html = instance.parser(tokens)
        .replace(/<table>/g, `<div class="symi-table-scroll" role="region" aria-label="Table" tabindex="0"><table>`)
        .replace(/<\/table>/g, "</table></div>");
    return {
        html,
        headings,
        title: title_token != null ? plain_text_of_tokens(title_token.tokens) : "",
        description: first_paragraph_text(tokens),
        math_errors,
    };
}
