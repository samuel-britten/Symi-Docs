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


## Additional API

### admits_additive_solution_symmetry

<a id="entry-presentation_kotlin_object_model_capability_contexts_admits_additive_solution_symmetry_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_admits_additive_solution_symmetry"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationpointsymmetryaction_admitsadditivesolutionsymmetry.a2f406bb7732"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAction method</p>

```kotlin signature
fun admitsAdditiveSolutionSymmetry(): kotlin.Boolean
```

Whether the action adds an arbitrary solution by linear superposition.

### admits_additive_solution_symmetry

<a id="entry-presentation_kotlin_object_model_capability_contexts_admits_additive_solution_symmetry_api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_admits_additive_solution_symmetry"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationpointsymmetryalgebra_admitsadditivesolutionsymmetry.6890d26b29ee"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAlgebra method</p>

```kotlin signature
fun admitsAdditiveSolutionSymmetry(): kotlin.Boolean
```

Whether adding any solution of the linear homogeneous equation is also a symmetry.

### amplitude

<a id="entry-presentation_kotlin_object_model_capability_contexts_amplitude_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_amplitude"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationpointsymmetryaction_amplitude.8cb28f65ed60"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAction method</p>

```kotlin signature
fun amplitude(): UniffiExpression?
```

The amplitude multiplying the transformed seed.

### applied_to_seed

<a id="entry-presentation_kotlin_object_model_capability_contexts_applied_to_seed_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_applied_to_seed"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationpointsymmetryaction_appliedtoseed.4053299a3cfa"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAction method</p>

```kotlin signature
fun appliedToSeed(seed: UniffiUndefinedFunction): UniffiExpression
```

The transformed seed solution under the action.

### applied_to_seed_with_additive_solution

<a id="entry-presentation_kotlin_object_model_capability_contexts_applied_to_seed_with_additive_solution_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_applied_to_seed_with_additive_solution"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationpointsymmetryaction_appliedtoseedwithadditivesolution.236159f6d310"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAction method</p>

```kotlin signature
fun appliedToSeedWithAdditiveSolution(
    seed: UniffiUndefinedFunction,
    additiveSolution: UniffiUndefinedFunction,
): UniffiExpression
```

The transformed seed solution plus an added solution under the action.

### arbitrary_functions

<a id="entry-presentation_kotlin_object_model_capability_contexts_arbitrary_functions_api_partial_differential_equations_partialdifferentialequationsolutionfamily_arbitrary_functions"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsolutionfamily_arbitraryfunctions.c48f2615fac2"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolutionFamily method</p>

```kotlin signature
fun arbitraryFunctions(): List<UniffiPartialDifferentialEquationArbitraryFunction>
```

The functions that stay arbitrary and opaque throughout verification.

### arity

<a id="entry-presentation_kotlin_object_model_capability_contexts_arity_api_partial_differential_equations_partialdifferentialequationarbitraryfunction_arity"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationarbitraryfunction_arity.8b9b5bd4e4c0"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationArbitraryFunction method</p>

```kotlin signature
fun arity(): kotlin.ULong
```

The recorded and validated function arity.

### basis

<a id="entry-presentation_kotlin_object_model_capability_contexts_basis_api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_basis"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationpointsymmetryalgebra_basis.6c6dfec7fca8"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAlgebra method</p>

```kotlin signature
fun basis(): List<UniffiPartialDifferentialEquationPointSymmetryGenerator>
```

The independently verified basis generators, one per parameter.

### boundary_condition_residuals

<a id="entry-presentation_kotlin_object_model_capability_contexts_boundary_condition_residuals_api_partial_differential_equations_partialdifferentialequationverificationreport_boundary_condition_residuals"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationverificationreport_boundaryconditionresiduals.dc81e5020466"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationVerificationReport method</p>

```kotlin signature
fun boundaryConditionResiduals(): List<UniffiPartialDifferentialEquationVerificationResidual>
```

One reduced residual per boundary condition, in insertion order.

### boundary_conditions

<a id="entry-presentation_kotlin_object_model_capability_contexts_boundary_conditions_api_partial_differential_equations_partialdifferentialequationproblem_boundary_conditions"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationproblem_boundaryconditions.c5850894fc72"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationProblem method</p>

```kotlin signature
fun boundaryConditions(): List<UniffiExpression>
```

The boundary-condition residuals in insertion order.

### canonicalize_partial_differential_equation

<a id="entry-presentation_kotlin_object_model_capability_contexts_canonicalize_partial_differential_equation_api_partial_differential_equations_session_canonicalize_partial_differential_equation"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_canonicalizepartialdifferentialequation.2c499c14272f"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun canonicalizePartialDifferentialEquation(problem: UniffiPartialDifferentialEquationProblem): UniffiPartialDifferentialEquationCanonicalizationResult
```

Construct and independently verify exact canonical coordinates for a supported PDE.

### canonicalized

<a id="entry-presentation_kotlin_object_model_capability_contexts_canonicalized_api_partial_differential_equations_partialdifferentialequationcanonicalizationresult_canonicalized"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationcanonicalizationresult_canonicalized.d883bd9fdc14"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCanonicalizationResult method</p>

```kotlin signature
fun canonicalized(): kotlin.Boolean
```

Whether verified canonical coordinates were constructed.

### cases

<a id="entry-presentation_kotlin_object_model_capability_contexts_cases_api_partial_differential_equations_partialdifferentialequationsecondorderclassification_cases"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsecondorderclassification_cases.bb9a3b4afc85"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSecondOrderClassification method</p>

```kotlin signature
fun cases(): List<UniffiPartialDifferentialEquationSecondOrderTypeCase>
```

The complete exact case table, when the verdict is conditional.

### change_partial_differential_equation_variables

<a id="entry-presentation_kotlin_object_model_capability_contexts_change_partial_differential_equation_variables_api_partial_differential_equations_session_change_partial_differential_equation_variables"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_changepartialdifferentialequationvariables.5c186721c3a9"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun changePartialDifferentialEquationVariables(
    problem: UniffiPartialDifferentialEquationProblem,
    targetVariables: List<kotlin.String>,
    forwardCoordinates: List<UniffiExpression>?,
    inverseCoordinates: List<UniffiExpression>?,
    targetDependentFunction: UniffiUndefinedFunction?,
): UniffiPartialDifferentialEquationTransformationResult
```

Transform a two-variable PDE through an exact user-supplied change of variables.

### claimed_governing_residual

<a id="entry-presentation_kotlin_object_model_capability_contexts_claimed_governing_residual_api_partial_differential_equations_partialdifferentialequationtransformationverificationreport_claimed_governing_residual"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationtransformationverificationreport_claimedgoverningresidual.861488f1a083"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationTransformationVerificationReport method</p>

```kotlin signature
fun claimedGoverningResidual(): UniffiExpression
```

The governing residual the transformation claimed.

### classify_partial_differential_equation

