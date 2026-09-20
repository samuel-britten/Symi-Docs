# Ordinary differential equations

An ordinary differential equation relates an unknown function of one variable
to its derivatives. Write the unknown with `undefined_function` and its
derivatives with the `derivative` method on that handle, both documented in
[Undefined functions](undefined-functions.md):


```javascript
const context = new symi.Context();
const x = context.symbol("x");
const y = context.undefinedFunction("y");
const yOfX = y.call([x]);
const equation = y.derivative([1], [x]).subtract(yOfX);
const solution = context.solveOrdinaryDifferentialEquation(equation, yOfX, "x");
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

<a id="entry-presentation_wasm_api_session_solve_ordinary_differential_equation"></a>
<a id="placement-placement.wasm.wasm_module.module_solveordinarydifferentialequation.79ae565de443"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
solveOrdinaryDifferentialEquation(
    equation: Expression,
    dependent_function_call: Expression,
    independent_variable: string,
    initial_conditions?: Expression[] | null,
): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_solveordinarydifferentialequation.efb98185cf3b"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.solveOrdinaryDifferentialEquation</code></p>

```typescript signature
solveOrdinaryDifferentialEquation(
    equation: Expression,
    dependent_function_call: Expression,
    independent_variable: string,
    initial_conditions?: Expression[] | null,
): Expression
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

<a id="entry-presentation_wasm_api_session_solve_ordinary_differential_equation_request"></a>
<a id="placement-placement.wasm.wasm_module.module_solveordinarydifferentialequationrequest.ccf38368c860"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
solveOrdinaryDifferentialEquationRequest(
    equation: Expression,
    dependent_function_call: Expression,
    independent_variable: string,
    scope: string,
    condition_residuals?: Expression[] | null,
    method?: string | null,
    regularity?: string | null,
): OrdinaryDifferentialEquationSolveResult
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_solveordinarydifferentialequationrequest.0d10418c0664"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.solveOrdinaryDifferentialEquationRequest</code></p>

```typescript signature
solveOrdinaryDifferentialEquationRequest(
    equation: Expression,
    dependent_function_call: Expression,
    independent_variable: string,
    scope: string,
    condition_residuals?: Expression[] | null,
    method?: string | null,
    regularity?: string | null,
): OrdinaryDifferentialEquationSolveResult
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

<a id="entry-presentation_wasm_api_session_solve_ordinary_differential_equation_with_particular_solution"></a>
<a id="placement-placement.wasm.wasm_module.module_solveordinarydifferentialequationwithparticularsolution.9f86687333f8"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
solveOrdinaryDifferentialEquationWithParticularSolution(
    equation: Expression,
    dependent_function_call: Expression,
    independent_variable: string,
    particular_solution: Expression,
): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_solveordinarydifferentialequationwithparticularsolution.a068b73acc6d"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.solveOrdinaryDifferentialEquationWithParticularSolution</code></p>

```typescript signature
solveOrdinaryDifferentialEquationWithParticularSolution(
    equation: Expression,
    dependent_function_call: Expression,
    independent_variable: string,
    particular_solution: Expression,
): Expression
```

</details>


Riccati-specific entry: with a known particular solution \(y_1\), the
substitution \(y = y_1 + 1/v\) reduces the Riccati equation to a linear
first-order ODE. Falls back to the unevaluated placeholder when the shape is
not Riccati.

### solve_ordinary_differential_equation_with_history

<a id="entry-presentation_wasm_api_session_solve_ordinary_differential_equation_with_history"></a>
<a id="placement-placement.wasm.wasm_module.module_solveordinarydifferentialequationwithhistory.5f497de66d83"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
solveOrdinaryDifferentialEquationWithHistory(
    equation: Expression,
    dependent_function_call: Expression,
    independent_variable: string,
    history_value: Expression,
    history_start: Expression,
    history_end: Expression,
): OrdinaryDifferentialEquationSolveResult
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_solveordinarydifferentialequationwithhistory.213a3190a46e"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.solveOrdinaryDifferentialEquationWithHistory</code></p>

```typescript signature
solveOrdinaryDifferentialEquationWithHistory(
    equation: Expression,
    dependent_function_call: Expression,
    independent_variable: string,
    history_value: Expression,
    history_start: Expression,
    history_end: Expression,
): OrdinaryDifferentialEquationSolveResult
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

