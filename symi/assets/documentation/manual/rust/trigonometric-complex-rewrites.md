# Trigonometric and complex rewrites

Trigonometric, logarithmic, exponential, and complex rewrites are separated from general simplification because their identities depend on domains and branch behavior.

### expand_complex

<a id="placement-placement.rust.native_rust.api_algebra_session_expand_complex.8aa76ff87554"></a>
`symi::api::algebra::Session — pub fn expand_complex(&self, input_expression: &Expression) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_expression_operations_expression_expand_complex.9c293f464f3e"></a>
`symi::api::expression_operations::Expression — pub fn expand_complex(&self) -> Result<Expression, ApiError>`



Decompose an expression exactly as `real_part(expression) + i*imaginary_part(expression)`.
Products, integer powers, and `exp`, `sin`, `cos`, `sinh`, and `cosh` are expanded through
their Cartesian identities. Symbol assumptions determine which atoms are real. Unknown atoms
and branch-sensitive operations such as logarithms and non-integer powers remain represented by
symbolic real- and imaginary-part calls. The directed operation also expands a supported modulus
under real assumptions: `abs(x + i*y)` becomes `sqrt(x^2 + y^2)`, and exact integer powers under
the modulus preserve their original poles while expanding the Cartesian norm. Oversized or
unsupported modulus arguments remain unchanged or wrapper-bearing.

### real_part

<a id="placement-placement.rust.native_rust.api_expression_real_part.a37e6d768c29"></a>
`symi::api::Expression — pub fn real_part(&self) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_session_real_part.38bcca50a70e"></a>
`symi::api::Session — pub fn real_part(&self, target: &Expression) -> Result<Expression, ApiError>`



Return the exact real component of an expression. For example, if `y` is declared real,
`real_part(exp(i*y))` is `cos(y)`. An atom whose reality is unknown returns a symbolic
`real_part(atom)` call. The returned expression is always known to be real.

### imaginary_part

<a id="placement-placement.rust.native_rust.api_expression_imaginary_part.73bc1b4e2851"></a>
`symi::api::Expression — pub fn imaginary_part(&self) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_session_imaginary_part.b4771edd5c0c"></a>
`symi::api::Session — pub fn imaginary_part(&self, target: &Expression) -> Result<Expression, ApiError>`



Return the exact imaginary component of an expression. For example, if `y` is declared real,
`imaginary_part(exp(i*y))` is `sin(y)`. An atom whose reality is unknown returns a symbolic
`imaginary_part(atom)` call. The returned expression is always known to be real.

### combine_powers

<a id="placement-placement.rust.native_rust.api_algebra_session_combine_powers.4547ac2b3231"></a>
`symi::api::algebra::Session — pub fn combine_powers(&self, input_expression: &Expression) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_expression_operations_expression_combine_powers.ab07ff93f33a"></a>
`symi::api::expression_operations::Expression — pub fn combine_powers(&self) -> Result<Expression, ApiError>`



Combine same-exponent powers into a single power of the merged base
(`x^a * y^a -> (x*y)^a`) at every product node where the rewrite is provably
valid. This identity is false across the branch cut of the complex logarithm —
at `x = y = -1` and `a = 1/2` the left side is `i*i = -1` while the right side
is `sqrt(1) = 1` — so it fires only when the exponent is provably an integer or
when **every** combined base is provably positive. Positivity of the merged base
is not enough: `(-2)^x * (-3)^x` is left alone, because at `x = 1/2` combining it
to `6^x` would flip the sign of the result. Positive numeric-literal bases need
no assumptions at all, so `2^x * 3^x` becomes `6^x` and `(1/2)^x * 3^x` becomes
`(3/2)^x`. With `n` declared an integer, `x^n * y^n` becomes `(x*y)^n`; the
exponent gate recurses structurally, so a compound exponent like `2*n` gates the
same way. There is no force mode: a site whose gate is not provable is left
unchanged, and an expression with no provable site is returned as-is.

