# General simplification

The general simplification ladder and the two rational-form operations it is
built on. Directed algebraic rewrites are on
[algebraic transforms](algebraic-transforms.md), and the fixed-contract
presentation passes are on
[specialized canonical forms](specialized-canonical-forms.md).

### simplify

<a id="placement-placement.wasm.javascript_facade.assumptionscope_simplify.76d00d707442"></a>
`AssumptionScope.simplify(value: ExpressionLike): Expression`

<a id="placement-placement.wasm.wasm_class.assumptionscope_simplify.08324753316d"></a>
Raw WebAssembly: `pub fn simplify(&self, input_expression: &Expression) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_class.context_simplify.2c562eb70380"></a>
Raw WebAssembly: `pub fn simplify(&self, input_expression: &Expression) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_class.expression_simplify.c10646d9d93b"></a>
Raw WebAssembly: `pub fn simplify(&self) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_module.module_simplify.fc6200454a69"></a>
Raw WebAssembly: `fn simplify(input_expression: &Expression) -> Result<Expression, JsError>`



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

<a id="placement-placement.wasm.wasm_class.context_cancel.932c8c84c37d"></a>
Raw WebAssembly: `pub fn cancel(&self, input_expression: &Expression) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_class.expression_cancel.1ccb3725a645"></a>
Raw WebAssembly: `pub fn cancel(&self) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_module.module_cancel.a2f399282cbb"></a>
Raw WebAssembly: `fn cancel(input_expression: &Expression) -> Result<Expression, JsError>`



Rational normal form: write as a single fraction and divide out the
polynomial GCD of numerator and denominator.

### together

<a id="placement-placement.wasm.javascript_facade.context_together.9e3d503c834f"></a>
`Context.together(value: ExpressionLike): Expression`

<a id="placement-placement.wasm.javascript_facade.expression_together.d11878327d8a"></a>
`Expression.together(): Expression`

<a id="placement-placement.wasm.javascript_facade.symifacade_together.63d6c1df067d"></a>
`SymiFacade.together(value: ExpressionLike): Expression`

<a id="placement-placement.wasm.wasm_class.context_together.5c7d3ca8458a"></a>
Raw WebAssembly: `pub fn together(&self, input_expression: &Expression) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_class.expression_together.25148d8a4726"></a>
Raw WebAssembly: `pub fn together(&self) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_module.module_together.6ebbfd66d49a"></a>
Raw WebAssembly: `fn together(input_expression: &Expression) -> Result<Expression, JsError>`



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

<a id="placement-placement.wasm.javascript_facade.context_imaginarypart.617f7b6602bb"></a>
### Context.imaginaryPart

`Context.imaginaryPart(value: ExpressionLike): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_numeratordenominator.4d682728a341"></a>
### Context.numeratorDenominator

`Context.numeratorDenominator(value: ExpressionLike): NumeratorDenominator`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_realpart.dde44e15175b"></a>
### Context.realPart

`Context.realPart(value: ExpressionLike): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_imaginarypart.869495f47a9a"></a>
### Expression.imaginaryPart

`Expression.imaginaryPart(): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_isdefined.ba68953821c2"></a>
### Expression.isDefined

