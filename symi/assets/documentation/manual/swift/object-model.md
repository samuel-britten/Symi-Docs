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

<a id="placement-placement.swift.swift_object.uniffiexpression_integratedefiniteunderconstraint.7c97ffe7ae03"></a>
### UniffiExpression.integrateDefiniteUnderConstraint

`UniffiExpression.integrateDefiniteUnderConstraint(variable: String, lowerBound: UniffiExpression, upperBound: UniffiExpression, constraint: UniffiExpression) -> UniffiExpression`

Returns `UniffiExpression`.

<a id="placement-placement.swift.swift_object.uniffiexpression_length.5fd4ad9833c8"></a>
### UniffiExpression.length

`UniffiExpression.length() -> UInt64`

Returns `UInt64`.

<a id="placement-placement.swift.swift_object.uniffiexpression_simplifyunderconstraint.a6c17f95a494"></a>
### UniffiExpression.simplifyUnderConstraint

`UniffiExpression.simplifyUnderConstraint(constraint: UniffiExpression) -> UniffiExpression`

Returns `UniffiExpression`.

<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsolveresult_decline.7fc8dae94615"></a>
### UniffiOrdinaryDifferentialEquationSolveResult.decline

`UniffiOrdinaryDifferentialEquationSolveResult.decline() -> UniffiOrdinaryDifferentialEquationSolveDecline?`

Returns `UniffiOrdinaryDifferentialEquationSolveDecline?`.

<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsolveresult_form.e26ff097e5db"></a>
### UniffiOrdinaryDifferentialEquationSolveResult.form

`UniffiOrdinaryDifferentialEquationSolveResult.form() -> UniffiOrdinaryDifferentialEquationSolutionForm?`

Returns `UniffiOrdinaryDifferentialEquationSolutionForm?`.

<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsolveresult_frequencydomainequation.90969cddd80a"></a>
### UniffiOrdinaryDifferentialEquationSolveResult.frequencyDomainEquation

`UniffiOrdinaryDifferentialEquationSolveResult.frequencyDomainEquation() -> UniffiExpression?`

Returns `UniffiExpression?`.

<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsolveresult_generality.4e08359261dd"></a>
### UniffiOrdinaryDifferentialEquationSolveResult.generality

`UniffiOrdinaryDifferentialEquationSolveResult.generality() -> UniffiOrdinaryDifferentialEquationGeneralityVerdict?`

Returns `UniffiOrdinaryDifferentialEquationGeneralityVerdict?`.

<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsolveresult_generatedconstants.80c0ae97cab9"></a>
### UniffiOrdinaryDifferentialEquationSolveResult.generatedConstants

`UniffiOrdinaryDifferentialEquationSolveResult.generatedConstants() -> [UniffiExpression]`

Returns `[UniffiExpression]`.

<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsolveresult_image.271c4e1715b5"></a>
### UniffiOrdinaryDifferentialEquationSolveResult.image

`UniffiOrdinaryDifferentialEquationSolveResult.image() -> UniffiExpression?`

Returns `UniffiExpression?`.

<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsolveresult_method.9769ce64ef1e"></a>
### UniffiOrdinaryDifferentialEquationSolveResult.method

`UniffiOrdinaryDifferentialEquationSolveResult.method() -> UniffiOrdinaryDifferentialEquationMethod`

Returns `UniffiOrdinaryDifferentialEquationMethod`.

<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsolveresult_solution.3c2cdbe4b260"></a>
### UniffiOrdinaryDifferentialEquationSolveResult.solution

`UniffiOrdinaryDifferentialEquationSolveResult.solution() -> UniffiExpression?`

Returns `UniffiExpression?`.

<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsolveresult_verification.cb32d6774cc3"></a>
### UniffiOrdinaryDifferentialEquationSolveResult.verification

`UniffiOrdinaryDifferentialEquationSolveResult.verification() -> UniffiOrdinaryDifferentialEquationVerificationVerdict?`

Returns `UniffiOrdinaryDifferentialEquationVerificationVerdict?`.

<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsystemsolveresult_components.6f4a994b1287"></a>
### UniffiOrdinaryDifferentialEquationSystemSolveResult.components

`UniffiOrdinaryDifferentialEquationSystemSolveResult.components() -> [UniffiExpression]`

Returns `[UniffiExpression]`.

<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsystemsolveresult_decline.501e319777e8"></a>
### UniffiOrdinaryDifferentialEquationSystemSolveResult.decline

`UniffiOrdinaryDifferentialEquationSystemSolveResult.decline() -> UniffiOrdinaryDifferentialEquationSystemSolveDecline?`

Returns `UniffiOrdinaryDifferentialEquationSystemSolveDecline?`.

<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsystemsolveresult_generality.821666cd0fd2"></a>
### UniffiOrdinaryDifferentialEquationSystemSolveResult.generality

`UniffiOrdinaryDifferentialEquationSystemSolveResult.generality() -> UniffiOrdinaryDifferentialEquationGeneralityVerdict?`

Returns `UniffiOrdinaryDifferentialEquationGeneralityVerdict?`.

<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsystemsolveresult_generatedconstants.2c6c8993ba19"></a>
### UniffiOrdinaryDifferentialEquationSystemSolveResult.generatedConstants

`UniffiOrdinaryDifferentialEquationSystemSolveResult.generatedConstants() -> [UniffiExpression]`

Returns `[UniffiExpression]`.

<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsystemsolveresult_method.17db00cad874"></a>
### UniffiOrdinaryDifferentialEquationSystemSolveResult.method

`UniffiOrdinaryDifferentialEquationSystemSolveResult.method() -> UniffiOrdinaryDifferentialEquationSystemMethod`

Returns `UniffiOrdinaryDifferentialEquationSystemMethod`.

<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsystemsolveresult_route.66d2847e769e"></a>
### UniffiOrdinaryDifferentialEquationSystemSolveResult.route

`UniffiOrdinaryDifferentialEquationSystemSolveResult.route() -> UniffiOrdinaryDifferentialEquationSystemRoute?`

Returns `UniffiOrdinaryDifferentialEquationSystemRoute?`.

