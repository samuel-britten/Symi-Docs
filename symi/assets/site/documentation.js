import { documentation_entry_url, search_documentation_entries } from "./documentation_search.js";

// The static site serves every page from `/symi/<language>/<page>/`, and every generated
// artifact from `/symi/assets/documentation/`. The site manifest lists the published
// languages; everything else is read from the same publication records the manual is built
// from.
export const site_root = "/symi";
export const documentation_base_path = `${site_root}/assets/documentation/`;

let site_manifest = { languages: [], pages: [], categories: [] };

function load_template_(identifier) {
    const template = document.getElementById(identifier);
    const template_element = template instanceof HTMLTemplateElement ? template.content.firstElementChild : null;
    if (!(template_element instanceof HTMLElement)) {
        throw new Error(`Template with identifier "${identifier}" not found.`);
    }
    return document.importNode(template_element, true);
}

export function available_documentation_languages() {
    return site_manifest.languages;
}

export function language_is_available(language) {
    return available_documentation_languages().some(item => item.language_identifier === language);
}

export function sanitize_page_name(page_name) {
    const cleaned = String(page_name || "").replace(/[^a-z0-9-]/g, "");
    return cleaned === "" ? "introduction" : cleaned;
}

export function sanitize_language(language) {
    const languages = available_documentation_languages();
    return languages.some(item => item.language_identifier === language)
        ? language
        : languages[0].language_identifier;
}

