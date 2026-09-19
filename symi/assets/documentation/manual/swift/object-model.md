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

<a id="entry-presentation_swift_object_model_capability_contexts_admits_additive_solution_symmetry_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_admits_additive_solution_symmetry"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryaction_admitsadditivesolutionsymmetry.7976f19bff6b"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAction method</p>

```swift signature
func admitsAdditiveSolutionSymmetry() -> Bool
```

Whether the action adds an arbitrary solution by linear superposition.

### admits_additive_solution_symmetry

<a id="entry-presentation_swift_object_model_capability_contexts_admits_additive_solution_symmetry_api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_admits_additive_solution_symmetry"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryalgebra_admitsadditivesolutionsymmetry.c4abee53fc7a"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAlgebra method</p>

```swift signature
func admitsAdditiveSolutionSymmetry() -> Bool
```

Whether adding any solution of the linear homogeneous equation is also a symmetry.

### amplitude

<a id="entry-presentation_swift_object_model_capability_contexts_amplitude_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_amplitude"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryaction_amplitude.0db9a431fa3c"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAction method</p>

```swift signature
func amplitude() -> UniffiExpression?
```

The amplitude multiplying the transformed seed.

### applied_to_seed

<a id="entry-presentation_swift_object_model_capability_contexts_applied_to_seed_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_applied_to_seed"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryaction_appliedtoseed.89a4fee91394"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAction method</p>

```swift signature
func appliedToSeed(seed: UniffiUndefinedFunction) -> UniffiExpression
```

The transformed seed solution under the action.

### applied_to_seed_with_additive_solution

<a id="entry-presentation_swift_object_model_capability_contexts_applied_to_seed_with_additive_solution_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_applied_to_seed_with_additive_solution"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryaction_appliedtoseedwithadditivesolution.05d7e781170a"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAction method</p>

```swift signature
func appliedToSeedWithAdditiveSolution(
    seed: UniffiUndefinedFunction,
    additiveSolution: UniffiUndefinedFunction,
) -> UniffiExpression
```

The transformed seed solution plus an added solution under the action.

### arbitrary_functions

<a id="entry-presentation_swift_object_model_capability_contexts_arbitrary_functions_api_partial_differential_equations_partialdifferentialequationsolutionfamily_arbitrary_functions"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsolutionfamily_arbitraryfunctions.76d0cef27815"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolutionFamily method</p>

```swift signature
func arbitraryFunctions() -> [UniffiPartialDifferentialEquationArbitraryFunction]
```

The functions that stay arbitrary and opaque throughout verification.

### arity

<a id="entry-presentation_swift_object_model_capability_contexts_arity_api_partial_differential_equations_partialdifferentialequationarbitraryfunction_arity"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationarbitraryfunction_arity.d7098d5b5c09"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationArbitraryFunction method</p>

```swift signature
func arity() -> UInt64
```

The recorded and validated function arity.

### basis

<a id="entry-presentation_swift_object_model_capability_contexts_basis_api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_basis"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryalgebra_basis.dbbaab5c9c1a"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAlgebra method</p>

```swift signature
func basis() -> [UniffiPartialDifferentialEquationPointSymmetryGenerator]
```

The independently verified basis generators, one per parameter.

### boundary_condition_residuals

<a id="entry-presentation_swift_object_model_capability_contexts_boundary_condition_residuals_api_partial_differential_equations_partialdifferentialequationverificationreport_boundary_condition_residuals"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationverificationreport_boundaryconditionresiduals.168c81e2b6d2"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationVerificationReport method</p>

```swift signature
func boundaryConditionResiduals() -> [UniffiPartialDifferentialEquationVerificationResidual]
```

One reduced residual per boundary condition, in insertion order.

### boundary_conditions

<a id="entry-presentation_swift_object_model_capability_contexts_boundary_conditions_api_partial_differential_equations_partialdifferentialequationproblem_boundary_conditions"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationproblem_boundaryconditions.774c95254359"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationProblem method</p>

```swift signature
func boundaryConditions() -> [UniffiExpression]
```

The boundary-condition residuals in insertion order.

### canonicalize_partial_differential_equation

<a id="entry-presentation_swift_object_model_capability_contexts_canonicalize_partial_differential_equation_api_partial_differential_equations_session_canonicalize_partial_differential_equation"></a>
<a id="placement-placement.swift.swift_object.uniffisession_canonicalizepartialdifferentialequation.7daa77ef8913"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func canonicalizePartialDifferentialEquation(problem: UniffiPartialDifferentialEquationProblem) -> UniffiPartialDifferentialEquationCanonicalizationResult
```

Construct and independently verify exact canonical coordinates for a supported PDE.

### canonicalized

<a id="entry-presentation_swift_object_model_capability_contexts_canonicalized_api_partial_differential_equations_partialdifferentialequationcanonicalizationresult_canonicalized"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationcanonicalizationresult_canonicalized.8e6192a90220"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCanonicalizationResult method</p>

```swift signature
func canonicalized() -> Bool
```

Whether verified canonical coordinates were constructed.

### cases

<a id="entry-presentation_swift_object_model_capability_contexts_cases_api_partial_differential_equations_partialdifferentialequationsecondorderclassification_cases"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsecondorderclassification_cases.15b6f1441a7b"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSecondOrderClassification method</p>

```swift signature
func cases() -> [UniffiPartialDifferentialEquationSecondOrderTypeCase]
```

The complete exact case table, when the verdict is conditional.

### change_partial_differential_equation_variables

<a id="entry-presentation_swift_object_model_capability_contexts_change_partial_differential_equation_variables_api_partial_differential_equations_session_change_partial_differential_equation_variables"></a>
<a id="placement-placement.swift.swift_object.uniffisession_changepartialdifferentialequationvariables.b517199f1857"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func changePartialDifferentialEquationVariables(
    problem: UniffiPartialDifferentialEquationProblem,
    targetVariables: [String],
    forwardCoordinates: [UniffiExpression]?,
    inverseCoordinates: [UniffiExpression]?,
    targetDependentFunction: UniffiUndefinedFunction?,
) -> UniffiPartialDifferentialEquationTransformationResult
```

Transform a two-variable PDE through an exact user-supplied change of variables.

### claimed_governing_residual

<a id="entry-presentation_swift_object_model_capability_contexts_claimed_governing_residual_api_partial_differential_equations_partialdifferentialequationtransformationverificationreport_claimed_governing_residual"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationtransformationverificationreport_claimedgoverningresidual.632e1d8c0c0c"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationTransformationVerificationReport method</p>

```swift signature
func claimedGoverningResidual() -> UniffiExpression
```

The governing residual the transformation claimed.

### classify_partial_differential_equation