<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsystemsolveresult_verification.8e43cdf46416"></a>
### UniffiOrdinaryDifferentialEquationSystemSolveResult.verification

`UniffiOrdinaryDifferentialEquationSystemSolveResult.verification() -> UniffiOrdinaryDifferentialEquationVerificationVerdict?`

Returns `UniffiOrdinaryDifferentialEquationVerificationVerdict?`.

<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsystemverificationreport_generality.80fcf261d1af"></a>
### UniffiOrdinaryDifferentialEquationSystemVerificationReport.generality

`UniffiOrdinaryDifferentialEquationSystemVerificationReport.generality() -> UniffiOrdinaryDifferentialEquationGeneralityVerdict`

Returns `UniffiOrdinaryDifferentialEquationGeneralityVerdict`.

<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsystemverificationreport_requiredrank.265c29b5d9a0"></a>
### UniffiOrdinaryDifferentialEquationSystemVerificationReport.requiredRank

`UniffiOrdinaryDifferentialEquationSystemVerificationReport.requiredRank() -> UInt64`

Returns `UInt64`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationarbitraryfunction_arity.d7098d5b5c09"></a>
### UniffiPartialDifferentialEquationArbitraryFunction.arity

`UniffiPartialDifferentialEquationArbitraryFunction.arity() -> UInt64`

Returns `UInt64`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationarbitraryfunction_name.b128ef3985d7"></a>
### UniffiPartialDifferentialEquationArbitraryFunction.name

`UniffiPartialDifferentialEquationArbitraryFunction.name() -> String`

Returns `String`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationcanonicalizationresult_canonicalized.8e6192a90220"></a>
### UniffiPartialDifferentialEquationCanonicalizationResult.canonicalized

`UniffiPartialDifferentialEquationCanonicalizationResult.canonicalized() -> Bool`

Returns `Bool`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationcanonicalizationresult_decline.a56f5af0e1f1"></a>
### UniffiPartialDifferentialEquationCanonicalizationResult.decline

`UniffiPartialDifferentialEquationCanonicalizationResult.decline() -> UniffiPartialDifferentialEquationCanonicalizationDecline?`

Returns `UniffiPartialDifferentialEquationCanonicalizationDecline?`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationcanonicalizationresult_principalform.1644701a914e"></a>
### UniffiPartialDifferentialEquationCanonicalizationResult.principalForm

`UniffiPartialDifferentialEquationCanonicalizationResult.principalForm() -> UniffiPartialDifferentialEquationCanonicalPrincipalForm?`

Returns `UniffiPartialDifferentialEquationCanonicalPrincipalForm?`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationcanonicalizationresult_transformationdecline.764fe16c1fbf"></a>
### UniffiPartialDifferentialEquationCanonicalizationResult.transformationDecline

`UniffiPartialDifferentialEquationCanonicalizationResult.transformationDecline() -> UniffiPartialDifferentialEquationTransformationDecline?`

Returns `UniffiPartialDifferentialEquationTransformationDecline?`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationclassification_coefficientdata.334110672947"></a>
### UniffiPartialDifferentialEquationClassification.coefficientData

`UniffiPartialDifferentialEquationClassification.coefficientData() -> UniffiPartialDifferentialEquationCoefficientData`

Returns `UniffiPartialDifferentialEquationCoefficientData`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationclassification_linearity.b0a0e5b456e2"></a>
### UniffiPartialDifferentialEquationClassification.linearity

`UniffiPartialDifferentialEquationClassification.linearity() -> UniffiPartialDifferentialEquationLinearity`

Returns `UniffiPartialDifferentialEquationLinearity`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationclassification_methodcandidates.3fb146f8cc4b"></a>
### UniffiPartialDifferentialEquationClassification.methodCandidates

`UniffiPartialDifferentialEquationClassification.methodCandidates() -> [UniffiPartialDifferentialEquationMethodCandidate]`

Returns `[UniffiPartialDifferentialEquationMethodCandidate]`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationclassification_order.c888f6a7423f"></a>
### UniffiPartialDifferentialEquationClassification.order

`UniffiPartialDifferentialEquationClassification.order() -> UInt64`

Returns `UInt64`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationclassification_secondorderprincipalpart.c325550bb2cb"></a>
### UniffiPartialDifferentialEquationClassification.secondOrderPrincipalPart

`UniffiPartialDifferentialEquationClassification.secondOrderPrincipalPart() -> UniffiPartialDifferentialEquationPrincipalPart?`

Returns `UniffiPartialDifferentialEquationPrincipalPart?`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationcoefficientdata_fullcoefficients.844a146b8746"></a>
### UniffiPartialDifferentialEquationCoefficientData.fullCoefficients

`UniffiPartialDifferentialEquationCoefficientData.fullCoefficients() -> [UniffiPartialDifferentialEquationJetCoefficient]?`

Returns `[UniffiPartialDifferentialEquationJetCoefficient]?`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationcoefficientdata_highestordercoefficients.4dc7ac67412a"></a>
### UniffiPartialDifferentialEquationCoefficientData.highestOrderCoefficients

`UniffiPartialDifferentialEquationCoefficientData.highestOrderCoefficients() -> [UniffiPartialDifferentialEquationJetCoefficient]?`

Returns `[UniffiPartialDifferentialEquationJetCoefficient]?`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationcoefficientdata_homogeneous.ef0401236d6f"></a>
### UniffiPartialDifferentialEquationCoefficientData.homogeneous

`UniffiPartialDifferentialEquationCoefficientData.homogeneous() -> Bool?`

Returns `Bool?`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationcoefficientdata_remainder.a5833d1eaffc"></a>
### UniffiPartialDifferentialEquationCoefficientData.remainder

`UniffiPartialDifferentialEquationCoefficientData.remainder() -> UniffiExpression?`

Returns `UniffiExpression?`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationcoordinatechange_forwardcoordinates.952f9b134fad"></a>
### UniffiPartialDifferentialEquationCoordinateChange.forwardCoordinates

