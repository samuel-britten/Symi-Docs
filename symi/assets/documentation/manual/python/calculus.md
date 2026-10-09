# Calculus

Calculus follows a uniform construct-versus-evaluate model; the summary table
is in [Evaluation and constants](evaluation-and-constants.md). Every variable
parameter accepts a name or a same-context symbol expression.

### differentiate

<a id="placement-placement.python.python_class.context_differentiate.6e195b56ed15"></a>
`Context.differentiate(input_expression, variable)`

<a id="placement-placement.python.python_class.expression_differentiate.2973c32a3cc7"></a>
`Expression.differentiate(variable)`

<a id="placement-placement.python.python_module.module_differentiate.b10bec594052"></a>
`symi.differentiate(input_expression, variable)`


Symbolic derivative with respect to `variable`. The derivative is total: unknown
function calls produce derivative nodes.

### integrate

<a id="placement-placement.python.python_class.assumptionscope_integrate.493edf4a76f0"></a>
`AssumptionScope.integrate(input_expression, variable)`

<a id="placement-placement.python.python_class.context_integrate.93acac9d5819"></a>
`Context.integrate(input_expression, variable)`

<a id="placement-placement.python.python_class.expression_integrate.09e1fca46e0a"></a>
`Expression.integrate(variable)`

<a id="placement-placement.python.python_module.module_integrate.135ca8b1419e"></a>
`symi.integrate(input_expression, variable)`


Indefinite integration (no constant of integration). When every symbolic
strategy fails, the result is an *unevaluated* `integral` node, never a
guess. Real symbolic parameters can produce a `piecewise` antiderivative
whose conditions describe the supported parameter strata. A parameter value
outside every branch is undefined rather than a hidden declined branch.

### integrate_definite

<a id="placement-placement.python.python_class.assumptionscope_integrate_definite.a1301e99f793"></a>
`AssumptionScope.integrate_definite(input_expression, variable, lower_bound, upper_bound)`

<a id="placement-placement.python.python_class.context_integrate_definite.24cd89a9489d"></a>
`Context.integrate_definite(input_expression, variable, lower, upper)`

<a id="placement-placement.python.python_class.expression_integrate_definite.ac5c1e93f09c"></a>
`Expression.integrate_definite(variable, lower, upper)`

<a id="placement-placement.python.python_module.module_integrate_definite.7bfa8a1356f9"></a>
`symi.integrate_definite(input_expression, variable, lower, upper)`


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

<a id="placement-placement.python.python_class.context_integrate_definite_detailed.c7c3a5dbfe3a"></a>
`Context.integrate_definite_detailed(input_expression, variable, lower, upper, interpretation="ordinary", constraint=None)`

<a id="placement-placement.python.python_module.module_integrate_definite_detailed.66cf65c5d3a6"></a>
`symi.integrate_definite_detailed(input_expression, variable, lower, upper, interpretation="ordinary", constraint=None)`


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

<a id="placement-placement.python.python_class.definiteintegrationresult.6d8d92994a74"></a>
`class symi.DefiniteIntegrationResult`

`interpretation`, `verdict` (`evaluated`, `divergent` or `declined`), `value`
(present exactly when evaluated), `divergence_direction` (`positive_infinity`
or `negative_infinity`, present only when a single signed infinity was
established), and `decline_reason` (`unsupported_family`,
`incomplete_singularity_analysis`, `unknown_endpoint_behavior`,
`unknown_bound_order` or `unsupported_region`, present exactly when declined).

### integrate_definite_numeric

<a id="placement-placement.python.python_class.context_integrate_definite_numeric.d753d392701b"></a>
`Context.integrate_definite_numeric(input_expression, variable, lower, upper, precision_bits)`

<a id="placement-placement.python.python_module.module_integrate_definite_numeric.83640c560763"></a>
`symi.integrate_definite_numeric(input_expression, variable, lower, upper, precision_bits)`


Explicit finite-interval quadrature. This is separate from symbolic definite
integration: it returns no value when convergence is not established and never
substitutes an unevaluated symbolic integral. The requested precision is in bits.

### NumericDefiniteIntegrationResult

<a id="placement-placement.python.python_class.numericdefiniteintegrationresult.da707d04f6dd"></a>
`class symi.NumericDefiniteIntegrationResult`

`value` is an optional `(real, imaginary)` pair. When present,
`estimated_absolute_error` is the final difference between successive quadrature
rules; `precision_bits` and `node_count` identify the accepted rule.