<a id="entry-presentation_swift_object_model_capability_contexts_classify_partial_differential_equation_api_partial_differential_equations_session_classify_partial_differential_equation"></a>
<a id="placement-placement.swift.swift_object.uniffisession_classifypartialdifferentialequation.f1e10f4a1990"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func classifyPartialDifferentialEquation(problem: UniffiPartialDifferentialEquationProblem) -> UniffiPartialDifferentialEquationClassification
```

Classify a validated scalar partial differential equation with exact structural analysis.

### classify_second_order_partial_differential_equation

<a id="entry-presentation_swift_object_model_capability_contexts_classify_second_order_partial_differential_equation_api_partial_differential_equations_session_classify_second_order_partial_differential_equation"></a>
<a id="placement-placement.swift.swift_object.uniffisession_classifysecondorderpartialdifferentialequation.569e13201a4f"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func classifySecondOrderPartialDifferentialEquation(problem: UniffiPartialDifferentialEquationProblem) -> UniffiPartialDifferentialEquationSecondOrderClassification
```

Classify a two-variable linear second-order PDE over real coordinates.

### coefficient_data

<a id="entry-presentation_swift_object_model_capability_contexts_coefficient_data_api_partial_differential_equations_partialdifferentialequationclassification_coefficient_data"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationclassification_coefficientdata.334110672947"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationClassification method</p>

```swift signature
func coefficientData() -> UniffiPartialDifferentialEquationCoefficientData
```

The exact affine coefficient data extracted from the governing residual.

### components

<a id="entry-presentation_swift_object_model_capability_contexts_components_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_components"></a>
<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsystemsolveresult_components.6f4a994b1287"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSystemSolveResult method</p>

```swift signature
func components() -> [UniffiExpression]
```

One explicit value per declared unknown, in declaration order, when solved.

### composition_residuals

<a id="entry-presentation_swift_object_model_capability_contexts_composition_residuals_api_partial_differential_equations_partialdifferentialequationtransformationverificationreport_composition_residuals"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationtransformationverificationreport_compositionresiduals.b4f3ca3499e3"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationTransformationVerificationReport method</p>

```swift signature
func compositionResiduals() -> [UniffiExpression]
```

Every forward and inverse map-composition residual.

### condition

<a id="entry-presentation_swift_object_model_capability_contexts_condition_api_partial_differential_equations_partialdifferentialequationsecondordertypecase_condition"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsecondordertypecase_condition.7cb5b6f97f36"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSecondOrderTypeCase method</p>

```swift signature
func condition() -> UniffiAssumptionProposition
```

The exact condition under which this case's classical type holds.

### coordinate_change

<a id="entry-presentation_swift_object_model_capability_contexts_coordinate_change_api_partial_differential_equations_partialdifferentialequationtransformationresult_coordinate_change"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationtransformationresult_coordinatechange.62f1538f1b99"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationTransformationResult method</p>

```swift signature
func coordinateChange() -> UniffiPartialDifferentialEquationCoordinateChange?
```

The validated coordinate change of a successful transformation.

### coordinate_infinitesimals

<a id="entry-presentation_swift_object_model_capability_contexts_coordinate_infinitesimals_api_partial_differential_equations_partialdifferentialequationpointsymmetrygenerator_coordinate_infinitesimals"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetrygenerator_coordinateinfinitesimals.107a614fa25b"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryGenerator method</p>

```swift signature
func coordinateInfinitesimals() -> [UniffiExpression]
```

The coordinate infinitesimals in the problem's independent-variable order.

### decline

<a id="entry-presentation_swift_object_model_capability_contexts_decline_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_decline"></a>
<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsolveresult_decline.7fc8dae94615"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSolveResult method</p>

```swift signature
func decline() -> UniffiOrdinaryDifferentialEquationSolveDecline?
```

The typed reason no certified candidate was produced.

### decline

<a id="entry-presentation_swift_object_model_capability_contexts_decline_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_decline"></a>
<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsystemsolveresult_decline.501e319777e8"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSystemSolveResult method</p>

```swift signature
func decline() -> UniffiOrdinaryDifferentialEquationSystemSolveDecline?
```

The typed reason no certified assignment was produced.

### decline

<a id="entry-presentation_swift_object_model_capability_contexts_decline_api_partial_differential_equations_partialdifferentialequationcanonicalizationresult_decline"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationcanonicalizationresult_decline.a56f5af0e1f1"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCanonicalizationResult method</p>

```swift signature
func decline() -> UniffiPartialDifferentialEquationCanonicalizationDecline?
```

The exact reason automatic canonicalization declined.

### decline

<a id="entry-presentation_swift_object_model_capability_contexts_decline_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_decline"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryaction_decline.7c4c09e94b1a"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAction method</p>

```swift signature
func decline() -> UniffiPartialDifferentialEquationSymmetryActionDecline?
```

The typed reason the action was not constructed.

### decline

<a id="entry-presentation_swift_object_model_capability_contexts_decline_api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_decline"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryalgebra_decline.564c4afc012a"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAlgebra method</p>

```swift signature
func decline() -> UniffiPartialDifferentialEquationPointSymmetryDecline?
```

The typed reason the algebra was not derived.

### decline

<a id="entry-presentation_swift_object_model_capability_contexts_decline_api_partial_differential_equations_partialdifferentialequationsecondorderclassification_decline"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsecondorderclassification_decline.f2ddeb353378"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSecondOrderClassification method</p>

```swift signature
func decline() -> UniffiPartialDifferentialEquationSecondOrderClassificationDecline?
```

The exact reason an unknown analysis could not be completed.

### decline

<a id="entry-presentation_swift_object_model_capability_contexts_decline_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_decline"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsimilaritysolution_decline.464ecef9e63a"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSimilaritySolution method</p>

```swift signature
func decline() -> UniffiPartialDifferentialEquationSimilarityReductionDecline?
```

The typed reason no similarity family was produced.

### decline

<a id="entry-presentation_swift_object_model_capability_contexts_decline_api_partial_differential_equations_partialdifferentialequationsolveresult_decline"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsolveresult_decline.e852c6112d04"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolveResult method</p>

```swift signature
func decline() -> UniffiPartialDifferentialEquationSolveDecline?
```

The stable decline reason, when no solution was produced.

### decline

<a id="entry-presentation_swift_object_model_capability_contexts_decline_api_partial_differential_equations_partialdifferentialequationtransformationresult_decline"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationtransformationresult_decline.08f4f6acb1c8"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationTransformationResult method</p>

```swift signature
func decline() -> UniffiPartialDifferentialEquationTransformationDecline?
```

The exact reason no transformation was produced.

### dependent_function

<a id="entry-presentation_swift_object_model_capability_contexts_dependent_function_api_partial_differential_equations_partialdifferentialequationproblem_dependent_function"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationproblem_dependentfunction.296b16c673cc"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationProblem method</p>

```swift signature
func dependentFunction() -> String
```

The declared dependent-function name.

### dependent_infinitesimal

<a id="entry-presentation_swift_object_model_capability_contexts_dependent_infinitesimal_api_partial_differential_equations_partialdifferentialequationpointsymmetrygenerator_dependent_infinitesimal"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetrygenerator_dependentinfinitesimal.96e64d3f77cd"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryGenerator method</p>

```swift signature
func dependentInfinitesimal() -> UniffiExpression
```

The dependent infinitesimal of the generator.

### derivative_coefficients

