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

<a id="entry-presentation_rust_api_partialdifferentialequationproblem"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationproblem.d68142b5813b"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationProblem;
```

A validated scalar partial differential equation owned by one API session.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproblem.c31fb0399b81"></a>
<p class="symi-entry-owner">Type: <code>api::partial_differential_equations::PartialDifferentialEquationProblem</code></p>

```rust signature
pub struct PartialDifferentialEquationProblem
```

</details>

<a id="entry-presentation_rust_api_partialdifferentialequationproblem_boundary_conditions"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproblem_boundary_conditions.c896e2d944e5"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProblem method</p>

```rust signature
pub fn boundary_conditions(&self) -> Result<Vec<Expression>, ApiError>
```

Returns boundary-condition residuals in insertion order.

<a id="entry-presentation_rust_api_partialdifferentialequationproblem_dependent_function"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproblem_dependent_function.dd22cc072e76"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProblem method</p>

```rust signature
pub fn dependent_function(&self) -> Result<String, ApiError>
```

Returns the declared dependent-function name.

<a id="entry-presentation_rust_api_partialdifferentialequationproblem_equation"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproblem_equation.345ea5c1476a"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProblem method</p>

```rust signature
pub fn equation(&self) -> Result<Expression, ApiError>
```

Returns the governing residual interpreted as equal to zero.

<a id="entry-presentation_rust_api_partialdifferentialequationproblem_generation"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproblem_generation.402d11797774"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProblem method</p>

```rust signature
pub fn generation(&self) -> u64
```

Returns the reset generation in which this problem was constructed.

<a id="entry-presentation_rust_api_partialdifferentialequationproblem_independent_variables"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproblem_independent_variables.7c2c23c9dcb4"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProblem method</p>

```rust signature
pub fn independent_variables(&self) -> Result<Vec<String>, ApiError>
```

Returns the semantically ordered independent-variable names.

<a id="entry-presentation_rust_api_partialdifferentialequationproblem_initial_conditions"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproblem_initial_conditions.c94edb0a7a80"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProblem method</p>

```rust signature
pub fn initial_conditions(&self) -> Result<Vec<Expression>, ApiError>
```

Returns initial-condition residuals in insertion order.

<a id="entry-presentation_rust_api_partialdifferentialequationproblem_serialize_object"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproblem_serialize_object.b2fffe00c843"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProblem method</p>

```rust signature
pub fn serialize_object(&self) -> Result<String, ApiError>
```

Serializes this PDE problem in the versioned canonical object grammar.

<a id="entry-presentation_rust_api_partialdifferentialequationproblem_session"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproblem_session.181c2e95695e"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProblem method</p>

```rust signature
pub fn session(&self) -> Session
```

Returns the session that owns this PDE problem.

<a id="entry-presentation_rust_api_partialdifferentialequationproblem_to_latex"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproblem_to_latex.883e6885da77"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProblem method</p>

```rust signature
pub fn to_latex(&self) -> Result<String, ApiError>
```

Renders this PDE problem as LaTeX, as a system when it carries conditions.

<a id="entry-presentation_rust_api_partialdifferentialequationproblem_to_string"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproblem_to_string.8c923312e243"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProblem method</p>

```rust signature
pub fn to_string(&self) -> Result<String, ApiError>
```

Renders this PDE problem in its deterministic plain-text form.

### PartialDifferentialEquationProblemError

Typed construction errors reported by the canonical PDE API.

Cases: `AmbiguousDependentFunction`, `ContextMismatch`, `DependentFunctionMustBeUserFunction`, `DerivativeArgumentArityMismatch`, `DiscoveryFailed`, `DuplicateIndependentVariable`, `GoverningEquationIsNotDifferential`, `InconsistentDependentFunctionArguments`, `InsufficientIndependentVariables`, `NoDependentFunctionOccurrence`.

<a id="entry-presentation_rust_api_partialdifferentialequationproblemerror_ambiguousdependentfunction"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproblemerror_ambiguousdependentfunction.8c97fa4ef13e"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProblemError variant</p>

```rust signature
AmbiguousDependentFunction,
```

More than one dependent function is plausible during discovery.

<a id="entry-presentation_rust_api_partialdifferentialequationproblemerror_contextmismatch"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproblemerror_contextmismatch.3a9bc59d7807"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProblemError variant</p>

```rust signature
ContextMismatch,
```

The input belongs to another session.

<a id="entry-presentation_rust_api_partialdifferentialequationproblemerror_dependentfunctionmustbeuserfunction"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproblemerror_dependentfunctionmustbeuserfunction.0fb490fdf844"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProblemError variant</p>

```rust signature
DependentFunctionMustBeUserFunction,
```

The dependent function is not user-defined.

<a id="entry-presentation_rust_api_partialdifferentialequationproblemerror_derivativeargumentaritymismatch"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproblemerror_derivativeargumentaritymismatch.60c16e0fac9f"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProblemError variant</p>

```rust signature
DerivativeArgumentArityMismatch,
```

A derivative does not carry one order per argument.

<a id="entry-presentation_rust_api_partialdifferentialequationproblemerror_discoveryfailed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproblemerror_discoveryfailed.5f9e7b2170bb"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProblemError variant</p>

```rust signature
DiscoveryFailed,
```

Exact signature discovery could not establish a valid unique signature.

<a id="entry-presentation_rust_api_partialdifferentialequationproblemerror_duplicateindependentvariable"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproblemerror_duplicateindependentvariable.8afc3b9fbc64"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProblemError variant</p>

```rust signature
DuplicateIndependentVariable,
```

The independent-variable sequence contains a duplicate.

<a id="entry-presentation_rust_api_partialdifferentialequationproblemerror_governingequationisnotdifferential"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproblemerror_governingequationisnotdifferential.46c0c9da5164"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProblemError variant</p>

```rust signature
GoverningEquationIsNotDifferential,
```

The governing residual contains no dependent derivative.

<a id="entry-presentation_rust_api_partialdifferentialequationproblemerror_inconsistentdependentfunctionarguments"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproblemerror_inconsistentdependentfunctionarguments.07d892b83a86"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProblemError variant</p>

```rust signature
InconsistentDependentFunctionArguments,
```

Dependent-function calls do not use one ordered argument tuple.

<a id="entry-presentation_rust_api_partialdifferentialequationproblemerror_insufficientindependentvariables"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproblemerror_insufficientindependentvariables.1cddbb3990df"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProblemError variant</p>

```rust signature
InsufficientIndependentVariables,
```

A PDE needs at least two independent variables; use the ODE API for one variable.

<a id="entry-presentation_rust_api_partialdifferentialequationproblemerror_nodependentfunctionoccurrence"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproblemerror_nodependentfunctionoccurrence.95083d8bf05d"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProblemError variant</p>

```rust signature
NoDependentFunctionOccurrence,
```

The declared dependent function does not occur.

<a id="entry-presentation_rust_api_partialdifferentialequationproblemerror"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationproblemerror.37dcb62980cb"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationProblemError;
```

Typed construction errors reported by the canonical PDE API.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproblemerror.f3e10f59c22d"></a>
<p class="symi-entry-owner">Type: <code>api::partial_differential_equations::PartialDifferentialEquationProblemError</code></p>

```rust signature
pub enum PartialDifferentialEquationProblemError
```

</details>

### PartialDifferentialEquationArbitraryFunction

A collision-free arbitrary function allocated for a PDE candidate.

<a id="entry-presentation_rust_api_partialdifferentialequationarbitraryfunction"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationarbitraryfunction.91118ba9af6d"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationArbitraryFunction;
```

An arbitrary function kept symbolic during verification.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationarbitraryfunction.a32372f373b8"></a>
<p class="symi-entry-owner">Type: <code>api::partial_differential_equations::PartialDifferentialEquationArbitraryFunction</code></p>

```rust signature
pub struct PartialDifferentialEquationArbitraryFunction
```

</details>

<a id="entry-presentation_rust_api_partialdifferentialequationarbitraryfunction_arity"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationarbitraryfunction_arity.2f38f6179949"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationArbitraryFunction method</p>

```rust signature
pub fn arity(&self) -> Result<usize, ApiError>
```

Returns the fixed arity of this arbitrary function.

<a id="entry-presentation_rust_api_partialdifferentialequationarbitraryfunction_name"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationarbitraryfunction_name.9c4a8cb9267b"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationArbitraryFunction method</p>

```rust signature
pub fn name(&self) -> Result<String, ApiError>
```

Returns the generated arbitrary-function name.

<a id="entry-presentation_rust_api_partialdifferentialequationarbitraryfunction_session"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationarbitraryfunction_session.ed67ff9b4ef5"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationArbitraryFunction method</p>

```rust signature
pub fn session(&self) -> Session
```

Returns the session that owns this arbitrary function.

### PartialDifferentialEquationJet

A dependent-function jet represented by derivative orders in variable order.

<a id="entry-presentation_rust_api_partialdifferentialequationjet"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationjet.537ed3464f32"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationJet;
```

A dependent-function jet represented by derivative orders in variable order.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationjet.01cfcd830fd3"></a>
<p class="symi-entry-owner">Type: <code>api::partial_differential_equations::PartialDifferentialEquationJet</code></p>

```rust signature
pub struct PartialDifferentialEquationJet
```

</details>

<a id="entry-presentation_rust_api_partialdifferentialequationjet_derivative_orders"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationjet_derivative_orders.d092739146d5"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationJet method</p>

```rust signature
pub fn derivative_orders(&self) -> Vec<usize>
```

Returns derivative orders in the PDE's declared independent-variable order.

### PartialDifferentialEquationJetCoefficient

One exact coefficient associated with a dependent-function jet.

<a id="entry-presentation_rust_api_partialdifferentialequationjetcoefficient"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationjetcoefficient.b78dabebc6f0"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationJetCoefficient;
```

One exact coefficient associated with a dependent-function jet.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationjetcoefficient.a41d5999cfac"></a>
<p class="symi-entry-owner">Type: <code>api::partial_differential_equations::PartialDifferentialEquationJetCoefficient</code></p>

```rust signature
pub struct PartialDifferentialEquationJetCoefficient
```

</details>

<a id="entry-presentation_rust_api_partialdifferentialequationjetcoefficient_coefficient"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationjetcoefficient_coefficient.2517447716de"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationJetCoefficient method</p>

```rust signature
pub fn coefficient(&self) -> Expression
```

Returns the exact coefficient expression.

<a id="entry-presentation_rust_api_partialdifferentialequationjetcoefficient_jet"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationjetcoefficient_jet.a5f8edaf6f15"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationJetCoefficient method</p>

```rust signature
pub fn jet(&self) -> PartialDifferentialEquationJet
```

Returns the dependent-function jet identified by this coefficient.

## Classification and the principal part

Classification reports what was *proved* about an equation. A type claimed
without a proved sign condition is reported as a case table or as unknown, never
asserted.

### PartialDifferentialEquationClassification

Exact structural analysis data for one scalar partial differential equation.

<a id="entry-presentation_rust_api_partialdifferentialequationclassification"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationclassification.a926b63b6178"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationClassification;
```

Exact structural classification data owned by one API session.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationclassification.d1b3a10e0059"></a>
<p class="symi-entry-owner">Type: <code>api::partial_differential_equations::PartialDifferentialEquationClassification</code></p>

```rust signature
pub struct PartialDifferentialEquationClassification
```

</details>

<a id="entry-presentation_rust_api_partialdifferentialequationclassification_coefficient_data"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationclassification_coefficient_data.01ada8b809dd"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationClassification method</p>

```rust signature
pub fn coefficient_data(
    &self,
) -> Result<PartialDifferentialEquationCoefficientData, ApiError>
```

Returns exact affine coefficient data, including the frozen homogeneous flag.

<a id="entry-presentation_rust_api_partialdifferentialequationclassification_linearity"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationclassification_linearity.5b3905138d99"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationClassification method</p>

```rust signature
pub fn linearity(
    &self,
) -> Result<PartialDifferentialEquationLinearity, ApiError>
```

Returns the most-specific exact structural linearity class.

<a id="entry-presentation_rust_api_partialdifferentialequationclassification_method_candidates"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationclassification_method_candidates.8b7632e45e6b"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationClassification method</p>

```rust signature
pub fn method_candidates(
    &self,
) -> Result<Vec<PartialDifferentialEquationMethodCandidate>, ApiError>
```

Returns advisory methods in deterministic preference order.

<a id="entry-presentation_rust_api_partialdifferentialequationclassification_order"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationclassification_order.9358aad8a5d5"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationClassification method</p>

```rust signature
pub fn order(&self) -> Result<usize, ApiError>
```

Returns the exact highest dependent derivative order.

<a id="entry-presentation_rust_api_partialdifferentialequationclassification_second_order_principal_part"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationclassification_second_order_principal_part.2f9660b224cc"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationClassification method</p>

```rust signature
pub fn second_order_principal_part(
    &self,
) -> Result<Option<PartialDifferentialEquationPrincipalPart>, ApiError>
```

Returns second-order principal metadata when the classified equation is affine in its principal jets.

<a id="entry-presentation_rust_api_partialdifferentialequationclassification_session"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationclassification_session.a297ecbd5972"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationClassification method</p>

```rust signature
pub fn session(&self) -> Session
```

Returns the session that owns this classification.

### PartialDifferentialEquationCoefficientData

The exact affine coefficient data yielded by PDE classification.

<a id="entry-presentation_rust_api_partialdifferentialequationcoefficientdata"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationcoefficientdata.a7c537de52fe"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationCoefficientData;
```

The exact affine coefficient data yielded by PDE classification.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcoefficientdata.2b605d307d97"></a>
<p class="symi-entry-owner">Type: <code>api::partial_differential_equations::PartialDifferentialEquationCoefficientData</code></p>

```rust signature
pub struct PartialDifferentialEquationCoefficientData
```

</details>

<a id="entry-presentation_rust_api_partialdifferentialequationcoefficientdata_full_coefficients"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcoefficientdata_full_coefficients.0886ab7ea2f5"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationCoefficientData method</p>

```rust signature
pub fn full_coefficients(
    &self,
) -> Option<Vec<PartialDifferentialEquationJetCoefficient>>
```

Returns coefficients for every dependent jet when the equation is linear.

<a id="entry-presentation_rust_api_partialdifferentialequationcoefficientdata_highest_order_coefficients"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcoefficientdata_highest_order_coefficients.f806b02ff82e"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationCoefficientData method</p>

```rust signature
pub fn highest_order_coefficients(
    &self,
) -> Option<Vec<PartialDifferentialEquationJetCoefficient>>
```

Returns coefficients for highest-order jets when they occur affinely.

<a id="entry-presentation_rust_api_partialdifferentialequationcoefficientdata_homogeneous"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcoefficientdata_homogeneous.07fbeaa5d200"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationCoefficientData method</p>

```rust signature
pub fn homogeneous(&self) -> Option<bool>
```

Returns whether the affine residual was exactly proved homogeneous.

<a id="entry-presentation_rust_api_partialdifferentialequationcoefficientdata_remainder"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcoefficientdata_remainder.7e8afe2ea8b3"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationCoefficientData method</p>

```rust signature
pub fn remainder(&self) -> Option<Expression>
```

Returns the exact residual after removing affine jet terms, when defined.

### PartialDifferentialEquationLinearity

The nested exact linearity class of a scalar PDE.

Cases: `Linear`, `Nonlinear`, `Quasilinear`, `Semilinear`.

<a id="entry-presentation_rust_api_partialdifferentialequationlinearity_linear"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationlinearity_linear.73fcf74e95f5"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationLinearity variant</p>

```rust signature
Linear,
```

Every dependent jet occurs linearly with jet-free coefficients.

<a id="entry-presentation_rust_api_partialdifferentialequationlinearity_nonlinear"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationlinearity_nonlinear.1041a151f7e9"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationLinearity variant</p>

```rust signature
Nonlinear,
```

A highest-order dependent jet occurs non-affinely.

<a id="entry-presentation_rust_api_partialdifferentialequationlinearity"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationlinearity.ea1364ef81a1"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationLinearity;
```

The nested exact linearity class of a scalar PDE.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationlinearity.c2346dbaee0f"></a>
<p class="symi-entry-owner">Type: <code>api::partial_differential_equations::PartialDifferentialEquationLinearity</code></p>

```rust signature
pub enum PartialDifferentialEquationLinearity
```

</details>

<a id="entry-presentation_rust_api_partialdifferentialequationlinearity_quasilinear"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationlinearity_quasilinear.8934da0107f4"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationLinearity variant</p>

```rust signature
Quasilinear,
```

Highest-order jets occur affinely with lower-order jet coefficients.

<a id="entry-presentation_rust_api_partialdifferentialequationlinearity_semilinear"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationlinearity_semilinear.be11c6d5502e"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationLinearity variant</p>

```rust signature
Semilinear,
```

Only lower-order dependent jets occur nonlinearly.

<a id="entry-presentation_rust_api_partialdifferentialequationlinearity_name"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationlinearity_name.dd0c0018a9bb"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationLinearity method</p>

```rust signature
pub fn name(self) -> &'static str
```

Returns the stable lowercase binding spelling.

### PartialDifferentialEquationPrincipalPart

