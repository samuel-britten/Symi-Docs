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

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_integratedefiniteunderconstraint.562146e4116b"></a>
### UniffiExpression.integrateDefiniteUnderConstraint

`UniffiExpression.integrateDefiniteUnderConstraint(variable: kotlin.String, lowerBound: UniffiExpression, upperBound: UniffiExpression, constraint: UniffiExpression): UniffiExpression`

Returns `UniffiExpression`.

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_length.76de3f6676f6"></a>
### UniffiExpression.length

`UniffiExpression.length(): kotlin.ULong`

Returns `kotlin.ULong`.

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_simplifyunderconstraint.8953e00a65af"></a>
### UniffiExpression.simplifyUnderConstraint

`UniffiExpression.simplifyUnderConstraint(constraint: UniffiExpression): UniffiExpression`

Returns `UniffiExpression`.

<a id="placement-placement.kotlin.kotlin_object.uniffiordinarydifferentialequationsolveresult_decline.bb16bcd65b3a"></a>
### UniffiOrdinaryDifferentialEquationSolveResult.decline

`UniffiOrdinaryDifferentialEquationSolveResult.decline(): UniffiOrdinaryDifferentialEquationSolveDecline?`

Returns `UniffiOrdinaryDifferentialEquationSolveDecline?`.

<a id="placement-placement.kotlin.kotlin_object.uniffiordinarydifferentialequationsolveresult_form.685873215d90"></a>
### UniffiOrdinaryDifferentialEquationSolveResult.form

`UniffiOrdinaryDifferentialEquationSolveResult.form(): UniffiOrdinaryDifferentialEquationSolutionForm?`

Returns `UniffiOrdinaryDifferentialEquationSolutionForm?`.

<a id="placement-placement.kotlin.kotlin_object.uniffiordinarydifferentialequationsolveresult_frequencydomainequation.a2db8ac10e80"></a>
### UniffiOrdinaryDifferentialEquationSolveResult.frequencyDomainEquation

`UniffiOrdinaryDifferentialEquationSolveResult.frequencyDomainEquation(): UniffiExpression?`

Returns `UniffiExpression?`.

<a id="placement-placement.kotlin.kotlin_object.uniffiordinarydifferentialequationsolveresult_generality.613e7cc62c9e"></a>
### UniffiOrdinaryDifferentialEquationSolveResult.generality

`UniffiOrdinaryDifferentialEquationSolveResult.generality(): UniffiOrdinaryDifferentialEquationGeneralityVerdict?`

Returns `UniffiOrdinaryDifferentialEquationGeneralityVerdict?`.

<a id="placement-placement.kotlin.kotlin_object.uniffiordinarydifferentialequationsolveresult_generatedconstants.91026f1cc1fd"></a>
### UniffiOrdinaryDifferentialEquationSolveResult.generatedConstants

`UniffiOrdinaryDifferentialEquationSolveResult.generatedConstants(): List<UniffiExpression>`

Returns `List<UniffiExpression>`.

<a id="placement-placement.kotlin.kotlin_object.uniffiordinarydifferentialequationsolveresult_image.f908a541df22"></a>
### UniffiOrdinaryDifferentialEquationSolveResult.image

`UniffiOrdinaryDifferentialEquationSolveResult.image(): UniffiExpression?`

Returns `UniffiExpression?`.

<a id="placement-placement.kotlin.kotlin_object.uniffiordinarydifferentialequationsolveresult_method.dbd8e7a72e3c"></a>
### UniffiOrdinaryDifferentialEquationSolveResult.method

`UniffiOrdinaryDifferentialEquationSolveResult.method(): UniffiOrdinaryDifferentialEquationMethod`

Returns `UniffiOrdinaryDifferentialEquationMethod`.

<a id="placement-placement.kotlin.kotlin_object.uniffiordinarydifferentialequationsolveresult_solution.18f07f3b77c2"></a>
### UniffiOrdinaryDifferentialEquationSolveResult.solution

`UniffiOrdinaryDifferentialEquationSolveResult.solution(): UniffiExpression?`

Returns `UniffiExpression?`.

<a id="placement-placement.kotlin.kotlin_object.uniffiordinarydifferentialequationsolveresult_verification.738ea3b8d93d"></a>
### UniffiOrdinaryDifferentialEquationSolveResult.verification

`UniffiOrdinaryDifferentialEquationSolveResult.verification(): UniffiOrdinaryDifferentialEquationVerificationVerdict?`

Returns `UniffiOrdinaryDifferentialEquationVerificationVerdict?`.

<a id="placement-placement.kotlin.kotlin_object.uniffiordinarydifferentialequationsystemsolveresult_components.39df5fa84375"></a>
### UniffiOrdinaryDifferentialEquationSystemSolveResult.components

`UniffiOrdinaryDifferentialEquationSystemSolveResult.components(): List<UniffiExpression>`

Returns `List<UniffiExpression>`.

<a id="placement-placement.kotlin.kotlin_object.uniffiordinarydifferentialequationsystemsolveresult_decline.3a7344aea977"></a>
### UniffiOrdinaryDifferentialEquationSystemSolveResult.decline

`UniffiOrdinaryDifferentialEquationSystemSolveResult.decline(): UniffiOrdinaryDifferentialEquationSystemSolveDecline?`

Returns `UniffiOrdinaryDifferentialEquationSystemSolveDecline?`.

<a id="placement-placement.kotlin.kotlin_object.uniffiordinarydifferentialequationsystemsolveresult_generality.401bd6dc4810"></a>
### UniffiOrdinaryDifferentialEquationSystemSolveResult.generality

`UniffiOrdinaryDifferentialEquationSystemSolveResult.generality(): UniffiOrdinaryDifferentialEquationGeneralityVerdict?`

Returns `UniffiOrdinaryDifferentialEquationGeneralityVerdict?`.

<a id="placement-placement.kotlin.kotlin_object.uniffiordinarydifferentialequationsystemsolveresult_generatedconstants.aad8d80b36ca"></a>
### UniffiOrdinaryDifferentialEquationSystemSolveResult.generatedConstants

`UniffiOrdinaryDifferentialEquationSystemSolveResult.generatedConstants(): List<UniffiExpression>`

Returns `List<UniffiExpression>`.

