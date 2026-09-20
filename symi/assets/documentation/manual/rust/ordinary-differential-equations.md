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

<a id="entry-presentation_rust_api_session_solve_ordinary_differential_equation"></a>
<a id="placement-placement.rust.native_rust.api_solving_session_solve_ordinary_differential_equation.cb49c577c3d6"></a>
<p class="symi-entry-owner">api::solving::Session method</p>

```rust signature
pub fn solve_ordinary_differential_equation<'a, VariableType>(
    &self,
    equation: &Expression,
    dependent_function_call: &Expression,
    independent_variable: VariableType,
    initial_conditions: Option<&[(Expression, Expression)]>,
) -> Result<Expression, ApiError>
where
    VariableType: Into<VariableLike<'a>>,
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

<a id="entry-presentation_rust_api_session_solve_ordinary_differential_equation_request"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_session_solve_ordinary_differential_equation_request.19c753e87898"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::Session method</p>

```rust signature
pub fn solve_ordinary_differential_equation_request<'a, VariableType>(
    &self,
    equation: &Expression,
    dependent_function_call: &Expression,
    independent_variable: VariableType,
    scope: DifferentialEquationSolutionScope,
    condition_residuals: &[Expression],
    method: OrdinaryDifferentialEquationMethod,
    regularity: OrdinaryDifferentialEquationRegularity,
) -> Result<OrdinaryDifferentialEquationSolveResult, ApiError>
where
    VariableType: Into<VariableLike<'a>>,
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

<a id="entry-presentation_rust_api_session_solve_ordinary_differential_equation_with_particular_solution"></a>
<a id="placement-placement.rust.native_rust.api_solving_session_solve_ordinary_differential_equation_with_particular_solution.4fd9a06c9dd9"></a>
<p class="symi-entry-owner">api::solving::Session method</p>

```rust signature
pub fn solve_ordinary_differential_equation_with_particular_solution<'a, VariableType>(
    &self,
    equation: &Expression,
    dependent_function_call: &Expression,
    independent_variable: VariableType,
    particular_solution: &Expression,
) -> Result<Expression, ApiError>
where
    VariableType: Into<VariableLike<'a>>,
```


Riccati-specific entry: with a known particular solution \(y_1\), the
substitution \(y = y_1 + 1/v\) reduces the Riccati equation to a linear
first-order ODE. Falls back to the unevaluated placeholder when the shape is
not Riccati.

### solve_ordinary_differential_equation_with_history

<a id="entry-presentation_rust_api_session_solve_ordinary_differential_equation_with_history"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_session_solve_ordinary_differential_equation_with_history.7143acaddad1"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::Session method</p>

```rust signature
pub fn solve_ordinary_differential_equation_with_history<'a, VariableType>(
    &self,
    equation: &Expression,
    dependent_function_call: &Expression,
    independent_variable: VariableType,
    history_value: &Expression,
    history_start: &Expression,
    history_end: &Expression,
) -> Result<OrdinaryDifferentialEquationSolveResult, ApiError>
where
    VariableType: Into<VariableLike<'a>>,
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

<a id="entry-presentation_rust_api_session_solve_ordinary_differential_equation_system_request"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_session_solve_ordinary_differential_equation_system_request.d56586578cd1"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::Session method</p>

```rust signature
pub fn solve_ordinary_differential_equation_system_request<'a, VariableType>(
    &self,
    equations: &[Expression],
    dependent_function_calls: &[Expression],
    independent_variable: VariableType,
    condition_residuals: &[Expression],
    method: OrdinaryDifferentialEquationSystemMethod,
) -> Result<OrdinaryDifferentialEquationSystemSolveResult, ApiError>
where
    VariableType: Into<VariableLike<'a>>,
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

<a id="entry-presentation_rust_api_session_verify_ordinary_differential_equation_system_solution"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_session_verify_ordinary_differential_equation_system_solution.5711aa94fff5"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::Session method</p>

```rust signature
pub fn verify_ordinary_differential_equation_system_solution<'a, VariableType>(
    &self,
    equations: &[Expression],
    dependent_function_calls: &[Expression],
    independent_variable: VariableType,
    components: &[Expression],
    generated_constants: &[Expression],
    condition_residuals: &[Expression],
) -> Result<OrdinaryDifferentialEquationSystemVerificationReport, ApiError>
where
    VariableType: Into<VariableLike<'a>>,
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

<a id="entry-presentation_rust_api_ordinarydifferentialequationsolveresult"></a>
<a id="placement-placement.rust.native_rust.api_ordinarydifferentialequationsolveresult.27829b1f77dc"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use ordinary_differential_equations::OrdinaryDifferentialEquationSolveResult;
```

A scalar ordinary differential equation outcome that keeps the evidence behind its answer.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolveresult.5a59293dfb16"></a>
<p class="symi-entry-owner">Type: <code>api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveResult</code></p>

```rust signature
pub struct OrdinaryDifferentialEquationSolveResult
```

</details>

<a id="entry-presentation_rust_api_ordinarydifferentialequationsolveresult_decline"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_decline.cfda67cbfcd6"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveResult method</p>

```rust signature
pub fn decline(
    &self,
) -> Option<OrdinaryDifferentialEquationSolveDecline>
```