`UniffiPartialDifferentialEquationCoordinateChange.forwardCoordinates() -> [UniffiExpression]`

Returns `[UniffiExpression]`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationcoordinatechange_inversecoordinates.71b2ceb4b935"></a>
### UniffiPartialDifferentialEquationCoordinateChange.inverseCoordinates

`UniffiPartialDifferentialEquationCoordinateChange.inverseCoordinates() -> [UniffiExpression]`

Returns `[UniffiExpression]`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationcoordinatechange_sourcevariables.e6e2ae880173"></a>
### UniffiPartialDifferentialEquationCoordinateChange.sourceVariables

`UniffiPartialDifferentialEquationCoordinateChange.sourceVariables() -> [String]`

Returns `[String]`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationcoordinatechange_targetdependentfunction.2140561272c4"></a>
### UniffiPartialDifferentialEquationCoordinateChange.targetDependentFunction

`UniffiPartialDifferentialEquationCoordinateChange.targetDependentFunction() -> String`

Returns `String`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationcoordinatechange_targetvariables.7e57c181e4da"></a>
### UniffiPartialDifferentialEquationCoordinateChange.targetVariables

`UniffiPartialDifferentialEquationCoordinateChange.targetVariables() -> [String]`

Returns `[String]`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationmethodcandidate_method.f63da59d04bd"></a>
### UniffiPartialDifferentialEquationMethodCandidate.method

`UniffiPartialDifferentialEquationMethodCandidate.method() -> UniffiPartialDifferentialEquationMethod`

Returns `UniffiPartialDifferentialEquationMethod`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationmethodcandidate_proofobligations.42322db9cf26"></a>
### UniffiPartialDifferentialEquationMethodCandidate.proofObligations

`UniffiPartialDifferentialEquationMethodCandidate.proofObligations() -> [UniffiPartialDifferentialEquationProofObligation]`

Returns `[UniffiPartialDifferentialEquationProofObligation]`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryaction_admitsadditivesolutionsymmetry.7976f19bff6b"></a>
### UniffiPartialDifferentialEquationPointSymmetryAction.admitsAdditiveSolutionSymmetry

`UniffiPartialDifferentialEquationPointSymmetryAction.admitsAdditiveSolutionSymmetry() -> Bool`

Returns `Bool`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryaction_amplitude.0db9a431fa3c"></a>
### UniffiPartialDifferentialEquationPointSymmetryAction.amplitude

`UniffiPartialDifferentialEquationPointSymmetryAction.amplitude() -> UniffiExpression?`

Returns `UniffiExpression?`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryaction_appliedtoseed.89a4fee91394"></a>
### UniffiPartialDifferentialEquationPointSymmetryAction.appliedToSeed

`UniffiPartialDifferentialEquationPointSymmetryAction.appliedToSeed(seed: UniffiUndefinedFunction) -> UniffiExpression`

Returns `UniffiExpression`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryaction_appliedtoseedwithadditivesolution.05d7e781170a"></a>
### UniffiPartialDifferentialEquationPointSymmetryAction.appliedToSeedWithAdditiveSolution

`UniffiPartialDifferentialEquationPointSymmetryAction.appliedToSeedWithAdditiveSolution(seed: UniffiUndefinedFunction, additiveSolution: UniffiUndefinedFunction) -> UniffiExpression`

Returns `UniffiExpression`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryaction_decline.7c4c09e94b1a"></a>
### UniffiPartialDifferentialEquationPointSymmetryAction.decline

`UniffiPartialDifferentialEquationPointSymmetryAction.decline() -> UniffiPartialDifferentialEquationSymmetryActionDecline?`

Returns `UniffiPartialDifferentialEquationSymmetryActionDecline?`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryaction_intertwining.ea1d5bbc74f6"></a>
### UniffiPartialDifferentialEquationPointSymmetryAction.intertwining

`UniffiPartialDifferentialEquationPointSymmetryAction.intertwining() -> UniffiPartialDifferentialEquationVerificationVerdict?`

Returns `UniffiPartialDifferentialEquationVerificationVerdict?`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryaction_invertibility.c3a911864067"></a>
### UniffiPartialDifferentialEquationPointSymmetryAction.invertibility

`UniffiPartialDifferentialEquationPointSymmetryAction.invertibility() -> UniffiPartialDifferentialEquationVerificationVerdict?`

Returns `UniffiPartialDifferentialEquationVerificationVerdict?`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryaction_multiplier.faef52f6b90b"></a>
### UniffiPartialDifferentialEquationPointSymmetryAction.multiplier

`UniffiPartialDifferentialEquationPointSymmetryAction.multiplier() -> UniffiExpression?`

Returns `UniffiExpression?`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryaction_outstandingobligations.63b0fae73713"></a>
### UniffiPartialDifferentialEquationPointSymmetryAction.outstandingObligations

`UniffiPartialDifferentialEquationPointSymmetryAction.outstandingObligations() -> [UniffiPartialDifferentialEquationSymmetryObligation]`

Returns `[UniffiPartialDifferentialEquationSymmetryObligation]`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryaction_parameters.8072339a2f4e"></a>
### UniffiPartialDifferentialEquationPointSymmetryAction.parameters

`UniffiPartialDifferentialEquationPointSymmetryAction.parameters() -> [UniffiExpression]`

Returns `[UniffiExpression]`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryaction_pointsymmetrydecline.de5fe0e89971"></a>
### UniffiPartialDifferentialEquationPointSymmetryAction.pointSymmetryDecline

`UniffiPartialDifferentialEquationPointSymmetryAction.pointSymmetryDecline() -> UniffiPartialDifferentialEquationPointSymmetryDecline?`

Returns `UniffiPartialDifferentialEquationPointSymmetryDecline?`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryaction_transformedcoordinates.642f7c949700"></a>
### UniffiPartialDifferentialEquationPointSymmetryAction.transformedCoordinates

`UniffiPartialDifferentialEquationPointSymmetryAction.transformedCoordinates() -> [UniffiExpression]`