<a id="placement-placement.kotlin.kotlin_object.uniffiordinarydifferentialequationsystemsolveresult_method.1765406314bd"></a>
### UniffiOrdinaryDifferentialEquationSystemSolveResult.method

`UniffiOrdinaryDifferentialEquationSystemSolveResult.method(): UniffiOrdinaryDifferentialEquationSystemMethod`

Returns `UniffiOrdinaryDifferentialEquationSystemMethod`.

<a id="placement-placement.kotlin.kotlin_object.uniffiordinarydifferentialequationsystemsolveresult_route.086de647b5a5"></a>
### UniffiOrdinaryDifferentialEquationSystemSolveResult.route

`UniffiOrdinaryDifferentialEquationSystemSolveResult.route(): UniffiOrdinaryDifferentialEquationSystemRoute?`

Returns `UniffiOrdinaryDifferentialEquationSystemRoute?`.

<a id="placement-placement.kotlin.kotlin_object.uniffiordinarydifferentialequationsystemsolveresult_verification.a1bfdb8817da"></a>
### UniffiOrdinaryDifferentialEquationSystemSolveResult.verification

`UniffiOrdinaryDifferentialEquationSystemSolveResult.verification(): UniffiOrdinaryDifferentialEquationVerificationVerdict?`

Returns `UniffiOrdinaryDifferentialEquationVerificationVerdict?`.

<a id="placement-placement.kotlin.kotlin_object.uniffiordinarydifferentialequationsystemverificationreport_generality.2b5c84d1d408"></a>
### UniffiOrdinaryDifferentialEquationSystemVerificationReport.generality

`UniffiOrdinaryDifferentialEquationSystemVerificationReport.generality(): UniffiOrdinaryDifferentialEquationGeneralityVerdict`

Returns `UniffiOrdinaryDifferentialEquationGeneralityVerdict`.

<a id="placement-placement.kotlin.kotlin_object.uniffiordinarydifferentialequationsystemverificationreport_requiredrank.e2bf6394af98"></a>
### UniffiOrdinaryDifferentialEquationSystemVerificationReport.requiredRank

`UniffiOrdinaryDifferentialEquationSystemVerificationReport.requiredRank(): kotlin.ULong`

Returns `kotlin.ULong`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationarbitraryfunction_arity.8b9b5bd4e4c0"></a>
### UniffiPartialDifferentialEquationArbitraryFunction.arity

`UniffiPartialDifferentialEquationArbitraryFunction.arity(): kotlin.ULong`

Returns `kotlin.ULong`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationarbitraryfunction_name.c7368587a428"></a>
### UniffiPartialDifferentialEquationArbitraryFunction.name

`UniffiPartialDifferentialEquationArbitraryFunction.name(): kotlin.String`

Returns `kotlin.String`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationcanonicalizationresult_canonicalized.d883bd9fdc14"></a>
### UniffiPartialDifferentialEquationCanonicalizationResult.canonicalized

`UniffiPartialDifferentialEquationCanonicalizationResult.canonicalized(): kotlin.Boolean`

Returns `kotlin.Boolean`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationcanonicalizationresult_decline.2714d3e64129"></a>
### UniffiPartialDifferentialEquationCanonicalizationResult.decline

`UniffiPartialDifferentialEquationCanonicalizationResult.decline(): UniffiPartialDifferentialEquationCanonicalizationDecline?`

Returns `UniffiPartialDifferentialEquationCanonicalizationDecline?`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationcanonicalizationresult_principalform.5b330efec438"></a>
### UniffiPartialDifferentialEquationCanonicalizationResult.principalForm

`UniffiPartialDifferentialEquationCanonicalizationResult.principalForm(): UniffiPartialDifferentialEquationCanonicalPrincipalForm?`

Returns `UniffiPartialDifferentialEquationCanonicalPrincipalForm?`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationcanonicalizationresult_transformationdecline.def2bc26ab1b"></a>
### UniffiPartialDifferentialEquationCanonicalizationResult.transformationDecline

`UniffiPartialDifferentialEquationCanonicalizationResult.transformationDecline(): UniffiPartialDifferentialEquationTransformationDecline?`

Returns `UniffiPartialDifferentialEquationTransformationDecline?`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationclassification_coefficientdata.43a776bbb86f"></a>
### UniffiPartialDifferentialEquationClassification.coefficientData

`UniffiPartialDifferentialEquationClassification.coefficientData(): UniffiPartialDifferentialEquationCoefficientData`

Returns `UniffiPartialDifferentialEquationCoefficientData`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationclassification_linearity.a2ecc68fab09"></a>
### UniffiPartialDifferentialEquationClassification.linearity

`UniffiPartialDifferentialEquationClassification.linearity(): UniffiPartialDifferentialEquationLinearity`

Returns `UniffiPartialDifferentialEquationLinearity`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationclassification_methodcandidates.08a4db6c78e5"></a>
### UniffiPartialDifferentialEquationClassification.methodCandidates

`UniffiPartialDifferentialEquationClassification.methodCandidates(): List<UniffiPartialDifferentialEquationMethodCandidate>`

Returns `List<UniffiPartialDifferentialEquationMethodCandidate>`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationclassification_order.d3d9c88a69c7"></a>
### UniffiPartialDifferentialEquationClassification.order

`UniffiPartialDifferentialEquationClassification.order(): kotlin.ULong`

Returns `kotlin.ULong`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationclassification_secondorderprincipalpart.e64791837193"></a>
### UniffiPartialDifferentialEquationClassification.secondOrderPrincipalPart

`UniffiPartialDifferentialEquationClassification.secondOrderPrincipalPart(): UniffiPartialDifferentialEquationPrincipalPart?`

Returns `UniffiPartialDifferentialEquationPrincipalPart?`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationcoefficientdata_fullcoefficients.cd5d640cbac4"></a>
### UniffiPartialDifferentialEquationCoefficientData.fullCoefficients

`UniffiPartialDifferentialEquationCoefficientData.fullCoefficients(): List<UniffiPartialDifferentialEquationJetCoefficient>?`

Returns `List<UniffiPartialDifferentialEquationJetCoefficient>?`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationcoefficientdata_highestordercoefficients.358bf0b0ed58"></a>
### UniffiPartialDifferentialEquationCoefficientData.highestOrderCoefficients

`UniffiPartialDifferentialEquationCoefficientData.highestOrderCoefficients(): List<UniffiPartialDifferentialEquationJetCoefficient>?`