The second-order principal part of a PDE, as read by the classifier. `matrix`
is the **symmetric principal matrix** whose quadratic form is the principal
symbol: for a two-variable equation with mixed term \(B\,u_{xy}\) its
off-diagonal entries are \(B/2\), so that the discriminant of the equation is
the discriminant of that quadratic form. It is a [`Matrix`](linear-algebra.md)
value, not another way of constructing one. `derivative_coefficients` lists the
coefficients of the principal derivatives in the classifier's own derivative
order, which is where a coefficient that could not be proved real is reported.

<a id="entry-presentation_rust_api_partialdifferentialequationprincipalpart"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationprincipalpart.d527b862a307"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationPrincipalPart;
```

Exact second-order principal metadata with the frozen symmetric matrix convention.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationprincipalpart.de711ed5c59a"></a>
<p class="symi-entry-owner">Type: <code>api::partial_differential_equations::PartialDifferentialEquationPrincipalPart</code></p>

```rust signature
pub struct PartialDifferentialEquationPrincipalPart
```

</details>

<a id="entry-presentation_rust_api_partialdifferentialequationprincipalpart_derivative_coefficients"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationprincipalpart_derivative_coefficients.c07d9607eba7"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPrincipalPart method</p>

```rust signature
pub fn derivative_coefficients(
    &self,
) -> Vec<PartialDifferentialEquationPrincipalCoefficient>
```

Returns raw derivative coefficients without losing mixed-term factors.

<a id="entry-presentation_rust_api_partialdifferentialequationprincipalpart_matrix"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationprincipalpart_matrix.89a26f5a0c0b"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPrincipalPart method</p>

```rust signature
pub fn matrix(&self) -> Matrix
```

Returns the frozen symmetric principal matrix.

### PartialDifferentialEquationPrincipalCoefficient

One raw second-order principal coefficient before mixed-term symmetrization.

<a id="entry-presentation_rust_api_partialdifferentialequationprincipalcoefficient"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationprincipalcoefficient.9c3fe6843512"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationPrincipalCoefficient;
```

One raw second-order principal coefficient before mixed-term symmetrization.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationprincipalcoefficient.05e75a1695c6"></a>
<p class="symi-entry-owner">Type: <code>api::partial_differential_equations::PartialDifferentialEquationPrincipalCoefficient</code></p>

```rust signature
pub struct PartialDifferentialEquationPrincipalCoefficient
```

</details>

<a id="entry-presentation_rust_api_partialdifferentialequationprincipalcoefficient_coefficient"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationprincipalcoefficient_coefficient.36c84887f4a8"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPrincipalCoefficient method</p>

```rust signature
pub fn coefficient(&self) -> Expression
```

Returns the raw derivative coefficient before mixed-term symmetrization.

<a id="entry-presentation_rust_api_partialdifferentialequationprincipalcoefficient_jet"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationprincipalcoefficient_jet.6a8b6da47161"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPrincipalCoefficient method</p>

```rust signature
pub fn jet(&self) -> PartialDifferentialEquationJet
```

Returns the second-order derivative jet.

### PartialDifferentialEquationSecondOrderClassification

The elliptic, parabolic, or hyperbolic analysis of a two-variable linear
second-order equation. `verdict` says which kind of answer this is — one type
proved outright, a complete table of cases each with its own proved condition,
or neither. `discriminant` and `principal_matrix` are the exact data the type
was read from, and `proof_obligations` records what the classification assumed
but did not prove.

<a id="entry-presentation_rust_api_partialdifferentialequationsecondorderclassification"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationsecondorderclassification.0e61b326a25a"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationSecondOrderClassification;
```

Exact real second-order type analysis over the frozen symmetric principal matrix.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondorderclassification.bf097da4dd39"></a>
<p class="symi-entry-owner">Type: <code>api::partial_differential_equations::PartialDifferentialEquationSecondOrderClassification</code></p>

```rust signature
pub struct PartialDifferentialEquationSecondOrderClassification
```

</details>

<a id="entry-presentation_rust_api_partialdifferentialequationsecondorderclassification_cases"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondorderclassification_cases.83ce79873a09"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSecondOrderClassification method</p>

```rust signature
pub fn cases(
    &self,
) -> Vec<PartialDifferentialEquationSecondOrderTypeCase>
```

Returns the complete exact case table when the verdict is conditional.

<a id="entry-presentation_rust_api_partialdifferentialequationsecondorderclassification_decline"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondorderclassification_decline.a99e842de357"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSecondOrderClassification method</p>

```rust signature
pub fn decline(
    &self,
) -> Option<PartialDifferentialEquationSecondOrderClassificationDecline>
```

Returns the exact reason an unknown analysis could not be completed.

<a id="entry-presentation_rust_api_partialdifferentialequationsecondorderclassification_discriminant"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondorderclassification_discriminant.4b84cbe471b5"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSecondOrderClassification method</p>

```rust signature
pub fn discriminant(&self) -> Expression
```

Returns the exact discriminant `b^2 - a*c` of the symmetric principal matrix.

<a id="entry-presentation_rust_api_partialdifferentialequationsecondorderclassification_equation_type"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondorderclassification_equation_type.40c5dd64831d"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSecondOrderClassification method</p>

```rust signature
pub fn equation_type(
    &self,
) -> Option<PartialDifferentialEquationSecondOrderType>
```

Returns the single proved classical type when the verdict is definite.

<a id="entry-presentation_rust_api_partialdifferentialequationsecondorderclassification_principal_matrix"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondorderclassification_principal_matrix.61876332ffa8"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSecondOrderClassification method</p>

```rust signature
pub fn principal_matrix(&self) -> Matrix
```

Returns the frozen symmetric principal matrix this analysis classified.

<a id="entry-presentation_rust_api_partialdifferentialequationsecondorderclassification_proof_obligations"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondorderclassification_proof_obligations.a0c56a8ac86e"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSecondOrderClassification method</p>

```rust signature
pub fn proof_obligations(
    &self,
) -> Vec<PartialDifferentialEquationProofObligation>
```

Returns obligations downstream canonical-coordinate routes must discharge.

<a id="entry-presentation_rust_api_partialdifferentialequationsecondorderclassification_verdict"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondorderclassification_verdict.ab7028887c9e"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSecondOrderClassification method</p>

```rust signature
pub fn verdict(
    &self,
) -> PartialDifferentialEquationSecondOrderTypeVerdict
```

Returns whether one type, a complete case table, or neither was proved.

### PartialDifferentialEquationSecondOrderType

The exact real classical type of a second-order principal part.

Cases: `Degenerate`, `Elliptic`, `Hyperbolic`, `Parabolic`.

<a id="entry-presentation_rust_api_partialdifferentialequationsecondordertype_degenerate"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondordertype_degenerate.107f53fbb812"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSecondOrderType variant</p>

```rust signature
Degenerate,
```

A principal matrix proved to vanish entirely.

<a id="entry-presentation_rust_api_partialdifferentialequationsecondordertype_elliptic"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondordertype_elliptic.074f7be45da6"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSecondOrderType variant</p>

```rust signature
Elliptic,
```

A negative discriminant.

<a id="entry-presentation_rust_api_partialdifferentialequationsecondordertype_hyperbolic"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondordertype_hyperbolic.4d2734f15512"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSecondOrderType variant</p>

```rust signature
Hyperbolic,
```

A positive discriminant.

<a id="entry-presentation_rust_api_partialdifferentialequationsecondordertype_parabolic"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondordertype_parabolic.0a5ff4cb4e77"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSecondOrderType variant</p>

```rust signature
Parabolic,
```

A zero discriminant with a proved nonzero principal matrix.

<a id="entry-presentation_rust_api_partialdifferentialequationsecondordertype"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationsecondordertype.5c3ab1194b6d"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationSecondOrderType;
```

The exact real classical type of a second-order principal part.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondordertype.41e35cf99ab8"></a>
<p class="symi-entry-owner">Type: <code>api::partial_differential_equations::PartialDifferentialEquationSecondOrderType</code></p>

```rust signature
pub enum PartialDifferentialEquationSecondOrderType
```

</details>

<a id="entry-presentation_rust_api_partialdifferentialequationsecondordertype_from_name"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondordertype_from_name.aa38e3f7e727"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSecondOrderType method</p>

```rust signature
pub fn from_name(name: &str) -> Result<Self, ApiError>
```

Validates one stable lowercase host spelling.

<a id="entry-presentation_rust_api_partialdifferentialequationsecondordertype_name"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondordertype_name.db7389e9f3d9"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSecondOrderType method</p>

```rust signature
pub fn name(self) -> &'static str
```

Returns the stable lowercase binding spelling.

### PartialDifferentialEquationSecondOrderTypeCase

One exact condition and the classical second-order type proved under it.

<a id="entry-presentation_rust_api_partialdifferentialequationsecondordertypecase"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationsecondordertypecase.e7f6788cffc5"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationSecondOrderTypeCase;
```

One exact condition and the classical type proved under it.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondordertypecase.ee791ec6ee9f"></a>
<p class="symi-entry-owner">Type: <code>api::partial_differential_equations::PartialDifferentialEquationSecondOrderTypeCase</code></p>

```rust signature
pub struct PartialDifferentialEquationSecondOrderTypeCase
```

</details>

<a id="entry-presentation_rust_api_partialdifferentialequationsecondordertypecase_condition"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondordertypecase_condition.9f185b8e041d"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSecondOrderTypeCase method</p>

```rust signature
pub fn condition(&self) -> AssumptionProposition
```

Returns the exact condition under which this case's type holds.

<a id="entry-presentation_rust_api_partialdifferentialequationsecondordertypecase_equation_type"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondordertypecase_equation_type.c6e8d176a386"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSecondOrderTypeCase method</p>

```rust signature
pub fn equation_type(
    &self,
) -> PartialDifferentialEquationSecondOrderType
```

Returns the classical type proved under this case's condition.

### PartialDifferentialEquationSecondOrderTypeVerdict

Whether one type was proved, a complete case table was proved, or neither.

Cases: `Conditional`, `Definite`, `Unknown`.

<a id="entry-presentation_rust_api_partialdifferentialequationsecondordertypeverdict_conditional"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondordertypeverdict_conditional.c8b3a9c3fb12"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSecondOrderTypeVerdict variant</p>

```rust signature
Conditional,
```

A complete exact partition of mutually exclusive typed cases holds.

<a id="entry-presentation_rust_api_partialdifferentialequationsecondordertypeverdict_definite"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondordertypeverdict_definite.e272d5d71320"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSecondOrderTypeVerdict variant</p>

```rust signature
Definite,
```

Exactly one classical type holds under the active assumptions.

<a id="entry-presentation_rust_api_partialdifferentialequationsecondordertypeverdict"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationsecondordertypeverdict.64bfe49776d9"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationSecondOrderTypeVerdict;
```

Whether one type was proved, a complete case table was proved, or neither.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondordertypeverdict.242476bc9524"></a>
<p class="symi-entry-owner">Type: <code>api::partial_differential_equations::PartialDifferentialEquationSecondOrderTypeVerdict</code></p>

```rust signature
pub enum PartialDifferentialEquationSecondOrderTypeVerdict
```

</details>

<a id="entry-presentation_rust_api_partialdifferentialequationsecondordertypeverdict_unknown"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondordertypeverdict_unknown.093461344f61"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSecondOrderTypeVerdict variant</p>

```rust signature
Unknown,
```

Exact classification could not be completed.

<a id="entry-presentation_rust_api_partialdifferentialequationsecondordertypeverdict_name"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondordertypeverdict_name.cf377152af55"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSecondOrderTypeVerdict method</p>

```rust signature
pub fn name(self) -> &'static str
```

Returns the stable lowercase binding spelling.

### PartialDifferentialEquationSecondOrderClassificationDecline

The exact reason second-order type analysis returned no definite or conditional type.

Cases: `BudgetExceeded`, `InconsistentAssumptions`, `NotTwoVariableSecondOrderLinear`, `PrincipalPartNotAvailable`, `RealPrincipalCoefficientsNotProved`, `TypeNotProved`.

<a id="entry-presentation_rust_api_partialdifferentialequationsecondorderclassificationdecline_budgetexceeded"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondorderclassificationdecline_budgetexceeded.e9c3fa928545"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSecondOrderClassificationDecline variant</p>

```rust signature
BudgetExceeded,
```

The deterministic classification work budget was exhausted.

<a id="entry-presentation_rust_api_partialdifferentialequationsecondorderclassificationdecline_inconsistentassumptions"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondorderclassificationdecline_inconsistentassumptions.1672c68a8967"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSecondOrderClassificationDecline variant</p>

```rust signature
InconsistentAssumptions,
```

The active assumptions admit no consistent real sign branch.

<a id="entry-presentation_rust_api_partialdifferentialequationsecondorderclassificationdecline_nottwovariablesecondorderlinear"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondorderclassificationdecline_nottwovariablesecondorderlinear.1dc467a29222"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSecondOrderClassificationDecline variant</p>

```rust signature
NotTwoVariableSecondOrderLinear,
```

The problem is not a two-variable linear second-order equation.

<a id="entry-presentation_rust_api_partialdifferentialequationsecondorderclassificationdecline"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationsecondorderclassificationdecline.9bc4439cee42"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationSecondOrderClassificationDecline;
```

The exact reason second-order type analysis returned no definite or conditional type.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondorderclassificationdecline.52b6ee42e76f"></a>
<p class="symi-entry-owner">Type: <code>api::partial_differential_equations::PartialDifferentialEquationSecondOrderClassificationDecline</code></p>

```rust signature
pub enum PartialDifferentialEquationSecondOrderClassificationDecline
```

</details>

<a id="entry-presentation_rust_api_partialdifferentialequationsecondorderclassificationdecline_principalpartnotavailable"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondorderclassificationdecline_principalpartnotavailable.a064d6c91c37"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSecondOrderClassificationDecline variant</p>

```rust signature
PrincipalPartNotAvailable,
```

Structural classification exposed no second-order principal part.

<a id="entry-presentation_rust_api_partialdifferentialequationsecondorderclassificationdecline_realprincipalcoefficientsnotproved"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondorderclassificationdecline_realprincipalcoefficientsnotproved.30d7404afa4f"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSecondOrderClassificationDecline variant</p>

```rust signature
RealPrincipalCoefficientsNotProved,
```

A principal coefficient could not be proved real.

<a id="entry-presentation_rust_api_partialdifferentialequationsecondorderclassificationdecline_typenotproved"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondorderclassificationdecline_typenotproved.438fd76e2d69"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSecondOrderClassificationDecline variant</p>

```rust signature
TypeNotProved,
```

No sign branch closed to a definite type.

<a id="entry-presentation_rust_api_partialdifferentialequationsecondorderclassificationdecline_name"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondorderclassificationdecline_name.fd32845307de"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSecondOrderClassificationDecline method</p>

```rust signature
pub fn name(self) -> &'static str
```

Returns the stable lowercase binding spelling.

### PartialDifferentialEquationMethod

A stable advisory PDE method identifier.

Cases: `Automatic`, `CanonicalCoordinates`, `Characteristics`, `FourierTransform`, `InitialDataConvolution`, `LaplaceTransform`, `RepeatedIntegration`, `Separation`.

<a id="entry-presentation_rust_api_partialdifferentialequationmethod_automatic"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationmethod_automatic.d48e6b15ee25"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationMethod variant</p>

```rust signature
Automatic,
```

Select the first applicable implemented method.

<a id="entry-presentation_rust_api_partialdifferentialequationmethod_canonicalcoordinates"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationmethod_canonicalcoordinates.c3d5417de043"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationMethod variant</p>

```rust signature
CanonicalCoordinates,
```

The second-order canonical-coordinate route reserved for PDE C.

<a id="entry-presentation_rust_api_partialdifferentialequationmethod_characteristics"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationmethod_characteristics.5b719e769964"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationMethod variant</p>

```rust signature
Characteristics,
```

The first-order characteristic route reserved for PDE B.

<a id="entry-presentation_rust_api_partialdifferentialequationmethod_fouriertransform"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationmethod_fouriertransform.c25a3ee69db1"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationMethod variant</p>

```rust signature
FourierTransform,
```

The exact Fourier transform route reserved for PDE E.

<a id="entry-presentation_rust_api_partialdifferentialequationmethod_initialdataconvolution"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationmethod_initialdataconvolution.0f515a576b39"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationMethod variant</p>

```rust signature
InitialDataConvolution,
```

The whole-line initial-data solution operator of a diffusion equation.

<a id="entry-presentation_rust_api_partialdifferentialequationmethod_laplacetransform"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationmethod_laplacetransform.52913c8005d8"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationMethod variant</p>

```rust signature
LaplaceTransform,
```

The exact Laplace transform route reserved for PDE E.

<a id="entry-presentation_rust_api_partialdifferentialequationmethod"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationmethod.460b6952e247"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationMethod;
```

A stable advisory PDE method identifier.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationmethod.93a455ee0f77"></a>
<p class="symi-entry-owner">Type: <code>api::partial_differential_equations::PartialDifferentialEquationMethod</code></p>

```rust signature
pub enum PartialDifferentialEquationMethod
```

</details>

<a id="entry-presentation_rust_api_partialdifferentialequationmethod_repeatedintegration"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationmethod_repeatedintegration.94792505586a"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationMethod variant</p>

