import { create_routes, documentation_artifact_url, documentation_entry_url } from "./documentation_routes.js";
import { language_menu_items_html, navigation_entries_html } from "./documentation_layout.js";
import { copy_text, escape_html } from "./documentation_render.js";
import { first_sentence, prepare_search_concept, prepare_search_entry, search_documentation } from "./documentation_search.js";

// Every route arrives prerendered: article, navigation, outline, and language menu are
// already in the HTML. This script only adds behaviour — theme choice, the phone navigation
// drawer, on-demand topic lists, semantic language switching, search, copy controls, and
// deep-link reveal — and the page stays fully readable when it does not run.

const theme_storage_key = "symi-documentation-theme";
const language_storage_key = "symi-documentation-language";
const theme_choices = ["system", "light", "dark"];
const theme_labels = { system: "match system", light: "light", dark: "dark" };
const phone_layout_query = window.matchMedia("(max-width: 56rem)");

const state = {
    site_manifest: null,
    routes: null,
    language: document.documentElement.dataset.language || "python",
    page: document.body.dataset.page || "",
    navigation_entries: null,
    cross_language_targets: null,
};

async function fetch_json(path) {
    const response = await fetch(documentation_artifact_url(path));
    if (!response.ok) {
        throw new Error(`documentation artifact unavailable: ${path}`);
    }
    return await response.json();
}

function read_storage(key) {
    try {
        return localStorage.getItem(key);
    } catch (error) {
        return null;
    }
}

function write_storage(key, value) {
    try {
        if (value == null) {
            localStorage.removeItem(key);
        } else {
            localStorage.setItem(key, value);
        }
    } catch (error) {
        console.warn("A documentation preference could not be stored", error);
    }
}

let status_region = null;

function announce(message) {
    if (status_region == null) {
        status_region = document.createElement("p");
        status_region.className = "symi-visually-hidden";
        status_region.setAttribute("role", "status");
        status_region.setAttribute("aria-live", "polite");
        document.body.appendChild(status_region);
    }
    status_region.textContent = "";
    window.setTimeout(() => { status_region.textContent = message; }, 30);
}

function initialize_theme() {
    const button = document.querySelector(".symi-theme-button");
    if (button == null) {
        return;
    }
    const apply = choice => {
        if (choice === "system") {
            delete document.documentElement.dataset.theme;
        } else {
            document.documentElement.dataset.theme = choice;
        }
        button.dataset.themeChoice = choice;
        button.setAttribute("aria-label", `Colour theme: ${theme_labels[choice]}`);
        button.title = `Colour theme: ${theme_labels[choice]}`;
    };
    const stored = read_storage(theme_storage_key);
    let choice = theme_choices.includes(stored) ? stored : "system";
    apply(choice);
    button.hidden = false;
    button.addEventListener("click", () => {
        choice = theme_choices[(theme_choices.indexOf(choice) + 1) % theme_choices.length];
        write_storage(theme_storage_key, choice === "system" ? null : choice);
        apply(choice);
        announce(`Colour theme: ${theme_labels[choice]}`);
    });
}

function initialize_navigation_drawer() {
    const menu_button = document.querySelector(".symi-menu-button");
    const sidebar = document.getElementById("documentation_sidebar");
    const backdrop = document.querySelector(".symi-drawer-backdrop");
    const close_button = document.querySelector(".symi-sidebar-close");
    if (menu_button == null || sidebar == null || backdrop == null) {
        return;
    }
    const obscured = () => [
        document.querySelector(".symi-skip-link"),
        document.querySelector(".symi-header"),
        document.getElementById("documentation_main"),
        document.querySelector(".symi-outline"),
    ].filter(element => element != null);
    let open = false;
    const set_open = (next_open, return_focus) => {
        open = next_open;
        sidebar.classList.toggle("symi-drawer-open", open);
        backdrop.hidden = !open;
        menu_button.setAttribute("aria-expanded", open ? "true" : "false");
        if (open) {
            sidebar.setAttribute("role", "dialog");
            sidebar.setAttribute("aria-modal", "true");
        } else {
            sidebar.removeAttribute("role");
            sidebar.removeAttribute("aria-modal");
        }
        for (const element of obscured()) {
            element.inert = open;
        }
        document.body.style.overflow = open ? "hidden" : "";
        if (open) {
            const current = sidebar.querySelector("[aria-current='page']");
            (current || close_button || sidebar).focus({ preventScroll: true });
            if (current != null) {
                current.scrollIntoView({ block: "center" });
            }
        } else if (return_focus) {
            menu_button.focus();
        }
    };
    menu_button.hidden = false;
    menu_button.addEventListener("click", () => set_open(true, false));
    close_button?.addEventListener("click", () => set_open(false, true));
    backdrop.addEventListener("click", () => set_open(false, true));
    document.addEventListener("keydown", event => {
        if (open && event.key === "Escape") {
            event.preventDefault();
            set_open(false, true);
        }
    });
    sidebar.addEventListener("click", event => {
        if (open && event.target.closest("a") != null) {
            set_open(false, false);
        }
    });
    phone_layout_query.addEventListener("change", () => {
        if (!phone_layout_query.matches && open) {
            set_open(false, false);
        }
    });
}

