# Calculus

Calculus follows a uniform construct-versus-evaluate model; the summary table
is in [Evaluation and constants](evaluation-and-constants.md). Every variable
parameter accepts a name or a same-context symbol expression.

Each operation below is one entry with its receivers listed together: the
default context, an explicit context, and — where the operation takes an
expression — the expression itself all reach the same operation, and an
assumption scope reaches it under the assumptions that scope adds. The
collapsed *calling forms* block on each entry gives the exact signature of
each.

**Three tasks are spelled `differentiate` or `derivative`**, and they are not
interchangeable:

| Task | Entry | Page |
|---|---|---|
| Differentiate an expression now | `differentiate` | Below |
| Wrap an expression in an unevaluated derivative | `derivative` | [Deferred forms](deferred-forms.md#derivative) |
| Build a derivative of a named unknown from argument orders | `derivative` | [Undefined functions](undefined-functions.md#derivative) |

### differentiate

<a id="entry-presentation_wasm_api_session_differentiate"></a>
<a id="placement-placement.wasm.wasm_module.module_differentiate.4f7ff0e7c9f8"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

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
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.differentiate</code></p>

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

<a id="placement-placement.wasm.javascript_facade.expression_differentiate.85cf43e1ce4c"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.differentiate</code></p>

```typescript signature
differentiate(variable: VariableLike): Expression
```

<a id="placement-placement.wasm.wasm_class.expression_differentiate.aadc0cf2928a"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.differentiate</code></p>

```typescript signature
differentiate(variable: string): Expression
```

</details>


Symbolic derivative with respect to `variable`, evaluated now. The derivative is
total: unknown function calls produce derivative nodes.

### integrate

<a id="entry-presentation_wasm_api_session_integrate"></a>
<a id="placement-placement.wasm.wasm_module.module_integrate.ba7c5019b6c5"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
integrate(input_expression: Expression, variable: string): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms and variants</summary>

<a id="placement-placement.wasm.javascript_facade.context_integrate.c7366cddca9f"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.integrate</code></p>

```typescript signature
integrate(value: ExpressionLike, variable: VariableLike): Expression
```

<a id="placement-placement.wasm.wasm_class.context_integrate.7ea7e1c842ce"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.integrate</code></p>

```typescript signature
integrate(input_expression: Expression, variable: string): Expression
```

<a id="placement-placement.wasm.javascript_facade.symifacade_integrate.23b97ff9965a"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.integrate</code></p>

```typescript signature
integrate(value: ExpressionLike, variable: VariableLike): Expression
```

<a id="placement-placement.wasm.javascript_facade.expression_integrate.d67955658e24"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.integrate</code></p>

```typescript signature
integrate(variable: VariableLike): Expression
```

<a id="placement-placement.wasm.wasm_class.expression_integrate.d04377e90f5e"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.integrate</code></p>

```typescript signature
integrate(variable: string): Expression
```

<a id="placement-placement.wasm.javascript_facade.assumptionscope_integrate.2a66e4d0ee6f"></a>
<p class="symi-entry-owner">Variant using local assumptions — AssumptionScope method: <code>AssumptionScope.integrate</code></p>

```typescript signature
integrate(value: ExpressionLike, variable: VariableLike): Expression
```

<a id="placement-placement.wasm.wasm_class.assumptionscope_integrate.2fdd7c0dfbd7"></a>
<p class="symi-entry-owner">Variant using local assumptions — Raw WebAssembly: AssumptionScope method: <code>AssumptionScope.integrate</code></p>

```typescript signature
integrate(input_expression: Expression, variable: string): Expression
```

</details>


Indefinite integration (no constant of integration). The variant on an
[assumption scope](assumptions.md#assumption_scope) runs the same integration
under that scope's captured assumptions, which can close a branch the durable
context leaves open; the scope is immutable and the owning context is
unchanged. When every symbolic
strategy fails, the result is an *unevaluated* `integral` node, never a
guess. Real symbolic parameters can produce a `piecewise` antiderivative
whose conditions describe the supported parameter strata. A parameter value
outside every branch is undefined rather than a hidden declined branch.

### integrate_definite

<a id="entry-presentation_wasm_api_session_integrate_definite"></a>
<a id="placement-placement.wasm.wasm_module.module_integratedefinite.580dccd9f9e3"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
integrateDefinite(
    input_expression: Expression,
    variable: string,
    lower: Expression,
    upper: Expression,
): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms and variants</summary>

<a id="placement-placement.wasm.wasm_class.context_integratedefinite.c23e8611ea36"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.integrateDefinite</code></p>

```typescript signature
integrateDefinite(
    input_expression: Expression,
    variable: string,
    lower: Expression,
    upper: Expression,
): Expression
```

<a id="placement-placement.wasm.wasm_class.expression_integratedefinite.4e404c54ad75"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.integrateDefinite</code></p>

```typescript signature
integrateDefinite(
    variable: string,
    lower: Expression,
    upper: Expression,
): Expression
```

<a id="placement-placement.wasm.wasm_class.assumptionscope_integratedefinite.f892481fe20c"></a>
<p class="symi-entry-owner">Variant using local assumptions — Raw WebAssembly: AssumptionScope method: <code>AssumptionScope.integrateDefinite</code></p>

```typescript signature
integrateDefinite(
    input_expression: Expression,
    variable: string,
    lower_bound: Expression,
    upper_bound: Expression,
): Expression
```

</details>


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

What `integrate_definite_detailed` returns. It keeps the verdict separate from
the value, so a proved divergence is never read as a declined request, and a
declined request never as a proved answer. Its members are:

| Member | Meaning | Present |
|---|---|---|
| `verdict` | `evaluated`, `divergent`, or `declined` | Always |
| `interpretation` | The interpretation the request was answered under, `ordinary` or `cauchy_principal_value` | Always |
| `value` | The exact value of the integral | Exactly when the verdict is `evaluated` |
| `divergence_direction` | `positive_infinity` or `negative_infinity` | Only when the verdict is `divergent` **and** a single signed infinity was established; a divergence without a proved sign leaves it absent |
| `decline_reason` | `unsupported_family`, `incomplete_singularity_analysis`, `unknown_endpoint_behavior`, `unknown_bound_order`, or `unsupported_region` | Exactly when the verdict is `declined` |

Each member's exact host type and spelling follows below.

<a id="entry-presentation_wasm_api_definiteintegrationresult_decline_reason"></a>
<a id="placement-placement.wasm.wasm_class.definiteintegrationresult_declinereason.2ab13fa31859"></a>
<p class="symi-entry-owner">Raw WebAssembly: DefiniteIntegrationResult property</p>

```typescript signature
readonly declineReason: string | undefined
```

The reason, present exactly when the verdict is `declined`.

<a id="entry-presentation_wasm_api_definiteintegrationresult_divergence_direction"></a>
<a id="placement-placement.wasm.wasm_class.definiteintegrationresult_divergencedirection.23c571e1dfe7"></a>
<p class="symi-entry-owner">Raw WebAssembly: DefiniteIntegrationResult property</p>

```typescript signature
readonly divergenceDirection: string | undefined
```

The signed infinity of a divergent request, when a single direction was established.

<a id="entry-presentation_wasm_api_definiteintegrationresult_interpretation"></a>
<a id="placement-placement.wasm.wasm_class.definiteintegrationresult_interpretation.e916f910c54f"></a>
<p class="symi-entry-owner">Raw WebAssembly: DefiniteIntegrationResult property</p>

```typescript signature
readonly interpretation: string
```

The interpretation under which the request was answered.

<a id="entry-presentation_wasm_api_definiteintegrationresult_value"></a>
<a id="placement-placement.wasm.wasm_class.definiteintegrationresult_value.a1ac38a1d17c"></a>
<p class="symi-entry-owner">Raw WebAssembly: DefiniteIntegrationResult property</p>

```typescript signature
readonly value: Expression | undefined
```

The exact value, present exactly when the verdict is `evaluated`.

<a id="entry-presentation_wasm_api_definiteintegrationresult_verdict"></a>
<a id="placement-placement.wasm.wasm_class.definiteintegrationresult_verdict.ef5d425f12c2"></a>
<p class="symi-entry-owner">Raw WebAssembly: DefiniteIntegrationResult property</p>

```typescript signature
readonly verdict: string
```

Whether the request was evaluated, proved divergent, or declined.

### integrate_definite_numeric

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.integrate_definite_numeric`](/symi/python/calculus#integrate_definite_numeric) in Python, [`UniffiSession.integrateDefiniteNumeric`](/symi/kotlin/calculus#integrate_definite_numeric) in Kotlin, [`UniffiSession.integrateDefiniteNumeric`](/symi/swift/calculus#integrate_definite_numeric) in Swift, [`api::analysis::Session::integrate_definite_numeric`](/symi/rust/calculus#integrate_definite_numeric) in Rust.*


Explicit finite-interval quadrature. This is separate from symbolic definite
integration: it returns no value when convergence is not established and never
substitutes an unevaluated symbolic integral. The requested precision is in bits.

### NumericDefiniteIntegrationResult

What `integrate_definite_numeric` returns. An absent `value` is the honest
outcome of quadrature that did not converge; no symbolic integral is ever
substituted for it. Its members are:

| Member | Meaning | Present |
|---|---|---|
| `value` | The accepted quadrature value, as a `(real, imaginary)` pair | Only when convergence was established |
| `estimated_absolute_error` | The final difference between successive quadrature rules | With an accepted `value` |
| `precision_bits` | The precision of the accepted rule, in bits | With an accepted `value` |
| `node_count` | The number of nodes of the accepted rule | With an accepted `value` |

Each member's exact host type and spelling follows below.

<a id="entry-presentation_wasm_api_numericdefiniteintegrationresult_estimated_absolute_error"></a>
<a id="placement-placement.wasm.wasm_class.numericdefiniteintegrationresult_estimatedabsoluteerror.3ab4c6a54ed4"></a>
<p class="symi-entry-owner">Raw WebAssembly: NumericDefiniteIntegrationResult property</p>

```typescript signature
readonly estimatedAbsoluteError: number | undefined
```

The final difference between successive quadrature rules.

<a id="entry-presentation_wasm_api_numericdefiniteintegrationresult_node_count"></a>
<a id="placement-placement.wasm.wasm_class.numericdefiniteintegrationresult_nodecount.d6365edd307f"></a>
<p class="symi-entry-owner">Raw WebAssembly: NumericDefiniteIntegrationResult property</p>

```typescript signature
readonly nodeCount: number | undefined
```

The node count of the accepted Gauss--Legendre rule.

<a id="entry-presentation_wasm_api_numericdefiniteintegrationresult_precision_bits"></a>
<a id="placement-placement.wasm.wasm_class.numericdefiniteintegrationresult_precisionbits.38eaaf674f8b"></a>
<p class="symi-entry-owner">Raw WebAssembly: NumericDefiniteIntegrationResult property</p>

```typescript signature
readonly precisionBits: number | undefined
```

The arithmetic precision used for the result.

<a id="entry-presentation_wasm_api_numericdefiniteintegrationresult_value"></a>
<a id="placement-placement.wasm.wasm_class.numericdefiniteintegrationresult_value.5d248a24cc0f"></a>
<p class="symi-entry-owner">Raw WebAssembly: NumericDefiniteIntegrationResult property</p>

```typescript signature
readonly value: Float64Array | undefined
```

The complex value as real and imaginary components, when convergence was established.

### integrate_iterated

<a id="entry-presentation_wasm_api_session_integrate_iterated"></a>
<a id="placement-placement.wasm.wasm_module.module_integrateiterated.a2a1f9fb1ef7"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
integrateIterated(
    input_expression: Expression,
    variables: string[],
): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_integrateiterated.d5ecdfc91bda"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.integrateIterated</code></p>

```typescript signature
integrateIterated(
    input_expression: Expression,
    variables: string[],
): Expression
```

<a id="placement-placement.wasm.wasm_class.expression_integrateiterated.f095d7ba5219"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.integrateIterated</code></p>

```typescript signature
integrateIterated(variables: string[]): Expression
```

</details>


Iterated indefinite integration, applying the single-variable pipeline once
per entry of `variables` in **left-to-right order (innermost binder first)**.
An empty list returns the input unchanged. If any stage fails to close, the
remaining binders wrap the intermediate as nested unevaluated `integral`
nodes — no partial evaluation through an unclosed inner integral.

### limit

<a id="entry-presentation_wasm_api_session_limit"></a>
<a id="placement-placement.wasm.wasm_module.module_limit.09bfaf02cffb"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

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
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.limit</code></p>

```typescript signature
limit(
    input_expression: Expression,
    variable: string,
    point: Expression,
    direction?: string | null,
): Expression
```

<a id="placement-placement.wasm.wasm_class.expression_limit.ef276e5bcd5f"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.limit</code></p>

```typescript signature
limit(
    variable: string,
    point: Expression,
    direction?: string | null,
): Expression
```

</details>


`limit(expression, variable, point, direction="two_sided")` constructs a deferred limit.

### evaluate_limit

<a id="entry-presentation_wasm_api_session_evaluate_limit"></a>
<a id="placement-placement.wasm.wasm_module.module_evaluatelimit.0f1c024103e7"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
evaluateLimit(
    input_expression: Expression,
    variable: string,
    point: Expression,
    direction?: string | null,
): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms and variants</summary>

<a id="placement-placement.wasm.wasm_class.context_evaluatelimit.198af56c4c62"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.evaluateLimit</code></p>

```typescript signature
evaluateLimit(
    input_expression: Expression,
    variable: string,
    point: Expression,
    direction?: string | null,
): Expression
```

<a id="placement-placement.wasm.wasm_class.expression_evaluatelimit.ad4f2188ca80"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.evaluateLimit</code></p>

```typescript signature
evaluateLimit(
    variable: string,
    point: Expression,
    direction?: string | null,
): Expression
```

<a id="placement-placement.wasm.wasm_class.assumptionscope_evaluatelimit.8126d7e3bcbd"></a>
<p class="symi-entry-owner">Variant using local assumptions — Raw WebAssembly: AssumptionScope method: <code>AssumptionScope.evaluateLimit</code></p>

```typescript signature
evaluateLimit(
    input_expression: Expression,
    variable: string,
    point: Expression,
    direction?: string | null,
): Expression
```

</details>


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

<a id="entry-presentation_wasm_api_session_singularities"></a>
<a id="placement-placement.wasm.wasm_module.module_singularities.5894dcc61a6b"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
singularities(
    input_expression: Expression,
    variable: string,
): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms and variants</summary>

<a id="placement-placement.wasm.wasm_class.context_singularities.6066a1b62d30"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.singularities</code></p>

```typescript signature
singularities(
    input_expression: Expression,
    variable: string,
): Expression
```

<a id="placement-placement.wasm.wasm_class.expression_singularities.3f1ebf570aaf"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.singularities</code></p>

```typescript signature
singularities(variable: string): Expression
```

<a id="placement-placement.wasm.javascript_facade.assumptionscope_singularities.227597e63d8e"></a>
<p class="symi-entry-owner">Variant using local assumptions — AssumptionScope method: <code>AssumptionScope.singularities</code></p>

```typescript signature
singularities(value: ExpressionLike, variable: VariableLike): Expression
```

<a id="placement-placement.wasm.wasm_class.assumptionscope_singularities.f24ea8f03f44"></a>
<p class="symi-entry-owner">Variant using local assumptions — Raw WebAssembly: AssumptionScope method: <code>AssumptionScope.singularities</code></p>

```typescript signature
singularities(
    input_expression: Expression,
    variable: string,
): Expression
```

</details>


The singular points of the expression in the complex plane, as a set
expression (finite set, union, image set for periodic families, …). Rational
denominators are solved over the complex numbers even when the variable has
real assumptions. Multivalued functions contribute their finite branch
points; a conventional principal-branch cut is not returned as though every
point on it were singular.

### continuous_domain

<a id="entry-presentation_wasm_api_session_continuous_domain"></a>
<a id="placement-placement.wasm.wasm_module.module_continuousdomain.d9adfbfd1afb"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
continuousDomain(
    input_expression: Expression,
    variable: string,
): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms and variants</summary>

<a id="placement-placement.wasm.wasm_class.context_continuousdomain.b3456b9e12a2"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.continuousDomain</code></p>

```typescript signature
continuousDomain(
    input_expression: Expression,
    variable: string,
): Expression
```

<a id="placement-placement.wasm.wasm_class.expression_continuousdomain.29a27663a8c8"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.continuousDomain</code></p>

```typescript signature
continuousDomain(variable: string): Expression
```

<a id="placement-placement.wasm.javascript_facade.assumptionscope_continuousdomain.6d9849f22085"></a>
<p class="symi-entry-owner">Variant using local assumptions — AssumptionScope method: <code>AssumptionScope.continuousDomain</code></p>

```typescript signature
continuousDomain(value: ExpressionLike, variable: VariableLike): Expression
```

<a id="placement-placement.wasm.wasm_class.assumptionscope_continuousdomain.24bf52c8474b"></a>
<p class="symi-entry-owner">Variant using local assumptions — Raw WebAssembly: AssumptionScope method: <code>AssumptionScope.continuousDomain</code></p>

```typescript signature
continuousDomain(
    input_expression: Expression,
    variable: string,
): Expression
```

</details>


The subset of the real line on which the expression is continuous in
`variable`, as a set expression. Compound rational square-root radicands are
lowered to an exact univariate semialgebraic condition when supported, so,
for example, `sqrt(x + 1/x - 2)` has continuous real domain `(0, infinity)`.

### summation_indefinite

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

<a id="entry-presentation_wasm_api_session_evaluate_numeric"></a>
<a id="placement-placement.wasm.wasm_module.module_evaluatenumeric.b3592a20461b"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
evaluateNumeric(input_expression: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_evaluatenumeric.cf32bb7a03b5"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.evaluateNumeric</code></p>

```typescript signature
evaluateNumeric(input_expression: Expression): Expression
```

<a id="placement-placement.wasm.wasm_class.expression_evaluatenumeric.b483cb974774"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.evaluateNumeric</code></p>

```typescript signature
evaluateNumeric(): Expression
```

</details>


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

<a id="entry-presentation_wasm_api_session_execute"></a>
<a id="placement-placement.wasm.wasm_module.module_execute.046976fb1643"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
execute(input_expression: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_execute.f750d4ad1a52"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.execute</code></p>

```typescript signature
execute(value: ExpressionLike): Expression
```

<a id="placement-placement.wasm.wasm_class.context_execute.8f16d95e4225"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.execute</code></p>

```typescript signature
execute(input_expression: Expression): Expression
```

<a id="placement-placement.wasm.javascript_facade.symifacade_execute.899a0953de4b"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.execute</code></p>

```typescript signature
execute(value: ExpressionLike): Expression
```

<a id="placement-placement.wasm.javascript_facade.expression_execute.8b9ac9285061"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.execute</code></p>

```typescript signature
execute(): Expression
```

<a id="placement-placement.wasm.wasm_class.expression_execute.863a3e670c60"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.execute</code></p>

```typescript signature
execute(): Expression
```

</details>


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


### integrate_definite_under_constraint

<a id="entry-presentation_wasm_api_session_integrate_definite_under_constraint"></a>
<a id="placement-placement.wasm.wasm_module.module_integratedefiniteunderconstraint.b38208ce9b58"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
integrateDefiniteUnderConstraint(
    input_expression: Expression,
    variable: string,
    lower: Expression,
    upper: Expression,
    constraint: Expression,
): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_integratedefiniteunderconstraint.162de4dfe5ac"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.integrateDefiniteUnderConstraint</code></p>

```typescript signature
integrateDefiniteUnderConstraint(
    input_expression: Expression,
    variable: string,
    lower: Expression,
    upper: Expression,
    constraint: Expression,
): Expression
```

<a id="placement-placement.wasm.wasm_class.expression_integratedefiniteunderconstraint.ae1d271eaed2"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.integrateDefiniteUnderConstraint</code></p>

```typescript signature
integrateDefiniteUnderConstraint(
    variable: string,
    lower: Expression,
    upper: Expression,
    constraint: Expression,
): Expression
```

</details>


Definite integration under a local bounded logical constraint. The constraint
holds for this call only: it is not recorded on any symbol, so it cannot leak
into a later operation on the same context. Use it when the integral is
determined only on part of a parameter range — a sign condition on a parameter,
say — without committing the context to that condition.

See [Assumptions](assumptions.md) for durable symbol assumptions and for
`AssumptionScope`, which applies a set of assumptions to a whole block of
operations rather than to one call.

## Additional API

### evaluateOnGrid

<a id="entry-presentation_wasm_api_session_evaluate_on_grid"></a>
<a id="placement-placement.wasm.wasm_module.module_evaluateongrid.68b32c74ae82"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

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
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.evaluateOnGrid</code></p>

```typescript signature
evaluateOnGrid(
    input_expression: Expression,
    variable: string,
    x_values: Float64Array,
): Float64Array
```

</details>

### evaluateOnGridPoints

<a id="entry-presentation_wasm_api_session_evaluate_on_grid_points"></a>
<a id="placement-placement.wasm.wasm_module.module_evaluateongridpoints.dee0c2c92540"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

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
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.evaluateOnGridPoints</code></p>

```typescript signature
evaluateOnGridPoints(
    input_expression: Expression,
    variables: string[],
    points: Float64Array,
): Float64Array
```

</details>

### integrateDefiniteDetailed

<a id="entry-presentation_wasm_api_session_integrate_definite_detailed"></a>
<a id="placement-placement.wasm.wasm_module.module_integratedefinitedetailed.249aed840c82"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

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
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.integrateDefiniteDetailed</code></p>

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

<a id="entry-presentation_wasm_api_session_integrate_definite_numeric"></a>
<a id="placement-placement.wasm.wasm_module.module_integratedefinitenumeric.57c38757b75e"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

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
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.integrateDefiniteNumeric</code></p>

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