```rust signature
RepeatedIntegration,
```

Repeated coordinate integration of a vanishing iterated derivative.

<a id="entry-presentation_rust_api_partialdifferentialequationmethod_separation"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationmethod_separation.a81b8a0437b7"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationMethod variant</p>

```rust signature
Separation,
```

The separation route reserved for PDE D.

<a id="entry-presentation_rust_api_partialdifferentialequationmethod_from_name"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationmethod_from_name.0bc86f8d6d9d"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationMethod method</p>

```rust signature
pub fn from_name(name: &str) -> Result<Self, ApiError>
```

Validates one stable lowercase host spelling.

<a id="entry-presentation_rust_api_partialdifferentialequationmethod_name"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationmethod_name.d49b5fbe15e5"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationMethod method</p>

```rust signature
pub fn name(self) -> &'static str
```

Returns the stable lowercase binding spelling.

### PartialDifferentialEquationMethodCandidate

One advisory PDE method candidate and its exact proof-obligation spellings.

<a id="entry-presentation_rust_api_partialdifferentialequationmethodcandidate"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationmethodcandidate.689a93461bc3"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationMethodCandidate;
```

One advisory PDE method candidate and its exact proof-obligation spellings.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationmethodcandidate.c0b9bbad0016"></a>
<p class="symi-entry-owner">Type: <code>api::partial_differential_equations::PartialDifferentialEquationMethodCandidate</code></p>

```rust signature
pub struct PartialDifferentialEquationMethodCandidate
```

</details>

<a id="entry-presentation_rust_api_partialdifferentialequationmethodcandidate_method"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationmethodcandidate_method.b2de593d21fa"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationMethodCandidate method</p>

```rust signature
pub fn method(&self) -> PartialDifferentialEquationMethod
```

Returns the stable method identifier.

<a id="entry-presentation_rust_api_partialdifferentialequationmethodcandidate_proof_obligations"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationmethodcandidate_proof_obligations.2729ed41c873"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationMethodCandidate method</p>

```rust signature
pub fn proof_obligations(
    &self,
) -> Vec<PartialDifferentialEquationProofObligation>
```

Returns the exact proof obligations required by this method.

### PartialDifferentialEquationProofObligation

An exact obligation an advisory PDE method must discharge before solving.

Cases: `BoundaryEigenvalueConditionsEstablished`, `CharacteristicTransversality`, `CoefficientNonzero`, `ConstantCoefficients`, `CoordinateJacobianNonzero`, `CoverageOutsideTheAdmissibleClass`, `DifferentiationUnderTheIntegralSign`, `EquationTypeEvidence`, `ExactInverseTransformAvailable`, `InitialTraceAttainedInTheAdmissibleClass`, `OriginTraceEstablished`, `SeparabilityEstablished`, `TransformAxisDomainEstablished`, `TransformExistenceAndGrowth`, `TransformReductionExact`, `UniquenessInTheAdmissibleClass`.

<a id="entry-presentation_rust_api_partialdifferentialequationproofobligation_boundaryeigenvalueconditionsestablished"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproofobligation_boundaryeigenvalueconditionsestablished.3c65e417ecf6"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProofObligation variant</p>

```rust signature
BoundaryEigenvalueConditionsEstablished,
```

Boundary conditions must establish an eigenvalue problem.

<a id="entry-presentation_rust_api_partialdifferentialequationproofobligation_characteristictransversality"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproofobligation_characteristictransversality.35c14da47238"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProofObligation variant</p>

```rust signature
CharacteristicTransversality,
```

Cauchy data must be transverse to characteristics.

<a id="entry-presentation_rust_api_partialdifferentialequationproofobligation_coefficientnonzero"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproofobligation_coefficientnonzero.322f7d88f7c8"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProofObligation variant</p>

```rust signature
CoefficientNonzero,
```

A required coefficient must be proved nonzero.

<a id="entry-presentation_rust_api_partialdifferentialequationproofobligation_constantcoefficients"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproofobligation_constantcoefficients.8784257313e9"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProofObligation variant</p>

```rust signature
ConstantCoefficients,
```

Transform coefficients must be constant.

<a id="entry-presentation_rust_api_partialdifferentialequationproofobligation_coordinatejacobiannonzero"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproofobligation_coordinatejacobiannonzero.23e294a68fe1"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProofObligation variant</p>

```rust signature
CoordinateJacobianNonzero,
```

A coordinate transformation must have a nonzero Jacobian.

<a id="entry-presentation_rust_api_partialdifferentialequationproofobligation_coverageoutsidetheadmissibleclass"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproofobligation_coverageoutsidetheadmissibleclass.80864667cccd"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProofObligation variant</p>

```rust signature
CoverageOutsideTheAdmissibleClass,
```

Coverage of solutions outside the declared admissible class is not established.

<a id="entry-presentation_rust_api_partialdifferentialequationproofobligation_differentiationundertheintegralsign"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproofobligation_differentiationundertheintegralsign.f30126f65a93"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProofObligation variant</p>

```rust signature
DifferentiationUnderTheIntegralSign,
```

Differentiation under the integral sign must be justified for the declared data class.

<a id="entry-presentation_rust_api_partialdifferentialequationproofobligation_equationtypeevidence"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproofobligation_equationtypeevidence.8ce0621d5fc9"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProofObligation variant</p>

```rust signature
EquationTypeEvidence,
```

PDE type evidence must be established.

<a id="entry-presentation_rust_api_partialdifferentialequationproofobligation_exactinversetransformavailable"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproofobligation_exactinversetransformavailable.4e5273f2a4e6"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProofObligation variant</p>

```rust signature
ExactInverseTransformAvailable,
```

An exact inverse transform must be available.

<a id="entry-presentation_rust_api_partialdifferentialequationproofobligation_initialtraceattainedintheadmissibleclass"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproofobligation_initialtraceattainedintheadmissibleclass.2d284a13cdaf"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProofObligation variant</p>

```rust signature
InitialTraceAttainedInTheAdmissibleClass,
```

The solution operator must attain the declared datum as the evolution coordinate vanishes.

<a id="entry-presentation_rust_api_partialdifferentialequationproofobligation_origintraceestablished"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproofobligation_origintraceestablished.020e33fd0e11"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProofObligation variant</p>

```rust signature
OriginTraceEstablished,
```

An exact unilateral origin trace must be established.

<a id="entry-presentation_rust_api_partialdifferentialequationproofobligation"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationproofobligation.88661a642926"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationProofObligation;
```

An exact obligation an advisory PDE method must discharge before solving.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproofobligation.274c6e6669a6"></a>
<p class="symi-entry-owner">Type: <code>api::partial_differential_equations::PartialDifferentialEquationProofObligation</code></p>

```rust signature
pub enum PartialDifferentialEquationProofObligation
```

</details>

<a id="entry-presentation_rust_api_partialdifferentialequationproofobligation_separabilityestablished"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproofobligation_separabilityestablished.1ac596d66b3b"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProofObligation variant</p>

```rust signature
SeparabilityEstablished,
```

A separation decomposition must be established.

<a id="entry-presentation_rust_api_partialdifferentialequationproofobligation_transformaxisdomainestablished"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproofobligation_transformaxisdomainestablished.d4b680be26ee"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProofObligation variant</p>

```rust signature
TransformAxisDomainEstablished,
```

A transform axis must have explicitly declared geometric semantics.

<a id="entry-presentation_rust_api_partialdifferentialequationproofobligation_transformexistenceandgrowth"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproofobligation_transformexistenceandgrowth.32abb759a783"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProofObligation variant</p>

```rust signature
TransformExistenceAndGrowth,
```

Transform existence and growth conditions must be established.

<a id="entry-presentation_rust_api_partialdifferentialequationproofobligation_transformreductionexact"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproofobligation_transformreductionexact.83fc09b4be22"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProofObligation variant</p>

```rust signature
TransformReductionExact,
```

The transform-domain equation must be an exact reduction of the problem.

<a id="entry-presentation_rust_api_partialdifferentialequationproofobligation_uniquenessintheadmissibleclass"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproofobligation_uniquenessintheadmissibleclass.6b2bb859078e"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProofObligation variant</p>

```rust signature
UniquenessInTheAdmissibleClass,
```

Solutions in the declared admissible class must be determined by their initial trace.

<a id="entry-presentation_rust_api_partialdifferentialequationproofobligation_from_name"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproofobligation_from_name.80981cf791e7"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProofObligation method</p>

```rust signature
pub fn from_name(name: &str) -> Result<Self, ApiError>
```

Validates one stable lowercase host spelling.

<a id="entry-presentation_rust_api_partialdifferentialequationproofobligation_name"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproofobligation_name.1e7d942fd94a"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProofObligation method</p>

```rust signature
pub fn name(self) -> &'static str
```

Returns the stable lowercase binding spelling.

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

<a id="entry-presentation_rust_api_partialdifferentialequationcoordinatechange"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationcoordinatechange.94dc5395fd9d"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationCoordinateChange;
```

A validated exact two-variable change of independent variables.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcoordinatechange.92ae567822e3"></a>
<p class="symi-entry-owner">Type: <code>api::partial_differential_equations::PartialDifferentialEquationCoordinateChange</code></p>

```rust signature
pub struct PartialDifferentialEquationCoordinateChange
```

</details>

<a id="entry-presentation_rust_api_partialdifferentialequationcoordinatechange_forward_coordinates"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcoordinatechange_forward_coordinates.054485ec37ca"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationCoordinateChange method</p>

```rust signature
pub fn forward_coordinates(&self) -> Result<Vec<Expression>, ApiError>
```

Returns the ordered source-to-target coordinate expressions.

<a id="entry-presentation_rust_api_partialdifferentialequationcoordinatechange_generation"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcoordinatechange_generation.672393aad2ad"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationCoordinateChange method</p>

```rust signature
pub fn generation(&self) -> u64
```

Returns the reset generation in which this coordinate change was built.

<a id="entry-presentation_rust_api_partialdifferentialequationcoordinatechange_inverse_coordinates"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcoordinatechange_inverse_coordinates.aa83eaf2e909"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationCoordinateChange method</p>

```rust signature
pub fn inverse_coordinates(&self) -> Result<Vec<Expression>, ApiError>
```

Returns the ordered target-to-source coordinate expressions.

<a id="entry-presentation_rust_api_partialdifferentialequationcoordinatechange_jacobian"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcoordinatechange_jacobian.dfba822c539c"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationCoordinateChange method</p>

```rust signature
pub fn jacobian(&self) -> Result<Expression, ApiError>
```

Returns the exact forward-map Jacobian determinant.

<a id="entry-presentation_rust_api_partialdifferentialequationcoordinatechange_serialize_object"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcoordinatechange_serialize_object.2793ded9db74"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationCoordinateChange method</p>

```rust signature
pub fn serialize_object(&self) -> Result<String, ApiError>
```

Serializes this coordinate change in the versioned canonical object grammar.

<a id="entry-presentation_rust_api_partialdifferentialequationcoordinatechange_session"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcoordinatechange_session.b3d0c9d2f725"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationCoordinateChange method</p>

```rust signature
pub fn session(&self) -> Session
```

Returns the session that owns this coordinate change.

<a id="entry-presentation_rust_api_partialdifferentialequationcoordinatechange_source_variables"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcoordinatechange_source_variables.e62ba6c6957c"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationCoordinateChange method</p>

```rust signature
pub fn source_variables(&self) -> Result<Vec<String>, ApiError>
```

Returns the ordered source coordinate names.

<a id="entry-presentation_rust_api_partialdifferentialequationcoordinatechange_target_dependent_function"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcoordinatechange_target_dependent_function.e0a7f5ceaa5f"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationCoordinateChange method</p>

```rust signature
pub fn target_dependent_function(&self) -> Result<String, ApiError>
```

Returns the target unknown-function name.

<a id="entry-presentation_rust_api_partialdifferentialequationcoordinatechange_target_variables"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcoordinatechange_target_variables.257eb130434b"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationCoordinateChange method</p>

```rust signature
pub fn target_variables(&self) -> Result<Vec<String>, ApiError>
```

Returns the ordered target coordinate names.

### PartialDifferentialEquationTransformationResult

The transformed problem or typed decline from an exact change of variables.

<a id="entry-presentation_rust_api_partialdifferentialequationtransformationresult"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationtransformationresult.b3c315cd45ee"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationTransformationResult;
```

The outcome of an exact coordinate transformation of a PDE problem.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationresult.0ed51e0af405"></a>
<p class="symi-entry-owner">Type: <code>api::partial_differential_equations::PartialDifferentialEquationTransformationResult</code></p>

```rust signature
pub struct PartialDifferentialEquationTransformationResult
```

</details>

<a id="entry-presentation_rust_api_partialdifferentialequationtransformationresult_coordinate_change"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationresult_coordinate_change.e934f246e68d"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformationResult method</p>

```rust signature
pub fn coordinate_change(
    &self,
) -> Option<PartialDifferentialEquationCoordinateChange>
```

Returns the validated coordinate change of a successful transformation.

<a id="entry-presentation_rust_api_partialdifferentialequationtransformationresult_decline"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationresult_decline.63f4ccaca3a0"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformationResult method</p>

```rust signature
pub fn decline(
    &self,
) -> Option<PartialDifferentialEquationTransformationDecline>
```

Returns the exact reason no transformation was produced.

<a id="entry-presentation_rust_api_partialdifferentialequationtransformationresult_normalization_multiplier"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationresult_normalization_multiplier.795c2811c8a6"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformationResult method</p>

```rust signature
pub fn normalization_multiplier(&self) -> Option<Expression>
```

Returns the proved-nonzero residual-normalization multiplier.

<a id="entry-presentation_rust_api_partialdifferentialequationtransformationresult_target_problem"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationresult_target_problem.dc9c65d28d15"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformationResult method</p>

```rust signature
pub fn target_problem(
    &self,
) -> Option<PartialDifferentialEquationProblem>
```

Returns the transformed PDE problem stated in the target coordinates.

<a id="entry-presentation_rust_api_partialdifferentialequationtransformationresult_transformed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationresult_transformed.0b2e82926dcb"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformationResult method</p>

```rust signature
pub fn transformed(&self) -> bool
```

Returns whether a verified transformation was produced.

### PartialDifferentialEquationTransformationDecline

The exact reason a coordinate transformation was not constructed.

Cases: `ConditionDerivativeOrderNotSupported`, `CoordinateMapArityMismatch`, `CoordinateMapContainsDependentFunction`, `CoordinateMapDirectionMissing`, `CoordinateMapUsesWrongVariables`, `DuplicateOrCollidingCoordinateVariables`, `InverseMapInconclusive`, `InverseMapRejected`, `InverseNotRecovered`, `JacobianIsZero`, `JacobianNonzeroNotProved`, `TargetDependentFunctionInvalid`, `TargetProblemInvalid`, `TwoSourceAndTargetVariablesRequired`.

<a id="entry-presentation_rust_api_partialdifferentialequationtransformationdecline_conditionderivativeordernotsupported"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationdecline_conditionderivativeordernotsupported.ed7ed082ee2d"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformationDecline variant</p>

```rust signature
ConditionDerivativeOrderNotSupported,
```

A condition needs a source derivative above the supported order.

<a id="entry-presentation_rust_api_partialdifferentialequationtransformationdecline_coordinatemaparitymismatch"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationdecline_coordinatemaparitymismatch.2e3a168c4642"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformationDecline variant</p>

```rust signature
CoordinateMapArityMismatch,
```

A supplied coordinate map does not have exactly two components.

<a id="entry-presentation_rust_api_partialdifferentialequationtransformationdecline_coordinatemapcontainsdependentfunction"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationdecline_coordinatemapcontainsdependentfunction.bedf880d2627"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformationDecline variant</p>

```rust signature
CoordinateMapContainsDependentFunction,
```

A coordinate expression contains the dependent function or its derivative.

<a id="entry-presentation_rust_api_partialdifferentialequationtransformationdecline_coordinatemapdirectionmissing"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationdecline_coordinatemapdirectionmissing.d5f8376ab0cf"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformationDecline variant</p>

```rust signature
CoordinateMapDirectionMissing,
```

Neither map direction was supplied.

<a id="entry-presentation_rust_api_partialdifferentialequationtransformationdecline_coordinatemapuseswrongvariables"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationdecline_coordinatemapuseswrongvariables.c4e24873971e"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformationDecline variant</p>

```rust signature
CoordinateMapUsesWrongVariables,
```

A coordinate expression uses variables from the wrong side of the map.

<a id="entry-presentation_rust_api_partialdifferentialequationtransformationdecline_duplicateorcollidingcoordinatevariables"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationdecline_duplicateorcollidingcoordinatevariables.ccad5a51e453"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformationDecline variant</p>

```rust signature
DuplicateOrCollidingCoordinateVariables,
```

Target variables repeat or collide with the source coordinates.

<a id="entry-presentation_rust_api_partialdifferentialequationtransformationdecline_inversemapinconclusive"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationdecline_inversemapinconclusive.34253ff044f6"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformationDecline variant</p>

```rust signature
InverseMapInconclusive,
```

A map composition residual could not be proved zero.