Returns the typed reason no certified candidate was produced.

<a id="entry-presentation_rust_api_ordinarydifferentialequationsolveresult_form"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_form.ff1a220bcc6d"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveResult method</p>

```rust signature
pub fn form(&self) -> Option<OrdinaryDifferentialEquationSolutionForm>
```

Returns whether the solution is the value of the unknown or a relation equal to zero.

<a id="entry-presentation_rust_api_ordinarydifferentialequationsolveresult_frequency_domain_equation"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_frequency_domain_equation.e9b8d505136f"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveResult method</p>

```rust signature
pub fn frequency_domain_equation(&self) -> Option<Expression>
```

Returns the frequency-domain equation of a Laplace transform solution, read as zero.

<a id="entry-presentation_rust_api_ordinarydifferentialequationsolveresult_generality"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_generality.80070a59f54e"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveResult method</p>

```rust signature
pub fn generality(
    &self,
) -> Option<OrdinaryDifferentialEquationGeneralityVerdict>
```

Returns the rank decision behind a complete-family claim, when the request required one.

<a id="entry-presentation_rust_api_ordinarydifferentialequationsolveresult_generated_constants"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_generated_constants.afb0e278f65d"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveResult method</p>

```rust signature
pub fn generated_constants(&self) -> Vec<Expression>
```

Returns exactly the constants the solution treats as free.

<a id="entry-presentation_rust_api_ordinarydifferentialequationsolveresult_image"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_image.e206a0f982f7"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveResult method</p>

```rust signature
pub fn image(&self) -> Option<Expression>
```

Returns the image of the unknown a Laplace transform solution solved for.

<a id="entry-presentation_rust_api_ordinarydifferentialequationsolveresult_method"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_method.515cb2bf6195"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveResult method</p>

```rust signature
pub fn method(&self) -> OrdinaryDifferentialEquationMethod
```

Returns the method the request actually ran.

<a id="entry-presentation_rust_api_ordinarydifferentialequationsolveresult_solution"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_solution.c5fafb37ab2b"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveResult method</p>

```rust signature
pub fn solution(&self) -> Option<Expression>
```

Returns the certified solution expression, which no declined request carries.

<a id="entry-presentation_rust_api_ordinarydifferentialequationsolveresult_verdict"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_verdict.ad770dd183d8"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveResult method</p>

```rust signature
pub fn verdict(&self) -> OrdinaryDifferentialEquationSolveVerdict
```

Returns whether the request was solved or declined.

<a id="entry-presentation_rust_api_ordinarydifferentialequationsolveresult_verification"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_verification.c3501e58ad3e"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveResult method</p>

```rust signature
pub fn verification(
    &self,
) -> Option<OrdinaryDifferentialEquationVerificationVerdict>
```

Returns the independent verifier's decision on the candidate, when verification ran.

### OrdinaryDifferentialEquationSystemSolveResult
`verdict`, `method`, `route` (`sequential`, `fundamental_matrix`, or
`dependency_blocks`), `components` in declaration order, `generated_constants`,
`verification`, `generality`, and `decline`.

<a id="entry-presentation_rust_api_ordinarydifferentialequationsystemsolveresult"></a>
<a id="placement-placement.rust.native_rust.api_ordinarydifferentialequationsystemsolveresult.ee4952621424"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveResult;
```

A system of ordinary differential equations outcome that keeps the evidence behind its answer.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult.57c9f9e84fc2"></a>
<p class="symi-entry-owner">Type: <code>api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveResult</code></p>

```rust signature
pub struct OrdinaryDifferentialEquationSystemSolveResult
```

</details>

<a id="entry-presentation_rust_api_ordinarydifferentialequationsystemsolveresult_components"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_components.a2cc038c1a89"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveResult method</p>

```rust signature
pub fn components(&self) -> Vec<Expression>
```

Returns one explicit value per declared unknown, in declaration order, when solved.

<a id="entry-presentation_rust_api_ordinarydifferentialequationsystemsolveresult_decline"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_decline.92acc8d04a31"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveResult method</p>

```rust signature
pub fn decline(
    &self,
) -> Option<OrdinaryDifferentialEquationSystemSolveDecline>
```

Returns the typed reason no certified assignment was produced.

<a id="entry-presentation_rust_api_ordinarydifferentialequationsystemsolveresult_generality"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_generality.f69fe7509812"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveResult method</p>

```rust signature
pub fn generality(
    &self,
) -> Option<OrdinaryDifferentialEquationGeneralityVerdict>
```

Returns the rank decision on the constants-to-initial-jet map, when verification ran.

<a id="entry-presentation_rust_api_ordinarydifferentialequationsystemsolveresult_generated_constants"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_generated_constants.2039662fe54b"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveResult method</p>

```rust signature
pub fn generated_constants(&self) -> Vec<Expression>
```

Returns exactly the constants the assignment treats as free.

<a id="entry-presentation_rust_api_ordinarydifferentialequationsystemsolveresult_method"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_method.aaa17853183c"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveResult method</p>

```rust signature
pub fn method(&self) -> OrdinaryDifferentialEquationSystemMethod
```

Returns the method the request actually ran.

<a id="entry-presentation_rust_api_ordinarydifferentialequationsystemsolveresult_route"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_route.ac7473fa22e8"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveResult method</p>

```rust signature
pub fn route(&self) -> Option<OrdinaryDifferentialEquationSystemRoute>
```

Returns the route the certified assignment came from.

<a id="entry-presentation_rust_api_ordinarydifferentialequationsystemsolveresult_verdict"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_verdict.c2f53c117307"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveResult method</p>

```rust signature
pub fn verdict(&self) -> OrdinaryDifferentialEquationSolveVerdict
```

Returns whether the system was solved or declined.

<a id="entry-presentation_rust_api_ordinarydifferentialequationsystemsolveresult_verification"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_verification.130b6dbdde8e"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveResult method</p>

```rust signature
pub fn verification(
    &self,
) -> Option<OrdinaryDifferentialEquationVerificationVerdict>
```

Returns the independent verifier's decision on the assignment, when verification ran.

### OrdinaryDifferentialEquationSystemVerificationReport
`verdict`, `generality`, and `required_rank`.

<a id="entry-presentation_rust_api_ordinarydifferentialequationsystemverificationreport"></a>
<a id="placement-placement.rust.native_rust.api_ordinarydifferentialequationsystemverificationreport.ba8db9cddd3f"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use ordinary_differential_equations::OrdinaryDifferentialEquationSystemVerificationReport;
```

