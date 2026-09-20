# Partial differential equations

A partial differential equation relates an unknown function of several
variables to its partial derivatives. Everything on this page starts from a
`PartialDifferentialEquationProblem`: a validated signature that fixes the
equation, the dependent function, the ordered independent variables, and any
initial or boundary data. Constructing the problem is a separate step from
solving it, so that a malformed equation is rejected once, at construction,
rather than reappearing as a strange answer from a solver.

The unknown and its derivatives are written with
[undefined functions](undefined-functions.md).

```python
context = symi.Context()
x = context.symbol("x")
t = context.symbol("t")
u = context.undefined_function("u")
# \(u_t - u_{xx} = 0\), the heat equation
residual = u.derivative([0, 1], [x, t]) - u.derivative([2, 0], [x, t])
problem = context.partial_differential_equation(residual, u, ["x", "t"])
classification = context.classify_second_order_partial_differential_equation(problem)
```

The records these entries return — problems, classifications, principal parts,
transformations, symmetry algebras, solution families, and verification reports
— are documented together in
[Partial differential equation results](partial-differential-equation-results.md).

## Constructing a problem

### partial_differential_equation

<a id="entry-presentation_python_api_session_partial_differential_equation"></a>
<a id="placement-placement.python.python_module.module_partial_differential_equation.ba416b0ca935"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
partial_differential_equation(
    equation: ExpressionInput,
    dependent_function: Any,
    independent_variables: VariableCollectionInput,
    initial_conditions: Optional[ExpressionCollectionInput] = None,
    boundary_conditions: Optional[ExpressionCollectionInput] = None,
) -> PartialDifferentialEquationProblem
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_partial_differential_equation.38acc6e956d8"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.partial_differential_equation</code></p>

```python signature
partial_differential_equation(
    equation: ExpressionLike,
    dependent_function: Any,
    independent_variables: Iterable[VariableLike],
    initial_conditions: Iterable[ExpressionLike] = None,
    boundary_conditions: Iterable[ExpressionLike] = None,
) -> PartialDifferentialEquationProblem
```

</details>


Construct a validated scalar PDE with an explicit dependent function and an
explicit independent-variable order. The order is part of the signature: it
fixes which coordinate the classifier and every transformation call the first
axis, so the same equation given two orders is two problems. Conditions are
residuals read as equal to zero.

**Errors:** an equation that does not involve the declared dependent function,
a repeated or undeclared independent variable, or a condition outside the
declared coordinates is an invalid-argument error naming the offending
parameter.

### discover_partial_differential_equation

<a id="entry-presentation_python_api_session_discover_partial_differential_equation"></a>
<a id="placement-placement.python.python_module.module_discover_partial_differential_equation.52ddbbb333c3"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
discover_partial_differential_equation(
    equation: ExpressionInput,
    initial_conditions: Optional[ExpressionCollectionInput] = None,
    boundary_conditions: Optional[ExpressionCollectionInput] = None,
) -> PartialDifferentialEquationProblem
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_discover_partial_differential_equation.65f033d1c9b8"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.discover_partial_differential_equation</code></p>

```python signature
discover_partial_differential_equation(
    equation: ExpressionLike,
    initial_conditions: Iterable[ExpressionLike] = None,
    boundary_conditions: Iterable[ExpressionLike] = None,
) -> PartialDifferentialEquationProblem
```

</details>


Recover the same signature from one governing residual alone, by reading the
dependent function and the independent variables out of the derivatives that
appear in it. It declines rather than guessing when the residual does not
determine a unique signature — more than one undefined function, or a
coordinate order the residual leaves ambiguous. Prefer
`partial_differential_equation` when the signature is known; use this entry
when the equation is the only thing in hand.

### partial_differential_equation_arbitrary_function

<a id="entry-presentation_python_api_session_partial_differential_equation_arbitrary_function"></a>
<a id="placement-placement.python.python_class.context_partial_differential_equation_arbitrary_function.06a37767e111"></a>
<p class="symi-entry-owner">Explicit context</p>

```python signature
partial_differential_equation_arbitrary_function(
    preferred_name: str,
    arity: int,
) -> PartialDifferentialEquationArbitraryFunction
```


Allocate a collision-free arbitrary function of the stated arity, for use as a
free element of a candidate solution family. The allocated name is derived from
`preferred_name` but is guaranteed not to collide with a function already
present in the context, so a family's free elements cannot be captured by a
name the problem already uses.

## Classifying