<a id="entry-presentation_wasm_api_session_solve_ordinary_differential_equation_system_request"></a>
<a id="placement-placement.wasm.wasm_module.module_solveordinarydifferentialequationsystemrequest.8607f77ab0ac"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
solveOrdinaryDifferentialEquationSystemRequest(
    equations: Expression[],
    dependent_function_calls: Expression[],
    independent_variable: string,
    condition_residuals?: Expression[] | null,
    method?: string | null,
): OrdinaryDifferentialEquationSystemSolveResult
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_solveordinarydifferentialequationsystemrequest.b14fb515da40"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.solveOrdinaryDifferentialEquationSystemRequest</code></p>

```typescript signature
solveOrdinaryDifferentialEquationSystemRequest(
    equations: Expression[],
    dependent_function_calls: Expression[],
    independent_variable: string,
    condition_residuals?: Expression[] | null,
    method?: string | null,
): OrdinaryDifferentialEquationSystemSolveResult
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

<a id="entry-presentation_wasm_api_session_verify_ordinary_differential_equation_system_solution"></a>
<a id="placement-placement.wasm.wasm_module.module_verifyordinarydifferentialequationsystemsolution.d73b5971c92e"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
verifyOrdinaryDifferentialEquationSystemSolution(
    equations: Expression[],
    dependent_function_calls: Expression[],
    independent_variable: string,
    components: Expression[],
    generated_constants: Expression[],
    condition_residuals?: Expression[] | null,
): OrdinaryDifferentialEquationSystemVerificationReport
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_verifyordinarydifferentialequationsystemsolution.6259425d8a18"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.verifyOrdinaryDifferentialEquationSystemSolution</code></p>

```typescript signature
verifyOrdinaryDifferentialEquationSystemSolution(
    equations: Expression[],
    dependent_function_calls: Expression[],
    independent_variable: string,
    components: Expression[],
    generated_constants: Expression[],
    condition_residuals?: Expression[] | null,
): OrdinaryDifferentialEquationSystemVerificationReport
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

<a id="entry-presentation_wasm_api_ordinarydifferentialequationsolveresult_decline"></a>
<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsolveresult_decline.24f117c6e555"></a>
<p class="symi-entry-owner">Raw WebAssembly: OrdinaryDifferentialEquationSolveResult property</p>

```typescript signature
readonly decline: string | undefined
```

The typed reason no certified candidate was produced.

<a id="entry-presentation_wasm_api_ordinarydifferentialequationsolveresult_form"></a>
<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsolveresult_form.ed5c138e707a"></a>
<p class="symi-entry-owner">Raw WebAssembly: OrdinaryDifferentialEquationSolveResult property</p>

```typescript signature
readonly form: string | undefined
```

Whether the solution is the value of the unknown or a relation read as zero.

<a id="entry-presentation_wasm_api_ordinarydifferentialequationsolveresult_frequency_domain_equation"></a>
<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsolveresult_frequencydomainequation.4b988fcde71e"></a>
<p class="symi-entry-owner">Raw WebAssembly: OrdinaryDifferentialEquationSolveResult property</p>

```typescript signature
readonly frequencyDomainEquation: Expression | undefined
```

The frequency-domain equation of a Laplace transform solution, read as zero.

<a id="entry-presentation_wasm_api_ordinarydifferentialequationsolveresult_generality"></a>
<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsolveresult_generality.0acc7843fcff"></a>
<p class="symi-entry-owner">Raw WebAssembly: OrdinaryDifferentialEquationSolveResult property</p>

```typescript signature
readonly generality: string | undefined
```

The rank decision behind a complete-family claim, when the request required one.