Independent exact evidence about a supplied assignment for a system of ordinary differential equations.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemverificationreport.fb0f2ca8738b"></a>
<p class="symi-entry-owner">Type: <code>api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemVerificationReport</code></p>

```rust signature
pub struct OrdinaryDifferentialEquationSystemVerificationReport
```

</details>

<a id="entry-presentation_rust_api_ordinarydifferentialequationsystemverificationreport_generality"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemverificationreport_generality.935dc6a6df27"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemVerificationReport method</p>

```rust signature
pub fn generality(
    &self,
) -> OrdinaryDifferentialEquationGeneralityVerdict
```

Returns the rank decision on the map from the constants to the initial jet.

<a id="entry-presentation_rust_api_ordinarydifferentialequationsystemverificationreport_required_rank"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemverificationreport_required_rank.b031b3cd46b7"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemVerificationReport method</p>

```rust signature
pub fn required_rank(&self) -> usize
```

Returns the dimension a complete family of the system must span.

<a id="entry-presentation_rust_api_ordinarydifferentialequationsystemverificationreport_verdict"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemverificationreport_verdict.0244ad1caf67"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemVerificationReport method</p>

```rust signature
pub fn verdict(&self) -> OrdinaryDifferentialEquationVerificationVerdict
```

Returns the decision on every equation residual and every datum.

## Request vocabulary

A request entry names its scope, method, and regularity by one of these values.
Naming a method runs that route only: it declines when the route does not
apply, rather than falling through to another one.

### OrdinaryDifferentialEquationMethod

The route a scalar ordinary differential equation request must take.

Cases: `Automatic`, `LaplaceTransform`.

<a id="entry-presentation_rust_api_ordinarydifferentialequationmethod_automatic"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationmethod_automatic.b30c589319a8"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationMethod variant</p>

```rust signature
Automatic,
```

Lets the classification ladder choose any route it can certify.

<a id="entry-presentation_rust_api_ordinarydifferentialequationmethod_laplacetransform"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationmethod_laplacetransform.fcf7addbfb15"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationMethod variant</p>

```rust signature
LaplaceTransform,
```

Requires the Laplace transform composition and declines when it does not apply.

<a id="entry-presentation_rust_api_ordinarydifferentialequationmethod"></a>
<a id="placement-placement.rust.native_rust.api_ordinarydifferentialequationmethod.f77be30e55a1"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use ordinary_differential_equations::OrdinaryDifferentialEquationMethod;
```

The route a scalar ordinary differential equation request must take.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationmethod.321d5f690dc2"></a>
<p class="symi-entry-owner">Type: <code>api::ordinary_differential_equations::OrdinaryDifferentialEquationMethod</code></p>

```rust signature
pub enum OrdinaryDifferentialEquationMethod
```

</details>

<a id="entry-presentation_rust_api_ordinarydifferentialequationmethod_from_name"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationmethod_from_name.bbf0326541ef"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationMethod method</p>

```rust signature
pub fn from_name(name: &str) -> Result<Self, ApiError>
```

Validates one stable lowercase host spelling.

<a id="entry-presentation_rust_api_ordinarydifferentialequationmethod_name"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationmethod_name.e612cbbc3432"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationMethod method</p>

```rust signature
pub fn name(self) -> &'static str
```

Returns the stable lowercase binding spelling.

### OrdinaryDifferentialEquationSystemMethod

The route a system of ordinary differential equations must take.

Cases: `Automatic`, `FundamentalMatrix`, `Sequential`.

<a id="entry-presentation_rust_api_ordinarydifferentialequationsystemmethod_automatic"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemmethod_automatic.40d247fbd2e4"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemMethod variant</p>

```rust signature
Automatic,
```

Lets the dispatcher choose any route it can certify.

<a id="entry-presentation_rust_api_ordinarydifferentialequationsystemmethod_fundamentalmatrix"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemmethod_fundamentalmatrix.6cf114159bc5"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemMethod variant</p>

```rust signature
FundamentalMatrix,
```

Requires the coupled route through a certified fundamental matrix of the state form.

<a id="entry-presentation_rust_api_ordinarydifferentialequationsystemmethod"></a>
<a id="placement-placement.rust.native_rust.api_ordinarydifferentialequationsystemmethod.3053234e93b0"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use ordinary_differential_equations::OrdinaryDifferentialEquationSystemMethod;
```