<a id="entry-presentation_rust_api_partialdifferentialequationtransformationdecline_inversemaprejected"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationdecline_inversemaprejected.10fbe7da6507"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformationDecline variant</p>

```rust signature
InverseMapRejected,
```

A map composition residual was proved nonzero.

<a id="entry-presentation_rust_api_partialdifferentialequationtransformationdecline_inversenotrecovered"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationdecline_inversenotrecovered.1cced9fd1abd"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformationDecline variant</p>

```rust signature
InverseNotRecovered,
```

The missing map direction could not be recovered exactly.

<a id="entry-presentation_rust_api_partialdifferentialequationtransformationdecline_jacobianiszero"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationdecline_jacobianiszero.493416d7333d"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformationDecline variant</p>

```rust signature
JacobianIsZero,
```

The coordinate Jacobian was proved zero.

<a id="entry-presentation_rust_api_partialdifferentialequationtransformationdecline_jacobiannonzeronotproved"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationdecline_jacobiannonzeronotproved.86aa8dc4d559"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformationDecline variant</p>

```rust signature
JacobianNonzeroNotProved,
```

The coordinate Jacobian could not be proved nonzero.

<a id="entry-presentation_rust_api_partialdifferentialequationtransformationdecline"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationtransformationdecline.817558a6f7d5"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationTransformationDecline;
```

The exact reason a coordinate transformation was not constructed.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationdecline.6018d441431a"></a>
<p class="symi-entry-owner">Type: <code>api::partial_differential_equations::PartialDifferentialEquationTransformationDecline</code></p>

```rust signature
pub enum PartialDifferentialEquationTransformationDecline
```

</details>

<a id="entry-presentation_rust_api_partialdifferentialequationtransformationdecline_targetdependentfunctioninvalid"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationdecline_targetdependentfunctioninvalid.03d916d18e4f"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformationDecline variant</p>

```rust signature
TargetDependentFunctionInvalid,
```

The supplied target dependent function is not usable.

<a id="entry-presentation_rust_api_partialdifferentialequationtransformationdecline_targetprobleminvalid"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationdecline_targetprobleminvalid.9a79f5cd19c5"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformationDecline variant</p>

```rust signature
TargetProblemInvalid,
```

The transformed residual is not a valid PDE in the target coordinates.

<a id="entry-presentation_rust_api_partialdifferentialequationtransformationdecline_twosourceandtargetvariablesrequired"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationdecline_twosourceandtargetvariablesrequired.4a90eaba2c47"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformationDecline variant</p>

```rust signature
TwoSourceAndTargetVariablesRequired,
```

The transformation needs exactly two source and two target variables.

<a id="entry-presentation_rust_api_partialdifferentialequationtransformationdecline_name"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationdecline_name.7a860f374ae5"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformationDecline method</p>

```rust signature
pub fn name(self) -> &'static str
```

Returns the stable lowercase binding spelling.

### PartialDifferentialEquationTransformationVerificationReport

Independent exact evidence that a coordinate transformation is correct.

<a id="entry-presentation_rust_api_partialdifferentialequationtransformationverificationreport"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationtransformationverificationreport.b8192e677d6f"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationTransformationVerificationReport;
```

Independent exact evidence that a coordinate transformation is correct.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationverificationreport.709c5818cf06"></a>
<p class="symi-entry-owner">Type: <code>api::partial_differential_equations::PartialDifferentialEquationTransformationVerificationReport</code></p>

```rust signature
pub struct PartialDifferentialEquationTransformationVerificationReport
```

</details>

<a id="entry-presentation_rust_api_partialdifferentialequationtransformationverificationreport_claimed_governing_residual"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationverificationreport_claimed_governing_residual.21616982fd79"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformationVerificationReport method</p>

```rust signature
pub fn claimed_governing_residual(&self) -> Expression
```

Returns the governing residual the transformation claimed.

<a id="entry-presentation_rust_api_partialdifferentialequationtransformationverificationreport_composition_residuals"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationverificationreport_composition_residuals.5c83a3eccf18"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformationVerificationReport method</p>

```rust signature
pub fn composition_residuals(&self) -> Vec<Expression>
```

Returns every forward and inverse map-composition residual.

<a id="entry-presentation_rust_api_partialdifferentialequationtransformationverificationreport_jacobian"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationverificationreport_jacobian.571f823f8494"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformationVerificationReport method</p>

```rust signature
pub fn jacobian(&self) -> Expression
```

Returns the independently recomputed forward-map Jacobian.

<a id="entry-presentation_rust_api_partialdifferentialequationtransformationverificationreport_principal_congruence_residuals"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationverificationreport_principal_congruence_residuals.0dced90a5038"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformationVerificationReport method</p>

```rust signature
pub fn principal_congruence_residuals(&self) -> Vec<Expression>
```

Returns the exact principal-matrix congruence residuals.

<a id="entry-presentation_rust_api_partialdifferentialequationtransformationverificationreport_transformed_governing_residual"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationverificationreport_transformed_governing_residual.456735693b59"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformationVerificationReport method</p>

```rust signature
pub fn transformed_governing_residual(&self) -> Expression
```

Returns the independently transformed source governing residual.

<a id="entry-presentation_rust_api_partialdifferentialequationtransformationverificationreport_verdict"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationverificationreport_verdict.2863448e1082"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformationVerificationReport method</p>

```rust signature
pub fn verdict(&self) -> PartialDifferentialEquationVerificationVerdict
```

Returns the aggregate exact verification verdict.

### PartialDifferentialEquationCanonicalizationResult

The verified canonical coordinates or typed decline from automatic canonicalization.

<a id="entry-presentation_rust_api_partialdifferentialequationcanonicalizationresult"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationcanonicalizationresult.6d4c0e8bcf04"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationCanonicalizationResult;
```

The outcome of automatic exact canonical-coordinate construction.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcanonicalizationresult.c6e640cb4914"></a>
<p class="symi-entry-owner">Type: <code>api::partial_differential_equations::PartialDifferentialEquationCanonicalizationResult</code></p>

```rust signature
pub struct PartialDifferentialEquationCanonicalizationResult
```

</details>

<a id="entry-presentation_rust_api_partialdifferentialequationcanonicalizationresult_canonicalized"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcanonicalizationresult_canonicalized.fc2ed08efd0e"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationCanonicalizationResult method</p>

```rust signature
pub fn canonicalized(&self) -> bool
```

Returns whether verified canonical coordinates were constructed.

<a id="entry-presentation_rust_api_partialdifferentialequationcanonicalizationresult_decline"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcanonicalizationresult_decline.47332ff339cc"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationCanonicalizationResult method</p>

```rust signature
pub fn decline(
    &self,
) -> Option<PartialDifferentialEquationCanonicalizationDecline>
```

Returns the exact reason automatic canonicalization declined.

<a id="entry-presentation_rust_api_partialdifferentialequationcanonicalizationresult_principal_form"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcanonicalizationresult_principal_form.e2a43b7f9c40"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationCanonicalizationResult method</p>

```rust signature
pub fn principal_form(
    &self,
) -> Option<PartialDifferentialEquationCanonicalPrincipalForm>
```

Returns the exact canonical principal form that was reached.

<a id="entry-presentation_rust_api_partialdifferentialequationcanonicalizationresult_transformation"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcanonicalizationresult_transformation.671d0316f6aa"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationCanonicalizationResult method</p>

```rust signature
pub fn transformation(
    &self,
) -> Option<PartialDifferentialEquationTransformationResult>
```

Returns the verified coordinate transformation of a successful canonicalization.

<a id="entry-presentation_rust_api_partialdifferentialequationcanonicalizationresult_transformation_decline"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcanonicalizationresult_transformation_decline.ee103fe54ecc"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationCanonicalizationResult method</p>

```rust signature
pub fn transformation_decline(
    &self,
) -> Option<PartialDifferentialEquationTransformationDecline>
```

Returns the underlying coordinate-transformation decline when one caused the decline.

### PartialDifferentialEquationCanonicalPrincipalForm

The frozen canonical principal form claimed by automatic canonicalization.

Cases: `EllipticSumOfPureSecondDerivatives`, `HyperbolicMixedSecondDerivative`, `ParabolicSinglePureSecondDerivative`.

<a id="entry-presentation_rust_api_partialdifferentialequationcanonicalprincipalform_ellipticsumofpuresecondderivatives"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcanonicalprincipalform_ellipticsumofpuresecondderivatives.f1114ba80d7f"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationCanonicalPrincipalForm variant</p>

```rust signature
EllipticSumOfPureSecondDerivatives,
```

The pinned elliptic form `v_xixi + v_etaeta`.

<a id="entry-presentation_rust_api_partialdifferentialequationcanonicalprincipalform_hyperbolicmixedsecondderivative"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcanonicalprincipalform_hyperbolicmixedsecondderivative.fe8e30c6d0d9"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationCanonicalPrincipalForm variant</p>

```rust signature
HyperbolicMixedSecondDerivative,
```

The pinned hyperbolic form `v_xieta`.

<a id="entry-presentation_rust_api_partialdifferentialequationcanonicalprincipalform_parabolicsinglepuresecondderivative"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcanonicalprincipalform_parabolicsinglepuresecondderivative.9d44e20b92cd"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationCanonicalPrincipalForm variant</p>

```rust signature
ParabolicSinglePureSecondDerivative,
```

The pinned parabolic form `v_xixi`.

<a id="entry-presentation_rust_api_partialdifferentialequationcanonicalprincipalform"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationcanonicalprincipalform.f3eeef9a2e5e"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationCanonicalPrincipalForm;
```

The frozen canonical principal form claimed by automatic canonicalization.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcanonicalprincipalform.79acc4e914c1"></a>
<p class="symi-entry-owner">Type: <code>api::partial_differential_equations::PartialDifferentialEquationCanonicalPrincipalForm</code></p>

```rust signature
pub enum PartialDifferentialEquationCanonicalPrincipalForm
```

</details>

<a id="entry-presentation_rust_api_partialdifferentialequationcanonicalprincipalform_from_name"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcanonicalprincipalform_from_name.122c8c298946"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationCanonicalPrincipalForm method</p>

```rust signature
pub fn from_name(name: &str) -> Result<Self, ApiError>
```

Validates one stable lowercase host spelling.

<a id="entry-presentation_rust_api_partialdifferentialequationcanonicalprincipalform_name"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcanonicalprincipalform_name.b50e87a5fe41"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationCanonicalPrincipalForm method</p>

```rust signature
pub fn name(self) -> &'static str
```

Returns the stable lowercase binding spelling.

### PartialDifferentialEquationCanonicalizationDecline

The exact reason automatic canonicalization returned no verified transformation.

Cases: `CharacteristicCoordinateNotClosed`, `ConstantPrincipalCoefficientNotProved`, `CoordinateTransformationDeclined`, `NoSafePrincipalPivot`, `SecondOrderTypeNotDefinite`, `SimpleTransversalNonzeroNotProved`, `TransformationVerificationNotDefinite`, `VariableCoefficientEllipticCanonicalizationNotSupported`.

<a id="entry-presentation_rust_api_partialdifferentialequationcanonicalizationdecline_characteristiccoordinatenotclosed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcanonicalizationdecline_characteristiccoordinatenotclosed.077ac0aa797c"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationCanonicalizationDecline variant</p>

```rust signature
CharacteristicCoordinateNotClosed,
```

A characteristic coordinate did not close through verified invariants.

<a id="entry-presentation_rust_api_partialdifferentialequationcanonicalizationdecline_constantprincipalcoefficientnotproved"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcanonicalizationdecline_constantprincipalcoefficientnotproved.d6a8dd96697c"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationCanonicalizationDecline variant</p>

```rust signature
ConstantPrincipalCoefficientNotProved,
```

The principal coefficients were not proved independent of the coordinates.

<a id="entry-presentation_rust_api_partialdifferentialequationcanonicalizationdecline_coordinatetransformationdeclined"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcanonicalizationdecline_coordinatetransformationdeclined.3cc963261fa2"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationCanonicalizationDecline variant</p>

```rust signature
CoordinateTransformationDeclined,
```

The constructed exact coordinate transformation itself declined.

<a id="entry-presentation_rust_api_partialdifferentialequationcanonicalizationdecline_nosafeprincipalpivot"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcanonicalizationdecline_nosafeprincipalpivot.d514d8076a03"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationCanonicalizationDecline variant</p>

```rust signature
NoSafePrincipalPivot,
```

No principal pivot coefficient was proved nonzero.

<a id="entry-presentation_rust_api_partialdifferentialequationcanonicalizationdecline"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationcanonicalizationdecline.9b204764b187"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationCanonicalizationDecline;
```

The exact reason automatic canonicalization returned no verified transformation.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcanonicalizationdecline.1ec311beaf58"></a>
<p class="symi-entry-owner">Type: <code>api::partial_differential_equations::PartialDifferentialEquationCanonicalizationDecline</code></p>

```rust signature
pub enum PartialDifferentialEquationCanonicalizationDecline
```

</details>

<a id="entry-presentation_rust_api_partialdifferentialequationcanonicalizationdecline_secondordertypenotdefinite"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcanonicalizationdecline_secondordertypenotdefinite.2c642da0e5a1"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationCanonicalizationDecline variant</p>

```rust signature
SecondOrderTypeNotDefinite,
```

Exactly one classical type was not proved under the active assumptions.

<a id="entry-presentation_rust_api_partialdifferentialequationcanonicalizationdecline_simpletransversalnonzeronotproved"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcanonicalizationdecline_simpletransversalnonzeronotproved.c0ca27f3fccb"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationCanonicalizationDecline variant</p>

```rust signature
SimpleTransversalNonzeroNotProved,
```

No simple source coordinate gave a proved nonzero transversal Jacobian.

<a id="entry-presentation_rust_api_partialdifferentialequationcanonicalizationdecline_transformationverificationnotdefinite"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcanonicalizationdecline_transformationverificationnotdefinite.6f1e54e128eb"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationCanonicalizationDecline variant</p>

```rust signature
TransformationVerificationNotDefinite,
```

The independent transformation verifier did not return `verified`.

<a id="entry-presentation_rust_api_partialdifferentialequationcanonicalizationdecline_variablecoefficientellipticcanonicalizationnotsupported"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcanonicalizationdecline_variablecoefficientellipticcanonicalizationnotsupported.d2b7a9232e88"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationCanonicalizationDecline variant</p>

```rust signature
VariableCoefficientEllipticCanonicalizationNotSupported,
```

Variable-coefficient elliptic coordinate search is deliberately deferred.

<a id="entry-presentation_rust_api_partialdifferentialequationcanonicalizationdecline_name"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcanonicalizationdecline_name.29e375e88f7b"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationCanonicalizationDecline method</p>

```rust signature
pub fn name(self) -> &'static str
```

Returns the stable lowercase binding spelling.

### PartialDifferentialEquationSeparationResult

A verified directed separation: the two one-variable ordinary differential
equations the PDE separated into, the separation constant introduced, the
`strategy` (additive or multiplicative) that produced them, the
`reconstruction` that rebuilds a solution of the original equation from
solutions of the factors, and the `verification` of that reconstruction. Each
factor is an equation [the ODE routes](ordinary-differential-equations.md) can
close.

<a id="entry-presentation_rust_api_partialdifferentialequationseparationresult"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationseparationresult.7c49dec9cbf7"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationSeparationResult;
```

A context-safe, independently verified PDE separation transformation.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationseparationresult.d01a2ffde823"></a>
<p class="symi-entry-owner">Type: <code>api::partial_differential_equations::PartialDifferentialEquationSeparationResult</code></p>

```rust signature
pub struct PartialDifferentialEquationSeparationResult
```

</details>

<a id="entry-presentation_rust_api_partialdifferentialequationseparationresult_first_equation"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationseparationresult_first_equation.a257b40a4b5e"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSeparationResult method</p>

```rust signature
pub fn first_equation(
    &self,
) -> PartialDifferentialEquationSeparatedEquation
```

Returns the first verified separated ODE.

<a id="entry-presentation_rust_api_partialdifferentialequationseparationresult_reconstruction"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationseparationresult_reconstruction.2f3e77bafab6"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSeparationResult method</p>

```rust signature
pub fn reconstruction(&self) -> Expression
```

Returns the reconstructed product or sum ansatz.

<a id="entry-presentation_rust_api_partialdifferentialequationseparationresult_second_equation"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationseparationresult_second_equation.f753bc0d3c33"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSeparationResult method</p>

```rust signature
pub fn second_equation(
    &self,
) -> PartialDifferentialEquationSeparatedEquation
```

Returns the second verified separated ODE.

<a id="entry-presentation_rust_api_partialdifferentialequationseparationresult_separation_constant"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationseparationresult_separation_constant.0efad90534ea"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSeparationResult method</p>

```rust signature
pub fn separation_constant(&self) -> Expression
```

Returns the fresh exact separation constant.

<a id="entry-presentation_rust_api_partialdifferentialequationseparationresult_strategy"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationseparationresult_strategy.b348b0bf4128"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSeparationResult method</p>

```rust signature
pub fn strategy(&self) -> PartialDifferentialEquationSeparationStrategy
```

Returns the directed ansatz selected by exact separation.

<a id="entry-presentation_rust_api_partialdifferentialequationseparationresult_verification"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationseparationresult_verification.2b503dc66447"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSeparationResult method</p>