Returns `[UniffiExpression]`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryalgebra_admitsadditivesolutionsymmetry.c4abee53fc7a"></a>
### UniffiPartialDifferentialEquationPointSymmetryAlgebra.admitsAdditiveSolutionSymmetry

`UniffiPartialDifferentialEquationPointSymmetryAlgebra.admitsAdditiveSolutionSymmetry() -> Bool`

Returns `Bool`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryalgebra_basis.dbbaab5c9c1a"></a>
### UniffiPartialDifferentialEquationPointSymmetryAlgebra.basis

`UniffiPartialDifferentialEquationPointSymmetryAlgebra.basis() -> [UniffiPartialDifferentialEquationPointSymmetryGenerator]`

Returns `[UniffiPartialDifferentialEquationPointSymmetryGenerator]`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryalgebra_decline.564c4afc012a"></a>
### UniffiPartialDifferentialEquationPointSymmetryAlgebra.decline

`UniffiPartialDifferentialEquationPointSymmetryAlgebra.decline() -> UniffiPartialDifferentialEquationPointSymmetryDecline?`

Returns `UniffiPartialDifferentialEquationPointSymmetryDecline?`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryalgebra_determiningequations.effc248aebdb"></a>
### UniffiPartialDifferentialEquationPointSymmetryAlgebra.determiningEquations

`UniffiPartialDifferentialEquationPointSymmetryAlgebra.determiningEquations() -> [UniffiExpression]`

Returns `[UniffiExpression]`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryalgebra_generalgenerator.d4a6cd5b775a"></a>
### UniffiPartialDifferentialEquationPointSymmetryAlgebra.generalGenerator

`UniffiPartialDifferentialEquationPointSymmetryAlgebra.generalGenerator() -> UniffiPartialDifferentialEquationPointSymmetryGenerator?`

Returns `UniffiPartialDifferentialEquationPointSymmetryGenerator?`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryalgebra_outstandingobligations.162fde4da8c6"></a>
### UniffiPartialDifferentialEquationPointSymmetryAlgebra.outstandingObligations

`UniffiPartialDifferentialEquationPointSymmetryAlgebra.outstandingObligations() -> [UniffiPartialDifferentialEquationSymmetryObligation]`

Returns `[UniffiPartialDifferentialEquationSymmetryObligation]`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryalgebra_parameters.08880abc4d8c"></a>
### UniffiPartialDifferentialEquationPointSymmetryAlgebra.parameters

`UniffiPartialDifferentialEquationPointSymmetryAlgebra.parameters() -> [UniffiExpression]`

Returns `[UniffiExpression]`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetrygenerator_coordinateinfinitesimals.107a614fa25b"></a>
### UniffiPartialDifferentialEquationPointSymmetryGenerator.coordinateInfinitesimals

`UniffiPartialDifferentialEquationPointSymmetryGenerator.coordinateInfinitesimals() -> [UniffiExpression]`

Returns `[UniffiExpression]`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetrygenerator_dependentinfinitesimal.96e64d3f77cd"></a>
### UniffiPartialDifferentialEquationPointSymmetryGenerator.dependentInfinitesimal

`UniffiPartialDifferentialEquationPointSymmetryGenerator.dependentInfinitesimal() -> UniffiExpression`

Returns `UniffiExpression`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationprincipalpart_derivativecoefficients.105a14258c6c"></a>
### UniffiPartialDifferentialEquationPrincipalPart.derivativeCoefficients

`UniffiPartialDifferentialEquationPrincipalPart.derivativeCoefficients() -> [UniffiPartialDifferentialEquationPrincipalCoefficient]`

Returns `[UniffiPartialDifferentialEquationPrincipalCoefficient]`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationproblem_boundaryconditions.774c95254359"></a>
### UniffiPartialDifferentialEquationProblem.boundaryConditions

`UniffiPartialDifferentialEquationProblem.boundaryConditions() -> [UniffiExpression]`

Returns `[UniffiExpression]`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationproblem_dependentfunction.296b16c673cc"></a>
### UniffiPartialDifferentialEquationProblem.dependentFunction

`UniffiPartialDifferentialEquationProblem.dependentFunction() -> String`

Returns `String`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationproblem_independentvariables.4db1e71be871"></a>
### UniffiPartialDifferentialEquationProblem.independentVariables

`UniffiPartialDifferentialEquationProblem.independentVariables() -> [String]`

Returns `[String]`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationproblem_initialconditions.e9f03394edf1"></a>
### UniffiPartialDifferentialEquationProblem.initialConditions

`UniffiPartialDifferentialEquationProblem.initialConditions() -> [UniffiExpression]`

Returns `[UniffiExpression]`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsecondorderclassification_cases.15b6f1441a7b"></a>
### UniffiPartialDifferentialEquationSecondOrderClassification.cases

`UniffiPartialDifferentialEquationSecondOrderClassification.cases() -> [UniffiPartialDifferentialEquationSecondOrderTypeCase]`

Returns `[UniffiPartialDifferentialEquationSecondOrderTypeCase]`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsecondorderclassification_decline.f2ddeb353378"></a>
### UniffiPartialDifferentialEquationSecondOrderClassification.decline

`UniffiPartialDifferentialEquationSecondOrderClassification.decline() -> UniffiPartialDifferentialEquationSecondOrderClassificationDecline?`

Returns `UniffiPartialDifferentialEquationSecondOrderClassificationDecline?`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsecondorderclassification_discriminant.68a96438e85d"></a>
### UniffiPartialDifferentialEquationSecondOrderClassification.discriminant

`UniffiPartialDifferentialEquationSecondOrderClassification.discriminant() -> UniffiExpression`

Returns `UniffiExpression`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsecondorderclassification_equationtype.66b8c90a7bdd"></a>
### UniffiPartialDifferentialEquationSecondOrderClassification.equationType

`UniffiPartialDifferentialEquationSecondOrderClassification.equationType() -> UniffiPartialDifferentialEquationSecondOrderType?`

Returns `UniffiPartialDifferentialEquationSecondOrderType?`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsecondorderclassification_principalmatrix.313013cc467a"></a>
### UniffiPartialDifferentialEquationSecondOrderClassification.principalMatrix