The route a system of ordinary differential equations must take.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemmethod.12281da804cb"></a>
<p class="symi-entry-owner">Type: <code>api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemMethod</code></p>

```rust signature
pub enum OrdinaryDifferentialEquationSystemMethod
```

</details>

<a id="entry-presentation_rust_api_ordinarydifferentialequationsystemmethod_sequential"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemmethod_sequential.c7dd9aa34958"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemMethod variant</p>

```rust signature
Sequential,
```

Requires scalar requests solved one at a time, each with its own fresh integration datum.

<a id="entry-presentation_rust_api_ordinarydifferentialequationsystemmethod_from_name"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemmethod_from_name.9dd28a30c61e"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemMethod method</p>

```rust signature
pub fn from_name(name: &str) -> Result<Self, ApiError>
```

Validates one stable lowercase host spelling.

<a id="entry-presentation_rust_api_ordinarydifferentialequationsystemmethod_name"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemmethod_name.d315f5ca90e2"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemMethod method</p>

```rust signature
pub fn name(self) -> &'static str
```

Returns the stable lowercase binding spelling.

### OrdinaryDifferentialEquationRegularity

The differentiability a scalar ordinary differential equation answer must have.

Cases: `Classical`, `PiecewiseClassical`.

<a id="entry-presentation_rust_api_ordinarydifferentialequationregularity_classical"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationregularity_classical.dc27dfcf3c6e"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationRegularity variant</p>

```rust signature
Classical,
```

Classically differentiable to the order of the equation throughout.

<a id="entry-presentation_rust_api_ordinarydifferentialequationregularity"></a>
<a id="placement-placement.rust.native_rust.api_ordinarydifferentialequationregularity.ab1013672e36"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use ordinary_differential_equations::OrdinaryDifferentialEquationRegularity;
```

The differentiability a scalar ordinary differential equation answer must have.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationregularity.7235b2896423"></a>
<p class="symi-entry-owner">Type: <code>api::ordinary_differential_equations::OrdinaryDifferentialEquationRegularity</code></p>

```rust signature
pub enum OrdinaryDifferentialEquationRegularity
```

</details>

<a id="entry-presentation_rust_api_ordinarydifferentialequationregularity_piecewiseclassical"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationregularity_piecewiseclassical.755297d1f61a"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationRegularity variant</p>

```rust signature
PiecewiseClassical,
```

Classical on each side of a coefficient switch and matched across it, so the answer solves the equation away from the switch and in the weak sense at it.

<a id="entry-presentation_rust_api_ordinarydifferentialequationregularity_from_name"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationregularity_from_name.6d59418b38d5"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationRegularity method</p>

```rust signature
pub fn from_name(name: &str) -> Result<Self, ApiError>
```

Validates one stable lowercase host spelling.

<a id="entry-presentation_rust_api_ordinarydifferentialequationregularity_name"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationregularity_name.f5e9c20ca64b"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationRegularity method</p>

```rust signature
pub fn name(self) -> &'static str
```

Returns the stable lowercase binding spelling.

## Outcome vocabulary

A result reports its outcome through these values. `generality` is the rank
decision behind a complete-family claim and is separate from `verification`,
the independent verifier's decision about the solution itself: a solution can
be verified and still not be the general family.

### OrdinaryDifferentialEquationSolveVerdict

Whether a scalar ordinary differential equation request was solved.

Cases: `Declined`, `Solved`.

<a id="entry-presentation_rust_api_ordinarydifferentialequationsolveverdict_declined"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolveverdict_declined.3e435f7a698d"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveVerdict variant</p>

```rust signature
Declined,
```

No certified candidate was produced.

<a id="entry-presentation_rust_api_ordinarydifferentialequationsolveverdict"></a>
<a id="placement-placement.rust.native_rust.api_ordinarydifferentialequationsolveverdict.a774d454dba7"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use ordinary_differential_equations::OrdinaryDifferentialEquationSolveVerdict;
```

Whether a scalar ordinary differential equation request was solved.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolveverdict.3c2cf5c9c482"></a>
<p class="symi-entry-owner">Type: <code>api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveVerdict</code></p>

```rust signature
pub enum OrdinaryDifferentialEquationSolveVerdict
```

</details>

<a id="entry-presentation_rust_api_ordinarydifferentialequationsolveverdict_solved"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolveverdict_solved.bd289a7877a5"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveVerdict variant</p>

```rust signature
Solved,
```

A candidate was produced and independently verified against the request.

<a id="entry-presentation_rust_api_ordinarydifferentialequationsolveverdict_name"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolveverdict_name.b3e03d37c2c0"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveVerdict method</p>

```rust signature
pub fn name(self) -> &'static str
```

Returns the stable lowercase binding spelling.

### OrdinaryDifferentialEquationSystemRoute

