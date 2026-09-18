# Calculus

Calculus follows a uniform construct-versus-evaluate model; the summary table
is in [Evaluation and constants](evaluation-and-constants.md). Every variable
parameter accepts a name or a same-context symbol expression.

### differentiate

<a id="placement-placement.wasm.javascript_facade.context_differentiate.02b9812493bf"></a>
`Context.differentiate(value: ExpressionLike, variable: VariableLike): Expression`

<a id="placement-placement.wasm.javascript_facade.expression_differentiate.85cf43e1ce4c"></a>
`Expression.differentiate(variable: VariableLike): Expression`

<a id="placement-placement.wasm.javascript_facade.symifacade_differentiate.e4a123823c8a"></a>
`SymiFacade.differentiate(value: ExpressionLike, variable: VariableLike): Expression`

<a id="placement-placement.wasm.wasm_class.context_differentiate.df81a03aa1ac"></a>
Raw WebAssembly: `pub fn differentiate(&self, input_expression: &Expression, variable: &str) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_class.expression_differentiate.aadc0cf2928a"></a>
Raw WebAssembly: `pub fn differentiate(&self, variable: &str) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_module.module_differentiate.4f7ff0e7c9f8"></a>
Raw WebAssembly: `fn differentiate(input_expression: &Expression, variable: &str) -> Result<Expression, JsError>`


Symbolic derivative with respect to `variable`. The derivative is total: unknown
function calls produce derivative nodes.

### integrate

<a id="placement-placement.wasm.javascript_facade.assumptionscope_integrate.2a66e4d0ee6f"></a>
`AssumptionScope.integrate(value: ExpressionLike, variable: VariableLike): Expression`

<a id="placement-placement.wasm.javascript_facade.context_integrate.c7366cddca9f"></a>
`Context.integrate(value: ExpressionLike, variable: VariableLike): Expression`

<a id="placement-placement.wasm.javascript_facade.expression_integrate.d67955658e24"></a>
`Expression.integrate(variable: VariableLike): Expression`

<a id="placement-placement.wasm.javascript_facade.symifacade_integrate.23b97ff9965a"></a>
`SymiFacade.integrate(value: ExpressionLike, variable: VariableLike): Expression`

