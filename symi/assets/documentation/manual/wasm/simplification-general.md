# General simplification

The general simplification ladder and the two rational-form operations it is
built on. Directed algebraic rewrites are on
[algebraic transforms](algebraic-transforms.md), and the fixed-contract
presentation passes are on
[specialized canonical forms](specialized-canonical-forms.md).

### simplify

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_simplify_api_assumptionscope_simplify"></a>
<a id="placement-placement.wasm.javascript_facade.assumptionscope_simplify.76d00d707442"></a>
<p class="symi-entry-owner">AssumptionScope method</p>

```typescript signature
simplify(value: ExpressionLike): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.assumptionscope_simplify.08324753316d"></a>
<p class="symi-entry-owner">AssumptionScope method: <code>AssumptionScope.simplify</code></p>

```typescript signature
simplify(input_expression: Expression): Expression
```

</details>

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_simplify_api_session_simplify"></a>
<a id="placement-placement.wasm.wasm_module.module_simplify.fc6200454a69"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
simplify(input_expression: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_simplify.2c562eb70380"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.simplify</code></p>

```typescript signature
simplify(input_expression: Expression): Expression
```

</details>

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_simplify_api_expression_simplify"></a>
<a id="placement-placement.wasm.wasm_class.expression_simplify.c10646d9d93b"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
simplify(): Expression
```



The full heuristic simplification ladder: weighted-complexity-guided search
over rational normal form, radical denesting, trigonometric/log rewrites,
parity and absolute-value rules. The result is never accepted if its weighted
complexity grows. Principal square roots extract structural square content
only under a realness proof: `sqrt(x^2)` becomes `abs(x)` for real `x`, while
`sqrt(z^2)` remains unchanged for a default-complex `z`.

Declared symbol assumptions also enable a small set of branch-aware principal-power reductions.
For a negative real `z`, `sqrt(1 / z)` normalizes to `-z ** (-1 / 2)`; for a strictly positive
factor `p`, `(u * p) ** w` may extract `p ** w`; and a declared-integer exponent distributes over
a product. Each rule declines without its exact guard. `abs(a + i*b)` can reduce through exact,
wrapper-free Cartesian components only when its squared norm simplifies to a smaller form, such as
`abs(3 - sqrt(7) + i*sqrt(6*sqrt(7) - 15)) == 1`.

#### Radicals and perfect powers

These four rules are applied by ordinary construction, so they hold for every
expression the library builds, not only for the results of `simplify`.

A **positive rational base under a rational exponent** has its perfect-power
content removed exactly whenever the degree of that content divides the
exponent's reduced denominator. So `991026973 ** Fraction(1, 6)` becomes
`sqrt(997)`, because `991026973 = 997^3` and `3` divides `6`; the base is never
factored, only exact integer roots of the degrees the denominator admits are
tried. A rational base reduces only when its numerator and denominator are both
exact roots of the same degree. Content whose degree does not divide the
denominator is left to the ordinary surd canonicalizer, so `sqrt(8)` is still
`2*sqrt(2)`. Negative and non-real bases are excluded: `(-8) ** Fraction(1, 3)`
stays a principal power, because extracting an odd perfect power from a
negative base does not preserve the principal argument.

An **expanded binomial square** — a three-term sum such as `1 + 4*sqrt(r) + 4*r`
— is recognised only through an exact replayed witness: a candidate binomial is
built from the square roots of two of the terms and is accepted only when
expanding its square reproduces the original sum exactly. Nothing is matched by
pattern, so a middle term that differs by one is refused rather than repaired.

The witness proves squareness, not a branch. Its two consumers carry separate
guards:

- under a **square root**, `sqrt(u^2)` returns `abs(u)` for a witness proved
  real, and the ordinary exact sign procedure then folds the absolute value
  when the sign is decided; and
- under **any other exponent**, `(u^2) ** a` becomes `u ** (2*a)` only for a
  witness proved *strictly positive*, because the principal-power composition
  law is available only on the positive real axis. A real witness of unknown
  sign reaches the absolute value but not the nested power.