The route a solved system of ordinary differential equations actually ran.

Cases: `DependencyBlocks`, `FundamentalMatrix`, `Sequential`.

<a id="entry-presentation_rust_api_ordinarydifferentialequationsystemroute_dependencyblocks"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemroute_dependencyblocks.6ba61a19884c"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemRoute variant</p>

```rust signature
DependencyBlocks,
```

The system was split into dependency blocks, each solved through its fitting route.

<a id="entry-presentation_rust_api_ordinarydifferentialequationsystemroute_fundamentalmatrix"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemroute_fundamentalmatrix.aef6001db575"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemRoute variant</p>

```rust signature
FundamentalMatrix,
```

The system was solved through the certified fundamental matrix of its state form.

<a id="entry-presentation_rust_api_ordinarydifferentialequationsystemroute"></a>
<a id="placement-placement.rust.native_rust.api_ordinarydifferentialequationsystemroute.c94b7c719c33"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use ordinary_differential_equations::OrdinaryDifferentialEquationSystemRoute;
```

The route a solved system of ordinary differential equations actually ran.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemroute.c500ade1be07"></a>
<p class="symi-entry-owner">Type: <code>api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemRoute</code></p>

```rust signature
pub enum OrdinaryDifferentialEquationSystemRoute
```

</details>

<a id="entry-presentation_rust_api_ordinarydifferentialequationsystemroute_sequential"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemroute_sequential.57400d958a4a"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemRoute variant</p>

```rust signature
Sequential,
```

The system was reduced to scalar requests solved in an elimination order.

<a id="entry-presentation_rust_api_ordinarydifferentialequationsystemroute_name"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemroute_name.dada940b6d44"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemRoute method</p>

```rust signature
pub fn name(self) -> &'static str
```

Returns the stable lowercase binding spelling.

### OrdinaryDifferentialEquationSolutionForm

Whether a returned ordinary differential equation solution gives the unknown or a relation.

Cases: `Explicit`, `Implicit`.

<a id="entry-presentation_rust_api_ordinarydifferentialequationsolutionform_explicit"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolutionform_explicit.4b91f2707469"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolutionForm variant</p>

```rust signature
Explicit,
```

The solution expression is the value of the unknown function.

<a id="entry-presentation_rust_api_ordinarydifferentialequationsolutionform_implicit"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolutionform_implicit.ee0d83b8817f"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolutionForm variant</p>

```rust signature
Implicit,
```

The solution expression is a relation read as equal to zero.

<a id="entry-presentation_rust_api_ordinarydifferentialequationsolutionform"></a>
<a id="placement-placement.rust.native_rust.api_ordinarydifferentialequationsolutionform.66825351f463"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use ordinary_differential_equations::OrdinaryDifferentialEquationSolutionForm;
```

Whether a returned ordinary differential equation solution gives the unknown or a relation.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolutionform.b5eec4ffd453"></a>
<p class="symi-entry-owner">Type: <code>api::ordinary_differential_equations::OrdinaryDifferentialEquationSolutionForm</code></p>

```rust signature
pub enum OrdinaryDifferentialEquationSolutionForm
```

</details>

<a id="entry-presentation_rust_api_ordinarydifferentialequationsolutionform_name"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolutionform_name.c6d0d2c0ffc0"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolutionForm method</p>

```rust signature
pub fn name(self) -> &'static str
```

Returns the stable lowercase binding spelling.

### OrdinaryDifferentialEquationVerificationVerdict

The exact decision an independent ordinary differential equation verifier reached.

Cases: `Inconclusive`, `Rejected`, `Verified`.

<a id="entry-presentation_rust_api_ordinarydifferentialequationverificationverdict_inconclusive"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationverificationverdict_inconclusive.765ed001e56f"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationVerificationVerdict variant</p>

```rust signature
Inconclusive,
```

A residual or datum could not be decided exactly.