<a id="entry-presentation_kotlin_object_model_capability_contexts_classify_partial_differential_equation_api_partial_differential_equations_session_classify_partial_differential_equation"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_classifypartialdifferentialequation.c74c475e1590"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun classifyPartialDifferentialEquation(problem: UniffiPartialDifferentialEquationProblem): UniffiPartialDifferentialEquationClassification
```

Classify a validated scalar partial differential equation with exact structural analysis.

### classify_second_order_partial_differential_equation

<a id="entry-presentation_kotlin_object_model_capability_contexts_classify_second_order_partial_differential_equation_api_partial_differential_equations_session_classify_second_order_partial_differential_equation"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_classifysecondorderpartialdifferentialequation.703baf9a035f"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun classifySecondOrderPartialDifferentialEquation(problem: UniffiPartialDifferentialEquationProblem): UniffiPartialDifferentialEquationSecondOrderClassification
```

Classify a two-variable linear second-order PDE over real coordinates.

### coefficient_data

<a id="entry-presentation_kotlin_object_model_capability_contexts_coefficient_data_api_partial_differential_equations_partialdifferentialequationclassification_coefficient_data"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationclassification_coefficientdata.43a776bbb86f"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationClassification method</p>

```kotlin signature
fun coefficientData(): UniffiPartialDifferentialEquationCoefficientData
```

The exact affine coefficient data extracted from the governing residual.

### components

<a id="entry-presentation_kotlin_object_model_capability_contexts_components_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_components"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiordinarydifferentialequationsystemsolveresult_components.39df5fa84375"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSystemSolveResult method</p>

```kotlin signature
fun components(): List<UniffiExpression>
```

One explicit value per declared unknown, in declaration order, when solved.

### composition_residuals

<a id="entry-presentation_kotlin_object_model_capability_contexts_composition_residuals_api_partial_differential_equations_partialdifferentialequationtransformationverificationreport_composition_residuals"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationtransformationverificationreport_compositionresiduals.8f4f6276ad4f"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationTransformationVerificationReport method</p>

```kotlin signature
fun compositionResiduals(): List<UniffiExpression>
```

Every forward and inverse map-composition residual.

### condition

<a id="entry-presentation_kotlin_object_model_capability_contexts_condition_api_partial_differential_equations_partialdifferentialequationsecondordertypecase_condition"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsecondordertypecase_condition.b0d2440c0ae1"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSecondOrderTypeCase method</p>

```kotlin signature
fun condition(): UniffiAssumptionProposition
```

The exact condition under which this case's classical type holds.

### coordinate_change

<a id="entry-presentation_kotlin_object_model_capability_contexts_coordinate_change_api_partial_differential_equations_partialdifferentialequationtransformationresult_coordinate_change"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationtransformationresult_coordinatechange.80de44dbfa68"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationTransformationResult method</p>

```kotlin signature
fun coordinateChange(): UniffiPartialDifferentialEquationCoordinateChange?
```

The validated coordinate change of a successful transformation.

### coordinate_infinitesimals

<a id="entry-presentation_kotlin_object_model_capability_contexts_coordinate_infinitesimals_api_partial_differential_equations_partialdifferentialequationpointsymmetrygenerator_coordinate_infinitesimals"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationpointsymmetrygenerator_coordinateinfinitesimals.8d6d47bcc7f3"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryGenerator method</p>

```kotlin signature
fun coordinateInfinitesimals(): List<UniffiExpression>
```

The coordinate infinitesimals in the problem's independent-variable order.

### decline

<a id="entry-presentation_kotlin_object_model_capability_contexts_decline_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_decline"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiordinarydifferentialequationsolveresult_decline.bb16bcd65b3a"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSolveResult method</p>

```kotlin signature
fun decline(): UniffiOrdinaryDifferentialEquationSolveDecline?
```

The typed reason no certified candidate was produced.

### decline

<a id="entry-presentation_kotlin_object_model_capability_contexts_decline_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_decline"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiordinarydifferentialequationsystemsolveresult_decline.3a7344aea977"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSystemSolveResult method</p>

```kotlin signature
fun decline(): UniffiOrdinaryDifferentialEquationSystemSolveDecline?
```

The typed reason no certified assignment was produced.

### decline

<a id="entry-presentation_kotlin_object_model_capability_contexts_decline_api_partial_differential_equations_partialdifferentialequationcanonicalizationresult_decline"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationcanonicalizationresult_decline.2714d3e64129"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCanonicalizationResult method</p>

```kotlin signature
fun decline(): UniffiPartialDifferentialEquationCanonicalizationDecline?
```

The exact reason automatic canonicalization declined.

### decline

<a id="entry-presentation_kotlin_object_model_capability_contexts_decline_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_decline"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationpointsymmetryaction_decline.e6fa93a8ab2b"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAction method</p>

```kotlin signature
fun decline(): UniffiPartialDifferentialEquationSymmetryActionDecline?
```

The typed reason the action was not constructed.

### decline

<a id="entry-presentation_kotlin_object_model_capability_contexts_decline_api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_decline"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationpointsymmetryalgebra_decline.0e822f10e840"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAlgebra method</p>

```kotlin signature
fun decline(): UniffiPartialDifferentialEquationPointSymmetryDecline?
```

The typed reason the algebra was not derived.

### decline

<a id="entry-presentation_kotlin_object_model_capability_contexts_decline_api_partial_differential_equations_partialdifferentialequationsecondorderclassification_decline"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsecondorderclassification_decline.6cc70681d71c"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSecondOrderClassification method</p>

```kotlin signature
fun decline(): UniffiPartialDifferentialEquationSecondOrderClassificationDecline?
```

The exact reason an unknown analysis could not be completed.

### decline

<a id="entry-presentation_kotlin_object_model_capability_contexts_decline_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_decline"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsimilaritysolution_decline.5a2a43aab25a"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSimilaritySolution method</p>

```kotlin signature
fun decline(): UniffiPartialDifferentialEquationSimilarityReductionDecline?
```

The typed reason no similarity family was produced.

### decline

<a id="entry-presentation_kotlin_object_model_capability_contexts_decline_api_partial_differential_equations_partialdifferentialequationsolveresult_decline"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsolveresult_decline.1dc9fbb95650"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolveResult method</p>

```kotlin signature
fun decline(): UniffiPartialDifferentialEquationSolveDecline?
```

The stable decline reason, when no solution was produced.

### decline

<a id="entry-presentation_kotlin_object_model_capability_contexts_decline_api_partial_differential_equations_partialdifferentialequationtransformationresult_decline"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationtransformationresult_decline.b398799e1f8d"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationTransformationResult method</p>

```kotlin signature
fun decline(): UniffiPartialDifferentialEquationTransformationDecline?
```

The exact reason no transformation was produced.

### dependent_function

<a id="entry-presentation_kotlin_object_model_capability_contexts_dependent_function_api_partial_differential_equations_partialdifferentialequationproblem_dependent_function"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationproblem_dependentfunction.baf08ad50e90"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationProblem method</p>

```kotlin signature
fun dependentFunction(): kotlin.String
```

The declared dependent-function name.

### dependent_infinitesimal

<a id="entry-presentation_kotlin_object_model_capability_contexts_dependent_infinitesimal_api_partial_differential_equations_partialdifferentialequationpointsymmetrygenerator_dependent_infinitesimal"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationpointsymmetrygenerator_dependentinfinitesimal.58fbd23d613a"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryGenerator method</p>

```kotlin signature
fun dependentInfinitesimal(): UniffiExpression
```