<a id="entry-presentation_swift_object_model_capability_contexts_derivative_coefficients_api_partial_differential_equations_partialdifferentialequationprincipalpart_derivative_coefficients"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationprincipalpart_derivativecoefficients.105a14258c6c"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPrincipalPart method</p>

```swift signature
func derivativeCoefficients() -> [UniffiPartialDifferentialEquationPrincipalCoefficient]
```

The raw mixed-derivative coefficients, before symmetrization halves them.

### determining_equations

<a id="entry-presentation_swift_object_model_capability_contexts_determining_equations_api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_determining_equations"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryalgebra_determiningequations.effc248aebdb"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAlgebra method</p>

```swift signature
func determiningEquations() -> [UniffiExpression]
```

The determining equations exactly as derived, before any reduction.

### discharged_obligations

<a id="entry-presentation_swift_object_model_capability_contexts_discharged_obligations_api_partial_differential_equations_partialdifferentialequationsolutionprovenance_discharged_obligations"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsolutionprovenance_dischargedobligations.c5b3b10e891a"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolutionProvenance method</p>

```swift signature
func dischargedObligations() -> [UniffiPartialDifferentialEquationProofObligation]
```

The obligations discharged by exact query before the solution was returned.

### discover_partial_differential_equation

<a id="entry-presentation_swift_object_model_capability_contexts_discover_partial_differential_equation_api_partial_differential_equations_session_discover_partial_differential_equation"></a>
<a id="placement-placement.swift.swift_object.uniffisession_discoverpartialdifferentialequation.913a679faaf7"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func discoverPartialDifferentialEquation(
    equation: UniffiExpression,
    initialConditions: [UniffiExpression],
    boundaryConditions: [UniffiExpression],
) -> UniffiPartialDifferentialEquationProblem
```

Discover the unique scalar partial differential equation signature from one governing residual, in the default context.

### discriminant

<a id="entry-presentation_swift_object_model_capability_contexts_discriminant_api_partial_differential_equations_partialdifferentialequationsecondorderclassification_discriminant"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsecondorderclassification_discriminant.68a96438e85d"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSecondOrderClassification method</p>

```swift signature
func discriminant() -> UniffiExpression
```

The exact discriminant `b^2 - a*c` of the symmetric principal matrix.

### elements

<a id="entry-presentation_swift_object_model_capability_contexts_elements_api_results_setenumeration_elements"></a>
<a id="placement-placement.swift.swift_object.uniffisetenumeration_elements.475cb4a9700e"></a>
<p class="symi-entry-owner">UniffiSetEnumeration method</p>

```swift signature
func elements() -> [UniffiExpression]
```

The exact elements produced, in increasing order.

### equation_type

<a id="entry-presentation_swift_object_model_capability_contexts_equation_type_api_partial_differential_equations_partialdifferentialequationsecondorderclassification_equation_type"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsecondorderclassification_equationtype.66b8c90a7bdd"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSecondOrderClassification method</p>

```swift signature
func equationType() -> UniffiPartialDifferentialEquationSecondOrderType?
```

The single proved classical type, when the verdict is definite.

### equation_type

<a id="entry-presentation_swift_object_model_capability_contexts_equation_type_api_partial_differential_equations_partialdifferentialequationsecondordertypecase_equation_type"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsecondordertypecase_equationtype.5ce65123765a"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSecondOrderTypeCase method</p>

```swift signature
func equationType() -> UniffiPartialDifferentialEquationSecondOrderType
```

The classical type proved under this case's condition.

### explicit_branch

<a id="entry-presentation_swift_object_model_capability_contexts_explicit_branch_api_partial_differential_equations_partialdifferentialequationverificationreport_explicit_branch"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationverificationreport_explicitbranch.8d09a327aafd"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationVerificationReport method</p>

```swift signature
func explicitBranch() -> UniffiExpression?
```

The isolated explicit branch checked for an implicit candidate.

### explicit_partial_differential_equation_solution

<a id="entry-presentation_swift_object_model_capability_contexts_explicit_partial_differential_equation_solution_api_partial_differential_equations_session_explicit_partial_differential_equation_solution"></a>
<a id="placement-placement.swift.swift_object.uniffisession_explicitpartialdifferentialequationsolution.6dd157a18a6b"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func explicitPartialDifferentialEquationSolution(solution: UniffiExpression) -> UniffiPartialDifferentialEquationSolutionFamily
```

Create an explicit partial differential equation solution family in the default context.

### first_equation

<a id="entry-presentation_swift_object_model_capability_contexts_first_equation_api_partial_differential_equations_partialdifferentialequationseparationresult_first_equation"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationseparationresult_firstequation.31e30b5ffe71"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSeparationResult method</p>

```swift signature
func firstEquation() -> UniffiPartialDifferentialEquationSeparatedEquation
```

The first exact one-variable ordinary differential equation.

### form

<a id="entry-presentation_swift_object_model_capability_contexts_form_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_form"></a>
<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsolveresult_form.e26ff097e5db"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSolveResult method</p>

```swift signature
func form() -> UniffiOrdinaryDifferentialEquationSolutionForm?
```

Whether the solution is the value of the unknown or a relation read as zero.

### form

<a id="entry-presentation_swift_object_model_capability_contexts_form_api_partial_differential_equations_partialdifferentialequationsolutionfamily_form"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsolutionfamily_form.c9f40376ce85"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolutionFamily method</p>

```swift signature
func form() -> UniffiPartialDifferentialEquationSolutionForm
```

Whether this candidate is an `explicit` value or an `implicit` residual.

### forward_coordinates

<a id="entry-presentation_swift_object_model_capability_contexts_forward_coordinates_api_partial_differential_equations_partialdifferentialequationcoordinatechange_forward_coordinates"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationcoordinatechange_forwardcoordinates.952f9b134fad"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCoordinateChange method</p>

```swift signature
func forwardCoordinates() -> [UniffiExpression]
```

The ordered source-to-target coordinate expressions.

### frequency_domain_equation

<a id="entry-presentation_swift_object_model_capability_contexts_frequency_domain_equation_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_frequency_domain_equation"></a>
<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsolveresult_frequencydomainequation.90969cddd80a"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSolveResult method</p>

```swift signature
func frequencyDomainEquation() -> UniffiExpression?
```

The frequency-domain equation of a Laplace transform solution, read as zero.

### full_coefficients

<a id="entry-presentation_swift_object_model_capability_contexts_full_coefficients_api_partial_differential_equations_partialdifferentialequationcoefficientdata_full_coefficients"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationcoefficientdata_fullcoefficients.844a146b8746"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCoefficientData method</p>

```swift signature
func fullCoefficients() -> [UniffiPartialDifferentialEquationJetCoefficient]?
```

Every jet coefficient, when the equation is exactly linear.

### general_generator

<a id="entry-presentation_swift_object_model_capability_contexts_general_generator_api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_general_generator"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryalgebra_generalgenerator.d4a6cd5b775a"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAlgebra method</p>

```swift signature
func generalGenerator() -> UniffiPartialDifferentialEquationPointSymmetryGenerator?
```

The general generator, a combination of the basis through the parameters.

### generality