Returns `List<UniffiPartialDifferentialEquationJetCoefficient>?`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationcoefficientdata_homogeneous.d676eb7ef957"></a>
### UniffiPartialDifferentialEquationCoefficientData.homogeneous

`UniffiPartialDifferentialEquationCoefficientData.homogeneous(): kotlin.Boolean?`

Returns `kotlin.Boolean?`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationcoefficientdata_remainder.b2d4d965ce3e"></a>
### UniffiPartialDifferentialEquationCoefficientData.remainder

`UniffiPartialDifferentialEquationCoefficientData.remainder(): UniffiExpression?`

Returns `UniffiExpression?`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationcoordinatechange_forwardcoordinates.d9778d343354"></a>
### UniffiPartialDifferentialEquationCoordinateChange.forwardCoordinates

`UniffiPartialDifferentialEquationCoordinateChange.forwardCoordinates(): List<UniffiExpression>`

Returns `List<UniffiExpression>`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationcoordinatechange_inversecoordinates.70904aa6e8ec"></a>
### UniffiPartialDifferentialEquationCoordinateChange.inverseCoordinates

`UniffiPartialDifferentialEquationCoordinateChange.inverseCoordinates(): List<UniffiExpression>`

Returns `List<UniffiExpression>`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationcoordinatechange_sourcevariables.630d5e08f88c"></a>
### UniffiPartialDifferentialEquationCoordinateChange.sourceVariables

`UniffiPartialDifferentialEquationCoordinateChange.sourceVariables(): List<kotlin.String>`

Returns `List<kotlin.String>`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationcoordinatechange_targetdependentfunction.9dc17aefe0b7"></a>
### UniffiPartialDifferentialEquationCoordinateChange.targetDependentFunction

`UniffiPartialDifferentialEquationCoordinateChange.targetDependentFunction(): kotlin.String`

Returns `kotlin.String`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationcoordinatechange_targetvariables.f368730afe6c"></a>
### UniffiPartialDifferentialEquationCoordinateChange.targetVariables

`UniffiPartialDifferentialEquationCoordinateChange.targetVariables(): List<kotlin.String>`

Returns `List<kotlin.String>`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationmethodcandidate_method.34ecf7a2782c"></a>
### UniffiPartialDifferentialEquationMethodCandidate.method

`UniffiPartialDifferentialEquationMethodCandidate.method(): UniffiPartialDifferentialEquationMethod`

Returns `UniffiPartialDifferentialEquationMethod`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationmethodcandidate_proofobligations.eb76cd474828"></a>
### UniffiPartialDifferentialEquationMethodCandidate.proofObligations

`UniffiPartialDifferentialEquationMethodCandidate.proofObligations(): List<UniffiPartialDifferentialEquationProofObligation>`

Returns `List<UniffiPartialDifferentialEquationProofObligation>`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationpointsymmetryaction_admitsadditivesolutionsymmetry.a2f406bb7732"></a>
### UniffiPartialDifferentialEquationPointSymmetryAction.admitsAdditiveSolutionSymmetry

`UniffiPartialDifferentialEquationPointSymmetryAction.admitsAdditiveSolutionSymmetry(): kotlin.Boolean`

Returns `kotlin.Boolean`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationpointsymmetryaction_amplitude.8cb28f65ed60"></a>
### UniffiPartialDifferentialEquationPointSymmetryAction.amplitude

`UniffiPartialDifferentialEquationPointSymmetryAction.amplitude(): UniffiExpression?`

Returns `UniffiExpression?`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationpointsymmetryaction_appliedtoseed.4053299a3cfa"></a>
### UniffiPartialDifferentialEquationPointSymmetryAction.appliedToSeed

`UniffiPartialDifferentialEquationPointSymmetryAction.appliedToSeed(seed: UniffiUndefinedFunction): UniffiExpression`

Returns `UniffiExpression`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationpointsymmetryaction_appliedtoseedwithadditivesolution.236159f6d310"></a>
### UniffiPartialDifferentialEquationPointSymmetryAction.appliedToSeedWithAdditiveSolution

`UniffiPartialDifferentialEquationPointSymmetryAction.appliedToSeedWithAdditiveSolution(seed: UniffiUndefinedFunction, additiveSolution: UniffiUndefinedFunction): UniffiExpression`

Returns `UniffiExpression`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationpointsymmetryaction_decline.e6fa93a8ab2b"></a>
### UniffiPartialDifferentialEquationPointSymmetryAction.decline

`UniffiPartialDifferentialEquationPointSymmetryAction.decline(): UniffiPartialDifferentialEquationSymmetryActionDecline?`

Returns `UniffiPartialDifferentialEquationSymmetryActionDecline?`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationpointsymmetryaction_intertwining.062bb6d49526"></a>
### UniffiPartialDifferentialEquationPointSymmetryAction.intertwining

`UniffiPartialDifferentialEquationPointSymmetryAction.intertwining(): UniffiPartialDifferentialEquationVerificationVerdict?`

Returns `UniffiPartialDifferentialEquationVerificationVerdict?`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationpointsymmetryaction_invertibility.306422dc0f04"></a>
### UniffiPartialDifferentialEquationPointSymmetryAction.invertibility

`UniffiPartialDifferentialEquationPointSymmetryAction.invertibility(): UniffiPartialDifferentialEquationVerificationVerdict?`

Returns `UniffiPartialDifferentialEquationVerificationVerdict?`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationpointsymmetryaction_multiplier.02a2c003e45a"></a>
### UniffiPartialDifferentialEquationPointSymmetryAction.multiplier

`UniffiPartialDifferentialEquationPointSymmetryAction.multiplier(): UniffiExpression?`

Returns `UniffiExpression?`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationpointsymmetryaction_outstandingobligations.4a3b6f77010d"></a>
### UniffiPartialDifferentialEquationPointSymmetryAction.outstandingObligations

`UniffiPartialDifferentialEquationPointSymmetryAction.outstandingObligations(): List<UniffiPartialDifferentialEquationSymmetryObligation>`

Returns `List<UniffiPartialDifferentialEquationSymmetryObligation>`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationpointsymmetryaction_parameters.f447a7020339"></a>
### UniffiPartialDifferentialEquationPointSymmetryAction.parameters

