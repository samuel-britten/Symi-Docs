# Algebraic transforms

Directed algebraic rewrites change the form of an expression while preserving
its value on the documented domain. Each operation applies one named
transformation rather than searching, so the result shape is predictable. For
the search-based ladder see
[general simplification](simplification-general.md).

### expand

<a id="entry-presentation_wasm_algebraic_transforms_capability_expression_transformations_expand_api_session_expand"></a>
<a id="placement-placement.wasm.wasm_module.module_expand.debe9b25c914"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
expand(input_expression: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_expand.d98009438d4a"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.expand</code></p>

```typescript signature
expand(input_expression: Expression): Expression
```

</details>

<a id="entry-presentation_wasm_algebraic_transforms_capability_expression_transformations_expand_api_expression_expand"></a>
<a id="placement-placement.wasm.wasm_class.expression_expand.3ba03dbd7b00"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
expand(): Expression
```



Expand products, integer powers, and supported algebraic forms.

### partial_fractions

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.partial_fractions`](/symi/python/algebraic-transforms#partial_fractions) in Python, [`UniffiExpression.partialFractions`](/symi/kotlin/algebraic-transforms#partial_fractions) in Kotlin, [`UniffiExpression.partialFractions`](/symi/swift/algebraic-transforms#partial_fractions) in Swift, [`api::algebra::Session::partial_fractions`](/symi/rust/algebraic-transforms#partial_fractions) in Rust.*



Decompose a rational expression into polynomial and proper-fraction terms over
the named variable.

For factorization, cancellation, collection, and radical operations, use
[general simplification](simplification-general.md).

## Algebraic form changes

### factor

<a id="entry-presentation_wasm_algebraic_transforms_capability_expression_transformations_factor_api_session_factor"></a>
<a id="placement-placement.wasm.wasm_module.module_factor.1a856a4538bd"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
factor(
    input_expression: Expression,
    gaussian?: boolean | null,
): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_factor.631689a43337"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.factor</code></p>

```typescript signature
factor(
    input_expression: Expression,
    gaussian?: boolean | null,
): Expression
```

</details>

<a id="entry-presentation_wasm_algebraic_transforms_capability_expression_transformations_factor_api_expression_factor"></a>
<a id="placement-placement.wasm.wasm_class.expression_factor.86dbcc9c348d"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
factor(gaussian?: boolean | null): Expression
```



Polynomial factorization over the rationals (full multivariate). With
`gaussian=True`, factor a univariate polynomial over the Gaussian integers
\(\mathbb{Z}[i]\); this form requires exactly one free variable and raises otherwise.

### collect

<a id="entry-presentation_wasm_algebraic_transforms_capability_expression_transformations_collect_api_algebra_session_collect"></a>
<a id="placement-placement.wasm.wasm_module.module_collect.891acef02c13"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
collect(input_expression: Expression, generator: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_collect.bdcb1b32b44d"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.collect</code></p>

```typescript signature
collect(input_expression: Expression, generator: Expression): Expression
```

</details>

<a id="entry-presentation_wasm_algebraic_transforms_capability_expression_transformations_collect_api_expression_operations_expression_collect"></a>
<a id="placement-placement.wasm.wasm_class.expression_collect.077961f6224f"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
collect(generator: Expression): Expression
```



Regroup the additive terms of `expression` by the numeric (integer or rational)
powers of a single `generator`, which may be a variable or an arbitrary
subexpression, writing the result as a sum of `generator^k * coefficient(k)`
terms without expanding the coefficients. For example, collecting
`a*x^2 + b*x^2 + a*x - b*x + c` by `x` yields `x^2*(a + b) + x*(a - b) + c`. The
rewrite is exact and equality-preserving; a numeric-literal generator, or a
generator that appears with only a single power, returns the input unchanged.

### complete_the_square

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.complete_the_square`](/symi/python/algebraic-transforms#complete_the_square) in Python, [`UniffiExpression.completeTheSquare`](/symi/kotlin/algebraic-transforms#complete_the_square) in Kotlin, [`UniffiExpression.completeTheSquare`](/symi/swift/algebraic-transforms#complete_the_square) in Swift, [`api::algebra::Session::complete_the_square`](/symi/rust/algebraic-transforms#complete_the_square) in Rust.*



Rewrite an expression that is quadratic in `variable` into the exact vertex form
`a*(variable - h)^2 + k`, with `h = -b/(2*a)` and `k = c - b^2/(4*a)` built from
the degree-2, degree-1 and degree-0 coefficients `a`, `b`, `c` of the expression
collected in `variable`. For example, `2*x^2 - 4*x + 7` becomes `2*(x - 1)^2 + 5`.
The coefficients may contain other symbols freely, so the multivariate case is
the per-variable quadratic slice: `x^2 + 2*x*y + 3` becomes `(x + y)^2 - y^2 + 3`
in `x`. The rewrite is exact and equality-preserving, and the square is never
expanded.

The input is returned unchanged whenever the rewrite does not apply: when
`variable` is not a symbol (a kernel generator such as `sin(x)` is not supported
in this release); when the expression is not a quadratic polynomial slice in
`variable` — its collected powers of `variable` must be exactly `{2}`, `{2, 0}`,
`{2, 1}` or `{2, 1, 0}` and every coefficient must be free of `variable`, so
`x^3 + x`, `x^(1/2) + x`, `x + 1` and `sin(x)*x^2 + x` all decline; when `b = 0`
and the expression is therefore already in vertex form (`3*x^2 + 5`); and when
the leading coefficient `a` is not provably nonzero. A numeric `a` always
qualifies, while a symbolic `a` qualifies only when the assumption context proves
it nonzero — dividing by a possibly-zero leading coefficient would make the
emitted form invalid on the `a = 0` locus, so `a*x^2 + x` declines for an
unrestricted `a` and completes when `a` is assumed positive.

### factor_common_terms

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.factor_common_terms`](/symi/python/algebraic-transforms#factor_common_terms) in Python, [`UniffiExpression.factorCommonTerms`](/symi/kotlin/algebraic-transforms#factor_common_terms) in Kotlin, [`UniffiExpression.factorCommonTerms`](/symi/swift/algebraic-transforms#factor_common_terms) in Swift, [`api::algebra::Session::factor_common_terms`](/symi/rust/algebraic-transforms#factor_common_terms) in Rust.*



Pull the greatest common monomial and exact rational content out of the terms
of a general — not necessarily polynomial — sum, producing a single product of
a common factor and a reduced sum, without invoking full polynomial
factorization. For example, `6*x*y + 9*x^2*sin(z)` becomes
`3*x*(2*y + 3*x*sin(z))`. The numeric content is negative exactly when every
term is negative (`-2*x - 4*y` pulls `-2`, while `2*x - 4*y` and `x^3 - 3*x`
pull positive content), a kernel with numeric exponents is extracted at
its minimum exponent only when that minimum is positive (`x + 1/x` is left for
`cancel`/`together`), and a kernel with a symbolic exponent is extracted whole
only when the exponent is structurally identical in every term
(`a*x^n + b*x^n` becomes `x^n*(a + b)`). The rewrite is exact and
equality-preserving; when no nontrivial common factor exists, or the input is
not a sum, the input is returned unchanged. The reduced sum is never factored
further — that is `factor`'s job.

### rationalize_denominator

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.rationalize_denominator`](/symi/python/algebraic-transforms#rationalize_denominator) in Python, [`UniffiExpression.rationalizeDenominator`](/symi/kotlin/algebraic-transforms#rationalize_denominator) in Kotlin, [`UniffiExpression.rationalizeDenominator`](/symi/swift/algebraic-transforms#rationalize_denominator) in Swift, [`api::algebra::Session::rationalize_denominator`](/symi/rust/algebraic-transforms#rationalize_denominator) in Rust.*



Rationalize a radical denominator through exact multiquadratic conjugation or
extended-Euclidean inversion in one rational n-th-root extension. For example,
`1 / (sqrt(3) - sqrt(2))` becomes `sqrt(3) + sqrt(2)`, and
`1 / (1 + 2^(1/3))` becomes `(1 - 2^(1/3) + 2^(2/3))/3`. The operation is
directed and returns its input unchanged when the denominator is outside its
bounded supported radical class or the exact remultiplication check fails.

### collect_radicals

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.collect_radicals`](/symi/python/algebraic-transforms#collect_radicals) in Python, [`UniffiExpression.collectRadicals`](/symi/kotlin/algebraic-transforms#collect_radicals) in Kotlin, [`UniffiExpression.collectRadicals`](/symi/swift/algebraic-transforms#collect_radicals) in Swift, [`api::algebra::Session::collect_radicals`](/symi/rust/algebraic-transforms#collect_radicals) in Rust.*



Collect like numeric radical kernels in a top-level sum. For example,
`a*sqrt(2) + b*sqrt(2) + 3` becomes `(a + b)*sqrt(2) + 3`. At most eight
distinct kernels are considered; inputs beyond that bound return unchanged.

### denest_radicals

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.denest_radicals`](/symi/python/algebraic-transforms#denest_radicals) in Python, [`UniffiExpression.denestRadicals`](/symi/kotlin/algebraic-transforms#denest_radicals) in Kotlin, [`UniffiExpression.denestRadicals`](/symi/swift/algebraic-transforms#denest_radicals) in Swift, [`api::algebra::Session::denest_radicals`](/symi/rust/algebraic-transforms#denest_radicals) in Rust.*



Denest the bounded depth-two real-radical subset bottom-up: rational quadratic
surds, up to three inner quadratic surds, and `cbrt(a + b*sqrt(c))` when its
exact resolvent has a rational root. For example, `sqrt(3 + 2*sqrt(2))` becomes
`1 + sqrt(2)` and `cbrt(2 + sqrt(5))` becomes `(1 + sqrt(5))/2`. A form outside
this decidable subset, such as `sqrt(1 + sqrt(2))`, is returned unchanged. Every
candidate is verified by exact repowering and principal-real-sign selection.

## Example

This family is not part of the recommended JavaScript facade in this release. Call it through the generated `symi.raw` layer, whose entries are listed with their wasm-bindgen signatures above, and read [Migration](migration.md) for the ownership rules that apply there.


## Additional API

### collectRadicals

<a id="entry-presentation_wasm_algebraic_transforms_capability_expression_transformations_collect_radicals_api_algebra_session_collect_radicals"></a>
<a id="placement-placement.wasm.wasm_module.module_collectradicals.618f2f1f120b"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
collectRadicals(input_expression: Expression): Expression
```

Collect like numeric radical kernels in a top-level sum. For example, `a*sqrt(2) + b*sqrt(2) + 3` becomes `(a + b)*sqrt(2) + 3`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_collectradicals.8882f588936f"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.collectRadicals</code></p>

```typescript signature
collectRadicals(input_expression: Expression): Expression
```

</details>

### collectRadicals

<a id="entry-presentation_wasm_algebraic_transforms_capability_expression_transformations_collect_radicals_api_expression_operations_expression_collect_radicals"></a>
<a id="placement-placement.wasm.wasm_class.expression_collectradicals.c887746fcdff"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
collectRadicals(): Expression
```

Collect like numeric radical kernels in a top-level sum. For example, `a*sqrt(2) + b*sqrt(2) + 3` becomes `(a + b)*sqrt(2) + 3`.

### denestPowers

<a id="entry-presentation_wasm_algebraic_transforms_capability_expression_transformations_denest_powers_api_algebra_session_denest_powers"></a>
<a id="placement-placement.wasm.wasm_module.module_denestpowers.73ac4ed785a7"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
denestPowers(input_expression: Expression): Expression
```

Flatten a power of a power into a single power (`(x^a)^b -> x^(a*b)`) at every power node whose outer exponent is provably an integer, which is valid on the principal branch because an integer power never routes through `log`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_denestpowers.4c2e62cdb07a"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.denestPowers</code></p>

```typescript signature
denestPowers(input_expression: Expression): Expression
```

</details>

### denestPowers

<a id="entry-presentation_wasm_algebraic_transforms_capability_expression_transformations_denest_powers_api_expression_operations_expression_denest_powers"></a>
<a id="placement-placement.wasm.wasm_class.expression_denestpowers.9316950a8123"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
denestPowers(): Expression
```

Flatten a power of a power into a single power (`(x^a)^b -> x^(a*b)`) at every power node whose outer exponent is provably an integer, which is valid on the principal branch because an integer power never routes through `log`.

### denestRadicals

<a id="entry-presentation_wasm_algebraic_transforms_capability_expression_transformations_denest_radicals_api_algebra_session_denest_radicals"></a>
<a id="placement-placement.wasm.wasm_module.module_denestradicals.56dce14cb552"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
denestRadicals(input_expression: Expression): Expression
```

Denest the bounded depth-two real-radical subset bottom-up: rational quadratic surds, up to three inner quadratic surds, and `cbrt(a + b*sqrt(c))` when its exact resolvent has a rational root. For example, `sqrt(3 + 2*sqrt(2))` becomes `1 + sqrt(2)` and `cbrt(2 + sqrt(5))` becomes `(1 + sqrt(5))/2`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_denestradicals.2a3aa905082a"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.denestRadicals</code></p>

```typescript signature
denestRadicals(input_expression: Expression): Expression
```

</details>

### denestRadicals

<a id="entry-presentation_wasm_algebraic_transforms_capability_expression_transformations_denest_radicals_api_expression_operations_expression_denest_radicals"></a>
<a id="placement-placement.wasm.wasm_class.expression_denestradicals.d11a0ba4842a"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
denestRadicals(): Expression
```

Denest the bounded depth-two real-radical subset bottom-up: rational quadratic surds, up to three inner quadratic surds, and `cbrt(a + b*sqrt(c))` when its exact resolvent has a rational root. For example, `sqrt(3 + 2*sqrt(2))` becomes `1 + sqrt(2)` and `cbrt(2 + sqrt(5))` becomes `(1 + sqrt(5))/2`.

### expandPowerBase

<a id="entry-presentation_wasm_algebraic_transforms_capability_expression_transformations_expand_power_base_api_algebra_session_expand_power_base"></a>
<a id="placement-placement.wasm.wasm_module.module_expandpowerbase.b3c245130f9d"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
expandPowerBase(input_expression: Expression): Expression
```

Split a power whose base is structurally a product into a product of powers (`(xy)^a -> x^a y^a`) at every power node whose exponent is provably an integer — the only unconditionally valid gate for this direction, since the split introduces `x^a` and `y^a` individually and each needs its own base off the cut. With `n` declared an integer, `(xy)^n` becomes `x^n y^n`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_expandpowerbase.d498d0612d9b"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.expandPowerBase</code></p>

```typescript signature
expandPowerBase(input_expression: Expression): Expression
```

</details>

### expandPowerBase

<a id="entry-presentation_wasm_algebraic_transforms_capability_expression_transformations_expand_power_base_api_expression_operations_expression_expand_power_base"></a>
<a id="placement-placement.wasm.wasm_class.expression_expandpowerbase.6ea9637348b8"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
expandPowerBase(): Expression
```

Split a power whose base is structurally a product into a product of powers (`(xy)^a -> x^a y^a`) at every power node whose exponent is provably an integer — the only unconditionally valid gate for this direction, since the split introduces `x^a` and `y^a` individually and each needs its own base off the cut. With `n` declared an integer, `(xy)^n` becomes `x^n y^n`.

### factorCommonTerms

<a id="entry-presentation_wasm_algebraic_transforms_capability_expression_transformations_factor_common_terms_api_algebra_session_factor_common_terms"></a>
<a id="placement-placement.wasm.wasm_module.module_factorcommonterms.83f0674fae02"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
factorCommonTerms(input_expression: Expression): Expression
```

Pull the greatest common monomial and exact rational content out of the terms of a general — not necessarily polynomial — sum, producing a single product of a common factor and a reduced sum, without invoking full polynomial factorization. For example, `6*x*y + 9*x^2*sin(z)` becomes `3*x*(2*y + 3*x*sin(z))`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_factorcommonterms.1a2013256c21"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.factorCommonTerms</code></p>

```typescript signature
factorCommonTerms(input_expression: Expression): Expression
```

</details>

### factorCommonTerms

<a id="entry-presentation_wasm_algebraic_transforms_capability_expression_transformations_factor_common_terms_api_expression_operations_expression_factor_common_terms"></a>
<a id="placement-placement.wasm.wasm_class.expression_factorcommonterms.b46aa49b5edb"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
factorCommonTerms(): Expression
```

Pull the greatest common monomial and exact rational content out of the terms of a general — not necessarily polynomial — sum, producing a single product of a common factor and a reduced sum, without invoking full polynomial factorization. For example, `6*x*y + 9*x^2*sin(z)` becomes `3*x*(2*y + 3*x*sin(z))`.

### rationalizeDenominator

<a id="entry-presentation_wasm_algebraic_transforms_capability_expression_transformations_rationalize_denominator_api_algebra_session_rationalize_denominator"></a>
<a id="placement-placement.wasm.wasm_module.module_rationalizedenominator.ba11f83ec318"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
rationalizeDenominator(input_expression: Expression): Expression
```

Rationalize a radical denominator through exact multiquadratic conjugation or extended-Euclidean inversion in one rational n-th-root extension. For example, `1 / (sqrt(3) - sqrt(2))` becomes `sqrt(3) + sqrt(2)`, and `1 / (1 + 2^(1/3))` becomes `(1 - 2^(1/3) + 2^(2/3))/3`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_rationalizedenominator.651ecc69ab9f"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.rationalizeDenominator</code></p>

```typescript signature
rationalizeDenominator(input_expression: Expression): Expression
```

</details>

### rationalizeDenominator

<a id="entry-presentation_wasm_algebraic_transforms_capability_expression_transformations_rationalize_denominator_api_expression_operations_expression_rationalize_denominator"></a>
<a id="placement-placement.wasm.wasm_class.expression_rationalizedenominator.9a1f6b3cc535"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
rationalizeDenominator(): Expression
```

Rationalize a radical denominator through exact multiquadratic conjugation or extended-Euclidean inversion in one rational n-th-root extension. For example, `1 / (sqrt(3) - sqrt(2))` becomes `sqrt(3) + sqrt(2)`, and `1 / (1 + 2^(1/3))` becomes `(1 - 2^(1/3) + 2^(2/3))/3`.

