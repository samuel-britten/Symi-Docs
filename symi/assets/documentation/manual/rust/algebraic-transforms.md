# Algebraic transforms

Directed algebraic rewrites change the form of an expression while preserving
its value on the documented domain. Each operation applies one named
transformation rather than searching, so the result shape is predictable. For
the search-based ladder see
[general simplification](simplification-general.md).

### expand

<a id="placement-placement.rust.native_rust.api_expression_expand.59ef333b8608"></a>
`symi::api::Expression — pub fn expand(&self) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_session_expand.c0a87f8d8c5c"></a>
`symi::api::Session — pub fn expand(&self, target: &Expression) -> Result<Expression, ApiError>`



Expand products, integer powers, and supported algebraic forms.

### partial_fractions

<a id="placement-placement.rust.native_rust.api_algebra_session_partial_fractions.3aa98bfa9d6e"></a>
`symi::api::algebra::Session — pub fn partial_fractions<'a, VariableType>(&self, input_expression: &Expression, variable: VariableType) -> Result<Expression, ApiError> where VariableType: Into<VariableLike<'a>>`

<a id="placement-placement.rust.native_rust.api_expression_operations_expression_partial_fractions.6c562c4edac4"></a>
`symi::api::expression_operations::Expression — pub fn partial_fractions<'a, VariableType>(&self, variable: VariableType) -> Result<Expression, ApiError> where VariableType: Into<VariableLike<'a>>`



Decompose a rational expression into polynomial and proper-fraction terms over
the named variable.

For factorization, cancellation, collection, and radical operations, use
[general simplification](simplification-general.md).

## Algebraic form changes

### factor

<a id="placement-placement.rust.native_rust.api_expression_factor.f21d2977170b"></a>
`symi::api::Expression — pub fn factor(&self) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_session_factor.7215d3dd9b87"></a>
`symi::api::Session — pub fn factor(&self, target: &Expression) -> Result<Expression, ApiError>`



Polynomial factorization over the rationals (full multivariate). With
`gaussian=True`, factor a univariate polynomial over the Gaussian integers
\(\mathbb{Z}[i]\); this form requires exactly one free variable and raises otherwise.

### collect

<a id="placement-placement.rust.native_rust.api_algebra_session_collect.8c7e43f82446"></a>
`symi::api::algebra::Session — pub fn collect(&self, input_expression: &Expression, generator: &Expression) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_expression_operations_expression_collect.85f633352c37"></a>
`symi::api::expression_operations::Expression — pub fn collect(&self, generator: &Expression) -> Result<Expression, ApiError>`



Regroup the additive terms of `expression` by the numeric (integer or rational)
powers of a single `generator`, which may be a variable or an arbitrary
subexpression, writing the result as a sum of `generator^k * coefficient(k)`
terms without expanding the coefficients. For example, collecting
`a*x^2 + b*x^2 + a*x - b*x + c` by `x` yields `x^2*(a + b) + x*(a - b) + c`. The
rewrite is exact and equality-preserving; a numeric-literal generator, or a
generator that appears with only a single power, returns the input unchanged.

### complete_the_square

<a id="placement-placement.rust.native_rust.api_algebra_session_complete_the_square.a80a31ff9175"></a>
`symi::api::algebra::Session — pub fn complete_the_square(&self, input_expression: &Expression, variable: &Expression) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_expression_operations_expression_complete_the_square.bba36967df9a"></a>
`symi::api::expression_operations::Expression — pub fn complete_the_square(&self, variable: &Expression) -> Result<Expression, ApiError>`



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

<a id="placement-placement.rust.native_rust.api_algebra_session_factor_common_terms.d6d507bd8455"></a>
`symi::api::algebra::Session — pub fn factor_common_terms(&self, input_expression: &Expression) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_expression_operations_expression_factor_common_terms.8fa0904f8ef3"></a>
`symi::api::expression_operations::Expression — pub fn factor_common_terms(&self) -> Result<Expression, ApiError>`



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

<a id="placement-placement.rust.native_rust.api_algebra_session_rationalize_denominator.42781f5b509e"></a>
`symi::api::algebra::Session — pub fn rationalize_denominator(&self, input_expression: &Expression) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_expression_operations_expression_rationalize_denominator.8b805219b61c"></a>
`symi::api::expression_operations::Expression — pub fn rationalize_denominator(&self) -> Result<Expression, ApiError>`



Rationalize a radical denominator through exact multiquadratic conjugation or
extended-Euclidean inversion in one rational n-th-root extension. For example,
`1 / (sqrt(3) - sqrt(2))` becomes `sqrt(3) + sqrt(2)`, and
`1 / (1 + 2^(1/3))` becomes `(1 - 2^(1/3) + 2^(2/3))/3`. The operation is
directed and returns its input unchanged when the denominator is outside its
bounded supported radical class or the exact remultiplication check fails.

### collect_radicals

<a id="placement-placement.rust.native_rust.api_algebra_session_collect_radicals.e112f56cb640"></a>
`symi::api::algebra::Session — pub fn collect_radicals(&self, input_expression: &Expression) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_expression_operations_expression_collect_radicals.b798e1d391d9"></a>
`symi::api::expression_operations::Expression — pub fn collect_radicals(&self) -> Result<Expression, ApiError>`



Collect like numeric radical kernels in a top-level sum. For example,
`a*sqrt(2) + b*sqrt(2) + 3` becomes `(a + b)*sqrt(2) + 3`. At most eight
distinct kernels are considered; inputs beyond that bound return unchanged.

### denest_radicals

<a id="placement-placement.rust.native_rust.api_algebra_session_denest_radicals.5c2c44def0fb"></a>
`symi::api::algebra::Session — pub fn denest_radicals(&self, input_expression: &Expression) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_expression_operations_expression_denest_radicals.a66dae3b13a2"></a>
`symi::api::expression_operations::Expression — pub fn denest_radicals(&self) -> Result<Expression, ApiError>`



Denest the bounded depth-two real-radical subset bottom-up: rational quadratic
surds, up to three inner quadratic surds, and `cbrt(a + b*sqrt(c))` when its
exact resolvent has a rational root. For example, `sqrt(3 + 2*sqrt(2))` becomes
`1 + sqrt(2)` and `cbrt(2 + sqrt(5))` becomes `(1 + sqrt(5))/2`. A form outside
this decidable subset, such as `sqrt(1 + sqrt(2))`, is returned unchanged. Every
candidate is verified by exact repowering and principal-real-sign selection.

## Example

Rewrite one rational expression through several directed forms.

```rust
use symi::api::prelude::*;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let session = Session::new();
    let rational_function = session.parse("(x^2 - 1)/(x^2 + 2*x + 1)")?;

    println!("{}", rational_function.cancel()?);
    println!("{}", session.parse("(x + 1)^3")?.expand()?);
    println!("{}", session.parse("x*y + x")?.factor()?);
    Ok(())
}
```