<a id="entry-presentation_rust_api_ordinarydifferentialequationverificationverdict"></a>
<a id="placement-placement.rust.native_rust.api_ordinarydifferentialequationverificationverdict.077b7b545f63"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use ordinary_differential_equations::OrdinaryDifferentialEquationVerificationVerdict;
```

The exact decision an independent ordinary differential equation verifier reached.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationverificationverdict.dca6b46825a4"></a>
<p class="symi-entry-owner">Type: <code>api::ordinary_differential_equations::OrdinaryDifferentialEquationVerificationVerdict</code></p>

```rust signature
pub enum OrdinaryDifferentialEquationVerificationVerdict
```

</details>

<a id="entry-presentation_rust_api_ordinarydifferentialequationverificationverdict_rejected"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationverificationverdict_rejected.04e721d29182"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationVerificationVerdict variant</p>

```rust signature
Rejected,
```

A residual or datum was proved not to vanish.

<a id="entry-presentation_rust_api_ordinarydifferentialequationverificationverdict_verified"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationverificationverdict_verified.0474fd98b8fc"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationVerificationVerdict variant</p>

```rust signature
Verified,
```

Every residual and datum was proved to vanish.

<a id="entry-presentation_rust_api_ordinarydifferentialequationverificationverdict_name"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationverificationverdict_name.e26bb16f05d1"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationVerificationVerdict method</p>

```rust signature
pub fn name(self) -> &'static str
```

Returns the stable lowercase binding spelling.

### OrdinaryDifferentialEquationGeneralityVerdict

The exact rank decision behind a complete-family claim.

Cases: `Deficient`, `FullRank`, `Inconclusive`.

<a id="entry-presentation_rust_api_ordinarydifferentialequationgeneralityverdict_deficient"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationgeneralityverdict_deficient.9369a092fce8"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationGeneralityVerdict variant</p>

```rust signature
Deficient,
```

That map provably has less than the required rank.

<a id="entry-presentation_rust_api_ordinarydifferentialequationgeneralityverdict_fullrank"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationgeneralityverdict_fullrank.d957199069d6"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationGeneralityVerdict variant</p>

```rust signature
FullRank,
```

The map from the generated constants to the initial jet has the full required rank.

<a id="entry-presentation_rust_api_ordinarydifferentialequationgeneralityverdict_inconclusive"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationgeneralityverdict_inconclusive.1b20c61515b4"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationGeneralityVerdict variant</p>

```rust signature
Inconclusive,
```

The rank could not be decided exactly.

<a id="entry-presentation_rust_api_ordinarydifferentialequationgeneralityverdict"></a>
<a id="placement-placement.rust.native_rust.api_ordinarydifferentialequationgeneralityverdict.5a6c08909b64"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use ordinary_differential_equations::OrdinaryDifferentialEquationGeneralityVerdict;
```

The exact rank decision behind a complete-family claim.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationgeneralityverdict.756670f9ca05"></a>
<p class="symi-entry-owner">Type: <code>api::ordinary_differential_equations::OrdinaryDifferentialEquationGeneralityVerdict</code></p>

```rust signature
pub enum OrdinaryDifferentialEquationGeneralityVerdict
```

</details>

<a id="entry-presentation_rust_api_ordinarydifferentialequationgeneralityverdict_name"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationgeneralityverdict_name.607d4290863a"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationGeneralityVerdict method</p>

```rust signature
pub fn name(self) -> &'static str
```

Returns the stable lowercase binding spelling.

## Declines

A request that cannot be met carries one of these reasons instead of a weaker
answer. The reason names the step that did not close, so a decline can be acted
on rather than merely retried.

### OrdinaryDifferentialEquationSolveDecline

Why a scalar ordinary differential equation request produced no certified candidate.

Cases: `AccumulatedOccurrenceNotSupported`, `CandidateNotVerified`, `ConditionsNotFitted`, `DelayFamilyNotAvailable`, `DelayFamilyNotCertified`, `DisplacedOccurrenceNotSupported`, `GeneralFamilyNotEstablished`, `GeneralFamilyRankUndecided`, `NoRouteRecognizedTheEquation`, `SwitchedCoefficientsNotSolved`, `TransformDidNotReachTheFrequencyDomain`, `TransformInversionDeclined`, `TransformRequiresCompleteOriginData`, `TransformRequiresScalarSignature`, `TransformedEquationNotSolvable`, `VolterraEndpointDataIncompatible`, `VolterraEndpointDataMissing`, `VolterraKernelNotSupported`.

<a id="entry-presentation_rust_api_ordinarydifferentialequationsolvedecline_accumulatedoccurrencenotsupported"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_accumulatedoccurrencenotsupported.c0a55a9cf92e"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline variant</p>

```rust signature
AccumulatedOccurrenceNotSupported,
```

The residual integrates the unknown in a way the requested route cannot carry.

<a id="entry-presentation_rust_api_ordinarydifferentialequationsolvedecline_candidatenotverified"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_candidatenotverified.ead16ac40494"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline variant</p>

```rust signature
CandidateNotVerified,
```

A fitted candidate did not survive independent verification.

<a id="entry-presentation_rust_api_ordinarydifferentialequationsolvedecline_conditionsnotfitted"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_conditionsnotfitted.a9cecabb0f61"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline variant</p>

```rust signature
ConditionsNotFitted,
```

The condition search found no assignment satisfying every datum.

<a id="entry-presentation_rust_api_ordinarydifferentialequationsolvedecline_delayfamilynotavailable"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_delayfamilynotavailable.e7edab62806e"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline variant</p>

```rust signature
DelayFamilyNotAvailable,
```

The method of steps has no exact global family for this delay equation.

<a id="entry-presentation_rust_api_ordinarydifferentialequationsolvedecline_delayfamilynotcertified"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_delayfamilynotcertified.2d6e0d172464"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline variant</p>

```rust signature
DelayFamilyNotCertified,
```

The exact global family of a delay request did not survive its own certificate.

<a id="entry-presentation_rust_api_ordinarydifferentialequationsolvedecline_displacedoccurrencenotsupported"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_displacedoccurrencenotsupported.8c76fef42d22"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline variant</p>

```rust signature
DisplacedOccurrenceNotSupported,
```

The residual evaluates the unknown at a displacement the requested route cannot carry.

<a id="entry-presentation_rust_api_ordinarydifferentialequationsolvedecline_generalfamilynotestablished"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_generalfamilynotestablished.935df98571c9"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline variant</p>

```rust signature
GeneralFamilyNotEstablished,
```