### integrate_iterated

<a id="placement-placement.python.python_class.context_integrate_iterated.379471cff5dc"></a>
`Context.integrate_iterated(input_expression, variables)`

<a id="placement-placement.python.python_class.expression_integrate_iterated.5aad0907df72"></a>
`Expression.integrate_iterated(variables)`

<a id="placement-placement.python.python_module.module_integrate_iterated.d1e73fdf5d7f"></a>
`symi.integrate_iterated(input_expression, variables)`


Iterated indefinite integration, applying the single-variable pipeline once
per entry of `variables` in **left-to-right order (innermost binder first)**.
An empty list returns the input unchanged. If any stage fails to close, the
remaining binders wrap the intermediate as nested unevaluated `integral`
nodes — no partial evaluation through an unclosed inner integral.

### limit

<a id="placement-placement.python.python_class.context_limit.1f6f559907b4"></a>
`Context.limit(input_expression, variable, point, direction = "two_sided")`

<a id="placement-placement.python.python_class.expression_limit.327c6d9dfd86"></a>
`Expression.limit(variable, point, direction = "two_sided")`

<a id="placement-placement.python.python_module.module_limit.a84a0de5bb4d"></a>
`symi.limit(input_expression, variable, point, direction = "two_sided")`


`limit(expression, variable, point, direction="two_sided")` constructs a deferred limit.

### evaluate_limit

<a id="placement-placement.python.python_class.assumptionscope_evaluate_limit.48f291b296b5"></a>
`AssumptionScope.evaluate_limit(input_expression, variable, point, direction = "two_sided")`

<a id="placement-placement.python.python_class.context_evaluate_limit.e24b1d0b64f7"></a>
`Context.evaluate_limit(input_expression, variable, point, direction = "two_sided")`

<a id="placement-placement.python.python_class.expression_evaluate_limit.5925b8ab1ea7"></a>
`Expression.evaluate_limit(variable, point, direction = "two_sided")`

<a id="placement-placement.python.python_module.module_evaluate_limit.9cd17950469f"></a>
`symi.evaluate_limit(input_expression, variable, point, direction = "two_sided")`


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

<a id="placement-placement.python.python_class.assumptionscope_singularities.0a11eb0cae36"></a>
`AssumptionScope.singularities(input_expression, variable)`

<a id="placement-placement.python.python_class.context_singularities.69a45d708ca7"></a>
`Context.singularities(input_expression, variable)`

<a id="placement-placement.python.python_class.expression_singularities.088b99d67385"></a>
`Expression.singularities(variable)`

<a id="placement-placement.python.python_module.module_singularities.4395acf809c5"></a>
`symi.singularities(input_expression, variable)`


The singular points of the expression in the complex plane, as a set
expression (finite set, union, image set for periodic families, …). Rational
denominators are solved over the complex numbers even when the variable has
real assumptions. Multivalued functions contribute their finite branch
points; a conventional principal-branch cut is not returned as though every
point on it were singular.

### continuous_domain

<a id="placement-placement.python.python_class.assumptionscope_continuous_domain.ec2ba8638f35"></a>
`AssumptionScope.continuous_domain(input_expression, variable)`

<a id="placement-placement.python.python_class.context_continuous_domain.ea8bd346dd36"></a>
`Context.continuous_domain(input_expression, variable)`

<a id="placement-placement.python.python_class.expression_continuous_domain.54925718dbca"></a>
`Expression.continuous_domain(variable)`

<a id="placement-placement.python.python_module.module_continuous_domain.c1003e4cd9b5"></a>
`symi.continuous_domain(input_expression, variable)`


The subset of the real line on which the expression is continuous in
`variable`, as a set expression. Compound rational square-root radicands are
lowered to an exact univariate semialgebraic condition when supported, so,
for example, `sqrt(x + 1/x - 2)` has continuous real domain `(0, infinity)`.

### summation_indefinite

<a id="placement-placement.python.python_class.context_summation_indefinite.decc1b81d5c2"></a>
`Context.summation_indefinite(summand, index)`

<a id="placement-placement.python.python_class.expression_summation_indefinite.36082f1ae900"></a>
`Expression.summation_indefinite(index)`

<a id="placement-placement.python.python_module.module_summation_indefinite.e10335856b70"></a>
`symi.summation_indefinite(summand, index)`


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

<a id="placement-placement.python.python_class.context_evaluate_numeric.d18ac03b53cc"></a>
`Context.evaluate_numeric(input_expression)`