The dependent infinitesimal of the generator.

### derivative_coefficients

<a id="entry-presentation_kotlin_object_model_capability_contexts_derivative_coefficients_api_partial_differential_equations_partialdifferentialequationprincipalpart_derivative_coefficients"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationprincipalpart_derivativecoefficients.b2ec18259b1f"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPrincipalPart method</p>

```kotlin signature
fun derivativeCoefficients(): List<UniffiPartialDifferentialEquationPrincipalCoefficient>
```

The raw mixed-derivative coefficients, before symmetrization halves them.

### determining_equations

<a id="entry-presentation_kotlin_object_model_capability_contexts_determining_equations_api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_determining_equations"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationpointsymmetryalgebra_determiningequations.fc3f0212d248"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAlgebra method</p>

```kotlin signature
fun determiningEquations(): List<UniffiExpression>
```

The determining equations exactly as derived, before any reduction.

### discharged_obligations

<a id="entry-presentation_kotlin_object_model_capability_contexts_discharged_obligations_api_partial_differential_equations_partialdifferentialequationsolutionprovenance_discharged_obligations"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsolutionprovenance_dischargedobligations.f745c369b8fe"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolutionProvenance method</p>

```kotlin signature
fun dischargedObligations(): List<UniffiPartialDifferentialEquationProofObligation>
```

The obligations discharged by exact query before the solution was returned.

### discover_partial_differential_equation

<a id="entry-presentation_kotlin_object_model_capability_contexts_discover_partial_differential_equation_api_partial_differential_equations_session_discover_partial_differential_equation"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_discoverpartialdifferentialequation.5099cd244873"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun discoverPartialDifferentialEquation(
    equation: UniffiExpression,
    initialConditions: List<UniffiExpression>,
    boundaryConditions: List<UniffiExpression>,
): UniffiPartialDifferentialEquationProblem
```

Discover the unique scalar partial differential equation signature from one governing residual, in the default context.

### discriminant

<a id="entry-presentation_kotlin_object_model_capability_contexts_discriminant_api_partial_differential_equations_partialdifferentialequationsecondorderclassification_discriminant"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsecondorderclassification_discriminant.1113bce4edf0"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSecondOrderClassification method</p>

```kotlin signature
fun discriminant(): UniffiExpression
```

The exact discriminant `b^2 - a*c` of the symmetric principal matrix.

### elements

<a id="entry-presentation_kotlin_object_model_capability_contexts_elements_api_results_setenumeration_elements"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisetenumeration_elements.7c49be7882fe"></a>
<p class="symi-entry-owner">UniffiSetEnumeration method</p>

```kotlin signature
fun elements(): List<UniffiExpression>
```

The exact elements produced, in increasing order.

### equation_type

<a id="entry-presentation_kotlin_object_model_capability_contexts_equation_type_api_partial_differential_equations_partialdifferentialequationsecondorderclassification_equation_type"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsecondorderclassification_equationtype.753b8563ef98"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSecondOrderClassification method</p>

```kotlin signature
fun equationType(): UniffiPartialDifferentialEquationSecondOrderType?
```

The single proved classical type, when the verdict is definite.

### equation_type

<a id="entry-presentation_kotlin_object_model_capability_contexts_equation_type_api_partial_differential_equations_partialdifferentialequationsecondordertypecase_equation_type"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsecondordertypecase_equationtype.f745d20f783d"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSecondOrderTypeCase method</p>

```kotlin signature
fun equationType(): UniffiPartialDifferentialEquationSecondOrderType
```

The classical type proved under this case's condition.

### explicit_branch

<a id="entry-presentation_kotlin_object_model_capability_contexts_explicit_branch_api_partial_differential_equations_partialdifferentialequationverificationreport_explicit_branch"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationverificationreport_explicitbranch.52a64b46bb22"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationVerificationReport method</p>

```kotlin signature
fun explicitBranch(): UniffiExpression?
```

The isolated explicit branch checked for an implicit candidate.

### explicit_partial_differential_equation_solution

<a id="entry-presentation_kotlin_object_model_capability_contexts_explicit_partial_differential_equation_solution_api_partial_differential_equations_session_explicit_partial_differential_equation_solution"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_explicitpartialdifferentialequationsolution.14d16daccc4d"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun explicitPartialDifferentialEquationSolution(solution: UniffiExpression): UniffiPartialDifferentialEquationSolutionFamily
```

Create an explicit partial differential equation solution family in the default context.

### first_equation

<a id="entry-presentation_kotlin_object_model_capability_contexts_first_equation_api_partial_differential_equations_partialdifferentialequationseparationresult_first_equation"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationseparationresult_firstequation.0f07c1ea56fc"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSeparationResult method</p>

```kotlin signature
fun firstEquation(): UniffiPartialDifferentialEquationSeparatedEquation
```

The first exact one-variable ordinary differential equation.

### form

<a id="entry-presentation_kotlin_object_model_capability_contexts_form_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_form"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiordinarydifferentialequationsolveresult_form.685873215d90"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSolveResult method</p>

```kotlin signature
fun form(): UniffiOrdinaryDifferentialEquationSolutionForm?
```

Whether the solution is the value of the unknown or a relation read as zero.

### form

<a id="entry-presentation_kotlin_object_model_capability_contexts_form_api_partial_differential_equations_partialdifferentialequationsolutionfamily_form"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsolutionfamily_form.884b095aac42"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolutionFamily method</p>

```kotlin signature
fun form(): UniffiPartialDifferentialEquationSolutionForm
```

Whether this candidate is an `explicit` value or an `implicit` residual.

### forward_coordinates

<a id="entry-presentation_kotlin_object_model_capability_contexts_forward_coordinates_api_partial_differential_equations_partialdifferentialequationcoordinatechange_forward_coordinates"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationcoordinatechange_forwardcoordinates.d9778d343354"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCoordinateChange method</p>

```kotlin signature
fun forwardCoordinates(): List<UniffiExpression>
```

The ordered source-to-target coordinate expressions.

### frequency_domain_equation

<a id="entry-presentation_kotlin_object_model_capability_contexts_frequency_domain_equation_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_frequency_domain_equation"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiordinarydifferentialequationsolveresult_frequencydomainequation.a2db8ac10e80"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSolveResult method</p>

```kotlin signature
fun frequencyDomainEquation(): UniffiExpression?
```

The frequency-domain equation of a Laplace transform solution, read as zero.

### full_coefficients

<a id="entry-presentation_kotlin_object_model_capability_contexts_full_coefficients_api_partial_differential_equations_partialdifferentialequationcoefficientdata_full_coefficients"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationcoefficientdata_fullcoefficients.cd5d640cbac4"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCoefficientData method</p>

```kotlin signature
fun fullCoefficients(): List<UniffiPartialDifferentialEquationJetCoefficient>?
```

Every jet coefficient, when the equation is exactly linear.

### general_generator

<a id="entry-presentation_kotlin_object_model_capability_contexts_general_generator_api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_general_generator"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationpointsymmetryalgebra_generalgenerator.69d12d4b50a6"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAlgebra method</p>

```kotlin signature
fun generalGenerator(): UniffiPartialDifferentialEquationPointSymmetryGenerator?
```

The general generator, a combination of the basis through the parameters.

### generality

