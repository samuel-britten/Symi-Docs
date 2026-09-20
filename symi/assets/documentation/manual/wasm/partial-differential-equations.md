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


The records these entries return — problems, classifications, principal parts,
transformations, symmetry algebras, solution families, and verification reports
— are documented together in
[Partial differential equation results](partial-differential-equation-results.md).

## Constructing a problem

### partial_differential_equation

<a id="entry-presentation_wasm_api_session_partial_differential_equation"></a>
<a id="placement-placement.wasm.wasm_module.module_partialdifferentialequation.cbe5f4689b94"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
partialDifferentialEquation(
    equation: Expression,
    dependent_function: UndefinedFunction,
    independent_variables: string[],
    initial_conditions?: Expression[] | null,
    boundary_conditions?: Expression[] | null,
): PartialDifferentialEquationProblem
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_partialdifferentialequation.a755ce3b66b1"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.partialDifferentialEquation</code></p>

```typescript signature
partialDifferentialEquation(
    equation: Expression,
    dependent_function: UndefinedFunction,
    independent_variables: string[],
    initial_conditions?: Expression[] | null,
    boundary_conditions?: Expression[] | null,
): PartialDifferentialEquationProblem
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

<a id="entry-presentation_wasm_api_session_discover_partial_differential_equation"></a>
<a id="placement-placement.wasm.wasm_module.module_discoverpartialdifferentialequation.8b0d6696025b"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
discoverPartialDifferentialEquation(
    equation: Expression,
    initial_conditions?: Expression[] | null,
    boundary_conditions?: Expression[] | null,
): PartialDifferentialEquationProblem
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_discoverpartialdifferentialequation.466949e3ded0"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.discoverPartialDifferentialEquation</code></p>

```typescript signature
discoverPartialDifferentialEquation(
    equation: Expression,
    initial_conditions?: Expression[] | null,
    boundary_conditions?: Expression[] | null,
): PartialDifferentialEquationProblem
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

<a id="entry-presentation_wasm_api_session_partial_differential_equation_arbitrary_function"></a>
<a id="placement-placement.wasm.wasm_class.context_partialdifferentialequationarbitraryfunction.95275c8112f7"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context</p>

```typescript signature
partialDifferentialEquationArbitraryFunction(
    preferred_name: string,
    arity: number,
): PartialDifferentialEquationArbitraryFunction
```


Allocate a collision-free arbitrary function of the stated arity, for use as a
free element of a candidate solution family. The allocated name is derived from
`preferred_name` but is guaranteed not to collide with a function already
present in the context, so a family's free elements cannot be captured by a
name the problem already uses.

## Classifying

### classify_partial_differential_equation

<a id="entry-presentation_wasm_api_session_classify_partial_differential_equation"></a>
<a id="placement-placement.wasm.wasm_module.module_classifypartialdifferentialequation.a666c997e176"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
classifyPartialDifferentialEquation(problem: PartialDifferentialEquationProblem): PartialDifferentialEquationClassification
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_classifypartialdifferentialequation.e650f9bebef6"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.classifyPartialDifferentialEquation</code></p>

```typescript signature
classifyPartialDifferentialEquation(problem: PartialDifferentialEquationProblem): PartialDifferentialEquationClassification
```

</details>


Exact structural analysis of a validated scalar PDE: its order, its linearity,
its principal part, and the coefficient data each of those is read from. The
analysis is structural and exact — a coefficient whose sign or reality cannot
be *proved* is reported as undetermined rather than assumed.

### classify_second_order_partial_differential_equation

<a id="entry-presentation_wasm_api_session_classify_second_order_partial_differential_equation"></a>
<a id="placement-placement.wasm.wasm_module.module_classifysecondorderpartialdifferentialequation.37e1c5283f6c"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
classifySecondOrderPartialDifferentialEquation(problem: PartialDifferentialEquationProblem): PartialDifferentialEquationSecondOrderClassification
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_classifysecondorderpartialdifferentialequation.278c33c7f044"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.classifySecondOrderPartialDifferentialEquation</code></p>

