// Route arithmetic for the static documentation site. Every page is served from
// `/symi/<language>/<page>/` and every generated artifact from `/symi/assets/documentation/`.
// The functions here read only the site manifest, so the browser reader and the build-time
// prerenderer resolve every link identically.

export const site_root = "/symi";
export const documentation_base_path = `${site_root}/assets/documentation/`;
export const site_asset_path = `${site_root}/assets/site/`;

const explicit_guide_languages = {
    "getting-started-python": "python",
    "getting-started-javascript": "wasm",
    "getting-started-rust": "rust",
    "getting-started-kotlin": "kotlin",
    "getting-started-swift": "swift",
};

export function sanitize_page_name(page_name, fallback = "introduction") {
    const cleaned = String(page_name || "").replace(/[^a-z0-9-]/g, "");
    return cleaned === "" ? fallback : cleaned;
}

export function explicit_guide_language(page_name) {
    return explicit_guide_languages[page_name] || null;
}

export function language_guide_page(language) {
    return Object.keys(explicit_guide_languages).find(page => explicit_guide_languages[page] === language) || null;
}

export function create_routes(site_manifest) {
    const languages = site_manifest.languages || [];
    const pages = site_manifest.pages || [];

    function language_is_available(language) {
        return languages.some(item => item.language_identifier === language);
    }

    function sanitize_language(language) {
        if (language_is_available(language)) {
            return language;
        }
        return languages.length > 0 ? languages[0].language_identifier : "python";
    }

    function page_is_published(language, page_name) {
        return pages.some(page => page.page_identifier === page_name && page.canonical_urls[language] != null);
    }

    function language_page_name(language, page_name) {
        const cleaned_page_name = sanitize_page_name(page_name);
        if (!cleaned_page_name.startsWith("getting-started-")) {
            return cleaned_page_name;
        }
        const language_guide = language_guide_page(language);
        return language_guide != null && page_is_published(language, language_guide) ? language_guide : cleaned_page_name;
    }

    function create_language_target(language, page_name, hash = "") {
        const target_language = sanitize_language(language);
        const target_page_name = language_page_name(target_language, page_name);
        return `${site_root}/${target_language}/${target_page_name}/${hash ? `#${hash}` : ""}`;
    }

    function page_is_listed(page_identifier, language) {
        return !page_identifier.startsWith("getting-started-")
            || page_identifier === language_page_name(language, page_identifier);
    }

    // Resolve one link written in a manual page: a sibling `page.md#anchor` link stays in the
    // current language unless it names another language's getting-started guide, a site route
    // keeps its explicit language, and anything with a scheme is external.
    function rewrite_href(href, language) {
        const text = String(href || "");
        const [path, hash = ""] = text.split("#", 2);
        if (/^[a-z][a-z0-9+.-]*:/i.test(text)) {
            return { href: text, external: /^https?:/i.test(text) };
        }
        if (path.endsWith(".md")) {
            const page_name = path.replace(/^\.\//, "").replace(/\.md$/, "");
            return { href: create_language_target(explicit_guide_language(page_name) || language, page_name, hash), external: false };
        }
        const page_route = path.match(new RegExp(`^${site_root}/([a-z]+)/([a-z0-9-]+)/?$`));
        if (page_route != null && language_is_available(page_route[1])) {
            return { href: create_language_target(page_route[1], page_route[2], hash), external: false };
        }
        return { href: text, external: false };
    }

    return {
        languages,
        pages,
        language_is_available,
        sanitize_language,
        page_is_published,
        language_page_name,
        create_language_target,
        page_is_listed,
        rewrite_href,
    };
}

export function documentation_artifact_url(path) {
    return documentation_base_path + path;
}

export function documentation_entry_url(entry, language = entry.language) {
    return `${site_root}/${language}/${entry.page_identifier}/#${entry.anchor}`;
}