`UniffiPartialDifferentialEquationPointSymmetryAction.parameters(): List<UniffiExpression>`

Returns `List<UniffiExpression>`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationpointsymmetryaction_pointsymmetrydecline.6ac771e34a65"></a>
### UniffiPartialDifferentialEquationPointSymmetryAction.pointSymmetryDecline

`UniffiPartialDifferentialEquationPointSymmetryAction.pointSymmetryDecline(): UniffiPartialDifferentialEquationPointSymmetryDecline?`

Returns `UniffiPartialDifferentialEquationPointSymmetryDecline?`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationpointsymmetryaction_transformedcoordinates.341d0e9e50a1"></a>
### UniffiPartialDifferentialEquationPointSymmetryAction.transformedCoordinates

`UniffiPartialDifferentialEquationPointSymmetryAction.transformedCoordinates(): List<UniffiExpression>`

Returns `List<UniffiExpression>`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationpointsymmetryalgebra_admitsadditivesolutionsymmetry.6890d26b29ee"></a>
### UniffiPartialDifferentialEquationPointSymmetryAlgebra.admitsAdditiveSolutionSymmetry

`UniffiPartialDifferentialEquationPointSymmetryAlgebra.admitsAdditiveSolutionSymmetry(): kotlin.Boolean`

Returns `kotlin.Boolean`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationpointsymmetryalgebra_basis.6c6dfec7fca8"></a>
### UniffiPartialDifferentialEquationPointSymmetryAlgebra.basis

`UniffiPartialDifferentialEquationPointSymmetryAlgebra.basis(): List<UniffiPartialDifferentialEquationPointSymmetryGenerator>`

Returns `List<UniffiPartialDifferentialEquationPointSymmetryGenerator>`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationpointsymmetryalgebra_decline.0e822f10e840"></a>
### UniffiPartialDifferentialEquationPointSymmetryAlgebra.decline

`UniffiPartialDifferentialEquationPointSymmetryAlgebra.decline(): UniffiPartialDifferentialEquationPointSymmetryDecline?`

Returns `UniffiPartialDifferentialEquationPointSymmetryDecline?`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationpointsymmetryalgebra_determiningequations.fc3f0212d248"></a>
### UniffiPartialDifferentialEquationPointSymmetryAlgebra.determiningEquations

`UniffiPartialDifferentialEquationPointSymmetryAlgebra.determiningEquations(): List<UniffiExpression>`

Returns `List<UniffiExpression>`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationpointsymmetryalgebra_generalgenerator.69d12d4b50a6"></a>
### UniffiPartialDifferentialEquationPointSymmetryAlgebra.generalGenerator

`UniffiPartialDifferentialEquationPointSymmetryAlgebra.generalGenerator(): UniffiPartialDifferentialEquationPointSymmetryGenerator?`

Returns `UniffiPartialDifferentialEquationPointSymmetryGenerator?`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationpointsymmetryalgebra_outstandingobligations.10de72c92694"></a>
### UniffiPartialDifferentialEquationPointSymmetryAlgebra.outstandingObligations

`UniffiPartialDifferentialEquationPointSymmetryAlgebra.outstandingObligations(): List<UniffiPartialDifferentialEquationSymmetryObligation>`

Returns `List<UniffiPartialDifferentialEquationSymmetryObligation>`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationpointsymmetryalgebra_parameters.917dafa8b256"></a>
### UniffiPartialDifferentialEquationPointSymmetryAlgebra.parameters

`UniffiPartialDifferentialEquationPointSymmetryAlgebra.parameters(): List<UniffiExpression>`

Returns `List<UniffiExpression>`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationpointsymmetrygenerator_coordinateinfinitesimals.8d6d47bcc7f3"></a>
### UniffiPartialDifferentialEquationPointSymmetryGenerator.coordinateInfinitesimals

`UniffiPartialDifferentialEquationPointSymmetryGenerator.coordinateInfinitesimals(): List<UniffiExpression>`

Returns `List<UniffiExpression>`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationpointsymmetrygenerator_dependentinfinitesimal.58fbd23d613a"></a>
### UniffiPartialDifferentialEquationPointSymmetryGenerator.dependentInfinitesimal

`UniffiPartialDifferentialEquationPointSymmetryGenerator.dependentInfinitesimal(): UniffiExpression`

Returns `UniffiExpression`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationprincipalpart_derivativecoefficients.b2ec18259b1f"></a>
### UniffiPartialDifferentialEquationPrincipalPart.derivativeCoefficients

`UniffiPartialDifferentialEquationPrincipalPart.derivativeCoefficients(): List<UniffiPartialDifferentialEquationPrincipalCoefficient>`

Returns `List<UniffiPartialDifferentialEquationPrincipalCoefficient>`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationproblem_boundaryconditions.c5850894fc72"></a>
### UniffiPartialDifferentialEquationProblem.boundaryConditions

`UniffiPartialDifferentialEquationProblem.boundaryConditions(): List<UniffiExpression>`

Returns `List<UniffiExpression>`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationproblem_dependentfunction.baf08ad50e90"></a>
### UniffiPartialDifferentialEquationProblem.dependentFunction

`UniffiPartialDifferentialEquationProblem.dependentFunction(): kotlin.String`

Returns `kotlin.String`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationproblem_independentvariables.ebac9cae56dd"></a>
### UniffiPartialDifferentialEquationProblem.independentVariables

`UniffiPartialDifferentialEquationProblem.independentVariables(): List<kotlin.String>`

Returns `List<kotlin.String>`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationproblem_initialconditions.917863c9f997"></a>
### UniffiPartialDifferentialEquationProblem.initialConditions

`UniffiPartialDifferentialEquationProblem.initialConditions(): List<UniffiExpression>`

Returns `List<UniffiExpression>`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsecondorderclassification_cases.bb9a3b4afc85"></a>
### UniffiPartialDifferentialEquationSecondOrderClassification.cases

`UniffiPartialDifferentialEquationSecondOrderClassification.cases(): List<UniffiPartialDifferentialEquationSecondOrderTypeCase>`

Returns `List<UniffiPartialDifferentialEquationSecondOrderTypeCase>`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsecondorderclassification_decline.6cc70681d71c"></a>
### UniffiPartialDifferentialEquationSecondOrderClassification.decline