<a id="placement-placement.wasm.wasm_class.assumptionscope_integrate.2fdd7c0dfbd7"></a>
Raw WebAssembly: `pub fn integrate(&self, input_expression: &Expression, variable: &str) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_class.context_integrate.7ea7e1c842ce"></a>
Raw WebAssembly: `pub fn integrate(&self, input_expression: &Expression, variable: &str) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_class.expression_integrate.d04377e90f5e"></a>
Raw WebAssembly: `pub fn integrate(&self, variable: &str) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_module.module_integrate.ba7c5019b6c5"></a>
Raw WebAssembly: `fn integrate(input_expression: &Expression, variable: &str) -> Result<Expression, JsError>`


Indefinite integration (no constant of integration). When every symbolic
strategy fails, the result is an *unevaluated* `integral` node, never a
guess. Real symbolic parameters can produce a `piecewise` antiderivative
whose conditions describe the supported parameter strata. A parameter value
outside every branch is undefined rather than a hidden declined branch.

### integrate_definite

*Not exposed by the WASM / JavaScript bindings. Available as [`AssumptionScope.integrate_definite`](/symi/python/calculus#integrate_definite) in Python, [`UniffiAssumptionScope.integrateDefinite`](/symi/kotlin/calculus#integrate_definite) in Kotlin, [`UniffiAssumptionScope.integrateDefinite`](/symi/swift/calculus#integrate_definite) in Swift, [`api::AssumptionScope::integrate_definite`](/symi/rust/calculus#integrate_definite) in Rust.*


Definite integration over `[lower, upper]` (bounds may be infinite). Falls
back to an unevaluated bounded `integral` node when no exact evaluation
exists. For supported real radicals, absolute values, and explicit piecewise
expressions, the evaluator forms an exact ordered partition at domain, zero,
pole, and branch boundaries. It integrates the selected formula on each open
cell and accepts it only after an exact derivative residual check. Singular
or excluded endpoints are evaluated by the appropriate one-sided limit.
Reversed bounds negate the forward integral. The operation uses ordinary
improper-integral semantics and never infers a Cauchy principal value; an
undecidable order, sign, domain, branch, or limit makes the whole route
decline atomically. Use `integrate_definite_detailed` when a proved
divergence, a principal value, or a declared parameter region matters.

### integrate_definite_detailed

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.integrate_definite_detailed`](/symi/python/calculus#integrate_definite_detailed) in Python, [`UniffiSession.integrateDefiniteDetailed`](/symi/kotlin/calculus#integrate_definite_detailed) in Kotlin, [`UniffiSession.integrateDefiniteDetailed`](/symi/swift/calculus#integrate_definite_detailed) in Swift, [`api::Session::integrate_definite_detailed`](/symi/rust/calculus#integrate_definite_detailed) in Rust.*


Definite integration that keeps its verdict distinct from its value, so a
proved divergence is never confused with a declined request. `interpretation`
is `ordinary` (every one-sided improper contribution must converge
independently) or `cauchy_principal_value` (an independent symmetric
exclusion about each finite interior singularity, and a symmetric truncation
of a whole-line request; a singular finite bound or a single infinite bound
stays an ordinary limit). Divergence is proved from the integrand itself: at
each singular point and each infinite bound a certified leading power and
logarithm term is compared with the integrable threshold, so no closed
antiderivative is needed. A principal value is taken as the limit of one
grouped truncated expression per cutoff, never as a difference of separately
divergent halves. An undecided bound order, an incomplete singular set, or an
unsettled limit declines with a typed reason. `constraint` is a logical
expression on the parameters that holds throughout the request and reaches
every strategy; a malformed or contradictory constraint is an error. WASM
takes `interpretation` and `constraint` as optional arguments, and a
constraint handle is taken by value. Kotlin and Swift take the interpretation
as a typed enumeration.

### DefiniteIntegrationResult

*Not exposed by the WASM / JavaScript bindings. Available as [`DefiniteIntegrationResult`](/symi/python/calculus#DefiniteIntegrationResult) in Python, [`api::DefiniteIntegrationResult`](/symi/rust/calculus#DefiniteIntegrationResult) in Rust.*

`interpretation`, `verdict` (`evaluated`, `divergent` or `declined`), `value`
(present exactly when evaluated), `divergence_direction` (`positive_infinity`
or `negative_infinity`, present only when a single signed infinity was
established), and `decline_reason` (`unsupported_family`,
`incomplete_singularity_analysis`, `unknown_endpoint_behavior`,
`unknown_bound_order` or `unsupported_region`, present exactly when declined).

### integrate_definite_numeric

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.integrate_definite_numeric`](/symi/python/calculus#integrate_definite_numeric) in Python, [`UniffiSession.integrateDefiniteNumeric`](/symi/kotlin/calculus#integrate_definite_numeric) in Kotlin, [`UniffiSession.integrateDefiniteNumeric`](/symi/swift/calculus#integrate_definite_numeric) in Swift, [`api::analysis::Session::integrate_definite_numeric`](/symi/rust/calculus#integrate_definite_numeric) in Rust.*


Explicit finite-interval quadrature. This is separate from symbolic definite
integration: it returns no value when convergence is not established and never
substitutes an unevaluated symbolic integral. The requested precision is in bits.

### NumericDefiniteIntegrationResult

*Not exposed by the WASM / JavaScript bindings. Available as [`NumericDefiniteIntegrationResult`](/symi/python/calculus#NumericDefiniteIntegrationResult) in Python, [`api::NumericDefiniteIntegrationResult`](/symi/rust/calculus#NumericDefiniteIntegrationResult) in Rust.*

`value` is an optional `(real, imaginary)` pair. When present,
`estimated_absolute_error` is the final difference between successive quadrature
rules; `precision_bits` and `node_count` identify the accepted rule.

### integrate_iterated

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.integrate_iterated`](/symi/python/calculus#integrate_iterated) in Python, [`UniffiExpression.integrateIterated`](/symi/kotlin/calculus#integrate_iterated) in Kotlin, [`UniffiExpression.integrateIterated`](/symi/swift/calculus#integrate_iterated) in Swift, [`api::analysis::Session::integrate_iterated`](/symi/rust/calculus#integrate_iterated) in Rust.*


Iterated indefinite integration, applying the single-variable pipeline once
per entry of `variables` in **left-to-right order (innermost binder first)**.
An empty list returns the input unchanged. If any stage fails to close, the
remaining binders wrap the intermediate as nested unevaluated `integral`
nodes — no partial evaluation through an unclosed inner integral.

### limit

<a id="placement-placement.wasm.wasm_class.context_limit.6bf8a3ae36bb"></a>
Raw WebAssembly: `pub fn limit(&self, input_expression: &Expression, variable: &str, point: &Expression, direction: Option<String>) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_class.expression_limit.ef276e5bcd5f"></a>
Raw WebAssembly: `pub fn limit(&self, variable: &str, point: &Expression, direction: Option<String>) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_module.module_limit.09bfaf02cffb"></a>
Raw WebAssembly: `fn limit(input_expression: &Expression, variable: &str, point: &Expression, direction: Option<String>) -> Result<Expression, JsError>`


`limit(expression, variable, point, direction="two_sided")` constructs a deferred limit.

### evaluate_limit

*Not exposed by the WASM / JavaScript bindings. Available as [`AssumptionScope.evaluate_limit`](/symi/python/calculus#evaluate_limit) in Python, [`UniffiAssumptionScope.evaluateLimit`](/symi/kotlin/calculus#evaluate_limit) in Kotlin, [`UniffiAssumptionScope.evaluateLimit`](/symi/swift/calculus#evaluate_limit) in Swift, [`api::AssumptionScope::evaluate_limit`](/symi/rust/calculus#evaluate_limit) in Rust.*


`evaluate_limit(expression, variable, point, direction="two_sided")` runs the eager limit engine.
It returns an unevaluated limit when the engine cannot close the result.

Limit of the expression as `variable` approaches `point`. `direction` is one
of `"two_sided"`, `"from_left"`, `"from_right"`. Undecidable limits return an
unevaluated form.

Beyond direct substitution and simple poles, every closed limit rests on
symbolic evidence: continuity of the composed germ, proved signs, and
expansions whose residuals are carried to the end. A numeric sample never
authorises a result. The certified routes are:

* **Eventual germ signs.** `abs(g)` and `signum(g)` reduce to the branch valid
  on the requested approach side once the sign of `g` is proved on a punctured
  one-sided neighbourhood — from the local parameter and its powers, from exact
  constant multiples and products, or from a leading term that strictly
  dominates its own certified residual. So `limit(x/abs(x), x, 0, "from_right")`
  is `1` and `limit(signum((x-2)^3), x, 2, "from_left")` is `-1`, while a
  two-sided limit whose one-sided values disagree stays unevaluated.
* **Bounded perturbations.** A uniformly bounded remainder is discarded against
  a divergent scale by a squeeze certificate, so
  `limit(log(x)/(log(x)+sin(x)), x, infinity)` is `1` and
  `limit(sin(x)/log(x), x, infinity)` is `0`. The bounded grammar is exact
  constants, `sin`, `cos`, `signum`, `abs`, and their sums, products and
  nonnegative integer powers; a reciprocal needs a separately proved positive
  lower bound.
* **Exponential-logarithmic dominance.** At infinity, and one-sidedly at a
  finite real point through the substitution `a + 1/t` or `a - 1/t`, the most rapidly
  varying exponential and logarithmic subexpressions are rewritten as powers of
  a small auxiliary variable and expanded recursively through the slower
  scales. A cancelled leading term requests further terms instead of dropping a
  residual, so an exponentially small correction amplified by a large
  exponential is kept:
  `limit((exp(x*exp(-x)/(exp(-x)+exp(-2*x^2/(x+1))))-exp(x))/x, x, infinity)`
  is `-exp(2)`, and
  `limit(x*log(x)*log(x*exp(x)-x^2)^2/log(log(x^2+2*exp(exp(3*x^3*log(x))))), x, infinity)`
  is `1/3`.
* **Gamma asymptotics.** `factorial`, `gamma` and `log_gamma` of an argument
  `c*t + h`, with `c > 0` and a shift `h` independent of the limit variable,
  expand through Stirling's series with the shifted Bernoulli-polynomial
  corrections and explicitly bounded remainders. The shift may be symbolic or
  complex, so `limit(gamma(z+a)/gamma(z)*exp(-a*log(z)), z, infinity)` is `1`
  for every fixed `a`, and `limit(factorial(n)^(1/n)/n, n, infinity)` is `1/e`.
  A principal logarithm or a non-integer power of a Gamma value requires a
  real shift.
* **Local meromorphic data.** `zeta` near `s = 1` contributes its pole and
  finite part, `1/(s-1) + euler_gamma + O(s-1)`, to ordinary local arithmetic,
  so `limit(zeta(x) - 1/(x-1), x, 1)` is `euler_gamma`. A cancellation that
  needs further Laurent coefficients declines; no numeric Stieltjes constant is
  substituted.
* **Hypergeometric reduction.** Admissible parameter cancellation and the
  binomial identity `hypergeometric_pfq([a], [], u) = (1-u)^(-a)` on the disk
  `|u| < 1` apply before asymptotics, so
  `limit(hypergeometric_pfq([1, k], [1], z/k), k, infinity)` is `exp(z)` for
  every fixed complex `z`. Cancellation never passes through a nonpositive
  integer lower parameter.
* **Products and integrals.** A definite `product` of affine factors is
  reduced to its rising-factorial Gamma form, checked by its initial value and
  shift quotient, before the Gamma asymptotics apply. A sequence limit needs
  the index proved to be a positive integer, for example inside
  `assuming(positive_integer_assumption(n))`; there
  `n^x/(x*product(1 + x/k, k, 1, n))` tends to `gamma(x)`. At the excluded
  parameters `x = 0, -1, -2, ...` the input is undefined and no value is
  returned, and without integer evidence the limit stays unevaluated. A bounded
  `integral` whose endpoint moves with the limit variable is expanded from a
  local series of an analytic integrand together with its integrated remainder,
  in either orientation, so
  `limit(x*integral(exp(-t^2), t, 0, x)/(1-exp(-x^2)), x, 0)` is `1`.

The decline boundary is deliberate, not incidental. A bound is not a limit, so
`limit(sin(x), x, infinity)` and `limit(exp(sin(x)), x, infinity)` stay
unevaluated; so does a reciprocal of an expression that may cross zero, such as
`limit(1/sin(x), x, infinity)`, and any cancellation between two unrelated
oscillations. A real logarithm is only approached from the side on which its
argument is positive: `limit(arctan(-log(x)), x, 0, "from_right")` is `pi/2`,
while the left and two-sided limits stay unevaluated. The Gamma routes decline
unless the argument tends to positive infinity along the real axis, so a
negative-axis argument, an argument approaching a Gamma pole, and a shift that
moves with the limit variable all stay unevaluated. An unresolved constant sign
or equality, an unsupported branch, and an improper integral whose limit would
have to be interchanged with integration also decline. Exact identities keep
priority over asymptotic normalisation, and every proof or rewrite budget
exhaustion returns the unevaluated form rather than a guess.

### singularities

<a id="placement-placement.wasm.javascript_facade.assumptionscope_singularities.227597e63d8e"></a>
`AssumptionScope.singularities(value: ExpressionLike, variable: VariableLike): Expression`

<a id="placement-placement.wasm.wasm_class.assumptionscope_singularities.f24ea8f03f44"></a>
Raw WebAssembly: `pub fn singularities(&self, input_expression: &Expression, variable: &str) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_class.context_singularities.6066a1b62d30"></a>
Raw WebAssembly: `pub fn singularities(&self, input_expression: &Expression, variable: &str) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_class.expression_singularities.3f1ebf570aaf"></a>
Raw WebAssembly: `pub fn singularities(&self, variable: &str) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_module.module_singularities.5894dcc61a6b"></a>
Raw WebAssembly: `fn singularities(input_expression: &Expression, variable: &str) -> Result<Expression, JsError>`


The singular points of the expression in the complex plane, as a set
expression (finite set, union, image set for periodic families, …). Rational
denominators are solved over the complex numbers even when the variable has
real assumptions. Multivalued functions contribute their finite branch
points; a conventional principal-branch cut is not returned as though every
point on it were singular.

### continuous_domain

*Not exposed by the WASM / JavaScript bindings. Available as [`AssumptionScope.continuous_domain`](/symi/python/calculus#continuous_domain) in Python, [`UniffiAssumptionScope.continuousDomain`](/symi/kotlin/calculus#continuous_domain) in Kotlin, [`UniffiAssumptionScope.continuousDomain`](/symi/swift/calculus#continuous_domain) in Swift, [`api::AssumptionScope::continuous_domain`](/symi/rust/calculus#continuous_domain) in Rust.*


The subset of the real line on which the expression is continuous in
`variable`, as a set expression. Compound rational square-root radicands are
lowered to an exact univariate semialgebraic condition when supported, so,
for example, `sqrt(x + 1/x - 2)` has continuous real domain `(0, infinity)`.

### summation_indefinite

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.summation_indefinite`](/symi/python/calculus#summation_indefinite) in Python, [`UniffiExpression.summationIndefinite`](/symi/kotlin/calculus#summation_indefinite) in Kotlin, [`UniffiExpression.summationIndefinite`](/symi/swift/calculus#summation_indefinite) in Swift, [`api::analysis::Session::summation_indefinite`](/symi/rust/calculus#summation_indefinite) in Rust.*


Anti-difference: a closed form \(F\) with \(F(\operatorname{index}+1) - F(\operatorname{index}) = \operatorname{summand}\).
Strategy stack: constant summands, linearity, polynomial power sums, rational
summands (Abramov), hypergeometric summands (Gosper), and finally C-finite
summands solved in a finite sequence state algebra (see `summation` on the
construction page for that admitted class — \(\sum F(k)^2\) closes here). Outside that
scope the result is an unevaluated `summation` placeholder. The existing
`summation` binding (construction page) remains the definite/unevaluated entry
point.

Gosper runs as a decision procedure over the term's own coefficient field
`Q(parameters)`, so symbolic parameters inside binomial, factorial, Pochhammer
or Gamma arguments are admitted rather than rejected — `binomial(n, k)` and
`2^(-n) * binomial(n, k)` are read the same way `binomial(7, k)` is. A summand
that is a *sum* is first tested for being a rational multiple of one
hypergeometric term, because a binomial difference such as
`2^(-n)*binomial(n,k) - 2^(-(n+1))*binomial(n+1,k)` has an anti-difference
while neither half does; only when that fails does linearity distribute.

Three outcomes are distinguished internally and all three surface as the
unevaluated placeholder, which is never a claim that no closed form exists:
the summand is outside the admitted term class; the term is admitted and
Gosper *proves* it has no hypergeometric anti-difference (the classical
`binomial(n, k)` case); or a resource ceiling stopped the search before its
mathematical bound. Anti-differences carrying combinatorial factors are proved
on the non-negative-integer domain — the convention under which
`binomial(n, k)` is zero outside \(0 \le k \le n\) — and are not claimed as
unrestricted Gamma-analytic identities.

### evaluate_numeric

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.evaluate_numeric`](/symi/python/calculus#evaluate_numeric) in Python, [`UniffiExpression.evaluateNumeric`](/symi/kotlin/calculus#evaluate_numeric) in Kotlin, [`UniffiExpression.evaluateNumeric`](/symi/swift/calculus#evaluate_numeric) in Swift, [`api::analysis::Session::evaluate_numeric`](/symi/rust/calculus#evaluate_numeric) in Rust.*


Numerically evaluate to a float and re-encode as an exact rational literal;
returns the input unchanged when the expression has no numeric value.
For direct float output use `expression.evaluate_to_float`.

### evaluate_on_grid

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.evaluate_on_grid`](/symi/python/calculus#evaluate_on_grid) in Python, [`UniffiSession.evaluateOnGrid`](/symi/kotlin/calculus#evaluate_on_grid) in Kotlin, [`UniffiSession.evaluateOnGrid`](/symi/swift/calculus#evaluate_on_grid) in Swift, [`api::analysis::Session::evaluate_on_grid`](/symi/rust/calculus#evaluate_on_grid) in Rust.*


Evaluate at each grid point, substituting `variable`. Positions where
evaluation fails (pole, complex value, unbound symbol) hold NaN. Intended for
plotting.

### evaluate_on_grid_points

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.evaluate_on_grid_points`](/symi/python/calculus#evaluate_on_grid_points) in Python, [`UniffiSession.evaluateOnGridPoints`](/symi/kotlin/calculus#evaluate_on_grid_points) in Kotlin, [`UniffiSession.evaluateOnGridPoints`](/symi/swift/calculus#evaluate_on_grid_points) in Swift, [`api::analysis::Session::evaluate_on_grid_points`](/symi/rust/calculus#evaluate_on_grid_points) in Rust.*


Multi-variable companion to `evaluate_on_grid`: evaluate at each point of a
flat row-major coordinate array (one coordinate per variable, so the points
length must be a multiple of the variable count), returning one float per
point. Positions where evaluation fails hold NaN. Raises when `variables` is
empty or the lengths disagree. Intended for sampling surfaces and implicit
curves.

### execute

<a id="placement-placement.wasm.javascript_facade.context_execute.f750d4ad1a52"></a>
`Context.execute(value: ExpressionLike): Expression`

<a id="placement-placement.wasm.javascript_facade.expression_execute.8b9ac9285061"></a>
`Expression.execute(): Expression`

<a id="placement-placement.wasm.javascript_facade.matrix_execute.28422f05de37"></a>
`Matrix.execute(): Matrix`

<a id="placement-placement.wasm.javascript_facade.symifacade_execute.899a0953de4b"></a>
`SymiFacade.execute(value: ExpressionLike): Expression`

<a id="placement-placement.wasm.wasm_class.context_execute.8f16d95e4225"></a>
Raw WebAssembly: `pub fn execute(&self, input_expression: &Expression) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_class.expression_execute.863a3e670c60"></a>
Raw WebAssembly: `pub fn execute(&self) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_class.matrix_execute.cd3080e5f4bd"></a>
Raw WebAssembly: `pub fn execute(&self) -> Result<Matrix, JsError>`

<a id="placement-placement.wasm.wasm_module.module_execute.046976fb1643"></a>
Raw WebAssembly: `fn execute(input_expression: &Expression) -> Result<Expression, JsError>`


Re-dispatch every unevaluated node (integral, derivative, summation,
transform, ODE/recurrence placeholder) in the expression; useful after
substitution has changed the inputs.

## Example

Differentiate, integrate, and take a one-sided limit of the same expression.

```javascript
const x = symi.symbol("x");
const target = symi.sin(x).divide(x);

console.log(symi.differentiate(target, "x").toString());
console.log(symi.integrate(symi.sin(x), "x").toString());
console.log(target.limit("x", 0).toString());
```


## Additional API

<a id="placement-placement.wasm.javascript_facade.assumptionscope_continuousdomain.6d9849f22085"></a>
### AssumptionScope.continuousDomain

`AssumptionScope.continuousDomain(value: ExpressionLike, variable: VariableLike): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_derivative.71488970b451"></a>
### Expression.derivative

`Expression.derivative(variable: VariableLike, order?: number): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.wasm_class.assumptionscope_continuousdomain.24bf52c8474b"></a>
### AssumptionScope.continuousDomain

`pub fn continuous_domain(&self, input_expression: &Expression, variable: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.assumptionscope_evaluatelimit.8126d7e3bcbd"></a>
### AssumptionScope.evaluateLimit

`pub fn evaluate_limit(&self, input_expression: &Expression, variable: &str, point: &Expression, direction: Option<String>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.assumptionscope_fouriertransform.5a22c0081730"></a>
### AssumptionScope.fourierTransform

`pub fn fourier_transform(&self, input_expression: &Expression, time_variable: &str, frequency_variable: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.assumptionscope_integratedefinite.f892481fe20c"></a>
### AssumptionScope.integrateDefinite

`pub fn integrate_definite(&self, input_expression: &Expression, variable: &str, lower_bound: &Expression, upper_bound: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.assumptionscope_laplacetransform.ec1051a0196b"></a>
### AssumptionScope.laplaceTransform

`pub fn laplace_transform(&self, input_expression: &Expression, time_variable: &str, frequency_variable: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_continuousdomain.b3456b9e12a2"></a>
### Context.continuousDomain

`pub fn continuous_domain(&self, input_expression: &Expression, variable: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_derivative.50bdfc4c863b"></a>
### Context.derivative

`pub fn derivative(&self, input_expression: &Expression, variable: &str, order: Option<usize>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_evaluatelimit.198af56c4c62"></a>
### Context.evaluateLimit

`pub fn evaluate_limit(&self, input_expression: &Expression, variable: &str, point: &Expression, direction: Option<String>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_evaluatenumeric.cf32bb7a03b5"></a>
### Context.evaluateNumeric

`pub fn evaluate_numeric(&self, input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_evaluateongrid.58241f8651c5"></a>
### Context.evaluateOnGrid

`pub fn evaluate_on_grid(&self, input_expression: &Expression, variable: &str, x_values: Vec<f64>) -> Result<Vec<f64>, JsError>`

Returns `Result<Vec<f64>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_evaluateongridpoints.883efda52e22"></a>
### Context.evaluateOnGridPoints

`pub fn evaluate_on_grid_points(&self, input_expression: &Expression, variables: Vec<String>, points: Vec<f64>) -> Result<Vec<f64>, JsError>`

Returns `Result<Vec<f64>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_fouriertransform.6e6cbfb61d2f"></a>
### Context.fourierTransform

`pub fn fourier_transform(&self, input_expression: &Expression, time_variable: &str, frequency_variable: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_integratedefinite.c23e8611ea36"></a>
### Context.integrateDefinite

`pub fn integrate_definite(&self, input_expression: &Expression, variable: &str, lower: &Expression, upper: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_integratedefinitedetailed.d4e91bc937ad"></a>
### Context.integrateDefiniteDetailed

`pub fn integrate_definite_detailed(&self, input_expression: &Expression, variable: &str, lower: &Expression, upper: &Expression, interpretation: Option<String>, constraint: Option<Expression>) -> Result<DefiniteIntegrationResult, JsError>`

Returns `Result<definite_integration_result, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_integratedefinitenumeric.b394f4572330"></a>
### Context.integrateDefiniteNumeric

`pub fn integrate_definite_numeric(&self, input_expression: &Expression, variable: &str, lower: &Expression, upper: &Expression, precision_bits: u32) -> Result<NumericDefiniteIntegrationResult, JsError>`

Returns `Result<NumericDefiniteIntegrationResult, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_integrateiterated.d5ecdfc91bda"></a>
### Context.integrateIterated

`pub fn integrate_iterated(&self, input_expression: &Expression, variables: Vec<String>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_inversefouriertransform.1256b676d4cd"></a>
### Context.inverseFourierTransform

`pub fn inverse_fourier_transform(&self, input_expression: &Expression, frequency_variable: &str, time_variable: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_inverselaplacetransform.12be5bd7a8d7"></a>
### Context.inverseLaplaceTransform

`pub fn inverse_laplace_transform(&self, input_expression: &Expression, frequency_variable: &str, time_variable: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_laplacetransform.eaa99d3405c1"></a>
### Context.laplaceTransform

`pub fn laplace_transform(&self, input_expression: &Expression, time_variable: &str, frequency_variable: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_poleorder.588f17fd3f20"></a>
### Context.poleOrder

`pub fn pole_order(&self, input_expression: &Expression, variable: &str, center: &Expression) -> Result<Option<i64>, JsError>`

Returns `Result<Option<i64>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_summationindefinite.1d9f974c7467"></a>
### Context.summationIndefinite

`pub fn summation_indefinite(&self, summand: &Expression, index: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.definiteintegrationresult_declinereason.2ab13fa31859"></a>
### DefiniteIntegrationResult.declineReason

`pub fn decline_reason(&self) -> Option<String>`

Returns `Option<String>`.

<a id="placement-placement.wasm.wasm_class.definiteintegrationresult_divergencedirection.23c571e1dfe7"></a>
### DefiniteIntegrationResult.divergenceDirection

`pub fn divergence_direction(&self) -> Option<String>`

Returns `Option<String>`.

<a id="placement-placement.wasm.wasm_class.definiteintegrationresult_interpretation.e916f910c54f"></a>
### DefiniteIntegrationResult.interpretation

`pub fn interpretation(&self) -> String`

Returns `String`.

<a id="placement-placement.wasm.wasm_class.definiteintegrationresult_value.a1ac38a1d17c"></a>
### DefiniteIntegrationResult.value

`pub fn value(&self) -> Option<Expression>`

Returns `Option<expression>`.

<a id="placement-placement.wasm.wasm_class.expression_continuousdomain.29a27663a8c8"></a>
### Expression.continuousDomain

`pub fn continuous_domain(&self, variable: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_derivative.5e5f3f1fdacd"></a>
### Expression.derivative

`pub fn derivative(&self, variable: &str, order: Option<usize>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_evaluatelimit.ad4f2188ca80"></a>
### Expression.evaluateLimit

`pub fn evaluate_limit(&self, variable: &str, point: &Expression, direction: Option<String>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_evaluatenumeric.b483cb974774"></a>
### Expression.evaluateNumeric

`pub fn evaluate_numeric(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_integratedefinite.4e404c54ad75"></a>
### Expression.integrateDefinite

`pub fn integrate_definite(&self, variable: &str, lower: &Expression, upper: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_integrateiterated.f095d7ba5219"></a>
### Expression.integrateIterated

`pub fn integrate_iterated(&self, variables: Vec<String>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_poleorder.b10295b45362"></a>
### Expression.poleOrder

`pub fn pole_order(&self, variable: &str, center: &Expression) -> Result<Option<i64>, JsError>`

Returns `Result<Option<i64>, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_summationindefinite.98722b7aa268"></a>
### Expression.summationIndefinite

`pub fn summation_indefinite(&self, index: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.undefinedfunction_derivative.19e919814456"></a>
### UndefinedFunction.derivative

`pub fn derivative(&self, orders: Vec<usize>, arguments: Vec<Expression>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_continuousdomain.d9adfbfd1afb"></a>
### module.continuousDomain

`fn continuous_domain(input_expression: &Expression, variable: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_derivative.6c2f52be0c02"></a>
### module.derivative

`fn derivative(input_expression: &Expression, variable: &str, order: Option<usize>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_evaluatelimit.0f1c024103e7"></a>
### module.evaluateLimit

`fn evaluate_limit(input_expression: &Expression, variable: &str, point: &Expression, direction: Option<String>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_evaluatenumeric.b3592a20461b"></a>
### module.evaluateNumeric

`fn evaluate_numeric(input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_evaluateongrid.68b32c74ae82"></a>
### module.evaluateOnGrid

`fn evaluate_on_grid(input_expression: &Expression, variable: &str, x_values: Vec<f64>) -> Result<Vec<f64>, JsError>`

Returns `Result<Vec<f64>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_evaluateongridpoints.dee0c2c92540"></a>
### module.evaluateOnGridPoints

`fn evaluate_on_grid_points(input_expression: &Expression, variables: Vec<String>, points: Vec<f64>) -> Result<Vec<f64>, JsError>`

Returns `Result<Vec<f64>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_fouriertransform.7a1b272e817d"></a>
### module.fourierTransform

`fn fourier_transform(input_expression: &Expression, time_variable: &str, frequency_variable: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_integratedefinite.580dccd9f9e3"></a>
### module.integrateDefinite

`fn integrate_definite(input_expression: &Expression, variable: &str, lower: &Expression, upper: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_integratedefinitedetailed.249aed840c82"></a>
### module.integrateDefiniteDetailed

`fn integrate_definite_detailed(input_expression: &Expression, variable: &str, lower: &Expression, upper: &Expression, interpretation: Option<String>, constraint: Option<Expression>) -> Result<DefiniteIntegrationResult, JsError>`

Returns `Result<definite_integration_result, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_integratedefinitenumeric.57c38757b75e"></a>
### module.integrateDefiniteNumeric

`fn integrate_definite_numeric(input_expression: &Expression, variable: &str, lower: &Expression, upper: &Expression, precision_bits: u32) -> Result<NumericDefiniteIntegrationResult, JsError>`

Returns `Result<NumericDefiniteIntegrationResult, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_integrateiterated.a2a1f9fb1ef7"></a>
### module.integrateIterated

`fn integrate_iterated(input_expression: &Expression, variables: Vec<String>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_inversefouriertransform.c756e25c95bb"></a>
### module.inverseFourierTransform

`fn inverse_fourier_transform(input_expression: &Expression, frequency_variable: &str, time_variable: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_inverselaplacetransform.b9494a36f07b"></a>
### module.inverseLaplaceTransform

`fn inverse_laplace_transform(input_expression: &Expression, frequency_variable: &str, time_variable: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_laplacetransform.e8b317b65c63"></a>
### module.laplaceTransform

`fn laplace_transform(input_expression: &Expression, time_variable: &str, frequency_variable: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_poleorder.13e4b7d7d589"></a>
### module.poleOrder

`fn pole_order(input_expression: &Expression, variable: &str, center: &Expression) -> Result<Option<i64>, JsError>`

Returns `Result<Option<i64>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_summationindefinite.45acee68c513"></a>
### module.summationIndefinite

`fn summation_indefinite(summand: &Expression, index: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

