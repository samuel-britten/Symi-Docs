# Calculus

Calculus follows a uniform construct-versus-evaluate model; the summary table
is in [Evaluation and constants](evaluation-and-constants.md). Every variable
parameter accepts a name or a same-context symbol expression.

### differentiate

<a id="entry-presentation_wasm_calculus_capability_calculus_differentiate_api_session_differentiate"></a>
<a id="placement-placement.wasm.wasm_module.module_differentiate.4f7ff0e7c9f8"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
differentiate(
    input_expression: Expression,
    variable: string,
): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_differentiate.02b9812493bf"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.differentiate</code></p>

```typescript signature
differentiate(value: ExpressionLike, variable: VariableLike): Expression
```

<a id="placement-placement.wasm.wasm_class.context_differentiate.df81a03aa1ac"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.differentiate</code></p>

```typescript signature
differentiate(
    input_expression: Expression,
    variable: string,
): Expression
```

<a id="placement-placement.wasm.javascript_facade.symifacade_differentiate.e4a123823c8a"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.differentiate</code></p>

```typescript signature
differentiate(value: ExpressionLike, variable: VariableLike): Expression
```

</details>

<a id="entry-presentation_wasm_calculus_capability_calculus_differentiate_api_expression_differentiate"></a>
<a id="placement-placement.wasm.javascript_facade.expression_differentiate.85cf43e1ce4c"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
differentiate(variable: VariableLike): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_differentiate.aadc0cf2928a"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.differentiate</code></p>

```typescript signature
differentiate(variable: string): Expression
```

</details>


Symbolic derivative with respect to `variable`. The derivative is total: unknown
function calls produce derivative nodes.

### integrate

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

<a id="entry-presentation_wasm_calculus_capability_calculus_limit_api_session_limit"></a>
<a id="placement-placement.wasm.wasm_module.module_limit.09bfaf02cffb"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
limit(
    input_expression: Expression,
    variable: string,
    point: Expression,
    direction?: string | null,
): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_limit.6bf8a3ae36bb"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.limit</code></p>

```typescript signature
limit(
    input_expression: Expression,
    variable: string,
    point: Expression,
    direction?: string | null,
): Expression
```

</details>

<a id="entry-presentation_wasm_calculus_capability_calculus_limit_api_expression_limit"></a>
<a id="placement-placement.wasm.wasm_class.expression_limit.ef276e5bcd5f"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
limit(
    variable: string,
    point: Expression,
    direction?: string | null,
): Expression
```


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

<a id="entry-presentation_wasm_calculus_capability_calculus_singularities_api_assumptionscope_singularities"></a>
<a id="placement-placement.wasm.javascript_facade.assumptionscope_singularities.227597e63d8e"></a>
<p class="symi-entry-owner">AssumptionScope method</p>

```typescript signature
singularities(value: ExpressionLike, variable: VariableLike): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.assumptionscope_singularities.f24ea8f03f44"></a>
<p class="symi-entry-owner">AssumptionScope method: <code>AssumptionScope.singularities</code></p>

```typescript signature
singularities(
    input_expression: Expression,
    variable: string,
): Expression
```

</details>

<a id="entry-presentation_wasm_calculus_capability_calculus_singularities_api_session_singularities"></a>
<a id="placement-placement.wasm.wasm_module.module_singularities.5894dcc61a6b"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
singularities(
    input_expression: Expression,
    variable: string,
): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_singularities.6066a1b62d30"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.singularities</code></p>

```typescript signature
singularities(
    input_expression: Expression,
    variable: string,
): Expression
```

</details>