<a id="entry-presentation_kotlin_object_model_capability_contexts_generality_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_generality"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiordinarydifferentialequationsolveresult_generality.613e7cc62c9e"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSolveResult method</p>

```kotlin signature
fun generality(): UniffiOrdinaryDifferentialEquationGeneralityVerdict?
```

The rank decision behind a complete-family claim, when the request required one.

### generality

<a id="entry-presentation_kotlin_object_model_capability_contexts_generality_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_generality"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiordinarydifferentialequationsystemsolveresult_generality.401bd6dc4810"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSystemSolveResult method</p>

```kotlin signature
fun generality(): UniffiOrdinaryDifferentialEquationGeneralityVerdict?
```

The rank decision on the constants-to-initial-jet map, when verification ran.

### generality

<a id="entry-presentation_kotlin_object_model_capability_contexts_generality_api_ordinary_differential_equations_ordinarydifferentialequationsystemverificationreport_generality"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiordinarydifferentialequationsystemverificationreport_generality.2b5c84d1d408"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSystemVerificationReport method</p>

```kotlin signature
fun generality(): UniffiOrdinaryDifferentialEquationGeneralityVerdict
```

The rank decision on the map from the supplied constants to the initial jet.

### generated_constants

<a id="entry-presentation_kotlin_object_model_capability_contexts_generated_constants_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_generated_constants"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiordinarydifferentialequationsolveresult_generatedconstants.91026f1cc1fd"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSolveResult method</p>

```kotlin signature
fun generatedConstants(): List<UniffiExpression>
```

Exactly the constants the solution treats as free.

### generated_constants

<a id="entry-presentation_kotlin_object_model_capability_contexts_generated_constants_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_generated_constants"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiordinarydifferentialequationsystemsolveresult_generatedconstants.aad8d80b36ca"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSystemSolveResult method</p>

```kotlin signature
fun generatedConstants(): List<UniffiExpression>
```

Exactly the constants the assignment treats as free.

### governing_residual

<a id="entry-presentation_kotlin_object_model_capability_contexts_governing_residual_api_partial_differential_equations_partialdifferentialequationverificationreport_governing_residual"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationverificationreport_governingresidual.3906f75f170c"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationVerificationReport method</p>

```kotlin signature
fun governingResidual(): UniffiPartialDifferentialEquationVerificationResidual
```

Independently reduced governing-equation evidence.

### highest_order_coefficients

<a id="entry-presentation_kotlin_object_model_capability_contexts_highest_order_coefficients_api_partial_differential_equations_partialdifferentialequationcoefficientdata_highest_order_coefficients"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationcoefficientdata_highestordercoefficients.358bf0b0ed58"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCoefficientData method</p>

```kotlin signature
fun highestOrderCoefficients(): List<UniffiPartialDifferentialEquationJetCoefficient>?
```

The highest-order jet coefficients, when the equation is affine in them.

### homogeneous

<a id="entry-presentation_kotlin_object_model_capability_contexts_homogeneous_api_partial_differential_equations_partialdifferentialequationcoefficientdata_homogeneous"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationcoefficientdata_homogeneous.d676eb7ef957"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCoefficientData method</p>

```kotlin signature
fun homogeneous(): kotlin.Boolean?
```

Whether the equation was proved homogeneous, when that statement is meaningful.

### image

<a id="entry-presentation_kotlin_object_model_capability_contexts_image_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_image"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiordinarydifferentialequationsolveresult_image.f908a541df22"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSolveResult method</p>

```kotlin signature
fun image(): UniffiExpression?
```

The image of the unknown a Laplace transform solution solved for.

### implicit_partial_differential_equation_solution

<a id="entry-presentation_kotlin_object_model_capability_contexts_implicit_partial_differential_equation_solution_api_partial_differential_equations_session_implicit_partial_differential_equation_solution"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_implicitpartialdifferentialequationsolution.f3dbdb67e747"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun implicitPartialDifferentialEquationSolution(residual: UniffiExpression): UniffiPartialDifferentialEquationSolutionFamily
```

Create an implicit partial differential equation solution family in the default context.

### inconclusive_reason

<a id="entry-presentation_kotlin_object_model_capability_contexts_inconclusive_reason_api_partial_differential_equations_partialdifferentialequationverificationreport_inconclusive_reason"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationverificationreport_inconclusivereason.8923506bffef"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationVerificationReport method</p>

```kotlin signature
fun inconclusiveReason(): UniffiPartialDifferentialEquationVerificationInconclusiveReason?
```

The deterministic reason verification could not reach a proof.

### independent_variable_name

<a id="entry-presentation_kotlin_object_model_capability_contexts_independent_variable_name_api_partial_differential_equations_partialdifferentialequationseparatedequation_independent_variable_name"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationseparatedequation_independentvariablename.d4bcda7bd60e"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSeparatedEquation method</p>

```kotlin signature
fun independentVariableName(): kotlin.String
```

The name of this equation's independent variable.

### independent_variables

<a id="entry-presentation_kotlin_object_model_capability_contexts_independent_variables_api_partial_differential_equations_partialdifferentialequationproblem_independent_variables"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationproblem_independentvariables.ebac9cae56dd"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationProblem method</p>

```kotlin signature
fun independentVariables(): List<kotlin.String>
```

The independent variables in their semantic declared order.

### initial_condition_residuals

<a id="entry-presentation_kotlin_object_model_capability_contexts_initial_condition_residuals_api_partial_differential_equations_partialdifferentialequationverificationreport_initial_condition_residuals"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationverificationreport_initialconditionresiduals.e72daf775d37"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationVerificationReport method</p>

```kotlin signature
fun initialConditionResiduals(): List<UniffiPartialDifferentialEquationVerificationResidual>
```

One reduced residual per initial condition, in insertion order.

### initial_conditions

<a id="entry-presentation_kotlin_object_model_capability_contexts_initial_conditions_api_partial_differential_equations_partialdifferentialequationproblem_initial_conditions"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationproblem_initialconditions.917863c9f997"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationProblem method</p>

```kotlin signature
fun initialConditions(): List<UniffiExpression>
```

The initial-condition residuals in insertion order.

### integrate_definite_under_constraint

<a id="entry-presentation_kotlin_object_model_capability_contexts_integrate_definite_under_constraint_api_session_integrate_definite_under_constraint"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_integratedefiniteunderconstraint.42a0d92742c6"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun integrateDefiniteUnderConstraint(
    target: UniffiExpression,
    variable: kotlin.String,
    lowerBound: UniffiExpression,
    upperBound: UniffiExpression,
    constraint: UniffiExpression,
): UniffiExpression
```

Definite integration under a local bounded logical constraint.

### integrate_definite_under_constraint