The complete family was requested and the candidate's data map is not full rank.

<a id="entry-presentation_rust_api_ordinarydifferentialequationsolvedecline_generalfamilyrankundecided"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_generalfamilyrankundecided.f8a4c1a4e10d"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline variant</p>

```rust signature
GeneralFamilyRankUndecided,
```

The complete family was requested and the rank of the data map was undecided.

<a id="entry-presentation_rust_api_ordinarydifferentialequationsolvedecline_norouterecognizedtheequation"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_norouterecognizedtheequation.ea034136a624"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline variant</p>

```rust signature
NoRouteRecognizedTheEquation,
```

No route in the classification ladder recognised the equation.

<a id="entry-presentation_rust_api_ordinarydifferentialequationsolvedecline"></a>
<a id="placement-placement.rust.native_rust.api_ordinarydifferentialequationsolvedecline.32ecdcabed85"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline;
```

Why a scalar ordinary differential equation request produced no certified candidate.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline.8b53ff20f3ff"></a>
<p class="symi-entry-owner">Type: <code>api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline</code></p>

```rust signature
pub enum OrdinaryDifferentialEquationSolveDecline
```

</details>

<a id="entry-presentation_rust_api_ordinarydifferentialequationsolvedecline_switchedcoefficientsnotsolved"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_switchedcoefficientsnotsolved.baa7ba577d6c"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline variant</p>

```rust signature
SwitchedCoefficientsNotSolved,
```

The residual switches at a point and the interval-by-interval route declined it.

<a id="entry-presentation_rust_api_ordinarydifferentialequationsolvedecline_transformdidnotreachthefrequencydomain"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_transformdidnotreachthefrequencydomain.ced1d90970d7"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline variant</p>

```rust signature
TransformDidNotReachTheFrequencyDomain,
```

The forward transform left the unknown function in the frequency-domain equation.

<a id="entry-presentation_rust_api_ordinarydifferentialequationsolvedecline_transforminversiondeclined"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_transforminversiondeclined.d693985a3999"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline variant</p>

```rust signature
TransformInversionDeclined,
```

The inversion did not return to the time domain.

<a id="entry-presentation_rust_api_ordinarydifferentialequationsolvedecline_transformrequirescompleteorigindata"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_transformrequirescompleteorigindata.af96e62b28f7"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline variant</p>

```rust signature
TransformRequiresCompleteOriginData,
```

The transform route needs the complete initial jet at the origin.

<a id="entry-presentation_rust_api_ordinarydifferentialequationsolvedecline_transformrequiresscalarsignature"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_transformrequiresscalarsignature.6c236342059a"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline variant</p>

```rust signature
TransformRequiresScalarSignature,
```

The transform route needs a one-argument unknown function.

<a id="entry-presentation_rust_api_ordinarydifferentialequationsolvedecline_transformedequationnotsolvable"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_transformedequationnotsolvable.7a1b5118775b"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline variant</p>

```rust signature
TransformedEquationNotSolvable,
```

The frequency-domain equation could not be solved for the image.

<a id="entry-presentation_rust_api_ordinarydifferentialequationsolvedecline_volterraendpointdataincompatible"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_volterraendpointdataincompatible.a26b5d3c2986"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline variant</p>

```rust signature
VolterraEndpointDataIncompatible,
```

The endpoint equation did not determine the derived initial derivative.

<a id="entry-presentation_rust_api_ordinarydifferentialequationsolvedecline_volterraendpointdatamissing"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_volterraendpointdatamissing.6ba9001c7959"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline variant</p>

```rust signature
VolterraEndpointDataMissing,
```

A Volterra equation needs a value datum at its integral lower endpoint.

<a id="entry-presentation_rust_api_ordinarydifferentialequationsolvedecline_volterrakernelnotsupported"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_volterrakernelnotsupported.6e94d776539e"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline variant</p>

```rust signature
VolterraKernelNotSupported,
```

The accumulated term is not a supported finite-memory Volterra kernel.

<a id="entry-presentation_rust_api_ordinarydifferentialequationsolvedecline_name"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_name.769c6a05c154"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline method</p>

```rust signature
pub fn name(self) -> &'static str
```

Returns the stable lowercase binding spelling.

### OrdinaryDifferentialEquationSystemSolveDecline

Why a system of ordinary differential equations produced no certified assignment.

Cases: `ComponentRequestDeclined`, `ComponentSolutionIsNotExplicit`, `ConditionsDoNotDetermineTheConstants`, `ForcingHasNoExactParticularState`, `FundamentalMatrixUnavailable`, `NoSequentialOrderingExists`, `SolutionNotVerified`, `StateFormUnavailable`.

<a id="entry-presentation_rust_api_ordinarydifferentialequationsystemsolvedecline_componentrequestdeclined"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemsolvedecline_componentrequestdeclined.cf99c8099ba9"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveDecline variant</p>

```rust signature
ComponentRequestDeclined,
```

A scalar component request declined.

<a id="entry-presentation_rust_api_ordinarydifferentialequationsystemsolvedecline_componentsolutionisnotexplicit"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemsolvedecline_componentsolutionisnotexplicit.423a131229b9"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveDecline variant</p>

```rust signature
ComponentSolutionIsNotExplicit,
```

A component solution was not explicit, so it cannot be substituted onward.

<a id="entry-presentation_rust_api_ordinarydifferentialequationsystemsolvedecline_conditionsdonotdeterminetheconstants"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemsolvedecline_conditionsdonotdeterminetheconstants.97172f330605"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveDecline variant</p>

```rust signature
ConditionsDoNotDetermineTheConstants,
```

The declared data do not determine the constants through an invertible exact linear map.

<a id="entry-presentation_rust_api_ordinarydifferentialequationsystemsolvedecline_forcinghasnoexactparticularstate"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemsolvedecline_forcinghasnoexactparticularstate.2acfc81696d5"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveDecline variant</p>

```rust signature
ForcingHasNoExactParticularState,
```

The forcing term has no exact particular state vector by variation of constants.

<a id="entry-presentation_rust_api_ordinarydifferentialequationsystemsolvedecline_fundamentalmatrixunavailable"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemsolvedecline_fundamentalmatrixunavailable.852f878e1aa1"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveDecline variant</p>

```rust signature
FundamentalMatrixUnavailable,
```

The state form has no fundamental matrix this boundary can certify.

<a id="entry-presentation_rust_api_ordinarydifferentialequationsystemsolvedecline_nosequentialorderingexists"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemsolvedecline_nosequentialorderingexists.5cd2eca927c4"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveDecline variant</p>

```rust signature
NoSequentialOrderingExists,
```

No ordering of the equations reduces the system to a sequence of scalar requests.

<a id="entry-presentation_rust_api_ordinarydifferentialequationsystemsolvedecline"></a>
<a id="placement-placement.rust.native_rust.api_ordinarydifferentialequationsystemsolvedecline.9253307f5f75"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveDecline;
```