`UniffiPartialDifferentialEquationSecondOrderClassification.principalMatrix() -> UniffiMatrix`

Returns `UniffiMatrix`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsecondorderclassification_proofobligations.e043d67cbefa"></a>
### UniffiPartialDifferentialEquationSecondOrderClassification.proofObligations

`UniffiPartialDifferentialEquationSecondOrderClassification.proofObligations() -> [UniffiPartialDifferentialEquationProofObligation]`

Returns `[UniffiPartialDifferentialEquationProofObligation]`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsecondordertypecase_condition.7cb5b6f97f36"></a>
### UniffiPartialDifferentialEquationSecondOrderTypeCase.condition

`UniffiPartialDifferentialEquationSecondOrderTypeCase.condition() -> UniffiAssumptionProposition`

Returns `UniffiAssumptionProposition`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsecondordertypecase_equationtype.5ce65123765a"></a>
### UniffiPartialDifferentialEquationSecondOrderTypeCase.equationType

`UniffiPartialDifferentialEquationSecondOrderTypeCase.equationType() -> UniffiPartialDifferentialEquationSecondOrderType`

Returns `UniffiPartialDifferentialEquationSecondOrderType`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationseparatedequation_independentvariablename.07f2843e035b"></a>
### UniffiPartialDifferentialEquationSeparatedEquation.independentVariableName

`UniffiPartialDifferentialEquationSeparatedEquation.independentVariableName() -> String`

Returns `String`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationseparatedequation_residual.cf2ee0b6af1d"></a>
### UniffiPartialDifferentialEquationSeparatedEquation.residual

`UniffiPartialDifferentialEquationSeparatedEquation.residual() -> UniffiExpression`

Returns `UniffiExpression`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationseparationresult_firstequation.31e30b5ffe71"></a>
### UniffiPartialDifferentialEquationSeparationResult.firstEquation

`UniffiPartialDifferentialEquationSeparationResult.firstEquation() -> UniffiPartialDifferentialEquationSeparatedEquation`

Returns `UniffiPartialDifferentialEquationSeparatedEquation`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationseparationresult_reconstruction.77e1b13e81e0"></a>
### UniffiPartialDifferentialEquationSeparationResult.reconstruction

`UniffiPartialDifferentialEquationSeparationResult.reconstruction() -> UniffiExpression`

Returns `UniffiExpression`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationseparationresult_secondequation.d1a5abe1dd18"></a>
### UniffiPartialDifferentialEquationSeparationResult.secondEquation

`UniffiPartialDifferentialEquationSeparationResult.secondEquation() -> UniffiPartialDifferentialEquationSeparatedEquation`

Returns `UniffiPartialDifferentialEquationSeparatedEquation`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationseparationresult_separationconstant.467c97c73cfb"></a>
### UniffiPartialDifferentialEquationSeparationResult.separationConstant

`UniffiPartialDifferentialEquationSeparationResult.separationConstant() -> UniffiExpression`

Returns `UniffiExpression`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationseparationresult_verification.da63f20d9178"></a>
### UniffiPartialDifferentialEquationSeparationResult.verification

`UniffiPartialDifferentialEquationSeparationResult.verification() -> UniffiPartialDifferentialEquationVerificationVerdict`

Returns `UniffiPartialDifferentialEquationVerificationVerdict`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsimilaritysolution_decline.464ecef9e63a"></a>
### UniffiPartialDifferentialEquationSimilaritySolution.decline

`UniffiPartialDifferentialEquationSimilaritySolution.decline() -> UniffiPartialDifferentialEquationSimilarityReductionDecline?`

Returns `UniffiPartialDifferentialEquationSimilarityReductionDecline?`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsimilaritysolution_invariant.777c267fc2fd"></a>
### UniffiPartialDifferentialEquationSimilaritySolution.invariant

`UniffiPartialDifferentialEquationSimilaritySolution.invariant() -> UniffiExpression?`

Returns `UniffiExpression?`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsimilaritysolution_liftedconstants.1134a189dec3"></a>
### UniffiPartialDifferentialEquationSimilaritySolution.liftedConstants

`UniffiPartialDifferentialEquationSimilaritySolution.liftedConstants() -> [UniffiExpression]`

Returns `[UniffiExpression]`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsimilaritysolution_liftedfamily.60253ad39228"></a>
### UniffiPartialDifferentialEquationSimilaritySolution.liftedFamily

`UniffiPartialDifferentialEquationSimilaritySolution.liftedFamily() -> UniffiPartialDifferentialEquationSolutionFamily?`

Returns `UniffiPartialDifferentialEquationSolutionFamily?`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsimilaritysolution_liftedfamilyverification.ed76c37d76db"></a>
### UniffiPartialDifferentialEquationSimilaritySolution.liftedFamilyVerification

`UniffiPartialDifferentialEquationSimilaritySolution.liftedFamilyVerification() -> UniffiPartialDifferentialEquationVerificationVerdict?`

Returns `UniffiPartialDifferentialEquationVerificationVerdict?`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsimilaritysolution_multiplier.d9e470d51354"></a>
### UniffiPartialDifferentialEquationSimilaritySolution.multiplier

`UniffiPartialDifferentialEquationSimilaritySolution.multiplier() -> UniffiExpression?`

Returns `UniffiExpression?`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsimilaritysolution_outstandingobligations.c7c07be4104f"></a>
### UniffiPartialDifferentialEquationSimilaritySolution.outstandingObligations

`UniffiPartialDifferentialEquationSimilaritySolution.outstandingObligations() -> [UniffiPartialDifferentialEquationSymmetryObligation]`

Returns `[UniffiPartialDifferentialEquationSymmetryObligation]`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsimilaritysolution_reducedequation.507fe9810c62"></a>
### UniffiPartialDifferentialEquationSimilaritySolution.reducedEquation

`UniffiPartialDifferentialEquationSimilaritySolution.reducedEquation() -> UniffiExpression?`

Returns `UniffiExpression?`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsimilaritysolution_similarityvariable.d1f2f25e94e1"></a>
### UniffiPartialDifferentialEquationSimilaritySolution.similarityVariable

