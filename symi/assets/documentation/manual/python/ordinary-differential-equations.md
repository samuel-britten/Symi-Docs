# Ordinary differential equations

An ordinary differential equation relates an unknown function of one variable
to its derivatives. Write the unknown with `undefined_function` and its
derivatives with the `derivative` method on that handle, both documented in
[Undefined functions](undefined-functions.md):

```python
context = symi.Context()
x = context.symbol("x")
y = context.undefined_function("y")
y_of_x = y(x)
# \(y'(x) = y(x) \Rightarrow y' - y = 0\)
equation = y.derivative([1], [x]) - y_of_x
solution = context.solve_ordinary_differential_equation(equation, y_of_x, "x")
# log(abs(y(x))) - (integration_constant_0 + x)   — an implicit solution
```


Solutions are returned in whatever form the closing route produces: an
implicit zero-equated expression with fresh integration constants
(first-order routes), or an explicit `equal(y(x), …)` form
(constant-coefficient route).

The expression-returning entries below are compatibility projections. When the
data, method, family scope, history, or regularity is part of the question, use
the request entries, whose results keep the evidence behind the answer: the
method that actually ran, the independent verifier's verdict, the rank verdict
behind a complete-family claim, the constants the family treats as free, and a
typed decline reason. A request that cannot be answered as stated declines; it
is never projected onto a weaker question whose answer is then reported under
the stronger one.

## Solving a scalar equation

### solve_ordinary_differential_equation

<a id="entry-presentation_python_api_session_solve_ordinary_differential_equation"></a>
<a id="placement-placement.python.python_module.module_solve_ordinary_differential_equation.34bcba790969"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
solve_ordinary_differential_equation(
    equation: ExpressionLike,
    dependent_function_call: ExpressionLike,
    independent_variable: VariableLike,
    initial_conditions: Optional[Iterable[tuple[ExpressionLike, ExpressionLike]]] = None,
) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_solve_ordinary_differential_equation.8b5bb9481206"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.solve_ordinary_differential_equation</code></p>

```python signature
solve_ordinary_differential_equation(
    equation: ExpressionLike,
    dependent_function_call: ExpressionLike,
    independent_variable: VariableLike,
    initial_conditions: Optional[Iterable[tuple[ExpressionLike, ExpressionLike]]] = None,
) -> Expression
```

</details>


Solve an ODE for the unknown function named by `dependent_function_call`
(e.g. `y(x)`). The classifier ladder covers separable, linear first-order,
exact (with integrating factor), Bernoulli, Riccati (with particular
solution via the dedicated entry below), Lie-symmetry patterns, Kovacic
second-order linear, and constant-coefficient linear of any order. Equations
outside the ladder return the unevaluated `ordinary_differential_equation`
placeholder.

`initial_conditions` is a list of `(point, value)` pairs meaning
`y(point) = value`. They constrain the request, rather than merely advising a
preferred route: Symi fits the generated data and independently replays
every supplied condition before returning a particular solution. If it cannot
fit and verify those data, it declines instead of returning the unconstrained
family. **Notes:** this compatibility entry can express value data only; use
`solve_ordinary_differential_equation_request` for derivative data. WASM
passes a flat interleaved array `[point_0, value_0, ...]`.

### solve_ordinary_differential_equation_request

<a id="entry-presentation_python_api_session_solve_ordinary_differential_equation_request"></a>
<a id="placement-placement.python.python_module.module_solve_ordinary_differential_equation_request.162390703771"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
solve_ordinary_differential_equation_request(
    equation: expression_input,
    dependent_function_call: expression_input,
    independent_variable: variable_input,
    scope: str,
    condition_residuals: Optional[expression_collection_input] = None,
    method: str = "automatic",
    regularity: str = "classical",
) -> ordinary_differential_equation_solve_result
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_solve_ordinary_differential_equation_request.9b6e95f2b190"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.solve_ordinary_differential_equation_request</code></p>

```python signature
solve_ordinary_differential_equation_request(
    equation: expression_input,
    dependent_function_call: expression_input,
    independent_variable: variable_input,
    scope: str,
    condition_residuals: Optional[expression_collection_input] = None,
    method: str = "automatic",
    regularity: str = "classical",
) -> ordinary_differential_equation_solve_result
```

</details>


