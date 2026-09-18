export const documentation_search_limit = 40;

export function normalize_search_text(value) {
    return String(value || "")
        .toLowerCase()
        .replace(/[_-]+/g, " ")
        .replace(/[^\p{L}\p{N}.]+/gu, " ")
        .replace(/\s+/g, " ")
        .trim();
}

function token_matches(normalized_text, token) {
    return normalized_text.includes(token);
}

export function score_search_entry(entry, query) {
    const normalized_query = normalize_search_text(query);
    if (normalized_query === "") {
        return 0;
    }
    const qualified_name = normalize_search_text(entry.qualified_name);
    const short_name = normalize_search_text(entry.short_name);
    const normalized_text = normalize_search_text(entry.search_text);
    const terms = normalized_query.split(" ");
    if (!terms.every(term => token_matches(normalized_text, term))) {
        return null;
    }
    if (qualified_name === normalized_query) {
        return 10000;
    }
    if (short_name === normalized_query) {
        return 9000;
    }
    if (qualified_name.startsWith(normalized_query)) {
        return 8000;
    }
    if (short_name.startsWith(normalized_query)) {
        return 7000;
    }
    if (terms.every(term => qualified_name.includes(term))) {
        return 6000;
    }
    if (terms.some(term => qualified_name.includes(term))) {
        return 5000;
    }
    if (terms.some(term => normalize_search_text(entry.category_identifier).includes(term))) {
        return 4000;
    }
    if (terms.some(term => normalize_search_text(entry.signature).includes(term))) {
        return 3000;
    }
    return 1000;
}

export function search_documentation_entries(entries, query, options = {}) {
    const normalized_query = normalize_search_text(query);
    if (normalized_query === "") {
        return [];
    }
    const language = options.language || "all";
    const category_order = options.category_order || new Map();
    const limit = options.limit || documentation_search_limit;
    return entries
        .filter(entry => language === "all" || entry.language === language)
        .map(entry => ({ entry: entry, score: score_search_entry(entry, normalized_query) }))
        .filter(result => result.score != null)
        .sort((left, right) => (
            right.score - left.score
            || (category_order.get(left.entry.category_identifier) || 0)
                - (category_order.get(right.entry.category_identifier) || 0)
            || left.entry.qualified_name.localeCompare(right.entry.qualified_name)
            || left.entry.placement_identifier.localeCompare(right.entry.placement_identifier)
        ))
        .slice(0, limit)
        .map(result => result.entry);
}

export function documentation_entry_url(entry, language = entry.language) {
    return `/symi/${language}/${entry.page_identifier}/#${entry.anchor}`;
}
