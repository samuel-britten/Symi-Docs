// Page furniture of the static documentation site: topic navigation, the language menu,
// breadcrumbs, the on-page outline, and previous/next links. Every function returns an
// HTML string and reads no DOM, so the build prerenders them into each route and the
// browser reuses the same functions when it expands a navigation topic on demand.

import { escape_html } from "./documentation_render.js";

export const outline_heading_limit = 60;

export function category_label(category) {
    return category.short_title || category.title;
}

// The pages of one language in reading order: categories in their published order, each
// category's pages in the order the site manifest lists them.
export function reading_order(site_manifest, routes, language) {
    const category_order = new Map((site_manifest.categories || []).map((category, index) => [category.category_identifier, index]));
    return (site_manifest.pages || [])
        .map((page, index) => ({ page, index }))
        .filter(({ page }) => page.canonical_urls[language] != null && routes.page_is_listed(page.page_identifier, language))
        .sort((left, right) => (
            (category_order.get(left.page.category_identifier) ?? 1e9) - (category_order.get(right.page.category_identifier) ?? 1e9)
            || left.index - right.index
        ))
        .map(({ page }) => ({
            page_identifier: page.page_identifier,
            title: page.title,
            category_identifier: page.category_identifier,
            entry_count: (page.entry_counts || {})[language] || 0,
            href: routes.create_language_target(language, page.page_identifier),
        }));
}

export function category_by_identifier(site_manifest, category_identifier) {
    return (site_manifest.categories || []).find(category => category.category_identifier === category_identifier) || null;
}

function owner_hint(entry, duplicated_names) {
    return duplicated_names.has(entry.display_name)
        ? ` <span class="symi-nav-entry-owner">${escape_html(entry.owner_label)}</span>`
        : "";
}

function navigation_entry_link_html(entry, routes, language, duplicated_names) {
    return `<a class="symi-nav-entry" href="${escape_html(routes.create_language_target(language, entry.page_identifier, entry.anchor))}">`
        + `<code>${escape_html(entry.display_name)}</code>${owner_hint(entry, duplicated_names)}</a>`;
}

function navigation_entry_order(left, right) {
    return left.display_name.localeCompare(right.display_name)
        || left.owner_label.localeCompare(right.owner_label)
        || left.presentation_entry_identifier.localeCompare(right.presentation_entry_identifier);
}

// One page's entries: topic operations at the top level, and the members of an object nested
// under that object, led by the object's own entry. Nesting is what keeps two members that
// share a name — a principal part's `matrix` and a context's — apart in the list.
export function navigation_entries_html(entries, routes, language) {
    const counts = new Map();
    for (const entry of entries) {
        counts.set(entry.display_name, (counts.get(entry.display_name) || 0) + 1);
    }
    const duplicated_names = new Set([...counts].filter(([, count]) => count > 1).map(([name]) => name));
    const owners = new Map();
    const items = [];
    for (const entry of [...entries].sort(navigation_entry_order)) {
        const owner = entry.navigation_owner || null;
        if (owner == null) {
            items.push({ sort_name: entry.display_name, entry });
            continue;
        }
        if (!owners.has(owner)) {
            const group = { sort_name: owner, owner, members: [], type_entry: null };
            owners.set(owner, group);
            items.push(group);
        }
        const group = owners.get(owner);
        if (entry.display_name === owner && group.type_entry == null) {
            group.type_entry = entry;
        } else {
            group.members.push(entry);
        }
    }
    return items
        .sort((left, right) => left.sort_name.localeCompare(right.sort_name))
        .map(item => {
            if (item.entry != null) {
                return `<li>${navigation_entry_link_html(item.entry, routes, language, duplicated_names)}</li>`;
            }
            const heading = item.type_entry != null
                ? navigation_entry_link_html(item.type_entry, routes, language, duplicated_names)
                : `<span class="symi-nav-entry-type"><code>${escape_html(item.owner)}</code></span>`;
            if (item.members.length === 0) {
                return `<li>${heading}</li>`;
            }
            return `<li class="symi-nav-entry-group">${heading}<ul class="symi-nav-entry-members">`
                + item.members.map(member => (
                    `<li>${navigation_entry_link_html(member, routes, language, duplicated_names)}</li>`
                )).join("")
                + `</ul></li>`;
        })
        .join("");
}