Solve one scalar ODE request. Each condition residual is read as equal to zero
and states one value or derivative datum at a coordinate-free point:
`f(0)` states \(f(0)=0\) and `f.derivative([1], [0]) - 2` states \(f'(0)=2\).

- `scope` is required: `general` asks for the complete family on a regular
  chart and is answered only when the map from the generated constants to the
  initial jet has full rank; `particular` asks for one solution through the data.
- `method` is `automatic` or `laplace_transform`. The transform method runs the
  forward transform, frequency-domain solve, and inversion, and declines when a
  step does not apply; it never substitutes the classification ladder.
- `regularity` is `classical` or `piecewise_classical`. An equation whose
  coefficient switches at a point (a `sign` or `piecewise` coefficient) must be
  requested as `piecewise_classical`: its solution is classical on each side and
  matched in value and slope across the switch, not twice differentiable there.
- A residual that integrates the unknown (a finite-memory Volterra term) is
  answered by a memory-state reduction and replayed against the original
  integral equation. A residual that evaluates the unknown at a lag is refused
  here, because its history is part of the question: use
  `solve_ordinary_differential_equation_with_history`.

**Errors:** a regularity that does not match the equation, a lag with no
history, or an unreadable condition residual is an invalid-argument error
naming the offending parameter.

### solve_ordinary_differential_equation_with_particular_solution

<a id="entry-presentation_python_api_session_solve_ordinary_differential_equation_with_particular_solution"></a>
<a id="placement-placement.python.python_module.module_solve_ordinary_differential_equation_with_particular_solution.5526cb26f075"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
solve_ordinary_differential_equation_with_particular_solution(
    equation: ExpressionLike,
    dependent_function_call: ExpressionLike,
    independent_variable: VariableLike,
    particular_solution: ExpressionLike,
) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_solve_ordinary_differential_equation_with_particular_solution.81aaefb22c81"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.solve_ordinary_differential_equation_with_particular_solution</code></p>

```python signature
solve_ordinary_differential_equation_with_particular_solution(
    equation: ExpressionLike,
    dependent_function_call: ExpressionLike,
    independent_variable: VariableLike,
    particular_solution: ExpressionLike,
) -> Expression
```

</details>


Riccati-specific entry: with a known particular solution \(y_1\), the
substitution \(y = y_1 + 1/v\) reduces the Riccati equation to a linear
first-order ODE. Falls back to the unevaluated placeholder when the shape is
not Riccati.

### solve_ordinary_differential_equation_with_history

<a id="entry-presentation_python_api_session_solve_ordinary_differential_equation_with_history"></a>
<a id="placement-placement.python.python_module.module_solve_ordinary_differential_equation_with_history.92044eea17ea"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
solve_ordinary_differential_equation_with_history(
    equation: expression_input,
    dependent_function_call: expression_input,
    independent_variable: variable_input,
    history_value: expression_input,
    history_start: expression_input,
    history_end: expression_input,
) -> ordinary_differential_equation_solve_result
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_solve_ordinary_differential_equation_with_history.44447471321c"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.solve_ordinary_differential_equation_with_history</code></p>

```python signature
solve_ordinary_differential_equation_with_history(
    equation: expression_input,
    dependent_function_call: expression_input,
    independent_variable: variable_input,
    history_value: expression_input,
    history_start: expression_input,
    history_end: expression_input,
) -> ordinary_differential_equation_solve_result
```

</details>


Solve a retarded delay ODE from a constant history on the stated interval
`[history_start, history_end]`, which must cover every lag. The interval is
never inferred, so a delay equation cannot acquire a history it was not given.
The supported class is a scalar first-order linear equation with constant lags
and constant history; it is answered by an exact method-of-steps family valid
for every time, certified by induction on the step index. One history is one
solution, so the request is particular.

## Solving a system

### solve_ordinary_differential_equation_system_request

<a id="entry-presentation_python_api_session_solve_ordinary_differential_equation_system_request"></a>
<a id="placement-placement.python.python_module.module_solve_ordinary_differential_equation_system_request.7413c2777014"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
solve_ordinary_differential_equation_system_request(
    equations: expression_collection_input,
    dependent_function_calls: expression_collection_input,
    independent_variable: variable_input,
    condition_residuals: Optional[expression_collection_input] = None,
    method: str = "automatic",
) -> ordinary_differential_equation_system_solve_result
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_solve_ordinary_differential_equation_system_request.a85a23b83559"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.solve_ordinary_differential_equation_system_request</code></p>

```python signature
solve_ordinary_differential_equation_system_request(
    equations: expression_collection_input,
    dependent_function_calls: expression_collection_input,
    independent_variable: variable_input,
    condition_residuals: Optional[expression_collection_input] = None,
    method: str = "automatic",
) -> ordinary_differential_equation_system_solve_result
```

</details>


Solve a system of ODEs in one coordinate, one equation per declared unknown.
Each condition residual states one datum on exactly one component.
`method` is `automatic`, `sequential` (scalar requests solved one at a time,
each with its own fresh integration datum; declines when no elimination order
exists), or `fundamental_matrix` (the coupled route through a certified
fundamental matrix of the first-order state form). Every returned assignment is
verified against every equation and datum.

## Verifying a supplied solution

### verify_ordinary_differential_equation_system_solution

<a id="entry-presentation_python_api_session_verify_ordinary_differential_equation_system_solution"></a>
<a id="placement-placement.python.python_module.module_verify_ordinary_differential_equation_system_solution.e89c19aef2c2"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
verify_ordinary_differential_equation_system_solution(
    equations: expression_collection_input,
    dependent_function_calls: expression_collection_input,
    independent_variable: variable_input,
    components: expression_collection_input,
    generated_constants: expression_collection_input,
    condition_residuals: Optional[expression_collection_input] = None,
) -> ordinary_differential_equation_system_verification_report
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_verify_ordinary_differential_equation_system_solution.8454d965cf59"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.verify_ordinary_differential_equation_system_solution</code></p>

```python signature
verify_ordinary_differential_equation_system_solution(
    equations: expression_collection_input,
    dependent_function_calls: expression_collection_input,
    independent_variable: variable_input,
    components: expression_collection_input,
    generated_constants: expression_collection_input,
    condition_residuals: Optional[expression_collection_input] = None,
) -> ordinary_differential_equation_system_verification_report
```

</details>


Check a supplied assignment without solving: no solver runs, so a swapped
component or a missing mode is reported against the assignment as given rather
than repaired. The report carries `verdict`, `generality` (the rank verdict on
the map from `generated_constants` to the initial jet), and `required_rank`.

## Results

Every request entry above returns one of these records. A record reports the
route that actually ran and the independent verifier's verdict alongside the
solution, so a caller can tell a proved answer from an unproved one, and
carries a typed `decline` rather than a weaker answer when the request could
not be met.

### OrdinaryDifferentialEquationSolveResult
`verdict` (`solved`/`declined`), `method`, `solution`, `form`
(`explicit`/`implicit`), `generated_constants`, `verification`
(`verified`/`rejected`/`inconclusive`), `generality`
(`full_rank`/`deficient`/`inconclusive`), `decline`, and, for a Laplace
transform solution, `frequency_domain_equation` and `image`.

<a id="entry-presentation_python_api_ordinarydifferentialequationsolveresult"></a>
<a id="placement-placement.python.python_class.ordinarydifferentialequationsolveresult.d2d24a57b343"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class OrdinaryDifferentialEquationSolveResult
```

A scalar ordinary differential equation outcome that keeps the evidence behind its answer.

<a id="entry-presentation_python_api_ordinarydifferentialequationsolveresult_decline"></a>
<a id="placement-placement.python.python_class.ordinarydifferentialequationsolveresult_decline.97b6a3b080c9"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSolveResult property</p>

```python signature
decline: Optional[str]
```

The typed reason no certified candidate was produced.

<a id="entry-presentation_python_api_ordinarydifferentialequationsolveresult_form"></a>
<a id="placement-placement.python.python_class.ordinarydifferentialequationsolveresult_form.fb9c33113e1f"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSolveResult property</p>

```python signature
form: Optional[str]
```

Whether the solution is the value of the unknown or a relation read as zero.

<a id="entry-presentation_python_api_ordinarydifferentialequationsolveresult_frequency_domain_equation"></a>
<a id="placement-placement.python.python_class.ordinarydifferentialequationsolveresult_frequency_domain_equation.d67bda0a2e26"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSolveResult property</p>

```python signature
frequency_domain_equation: Optional[expression]
```

The frequency-domain equation of a Laplace transform solution, read as zero.

<a id="entry-presentation_python_api_ordinarydifferentialequationsolveresult_generality"></a>
<a id="placement-placement.python.python_class.ordinarydifferentialequationsolveresult_generality.69c1f19a3095"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSolveResult property</p>

```python signature
generality: Optional[str]
```

The rank decision behind a complete-family claim, when the request required one.

<a id="entry-presentation_python_api_ordinarydifferentialequationsolveresult_generated_constants"></a>
<a id="placement-placement.python.python_class.ordinarydifferentialequationsolveresult_generated_constants.76586028281a"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSolveResult property</p>

```python signature
generated_constants: list[expression]
```

Exactly the constants the solution treats as free.

<a id="entry-presentation_python_api_ordinarydifferentialequationsolveresult_image"></a>
<a id="placement-placement.python.python_class.ordinarydifferentialequationsolveresult_image.423aa8e2cc90"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSolveResult property</p>

```python signature
image: Optional[expression]
```

The image of the unknown a Laplace transform solution solved for.

<a id="entry-presentation_python_api_ordinarydifferentialequationsolveresult_method"></a>
<a id="placement-placement.python.python_class.ordinarydifferentialequationsolveresult_method.75a7820ecba4"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSolveResult property</p>

```python signature
method: str
```

The method the request actually ran.

<a id="entry-presentation_python_api_ordinarydifferentialequationsolveresult_solution"></a>
<a id="placement-placement.python.python_class.ordinarydifferentialequationsolveresult_solution.6d23f2ed61c8"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSolveResult property</p>

```python signature
solution: Optional[expression]
```

The certified solution, which no declined request carries.

<a id="entry-presentation_python_api_ordinarydifferentialequationsolveresult_verdict"></a>
<a id="placement-placement.python.python_class.ordinarydifferentialequationsolveresult_verdict.592a8fe7421b"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSolveResult property</p>

```python signature
verdict: str
```

Whether the request was solved or declined.

<a id="entry-presentation_python_api_ordinarydifferentialequationsolveresult_verification"></a>
<a id="placement-placement.python.python_class.ordinarydifferentialequationsolveresult_verification.d464f1a7ea4c"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSolveResult property</p>

```python signature
verification: Optional[str]
```

The independent verifier's decision on the candidate, when verification ran.

### OrdinaryDifferentialEquationSystemSolveResult
`verdict`, `method`, `route` (`sequential`, `fundamental_matrix`, or
`dependency_blocks`), `components` in declaration order, `generated_constants`,
`verification`, `generality`, and `decline`.

<a id="entry-presentation_python_api_ordinarydifferentialequationsystemsolveresult"></a>
<a id="placement-placement.python.python_class.ordinarydifferentialequationsystemsolveresult.0c154c915822"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class OrdinaryDifferentialEquationSystemSolveResult
```

A system of ordinary differential equations outcome that keeps the evidence behind its answer.

<a id="entry-presentation_python_api_ordinarydifferentialequationsystemsolveresult_components"></a>
<a id="placement-placement.python.python_class.ordinarydifferentialequationsystemsolveresult_components.ce8bfaadda21"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSystemSolveResult property</p>

```python signature
components: list[expression]
```

One explicit value per declared unknown, in declaration order, when solved.

<a id="entry-presentation_python_api_ordinarydifferentialequationsystemsolveresult_decline"></a>
<a id="placement-placement.python.python_class.ordinarydifferentialequationsystemsolveresult_decline.73605e35c453"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSystemSolveResult property</p>

```python signature
decline: Optional[str]
```

The typed reason no certified assignment was produced.

<a id="entry-presentation_python_api_ordinarydifferentialequationsystemsolveresult_generality"></a>
<a id="placement-placement.python.python_class.ordinarydifferentialequationsystemsolveresult_generality.29335d39f0fd"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSystemSolveResult property</p>

```python signature
generality: Optional[str]
```

The rank decision on the constants-to-initial-jet map, when verification ran.

<a id="entry-presentation_python_api_ordinarydifferentialequationsystemsolveresult_generated_constants"></a>
<a id="placement-placement.python.python_class.ordinarydifferentialequationsystemsolveresult_generated_constants.f8b463ed4cc5"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSystemSolveResult property</p>

```python signature
generated_constants: list[expression]
```

Exactly the constants the assignment treats as free.

<a id="entry-presentation_python_api_ordinarydifferentialequationsystemsolveresult_method"></a>
<a id="placement-placement.python.python_class.ordinarydifferentialequationsystemsolveresult_method.e890e7536e13"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSystemSolveResult property</p>

```python signature
method: str
```

The method the system request actually ran.

<a id="entry-presentation_python_api_ordinarydifferentialequationsystemsolveresult_route"></a>
<a id="placement-placement.python.python_class.ordinarydifferentialequationsystemsolveresult_route.ebc67035a80d"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSystemSolveResult property</p>

```python signature
route: Optional[str]
```

The route the certified assignment came from.

<a id="entry-presentation_python_api_ordinarydifferentialequationsystemsolveresult_verdict"></a>
<a id="placement-placement.python.python_class.ordinarydifferentialequationsystemsolveresult_verdict.ee565ebcb9d3"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSystemSolveResult property</p>

```python signature
verdict: str
```

Whether the system was solved or declined.

<a id="entry-presentation_python_api_ordinarydifferentialequationsystemsolveresult_verification"></a>
<a id="placement-placement.python.python_class.ordinarydifferentialequationsystemsolveresult_verification.9d0a62131f4c"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSystemSolveResult property</p>

```python signature
verification: Optional[str]
```

The independent verifier's decision on the assignment, when verification ran.

### OrdinaryDifferentialEquationSystemVerificationReport
`verdict`, `generality`, and `required_rank`.

<a id="entry-presentation_python_api_ordinarydifferentialequationsystemverificationreport"></a>
<a id="placement-placement.python.python_class.ordinarydifferentialequationsystemverificationreport.92e863cb4a59"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class OrdinaryDifferentialEquationSystemVerificationReport
```

Independent exact evidence about a supplied assignment for a system of ordinary differential equations.

<a id="entry-presentation_python_api_ordinarydifferentialequationsystemverificationreport_generality"></a>
<a id="placement-placement.python.python_class.ordinarydifferentialequationsystemverificationreport_generality.dc50930dc8fc"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSystemVerificationReport property</p>

```python signature
generality: str
```

The rank decision on the map from the supplied constants to the initial jet.

<a id="entry-presentation_python_api_ordinarydifferentialequationsystemverificationreport_required_rank"></a>
<a id="placement-placement.python.python_class.ordinarydifferentialequationsystemverificationreport_required_rank.95834db51730"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSystemVerificationReport property</p>

```python signature
required_rank: int
```

The dimension a complete family of the system must span.

<a id="entry-presentation_python_api_ordinarydifferentialequationsystemverificationreport_verdict"></a>
<a id="placement-placement.python.python_class.ordinarydifferentialequationsystemverificationreport_verdict.c3b045f19390"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSystemVerificationReport property</p>

```python signature
verdict: str
```

The decision on every equation residual and every datum of the supplied assignment.

## Request vocabulary

A request entry names its scope, method, and regularity by one of these values.
Naming a method runs that route only: it declines when the route does not
apply, rather than falling through to another one.

### OrdinaryDifferentialEquationMethod

*Not exposed by the Python bindings. Available as [`api::OrdinaryDifferentialEquationMethod`](/symi/rust/ordinary-differential-equations#ordinarydifferentialequationmethod) in Rust.*


The route a scalar ordinary differential equation request must take.

Cases: `Automatic`, `LaplaceTransform`.

### OrdinaryDifferentialEquationSystemMethod

*Not exposed by the Python bindings. Available as [`api::OrdinaryDifferentialEquationSystemMethod`](/symi/rust/ordinary-differential-equations#ordinarydifferentialequationsystemmethod) in Rust.*


The route a system of ordinary differential equations must take.

Cases: `Automatic`, `FundamentalMatrix`, `Sequential`.

### OrdinaryDifferentialEquationRegularity

*Not exposed by the Python bindings. Available as [`api::OrdinaryDifferentialEquationRegularity`](/symi/rust/ordinary-differential-equations#ordinarydifferentialequationregularity) in Rust.*


The differentiability a scalar ordinary differential equation answer must have.

Cases: `Classical`, `PiecewiseClassical`.

## Outcome vocabulary

A result reports its outcome through these values. `generality` is the rank
decision behind a complete-family claim and is separate from `verification`,
the independent verifier's decision about the solution itself: a solution can
be verified and still not be the general family.

### OrdinaryDifferentialEquationSolveVerdict

*Not exposed by the Python bindings. Available as [`api::OrdinaryDifferentialEquationSolveVerdict`](/symi/rust/ordinary-differential-equations#ordinarydifferentialequationsolveverdict) in Rust.*


Whether a scalar ordinary differential equation request was solved.

Cases: `Declined`, `Solved`.

### OrdinaryDifferentialEquationSystemRoute

*Not exposed by the Python bindings. Available as [`api::OrdinaryDifferentialEquationSystemRoute`](/symi/rust/ordinary-differential-equations#ordinarydifferentialequationsystemroute) in Rust.*


The route a solved system of ordinary differential equations actually ran.

Cases: `DependencyBlocks`, `FundamentalMatrix`, `Sequential`.

### OrdinaryDifferentialEquationSolutionForm

*Not exposed by the Python bindings. Available as [`api::OrdinaryDifferentialEquationSolutionForm`](/symi/rust/ordinary-differential-equations#ordinarydifferentialequationsolutionform) in Rust.*


Whether a returned ordinary differential equation solution gives the unknown or a relation.

Cases: `Explicit`, `Implicit`.

### OrdinaryDifferentialEquationVerificationVerdict

*Not exposed by the Python bindings. Available as [`api::OrdinaryDifferentialEquationVerificationVerdict`](/symi/rust/ordinary-differential-equations#ordinarydifferentialequationverificationverdict) in Rust.*


The exact decision an independent ordinary differential equation verifier reached.

Cases: `Inconclusive`, `Rejected`, `Verified`.

### OrdinaryDifferentialEquationGeneralityVerdict

*Not exposed by the Python bindings. Available as [`api::OrdinaryDifferentialEquationGeneralityVerdict`](/symi/rust/ordinary-differential-equations#ordinarydifferentialequationgeneralityverdict) in Rust.*


The exact rank decision behind a complete-family claim.

Cases: `Deficient`, `FullRank`, `Inconclusive`.

## Declines

A request that cannot be met carries one of these reasons instead of a weaker
answer. The reason names the step that did not close, so a decline can be acted
on rather than merely retried.

### OrdinaryDifferentialEquationSolveDecline

*Not exposed by the Python bindings. Available as [`api::OrdinaryDifferentialEquationSolveDecline`](/symi/rust/ordinary-differential-equations#ordinarydifferentialequationsolvedecline) in Rust.*


Why a scalar ordinary differential equation request produced no certified candidate.

Cases: `AccumulatedOccurrenceNotSupported`, `CandidateNotVerified`, `ConditionsNotFitted`, `DelayFamilyNotAvailable`, `DelayFamilyNotCertified`, `DisplacedOccurrenceNotSupported`, `GeneralFamilyNotEstablished`, `GeneralFamilyRankUndecided`, `NoRouteRecognizedTheEquation`, `SwitchedCoefficientsNotSolved`, `TransformDidNotReachTheFrequencyDomain`, `TransformInversionDeclined`, `TransformRequiresCompleteOriginData`, `TransformRequiresScalarSignature`, `TransformedEquationNotSolvable`, `VolterraEndpointDataIncompatible`, `VolterraEndpointDataMissing`, `VolterraKernelNotSupported`.

### OrdinaryDifferentialEquationSystemSolveDecline

*Not exposed by the Python bindings. Available as [`api::OrdinaryDifferentialEquationSystemSolveDecline`](/symi/rust/ordinary-differential-equations#ordinarydifferentialequationsystemsolvedecline) in Rust.*


Why a system of ordinary differential equations produced no certified assignment.

Cases: `ComponentRequestDeclined`, `ComponentSolutionIsNotExplicit`, `ConditionsDoNotDetermineTheConstants`, `ForcingHasNoExactParticularState`, `FundamentalMatrixUnavailable`, `NoSequentialOrderingExists`, `SolutionNotVerified`, `StateFormUnavailable`.

## Related

- [Undefined functions](undefined-functions.md) — the unknown function and its
  structural derivatives.
- [Partial differential equations](partial-differential-equations.md) — the
  several-variable case, whose similarity reductions close through the scalar
  ODE routes above.
- [Recurrence equations](recurrence-equations.md) — the discrete analogue.
- [Integral transforms](integral-transforms.md) — the Laplace transform the
  `laplace_transform` method runs on.
