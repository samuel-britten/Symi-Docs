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

<a id="entry-presentation_wasm_api_expression_is_stale"></a>
<a id="placement-placement.wasm.wasm_class.expression_isstale.71f8cf8528d5"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method</p>

```typescript signature
isStale(): boolean
```



Reports whether resetting the owning context invalidated the expression. All other operations
reject a stale receiver with an actionable error.

## Arithmetic

Python uses the native operators `+ - * / ** -`; operands may be expressions,
integers, or exact fractions. JavaScript uses the equivalent named methods and
accepts facade expressions, `bigint`, and safe integral `number` values. All
route through the auto-simplifying builders.

### add

<a id="entry-presentation_wasm_api_session_add"></a>
<a id="placement-placement.wasm.javascript_facade.expression_add.d9aaa9c8c688"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
add(other: ExpressionLike): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_add.96a43fe08167"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.add</code></p>

```typescript signature
add(other: Expression): Expression
```

</details>


### subtract

<a id="entry-presentation_wasm_api_session_subtract"></a>
<a id="placement-placement.wasm.javascript_facade.expression_subtract.01fa19892c94"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
subtract(other: ExpressionLike): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_subtract.792ca56d060e"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.subtract</code></p>

```typescript signature
subtract(other: Expression): Expression
```

</details>


### multiply

<a id="entry-presentation_wasm_api_session_multiply"></a>
<a id="placement-placement.wasm.javascript_facade.expression_multiply.6129ea2e7a04"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
multiply(other: ExpressionLike): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_multiply.f2a3f2cee0c1"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.multiply</code></p>

```typescript signature
multiply(other: Expression): Expression
```

</details>


### divide

<a id="entry-presentation_wasm_api_session_divide"></a>
<a id="placement-placement.wasm.javascript_facade.expression_divide.0b155bc736f4"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
divide(other: ExpressionLike): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_divide.5255284e4cf1"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.divide</code></p>

```typescript signature
divide(other: Expression): Expression
```

</details>


### power

<a id="entry-presentation_wasm_api_session_power"></a>
<a id="placement-placement.wasm.javascript_facade.expression_power.87eb729715d1"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
power(exponent: ExpressionLike): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_power.61c34f700b84"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.power</code></p>

```typescript signature
power(exponent: Expression): Expression
```

</details>


### negate

<a id="entry-presentation_wasm_api_expression_negate"></a>
<a id="placement-placement.wasm.javascript_facade.expression_negate.1e2d3469633f"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
negate(): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_negate.2e41e0b07df3"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.negate</code></p>

```typescript signature
negate(): Expression
```

</details>


## Substitution and structure

### substitute

<a id="entry-presentation_wasm_api_session_substitute"></a>
<a id="placement-placement.wasm.wasm_class.expression_substitute.617d58709370"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method</p>

```typescript signature
substitute(variable: string, value: Expression): Expression
```


Replace every free occurrence of the named symbol with `value`, re-running
auto-simplification.

### rewrite_in_terms_of

<a id="entry-presentation_wasm_api_session_rewrite_in_terms_of"></a>
<a id="placement-placement.wasm.wasm_module.module_rewriteintermsof.6b03bacbc907"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
rewriteInTermsOf(
    target: Expression,
    source: Expression,
    replacement: Expression,
): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_rewriteintermsof.0eada73db806"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.rewriteInTermsOf</code></p>

```typescript signature
rewriteInTermsOf(
    target: Expression,
    source: Expression,
    replacement: Expression,
): Expression
```

<a id="placement-placement.wasm.wasm_class.expression_rewriteintermsof.d205de912a41"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.rewriteInTermsOf</code></p>

```typescript signature
rewriteInTermsOf(
    source: Expression,
    replacement: Expression,
): Expression
```

</details>


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

<a id="entry-presentation_wasm_api_expression_node_count"></a>
<a id="placement-placement.wasm.wasm_class.expression_nodecount.81983e8a3143"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method</p>