<a id="entry-presentation_kotlin_object_model_capability_contexts_integrate_definite_under_constraint_api_expression_integrate_definite_under_constraint"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_integratedefiniteunderconstraint.562146e4116b"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun integrateDefiniteUnderConstraint(
    variable: kotlin.String,
    lowerBound: UniffiExpression,
    upperBound: UniffiExpression,
    constraint: UniffiExpression,
): UniffiExpression
```

Definite integration under a local bounded logical constraint.

### intertwining

<a id="entry-presentation_kotlin_object_model_capability_contexts_intertwining_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_intertwining"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationpointsymmetryaction_intertwining.062bb6d49526"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAction method</p>

```kotlin signature
fun intertwining(): UniffiPartialDifferentialEquationVerificationVerdict?
```

The exact decision on the intertwining identity.

### invariant

<a id="entry-presentation_kotlin_object_model_capability_contexts_invariant_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_invariant"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsimilaritysolution_invariant.daedf4ce09fb"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSimilaritySolution method</p>

```kotlin signature
fun invariant(): UniffiExpression?
```

The invariant of the generator's base field.

### inverse_coordinates

<a id="entry-presentation_kotlin_object_model_capability_contexts_inverse_coordinates_api_partial_differential_equations_partialdifferentialequationcoordinatechange_inverse_coordinates"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationcoordinatechange_inversecoordinates.70904aa6e8ec"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCoordinateChange method</p>

```kotlin signature
fun inverseCoordinates(): List<UniffiExpression>
```

The ordered target-to-source coordinate expressions.

### invertibility

<a id="entry-presentation_kotlin_object_model_capability_contexts_invertibility_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_invertibility"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationpointsymmetryaction_invertibility.306422dc0f04"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAction method</p>

```kotlin signature
fun invertibility(): UniffiPartialDifferentialEquationVerificationVerdict?
```

The exact decision that the coordinate map is invertible on its chart.

### length

<a id="entry-presentation_kotlin_object_model_capability_contexts_length_api_expression_operations_expression_length"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_length.76de3f6676f6"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun length(): kotlin.ULong
```

Number of elements of a finite-set expression.

### length

<a id="entry-presentation_kotlin_object_model_capability_contexts_length_api_segment2d_length"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisegment2d_length.2eb9b1d381fe"></a>
<p class="symi-entry-owner">UniffiSegment2d method</p>

```kotlin signature
fun length(): UniffiExpression
```

Also the finite-set length accessor on `expression` in WASM; context disambiguates.

### lifted_constants

<a id="entry-presentation_kotlin_object_model_capability_contexts_lifted_constants_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_lifted_constants"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsimilaritysolution_liftedconstants.a10c5bbe1341"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSimilaritySolution method</p>

```kotlin signature
fun liftedConstants(): List<UniffiExpression>
```

The constants the lifted family is parameterized by.

### lifted_family

<a id="entry-presentation_kotlin_object_model_capability_contexts_lifted_family_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_lifted_family"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsimilaritysolution_liftedfamily.a8d6448120b8"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSimilaritySolution method</p>

```kotlin signature
fun liftedFamily(): UniffiPartialDifferentialEquationSolutionFamily?
```

The invariant solutions of the original equation.

### lifted_family_verification

<a id="entry-presentation_kotlin_object_model_capability_contexts_lifted_family_verification_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_lifted_family_verification"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsimilaritysolution_liftedfamilyverification.eb4cc12c8cac"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSimilaritySolution method</p>

```kotlin signature
fun liftedFamilyVerification(): UniffiPartialDifferentialEquationVerificationVerdict?
```

The exact decision that the lifted family solves the original equation.

### linearity

<a id="entry-presentation_kotlin_object_model_capability_contexts_linearity_api_partial_differential_equations_partialdifferentialequationclassification_linearity"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationclassification_linearity.a2ecc68fab09"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationClassification method</p>

```kotlin signature
fun linearity(): UniffiPartialDifferentialEquationLinearity
```

The most-specific exact linearity class.

### linearity

<a id="entry-presentation_kotlin_object_model_capability_contexts_linearity_api_partial_differential_equations_partialdifferentialequationsolutionprovenance_linearity"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsolutionprovenance_linearity.1a9a03c2f015"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolutionProvenance method</p>

```kotlin signature
fun linearity(): UniffiPartialDifferentialEquationLinearity
```

The exact linearity class recorded at the time the candidate was produced.

### method

<a id="entry-presentation_kotlin_object_model_capability_contexts_method_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_method"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiordinarydifferentialequationsolveresult_method.dbd8e7a72e3c"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSolveResult method</p>

```kotlin signature
fun method(): UniffiOrdinaryDifferentialEquationMethod
```

The method the request actually ran.

### method

<a id="entry-presentation_kotlin_object_model_capability_contexts_method_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_method"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiordinarydifferentialequationsystemsolveresult_method.1765406314bd"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSystemSolveResult method</p>

```kotlin signature
fun method(): UniffiOrdinaryDifferentialEquationSystemMethod
```

The method the system request actually ran.

### method

<a id="entry-presentation_kotlin_object_model_capability_contexts_method_api_partial_differential_equations_partialdifferentialequationmethodcandidate_method"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationmethodcandidate_method.34ecf7a2782c"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationMethodCandidate method</p>

```kotlin signature
fun method(): UniffiPartialDifferentialEquationMethod
```

The stable advisory method name.

### method

<a id="entry-presentation_kotlin_object_model_capability_contexts_method_api_partial_differential_equations_partialdifferentialequationsolutionprovenance_method"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsolutionprovenance_method.88638433c881"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolutionProvenance method</p>

```kotlin signature
fun method(): UniffiPartialDifferentialEquationMethod
```

The method identity this solution was produced by.

### method

<a id="entry-presentation_kotlin_object_model_capability_contexts_method_api_partial_differential_equations_partialdifferentialequationsolveresult_method"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsolveresult_method.c8001121bf27"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolveResult method</p>

```kotlin signature
fun method(): UniffiPartialDifferentialEquationMethod?
```

The method that produced a solution, when one did.

### method_candidates

<a id="entry-presentation_kotlin_object_model_capability_contexts_method_candidates_api_partial_differential_equations_partialdifferentialequationclassification_method_candidates"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationclassification_methodcandidates.08a4db6c78e5"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationClassification method</p>

```kotlin signature
fun methodCandidates(): List<UniffiPartialDifferentialEquationMethodCandidate>
```

The advisory methods in deterministic preference order.

### multiplier

<a id="entry-presentation_kotlin_object_model_capability_contexts_multiplier_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_multiplier"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationpointsymmetryaction_multiplier.02a2c003e45a"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAction method</p>

```kotlin signature
fun multiplier(): UniffiExpression?
```

The multiplier of the intertwining identity.

### multiplier

<a id="entry-presentation_kotlin_object_model_capability_contexts_multiplier_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_multiplier"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsimilaritysolution_multiplier.b735922c74f5"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSimilaritySolution method</p>

```kotlin signature
fun multiplier(): UniffiExpression?
```

The multiplier of the reduction identity.

### name

<a id="entry-presentation_kotlin_object_model_capability_contexts_name_api_partial_differential_equations_partialdifferentialequationarbitraryfunction_name"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationarbitraryfunction_name.c7368587a428"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationArbitraryFunction method</p>

```kotlin signature
fun name(): kotlin.String
```

The collision-free allocated function name.

### normalization_multiplier

<a id="entry-presentation_kotlin_object_model_capability_contexts_normalization_multiplier_api_partial_differential_equations_partialdifferentialequationtransformationresult_normalization_multiplier"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationtransformationresult_normalizationmultiplier.708c4541715e"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationTransformationResult method</p>

```kotlin signature
fun normalizationMultiplier(): UniffiExpression?
```