Why a system of ordinary differential equations produced no certified assignment.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemsolvedecline.7b01e381ac16"></a>
<p class="symi-entry-owner">Type: <code>api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveDecline</code></p>

```rust signature
pub enum OrdinaryDifferentialEquationSystemSolveDecline
```

</details>

<a id="entry-presentation_rust_api_ordinarydifferentialequationsystemsolvedecline_solutionnotverified"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemsolvedecline_solutionnotverified.05201369d549"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveDecline variant</p>

```rust signature
SolutionNotVerified,
```

The complete assignment did not survive independent verification.

<a id="entry-presentation_rust_api_ordinarydifferentialequationsystemsolvedecline_stateformunavailable"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemsolvedecline_stateformunavailable.5dbbe8c6c6a4"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveDecline variant</p>

```rust signature
StateFormUnavailable,
```

The system does not reduce to a regular first-order state form.

<a id="entry-presentation_rust_api_ordinarydifferentialequationsystemsolvedecline_name"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemsolvedecline_name.23bc736f1eaf"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveDecline method</p>

```rust signature
pub fn name(self) -> &'static str
```

Returns the stable lowercase binding spelling.

## Related

- [Undefined functions](undefined-functions.md) — the unknown function and its
  structural derivatives.
- [Partial differential equations](partial-differential-equations.md) — the
  several-variable case, whose similarity reductions close through the scalar
  ODE routes above.
- [Recurrence equations](recurrence-equations.md) — the discrete analogue.
- [Integral transforms](integral-transforms.md) — the Laplace transform the
  `laplace_transform` method runs on.

## Additional API

### api::ordinary_differential_equations

<a id="entry-presentation_rust_native_module_api_ordinary_differential_equations"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations.f3797eeb2ee3"></a>
<p class="symi-entry-owner">api module</p>

```rust signature
pub mod ordinary_differential_equations;
```

Context-safe ordinary differential equation requests, systems, and their evidence.

### solve_ordinary_differential_equation_by_laplace_transform

<a id="entry-presentation_rust_api_session_solve_ordinary_differential_equation_by_laplace_transform"></a>
<a id="placement-placement.rust.native_rust.api_solving_session_solve_ordinary_differential_equation_by_laplace_transform.59da8e2c987a"></a>
<p class="symi-entry-owner">api::solving::Session method</p>

```rust signature
pub fn solve_ordinary_differential_equation_by_laplace_transform<'a, VariableType>(
    &self,
    equation: &Expression,
    dependent_function_call: &Expression,
    independent_variable: VariableType,
    condition_residuals: &[Expression],
) -> Result<Expression, ApiError>
where
    VariableType: Into<VariableLike<'a>>,
```

Solve an ordinary differential equation through the Laplace transform workflow.

### solve_ordinary_differential_equation_with_conditions

<a id="entry-presentation_rust_api_session_solve_ordinary_differential_equation_with_conditions"></a>
<a id="placement-placement.rust.native_rust.api_solving_session_solve_ordinary_differential_equation_with_conditions.f47a5ad07ece"></a>
<p class="symi-entry-owner">api::solving::Session method</p>

```rust signature
pub fn solve_ordinary_differential_equation_with_conditions<'a, VariableType>(
    &self,
    equation: &Expression,
    dependent_function_call: &Expression,
    independent_variable: VariableType,
    condition_residuals: &[Expression],
) -> Result<Expression, ApiError>
where
    VariableType: Into<VariableLike<'a>>,
```

Solve an ordinary differential equation through order-carrying condition residuals.