### classify_partial_differential_equation

<a id="entry-presentation_python_api_session_classify_partial_differential_equation"></a>
<a id="placement-placement.python.python_module.module_classify_partial_differential_equation.35014b001694"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
classify_partial_differential_equation(problem: PartialDifferentialEquationProblem) -> PartialDifferentialEquationClassification
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_classify_partial_differential_equation.f80771a4e3c1"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.classify_partial_differential_equation</code></p>

```python signature
classify_partial_differential_equation(problem: PartialDifferentialEquationProblem) -> PartialDifferentialEquationClassification
```

</details>


Exact structural analysis of a validated scalar PDE: its order, its linearity,
its principal part, and the coefficient data each of those is read from. The
analysis is structural and exact — a coefficient whose sign or reality cannot
be *proved* is reported as undetermined rather than assumed.

### classify_second_order_partial_differential_equation

<a id="entry-presentation_python_api_session_classify_second_order_partial_differential_equation"></a>
<a id="placement-placement.python.python_module.module_classify_second_order_partial_differential_equation.4366ea8e6378"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
classify_second_order_partial_differential_equation(problem: PartialDifferentialEquationProblem) -> PartialDifferentialEquationSecondOrderClassification
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_classify_second_order_partial_differential_equation.7f924f5a5610"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.classify_second_order_partial_differential_equation</code></p>

```python signature
classify_second_order_partial_differential_equation(problem: PartialDifferentialEquationProblem) -> PartialDifferentialEquationSecondOrderClassification
```

</details>