```typescript signature
nodeCount(): number
```


Number of nodes in the expression tree — the size measure used by the
simplifier; useful for comparing alternative forms.

### duplicate

<a id="entry-presentation_wasm_api_expression_duplicate"></a>
<a id="placement-placement.wasm.javascript_facade.expression_duplicate.d4be0ef54df8"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
duplicate(): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_duplicate.97b5cc29d8db"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.duplicate</code></p>

```typescript signature
duplicate(): Expression
```

</details>


An independent handle to the same underlying expression. The recommended
JavaScript facade duplicates values before passing them through
ownership-transferring raw WASM arrays, so ordinary facade calls are
non-destructive. Callers using `facade.raw` directly must still duplicate a
handle they intend to retain. Python arguments are borrowed.

## Numeric evaluation

### evaluate_to_float

<a id="entry-presentation_wasm_api_session_evaluate_to_float"></a>
<a id="placement-placement.wasm.wasm_class.expression_evaluatetofloat.397b7c48c0f3"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method</p>

```typescript signature
evaluateToFloat(): number
```


Real double-precision value; raises when the expression has no real numeric
value (free symbols, complex value, pole).

### evaluate_to_complex_inexact

<a id="entry-presentation_wasm_api_session_evaluate_to_complex_inexact"></a>
<a id="placement-placement.wasm.wasm_class.expression_evaluatetocomplexinexact.315e742a4077"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method</p>

```typescript signature
evaluateToComplexInexact(): Float64Array
```


Complex evaluation at the default working precision under the documented
principal-value branch cuts, as (real, imaginary). **Notes:** WASM returns a
two-element array; the deterministic software backend makes both bindings
bit-identical.

### evaluate_to_complex_inexact_at_precision

<a id="entry-presentation_wasm_api_session_evaluate_to_complex_inexact_at_precision"></a>
<a id="placement-placement.wasm.wasm_class.expression_evaluatetocomplexinexactatprecision.84d0eabab4f4"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method</p>

```typescript signature
evaluateToComplexInexactAtPrecision(precision_bits: number): Float64Array
```


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

<a id="entry-presentation_wasm_api_expression_equals"></a>
<a id="placement-placement.wasm.wasm_class.expression_equals.48b56c74b7ad"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method</p>

```typescript signature
equals(other: Expression): boolean
```


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

<a id="entry-presentation_wasm_api_session_is_nonnegative"></a>
<a id="placement-placement.wasm.javascript_facade.expression_isnonnegative.a0bbd36976fc"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isNonnegative(): boolean | null
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_isnonnegative.05a865e90f81"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.isNonnegative</code></p>

```typescript signature
isNonnegative(): boolean | undefined
```

</details>


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

Human-readable form; Python uses `str(expression)` / `repr(expression)`.
### symbol_name