async function navigation_entries() {
    if (state.navigation_entries == null) {
        const artifact = (state.publication.navigation_artifacts || []).find(item => item.language === state.language);
        state.navigation_entries = artifact == null
            ? Promise.reject(new Error("no navigation artifact"))
            : fetch_json(artifact.path).then(record => record.entries || []);
    }
    return await state.navigation_entries;
}

function initialize_navigation_expansion() {
    for (const button of document.querySelectorAll(".symi-nav-expand")) {
        const list = document.getElementById(button.getAttribute("aria-controls"));
        const label = button.querySelector(".symi-visually-hidden");
        const page_title = button.parentElement.querySelector(".symi-nav-page-link")?.textContent || "this page";
        button.addEventListener("click", async () => {
            const expanded = button.getAttribute("aria-expanded") !== "true";
            button.setAttribute("aria-expanded", expanded ? "true" : "false");
            label.textContent = `${expanded ? "Hide" : "Show"} entries in ${page_title}`;
            list.hidden = !expanded;
            if (!expanded || list.dataset.loaded === "true") {
                return;
            }
            list.innerHTML = `<li class="symi-nav-loading">Loading entries…</li>`;
            try {
                const entries = (await navigation_entries()).filter(entry => entry.page_identifier === button.dataset.page);
                list.innerHTML = navigation_entries_html(entries, state.routes, state.language);
                list.dataset.loaded = "true";
            } catch (error) {
                list.innerHTML = `<li class="symi-nav-loading">Entries are unavailable; open the page instead.</li>`;
            }
        });
    }
}

async function cross_language_targets() {
    if (state.cross_language_targets == null) {
        state.cross_language_targets = fetch_json(state.publication.cross_language_target_artifact || "cross_language_targets.json")
            .then(record => record.targets || [])
            .catch(error => {
                console.warn("Cross-language documentation targets are unavailable", error);
                return [];
            });
    }
    return await state.cross_language_targets;
}

