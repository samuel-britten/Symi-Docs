# Ordinary differential equations

An ordinary differential equation relates an unknown function of one variable
to its derivatives. Write the unknown with `undefined_function` and its
derivatives with the `derivative` method on that handle, both documented in
[Undefined functions](undefined-functions.md):



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

<a id="entry-presentation_swift_api_session_solve_ordinary_differential_equation"></a>
<a id="placement-placement.swift.swift_object.uniffisession_solveordinarydifferentialequation.cad98ea962d9"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func solveOrdinaryDifferentialEquation(
    equation: UniffiExpression,
    dependentFunctionCall: UniffiExpression,
    independentVariable: String,
    initialConditions: [UniffiExpressionExpressionTuple]?,
) -> UniffiExpression
```


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

<a id="entry-presentation_swift_api_session_solve_ordinary_differential_equation_request"></a>
<a id="placement-placement.swift.swift_object.uniffisession_solveordinarydifferentialequationrequest.8857696c6519"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func solveOrdinaryDifferentialEquationRequest(
    equation: UniffiExpression,
    dependentFunctionCall: UniffiExpression,
    independentVariable: String,
    scope: UniffiDifferentialEquationSolutionScope,
    conditionResiduals: [UniffiExpression],
    method: UniffiOrdinaryDifferentialEquationMethod,
    regularity: UniffiOrdinaryDifferentialEquationRegularity,
) -> UniffiOrdinaryDifferentialEquationSolveResult
```


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

<a id="entry-presentation_swift_api_session_solve_ordinary_differential_equation_with_particular_solution"></a>
<a id="placement-placement.swift.swift_object.uniffisession_solveordinarydifferentialequationwithparticularsolution.a9d91e602cce"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func solveOrdinaryDifferentialEquationWithParticularSolution(
    equation: UniffiExpression,
    dependentFunctionCall: UniffiExpression,
    independentVariable: String,
    particularSolution: UniffiExpression,
) -> UniffiExpression
```


Riccati-specific entry: with a known particular solution \(y_1\), the
substitution \(y = y_1 + 1/v\) reduces the Riccati equation to a linear
first-order ODE. Falls back to the unevaluated placeholder when the shape is
not Riccati.

### solve_ordinary_differential_equation_with_history

<a id="entry-presentation_swift_api_session_solve_ordinary_differential_equation_with_history"></a>
<a id="placement-placement.swift.swift_object.uniffisession_solveordinarydifferentialequationwithhistory.c81f91692ead"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func solveOrdinaryDifferentialEquationWithHistory(
    equation: UniffiExpression,
    dependentFunctionCall: UniffiExpression,
    independentVariable: String,
    historyValue: UniffiExpression,
    historyStart: UniffiExpression,
    historyEnd: UniffiExpression,
) -> UniffiOrdinaryDifferentialEquationSolveResult
```


Solve a retarded delay ODE from a constant history on the stated interval
`[history_start, history_end]`, which must cover every lag. The interval is
never inferred, so a delay equation cannot acquire a history it was not given.
The supported class is a scalar first-order linear equation with constant lags
and constant history; it is answered by an exact method-of-steps family valid
for every time, certified by induction on the step index. One history is one
solution, so the request is particular.

## Solving a system

### solve_ordinary_differential_equation_system_request

<a id="entry-presentation_swift_api_session_solve_ordinary_differential_equation_system_request"></a>
<a id="placement-placement.swift.swift_object.uniffisession_solveordinarydifferentialequationsystemrequest.679e85c7d64a"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func solveOrdinaryDifferentialEquationSystemRequest(
    equations: [UniffiExpression],
    dependentFunctionCalls: [UniffiExpression],
    independentVariable: String,
    conditionResiduals: [UniffiExpression],
    method: UniffiOrdinaryDifferentialEquationSystemMethod,
) -> UniffiOrdinaryDifferentialEquationSystemSolveResult
```


Solve a system of ODEs in one coordinate, one equation per declared unknown.
Each condition residual states one datum on exactly one component.
`method` is `automatic`, `sequential` (scalar requests solved one at a time,
each with its own fresh integration datum; declines when no elimination order
exists), or `fundamental_matrix` (the coupled route through a certified
fundamental matrix of the first-order state form). Every returned assignment is
verified against every equation and datum.

## Verifying a supplied solution

### verify_ordinary_differential_equation_system_solution

<a id="entry-presentation_swift_api_session_verify_ordinary_differential_equation_system_solution"></a>
<a id="placement-placement.swift.swift_object.uniffisession_verifyordinarydifferentialequationsystemsolution.ce4739e5761d"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func verifyOrdinaryDifferentialEquationSystemSolution(
    equations: [UniffiExpression],
    dependentFunctionCalls: [UniffiExpression],
    independentVariable: String,
    components: [UniffiExpression],
    generatedConstants: [UniffiExpression],
    conditionResiduals: [UniffiExpression],
) -> UniffiOrdinaryDifferentialEquationSystemVerificationReport
```


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

