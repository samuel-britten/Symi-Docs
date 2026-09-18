# Specialized canonical forms

These transformations have a fixed normal-form contract: each one produces a
determined shape and never runs the heuristic search used by
[`simplify`](simplification-general.md#simplify). Use them when the output
shape matters more than minimal size.

Related rewrites are on [algebraic transforms](algebraic-transforms.md) and
[trigonometric and complex rewrites](trigonometric-complex-rewrites.md).

## Canonical presentation passes

### piecewise_fold

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.piecewise_fold`](/symi/python/specialized-canonical-forms#piecewise_fold) in Python, [`UniffiExpression.piecewiseFold`](/symi/kotlin/specialized-canonical-forms#piecewise_fold) in Kotlin, [`UniffiExpression.piecewiseFold`](/symi/swift/specialized-canonical-forms#piecewise_fold) in Swift, [`api::expression_operations::Expression::piecewise_fold`](/symi/rust/specialized-canonical-forms#piecewise_fold) in Rust.*



Expand `abs`, `signum`, and `heaviside_step` definitions recursively and fold
piecewise operands of sums, products, powers, factorials, and ordinary function
calls into one top-level piecewise expression. For example, `x*abs(x - 1)`
becomes the exact two-branch definition with values `x*(x - 1)` and
`-x*(x - 1)`. Branch combinations retain first-match order and conditions are
conjoined exactly.

Each structural fold is limited to 16 branches and 128 stored nodes, with a
per-input growth limit of eight times the source node count. A node that would
exceed a limit remains unfolded; the operation still returns an exact,
equality-preserving expression and may therefore return the input unchanged.

### rewrite_special_functions

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.rewrite_special_functions`](/symi/python/specialized-canonical-forms#rewrite_special_functions) in Python, [`UniffiExpression.rewriteSpecialFunctions`](/symi/kotlin/specialized-canonical-forms#rewrite_special_functions) in Kotlin, [`UniffiExpression.rewriteSpecialFunctions`](/symi/swift/specialized-canonical-forms#rewrite_special_functions) in Swift, [`api::Expression::rewrite_special_functions`](/symi/rust/specialized-canonical-forms#rewrite_special_functions) in Rust.*



Rewrite beta, gamma, binomial, factorial, and rising-factorial representations
into the requested `"gamma"`, `"factorial"`, `"binomial"`, or
`"rising_factorial"` basis. The exact identities are applied only when their
domain gates are proven: factorial and binomial conversions require the
relevant non-negative integers, rising-factorial conversions additionally
require a positive base, and beta-to-gamma requires two positive arguments.
For example, with `n` declared a positive integer, `n!` may be rewritten into
the gamma basis and `gamma(n)` into the factorial basis. A site with
unconstrained arguments is returned unchanged. Gamma ratios with a literal
non-negative argument offset are minimized to their exact shifted product.

The context method, expression convenience method, and module function have
the same behavior. An unknown basis name raises an explicit error; there is no
force mode.

### presentation_normal_form

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.presentation_normal_form`](/symi/python/specialized-canonical-forms#presentation_normal_form) in Python, [`UniffiExpression.presentationNormalForm`](/symi/kotlin/specialized-canonical-forms#presentation_normal_form) in Kotlin, [`UniffiExpression.presentationNormalForm`](/symi/swift/specialized-canonical-forms#presentation_normal_form) in Swift, [`api::algebra::Session::presentation_normal_form`](/symi/rust/specialized-canonical-forms#presentation_normal_form) in Rust.*



The cheap, bounded display-oriented pass run at solver output seams: rational
normal form only, kept only when the weighted complexity does not grow.
Unlike `simplify` it never runs the full heuristic ladder, so it is fast and
deterministic in shape.

## Example

This family is not part of the recommended JavaScript facade in this release. Call it through the generated `symi.raw` layer, whose entries are listed with their wasm-bindgen signatures above, and read [Migration](migration.md) for the ownership rules that apply there.

