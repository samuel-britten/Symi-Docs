// Ranking and grouping for documentation search. Entries are the per-language reader
// entries (one per semantic operation and owner, with its calling forms); concepts are the
// page and section titles of the manual. Nothing here touches the DOM.

export const documentation_search_limit = 40;

const owner_rank = {
    "Default context": 0,
    "Explicit context": 1,
    "Expression method": 2,
};

export function normalize_search_text(value) {
    return String(value || "")
        .toLowerCase()
        .replace(/[_-]+/g, " ")
        .replace(/[^\p{L}\p{N}.:]+/gu, " ")
        .replace(/\s+/g, " ")
        .trim();
}

function compact(value) {
    return normalize_search_text(value).replace(/[\s.:]+/g, "");
}

export function first_sentence(text, limit = 160) {
    const plain = String(text || "")
        .replace(/\\\(|\\\)|\\\[|\\\]/g, "")
        .replace(/`/g, "")
        .replace(/\*\*?/g, "")
        .replace(/\s+/g, " ")
        .trim();
    const match = plain.match(/^(?:e\.g\.|i\.e\.|[^.!?])*?[.!?](?=\s|$)/);
    const sentence = match == null ? plain : match[0];
    return sentence.length > limit ? `${sentence.slice(0, limit - 1).trimEnd()}…` : sentence;
}

// Precompute the normalised fields one entry is matched against, once per artifact load.
// Every spelling an entry actually has is matched: the display name, the owner-qualified name
// an index shows, each host qualified name, and each bare member name. A qualified query such
// as `PrincipalPart.matrix` therefore reaches the exact member rather than its namesakes.
export function prepare_search_entry(entry) {
    const calling_forms = entry.calling_forms || [];
    const qualified_names = calling_forms.map(form => form.qualified_name).filter(Boolean);
    const parameter_names = calling_forms.flatMap(form => (form.parameters || []).map(parameter => parameter.name));
    const names = [...new Set([
        entry.display_name,
        entry.qualified_display_name || entry.display_name,
        ...(entry.spellings || []),
        ...qualified_names,
    ].filter(Boolean))];
    return {
        kind: "entry",
        entry,
        name: normalize_search_text(entry.display_name),
        compact_name: compact(entry.display_name),
        qualified: names.map(normalize_search_text),
        compact_qualified: names.map(compact),
        parameters: parameter_names.map(normalize_search_text),
        owner: normalize_search_text(entry.owner_label),
        compact_text: compact(names.join(" ")),
        text: normalize_search_text([
            ...names,
            ...parameter_names,
            entry.owner_label,
            entry.category_identifier,
            entry.summary,
            entry.search_text,
        ].join(" ")),
    };
}

export function prepare_search_concept(concept) {
    return {
        kind: "concept",
        concept,
        name: normalize_search_text(concept.title),
        page: normalize_search_text(concept.page_title),
        text: normalize_search_text(`${concept.title} ${concept.page_title} ${concept.excerpt || ""}`),
    };
}

export function score_prepared_entry(prepared, query) {
    const normalized_query = normalize_search_text(query);
    if (normalized_query === "") {
        return null;
    }
    const terms = normalized_query.split(" ");
    const compact_query = compact(query);
    if (!terms.every(term => prepared.text.includes(term)) && !prepared.compact_text.includes(compact_query)) {
        return null;
    }
    if (prepared.compact_name === compact_query) {
        return 10000;
    }
    if (prepared.compact_qualified.includes(compact_query)) {
        return 9500;
    }
    if (prepared.compact_name.startsWith(compact_query)) {
        return 8000 - Math.min(prepared.compact_name.length - compact_query.length, 500);
    }
    if (prepared.qualified.some(name => name.split(/[.:\s]+/).some(segment => segment.startsWith(normalized_query)))) {
        return 7000;
    }
    if (terms.every(term => prepared.name.includes(term))) {
        return 6000;
    }
    if (terms.some(term => prepared.parameters.includes(term))) {
        return 5000;
    }
    if (terms.some(term => prepared.name.includes(term))) {
        return 4500;
    }
    if (terms.every(term => prepared.owner.includes(term))) {
        return 3000;
    }
    return 1000;
}

export function score_prepared_concept(prepared, query) {
    const normalized_query = normalize_search_text(query);
    if (normalized_query === "") {
        return null;
    }
    const terms = normalized_query.split(" ");
    if (!terms.every(term => prepared.text.includes(term))) {
        return null;
    }
    if (prepared.name === normalized_query) {
        return 8500;
    }
    if (terms.every(term => prepared.name.includes(term))) {
        return prepared.name.startsWith(normalized_query) ? 6500 : 5500;
    }
    if (terms.every(term => prepared.page.includes(term))) {
        return 2500;
    }
    return 800;
}

const operation_owner_labels = new Set([
    "Default context",
    "Explicit context",
    "Expression method",
    "Session method",
    "SymiFacade method",
]);

// Module functions, context methods, and expression methods are calling forms of one
// operation; any other owner (a result type, a geometric object) is its own entry even when
// it shares the operation's name, spelled without host prefixes so languages agree.
export function owner_group(owner_label) {
    const label = String(owner_label || "").replace(/^Uniffi/, "").replace(/^.*::/, "");
    return operation_owner_labels.has(label) ? "operation" : label;
}

// What makes two results the same result. Within one language a reader entry already is one
// documentation destination, so its identity is the key and nothing further is merged. Across
// languages the shared destination identity is what joins two host spellings; an identity
// only one host has (a Python dunder, a native Rust item) belongs to that host alone and is
// never merged into a namesake elsewhere.
export function entry_group_key(entry, all_languages) {
    const identity = entry.destination_identifier || entry.documentation_identity;
    if (!all_languages) {
        return `${entry.language}|${identity || `${entry.display_name}|${owner_group(entry.owner_label)}`}`;
    }
    if (identity != null && identity.startsWith("api:")) {
        return identity;
    }
    return `${entry.language}|${identity || `${entry.display_name}|${owner_group(entry.owner_label)}`}`;
}

function entry_order(left, right, category_order) {
    return (owner_rank[left.owner_label] ?? 3) - (owner_rank[right.owner_label] ?? 3)
        || (category_order.get(left.category_identifier) ?? 1e9) - (category_order.get(right.category_identifier) ?? 1e9)
        || left.display_name.localeCompare(right.display_name)
        || left.presentation_entry_identifier.localeCompare(right.presentation_entry_identifier);
}

// One result per documentation destination. Within a language that is already one reader
// entry, with its calling forms inside it. Across languages, the same operation collapses
// only when every language is searched, and the result lists each language it is published in.
export function group_entry_results(scored, all_languages, category_order) {
    const groups = new Map();
    for (const { prepared, score } of scored) {
        const entry = prepared.entry;
        const key = entry_group_key(entry, all_languages);
        if (!groups.has(key)) {
            groups.set(key, { kind: "entry", score, entries: [] });
        }
        const group = groups.get(key);
        group.score = Math.max(group.score, score);
        group.entries.push(entry);
    }
    return [...groups.values()].map(group => {
        const entries = [...group.entries].sort((left, right) => entry_order(left, right, category_order));
        const by_language = new Map();
        for (const entry of entries) {
            if (!by_language.has(entry.language)) {
                by_language.set(entry.language, entry);
            }
        }
        return {
            kind: "entry",
            score: group.score,
            primary: entries[0],
            alternates: entries.slice(1).filter(entry => entry.language === entries[0].language),
            languages: [...by_language.values()],
        };
    });
}

export function search_documentation(prepared_entries, prepared_concepts, query, options = {}) {
    const all_languages = options.all_languages === true;
    const category_order = options.category_order || new Map();
    const language_order = options.language_order || new Map();
    const limit = options.limit || documentation_search_limit;
    const scored_entries = prepared_entries
        .map(prepared => ({ prepared, score: score_prepared_entry(prepared, query) }))
        .filter(result => result.score != null);
    const entry_results = group_entry_results(scored_entries, all_languages, category_order);
    const concept_results = (prepared_concepts || [])
        .map(prepared => ({ kind: "concept", concept: prepared.concept, score: score_prepared_concept(prepared, query) }))
        .filter(result => result.score != null);
    const sort_key = result => (result.kind === "entry" ? result.primary.display_name : result.concept.title);
    return [...entry_results, ...concept_results]
        .sort((left, right) => (
            right.score - left.score
            || (left.kind === right.kind ? 0 : left.kind === "entry" ? -1 : 1)
            || (left.kind === "entry" && right.kind === "entry"
                ? (language_order.get(left.primary.language) ?? 0) - (language_order.get(right.primary.language) ?? 0)
                    || entry_order(left.primary, right.primary, category_order)
                : 0)
            || sort_key(left).localeCompare(sort_key(right))
        ))
        .slice(0, limit);
}
