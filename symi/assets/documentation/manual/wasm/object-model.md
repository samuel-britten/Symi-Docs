# Object model

Each class is named for the Symi operation vocabulary and spelled the way
its host language spells a class: Python uses CapWords (`Expression`,
`Point2d`), JavaScript uses PascalCase (`Expression`, `Point2d`), and Kotlin
and Swift use their UniFFI prefixed forms. The names below are given in the
shared Symi spelling; see [Names in each language](introduction.md#names_in_each_language)
for the rule that maps them onto one host.

## context

The root object. It owns the symbol table (names + assumptions) and the
hash-consed expression interner. Every constructor and every mathematical
operation is a `Context` method; results are `Expression`, `Matrix`, or
geometry objects that hold a reference back to their context. Never mix
objects from different contexts.

## expression

An immutable reference into the context's hash-consed expression tree. The
same class represents numbers, symbols, arithmetic trees, function calls,
unevaluated calculus nodes (integrals, derivatives, summations, transforms,
exact polynomial-root atoms, ODE/recurrence placeholders, piecewise) and set values (intervals, finite
sets, unions, intersections, complements, image sets, condition sets).
`expression_type` reports the top-level node kind; the `is_*` shape queries
and structural accessors (`interval_lower`, `integral_integrand`,
`union_components`, …) take the node apart.

Operations that cannot produce a closed form return an
**unevaluated node** of the matching kind rather than guessing; calling
`execute` later retries evaluation (useful after substituting values).

## matrix

A dense symbolic matrix with `Expression` entries. Constructed directly
against the default context with the class itself, via `context.matrix` for an
explicit context, via `matrix_identity`, `matrix_zero`, `matrix_diagonal`, or
returned by `jacobian` / `hessian`. Row/column indices are zero-based.

## Geometry classes

`Point2d`, `Segment2d`, `Polygon2d`, `Triangle2d`, `Circle2d` — exact
symbolic plane geometry built from `Expression` coordinates. Constructing
these classes directly uses the default context; their matching `Context`
methods provide explicit-context construction.

## undefined_function

A callable proxy for a user-named function symbol, used to build the unknown
function in ODE/recurrence equations: `y = context.undefined_function("y")`,
then `y(x)` (Python) or `y.call([x])` (JS) produces the function-call
expression `y(x)`.

## Result-shape classes (WASM only)

Where the Python binding returns tuples, the WASM binding returns small
classes with named getters:

| class | getters | returned by |
|---|---|---|
| `RootMultiplicity` | `root`, `multiplicity` | `rootsWithMultiplicities` |
| `Eigenpair` | `eigenvalue`, `vectors` | `eigenvectors` |
| `PrimeFactor` | `prime`, `multiplicity` | `factorInteger` |
| `IsolatingInterval` | `lower`, `upper` | `isolateRealRoots` |
| `QuadraticContinuedFractionExpansion` | `initialTerms`, `periodicTerms` | `continuedFractionQuadraticIrrational` |
| `VertexAngle` | `vertex`, `angle` | `interiorAngles` |

## Three-valued logic

Assumption and set queries (`is_real`, `is_positive`, `is_integer`,
`is_rational`, `is_negative`, `is_nonzero`, `is_finite`, `is_member`,
`is_subset`, `is_prime`) are three-valued: a definite yes/no on structural
proof, otherwise "unknown" (`None` in Python, `undefined` in JS). Unknown
means *undecided*, never *false*.

## Example

Every object records its owner, so a value keeps working only inside the context that made it.

```javascript
const first = new symi.Context();
const second = new symi.Context();
const x = first.symbol("x");

console.log(first.differentiate(x.power(2), "x").toString());
try {
    second.differentiate(x, "x");
} catch (error) {
    console.log(error.category);
}
```


## Additional API

### Context

<a id="entry-presentation_wasm_object_model_capability_contexts_context_api_session"></a>
<a id="placement-placement.wasm.wasm_class.context.bae89741122f"></a>
<p class="symi-entry-owner">Context constructor</p>

```typescript signature
new Context()
```

Create an isolated context with its own symbol table, interner, and assumptions.

### active

<a id="entry-presentation_wasm_object_model_capability_contexts_active_api_parallelism_parallelismcapability_active"></a>
<a id="placement-placement.wasm.wasm_class.parallelismcapability_active.7a56c9003ea3"></a>
<p class="symi-entry-owner">ParallelismCapability property</p>

```typescript signature
readonly active: boolean
```

Whether the selected backend can currently execute parallel work.

### add

<a id="entry-presentation_wasm_object_model_capability_contexts_add_api_expression_add"></a>
<a id="placement-placement.wasm.wasm_class.expression_add.96a43fe08167"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
add(other: Expression): Expression
```

Sum of this expression and `other`.

### addAssumptions

<a id="entry-presentation_wasm_object_model_capability_contexts_add_assumptions_api_session_add_assumptions"></a>
<a id="placement-placement.wasm.wasm_module.module_addassumptions.4a919b81fb21"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
addAssumptions(proposition: AssumptionProposition): void
```

Add a proposition to the default context's durable assumption store.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_addassumptions.b31f141c59eb"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.addAssumptions</code></p>

```typescript signature
addAssumptions(proposition: AssumptionProposition): void
```

</details>

### admitsAdditiveSolutionSymmetry

<a id="entry-presentation_wasm_object_model_capability_contexts_admits_additive_solution_symmetry_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_admits_additive_solution_symmetry"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryaction_admitsadditivesolutionsymmetry.330e9c43133f"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAction property</p>

```typescript signature
readonly admitsAdditiveSolutionSymmetry: boolean
```

Whether the action adds an arbitrary solution by linear superposition.

### admitsAdditiveSolutionSymmetry

<a id="entry-presentation_wasm_object_model_capability_contexts_admits_additive_solution_symmetry_api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_admits_additive_solution_symmetry"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryalgebra_admitsadditivesolutionsymmetry.f5647b5468e6"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAlgebra property</p>

```typescript signature
readonly admitsAdditiveSolutionSymmetry: boolean
```

Whether adding any solution of the linear homogeneous equation is also a symmetry.

### algebraicAssumption

<a id="entry-presentation_wasm_object_model_capability_contexts_algebraic_assumption_api_session_algebraic_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_algebraicassumption.cadab791299a"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
algebraicAssumption(subject: Expression): AssumptionProposition
```

Build an algebraicity assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_algebraicassumption.2224c5ffdadb"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.algebraicAssumption</code></p>

```typescript signature
algebraicAssumption(subject: Expression): AssumptionProposition
```

</details>

### amplitude

<a id="entry-presentation_wasm_object_model_capability_contexts_amplitude_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_amplitude"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryaction_amplitude.2730e8b0bc62"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAction property</p>

```typescript signature
readonly amplitude: Expression | undefined
```

The amplitude multiplying the transformed seed.

### appliedToSeed

<a id="entry-presentation_wasm_object_model_capability_contexts_applied_to_seed_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_applied_to_seed"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryaction_appliedtoseed.219eb332d48f"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAction method</p>

```typescript signature
appliedToSeed(seed: UndefinedFunction): Expression
```

The transformed seed solution under the action.

### appliedToSeedWithAdditiveSolution

<a id="entry-presentation_wasm_object_model_capability_contexts_applied_to_seed_with_additive_solution_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_applied_to_seed_with_additive_solution"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryaction_appliedtoseedwithadditivesolution.8948049973bd"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAction method</p>

```typescript signature
appliedToSeedWithAdditiveSolution(
    seed: UndefinedFunction,
    additive_solution: UndefinedFunction,
): Expression
```

The transformed seed solution plus an added solution under the action.

### arbitraryFunctions

<a id="entry-presentation_wasm_object_model_capability_contexts_arbitrary_functions_api_partial_differential_equations_partialdifferentialequationsolutionfamily_arbitrary_functions"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolutionfamily_arbitraryfunctions.65e4b98a96a7"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolutionFamily property</p>

```typescript signature
readonly arbitraryFunctions: PartialDifferentialEquationArbitraryFunction[]
```

The functions that stay arbitrary and opaque throughout verification.

### arity

<a id="entry-presentation_wasm_object_model_capability_contexts_arity_api_partial_differential_equations_partialdifferentialequationarbitraryfunction_arity"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationarbitraryfunction_arity.d1caa458c863"></a>
<p class="symi-entry-owner">PartialDifferentialEquationArbitraryFunction property</p>

```typescript signature
readonly arity: number
```

The recorded and validated function arity.

### assumptionPropositionFromLogicalExpression

<a id="entry-presentation_wasm_object_model_capability_contexts_assumption_proposition_from_logical_expression_api_session_assumption_proposition_from_logical_expression"></a>
<a id="placement-placement.wasm.wasm_module.module_assumptionpropositionfromlogicalexpression.135c42fd1172"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
assumptionPropositionFromLogicalExpression(logical_expression: Expression): AssumptionProposition
```

Convert a supported logical expression to a typed assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_assumptionpropositionfromlogicalexpression.5ea25bd33b20"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.assumptionPropositionFromLogicalExpression</code></p>

```typescript signature
assumptionPropositionFromLogicalExpression(logical_expression: Expression): AssumptionProposition
```

</details>

### assumptionsOf

<a id="entry-presentation_wasm_object_model_capability_contexts_assumptions_of_api_session_assumptions_of"></a>
<a id="placement-placement.wasm.wasm_module.module_assumptionsof.55389b6d8956"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
assumptionsOf(name: string): string
```

Return every assumption declared about one symbol, as a list of proposition texts such as `"real(x)"` or `"prime(n)"`. The variable may be a name or same-context symbol. The list is what was declared, not what can be proved; use `ask` for a three-valued verdict.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_assumptionsof.3e2500baccd2"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.assumptionsOf</code></p>

```typescript signature
assumptionsOf(value: VariableLike): Record<string, string>
```

<a id="placement-placement.wasm.wasm_class.context_assumptionsof.66a8eb453c55"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.assumptionsOf</code></p>

```typescript signature
assumptionsOf(name: string): string
```

<a id="placement-placement.wasm.javascript_facade.symifacade_assumptionsof.b9741e10cd22"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.assumptionsOf</code></p>

```typescript signature
assumptionsOf(value: VariableLike): Record<string, string>
```

</details>

### backend

<a id="entry-presentation_wasm_object_model_capability_contexts_backend_api_parallelism_parallelismcapability_backend"></a>
<a id="placement-placement.wasm.wasm_class.parallelismcapability_backend.6ace752fbfa8"></a>
<p class="symi-entry-owner">ParallelismCapability property</p>

```typescript signature
readonly backend: string
```

Return the backend selected for this target.

### basis

<a id="entry-presentation_wasm_object_model_capability_contexts_basis_api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_basis"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryalgebra_basis.eddc9c0c01b2"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAlgebra property</p>

```typescript signature
readonly basis: PartialDifferentialEquationPointSymmetryGenerator[]
```

The independently verified basis generators, one per parameter.

### boundaryConditionResiduals

<a id="entry-presentation_wasm_object_model_capability_contexts_boundary_condition_residuals_api_partial_differential_equations_partialdifferentialequationverificationreport_boundary_condition_residuals"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationverificationreport_boundaryconditionresiduals.1c35c85c2d81"></a>
<p class="symi-entry-owner">PartialDifferentialEquationVerificationReport property</p>

```typescript signature
readonly boundaryConditionResiduals: PartialDifferentialEquationVerificationResidual[]
```

One reduced residual per boundary condition, in insertion order.

### boundaryConditions

<a id="entry-presentation_wasm_object_model_capability_contexts_boundary_conditions_api_partial_differential_equations_partialdifferentialequationproblem_boundary_conditions"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationproblem_boundaryconditions.b75ca8d49cd1"></a>
<p class="symi-entry-owner">PartialDifferentialEquationProblem property</p>

```typescript signature
readonly boundaryConditions: Expression[]
```

The boundary-condition residuals in insertion order.

### canonicalizePartialDifferentialEquation

<a id="entry-presentation_wasm_object_model_capability_contexts_canonicalize_partial_differential_equation_api_partial_differential_equations_session_canonicalize_partial_differential_equation"></a>
<a id="placement-placement.wasm.wasm_module.module_canonicalizepartialdifferentialequation.be642e9771be"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
canonicalizePartialDifferentialEquation(problem: PartialDifferentialEquationProblem): PartialDifferentialEquationCanonicalizationResult
```

Construct and independently verify exact canonical coordinates for a supported PDE.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_canonicalizepartialdifferentialequation.f516f4268b31"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.canonicalizePartialDifferentialEquation</code></p>

```typescript signature
canonicalizePartialDifferentialEquation(problem: PartialDifferentialEquationProblem): PartialDifferentialEquationCanonicalizationResult
```

</details>

### canonicalized

<a id="entry-presentation_wasm_object_model_capability_contexts_canonicalized_api_partial_differential_equations_partialdifferentialequationcanonicalizationresult_canonicalized"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcanonicalizationresult_canonicalized.a1fcbcf36d91"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCanonicalizationResult property</p>

```typescript signature
readonly canonicalized: boolean
```

Whether verified canonical coordinates were constructed.

### cases

<a id="entry-presentation_wasm_object_model_capability_contexts_cases_api_partial_differential_equations_partialdifferentialequationsecondorderclassification_cases"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsecondorderclassification_cases.f4b384b5a07a"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSecondOrderClassification property</p>

```typescript signature
readonly cases: PartialDifferentialEquationSecondOrderTypeCase[]
```

The complete exact case table, when the verdict is conditional.

### changePartialDifferentialEquationVariables

<a id="entry-presentation_wasm_object_model_capability_contexts_change_partial_differential_equation_variables_api_partial_differential_equations_session_change_partial_differential_equation_variables"></a>
<a id="placement-placement.wasm.wasm_module.module_changepartialdifferentialequationvariables.9fe6a5fa1ccc"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
changePartialDifferentialEquationVariables(
    problem: PartialDifferentialEquationProblem,
    target_variables: string[],
    forward_coordinates?: Expression[] | null,
    inverse_coordinates?: Expression[] | null,
    target_dependent_function?: UndefinedFunction | null,
): PartialDifferentialEquationTransformationResult
```

Transform a two-variable PDE through an exact user-supplied change of variables.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_changepartialdifferentialequationvariables.2b70c639987b"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.changePartialDifferentialEquationVariables</code></p>

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

### claimedGoverningResidual

<a id="entry-presentation_wasm_object_model_capability_contexts_claimed_governing_residual_api_partial_differential_equations_partialdifferentialequationtransformationverificationreport_claimed_governing_residual"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationtransformationverificationreport_claimedgoverningresidual.0461d4db2c4c"></a>
<p class="symi-entry-owner">PartialDifferentialEquationTransformationVerificationReport property</p>

```typescript signature
readonly claimedGoverningResidual: Expression
```

The governing residual the transformation claimed.

### classifyPartialDifferentialEquation

<a id="entry-presentation_wasm_object_model_capability_contexts_classify_partial_differential_equation_api_partial_differential_equations_session_classify_partial_differential_equation"></a>
<a id="placement-placement.wasm.wasm_module.module_classifypartialdifferentialequation.a666c997e176"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
classifyPartialDifferentialEquation(problem: PartialDifferentialEquationProblem): PartialDifferentialEquationClassification
```

Classify a validated scalar partial differential equation with exact structural analysis.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_classifypartialdifferentialequation.e650f9bebef6"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.classifyPartialDifferentialEquation</code></p>

```typescript signature
classifyPartialDifferentialEquation(problem: PartialDifferentialEquationProblem): PartialDifferentialEquationClassification
```

</details>

### classifySecondOrderPartialDifferentialEquation

<a id="entry-presentation_wasm_object_model_capability_contexts_classify_second_order_partial_differential_equation_api_partial_differential_equations_session_classify_second_order_partial_differential_equation"></a>
<a id="placement-placement.wasm.wasm_module.module_classifysecondorderpartialdifferentialequation.37e1c5283f6c"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
classifySecondOrderPartialDifferentialEquation(problem: PartialDifferentialEquationProblem): PartialDifferentialEquationSecondOrderClassification
```

Classify a two-variable linear second-order PDE over real coordinates.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_classifysecondorderpartialdifferentialequation.278c33c7f044"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.classifySecondOrderPartialDifferentialEquation</code></p>

```typescript signature
classifySecondOrderPartialDifferentialEquation(problem: PartialDifferentialEquationProblem): PartialDifferentialEquationSecondOrderClassification
```

</details>

### clearAllAssumptions

<a id="entry-presentation_wasm_object_model_capability_contexts_clear_all_assumptions_api_session_clear_all_assumptions"></a>
<a id="placement-placement.wasm.wasm_module.module_clearallassumptions.0db5db87e18d"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
clearAllAssumptions(): void
```

Clear all assumptions in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_clearallassumptions.bd79ad9a9a16"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.clearAllAssumptions</code></p>

```typescript signature
clearAllAssumptions(): void
```

</details>

### clearAssumptions

<a id="entry-presentation_wasm_object_model_capability_contexts_clear_assumptions_api_session_clear_assumptions"></a>
<a id="placement-placement.wasm.wasm_module.module_clearassumptions.b12f408b3470"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
clearAssumptions(name: string): void
```

Reset one symbol's assumptions to the default (complex domain, every property unknown).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_clearassumptions.5956b856933d"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.clearAssumptions</code></p>

```typescript signature
clearAssumptions(name: string): void
```

</details>

### coefficientData

<a id="entry-presentation_wasm_object_model_capability_contexts_coefficient_data_api_partial_differential_equations_partialdifferentialequationclassification_coefficient_data"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationclassification_coefficientdata.8e7c41f8826b"></a>
<p class="symi-entry-owner">PartialDifferentialEquationClassification property</p>

```typescript signature
readonly coefficientData: PartialDifferentialEquationCoefficientData
```

The exact affine coefficient data extracted from the governing residual.

### compiled

<a id="entry-presentation_wasm_object_model_capability_contexts_compiled_api_parallelism_parallelismcapability_compiled"></a>
<a id="placement-placement.wasm.wasm_class.parallelismcapability_compiled.cdc011ae2a95"></a>
<p class="symi-entry-owner">ParallelismCapability property</p>

```typescript signature
readonly compiled: boolean
```

Whether this target was compiled with a parallel backend.

### complexAssumption

<a id="entry-presentation_wasm_object_model_capability_contexts_complex_assumption_api_session_complex_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_complexassumption.1304cbe2e12a"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
complexAssumption(subject: Expression): AssumptionProposition
```

Build a finite-complex assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_complexassumption.da3971bb10ac"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.complexAssumption</code></p>

```typescript signature
complexAssumption(subject: Expression): AssumptionProposition
```

</details>

### complexEntries

<a id="entry-presentation_wasm_object_model_capability_contexts_complex_entries_api_session_complex_entries"></a>
<a id="placement-placement.wasm.wasm_module.module_complexentries.e48f22cc70fa"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
complexEntries(subject: Matrix): AssumptionProposition
```

Build a finite-complex-entry proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_complexentries.6d9dfd9287af"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.complexEntries</code></p>

```typescript signature
complexEntries(subject: Matrix): AssumptionProposition
```

</details>

### components

<a id="entry-presentation_wasm_object_model_capability_contexts_components_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_components"></a>
<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsystemsolveresult_components.b446bfacdaad"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSystemSolveResult property</p>

```typescript signature
readonly components: Expression[]
```

One explicit value per declared unknown, in declaration order, when solved.

### compositeAssumption

<a id="entry-presentation_wasm_object_model_capability_contexts_composite_assumption_api_session_composite_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_compositeassumption.3b1dc4123512"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
compositeAssumption(subject: Expression): AssumptionProposition
```

Build a compositeness assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_compositeassumption.fa27370d4eed"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.compositeAssumption</code></p>

```typescript signature
compositeAssumption(subject: Expression): AssumptionProposition
```

</details>

### compositionResiduals

<a id="entry-presentation_wasm_object_model_capability_contexts_composition_residuals_api_partial_differential_equations_partialdifferentialequationtransformationverificationreport_composition_residuals"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationtransformationverificationreport_compositionresiduals.d94d4f97f722"></a>
<p class="symi-entry-owner">PartialDifferentialEquationTransformationVerificationReport property</p>

```typescript signature
readonly compositionResiduals: Expression[]
```

Every forward and inverse map-composition residual.

### condition

<a id="entry-presentation_wasm_object_model_capability_contexts_condition_api_partial_differential_equations_partialdifferentialequationsecondordertypecase_condition"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsecondordertypecase_condition.742ceaffa3e1"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSecondOrderTypeCase property</p>

```typescript signature
readonly condition: AssumptionProposition
```

The exact condition under which this case's classical type holds.

### congruenceModulus

<a id="entry-presentation_wasm_object_model_capability_contexts_congruence_modulus_api_assumptionproposition_congruence_modulus"></a>
<a id="placement-placement.wasm.wasm_module.module_congruencemodulus.17e549d7616a"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
congruenceModulus(proposition: AssumptionProposition): Expression | undefined
```

Return the congruence modulus when present.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.assumptionproposition_congruencemodulus.ec7759ccca4c"></a>
<p class="symi-entry-owner">AssumptionProposition method: <code>AssumptionProposition.congruenceModulus</code></p>

```typescript signature
congruenceModulus(): Expression | undefined
```

</details>

### congruentAssumption

<a id="entry-presentation_wasm_object_model_capability_contexts_congruent_assumption_api_defaults_session_congruent_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_congruentassumption.906a88486d5e"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
congruentAssumption(
    left: Expression,
    right: Expression,
    modulus: Expression,
): AssumptionProposition
```

Build an integer-congruence assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_congruentassumption.f6180c227f00"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.congruentAssumption</code></p>

```typescript signature
congruentAssumption(
    left: Expression,
    right: Expression,
    modulus: Expression,
): AssumptionProposition
```

</details>

### constructPartialDifferentialEquationPointSymmetryAction

<a id="entry-presentation_wasm_object_model_capability_contexts_construct_partial_differential_equation_point_symmetry_action_api_partial_differential_equations_session_construct_partial_differential_equation_point_symmetry_action"></a>
<a id="placement-placement.wasm.wasm_module.module_constructpartialdifferentialequationpointsymmetryaction.6b50472b60fd"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
constructPartialDifferentialEquationPointSymmetryAction(problem: PartialDifferentialEquationProblem): PartialDifferentialEquationPointSymmetryAction
```

Integrate and compose the point-symmetry algebra of a PDE into its connected local action.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_constructpartialdifferentialequationpointsymmetryaction.54cba3ee5909"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.constructPartialDifferentialEquationPointSymmetryAction</code></p>

```typescript signature
constructPartialDifferentialEquationPointSymmetryAction(problem: PartialDifferentialEquationProblem): PartialDifferentialEquationPointSymmetryAction
```

</details>

### coordinateChange

<a id="entry-presentation_wasm_object_model_capability_contexts_coordinate_change_api_partial_differential_equations_partialdifferentialequationtransformationresult_coordinate_change"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationtransformationresult_coordinatechange.8d17b2f53859"></a>
<p class="symi-entry-owner">PartialDifferentialEquationTransformationResult property</p>

```typescript signature
readonly coordinateChange: PartialDifferentialEquationCoordinateChange | undefined
```

The validated coordinate change of a successful transformation.

### coordinateInfinitesimals

<a id="entry-presentation_wasm_object_model_capability_contexts_coordinate_infinitesimals_api_partial_differential_equations_partialdifferentialequationpointsymmetrygenerator_coordinate_infinitesimals"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetrygenerator_coordinateinfinitesimals.abdbda70555b"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryGenerator property</p>

```typescript signature
readonly coordinateInfinitesimals: Expression[]
```

The coordinate infinitesimals in the problem's independent-variable order.

### couldHold

<a id="entry-presentation_wasm_object_model_capability_contexts_could_hold_api_assumptionscope_could_hold"></a>
<a id="placement-placement.wasm.wasm_class.assumptionscope_couldhold.2d2a6b64246b"></a>
<p class="symi-entry-owner">AssumptionScope method</p>

```typescript signature
couldHold(proposition: AssumptionProposition): boolean | undefined
```

Ask whether a proposition is compatible with the immutable scope snapshot.

### couldHold

<a id="entry-presentation_wasm_object_model_capability_contexts_could_hold_api_session_could_hold"></a>
<a id="placement-placement.wasm.wasm_module.module_couldhold.4201d9b1b3bb"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
couldHold(proposition: AssumptionProposition): boolean | undefined
```

Ask whether a proposition is compatible with the default context's assumptions.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_couldhold.66586843bd55"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.couldHold</code></p>

```typescript signature
couldHold(proposition: AssumptionProposition): boolean | undefined
```

</details>

### decline

<a id="entry-presentation_wasm_object_model_capability_contexts_decline_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_decline"></a>
<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsolveresult_decline.24f117c6e555"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSolveResult property</p>

```typescript signature
readonly decline: string | undefined
```

The typed reason no certified candidate was produced.

### decline

<a id="entry-presentation_wasm_object_model_capability_contexts_decline_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_decline"></a>
<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsystemsolveresult_decline.a04d9d49a2dc"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSystemSolveResult property</p>

```typescript signature
readonly decline: string | undefined
```

The typed reason no certified assignment was produced.

### decline

<a id="entry-presentation_wasm_object_model_capability_contexts_decline_api_partial_differential_equations_partialdifferentialequationcanonicalizationresult_decline"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcanonicalizationresult_decline.864bf76b4827"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCanonicalizationResult property</p>

```typescript signature
readonly decline: string | undefined
```

The exact reason automatic canonicalization declined.

### decline

<a id="entry-presentation_wasm_object_model_capability_contexts_decline_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_decline"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryaction_decline.f20fea2d2f62"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAction property</p>

```typescript signature
readonly decline: string | undefined
```

The typed reason the action was not constructed.

### decline

<a id="entry-presentation_wasm_object_model_capability_contexts_decline_api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_decline"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryalgebra_decline.5d9e716a25c4"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAlgebra property</p>

```typescript signature
readonly decline: string | undefined
```

The typed reason the algebra was not derived.

### decline

<a id="entry-presentation_wasm_object_model_capability_contexts_decline_api_partial_differential_equations_partialdifferentialequationsecondorderclassification_decline"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsecondorderclassification_decline.db4e6719bf15"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSecondOrderClassification property</p>

```typescript signature
readonly decline: string | undefined
```

The exact reason an unknown analysis could not be completed.

### decline

<a id="entry-presentation_wasm_object_model_capability_contexts_decline_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_decline"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsimilaritysolution_decline.852cf946c2d7"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSimilaritySolution property</p>

```typescript signature
readonly decline: string | undefined
```

The typed reason no similarity family was produced.

### decline

<a id="entry-presentation_wasm_object_model_capability_contexts_decline_api_partial_differential_equations_partialdifferentialequationsolveresult_decline"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolveresult_decline.661f84740037"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolveResult property</p>

```typescript signature
readonly decline: string | undefined
```

The stable decline reason, when no solution was produced.

### decline

<a id="entry-presentation_wasm_object_model_capability_contexts_decline_api_partial_differential_equations_partialdifferentialequationtransformationresult_decline"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationtransformationresult_decline.421dc5aa6263"></a>
<p class="symi-entry-owner">PartialDifferentialEquationTransformationResult property</p>

```typescript signature
readonly decline: string | undefined
```

The exact reason no transformation was produced.

### defaultContext

<a id="entry-presentation_wasm_object_model_capability_contexts_default_context_api_defaults_session_default_context"></a>
<a id="placement-placement.wasm.wasm_module.module_defaultcontext.6f6779c9ec73"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
defaultContext(): Context
```

Return a handle to the thread's default context — the same context every module-level function and direct structural-class constructor uses. Use it for `undefined_function`, or to pass to code written against the explicit-context API. Each call returns a new handle to the same underlying context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_defaultcontext.9502059e3f0c"></a>
<p class="symi-entry-owner">SymiFacade property: <code>SymiFacade.defaultContext</code></p>

```typescript signature
defaultContext: Context
```

</details>

### definedAssumption

<a id="entry-presentation_wasm_object_model_capability_contexts_defined_assumption_api_session_defined_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_definedassumption.5219edfb0174"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
definedAssumption(subject: Expression): AssumptionProposition
```

Build a pointwise definedness assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_definedassumption.8c5bd258ba52"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.definedAssumption</code></p>

```typescript signature
definedAssumption(subject: Expression): AssumptionProposition
```

</details>

### dependentFunction

<a id="entry-presentation_wasm_object_model_capability_contexts_dependent_function_api_partial_differential_equations_partialdifferentialequationproblem_dependent_function"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationproblem_dependentfunction.9db624a214dc"></a>
<p class="symi-entry-owner">PartialDifferentialEquationProblem property</p>

```typescript signature
readonly dependentFunction: string
```

The declared dependent-function name.

### dependentInfinitesimal

<a id="entry-presentation_wasm_object_model_capability_contexts_dependent_infinitesimal_api_partial_differential_equations_partialdifferentialequationpointsymmetrygenerator_dependent_infinitesimal"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetrygenerator_dependentinfinitesimal.f8f04bc3c924"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryGenerator property</p>

```typescript signature
readonly dependentInfinitesimal: Expression
```

The dependent infinitesimal of the generator.

### derivativeCoefficients

<a id="entry-presentation_wasm_object_model_capability_contexts_derivative_coefficients_api_partial_differential_equations_partialdifferentialequationprincipalpart_derivative_coefficients"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationprincipalpart_derivativecoefficients.6a4bbb5c5d56"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPrincipalPart property</p>

```typescript signature
readonly derivativeCoefficients: PartialDifferentialEquationPrincipalCoefficient[]
```

The raw mixed-derivative coefficients, before symmetrization halves them.

### derivativeOrders

<a id="entry-presentation_wasm_object_model_capability_contexts_derivative_orders_unresolved"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationjetcoefficient_derivativeorders.e19d6b4d3f6d"></a>
<p class="symi-entry-owner">PartialDifferentialEquationJetCoefficient property</p>

```typescript signature
readonly derivativeOrders: Uint32Array
```

The derivative multi-index of the jet this coefficient multiplies.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationprincipalcoefficient_derivativeorders.e1f27e9ced4d"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPrincipalCoefficient property: <code>PartialDifferentialEquationPrincipalCoefficient.derivativeOrders</code></p>

```typescript signature
readonly derivativeOrders: Uint32Array
```

</details>

### derivePartialDifferentialEquationPointSymmetries

<a id="entry-presentation_wasm_object_model_capability_contexts_derive_partial_differential_equation_point_symmetries_api_partial_differential_equations_session_derive_partial_differential_equation_point_symmetries"></a>
<a id="placement-placement.wasm.wasm_module.module_derivepartialdifferentialequationpointsymmetries.772574d4d35d"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
derivePartialDifferentialEquationPointSymmetries(problem: PartialDifferentialEquationProblem): PartialDifferentialEquationPointSymmetryAlgebra
```

Derive the point-symmetry algebra of a scalar PDE, each basis generator independently verified.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_derivepartialdifferentialequationpointsymmetries.9b48ce1a250b"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.derivePartialDifferentialEquationPointSymmetries</code></p>

```typescript signature
derivePartialDifferentialEquationPointSymmetries(problem: PartialDifferentialEquationProblem): PartialDifferentialEquationPointSymmetryAlgebra
```

</details>

### deserializeAssumptionProposition

<a id="entry-presentation_wasm_object_model_capability_contexts_deserialize_assumption_proposition_api_session_deserialize_assumption_proposition"></a>
<a id="placement-placement.wasm.wasm_module.module_deserializeassumptionproposition.4165a4b54429"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
deserializeAssumptionProposition(text: string): AssumptionProposition
```

Parse a versioned canonical assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_deserializeassumptionproposition.aff4c5500d99"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.deserializeAssumptionProposition</code></p>

```typescript signature
deserializeAssumptionProposition(text: string): AssumptionProposition
```

</details>

### determiningEquations

<a id="entry-presentation_wasm_object_model_capability_contexts_determining_equations_api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_determining_equations"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryalgebra_determiningequations.f099cf8497a9"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAlgebra property</p>

```typescript signature
readonly determiningEquations: Expression[]
```

The determining equations exactly as derived, before any reduction.

### diagnostic

<a id="entry-presentation_wasm_object_model_capability_contexts_diagnostic_api_parallelism_bulkexpressionoutcome_diagnostic"></a>
<a id="placement-placement.wasm.wasm_class.bulkexpressionoutcome_diagnostic.3aff803bd40b"></a>
<p class="symi-entry-owner">BulkExpressionOutcome property</p>

```typescript signature
readonly diagnostic: string | undefined
```

Return the item diagnostic when the operation declined or failed.

### diagnostic

<a id="entry-presentation_wasm_object_model_capability_contexts_diagnostic_api_parallelism_bulktextoutcome_diagnostic"></a>
<a id="placement-placement.wasm.wasm_class.bulktextoutcome_diagnostic.1f99261ae9a5"></a>
<p class="symi-entry-owner">BulkTextOutcome property</p>

```typescript signature
readonly diagnostic: string | undefined
```

Return the item diagnostic when the operation declined or failed.

### diagonalMatrix

<a id="entry-presentation_wasm_object_model_capability_contexts_diagonal_matrix_api_session_diagonal_matrix"></a>
<a id="placement-placement.wasm.wasm_module.module_diagonalmatrix.0b4ff30c00c6"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
diagonalMatrix(subject: Matrix): AssumptionProposition
```

Build a diagonal-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_diagonalmatrix.25c6eea29c73"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.diagonalMatrix</code></p>

```typescript signature
diagonalMatrix(subject: Matrix): AssumptionProposition
```

</details>

### differentiateBulk

<a id="entry-presentation_wasm_object_model_capability_contexts_differentiate_bulk_api_session_differentiate_bulk"></a>
<a id="placement-placement.wasm.wasm_module.module_differentiatebulk.88e9636eaec7"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
differentiateBulk(
    targets: Expression[],
    variable: Expression,
): BulkExpressionOutcome[]
```

Differentiate an ordered collection in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_differentiatebulk.60c81c04a52a"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.differentiateBulk</code></p>

```typescript signature
differentiateBulk(
    targets: Expression[],
    variable: Expression,
): BulkExpressionOutcome[]
```

</details>

### dischargedObligations

<a id="entry-presentation_wasm_object_model_capability_contexts_discharged_obligations_api_partial_differential_equations_partialdifferentialequationsolutionprovenance_discharged_obligations"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolutionprovenance_dischargedobligations.346e920762b6"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolutionProvenance property</p>

```typescript signature
readonly dischargedObligations: string[]
```

The obligations discharged by exact query before the solution was returned.

### discoverPartialDifferentialEquation

<a id="entry-presentation_wasm_object_model_capability_contexts_discover_partial_differential_equation_api_partial_differential_equations_session_discover_partial_differential_equation"></a>
<a id="placement-placement.wasm.wasm_module.module_discoverpartialdifferentialequation.8b0d6696025b"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
discoverPartialDifferentialEquation(
    equation: Expression,
    initial_conditions?: Expression[] | null,
    boundary_conditions?: Expression[] | null,
): PartialDifferentialEquationProblem
```

Discover the unique scalar partial differential equation signature from one governing residual, in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_discoverpartialdifferentialequation.466949e3ded0"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.discoverPartialDifferentialEquation</code></p>

```typescript signature
discoverPartialDifferentialEquation(
    equation: Expression,
    initial_conditions?: Expression[] | null,
    boundary_conditions?: Expression[] | null,
): PartialDifferentialEquationProblem
```

</details>

### discriminant

<a id="entry-presentation_wasm_object_model_capability_contexts_discriminant_api_partial_differential_equations_partialdifferentialequationsecondorderclassification_discriminant"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsecondorderclassification_discriminant.153d7de9dec8"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSecondOrderClassification property</p>

```typescript signature
readonly discriminant: Expression
```

The exact discriminant `b^2 - a*c` of the symmetric principal matrix.

### elements

<a id="entry-presentation_wasm_object_model_capability_contexts_elements_api_results_setenumeration_elements"></a>
<a id="placement-placement.wasm.wasm_class.setenumeration_elements.521d21fa5162"></a>
<p class="symi-entry-owner">SetEnumeration property</p>

```typescript signature
readonly elements: Expression[]
```

The exact elements produced, in increasing order.

### equalAssumption

<a id="entry-presentation_wasm_object_model_capability_contexts_equal_assumption_api_defaults_session_equal_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_equalassumption.24d5230bded4"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
equalAssumption(
    left: Expression,
    right: Expression,
): AssumptionProposition
```

Build an equality assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_equalassumption.8c5d0d48bbee"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.equalAssumption</code></p>

```typescript signature
equalAssumption(
    left: Expression,
    right: Expression,
): AssumptionProposition
```

</details>

### equationType

<a id="entry-presentation_wasm_object_model_capability_contexts_equation_type_api_partial_differential_equations_partialdifferentialequationsecondorderclassification_equation_type"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsecondorderclassification_equationtype.5766d4f3f662"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSecondOrderClassification property</p>

```typescript signature
readonly equationType: string | undefined
```

The single proved classical type, when the verdict is definite.

### equationType

<a id="entry-presentation_wasm_object_model_capability_contexts_equation_type_api_partial_differential_equations_partialdifferentialequationsecondordertypecase_equation_type"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsecondordertypecase_equationtype.46e990429976"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSecondOrderTypeCase property</p>

```typescript signature
readonly equationType: string
```

The classical type proved under this case's condition.

### establishesCompleteness

<a id="entry-presentation_wasm_object_model_capability_contexts_establishes_completeness_api_partial_differential_equations_partialdifferentialequationsolutionfamily_establishes_completeness"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolutionfamily_establishescompleteness.57026acb665d"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolutionFamily property</p>

```typescript signature
readonly establishesCompleteness: boolean
```

Whether the family carries a completeness theorem whose every identity was proved.

### evaluateNumericBulk

<a id="entry-presentation_wasm_object_model_capability_contexts_evaluate_numeric_bulk_api_session_evaluate_numeric_bulk"></a>
<a id="placement-placement.wasm.wasm_module.module_evaluatenumericbulk.408fe965e833"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
evaluateNumericBulk(targets: Expression[]): BulkExpressionOutcome[]
```

Evaluate an ordered collection numerically in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_evaluatenumericbulk.1d8e7313ad2a"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.evaluateNumericBulk</code></p>

```typescript signature
evaluateNumericBulk(targets: Expression[]): BulkExpressionOutcome[]
```

</details>

### evenAssumption

<a id="entry-presentation_wasm_object_model_capability_contexts_even_assumption_api_session_even_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_evenassumption.edd68ccb590f"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
evenAssumption(subject: Expression): AssumptionProposition
```

Build an evenness assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_evenassumption.bb78156582ab"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.evenAssumption</code></p>

```typescript signature
evenAssumption(subject: Expression): AssumptionProposition
```

</details>

### executionMode

<a id="entry-presentation_wasm_object_model_capability_contexts_execution_mode_api_session_execution_mode"></a>
<a id="placement-placement.wasm.wasm_module.module_executionmode.d4cea0f8949e"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
executionMode(): string
```

Return the execution mode of the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_executionmode.fb37feb3b5e7"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.executionMode</code></p>

```typescript signature
executionMode(): string
```

</details>

### expandBulk

<a id="entry-presentation_wasm_object_model_capability_contexts_expand_bulk_api_session_expand_bulk"></a>
<a id="placement-placement.wasm.wasm_module.module_expandbulk.9bd6e6330993"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
expandBulk(targets: Expression[]): BulkExpressionOutcome[]
```

Expand an ordered collection in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_expandbulk.ddbf38f0af39"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.expandBulk</code></p>

```typescript signature
expandBulk(targets: Expression[]): BulkExpressionOutcome[]
```

</details>

### explicitBranch

<a id="entry-presentation_wasm_object_model_capability_contexts_explicit_branch_api_partial_differential_equations_partialdifferentialequationverificationreport_explicit_branch"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationverificationreport_explicitbranch.4065ca30e756"></a>
<p class="symi-entry-owner">PartialDifferentialEquationVerificationReport property</p>

```typescript signature
readonly explicitBranch: Expression | undefined
```

The isolated explicit branch checked for an implicit candidate.

### explicitPartialDifferentialEquationSolution

<a id="entry-presentation_wasm_object_model_capability_contexts_explicit_partial_differential_equation_solution_api_partial_differential_equations_session_explicit_partial_differential_equation_solution"></a>
<a id="placement-placement.wasm.wasm_module.module_explicitpartialdifferentialequationsolution.71efe41cb42c"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
explicitPartialDifferentialEquationSolution(
    solution: Expression,
    arbitrary_functions?: PartialDifferentialEquationArbitraryFunction[] | null,
    proof_obligations?: string[] | null,
): PartialDifferentialEquationSolutionFamily
```

Create an explicit partial differential equation solution family in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_explicitpartialdifferentialequationsolution.36080a4f3827"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.explicitPartialDifferentialEquationSolution</code></p>

```typescript signature
explicitPartialDifferentialEquationSolution(
    solution: Expression,
    arbitrary_functions?: PartialDifferentialEquationArbitraryFunction[] | null,
    proof_obligations?: string[] | null,
): PartialDifferentialEquationSolutionFamily
```

</details>

### expression

<a id="entry-presentation_wasm_object_model_capability_contexts_expression_unresolved"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolutionfamily_expression.466f56fd3a0c"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolutionFamily property</p>

```typescript signature
readonly expression: Expression
```

The exact candidate expression carried by this family.

### extendedRealAssumption

<a id="entry-presentation_wasm_object_model_capability_contexts_extended_real_assumption_api_session_extended_real_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_extendedrealassumption.b6b7622d86b1"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
extendedRealAssumption(subject: Expression): AssumptionProposition
```

Build an extended-real assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_extendedrealassumption.ae5e7bb5a3e9"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.extendedRealAssumption</code></p>

```typescript signature
extendedRealAssumption(subject: Expression): AssumptionProposition
```

</details>

### finiteAssumption

<a id="entry-presentation_wasm_object_model_capability_contexts_finite_assumption_api_session_finite_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_finiteassumption.6ae53821afcc"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
finiteAssumption(subject: Expression): AssumptionProposition
```

Build a finiteness assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_finiteassumption.f2b7a40022a4"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.finiteAssumption</code></p>

```typescript signature
finiteAssumption(subject: Expression): AssumptionProposition
```

</details>

### firstEquation

<a id="entry-presentation_wasm_object_model_capability_contexts_first_equation_api_partial_differential_equations_partialdifferentialequationseparationresult_first_equation"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationseparationresult_firstequation.14ab74e83d20"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSeparationResult property</p>

```typescript signature
readonly firstEquation: PartialDifferentialEquationSeparatedEquation
```

The first exact one-variable ordinary differential equation.

### form

<a id="entry-presentation_wasm_object_model_capability_contexts_form_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_form"></a>
<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsolveresult_form.ed5c138e707a"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSolveResult property</p>

```typescript signature
readonly form: string | undefined
```

Whether the solution is the value of the unknown or a relation read as zero.

### form

<a id="entry-presentation_wasm_object_model_capability_contexts_form_api_partial_differential_equations_partialdifferentialequationsolutionfamily_form"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolutionfamily_form.8966e9fa5d06"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolutionFamily property</p>

```typescript signature
readonly form: string
```

Whether this candidate is an `explicit` value or an `implicit` residual.

### forwardCoordinates

<a id="entry-presentation_wasm_object_model_capability_contexts_forward_coordinates_api_partial_differential_equations_partialdifferentialequationcoordinatechange_forward_coordinates"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcoordinatechange_forwardcoordinates.0aa8930b1189"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCoordinateChange property</p>

```typescript signature
readonly forwardCoordinates: Expression[]
```

The ordered source-to-target coordinate expressions.

### frequencyDomainEquation

<a id="entry-presentation_wasm_object_model_capability_contexts_frequency_domain_equation_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_frequency_domain_equation"></a>
<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsolveresult_frequencydomainequation.4b988fcde71e"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSolveResult property</p>

```typescript signature
readonly frequencyDomainEquation: Expression | undefined
```

The frequency-domain equation of a Laplace transform solution, read as zero.

### fullCoefficients

<a id="entry-presentation_wasm_object_model_capability_contexts_full_coefficients_api_partial_differential_equations_partialdifferentialequationcoefficientdata_full_coefficients"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcoefficientdata_fullcoefficients.2156a699a3a9"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCoefficientData property</p>

```typescript signature
readonly fullCoefficients: PartialDifferentialEquationJetCoefficient[] | undefined
```

Every jet coefficient, when the equation is exactly linear.

### fullRankMatrix

<a id="entry-presentation_wasm_object_model_capability_contexts_full_rank_matrix_api_session_full_rank_matrix"></a>
<a id="placement-placement.wasm.wasm_module.module_fullrankmatrix.545a4d2aa24c"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
fullRankMatrix(subject: Matrix): AssumptionProposition
```

Build a full-rank-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_fullrankmatrix.d4dda0c1ae74"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.fullRankMatrix</code></p>

```typescript signature
fullRankMatrix(subject: Matrix): AssumptionProposition
```

</details>

### generalGenerator

<a id="entry-presentation_wasm_object_model_capability_contexts_general_generator_api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_general_generator"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryalgebra_generalgenerator.2a0fc0383ec8"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAlgebra property</p>

```typescript signature
readonly generalGenerator: PartialDifferentialEquationPointSymmetryGenerator | undefined
```

The general generator, a combination of the basis through the parameters.

### generality

<a id="entry-presentation_wasm_object_model_capability_contexts_generality_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_generality"></a>
<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsolveresult_generality.0acc7843fcff"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSolveResult property</p>

```typescript signature
readonly generality: string | undefined
```

The rank decision behind a complete-family claim, when the request required one.

### generality

<a id="entry-presentation_wasm_object_model_capability_contexts_generality_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_generality"></a>
<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsystemsolveresult_generality.b6dedec50021"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSystemSolveResult property</p>

```typescript signature
readonly generality: string | undefined
```

The rank decision on the constants-to-initial-jet map, when verification ran.

### generality

<a id="entry-presentation_wasm_object_model_capability_contexts_generality_api_ordinary_differential_equations_ordinarydifferentialequationsystemverificationreport_generality"></a>
<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsystemverificationreport_generality.06f7e5f0bc1b"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSystemVerificationReport property</p>

```typescript signature
readonly generality: string
```

The rank decision on the map from the supplied constants to the initial jet.

### generatedConstants

<a id="entry-presentation_wasm_object_model_capability_contexts_generated_constants_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_generated_constants"></a>
<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsolveresult_generatedconstants.b24b49acc560"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSolveResult property</p>

```typescript signature
readonly generatedConstants: Expression[]
```

Exactly the constants the solution treats as free.

### generatedConstants

<a id="entry-presentation_wasm_object_model_capability_contexts_generated_constants_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_generated_constants"></a>
<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsystemsolveresult_generatedconstants.918ffd7b6ed6"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSystemSolveResult property</p>

```typescript signature
readonly generatedConstants: Expression[]
```

Exactly the constants the assignment treats as free.

### governingResidual

<a id="entry-presentation_wasm_object_model_capability_contexts_governing_residual_api_partial_differential_equations_partialdifferentialequationverificationreport_governing_residual"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationverificationreport_governingresidual.816de73fe328"></a>
<p class="symi-entry-owner">PartialDifferentialEquationVerificationReport property</p>

```typescript signature
readonly governingResidual: PartialDifferentialEquationVerificationResidual
```

Independently reduced governing-equation evidence.

### greaterAssumption

<a id="entry-presentation_wasm_object_model_capability_contexts_greater_assumption_api_defaults_session_greater_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_greaterassumption.a5eb42bf8f9c"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
greaterAssumption(
    left: Expression,
    right: Expression,
): AssumptionProposition
```

Build a strict scalar-order assumption proposition with reversed operands in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_greaterassumption.7d33f6430cf1"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.greaterAssumption</code></p>

```typescript signature
greaterAssumption(
    left: Expression,
    right: Expression,
): AssumptionProposition
```

</details>

### greaterOrEqualAssumption

<a id="entry-presentation_wasm_object_model_capability_contexts_greater_or_equal_assumption_api_defaults_session_greater_or_equal_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_greaterorequalassumption.775238806940"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
greaterOrEqualAssumption(
    left: Expression,
    right: Expression,
): AssumptionProposition
```

Build a non-strict scalar-order assumption proposition with reversed operands in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_greaterorequalassumption.45d6551d24b9"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.greaterOrEqualAssumption</code></p>

```typescript signature
greaterOrEqualAssumption(
    left: Expression,
    right: Expression,
): AssumptionProposition
```

</details>

### hermitianMatrix

<a id="entry-presentation_wasm_object_model_capability_contexts_hermitian_matrix_api_session_hermitian_matrix"></a>
<a id="placement-placement.wasm.wasm_module.module_hermitianmatrix.561dfa80b073"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
hermitianMatrix(subject: Matrix): AssumptionProposition
```

Build a Hermitian-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_hermitianmatrix.ad07d380df99"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.hermitianMatrix</code></p>

```typescript signature
hermitianMatrix(subject: Matrix): AssumptionProposition
```

</details>

### highestOrderCoefficients

<a id="entry-presentation_wasm_object_model_capability_contexts_highest_order_coefficients_api_partial_differential_equations_partialdifferentialequationcoefficientdata_highest_order_coefficients"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcoefficientdata_highestordercoefficients.5bfc08a1eccb"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCoefficientData property</p>

```typescript signature
readonly highestOrderCoefficients: PartialDifferentialEquationJetCoefficient[] | undefined
```

The highest-order jet coefficients, when the equation is affine in them.

### homogeneous

<a id="entry-presentation_wasm_object_model_capability_contexts_homogeneous_api_partial_differential_equations_partialdifferentialequationcoefficientdata_homogeneous"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcoefficientdata_homogeneous.a3fec03b183d"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCoefficientData property</p>

```typescript signature
readonly homogeneous: boolean | undefined
```

Whether the equation was proved homogeneous, when that statement is meaningful.

### hostCancellationControlAddress

<a id="entry-presentation_wasm_object_model_capability_contexts_host_cancellation_control_address_unresolved"></a>
<a id="placement-placement.wasm.wasm_module.module_hostcancellationcontroladdress.a36df668e7b8"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
hostCancellationControlAddress(): number
```

Return the address in linear memory of the control record an embedder writes to stop a call.

### hostCancellationControlByteLength

<a id="entry-presentation_wasm_object_model_capability_contexts_host_cancellation_control_byte_length_unresolved"></a>
<a id="placement-placement.wasm.wasm_module.module_hostcancellationcontrolbytelength.eedb6cf20393"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
hostCancellationControlByteLength(): number
```

Return how many bytes of linear memory the host cancellation control record occupies.

### hostCancellationRequested

<a id="entry-presentation_wasm_object_model_capability_contexts_host_cancellation_requested_unresolved"></a>
<a id="placement-placement.wasm.wasm_module.module_hostcancellationrequested.254657584a52"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
hostCancellationRequested(slot_index: number, ticket: number): boolean
```

Return whether a stop request stands against one control-record reservation.

### hostCancellationSlotCount

<a id="entry-presentation_wasm_object_model_capability_contexts_host_cancellation_slot_count_unresolved"></a>
<a id="placement-placement.wasm.wasm_module.module_hostcancellationslotcount.4101f6d428a3"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
hostCancellationSlotCount(): number
```

Return how many reservations the host cancellation control record holds.

### hostCancellationSlotTicket

<a id="entry-presentation_wasm_object_model_capability_contexts_host_cancellation_slot_ticket_unresolved"></a>
<a id="placement-placement.wasm.wasm_module.module_hostcancellationslotticket.31ee528c4115"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
hostCancellationSlotTicket(slot_index: number): number
```

Return the ticket a reserved control-record slot answers to, or zero when it is not reserved.

### identityMatrix

<a id="entry-presentation_wasm_object_model_capability_contexts_identity_matrix_api_session_identity_matrix"></a>
<a id="placement-placement.wasm.wasm_module.module_identitymatrix.06589077f324"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
identityMatrix(subject: Matrix): AssumptionProposition
```

Build an identity-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_identitymatrix.b3b15b6e67fd"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.identityMatrix</code></p>

```typescript signature
identityMatrix(subject: Matrix): AssumptionProposition
```

</details>

### image

<a id="entry-presentation_wasm_object_model_capability_contexts_image_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_image"></a>
<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsolveresult_image.2505758202af"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSolveResult property</p>

```typescript signature
readonly image: Expression | undefined
```

The image of the unknown a Laplace transform solution solved for.

### implicitPartialDifferentialEquationSolution

<a id="entry-presentation_wasm_object_model_capability_contexts_implicit_partial_differential_equation_solution_api_partial_differential_equations_session_implicit_partial_differential_equation_solution"></a>
<a id="placement-placement.wasm.wasm_module.module_implicitpartialdifferentialequationsolution.c7079e45bc6e"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
implicitPartialDifferentialEquationSolution(
    residual: Expression,
    arbitrary_functions?: PartialDifferentialEquationArbitraryFunction[] | null,
    proof_obligations?: string[] | null,
): PartialDifferentialEquationSolutionFamily
```

Create an implicit partial differential equation solution family in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_implicitpartialdifferentialequationsolution.32e5eb5b6dde"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.implicitPartialDifferentialEquationSolution</code></p>

```typescript signature
implicitPartialDifferentialEquationSolution(
    residual: Expression,
    arbitrary_functions?: PartialDifferentialEquationArbitraryFunction[] | null,
    proof_obligations?: string[] | null,
): PartialDifferentialEquationSolutionFamily
```

</details>

### inconclusiveReason

<a id="entry-presentation_wasm_object_model_capability_contexts_inconclusive_reason_api_partial_differential_equations_partialdifferentialequationverificationreport_inconclusive_reason"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationverificationreport_inconclusivereason.31d73a309d82"></a>
<p class="symi-entry-owner">PartialDifferentialEquationVerificationReport property</p>

```typescript signature
readonly inconclusiveReason: string | undefined
```

The deterministic reason verification could not reach a proof.

### independentVariableName

<a id="entry-presentation_wasm_object_model_capability_contexts_independent_variable_name_api_partial_differential_equations_partialdifferentialequationseparatedequation_independent_variable_name"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationseparatedequation_independentvariablename.a79c661191a7"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSeparatedEquation property</p>

```typescript signature
readonly independentVariableName: string
```

The name of this equation's independent variable.

### independentVariables

<a id="entry-presentation_wasm_object_model_capability_contexts_independent_variables_api_partial_differential_equations_partialdifferentialequationproblem_independent_variables"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationproblem_independentvariables.99881275f85e"></a>
<p class="symi-entry-owner">PartialDifferentialEquationProblem property</p>

```typescript signature
readonly independentVariables: string[]
```

The independent variables in their semantic declared order.

### index

<a id="entry-presentation_wasm_object_model_capability_contexts_index_api_parallelism_bulkexpressionoutcome_index"></a>
<a id="placement-placement.wasm.wasm_class.bulkexpressionoutcome_index.9565b7871b49"></a>
<p class="symi-entry-owner">BulkExpressionOutcome property</p>

```typescript signature
readonly index: number
```

Return the original input position of this outcome.

### index

<a id="entry-presentation_wasm_object_model_capability_contexts_index_api_parallelism_bulktextoutcome_index"></a>
<a id="placement-placement.wasm.wasm_class.bulktextoutcome_index.eb506bca8e60"></a>
<p class="symi-entry-owner">BulkTextOutcome property</p>

```typescript signature
readonly index: number
```

Return the original input position of this outcome.

### infiniteAssumption

<a id="entry-presentation_wasm_object_model_capability_contexts_infinite_assumption_api_session_infinite_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_infiniteassumption.30902fe0a9f6"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
infiniteAssumption(subject: Expression): AssumptionProposition
```

Build an infinity assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_infiniteassumption.930992139804"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.infiniteAssumption</code></p>

```typescript signature
infiniteAssumption(subject: Expression): AssumptionProposition
```

</details>

### initThreadPoolWithCapability

<a id="entry-presentation_wasm_object_model_capability_contexts_init_thread_pool_with_capability_unresolved"></a>
<a id="placement-placement.wasm.wasm_module.module_initthreadpoolwithcapability.356307fe3c6a"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
initThreadPoolWithCapability(worker_count: number): Promise
```

Start the shared WebAssembly Rayon pool and publish its capability after startup succeeds.

### initialConditionResiduals

<a id="entry-presentation_wasm_object_model_capability_contexts_initial_condition_residuals_api_partial_differential_equations_partialdifferentialequationverificationreport_initial_condition_residuals"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationverificationreport_initialconditionresiduals.84ad90fe1dfe"></a>
<p class="symi-entry-owner">PartialDifferentialEquationVerificationReport property</p>

```typescript signature
readonly initialConditionResiduals: PartialDifferentialEquationVerificationResidual[]
```

One reduced residual per initial condition, in insertion order.

### initialConditions

<a id="entry-presentation_wasm_object_model_capability_contexts_initial_conditions_api_partial_differential_equations_partialdifferentialequationproblem_initial_conditions"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationproblem_initialconditions.de63373e4edb"></a>
<p class="symi-entry-owner">PartialDifferentialEquationProblem property</p>

```typescript signature
readonly initialConditions: Expression[]
```

The initial-condition residuals in insertion order.

### initializeParallelism

<a id="entry-presentation_wasm_object_model_capability_contexts_initialize_parallelism_api_session_initialize_parallelism"></a>
<a id="placement-placement.wasm.wasm_module.module_initializeparallelism.cf57f2d301bc"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
initializeParallelism(worker_count: number): string
```

Initialize parallel execution for the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_initializeparallelism.b65737d204fb"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.initializeParallelism</code></p>

```typescript signature
initializeParallelism(worker_count: number): string
```

</details>

### initialized

<a id="entry-presentation_wasm_object_model_capability_contexts_initialized_api_parallelism_parallelismcapability_initialized"></a>
<a id="placement-placement.wasm.wasm_class.parallelismcapability_initialized.4f99d93e07ed"></a>
<p class="symi-entry-owner">ParallelismCapability property</p>

```typescript signature
readonly initialized: boolean
```

Whether the process-wide parallel backend has been initialized.

### integerAssumption

<a id="entry-presentation_wasm_object_model_capability_contexts_integer_assumption_api_session_integer_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_integerassumption.bf2080c26dc3"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
integerAssumption(subject: Expression): AssumptionProposition
```

Build an integer assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_integerassumption.cd89ea0aeab3"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.integerAssumption</code></p>

```typescript signature
integerAssumption(subject: Expression): AssumptionProposition
```

</details>

### integerEntries

<a id="entry-presentation_wasm_object_model_capability_contexts_integer_entries_api_session_integer_entries"></a>
<a id="placement-placement.wasm.wasm_module.module_integerentries.98584eadce94"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
integerEntries(subject: Matrix): AssumptionProposition
```

Build an integer-entry proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_integerentries.24804dca8290"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.integerEntries</code></p>

```typescript signature
integerEntries(subject: Matrix): AssumptionProposition
```

</details>

### integrateDefiniteUnderConstraint

<a id="entry-presentation_wasm_object_model_capability_contexts_integrate_definite_under_constraint_api_session_integrate_definite_under_constraint"></a>
<a id="placement-placement.wasm.wasm_module.module_integratedefiniteunderconstraint.b38208ce9b58"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
integrateDefiniteUnderConstraint(
    input_expression: Expression,
    variable: string,
    lower: Expression,
    upper: Expression,
    constraint: Expression,
): Expression
```

Definite integration under a local bounded logical constraint.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_integratedefiniteunderconstraint.162de4dfe5ac"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.integrateDefiniteUnderConstraint</code></p>

```typescript signature
integrateDefiniteUnderConstraint(
    input_expression: Expression,
    variable: string,
    lower: Expression,
    upper: Expression,
    constraint: Expression,
): Expression
```

</details>

### integrateDefiniteUnderConstraint

<a id="entry-presentation_wasm_object_model_capability_contexts_integrate_definite_under_constraint_api_expression_integrate_definite_under_constraint"></a>
<a id="placement-placement.wasm.wasm_class.expression_integratedefiniteunderconstraint.ae1d271eaed2"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
integrateDefiniteUnderConstraint(
    variable: string,
    lower: Expression,
    upper: Expression,
    constraint: Expression,
): Expression
```

Definite integration under a local bounded logical constraint.

### internerLength

<a id="entry-presentation_wasm_object_model_capability_contexts_interner_length_api_session_interner_length"></a>
<a id="placement-placement.wasm.wasm_module.module_internerlength.16f9ad37f8f3"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
internerLength(): number
```

Number of live expressions currently interned in the context. Dead entries awaiting the amortized sweep are not counted. Useful for observing memory in long-running sessions and in tests that assert the store stays bounded.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_internerlength.eae1ce3bb1ac"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.internerLength</code></p>

```typescript signature
internerLength(): number
```

</details>

### intertwining

<a id="entry-presentation_wasm_object_model_capability_contexts_intertwining_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_intertwining"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryaction_intertwining.0394334328b6"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAction property</p>

```typescript signature
readonly intertwining: string | undefined
```

The exact decision on the intertwining identity.

### invariant

<a id="entry-presentation_wasm_object_model_capability_contexts_invariant_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_invariant"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsimilaritysolution_invariant.4e6ff8b4195d"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSimilaritySolution property</p>

```typescript signature
readonly invariant: Expression | undefined
```

The invariant of the generator's base field.

### inverseCoordinates

<a id="entry-presentation_wasm_object_model_capability_contexts_inverse_coordinates_api_partial_differential_equations_partialdifferentialequationcoordinatechange_inverse_coordinates"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcoordinatechange_inversecoordinates.97aaa96afdd2"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCoordinateChange property</p>

```typescript signature
readonly inverseCoordinates: Expression[]
```

The ordered target-to-source coordinate expressions.

### invertibility

<a id="entry-presentation_wasm_object_model_capability_contexts_invertibility_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_invertibility"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryaction_invertibility.47467c701e0d"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAction property</p>

```typescript signature
readonly invertibility: string | undefined
```

The exact decision that the coordinate map is invertible on its chart.

### invertibleMatrix

<a id="entry-presentation_wasm_object_model_capability_contexts_invertible_matrix_api_session_invertible_matrix"></a>
<a id="placement-placement.wasm.wasm_module.module_invertiblematrix.f6ca9c5a4fd1"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
invertibleMatrix(subject: Matrix): AssumptionProposition
```

Build an invertible-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_invertiblematrix.64db4aef0074"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.invertibleMatrix</code></p>

```typescript signature
invertibleMatrix(subject: Matrix): AssumptionProposition
```

</details>

### irrationalAssumption

<a id="entry-presentation_wasm_object_model_capability_contexts_irrational_assumption_api_session_irrational_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_irrationalassumption.a422ee432156"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
irrationalAssumption(subject: Expression): AssumptionProposition
```

Build an irrationality assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_irrationalassumption.563f0ff3e367"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.irrationalAssumption</code></p>

```typescript signature
irrationalAssumption(subject: Expression): AssumptionProposition
```

</details>

### isAlgebraic

<a id="entry-presentation_wasm_object_model_capability_contexts_is_algebraic_api_expression_is_algebraic"></a>
<a id="placement-placement.wasm.wasm_class.expression_isalgebraic.7f69c43994c4"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isAlgebraic(): boolean | undefined
```

Whether the expression is known to be algebraic.

### isComplex

<a id="entry-presentation_wasm_object_model_capability_contexts_is_complex_api_expression_is_complex"></a>
<a id="placement-placement.wasm.wasm_class.expression_iscomplex.cb55f33afdac"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isComplex(): boolean | undefined
```

Whether the expression is known to be finite complex.

### isComposite

<a id="entry-presentation_wasm_object_model_capability_contexts_is_composite_api_expression_is_composite"></a>
<a id="placement-placement.wasm.wasm_class.expression_iscomposite.9305add4812c"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isComposite(): boolean | undefined
```

Whether the expression is known to be composite.

### isEven

<a id="entry-presentation_wasm_object_model_capability_contexts_is_even_api_expression_is_even"></a>
<a id="placement-placement.wasm.wasm_class.expression_iseven.79ec01947e1b"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isEven(): boolean | undefined
```

Whether the expression is known to be even.

### isExtendedReal

<a id="entry-presentation_wasm_object_model_capability_contexts_is_extended_real_api_expression_is_extended_real"></a>
<a id="placement-placement.wasm.wasm_class.expression_isextendedreal.172c09a6da36"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isExtendedReal(): boolean | undefined
```

Whether the expression is known to be extended-real.

### isInfinite

<a id="entry-presentation_wasm_object_model_capability_contexts_is_infinite_api_expression_is_infinite"></a>
<a id="placement-placement.wasm.wasm_class.expression_isinfinite.859baf12b120"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isInfinite(): boolean | undefined
```

Whether the expression is known to be infinite.

### isIrrational

<a id="entry-presentation_wasm_object_model_capability_contexts_is_irrational_api_expression_is_irrational"></a>
<a id="placement-placement.wasm.wasm_class.expression_isirrational.6d6714833660"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isIrrational(): boolean | undefined
```

Whether the expression is known to be irrational.

### isNatural

<a id="entry-presentation_wasm_object_model_capability_contexts_is_natural_api_expression_is_natural"></a>
<a id="placement-placement.wasm.wasm_class.expression_isnatural.08b113b0d6b1"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isNatural(): boolean | undefined
```

Whether the expression is known to be natural.

### isNonpositive

<a id="entry-presentation_wasm_object_model_capability_contexts_is_nonpositive_api_expression_is_nonpositive"></a>
<a id="placement-placement.wasm.wasm_class.expression_isnonpositive.43f76142cb65"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isNonpositive(): boolean | undefined
```

Whether the expression is known to be nonpositive.

### isOdd

<a id="entry-presentation_wasm_object_model_capability_contexts_is_odd_api_expression_is_odd"></a>
<a id="placement-placement.wasm.wasm_class.expression_isodd.1296c406043e"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isOdd(): boolean | undefined
```

Whether the expression is known to be odd.

### isPositiveInteger

<a id="entry-presentation_wasm_object_model_capability_contexts_is_positive_integer_api_expression_is_positive_integer"></a>
<a id="placement-placement.wasm.wasm_class.expression_ispositiveinteger.de9efbe8d022"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isPositiveInteger(): boolean | undefined
```

Whether the expression is known to be a positive integer.

### isTranscendental

<a id="entry-presentation_wasm_object_model_capability_contexts_is_transcendental_api_expression_is_transcendental"></a>
<a id="placement-placement.wasm.wasm_class.expression_istranscendental.7bafdf46504b"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isTranscendental(): boolean | undefined
```

Whether the expression is known to be transcendental.

### isZero

<a id="entry-presentation_wasm_object_model_capability_contexts_is_zero_api_expression_is_zero"></a>
<a id="placement-placement.wasm.wasm_class.expression_iszero.39d9a4da2056"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isZero(): boolean | undefined
```

Whether the expression is known to be zero.

### leftOperand

<a id="entry-presentation_wasm_object_model_capability_contexts_left_operand_api_assumptionproposition_left_operand"></a>
<a id="placement-placement.wasm.wasm_module.module_leftoperand.76fb7332aadf"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
leftOperand(proposition: AssumptionProposition): Expression | undefined
```

Return the left relation or congruence operand when present.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.assumptionproposition_leftoperand.746fdb26e50b"></a>
<p class="symi-entry-owner">AssumptionProposition method: <code>AssumptionProposition.leftOperand</code></p>

```typescript signature
leftOperand(): Expression | undefined
```

</details>

### length

<a id="entry-presentation_wasm_object_model_capability_contexts_length_api_expression_operations_expression_length"></a>
<a id="placement-placement.wasm.wasm_class.expression_length.45f409e47bab"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
readonly length: number
```

Number of elements of a finite-set expression.

### lessAssumption

<a id="entry-presentation_wasm_object_model_capability_contexts_less_assumption_api_defaults_session_less_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_lessassumption.8fc95f457c3b"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
lessAssumption(
    left: Expression,
    right: Expression,
): AssumptionProposition
```

Build a strict scalar-order assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_lessassumption.ca0ff78010a6"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.lessAssumption</code></p>

```typescript signature
lessAssumption(
    left: Expression,
    right: Expression,
): AssumptionProposition
```

</details>

### lessOrEqualAssumption

<a id="entry-presentation_wasm_object_model_capability_contexts_less_or_equal_assumption_api_defaults_session_less_or_equal_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_lessorequalassumption.9485a709d841"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
lessOrEqualAssumption(
    left: Expression,
    right: Expression,
): AssumptionProposition
```

Build a non-strict scalar-order assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_lessorequalassumption.11ee484d439d"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.lessOrEqualAssumption</code></p>

```typescript signature
lessOrEqualAssumption(
    left: Expression,
    right: Expression,
): AssumptionProposition
```

</details>

### liftedConstants

<a id="entry-presentation_wasm_object_model_capability_contexts_lifted_constants_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_lifted_constants"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsimilaritysolution_liftedconstants.d399bdf3e958"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSimilaritySolution property</p>

```typescript signature
readonly liftedConstants: Expression[]
```

The constants the lifted family is parameterized by.

### liftedFamily

<a id="entry-presentation_wasm_object_model_capability_contexts_lifted_family_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_lifted_family"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsimilaritysolution_liftedfamily.16b78a7aae96"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSimilaritySolution property</p>

```typescript signature
readonly liftedFamily: PartialDifferentialEquationSolutionFamily | undefined
```

The invariant solutions of the original equation.

### liftedFamilyVerification

<a id="entry-presentation_wasm_object_model_capability_contexts_lifted_family_verification_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_lifted_family_verification"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsimilaritysolution_liftedfamilyverification.1f24d4d5c876"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSimilaritySolution property</p>

```typescript signature
readonly liftedFamilyVerification: string | undefined
```

The exact decision that the lifted family solves the original equation.

### linearity

<a id="entry-presentation_wasm_object_model_capability_contexts_linearity_api_partial_differential_equations_partialdifferentialequationclassification_linearity"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationclassification_linearity.a6e667e25ec5"></a>
<p class="symi-entry-owner">PartialDifferentialEquationClassification property</p>

```typescript signature
readonly linearity: string
```

The most-specific exact linearity class.

### linearity

<a id="entry-presentation_wasm_object_model_capability_contexts_linearity_api_partial_differential_equations_partialdifferentialequationsolutionprovenance_linearity"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolutionprovenance_linearity.1ab08a772397"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolutionProvenance property</p>

```typescript signature
readonly linearity: string
```

The exact linearity class recorded at the time the candidate was produced.

### lowerTriangularMatrix

<a id="entry-presentation_wasm_object_model_capability_contexts_lower_triangular_matrix_api_session_lower_triangular_matrix"></a>
<a id="placement-placement.wasm.wasm_module.module_lowertriangularmatrix.3932d732657f"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
lowerTriangularMatrix(subject: Matrix): AssumptionProposition
```

Build a lower-triangular-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_lowertriangularmatrix.022cfbba3773"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.lowerTriangularMatrix</code></p>

```typescript signature
lowerTriangularMatrix(subject: Matrix): AssumptionProposition
```

</details>

### matrixShape

<a id="entry-presentation_wasm_object_model_capability_contexts_matrix_shape_api_session_matrix_shape"></a>
<a id="placement-placement.wasm.wasm_module.module_matrixshape.3371cecbb4ef"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
matrixShape(
    subject: Matrix,
    rows: number,
    columns: number,
): AssumptionProposition
```

Build a matrix shape proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_matrixshape.459aae814946"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.matrixShape</code></p>

```typescript signature
matrixShape(
    subject: Matrix,
    rows: number,
    columns: number,
): AssumptionProposition
```

</details>

### maximumOperationConcurrency

<a id="entry-presentation_wasm_object_model_capability_contexts_maximumoperationconcurrency_api_parallelism_parallelismcapability_maximum_operation_concurrency"></a>
<a id="placement-placement.wasm.wasm_class.parallelismcapability_maximumoperationconcurrency.0130e4f9bd13"></a>
<p class="symi-entry-owner">ParallelismCapability property</p>

```typescript signature
readonly maximumOperationConcurrency: number
```

Return the largest task batch one operation may admit.

### memberAssumption

<a id="entry-presentation_wasm_object_model_capability_contexts_member_assumption_api_defaults_session_member_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_memberassumption.d3aa17ab5d8c"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
memberAssumption(
    element: Expression,
    set_expression: Expression,
): AssumptionProposition
```

Build a scalar-membership assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_memberassumption.1ba404fedc2d"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.memberAssumption</code></p>

```typescript signature
memberAssumption(
    element: Expression,
    set_expression: Expression,
): AssumptionProposition
```

</details>

### membershipElement

<a id="entry-presentation_wasm_object_model_capability_contexts_membership_element_api_assumptionproposition_membership_element"></a>
<a id="placement-placement.wasm.wasm_module.module_membershipelement.8ef3bf1bc659"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
membershipElement(proposition: AssumptionProposition): Expression | undefined
```

Return the membership element when present.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.assumptionproposition_membershipelement.aae55444ab1f"></a>
<p class="symi-entry-owner">AssumptionProposition method: <code>AssumptionProposition.membershipElement</code></p>

```typescript signature
membershipElement(): Expression | undefined
```

</details>

### membershipSet

<a id="entry-presentation_wasm_object_model_capability_contexts_membership_set_api_assumptionproposition_membership_set"></a>
<a id="placement-placement.wasm.wasm_module.module_membershipset.b2235c74f247"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
membershipSet(proposition: AssumptionProposition): Expression | undefined
```

Return the membership set expression when present.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.assumptionproposition_membershipset.7ce41b1bc776"></a>
<p class="symi-entry-owner">AssumptionProposition method: <code>AssumptionProposition.membershipSet</code></p>

```typescript signature
membershipSet(): Expression | undefined
```

</details>

### method

<a id="entry-presentation_wasm_object_model_capability_contexts_method_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_method"></a>
<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsolveresult_method.2a36ab088dab"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSolveResult property</p>

```typescript signature
readonly method: string
```

The method the request actually ran.

### method

<a id="entry-presentation_wasm_object_model_capability_contexts_method_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_method"></a>
<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsystemsolveresult_method.85f1db18a22f"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSystemSolveResult property</p>

```typescript signature
readonly method: string
```

The method the system request actually ran.

### method

<a id="entry-presentation_wasm_object_model_capability_contexts_method_api_partial_differential_equations_partialdifferentialequationmethodcandidate_method"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationmethodcandidate_method.e9c325f17c27"></a>
<p class="symi-entry-owner">PartialDifferentialEquationMethodCandidate property</p>

```typescript signature
readonly method: string
```

The stable advisory method name.

### method

<a id="entry-presentation_wasm_object_model_capability_contexts_method_api_partial_differential_equations_partialdifferentialequationsolutionprovenance_method"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolutionprovenance_method.4df0ae777fd3"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolutionProvenance property</p>

```typescript signature
readonly method: string
```

The method identity this solution was produced by.

### method

<a id="entry-presentation_wasm_object_model_capability_contexts_method_api_partial_differential_equations_partialdifferentialequationsolveresult_method"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolveresult_method.f888cfb04f38"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolveResult property</p>

```typescript signature
readonly method: string | undefined
```

The method that produced a solution, when one did.

### methodCandidates

<a id="entry-presentation_wasm_object_model_capability_contexts_method_candidates_api_partial_differential_equations_partialdifferentialequationclassification_method_candidates"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationclassification_methodcandidates.f9f5eeb37c13"></a>
<p class="symi-entry-owner">PartialDifferentialEquationClassification property</p>

```typescript signature
readonly methodCandidates: PartialDifferentialEquationMethodCandidate[]
```

The advisory methods in deterministic preference order.

### multiplier

<a id="entry-presentation_wasm_object_model_capability_contexts_multiplier_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_multiplier"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryaction_multiplier.fdf69e36ea5d"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAction property</p>

```typescript signature
readonly multiplier: Expression | undefined
```

The multiplier of the intertwining identity.

### multiplier

<a id="entry-presentation_wasm_object_model_capability_contexts_multiplier_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_multiplier"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsimilaritysolution_multiplier.700502405026"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSimilaritySolution property</p>

```typescript signature
readonly multiplier: Expression | undefined
```

The multiplier of the reduction identity.

### multiply

<a id="entry-presentation_wasm_object_model_capability_contexts_multiply_api_expression_multiply"></a>
<a id="placement-placement.wasm.wasm_class.expression_multiply.f2a3f2cee0c1"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
multiply(other: Expression): Expression
```

Product of this expression and `other`.

### name

<a id="entry-presentation_wasm_object_model_capability_contexts_name_api_partial_differential_equations_partialdifferentialequationarbitraryfunction_name"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationarbitraryfunction_name.42b1c3bd0a16"></a>
<p class="symi-entry-owner">PartialDifferentialEquationArbitraryFunction property</p>

```typescript signature
readonly name: string
```

The collision-free allocated function name.

### naturalAssumption

<a id="entry-presentation_wasm_object_model_capability_contexts_natural_assumption_api_session_natural_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_naturalassumption.3ab80dcb8d03"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
naturalAssumption(subject: Expression): AssumptionProposition
```

Build a natural-number assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_naturalassumption.38e1c8e1981a"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.naturalAssumption</code></p>

```typescript signature
naturalAssumption(subject: Expression): AssumptionProposition
```

</details>

### negativeAssumption

<a id="entry-presentation_wasm_object_model_capability_contexts_negative_assumption_api_session_negative_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_negativeassumption.a7d23b923406"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
negativeAssumption(subject: Expression): AssumptionProposition
```

Build a strict-negativity assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_negativeassumption.2f61c8b3c7a1"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.negativeAssumption</code></p>

```typescript signature
negativeAssumption(subject: Expression): AssumptionProposition
```

</details>

### nonnegativeAssumption

<a id="entry-presentation_wasm_object_model_capability_contexts_nonnegative_assumption_api_session_nonnegative_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_nonnegativeassumption.cd1162dab735"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
nonnegativeAssumption(subject: Expression): AssumptionProposition
```

Build a universe-guarded nonnegative assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_nonnegativeassumption.64680640bb6a"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.nonnegativeAssumption</code></p>

```typescript signature
nonnegativeAssumption(subject: Expression): AssumptionProposition
```

</details>

### nonpositiveAssumption

<a id="entry-presentation_wasm_object_model_capability_contexts_nonpositive_assumption_api_session_nonpositive_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_nonpositiveassumption.d8eddd870b43"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
nonpositiveAssumption(subject: Expression): AssumptionProposition
```

Build a universe-guarded nonpositive assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_nonpositiveassumption.a68756b4e98f"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.nonpositiveAssumption</code></p>

```typescript signature
nonpositiveAssumption(subject: Expression): AssumptionProposition
```

</details>

### nonzeroAssumption

<a id="entry-presentation_wasm_object_model_capability_contexts_nonzero_assumption_api_session_nonzero_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_nonzeroassumption.76b8b5800ccd"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
nonzeroAssumption(subject: Expression): AssumptionProposition
```

Build a nonzero assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_nonzeroassumption.3c73be02c09e"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.nonzeroAssumption</code></p>

```typescript signature
nonzeroAssumption(subject: Expression): AssumptionProposition
```

</details>

### normalMatrix

<a id="entry-presentation_wasm_object_model_capability_contexts_normal_matrix_api_session_normal_matrix"></a>
<a id="placement-placement.wasm.wasm_module.module_normalmatrix.73c5d372a8ef"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
normalMatrix(subject: Matrix): AssumptionProposition
```

Build a normal-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_normalmatrix.22c1df434daa"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.normalMatrix</code></p>

```typescript signature
normalMatrix(subject: Matrix): AssumptionProposition
```

</details>

### normalizationMultiplier

<a id="entry-presentation_wasm_object_model_capability_contexts_normalization_multiplier_api_partial_differential_equations_partialdifferentialequationtransformationresult_normalization_multiplier"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationtransformationresult_normalizationmultiplier.1196debbcaa4"></a>
<p class="symi-entry-owner">PartialDifferentialEquationTransformationResult property</p>

```typescript signature
readonly normalizationMultiplier: Expression | undefined
```

The proved-nonzero residual-normalization multiplier.

### notEqualAssumption

<a id="entry-presentation_wasm_object_model_capability_contexts_not_equal_assumption_api_defaults_session_not_equal_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_notequalassumption.c25dc8a01655"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
notEqualAssumption(
    left: Expression,
    right: Expression,
): AssumptionProposition
```

Build a disequality assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_notequalassumption.9cf43d15c370"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.notEqualAssumption</code></p>

```typescript signature
notEqualAssumption(
    left: Expression,
    right: Expression,
): AssumptionProposition
```

</details>

### oddAssumption

<a id="entry-presentation_wasm_object_model_capability_contexts_odd_assumption_api_session_odd_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_oddassumption.6299ce7886a7"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
oddAssumption(subject: Expression): AssumptionProposition
```

Build an oddness assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_oddassumption.5565fb3aa853"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.oddAssumption</code></p>

```typescript signature
oddAssumption(subject: Expression): AssumptionProposition
```

</details>

### order

<a id="entry-presentation_wasm_object_model_capability_contexts_order_api_partial_differential_equations_partialdifferentialequationclassification_order"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationclassification_order.bd643506262a"></a>
<p class="symi-entry-owner">PartialDifferentialEquationClassification property</p>

```typescript signature
readonly order: number
```

The exact highest derivative order.

### order

<a id="entry-presentation_wasm_object_model_capability_contexts_order_api_partial_differential_equations_partialdifferentialequationsolutionprovenance_order"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolutionprovenance_order.988d5c9e0775"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolutionProvenance property</p>

```typescript signature
readonly order: number
```

The exact order recorded at the time the candidate was produced.

### orthogonalMatrix

<a id="entry-presentation_wasm_object_model_capability_contexts_orthogonal_matrix_api_session_orthogonal_matrix"></a>
<a id="placement-placement.wasm.wasm_module.module_orthogonalmatrix.5841526b40e6"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
orthogonalMatrix(subject: Matrix): AssumptionProposition
```

Build an orthogonal-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_orthogonalmatrix.ff1dc519eda5"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.orthogonalMatrix</code></p>

```typescript signature
orthogonalMatrix(subject: Matrix): AssumptionProposition
```

</details>

### outcome

<a id="entry-presentation_wasm_object_model_capability_contexts_outcome_api_results_setenumeration_outcome"></a>
<a id="placement-placement.wasm.wasm_class.setenumeration_outcome.7db4df413ad1"></a>
<p class="symi-entry-owner">SetEnumeration property</p>

```typescript signature
readonly outcome: string
```

`"complete"`, `"truncated"`, or `"declined"`.

### outstandingObligations

<a id="entry-presentation_wasm_object_model_capability_contexts_outstanding_obligations_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_outstanding_obligations"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryaction_outstandingobligations.38f9613fa70d"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAction property</p>

```typescript signature
readonly outstandingObligations: string[]
```

The claims the action explicitly does not make.

### outstandingObligations

<a id="entry-presentation_wasm_object_model_capability_contexts_outstanding_obligations_api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_outstanding_obligations"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryalgebra_outstandingobligations.824f1b8956b3"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAlgebra property</p>

```typescript signature
readonly outstandingObligations: string[]
```

The claims the algebra explicitly does not make.

### outstandingObligations

<a id="entry-presentation_wasm_object_model_capability_contexts_outstanding_obligations_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_outstanding_obligations"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsimilaritysolution_outstandingobligations.e0f2330fa97f"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSimilaritySolution property</p>

```typescript signature
readonly outstandingObligations: string[]
```

The claims the family explicitly does not make.

### parallelismCapability

<a id="entry-presentation_wasm_object_model_capability_contexts_parallelism_capability_api_session_parallelism_capability"></a>
<a id="placement-placement.wasm.wasm_module.module_parallelismcapability.1e9632969c40"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
parallelismCapability(): ParallelismCapability
```

Return the parallel execution capability of the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_parallelismcapability.3ffc3c2aeaf5"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.parallelismCapability</code></p>

```typescript signature
parallelismCapability(): ParallelismCapability
```

</details>

### parameters

<a id="entry-presentation_wasm_object_model_capability_contexts_parameters_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_parameters"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryaction_parameters.05581d4b2818"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAction property</p>

```typescript signature
readonly parameters: Expression[]
```

The group parameters the closed forms depend on.

### parameters

<a id="entry-presentation_wasm_object_model_capability_contexts_parameters_api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_parameters"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryalgebra_parameters.0390dacb6c08"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAlgebra property</p>

```typescript signature
readonly parameters: Expression[]
```

The constants of the general generator, one per basis generator.

### partialDifferentialEquation

<a id="entry-presentation_wasm_object_model_capability_contexts_partial_differential_equation_api_partial_differential_equations_session_partial_differential_equation"></a>
<a id="placement-placement.wasm.wasm_module.module_partialdifferentialequation.cbe5f4689b94"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
partialDifferentialEquation(
    equation: Expression,
    dependent_function: UndefinedFunction,
    independent_variables: string[],
    initial_conditions?: Expression[] | null,
    boundary_conditions?: Expression[] | null,
): PartialDifferentialEquationProblem
```

Construct a validated scalar partial differential equation in the default Context, with an explicit dependent function and independent-variable order.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_partialdifferentialequation.a755ce3b66b1"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.partialDifferentialEquation</code></p>

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

### partialDifferentialEquationArbitraryFunction

<a id="entry-presentation_wasm_object_model_capability_contexts_partial_differential_equation_arbitrary_function_api_partial_differential_equations_session_partial_differential_equation_arbitrary_function"></a>
<a id="placement-placement.wasm.wasm_class.context_partialdifferentialequationarbitraryfunction.95275c8112f7"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
partialDifferentialEquationArbitraryFunction(
    preferred_name: string,
    arity: number,
): PartialDifferentialEquationArbitraryFunction
```

Allocate a collision-free arbitrary function for a PDE candidate family.

### partialDifferentialEquationPointSymmetryGenerator

<a id="entry-presentation_wasm_object_model_capability_contexts_partial_differential_equation_point_symmetry_generator_api_partial_differential_equations_session_partial_differential_equation_point_symmetry_generator"></a>
<a id="placement-placement.wasm.wasm_module.module_partialdifferentialequationpointsymmetrygenerator.90c8b91663b5"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
partialDifferentialEquationPointSymmetryGenerator(
    problem: PartialDifferentialEquationProblem,
    coordinate_infinitesimals: Expression[],
    dependent_infinitesimal: Expression,
): PartialDifferentialEquationPointSymmetryGenerator
```

Construct a candidate point-symmetry generator of a PDE from its infinitesimals.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_partialdifferentialequationpointsymmetrygenerator.507e6f5d1b4d"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.partialDifferentialEquationPointSymmetryGenerator</code></p>

```typescript signature
partialDifferentialEquationPointSymmetryGenerator(
    problem: PartialDifferentialEquationProblem,
    coordinate_infinitesimals: Expression[],
    dependent_infinitesimal: Expression,
): PartialDifferentialEquationPointSymmetryGenerator
```

</details>

### pointSymmetryDecline

<a id="entry-presentation_wasm_object_model_capability_contexts_point_symmetry_decline_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_point_symmetry_decline"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryaction_pointsymmetrydecline.6d0421f48d8e"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAction property</p>

```typescript signature
readonly pointSymmetryDecline: string | undefined
```

The reason the underlying point-symmetry algebra was not derived, when it was not.

### positiveAssumption

<a id="entry-presentation_wasm_object_model_capability_contexts_positive_assumption_api_session_positive_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_positiveassumption.c2f3eab58e85"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
positiveAssumption(subject: Expression): AssumptionProposition
```

Build a strict-positivity assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_positiveassumption.f031f0dc6351"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.positiveAssumption</code></p>

```typescript signature
positiveAssumption(subject: Expression): AssumptionProposition
```

</details>

### positiveDefiniteMatrix

<a id="entry-presentation_wasm_object_model_capability_contexts_positive_definite_matrix_api_session_positive_definite_matrix"></a>
<a id="placement-placement.wasm.wasm_module.module_positivedefinitematrix.3e3360ff18c5"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
positiveDefiniteMatrix(subject: Matrix): AssumptionProposition
```

Build a positive-definite-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_positivedefinitematrix.b2c5736061fa"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.positiveDefiniteMatrix</code></p>

```typescript signature
positiveDefiniteMatrix(subject: Matrix): AssumptionProposition
```

</details>

### positiveIntegerAssumption

<a id="entry-presentation_wasm_object_model_capability_contexts_positive_integer_assumption_api_session_positive_integer_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_positiveintegerassumption.25753e25c658"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
positiveIntegerAssumption(subject: Expression): AssumptionProposition
```

Build a positive-integer assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_positiveintegerassumption.213d99d5dc51"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.positiveIntegerAssumption</code></p>

```typescript signature
positiveIntegerAssumption(subject: Expression): AssumptionProposition
```

</details>

### positiveSemidefiniteMatrix

<a id="entry-presentation_wasm_object_model_capability_contexts_positive_semidefinite_matrix_api_session_positive_semidefinite_matrix"></a>
<a id="placement-placement.wasm.wasm_module.module_positivesemidefinitematrix.6e762c686132"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
positiveSemidefiniteMatrix(subject: Matrix): AssumptionProposition
```

Build a positive-semidefinite-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_positivesemidefinitematrix.29521df6b267"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.positiveSemidefiniteMatrix</code></p>

```typescript signature
positiveSemidefiniteMatrix(subject: Matrix): AssumptionProposition
```

</details>

### primeAssumption

<a id="entry-presentation_wasm_object_model_capability_contexts_prime_assumption_api_session_prime_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_primeassumption.048f5e3f9f7a"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
primeAssumption(subject: Expression): AssumptionProposition
```

Build a primality assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_primeassumption.dea59522d9b3"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.primeAssumption</code></p>

```typescript signature
primeAssumption(subject: Expression): AssumptionProposition
```

</details>

### principalCongruenceResiduals

<a id="entry-presentation_wasm_object_model_capability_contexts_principal_congruence_residuals_api_partial_differential_equations_partialdifferentialequationtransformationverificationreport_principal_congruence_residuals"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationtransformationverificationreport_principalcongruenceresiduals.83be7441a1af"></a>
<p class="symi-entry-owner">PartialDifferentialEquationTransformationVerificationReport property</p>

```typescript signature
readonly principalCongruenceResiduals: Expression[]
```

The exact principal-matrix congruence residuals.

### principalForm

<a id="entry-presentation_wasm_object_model_capability_contexts_principal_form_api_partial_differential_equations_partialdifferentialequationcanonicalizationresult_principal_form"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcanonicalizationresult_principalform.56b9d4fecb56"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCanonicalizationResult property</p>

```typescript signature
readonly principalForm: string | undefined
```

The exact canonical principal form that was reached.

### principalMatrix

<a id="entry-presentation_wasm_object_model_capability_contexts_principal_matrix_api_partial_differential_equations_partialdifferentialequationsecondorderclassification_principal_matrix"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsecondorderclassification_principalmatrix.b9bafb7174f6"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSecondOrderClassification property</p>

```typescript signature
readonly principalMatrix: Matrix
```

The frozen symmetric principal matrix this analysis classified.

### proofObligations

<a id="entry-presentation_wasm_object_model_capability_contexts_proof_obligations_api_partial_differential_equations_partialdifferentialequationmethodcandidate_proof_obligations"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationmethodcandidate_proofobligations.11ee48d0dcf5"></a>
<p class="symi-entry-owner">PartialDifferentialEquationMethodCandidate property</p>

```typescript signature
readonly proofObligations: string[]
```

The exact obligations this method must discharge before it may solve.

### proofObligations

<a id="entry-presentation_wasm_object_model_capability_contexts_proof_obligations_api_partial_differential_equations_partialdifferentialequationsecondorderclassification_proof_obligations"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsecondorderclassification_proofobligations.76f844e0e913"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSecondOrderClassification property</p>

```typescript signature
readonly proofObligations: string[]
```

The obligations a downstream canonical-coordinate route must discharge.

### proofObligations

<a id="entry-presentation_wasm_object_model_capability_contexts_proof_obligations_api_partial_differential_equations_partialdifferentialequationsolutionfamily_proof_obligations"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolutionfamily_proofobligations.e5dda376598b"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolutionFamily property</p>

```typescript signature
readonly proofObligations: string[]
```

The obligations recorded against this candidate family.

### proofObligations

<a id="entry-presentation_wasm_object_model_capability_contexts_proof_obligations_api_partial_differential_equations_partialdifferentialequationverificationreport_proof_obligations"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationverificationreport_proofobligations.b11b03c7f975"></a>
<p class="symi-entry-owner">PartialDifferentialEquationVerificationReport property</p>

```typescript signature
readonly proofObligations: string[]
```

The obligations consulted or left unresolved by this verification.

### provenance

<a id="entry-presentation_wasm_object_model_capability_contexts_provenance_api_partial_differential_equations_partialdifferentialequationsolveresult_provenance"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolveresult_provenance.df5113fd5021"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolveResult property</p>

```typescript signature
readonly provenance: PartialDifferentialEquationSolutionProvenance | undefined
```

The mathematical provenance a verified solution carries.

### rationalAssumption

<a id="entry-presentation_wasm_object_model_capability_contexts_rational_assumption_api_session_rational_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_rationalassumption.12ebaab24804"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
rationalAssumption(subject: Expression): AssumptionProposition
```

Build a rationality assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_rationalassumption.66ad2d17a4bd"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.rationalAssumption</code></p>

```typescript signature
rationalAssumption(subject: Expression): AssumptionProposition
```

</details>

### realAssumption

<a id="entry-presentation_wasm_object_model_capability_contexts_real_assumption_api_session_real_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_realassumption.926ab7bf4766"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
realAssumption(subject: Expression): AssumptionProposition
```

Build a realness assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_realassumption.973d612c8247"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.realAssumption</code></p>

```typescript signature
realAssumption(subject: Expression): AssumptionProposition
```

</details>

### realEntries

<a id="entry-presentation_wasm_object_model_capability_contexts_real_entries_api_session_real_entries"></a>
<a id="placement-placement.wasm.wasm_module.module_realentries.7d6debcfcb29"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
realEntries(subject: Matrix): AssumptionProposition
```

Build a real-entry proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_realentries.1307176acf67"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.realEntries</code></p>

```typescript signature
realEntries(subject: Matrix): AssumptionProposition
```

</details>

### reconstruction

<a id="entry-presentation_wasm_object_model_capability_contexts_reconstruction_api_partial_differential_equations_partialdifferentialequationseparationresult_reconstruction"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationseparationresult_reconstruction.b551c6f2c2ad"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSeparationResult property</p>

```typescript signature
readonly reconstruction: Expression
```

The exact reconstruction expression for the separated factors.

### reducedEquation

<a id="entry-presentation_wasm_object_model_capability_contexts_reduced_equation_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_reduced_equation"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsimilaritysolution_reducedequation.cbe6c8378679"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSimilaritySolution property</p>

```typescript signature
readonly reducedEquation: Expression | undefined
```

The reduced ordinary differential equation for the profile, read as zero.

### relationKind

<a id="entry-presentation_wasm_object_model_capability_contexts_relation_kind_api_assumptionproposition_relation_kind"></a>
<a id="placement-placement.wasm.wasm_module.module_relationkind.7ff1b1cd4c30"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
relationKind(proposition: AssumptionProposition): string | undefined
```

Return the canonical relation kind for an assumption proposition.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.assumptionproposition_relationkind.e790b4e9fc3f"></a>
<p class="symi-entry-owner">AssumptionProposition method: <code>AssumptionProposition.relationKind</code></p>

```typescript signature
relationKind(): string | undefined
```

</details>

### releaseHostCancellationSlot

<a id="entry-presentation_wasm_object_model_capability_contexts_release_host_cancellation_slot_unresolved"></a>
<a id="placement-placement.wasm.wasm_module.module_releasehostcancellationslot.0cdb4a4c9d2b"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
releaseHostCancellationSlot(slot_index: number, ticket: number): void
```

Release one control-record reservation and clear any stop request standing against it.

### remainder

<a id="entry-presentation_wasm_object_model_capability_contexts_remainder_api_partial_differential_equations_partialdifferentialequationcoefficientdata_remainder"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcoefficientdata_remainder.a984a804d378"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCoefficientData property</p>

```typescript signature
readonly remainder: Expression | undefined
```

The exact jet-free remainder term, when one was extracted.

### requiredRank

<a id="entry-presentation_wasm_object_model_capability_contexts_required_rank_api_ordinary_differential_equations_ordinarydifferentialequationsystemverificationreport_required_rank"></a>
<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsystemverificationreport_requiredrank.28c5e9d61fa5"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSystemVerificationReport property</p>

```typescript signature
readonly requiredRank: number
```

The dimension a complete family of the system must span.

### reserveHostCancellationSlot

<a id="entry-presentation_wasm_object_model_capability_contexts_reserve_host_cancellation_slot_unresolved"></a>
<a id="placement-placement.wasm.wasm_module.module_reservehostcancellationslot.081bf1bf35ab"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
reserveHostCancellationSlot(): number
```

Reserve one control-record slot for the calls this thread starts next, or -1 when none is free.

### residual

<a id="entry-presentation_wasm_object_model_capability_contexts_residual_api_partial_differential_equations_partialdifferentialequationseparatedequation_residual"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationseparatedequation_residual.72f18ca86550"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSeparatedEquation property</p>

```typescript signature
readonly residual: Expression
```

The exact residual of this one-variable ordinary differential equation.

### residual

<a id="entry-presentation_wasm_object_model_capability_contexts_residual_api_partial_differential_equations_partialdifferentialequationverificationresidual_residual"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationverificationresidual_residual.7de4cbc4eaa6"></a>
<p class="symi-entry-owner">PartialDifferentialEquationVerificationResidual property</p>

```typescript signature
readonly residual: Expression
```

The independently reduced residual expression.

### rightOperand

<a id="entry-presentation_wasm_object_model_capability_contexts_right_operand_api_assumptionproposition_right_operand"></a>
<a id="placement-placement.wasm.wasm_module.module_rightoperand.e696bf40887d"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
rightOperand(proposition: AssumptionProposition): Expression | undefined
```

Return the right relation or congruence operand when present.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.assumptionproposition_rightoperand.c7d9f00cb532"></a>
<p class="symi-entry-owner">AssumptionProposition method: <code>AssumptionProposition.rightOperand</code></p>

```typescript signature
rightOperand(): Expression | undefined
```

</details>

### route

<a id="entry-presentation_wasm_object_model_capability_contexts_route_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_route"></a>
<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsystemsolveresult_route.ad4fa4980543"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSystemSolveResult property</p>

```typescript signature
readonly route: string | undefined
```

The route the certified assignment came from.

### secondEquation

<a id="entry-presentation_wasm_object_model_capability_contexts_second_equation_api_partial_differential_equations_partialdifferentialequationseparationresult_second_equation"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationseparationresult_secondequation.f18381889044"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSeparationResult property</p>

```typescript signature
readonly secondEquation: PartialDifferentialEquationSeparatedEquation
```

The second exact one-variable ordinary differential equation.

### secondOrderPrincipalPart

<a id="entry-presentation_wasm_object_model_capability_contexts_second_order_principal_part_api_partial_differential_equations_partialdifferentialequationclassification_second_order_principal_part"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationclassification_secondorderprincipalpart.b59823cebdcb"></a>
<p class="symi-entry-owner">PartialDifferentialEquationClassification property</p>

```typescript signature
readonly secondOrderPrincipalPart: PartialDifferentialEquationPrincipalPart | undefined
```

The exact second-order principal metadata, when the equation has one.

### selectedMode

<a id="entry-presentation_wasm_object_model_capability_contexts_selectedmode_api_parallelism_parallelismcapability_selected_mode"></a>
<a id="placement-placement.wasm.wasm_class.parallelismcapability_selectedmode.42c75b8ac175"></a>
<p class="symi-entry-owner">ParallelismCapability property</p>

```typescript signature
readonly selectedMode: string
```

Return the execution mode selected for later operations.

### separatePartialDifferentialEquation

<a id="entry-presentation_wasm_object_model_capability_contexts_separate_partial_differential_equation_api_partial_differential_equations_session_separate_partial_differential_equation"></a>
<a id="placement-placement.wasm.wasm_module.module_separatepartialdifferentialequation.39acc8c74690"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
separatePartialDifferentialEquation(problem: PartialDifferentialEquationProblem): PartialDifferentialEquationSeparationResult
```

Separate a supported PDE in the default context into exact one-variable ODEs.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_separatepartialdifferentialequation.bc377ea512aa"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.separatePartialDifferentialEquation</code></p>

```typescript signature
separatePartialDifferentialEquation(problem: PartialDifferentialEquationProblem): PartialDifferentialEquationSeparationResult
```

</details>

### separationConstant

<a id="entry-presentation_wasm_object_model_capability_contexts_separation_constant_api_partial_differential_equations_partialdifferentialequationseparationresult_separation_constant"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationseparationresult_separationconstant.338e7b674f0f"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSeparationResult property</p>

```typescript signature
readonly separationConstant: Expression
```

The fresh exact separation constant.

### serializeBulk

<a id="entry-presentation_wasm_object_model_capability_contexts_serialize_bulk_api_session_serialize_bulk"></a>
<a id="placement-placement.wasm.wasm_module.module_serializebulk.d66dc15ad809"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
serializeBulk(targets: Expression[]): BulkTextOutcome[]
```

Serialize an ordered collection in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_serializebulk.6da9c7d96404"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.serializeBulk</code></p>

```typescript signature
serializeBulk(targets: Expression[]): BulkTextOutcome[]
```

</details>

### setExecutionMode

<a id="entry-presentation_wasm_object_model_capability_contexts_set_execution_mode_api_session_set_execution_mode"></a>
<a id="placement-placement.wasm.wasm_module.module_setexecutionmode.eb3bb85ec56d"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
setExecutionMode(name: string): void
```

Select the execution mode of the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_setexecutionmode.8558c817b7d7"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.setExecutionMode</code></p>

```typescript signature
setExecutionMode(name: string): void
```

</details>

### similarityVariable

<a id="entry-presentation_wasm_object_model_capability_contexts_similarity_variable_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_similarity_variable"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsimilaritysolution_similarityvariable.434aacc2d08e"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSimilaritySolution property</p>

```typescript signature
readonly similarityVariable: Expression | undefined
```

The coordinate of the reduced equation, standing for the invariant.

### simplifyBulk

<a id="entry-presentation_wasm_object_model_capability_contexts_simplify_bulk_api_session_simplify_bulk"></a>
<a id="placement-placement.wasm.wasm_module.module_simplifybulk.410bd7966c46"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
simplifyBulk(targets: Expression[]): BulkExpressionOutcome[]
```

Simplify an ordered collection in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_simplifybulk.f58e98df3b0c"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.simplifyBulk</code></p>

```typescript signature
simplifyBulk(targets: Expression[]): BulkExpressionOutcome[]
```

</details>

### simplifyUnderConstraint

<a id="entry-presentation_wasm_object_model_capability_contexts_simplify_under_constraint_api_session_simplify_under_constraint"></a>
<a id="placement-placement.wasm.wasm_module.module_simplifyunderconstraint.cd9e5a6a75e2"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
simplifyUnderConstraint(
    input_expression: Expression,
    constraint: Expression,
): Expression
```

Simplify an expression under a local bounded logical constraint without changing symbol assumptions.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_simplifyunderconstraint.d6de0069cdb2"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.simplifyUnderConstraint</code></p>

```typescript signature
simplifyUnderConstraint(
    input_expression: Expression,
    constraint: Expression,
): Expression
```

</details>

### simplifyUnderConstraint

<a id="entry-presentation_wasm_object_model_capability_contexts_simplify_under_constraint_api_expression_simplify_under_constraint"></a>
<a id="placement-placement.wasm.wasm_class.expression_simplifyunderconstraint.1623bd3f02f7"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
simplifyUnderConstraint(constraint: Expression): Expression
```

Simplify this expression under a local bounded logical constraint without changing symbol assumptions.

### singularMatrix

<a id="entry-presentation_wasm_object_model_capability_contexts_singular_matrix_api_session_singular_matrix"></a>
<a id="placement-placement.wasm.wasm_module.module_singularmatrix.3fe01d91e635"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
singularMatrix(subject: Matrix): AssumptionProposition
```

Build a singular-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_singularmatrix.95862437c4bc"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.singularMatrix</code></p>

```typescript signature
singularMatrix(subject: Matrix): AssumptionProposition
```

</details>

### solution

<a id="entry-presentation_wasm_object_model_capability_contexts_solution_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_solution"></a>
<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsolveresult_solution.095194c1e3e8"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSolveResult property</p>

```typescript signature
readonly solution: Expression | undefined
```

The certified solution, which no declined request carries.

### solution

<a id="entry-presentation_wasm_object_model_capability_contexts_solution_api_partial_differential_equations_partialdifferentialequationsolveresult_solution"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolveresult_solution.9dcf8cda0dd0"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolveResult property</p>

```typescript signature
readonly solution: PartialDifferentialEquationSolutionFamily | undefined
```

The verified solution family, which no declined route may carry.

### solveOrdinaryDifferentialEquationRequest

<a id="entry-presentation_wasm_object_model_capability_contexts_solve_ordinary_differential_equation_request_api_ordinary_differential_equations_session_solve_ordinary_differential_equation_request"></a>
<a id="placement-placement.wasm.wasm_module.module_solveordinarydifferentialequationrequest.ccf38368c860"></a>
<p class="symi-entry-owner">Default context</p>

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

Solve one scalar ODE request with its data, method, scope, and regularity, keeping the evidence behind the answer.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_solveordinarydifferentialequationrequest.0d10418c0664"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.solveOrdinaryDifferentialEquationRequest</code></p>

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

### solveOrdinaryDifferentialEquationSystemRequest

<a id="entry-presentation_wasm_object_model_capability_contexts_solve_ordinary_differential_equation_system_request_api_ordinary_differential_equations_session_solve_ordinary_differential_equation_system_request"></a>
<a id="placement-placement.wasm.wasm_module.module_solveordinarydifferentialequationsystemrequest.8607f77ab0ac"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
solveOrdinaryDifferentialEquationSystemRequest(
    equations: Expression[],
    dependent_function_calls: Expression[],
    independent_variable: string,
    condition_residuals?: Expression[] | null,
    method?: string | null,
): OrdinaryDifferentialEquationSystemSolveResult
```

Solve a system of ODEs in one coordinate through the requested route, keeping the evidence behind the assignment.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_solveordinarydifferentialequationsystemrequest.b14fb515da40"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.solveOrdinaryDifferentialEquationSystemRequest</code></p>

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

### solveOrdinaryDifferentialEquationWithHistory

<a id="entry-presentation_wasm_object_model_capability_contexts_solve_ordinary_differential_equation_with_history_api_ordinary_differential_equations_session_solve_ordinary_differential_equation_with_history"></a>
<a id="placement-placement.wasm.wasm_module.module_solveordinarydifferentialequationwithhistory.5f497de66d83"></a>
<p class="symi-entry-owner">Default context</p>

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

Solve a retarded delay ODE from a constant history stated on an explicit interval.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_solveordinarydifferentialequationwithhistory.213a3190a46e"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.solveOrdinaryDifferentialEquationWithHistory</code></p>

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

### solvePartialDifferentialEquation

<a id="entry-presentation_wasm_object_model_capability_contexts_solve_partial_differential_equation_api_partial_differential_equations_session_solve_partial_differential_equation"></a>
<a id="placement-placement.wasm.wasm_module.module_solvepartialdifferentialequation.4ef3f7b147c7"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
solvePartialDifferentialEquation(
    problem: PartialDifferentialEquationProblem,
    method?: string | null,
): PartialDifferentialEquationSolveResult
```

Run the sound partial differential equation dispatcher under a stable method name.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_solvepartialdifferentialequation.e4cfd20f1895"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.solvePartialDifferentialEquation</code></p>

```typescript signature
solvePartialDifferentialEquation(
    problem: PartialDifferentialEquationProblem,
    method?: string | null,
): PartialDifferentialEquationSolveResult
```

</details>

### solvePartialDifferentialEquationBySimilarityReduction

<a id="entry-presentation_wasm_object_model_capability_contexts_solve_partial_differential_equation_by_similarity_reduction_api_partial_differential_equations_session_solve_partial_differential_equation_by_similarity_reduction"></a>
<a id="placement-placement.wasm.wasm_module.module_solvepartialdifferentialequationbysimilarityreduction.f25716664764"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
solvePartialDifferentialEquationBySimilarityReduction(
    problem: PartialDifferentialEquationProblem,
    generator: PartialDifferentialEquationPointSymmetryGenerator,
): PartialDifferentialEquationSimilaritySolution
```

Reduce a two-variable PDE by a point symmetry, solve the reduction, and lift its family.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_solvepartialdifferentialequationbysimilarityreduction.cbb1d2d4f631"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.solvePartialDifferentialEquationBySimilarityReduction</code></p>

```typescript signature
solvePartialDifferentialEquationBySimilarityReduction(
    problem: PartialDifferentialEquationProblem,
    generator: PartialDifferentialEquationPointSymmetryGenerator,
): PartialDifferentialEquationSimilaritySolution
```

</details>

### solvePartialDifferentialEquationRequest

<a id="entry-presentation_wasm_object_model_capability_contexts_solve_partial_differential_equation_request_api_partial_differential_equations_session_solve_partial_differential_equation_request"></a>
<a id="placement-placement.wasm.wasm_module.module_solvepartialdifferentialequationrequest.cd6c143bbccf"></a>
<p class="symi-entry-owner">Default context</p>

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

Solve a PDE request whose scope, geometry, regularity, and solution class are part of the question.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_solvepartialdifferentialequationrequest.9454cbc9afee"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.solvePartialDifferentialEquationRequest</code></p>

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

### solvePartialDifferentialEquationWithTransformAxisSpecifications

<a id="entry-presentation_wasm_object_model_capability_contexts_solve_partial_differential_equation_with_transform_axis_specifications_api_partial_differential_equations_session_solve_partial_differential_equation_with_transform_axis_specifications"></a>
<a id="placement-placement.wasm.wasm_module.module_solvepartialdifferentialequationwithtransformaxisspecifications.ec65b3a1b0a4"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
solvePartialDifferentialEquationWithTransformAxisSpecifications(
    problem: PartialDifferentialEquationProblem,
    method: string,
    transform_axis_specifications: string[],
): PartialDifferentialEquationSolveResult
```

Solve a PDE with ordered explicit transform-axis specifications.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_solvepartialdifferentialequationwithtransformaxisspecifications.662e82df8c14"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.solvePartialDifferentialEquationWithTransformAxisSpecifications</code></p>

```typescript signature
solvePartialDifferentialEquationWithTransformAxisSpecifications(
    problem: PartialDifferentialEquationProblem,
    method: string,
    transform_axis_specifications: string[],
): PartialDifferentialEquationSolveResult
```

</details>

### sourceVariables

<a id="entry-presentation_wasm_object_model_capability_contexts_source_variables_api_partial_differential_equations_partialdifferentialequationcoordinatechange_source_variables"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcoordinatechange_sourcevariables.5479a3ea67d3"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCoordinateChange property</p>

```typescript signature
readonly sourceVariables: string[]
```

The ordered source coordinate names.

### squareMatrix

<a id="entry-presentation_wasm_object_model_capability_contexts_square_matrix_api_session_square_matrix"></a>
<a id="placement-placement.wasm.wasm_module.module_squarematrix.dd03175ad835"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
squareMatrix(subject: Matrix): AssumptionProposition
```

Build a square-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_squarematrix.10a5804efa2d"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.squareMatrix</code></p>

```typescript signature
squareMatrix(subject: Matrix): AssumptionProposition
```

</details>

### strategy

<a id="entry-presentation_wasm_object_model_capability_contexts_strategy_api_partial_differential_equations_partialdifferentialequationseparationresult_strategy"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationseparationresult_strategy.4d4c9656d5f2"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSeparationResult property</p>

```typescript signature
readonly strategy: string
```

The selected separation strategy under its stable lowercase spelling.

### substituteBulk

<a id="entry-presentation_wasm_object_model_capability_contexts_substitute_bulk_api_session_substitute_bulk"></a>
<a id="placement-placement.wasm.wasm_module.module_substitutebulk.80cd62071bc5"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
substituteBulk(
    targets: Expression[],
    variable: Expression,
    value: Expression,
): BulkExpressionOutcome[]
```

Substitute throughout an ordered collection in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_substitutebulk.23b4102b48c2"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.substituteBulk</code></p>

```typescript signature
substituteBulk(
    targets: Expression[],
    variable: Expression,
    value: Expression,
): BulkExpressionOutcome[]
```

</details>

### subtract

<a id="entry-presentation_wasm_object_model_capability_contexts_subtract_api_expression_subtract"></a>
<a id="placement-placement.wasm.wasm_class.expression_subtract.792ca56d060e"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
subtract(other: Expression): Expression
```

Difference of this expression and `other`.

### symmetricMatrix

<a id="entry-presentation_wasm_object_model_capability_contexts_symmetric_matrix_api_session_symmetric_matrix"></a>
<a id="placement-placement.wasm.wasm_module.module_symmetricmatrix.503a37665d86"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
symmetricMatrix(subject: Matrix): AssumptionProposition
```

Build a symmetric-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_symmetricmatrix.fef52053eed2"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.symmetricMatrix</code></p>

```typescript signature
symmetricMatrix(subject: Matrix): AssumptionProposition
```

</details>

### targetDependentFunction

<a id="entry-presentation_wasm_object_model_capability_contexts_target_dependent_function_api_partial_differential_equations_partialdifferentialequationcoordinatechange_target_dependent_function"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcoordinatechange_targetdependentfunction.8f8a6f1e66f4"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCoordinateChange property</p>

```typescript signature
readonly targetDependentFunction: string
```

The target unknown-function name.

### targetProblem

<a id="entry-presentation_wasm_object_model_capability_contexts_target_problem_api_partial_differential_equations_partialdifferentialequationtransformationresult_target_problem"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationtransformationresult_targetproblem.b42721033cee"></a>
<p class="symi-entry-owner">PartialDifferentialEquationTransformationResult property</p>

```typescript signature
readonly targetProblem: PartialDifferentialEquationProblem | undefined
```

The transformed PDE problem stated in the target coordinates.

### targetVariables

<a id="entry-presentation_wasm_object_model_capability_contexts_target_variables_api_partial_differential_equations_partialdifferentialequationcoordinatechange_target_variables"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcoordinatechange_targetvariables.f70dbe969aba"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCoordinateChange property</p>

```typescript signature
readonly targetVariables: string[]
```

The ordered target coordinate names.

### toString

<a id="entry-presentation_wasm_object_model_capability_contexts_to_js_string_unresolved"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcoordinatechange_tostring.1cfabe94bc27"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCoordinateChange method</p>

```typescript signature
toString(): string
```

The mathematical text of this object, as a JavaScript string.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationproblem_tostring.fe62b42acbb0"></a>
<p class="symi-entry-owner">PartialDifferentialEquationProblem method: <code>PartialDifferentialEquationProblem.toString</code></p>

```typescript signature
toString(): string
```

<a id="placement-placement.wasm.wasm_class.undefinedfunction_tostring.e24a69e52de8"></a>
<p class="symi-entry-owner">UndefinedFunction method: <code>UndefinedFunction.toString</code></p>

```typescript signature
toString(): string
```

</details>

### transcendentalAssumption

<a id="entry-presentation_wasm_object_model_capability_contexts_transcendental_assumption_api_session_transcendental_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_transcendentalassumption.685160fbab59"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
transcendentalAssumption(subject: Expression): AssumptionProposition
```

Build a transcendence assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_transcendentalassumption.6d339804210b"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.transcendentalAssumption</code></p>

```typescript signature
transcendentalAssumption(subject: Expression): AssumptionProposition
```

</details>

### transformationDecline

<a id="entry-presentation_wasm_object_model_capability_contexts_transformation_decline_api_partial_differential_equations_partialdifferentialequationcanonicalizationresult_transformation_decline"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcanonicalizationresult_transformationdecline.bbfd366c8896"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCanonicalizationResult property</p>

```typescript signature
readonly transformationDecline: string | undefined
```

The underlying coordinate-transformation decline, when one caused the decline.

### transformed

<a id="entry-presentation_wasm_object_model_capability_contexts_transformed_api_partial_differential_equations_partialdifferentialequationtransformationresult_transformed"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationtransformationresult_transformed.7b1b402944f8"></a>
<p class="symi-entry-owner">PartialDifferentialEquationTransformationResult property</p>

```typescript signature
readonly transformed: boolean
```

Whether a verified transformation was produced.

### transformedCoordinates

<a id="entry-presentation_wasm_object_model_capability_contexts_transformed_coordinates_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_transformed_coordinates"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryaction_transformedcoordinates.52e1713096aa"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAction property</p>

```typescript signature
readonly transformedCoordinates: Expression[]
```

The coordinates at which a seed solution is evaluated.

### transformedGoverningResidual

<a id="entry-presentation_wasm_object_model_capability_contexts_transformed_governing_residual_api_partial_differential_equations_partialdifferentialequationtransformationverificationreport_transformed_governing_residual"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationtransformationverificationreport_transformedgoverningresidual.d3784149f15e"></a>
<p class="symi-entry-owner">PartialDifferentialEquationTransformationVerificationReport property</p>

```typescript signature
readonly transformedGoverningResidual: Expression
```

The independently transformed source governing residual.

### unavailableReason

<a id="entry-presentation_wasm_object_model_capability_contexts_unavailablereason_api_parallelism_parallelismcapability_unavailable_reason"></a>
<a id="placement-placement.wasm.wasm_class.parallelismcapability_unavailablereason.07bb1c3498ad"></a>
<p class="symi-entry-owner">ParallelismCapability property</p>

```typescript signature
readonly unavailableReason: string | undefined
```

Return the stable reason parallel execution is unavailable, if any.

### unitaryMatrix

<a id="entry-presentation_wasm_object_model_capability_contexts_unitary_matrix_api_session_unitary_matrix"></a>
<a id="placement-placement.wasm.wasm_module.module_unitarymatrix.5678eb6d4ccd"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
unitaryMatrix(subject: Matrix): AssumptionProposition
```

Build a unitary-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_unitarymatrix.4eef4d42ba96"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.unitaryMatrix</code></p>

```typescript signature
unitaryMatrix(subject: Matrix): AssumptionProposition
```

</details>

### upperTriangularMatrix

<a id="entry-presentation_wasm_object_model_capability_contexts_upper_triangular_matrix_api_session_upper_triangular_matrix"></a>
<a id="placement-placement.wasm.wasm_module.module_uppertriangularmatrix.14d1fd7d94d6"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
upperTriangularMatrix(subject: Matrix): AssumptionProposition
```

Build a upper-triangular-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_uppertriangularmatrix.5ff14f5d2604"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.upperTriangularMatrix</code></p>

```typescript signature
upperTriangularMatrix(subject: Matrix): AssumptionProposition
```

</details>

### value

<a id="entry-presentation_wasm_object_model_capability_contexts_value_api_parallelism_bulkexpressionoutcome_value"></a>
<a id="placement-placement.wasm.wasm_class.bulkexpressionoutcome_value.a88ab5dae37a"></a>
<p class="symi-entry-owner">BulkExpressionOutcome property</p>

```typescript signature
readonly value: Expression | undefined
```

Return the expression value when the item succeeded.

### value

<a id="entry-presentation_wasm_object_model_capability_contexts_value_api_parallelism_bulktextoutcome_value"></a>
<a id="placement-placement.wasm.wasm_class.bulktextoutcome_value.e25bb45ec6a7"></a>
<p class="symi-entry-owner">BulkTextOutcome property</p>

```typescript signature
readonly value: string | undefined
```

Return the canonical text when the item succeeded.

### verification

<a id="entry-presentation_wasm_object_model_capability_contexts_verification_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_verification"></a>
<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsolveresult_verification.98a3c08527f6"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSolveResult property</p>

```typescript signature
readonly verification: string | undefined
```

The independent verifier's decision on the candidate, when verification ran.

### verification

<a id="entry-presentation_wasm_object_model_capability_contexts_verification_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_verification"></a>
<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsystemsolveresult_verification.21b83effc580"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSystemSolveResult property</p>

```typescript signature
readonly verification: string | undefined
```

The independent verifier's decision on the assignment, when verification ran.

### verification

<a id="entry-presentation_wasm_object_model_capability_contexts_verification_api_partial_differential_equations_partialdifferentialequationseparationresult_verification"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationseparationresult_verification.af2ce21b75f8"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSeparationResult property</p>

```typescript signature
readonly verification: string
```

The aggregate verdict of the independently replayed separation certificate.

### verification

<a id="entry-presentation_wasm_object_model_capability_contexts_verification_api_partial_differential_equations_partialdifferentialequationsolveresult_verification"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolveresult_verification.625c06465450"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolveResult property</p>

```typescript signature
readonly verification: PartialDifferentialEquationVerificationReport | undefined
```

The independent verification report a solved result must carry.

### verifyOrdinaryDifferentialEquationSystemSolution

<a id="entry-presentation_wasm_object_model_capability_contexts_verify_ordinary_differential_equation_system_solution_api_ordinary_differential_equations_session_verify_ordinary_differential_equation_system_solution"></a>
<a id="placement-placement.wasm.wasm_module.module_verifyordinarydifferentialequationsystemsolution.d73b5971c92e"></a>
<p class="symi-entry-owner">Default context</p>

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

Verify a supplied assignment for a system of ODEs without solving it again.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_verifyordinarydifferentialequationsystemsolution.6259425d8a18"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.verifyOrdinaryDifferentialEquationSystemSolution</code></p>

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

### verifyPartialDifferentialEquationCoordinateTransformation

<a id="entry-presentation_wasm_object_model_capability_contexts_verify_partial_differential_equation_coordinate_transformation_api_partial_differential_equations_session_verify_partial_differential_equation_coordinate_transformation"></a>
<a id="placement-placement.wasm.wasm_module.module_verifypartialdifferentialequationcoordinatetransformation.723f0853a676"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
verifyPartialDifferentialEquationCoordinateTransformation(
    problem: PartialDifferentialEquationProblem,
    transformation: PartialDifferentialEquationTransformationResult,
): PartialDifferentialEquationTransformationVerificationReport
```

Independently verify an exact PDE coordinate transformation.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_verifypartialdifferentialequationcoordinatetransformation.8d606f34fd5e"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.verifyPartialDifferentialEquationCoordinateTransformation</code></p>

```typescript signature
verifyPartialDifferentialEquationCoordinateTransformation(
    problem: PartialDifferentialEquationProblem,
    transformation: PartialDifferentialEquationTransformationResult,
): PartialDifferentialEquationTransformationVerificationReport
```

</details>

### verifyPartialDifferentialEquationSolution

<a id="entry-presentation_wasm_object_model_capability_contexts_verify_partial_differential_equation_solution_api_partial_differential_equations_session_verify_partial_differential_equation_solution"></a>
<a id="placement-placement.wasm.wasm_module.module_verifypartialdifferentialequationsolution.b86bfbc069d4"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
verifyPartialDifferentialEquationSolution(
    problem: PartialDifferentialEquationProblem,
    solution: PartialDifferentialEquationSolutionFamily,
): PartialDifferentialEquationVerificationReport
```

Independently verify a partial differential equation candidate with exact residual reasoning.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_verifypartialdifferentialequationsolution.9d784d900bb6"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.verifyPartialDifferentialEquationSolution</code></p>

```typescript signature
verifyPartialDifferentialEquationSolution(
    problem: PartialDifferentialEquationProblem,
    solution: PartialDifferentialEquationSolutionFamily,
): PartialDifferentialEquationVerificationReport
```

</details>

### weight

<a id="entry-presentation_wasm_object_model_capability_contexts_weight_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_weight"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsimilaritysolution_weight.1ec0dcff27a1"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSimilaritySolution property</p>

```typescript signature
readonly weight: Expression | undefined
```

The weight of invariant solutions.

### workerCount

<a id="entry-presentation_wasm_object_model_capability_contexts_workercount_api_parallelism_parallelismcapability_worker_count"></a>
<a id="placement-placement.wasm.wasm_class.parallelismcapability_workercount.2182d20e0f67"></a>
<p class="symi-entry-owner">ParallelismCapability property</p>

```typescript signature
readonly workerCount: number
```

Return the configured worker count.

### zeroAssumption

<a id="entry-presentation_wasm_object_model_capability_contexts_zero_assumption_api_session_zero_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_zeroassumption.999da512137e"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
zeroAssumption(subject: Expression): AssumptionProposition
```

Build a zero assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_zeroassumption.e80b6e21b307"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.zeroAssumption</code></p>

```typescript signature
zeroAssumption(subject: Expression): AssumptionProposition
```

</details>

### zeroEquivalent

<a id="entry-presentation_wasm_object_model_capability_contexts_zero_equivalent_api_session_zero_equivalent"></a>
<a id="placement-placement.wasm.wasm_module.module_zeroequivalent.cab9fc362970"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
zeroEquivalent(
    input_expression: Expression,
    constraint?: Expression | null,
): string
```

Prove whether an expression is zero wherever it is defined, returning `"true"`, `"false"`, or `"unknown"`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_zeroequivalent.9d78dbb91e75"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.zeroEquivalent</code></p>

```typescript signature
zeroEquivalent(
    input_expression: Expression,
    constraint?: Expression | null,
): string
```

</details>

### zeroEquivalent

<a id="entry-presentation_wasm_object_model_capability_contexts_zero_equivalent_api_expression_zero_equivalent"></a>
<a id="placement-placement.wasm.wasm_class.expression_zeroequivalent.d55b1b33dd0a"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
zeroEquivalent(constraint?: Expression | null): string
```

Prove whether this expression is zero wherever it is defined, returning `"true"`, `"false"`, or `"unknown"`.

### zeroMatrix

<a id="entry-presentation_wasm_object_model_capability_contexts_zero_matrix_api_session_zero_matrix"></a>
<a id="placement-placement.wasm.wasm_module.module_zeromatrix.3561defba5d5"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
zeroMatrix(subject: Matrix): AssumptionProposition
```

Build a zero-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_zeromatrix.2e74a285fae1"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.zeroMatrix</code></p>

```typescript signature
zeroMatrix(subject: Matrix): AssumptionProposition
```

</details>