The proved-nonzero residual-normalization multiplier.

### order

<a id="entry-presentation_kotlin_object_model_capability_contexts_order_api_partial_differential_equations_partialdifferentialequationclassification_order"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationclassification_order.d3d9c88a69c7"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationClassification method</p>

```kotlin signature
fun order(): kotlin.ULong
```

The exact highest derivative order.

### order

<a id="entry-presentation_kotlin_object_model_capability_contexts_order_api_partial_differential_equations_partialdifferentialequationsolutionprovenance_order"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsolutionprovenance_order.3ab93a9efbd2"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolutionProvenance method</p>

```kotlin signature
fun order(): kotlin.ULong
```

The exact order recorded at the time the candidate was produced.

### outcome

<a id="entry-presentation_kotlin_object_model_capability_contexts_outcome_api_results_setenumeration_outcome"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisetenumeration_outcome.b2e7831363ed"></a>
<p class="symi-entry-owner">UniffiSetEnumeration method</p>

```kotlin signature
fun outcome(): UniffiEnumerationVerdict
```

`"complete"`, `"truncated"`, or `"declined"`.

### outstanding_obligations

<a id="entry-presentation_kotlin_object_model_capability_contexts_outstanding_obligations_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_outstanding_obligations"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationpointsymmetryaction_outstandingobligations.4a3b6f77010d"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAction method</p>

```kotlin signature
fun outstandingObligations(): List<UniffiPartialDifferentialEquationSymmetryObligation>
```

The claims the action explicitly does not make.

### outstanding_obligations

<a id="entry-presentation_kotlin_object_model_capability_contexts_outstanding_obligations_api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_outstanding_obligations"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationpointsymmetryalgebra_outstandingobligations.10de72c92694"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAlgebra method</p>

```kotlin signature
fun outstandingObligations(): List<UniffiPartialDifferentialEquationSymmetryObligation>
```

The claims the algebra explicitly does not make.

### outstanding_obligations

<a id="entry-presentation_kotlin_object_model_capability_contexts_outstanding_obligations_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_outstanding_obligations"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsimilaritysolution_outstandingobligations.cdef33eb8b93"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSimilaritySolution method</p>

```kotlin signature
fun outstandingObligations(): List<UniffiPartialDifferentialEquationSymmetryObligation>
```

The claims the family explicitly does not make.

### parameters

<a id="entry-presentation_kotlin_object_model_capability_contexts_parameters_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_parameters"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationpointsymmetryaction_parameters.f447a7020339"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAction method</p>

```kotlin signature
fun parameters(): List<UniffiExpression>
```

The group parameters the closed forms depend on.

### parameters

<a id="entry-presentation_kotlin_object_model_capability_contexts_parameters_api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_parameters"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationpointsymmetryalgebra_parameters.917dafa8b256"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAlgebra method</p>

```kotlin signature
fun parameters(): List<UniffiExpression>
```

The constants of the general generator, one per basis generator.

### partial_differential_equation

<a id="entry-presentation_kotlin_object_model_capability_contexts_partial_differential_equation_api_partial_differential_equations_session_partial_differential_equation"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_partialdifferentialequation.e28459c227bf"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun partialDifferentialEquation(
    equation: UniffiExpression,
    dependentFunction: UniffiUndefinedFunction,
    independentVariables: List<kotlin.String>,
    initialConditions: List<UniffiExpression>,
    boundaryConditions: List<UniffiExpression>,
): UniffiPartialDifferentialEquationProblem
```

Construct a validated scalar partial differential equation in the default context, with an explicit dependent function and independent-variable order.

### partial_differential_equation_arbitrary_function

<a id="entry-presentation_kotlin_object_model_capability_contexts_partial_differential_equation_arbitrary_function_api_partial_differential_equations_session_partial_differential_equation_arbitrary_function"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_partialdifferentialequationarbitraryfunction.91ada8b3159b"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun partialDifferentialEquationArbitraryFunction(
    preferredName: kotlin.String,
    arity: kotlin.ULong,
): UniffiPartialDifferentialEquationArbitraryFunction
```

Allocate a collision-free arbitrary function for a PDE candidate family.

### point_symmetry_decline

<a id="entry-presentation_kotlin_object_model_capability_contexts_point_symmetry_decline_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_point_symmetry_decline"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationpointsymmetryaction_pointsymmetrydecline.6ac771e34a65"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAction method</p>

```kotlin signature
fun pointSymmetryDecline(): UniffiPartialDifferentialEquationPointSymmetryDecline?
```

The reason the underlying point-symmetry algebra was not derived, when it was not.

### principal_congruence_residuals

<a id="entry-presentation_kotlin_object_model_capability_contexts_principal_congruence_residuals_api_partial_differential_equations_partialdifferentialequationtransformationverificationreport_principal_congruence_residuals"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationtransformationverificationreport_principalcongruenceresiduals.c0293bc2e737"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationTransformationVerificationReport method</p>

```kotlin signature
fun principalCongruenceResiduals(): List<UniffiExpression>
```

The exact principal-matrix congruence residuals.

### principal_form

<a id="entry-presentation_kotlin_object_model_capability_contexts_principal_form_api_partial_differential_equations_partialdifferentialequationcanonicalizationresult_principal_form"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationcanonicalizationresult_principalform.5b330efec438"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCanonicalizationResult method</p>

```kotlin signature
fun principalForm(): UniffiPartialDifferentialEquationCanonicalPrincipalForm?
```

The exact canonical principal form that was reached.

### principal_matrix

<a id="entry-presentation_kotlin_object_model_capability_contexts_principal_matrix_api_partial_differential_equations_partialdifferentialequationsecondorderclassification_principal_matrix"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsecondorderclassification_principalmatrix.ccf34d3f5704"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSecondOrderClassification method</p>

```kotlin signature
fun principalMatrix(): UniffiMatrix
```

The frozen symmetric principal matrix this analysis classified.

### proof_obligations

<a id="entry-presentation_kotlin_object_model_capability_contexts_proof_obligations_api_partial_differential_equations_partialdifferentialequationmethodcandidate_proof_obligations"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationmethodcandidate_proofobligations.eb76cd474828"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationMethodCandidate method</p>

```kotlin signature
fun proofObligations(): List<UniffiPartialDifferentialEquationProofObligation>
```

The exact obligations this method must discharge before it may solve.

### proof_obligations

<a id="entry-presentation_kotlin_object_model_capability_contexts_proof_obligations_api_partial_differential_equations_partialdifferentialequationsecondorderclassification_proof_obligations"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsecondorderclassification_proofobligations.2a20606f89d8"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSecondOrderClassification method</p>

```kotlin signature
fun proofObligations(): List<UniffiPartialDifferentialEquationProofObligation>
```

The obligations a downstream canonical-coordinate route must discharge.

### proof_obligations

<a id="entry-presentation_kotlin_object_model_capability_contexts_proof_obligations_api_partial_differential_equations_partialdifferentialequationsolutionfamily_proof_obligations"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsolutionfamily_proofobligations.6faa98af5269"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolutionFamily method</p>

```kotlin signature
fun proofObligations(): List<UniffiPartialDifferentialEquationProofObligation>
```

The obligations recorded against this candidate family.