```rust signature
pub fn verification(
    &self,
) -> PartialDifferentialEquationVerificationVerdict
```

Returns the independent recombination-verification verdict.

### PartialDifferentialEquationSeparatedEquation

One exact separated ordinary differential equation exposed by a PDE transformation.

<a id="entry-presentation_rust_api_partialdifferentialequationseparatedequation"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationseparatedequation.d0c9cb9fab78"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationSeparatedEquation;
```

One verified one-variable ODE produced by a PDE separation transformation.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationseparatedequation.be9236b0d4b6"></a>
<p class="symi-entry-owner">Type: <code>api::partial_differential_equations::PartialDifferentialEquationSeparatedEquation</code></p>

```rust signature
pub struct PartialDifferentialEquationSeparatedEquation
```

</details>

<a id="entry-presentation_rust_api_partialdifferentialequationseparatedequation_independent_variable_name"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationseparatedequation_independent_variable_name.e85889e14cc6"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSeparatedEquation method</p>

```rust signature
pub fn independent_variable_name(&self) -> String
```

Returns the name of this ODE's sole independent variable.

<a id="entry-presentation_rust_api_partialdifferentialequationseparatedequation_residual"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationseparatedequation_residual.d092ea3d760b"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSeparatedEquation method</p>

```rust signature
pub fn residual(&self) -> Expression
```

Returns the ODE residual interpreted as equal to zero.

### PartialDifferentialEquationSeparationStrategy

The directed ansatz used by a verified PDE separation transformation.

Cases: `Additive`, `Automatic`, `Multiplicative`.

<a id="entry-presentation_rust_api_partialdifferentialequationseparationstrategy_additive"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationseparationstrategy_additive.546ac80a05d8"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSeparationStrategy variant</p>

```rust signature
Additive,
```

Uses a sum of one-variable factors.

<a id="entry-presentation_rust_api_partialdifferentialequationseparationstrategy_automatic"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationseparationstrategy_automatic.4c071f9a5493"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSeparationStrategy variant</p>

```rust signature
Automatic,
```

Selects a verified strategy automatically.

<a id="entry-presentation_rust_api_partialdifferentialequationseparationstrategy_multiplicative"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationseparationstrategy_multiplicative.5f565c187c99"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSeparationStrategy variant</p>

```rust signature
Multiplicative,
```

Uses a product of one-variable factors.

<a id="entry-presentation_rust_api_partialdifferentialequationseparationstrategy"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationseparationstrategy.eead9d0f99f8"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationSeparationStrategy;
```

The directed ansatz used by a verified PDE separation transformation.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationseparationstrategy.8190247026af"></a>
<p class="symi-entry-owner">Type: <code>api::partial_differential_equations::PartialDifferentialEquationSeparationStrategy</code></p>

```rust signature
pub enum PartialDifferentialEquationSeparationStrategy
```

</details>

<a id="entry-presentation_rust_api_partialdifferentialequationseparationstrategy_name"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationseparationstrategy_name.92c340b1af9d"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSeparationStrategy method</p>

```rust signature
pub fn name(self) -> &'static str
```

Returns the stable lowercase binding spelling.

## Point symmetries

Every symmetry record carries its own verification and the obligations it does
*not* discharge. Discrete symmetries are never claimed, and a family of
invariant solutions always records that it is not the general solution.

### PartialDifferentialEquationPointSymmetryGenerator

One point-symmetry generator of a PDE, given by its infinitesimals.

<a id="entry-presentation_rust_api_partialdifferentialequationpointsymmetrygenerator"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationpointsymmetrygenerator.8b5a0ed57492"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationPointSymmetryGenerator;
```

One point-symmetry generator `V = sum_i xi^i d/dx_i + phi d/du` owned by one API session.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetrygenerator.06697c4329c1"></a>
<p class="symi-entry-owner">Type: <code>api::partial_differential_equations::PartialDifferentialEquationPointSymmetryGenerator</code></p>

```rust signature
pub struct PartialDifferentialEquationPointSymmetryGenerator
```

</details>

<a id="entry-presentation_rust_api_partialdifferentialequationpointsymmetrygenerator_coordinate_infinitesimals"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetrygenerator_coordinate_infinitesimals.4ebe62466a1b"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryGenerator method</p>

```rust signature
pub fn coordinate_infinitesimals(&self) -> Vec<Expression>
```

Returns the coordinate infinitesimals `xi^i` in the problem's independent-variable order.

<a id="entry-presentation_rust_api_partialdifferentialequationpointsymmetrygenerator_dependent_infinitesimal"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetrygenerator_dependent_infinitesimal.d66c7b59ea79"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryGenerator method</p>

```rust signature
pub fn dependent_infinitesimal(&self) -> Expression
```

Returns the dependent infinitesimal `phi`.

<a id="entry-presentation_rust_api_partialdifferentialequationpointsymmetrygenerator_session"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetrygenerator_session.9b7563fa6af7"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryGenerator method</p>

```rust signature
pub fn session(&self) -> Session
```

Returns the session that owns this generator.

### PartialDifferentialEquationPointSymmetryAlgebra

The derived point-symmetry algebra of a PDE, or its typed decline.

<a id="entry-presentation_rust_api_partialdifferentialequationpointsymmetryalgebra"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationpointsymmetryalgebra.37cf5d6cab7b"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationPointSymmetryAlgebra;
```

The derived point-symmetry algebra of a partial differential equation, or its typed decline.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra.47ab2650da3a"></a>
<p class="symi-entry-owner">Type: <code>api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAlgebra</code></p>

```rust signature
pub struct PartialDifferentialEquationPointSymmetryAlgebra
```

</details>

<a id="entry-presentation_rust_api_partialdifferentialequationpointsymmetryalgebra_admits_additive_solution_symmetry"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_admits_additive_solution_symmetry.101c3957df78"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAlgebra method</p>

```rust signature
pub fn admits_additive_solution_symmetry(&self) -> bool
```

Reports whether adding any solution of the linear homogeneous equation is also a symmetry.

<a id="entry-presentation_rust_api_partialdifferentialequationpointsymmetryalgebra_basis"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_basis.000a8be0ce7b"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAlgebra method</p>

```rust signature
pub fn basis(
    &self,
) -> Vec<PartialDifferentialEquationPointSymmetryGenerator>
```

Returns the independently verified basis generators, one per parameter.

<a id="entry-presentation_rust_api_partialdifferentialequationpointsymmetryalgebra_decline"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_decline.38c45623a3c6"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAlgebra method</p>

```rust signature
pub fn decline(
    &self,
) -> Option<PartialDifferentialEquationPointSymmetryDecline>
```

Returns the typed reason the algebra was not derived.

<a id="entry-presentation_rust_api_partialdifferentialequationpointsymmetryalgebra_determining_equations"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_determining_equations.026d397719c6"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAlgebra method</p>

```rust signature
pub fn determining_equations(&self) -> Vec<Expression>
```

Returns the determining equations exactly as derived, before any reduction.

<a id="entry-presentation_rust_api_partialdifferentialequationpointsymmetryalgebra_general_generator"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_general_generator.54f0738da4e1"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAlgebra method</p>

```rust signature
pub fn general_generator(
    &self,
) -> Option<PartialDifferentialEquationPointSymmetryGenerator>
```

Returns the general generator, a combination of the basis through the parameters.

<a id="entry-presentation_rust_api_partialdifferentialequationpointsymmetryalgebra_outstanding_obligations"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_outstanding_obligations.a468041f459e"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAlgebra method</p>

```rust signature
pub fn outstanding_obligations(
    &self,
) -> Vec<PartialDifferentialEquationSymmetryObligation>
```

Returns the claims the algebra explicitly does not make.

<a id="entry-presentation_rust_api_partialdifferentialequationpointsymmetryalgebra_parameters"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_parameters.5921e7b33c63"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAlgebra method</p>

```rust signature
pub fn parameters(&self) -> Vec<Expression>
```

Returns the constants of the general generator, one per basis generator.

### PartialDifferentialEquationPointSymmetryDecline

Why the point-symmetry algebra of a partial differential equation was not derived.

Cases: `AdditiveComponentNotRecognized`, `Cancelled`, `ConditionNotPolynomialInTheFreeJets`, `DeterminingSystemNotLinear`, `DeterminingSystemNotReduced`, `GeneratorNotVerified`, `InitialOrBoundaryDataNotSupported`, `JetCoordinatesNotRecognized`, `OrderNotSupported`, `PrincipalJetNotFound`, `SuperpositionNotVerified`, `WorkLimitExceeded`.

<a id="entry-presentation_rust_api_partialdifferentialequationpointsymmetrydecline_additivecomponentnotrecognized"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetrydecline_additivecomponentnotrecognized.2876d097e85e"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryDecline variant</p>

```rust signature
AdditiveComponentNotRecognized,
```

The residue of the reduction is not an additive solution symmetry of a linear homogeneous equation.

<a id="entry-presentation_rust_api_partialdifferentialequationpointsymmetrydecline_cancelled"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetrydecline_cancelled.0ae268bfe2b6"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryDecline variant</p>

```rust signature
Cancelled,
```

The enclosing operation was cancelled.

<a id="entry-presentation_rust_api_partialdifferentialequationpointsymmetrydecline_conditionnotpolynomialinthefreejets"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetrydecline_conditionnotpolynomialinthefreejets.d7bfa64d6cb9"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryDecline variant</p>

```rust signature
ConditionNotPolynomialInTheFreeJets,
```

The symmetry condition restricted to the equation is not polynomial in the free jets.

<a id="entry-presentation_rust_api_partialdifferentialequationpointsymmetrydecline_determiningsystemnotlinear"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetrydecline_determiningsystemnotlinear.b4694942835e"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryDecline variant</p>

```rust signature
DeterminingSystemNotLinear,
```

A determining equation is not linear in the unknown infinitesimals.

<a id="entry-presentation_rust_api_partialdifferentialequationpointsymmetrydecline_determiningsystemnotreduced"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetrydecline_determiningsystemnotreduced.832dfef84472"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryDecline variant</p>

```rust signature
DeterminingSystemNotReduced,
```

No exact reduction step applies to the remaining determining equations.

<a id="entry-presentation_rust_api_partialdifferentialequationpointsymmetrydecline_generatornotverified"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetrydecline_generatornotverified.99b3665fe3b6"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryDecline variant</p>

```rust signature
GeneratorNotVerified,
```

A derived basis generator failed the independent infinitesimal-criterion check.

<a id="entry-presentation_rust_api_partialdifferentialequationpointsymmetrydecline_initialorboundarydatanotsupported"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetrydecline_initialorboundarydatanotsupported.6bc410ec8508"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryDecline variant</p>

```rust signature
InitialOrBoundaryDataNotSupported,
```

The problem carries initial or boundary data, which point symmetries do not in general preserve.

<a id="entry-presentation_rust_api_partialdifferentialequationpointsymmetrydecline_jetcoordinatesnotrecognized"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetrydecline_jetcoordinatesnotrecognized.23f82c8c86f1"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryDecline variant</p>

```rust signature
JetCoordinatesNotRecognized,
```

The residual could not be read in jet coordinates.

<a id="entry-presentation_rust_api_partialdifferentialequationpointsymmetrydecline_ordernotsupported"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetrydecline_ordernotsupported.66cdfd177225"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryDecline variant</p>

```rust signature
OrderNotSupported,
```

The equation's order is outside the supported first- and second-order class.

<a id="entry-presentation_rust_api_partialdifferentialequationpointsymmetrydecline"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationpointsymmetrydecline.aaee732a0ea5"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationPointSymmetryDecline;
```

Why the point-symmetry algebra of a partial differential equation was not derived.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetrydecline.c495e6e8c3ed"></a>
<p class="symi-entry-owner">Type: <code>api::partial_differential_equations::PartialDifferentialEquationPointSymmetryDecline</code></p>

```rust signature
pub enum PartialDifferentialEquationPointSymmetryDecline
```

</details>

<a id="entry-presentation_rust_api_partialdifferentialequationpointsymmetrydecline_principaljetnotfound"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetrydecline_principaljetnotfound.01d0b872ce94"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryDecline variant</p>

```rust signature
PrincipalJetNotFound,
```

No jet enters the residual affinely with a jet-free coefficient that is not identically zero.

<a id="entry-presentation_rust_api_partialdifferentialequationpointsymmetrydecline_superpositionnotverified"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetrydecline_superpositionnotverified.e8e173f71b65"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryDecline variant</p>

```rust signature
SuperpositionNotVerified,
```

The additive symmetry's superposition identity was not proved.

<a id="entry-presentation_rust_api_partialdifferentialequationpointsymmetrydecline_worklimitexceeded"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetrydecline_worklimitexceeded.a376cda94816"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryDecline variant</p>

```rust signature
WorkLimitExceeded,
```

The reduction exceeded its work bound.

<a id="entry-presentation_rust_api_partialdifferentialequationpointsymmetrydecline_name"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetrydecline_name.9a9ab4532f8d"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryDecline method</p>

```rust signature
pub fn name(self) -> &'static str
```

Returns the stable lowercase binding spelling.

### PartialDifferentialEquationPointSymmetryAction

The connected local point-symmetry action of a PDE, or its typed decline.

<a id="entry-presentation_rust_api_partialdifferentialequationpointsymmetryaction"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationpointsymmetryaction.fbb3ba92e188"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationPointSymmetryAction;
```

The connected local point-symmetry action `u = a + A f(X)` of an equation, or its typed decline.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetryaction.c6bed10d6ea1"></a>
<p class="symi-entry-owner">Type: <code>api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAction</code></p>

```rust signature
pub struct PartialDifferentialEquationPointSymmetryAction
```

</details>

<a id="entry-presentation_rust_api_partialdifferentialequationpointsymmetryaction_admits_additive_solution_symmetry"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_admits_additive_solution_symmetry.9eb0e58e1a2d"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAction method</p>

```rust signature
pub fn admits_additive_solution_symmetry(&self) -> bool
```

Reports whether the action adds an arbitrary solution by linear superposition.

<a id="entry-presentation_rust_api_partialdifferentialequationpointsymmetryaction_amplitude"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_amplitude.28659aa27e68"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAction method</p>

```rust signature
pub fn amplitude(&self) -> Option<Expression>
```

Returns the amplitude `A` multiplying the transformed seed.

<a id="entry-presentation_rust_api_partialdifferentialequationpointsymmetryaction_applied_to_seed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_applied_to_seed.df24827ff4d4"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAction method</p>

```rust signature
pub fn applied_to_seed(
    &self,
    seed: &UndefinedFunction,
) -> Result<Expression, ApiError>
```

Returns `A f(X)` for a seed solution `f`.

<a id="entry-presentation_rust_api_partialdifferentialequationpointsymmetryaction_applied_to_seed_with_additive_solution"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_applied_to_seed_with_additive_solution.5ffd6a37b8be"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAction method</p>

```rust signature
pub fn applied_to_seed_with_additive_solution(
    &self,
    seed: &UndefinedFunction,
    additive_solution: &UndefinedFunction,
) -> Result<Expression, ApiError>
```

Returns `a + A f(X)` for a seed solution `f` and an added solution `a`.

<a id="entry-presentation_rust_api_partialdifferentialequationpointsymmetryaction_decline"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_decline.22ed89cd0701"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAction method</p>

```rust signature
pub fn decline(
    &self,
) -> Option<PartialDifferentialEquationSymmetryActionDecline>
```

Returns the typed reason the action was not constructed.

<a id="entry-presentation_rust_api_partialdifferentialequationpointsymmetryaction_intertwining"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_intertwining.b63defeb84f8"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAction method</p>

```rust signature
pub fn intertwining(
    &self,
) -> Option<PartialDifferentialEquationVerificationVerdict>
```

Returns the exact decision on the intertwining identity.

<a id="entry-presentation_rust_api_partialdifferentialequationpointsymmetryaction_invertibility"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_invertibility.0161df41aed3"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAction method</p>

```rust signature
pub fn invertibility(
    &self,
) -> Option<PartialDifferentialEquationVerificationVerdict>
```

Returns the exact decision that the coordinate map is invertible on its chart.

<a id="entry-presentation_rust_api_partialdifferentialequationpointsymmetryaction_multiplier"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_multiplier.061669b92b9b"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAction method</p>

```rust signature
pub fn multiplier(&self) -> Option<Expression>
```

Returns the multiplier `M` in the intertwining identity `L(A f(X)) = M (L f)(X)`.

<a id="entry-presentation_rust_api_partialdifferentialequationpointsymmetryaction_outstanding_obligations"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_outstanding_obligations.60b7ead9ab3d"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAction method</p>

```rust signature
pub fn outstanding_obligations(
    &self,
) -> Vec<PartialDifferentialEquationSymmetryObligation>
```

Returns the claims the action explicitly does not make.

<a id="entry-presentation_rust_api_partialdifferentialequationpointsymmetryaction_parameters"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_parameters.456ce4e5daa7"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAction method</p>

```rust signature
pub fn parameters(&self) -> Vec<Expression>
```

Returns the group parameters the closed forms depend on.

<a id="entry-presentation_rust_api_partialdifferentialequationpointsymmetryaction_point_symmetry_decline"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_point_symmetry_decline.a3457b41aa47"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAction method</p>

```rust signature
pub fn point_symmetry_decline(
    &self,
) -> Option<PartialDifferentialEquationPointSymmetryDecline>
```