### expand_power_base

<a id="placement-placement.rust.native_rust.api_algebra_session_expand_power_base.358396965966"></a>
`symi::api::algebra::Session — pub fn expand_power_base(&self, input_expression: &Expression) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_expression_operations_expression_expand_power_base.fb010d02f61c"></a>
`symi::api::expression_operations::Expression — pub fn expand_power_base(&self) -> Result<Expression, ApiError>`



Split a power whose base is structurally a product into a product of powers
(`(x*y)^a -> x^a * y^a`) at every power node whose exponent is provably an
integer — the only unconditionally valid gate for this direction, since the split
introduces `x^a` and `y^a` individually and each needs its own base off the cut.
With `n` declared an integer, `(x*y)^n` becomes `x^n * y^n`. Kahan's example
`(x*y)^(1/2)` over unconstrained `x, y` is left unchanged, as is any other
unprovable site; there is no force mode. A base that is not structurally a
product is never decomposed, so `6^x` is not split into `2^x * 3^x`.

### denest_powers

<a id="placement-placement.rust.native_rust.api_algebra_session_denest_powers.68e29c497595"></a>
`symi::api::algebra::Session — pub fn denest_powers(&self, input_expression: &Expression) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_expression_operations_expression_denest_powers.f656252fc1d5"></a>
`symi::api::expression_operations::Expression — pub fn denest_powers(&self) -> Result<Expression, ApiError>`



Flatten a power of a power into a single power (`(x^a)^b -> x^(a*b)`) at every
power node whose outer exponent is provably an integer, which is valid on the
principal branch because an integer power never routes through `log`. With `n`
declared an integer, `(x^a)^n` becomes `x^(a*n)`. A fractional outer exponent is
left unchanged — `((-1)^2)^(1/2)` is `1` while `(-1)^(2*(1/2))` is `-1` — and
there is no force mode. A base that is not structurally a power is untouched.

### simplify_trigonometric

<a id="placement-placement.rust.native_rust.api_expression_simplify_trigonometric.f7433e1e8f42"></a>
`symi::api::Expression — pub fn simplify_trigonometric(&self) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_session_simplify_trigonometric.43b076acd6ce"></a>
`symi::api::Session — pub fn simplify_trigonometric(&self, target: &Expression) -> Result<Expression, ApiError>`



Fu-style trigonometric simplification toward fewer/cheaper trig calls.

### expand_trigonometric

<a id="placement-placement.rust.native_rust.api_expression_expand_trigonometric.9dea62c54355"></a>
`symi::api::Expression — pub fn expand_trigonometric(&self) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_session_expand_trigonometric.a57496d47117"></a>
`symi::api::Session — pub fn expand_trigonometric(&self, target: &Expression) -> Result<Expression, ApiError>`



Expand trig/hyperbolic functions of sums and positive integer literal multiple angles. The directed
operation may increase expression size; unsupported, symbolic, noninteger, or over-budget
multipliers remain unchanged. A successful expansion is structurally idempotent, and recursively
admitted sums are expanded in the same pass.

### combine_trigonometric

<a id="placement-placement.rust.native_rust.api_expression_combine_trigonometric.73b4736028bc"></a>
`symi::api::Expression — pub fn combine_trigonometric(&self) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_session_combine_trigonometric.4583d3fa6760"></a>
`symi::api::Session — pub fn combine_trigonometric(&self, target: &Expression) -> Result<Expression, ApiError>`



Inverse direction of `expand_trigonometric`: product-to-sum and
angle-recombination rules.

### combine_logarithm

<a id="placement-placement.rust.native_rust.api_algebra_session_combine_logarithm.9b071189a169"></a>
`symi::api::algebra::Session — pub fn combine_logarithm(&self, input_expression: &Expression) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_expression_operations_expression_combine_logarithm.ac24e7937d41"></a>
`symi::api::expression_operations::Expression — pub fn combine_logarithm(&self) -> Result<Expression, ApiError>`