### proof_obligations

<a id="entry-presentation_kotlin_object_model_capability_contexts_proof_obligations_api_partial_differential_equations_partialdifferentialequationverificationreport_proof_obligations"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationverificationreport_proofobligations.979578f00a74"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationVerificationReport method</p>

```kotlin signature
fun proofObligations(): List<UniffiPartialDifferentialEquationProofObligation>
```

The obligations consulted or left unresolved by this verification.

### provenance

<a id="entry-presentation_kotlin_object_model_capability_contexts_provenance_api_partial_differential_equations_partialdifferentialequationsolveresult_provenance"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsolveresult_provenance.c9db7c4e6a33"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolveResult method</p>

```kotlin signature
fun provenance(): UniffiPartialDifferentialEquationSolutionProvenance?
```

The mathematical provenance a verified solution carries.

### reconstruction

<a id="entry-presentation_kotlin_object_model_capability_contexts_reconstruction_api_partial_differential_equations_partialdifferentialequationseparationresult_reconstruction"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationseparationresult_reconstruction.faa79360ff3d"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSeparationResult method</p>

```kotlin signature
fun reconstruction(): UniffiExpression
```

The exact reconstruction expression for the separated factors.

### reduced_equation

<a id="entry-presentation_kotlin_object_model_capability_contexts_reduced_equation_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_reduced_equation"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsimilaritysolution_reducedequation.0038a769f6d7"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSimilaritySolution method</p>

```kotlin signature
fun reducedEquation(): UniffiExpression?
```

The reduced ordinary differential equation for the profile, read as zero.

### remainder

<a id="entry-presentation_kotlin_object_model_capability_contexts_remainder_api_partial_differential_equations_partialdifferentialequationcoefficientdata_remainder"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationcoefficientdata_remainder.b2d4d965ce3e"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCoefficientData method</p>

```kotlin signature
fun remainder(): UniffiExpression?
```

The exact jet-free remainder term, when one was extracted.

### required_rank

<a id="entry-presentation_kotlin_object_model_capability_contexts_required_rank_api_ordinary_differential_equations_ordinarydifferentialequationsystemverificationreport_required_rank"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiordinarydifferentialequationsystemverificationreport_requiredrank.e2bf6394af98"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSystemVerificationReport method</p>

```kotlin signature
fun requiredRank(): kotlin.ULong
```

The dimension a complete family of the system must span.

### residual

<a id="entry-presentation_kotlin_object_model_capability_contexts_residual_api_partial_differential_equations_partialdifferentialequationseparatedequation_residual"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationseparatedequation_residual.bf96b56bcd8b"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSeparatedEquation method</p>

```kotlin signature
fun residual(): UniffiExpression
```

The exact residual of this one-variable ordinary differential equation.

### residual

<a id="entry-presentation_kotlin_object_model_capability_contexts_residual_api_partial_differential_equations_partialdifferentialequationverificationresidual_residual"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationverificationresidual_residual.eeb7be444c3d"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationVerificationResidual method</p>

```kotlin signature
fun residual(): UniffiExpression
```

The independently reduced residual expression.

### route

<a id="entry-presentation_kotlin_object_model_capability_contexts_route_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_route"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiordinarydifferentialequationsystemsolveresult_route.086de647b5a5"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSystemSolveResult method</p>

```kotlin signature
fun route(): UniffiOrdinaryDifferentialEquationSystemRoute?
```

The route the certified assignment came from.

### second_equation

<a id="entry-presentation_kotlin_object_model_capability_contexts_second_equation_api_partial_differential_equations_partialdifferentialequationseparationresult_second_equation"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationseparationresult_secondequation.4e298415886f"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSeparationResult method</p>

```kotlin signature
fun secondEquation(): UniffiPartialDifferentialEquationSeparatedEquation
```

The second exact one-variable ordinary differential equation.

### second_order_principal_part

<a id="entry-presentation_kotlin_object_model_capability_contexts_second_order_principal_part_api_partial_differential_equations_partialdifferentialequationclassification_second_order_principal_part"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationclassification_secondorderprincipalpart.e64791837193"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationClassification method</p>

```kotlin signature
fun secondOrderPrincipalPart(): UniffiPartialDifferentialEquationPrincipalPart?
```

The exact second-order principal metadata, when the equation has one.

### separate_partial_differential_equation

<a id="entry-presentation_kotlin_object_model_capability_contexts_separate_partial_differential_equation_api_partial_differential_equations_session_separate_partial_differential_equation"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_separatepartialdifferentialequation.a384b7fd3b11"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun separatePartialDifferentialEquation(problem: UniffiPartialDifferentialEquationProblem): UniffiPartialDifferentialEquationSeparationResult
```

Separate a supported PDE and return its independently verified one-variable equations.

### separation_constant

<a id="entry-presentation_kotlin_object_model_capability_contexts_separation_constant_api_partial_differential_equations_partialdifferentialequationseparationresult_separation_constant"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationseparationresult_separationconstant.71b86c5eccf1"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSeparationResult method</p>

```kotlin signature
fun separationConstant(): UniffiExpression
```

The fresh exact separation constant.

### similarity_variable

<a id="entry-presentation_kotlin_object_model_capability_contexts_similarity_variable_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_similarity_variable"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsimilaritysolution_similarityvariable.7f52f2a05d40"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSimilaritySolution method</p>

```kotlin signature
fun similarityVariable(): UniffiExpression?
```

The coordinate of the reduced equation, standing for the invariant.

### simplify_under_constraint

<a id="entry-presentation_kotlin_object_model_capability_contexts_simplify_under_constraint_api_session_simplify_under_constraint"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_simplifyunderconstraint.9a83406c6d43"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun simplifyUnderConstraint(
    target: UniffiExpression,
    constraint: UniffiExpression,
): UniffiExpression
```

Simplify an expression under a local bounded logical constraint without changing symbol assumptions.

### simplify_under_constraint

<a id="entry-presentation_kotlin_object_model_capability_contexts_simplify_under_constraint_api_expression_simplify_under_constraint"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_simplifyunderconstraint.8953e00a65af"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun simplifyUnderConstraint(constraint: UniffiExpression): UniffiExpression
```

Simplify this expression under a local bounded logical constraint without changing symbol assumptions.

### solution

<a id="entry-presentation_kotlin_object_model_capability_contexts_solution_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_solution"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiordinarydifferentialequationsolveresult_solution.18f07f3b77c2"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSolveResult method</p>

```kotlin signature
fun solution(): UniffiExpression?
```

The certified solution, which no declined request carries.

### solution

<a id="entry-presentation_kotlin_object_model_capability_contexts_solution_api_partial_differential_equations_partialdifferentialequationsolveresult_solution"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsolveresult_solution.446a02f026ab"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolveResult method</p>

```kotlin signature
fun solution(): UniffiPartialDifferentialEquationSolutionFamily?
```

The verified solution family, which no declined route may carry.

### solve_partial_differential_equation

<a id="entry-presentation_kotlin_object_model_capability_contexts_solve_partial_differential_equation_api_partial_differential_equations_session_solve_partial_differential_equation"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_solvepartialdifferentialequation.642afa32cc35"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun solvePartialDifferentialEquation(
    problem: UniffiPartialDifferentialEquationProblem,
    method: UniffiPartialDifferentialEquationMethod,
): UniffiPartialDifferentialEquationSolveResult
```

