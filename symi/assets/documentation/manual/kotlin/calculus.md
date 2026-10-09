# Calculus

Calculus follows a uniform construct-versus-evaluate model; the summary table
is in [Evaluation and constants](evaluation-and-constants.md). Every variable
parameter accepts a name or a same-context symbol expression.

### differentiate

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_differentiate.a3a3dc48ebb3"></a>
`UniffiExpression.differentiate(variable: kotlin.String): UniffiExpression`

<a id="placement-placement.kotlin.kotlin_object.uniffisession_differentiate.4163170fe501"></a>
`UniffiSession.differentiate(target: UniffiExpression, variable: kotlin.String): UniffiExpression`


Symbolic derivative with respect to `variable`. The derivative is total: unknown
function calls produce derivative nodes.

### integrate

<a id="placement-placement.kotlin.kotlin_object.uniffiassumptionscope_integrate.b7023011912f"></a>
`UniffiAssumptionScope.integrate(target: UniffiExpression, variable: kotlin.String): UniffiExpression`

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_integrate.a24e2ba753a1"></a>
`UniffiExpression.integrate(variable: kotlin.String): UniffiExpression`

<a id="placement-placement.kotlin.kotlin_object.uniffisession_integrate.69552df7dd0f"></a>
`UniffiSession.integrate(target: UniffiExpression, variable: kotlin.String): UniffiExpression`


Indefinite integration (no constant of integration). When every symbolic
strategy fails, the result is an *unevaluated* `integral` node, never a
guess. Real symbolic parameters can produce a `piecewise` antiderivative
whose conditions describe the supported parameter strata. A parameter value
outside every branch is undefined rather than a hidden declined branch.

### integrate_definite

<a id="placement-placement.kotlin.kotlin_object.uniffiassumptionscope_integratedefinite.6ff304696b21"></a>
`UniffiAssumptionScope.integrateDefinite(target: UniffiExpression, variable: kotlin.String, lowerBound: UniffiExpression, upperBound: UniffiExpression): UniffiExpression`

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_integratedefinite.439ea06365b9"></a>
`UniffiExpression.integrateDefinite(variable: kotlin.String, lower: UniffiExpression, upper: UniffiExpression): UniffiExpression`

<a id="placement-placement.kotlin.kotlin_object.uniffisession_integratedefinite.9ad17c7b4af7"></a>
`UniffiSession.integrateDefinite(inputExpression: UniffiExpression, variable: kotlin.String, lower: UniffiExpression, upper: UniffiExpression): UniffiExpression`


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

<a id="placement-placement.kotlin.kotlin_object.uniffisession_integratedefinitedetailed.7bd8dd3ea9d1"></a>
`UniffiSession.integrateDefiniteDetailed(target: UniffiExpression, variable: kotlin.String, lowerBound: UniffiExpression, upperBound: UniffiExpression, interpretation: UniffiDefiniteIntegrationInterpretation, constraint: UniffiExpression?): UniffiDefiniteIntegrationResult`


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