<a id="entry-presentation_wasm_calculus_capability_calculus_singularities_api_expression_singularities"></a>
<a id="placement-placement.wasm.wasm_class.expression_singularities.3f1ebf570aaf"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
singularities(variable: string): Expression
```


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

### continuousDomain

<a id="entry-presentation_wasm_calculus_capability_calculus_continuous_domain_api_assumptionscope_continuous_domain"></a>
<a id="placement-placement.wasm.javascript_facade.assumptionscope_continuousdomain.6d9849f22085"></a>
<p class="symi-entry-owner">AssumptionScope method</p>

```typescript signature
continuousDomain(value: ExpressionLike, variable: VariableLike): Expression
```

Return the real continuous domain using the scope's immutable assumptions.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.assumptionscope_continuousdomain.24bf52c8474b"></a>
<p class="symi-entry-owner">AssumptionScope method: <code>AssumptionScope.continuousDomain</code></p>

```typescript signature
continuousDomain(
    input_expression: Expression,
    variable: string,
): Expression
```

</details>

### continuousDomain

<a id="entry-presentation_wasm_calculus_capability_calculus_continuous_domain_api_session_continuous_domain"></a>
<a id="placement-placement.wasm.wasm_module.module_continuousdomain.d9adfbfd1afb"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
continuousDomain(
    input_expression: Expression,
    variable: string,
): Expression
```

The subset of the real line on which the expression is continuous in `variable`, as a set expression. Compound rational square-root radicands are lowered to an exact univariate semialgebraic condition when supported, so, for example, `sqrt(x + 1/x - 2)` has continuous real domain `(0, infinity)`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_continuousdomain.b3456b9e12a2"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.continuousDomain</code></p>

```typescript signature
continuousDomain(
    input_expression: Expression,
    variable: string,
): Expression
```

</details>

### continuousDomain

<a id="entry-presentation_wasm_calculus_capability_calculus_continuous_domain_api_expression_continuous_domain"></a>
<a id="placement-placement.wasm.wasm_class.expression_continuousdomain.29a27663a8c8"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
continuousDomain(variable: string): Expression
```

The subset of the real line on which the expression is continuous in `variable`, as a set expression. Compound rational square-root radicands are lowered to an exact univariate semialgebraic condition when supported, so, for example, `sqrt(x + 1/x - 2)` has continuous real domain `(0, infinity)`.

### declineReason

<a id="entry-presentation_wasm_calculus_capability_calculus_decline_reason_api_results_definiteintegrationresult_decline_reason"></a>
<a id="placement-placement.wasm.wasm_class.definiteintegrationresult_declinereason.2ab13fa31859"></a>
<p class="symi-entry-owner">DefiniteIntegrationResult property</p>

```typescript signature
readonly declineReason: string | undefined
```

The reason, present exactly when the verdict is `declined`.

### derivative

<a id="entry-presentation_wasm_calculus_capability_calculus_derivative_api_session_derivative"></a>
<a id="placement-placement.wasm.wasm_module.module_derivative.6c2f52be0c02"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
derivative(
    input_expression: Expression,
    variable: string,
    order?: number | null,
): Expression
```

Constructs a deferred derivative. The variable may be a name or a same-context symbol expression. Use `execute` to evaluate it.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_derivative.50bdfc4c863b"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.derivative</code></p>

```typescript signature
derivative(
    input_expression: Expression,
    variable: string,
    order?: number | null,
): Expression
```

</details>

### derivative