`UniffiPartialDifferentialEquationSecondOrderClassification.decline(): UniffiPartialDifferentialEquationSecondOrderClassificationDecline?`

Returns `UniffiPartialDifferentialEquationSecondOrderClassificationDecline?`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsecondorderclassification_discriminant.1113bce4edf0"></a>
### UniffiPartialDifferentialEquationSecondOrderClassification.discriminant

`UniffiPartialDifferentialEquationSecondOrderClassification.discriminant(): UniffiExpression`

Returns `UniffiExpression`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsecondorderclassification_equationtype.753b8563ef98"></a>
### UniffiPartialDifferentialEquationSecondOrderClassification.equationType

`UniffiPartialDifferentialEquationSecondOrderClassification.equationType(): UniffiPartialDifferentialEquationSecondOrderType?`

Returns `UniffiPartialDifferentialEquationSecondOrderType?`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsecondorderclassification_principalmatrix.ccf34d3f5704"></a>
### UniffiPartialDifferentialEquationSecondOrderClassification.principalMatrix

`UniffiPartialDifferentialEquationSecondOrderClassification.principalMatrix(): UniffiMatrix`

Returns `UniffiMatrix`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsecondorderclassification_proofobligations.2a20606f89d8"></a>
### UniffiPartialDifferentialEquationSecondOrderClassification.proofObligations

`UniffiPartialDifferentialEquationSecondOrderClassification.proofObligations(): List<UniffiPartialDifferentialEquationProofObligation>`

Returns `List<UniffiPartialDifferentialEquationProofObligation>`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsecondordertypecase_condition.b0d2440c0ae1"></a>
### UniffiPartialDifferentialEquationSecondOrderTypeCase.condition

`UniffiPartialDifferentialEquationSecondOrderTypeCase.condition(): UniffiAssumptionProposition`

Returns `UniffiAssumptionProposition`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsecondordertypecase_equationtype.f745d20f783d"></a>
### UniffiPartialDifferentialEquationSecondOrderTypeCase.equationType

`UniffiPartialDifferentialEquationSecondOrderTypeCase.equationType(): UniffiPartialDifferentialEquationSecondOrderType`

Returns `UniffiPartialDifferentialEquationSecondOrderType`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationseparatedequation_independentvariablename.d4bcda7bd60e"></a>
### UniffiPartialDifferentialEquationSeparatedEquation.independentVariableName

`UniffiPartialDifferentialEquationSeparatedEquation.independentVariableName(): kotlin.String`

Returns `kotlin.String`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationseparatedequation_residual.bf96b56bcd8b"></a>
### UniffiPartialDifferentialEquationSeparatedEquation.residual

`UniffiPartialDifferentialEquationSeparatedEquation.residual(): UniffiExpression`

Returns `UniffiExpression`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationseparationresult_firstequation.0f07c1ea56fc"></a>
### UniffiPartialDifferentialEquationSeparationResult.firstEquation

`UniffiPartialDifferentialEquationSeparationResult.firstEquation(): UniffiPartialDifferentialEquationSeparatedEquation`

Returns `UniffiPartialDifferentialEquationSeparatedEquation`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationseparationresult_reconstruction.faa79360ff3d"></a>
### UniffiPartialDifferentialEquationSeparationResult.reconstruction

`UniffiPartialDifferentialEquationSeparationResult.reconstruction(): UniffiExpression`

Returns `UniffiExpression`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationseparationresult_secondequation.4e298415886f"></a>
### UniffiPartialDifferentialEquationSeparationResult.secondEquation

`UniffiPartialDifferentialEquationSeparationResult.secondEquation(): UniffiPartialDifferentialEquationSeparatedEquation`

Returns `UniffiPartialDifferentialEquationSeparatedEquation`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationseparationresult_separationconstant.71b86c5eccf1"></a>
### UniffiPartialDifferentialEquationSeparationResult.separationConstant

`UniffiPartialDifferentialEquationSeparationResult.separationConstant(): UniffiExpression`

Returns `UniffiExpression`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationseparationresult_verification.c5ae8f03df09"></a>
### UniffiPartialDifferentialEquationSeparationResult.verification

`UniffiPartialDifferentialEquationSeparationResult.verification(): UniffiPartialDifferentialEquationVerificationVerdict`

Returns `UniffiPartialDifferentialEquationVerificationVerdict`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsimilaritysolution_decline.5a2a43aab25a"></a>
### UniffiPartialDifferentialEquationSimilaritySolution.decline

`UniffiPartialDifferentialEquationSimilaritySolution.decline(): UniffiPartialDifferentialEquationSimilarityReductionDecline?`

Returns `UniffiPartialDifferentialEquationSimilarityReductionDecline?`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsimilaritysolution_invariant.daedf4ce09fb"></a>
### UniffiPartialDifferentialEquationSimilaritySolution.invariant

`UniffiPartialDifferentialEquationSimilaritySolution.invariant(): UniffiExpression?`

Returns `UniffiExpression?`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsimilaritysolution_liftedconstants.a10c5bbe1341"></a>
### UniffiPartialDifferentialEquationSimilaritySolution.liftedConstants

`UniffiPartialDifferentialEquationSimilaritySolution.liftedConstants(): List<UniffiExpression>`

Returns `List<UniffiExpression>`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsimilaritysolution_liftedfamily.a8d6448120b8"></a>
### UniffiPartialDifferentialEquationSimilaritySolution.liftedFamily

`UniffiPartialDifferentialEquationSimilaritySolution.liftedFamily(): UniffiPartialDifferentialEquationSolutionFamily?`

Returns `UniffiPartialDifferentialEquationSolutionFamily?`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsimilaritysolution_liftedfamilyverification.eb4cc12c8cac"></a>
### UniffiPartialDifferentialEquationSimilaritySolution.liftedFamilyVerification

`UniffiPartialDifferentialEquationSimilaritySolution.liftedFamilyVerification(): UniffiPartialDifferentialEquationVerificationVerdict?`

Returns `UniffiPartialDifferentialEquationVerificationVerdict?`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsimilaritysolution_multiplier.b735922c74f5"></a>
### UniffiPartialDifferentialEquationSimilaritySolution.multiplier

`UniffiPartialDifferentialEquationSimilaritySolution.multiplier(): UniffiExpression?`

Returns `UniffiExpression?`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsimilaritysolution_outstandingobligations.cdef33eb8b93"></a>
### UniffiPartialDifferentialEquationSimilaritySolution.outstandingObligations

