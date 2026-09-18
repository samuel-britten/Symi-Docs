# Differential and recurrence equations

The unknown function is written with `undefined_function`, and its
derivatives with the `derivative` method on it:



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

### derivative

The structural derivative node of the named function — the shape the ODE
solver recognises. One order per argument: `y.derivative([1], [x])` is
\(y'(x)\), `y.derivative([2], [x])` is \(y''(x)\). **Notes:** this is distinct from
`context.derivative`, which wraps an arbitrary *expression*
in a deferred-differentiation placeholder; equations built from that
placeholder are not recognised by the ODE classifier.

### solve_ordinary_differential_equation

<a id="placement-placement.rust.native_rust.api_solving_session_solve_ordinary_differential_equation.cb49c577c3d6"></a>
`symi::api::solving::Session — pub fn solve_ordinary_differential_equation<'a, VariableType>(&self, equation: &Expression, dependent_function_call: &Expression, independent_variable: VariableType, initial_conditions: Option<&[(Expression, Expression)]>) -> Result<Expression, ApiError> where VariableType: Into<VariableLike<'a>>`


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

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_session_solve_ordinary_differential_equation_request.19c753e87898"></a>
`symi::api::ordinary_differential_equations::Session — pub fn solve_ordinary_differential_equation_request<'a, VariableType>(&self, equation: &Expression, dependent_function_call: &Expression, independent_variable: VariableType, scope: DifferentialEquationSolutionScope, condition_residuals: &[Expression], method: OrdinaryDifferentialEquationMethod, regularity: OrdinaryDifferentialEquationRegularity) -> Result<OrdinaryDifferentialEquationSolveResult, ApiError> where VariableType: Into<VariableLike<'a>>`


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

### solve_ordinary_differential_equation_with_history

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_session_solve_ordinary_differential_equation_with_history.7143acaddad1"></a>
`symi::api::ordinary_differential_equations::Session — pub fn solve_ordinary_differential_equation_with_history<'a, VariableType>(&self, equation: &Expression, dependent_function_call: &Expression, independent_variable: VariableType, history_value: &Expression, history_start: &Expression, history_end: &Expression) -> Result<OrdinaryDifferentialEquationSolveResult, ApiError> where VariableType: Into<VariableLike<'a>>`


Solve a retarded delay ODE from a constant history on the stated interval
`[history_start, history_end]`, which must cover every lag. The interval is
never inferred, so a delay equation cannot acquire a history it was not given.
The supported class is a scalar first-order linear equation with constant lags
and constant history; it is answered by an exact method-of-steps family valid
for every time, certified by induction on the step index. One history is one
solution, so the request is particular.

### solve_ordinary_differential_equation_system_request

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_session_solve_ordinary_differential_equation_system_request.d56586578cd1"></a>
`symi::api::ordinary_differential_equations::Session — pub fn solve_ordinary_differential_equation_system_request<'a, VariableType>(&self, equations: &[Expression], dependent_function_calls: &[Expression], independent_variable: VariableType, condition_residuals: &[Expression], method: OrdinaryDifferentialEquationSystemMethod) -> Result<OrdinaryDifferentialEquationSystemSolveResult, ApiError> where VariableType: Into<VariableLike<'a>>`


Solve a system of ODEs in one coordinate, one equation per declared unknown.
Each condition residual states one datum on exactly one component.
`method` is `automatic`, `sequential` (scalar requests solved one at a time,
each with its own fresh integration datum; declines when no elimination order
exists), or `fundamental_matrix` (the coupled route through a certified
fundamental matrix of the first-order state form). Every returned assignment is
verified against every equation and datum.

### verify_ordinary_differential_equation_system_solution

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_session_verify_ordinary_differential_equation_system_solution.5711aa94fff5"></a>
`symi::api::ordinary_differential_equations::Session — pub fn verify_ordinary_differential_equation_system_solution<'a, VariableType>(&self, equations: &[Expression], dependent_function_calls: &[Expression], independent_variable: VariableType, components: &[Expression], generated_constants: &[Expression], condition_residuals: &[Expression]) -> Result<OrdinaryDifferentialEquationSystemVerificationReport, ApiError> where VariableType: Into<VariableLike<'a>>`


Check a supplied assignment without solving: no solver runs, so a swapped
component or a missing mode is reported against the assignment as given rather
than repaired. The report carries `verdict`, `generality` (the rank verdict on
the map from `generated_constants` to the initial jet), and `required_rank`.

### OrdinaryDifferentialEquationSolveResult

<a id="placement-placement.rust.native_rust.api_ordinarydifferentialequationsolveresult.27829b1f77dc"></a>
`symi::api — pub use ordinary_differential_equations::OrdinaryDifferentialEquationSolveResult;`

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolveresult.5a59293dfb16"></a>
`symi::api::ordinary_differential_equations — pub struct OrdinaryDifferentialEquationSolveResult {`

`verdict` (`solved`/`declined`), `method`, `solution`, `form`
(`explicit`/`implicit`), `generated_constants`, `verification`
(`verified`/`rejected`/`inconclusive`), `generality`
(`full_rank`/`deficient`/`inconclusive`), `decline`, and, for a Laplace
transform solution, `frequency_domain_equation` and `image`.

### OrdinaryDifferentialEquationSystemSolveResult

<a id="placement-placement.rust.native_rust.api_ordinarydifferentialequationsystemsolveresult.ee4952621424"></a>
`symi::api — pub use ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveResult;`

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult.57c9f9e84fc2"></a>
`symi::api::ordinary_differential_equations — pub struct OrdinaryDifferentialEquationSystemSolveResult {`

`verdict`, `method`, `route` (`sequential`, `fundamental_matrix`, or
`dependency_blocks`), `components` in declaration order, `generated_constants`,
`verification`, `generality`, and `decline`.

### OrdinaryDifferentialEquationSystemVerificationReport

<a id="placement-placement.rust.native_rust.api_ordinarydifferentialequationsystemverificationreport.ba8db9cddd3f"></a>
`symi::api — pub use ordinary_differential_equations::OrdinaryDifferentialEquationSystemVerificationReport;`

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemverificationreport.fb0f2ca8738b"></a>
`symi::api::ordinary_differential_equations — pub struct OrdinaryDifferentialEquationSystemVerificationReport {`

`verdict`, `generality`, and `required_rank`.

### solve_ordinary_differential_equation_with_particular_solution

<a id="placement-placement.rust.native_rust.api_solving_session_solve_ordinary_differential_equation_with_particular_solution.4fd9a06c9dd9"></a>
`symi::api::solving::Session — pub fn solve_ordinary_differential_equation_with_particular_solution<'a, VariableType>(&self, equation: &Expression, dependent_function_call: &Expression, independent_variable: VariableType, particular_solution: &Expression) -> Result<Expression, ApiError> where VariableType: Into<VariableLike<'a>>`


Riccati-specific entry: with a known particular solution \(y_1\), the
substitution \(y = y_1 + 1/v\) reduces the Riccati equation to a linear
first-order ODE. Falls back to the unevaluated placeholder when the shape is
not Riccati.

### solve_linear_recurrence

<a id="placement-placement.rust.native_rust.api_solving_session_solve_linear_recurrence.398e06473c63"></a>
`symi::api::solving::Session — pub fn solve_linear_recurrence<'a, VariableType>(&self, equation: &Expression, sequence_call: &Expression, index_variable: VariableType, initial_conditions: Option<&[(Expression, Expression)]>) -> Result<Expression, ApiError> where VariableType: Into<VariableLike<'a>>`


Solve a linear recurrence for the unknown sequence named by `sequence_call`
(e.g. `a(n)`). Backward shifts are normalised by translating the whole
equation. Homogeneous recurrences with polynomial coefficients use Petkovšek's
Hyper algorithm; the general solution carries one fresh symbolic constant per
basis element. Constant-coefficient recurrences may be inhomogeneous when the
forcing is a sum of polynomial-times-exponential terms, with resonant trials
raised by the root multiplicity; recurrences whose coefficients are rational in
`n` and `c^n` are solved in that mixed field when a rational solution exists.
Other shapes return the unevaluated `recurrence_equation` placeholder.
`initial_conditions` is a list of `(index, value)` pairs. WASM passes a flat
interleaved array.

**Constant coefficients.** When every coefficient is a rational constant and
Petkovšek's basis is incomplete, the characteristic polynomial is factored over
\(\mathbb{Q}\) and each irreducible factor solved in radicals, giving the
algebraic-exponential basis \(n^j \operatorname{root}^n\) with the multiplicity factors
included. This is what closes recurrences whose characteristic roots are
irrational — `a(n+2) = a(n+1) + a(n)` with `a(0) = 0, a(1) = 1` returns
Binet's formula rather than the placeholder. Exact fitting is performed for
irreducible factors up to degree two; a cubic or higher irreducible factor
declines to the placeholder rather than eliminating over nested Cardano and
Ferrari radicals.

**Initial conditions.** A complete window determines *every* constant, not just
the first: the window gives a square linear system in the constants which is
solved by exact symbolic elimination, and the fitted result is replayed against
each supplied condition before it is returned. A window that does not determine
the constants leaves the symbolic-constant general solution intact.

## Partial differential equation requests and point symmetries

### solve_partial_differential_equation_request

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_session_solve_partial_differential_equation_request.f91e445e417a"></a>
`symi::api::partial_differential_equations::Session — pub fn solve_partial_differential_equation_request(&self, problem: &PartialDifferentialEquationProblem, scope: DifferentialEquationSolutionScope, geometric_domain: PartialDifferentialEquationGeometricDomain, regularity: PartialDifferentialEquationRegularity, solution_class: PartialDifferentialEquationSolutionClass, method: PartialDifferentialEquationMethod) -> Result<PartialDifferentialEquationSolveResult, ApiError>`


Solve a PDE request in which the geometry, regularity, and solution class are
part of the question. `geometric_domain` is `whole_space`, `disk` (radial then
angular variable, origin interior), or `real_line_evolution` (whole-line
spatial variable then positive evolution variable). `regularity` is
`unrestricted` or `origin_regular_periodic` (disk only). `solution_class` is
`unrestricted` or `polynomial_growth`.

A `general` request is answered only by a family whose completeness theorem is
proved over the requested class. Otherwise the result declines with
`complete_family_not_established` or
`completeness_holds_only_on_a_narrower_solution_class` — the latter is the
verdict for the unrestricted heat request, whose initial-data representation is
complete only among solutions of polynomial growth. Geometry or regularity no
implemented method supports declines with `declared_geometry_not_supported` or
`declared_regularity_not_supported`.

### establishes_completeness

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolutionfamily_establishes_completeness.7177118a3000"></a>
`symi::api::partial_differential_equations::PartialDifferentialEquationSolutionFamily — pub fn establishes_completeness(&self) -> Result<bool, ApiError>`


Whether the family carries a completeness theorem whose every identity was
proved. A verified residual proves membership in the solution set, never
coverage of it.

### derive_partial_differential_equation_point_symmetries

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_session_derive_partial_differential_equation_point_symmetries.978a235aebd2"></a>
`symi::api::partial_differential_equations::Session — pub fn derive_partial_differential_equation_point_symmetries(&self, problem: &PartialDifferentialEquationProblem) -> Result<PartialDifferentialEquationPointSymmetryAlgebra, ApiError>`


Derive the point-symmetry algebra of a scalar first- or second-order PDE from
its prolonged determining equations. Each basis generator is verified by an
independent infinitesimal-criterion check. For a linear homogeneous equation
the additive solution symmetry is reported separately
(`admits_additive_solution_symmetry`), because it is constrained to solutions
rather than being an arbitrary function. Problems carrying initial or boundary
data decline, as do infinite-dimensional algebras the bounded reduction cannot
close. The result carries `decline`, `parameters`, `basis`,
`general_generator`, `determining_equations`, and `outstanding_obligations`;
discrete symmetries are never claimed.

### construct_partial_differential_equation_point_symmetry_action

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_session_construct_partial_differential_equation_point_symmetry_action.1a5585cc69e9"></a>
`symi::api::partial_differential_equations::Session — pub fn construct_partial_differential_equation_point_symmetry_action(&self, problem: &PartialDifferentialEquationProblem) -> Result<PartialDifferentialEquationPointSymmetryAction, ApiError>`


Integrate every basis generator into a one-parameter group, verify each group
by its own intertwining identity, and certify their composition as the
connected local action `u = a + A f(X)`. The result carries `parameters`,
`transformed_coordinates`, `amplitude`, `multiplier`, `intertwining`,
`invertibility`, `outstanding_obligations`, and `decline` or
`point_symmetry_decline`. `applied_to_seed(seed)` returns `A f(X)` and
`applied_to_seed_with_additive_solution(seed, additive_solution)` returns
`a + A f(X)`; the transformed coordinates must lie in the seed's chart.

### partial_differential_equation_point_symmetry_generator

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_session_partial_differential_equation_point_symmetry_generator.2d3393e1eb39"></a>
`symi::api::partial_differential_equations::Session — pub fn partial_differential_equation_point_symmetry_generator(&self, problem: &PartialDifferentialEquationProblem, coordinate_infinitesimals: &[Expression], dependent_infinitesimal: &Expression) -> Result<PartialDifferentialEquationPointSymmetryGenerator, ApiError>`


A candidate generator, one coordinate infinitesimal per independent variable
and a dependent infinitesimal written in the unknown evaluated at them. It is a
candidate, not a certificate: every consumer verifies it is a symmetry.

### solve_partial_differential_equation_by_similarity_reduction

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_session_solve_partial_differential_equation_by_similarity_reduction.a927faa83715"></a>
`symi::api::partial_differential_equations::Session — pub fn solve_partial_differential_equation_by_similarity_reduction(&self, problem: &PartialDifferentialEquationProblem, generator: &PartialDifferentialEquationPointSymmetryGenerator) -> Result<PartialDifferentialEquationSimilaritySolution, ApiError>`


Reduce a two-variable PDE by a fiber-linear point symmetry to an ODE in the
invariant, solve that ODE as a complete family, and lift the family back. The
result carries `invariant`, `similarity_variable`, `weight`,
`reduced_equation`, `multiplier`, `lifted_family`, `lifted_constants`,
`lifted_family_verification`, `outstanding_obligations`, and `decline`. The
lifted family is a family of invariant solutions and always carries the
obligation that it is not the general solution.
