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

<a id="entry-presentation_kotlin_api_partialdifferentialequationproblem_boundary_conditions"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationproblem_boundaryconditions.c5850894fc72"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationProblem method</p>

```kotlin signature
fun boundaryConditions(): List<UniffiExpression>
```

The boundary-condition residuals in insertion order.

<a id="entry-presentation_kotlin_api_partialdifferentialequationproblem_dependent_function"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationproblem_dependentfunction.baf08ad50e90"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationProblem method</p>

```kotlin signature
fun dependentFunction(): kotlin.String
```

The declared dependent-function name.

<a id="entry-presentation_kotlin_api_partialdifferentialequationproblem_equation"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationproblem_equation.1de24748e17f"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationProblem method</p>

```kotlin signature
fun equation(): UniffiExpression
```

The governing residual, interpreted as equal to zero.

<a id="entry-presentation_kotlin_api_partialdifferentialequationproblem_independent_variables"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationproblem_independentvariables.ebac9cae56dd"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationProblem method</p>

```kotlin signature
fun independentVariables(): List<kotlin.String>
```

The independent variables in their semantic declared order.

<a id="entry-presentation_kotlin_api_partialdifferentialequationproblem_initial_conditions"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationproblem_initialconditions.917863c9f997"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationProblem method</p>

```kotlin signature
fun initialConditions(): List<UniffiExpression>
```

The initial-condition residuals in insertion order.

<a id="entry-presentation_kotlin_api_partialdifferentialequationproblem_serialize_object"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationproblem_serializeobject.2738e4601f5f"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationProblem method</p>

```kotlin signature
fun serializeObject(): kotlin.String
```

Serialize this problem in the versioned canonical object grammar.

<a id="entry-presentation_kotlin_api_partialdifferentialequationproblem_to_latex"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationproblem_tolatex.0af18b336fcf"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationProblem method</p>

```kotlin signature
fun toLatex(): kotlin.String
```

Render this problem as LaTeX, as a system when it carries conditions.

### PartialDifferentialEquationProblemError