Run the sound partial differential equation dispatcher under a stable method name.

### solve_partial_differential_equation_with_transform_axis_specifications

<a id="entry-presentation_kotlin_object_model_capability_contexts_solve_partial_differential_equation_with_transform_axis_specifications_api_partial_differential_equations_session_solve_partial_differential_equation_with_transform_axis_specifications"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_solvepartialdifferentialequationwithtransformaxisspecifications.bdcd33f637a7"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun solvePartialDifferentialEquationWithTransformAxisSpecifications(
    problem: UniffiPartialDifferentialEquationProblem,
    method: UniffiPartialDifferentialEquationMethod,
    transformAxisSpecifications: List<kotlin.String>,
): UniffiPartialDifferentialEquationSolveResult
```

Solve a PDE with ordered explicit transform-axis specifications.

### source_variables

<a id="entry-presentation_kotlin_object_model_capability_contexts_source_variables_api_partial_differential_equations_partialdifferentialequationcoordinatechange_source_variables"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationcoordinatechange_sourcevariables.630d5e08f88c"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCoordinateChange method</p>

```kotlin signature
fun sourceVariables(): List<kotlin.String>
```

The ordered source coordinate names.

### target_dependent_function

<a id="entry-presentation_kotlin_object_model_capability_contexts_target_dependent_function_api_partial_differential_equations_partialdifferentialequationcoordinatechange_target_dependent_function"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationcoordinatechange_targetdependentfunction.9dc17aefe0b7"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCoordinateChange method</p>

```kotlin signature
fun targetDependentFunction(): kotlin.String
```

The target unknown-function name.

### target_problem

<a id="entry-presentation_kotlin_object_model_capability_contexts_target_problem_api_partial_differential_equations_partialdifferentialequationtransformationresult_target_problem"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationtransformationresult_targetproblem.18ce7970765c"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationTransformationResult method</p>

```kotlin signature
fun targetProblem(): UniffiPartialDifferentialEquationProblem?
```

The transformed PDE problem stated in the target coordinates.

### target_variables

<a id="entry-presentation_kotlin_object_model_capability_contexts_target_variables_api_partial_differential_equations_partialdifferentialequationcoordinatechange_target_variables"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationcoordinatechange_targetvariables.f368730afe6c"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCoordinateChange method</p>

```kotlin signature
fun targetVariables(): List<kotlin.String>
```

The ordered target coordinate names.

### transformation_decline

<a id="entry-presentation_kotlin_object_model_capability_contexts_transformation_decline_api_partial_differential_equations_partialdifferentialequationcanonicalizationresult_transformation_decline"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationcanonicalizationresult_transformationdecline.def2bc26ab1b"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCanonicalizationResult method</p>

```kotlin signature
fun transformationDecline(): UniffiPartialDifferentialEquationTransformationDecline?
```

The underlying coordinate-transformation decline, when one caused the decline.

### transformed

<a id="entry-presentation_kotlin_object_model_capability_contexts_transformed_api_partial_differential_equations_partialdifferentialequationtransformationresult_transformed"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationtransformationresult_transformed.b24977bd374b"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationTransformationResult method</p>

```kotlin signature
fun transformed(): kotlin.Boolean
```

Whether a verified transformation was produced.

### transformed_coordinates

<a id="entry-presentation_kotlin_object_model_capability_contexts_transformed_coordinates_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_transformed_coordinates"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationpointsymmetryaction_transformedcoordinates.341d0e9e50a1"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAction method</p>

```kotlin signature
fun transformedCoordinates(): List<UniffiExpression>
```

The coordinates at which a seed solution is evaluated.

### transformed_governing_residual

<a id="entry-presentation_kotlin_object_model_capability_contexts_transformed_governing_residual_api_partial_differential_equations_partialdifferentialequationtransformationverificationreport_transformed_governing_residual"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationtransformationverificationreport_transformedgoverningresidual.e9b04a7820fe"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationTransformationVerificationReport method</p>

```kotlin signature
fun transformedGoverningResidual(): UniffiExpression
```

The independently transformed source governing residual.

### verification

<a id="entry-presentation_kotlin_object_model_capability_contexts_verification_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_verification"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiordinarydifferentialequationsolveresult_verification.738ea3b8d93d"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSolveResult method</p>

```kotlin signature
fun verification(): UniffiOrdinaryDifferentialEquationVerificationVerdict?
```

The independent verifier's decision on the candidate, when verification ran.

### verification

<a id="entry-presentation_kotlin_object_model_capability_contexts_verification_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_verification"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiordinarydifferentialequationsystemsolveresult_verification.a1bfdb8817da"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSystemSolveResult method</p>

```kotlin signature
fun verification(): UniffiOrdinaryDifferentialEquationVerificationVerdict?
```

The independent verifier's decision on the assignment, when verification ran.

### verification

<a id="entry-presentation_kotlin_object_model_capability_contexts_verification_api_partial_differential_equations_partialdifferentialequationseparationresult_verification"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationseparationresult_verification.c5ae8f03df09"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSeparationResult method</p>

```kotlin signature
fun verification(): UniffiPartialDifferentialEquationVerificationVerdict
```

The aggregate verdict of the independently replayed separation certificate.

### verification

<a id="entry-presentation_kotlin_object_model_capability_contexts_verification_api_partial_differential_equations_partialdifferentialequationsolveresult_verification"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsolveresult_verification.60084964e576"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolveResult method</p>

```kotlin signature
fun verification(): UniffiPartialDifferentialEquationVerificationReport?
```

The independent verification report a solved result must carry.

### verify_partial_differential_equation_coordinate_transformation

<a id="entry-presentation_kotlin_object_model_capability_contexts_verify_partial_differential_equation_coordinate_transformation_api_partial_differential_equations_session_verify_partial_differential_equation_coordinate_transformation"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_verifypartialdifferentialequationcoordinatetransformation.8a80fda2f10a"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun verifyPartialDifferentialEquationCoordinateTransformation(
    problem: UniffiPartialDifferentialEquationProblem,
    transformation: UniffiPartialDifferentialEquationTransformationResult,
): UniffiPartialDifferentialEquationTransformationVerificationReport
```

Independently verify an exact PDE coordinate transformation.

### verify_partial_differential_equation_solution

<a id="entry-presentation_kotlin_object_model_capability_contexts_verify_partial_differential_equation_solution_api_partial_differential_equations_session_verify_partial_differential_equation_solution"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_verifypartialdifferentialequationsolution.4b93805d9887"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun verifyPartialDifferentialEquationSolution(
    problem: UniffiPartialDifferentialEquationProblem,
    solution: UniffiPartialDifferentialEquationSolutionFamily,
): UniffiPartialDifferentialEquationVerificationReport
```

Independently verify a partial differential equation candidate with exact residual reasoning.

### weight

<a id="entry-presentation_kotlin_object_model_capability_contexts_weight_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_weight"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsimilaritysolution_weight.4917cc3bf5df"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSimilaritySolution method</p>

```kotlin signature
fun weight(): UniffiExpression?
```

The weight of invariant solutions.