`UniffiPartialDifferentialEquationSimilaritySolution.outstandingObligations(): List<UniffiPartialDifferentialEquationSymmetryObligation>`

Returns `List<UniffiPartialDifferentialEquationSymmetryObligation>`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsimilaritysolution_reducedequation.0038a769f6d7"></a>
### UniffiPartialDifferentialEquationSimilaritySolution.reducedEquation

`UniffiPartialDifferentialEquationSimilaritySolution.reducedEquation(): UniffiExpression?`

Returns `UniffiExpression?`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsimilaritysolution_similarityvariable.7f52f2a05d40"></a>
### UniffiPartialDifferentialEquationSimilaritySolution.similarityVariable

`UniffiPartialDifferentialEquationSimilaritySolution.similarityVariable(): UniffiExpression?`

Returns `UniffiExpression?`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsimilaritysolution_weight.4917cc3bf5df"></a>
### UniffiPartialDifferentialEquationSimilaritySolution.weight

`UniffiPartialDifferentialEquationSimilaritySolution.weight(): UniffiExpression?`

Returns `UniffiExpression?`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsolutionfamily_arbitraryfunctions.c48f2615fac2"></a>
### UniffiPartialDifferentialEquationSolutionFamily.arbitraryFunctions

`UniffiPartialDifferentialEquationSolutionFamily.arbitraryFunctions(): List<UniffiPartialDifferentialEquationArbitraryFunction>`

Returns `List<UniffiPartialDifferentialEquationArbitraryFunction>`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsolutionfamily_form.884b095aac42"></a>
### UniffiPartialDifferentialEquationSolutionFamily.form

`UniffiPartialDifferentialEquationSolutionFamily.form(): UniffiPartialDifferentialEquationSolutionForm`

Returns `UniffiPartialDifferentialEquationSolutionForm`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsolutionfamily_proofobligations.6faa98af5269"></a>
### UniffiPartialDifferentialEquationSolutionFamily.proofObligations

`UniffiPartialDifferentialEquationSolutionFamily.proofObligations(): List<UniffiPartialDifferentialEquationProofObligation>`

Returns `List<UniffiPartialDifferentialEquationProofObligation>`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsolutionprovenance_dischargedobligations.f745c369b8fe"></a>
### UniffiPartialDifferentialEquationSolutionProvenance.dischargedObligations

`UniffiPartialDifferentialEquationSolutionProvenance.dischargedObligations(): List<UniffiPartialDifferentialEquationProofObligation>`

Returns `List<UniffiPartialDifferentialEquationProofObligation>`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsolutionprovenance_linearity.1a9a03c2f015"></a>
### UniffiPartialDifferentialEquationSolutionProvenance.linearity

`UniffiPartialDifferentialEquationSolutionProvenance.linearity(): UniffiPartialDifferentialEquationLinearity`

Returns `UniffiPartialDifferentialEquationLinearity`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsolutionprovenance_method.88638433c881"></a>
### UniffiPartialDifferentialEquationSolutionProvenance.method

`UniffiPartialDifferentialEquationSolutionProvenance.method(): UniffiPartialDifferentialEquationMethod`

Returns `UniffiPartialDifferentialEquationMethod`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsolutionprovenance_order.3ab93a9efbd2"></a>
### UniffiPartialDifferentialEquationSolutionProvenance.order

`UniffiPartialDifferentialEquationSolutionProvenance.order(): kotlin.ULong`

Returns `kotlin.ULong`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsolveresult_decline.1dc9fbb95650"></a>
### UniffiPartialDifferentialEquationSolveResult.decline

`UniffiPartialDifferentialEquationSolveResult.decline(): UniffiPartialDifferentialEquationSolveDecline?`

Returns `UniffiPartialDifferentialEquationSolveDecline?`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsolveresult_method.c8001121bf27"></a>
### UniffiPartialDifferentialEquationSolveResult.method

`UniffiPartialDifferentialEquationSolveResult.method(): UniffiPartialDifferentialEquationMethod?`

Returns `UniffiPartialDifferentialEquationMethod?`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsolveresult_provenance.c9db7c4e6a33"></a>
### UniffiPartialDifferentialEquationSolveResult.provenance

`UniffiPartialDifferentialEquationSolveResult.provenance(): UniffiPartialDifferentialEquationSolutionProvenance?`

Returns `UniffiPartialDifferentialEquationSolutionProvenance?`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsolveresult_solution.446a02f026ab"></a>
### UniffiPartialDifferentialEquationSolveResult.solution

`UniffiPartialDifferentialEquationSolveResult.solution(): UniffiPartialDifferentialEquationSolutionFamily?`

Returns `UniffiPartialDifferentialEquationSolutionFamily?`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsolveresult_verification.60084964e576"></a>
### UniffiPartialDifferentialEquationSolveResult.verification

`UniffiPartialDifferentialEquationSolveResult.verification(): UniffiPartialDifferentialEquationVerificationReport?`

Returns `UniffiPartialDifferentialEquationVerificationReport?`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationtransformationresult_coordinatechange.80de44dbfa68"></a>
### UniffiPartialDifferentialEquationTransformationResult.coordinateChange

`UniffiPartialDifferentialEquationTransformationResult.coordinateChange(): UniffiPartialDifferentialEquationCoordinateChange?`

Returns `UniffiPartialDifferentialEquationCoordinateChange?`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationtransformationresult_decline.b398799e1f8d"></a>
### UniffiPartialDifferentialEquationTransformationResult.decline

`UniffiPartialDifferentialEquationTransformationResult.decline(): UniffiPartialDifferentialEquationTransformationDecline?`

Returns `UniffiPartialDifferentialEquationTransformationDecline?`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationtransformationresult_normalizationmultiplier.708c4541715e"></a>
### UniffiPartialDifferentialEquationTransformationResult.normalizationMultiplier

`UniffiPartialDifferentialEquationTransformationResult.normalizationMultiplier(): UniffiExpression?`

Returns `UniffiExpression?`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationtransformationresult_targetproblem.18ce7970765c"></a>
### UniffiPartialDifferentialEquationTransformationResult.targetProblem

`UniffiPartialDifferentialEquationTransformationResult.targetProblem(): UniffiPartialDifferentialEquationProblem?`