*Not exposed by the Kotlin bindings. Available as [`api::PartialDifferentialEquationProblemError`](/symi/rust/partial-differential-equation-results#partialdifferentialequationproblemerror) in Rust.*


Typed construction errors reported by the canonical PDE API.

Cases: `AmbiguousDependentFunction`, `ContextMismatch`, `DependentFunctionMustBeUserFunction`, `DerivativeArgumentArityMismatch`, `DiscoveryFailed`, `DuplicateIndependentVariable`, `GoverningEquationIsNotDifferential`, `InconsistentDependentFunctionArguments`, `InsufficientIndependentVariables`, `NoDependentFunctionOccurrence`.

### PartialDifferentialEquationArbitraryFunction

A collision-free arbitrary function allocated for a PDE candidate.

<a id="entry-presentation_kotlin_api_partialdifferentialequationarbitraryfunction_arity"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationarbitraryfunction_arity.8b9b5bd4e4c0"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationArbitraryFunction method</p>

```kotlin signature
fun arity(): kotlin.ULong
```

The recorded and validated function arity.

<a id="entry-presentation_kotlin_api_partialdifferentialequationarbitraryfunction_name"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationarbitraryfunction_name.c7368587a428"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationArbitraryFunction method</p>

```kotlin signature
fun name(): kotlin.String
```

The collision-free allocated function name.

### PartialDifferentialEquationJet

*Not exposed by the Kotlin bindings. Available as [`api::PartialDifferentialEquationJet`](/symi/rust/partial-differential-equation-results#partialdifferentialequationjet) in Rust.*


A dependent-function jet represented by derivative orders in variable order.

### PartialDifferentialEquationJetCoefficient

One exact coefficient associated with a dependent-function jet.

<a id="entry-presentation_kotlin_api_partialdifferentialequationjetcoefficient_coefficient"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationjetcoefficient_coefficient.804d7d84b549"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationJetCoefficient method</p>

```kotlin signature
fun coefficient(): UniffiExpression
```

The exact coefficient expression.

## Classification and the principal part

Classification reports what was *proved* about an equation. A type claimed
without a proved sign condition is reported as a case table or as unknown, never
asserted.

### PartialDifferentialEquationClassification

Exact structural analysis data for one scalar partial differential equation.

<a id="entry-presentation_kotlin_api_partialdifferentialequationclassification_coefficient_data"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationclassification_coefficientdata.43a776bbb86f"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationClassification method</p>

```kotlin signature
fun coefficientData(): UniffiPartialDifferentialEquationCoefficientData
```

The exact affine coefficient data extracted from the governing residual.

<a id="entry-presentation_kotlin_api_partialdifferentialequationclassification_linearity"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationclassification_linearity.a2ecc68fab09"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationClassification method</p>

```kotlin signature
fun linearity(): UniffiPartialDifferentialEquationLinearity
```

The most-specific exact linearity class.

<a id="entry-presentation_kotlin_api_partialdifferentialequationclassification_method_candidates"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationclassification_methodcandidates.08a4db6c78e5"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationClassification method</p>

```kotlin signature
fun methodCandidates(): List<UniffiPartialDifferentialEquationMethodCandidate>
```

The advisory methods in deterministic preference order.

<a id="entry-presentation_kotlin_api_partialdifferentialequationclassification_order"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationclassification_order.d3d9c88a69c7"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationClassification method</p>

```kotlin signature
fun order(): kotlin.ULong
```

The exact highest derivative order.

<a id="entry-presentation_kotlin_api_partialdifferentialequationclassification_second_order_principal_part"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationclassification_secondorderprincipalpart.e64791837193"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationClassification method</p>

```kotlin signature
fun secondOrderPrincipalPart(): UniffiPartialDifferentialEquationPrincipalPart?
```

The exact second-order principal metadata, when the equation has one.

### PartialDifferentialEquationCoefficientData

The exact affine coefficient data yielded by PDE classification.

<a id="entry-presentation_kotlin_api_partialdifferentialequationcoefficientdata_full_coefficients"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationcoefficientdata_fullcoefficients.cd5d640cbac4"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCoefficientData method</p>

```kotlin signature
fun fullCoefficients(): List<UniffiPartialDifferentialEquationJetCoefficient>?
```

Every jet coefficient, when the equation is exactly linear.

<a id="entry-presentation_kotlin_api_partialdifferentialequationcoefficientdata_highest_order_coefficients"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationcoefficientdata_highestordercoefficients.358bf0b0ed58"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCoefficientData method</p>

```kotlin signature
fun highestOrderCoefficients(): List<UniffiPartialDifferentialEquationJetCoefficient>?
```

The highest-order jet coefficients, when the equation is affine in them.

<a id="entry-presentation_kotlin_api_partialdifferentialequationcoefficientdata_homogeneous"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationcoefficientdata_homogeneous.d676eb7ef957"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCoefficientData method</p>

```kotlin signature
fun homogeneous(): kotlin.Boolean?
```

Whether the equation was proved homogeneous, when that statement is meaningful.

<a id="entry-presentation_kotlin_api_partialdifferentialequationcoefficientdata_remainder"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationcoefficientdata_remainder.b2d4d965ce3e"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCoefficientData method</p>

```kotlin signature
fun remainder(): UniffiExpression?
```

The exact jet-free remainder term, when one was extracted.

### PartialDifferentialEquationLinearity

*Not exposed by the Kotlin bindings. Available as [`api::PartialDifferentialEquationLinearity`](/symi/rust/partial-differential-equation-results#partialdifferentialequationlinearity) in Rust.*


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

<a id="entry-presentation_kotlin_api_partialdifferentialequationprincipalpart_derivative_coefficients"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationprincipalpart_derivativecoefficients.b2ec18259b1f"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPrincipalPart method</p>

```kotlin signature
fun derivativeCoefficients(): List<UniffiPartialDifferentialEquationPrincipalCoefficient>
```

The raw mixed-derivative coefficients, before symmetrization halves them.

<a id="entry-presentation_kotlin_api_partialdifferentialequationprincipalpart_matrix"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationprincipalpart_matrix.5df8c1d237ca"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPrincipalPart method</p>

```kotlin signature
fun matrix(): UniffiMatrix
```

The symmetric principal matrix whose quadratic form is the exact principal symbol.

### PartialDifferentialEquationPrincipalCoefficient

One raw second-order principal coefficient before mixed-term symmetrization.

<a id="entry-presentation_kotlin_api_partialdifferentialequationprincipalcoefficient_coefficient"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationprincipalcoefficient_coefficient.38d9336ec650"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPrincipalCoefficient method</p>

```kotlin signature
fun coefficient(): UniffiExpression
```

The raw coefficient expression, before mixed terms are halved.

### PartialDifferentialEquationSecondOrderClassification

The elliptic, parabolic, or hyperbolic analysis of a two-variable linear
second-order equation. `verdict` says which kind of answer this is — one type
proved outright, a complete table of cases each with its own proved condition,
or neither. `discriminant` and `principal_matrix` are the exact data the type
was read from, and `proof_obligations` records what the classification assumed
but did not prove.

<a id="entry-presentation_kotlin_api_partialdifferentialequationsecondorderclassification_cases"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsecondorderclassification_cases.bb9a3b4afc85"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSecondOrderClassification method</p>

```kotlin signature
fun cases(): List<UniffiPartialDifferentialEquationSecondOrderTypeCase>
```

The complete exact case table, when the verdict is conditional.

<a id="entry-presentation_kotlin_api_partialdifferentialequationsecondorderclassification_decline"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsecondorderclassification_decline.6cc70681d71c"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSecondOrderClassification method</p>

```kotlin signature
fun decline(): UniffiPartialDifferentialEquationSecondOrderClassificationDecline?
```

The exact reason an unknown analysis could not be completed.

<a id="entry-presentation_kotlin_api_partialdifferentialequationsecondorderclassification_discriminant"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsecondorderclassification_discriminant.1113bce4edf0"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSecondOrderClassification method</p>

```kotlin signature
fun discriminant(): UniffiExpression
```

The exact discriminant `b^2 - a*c` of the symmetric principal matrix.

<a id="entry-presentation_kotlin_api_partialdifferentialequationsecondorderclassification_equation_type"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsecondorderclassification_equationtype.753b8563ef98"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSecondOrderClassification method</p>

```kotlin signature
fun equationType(): UniffiPartialDifferentialEquationSecondOrderType?
```

The single proved classical type, when the verdict is definite.

<a id="entry-presentation_kotlin_api_partialdifferentialequationsecondorderclassification_principal_matrix"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsecondorderclassification_principalmatrix.ccf34d3f5704"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSecondOrderClassification method</p>

```kotlin signature
fun principalMatrix(): UniffiMatrix
```

The frozen symmetric principal matrix this analysis classified.

<a id="entry-presentation_kotlin_api_partialdifferentialequationsecondorderclassification_proof_obligations"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsecondorderclassification_proofobligations.2a20606f89d8"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSecondOrderClassification method</p>

```kotlin signature
fun proofObligations(): List<UniffiPartialDifferentialEquationProofObligation>
```

The obligations a downstream canonical-coordinate route must discharge.

<a id="entry-presentation_kotlin_api_partialdifferentialequationsecondorderclassification_verdict"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsecondorderclassification_verdict.71cdcf74ce9b"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSecondOrderClassification method</p>

```kotlin signature
fun verdict(): UniffiPartialDifferentialEquationSecondOrderTypeVerdict
```

Whether one type, a complete case table, or neither was proved.

### PartialDifferentialEquationSecondOrderType

*Not exposed by the Kotlin bindings. Available as [`api::PartialDifferentialEquationSecondOrderType`](/symi/rust/partial-differential-equation-results#partialdifferentialequationsecondordertype) in Rust.*


The exact real classical type of a second-order principal part.

Cases: `Degenerate`, `Elliptic`, `Hyperbolic`, `Parabolic`.

### PartialDifferentialEquationSecondOrderTypeCase

One exact condition and the classical second-order type proved under it.

<a id="entry-presentation_kotlin_api_partialdifferentialequationsecondordertypecase_condition"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsecondordertypecase_condition.b0d2440c0ae1"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSecondOrderTypeCase method</p>

```kotlin signature
fun condition(): UniffiAssumptionProposition
```

The exact condition under which this case's classical type holds.

<a id="entry-presentation_kotlin_api_partialdifferentialequationsecondordertypecase_equation_type"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsecondordertypecase_equationtype.f745d20f783d"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSecondOrderTypeCase method</p>

```kotlin signature
fun equationType(): UniffiPartialDifferentialEquationSecondOrderType
```

The classical type proved under this case's condition.

### PartialDifferentialEquationSecondOrderTypeVerdict

*Not exposed by the Kotlin bindings. Available as [`api::PartialDifferentialEquationSecondOrderTypeVerdict`](/symi/rust/partial-differential-equation-results#partialdifferentialequationsecondordertypeverdict) in Rust.*


Whether one type was proved, a complete case table was proved, or neither.

Cases: `Conditional`, `Definite`, `Unknown`.

### PartialDifferentialEquationSecondOrderClassificationDecline

*Not exposed by the Kotlin bindings. Available as [`api::PartialDifferentialEquationSecondOrderClassificationDecline`](/symi/rust/partial-differential-equation-results#partialdifferentialequationsecondorderclassificationdecline) in Rust.*


The exact reason second-order type analysis returned no definite or conditional type.

Cases: `BudgetExceeded`, `InconsistentAssumptions`, `NotTwoVariableSecondOrderLinear`, `PrincipalPartNotAvailable`, `RealPrincipalCoefficientsNotProved`, `TypeNotProved`.

### PartialDifferentialEquationMethod

*Not exposed by the Kotlin bindings. Available as [`api::PartialDifferentialEquationMethod`](/symi/rust/partial-differential-equation-results#partialdifferentialequationmethod) in Rust.*


A stable advisory PDE method identifier.

Cases: `Automatic`, `CanonicalCoordinates`, `Characteristics`, `FourierTransform`, `InitialDataConvolution`, `LaplaceTransform`, `RepeatedIntegration`, `Separation`.

### PartialDifferentialEquationMethodCandidate

One advisory PDE method candidate and its exact proof-obligation spellings.

<a id="entry-presentation_kotlin_api_partialdifferentialequationmethodcandidate_method"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationmethodcandidate_method.34ecf7a2782c"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationMethodCandidate method</p>

```kotlin signature
fun method(): UniffiPartialDifferentialEquationMethod
```

The stable advisory method name.

<a id="entry-presentation_kotlin_api_partialdifferentialequationmethodcandidate_proof_obligations"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationmethodcandidate_proofobligations.eb76cd474828"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationMethodCandidate method</p>

```kotlin signature
fun proofObligations(): List<UniffiPartialDifferentialEquationProofObligation>
```

The exact obligations this method must discharge before it may solve.

### PartialDifferentialEquationProofObligation

*Not exposed by the Kotlin bindings. Available as [`api::PartialDifferentialEquationProofObligation`](/symi/rust/partial-differential-equation-results#partialdifferentialequationproofobligation) in Rust.*


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

<a id="entry-presentation_kotlin_api_partialdifferentialequationcoordinatechange_forward_coordinates"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationcoordinatechange_forwardcoordinates.d9778d343354"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCoordinateChange method</p>

```kotlin signature
fun forwardCoordinates(): List<UniffiExpression>
```

The ordered source-to-target coordinate expressions.

<a id="entry-presentation_kotlin_api_partialdifferentialequationcoordinatechange_inverse_coordinates"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationcoordinatechange_inversecoordinates.70904aa6e8ec"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCoordinateChange method</p>

```kotlin signature
fun inverseCoordinates(): List<UniffiExpression>
```

The ordered target-to-source coordinate expressions.

<a id="entry-presentation_kotlin_api_partialdifferentialequationcoordinatechange_jacobian"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationcoordinatechange_jacobian.03e9e1d0f7a8"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCoordinateChange method</p>

```kotlin signature
fun jacobian(): UniffiExpression
```

The exact forward-map Jacobian determinant.

<a id="entry-presentation_kotlin_api_partialdifferentialequationcoordinatechange_serialize_object"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationcoordinatechange_serializeobject.bad31d249550"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCoordinateChange method</p>

```kotlin signature
fun serializeObject(): kotlin.String
```

Serialize this coordinate change in the versioned canonical object grammar.

<a id="entry-presentation_kotlin_api_partialdifferentialequationcoordinatechange_source_variables"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationcoordinatechange_sourcevariables.630d5e08f88c"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCoordinateChange method</p>

```kotlin signature
fun sourceVariables(): List<kotlin.String>
```

The ordered source coordinate names.

<a id="entry-presentation_kotlin_api_partialdifferentialequationcoordinatechange_target_dependent_function"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationcoordinatechange_targetdependentfunction.9dc17aefe0b7"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCoordinateChange method</p>

```kotlin signature
fun targetDependentFunction(): kotlin.String
```

The target unknown-function name.

<a id="entry-presentation_kotlin_api_partialdifferentialequationcoordinatechange_target_variables"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationcoordinatechange_targetvariables.f368730afe6c"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCoordinateChange method</p>

```kotlin signature
fun targetVariables(): List<kotlin.String>
```

The ordered target coordinate names.

### PartialDifferentialEquationTransformationResult

The transformed problem or typed decline from an exact change of variables.

<a id="entry-presentation_kotlin_api_partialdifferentialequationtransformationresult_coordinate_change"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationtransformationresult_coordinatechange.80de44dbfa68"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationTransformationResult method</p>

```kotlin signature
fun coordinateChange(): UniffiPartialDifferentialEquationCoordinateChange?
```

The validated coordinate change of a successful transformation.

<a id="entry-presentation_kotlin_api_partialdifferentialequationtransformationresult_decline"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationtransformationresult_decline.b398799e1f8d"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationTransformationResult method</p>

```kotlin signature
fun decline(): UniffiPartialDifferentialEquationTransformationDecline?
```

The exact reason no transformation was produced.

<a id="entry-presentation_kotlin_api_partialdifferentialequationtransformationresult_normalization_multiplier"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationtransformationresult_normalizationmultiplier.708c4541715e"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationTransformationResult method</p>

```kotlin signature
fun normalizationMultiplier(): UniffiExpression?
```

The proved-nonzero residual-normalization multiplier.

<a id="entry-presentation_kotlin_api_partialdifferentialequationtransformationresult_target_problem"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationtransformationresult_targetproblem.18ce7970765c"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationTransformationResult method</p>

```kotlin signature
fun targetProblem(): UniffiPartialDifferentialEquationProblem?
```

The transformed PDE problem stated in the target coordinates.

<a id="entry-presentation_kotlin_api_partialdifferentialequationtransformationresult_transformed"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationtransformationresult_transformed.b24977bd374b"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationTransformationResult method</p>

```kotlin signature
fun transformed(): kotlin.Boolean
```

Whether a verified transformation was produced.

### PartialDifferentialEquationTransformationDecline

*Not exposed by the Kotlin bindings. Available as [`api::PartialDifferentialEquationTransformationDecline`](/symi/rust/partial-differential-equation-results#partialdifferentialequationtransformationdecline) in Rust.*


The exact reason a coordinate transformation was not constructed.

Cases: `ConditionDerivativeOrderNotSupported`, `CoordinateMapArityMismatch`, `CoordinateMapContainsDependentFunction`, `CoordinateMapDirectionMissing`, `CoordinateMapUsesWrongVariables`, `DuplicateOrCollidingCoordinateVariables`, `InverseMapInconclusive`, `InverseMapRejected`, `InverseNotRecovered`, `JacobianIsZero`, `JacobianNonzeroNotProved`, `TargetDependentFunctionInvalid`, `TargetProblemInvalid`, `TwoSourceAndTargetVariablesRequired`.

### PartialDifferentialEquationTransformationVerificationReport

Independent exact evidence that a coordinate transformation is correct.

<a id="entry-presentation_kotlin_api_partialdifferentialequationtransformationverificationreport_claimed_governing_residual"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationtransformationverificationreport_claimedgoverningresidual.861488f1a083"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationTransformationVerificationReport method</p>

```kotlin signature
fun claimedGoverningResidual(): UniffiExpression
```

The governing residual the transformation claimed.

<a id="entry-presentation_kotlin_api_partialdifferentialequationtransformationverificationreport_composition_residuals"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationtransformationverificationreport_compositionresiduals.8f4f6276ad4f"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationTransformationVerificationReport method</p>

```kotlin signature
fun compositionResiduals(): List<UniffiExpression>
```

Every forward and inverse map-composition residual.

<a id="entry-presentation_kotlin_api_partialdifferentialequationtransformationverificationreport_jacobian"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationtransformationverificationreport_jacobian.78fa31bb90e2"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationTransformationVerificationReport method</p>

```kotlin signature
fun jacobian(): UniffiExpression
```

The independently recomputed forward-map Jacobian.

<a id="entry-presentation_kotlin_api_partialdifferentialequationtransformationverificationreport_principal_congruence_residuals"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationtransformationverificationreport_principalcongruenceresiduals.c0293bc2e737"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationTransformationVerificationReport method</p>

```kotlin signature
fun principalCongruenceResiduals(): List<UniffiExpression>
```

The exact principal-matrix congruence residuals.

<a id="entry-presentation_kotlin_api_partialdifferentialequationtransformationverificationreport_transformed_governing_residual"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationtransformationverificationreport_transformedgoverningresidual.e9b04a7820fe"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationTransformationVerificationReport method</p>

```kotlin signature
fun transformedGoverningResidual(): UniffiExpression
```

The independently transformed source governing residual.

<a id="entry-presentation_kotlin_api_partialdifferentialequationtransformationverificationreport_verdict"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationtransformationverificationreport_verdict.59700689f2b8"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationTransformationVerificationReport method</p>

```kotlin signature
fun verdict(): UniffiPartialDifferentialEquationVerificationVerdict
```

The aggregate exact verification verdict.

### PartialDifferentialEquationCanonicalizationResult

The verified canonical coordinates or typed decline from automatic canonicalization.

<a id="entry-presentation_kotlin_api_partialdifferentialequationcanonicalizationresult_canonicalized"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationcanonicalizationresult_canonicalized.d883bd9fdc14"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCanonicalizationResult method</p>

```kotlin signature
fun canonicalized(): kotlin.Boolean
```

Whether verified canonical coordinates were constructed.

<a id="entry-presentation_kotlin_api_partialdifferentialequationcanonicalizationresult_decline"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationcanonicalizationresult_decline.2714d3e64129"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCanonicalizationResult method</p>

```kotlin signature
fun decline(): UniffiPartialDifferentialEquationCanonicalizationDecline?
```

The exact reason automatic canonicalization declined.

<a id="entry-presentation_kotlin_api_partialdifferentialequationcanonicalizationresult_principal_form"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationcanonicalizationresult_principalform.5b330efec438"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCanonicalizationResult method</p>

```kotlin signature
fun principalForm(): UniffiPartialDifferentialEquationCanonicalPrincipalForm?
```

The exact canonical principal form that was reached.

<a id="entry-presentation_kotlin_api_partialdifferentialequationcanonicalizationresult_transformation"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationcanonicalizationresult_transformation.1b0f087e8ace"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCanonicalizationResult method</p>

```kotlin signature
fun transformation(): UniffiPartialDifferentialEquationTransformationResult?
```

The verified coordinate transformation of a successful canonicalization.

<a id="entry-presentation_kotlin_api_partialdifferentialequationcanonicalizationresult_transformation_decline"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationcanonicalizationresult_transformationdecline.def2bc26ab1b"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCanonicalizationResult method</p>

```kotlin signature
fun transformationDecline(): UniffiPartialDifferentialEquationTransformationDecline?
```

The underlying coordinate-transformation decline, when one caused the decline.

### PartialDifferentialEquationCanonicalPrincipalForm

*Not exposed by the Kotlin bindings. Available as [`api::PartialDifferentialEquationCanonicalPrincipalForm`](/symi/rust/partial-differential-equation-results#partialdifferentialequationcanonicalprincipalform) in Rust.*


The frozen canonical principal form claimed by automatic canonicalization.

Cases: `EllipticSumOfPureSecondDerivatives`, `HyperbolicMixedSecondDerivative`, `ParabolicSinglePureSecondDerivative`.

### PartialDifferentialEquationCanonicalizationDecline

*Not exposed by the Kotlin bindings. Available as [`api::PartialDifferentialEquationCanonicalizationDecline`](/symi/rust/partial-differential-equation-results#partialdifferentialequationcanonicalizationdecline) in Rust.*


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

<a id="entry-presentation_kotlin_api_partialdifferentialequationseparationresult_first_equation"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationseparationresult_firstequation.0f07c1ea56fc"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSeparationResult method</p>

```kotlin signature
fun firstEquation(): UniffiPartialDifferentialEquationSeparatedEquation
```

The first exact one-variable ordinary differential equation.

<a id="entry-presentation_kotlin_api_partialdifferentialequationseparationresult_reconstruction"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationseparationresult_reconstruction.faa79360ff3d"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSeparationResult method</p>

```kotlin signature
fun reconstruction(): UniffiExpression
```

The exact reconstruction expression for the separated factors.

<a id="entry-presentation_kotlin_api_partialdifferentialequationseparationresult_second_equation"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationseparationresult_secondequation.4e298415886f"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSeparationResult method</p>

```kotlin signature
fun secondEquation(): UniffiPartialDifferentialEquationSeparatedEquation
```

The second exact one-variable ordinary differential equation.

<a id="entry-presentation_kotlin_api_partialdifferentialequationseparationresult_separation_constant"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationseparationresult_separationconstant.71b86c5eccf1"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSeparationResult method</p>

```kotlin signature
fun separationConstant(): UniffiExpression
```

The fresh exact separation constant.

<a id="entry-presentation_kotlin_api_partialdifferentialequationseparationresult_verification"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationseparationresult_verification.c5ae8f03df09"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSeparationResult method</p>

```kotlin signature
fun verification(): UniffiPartialDifferentialEquationVerificationVerdict
```

The aggregate verdict of the independently replayed separation certificate.

### PartialDifferentialEquationSeparatedEquation

One exact separated ordinary differential equation exposed by a PDE transformation.

<a id="entry-presentation_kotlin_api_partialdifferentialequationseparatedequation_independent_variable_name"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationseparatedequation_independentvariablename.d4bcda7bd60e"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSeparatedEquation method</p>

```kotlin signature
fun independentVariableName(): kotlin.String
```

The name of this equation's independent variable.

<a id="entry-presentation_kotlin_api_partialdifferentialequationseparatedequation_residual"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationseparatedequation_residual.bf96b56bcd8b"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSeparatedEquation method</p>

```kotlin signature
fun residual(): UniffiExpression
```

The exact residual of this one-variable ordinary differential equation.

### PartialDifferentialEquationSeparationStrategy

*Not exposed by the Kotlin bindings. Available as [`api::PartialDifferentialEquationSeparationStrategy`](/symi/rust/partial-differential-equation-results#partialdifferentialequationseparationstrategy) in Rust.*


The directed ansatz used by a verified PDE separation transformation.

Cases: `Additive`, `Automatic`, `Multiplicative`.

## Point symmetries

Every symmetry record carries its own verification and the obligations it does
*not* discharge. Discrete symmetries are never claimed, and a family of
invariant solutions always records that it is not the general solution.

### PartialDifferentialEquationPointSymmetryGenerator

One point-symmetry generator of a PDE, given by its infinitesimals.

<a id="entry-presentation_kotlin_api_partialdifferentialequationpointsymmetrygenerator_coordinate_infinitesimals"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationpointsymmetrygenerator_coordinateinfinitesimals.8d6d47bcc7f3"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryGenerator method</p>

```kotlin signature
fun coordinateInfinitesimals(): List<UniffiExpression>
```

The coordinate infinitesimals in the problem's independent-variable order.

<a id="entry-presentation_kotlin_api_partialdifferentialequationpointsymmetrygenerator_dependent_infinitesimal"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationpointsymmetrygenerator_dependentinfinitesimal.58fbd23d613a"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryGenerator method</p>

```kotlin signature
fun dependentInfinitesimal(): UniffiExpression
```

The dependent infinitesimal of the generator.

### PartialDifferentialEquationPointSymmetryAlgebra

The derived point-symmetry algebra of a PDE, or its typed decline.

<a id="entry-presentation_kotlin_api_partialdifferentialequationpointsymmetryalgebra_admits_additive_solution_symmetry"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationpointsymmetryalgebra_admitsadditivesolutionsymmetry.6890d26b29ee"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAlgebra method</p>

```kotlin signature
fun admitsAdditiveSolutionSymmetry(): kotlin.Boolean
```

Whether adding any solution of the linear homogeneous equation is also a symmetry.

<a id="entry-presentation_kotlin_api_partialdifferentialequationpointsymmetryalgebra_basis"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationpointsymmetryalgebra_basis.6c6dfec7fca8"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAlgebra method</p>

```kotlin signature
fun basis(): List<UniffiPartialDifferentialEquationPointSymmetryGenerator>
```

The independently verified basis generators, one per parameter.

<a id="entry-presentation_kotlin_api_partialdifferentialequationpointsymmetryalgebra_decline"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationpointsymmetryalgebra_decline.0e822f10e840"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAlgebra method</p>

```kotlin signature
fun decline(): UniffiPartialDifferentialEquationPointSymmetryDecline?
```

The typed reason the algebra was not derived.

<a id="entry-presentation_kotlin_api_partialdifferentialequationpointsymmetryalgebra_determining_equations"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationpointsymmetryalgebra_determiningequations.fc3f0212d248"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAlgebra method</p>

```kotlin signature
fun determiningEquations(): List<UniffiExpression>
```

The determining equations exactly as derived, before any reduction.

<a id="entry-presentation_kotlin_api_partialdifferentialequationpointsymmetryalgebra_general_generator"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationpointsymmetryalgebra_generalgenerator.69d12d4b50a6"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAlgebra method</p>

```kotlin signature
fun generalGenerator(): UniffiPartialDifferentialEquationPointSymmetryGenerator?
```

The general generator, a combination of the basis through the parameters.

<a id="entry-presentation_kotlin_api_partialdifferentialequationpointsymmetryalgebra_outstanding_obligations"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationpointsymmetryalgebra_outstandingobligations.10de72c92694"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAlgebra method</p>

```kotlin signature
fun outstandingObligations(): List<UniffiPartialDifferentialEquationSymmetryObligation>
```

The claims the algebra explicitly does not make.

<a id="entry-presentation_kotlin_api_partialdifferentialequationpointsymmetryalgebra_parameters"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationpointsymmetryalgebra_parameters.917dafa8b256"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAlgebra method</p>

```kotlin signature
fun parameters(): List<UniffiExpression>
```

The constants of the general generator, one per basis generator.

### PartialDifferentialEquationPointSymmetryDecline

*Not exposed by the Kotlin bindings. Available as [`api::PartialDifferentialEquationPointSymmetryDecline`](/symi/rust/partial-differential-equation-results#partialdifferentialequationpointsymmetrydecline) in Rust.*


Why the point-symmetry algebra of a partial differential equation was not derived.

Cases: `AdditiveComponentNotRecognized`, `Cancelled`, `ConditionNotPolynomialInTheFreeJets`, `DeterminingSystemNotLinear`, `DeterminingSystemNotReduced`, `GeneratorNotVerified`, `InitialOrBoundaryDataNotSupported`, `JetCoordinatesNotRecognized`, `OrderNotSupported`, `PrincipalJetNotFound`, `SuperpositionNotVerified`, `WorkLimitExceeded`.

### PartialDifferentialEquationPointSymmetryAction

The connected local point-symmetry action of a PDE, or its typed decline.

<a id="entry-presentation_kotlin_api_partialdifferentialequationpointsymmetryaction_admits_additive_solution_symmetry"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationpointsymmetryaction_admitsadditivesolutionsymmetry.a2f406bb7732"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAction method</p>

```kotlin signature
fun admitsAdditiveSolutionSymmetry(): kotlin.Boolean
```

Whether the action adds an arbitrary solution by linear superposition.

<a id="entry-presentation_kotlin_api_partialdifferentialequationpointsymmetryaction_amplitude"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationpointsymmetryaction_amplitude.8cb28f65ed60"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAction method</p>

```kotlin signature
fun amplitude(): UniffiExpression?
```

The amplitude multiplying the transformed seed.

<a id="entry-presentation_kotlin_api_partialdifferentialequationpointsymmetryaction_applied_to_seed"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationpointsymmetryaction_appliedtoseed.4053299a3cfa"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAction method</p>

```kotlin signature
fun appliedToSeed(seed: UniffiUndefinedFunction): UniffiExpression
```

The transformed seed solution under the action.

<a id="entry-presentation_kotlin_api_partialdifferentialequationpointsymmetryaction_applied_to_seed_with_additive_solution"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationpointsymmetryaction_appliedtoseedwithadditivesolution.236159f6d310"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAction method</p>

```kotlin signature
fun appliedToSeedWithAdditiveSolution(
    seed: UniffiUndefinedFunction,
    additiveSolution: UniffiUndefinedFunction,
): UniffiExpression
```

The transformed seed solution plus an added solution under the action.

<a id="entry-presentation_kotlin_api_partialdifferentialequationpointsymmetryaction_decline"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationpointsymmetryaction_decline.e6fa93a8ab2b"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAction method</p>

```kotlin signature
fun decline(): UniffiPartialDifferentialEquationSymmetryActionDecline?
```

The typed reason the action was not constructed.

<a id="entry-presentation_kotlin_api_partialdifferentialequationpointsymmetryaction_intertwining"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationpointsymmetryaction_intertwining.062bb6d49526"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAction method</p>

```kotlin signature
fun intertwining(): UniffiPartialDifferentialEquationVerificationVerdict?
```

The exact decision on the intertwining identity.

<a id="entry-presentation_kotlin_api_partialdifferentialequationpointsymmetryaction_invertibility"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationpointsymmetryaction_invertibility.306422dc0f04"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAction method</p>

```kotlin signature
fun invertibility(): UniffiPartialDifferentialEquationVerificationVerdict?
```

The exact decision that the coordinate map is invertible on its chart.

<a id="entry-presentation_kotlin_api_partialdifferentialequationpointsymmetryaction_multiplier"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationpointsymmetryaction_multiplier.02a2c003e45a"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAction method</p>

```kotlin signature
fun multiplier(): UniffiExpression?
```

The multiplier of the intertwining identity.

<a id="entry-presentation_kotlin_api_partialdifferentialequationpointsymmetryaction_outstanding_obligations"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationpointsymmetryaction_outstandingobligations.4a3b6f77010d"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAction method</p>

```kotlin signature
fun outstandingObligations(): List<UniffiPartialDifferentialEquationSymmetryObligation>
```

The claims the action explicitly does not make.

<a id="entry-presentation_kotlin_api_partialdifferentialequationpointsymmetryaction_parameters"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationpointsymmetryaction_parameters.f447a7020339"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAction method</p>

```kotlin signature
fun parameters(): List<UniffiExpression>
```

The group parameters the closed forms depend on.

<a id="entry-presentation_kotlin_api_partialdifferentialequationpointsymmetryaction_point_symmetry_decline"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationpointsymmetryaction_pointsymmetrydecline.6ac771e34a65"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAction method</p>

```kotlin signature
fun pointSymmetryDecline(): UniffiPartialDifferentialEquationPointSymmetryDecline?
```

The reason the underlying point-symmetry algebra was not derived, when it was not.

<a id="entry-presentation_kotlin_api_partialdifferentialequationpointsymmetryaction_transformed_coordinates"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationpointsymmetryaction_transformedcoordinates.341d0e9e50a1"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAction method</p>

```kotlin signature
fun transformedCoordinates(): List<UniffiExpression>
```

The coordinates at which a seed solution is evaluated.

### PartialDifferentialEquationSymmetryActionDecline

*Not exposed by the Kotlin bindings. Available as [`api::PartialDifferentialEquationSymmetryActionDecline`](/symi/rust/partial-differential-equation-results#partialdifferentialequationsymmetryactiondecline) in Rust.*


Why the connected point-symmetry action of a partial differential equation was not constructed.

Cases: `ActionNotVerified`, `GeneratorsDoNotSpanTheAlgebra`, `IncompatibleTransformations`, `NotTheIdentityAtTheOrigin`, `OneParameterGroupNotIntegrated`, `PointSymmetryAlgebraNotDerived`.

### PartialDifferentialEquationSymmetryObligation

*Not exposed by the Kotlin bindings. Available as [`api::PartialDifferentialEquationSymmetryObligation`](/symi/rust/partial-differential-equation-results#partialdifferentialequationsymmetryobligation) in Rust.*


A mathematical claim a symmetry result explicitly does not make.

Cases: `DiscretePointSymmetriesNotDerived`, `SimilarityFamilyIsNotTheGeneralSolution`, `TransformedCoordinatesLieInTheSeedChart`.

### PartialDifferentialEquationSimilaritySolution

The invariant solutions of a PDE under one point symmetry, or a typed decline.

<a id="entry-presentation_kotlin_api_partialdifferentialequationsimilaritysolution_decline"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsimilaritysolution_decline.5a2a43aab25a"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSimilaritySolution method</p>

```kotlin signature
fun decline(): UniffiPartialDifferentialEquationSimilarityReductionDecline?
```

The typed reason no similarity family was produced.

<a id="entry-presentation_kotlin_api_partialdifferentialequationsimilaritysolution_invariant"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsimilaritysolution_invariant.daedf4ce09fb"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSimilaritySolution method</p>

```kotlin signature
fun invariant(): UniffiExpression?
```

The invariant of the generator's base field.

<a id="entry-presentation_kotlin_api_partialdifferentialequationsimilaritysolution_lifted_constants"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsimilaritysolution_liftedconstants.a10c5bbe1341"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSimilaritySolution method</p>

```kotlin signature
fun liftedConstants(): List<UniffiExpression>
```

The constants the lifted family is parameterized by.

<a id="entry-presentation_kotlin_api_partialdifferentialequationsimilaritysolution_lifted_family"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsimilaritysolution_liftedfamily.a8d6448120b8"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSimilaritySolution method</p>

```kotlin signature
fun liftedFamily(): UniffiPartialDifferentialEquationSolutionFamily?
```

The invariant solutions of the original equation.

<a id="entry-presentation_kotlin_api_partialdifferentialequationsimilaritysolution_lifted_family_verification"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsimilaritysolution_liftedfamilyverification.eb4cc12c8cac"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSimilaritySolution method</p>

```kotlin signature
fun liftedFamilyVerification(): UniffiPartialDifferentialEquationVerificationVerdict?
```

The exact decision that the lifted family solves the original equation.

<a id="entry-presentation_kotlin_api_partialdifferentialequationsimilaritysolution_multiplier"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsimilaritysolution_multiplier.b735922c74f5"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSimilaritySolution method</p>

```kotlin signature
fun multiplier(): UniffiExpression?
```

The multiplier of the reduction identity.

<a id="entry-presentation_kotlin_api_partialdifferentialequationsimilaritysolution_outstanding_obligations"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsimilaritysolution_outstandingobligations.cdef33eb8b93"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSimilaritySolution method</p>

```kotlin signature
fun outstandingObligations(): List<UniffiPartialDifferentialEquationSymmetryObligation>
```

The claims the family explicitly does not make.

<a id="entry-presentation_kotlin_api_partialdifferentialequationsimilaritysolution_reduced_equation"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsimilaritysolution_reducedequation.0038a769f6d7"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSimilaritySolution method</p>

```kotlin signature
fun reducedEquation(): UniffiExpression?
```

The reduced ordinary differential equation for the profile, read as zero.

<a id="entry-presentation_kotlin_api_partialdifferentialequationsimilaritysolution_similarity_variable"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsimilaritysolution_similarityvariable.7f52f2a05d40"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSimilaritySolution method</p>

```kotlin signature
fun similarityVariable(): UniffiExpression?
```

The coordinate of the reduced equation, standing for the invariant.

<a id="entry-presentation_kotlin_api_partialdifferentialequationsimilaritysolution_weight"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsimilaritysolution_weight.4917cc3bf5df"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSimilaritySolution method</p>

```kotlin signature
fun weight(): UniffiExpression?
```

The weight of invariant solutions.

### PartialDifferentialEquationSimilarityReductionDecline

*Not exposed by the Kotlin bindings. Available as [`api::PartialDifferentialEquationSimilarityReductionDecline`](/symi/rust/partial-differential-equation-results#partialdifferentialequationsimilarityreductiondecline) in Rust.*


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

<a id="entry-presentation_kotlin_api_partialdifferentialequationsolveresult_classification"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsolveresult_classification.f5f0975af84a"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolveResult method</p>

```kotlin signature
fun classification(): UniffiPartialDifferentialEquationClassification?
```

The exact classification the dispatcher established, when it reached one.

<a id="entry-presentation_kotlin_api_partialdifferentialequationsolveresult_decline"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsolveresult_decline.1dc9fbb95650"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolveResult method</p>

```kotlin signature
fun decline(): UniffiPartialDifferentialEquationSolveDecline?
```

The stable decline reason, when no solution was produced.

<a id="entry-presentation_kotlin_api_partialdifferentialequationsolveresult_method"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsolveresult_method.c8001121bf27"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolveResult method</p>

```kotlin signature
fun method(): UniffiPartialDifferentialEquationMethod?
```

The method that produced a solution, when one did.

<a id="entry-presentation_kotlin_api_partialdifferentialequationsolveresult_provenance"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsolveresult_provenance.c9db7c4e6a33"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolveResult method</p>

```kotlin signature
fun provenance(): UniffiPartialDifferentialEquationSolutionProvenance?
```

The mathematical provenance a verified solution carries.

<a id="entry-presentation_kotlin_api_partialdifferentialequationsolveresult_solution"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsolveresult_solution.446a02f026ab"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolveResult method</p>

```kotlin signature
fun solution(): UniffiPartialDifferentialEquationSolutionFamily?
```

The verified solution family, which no declined route may carry.

<a id="entry-presentation_kotlin_api_partialdifferentialequationsolveresult_verdict"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsolveresult_verdict.dd4ffb3f5665"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolveResult method</p>

```kotlin signature
fun verdict(): UniffiPartialDifferentialEquationSolveVerdict
```

Whether the dispatcher solved or honestly declined.

<a id="entry-presentation_kotlin_api_partialdifferentialequationsolveresult_verification"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsolveresult_verification.60084964e576"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolveResult method</p>

```kotlin signature
fun verification(): UniffiPartialDifferentialEquationVerificationReport?
```

The independent verification report a solved result must carry.

### PartialDifferentialEquationSolveVerdict

*Not exposed by the Kotlin bindings. Available as [`api::PartialDifferentialEquationSolveVerdict`](/symi/rust/partial-differential-equation-results#partialdifferentialequationsolveverdict) in Rust.*


Whether the PDE dispatcher solved or declined.

Cases: `Declined`, `Solved`.

### PartialDifferentialEquationSolveDecline

*Not exposed by the Kotlin bindings. Available as [`api::PartialDifferentialEquationSolveDecline`](/symi/rust/partial-differential-equation-results#partialdifferentialequationsolvedecline) in Rust.*


The stable reason the automatic-dispatch PDE solver did not return a solution.

Cases: `CanonicalCoordinatesDeclined`, `CanonicalReductionSucceededButNoDownstreamSolver`, `CharacteristicDataNotLocallyDetermining`, `CharacteristicsDeclined`, `ClassificationDeclined`, `CompleteFamilyNotEstablished`, `CompletenessHoldsOnlyOnANarrowerSolutionClass`, `DeclaredGeometryNotSupported`, `DeclaredRegularityNotSupported`, `InconsistentCharacteristicData`, `InitialDataConvolutionDeclined`, `MethodNotImplemented`, `NoImplementedMethodClosed`, `RepeatedIntegrationDeclined`, `TransversalityUnknown`.

### PartialDifferentialEquationSolveOptions

*Not exposed by the Kotlin bindings. Available as [`api::PartialDifferentialEquationSolveOptions`](/symi/rust/partial-differential-equation-results#partialdifferentialequationsolveoptions) in Rust.*


Binding-neutral options for deterministic partial differential equation solving.

### PartialDifferentialEquationPortfolioDecline

*Not exposed by the Kotlin bindings. Available as [`api::PartialDifferentialEquationPortfolioDecline`](/symi/rust/partial-differential-equation-results#partialdifferentialequationportfoliodecline) in Rust.*


One method-specific decline retained by automatic PDE portfolio execution.

### PartialDifferentialEquationSolutionFamily

A candidate family, explicit (the unknown as an expression in the coordinates)
or implicit (a residual read as equal to zero), together with the arbitrary
functions it treats as free and the obligations it carries.

`establishes_completeness` is whether the family carries a completeness theorem
whose every identity was proved. A verified residual proves membership in the
solution set, never coverage of it, so a verified family is not thereby a
complete one.

<a id="entry-presentation_kotlin_api_partialdifferentialequationsolutionfamily_arbitrary_functions"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsolutionfamily_arbitraryfunctions.c48f2615fac2"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolutionFamily method</p>

```kotlin signature
fun arbitraryFunctions(): List<UniffiPartialDifferentialEquationArbitraryFunction>
```

The functions that stay arbitrary and opaque throughout verification.

<a id="entry-presentation_kotlin_api_partialdifferentialequationsolutionfamily_establishes_completeness"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsolutionfamily_establishescompleteness.32bbe527dfb5"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolutionFamily method</p>

```kotlin signature
fun establishesCompleteness(): kotlin.Boolean
```

Whether the family carries a completeness theorem whose every identity was proved.

<a id="entry-presentation_kotlin_api_partialdifferentialequationsolutionfamily_form"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsolutionfamily_form.884b095aac42"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolutionFamily method</p>

```kotlin signature
fun form(): UniffiPartialDifferentialEquationSolutionForm
```

Whether this candidate is an `explicit` value or an `implicit` residual.

<a id="entry-presentation_kotlin_api_partialdifferentialequationsolutionfamily_proof_obligations"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsolutionfamily_proofobligations.6faa98af5269"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolutionFamily method</p>

```kotlin signature
fun proofObligations(): List<UniffiPartialDifferentialEquationProofObligation>
```

The obligations recorded against this candidate family.

### PartialDifferentialEquationSolutionForm

*Not exposed by the Kotlin bindings. Available as [`api::PartialDifferentialEquationSolutionForm`](/symi/rust/partial-differential-equation-results#partialdifferentialequationsolutionform) in Rust.*


The explicit or implicit mathematical form of a candidate solution family.

Cases: `Explicit`, `Implicit`.

### PartialDifferentialEquationSolutionProvenance

Mathematical provenance carried only by a future verified PDE solution.

<a id="entry-presentation_kotlin_api_partialdifferentialequationsolutionprovenance_discharged_obligations"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsolutionprovenance_dischargedobligations.f745c369b8fe"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolutionProvenance method</p>

```kotlin signature
fun dischargedObligations(): List<UniffiPartialDifferentialEquationProofObligation>
```

The obligations discharged by exact query before the solution was returned.

<a id="entry-presentation_kotlin_api_partialdifferentialequationsolutionprovenance_linearity"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsolutionprovenance_linearity.1a9a03c2f015"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolutionProvenance method</p>

```kotlin signature
fun linearity(): UniffiPartialDifferentialEquationLinearity
```

The exact linearity class recorded at the time the candidate was produced.

<a id="entry-presentation_kotlin_api_partialdifferentialequationsolutionprovenance_method"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsolutionprovenance_method.88638433c881"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolutionProvenance method</p>

```kotlin signature
fun method(): UniffiPartialDifferentialEquationMethod
```

The method identity this solution was produced by.

<a id="entry-presentation_kotlin_api_partialdifferentialequationsolutionprovenance_order"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsolutionprovenance_order.3ab93a9efbd2"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolutionProvenance method</p>

```kotlin signature
fun order(): kotlin.ULong
```

The exact order recorded at the time the candidate was produced.

### PartialDifferentialEquationSolutionClass

*Not exposed by the Kotlin bindings. Available as [`api::PartialDifferentialEquationSolutionClass`](/symi/rust/partial-differential-equation-results#partialdifferentialequationsolutionclass) in Rust.*


The analytic class of solutions a complete partial differential equation family must cover.

Cases: `PolynomialGrowth`, `Unrestricted`.

### PartialDifferentialEquationGeometricDomain

*Not exposed by the Kotlin bindings. Available as [`api::PartialDifferentialEquationGeometricDomain`](/symi/rust/partial-differential-equation-results#partialdifferentialequationgeometricdomain) in Rust.*


The geometry a partial differential equation family is requested on.

Cases: `Disk`, `RealLineEvolution`, `WholeSpace`.

### PartialDifferentialEquationRegularity

*Not exposed by the Kotlin bindings. Available as [`api::PartialDifferentialEquationRegularity`](/symi/rust/partial-differential-equation-results#partialdifferentialequationregularity) in Rust.*


The regularity a partial differential equation family must have on its geometry.

Cases: `OriginRegularAngularPeriodic`, `Unrestricted`.

### PartialDifferentialEquationTransformAxisKind

*Not exposed by the Kotlin bindings. Available as [`api::PartialDifferentialEquationTransformAxisKind`](/symi/rust/partial-differential-equation-results#partialdifferentialequationtransformaxiskind) in Rust.*


The explicit Cartesian geometry required by a transform PDE route.

Cases: `FourierWholeRealLine`, `LaplaceNonnegativeHalfLine`.

### PartialDifferentialEquationTransformAxisOption

*Not exposed by the Kotlin bindings. Available as [`api::PartialDifferentialEquationTransformAxisOption`](/symi/rust/partial-differential-equation-results#partialdifferentialequationtransformaxisoption) in Rust.*


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

<a id="entry-presentation_kotlin_api_partialdifferentialequationverificationreport_boundary_condition_residuals"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationverificationreport_boundaryconditionresiduals.dc81e5020466"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationVerificationReport method</p>

```kotlin signature
fun boundaryConditionResiduals(): List<UniffiPartialDifferentialEquationVerificationResidual>
```

One reduced residual per boundary condition, in insertion order.

<a id="entry-presentation_kotlin_api_partialdifferentialequationverificationreport_explicit_branch"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationverificationreport_explicitbranch.52a64b46bb22"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationVerificationReport method</p>

```kotlin signature
fun explicitBranch(): UniffiExpression?
```

The isolated explicit branch checked for an implicit candidate.

<a id="entry-presentation_kotlin_api_partialdifferentialequationverificationreport_governing_residual"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationverificationreport_governingresidual.3906f75f170c"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationVerificationReport method</p>

```kotlin signature
fun governingResidual(): UniffiPartialDifferentialEquationVerificationResidual
```

Independently reduced governing-equation evidence.

<a id="entry-presentation_kotlin_api_partialdifferentialequationverificationreport_inconclusive_reason"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationverificationreport_inconclusivereason.8923506bffef"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationVerificationReport method</p>

```kotlin signature
fun inconclusiveReason(): UniffiPartialDifferentialEquationVerificationInconclusiveReason?
```

The deterministic reason verification could not reach a proof.

<a id="entry-presentation_kotlin_api_partialdifferentialequationverificationreport_initial_condition_residuals"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationverificationreport_initialconditionresiduals.e72daf775d37"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationVerificationReport method</p>

```kotlin signature
fun initialConditionResiduals(): List<UniffiPartialDifferentialEquationVerificationResidual>
```

One reduced residual per initial condition, in insertion order.

<a id="entry-presentation_kotlin_api_partialdifferentialequationverificationreport_proof_obligations"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationverificationreport_proofobligations.979578f00a74"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationVerificationReport method</p>

```kotlin signature
fun proofObligations(): List<UniffiPartialDifferentialEquationProofObligation>
```

The obligations consulted or left unresolved by this verification.

<a id="entry-presentation_kotlin_api_partialdifferentialequationverificationreport_verdict"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationverificationreport_verdict.dfa129499b75"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationVerificationReport method</p>

```kotlin signature
fun verdict(): UniffiPartialDifferentialEquationVerificationVerdict
```

The aggregate exact verification verdict.

### PartialDifferentialEquationVerificationVerdict

*Not exposed by the Kotlin bindings. Available as [`api::PartialDifferentialEquationVerificationVerdict`](/symi/rust/partial-differential-equation-results#partialdifferentialequationverificationverdict) in Rust.*


The exact three-way outcome of PDE candidate verification.

Cases: `Inconclusive`, `Rejected`, `Verified`.

### PartialDifferentialEquationVerificationResidual

One independently reduced residual and its exact verdict.

<a id="entry-presentation_kotlin_api_partialdifferentialequationverificationresidual_residual"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationverificationresidual_residual.eeb7be444c3d"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationVerificationResidual method</p>

```kotlin signature
fun residual(): UniffiExpression
```

The independently reduced residual expression.

<a id="entry-presentation_kotlin_api_partialdifferentialequationverificationresidual_verdict"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationverificationresidual_verdict.870b43826104"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationVerificationResidual method</p>

```kotlin signature
fun verdict(): UniffiPartialDifferentialEquationVerificationVerdict
```

The exact verdict proved about this one residual.

### PartialDifferentialEquationVerificationInconclusiveReason

*Not exposed by the Kotlin bindings. Available as [`api::PartialDifferentialEquationVerificationInconclusiveReason`](/symi/rust/partial-differential-equation-results#partialdifferentialequationverificationinconclusivereason) in Rust.*


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