<a id="entry-presentation_wasm_calculus_capability_calculus_derivative_api_expression_derivative"></a>
<a id="placement-placement.wasm.javascript_facade.expression_derivative.71488970b451"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
derivative(variable: VariableLike, order?: number): Expression
```

Constructs a deferred derivative. The variable may be a name or a same-context symbol expression. Use `execute` to evaluate it.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_derivative.5e5f3f1fdacd"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.derivative</code></p>

```typescript signature
derivative(variable: string, order?: number | null): Expression
```

</details>

### derivative

<a id="entry-presentation_wasm_calculus_capability_calculus_derivative_api_undefinedfunction_derivative"></a>
<a id="placement-placement.wasm.wasm_class.undefinedfunction_derivative.19e919814456"></a>
<p class="symi-entry-owner">UndefinedFunction method</p>

```typescript signature
derivative(orders: Uint32Array, arguments: Expression[]): Expression
```

Constructs a deferred derivative. The variable may be a name or a same-context symbol expression. Use `execute` to evaluate it.

### divergenceDirection

<a id="entry-presentation_wasm_calculus_capability_calculus_divergence_direction_api_results_definiteintegrationresult_divergence_direction"></a>
<a id="placement-placement.wasm.wasm_class.definiteintegrationresult_divergencedirection.23c571e1dfe7"></a>
<p class="symi-entry-owner">DefiniteIntegrationResult property</p>

```typescript signature
readonly divergenceDirection: string | undefined
```

The signed infinity of a divergent request, when a single direction was established.

### evaluateLimit

<a id="entry-presentation_wasm_calculus_capability_calculus_evaluate_limit_api_assumptionscope_evaluate_limit"></a>
<a id="placement-placement.wasm.wasm_class.assumptionscope_evaluatelimit.8126d7e3bcbd"></a>
<p class="symi-entry-owner">AssumptionScope method</p>

```typescript signature
evaluateLimit(
    input_expression: Expression,
    variable: string,
    point: Expression,
    direction?: string | null,
): Expression
```

Evaluate a limit using the scope's immutable assumptions.

### evaluateLimit

<a id="entry-presentation_wasm_calculus_capability_calculus_evaluate_limit_api_session_evaluate_limit"></a>
<a id="placement-placement.wasm.wasm_module.module_evaluatelimit.0f1c024103e7"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
evaluateLimit(
    input_expression: Expression,
    variable: string,
    point: Expression,
    direction?: string | null,
): Expression
```

`evaluate_limit(Expression, variable, point, direction="two_sided")` runs the eager limit engine. It returns an unevaluated limit when the engine cannot close the result.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_evaluatelimit.198af56c4c62"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.evaluateLimit</code></p>

```typescript signature
evaluateLimit(
    input_expression: Expression,
    variable: string,
    point: Expression,
    direction?: string | null,
): Expression
```

</details>

### evaluateLimit

<a id="entry-presentation_wasm_calculus_capability_calculus_evaluate_limit_api_expression_evaluate_limit"></a>
<a id="placement-placement.wasm.wasm_class.expression_evaluatelimit.ad4f2188ca80"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
evaluateLimit(
    variable: string,
    point: Expression,
    direction?: string | null,
): Expression
```

`evaluate_limit(Expression, variable, point, direction="two_sided")` runs the eager limit engine. It returns an unevaluated limit when the engine cannot close the result.

### evaluateNumeric

<a id="entry-presentation_wasm_calculus_capability_calculus_evaluate_numeric_api_analysis_session_evaluate_numeric"></a>
<a id="placement-placement.wasm.wasm_module.module_evaluatenumeric.b3592a20461b"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
evaluateNumeric(input_expression: Expression): Expression
```

Numerically evaluate to a float and re-encode as an exact rational literal; returns the input unchanged when the expression has no numeric value. For direct float output use `expression.evaluate_to_float`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_evaluatenumeric.cf32bb7a03b5"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.evaluateNumeric</code></p>

```typescript signature
evaluateNumeric(input_expression: Expression): Expression
```

</details>

### evaluateNumeric

<a id="entry-presentation_wasm_calculus_capability_calculus_evaluate_numeric_api_expression_operations_expression_evaluate_numeric"></a>
<a id="placement-placement.wasm.wasm_class.expression_evaluatenumeric.b483cb974774"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
evaluateNumeric(): Expression
```

Numerically evaluate to a float and re-encode as an exact rational literal; returns the input unchanged when the expression has no numeric value. For direct float output use `expression.evaluate_to_float`.

### evaluateOnGrid

<a id="entry-presentation_wasm_calculus_capability_calculus_evaluate_on_grid_api_analysis_session_evaluate_on_grid"></a>
<a id="placement-placement.wasm.wasm_module.module_evaluateongrid.68b32c74ae82"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
evaluateOnGrid(
    input_expression: Expression,
    variable: string,
    x_values: Float64Array,
): Float64Array
```

Evaluate at each grid point, substituting `variable`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_evaluateongrid.58241f8651c5"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.evaluateOnGrid</code></p>

```typescript signature
evaluateOnGrid(
    input_expression: Expression,
    variable: string,
    x_values: Float64Array,
): Float64Array
```

</details>

### evaluateOnGridPoints