`UniffiPartialDifferentialEquationSimilaritySolution.similarityVariable() -> UniffiExpression?`

Returns `UniffiExpression?`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsimilaritysolution_weight.dfa064be35c6"></a>
### UniffiPartialDifferentialEquationSimilaritySolution.weight

`UniffiPartialDifferentialEquationSimilaritySolution.weight() -> UniffiExpression?`

Returns `UniffiExpression?`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsolutionfamily_arbitraryfunctions.76d0cef27815"></a>
### UniffiPartialDifferentialEquationSolutionFamily.arbitraryFunctions

`UniffiPartialDifferentialEquationSolutionFamily.arbitraryFunctions() -> [UniffiPartialDifferentialEquationArbitraryFunction]`

Returns `[UniffiPartialDifferentialEquationArbitraryFunction]`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsolutionfamily_form.c9f40376ce85"></a>
### UniffiPartialDifferentialEquationSolutionFamily.form

`UniffiPartialDifferentialEquationSolutionFamily.form() -> UniffiPartialDifferentialEquationSolutionForm`

Returns `UniffiPartialDifferentialEquationSolutionForm`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsolutionfamily_proofobligations.8f7163874900"></a>
### UniffiPartialDifferentialEquationSolutionFamily.proofObligations

`UniffiPartialDifferentialEquationSolutionFamily.proofObligations() -> [UniffiPartialDifferentialEquationProofObligation]`

Returns `[UniffiPartialDifferentialEquationProofObligation]`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsolutionprovenance_dischargedobligations.c5b3b10e891a"></a>
### UniffiPartialDifferentialEquationSolutionProvenance.dischargedObligations

`UniffiPartialDifferentialEquationSolutionProvenance.dischargedObligations() -> [UniffiPartialDifferentialEquationProofObligation]`

Returns `[UniffiPartialDifferentialEquationProofObligation]`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsolutionprovenance_linearity.4fcd63b62e1e"></a>
### UniffiPartialDifferentialEquationSolutionProvenance.linearity

`UniffiPartialDifferentialEquationSolutionProvenance.linearity() -> UniffiPartialDifferentialEquationLinearity`

Returns `UniffiPartialDifferentialEquationLinearity`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsolutionprovenance_method.4b6d74cfcbed"></a>
### UniffiPartialDifferentialEquationSolutionProvenance.method

`UniffiPartialDifferentialEquationSolutionProvenance.method() -> UniffiPartialDifferentialEquationMethod`

Returns `UniffiPartialDifferentialEquationMethod`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsolutionprovenance_order.de0eb8e5daac"></a>
### UniffiPartialDifferentialEquationSolutionProvenance.order

`UniffiPartialDifferentialEquationSolutionProvenance.order() -> UInt64`

Returns `UInt64`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsolveresult_decline.e852c6112d04"></a>
### UniffiPartialDifferentialEquationSolveResult.decline

`UniffiPartialDifferentialEquationSolveResult.decline() -> UniffiPartialDifferentialEquationSolveDecline?`

Returns `UniffiPartialDifferentialEquationSolveDecline?`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsolveresult_method.2c59267e2d84"></a>
### UniffiPartialDifferentialEquationSolveResult.method

`UniffiPartialDifferentialEquationSolveResult.method() -> UniffiPartialDifferentialEquationMethod?`

Returns `UniffiPartialDifferentialEquationMethod?`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsolveresult_provenance.e4ec2ca33795"></a>
### UniffiPartialDifferentialEquationSolveResult.provenance

`UniffiPartialDifferentialEquationSolveResult.provenance() -> UniffiPartialDifferentialEquationSolutionProvenance?`

Returns `UniffiPartialDifferentialEquationSolutionProvenance?`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsolveresult_solution.2d2b086fc48f"></a>
### UniffiPartialDifferentialEquationSolveResult.solution

`UniffiPartialDifferentialEquationSolveResult.solution() -> UniffiPartialDifferentialEquationSolutionFamily?`

Returns `UniffiPartialDifferentialEquationSolutionFamily?`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsolveresult_verification.f26765f2ac14"></a>
### UniffiPartialDifferentialEquationSolveResult.verification

`UniffiPartialDifferentialEquationSolveResult.verification() -> UniffiPartialDifferentialEquationVerificationReport?`

Returns `UniffiPartialDifferentialEquationVerificationReport?`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationtransformationresult_coordinatechange.62f1538f1b99"></a>
### UniffiPartialDifferentialEquationTransformationResult.coordinateChange

`UniffiPartialDifferentialEquationTransformationResult.coordinateChange() -> UniffiPartialDifferentialEquationCoordinateChange?`

Returns `UniffiPartialDifferentialEquationCoordinateChange?`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationtransformationresult_decline.08f4f6acb1c8"></a>
### UniffiPartialDifferentialEquationTransformationResult.decline

`UniffiPartialDifferentialEquationTransformationResult.decline() -> UniffiPartialDifferentialEquationTransformationDecline?`

Returns `UniffiPartialDifferentialEquationTransformationDecline?`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationtransformationresult_normalizationmultiplier.c8faee7149b6"></a>
### UniffiPartialDifferentialEquationTransformationResult.normalizationMultiplier

`UniffiPartialDifferentialEquationTransformationResult.normalizationMultiplier() -> UniffiExpression?`

Returns `UniffiExpression?`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationtransformationresult_targetproblem.2bde3f7246c5"></a>
### UniffiPartialDifferentialEquationTransformationResult.targetProblem

`UniffiPartialDifferentialEquationTransformationResult.targetProblem() -> UniffiPartialDifferentialEquationProblem?`

Returns `UniffiPartialDifferentialEquationProblem?`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationtransformationresult_transformed.72c8b0825faa"></a>
### UniffiPartialDifferentialEquationTransformationResult.transformed

`UniffiPartialDifferentialEquationTransformationResult.transformed() -> Bool`

Returns `Bool`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationtransformationverificationreport_claimedgoverningresidual.632e1d8c0c0c"></a>
### UniffiPartialDifferentialEquationTransformationVerificationReport.claimedGoverningResidual

