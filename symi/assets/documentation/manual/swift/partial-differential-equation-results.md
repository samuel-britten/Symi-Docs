# Partial differential equation results

Every entry on [Partial differential
equations](partial-differential-equations.md) returns a record rather than a
bare expression, and the records are documented here, grouped by the stage of
the workflow that produces them.

They share one discipline. A record reports what was **proved**, separately from
what was assumed and separately from what was requested: the method that
actually ran rather than the method asked for, a three-valued verdict rather
than a boolean, the obligations a result does *not* discharge, and a typed
decline in place of a weaker answer. Reading the verdict and the obligations is
therefore part of using the result, not an optional diagnostic step.

Several of these types are enumerations whose value is one named case. Each
such type lists its cases below; every case is reachable from its `name` in
Python and JavaScript, and as a native enumeration variant in Rust, Kotlin, and
Swift.

## Problem structure

These records describe the equation itself: the validated signature a solver is
given, the free elements a candidate family may use, and the typed errors
raised when a signature cannot be formed.

### PartialDifferentialEquationProblem

The signature a solver is given. It fixes the governing equation, the
dependent function, the ordered independent variables, and any initial or
boundary conditions. The variable order is part of the identity of the problem,
not a presentation detail: it decides which coordinate every downstream
classification and transformation treats as the first axis.

<a id="entry-presentation_swift_api_partialdifferentialequationproblem_boundary_conditions"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationproblem_boundaryconditions.774c95254359"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationProblem method</p>

```swift signature
func boundaryConditions() -> [UniffiExpression]
```

The boundary-condition residuals in insertion order.

<a id="entry-presentation_swift_api_partialdifferentialequationproblem_dependent_function"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationproblem_dependentfunction.296b16c673cc"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationProblem method</p>

```swift signature
func dependentFunction() -> String
```

The declared dependent-function name.

<a id="entry-presentation_swift_api_partialdifferentialequationproblem_equation"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationproblem_equation.ec9c58168b92"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationProblem method</p>

```swift signature
func equation() -> UniffiExpression
```

The governing residual, interpreted as equal to zero.

<a id="entry-presentation_swift_api_partialdifferentialequationproblem_independent_variables"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationproblem_independentvariables.4db1e71be871"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationProblem method</p>

```swift signature
func independentVariables() -> [String]
```

The independent variables in their semantic declared order.

<a id="entry-presentation_swift_api_partialdifferentialequationproblem_initial_conditions"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationproblem_initialconditions.e9f03394edf1"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationProblem method</p>

```swift signature
func initialConditions() -> [UniffiExpression]
```

The initial-condition residuals in insertion order.

<a id="entry-presentation_swift_api_partialdifferentialequationproblem_serialize_object"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationproblem_serializeobject.8e1e036fa0eb"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationProblem method</p>

```swift signature
func serializeObject() -> String
```

Serialize this problem in the versioned canonical object grammar.

<a id="entry-presentation_swift_api_partialdifferentialequationproblem_to_latex"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationproblem_tolatex.20a0b38477dc"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationProblem method</p>

```swift signature
func toLatex() -> String
```

Render this problem as LaTeX, as a system when it carries conditions.

### PartialDifferentialEquationProblemError

