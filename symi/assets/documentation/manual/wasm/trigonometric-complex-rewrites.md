# Trigonometric and complex rewrites

Trigonometric, logarithmic, exponential, and complex rewrites are separated from general simplification because their identities depend on domains and branch behavior.

### expand_complex

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.expand_complex`](/symi/python/trigonometric-complex-rewrites#expand_complex) in Python, [`UniffiExpression.expandComplex`](/symi/kotlin/trigonometric-complex-rewrites#expand_complex) in Kotlin, [`UniffiExpression.expandComplex`](/symi/swift/trigonometric-complex-rewrites#expand_complex) in Swift, [`api::algebra::Session::expand_complex`](/symi/rust/trigonometric-complex-rewrites#expand_complex) in Rust.*



Decompose an expression exactly as `real_part(expression) + i*imaginary_part(expression)`.
Products, integer powers, and `exp`, `sin`, `cos`, `sinh`, and `cosh` are expanded through
their Cartesian identities. Symbol assumptions determine which atoms are real. Unknown atoms
and branch-sensitive operations such as logarithms and non-integer powers remain represented by
symbolic real- and imaginary-part calls. The directed operation also expands a supported modulus
under real assumptions: `abs(x + i*y)` becomes `sqrt(x^2 + y^2)`, and exact integer powers under
the modulus preserve their original poles while expanding the Cartesian norm. Oversized or
unsupported modulus arguments remain unchanged or wrapper-bearing.

### real_part

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.real_part`](/symi/python/trigonometric-complex-rewrites#real_part) in Python, [`UniffiExpression.realPart`](/symi/kotlin/trigonometric-complex-rewrites#real_part) in Kotlin, [`UniffiExpression.realPart`](/symi/swift/trigonometric-complex-rewrites#real_part) in Swift, [`api::Expression::real_part`](/symi/rust/trigonometric-complex-rewrites#real_part) in Rust.*



Return the exact real component of an expression. For example, if `y` is declared real,
`real_part(exp(i*y))` is `cos(y)`. An atom whose reality is unknown returns a symbolic
`real_part(atom)` call. The returned expression is always known to be real.

### imaginary_part

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.imaginary_part`](/symi/python/trigonometric-complex-rewrites#imaginary_part) in Python, [`UniffiExpression.imaginaryPart`](/symi/kotlin/trigonometric-complex-rewrites#imaginary_part) in Kotlin, [`UniffiExpression.imaginaryPart`](/symi/swift/trigonometric-complex-rewrites#imaginary_part) in Swift, [`api::Expression::imaginary_part`](/symi/rust/trigonometric-complex-rewrites#imaginary_part) in Rust.*



Return the exact imaginary component of an expression. For example, if `y` is declared real,
`imaginary_part(exp(i*y))` is `sin(y)`. An atom whose reality is unknown returns a symbolic
`imaginary_part(atom)` call. The returned expression is always known to be real.

### combine_powers

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.combine_powers`](/symi/python/trigonometric-complex-rewrites#combine_powers) in Python, [`UniffiExpression.combinePowers`](/symi/kotlin/trigonometric-complex-rewrites#combine_powers) in Kotlin, [`UniffiExpression.combinePowers`](/symi/swift/trigonometric-complex-rewrites#combine_powers) in Swift, [`api::algebra::Session::combine_powers`](/symi/rust/trigonometric-complex-rewrites#combine_powers) in Rust.*



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

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.expand_power_base`](/symi/python/trigonometric-complex-rewrites#expand_power_base) in Python, [`UniffiExpression.expandPowerBase`](/symi/kotlin/trigonometric-complex-rewrites#expand_power_base) in Kotlin, [`UniffiExpression.expandPowerBase`](/symi/swift/trigonometric-complex-rewrites#expand_power_base) in Swift, [`api::algebra::Session::expand_power_base`](/symi/rust/trigonometric-complex-rewrites#expand_power_base) in Rust.*



Split a power whose base is structurally a product into a product of powers
(`(x*y)^a -> x^a * y^a`) at every power node whose exponent is provably an
integer — the only unconditionally valid gate for this direction, since the split
introduces `x^a` and `y^a` individually and each needs its own base off the cut.
With `n` declared an integer, `(x*y)^n` becomes `x^n * y^n`. Kahan's example
`(x*y)^(1/2)` over unconstrained `x, y` is left unchanged, as is any other
unprovable site; there is no force mode. A base that is not structurally a
product is never decomposed, so `6^x` is not split into `2^x * 3^x`.

### denest_powers

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.denest_powers`](/symi/python/trigonometric-complex-rewrites#denest_powers) in Python, [`UniffiExpression.denestPowers`](/symi/kotlin/trigonometric-complex-rewrites#denest_powers) in Kotlin, [`UniffiExpression.denestPowers`](/symi/swift/trigonometric-complex-rewrites#denest_powers) in Swift, [`api::algebra::Session::denest_powers`](/symi/rust/trigonometric-complex-rewrites#denest_powers) in Rust.*



Flatten a power of a power into a single power (`(x^a)^b -> x^(a*b)`) at every
power node whose outer exponent is provably an integer, which is valid on the
principal branch because an integer power never routes through `log`. With `n`
declared an integer, `(x^a)^n` becomes `x^(a*n)`. A fractional outer exponent is
left unchanged — `((-1)^2)^(1/2)` is `1` while `(-1)^(2*(1/2))` is `-1` — and
there is no force mode. A base that is not structurally a power is untouched.

### simplify_trigonometric

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.simplify_trigonometric`](/symi/python/trigonometric-complex-rewrites#simplify_trigonometric) in Python, [`UniffiExpression.simplifyTrigonometric`](/symi/kotlin/trigonometric-complex-rewrites#simplify_trigonometric) in Kotlin, [`UniffiExpression.simplifyTrigonometric`](/symi/swift/trigonometric-complex-rewrites#simplify_trigonometric) in Swift, [`api::Expression::simplify_trigonometric`](/symi/rust/trigonometric-complex-rewrites#simplify_trigonometric) in Rust.*



Fu-style trigonometric simplification toward fewer/cheaper trig calls.

### expand_trigonometric

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.expand_trigonometric`](/symi/python/trigonometric-complex-rewrites#expand_trigonometric) in Python, [`UniffiExpression.expandTrigonometric`](/symi/kotlin/trigonometric-complex-rewrites#expand_trigonometric) in Kotlin, [`UniffiExpression.expandTrigonometric`](/symi/swift/trigonometric-complex-rewrites#expand_trigonometric) in Swift, [`api::Expression::expand_trigonometric`](/symi/rust/trigonometric-complex-rewrites#expand_trigonometric) in Rust.*



Expand trig/hyperbolic functions of sums and positive integer literal multiple angles. The directed
operation may increase expression size; unsupported, symbolic, noninteger, or over-budget
multipliers remain unchanged. A successful expansion is structurally idempotent, and recursively
admitted sums are expanded in the same pass.

### combine_trigonometric

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.combine_trigonometric`](/symi/python/trigonometric-complex-rewrites#combine_trigonometric) in Python, [`UniffiExpression.combineTrigonometric`](/symi/kotlin/trigonometric-complex-rewrites#combine_trigonometric) in Kotlin, [`UniffiExpression.combineTrigonometric`](/symi/swift/trigonometric-complex-rewrites#combine_trigonometric) in Swift, [`api::Expression::combine_trigonometric`](/symi/rust/trigonometric-complex-rewrites#combine_trigonometric) in Rust.*



Inverse direction of `expand_trigonometric`: product-to-sum and
angle-recombination rules.

### combine_logarithm

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.combine_logarithm`](/symi/python/trigonometric-complex-rewrites#combine_logarithm) in Python, [`UniffiExpression.combineLogarithm`](/symi/kotlin/trigonometric-complex-rewrites#combine_logarithm) in Kotlin, [`UniffiExpression.combineLogarithm`](/symi/swift/trigonometric-complex-rewrites#combine_logarithm) in Swift, [`api::algebra::Session::combine_logarithm`](/symi/rust/trigonometric-complex-rewrites#combine_logarithm) in Rust.*



\(\log a + \log b \rightarrow \log(a b)\) and \(n\log a \rightarrow \log(a^n)\) when the transformation
preserves the expression's domain.

### expand_logarithm

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.expand_logarithm`](/symi/python/trigonometric-complex-rewrites#expand_logarithm) in Python, [`UniffiExpression.expandLogarithm`](/symi/kotlin/trigonometric-complex-rewrites#expand_logarithm) in Kotlin, [`UniffiExpression.expandLogarithm`](/symi/swift/trigonometric-complex-rewrites#expand_logarithm) in Swift, [`api::algebra::Session::expand_logarithm`](/symi/rust/trigonometric-complex-rewrites#expand_logarithm) in Rust.*



\(\log(a b) \rightarrow \log a + \log b\) and \(\log(a^n) \rightarrow n\log a\), applied only where the
operands are provably positive. Operands of unknown sign pass through
unchanged.

### rewrite_as_exponential

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.rewrite_as_exponential`](/symi/python/trigonometric-complex-rewrites#rewrite_as_exponential) in Python, [`UniffiExpression.rewriteAsExponential`](/symi/kotlin/trigonometric-complex-rewrites#rewrite_as_exponential) in Kotlin, [`UniffiExpression.rewriteAsExponential`](/symi/swift/trigonometric-complex-rewrites#rewrite_as_exponential) in Swift, [`api::algebra::Session::rewrite_as_exponential`](/symi/rust/trigonometric-complex-rewrites#rewrite_as_exponential) in Rust.*



Euler-form rewriter: replace every trigonometric/hyperbolic call with the
equivalent complex-exponential expression (bottom-up).

### rewrite_as_trigonometric

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.rewrite_as_trigonometric`](/symi/python/trigonometric-complex-rewrites#rewrite_as_trigonometric) in Python, [`UniffiExpression.rewriteAsTrigonometric`](/symi/kotlin/trigonometric-complex-rewrites#rewrite_as_trigonometric) in Kotlin, [`UniffiExpression.rewriteAsTrigonometric`](/symi/swift/trigonometric-complex-rewrites#rewrite_as_trigonometric) in Swift, [`api::algebra::Session::rewrite_as_trigonometric`](/symi/rust/trigonometric-complex-rewrites#rewrite_as_trigonometric) in Rust.*



Inverse of `rewrite_as_exponential`. Recognition is shape-strict: canonical
Euler forms collapse back to trig/hyperbolic calls, anything else passes
through unchanged, so the round trip is the identity.

### rewrite_trigonometric_basis

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.rewrite_trigonometric_basis`](/symi/python/trigonometric-complex-rewrites#rewrite_trigonometric_basis) in Python, [`UniffiExpression.rewriteTrigonometricBasis`](/symi/kotlin/trigonometric-complex-rewrites#rewrite_trigonometric_basis) in Kotlin, [`UniffiExpression.rewriteTrigonometricBasis`](/symi/swift/trigonometric-complex-rewrites#rewrite_trigonometric_basis) in Swift, [`api::Expression::rewrite_trigonometric_basis`](/symi/rust/trigonometric-complex-rewrites#rewrite_trigonometric_basis) in Rust.*



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

```javascript
const x = symi.symbol("x", { real: true });
const value = symi.exp(symi.imaginaryUnit.multiply(x));

console.log(symi.realPart(value).toString());
console.log(symi.imaginaryPart(value).toString());
```


## Additional API

<a id="placement-placement.wasm.wasm_class.context_combinelogarithm.d75c6b7bb203"></a>
### Context.combineLogarithm

`pub fn combine_logarithm(&self, input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_combinetrigonometric.741f4fcc74d0"></a>
### Context.combineTrigonometric

`pub fn combine_trigonometric(&self, input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_expandcomplex.ec1c84d2cb66"></a>
### Context.expandComplex

`pub fn expand_complex(&self, input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_expandlogarithm.edb9385b56d9"></a>
### Context.expandLogarithm

`pub fn expand_logarithm(&self, input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_expandtrigonometric.a896374747a3"></a>
### Context.expandTrigonometric

`pub fn expand_trigonometric(&self, input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_rewriteastrigonometric.90428578b902"></a>
### Context.rewriteAsTrigonometric

`pub fn rewrite_as_trigonometric(&self, input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_rewritetrigonometricbasis.9ea791c98c65"></a>
### Context.rewriteTrigonometricBasis

`pub fn rewrite_trigonometric_basis(&self, input_expression: &Expression, basis: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_simplifytrigonometric.7691da56d683"></a>
### Context.simplifyTrigonometric

`pub fn simplify_trigonometric(&self, input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_combinelogarithm.a13ee73e1e1d"></a>
### Expression.combineLogarithm

`pub fn combine_logarithm(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_combinetrigonometric.379f033759d1"></a>
### Expression.combineTrigonometric

`pub fn combine_trigonometric(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_evaluatetocomplexinexact.315e742a4077"></a>
### Expression.evaluateToComplexInexact

`pub fn evaluate_to_complex_inexact(&self) -> Result<Vec<f64>, JsError>`

Returns `Result<Vec<f64>, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_evaluatetocomplexinexactatprecision.84d0eabab4f4"></a>
### Expression.evaluateToComplexInexactAtPrecision

`pub fn evaluate_to_complex_inexact_at_precision(&self, precision_bits: u32) -> Result<Vec<f64>, JsError>`

Returns `Result<Vec<f64>, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_expandcomplex.7c66ec5fb625"></a>
### Expression.expandComplex

`pub fn expand_complex(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_expandlogarithm.abcb3401c393"></a>
### Expression.expandLogarithm

`pub fn expand_logarithm(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_expandtrigonometric.1154bf16d311"></a>
### Expression.expandTrigonometric

`pub fn expand_trigonometric(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_rewriteastrigonometric.825595943505"></a>
### Expression.rewriteAsTrigonometric

`pub fn rewrite_as_trigonometric(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_rewritetrigonometricbasis.874f98eb58f4"></a>
### Expression.rewriteTrigonometricBasis

`pub fn rewrite_trigonometric_basis(&self, basis: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_simplifytrigonometric.f20902a32327"></a>
### Expression.simplifyTrigonometric

`pub fn simplify_trigonometric(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_combinelogarithm.660beda16ea9"></a>
### module.combineLogarithm

`fn combine_logarithm(input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_combinetrigonometric.82565a45a596"></a>
### module.combineTrigonometric

`fn combine_trigonometric(input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_expandcomplex.882987d16cbf"></a>
### module.expandComplex

`fn expand_complex(input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_expandlogarithm.c138343492e9"></a>
### module.expandLogarithm

`fn expand_logarithm(input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_expandtrigonometric.af837d1e113e"></a>
### module.expandTrigonometric

`fn expand_trigonometric(input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_rewriteastrigonometric.144585f41e3f"></a>
### module.rewriteAsTrigonometric

`fn rewrite_as_trigonometric(input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_rewritetrigonometricbasis.5eb3b463d234"></a>
### module.rewriteTrigonometricBasis

`fn rewrite_trigonometric_basis(input_expression: &Expression, basis: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_simplifytrigonometric.ad2187f785f4"></a>
### module.simplifyTrigonometric

`fn simplify_trigonometric(input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