<a id="entry-presentation_wasm_api_ordinarydifferentialequationsolveresult_generated_constants"></a>
<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsolveresult_generatedconstants.b24b49acc560"></a>
<p class="symi-entry-owner">Raw WebAssembly: OrdinaryDifferentialEquationSolveResult property</p>

```typescript signature
readonly generatedConstants: Expression[]
```

Exactly the constants the solution treats as free.

<a id="entry-presentation_wasm_api_ordinarydifferentialequationsolveresult_image"></a>
<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsolveresult_image.2505758202af"></a>
<p class="symi-entry-owner">Raw WebAssembly: OrdinaryDifferentialEquationSolveResult property</p>

```typescript signature
readonly image: Expression | undefined
```

The image of the unknown a Laplace transform solution solved for.

<a id="entry-presentation_wasm_api_ordinarydifferentialequationsolveresult_method"></a>
<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsolveresult_method.2a36ab088dab"></a>
<p class="symi-entry-owner">Raw WebAssembly: OrdinaryDifferentialEquationSolveResult property</p>

```typescript signature
readonly method: string
```

The method the request actually ran.

<a id="entry-presentation_wasm_api_ordinarydifferentialequationsolveresult_solution"></a>
<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsolveresult_solution.095194c1e3e8"></a>
<p class="symi-entry-owner">Raw WebAssembly: OrdinaryDifferentialEquationSolveResult property</p>

```typescript signature
readonly solution: Expression | undefined
```

The certified solution, which no declined request carries.

<a id="entry-presentation_wasm_api_ordinarydifferentialequationsolveresult_verdict"></a>
<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsolveresult_verdict.be6fec5ffae5"></a>
<p class="symi-entry-owner">Raw WebAssembly: OrdinaryDifferentialEquationSolveResult property</p>

```typescript signature
readonly verdict: string
```

Whether the request was solved or declined.

<a id="entry-presentation_wasm_api_ordinarydifferentialequationsolveresult_verification"></a>
<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsolveresult_verification.98a3c08527f6"></a>
<p class="symi-entry-owner">Raw WebAssembly: OrdinaryDifferentialEquationSolveResult property</p>

```typescript signature
readonly verification: string | undefined
```

The independent verifier's decision on the candidate, when verification ran.

### OrdinaryDifferentialEquationSystemSolveResult
`verdict`, `method`, `route` (`sequential`, `fundamental_matrix`, or
`dependency_blocks`), `components` in declaration order, `generated_constants`,
`verification`, `generality`, and `decline`.

<a id="entry-presentation_wasm_api_ordinarydifferentialequationsystemsolveresult_components"></a>
<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsystemsolveresult_components.b446bfacdaad"></a>
<p class="symi-entry-owner">Raw WebAssembly: OrdinaryDifferentialEquationSystemSolveResult property</p>

```typescript signature
readonly components: Expression[]
```

One explicit value per declared unknown, in declaration order, when solved.

<a id="entry-presentation_wasm_api_ordinarydifferentialequationsystemsolveresult_decline"></a>
<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsystemsolveresult_decline.a04d9d49a2dc"></a>
<p class="symi-entry-owner">Raw WebAssembly: OrdinaryDifferentialEquationSystemSolveResult property</p>

```typescript signature
readonly decline: string | undefined
```

The typed reason no certified assignment was produced.

<a id="entry-presentation_wasm_api_ordinarydifferentialequationsystemsolveresult_generality"></a>
<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsystemsolveresult_generality.b6dedec50021"></a>
<p class="symi-entry-owner">Raw WebAssembly: OrdinaryDifferentialEquationSystemSolveResult property</p>

```typescript signature
readonly generality: string | undefined
```

The rank decision on the constants-to-initial-jet map, when verification ran.

<a id="entry-presentation_wasm_api_ordinarydifferentialequationsystemsolveresult_generated_constants"></a>
<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsystemsolveresult_generatedconstants.918ffd7b6ed6"></a>
<p class="symi-entry-owner">Raw WebAssembly: OrdinaryDifferentialEquationSystemSolveResult property</p>

```typescript signature
readonly generatedConstants: Expression[]
```

Exactly the constants the assignment treats as free.

