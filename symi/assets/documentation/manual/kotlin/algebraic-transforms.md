# Algebraic transforms

Directed algebraic rewrites change the form of an expression while preserving
its value on the documented domain. Each operation applies one named
transformation rather than searching, so the result shape is predictable. For
the search-based ladder see
[general simplification](simplification-general.md).

### expand

<a id="entry-presentation_kotlin_api_session_expand"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_expand.da532704e086"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun expand(target: UniffiExpression): UniffiExpression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_expand.422487fa6eb9"></a>
<p class="symi-entry-owner">Expression method: <code>UniffiExpression.expand</code></p>

```kotlin signature
fun expand(): UniffiExpression
```

</details>



Expand products, integer powers, and supported algebraic forms.

### partial_fractions

<a id="entry-presentation_kotlin_api_session_partial_fractions"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_partialfractions.5f8aaf403de5"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun partialFractions(
    inputExpression: UniffiExpression,
    variable: kotlin.String,
): UniffiExpression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_partialfractions.37badf8d446a"></a>
<p class="symi-entry-owner">Expression method: <code>UniffiExpression.partialFractions</code></p>

```kotlin signature
fun partialFractions(variable: kotlin.String): UniffiExpression
```

</details>



Decompose a rational expression into polynomial and proper-fraction terms over
the named variable.

For factorization, cancellation, collection, and radical operations, use
[general simplification](simplification-general.md).

## Algebraic form changes

### factor

<a id="entry-presentation_kotlin_api_session_factor"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_factor.1b442ebdb1ff"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun factor(target: UniffiExpression): UniffiExpression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_factor.55dedc5f6079"></a>
<p class="symi-entry-owner">Expression method: <code>UniffiExpression.factor</code></p>

```kotlin signature
fun factor(): UniffiExpression
```

</details>



Polynomial factorization over the rationals (full multivariate). With
`gaussian=True`, factor a univariate polynomial over the Gaussian integers
\(\mathbb{Z}[i]\); this form requires exactly one free variable and raises otherwise.

### collect

<a id="entry-presentation_kotlin_api_session_collect"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_collect.2571e76f2ee4"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun collect(
    inputExpression: UniffiExpression,
    generator: UniffiExpression,
): UniffiExpression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_collect.c4efd231ab7d"></a>
<p class="symi-entry-owner">Expression method: <code>UniffiExpression.collect</code></p>

```kotlin signature
fun collect(generator: UniffiExpression): UniffiExpression
```

</details>



Regroup the additive terms of `expression` by the numeric (integer or rational)
powers of a single `generator`, which may be a variable or an arbitrary
subexpression, writing the result as a sum of `generator^k * coefficient(k)`
terms without expanding the coefficients. For example, collecting
`a*x^2 + b*x^2 + a*x - b*x + c` by `x` yields `x^2*(a + b) + x*(a - b) + c`. The
rewrite is exact and equality-preserving; a numeric-literal generator, or a
generator that appears with only a single power, returns the input unchanged.

### complete_the_square

<a id="entry-presentation_kotlin_api_session_complete_the_square"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_completethesquare.b3c47f503e7b"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun completeTheSquare(
    inputExpression: UniffiExpression,
    variable: UniffiExpression,
): UniffiExpression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_completethesquare.35974729f836"></a>
<p class="symi-entry-owner">Expression method: <code>UniffiExpression.completeTheSquare</code></p>

```kotlin signature
fun completeTheSquare(variable: UniffiExpression): UniffiExpression
```

</details>



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

<a id="entry-presentation_kotlin_api_session_factor_common_terms"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_factorcommonterms.164047906815"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun factorCommonTerms(inputExpression: UniffiExpression): UniffiExpression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_factorcommonterms.72c3d3249a82"></a>
<p class="symi-entry-owner">Expression method: <code>UniffiExpression.factorCommonTerms</code></p>

```kotlin signature
fun factorCommonTerms(): UniffiExpression
```

</details>



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

<a id="entry-presentation_kotlin_api_session_rationalize_denominator"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_rationalizedenominator.696b26f4302d"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun rationalizeDenominator(inputExpression: UniffiExpression): UniffiExpression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_rationalizedenominator.ddc2dfd61639"></a>
<p class="symi-entry-owner">Expression method: <code>UniffiExpression.rationalizeDenominator</code></p>

```kotlin signature
fun rationalizeDenominator(): UniffiExpression
```

</details>



Rationalize a radical denominator through exact multiquadratic conjugation or
extended-Euclidean inversion in one rational n-th-root extension. For example,
`1 / (sqrt(3) - sqrt(2))` becomes `sqrt(3) + sqrt(2)`, and
`1 / (1 + 2^(1/3))` becomes `(1 - 2^(1/3) + 2^(2/3))/3`. The operation is
directed and returns its input unchanged when the denominator is outside its
bounded supported radical class or the exact remultiplication check fails.

### collect_radicals

<a id="entry-presentation_kotlin_api_session_collect_radicals"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_collectradicals.0abe4246adf2"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun collectRadicals(inputExpression: UniffiExpression): UniffiExpression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_collectradicals.34ef590c8524"></a>
<p class="symi-entry-owner">Expression method: <code>UniffiExpression.collectRadicals</code></p>

```kotlin signature
fun collectRadicals(): UniffiExpression
```

</details>



Collect like numeric radical kernels in a top-level sum. For example,
`a*sqrt(2) + b*sqrt(2) + 3` becomes `(a + b)*sqrt(2) + 3`. At most eight
distinct kernels are considered; inputs beyond that bound return unchanged.

### denest_radicals

<a id="entry-presentation_kotlin_api_session_denest_radicals"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_denestradicals.d919ebce059a"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun denestRadicals(inputExpression: UniffiExpression): UniffiExpression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_denestradicals.7c4576295d2c"></a>
<p class="symi-entry-owner">Expression method: <code>UniffiExpression.denestRadicals</code></p>

```kotlin signature
fun denestRadicals(): UniffiExpression
```

</details>



Denest the bounded depth-two real-radical subset bottom-up: rational quadratic
surds, up to three inner quadratic surds, and `cbrt(a + b*sqrt(c))` when its
exact resolvent has a rational root. For example, `sqrt(3 + 2*sqrt(2))` becomes
`1 + sqrt(2)` and `cbrt(2 + sqrt(5))` becomes `(1 + sqrt(5))/2`. A form outside
this decidable subset, such as `sqrt(1 + sqrt(2))`, is returned unchanged. Every
candidate is verified by exact repowering and principal-real-sign selection.

## Example