<a id="entry-presentation_swift_object_model_capability_contexts_generality_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_generality"></a>
<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsolveresult_generality.4e08359261dd"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSolveResult method</p>

```swift signature
func generality() -> UniffiOrdinaryDifferentialEquationGeneralityVerdict?
```

The rank decision behind a complete-family claim, when the request required one.

### generality

<a id="entry-presentation_swift_object_model_capability_contexts_generality_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_generality"></a>
<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsystemsolveresult_generality.821666cd0fd2"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSystemSolveResult method</p>

```swift signature
func generality() -> UniffiOrdinaryDifferentialEquationGeneralityVerdict?
```

The rank decision on the constants-to-initial-jet map, when verification ran.

### generality

<a id="entry-presentation_swift_object_model_capability_contexts_generality_api_ordinary_differential_equations_ordinarydifferentialequationsystemverificationreport_generality"></a>
<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsystemverificationreport_generality.80fcf261d1af"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSystemVerificationReport method</p>

```swift signature
func generality() -> UniffiOrdinaryDifferentialEquationGeneralityVerdict
```

The rank decision on the map from the supplied constants to the initial jet.

### generated_constants

<a id="entry-presentation_swift_object_model_capability_contexts_generated_constants_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_generated_constants"></a>
<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsolveresult_generatedconstants.80c0ae97cab9"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSolveResult method</p>

```swift signature
func generatedConstants() -> [UniffiExpression]
```

Exactly the constants the solution treats as free.

### generated_constants

<a id="entry-presentation_swift_object_model_capability_contexts_generated_constants_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_generated_constants"></a>
<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsystemsolveresult_generatedconstants.2c6c8993ba19"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSystemSolveResult method</p>

```swift signature
func generatedConstants() -> [UniffiExpression]
```

Exactly the constants the assignment treats as free.

### governing_residual

<a id="entry-presentation_swift_object_model_capability_contexts_governing_residual_api_partial_differential_equations_partialdifferentialequationverificationreport_governing_residual"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationverificationreport_governingresidual.93f4bd65187b"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationVerificationReport method</p>

```swift signature
func governingResidual() -> UniffiPartialDifferentialEquationVerificationResidual
```

Independently reduced governing-equation evidence.

### highest_order_coefficients

<a id="entry-presentation_swift_object_model_capability_contexts_highest_order_coefficients_api_partial_differential_equations_partialdifferentialequationcoefficientdata_highest_order_coefficients"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationcoefficientdata_highestordercoefficients.4dc7ac67412a"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCoefficientData method</p>

```swift signature
func highestOrderCoefficients() -> [UniffiPartialDifferentialEquationJetCoefficient]?
```

The highest-order jet coefficients, when the equation is affine in them.

### homogeneous

<a id="entry-presentation_swift_object_model_capability_contexts_homogeneous_api_partial_differential_equations_partialdifferentialequationcoefficientdata_homogeneous"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationcoefficientdata_homogeneous.ef0401236d6f"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCoefficientData method</p>

```swift signature
func homogeneous() -> Bool?
```

Whether the equation was proved homogeneous, when that statement is meaningful.

### image

<a id="entry-presentation_swift_object_model_capability_contexts_image_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_image"></a>
<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsolveresult_image.271c4e1715b5"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSolveResult method</p>

```swift signature
func image() -> UniffiExpression?
```

The image of the unknown a Laplace transform solution solved for.

### implicit_partial_differential_equation_solution

<a id="entry-presentation_swift_object_model_capability_contexts_implicit_partial_differential_equation_solution_api_partial_differential_equations_session_implicit_partial_differential_equation_solution"></a>
<a id="placement-placement.swift.swift_object.uniffisession_implicitpartialdifferentialequationsolution.ba46261688e5"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func implicitPartialDifferentialEquationSolution(residual: UniffiExpression) -> UniffiPartialDifferentialEquationSolutionFamily
```

Create an implicit partial differential equation solution family in the default context.

### inconclusive_reason

<a id="entry-presentation_swift_object_model_capability_contexts_inconclusive_reason_api_partial_differential_equations_partialdifferentialequationverificationreport_inconclusive_reason"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationverificationreport_inconclusivereason.971c18d050d7"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationVerificationReport method</p>

```swift signature
func inconclusiveReason() -> UniffiPartialDifferentialEquationVerificationInconclusiveReason?
```

The deterministic reason verification could not reach a proof.

### independent_variable_name

<a id="entry-presentation_swift_object_model_capability_contexts_independent_variable_name_api_partial_differential_equations_partialdifferentialequationseparatedequation_independent_variable_name"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationseparatedequation_independentvariablename.07f2843e035b"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSeparatedEquation method</p>

```swift signature
func independentVariableName() -> String
```

The name of this equation's independent variable.

### independent_variables

<a id="entry-presentation_swift_object_model_capability_contexts_independent_variables_api_partial_differential_equations_partialdifferentialequationproblem_independent_variables"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationproblem_independentvariables.4db1e71be871"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationProblem method</p>

```swift signature
func independentVariables() -> [String]
```

The independent variables in their semantic declared order.

### initial_condition_residuals

<a id="entry-presentation_swift_object_model_capability_contexts_initial_condition_residuals_api_partial_differential_equations_partialdifferentialequationverificationreport_initial_condition_residuals"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationverificationreport_initialconditionresiduals.210fdcda8e7a"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationVerificationReport method</p>

```swift signature
func initialConditionResiduals() -> [UniffiPartialDifferentialEquationVerificationResidual]
```

One reduced residual per initial condition, in insertion order.

### initial_conditions

<a id="entry-presentation_swift_object_model_capability_contexts_initial_conditions_api_partial_differential_equations_partialdifferentialequationproblem_initial_conditions"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationproblem_initialconditions.e9f03394edf1"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationProblem method</p>

```swift signature
func initialConditions() -> [UniffiExpression]
```

The initial-condition residuals in insertion order.

### integrate_definite_under_constraint

<a id="entry-presentation_swift_object_model_capability_contexts_integrate_definite_under_constraint_api_session_integrate_definite_under_constraint"></a>
<a id="placement-placement.swift.swift_object.uniffisession_integratedefiniteunderconstraint.c9f35c0a4198"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func integrateDefiniteUnderConstraint(
    target: UniffiExpression,
    variable: String,
    lowerBound: UniffiExpression,
    upperBound: UniffiExpression,
    constraint: UniffiExpression,
) -> UniffiExpression
```

Definite integration under a local bounded logical constraint.

### integrate_definite_under_constraint