### cancel

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_cancel_api_session_cancel"></a>
<a id="placement-placement.wasm.wasm_module.module_cancel.a2f399282cbb"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
cancel(input_expression: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_cancel.932c8c84c37d"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.cancel</code></p>

```typescript signature
cancel(input_expression: Expression): Expression
```

</details>

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_cancel_api_expression_cancel"></a>
<a id="placement-placement.wasm.wasm_class.expression_cancel.1ccb3725a645"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
cancel(): Expression
```



Rational normal form: write as a single fraction and divide out the
polynomial GCD of numerator and denominator.

### together

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_together_api_session_together"></a>
<a id="placement-placement.wasm.wasm_module.module_together.6ebbfd66d49a"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
together(input_expression: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_together.9e3d503c834f"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.together</code></p>

```typescript signature
together(value: ExpressionLike): Expression
```

<a id="placement-placement.wasm.wasm_class.context_together.5c7d3ca8458a"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.together</code></p>

```typescript signature
together(input_expression: Expression): Expression
```

<a id="placement-placement.wasm.javascript_facade.symifacade_together.63d6c1df067d"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.together</code></p>

```typescript signature
together(value: ExpressionLike): Expression
```

</details>

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_together_api_expression_together"></a>
<a id="placement-placement.wasm.javascript_facade.expression_together.d11878327d8a"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
together(): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_together.25148d8a4726"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.together</code></p>

```typescript signature
together(): Expression
```

</details>



Combine a sum of fractions over a common denominator. On Symi's
representation `together` and `cancel` coincide; both names exist because
they are distinct user intents.

## Example

The general ladder chooses a smaller equivalent form.

```javascript
const x = symi.symbol("x");

console.log(symi.together(x.power(-1).add(x.add(1).power(-1))).toString());
console.log(x.power(2).subtract(1).divide(x.subtract(1)).execute().toString());
```


## Additional API

### NumeratorDenominator

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_numerator_denominator_api_results_numeratordenominator"></a>
<a id="placement-placement.wasm.javascript_facade.numeratordenominator.7ceff7e08454"></a>
<p class="symi-entry-owner">Type</p>

```typescript signature
interface NumeratorDenominator
```

Public type placement for NumeratorDenominator.

### combinePowers

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_combine_powers_api_algebra_session_combine_powers"></a>
<a id="placement-placement.wasm.wasm_module.module_combinepowers.0e25bed4eaab"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
combinePowers(input_expression: Expression): Expression
```

Combine same-exponent powers into a single power of the merged base (`x^a y^a -> (xy)^a`) at every product node where the rewrite is provably valid. This identity is false across the branch cut of the complex logarithm — at `x = y = -1` and `a = 1/2` the left side is `ii = -1` while the right side is `sqrt(1) = 1` — so it fires only when the exponent is provably an integer or when every combined base is provably positive. Positivity of the merged base is not enough: `(-2)^x (-3)^x` is left alone, because at `x = 1/2` combining it to `6^x` would flip the sign of the result. Positive numeric-literal bases need no assumptions at all, so `2^x 3^x` becomes `6^x` and `(1/2)^x 3^x` becomes `(3/2)^x`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_combinepowers.7c10205ea9cd"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.combinePowers</code></p>

```typescript signature
combinePowers(input_expression: Expression): Expression
```

</details>

### combinePowers

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_combine_powers_api_expression_operations_expression_combine_powers"></a>
<a id="placement-placement.wasm.wasm_class.expression_combinepowers.fbbb9d6d14ef"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
combinePowers(): Expression
```

Combine same-exponent powers into a single power of the merged base (`x^a y^a -> (xy)^a`) at every product node where the rewrite is provably valid. This identity is false across the branch cut of the complex logarithm — at `x = y = -1` and `a = 1/2` the left side is `ii = -1` while the right side is `sqrt(1) = 1` — so it fires only when the exponent is provably an integer or when every combined base is provably positive. Positivity of the merged base is not enough: `(-2)^x (-3)^x` is left alone, because at `x = 1/2` combining it to `6^x` would flip the sign of the result. Positive numeric-literal bases need no assumptions at all, so `2^x 3^x` becomes `6^x` and `(1/2)^x 3^x` becomes `(3/2)^x`.

### completeTheSquare

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_complete_the_square_api_algebra_session_complete_the_square"></a>
<a id="placement-placement.wasm.wasm_module.module_completethesquare.bf40d9a8b764"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
completeTheSquare(
    input_expression: Expression,
    variable: Expression,
): Expression
```

Rewrite an expression that is quadratic in `variable` into the exact vertex form `a*(variable - h)^2 + k`, with `h = -b/(2*a)` and `k = c - b^2/(4*a)` built from the degree-2, degree-1 and degree-0 coefficients `a`, `b`, `c` of the expression collected in `variable`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_completethesquare.7c0eae8e0253"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.completeTheSquare</code></p>

```typescript signature
completeTheSquare(
    input_expression: Expression,
    variable: Expression,
): Expression
```

</details>

### completeTheSquare

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_complete_the_square_api_expression_operations_expression_complete_the_square"></a>
<a id="placement-placement.wasm.wasm_class.expression_completethesquare.3d862f31a1ce"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
completeTheSquare(variable: Expression): Expression
```

Rewrite an expression that is quadratic in `variable` into the exact vertex form `a*(variable - h)^2 + k`, with `h = -b/(2*a)` and `k = c - b^2/(4*a)` built from the degree-2, degree-1 and degree-0 coefficients `a`, `b`, `c` of the expression collected in `variable`.

### evaluateToFloat

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_evaluate_to_float_api_expression_operations_expression_evaluate_to_float"></a>
<a id="placement-placement.wasm.wasm_class.expression_evaluatetofloat.397b7c48c0f3"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
evaluateToFloat(): number
```

Real double-precision value; raises when the expression has no real numeric value (free symbols, complex value, pole).

### expressionType

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_expression_type_api_expression_operations_expression_expression_type"></a>
<a id="placement-placement.wasm.wasm_class.expression_expressiontype.9ef64c5b0bbb"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
expressionType(): string
```

Top-level node kind: one of `integer`, `rational`, `symbol`, `constant`, `sum`, `product`, `power`, `factorial`, `function_call`, `derivative`, `integral`, `summation`, `laplace_transform`, `inverse_laplace_transform`, `fourier_transform`, `inverse_fourier_transform`, `piecewise`, `ordinary_differential_equation`, `recurrence_equation`, `interval`, `finite_set`, `set_union`, `set_intersection`, `set_complement`, `image_set`, `condition_set`.

### freeVariables

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_free_variables_api_expression_free_variables"></a>
<a id="placement-placement.wasm.wasm_class.expression_freevariables.2b831cd5640c"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
freeVariables(): string[]
```

Sorted names of the free symbols. Bound binders (integration variables, image-set parameters) are excluded; the constants pi/e are not symbols.

### imageSetDomain

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_image_set_domain_api_expression_image_set_domain"></a>
<a id="placement-placement.wasm.wasm_class.expression_imagesetdomain.894cf5996d73"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
imageSetDomain(): Expression
```

The domain an `image_set` expression maps over.

### imageSetLambdaExpression

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_image_set_lambda_expression_api_expression_image_set_lambda_expression"></a>
<a id="placement-placement.wasm.wasm_class.expression_imagesetlambdaexpression.9537a3075b6e"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
imageSetLambdaExpression(): Expression
```

The body an `image_set` expression applies to its bound variable.

### imageSetVariable

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_image_set_variable_api_expression_image_set_variable"></a>
<a id="placement-placement.wasm.wasm_class.expression_imagesetvariable.c23ad4dbf4cb"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
imageSetVariable(): string
```

The name of the variable an `image_set` expression binds.

### imaginaryPart

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_imaginary_part_api_session_imaginary_part"></a>
<a id="placement-placement.wasm.wasm_module.module_imaginarypart.8a82c066b15a"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
imaginaryPart(input_expression: Expression): Expression
```

Return the exact imaginary component of an expression. For example, if `y` is declared real, `imaginary_part(exp(i*y))` is `sin(y)`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_imaginarypart.617f7b6602bb"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.imaginaryPart</code></p>

```typescript signature
imaginaryPart(value: ExpressionLike): Expression
```

<a id="placement-placement.wasm.wasm_class.context_imaginarypart.776c5cf4f0e7"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.imaginaryPart</code></p>

```typescript signature
imaginaryPart(input_expression: Expression): Expression
```

<a id="placement-placement.wasm.javascript_facade.symifacade_imaginarypart.5d66750ea9bf"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.imaginaryPart</code></p>

```typescript signature
imaginaryPart(value: ExpressionLike): Expression
```

</details>

### imaginaryPart

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_imaginary_part_api_expression_imaginary_part"></a>
<a id="placement-placement.wasm.javascript_facade.expression_imaginarypart.869495f47a9a"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
imaginaryPart(): Expression
```

Return the exact imaginary component of an expression. For example, if `y` is declared real, `imaginary_part(exp(i*y))` is `sin(y)`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_imaginarypart.8aff7315b620"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.imaginaryPart</code></p>

```typescript signature
imaginaryPart(): Expression
```

</details>

### integralIntegrand

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_integral_integrand_api_expression_integral_integrand"></a>
<a id="placement-placement.wasm.wasm_class.expression_integralintegrand.e27ba8e9a388"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
integralIntegrand(): Expression
```

The integrand of an unevaluated `integral` expression.

### integralLowerBound

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_integral_lower_bound_api_expression_integral_lower_bound"></a>
<a id="placement-placement.wasm.wasm_class.expression_integrallowerbound.9922f04b09ad"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
integralLowerBound(): Expression | undefined
```

`None` for indefinite integrals.

### integralUpperBound

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_integral_upper_bound_api_expression_integral_upper_bound"></a>
<a id="placement-placement.wasm.wasm_class.expression_integralupperbound.e819ab900c26"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
integralUpperBound(): Expression | undefined
```

The upper bound of an unevaluated `integral`, or `None` when it is indefinite.

### integralVariable

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_integral_variable_api_expression_integral_variable"></a>
<a id="placement-placement.wasm.wasm_class.expression_integralvariable.5d2186957c4e"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
integralVariable(): string
```

The name of the variable an unevaluated `integral` integrates over.

### intervalLower

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_interval_lower_api_expression_interval_lower"></a>
<a id="placement-placement.wasm.wasm_class.expression_intervallower.36837bbd1eec"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
intervalLower(): Expression
```

Lower endpoint of an interval node; raises on other shapes.

### intervalUpper

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_interval_upper_api_expression_interval_upper"></a>
<a id="placement-placement.wasm.wasm_class.expression_intervalupper.dfbef6dc04bc"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
intervalUpper(): Expression
```

The upper endpoint of an `interval` expression.

### isDefined

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_is_defined_api_expression_is_defined"></a>
<a id="placement-placement.wasm.javascript_facade.expression_isdefined.ba68953821c2"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isDefined(): boolean | null
```

Whether the expression is known to denote one scalar value at the active point.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_isdefined.767be28c2b33"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.isDefined</code></p>

```typescript signature
isDefined(): boolean | undefined
```

</details>

### isEquality

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_is_equality_api_expression_is_equality"></a>
<a id="placement-placement.wasm.wasm_class.expression_isequality.86f4b29381a0"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isEquality(): boolean
```

True for `equal(a, b)` relation nodes.

### isEquality

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_is_equality_api_matrix_operations_matrix_is_equality"></a>
<a id="placement-placement.wasm.wasm_class.matrix_isequality.df1325fbf5f8"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isEquality(): boolean
```

Always false: a matrix is never an `equal` relation node.

### isFinite

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_is_finite_api_expression_is_finite"></a>
<a id="placement-placement.wasm.javascript_facade.expression_isfinite.ec4bd13d38ab"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isFinite(): boolean | null
```

Whether the expression is known finite, or `None` when the assumptions cannot decide it.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_isfinite.424570d72876"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.isFinite</code></p>

```typescript signature
isFinite(): boolean | undefined
```

</details>

### isFiniteSet

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_is_finite_set_api_expression_is_finite_set"></a>
<a id="placement-placement.wasm.wasm_class.expression_isfiniteset.90bfc2fdaf03"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isFiniteSet(): boolean
```

Whether this expression is a `finite_set`.

### isFiniteSet

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_is_finite_set_api_matrix_operations_matrix_is_finite_set"></a>
<a id="placement-placement.wasm.wasm_class.matrix_isfiniteset.bb89df6933ea"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isFiniteSet(): boolean
```

Always false: a matrix is never a finite set.

### isImageSet

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_is_image_set_api_expression_is_image_set"></a>
<a id="placement-placement.wasm.wasm_class.expression_isimageset.5466d3ce260e"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isImageSet(): boolean
```

Whether this expression is an `image_set`.

### isImageSet

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_is_image_set_api_matrix_operations_matrix_is_image_set"></a>
<a id="placement-placement.wasm.wasm_class.matrix_isimageset.3fe74cafdfc3"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isImageSet(): boolean
```

Always false: a matrix is never an image set.

### isInteger

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_is_integer_api_expression_is_integer"></a>
<a id="placement-placement.wasm.javascript_facade.expression_isinteger.a645e50fd6f0"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isInteger(): boolean | null
```

Whether the expression is known to be an integer, or `None` when the assumptions cannot decide it.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_isinteger.97d2a50d8429"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.isInteger</code></p>

```typescript signature
isInteger(): boolean | undefined
```

</details>

### isIntegral

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_is_integral_api_expression_is_integral"></a>
<a id="placement-placement.wasm.wasm_class.expression_isintegral.aaf3a7607ea0"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isIntegral(): boolean
```

True for unevaluated integral nodes. (Distinct from the assumption query `is_integer`.)

### isIntegral

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_is_integral_api_matrix_operations_matrix_is_integral"></a>
<a id="placement-placement.wasm.wasm_class.matrix_isintegral.9e71f8fe0c10"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isIntegral(): boolean
```

Always false: a matrix is never an unevaluated integral node.

### isInterval

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_is_interval_api_expression_is_interval"></a>
<a id="placement-placement.wasm.wasm_class.expression_isinterval.c4ea28ca3bf2"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isInterval(): boolean
```

Whether this expression is an `interval`.

### isMatrix

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_is_matrix_api_expression_is_matrix"></a>
<a id="placement-placement.wasm.wasm_class.expression_ismatrix.c4b71b990067"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
readonly isMatrix: boolean
```

Always `False` on expressions and `True` on `matrix` objects, so mixed result streams can be discriminated.

### isMatrix

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_is_matrix_api_matrix_operations_matrix_is_matrix"></a>
<a id="placement-placement.wasm.wasm_class.matrix_ismatrix.49764165c804"></a>
<p class="symi-entry-owner">Matrix property</p>

```typescript signature
readonly isMatrix: boolean
```

Always `False` on expressions and `True` on `matrix` objects, so mixed result streams can be discriminated.

### isNegative

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_is_negative_api_expression_is_negative"></a>
<a id="placement-placement.wasm.javascript_facade.expression_isnegative.215cc4b539f3"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isNegative(): boolean | null
```

Whether the expression is known to be negative, or `None` when the assumptions cannot decide it.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_isnegative.575a1576c858"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.isNegative</code></p>

```typescript signature
isNegative(): boolean | undefined
```

</details>

### isNonnegative

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_is_nonnegative_api_expression_is_nonnegative"></a>
<a id="placement-placement.wasm.javascript_facade.expression_isnonnegative.a0bbd36976fc"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isNonnegative(): boolean | null
```

Answers whether the expression is nonnegative in the extended-real universe. Non-real values are refuted; unsupported real expressions remain `None`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_isnonnegative.05a865e90f81"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.isNonnegative</code></p>

```typescript signature
isNonnegative(): boolean | undefined
```

</details>

### isNonzero

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_is_nonzero_api_expression_is_nonzero"></a>
<a id="placement-placement.wasm.javascript_facade.expression_isnonzero.cee90ac676f3"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isNonzero(): boolean | null
```

Whether the expression is known to be nonzero, or `None` when the assumptions cannot decide it.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_isnonzero.a92613e21491"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.isNonzero</code></p>

```typescript signature
isNonzero(): boolean | undefined
```

</details>

### isPositive

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_is_positive_api_expression_is_positive"></a>
<a id="placement-placement.wasm.javascript_facade.expression_ispositive.5a6cf1d747f2"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isPositive(): boolean | null
```

Whether the expression is known to be positive, or `None` when the assumptions cannot decide it.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_ispositive.f0a589e1849f"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.isPositive</code></p>

```typescript signature
isPositive(): boolean | undefined
```

</details>

### isPositive

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_is_positive_api_matrix_operations_matrix_is_positive"></a>
<a id="placement-placement.wasm.wasm_class.matrix_ispositive.27aac02052db"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isPositive(): boolean | undefined
```

Always `None`: positivity is a property of the entries, not of the matrix.

### isRational

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_is_rational_api_expression_is_rational"></a>
<a id="placement-placement.wasm.javascript_facade.expression_isrational.c5942929964d"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isRational(): boolean | null
```

Whether the expression is known to be rational, or `None` when the assumptions cannot decide it.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_isrational.86f2ab150cd1"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.isRational</code></p>

```typescript signature
isRational(): boolean | undefined
```

</details>

### isReal

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_is_real_api_expression_is_real"></a>
<a id="placement-placement.wasm.javascript_facade.expression_isreal.418cb2d56d52"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isReal(): boolean | null
```

Whether the expression is known to be real, or `None` when the assumptions cannot decide it.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_isreal.f26c33fb44d3"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.isReal</code></p>

```typescript signature
isReal(): boolean | undefined
```

</details>

### isReal

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_is_real_api_matrix_operations_matrix_is_real"></a>
<a id="placement-placement.wasm.wasm_class.matrix_isreal.6f1011db22cc"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isReal(): boolean | undefined
```

Always `None`: realness is a property of the entries, not of the matrix.

### isStale

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_is_stale_api_expression_is_stale"></a>
<a id="placement-placement.wasm.wasm_class.expression_isstale.71f8cf8528d5"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isStale(): boolean
```

Reports whether resetting the owning context invalidated the expression. All other operations reject a stale receiver with an actionable error.

### isUnion

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_is_union_api_expression_is_union"></a>
<a id="placement-placement.wasm.wasm_class.expression_isunion.b55d87d040a7"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isUnion(): boolean
```

Whether this expression is a union of sets.

### isUnion

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_is_union_api_matrix_operations_matrix_is_union"></a>
<a id="placement-placement.wasm.wasm_class.matrix_isunion.7e398215393b"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isUnion(): boolean
```

Always false: a matrix is never a union of sets.

### nodeCount

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_node_count_api_expression_node_count"></a>
<a id="placement-placement.wasm.wasm_class.expression_nodecount.81983e8a3143"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
nodeCount(): number
```

Number of nodes in the expression tree — the size measure used by the simplifier; useful for comparing alternative forms.

### numeratorDenominator

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_numerator_denominator_api_session_numerator_denominator"></a>
<a id="placement-placement.wasm.wasm_module.module_numeratordenominator.ed37930aa207"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
numeratorDenominator(input_expression: Expression): Expression[]
```

Returns the exact structural numerator and denominator without combining sums or cancelling factors. Python returns a two-tuple and the JavaScript facade returns a record.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_numeratordenominator.4d682728a341"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.numeratorDenominator</code></p>

```typescript signature
numeratorDenominator(value: ExpressionLike): NumeratorDenominator
```

<a id="placement-placement.wasm.wasm_class.context_numeratordenominator.1958e57cd14a"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.numeratorDenominator</code></p>

```typescript signature
numeratorDenominator(input_expression: Expression): Expression[]
```

<a id="placement-placement.wasm.javascript_facade.symifacade_numeratordenominator.52fe19194901"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.numeratorDenominator</code></p>

```typescript signature
numeratorDenominator(value: ExpressionLike): NumeratorDenominator
```

</details>

### numeratorDenominator

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_numerator_denominator_api_expression_numerator_denominator"></a>
<a id="placement-placement.wasm.javascript_facade.expression_numeratordenominator.a6fbcb7d0d59"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
numeratorDenominator(): NumeratorDenominator
```

Returns the exact structural numerator and denominator without combining sums or cancelling factors. Python returns a two-tuple and the JavaScript facade returns a record.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_numeratordenominator.016a31025e26"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.numeratorDenominator</code></p>

```typescript signature
numeratorDenominator(): Expression[]
```

</details>

### partialFractions

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_partial_fractions_api_algebra_session_partial_fractions"></a>
<a id="placement-placement.wasm.wasm_module.module_partialfractions.35aaeff54bae"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
partialFractions(
    input_expression: Expression,
    variable: string,
): Expression
```

Decompose a rational expression into polynomial and proper-fraction terms over the named variable.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_partialfractions.c9e0f734b93a"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.partialFractions</code></p>

```typescript signature
partialFractions(
    input_expression: Expression,
    variable: string,
): Expression
```

</details>

### partialFractions

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_partial_fractions_api_expression_operations_expression_partial_fractions"></a>
<a id="placement-placement.wasm.wasm_class.expression_partialfractions.cd98977fa321"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
partialFractions(variable: string): Expression
```

Decompose a rational expression into polynomial and proper-fraction terms over the named variable.

### piecewiseFold

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_piecewise_fold_api_solving_session_piecewise_fold"></a>
<a id="placement-placement.wasm.wasm_module.module_piecewisefold.e933070f4d72"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
piecewiseFold(input_expression: Expression): Expression
```

Expand `abs`, `signum`, and `heaviside_step` definitions recursively and fold piecewise operands of sums, products, powers, factorials, and ordinary function calls into one top-level piecewise expression. For example, `x*abs(x - 1)` becomes the exact two-branch definition with values `x*(x - 1)` and `-x*(x - 1)`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_piecewisefold.d8dc6b0c9df5"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.piecewiseFold</code></p>

```typescript signature
piecewiseFold(input_expression: Expression): Expression
```

</details>

### piecewiseFold

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_piecewise_fold_api_expression_operations_expression_piecewise_fold"></a>
<a id="placement-placement.wasm.wasm_class.expression_piecewisefold.3d9ec0c834c8"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
piecewiseFold(): Expression
```

Expand `abs`, `signum`, and `heaviside_step` definitions recursively and fold piecewise operands of sums, products, powers, factorials, and ordinary function calls into one top-level piecewise expression. For example, `x*abs(x - 1)` becomes the exact two-branch definition with values `x*(x - 1)` and `-x*(x - 1)`.

### presentationNormalForm

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_presentation_normal_form_api_algebra_session_presentation_normal_form"></a>
<a id="placement-placement.wasm.wasm_module.module_presentationnormalform.53908ce4871d"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
presentationNormalForm(input_expression: Expression): Expression
```

The cheap, bounded display-oriented pass run at solver output seams: rational normal form only, kept only when the weighted complexity does not grow. Unlike `simplify` it never runs the full heuristic ladder, so it is fast and deterministic in shape.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_presentationnormalform.265113e13a9d"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.presentationNormalForm</code></p>

```typescript signature
presentationNormalForm(input_expression: Expression): Expression
```

</details>

### presentationNormalForm

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_presentation_normal_form_api_expression_operations_expression_presentation_normal_form"></a>
<a id="placement-placement.wasm.wasm_class.expression_presentationnormalform.af5e499aeb25"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
presentationNormalForm(): Expression
```

The cheap, bounded display-oriented pass run at solver output seams: rational normal form only, kept only when the weighted complexity does not grow. Unlike `simplify` it never runs the full heuristic ladder, so it is fast and deterministic in shape.

### realPart

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_real_part_api_session_real_part"></a>
<a id="placement-placement.wasm.wasm_module.module_realpart.030dff7e14eb"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
realPart(input_expression: Expression): Expression
```

Return the exact real component of an expression. For example, if `y` is declared real, `real_part(exp(i*y))` is `cos(y)`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_realpart.dde44e15175b"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.realPart</code></p>

```typescript signature
realPart(value: ExpressionLike): Expression
```

<a id="placement-placement.wasm.wasm_class.context_realpart.ef73b6cb1c14"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.realPart</code></p>

```typescript signature
realPart(input_expression: Expression): Expression
```

<a id="placement-placement.wasm.javascript_facade.symifacade_realpart.24ce21e1ba1d"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.realPart</code></p>

```typescript signature
realPart(value: ExpressionLike): Expression
```

</details>

### realPart

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_real_part_api_expression_real_part"></a>
<a id="placement-placement.wasm.javascript_facade.expression_realpart.96ac58cb8855"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
realPart(): Expression
```

Return the exact real component of an expression. For example, if `y` is declared real, `real_part(exp(i*y))` is `cos(y)`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_realpart.0ae125d73af1"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.realPart</code></p>

```typescript signature
realPart(): Expression
```

</details>

### rewriteAsExponential

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_rewrite_as_exponential_api_algebra_session_rewrite_as_exponential"></a>
<a id="placement-placement.wasm.wasm_module.module_rewriteasexponential.2432173e98c8"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
rewriteAsExponential(input_expression: Expression): Expression
```

Euler-form rewriter: replace every trigonometric/hyperbolic call with the equivalent complex-exponential expression (bottom-up).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_rewriteasexponential.ead7eee76381"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.rewriteAsExponential</code></p>

```typescript signature
rewriteAsExponential(input_expression: Expression): Expression
```

</details>

### rewriteAsExponential

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_rewrite_as_exponential_api_expression_operations_expression_rewrite_as_exponential"></a>
<a id="placement-placement.wasm.wasm_class.expression_rewriteasexponential.4b402839fe68"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
rewriteAsExponential(): Expression
```

Euler-form rewriter: replace every trigonometric/hyperbolic call with the equivalent complex-exponential expression (bottom-up).

### rewriteInTermsOf

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_rewrite_in_terms_of_api_algebra_session_rewrite_in_terms_of"></a>
<a id="placement-placement.wasm.wasm_module.module_rewriteintermsof.6b03bacbc907"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
rewriteInTermsOf(
    target: Expression,
    source: Expression,
    replacement: Expression,
): Expression
```

Rewrite the target in terms of `replacement` under the caller-supplied formal relation `replacement = source`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_rewriteintermsof.0eada73db806"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.rewriteInTermsOf</code></p>

```typescript signature
rewriteInTermsOf(
    target: Expression,
    source: Expression,
    replacement: Expression,
): Expression
```

</details>

### rewriteInTermsOf

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_rewrite_in_terms_of_api_expression_operations_expression_rewrite_in_terms_of"></a>
<a id="placement-placement.wasm.wasm_class.expression_rewriteintermsof.d205de912a41"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
rewriteInTermsOf(
    source: Expression,
    replacement: Expression,
): Expression
```

Rewrite the target in terms of `replacement` under the caller-supplied formal relation `replacement = source`.

### rewriteSpecialFunctions

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_rewrite_special_functions_api_session_rewrite_special_functions"></a>
<a id="placement-placement.wasm.wasm_module.module_rewritespecialfunctions.dc570b354656"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
rewriteSpecialFunctions(
    input_expression: Expression,
    basis: string,
): Expression
```

Rewrite beta, gamma, binomial, factorial, and rising-factorial representations into the requested `"gamma"`, `"factorial"`, `"binomial"`, or `"rising_factorial"` basis. The exact identities are applied only when their domain gates are proven: factorial and binomial conversions require the relevant non-negative integers, rising-factorial conversions additionally require a positive base, and beta-to-gamma requires two positive arguments. For example, with `n` declared a positive integer, `n!` may be rewritten into the gamma basis and `gamma(n)` into the factorial basis. A site with unconstrained arguments is returned unchanged. Gamma ratios with a literal non-negative argument offset are minimized to their exact shifted product.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_rewritespecialfunctions.9a756b368915"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.rewriteSpecialFunctions</code></p>

```typescript signature
rewriteSpecialFunctions(
    input_expression: Expression,
    basis: string,
): Expression
```

</details>

### rewriteSpecialFunctions

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_rewrite_special_functions_api_expression_rewrite_special_functions"></a>
<a id="placement-placement.wasm.wasm_class.expression_rewritespecialfunctions.590d4aee2a54"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
rewriteSpecialFunctions(basis: string): Expression
```

Rewrite beta, gamma, binomial, factorial, and rising-factorial representations into the requested `"gamma"`, `"factorial"`, `"binomial"`, or `"rising_factorial"` basis. The exact identities are applied only when their domain gates are proven: factorial and binomial conversions require the relevant non-negative integers, rising-factorial conversions additionally require a positive base, and beta-to-gamma requires two positive arguments. For example, with `n` declared a positive integer, `n!` may be rewritten into the gamma basis and `gamma(n)` into the factorial basis. A site with unconstrained arguments is returned unchanged. Gamma ratios with a literal non-negative argument offset are minimized to their exact shifted product.

### symbolName

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_symbol_name_api_expression_symbol_name"></a>
<a id="placement-placement.wasm.javascript_facade.expression_symbolname.5aadc5ef70f0"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
symbolName(): string
```

Returns the name of a symbol expression and rejects every other expression kind.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_symbolname.4c98a64aafac"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.symbolName</code></p>

```typescript signature
symbolName(): string
```

</details>

### toList

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_to_list_api_expression_to_list"></a>
<a id="placement-placement.wasm.wasm_class.expression_tolist.448f0522ff8b"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
toList(): Expression[]
```

Elements of a finite set; raises on other shapes. Python finite sets also support `len()` and iteration.

### toString

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_to_string_api_assumptionproposition_to_string"></a>
<a id="placement-placement.wasm.wasm_class.assumptionproposition_tostring.ac1a37e09f72"></a>
<p class="symi-entry-owner">AssumptionProposition method</p>

```typescript signature
toString(): string
```

Return the canonical formula spelling.

### toString

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_to_string_api_expression_to_string"></a>
<a id="placement-placement.wasm.wasm_class.expression_tostring.f64870e2f750"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
toString(): string
```

The mathematical text of the expression.

### unionComponents

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_union_components_api_expression_union_components"></a>
<a id="placement-placement.wasm.wasm_class.expression_unioncomponents.ba40c4145e3b"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
unionComponents(): Expression[]
```

The components of a set union, as a list of expressions.