Returns `UniffiPartialDifferentialEquationProblem?`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationtransformationresult_transformed.b24977bd374b"></a>
### UniffiPartialDifferentialEquationTransformationResult.transformed

`UniffiPartialDifferentialEquationTransformationResult.transformed(): kotlin.Boolean`

Returns `kotlin.Boolean`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationtransformationverificationreport_claimedgoverningresidual.861488f1a083"></a>
### UniffiPartialDifferentialEquationTransformationVerificationReport.claimedGoverningResidual

`UniffiPartialDifferentialEquationTransformationVerificationReport.claimedGoverningResidual(): UniffiExpression`

Returns `UniffiExpression`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationtransformationverificationreport_compositionresiduals.8f4f6276ad4f"></a>
### UniffiPartialDifferentialEquationTransformationVerificationReport.compositionResiduals

`UniffiPartialDifferentialEquationTransformationVerificationReport.compositionResiduals(): List<UniffiExpression>`

Returns `List<UniffiExpression>`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationtransformationverificationreport_principalcongruenceresiduals.c0293bc2e737"></a>
### UniffiPartialDifferentialEquationTransformationVerificationReport.principalCongruenceResiduals

`UniffiPartialDifferentialEquationTransformationVerificationReport.principalCongruenceResiduals(): List<UniffiExpression>`

Returns `List<UniffiExpression>`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationtransformationverificationreport_transformedgoverningresidual.e9b04a7820fe"></a>
### UniffiPartialDifferentialEquationTransformationVerificationReport.transformedGoverningResidual

`UniffiPartialDifferentialEquationTransformationVerificationReport.transformedGoverningResidual(): UniffiExpression`

Returns `UniffiExpression`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationverificationreport_boundaryconditionresiduals.dc81e5020466"></a>
### UniffiPartialDifferentialEquationVerificationReport.boundaryConditionResiduals

`UniffiPartialDifferentialEquationVerificationReport.boundaryConditionResiduals(): List<UniffiPartialDifferentialEquationVerificationResidual>`

Returns `List<UniffiPartialDifferentialEquationVerificationResidual>`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationverificationreport_explicitbranch.52a64b46bb22"></a>
### UniffiPartialDifferentialEquationVerificationReport.explicitBranch

`UniffiPartialDifferentialEquationVerificationReport.explicitBranch(): UniffiExpression?`

Returns `UniffiExpression?`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationverificationreport_governingresidual.3906f75f170c"></a>
### UniffiPartialDifferentialEquationVerificationReport.governingResidual

`UniffiPartialDifferentialEquationVerificationReport.governingResidual(): UniffiPartialDifferentialEquationVerificationResidual`

Returns `UniffiPartialDifferentialEquationVerificationResidual`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationverificationreport_inconclusivereason.8923506bffef"></a>
### UniffiPartialDifferentialEquationVerificationReport.inconclusiveReason

`UniffiPartialDifferentialEquationVerificationReport.inconclusiveReason(): UniffiPartialDifferentialEquationVerificationInconclusiveReason?`

Returns `UniffiPartialDifferentialEquationVerificationInconclusiveReason?`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationverificationreport_initialconditionresiduals.e72daf775d37"></a>
### UniffiPartialDifferentialEquationVerificationReport.initialConditionResiduals

`UniffiPartialDifferentialEquationVerificationReport.initialConditionResiduals(): List<UniffiPartialDifferentialEquationVerificationResidual>`

Returns `List<UniffiPartialDifferentialEquationVerificationResidual>`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationverificationreport_proofobligations.979578f00a74"></a>
### UniffiPartialDifferentialEquationVerificationReport.proofObligations

`UniffiPartialDifferentialEquationVerificationReport.proofObligations(): List<UniffiPartialDifferentialEquationProofObligation>`

Returns `List<UniffiPartialDifferentialEquationProofObligation>`.

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationverificationresidual_residual.eeb7be444c3d"></a>
### UniffiPartialDifferentialEquationVerificationResidual.residual

`UniffiPartialDifferentialEquationVerificationResidual.residual(): UniffiExpression`

Returns `UniffiExpression`.

<a id="placement-placement.kotlin.kotlin_object.uniffisegment2d_length.2eb9b1d381fe"></a>
### UniffiSegment2d.length

`UniffiSegment2d.length(): UniffiExpression`

Returns `UniffiExpression`.

<a id="placement-placement.kotlin.kotlin_object.uniffisession_canonicalizepartialdifferentialequation.2c499c14272f"></a>
### UniffiSession.canonicalizePartialDifferentialEquation

`UniffiSession.canonicalizePartialDifferentialEquation(problem: UniffiPartialDifferentialEquationProblem): UniffiPartialDifferentialEquationCanonicalizationResult`

Returns `UniffiPartialDifferentialEquationCanonicalizationResult`.

<a id="placement-placement.kotlin.kotlin_object.uniffisession_changepartialdifferentialequationvariables.5c186721c3a9"></a>
### UniffiSession.changePartialDifferentialEquationVariables

`UniffiSession.changePartialDifferentialEquationVariables(problem: UniffiPartialDifferentialEquationProblem, targetVariables: List<kotlin.String>, forwardCoordinates: List<UniffiExpression>?, inverseCoordinates: List<UniffiExpression>?, targetDependentFunction: UniffiUndefinedFunction?): UniffiPartialDifferentialEquationTransformationResult`

Returns `UniffiPartialDifferentialEquationTransformationResult`.

<a id="placement-placement.kotlin.kotlin_object.uniffisession_classifypartialdifferentialequation.c74c475e1590"></a>
### UniffiSession.classifyPartialDifferentialEquation

`UniffiSession.classifyPartialDifferentialEquation(problem: UniffiPartialDifferentialEquationProblem): UniffiPartialDifferentialEquationClassification`

Returns `UniffiPartialDifferentialEquationClassification`.

<a id="placement-placement.kotlin.kotlin_object.uniffisession_classifysecondorderpartialdifferentialequation.703baf9a035f"></a>
### UniffiSession.classifySecondOrderPartialDifferentialEquation

`UniffiSession.classifySecondOrderPartialDifferentialEquation(problem: UniffiPartialDifferentialEquationProblem): UniffiPartialDifferentialEquationSecondOrderClassification`

Returns `UniffiPartialDifferentialEquationSecondOrderClassification`.

