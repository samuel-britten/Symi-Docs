# Specialized canonical forms

These transformations have a fixed normal-form contract: each one produces a
determined shape and never runs the heuristic search used by
[`simplify`](simplification-general.md#simplify). Use them when the output
shape matters more than minimal size.

Related rewrites are on [algebraic transforms](algebraic-transforms.md) and
[trigonometric and complex rewrites](trigonometric-complex-rewrites.md).

## Canonical presentation passes

### piecewise_fold

<a id="placement-placement.rust.native_rust.api_expression_operations_expression_piecewise_fold.a5c09a8260de"></a>
`symi::api::expression_operations::Expression — pub fn piecewise_fold(&self) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_solving_session_piecewise_fold.d9d06877bd84"></a>
`symi::api::solving::Session — pub fn piecewise_fold(&self, input_expression: &Expression) -> Result<Expression, ApiError>`



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

<a id="placement-placement.rust.native_rust.api_expression_rewrite_special_functions.862d5aececd0"></a>
`symi::api::Expression — pub fn rewrite_special_functions(&self, basis: SpecialFunctionBasis) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_session_rewrite_special_functions.c348e1dbfa43"></a>
`symi::api::Session — pub fn rewrite_special_functions(&self, target: &Expression, basis: SpecialFunctionBasis) -> Result<Expression, ApiError>`



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

<a id="placement-placement.rust.native_rust.api_algebra_session_presentation_normal_form.9876501ffad2"></a>
`symi::api::algebra::Session — pub fn presentation_normal_form(&self, input_expression: &Expression) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_expression_operations_expression_presentation_normal_form.2520484683fe"></a>
`symi::api::expression_operations::Expression — pub fn presentation_normal_form(&self) -> Result<Expression, ApiError>`



The cheap, bounded display-oriented pass run at solver output seams: rational
normal form only, kept only when the weighted complexity does not grow.
Unlike `simplify` it never runs the full heuristic ladder, so it is fast and
deterministic in shape.

## Example

This family is not part of the recommended `symi::api` facade in this release. Call it through the native modules in the [native Rust API reference](/symi/rust/api/symi/).