function initialize_language_menu() {
    const menu = document.querySelector(".symi-language-menu");
    if (menu == null) {
        return;
    }
    const list = menu.querySelector(".symi-language-list");
    const summary = menu.querySelector("summary");
    const refresh = async () => {
        const anchor = decodeURIComponent(window.location.hash.replace(/^#/, ""));
        if (anchor === "") {
            return;
        }
        const targets = await cross_language_targets();
        list.innerHTML = language_menu_items_html({
            site_manifest: state.site_manifest,
            routes: state.routes,
            language: state.language,
            current_page: state.page,
            anchor,
            cross_language_targets: targets,
        });
    };
    menu.addEventListener("toggle", () => {
        if (menu.open) {
            refresh();
        }
    });
    list.addEventListener("click", event => {
        const option = event.target.closest("[data-language]");
        if (option != null) {
            write_storage(language_storage_key, option.dataset.language);
        }
    });
    menu.addEventListener("keydown", event => {
        if (event.key === "Escape" && menu.open) {
            event.preventDefault();
            menu.open = false;
            summary.focus();
        } else if ((event.key === "ArrowDown" || event.key === "ArrowUp") && menu.open) {
            const options = [...list.querySelectorAll("a")];
            const index = options.indexOf(document.activeElement);
            const next = event.key === "ArrowDown" ? Math.min(index + 1, options.length - 1) : Math.max(index - 1, 0);
            event.preventDefault();
            options[index < 0 ? 0 : next]?.focus();
        }
    });
    document.addEventListener("click", event => {
        if (menu.open && !menu.contains(event.target)) {
            menu.open = false;
        }
    });
}

function page_title(page_identifier) {
    return (state.site_manifest.pages.find(page => page.page_identifier === page_identifier) || {}).title || page_identifier;
}

function language_label(language) {
    return (state.site_manifest.languages.find(item => item.language_identifier === language) || {}).label || language;
}

function other_receiver_labels(result) {
    const primary = result.primary;
    const labels = [
        ...result.alternates.map(entry => entry.owner_label),
        ...(primary.calling_forms || []).map(calling_form => calling_form.owner_label),
    ];
    return labels.filter((label, index) =>
        label && label !== primary.owner_label && labels.indexOf(label) === index);
}

function entry_result_html(result, all_languages) {
    const primary = result.primary;
    // One operation is one result, so every other receiver that reaches it — a merged
    // entry or one of this entry's own calling forms — is offered inside that result.
    const other_receivers = other_receiver_labels(result);
    const alternates = other_receivers.length > 0 ? ` · also ${other_receivers.join(", ")}` : "";
    const meta = `${primary.owner_label} · ${page_title(primary.page_identifier)}${alternates}`;
    const summary = first_sentence(primary.summary);
    // A member of an object is shown with its owner, so that two same-named members are told
    // apart in the result list itself rather than only after following one of them.
    const result_name = primary.qualified_display_name || primary.display_name;
    const link = `<a class="symi-search-result" href="${escape_html(documentation_entry_url(primary))}">`
        + `<span class="symi-search-result-heading"><span class="symi-search-result-name">${escape_html(result_name)}</span>`
        + `<span class="symi-search-result-meta">${escape_html(all_languages ? `${language_label(primary.language)} · ${meta}` : meta)}</span></span>`
        + (summary ? `<span class="symi-search-result-summary">${escape_html(summary)}</span>` : "")
        + `</a>`;
    const languages = all_languages && result.languages.length > 1
        ? `<ul class="symi-search-result-languages" aria-label="${escape_html(primary.display_name)} in other languages">`
            + result.languages.map(entry => (
                `<li><a class="symi-search-language-link" href="${escape_html(documentation_entry_url(entry))}">${escape_html(language_label(entry.language))}</a></li>`
            )).join("")
            + `</ul>`
        : "";
    return `<li class="symi-search-group">${link}${languages ? `<div class="symi-search-all-item">${languages}</div>` : ""}</li>`;
}

function concept_result_html(result) {
    const concept = result.concept;
    const href = state.routes.create_language_target(state.language, concept.page_identifier, concept.anchor || "");
    const meta = concept.depth === 1 ? "Page" : `Section of ${concept.page_title}`;
    return `<li class="symi-search-group"><a class="symi-search-result" href="${escape_html(href)}">`
        + `<span class="symi-search-result-heading"><span>${escape_html(concept.title)}</span><span class="symi-search-result-meta">${escape_html(meta)}</span></span>`
        + `</a></li>`;
}

function initialize_search() {
    const container = document.querySelector(".symi-search");
    const toggle = document.querySelector(".symi-search-button");
    if (container == null) {
        return;
    }
    const input = container.querySelector(".symi-search-input");
    const panel = container.querySelector(".symi-search-panel");
    const status = container.querySelector(".symi-search-status");
    const results = container.querySelector(".symi-search-results");
    const scopes = [...container.querySelectorAll(".symi-search-scope")];
    const category_order = new Map((state.site_manifest.categories || []).map((category, index) => [category.category_identifier, index]));
    const language_order = new Map((state.site_manifest.languages || []).map((language, index) => [language.language_identifier, language.language_identifier === state.language ? -1 : index]));
    const loaded = new Map();
    let all_languages = false;
    let generation = 0;
    const load_entries = path => {
        if (!loaded.has(path)) {
            loaded.set(path, fetch_json(path).then(record => (record.entries || []).map(prepare_search_entry)));
        }
        return loaded.get(path);
    };
    const load_concepts = () => {
        const path = `concepts/${state.language}.json`;
        if (!loaded.has(path)) {
            loaded.set(path, fetch_json(path).then(record => (record.concepts || []).map(prepare_search_concept)).catch(() => []));
        }
        return loaded.get(path);
    };
    const artifact_paths = () => {
        const artifacts = (state.publication.presentation_artifacts || []).filter(artifact => state.routes.language_is_available(artifact.language));
        return (all_languages ? artifacts : artifacts.filter(artifact => artifact.language === state.language)).map(artifact => artifact.path);
    };
    const set_panel_open = open => {
        panel.hidden = !open;
        input.setAttribute("aria-expanded", open ? "true" : "false");
    };
    const update = async () => {
        const query = input.value.trim();
        const current_generation = ++generation;
        if (query === "") {
            results.innerHTML = "";
            status.textContent = "Type a name, concept, parameter, or result type.";
            set_panel_open(false);
            return;
        }
        set_panel_open(true);
        status.textContent = "Loading the search index…";
        let entries;
        let concepts;
        try {
            [entries, concepts] = await Promise.all([
                Promise.all(artifact_paths().map(load_entries)).then(groups => groups.flat()),
                load_concepts(),
            ]);
        } catch (error) {
            if (current_generation === generation) {
                results.innerHTML = "";
                status.textContent = "Search is unavailable right now. Use the topic list instead.";
            }
            return;
        }
        if (current_generation !== generation) {
            return;
        }
        const matches = search_documentation(entries, concepts, query, { all_languages, category_order, language_order });
        results.innerHTML = matches.map(result => (result.kind === "entry" ? entry_result_html(result, all_languages) : concept_result_html(result))).join("");
        status.textContent = matches.length === 0
            ? `No matches for “${query}”${all_languages ? "" : " in this language — try All languages"}.`
            : `${matches.length}${matches.length === 40 ? "+" : ""} result${matches.length === 1 ? "" : "s"}${all_languages ? " across languages" : ""}`;
    };
    let debounce = null;
    input.addEventListener("input", () => {
        window.clearTimeout(debounce);
        debounce = window.setTimeout(update, 60);
    });
    input.addEventListener("focus", () => {
        if (input.value.trim() !== "") {
            set_panel_open(true);
        }
    });
    for (const scope of scopes) {
        scope.addEventListener("click", () => {
            all_languages = scope.dataset.scope === "all";
            for (const other of scopes) {
                other.setAttribute("aria-pressed", other === scope ? "true" : "false");
            }
            update();
            input.focus();
        });
    }
    const result_links = () => [...results.querySelectorAll("a")];
    input.addEventListener("keydown", event => {
        if (event.key === "ArrowDown") {
            const first = result_links()[0];
            if (first != null) {
                event.preventDefault();
                first.focus();
            }
        } else if (event.key === "Enter") {
            const first = result_links()[0];
            if (first != null) {
                event.preventDefault();
                first.click();
            }
        } else if (event.key === "Escape") {
            event.preventDefault();
            if (!panel.hidden) {
                set_panel_open(false);
            } else if (input.value !== "") {
                input.value = "";
                update();
            } else if (container.classList.contains("symi-search-open")) {
                close_phone_search(true);
            }
        }
    });
    results.addEventListener("click", event => {
        if (event.target.closest("a") != null) {
            set_panel_open(false);
            if (container.classList.contains("symi-search-open")) {
                close_phone_search(false);
            }
        }
    });
    results.addEventListener("keydown", event => {
        const links = result_links();
        const index = links.indexOf(document.activeElement);
        if (event.key === "ArrowDown" && index < links.length - 1) {
            event.preventDefault();
            links[index + 1].focus();
        } else if (event.key === "ArrowUp") {
            event.preventDefault();
            (index <= 0 ? input : links[index - 1]).focus();
        } else if (event.key === "Escape") {
            event.preventDefault();
            input.focus();
            set_panel_open(false);
        }
    });
    document.addEventListener("click", event => {
        if (!container.contains(event.target) && event.target !== toggle && !toggle?.contains(event.target)) {
            set_panel_open(false);
            if (container.classList.contains("symi-search-open")) {
                close_phone_search(false);
            }
        }
    });
    const close_phone_search = return_focus => {
        container.classList.remove("symi-search-open");
        toggle?.setAttribute("aria-expanded", "false");
        set_panel_open(false);
        if (return_focus) {
            toggle?.focus();
        }
    };
    toggle?.addEventListener("click", () => {
        const opening = !container.classList.contains("symi-search-open");
        if (!opening) {
            close_phone_search(true);
            return;
        }
        container.classList.add("symi-search-open");
        toggle.setAttribute("aria-expanded", "true");
        input.focus();
    });
    document.addEventListener("keydown", event => {
        const target = event.target;
        const typing = target instanceof HTMLElement && (target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName));
        if (event.key === "/" && !typing && !event.metaKey && !event.ctrlKey && !event.altKey) {
            event.preventDefault();
            if (phone_layout_query.matches) {
                toggle?.click();
            } else {
                input.focus();
            }
        }
    });
    container.hidden = false;
    if (toggle != null) {
        toggle.hidden = false;
    }
    status.textContent = "Type a name, concept, parameter, or result type.";
}

async function write_to_clipboard(text) {
    if (navigator.clipboard != null && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return;
    }
    const scratch = document.createElement("textarea");
    scratch.value = text;
    scratch.setAttribute("readonly", "");
    scratch.style.position = "fixed";
    scratch.style.opacity = "0";
    document.body.appendChild(scratch);
    scratch.select();
    const copied = document.execCommand("copy");
    scratch.remove();
    if (!copied) {
        throw new Error("copy command was rejected");
    }
}

const copy_icon = `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="8.5" y="8.5" width="11" height="11" rx="2" /><path d="M15.5 8.5V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7.5a2 2 0 0 0 2 2h2.5" /></svg>`;

function initialize_copy_buttons() {
    for (const figure of document.querySelectorAll(".symi-code[data-code-kind='example']")) {
        const header = figure.querySelector(".symi-code-header");
        const code = figure.querySelector("pre code");
        if (header == null || code == null) {
            continue;
        }
        const label = figure.querySelector(".symi-code-label")?.textContent || "code";
        const button = document.createElement("button");
        button.type = "button";
        button.className = "symi-copy-button";
        button.setAttribute("aria-label", `Copy ${label} code`);
        button.innerHTML = `${copy_icon}<span>Copy</span>`;
        const text = button.querySelector("span");
        let reset = null;
        button.addEventListener("click", async () => {
            window.clearTimeout(reset);
            try {
                await write_to_clipboard(copy_text(code.textContent, figure.dataset.codeLanguage));
                button.dataset.copyState = "copied";
                text.textContent = "Copied";
                announce("Code copied to the clipboard");
            } catch (error) {
                button.dataset.copyState = "failed";
                text.textContent = "Copy failed";
                announce("The code could not be copied; select it and copy it manually");
            }
            reset = window.setTimeout(() => {
                delete button.dataset.copyState;
                text.textContent = "Copy";
            }, 2000);
        });
        header.appendChild(button);
    }
}

function initialize_outline_tracking() {
    const links = new Map(
        [...document.querySelectorAll(".symi-outline [data-outline-target]")].map(link => [link.dataset.outlineTarget, link]),
    );
    if (links.size === 0 || !("IntersectionObserver" in window)) {
        return;
    }
    const headings = [...links.keys()].map(identifier => document.getElementById(identifier)).filter(element => element != null);
    const visible = new Set();
    const observer = new IntersectionObserver(observed => {
        for (const item of observed) {
            if (item.isIntersecting) {
                visible.add(item.target);
            } else {
                visible.delete(item.target);
            }
        }
        const current = headings.find(heading => visible.has(heading))
            || [...headings].reverse().find(heading => heading.getBoundingClientRect().top < 120);
        for (const link of links.values()) {
            link.classList.remove("symi-outline-active");
            link.removeAttribute("aria-current");
        }
        if (current != null) {
            const link = links.get(current.id);
            link.classList.add("symi-outline-active");
            link.setAttribute("aria-current", "location");
        }
    }, { rootMargin: "-64px 0px -60% 0px" });
    for (const heading of headings) {
        observer.observe(heading);
    }
}

// A deep link may name a placement whose calling form sits inside a collapsed section, or a
// bare anchor before an entry. Open what hides it, bring it into view, and mark the entry
// briefly so the reader sees which of several same-named entries was meant.
function reveal_hash_target() {
    const identifier = decodeURIComponent(window.location.hash.replace(/^#/, ""));
    if (identifier === "") {
        return;
    }
    const target = document.getElementById(identifier);
    if (target == null || !document.getElementById("documentation_content")?.contains(target)) {
        resolve_retired_anchor(identifier);
        return;
    }
    for (let element = target.parentElement; element != null; element = element.parentElement) {
        if (element instanceof HTMLDetailsElement) {
            element.open = true;
        }
    }
    let marked = target;
    if (target.tagName === "A" && target.textContent.trim() === "") {
        let sibling = target.parentElement?.tagName === "P" ? target.parentElement.nextElementSibling : target.nextElementSibling;
        while (sibling != null && sibling.tagName === "A") {
            sibling = sibling.nextElementSibling;
        }
        marked = sibling || target;
    }
    target.scrollIntoView({ block: "start" });
    marked.classList.remove("symi-target-highlight");
    void marked.offsetWidth;
    marked.classList.add("symi-target-highlight");
}

// An address published before the reference was reorganised names an anchor this page no
// longer has. The page that used to hold it resolves it: one surviving destination is
// followed, and an address whose old entry covered several members that are now separate
// entries offers those meanings instead of guessing between them.
async function resolve_retired_anchor(identifier) {
    const notice = document.getElementById("symi-retired-anchor-notice");
    const artifact = (state.publication?.legacy_alias_pages || []).find(page => page.page_identifier === state.page);
    if (artifact == null) {
        return;
    }
    let table;
    try {
        table = await fetch_json(artifact.path);
    } catch (error) {
        console.warn("The retired addresses of this page are unavailable", error);
        return;
    }
    if (decodeURIComponent(window.location.hash.replace(/^#/, "")) !== identifier) {
        return;
    }
    const moved = (table.aliases || {})[identifier];
    if (typeof moved === "string") {
        const [page_identifier, anchor = ""] = moved.split("#", 2);
        window.location.replace(state.routes.create_language_target(state.language, page_identifier, anchor));
        return;
    }
    const meanings = (table.disambiguations || {})[identifier];
    if (meanings == null || notice == null) {
        return;
    }
    notice.innerHTML = `<p>“${escape_html(identifier)}” named more than one entry before this reference was reorganised. `
        + `Each of its meanings now has its own entry:</p><ul>`
        + meanings.map(meaning => (
            `<li><a href="${escape_html(state.routes.create_language_target(state.language, meaning.page, meaning.anchor))}">`
            + `${escape_html(meaning.label)}</a></li>`
        )).join("")
        + `</ul>`;
    notice.hidden = false;
    announce(`That address names ${meanings.length} entries; choose the one you meant.`);
}

function show_unavailable_notice() {
    const unavailable = new URLSearchParams(window.location.search).get("unavailable");
    const notice = document.getElementById("symi-unavailable-notice");
    if (unavailable == null || notice == null) {
        return;
    }
    notice.textContent = `The entry you followed is not published in the ${language_label(state.language)} documentation, so its topic is shown instead.`;
    notice.hidden = false;
}

function print_with_open_sections() {
    const reopened = [];
    window.addEventListener("beforeprint", () => {
        for (const details of document.querySelectorAll(".symi-article details:not([open])")) {
            details.open = true;
            reopened.push(details);
        }
    });
    window.addEventListener("afterprint", () => {
        while (reopened.length > 0) {
            reopened.pop().open = false;
        }
    });
}

async function initialize() {
    if (document.body.dataset.routeKind === "neutral") {
        const stored = read_storage(language_storage_key);
        const link = stored == null ? null : document.querySelector(`.symi-language-option[data-language="${CSS.escape(stored)}"]`);
        if (link != null) {
            window.location.replace(link.href + window.location.hash);
            return;
        }
    }
    initialize_theme();
    initialize_navigation_drawer();
    initialize_copy_buttons();
    initialize_outline_tracking();
    print_with_open_sections();
    reveal_hash_target();
    window.addEventListener("hashchange", reveal_hash_target);
    try {
        state.site_manifest = await fetch_json("site-manifest.json");
        state.publication = await fetch_json(`publication/${state.language}.json`);
    } catch (error) {
        console.warn("Documentation metadata is unavailable; search and topic expansion are disabled", error);
        return;
    }
    state.routes = create_routes(state.site_manifest);
    show_unavailable_notice();
    // The first reveal ran before the manifests were available, so an anchor this page no
    // longer has could not be resolved against the addresses it retired; try again now.
    reveal_hash_target();
    initialize_navigation_expansion();
    initialize_language_menu();
    initialize_search();
}

initialize();