<a id="entry-presentation_wasm_calculus_capability_calculus_evaluate_on_grid_points_api_analysis_session_evaluate_on_grid_points"></a>
<a id="placement-placement.wasm.wasm_module.module_evaluateongridpoints.dee0c2c92540"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
evaluateOnGridPoints(
    input_expression: Expression,
    variables: string[],
    points: Float64Array,
): Float64Array
```

Multi-variable companion to `evaluate_on_grid`: evaluate at each point of a flat row-major coordinate array (one coordinate per variable, so the points length must be a multiple of the variable count), returning one float per point. Positions where evaluation fails hold NaN. Raises when `variables` is empty or the lengths disagree. Intended for sampling surfaces and implicit curves.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_evaluateongridpoints.883efda52e22"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.evaluateOnGridPoints</code></p>

```typescript signature
evaluateOnGridPoints(
    input_expression: Expression,
    variables: string[],
    points: Float64Array,
): Float64Array
```

</details>

### execute

<a id="entry-presentation_wasm_calculus_capability_calculus_execute_api_session_execute"></a>
<a id="placement-placement.wasm.wasm_module.module_execute.046976fb1643"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
execute(input_expression: Expression): Expression
```

Re-dispatch every unevaluated node (integral, derivative, summation, transform, ODE/recurrence placeholder) in the expression; useful after substitution has changed the inputs.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_execute.f750d4ad1a52"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.execute</code></p>

```typescript signature
execute(value: ExpressionLike): Expression
```

<a id="placement-placement.wasm.wasm_class.context_execute.8f16d95e4225"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.execute</code></p>

```typescript signature
execute(input_expression: Expression): Expression
```

<a id="placement-placement.wasm.javascript_facade.symifacade_execute.899a0953de4b"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.execute</code></p>

```typescript signature
execute(value: ExpressionLike): Expression
```

</details>

### execute

<a id="entry-presentation_wasm_calculus_capability_calculus_execute_api_expression_execute"></a>
<a id="placement-placement.wasm.javascript_facade.expression_execute.8b9ac9285061"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
execute(): Expression
```

Re-dispatch every unevaluated node (integral, derivative, summation, transform, ODE/recurrence placeholder) in the expression; useful after substitution has changed the inputs.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_execute.863a3e670c60"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.execute</code></p>

```typescript signature
execute(): Expression
```

</details>

### execute

<a id="entry-presentation_wasm_calculus_capability_calculus_execute_api_matrix_execute"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_execute.28422f05de37"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
execute(): Matrix
```

Re-dispatch every unevaluated node (integral, derivative, summation, transform, ODE/recurrence placeholder) in the expression; useful after substitution has changed the inputs.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.matrix_execute.cd3080e5f4bd"></a>
<p class="symi-entry-owner">Matrix method: <code>Matrix.execute</code></p>

```typescript signature
execute(): Matrix
```

</details>

### fourierTransform

<a id="entry-presentation_wasm_calculus_capability_calculus_fourier_transform_api_assumptionscope_fourier_transform"></a>
<a id="placement-placement.wasm.wasm_class.assumptionscope_fouriertransform.5a22c0081730"></a>
<p class="symi-entry-owner">AssumptionScope method</p>

```typescript signature
fourierTransform(
    input_expression: Expression,
    time_variable: string,
    frequency_variable: string,
): Expression
```

Compute a forward Fourier transform using the scope's immutable assumptions.

### fourierTransform

