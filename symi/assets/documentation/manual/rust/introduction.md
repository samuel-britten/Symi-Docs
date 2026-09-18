# Symi language APIs

Symi is a general-purpose computer algebra system written in Rust. It has
three recommended, context-safe language surfaces:

- `symi` for Python;
- the JavaScript facade in `symi-wasm/facade`;
- `symi::api` for native Rust.

All three surfaces use complete Symi names and the same mathematical
semantics. Their host-language mechanics are deliberately idiomatic: Python
uses operators and native mappings, JavaScript uses records and non-destructive
iterables, and Rust uses typed `Result` values and owned handles.

## Names in each language

Every capability has one Symi name, written here in the lowercase-with-underscores
spelling the reference pages use. Each language spells that one name the way its own
conventions require, and the mapping is mechanical:

| | class | method, function, property |
|---|---|---|
| Python | `CapWords` — `Expression`, `Point2d` | unchanged — `is_polynomial` |
| JavaScript | `PascalCase` — `Expression`, `Point2d` | `camelCase` — `isPolynomial` |
| Rust | `UpperCamelCase` — `Expression`, `Point2d` | unchanged — `is_polynomial` |
| Kotlin, Swift | `UniffiExpression`, `UniffiPoint2d` | `camelCase` — `isPolynomial` |

The reference pages give each signature in the shared Symi spelling unless the line is
tagged for one language — `(WASM)`, `(WASM getter)`, `(Python)`, `(JavaScript facade)` — in
which case it is written exactly as that language spells it. Every executable example is
written in the language of its fence.

A handful of names are host protocol spellings rather than conversions: canonical text is
`__str__` in Python and `toString` in JavaScript, and Kotlin and Swift add `toDisplayString`
and `description`. Every one of these is recorded in `bindings/binding_surface.toml`, and the
committed surface digests under `docs/surface/` list what each language actually publishes.

Every expression and structural object belongs to one context or Rust session.
Objects from different contexts cannot be mixed. Resetting an explicit context
invalidates all objects previously returned from it. These checks also apply to
objects nested inside collections, matrices, geometry values, callable
functions, and CAD results.

Conversions follow one rule: automatic conversion is allowed only when it is
exact, unambiguous, context-safe, and unsurprising. Integers and exact
rationals are expression-like; floating-point values and strings are not
implicitly converted into symbolic expressions.

Start with the guide for [Python](getting-started-python.md),
[JavaScript](getting-started-javascript.md), or
[Rust](getting-started-rust.md). The normative details are in
[Conversions and collections](conversion-rules.md),
[Evaluation and constants](evaluation-and-constants.md),
[Context safety](context-safety.md), and
[Diagnostics and outcomes](diagnostics.md).

The reference metadata is generated from the exported language surfaces. It
records qualified placements, conversions, collections, result categories, and
public spellings so the Python, JavaScript, and Rust entries can be compared
without treating host-language signatures as interchangeable.