<a id="entry-presentation_swift_object_model_capability_contexts_integrate_definite_under_constraint_api_expression_integrate_definite_under_constraint"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_integratedefiniteunderconstraint.7c97ffe7ae03"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func integrateDefiniteUnderConstraint(
    variable: String,
    lowerBound: UniffiExpression,
    upperBound: UniffiExpression,
    constraint: UniffiExpression,
) -> UniffiExpression
```

Definite integration under a local bounded logical constraint.

### intertwining

<a id="entry-presentation_swift_object_model_capability_contexts_intertwining_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_intertwining"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryaction_intertwining.ea1d5bbc74f6"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAction method</p>

```swift signature
func intertwining() -> UniffiPartialDifferentialEquationVerificationVerdict?
```

The exact decision on the intertwining identity.

### invariant

<a id="entry-presentation_swift_object_model_capability_contexts_invariant_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_invariant"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsimilaritysolution_invariant.777c267fc2fd"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSimilaritySolution method</p>

```swift signature
func invariant() -> UniffiExpression?
```

The invariant of the generator's base field.

### inverse_coordinates

<a id="entry-presentation_swift_object_model_capability_contexts_inverse_coordinates_api_partial_differential_equations_partialdifferentialequationcoordinatechange_inverse_coordinates"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationcoordinatechange_inversecoordinates.71b2ceb4b935"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCoordinateChange method</p>

```swift signature
func inverseCoordinates() -> [UniffiExpression]
```

The ordered target-to-source coordinate expressions.

### invertibility

<a id="entry-presentation_swift_object_model_capability_contexts_invertibility_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_invertibility"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryaction_invertibility.c3a911864067"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAction method</p>

```swift signature
func invertibility() -> UniffiPartialDifferentialEquationVerificationVerdict?
```

The exact decision that the coordinate map is invertible on its chart.

### length

<a id="entry-presentation_swift_object_model_capability_contexts_length_api_expression_operations_expression_length"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_length.5fd4ad9833c8"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func length() -> UInt64
```

Number of elements of a finite-set expression.

### length

<a id="entry-presentation_swift_object_model_capability_contexts_length_api_segment2d_length"></a>
<a id="placement-placement.swift.swift_object.uniffisegment2d_length.e4c6f33fcd4d"></a>
<p class="symi-entry-owner">UniffiSegment2d method</p>

```swift signature
func length() -> UniffiExpression
```

Also the finite-set length accessor on `expression` in WASM; context disambiguates.

### lifted_constants

<a id="entry-presentation_swift_object_model_capability_contexts_lifted_constants_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_lifted_constants"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsimilaritysolution_liftedconstants.1134a189dec3"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSimilaritySolution method</p>

```swift signature
func liftedConstants() -> [UniffiExpression]
```

The constants the lifted family is parameterized by.

### lifted_family

<a id="entry-presentation_swift_object_model_capability_contexts_lifted_family_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_lifted_family"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsimilaritysolution_liftedfamily.60253ad39228"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSimilaritySolution method</p>

```swift signature
func liftedFamily() -> UniffiPartialDifferentialEquationSolutionFamily?
```

The invariant solutions of the original equation.

### lifted_family_verification

<a id="entry-presentation_swift_object_model_capability_contexts_lifted_family_verification_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_lifted_family_verification"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsimilaritysolution_liftedfamilyverification.ed76c37d76db"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSimilaritySolution method</p>

```swift signature
func liftedFamilyVerification() -> UniffiPartialDifferentialEquationVerificationVerdict?
```

The exact decision that the lifted family solves the original equation.

### linearity

<a id="entry-presentation_swift_object_model_capability_contexts_linearity_api_partial_differential_equations_partialdifferentialequationclassification_linearity"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationclassification_linearity.b0a0e5b456e2"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationClassification method</p>

```swift signature
func linearity() -> UniffiPartialDifferentialEquationLinearity
```

The most-specific exact linearity class.

### linearity

<a id="entry-presentation_swift_object_model_capability_contexts_linearity_api_partial_differential_equations_partialdifferentialequationsolutionprovenance_linearity"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsolutionprovenance_linearity.4fcd63b62e1e"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolutionProvenance method</p>

```swift signature
func linearity() -> UniffiPartialDifferentialEquationLinearity
```

The exact linearity class recorded at the time the candidate was produced.

### method

<a id="entry-presentation_swift_object_model_capability_contexts_method_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_method"></a>
<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsolveresult_method.9769ce64ef1e"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSolveResult method</p>

```swift signature
func method() -> UniffiOrdinaryDifferentialEquationMethod
```

The method the request actually ran.

### method

<a id="entry-presentation_swift_object_model_capability_contexts_method_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_method"></a>
<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsystemsolveresult_method.17db00cad874"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSystemSolveResult method</p>

```swift signature
func method() -> UniffiOrdinaryDifferentialEquationSystemMethod
```

The method the system request actually ran.

### method

<a id="entry-presentation_swift_object_model_capability_contexts_method_api_partial_differential_equations_partialdifferentialequationmethodcandidate_method"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationmethodcandidate_method.f63da59d04bd"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationMethodCandidate method</p>

```swift signature
func method() -> UniffiPartialDifferentialEquationMethod
```

The stable advisory method name.

### method

<a id="entry-presentation_swift_object_model_capability_contexts_method_api_partial_differential_equations_partialdifferentialequationsolutionprovenance_method"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsolutionprovenance_method.4b6d74cfcbed"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolutionProvenance method</p>

```swift signature
func method() -> UniffiPartialDifferentialEquationMethod
```

The method identity this solution was produced by.

### method

<a id="entry-presentation_swift_object_model_capability_contexts_method_api_partial_differential_equations_partialdifferentialequationsolveresult_method"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsolveresult_method.2c59267e2d84"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolveResult method</p>

```swift signature
func method() -> UniffiPartialDifferentialEquationMethod?
```

The method that produced a solution, when one did.

### method_candidates

<a id="entry-presentation_swift_object_model_capability_contexts_method_candidates_api_partial_differential_equations_partialdifferentialequationclassification_method_candidates"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationclassification_methodcandidates.3fb146f8cc4b"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationClassification method</p>

```swift signature
func methodCandidates() -> [UniffiPartialDifferentialEquationMethodCandidate]
```

The advisory methods in deterministic preference order.

### multiplier

<a id="entry-presentation_swift_object_model_capability_contexts_multiplier_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_multiplier"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryaction_multiplier.faef52f6b90b"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAction method</p>

```swift signature
func multiplier() -> UniffiExpression?
```

The multiplier of the intertwining identity.

### multiplier

<a id="entry-presentation_swift_object_model_capability_contexts_multiplier_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_multiplier"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsimilaritysolution_multiplier.d9e470d51354"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSimilaritySolution method</p>

```swift signature
func multiplier() -> UniffiExpression?
```

The multiplier of the reduction identity.

### name

<a id="entry-presentation_swift_object_model_capability_contexts_name_api_partial_differential_equations_partialdifferentialequationarbitraryfunction_name"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationarbitraryfunction_name.b128ef3985d7"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationArbitraryFunction method</p>

```swift signature
func name() -> String
```

The collision-free allocated function name.

### normalization_multiplier

<a id="entry-presentation_swift_object_model_capability_contexts_normalization_multiplier_api_partial_differential_equations_partialdifferentialequationtransformationresult_normalization_multiplier"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationtransformationresult_normalizationmultiplier.c8faee7149b6"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationTransformationResult method</p>

```swift signature
func normalizationMultiplier() -> UniffiExpression?
```

The proved-nonzero residual-normalization multiplier.

### order