```typescript signature
classifySecondOrderPartialDifferentialEquation(problem: PartialDifferentialEquationProblem): PartialDifferentialEquationSecondOrderClassification
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

<a id="entry-presentation_wasm_api_session_change_partial_differential_equation_variables"></a>
<a id="placement-placement.wasm.wasm_module.module_changepartialdifferentialequationvariables.9fe6a5fa1ccc"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
changePartialDifferentialEquationVariables(
    problem: PartialDifferentialEquationProblem,
    target_variables: string[],
    forward_coordinates?: Expression[] | null,
    inverse_coordinates?: Expression[] | null,
    target_dependent_function?: UndefinedFunction | null,
): PartialDifferentialEquationTransformationResult
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_changepartialdifferentialequationvariables.2b70c639987b"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.changePartialDifferentialEquationVariables</code></p>

```typescript signature
changePartialDifferentialEquationVariables(
    problem: PartialDifferentialEquationProblem,
    target_variables: string[],
    forward_coordinates?: Expression[] | null,
    inverse_coordinates?: Expression[] | null,
    target_dependent_function?: UndefinedFunction | null,
): PartialDifferentialEquationTransformationResult
```

</details>


Transform a two-variable PDE through an exact user-supplied change of
variables. The forward and inverse coordinate maps are both required for the
chain rule to be applied exactly; the transformation is carried out
symbolically, never numerically, and the result carries the transformed problem
together with the maps used.

### canonicalize_partial_differential_equation

<a id="entry-presentation_wasm_api_session_canonicalize_partial_differential_equation"></a>
<a id="placement-placement.wasm.wasm_module.module_canonicalizepartialdifferentialequation.be642e9771be"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
canonicalizePartialDifferentialEquation(problem: PartialDifferentialEquationProblem): PartialDifferentialEquationCanonicalizationResult
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_canonicalizepartialdifferentialequation.f516f4268b31"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.canonicalizePartialDifferentialEquation</code></p>

```typescript signature
canonicalizePartialDifferentialEquation(problem: PartialDifferentialEquationProblem): PartialDifferentialEquationCanonicalizationResult
```

</details>


Construct and independently verify exact canonical coordinates for a supported
PDE — the coordinates in which a second-order equation takes its canonical
principal form for its type. The coordinates are derived and then *checked* by
transforming the original equation into them, so a canonicalization is reported
only when its own verification passes.

### verify_partial_differential_equation_coordinate_transformation

<a id="entry-presentation_wasm_api_session_verify_partial_differential_equation_coordinate_transformation"></a>
<a id="placement-placement.wasm.wasm_module.module_verifypartialdifferentialequationcoordinatetransformation.723f0853a676"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
verifyPartialDifferentialEquationCoordinateTransformation(
    problem: PartialDifferentialEquationProblem,
    transformation: PartialDifferentialEquationTransformationResult,
): PartialDifferentialEquationTransformationVerificationReport
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_verifypartialdifferentialequationcoordinatetransformation.8d606f34fd5e"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.verifyPartialDifferentialEquationCoordinateTransformation</code></p>

```typescript signature
verifyPartialDifferentialEquationCoordinateTransformation(
    problem: PartialDifferentialEquationProblem,
    transformation: PartialDifferentialEquationTransformationResult,
): PartialDifferentialEquationTransformationVerificationReport
```

</details>


Independently check a coordinate transformation without producing one: the
coordinate maps are confirmed mutually inverse and the transformed equation is
confirmed to be the exact pullback of the original. No transformation runs, so
a supplied transformation is reported as given rather than repaired.

## Solving

### solve_partial_differential_equation

<a id="entry-presentation_wasm_api_session_solve_partial_differential_equation"></a>
<a id="placement-placement.wasm.wasm_module.module_solvepartialdifferentialequation.4ef3f7b147c7"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
solvePartialDifferentialEquation(
    problem: PartialDifferentialEquationProblem,
    method?: string | null,
): PartialDifferentialEquationSolveResult
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_solvepartialdifferentialequation.e4cfd20f1895"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.solvePartialDifferentialEquation</code></p>

```typescript signature
solvePartialDifferentialEquation(
    problem: PartialDifferentialEquationProblem,
    method?: string | null,
): PartialDifferentialEquationSolveResult
```

</details>


The sound PDE dispatcher under a stable method name. `automatic` lets the
dispatcher choose among the implemented routes; a named method runs only that
route and declines when it does not apply, so a named request is never
silently answered by a different method.

Use `solve_partial_differential_equation_request` when the scope, geometry,
regularity, or solution class is part of the question.

### solve_partial_differential_equation_request

<a id="entry-presentation_wasm_api_session_solve_partial_differential_equation_request"></a>
<a id="placement-placement.wasm.wasm_module.module_solvepartialdifferentialequationrequest.cd6c143bbccf"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
solvePartialDifferentialEquationRequest(
    problem: PartialDifferentialEquationProblem,
    scope: string,
    geometric_domain?: string | null,
    regularity?: string | null,
    solution_class?: string | null,
    method?: string | null,
): PartialDifferentialEquationSolveResult
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_solvepartialdifferentialequationrequest.9454cbc9afee"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.solvePartialDifferentialEquationRequest</code></p>

```typescript signature
solvePartialDifferentialEquationRequest(
    problem: PartialDifferentialEquationProblem,
    scope: string,
    geometric_domain?: string | null,
    regularity?: string | null,
    solution_class?: string | null,
    method?: string | null,
): PartialDifferentialEquationSolveResult
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

