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

<a id="entry-presentation_python_api_partialdifferentialequationproblem"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationproblem.814ddc0a0b7c"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class PartialDifferentialEquationProblem
```

A validated scalar partial differential equation owned by one Python context.

<a id="entry-presentation_python_host_python_partialdifferentialequationproblem_repr"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationproblem_repr.b3dee485a3ee"></a>
<p class="symi-entry-owner">PartialDifferentialEquationProblem method</p>

```python signature
__repr__() -> str
```

The `repr()` text of this problem, which is its deterministic plain-text form.

<a id="entry-presentation_python_host_python_partialdifferentialequationproblem_str"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationproblem_str.6a17cc0d3853"></a>
<p class="symi-entry-owner">PartialDifferentialEquationProblem method</p>

```python signature
__str__() -> str
```

The deterministic plain-text form of this problem.

<a id="entry-presentation_python_api_partialdifferentialequationproblem_boundary_conditions"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationproblem_boundary_conditions.8f03369049ed"></a>
<p class="symi-entry-owner">PartialDifferentialEquationProblem property</p>

```python signature
boundary_conditions: list[Expression]
```

The boundary-condition residuals in insertion order.

<a id="entry-presentation_python_api_partialdifferentialequationproblem_dependent_function"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationproblem_dependent_function.b24dfa1c2033"></a>
<p class="symi-entry-owner">PartialDifferentialEquationProblem property</p>

```python signature
dependent_function: str
```

The declared dependent-function name.

<a id="entry-presentation_python_api_partialdifferentialequationproblem_equation"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationproblem_equation.86790941a045"></a>
<p class="symi-entry-owner">PartialDifferentialEquationProblem property</p>

```python signature
equation: Expression
```

The governing residual, interpreted as equal to zero.

<a id="entry-presentation_python_api_partialdifferentialequationproblem_independent_variables"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationproblem_independent_variables.fbea44b1e2dd"></a>
<p class="symi-entry-owner">PartialDifferentialEquationProblem property</p>

```python signature
independent_variables: list[str]
```

The independent variables in their semantic declared order.

<a id="entry-presentation_python_api_partialdifferentialequationproblem_initial_conditions"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationproblem_initial_conditions.36dcc6dd1e1d"></a>
<p class="symi-entry-owner">PartialDifferentialEquationProblem property</p>

```python signature
initial_conditions: list[Expression]
```

The initial-condition residuals in insertion order.

<a id="entry-presentation_python_api_partialdifferentialequationproblem_serialize_object"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationproblem_serialize_object.41a1ab74e1fa"></a>
<p class="symi-entry-owner">PartialDifferentialEquationProblem method</p>

```python signature
serialize_object() -> str
```

Serialize this problem in the versioned canonical object grammar.

<a id="entry-presentation_python_api_partialdifferentialequationproblem_to_latex"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationproblem_to_latex.c404806e4912"></a>
<p class="symi-entry-owner">PartialDifferentialEquationProblem method</p>

```python signature
to_latex() -> str
```

Render this problem as LaTeX, as a system when it carries conditions.

### PartialDifferentialEquationProblemError

*Not exposed by the Python bindings. Available as [`api::PartialDifferentialEquationProblemError`](/symi/rust/partial-differential-equation-results#partialdifferentialequationproblemerror) in Rust.*


Typed construction errors reported by the canonical PDE API.

Cases: `AmbiguousDependentFunction`, `ContextMismatch`, `DependentFunctionMustBeUserFunction`, `DerivativeArgumentArityMismatch`, `DiscoveryFailed`, `DuplicateIndependentVariable`, `GoverningEquationIsNotDifferential`, `InconsistentDependentFunctionArguments`, `InsufficientIndependentVariables`, `NoDependentFunctionOccurrence`.

### PartialDifferentialEquationArbitraryFunction

A collision-free arbitrary function allocated for a PDE candidate.

<a id="entry-presentation_python_api_partialdifferentialequationarbitraryfunction"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationarbitraryfunction.bf6b31e5359a"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class PartialDifferentialEquationArbitraryFunction
```

A collision-free arbitrary function allocated for a PDE candidate.

<a id="entry-presentation_python_api_partialdifferentialequationarbitraryfunction_arity"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationarbitraryfunction_arity.84a63ebfd4de"></a>
<p class="symi-entry-owner">PartialDifferentialEquationArbitraryFunction property</p>

```python signature
arity: int
```

The recorded and validated function arity.

<a id="entry-presentation_python_api_partialdifferentialequationarbitraryfunction_name"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationarbitraryfunction_name.49a7f2bf3c70"></a>
<p class="symi-entry-owner">PartialDifferentialEquationArbitraryFunction property</p>

```python signature
name: str
```

The collision-free allocated function name.

### PartialDifferentialEquationJet