<a id="entry-presentation_wasm_api_ordinarydifferentialequationsystemsolveresult_method"></a>
<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsystemsolveresult_method.85f1db18a22f"></a>
<p class="symi-entry-owner">Raw WebAssembly: OrdinaryDifferentialEquationSystemSolveResult property</p>

```typescript signature
readonly method: string
```

The method the system request actually ran.

<a id="entry-presentation_wasm_api_ordinarydifferentialequationsystemsolveresult_route"></a>
<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsystemsolveresult_route.ad4fa4980543"></a>
<p class="symi-entry-owner">Raw WebAssembly: OrdinaryDifferentialEquationSystemSolveResult property</p>

```typescript signature
readonly route: string | undefined
```

The route the certified assignment came from.

<a id="entry-presentation_wasm_api_ordinarydifferentialequationsystemsolveresult_verdict"></a>
<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsystemsolveresult_verdict.cc0fd5062ade"></a>
<p class="symi-entry-owner">Raw WebAssembly: OrdinaryDifferentialEquationSystemSolveResult property</p>

```typescript signature
readonly verdict: string
```

Whether the system was solved or declined.

<a id="entry-presentation_wasm_api_ordinarydifferentialequationsystemsolveresult_verification"></a>
<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsystemsolveresult_verification.21b83effc580"></a>
<p class="symi-entry-owner">Raw WebAssembly: OrdinaryDifferentialEquationSystemSolveResult property</p>

```typescript signature
readonly verification: string | undefined
```

The independent verifier's decision on the assignment, when verification ran.

### OrdinaryDifferentialEquationSystemVerificationReport
`verdict`, `generality`, and `required_rank`.

<a id="entry-presentation_wasm_api_ordinarydifferentialequationsystemverificationreport_generality"></a>
<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsystemverificationreport_generality.06f7e5f0bc1b"></a>
<p class="symi-entry-owner">Raw WebAssembly: OrdinaryDifferentialEquationSystemVerificationReport property</p>

```typescript signature
readonly generality: string
```

The rank decision on the map from the supplied constants to the initial jet.

<a id="entry-presentation_wasm_api_ordinarydifferentialequationsystemverificationreport_required_rank"></a>
<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsystemverificationreport_requiredrank.28c5e9d61fa5"></a>
<p class="symi-entry-owner">Raw WebAssembly: OrdinaryDifferentialEquationSystemVerificationReport property</p>

```typescript signature
readonly requiredRank: number
```

The dimension a complete family of the system must span.

<a id="entry-presentation_wasm_api_ordinarydifferentialequationsystemverificationreport_verdict"></a>
<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsystemverificationreport_verdict.ee29fc9bbe84"></a>
<p class="symi-entry-owner">Raw WebAssembly: OrdinaryDifferentialEquationSystemVerificationReport property</p>

```typescript signature
readonly verdict: string
```

The decision on every equation residual and every datum of the supplied assignment.

## Request vocabulary

A request entry names its scope, method, and regularity by one of these values.
Naming a method runs that route only: it declines when the route does not
apply, rather than falling through to another one.

### OrdinaryDifferentialEquationMethod