*Not exposed by the Swift bindings. Available as [`api::PartialDifferentialEquationProblemError`](/symi/rust/partial-differential-equation-results#partialdifferentialequationproblemerror) in Rust.*


Typed construction errors reported by the canonical PDE API.

Cases: `AmbiguousDependentFunction`, `ContextMismatch`, `DependentFunctionMustBeUserFunction`, `DerivativeArgumentArityMismatch`, `DiscoveryFailed`, `DuplicateIndependentVariable`, `GoverningEquationIsNotDifferential`, `InconsistentDependentFunctionArguments`, `InsufficientIndependentVariables`, `NoDependentFunctionOccurrence`.

### PartialDifferentialEquationArbitraryFunction

A collision-free arbitrary function allocated for a PDE candidate.

<a id="entry-presentation_swift_api_partialdifferentialequationarbitraryfunction_arity"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationarbitraryfunction_arity.d7098d5b5c09"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationArbitraryFunction method</p>

```swift signature
func arity() -> UInt64
```

The recorded and validated function arity.

<a id="entry-presentation_swift_api_partialdifferentialequationarbitraryfunction_name"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationarbitraryfunction_name.b128ef3985d7"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationArbitraryFunction method</p>

```swift signature
func name() -> String
```

The collision-free allocated function name.

### PartialDifferentialEquationJet

*Not exposed by the Swift bindings. Available as [`api::PartialDifferentialEquationJet`](/symi/rust/partial-differential-equation-results#partialdifferentialequationjet) in Rust.*


A dependent-function jet represented by derivative orders in variable order.

### PartialDifferentialEquationJetCoefficient

One exact coefficient associated with a dependent-function jet.

<a id="entry-presentation_swift_api_partialdifferentialequationjetcoefficient_coefficient"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationjetcoefficient_coefficient.6ba74d2c787f"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationJetCoefficient method</p>

```swift signature
func coefficient() -> UniffiExpression
```

The exact coefficient expression.

## Classification and the principal part

Classification reports what was *proved* about an equation. A type claimed
without a proved sign condition is reported as a case table or as unknown, never
asserted.

### PartialDifferentialEquationClassification

Exact structural analysis data for one scalar partial differential equation.

<a id="entry-presentation_swift_api_partialdifferentialequationclassification_coefficient_data"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationclassification_coefficientdata.334110672947"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationClassification method</p>

```swift signature
func coefficientData() -> UniffiPartialDifferentialEquationCoefficientData
```

The exact affine coefficient data extracted from the governing residual.

<a id="entry-presentation_swift_api_partialdifferentialequationclassification_linearity"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationclassification_linearity.b0a0e5b456e2"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationClassification method</p>

```swift signature
func linearity() -> UniffiPartialDifferentialEquationLinearity
```

The most-specific exact linearity class.

<a id="entry-presentation_swift_api_partialdifferentialequationclassification_method_candidates"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationclassification_methodcandidates.3fb146f8cc4b"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationClassification method</p>

```swift signature
func methodCandidates() -> [UniffiPartialDifferentialEquationMethodCandidate]
```

The advisory methods in deterministic preference order.

<a id="entry-presentation_swift_api_partialdifferentialequationclassification_order"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationclassification_order.c888f6a7423f"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationClassification method</p>

```swift signature
func order() -> UInt64
```

The exact highest derivative order.

<a id="entry-presentation_swift_api_partialdifferentialequationclassification_second_order_principal_part"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationclassification_secondorderprincipalpart.c325550bb2cb"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationClassification method</p>

```swift signature
func secondOrderPrincipalPart() -> UniffiPartialDifferentialEquationPrincipalPart?
```

The exact second-order principal metadata, when the equation has one.

### PartialDifferentialEquationCoefficientData

The exact affine coefficient data yielded by PDE classification.

<a id="entry-presentation_swift_api_partialdifferentialequationcoefficientdata_full_coefficients"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationcoefficientdata_fullcoefficients.844a146b8746"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCoefficientData method</p>

```swift signature
func fullCoefficients() -> [UniffiPartialDifferentialEquationJetCoefficient]?
```

Every jet coefficient, when the equation is exactly linear.

<a id="entry-presentation_swift_api_partialdifferentialequationcoefficientdata_highest_order_coefficients"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationcoefficientdata_highestordercoefficients.4dc7ac67412a"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCoefficientData method</p>

```swift signature
func highestOrderCoefficients() -> [UniffiPartialDifferentialEquationJetCoefficient]?
```

The highest-order jet coefficients, when the equation is affine in them.

<a id="entry-presentation_swift_api_partialdifferentialequationcoefficientdata_homogeneous"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationcoefficientdata_homogeneous.ef0401236d6f"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCoefficientData method</p>

```swift signature
func homogeneous() -> Bool?
```

Whether the equation was proved homogeneous, when that statement is meaningful.

<a id="entry-presentation_swift_api_partialdifferentialequationcoefficientdata_remainder"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationcoefficientdata_remainder.a5833d1eaffc"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCoefficientData method</p>

```swift signature
func remainder() -> UniffiExpression?
```

The exact jet-free remainder term, when one was extracted.

### PartialDifferentialEquationLinearity

*Not exposed by the Swift bindings. Available as [`api::PartialDifferentialEquationLinearity`](/symi/rust/partial-differential-equation-results#partialdifferentialequationlinearity) in Rust.*


The nested exact linearity class of a scalar PDE.

Cases: `Linear`, `Nonlinear`, `Quasilinear`, `Semilinear`.

### PartialDifferentialEquationPrincipalPart

The second-order principal part of a PDE, as read by the classifier. `matrix`
is the **symmetric principal matrix** whose quadratic form is the principal
symbol: for a two-variable equation with mixed term \(B\,u_{xy}\) its
off-diagonal entries are \(B/2\), so that the discriminant of the equation is
the discriminant of that quadratic form. It is a [`Matrix`](linear-algebra.md)
value, not another way of constructing one. `derivative_coefficients` lists the
coefficients of the principal derivatives in the classifier's own derivative
order, which is where a coefficient that could not be proved real is reported.

<a id="entry-presentation_swift_api_partialdifferentialequationprincipalpart_derivative_coefficients"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationprincipalpart_derivativecoefficients.105a14258c6c"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPrincipalPart method</p>

```swift signature
func derivativeCoefficients() -> [UniffiPartialDifferentialEquationPrincipalCoefficient]
```

The raw mixed-derivative coefficients, before symmetrization halves them.

<a id="entry-presentation_swift_api_partialdifferentialequationprincipalpart_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationprincipalpart_matrix.373467e897b0"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPrincipalPart method</p>

```swift signature
func matrix() -> UniffiMatrix
```

The symmetric principal matrix whose quadratic form is the exact principal symbol.

### PartialDifferentialEquationPrincipalCoefficient

One raw second-order principal coefficient before mixed-term symmetrization.

<a id="entry-presentation_swift_api_partialdifferentialequationprincipalcoefficient_coefficient"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationprincipalcoefficient_coefficient.db70f03f67e2"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPrincipalCoefficient method</p>

```swift signature
func coefficient() -> UniffiExpression
```

The raw coefficient expression, before mixed terms are halved.

### PartialDifferentialEquationSecondOrderClassification

The elliptic, parabolic, or hyperbolic analysis of a two-variable linear
second-order equation. `verdict` says which kind of answer this is — one type
proved outright, a complete table of cases each with its own proved condition,
or neither. `discriminant` and `principal_matrix` are the exact data the type
was read from, and `proof_obligations` records what the classification assumed
but did not prove.

<a id="entry-presentation_swift_api_partialdifferentialequationsecondorderclassification_cases"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsecondorderclassification_cases.15b6f1441a7b"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSecondOrderClassification method</p>

```swift signature
func cases() -> [UniffiPartialDifferentialEquationSecondOrderTypeCase]
```

The complete exact case table, when the verdict is conditional.

<a id="entry-presentation_swift_api_partialdifferentialequationsecondorderclassification_decline"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsecondorderclassification_decline.f2ddeb353378"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSecondOrderClassification method</p>

```swift signature
func decline() -> UniffiPartialDifferentialEquationSecondOrderClassificationDecline?
```

The exact reason an unknown analysis could not be completed.

<a id="entry-presentation_swift_api_partialdifferentialequationsecondorderclassification_discriminant"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsecondorderclassification_discriminant.68a96438e85d"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSecondOrderClassification method</p>

```swift signature
func discriminant() -> UniffiExpression
```

The exact discriminant `b^2 - a*c` of the symmetric principal matrix.

<a id="entry-presentation_swift_api_partialdifferentialequationsecondorderclassification_equation_type"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsecondorderclassification_equationtype.66b8c90a7bdd"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSecondOrderClassification method</p>

```swift signature
func equationType() -> UniffiPartialDifferentialEquationSecondOrderType?
```

The single proved classical type, when the verdict is definite.

<a id="entry-presentation_swift_api_partialdifferentialequationsecondorderclassification_principal_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsecondorderclassification_principalmatrix.313013cc467a"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSecondOrderClassification method</p>

```swift signature
func principalMatrix() -> UniffiMatrix
```

The frozen symmetric principal matrix this analysis classified.

<a id="entry-presentation_swift_api_partialdifferentialequationsecondorderclassification_proof_obligations"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsecondorderclassification_proofobligations.e043d67cbefa"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSecondOrderClassification method</p>

```swift signature
func proofObligations() -> [UniffiPartialDifferentialEquationProofObligation]
```

The obligations a downstream canonical-coordinate route must discharge.

<a id="entry-presentation_swift_api_partialdifferentialequationsecondorderclassification_verdict"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsecondorderclassification_verdict.729b5a35345e"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSecondOrderClassification method</p>

```swift signature
func verdict() -> UniffiPartialDifferentialEquationSecondOrderTypeVerdict
```

Whether one type, a complete case table, or neither was proved.

### PartialDifferentialEquationSecondOrderType

*Not exposed by the Swift bindings. Available as [`api::PartialDifferentialEquationSecondOrderType`](/symi/rust/partial-differential-equation-results#partialdifferentialequationsecondordertype) in Rust.*


The exact real classical type of a second-order principal part.

Cases: `Degenerate`, `Elliptic`, `Hyperbolic`, `Parabolic`.

### PartialDifferentialEquationSecondOrderTypeCase

One exact condition and the classical second-order type proved under it.

<a id="entry-presentation_swift_api_partialdifferentialequationsecondordertypecase_condition"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsecondordertypecase_condition.7cb5b6f97f36"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSecondOrderTypeCase method</p>

```swift signature
func condition() -> UniffiAssumptionProposition
```

The exact condition under which this case's classical type holds.

<a id="entry-presentation_swift_api_partialdifferentialequationsecondordertypecase_equation_type"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsecondordertypecase_equationtype.5ce65123765a"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSecondOrderTypeCase method</p>

```swift signature
func equationType() -> UniffiPartialDifferentialEquationSecondOrderType
```

The classical type proved under this case's condition.

### PartialDifferentialEquationSecondOrderTypeVerdict

*Not exposed by the Swift bindings. Available as [`api::PartialDifferentialEquationSecondOrderTypeVerdict`](/symi/rust/partial-differential-equation-results#partialdifferentialequationsecondordertypeverdict) in Rust.*


Whether one type was proved, a complete case table was proved, or neither.

Cases: `Conditional`, `Definite`, `Unknown`.

### PartialDifferentialEquationSecondOrderClassificationDecline

*Not exposed by the Swift bindings. Available as [`api::PartialDifferentialEquationSecondOrderClassificationDecline`](/symi/rust/partial-differential-equation-results#partialdifferentialequationsecondorderclassificationdecline) in Rust.*


The exact reason second-order type analysis returned no definite or conditional type.

Cases: `BudgetExceeded`, `InconsistentAssumptions`, `NotTwoVariableSecondOrderLinear`, `PrincipalPartNotAvailable`, `RealPrincipalCoefficientsNotProved`, `TypeNotProved`.

### PartialDifferentialEquationMethod

*Not exposed by the Swift bindings. Available as [`api::PartialDifferentialEquationMethod`](/symi/rust/partial-differential-equation-results#partialdifferentialequationmethod) in Rust.*


A stable advisory PDE method identifier.

Cases: `Automatic`, `CanonicalCoordinates`, `Characteristics`, `FourierTransform`, `InitialDataConvolution`, `LaplaceTransform`, `RepeatedIntegration`, `Separation`.

### PartialDifferentialEquationMethodCandidate

One advisory PDE method candidate and its exact proof-obligation spellings.

<a id="entry-presentation_swift_api_partialdifferentialequationmethodcandidate_method"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationmethodcandidate_method.f63da59d04bd"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationMethodCandidate method</p>

```swift signature
func method() -> UniffiPartialDifferentialEquationMethod
```

The stable advisory method name.

<a id="entry-presentation_swift_api_partialdifferentialequationmethodcandidate_proof_obligations"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationmethodcandidate_proofobligations.42322db9cf26"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationMethodCandidate method</p>

```swift signature
func proofObligations() -> [UniffiPartialDifferentialEquationProofObligation]
```

The exact obligations this method must discharge before it may solve.

### PartialDifferentialEquationProofObligation

*Not exposed by the Swift bindings. Available as [`api::PartialDifferentialEquationProofObligation`](/symi/rust/partial-differential-equation-results#partialdifferentialequationproofobligation) in Rust.*


An exact obligation an advisory PDE method must discharge before solving.

Cases: `BoundaryEigenvalueConditionsEstablished`, `CharacteristicTransversality`, `CoefficientNonzero`, `ConstantCoefficients`, `CoordinateJacobianNonzero`, `CoverageOutsideTheAdmissibleClass`, `DifferentiationUnderTheIntegralSign`, `EquationTypeEvidence`, `ExactInverseTransformAvailable`, `InitialTraceAttainedInTheAdmissibleClass`, `OriginTraceEstablished`, `SeparabilityEstablished`, `TransformAxisDomainEstablished`, `TransformExistenceAndGrowth`, `TransformReductionExact`, `UniquenessInTheAdmissibleClass`.

## Coordinate transformations

A transformation is constructed, then independently verified. The verification
report is a separate record so that evidence is never inferred from the fact
that a transformation was produced.

### PartialDifferentialEquationCoordinateChange

A validated exact two-variable change of independent variables: both coordinate
maps, the variables they run between, the target dependent function, and the
`jacobian` of the forward map. The Jacobian is the transformation's own
Jacobian determinant, not the [vector-calculus `jacobian`
operation](vector-calculus.md#jacobian).

<a id="entry-presentation_swift_api_partialdifferentialequationcoordinatechange_forward_coordinates"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationcoordinatechange_forwardcoordinates.952f9b134fad"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCoordinateChange method</p>

```swift signature
func forwardCoordinates() -> [UniffiExpression]
```

The ordered source-to-target coordinate expressions.

<a id="entry-presentation_swift_api_partialdifferentialequationcoordinatechange_inverse_coordinates"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationcoordinatechange_inversecoordinates.71b2ceb4b935"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCoordinateChange method</p>

```swift signature
func inverseCoordinates() -> [UniffiExpression]
```

The ordered target-to-source coordinate expressions.

<a id="entry-presentation_swift_api_partialdifferentialequationcoordinatechange_jacobian"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationcoordinatechange_jacobian.b76dac810eaf"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCoordinateChange method</p>

```swift signature
func jacobian() -> UniffiExpression
```

The exact forward-map Jacobian determinant.

<a id="entry-presentation_swift_api_partialdifferentialequationcoordinatechange_serialize_object"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationcoordinatechange_serializeobject.1b4d5aae1ef2"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCoordinateChange method</p>

```swift signature
func serializeObject() -> String
```

Serialize this coordinate change in the versioned canonical object grammar.

<a id="entry-presentation_swift_api_partialdifferentialequationcoordinatechange_source_variables"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationcoordinatechange_sourcevariables.e6e2ae880173"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCoordinateChange method</p>

```swift signature
func sourceVariables() -> [String]
```

The ordered source coordinate names.

<a id="entry-presentation_swift_api_partialdifferentialequationcoordinatechange_target_dependent_function"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationcoordinatechange_targetdependentfunction.2140561272c4"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCoordinateChange method</p>

```swift signature
func targetDependentFunction() -> String
```

The target unknown-function name.

<a id="entry-presentation_swift_api_partialdifferentialequationcoordinatechange_target_variables"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationcoordinatechange_targetvariables.7e57c181e4da"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCoordinateChange method</p>

```swift signature
func targetVariables() -> [String]
```

The ordered target coordinate names.

### PartialDifferentialEquationTransformationResult

The transformed problem or typed decline from an exact change of variables.

<a id="entry-presentation_swift_api_partialdifferentialequationtransformationresult_coordinate_change"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationtransformationresult_coordinatechange.62f1538f1b99"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationTransformationResult method</p>

```swift signature
func coordinateChange() -> UniffiPartialDifferentialEquationCoordinateChange?
```

The validated coordinate change of a successful transformation.

<a id="entry-presentation_swift_api_partialdifferentialequationtransformationresult_decline"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationtransformationresult_decline.08f4f6acb1c8"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationTransformationResult method</p>

```swift signature
func decline() -> UniffiPartialDifferentialEquationTransformationDecline?
```

The exact reason no transformation was produced.

<a id="entry-presentation_swift_api_partialdifferentialequationtransformationresult_normalization_multiplier"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationtransformationresult_normalizationmultiplier.c8faee7149b6"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationTransformationResult method</p>

```swift signature
func normalizationMultiplier() -> UniffiExpression?
```

The proved-nonzero residual-normalization multiplier.

<a id="entry-presentation_swift_api_partialdifferentialequationtransformationresult_target_problem"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationtransformationresult_targetproblem.2bde3f7246c5"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationTransformationResult method</p>

```swift signature
func targetProblem() -> UniffiPartialDifferentialEquationProblem?
```

The transformed PDE problem stated in the target coordinates.

<a id="entry-presentation_swift_api_partialdifferentialequationtransformationresult_transformed"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationtransformationresult_transformed.72c8b0825faa"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationTransformationResult method</p>

```swift signature
func transformed() -> Bool
```

Whether a verified transformation was produced.

### PartialDifferentialEquationTransformationDecline

*Not exposed by the Swift bindings. Available as [`api::PartialDifferentialEquationTransformationDecline`](/symi/rust/partial-differential-equation-results#partialdifferentialequationtransformationdecline) in Rust.*


The exact reason a coordinate transformation was not constructed.

Cases: `ConditionDerivativeOrderNotSupported`, `CoordinateMapArityMismatch`, `CoordinateMapContainsDependentFunction`, `CoordinateMapDirectionMissing`, `CoordinateMapUsesWrongVariables`, `DuplicateOrCollidingCoordinateVariables`, `InverseMapInconclusive`, `InverseMapRejected`, `InverseNotRecovered`, `JacobianIsZero`, `JacobianNonzeroNotProved`, `TargetDependentFunctionInvalid`, `TargetProblemInvalid`, `TwoSourceAndTargetVariablesRequired`.

### PartialDifferentialEquationTransformationVerificationReport

Independent exact evidence that a coordinate transformation is correct.

<a id="entry-presentation_swift_api_partialdifferentialequationtransformationverificationreport_claimed_governing_residual"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationtransformationverificationreport_claimedgoverningresidual.632e1d8c0c0c"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationTransformationVerificationReport method</p>

```swift signature
func claimedGoverningResidual() -> UniffiExpression
```

The governing residual the transformation claimed.

<a id="entry-presentation_swift_api_partialdifferentialequationtransformationverificationreport_composition_residuals"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationtransformationverificationreport_compositionresiduals.b4f3ca3499e3"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationTransformationVerificationReport method</p>

```swift signature
func compositionResiduals() -> [UniffiExpression]
```

Every forward and inverse map-composition residual.

<a id="entry-presentation_swift_api_partialdifferentialequationtransformationverificationreport_jacobian"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationtransformationverificationreport_jacobian.a3eb7f7e1993"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationTransformationVerificationReport method</p>

```swift signature
func jacobian() -> UniffiExpression
```

The independently recomputed forward-map Jacobian.

<a id="entry-presentation_swift_api_partialdifferentialequationtransformationverificationreport_principal_congruence_residuals"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationtransformationverificationreport_principalcongruenceresiduals.08515ecc11e5"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationTransformationVerificationReport method</p>

```swift signature
func principalCongruenceResiduals() -> [UniffiExpression]
```

The exact principal-matrix congruence residuals.

<a id="entry-presentation_swift_api_partialdifferentialequationtransformationverificationreport_transformed_governing_residual"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationtransformationverificationreport_transformedgoverningresidual.499a207e532f"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationTransformationVerificationReport method</p>

```swift signature
func transformedGoverningResidual() -> UniffiExpression
```

The independently transformed source governing residual.

<a id="entry-presentation_swift_api_partialdifferentialequationtransformationverificationreport_verdict"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationtransformationverificationreport_verdict.271d02a40a76"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationTransformationVerificationReport method</p>

```swift signature
func verdict() -> UniffiPartialDifferentialEquationVerificationVerdict
```

The aggregate exact verification verdict.

### PartialDifferentialEquationCanonicalizationResult

The verified canonical coordinates or typed decline from automatic canonicalization.

<a id="entry-presentation_swift_api_partialdifferentialequationcanonicalizationresult_canonicalized"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationcanonicalizationresult_canonicalized.8e6192a90220"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCanonicalizationResult method</p>

```swift signature
func canonicalized() -> Bool
```

Whether verified canonical coordinates were constructed.

<a id="entry-presentation_swift_api_partialdifferentialequationcanonicalizationresult_decline"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationcanonicalizationresult_decline.a56f5af0e1f1"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCanonicalizationResult method</p>

```swift signature
func decline() -> UniffiPartialDifferentialEquationCanonicalizationDecline?
```

The exact reason automatic canonicalization declined.

<a id="entry-presentation_swift_api_partialdifferentialequationcanonicalizationresult_principal_form"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationcanonicalizationresult_principalform.1644701a914e"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCanonicalizationResult method</p>

```swift signature
func principalForm() -> UniffiPartialDifferentialEquationCanonicalPrincipalForm?
```

The exact canonical principal form that was reached.

<a id="entry-presentation_swift_api_partialdifferentialequationcanonicalizationresult_transformation"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationcanonicalizationresult_transformation.e6d1a1488442"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCanonicalizationResult method</p>

```swift signature
func transformation() -> UniffiPartialDifferentialEquationTransformationResult?
```

The verified coordinate transformation of a successful canonicalization.

<a id="entry-presentation_swift_api_partialdifferentialequationcanonicalizationresult_transformation_decline"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationcanonicalizationresult_transformationdecline.764fe16c1fbf"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCanonicalizationResult method</p>

```swift signature
func transformationDecline() -> UniffiPartialDifferentialEquationTransformationDecline?
```

The underlying coordinate-transformation decline, when one caused the decline.

### PartialDifferentialEquationCanonicalPrincipalForm

*Not exposed by the Swift bindings. Available as [`api::PartialDifferentialEquationCanonicalPrincipalForm`](/symi/rust/partial-differential-equation-results#partialdifferentialequationcanonicalprincipalform) in Rust.*


The frozen canonical principal form claimed by automatic canonicalization.

Cases: `EllipticSumOfPureSecondDerivatives`, `HyperbolicMixedSecondDerivative`, `ParabolicSinglePureSecondDerivative`.

### PartialDifferentialEquationCanonicalizationDecline

*Not exposed by the Swift bindings. Available as [`api::PartialDifferentialEquationCanonicalizationDecline`](/symi/rust/partial-differential-equation-results#partialdifferentialequationcanonicalizationdecline) in Rust.*


The exact reason automatic canonicalization returned no verified transformation.

Cases: `CharacteristicCoordinateNotClosed`, `ConstantPrincipalCoefficientNotProved`, `CoordinateTransformationDeclined`, `NoSafePrincipalPivot`, `SecondOrderTypeNotDefinite`, `SimpleTransversalNonzeroNotProved`, `TransformationVerificationNotDefinite`, `VariableCoefficientEllipticCanonicalizationNotSupported`.

### PartialDifferentialEquationSeparationResult

A verified directed separation: the two one-variable ordinary differential
equations the PDE separated into, the separation constant introduced, the
`strategy` (additive or multiplicative) that produced them, the
`reconstruction` that rebuilds a solution of the original equation from
solutions of the factors, and the `verification` of that reconstruction. Each
factor is an equation [the ODE routes](ordinary-differential-equations.md) can
close.

<a id="entry-presentation_swift_api_partialdifferentialequationseparationresult_first_equation"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationseparationresult_firstequation.31e30b5ffe71"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSeparationResult method</p>

```swift signature
func firstEquation() -> UniffiPartialDifferentialEquationSeparatedEquation
```

The first exact one-variable ordinary differential equation.

<a id="entry-presentation_swift_api_partialdifferentialequationseparationresult_reconstruction"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationseparationresult_reconstruction.77e1b13e81e0"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSeparationResult method</p>

```swift signature
func reconstruction() -> UniffiExpression
```

The exact reconstruction expression for the separated factors.

<a id="entry-presentation_swift_api_partialdifferentialequationseparationresult_second_equation"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationseparationresult_secondequation.d1a5abe1dd18"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSeparationResult method</p>

```swift signature
func secondEquation() -> UniffiPartialDifferentialEquationSeparatedEquation
```

The second exact one-variable ordinary differential equation.

<a id="entry-presentation_swift_api_partialdifferentialequationseparationresult_separation_constant"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationseparationresult_separationconstant.467c97c73cfb"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSeparationResult method</p>

```swift signature
func separationConstant() -> UniffiExpression
```

The fresh exact separation constant.

<a id="entry-presentation_swift_api_partialdifferentialequationseparationresult_verification"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationseparationresult_verification.da63f20d9178"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSeparationResult method</p>

```swift signature
func verification() -> UniffiPartialDifferentialEquationVerificationVerdict
```

The aggregate verdict of the independently replayed separation certificate.

### PartialDifferentialEquationSeparatedEquation

One exact separated ordinary differential equation exposed by a PDE transformation.

<a id="entry-presentation_swift_api_partialdifferentialequationseparatedequation_independent_variable_name"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationseparatedequation_independentvariablename.07f2843e035b"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSeparatedEquation method</p>

```swift signature
func independentVariableName() -> String
```

The name of this equation's independent variable.

<a id="entry-presentation_swift_api_partialdifferentialequationseparatedequation_residual"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationseparatedequation_residual.cf2ee0b6af1d"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSeparatedEquation method</p>

```swift signature
func residual() -> UniffiExpression
```

The exact residual of this one-variable ordinary differential equation.

### PartialDifferentialEquationSeparationStrategy

*Not exposed by the Swift bindings. Available as [`api::PartialDifferentialEquationSeparationStrategy`](/symi/rust/partial-differential-equation-results#partialdifferentialequationseparationstrategy) in Rust.*


The directed ansatz used by a verified PDE separation transformation.

Cases: `Additive`, `Automatic`, `Multiplicative`.

## Point symmetries

Every symmetry record carries its own verification and the obligations it does
*not* discharge. Discrete symmetries are never claimed, and a family of
invariant solutions always records that it is not the general solution.

### PartialDifferentialEquationPointSymmetryGenerator

One point-symmetry generator of a PDE, given by its infinitesimals.

<a id="entry-presentation_swift_api_partialdifferentialequationpointsymmetrygenerator_coordinate_infinitesimals"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetrygenerator_coordinateinfinitesimals.107a614fa25b"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryGenerator method</p>

```swift signature
func coordinateInfinitesimals() -> [UniffiExpression]
```

The coordinate infinitesimals in the problem's independent-variable order.

<a id="entry-presentation_swift_api_partialdifferentialequationpointsymmetrygenerator_dependent_infinitesimal"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetrygenerator_dependentinfinitesimal.96e64d3f77cd"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryGenerator method</p>

```swift signature
func dependentInfinitesimal() -> UniffiExpression
```

The dependent infinitesimal of the generator.

### PartialDifferentialEquationPointSymmetryAlgebra

The derived point-symmetry algebra of a PDE, or its typed decline.

<a id="entry-presentation_swift_api_partialdifferentialequationpointsymmetryalgebra_admits_additive_solution_symmetry"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryalgebra_admitsadditivesolutionsymmetry.c4abee53fc7a"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAlgebra method</p>

```swift signature
func admitsAdditiveSolutionSymmetry() -> Bool
```

Whether adding any solution of the linear homogeneous equation is also a symmetry.

<a id="entry-presentation_swift_api_partialdifferentialequationpointsymmetryalgebra_basis"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryalgebra_basis.dbbaab5c9c1a"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAlgebra method</p>

```swift signature
func basis() -> [UniffiPartialDifferentialEquationPointSymmetryGenerator]
```

The independently verified basis generators, one per parameter.

<a id="entry-presentation_swift_api_partialdifferentialequationpointsymmetryalgebra_decline"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryalgebra_decline.564c4afc012a"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAlgebra method</p>

```swift signature
func decline() -> UniffiPartialDifferentialEquationPointSymmetryDecline?
```

The typed reason the algebra was not derived.

<a id="entry-presentation_swift_api_partialdifferentialequationpointsymmetryalgebra_determining_equations"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryalgebra_determiningequations.effc248aebdb"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAlgebra method</p>

```swift signature
func determiningEquations() -> [UniffiExpression]
```

The determining equations exactly as derived, before any reduction.

<a id="entry-presentation_swift_api_partialdifferentialequationpointsymmetryalgebra_general_generator"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryalgebra_generalgenerator.d4a6cd5b775a"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAlgebra method</p>

```swift signature
func generalGenerator() -> UniffiPartialDifferentialEquationPointSymmetryGenerator?
```

The general generator, a combination of the basis through the parameters.

<a id="entry-presentation_swift_api_partialdifferentialequationpointsymmetryalgebra_outstanding_obligations"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryalgebra_outstandingobligations.162fde4da8c6"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAlgebra method</p>

```swift signature
func outstandingObligations() -> [UniffiPartialDifferentialEquationSymmetryObligation]
```

The claims the algebra explicitly does not make.

<a id="entry-presentation_swift_api_partialdifferentialequationpointsymmetryalgebra_parameters"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryalgebra_parameters.08880abc4d8c"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAlgebra method</p>

```swift signature
func parameters() -> [UniffiExpression]
```

The constants of the general generator, one per basis generator.

### PartialDifferentialEquationPointSymmetryDecline

*Not exposed by the Swift bindings. Available as [`api::PartialDifferentialEquationPointSymmetryDecline`](/symi/rust/partial-differential-equation-results#partialdifferentialequationpointsymmetrydecline) in Rust.*


Why the point-symmetry algebra of a partial differential equation was not derived.

Cases: `AdditiveComponentNotRecognized`, `Cancelled`, `ConditionNotPolynomialInTheFreeJets`, `DeterminingSystemNotLinear`, `DeterminingSystemNotReduced`, `GeneratorNotVerified`, `InitialOrBoundaryDataNotSupported`, `JetCoordinatesNotRecognized`, `OrderNotSupported`, `PrincipalJetNotFound`, `SuperpositionNotVerified`, `WorkLimitExceeded`.

### PartialDifferentialEquationPointSymmetryAction

The connected local point-symmetry action of a PDE, or its typed decline.

<a id="entry-presentation_swift_api_partialdifferentialequationpointsymmetryaction_admits_additive_solution_symmetry"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryaction_admitsadditivesolutionsymmetry.7976f19bff6b"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAction method</p>

```swift signature
func admitsAdditiveSolutionSymmetry() -> Bool
```

Whether the action adds an arbitrary solution by linear superposition.

<a id="entry-presentation_swift_api_partialdifferentialequationpointsymmetryaction_amplitude"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryaction_amplitude.0db9a431fa3c"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAction method</p>

```swift signature
func amplitude() -> UniffiExpression?
```

The amplitude multiplying the transformed seed.

<a id="entry-presentation_swift_api_partialdifferentialequationpointsymmetryaction_applied_to_seed"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryaction_appliedtoseed.89a4fee91394"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAction method</p>

```swift signature
func appliedToSeed(seed: UniffiUndefinedFunction) -> UniffiExpression
```

The transformed seed solution under the action.

<a id="entry-presentation_swift_api_partialdifferentialequationpointsymmetryaction_applied_to_seed_with_additive_solution"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryaction_appliedtoseedwithadditivesolution.05d7e781170a"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAction method</p>

```swift signature
func appliedToSeedWithAdditiveSolution(
    seed: UniffiUndefinedFunction,
    additiveSolution: UniffiUndefinedFunction,
) -> UniffiExpression
```

The transformed seed solution plus an added solution under the action.

<a id="entry-presentation_swift_api_partialdifferentialequationpointsymmetryaction_decline"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryaction_decline.7c4c09e94b1a"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAction method</p>

```swift signature
func decline() -> UniffiPartialDifferentialEquationSymmetryActionDecline?
```

The typed reason the action was not constructed.

<a id="entry-presentation_swift_api_partialdifferentialequationpointsymmetryaction_intertwining"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryaction_intertwining.ea1d5bbc74f6"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAction method</p>

```swift signature
func intertwining() -> UniffiPartialDifferentialEquationVerificationVerdict?
```

The exact decision on the intertwining identity.

<a id="entry-presentation_swift_api_partialdifferentialequationpointsymmetryaction_invertibility"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryaction_invertibility.c3a911864067"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAction method</p>

```swift signature
func invertibility() -> UniffiPartialDifferentialEquationVerificationVerdict?
```

The exact decision that the coordinate map is invertible on its chart.

<a id="entry-presentation_swift_api_partialdifferentialequationpointsymmetryaction_multiplier"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryaction_multiplier.faef52f6b90b"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAction method</p>

```swift signature
func multiplier() -> UniffiExpression?
```

The multiplier of the intertwining identity.

<a id="entry-presentation_swift_api_partialdifferentialequationpointsymmetryaction_outstanding_obligations"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryaction_outstandingobligations.63b0fae73713"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAction method</p>

```swift signature
func outstandingObligations() -> [UniffiPartialDifferentialEquationSymmetryObligation]
```

The claims the action explicitly does not make.

<a id="entry-presentation_swift_api_partialdifferentialequationpointsymmetryaction_parameters"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryaction_parameters.8072339a2f4e"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAction method</p>

```swift signature
func parameters() -> [UniffiExpression]
```

The group parameters the closed forms depend on.

<a id="entry-presentation_swift_api_partialdifferentialequationpointsymmetryaction_point_symmetry_decline"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryaction_pointsymmetrydecline.de5fe0e89971"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAction method</p>

```swift signature
func pointSymmetryDecline() -> UniffiPartialDifferentialEquationPointSymmetryDecline?
```

The reason the underlying point-symmetry algebra was not derived, when it was not.

<a id="entry-presentation_swift_api_partialdifferentialequationpointsymmetryaction_transformed_coordinates"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryaction_transformedcoordinates.642f7c949700"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAction method</p>

```swift signature
func transformedCoordinates() -> [UniffiExpression]
```

The coordinates at which a seed solution is evaluated.

### PartialDifferentialEquationSymmetryActionDecline

*Not exposed by the Swift bindings. Available as [`api::PartialDifferentialEquationSymmetryActionDecline`](/symi/rust/partial-differential-equation-results#partialdifferentialequationsymmetryactiondecline) in Rust.*


Why the connected point-symmetry action of a partial differential equation was not constructed.

Cases: `ActionNotVerified`, `GeneratorsDoNotSpanTheAlgebra`, `IncompatibleTransformations`, `NotTheIdentityAtTheOrigin`, `OneParameterGroupNotIntegrated`, `PointSymmetryAlgebraNotDerived`.

### PartialDifferentialEquationSymmetryObligation

*Not exposed by the Swift bindings. Available as [`api::PartialDifferentialEquationSymmetryObligation`](/symi/rust/partial-differential-equation-results#partialdifferentialequationsymmetryobligation) in Rust.*


A mathematical claim a symmetry result explicitly does not make.

Cases: `DiscretePointSymmetriesNotDerived`, `SimilarityFamilyIsNotTheGeneralSolution`, `TransformedCoordinatesLieInTheSeedChart`.

### PartialDifferentialEquationSimilaritySolution

The invariant solutions of a PDE under one point symmetry, or a typed decline.

<a id="entry-presentation_swift_api_partialdifferentialequationsimilaritysolution_decline"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsimilaritysolution_decline.464ecef9e63a"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSimilaritySolution method</p>

```swift signature
func decline() -> UniffiPartialDifferentialEquationSimilarityReductionDecline?
```

The typed reason no similarity family was produced.

<a id="entry-presentation_swift_api_partialdifferentialequationsimilaritysolution_invariant"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsimilaritysolution_invariant.777c267fc2fd"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSimilaritySolution method</p>

```swift signature
func invariant() -> UniffiExpression?
```

The invariant of the generator's base field.

<a id="entry-presentation_swift_api_partialdifferentialequationsimilaritysolution_lifted_constants"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsimilaritysolution_liftedconstants.1134a189dec3"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSimilaritySolution method</p>

```swift signature
func liftedConstants() -> [UniffiExpression]
```

The constants the lifted family is parameterized by.

<a id="entry-presentation_swift_api_partialdifferentialequationsimilaritysolution_lifted_family"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsimilaritysolution_liftedfamily.60253ad39228"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSimilaritySolution method</p>

```swift signature
func liftedFamily() -> UniffiPartialDifferentialEquationSolutionFamily?
```

The invariant solutions of the original equation.

<a id="entry-presentation_swift_api_partialdifferentialequationsimilaritysolution_lifted_family_verification"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsimilaritysolution_liftedfamilyverification.ed76c37d76db"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSimilaritySolution method</p>

```swift signature
func liftedFamilyVerification() -> UniffiPartialDifferentialEquationVerificationVerdict?
```

The exact decision that the lifted family solves the original equation.

<a id="entry-presentation_swift_api_partialdifferentialequationsimilaritysolution_multiplier"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsimilaritysolution_multiplier.d9e470d51354"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSimilaritySolution method</p>

```swift signature
func multiplier() -> UniffiExpression?
```

The multiplier of the reduction identity.

<a id="entry-presentation_swift_api_partialdifferentialequationsimilaritysolution_outstanding_obligations"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsimilaritysolution_outstandingobligations.c7c07be4104f"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSimilaritySolution method</p>

```swift signature
func outstandingObligations() -> [UniffiPartialDifferentialEquationSymmetryObligation]
```

The claims the family explicitly does not make.

<a id="entry-presentation_swift_api_partialdifferentialequationsimilaritysolution_reduced_equation"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsimilaritysolution_reducedequation.507fe9810c62"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSimilaritySolution method</p>

```swift signature
func reducedEquation() -> UniffiExpression?
```

The reduced ordinary differential equation for the profile, read as zero.

<a id="entry-presentation_swift_api_partialdifferentialequationsimilaritysolution_similarity_variable"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsimilaritysolution_similarityvariable.d1f2f25e94e1"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSimilaritySolution method</p>

```swift signature
func similarityVariable() -> UniffiExpression?
```

The coordinate of the reduced equation, standing for the invariant.

<a id="entry-presentation_swift_api_partialdifferentialequationsimilaritysolution_weight"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsimilaritysolution_weight.dfa064be35c6"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSimilaritySolution method</p>

```swift signature
func weight() -> UniffiExpression?
```

The weight of invariant solutions.

### PartialDifferentialEquationSimilarityReductionDecline

*Not exposed by the Swift bindings. Available as [`api::PartialDifferentialEquationSimilarityReductionDecline`](/symi/rust/partial-differential-equation-results#partialdifferentialequationsimilarityreductiondecline) in Rust.*


Why a partial differential equation was not reduced and solved by a point symmetry.

Cases: `GeneratorNotASymmetry`, `GeneratorNotFiberLinear`, `InvariantNotFound`, `LiftedFamilyNotVerified`, `ProfileNotIsolated`, `ReducedEquationNotSolved`, `ReductionDependsOnTheNonInvariantCoordinate`, `TwoIndependentVariablesRequired`, `WeightNotFound`.

## Solving

A solve result carries the method that actually ran, the classification behind
the dispatch, the independent verification of the answer, and — when no route
closed — every method-specific decline the portfolio collected.

### PartialDifferentialEquationSolveResult

What PDE dispatch returns. `verdict` is solved or declined; `method` is the
route that actually ran, never the one that was requested; `classification` is
the analysis the dispatch was based on; `verification` is the independent check
of the returned family; `provenance` is carried only by a verified solution.
When nothing closed, `decline` gives the stable reason and `portfolio_declines`
keeps every method-specific decline the automatic portfolio collected, so a
failure can be read route by route.

<a id="entry-presentation_swift_api_partialdifferentialequationsolveresult_classification"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsolveresult_classification.4b964331ecbf"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolveResult method</p>

```swift signature
func classification() -> UniffiPartialDifferentialEquationClassification?
```

The exact classification the dispatcher established, when it reached one.

<a id="entry-presentation_swift_api_partialdifferentialequationsolveresult_decline"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsolveresult_decline.e852c6112d04"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolveResult method</p>

```swift signature
func decline() -> UniffiPartialDifferentialEquationSolveDecline?
```

The stable decline reason, when no solution was produced.

<a id="entry-presentation_swift_api_partialdifferentialequationsolveresult_method"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsolveresult_method.2c59267e2d84"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolveResult method</p>

```swift signature
func method() -> UniffiPartialDifferentialEquationMethod?
```

The method that produced a solution, when one did.

<a id="entry-presentation_swift_api_partialdifferentialequationsolveresult_provenance"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsolveresult_provenance.e4ec2ca33795"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolveResult method</p>

```swift signature
func provenance() -> UniffiPartialDifferentialEquationSolutionProvenance?
```

The mathematical provenance a verified solution carries.

<a id="entry-presentation_swift_api_partialdifferentialequationsolveresult_solution"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsolveresult_solution.2d2b086fc48f"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolveResult method</p>

```swift signature
func solution() -> UniffiPartialDifferentialEquationSolutionFamily?
```

The verified solution family, which no declined route may carry.

<a id="entry-presentation_swift_api_partialdifferentialequationsolveresult_verdict"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsolveresult_verdict.12cdc8ab2c66"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolveResult method</p>

```swift signature
func verdict() -> UniffiPartialDifferentialEquationSolveVerdict
```

Whether the dispatcher solved or honestly declined.

<a id="entry-presentation_swift_api_partialdifferentialequationsolveresult_verification"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsolveresult_verification.f26765f2ac14"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolveResult method</p>

```swift signature
func verification() -> UniffiPartialDifferentialEquationVerificationReport?
```

The independent verification report a solved result must carry.

### PartialDifferentialEquationSolveVerdict

*Not exposed by the Swift bindings. Available as [`api::PartialDifferentialEquationSolveVerdict`](/symi/rust/partial-differential-equation-results#partialdifferentialequationsolveverdict) in Rust.*


Whether the PDE dispatcher solved or declined.

Cases: `Declined`, `Solved`.

### PartialDifferentialEquationSolveDecline

*Not exposed by the Swift bindings. Available as [`api::PartialDifferentialEquationSolveDecline`](/symi/rust/partial-differential-equation-results#partialdifferentialequationsolvedecline) in Rust.*


The stable reason the automatic-dispatch PDE solver did not return a solution.

Cases: `CanonicalCoordinatesDeclined`, `CanonicalReductionSucceededButNoDownstreamSolver`, `CharacteristicDataNotLocallyDetermining`, `CharacteristicsDeclined`, `ClassificationDeclined`, `CompleteFamilyNotEstablished`, `CompletenessHoldsOnlyOnANarrowerSolutionClass`, `DeclaredGeometryNotSupported`, `DeclaredRegularityNotSupported`, `InconsistentCharacteristicData`, `InitialDataConvolutionDeclined`, `MethodNotImplemented`, `NoImplementedMethodClosed`, `RepeatedIntegrationDeclined`, `TransversalityUnknown`.

### PartialDifferentialEquationSolveOptions

*Not exposed by the Swift bindings. Available as [`api::PartialDifferentialEquationSolveOptions`](/symi/rust/partial-differential-equation-results#partialdifferentialequationsolveoptions) in Rust.*


Binding-neutral options for deterministic partial differential equation solving.

### PartialDifferentialEquationPortfolioDecline

*Not exposed by the Swift bindings. Available as [`api::PartialDifferentialEquationPortfolioDecline`](/symi/rust/partial-differential-equation-results#partialdifferentialequationportfoliodecline) in Rust.*


One method-specific decline retained by automatic PDE portfolio execution.

### PartialDifferentialEquationSolutionFamily

A candidate family, explicit (the unknown as an expression in the coordinates)
or implicit (a residual read as equal to zero), together with the arbitrary
functions it treats as free and the obligations it carries.

`establishes_completeness` is whether the family carries a completeness theorem
whose every identity was proved. A verified residual proves membership in the
solution set, never coverage of it, so a verified family is not thereby a
complete one.

<a id="entry-presentation_swift_api_partialdifferentialequationsolutionfamily_arbitrary_functions"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsolutionfamily_arbitraryfunctions.76d0cef27815"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolutionFamily method</p>

```swift signature
func arbitraryFunctions() -> [UniffiPartialDifferentialEquationArbitraryFunction]
```

The functions that stay arbitrary and opaque throughout verification.

<a id="entry-presentation_swift_api_partialdifferentialequationsolutionfamily_establishes_completeness"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsolutionfamily_establishescompleteness.2b72b820437b"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolutionFamily method</p>

```swift signature
func establishesCompleteness() -> Bool
```

Whether the family carries a completeness theorem whose every identity was proved.

<a id="entry-presentation_swift_api_partialdifferentialequationsolutionfamily_form"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsolutionfamily_form.c9f40376ce85"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolutionFamily method</p>

```swift signature
func form() -> UniffiPartialDifferentialEquationSolutionForm
```

Whether this candidate is an `explicit` value or an `implicit` residual.

<a id="entry-presentation_swift_api_partialdifferentialequationsolutionfamily_proof_obligations"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsolutionfamily_proofobligations.8f7163874900"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolutionFamily method</p>

```swift signature
func proofObligations() -> [UniffiPartialDifferentialEquationProofObligation]
```

The obligations recorded against this candidate family.

### PartialDifferentialEquationSolutionForm

*Not exposed by the Swift bindings. Available as [`api::PartialDifferentialEquationSolutionForm`](/symi/rust/partial-differential-equation-results#partialdifferentialequationsolutionform) in Rust.*


The explicit or implicit mathematical form of a candidate solution family.

Cases: `Explicit`, `Implicit`.

### PartialDifferentialEquationSolutionProvenance

Mathematical provenance carried only by a future verified PDE solution.

<a id="entry-presentation_swift_api_partialdifferentialequationsolutionprovenance_discharged_obligations"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsolutionprovenance_dischargedobligations.c5b3b10e891a"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolutionProvenance method</p>

```swift signature
func dischargedObligations() -> [UniffiPartialDifferentialEquationProofObligation]
```

The obligations discharged by exact query before the solution was returned.

<a id="entry-presentation_swift_api_partialdifferentialequationsolutionprovenance_linearity"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsolutionprovenance_linearity.4fcd63b62e1e"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolutionProvenance method</p>

```swift signature
func linearity() -> UniffiPartialDifferentialEquationLinearity
```

The exact linearity class recorded at the time the candidate was produced.

<a id="entry-presentation_swift_api_partialdifferentialequationsolutionprovenance_method"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsolutionprovenance_method.4b6d74cfcbed"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolutionProvenance method</p>

```swift signature
func method() -> UniffiPartialDifferentialEquationMethod
```

The method identity this solution was produced by.

<a id="entry-presentation_swift_api_partialdifferentialequationsolutionprovenance_order"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsolutionprovenance_order.de0eb8e5daac"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolutionProvenance method</p>

```swift signature
func order() -> UInt64
```

The exact order recorded at the time the candidate was produced.

### PartialDifferentialEquationSolutionClass

*Not exposed by the Swift bindings. Available as [`api::PartialDifferentialEquationSolutionClass`](/symi/rust/partial-differential-equation-results#partialdifferentialequationsolutionclass) in Rust.*


The analytic class of solutions a complete partial differential equation family must cover.

Cases: `PolynomialGrowth`, `Unrestricted`.

### PartialDifferentialEquationGeometricDomain

*Not exposed by the Swift bindings. Available as [`api::PartialDifferentialEquationGeometricDomain`](/symi/rust/partial-differential-equation-results#partialdifferentialequationgeometricdomain) in Rust.*


The geometry a partial differential equation family is requested on.

Cases: `Disk`, `RealLineEvolution`, `WholeSpace`.

### PartialDifferentialEquationRegularity

*Not exposed by the Swift bindings. Available as [`api::PartialDifferentialEquationRegularity`](/symi/rust/partial-differential-equation-results#partialdifferentialequationregularity) in Rust.*


The regularity a partial differential equation family must have on its geometry.

Cases: `OriginRegularAngularPeriodic`, `Unrestricted`.

### PartialDifferentialEquationTransformAxisKind

*Not exposed by the Swift bindings. Available as [`api::PartialDifferentialEquationTransformAxisKind`](/symi/rust/partial-differential-equation-results#partialdifferentialequationtransformaxiskind) in Rust.*


The explicit Cartesian geometry required by a transform PDE route.

Cases: `FourierWholeRealLine`, `LaplaceNonnegativeHalfLine`.

### PartialDifferentialEquationTransformAxisOption

*Not exposed by the Swift bindings. Available as [`api::PartialDifferentialEquationTransformAxisOption`](/symi/rust/partial-differential-equation-results#partialdifferentialequationtransformaxisoption) in Rust.*


One explicitly declared source coordinate and transform-domain variable name.

## Verification

Verification is three-valued. A rejection and an inconclusive reduction are
different answers, and the reason a reduction was inconclusive is part of the
record.

### PartialDifferentialEquationVerificationReport

The evidence from independently verifying a candidate against a problem:
`governing_residual`, one residual per initial and boundary condition,
`explicit_branch` where an implicit family had to be solved for the unknown,
and `proof_obligations`. When `verdict` is inconclusive, `inconclusive_reason`
says which reduction did not close — an unproved zero residual is a different
outcome from a malformed occurrence of the dependent function.

<a id="entry-presentation_swift_api_partialdifferentialequationverificationreport_boundary_condition_residuals"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationverificationreport_boundaryconditionresiduals.168c81e2b6d2"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationVerificationReport method</p>

```swift signature
func boundaryConditionResiduals() -> [UniffiPartialDifferentialEquationVerificationResidual]
```

One reduced residual per boundary condition, in insertion order.

<a id="entry-presentation_swift_api_partialdifferentialequationverificationreport_explicit_branch"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationverificationreport_explicitbranch.8d09a327aafd"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationVerificationReport method</p>

```swift signature
func explicitBranch() -> UniffiExpression?
```

The isolated explicit branch checked for an implicit candidate.

<a id="entry-presentation_swift_api_partialdifferentialequationverificationreport_governing_residual"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationverificationreport_governingresidual.93f4bd65187b"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationVerificationReport method</p>

```swift signature
func governingResidual() -> UniffiPartialDifferentialEquationVerificationResidual
```

Independently reduced governing-equation evidence.

<a id="entry-presentation_swift_api_partialdifferentialequationverificationreport_inconclusive_reason"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationverificationreport_inconclusivereason.971c18d050d7"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationVerificationReport method</p>

```swift signature
func inconclusiveReason() -> UniffiPartialDifferentialEquationVerificationInconclusiveReason?
```

The deterministic reason verification could not reach a proof.

<a id="entry-presentation_swift_api_partialdifferentialequationverificationreport_initial_condition_residuals"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationverificationreport_initialconditionresiduals.210fdcda8e7a"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationVerificationReport method</p>

```swift signature
func initialConditionResiduals() -> [UniffiPartialDifferentialEquationVerificationResidual]
```

One reduced residual per initial condition, in insertion order.

<a id="entry-presentation_swift_api_partialdifferentialequationverificationreport_proof_obligations"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationverificationreport_proofobligations.5e8244fd76a9"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationVerificationReport method</p>

```swift signature
func proofObligations() -> [UniffiPartialDifferentialEquationProofObligation]
```

The obligations consulted or left unresolved by this verification.

<a id="entry-presentation_swift_api_partialdifferentialequationverificationreport_verdict"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationverificationreport_verdict.9f59c565ef60"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationVerificationReport method</p>

```swift signature
func verdict() -> UniffiPartialDifferentialEquationVerificationVerdict
```

The aggregate exact verification verdict.

### PartialDifferentialEquationVerificationVerdict

*Not exposed by the Swift bindings. Available as [`api::PartialDifferentialEquationVerificationVerdict`](/symi/rust/partial-differential-equation-results#partialdifferentialequationverificationverdict) in Rust.*


The exact three-way outcome of PDE candidate verification.

Cases: `Inconclusive`, `Rejected`, `Verified`.

### PartialDifferentialEquationVerificationResidual

One independently reduced residual and its exact verdict.

<a id="entry-presentation_swift_api_partialdifferentialequationverificationresidual_residual"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationverificationresidual_residual.637f1e20a309"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationVerificationResidual method</p>

```swift signature
func residual() -> UniffiExpression
```

The independently reduced residual expression.

<a id="entry-presentation_swift_api_partialdifferentialequationverificationresidual_verdict"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationverificationresidual_verdict.a2cbb6427ec2"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationVerificationResidual method</p>

```swift signature
func verdict() -> UniffiPartialDifferentialEquationVerificationVerdict
```

The exact verdict proved about this one residual.

### PartialDifferentialEquationVerificationInconclusiveReason

*Not exposed by the Swift bindings. Available as [`api::PartialDifferentialEquationVerificationInconclusiveReason`](/symi/rust/partial-differential-equation-results#partialdifferentialequationverificationinconclusivereason) in Rust.*


The exact reason verification could not reach a proof.

Cases: `ImplicitSolutionContainsDerivative`, `ImplicitSolutionNotIsolatable`, `MalformedDependentOccurrence`, `ResidualZeroNotProved`.

## Related

- [Partial differential equations](partial-differential-equations.md) — the
  operations that produce every record on this page.
- [Ordinary differential equations](ordinary-differential-equations.md) — the
  equations separation and similarity reduction reduce to, and their own
  result records.
- [Structured results](structured-results.md) — the general rules for reading
  verdicts, optional fields, and ordered components.
- [Diagnostics](diagnostics.md) — errors, as distinct from typed declines.