*Not exposed by the Python bindings. Available as [`api::PartialDifferentialEquationJet`](/symi/rust/partial-differential-equation-results#partialdifferentialequationjet) in Rust.*


A dependent-function jet represented by derivative orders in variable order.

### PartialDifferentialEquationJetCoefficient

One exact coefficient associated with a dependent-function jet.

<a id="entry-presentation_python_api_partialdifferentialequationjetcoefficient_coefficient"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationjetcoefficient_coefficient.8e9e167c35d1"></a>
<p class="symi-entry-owner">PartialDifferentialEquationJetCoefficient property</p>

```python signature
coefficient: Expression
```

The exact coefficient expression.

<a id="entry-presentation_python_host_python_partialdifferentialequationjetcoefficient_derivative_orders"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationjetcoefficient_derivative_orders.f1ad7bc43c9f"></a>
<p class="symi-entry-owner">PartialDifferentialEquationJetCoefficient property</p>

```python signature
derivative_orders: list[int]
```

The derivative multi-index of the jet this coefficient multiplies.

## Classification and the principal part

Classification reports what was *proved* about an equation. A type claimed
without a proved sign condition is reported as a case table or as unknown, never
asserted.

### PartialDifferentialEquationClassification

Exact structural analysis data for one scalar partial differential equation.

<a id="entry-presentation_python_api_partialdifferentialequationclassification"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationclassification.2853e3416a17"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class PartialDifferentialEquationClassification
```

Exact structural analysis data for one scalar partial differential equation.

<a id="entry-presentation_python_api_partialdifferentialequationclassification_coefficient_data"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationclassification_coefficient_data.d0f091b30ed3"></a>
<p class="symi-entry-owner">PartialDifferentialEquationClassification property</p>

```python signature
coefficient_data: PartialDifferentialEquationCoefficientData
```

The exact affine coefficient data extracted from the governing residual.

<a id="entry-presentation_python_api_partialdifferentialequationclassification_linearity"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationclassification_linearity.56f639c46019"></a>
<p class="symi-entry-owner">PartialDifferentialEquationClassification property</p>

```python signature
linearity: str
```

The most-specific exact linearity class.

<a id="entry-presentation_python_api_partialdifferentialequationclassification_method_candidates"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationclassification_method_candidates.cb1e50b6f94c"></a>
<p class="symi-entry-owner">PartialDifferentialEquationClassification property</p>

```python signature
method_candidates: Any
```

The advisory methods in deterministic preference order.

<a id="entry-presentation_python_api_partialdifferentialequationclassification_order"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationclassification_order.7d5c5173ea9b"></a>
<p class="symi-entry-owner">PartialDifferentialEquationClassification property</p>

```python signature
order: int
```

The exact highest derivative order.

<a id="entry-presentation_python_api_partialdifferentialequationclassification_second_order_principal_part"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationclassification_second_order_principal_part.1c993426e743"></a>
<p class="symi-entry-owner">PartialDifferentialEquationClassification property</p>

```python signature
second_order_principal_part: Optional[PartialDifferentialEquationPrincipalPart]
```

The exact second-order principal metadata, when the equation has one.

### PartialDifferentialEquationCoefficientData

The exact affine coefficient data yielded by PDE classification.

<a id="entry-presentation_python_api_partialdifferentialequationcoefficientdata_full_coefficients"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationcoefficientdata_full_coefficients.daaae70574cb"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCoefficientData property</p>

```python signature
full_coefficients: Optional[list[PartialDifferentialEquationJetCoefficient]]
```

Every jet coefficient, when the equation is exactly linear.

<a id="entry-presentation_python_api_partialdifferentialequationcoefficientdata_highest_order_coefficients"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationcoefficientdata_highest_order_coefficients.8b4789085db5"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCoefficientData property</p>

```python signature
highest_order_coefficients: Optional[list[PartialDifferentialEquationJetCoefficient]]
```

The highest-order jet coefficients, when the equation is affine in them.

<a id="entry-presentation_python_api_partialdifferentialequationcoefficientdata_homogeneous"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationcoefficientdata_homogeneous.dbe994183f40"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCoefficientData property</p>

```python signature
homogeneous: Optional[bool]
```

Whether the equation was proved homogeneous, when that statement is meaningful.

<a id="entry-presentation_python_api_partialdifferentialequationcoefficientdata_remainder"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationcoefficientdata_remainder.49809b3ca92f"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCoefficientData property</p>

```python signature
remainder: Optional[Expression]
```

The exact jet-free remainder term, when one was extracted.

### PartialDifferentialEquationLinearity

*Not exposed by the Python bindings. Available as [`api::PartialDifferentialEquationLinearity`](/symi/rust/partial-differential-equation-results#partialdifferentialequationlinearity) in Rust.*


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

<a id="entry-presentation_python_api_partialdifferentialequationprincipalpart_derivative_coefficients"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationprincipalpart_derivative_coefficients.1a0212ab6c98"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPrincipalPart property</p>

```python signature
derivative_coefficients: list[PartialDifferentialEquationPrincipalCoefficient]
```

The raw mixed-derivative coefficients, before symmetrization halves them.

<a id="entry-presentation_python_api_partialdifferentialequationprincipalpart_matrix"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationprincipalpart_matrix.b3778ce1892c"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPrincipalPart property</p>

```python signature
matrix: Matrix
```

The symmetric principal matrix whose quadratic form is the exact principal symbol.

### PartialDifferentialEquationPrincipalCoefficient

One raw second-order principal coefficient before mixed-term symmetrization.

<a id="entry-presentation_python_api_partialdifferentialequationprincipalcoefficient_coefficient"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationprincipalcoefficient_coefficient.2b29c8576cbc"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPrincipalCoefficient property</p>

```python signature
coefficient: Expression
```

The raw coefficient expression, before mixed terms are halved.

<a id="entry-presentation_python_host_python_partialdifferentialequationprincipalcoefficient_derivative_orders"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationprincipalcoefficient_derivative_orders.a56dfe30a372"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPrincipalCoefficient property</p>

```python signature
derivative_orders: list[int]
```

The derivative multi-index of the second-order jet this coefficient multiplies.

### PartialDifferentialEquationSecondOrderClassification

The elliptic, parabolic, or hyperbolic analysis of a two-variable linear
second-order equation. `verdict` says which kind of answer this is — one type
proved outright, a complete table of cases each with its own proved condition,
or neither. `discriminant` and `principal_matrix` are the exact data the type
was read from, and `proof_obligations` records what the classification assumed
but did not prove.

<a id="entry-presentation_python_api_partialdifferentialequationsecondorderclassification"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsecondorderclassification.79bcc28d4c8c"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class PartialDifferentialEquationSecondOrderClassification
```

Exact real elliptic, parabolic, or hyperbolic analysis of a second-order equation.

<a id="entry-presentation_python_api_partialdifferentialequationsecondorderclassification_cases"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsecondorderclassification_cases.f2ecce2bacf2"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSecondOrderClassification property</p>

```python signature
cases: list[PartialDifferentialEquationSecondOrderTypeCase]
```

The complete exact case table, when the verdict is conditional.

<a id="entry-presentation_python_api_partialdifferentialequationsecondorderclassification_decline"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsecondorderclassification_decline.66efe7a284d8"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSecondOrderClassification property</p>

```python signature
decline: Optional[str]
```

The exact reason an unknown analysis could not be completed.

<a id="entry-presentation_python_api_partialdifferentialequationsecondorderclassification_discriminant"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsecondorderclassification_discriminant.eb5014c76a4a"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSecondOrderClassification property</p>

```python signature
discriminant: Expression
```

The exact discriminant `b^2 - a*c` of the symmetric principal matrix.

<a id="entry-presentation_python_api_partialdifferentialequationsecondorderclassification_equation_type"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsecondorderclassification_equation_type.e904ef6cfc4d"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSecondOrderClassification property</p>

```python signature
equation_type: Optional[str]
```

The single proved classical type, when the verdict is definite.

<a id="entry-presentation_python_api_partialdifferentialequationsecondorderclassification_principal_matrix"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsecondorderclassification_principal_matrix.83b6ad0b8925"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSecondOrderClassification property</p>

```python signature
principal_matrix: Matrix
```

The frozen symmetric principal matrix this analysis classified.

<a id="entry-presentation_python_api_partialdifferentialequationsecondorderclassification_proof_obligations"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsecondorderclassification_proof_obligations.f0afe69b27f4"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSecondOrderClassification property</p>

```python signature
proof_obligations: list[str]
```

The obligations a downstream canonical-coordinate route must discharge.

<a id="entry-presentation_python_api_partialdifferentialequationsecondorderclassification_verdict"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsecondorderclassification_verdict.b16642fd9fa2"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSecondOrderClassification property</p>

```python signature
verdict: str
```

Whether one type, a complete case table, or neither was proved.

### PartialDifferentialEquationSecondOrderType

*Not exposed by the Python bindings. Available as [`api::PartialDifferentialEquationSecondOrderType`](/symi/rust/partial-differential-equation-results#partialdifferentialequationsecondordertype) in Rust.*


The exact real classical type of a second-order principal part.

Cases: `Degenerate`, `Elliptic`, `Hyperbolic`, `Parabolic`.

### PartialDifferentialEquationSecondOrderTypeCase

One exact condition and the classical second-order type proved under it.

<a id="entry-presentation_python_api_partialdifferentialequationsecondordertypecase"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsecondordertypecase.937ad2b74813"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class PartialDifferentialEquationSecondOrderTypeCase
```

One exact condition and the classical second-order type proved under it.

<a id="entry-presentation_python_api_partialdifferentialequationsecondordertypecase_condition"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsecondordertypecase_condition.2de3ae8d0f76"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSecondOrderTypeCase property</p>

```python signature
condition: AssumptionProposition
```

The exact condition under which this case's classical type holds.

<a id="entry-presentation_python_api_partialdifferentialequationsecondordertypecase_equation_type"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsecondordertypecase_equation_type.e9d6236bfae8"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSecondOrderTypeCase property</p>

```python signature
equation_type: str
```

The classical type proved under this case's condition.

### PartialDifferentialEquationSecondOrderTypeVerdict

*Not exposed by the Python bindings. Available as [`api::PartialDifferentialEquationSecondOrderTypeVerdict`](/symi/rust/partial-differential-equation-results#partialdifferentialequationsecondordertypeverdict) in Rust.*


Whether one type was proved, a complete case table was proved, or neither.

Cases: `Conditional`, `Definite`, `Unknown`.

### PartialDifferentialEquationSecondOrderClassificationDecline

*Not exposed by the Python bindings. Available as [`api::PartialDifferentialEquationSecondOrderClassificationDecline`](/symi/rust/partial-differential-equation-results#partialdifferentialequationsecondorderclassificationdecline) in Rust.*


The exact reason second-order type analysis returned no definite or conditional type.

Cases: `BudgetExceeded`, `InconsistentAssumptions`, `NotTwoVariableSecondOrderLinear`, `PrincipalPartNotAvailable`, `RealPrincipalCoefficientsNotProved`, `TypeNotProved`.

### PartialDifferentialEquationMethod

*Not exposed by the Python bindings. Available as [`api::PartialDifferentialEquationMethod`](/symi/rust/partial-differential-equation-results#partialdifferentialequationmethod) in Rust.*


A stable advisory PDE method identifier.

Cases: `Automatic`, `CanonicalCoordinates`, `Characteristics`, `FourierTransform`, `InitialDataConvolution`, `LaplaceTransform`, `RepeatedIntegration`, `Separation`.

### PartialDifferentialEquationMethodCandidate

One advisory PDE method candidate and its exact proof-obligation spellings.

<a id="entry-presentation_python_api_partialdifferentialequationmethodcandidate_method"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationmethodcandidate_method.5c046b720aee"></a>
<p class="symi-entry-owner">PartialDifferentialEquationMethodCandidate property</p>

```python signature
method: str
```

The stable advisory method name.

<a id="entry-presentation_python_api_partialdifferentialequationmethodcandidate_proof_obligations"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationmethodcandidate_proof_obligations.62b639706f98"></a>
<p class="symi-entry-owner">PartialDifferentialEquationMethodCandidate property</p>

```python signature
proof_obligations: list[str]
```

The exact obligations this method must discharge before it may solve.

### PartialDifferentialEquationProofObligation

*Not exposed by the Python bindings. Available as [`api::PartialDifferentialEquationProofObligation`](/symi/rust/partial-differential-equation-results#partialdifferentialequationproofobligation) in Rust.*


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

<a id="entry-presentation_python_api_partialdifferentialequationcoordinatechange"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationcoordinatechange.a6259e7fc3ae"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class PartialDifferentialEquationCoordinateChange
```

A validated exact two-variable change of independent variables.

<a id="entry-presentation_python_api_partialdifferentialequationcoordinatechange_forward_coordinates"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationcoordinatechange_forward_coordinates.02503a3a9116"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCoordinateChange property</p>

```python signature
forward_coordinates: list[Expression]
```

The ordered source-to-target coordinate expressions.

<a id="entry-presentation_python_api_partialdifferentialequationcoordinatechange_inverse_coordinates"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationcoordinatechange_inverse_coordinates.b11eb810ac1f"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCoordinateChange property</p>

```python signature
inverse_coordinates: list[Expression]
```

The ordered target-to-source coordinate expressions.

<a id="entry-presentation_python_api_partialdifferentialequationcoordinatechange_jacobian"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationcoordinatechange_jacobian.bdb804adb3d1"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCoordinateChange property</p>

```python signature
jacobian: Expression
```

The exact forward-map Jacobian determinant.

<a id="entry-presentation_python_api_partialdifferentialequationcoordinatechange_serialize_object"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationcoordinatechange_serialize_object.622ee8029a68"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCoordinateChange method</p>

```python signature
serialize_object() -> str
```

Serialize this coordinate change in the versioned canonical object grammar.

<a id="entry-presentation_python_api_partialdifferentialequationcoordinatechange_source_variables"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationcoordinatechange_source_variables.5711dea1f360"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCoordinateChange property</p>

```python signature
source_variables: list[str]
```

The ordered source coordinate names.

<a id="entry-presentation_python_api_partialdifferentialequationcoordinatechange_target_dependent_function"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationcoordinatechange_target_dependent_function.121412f8190e"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCoordinateChange property</p>

```python signature
target_dependent_function: str
```

The target unknown-function name.

<a id="entry-presentation_python_api_partialdifferentialequationcoordinatechange_target_variables"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationcoordinatechange_target_variables.418691a17ebb"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCoordinateChange property</p>

```python signature
target_variables: list[str]
```

The ordered target coordinate names.

### PartialDifferentialEquationTransformationResult

The transformed problem or typed decline from an exact change of variables.

<a id="entry-presentation_python_api_partialdifferentialequationtransformationresult"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationtransformationresult.d20831abed72"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class PartialDifferentialEquationTransformationResult
```

The transformed problem or typed decline from an exact change of variables.

<a id="entry-presentation_python_api_partialdifferentialequationtransformationresult_coordinate_change"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationtransformationresult_coordinate_change.c0a6c7f8c2c7"></a>
<p class="symi-entry-owner">PartialDifferentialEquationTransformationResult property</p>

```python signature
coordinate_change: Optional[PartialDifferentialEquationCoordinateChange]
```

The validated coordinate change of a successful transformation.

<a id="entry-presentation_python_api_partialdifferentialequationtransformationresult_decline"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationtransformationresult_decline.51f4aa097b90"></a>
<p class="symi-entry-owner">PartialDifferentialEquationTransformationResult property</p>

```python signature
decline: Optional[str]
```

The exact reason no transformation was produced.

<a id="entry-presentation_python_api_partialdifferentialequationtransformationresult_normalization_multiplier"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationtransformationresult_normalization_multiplier.0a7d0a2ec99b"></a>
<p class="symi-entry-owner">PartialDifferentialEquationTransformationResult property</p>

```python signature
normalization_multiplier: Optional[Expression]
```

The proved-nonzero residual-normalization multiplier.

<a id="entry-presentation_python_api_partialdifferentialequationtransformationresult_target_problem"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationtransformationresult_target_problem.2d8d6a9199f5"></a>
<p class="symi-entry-owner">PartialDifferentialEquationTransformationResult property</p>

```python signature
target_problem: Optional[PartialDifferentialEquationProblem]
```

The transformed PDE problem stated in the target coordinates.

<a id="entry-presentation_python_api_partialdifferentialequationtransformationresult_transformed"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationtransformationresult_transformed.afa1507c2444"></a>
<p class="symi-entry-owner">PartialDifferentialEquationTransformationResult property</p>

```python signature
transformed: bool
```

Whether a verified transformation was produced.

### PartialDifferentialEquationTransformationDecline

*Not exposed by the Python bindings. Available as [`api::PartialDifferentialEquationTransformationDecline`](/symi/rust/partial-differential-equation-results#partialdifferentialequationtransformationdecline) in Rust.*


The exact reason a coordinate transformation was not constructed.

Cases: `ConditionDerivativeOrderNotSupported`, `CoordinateMapArityMismatch`, `CoordinateMapContainsDependentFunction`, `CoordinateMapDirectionMissing`, `CoordinateMapUsesWrongVariables`, `DuplicateOrCollidingCoordinateVariables`, `InverseMapInconclusive`, `InverseMapRejected`, `InverseNotRecovered`, `JacobianIsZero`, `JacobianNonzeroNotProved`, `TargetDependentFunctionInvalid`, `TargetProblemInvalid`, `TwoSourceAndTargetVariablesRequired`.

### PartialDifferentialEquationTransformationVerificationReport

Independent exact evidence that a coordinate transformation is correct.

<a id="entry-presentation_python_api_partialdifferentialequationtransformationverificationreport"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationtransformationverificationreport.d3734a054b14"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class PartialDifferentialEquationTransformationVerificationReport
```

Independent exact evidence that a coordinate transformation is correct.

<a id="entry-presentation_python_api_partialdifferentialequationtransformationverificationreport_claimed_governing_residual"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationtransformationverificationreport_claimed_governing_residual.feccf290837c"></a>
<p class="symi-entry-owner">PartialDifferentialEquationTransformationVerificationReport property</p>

```python signature
claimed_governing_residual: Expression
```

The governing residual the transformation claimed.

<a id="entry-presentation_python_api_partialdifferentialequationtransformationverificationreport_composition_residuals"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationtransformationverificationreport_composition_residuals.d9fedd58e205"></a>
<p class="symi-entry-owner">PartialDifferentialEquationTransformationVerificationReport property</p>

```python signature
composition_residuals: list[Expression]
```

Every forward and inverse map-composition residual.

<a id="entry-presentation_python_api_partialdifferentialequationtransformationverificationreport_jacobian"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationtransformationverificationreport_jacobian.c4f07bc2066c"></a>
<p class="symi-entry-owner">PartialDifferentialEquationTransformationVerificationReport property</p>

```python signature
jacobian: Expression
```

The independently recomputed forward-map Jacobian.

<a id="entry-presentation_python_api_partialdifferentialequationtransformationverificationreport_principal_congruence_residuals"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationtransformationverificationreport_principal_congruence_residuals.a939bfb16497"></a>
<p class="symi-entry-owner">PartialDifferentialEquationTransformationVerificationReport property</p>

```python signature
principal_congruence_residuals: list[Expression]
```

The exact principal-matrix congruence residuals.

<a id="entry-presentation_python_api_partialdifferentialequationtransformationverificationreport_transformed_governing_residual"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationtransformationverificationreport_transformed_governing_residual.de21233fe125"></a>
<p class="symi-entry-owner">PartialDifferentialEquationTransformationVerificationReport property</p>

```python signature
transformed_governing_residual: Expression
```

The independently transformed source governing residual.

<a id="entry-presentation_python_api_partialdifferentialequationtransformationverificationreport_verdict"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationtransformationverificationreport_verdict.9f9cab5a462b"></a>
<p class="symi-entry-owner">PartialDifferentialEquationTransformationVerificationReport property</p>

```python signature
verdict: str
```

The aggregate exact verification verdict.

### PartialDifferentialEquationCanonicalizationResult

The verified canonical coordinates or typed decline from automatic canonicalization.

<a id="entry-presentation_python_api_partialdifferentialequationcanonicalizationresult"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationcanonicalizationresult.db76eb5b02c5"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class PartialDifferentialEquationCanonicalizationResult
```

The verified canonical coordinates or typed decline from automatic canonicalization.

<a id="entry-presentation_python_api_partialdifferentialequationcanonicalizationresult_canonicalized"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationcanonicalizationresult_canonicalized.b7cda59605f4"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCanonicalizationResult property</p>

```python signature
canonicalized: bool
```

Whether verified canonical coordinates were constructed.

<a id="entry-presentation_python_api_partialdifferentialequationcanonicalizationresult_decline"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationcanonicalizationresult_decline.209eebc522b0"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCanonicalizationResult property</p>

```python signature
decline: Optional[str]
```

The exact reason automatic canonicalization declined.

<a id="entry-presentation_python_api_partialdifferentialequationcanonicalizationresult_principal_form"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationcanonicalizationresult_principal_form.55eaca035913"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCanonicalizationResult property</p>

```python signature
principal_form: Optional[str]
```

The exact canonical principal form that was reached.

<a id="entry-presentation_python_api_partialdifferentialequationcanonicalizationresult_transformation"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationcanonicalizationresult_transformation.d064b2135ddc"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCanonicalizationResult property</p>

```python signature
transformation: Optional[PartialDifferentialEquationTransformationResult]
```

The verified coordinate transformation of a successful canonicalization.

<a id="entry-presentation_python_api_partialdifferentialequationcanonicalizationresult_transformation_decline"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationcanonicalizationresult_transformation_decline.e4758cff1d65"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCanonicalizationResult property</p>

```python signature
transformation_decline: Optional[str]
```

The underlying coordinate-transformation decline, when one caused the decline.

### PartialDifferentialEquationCanonicalPrincipalForm

*Not exposed by the Python bindings. Available as [`api::PartialDifferentialEquationCanonicalPrincipalForm`](/symi/rust/partial-differential-equation-results#partialdifferentialequationcanonicalprincipalform) in Rust.*


The frozen canonical principal form claimed by automatic canonicalization.

Cases: `EllipticSumOfPureSecondDerivatives`, `HyperbolicMixedSecondDerivative`, `ParabolicSinglePureSecondDerivative`.

### PartialDifferentialEquationCanonicalizationDecline

*Not exposed by the Python bindings. Available as [`api::PartialDifferentialEquationCanonicalizationDecline`](/symi/rust/partial-differential-equation-results#partialdifferentialequationcanonicalizationdecline) in Rust.*


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

<a id="entry-presentation_python_api_partialdifferentialequationseparationresult"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationseparationresult.6eb4b5859523"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class PartialDifferentialEquationSeparationResult
```

A verified directed separation transformation with its two exact ODE factors.

<a id="entry-presentation_python_api_partialdifferentialequationseparationresult_first_equation"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationseparationresult_first_equation.da9731e36890"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSeparationResult property</p>

```python signature
first_equation: PartialDifferentialEquationSeparatedEquation
```

The first exact separated ODE.

<a id="entry-presentation_python_api_partialdifferentialequationseparationresult_reconstruction"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationseparationresult_reconstruction.09d3fa1dfefd"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSeparationResult property</p>

```python signature
reconstruction: Expression
```

The product or sum reconstruction of the working unknown.

<a id="entry-presentation_python_api_partialdifferentialequationseparationresult_second_equation"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationseparationresult_second_equation.b2cd436c137a"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSeparationResult property</p>

```python signature
second_equation: PartialDifferentialEquationSeparatedEquation
```

The second exact separated ODE.

<a id="entry-presentation_python_api_partialdifferentialequationseparationresult_separation_constant"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationseparationresult_separation_constant.0ac14df0a67a"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSeparationResult property</p>

```python signature
separation_constant: Expression
```

The fresh exact separation constant.

<a id="entry-presentation_python_api_partialdifferentialequationseparationresult_strategy"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationseparationresult_strategy.fb54b0c578b5"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSeparationResult property</p>

```python signature
strategy: str
```

The directed separation strategy selected by exact analysis.

<a id="entry-presentation_python_api_partialdifferentialequationseparationresult_verification"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationseparationresult_verification.1e52e66e28d5"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSeparationResult property</p>

```python signature
verification: str
```

The independent recombination-verification verdict.

### PartialDifferentialEquationSeparatedEquation

One exact separated ordinary differential equation exposed by a PDE transformation.

<a id="entry-presentation_python_api_partialdifferentialequationseparatedequation"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationseparatedequation.363214c4f25b"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class PartialDifferentialEquationSeparatedEquation
```

One exact separated ordinary differential equation exposed by a PDE transformation.

<a id="entry-presentation_python_api_partialdifferentialequationseparatedequation_independent_variable_name"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationseparatedequation_independent_variable_name.bd1a8a824c6d"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSeparatedEquation property</p>

```python signature
independent_variable_name: str
```

The name of this ODE's independent variable.

<a id="entry-presentation_python_api_partialdifferentialequationseparatedequation_residual"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationseparatedequation_residual.b55d79fdd2b3"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSeparatedEquation property</p>

```python signature
residual: Expression
```

The exact ODE residual, interpreted as equal to zero.

### PartialDifferentialEquationSeparationStrategy

*Not exposed by the Python bindings. Available as [`api::PartialDifferentialEquationSeparationStrategy`](/symi/rust/partial-differential-equation-results#partialdifferentialequationseparationstrategy) in Rust.*


The directed ansatz used by a verified PDE separation transformation.

Cases: `Additive`, `Automatic`, `Multiplicative`.

## Point symmetries

Every symmetry record carries its own verification and the obligations it does
*not* discharge. Discrete symmetries are never claimed, and a family of
invariant solutions always records that it is not the general solution.

### PartialDifferentialEquationPointSymmetryGenerator

One point-symmetry generator of a PDE, given by its infinitesimals.

<a id="entry-presentation_python_api_partialdifferentialequationpointsymmetrygenerator"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetrygenerator.46dc178a0b19"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class PartialDifferentialEquationPointSymmetryGenerator
```

One point-symmetry generator of a PDE, given by its infinitesimals.

<a id="entry-presentation_python_api_partialdifferentialequationpointsymmetrygenerator_coordinate_infinitesimals"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetrygenerator_coordinate_infinitesimals.433d9a3c7be8"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryGenerator property</p>

```python signature
coordinate_infinitesimals: list[expression]
```

The coordinate infinitesimals in the problem's independent-variable order.

<a id="entry-presentation_python_api_partialdifferentialequationpointsymmetrygenerator_dependent_infinitesimal"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetrygenerator_dependent_infinitesimal.418e6bc28927"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryGenerator property</p>

```python signature
dependent_infinitesimal: expression
```

The dependent infinitesimal of the generator.

### PartialDifferentialEquationPointSymmetryAlgebra

The derived point-symmetry algebra of a PDE, or its typed decline.

<a id="entry-presentation_python_api_partialdifferentialequationpointsymmetryalgebra"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryalgebra.43e8e8506d73"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class PartialDifferentialEquationPointSymmetryAlgebra
```

The derived point-symmetry algebra of a PDE, or its typed decline.

<a id="entry-presentation_python_api_partialdifferentialequationpointsymmetryalgebra_admits_additive_solution_symmetry"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryalgebra_admits_additive_solution_symmetry.0efa3cd7d81a"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAlgebra property</p>

```python signature
admits_additive_solution_symmetry: bool
```

Whether adding any solution of the linear homogeneous equation is also a symmetry.

<a id="entry-presentation_python_api_partialdifferentialequationpointsymmetryalgebra_basis"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryalgebra_basis.6303fe70e9f9"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAlgebra property</p>

```python signature
basis: list[partial_differential_equation_point_symmetry_generator]
```

The independently verified basis generators, one per parameter.

<a id="entry-presentation_python_api_partialdifferentialequationpointsymmetryalgebra_decline"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryalgebra_decline.926d29357a74"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAlgebra property</p>

```python signature
decline: Optional[str]
```

The typed reason the algebra was not derived.

<a id="entry-presentation_python_api_partialdifferentialequationpointsymmetryalgebra_determining_equations"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryalgebra_determining_equations.41a1666298dc"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAlgebra property</p>

```python signature
determining_equations: list[expression]
```

The determining equations exactly as derived, before any reduction.

<a id="entry-presentation_python_api_partialdifferentialequationpointsymmetryalgebra_general_generator"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryalgebra_general_generator.606696d514c2"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAlgebra property</p>

```python signature
general_generator: Optional[partial_differential_equation_point_symmetry_generator]
```

The general generator, a combination of the basis through the parameters.

<a id="entry-presentation_python_api_partialdifferentialequationpointsymmetryalgebra_outstanding_obligations"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryalgebra_outstanding_obligations.38353b8499cb"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAlgebra property</p>

```python signature
outstanding_obligations: list[str]
```

The claims the algebra explicitly does not make.

<a id="entry-presentation_python_api_partialdifferentialequationpointsymmetryalgebra_parameters"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryalgebra_parameters.f071852ff56f"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAlgebra property</p>

```python signature
parameters: list[expression]
```

The constants of the general generator, one per basis generator.

### PartialDifferentialEquationPointSymmetryDecline

*Not exposed by the Python bindings. Available as [`api::PartialDifferentialEquationPointSymmetryDecline`](/symi/rust/partial-differential-equation-results#partialdifferentialequationpointsymmetrydecline) in Rust.*


Why the point-symmetry algebra of a partial differential equation was not derived.

Cases: `AdditiveComponentNotRecognized`, `Cancelled`, `ConditionNotPolynomialInTheFreeJets`, `DeterminingSystemNotLinear`, `DeterminingSystemNotReduced`, `GeneratorNotVerified`, `InitialOrBoundaryDataNotSupported`, `JetCoordinatesNotRecognized`, `OrderNotSupported`, `PrincipalJetNotFound`, `SuperpositionNotVerified`, `WorkLimitExceeded`.

### PartialDifferentialEquationPointSymmetryAction

The connected local point-symmetry action of a PDE, or its typed decline.

<a id="entry-presentation_python_api_partialdifferentialequationpointsymmetryaction"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryaction.054567b401b6"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class PartialDifferentialEquationPointSymmetryAction
```

The connected local point-symmetry action of a PDE, or its typed decline.

<a id="entry-presentation_python_api_partialdifferentialequationpointsymmetryaction_admits_additive_solution_symmetry"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryaction_admits_additive_solution_symmetry.a40e17458d0a"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAction property</p>

```python signature
admits_additive_solution_symmetry: bool
```

Whether the action adds an arbitrary solution by linear superposition.

<a id="entry-presentation_python_api_partialdifferentialequationpointsymmetryaction_amplitude"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryaction_amplitude.0452aee1f4e0"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAction property</p>

```python signature
amplitude: Optional[expression]
```

The amplitude multiplying the transformed seed.

<a id="entry-presentation_python_api_partialdifferentialequationpointsymmetryaction_applied_to_seed"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryaction_applied_to_seed.43551abec47e"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAction method</p>

```python signature
applied_to_seed(seed: undefined_function) -> expression
```

The transformed seed solution under the action.

<a id="entry-presentation_python_api_partialdifferentialequationpointsymmetryaction_applied_to_seed_with_additive_solution"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryaction_applied_to_seed_with_additive_solution.68bd4a5f4310"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAction method</p>

```python signature
applied_to_seed_with_additive_solution(
    seed: undefined_function,
    additive_solution: undefined_function,
) -> expression
```

The transformed seed solution plus an added solution under the action.

<a id="entry-presentation_python_api_partialdifferentialequationpointsymmetryaction_decline"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryaction_decline.ec0449047038"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAction property</p>

```python signature
decline: Optional[str]
```

The typed reason the action was not constructed.

<a id="entry-presentation_python_api_partialdifferentialequationpointsymmetryaction_intertwining"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryaction_intertwining.e228d1a0b73d"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAction property</p>

```python signature
intertwining: Optional[str]
```

The exact decision on the intertwining identity.

<a id="entry-presentation_python_api_partialdifferentialequationpointsymmetryaction_invertibility"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryaction_invertibility.9065eb9a060b"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAction property</p>

```python signature
invertibility: Optional[str]
```

The exact decision that the coordinate map is invertible on its chart.

<a id="entry-presentation_python_api_partialdifferentialequationpointsymmetryaction_multiplier"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryaction_multiplier.3aadf88e1108"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAction property</p>

```python signature
multiplier: Optional[expression]
```

The multiplier of the intertwining identity.

<a id="entry-presentation_python_api_partialdifferentialequationpointsymmetryaction_outstanding_obligations"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryaction_outstanding_obligations.524c89762767"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAction property</p>

```python signature
outstanding_obligations: list[str]
```

The claims the action explicitly does not make.

<a id="entry-presentation_python_api_partialdifferentialequationpointsymmetryaction_parameters"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryaction_parameters.6783e40857bf"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAction property</p>

```python signature
parameters: list[expression]
```

The group parameters the closed forms depend on.

<a id="entry-presentation_python_api_partialdifferentialequationpointsymmetryaction_point_symmetry_decline"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryaction_point_symmetry_decline.b8e4947aa41a"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAction property</p>

```python signature
point_symmetry_decline: Optional[str]
```

The reason the underlying point-symmetry algebra was not derived, when it was not.

<a id="entry-presentation_python_api_partialdifferentialequationpointsymmetryaction_transformed_coordinates"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryaction_transformed_coordinates.a43527f3e30b"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAction property</p>

```python signature
transformed_coordinates: list[expression]
```

The coordinates at which a seed solution is evaluated.

### PartialDifferentialEquationSymmetryActionDecline

*Not exposed by the Python bindings. Available as [`api::PartialDifferentialEquationSymmetryActionDecline`](/symi/rust/partial-differential-equation-results#partialdifferentialequationsymmetryactiondecline) in Rust.*


Why the connected point-symmetry action of a partial differential equation was not constructed.

Cases: `ActionNotVerified`, `GeneratorsDoNotSpanTheAlgebra`, `IncompatibleTransformations`, `NotTheIdentityAtTheOrigin`, `OneParameterGroupNotIntegrated`, `PointSymmetryAlgebraNotDerived`.

### PartialDifferentialEquationSymmetryObligation

*Not exposed by the Python bindings. Available as [`api::PartialDifferentialEquationSymmetryObligation`](/symi/rust/partial-differential-equation-results#partialdifferentialequationsymmetryobligation) in Rust.*


A mathematical claim a symmetry result explicitly does not make.

Cases: `DiscretePointSymmetriesNotDerived`, `SimilarityFamilyIsNotTheGeneralSolution`, `TransformedCoordinatesLieInTheSeedChart`.

### PartialDifferentialEquationSimilaritySolution

The invariant solutions of a PDE under one point symmetry, or a typed decline.

<a id="entry-presentation_python_api_partialdifferentialequationsimilaritysolution"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsimilaritysolution.63b8526ae52f"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class PartialDifferentialEquationSimilaritySolution
```

The invariant solutions of a PDE under one point symmetry, or a typed decline.

<a id="entry-presentation_python_api_partialdifferentialequationsimilaritysolution_decline"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsimilaritysolution_decline.1993ab6269f4"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSimilaritySolution property</p>

```python signature
decline: Optional[str]
```

The typed reason no similarity family was produced.

<a id="entry-presentation_python_api_partialdifferentialequationsimilaritysolution_invariant"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsimilaritysolution_invariant.e7c03a6b811a"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSimilaritySolution property</p>

```python signature
invariant: Optional[expression]
```

The invariant of the generator's base field.

<a id="entry-presentation_python_api_partialdifferentialequationsimilaritysolution_lifted_constants"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsimilaritysolution_lifted_constants.0a1697f7c174"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSimilaritySolution property</p>

```python signature
lifted_constants: list[expression]
```

The constants the lifted family is parameterized by.

<a id="entry-presentation_python_api_partialdifferentialequationsimilaritysolution_lifted_family"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsimilaritysolution_lifted_family.0c52fcf52fa4"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSimilaritySolution property</p>

```python signature
lifted_family: Optional[partial_differential_equation_solution_family]
```

The invariant solutions of the original equation.

<a id="entry-presentation_python_api_partialdifferentialequationsimilaritysolution_lifted_family_verification"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsimilaritysolution_lifted_family_verification.df253a79ee32"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSimilaritySolution property</p>

```python signature
lifted_family_verification: Optional[str]
```

The exact decision that the lifted family solves the original equation.

<a id="entry-presentation_python_api_partialdifferentialequationsimilaritysolution_multiplier"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsimilaritysolution_multiplier.bb4222681cd4"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSimilaritySolution property</p>

```python signature
multiplier: Optional[expression]
```

The multiplier of the reduction identity.

<a id="entry-presentation_python_api_partialdifferentialequationsimilaritysolution_outstanding_obligations"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsimilaritysolution_outstanding_obligations.d4bee98b7e50"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSimilaritySolution property</p>

```python signature
outstanding_obligations: list[str]
```

The claims the family explicitly does not make.

<a id="entry-presentation_python_api_partialdifferentialequationsimilaritysolution_reduced_equation"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsimilaritysolution_reduced_equation.65c060212fc5"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSimilaritySolution property</p>

```python signature
reduced_equation: Optional[expression]
```

The reduced ordinary differential equation for the profile, read as zero.

<a id="entry-presentation_python_api_partialdifferentialequationsimilaritysolution_similarity_variable"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsimilaritysolution_similarity_variable.a5e2d49e4f89"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSimilaritySolution property</p>

```python signature
similarity_variable: Optional[expression]
```

The coordinate of the reduced equation, standing for the invariant.

<a id="entry-presentation_python_api_partialdifferentialequationsimilaritysolution_weight"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsimilaritysolution_weight.43eaeb3aa2a4"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSimilaritySolution property</p>

```python signature
weight: Optional[expression]
```

The weight of invariant solutions.

### PartialDifferentialEquationSimilarityReductionDecline

*Not exposed by the Python bindings. Available as [`api::PartialDifferentialEquationSimilarityReductionDecline`](/symi/rust/partial-differential-equation-results#partialdifferentialequationsimilarityreductiondecline) in Rust.*


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

<a id="entry-presentation_python_api_partialdifferentialequationsolveresult"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsolveresult.9ba510b691a3"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class PartialDifferentialEquationSolveResult
```

The sound result or typed decline from PDE dispatch.

<a id="entry-presentation_python_api_partialdifferentialequationsolveresult_classification"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsolveresult_classification.0c853e3e8c67"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolveResult property</p>

```python signature
classification: Optional[PartialDifferentialEquationClassification]
```

The exact classification the dispatcher established, when it reached one.

<a id="entry-presentation_python_api_partialdifferentialequationsolveresult_decline"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsolveresult_decline.5ec3951f6b50"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolveResult property</p>

```python signature
decline: Optional[str]
```

The stable decline reason, when no solution was produced.

<a id="entry-presentation_python_api_partialdifferentialequationsolveresult_method"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsolveresult_method.99e32f6d4621"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolveResult property</p>

```python signature
method: Optional[str]
```

The method that produced a solution, when one did.

<a id="entry-presentation_python_api_partialdifferentialequationsolveresult_provenance"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsolveresult_provenance.de3205aa6707"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolveResult property</p>

```python signature
provenance: Optional[PartialDifferentialEquationSolutionProvenance]
```

The mathematical provenance a verified solution carries.

<a id="entry-presentation_python_api_partialdifferentialequationsolveresult_solution"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsolveresult_solution.1f292346c9da"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolveResult property</p>

```python signature
solution: Optional[PartialDifferentialEquationSolutionFamily]
```

The verified solution family, which no declined route may carry.

<a id="entry-presentation_python_api_partialdifferentialequationsolveresult_verdict"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsolveresult_verdict.a23066465fd2"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolveResult property</p>

```python signature
verdict: str
```

Whether the dispatcher solved or honestly declined.

<a id="entry-presentation_python_api_partialdifferentialequationsolveresult_verification"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsolveresult_verification.c6c44ab3ef2a"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolveResult property</p>

```python signature
verification: Optional[PartialDifferentialEquationVerificationReport]
```

The independent verification report a solved result must carry.

### PartialDifferentialEquationSolveVerdict

*Not exposed by the Python bindings. Available as [`api::PartialDifferentialEquationSolveVerdict`](/symi/rust/partial-differential-equation-results#partialdifferentialequationsolveverdict) in Rust.*


Whether the PDE dispatcher solved or declined.

Cases: `Declined`, `Solved`.

### PartialDifferentialEquationSolveDecline

*Not exposed by the Python bindings. Available as [`api::PartialDifferentialEquationSolveDecline`](/symi/rust/partial-differential-equation-results#partialdifferentialequationsolvedecline) in Rust.*


The stable reason the automatic-dispatch PDE solver did not return a solution.

Cases: `CanonicalCoordinatesDeclined`, `CanonicalReductionSucceededButNoDownstreamSolver`, `CharacteristicDataNotLocallyDetermining`, `CharacteristicsDeclined`, `ClassificationDeclined`, `CompleteFamilyNotEstablished`, `CompletenessHoldsOnlyOnANarrowerSolutionClass`, `DeclaredGeometryNotSupported`, `DeclaredRegularityNotSupported`, `InconsistentCharacteristicData`, `InitialDataConvolutionDeclined`, `MethodNotImplemented`, `NoImplementedMethodClosed`, `RepeatedIntegrationDeclined`, `TransversalityUnknown`.

### PartialDifferentialEquationSolveOptions

*Not exposed by the Python bindings. Available as [`api::PartialDifferentialEquationSolveOptions`](/symi/rust/partial-differential-equation-results#partialdifferentialequationsolveoptions) in Rust.*


Binding-neutral options for deterministic partial differential equation solving.

### PartialDifferentialEquationPortfolioDecline

*Not exposed by the Python bindings. Available as [`api::PartialDifferentialEquationPortfolioDecline`](/symi/rust/partial-differential-equation-results#partialdifferentialequationportfoliodecline) in Rust.*


One method-specific decline retained by automatic PDE portfolio execution.

### PartialDifferentialEquationSolutionFamily

A candidate family, explicit (the unknown as an expression in the coordinates)
or implicit (a residual read as equal to zero), together with the arbitrary
functions it treats as free and the obligations it carries.

`establishes_completeness` is whether the family carries a completeness theorem
whose every identity was proved. A verified residual proves membership in the
solution set, never coverage of it, so a verified family is not thereby a
complete one.

<a id="entry-presentation_python_api_partialdifferentialequationsolutionfamily"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsolutionfamily.342004c3830c"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class PartialDifferentialEquationSolutionFamily
```

An explicit or implicit PDE candidate solution family.

<a id="entry-presentation_python_api_partialdifferentialequationsolutionfamily_arbitrary_functions"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsolutionfamily_arbitrary_functions.299cc635305d"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolutionFamily property</p>

```python signature
arbitrary_functions: list[PartialDifferentialEquationArbitraryFunction]
```

The functions that stay arbitrary and opaque throughout verification.

<a id="entry-presentation_python_api_partialdifferentialequationsolutionfamily_establishes_completeness"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsolutionfamily_establishes_completeness.d0d1c58db829"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolutionFamily property</p>

```python signature
establishes_completeness: bool
```

Whether the family carries a completeness theorem whose every identity was proved.

<a id="entry-presentation_python_host_python_partialdifferentialequationsolutionfamily_expression"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsolutionfamily_expression.c54e5da11722"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolutionFamily property</p>

```python signature
expression: Expression
```

The exact candidate expression carried by this family.

<a id="entry-presentation_python_api_partialdifferentialequationsolutionfamily_form"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsolutionfamily_form.1c89bcadafda"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolutionFamily property</p>

```python signature
form: Any
```

Whether this candidate is an `explicit` value or an `implicit` residual.

<a id="entry-presentation_python_api_partialdifferentialequationsolutionfamily_proof_obligations"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsolutionfamily_proof_obligations.2e0bde41df8e"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolutionFamily property</p>

```python signature
proof_obligations: list[str]
```

The obligations recorded against this candidate family.

### PartialDifferentialEquationSolutionForm

*Not exposed by the Python bindings. Available as [`api::PartialDifferentialEquationSolutionForm`](/symi/rust/partial-differential-equation-results#partialdifferentialequationsolutionform) in Rust.*


The explicit or implicit mathematical form of a candidate solution family.

Cases: `Explicit`, `Implicit`.

### PartialDifferentialEquationSolutionProvenance

Mathematical provenance carried only by a future verified PDE solution.

<a id="entry-presentation_python_api_partialdifferentialequationsolutionprovenance_discharged_obligations"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsolutionprovenance_discharged_obligations.4dd3fc6c7d13"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolutionProvenance property</p>

```python signature
discharged_obligations: list[str]
```

The obligations discharged by exact query before the solution was returned.

<a id="entry-presentation_python_api_partialdifferentialequationsolutionprovenance_linearity"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsolutionprovenance_linearity.689837d85d4d"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolutionProvenance property</p>

```python signature
linearity: str
```

The exact linearity class recorded at the time the candidate was produced.

<a id="entry-presentation_python_api_partialdifferentialequationsolutionprovenance_method"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsolutionprovenance_method.eb18b6c344a2"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolutionProvenance property</p>

```python signature
method: str
```

The method identity this solution was produced by.

<a id="entry-presentation_python_api_partialdifferentialequationsolutionprovenance_order"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsolutionprovenance_order.80c7a59ef077"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolutionProvenance property</p>

```python signature
order: int
```

The exact order recorded at the time the candidate was produced.

### PartialDifferentialEquationSolutionClass

*Not exposed by the Python bindings. Available as [`api::PartialDifferentialEquationSolutionClass`](/symi/rust/partial-differential-equation-results#partialdifferentialequationsolutionclass) in Rust.*


The analytic class of solutions a complete partial differential equation family must cover.

Cases: `PolynomialGrowth`, `Unrestricted`.

### PartialDifferentialEquationGeometricDomain

*Not exposed by the Python bindings. Available as [`api::PartialDifferentialEquationGeometricDomain`](/symi/rust/partial-differential-equation-results#partialdifferentialequationgeometricdomain) in Rust.*


The geometry a partial differential equation family is requested on.

Cases: `Disk`, `RealLineEvolution`, `WholeSpace`.

### PartialDifferentialEquationRegularity

*Not exposed by the Python bindings. Available as [`api::PartialDifferentialEquationRegularity`](/symi/rust/partial-differential-equation-results#partialdifferentialequationregularity) in Rust.*


The regularity a partial differential equation family must have on its geometry.

Cases: `OriginRegularAngularPeriodic`, `Unrestricted`.

### PartialDifferentialEquationTransformAxisKind

*Not exposed by the Python bindings. Available as [`api::PartialDifferentialEquationTransformAxisKind`](/symi/rust/partial-differential-equation-results#partialdifferentialequationtransformaxiskind) in Rust.*


The explicit Cartesian geometry required by a transform PDE route.

Cases: `FourierWholeRealLine`, `LaplaceNonnegativeHalfLine`.

### PartialDifferentialEquationTransformAxisOption

*Not exposed by the Python bindings. Available as [`api::PartialDifferentialEquationTransformAxisOption`](/symi/rust/partial-differential-equation-results#partialdifferentialequationtransformaxisoption) in Rust.*


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

<a id="entry-presentation_python_api_partialdifferentialequationverificationreport"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationverificationreport.53d4e9c949a7"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class PartialDifferentialEquationVerificationReport
```

Independent exact verification evidence for a PDE candidate solution.

<a id="entry-presentation_python_api_partialdifferentialequationverificationreport_boundary_condition_residuals"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationverificationreport_boundary_condition_residuals.d27e4537a107"></a>
<p class="symi-entry-owner">PartialDifferentialEquationVerificationReport property</p>

```python signature
boundary_condition_residuals: list[PartialDifferentialEquationVerificationResidual]
```

One reduced residual per boundary condition, in insertion order.

<a id="entry-presentation_python_api_partialdifferentialequationverificationreport_explicit_branch"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationverificationreport_explicit_branch.c215fb42d5ba"></a>
<p class="symi-entry-owner">PartialDifferentialEquationVerificationReport property</p>

```python signature
explicit_branch: Optional[Expression]
```

The isolated explicit branch checked for an implicit candidate.

<a id="entry-presentation_python_api_partialdifferentialequationverificationreport_governing_residual"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationverificationreport_governing_residual.174594f9f244"></a>
<p class="symi-entry-owner">PartialDifferentialEquationVerificationReport property</p>

```python signature
governing_residual: Any
```

Independently reduced governing-equation evidence.

<a id="entry-presentation_python_api_partialdifferentialequationverificationreport_inconclusive_reason"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationverificationreport_inconclusive_reason.b874f0a79d2b"></a>
<p class="symi-entry-owner">PartialDifferentialEquationVerificationReport property</p>

```python signature
inconclusive_reason: Optional[str]
```

The deterministic reason verification could not reach a proof.

<a id="entry-presentation_python_api_partialdifferentialequationverificationreport_initial_condition_residuals"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationverificationreport_initial_condition_residuals.32a899a2e2b1"></a>
<p class="symi-entry-owner">PartialDifferentialEquationVerificationReport property</p>

```python signature
initial_condition_residuals: list[PartialDifferentialEquationVerificationResidual]
```

One reduced residual per initial condition, in insertion order.

<a id="entry-presentation_python_api_partialdifferentialequationverificationreport_proof_obligations"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationverificationreport_proof_obligations.f9ea81ab6102"></a>
<p class="symi-entry-owner">PartialDifferentialEquationVerificationReport property</p>

```python signature
proof_obligations: list[str]
```

The obligations consulted or left unresolved by this verification.

<a id="entry-presentation_python_api_partialdifferentialequationverificationreport_verdict"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationverificationreport_verdict.92b062023cbc"></a>
<p class="symi-entry-owner">PartialDifferentialEquationVerificationReport property</p>

```python signature
verdict: str
```

The aggregate exact verification verdict.

### PartialDifferentialEquationVerificationVerdict

*Not exposed by the Python bindings. Available as [`api::PartialDifferentialEquationVerificationVerdict`](/symi/rust/partial-differential-equation-results#partialdifferentialequationverificationverdict) in Rust.*


The exact three-way outcome of PDE candidate verification.

Cases: `Inconclusive`, `Rejected`, `Verified`.

### PartialDifferentialEquationVerificationResidual

One independently reduced residual and its exact verdict.

<a id="entry-presentation_python_api_partialdifferentialequationverificationresidual_residual"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationverificationresidual_residual.fe62a14ffa59"></a>
<p class="symi-entry-owner">PartialDifferentialEquationVerificationResidual property</p>

```python signature
residual: Expression
```

The independently reduced residual expression.

<a id="entry-presentation_python_api_partialdifferentialequationverificationresidual_verdict"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationverificationresidual_verdict.24f8a5481097"></a>
<p class="symi-entry-owner">PartialDifferentialEquationVerificationResidual property</p>

```python signature
verdict: str
```

The exact verdict proved about this one residual.

### PartialDifferentialEquationVerificationInconclusiveReason

*Not exposed by the Python bindings. Available as [`api::PartialDifferentialEquationVerificationInconclusiveReason`](/symi/rust/partial-differential-equation-results#partialdifferentialequationverificationinconclusivereason) in Rust.*


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
