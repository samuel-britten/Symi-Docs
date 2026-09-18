# Differential and recurrence equations

The unknown function is written with `undefined_function`, and its
derivatives with the `derivative` method on it:

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

### derivative

The structural derivative node of the named function — the shape the ODE
solver recognises. One order per argument: `y.derivative([1], [x])` is
\(y'(x)\), `y.derivative([2], [x])` is \(y''(x)\). **Notes:** this is distinct from
`context.derivative`, which wraps an arbitrary *expression*
in a deferred-differentiation placeholder; equations built from that
placeholder are not recognised by the ODE classifier.

### solve_ordinary_differential_equation

<a id="placement-placement.python.python_class.context_solve_ordinary_differential_equation.8b5bb9481206"></a>
`Context.solve_ordinary_differential_equation(equation, dependent_function_call, independent_variable, initial_conditions = None)`

<a id="placement-placement.python.python_module.module_solve_ordinary_differential_equation.34bcba790969"></a>
`symi.solve_ordinary_differential_equation(equation, dependent_function_call, independent_variable, initial_conditions = None)`


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

<a id="placement-placement.python.python_class.context_solve_ordinary_differential_equation_request.9b6e95f2b190"></a>
`Context.solve_ordinary_differential_equation_request(equation, dependent_function_call, independent_variable, scope, condition_residuals=None, method="automatic", regularity="classical")`

<a id="placement-placement.python.python_module.module_solve_ordinary_differential_equation_request.162390703771"></a>
`symi.solve_ordinary_differential_equation_request(equation, dependent_function_call, independent_variable, scope, condition_residuals=None, method="automatic", regularity="classical")`


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

<a id="placement-placement.python.python_class.context_solve_ordinary_differential_equation_with_history.44447471321c"></a>
`Context.solve_ordinary_differential_equation_with_history(equation, dependent_function_call, independent_variable, history_value, history_start, history_end)`

<a id="placement-placement.python.python_module.module_solve_ordinary_differential_equation_with_history.92044eea17ea"></a>
`symi.solve_ordinary_differential_equation_with_history(equation, dependent_function_call, independent_variable, history_value, history_start, history_end)`


Solve a retarded delay ODE from a constant history on the stated interval
`[history_start, history_end]`, which must cover every lag. The interval is
never inferred, so a delay equation cannot acquire a history it was not given.
The supported class is a scalar first-order linear equation with constant lags
and constant history; it is answered by an exact method-of-steps family valid
for every time, certified by induction on the step index. One history is one
solution, so the request is particular.

### solve_ordinary_differential_equation_system_request

<a id="placement-placement.python.python_class.context_solve_ordinary_differential_equation_system_request.a85a23b83559"></a>
`Context.solve_ordinary_differential_equation_system_request(equations, dependent_function_calls, independent_variable, condition_residuals=None, method="automatic")`

<a id="placement-placement.python.python_module.module_solve_ordinary_differential_equation_system_request.7413c2777014"></a>
`symi.solve_ordinary_differential_equation_system_request(equations, dependent_function_calls, independent_variable, condition_residuals=None, method="automatic")`


Solve a system of ODEs in one coordinate, one equation per declared unknown.
Each condition residual states one datum on exactly one component.
`method` is `automatic`, `sequential` (scalar requests solved one at a time,
each with its own fresh integration datum; declines when no elimination order
exists), or `fundamental_matrix` (the coupled route through a certified
fundamental matrix of the first-order state form). Every returned assignment is
verified against every equation and datum.

### verify_ordinary_differential_equation_system_solution

<a id="placement-placement.python.python_class.context_verify_ordinary_differential_equation_system_solution.8454d965cf59"></a>
`Context.verify_ordinary_differential_equation_system_solution(equations, dependent_function_calls, independent_variable, components, generated_constants, condition_residuals=None)`

<a id="placement-placement.python.python_module.module_verify_ordinary_differential_equation_system_solution.e89c19aef2c2"></a>
`symi.verify_ordinary_differential_equation_system_solution(equations, dependent_function_calls, independent_variable, components, generated_constants, condition_residuals=None)`


Check a supplied assignment without solving: no solver runs, so a swapped
component or a missing mode is reported against the assignment as given rather
than repaired. The report carries `verdict`, `generality` (the rank verdict on
the map from `generated_constants` to the initial jet), and `required_rank`.

### OrdinaryDifferentialEquationSolveResult

<a id="placement-placement.python.python_class.ordinarydifferentialequationsolveresult.d2d24a57b343"></a>
`class symi.OrdinaryDifferentialEquationSolveResult`

`verdict` (`solved`/`declined`), `method`, `solution`, `form`
(`explicit`/`implicit`), `generated_constants`, `verification`
(`verified`/`rejected`/`inconclusive`), `generality`
(`full_rank`/`deficient`/`inconclusive`), `decline`, and, for a Laplace
transform solution, `frequency_domain_equation` and `image`.

### OrdinaryDifferentialEquationSystemSolveResult

<a id="placement-placement.python.python_class.ordinarydifferentialequationsystemsolveresult.0c154c915822"></a>
`class symi.OrdinaryDifferentialEquationSystemSolveResult`

`verdict`, `method`, `route` (`sequential`, `fundamental_matrix`, or
`dependency_blocks`), `components` in declaration order, `generated_constants`,
`verification`, `generality`, and `decline`.

### OrdinaryDifferentialEquationSystemVerificationReport

<a id="placement-placement.python.python_class.ordinarydifferentialequationsystemverificationreport.92e863cb4a59"></a>
`class symi.OrdinaryDifferentialEquationSystemVerificationReport`

`verdict`, `generality`, and `required_rank`.

### solve_ordinary_differential_equation_with_particular_solution

<a id="placement-placement.python.python_class.context_solve_ordinary_differential_equation_with_particular_solution.81aaefb22c81"></a>
`Context.solve_ordinary_differential_equation_with_particular_solution(equation, dependent_function_call, independent_variable, particular_solution)`

<a id="placement-placement.python.python_module.module_solve_ordinary_differential_equation_with_particular_solution.5526cb26f075"></a>
`symi.solve_ordinary_differential_equation_with_particular_solution(equation, dependent_function_call, independent_variable, particular_solution)`


Riccati-specific entry: with a known particular solution \(y_1\), the
substitution \(y = y_1 + 1/v\) reduces the Riccati equation to a linear
first-order ODE. Falls back to the unevaluated placeholder when the shape is
not Riccati.

### solve_linear_recurrence

<a id="placement-placement.python.python_class.context_solve_linear_recurrence.4787f699ed82"></a>
`Context.solve_linear_recurrence(equation, sequence_call, index_variable, initial_conditions = None)`

<a id="placement-placement.python.python_module.module_solve_linear_recurrence.7c6ba50bd5f2"></a>
`symi.solve_linear_recurrence(equation, sequence_call, index_variable, initial_conditions = None)`


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

<a id="placement-placement.python.python_class.context_solve_partial_differential_equation_request.0c3a5e7d1260"></a>
`Context.solve_partial_differential_equation_request(problem, scope, geometric_domain="whole_space", regularity="unrestricted", solution_class="unrestricted", method="automatic")`

<a id="placement-placement.python.python_module.module_solve_partial_differential_equation_request.cc18fc38960b"></a>
`symi.solve_partial_differential_equation_request(problem, scope, geometric_domain="whole_space", regularity="unrestricted", solution_class="unrestricted", method="automatic")`


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

<a id="placement-placement.python.python_class.partialdifferentialequationsolutionfamily_establishes_completeness.d0d1c58db829"></a>
`PartialDifferentialEquationSolutionFamily.establishes_completeness`


Whether the family carries a completeness theorem whose every identity was
proved. A verified residual proves membership in the solution set, never
coverage of it.

### derive_partial_differential_equation_point_symmetries

<a id="placement-placement.python.python_class.context_derive_partial_differential_equation_point_symmetries.ee176ee754ab"></a>
`Context.derive_partial_differential_equation_point_symmetries(problem)`

<a id="placement-placement.python.python_module.module_derive_partial_differential_equation_point_symmetries.d34c8c04e073"></a>
`symi.derive_partial_differential_equation_point_symmetries(problem)`


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

<a id="placement-placement.python.python_class.context_construct_partial_differential_equation_point_symmetry_action.7eeb86f85ac4"></a>
`Context.construct_partial_differential_equation_point_symmetry_action(problem)`

<a id="placement-placement.python.python_module.module_construct_partial_differential_equation_point_symmetry_action.d6484ffbc4bd"></a>
`symi.construct_partial_differential_equation_point_symmetry_action(problem)`


Integrate every basis generator into a one-parameter group, verify each group
by its own intertwining identity, and certify their composition as the
connected local action `u = a + A f(X)`. The result carries `parameters`,
`transformed_coordinates`, `amplitude`, `multiplier`, `intertwining`,
`invertibility`, `outstanding_obligations`, and `decline` or
`point_symmetry_decline`. `applied_to_seed(seed)` returns `A f(X)` and
`applied_to_seed_with_additive_solution(seed, additive_solution)` returns
`a + A f(X)`; the transformed coordinates must lie in the seed's chart.

### partial_differential_equation_point_symmetry_generator

<a id="placement-placement.python.python_class.context_partial_differential_equation_point_symmetry_generator.29e8c6c05930"></a>
`Context.partial_differential_equation_point_symmetry_generator(problem, coordinate_infinitesimals, dependent_infinitesimal)`

<a id="placement-placement.python.python_module.module_partial_differential_equation_point_symmetry_generator.780b1859c271"></a>
`symi.partial_differential_equation_point_symmetry_generator(problem, coordinate_infinitesimals, dependent_infinitesimal)`


A candidate generator, one coordinate infinitesimal per independent variable
and a dependent infinitesimal written in the unknown evaluated at them. It is a
candidate, not a certificate: every consumer verifies it is a symmetry.

### solve_partial_differential_equation_by_similarity_reduction

<a id="placement-placement.python.python_class.context_solve_partial_differential_equation_by_similarity_reduction.e866455641db"></a>
`Context.solve_partial_differential_equation_by_similarity_reduction(problem, generator)`

<a id="placement-placement.python.python_module.module_solve_partial_differential_equation_by_similarity_reduction.f01d7b81443a"></a>
`symi.solve_partial_differential_equation_by_similarity_reduction(problem, generator)`


Reduce a two-variable PDE by a fiber-linear point symmetry to an ODE in the
invariant, solve that ODE as a complete family, and lift the family back. The
result carries `invariant`, `similarity_variable`, `weight`,
`reduced_equation`, `multiplier`, `lifted_family`, `lifted_constants`,
`lifted_family_verification`, `outstanding_obligations`, and `decline`. The
lifted family is a family of invariant solutions and always carries the
obligation that it is not the general solution.