Returns the reason the underlying point-symmetry algebra was not derived, when it was not.

<a id="entry-presentation_rust_api_partialdifferentialequationpointsymmetryaction_session"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_session.a6aa978f8ba0"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAction method</p>

```rust signature
pub fn session(&self) -> Session
```

Returns the session that owns this action.

<a id="entry-presentation_rust_api_partialdifferentialequationpointsymmetryaction_transformed_coordinates"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_transformed_coordinates.c1cbac3cfd8d"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAction method</p>

```rust signature
pub fn transformed_coordinates(&self) -> Vec<Expression>
```

Returns the coordinates `X` at which a seed solution is evaluated.

### PartialDifferentialEquationSymmetryActionDecline

Why the connected point-symmetry action of a partial differential equation was not constructed.

Cases: `ActionNotVerified`, `GeneratorsDoNotSpanTheAlgebra`, `IncompatibleTransformations`, `NotTheIdentityAtTheOrigin`, `OneParameterGroupNotIntegrated`, `PointSymmetryAlgebraNotDerived`.

<a id="entry-presentation_rust_api_partialdifferentialequationsymmetryactiondecline_actionnotverified"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsymmetryactiondecline_actionnotverified.c4449d19da5c"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSymmetryActionDecline variant</p>

```rust signature
ActionNotVerified,
```

The composed action did not verify as an invertible symmetry.

<a id="entry-presentation_rust_api_partialdifferentialequationsymmetryactiondecline_generatorsdonotspanthealgebra"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsymmetryactiondecline_generatorsdonotspanthealgebra.14d9b87968ec"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSymmetryActionDecline variant</p>

```rust signature
GeneratorsDoNotSpanTheAlgebra,
```

The composed action's generators at the identity do not span the derived algebra.

<a id="entry-presentation_rust_api_partialdifferentialequationsymmetryactiondecline_incompatibletransformations"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsymmetryactiondecline_incompatibletransformations.b75f8e5c1403"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSymmetryActionDecline variant</p>

```rust signature
IncompatibleTransformations,
```

The one-parameter groups act on different independent variables.

<a id="entry-presentation_rust_api_partialdifferentialequationsymmetryactiondecline_nottheidentityattheorigin"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsymmetryactiondecline_nottheidentityattheorigin.f0f09c72134c"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSymmetryActionDecline variant</p>

```rust signature
NotTheIdentityAtTheOrigin,
```

The family is not the identity transformation when every parameter is zero.

<a id="entry-presentation_rust_api_partialdifferentialequationsymmetryactiondecline_oneparametergroupnotintegrated"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsymmetryactiondecline_oneparametergroupnotintegrated.49a031724394"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSymmetryActionDecline variant</p>

```rust signature
OneParameterGroupNotIntegrated,
```

A basis generator did not integrate to a verified one-parameter group.

<a id="entry-presentation_rust_api_partialdifferentialequationsymmetryactiondecline"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationsymmetryactiondecline.3bab3c416d09"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationSymmetryActionDecline;
```

Why the connected point-symmetry action of a partial differential equation was not constructed.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsymmetryactiondecline.b2993e3d6474"></a>
<p class="symi-entry-owner">Type: <code>api::partial_differential_equations::PartialDifferentialEquationSymmetryActionDecline</code></p>

```rust signature
pub enum PartialDifferentialEquationSymmetryActionDecline
```

</details>

<a id="entry-presentation_rust_api_partialdifferentialequationsymmetryactiondecline_pointsymmetryalgebranotderived"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsymmetryactiondecline_pointsymmetryalgebranotderived.7deee1979b03"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSymmetryActionDecline variant</p>

```rust signature
PointSymmetryAlgebraNotDerived,
```

The point-symmetry algebra the action integrates was not derived.

<a id="entry-presentation_rust_api_partialdifferentialequationsymmetryactiondecline_name"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsymmetryactiondecline_name.723da4ef12e3"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSymmetryActionDecline method</p>

```rust signature
pub fn name(self) -> &'static str
```

Returns the stable lowercase binding spelling.

### PartialDifferentialEquationSymmetryObligation

A mathematical claim a symmetry result explicitly does not make.

Cases: `DiscretePointSymmetriesNotDerived`, `SimilarityFamilyIsNotTheGeneralSolution`, `TransformedCoordinatesLieInTheSeedChart`.

<a id="entry-presentation_rust_api_partialdifferentialequationsymmetryobligation_discretepointsymmetriesnotderived"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsymmetryobligation_discretepointsymmetriesnotderived.c05da2ceb85c"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSymmetryObligation variant</p>

```rust signature
DiscretePointSymmetriesNotDerived,
```

Discrete point symmetries are not produced by integrating generators and are not claimed.

<a id="entry-presentation_rust_api_partialdifferentialequationsymmetryobligation"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationsymmetryobligation.a6dd2f879c8e"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationSymmetryObligation;
```

A mathematical claim a symmetry result explicitly does not make.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsymmetryobligation.23a34e411f30"></a>
<p class="symi-entry-owner">Type: <code>api::partial_differential_equations::PartialDifferentialEquationSymmetryObligation</code></p>

```rust signature
pub enum PartialDifferentialEquationSymmetryObligation
```

</details>

<a id="entry-presentation_rust_api_partialdifferentialequationsymmetryobligation_similarityfamilyisnotthegeneralsolution"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsymmetryobligation_similarityfamilyisnotthegeneralsolution.26bc339f7ee7"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSymmetryObligation variant</p>

```rust signature
SimilarityFamilyIsNotTheGeneralSolution,
```

A similarity family is a family of invariant solutions, not the general solution.

<a id="entry-presentation_rust_api_partialdifferentialequationsymmetryobligation_transformedcoordinateslieintheseedchart"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsymmetryobligation_transformedcoordinateslieintheseedchart.fbc11be0361e"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSymmetryObligation variant</p>

```rust signature
TransformedCoordinatesLieInTheSeedChart,
```

The transformed coordinates must lie in the chart on which the seed solves the equation.

<a id="entry-presentation_rust_api_partialdifferentialequationsymmetryobligation_name"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsymmetryobligation_name.f042604c0e91"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSymmetryObligation method</p>

```rust signature
pub fn name(self) -> &'static str
```

Returns the stable lowercase binding spelling.

### PartialDifferentialEquationSimilaritySolution

The invariant solutions of a PDE under one point symmetry, or a typed decline.

<a id="entry-presentation_rust_api_partialdifferentialequationsimilaritysolution"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationsimilaritysolution.691f4a9d0afd"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationSimilaritySolution;
```

The invariant solutions of a two-variable equation under one point symmetry, or a typed decline.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsimilaritysolution.4463528c49f4"></a>
<p class="symi-entry-owner">Type: <code>api::partial_differential_equations::PartialDifferentialEquationSimilaritySolution</code></p>

```rust signature
pub struct PartialDifferentialEquationSimilaritySolution
```

</details>

<a id="entry-presentation_rust_api_partialdifferentialequationsimilaritysolution_decline"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsimilaritysolution_decline.148faa253285"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSimilaritySolution method</p>

```rust signature
pub fn decline(
    &self,
) -> Option<PartialDifferentialEquationSimilarityReductionDecline>
```

Returns the typed reason no similarity family was produced.

<a id="entry-presentation_rust_api_partialdifferentialequationsimilaritysolution_invariant"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsimilaritysolution_invariant.ce6ba40a27c1"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSimilaritySolution method</p>

```rust signature
pub fn invariant(&self) -> Option<Expression>
```

Returns the invariant `z` of the generator's base field.

<a id="entry-presentation_rust_api_partialdifferentialequationsimilaritysolution_lifted_constants"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsimilaritysolution_lifted_constants.fd74f4f11a63"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSimilaritySolution method</p>

```rust signature
pub fn lifted_constants(&self) -> Vec<Expression>
```

Returns the constants the lifted family is parameterized by.

<a id="entry-presentation_rust_api_partialdifferentialequationsimilaritysolution_lifted_family"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsimilaritysolution_lifted_family.6cf0b41518ce"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSimilaritySolution method</p>

```rust signature
pub fn lifted_family(
    &self,
) -> Option<PartialDifferentialEquationSolutionFamily>
```

Returns the invariant solutions of the original equation.

<a id="entry-presentation_rust_api_partialdifferentialequationsimilaritysolution_lifted_family_verification"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsimilaritysolution_lifted_family_verification.02c41330ac7b"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSimilaritySolution method</p>

```rust signature
pub fn lifted_family_verification(
    &self,
) -> Option<PartialDifferentialEquationVerificationVerdict>
```

Returns the exact decision that the lifted family solves the original equation.

<a id="entry-presentation_rust_api_partialdifferentialequationsimilaritysolution_multiplier"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsimilaritysolution_multiplier.17e491d34475"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSimilaritySolution method</p>

```rust signature
pub fn multiplier(&self) -> Option<Expression>
```

Returns `M` in the reduction identity `Delta(W f(z)) = M R[f](z)`.

<a id="entry-presentation_rust_api_partialdifferentialequationsimilaritysolution_outstanding_obligations"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsimilaritysolution_outstanding_obligations.a86725fee4fd"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSimilaritySolution method</p>

```rust signature
pub fn outstanding_obligations(
    &self,
) -> Vec<PartialDifferentialEquationSymmetryObligation>
```

Returns the claims the family explicitly does not make.

<a id="entry-presentation_rust_api_partialdifferentialequationsimilaritysolution_reduced_equation"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsimilaritysolution_reduced_equation.fffb06c6cf3b"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSimilaritySolution method</p>

```rust signature
pub fn reduced_equation(&self) -> Option<Expression>
```

Returns the reduced ordinary differential equation for the profile, read as zero.

<a id="entry-presentation_rust_api_partialdifferentialequationsimilaritysolution_similarity_variable"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsimilaritysolution_similarity_variable.d7325f16a24b"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSimilaritySolution method</p>

```rust signature
pub fn similarity_variable(&self) -> Option<Expression>
```

Returns the coordinate of the reduced equation, standing for the invariant.

<a id="entry-presentation_rust_api_partialdifferentialequationsimilaritysolution_weight"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsimilaritysolution_weight.b5785a4483b9"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSimilaritySolution method</p>

```rust signature
pub fn weight(&self) -> Option<Expression>
```

Returns the weight `W` of invariant solutions `u = W f(z)`.

### PartialDifferentialEquationSimilarityReductionDecline

Why a partial differential equation was not reduced and solved by a point symmetry.

Cases: `GeneratorNotASymmetry`, `GeneratorNotFiberLinear`, `InvariantNotFound`, `LiftedFamilyNotVerified`, `ProfileNotIsolated`, `ReducedEquationNotSolved`, `ReductionDependsOnTheNonInvariantCoordinate`, `TwoIndependentVariablesRequired`, `WeightNotFound`.

<a id="entry-presentation_rust_api_partialdifferentialequationsimilarityreductiondecline_generatornotasymmetry"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsimilarityreductiondecline_generatornotasymmetry.cd6ea868c573"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSimilarityReductionDecline variant</p>

```rust signature
GeneratorNotASymmetry,
```

The generator did not verify as a point symmetry of the equation.

<a id="entry-presentation_rust_api_partialdifferentialequationsimilarityreductiondecline_generatornotfiberlinear"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsimilarityreductiondecline_generatornotfiberlinear.fdebfb31092d"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSimilarityReductionDecline variant</p>

```rust signature
GeneratorNotFiberLinear,
```

The generator is not fiber-linear, so invariant solutions are not of product form.

<a id="entry-presentation_rust_api_partialdifferentialequationsimilarityreductiondecline_invariantnotfound"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsimilarityreductiondecline_invariantnotfound.56ce6a94758f"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSimilarityReductionDecline variant</p>

```rust signature
InvariantNotFound,
```

No verified invariant of the base field could be solved for one of the coordinates.

<a id="entry-presentation_rust_api_partialdifferentialequationsimilarityreductiondecline_liftedfamilynotverified"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsimilarityreductiondecline_liftedfamilynotverified.f0e918b31607"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSimilarityReductionDecline variant</p>

```rust signature
LiftedFamilyNotVerified,
```

The lifted family did not verify against the original equation.

<a id="entry-presentation_rust_api_partialdifferentialequationsimilarityreductiondecline"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationsimilarityreductiondecline.205a2a8816ca"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationSimilarityReductionDecline;
```

Why a partial differential equation was not reduced and solved by a point symmetry.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsimilarityreductiondecline.1e468220b819"></a>
<p class="symi-entry-owner">Type: <code>api::partial_differential_equations::PartialDifferentialEquationSimilarityReductionDecline</code></p>

```rust signature
pub enum PartialDifferentialEquationSimilarityReductionDecline
```

</details>

<a id="entry-presentation_rust_api_partialdifferentialequationsimilarityreductiondecline_profilenotisolated"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsimilarityreductiondecline_profilenotisolated.165433edf565"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSimilarityReductionDecline variant</p>

```rust signature
ProfileNotIsolated,
```

The substituted residual still mentions the profile away from the invariant.

<a id="entry-presentation_rust_api_partialdifferentialequationsimilarityreductiondecline_reducedequationnotsolved"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsimilarityreductiondecline_reducedequationnotsolved.4056ef82934d"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSimilarityReductionDecline variant</p>

```rust signature
ReducedEquationNotSolved,
```

The reduced ordinary differential equation was not solved as a complete family.

<a id="entry-presentation_rust_api_partialdifferentialequationsimilarityreductiondecline_reductiondependsonthenoninvariantcoordinate"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsimilarityreductiondecline_reductiondependsonthenoninvariantcoordinate.84e7083d41bd"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSimilarityReductionDecline variant</p>

```rust signature
ReductionDependsOnTheNonInvariantCoordinate,
```

The reduced coefficients were not proved independent of the eliminated coordinate.

<a id="entry-presentation_rust_api_partialdifferentialequationsimilarityreductiondecline_twoindependentvariablesrequired"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsimilarityreductiondecline_twoindependentvariablesrequired.366181444f62"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSimilarityReductionDecline variant</p>

```rust signature
TwoIndependentVariablesRequired,
```

The equation does not have exactly two independent variables.

<a id="entry-presentation_rust_api_partialdifferentialequationsimilarityreductiondecline_weightnotfound"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsimilarityreductiondecline_weightnotfound.f5c6f241d052"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSimilarityReductionDecline variant</p>

```rust signature
WeightNotFound,
```

The weight quadrature along the characteristics was not evaluated and verified.

<a id="entry-presentation_rust_api_partialdifferentialequationsimilarityreductiondecline_name"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsimilarityreductiondecline_name.e484d571f373"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSimilarityReductionDecline method</p>

```rust signature
pub fn name(self) -> &'static str
```

Returns the stable lowercase binding spelling.

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

<a id="entry-presentation_rust_api_partialdifferentialequationsolveresult"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationsolveresult.1dd016acd5e1"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationSolveResult;
```

A context-safe PDE solve result.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolveresult.e2f6e6a97f0a"></a>
<p class="symi-entry-owner">Type: <code>api::partial_differential_equations::PartialDifferentialEquationSolveResult</code></p>

```rust signature
pub struct PartialDifferentialEquationSolveResult
```

</details>

<a id="entry-presentation_rust_api_partialdifferentialequationsolveresult_classification"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolveresult_classification.bc39d72ce99c"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolveResult method</p>

```rust signature
pub fn classification(
    &self,
) -> Option<PartialDifferentialEquationClassification>
```

Returns classification when exact structural analysis completed.

<a id="entry-presentation_rust_api_partialdifferentialequationsolveresult_decline"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolveresult_decline.2727b3d10ca2"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolveResult method</p>

```rust signature
pub fn decline(&self) -> Option<PartialDifferentialEquationSolveDecline>
```

Returns the honest decline reason, if any.

<a id="entry-presentation_rust_api_partialdifferentialequationsolveresult_method"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolveresult_method.610447713a38"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolveResult method</p>

```rust signature
pub fn method(&self) -> Option<PartialDifferentialEquationMethod>
```

Returns the selected method when a method was run.

<a id="entry-presentation_rust_api_partialdifferentialequationsolveresult_portfolio_declines"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolveresult_portfolio_declines.da6c19fc27eb"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolveResult method</p>

```rust signature
pub fn portfolio_declines(
    &self,
) -> Vec<PartialDifferentialEquationPortfolioDecline>
```

Returns every method-specific decline retained by automatic portfolio execution.

<a id="entry-presentation_rust_api_partialdifferentialequationsolveresult_provenance"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolveresult_provenance.b2e3c6340ff3"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolveResult method</p>

```rust signature
pub fn provenance(
    &self,
) -> Option<PartialDifferentialEquationSolutionProvenance>
```

Returns mathematical provenance only for a future verified solution.

<a id="entry-presentation_rust_api_partialdifferentialequationsolveresult_solution"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolveresult_solution.80a0766fb548"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolveResult method</p>

```rust signature
pub fn solution(
    &self,
) -> Option<PartialDifferentialEquationSolutionFamily>
```

Returns the solution family only after central exact verification succeeds.

<a id="entry-presentation_rust_api_partialdifferentialequationsolveresult_verdict"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolveresult_verdict.edb7687242c6"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolveResult method</p>

```rust signature
pub fn verdict(&self) -> PartialDifferentialEquationSolveVerdict
```

Returns whether the dispatcher solved or declined.

<a id="entry-presentation_rust_api_partialdifferentialequationsolveresult_verification"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolveresult_verification.55194f58b824"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolveResult method</p>

```rust signature
pub fn verification(
    &self,
) -> Option<PartialDifferentialEquationVerificationReport>
```

Returns central verification evidence for a solved result.

### PartialDifferentialEquationSolveVerdict

Whether the PDE dispatcher solved or declined.

Cases: `Declined`, `Solved`.

<a id="entry-presentation_rust_api_partialdifferentialequationsolveverdict_declined"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolveverdict_declined.270ee8113617"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolveVerdict variant</p>

```rust signature
Declined,
```

The requested route honestly declined.

<a id="entry-presentation_rust_api_partialdifferentialequationsolveverdict"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationsolveverdict.5928ab98516a"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationSolveVerdict;
```

