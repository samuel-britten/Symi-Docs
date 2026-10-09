# Expression methods

Single-subject operations (transforms, calculus, solving, output) are also
available directly as methods on `Expression` — `e.simplify()`,
`e.integrate("x")`, `e.solve("x")`, `e.to_latex()`, … — delegating to the
context the expression belongs to. The entries in the operation chapters
document parameters and semantics; the method form drops the leading
expression argument. Exact input conversion and context ownership are
specified in [Conversions and collections](conversion-rules.md) and
[Context safety](context-safety.md).

### is_stale

*Not exposed by the WASM / JavaScript bindings. Available as [`Circle2d.is_stale`](/symi/python/expressions#is_stale) in Python, [`UniffiCircle2d.isStale`](/symi/kotlin/expressions#is_stale) in Kotlin, [`UniffiCircle2d.isStale`](/symi/swift/expressions#is_stale) in Swift, [`api::AssumptionProposition::is_stale`](/symi/rust/expressions#is_stale) in Rust.*



Reports whether resetting the owning context invalidated the expression. All other operations
reject a stale receiver with an actionable error.

## Arithmetic

Python uses the native operators `+ - * / ** -`; operands may be expressions,
integers, or exact fractions. JavaScript uses the equivalent named methods and
accepts facade expressions, `bigint`, and safe integral `number` values. All
route through the auto-simplifying builders.

### add

### subtract

### multiply

### divide

<a id="placement-placement.wasm.javascript_facade.expression_divide.0b155bc736f4"></a>
`Expression.divide(other: ExpressionLike): Expression`

<a id="placement-placement.wasm.wasm_class.expression_divide.5255284e4cf1"></a>
Raw WebAssembly: `pub fn divide(&self, other: &Expression) -> Result<Expression, JsError>`


### power

<a id="placement-placement.wasm.javascript_facade.expression_power.87eb729715d1"></a>
`Expression.power(exponent: ExpressionLike): Expression`

<a id="placement-placement.wasm.wasm_class.expression_power.61c34f700b84"></a>
Raw WebAssembly: `pub fn power(&self, exponent: &Expression) -> Result<Expression, JsError>`


### negate

<a id="placement-placement.wasm.javascript_facade.expression_negate.1e2d3469633f"></a>
`Expression.negate(): Expression`

<a id="placement-placement.wasm.wasm_class.expression_negate.2e41e0b07df3"></a>
Raw WebAssembly: `pub fn negate(&self) -> Result<Expression, JsError>`


## Substitution and structure

### substitute

<a id="placement-placement.wasm.wasm_class.expression_substitute.617d58709370"></a>
Raw WebAssembly: `pub fn substitute(&self, variable: &str, value: &Expression) -> Result<Expression, JsError>`


Replace every free occurrence of the named symbol with `value`, re-running
auto-simplification.

### rewrite_in_terms_of

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.rewrite_in_terms_of`](/symi/python/expressions#rewrite_in_terms_of) in Python, [`UniffiExpression.rewriteInTermsOf`](/symi/kotlin/expressions#rewrite_in_terms_of) in Kotlin, [`UniffiExpression.rewriteInTermsOf`](/symi/swift/expressions#rewrite_in_terms_of) in Swift, [`api::algebra::Session::rewrite_in_terms_of`](/symi/rust/expressions#rewrite_in_terms_of) in Rust.*


Rewrite the target in terms of `replacement` under the caller-supplied formal
relation `replacement = source`. Exact subtrees, canonical additive and
multiplicative extractions, integer exponential families, and positive
same-base power families are supported. Every inferred match is accepted only
when substituting `source` back exactly reconstructs the matched target.
Fractional exponential relations and branch-sensitive power identities
conservatively remain unchanged. To introduce a displayed name such as `z`,
pass `symbol("z")` as `replacement`; assigning the source expression to a
host-language variable named `z` does not create a symbolic name.

### free_variables

*Not exposed by the WASM / JavaScript bindings. Available as [`Expression.free_variables`](/symi/python/expressions#free_variables) in Python, [`UniffiExpression.freeVariables`](/symi/kotlin/expressions#free_variables) in Kotlin, [`UniffiExpression.freeVariables`](/symi/swift/expressions#free_variables) in Swift, [`api::Expression::free_variables`](/symi/rust/expressions#free_variables) in Rust.*


Sorted names of the free symbols. Bound binders (integration variables,
image-set parameters) are excluded; the constants pi/e are not symbols.

### expression_type

*Not exposed by the WASM / JavaScript bindings. Available as [`Expression.expression_type`](/symi/python/expressions#expression_type) in Python, [`UniffiExpression.expressionType`](/symi/kotlin/expressions#expression_type) in Kotlin, [`UniffiExpression.expressionType`](/symi/swift/expressions#expression_type) in Swift, [`api::expression_operations::Expression::expression_type`](/symi/rust/expressions#expression_type) in Rust.*


Top-level node kind: one of `integer`, `rational`, `symbol`, `constant`,
`sum`, `product`, `power`, `factorial`, `function_call`, `derivative`,
`integral`, `summation`, `laplace_transform`, `inverse_laplace_transform`,
`fourier_transform`, `inverse_fourier_transform`, `piecewise`,
`ordinary_differential_equation`, `recurrence_equation`, `interval`,
`finite_set`, `set_union`, `set_intersection`, `set_complement`,
`image_set`, `condition_set`.

### node_count

*Not exposed by the WASM / JavaScript bindings. Available as [`Expression.node_count`](/symi/python/expressions#node_count) in Python, [`UniffiExpression.nodeCount`](/symi/kotlin/expressions#node_count) in Kotlin, [`UniffiExpression.nodeCount`](/symi/swift/expressions#node_count) in Swift, [`api::Expression::node_count`](/symi/rust/expressions#node_count) in Rust.*


Number of nodes in the expression tree — the size measure used by the
simplifier; useful for comparing alternative forms.

### duplicate

<a id="placement-placement.wasm.javascript_facade.expression_duplicate.d4be0ef54df8"></a>
`Expression.duplicate(): Expression`

<a id="placement-placement.wasm.wasm_class.expression_duplicate.97b5cc29d8db"></a>
Raw WebAssembly: `pub fn duplicate(&self) -> Result<Expression, JsError>`


An independent handle to the same underlying expression. The recommended
JavaScript facade duplicates values before passing them through
ownership-transferring raw WASM arrays, so ordinary facade calls are
non-destructive. Callers using `facade.raw` directly must still duplicate a
handle they intend to retain. Python arguments are borrowed.

## Numeric evaluation

### evaluate_to_float

*Not exposed by the WASM / JavaScript bindings. Available as [`Expression.evaluate_to_float`](/symi/python/expressions#evaluate_to_float) in Python, [`UniffiExpression.evaluateToFloat`](/symi/kotlin/expressions#evaluate_to_float) in Kotlin, [`UniffiExpression.evaluateToFloat`](/symi/swift/expressions#evaluate_to_float) in Swift, [`api::analysis::Session::evaluate_to_float`](/symi/rust/expressions#evaluate_to_float) in Rust.*


Real double-precision value; raises when the expression has no real numeric
value (free symbols, complex value, pole).

### evaluate_to_complex_inexact

*Not exposed by the WASM / JavaScript bindings. Available as [`Expression.evaluate_to_complex_inexact`](/symi/python/expressions#evaluate_to_complex_inexact) in Python, [`UniffiExpression.evaluateToComplexInexact`](/symi/kotlin/expressions#evaluate_to_complex_inexact) in Kotlin, [`UniffiExpression.evaluateToComplexInexact`](/symi/swift/expressions#evaluate_to_complex_inexact) in Swift, [`api::analysis::Session::evaluate_to_complex_inexact`](/symi/rust/expressions#evaluate_to_complex_inexact) in Rust.*


Complex evaluation at the default working precision under the documented
principal-value branch cuts, as (real, imaginary). **Notes:** WASM returns a
two-element array; the deterministic software backend makes both bindings
bit-identical.

### evaluate_to_complex_inexact_at_precision

*Not exposed by the WASM / JavaScript bindings. Available as [`Expression.evaluate_to_complex_inexact_at_precision`](/symi/python/expressions#evaluate_to_complex_inexact_at_precision) in Python, [`UniffiExpression.evaluateToComplexInexactAtPrecision`](/symi/kotlin/expressions#evaluate_to_complex_inexact_at_precision) in Kotlin, [`UniffiExpression.evaluateToComplexInexactAtPrecision`](/symi/swift/expressions#evaluate_to_complex_inexact_at_precision) in Swift, [`api::analysis::Session::evaluate_to_complex_inexact_at_precision`](/symi/rust/expressions#evaluate_to_complex_inexact_at_precision) in Rust.*


Same with an explicit working precision in bits.

#### Lambert W branches

`lambert_w(z)` is the principal branch `W_0(z)`, and `lambert_w(k, z)` with an
exact integer `k` is the branch `W_k(z)`; `lambert_w(0, z)` canonicalises to the
unary form. Every integer branch evaluates over the whole complex plane at
arbitrary precision, so `lambert_w(-1).evaluate_to_complex_inexact()` gives
`W_0(-1) = -0.3181… + 1.3372…i` rather than declining.

The two branches that take real values do so on exactly these intervals:
\(W_0\) on \([-1/e, \infty)\) with \(W_0 \ge -1\), and \(W_{-1}\) on \([-1/e, 0)\) with
\(W_{-1} \le -1\). An exactly real argument on one of those branches is evaluated in
real arithmetic throughout, so `evaluate_to_float` succeeds and the imaginary
part is exactly zero — `lambert_w(-1, -0.1)` gives `-3.5771…`. Every other
branch or argument routes through the complex kernel, so `lambert_w(-1, 1)`
has a complex value but no real one.

\(W_k(0)\) for \(k \ne 0\) is a logarithmic singularity and declines; so does a
non-integer or symbolic branch index, which is never silently read as the
principal branch. `W_0(0) = 0`, `W_0(e) = 1`, and `W_0(-1/e) = W_-1(-1/e) = -1`
fold exactly at construction. The branch structure, cuts, and the safe defining
identity `W_k(z)*exp(W_k(z)) = z` are preserved by the branch-aware result.

## Equality

### equals

<a id="placement-placement.wasm.wasm_class.expression_equals.48b56c74b7ad"></a>
Raw WebAssembly: `pub fn equals(&self, other: &Expression) -> Result<bool, JsError>`


Mathematical equality test: \(\operatorname{simplify}(\operatorname{self} - \operatorname{other}) = 0\). A `False` result
means "could not prove equal", not a disproof.

## Shape queries

### is_matrix

*Not exposed by the WASM / JavaScript bindings. Available as [`Expression.is_matrix`](/symi/python/expressions#is_matrix) in Python, [`UniffiExpression.isMatrix`](/symi/kotlin/expressions#is_matrix) in Kotlin, [`UniffiExpression.isMatrix`](/symi/swift/expressions#is_matrix) in Swift, [`api::Expression::is_matrix`](/symi/rust/expressions#is_matrix) in Rust.*


Always `False` on expressions and `True` on `Matrix` objects, so mixed
result streams can be discriminated.

### is_equality

*Not exposed by the WASM / JavaScript bindings. Available as [`Expression.is_equality`](/symi/python/expressions#is_equality) in Python, [`UniffiExpression.isEquality`](/symi/kotlin/expressions#is_equality) in Kotlin, [`UniffiExpression.isEquality`](/symi/swift/expressions#is_equality) in Swift, [`api::Expression::is_equality`](/symi/rust/expressions#is_equality) in Rust.*


True for `equal(a, b)` relation nodes.

### is_integral

*Not exposed by the WASM / JavaScript bindings. Available as [`Expression.is_integral`](/symi/python/expressions#is_integral) in Python, [`UniffiExpression.isIntegral`](/symi/kotlin/expressions#is_integral) in Kotlin, [`UniffiExpression.isIntegral`](/symi/swift/expressions#is_integral) in Swift, [`api::Expression::is_integral`](/symi/rust/expressions#is_integral) in Rust.*


True for unevaluated integral nodes. (Distinct from the assumption query
`is_integer`.)

### is_union

*Not exposed by the WASM / JavaScript bindings. Available as [`Expression.is_union`](/symi/python/expressions#is_union) in Python, [`UniffiExpression.isUnion`](/symi/kotlin/expressions#is_union) in Kotlin, [`UniffiExpression.isUnion`](/symi/swift/expressions#is_union) in Swift, [`api::Expression::is_union`](/symi/rust/expressions#is_union) in Rust.*


### is_image_set

*Not exposed by the WASM / JavaScript bindings. Available as [`Expression.is_image_set`](/symi/python/expressions#is_image_set) in Python, [`UniffiExpression.isImageSet`](/symi/kotlin/expressions#is_image_set) in Kotlin, [`UniffiExpression.isImageSet`](/symi/swift/expressions#is_image_set) in Swift, [`api::Expression::is_image_set`](/symi/rust/expressions#is_image_set) in Rust.*


### is_finite_set

*Not exposed by the WASM / JavaScript bindings. Available as [`Expression.is_finite_set`](/symi/python/expressions#is_finite_set) in Python, [`UniffiExpression.isFiniteSet`](/symi/kotlin/expressions#is_finite_set) in Kotlin, [`UniffiExpression.isFiniteSet`](/symi/swift/expressions#is_finite_set) in Swift, [`api::Expression::is_finite_set`](/symi/rust/expressions#is_finite_set) in Rust.*


### is_interval

*Not exposed by the WASM / JavaScript bindings. Available as [`Expression.is_interval`](/symi/python/expressions#is_interval) in Python, [`UniffiExpression.isInterval`](/symi/kotlin/expressions#is_interval) in Kotlin, [`UniffiExpression.isInterval`](/symi/swift/expressions#is_interval) in Swift, [`api::Expression::is_interval`](/symi/rust/expressions#is_interval) in Rust.*


## Assumption queries (three-valued)

All return `True`/`False`/`None` (`undefined` in JS): a definite verdict
only on proof from the structure and the symbol assumptions.

### is_real

*Not exposed by the WASM / JavaScript bindings. Available as [`Expression.is_real`](/symi/python/expressions#is_real) in Python, [`UniffiExpression.isReal`](/symi/kotlin/expressions#is_real) in Kotlin, [`UniffiExpression.isReal`](/symi/swift/expressions#is_real) in Swift, [`api::Expression::is_real`](/symi/rust/expressions#is_real) in Rust.*


### is_positive

*Not exposed by the WASM / JavaScript bindings. Available as [`Expression.is_positive`](/symi/python/expressions#is_positive) in Python, [`UniffiExpression.isPositive`](/symi/kotlin/expressions#is_positive) in Kotlin, [`UniffiExpression.isPositive`](/symi/swift/expressions#is_positive) in Swift, [`api::Expression::is_positive`](/symi/rust/expressions#is_positive) in Rust.*


### is_negative

*Not exposed by the WASM / JavaScript bindings. Available as [`Expression.is_negative`](/symi/python/expressions#is_negative) in Python, [`UniffiExpression.isNegative`](/symi/kotlin/expressions#is_negative) in Kotlin, [`UniffiExpression.isNegative`](/symi/swift/expressions#is_negative) in Swift, [`api::Expression::is_negative`](/symi/rust/expressions#is_negative) in Rust.*


### is_integer

*Not exposed by the WASM / JavaScript bindings. Available as [`Expression.is_integer`](/symi/python/expressions#is_integer) in Python, [`UniffiExpression.isInteger`](/symi/kotlin/expressions#is_integer) in Kotlin, [`UniffiExpression.isInteger`](/symi/swift/expressions#is_integer) in Swift, [`api::Expression::is_integer`](/symi/rust/expressions#is_integer) in Rust.*


### is_rational

*Not exposed by the WASM / JavaScript bindings. Available as [`Expression.is_rational`](/symi/python/expressions#is_rational) in Python, [`UniffiExpression.isRational`](/symi/kotlin/expressions#is_rational) in Kotlin, [`UniffiExpression.isRational`](/symi/swift/expressions#is_rational) in Swift, [`api::Expression::is_rational`](/symi/rust/expressions#is_rational) in Rust.*


### is_nonzero

*Not exposed by the WASM / JavaScript bindings. Available as [`Expression.is_nonzero`](/symi/python/expressions#is_nonzero) in Python, [`UniffiExpression.isNonzero`](/symi/kotlin/expressions#is_nonzero) in Kotlin, [`UniffiExpression.isNonzero`](/symi/swift/expressions#is_nonzero) in Swift, [`api::Expression::is_nonzero`](/symi/rust/expressions#is_nonzero) in Rust.*


### is_nonnegative

*Not exposed by the WASM / JavaScript bindings. Available as [`Expression.is_nonnegative`](/symi/python/expressions#is_nonnegative) in Python, [`UniffiExpression.isNonnegative`](/symi/kotlin/expressions#is_nonnegative) in Kotlin, [`UniffiExpression.isNonnegative`](/symi/swift/expressions#is_nonnegative) in Swift, [`api::Expression::is_nonnegative`](/symi/rust/expressions#is_nonnegative) in Rust.*


Answers `True` only on proof that the expression is greater than or equal to
zero — an even power of a provably real base, a sum or product of such, or
anything already provably positive. It never answers `False`: a failure to
prove non-negativity is not a proof of negativity, so the undecided verdict is
`None`.

### is_finite

*Not exposed by the WASM / JavaScript bindings. Available as [`Expression.is_finite`](/symi/python/expressions#is_finite) in Python, [`UniffiExpression.isFinite`](/symi/kotlin/expressions#is_finite) in Kotlin, [`UniffiExpression.isFinite`](/symi/swift/expressions#is_finite) in Swift, [`api::Expression::is_finite`](/symi/rust/expressions#is_finite) in Rust.*


### is_defined

*Not exposed by the WASM / JavaScript bindings. Available as [`Expression.is_defined`](/symi/python/expressions#is_defined) in Python, [`UniffiExpression.isDefined`](/symi/kotlin/expressions#is_defined) in Kotlin, [`UniffiExpression.isDefined`](/symi/swift/expressions#is_defined) in Swift, [`api::Expression::is_defined`](/symi/rust/expressions#is_defined) in Rust.*


Answers `True` only on proof that the expression denotes one scalar value at the
active point, and `False` only on proof that it denotes none — a zero
denominator, a zero logarithm argument, or a proved indeterminate extended-value
combination. Definedness is pointwise: it says nothing about continuity or
analyticity near the point, and a point on a chosen principal branch cut such as
`log(-1)` is defined even though the principal logarithm is discontinuous there.
The signed infinities are defined extended-real values but are not finite.

## Structural accessors

### interval_lower

*Not exposed by the WASM / JavaScript bindings. Available as [`Expression.interval_lower`](/symi/python/expressions#interval_lower) in Python, [`UniffiExpression.intervalLower`](/symi/kotlin/expressions#interval_lower) in Kotlin, [`UniffiExpression.intervalLower`](/symi/swift/expressions#interval_lower) in Swift, [`api::Expression::interval_lower`](/symi/rust/expressions#interval_lower) in Rust.*


Lower endpoint of an interval node; raises on other shapes.

### interval_upper

*Not exposed by the WASM / JavaScript bindings. Available as [`Expression.interval_upper`](/symi/python/expressions#interval_upper) in Python, [`UniffiExpression.intervalUpper`](/symi/kotlin/expressions#interval_upper) in Kotlin, [`UniffiExpression.intervalUpper`](/symi/swift/expressions#interval_upper) in Swift, [`api::Expression::interval_upper`](/symi/rust/expressions#interval_upper) in Rust.*


### integral_integrand

*Not exposed by the WASM / JavaScript bindings. Available as [`Expression.integral_integrand`](/symi/python/expressions#integral_integrand) in Python, [`UniffiExpression.integralIntegrand`](/symi/kotlin/expressions#integral_integrand) in Kotlin, [`UniffiExpression.integralIntegrand`](/symi/swift/expressions#integral_integrand) in Swift, [`api::Expression::integral_integrand`](/symi/rust/expressions#integral_integrand) in Rust.*


### integral_variable

*Not exposed by the WASM / JavaScript bindings. Available as [`Expression.integral_variable`](/symi/python/expressions#integral_variable) in Python, [`UniffiExpression.integralVariable`](/symi/kotlin/expressions#integral_variable) in Kotlin, [`UniffiExpression.integralVariable`](/symi/swift/expressions#integral_variable) in Swift, [`api::Expression::integral_variable`](/symi/rust/expressions#integral_variable) in Rust.*


### integral_lower_bound

*Not exposed by the WASM / JavaScript bindings. Available as [`Expression.integral_lower_bound`](/symi/python/expressions#integral_lower_bound) in Python, [`UniffiExpression.integralLowerBound`](/symi/kotlin/expressions#integral_lower_bound) in Kotlin, [`UniffiExpression.integralLowerBound`](/symi/swift/expressions#integral_lower_bound) in Swift, [`api::Expression::integral_lower_bound`](/symi/rust/expressions#integral_lower_bound) in Rust.*


`None` for indefinite integrals.

### integral_upper_bound

*Not exposed by the WASM / JavaScript bindings. Available as [`Expression.integral_upper_bound`](/symi/python/expressions#integral_upper_bound) in Python, [`UniffiExpression.integralUpperBound`](/symi/kotlin/expressions#integral_upper_bound) in Kotlin, [`UniffiExpression.integralUpperBound`](/symi/swift/expressions#integral_upper_bound) in Swift, [`api::Expression::integral_upper_bound`](/symi/rust/expressions#integral_upper_bound) in Rust.*


### union_components

*Not exposed by the WASM / JavaScript bindings. Available as [`Expression.union_components`](/symi/python/expressions#union_components) in Python, [`UniffiExpression.unionComponents`](/symi/kotlin/expressions#union_components) in Kotlin, [`UniffiExpression.unionComponents`](/symi/swift/expressions#union_components) in Swift, [`api::Expression::union_components`](/symi/rust/expressions#union_components) in Rust.*


### image_set_lambda_expression

*Not exposed by the WASM / JavaScript bindings. Available as [`Expression.image_set_lambda_expression`](/symi/python/expressions#image_set_lambda_expression) in Python, [`UniffiExpression.imageSetLambdaExpression`](/symi/kotlin/expressions#image_set_lambda_expression) in Kotlin, [`UniffiExpression.imageSetLambdaExpression`](/symi/swift/expressions#image_set_lambda_expression) in Swift, [`api::Expression::image_set_lambda_expression`](/symi/rust/expressions#image_set_lambda_expression) in Rust.*


### image_set_variable

*Not exposed by the WASM / JavaScript bindings. Available as [`Expression.image_set_variable`](/symi/python/expressions#image_set_variable) in Python, [`UniffiExpression.imageSetVariable`](/symi/kotlin/expressions#image_set_variable) in Kotlin, [`UniffiExpression.imageSetVariable`](/symi/swift/expressions#image_set_variable) in Swift, [`api::Expression::image_set_variable`](/symi/rust/expressions#image_set_variable) in Rust.*


### image_set_domain

*Not exposed by the WASM / JavaScript bindings. Available as [`Expression.image_set_domain`](/symi/python/expressions#image_set_domain) in Python, [`UniffiExpression.imageSetDomain`](/symi/kotlin/expressions#image_set_domain) in Kotlin, [`UniffiExpression.imageSetDomain`](/symi/swift/expressions#image_set_domain) in Swift, [`api::Expression::image_set_domain`](/symi/rust/expressions#image_set_domain) in Rust.*


### to_list

*Not exposed by the WASM / JavaScript bindings. Available as [`Expression.to_list`](/symi/python/expressions#to_list) in Python, [`UniffiExpression.toList`](/symi/kotlin/expressions#to_list) in Kotlin, [`UniffiExpression.toList`](/symi/swift/expressions#to_list) in Swift, [`api::Expression::to_list`](/symi/rust/expressions#to_list) in Rust.*


Elements of a finite set; raises on other shapes. Python finite sets also
support `len()` and iteration.

### length

Element count of a finite set (Python: `len(expression)`).

## String conversion

### to_string

*Not exposed by the WASM / JavaScript bindings. Available as [`api::partial_differential_equations::PartialDifferentialEquationProblem::to_string`](/symi/rust/expressions#to_string) in Rust.*


Human-readable form; Python uses `str(expression)` / `repr(expression)`.
### symbol_name

*Not exposed by the WASM / JavaScript bindings. Available as [`Expression.symbol_name`](/symi/python/expressions#symbol_name) in Python, [`UniffiExpression.symbolName`](/symi/kotlin/expressions#symbol_name) in Kotlin, [`UniffiExpression.symbolName`](/symi/swift/expressions#symbol_name) in Swift, [`api::Expression::symbol_name`](/symi/rust/expressions#symbol_name) in Rust.*


Returns the name of a symbol expression and rejects every other expression kind.

### numerator_denominator

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.numerator_denominator`](/symi/python/expressions#numerator_denominator) in Python, [`UniffiExpression.numeratorDenominator`](/symi/kotlin/expressions#numerator_denominator) in Kotlin, [`UniffiExpression.numeratorDenominator`](/symi/swift/expressions#numerator_denominator) in Swift, [`api::Expression::numerator_denominator`](/symi/rust/expressions#numerator_denominator) in Rust.*


Returns the exact structural numerator and denominator without combining sums or cancelling
factors. Python returns a two-tuple and the JavaScript facade returns a record.

### numerator

<a id="placement-placement.wasm.javascript_facade.expression_numerator.3d9f01a0881d"></a>
`Expression.numerator(): Expression`

<a id="placement-placement.wasm.javascript_facade.numeratordenominator_numerator.875fb10bce86"></a>
`NumeratorDenominator.numerator: Expression`

<a id="placement-placement.wasm.wasm_class.context_numerator.9937af07591e"></a>
Raw WebAssembly: `pub fn numerator(&self, input_expression: &Expression) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_class.expression_numerator.093c06d610d6"></a>
Raw WebAssembly: `pub fn numerator(&self) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_module.module_numerator.86af5abc3af7"></a>
Raw WebAssembly: `fn numerator(input_expression: &Expression) -> Result<Expression, JsError>`


Returns the structural numerator from `numerator_denominator`.

### denominator

<a id="placement-placement.wasm.javascript_facade.expression_denominator.9d6d160c4432"></a>
`Expression.denominator(): Expression`

<a id="placement-placement.wasm.javascript_facade.numeratordenominator_denominator.9141100064f1"></a>
`NumeratorDenominator.denominator: Expression`

<a id="placement-placement.wasm.wasm_class.context_denominator.fed5cc8af821"></a>
Raw WebAssembly: `pub fn denominator(&self, input_expression: &Expression) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_class.expression_denominator.4666a5313067"></a>
Raw WebAssembly: `pub fn denominator(&self) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_module.module_denominator.b4393447d319"></a>
Raw WebAssembly: `fn denominator(input_expression: &Expression) -> Result<Expression, JsError>`


Returns the structural denominator from `numerator_denominator`.

## Example

Inspect and rewrite an expression through its own methods.

```javascript
const x = symi.symbol("x");
const target = x.power(2).subtract(1).divide(x.add(1));

console.log(target.numerator().toString());
console.log(target.denominator().toString());
console.log(target.execute().toString());
```