<a id="entry-presentation_swift_api_ordinarydifferentialequationsolveresult_decline"></a>
<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsolveresult_decline.7fc8dae94615"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSolveResult method</p>

```swift signature
func decline() -> UniffiOrdinaryDifferentialEquationSolveDecline?
```

The typed reason no certified candidate was produced.

<a id="entry-presentation_swift_api_ordinarydifferentialequationsolveresult_form"></a>
<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsolveresult_form.e26ff097e5db"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSolveResult method</p>

```swift signature
func form() -> UniffiOrdinaryDifferentialEquationSolutionForm?
```

Whether the solution is the value of the unknown or a relation read as zero.

<a id="entry-presentation_swift_api_ordinarydifferentialequationsolveresult_frequency_domain_equation"></a>
<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsolveresult_frequencydomainequation.90969cddd80a"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSolveResult method</p>

```swift signature
func frequencyDomainEquation() -> UniffiExpression?
```

The frequency-domain equation of a Laplace transform solution, read as zero.

<a id="entry-presentation_swift_api_ordinarydifferentialequationsolveresult_generality"></a>
<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsolveresult_generality.4e08359261dd"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSolveResult method</p>

```swift signature
func generality() -> UniffiOrdinaryDifferentialEquationGeneralityVerdict?
```

The rank decision behind a complete-family claim, when the request required one.

<a id="entry-presentation_swift_api_ordinarydifferentialequationsolveresult_generated_constants"></a>
<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsolveresult_generatedconstants.80c0ae97cab9"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSolveResult method</p>

```swift signature
func generatedConstants() -> [UniffiExpression]
```

Exactly the constants the solution treats as free.

<a id="entry-presentation_swift_api_ordinarydifferentialequationsolveresult_image"></a>
<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsolveresult_image.271c4e1715b5"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSolveResult method</p>

```swift signature
func image() -> UniffiExpression?
```

The image of the unknown a Laplace transform solution solved for.

<a id="entry-presentation_swift_api_ordinarydifferentialequationsolveresult_method"></a>
<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsolveresult_method.9769ce64ef1e"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSolveResult method</p>

```swift signature
func method() -> UniffiOrdinaryDifferentialEquationMethod
```

The method the request actually ran.

<a id="entry-presentation_swift_api_ordinarydifferentialequationsolveresult_solution"></a>
<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsolveresult_solution.3c2cdbe4b260"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSolveResult method</p>

```swift signature
func solution() -> UniffiExpression?
```

The certified solution, which no declined request carries.

<a id="entry-presentation_swift_api_ordinarydifferentialequationsolveresult_verdict"></a>
<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsolveresult_verdict.81cb94d2d66c"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSolveResult method</p>

```swift signature
func verdict() -> UniffiOrdinaryDifferentialEquationSolveVerdict
```

Whether the request was solved or declined.

<a id="entry-presentation_swift_api_ordinarydifferentialequationsolveresult_verification"></a>
<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsolveresult_verification.cb32d6774cc3"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSolveResult method</p>

```swift signature
func verification() -> UniffiOrdinaryDifferentialEquationVerificationVerdict?
```

The independent verifier's decision on the candidate, when verification ran.

### OrdinaryDifferentialEquationSystemSolveResult
`verdict`, `method`, `route` (`sequential`, `fundamental_matrix`, or
`dependency_blocks`), `components` in declaration order, `generated_constants`,
`verification`, `generality`, and `decline`.

<a id="entry-presentation_swift_api_ordinarydifferentialequationsystemsolveresult_components"></a>
<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsystemsolveresult_components.6f4a994b1287"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSystemSolveResult method</p>

```swift signature
func components() -> [UniffiExpression]
```