Whether the PDE dispatcher solved or declined.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolveverdict.e058d56d56bc"></a>
<p class="symi-entry-owner">Type: <code>api::partial_differential_equations::PartialDifferentialEquationSolveVerdict</code></p>

```rust signature
pub enum PartialDifferentialEquationSolveVerdict
```

</details>

<a id="entry-presentation_rust_api_partialdifferentialequationsolveverdict_solved"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolveverdict_solved.9767ff98d0d0"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolveVerdict variant</p>

```rust signature
Solved,
```

A verified solution was produced.

<a id="entry-presentation_rust_api_partialdifferentialequationsolveverdict_name"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolveverdict_name.5c5c2b87bcda"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolveVerdict method</p>

```rust signature
pub fn name(self) -> &'static str
```

Returns the stable lowercase binding spelling.

### PartialDifferentialEquationSolveDecline

The stable reason the automatic-dispatch PDE solver did not return a solution.

Cases: `CanonicalCoordinatesDeclined`, `CanonicalReductionSucceededButNoDownstreamSolver`, `CharacteristicDataNotLocallyDetermining`, `CharacteristicsDeclined`, `ClassificationDeclined`, `CompleteFamilyNotEstablished`, `CompletenessHoldsOnlyOnANarrowerSolutionClass`, `DeclaredGeometryNotSupported`, `DeclaredRegularityNotSupported`, `InconsistentCharacteristicData`, `InitialDataConvolutionDeclined`, `MethodNotImplemented`, `NoImplementedMethodClosed`, `RepeatedIntegrationDeclined`, `TransversalityUnknown`.

<a id="entry-presentation_rust_api_partialdifferentialequationsolvedecline_canonicalcoordinatesdeclined"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolvedecline_canonicalcoordinatesdeclined.d03c15ba3ce4"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolveDecline variant</p>

```rust signature
CanonicalCoordinatesDeclined,
```

The canonical-coordinate preprocessing route honestly declined this equation.

<a id="entry-presentation_rust_api_partialdifferentialequationsolvedecline_canonicalreductionsucceededbutnodownstreamsolver"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolvedecline_canonicalreductionsucceededbutnodownstreamsolver.3c0b3c126f3b"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolveDecline variant</p>

```rust signature
CanonicalReductionSucceededButNoDownstreamSolver,
```

Canonical coordinates were verified but no second-order solver exists yet.

<a id="entry-presentation_rust_api_partialdifferentialequationsolvedecline_characteristicdatanotlocallydetermining"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolvedecline_characteristicdatanotlocallydetermining.200b4c5ff152"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolveDecline variant</p>

```rust signature
CharacteristicDataNotLocallyDetermining,
```

Compatible characteristic data do not determine a local solution.

<a id="entry-presentation_rust_api_partialdifferentialequationsolvedecline_characteristicsdeclined"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolvedecline_characteristicsdeclined.204be7ef7a23"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolveDecline variant</p>

```rust signature
CharacteristicsDeclined,
```

The method of characteristics honestly declined this equation.

<a id="entry-presentation_rust_api_partialdifferentialequationsolvedecline_classificationdeclined"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolvedecline_classificationdeclined.1972c234b163"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolveDecline variant</p>

```rust signature
ClassificationDeclined,
```

Exact structural classification declined.

<a id="entry-presentation_rust_api_partialdifferentialequationsolvedecline_completefamilynotestablished"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolvedecline_completefamilynotestablished.36e84013e522"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolveDecline variant</p>

```rust signature
CompleteFamilyNotEstablished,
```

The complete family was requested and the family found carries no proved completeness theorem; a verified residual proves membership in the solution set, never coverage of it.

<a id="entry-presentation_rust_api_partialdifferentialequationsolvedecline_completenessholdsonlyonanarrowersolutionclass"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolvedecline_completenessholdsonlyonanarrowersolutionclass.b69b2a956261"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolveDecline variant</p>

```rust signature
CompletenessHoldsOnlyOnANarrowerSolutionClass,
```

A complete family was constructed, but its completeness theorem holds over a narrower class of solutions than the request asked for.

<a id="entry-presentation_rust_api_partialdifferentialequationsolvedecline_declaredgeometrynotsupported"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolvedecline_declaredgeometrynotsupported.019a480d8280"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolveDecline variant</p>

```rust signature
DeclaredGeometryNotSupported,
```

No implemented method constructs a family on the declared geometry.

<a id="entry-presentation_rust_api_partialdifferentialequationsolvedecline_declaredregularitynotsupported"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolvedecline_declaredregularitynotsupported.0525972f589a"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolveDecline variant</p>

```rust signature
DeclaredRegularityNotSupported,
```

No implemented method constructs a family satisfying the declared regularity.

<a id="entry-presentation_rust_api_partialdifferentialequationsolvedecline_inconsistentcharacteristicdata"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolvedecline_inconsistentcharacteristicdata.aa50647d2ee1"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolveDecline variant</p>

```rust signature
InconsistentCharacteristicData,
```

Characteristic initial data contradict the characteristic value equation.

<a id="entry-presentation_rust_api_partialdifferentialequationsolvedecline_initialdataconvolutiondeclined"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolvedecline_initialdataconvolutiondeclined.2c32f1cf679b"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolveDecline variant</p>

```rust signature
InitialDataConvolutionDeclined,
```

The initial-data solution operator honestly declined this equation.

<a id="entry-presentation_rust_api_partialdifferentialequationsolvedecline_methodnotimplemented"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolvedecline_methodnotimplemented.20f693085bd8"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolveDecline variant</p>

```rust signature
MethodNotImplemented,
```

The selected method is not yet implemented.

<a id="entry-presentation_rust_api_partialdifferentialequationsolvedecline_noimplementedmethodclosed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolvedecline_noimplementedmethodclosed.e85de1dc8479"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolveDecline variant</p>

```rust signature
NoImplementedMethodClosed,
```

No method is implemented for automatic dispatch.

<a id="entry-presentation_rust_api_partialdifferentialequationsolvedecline"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationsolvedecline.6f0d5472c685"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationSolveDecline;
```

The stable reason the automatic-dispatch PDE solver did not return a solution.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolvedecline.90dbbeb355f6"></a>
<p class="symi-entry-owner">Type: <code>api::partial_differential_equations::PartialDifferentialEquationSolveDecline</code></p>

```rust signature
pub enum PartialDifferentialEquationSolveDecline
```

</details>

<a id="entry-presentation_rust_api_partialdifferentialequationsolvedecline_repeatedintegrationdeclined"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolvedecline_repeatedintegrationdeclined.6a22d61c0ad4"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolveDecline variant</p>

```rust signature
RepeatedIntegrationDeclined,
```

Repeated coordinate integration honestly declined this equation.

<a id="entry-presentation_rust_api_partialdifferentialequationsolvedecline_transversalityunknown"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolvedecline_transversalityunknown.6cd097c1c5bf"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolveDecline variant</p>

```rust signature
TransversalityUnknown,
```

The characteristic transversality determinant could not be decided.

<a id="entry-presentation_rust_api_partialdifferentialequationsolvedecline_name"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolvedecline_name.9af083e95c6d"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolveDecline method</p>

```rust signature
pub fn name(self) -> &'static str
```

Returns the stable lowercase binding spelling.

### PartialDifferentialEquationSolveOptions

Binding-neutral options for deterministic partial differential equation solving.

<a id="entry-presentation_rust_api_partialdifferentialequationsolveoptions"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationsolveoptions.6ba011602d40"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationSolveOptions;
```

Binding-neutral options for deterministic partial differential equation solving.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolveoptions.010bdc291bad"></a>
<p class="symi-entry-owner">Type: <code>api::partial_differential_equations::PartialDifferentialEquationSolveOptions</code></p>

```rust signature
pub struct PartialDifferentialEquationSolveOptions
```

</details>

<a id="entry-presentation_rust_api_partialdifferentialequationsolveoptions_method"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolveoptions_method.adb02ce51909"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolveOptions method</p>

```rust signature
pub fn method(&self) -> PartialDifferentialEquationMethod
```

Returns the selected solver method.

<a id="entry-presentation_rust_api_partialdifferentialequationsolveoptions_new"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolveoptions_new.515b2e254e91"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolveOptions method</p>

```rust signature
pub fn new(
    method: PartialDifferentialEquationMethod,
    transform_axes: Vec<PartialDifferentialEquationTransformAxisOption>,
) -> Self
```

Creates deterministic options with the selected method and explicit transform geometry.

<a id="entry-presentation_rust_api_partialdifferentialequationsolveoptions_transform_axes"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolveoptions_transform_axes.04c4a1c9e2d4"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolveOptions method</p>

```rust signature
pub fn transform_axes(
    &self,
) -> &[PartialDifferentialEquationTransformAxisOption]
```

Returns the ordered transform-axis declarations.

### PartialDifferentialEquationPortfolioDecline

One method-specific decline retained by automatic PDE portfolio execution.

<a id="entry-presentation_rust_api_partialdifferentialequationportfoliodecline"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationportfoliodecline.90b25abf0e88"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationPortfolioDecline;
```

One method-specific decline retained by automatic PDE portfolio execution.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationportfoliodecline.39e4394337b8"></a>
<p class="symi-entry-owner">Type: <code>api::partial_differential_equations::PartialDifferentialEquationPortfolioDecline</code></p>

```rust signature
pub struct PartialDifferentialEquationPortfolioDecline
```

</details>

<a id="entry-presentation_rust_api_partialdifferentialequationportfoliodecline_decline"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationportfoliodecline_decline.bf34e996266a"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPortfolioDecline method</p>

```rust signature
pub fn decline(&self) -> PartialDifferentialEquationSolveDecline
```

Returns the method-specific typed decline.

<a id="entry-presentation_rust_api_partialdifferentialequationportfoliodecline_method"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationportfoliodecline_method.4aafa70da54c"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPortfolioDecline method</p>

```rust signature
pub fn method(&self) -> PartialDifferentialEquationMethod
```

Returns the attempted method.

### PartialDifferentialEquationSolutionFamily

A candidate family, explicit (the unknown as an expression in the coordinates)
or implicit (a residual read as equal to zero), together with the arbitrary
functions it treats as free and the obligations it carries.

`establishes_completeness` is whether the family carries a completeness theorem
whose every identity was proved. A verified residual proves membership in the
solution set, never coverage of it, so a verified family is not thereby a
complete one.

<a id="entry-presentation_rust_api_partialdifferentialequationsolutionfamily"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationsolutionfamily.68a19ea58a2f"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationSolutionFamily;
```

A candidate partial differential equation solution family owned by one API session.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolutionfamily.9a014ebc7b60"></a>
<p class="symi-entry-owner">Type: <code>api::partial_differential_equations::PartialDifferentialEquationSolutionFamily</code></p>

```rust signature
pub struct PartialDifferentialEquationSolutionFamily
```

</details>

<a id="entry-presentation_rust_api_partialdifferentialequationsolutionfamily_arbitrary_functions"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolutionfamily_arbitrary_functions.3d684c89382c"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolutionFamily method</p>

```rust signature
pub fn arbitrary_functions(
    &self,
) -> Result<Vec<PartialDifferentialEquationArbitraryFunction>, ApiError>
```

Returns arbitrary functions that remain symbolic during verification.

<a id="entry-presentation_rust_api_partialdifferentialequationsolutionfamily_establishes_completeness"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolutionfamily_establishes_completeness.7177118a3000"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolutionFamily method</p>

```rust signature
pub fn establishes_completeness(&self) -> Result<bool, ApiError>
```

Reports whether the family carries a completeness theorem whose every identity was proved.

<a id="entry-presentation_rust_api_partialdifferentialequationsolutionfamily_form"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolutionfamily_form.83070b1c98b6"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolutionFamily method</p>

```rust signature
pub fn form(
    &self,
) -> Result<PartialDifferentialEquationSolutionForm, ApiError>
```

Returns the explicit or implicit candidate form.

<a id="entry-presentation_rust_api_partialdifferentialequationsolutionfamily_proof_obligations"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolutionfamily_proof_obligations.71d39adfc19c"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolutionFamily method</p>

```rust signature
pub fn proof_obligations(
    &self,
) -> Result<Vec<PartialDifferentialEquationProofObligation>, ApiError>
```

Returns method-specific proof obligations attached to this candidate.

<a id="entry-presentation_rust_api_partialdifferentialequationsolutionfamily_session"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolutionfamily_session.d8c44de431c8"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolutionFamily method</p>

```rust signature
pub fn session(&self) -> Session
```

Returns the session that owns this candidate solution family.

### PartialDifferentialEquationSolutionForm

The explicit or implicit mathematical form of a candidate solution family.

Cases: `Explicit`, `Implicit`.

<a id="entry-presentation_rust_api_partialdifferentialequationsolutionform_explicit"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolutionform_explicit.c79603a4dc58"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolutionForm variant</p>

```rust signature
Explicit(Expression)
```

An explicit value for the declared dependent function.

<a id="entry-presentation_rust_api_partialdifferentialequationsolutionform_implicit"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolutionform_implicit.5dd3f21882bc"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolutionForm variant</p>

```rust signature
Implicit(Expression)
```

An implicit residual interpreted as equal to zero.

<a id="entry-presentation_rust_api_partialdifferentialequationsolutionform"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationsolutionform.3ba96c76fe61"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationSolutionForm;
```

The explicit or implicit mathematical form of a candidate solution family.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolutionform.ef80dbcdf0fc"></a>
<p class="symi-entry-owner">Type: <code>api::partial_differential_equations::PartialDifferentialEquationSolutionForm</code></p>

```rust signature
pub enum PartialDifferentialEquationSolutionForm
```

</details>

### PartialDifferentialEquationSolutionProvenance

Mathematical provenance carried only by a future verified PDE solution.

<a id="entry-presentation_rust_api_partialdifferentialequationsolutionprovenance"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationsolutionprovenance.21734bd8a97f"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationSolutionProvenance;
```

Mathematical provenance carried only by a future verified PDE solution.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolutionprovenance.97cec4c6002f"></a>
<p class="symi-entry-owner">Type: <code>api::partial_differential_equations::PartialDifferentialEquationSolutionProvenance</code></p>

```rust signature
pub struct PartialDifferentialEquationSolutionProvenance
```

</details>

<a id="entry-presentation_rust_api_partialdifferentialequationsolutionprovenance_discharged_obligations"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolutionprovenance_discharged_obligations.4ada93ecd005"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolutionProvenance method</p>

```rust signature
pub fn discharged_obligations(
    &self,
) -> Vec<PartialDifferentialEquationProofObligation>
```

Returns mathematical obligations discharged before verification.

<a id="entry-presentation_rust_api_partialdifferentialequationsolutionprovenance_linearity"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolutionprovenance_linearity.ca56ec745e53"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolutionProvenance method</p>

```rust signature
pub fn linearity(&self) -> PartialDifferentialEquationLinearity
```

Returns the classified linearity.

<a id="entry-presentation_rust_api_partialdifferentialequationsolutionprovenance_method"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolutionprovenance_method.fbf2f7de244b"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolutionProvenance method</p>

```rust signature
pub fn method(&self) -> PartialDifferentialEquationMethod
```

Returns the method that produced the candidate.

<a id="entry-presentation_rust_api_partialdifferentialequationsolutionprovenance_order"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolutionprovenance_order.b614cb9d30eb"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolutionProvenance method</p>

```rust signature
pub fn order(&self) -> usize
```

Returns the classified derivative order.

### PartialDifferentialEquationSolutionClass

The analytic class of solutions a complete partial differential equation family must cover.

Cases: `PolynomialGrowth`, `Unrestricted`.