\(\log a + \log b \rightarrow \log(a b)\) and \(n\log a \rightarrow \log(a^n)\) when the transformation
preserves the expression's domain.

### expand_logarithm

<a id="placement-placement.rust.native_rust.api_algebra_session_expand_logarithm.f662c7ef374a"></a>
`symi::api::algebra::Session — pub fn expand_logarithm(&self, input_expression: &Expression) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_expression_operations_expression_expand_logarithm.1a10c25fffd1"></a>
`symi::api::expression_operations::Expression — pub fn expand_logarithm(&self) -> Result<Expression, ApiError>`



\(\log(a b) \rightarrow \log a + \log b\) and \(\log(a^n) \rightarrow n\log a\), applied only where the
operands are provably positive. Operands of unknown sign pass through
unchanged.

### rewrite_as_exponential

<a id="placement-placement.rust.native_rust.api_algebra_session_rewrite_as_exponential.34463dfa137a"></a>
`symi::api::algebra::Session — pub fn rewrite_as_exponential(&self, input_expression: &Expression) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_expression_operations_expression_rewrite_as_exponential.08b190fc4dc8"></a>
`symi::api::expression_operations::Expression — pub fn rewrite_as_exponential(&self) -> Result<Expression, ApiError>`



Euler-form rewriter: replace every trigonometric/hyperbolic call with the
equivalent complex-exponential expression (bottom-up).

### rewrite_as_trigonometric

<a id="placement-placement.rust.native_rust.api_algebra_session_rewrite_as_trigonometric.c6cfcdc0cf87"></a>
`symi::api::algebra::Session — pub fn rewrite_as_trigonometric(&self, input_expression: &Expression) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_expression_operations_expression_rewrite_as_trigonometric.124d839b8232"></a>
`symi::api::expression_operations::Expression — pub fn rewrite_as_trigonometric(&self) -> Result<Expression, ApiError>`



Inverse of `rewrite_as_exponential`. Recognition is shape-strict: canonical
Euler forms collapse back to trig/hyperbolic calls, anything else passes
through unchanged, so the round trip is the identity.

### rewrite_trigonometric_basis

<a id="placement-placement.rust.native_rust.api_expression_rewrite_trigonometric_basis.4346282c9656"></a>
`symi::api::Expression — pub fn rewrite_trigonometric_basis(&self, basis: TrigonometricBasis) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_session_rewrite_trigonometric_basis.067c21de75e6"></a>
`symi::api::Session — pub fn rewrite_trigonometric_basis(&self, target: &Expression, basis: TrigonometricBasis) -> Result<Expression, ApiError>`



Rewrite trigonometric and hyperbolic calls toward one of five named bases:
`sine_cosine`, `tangent`, `exponential`, `trigonometric`, or `hyperbolic`.
The sine/cosine basis maps `tan(x)` to `sin(x)/cos(x)` and reciprocal calls to
reciprocal powers; the tangent basis recognizes existing exact quotients such
as `sin(x)/cos(x)` but leaves a bare `sin(x)` unchanged; the exponential basis
maps `sin(x)` to its Euler form; the trigonometric basis recognizes those
canonical Euler forms; and the hyperbolic basis maps explicit imaginary
arguments such as `sin(i*x)` to `i*sinh(x)`. Only identities with the same
singularities on the whole complex domain are offered. In particular, the
half-angle rewrite of a bare sine into tangent is excluded because it introduces
undefined points. An unknown basis name is an error, and nodes without a valid
rewrite are returned unchanged.

## Example

Directed rewrites between trigonometric, exponential, and complex forms.

```rust
use symi::api::prelude::*;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let session = Session::new();
    let value = session.parse("exp(i*x)")?;

    println!("{}", session.real_part(&value)?);
    println!("{}", session.imaginary_part(&value)?);
    Ok(())
}
```

