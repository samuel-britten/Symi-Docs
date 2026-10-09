# Algebraic transforms

Directed algebraic rewrites change the form of an expression while preserving
its value on the documented domain. Each operation applies one named
transformation rather than searching, so the result shape is predictable. For
the search-based ladder see
[general simplification](simplification-general.md).

### expand

<a id="placement-placement.swift.swift_object.uniffiexpression_expand.f186951724c4"></a>
`UniffiExpression.expand() -> UniffiExpression`

<a id="placement-placement.swift.swift_object.uniffisession_expand.2e4777fb7b27"></a>
`UniffiSession.expand(target: UniffiExpression) -> UniffiExpression`



Expand products, integer powers, and supported algebraic forms.

### partial_fractions

<a id="placement-placement.swift.swift_object.uniffiexpression_partialfractions.ef670b01ea84"></a>
`UniffiExpression.partialFractions(variable: String) -> UniffiExpression`

<a id="placement-placement.swift.swift_object.uniffisession_partialfractions.a7050c197af0"></a>
`UniffiSession.partialFractions(inputExpression: UniffiExpression, variable: String) -> UniffiExpression`



Decompose a rational expression into polynomial and proper-fraction terms over
the named variable.

For factorization, cancellation, collection, and radical operations, use
[general simplification](simplification-general.md).

## Algebraic form changes

### factor

<a id="placement-placement.swift.swift_object.uniffiexpression_factor.d040ed6cbf42"></a>
`UniffiExpression.factor() -> UniffiExpression`

<a id="placement-placement.swift.swift_object.uniffisession_factor.92c9acc8f887"></a>
`UniffiSession.factor(target: UniffiExpression) -> UniffiExpression`



Polynomial factorization over the rationals (full multivariate). With
`gaussian=True`, factor a univariate polynomial over the Gaussian integers
\(\mathbb{Z}[i]\); this form requires exactly one free variable and raises otherwise.

### collect

<a id="placement-placement.swift.swift_object.uniffiexpression_collect.436e7c6f877f"></a>
`UniffiExpression.collect(generator: UniffiExpression) -> UniffiExpression`

<a id="placement-placement.swift.swift_object.uniffisession_collect.41ea0e93f668"></a>
`UniffiSession.collect(inputExpression: UniffiExpression, generator: UniffiExpression) -> UniffiExpression`



Regroup the additive terms of `expression` by the numeric (integer or rational)
powers of a single `generator`, which may be a variable or an arbitrary
subexpression, writing the result as a sum of `generator^k * coefficient(k)`
terms without expanding the coefficients. For example, collecting
`a*x^2 + b*x^2 + a*x - b*x + c` by `x` yields `x^2*(a + b) + x*(a - b) + c`. The
rewrite is exact and equality-preserving; a numeric-literal generator, or a
generator that appears with only a single power, returns the input unchanged.

### complete_the_square

<a id="placement-placement.swift.swift_object.uniffiexpression_completethesquare.a76877cb15a3"></a>
`UniffiExpression.completeTheSquare(variable: UniffiExpression) -> UniffiExpression`

<a id="placement-placement.swift.swift_object.uniffisession_completethesquare.f649ec0ef170"></a>
`UniffiSession.completeTheSquare(inputExpression: UniffiExpression, variable: UniffiExpression) -> UniffiExpression`



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

<a id="placement-placement.swift.swift_object.uniffiexpression_factorcommonterms.193b5e9165e5"></a>
`UniffiExpression.factorCommonTerms() -> UniffiExpression`

<a id="placement-placement.swift.swift_object.uniffisession_factorcommonterms.c6dfda75a394"></a>
`UniffiSession.factorCommonTerms(inputExpression: UniffiExpression) -> UniffiExpression`



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

<a id="placement-placement.swift.swift_object.uniffiexpression_rationalizedenominator.4bc227a3475e"></a>
`UniffiExpression.rationalizeDenominator() -> UniffiExpression`

<a id="placement-placement.swift.swift_object.uniffisession_rationalizedenominator.6701348299e5"></a>
`UniffiSession.rationalizeDenominator(inputExpression: UniffiExpression) -> UniffiExpression`



Rationalize a radical denominator through exact multiquadratic conjugation or
extended-Euclidean inversion in one rational n-th-root extension. For example,
`1 / (sqrt(3) - sqrt(2))` becomes `sqrt(3) + sqrt(2)`, and
`1 / (1 + 2^(1/3))` becomes `(1 - 2^(1/3) + 2^(2/3))/3`. The operation is
directed and returns its input unchanged when the denominator is outside its
bounded supported radical class or the exact remultiplication check fails.

### collect_radicals

<a id="placement-placement.swift.swift_object.uniffiexpression_collectradicals.8a12c9e64189"></a>
`UniffiExpression.collectRadicals() -> UniffiExpression`

<a id="placement-placement.swift.swift_object.uniffisession_collectradicals.65e775e096f6"></a>
`UniffiSession.collectRadicals(inputExpression: UniffiExpression) -> UniffiExpression`



Collect like numeric radical kernels in a top-level sum. For example,
`a*sqrt(2) + b*sqrt(2) + 3` becomes `(a + b)*sqrt(2) + 3`. At most eight
distinct kernels are considered; inputs beyond that bound return unchanged.

### denest_radicals

<a id="placement-placement.swift.swift_object.uniffiexpression_denestradicals.ef465d8224e8"></a>
`UniffiExpression.denestRadicals() -> UniffiExpression`

<a id="placement-placement.swift.swift_object.uniffisession_denestradicals.9508d93c545f"></a>
`UniffiSession.denestRadicals(inputExpression: UniffiExpression) -> UniffiExpression`



Denest the bounded depth-two real-radical subset bottom-up: rational quadratic
surds, up to three inner quadratic surds, and `cbrt(a + b*sqrt(c))` when its
exact resolvent has a rational root. For example, `sqrt(3 + 2*sqrt(2))` becomes
`1 + sqrt(2)` and `cbrt(2 + sqrt(5))` becomes `(1 + sqrt(5))/2`. A form outside
this decidable subset, such as `sqrt(1 + sqrt(2))`, is returned unchanged. Every
candidate is verified by exact repowering and principal-real-sign selection.

## Example