One explicit value per declared unknown, in declaration order, when solved.

<a id="entry-presentation_swift_api_ordinarydifferentialequationsystemsolveresult_decline"></a>
<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsystemsolveresult_decline.501e319777e8"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSystemSolveResult method</p>

```swift signature
func decline() -> UniffiOrdinaryDifferentialEquationSystemSolveDecline?
```

The typed reason no certified assignment was produced.

<a id="entry-presentation_swift_api_ordinarydifferentialequationsystemsolveresult_generality"></a>
<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsystemsolveresult_generality.821666cd0fd2"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSystemSolveResult method</p>

```swift signature
func generality() -> UniffiOrdinaryDifferentialEquationGeneralityVerdict?
```

The rank decision on the constants-to-initial-jet map, when verification ran.

<a id="entry-presentation_swift_api_ordinarydifferentialequationsystemsolveresult_generated_constants"></a>
<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsystemsolveresult_generatedconstants.2c6c8993ba19"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSystemSolveResult method</p>

```swift signature
func generatedConstants() -> [UniffiExpression]
```

Exactly the constants the assignment treats as free.

<a id="entry-presentation_swift_api_ordinarydifferentialequationsystemsolveresult_method"></a>
<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsystemsolveresult_method.17db00cad874"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSystemSolveResult method</p>

```swift signature
func method() -> UniffiOrdinaryDifferentialEquationSystemMethod
```

The method the system request actually ran.

<a id="entry-presentation_swift_api_ordinarydifferentialequationsystemsolveresult_route"></a>
<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsystemsolveresult_route.66d2847e769e"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSystemSolveResult method</p>

```swift signature
func route() -> UniffiOrdinaryDifferentialEquationSystemRoute?
```

The route the certified assignment came from.

<a id="entry-presentation_swift_api_ordinarydifferentialequationsystemsolveresult_verdict"></a>
<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsystemsolveresult_verdict.117302a57408"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSystemSolveResult method</p>

```swift signature
func verdict() -> UniffiOrdinaryDifferentialEquationSolveVerdict
```

Whether the system was solved or declined.

<a id="entry-presentation_swift_api_ordinarydifferentialequationsystemsolveresult_verification"></a>
<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsystemsolveresult_verification.8e43cdf46416"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSystemSolveResult method</p>

```swift signature
func verification() -> UniffiOrdinaryDifferentialEquationVerificationVerdict?
```

The independent verifier's decision on the assignment, when verification ran.

### OrdinaryDifferentialEquationSystemVerificationReport
`verdict`, `generality`, and `required_rank`.

<a id="entry-presentation_swift_api_ordinarydifferentialequationsystemverificationreport_generality"></a>
<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsystemverificationreport_generality.80fcf261d1af"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSystemVerificationReport method</p>

```swift signature
func generality() -> UniffiOrdinaryDifferentialEquationGeneralityVerdict
```

The rank decision on the map from the supplied constants to the initial jet.

<a id="entry-presentation_swift_api_ordinarydifferentialequationsystemverificationreport_required_rank"></a>
<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsystemverificationreport_requiredrank.265c29b5d9a0"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSystemVerificationReport method</p>

```swift signature
func requiredRank() -> UInt64
```

The dimension a complete family of the system must span.

<a id="entry-presentation_swift_api_ordinarydifferentialequationsystemverificationreport_verdict"></a>
<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsystemverificationreport_verdict.7c5ee7f5ddca"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSystemVerificationReport method</p>

```swift signature
func verdict() -> UniffiOrdinaryDifferentialEquationVerificationVerdict
```

The decision on every equation residual and every datum of the supplied assignment.

## Request vocabulary

A request entry names its scope, method, and regularity by one of these values.
Naming a method runs that route only: it declines when the route does not
apply, rather than falling through to another one.

### OrdinaryDifferentialEquationMethod