function navigation_page_html(page, current_page, current_entries_html, routes, language) {
    const is_current = page.page_identifier === current_page;
    const list_identifier = `symi-nav-entries-${page.page_identifier}`;
    const current_attribute = is_current ? ` aria-current="page"` : "";
    const expand_button = page.entry_count > 0
        ? `<button type="button" class="symi-nav-expand" aria-expanded="${is_current ? "true" : "false"}" aria-controls="${list_identifier}" data-page="${escape_html(page.page_identifier)}">`
            + `<span class="symi-visually-hidden">${is_current ? "Hide" : "Show"} entries in ${escape_html(page.title)}</span></button>`
        : "";
    const entry_list = page.entry_count > 0
        ? `<ul class="symi-nav-entries" id="${list_identifier}"${is_current ? "" : " hidden"}${is_current ? " data-loaded=\"true\"" : ""}>${is_current ? current_entries_html : ""}</ul>`
        : "";
    return `<li class="symi-nav-page${is_current ? " symi-nav-page-current" : ""}">`
        + `<div class="symi-nav-page-row"><a class="symi-nav-page-link" href="${escape_html(page.href)}"${current_attribute}>${escape_html(page.title)}</a>${expand_button}</div>`
        + entry_list
        + `</li>`;
}

export function navigation_html({ site_manifest, routes, language, current_page, current_entries }) {
    const pages = reading_order(site_manifest, routes, language);
    const current_category = (pages.find(page => page.page_identifier === current_page) || {}).category_identifier;
    const current_entries_html = navigation_entries_html(current_entries || [], routes, language);
    return `<ul class="symi-nav-categories">`
        + (site_manifest.categories || []).map(category => {
            const category_pages = pages.filter(page => page.category_identifier === category.category_identifier);
            if (category_pages.length === 0) {
                return "";
            }
            const open = category.category_identifier === current_category ? " open" : "";
            return `<li class="symi-nav-category"><details${open}>`
                + `<summary class="symi-nav-category-title" title="${escape_html(category.title)}">${escape_html(category_label(category))}</summary>`
                + `<ul class="symi-nav-pages">`
                + category_pages.map(page => navigation_page_html(page, current_page, current_entries_html, routes, language)).join("")
                + `</ul></details></li>`;
        }).join("")
        + `</ul>`;
}

export function outline_headings(headings) {
    const sections = headings.filter(heading => heading.depth === 2);
    const entries = headings.filter(heading => heading.depth === 2 || heading.depth === 3);
    if (sections.length >= 2 && entries.length > outline_heading_limit) {
        return sections;
    }
    return entries.slice(0, outline_heading_limit * 2);
}

export function outline_html(headings) {
    const visible = outline_headings(headings);
    if (visible.length < 2) {
        return "";
    }
    return `<ul class="symi-outline-list">`
        + visible.map(heading => (
            `<li class="symi-outline-depth-${heading.depth}"><a href="#${escape_html(heading.identifier)}" data-outline-target="${escape_html(heading.identifier)}">${escape_html(heading.text)}</a></li>`
        )).join("")
        + `</ul>`;
}

export function breadcrumbs_html({ site_manifest, routes, language, language_label, page }) {
    const category = page == null ? null : category_by_identifier(site_manifest, page.category_identifier);
    const home = routes.create_language_target(language, (site_manifest.languages.find(item => item.language_identifier === language) || {}).default_page || "introduction");
    const items = [`<li><a href="${escape_html(home)}">${escape_html(language_label)}</a></li>`];
    if (category != null) {
        items.push(`<li>${escape_html(category_label(category))}</li>`);
    }
    if (page != null) {
        items.push(`<li><span aria-current="page">${escape_html(page.title)}</span></li>`);
    }
    return `<ol class="symi-breadcrumb-list">${items.join("")}</ol>`;
}

