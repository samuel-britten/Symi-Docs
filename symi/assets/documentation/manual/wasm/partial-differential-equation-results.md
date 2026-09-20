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

<a id="entry-presentation_wasm_api_partialdifferentialequationproblem_boundary_conditions"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationproblem_boundaryconditions.b75ca8d49cd1"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationProblem property</p>

```typescript signature
readonly boundaryConditions: Expression[]
```

The boundary-condition residuals in insertion order.

<a id="entry-presentation_wasm_api_partialdifferentialequationproblem_dependent_function"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationproblem_dependentfunction.9db624a214dc"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationProblem property</p>

```typescript signature
readonly dependentFunction: string
```

The declared dependent-function name.

<a id="entry-presentation_wasm_api_partialdifferentialequationproblem_equation"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationproblem_equation.f2fc4e648569"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationProblem property</p>

```typescript signature
readonly equation: Expression
```

The governing residual, interpreted as equal to zero.

<a id="entry-presentation_wasm_api_partialdifferentialequationproblem_independent_variables"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationproblem_independentvariables.99881275f85e"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationProblem property</p>

```typescript signature
readonly independentVariables: string[]
```

The independent variables in their semantic declared order.

<a id="entry-presentation_wasm_api_partialdifferentialequationproblem_initial_conditions"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationproblem_initialconditions.de63373e4edb"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationProblem property</p>

```typescript signature
readonly initialConditions: Expression[]
```

The initial-condition residuals in insertion order.

<a id="entry-presentation_wasm_api_partialdifferentialequationproblem_serialize_object"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationproblem_serializeobject.cf6d279e96f9"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationProblem method</p>

```typescript signature
serializeObject(): string
```

Serialize this problem in the versioned canonical object grammar.

<a id="entry-presentation_wasm_api_partialdifferentialequationproblem_to_latex"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationproblem_tolatex.101fc04fe4e5"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationProblem method</p>

```typescript signature
toLatex(): string
```

Render this problem as LaTeX, as a system when it carries conditions.

<a id="entry-presentation_wasm_host_wasm_partialdifferentialequationproblem_tostring"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationproblem_tostring.fe62b42acbb0"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationProblem method</p>

```typescript signature
toString(): string
```

The mathematical text of this object, as a JavaScript string.

### PartialDifferentialEquationProblemError