export function current_documentation_route() {
    const prefix = `${site_root}/`;
    const path = window.location.pathname.startsWith(prefix)
        ? window.location.pathname.slice(prefix.length)
        : "";
    const segments = path.split("/").filter(segment => segment !== "" && segment !== "index.html");
    return {
        language: sanitize_language(segments[0]),
        page_name: sanitize_page_name(segments[1]),
        anchor: window.location.hash.replace(/^#/, ""),
        neutral_root: segments.length === 0,
    };
}

export function rewrite_documentation_links(container, language) {
    for (const anchor of container.querySelectorAll("a")) {
        const href = anchor.getAttribute("href") || "";
        const [path, hash = ""] = href.split("#", 2);
        const page_route = path.match(new RegExp(`^${site_root}/([a-z]+)/([a-z0-9-]+)/?$`));
        if (path.endsWith(".md") && !href.includes("://")) {
            anchor.setAttribute("href", create_language_target(language, path.replace(/^\.\//, "").replace(/\.md$/, ""), hash));
        } else if (page_route != null && language_is_available(page_route[1])) {
            anchor.setAttribute("href", create_language_target(page_route[1], page_route[2], hash));
        } else if (href.includes("://")) {
            anchor.setAttribute("target", "_blank");
            anchor.setAttribute("rel", "noopener");
        }
    }
}

export function documentation_artifact_url(path) {
    return documentation_base_path + path;
}

export async function fetch_json(path) {
    const response = await fetch(documentation_artifact_url(path));
    if (!response.ok) {
        throw new Error("documentation artifact unavailable: " + path);
    }
    return await response.json();
}

function page_is_published(language, page_name) {
    return site_manifest.pages.some(page => (
        page.page_identifier === page_name && page.canonical_urls[language] != null
    ));
}

export function language_page_name(language, page_name) {
    const cleaned_page_name = sanitize_page_name(page_name);
    if (!cleaned_page_name.startsWith("getting-started-")) {
        return cleaned_page_name;
    }
    const language_guide = language === "wasm" ? "getting-started-javascript" : `getting-started-${language}`;
    return page_is_published(language, language_guide) ? language_guide : cleaned_page_name;
}

export async function fetch_markdown(page_name, language) {
    const path = `manual/${sanitize_language(language)}/${language_page_name(language, page_name)}.md`;
    const response = await fetch(documentation_artifact_url(path));
    if (!response.ok) {
        throw new Error("page not found");
    }
    return await response.text();
}

export function create_language_target(language, page_name, hash = "") {
    const target_language = sanitize_language(language);
    const target_page_name = language_page_name(target_language, page_name);
    return `${site_root}/${target_language}/${target_page_name}/${hash ? `#${hash}` : ""}`;
}

function language_guide_is_listed(page_identifier, language) {
    return !page_identifier.startsWith("getting-started-")
        || page_identifier === language_page_name(language, page_identifier);
}

function page_entries_for_language(manifest, language) {
    return (manifest.pages || [])
        .filter(page => page.canonical_urls != null && page.canonical_urls[language] != null)
        .filter(page => language_guide_is_listed(page.page_identifier, language))
        .map(page => ({
            title: page.title,
            page: page.page_identifier,
            category_identifier: page.category_identifier,
            href: create_language_target(language, page.page_identifier),
        }));
}

function attach_collapse_toggle(toggle, collapsible_list, initially_expanded) {
    const set_expanded = expanded => {
        collapsible_list.classList.toggle("hidden", !expanded);
        toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
    };
    toggle.addEventListener("click", () => set_expanded(collapsible_list.classList.contains("hidden")));
    set_expanded(initially_expanded);
}

function create_navigation_section(entry, expanded_page_name) {
    const element = load_template_("documentation-navigation-section_");
    element.querySelector(".symi-documentation-section-label").textContent = entry.title;
    attach_collapse_toggle(
        element.querySelector(".symi-documentation-section-toggle"),
        element.querySelector(".symi-documentation-section-entries"),
        entry.page === expanded_page_name,
    );
    return element;
}

export function navigation_expanded_page_name(manifest, current_page_name) {
    const default_page_name = sanitize_page_name((manifest || {}).default_page || "introduction");
    return current_page_name === default_page_name ? null : current_page_name;
}

export function category_is_expanded(category, expanded_page_name) {
    return expanded_page_name != null && category.pages.some(page => page.page === expanded_page_name);
}

function create_navigation_plain_entry(entry, current_page_name) {
    const element = load_template_("documentation-navigation-plain_");
    const link = element.querySelector(".symi-documentation-plain-link");
    link.textContent = entry.title;
    link.setAttribute("href", entry.href);
    if (entry.page === current_page_name) {
        link.classList.add("symi-documentation-current");
    }
    return element;
}

export function navigation_tree(manifest, placement_entries, language) {
    const pages = page_entries_for_language(manifest, language);
    const entries_by_page = new Map();
    for (const entry of placement_entries) {
        if (!entries_by_page.has(entry.page_identifier)) {
            entries_by_page.set(entry.page_identifier, []);
        }
        entries_by_page.get(entry.page_identifier).push(entry);
    }
    const pages_by_category = new Map();
    for (const page of pages) {
        if (!pages_by_category.has(page.category_identifier)) {
            pages_by_category.set(page.category_identifier, []);
        }
        pages_by_category.get(page.category_identifier).push({
            ...page,
            entries: (entries_by_page.get(page.page) || [])
                .filter(entry => entry.result_kind === "function" || entry.result_kind === "method" || entry.result_kind === "constructor" || entry.result_kind === "property")
                .filter(entry => entry.page_identifier !== "api-reference")
                .filter(entry => language !== "wasm" || entry.surface === "javascript_facade")
                .sort((left, right) => (
                    left.qualified_name.localeCompare(right.qualified_name)
                    || left.placement_identifier.localeCompare(right.placement_identifier)
                )),
        });
    }
    return (manifest.categories || []).map(category => ({
        ...category,
        pages: pages_by_category.get(category.category_identifier) || [],
    })).filter(category => category.pages.length > 0);
}

export function navigation_entry_artifact(manifest, language) {
    const navigation_artifact = (manifest.navigation_artifacts || []).find(artifact => artifact.language === language);
    if (navigation_artifact != null) {
        return navigation_artifact.path;
    }
    const search_artifact = (manifest.search_artifacts || []).find(artifact => artifact.language === language);
    if (search_artifact != null) {
        return search_artifact.path;
    }
    return manifest.search_artifact || null;
}

export async function load_navigation_entries(manifest, language) {
    const artifact_path = navigation_entry_artifact(manifest, language);
    if (artifact_path == null) {
        return null;
    }
    try {
        const artifact = await fetch_json(artifact_path);
        return artifact.entries || [];
    } catch (error) {
        console.warn("Documentation navigation artifact is unavailable", error);
        return null;
    }
}

export async function render_navigation(current_page_name, language, manifest) {
    const navigation = document.getElementById("documentation_navigation");
    const list = load_template_("documentation-navigation-list_");
    const entries = await load_navigation_entries(manifest, language);
    const expanded_page_name = navigation_expanded_page_name(manifest, language_page_name(language, current_page_name));
    for (const category of navigation_tree(manifest, entries || [], language)) {
        const category_element = load_template_("documentation-navigation-category_");
        category_element.querySelector(".symi-documentation-category-label").textContent = category.title;
        const category_sections = category_element.querySelector(".symi-documentation-category-sections");
        for (const page of category.pages) {
            if (page.entries.length === 0) {
                category_sections.appendChild(create_navigation_plain_entry(page, current_page_name));
                continue;
            }
            const section = create_navigation_section(page, expanded_page_name);
            const entries_list = section.querySelector(".symi-documentation-section-entries");
            for (const entry of page.entries) {
                const entry_element = load_template_("documentation-navigation-entry_");
                const entry_link = entry_element.querySelector(".symi-documentation-entry-link");
                entry_link.textContent = entry.qualified_name;
                entry_link.setAttribute("href", create_language_target(language, entry.page_identifier, entry.anchor));
                entries_list.appendChild(entry_element);
            }
            category_sections.appendChild(section);
        }
        attach_collapse_toggle(
            category_element.querySelector(".symi-documentation-category-toggle"),
            category_sections,
            category_is_expanded(category, expanded_page_name),
        );
        list.appendChild(category_element);
    }
    navigation.textContent = "";
    navigation.appendChild(list);
    return entries != null;
}

function language_target_for_current_page(manifest, language, current_language, current_page_name, hash, cross_language_targets) {
    const current_target = (cross_language_targets || []).find(target => (
        target.language === current_language
        && target.page_identifier === current_page_name
        && target.anchor === hash
    ));
    if (current_target != null) {
        const target = (cross_language_targets || []).find(candidate => (
            candidate.language === language
            && candidate.category_identifier === current_target.category_identifier
            && candidate.semantic_name === current_target.semantic_name
        ));
        if (target != null) {
            return create_language_target(language, target.page_identifier, target.anchor);
        }
        const fallback_page = (manifest.pages || []).find(page => (
            page.category_identifier === current_target.category_identifier
        ));
        if (fallback_page != null) {
            const fallback_target = create_language_target(language, fallback_page.page_identifier);
            return `${fallback_target}?unavailable=${encodeURIComponent(hash)}`;
        }
    }
    return create_language_target(language, current_page_name, hash);
}

let remove_language_selector_dismissal = null;

function render_language_selector(manifest, language, current_page_name, cross_language_targets) {
    const mount = document.getElementById("documentation_language_selector");
    mount.textContent = "";
    if (remove_language_selector_dismissal != null) {
        remove_language_selector_dismissal();
        remove_language_selector_dismissal = null;
    }
    const selector = load_template_("documentation-language-selector_");
    const button = selector.querySelector(".symi-documentation-language-button");
    const label = selector.querySelector(".symi-documentation-language-label");
    const list = selector.querySelector(".symi-documentation-language-list");
    const languages = available_documentation_languages();
    const current = languages.find(item => item.language_identifier === language) || languages[0];
    label.textContent = current.label;
    let active_index = languages.findIndex(item => item.language_identifier === language);
    const set_open = open => {
        list.classList.toggle("hidden", !open);
        button.setAttribute("aria-expanded", open ? "true" : "false");
        button.setAttribute("aria-activedescendant", open ? list.children[active_index]?.querySelector("a")?.id || "" : "");
    };
    languages.forEach((item, index) => {
        const option = load_template_("documentation-language-option_");
        const link = option.querySelector(".symi-documentation-language-option");
        const selected_marker = option.querySelector(".symi-documentation-language-selected");
        const hash = current_documentation_route().anchor;
        link.textContent = item.label;
        link.prepend(selected_marker);
        selected_marker.textContent = item.language_identifier === language ? "✓" : "";
        link.setAttribute("href", language_target_for_current_page(manifest, item.language_identifier, language, current_page_name, hash, cross_language_targets));
        link.setAttribute("aria-selected", item.language_identifier === language ? "true" : "false");
        option.setAttribute("aria-selected", item.language_identifier === language ? "true" : "false");
        link.addEventListener("focus", () => { active_index = index; });
        link.addEventListener("click", () => {
            write_stored_language(item.language_identifier);
            set_open(false);
        });
        list.appendChild(option);
    });
    button.addEventListener("click", () => set_open(list.classList.contains("hidden")));
    button.addEventListener("keydown", event => {
        if (["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft", "Home", "End"].includes(event.key)) {
            event.preventDefault();
            if (event.key === "Home") active_index = 0;
            else if (event.key === "End") active_index = languages.length - 1;
            else if (["ArrowDown", "ArrowRight"].includes(event.key)) active_index = (active_index + 1) % languages.length;
            else active_index = (active_index - 1 + languages.length) % languages.length;
            list.children[active_index]?.querySelector("a")?.focus();
            set_open(true);
        } else if (event.key === "Escape") {
            set_open(false);
            button.focus();
        }
    });
    const dismiss_selector = event => {
        if (!selector.contains(event.target)) set_open(false);
    };
    document.addEventListener("click", dismiss_selector);
    remove_language_selector_dismissal = () => document.removeEventListener("click", dismiss_selector);
    mount.appendChild(selector);
}

const stored_language_key = "symi-documentation-language";

function read_stored_language() {
    try {
        return localStorage.getItem(stored_language_key);
    } catch (error) {
        return null;
    }
}

function write_stored_language(language) {
    try {
        localStorage.setItem(stored_language_key, language);
    } catch (error) {
        console.warn("The documentation language preference could not be stored", error);
    }
}

export function show_degraded_notice(message) {
    const notice = document.getElementById("documentation-unavailable-notice");
    if (notice == null) {
        return;
    }
    notice.textContent = message;
    notice.classList.remove("hidden");
}

function render_layer_notice(language) {
    const notice = document.getElementById("documentation_layer_text");
    if (language === "wasm") {
        notice.textContent = "WASM / JavaScript documentation presents the recommended facade first; raw wasm-bindgen exports are labeled separately in the reference.";
    } else if (language === "rust") {
        notice.textContent = "The Rust manual covers the recommended facade. The complete native crate is available in the Rustdoc reference.";
    } else {
        notice.textContent = "";
    }
    const unavailable_target = new URLSearchParams(window.location.search).get("unavailable");
    const unavailable_notice = document.getElementById("documentation-unavailable-notice");
    if (unavailable_target != null) {
        unavailable_notice.textContent = `The placement ${unavailable_target} is not published in this language; showing its category instead.`;
        unavailable_notice.classList.remove("hidden");
    } else {
        unavailable_notice.textContent = "";
        unavailable_notice.classList.add("hidden");
    }
}

const loaded_search_artifacts = new Map();

export function search_artifact_paths(manifest, language, all_languages) {
    const artifacts = (manifest.search_artifacts || []).filter(artifact => language_is_available(artifact.language));
    if (all_languages && artifacts.length > 0) {
        return artifacts.map(artifact => artifact.path);
    }
    const artifact = artifacts.find(item => item.language === language);
    if (artifact != null) {
        return [artifact.path];
    }
    return manifest.search_artifact != null ? [manifest.search_artifact] : [];
}

async function load_search_entries(manifest, language, all_languages) {
    const paths = search_artifact_paths(manifest, language, all_languages);
    if (paths.length === 0) {
        throw new Error("documentation search artifact is unavailable");
    }
    const artifacts = await Promise.all(paths.map(path => {
        if (!loaded_search_artifacts.has(path)) {
            loaded_search_artifacts.set(path, fetch_json(path));
        }
        return loaded_search_artifacts.get(path);
    }));
    return artifacts.flatMap(artifact => artifact.entries || []);
}

function render_search_result(result, language, query) {
    const element = load_template_("documentation-search-result_");
    const link = element.querySelector(".symi-documentation-search-result-link");
    const entry_language = language === "all" ? result.language : language;
    const target = new URL(documentation_entry_url(result, entry_language), window.location.origin);
    target.searchParams.set("q", query);
    link.setAttribute("href", target.pathname + target.search + target.hash);
    element.querySelector(".symi-documentation-search-result-name").textContent = result.qualified_name;
    element.querySelector(".symi-documentation-search-result-meta").textContent = `${result.language} · ${result.category_identifier} · ${result.result_kind}`;
    return element;
}

async function render_search(manifest, language) {
    const mount = document.getElementById("documentation_search");
    mount.textContent = "";
    const search = load_template_("documentation-search_");
    const input = search.querySelector("#symi-documentation-search-input");
    const scope = search.querySelector(".symi-documentation-search-scope");
    const status = search.querySelector(".symi-documentation-search-status");
    const results = search.querySelector(".symi-documentation-search-results");
    let all_languages = false;
    let entries = null;
    const category_order = new Map((manifest.categories || []).map(category => [category.category_identifier, category.order]));
    const update = async () => {
        const query = input.value.trim();
        results.textContent = "";
        if (query === "") {
            results.classList.add("hidden");
            status.textContent = "Search by name, concept, parameter, option, or result type.";
            return;
        }
        try {
            entries = await load_search_entries(manifest, language, all_languages);
        } catch (error) {
            status.textContent = "Search is unavailable. Use the category navigation.";
            return;
        }
        const matches = search_documentation_entries(entries, query, { language: all_languages ? "all" : language, category_order });
        results.classList.toggle("hidden", matches.length === 0);
        for (const result of matches) results.appendChild(render_search_result(result, language, query));
        status.textContent = `${matches.length} result${matches.length === 1 ? "" : "s"}`;
    };
    scope.addEventListener("click", async () => {
        all_languages = !all_languages;
        scope.setAttribute("aria-pressed", all_languages ? "true" : "false");
        scope.textContent = all_languages ? "Local" : "All";
        await update();
    });
    input.addEventListener("input", update);
    input.addEventListener("keydown", event => {
        if (event.key === "ArrowDown") {
            const first_result = results.querySelector("a");
            if (first_result != null) {
                event.preventDefault();
                first_result.focus();
            }
        }
        if (event.key === "Enter") {
            const first_result = results.querySelector("a");
            if (first_result != null) {
                event.preventDefault();
                first_result.click();
            }
        }
        if (event.key === "Escape") {
            input.value = "";
            update();
        }
    });
    results.addEventListener("keydown", event => {
        const links = Array.from(results.querySelectorAll("a"));
        const current_index = links.indexOf(document.activeElement);
        if (event.key === "ArrowDown" && current_index < links.length - 1) {
            event.preventDefault();
            links[current_index + 1].focus();
        } else if (event.key === "ArrowUp") {
            event.preventDefault();
            if (current_index <= 0) input.focus();
            else links[current_index - 1].focus();
        } else if (event.key === "Escape") {
            event.preventDefault();
            input.focus();
        }
    });
    mount.appendChild(search);
    const query = new URLSearchParams(window.location.search).get("q");
    if (query != null) {
        input.value = query;
        update();
    }
}

export function render_mathematics_markup(source, display_mode) {
    if (typeof katex === "undefined" || typeof katex.renderToString !== "function") {
        const delimiters = display_mode ? ["\\[", "\\]"] : ["\\(", "\\)"];
        return `<code class="symi-documentation-math-source">${delimiters[0]}${source}${delimiters[1]}</code>`;
    }
    try {
        return katex.renderToString(source, {
            displayMode: display_mode,
            throwOnError: true,
            strict: "warn",
            trust: false,
        });
    } catch (error) {
        return `<code class="symi-documentation-math-source" data-math-error="true">${source}</code>`;
    }
}

export function mathematics_extension() {
    const tokenize = (text, opening, closing, type) => {
        if (!text.startsWith(opening)) {
            return undefined;
        }
        const closing_index = text.indexOf(closing, opening.length);
        if (closing_index < 0) {
            return undefined;
        }
        return {
            type: type,
            raw: text.slice(0, closing_index + closing.length),
            text: text.slice(opening.length, closing_index),
        };
    };
    return {
        extensions: [
            {
                name: "inline_mathematics",
                level: "inline",
                start(text) { return text.indexOf("\\("); },
                tokenizer(text) { return tokenize(text, "\\(", "\\)", "inline_mathematics"); },
                renderer(token) { return render_mathematics_markup(token.text, false); },
            },
            {
                name: "display_mathematics",
                level: "inline",
                start(text) { return text.indexOf("\\["); },
                tokenizer(text) { return tokenize(text, "\\[", "\\]", "display_mathematics"); },
                renderer(token) { return render_mathematics_markup(token.text, true); },
            },
        ],
    };
}

let mathematics_extension_registered = false;

export function configure_markdown() {
    if (mathematics_extension_registered || typeof marked === "undefined") {
        return;
    }
    marked.use(mathematics_extension());
    mathematics_extension_registered = true;
}

export function assign_heading_anchors(container) {
    for (const heading of container.querySelectorAll("h3")) {
        const heading_match = heading.textContent.trim().match(/^[A-Za-z0-9_.]+/);
        if (heading_match != null && document.getElementById(heading_match[0]) == null) {
            heading.id = heading_match[0];
        }
    }
}

export function render_documentation_math(container) {
    if (typeof window.renderMathInElement !== "function") {
        return { rendered: false, errors: ["KaTeX auto-render is unavailable"] };
    }
    const errors = [];
    window.renderMathInElement(container, {
        delimiters: [
            { left: "\\(", right: "\\)", display: false },
            { left: "\\[", right: "\\]", display: true },
        ],
        ignoredTags: ["pre", "code", "script", "style", "textarea", "option"],
        throwOnError: false,
        strict: "warn",
        errorCallback: (error, source) => {
            errors.push({ message: String(error), source: String(source) });
        },
    });
    if (errors.length > 0) {
        const notice = document.createElement("p");
        notice.className = "symi-documentation-math-error";
        notice.setAttribute("role", "status");
        notice.textContent = "Some mathematical notation could not be rendered. Source: ";
        const source = document.createElement("code");
        source.textContent = errors.map(error => error.source).join("; ");
        notice.appendChild(source);
        container.prepend(notice);
    }
    return { rendered: true, errors };
}

export function scroll_to_hash() {
    const name = decodeURIComponent(current_documentation_route().anchor);
    if (name === "") return;
    const target = document.getElementById(name);
    if (target == null) return;
    const container = document.getElementById("documentation_main");
    if (container == null || !container.contains(target)) {
        target.scrollIntoView({ block: "start" });
        return;
    }
    container.scrollTop += target.getBoundingClientRect().top - container.getBoundingClientRect().top;
}

export async function render_page(page_name, language) {
    const content = document.getElementById("documentation_content");
    configure_markdown();
    try {
        const page_markdown = await fetch_markdown(page_name, language);
        content.innerHTML = marked.parse(page_markdown);
        rewrite_documentation_links(content, language);
        assign_heading_anchors(content);
        render_documentation_math(content);
        scroll_to_hash();
    } catch (error) {
        content.innerHTML = marked.parse("# Page not found\n\nThe requested documentation page does not exist. [Back to the introduction](introduction.md).");
        rewrite_documentation_links(content, language);
        render_documentation_math(content);
    }
}

async function render_documentation() {
    site_manifest = await fetch_json("site-manifest.json");
    const route = current_documentation_route();
    const current_page_name = route.page_name;
    const current_language = route.language;
    if (route.neutral_root) {
        const stored_language = sanitize_language(read_stored_language());
        window.location.replace(create_language_target(stored_language, current_page_name, route.anchor));
        return;
    }
    let manifest = null;
    try {
        manifest = await fetch_json(`publication/${current_language}.json`);
    } catch (error) {
        await render_page(current_page_name, current_language);
        show_degraded_notice("Documentation metadata is unavailable, so navigation and search are disabled. The page content below is current.");
        return;
    }
    render_layer_notice(current_language);
    const [navigation_outcome, search_outcome] = await Promise.allSettled([
        render_navigation(current_page_name, current_language, manifest),
        render_search(manifest, current_language),
        render_page(current_page_name, current_language),
    ]);
    if (navigation_outcome.status !== "fulfilled" || navigation_outcome.value !== true) {
        show_degraded_notice("The generated navigation index is unavailable, so the sidebar lists pages without their individual entries.");
    }
    if (search_outcome.status !== "fulfilled") {
        console.warn("Documentation search could not be initialised", search_outcome.reason);
    }
    let cross_language_targets = [];
    try {
        const cross_language = await fetch_json(manifest.cross_language_target_artifact || "cross_language_targets.json");
        cross_language_targets = cross_language.targets || [];
    } catch (error) {
        console.warn("Cross-language documentation targets are unavailable", error);
    }
    render_language_selector(manifest, current_language, current_page_name, cross_language_targets);
}

window.addEventListener("hashchange", () => scroll_to_hash());
render_documentation().catch(error => {
    show_degraded_notice(`The documentation could not start: ${error.message}`);
});
