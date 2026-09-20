# Specialized canonical forms

These transformations have a fixed normal-form contract: each one produces a
determined shape and never runs the heuristic search used by
[`simplify`](simplification-general.md#simplify). Use them when the output
shape matters more than minimal size.

Related rewrites are on [algebraic transforms](algebraic-transforms.md) and
[trigonometric and complex rewrites](trigonometric-complex-rewrites.md).

## Canonical presentation passes

### piecewise_fold

<a id="entry-presentation_swift_api_session_piecewise_fold"></a>
<a id="placement-placement.swift.swift_object.uniffisession_piecewisefold.ad7f0c837ae1"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func piecewiseFold(inputExpression: UniffiExpression) -> UniffiExpression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.swift.swift_object.uniffiexpression_piecewisefold.0c8ba9c78761"></a>
<p class="symi-entry-owner">Expression method: <code>UniffiExpression.piecewiseFold</code></p>

```swift signature
func piecewiseFold() -> UniffiExpression
```

</details>



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

<a id="entry-presentation_swift_api_session_rewrite_special_functions"></a>
<a id="placement-placement.swift.swift_object.uniffisession_rewritespecialfunctions.a5cfcdf7d801"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func rewriteSpecialFunctions(
    target: UniffiExpression,
    basis: UniffiSpecialFunctionBasis,
) -> UniffiExpression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.swift.swift_object.uniffiexpression_rewritespecialfunctions.3d399f43f7ae"></a>
<p class="symi-entry-owner">Expression method: <code>UniffiExpression.rewriteSpecialFunctions</code></p>

```swift signature
func rewriteSpecialFunctions(basis: UniffiSpecialFunctionBasis) -> UniffiExpression
```

</details>



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

<a id="entry-presentation_swift_api_session_presentation_normal_form"></a>
<a id="placement-placement.swift.swift_object.uniffisession_presentationnormalform.ba6e3a1e8f5c"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func presentationNormalForm(inputExpression: UniffiExpression) -> UniffiExpression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.swift.swift_object.uniffiexpression_presentationnormalform.bd719e9b0743"></a>
<p class="symi-entry-owner">Expression method: <code>UniffiExpression.presentationNormalForm</code></p>

```swift signature
func presentationNormalForm() -> UniffiExpression
```

</details>



The cheap, bounded display-oriented pass run at solver output seams: rational
normal form only, kept only when the weighted complexity does not grow.
Unlike `simplify` it never runs the full heuristic ladder, so it is fast and
deterministic in shape.

## Example