<a id="entry-presentation_swift_object_model_capability_contexts_order_api_partial_differential_equations_partialdifferentialequationclassification_order"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationclassification_order.c888f6a7423f"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationClassification method</p>

```swift signature
func order() -> UInt64
```

The exact highest derivative order.

### order

<a id="entry-presentation_swift_object_model_capability_contexts_order_api_partial_differential_equations_partialdifferentialequationsolutionprovenance_order"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsolutionprovenance_order.de0eb8e5daac"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolutionProvenance method</p>

```swift signature
func order() -> UInt64
```

The exact order recorded at the time the candidate was produced.

### outcome

<a id="entry-presentation_swift_object_model_capability_contexts_outcome_api_results_setenumeration_outcome"></a>
<a id="placement-placement.swift.swift_object.uniffisetenumeration_outcome.feca7c08f98c"></a>
<p class="symi-entry-owner">UniffiSetEnumeration method</p>

```swift signature
func outcome() -> UniffiEnumerationVerdict
```

`"complete"`, `"truncated"`, or `"declined"`.

### outstanding_obligations

<a id="entry-presentation_swift_object_model_capability_contexts_outstanding_obligations_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_outstanding_obligations"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryaction_outstandingobligations.63b0fae73713"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAction method</p>

```swift signature
func outstandingObligations() -> [UniffiPartialDifferentialEquationSymmetryObligation]
```

The claims the action explicitly does not make.

### outstanding_obligations

<a id="entry-presentation_swift_object_model_capability_contexts_outstanding_obligations_api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_outstanding_obligations"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryalgebra_outstandingobligations.162fde4da8c6"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAlgebra method</p>

```swift signature
func outstandingObligations() -> [UniffiPartialDifferentialEquationSymmetryObligation]
```

The claims the algebra explicitly does not make.

### outstanding_obligations

<a id="entry-presentation_swift_object_model_capability_contexts_outstanding_obligations_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_outstanding_obligations"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsimilaritysolution_outstandingobligations.c7c07be4104f"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSimilaritySolution method</p>

```swift signature
func outstandingObligations() -> [UniffiPartialDifferentialEquationSymmetryObligation]
```

The claims the family explicitly does not make.

### parameters

<a id="entry-presentation_swift_object_model_capability_contexts_parameters_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_parameters"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryaction_parameters.8072339a2f4e"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAction method</p>

```swift signature
func parameters() -> [UniffiExpression]
```

The group parameters the closed forms depend on.

### parameters

<a id="entry-presentation_swift_object_model_capability_contexts_parameters_api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_parameters"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryalgebra_parameters.08880abc4d8c"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAlgebra method</p>

```swift signature
func parameters() -> [UniffiExpression]
```

The constants of the general generator, one per basis generator.

### partial_differential_equation

<a id="entry-presentation_swift_object_model_capability_contexts_partial_differential_equation_api_partial_differential_equations_session_partial_differential_equation"></a>
<a id="placement-placement.swift.swift_object.uniffisession_partialdifferentialequation.2fa4c014f127"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func partialDifferentialEquation(
    equation: UniffiExpression,
    dependentFunction: UniffiUndefinedFunction,
    independentVariables: [String],
    initialConditions: [UniffiExpression],
    boundaryConditions: [UniffiExpression],
) -> UniffiPartialDifferentialEquationProblem
```

Construct a validated scalar partial differential equation in the default context, with an explicit dependent function and independent-variable order.

### partial_differential_equation_arbitrary_function

<a id="entry-presentation_swift_object_model_capability_contexts_partial_differential_equation_arbitrary_function_api_partial_differential_equations_session_partial_differential_equation_arbitrary_function"></a>
<a id="placement-placement.swift.swift_object.uniffisession_partialdifferentialequationarbitraryfunction.8dfddf062adc"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func partialDifferentialEquationArbitraryFunction(
    preferredName: String,
    arity: UInt64,
) -> UniffiPartialDifferentialEquationArbitraryFunction
```

Allocate a collision-free arbitrary function for a PDE candidate family.

### point_symmetry_decline

<a id="entry-presentation_swift_object_model_capability_contexts_point_symmetry_decline_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_point_symmetry_decline"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryaction_pointsymmetrydecline.de5fe0e89971"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAction method</p>

```swift signature
func pointSymmetryDecline() -> UniffiPartialDifferentialEquationPointSymmetryDecline?
```

The reason the underlying point-symmetry algebra was not derived, when it was not.

### principal_congruence_residuals

<a id="entry-presentation_swift_object_model_capability_contexts_principal_congruence_residuals_api_partial_differential_equations_partialdifferentialequationtransformationverificationreport_principal_congruence_residuals"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationtransformationverificationreport_principalcongruenceresiduals.08515ecc11e5"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationTransformationVerificationReport method</p>

```swift signature
func principalCongruenceResiduals() -> [UniffiExpression]
```

The exact principal-matrix congruence residuals.

### principal_form

<a id="entry-presentation_swift_object_model_capability_contexts_principal_form_api_partial_differential_equations_partialdifferentialequationcanonicalizationresult_principal_form"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationcanonicalizationresult_principalform.1644701a914e"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCanonicalizationResult method</p>

```swift signature
func principalForm() -> UniffiPartialDifferentialEquationCanonicalPrincipalForm?
```

The exact canonical principal form that was reached.

### principal_matrix

<a id="entry-presentation_swift_object_model_capability_contexts_principal_matrix_api_partial_differential_equations_partialdifferentialequationsecondorderclassification_principal_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsecondorderclassification_principalmatrix.313013cc467a"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSecondOrderClassification method</p>

```swift signature
func principalMatrix() -> UniffiMatrix
```

The frozen symmetric principal matrix this analysis classified.

### proof_obligations

<a id="entry-presentation_swift_object_model_capability_contexts_proof_obligations_api_partial_differential_equations_partialdifferentialequationmethodcandidate_proof_obligations"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationmethodcandidate_proofobligations.42322db9cf26"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationMethodCandidate method</p>

```swift signature
func proofObligations() -> [UniffiPartialDifferentialEquationProofObligation]
```

The exact obligations this method must discharge before it may solve.

### proof_obligations

<a id="entry-presentation_swift_object_model_capability_contexts_proof_obligations_api_partial_differential_equations_partialdifferentialequationsecondorderclassification_proof_obligations"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsecondorderclassification_proofobligations.e043d67cbefa"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSecondOrderClassification method</p>

```swift signature
func proofObligations() -> [UniffiPartialDifferentialEquationProofObligation]
```

The obligations a downstream canonical-coordinate route must discharge.

### proof_obligations

<a id="entry-presentation_swift_object_model_capability_contexts_proof_obligations_api_partial_differential_equations_partialdifferentialequationsolutionfamily_proof_obligations"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsolutionfamily_proofobligations.8f7163874900"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolutionFamily method</p>

```swift signature
func proofObligations() -> [UniffiPartialDifferentialEquationProofObligation]
```

The obligations recorded against this candidate family.

### proof_obligations

<a id="entry-presentation_swift_object_model_capability_contexts_proof_obligations_api_partial_differential_equations_partialdifferentialequationverificationreport_proof_obligations"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationverificationreport_proofobligations.5e8244fd76a9"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationVerificationReport method</p>