<a id="entry-presentation_wasm_api_session_solve_partial_differential_equation_with_transform_axis_specifications"></a>
<a id="placement-placement.wasm.wasm_module.module_solvepartialdifferentialequationwithtransformaxisspecifications.ec65b3a1b0a4"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
solvePartialDifferentialEquationWithTransformAxisSpecifications(
    problem: PartialDifferentialEquationProblem,
    method: string,
    transform_axis_specifications: string[],
): PartialDifferentialEquationSolveResult
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_solvepartialdifferentialequationwithtransformaxisspecifications.662e82df8c14"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.solvePartialDifferentialEquationWithTransformAxisSpecifications</code></p>

```typescript signature
solvePartialDifferentialEquationWithTransformAxisSpecifications(
    problem: PartialDifferentialEquationProblem,
    method: string,
    transform_axis_specifications: string[],
): PartialDifferentialEquationSolveResult
```

</details>


Solve through a transform route with the axis geometry stated explicitly and in
order: one specification per axis, naming the axis kind the transform is to
treat that coordinate as. A transform route needs to know which coordinate is
the whole line and which is the positive evolution direction; this entry makes
that part of the request rather than something a solver infers.

### separate_partial_differential_equation

<a id="entry-presentation_wasm_api_session_separate_partial_differential_equation"></a>
<a id="placement-placement.wasm.wasm_module.module_separatepartialdifferentialequation.39acc8c74690"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
separatePartialDifferentialEquation(problem: PartialDifferentialEquationProblem): PartialDifferentialEquationSeparationResult
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_separatepartialdifferentialequation.bc377ea512aa"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.separatePartialDifferentialEquation</code></p>

```typescript signature
separatePartialDifferentialEquation(problem: PartialDifferentialEquationProblem): PartialDifferentialEquationSeparationResult
```

</details>


Separate a supported PDE into exact one-variable ODEs. The result carries the
separated equations, the separation constants introduced, and the strategy that
produced them; each separated equation is an ordinary differential equation
that [the ODE routes](ordinary-differential-equations.md) can close.

## Point symmetries

### derive_partial_differential_equation_point_symmetries

<a id="entry-presentation_wasm_api_session_derive_partial_differential_equation_point_symmetries"></a>
<a id="placement-placement.wasm.wasm_module.module_derivepartialdifferentialequationpointsymmetries.772574d4d35d"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
derivePartialDifferentialEquationPointSymmetries(problem: PartialDifferentialEquationProblem): PartialDifferentialEquationPointSymmetryAlgebra
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_derivepartialdifferentialequationpointsymmetries.9b48ce1a250b"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.derivePartialDifferentialEquationPointSymmetries</code></p>

```typescript signature
derivePartialDifferentialEquationPointSymmetries(problem: PartialDifferentialEquationProblem): PartialDifferentialEquationPointSymmetryAlgebra
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

<a id="entry-presentation_wasm_api_session_partial_differential_equation_point_symmetry_generator"></a>
<a id="placement-placement.wasm.wasm_module.module_partialdifferentialequationpointsymmetrygenerator.90c8b91663b5"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
partialDifferentialEquationPointSymmetryGenerator(
    problem: PartialDifferentialEquationProblem,
    coordinate_infinitesimals: Expression[],
    dependent_infinitesimal: Expression,
): PartialDifferentialEquationPointSymmetryGenerator
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_partialdifferentialequationpointsymmetrygenerator.507e6f5d1b4d"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.partialDifferentialEquationPointSymmetryGenerator</code></p>

```typescript signature
partialDifferentialEquationPointSymmetryGenerator(
    problem: PartialDifferentialEquationProblem,
    coordinate_infinitesimals: Expression[],
    dependent_infinitesimal: Expression,
): PartialDifferentialEquationPointSymmetryGenerator
```

</details>


A candidate generator, one coordinate infinitesimal per independent variable
and a dependent infinitesimal written in the unknown evaluated at them. It is a
candidate, not a certificate: every consumer verifies it is a symmetry.

### construct_partial_differential_equation_point_symmetry_action

<a id="entry-presentation_wasm_api_session_construct_partial_differential_equation_point_symmetry_action"></a>
<a id="placement-placement.wasm.wasm_module.module_constructpartialdifferentialequationpointsymmetryaction.6b50472b60fd"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
constructPartialDifferentialEquationPointSymmetryAction(problem: PartialDifferentialEquationProblem): PartialDifferentialEquationPointSymmetryAction
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_constructpartialdifferentialequationpointsymmetryaction.54cba3ee5909"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.constructPartialDifferentialEquationPointSymmetryAction</code></p>

```typescript signature
constructPartialDifferentialEquationPointSymmetryAction(problem: PartialDifferentialEquationProblem): PartialDifferentialEquationPointSymmetryAction
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