<a id="entry-presentation_wasm_calculus_capability_calculus_fourier_transform_api_session_fourier_transform"></a>
<a id="placement-placement.wasm.wasm_module.module_fouriertransform.7a1b272e817d"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
fourierTransform(
    input_expression: Expression,
    time_variable: string,
    frequency_variable: string,
): Expression
```

Forward Fourier transform in the angular-frequency convention \(F(\omega) = \int f(t)e^{-i\omega t}\,dt\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_fouriertransform.6e6cbfb61d2f"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.fourierTransform</code></p>

```typescript signature
fourierTransform(
    input_expression: Expression,
    time_variable: string,
    frequency_variable: string,
): Expression
```

</details>

### integrate

<a id="entry-presentation_wasm_calculus_capability_calculus_integrate_api_assumptionscope_integrate"></a>
<a id="placement-placement.wasm.javascript_facade.assumptionscope_integrate.2a66e4d0ee6f"></a>
<p class="symi-entry-owner">AssumptionScope method</p>

```typescript signature
integrate(value: ExpressionLike, variable: VariableLike): Expression
```

Integrate an expression using the scope's immutable assumptions.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.assumptionscope_integrate.2fdd7c0dfbd7"></a>
<p class="symi-entry-owner">AssumptionScope method: <code>AssumptionScope.integrate</code></p>

```typescript signature
integrate(input_expression: Expression, variable: string): Expression
```

</details>

### integrate

<a id="entry-presentation_wasm_calculus_capability_calculus_integrate_api_session_integrate"></a>
<a id="placement-placement.wasm.wasm_module.module_integrate.ba7c5019b6c5"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
integrate(input_expression: Expression, variable: string): Expression
```

Indefinite integration (no constant of integration).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_integrate.c7366cddca9f"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.integrate</code></p>

```typescript signature
integrate(value: ExpressionLike, variable: VariableLike): Expression
```

<a id="placement-placement.wasm.wasm_class.context_integrate.7ea7e1c842ce"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.integrate</code></p>

```typescript signature
integrate(input_expression: Expression, variable: string): Expression
```

<a id="placement-placement.wasm.javascript_facade.symifacade_integrate.23b97ff9965a"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.integrate</code></p>

```typescript signature
integrate(value: ExpressionLike, variable: VariableLike): Expression
```

</details>

### integrate

<a id="entry-presentation_wasm_calculus_capability_calculus_integrate_api_expression_integrate"></a>
<a id="placement-placement.wasm.javascript_facade.expression_integrate.d67955658e24"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
integrate(variable: VariableLike): Expression
```

Indefinite integration (no constant of integration).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_integrate.d04377e90f5e"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.integrate</code></p>

```typescript signature
integrate(variable: string): Expression
```

</details>

### integrateDefinite

<a id="entry-presentation_wasm_calculus_capability_calculus_integrate_definite_api_assumptionscope_integrate_definite"></a>
<a id="placement-placement.wasm.wasm_class.assumptionscope_integratedefinite.f892481fe20c"></a>
<p class="symi-entry-owner">AssumptionScope method</p>

```typescript signature
integrateDefinite(
    input_expression: Expression,
    variable: string,
    lower_bound: Expression,
    upper_bound: Expression,
): Expression
```

Integrate a definite expression using the scope's immutable assumptions.

### integrateDefinite

<a id="entry-presentation_wasm_calculus_capability_calculus_integrate_definite_api_analysis_session_integrate_definite"></a>
<a id="placement-placement.wasm.wasm_module.module_integratedefinite.580dccd9f9e3"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
integrateDefinite(
    input_expression: Expression,
    variable: string,
    lower: Expression,
    upper: Expression,
): Expression
```

Definite integration over `[lower, upper]` (bounds may be infinite).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_integratedefinite.c23e8611ea36"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.integrateDefinite</code></p>

```typescript signature
integrateDefinite(
    input_expression: Expression,
    variable: string,
    lower: Expression,
    upper: Expression,
): Expression
```

</details>

### integrateDefinite

<a id="entry-presentation_wasm_calculus_capability_calculus_integrate_definite_api_expression_operations_expression_integrate_definite"></a>
<a id="placement-placement.wasm.wasm_class.expression_integratedefinite.4e404c54ad75"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
integrateDefinite(
    variable: string,
    lower: Expression,
    upper: Expression,
): Expression
```

Definite integration over `[lower, upper]` (bounds may be infinite).

### integrateDefiniteDetailed

<a id="entry-presentation_wasm_calculus_capability_calculus_integrate_definite_detailed_api_session_integrate_definite_detailed"></a>
<a id="placement-placement.wasm.wasm_module.module_integratedefinitedetailed.249aed840c82"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
integrateDefiniteDetailed(
    input_expression: Expression,
    variable: string,
    lower: Expression,
    upper: Expression,
    interpretation?: string | null,
    constraint?: Expression | null,
): DefiniteIntegrationResult
```

