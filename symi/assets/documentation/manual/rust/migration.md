# Migration

## Python

- Classes are spelled in CapWords: `symi.expression` is now `symi.Expression`,
  `symi.context` is `symi.Context`, and `symi.point_2d` is `symi.Point2d`. Methods,
  module functions, and keyword arguments keep the Symi underscore spelling.
- Replace constant calls such as `symi.pi()` with properties such as
  `symi.pi`.
- Bare integers and `fractions.Fraction` values are now accepted exactly in
  expression-like positions; explicit lifting remains valid.
- Variable parameters may receive an existing symbol expression instead of
  repeating its name.
- `assumptions_of` returns a native mapping rather than JSON text.
- Symbolic equality and ordering construct relations. Use `evaluate_truth`
  for an explicit host Boolean result and do not rely on incidental Python
  truthiness.
- Invalid arguments now raise categorized errors instead of returning
  `undefined`, empty containers, or unrelated conversion messages.

## JavaScript

Wrap the generated module with `createFacade(rawModule)` and use the
returned facade as the default public API.

- Public names use JavaScript spelling: classes are PascalCase (`Expression`,
  `Matrix`, `Context`) and members are camelCase, so the Symi names
  `evaluate_truth`, `numerator_denominator`, `real_part`, `imaginary_part`,
  `absolute_value`, and `evaluate_limit` are reached as `evaluateTruth`,
  `numeratorDenominator`, `realPart`, `imaginaryPart`, `absoluteValue`, and
  `evaluateLimit`.
- Constants are properties.
- Expression-like values accept `bigint` or safe integral `number` values.
- Iterable arguments are non-destructive.
- Matrices use nested row iterables instead of `(rows, columns, flatEntries)`.
- Logical pairs use records, for example
  `{ condition, value }`, instead of flat interleaved arrays.
- Optional values use facade defaults and named records where applicable,
  rather than positional `undefined` placeholders.
- Three-valued queries use `null` for unknown.
- Failures are `SymiError` instances with stable diagnostic fields.

The generated wasm-bindgen exports remain reachable as `facade.raw`. This raw
layer preserves compatibility names and ABI-shaped ownership behavior for
advanced callers; it is not the recommended surface for new code.

## Rust

New application code should import `symi::api::prelude::*`, construct a
`Session`, and retain facade handles. Existing engine code may continue using
crate-root modules, raw contexts, interners, and expression references. Migrate
at an application boundary rather than mixing raw and facade objects inside
one computation.