```swift signature
func proofObligations() -> [UniffiPartialDifferentialEquationProofObligation]
```

The obligations consulted or left unresolved by this verification.

### provenance

<a id="entry-presentation_swift_object_model_capability_contexts_provenance_api_partial_differential_equations_partialdifferentialequationsolveresult_provenance"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsolveresult_provenance.e4ec2ca33795"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolveResult method</p>

```swift signature
func provenance() -> UniffiPartialDifferentialEquationSolutionProvenance?
```

The mathematical provenance a verified solution carries.

### reconstruction

<a id="entry-presentation_swift_object_model_capability_contexts_reconstruction_api_partial_differential_equations_partialdifferentialequationseparationresult_reconstruction"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationseparationresult_reconstruction.77e1b13e81e0"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSeparationResult method</p>

```swift signature
func reconstruction() -> UniffiExpression
```

The exact reconstruction expression for the separated factors.

### reduced_equation

<a id="entry-presentation_swift_object_model_capability_contexts_reduced_equation_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_reduced_equation"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsimilaritysolution_reducedequation.507fe9810c62"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSimilaritySolution method</p>

```swift signature
func reducedEquation() -> UniffiExpression?
```

The reduced ordinary differential equation for the profile, read as zero.

### remainder

<a id="entry-presentation_swift_object_model_capability_contexts_remainder_api_partial_differential_equations_partialdifferentialequationcoefficientdata_remainder"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationcoefficientdata_remainder.a5833d1eaffc"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCoefficientData method</p>

```swift signature
func remainder() -> UniffiExpression?
```

The exact jet-free remainder term, when one was extracted.

### required_rank

<a id="entry-presentation_swift_object_model_capability_contexts_required_rank_api_ordinary_differential_equations_ordinarydifferentialequationsystemverificationreport_required_rank"></a>
<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsystemverificationreport_requiredrank.265c29b5d9a0"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSystemVerificationReport method</p>

```swift signature
func requiredRank() -> UInt64
```

The dimension a complete family of the system must span.

### residual

<a id="entry-presentation_swift_object_model_capability_contexts_residual_api_partial_differential_equations_partialdifferentialequationseparatedequation_residual"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationseparatedequation_residual.cf2ee0b6af1d"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSeparatedEquation method</p>

```swift signature
func residual() -> UniffiExpression
```

The exact residual of this one-variable ordinary differential equation.

### residual

<a id="entry-presentation_swift_object_model_capability_contexts_residual_api_partial_differential_equations_partialdifferentialequationverificationresidual_residual"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationverificationresidual_residual.637f1e20a309"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationVerificationResidual method</p>

```swift signature
func residual() -> UniffiExpression
```

The independently reduced residual expression.

### route

<a id="entry-presentation_swift_object_model_capability_contexts_route_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_route"></a>
<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsystemsolveresult_route.66d2847e769e"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSystemSolveResult method</p>

```swift signature
func route() -> UniffiOrdinaryDifferentialEquationSystemRoute?
```

The route the certified assignment came from.

### second_equation

<a id="entry-presentation_swift_object_model_capability_contexts_second_equation_api_partial_differential_equations_partialdifferentialequationseparationresult_second_equation"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationseparationresult_secondequation.d1a5abe1dd18"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSeparationResult method</p>

```swift signature
func secondEquation() -> UniffiPartialDifferentialEquationSeparatedEquation
```

The second exact one-variable ordinary differential equation.

### second_order_principal_part

<a id="entry-presentation_swift_object_model_capability_contexts_second_order_principal_part_api_partial_differential_equations_partialdifferentialequationclassification_second_order_principal_part"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationclassification_secondorderprincipalpart.c325550bb2cb"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationClassification method</p>

```swift signature
func secondOrderPrincipalPart() -> UniffiPartialDifferentialEquationPrincipalPart?
```

The exact second-order principal metadata, when the equation has one.

### separate_partial_differential_equation

<a id="entry-presentation_swift_object_model_capability_contexts_separate_partial_differential_equation_api_partial_differential_equations_session_separate_partial_differential_equation"></a>
<a id="placement-placement.swift.swift_object.uniffisession_separatepartialdifferentialequation.9102c154da51"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func separatePartialDifferentialEquation(problem: UniffiPartialDifferentialEquationProblem) -> UniffiPartialDifferentialEquationSeparationResult
```

Separate a supported PDE and return its independently verified one-variable equations.

### separation_constant

<a id="entry-presentation_swift_object_model_capability_contexts_separation_constant_api_partial_differential_equations_partialdifferentialequationseparationresult_separation_constant"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationseparationresult_separationconstant.467c97c73cfb"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSeparationResult method</p>

```swift signature
func separationConstant() -> UniffiExpression
```

The fresh exact separation constant.

### similarity_variable

<a id="entry-presentation_swift_object_model_capability_contexts_similarity_variable_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_similarity_variable"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsimilaritysolution_similarityvariable.d1f2f25e94e1"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSimilaritySolution method</p>

```swift signature
func similarityVariable() -> UniffiExpression?
```

The coordinate of the reduced equation, standing for the invariant.

### simplify_under_constraint

<a id="entry-presentation_swift_object_model_capability_contexts_simplify_under_constraint_api_session_simplify_under_constraint"></a>
<a id="placement-placement.swift.swift_object.uniffisession_simplifyunderconstraint.96f7054738cf"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func simplifyUnderConstraint(
    target: UniffiExpression,
    constraint: UniffiExpression,
) -> UniffiExpression
```

Simplify an expression under a local bounded logical constraint without changing symbol assumptions.

### simplify_under_constraint

<a id="entry-presentation_swift_object_model_capability_contexts_simplify_under_constraint_api_expression_simplify_under_constraint"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_simplifyunderconstraint.a6c17f95a494"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func simplifyUnderConstraint(constraint: UniffiExpression) -> UniffiExpression
```

Simplify this expression under a local bounded logical constraint without changing symbol assumptions.

### solution

<a id="entry-presentation_swift_object_model_capability_contexts_solution_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_solution"></a>
<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsolveresult_solution.3c2cdbe4b260"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSolveResult method</p>

```swift signature
func solution() -> UniffiExpression?
```

The certified solution, which no declined request carries.

### solution

<a id="entry-presentation_swift_object_model_capability_contexts_solution_api_partial_differential_equations_partialdifferentialequationsolveresult_solution"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsolveresult_solution.2d2b086fc48f"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolveResult method</p>

```swift signature
func solution() -> UniffiPartialDifferentialEquationSolutionFamily?
```

The verified solution family, which no declined route may carry.

### solve_partial_differential_equation

<a id="entry-presentation_swift_object_model_capability_contexts_solve_partial_differential_equation_api_partial_differential_equations_session_solve_partial_differential_equation"></a>
<a id="placement-placement.swift.swift_object.uniffisession_solvepartialdifferentialequation.805999f7480e"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func solvePartialDifferentialEquation(
    problem: UniffiPartialDifferentialEquationProblem,
    method: UniffiPartialDifferentialEquationMethod,
) -> UniffiPartialDifferentialEquationSolveResult
```

