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

```rust
use symi::api::prelude::*;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let first = Session::new();
    let second = Session::new();
    let x = first.symbol("x");

    println!("{}", first.differentiate(&first.power(&x, &first.integer(2))?, &x)?);
    match second.differentiate(&x, "x") {
        Err(error) => println!("{:?}", error.category()),
        Ok(value) => println!("{}", value),
    }
    Ok(())
}
```


## Additional API

<a id="placement-placement.rust.native_rust.api_activeoperation.6e171b9679bf"></a>
### api::ActiveOperation

`symi::api — pub use crate::operation::ActiveOperation;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_apierror.951a1018882e"></a>
### api::ApiError

`symi::api — pub enum ApiError {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_apierror_assumptionconflict.8d8efd563b1d"></a>
### api::ApiError::AssumptionConflict

`symi::api::ApiError — AssumptionConflict(String)`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_apierror_assumptionresourceexhausted.e992b8c60a0c"></a>
### api::ApiError::AssumptionResourceExhausted

`symi::api::ApiError — AssumptionResourceExhausted`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_apierror_computationdeclined.bd73f20e2488"></a>
### api::ApiError::ComputationDeclined

`symi::api::ApiError — ComputationDeclined`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_apierror_contextmismatch.b77bde918b68"></a>
### api::ApiError::ContextMismatch

`symi::api::ApiError — ContextMismatch`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_apierror_expressionrequired.41d112b35431"></a>
### api::ApiError::ExpressionRequired

`symi::api::ApiError — ExpressionRequired`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_apierror_generationexhausted.ce4b9a8939bf"></a>
### api::ApiError::GenerationExhausted

`symi::api::ApiError — GenerationExhausted`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_apierror_geometryerror.a8dd7e05851c"></a>
### api::ApiError::GeometryError

`symi::api::ApiError — GeometryError(GeometryError)`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_apierror_inconsistentconstraint.116fc0871a8e"></a>
### api::ApiError::InconsistentConstraint

`symi::api::ApiError — InconsistentConstraint`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_apierror_integerrequired.9f351a0e69a4"></a>
### api::ApiError::IntegerRequired

`symi::api::ApiError — IntegerRequired`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_apierror_invalidassumption.46d9163ba2d5"></a>
### api::ApiError::InvalidAssumption

`symi::api::ApiError — InvalidAssumption`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_apierror_invalidconstraint.6fb962c45b7e"></a>
### api::ApiError::InvalidConstraint

`symi::api::ApiError — InvalidConstraint`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_apierror_latexparseerror.30158bc7538a"></a>
### api::ApiError::LatexParseError

`symi::api::ApiError — LatexParseError(String)`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_apierror_logicalexpressionrequired.87cb857b2cb1"></a>
### api::ApiError::LogicalExpressionRequired

`symi::api::ApiError — LogicalExpressionRequired`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_apierror_matrixerror.d593d0655271"></a>
### api::ApiError::MatrixError

`symi::api::ApiError — MatrixError(MatrixError)`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_apierror_operationcancelled.10e87e6684cb"></a>
### api::ApiError::OperationCancelled

`symi::api::ApiError — OperationCancelled`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_apierror_parallelisminitializationfailed.b5f5408f3837"></a>
### api::ApiError::ParallelismInitializationFailed

`symi::api::ApiError — ParallelismInitializationFailed`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_apierror_parallelismnotcompiled.f1a8c981e3dd"></a>
### api::ApiError::ParallelismNotCompiled

`symi::api::ApiError — ParallelismNotCompiled`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_apierror_parallelismrequiresasyncinitialization.5891e2aea66a"></a>
### api::ApiError::ParallelismRequiresAsyncInitialization

`symi::api::ApiError — ParallelismRequiresAsyncInitialization`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_apierror_parseerror.630734a69a9c"></a>
### api::ApiError::ParseError

`symi::api::ApiError — ParseError(ParseError)`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_apierror_partialdifferentialequationproblem.48ff0de0c1dd"></a>
### api::ApiError::PartialDifferentialEquationProblem

`symi::api::ApiError — PartialDifferentialEquationProblem(PartialDifferentialEquationProblemError)`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_apierror_polynomialrequired.570dce97a5bf"></a>
### api::ApiError::PolynomialRequired

`symi::api::ApiError — PolynomialRequired`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_apierror_serializedparseerror.3f59a4d39f54"></a>
### api::ApiError::SerializedParseError

`symi::api::ApiError — SerializedParseError(String)`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_apierror_staleobject.62dd826bad01"></a>
### api::ApiError::StaleObject

`symi::api::ApiError — StaleObject`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_apierror_symbolrequired.d8c1a8d2f675"></a>
### api::ApiError::SymbolRequired

`symi::api::ApiError — SymbolRequired`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_apierror_zerodenominator.47a42885c911"></a>
### api::ApiError::ZeroDenominator

`symi::api::ApiError — ZeroDenominator`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_apierror_category.9e363cd72dd1"></a>
### api::ApiError::category

`symi::api::ApiError — pub fn category(&self) -> DiagnosticCategory`

Returns `DiagnosticCategory`.

<a id="placement-placement.rust.native_rust.api_apierror_diagnostic.63764bb0d720"></a>
### api::ApiError::diagnostic

`symi::api::ApiError — pub fn diagnostic(&self, operation: &str) -> Diagnostic`

Returns `Diagnostic`.

<a id="placement-placement.rust.native_rust.api_assumptionproposition.b53dab90eba0"></a>
### api::AssumptionProposition

`symi::api — pub struct AssumptionProposition {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_assumptionproposition_generation.192022c49a50"></a>
### api::AssumptionProposition::generation

`symi::api::AssumptionProposition — pub fn generation(&self) -> u64`

Returns `u64`.

<a id="placement-placement.rust.native_rust.api_assumptionproposition_session.f8f1033ba167"></a>
### api::AssumptionProposition::session

`symi::api::AssumptionProposition — pub fn session(&self) -> Session`

Returns `Session`.

<a id="placement-placement.rust.native_rust.api_assumptionproposition_stable_text.4dde784fab76"></a>
### api::AssumptionProposition::stable_text

`symi::api::AssumptionProposition — pub fn stable_text(&self) -> Result<String, ApiError>`

Returns `Result<String, ApiError>`.

<a id="placement-placement.rust.native_rust.api_assumptionreport.42df4cf37a27"></a>
### api::AssumptionReport

`symi::api — pub use crate::assumptions::knowledge_base::AssumptionReport;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_assumptionscope.40ef4e50cf87"></a>
### api::AssumptionScope

`symi::api — pub struct AssumptionScope {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_assumptionscope_assumptions.d531fb350c1b"></a>
### api::AssumptionScope::assumptions

`symi::api::AssumptionScope — pub fn assumptions(&self) -> Result<AssumptionReport, ApiError>`

Returns `Result<AssumptionReport, ApiError>`.

<a id="placement-placement.rust.native_rust.api_assumptionscope_generation.66c24c812dbe"></a>
### api::AssumptionScope::generation

`symi::api::AssumptionScope — pub fn generation(&self) -> u64`

Returns `u64`.

<a id="placement-placement.rust.native_rust.api_assumptionscope_session.89928e809f93"></a>
### api::AssumptionScope::session

`symi::api::AssumptionScope — pub fn session(&self) -> Session`

Returns `Session`.

<a id="placement-placement.rust.native_rust.api_builtinfunction.cc7e27000e26"></a>
### api::BuiltinFunction

`symi::api — pub use crate::function::BuiltinFunction;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_bulkexpressionoutcome.725b40b00b13"></a>
### api::BulkExpressionOutcome

`symi::api — pub use parallelism::BulkExpressionOutcome;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_bulktextoutcome.31ba7387dc68"></a>
### api::BulkTextOutcome

`symi::api — pub use parallelism::BulkTextOutcome;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_cadcellkind.aba94638427b"></a>
### api::CadCellKind

`symi::api — pub enum CadCellKind {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_cadcellkind_section.f226207df5fa"></a>
### api::CadCellKind::Section

`symi::api::CadCellKind — Section`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_cadcellkind_sector.a091725c055c"></a>
### api::CadCellKind::Sector

`symi::api::CadCellKind — Sector`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_cadcellkind_name.467c0e2363d3"></a>
### api::CadCellKind::name

`symi::api::CadCellKind — pub fn name(&self) -> &'static str`

Returns `&'static str`.

<a id="placement-placement.rust.native_rust.api_circle2d.ea6315c85858"></a>
### api::Circle2d

`symi::api — pub struct Circle2d {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_circle2d_generation.c1d88396292e"></a>
### api::Circle2d::generation

`symi::api::Circle2d — pub fn generation(&self) -> u64`

Returns `u64`.

<a id="placement-placement.rust.native_rust.api_circle2d_session.b01531190087"></a>
### api::Circle2d::session

`symi::api::Circle2d — pub fn session(&self) -> Session`

Returns `Session`.

<a id="placement-placement.rust.native_rust.api_completedoperationreport.39cc8ef0e465"></a>
### api::CompletedOperationReport

`symi::api — pub struct CompletedOperationReport {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_completedoperationreport_cancelled_operation_count.7f2bb63addd8"></a>
### api::CompletedOperationReport::cancelled_operation_count

`symi::api::CompletedOperationReport — pub cancelled_operation_count:`

Returns `field`.

<a id="placement-placement.rust.native_rust.api_completedoperationreport_consumed_work_units.963af8ec5523"></a>
### api::CompletedOperationReport::consumed_work_units

`symi::api::CompletedOperationReport — pub consumed_work_units:`

Returns `field`.

<a id="placement-placement.rust.native_rust.api_completedoperationreport_operation_count.b0c31211ead8"></a>
### api::CompletedOperationReport::operation_count

`symi::api::CompletedOperationReport — pub operation_count:`

Returns `field`.

<a id="placement-placement.rust.native_rust.api_completedoperationreport_records.87db67d6f90d"></a>
### api::CompletedOperationReport::records

`symi::api::CompletedOperationReport — pub records:`

Returns `field`.

<a id="placement-placement.rust.native_rust.api_computationoutcome.74a0e3d9b651"></a>
### api::ComputationOutcome

`symi::api — pub enum ComputationOutcome<ValueType> {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_computationoutcome_declined.218b6a88acd3"></a>
### api::ComputationOutcome::Declined

`symi::api::ComputationOutcome — Declined`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_criticalpoint.fb6ea799d622"></a>
### api::CriticalPoint

`symi::api — pub use results::CriticalPoint;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_cylindricalalgebraicdecomposition.50354ca1971a"></a>
### api::CylindricalAlgebraicDecomposition

`symi::api — pub struct CylindricalAlgebraicDecomposition {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_cylindricalalgebraicdecomposition_generation.7077173700ad"></a>
### api::CylindricalAlgebraicDecomposition::generation

`symi::api::CylindricalAlgebraicDecomposition — pub fn generation(&self) -> u64`

Returns `u64`.

<a id="placement-placement.rust.native_rust.api_cylindricalalgebraicdecomposition_session.feb66305bd29"></a>
### api::CylindricalAlgebraicDecomposition::session

`symi::api::CylindricalAlgebraicDecomposition — pub fn session(&self) -> Session`

Returns `Session`.

<a id="placement-placement.rust.native_rust.api_definiteintegrationdeclinereason.03b7b28d755e"></a>
### api::DefiniteIntegrationDeclineReason

`symi::api — pub use crate::integrate::definite::DefiniteIntegrationDeclineReason;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_definiteintegrationdivergencedirection.e03b9865f485"></a>
### api::DefiniteIntegrationDivergenceDirection

`symi::api — pub use crate::integrate::definite::DefiniteIntegrationDivergenceDirection;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_definiteintegrationinterpretation.d10c2e6398e2"></a>
### api::DefiniteIntegrationInterpretation

`symi::api — pub use crate::integrate::definite::DefiniteIntegrationInterpretation;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_definiteintegrationverdict.5908e3222768"></a>
### api::DefiniteIntegrationVerdict

`symi::api — pub use results::DefiniteIntegrationVerdict;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_diagnostic.ab2b304f6c92"></a>
### api::Diagnostic

`symi::api — pub use crate::diagnostics::Diagnostic;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_diagnosticcategory.6bb9c9b2e86d"></a>
### api::DiagnosticCategory

`symi::api — pub use crate::diagnostics::DiagnosticCategory;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_differentialequationsolutionscope.754ed4c87b09"></a>
### api::DifferentialEquationSolutionScope

`symi::api — pub use ordinary_differential_equations::DifferentialEquationSolutionScope;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_eigenpair.75c3299d7833"></a>
### api::Eigenpair

`symi::api — pub use results::Eigenpair;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_enumerationverdict.ef75efed0e2a"></a>
### api::EnumerationVerdict

`symi::api — pub use results::EnumerationVerdict;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_exactintegerinput.29bcf30db214"></a>
### api::ExactIntegerInput

`symi::api — pub trait ExactIntegerInput {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_executionmode.13ee30759072"></a>
### api::ExecutionMode

`symi::api — pub use crate::operation::ExecutionMode;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_expression.39c36267f70d"></a>
### api::Expression

`symi::api — pub struct Expression {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_expression_absolute_value.1284e138a72a"></a>
### api::Expression::absolute_value

`symi::api::Expression — pub fn absolute_value(&self) -> Result<Expression, ApiError>`

Returns `Result<Expression, ApiError>`.

<a id="placement-placement.rust.native_rust.api_expression_add.7edac7e49135"></a>
### api::Expression::add

`symi::api::Expression — pub fn add(&self, other: &Expression) -> Result<Expression, ApiError>`

Returns `Result<Expression, ApiError>`.

<a id="placement-placement.rust.native_rust.api_expression_convert_polynomial_basis.df0c39510b5b"></a>
### api::Expression::convert_polynomial_basis

`symi::api::Expression — pub fn convert_polynomial_basis<'a, VariableType>(&self, variable: VariableType, basis: &OrthogonalPolynomialBasis) -> Result<Expression, ApiError> where VariableType: Into<VariableLike<'a>>`

Returns `Result<Expression, ApiError>`.

<a id="placement-placement.rust.native_rust.api_expression_expand_orthogonal_polynomial.7cfe147549d1"></a>
### api::Expression::expand_orthogonal_polynomial

`symi::api::Expression — pub fn expand_orthogonal_polynomial(&self) -> Result<Expression, ApiError>`

Returns `Result<Expression, ApiError>`.

<a id="placement-placement.rust.native_rust.api_expression_generation.3d1194bbcbec"></a>
### api::Expression::generation

`symi::api::Expression — pub fn generation(&self) -> u64`

Returns `u64`.

<a id="placement-placement.rust.native_rust.api_expression_integrate_definite_under_constraint.546138d50f65"></a>
### api::Expression::integrate_definite_under_constraint

`symi::api::Expression — pub fn integrate_definite_under_constraint<'a, VariableType>(&self, variable: VariableType, lower_bound: &Expression, upper_bound: &Expression, constraint: &Expression) -> Result<Expression, ApiError> where VariableType: Into<VariableLike<'a>>`

Returns `Result<Expression, ApiError>`.

<a id="placement-placement.rust.native_rust.api_expression_is_algebraic.cf2df473a55a"></a>
### api::Expression::is_algebraic

`symi::api::Expression — pub fn is_algebraic(&self) -> Result<TruthValue, ApiError>`

Returns `Result<TruthValue, ApiError>`.

<a id="placement-placement.rust.native_rust.api_expression_is_complex.65ffe4c8455a"></a>
### api::Expression::is_complex

`symi::api::Expression — pub fn is_complex(&self) -> Result<TruthValue, ApiError>`

Returns `Result<TruthValue, ApiError>`.

<a id="placement-placement.rust.native_rust.api_expression_is_composite.57a713729970"></a>
### api::Expression::is_composite

`symi::api::Expression — pub fn is_composite(&self) -> Result<TruthValue, ApiError>`

Returns `Result<TruthValue, ApiError>`.

<a id="placement-placement.rust.native_rust.api_expression_is_even.125e8a552628"></a>
### api::Expression::is_even

`symi::api::Expression — pub fn is_even(&self) -> Result<TruthValue, ApiError>`

Returns `Result<TruthValue, ApiError>`.

<a id="placement-placement.rust.native_rust.api_expression_is_extended_real.0ba04d7edfe5"></a>
### api::Expression::is_extended_real

`symi::api::Expression — pub fn is_extended_real(&self) -> Result<TruthValue, ApiError>`

Returns `Result<TruthValue, ApiError>`.

<a id="placement-placement.rust.native_rust.api_expression_is_infinite.63e607e18a0b"></a>
### api::Expression::is_infinite

`symi::api::Expression — pub fn is_infinite(&self) -> Result<TruthValue, ApiError>`

Returns `Result<TruthValue, ApiError>`.

<a id="placement-placement.rust.native_rust.api_expression_is_irrational.d1ecff92e3d3"></a>
### api::Expression::is_irrational

`symi::api::Expression — pub fn is_irrational(&self) -> Result<TruthValue, ApiError>`

Returns `Result<TruthValue, ApiError>`.

<a id="placement-placement.rust.native_rust.api_expression_is_natural.982e0afed79e"></a>
### api::Expression::is_natural

`symi::api::Expression — pub fn is_natural(&self) -> Result<TruthValue, ApiError>`

Returns `Result<TruthValue, ApiError>`.

<a id="placement-placement.rust.native_rust.api_expression_is_nonpositive.7b78e42e1dfc"></a>
### api::Expression::is_nonpositive

`symi::api::Expression — pub fn is_nonpositive(&self) -> Result<TruthValue, ApiError>`

Returns `Result<TruthValue, ApiError>`.

<a id="placement-placement.rust.native_rust.api_expression_is_odd.6c44f2c36801"></a>
### api::Expression::is_odd

`symi::api::Expression — pub fn is_odd(&self) -> Result<TruthValue, ApiError>`

Returns `Result<TruthValue, ApiError>`.

<a id="placement-placement.rust.native_rust.api_expression_is_positive_integer.5ec97def8c30"></a>
### api::Expression::is_positive_integer

`symi::api::Expression — pub fn is_positive_integer(&self) -> Result<TruthValue, ApiError>`

Returns `Result<TruthValue, ApiError>`.

<a id="placement-placement.rust.native_rust.api_expression_is_transcendental.30daff0e5849"></a>
### api::Expression::is_transcendental

`symi::api::Expression — pub fn is_transcendental(&self) -> Result<TruthValue, ApiError>`

Returns `Result<TruthValue, ApiError>`.

<a id="placement-placement.rust.native_rust.api_expression_is_zero.d4f78047d4a1"></a>
### api::Expression::is_zero

`symi::api::Expression — pub fn is_zero(&self) -> Result<TruthValue, ApiError>`

Returns `Result<TruthValue, ApiError>`.

<a id="placement-placement.rust.native_rust.api_expression_multiply.b02aebaf76c1"></a>
### api::Expression::multiply

`symi::api::Expression — pub fn multiply(&self, other: &Expression) -> Result<Expression, ApiError>`

Returns `Result<Expression, ApiError>`.

<a id="placement-placement.rust.native_rust.api_expression_orthogonal_polynomial_coefficient.6d3fff5ae9ce"></a>
### api::Expression::orthogonal_polynomial_coefficient

`symi::api::Expression — pub fn orthogonal_polynomial_coefficient<'a, VariableType>(&self, variable: VariableType, basis: &OrthogonalPolynomialBasis, degree: usize) -> Result<Expression, ApiError> where VariableType: Into<VariableLike<'a>>`

Returns `Result<Expression, ApiError>`.

<a id="placement-placement.rust.native_rust.api_expression_session.9e6d3de19465"></a>
### api::Expression::session

`symi::api::Expression — pub fn session(&self) -> Session`

Returns `Session`.

<a id="placement-placement.rust.native_rust.api_expression_simplify_under_constraint.c98d839b3add"></a>
### api::Expression::simplify_under_constraint

`symi::api::Expression — pub fn simplify_under_constraint(&self, constraint: &Expression) -> Result<Expression, ApiError>`

Returns `Result<Expression, ApiError>`.

<a id="placement-placement.rust.native_rust.api_expression_solve_as_set.f7ad33914707"></a>
### api::Expression::solve_as_set

`symi::api::Expression — pub fn solve_as_set<'a, VariableType>(&self, variable: VariableType) -> Result<Expression, ApiError> where VariableType: Into<VariableLike<'a>>`

Returns `Result<Expression, ApiError>`.

<a id="placement-placement.rust.native_rust.api_expression_structural_hash.e344a3bb6e06"></a>
### api::Expression::structural_hash

`symi::api::Expression — pub fn structural_hash(&self) -> u64`

Returns `u64`.

<a id="placement-placement.rust.native_rust.api_expression_subtract.a1ad15afb2f1"></a>
### api::Expression::subtract

`symi::api::Expression — pub fn subtract(&self, other: &Expression) -> Result<Expression, ApiError>`

Returns `Result<Expression, ApiError>`.

<a id="placement-placement.rust.native_rust.api_expressiongraphmeasurements.7744b4a28308"></a>
### api::ExpressionGraphMeasurements

`symi::api — pub use crate::operation::ExpressionGraphMeasurements;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_expressioninput.c6a9fbb55915"></a>
### api::ExpressionInput

`symi::api — pub use input::ExpressionInput;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_extremumclassification.8383fe1c9605"></a>
### api::ExtremumClassification

`symi::api — pub use results::ExtremumClassification;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_functionidentifier.6fb5a71000dd"></a>
### api::FunctionIdentifier

`symi::api — pub use crate::function::FunctionIdentifier;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_geometry2d.551b4ea24caf"></a>
### api::Geometry2d

`symi::api — pub enum Geometry2d {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_geometry2d_circle.94e7828c74da"></a>
### api::Geometry2d::Circle

`symi::api::Geometry2d — Circle(Circle2d)`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_geometry2d_point.fedc40bfa628"></a>
### api::Geometry2d::Point

`symi::api::Geometry2d — Point(Point2d)`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_geometry2d_polygon.686d625c8818"></a>
### api::Geometry2d::Polygon

`symi::api::Geometry2d — Polygon(Polygon2d)`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_geometry2d_segment.45c15b4daa30"></a>
### api::Geometry2d::Segment

`symi::api::Geometry2d — Segment(Segment2d)`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_geometry2d_triangle.a3b8e68f65a9"></a>
### api::Geometry2d::Triangle

`symi::api::Geometry2d — Triangle(Triangle2d)`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_geometryerror.18a8acf3c6ca"></a>
### api::GeometryError

`symi::api — pub use crate::geometry::GeometryError;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_geometryintersectioncomponent.bea12b24e800"></a>
### api::GeometryIntersectionComponent

`symi::api — pub enum GeometryIntersectionComponent {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_geometryintersectioncomponent_circle.527411574024"></a>
### api::GeometryIntersectionComponent::Circle

`symi::api::GeometryIntersectionComponent — Circle(Circle2d)`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_geometryintersectioncomponent_point.75b5164e7905"></a>
### api::GeometryIntersectionComponent::Point

`symi::api::GeometryIntersectionComponent — Point(Point2d)`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_geometryintersectioncomponent_segment.1bf6c05894c9"></a>
### api::GeometryIntersectionComponent::Segment

`symi::api::GeometryIntersectionComponent — Segment(Segment2d)`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_hermitenormalformdecomposition.da28a11eed57"></a>
### api::HermiteNormalFormDecomposition

`symi::api — pub use results::HermiteNormalFormDecomposition;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_hostcancellationslot.ac946375a5fc"></a>
### api::HostCancellationSlot

`symi::api — pub use host_cancellation::HostCancellationSlot;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_integercokerneldata.22af874ea59c"></a>
### api::IntegerCokernelData

`symi::api — pub use results::IntegerCokernelData;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_isolatinginterval.40248483e9b4"></a>
### api::IsolatingInterval

`symi::api — pub use results::IsolatingInterval;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_jordanblock.7050f236eba4"></a>
### api::JordanBlock

`symi::api — pub use results::JordanBlock;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_jordandecomposition.2f6da81c8578"></a>
### api::JordanDecomposition

`symi::api — pub use results::JordanDecomposition;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_latexpresentationoptions.686f1d6bbb5c"></a>
### api::LatexPresentationOptions

`symi::api — pub use serialization::LatexPresentationOptions;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_lentcontext.cd0e60803125"></a>
### api::LentContext

`symi::api — pub struct LentContext<'session> {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_limitdirection.e823bae61aba"></a>
### api::LimitDirection

`symi::api — pub use crate::limit::LimitDirection;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_mathematicalobject.c76e26ad0ff3"></a>
### api::MathematicalObject

`symi::api — pub use serialization::MathematicalObject;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_matrix_add.72d0792acdec"></a>
### api::Matrix::add

`symi::api::Matrix — pub fn add(&self, other: &Matrix) -> Result<Matrix, ApiError>`

Returns `Result<Matrix, ApiError>`.

<a id="placement-placement.rust.native_rust.api_matrix_generation.363da9dc804f"></a>
### api::Matrix::generation

`symi::api::Matrix — pub fn generation(&self) -> u64`

Returns `u64`.

<a id="placement-placement.rust.native_rust.api_matrix_has_complex_entries.c19bfdf575e0"></a>
### api::Matrix::has_complex_entries

`symi::api::Matrix — pub fn has_complex_entries(&self) -> Result<TruthValue, ApiError>`

Returns `Result<TruthValue, ApiError>`.

<a id="placement-placement.rust.native_rust.api_matrix_has_integer_entries.74cda62cb797"></a>
### api::Matrix::has_integer_entries

`symi::api::Matrix — pub fn has_integer_entries(&self) -> Result<TruthValue, ApiError>`

Returns `Result<TruthValue, ApiError>`.

<a id="placement-placement.rust.native_rust.api_matrix_has_real_entries.29309a51fd42"></a>
### api::Matrix::has_real_entries

`symi::api::Matrix — pub fn has_real_entries(&self) -> Result<TruthValue, ApiError>`

Returns `Result<TruthValue, ApiError>`.

<a id="placement-placement.rust.native_rust.api_matrix_is_diagonal_matrix.d84eeb527e21"></a>
### api::Matrix::is_diagonal_matrix

`symi::api::Matrix — pub fn is_diagonal_matrix(&self) -> Result<TruthValue, ApiError>`

Returns `Result<TruthValue, ApiError>`.

<a id="placement-placement.rust.native_rust.api_matrix_is_full_rank_matrix.2e34ed5f1419"></a>
### api::Matrix::is_full_rank_matrix

`symi::api::Matrix — pub fn is_full_rank_matrix(&self) -> Result<TruthValue, ApiError>`

Returns `Result<TruthValue, ApiError>`.

<a id="placement-placement.rust.native_rust.api_matrix_is_hermitian_matrix.1ac87af99b6d"></a>
### api::Matrix::is_hermitian_matrix

`symi::api::Matrix — pub fn is_hermitian_matrix(&self) -> Result<TruthValue, ApiError>`

Returns `Result<TruthValue, ApiError>`.

<a id="placement-placement.rust.native_rust.api_matrix_is_identity_matrix.d3c895037995"></a>
### api::Matrix::is_identity_matrix

`symi::api::Matrix — pub fn is_identity_matrix(&self) -> Result<TruthValue, ApiError>`

Returns `Result<TruthValue, ApiError>`.

<a id="placement-placement.rust.native_rust.api_matrix_is_invertible_matrix.36066ca74a0a"></a>
### api::Matrix::is_invertible_matrix

`symi::api::Matrix — pub fn is_invertible_matrix(&self) -> Result<TruthValue, ApiError>`

Returns `Result<TruthValue, ApiError>`.

<a id="placement-placement.rust.native_rust.api_matrix_is_normal_matrix.d1e68a4c9593"></a>
### api::Matrix::is_normal_matrix

`symi::api::Matrix — pub fn is_normal_matrix(&self) -> Result<TruthValue, ApiError>`

Returns `Result<TruthValue, ApiError>`.

<a id="placement-placement.rust.native_rust.api_matrix_is_orthogonal_matrix.745c6ff6762c"></a>
### api::Matrix::is_orthogonal_matrix

`symi::api::Matrix — pub fn is_orthogonal_matrix(&self) -> Result<TruthValue, ApiError>`

Returns `Result<TruthValue, ApiError>`.

<a id="placement-placement.rust.native_rust.api_matrix_is_positive_definite_matrix.278db34dcf57"></a>
### api::Matrix::is_positive_definite_matrix

`symi::api::Matrix — pub fn is_positive_definite_matrix(&self) -> Result<TruthValue, ApiError>`

Returns `Result<TruthValue, ApiError>`.

<a id="placement-placement.rust.native_rust.api_matrix_is_positive_semidefinite_matrix.712d4bd582d1"></a>
### api::Matrix::is_positive_semidefinite_matrix

`symi::api::Matrix — pub fn is_positive_semidefinite_matrix(&self) -> Result<TruthValue, ApiError>`

Returns `Result<TruthValue, ApiError>`.

<a id="placement-placement.rust.native_rust.api_matrix_is_singular_matrix.c1c6550f35e5"></a>
### api::Matrix::is_singular_matrix

`symi::api::Matrix — pub fn is_singular_matrix(&self) -> Result<TruthValue, ApiError>`

Returns `Result<TruthValue, ApiError>`.

<a id="placement-placement.rust.native_rust.api_matrix_is_square.b6f45d8f29cf"></a>
### api::Matrix::is_square

`symi::api::Matrix — pub fn is_square(&self) -> Result<TruthValue, ApiError>`

Returns `Result<TruthValue, ApiError>`.

<a id="placement-placement.rust.native_rust.api_matrix_is_symmetric_matrix.5e6c78d62b96"></a>
### api::Matrix::is_symmetric_matrix

`symi::api::Matrix — pub fn is_symmetric_matrix(&self) -> Result<TruthValue, ApiError>`

Returns `Result<TruthValue, ApiError>`.

<a id="placement-placement.rust.native_rust.api_matrix_is_unitary_matrix.7c320fe25b8b"></a>
### api::Matrix::is_unitary_matrix

`symi::api::Matrix — pub fn is_unitary_matrix(&self) -> Result<TruthValue, ApiError>`

Returns `Result<TruthValue, ApiError>`.

<a id="placement-placement.rust.native_rust.api_matrix_is_zero_matrix.76a7d45973a7"></a>
### api::Matrix::is_zero_matrix

`symi::api::Matrix — pub fn is_zero_matrix(&self) -> Result<TruthValue, ApiError>`

Returns `Result<TruthValue, ApiError>`.

<a id="placement-placement.rust.native_rust.api_matrix_multiply.5ec431521e53"></a>
### api::Matrix::multiply

`symi::api::Matrix — pub fn multiply(&self, other: &Matrix) -> Result<Matrix, ApiError>`

Returns `Result<Matrix, ApiError>`.

<a id="placement-placement.rust.native_rust.api_matrix_session.802181f9e17e"></a>
### api::Matrix::session

`symi::api::Matrix — pub fn session(&self) -> Session`

Returns `Session`.

<a id="placement-placement.rust.native_rust.api_matrix_subtract.9c6f2565e43b"></a>
### api::Matrix::subtract

`symi::api::Matrix — pub fn subtract(&self, other: &Matrix) -> Result<Matrix, ApiError>`

Returns `Result<Matrix, ApiError>`.

<a id="placement-placement.rust.native_rust.api_matrixerror.47a6016f85ff"></a>
### api::MatrixError

`symi::api — pub use crate::matrix::MatrixError;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_matrixpredicate.043471865d1c"></a>
### api::MatrixPredicate

`symi::api — pub use crate::assumptions::MatrixPredicate;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_matrixpredicateapplication.77f031b3d5fd"></a>
### api::MatrixPredicateApplication

`symi::api — pub use crate::assumptions::MatrixPredicateApplication;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_monomialordering.be5473e1854c"></a>
### api::MonomialOrdering

`symi::api — pub use options::MonomialOrdering;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_numeratordenominator.b86f97da0e84"></a>
### api::NumeratorDenominator

`symi::api — pub use results::NumeratorDenominator;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_operationconfiguration.52862b5f0493"></a>
### api::OperationConfiguration

`symi::api — pub use crate::operation::OperationConfiguration;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_operationcontext.b26c41e6274d"></a>
### api::OperationContext

`symi::api — pub use crate::operation::OperationContext;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_operationdefaults.146798a519f4"></a>
### api::OperationDefaults

`symi::api — pub use crate::operation::OperationDefaults;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_operationevent.059eab0ba582"></a>
### api::OperationEvent

`symi::api — pub use crate::operation::OperationEvent;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_operationidentifier.7c6a7ecfc74e"></a>
### api::OperationIdentifier

`symi::api — pub use crate::operation::OperationIdentifier;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_operationrecord.5c8ce64a7c41"></a>
### api::OperationRecord

`symi::api — pub use crate::operation::OperationRecord;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_operationstage.a0eea2eb9dc1"></a>
### api::OperationStage

`symi::api — pub use crate::operation::OperationStage;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_optimizationoutcome.8f0c2b119170"></a>
### api::OptimizationOutcome

`symi::api — pub use results::OptimizationOutcome;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_optimizationverdict.02c319d61a22"></a>
### api::OptimizationVerdict

`symi::api — pub use results::OptimizationVerdict;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_ordinarydifferentialequationgeneralityverdict.5a6c08909b64"></a>
### api::OrdinaryDifferentialEquationGeneralityVerdict

`symi::api — pub use ordinary_differential_equations::OrdinaryDifferentialEquationGeneralityVerdict;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_ordinarydifferentialequationmethod.f77be30e55a1"></a>
### api::OrdinaryDifferentialEquationMethod

`symi::api — pub use ordinary_differential_equations::OrdinaryDifferentialEquationMethod;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_ordinarydifferentialequationregularity.ab1013672e36"></a>
### api::OrdinaryDifferentialEquationRegularity

`symi::api — pub use ordinary_differential_equations::OrdinaryDifferentialEquationRegularity;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_ordinarydifferentialequationsolutionform.66825351f463"></a>
### api::OrdinaryDifferentialEquationSolutionForm

`symi::api — pub use ordinary_differential_equations::OrdinaryDifferentialEquationSolutionForm;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_ordinarydifferentialequationsolvedecline.32ecdcabed85"></a>
### api::OrdinaryDifferentialEquationSolveDecline

`symi::api — pub use ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_ordinarydifferentialequationsolveverdict.a774d454dba7"></a>
### api::OrdinaryDifferentialEquationSolveVerdict

`symi::api — pub use ordinary_differential_equations::OrdinaryDifferentialEquationSolveVerdict;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_ordinarydifferentialequationsystemmethod.3053234e93b0"></a>
### api::OrdinaryDifferentialEquationSystemMethod

`symi::api — pub use ordinary_differential_equations::OrdinaryDifferentialEquationSystemMethod;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_ordinarydifferentialequationsystemroute.c94b7c719c33"></a>
### api::OrdinaryDifferentialEquationSystemRoute

`symi::api — pub use ordinary_differential_equations::OrdinaryDifferentialEquationSystemRoute;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_ordinarydifferentialequationsystemsolvedecline.9253307f5f75"></a>
### api::OrdinaryDifferentialEquationSystemSolveDecline

`symi::api — pub use ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveDecline;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_ordinarydifferentialequationverificationverdict.077b7b545f63"></a>
### api::OrdinaryDifferentialEquationVerificationVerdict

`symi::api — pub use ordinary_differential_equations::OrdinaryDifferentialEquationVerificationVerdict;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_orthogonalpolynomialbasis.370251607a5b"></a>
### api::OrthogonalPolynomialBasis

`symi::api — pub use options::OrthogonalPolynomialBasis;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_orthogonalpolynomialfamily.34934096529d"></a>
### api::OrthogonalPolynomialFamily

`symi::api — pub use options::OrthogonalPolynomialFamily;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_parallelbackend.631a5d437186"></a>
### api::ParallelBackend

`symi::api — pub use parallelism::ParallelBackend;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_parallelismcapability.2be8205af335"></a>
### api::ParallelismCapability

`symi::api — pub use parallelism::ParallelismCapability;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_parallelisminitialization.b4fa065a8693"></a>
### api::ParallelismInitialization

`symi::api — pub use parallelism::ParallelismInitialization;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_parallelismunavailablereason.4f8b71e82a2d"></a>
### api::ParallelismUnavailableReason

`symi::api — pub use parallelism::ParallelismUnavailableReason;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_parseerror.4e012c26c04e"></a>
### api::ParseError

`symi::api — pub use crate::interactive::parser::ParseError;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_partialdifferentialequationarbitraryfunction.91118ba9af6d"></a>
### api::PartialDifferentialEquationArbitraryFunction

`symi::api — pub use partial_differential_equations::PartialDifferentialEquationArbitraryFunction;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_partialdifferentialequationcanonicalprincipalform.f3eeef9a2e5e"></a>
### api::PartialDifferentialEquationCanonicalPrincipalForm

`symi::api — pub use partial_differential_equations::PartialDifferentialEquationCanonicalPrincipalForm;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_partialdifferentialequationcanonicalizationdecline.9b204764b187"></a>
### api::PartialDifferentialEquationCanonicalizationDecline

`symi::api — pub use partial_differential_equations::PartialDifferentialEquationCanonicalizationDecline;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_partialdifferentialequationcanonicalizationresult.6d4c0e8bcf04"></a>
### api::PartialDifferentialEquationCanonicalizationResult

`symi::api — pub use partial_differential_equations::PartialDifferentialEquationCanonicalizationResult;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_partialdifferentialequationclassification.a926b63b6178"></a>
### api::PartialDifferentialEquationClassification

`symi::api — pub use partial_differential_equations::PartialDifferentialEquationClassification;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_partialdifferentialequationcoefficientdata.a7c537de52fe"></a>
### api::PartialDifferentialEquationCoefficientData

`symi::api — pub use partial_differential_equations::PartialDifferentialEquationCoefficientData;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_partialdifferentialequationcoordinatechange.94dc5395fd9d"></a>
### api::PartialDifferentialEquationCoordinateChange

`symi::api — pub use partial_differential_equations::PartialDifferentialEquationCoordinateChange;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_partialdifferentialequationgeometricdomain.511aa3743dac"></a>
### api::PartialDifferentialEquationGeometricDomain

`symi::api — pub use partial_differential_equations::PartialDifferentialEquationGeometricDomain;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_partialdifferentialequationjet.537ed3464f32"></a>
### api::PartialDifferentialEquationJet

`symi::api — pub use partial_differential_equations::PartialDifferentialEquationJet;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_partialdifferentialequationjetcoefficient.b78dabebc6f0"></a>
### api::PartialDifferentialEquationJetCoefficient

`symi::api — pub use partial_differential_equations::PartialDifferentialEquationJetCoefficient;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_partialdifferentialequationlinearity.ea1364ef81a1"></a>
### api::PartialDifferentialEquationLinearity

`symi::api — pub use partial_differential_equations::PartialDifferentialEquationLinearity;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_partialdifferentialequationmethod.460b6952e247"></a>
### api::PartialDifferentialEquationMethod

`symi::api — pub use partial_differential_equations::PartialDifferentialEquationMethod;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_partialdifferentialequationmethodcandidate.689a93461bc3"></a>
### api::PartialDifferentialEquationMethodCandidate

`symi::api — pub use partial_differential_equations::PartialDifferentialEquationMethodCandidate;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_partialdifferentialequationpointsymmetryaction.fbb3ba92e188"></a>
### api::PartialDifferentialEquationPointSymmetryAction

`symi::api — pub use partial_differential_equations::PartialDifferentialEquationPointSymmetryAction;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_partialdifferentialequationpointsymmetryalgebra.37cf5d6cab7b"></a>
### api::PartialDifferentialEquationPointSymmetryAlgebra

`symi::api — pub use partial_differential_equations::PartialDifferentialEquationPointSymmetryAlgebra;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_partialdifferentialequationpointsymmetrydecline.aaee732a0ea5"></a>
### api::PartialDifferentialEquationPointSymmetryDecline

`symi::api — pub use partial_differential_equations::PartialDifferentialEquationPointSymmetryDecline;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_partialdifferentialequationpointsymmetrygenerator.8b5a0ed57492"></a>
### api::PartialDifferentialEquationPointSymmetryGenerator

`symi::api — pub use partial_differential_equations::PartialDifferentialEquationPointSymmetryGenerator;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_partialdifferentialequationportfoliodecline.90b25abf0e88"></a>
### api::PartialDifferentialEquationPortfolioDecline

`symi::api — pub use partial_differential_equations::PartialDifferentialEquationPortfolioDecline;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_partialdifferentialequationprincipalcoefficient.9c3fe6843512"></a>
### api::PartialDifferentialEquationPrincipalCoefficient

`symi::api — pub use partial_differential_equations::PartialDifferentialEquationPrincipalCoefficient;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_partialdifferentialequationprincipalpart.d527b862a307"></a>
### api::PartialDifferentialEquationPrincipalPart

`symi::api — pub use partial_differential_equations::PartialDifferentialEquationPrincipalPart;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_partialdifferentialequationproblem.d68142b5813b"></a>
### api::PartialDifferentialEquationProblem

`symi::api — pub use partial_differential_equations::PartialDifferentialEquationProblem;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_partialdifferentialequationproblemerror.37dcb62980cb"></a>
### api::PartialDifferentialEquationProblemError

`symi::api — pub use partial_differential_equations::PartialDifferentialEquationProblemError;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_partialdifferentialequationproofobligation.88661a642926"></a>
### api::PartialDifferentialEquationProofObligation

`symi::api — pub use partial_differential_equations::PartialDifferentialEquationProofObligation;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_partialdifferentialequationregularity.cbe830aa2be4"></a>
### api::PartialDifferentialEquationRegularity

`symi::api — pub use partial_differential_equations::PartialDifferentialEquationRegularity;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_partialdifferentialequationsecondorderclassification.0e61b326a25a"></a>
### api::PartialDifferentialEquationSecondOrderClassification

`symi::api — pub use partial_differential_equations::PartialDifferentialEquationSecondOrderClassification;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_partialdifferentialequationsecondorderclassificationdecline.9bc4439cee42"></a>
### api::PartialDifferentialEquationSecondOrderClassificationDecline

`symi::api — pub use partial_differential_equations::PartialDifferentialEquationSecondOrderClassificationDecline;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_partialdifferentialequationsecondordertype.5c3ab1194b6d"></a>
### api::PartialDifferentialEquationSecondOrderType

`symi::api — pub use partial_differential_equations::PartialDifferentialEquationSecondOrderType;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_partialdifferentialequationsecondordertypecase.e7f6788cffc5"></a>
### api::PartialDifferentialEquationSecondOrderTypeCase

`symi::api — pub use partial_differential_equations::PartialDifferentialEquationSecondOrderTypeCase;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_partialdifferentialequationsecondordertypeverdict.64bfe49776d9"></a>
### api::PartialDifferentialEquationSecondOrderTypeVerdict

`symi::api — pub use partial_differential_equations::PartialDifferentialEquationSecondOrderTypeVerdict;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_partialdifferentialequationseparatedequation.d0c9cb9fab78"></a>
### api::PartialDifferentialEquationSeparatedEquation

`symi::api — pub use partial_differential_equations::PartialDifferentialEquationSeparatedEquation;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_partialdifferentialequationseparationresult.7c49dec9cbf7"></a>
### api::PartialDifferentialEquationSeparationResult

`symi::api — pub use partial_differential_equations::PartialDifferentialEquationSeparationResult;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_partialdifferentialequationseparationstrategy.eead9d0f99f8"></a>
### api::PartialDifferentialEquationSeparationStrategy

`symi::api — pub use partial_differential_equations::PartialDifferentialEquationSeparationStrategy;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_partialdifferentialequationsimilarityreductiondecline.205a2a8816ca"></a>
### api::PartialDifferentialEquationSimilarityReductionDecline

`symi::api — pub use partial_differential_equations::PartialDifferentialEquationSimilarityReductionDecline;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_partialdifferentialequationsimilaritysolution.691f4a9d0afd"></a>
### api::PartialDifferentialEquationSimilaritySolution

`symi::api — pub use partial_differential_equations::PartialDifferentialEquationSimilaritySolution;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_partialdifferentialequationsolutionclass.99e3aebf8b38"></a>
### api::PartialDifferentialEquationSolutionClass

`symi::api — pub use partial_differential_equations::PartialDifferentialEquationSolutionClass;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_partialdifferentialequationsolutionfamily.68a19ea58a2f"></a>
### api::PartialDifferentialEquationSolutionFamily

`symi::api — pub use partial_differential_equations::PartialDifferentialEquationSolutionFamily;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_partialdifferentialequationsolutionform.3ba96c76fe61"></a>
### api::PartialDifferentialEquationSolutionForm

`symi::api — pub use partial_differential_equations::PartialDifferentialEquationSolutionForm;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_partialdifferentialequationsolutionprovenance.21734bd8a97f"></a>
### api::PartialDifferentialEquationSolutionProvenance

`symi::api — pub use partial_differential_equations::PartialDifferentialEquationSolutionProvenance;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_partialdifferentialequationsolvedecline.6f0d5472c685"></a>
### api::PartialDifferentialEquationSolveDecline

`symi::api — pub use partial_differential_equations::PartialDifferentialEquationSolveDecline;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_partialdifferentialequationsolveoptions.6ba011602d40"></a>
### api::PartialDifferentialEquationSolveOptions

`symi::api — pub use partial_differential_equations::PartialDifferentialEquationSolveOptions;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_partialdifferentialequationsolveresult.1dd016acd5e1"></a>
### api::PartialDifferentialEquationSolveResult

`symi::api — pub use partial_differential_equations::PartialDifferentialEquationSolveResult;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_partialdifferentialequationsolveverdict.5928ab98516a"></a>
### api::PartialDifferentialEquationSolveVerdict

`symi::api — pub use partial_differential_equations::PartialDifferentialEquationSolveVerdict;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_partialdifferentialequationsymmetryactiondecline.3bab3c416d09"></a>
### api::PartialDifferentialEquationSymmetryActionDecline

`symi::api — pub use partial_differential_equations::PartialDifferentialEquationSymmetryActionDecline;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_partialdifferentialequationsymmetryobligation.a6dd2f879c8e"></a>
### api::PartialDifferentialEquationSymmetryObligation

`symi::api — pub use partial_differential_equations::PartialDifferentialEquationSymmetryObligation;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_partialdifferentialequationtransformaxiskind.55e352fe6f5d"></a>
### api::PartialDifferentialEquationTransformAxisKind

`symi::api — pub use partial_differential_equations::PartialDifferentialEquationTransformAxisKind;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_partialdifferentialequationtransformaxisoption.d5d69ba37dc8"></a>
### api::PartialDifferentialEquationTransformAxisOption

`symi::api — pub use partial_differential_equations::PartialDifferentialEquationTransformAxisOption;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_partialdifferentialequationtransformationdecline.817558a6f7d5"></a>
### api::PartialDifferentialEquationTransformationDecline

`symi::api — pub use partial_differential_equations::PartialDifferentialEquationTransformationDecline;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_partialdifferentialequationtransformationresult.b3c315cd45ee"></a>
### api::PartialDifferentialEquationTransformationResult

`symi::api — pub use partial_differential_equations::PartialDifferentialEquationTransformationResult;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_partialdifferentialequationtransformationverificationreport.b8192e677d6f"></a>
### api::PartialDifferentialEquationTransformationVerificationReport

`symi::api — pub use partial_differential_equations::PartialDifferentialEquationTransformationVerificationReport;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_partialdifferentialequationverificationinconclusivereason.fda115506444"></a>
### api::PartialDifferentialEquationVerificationInconclusiveReason

`symi::api — pub use partial_differential_equations::PartialDifferentialEquationVerificationInconclusiveReason;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_partialdifferentialequationverificationreport.fc61d84cd6d9"></a>
### api::PartialDifferentialEquationVerificationReport

`symi::api — pub use partial_differential_equations::PartialDifferentialEquationVerificationReport;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_partialdifferentialequationverificationresidual.601fa0d168c5"></a>
### api::PartialDifferentialEquationVerificationResidual

`symi::api — pub use partial_differential_equations::PartialDifferentialEquationVerificationResidual;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_partialdifferentialequationverificationverdict.79c2ad9012d0"></a>
### api::PartialDifferentialEquationVerificationVerdict

`symi::api — pub use partial_differential_equations::PartialDifferentialEquationVerificationVerdict;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_piecewisebranch.3ed16cef07a7"></a>
### api::PiecewiseBranch

`symi::api — pub use results::PiecewiseBranch;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_point2d.dc4785314d67"></a>
### api::Point2d

`symi::api — pub struct Point2d {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_point2d_generation.16653c0cb131"></a>
### api::Point2d::generation

`symi::api::Point2d — pub fn generation(&self) -> u64`

Returns `u64`.

<a id="placement-placement.rust.native_rust.api_point2d_session.77a989e69dbf"></a>
### api::Point2d::session

`symi::api::Point2d — pub fn session(&self) -> Session`

Returns `Session`.

<a id="placement-placement.rust.native_rust.api_polygon2d.665969172b46"></a>
### api::Polygon2d

`symi::api — pub struct Polygon2d {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_polygon2d_generation.0e0f163c0ce0"></a>
### api::Polygon2d::generation

`symi::api::Polygon2d — pub fn generation(&self) -> u64`

Returns `u64`.

<a id="placement-placement.rust.native_rust.api_polygon2d_session.f9ac45376164"></a>
### api::Polygon2d::session

`symi::api::Polygon2d — pub fn session(&self) -> Session`

Returns `Session`.

<a id="placement-placement.rust.native_rust.api_polynomialsystemsolution.d6a63a922248"></a>
### api::PolynomialSystemSolution

`symi::api — pub use results::PolynomialSystemSolution;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_primefactor.cd6af6c049d7"></a>
### api::PrimeFactor

`symi::api — pub use results::PrimeFactor;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_quadraticcontinuedfractionexpansion.18d86502274a"></a>
### api::QuadraticContinuedFractionExpansion

`symi::api — pub use results::QuadraticContinuedFractionExpansion;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_rationalcanonicalform.c79ffa4b9038"></a>
### api::RationalCanonicalForm

`symi::api — pub use results::RationalCanonicalForm;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_rootmultiplicity.23de5815d593"></a>
### api::RootMultiplicity

`symi::api — pub use results::RootMultiplicity;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_segment2d.5bdf9bd952d3"></a>
### api::Segment2d

`symi::api — pub struct Segment2d {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_segment2d_generation.e8e8cb3c88cf"></a>
### api::Segment2d::generation

`symi::api::Segment2d — pub fn generation(&self) -> u64`

Returns `u64`.

<a id="placement-placement.rust.native_rust.api_segment2d_length.9f1685c15292"></a>
### api::Segment2d::length

`symi::api::Segment2d — pub fn length(&self) -> Result<Expression, ApiError>`

Returns `Result<Expression, ApiError>`.

<a id="placement-placement.rust.native_rust.api_segment2d_session.667a8ffcd829"></a>
### api::Segment2d::session

`symi::api::Segment2d — pub fn session(&self) -> Session`

Returns `Session`.

<a id="placement-placement.rust.native_rust.api_serialroutereason.a7b87d561fe7"></a>
### api::SerialRouteReason

`symi::api — pub use crate::operation::SerialRouteReason;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_session.8efaa178d4c8"></a>
### api::Session

`symi::api — pub struct Session {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_session_absolute_value.751e409e7a72"></a>
### api::Session::absolute_value

`symi::api::Session — pub fn absolute_value(&self, argument: &Expression) -> Result<Expression, ApiError>`

Returns `Result<Expression, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_active_operations.0d63af96f1d5"></a>
### api::Session::active_operations

`symi::api::Session — pub fn active_operations(&self) -> Vec<ActiveOperation>`

Returns `Vec<ActiveOperation>`.

<a id="placement-placement.rust.native_rust.api_session_add.75e803892978"></a>
### api::Session::add

`symi::api::Session — pub fn add(&self, left: &Expression, right: &Expression) -> Result<Expression, ApiError>`

Returns `Result<Expression, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_algebraic.690bf727c8f0"></a>
### api::Session::algebraic

`symi::api::Session — pub fn algebraic(&self, subject: &Expression) -> Result<AssumptionProposition, ApiError>`

Returns `Result<AssumptionProposition, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_all_assumptions.bbcfdc6cd0a2"></a>
### api::Session::all_assumptions

`symi::api::Session — pub fn all_assumptions(&self) -> Result<AssumptionReport, ApiError>`

Returns `Result<AssumptionReport, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_assumption_report_of.d061fc78809b"></a>
### api::Session::assumption_report_of

`symi::api::Session — pub fn assumption_report_of<'a, VariableType>(&self, variable: VariableType) -> Result<AssumptionReport, ApiError> where VariableType: Into<VariableLike<'a>>`

Returns `Result<AssumptionReport, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_call_builtin.26c9dde29e05"></a>
### api::Session::call_builtin

`symi::api::Session — pub fn call_builtin<'a, IteratorType>(&self, function: BuiltinFunction, arguments: IteratorType) -> Result<Expression, ApiError> where IteratorType: IntoIterator<Item = &'a Expression>`

Returns `Result<Expression, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_cancel_active_operations.1ecf381b94a9"></a>
### api::Session::cancel_active_operations

`symi::api::Session — pub fn cancel_active_operations(&self) -> usize`

Returns `usize`.

<a id="placement-placement.rust.native_rust.api_session_cancel_operation.d7f763afed32"></a>
### api::Session::cancel_operation

`symi::api::Session — pub fn cancel_operation(&self, identifier: OperationIdentifier) -> bool`

Returns `bool`.

<a id="placement-placement.rust.native_rust.api_session_carlson_rc.0ab5545bcced"></a>
### api::Session::carlson_rc

`symi::api::Session — pub fn carlson_rc(&self, first_argument: &Expression, second_argument: &Expression) -> Result<Expression, ApiError>`

Returns `Result<Expression, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_carlson_rd.3e957170046d"></a>
### api::Session::carlson_rd

`symi::api::Session — pub fn carlson_rd(&self, first_argument: &Expression, second_argument: &Expression, third_argument: &Expression) -> Result<Expression, ApiError>`

Returns `Result<Expression, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_carlson_rf.ec8d84b6a7e9"></a>
### api::Session::carlson_rf

`symi::api::Session — pub fn carlson_rf(&self, first_argument: &Expression, second_argument: &Expression, third_argument: &Expression) -> Result<Expression, ApiError>`

Returns `Result<Expression, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_carlson_rj.66145e304c30"></a>
### api::Session::carlson_rj

`symi::api::Session — pub fn carlson_rj(&self, first_argument: &Expression, second_argument: &Expression, third_argument: &Expression, fourth_argument: &Expression) -> Result<Expression, ApiError>`

Returns `Result<Expression, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_complex.102c7307d2ec"></a>
### api::Session::complex

`symi::api::Session — pub fn complex(&self, subject: &Expression) -> Result<AssumptionProposition, ApiError>`

Returns `Result<AssumptionProposition, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_complex_entries.38771db69ebf"></a>
### api::Session::complex_entries

`symi::api::Session — pub fn complex_entries(&self, subject: &Matrix) -> Result<AssumptionProposition, ApiError>`

Returns `Result<AssumptionProposition, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_composite.0831fb64ec85"></a>
### api::Session::composite

`symi::api::Session — pub fn composite(&self, subject: &Expression) -> Result<AssumptionProposition, ApiError>`

Returns `Result<AssumptionProposition, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_convert_polynomial_basis.0da7efd61ecb"></a>
### api::Session::convert_polynomial_basis

`symi::api::Session — pub fn convert_polynomial_basis<'a, VariableType>(&self, target: &Expression, variable: VariableType, basis: &OrthogonalPolynomialBasis) -> Result<Expression, ApiError> where VariableType: Into<VariableLike<'a>>`

Returns `Result<Expression, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_cosine_integral.5387585e9ae9"></a>
### api::Session::cosine_integral

`symi::api::Session — pub fn cosine_integral(&self, argument: &Expression) -> Result<Expression, ApiError>`

Returns `Result<Expression, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_cylindrical_algebraic_decomposition.820163b507d9"></a>
### api::Session::cylindrical_algebraic_decomposition

`symi::api::Session — pub fn cylindrical_algebraic_decomposition< 'a, ExpressionIterator, VariableIterator, VariableType, ConstraintIterator, >(&self, expressions: ExpressionIterator, variables: VariableIterator, equational_constraints: ConstraintIterator) -> Result<CylindricalAlgebraicDecomposition, ApiError> where ExpressionIterator: IntoIterator<Item = Expression>, VariableIterator: IntoIterator<Item = VariableType>, VariableType: Into<VariableLike<'a>>, ConstraintIterator: IntoIterator<Item = usize>`

Returns `Result<CylindricalAlgebraicDecomposition, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_declared_symbol.88abf51b0332"></a>
### api::Session::declared_symbol

`symi::api::Session — pub fn declared_symbol(&self, name: &str, declaration: SymbolDeclaration) -> Result<Expression, ApiError>`

Returns `Result<Expression, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_defined.036eb495a286"></a>
### api::Session::defined

`symi::api::Session — pub fn defined(&self, subject: &Expression) -> Result<AssumptionProposition, ApiError>`

Returns `Result<AssumptionProposition, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_diagonal_matrix.b17dbb2a54b5"></a>
### api::Session::diagonal_matrix

`symi::api::Session — pub fn diagonal_matrix(&self, subject: &Matrix) -> Result<AssumptionProposition, ApiError>`

Returns `Result<AssumptionProposition, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_differentiate_bulk.ef98b9c3d3cb"></a>
### api::Session::differentiate_bulk

`symi::api::Session — pub fn differentiate_bulk(&self, targets: &[Expression], variable: &Expression) -> Result<Vec<BulkExpressionOutcome>, ApiError>`

Returns `Result<Vec<BulkExpressionOutcome>, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_dirac_delta.f63c613f326e"></a>
### api::Session::dirac_delta

`symi::api::Session — pub fn dirac_delta(&self, argument: &Expression) -> Result<Expression, ApiError>`

Returns `Result<Expression, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_elliptic_e_incomplete.2a983dd513db"></a>
### api::Session::elliptic_e_incomplete

`symi::api::Session — pub fn elliptic_e_incomplete(&self, amplitude: &Expression, parameter: &Expression) -> Result<Expression, ApiError>`

Returns `Result<Expression, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_elliptic_f.ae653ac6c168"></a>
### api::Session::elliptic_f

`symi::api::Session — pub fn elliptic_f(&self, amplitude: &Expression, parameter: &Expression) -> Result<Expression, ApiError>`

Returns `Result<Expression, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_elliptic_pi.830995e55ef4"></a>
### api::Session::elliptic_pi

`symi::api::Session — pub fn elliptic_pi(&self, characteristic: &Expression, parameter: &Expression) -> Result<Expression, ApiError>`

Returns `Result<Expression, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_elliptic_pi_incomplete.20b3dafd3415"></a>
### api::Session::elliptic_pi_incomplete

`symi::api::Session — pub fn elliptic_pi_incomplete(&self, characteristic: &Expression, amplitude: &Expression, parameter: &Expression) -> Result<Expression, ApiError>`

Returns `Result<Expression, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_error_function.2fa2f7f54f81"></a>
### api::Session::error_function

`symi::api::Session — pub fn error_function(&self, argument: &Expression) -> Result<Expression, ApiError>`

Returns `Result<Expression, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_error_function_complementary.53631097dfd6"></a>
### api::Session::error_function_complementary

`symi::api::Session — pub fn error_function_complementary(&self, argument: &Expression) -> Result<Expression, ApiError>`

Returns `Result<Expression, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_evaluate_numeric_bulk.cfa8fbe9328e"></a>
### api::Session::evaluate_numeric_bulk

`symi::api::Session — pub fn evaluate_numeric_bulk(&self, targets: &[Expression]) -> Result<Vec<BulkExpressionOutcome>, ApiError>`

Returns `Result<Vec<BulkExpressionOutcome>, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_even.9a4b6941f438"></a>
### api::Session::even

`symi::api::Session — pub fn even(&self, subject: &Expression) -> Result<AssumptionProposition, ApiError>`

Returns `Result<AssumptionProposition, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_expand_bulk.0632968f6fe5"></a>
### api::Session::expand_bulk

`symi::api::Session — pub fn expand_bulk(&self, targets: &[Expression]) -> Result<Vec<BulkExpressionOutcome>, ApiError>`

Returns `Result<Vec<BulkExpressionOutcome>, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_expand_orthogonal_polynomial.ebee9df86fc5"></a>
### api::Session::expand_orthogonal_polynomial

`symi::api::Session — pub fn expand_orthogonal_polynomial(&self, target: &Expression) -> Result<Expression, ApiError>`

Returns `Result<Expression, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_exponential_integral.7259b91e9e27"></a>
### api::Session::exponential_integral

`symi::api::Session — pub fn exponential_integral(&self, argument: &Expression) -> Result<Expression, ApiError>`

Returns `Result<Expression, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_extend.8b7caca75ef6"></a>
### api::Session::extend

`symi::api::Session — pub fn extend<ReturnType>(&self, computation: impl FnOnce(LentContext<'_>) -> ReturnType) -> Result<ReturnType, ApiError>`

Returns `Result<ReturnType, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_extended_real.1e55ef22238a"></a>
### api::Session::extended_real

`symi::api::Session — pub fn extended_real(&self, subject: &Expression) -> Result<AssumptionProposition, ApiError>`

Returns `Result<AssumptionProposition, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_factor_over_gaussian_integers.6a70e6be19ef"></a>
### api::Session::factor_over_gaussian_integers

`symi::api::Session — pub fn factor_over_gaussian_integers(&self, target: &Expression) -> Result<Expression, ApiError>`

Returns `Result<Expression, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_fast_recognisers_enabled.e4bb9f9f1fcd"></a>
### api::Session::fast_recognisers_enabled

`symi::api::Session — pub fn fast_recognisers_enabled(&self) -> bool`

Returns `bool`.

<a id="placement-placement.rust.native_rust.api_session_finite.eba9c4f1eba0"></a>
### api::Session::finite

`symi::api::Session — pub fn finite(&self, subject: &Expression) -> Result<AssumptionProposition, ApiError>`

Returns `Result<AssumptionProposition, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_full_rank_matrix.36a4a5ca8c68"></a>
### api::Session::full_rank_matrix

`symi::api::Session — pub fn full_rank_matrix(&self, subject: &Matrix) -> Result<AssumptionProposition, ApiError>`

Returns `Result<AssumptionProposition, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_generation.767349df4278"></a>
### api::Session::generation

`symi::api::Session — pub fn generation(&self) -> u64`

Returns `u64`.

<a id="placement-placement.rust.native_rust.api_session_heaviside_step.067936c12edd"></a>
### api::Session::heaviside_step

`symi::api::Session — pub fn heaviside_step(&self, argument: &Expression) -> Result<Expression, ApiError>`

Returns `Result<Expression, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_hermitian_matrix.1161de5e9340"></a>
### api::Session::hermitian_matrix

`symi::api::Session — pub fn hermitian_matrix(&self, subject: &Matrix) -> Result<AssumptionProposition, ApiError>`

Returns `Result<AssumptionProposition, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_identity.c52e436bef95"></a>
### api::Session::identity

`symi::api::Session — pub fn identity(&self) -> u64`

Returns `u64`.

<a id="placement-placement.rust.native_rust.api_session_identity_matrix.933d2213969f"></a>
### api::Session::identity_matrix

`symi::api::Session — pub fn identity_matrix(&self, subject: &Matrix) -> Result<AssumptionProposition, ApiError>`

Returns `Result<AssumptionProposition, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_infinite.edea6c51e960"></a>
### api::Session::infinite

`symi::api::Session — pub fn infinite(&self, subject: &Expression) -> Result<AssumptionProposition, ApiError>`

Returns `Result<AssumptionProposition, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_initialize_parallelism.336580da287a"></a>
### api::Session::initialize_parallelism

`symi::api::Session — pub fn initialize_parallelism(&self, worker_count: usize) -> Result<ParallelismInitialization, ApiError>`

Returns `Result<ParallelismInitialization, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_integer_entries.597830ca262e"></a>
### api::Session::integer_entries

`symi::api::Session — pub fn integer_entries(&self, subject: &Matrix) -> Result<AssumptionProposition, ApiError>`

Returns `Result<AssumptionProposition, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_integer_from_decimal.2d2b8493a55f"></a>
### api::Session::integer_from_decimal

`symi::api::Session — pub fn integer_from_decimal(&self, text: &str) -> Result<Expression, ApiError>`

Returns `Result<Expression, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_integrate_definite_under_constraint.2836b26c39be"></a>
### api::Session::integrate_definite_under_constraint

`symi::api::Session — pub fn integrate_definite_under_constraint<'a, VariableType>(&self, target: &Expression, variable: VariableType, lower_bound: &Expression, upper_bound: &Expression, constraint: &Expression) -> Result<Expression, ApiError> where VariableType: Into<VariableLike<'a>>`

Returns `Result<Expression, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_invertible_matrix.1f9b739b30b3"></a>
### api::Session::invertible_matrix

`symi::api::Session — pub fn invertible_matrix(&self, subject: &Matrix) -> Result<AssumptionProposition, ApiError>`

Returns `Result<AssumptionProposition, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_irrational.8345b308ac1c"></a>
### api::Session::irrational

`symi::api::Session — pub fn irrational(&self, subject: &Expression) -> Result<AssumptionProposition, ApiError>`

Returns `Result<AssumptionProposition, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_is_nonpositive.2520e35c1258"></a>
### api::Session::is_nonpositive

`symi::api::Session — pub fn is_nonpositive(&self, target: &Expression) -> Result<TruthValue, ApiError>`

Returns `Result<TruthValue, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_jacobi_amplitude.59bfe76c4df5"></a>
### api::Session::jacobi_amplitude

`symi::api::Session — pub fn jacobi_amplitude(&self, argument: &Expression, parameter: &Expression) -> Result<Expression, ApiError>`

Returns `Result<Expression, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_jacobi_cn.4ebe048b1499"></a>
### api::Session::jacobi_cn

`symi::api::Session — pub fn jacobi_cn(&self, argument: &Expression, parameter: &Expression) -> Result<Expression, ApiError>`

Returns `Result<Expression, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_jacobi_dn.9140e04e4d83"></a>
### api::Session::jacobi_dn

`symi::api::Session — pub fn jacobi_dn(&self, argument: &Expression, parameter: &Expression) -> Result<Expression, ApiError>`

Returns `Result<Expression, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_jacobi_sn.66357aebf510"></a>
### api::Session::jacobi_sn

`symi::api::Session — pub fn jacobi_sn(&self, argument: &Expression, parameter: &Expression) -> Result<Expression, ApiError>`

Returns `Result<Expression, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_jacobi_theta_1.513b848b5e9a"></a>
### api::Session::jacobi_theta_1

`symi::api::Session — pub fn jacobi_theta_1(&self, argument: &Expression, half_period_ratio: &Expression) -> Result<Expression, ApiError>`

Returns `Result<Expression, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_jacobi_theta_2.56f271faea65"></a>
### api::Session::jacobi_theta_2

`symi::api::Session — pub fn jacobi_theta_2(&self, argument: &Expression, half_period_ratio: &Expression) -> Result<Expression, ApiError>`

Returns `Result<Expression, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_jacobi_theta_3.e177299887b8"></a>
### api::Session::jacobi_theta_3

`symi::api::Session — pub fn jacobi_theta_3(&self, argument: &Expression, half_period_ratio: &Expression) -> Result<Expression, ApiError>`

Returns `Result<Expression, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_jacobi_theta_4.b4ae94e3aa37"></a>
### api::Session::jacobi_theta_4

`symi::api::Session — pub fn jacobi_theta_4(&self, argument: &Expression, half_period_ratio: &Expression) -> Result<Expression, ApiError>`

Returns `Result<Expression, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_logarithmic_integral.c7cfc3614f77"></a>
### api::Session::logarithmic_integral

`symi::api::Session — pub fn logarithmic_integral(&self, argument: &Expression) -> Result<Expression, ApiError>`

Returns `Result<Expression, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_logical_assumption_and.e04edbc81167"></a>
### api::Session::logical_assumption_and

`symi::api::Session — pub fn logical_assumption_and<I>(&self, propositions: I) -> Result<AssumptionProposition, ApiError> where I: IntoIterator<Item = AssumptionProposition>`

Returns `Result<AssumptionProposition, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_logical_assumption_not.e7a57d8579eb"></a>
### api::Session::logical_assumption_not

`symi::api::Session — pub fn logical_assumption_not(&self, proposition: &AssumptionProposition) -> Result<AssumptionProposition, ApiError>`

Returns `Result<AssumptionProposition, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_logical_assumption_or.28be28d5c6b7"></a>
### api::Session::logical_assumption_or

`symi::api::Session — pub fn logical_assumption_or<I>(&self, propositions: I) -> Result<AssumptionProposition, ApiError> where I: IntoIterator<Item = AssumptionProposition>`

Returns `Result<AssumptionProposition, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_lower_triangular_matrix.85a2ce0f17ce"></a>
### api::Session::lower_triangular_matrix

`symi::api::Session — pub fn lower_triangular_matrix(&self, subject: &Matrix) -> Result<AssumptionProposition, ApiError>`

Returns `Result<AssumptionProposition, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_matrix_assumption.511d2c170c4c"></a>
### api::Session::matrix_assumption

`symi::api::Session — pub fn matrix_assumption(&self, subject: &Matrix, predicate: MatrixPredicate) -> Result<AssumptionProposition, ApiError>`

Returns `Result<AssumptionProposition, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_matrix_shape.3774272c23ab"></a>
### api::Session::matrix_shape

`symi::api::Session — pub fn matrix_shape(&self, subject: &Matrix, rows: usize, columns: usize) -> Result<AssumptionProposition, ApiError>`

Returns `Result<AssumptionProposition, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_multiply.1d925595bd82"></a>
### api::Session::multiply

`symi::api::Session — pub fn multiply(&self, left: &Expression, right: &Expression) -> Result<Expression, ApiError>`

Returns `Result<Expression, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_natural.724f305cdb42"></a>
### api::Session::natural

`symi::api::Session — pub fn natural(&self, subject: &Expression) -> Result<AssumptionProposition, ApiError>`

Returns `Result<AssumptionProposition, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_negative.1965e32857a3"></a>
### api::Session::negative

`symi::api::Session — pub fn negative(&self, subject: &Expression) -> Result<AssumptionProposition, ApiError>`

Returns `Result<AssumptionProposition, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_new.c82e40e438c8"></a>
### api::Session::new

`symi::api::Session — pub fn new() -> Self`

Returns `Self`.

<a id="placement-placement.rust.native_rust.api_session_nonnegative.ed38f3760ae8"></a>
### api::Session::nonnegative

`symi::api::Session — pub fn nonnegative(&self, subject: &Expression) -> Result<AssumptionProposition, ApiError>`

Returns `Result<AssumptionProposition, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_nonnegative_assumption.3a54bd90ec6e"></a>
### api::Session::nonnegative_assumption

`symi::api::Session — pub fn nonnegative_assumption(&self, subject: &Expression) -> Result<AssumptionProposition, ApiError>`

Returns `Result<AssumptionProposition, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_nonpositive.dcfee4a791c2"></a>
### api::Session::nonpositive

`symi::api::Session — pub fn nonpositive(&self, subject: &Expression) -> Result<AssumptionProposition, ApiError>`

Returns `Result<AssumptionProposition, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_nonpositive_assumption.e2b4f0332782"></a>
### api::Session::nonpositive_assumption

`symi::api::Session — pub fn nonpositive_assumption(&self, subject: &Expression) -> Result<AssumptionProposition, ApiError>`

Returns `Result<AssumptionProposition, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_nonzero.4af60b679735"></a>
### api::Session::nonzero

`symi::api::Session — pub fn nonzero(&self, subject: &Expression) -> Result<AssumptionProposition, ApiError>`

Returns `Result<AssumptionProposition, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_normal_matrix.56ccf67124ee"></a>
### api::Session::normal_matrix

`symi::api::Session — pub fn normal_matrix(&self, subject: &Matrix) -> Result<AssumptionProposition, ApiError>`

Returns `Result<AssumptionProposition, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_odd.026e44d816ab"></a>
### api::Session::odd

`symi::api::Session — pub fn odd(&self, subject: &Expression) -> Result<AssumptionProposition, ApiError>`

Returns `Result<AssumptionProposition, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_operation_context.d3a325a2dadc"></a>
### api::Session::operation_context

`symi::api::Session — pub fn operation_context(&self) -> OperationContext`

Returns `OperationContext`.

<a id="placement-placement.rust.native_rust.api_session_operation_defaults.c75f5e18ddb9"></a>
### api::Session::operation_defaults

`symi::api::Session — pub fn operation_defaults(&self) -> Arc<OperationDefaults>`

Returns `Arc<OperationDefaults>`.

<a id="placement-placement.rust.native_rust.api_session_orthogonal_matrix.330cc229c809"></a>
### api::Session::orthogonal_matrix

`symi::api::Session — pub fn orthogonal_matrix(&self, subject: &Matrix) -> Result<AssumptionProposition, ApiError>`

Returns `Result<AssumptionProposition, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_orthogonal_polynomial_coefficient.1b2ef4ad217a"></a>
### api::Session::orthogonal_polynomial_coefficient

`symi::api::Session — pub fn orthogonal_polynomial_coefficient<'a, VariableType>(&self, target: &Expression, variable: VariableType, basis: &OrthogonalPolynomialBasis, degree: usize) -> Result<Expression, ApiError> where VariableType: Into<VariableLike<'a>>`

Returns `Result<Expression, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_parallelism_capability.460744b25dc8"></a>
### api::Session::parallelism_capability

`symi::api::Session — pub fn parallelism_capability(&self) -> ParallelismCapability`

Returns `ParallelismCapability`.

<a id="placement-placement.rust.native_rust.api_session_positive.4da0298fa7ef"></a>
### api::Session::positive

`symi::api::Session — pub fn positive(&self, subject: &Expression) -> Result<AssumptionProposition, ApiError>`

Returns `Result<AssumptionProposition, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_positive_definite_matrix.c53aeb2815bf"></a>
### api::Session::positive_definite_matrix

`symi::api::Session — pub fn positive_definite_matrix(&self, subject: &Matrix) -> Result<AssumptionProposition, ApiError>`

Returns `Result<AssumptionProposition, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_positive_integer.b7dc1f4a9e7a"></a>
### api::Session::positive_integer

`symi::api::Session — pub fn positive_integer(&self, subject: &Expression) -> Result<AssumptionProposition, ApiError>`

Returns `Result<AssumptionProposition, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_positive_semidefinite_matrix.15dc5c8e9dad"></a>
### api::Session::positive_semidefinite_matrix

`symi::api::Session — pub fn positive_semidefinite_matrix(&self, subject: &Matrix) -> Result<AssumptionProposition, ApiError>`

Returns `Result<AssumptionProposition, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_presentation_search_enabled.967665feccd4"></a>
### api::Session::presentation_search_enabled

`symi::api::Session — pub fn presentation_search_enabled(&self) -> bool`

Returns `bool`.

<a id="placement-placement.rust.native_rust.api_session_rational_from_decimal.f6490051ed73"></a>
### api::Session::rational_from_decimal

`symi::api::Session — pub fn rational_from_decimal(&self, text: &str) -> Result<Expression, ApiError>`

Returns `Result<Expression, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_rational_value.3ed6fbe3f4fb"></a>
### api::Session::rational_value

`symi::api::Session — pub fn rational_value(&self, value: exact_rational) -> Expression`

Returns `Expression`.

<a id="placement-placement.rust.native_rust.api_session_real.a9dfb6b509dc"></a>
### api::Session::real

`symi::api::Session — pub fn real(&self, subject: &Expression) -> Result<AssumptionProposition, ApiError>`

Returns `Result<AssumptionProposition, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_real_entries.ccace0bb5dbb"></a>
### api::Session::real_entries

`symi::api::Session — pub fn real_entries(&self, subject: &Matrix) -> Result<AssumptionProposition, ApiError>`

Returns `Result<AssumptionProposition, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_reset.c8b7f54803ce"></a>
### api::Session::reset

`symi::api::Session — pub fn reset(&self) -> Result<(), ApiError>`

Returns `Result<(), ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_serialize_bulk.d28521f7215e"></a>
### api::Session::serialize_bulk

`symi::api::Session — pub fn serialize_bulk(&self, targets: &[Expression]) -> Result<Vec<BulkTextOutcome>, ApiError>`

Returns `Result<Vec<BulkTextOutcome>, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_set_execution_mode.591d8405a9d8"></a>
### api::Session::set_execution_mode

`symi::api::Session — pub fn set_execution_mode(&self, execution_mode: ExecutionMode)`

Returns `()`.

<a id="placement-placement.rust.native_rust.api_session_set_fast_recognisers_enabled.30533410a78b"></a>
### api::Session::set_fast_recognisers_enabled

`symi::api::Session — pub fn set_fast_recognisers_enabled(&self, enabled: bool)`

Returns `()`.

<a id="placement-placement.rust.native_rust.api_session_set_operation_configuration.578f5c49e821"></a>
### api::Session::set_operation_configuration

`symi::api::Session — pub fn set_operation_configuration(&self, configuration: OperationConfiguration)`

Returns `()`.

<a id="placement-placement.rust.native_rust.api_session_set_operation_defaults.695d36be2715"></a>
### api::Session::set_operation_defaults

`symi::api::Session — pub fn set_operation_defaults(&self, defaults: OperationDefaults)`

Returns `()`.

<a id="placement-placement.rust.native_rust.api_session_set_presentation_search_enabled.1e5a19f4a422"></a>
### api::Session::set_presentation_search_enabled

`symi::api::Session — pub fn set_presentation_search_enabled(&self, enabled: bool)`

Returns `()`.

<a id="placement-placement.rust.native_rust.api_session_signum.9e1d5add1b0a"></a>
### api::Session::signum

`symi::api::Session — pub fn signum(&self, argument: &Expression) -> Result<Expression, ApiError>`

Returns `Result<Expression, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_simplify_under_constraint.8c1e9af8cb29"></a>
### api::Session::simplify_under_constraint

`symi::api::Session — pub fn simplify_under_constraint(&self, target: &Expression, constraint: &Expression) -> Result<Expression, ApiError>`

Returns `Result<Expression, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_sine_integral.a6389eb5d184"></a>
### api::Session::sine_integral

`symi::api::Session — pub fn sine_integral(&self, argument: &Expression) -> Result<Expression, ApiError>`

Returns `Result<Expression, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_singular_matrix.94933a3eb298"></a>
### api::Session::singular_matrix

`symi::api::Session — pub fn singular_matrix(&self, subject: &Matrix) -> Result<AssumptionProposition, ApiError>`

Returns `Result<AssumptionProposition, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_solve_as_set.1c359dce5b1b"></a>
### api::Session::solve_as_set

`symi::api::Session — pub fn solve_as_set<'a, VariableType>(&self, equation: &Expression, variable: VariableType) -> Result<Expression, ApiError> where VariableType: Into<VariableLike<'a>>`

Returns `Result<Expression, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_square_matrix.0a9931cc320f"></a>
### api::Session::square_matrix

`symi::api::Session — pub fn square_matrix(&self, subject: &Matrix) -> Result<AssumptionProposition, ApiError>`

Returns `Result<AssumptionProposition, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_substitute_bulk.35ba8d7ed1b5"></a>
### api::Session::substitute_bulk

`symi::api::Session — pub fn substitute_bulk(&self, targets: &[Expression], variable: &Expression, value: &Expression) -> Result<Vec<BulkExpressionOutcome>, ApiError>`

Returns `Result<Vec<BulkExpressionOutcome>, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_subtract.f3fc4dd82d5e"></a>
### api::Session::subtract

`symi::api::Session — pub fn subtract(&self, left: &Expression, right: &Expression) -> Result<Expression, ApiError>`

Returns `Result<Expression, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_symmetric_matrix.1873af1015d0"></a>
### api::Session::symmetric_matrix

`symi::api::Session — pub fn symmetric_matrix(&self, subject: &Matrix) -> Result<AssumptionProposition, ApiError>`

Returns `Result<AssumptionProposition, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_take_completed_operation_report.c84f6b628f83"></a>
### api::Session::take_completed_operation_report

`symi::api::Session — pub fn take_completed_operation_report(&self) -> CompletedOperationReport`

Returns `CompletedOperationReport`.

<a id="placement-placement.rust.native_rust.api_session_take_operation_records.75e98234f3e7"></a>
### api::Session::take_operation_records

`symi::api::Session — pub fn take_operation_records(&self) -> Vec<OperationRecord>`

Returns `Vec<OperationRecord>`.

<a id="placement-placement.rust.native_rust.api_session_transcendental.d066b1b8a0c8"></a>
### api::Session::transcendental

`symi::api::Session — pub fn transcendental(&self, subject: &Expression) -> Result<AssumptionProposition, ApiError>`

Returns `Result<AssumptionProposition, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_unitary_matrix.8fc55fe6e6de"></a>
### api::Session::unitary_matrix

`symi::api::Session — pub fn unitary_matrix(&self, subject: &Matrix) -> Result<AssumptionProposition, ApiError>`

Returns `Result<AssumptionProposition, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_upper_triangular_matrix.c554627e13b3"></a>
### api::Session::upper_triangular_matrix

`symi::api::Session — pub fn upper_triangular_matrix(&self, subject: &Matrix) -> Result<AssumptionProposition, ApiError>`

Returns `Result<AssumptionProposition, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_validate_assumption_proposition.7fb68d9d2c8e"></a>
### api::Session::validate_assumption_proposition

`symi::api::Session — pub fn validate_assumption_proposition(&self, target: &AssumptionProposition) -> Result<(), ApiError>`

Returns `Result<(), ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_validate_circle_2d_object.19c6efde362d"></a>
### api::Session::validate_circle_2d_object

`symi::api::Session — pub fn validate_circle_2d_object(&self, target: &Circle2d) -> Result<(), ApiError>`

Returns `Result<(), ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_validate_cylindrical_algebraic_decomposition_object.52b6f06f720d"></a>
### api::Session::validate_cylindrical_algebraic_decomposition_object

`symi::api::Session — pub fn validate_cylindrical_algebraic_decomposition_object(&self, target: &CylindricalAlgebraicDecomposition) -> Result<(), ApiError>`

Returns `Result<(), ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_validate_expression.b54f4ae2a955"></a>
### api::Session::validate_expression

`symi::api::Session — pub fn validate_expression(&self, target: &Expression) -> Result<(), ApiError>`

Returns `Result<(), ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_validate_generation.e72fcf8c13dd"></a>
### api::Session::validate_generation

`symi::api::Session — pub fn validate_generation(&self, generation: u64) -> Result<(), ApiError>`

Returns `Result<(), ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_validate_matrix_object.a95bf225f1cd"></a>
### api::Session::validate_matrix_object

`symi::api::Session — pub fn validate_matrix_object(&self, target: &Matrix) -> Result<(), ApiError>`

Returns `Result<(), ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_validate_point_2d_object.add1fee81872"></a>
### api::Session::validate_point_2d_object

`symi::api::Session — pub fn validate_point_2d_object(&self, target: &Point2d) -> Result<(), ApiError>`

Returns `Result<(), ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_validate_polygon_2d_object.bd27507d5cc2"></a>
### api::Session::validate_polygon_2d_object

`symi::api::Session — pub fn validate_polygon_2d_object(&self, target: &Polygon2d) -> Result<(), ApiError>`

Returns `Result<(), ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_validate_segment_2d_object.e05b1e81d091"></a>
### api::Session::validate_segment_2d_object

`symi::api::Session — pub fn validate_segment_2d_object(&self, target: &Segment2d) -> Result<(), ApiError>`

Returns `Result<(), ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_validate_session_object.d3b9b21c2514"></a>
### api::Session::validate_session_object

`symi::api::Session — pub fn validate_session_object(&self, generation: u64, object_session: &Session, object_generation: u64) -> Result<(), ApiError>`

Returns `Result<(), ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_validate_triangle_2d_object.8bd60d305883"></a>
### api::Session::validate_triangle_2d_object

`symi::api::Session — pub fn validate_triangle_2d_object(&self, target: &Triangle2d) -> Result<(), ApiError>`

Returns `Result<(), ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_validate_undefined_function_object.442e90b7631e"></a>
### api::Session::validate_undefined_function_object

`symi::api::Session — pub fn validate_undefined_function_object(&self, target: &UndefinedFunction) -> Result<(), ApiError>`

Returns `Result<(), ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_variable_identifiers.dcc3cb9dc75f"></a>
### api::Session::variable_identifiers

`symi::api::Session — pub fn variable_identifiers<'a, IteratorType, VariableType>(&self, variables: IteratorType) -> Result<Vec<crate::symbol::SymbolIdentifier>, ApiError> where IteratorType: IntoIterator<Item = VariableType>, VariableType: Into<VariableLike<'a>>`

Returns `Result<Vec<crate::symbol::SymbolIdentifier>, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_zero.712a12abe984"></a>
### api::Session::zero

`symi::api::Session — pub fn zero(&self, subject: &Expression) -> Result<AssumptionProposition, ApiError>`

Returns `Result<AssumptionProposition, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_zero_matrix.a2c72f8dc46d"></a>
### api::Session::zero_matrix

`symi::api::Session — pub fn zero_matrix(&self, subject: &Matrix) -> Result<AssumptionProposition, ApiError>`

Returns `Result<AssumptionProposition, ApiError>`.

<a id="placement-placement.rust.native_rust.api_setenumeration.460f4f0bf079"></a>
### api::SetEnumeration

`symi::api — pub use results::SetEnumeration;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_smithnormalformdecomposition.8e955dc8ed70"></a>
### api::SmithNormalFormDecomposition

`symi::api — pub use results::SmithNormalFormDecomposition;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_specialfunctionbasis.f2054adf6eff"></a>
### api::SpecialFunctionBasis

`symi::api — pub use options::SpecialFunctionBasis;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_symboldeclaration.ea1f2e5c2494"></a>
### api::SymbolDeclaration

`symi::api — pub struct SymbolDeclaration {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_symboldeclaration_finite.ba52d108961e"></a>
### api::SymbolDeclaration::finite

`symi::api::SymbolDeclaration — pub finite:`

Returns `field`.

<a id="placement-placement.rust.native_rust.api_symboldeclaration_natural.455d307046dd"></a>
### api::SymbolDeclaration::natural

`symi::api::SymbolDeclaration — pub natural:`

Returns `field`.

<a id="placement-placement.rust.native_rust.api_symboldeclaration_negative.564fad1f2247"></a>
### api::SymbolDeclaration::negative

`symi::api::SymbolDeclaration — pub negative:`

Returns `field`.

<a id="placement-placement.rust.native_rust.api_symboldeclaration_nonzero.f19a4992ce86"></a>
### api::SymbolDeclaration::nonzero

`symi::api::SymbolDeclaration — pub nonzero:`

Returns `field`.

<a id="placement-placement.rust.native_rust.api_symboldeclaration_positive.a3b681fcf1fc"></a>
### api::SymbolDeclaration::positive

`symi::api::SymbolDeclaration — pub positive:`

Returns `field`.

<a id="placement-placement.rust.native_rust.api_symboldeclaration_real.a208a60d0b05"></a>
### api::SymbolDeclaration::real

`symi::api::SymbolDeclaration — pub real:`

Returns `field`.

<a id="placement-placement.rust.native_rust.api_systemassignment.833d65025fb7"></a>
### api::SystemAssignment

`symi::api — pub use results::SystemAssignment;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_systemverdict.5e7e5014ce50"></a>
### api::SystemVerdict

`symi::api — pub use results::SystemVerdict;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_triangle2d.a9eb12c7e721"></a>
### api::Triangle2d

`symi::api — pub struct Triangle2d {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_triangle2d_generation.aee85efd23e0"></a>
### api::Triangle2d::generation

`symi::api::Triangle2d — pub fn generation(&self) -> u64`

Returns `u64`.

<a id="placement-placement.rust.native_rust.api_triangle2d_session.bec818cb629d"></a>
### api::Triangle2d::session

`symi::api::Triangle2d — pub fn session(&self) -> Session`

Returns `Session`.

<a id="placement-placement.rust.native_rust.api_trigonometricbasis.0380877356d6"></a>
### api::TrigonometricBasis

`symi::api — pub use options::TrigonometricBasis;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_truthvalue.7c11ba8cd4c3"></a>
### api::TruthValue

`symi::api — pub use crate::assumptions::TruthValue;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_undefinedfunction.1b4ddc574e06"></a>
### api::UndefinedFunction

`symi::api — pub struct UndefinedFunction {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_undefinedfunction_generation.45b7d62fbba7"></a>
### api::UndefinedFunction::generation

`symi::api::UndefinedFunction — pub fn generation(&self) -> u64`

Returns `u64`.

<a id="placement-placement.rust.native_rust.api_undefinedfunction_name.d204382a4ff2"></a>
### api::UndefinedFunction::name

`symi::api::UndefinedFunction — pub fn name(&self) -> &str`

Returns `&str`.

<a id="placement-placement.rust.native_rust.api_undefinedfunction_session.4174a3770f77"></a>
### api::UndefinedFunction::session

`symi::api::UndefinedFunction — pub fn session(&self) -> Session`

Returns `Session`.

<a id="placement-placement.rust.native_rust.api_variablelike.c03e54602c77"></a>
### api::VariableLike

`symi::api — pub enum VariableLike<'a> {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_variablelike_name.7d48ee710203"></a>
### api::VariableLike::Name

`symi::api::VariableLike — Name(&'a str)`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_vectorcalculuserror.19ebd9726717"></a>
### api::VectorCalculusError

`symi::api — pub use crate::vector_calculus::VectorCalculusError;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_vertexangle.987f7208d846"></a>
### api::VertexAngle

`symi::api — pub use results::VertexAngle;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_zeroequivalenceverdict.4803e7d8b36f"></a>
### api::ZeroEquivalenceVerdict

`symi::api — pub use crate::zero_equivalence::ZeroEquivalenceVerdict;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_algebra.a63c75b9f5ab"></a>
### api::algebra

`symi::api — pub mod algebra;`

Returns `module`.

<a id="placement-placement.rust.native_rust.api_analysis.9c0eda85971b"></a>
### api::analysis

`symi::api — pub mod analysis;`

Returns `module`.

<a id="placement-placement.rust.native_rust.api_analysis_default_precision_bits.cfb131343a71"></a>
### api::analysis::DEFAULT_PRECISION_BITS

`symi::api::analysis — pub const DEFAULT_PRECISION_BITS: u32 = numeric::DEFAULT_PRECISION_BITS;`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_defaults.e20fc1a31890"></a>
### api::defaults

`symi::api — pub mod defaults;`

Returns `module`.

<a id="placement-placement.rust.native_rust.api_expression_operations.ff692b0d6e6d"></a>
### api::expression_operations

`symi::api — pub mod expression_operations;`

Returns `module`.

<a id="placement-placement.rust.native_rust.api_expression_operations_expression_length.667a066e0984"></a>
### api::expression_operations::Expression::length

`symi::api::expression_operations::Expression — pub fn length(&self) -> Result<usize, ApiError>`

Returns `Result<usize, ApiError>`.

<a id="placement-placement.rust.native_rust.api_expression_operations_expressiontypename.1db3b711114e"></a>
### api::expression_operations::ExpressionTypeName

`symi::api::expression_operations — pub struct ExpressionTypeName(&'static str);`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_expression_operations_expressiontypename_name.b3c454252ef3"></a>
### api::expression_operations::ExpressionTypeName::name

`symi::api::expression_operations::ExpressionTypeName — pub fn name(&self) -> &'static str`

Returns `&'static str`.

<a id="placement-placement.rust.native_rust.api_geometry_operations.a27159fde83b"></a>
### api::geometry_operations

`symi::api — pub mod geometry_operations;`

Returns `module`.

<a id="placement-placement.rust.native_rust.api_host_cancellation.3b3c4bbf0b8e"></a>
### api::host_cancellation

`symi::api — pub mod host_cancellation;`

Returns `module`.

<a id="placement-placement.rust.native_rust.api_host_cancellation_host_cancellation_slot_count.f5287d76c346"></a>
### api::host_cancellation::HOST_CANCELLATION_SLOT_COUNT

`symi::api::host_cancellation — pub use crate::operation::HOST_CANCELLATION_SLOT_COUNT;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_host_cancellation_hostcancellationslot.19ecc960eaf6"></a>
### api::host_cancellation::HostCancellationSlot

`symi::api::host_cancellation — pub use crate::operation::HostCancellationSlot;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_host_cancellation_host_cancellation_control_address.bd34c3da6a95"></a>
### api::host_cancellation::host_cancellation_control_address

`symi::api::host_cancellation — pub use crate::operation::host_cancellation_control_address;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_host_cancellation_host_cancellation_control_byte_length.1cabe0273b70"></a>
### api::host_cancellation::host_cancellation_control_byte_length

`symi::api::host_cancellation — pub use crate::operation::host_cancellation_control_byte_length;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_host_cancellation_host_cancellation_requested.a94cac722ec6"></a>
### api::host_cancellation::host_cancellation_requested

`symi::api::host_cancellation — pub use crate::operation::host_cancellation_requested;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_host_cancellation_host_cancellation_slot_count.795cc31346fd"></a>
### api::host_cancellation::host_cancellation_slot_count

`symi::api::host_cancellation — pub use crate::operation::host_cancellation_slot_count;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_host_cancellation_host_cancellation_slot_ticket.63a220b5af16"></a>
### api::host_cancellation::host_cancellation_slot_ticket

`symi::api::host_cancellation — pub use crate::operation::host_cancellation_slot_ticket;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_host_cancellation_release_host_cancellation_slot.8aa0bf067ca0"></a>
### api::host_cancellation::release_host_cancellation_slot

`symi::api::host_cancellation — pub use crate::operation::release_host_cancellation_slot;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_host_cancellation_request_host_cancellation.e6ac55c76353"></a>
### api::host_cancellation::request_host_cancellation

`symi::api::host_cancellation — pub use crate::operation::request_host_cancellation;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_host_cancellation_reserve_host_cancellation_slot.2156c8e6ba4c"></a>
### api::host_cancellation::reserve_host_cancellation_slot

`symi::api::host_cancellation — pub use crate::operation::reserve_host_cancellation_slot;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_input.8a9e72fb40a6"></a>
### api::input

`symi::api — pub mod input;`

Returns `module`.

<a id="placement-placement.rust.native_rust.api_input_expressioninput.aaee2f91e0a9"></a>
### api::input::ExpressionInput

`symi::api::input — pub enum ExpressionInput {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_input_expressioninput_exactintegertext.de2b684ab811"></a>
### api::input::ExpressionInput::ExactIntegerText

`symi::api::input::ExpressionInput — ExactIntegerText(String)`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_input_expressioninput_exactrationaltext.da969c41ea0d"></a>
### api::input::ExpressionInput::ExactRationalText

`symi::api::input::ExpressionInput — ExactRationalText(String)`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_input_expressioninput_expression.392f34bb53e6"></a>
### api::input::ExpressionInput::Expression

`symi::api::input::ExpressionInput — Expression(Expression)`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_input_expressioninput_expressiontext.acbd8005e1a3"></a>
### api::input::ExpressionInput::ExpressionText

`symi::api::input::ExpressionInput — ExpressionText(String)`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_input_expressioninput_resolve.8f8b607049d0"></a>
### api::input::ExpressionInput::resolve

`symi::api::input::ExpressionInput — pub fn resolve(self, session: &Session) -> Result<Expression, ApiError>`

Returns `Result<Expression, ApiError>`.

<a id="placement-placement.rust.native_rust.api_logic.6fdadc26a67d"></a>
### api::logic

`symi::api — pub mod logic;`

Returns `module`.

<a id="placement-placement.rust.native_rust.api_logic_quantifier.b446560d7208"></a>
### api::logic::Quantifier

`symi::api::logic — pub enum Quantifier {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_logic_quantifier_exists.7d665d0bd1ac"></a>
### api::logic::Quantifier::Exists

`symi::api::logic::Quantifier — Exists`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_logic_quantifier_forall.80a8122de96b"></a>
### api::logic::Quantifier::Forall

`symi::api::logic::Quantifier — Forall`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_logic_quantifier_from_name.bd74c063277e"></a>
### api::logic::Quantifier::from_name

`symi::api::logic::Quantifier — pub fn from_name(name: &str) -> Result<Self, ApiError>`

Returns `Result<Self, ApiError>`.

<a id="placement-placement.rust.native_rust.api_logic_quantifier_name.313f614c038a"></a>
### api::logic::Quantifier::name

`symi::api::logic::Quantifier — pub fn name(&self) -> &'static str`

Returns `&'static str`.

<a id="placement-placement.rust.native_rust.api_matrix_operations.6c27bc0ecbf7"></a>
### api::matrix_operations

`symi::api — pub mod matrix_operations;`

Returns `module`.

<a id="placement-placement.rust.native_rust.api_number_theory.2093aae9a4f2"></a>
### api::number_theory

`symi::api — pub mod number_theory;`

Returns `module`.

<a id="placement-placement.rust.native_rust.api_number_theory_session_prime_factorization.61a7a4c2c18b"></a>
### api::number_theory::Session::prime_factorization

`symi::api::number_theory::Session — pub fn prime_factorization(&self, value: &Expression) -> Result<Vec<PrimeFactor>, ApiError>`

Returns `Result<Vec<PrimeFactor>, ApiError>`.

<a id="placement-placement.rust.native_rust.api_options.d99f6301ef41"></a>
### api::options

`symi::api — pub mod options;`

Returns `module`.

<a id="placement-placement.rust.native_rust.api_options_monomialordering.b021b8be344d"></a>
### api::options::MonomialOrdering

`symi::api::options — pub enum MonomialOrdering {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_options_monomialordering_degreelexicographic.bea681905252"></a>
### api::options::MonomialOrdering::DegreeLexicographic

`symi::api::options::MonomialOrdering — DegreeLexicographic`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_options_monomialordering_degreereverselexicographic.2c8f91130c10"></a>
### api::options::MonomialOrdering::DegreeReverseLexicographic

`symi::api::options::MonomialOrdering — DegreeReverseLexicographic`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_options_monomialordering_lexicographic.88f77b3d2878"></a>
### api::options::MonomialOrdering::Lexicographic

`symi::api::options::MonomialOrdering — Lexicographic`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_options_monomialordering_from_name.2ef0b3c4fa69"></a>
### api::options::MonomialOrdering::from_name

`symi::api::options::MonomialOrdering — pub fn from_name(name: &str) -> Result<Self, ApiError>`

Returns `Result<Self, ApiError>`.

<a id="placement-placement.rust.native_rust.api_options_monomialordering_into_core.3fd1df78cd24"></a>
### api::options::MonomialOrdering::into_core

`symi::api::options::MonomialOrdering — pub fn into_core(self) -> crate::polynomial::monomial_order::MonomialOrder`

Returns `crate::polynomial::monomial_order::MonomialOrder`.

<a id="placement-placement.rust.native_rust.api_options_monomialordering_name.b8d9abcd99e9"></a>
### api::options::MonomialOrdering::name

`symi::api::options::MonomialOrdering — pub fn name(self) -> &'static str`

Returns `&'static str`.

<a id="placement-placement.rust.native_rust.api_options_orthogonalpolynomialbasis.04fb9abf1806"></a>
### api::options::OrthogonalPolynomialBasis

`symi::api::options — pub struct OrthogonalPolynomialBasis {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_options_orthogonalpolynomialbasis_family.5c6b79da197b"></a>
### api::options::OrthogonalPolynomialBasis::family

`symi::api::options::OrthogonalPolynomialBasis — pub family:`

Returns `field`.

<a id="placement-placement.rust.native_rust.api_options_orthogonalpolynomialbasis_new.c2f18c2e4f4e"></a>
### api::options::OrthogonalPolynomialBasis::new

`symi::api::options::OrthogonalPolynomialBasis — pub fn new(family: OrthogonalPolynomialFamily, parameters: Vec<Expression>) -> Self`

Returns `Self`.

<a id="placement-placement.rust.native_rust.api_options_orthogonalpolynomialbasis_parameters.3ac78ae0483d"></a>
### api::options::OrthogonalPolynomialBasis::parameters

`symi::api::options::OrthogonalPolynomialBasis — pub parameters:`

Returns `field`.

<a id="placement-placement.rust.native_rust.api_options_orthogonalpolynomialbasis_resolve.9db79e15663b"></a>
### api::options::OrthogonalPolynomialBasis::resolve

`symi::api::options::OrthogonalPolynomialBasis — pub fn resolve(&self, session: &Session) -> Result<core_basis, ApiError>`

Returns `Result<core_basis, ApiError>`.

<a id="placement-placement.rust.native_rust.api_options_orthogonalpolynomialfamily.44acbda7c6fa"></a>
### api::options::OrthogonalPolynomialFamily

`symi::api::options — pub enum OrthogonalPolynomialFamily {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_options_orthogonalpolynomialfamily_chebyshevfirstkind.f402e01d4aad"></a>
### api::options::OrthogonalPolynomialFamily::ChebyshevFirstKind

`symi::api::options::OrthogonalPolynomialFamily — ChebyshevFirstKind`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_options_orthogonalpolynomialfamily_chebyshevsecondkind.4dd13b2911ea"></a>
### api::options::OrthogonalPolynomialFamily::ChebyshevSecondKind

`symi::api::options::OrthogonalPolynomialFamily — ChebyshevSecondKind`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_options_orthogonalpolynomialfamily_gegenbauer.b87109555ffa"></a>
### api::options::OrthogonalPolynomialFamily::Gegenbauer

`symi::api::options::OrthogonalPolynomialFamily — Gegenbauer`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_options_orthogonalpolynomialfamily_generalizedlaguerre.ec30b467ff32"></a>
### api::options::OrthogonalPolynomialFamily::GeneralizedLaguerre

`symi::api::options::OrthogonalPolynomialFamily — GeneralizedLaguerre`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_options_orthogonalpolynomialfamily_hermite.79244af84bf2"></a>
### api::options::OrthogonalPolynomialFamily::Hermite

`symi::api::options::OrthogonalPolynomialFamily — Hermite`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_options_orthogonalpolynomialfamily_jacobi.dbde0db1762c"></a>
### api::options::OrthogonalPolynomialFamily::Jacobi

`symi::api::options::OrthogonalPolynomialFamily — Jacobi`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_options_orthogonalpolynomialfamily_legendre.8405507b168d"></a>
### api::options::OrthogonalPolynomialFamily::Legendre

`symi::api::options::OrthogonalPolynomialFamily — Legendre`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_options_orthogonalpolynomialfamily_from_name.c56e40287b82"></a>
### api::options::OrthogonalPolynomialFamily::from_name

`symi::api::options::OrthogonalPolynomialFamily — pub fn from_name(name: &str) -> Result<Self, ApiError>`

Returns `Result<Self, ApiError>`.

<a id="placement-placement.rust.native_rust.api_options_orthogonalpolynomialfamily_into_core.a609221c1904"></a>
### api::options::OrthogonalPolynomialFamily::into_core

`symi::api::options::OrthogonalPolynomialFamily — pub fn into_core(self) -> core_family`

Returns `core_family`.

<a id="placement-placement.rust.native_rust.api_options_orthogonalpolynomialfamily_name.ae01d85e05b7"></a>
### api::options::OrthogonalPolynomialFamily::name

`symi::api::options::OrthogonalPolynomialFamily — pub fn name(self) -> &'static str`

Returns `&'static str`.

<a id="placement-placement.rust.native_rust.api_options_orthogonalpolynomialfamily_parameter_count.b0eccf408a90"></a>
### api::options::OrthogonalPolynomialFamily::parameter_count

`symi::api::options::OrthogonalPolynomialFamily — pub fn parameter_count(self) -> usize`

Returns `usize`.

<a id="placement-placement.rust.native_rust.api_options_specialfunctionbasis.8a938ead48ae"></a>
### api::options::SpecialFunctionBasis

`symi::api::options — pub enum SpecialFunctionBasis {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_options_specialfunctionbasis_risingfactorial.91ed4bccc8a5"></a>
### api::options::SpecialFunctionBasis::RisingFactorial

`symi::api::options::SpecialFunctionBasis — RisingFactorial`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_options_specialfunctionbasis_from_name.d93c2e65f252"></a>
### api::options::SpecialFunctionBasis::from_name

`symi::api::options::SpecialFunctionBasis — pub fn from_name(name: &str) -> Result<Self, ApiError>`

Returns `Result<Self, ApiError>`.

<a id="placement-placement.rust.native_rust.api_options_specialfunctionbasis_into_core.75fb0f7731fe"></a>
### api::options::SpecialFunctionBasis::into_core

`symi::api::options::SpecialFunctionBasis — pub fn into_core(self) -> crate::special_function_basis::SpecialFunctionBasis`

Returns `crate::special_function_basis::SpecialFunctionBasis`.

<a id="placement-placement.rust.native_rust.api_options_specialfunctionbasis_name.cd6b7c9cd288"></a>
### api::options::SpecialFunctionBasis::name

`symi::api::options::SpecialFunctionBasis — pub fn name(self) -> &'static str`

Returns `&'static str`.

<a id="placement-placement.rust.native_rust.api_options_trigonometricbasis.6de4c69b8375"></a>
### api::options::TrigonometricBasis

`symi::api::options — pub enum TrigonometricBasis {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_options_trigonometricbasis_exponential.82c3c4a251f8"></a>
### api::options::TrigonometricBasis::Exponential

`symi::api::options::TrigonometricBasis — Exponential`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_options_trigonometricbasis_hyperbolic.7e3b74521ebd"></a>
### api::options::TrigonometricBasis::Hyperbolic

`symi::api::options::TrigonometricBasis — Hyperbolic`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_options_trigonometricbasis_sinecosine.b88538ee3214"></a>
### api::options::TrigonometricBasis::SineCosine

`symi::api::options::TrigonometricBasis — SineCosine`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_options_trigonometricbasis_tangent.88fc9383eac6"></a>
### api::options::TrigonometricBasis::Tangent

`symi::api::options::TrigonometricBasis — Tangent`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_options_trigonometricbasis_trigonometric.bd255fbdf7b1"></a>
### api::options::TrigonometricBasis::Trigonometric

`symi::api::options::TrigonometricBasis — Trigonometric`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_options_trigonometricbasis_from_name.d0168bcf1b69"></a>
### api::options::TrigonometricBasis::from_name

`symi::api::options::TrigonometricBasis — pub fn from_name(name: &str) -> Result<Self, ApiError>`

Returns `Result<Self, ApiError>`.

<a id="placement-placement.rust.native_rust.api_options_trigonometricbasis_into_core.4cf22b1b58bd"></a>
### api::options::TrigonometricBasis::into_core

`symi::api::options::TrigonometricBasis — pub fn into_core(self) -> crate::trigonometry::TrigonometricBasis`

Returns `crate::trigonometry::TrigonometricBasis`.

<a id="placement-placement.rust.native_rust.api_options_trigonometricbasis_name.27b45cf14ace"></a>
### api::options::TrigonometricBasis::name

`symi::api::options::TrigonometricBasis — pub fn name(self) -> &'static str`

Returns `&'static str`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations.f3797eeb2ee3"></a>
### api::ordinary_differential_equations

`symi::api — pub mod ordinary_differential_equations;`

Returns `module`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_differentialequationsolutionscope.21391b50eeec"></a>
### api::ordinary_differential_equations::DifferentialEquationSolutionScope

`symi::api::ordinary_differential_equations — pub enum DifferentialEquationSolutionScope {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_differentialequationsolutionscope_general.25d78a5b7872"></a>
### api::ordinary_differential_equations::DifferentialEquationSolutionScope::General

`symi::api::ordinary_differential_equations::DifferentialEquationSolutionScope — General`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_differentialequationsolutionscope_particular.6da519c69a4e"></a>
### api::ordinary_differential_equations::DifferentialEquationSolutionScope::Particular

`symi::api::ordinary_differential_equations::DifferentialEquationSolutionScope — Particular`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_differentialequationsolutionscope_from_name.52ad6eb58468"></a>
### api::ordinary_differential_equations::DifferentialEquationSolutionScope::from_name

`symi::api::ordinary_differential_equations::DifferentialEquationSolutionScope — pub fn from_name(name: &str) -> Result<Self, ApiError>`

Returns `Result<Self, ApiError>`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_differentialequationsolutionscope_name.c53bd561c22d"></a>
### api::ordinary_differential_equations::DifferentialEquationSolutionScope::name

`symi::api::ordinary_differential_equations::DifferentialEquationSolutionScope — pub fn name(self) -> &'static str`

Returns `&'static str`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationgeneralityverdict.756670f9ca05"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationGeneralityVerdict

`symi::api::ordinary_differential_equations — pub enum OrdinaryDifferentialEquationGeneralityVerdict {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationgeneralityverdict_deficient.9369a092fce8"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationGeneralityVerdict::Deficient

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationGeneralityVerdict — Deficient`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationgeneralityverdict_fullrank.d957199069d6"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationGeneralityVerdict::FullRank

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationGeneralityVerdict — FullRank`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationgeneralityverdict_inconclusive.1b20c61515b4"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationGeneralityVerdict::Inconclusive

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationGeneralityVerdict — Inconclusive`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationgeneralityverdict_name.607d4290863a"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationGeneralityVerdict::name

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationGeneralityVerdict — pub fn name(self) -> &'static str`

Returns `&'static str`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationmethod.321d5f690dc2"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationMethod

`symi::api::ordinary_differential_equations — pub enum OrdinaryDifferentialEquationMethod {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationmethod_automatic.b30c589319a8"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationMethod::Automatic

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationMethod — Automatic`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationmethod_laplacetransform.fcf7addbfb15"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationMethod::LaplaceTransform

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationMethod — LaplaceTransform`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationmethod_from_name.bbf0326541ef"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationMethod::from_name

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationMethod — pub fn from_name(name: &str) -> Result<Self, ApiError>`

Returns `Result<Self, ApiError>`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationmethod_name.e612cbbc3432"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationMethod::name

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationMethod — pub fn name(self) -> &'static str`

Returns `&'static str`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationregularity.7235b2896423"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationRegularity

`symi::api::ordinary_differential_equations — pub enum OrdinaryDifferentialEquationRegularity {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationregularity_classical.dc27dfcf3c6e"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationRegularity::Classical

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationRegularity — Classical`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationregularity_piecewiseclassical.755297d1f61a"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationRegularity::PiecewiseClassical

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationRegularity — PiecewiseClassical`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationregularity_from_name.6d59418b38d5"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationRegularity::from_name

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationRegularity — pub fn from_name(name: &str) -> Result<Self, ApiError>`

Returns `Result<Self, ApiError>`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationregularity_name.f5e9c20ca64b"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationRegularity::name

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationRegularity — pub fn name(self) -> &'static str`

Returns `&'static str`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolutionform.b5eec4ffd453"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationSolutionForm

`symi::api::ordinary_differential_equations — pub enum OrdinaryDifferentialEquationSolutionForm {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolutionform_explicit.4b91f2707469"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationSolutionForm::Explicit

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationSolutionForm — Explicit`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolutionform_implicit.ee0d83b8817f"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationSolutionForm::Implicit

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationSolutionForm — Implicit`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolutionform_name.c6d0d2c0ffc0"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationSolutionForm::name

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationSolutionForm — pub fn name(self) -> &'static str`

Returns `&'static str`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline.8b53ff20f3ff"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline

`symi::api::ordinary_differential_equations — pub enum OrdinaryDifferentialEquationSolveDecline {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_accumulatedoccurrencenotsupported.c0a55a9cf92e"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline::AccumulatedOccurrenceNotSupported

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline — AccumulatedOccurrenceNotSupported`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_candidatenotverified.ead16ac40494"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline::CandidateNotVerified

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline — CandidateNotVerified`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_conditionsnotfitted.a9cecabb0f61"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline::ConditionsNotFitted

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline — ConditionsNotFitted`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_delayfamilynotavailable.e7edab62806e"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline::DelayFamilyNotAvailable

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline — DelayFamilyNotAvailable`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_delayfamilynotcertified.2d6e0d172464"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline::DelayFamilyNotCertified

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline — DelayFamilyNotCertified`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_displacedoccurrencenotsupported.8c76fef42d22"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline::DisplacedOccurrenceNotSupported

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline — DisplacedOccurrenceNotSupported`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_generalfamilynotestablished.935df98571c9"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline::GeneralFamilyNotEstablished

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline — GeneralFamilyNotEstablished`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_generalfamilyrankundecided.f8a4c1a4e10d"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline::GeneralFamilyRankUndecided

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline — GeneralFamilyRankUndecided`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_norouterecognizedtheequation.ea034136a624"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline::NoRouteRecognizedTheEquation

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline — NoRouteRecognizedTheEquation`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_switchedcoefficientsnotsolved.baa7ba577d6c"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline::SwitchedCoefficientsNotSolved

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline — SwitchedCoefficientsNotSolved`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_transformdidnotreachthefrequencydomain.ced1d90970d7"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline::TransformDidNotReachTheFrequencyDomain

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline — TransformDidNotReachTheFrequencyDomain`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_transforminversiondeclined.d693985a3999"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline::TransformInversionDeclined

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline — TransformInversionDeclined`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_transformrequirescompleteorigindata.af96e62b28f7"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline::TransformRequiresCompleteOriginData

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline — TransformRequiresCompleteOriginData`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_transformrequiresscalarsignature.6c236342059a"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline::TransformRequiresScalarSignature

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline — TransformRequiresScalarSignature`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_transformedequationnotsolvable.7a1b5118775b"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline::TransformedEquationNotSolvable

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline — TransformedEquationNotSolvable`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_volterraendpointdataincompatible.a26b5d3c2986"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline::VolterraEndpointDataIncompatible

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline — VolterraEndpointDataIncompatible`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_volterraendpointdatamissing.6ba9001c7959"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline::VolterraEndpointDataMissing

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline — VolterraEndpointDataMissing`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_volterrakernelnotsupported.6e94d776539e"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline::VolterraKernelNotSupported

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline — VolterraKernelNotSupported`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_name.769c6a05c154"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline::name

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline — pub fn name(self) -> &'static str`

Returns `&'static str`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_decline.cfda67cbfcd6"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveResult::decline

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveResult — pub fn decline(&self) -> Option<OrdinaryDifferentialEquationSolveDecline>`

Returns `Option<OrdinaryDifferentialEquationSolveDecline>`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_form.ff1a220bcc6d"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveResult::form

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveResult — pub fn form(&self) -> Option<OrdinaryDifferentialEquationSolutionForm>`

Returns `Option<OrdinaryDifferentialEquationSolutionForm>`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_frequency_domain_equation.e9b8d505136f"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveResult::frequency_domain_equation

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveResult — pub fn frequency_domain_equation(&self) -> Option<Expression>`

Returns `Option<Expression>`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_generality.80070a59f54e"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveResult::generality

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveResult — pub fn generality(&self) -> Option<OrdinaryDifferentialEquationGeneralityVerdict>`

Returns `Option<OrdinaryDifferentialEquationGeneralityVerdict>`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_generated_constants.afb0e278f65d"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveResult::generated_constants

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveResult — pub fn generated_constants(&self) -> Vec<Expression>`

Returns `Vec<Expression>`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_image.e206a0f982f7"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveResult::image

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveResult — pub fn image(&self) -> Option<Expression>`

Returns `Option<Expression>`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_method.515cb2bf6195"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveResult::method

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveResult — pub fn method(&self) -> OrdinaryDifferentialEquationMethod`

Returns `OrdinaryDifferentialEquationMethod`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_solution.c5fafb37ab2b"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveResult::solution

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveResult — pub fn solution(&self) -> Option<Expression>`

Returns `Option<Expression>`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_verification.c3501e58ad3e"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveResult::verification

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveResult — pub fn verification(&self) -> Option<OrdinaryDifferentialEquationVerificationVerdict>`

Returns `Option<OrdinaryDifferentialEquationVerificationVerdict>`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolveverdict.3c2cf5c9c482"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveVerdict

`symi::api::ordinary_differential_equations — pub enum OrdinaryDifferentialEquationSolveVerdict {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolveverdict_declined.3e435f7a698d"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveVerdict::Declined

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveVerdict — Declined`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolveverdict_solved.bd289a7877a5"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveVerdict::Solved

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveVerdict — Solved`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolveverdict_name.b3e03d37c2c0"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveVerdict::name

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveVerdict — pub fn name(self) -> &'static str`

Returns `&'static str`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemmethod.12281da804cb"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemMethod

`symi::api::ordinary_differential_equations — pub enum OrdinaryDifferentialEquationSystemMethod {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemmethod_automatic.40d247fbd2e4"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemMethod::Automatic

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemMethod — Automatic`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemmethod_fundamentalmatrix.6cf114159bc5"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemMethod::FundamentalMatrix

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemMethod — FundamentalMatrix`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemmethod_sequential.c7dd9aa34958"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemMethod::Sequential

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemMethod — Sequential`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemmethod_from_name.9dd28a30c61e"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemMethod::from_name

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemMethod — pub fn from_name(name: &str) -> Result<Self, ApiError>`

Returns `Result<Self, ApiError>`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemmethod_name.d315f5ca90e2"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemMethod::name

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemMethod — pub fn name(self) -> &'static str`

Returns `&'static str`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemroute.c500ade1be07"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemRoute

`symi::api::ordinary_differential_equations — pub enum OrdinaryDifferentialEquationSystemRoute {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemroute_dependencyblocks.6ba61a19884c"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemRoute::DependencyBlocks

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemRoute — DependencyBlocks`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemroute_fundamentalmatrix.aef6001db575"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemRoute::FundamentalMatrix

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemRoute — FundamentalMatrix`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemroute_sequential.57400d958a4a"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemRoute::Sequential

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemRoute — Sequential`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemroute_name.dada940b6d44"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemRoute::name

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemRoute — pub fn name(self) -> &'static str`

Returns `&'static str`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemsolvedecline.7b01e381ac16"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveDecline

`symi::api::ordinary_differential_equations — pub enum OrdinaryDifferentialEquationSystemSolveDecline {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemsolvedecline_componentrequestdeclined.cf99c8099ba9"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveDecline::ComponentRequestDeclined

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveDecline — ComponentRequestDeclined`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemsolvedecline_componentsolutionisnotexplicit.423a131229b9"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveDecline::ComponentSolutionIsNotExplicit

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveDecline — ComponentSolutionIsNotExplicit`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemsolvedecline_conditionsdonotdeterminetheconstants.97172f330605"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveDecline::ConditionsDoNotDetermineTheConstants

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveDecline — ConditionsDoNotDetermineTheConstants`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemsolvedecline_forcinghasnoexactparticularstate.2acfc81696d5"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveDecline::ForcingHasNoExactParticularState

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveDecline — ForcingHasNoExactParticularState`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemsolvedecline_fundamentalmatrixunavailable.852f878e1aa1"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveDecline::FundamentalMatrixUnavailable

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveDecline — FundamentalMatrixUnavailable`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemsolvedecline_nosequentialorderingexists.5cd2eca927c4"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveDecline::NoSequentialOrderingExists

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveDecline — NoSequentialOrderingExists`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemsolvedecline_solutionnotverified.05201369d549"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveDecline::SolutionNotVerified

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveDecline — SolutionNotVerified`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemsolvedecline_stateformunavailable.5dbbe8c6c6a4"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveDecline::StateFormUnavailable

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveDecline — StateFormUnavailable`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemsolvedecline_name.23bc736f1eaf"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveDecline::name

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveDecline — pub fn name(self) -> &'static str`

Returns `&'static str`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_components.a2cc038c1a89"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveResult::components

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveResult — pub fn components(&self) -> Vec<Expression>`

Returns `Vec<Expression>`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_decline.92acc8d04a31"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveResult::decline

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveResult — pub fn decline(&self) -> Option<OrdinaryDifferentialEquationSystemSolveDecline>`

Returns `Option<OrdinaryDifferentialEquationSystemSolveDecline>`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_generality.f69fe7509812"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveResult::generality

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveResult — pub fn generality(&self) -> Option<OrdinaryDifferentialEquationGeneralityVerdict>`

Returns `Option<OrdinaryDifferentialEquationGeneralityVerdict>`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_generated_constants.2039662fe54b"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveResult::generated_constants

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveResult — pub fn generated_constants(&self) -> Vec<Expression>`

Returns `Vec<Expression>`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_method.aaa17853183c"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveResult::method

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveResult — pub fn method(&self) -> OrdinaryDifferentialEquationSystemMethod`

Returns `OrdinaryDifferentialEquationSystemMethod`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_route.ac7473fa22e8"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveResult::route

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveResult — pub fn route(&self) -> Option<OrdinaryDifferentialEquationSystemRoute>`

Returns `Option<OrdinaryDifferentialEquationSystemRoute>`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_verification.130b6dbdde8e"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveResult::verification

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveResult — pub fn verification(&self) -> Option<OrdinaryDifferentialEquationVerificationVerdict>`

Returns `Option<OrdinaryDifferentialEquationVerificationVerdict>`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemverificationreport_generality.935dc6a6df27"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemVerificationReport::generality

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemVerificationReport — pub fn generality(&self) -> OrdinaryDifferentialEquationGeneralityVerdict`

Returns `OrdinaryDifferentialEquationGeneralityVerdict`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemverificationreport_required_rank.b031b3cd46b7"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemVerificationReport::required_rank

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemVerificationReport — pub fn required_rank(&self) -> usize`

Returns `usize`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationverificationverdict.dca6b46825a4"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationVerificationVerdict

`symi::api::ordinary_differential_equations — pub enum OrdinaryDifferentialEquationVerificationVerdict {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationverificationverdict_inconclusive.765ed001e56f"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationVerificationVerdict::Inconclusive

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationVerificationVerdict — Inconclusive`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationverificationverdict_rejected.04e721d29182"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationVerificationVerdict::Rejected

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationVerificationVerdict — Rejected`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationverificationverdict_verified.0474fd98b8fc"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationVerificationVerdict::Verified

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationVerificationVerdict — Verified`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationverificationverdict_name.e26bb16f05d1"></a>
### api::ordinary_differential_equations::OrdinaryDifferentialEquationVerificationVerdict::name

`symi::api::ordinary_differential_equations::OrdinaryDifferentialEquationVerificationVerdict — pub fn name(self) -> &'static str`

Returns `&'static str`.

<a id="placement-placement.rust.native_rust.api_parallelism.0b8ef0c196d2"></a>
### api::parallelism

`symi::api — pub mod parallelism;`

Returns `module`.

<a id="placement-placement.rust.native_rust.api_parallelism_bulkexpressionoutcome.8f5cf62231be"></a>
### api::parallelism::BulkExpressionOutcome

`symi::api::parallelism — pub enum BulkExpressionOutcome {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_parallelism_bulkexpressionoutcome_diagnostic.c7ed3ce5f5a1"></a>
### api::parallelism::BulkExpressionOutcome::diagnostic

`symi::api::parallelism::BulkExpressionOutcome — pub fn diagnostic(&self) -> Option<Diagnostic>`

Returns `Option<Diagnostic>`.

<a id="placement-placement.rust.native_rust.api_parallelism_bulkexpressionoutcome_index.b17b37fb3bea"></a>
### api::parallelism::BulkExpressionOutcome::index

`symi::api::parallelism::BulkExpressionOutcome — pub fn index(&self) -> usize`

Returns `usize`.

<a id="placement-placement.rust.native_rust.api_parallelism_bulkexpressionoutcome_is_value.18a97f7cb3a4"></a>
### api::parallelism::BulkExpressionOutcome::is_value

`symi::api::parallelism::BulkExpressionOutcome — pub fn is_value(&self) -> bool`

Returns `bool`.

<a id="placement-placement.rust.native_rust.api_parallelism_bulkexpressionoutcome_value.5e821544b58e"></a>
### api::parallelism::BulkExpressionOutcome::value

`symi::api::parallelism::BulkExpressionOutcome — pub fn value(&self) -> Option<Expression>`

Returns `Option<Expression>`.

<a id="placement-placement.rust.native_rust.api_parallelism_bulktextoutcome.dfbfecf535bc"></a>
### api::parallelism::BulkTextOutcome

`symi::api::parallelism — pub enum BulkTextOutcome {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_parallelism_bulktextoutcome_diagnostic.3944a0539397"></a>
### api::parallelism::BulkTextOutcome::diagnostic

`symi::api::parallelism::BulkTextOutcome — pub fn diagnostic(&self) -> Option<Diagnostic>`

Returns `Option<Diagnostic>`.

<a id="placement-placement.rust.native_rust.api_parallelism_bulktextoutcome_index.5d89e00f654b"></a>
### api::parallelism::BulkTextOutcome::index

`symi::api::parallelism::BulkTextOutcome — pub fn index(&self) -> usize`

Returns `usize`.

<a id="placement-placement.rust.native_rust.api_parallelism_bulktextoutcome_value.cff0adc3debe"></a>
### api::parallelism::BulkTextOutcome::value

`symi::api::parallelism::BulkTextOutcome — pub fn value(&self) -> Option<String>`

Returns `Option<String>`.

<a id="placement-placement.rust.native_rust.api_parallelism_parallelbackend.8ffc266e8d65"></a>
### api::parallelism::ParallelBackend

`symi::api::parallelism — pub enum ParallelBackend {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_parallelism_parallelbackend_rayonnative.03ea657042db"></a>
### api::parallelism::ParallelBackend::RayonNative

`symi::api::parallelism::ParallelBackend — RayonNative`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_parallelism_parallelbackend_rayonwasm.fc9711924f04"></a>
### api::parallelism::ParallelBackend::RayonWasm

`symi::api::parallelism::ParallelBackend — RayonWasm`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_parallelism_parallelbackend_sequential.1665974981f0"></a>
### api::parallelism::ParallelBackend::Sequential

`symi::api::parallelism::ParallelBackend — Sequential`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_parallelism_parallelbackend_name.e82ae3d1897e"></a>
### api::parallelism::ParallelBackend::name

`symi::api::parallelism::ParallelBackend — pub fn name(self) -> &'static str`

Returns `&'static str`.

<a id="placement-placement.rust.native_rust.api_parallelism_parallelismcapability.77961bf650dd"></a>
### api::parallelism::ParallelismCapability

`symi::api::parallelism — pub struct ParallelismCapability {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_parallelism_parallelismcapability_active.de58d178fa3a"></a>
### api::parallelism::ParallelismCapability::active

`symi::api::parallelism::ParallelismCapability — pub active:`

Returns `field`.

<a id="placement-placement.rust.native_rust.api_parallelism_parallelismcapability_backend.dd12831f715d"></a>
### api::parallelism::ParallelismCapability::backend

`symi::api::parallelism::ParallelismCapability — pub backend:`

Returns `field`.

<a id="placement-placement.rust.native_rust.api_parallelism_parallelismcapability_compiled.b02ee3c2a3d6"></a>
### api::parallelism::ParallelismCapability::compiled

`symi::api::parallelism::ParallelismCapability — pub compiled:`

Returns `field`.

<a id="placement-placement.rust.native_rust.api_parallelism_parallelismcapability_initialized.0738550bec7a"></a>
### api::parallelism::ParallelismCapability::initialized

`symi::api::parallelism::ParallelismCapability — pub initialized:`

Returns `field`.

<a id="placement-placement.rust.native_rust.api_parallelism_parallelismcapability_is_parallel.7df139ae72a4"></a>
### api::parallelism::ParallelismCapability::is_parallel

`symi::api::parallelism::ParallelismCapability — pub fn is_parallel(&self) -> bool`

Returns `bool`.

<a id="placement-placement.rust.native_rust.api_parallelism_parallelismcapability_maximum_operation_concurrency.40ba0134ec3e"></a>
### api::parallelism::ParallelismCapability::maximum_operation_concurrency

`symi::api::parallelism::ParallelismCapability — pub maximum_operation_concurrency:`

Returns `field`.

<a id="placement-placement.rust.native_rust.api_parallelism_parallelismcapability_selected_mode.ce31d9778409"></a>
### api::parallelism::ParallelismCapability::selected_mode

`symi::api::parallelism::ParallelismCapability — pub selected_mode:`

Returns `field`.

<a id="placement-placement.rust.native_rust.api_parallelism_parallelismcapability_unavailable_reason.3f95ef352ce9"></a>
### api::parallelism::ParallelismCapability::unavailable_reason

`symi::api::parallelism::ParallelismCapability — pub unavailable_reason:`

Returns `field`.

<a id="placement-placement.rust.native_rust.api_parallelism_parallelismcapability_worker_count.f5274b8258c2"></a>
### api::parallelism::ParallelismCapability::worker_count

`symi::api::parallelism::ParallelismCapability — pub worker_count:`

Returns `field`.

<a id="placement-placement.rust.native_rust.api_parallelism_parallelisminitialization.30fdfc4d0acd"></a>
### api::parallelism::ParallelismInitialization

`symi::api::parallelism — pub enum ParallelismInitialization {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_parallelism_parallelisminitialization_alreadyinitialized.ca61a86e32b6"></a>
### api::parallelism::ParallelismInitialization::AlreadyInitialized

`symi::api::parallelism::ParallelismInitialization — AlreadyInitialized`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_parallelism_parallelisminitialization_initialized.a1076f6e5b78"></a>
### api::parallelism::ParallelismInitialization::Initialized

`symi::api::parallelism::ParallelismInitialization — Initialized`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_parallelism_parallelisminitialization_name.3283042fb037"></a>
### api::parallelism::ParallelismInitialization::name

`symi::api::parallelism::ParallelismInitialization — pub fn name(self) -> &'static str`

Returns `&'static str`.

<a id="placement-placement.rust.native_rust.api_parallelism_parallelismunavailablereason.d739bec642e8"></a>
### api::parallelism::ParallelismUnavailableReason

`symi::api::parallelism — pub enum ParallelismUnavailableReason {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_parallelism_parallelismunavailablereason_crossoriginisolationunavailable.141728a03495"></a>
### api::parallelism::ParallelismUnavailableReason::CrossOriginIsolationUnavailable

`symi::api::parallelism::ParallelismUnavailableReason — CrossOriginIsolationUnavailable`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_parallelism_parallelismunavailablereason_initializationfailed.a7b27ab068e8"></a>
### api::parallelism::ParallelismUnavailableReason::InitializationFailed

`symi::api::parallelism::ParallelismUnavailableReason — InitializationFailed`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_parallelism_parallelismunavailablereason_notcompiled.6c042cdae0dc"></a>
### api::parallelism::ParallelismUnavailableReason::NotCompiled

`symi::api::parallelism::ParallelismUnavailableReason — NotCompiled`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_parallelism_parallelismunavailablereason_notinitialized.b9a0aa42bae1"></a>
### api::parallelism::ParallelismUnavailableReason::NotInitialized

`symi::api::parallelism::ParallelismUnavailableReason — NotInitialized`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_parallelism_parallelismunavailablereason_sharedmemoryunavailable.3b938d4ca57f"></a>
### api::parallelism::ParallelismUnavailableReason::SharedMemoryUnavailable

`symi::api::parallelism::ParallelismUnavailableReason — SharedMemoryUnavailable`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_parallelism_parallelismunavailablereason_singleworker.1e375cb18c79"></a>
### api::parallelism::ParallelismUnavailableReason::SingleWorker

`symi::api::parallelism::ParallelismUnavailableReason — SingleWorker`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_parallelism_parallelismunavailablereason_name.ee580b70862d"></a>
### api::parallelism::ParallelismUnavailableReason::name

`symi::api::parallelism::ParallelismUnavailableReason — pub fn name(self) -> &'static str`

Returns `&'static str`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations.2ddc370e6f3c"></a>
### api::partial_differential_equations

`symi::api — pub mod partial_differential_equations;`

Returns `module`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationarbitraryfunction.a32372f373b8"></a>
### api::partial_differential_equations::PartialDifferentialEquationArbitraryFunction

`symi::api::partial_differential_equations — pub struct PartialDifferentialEquationArbitraryFunction {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationarbitraryfunction_arity.2f38f6179949"></a>
### api::partial_differential_equations::PartialDifferentialEquationArbitraryFunction::arity

`symi::api::partial_differential_equations::PartialDifferentialEquationArbitraryFunction — pub fn arity(&self) -> Result<usize, ApiError>`

Returns `Result<usize, ApiError>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationarbitraryfunction_name.9c4a8cb9267b"></a>
### api::partial_differential_equations::PartialDifferentialEquationArbitraryFunction::name

`symi::api::partial_differential_equations::PartialDifferentialEquationArbitraryFunction — pub fn name(&self) -> Result<String, ApiError>`

Returns `Result<String, ApiError>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationarbitraryfunction_session.ed67ff9b4ef5"></a>
### api::partial_differential_equations::PartialDifferentialEquationArbitraryFunction::session

`symi::api::partial_differential_equations::PartialDifferentialEquationArbitraryFunction — pub fn session(&self) -> Session`

Returns `Session`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcanonicalprincipalform.79acc4e914c1"></a>
### api::partial_differential_equations::PartialDifferentialEquationCanonicalPrincipalForm

`symi::api::partial_differential_equations — pub enum PartialDifferentialEquationCanonicalPrincipalForm {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcanonicalprincipalform_ellipticsumofpuresecondderivatives.f1114ba80d7f"></a>
### api::partial_differential_equations::PartialDifferentialEquationCanonicalPrincipalForm::EllipticSumOfPureSecondDerivatives

`symi::api::partial_differential_equations::PartialDifferentialEquationCanonicalPrincipalForm — EllipticSumOfPureSecondDerivatives`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcanonicalprincipalform_hyperbolicmixedsecondderivative.fe8e30c6d0d9"></a>
### api::partial_differential_equations::PartialDifferentialEquationCanonicalPrincipalForm::HyperbolicMixedSecondDerivative

`symi::api::partial_differential_equations::PartialDifferentialEquationCanonicalPrincipalForm — HyperbolicMixedSecondDerivative`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcanonicalprincipalform_parabolicsinglepuresecondderivative.9d44e20b92cd"></a>
### api::partial_differential_equations::PartialDifferentialEquationCanonicalPrincipalForm::ParabolicSinglePureSecondDerivative

`symi::api::partial_differential_equations::PartialDifferentialEquationCanonicalPrincipalForm — ParabolicSinglePureSecondDerivative`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcanonicalprincipalform_from_name.122c8c298946"></a>
### api::partial_differential_equations::PartialDifferentialEquationCanonicalPrincipalForm::from_name

`symi::api::partial_differential_equations::PartialDifferentialEquationCanonicalPrincipalForm — pub fn from_name(name: &str) -> Result<Self, ApiError>`

Returns `Result<Self, ApiError>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcanonicalprincipalform_name.b50e87a5fe41"></a>
### api::partial_differential_equations::PartialDifferentialEquationCanonicalPrincipalForm::name

`symi::api::partial_differential_equations::PartialDifferentialEquationCanonicalPrincipalForm — pub fn name(self) -> &'static str`

Returns `&'static str`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcanonicalizationdecline.1ec311beaf58"></a>
### api::partial_differential_equations::PartialDifferentialEquationCanonicalizationDecline

`symi::api::partial_differential_equations — pub enum PartialDifferentialEquationCanonicalizationDecline {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcanonicalizationdecline_characteristiccoordinatenotclosed.077ac0aa797c"></a>
### api::partial_differential_equations::PartialDifferentialEquationCanonicalizationDecline::CharacteristicCoordinateNotClosed

`symi::api::partial_differential_equations::PartialDifferentialEquationCanonicalizationDecline — CharacteristicCoordinateNotClosed`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcanonicalizationdecline_constantprincipalcoefficientnotproved.d6a8dd96697c"></a>
### api::partial_differential_equations::PartialDifferentialEquationCanonicalizationDecline::ConstantPrincipalCoefficientNotProved

`symi::api::partial_differential_equations::PartialDifferentialEquationCanonicalizationDecline — ConstantPrincipalCoefficientNotProved`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcanonicalizationdecline_coordinatetransformationdeclined.3cc963261fa2"></a>
### api::partial_differential_equations::PartialDifferentialEquationCanonicalizationDecline::CoordinateTransformationDeclined

`symi::api::partial_differential_equations::PartialDifferentialEquationCanonicalizationDecline — CoordinateTransformationDeclined`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcanonicalizationdecline_nosafeprincipalpivot.d514d8076a03"></a>
### api::partial_differential_equations::PartialDifferentialEquationCanonicalizationDecline::NoSafePrincipalPivot

`symi::api::partial_differential_equations::PartialDifferentialEquationCanonicalizationDecline — NoSafePrincipalPivot`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcanonicalizationdecline_secondordertypenotdefinite.2c642da0e5a1"></a>
### api::partial_differential_equations::PartialDifferentialEquationCanonicalizationDecline::SecondOrderTypeNotDefinite

`symi::api::partial_differential_equations::PartialDifferentialEquationCanonicalizationDecline — SecondOrderTypeNotDefinite`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcanonicalizationdecline_simpletransversalnonzeronotproved.c0ca27f3fccb"></a>
### api::partial_differential_equations::PartialDifferentialEquationCanonicalizationDecline::SimpleTransversalNonzeroNotProved

`symi::api::partial_differential_equations::PartialDifferentialEquationCanonicalizationDecline — SimpleTransversalNonzeroNotProved`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcanonicalizationdecline_transformationverificationnotdefinite.6f1e54e128eb"></a>
### api::partial_differential_equations::PartialDifferentialEquationCanonicalizationDecline::TransformationVerificationNotDefinite

`symi::api::partial_differential_equations::PartialDifferentialEquationCanonicalizationDecline — TransformationVerificationNotDefinite`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcanonicalizationdecline_variablecoefficientellipticcanonicalizationnotsupported.d2b7a9232e88"></a>
### api::partial_differential_equations::PartialDifferentialEquationCanonicalizationDecline::VariableCoefficientEllipticCanonicalizationNotSupported

`symi::api::partial_differential_equations::PartialDifferentialEquationCanonicalizationDecline — VariableCoefficientEllipticCanonicalizationNotSupported`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcanonicalizationdecline_name.29e375e88f7b"></a>
### api::partial_differential_equations::PartialDifferentialEquationCanonicalizationDecline::name

`symi::api::partial_differential_equations::PartialDifferentialEquationCanonicalizationDecline — pub fn name(self) -> &'static str`

Returns `&'static str`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcanonicalizationresult.c6e640cb4914"></a>
### api::partial_differential_equations::PartialDifferentialEquationCanonicalizationResult

`symi::api::partial_differential_equations — pub struct PartialDifferentialEquationCanonicalizationResult {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcanonicalizationresult_canonicalized.fc2ed08efd0e"></a>
### api::partial_differential_equations::PartialDifferentialEquationCanonicalizationResult::canonicalized

`symi::api::partial_differential_equations::PartialDifferentialEquationCanonicalizationResult — pub fn canonicalized(&self) -> bool`

Returns `bool`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcanonicalizationresult_decline.47332ff339cc"></a>
### api::partial_differential_equations::PartialDifferentialEquationCanonicalizationResult::decline

`symi::api::partial_differential_equations::PartialDifferentialEquationCanonicalizationResult — pub fn decline(&self) -> Option<PartialDifferentialEquationCanonicalizationDecline>`

Returns `Option<PartialDifferentialEquationCanonicalizationDecline>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcanonicalizationresult_principal_form.e2a43b7f9c40"></a>
### api::partial_differential_equations::PartialDifferentialEquationCanonicalizationResult::principal_form

`symi::api::partial_differential_equations::PartialDifferentialEquationCanonicalizationResult — pub fn principal_form(&self) -> Option<PartialDifferentialEquationCanonicalPrincipalForm>`

Returns `Option<PartialDifferentialEquationCanonicalPrincipalForm>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcanonicalizationresult_transformation_decline.ee103fe54ecc"></a>
### api::partial_differential_equations::PartialDifferentialEquationCanonicalizationResult::transformation_decline

`symi::api::partial_differential_equations::PartialDifferentialEquationCanonicalizationResult — pub fn transformation_decline(&self) -> Option<PartialDifferentialEquationTransformationDecline>`

Returns `Option<PartialDifferentialEquationTransformationDecline>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationclassification.d1b3a10e0059"></a>
### api::partial_differential_equations::PartialDifferentialEquationClassification

`symi::api::partial_differential_equations — pub struct PartialDifferentialEquationClassification {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationclassification_coefficient_data.01ada8b809dd"></a>
### api::partial_differential_equations::PartialDifferentialEquationClassification::coefficient_data

`symi::api::partial_differential_equations::PartialDifferentialEquationClassification — pub fn coefficient_data(&self) -> Result<PartialDifferentialEquationCoefficientData, ApiError>`

Returns `Result<PartialDifferentialEquationCoefficientData, ApiError>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationclassification_linearity.5b3905138d99"></a>
### api::partial_differential_equations::PartialDifferentialEquationClassification::linearity

`symi::api::partial_differential_equations::PartialDifferentialEquationClassification — pub fn linearity(&self) -> Result<PartialDifferentialEquationLinearity, ApiError>`

Returns `Result<PartialDifferentialEquationLinearity, ApiError>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationclassification_method_candidates.8b7632e45e6b"></a>
### api::partial_differential_equations::PartialDifferentialEquationClassification::method_candidates

`symi::api::partial_differential_equations::PartialDifferentialEquationClassification — pub fn method_candidates(&self) -> Result<Vec<PartialDifferentialEquationMethodCandidate>, ApiError>`

Returns `Result<Vec<PartialDifferentialEquationMethodCandidate>, ApiError>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationclassification_order.9358aad8a5d5"></a>
### api::partial_differential_equations::PartialDifferentialEquationClassification::order

`symi::api::partial_differential_equations::PartialDifferentialEquationClassification — pub fn order(&self) -> Result<usize, ApiError>`

Returns `Result<usize, ApiError>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationclassification_second_order_principal_part.2f9660b224cc"></a>
### api::partial_differential_equations::PartialDifferentialEquationClassification::second_order_principal_part

`symi::api::partial_differential_equations::PartialDifferentialEquationClassification — pub fn second_order_principal_part(&self) -> Result<Option<PartialDifferentialEquationPrincipalPart>, ApiError>`

Returns `Result<Option<PartialDifferentialEquationPrincipalPart>, ApiError>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationclassification_session.a297ecbd5972"></a>
### api::partial_differential_equations::PartialDifferentialEquationClassification::session

`symi::api::partial_differential_equations::PartialDifferentialEquationClassification — pub fn session(&self) -> Session`

Returns `Session`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcoefficientdata.2b605d307d97"></a>
### api::partial_differential_equations::PartialDifferentialEquationCoefficientData

`symi::api::partial_differential_equations — pub struct PartialDifferentialEquationCoefficientData {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcoefficientdata_full_coefficients.0886ab7ea2f5"></a>
### api::partial_differential_equations::PartialDifferentialEquationCoefficientData::full_coefficients

`symi::api::partial_differential_equations::PartialDifferentialEquationCoefficientData — pub fn full_coefficients(&self) -> Option<Vec<PartialDifferentialEquationJetCoefficient>>`

Returns `Option<Vec<PartialDifferentialEquationJetCoefficient>>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcoefficientdata_highest_order_coefficients.f806b02ff82e"></a>
### api::partial_differential_equations::PartialDifferentialEquationCoefficientData::highest_order_coefficients

`symi::api::partial_differential_equations::PartialDifferentialEquationCoefficientData — pub fn highest_order_coefficients(&self) -> Option<Vec<PartialDifferentialEquationJetCoefficient>>`

Returns `Option<Vec<PartialDifferentialEquationJetCoefficient>>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcoefficientdata_homogeneous.07fbeaa5d200"></a>
### api::partial_differential_equations::PartialDifferentialEquationCoefficientData::homogeneous

`symi::api::partial_differential_equations::PartialDifferentialEquationCoefficientData — pub fn homogeneous(&self) -> Option<bool>`

Returns `Option<bool>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcoefficientdata_remainder.7e8afe2ea8b3"></a>
### api::partial_differential_equations::PartialDifferentialEquationCoefficientData::remainder

`symi::api::partial_differential_equations::PartialDifferentialEquationCoefficientData — pub fn remainder(&self) -> Option<Expression>`

Returns `Option<Expression>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcoordinatechange.92ae567822e3"></a>
### api::partial_differential_equations::PartialDifferentialEquationCoordinateChange

`symi::api::partial_differential_equations — pub struct PartialDifferentialEquationCoordinateChange {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcoordinatechange_forward_coordinates.054485ec37ca"></a>
### api::partial_differential_equations::PartialDifferentialEquationCoordinateChange::forward_coordinates

`symi::api::partial_differential_equations::PartialDifferentialEquationCoordinateChange — pub fn forward_coordinates(&self) -> Result<Vec<Expression>, ApiError>`

Returns `Result<Vec<Expression>, ApiError>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcoordinatechange_generation.672393aad2ad"></a>
### api::partial_differential_equations::PartialDifferentialEquationCoordinateChange::generation

`symi::api::partial_differential_equations::PartialDifferentialEquationCoordinateChange — pub fn generation(&self) -> u64`

Returns `u64`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcoordinatechange_inverse_coordinates.aa83eaf2e909"></a>
### api::partial_differential_equations::PartialDifferentialEquationCoordinateChange::inverse_coordinates

`symi::api::partial_differential_equations::PartialDifferentialEquationCoordinateChange — pub fn inverse_coordinates(&self) -> Result<Vec<Expression>, ApiError>`

Returns `Result<Vec<Expression>, ApiError>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcoordinatechange_session.b3d0c9d2f725"></a>
### api::partial_differential_equations::PartialDifferentialEquationCoordinateChange::session

`symi::api::partial_differential_equations::PartialDifferentialEquationCoordinateChange — pub fn session(&self) -> Session`

Returns `Session`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcoordinatechange_source_variables.e62ba6c6957c"></a>
### api::partial_differential_equations::PartialDifferentialEquationCoordinateChange::source_variables

`symi::api::partial_differential_equations::PartialDifferentialEquationCoordinateChange — pub fn source_variables(&self) -> Result<Vec<String>, ApiError>`

Returns `Result<Vec<String>, ApiError>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcoordinatechange_target_dependent_function.e0a7f5ceaa5f"></a>
### api::partial_differential_equations::PartialDifferentialEquationCoordinateChange::target_dependent_function

`symi::api::partial_differential_equations::PartialDifferentialEquationCoordinateChange — pub fn target_dependent_function(&self) -> Result<String, ApiError>`

Returns `Result<String, ApiError>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcoordinatechange_target_variables.257eb130434b"></a>
### api::partial_differential_equations::PartialDifferentialEquationCoordinateChange::target_variables

`symi::api::partial_differential_equations::PartialDifferentialEquationCoordinateChange — pub fn target_variables(&self) -> Result<Vec<String>, ApiError>`

Returns `Result<Vec<String>, ApiError>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationgeometricdomain.8956295f5b1c"></a>
### api::partial_differential_equations::PartialDifferentialEquationGeometricDomain

`symi::api::partial_differential_equations — pub enum PartialDifferentialEquationGeometricDomain {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationgeometricdomain_disk.4ae6289e7852"></a>
### api::partial_differential_equations::PartialDifferentialEquationGeometricDomain::Disk

`symi::api::partial_differential_equations::PartialDifferentialEquationGeometricDomain — Disk`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationgeometricdomain_reallineevolution.1fb7c643e757"></a>
### api::partial_differential_equations::PartialDifferentialEquationGeometricDomain::RealLineEvolution

`symi::api::partial_differential_equations::PartialDifferentialEquationGeometricDomain — RealLineEvolution`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationgeometricdomain_wholespace.fcc84fc49e98"></a>
### api::partial_differential_equations::PartialDifferentialEquationGeometricDomain::WholeSpace

`symi::api::partial_differential_equations::PartialDifferentialEquationGeometricDomain — WholeSpace`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationgeometricdomain_from_name.7678ef494d56"></a>
### api::partial_differential_equations::PartialDifferentialEquationGeometricDomain::from_name

`symi::api::partial_differential_equations::PartialDifferentialEquationGeometricDomain — pub fn from_name(name: &str) -> Result<Self, ApiError>`

Returns `Result<Self, ApiError>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationgeometricdomain_name.2f93c39f9c76"></a>
### api::partial_differential_equations::PartialDifferentialEquationGeometricDomain::name

`symi::api::partial_differential_equations::PartialDifferentialEquationGeometricDomain — pub fn name(self) -> &'static str`

Returns `&'static str`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationjet.01cfcd830fd3"></a>
### api::partial_differential_equations::PartialDifferentialEquationJet

`symi::api::partial_differential_equations — pub struct PartialDifferentialEquationJet {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationjet_derivative_orders.d092739146d5"></a>
### api::partial_differential_equations::PartialDifferentialEquationJet::derivative_orders

`symi::api::partial_differential_equations::PartialDifferentialEquationJet — pub fn derivative_orders(&self) -> Vec<usize>`

Returns `Vec<usize>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationjetcoefficient.a41d5999cfac"></a>
### api::partial_differential_equations::PartialDifferentialEquationJetCoefficient

`symi::api::partial_differential_equations — pub struct PartialDifferentialEquationJetCoefficient {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationjetcoefficient_jet.a5f8edaf6f15"></a>
### api::partial_differential_equations::PartialDifferentialEquationJetCoefficient::jet

`symi::api::partial_differential_equations::PartialDifferentialEquationJetCoefficient — pub fn jet(&self) -> PartialDifferentialEquationJet`

Returns `PartialDifferentialEquationJet`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationlinearity.c2346dbaee0f"></a>
### api::partial_differential_equations::PartialDifferentialEquationLinearity

`symi::api::partial_differential_equations — pub enum PartialDifferentialEquationLinearity {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationlinearity_linear.73fcf74e95f5"></a>
### api::partial_differential_equations::PartialDifferentialEquationLinearity::Linear

`symi::api::partial_differential_equations::PartialDifferentialEquationLinearity — Linear`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationlinearity_nonlinear.1041a151f7e9"></a>
### api::partial_differential_equations::PartialDifferentialEquationLinearity::Nonlinear

`symi::api::partial_differential_equations::PartialDifferentialEquationLinearity — Nonlinear`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationlinearity_quasilinear.8934da0107f4"></a>
### api::partial_differential_equations::PartialDifferentialEquationLinearity::Quasilinear

`symi::api::partial_differential_equations::PartialDifferentialEquationLinearity — Quasilinear`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationlinearity_semilinear.be11c6d5502e"></a>
### api::partial_differential_equations::PartialDifferentialEquationLinearity::Semilinear

`symi::api::partial_differential_equations::PartialDifferentialEquationLinearity — Semilinear`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationlinearity_name.dd0c0018a9bb"></a>
### api::partial_differential_equations::PartialDifferentialEquationLinearity::name

`symi::api::partial_differential_equations::PartialDifferentialEquationLinearity — pub fn name(self) -> &'static str`

Returns `&'static str`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationmethod.93a455ee0f77"></a>
### api::partial_differential_equations::PartialDifferentialEquationMethod

`symi::api::partial_differential_equations — pub enum PartialDifferentialEquationMethod {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationmethod_automatic.d48e6b15ee25"></a>
### api::partial_differential_equations::PartialDifferentialEquationMethod::Automatic

`symi::api::partial_differential_equations::PartialDifferentialEquationMethod — Automatic`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationmethod_canonicalcoordinates.c3d5417de043"></a>
### api::partial_differential_equations::PartialDifferentialEquationMethod::CanonicalCoordinates

`symi::api::partial_differential_equations::PartialDifferentialEquationMethod — CanonicalCoordinates`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationmethod_characteristics.5b719e769964"></a>
### api::partial_differential_equations::PartialDifferentialEquationMethod::Characteristics

`symi::api::partial_differential_equations::PartialDifferentialEquationMethod — Characteristics`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationmethod_fouriertransform.c25a3ee69db1"></a>
### api::partial_differential_equations::PartialDifferentialEquationMethod::FourierTransform

`symi::api::partial_differential_equations::PartialDifferentialEquationMethod — FourierTransform`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationmethod_initialdataconvolution.0f515a576b39"></a>
### api::partial_differential_equations::PartialDifferentialEquationMethod::InitialDataConvolution

`symi::api::partial_differential_equations::PartialDifferentialEquationMethod — InitialDataConvolution`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationmethod_laplacetransform.52913c8005d8"></a>
### api::partial_differential_equations::PartialDifferentialEquationMethod::LaplaceTransform

`symi::api::partial_differential_equations::PartialDifferentialEquationMethod — LaplaceTransform`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationmethod_repeatedintegration.94792505586a"></a>
### api::partial_differential_equations::PartialDifferentialEquationMethod::RepeatedIntegration

`symi::api::partial_differential_equations::PartialDifferentialEquationMethod — RepeatedIntegration`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationmethod_separation.a81b8a0437b7"></a>
### api::partial_differential_equations::PartialDifferentialEquationMethod::Separation

`symi::api::partial_differential_equations::PartialDifferentialEquationMethod — Separation`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationmethod_from_name.0bc86f8d6d9d"></a>
### api::partial_differential_equations::PartialDifferentialEquationMethod::from_name

`symi::api::partial_differential_equations::PartialDifferentialEquationMethod — pub fn from_name(name: &str) -> Result<Self, ApiError>`

Returns `Result<Self, ApiError>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationmethod_name.d49b5fbe15e5"></a>
### api::partial_differential_equations::PartialDifferentialEquationMethod::name

`symi::api::partial_differential_equations::PartialDifferentialEquationMethod — pub fn name(self) -> &'static str`

Returns `&'static str`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationmethodcandidate.c0b9bbad0016"></a>
### api::partial_differential_equations::PartialDifferentialEquationMethodCandidate

`symi::api::partial_differential_equations — pub struct PartialDifferentialEquationMethodCandidate {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationmethodcandidate_method.b2de593d21fa"></a>
### api::partial_differential_equations::PartialDifferentialEquationMethodCandidate::method

`symi::api::partial_differential_equations::PartialDifferentialEquationMethodCandidate — pub fn method(&self) -> PartialDifferentialEquationMethod`

Returns `PartialDifferentialEquationMethod`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationmethodcandidate_proof_obligations.2729ed41c873"></a>
### api::partial_differential_equations::PartialDifferentialEquationMethodCandidate::proof_obligations

`symi::api::partial_differential_equations::PartialDifferentialEquationMethodCandidate — pub fn proof_obligations(&self) -> Vec<PartialDifferentialEquationProofObligation>`

Returns `Vec<PartialDifferentialEquationProofObligation>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetryaction.c6bed10d6ea1"></a>
### api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAction

`symi::api::partial_differential_equations — pub struct PartialDifferentialEquationPointSymmetryAction {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_admits_additive_solution_symmetry.9eb0e58e1a2d"></a>
### api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAction::admits_additive_solution_symmetry

`symi::api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAction — pub fn admits_additive_solution_symmetry(&self) -> bool`

Returns `bool`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_amplitude.28659aa27e68"></a>
### api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAction::amplitude

`symi::api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAction — pub fn amplitude(&self) -> Option<Expression>`

Returns `Option<Expression>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_applied_to_seed.df24827ff4d4"></a>
### api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAction::applied_to_seed

`symi::api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAction — pub fn applied_to_seed(&self, seed: &UndefinedFunction) -> Result<Expression, ApiError>`

Returns `Result<Expression, ApiError>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_applied_to_seed_with_additive_solution.5ffd6a37b8be"></a>
### api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAction::applied_to_seed_with_additive_solution

`symi::api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAction — pub fn applied_to_seed_with_additive_solution(&self, seed: &UndefinedFunction, additive_solution: &UndefinedFunction) -> Result<Expression, ApiError>`

Returns `Result<Expression, ApiError>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_decline.22ed89cd0701"></a>
### api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAction::decline

`symi::api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAction — pub fn decline(&self) -> Option<PartialDifferentialEquationSymmetryActionDecline>`

Returns `Option<PartialDifferentialEquationSymmetryActionDecline>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_intertwining.b63defeb84f8"></a>
### api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAction::intertwining

`symi::api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAction — pub fn intertwining(&self) -> Option<PartialDifferentialEquationVerificationVerdict>`

Returns `Option<PartialDifferentialEquationVerificationVerdict>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_invertibility.0161df41aed3"></a>
### api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAction::invertibility

`symi::api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAction — pub fn invertibility(&self) -> Option<PartialDifferentialEquationVerificationVerdict>`

Returns `Option<PartialDifferentialEquationVerificationVerdict>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_multiplier.061669b92b9b"></a>
### api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAction::multiplier

`symi::api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAction — pub fn multiplier(&self) -> Option<Expression>`

Returns `Option<Expression>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_outstanding_obligations.60b7ead9ab3d"></a>
### api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAction::outstanding_obligations

`symi::api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAction — pub fn outstanding_obligations(&self) -> Vec<PartialDifferentialEquationSymmetryObligation>`

Returns `Vec<PartialDifferentialEquationSymmetryObligation>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_parameters.456ce4e5daa7"></a>
### api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAction::parameters

`symi::api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAction — pub fn parameters(&self) -> Vec<Expression>`

Returns `Vec<Expression>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_point_symmetry_decline.a3457b41aa47"></a>
### api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAction::point_symmetry_decline

`symi::api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAction — pub fn point_symmetry_decline(&self) -> Option<PartialDifferentialEquationPointSymmetryDecline>`

Returns `Option<PartialDifferentialEquationPointSymmetryDecline>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_session.a6aa978f8ba0"></a>
### api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAction::session

`symi::api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAction — pub fn session(&self) -> Session`

Returns `Session`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_transformed_coordinates.c1cbac3cfd8d"></a>
### api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAction::transformed_coordinates

`symi::api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAction — pub fn transformed_coordinates(&self) -> Vec<Expression>`

Returns `Vec<Expression>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra.47ab2650da3a"></a>
### api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAlgebra

`symi::api::partial_differential_equations — pub struct PartialDifferentialEquationPointSymmetryAlgebra {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_admits_additive_solution_symmetry.101c3957df78"></a>
### api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAlgebra::admits_additive_solution_symmetry

`symi::api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAlgebra — pub fn admits_additive_solution_symmetry(&self) -> bool`

Returns `bool`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_basis.000a8be0ce7b"></a>
### api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAlgebra::basis

`symi::api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAlgebra — pub fn basis(&self) -> Vec<PartialDifferentialEquationPointSymmetryGenerator>`

Returns `Vec<PartialDifferentialEquationPointSymmetryGenerator>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_decline.38c45623a3c6"></a>
### api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAlgebra::decline

`symi::api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAlgebra — pub fn decline(&self) -> Option<PartialDifferentialEquationPointSymmetryDecline>`

Returns `Option<PartialDifferentialEquationPointSymmetryDecline>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_determining_equations.026d397719c6"></a>
### api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAlgebra::determining_equations

`symi::api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAlgebra — pub fn determining_equations(&self) -> Vec<Expression>`

Returns `Vec<Expression>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_general_generator.54f0738da4e1"></a>
### api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAlgebra::general_generator

`symi::api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAlgebra — pub fn general_generator(&self) -> Option<PartialDifferentialEquationPointSymmetryGenerator>`

Returns `Option<PartialDifferentialEquationPointSymmetryGenerator>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_outstanding_obligations.a468041f459e"></a>
### api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAlgebra::outstanding_obligations

`symi::api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAlgebra — pub fn outstanding_obligations(&self) -> Vec<PartialDifferentialEquationSymmetryObligation>`

Returns `Vec<PartialDifferentialEquationSymmetryObligation>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_parameters.5921e7b33c63"></a>
### api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAlgebra::parameters

`symi::api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAlgebra — pub fn parameters(&self) -> Vec<Expression>`

Returns `Vec<Expression>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetrydecline.c495e6e8c3ed"></a>
### api::partial_differential_equations::PartialDifferentialEquationPointSymmetryDecline

`symi::api::partial_differential_equations — pub enum PartialDifferentialEquationPointSymmetryDecline {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetrydecline_additivecomponentnotrecognized.2876d097e85e"></a>
### api::partial_differential_equations::PartialDifferentialEquationPointSymmetryDecline::AdditiveComponentNotRecognized

`symi::api::partial_differential_equations::PartialDifferentialEquationPointSymmetryDecline — AdditiveComponentNotRecognized`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetrydecline_cancelled.0ae268bfe2b6"></a>
### api::partial_differential_equations::PartialDifferentialEquationPointSymmetryDecline::Cancelled

`symi::api::partial_differential_equations::PartialDifferentialEquationPointSymmetryDecline — Cancelled`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetrydecline_conditionnotpolynomialinthefreejets.d7bfa64d6cb9"></a>
### api::partial_differential_equations::PartialDifferentialEquationPointSymmetryDecline::ConditionNotPolynomialInTheFreeJets

`symi::api::partial_differential_equations::PartialDifferentialEquationPointSymmetryDecline — ConditionNotPolynomialInTheFreeJets`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetrydecline_determiningsystemnotlinear.b4694942835e"></a>
### api::partial_differential_equations::PartialDifferentialEquationPointSymmetryDecline::DeterminingSystemNotLinear

`symi::api::partial_differential_equations::PartialDifferentialEquationPointSymmetryDecline — DeterminingSystemNotLinear`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetrydecline_determiningsystemnotreduced.832dfef84472"></a>
### api::partial_differential_equations::PartialDifferentialEquationPointSymmetryDecline::DeterminingSystemNotReduced

`symi::api::partial_differential_equations::PartialDifferentialEquationPointSymmetryDecline — DeterminingSystemNotReduced`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetrydecline_generatornotverified.99b3665fe3b6"></a>
### api::partial_differential_equations::PartialDifferentialEquationPointSymmetryDecline::GeneratorNotVerified

`symi::api::partial_differential_equations::PartialDifferentialEquationPointSymmetryDecline — GeneratorNotVerified`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetrydecline_initialorboundarydatanotsupported.6bc410ec8508"></a>
### api::partial_differential_equations::PartialDifferentialEquationPointSymmetryDecline::InitialOrBoundaryDataNotSupported

`symi::api::partial_differential_equations::PartialDifferentialEquationPointSymmetryDecline — InitialOrBoundaryDataNotSupported`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetrydecline_jetcoordinatesnotrecognized.23f82c8c86f1"></a>
### api::partial_differential_equations::PartialDifferentialEquationPointSymmetryDecline::JetCoordinatesNotRecognized

`symi::api::partial_differential_equations::PartialDifferentialEquationPointSymmetryDecline — JetCoordinatesNotRecognized`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetrydecline_ordernotsupported.66cdfd177225"></a>
### api::partial_differential_equations::PartialDifferentialEquationPointSymmetryDecline::OrderNotSupported

`symi::api::partial_differential_equations::PartialDifferentialEquationPointSymmetryDecline — OrderNotSupported`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetrydecline_principaljetnotfound.01d0b872ce94"></a>
### api::partial_differential_equations::PartialDifferentialEquationPointSymmetryDecline::PrincipalJetNotFound

`symi::api::partial_differential_equations::PartialDifferentialEquationPointSymmetryDecline — PrincipalJetNotFound`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetrydecline_superpositionnotverified.e8e173f71b65"></a>
### api::partial_differential_equations::PartialDifferentialEquationPointSymmetryDecline::SuperpositionNotVerified

`symi::api::partial_differential_equations::PartialDifferentialEquationPointSymmetryDecline — SuperpositionNotVerified`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetrydecline_worklimitexceeded.a376cda94816"></a>
### api::partial_differential_equations::PartialDifferentialEquationPointSymmetryDecline::WorkLimitExceeded

`symi::api::partial_differential_equations::PartialDifferentialEquationPointSymmetryDecline — WorkLimitExceeded`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetrydecline_name.9a9ab4532f8d"></a>
### api::partial_differential_equations::PartialDifferentialEquationPointSymmetryDecline::name

`symi::api::partial_differential_equations::PartialDifferentialEquationPointSymmetryDecline — pub fn name(self) -> &'static str`

Returns `&'static str`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetrygenerator.06697c4329c1"></a>
### api::partial_differential_equations::PartialDifferentialEquationPointSymmetryGenerator

`symi::api::partial_differential_equations — pub struct PartialDifferentialEquationPointSymmetryGenerator {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetrygenerator_coordinate_infinitesimals.4ebe62466a1b"></a>
### api::partial_differential_equations::PartialDifferentialEquationPointSymmetryGenerator::coordinate_infinitesimals

`symi::api::partial_differential_equations::PartialDifferentialEquationPointSymmetryGenerator — pub fn coordinate_infinitesimals(&self) -> Vec<Expression>`

Returns `Vec<Expression>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetrygenerator_dependent_infinitesimal.d66c7b59ea79"></a>
### api::partial_differential_equations::PartialDifferentialEquationPointSymmetryGenerator::dependent_infinitesimal

`symi::api::partial_differential_equations::PartialDifferentialEquationPointSymmetryGenerator — pub fn dependent_infinitesimal(&self) -> Expression`

Returns `Expression`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetrygenerator_session.9b7563fa6af7"></a>
### api::partial_differential_equations::PartialDifferentialEquationPointSymmetryGenerator::session

`symi::api::partial_differential_equations::PartialDifferentialEquationPointSymmetryGenerator — pub fn session(&self) -> Session`

Returns `Session`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationportfoliodecline.39e4394337b8"></a>
### api::partial_differential_equations::PartialDifferentialEquationPortfolioDecline

`symi::api::partial_differential_equations — pub struct PartialDifferentialEquationPortfolioDecline {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationportfoliodecline_decline.bf34e996266a"></a>
### api::partial_differential_equations::PartialDifferentialEquationPortfolioDecline::decline

`symi::api::partial_differential_equations::PartialDifferentialEquationPortfolioDecline — pub fn decline(&self) -> PartialDifferentialEquationSolveDecline`

Returns `PartialDifferentialEquationSolveDecline`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationportfoliodecline_method.4aafa70da54c"></a>
### api::partial_differential_equations::PartialDifferentialEquationPortfolioDecline::method

`symi::api::partial_differential_equations::PartialDifferentialEquationPortfolioDecline — pub fn method(&self) -> PartialDifferentialEquationMethod`

Returns `PartialDifferentialEquationMethod`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationprincipalcoefficient.05e75a1695c6"></a>
### api::partial_differential_equations::PartialDifferentialEquationPrincipalCoefficient

`symi::api::partial_differential_equations — pub struct PartialDifferentialEquationPrincipalCoefficient {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationprincipalcoefficient_jet.6a8b6da47161"></a>
### api::partial_differential_equations::PartialDifferentialEquationPrincipalCoefficient::jet

`symi::api::partial_differential_equations::PartialDifferentialEquationPrincipalCoefficient — pub fn jet(&self) -> PartialDifferentialEquationJet`

Returns `PartialDifferentialEquationJet`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationprincipalpart.de711ed5c59a"></a>
### api::partial_differential_equations::PartialDifferentialEquationPrincipalPart

`symi::api::partial_differential_equations — pub struct PartialDifferentialEquationPrincipalPart {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationprincipalpart_derivative_coefficients.c07d9607eba7"></a>
### api::partial_differential_equations::PartialDifferentialEquationPrincipalPart::derivative_coefficients

`symi::api::partial_differential_equations::PartialDifferentialEquationPrincipalPart — pub fn derivative_coefficients(&self) -> Vec<PartialDifferentialEquationPrincipalCoefficient>`

Returns `Vec<PartialDifferentialEquationPrincipalCoefficient>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproblem.c31fb0399b81"></a>
### api::partial_differential_equations::PartialDifferentialEquationProblem

`symi::api::partial_differential_equations — pub struct PartialDifferentialEquationProblem {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproblem_boundary_conditions.c896e2d944e5"></a>
### api::partial_differential_equations::PartialDifferentialEquationProblem::boundary_conditions

`symi::api::partial_differential_equations::PartialDifferentialEquationProblem — pub fn boundary_conditions(&self) -> Result<Vec<Expression>, ApiError>`

Returns `Result<Vec<Expression>, ApiError>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproblem_dependent_function.dd22cc072e76"></a>
### api::partial_differential_equations::PartialDifferentialEquationProblem::dependent_function

`symi::api::partial_differential_equations::PartialDifferentialEquationProblem — pub fn dependent_function(&self) -> Result<String, ApiError>`

Returns `Result<String, ApiError>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproblem_generation.402d11797774"></a>
### api::partial_differential_equations::PartialDifferentialEquationProblem::generation

`symi::api::partial_differential_equations::PartialDifferentialEquationProblem — pub fn generation(&self) -> u64`

Returns `u64`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproblem_independent_variables.7c2c23c9dcb4"></a>
### api::partial_differential_equations::PartialDifferentialEquationProblem::independent_variables

`symi::api::partial_differential_equations::PartialDifferentialEquationProblem — pub fn independent_variables(&self) -> Result<Vec<String>, ApiError>`

Returns `Result<Vec<String>, ApiError>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproblem_initial_conditions.c94edb0a7a80"></a>
### api::partial_differential_equations::PartialDifferentialEquationProblem::initial_conditions

`symi::api::partial_differential_equations::PartialDifferentialEquationProblem — pub fn initial_conditions(&self) -> Result<Vec<Expression>, ApiError>`

Returns `Result<Vec<Expression>, ApiError>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproblem_session.181c2e95695e"></a>
### api::partial_differential_equations::PartialDifferentialEquationProblem::session

`symi::api::partial_differential_equations::PartialDifferentialEquationProblem — pub fn session(&self) -> Session`

Returns `Session`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproblemerror.f3e10f59c22d"></a>
### api::partial_differential_equations::PartialDifferentialEquationProblemError

`symi::api::partial_differential_equations — pub enum PartialDifferentialEquationProblemError {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproblemerror_ambiguousdependentfunction.8c97fa4ef13e"></a>
### api::partial_differential_equations::PartialDifferentialEquationProblemError::AmbiguousDependentFunction

`symi::api::partial_differential_equations::PartialDifferentialEquationProblemError — AmbiguousDependentFunction`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproblemerror_contextmismatch.3a9bc59d7807"></a>
### api::partial_differential_equations::PartialDifferentialEquationProblemError::ContextMismatch

`symi::api::partial_differential_equations::PartialDifferentialEquationProblemError — ContextMismatch`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproblemerror_dependentfunctionmustbeuserfunction.0fb490fdf844"></a>
### api::partial_differential_equations::PartialDifferentialEquationProblemError::DependentFunctionMustBeUserFunction

`symi::api::partial_differential_equations::PartialDifferentialEquationProblemError — DependentFunctionMustBeUserFunction`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproblemerror_derivativeargumentaritymismatch.60c16e0fac9f"></a>
### api::partial_differential_equations::PartialDifferentialEquationProblemError::DerivativeArgumentArityMismatch

`symi::api::partial_differential_equations::PartialDifferentialEquationProblemError — DerivativeArgumentArityMismatch`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproblemerror_discoveryfailed.5f9e7b2170bb"></a>
### api::partial_differential_equations::PartialDifferentialEquationProblemError::DiscoveryFailed

`symi::api::partial_differential_equations::PartialDifferentialEquationProblemError — DiscoveryFailed`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproblemerror_duplicateindependentvariable.8afc3b9fbc64"></a>
### api::partial_differential_equations::PartialDifferentialEquationProblemError::DuplicateIndependentVariable

`symi::api::partial_differential_equations::PartialDifferentialEquationProblemError — DuplicateIndependentVariable`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproblemerror_governingequationisnotdifferential.46c0c9da5164"></a>
### api::partial_differential_equations::PartialDifferentialEquationProblemError::GoverningEquationIsNotDifferential

`symi::api::partial_differential_equations::PartialDifferentialEquationProblemError — GoverningEquationIsNotDifferential`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproblemerror_inconsistentdependentfunctionarguments.07d892b83a86"></a>
### api::partial_differential_equations::PartialDifferentialEquationProblemError::InconsistentDependentFunctionArguments

`symi::api::partial_differential_equations::PartialDifferentialEquationProblemError — InconsistentDependentFunctionArguments`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproblemerror_insufficientindependentvariables.1cddbb3990df"></a>
### api::partial_differential_equations::PartialDifferentialEquationProblemError::InsufficientIndependentVariables

`symi::api::partial_differential_equations::PartialDifferentialEquationProblemError — InsufficientIndependentVariables`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproblemerror_nodependentfunctionoccurrence.95083d8bf05d"></a>
### api::partial_differential_equations::PartialDifferentialEquationProblemError::NoDependentFunctionOccurrence

`symi::api::partial_differential_equations::PartialDifferentialEquationProblemError — NoDependentFunctionOccurrence`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproofobligation.274c6e6669a6"></a>
### api::partial_differential_equations::PartialDifferentialEquationProofObligation

`symi::api::partial_differential_equations — pub enum PartialDifferentialEquationProofObligation {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproofobligation_boundaryeigenvalueconditionsestablished.3c65e417ecf6"></a>
### api::partial_differential_equations::PartialDifferentialEquationProofObligation::BoundaryEigenvalueConditionsEstablished

`symi::api::partial_differential_equations::PartialDifferentialEquationProofObligation — BoundaryEigenvalueConditionsEstablished`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproofobligation_characteristictransversality.35c14da47238"></a>
### api::partial_differential_equations::PartialDifferentialEquationProofObligation::CharacteristicTransversality

`symi::api::partial_differential_equations::PartialDifferentialEquationProofObligation — CharacteristicTransversality`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproofobligation_coefficientnonzero.322f7d88f7c8"></a>
### api::partial_differential_equations::PartialDifferentialEquationProofObligation::CoefficientNonzero

`symi::api::partial_differential_equations::PartialDifferentialEquationProofObligation — CoefficientNonzero`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproofobligation_constantcoefficients.8784257313e9"></a>
### api::partial_differential_equations::PartialDifferentialEquationProofObligation::ConstantCoefficients

`symi::api::partial_differential_equations::PartialDifferentialEquationProofObligation — ConstantCoefficients`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproofobligation_coordinatejacobiannonzero.23e294a68fe1"></a>
### api::partial_differential_equations::PartialDifferentialEquationProofObligation::CoordinateJacobianNonzero

`symi::api::partial_differential_equations::PartialDifferentialEquationProofObligation — CoordinateJacobianNonzero`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproofobligation_coverageoutsidetheadmissibleclass.80864667cccd"></a>
### api::partial_differential_equations::PartialDifferentialEquationProofObligation::CoverageOutsideTheAdmissibleClass

`symi::api::partial_differential_equations::PartialDifferentialEquationProofObligation — CoverageOutsideTheAdmissibleClass`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproofobligation_differentiationundertheintegralsign.f30126f65a93"></a>
### api::partial_differential_equations::PartialDifferentialEquationProofObligation::DifferentiationUnderTheIntegralSign

`symi::api::partial_differential_equations::PartialDifferentialEquationProofObligation — DifferentiationUnderTheIntegralSign`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproofobligation_equationtypeevidence.8ce0621d5fc9"></a>
### api::partial_differential_equations::PartialDifferentialEquationProofObligation::EquationTypeEvidence

`symi::api::partial_differential_equations::PartialDifferentialEquationProofObligation — EquationTypeEvidence`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproofobligation_exactinversetransformavailable.4e5273f2a4e6"></a>
### api::partial_differential_equations::PartialDifferentialEquationProofObligation::ExactInverseTransformAvailable

`symi::api::partial_differential_equations::PartialDifferentialEquationProofObligation — ExactInverseTransformAvailable`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproofobligation_initialtraceattainedintheadmissibleclass.2d284a13cdaf"></a>
### api::partial_differential_equations::PartialDifferentialEquationProofObligation::InitialTraceAttainedInTheAdmissibleClass

`symi::api::partial_differential_equations::PartialDifferentialEquationProofObligation — InitialTraceAttainedInTheAdmissibleClass`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproofobligation_origintraceestablished.020e33fd0e11"></a>
### api::partial_differential_equations::PartialDifferentialEquationProofObligation::OriginTraceEstablished

`symi::api::partial_differential_equations::PartialDifferentialEquationProofObligation — OriginTraceEstablished`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproofobligation_separabilityestablished.1ac596d66b3b"></a>
### api::partial_differential_equations::PartialDifferentialEquationProofObligation::SeparabilityEstablished

`symi::api::partial_differential_equations::PartialDifferentialEquationProofObligation — SeparabilityEstablished`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproofobligation_transformaxisdomainestablished.d4b680be26ee"></a>
### api::partial_differential_equations::PartialDifferentialEquationProofObligation::TransformAxisDomainEstablished

`symi::api::partial_differential_equations::PartialDifferentialEquationProofObligation — TransformAxisDomainEstablished`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproofobligation_transformexistenceandgrowth.32abb759a783"></a>
### api::partial_differential_equations::PartialDifferentialEquationProofObligation::TransformExistenceAndGrowth

`symi::api::partial_differential_equations::PartialDifferentialEquationProofObligation — TransformExistenceAndGrowth`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproofobligation_transformreductionexact.83fc09b4be22"></a>
### api::partial_differential_equations::PartialDifferentialEquationProofObligation::TransformReductionExact

`symi::api::partial_differential_equations::PartialDifferentialEquationProofObligation — TransformReductionExact`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproofobligation_uniquenessintheadmissibleclass.6b2bb859078e"></a>
### api::partial_differential_equations::PartialDifferentialEquationProofObligation::UniquenessInTheAdmissibleClass

`symi::api::partial_differential_equations::PartialDifferentialEquationProofObligation — UniquenessInTheAdmissibleClass`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproofobligation_from_name.80981cf791e7"></a>
### api::partial_differential_equations::PartialDifferentialEquationProofObligation::from_name

`symi::api::partial_differential_equations::PartialDifferentialEquationProofObligation — pub fn from_name(name: &str) -> Result<Self, ApiError>`

Returns `Result<Self, ApiError>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproofobligation_name.1e7d942fd94a"></a>
### api::partial_differential_equations::PartialDifferentialEquationProofObligation::name

`symi::api::partial_differential_equations::PartialDifferentialEquationProofObligation — pub fn name(self) -> &'static str`

Returns `&'static str`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationregularity.224a7acb1b38"></a>
### api::partial_differential_equations::PartialDifferentialEquationRegularity

`symi::api::partial_differential_equations — pub enum PartialDifferentialEquationRegularity {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationregularity_originregularangularperiodic.2aa61b4299f5"></a>
### api::partial_differential_equations::PartialDifferentialEquationRegularity::OriginRegularAngularPeriodic

`symi::api::partial_differential_equations::PartialDifferentialEquationRegularity — OriginRegularAngularPeriodic`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationregularity_unrestricted.5f0fff43eb04"></a>
### api::partial_differential_equations::PartialDifferentialEquationRegularity::Unrestricted

`symi::api::partial_differential_equations::PartialDifferentialEquationRegularity — Unrestricted`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationregularity_from_name.5937b1d71eef"></a>
### api::partial_differential_equations::PartialDifferentialEquationRegularity::from_name

`symi::api::partial_differential_equations::PartialDifferentialEquationRegularity — pub fn from_name(name: &str) -> Result<Self, ApiError>`

Returns `Result<Self, ApiError>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationregularity_name.83178bfb844c"></a>
### api::partial_differential_equations::PartialDifferentialEquationRegularity::name

`symi::api::partial_differential_equations::PartialDifferentialEquationRegularity — pub fn name(self) -> &'static str`

Returns `&'static str`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondorderclassification.bf097da4dd39"></a>
### api::partial_differential_equations::PartialDifferentialEquationSecondOrderClassification

`symi::api::partial_differential_equations — pub struct PartialDifferentialEquationSecondOrderClassification {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondorderclassification_cases.83ce79873a09"></a>
### api::partial_differential_equations::PartialDifferentialEquationSecondOrderClassification::cases

`symi::api::partial_differential_equations::PartialDifferentialEquationSecondOrderClassification — pub fn cases(&self) -> Vec<PartialDifferentialEquationSecondOrderTypeCase>`

Returns `Vec<PartialDifferentialEquationSecondOrderTypeCase>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondorderclassification_decline.a99e842de357"></a>
### api::partial_differential_equations::PartialDifferentialEquationSecondOrderClassification::decline

`symi::api::partial_differential_equations::PartialDifferentialEquationSecondOrderClassification — pub fn decline(&self) -> Option<PartialDifferentialEquationSecondOrderClassificationDecline>`

Returns `Option<PartialDifferentialEquationSecondOrderClassificationDecline>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondorderclassification_discriminant.4b84cbe471b5"></a>
### api::partial_differential_equations::PartialDifferentialEquationSecondOrderClassification::discriminant

`symi::api::partial_differential_equations::PartialDifferentialEquationSecondOrderClassification — pub fn discriminant(&self) -> Expression`

Returns `Expression`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondorderclassification_equation_type.40c5dd64831d"></a>
### api::partial_differential_equations::PartialDifferentialEquationSecondOrderClassification::equation_type

`symi::api::partial_differential_equations::PartialDifferentialEquationSecondOrderClassification — pub fn equation_type(&self) -> Option<PartialDifferentialEquationSecondOrderType>`

Returns `Option<PartialDifferentialEquationSecondOrderType>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondorderclassification_principal_matrix.61876332ffa8"></a>
### api::partial_differential_equations::PartialDifferentialEquationSecondOrderClassification::principal_matrix

`symi::api::partial_differential_equations::PartialDifferentialEquationSecondOrderClassification — pub fn principal_matrix(&self) -> Matrix`

Returns `Matrix`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondorderclassification_proof_obligations.a0c56a8ac86e"></a>
### api::partial_differential_equations::PartialDifferentialEquationSecondOrderClassification::proof_obligations

`symi::api::partial_differential_equations::PartialDifferentialEquationSecondOrderClassification — pub fn proof_obligations(&self) -> Vec<PartialDifferentialEquationProofObligation>`

Returns `Vec<PartialDifferentialEquationProofObligation>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondorderclassificationdecline.52b6ee42e76f"></a>
### api::partial_differential_equations::PartialDifferentialEquationSecondOrderClassificationDecline

`symi::api::partial_differential_equations — pub enum PartialDifferentialEquationSecondOrderClassificationDecline {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondorderclassificationdecline_budgetexceeded.e9c3fa928545"></a>
### api::partial_differential_equations::PartialDifferentialEquationSecondOrderClassificationDecline::BudgetExceeded

`symi::api::partial_differential_equations::PartialDifferentialEquationSecondOrderClassificationDecline — BudgetExceeded`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondorderclassificationdecline_inconsistentassumptions.1672c68a8967"></a>
### api::partial_differential_equations::PartialDifferentialEquationSecondOrderClassificationDecline::InconsistentAssumptions

`symi::api::partial_differential_equations::PartialDifferentialEquationSecondOrderClassificationDecline — InconsistentAssumptions`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondorderclassificationdecline_nottwovariablesecondorderlinear.1dc467a29222"></a>
### api::partial_differential_equations::PartialDifferentialEquationSecondOrderClassificationDecline::NotTwoVariableSecondOrderLinear

`symi::api::partial_differential_equations::PartialDifferentialEquationSecondOrderClassificationDecline — NotTwoVariableSecondOrderLinear`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondorderclassificationdecline_principalpartnotavailable.a064d6c91c37"></a>
### api::partial_differential_equations::PartialDifferentialEquationSecondOrderClassificationDecline::PrincipalPartNotAvailable

`symi::api::partial_differential_equations::PartialDifferentialEquationSecondOrderClassificationDecline — PrincipalPartNotAvailable`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondorderclassificationdecline_realprincipalcoefficientsnotproved.30d7404afa4f"></a>
### api::partial_differential_equations::PartialDifferentialEquationSecondOrderClassificationDecline::RealPrincipalCoefficientsNotProved

`symi::api::partial_differential_equations::PartialDifferentialEquationSecondOrderClassificationDecline — RealPrincipalCoefficientsNotProved`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondorderclassificationdecline_typenotproved.438fd76e2d69"></a>
### api::partial_differential_equations::PartialDifferentialEquationSecondOrderClassificationDecline::TypeNotProved

`symi::api::partial_differential_equations::PartialDifferentialEquationSecondOrderClassificationDecline — TypeNotProved`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondorderclassificationdecline_name.fd32845307de"></a>
### api::partial_differential_equations::PartialDifferentialEquationSecondOrderClassificationDecline::name

`symi::api::partial_differential_equations::PartialDifferentialEquationSecondOrderClassificationDecline — pub fn name(self) -> &'static str`

Returns `&'static str`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondordertype.41e35cf99ab8"></a>
### api::partial_differential_equations::PartialDifferentialEquationSecondOrderType

`symi::api::partial_differential_equations — pub enum PartialDifferentialEquationSecondOrderType {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondordertype_degenerate.107f53fbb812"></a>
### api::partial_differential_equations::PartialDifferentialEquationSecondOrderType::Degenerate

`symi::api::partial_differential_equations::PartialDifferentialEquationSecondOrderType — Degenerate`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondordertype_elliptic.074f7be45da6"></a>
### api::partial_differential_equations::PartialDifferentialEquationSecondOrderType::Elliptic

`symi::api::partial_differential_equations::PartialDifferentialEquationSecondOrderType — Elliptic`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondordertype_hyperbolic.4d2734f15512"></a>
### api::partial_differential_equations::PartialDifferentialEquationSecondOrderType::Hyperbolic

`symi::api::partial_differential_equations::PartialDifferentialEquationSecondOrderType — Hyperbolic`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondordertype_parabolic.0a5ff4cb4e77"></a>
### api::partial_differential_equations::PartialDifferentialEquationSecondOrderType::Parabolic

`symi::api::partial_differential_equations::PartialDifferentialEquationSecondOrderType — Parabolic`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondordertype_from_name.aa38e3f7e727"></a>
### api::partial_differential_equations::PartialDifferentialEquationSecondOrderType::from_name

`symi::api::partial_differential_equations::PartialDifferentialEquationSecondOrderType — pub fn from_name(name: &str) -> Result<Self, ApiError>`

Returns `Result<Self, ApiError>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondordertype_name.db7389e9f3d9"></a>
### api::partial_differential_equations::PartialDifferentialEquationSecondOrderType::name

`symi::api::partial_differential_equations::PartialDifferentialEquationSecondOrderType — pub fn name(self) -> &'static str`

Returns `&'static str`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondordertypecase.ee791ec6ee9f"></a>
### api::partial_differential_equations::PartialDifferentialEquationSecondOrderTypeCase

`symi::api::partial_differential_equations — pub struct PartialDifferentialEquationSecondOrderTypeCase {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondordertypecase_condition.9f185b8e041d"></a>
### api::partial_differential_equations::PartialDifferentialEquationSecondOrderTypeCase::condition

`symi::api::partial_differential_equations::PartialDifferentialEquationSecondOrderTypeCase — pub fn condition(&self) -> AssumptionProposition`

Returns `AssumptionProposition`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondordertypecase_equation_type.c6e8d176a386"></a>
### api::partial_differential_equations::PartialDifferentialEquationSecondOrderTypeCase::equation_type

`symi::api::partial_differential_equations::PartialDifferentialEquationSecondOrderTypeCase — pub fn equation_type(&self) -> PartialDifferentialEquationSecondOrderType`

Returns `PartialDifferentialEquationSecondOrderType`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondordertypeverdict.242476bc9524"></a>
### api::partial_differential_equations::PartialDifferentialEquationSecondOrderTypeVerdict

`symi::api::partial_differential_equations — pub enum PartialDifferentialEquationSecondOrderTypeVerdict {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondordertypeverdict_conditional.c8b3a9c3fb12"></a>
### api::partial_differential_equations::PartialDifferentialEquationSecondOrderTypeVerdict::Conditional

`symi::api::partial_differential_equations::PartialDifferentialEquationSecondOrderTypeVerdict — Conditional`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondordertypeverdict_definite.e272d5d71320"></a>
### api::partial_differential_equations::PartialDifferentialEquationSecondOrderTypeVerdict::Definite

`symi::api::partial_differential_equations::PartialDifferentialEquationSecondOrderTypeVerdict — Definite`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondordertypeverdict_unknown.093461344f61"></a>
### api::partial_differential_equations::PartialDifferentialEquationSecondOrderTypeVerdict::Unknown

`symi::api::partial_differential_equations::PartialDifferentialEquationSecondOrderTypeVerdict — Unknown`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondordertypeverdict_name.cf377152af55"></a>
### api::partial_differential_equations::PartialDifferentialEquationSecondOrderTypeVerdict::name

`symi::api::partial_differential_equations::PartialDifferentialEquationSecondOrderTypeVerdict — pub fn name(self) -> &'static str`

Returns `&'static str`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationseparatedequation.be9236b0d4b6"></a>
### api::partial_differential_equations::PartialDifferentialEquationSeparatedEquation

`symi::api::partial_differential_equations — pub struct PartialDifferentialEquationSeparatedEquation {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationseparatedequation_independent_variable_name.e85889e14cc6"></a>
### api::partial_differential_equations::PartialDifferentialEquationSeparatedEquation::independent_variable_name

`symi::api::partial_differential_equations::PartialDifferentialEquationSeparatedEquation — pub fn independent_variable_name(&self) -> String`

Returns `String`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationseparatedequation_residual.d092ea3d760b"></a>
### api::partial_differential_equations::PartialDifferentialEquationSeparatedEquation::residual

`symi::api::partial_differential_equations::PartialDifferentialEquationSeparatedEquation — pub fn residual(&self) -> Expression`

Returns `Expression`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationseparationresult.d01a2ffde823"></a>
### api::partial_differential_equations::PartialDifferentialEquationSeparationResult

`symi::api::partial_differential_equations — pub struct PartialDifferentialEquationSeparationResult {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationseparationresult_first_equation.a257b40a4b5e"></a>
### api::partial_differential_equations::PartialDifferentialEquationSeparationResult::first_equation

`symi::api::partial_differential_equations::PartialDifferentialEquationSeparationResult — pub fn first_equation(&self) -> PartialDifferentialEquationSeparatedEquation`

Returns `PartialDifferentialEquationSeparatedEquation`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationseparationresult_reconstruction.2f3e77bafab6"></a>
### api::partial_differential_equations::PartialDifferentialEquationSeparationResult::reconstruction

`symi::api::partial_differential_equations::PartialDifferentialEquationSeparationResult — pub fn reconstruction(&self) -> Expression`

Returns `Expression`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationseparationresult_second_equation.f753bc0d3c33"></a>
### api::partial_differential_equations::PartialDifferentialEquationSeparationResult::second_equation

`symi::api::partial_differential_equations::PartialDifferentialEquationSeparationResult — pub fn second_equation(&self) -> PartialDifferentialEquationSeparatedEquation`

Returns `PartialDifferentialEquationSeparatedEquation`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationseparationresult_separation_constant.0efad90534ea"></a>
### api::partial_differential_equations::PartialDifferentialEquationSeparationResult::separation_constant

`symi::api::partial_differential_equations::PartialDifferentialEquationSeparationResult — pub fn separation_constant(&self) -> Expression`

Returns `Expression`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationseparationresult_strategy.b348b0bf4128"></a>
### api::partial_differential_equations::PartialDifferentialEquationSeparationResult::strategy

`symi::api::partial_differential_equations::PartialDifferentialEquationSeparationResult — pub fn strategy(&self) -> PartialDifferentialEquationSeparationStrategy`

Returns `PartialDifferentialEquationSeparationStrategy`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationseparationresult_verification.2b503dc66447"></a>
### api::partial_differential_equations::PartialDifferentialEquationSeparationResult::verification

`symi::api::partial_differential_equations::PartialDifferentialEquationSeparationResult — pub fn verification(&self) -> PartialDifferentialEquationVerificationVerdict`

Returns `PartialDifferentialEquationVerificationVerdict`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationseparationstrategy.8190247026af"></a>
### api::partial_differential_equations::PartialDifferentialEquationSeparationStrategy

`symi::api::partial_differential_equations — pub enum PartialDifferentialEquationSeparationStrategy {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationseparationstrategy_additive.546ac80a05d8"></a>
### api::partial_differential_equations::PartialDifferentialEquationSeparationStrategy::Additive

`symi::api::partial_differential_equations::PartialDifferentialEquationSeparationStrategy — Additive`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationseparationstrategy_automatic.4c071f9a5493"></a>
### api::partial_differential_equations::PartialDifferentialEquationSeparationStrategy::Automatic

`symi::api::partial_differential_equations::PartialDifferentialEquationSeparationStrategy — Automatic`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationseparationstrategy_multiplicative.5f565c187c99"></a>
### api::partial_differential_equations::PartialDifferentialEquationSeparationStrategy::Multiplicative

`symi::api::partial_differential_equations::PartialDifferentialEquationSeparationStrategy — Multiplicative`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationseparationstrategy_name.92c340b1af9d"></a>
### api::partial_differential_equations::PartialDifferentialEquationSeparationStrategy::name

`symi::api::partial_differential_equations::PartialDifferentialEquationSeparationStrategy — pub fn name(self) -> &'static str`

Returns `&'static str`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsimilarityreductiondecline.1e468220b819"></a>
### api::partial_differential_equations::PartialDifferentialEquationSimilarityReductionDecline

`symi::api::partial_differential_equations — pub enum PartialDifferentialEquationSimilarityReductionDecline {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsimilarityreductiondecline_generatornotasymmetry.cd6ea868c573"></a>
### api::partial_differential_equations::PartialDifferentialEquationSimilarityReductionDecline::GeneratorNotASymmetry

`symi::api::partial_differential_equations::PartialDifferentialEquationSimilarityReductionDecline — GeneratorNotASymmetry`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsimilarityreductiondecline_generatornotfiberlinear.fdebfb31092d"></a>
### api::partial_differential_equations::PartialDifferentialEquationSimilarityReductionDecline::GeneratorNotFiberLinear

`symi::api::partial_differential_equations::PartialDifferentialEquationSimilarityReductionDecline — GeneratorNotFiberLinear`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsimilarityreductiondecline_invariantnotfound.56ce6a94758f"></a>
### api::partial_differential_equations::PartialDifferentialEquationSimilarityReductionDecline::InvariantNotFound

`symi::api::partial_differential_equations::PartialDifferentialEquationSimilarityReductionDecline — InvariantNotFound`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsimilarityreductiondecline_liftedfamilynotverified.f0e918b31607"></a>
### api::partial_differential_equations::PartialDifferentialEquationSimilarityReductionDecline::LiftedFamilyNotVerified

`symi::api::partial_differential_equations::PartialDifferentialEquationSimilarityReductionDecline — LiftedFamilyNotVerified`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsimilarityreductiondecline_profilenotisolated.165433edf565"></a>
### api::partial_differential_equations::PartialDifferentialEquationSimilarityReductionDecline::ProfileNotIsolated

`symi::api::partial_differential_equations::PartialDifferentialEquationSimilarityReductionDecline — ProfileNotIsolated`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsimilarityreductiondecline_reducedequationnotsolved.4056ef82934d"></a>
### api::partial_differential_equations::PartialDifferentialEquationSimilarityReductionDecline::ReducedEquationNotSolved

`symi::api::partial_differential_equations::PartialDifferentialEquationSimilarityReductionDecline — ReducedEquationNotSolved`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsimilarityreductiondecline_reductiondependsonthenoninvariantcoordinate.84e7083d41bd"></a>
### api::partial_differential_equations::PartialDifferentialEquationSimilarityReductionDecline::ReductionDependsOnTheNonInvariantCoordinate

`symi::api::partial_differential_equations::PartialDifferentialEquationSimilarityReductionDecline — ReductionDependsOnTheNonInvariantCoordinate`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsimilarityreductiondecline_twoindependentvariablesrequired.366181444f62"></a>
### api::partial_differential_equations::PartialDifferentialEquationSimilarityReductionDecline::TwoIndependentVariablesRequired

`symi::api::partial_differential_equations::PartialDifferentialEquationSimilarityReductionDecline — TwoIndependentVariablesRequired`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsimilarityreductiondecline_weightnotfound.f5c6f241d052"></a>
### api::partial_differential_equations::PartialDifferentialEquationSimilarityReductionDecline::WeightNotFound

`symi::api::partial_differential_equations::PartialDifferentialEquationSimilarityReductionDecline — WeightNotFound`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsimilarityreductiondecline_name.e484d571f373"></a>
### api::partial_differential_equations::PartialDifferentialEquationSimilarityReductionDecline::name

`symi::api::partial_differential_equations::PartialDifferentialEquationSimilarityReductionDecline — pub fn name(self) -> &'static str`

Returns `&'static str`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsimilaritysolution.4463528c49f4"></a>
### api::partial_differential_equations::PartialDifferentialEquationSimilaritySolution

`symi::api::partial_differential_equations — pub struct PartialDifferentialEquationSimilaritySolution {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsimilaritysolution_decline.148faa253285"></a>
### api::partial_differential_equations::PartialDifferentialEquationSimilaritySolution::decline

`symi::api::partial_differential_equations::PartialDifferentialEquationSimilaritySolution — pub fn decline(&self) -> Option<PartialDifferentialEquationSimilarityReductionDecline>`

Returns `Option<PartialDifferentialEquationSimilarityReductionDecline>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsimilaritysolution_invariant.ce6ba40a27c1"></a>
### api::partial_differential_equations::PartialDifferentialEquationSimilaritySolution::invariant

`symi::api::partial_differential_equations::PartialDifferentialEquationSimilaritySolution — pub fn invariant(&self) -> Option<Expression>`

Returns `Option<Expression>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsimilaritysolution_lifted_constants.fd74f4f11a63"></a>
### api::partial_differential_equations::PartialDifferentialEquationSimilaritySolution::lifted_constants

`symi::api::partial_differential_equations::PartialDifferentialEquationSimilaritySolution — pub fn lifted_constants(&self) -> Vec<Expression>`

Returns `Vec<Expression>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsimilaritysolution_lifted_family.6cf0b41518ce"></a>
### api::partial_differential_equations::PartialDifferentialEquationSimilaritySolution::lifted_family

`symi::api::partial_differential_equations::PartialDifferentialEquationSimilaritySolution — pub fn lifted_family(&self) -> Option<PartialDifferentialEquationSolutionFamily>`

Returns `Option<PartialDifferentialEquationSolutionFamily>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsimilaritysolution_lifted_family_verification.02c41330ac7b"></a>
### api::partial_differential_equations::PartialDifferentialEquationSimilaritySolution::lifted_family_verification

`symi::api::partial_differential_equations::PartialDifferentialEquationSimilaritySolution — pub fn lifted_family_verification(&self) -> Option<PartialDifferentialEquationVerificationVerdict>`

Returns `Option<PartialDifferentialEquationVerificationVerdict>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsimilaritysolution_multiplier.17e491d34475"></a>
### api::partial_differential_equations::PartialDifferentialEquationSimilaritySolution::multiplier

`symi::api::partial_differential_equations::PartialDifferentialEquationSimilaritySolution — pub fn multiplier(&self) -> Option<Expression>`

Returns `Option<Expression>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsimilaritysolution_outstanding_obligations.a86725fee4fd"></a>
### api::partial_differential_equations::PartialDifferentialEquationSimilaritySolution::outstanding_obligations

`symi::api::partial_differential_equations::PartialDifferentialEquationSimilaritySolution — pub fn outstanding_obligations(&self) -> Vec<PartialDifferentialEquationSymmetryObligation>`

Returns `Vec<PartialDifferentialEquationSymmetryObligation>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsimilaritysolution_reduced_equation.fffb06c6cf3b"></a>
### api::partial_differential_equations::PartialDifferentialEquationSimilaritySolution::reduced_equation

`symi::api::partial_differential_equations::PartialDifferentialEquationSimilaritySolution — pub fn reduced_equation(&self) -> Option<Expression>`

Returns `Option<Expression>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsimilaritysolution_similarity_variable.d7325f16a24b"></a>
### api::partial_differential_equations::PartialDifferentialEquationSimilaritySolution::similarity_variable

`symi::api::partial_differential_equations::PartialDifferentialEquationSimilaritySolution — pub fn similarity_variable(&self) -> Option<Expression>`

Returns `Option<Expression>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsimilaritysolution_weight.b5785a4483b9"></a>
### api::partial_differential_equations::PartialDifferentialEquationSimilaritySolution::weight

`symi::api::partial_differential_equations::PartialDifferentialEquationSimilaritySolution — pub fn weight(&self) -> Option<Expression>`

Returns `Option<Expression>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolutionclass.e08cdb8a5f09"></a>
### api::partial_differential_equations::PartialDifferentialEquationSolutionClass

`symi::api::partial_differential_equations — pub enum PartialDifferentialEquationSolutionClass {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolutionclass_polynomialgrowth.98bacca08be0"></a>
### api::partial_differential_equations::PartialDifferentialEquationSolutionClass::PolynomialGrowth

`symi::api::partial_differential_equations::PartialDifferentialEquationSolutionClass — PolynomialGrowth`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolutionclass_unrestricted.536f84c13aa0"></a>
### api::partial_differential_equations::PartialDifferentialEquationSolutionClass::Unrestricted

`symi::api::partial_differential_equations::PartialDifferentialEquationSolutionClass — Unrestricted`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolutionclass_from_name.0d66ece9ca79"></a>
### api::partial_differential_equations::PartialDifferentialEquationSolutionClass::from_name

`symi::api::partial_differential_equations::PartialDifferentialEquationSolutionClass — pub fn from_name(name: &str) -> Result<Self, ApiError>`

Returns `Result<Self, ApiError>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolutionclass_name.7fb7155cf71f"></a>
### api::partial_differential_equations::PartialDifferentialEquationSolutionClass::name

`symi::api::partial_differential_equations::PartialDifferentialEquationSolutionClass — pub fn name(self) -> &'static str`

Returns `&'static str`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolutionfamily.9a014ebc7b60"></a>
### api::partial_differential_equations::PartialDifferentialEquationSolutionFamily

`symi::api::partial_differential_equations — pub struct PartialDifferentialEquationSolutionFamily {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolutionfamily_arbitrary_functions.3d684c89382c"></a>
### api::partial_differential_equations::PartialDifferentialEquationSolutionFamily::arbitrary_functions

`symi::api::partial_differential_equations::PartialDifferentialEquationSolutionFamily — pub fn arbitrary_functions(&self) -> Result<Vec<PartialDifferentialEquationArbitraryFunction>, ApiError>`

Returns `Result<Vec<PartialDifferentialEquationArbitraryFunction>, ApiError>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolutionfamily_form.83070b1c98b6"></a>
### api::partial_differential_equations::PartialDifferentialEquationSolutionFamily::form

`symi::api::partial_differential_equations::PartialDifferentialEquationSolutionFamily — pub fn form(&self) -> Result<PartialDifferentialEquationSolutionForm, ApiError>`

Returns `Result<PartialDifferentialEquationSolutionForm, ApiError>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolutionfamily_proof_obligations.71d39adfc19c"></a>
### api::partial_differential_equations::PartialDifferentialEquationSolutionFamily::proof_obligations

`symi::api::partial_differential_equations::PartialDifferentialEquationSolutionFamily — pub fn proof_obligations(&self) -> Result<Vec<PartialDifferentialEquationProofObligation>, ApiError>`

Returns `Result<Vec<PartialDifferentialEquationProofObligation>, ApiError>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolutionfamily_session.d8c44de431c8"></a>
### api::partial_differential_equations::PartialDifferentialEquationSolutionFamily::session

`symi::api::partial_differential_equations::PartialDifferentialEquationSolutionFamily — pub fn session(&self) -> Session`

Returns `Session`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolutionform.ef80dbcdf0fc"></a>
### api::partial_differential_equations::PartialDifferentialEquationSolutionForm

`symi::api::partial_differential_equations — pub enum PartialDifferentialEquationSolutionForm {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolutionform_explicit.c79603a4dc58"></a>
### api::partial_differential_equations::PartialDifferentialEquationSolutionForm::Explicit

`symi::api::partial_differential_equations::PartialDifferentialEquationSolutionForm — Explicit(Expression)`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolutionform_implicit.5dd3f21882bc"></a>
### api::partial_differential_equations::PartialDifferentialEquationSolutionForm::Implicit

`symi::api::partial_differential_equations::PartialDifferentialEquationSolutionForm — Implicit(Expression)`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolutionprovenance.97cec4c6002f"></a>
### api::partial_differential_equations::PartialDifferentialEquationSolutionProvenance

`symi::api::partial_differential_equations — pub struct PartialDifferentialEquationSolutionProvenance {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolutionprovenance_discharged_obligations.4ada93ecd005"></a>
### api::partial_differential_equations::PartialDifferentialEquationSolutionProvenance::discharged_obligations

`symi::api::partial_differential_equations::PartialDifferentialEquationSolutionProvenance — pub fn discharged_obligations(&self) -> Vec<PartialDifferentialEquationProofObligation>`

Returns `Vec<PartialDifferentialEquationProofObligation>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolutionprovenance_linearity.ca56ec745e53"></a>
### api::partial_differential_equations::PartialDifferentialEquationSolutionProvenance::linearity

`symi::api::partial_differential_equations::PartialDifferentialEquationSolutionProvenance — pub fn linearity(&self) -> PartialDifferentialEquationLinearity`

Returns `PartialDifferentialEquationLinearity`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolutionprovenance_method.fbf2f7de244b"></a>
### api::partial_differential_equations::PartialDifferentialEquationSolutionProvenance::method

`symi::api::partial_differential_equations::PartialDifferentialEquationSolutionProvenance — pub fn method(&self) -> PartialDifferentialEquationMethod`

Returns `PartialDifferentialEquationMethod`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolutionprovenance_order.b614cb9d30eb"></a>
### api::partial_differential_equations::PartialDifferentialEquationSolutionProvenance::order

`symi::api::partial_differential_equations::PartialDifferentialEquationSolutionProvenance — pub fn order(&self) -> usize`

Returns `usize`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolvedecline.90dbbeb355f6"></a>
### api::partial_differential_equations::PartialDifferentialEquationSolveDecline

`symi::api::partial_differential_equations — pub enum PartialDifferentialEquationSolveDecline {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolvedecline_canonicalcoordinatesdeclined.d03c15ba3ce4"></a>
### api::partial_differential_equations::PartialDifferentialEquationSolveDecline::CanonicalCoordinatesDeclined

`symi::api::partial_differential_equations::PartialDifferentialEquationSolveDecline — CanonicalCoordinatesDeclined`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolvedecline_canonicalreductionsucceededbutnodownstreamsolver.3c0b3c126f3b"></a>
### api::partial_differential_equations::PartialDifferentialEquationSolveDecline::CanonicalReductionSucceededButNoDownstreamSolver

`symi::api::partial_differential_equations::PartialDifferentialEquationSolveDecline — CanonicalReductionSucceededButNoDownstreamSolver`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolvedecline_characteristicdatanotlocallydetermining.200b4c5ff152"></a>
### api::partial_differential_equations::PartialDifferentialEquationSolveDecline::CharacteristicDataNotLocallyDetermining

`symi::api::partial_differential_equations::PartialDifferentialEquationSolveDecline — CharacteristicDataNotLocallyDetermining`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolvedecline_characteristicsdeclined.204be7ef7a23"></a>
### api::partial_differential_equations::PartialDifferentialEquationSolveDecline::CharacteristicsDeclined

`symi::api::partial_differential_equations::PartialDifferentialEquationSolveDecline — CharacteristicsDeclined`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolvedecline_classificationdeclined.1972c234b163"></a>
### api::partial_differential_equations::PartialDifferentialEquationSolveDecline::ClassificationDeclined

`symi::api::partial_differential_equations::PartialDifferentialEquationSolveDecline — ClassificationDeclined`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolvedecline_completefamilynotestablished.36e84013e522"></a>
### api::partial_differential_equations::PartialDifferentialEquationSolveDecline::CompleteFamilyNotEstablished

`symi::api::partial_differential_equations::PartialDifferentialEquationSolveDecline — CompleteFamilyNotEstablished`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolvedecline_completenessholdsonlyonanarrowersolutionclass.b69b2a956261"></a>
### api::partial_differential_equations::PartialDifferentialEquationSolveDecline::CompletenessHoldsOnlyOnANarrowerSolutionClass

`symi::api::partial_differential_equations::PartialDifferentialEquationSolveDecline — CompletenessHoldsOnlyOnANarrowerSolutionClass`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolvedecline_declaredgeometrynotsupported.019a480d8280"></a>
### api::partial_differential_equations::PartialDifferentialEquationSolveDecline::DeclaredGeometryNotSupported

`symi::api::partial_differential_equations::PartialDifferentialEquationSolveDecline — DeclaredGeometryNotSupported`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolvedecline_declaredregularitynotsupported.0525972f589a"></a>
### api::partial_differential_equations::PartialDifferentialEquationSolveDecline::DeclaredRegularityNotSupported

`symi::api::partial_differential_equations::PartialDifferentialEquationSolveDecline — DeclaredRegularityNotSupported`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolvedecline_inconsistentcharacteristicdata.aa50647d2ee1"></a>
### api::partial_differential_equations::PartialDifferentialEquationSolveDecline::InconsistentCharacteristicData

`symi::api::partial_differential_equations::PartialDifferentialEquationSolveDecline — InconsistentCharacteristicData`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolvedecline_initialdataconvolutiondeclined.2c32f1cf679b"></a>
### api::partial_differential_equations::PartialDifferentialEquationSolveDecline::InitialDataConvolutionDeclined

`symi::api::partial_differential_equations::PartialDifferentialEquationSolveDecline — InitialDataConvolutionDeclined`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolvedecline_methodnotimplemented.20f693085bd8"></a>
### api::partial_differential_equations::PartialDifferentialEquationSolveDecline::MethodNotImplemented

`symi::api::partial_differential_equations::PartialDifferentialEquationSolveDecline — MethodNotImplemented`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolvedecline_noimplementedmethodclosed.e85de1dc8479"></a>
### api::partial_differential_equations::PartialDifferentialEquationSolveDecline::NoImplementedMethodClosed

`symi::api::partial_differential_equations::PartialDifferentialEquationSolveDecline — NoImplementedMethodClosed`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolvedecline_repeatedintegrationdeclined.6a22d61c0ad4"></a>
### api::partial_differential_equations::PartialDifferentialEquationSolveDecline::RepeatedIntegrationDeclined

`symi::api::partial_differential_equations::PartialDifferentialEquationSolveDecline — RepeatedIntegrationDeclined`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolvedecline_transversalityunknown.6cd097c1c5bf"></a>
### api::partial_differential_equations::PartialDifferentialEquationSolveDecline::TransversalityUnknown

`symi::api::partial_differential_equations::PartialDifferentialEquationSolveDecline — TransversalityUnknown`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolvedecline_name.9af083e95c6d"></a>
### api::partial_differential_equations::PartialDifferentialEquationSolveDecline::name

`symi::api::partial_differential_equations::PartialDifferentialEquationSolveDecline — pub fn name(self) -> &'static str`

Returns `&'static str`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolveoptions.010bdc291bad"></a>
### api::partial_differential_equations::PartialDifferentialEquationSolveOptions

`symi::api::partial_differential_equations — pub struct PartialDifferentialEquationSolveOptions {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolveoptions_method.adb02ce51909"></a>
### api::partial_differential_equations::PartialDifferentialEquationSolveOptions::method

`symi::api::partial_differential_equations::PartialDifferentialEquationSolveOptions — pub fn method(&self) -> PartialDifferentialEquationMethod`

Returns `PartialDifferentialEquationMethod`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolveoptions_new.515b2e254e91"></a>
### api::partial_differential_equations::PartialDifferentialEquationSolveOptions::new

`symi::api::partial_differential_equations::PartialDifferentialEquationSolveOptions — pub fn new(method: PartialDifferentialEquationMethod, transform_axes: Vec<PartialDifferentialEquationTransformAxisOption>) -> Self`

Returns `Self`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolveoptions_transform_axes.04c4a1c9e2d4"></a>
### api::partial_differential_equations::PartialDifferentialEquationSolveOptions::transform_axes

`symi::api::partial_differential_equations::PartialDifferentialEquationSolveOptions — pub fn transform_axes(&self) -> &[PartialDifferentialEquationTransformAxisOption]`

Returns `&[PartialDifferentialEquationTransformAxisOption]`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolveresult.e2f6e6a97f0a"></a>
### api::partial_differential_equations::PartialDifferentialEquationSolveResult

`symi::api::partial_differential_equations — pub struct PartialDifferentialEquationSolveResult {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolveresult_decline.2727b3d10ca2"></a>
### api::partial_differential_equations::PartialDifferentialEquationSolveResult::decline

`symi::api::partial_differential_equations::PartialDifferentialEquationSolveResult — pub fn decline(&self) -> Option<PartialDifferentialEquationSolveDecline>`

Returns `Option<PartialDifferentialEquationSolveDecline>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolveresult_method.610447713a38"></a>
### api::partial_differential_equations::PartialDifferentialEquationSolveResult::method

`symi::api::partial_differential_equations::PartialDifferentialEquationSolveResult — pub fn method(&self) -> Option<PartialDifferentialEquationMethod>`

Returns `Option<PartialDifferentialEquationMethod>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolveresult_portfolio_declines.da6c19fc27eb"></a>
### api::partial_differential_equations::PartialDifferentialEquationSolveResult::portfolio_declines

`symi::api::partial_differential_equations::PartialDifferentialEquationSolveResult — pub fn portfolio_declines(&self) -> Vec<PartialDifferentialEquationPortfolioDecline>`

Returns `Vec<PartialDifferentialEquationPortfolioDecline>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolveresult_provenance.b2e3c6340ff3"></a>
### api::partial_differential_equations::PartialDifferentialEquationSolveResult::provenance

`symi::api::partial_differential_equations::PartialDifferentialEquationSolveResult — pub fn provenance(&self) -> Option<PartialDifferentialEquationSolutionProvenance>`

Returns `Option<PartialDifferentialEquationSolutionProvenance>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolveresult_solution.80a0766fb548"></a>
### api::partial_differential_equations::PartialDifferentialEquationSolveResult::solution

`symi::api::partial_differential_equations::PartialDifferentialEquationSolveResult — pub fn solution(&self) -> Option<PartialDifferentialEquationSolutionFamily>`

Returns `Option<PartialDifferentialEquationSolutionFamily>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolveresult_verification.55194f58b824"></a>
### api::partial_differential_equations::PartialDifferentialEquationSolveResult::verification

`symi::api::partial_differential_equations::PartialDifferentialEquationSolveResult — pub fn verification(&self) -> Option<PartialDifferentialEquationVerificationReport>`

Returns `Option<PartialDifferentialEquationVerificationReport>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolveverdict.e058d56d56bc"></a>
### api::partial_differential_equations::PartialDifferentialEquationSolveVerdict

`symi::api::partial_differential_equations — pub enum PartialDifferentialEquationSolveVerdict {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolveverdict_declined.270ee8113617"></a>
### api::partial_differential_equations::PartialDifferentialEquationSolveVerdict::Declined

`symi::api::partial_differential_equations::PartialDifferentialEquationSolveVerdict — Declined`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolveverdict_solved.9767ff98d0d0"></a>
### api::partial_differential_equations::PartialDifferentialEquationSolveVerdict::Solved

`symi::api::partial_differential_equations::PartialDifferentialEquationSolveVerdict — Solved`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolveverdict_name.5c5c2b87bcda"></a>
### api::partial_differential_equations::PartialDifferentialEquationSolveVerdict::name

`symi::api::partial_differential_equations::PartialDifferentialEquationSolveVerdict — pub fn name(self) -> &'static str`

Returns `&'static str`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsymmetryactiondecline.b2993e3d6474"></a>
### api::partial_differential_equations::PartialDifferentialEquationSymmetryActionDecline

`symi::api::partial_differential_equations — pub enum PartialDifferentialEquationSymmetryActionDecline {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsymmetryactiondecline_actionnotverified.c4449d19da5c"></a>
### api::partial_differential_equations::PartialDifferentialEquationSymmetryActionDecline::ActionNotVerified

`symi::api::partial_differential_equations::PartialDifferentialEquationSymmetryActionDecline — ActionNotVerified`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsymmetryactiondecline_generatorsdonotspanthealgebra.14d9b87968ec"></a>
### api::partial_differential_equations::PartialDifferentialEquationSymmetryActionDecline::GeneratorsDoNotSpanTheAlgebra

`symi::api::partial_differential_equations::PartialDifferentialEquationSymmetryActionDecline — GeneratorsDoNotSpanTheAlgebra`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsymmetryactiondecline_incompatibletransformations.b75f8e5c1403"></a>
### api::partial_differential_equations::PartialDifferentialEquationSymmetryActionDecline::IncompatibleTransformations

`symi::api::partial_differential_equations::PartialDifferentialEquationSymmetryActionDecline — IncompatibleTransformations`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsymmetryactiondecline_nottheidentityattheorigin.f0f09c72134c"></a>
### api::partial_differential_equations::PartialDifferentialEquationSymmetryActionDecline::NotTheIdentityAtTheOrigin

`symi::api::partial_differential_equations::PartialDifferentialEquationSymmetryActionDecline — NotTheIdentityAtTheOrigin`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsymmetryactiondecline_oneparametergroupnotintegrated.49a031724394"></a>
### api::partial_differential_equations::PartialDifferentialEquationSymmetryActionDecline::OneParameterGroupNotIntegrated

`symi::api::partial_differential_equations::PartialDifferentialEquationSymmetryActionDecline — OneParameterGroupNotIntegrated`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsymmetryactiondecline_pointsymmetryalgebranotderived.7deee1979b03"></a>
### api::partial_differential_equations::PartialDifferentialEquationSymmetryActionDecline::PointSymmetryAlgebraNotDerived

`symi::api::partial_differential_equations::PartialDifferentialEquationSymmetryActionDecline — PointSymmetryAlgebraNotDerived`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsymmetryactiondecline_name.723da4ef12e3"></a>
### api::partial_differential_equations::PartialDifferentialEquationSymmetryActionDecline::name

`symi::api::partial_differential_equations::PartialDifferentialEquationSymmetryActionDecline — pub fn name(self) -> &'static str`

Returns `&'static str`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsymmetryobligation.23a34e411f30"></a>
### api::partial_differential_equations::PartialDifferentialEquationSymmetryObligation

`symi::api::partial_differential_equations — pub enum PartialDifferentialEquationSymmetryObligation {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsymmetryobligation_discretepointsymmetriesnotderived.c05da2ceb85c"></a>
### api::partial_differential_equations::PartialDifferentialEquationSymmetryObligation::DiscretePointSymmetriesNotDerived

`symi::api::partial_differential_equations::PartialDifferentialEquationSymmetryObligation — DiscretePointSymmetriesNotDerived`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsymmetryobligation_similarityfamilyisnotthegeneralsolution.26bc339f7ee7"></a>
### api::partial_differential_equations::PartialDifferentialEquationSymmetryObligation::SimilarityFamilyIsNotTheGeneralSolution

`symi::api::partial_differential_equations::PartialDifferentialEquationSymmetryObligation — SimilarityFamilyIsNotTheGeneralSolution`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsymmetryobligation_transformedcoordinateslieintheseedchart.fbc11be0361e"></a>
### api::partial_differential_equations::PartialDifferentialEquationSymmetryObligation::TransformedCoordinatesLieInTheSeedChart

`symi::api::partial_differential_equations::PartialDifferentialEquationSymmetryObligation — TransformedCoordinatesLieInTheSeedChart`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsymmetryobligation_name.f042604c0e91"></a>
### api::partial_differential_equations::PartialDifferentialEquationSymmetryObligation::name

`symi::api::partial_differential_equations::PartialDifferentialEquationSymmetryObligation — pub fn name(self) -> &'static str`

Returns `&'static str`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformaxiskind.aede7dded2e3"></a>
### api::partial_differential_equations::PartialDifferentialEquationTransformAxisKind

`symi::api::partial_differential_equations — pub enum PartialDifferentialEquationTransformAxisKind {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformaxiskind_fourierwholerealline.938c761b56ef"></a>
### api::partial_differential_equations::PartialDifferentialEquationTransformAxisKind::FourierWholeRealLine

`symi::api::partial_differential_equations::PartialDifferentialEquationTransformAxisKind — FourierWholeRealLine`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformaxiskind_laplacenonnegativehalfline.dc2d1cb94ed2"></a>
### api::partial_differential_equations::PartialDifferentialEquationTransformAxisKind::LaplaceNonnegativeHalfLine

`symi::api::partial_differential_equations::PartialDifferentialEquationTransformAxisKind — LaplaceNonnegativeHalfLine`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformaxiskind_from_name.465cc3ce7199"></a>
### api::partial_differential_equations::PartialDifferentialEquationTransformAxisKind::from_name

`symi::api::partial_differential_equations::PartialDifferentialEquationTransformAxisKind — pub fn from_name(name: &str) -> Result<Self, ApiError>`

Returns `Result<Self, ApiError>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformaxiskind_name.8153418b7865"></a>
### api::partial_differential_equations::PartialDifferentialEquationTransformAxisKind::name

`symi::api::partial_differential_equations::PartialDifferentialEquationTransformAxisKind — pub fn name(self) -> &'static str`

Returns `&'static str`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformaxisoption.393ba5b222eb"></a>
### api::partial_differential_equations::PartialDifferentialEquationTransformAxisOption

`symi::api::partial_differential_equations — pub struct PartialDifferentialEquationTransformAxisOption {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformaxisoption_new.0890d6f0bf21"></a>
### api::partial_differential_equations::PartialDifferentialEquationTransformAxisOption::new

`symi::api::partial_differential_equations::PartialDifferentialEquationTransformAxisOption — pub fn new(source_variable_name: impl Into<String>, transform_axis_kind: PartialDifferentialEquationTransformAxisKind, transform_variable_name: Option<String>) -> Self`

Returns `Self`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformaxisoption_source_variable_name.5a2985fb95df"></a>
### api::partial_differential_equations::PartialDifferentialEquationTransformAxisOption::source_variable_name

`symi::api::partial_differential_equations::PartialDifferentialEquationTransformAxisOption — pub fn source_variable_name(&self) -> &str`

Returns `&str`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformaxisoption_transform_axis_kind.0949f589db0e"></a>
### api::partial_differential_equations::PartialDifferentialEquationTransformAxisOption::transform_axis_kind

`symi::api::partial_differential_equations::PartialDifferentialEquationTransformAxisOption — pub fn transform_axis_kind(&self) -> PartialDifferentialEquationTransformAxisKind`

Returns `PartialDifferentialEquationTransformAxisKind`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformaxisoption_transform_variable_name.51adcf09b461"></a>
### api::partial_differential_equations::PartialDifferentialEquationTransformAxisOption::transform_variable_name

`symi::api::partial_differential_equations::PartialDifferentialEquationTransformAxisOption — pub fn transform_variable_name(&self) -> Option<&str>`

Returns `Option<&str>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationdecline.6018d441431a"></a>
### api::partial_differential_equations::PartialDifferentialEquationTransformationDecline

`symi::api::partial_differential_equations — pub enum PartialDifferentialEquationTransformationDecline {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationdecline_conditionderivativeordernotsupported.ed7ed082ee2d"></a>
### api::partial_differential_equations::PartialDifferentialEquationTransformationDecline::ConditionDerivativeOrderNotSupported

`symi::api::partial_differential_equations::PartialDifferentialEquationTransformationDecline — ConditionDerivativeOrderNotSupported`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationdecline_coordinatemaparitymismatch.2e3a168c4642"></a>
### api::partial_differential_equations::PartialDifferentialEquationTransformationDecline::CoordinateMapArityMismatch

`symi::api::partial_differential_equations::PartialDifferentialEquationTransformationDecline — CoordinateMapArityMismatch`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationdecline_coordinatemapcontainsdependentfunction.bedf880d2627"></a>
### api::partial_differential_equations::PartialDifferentialEquationTransformationDecline::CoordinateMapContainsDependentFunction

`symi::api::partial_differential_equations::PartialDifferentialEquationTransformationDecline — CoordinateMapContainsDependentFunction`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationdecline_coordinatemapdirectionmissing.d5f8376ab0cf"></a>
### api::partial_differential_equations::PartialDifferentialEquationTransformationDecline::CoordinateMapDirectionMissing

`symi::api::partial_differential_equations::PartialDifferentialEquationTransformationDecline — CoordinateMapDirectionMissing`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationdecline_coordinatemapuseswrongvariables.c4e24873971e"></a>
### api::partial_differential_equations::PartialDifferentialEquationTransformationDecline::CoordinateMapUsesWrongVariables

`symi::api::partial_differential_equations::PartialDifferentialEquationTransformationDecline — CoordinateMapUsesWrongVariables`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationdecline_duplicateorcollidingcoordinatevariables.ccad5a51e453"></a>
### api::partial_differential_equations::PartialDifferentialEquationTransformationDecline::DuplicateOrCollidingCoordinateVariables

`symi::api::partial_differential_equations::PartialDifferentialEquationTransformationDecline — DuplicateOrCollidingCoordinateVariables`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationdecline_inversemapinconclusive.34253ff044f6"></a>
### api::partial_differential_equations::PartialDifferentialEquationTransformationDecline::InverseMapInconclusive

`symi::api::partial_differential_equations::PartialDifferentialEquationTransformationDecline — InverseMapInconclusive`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationdecline_inversemaprejected.10fbe7da6507"></a>
### api::partial_differential_equations::PartialDifferentialEquationTransformationDecline::InverseMapRejected

`symi::api::partial_differential_equations::PartialDifferentialEquationTransformationDecline — InverseMapRejected`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationdecline_inversenotrecovered.1cced9fd1abd"></a>
### api::partial_differential_equations::PartialDifferentialEquationTransformationDecline::InverseNotRecovered

`symi::api::partial_differential_equations::PartialDifferentialEquationTransformationDecline — InverseNotRecovered`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationdecline_jacobianiszero.493416d7333d"></a>
### api::partial_differential_equations::PartialDifferentialEquationTransformationDecline::JacobianIsZero

`symi::api::partial_differential_equations::PartialDifferentialEquationTransformationDecline — JacobianIsZero`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationdecline_jacobiannonzeronotproved.86aa8dc4d559"></a>
### api::partial_differential_equations::PartialDifferentialEquationTransformationDecline::JacobianNonzeroNotProved

`symi::api::partial_differential_equations::PartialDifferentialEquationTransformationDecline — JacobianNonzeroNotProved`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationdecline_targetdependentfunctioninvalid.03d916d18e4f"></a>
### api::partial_differential_equations::PartialDifferentialEquationTransformationDecline::TargetDependentFunctionInvalid

`symi::api::partial_differential_equations::PartialDifferentialEquationTransformationDecline — TargetDependentFunctionInvalid`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationdecline_targetprobleminvalid.9a79f5cd19c5"></a>
### api::partial_differential_equations::PartialDifferentialEquationTransformationDecline::TargetProblemInvalid

`symi::api::partial_differential_equations::PartialDifferentialEquationTransformationDecline — TargetProblemInvalid`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationdecline_twosourceandtargetvariablesrequired.4a90eaba2c47"></a>
### api::partial_differential_equations::PartialDifferentialEquationTransformationDecline::TwoSourceAndTargetVariablesRequired

`symi::api::partial_differential_equations::PartialDifferentialEquationTransformationDecline — TwoSourceAndTargetVariablesRequired`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationdecline_name.7a860f374ae5"></a>
### api::partial_differential_equations::PartialDifferentialEquationTransformationDecline::name

`symi::api::partial_differential_equations::PartialDifferentialEquationTransformationDecline — pub fn name(self) -> &'static str`

Returns `&'static str`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationresult.0ed51e0af405"></a>
### api::partial_differential_equations::PartialDifferentialEquationTransformationResult

`symi::api::partial_differential_equations — pub struct PartialDifferentialEquationTransformationResult {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationresult_coordinate_change.e934f246e68d"></a>
### api::partial_differential_equations::PartialDifferentialEquationTransformationResult::coordinate_change

`symi::api::partial_differential_equations::PartialDifferentialEquationTransformationResult — pub fn coordinate_change(&self) -> Option<PartialDifferentialEquationCoordinateChange>`

Returns `Option<PartialDifferentialEquationCoordinateChange>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationresult_decline.63f4ccaca3a0"></a>
### api::partial_differential_equations::PartialDifferentialEquationTransformationResult::decline

`symi::api::partial_differential_equations::PartialDifferentialEquationTransformationResult — pub fn decline(&self) -> Option<PartialDifferentialEquationTransformationDecline>`

Returns `Option<PartialDifferentialEquationTransformationDecline>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationresult_normalization_multiplier.795c2811c8a6"></a>
### api::partial_differential_equations::PartialDifferentialEquationTransformationResult::normalization_multiplier

`symi::api::partial_differential_equations::PartialDifferentialEquationTransformationResult — pub fn normalization_multiplier(&self) -> Option<Expression>`

Returns `Option<Expression>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationresult_target_problem.dc9c65d28d15"></a>
### api::partial_differential_equations::PartialDifferentialEquationTransformationResult::target_problem

`symi::api::partial_differential_equations::PartialDifferentialEquationTransformationResult — pub fn target_problem(&self) -> Option<PartialDifferentialEquationProblem>`

Returns `Option<PartialDifferentialEquationProblem>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationresult_transformed.0b2e82926dcb"></a>
### api::partial_differential_equations::PartialDifferentialEquationTransformationResult::transformed

`symi::api::partial_differential_equations::PartialDifferentialEquationTransformationResult — pub fn transformed(&self) -> bool`

Returns `bool`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationverificationreport.709c5818cf06"></a>
### api::partial_differential_equations::PartialDifferentialEquationTransformationVerificationReport

`symi::api::partial_differential_equations — pub struct PartialDifferentialEquationTransformationVerificationReport {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationverificationreport_claimed_governing_residual.21616982fd79"></a>
### api::partial_differential_equations::PartialDifferentialEquationTransformationVerificationReport::claimed_governing_residual

`symi::api::partial_differential_equations::PartialDifferentialEquationTransformationVerificationReport — pub fn claimed_governing_residual(&self) -> Expression`

Returns `Expression`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationverificationreport_composition_residuals.5c83a3eccf18"></a>
### api::partial_differential_equations::PartialDifferentialEquationTransformationVerificationReport::composition_residuals

`symi::api::partial_differential_equations::PartialDifferentialEquationTransformationVerificationReport — pub fn composition_residuals(&self) -> Vec<Expression>`

Returns `Vec<Expression>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationverificationreport_principal_congruence_residuals.0dced90a5038"></a>
### api::partial_differential_equations::PartialDifferentialEquationTransformationVerificationReport::principal_congruence_residuals

`symi::api::partial_differential_equations::PartialDifferentialEquationTransformationVerificationReport — pub fn principal_congruence_residuals(&self) -> Vec<Expression>`

Returns `Vec<Expression>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationverificationreport_transformed_governing_residual.456735693b59"></a>
### api::partial_differential_equations::PartialDifferentialEquationTransformationVerificationReport::transformed_governing_residual

`symi::api::partial_differential_equations::PartialDifferentialEquationTransformationVerificationReport — pub fn transformed_governing_residual(&self) -> Expression`

Returns `Expression`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationverificationinconclusivereason.10d9bc5fb58b"></a>
### api::partial_differential_equations::PartialDifferentialEquationVerificationInconclusiveReason

`symi::api::partial_differential_equations — pub enum PartialDifferentialEquationVerificationInconclusiveReason {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationverificationinconclusivereason_implicitsolutioncontainsderivative.5580af305835"></a>
### api::partial_differential_equations::PartialDifferentialEquationVerificationInconclusiveReason::ImplicitSolutionContainsDerivative

`symi::api::partial_differential_equations::PartialDifferentialEquationVerificationInconclusiveReason — ImplicitSolutionContainsDerivative`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationverificationinconclusivereason_implicitsolutionnotisolatable.fc1fedf0e417"></a>
### api::partial_differential_equations::PartialDifferentialEquationVerificationInconclusiveReason::ImplicitSolutionNotIsolatable

`symi::api::partial_differential_equations::PartialDifferentialEquationVerificationInconclusiveReason — ImplicitSolutionNotIsolatable`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationverificationinconclusivereason_malformeddependentoccurrence.5472f1f2b189"></a>
### api::partial_differential_equations::PartialDifferentialEquationVerificationInconclusiveReason::MalformedDependentOccurrence

`symi::api::partial_differential_equations::PartialDifferentialEquationVerificationInconclusiveReason — MalformedDependentOccurrence`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationverificationinconclusivereason_residualzeronotproved.da8c9250304e"></a>
### api::partial_differential_equations::PartialDifferentialEquationVerificationInconclusiveReason::ResidualZeroNotProved

`symi::api::partial_differential_equations::PartialDifferentialEquationVerificationInconclusiveReason — ResidualZeroNotProved`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationverificationinconclusivereason_name.3062db86760e"></a>
### api::partial_differential_equations::PartialDifferentialEquationVerificationInconclusiveReason::name

`symi::api::partial_differential_equations::PartialDifferentialEquationVerificationInconclusiveReason — pub fn name(self) -> &'static str`

Returns `&'static str`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationverificationreport.28cb17ecc4cd"></a>
### api::partial_differential_equations::PartialDifferentialEquationVerificationReport

`symi::api::partial_differential_equations — pub struct PartialDifferentialEquationVerificationReport {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationverificationreport_boundary_condition_residuals.ea74210cddf7"></a>
### api::partial_differential_equations::PartialDifferentialEquationVerificationReport::boundary_condition_residuals

`symi::api::partial_differential_equations::PartialDifferentialEquationVerificationReport — pub fn boundary_condition_residuals(&self) -> Vec<PartialDifferentialEquationVerificationResidual>`

Returns `Vec<PartialDifferentialEquationVerificationResidual>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationverificationreport_explicit_branch.082001e89735"></a>
### api::partial_differential_equations::PartialDifferentialEquationVerificationReport::explicit_branch

`symi::api::partial_differential_equations::PartialDifferentialEquationVerificationReport — pub fn explicit_branch(&self) -> Option<Expression>`

Returns `Option<Expression>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationverificationreport_governing_residual.db8606c912c7"></a>
### api::partial_differential_equations::PartialDifferentialEquationVerificationReport::governing_residual

`symi::api::partial_differential_equations::PartialDifferentialEquationVerificationReport — pub fn governing_residual(&self) -> PartialDifferentialEquationVerificationResidual`

Returns `PartialDifferentialEquationVerificationResidual`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationverificationreport_inconclusive_reason.eac51cb91309"></a>
### api::partial_differential_equations::PartialDifferentialEquationVerificationReport::inconclusive_reason

`symi::api::partial_differential_equations::PartialDifferentialEquationVerificationReport — pub fn inconclusive_reason(&self) -> Option<PartialDifferentialEquationVerificationInconclusiveReason>`

Returns `Option<PartialDifferentialEquationVerificationInconclusiveReason>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationverificationreport_initial_condition_residuals.51847cee7df3"></a>
### api::partial_differential_equations::PartialDifferentialEquationVerificationReport::initial_condition_residuals

`symi::api::partial_differential_equations::PartialDifferentialEquationVerificationReport — pub fn initial_condition_residuals(&self) -> Vec<PartialDifferentialEquationVerificationResidual>`

Returns `Vec<PartialDifferentialEquationVerificationResidual>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationverificationreport_proof_obligations.6001ca6b3edd"></a>
### api::partial_differential_equations::PartialDifferentialEquationVerificationReport::proof_obligations

`symi::api::partial_differential_equations::PartialDifferentialEquationVerificationReport — pub fn proof_obligations(&self) -> Vec<PartialDifferentialEquationProofObligation>`

Returns `Vec<PartialDifferentialEquationProofObligation>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationverificationresidual.545b0342b538"></a>
### api::partial_differential_equations::PartialDifferentialEquationVerificationResidual

`symi::api::partial_differential_equations — pub struct PartialDifferentialEquationVerificationResidual {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationverificationresidual_residual.9fd3c54180dc"></a>
### api::partial_differential_equations::PartialDifferentialEquationVerificationResidual::residual

`symi::api::partial_differential_equations::PartialDifferentialEquationVerificationResidual — pub fn residual(&self) -> Expression`

Returns `Expression`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationverificationverdict.0babd84d1943"></a>
### api::partial_differential_equations::PartialDifferentialEquationVerificationVerdict

`symi::api::partial_differential_equations — pub enum PartialDifferentialEquationVerificationVerdict {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationverificationverdict_inconclusive.e55383b11326"></a>
### api::partial_differential_equations::PartialDifferentialEquationVerificationVerdict::Inconclusive

`symi::api::partial_differential_equations::PartialDifferentialEquationVerificationVerdict — Inconclusive`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationverificationverdict_rejected.33293cdfc699"></a>
### api::partial_differential_equations::PartialDifferentialEquationVerificationVerdict::Rejected

`symi::api::partial_differential_equations::PartialDifferentialEquationVerificationVerdict — Rejected`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationverificationverdict_verified.429e1e27314a"></a>
### api::partial_differential_equations::PartialDifferentialEquationVerificationVerdict::Verified

`symi::api::partial_differential_equations::PartialDifferentialEquationVerificationVerdict — Verified`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationverificationverdict_name.9bb54d57e951"></a>
### api::partial_differential_equations::PartialDifferentialEquationVerificationVerdict::name

`symi::api::partial_differential_equations::PartialDifferentialEquationVerificationVerdict — pub fn name(self) -> &'static str`

Returns `&'static str`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_session_canonicalize_partial_differential_equation.7ff9b2f0c73d"></a>
### api::partial_differential_equations::Session::canonicalize_partial_differential_equation

`symi::api::partial_differential_equations::Session — pub fn canonicalize_partial_differential_equation(&self, problem: &PartialDifferentialEquationProblem) -> Result<PartialDifferentialEquationCanonicalizationResult, ApiError>`

Returns `Result<PartialDifferentialEquationCanonicalizationResult, ApiError>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_session_change_partial_differential_equation_variables.c80d78a69247"></a>
### api::partial_differential_equations::Session::change_partial_differential_equation_variables

`symi::api::partial_differential_equations::Session — pub fn change_partial_differential_equation_variables<'a, IteratorType, VariableType>(&self, problem: &PartialDifferentialEquationProblem, target_variables: IteratorType, forward_coordinates: Option<&[Expression]>, inverse_coordinates: Option<&[Expression]>, target_dependent_function: Option<&UndefinedFunction>) -> Result<PartialDifferentialEquationTransformationResult, ApiError> where IteratorType: IntoIterator<Item = VariableType>, VariableType: Into<VariableLike<'a>>`

Returns `Result<PartialDifferentialEquationTransformationResult, ApiError>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_session_classify_partial_differential_equation.bb663f186946"></a>
### api::partial_differential_equations::Session::classify_partial_differential_equation

`symi::api::partial_differential_equations::Session — pub fn classify_partial_differential_equation(&self, problem: &PartialDifferentialEquationProblem) -> Result<PartialDifferentialEquationClassification, ApiError>`

Returns `Result<PartialDifferentialEquationClassification, ApiError>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_session_classify_second_order_partial_differential_equation.2ee401be960f"></a>
### api::partial_differential_equations::Session::classify_second_order_partial_differential_equation

`symi::api::partial_differential_equations::Session — pub fn classify_second_order_partial_differential_equation(&self, problem: &PartialDifferentialEquationProblem) -> Result<PartialDifferentialEquationSecondOrderClassification, ApiError>`

Returns `Result<PartialDifferentialEquationSecondOrderClassification, ApiError>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_session_discover_partial_differential_equation.7d2fc1d996f7"></a>
### api::partial_differential_equations::Session::discover_partial_differential_equation

`symi::api::partial_differential_equations::Session — pub fn discover_partial_differential_equation(&self, equation: &Expression, initial_conditions: &[Expression], boundary_conditions: &[Expression]) -> Result<PartialDifferentialEquationProblem, ApiError>`

Returns `Result<PartialDifferentialEquationProblem, ApiError>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_session_explicit_partial_differential_equation_solution.50aef34ccbd8"></a>
### api::partial_differential_equations::Session::explicit_partial_differential_equation_solution

`symi::api::partial_differential_equations::Session — pub fn explicit_partial_differential_equation_solution(&self, solution: &Expression) -> Result<PartialDifferentialEquationSolutionFamily, ApiError>`

Returns `Result<PartialDifferentialEquationSolutionFamily, ApiError>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_session_explicit_partial_differential_equation_solution_with_metadata.8ca27ce8ccd4"></a>
### api::partial_differential_equations::Session::explicit_partial_differential_equation_solution_with_metadata

`symi::api::partial_differential_equations::Session — pub fn explicit_partial_differential_equation_solution_with_metadata(&self, solution: &Expression, arbitrary_functions: &[PartialDifferentialEquationArbitraryFunction], proof_obligations: &[PartialDifferentialEquationProofObligation]) -> Result<PartialDifferentialEquationSolutionFamily, ApiError>`

Returns `Result<PartialDifferentialEquationSolutionFamily, ApiError>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_session_implicit_partial_differential_equation_solution.3c11fdbed7a5"></a>
### api::partial_differential_equations::Session::implicit_partial_differential_equation_solution

`symi::api::partial_differential_equations::Session — pub fn implicit_partial_differential_equation_solution(&self, residual: &Expression) -> Result<PartialDifferentialEquationSolutionFamily, ApiError>`

Returns `Result<PartialDifferentialEquationSolutionFamily, ApiError>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_session_implicit_partial_differential_equation_solution_with_metadata.5cb0eea1bd7b"></a>
### api::partial_differential_equations::Session::implicit_partial_differential_equation_solution_with_metadata

`symi::api::partial_differential_equations::Session — pub fn implicit_partial_differential_equation_solution_with_metadata(&self, residual: &Expression, arbitrary_functions: &[PartialDifferentialEquationArbitraryFunction], proof_obligations: &[PartialDifferentialEquationProofObligation]) -> Result<PartialDifferentialEquationSolutionFamily, ApiError>`

Returns `Result<PartialDifferentialEquationSolutionFamily, ApiError>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_session_partial_differential_equation.232200c4a999"></a>
### api::partial_differential_equations::Session::partial_differential_equation

`symi::api::partial_differential_equations::Session — pub fn partial_differential_equation<'a, IteratorType, VariableType>(&self, equation: &Expression, dependent_function: &UndefinedFunction, independent_variables: IteratorType, initial_conditions: &[Expression], boundary_conditions: &[Expression]) -> Result<PartialDifferentialEquationProblem, ApiError> where IteratorType: IntoIterator<Item = VariableType>, VariableType: Into<VariableLike<'a>>`

Returns `Result<PartialDifferentialEquationProblem, ApiError>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_session_partial_differential_equation_arbitrary_function.e2d55b24894c"></a>
### api::partial_differential_equations::Session::partial_differential_equation_arbitrary_function

`symi::api::partial_differential_equations::Session — pub fn partial_differential_equation_arbitrary_function(&self, preferred_name: &str, arity: usize) -> PartialDifferentialEquationArbitraryFunction`

Returns `PartialDifferentialEquationArbitraryFunction`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_session_separate_partial_differential_equation.ddd0270a3d84"></a>
### api::partial_differential_equations::Session::separate_partial_differential_equation

`symi::api::partial_differential_equations::Session — pub fn separate_partial_differential_equation(&self, problem: &PartialDifferentialEquationProblem) -> Result<PartialDifferentialEquationSeparationResult, ApiError>`

Returns `Result<PartialDifferentialEquationSeparationResult, ApiError>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_session_solve_partial_differential_equation.7580cd6977d1"></a>
### api::partial_differential_equations::Session::solve_partial_differential_equation

`symi::api::partial_differential_equations::Session — pub fn solve_partial_differential_equation(&self, problem: &PartialDifferentialEquationProblem, method: PartialDifferentialEquationMethod) -> Result<PartialDifferentialEquationSolveResult, ApiError>`

Returns `Result<PartialDifferentialEquationSolveResult, ApiError>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_session_solve_partial_differential_equation_with_options.b0b093a38ed9"></a>
### api::partial_differential_equations::Session::solve_partial_differential_equation_with_options

`symi::api::partial_differential_equations::Session — pub fn solve_partial_differential_equation_with_options(&self, problem: &PartialDifferentialEquationProblem, options: &PartialDifferentialEquationSolveOptions) -> Result<PartialDifferentialEquationSolveResult, ApiError>`

Returns `Result<PartialDifferentialEquationSolveResult, ApiError>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_session_solve_partial_differential_equation_with_transform_axes.96917e57c742"></a>
### api::partial_differential_equations::Session::solve_partial_differential_equation_with_transform_axes

`symi::api::partial_differential_equations::Session — pub fn solve_partial_differential_equation_with_transform_axes(&self, problem: &PartialDifferentialEquationProblem, method: PartialDifferentialEquationMethod, transform_axes: &[PartialDifferentialEquationTransformAxisOption]) -> Result<PartialDifferentialEquationSolveResult, ApiError>`

Returns `Result<PartialDifferentialEquationSolveResult, ApiError>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_session_solve_partial_differential_equation_with_transform_axis_specifications.7adb19f35a38"></a>
### api::partial_differential_equations::Session::solve_partial_differential_equation_with_transform_axis_specifications

`symi::api::partial_differential_equations::Session — pub fn solve_partial_differential_equation_with_transform_axis_specifications(&self, problem: &PartialDifferentialEquationProblem, method: PartialDifferentialEquationMethod, transform_axis_specifications: Vec<String>) -> Result<PartialDifferentialEquationSolveResult, ApiError>`

Returns `Result<PartialDifferentialEquationSolveResult, ApiError>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_session_verify_partial_differential_equation_coordinate_transformation.290b26e50ab4"></a>
### api::partial_differential_equations::Session::verify_partial_differential_equation_coordinate_transformation

`symi::api::partial_differential_equations::Session — pub fn verify_partial_differential_equation_coordinate_transformation(&self, problem: &PartialDifferentialEquationProblem, transformation: &PartialDifferentialEquationTransformationResult) -> Result<PartialDifferentialEquationTransformationVerificationReport, ApiError>`

Returns `Result<PartialDifferentialEquationTransformationVerificationReport, ApiError>`.

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_session_verify_partial_differential_equation_solution.0e65039416d6"></a>
### api::partial_differential_equations::Session::verify_partial_differential_equation_solution

`symi::api::partial_differential_equations::Session — pub fn verify_partial_differential_equation_solution(&self, problem: &PartialDifferentialEquationProblem, solution: &PartialDifferentialEquationSolutionFamily) -> Result<PartialDifferentialEquationVerificationReport, ApiError>`

Returns `Result<PartialDifferentialEquationVerificationReport, ApiError>`.

<a id="placement-placement.rust.native_rust.api_prelude.d7b47ad34767"></a>
### api::prelude

`symi::api — pub mod prelude;`

Returns `module`.

<a id="placement-placement.rust.native_rust.api_results.2330d8e2a9d7"></a>
### api::results

`symi::api — pub mod results;`

Returns `module`.

<a id="placement-placement.rust.native_rust.api_results_criticalpoint.cedba0c1731d"></a>
### api::results::CriticalPoint

`symi::api::results — pub struct CriticalPoint {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_results_definiteintegrationresult_decline_reason.bef6643ab9c0"></a>
### api::results::DefiniteIntegrationResult::decline_reason

`symi::api::results::DefiniteIntegrationResult — pub fn decline_reason(&self) -> Option<DefiniteIntegrationDeclineReason>`

Returns `Option<DefiniteIntegrationDeclineReason>`.

<a id="placement-placement.rust.native_rust.api_results_definiteintegrationresult_divergence_direction.fa421fdafba6"></a>
### api::results::DefiniteIntegrationResult::divergence_direction

`symi::api::results::DefiniteIntegrationResult — pub fn divergence_direction(&self) -> Option<DefiniteIntegrationDivergenceDirection>`

Returns `Option<DefiniteIntegrationDivergenceDirection>`.

<a id="placement-placement.rust.native_rust.api_results_definiteintegrationresult_interpretation.53873dc2da96"></a>
### api::results::DefiniteIntegrationResult::interpretation

`symi::api::results::DefiniteIntegrationResult — pub fn interpretation(&self) -> DefiniteIntegrationInterpretation`

Returns `DefiniteIntegrationInterpretation`.

<a id="placement-placement.rust.native_rust.api_results_definiteintegrationresult_value.1f1a4c8d7f0a"></a>
### api::results::DefiniteIntegrationResult::value

`symi::api::results::DefiniteIntegrationResult — pub fn value(&self) -> Option<Expression>`

Returns `Option<Expression>`.

<a id="placement-placement.rust.native_rust.api_results_definiteintegrationverdict.55bc1cab789f"></a>
### api::results::DefiniteIntegrationVerdict

`symi::api::results — pub enum DefiniteIntegrationVerdict {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_results_definiteintegrationverdict_declined.8cbfd9bacf86"></a>
### api::results::DefiniteIntegrationVerdict::Declined

`symi::api::results::DefiniteIntegrationVerdict — Declined`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_results_definiteintegrationverdict_divergent.0791b4778728"></a>
### api::results::DefiniteIntegrationVerdict::Divergent

`symi::api::results::DefiniteIntegrationVerdict — Divergent`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_results_definiteintegrationverdict_evaluated.c496636cafef"></a>
### api::results::DefiniteIntegrationVerdict::Evaluated

`symi::api::results::DefiniteIntegrationVerdict — Evaluated`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_results_definiteintegrationverdict_name.6f3ee20610a1"></a>
### api::results::DefiniteIntegrationVerdict::name

`symi::api::results::DefiniteIntegrationVerdict — pub fn name(&self) -> &'static str`

Returns `&'static str`.

<a id="placement-placement.rust.native_rust.api_results_eigenpair.88ea9fd6d929"></a>
### api::results::Eigenpair

`symi::api::results — pub struct Eigenpair {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_results_enumerationverdict.c117cf6662cb"></a>
### api::results::EnumerationVerdict

`symi::api::results — pub enum EnumerationVerdict {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_results_enumerationverdict_complete.b9b2bc3a9da0"></a>
### api::results::EnumerationVerdict::Complete

`symi::api::results::EnumerationVerdict — Complete`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_results_enumerationverdict_declined.35c0a632161a"></a>
### api::results::EnumerationVerdict::Declined

`symi::api::results::EnumerationVerdict — Declined`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_results_enumerationverdict_truncated.2f87d82b9f5e"></a>
### api::results::EnumerationVerdict::Truncated

`symi::api::results::EnumerationVerdict — Truncated`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_results_enumerationverdict_name.fffd1929b6e8"></a>
### api::results::EnumerationVerdict::name

`symi::api::results::EnumerationVerdict — pub fn name(&self) -> &'static str`

Returns `&'static str`.

<a id="placement-placement.rust.native_rust.api_results_extremumclassification.dc4ea1831049"></a>
### api::results::ExtremumClassification

`symi::api::results — pub enum ExtremumClassification {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_results_extremumclassification_inconclusive.fe5432e31620"></a>
### api::results::ExtremumClassification::Inconclusive

`symi::api::results::ExtremumClassification — Inconclusive`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_results_extremumclassification_localmaximum.87cd035cd73f"></a>
### api::results::ExtremumClassification::LocalMaximum

`symi::api::results::ExtremumClassification — LocalMaximum`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_results_extremumclassification_localminimum.9d19c7248e90"></a>
### api::results::ExtremumClassification::LocalMinimum

`symi::api::results::ExtremumClassification — LocalMinimum`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_results_extremumclassification_saddlepoint.363b4873c973"></a>
### api::results::ExtremumClassification::SaddlePoint

`symi::api::results::ExtremumClassification — SaddlePoint`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_results_extremumclassification_name.43c94fa83e7c"></a>
### api::results::ExtremumClassification::name

`symi::api::results::ExtremumClassification — pub fn name(&self) -> &'static str`

Returns `&'static str`.

<a id="placement-placement.rust.native_rust.api_results_hermitenormalformdecomposition.46167c5baa66"></a>
### api::results::HermiteNormalFormDecomposition

`symi::api::results — pub struct HermiteNormalFormDecomposition {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_results_integercokerneldata.1a7d1dec43c0"></a>
### api::results::IntegerCokernelData

`symi::api::results — pub struct IntegerCokernelData {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_results_isolatinginterval.c0b0a61df2d7"></a>
### api::results::IsolatingInterval

`symi::api::results — pub struct IsolatingInterval {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_results_jordanblock.4ef0bb921405"></a>
### api::results::JordanBlock

`symi::api::results — pub struct JordanBlock {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_results_jordandecomposition.efdbcf9efe1c"></a>
### api::results::JordanDecomposition

`symi::api::results — pub struct JordanDecomposition {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_results_numeratordenominator.96a9f701a304"></a>
### api::results::NumeratorDenominator

`symi::api::results — pub struct NumeratorDenominator {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_results_numericdefiniteintegrationresult_estimated_absolute_error.f336db645ee3"></a>
### api::results::NumericDefiniteIntegrationResult::estimated_absolute_error

`symi::api::results::NumericDefiniteIntegrationResult — pub fn estimated_absolute_error(&self) -> Option<f64>`

Returns `Option<f64>`.

<a id="placement-placement.rust.native_rust.api_results_numericdefiniteintegrationresult_precision_bits.e4215245ea04"></a>
### api::results::NumericDefiniteIntegrationResult::precision_bits

`symi::api::results::NumericDefiniteIntegrationResult — pub fn precision_bits(&self) -> Option<u32>`

Returns `Option<u32>`.

<a id="placement-placement.rust.native_rust.api_results_numericdefiniteintegrationresult_value.d0e154d26fc7"></a>
### api::results::NumericDefiniteIntegrationResult::value

`symi::api::results::NumericDefiniteIntegrationResult — pub fn value(&self) -> Option<(f64, f64)>`

Returns `Option<(f64, f64)>`.

<a id="placement-placement.rust.native_rust.api_results_optimizationoutcome.b8d619afb7e1"></a>
### api::results::OptimizationOutcome

`symi::api::results — pub struct OptimizationOutcome {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_results_optimizationverdict.490ecc8b5b8a"></a>
### api::results::OptimizationVerdict

`symi::api::results — pub enum OptimizationVerdict {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_results_optimizationverdict_declined.f8b866d0e695"></a>
### api::results::OptimizationVerdict::Declined

`symi::api::results::OptimizationVerdict — Declined`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_results_optimizationverdict_points.8a31b18bf235"></a>
### api::results::OptimizationVerdict::Points

`symi::api::results::OptimizationVerdict — Points`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_results_optimizationverdict_name.ec82dab48a03"></a>
### api::results::OptimizationVerdict::name

`symi::api::results::OptimizationVerdict — pub fn name(&self) -> &'static str`

Returns `&'static str`.

<a id="placement-placement.rust.native_rust.api_results_piecewisebranch.68c16bec8834"></a>
### api::results::PiecewiseBranch

`symi::api::results — pub struct PiecewiseBranch {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_results_piecewisebranch_condition.f8212f6466a1"></a>
### api::results::PiecewiseBranch::condition

`symi::api::results::PiecewiseBranch — pub fn condition(&self) -> Expression`

Returns `Expression`.

<a id="placement-placement.rust.native_rust.api_results_piecewisebranch_new.bebdb94e35ae"></a>
### api::results::PiecewiseBranch::new

`symi::api::results::PiecewiseBranch — pub fn new(condition: &Expression, value: &Expression) -> Self`

Returns `Self`.

<a id="placement-placement.rust.native_rust.api_results_piecewisebranch_value.ab78d16de436"></a>
### api::results::PiecewiseBranch::value

`symi::api::results::PiecewiseBranch — pub fn value(&self) -> Expression`

Returns `Expression`.

<a id="placement-placement.rust.native_rust.api_results_polynomialsystemsolution.c77d330e368f"></a>
### api::results::PolynomialSystemSolution

`symi::api::results — pub struct PolynomialSystemSolution {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_results_primefactor.4536e31631ca"></a>
### api::results::PrimeFactor

`symi::api::results — pub struct PrimeFactor {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_results_quadraticcontinuedfractionexpansion.e1d00cd44a76"></a>
### api::results::QuadraticContinuedFractionExpansion

`symi::api::results — pub struct QuadraticContinuedFractionExpansion {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_results_rationalcanonicalform.a3316a6d9a09"></a>
### api::results::RationalCanonicalForm

`symi::api::results — pub struct RationalCanonicalForm {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_results_rootmultiplicity.2fb3dfaa39d8"></a>
### api::results::RootMultiplicity

`symi::api::results — pub struct RootMultiplicity {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_results_setenumeration.4aec95aed032"></a>
### api::results::SetEnumeration

`symi::api::results — pub struct SetEnumeration {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_results_setenumeration_elements.48ab406926b0"></a>
### api::results::SetEnumeration::elements

`symi::api::results::SetEnumeration — pub fn elements(&self) -> Vec<Expression>`

Returns `Vec<Expression>`.

<a id="placement-placement.rust.native_rust.api_results_setenumeration_outcome.ee18065997bc"></a>
### api::results::SetEnumeration::outcome

`symi::api::results::SetEnumeration — pub fn outcome(&self) -> EnumerationVerdict`

Returns `EnumerationVerdict`.

<a id="placement-placement.rust.native_rust.api_results_smithnormalformdecomposition.c4e461c4733c"></a>
### api::results::SmithNormalFormDecomposition

`symi::api::results — pub struct SmithNormalFormDecomposition {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_results_systemassignment.4bfee6ae1646"></a>
### api::results::SystemAssignment

`symi::api::results — pub struct SystemAssignment {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_results_systemverdict.0e830866a9ee"></a>
### api::results::SystemVerdict

`symi::api::results — pub enum SystemVerdict {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_results_systemverdict_declined.815f058e52e2"></a>
### api::results::SystemVerdict::Declined

`symi::api::results::SystemVerdict — Declined`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_results_systemverdict_empty.d907b75f8b3a"></a>
### api::results::SystemVerdict::Empty

`symi::api::results::SystemVerdict — Empty`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_results_systemverdict_finite.b29985566a2e"></a>
### api::results::SystemVerdict::Finite

`symi::api::results::SystemVerdict — Finite`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_results_systemverdict_positivedimensional.13e672eed7bd"></a>
### api::results::SystemVerdict::PositiveDimensional

`symi::api::results::SystemVerdict — PositiveDimensional`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_results_systemverdict_name.52713f604f2e"></a>
### api::results::SystemVerdict::name

`symi::api::results::SystemVerdict — pub fn name(&self) -> &'static str`

Returns `&'static str`.

<a id="placement-placement.rust.native_rust.api_results_vertexangle.bc546d8b4bc4"></a>
### api::results::VertexAngle

`symi::api::results — pub struct VertexAngle {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_serialization.1bd8e0614b2c"></a>
### api::serialization

`symi::api — pub mod serialization;`

Returns `module`.

<a id="placement-placement.rust.native_rust.api_serialization_exponentialpresentation.f056ba2cf31c"></a>
### api::serialization::ExponentialPresentation

`symi::api::serialization — pub enum ExponentialPresentation {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_serialization_exponentialpresentation_ecaret.fe482de56c20"></a>
### api::serialization::ExponentialPresentation::ECaret

`symi::api::serialization::ExponentialPresentation — ECaret`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_serialization_exponentialpresentation_expfunction.86e02237e747"></a>
### api::serialization::ExponentialPresentation::ExpFunction

`symi::api::serialization::ExponentialPresentation — ExpFunction`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_serialization_latexpresentationoptions.8d9e846d1a6c"></a>
### api::serialization::LatexPresentationOptions

`symi::api::serialization — pub struct LatexPresentationOptions {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_serialization_latexpresentationoptions_from_style_names.060ff70117a1"></a>
### api::serialization::LatexPresentationOptions::from_style_names

`symi::api::serialization::LatexPresentationOptions — pub fn from_style_names(exponential_style: &str, natural_logarithm_style: &str, multiletter_symbol_style: &str) -> Self`

Returns `Self`.

<a id="placement-placement.rust.native_rust.api_serialization_mathematicalobject.4f696f4d2785"></a>
### api::serialization::MathematicalObject

`symi::api::serialization — pub enum MathematicalObject {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_serialization_mathematicalobject_circle.110cd7875f7c"></a>
### api::serialization::MathematicalObject::Circle

`symi::api::serialization::MathematicalObject — Circle(Circle2d)`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_serialization_mathematicalobject_diophantinesolution.6c1a4d8aa9ca"></a>
### api::serialization::MathematicalObject::DiophantineSolution

`symi::api::serialization::MathematicalObject — DiophantineSolution(String)`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_serialization_mathematicalobject_expression.4cdfa1f13874"></a>
### api::serialization::MathematicalObject::Expression

`symi::api::serialization::MathematicalObject — Expression(Expression)`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_serialization_mathematicalobject_partialdifferentialequation.e0ed9fee767e"></a>
### api::serialization::MathematicalObject::PartialDifferentialEquation

`symi::api::serialization::MathematicalObject — PartialDifferentialEquation(crate::api::PartialDifferentialEquationProblem)`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_serialization_mathematicalobject_point.c6758e35526d"></a>
### api::serialization::MathematicalObject::Point

`symi::api::serialization::MathematicalObject — Point(Point2d)`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_serialization_mathematicalobject_polygon.5b39aaa939e2"></a>
### api::serialization::MathematicalObject::Polygon

`symi::api::serialization::MathematicalObject — Polygon(Polygon2d)`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_serialization_mathematicalobject_segment.7f5845611ba1"></a>
### api::serialization::MathematicalObject::Segment

`symi::api::serialization::MathematicalObject — Segment(Segment2d)`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_serialization_mathematicalobject_triangle.732851d9fd10"></a>
### api::serialization::MathematicalObject::Triangle

`symi::api::serialization::MathematicalObject — Triangle(Triangle2d)`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_serialization_multilettersymbolpresentation.2735d7d8dbb7"></a>
### api::serialization::MultiletterSymbolPresentation

`symi::api::serialization — pub enum MultiletterSymbolPresentation {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_serialization_multilettersymbolpresentation_italic.613a4af820c1"></a>
### api::serialization::MultiletterSymbolPresentation::Italic

`symi::api::serialization::MultiletterSymbolPresentation — Italic`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_serialization_multilettersymbolpresentation_upright.96fb67c14ec7"></a>
### api::serialization::MultiletterSymbolPresentation::Upright

`symi::api::serialization::MultiletterSymbolPresentation — Upright`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_serialization_naturallogarithmpresentation.ff67e4844e8b"></a>
### api::serialization::NaturalLogarithmPresentation

`symi::api::serialization — pub enum NaturalLogarithmPresentation {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_serialization_naturallogarithmpresentation_ln.766b573c6b7f"></a>
### api::serialization::NaturalLogarithmPresentation::Ln

`symi::api::serialization::NaturalLogarithmPresentation — Ln`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_serialized_parse_error.4472bdcf87de"></a>
### api::serialized_parse_error

`symi::api — pub use crate::serialize::parse::ParseError as serialized_parse_error;`

Returns `re_export`.

<a id="placement-placement.rust.native_rust.api_sets.b5a4c72573ba"></a>
### api::sets

`symi::api — pub mod sets;`

Returns `module`.

<a id="placement-placement.rust.native_rust.api_sets_default_enumeration_limit.d32dd647fd90"></a>
### api::sets::DEFAULT_ENUMERATION_LIMIT

`symi::api::sets — pub const DEFAULT_ENUMERATION_LIMIT: usize = crate::sets::enumerate::DEFAULT_ENUMERATION_LIMIT;`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_solving.6bef69d48bfe"></a>
### api::solving

`symi::api — pub mod solving;`

Returns `module`.

<a id="placement-placement.rust.native_rust.api_solving_optimizationdirection.126e02b5cefb"></a>
### api::solving::OptimizationDirection

`symi::api::solving — pub enum OptimizationDirection {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_solving_optimizationdirection_maximize.c226a76d3ee4"></a>
### api::solving::OptimizationDirection::Maximize

`symi::api::solving::OptimizationDirection — Maximize`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_solving_optimizationdirection_minimize.b5bb0bf386da"></a>
### api::solving::OptimizationDirection::Minimize

`symi::api::solving::OptimizationDirection — Minimize`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_solving_optimizationdirection_from_name.e0dce74498f2"></a>
### api::solving::OptimizationDirection::from_name

`symi::api::solving::OptimizationDirection — pub fn from_name(name: &str) -> Result<Self, ApiError>`

Returns `Result<Self, ApiError>`.

<a id="placement-placement.rust.native_rust.api_solving_optimizationdirection_name.b4e0208816f5"></a>
### api::solving::OptimizationDirection::name

`symi::api::solving::OptimizationDirection — pub fn name(&self) -> &'static str`

Returns `&'static str`.

<a id="placement-placement.rust.native_rust.api_solving_session_solve_ordinary_differential_equation_by_laplace_transform.59da8e2c987a"></a>
### api::solving::Session::solve_ordinary_differential_equation_by_laplace_transform

`symi::api::solving::Session — pub fn solve_ordinary_differential_equation_by_laplace_transform<'a, VariableType>(&self, equation: &Expression, dependent_function_call: &Expression, independent_variable: VariableType, condition_residuals: &[Expression]) -> Result<Expression, ApiError> where VariableType: Into<VariableLike<'a>>`

Returns `Result<Expression, ApiError>`.

<a id="placement-placement.rust.native_rust.api_solving_session_solve_ordinary_differential_equation_with_conditions.f47a5ad07ece"></a>
### api::solving::Session::solve_ordinary_differential_equation_with_conditions

`symi::api::solving::Session — pub fn solve_ordinary_differential_equation_with_conditions<'a, VariableType>(&self, equation: &Expression, dependent_function_call: &Expression, independent_variable: VariableType, condition_residuals: &[Expression]) -> Result<Expression, ApiError> where VariableType: Into<VariableLike<'a>>`

Returns `Result<Expression, ApiError>`.