Evaluate a definite integral under an interpretation and an optional declared region, retaining whether it was evaluated, proved divergent, or declined.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_integratedefinitedetailed.d4e91bc937ad"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.integrateDefiniteDetailed</code></p>

```typescript signature
integrateDefiniteDetailed(
    input_expression: Expression,
    variable: string,
    lower: Expression,
    upper: Expression,
    interpretation?: string | null,
    constraint?: Expression | null,
): DefiniteIntegrationResult
```

</details>

### integrateDefiniteNumeric

<a id="entry-presentation_wasm_calculus_capability_calculus_integrate_definite_numeric_api_analysis_session_integrate_definite_numeric"></a>
<a id="placement-placement.wasm.wasm_module.module_integratedefinitenumeric.57c38757b75e"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
integrateDefiniteNumeric(
    input_expression: Expression,
    variable: string,
    lower: Expression,
    upper: Expression,
    precision_bits: number,
): NumericDefiniteIntegrationResult
```

Numerically integrate a finite interval without invoking symbolic integration.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_integratedefinitenumeric.b394f4572330"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.integrateDefiniteNumeric</code></p>

```typescript signature
integrateDefiniteNumeric(
    input_expression: Expression,
    variable: string,
    lower: Expression,
    upper: Expression,
    precision_bits: number,
): NumericDefiniteIntegrationResult
```

</details>

### integrateIterated

<a id="entry-presentation_wasm_calculus_capability_calculus_integrate_iterated_api_analysis_session_integrate_iterated"></a>
<a id="placement-placement.wasm.wasm_module.module_integrateiterated.a2a1f9fb1ef7"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
integrateIterated(
    input_expression: Expression,
    variables: string[],
): Expression
```

Iterated indefinite integration, applying the single-variable pipeline once per entry of `variables` in left-to-right order (innermost binder first).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_integrateiterated.d5ecdfc91bda"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.integrateIterated</code></p>

```typescript signature
integrateIterated(
    input_expression: Expression,
    variables: string[],
): Expression
```

</details>

### integrateIterated

<a id="entry-presentation_wasm_calculus_capability_calculus_integrate_iterated_api_expression_operations_expression_integrate_iterated"></a>
<a id="placement-placement.wasm.wasm_class.expression_integrateiterated.f095d7ba5219"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
integrateIterated(variables: string[]): Expression
```

Iterated indefinite integration, applying the single-variable pipeline once per entry of `variables` in left-to-right order (innermost binder first).

### interpretation

<a id="entry-presentation_wasm_calculus_capability_calculus_interpretation_api_results_definiteintegrationresult_interpretation"></a>
<a id="placement-placement.wasm.wasm_class.definiteintegrationresult_interpretation.e916f910c54f"></a>
<p class="symi-entry-owner">DefiniteIntegrationResult property</p>

```typescript signature
readonly interpretation: string
```

The interpretation under which the request was answered.

### inverseFourierTransform

<a id="entry-presentation_wasm_calculus_capability_calculus_inverse_fourier_transform_api_session_inverse_fourier_transform"></a>
<a id="placement-placement.wasm.wasm_module.module_inversefouriertransform.c756e25c95bb"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
inverseFourierTransform(
    input_expression: Expression,
    frequency_variable: string,
    time_variable: string,
): Expression
```

Inverse Fourier transform of the same convention.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_inversefouriertransform.1256b676d4cd"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.inverseFourierTransform</code></p>

```typescript signature
inverseFourierTransform(
    input_expression: Expression,
    frequency_variable: string,
    time_variable: string,
): Expression
```

</details>

### inverseLaplaceTransform