<a id="placement-placement.kotlin.kotlin_object.uniffisession_discoverpartialdifferentialequation.5099cd244873"></a>
### UniffiSession.discoverPartialDifferentialEquation

`UniffiSession.discoverPartialDifferentialEquation(equation: UniffiExpression, initialConditions: List<UniffiExpression>, boundaryConditions: List<UniffiExpression>): UniffiPartialDifferentialEquationProblem`

Returns `UniffiPartialDifferentialEquationProblem`.

<a id="placement-placement.kotlin.kotlin_object.uniffisession_explicitpartialdifferentialequationsolution.14d16daccc4d"></a>
### UniffiSession.explicitPartialDifferentialEquationSolution

`UniffiSession.explicitPartialDifferentialEquationSolution(solution: UniffiExpression): UniffiPartialDifferentialEquationSolutionFamily`

Returns `UniffiPartialDifferentialEquationSolutionFamily`.

<a id="placement-placement.kotlin.kotlin_object.uniffisession_implicitpartialdifferentialequationsolution.f3dbdb67e747"></a>
### UniffiSession.implicitPartialDifferentialEquationSolution

`UniffiSession.implicitPartialDifferentialEquationSolution(residual: UniffiExpression): UniffiPartialDifferentialEquationSolutionFamily`

Returns `UniffiPartialDifferentialEquationSolutionFamily`.

<a id="placement-placement.kotlin.kotlin_object.uniffisession_integratedefiniteunderconstraint.42a0d92742c6"></a>
### UniffiSession.integrateDefiniteUnderConstraint

`UniffiSession.integrateDefiniteUnderConstraint(target: UniffiExpression, variable: kotlin.String, lowerBound: UniffiExpression, upperBound: UniffiExpression, constraint: UniffiExpression): UniffiExpression`

Returns `UniffiExpression`.

<a id="placement-placement.kotlin.kotlin_object.uniffisession_partialdifferentialequation.e28459c227bf"></a>
### UniffiSession.partialDifferentialEquation

`UniffiSession.partialDifferentialEquation(equation: UniffiExpression, dependentFunction: UniffiUndefinedFunction, independentVariables: List<kotlin.String>, initialConditions: List<UniffiExpression>, boundaryConditions: List<UniffiExpression>): UniffiPartialDifferentialEquationProblem`

Returns `UniffiPartialDifferentialEquationProblem`.

<a id="placement-placement.kotlin.kotlin_object.uniffisession_partialdifferentialequationarbitraryfunction.91ada8b3159b"></a>
### UniffiSession.partialDifferentialEquationArbitraryFunction

`UniffiSession.partialDifferentialEquationArbitraryFunction(preferredName: kotlin.String, arity: kotlin.ULong): UniffiPartialDifferentialEquationArbitraryFunction`

Returns `UniffiPartialDifferentialEquationArbitraryFunction`.

<a id="placement-placement.kotlin.kotlin_object.uniffisession_separatepartialdifferentialequation.a384b7fd3b11"></a>
### UniffiSession.separatePartialDifferentialEquation

`UniffiSession.separatePartialDifferentialEquation(problem: UniffiPartialDifferentialEquationProblem): UniffiPartialDifferentialEquationSeparationResult`

Returns `UniffiPartialDifferentialEquationSeparationResult`.

<a id="placement-placement.kotlin.kotlin_object.uniffisession_simplifyunderconstraint.9a83406c6d43"></a>
### UniffiSession.simplifyUnderConstraint

`UniffiSession.simplifyUnderConstraint(target: UniffiExpression, constraint: UniffiExpression): UniffiExpression`

Returns `UniffiExpression`.

<a id="placement-placement.kotlin.kotlin_object.uniffisession_solvepartialdifferentialequation.642afa32cc35"></a>
### UniffiSession.solvePartialDifferentialEquation

`UniffiSession.solvePartialDifferentialEquation(problem: UniffiPartialDifferentialEquationProblem, method: UniffiPartialDifferentialEquationMethod): UniffiPartialDifferentialEquationSolveResult`

Returns `UniffiPartialDifferentialEquationSolveResult`.

<a id="placement-placement.kotlin.kotlin_object.uniffisession_solvepartialdifferentialequationwithtransformaxisspecifications.bdcd33f637a7"></a>
### UniffiSession.solvePartialDifferentialEquationWithTransformAxisSpecifications

`UniffiSession.solvePartialDifferentialEquationWithTransformAxisSpecifications(problem: UniffiPartialDifferentialEquationProblem, method: UniffiPartialDifferentialEquationMethod, transformAxisSpecifications: List<kotlin.String>): UniffiPartialDifferentialEquationSolveResult`

Returns `UniffiPartialDifferentialEquationSolveResult`.

<a id="placement-placement.kotlin.kotlin_object.uniffisession_verifypartialdifferentialequationcoordinatetransformation.8a80fda2f10a"></a>
### UniffiSession.verifyPartialDifferentialEquationCoordinateTransformation

`UniffiSession.verifyPartialDifferentialEquationCoordinateTransformation(problem: UniffiPartialDifferentialEquationProblem, transformation: UniffiPartialDifferentialEquationTransformationResult): UniffiPartialDifferentialEquationTransformationVerificationReport`

Returns `UniffiPartialDifferentialEquationTransformationVerificationReport`.

<a id="placement-placement.kotlin.kotlin_object.uniffisession_verifypartialdifferentialequationsolution.4b93805d9887"></a>
### UniffiSession.verifyPartialDifferentialEquationSolution

`UniffiSession.verifyPartialDifferentialEquationSolution(problem: UniffiPartialDifferentialEquationProblem, solution: UniffiPartialDifferentialEquationSolutionFamily): UniffiPartialDifferentialEquationVerificationReport`

Returns `UniffiPartialDifferentialEquationVerificationReport`.

<a id="placement-placement.kotlin.kotlin_object.uniffisetenumeration_elements.7c49be7882fe"></a>
### UniffiSetEnumeration.elements

`UniffiSetEnumeration.elements(): List<UniffiExpression>`

Returns `List<UniffiExpression>`.

<a id="placement-placement.kotlin.kotlin_object.uniffisetenumeration_outcome.b2e7831363ed"></a>
### UniffiSetEnumeration.outcome

`UniffiSetEnumeration.outcome(): UniffiEnumerationVerdict`

Returns `UniffiEnumerationVerdict`.