The elliptic/parabolic/hyperbolic type of a two-variable linear second-order
PDE over real coordinates, taken from the discriminant of the
[principal part](partial-differential-equation-results.md#partialdifferentialequationprincipalpart)'s
symmetric matrix. The type is reported per case, with a verdict, because a
discriminant with a symbolic sign is of one type on one region and another type
elsewhere; a type is claimed only where its sign condition is proved.

## Changing coordinates

### change_partial_differential_equation_variables

<a id="entry-presentation_python_api_session_change_partial_differential_equation_variables"></a>
<a id="placement-placement.python.python_module.module_change_partial_differential_equation_variables.ea81302fbc97"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
change_partial_differential_equation_variables(
    problem: PartialDifferentialEquationProblem,
    target_variables: Iterable[VariableLike],
    forward_coordinates: Optional[Iterable[ExpressionLike]] = None,
    inverse_coordinates: Optional[Iterable[ExpressionLike]] = None,
    target_dependent_function: Optional[Any] = None,
) -> PartialDifferentialEquationTransformationResult
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_change_partial_differential_equation_variables.2c37631230c9"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.change_partial_differential_equation_variables</code></p>

```python signature
change_partial_differential_equation_variables(
    problem: PartialDifferentialEquationProblem,
    target_variables: Iterable[VariableLike],
    forward_coordinates: Optional[Iterable[ExpressionLike]] = None,
    inverse_coordinates: Optional[Iterable[ExpressionLike]] = None,
    target_dependent_function: Optional[Any] = None,
) -> PartialDifferentialEquationTransformationResult
```

</details>


Transform a two-variable PDE through an exact user-supplied change of
variables. The forward and inverse coordinate maps are both required for the
chain rule to be applied exactly; the transformation is carried out
symbolically, never numerically, and the result carries the transformed problem
together with the maps used.

### canonicalize_partial_differential_equation

<a id="entry-presentation_python_api_session_canonicalize_partial_differential_equation"></a>
<a id="placement-placement.python.python_module.module_canonicalize_partial_differential_equation.a52ec715a39a"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
canonicalize_partial_differential_equation(problem: PartialDifferentialEquationProblem) -> PartialDifferentialEquationCanonicalizationResult
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_canonicalize_partial_differential_equation.c15668c55ef8"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.canonicalize_partial_differential_equation</code></p>

```python signature
canonicalize_partial_differential_equation(problem: PartialDifferentialEquationProblem) -> PartialDifferentialEquationCanonicalizationResult
```

</details>


Construct and independently verify exact canonical coordinates for a supported
PDE — the coordinates in which a second-order equation takes its canonical
principal form for its type. The coordinates are derived and then *checked* by
transforming the original equation into them, so a canonicalization is reported
only when its own verification passes.

### verify_partial_differential_equation_coordinate_transformation

<a id="entry-presentation_python_api_session_verify_partial_differential_equation_coordinate_transformation"></a>
<a id="placement-placement.python.python_module.module_verify_partial_differential_equation_coordinate_transformation.894d29fe74aa"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
verify_partial_differential_equation_coordinate_transformation(
    problem: PartialDifferentialEquationProblem,
    transformation: PartialDifferentialEquationTransformationResult,
) -> PartialDifferentialEquationTransformationVerificationReport
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_verify_partial_differential_equation_coordinate_transformation.542bb424361e"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.verify_partial_differential_equation_coordinate_transformation</code></p>

```python signature
verify_partial_differential_equation_coordinate_transformation(
    problem: PartialDifferentialEquationProblem,
    transformation: PartialDifferentialEquationTransformationResult,
) -> PartialDifferentialEquationTransformationVerificationReport
```

</details>


Independently check a coordinate transformation without producing one: the
coordinate maps are confirmed mutually inverse and the transformed equation is
confirmed to be the exact pullback of the original. No transformation runs, so
a supplied transformation is reported as given rather than repaired.

## Solving

### solve_partial_differential_equation

<a id="entry-presentation_python_api_session_solve_partial_differential_equation"></a>
<a id="placement-placement.python.python_module.module_solve_partial_differential_equation.ac810cee7c6f"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
solve_partial_differential_equation(
    problem: PartialDifferentialEquationProblem,
    method: str = "automatic",
) -> PartialDifferentialEquationSolveResult
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_solve_partial_differential_equation.810caa3f1554"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.solve_partial_differential_equation</code></p>

```python signature
solve_partial_differential_equation(
    problem: PartialDifferentialEquationProblem,
    method: str = "automatic",
) -> PartialDifferentialEquationSolveResult
```

</details>


The sound PDE dispatcher under a stable method name. `automatic` lets the
dispatcher choose among the implemented routes; a named method runs only that
route and declines when it does not apply, so a named request is never
silently answered by a different method.

Use `solve_partial_differential_equation_request` when the scope, geometry,
regularity, or solution class is part of the question.

### solve_partial_differential_equation_request

<a id="entry-presentation_python_api_session_solve_partial_differential_equation_request"></a>
<a id="placement-placement.python.python_module.module_solve_partial_differential_equation_request.cc18fc38960b"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
solve_partial_differential_equation_request(
    problem: partial_differential_equation_problem,
    scope: str,
    geometric_domain: str = "whole_space",
    regularity: str = "unrestricted",
    solution_class: str = "unrestricted",
    method: str = "automatic",
) -> partial_differential_equation_solve_result
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_solve_partial_differential_equation_request.0c3a5e7d1260"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.solve_partial_differential_equation_request</code></p>

```python signature
solve_partial_differential_equation_request(
    problem: partial_differential_equation_problem,
    scope: str,
    geometric_domain: str = "whole_space",
    regularity: str = "unrestricted",
    solution_class: str = "unrestricted",
    method: str = "automatic",
) -> partial_differential_equation_solve_result
```

</details>


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

### solve_partial_differential_equation_with_transform_axis_specifications

<a id="entry-presentation_python_api_session_solve_partial_differential_equation_with_transform_axis_specifications"></a>
<a id="placement-placement.python.python_module.module_solve_partial_differential_equation_with_transform_axis_specifications.6445539720cf"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
solve_partial_differential_equation_with_transform_axis_specifications(
    problem: PartialDifferentialEquationProblem,
    method: str,
    transform_axis_specifications: list[str],
) -> PartialDifferentialEquationSolveResult
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_solve_partial_differential_equation_with_transform_axis_specifications.12163ffe7cb2"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.solve_partial_differential_equation_with_transform_axis_specifications</code></p>

```python signature
solve_partial_differential_equation_with_transform_axis_specifications(
    problem: PartialDifferentialEquationProblem,
    method: str,
    transform_axis_specifications: list[str],
) -> PartialDifferentialEquationSolveResult
```

</details>


Solve through a transform route with the axis geometry stated explicitly and in
order: one specification per axis, naming the axis kind the transform is to
treat that coordinate as. A transform route needs to know which coordinate is
the whole line and which is the positive evolution direction; this entry makes
that part of the request rather than something a solver infers.

### separate_partial_differential_equation

<a id="entry-presentation_python_api_session_separate_partial_differential_equation"></a>
<a id="placement-placement.python.python_module.module_separate_partial_differential_equation.7ed47d2f874d"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
separate_partial_differential_equation(problem: PartialDifferentialEquationProblem) -> PartialDifferentialEquationSeparationResult
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_separate_partial_differential_equation.0863e9a4a752"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.separate_partial_differential_equation</code></p>

```python signature
separate_partial_differential_equation(problem: PartialDifferentialEquationProblem) -> PartialDifferentialEquationSeparationResult
```

</details>


Separate a supported PDE into exact one-variable ODEs. The result carries the
separated equations, the separation constants introduced, and the strategy that
produced them; each separated equation is an ordinary differential equation
that [the ODE routes](ordinary-differential-equations.md) can close.

## Point symmetries

### derive_partial_differential_equation_point_symmetries

<a id="entry-presentation_python_api_session_derive_partial_differential_equation_point_symmetries"></a>
<a id="placement-placement.python.python_module.module_derive_partial_differential_equation_point_symmetries.d34c8c04e073"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
derive_partial_differential_equation_point_symmetries(problem: partial_differential_equation_problem) -> partial_differential_equation_point_symmetry_algebra
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_derive_partial_differential_equation_point_symmetries.ee176ee754ab"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.derive_partial_differential_equation_point_symmetries</code></p>

```python signature
derive_partial_differential_equation_point_symmetries(problem: partial_differential_equation_problem) -> partial_differential_equation_point_symmetry_algebra
```

</details>


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

### partial_differential_equation_point_symmetry_generator

<a id="entry-presentation_python_api_session_partial_differential_equation_point_symmetry_generator"></a>
<a id="placement-placement.python.python_module.module_partial_differential_equation_point_symmetry_generator.780b1859c271"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
partial_differential_equation_point_symmetry_generator(
    problem: partial_differential_equation_problem,
    coordinate_infinitesimals: expression_collection_input,
    dependent_infinitesimal: expression_input,
) -> partial_differential_equation_point_symmetry_generator
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_partial_differential_equation_point_symmetry_generator.29e8c6c05930"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.partial_differential_equation_point_symmetry_generator</code></p>

```python signature
partial_differential_equation_point_symmetry_generator(
    problem: partial_differential_equation_problem,
    coordinate_infinitesimals: expression_collection_input,
    dependent_infinitesimal: expression_input,
) -> partial_differential_equation_point_symmetry_generator
```

</details>


A candidate generator, one coordinate infinitesimal per independent variable
and a dependent infinitesimal written in the unknown evaluated at them. It is a
candidate, not a certificate: every consumer verifies it is a symmetry.

### construct_partial_differential_equation_point_symmetry_action

<a id="entry-presentation_python_api_session_construct_partial_differential_equation_point_symmetry_action"></a>
<a id="placement-placement.python.python_module.module_construct_partial_differential_equation_point_symmetry_action.d6484ffbc4bd"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
construct_partial_differential_equation_point_symmetry_action(problem: partial_differential_equation_problem) -> partial_differential_equation_point_symmetry_action
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_construct_partial_differential_equation_point_symmetry_action.7eeb86f85ac4"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.construct_partial_differential_equation_point_symmetry_action</code></p>

```python signature
construct_partial_differential_equation_point_symmetry_action(problem: partial_differential_equation_problem) -> partial_differential_equation_point_symmetry_action
```

</details>


Integrate every basis generator into a one-parameter group, verify each group
by its own intertwining identity, and certify their composition as the
connected local action `u = a + A f(X)`. The result carries `parameters`,
`transformed_coordinates`, `amplitude`, `multiplier`, `intertwining`,
`invertibility`, `outstanding_obligations`, and `decline` or
`point_symmetry_decline`. `applied_to_seed(seed)` returns `A f(X)` and
`applied_to_seed_with_additive_solution(seed, additive_solution)` returns
`a + A f(X)`; the transformed coordinates must lie in the seed's chart.

### solve_partial_differential_equation_by_similarity_reduction

<a id="entry-presentation_python_api_session_solve_partial_differential_equation_by_similarity_reduction"></a>
<a id="placement-placement.python.python_module.module_solve_partial_differential_equation_by_similarity_reduction.f01d7b81443a"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
solve_partial_differential_equation_by_similarity_reduction(
    problem: partial_differential_equation_problem,
    generator: partial_differential_equation_point_symmetry_generator,
) -> partial_differential_equation_similarity_solution
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_solve_partial_differential_equation_by_similarity_reduction.e866455641db"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.solve_partial_differential_equation_by_similarity_reduction</code></p>

```python signature
solve_partial_differential_equation_by_similarity_reduction(
    problem: partial_differential_equation_problem,
    generator: partial_differential_equation_point_symmetry_generator,
) -> partial_differential_equation_similarity_solution
```

</details>


Reduce a two-variable PDE by a fiber-linear point symmetry to an ODE in the
invariant, solve that ODE as a complete family, and lift the family back. The
result carries `invariant`, `similarity_variable`, `weight`,
`reduced_equation`, `multiplier`, `lifted_family`, `lifted_constants`,
`lifted_family_verification`, `outstanding_obligations`, and `decline`. The
lifted family is a family of invariant solutions and always carries the
obligation that it is not the general solution.

## Candidate solutions and verification

A candidate family is stated, then checked. The two are deliberately separate
operations: a verified residual proves membership in the solution set and never
coverage of it, so a family that is verified is not thereby complete.

### explicit_partial_differential_equation_solution

<a id="entry-presentation_python_api_session_explicit_partial_differential_equation_solution"></a>
<a id="placement-placement.python.python_module.module_explicit_partial_differential_equation_solution.2a00578eaf74"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
explicit_partial_differential_equation_solution(
    solution: ExpressionInput,
    arbitrary_functions: Optional[list[PartialDifferentialEquationArbitraryFunction]] = None,
    proof_obligations: Optional[list[str]] = None,
) -> PartialDifferentialEquationSolutionFamily
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_explicit_partial_differential_equation_solution.ed2a21850eb6"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.explicit_partial_differential_equation_solution</code></p>

```python signature
explicit_partial_differential_equation_solution(
    solution: ExpressionLike,
    arbitrary_functions: Any = ...,
    proof_obligations: Any = ...,
) -> PartialDifferentialEquationSolutionFamily
```

</details>


State a candidate family in explicit form — the unknown written as an
expression in the coordinates — together with the arbitrary functions it treats
as free and any proof obligations it carries. Stating a family asserts nothing;
`verify_partial_differential_equation_solution` is what establishes it.

### implicit_partial_differential_equation_solution

<a id="entry-presentation_python_api_session_implicit_partial_differential_equation_solution"></a>
<a id="placement-placement.python.python_module.module_implicit_partial_differential_equation_solution.192367f01daf"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
implicit_partial_differential_equation_solution(
    residual: ExpressionInput,
    arbitrary_functions: Optional[list[PartialDifferentialEquationArbitraryFunction]] = None,
    proof_obligations: Optional[list[str]] = None,
) -> PartialDifferentialEquationSolutionFamily
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_implicit_partial_differential_equation_solution.d565ff6b0430"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.implicit_partial_differential_equation_solution</code></p>

```python signature
implicit_partial_differential_equation_solution(
    residual: ExpressionLike,
    arbitrary_functions: Any = ...,
    proof_obligations: Any = ...,
) -> PartialDifferentialEquationSolutionFamily
```

</details>


State the same kind of candidate family as a residual read as equal to zero,
for a family that cannot be solved for the unknown in closed form.

### verify_partial_differential_equation_solution

<a id="entry-presentation_python_api_session_verify_partial_differential_equation_solution"></a>
<a id="placement-placement.python.python_module.module_verify_partial_differential_equation_solution.b40079d9e42a"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
verify_partial_differential_equation_solution(
    problem: PartialDifferentialEquationProblem,
    solution: PartialDifferentialEquationSolutionFamily,
) -> PartialDifferentialEquationVerificationReport
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_verify_partial_differential_equation_solution.6fcadf40257f"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.verify_partial_differential_equation_solution</code></p>

```python signature
verify_partial_differential_equation_solution(
    problem: PartialDifferentialEquationProblem,
    solution: PartialDifferentialEquationSolutionFamily,
) -> PartialDifferentialEquationVerificationReport
```

</details>


Independently verify a candidate family against a problem by exact residual
reasoning: substitute the family into the equation and every declared
condition, and reduce the residuals symbolically. The report carries a verdict,
the residuals that were not proved zero, and any outstanding obligations, so an
inconclusive verification is distinguishable from a refutation.

## Related

- [Partial differential equation results](partial-differential-equation-results.md)
  — every record the entries above return.
- [Ordinary differential equations](ordinary-differential-equations.md) — the
  one-variable case, which separation and similarity reduction reduce to.
- [Undefined functions](undefined-functions.md) — the unknown function and its
  structural derivatives.
- [Vector calculus](vector-calculus.md) — the differential operators a PDE is
  often written with.