*Not exposed by the WASM / JavaScript bindings. Available as [`Expression.symbol_name`](/symi/python/expressions#symbol_name) in Python, [`UniffiExpression.symbolName`](/symi/kotlin/expressions#symbol_name) in Kotlin, [`UniffiExpression.symbolName`](/symi/swift/expressions#symbol_name) in Swift, [`api::Expression::symbol_name`](/symi/rust/expressions#symbol_name) in Rust.*


Returns the name of a symbol expression and rejects every other expression kind.

### numerator_denominator

<a id="entry-presentation_wasm_api_session_numerator_denominator"></a>
<a id="placement-placement.wasm.wasm_module.module_numeratordenominator.ed37930aa207"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
numeratorDenominator(input_expression: Expression): Expression[]
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_numeratordenominator.4d682728a341"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.numeratorDenominator</code></p>

```typescript signature
numeratorDenominator(value: ExpressionLike): NumeratorDenominator
```

<a id="placement-placement.wasm.wasm_class.context_numeratordenominator.1958e57cd14a"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.numeratorDenominator</code></p>

```typescript signature
numeratorDenominator(input_expression: Expression): Expression[]
```

<a id="placement-placement.wasm.javascript_facade.symifacade_numeratordenominator.52fe19194901"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.numeratorDenominator</code></p>

```typescript signature
numeratorDenominator(value: ExpressionLike): NumeratorDenominator
```

<a id="placement-placement.wasm.javascript_facade.expression_numeratordenominator.a6fbcb7d0d59"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.numeratorDenominator</code></p>

```typescript signature
numeratorDenominator(): NumeratorDenominator
```

<a id="placement-placement.wasm.wasm_class.expression_numeratordenominator.016a31025e26"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.numeratorDenominator</code></p>

```typescript signature
numeratorDenominator(): Expression[]
```

</details>


Returns the exact structural numerator and denominator without combining sums or cancelling
factors. Python returns a two-tuple and the JavaScript facade returns a record.

### numerator

<a id="entry-presentation_wasm_api_session_numerator"></a>
<a id="placement-placement.wasm.wasm_module.module_numerator.86af5abc3af7"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
numerator(input_expression: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_numerator.9937af07591e"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.numerator</code></p>

```typescript signature
numerator(input_expression: Expression): Expression
```

<a id="placement-placement.wasm.javascript_facade.expression_numerator.3d9f01a0881d"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.numerator</code></p>

```typescript signature
numerator(): Expression
```

<a id="placement-placement.wasm.wasm_class.expression_numerator.093c06d610d6"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.numerator</code></p>

```typescript signature
numerator(): Expression
```

</details>


Returns the structural numerator from `numerator_denominator`.

### denominator

<a id="entry-presentation_wasm_api_session_denominator"></a>
<a id="placement-placement.wasm.wasm_module.module_denominator.b4393447d319"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
denominator(input_expression: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_denominator.fed5cc8af821"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.denominator</code></p>

```typescript signature
denominator(input_expression: Expression): Expression
```

<a id="placement-placement.wasm.javascript_facade.expression_denominator.9d6d160c4432"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.denominator</code></p>

```typescript signature
denominator(): Expression
```

<a id="placement-placement.wasm.wasm_class.expression_denominator.4666a5313067"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.denominator</code></p>

```typescript signature
denominator(): Expression
```

</details>


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


### is_nonpositive

<a id="entry-presentation_wasm_api_session_is_nonpositive"></a>
<a id="placement-placement.wasm.javascript_facade.expression_isnonpositive.15bf64f03f4c"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isNonpositive(): boolean | null
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_isnonpositive.43f76142cb65"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.isNonpositive</code></p>

```typescript signature
isNonpositive(): boolean | undefined
```

</details>


Whether the expression is known to be nonpositive. Three-valued, like the other
sign predicates on this page: `None` means the sign was not decided from the
assumptions in force, not that the expression is positive. Compare
[`is_nonnegative`](#is_nonnegative).

## Additional API

### Expression

<a id="entry-presentation_wasm_api_expression"></a>
<a id="placement-placement.wasm.javascript_facade.expression.41c8e859d914"></a>
<p class="symi-entry-owner">Type</p>

```typescript signature
interface Expression
```

Public type placement for Expression.

### expressionType

<a id="entry-presentation_wasm_api_expression_expression_type"></a>
<a id="placement-placement.wasm.wasm_class.expression_expressiontype.9ef64c5b0bbb"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method</p>

```typescript signature
expressionType(): string
```

Top-level node kind: one of `integer`, `rational`, `symbol`, `constant`, `sum`, `product`, `power`, `factorial`, `function_call`, `derivative`, `integral`, `summation`, `laplace_transform`, `inverse_laplace_transform`, `fourier_transform`, `inverse_fourier_transform`, `piecewise`, `ordinary_differential_equation`, `recurrence_equation`, `interval`, `finite_set`, `set_union`, `set_intersection`, `set_complement`, `image_set`, `condition_set`.

### freeVariables

<a id="entry-presentation_wasm_api_expression_free_variables"></a>
<a id="placement-placement.wasm.wasm_class.expression_freevariables.2b831cd5640c"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method</p>

```typescript signature
freeVariables(): string[]
```

Sorted names of the free symbols. Bound binders (integration variables, image-set parameters) are excluded; the constants pi/e are not symbols.

### imageSetDomain

<a id="entry-presentation_wasm_api_expression_image_set_domain"></a>
<a id="placement-placement.wasm.wasm_class.expression_imagesetdomain.894cf5996d73"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method</p>

```typescript signature
imageSetDomain(): Expression
```

The domain an `image_set` expression maps over.

### imageSetLambdaExpression

<a id="entry-presentation_wasm_api_expression_image_set_lambda_expression"></a>
<a id="placement-placement.wasm.wasm_class.expression_imagesetlambdaexpression.9537a3075b6e"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method</p>

```typescript signature
imageSetLambdaExpression(): Expression
```

The body an `image_set` expression applies to its bound variable.

### imageSetVariable

<a id="entry-presentation_wasm_api_expression_image_set_variable"></a>
<a id="placement-placement.wasm.wasm_class.expression_imagesetvariable.c23ad4dbf4cb"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method</p>

```typescript signature
imageSetVariable(): string
```

The name of the variable an `image_set` expression binds.

### integralIntegrand

<a id="entry-presentation_wasm_api_expression_integral_integrand"></a>
<a id="placement-placement.wasm.wasm_class.expression_integralintegrand.e27ba8e9a388"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method</p>

```typescript signature
integralIntegrand(): Expression
```

The integrand of an unevaluated `integral` expression.

### integralLowerBound

<a id="entry-presentation_wasm_api_expression_integral_lower_bound"></a>
<a id="placement-placement.wasm.wasm_class.expression_integrallowerbound.9922f04b09ad"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method</p>

```typescript signature
integralLowerBound(): Expression | undefined
```

`None` for indefinite integrals.

### integralUpperBound

<a id="entry-presentation_wasm_api_expression_integral_upper_bound"></a>
<a id="placement-placement.wasm.wasm_class.expression_integralupperbound.e819ab900c26"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method</p>

```typescript signature
integralUpperBound(): Expression | undefined
```

The upper bound of an unevaluated `integral`, or `None` when it is indefinite.

### integralVariable

<a id="entry-presentation_wasm_api_expression_integral_variable"></a>
<a id="placement-placement.wasm.wasm_class.expression_integralvariable.5d2186957c4e"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method</p>

```typescript signature
integralVariable(): string
```

The name of the variable an unevaluated `integral` integrates over.

### intervalLower

<a id="entry-presentation_wasm_api_expression_interval_lower"></a>
<a id="placement-placement.wasm.wasm_class.expression_intervallower.36837bbd1eec"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method</p>

```typescript signature
intervalLower(): Expression
```

Lower endpoint of an interval node; raises on other shapes.

### intervalUpper

<a id="entry-presentation_wasm_api_expression_interval_upper"></a>
<a id="placement-placement.wasm.wasm_class.expression_intervalupper.dfbef6dc04bc"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method</p>

```typescript signature
intervalUpper(): Expression
```

The upper endpoint of an `interval` expression.

### isAlgebraic

<a id="entry-presentation_wasm_api_expression_is_algebraic"></a>
<a id="placement-placement.wasm.javascript_facade.expression_isalgebraic.166881d40821"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isAlgebraic(): boolean | null
```

Whether the expression is known to be algebraic.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_isalgebraic.7f69c43994c4"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.isAlgebraic</code></p>

```typescript signature
isAlgebraic(): boolean | undefined
```

</details>

### isComplex

<a id="entry-presentation_wasm_api_expression_is_complex"></a>
<a id="placement-placement.wasm.javascript_facade.expression_iscomplex.cf239ae130b6"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isComplex(): boolean | null
```

Whether the expression is known to be finite complex.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_iscomplex.cb55f33afdac"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.isComplex</code></p>

```typescript signature
isComplex(): boolean | undefined
```

</details>

### isComposite

<a id="entry-presentation_wasm_api_expression_is_composite"></a>
<a id="placement-placement.wasm.javascript_facade.expression_iscomposite.acede8711f42"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isComposite(): boolean | null
```

Whether the expression is known to be composite.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_iscomposite.9305add4812c"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.isComposite</code></p>

```typescript signature
isComposite(): boolean | undefined
```

</details>

### isDefined

<a id="entry-presentation_wasm_api_expression_is_defined"></a>
<a id="placement-placement.wasm.javascript_facade.expression_isdefined.ba68953821c2"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isDefined(): boolean | null
```

Whether the expression is known to denote one scalar value at the active point.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_isdefined.767be28c2b33"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.isDefined</code></p>

```typescript signature
isDefined(): boolean | undefined
```

</details>

### isEquality

<a id="entry-presentation_wasm_api_expression_is_equality"></a>
<a id="placement-placement.wasm.wasm_class.expression_isequality.86f4b29381a0"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method</p>

```typescript signature
isEquality(): boolean
```

True for `equal(a, b)` relation nodes.

### isEven

<a id="entry-presentation_wasm_api_expression_is_even"></a>
<a id="placement-placement.wasm.javascript_facade.expression_iseven.c8395efaf78a"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isEven(): boolean | null
```

Whether the expression is known to be even.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_iseven.79ec01947e1b"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.isEven</code></p>

```typescript signature
isEven(): boolean | undefined
```

</details>

### isExtendedReal

<a id="entry-presentation_wasm_api_expression_is_extended_real"></a>
<a id="placement-placement.wasm.javascript_facade.expression_isextendedreal.8b90e63c733a"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isExtendedReal(): boolean | null
```

Whether the expression is known to be extended-real.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_isextendedreal.172c09a6da36"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.isExtendedReal</code></p>

```typescript signature
isExtendedReal(): boolean | undefined
```

</details>

### isFinite

<a id="entry-presentation_wasm_api_expression_is_finite"></a>
<a id="placement-placement.wasm.javascript_facade.expression_isfinite.ec4bd13d38ab"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isFinite(): boolean | null
```

Whether the expression is known finite, or `None` when the assumptions cannot decide it.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_isfinite.424570d72876"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.isFinite</code></p>

```typescript signature
isFinite(): boolean | undefined
```

</details>

### isFiniteSet

<a id="entry-presentation_wasm_api_expression_is_finite_set"></a>
<a id="placement-placement.wasm.wasm_class.expression_isfiniteset.90bfc2fdaf03"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method</p>

```typescript signature
isFiniteSet(): boolean
```

Whether this expression is a `finite_set`.

### isImageSet

<a id="entry-presentation_wasm_api_expression_is_image_set"></a>
<a id="placement-placement.wasm.wasm_class.expression_isimageset.5466d3ce260e"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method</p>

```typescript signature
isImageSet(): boolean
```

Whether this expression is an `image_set`.

### isInfinite

<a id="entry-presentation_wasm_api_expression_is_infinite"></a>
<a id="placement-placement.wasm.javascript_facade.expression_isinfinite.baee2508c4d8"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isInfinite(): boolean | null
```

Whether the expression is known to be infinite.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_isinfinite.859baf12b120"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.isInfinite</code></p>

```typescript signature
isInfinite(): boolean | undefined
```

</details>

### isInteger

<a id="entry-presentation_wasm_api_expression_is_integer"></a>
<a id="placement-placement.wasm.javascript_facade.expression_isinteger.a645e50fd6f0"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isInteger(): boolean | null
```

Whether the expression is known to be an integer, or `None` when the assumptions cannot decide it.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_isinteger.97d2a50d8429"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.isInteger</code></p>

```typescript signature
isInteger(): boolean | undefined
```

</details>

### isIntegral

<a id="entry-presentation_wasm_api_expression_is_integral"></a>
<a id="placement-placement.wasm.wasm_class.expression_isintegral.aaf3a7607ea0"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method</p>

```typescript signature
isIntegral(): boolean
```

True for unevaluated integral nodes. (Distinct from the assumption query `is_integer`.)

### isInterval

<a id="entry-presentation_wasm_api_expression_is_interval"></a>
<a id="placement-placement.wasm.wasm_class.expression_isinterval.c4ea28ca3bf2"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method</p>

```typescript signature
isInterval(): boolean
```

Whether this expression is an `interval`.

### isIrrational

<a id="entry-presentation_wasm_api_expression_is_irrational"></a>
<a id="placement-placement.wasm.javascript_facade.expression_isirrational.f90590ac06dc"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isIrrational(): boolean | null
```

Whether the expression is known to be irrational.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_isirrational.6d6714833660"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.isIrrational</code></p>

```typescript signature
isIrrational(): boolean | undefined
```

</details>

### isMatrix

<a id="entry-presentation_wasm_api_expression_is_matrix"></a>
<a id="placement-placement.wasm.wasm_class.expression_ismatrix.c4b71b990067"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method</p>

```typescript signature
readonly isMatrix: boolean
```

Always `False` on expressions and `True` on `matrix` objects, so mixed result streams can be discriminated.

### isNatural

<a id="entry-presentation_wasm_api_expression_is_natural"></a>
<a id="placement-placement.wasm.javascript_facade.expression_isnatural.c7d8ac466cd4"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isNatural(): boolean | null
```

Whether the expression is known to be natural.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_isnatural.08b113b0d6b1"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.isNatural</code></p>

```typescript signature
isNatural(): boolean | undefined
```

</details>

### isNegative

<a id="entry-presentation_wasm_api_expression_is_negative"></a>
<a id="placement-placement.wasm.javascript_facade.expression_isnegative.215cc4b539f3"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isNegative(): boolean | null
```

Whether the expression is known to be negative, or `None` when the assumptions cannot decide it.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_isnegative.575a1576c858"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.isNegative</code></p>

```typescript signature
isNegative(): boolean | undefined
```

</details>

### isNonzero

<a id="entry-presentation_wasm_api_expression_is_nonzero"></a>
<a id="placement-placement.wasm.javascript_facade.expression_isnonzero.cee90ac676f3"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isNonzero(): boolean | null
```

Whether the expression is known to be nonzero, or `None` when the assumptions cannot decide it.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_isnonzero.a92613e21491"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.isNonzero</code></p>

```typescript signature
isNonzero(): boolean | undefined
```

</details>

### isOdd

<a id="entry-presentation_wasm_api_expression_is_odd"></a>
<a id="placement-placement.wasm.javascript_facade.expression_isodd.9cef0c32b06d"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isOdd(): boolean | null
```

Whether the expression is known to be odd.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_isodd.1296c406043e"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.isOdd</code></p>

```typescript signature
isOdd(): boolean | undefined
```

</details>

### isPositive

<a id="entry-presentation_wasm_api_expression_is_positive"></a>
<a id="placement-placement.wasm.javascript_facade.expression_ispositive.5a6cf1d747f2"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isPositive(): boolean | null
```

Whether the expression is known to be positive, or `None` when the assumptions cannot decide it.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_ispositive.f0a589e1849f"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.isPositive</code></p>

```typescript signature
isPositive(): boolean | undefined
```

</details>

### isPositiveInteger

<a id="entry-presentation_wasm_api_expression_is_positive_integer"></a>
<a id="placement-placement.wasm.javascript_facade.expression_ispositiveinteger.d958deb107ee"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isPositiveInteger(): boolean | null
```

Whether the expression is known to be a positive integer.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_ispositiveinteger.de9efbe8d022"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.isPositiveInteger</code></p>

```typescript signature
isPositiveInteger(): boolean | undefined
```

</details>

### isRational

<a id="entry-presentation_wasm_api_expression_is_rational"></a>
<a id="placement-placement.wasm.javascript_facade.expression_isrational.c5942929964d"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isRational(): boolean | null
```

Whether the expression is known to be rational, or `None` when the assumptions cannot decide it.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_isrational.86f2ab150cd1"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.isRational</code></p>

```typescript signature
isRational(): boolean | undefined
```

</details>

### isReal

<a id="entry-presentation_wasm_api_expression_is_real"></a>
<a id="placement-placement.wasm.javascript_facade.expression_isreal.418cb2d56d52"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isReal(): boolean | null
```

Whether the expression is known to be real, or `None` when the assumptions cannot decide it.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_isreal.f26c33fb44d3"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.isReal</code></p>

```typescript signature
isReal(): boolean | undefined
```

</details>

### isTranscendental

<a id="entry-presentation_wasm_api_expression_is_transcendental"></a>
<a id="placement-placement.wasm.javascript_facade.expression_istranscendental.54d40bab7088"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isTranscendental(): boolean | null
```

Whether the expression is known to be transcendental.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_istranscendental.7bafdf46504b"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.isTranscendental</code></p>

```typescript signature
isTranscendental(): boolean | undefined
```

</details>

### isUnion

<a id="entry-presentation_wasm_api_expression_is_union"></a>
<a id="placement-placement.wasm.wasm_class.expression_isunion.b55d87d040a7"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method</p>

```typescript signature
isUnion(): boolean
```

Whether this expression is a union of sets.

### isZero

<a id="entry-presentation_wasm_api_expression_is_zero"></a>
<a id="placement-placement.wasm.javascript_facade.expression_iszero.4743ee8492f4"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isZero(): boolean | null
```

Whether the expression is known to be zero.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_iszero.39d9a4da2056"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.isZero</code></p>

```typescript signature
isZero(): boolean | undefined
```

</details>

### symbolName

<a id="entry-presentation_wasm_api_expression_symbol_name"></a>
<a id="placement-placement.wasm.javascript_facade.expression_symbolname.5aadc5ef70f0"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
symbolName(): string
```

Returns the name of a symbol expression and rejects every other expression kind.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_symbolname.4c98a64aafac"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.symbolName</code></p>

```typescript signature
symbolName(): string
```

</details>

### toList

<a id="entry-presentation_wasm_api_expression_to_list"></a>
<a id="placement-placement.wasm.wasm_class.expression_tolist.448f0522ff8b"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method</p>

```typescript signature
toList(): Expression[]
```

Elements of a finite set; raises on other shapes. Python finite sets also support `len()` and iteration.

### unionComponents

<a id="entry-presentation_wasm_api_expression_union_components"></a>
<a id="placement-placement.wasm.wasm_class.expression_unioncomponents.ba40c4145e3b"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method</p>

```typescript signature
unionComponents(): Expression[]
```

The components of a set union, as a list of expressions.

### NumeratorDenominator

<a id="entry-presentation_wasm_api_numeratordenominator"></a>
<a id="placement-placement.wasm.javascript_facade.numeratordenominator.7ceff7e08454"></a>
<p class="symi-entry-owner">Type</p>

```typescript signature
interface NumeratorDenominator
```

Public type placement for NumeratorDenominator.

#### NumeratorDenominator.denominator

<a id="entry-presentation_wasm_api_numeratordenominator_denominator"></a>
<a id="placement-placement.wasm.javascript_facade.numeratordenominator_denominator.9141100064f1"></a>
<p class="symi-entry-owner">NumeratorDenominator property</p>

```typescript signature
denominator: Expression
```

Returns the structural denominator from `numerator_denominator`.

#### NumeratorDenominator.numerator

<a id="entry-presentation_wasm_api_numeratordenominator_numerator"></a>
<a id="placement-placement.wasm.javascript_facade.numeratordenominator_numerator.875fb10bce86"></a>
<p class="symi-entry-owner">NumeratorDenominator property</p>

```typescript signature
numerator: Expression
```

Returns the structural numerator from `numerator_denominator`.