export function pager_html(pages, current_page) {
    const index = pages.findIndex(page => page.page_identifier === current_page);
    if (index < 0) {
        return "";
    }
    const previous = pages[index - 1];
    const next = pages[index + 1];
    const link = (page, direction, label) => page == null
        ? `<span class="symi-pager-spacer"></span>`
        : `<a class="symi-pager-link symi-pager-${direction}" href="${escape_html(page.href)}" rel="${direction === "previous" ? "prev" : "next"}">`
            + `<span class="symi-pager-direction">${label}</span><span class="symi-pager-title">${escape_html(page.title)}</span></a>`;
    return link(previous, "previous", "Previous") + link(next, "next", "Next");
}

export function related_pages_html(site_manifest, pages, current_page) {
    const page = pages.find(item => item.page_identifier === current_page);
    if (page == null) {
        return "";
    }
    const siblings = pages.filter(item => item.category_identifier === page.category_identifier && item.page_identifier !== current_page);
    if (siblings.length === 0) {
        return "";
    }
    const category = category_by_identifier(site_manifest, page.category_identifier);
    return `<h2 class="symi-related-title">More in ${escape_html(category == null ? "this topic" : category_label(category))}</h2>`
        + `<ul class="symi-related-list">`
        + siblings.map(item => `<li><a href="${escape_html(item.href)}">${escape_html(item.title)}</a></li>`).join("")
        + `</ul>`;
}

// The page a language switch leads to. The current anchor is resolved to the documentation
// identity it names, and that identity is looked up in the other language: identity is what
// makes two host spellings the same operation, so a switch can never land on an unrelated
// member that happens to share a name. A member falls back to the entry that owns it, and an
// identity the other language does not publish reports itself unavailable on the same topic
// page rather than substituting another API.
export function language_switch_target({ site_manifest, routes, target_language, current_language, current_page, anchor, cross_language_targets }) {
    const targets = cross_language_targets || [];
    const current_target = targets.find(target => (
        target.language === current_language
        && target.page_identifier === current_page
        && target.anchor === anchor
    ));
    if (current_target != null) {
        const identities = [current_target.documentation_identity, current_target.destination_identifier]
            .filter(identity => identity != null);
        for (const identity of identities) {
            const target = targets.find(candidate => (
                candidate.language === target_language
                && (candidate.documentation_identity === identity || candidate.destination_identifier === identity)
            ));
            if (target != null) {
                return routes.create_language_target(target_language, target.page_identifier, target.anchor);
            }
        }
        const topic_page = routes.page_is_published(target_language, routes.language_page_name(target_language, current_page))
            ? current_page
            : (site_manifest.pages || []).find(page => (
                page.category_identifier === current_target.category_identifier && page.canonical_urls[target_language] != null
            ))?.page_identifier;
        if (topic_page != null) {
            const fallback_target = routes.create_language_target(target_language, topic_page);
            return `${fallback_target}?unavailable=${encodeURIComponent(anchor)}`;
        }
    }
    if (routes.page_is_published(target_language, routes.language_page_name(target_language, current_page))) {
        return routes.create_language_target(target_language, current_page, anchor);
    }
    const default_page = (site_manifest.languages.find(item => item.language_identifier === target_language) || {}).default_page || "introduction";
    return routes.create_language_target(target_language, default_page);
}

export function language_menu_items_html({ site_manifest, routes, language, current_page, anchor, cross_language_targets }) {
    return (site_manifest.languages || []).map(item => {
        const selected = item.language_identifier === language;
        const href = language_switch_target({
            site_manifest,
            routes,
            target_language: item.language_identifier,
            current_language: language,
            current_page,
            anchor,
            cross_language_targets,
        });
        return `<li><a class="symi-language-option" href="${escape_html(href)}" data-language="${escape_html(item.language_identifier)}" hreflang="en"${selected ? ` aria-current="true"` : ""}>`
            + `<span class="symi-language-check" aria-hidden="true">${selected ? "✓" : ""}</span>${escape_html(item.label)}</a></li>`;
    }).join("");
}