<a id="entry-presentation_rust_api_partialdifferentialequationsolutionclass"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationsolutionclass.99e3aebf8b38"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationSolutionClass;
```

The analytic class of solutions a complete partial differential equation family must cover.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolutionclass.e08cdb8a5f09"></a>
<p class="symi-entry-owner">Type: <code>api::partial_differential_equations::PartialDifferentialEquationSolutionClass</code></p>

```rust signature
pub enum PartialDifferentialEquationSolutionClass
```

</details>

<a id="entry-presentation_rust_api_partialdifferentialequationsolutionclass_polynomialgrowth"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolutionclass_polynomialgrowth.98bacca08be0"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolutionClass variant</p>

```rust signature
PolynomialGrowth,
```

Solutions of at most polynomial growth in the spatial coordinate.

<a id="entry-presentation_rust_api_partialdifferentialequationsolutionclass_unrestricted"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolutionclass_unrestricted.536f84c13aa0"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolutionClass variant</p>

```rust signature
Unrestricted,
```

Every solution on the declared geometry, with no growth restriction.

<a id="entry-presentation_rust_api_partialdifferentialequationsolutionclass_from_name"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolutionclass_from_name.0d66ece9ca79"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolutionClass method</p>

```rust signature
pub fn from_name(name: &str) -> Result<Self, ApiError>
```

Validates one stable lowercase host spelling.

<a id="entry-presentation_rust_api_partialdifferentialequationsolutionclass_name"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolutionclass_name.7fb7155cf71f"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolutionClass method</p>

```rust signature
pub fn name(self) -> &'static str
```

Returns the stable lowercase binding spelling.

### PartialDifferentialEquationGeometricDomain

The geometry a partial differential equation family is requested on.

Cases: `Disk`, `RealLineEvolution`, `WholeSpace`.

<a id="entry-presentation_rust_api_partialdifferentialequationgeometricdomain_disk"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationgeometricdomain_disk.4ae6289e7852"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationGeometricDomain variant</p>

```rust signature
Disk,
```

The open disk whose radial coordinate is the first declared variable and whose angular coordinate is the second, with the origin an interior point of the region.

<a id="entry-presentation_rust_api_partialdifferentialequationgeometricdomain"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationgeometricdomain.511aa3743dac"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationGeometricDomain;
```

The geometry a partial differential equation family is requested on.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationgeometricdomain.8956295f5b1c"></a>
<p class="symi-entry-owner">Type: <code>api::partial_differential_equations::PartialDifferentialEquationGeometricDomain</code></p>

```rust signature
pub enum PartialDifferentialEquationGeometricDomain
```

</details>

<a id="entry-presentation_rust_api_partialdifferentialequationgeometricdomain_reallineevolution"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationgeometricdomain_reallineevolution.1fb7c643e757"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationGeometricDomain variant</p>

```rust signature
RealLineEvolution,
```

A spatial coordinate ranging over the whole real line and a strictly positive evolution coordinate, in that declared order.

<a id="entry-presentation_rust_api_partialdifferentialequationgeometricdomain_wholespace"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationgeometricdomain_wholespace.fcc84fc49e98"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationGeometricDomain variant</p>

```rust signature
WholeSpace,
```

The whole coordinate space of the declared variables, with no boundary.

<a id="entry-presentation_rust_api_partialdifferentialequationgeometricdomain_from_name"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationgeometricdomain_from_name.7678ef494d56"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationGeometricDomain method</p>

```rust signature
pub fn from_name(name: &str) -> Result<Self, ApiError>
```

Validates one stable lowercase host spelling.

<a id="entry-presentation_rust_api_partialdifferentialequationgeometricdomain_name"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationgeometricdomain_name.2f93c39f9c76"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationGeometricDomain method</p>

```rust signature
pub fn name(self) -> &'static str
```

Returns the stable lowercase binding spelling.

### PartialDifferentialEquationRegularity

The regularity a partial differential equation family must have on its geometry.

Cases: `OriginRegularAngularPeriodic`, `Unrestricted`.

<a id="entry-presentation_rust_api_partialdifferentialequationregularity_originregularangularperiodic"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationregularity_originregularangularperiodic.2aa61b4299f5"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationRegularity variant</p>

```rust signature
OriginRegularAngularPeriodic,
```

Extends smoothly to the origin of a disk and is periodic in the angular coordinate with the period of a full turn.

<a id="entry-presentation_rust_api_partialdifferentialequationregularity"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationregularity.cbe830aa2be4"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationRegularity;
```

The regularity a partial differential equation family must have on its geometry.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationregularity.224a7acb1b38"></a>
<p class="symi-entry-owner">Type: <code>api::partial_differential_equations::PartialDifferentialEquationRegularity</code></p>

```rust signature
pub enum PartialDifferentialEquationRegularity
```

</details>

<a id="entry-presentation_rust_api_partialdifferentialequationregularity_unrestricted"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationregularity_unrestricted.5f0fff43eb04"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationRegularity variant</p>

```rust signature
Unrestricted,
```

Only the differentiability the residual itself needs.

<a id="entry-presentation_rust_api_partialdifferentialequationregularity_from_name"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationregularity_from_name.5937b1d71eef"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationRegularity method</p>

```rust signature
pub fn from_name(name: &str) -> Result<Self, ApiError>
```

Validates one stable lowercase host spelling.

<a id="entry-presentation_rust_api_partialdifferentialequationregularity_name"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationregularity_name.83178bfb844c"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationRegularity method</p>

```rust signature
pub fn name(self) -> &'static str
```

Returns the stable lowercase binding spelling.

### PartialDifferentialEquationTransformAxisKind

The explicit Cartesian geometry required by a transform PDE route.

Cases: `FourierWholeRealLine`, `LaplaceNonnegativeHalfLine`.

<a id="entry-presentation_rust_api_partialdifferentialequationtransformaxiskind_fourierwholerealline"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformaxiskind_fourierwholerealline.938c761b56ef"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformAxisKind variant</p>

```rust signature
FourierWholeRealLine,
```

Transforms a coordinate defined on the whole real line with Fourier analysis.

<a id="entry-presentation_rust_api_partialdifferentialequationtransformaxiskind_laplacenonnegativehalfline"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformaxiskind_laplacenonnegativehalfline.dc2d1cb94ed2"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformAxisKind variant</p>

```rust signature
LaplaceNonnegativeHalfLine,
```

Transforms a coordinate defined on the nonnegative half-line with Laplace analysis.

<a id="entry-presentation_rust_api_partialdifferentialequationtransformaxiskind"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationtransformaxiskind.55e352fe6f5d"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationTransformAxisKind;
```

The explicit Cartesian geometry required by a transform PDE route.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformaxiskind.aede7dded2e3"></a>
<p class="symi-entry-owner">Type: <code>api::partial_differential_equations::PartialDifferentialEquationTransformAxisKind</code></p>

```rust signature
pub enum PartialDifferentialEquationTransformAxisKind
```

</details>

<a id="entry-presentation_rust_api_partialdifferentialequationtransformaxiskind_from_name"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformaxiskind_from_name.465cc3ce7199"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformAxisKind method</p>

```rust signature
pub fn from_name(name: &str) -> Result<Self, ApiError>
```

Validates one stable lowercase host spelling.

<a id="entry-presentation_rust_api_partialdifferentialequationtransformaxiskind_name"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformaxiskind_name.8153418b7865"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformAxisKind method</p>

```rust signature
pub fn name(self) -> &'static str
```

Returns the stable lowercase binding spelling.

### PartialDifferentialEquationTransformAxisOption

One explicitly declared source coordinate and transform-domain variable name.

<a id="entry-presentation_rust_api_partialdifferentialequationtransformaxisoption"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationtransformaxisoption.d5d69ba37dc8"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationTransformAxisOption;
```

One explicitly declared source coordinate and transform-domain variable name.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformaxisoption.393ba5b222eb"></a>
<p class="symi-entry-owner">Type: <code>api::partial_differential_equations::PartialDifferentialEquationTransformAxisOption</code></p>

```rust signature
pub struct PartialDifferentialEquationTransformAxisOption
```

</details>

<a id="entry-presentation_rust_api_partialdifferentialequationtransformaxisoption_new"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformaxisoption_new.0890d6f0bf21"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformAxisOption method</p>

```rust signature
pub fn new(
    source_variable_name: impl Into<String>,
    transform_axis_kind: PartialDifferentialEquationTransformAxisKind,
    transform_variable_name: Option<String>,
) -> Self
```

Creates one transform-axis option with an optional explicit transform variable name.

<a id="entry-presentation_rust_api_partialdifferentialequationtransformaxisoption_source_variable_name"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformaxisoption_source_variable_name.5a2985fb95df"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformAxisOption method</p>

```rust signature
pub fn source_variable_name(&self) -> &str
```

Returns the declared PDE coordinate to transform.

<a id="entry-presentation_rust_api_partialdifferentialequationtransformaxisoption_transform_axis_kind"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformaxisoption_transform_axis_kind.0949f589db0e"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformAxisOption method</p>

```rust signature
pub fn transform_axis_kind(
    &self,
) -> PartialDifferentialEquationTransformAxisKind
```

Returns the explicit geometric semantics of the transformed coordinate.

<a id="entry-presentation_rust_api_partialdifferentialequationtransformaxisoption_transform_variable_name"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformaxisoption_transform_variable_name.51adcf09b461"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformAxisOption method</p>

```rust signature
pub fn transform_variable_name(&self) -> Option<&str>
```

Returns the caller-selected transform variable name, if one was supplied.

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

<a id="entry-presentation_rust_api_partialdifferentialequationverificationreport"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationverificationreport.fc61d84cd6d9"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationVerificationReport;
```

Independent exact verification evidence for a PDE candidate family.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationverificationreport.28cb17ecc4cd"></a>
<p class="symi-entry-owner">Type: <code>api::partial_differential_equations::PartialDifferentialEquationVerificationReport</code></p>

```rust signature
pub struct PartialDifferentialEquationVerificationReport
```

</details>

<a id="entry-presentation_rust_api_partialdifferentialequationverificationreport_boundary_condition_residuals"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationverificationreport_boundary_condition_residuals.ea74210cddf7"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationVerificationReport method</p>

```rust signature
pub fn boundary_condition_residuals(
    &self,
) -> Vec<PartialDifferentialEquationVerificationResidual>
```

Returns boundary-condition evidence in insertion order.

<a id="entry-presentation_rust_api_partialdifferentialequationverificationreport_explicit_branch"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationverificationreport_explicit_branch.082001e89735"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationVerificationReport method</p>

```rust signature
pub fn explicit_branch(&self) -> Option<Expression>
```

Returns the explicit branch checked after exact implicit isolation, if applicable.

<a id="entry-presentation_rust_api_partialdifferentialequationverificationreport_governing_residual"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationverificationreport_governing_residual.db8606c912c7"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationVerificationReport method</p>

```rust signature
pub fn governing_residual(
    &self,
) -> PartialDifferentialEquationVerificationResidual
```

Returns the governing-equation verification evidence.

<a id="entry-presentation_rust_api_partialdifferentialequationverificationreport_inconclusive_reason"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationverificationreport_inconclusive_reason.eac51cb91309"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationVerificationReport method</p>

```rust signature
pub fn inconclusive_reason(
    &self,
) -> Option<PartialDifferentialEquationVerificationInconclusiveReason>
```

Returns the exact limitation that prevented a conclusive verification verdict.

<a id="entry-presentation_rust_api_partialdifferentialequationverificationreport_initial_condition_residuals"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationverificationreport_initial_condition_residuals.51847cee7df3"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationVerificationReport method</p>

```rust signature
pub fn initial_condition_residuals(
    &self,
) -> Vec<PartialDifferentialEquationVerificationResidual>
```

Returns initial-condition evidence in insertion order.

<a id="entry-presentation_rust_api_partialdifferentialequationverificationreport_proof_obligations"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationverificationreport_proof_obligations.6001ca6b3edd"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationVerificationReport method</p>

```rust signature
pub fn proof_obligations(
    &self,
) -> Vec<PartialDifferentialEquationProofObligation>
```

Returns candidate proof obligations without treating them as discharged evidence.

<a id="entry-presentation_rust_api_partialdifferentialequationverificationreport_verdict"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationverificationreport_verdict.c594b62c4cd1"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationVerificationReport method</p>

```rust signature
pub fn verdict(&self) -> PartialDifferentialEquationVerificationVerdict
```

Returns the aggregate exact verification verdict.

### PartialDifferentialEquationVerificationVerdict

The exact three-way outcome of PDE candidate verification.

Cases: `Inconclusive`, `Rejected`, `Verified`.

<a id="entry-presentation_rust_api_partialdifferentialequationverificationverdict_inconclusive"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationverificationverdict_inconclusive.e55383b11326"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationVerificationVerdict variant</p>

```rust signature
Inconclusive,
```

No residual was false, but at least one could not be proved zero.

<a id="entry-presentation_rust_api_partialdifferentialequationverificationverdict"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationverificationverdict.79c2ad9012d0"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationVerificationVerdict;
```

The exact three-way outcome of PDE candidate verification.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationverificationverdict.0babd84d1943"></a>
<p class="symi-entry-owner">Type: <code>api::partial_differential_equations::PartialDifferentialEquationVerificationVerdict</code></p>

```rust signature
pub enum PartialDifferentialEquationVerificationVerdict
```

</details>

<a id="entry-presentation_rust_api_partialdifferentialequationverificationverdict_rejected"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationverificationverdict_rejected.33293cdfc699"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationVerificationVerdict variant</p>

```rust signature
Rejected,
```

At least one required residual was proved nonzero.

<a id="entry-presentation_rust_api_partialdifferentialequationverificationverdict_verified"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationverificationverdict_verified.429e1e27314a"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationVerificationVerdict variant</p>

```rust signature
Verified,
```

Every required residual was proved zero.

<a id="entry-presentation_rust_api_partialdifferentialequationverificationverdict_name"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationverificationverdict_name.9bb54d57e951"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationVerificationVerdict method</p>

```rust signature
pub fn name(self) -> &'static str
```

Returns the stable lowercase binding spelling.

### PartialDifferentialEquationVerificationResidual

One independently reduced residual and its exact verdict.

<a id="entry-presentation_rust_api_partialdifferentialequationverificationresidual"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationverificationresidual.601fa0d168c5"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationVerificationResidual;
```

One independently reduced residual and its exact verdict.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationverificationresidual.545b0342b538"></a>
<p class="symi-entry-owner">Type: <code>api::partial_differential_equations::PartialDifferentialEquationVerificationResidual</code></p>

```rust signature
pub struct PartialDifferentialEquationVerificationResidual
```

</details>

<a id="entry-presentation_rust_api_partialdifferentialequationverificationresidual_residual"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationverificationresidual_residual.9fd3c54180dc"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationVerificationResidual method</p>

```rust signature
pub fn residual(&self) -> Expression
```

Returns the independently reduced exact residual.

<a id="entry-presentation_rust_api_partialdifferentialequationverificationresidual_verdict"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationverificationresidual_verdict.c2cee104eae5"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationVerificationResidual method</p>

```rust signature
pub fn verdict(&self) -> PartialDifferentialEquationVerificationVerdict
```

Returns this residual's exact verification verdict.

### PartialDifferentialEquationVerificationInconclusiveReason

The exact reason verification could not reach a proof.

Cases: `ImplicitSolutionContainsDerivative`, `ImplicitSolutionNotIsolatable`, `MalformedDependentOccurrence`, `ResidualZeroNotProved`.

<a id="entry-presentation_rust_api_partialdifferentialequationverificationinconclusivereason_implicitsolutioncontainsderivative"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationverificationinconclusivereason_implicitsolutioncontainsderivative.5580af305835"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationVerificationInconclusiveReason variant</p>

```rust signature
ImplicitSolutionContainsDerivative,
```

The implicit relation contains a derivative of the dependent function.

<a id="entry-presentation_rust_api_partialdifferentialequationverificationinconclusivereason_implicitsolutionnotisolatable"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationverificationinconclusivereason_implicitsolutionnotisolatable.fc1fedf0e417"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationVerificationInconclusiveReason variant</p>

```rust signature
ImplicitSolutionNotIsolatable,
```

The bounded implicit solver could not isolate the dependent function.

<a id="entry-presentation_rust_api_partialdifferentialequationverificationinconclusivereason_malformeddependentoccurrence"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationverificationinconclusivereason_malformeddependentoccurrence.5472f1f2b189"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationVerificationInconclusiveReason variant</p>

```rust signature
MalformedDependentOccurrence,
```

A dependent occurrence did not have the required validated shape.

<a id="entry-presentation_rust_api_partialdifferentialequationverificationinconclusivereason"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationverificationinconclusivereason.fda115506444"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationVerificationInconclusiveReason;
```

The exact reason verification could not reach a proof.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationverificationinconclusivereason.10d9bc5fb58b"></a>
<p class="symi-entry-owner">Type: <code>api::partial_differential_equations::PartialDifferentialEquationVerificationInconclusiveReason</code></p>

```rust signature
pub enum PartialDifferentialEquationVerificationInconclusiveReason
```

</details>

<a id="entry-presentation_rust_api_partialdifferentialequationverificationinconclusivereason_residualzeronotproved"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationverificationinconclusivereason_residualzeronotproved.da8c9250304e"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationVerificationInconclusiveReason variant</p>

```rust signature
ResidualZeroNotProved,
```

The exact zero prover did not establish a residual identity.

<a id="entry-presentation_rust_api_partialdifferentialequationverificationinconclusivereason_name"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationverificationinconclusivereason_name.3062db86760e"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationVerificationInconclusiveReason method</p>

```rust signature
pub fn name(self) -> &'static str
```

Returns the stable lowercase binding spelling.

## Related

- [Partial differential equations](partial-differential-equations.md) — the
  operations that produce every record on this page.
- [Ordinary differential equations](ordinary-differential-equations.md) — the
  equations separation and similarity reduction reduce to, and their own
  result records.
- [Structured results](structured-results.md) — the general rules for reading
  verdicts, optional fields, and ordered components.
- [Diagnostics](diagnostics.md) — errors, as distinct from typed declines.