*Not exposed by the Swift bindings. Available as [`api::OrdinaryDifferentialEquationMethod`](/symi/rust/ordinary-differential-equations#ordinarydifferentialequationmethod) in Rust.*


The route a scalar ordinary differential equation request must take.

Cases: `Automatic`, `LaplaceTransform`.

### OrdinaryDifferentialEquationSystemMethod

*Not exposed by the Swift bindings. Available as [`api::OrdinaryDifferentialEquationSystemMethod`](/symi/rust/ordinary-differential-equations#ordinarydifferentialequationsystemmethod) in Rust.*


The route a system of ordinary differential equations must take.

Cases: `Automatic`, `FundamentalMatrix`, `Sequential`.

### OrdinaryDifferentialEquationRegularity

*Not exposed by the Swift bindings. Available as [`api::OrdinaryDifferentialEquationRegularity`](/symi/rust/ordinary-differential-equations#ordinarydifferentialequationregularity) in Rust.*


The differentiability a scalar ordinary differential equation answer must have.

Cases: `Classical`, `PiecewiseClassical`.

## Outcome vocabulary

A result reports its outcome through these values. `generality` is the rank
decision behind a complete-family claim and is separate from `verification`,
the independent verifier's decision about the solution itself: a solution can
be verified and still not be the general family.

### OrdinaryDifferentialEquationSolveVerdict

*Not exposed by the Swift bindings. Available as [`api::OrdinaryDifferentialEquationSolveVerdict`](/symi/rust/ordinary-differential-equations#ordinarydifferentialequationsolveverdict) in Rust.*


Whether a scalar ordinary differential equation request was solved.

Cases: `Declined`, `Solved`.

### OrdinaryDifferentialEquationSystemRoute

*Not exposed by the Swift bindings. Available as [`api::OrdinaryDifferentialEquationSystemRoute`](/symi/rust/ordinary-differential-equations#ordinarydifferentialequationsystemroute) in Rust.*


The route a solved system of ordinary differential equations actually ran.

Cases: `DependencyBlocks`, `FundamentalMatrix`, `Sequential`.

### OrdinaryDifferentialEquationSolutionForm

*Not exposed by the Swift bindings. Available as [`api::OrdinaryDifferentialEquationSolutionForm`](/symi/rust/ordinary-differential-equations#ordinarydifferentialequationsolutionform) in Rust.*


Whether a returned ordinary differential equation solution gives the unknown or a relation.

Cases: `Explicit`, `Implicit`.

### OrdinaryDifferentialEquationVerificationVerdict

*Not exposed by the Swift bindings. Available as [`api::OrdinaryDifferentialEquationVerificationVerdict`](/symi/rust/ordinary-differential-equations#ordinarydifferentialequationverificationverdict) in Rust.*


The exact decision an independent ordinary differential equation verifier reached.

Cases: `Inconclusive`, `Rejected`, `Verified`.

### OrdinaryDifferentialEquationGeneralityVerdict

*Not exposed by the Swift bindings. Available as [`api::OrdinaryDifferentialEquationGeneralityVerdict`](/symi/rust/ordinary-differential-equations#ordinarydifferentialequationgeneralityverdict) in Rust.*


The exact rank decision behind a complete-family claim.

Cases: `Deficient`, `FullRank`, `Inconclusive`.

## Declines

A request that cannot be met carries one of these reasons instead of a weaker
answer. The reason names the step that did not close, so a decline can be acted
on rather than merely retried.

### OrdinaryDifferentialEquationSolveDecline

*Not exposed by the Swift bindings. Available as [`api::OrdinaryDifferentialEquationSolveDecline`](/symi/rust/ordinary-differential-equations#ordinarydifferentialequationsolvedecline) in Rust.*


Why a scalar ordinary differential equation request produced no certified candidate.

Cases: `AccumulatedOccurrenceNotSupported`, `CandidateNotVerified`, `ConditionsNotFitted`, `DelayFamilyNotAvailable`, `DelayFamilyNotCertified`, `DisplacedOccurrenceNotSupported`, `GeneralFamilyNotEstablished`, `GeneralFamilyRankUndecided`, `NoRouteRecognizedTheEquation`, `SwitchedCoefficientsNotSolved`, `TransformDidNotReachTheFrequencyDomain`, `TransformInversionDeclined`, `TransformRequiresCompleteOriginData`, `TransformRequiresScalarSignature`, `TransformedEquationNotSolvable`, `VolterraEndpointDataIncompatible`, `VolterraEndpointDataMissing`, `VolterraKernelNotSupported`.

### OrdinaryDifferentialEquationSystemSolveDecline

*Not exposed by the Swift bindings. Available as [`api::OrdinaryDifferentialEquationSystemSolveDecline`](/symi/rust/ordinary-differential-equations#ordinarydifferentialequationsystemsolvedecline) in Rust.*


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