Run the sound partial differential equation dispatcher under a stable method name.

### solve_partial_differential_equation_with_transform_axis_specifications

<a id="entry-presentation_swift_object_model_capability_contexts_solve_partial_differential_equation_with_transform_axis_specifications_api_partial_differential_equations_session_solve_partial_differential_equation_with_transform_axis_specifications"></a>
<a id="placement-placement.swift.swift_object.uniffisession_solvepartialdifferentialequationwithtransformaxisspecifications.a99bf7540672"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func solvePartialDifferentialEquationWithTransformAxisSpecifications(
    problem: UniffiPartialDifferentialEquationProblem,
    method: UniffiPartialDifferentialEquationMethod,
    transformAxisSpecifications: [String],
) -> UniffiPartialDifferentialEquationSolveResult
```

Solve a PDE with ordered explicit transform-axis specifications.

### source_variables

<a id="entry-presentation_swift_object_model_capability_contexts_source_variables_api_partial_differential_equations_partialdifferentialequationcoordinatechange_source_variables"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationcoordinatechange_sourcevariables.e6e2ae880173"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCoordinateChange method</p>

```swift signature
func sourceVariables() -> [String]
```

The ordered source coordinate names.

### target_dependent_function

<a id="entry-presentation_swift_object_model_capability_contexts_target_dependent_function_api_partial_differential_equations_partialdifferentialequationcoordinatechange_target_dependent_function"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationcoordinatechange_targetdependentfunction.2140561272c4"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCoordinateChange method</p>

```swift signature
func targetDependentFunction() -> String
```

The target unknown-function name.

### target_problem

<a id="entry-presentation_swift_object_model_capability_contexts_target_problem_api_partial_differential_equations_partialdifferentialequationtransformationresult_target_problem"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationtransformationresult_targetproblem.2bde3f7246c5"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationTransformationResult method</p>

```swift signature
func targetProblem() -> UniffiPartialDifferentialEquationProblem?
```

The transformed PDE problem stated in the target coordinates.

### target_variables

<a id="entry-presentation_swift_object_model_capability_contexts_target_variables_api_partial_differential_equations_partialdifferentialequationcoordinatechange_target_variables"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationcoordinatechange_targetvariables.7e57c181e4da"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCoordinateChange method</p>

```swift signature
func targetVariables() -> [String]
```

The ordered target coordinate names.

### transformation_decline

<a id="entry-presentation_swift_object_model_capability_contexts_transformation_decline_api_partial_differential_equations_partialdifferentialequationcanonicalizationresult_transformation_decline"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationcanonicalizationresult_transformationdecline.764fe16c1fbf"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCanonicalizationResult method</p>

```swift signature
func transformationDecline() -> UniffiPartialDifferentialEquationTransformationDecline?
```

The underlying coordinate-transformation decline, when one caused the decline.

### transformed

<a id="entry-presentation_swift_object_model_capability_contexts_transformed_api_partial_differential_equations_partialdifferentialequationtransformationresult_transformed"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationtransformationresult_transformed.72c8b0825faa"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationTransformationResult method</p>

```swift signature
func transformed() -> Bool
```

Whether a verified transformation was produced.

### transformed_coordinates

<a id="entry-presentation_swift_object_model_capability_contexts_transformed_coordinates_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_transformed_coordinates"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryaction_transformedcoordinates.642f7c949700"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAction method</p>

```swift signature
func transformedCoordinates() -> [UniffiExpression]
```

The coordinates at which a seed solution is evaluated.

### transformed_governing_residual

<a id="entry-presentation_swift_object_model_capability_contexts_transformed_governing_residual_api_partial_differential_equations_partialdifferentialequationtransformationverificationreport_transformed_governing_residual"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationtransformationverificationreport_transformedgoverningresidual.499a207e532f"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationTransformationVerificationReport method</p>

```swift signature
func transformedGoverningResidual() -> UniffiExpression
```

The independently transformed source governing residual.

### verification

<a id="entry-presentation_swift_object_model_capability_contexts_verification_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_verification"></a>
<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsolveresult_verification.cb32d6774cc3"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSolveResult method</p>

```swift signature
func verification() -> UniffiOrdinaryDifferentialEquationVerificationVerdict?
```

The independent verifier's decision on the candidate, when verification ran.

### verification

<a id="entry-presentation_swift_object_model_capability_contexts_verification_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_verification"></a>
<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsystemsolveresult_verification.8e43cdf46416"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSystemSolveResult method</p>

```swift signature
func verification() -> UniffiOrdinaryDifferentialEquationVerificationVerdict?
```

The independent verifier's decision on the assignment, when verification ran.

### verification

<a id="entry-presentation_swift_object_model_capability_contexts_verification_api_partial_differential_equations_partialdifferentialequationseparationresult_verification"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationseparationresult_verification.da63f20d9178"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSeparationResult method</p>

```swift signature
func verification() -> UniffiPartialDifferentialEquationVerificationVerdict
```

The aggregate verdict of the independently replayed separation certificate.

### verification

<a id="entry-presentation_swift_object_model_capability_contexts_verification_api_partial_differential_equations_partialdifferentialequationsolveresult_verification"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsolveresult_verification.f26765f2ac14"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolveResult method</p>

```swift signature
func verification() -> UniffiPartialDifferentialEquationVerificationReport?
```

The independent verification report a solved result must carry.

### verify_partial_differential_equation_coordinate_transformation

<a id="entry-presentation_swift_object_model_capability_contexts_verify_partial_differential_equation_coordinate_transformation_api_partial_differential_equations_session_verify_partial_differential_equation_coordinate_transformation"></a>
<a id="placement-placement.swift.swift_object.uniffisession_verifypartialdifferentialequationcoordinatetransformation.10d84376769a"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func verifyPartialDifferentialEquationCoordinateTransformation(
    problem: UniffiPartialDifferentialEquationProblem,
    transformation: UniffiPartialDifferentialEquationTransformationResult,
) -> UniffiPartialDifferentialEquationTransformationVerificationReport
```

Independently verify an exact PDE coordinate transformation.

### verify_partial_differential_equation_solution

<a id="entry-presentation_swift_object_model_capability_contexts_verify_partial_differential_equation_solution_api_partial_differential_equations_session_verify_partial_differential_equation_solution"></a>
<a id="placement-placement.swift.swift_object.uniffisession_verifypartialdifferentialequationsolution.f427ba8dd3ba"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func verifyPartialDifferentialEquationSolution(
    problem: UniffiPartialDifferentialEquationProblem,
    solution: UniffiPartialDifferentialEquationSolutionFamily,
) -> UniffiPartialDifferentialEquationVerificationReport
```

Independently verify a partial differential equation candidate with exact residual reasoning.

### weight

<a id="entry-presentation_swift_object_model_capability_contexts_weight_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_weight"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsimilaritysolution_weight.dfa064be35c6"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSimilaritySolution method</p>

```swift signature
func weight() -> UniffiExpression?
```

The weight of invariant solutions.