*Not exposed by the WASM / JavaScript bindings. Available as [`api::PartialDifferentialEquationProblemError`](/symi/rust/partial-differential-equation-results#partialdifferentialequationproblemerror) in Rust.*


Typed construction errors reported by the canonical PDE API.

Cases: `AmbiguousDependentFunction`, `ContextMismatch`, `DependentFunctionMustBeUserFunction`, `DerivativeArgumentArityMismatch`, `DiscoveryFailed`, `DuplicateIndependentVariable`, `GoverningEquationIsNotDifferential`, `InconsistentDependentFunctionArguments`, `InsufficientIndependentVariables`, `NoDependentFunctionOccurrence`.

### PartialDifferentialEquationArbitraryFunction

A collision-free arbitrary function allocated for a PDE candidate.

<a id="entry-presentation_wasm_api_partialdifferentialequationarbitraryfunction_arity"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationarbitraryfunction_arity.d1caa458c863"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationArbitraryFunction property</p>

```typescript signature
readonly arity: number
```

The recorded and validated function arity.

<a id="entry-presentation_wasm_api_partialdifferentialequationarbitraryfunction_name"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationarbitraryfunction_name.42b1c3bd0a16"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationArbitraryFunction property</p>

```typescript signature
readonly name: string
```

The collision-free allocated function name.

### PartialDifferentialEquationJet

*Not exposed by the WASM / JavaScript bindings. Available as [`api::PartialDifferentialEquationJet`](/symi/rust/partial-differential-equation-results#partialdifferentialequationjet) in Rust.*


A dependent-function jet represented by derivative orders in variable order.

### PartialDifferentialEquationJetCoefficient

One exact coefficient associated with a dependent-function jet.

<a id="entry-presentation_wasm_api_partialdifferentialequationjetcoefficient_coefficient"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationjetcoefficient_coefficient.517fdfbfa0c1"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationJetCoefficient property</p>

```typescript signature
readonly coefficient: Expression
```

The exact coefficient expression.

<a id="entry-presentation_wasm_host_wasm_partialdifferentialequationjetcoefficient_derivativeorders"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationjetcoefficient_derivativeorders.e19d6b4d3f6d"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationJetCoefficient property</p>

```typescript signature
readonly derivativeOrders: Uint32Array
```

The derivative multi-index of the jet this coefficient multiplies.

## Classification and the principal part

Classification reports what was *proved* about an equation. A type claimed
without a proved sign condition is reported as a case table or as unknown, never
asserted.

### PartialDifferentialEquationClassification

Exact structural analysis data for one scalar partial differential equation.

<a id="entry-presentation_wasm_api_partialdifferentialequationclassification_coefficient_data"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationclassification_coefficientdata.8e7c41f8826b"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationClassification property</p>

```typescript signature
readonly coefficientData: PartialDifferentialEquationCoefficientData
```

The exact affine coefficient data extracted from the governing residual.

<a id="entry-presentation_wasm_api_partialdifferentialequationclassification_linearity"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationclassification_linearity.a6e667e25ec5"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationClassification property</p>

```typescript signature
readonly linearity: string
```

The most-specific exact linearity class.

<a id="entry-presentation_wasm_api_partialdifferentialequationclassification_method_candidates"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationclassification_methodcandidates.f9f5eeb37c13"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationClassification property</p>

```typescript signature
readonly methodCandidates: PartialDifferentialEquationMethodCandidate[]
```

The advisory methods in deterministic preference order.

<a id="entry-presentation_wasm_api_partialdifferentialequationclassification_order"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationclassification_order.bd643506262a"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationClassification property</p>

```typescript signature
readonly order: number
```

The exact highest derivative order.

<a id="entry-presentation_wasm_api_partialdifferentialequationclassification_second_order_principal_part"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationclassification_secondorderprincipalpart.b59823cebdcb"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationClassification property</p>

```typescript signature
readonly secondOrderPrincipalPart: PartialDifferentialEquationPrincipalPart | undefined
```

The exact second-order principal metadata, when the equation has one.

### PartialDifferentialEquationCoefficientData

The exact affine coefficient data yielded by PDE classification.

<a id="entry-presentation_wasm_api_partialdifferentialequationcoefficientdata_full_coefficients"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcoefficientdata_fullcoefficients.2156a699a3a9"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationCoefficientData property</p>

```typescript signature
readonly fullCoefficients: PartialDifferentialEquationJetCoefficient[] | undefined
```

Every jet coefficient, when the equation is exactly linear.

<a id="entry-presentation_wasm_api_partialdifferentialequationcoefficientdata_highest_order_coefficients"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcoefficientdata_highestordercoefficients.5bfc08a1eccb"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationCoefficientData property</p>

```typescript signature
readonly highestOrderCoefficients: PartialDifferentialEquationJetCoefficient[] | undefined
```

The highest-order jet coefficients, when the equation is affine in them.

<a id="entry-presentation_wasm_api_partialdifferentialequationcoefficientdata_homogeneous"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcoefficientdata_homogeneous.a3fec03b183d"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationCoefficientData property</p>

```typescript signature
readonly homogeneous: boolean | undefined
```

Whether the equation was proved homogeneous, when that statement is meaningful.

<a id="entry-presentation_wasm_api_partialdifferentialequationcoefficientdata_remainder"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcoefficientdata_remainder.a984a804d378"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationCoefficientData property</p>

```typescript signature
readonly remainder: Expression | undefined
```

The exact jet-free remainder term, when one was extracted.

### PartialDifferentialEquationLinearity

*Not exposed by the WASM / JavaScript bindings. Available as [`api::PartialDifferentialEquationLinearity`](/symi/rust/partial-differential-equation-results#partialdifferentialequationlinearity) in Rust.*


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

<a id="entry-presentation_wasm_api_partialdifferentialequationprincipalpart_derivative_coefficients"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationprincipalpart_derivativecoefficients.6a4bbb5c5d56"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationPrincipalPart property</p>

```typescript signature
readonly derivativeCoefficients: PartialDifferentialEquationPrincipalCoefficient[]
```

The raw mixed-derivative coefficients, before symmetrization halves them.

<a id="entry-presentation_wasm_api_partialdifferentialequationprincipalpart_matrix"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationprincipalpart_matrix.f4debc79ad6d"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationPrincipalPart property</p>

```typescript signature
readonly matrix: Matrix
```

The symmetric principal matrix whose quadratic form is the exact principal symbol.

### PartialDifferentialEquationPrincipalCoefficient

One raw second-order principal coefficient before mixed-term symmetrization.

<a id="entry-presentation_wasm_api_partialdifferentialequationprincipalcoefficient_coefficient"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationprincipalcoefficient_coefficient.c6dd1d226399"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationPrincipalCoefficient property</p>

```typescript signature
readonly coefficient: Expression
```

The raw coefficient Expression, before mixed terms are halved.

<a id="entry-presentation_wasm_host_wasm_partialdifferentialequationprincipalcoefficient_derivativeorders"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationprincipalcoefficient_derivativeorders.e1f27e9ced4d"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationPrincipalCoefficient property</p>

```typescript signature
readonly derivativeOrders: Uint32Array
```

The derivative multi-index of the second-order jet this coefficient multiplies.

### PartialDifferentialEquationSecondOrderClassification

The elliptic, parabolic, or hyperbolic analysis of a two-variable linear
second-order equation. `verdict` says which kind of answer this is — one type
proved outright, a complete table of cases each with its own proved condition,
or neither. `discriminant` and `principal_matrix` are the exact data the type
was read from, and `proof_obligations` records what the classification assumed
but did not prove.

<a id="entry-presentation_wasm_api_partialdifferentialequationsecondorderclassification_cases"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsecondorderclassification_cases.f4b384b5a07a"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationSecondOrderClassification property</p>

```typescript signature
readonly cases: PartialDifferentialEquationSecondOrderTypeCase[]
```

The complete exact case table, when the verdict is conditional.

<a id="entry-presentation_wasm_api_partialdifferentialequationsecondorderclassification_decline"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsecondorderclassification_decline.db4e6719bf15"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationSecondOrderClassification property</p>

```typescript signature
readonly decline: string | undefined
```

The exact reason an unknown analysis could not be completed.

<a id="entry-presentation_wasm_api_partialdifferentialequationsecondorderclassification_discriminant"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsecondorderclassification_discriminant.153d7de9dec8"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationSecondOrderClassification property</p>

```typescript signature
readonly discriminant: Expression
```

The exact discriminant `b^2 - a*c` of the symmetric principal matrix.

<a id="entry-presentation_wasm_api_partialdifferentialequationsecondorderclassification_equation_type"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsecondorderclassification_equationtype.5766d4f3f662"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationSecondOrderClassification property</p>

```typescript signature
readonly equationType: string | undefined
```

The single proved classical type, when the verdict is definite.

<a id="entry-presentation_wasm_api_partialdifferentialequationsecondorderclassification_principal_matrix"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsecondorderclassification_principalmatrix.b9bafb7174f6"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationSecondOrderClassification property</p>

```typescript signature
readonly principalMatrix: Matrix
```

The frozen symmetric principal matrix this analysis classified.

<a id="entry-presentation_wasm_api_partialdifferentialequationsecondorderclassification_proof_obligations"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsecondorderclassification_proofobligations.76f844e0e913"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationSecondOrderClassification property</p>

```typescript signature
readonly proofObligations: string[]
```

The obligations a downstream canonical-coordinate route must discharge.

<a id="entry-presentation_wasm_api_partialdifferentialequationsecondorderclassification_verdict"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsecondorderclassification_verdict.46c046f2c01d"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationSecondOrderClassification property</p>

```typescript signature
readonly verdict: string
```

Whether one type, a complete case table, or neither was proved.

### PartialDifferentialEquationSecondOrderType

*Not exposed by the WASM / JavaScript bindings. Available as [`api::PartialDifferentialEquationSecondOrderType`](/symi/rust/partial-differential-equation-results#partialdifferentialequationsecondordertype) in Rust.*


The exact real classical type of a second-order principal part.

Cases: `Degenerate`, `Elliptic`, `Hyperbolic`, `Parabolic`.

### PartialDifferentialEquationSecondOrderTypeCase

One exact condition and the classical second-order type proved under it.

<a id="entry-presentation_wasm_api_partialdifferentialequationsecondordertypecase_condition"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsecondordertypecase_condition.742ceaffa3e1"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationSecondOrderTypeCase property</p>

```typescript signature
readonly condition: AssumptionProposition
```

The exact condition under which this case's classical type holds.

<a id="entry-presentation_wasm_api_partialdifferentialequationsecondordertypecase_equation_type"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsecondordertypecase_equationtype.46e990429976"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationSecondOrderTypeCase property</p>

```typescript signature
readonly equationType: string
```

The classical type proved under this case's condition.

### PartialDifferentialEquationSecondOrderTypeVerdict

*Not exposed by the WASM / JavaScript bindings. Available as [`api::PartialDifferentialEquationSecondOrderTypeVerdict`](/symi/rust/partial-differential-equation-results#partialdifferentialequationsecondordertypeverdict) in Rust.*


Whether one type was proved, a complete case table was proved, or neither.

Cases: `Conditional`, `Definite`, `Unknown`.

### PartialDifferentialEquationSecondOrderClassificationDecline

*Not exposed by the WASM / JavaScript bindings. Available as [`api::PartialDifferentialEquationSecondOrderClassificationDecline`](/symi/rust/partial-differential-equation-results#partialdifferentialequationsecondorderclassificationdecline) in Rust.*


The exact reason second-order type analysis returned no definite or conditional type.

Cases: `BudgetExceeded`, `InconsistentAssumptions`, `NotTwoVariableSecondOrderLinear`, `PrincipalPartNotAvailable`, `RealPrincipalCoefficientsNotProved`, `TypeNotProved`.

### PartialDifferentialEquationMethod

*Not exposed by the WASM / JavaScript bindings. Available as [`api::PartialDifferentialEquationMethod`](/symi/rust/partial-differential-equation-results#partialdifferentialequationmethod) in Rust.*


A stable advisory PDE method identifier.

Cases: `Automatic`, `CanonicalCoordinates`, `Characteristics`, `FourierTransform`, `InitialDataConvolution`, `LaplaceTransform`, `RepeatedIntegration`, `Separation`.

### PartialDifferentialEquationMethodCandidate

One advisory PDE method candidate and its exact proof-obligation spellings.

<a id="entry-presentation_wasm_api_partialdifferentialequationmethodcandidate_method"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationmethodcandidate_method.e9c325f17c27"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationMethodCandidate property</p>

```typescript signature
readonly method: string
```

The stable advisory method name.

<a id="entry-presentation_wasm_api_partialdifferentialequationmethodcandidate_proof_obligations"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationmethodcandidate_proofobligations.11ee48d0dcf5"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationMethodCandidate property</p>

```typescript signature
readonly proofObligations: string[]
```

The exact obligations this method must discharge before it may solve.

### PartialDifferentialEquationProofObligation

*Not exposed by the WASM / JavaScript bindings. Available as [`api::PartialDifferentialEquationProofObligation`](/symi/rust/partial-differential-equation-results#partialdifferentialequationproofobligation) in Rust.*


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

<a id="entry-presentation_wasm_api_partialdifferentialequationcoordinatechange_forward_coordinates"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcoordinatechange_forwardcoordinates.0aa8930b1189"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationCoordinateChange property</p>

```typescript signature
readonly forwardCoordinates: Expression[]
```

The ordered source-to-target coordinate expressions.

<a id="entry-presentation_wasm_api_partialdifferentialequationcoordinatechange_inverse_coordinates"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcoordinatechange_inversecoordinates.97aaa96afdd2"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationCoordinateChange property</p>

```typescript signature
readonly inverseCoordinates: Expression[]
```

The ordered target-to-source coordinate expressions.

<a id="entry-presentation_wasm_api_partialdifferentialequationcoordinatechange_jacobian"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcoordinatechange_jacobian.598b8fca5781"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationCoordinateChange property</p>

```typescript signature
readonly jacobian: Expression
```

The exact forward-map Jacobian determinant.

<a id="entry-presentation_wasm_api_partialdifferentialequationcoordinatechange_serialize_object"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcoordinatechange_serializeobject.15bd50391c28"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationCoordinateChange method</p>

```typescript signature
serializeObject(): string
```

Serialize this coordinate change in the versioned canonical object grammar.

<a id="entry-presentation_wasm_api_partialdifferentialequationcoordinatechange_source_variables"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcoordinatechange_sourcevariables.5479a3ea67d3"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationCoordinateChange property</p>

```typescript signature
readonly sourceVariables: string[]
```

The ordered source coordinate names.

<a id="entry-presentation_wasm_api_partialdifferentialequationcoordinatechange_target_dependent_function"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcoordinatechange_targetdependentfunction.8f8a6f1e66f4"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationCoordinateChange property</p>

```typescript signature
readonly targetDependentFunction: string
```

The target unknown-function name.

<a id="entry-presentation_wasm_api_partialdifferentialequationcoordinatechange_target_variables"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcoordinatechange_targetvariables.f70dbe969aba"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationCoordinateChange property</p>

```typescript signature
readonly targetVariables: string[]
```

The ordered target coordinate names.

<a id="entry-presentation_wasm_host_wasm_partialdifferentialequationcoordinatechange_tostring"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcoordinatechange_tostring.1cfabe94bc27"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationCoordinateChange method</p>

```typescript signature
toString(): string
```

The mathematical text of this object, as a JavaScript string.

### PartialDifferentialEquationTransformationResult

The transformed problem or typed decline from an exact change of variables.

<a id="entry-presentation_wasm_api_partialdifferentialequationtransformationresult_coordinate_change"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationtransformationresult_coordinatechange.8d17b2f53859"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationTransformationResult property</p>

```typescript signature
readonly coordinateChange: PartialDifferentialEquationCoordinateChange | undefined
```

The validated coordinate change of a successful transformation.

<a id="entry-presentation_wasm_api_partialdifferentialequationtransformationresult_decline"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationtransformationresult_decline.421dc5aa6263"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationTransformationResult property</p>

```typescript signature
readonly decline: string | undefined
```

The exact reason no transformation was produced.

<a id="entry-presentation_wasm_api_partialdifferentialequationtransformationresult_normalization_multiplier"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationtransformationresult_normalizationmultiplier.1196debbcaa4"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationTransformationResult property</p>

```typescript signature
readonly normalizationMultiplier: Expression | undefined
```

The proved-nonzero residual-normalization multiplier.

<a id="entry-presentation_wasm_api_partialdifferentialequationtransformationresult_target_problem"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationtransformationresult_targetproblem.b42721033cee"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationTransformationResult property</p>

```typescript signature
readonly targetProblem: PartialDifferentialEquationProblem | undefined
```

The transformed PDE problem stated in the target coordinates.

<a id="entry-presentation_wasm_api_partialdifferentialequationtransformationresult_transformed"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationtransformationresult_transformed.7b1b402944f8"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationTransformationResult property</p>

```typescript signature
readonly transformed: boolean
```

Whether a verified transformation was produced.

### PartialDifferentialEquationTransformationDecline

*Not exposed by the WASM / JavaScript bindings. Available as [`api::PartialDifferentialEquationTransformationDecline`](/symi/rust/partial-differential-equation-results#partialdifferentialequationtransformationdecline) in Rust.*


The exact reason a coordinate transformation was not constructed.

Cases: `ConditionDerivativeOrderNotSupported`, `CoordinateMapArityMismatch`, `CoordinateMapContainsDependentFunction`, `CoordinateMapDirectionMissing`, `CoordinateMapUsesWrongVariables`, `DuplicateOrCollidingCoordinateVariables`, `InverseMapInconclusive`, `InverseMapRejected`, `InverseNotRecovered`, `JacobianIsZero`, `JacobianNonzeroNotProved`, `TargetDependentFunctionInvalid`, `TargetProblemInvalid`, `TwoSourceAndTargetVariablesRequired`.

### PartialDifferentialEquationTransformationVerificationReport

Independent exact evidence that a coordinate transformation is correct.

<a id="entry-presentation_wasm_api_partialdifferentialequationtransformationverificationreport_claimed_governing_residual"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationtransformationverificationreport_claimedgoverningresidual.0461d4db2c4c"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationTransformationVerificationReport property</p>

```typescript signature
readonly claimedGoverningResidual: Expression
```

The governing residual the transformation claimed.

<a id="entry-presentation_wasm_api_partialdifferentialequationtransformationverificationreport_composition_residuals"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationtransformationverificationreport_compositionresiduals.d94d4f97f722"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationTransformationVerificationReport property</p>

```typescript signature
readonly compositionResiduals: Expression[]
```

Every forward and inverse map-composition residual.

<a id="entry-presentation_wasm_api_partialdifferentialequationtransformationverificationreport_jacobian"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationtransformationverificationreport_jacobian.59d33834bad1"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationTransformationVerificationReport property</p>

```typescript signature
readonly jacobian: Expression
```

The independently recomputed forward-map Jacobian.

<a id="entry-presentation_wasm_api_partialdifferentialequationtransformationverificationreport_principal_congruence_residuals"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationtransformationverificationreport_principalcongruenceresiduals.83be7441a1af"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationTransformationVerificationReport property</p>

```typescript signature
readonly principalCongruenceResiduals: Expression[]
```

The exact principal-matrix congruence residuals.

<a id="entry-presentation_wasm_api_partialdifferentialequationtransformationverificationreport_transformed_governing_residual"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationtransformationverificationreport_transformedgoverningresidual.d3784149f15e"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationTransformationVerificationReport property</p>

```typescript signature
readonly transformedGoverningResidual: Expression
```

The independently transformed source governing residual.

<a id="entry-presentation_wasm_api_partialdifferentialequationtransformationverificationreport_verdict"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationtransformationverificationreport_verdict.b1e430c993fe"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationTransformationVerificationReport property</p>

```typescript signature
readonly verdict: string
```

The aggregate exact verification verdict.

### PartialDifferentialEquationCanonicalizationResult

The verified canonical coordinates or typed decline from automatic canonicalization.

<a id="entry-presentation_wasm_api_partialdifferentialequationcanonicalizationresult_canonicalized"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcanonicalizationresult_canonicalized.a1fcbcf36d91"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationCanonicalizationResult property</p>

```typescript signature
readonly canonicalized: boolean
```

Whether verified canonical coordinates were constructed.

<a id="entry-presentation_wasm_api_partialdifferentialequationcanonicalizationresult_decline"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcanonicalizationresult_decline.864bf76b4827"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationCanonicalizationResult property</p>

```typescript signature
readonly decline: string | undefined
```

The exact reason automatic canonicalization declined.

<a id="entry-presentation_wasm_api_partialdifferentialequationcanonicalizationresult_principal_form"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcanonicalizationresult_principalform.56b9d4fecb56"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationCanonicalizationResult property</p>

```typescript signature
readonly principalForm: string | undefined
```

The exact canonical principal form that was reached.

<a id="entry-presentation_wasm_api_partialdifferentialequationcanonicalizationresult_transformation"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcanonicalizationresult_transformation.4b578977217f"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationCanonicalizationResult property</p>

```typescript signature
readonly transformation: PartialDifferentialEquationTransformationResult | undefined
```

The verified coordinate transformation of a successful canonicalization.

<a id="entry-presentation_wasm_api_partialdifferentialequationcanonicalizationresult_transformation_decline"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcanonicalizationresult_transformationdecline.bbfd366c8896"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationCanonicalizationResult property</p>

```typescript signature
readonly transformationDecline: string | undefined
```

The underlying coordinate-transformation decline, when one caused the decline.

### PartialDifferentialEquationCanonicalPrincipalForm

*Not exposed by the WASM / JavaScript bindings. Available as [`api::PartialDifferentialEquationCanonicalPrincipalForm`](/symi/rust/partial-differential-equation-results#partialdifferentialequationcanonicalprincipalform) in Rust.*


The frozen canonical principal form claimed by automatic canonicalization.

Cases: `EllipticSumOfPureSecondDerivatives`, `HyperbolicMixedSecondDerivative`, `ParabolicSinglePureSecondDerivative`.

### PartialDifferentialEquationCanonicalizationDecline

*Not exposed by the WASM / JavaScript bindings. Available as [`api::PartialDifferentialEquationCanonicalizationDecline`](/symi/rust/partial-differential-equation-results#partialdifferentialequationcanonicalizationdecline) in Rust.*


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

<a id="entry-presentation_wasm_api_partialdifferentialequationseparationresult_first_equation"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationseparationresult_firstequation.14ab74e83d20"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationSeparationResult property</p>

```typescript signature
readonly firstEquation: PartialDifferentialEquationSeparatedEquation
```

The first exact one-variable ordinary differential equation.

<a id="entry-presentation_wasm_api_partialdifferentialequationseparationresult_reconstruction"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationseparationresult_reconstruction.b551c6f2c2ad"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationSeparationResult property</p>

```typescript signature
readonly reconstruction: Expression
```

The exact reconstruction expression for the separated factors.

<a id="entry-presentation_wasm_api_partialdifferentialequationseparationresult_second_equation"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationseparationresult_secondequation.f18381889044"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationSeparationResult property</p>

```typescript signature
readonly secondEquation: PartialDifferentialEquationSeparatedEquation
```

The second exact one-variable ordinary differential equation.

<a id="entry-presentation_wasm_api_partialdifferentialequationseparationresult_separation_constant"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationseparationresult_separationconstant.338e7b674f0f"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationSeparationResult property</p>

```typescript signature
readonly separationConstant: Expression
```

The fresh exact separation constant.

<a id="entry-presentation_wasm_api_partialdifferentialequationseparationresult_strategy"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationseparationresult_strategy.4d4c9656d5f2"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationSeparationResult property</p>

```typescript signature
readonly strategy: string
```

The selected separation strategy under its stable lowercase spelling.

<a id="entry-presentation_wasm_api_partialdifferentialequationseparationresult_verification"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationseparationresult_verification.af2ce21b75f8"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationSeparationResult property</p>

```typescript signature
readonly verification: string
```

The aggregate verdict of the independently replayed separation certificate.

### PartialDifferentialEquationSeparatedEquation

One exact separated ordinary differential equation exposed by a PDE transformation.

<a id="entry-presentation_wasm_api_partialdifferentialequationseparatedequation_independent_variable_name"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationseparatedequation_independentvariablename.a79c661191a7"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationSeparatedEquation property</p>

```typescript signature
readonly independentVariableName: string
```

The name of this equation's independent variable.

<a id="entry-presentation_wasm_api_partialdifferentialequationseparatedequation_residual"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationseparatedequation_residual.72f18ca86550"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationSeparatedEquation property</p>

```typescript signature
readonly residual: Expression
```

The exact residual of this one-variable ordinary differential equation.

### PartialDifferentialEquationSeparationStrategy

*Not exposed by the WASM / JavaScript bindings. Available as [`api::PartialDifferentialEquationSeparationStrategy`](/symi/rust/partial-differential-equation-results#partialdifferentialequationseparationstrategy) in Rust.*


The directed ansatz used by a verified PDE separation transformation.

Cases: `Additive`, `Automatic`, `Multiplicative`.

## Point symmetries

Every symmetry record carries its own verification and the obligations it does
*not* discharge. Discrete symmetries are never claimed, and a family of
invariant solutions always records that it is not the general solution.

### PartialDifferentialEquationPointSymmetryGenerator

One point-symmetry generator of a PDE, given by its infinitesimals.

<a id="entry-presentation_wasm_api_partialdifferentialequationpointsymmetrygenerator_coordinate_infinitesimals"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetrygenerator_coordinateinfinitesimals.abdbda70555b"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationPointSymmetryGenerator property</p>

```typescript signature
readonly coordinateInfinitesimals: Expression[]
```

The coordinate infinitesimals in the problem's independent-variable order.

<a id="entry-presentation_wasm_api_partialdifferentialequationpointsymmetrygenerator_dependent_infinitesimal"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetrygenerator_dependentinfinitesimal.f8f04bc3c924"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationPointSymmetryGenerator property</p>

```typescript signature
readonly dependentInfinitesimal: Expression
```

The dependent infinitesimal of the generator.

### PartialDifferentialEquationPointSymmetryAlgebra

The derived point-symmetry algebra of a PDE, or its typed decline.

<a id="entry-presentation_wasm_api_partialdifferentialequationpointsymmetryalgebra_admits_additive_solution_symmetry"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryalgebra_admitsadditivesolutionsymmetry.f5647b5468e6"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationPointSymmetryAlgebra property</p>

```typescript signature
readonly admitsAdditiveSolutionSymmetry: boolean
```

Whether adding any solution of the linear homogeneous equation is also a symmetry.

<a id="entry-presentation_wasm_api_partialdifferentialequationpointsymmetryalgebra_basis"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryalgebra_basis.eddc9c0c01b2"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationPointSymmetryAlgebra property</p>

```typescript signature
readonly basis: PartialDifferentialEquationPointSymmetryGenerator[]
```

The independently verified basis generators, one per parameter.

<a id="entry-presentation_wasm_api_partialdifferentialequationpointsymmetryalgebra_decline"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryalgebra_decline.5d9e716a25c4"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationPointSymmetryAlgebra property</p>

```typescript signature
readonly decline: string | undefined
```

The typed reason the algebra was not derived.

<a id="entry-presentation_wasm_api_partialdifferentialequationpointsymmetryalgebra_determining_equations"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryalgebra_determiningequations.f099cf8497a9"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationPointSymmetryAlgebra property</p>

```typescript signature
readonly determiningEquations: Expression[]
```

The determining equations exactly as derived, before any reduction.

<a id="entry-presentation_wasm_api_partialdifferentialequationpointsymmetryalgebra_general_generator"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryalgebra_generalgenerator.2a0fc0383ec8"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationPointSymmetryAlgebra property</p>

```typescript signature
readonly generalGenerator: PartialDifferentialEquationPointSymmetryGenerator | undefined
```

The general generator, a combination of the basis through the parameters.

<a id="entry-presentation_wasm_api_partialdifferentialequationpointsymmetryalgebra_outstanding_obligations"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryalgebra_outstandingobligations.824f1b8956b3"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationPointSymmetryAlgebra property</p>

```typescript signature
readonly outstandingObligations: string[]
```

The claims the algebra explicitly does not make.

<a id="entry-presentation_wasm_api_partialdifferentialequationpointsymmetryalgebra_parameters"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryalgebra_parameters.0390dacb6c08"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationPointSymmetryAlgebra property</p>

```typescript signature
readonly parameters: Expression[]
```

The constants of the general generator, one per basis generator.

### PartialDifferentialEquationPointSymmetryDecline

*Not exposed by the WASM / JavaScript bindings. Available as [`api::PartialDifferentialEquationPointSymmetryDecline`](/symi/rust/partial-differential-equation-results#partialdifferentialequationpointsymmetrydecline) in Rust.*


Why the point-symmetry algebra of a partial differential equation was not derived.

Cases: `AdditiveComponentNotRecognized`, `Cancelled`, `ConditionNotPolynomialInTheFreeJets`, `DeterminingSystemNotLinear`, `DeterminingSystemNotReduced`, `GeneratorNotVerified`, `InitialOrBoundaryDataNotSupported`, `JetCoordinatesNotRecognized`, `OrderNotSupported`, `PrincipalJetNotFound`, `SuperpositionNotVerified`, `WorkLimitExceeded`.

### PartialDifferentialEquationPointSymmetryAction

The connected local point-symmetry action of a PDE, or its typed decline.

<a id="entry-presentation_wasm_api_partialdifferentialequationpointsymmetryaction_admits_additive_solution_symmetry"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryaction_admitsadditivesolutionsymmetry.330e9c43133f"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationPointSymmetryAction property</p>

```typescript signature
readonly admitsAdditiveSolutionSymmetry: boolean
```

Whether the action adds an arbitrary solution by linear superposition.

<a id="entry-presentation_wasm_api_partialdifferentialequationpointsymmetryaction_amplitude"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryaction_amplitude.2730e8b0bc62"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationPointSymmetryAction property</p>

```typescript signature
readonly amplitude: Expression | undefined
```

The amplitude multiplying the transformed seed.

<a id="entry-presentation_wasm_api_partialdifferentialequationpointsymmetryaction_applied_to_seed"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryaction_appliedtoseed.219eb332d48f"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationPointSymmetryAction method</p>

```typescript signature
appliedToSeed(seed: UndefinedFunction): Expression
```

The transformed seed solution under the action.

<a id="entry-presentation_wasm_api_partialdifferentialequationpointsymmetryaction_applied_to_seed_with_additive_solution"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryaction_appliedtoseedwithadditivesolution.8948049973bd"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationPointSymmetryAction method</p>

```typescript signature
appliedToSeedWithAdditiveSolution(
    seed: UndefinedFunction,
    additive_solution: UndefinedFunction,
): Expression
```

The transformed seed solution plus an added solution under the action.

<a id="entry-presentation_wasm_api_partialdifferentialequationpointsymmetryaction_decline"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryaction_decline.f20fea2d2f62"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationPointSymmetryAction property</p>

```typescript signature
readonly decline: string | undefined
```

The typed reason the action was not constructed.

<a id="entry-presentation_wasm_api_partialdifferentialequationpointsymmetryaction_intertwining"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryaction_intertwining.0394334328b6"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationPointSymmetryAction property</p>

```typescript signature
readonly intertwining: string | undefined
```

The exact decision on the intertwining identity.

<a id="entry-presentation_wasm_api_partialdifferentialequationpointsymmetryaction_invertibility"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryaction_invertibility.47467c701e0d"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationPointSymmetryAction property</p>

```typescript signature
readonly invertibility: string | undefined
```

The exact decision that the coordinate map is invertible on its chart.

<a id="entry-presentation_wasm_api_partialdifferentialequationpointsymmetryaction_multiplier"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryaction_multiplier.fdf69e36ea5d"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationPointSymmetryAction property</p>

```typescript signature
readonly multiplier: Expression | undefined
```

The multiplier of the intertwining identity.

<a id="entry-presentation_wasm_api_partialdifferentialequationpointsymmetryaction_outstanding_obligations"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryaction_outstandingobligations.38f9613fa70d"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationPointSymmetryAction property</p>

```typescript signature
readonly outstandingObligations: string[]
```

The claims the action explicitly does not make.

<a id="entry-presentation_wasm_api_partialdifferentialequationpointsymmetryaction_parameters"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryaction_parameters.05581d4b2818"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationPointSymmetryAction property</p>

```typescript signature
readonly parameters: Expression[]
```

The group parameters the closed forms depend on.

<a id="entry-presentation_wasm_api_partialdifferentialequationpointsymmetryaction_point_symmetry_decline"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryaction_pointsymmetrydecline.6d0421f48d8e"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationPointSymmetryAction property</p>

```typescript signature
readonly pointSymmetryDecline: string | undefined
```

The reason the underlying point-symmetry algebra was not derived, when it was not.

<a id="entry-presentation_wasm_api_partialdifferentialequationpointsymmetryaction_transformed_coordinates"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryaction_transformedcoordinates.52e1713096aa"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationPointSymmetryAction property</p>

```typescript signature
readonly transformedCoordinates: Expression[]
```

The coordinates at which a seed solution is evaluated.

### PartialDifferentialEquationSymmetryActionDecline

*Not exposed by the WASM / JavaScript bindings. Available as [`api::PartialDifferentialEquationSymmetryActionDecline`](/symi/rust/partial-differential-equation-results#partialdifferentialequationsymmetryactiondecline) in Rust.*


Why the connected point-symmetry action of a partial differential equation was not constructed.

Cases: `ActionNotVerified`, `GeneratorsDoNotSpanTheAlgebra`, `IncompatibleTransformations`, `NotTheIdentityAtTheOrigin`, `OneParameterGroupNotIntegrated`, `PointSymmetryAlgebraNotDerived`.

### PartialDifferentialEquationSymmetryObligation

*Not exposed by the WASM / JavaScript bindings. Available as [`api::PartialDifferentialEquationSymmetryObligation`](/symi/rust/partial-differential-equation-results#partialdifferentialequationsymmetryobligation) in Rust.*


A mathematical claim a symmetry result explicitly does not make.

Cases: `DiscretePointSymmetriesNotDerived`, `SimilarityFamilyIsNotTheGeneralSolution`, `TransformedCoordinatesLieInTheSeedChart`.

### PartialDifferentialEquationSimilaritySolution

The invariant solutions of a PDE under one point symmetry, or a typed decline.

<a id="entry-presentation_wasm_api_partialdifferentialequationsimilaritysolution_decline"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsimilaritysolution_decline.852cf946c2d7"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationSimilaritySolution property</p>

```typescript signature
readonly decline: string | undefined
```

The typed reason no similarity family was produced.

<a id="entry-presentation_wasm_api_partialdifferentialequationsimilaritysolution_invariant"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsimilaritysolution_invariant.4e6ff8b4195d"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationSimilaritySolution property</p>

```typescript signature
readonly invariant: Expression | undefined
```

The invariant of the generator's base field.

<a id="entry-presentation_wasm_api_partialdifferentialequationsimilaritysolution_lifted_constants"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsimilaritysolution_liftedconstants.d399bdf3e958"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationSimilaritySolution property</p>

```typescript signature
readonly liftedConstants: Expression[]
```

The constants the lifted family is parameterized by.

<a id="entry-presentation_wasm_api_partialdifferentialequationsimilaritysolution_lifted_family"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsimilaritysolution_liftedfamily.16b78a7aae96"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationSimilaritySolution property</p>

```typescript signature
readonly liftedFamily: PartialDifferentialEquationSolutionFamily | undefined
```

The invariant solutions of the original equation.

<a id="entry-presentation_wasm_api_partialdifferentialequationsimilaritysolution_lifted_family_verification"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsimilaritysolution_liftedfamilyverification.1f24d4d5c876"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationSimilaritySolution property</p>

```typescript signature
readonly liftedFamilyVerification: string | undefined
```

The exact decision that the lifted family solves the original equation.

<a id="entry-presentation_wasm_api_partialdifferentialequationsimilaritysolution_multiplier"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsimilaritysolution_multiplier.700502405026"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationSimilaritySolution property</p>

```typescript signature
readonly multiplier: Expression | undefined
```

The multiplier of the reduction identity.

<a id="entry-presentation_wasm_api_partialdifferentialequationsimilaritysolution_outstanding_obligations"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsimilaritysolution_outstandingobligations.e0f2330fa97f"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationSimilaritySolution property</p>

```typescript signature
readonly outstandingObligations: string[]
```

The claims the family explicitly does not make.

<a id="entry-presentation_wasm_api_partialdifferentialequationsimilaritysolution_reduced_equation"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsimilaritysolution_reducedequation.cbe6c8378679"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationSimilaritySolution property</p>

```typescript signature
readonly reducedEquation: Expression | undefined
```

The reduced ordinary differential equation for the profile, read as zero.

<a id="entry-presentation_wasm_api_partialdifferentialequationsimilaritysolution_similarity_variable"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsimilaritysolution_similarityvariable.434aacc2d08e"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationSimilaritySolution property</p>

```typescript signature
readonly similarityVariable: Expression | undefined
```

The coordinate of the reduced equation, standing for the invariant.

<a id="entry-presentation_wasm_api_partialdifferentialequationsimilaritysolution_weight"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsimilaritysolution_weight.1ec0dcff27a1"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationSimilaritySolution property</p>

```typescript signature
readonly weight: Expression | undefined
```

The weight of invariant solutions.

### PartialDifferentialEquationSimilarityReductionDecline

*Not exposed by the WASM / JavaScript bindings. Available as [`api::PartialDifferentialEquationSimilarityReductionDecline`](/symi/rust/partial-differential-equation-results#partialdifferentialequationsimilarityreductiondecline) in Rust.*


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

<a id="entry-presentation_wasm_api_partialdifferentialequationsolveresult_classification"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolveresult_classification.2086e21405ea"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationSolveResult property</p>

```typescript signature
readonly classification: PartialDifferentialEquationClassification | undefined
```

The exact classification the dispatcher established, when it reached one.

<a id="entry-presentation_wasm_api_partialdifferentialequationsolveresult_decline"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolveresult_decline.661f84740037"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationSolveResult property</p>

```typescript signature
readonly decline: string | undefined
```

The stable decline reason, when no solution was produced.

<a id="entry-presentation_wasm_api_partialdifferentialequationsolveresult_method"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolveresult_method.f888cfb04f38"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationSolveResult property</p>

```typescript signature
readonly method: string | undefined
```

The method that produced a solution, when one did.

<a id="entry-presentation_wasm_api_partialdifferentialequationsolveresult_provenance"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolveresult_provenance.df5113fd5021"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationSolveResult property</p>

```typescript signature
readonly provenance: PartialDifferentialEquationSolutionProvenance | undefined
```

The mathematical provenance a verified solution carries.

<a id="entry-presentation_wasm_api_partialdifferentialequationsolveresult_solution"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolveresult_solution.9dcf8cda0dd0"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationSolveResult property</p>

```typescript signature
readonly solution: PartialDifferentialEquationSolutionFamily | undefined
```

The verified solution family, which no declined route may carry.

<a id="entry-presentation_wasm_api_partialdifferentialequationsolveresult_verdict"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolveresult_verdict.ddbb1f7390b2"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationSolveResult property</p>

```typescript signature
readonly verdict: string
```

Whether the dispatcher solved or honestly declined.

<a id="entry-presentation_wasm_api_partialdifferentialequationsolveresult_verification"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolveresult_verification.625c06465450"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationSolveResult property</p>

```typescript signature
readonly verification: PartialDifferentialEquationVerificationReport | undefined
```

The independent verification report a solved result must carry.

### PartialDifferentialEquationSolveVerdict

*Not exposed by the WASM / JavaScript bindings. Available as [`api::PartialDifferentialEquationSolveVerdict`](/symi/rust/partial-differential-equation-results#partialdifferentialequationsolveverdict) in Rust.*


Whether the PDE dispatcher solved or declined.

Cases: `Declined`, `Solved`.

### PartialDifferentialEquationSolveDecline

*Not exposed by the WASM / JavaScript bindings. Available as [`api::PartialDifferentialEquationSolveDecline`](/symi/rust/partial-differential-equation-results#partialdifferentialequationsolvedecline) in Rust.*


The stable reason the automatic-dispatch PDE solver did not return a solution.

Cases: `CanonicalCoordinatesDeclined`, `CanonicalReductionSucceededButNoDownstreamSolver`, `CharacteristicDataNotLocallyDetermining`, `CharacteristicsDeclined`, `ClassificationDeclined`, `CompleteFamilyNotEstablished`, `CompletenessHoldsOnlyOnANarrowerSolutionClass`, `DeclaredGeometryNotSupported`, `DeclaredRegularityNotSupported`, `InconsistentCharacteristicData`, `InitialDataConvolutionDeclined`, `MethodNotImplemented`, `NoImplementedMethodClosed`, `RepeatedIntegrationDeclined`, `TransversalityUnknown`.

### PartialDifferentialEquationSolveOptions

*Not exposed by the WASM / JavaScript bindings. Available as [`api::PartialDifferentialEquationSolveOptions`](/symi/rust/partial-differential-equation-results#partialdifferentialequationsolveoptions) in Rust.*


Binding-neutral options for deterministic partial differential equation solving.

### PartialDifferentialEquationPortfolioDecline

*Not exposed by the WASM / JavaScript bindings. Available as [`api::PartialDifferentialEquationPortfolioDecline`](/symi/rust/partial-differential-equation-results#partialdifferentialequationportfoliodecline) in Rust.*


One method-specific decline retained by automatic PDE portfolio execution.

### PartialDifferentialEquationSolutionFamily

A candidate family, explicit (the unknown as an expression in the coordinates)
or implicit (a residual read as equal to zero), together with the arbitrary
functions it treats as free and the obligations it carries.

`establishes_completeness` is whether the family carries a completeness theorem
whose every identity was proved. A verified residual proves membership in the
solution set, never coverage of it, so a verified family is not thereby a
complete one.

<a id="entry-presentation_wasm_api_partialdifferentialequationsolutionfamily_arbitrary_functions"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolutionfamily_arbitraryfunctions.65e4b98a96a7"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationSolutionFamily property</p>

```typescript signature
readonly arbitraryFunctions: PartialDifferentialEquationArbitraryFunction[]
```

The functions that stay arbitrary and opaque throughout verification.

<a id="entry-presentation_wasm_api_partialdifferentialequationsolutionfamily_establishes_completeness"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolutionfamily_establishescompleteness.57026acb665d"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationSolutionFamily property</p>

```typescript signature
readonly establishesCompleteness: boolean
```

Whether the family carries a completeness theorem whose every identity was proved.

<a id="entry-presentation_wasm_host_wasm_partialdifferentialequationsolutionfamily_expression"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolutionfamily_expression.466f56fd3a0c"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationSolutionFamily property</p>

```typescript signature
readonly expression: Expression
```

The exact candidate expression carried by this family.

<a id="entry-presentation_wasm_api_partialdifferentialequationsolutionfamily_form"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolutionfamily_form.8966e9fa5d06"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationSolutionFamily property</p>

```typescript signature
readonly form: string
```

Whether this candidate is an `explicit` value or an `implicit` residual.

<a id="entry-presentation_wasm_api_partialdifferentialequationsolutionfamily_proof_obligations"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolutionfamily_proofobligations.e5dda376598b"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationSolutionFamily property</p>

```typescript signature
readonly proofObligations: string[]
```

The obligations recorded against this candidate family.

### PartialDifferentialEquationSolutionForm

*Not exposed by the WASM / JavaScript bindings. Available as [`api::PartialDifferentialEquationSolutionForm`](/symi/rust/partial-differential-equation-results#partialdifferentialequationsolutionform) in Rust.*


The explicit or implicit mathematical form of a candidate solution family.

Cases: `Explicit`, `Implicit`.

### PartialDifferentialEquationSolutionProvenance

Mathematical provenance carried only by a future verified PDE solution.

<a id="entry-presentation_wasm_api_partialdifferentialequationsolutionprovenance_discharged_obligations"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolutionprovenance_dischargedobligations.346e920762b6"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationSolutionProvenance property</p>

```typescript signature
readonly dischargedObligations: string[]
```

The obligations discharged by exact query before the solution was returned.

<a id="entry-presentation_wasm_api_partialdifferentialequationsolutionprovenance_linearity"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolutionprovenance_linearity.1ab08a772397"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationSolutionProvenance property</p>

```typescript signature
readonly linearity: string
```

The exact linearity class recorded at the time the candidate was produced.

<a id="entry-presentation_wasm_api_partialdifferentialequationsolutionprovenance_method"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolutionprovenance_method.4df0ae777fd3"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationSolutionProvenance property</p>

```typescript signature
readonly method: string
```

The method identity this solution was produced by.

<a id="entry-presentation_wasm_api_partialdifferentialequationsolutionprovenance_order"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolutionprovenance_order.988d5c9e0775"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationSolutionProvenance property</p>

```typescript signature
readonly order: number
```

The exact order recorded at the time the candidate was produced.

### PartialDifferentialEquationSolutionClass

*Not exposed by the WASM / JavaScript bindings. Available as [`api::PartialDifferentialEquationSolutionClass`](/symi/rust/partial-differential-equation-results#partialdifferentialequationsolutionclass) in Rust.*


The analytic class of solutions a complete partial differential equation family must cover.

Cases: `PolynomialGrowth`, `Unrestricted`.

### PartialDifferentialEquationGeometricDomain

*Not exposed by the WASM / JavaScript bindings. Available as [`api::PartialDifferentialEquationGeometricDomain`](/symi/rust/partial-differential-equation-results#partialdifferentialequationgeometricdomain) in Rust.*


The geometry a partial differential equation family is requested on.

Cases: `Disk`, `RealLineEvolution`, `WholeSpace`.

### PartialDifferentialEquationRegularity

*Not exposed by the WASM / JavaScript bindings. Available as [`api::PartialDifferentialEquationRegularity`](/symi/rust/partial-differential-equation-results#partialdifferentialequationregularity) in Rust.*


The regularity a partial differential equation family must have on its geometry.

Cases: `OriginRegularAngularPeriodic`, `Unrestricted`.

### PartialDifferentialEquationTransformAxisKind

*Not exposed by the WASM / JavaScript bindings. Available as [`api::PartialDifferentialEquationTransformAxisKind`](/symi/rust/partial-differential-equation-results#partialdifferentialequationtransformaxiskind) in Rust.*


The explicit Cartesian geometry required by a transform PDE route.

Cases: `FourierWholeRealLine`, `LaplaceNonnegativeHalfLine`.

### PartialDifferentialEquationTransformAxisOption

*Not exposed by the WASM / JavaScript bindings. Available as [`api::PartialDifferentialEquationTransformAxisOption`](/symi/rust/partial-differential-equation-results#partialdifferentialequationtransformaxisoption) in Rust.*


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

<a id="entry-presentation_wasm_api_partialdifferentialequationverificationreport_boundary_condition_residuals"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationverificationreport_boundaryconditionresiduals.1c35c85c2d81"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationVerificationReport property</p>

```typescript signature
readonly boundaryConditionResiduals: PartialDifferentialEquationVerificationResidual[]
```

One reduced residual per boundary condition, in insertion order.

<a id="entry-presentation_wasm_api_partialdifferentialequationverificationreport_explicit_branch"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationverificationreport_explicitbranch.4065ca30e756"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationVerificationReport property</p>

```typescript signature
readonly explicitBranch: Expression | undefined
```

The isolated explicit branch checked for an implicit candidate.

<a id="entry-presentation_wasm_api_partialdifferentialequationverificationreport_governing_residual"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationverificationreport_governingresidual.816de73fe328"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationVerificationReport property</p>

```typescript signature
readonly governingResidual: PartialDifferentialEquationVerificationResidual
```

Independently reduced governing-equation evidence.

<a id="entry-presentation_wasm_api_partialdifferentialequationverificationreport_inconclusive_reason"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationverificationreport_inconclusivereason.31d73a309d82"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationVerificationReport property</p>

```typescript signature
readonly inconclusiveReason: string | undefined
```

The deterministic reason verification could not reach a proof.

<a id="entry-presentation_wasm_api_partialdifferentialequationverificationreport_initial_condition_residuals"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationverificationreport_initialconditionresiduals.84ad90fe1dfe"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationVerificationReport property</p>

```typescript signature
readonly initialConditionResiduals: PartialDifferentialEquationVerificationResidual[]
```

One reduced residual per initial condition, in insertion order.

<a id="entry-presentation_wasm_api_partialdifferentialequationverificationreport_proof_obligations"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationverificationreport_proofobligations.b11b03c7f975"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationVerificationReport property</p>

```typescript signature
readonly proofObligations: string[]
```

The obligations consulted or left unresolved by this verification.

<a id="entry-presentation_wasm_api_partialdifferentialequationverificationreport_verdict"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationverificationreport_verdict.2c5adb81b6f5"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationVerificationReport property</p>

```typescript signature
readonly verdict: string
```

The aggregate exact verification verdict.

### PartialDifferentialEquationVerificationVerdict

*Not exposed by the WASM / JavaScript bindings. Available as [`api::PartialDifferentialEquationVerificationVerdict`](/symi/rust/partial-differential-equation-results#partialdifferentialequationverificationverdict) in Rust.*


The exact three-way outcome of PDE candidate verification.

Cases: `Inconclusive`, `Rejected`, `Verified`.

### PartialDifferentialEquationVerificationResidual

One independently reduced residual and its exact verdict.

<a id="entry-presentation_wasm_api_partialdifferentialequationverificationresidual_residual"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationverificationresidual_residual.7de4cbc4eaa6"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationVerificationResidual property</p>

```typescript signature
readonly residual: Expression
```

The independently reduced residual expression.

<a id="entry-presentation_wasm_api_partialdifferentialequationverificationresidual_verdict"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationverificationresidual_verdict.f1c9965647a6"></a>
<p class="symi-entry-owner">Raw WebAssembly: PartialDifferentialEquationVerificationResidual property</p>

```typescript signature
readonly verdict: string
```

The exact verdict proved about this one residual.

### PartialDifferentialEquationVerificationInconclusiveReason

*Not exposed by the WASM / JavaScript bindings. Available as [`api::PartialDifferentialEquationVerificationInconclusiveReason`](/symi/rust/partial-differential-equation-results#partialdifferentialequationverificationinconclusivereason) in Rust.*


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