*Not exposed by the WASM / JavaScript bindings. Available as [`api::OrdinaryDifferentialEquationMethod`](/symi/rust/ordinary-differential-equations#ordinarydifferentialequationmethod) in Rust.*


The route a scalar ordinary differential equation request must take.

Cases: `Automatic`, `LaplaceTransform`.

### OrdinaryDifferentialEquationSystemMethod

*Not exposed by the WASM / JavaScript bindings. Available as [`api::OrdinaryDifferentialEquationSystemMethod`](/symi/rust/ordinary-differential-equations#ordinarydifferentialequationsystemmethod) in Rust.*


The route a system of ordinary differential equations must take.

Cases: `Automatic`, `FundamentalMatrix`, `Sequential`.

### OrdinaryDifferentialEquationRegularity

*Not exposed by the WASM / JavaScript bindings. Available as [`api::OrdinaryDifferentialEquationRegularity`](/symi/rust/ordinary-differential-equations#ordinarydifferentialequationregularity) in Rust.*


The differentiability a scalar ordinary differential equation answer must have.

Cases: `Classical`, `PiecewiseClassical`.

## Outcome vocabulary

A result reports its outcome through these values. `generality` is the rank
decision behind a complete-family claim and is separate from `verification`,
the independent verifier's decision about the solution itself: a solution can
be verified and still not be the general family.

### OrdinaryDifferentialEquationSolveVerdict

*Not exposed by the WASM / JavaScript bindings. Available as [`api::OrdinaryDifferentialEquationSolveVerdict`](/symi/rust/ordinary-differential-equations#ordinarydifferentialequationsolveverdict) in Rust.*


Whether a scalar ordinary differential equation request was solved.

Cases: `Declined`, `Solved`.

### OrdinaryDifferentialEquationSystemRoute

*Not exposed by the WASM / JavaScript bindings. Available as [`api::OrdinaryDifferentialEquationSystemRoute`](/symi/rust/ordinary-differential-equations#ordinarydifferentialequationsystemroute) in Rust.*


The route a solved system of ordinary differential equations actually ran.

Cases: `DependencyBlocks`, `FundamentalMatrix`, `Sequential`.

### OrdinaryDifferentialEquationSolutionForm

*Not exposed by the WASM / JavaScript bindings. Available as [`api::OrdinaryDifferentialEquationSolutionForm`](/symi/rust/ordinary-differential-equations#ordinarydifferentialequationsolutionform) in Rust.*


Whether a returned ordinary differential equation solution gives the unknown or a relation.

Cases: `Explicit`, `Implicit`.

### OrdinaryDifferentialEquationVerificationVerdict

*Not exposed by the WASM / JavaScript bindings. Available as [`api::OrdinaryDifferentialEquationVerificationVerdict`](/symi/rust/ordinary-differential-equations#ordinarydifferentialequationverificationverdict) in Rust.*


The exact decision an independent ordinary differential equation verifier reached.

Cases: `Inconclusive`, `Rejected`, `Verified`.

### OrdinaryDifferentialEquationGeneralityVerdict

*Not exposed by the WASM / JavaScript bindings. Available as [`api::OrdinaryDifferentialEquationGeneralityVerdict`](/symi/rust/ordinary-differential-equations#ordinarydifferentialequationgeneralityverdict) in Rust.*


The exact rank decision behind a complete-family claim.

Cases: `Deficient`, `FullRank`, `Inconclusive`.

## Declines

A request that cannot be met carries one of these reasons instead of a weaker
answer. The reason names the step that did not close, so a decline can be acted
on rather than merely retried.

### OrdinaryDifferentialEquationSolveDecline

*Not exposed by the WASM / JavaScript bindings. Available as [`api::OrdinaryDifferentialEquationSolveDecline`](/symi/rust/ordinary-differential-equations#ordinarydifferentialequationsolvedecline) in Rust.*


Why a scalar ordinary differential equation request produced no certified candidate.

Cases: `AccumulatedOccurrenceNotSupported`, `CandidateNotVerified`, `ConditionsNotFitted`, `DelayFamilyNotAvailable`, `DelayFamilyNotCertified`, `DisplacedOccurrenceNotSupported`, `GeneralFamilyNotEstablished`, `GeneralFamilyRankUndecided`, `NoRouteRecognizedTheEquation`, `SwitchedCoefficientsNotSolved`, `TransformDidNotReachTheFrequencyDomain`, `TransformInversionDeclined`, `TransformRequiresCompleteOriginData`, `TransformRequiresScalarSignature`, `TransformedEquationNotSolvable`, `VolterraEndpointDataIncompatible`, `VolterraEndpointDataMissing`, `VolterraKernelNotSupported`.

### OrdinaryDifferentialEquationSystemSolveDecline

*Not exposed by the WASM / JavaScript bindings. Available as [`api::OrdinaryDifferentialEquationSystemSolveDecline`](/symi/rust/ordinary-differential-equations#ordinarydifferentialequationsystemsolvedecline) in Rust.*


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