*Not exposed by the Kotlin bindings. Available as [`DefiniteIntegrationResult`](/symi/python/calculus#DefiniteIntegrationResult) in Python, [`api::DefiniteIntegrationResult`](/symi/rust/calculus#DefiniteIntegrationResult) in Rust.*

`interpretation`, `verdict` (`evaluated`, `divergent` or `declined`), `value`
(present exactly when evaluated), `divergence_direction` (`positive_infinity`
or `negative_infinity`, present only when a single signed infinity was
established), and `decline_reason` (`unsupported_family`,
`incomplete_singularity_analysis`, `unknown_endpoint_behavior`,
`unknown_bound_order` or `unsupported_region`, present exactly when declined).

### integrate_definite_numeric

<a id="placement-placement.kotlin.kotlin_object.uniffisession_integratedefinitenumeric.5847bf838fcb"></a>
`UniffiSession.integrateDefiniteNumeric(inputExpression: UniffiExpression, variable: kotlin.String, lower: UniffiExpression, upper: UniffiExpression, precisionBits: kotlin.ULong): UniffiNumericDefiniteIntegrationResult`


Explicit finite-interval quadrature. This is separate from symbolic definite
integration: it returns no value when convergence is not established and never
substitutes an unevaluated symbolic integral. The requested precision is in bits.

### NumericDefiniteIntegrationResult

*Not exposed by the Kotlin bindings. Available as [`NumericDefiniteIntegrationResult`](/symi/python/calculus#NumericDefiniteIntegrationResult) in Python, [`api::NumericDefiniteIntegrationResult`](/symi/rust/calculus#NumericDefiniteIntegrationResult) in Rust.*

`value` is an optional `(real, imaginary)` pair. When present,
`estimated_absolute_error` is the final difference between successive quadrature
rules; `precision_bits` and `node_count` identify the accepted rule.

### integrate_iterated

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_integrateiterated.567bd8dabd92"></a>
`UniffiExpression.integrateIterated(variables: List<kotlin.String>): UniffiExpression`

<a id="placement-placement.kotlin.kotlin_object.uniffisession_integrateiterated.70c767c11b0b"></a>
`UniffiSession.integrateIterated(inputExpression: UniffiExpression, variables: List<kotlin.String>): UniffiExpression`


Iterated indefinite integration, applying the single-variable pipeline once
per entry of `variables` in **left-to-right order (innermost binder first)**.
An empty list returns the input unchanged. If any stage fails to close, the
remaining binders wrap the intermediate as nested unevaluated `integral`
nodes — no partial evaluation through an unclosed inner integral.

### limit

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_limit.a7e2725115bb"></a>
`UniffiExpression.limit(variable: kotlin.String, point: UniffiExpression, direction: UniffiLimitDirection): UniffiExpression`

<a id="placement-placement.kotlin.kotlin_object.uniffisession_limit.243c11b2abe8"></a>
`UniffiSession.limit(target: UniffiExpression, variable: kotlin.String, point: UniffiExpression, direction: UniffiLimitDirection): UniffiExpression`


`limit(expression, variable, point, direction="two_sided")` constructs a deferred limit.

### evaluate_limit

<a id="placement-placement.kotlin.kotlin_object.uniffiassumptionscope_evaluatelimit.6b6c342e3856"></a>
`UniffiAssumptionScope.evaluateLimit(target: UniffiExpression, variable: kotlin.String, point: UniffiExpression, direction: UniffiLimitDirection): UniffiExpression`

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_evaluatelimit.e2a022a26bea"></a>
`UniffiExpression.evaluateLimit(variable: kotlin.String, point: UniffiExpression, direction: UniffiLimitDirection): UniffiExpression`

<a id="placement-placement.kotlin.kotlin_object.uniffisession_evaluatelimit.e3e85e7882bc"></a>
`UniffiSession.evaluateLimit(target: UniffiExpression, variable: kotlin.String, point: UniffiExpression, direction: UniffiLimitDirection): UniffiExpression`


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

<a id="placement-placement.kotlin.kotlin_object.uniffiassumptionscope_singularities.462c53d0d91e"></a>
`UniffiAssumptionScope.singularities(target: UniffiExpression, variable: kotlin.String): UniffiExpression`

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_singularities.4cc6adbdf928"></a>
`UniffiExpression.singularities(variable: kotlin.String): UniffiExpression`

<a id="placement-placement.kotlin.kotlin_object.uniffisession_singularities.bb2128925af6"></a>
`UniffiSession.singularities(target: UniffiExpression, variable: kotlin.String): UniffiExpression`


The singular points of the expression in the complex plane, as a set
expression (finite set, union, image set for periodic families, …). Rational
denominators are solved over the complex numbers even when the variable has
real assumptions. Multivalued functions contribute their finite branch
points; a conventional principal-branch cut is not returned as though every
point on it were singular.

### continuous_domain

<a id="placement-placement.kotlin.kotlin_object.uniffiassumptionscope_continuousdomain.adb23b58015a"></a>
`UniffiAssumptionScope.continuousDomain(target: UniffiExpression, variable: kotlin.String): UniffiExpression`

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_continuousdomain.6f7439e44ba0"></a>
`UniffiExpression.continuousDomain(variable: kotlin.String): UniffiExpression`

<a id="placement-placement.kotlin.kotlin_object.uniffisession_continuousdomain.c8b5b4c7a7af"></a>
`UniffiSession.continuousDomain(target: UniffiExpression, variable: kotlin.String): UniffiExpression`


The subset of the real line on which the expression is continuous in
`variable`, as a set expression. Compound rational square-root radicands are
lowered to an exact univariate semialgebraic condition when supported, so,
for example, `sqrt(x + 1/x - 2)` has continuous real domain `(0, infinity)`.

### summation_indefinite

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_summationindefinite.8a902513c551"></a>
`UniffiExpression.summationIndefinite(index: kotlin.String): UniffiExpression`

<a id="placement-placement.kotlin.kotlin_object.uniffisession_summationindefinite.b98122313c4f"></a>
`UniffiSession.summationIndefinite(summand: UniffiExpression, index: kotlin.String): UniffiExpression`


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

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_evaluatenumeric.1c4a2fc2ec10"></a>
`UniffiExpression.evaluateNumeric(): UniffiExpression`

<a id="placement-placement.kotlin.kotlin_object.uniffisession_evaluatenumeric.3c3fee56026c"></a>
`UniffiSession.evaluateNumeric(inputExpression: UniffiExpression): UniffiExpression`


Numerically evaluate to a float and re-encode as an exact rational literal;
returns the input unchanged when the expression has no numeric value.
For direct float output use `expression.evaluate_to_float`.

### evaluate_on_grid

<a id="placement-placement.kotlin.kotlin_object.uniffisession_evaluateongrid.7ca12540a366"></a>
`UniffiSession.evaluateOnGrid(inputExpression: UniffiExpression, variable: kotlin.String, grid: List<kotlin.Double>): List<kotlin.Double>`


Evaluate at each grid point, substituting `variable`. Positions where
evaluation fails (pole, complex value, unbound symbol) hold NaN. Intended for
plotting.

### evaluate_on_grid_points

<a id="placement-placement.kotlin.kotlin_object.uniffisession_evaluateongridpoints.a02ed099a181"></a>
`UniffiSession.evaluateOnGridPoints(inputExpression: UniffiExpression, variables: List<kotlin.String>, points: List<kotlin.Double>): List<kotlin.Double>`


Multi-variable companion to `evaluate_on_grid`: evaluate at each point of a
flat row-major coordinate array (one coordinate per variable, so the points
length must be a multiple of the variable count), returning one float per
point. Positions where evaluation fails hold NaN. Raises when `variables` is
empty or the lengths disagree. Intended for sampling surfaces and implicit
curves.

### execute

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_execute.24b5e1861d9a"></a>
`UniffiExpression.execute(): UniffiExpression`

<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_execute.c928aef513f8"></a>
`UniffiMatrix.execute(): UniffiMatrix`

<a id="placement-placement.kotlin.kotlin_object.uniffisession_execute.ea743bf51e81"></a>
`UniffiSession.execute(target: UniffiExpression): UniffiExpression`


Re-dispatch every unevaluated node (integral, derivative, summation,
transform, ODE/recurrence placeholder) in the expression; useful after
substitution has changed the inputs.

## Example


## Additional API

<a id="placement-placement.kotlin.kotlin_object.uniffidefiniteintegrationresult_declinereason.f8d4f9b20509"></a>
### UniffiDefiniteIntegrationResult.declineReason

`UniffiDefiniteIntegrationResult.declineReason(): UniffiDefiniteIntegrationDeclineReason?`

Returns `UniffiDefiniteIntegrationDeclineReason?`.

<a id="placement-placement.kotlin.kotlin_object.uniffidefiniteintegrationresult_divergencedirection.90ae735944bd"></a>
### UniffiDefiniteIntegrationResult.divergenceDirection

`UniffiDefiniteIntegrationResult.divergenceDirection(): UniffiDefiniteIntegrationDivergenceDirection?`

Returns `UniffiDefiniteIntegrationDivergenceDirection?`.

<a id="placement-placement.kotlin.kotlin_object.uniffidefiniteintegrationresult_interpretation.f9f52508874d"></a>
### UniffiDefiniteIntegrationResult.interpretation

`UniffiDefiniteIntegrationResult.interpretation(): UniffiDefiniteIntegrationInterpretation`

Returns `UniffiDefiniteIntegrationInterpretation`.

<a id="placement-placement.kotlin.kotlin_object.uniffidefiniteintegrationresult_value.28d800f5f090"></a>
### UniffiDefiniteIntegrationResult.value

`UniffiDefiniteIntegrationResult.value(): UniffiExpression?`

Returns `UniffiExpression?`.

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_derivative.daaa1d9a5854"></a>
### UniffiExpression.derivative

`UniffiExpression.derivative(variable: kotlin.String, order: kotlin.ULong): UniffiExpression`

Returns `UniffiExpression`.

<a id="placement-placement.kotlin.kotlin_object.uniffisession_derivative.0bd3a90fb4d5"></a>
### UniffiSession.derivative

`UniffiSession.derivative(target: UniffiExpression, variable: kotlin.String, order: kotlin.ULong): UniffiExpression`

Returns `UniffiExpression`.

<a id="placement-placement.kotlin.kotlin_object.uniffiundefinedfunction_derivative.a0cbaac666e1"></a>
### UniffiUndefinedFunction.derivative

`UniffiUndefinedFunction.derivative(orders: List<kotlin.ULong>, arguments: List<UniffiExpression>): UniffiExpression`

Returns `UniffiExpression`.