<a id="entry-presentation_wasm_calculus_capability_calculus_inverse_laplace_transform_api_session_inverse_laplace_transform"></a>
<a id="placement-placement.wasm.wasm_module.module_inverselaplacetransform.b9494a36f07b"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
inverseLaplaceTransform(
    input_expression: Expression,
    frequency_variable: string,
    time_variable: string,
): Expression
```

Inverse Laplace transform; rational inputs route through a partial-fraction reverse lookup.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_inverselaplacetransform.12be5bd7a8d7"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.inverseLaplaceTransform</code></p>

```typescript signature
inverseLaplaceTransform(
    input_expression: Expression,
    frequency_variable: string,
    time_variable: string,
): Expression
```

</details>

### laplaceTransform

<a id="entry-presentation_wasm_calculus_capability_calculus_laplace_transform_api_assumptionscope_laplace_transform"></a>
<a id="placement-placement.wasm.wasm_class.assumptionscope_laplacetransform.ec1051a0196b"></a>
<p class="symi-entry-owner">AssumptionScope method</p>

```typescript signature
laplaceTransform(
    input_expression: Expression,
    time_variable: string,
    frequency_variable: string,
): Expression
```

Compute a forward Laplace transform using the scope's immutable assumptions.

### laplaceTransform

<a id="entry-presentation_wasm_calculus_capability_calculus_laplace_transform_api_session_laplace_transform"></a>
<a id="placement-placement.wasm.wasm_module.module_laplacetransform.e8b317b65c63"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
laplaceTransform(
    input_expression: Expression,
    time_variable: string,
    frequency_variable: string,
): Expression
```

Forward Laplace transform \(F(s) = \int_0^\infty f(t)e^{-st}\,dt\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_laplacetransform.eaa99d3405c1"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.laplaceTransform</code></p>

```typescript signature
laplaceTransform(
    input_expression: Expression,
    time_variable: string,
    frequency_variable: string,
): Expression
```

</details>

### poleOrder

<a id="entry-presentation_wasm_calculus_capability_calculus_pole_order_api_analysis_session_pole_order"></a>
<a id="placement-placement.wasm.wasm_module.module_poleorder.13e4b7d7d589"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
poleOrder(
    input_expression: Expression,
    variable: string,
    center: Expression,
): bigint | undefined
```

Order of the singularity at `center`: `0` for analytic/removable points, \(m \ge 1\) for a pole of order \(m\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_poleorder.588f17fd3f20"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.poleOrder</code></p>

```typescript signature
poleOrder(
    input_expression: Expression,
    variable: string,
    center: Expression,
): bigint | undefined
```

</details>

### poleOrder

<a id="entry-presentation_wasm_calculus_capability_calculus_pole_order_api_expression_operations_expression_pole_order"></a>
<a id="placement-placement.wasm.wasm_class.expression_poleorder.b10295b45362"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
poleOrder(variable: string, center: Expression): bigint | undefined
```

Order of the singularity at `center`: `0` for analytic/removable points, \(m \ge 1\) for a pole of order \(m\).

### summationIndefinite

<a id="entry-presentation_wasm_calculus_capability_calculus_summation_indefinite_api_analysis_session_summation_indefinite"></a>
<a id="placement-placement.wasm.wasm_module.module_summationindefinite.45acee68c513"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
summationIndefinite(summand: Expression, index: string): Expression
```

Anti-difference: a closed form \(F\) with \(F(\operatorname{index}+1) - F(\operatorname{index}) = \operatorname{summand}\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_summationindefinite.1d9f974c7467"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.summationIndefinite</code></p>

```typescript signature
summationIndefinite(summand: Expression, index: string): Expression
```

</details>

### summationIndefinite

<a id="entry-presentation_wasm_calculus_capability_calculus_summation_indefinite_api_expression_operations_expression_summation_indefinite"></a>
<a id="placement-placement.wasm.wasm_class.expression_summationindefinite.98722b7aa268"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
summationIndefinite(index: string): Expression
```

Anti-difference: a closed form \(F\) with \(F(\operatorname{index}+1) - F(\operatorname{index}) = \operatorname{summand}\).

### value

<a id="entry-presentation_wasm_calculus_capability_calculus_value_api_results_definiteintegrationresult_value"></a>
<a id="placement-placement.wasm.wasm_class.definiteintegrationresult_value.a1ac38a1d17c"></a>
<p class="symi-entry-owner">DefiniteIntegrationResult property</p>

```typescript signature
readonly value: Expression | undefined
```

The exact value, present exactly when the verdict is `evaluated`.

