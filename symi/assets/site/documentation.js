(() => {
    const site_root = "/symi";
    const asset_root = `${site_root}/assets/documentation`;

    let site_manifest = null;
    let current_route = null;
    let search_entries_by_language = new Map();

    function escape_html(value) {
        return String(value)
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;")
            .replaceAll("'", "&#39;");
    }

    function identifier_for_heading(value) {
        return value.toLowerCase().replace(/<[^>]*>/g, "").replace(/[^a-z0-9_]+/g, "-").replace(/^-|-$/g, "");
    }

    function current_path_segments() {
        const prefix = `${site_root}/`;
        const path = window.location.pathname.startsWith(prefix)
            ? window.location.pathname.slice(prefix.length)
            : "";
        return path.split("/").filter(segment => segment !== "" && segment !== "index.html");
    }

    function language_record(language_identifier) {
        return site_manifest.languages.find(language => language.language_identifier === language_identifier)
            || site_manifest.languages[0];
    }

    function route_from_location() {
        const segments = current_path_segments();
        const language = language_record(segments[0]);
        const page_name = segments[1] || language.default_page;
        return { language_identifier: language.language_identifier, page_name };
    }

    function page_record(language_identifier, page_name) {
        return site_manifest.pages.find(page => page.page_identifier === page_name && page.canonical_urls[language_identifier] != null)
            || site_manifest.pages.find(page => page.page_identifier === language_record(language_identifier).default_page && page.canonical_urls[language_identifier] != null);
    }

    function route_url(language_identifier, page_name, anchor = "") {
        const suffix = anchor === "" ? "" : `#${encodeURIComponent(anchor)}`;
        return `${site_root}/${language_identifier}/${page_name}/${suffix}`;
    }

    function rewrite_link(target, language_identifier) {
        if (/^[a-z][a-z0-9+.-]*:/i.test(target) || target.startsWith("#") || target.startsWith("/")) {
            return target;
        }
        const [path, anchor = ""] = target.split("#", 2);
        const page_name = path.replace(/^\.\//, "").replace(/\.md$/, "");
        return route_url(language_identifier, page_name, anchor);
    }

    function inline_markup(source, language_identifier) {
        const escaped = escape_html(source);
        const code_segments = [];
        const code_replaced = escaped.replace(/`([^`]+)`/g, (_match, contents) => {
            const index = code_segments.push(`<code>${contents}</code>`) - 1;
            return `\u0000${index}\u0000`;
        });
        const linked = code_replaced.replace(/\[([^\]]+)\]\(([^)\s]+)(?:\s+&quot;[^&]*&quot;)?\)/g, (_match, label, target) => {
            const href = rewrite_link(target, language_identifier);
            const external_attributes = /^[a-z][a-z0-9+.-]*:/i.test(href) ? ' target="_blank" rel="noopener"' : "";
            return `<a href="${escape_html(href)}"${external_attributes}>${label}</a>`;
        });
        const emphasized = linked
            .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
            .replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, "<em>$1</em>");
        return emphasized.replace(/\u0000(\d+)\u0000/g, (_match, index) => code_segments[Number(index)]);
    }

    function render_mathematics(container) {
        if (typeof window.renderMathInElement !== "function") return;
        window.renderMathInElement(container, {
            delimiters: [
                { left: "\\(", right: "\\)", display: false },
                { left: "\\[", right: "\\]", display: true },
            ],
            ignoredTags: ["pre", "code", "script", "style", "textarea", "option"],
            throwOnError: false,
            strict: "warn",
        });
    }

    function markdown_to_html(markdown, language_identifier) {
        const lines = markdown.replaceAll("\r\n", "\n").split("\n");
        const output = [];
        let line_index = 0;
        let paragraph = [];
        let list_kind = null;
        let table_lines = [];

        function finish_paragraph() {
            if (paragraph.length > 0) {
                output.push(`<p>${inline_markup(paragraph.join(" "), language_identifier)}</p>`);
                paragraph = [];
            }
        }

        function finish_list() {
            if (list_kind !== null) {
                output.push(`</${list_kind}>`);
                list_kind = null;
            }
        }

        function finish_table() {
            if (table_lines.length > 0) {
                const rows = table_lines.filter(line => !/^\s*\|?\s*:?-{3,}/.test(line));
                const rendered_rows = rows.map((line, row_index) => {
                    const cells = line.replace(/^\s*\||\|\s*$/g, "").split("|");
                    const tag = row_index === 0 ? "th" : "td";
                    return `<tr>${cells.map(cell => `<${tag}>${inline_markup(cell.trim(), language_identifier)}</${tag}>`).join("")}</tr>`;
                });
                output.push(`<table>${rendered_rows.join("")}</table>`);
                table_lines = [];
            }
        }

        while (line_index < lines.length) {
            const line = lines[line_index];
            if (line.startsWith("```")) {
                finish_paragraph();
                finish_list();
                finish_table();
                const language = line.slice(3).trim();
                const code_lines = [];
                line_index += 1;
                while (line_index < lines.length && !lines[line_index].startsWith("```")) {
                    code_lines.push(lines[line_index]);
                    line_index += 1;
                }
                output.push(`<pre><code class="language-${escape_html(language)}">${escape_html(code_lines.join("\n"))}</code></pre>`);
            } else if (/^<a id="[A-Za-z0-9_-]+"><\/a>$/.test(line.trim())) {
                finish_paragraph();
                finish_list();
                finish_table();
                output.push(line.trim());
            } else if (/^(#{1,6})\s+/.test(line)) {
                finish_paragraph();
                finish_list();
                finish_table();
                const [, markers, contents] = line.match(/^(#{1,6})\s+(.+)$/);
                const level = markers.length;
                output.push(`<h${level} id="${identifier_for_heading(contents)}">${inline_markup(contents, language_identifier)}</h${level}>`);
            } else if (/^\s*[-*+]\s+/.test(line) || /^\s*\d+\.\s+/.test(line)) {
                finish_paragraph();
                finish_table();
                const ordered = /^\s*\d+\.\s+/.test(line);
                const next_kind = ordered ? "ol" : "ul";
                if (list_kind !== next_kind) {
                    finish_list();
                    output.push(`<${next_kind}>`);
                    list_kind = next_kind;
                }
                output.push(`<li>${inline_markup(line.replace(/^\s*(?:[-*+]|\d+\.)\s+/, ""), language_identifier)}</li>`);
            } else if (table_lines.length > 0 && line.includes("|")) {
                table_lines.push(line);
            } else if (
                line.includes("|")
                && line_index + 1 < lines.length
                && /^\s*\|?\s*:?-{3,}/.test(lines[line_index + 1])
            ) {
                finish_paragraph();
                finish_list();
                table_lines.push(line);
            } else if (line.trim() === "") {
                finish_paragraph();
                finish_list();
                finish_table();
            } else if (/^\s*>\s?/.test(line)) {
                finish_paragraph();
                finish_list();
                finish_table();
                output.push(`<blockquote>${inline_markup(line.replace(/^\s*>\s?/, ""), language_identifier)}</blockquote>`);
            } else {
                finish_list();
                finish_table();
                paragraph.push(line.trim());
            }
            line_index += 1;
        }
        finish_paragraph();
        finish_list();
        finish_table();
        return output.join("\n");
    }

    function render_language_selector() {
        const selector = document.getElementById("language-selector");
        selector.replaceChildren(...site_manifest.languages.map(language => {
            const option = document.createElement("option");
            option.value = language.language_identifier;
            option.textContent = language.label;
            option.selected = language.language_identifier === current_route.language_identifier;
            return option;
        }));
        selector.addEventListener("change", () => {
            const language = language_record(selector.value);
            const page = page_record(language.language_identifier, current_route.page_name);
            window.location.assign(route_url(language.language_identifier, page.page_identifier));
        });
    }

    async function navigation_entries(language_identifier) {
        const response = await fetch(`${asset_root}/navigation/${language_identifier}.json`);
        if (!response.ok) return [];
        return (await response.json()).entries || [];
    }

    async function render_navigation() {
        const navigation = document.getElementById("documentation-navigation");
        const entries = await navigation_entries(current_route.language_identifier);
        const entries_by_page = new Map();
        for (const entry of entries) {
            if (!entries_by_page.has(entry.page_identifier)) entries_by_page.set(entry.page_identifier, []);
            entries_by_page.get(entry.page_identifier).push(entry);
        }
        const fragment = document.createDocumentFragment();
        for (const category of site_manifest.categories) {
            const pages = site_manifest.pages.filter(page => page.category_identifier === category.category_identifier && page.canonical_urls[current_route.language_identifier] != null);
            if (pages.length === 0) continue;
            const section = document.createElement("section");
            const heading = document.createElement("h2");
            heading.textContent = category.title;
            section.append(heading);
            const list = document.createElement("ul");
            for (const page of pages) {
                const item = document.createElement("li");
                const link = document.createElement("a");
                link.href = route_url(current_route.language_identifier, page.page_identifier);
                link.textContent = page.title;
                if (page.page_identifier === current_route.page_name) link.classList.add("current");
                item.append(link);
                const page_entries = entries_by_page.get(page.page_identifier) || [];
                for (const entry of page_entries.filter(entry => ["function", "method", "constructor", "property"].includes(entry.result_kind)).slice(0, 40)) {
                    const member = document.createElement("a");
                    member.href = route_url(current_route.language_identifier, page.page_identifier, entry.anchor);
                    member.textContent = entry.qualified_name;
                    member.style.paddingLeft = "0.75rem";
                    item.append(member);
                }
                list.append(item);
            }
            section.append(list);
            fragment.append(section);
        }
        navigation.replaceChildren(fragment);
    }

    async function search_entries(language_identifier) {
        if (search_entries_by_language.has(language_identifier)) return search_entries_by_language.get(language_identifier);
        const response = await fetch(`${asset_root}/search/${language_identifier}.json`);
        const entries = response.ok ? ((await response.json()).entries || []) : [];
        search_entries_by_language.set(language_identifier, entries);
        return entries;
    }

    function render_search_results(entries) {
        const results = document.getElementById("search-results");
        const fragment = document.createDocumentFragment();
        for (const entry of entries.slice(0, 20)) {
            const item = document.createElement("li");
            const link = document.createElement("a");
            link.href = route_url(current_route.language_identifier, entry.page_identifier, entry.anchor);
            link.textContent = entry.qualified_name;
            const detail = document.createElement("small");
            detail.textContent = `${entry.result_kind} · ${entry.page_identifier}`;
            link.append(detail);
            item.append(link);
            fragment.append(item);
        }
        results.replaceChildren(fragment);
        results.hidden = entries.length === 0;
    }

    function attach_search() {
        const input = document.getElementById("documentation-search");
        input.addEventListener("input", async () => {
            const query = input.value.trim().toLowerCase();
            if (query === "") {
                render_search_results([]);
                return;
            }
            const entries = await search_entries(current_route.language_identifier);
            render_search_results(entries.filter(entry => `${entry.qualified_name} ${entry.page_identifier}`.toLowerCase().includes(query)));
        });
    }

    async function render_documentation() {
        const status = document.getElementById("documentation-status");
        const content = document.getElementById("documentation-content");
        const page = page_record(current_route.language_identifier, current_route.page_name);
        if (page == null) {
            status.textContent = "The requested documentation page does not exist.";
            return;
        }
        current_route.page_name = page.page_identifier;
        const path = page.language_paths[current_route.language_identifier];
        try {
            const response = await fetch(`${asset_root}/${path}`);
            if (!response.ok) throw new Error(`The server returned ${response.status}.`);
            content.innerHTML = markdown_to_html(await response.text(), current_route.language_identifier);
            render_mathematics(content);
            status.textContent = "";
            if (window.location.hash !== "") {
                document.getElementById(decodeURIComponent(window.location.hash.slice(1)))?.scrollIntoView();
            }
        } catch (error) {
            status.textContent = `Documentation could not be loaded: ${error.message}`;
        }
    }

    async function initialize() {
        const response = await fetch(`${asset_root}/site-manifest.json`);
        if (!response.ok) throw new Error("The site manifest is unavailable.");
        site_manifest = await response.json();
        current_route = route_from_location();
        render_language_selector();
        attach_search();
        await Promise.all([render_navigation(), render_documentation()]);
    }

    initialize().catch(error => {
        document.getElementById("documentation-status").textContent = `Documentation could not start: ${error.message}`;
    });
})();