`Expression.isDefined(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_isfinite.ec4bd13d38ab"></a>
### Expression.isFinite

`Expression.isFinite(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_isinteger.a645e50fd6f0"></a>
### Expression.isInteger

`Expression.isInteger(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_isnegative.215cc4b539f3"></a>
### Expression.isNegative

`Expression.isNegative(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_isnonnegative.a0bbd36976fc"></a>
### Expression.isNonnegative

`Expression.isNonnegative(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_isnonzero.cee90ac676f3"></a>
### Expression.isNonzero

`Expression.isNonzero(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_ispositive.5a6cf1d747f2"></a>
### Expression.isPositive

`Expression.isPositive(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_isrational.c5942929964d"></a>
### Expression.isRational

`Expression.isRational(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_isreal.418cb2d56d52"></a>
### Expression.isReal

`Expression.isReal(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_numeratordenominator.a6fbcb7d0d59"></a>
### Expression.numeratorDenominator

`Expression.numeratorDenominator(): NumeratorDenominator`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_realpart.96ac58cb8855"></a>
### Expression.realPart

`Expression.realPart(): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_symbolname.5aadc5ef70f0"></a>
### Expression.symbolName

`Expression.symbolName(): string`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.numeratordenominator.7ceff7e08454"></a>
### NumeratorDenominator

`export interface NumeratorDenominator {`

Returns `numerator_denominator`.

<a id="placement-placement.wasm.javascript_facade.symifacade_imaginarypart.5d66750ea9bf"></a>
### SymiFacade.imaginaryPart

`SymiFacade.imaginaryPart(value: ExpressionLike): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_numeratordenominator.52fe19194901"></a>
### SymiFacade.numeratorDenominator

`SymiFacade.numeratorDenominator(value: ExpressionLike): NumeratorDenominator`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_realpart.24ce21e1ba1d"></a>
### SymiFacade.realPart

`SymiFacade.realPart(value: ExpressionLike): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.wasm_class.assumptionproposition_tostring.ac1a37e09f72"></a>
### AssumptionProposition.toString

`pub fn to_string(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_combinepowers.7c10205ea9cd"></a>
### Context.combinePowers

`pub fn combine_powers(&self, input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_completethesquare.7c0eae8e0253"></a>
### Context.completeTheSquare

`pub fn complete_the_square(&self, input_expression: &Expression, variable: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_imaginarypart.776c5cf4f0e7"></a>
### Context.imaginaryPart

`pub fn imaginary_part(&self, input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_numeratordenominator.1958e57cd14a"></a>
### Context.numeratorDenominator

`pub fn numerator_denominator(&self, input_expression: &Expression) -> Result<Vec<Expression>, JsError>`

Returns `Result<Vec<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_partialfractions.c9e0f734b93a"></a>
### Context.partialFractions

`pub fn partial_fractions(&self, input_expression: &Expression, variable: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_piecewisefold.d8dc6b0c9df5"></a>
### Context.piecewiseFold

`pub fn piecewise_fold(&self, input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_presentationnormalform.265113e13a9d"></a>
### Context.presentationNormalForm

`pub fn presentation_normal_form(&self, input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_realpart.ef73b6cb1c14"></a>
### Context.realPart

`pub fn real_part(&self, input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_rewriteasexponential.ead7eee76381"></a>
### Context.rewriteAsExponential

`pub fn rewrite_as_exponential(&self, input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_rewriteintermsof.0eada73db806"></a>
### Context.rewriteInTermsOf

`pub fn rewrite_in_terms_of(&self, target: &Expression, source: &Expression, replacement: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_rewritespecialfunctions.9a756b368915"></a>
### Context.rewriteSpecialFunctions

`pub fn rewrite_special_functions(&self, input_expression: &Expression, basis: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_combinepowers.fbbb9d6d14ef"></a>
### Expression.combinePowers

`pub fn combine_powers(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_completethesquare.3d862f31a1ce"></a>
### Expression.completeTheSquare

`pub fn complete_the_square(&self, variable: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_evaluatetofloat.397b7c48c0f3"></a>
### Expression.evaluateToFloat

`pub fn evaluate_to_float(&self) -> Result<f64, JsError>`

Returns `Result<f64, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_expressiontype.9ef64c5b0bbb"></a>
### Expression.expressionType

`pub fn expression_type(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_freevariables.2b831cd5640c"></a>
### Expression.freeVariables

`pub fn free_variables(&self) -> Result<Vec<String>, JsError>`

Returns `Result<Vec<String>, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_imagesetdomain.894cf5996d73"></a>
### Expression.imageSetDomain

`pub fn image_set_domain(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_imagesetlambdaexpression.9537a3075b6e"></a>
### Expression.imageSetLambdaExpression

`pub fn image_set_lambda_expression(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_imagesetvariable.c23ad4dbf4cb"></a>
### Expression.imageSetVariable

`pub fn image_set_variable(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_imaginarypart.8aff7315b620"></a>
### Expression.imaginaryPart

`pub fn imaginary_part(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_integralintegrand.e27ba8e9a388"></a>
### Expression.integralIntegrand

`pub fn integral_integrand(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_integrallowerbound.9922f04b09ad"></a>
### Expression.integralLowerBound

`pub fn integral_lower_bound(&self) -> Result<Option<Expression>, JsError>`

Returns `Result<Option<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_integralupperbound.e819ab900c26"></a>
### Expression.integralUpperBound

`pub fn integral_upper_bound(&self) -> Result<Option<Expression>, JsError>`

Returns `Result<Option<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_integralvariable.5d2186957c4e"></a>
### Expression.integralVariable

`pub fn integral_variable(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_intervallower.36837bbd1eec"></a>
### Expression.intervalLower

`pub fn interval_lower(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_intervalupper.dfbef6dc04bc"></a>
### Expression.intervalUpper

`pub fn interval_upper(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_isdefined.767be28c2b33"></a>
### Expression.isDefined

`pub fn is_defined(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_isequality.86f4b29381a0"></a>
### Expression.isEquality

`pub fn is_equality(&self) -> Result<bool, JsError>`

Returns `Result<bool, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_isfinite.424570d72876"></a>
### Expression.isFinite

`pub fn is_finite(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_isfiniteset.90bfc2fdaf03"></a>
### Expression.isFiniteSet

`pub fn is_finite_set(&self) -> Result<bool, JsError>`

Returns `Result<bool, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_isimageset.5466d3ce260e"></a>
### Expression.isImageSet

`pub fn is_image_set(&self) -> Result<bool, JsError>`

Returns `Result<bool, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_isinteger.97d2a50d8429"></a>
### Expression.isInteger

`pub fn is_integer(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_isintegral.aaf3a7607ea0"></a>
### Expression.isIntegral

`pub fn is_integral(&self) -> Result<bool, JsError>`

Returns `Result<bool, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_isinterval.c4ea28ca3bf2"></a>
### Expression.isInterval

`pub fn is_interval(&self) -> Result<bool, JsError>`

Returns `Result<bool, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_ismatrix.c4b71b990067"></a>
### Expression.isMatrix

`pub fn is_matrix(&self) -> Result<bool, JsError>`

Returns `Result<bool, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_isnegative.575a1576c858"></a>
### Expression.isNegative

`pub fn is_negative(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_isnonnegative.05a865e90f81"></a>
### Expression.isNonnegative

`pub fn is_nonnegative(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_isnonzero.a92613e21491"></a>
### Expression.isNonzero

`pub fn is_nonzero(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_ispositive.f0a589e1849f"></a>
### Expression.isPositive

`pub fn is_positive(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_isrational.86f2ab150cd1"></a>
### Expression.isRational

`pub fn is_rational(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_isreal.f26c33fb44d3"></a>
### Expression.isReal

`pub fn is_real(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_isstale.71f8cf8528d5"></a>
### Expression.isStale

`pub fn is_stale(&self) -> bool`

Returns `bool`.

<a id="placement-placement.wasm.wasm_class.expression_isunion.b55d87d040a7"></a>
### Expression.isUnion

`pub fn is_union(&self) -> Result<bool, JsError>`

Returns `Result<bool, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_nodecount.81983e8a3143"></a>
### Expression.nodeCount

`pub fn node_count(&self) -> Result<usize, JsError>`

Returns `Result<usize, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_numeratordenominator.016a31025e26"></a>
### Expression.numeratorDenominator

`pub fn numerator_denominator(&self) -> Result<Vec<Expression>, JsError>`

Returns `Result<Vec<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_partialfractions.cd98977fa321"></a>
### Expression.partialFractions

`pub fn partial_fractions(&self, variable: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_piecewisefold.3d9ec0c834c8"></a>
### Expression.piecewiseFold

`pub fn piecewise_fold(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_presentationnormalform.af5e499aeb25"></a>
### Expression.presentationNormalForm

`pub fn presentation_normal_form(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_realpart.0ae125d73af1"></a>
### Expression.realPart

`pub fn real_part(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_rewriteasexponential.4b402839fe68"></a>
### Expression.rewriteAsExponential

`pub fn rewrite_as_exponential(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_rewriteintermsof.d205de912a41"></a>
### Expression.rewriteInTermsOf

`pub fn rewrite_in_terms_of(&self, source: &Expression, replacement: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_rewritespecialfunctions.590d4aee2a54"></a>
### Expression.rewriteSpecialFunctions

`pub fn rewrite_special_functions(&self, basis: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_symbolname.4c98a64aafac"></a>
### Expression.symbolName

`pub fn symbol_name(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_tolist.448f0522ff8b"></a>
### Expression.toList

`pub fn to_list(&self) -> Result<Vec<Expression>, JsError>`

Returns `Result<Vec<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_tostring.f64870e2f750"></a>
### Expression.toString

`pub fn to_string(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_unioncomponents.ba40c4145e3b"></a>
### Expression.unionComponents

`pub fn union_components(&self) -> Result<Vec<Expression>, JsError>`

Returns `Result<Vec<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_isequality.df1325fbf5f8"></a>
### Matrix.isEquality

`pub fn is_equality(&self) -> bool`

Returns `bool`.

<a id="placement-placement.wasm.wasm_class.matrix_isfiniteset.bb89df6933ea"></a>
### Matrix.isFiniteSet

`pub fn is_finite_set(&self) -> bool`

Returns `bool`.

<a id="placement-placement.wasm.wasm_class.matrix_isimageset.3fe74cafdfc3"></a>
### Matrix.isImageSet

`pub fn is_image_set(&self) -> bool`

Returns `bool`.

<a id="placement-placement.wasm.wasm_class.matrix_isintegral.9e71f8fe0c10"></a>
### Matrix.isIntegral

`pub fn is_integral(&self) -> bool`

Returns `bool`.

<a id="placement-placement.wasm.wasm_class.matrix_ismatrix.49764165c804"></a>
### Matrix.isMatrix

`pub fn is_matrix(&self) -> bool`

Returns `bool`.

<a id="placement-placement.wasm.wasm_class.matrix_ispositive.27aac02052db"></a>
### Matrix.isPositive

`pub fn is_positive(&self) -> Option<bool>`

Returns `Option<bool>`.

<a id="placement-placement.wasm.wasm_class.matrix_isreal.6f1011db22cc"></a>
### Matrix.isReal

`pub fn is_real(&self) -> Option<bool>`

Returns `Option<bool>`.

<a id="placement-placement.wasm.wasm_class.matrix_isunion.7e398215393b"></a>
### Matrix.isUnion

`pub fn is_union(&self) -> bool`

Returns `bool`.

<a id="placement-placement.wasm.wasm_module.module_combinepowers.0e25bed4eaab"></a>
### module.combinePowers

`fn combine_powers(input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_completethesquare.bf40d9a8b764"></a>
### module.completeTheSquare

`fn complete_the_square(input_expression: &Expression, variable: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_imaginarypart.8a82c066b15a"></a>
### module.imaginaryPart

`fn imaginary_part(input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_numeratordenominator.ed37930aa207"></a>
### module.numeratorDenominator

`fn numerator_denominator(input_expression: &Expression) -> Result<Vec<Expression>, JsError>`

Returns `Result<Vec<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_partialfractions.35aaeff54bae"></a>
### module.partialFractions

`fn partial_fractions(input_expression: &Expression, variable: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_piecewisefold.e933070f4d72"></a>
### module.piecewiseFold

`fn piecewise_fold(input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_presentationnormalform.53908ce4871d"></a>
### module.presentationNormalForm

`fn presentation_normal_form(input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_realpart.030dff7e14eb"></a>
### module.realPart

`fn real_part(input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_rewriteasexponential.2432173e98c8"></a>
### module.rewriteAsExponential

`fn rewrite_as_exponential(input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_rewriteintermsof.6b03bacbc907"></a>
### module.rewriteInTermsOf

`fn rewrite_in_terms_of(target: &Expression, source: &Expression, replacement: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_rewritespecialfunctions.dc570b354656"></a>
### module.rewriteSpecialFunctions

`fn rewrite_special_functions(input_expression: &Expression, basis: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