`UniffiPartialDifferentialEquationTransformationVerificationReport.claimedGoverningResidual() -> UniffiExpression`

Returns `UniffiExpression`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationtransformationverificationreport_compositionresiduals.b4f3ca3499e3"></a>
### UniffiPartialDifferentialEquationTransformationVerificationReport.compositionResiduals

`UniffiPartialDifferentialEquationTransformationVerificationReport.compositionResiduals() -> [UniffiExpression]`

Returns `[UniffiExpression]`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationtransformationverificationreport_principalcongruenceresiduals.08515ecc11e5"></a>
### UniffiPartialDifferentialEquationTransformationVerificationReport.principalCongruenceResiduals

`UniffiPartialDifferentialEquationTransformationVerificationReport.principalCongruenceResiduals() -> [UniffiExpression]`

Returns `[UniffiExpression]`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationtransformationverificationreport_transformedgoverningresidual.499a207e532f"></a>
### UniffiPartialDifferentialEquationTransformationVerificationReport.transformedGoverningResidual

`UniffiPartialDifferentialEquationTransformationVerificationReport.transformedGoverningResidual() -> UniffiExpression`

Returns `UniffiExpression`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationverificationreport_boundaryconditionresiduals.168c81e2b6d2"></a>
### UniffiPartialDifferentialEquationVerificationReport.boundaryConditionResiduals

`UniffiPartialDifferentialEquationVerificationReport.boundaryConditionResiduals() -> [UniffiPartialDifferentialEquationVerificationResidual]`

Returns `[UniffiPartialDifferentialEquationVerificationResidual]`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationverificationreport_explicitbranch.8d09a327aafd"></a>
### UniffiPartialDifferentialEquationVerificationReport.explicitBranch

`UniffiPartialDifferentialEquationVerificationReport.explicitBranch() -> UniffiExpression?`

Returns `UniffiExpression?`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationverificationreport_governingresidual.93f4bd65187b"></a>
### UniffiPartialDifferentialEquationVerificationReport.governingResidual

`UniffiPartialDifferentialEquationVerificationReport.governingResidual() -> UniffiPartialDifferentialEquationVerificationResidual`

Returns `UniffiPartialDifferentialEquationVerificationResidual`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationverificationreport_inconclusivereason.971c18d050d7"></a>
### UniffiPartialDifferentialEquationVerificationReport.inconclusiveReason

`UniffiPartialDifferentialEquationVerificationReport.inconclusiveReason() -> UniffiPartialDifferentialEquationVerificationInconclusiveReason?`

Returns `UniffiPartialDifferentialEquationVerificationInconclusiveReason?`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationverificationreport_initialconditionresiduals.210fdcda8e7a"></a>
### UniffiPartialDifferentialEquationVerificationReport.initialConditionResiduals

`UniffiPartialDifferentialEquationVerificationReport.initialConditionResiduals() -> [UniffiPartialDifferentialEquationVerificationResidual]`

Returns `[UniffiPartialDifferentialEquationVerificationResidual]`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationverificationreport_proofobligations.5e8244fd76a9"></a>
### UniffiPartialDifferentialEquationVerificationReport.proofObligations

`UniffiPartialDifferentialEquationVerificationReport.proofObligations() -> [UniffiPartialDifferentialEquationProofObligation]`

Returns `[UniffiPartialDifferentialEquationProofObligation]`.

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationverificationresidual_residual.637f1e20a309"></a>
### UniffiPartialDifferentialEquationVerificationResidual.residual

`UniffiPartialDifferentialEquationVerificationResidual.residual() -> UniffiExpression`

Returns `UniffiExpression`.

<a id="placement-placement.swift.swift_object.uniffisegment2d_length.e4c6f33fcd4d"></a>
### UniffiSegment2d.length

`UniffiSegment2d.length() -> UniffiExpression`

Returns `UniffiExpression`.

<a id="placement-placement.swift.swift_object.uniffisession_canonicalizepartialdifferentialequation.7daa77ef8913"></a>
### UniffiSession.canonicalizePartialDifferentialEquation

`UniffiSession.canonicalizePartialDifferentialEquation(problem: UniffiPartialDifferentialEquationProblem) -> UniffiPartialDifferentialEquationCanonicalizationResult`

Returns `UniffiPartialDifferentialEquationCanonicalizationResult`.

<a id="placement-placement.swift.swift_object.uniffisession_changepartialdifferentialequationvariables.b517199f1857"></a>
### UniffiSession.changePartialDifferentialEquationVariables

`UniffiSession.changePartialDifferentialEquationVariables(problem: UniffiPartialDifferentialEquationProblem, targetVariables: [String], forwardCoordinates: [UniffiExpression]?, inverseCoordinates: [UniffiExpression]?, targetDependentFunction: UniffiUndefinedFunction?) -> UniffiPartialDifferentialEquationTransformationResult`

Returns `UniffiPartialDifferentialEquationTransformationResult`.

<a id="placement-placement.swift.swift_object.uniffisession_classifypartialdifferentialequation.f1e10f4a1990"></a>
### UniffiSession.classifyPartialDifferentialEquation

`UniffiSession.classifyPartialDifferentialEquation(problem: UniffiPartialDifferentialEquationProblem) -> UniffiPartialDifferentialEquationClassification`

Returns `UniffiPartialDifferentialEquationClassification`.

<a id="placement-placement.swift.swift_object.uniffisession_classifysecondorderpartialdifferentialequation.569e13201a4f"></a>
### UniffiSession.classifySecondOrderPartialDifferentialEquation

`UniffiSession.classifySecondOrderPartialDifferentialEquation(problem: UniffiPartialDifferentialEquationProblem) -> UniffiPartialDifferentialEquationSecondOrderClassification`

Returns `UniffiPartialDifferentialEquationSecondOrderClassification`.

<a id="placement-placement.swift.swift_object.uniffisession_discoverpartialdifferentialequation.913a679faaf7"></a>
### UniffiSession.discoverPartialDifferentialEquation