<a id="placement-placement.python.python_class.expression_evaluate_numeric.21c9e88d0379"></a>
`Expression.evaluate_numeric()`

<a id="placement-placement.python.python_module.module_evaluate_numeric.3eb61a875464"></a>
`symi.evaluate_numeric(input_expression)`


Numerically evaluate to a float and re-encode as an exact rational literal;
returns the input unchanged when the expression has no numeric value.
For direct float output use `expression.evaluate_to_float`.

### evaluate_on_grid

<a id="placement-placement.python.python_class.context_evaluate_on_grid.99cfe3f8ca50"></a>
`Context.evaluate_on_grid(input_expression, variable, x_values)`

<a id="placement-placement.python.python_module.module_evaluate_on_grid.4864558e3681"></a>
`symi.evaluate_on_grid(input_expression, variable, x_values)`


Evaluate at each grid point, substituting `variable`. Positions where
evaluation fails (pole, complex value, unbound symbol) hold NaN. Intended for
plotting.

### evaluate_on_grid_points

<a id="placement-placement.python.python_class.context_evaluate_on_grid_points.ca76aea7253e"></a>
`Context.evaluate_on_grid_points(input_expression, variables, points)`

<a id="placement-placement.python.python_module.module_evaluate_on_grid_points.acd59204b0a8"></a>
`symi.evaluate_on_grid_points(input_expression, variables, points)`


Multi-variable companion to `evaluate_on_grid`: evaluate at each point of a
flat row-major coordinate array (one coordinate per variable, so the points
length must be a multiple of the variable count), returning one float per
point. Positions where evaluation fails hold NaN. Raises when `variables` is
empty or the lengths disagree. Intended for sampling surfaces and implicit
curves.

### execute

<a id="placement-placement.python.python_class.context_execute.462735a27ec8"></a>
`Context.execute(input_expression)`

<a id="placement-placement.python.python_class.expression_execute.90c4ad741f6a"></a>
`Expression.execute()`

<a id="placement-placement.python.python_class.matrix_execute.5773d9583bc1"></a>
`Matrix.execute()`

<a id="placement-placement.python.python_module.module_execute.c73e94e486fa"></a>
`symi.execute(input_expression)`


Re-dispatch every unevaluated node (integral, derivative, summation,
transform, ODE/recurrence placeholder) in the expression; useful after
substitution has changed the inputs.

## Example

Differentiate, integrate, and take a one-sided limit of the same expression.

```python
import symi

x = symi.symbol("x")
target = symi.sin(x) / x

print(symi.differentiate(target, "x"))
print(symi.integrate(symi.sin(x), "x"))
print(symi.evaluate_limit(target, "x", 0))
print(symi.integrate_definite(symi.sin(x), "x", 0, symi.pi))
```


## Additional API

<a id="placement-placement.python.python_class.context_derivative.633b339a3392"></a>
### Context.derivative

`Context.derivative(input_expression, variable, order = 1)`

Returns `expression`.

<a id="placement-placement.python.python_class.definiteintegrationresult_decline_reason.82b173fec92c"></a>
### DefiniteIntegrationResult.decline_reason

`DefiniteIntegrationResult.decline_reason`

Returns `str`.

<a id="placement-placement.python.python_class.definiteintegrationresult_divergence_direction.8fe2f7cb6aaa"></a>
### DefiniteIntegrationResult.divergence_direction

`DefiniteIntegrationResult.divergence_direction`

Returns `str`.

<a id="placement-placement.python.python_class.definiteintegrationresult_interpretation.b68b8d35b6f5"></a>
### DefiniteIntegrationResult.interpretation

`DefiniteIntegrationResult.interpretation`

Returns `str`.

<a id="placement-placement.python.python_class.definiteintegrationresult_value.c9323ba3f053"></a>
### DefiniteIntegrationResult.value

`DefiniteIntegrationResult.value`

Returns `expression`.

<a id="placement-placement.python.python_class.expression_derivative.951691ecb4fa"></a>
### Expression.derivative

`Expression.derivative(variable, order = 1)`

Returns `expression`.

<a id="placement-placement.python.python_class.undefinedfunction_derivative.580eee1c1ebe"></a>
### UndefinedFunction.derivative

`UndefinedFunction.derivative(orders, arguments)`

Returns `expression`.

<a id="placement-placement.python.python_module.module_derivative.08baabd8e4c8"></a>
### module.derivative

`symi.derivative(input_expression, variable, order = 1)`

Returns `expression`.