<a id="entry-presentation_wasm_api_session_solve_partial_differential_equation_by_similarity_reduction"></a>
<a id="placement-placement.wasm.wasm_module.module_solvepartialdifferentialequationbysimilarityreduction.f25716664764"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
solvePartialDifferentialEquationBySimilarityReduction(
    problem: PartialDifferentialEquationProblem,
    generator: PartialDifferentialEquationPointSymmetryGenerator,
): PartialDifferentialEquationSimilaritySolution
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_solvepartialdifferentialequationbysimilarityreduction.cbb1d2d4f631"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.solvePartialDifferentialEquationBySimilarityReduction</code></p>

```typescript signature
solvePartialDifferentialEquationBySimilarityReduction(
    problem: PartialDifferentialEquationProblem,
    generator: PartialDifferentialEquationPointSymmetryGenerator,
): PartialDifferentialEquationSimilaritySolution
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

<a id="entry-presentation_wasm_api_session_explicit_partial_differential_equation_solution"></a>
<a id="placement-placement.wasm.wasm_module.module_explicitpartialdifferentialequationsolution.71efe41cb42c"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
explicitPartialDifferentialEquationSolution(
    solution: Expression,
    arbitrary_functions?: PartialDifferentialEquationArbitraryFunction[] | null,
    proof_obligations?: string[] | null,
): PartialDifferentialEquationSolutionFamily
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_explicitpartialdifferentialequationsolution.36080a4f3827"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.explicitPartialDifferentialEquationSolution</code></p>

```typescript signature
explicitPartialDifferentialEquationSolution(
    solution: Expression,
    arbitrary_functions?: PartialDifferentialEquationArbitraryFunction[] | null,
    proof_obligations?: string[] | null,
): PartialDifferentialEquationSolutionFamily
```

</details>


State a candidate family in explicit form — the unknown written as an
expression in the coordinates — together with the arbitrary functions it treats
as free and any proof obligations it carries. Stating a family asserts nothing;
`verify_partial_differential_equation_solution` is what establishes it.

### implicit_partial_differential_equation_solution

<a id="entry-presentation_wasm_api_session_implicit_partial_differential_equation_solution"></a>
<a id="placement-placement.wasm.wasm_module.module_implicitpartialdifferentialequationsolution.c7079e45bc6e"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
implicitPartialDifferentialEquationSolution(
    residual: Expression,
    arbitrary_functions?: PartialDifferentialEquationArbitraryFunction[] | null,
    proof_obligations?: string[] | null,
): PartialDifferentialEquationSolutionFamily
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_implicitpartialdifferentialequationsolution.32e5eb5b6dde"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.implicitPartialDifferentialEquationSolution</code></p>

```typescript signature
implicitPartialDifferentialEquationSolution(
    residual: Expression,
    arbitrary_functions?: PartialDifferentialEquationArbitraryFunction[] | null,
    proof_obligations?: string[] | null,
): PartialDifferentialEquationSolutionFamily
```

</details>


State the same kind of candidate family as a residual read as equal to zero,
for a family that cannot be solved for the unknown in closed form.

### verify_partial_differential_equation_solution

<a id="entry-presentation_wasm_api_session_verify_partial_differential_equation_solution"></a>
<a id="placement-placement.wasm.wasm_module.module_verifypartialdifferentialequationsolution.b86bfbc069d4"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
verifyPartialDifferentialEquationSolution(
    problem: PartialDifferentialEquationProblem,
    solution: PartialDifferentialEquationSolutionFamily,
): PartialDifferentialEquationVerificationReport
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_verifypartialdifferentialequationsolution.9d784d900bb6"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.verifyPartialDifferentialEquationSolution</code></p>

```typescript signature
verifyPartialDifferentialEquationSolution(
    problem: PartialDifferentialEquationProblem,
    solution: PartialDifferentialEquationSolutionFamily,
): PartialDifferentialEquationVerificationReport
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