`UniffiSession.discoverPartialDifferentialEquation(equation: UniffiExpression, initialConditions: [UniffiExpression], boundaryConditions: [UniffiExpression]) -> UniffiPartialDifferentialEquationProblem`

Returns `UniffiPartialDifferentialEquationProblem`.

<a id="placement-placement.swift.swift_object.uniffisession_explicitpartialdifferentialequationsolution.6dd157a18a6b"></a>
### UniffiSession.explicitPartialDifferentialEquationSolution

`UniffiSession.explicitPartialDifferentialEquationSolution(solution: UniffiExpression) -> UniffiPartialDifferentialEquationSolutionFamily`

Returns `UniffiPartialDifferentialEquationSolutionFamily`.

<a id="placement-placement.swift.swift_object.uniffisession_implicitpartialdifferentialequationsolution.ba46261688e5"></a>
### UniffiSession.implicitPartialDifferentialEquationSolution

`UniffiSession.implicitPartialDifferentialEquationSolution(residual: UniffiExpression) -> UniffiPartialDifferentialEquationSolutionFamily`

Returns `UniffiPartialDifferentialEquationSolutionFamily`.

<a id="placement-placement.swift.swift_object.uniffisession_integratedefiniteunderconstraint.c9f35c0a4198"></a>
### UniffiSession.integrateDefiniteUnderConstraint

`UniffiSession.integrateDefiniteUnderConstraint(target: UniffiExpression, variable: String, lowerBound: UniffiExpression, upperBound: UniffiExpression, constraint: UniffiExpression) -> UniffiExpression`

Returns `UniffiExpression`.

<a id="placement-placement.swift.swift_object.uniffisession_partialdifferentialequation.2fa4c014f127"></a>
### UniffiSession.partialDifferentialEquation

`UniffiSession.partialDifferentialEquation(equation: UniffiExpression, dependentFunction: UniffiUndefinedFunction, independentVariables: [String], initialConditions: [UniffiExpression], boundaryConditions: [UniffiExpression]) -> UniffiPartialDifferentialEquationProblem`

Returns `UniffiPartialDifferentialEquationProblem`.

<a id="placement-placement.swift.swift_object.uniffisession_partialdifferentialequationarbitraryfunction.8dfddf062adc"></a>
### UniffiSession.partialDifferentialEquationArbitraryFunction

`UniffiSession.partialDifferentialEquationArbitraryFunction(preferredName: String, arity: UInt64) -> UniffiPartialDifferentialEquationArbitraryFunction`

Returns `UniffiPartialDifferentialEquationArbitraryFunction`.

<a id="placement-placement.swift.swift_object.uniffisession_separatepartialdifferentialequation.9102c154da51"></a>
### UniffiSession.separatePartialDifferentialEquation

`UniffiSession.separatePartialDifferentialEquation(problem: UniffiPartialDifferentialEquationProblem) -> UniffiPartialDifferentialEquationSeparationResult`

Returns `UniffiPartialDifferentialEquationSeparationResult`.

<a id="placement-placement.swift.swift_object.uniffisession_simplifyunderconstraint.96f7054738cf"></a>
### UniffiSession.simplifyUnderConstraint

`UniffiSession.simplifyUnderConstraint(target: UniffiExpression, constraint: UniffiExpression) -> UniffiExpression`

Returns `UniffiExpression`.

<a id="placement-placement.swift.swift_object.uniffisession_solvepartialdifferentialequation.805999f7480e"></a>
### UniffiSession.solvePartialDifferentialEquation

`UniffiSession.solvePartialDifferentialEquation(problem: UniffiPartialDifferentialEquationProblem, method: UniffiPartialDifferentialEquationMethod) -> UniffiPartialDifferentialEquationSolveResult`

Returns `UniffiPartialDifferentialEquationSolveResult`.

<a id="placement-placement.swift.swift_object.uniffisession_solvepartialdifferentialequationwithtransformaxisspecifications.a99bf7540672"></a>
### UniffiSession.solvePartialDifferentialEquationWithTransformAxisSpecifications

`UniffiSession.solvePartialDifferentialEquationWithTransformAxisSpecifications(problem: UniffiPartialDifferentialEquationProblem, method: UniffiPartialDifferentialEquationMethod, transformAxisSpecifications: [String]) -> UniffiPartialDifferentialEquationSolveResult`

Returns `UniffiPartialDifferentialEquationSolveResult`.

<a id="placement-placement.swift.swift_object.uniffisession_verifypartialdifferentialequationcoordinatetransformation.10d84376769a"></a>
### UniffiSession.verifyPartialDifferentialEquationCoordinateTransformation

`UniffiSession.verifyPartialDifferentialEquationCoordinateTransformation(problem: UniffiPartialDifferentialEquationProblem, transformation: UniffiPartialDifferentialEquationTransformationResult) -> UniffiPartialDifferentialEquationTransformationVerificationReport`

Returns `UniffiPartialDifferentialEquationTransformationVerificationReport`.

<a id="placement-placement.swift.swift_object.uniffisession_verifypartialdifferentialequationsolution.f427ba8dd3ba"></a>
### UniffiSession.verifyPartialDifferentialEquationSolution

`UniffiSession.verifyPartialDifferentialEquationSolution(problem: UniffiPartialDifferentialEquationProblem, solution: UniffiPartialDifferentialEquationSolutionFamily) -> UniffiPartialDifferentialEquationVerificationReport`

Returns `UniffiPartialDifferentialEquationVerificationReport`.

<a id="placement-placement.swift.swift_object.uniffisetenumeration_elements.475cb4a9700e"></a>
### UniffiSetEnumeration.elements

`UniffiSetEnumeration.elements() -> [UniffiExpression]`

Returns `[UniffiExpression]`.

<a id="placement-placement.swift.swift_object.uniffisetenumeration_outcome.feca7c08f98c"></a>
### UniffiSetEnumeration.outcome

`UniffiSetEnumeration.outcome() -> UniffiEnumerationVerdict`

Returns `UniffiEnumerationVerdict`.

