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

### AccumulatedOccurrenceNotSupported

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_accumulatedoccurrencenotsupported_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_accumulatedoccurrencenotsupported.c0a55a9cf92e"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline variant</p>

```rust signature
AccumulatedOccurrenceNotSupported,
```

Public variant placement for AccumulatedOccurrenceNotSupported.

### ActionNotVerified

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsymmetryactiondecline_actionnotverified_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsymmetryactiondecline_actionnotverified.c4449d19da5c"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSymmetryActionDecline variant</p>

```rust signature
ActionNotVerified,
```

Public variant placement for ActionNotVerified.

### ActiveOperation

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_activeoperation_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_activeoperation.6e171b9679bf"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use crate::operation::ActiveOperation;
```

Public re_export placement for ActiveOperation.

### Additive

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationseparationstrategy_additive_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationseparationstrategy_additive.546ac80a05d8"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSeparationStrategy variant</p>

```rust signature
Additive,
```

Public variant placement for Additive.

### AdditiveComponentNotRecognized

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationpointsymmetrydecline_additivecomponentnotrecognized_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetrydecline_additivecomponentnotrecognized.2876d097e85e"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryDecline variant</p>

```rust signature
AdditiveComponentNotRecognized,
```

Public variant placement for AdditiveComponentNotRecognized.

### AlreadyInitialized

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_parallelism_parallelisminitialization_alreadyinitialized_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_parallelism_parallelisminitialization_alreadyinitialized.ca61a86e32b6"></a>
<p class="symi-entry-owner">api::parallelism::ParallelismInitialization variant</p>

```rust signature
AlreadyInitialized,
```

Public variant placement for AlreadyInitialized.

### AmbiguousDependentFunction

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationproblemerror_ambiguousdependentfunction_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproblemerror_ambiguousdependentfunction.8c97fa4ef13e"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProblemError variant</p>

```rust signature
AmbiguousDependentFunction,
```

Public variant placement for AmbiguousDependentFunction.

### ApiError

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_apierror_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_apierror.951a1018882e"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum ApiError
```

Public type placement for ApiError.

### AssumptionConflict

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_apierror_assumptionconflict_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_apierror_assumptionconflict.8d8efd563b1d"></a>
<p class="symi-entry-owner">api::ApiError variant</p>

```rust signature
AssumptionConflict(String)
```

Public variant placement for AssumptionConflict.

### AssumptionProposition

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_assumptionproposition_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_assumptionproposition.b53dab90eba0"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct AssumptionProposition
```

Public type placement for AssumptionProposition.

### AssumptionReport

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_assumptionreport_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_assumptionreport.42df4cf37a27"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use crate::assumptions::knowledge_base::AssumptionReport;
```

Public re_export placement for AssumptionReport.

### AssumptionResourceExhausted

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_apierror_assumptionresourceexhausted_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_apierror_assumptionresourceexhausted.e992b8c60a0c"></a>
<p class="symi-entry-owner">api::ApiError variant</p>

```rust signature
AssumptionResourceExhausted,
```

Public variant placement for AssumptionResourceExhausted.

### AssumptionScope

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_assumptionscope_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_assumptionscope.40ef4e50cf87"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct AssumptionScope
```

Public type placement for AssumptionScope.

### Automatic

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationmethod_automatic_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationmethod_automatic.b30c589319a8"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationMethod variant</p>

```rust signature
Automatic,
```

Public variant placement for Automatic.

### Automatic

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsystemmethod_automatic_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemmethod_automatic.40d247fbd2e4"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemMethod variant</p>

```rust signature
Automatic,
```

Public variant placement for Automatic.

### Automatic

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationmethod_automatic_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationmethod_automatic.d48e6b15ee25"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationMethod variant</p>

```rust signature
Automatic,
```

Public variant placement for Automatic.

### Automatic

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationseparationstrategy_automatic_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationseparationstrategy_automatic.4c071f9a5493"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSeparationStrategy variant</p>

```rust signature
Automatic,
```

Public variant placement for Automatic.

### BoundaryEigenvalueConditionsEstablished

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationproofobligation_boundaryeigenvalueconditionsestablished_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproofobligation_boundaryeigenvalueconditionsestablished.3c65e417ecf6"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProofObligation variant</p>

```rust signature
BoundaryEigenvalueConditionsEstablished,
```

Public variant placement for BoundaryEigenvalueConditionsEstablished.

### BudgetExceeded

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsecondorderclassificationdecline_budgetexceeded_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondorderclassificationdecline_budgetexceeded.e9c3fa928545"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSecondOrderClassificationDecline variant</p>

```rust signature
BudgetExceeded,
```

Public variant placement for BudgetExceeded.

### BuiltinFunction

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_builtinfunction_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_builtinfunction.cc7e27000e26"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use crate::function::BuiltinFunction;
```

Public re_export placement for BuiltinFunction.

### BulkExpressionOutcome

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_parallelism_bulkexpressionoutcome_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_parallelism_bulkexpressionoutcome.8f5cf62231be"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum BulkExpressionOutcome
```

Public type placement for BulkExpressionOutcome.

### BulkExpressionOutcome

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_bulkexpressionoutcome_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_bulkexpressionoutcome.725b40b00b13"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use parallelism::BulkExpressionOutcome;
```

Public re_export placement for BulkExpressionOutcome.

### BulkTextOutcome

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_parallelism_bulktextoutcome_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_parallelism_bulktextoutcome.dfbfecf535bc"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum BulkTextOutcome
```

Public type placement for BulkTextOutcome.

### BulkTextOutcome

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_bulktextoutcome_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_bulktextoutcome.31ba7387dc68"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use parallelism::BulkTextOutcome;
```

Public re_export placement for BulkTextOutcome.

### CadCellKind

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_cadcellkind_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_cadcellkind.aba94638427b"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum CadCellKind
```

Public type placement for CadCellKind.

### Cancelled

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationpointsymmetrydecline_cancelled_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetrydecline_cancelled.0ae268bfe2b6"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryDecline variant</p>

```rust signature
Cancelled,
```

Public variant placement for Cancelled.

### CandidateNotVerified

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_candidatenotverified_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_candidatenotverified.ead16ac40494"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline variant</p>

```rust signature
CandidateNotVerified,
```

Public variant placement for CandidateNotVerified.

### CanonicalCoordinates

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationmethod_canonicalcoordinates_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationmethod_canonicalcoordinates.c3d5417de043"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationMethod variant</p>

```rust signature
CanonicalCoordinates,
```

Public variant placement for CanonicalCoordinates.

### CanonicalCoordinatesDeclined

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsolvedecline_canonicalcoordinatesdeclined_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolvedecline_canonicalcoordinatesdeclined.d03c15ba3ce4"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolveDecline variant</p>

```rust signature
CanonicalCoordinatesDeclined,
```

Public variant placement for CanonicalCoordinatesDeclined.

### CanonicalReductionSucceededButNoDownstreamSolver

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsolvedecline_canonicalreductionsucceededbutnodownstreamsolver_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolvedecline_canonicalreductionsucceededbutnodownstreamsolver.3c0b3c126f3b"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolveDecline variant</p>

```rust signature
CanonicalReductionSucceededButNoDownstreamSolver,
```

Public variant placement for CanonicalReductionSucceededButNoDownstreamSolver.

### CharacteristicCoordinateNotClosed

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationcanonicalizationdecline_characteristiccoordinatenotclosed_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcanonicalizationdecline_characteristiccoordinatenotclosed.077ac0aa797c"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationCanonicalizationDecline variant</p>

```rust signature
CharacteristicCoordinateNotClosed,
```

Public variant placement for CharacteristicCoordinateNotClosed.

### CharacteristicDataNotLocallyDetermining

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsolvedecline_characteristicdatanotlocallydetermining_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolvedecline_characteristicdatanotlocallydetermining.200b4c5ff152"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolveDecline variant</p>

```rust signature
CharacteristicDataNotLocallyDetermining,
```

Public variant placement for CharacteristicDataNotLocallyDetermining.

### CharacteristicTransversality

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationproofobligation_characteristictransversality_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproofobligation_characteristictransversality.35c14da47238"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProofObligation variant</p>

```rust signature
CharacteristicTransversality,
```

Public variant placement for CharacteristicTransversality.

### Characteristics

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationmethod_characteristics_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationmethod_characteristics.5b719e769964"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationMethod variant</p>

```rust signature
Characteristics,
```

Public variant placement for Characteristics.

### CharacteristicsDeclined

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsolvedecline_characteristicsdeclined_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolvedecline_characteristicsdeclined.204be7ef7a23"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolveDecline variant</p>

```rust signature
CharacteristicsDeclined,
```

Public variant placement for CharacteristicsDeclined.

### ChebyshevFirstKind

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_options_orthogonalpolynomialfamily_chebyshevfirstkind_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_options_orthogonalpolynomialfamily_chebyshevfirstkind.f402e01d4aad"></a>
<p class="symi-entry-owner">api::options::OrthogonalPolynomialFamily variant</p>

```rust signature
ChebyshevFirstKind,
```

Public variant placement for ChebyshevFirstKind.

### ChebyshevSecondKind

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_options_orthogonalpolynomialfamily_chebyshevsecondkind_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_options_orthogonalpolynomialfamily_chebyshevsecondkind.4dd13b2911ea"></a>
<p class="symi-entry-owner">api::options::OrthogonalPolynomialFamily variant</p>

```rust signature
ChebyshevSecondKind,
```

Public variant placement for ChebyshevSecondKind.

### Circle

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_geometry2d_circle_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_geometry2d_circle.94e7828c74da"></a>
<p class="symi-entry-owner">api::Geometry2d variant</p>

```rust signature
Circle(Circle2d)
```

Public variant placement for Circle.

### Circle

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_geometryintersectioncomponent_circle_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_geometryintersectioncomponent_circle.527411574024"></a>
<p class="symi-entry-owner">api::GeometryIntersectionComponent variant</p>

```rust signature
Circle(Circle2d)
```

Public variant placement for Circle.

### Circle

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_serialization_mathematicalobject_circle_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_serialization_mathematicalobject_circle.110cd7875f7c"></a>
<p class="symi-entry-owner">api::serialization::MathematicalObject variant</p>

```rust signature
Circle(Circle2d)
```

Public variant placement for Circle.

### Circle2d

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_circle2d_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_circle2d.ea6315c85858"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct Circle2d
```

Public type placement for Circle2d.

### Classical

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationregularity_classical_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationregularity_classical.dc27dfcf3c6e"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationRegularity variant</p>

```rust signature
Classical,
```

Public variant placement for Classical.

### ClassificationDeclined

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsolvedecline_classificationdeclined_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolvedecline_classificationdeclined.1972c234b163"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolveDecline variant</p>

```rust signature
ClassificationDeclined,
```

Public variant placement for ClassificationDeclined.

### CoefficientNonzero

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationproofobligation_coefficientnonzero_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproofobligation_coefficientnonzero.322f7d88f7c8"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProofObligation variant</p>

```rust signature
CoefficientNonzero,
```

Public variant placement for CoefficientNonzero.

### Complete

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_results_enumerationverdict_complete_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_enumerationverdict_complete.b9b2bc3a9da0"></a>
<p class="symi-entry-owner">api::results::EnumerationVerdict variant</p>

```rust signature
Complete,
```

Public variant placement for Complete.

### CompleteFamilyNotEstablished

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsolvedecline_completefamilynotestablished_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolvedecline_completefamilynotestablished.36e84013e522"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolveDecline variant</p>

```rust signature
CompleteFamilyNotEstablished,
```

Public variant placement for CompleteFamilyNotEstablished.

### CompletedOperationReport

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_completedoperationreport_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_completedoperationreport.39cc8ef0e465"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct CompletedOperationReport
```

Public type placement for CompletedOperationReport.

### CompletenessHoldsOnlyOnANarrowerSolutionClass

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsolvedecline_completenessholdsonlyonanarrowersolutionclass_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolvedecline_completenessholdsonlyonanarrowersolutionclass.b69b2a956261"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolveDecline variant</p>

```rust signature
CompletenessHoldsOnlyOnANarrowerSolutionClass,
```

Public variant placement for CompletenessHoldsOnlyOnANarrowerSolutionClass.

### ComponentRequestDeclined

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolvedecline_componentrequestdeclined_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemsolvedecline_componentrequestdeclined.cf99c8099ba9"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveDecline variant</p>

```rust signature
ComponentRequestDeclined,
```

Public variant placement for ComponentRequestDeclined.

### ComponentSolutionIsNotExplicit

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolvedecline_componentsolutionisnotexplicit_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemsolvedecline_componentsolutionisnotexplicit.423a131229b9"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveDecline variant</p>

```rust signature
ComponentSolutionIsNotExplicit,
```

Public variant placement for ComponentSolutionIsNotExplicit.

### ComputationDeclined

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_apierror_computationdeclined_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_apierror_computationdeclined.bd73f20e2488"></a>
<p class="symi-entry-owner">api::ApiError variant</p>

```rust signature
ComputationDeclined,
```

Public variant placement for ComputationDeclined.

### ComputationOutcome

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_computationoutcome_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_computationoutcome.74a0e3d9b651"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum ComputationOutcome<ValueType>
```

Public type placement for ComputationOutcome.

### ConditionDerivativeOrderNotSupported

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationtransformationdecline_conditionderivativeordernotsupported_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationdecline_conditionderivativeordernotsupported.ed7ed082ee2d"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformationDecline variant</p>

```rust signature
ConditionDerivativeOrderNotSupported,
```

Public variant placement for ConditionDerivativeOrderNotSupported.

### ConditionNotPolynomialInTheFreeJets

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationpointsymmetrydecline_conditionnotpolynomialinthefreejets_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetrydecline_conditionnotpolynomialinthefreejets.d7bfa64d6cb9"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryDecline variant</p>

```rust signature
ConditionNotPolynomialInTheFreeJets,
```

Public variant placement for ConditionNotPolynomialInTheFreeJets.

### Conditional

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsecondordertypeverdict_conditional_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondordertypeverdict_conditional.c8b3a9c3fb12"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSecondOrderTypeVerdict variant</p>

```rust signature
Conditional,
```

Public variant placement for Conditional.

### ConditionsDoNotDetermineTheConstants

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolvedecline_conditionsdonotdeterminetheconstants_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemsolvedecline_conditionsdonotdeterminetheconstants.97172f330605"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveDecline variant</p>

```rust signature
ConditionsDoNotDetermineTheConstants,
```

Public variant placement for ConditionsDoNotDetermineTheConstants.

### ConditionsNotFitted

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_conditionsnotfitted_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_conditionsnotfitted.a9cecabb0f61"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline variant</p>

```rust signature
ConditionsNotFitted,
```

Public variant placement for ConditionsNotFitted.

### ConstantCoefficients

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationproofobligation_constantcoefficients_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproofobligation_constantcoefficients.8784257313e9"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProofObligation variant</p>

```rust signature
ConstantCoefficients,
```

Public variant placement for ConstantCoefficients.

### ConstantPrincipalCoefficientNotProved

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationcanonicalizationdecline_constantprincipalcoefficientnotproved_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcanonicalizationdecline_constantprincipalcoefficientnotproved.d6a8dd96697c"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationCanonicalizationDecline variant</p>

```rust signature
ConstantPrincipalCoefficientNotProved,
```

Public variant placement for ConstantPrincipalCoefficientNotProved.

### ContextMismatch

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_apierror_contextmismatch_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_apierror_contextmismatch.b77bde918b68"></a>
<p class="symi-entry-owner">api::ApiError variant</p>

```rust signature
ContextMismatch,
```

Public variant placement for ContextMismatch.

### ContextMismatch

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationproblemerror_contextmismatch_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproblemerror_contextmismatch.3a9bc59d7807"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProblemError variant</p>

```rust signature
ContextMismatch,
```

Public variant placement for ContextMismatch.

### CoordinateJacobianNonzero

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationproofobligation_coordinatejacobiannonzero_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproofobligation_coordinatejacobiannonzero.23e294a68fe1"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProofObligation variant</p>

```rust signature
CoordinateJacobianNonzero,
```

Public variant placement for CoordinateJacobianNonzero.

### CoordinateMapArityMismatch

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationtransformationdecline_coordinatemaparitymismatch_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationdecline_coordinatemaparitymismatch.2e3a168c4642"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformationDecline variant</p>

```rust signature
CoordinateMapArityMismatch,
```

Public variant placement for CoordinateMapArityMismatch.

### CoordinateMapContainsDependentFunction

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationtransformationdecline_coordinatemapcontainsdependentfunction_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationdecline_coordinatemapcontainsdependentfunction.bedf880d2627"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformationDecline variant</p>

```rust signature
CoordinateMapContainsDependentFunction,
```

Public variant placement for CoordinateMapContainsDependentFunction.

### CoordinateMapDirectionMissing

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationtransformationdecline_coordinatemapdirectionmissing_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationdecline_coordinatemapdirectionmissing.d5f8376ab0cf"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformationDecline variant</p>

```rust signature
CoordinateMapDirectionMissing,
```

Public variant placement for CoordinateMapDirectionMissing.

### CoordinateMapUsesWrongVariables

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationtransformationdecline_coordinatemapuseswrongvariables_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationdecline_coordinatemapuseswrongvariables.c4e24873971e"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformationDecline variant</p>

```rust signature
CoordinateMapUsesWrongVariables,
```

Public variant placement for CoordinateMapUsesWrongVariables.

### CoordinateTransformationDeclined

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationcanonicalizationdecline_coordinatetransformationdeclined_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcanonicalizationdecline_coordinatetransformationdeclined.3cc963261fa2"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationCanonicalizationDecline variant</p>

```rust signature
CoordinateTransformationDeclined,
```

Public variant placement for CoordinateTransformationDeclined.

### CoverageOutsideTheAdmissibleClass

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationproofobligation_coverageoutsidetheadmissibleclass_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproofobligation_coverageoutsidetheadmissibleclass.80864667cccd"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProofObligation variant</p>

```rust signature
CoverageOutsideTheAdmissibleClass,
```

Public variant placement for CoverageOutsideTheAdmissibleClass.

### CriticalPoint

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_results_criticalpoint_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_criticalpoint.cedba0c1731d"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct CriticalPoint
```

Public type placement for CriticalPoint.

### CriticalPoint

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_criticalpoint_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_criticalpoint.fb6ea799d622"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use results::CriticalPoint;
```

Public re_export placement for CriticalPoint.

### CrossOriginIsolationUnavailable

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_parallelism_parallelismunavailablereason_crossoriginisolationunavailable_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_parallelism_parallelismunavailablereason_crossoriginisolationunavailable.141728a03495"></a>
<p class="symi-entry-owner">api::parallelism::ParallelismUnavailableReason variant</p>

```rust signature
CrossOriginIsolationUnavailable,
```

Public variant placement for CrossOriginIsolationUnavailable.

### CylindricalAlgebraicDecomposition

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_cylindricalalgebraicdecomposition_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_cylindricalalgebraicdecomposition.50354ca1971a"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct CylindricalAlgebraicDecomposition
```

Public type placement for CylindricalAlgebraicDecomposition.

### DEFAULT_ENUMERATION_LIMIT

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_sets_default_enumeration_limit_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_sets_default_enumeration_limit.d32dd647fd90"></a>
<p class="symi-entry-owner">api::sets constant</p>

```rust signature
pub const DEFAULT_ENUMERATION_LIMIT: usize = crate::sets::enumerate::DEFAULT_ENUMERATION_LIMIT;
```

Public constant placement for DEFAULT_ENUMERATION_LIMIT.

### DEFAULT_PRECISION_BITS

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_analysis_default_precision_bits_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_analysis_default_precision_bits.cfb131343a71"></a>
<p class="symi-entry-owner">api::analysis constant</p>

```rust signature
pub const DEFAULT_PRECISION_BITS: u32 = numeric::DEFAULT_PRECISION_BITS;
```

Public constant placement for DEFAULT_PRECISION_BITS.

### DeclaredGeometryNotSupported

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsolvedecline_declaredgeometrynotsupported_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolvedecline_declaredgeometrynotsupported.019a480d8280"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolveDecline variant</p>

```rust signature
DeclaredGeometryNotSupported,
```

Public variant placement for DeclaredGeometryNotSupported.

### DeclaredRegularityNotSupported

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsolvedecline_declaredregularitynotsupported_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolvedecline_declaredregularitynotsupported.0525972f589a"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolveDecline variant</p>

```rust signature
DeclaredRegularityNotSupported,
```

Public variant placement for DeclaredRegularityNotSupported.

### Declined

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_computationoutcome_declined_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_computationoutcome_declined.218b6a88acd3"></a>
<p class="symi-entry-owner">api::ComputationOutcome variant</p>

```rust signature
Declined,
```

Public variant placement for Declined.

### Declined

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsolveverdict_declined_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolveverdict_declined.3e435f7a698d"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveVerdict variant</p>

```rust signature
Declined,
```

Public variant placement for Declined.

### Declined

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsolveverdict_declined_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolveverdict_declined.270ee8113617"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolveVerdict variant</p>

```rust signature
Declined,
```

Public variant placement for Declined.

### Declined

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_results_definiteintegrationverdict_declined_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_definiteintegrationverdict_declined.8cbfd9bacf86"></a>
<p class="symi-entry-owner">api::results::DefiniteIntegrationVerdict variant</p>

```rust signature
Declined,
```

Public variant placement for Declined.

### Declined

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_results_enumerationverdict_declined_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_enumerationverdict_declined.35c0a632161a"></a>
<p class="symi-entry-owner">api::results::EnumerationVerdict variant</p>

```rust signature
Declined,
```

Public variant placement for Declined.

### Declined

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_results_optimizationverdict_declined_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_optimizationverdict_declined.f8b866d0e695"></a>
<p class="symi-entry-owner">api::results::OptimizationVerdict variant</p>

```rust signature
Declined,
```

Public variant placement for Declined.

### Declined

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_results_systemverdict_declined_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_systemverdict_declined.815f058e52e2"></a>
<p class="symi-entry-owner">api::results::SystemVerdict variant</p>

```rust signature
Declined,
```

Public variant placement for Declined.

### Deficient

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationgeneralityverdict_deficient_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationgeneralityverdict_deficient.9369a092fce8"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationGeneralityVerdict variant</p>

```rust signature
Deficient,
```

Public variant placement for Deficient.

### Definite

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsecondordertypeverdict_definite_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondordertypeverdict_definite.e272d5d71320"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSecondOrderTypeVerdict variant</p>

```rust signature
Definite,
```

Public variant placement for Definite.

### DefiniteIntegrationDeclineReason

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_definiteintegrationdeclinereason_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_definiteintegrationdeclinereason.03b7b28d755e"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use crate::integrate::definite::DefiniteIntegrationDeclineReason;
```

Public re_export placement for DefiniteIntegrationDeclineReason.

### DefiniteIntegrationDivergenceDirection

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_definiteintegrationdivergencedirection_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_definiteintegrationdivergencedirection.e03b9865f485"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use crate::integrate::definite::DefiniteIntegrationDivergenceDirection;
```

Public re_export placement for DefiniteIntegrationDivergenceDirection.

### DefiniteIntegrationInterpretation

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_definiteintegrationinterpretation_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_definiteintegrationinterpretation.d10c2e6398e2"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use crate::integrate::definite::DefiniteIntegrationInterpretation;
```

Public re_export placement for DefiniteIntegrationInterpretation.

### DefiniteIntegrationVerdict

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_results_definiteintegrationverdict_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_definiteintegrationverdict.55bc1cab789f"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum DefiniteIntegrationVerdict
```

Public type placement for DefiniteIntegrationVerdict.

### DefiniteIntegrationVerdict

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_definiteintegrationverdict_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_definiteintegrationverdict.5908e3222768"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use results::DefiniteIntegrationVerdict;
```

Public re_export placement for DefiniteIntegrationVerdict.

### Degenerate

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsecondordertype_degenerate_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondordertype_degenerate.107f53fbb812"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSecondOrderType variant</p>

```rust signature
Degenerate,
```

Public variant placement for Degenerate.

### DegreeLexicographic

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_options_monomialordering_degreelexicographic_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_options_monomialordering_degreelexicographic.bea681905252"></a>
<p class="symi-entry-owner">api::options::MonomialOrdering variant</p>

```rust signature
DegreeLexicographic,
```

Public variant placement for DegreeLexicographic.

### DegreeReverseLexicographic

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_options_monomialordering_degreereverselexicographic_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_options_monomialordering_degreereverselexicographic.2c8f91130c10"></a>
<p class="symi-entry-owner">api::options::MonomialOrdering variant</p>

```rust signature
DegreeReverseLexicographic,
```

Public variant placement for DegreeReverseLexicographic.

### DelayFamilyNotAvailable

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_delayfamilynotavailable_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_delayfamilynotavailable.e7edab62806e"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline variant</p>

```rust signature
DelayFamilyNotAvailable,
```

Public variant placement for DelayFamilyNotAvailable.

### DelayFamilyNotCertified

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_delayfamilynotcertified_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_delayfamilynotcertified.2d6e0d172464"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline variant</p>

```rust signature
DelayFamilyNotCertified,
```

Public variant placement for DelayFamilyNotCertified.

### DependencyBlocks

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsystemroute_dependencyblocks_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemroute_dependencyblocks.6ba61a19884c"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemRoute variant</p>

```rust signature
DependencyBlocks,
```

Public variant placement for DependencyBlocks.

### DependentFunctionMustBeUserFunction

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationproblemerror_dependentfunctionmustbeuserfunction_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproblemerror_dependentfunctionmustbeuserfunction.0fb490fdf844"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProblemError variant</p>

```rust signature
DependentFunctionMustBeUserFunction,
```

Public variant placement for DependentFunctionMustBeUserFunction.

### DerivativeArgumentArityMismatch

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationproblemerror_derivativeargumentaritymismatch_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproblemerror_derivativeargumentaritymismatch.60c16e0fac9f"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProblemError variant</p>

```rust signature
DerivativeArgumentArityMismatch,
```

Public variant placement for DerivativeArgumentArityMismatch.

### DeterminingSystemNotLinear

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationpointsymmetrydecline_determiningsystemnotlinear_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetrydecline_determiningsystemnotlinear.b4694942835e"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryDecline variant</p>

```rust signature
DeterminingSystemNotLinear,
```

Public variant placement for DeterminingSystemNotLinear.

### DeterminingSystemNotReduced

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationpointsymmetrydecline_determiningsystemnotreduced_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetrydecline_determiningsystemnotreduced.832dfef84472"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryDecline variant</p>

```rust signature
DeterminingSystemNotReduced,
```

Public variant placement for DeterminingSystemNotReduced.

### Diagnostic

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_diagnostic_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_diagnostic.ab2b304f6c92"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use crate::diagnostics::Diagnostic;
```

Public re_export placement for Diagnostic.

### DiagnosticCategory

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_diagnosticcategory_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_diagnosticcategory.6bb9c9b2e86d"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use crate::diagnostics::DiagnosticCategory;
```

Public re_export placement for DiagnosticCategory.

### DifferentialEquationSolutionScope

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_differentialequationsolutionscope_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_differentialequationsolutionscope.21391b50eeec"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum DifferentialEquationSolutionScope
```

Public type placement for DifferentialEquationSolutionScope.

### DifferentialEquationSolutionScope

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_differentialequationsolutionscope_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_differentialequationsolutionscope.754ed4c87b09"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use ordinary_differential_equations::DifferentialEquationSolutionScope;
```

Public re_export placement for DifferentialEquationSolutionScope.

### DifferentiationUnderTheIntegralSign

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationproofobligation_differentiationundertheintegralsign_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproofobligation_differentiationundertheintegralsign.f30126f65a93"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProofObligation variant</p>

```rust signature
DifferentiationUnderTheIntegralSign,
```

Public variant placement for DifferentiationUnderTheIntegralSign.

### DiophantineSolution

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_serialization_mathematicalobject_diophantinesolution_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_serialization_mathematicalobject_diophantinesolution.6c1a4d8aa9ca"></a>
<p class="symi-entry-owner">api::serialization::MathematicalObject variant</p>

```rust signature
DiophantineSolution(String)
```

Public variant placement for DiophantineSolution.

### DiscoveryFailed

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationproblemerror_discoveryfailed_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproblemerror_discoveryfailed.5f9e7b2170bb"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProblemError variant</p>

```rust signature
DiscoveryFailed,
```

Public variant placement for DiscoveryFailed.

### DiscretePointSymmetriesNotDerived

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsymmetryobligation_discretepointsymmetriesnotderived_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsymmetryobligation_discretepointsymmetriesnotderived.c05da2ceb85c"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSymmetryObligation variant</p>

```rust signature
DiscretePointSymmetriesNotDerived,
```

Public variant placement for DiscretePointSymmetriesNotDerived.

### Disk

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationgeometricdomain_disk_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationgeometricdomain_disk.4ae6289e7852"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationGeometricDomain variant</p>

```rust signature
Disk,
```

Public variant placement for Disk.

### DisplacedOccurrenceNotSupported

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_displacedoccurrencenotsupported_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_displacedoccurrencenotsupported.8c76fef42d22"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline variant</p>

```rust signature
DisplacedOccurrenceNotSupported,
```

Public variant placement for DisplacedOccurrenceNotSupported.

### Divergent

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_results_definiteintegrationverdict_divergent_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_definiteintegrationverdict_divergent.0791b4778728"></a>
<p class="symi-entry-owner">api::results::DefiniteIntegrationVerdict variant</p>

```rust signature
Divergent,
```

Public variant placement for Divergent.

### DuplicateIndependentVariable

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationproblemerror_duplicateindependentvariable_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproblemerror_duplicateindependentvariable.8afc3b9fbc64"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProblemError variant</p>

```rust signature
DuplicateIndependentVariable,
```

Public variant placement for DuplicateIndependentVariable.

### DuplicateOrCollidingCoordinateVariables

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationtransformationdecline_duplicateorcollidingcoordinatevariables_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationdecline_duplicateorcollidingcoordinatevariables.ccad5a51e453"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformationDecline variant</p>

```rust signature
DuplicateOrCollidingCoordinateVariables,
```

Public variant placement for DuplicateOrCollidingCoordinateVariables.

### ECaret

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_serialization_exponentialpresentation_ecaret_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_serialization_exponentialpresentation_ecaret.fe482de56c20"></a>
<p class="symi-entry-owner">api::serialization::ExponentialPresentation variant</p>

```rust signature
ECaret,
```

Public variant placement for ECaret.

### Eigenpair

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_results_eigenpair_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_eigenpair.88ea9fd6d929"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct Eigenpair
```

Public type placement for Eigenpair.

### Eigenpair

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_eigenpair_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_eigenpair.75c3299d7833"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use results::Eigenpair;
```

Public re_export placement for Eigenpair.

### Elliptic

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsecondordertype_elliptic_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondordertype_elliptic.074f7be45da6"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSecondOrderType variant</p>

```rust signature
Elliptic,
```

Public variant placement for Elliptic.

### EllipticSumOfPureSecondDerivatives

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationcanonicalprincipalform_ellipticsumofpuresecondderivatives_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcanonicalprincipalform_ellipticsumofpuresecondderivatives.f1114ba80d7f"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationCanonicalPrincipalForm variant</p>

```rust signature
EllipticSumOfPureSecondDerivatives,
```

Public variant placement for EllipticSumOfPureSecondDerivatives.

### Empty

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_results_systemverdict_empty_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_systemverdict_empty.d907b75f8b3a"></a>
<p class="symi-entry-owner">api::results::SystemVerdict variant</p>

```rust signature
Empty,
```

Public variant placement for Empty.

### EnumerationVerdict

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_results_enumerationverdict_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_enumerationverdict.c117cf6662cb"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum EnumerationVerdict
```

Public type placement for EnumerationVerdict.

### EnumerationVerdict

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_enumerationverdict_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_enumerationverdict.ef75efed0e2a"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use results::EnumerationVerdict;
```

Public re_export placement for EnumerationVerdict.

### EquationTypeEvidence

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationproofobligation_equationtypeevidence_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproofobligation_equationtypeevidence.8ce0621d5fc9"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProofObligation variant</p>

```rust signature
EquationTypeEvidence,
```

Public variant placement for EquationTypeEvidence.

### Evaluated

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_results_definiteintegrationverdict_evaluated_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_definiteintegrationverdict_evaluated.c496636cafef"></a>
<p class="symi-entry-owner">api::results::DefiniteIntegrationVerdict variant</p>

```rust signature
Evaluated,
```

Public variant placement for Evaluated.

### ExactIntegerInput

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_exactintegerinput_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_exactintegerinput.29bcf30db214"></a>
<p class="symi-entry-owner">api trait</p>

```rust signature
pub trait ExactIntegerInput
```

Public trait placement for ExactIntegerInput.

### ExactIntegerText

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_input_expressioninput_exactintegertext_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_input_expressioninput_exactintegertext.de2b684ab811"></a>
<p class="symi-entry-owner">api::input::ExpressionInput variant</p>

```rust signature
ExactIntegerText(String)
```

Public variant placement for ExactIntegerText.

### ExactInverseTransformAvailable

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationproofobligation_exactinversetransformavailable_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproofobligation_exactinversetransformavailable.4e5273f2a4e6"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProofObligation variant</p>

```rust signature
ExactInverseTransformAvailable,
```

Public variant placement for ExactInverseTransformAvailable.

### ExactRationalText

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_input_expressioninput_exactrationaltext_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_input_expressioninput_exactrationaltext.da969c41ea0d"></a>
<p class="symi-entry-owner">api::input::ExpressionInput variant</p>

```rust signature
ExactRationalText(String)
```

Public variant placement for ExactRationalText.

### ExecutionMode

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_executionmode_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_executionmode.13ee30759072"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use crate::operation::ExecutionMode;
```

Public re_export placement for ExecutionMode.

### Exists

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_logic_quantifier_exists_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_logic_quantifier_exists.7d665d0bd1ac"></a>
<p class="symi-entry-owner">api::logic::Quantifier variant</p>

```rust signature
Exists,
```

Public variant placement for Exists.

### ExpFunction

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_serialization_exponentialpresentation_expfunction_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_serialization_exponentialpresentation_expfunction.86e02237e747"></a>
<p class="symi-entry-owner">api::serialization::ExponentialPresentation variant</p>

```rust signature
ExpFunction,
```

Public variant placement for ExpFunction.

### Explicit

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsolutionform_explicit_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolutionform_explicit.4b91f2707469"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolutionForm variant</p>

```rust signature
Explicit,
```

Public variant placement for Explicit.

### Explicit

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsolutionform_explicit_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolutionform_explicit.c79603a4dc58"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolutionForm variant</p>

```rust signature
Explicit(Expression)
```

Public variant placement for Explicit.

### Exponential

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_options_trigonometricbasis_exponential_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_options_trigonometricbasis_exponential.82c3c4a251f8"></a>
<p class="symi-entry-owner">api::options::TrigonometricBasis variant</p>

```rust signature
Exponential,
```

Public variant placement for Exponential.

### ExponentialPresentation

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_serialization_exponentialpresentation_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_serialization_exponentialpresentation.f056ba2cf31c"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum ExponentialPresentation
```

Public type placement for ExponentialPresentation.

### Expression

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_expression_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_expression.39c36267f70d"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct Expression
```

Public type placement for Expression.

### Expression

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_input_expressioninput_expression_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_input_expressioninput_expression.392f34bb53e6"></a>
<p class="symi-entry-owner">api::input::ExpressionInput variant</p>

```rust signature
Expression(Expression)
```

Public variant placement for Expression.

### Expression

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_serialization_mathematicalobject_expression_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_serialization_mathematicalobject_expression.4cdfa1f13874"></a>
<p class="symi-entry-owner">api::serialization::MathematicalObject variant</p>

```rust signature
Expression(Expression)
```

Public variant placement for Expression.

### ExpressionGraphMeasurements

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_expressiongraphmeasurements_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_expressiongraphmeasurements.7744b4a28308"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use crate::operation::ExpressionGraphMeasurements;
```

Public re_export placement for ExpressionGraphMeasurements.

### ExpressionInput

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_input_expressioninput_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_input_expressioninput.aaee2f91e0a9"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum ExpressionInput
```

Public type placement for ExpressionInput.

### ExpressionInput

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_expressioninput_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_expressioninput.c6a9fbb55915"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use input::ExpressionInput;
```

Public re_export placement for ExpressionInput.

### ExpressionRequired

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_apierror_expressionrequired_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_apierror_expressionrequired.41d112b35431"></a>
<p class="symi-entry-owner">api::ApiError variant</p>

```rust signature
ExpressionRequired,
```

Public variant placement for ExpressionRequired.

### ExpressionText

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_input_expressioninput_expressiontext_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_input_expressioninput_expressiontext.acbd8005e1a3"></a>
<p class="symi-entry-owner">api::input::ExpressionInput variant</p>

```rust signature
ExpressionText(String)
```

Public variant placement for ExpressionText.

### ExpressionTypeName

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_expression_operations_expressiontypename_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_expression_operations_expressiontypename.1db3b711114e"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct ExpressionTypeName(&'static str);
```

Public type placement for ExpressionTypeName.

### ExtremumClassification

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_results_extremumclassification_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_extremumclassification.dc4ea1831049"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum ExtremumClassification
```

Public type placement for ExtremumClassification.

### ExtremumClassification

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_extremumclassification_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_extremumclassification.8383fe1c9605"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use results::ExtremumClassification;
```

Public re_export placement for ExtremumClassification.

### Finite

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_results_systemverdict_finite_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_systemverdict_finite.b29985566a2e"></a>
<p class="symi-entry-owner">api::results::SystemVerdict variant</p>

```rust signature
Finite,
```

Public variant placement for Finite.

### Forall

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_logic_quantifier_forall_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_logic_quantifier_forall.80a8122de96b"></a>
<p class="symi-entry-owner">api::logic::Quantifier variant</p>

```rust signature
Forall,
```

Public variant placement for Forall.

### ForcingHasNoExactParticularState

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolvedecline_forcinghasnoexactparticularstate_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemsolvedecline_forcinghasnoexactparticularstate.2acfc81696d5"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveDecline variant</p>

```rust signature
ForcingHasNoExactParticularState,
```

Public variant placement for ForcingHasNoExactParticularState.

### FourierTransform

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationmethod_fouriertransform_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationmethod_fouriertransform.c25a3ee69db1"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationMethod variant</p>

```rust signature
FourierTransform,
```

Public variant placement for FourierTransform.

### FourierWholeRealLine

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationtransformaxiskind_fourierwholerealline_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformaxiskind_fourierwholerealline.938c761b56ef"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformAxisKind variant</p>

```rust signature
FourierWholeRealLine,
```

Public variant placement for FourierWholeRealLine.

### FullRank

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationgeneralityverdict_fullrank_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationgeneralityverdict_fullrank.d957199069d6"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationGeneralityVerdict variant</p>

```rust signature
FullRank,
```

Public variant placement for FullRank.

### FunctionIdentifier

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_functionidentifier_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_functionidentifier.6fb5a71000dd"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use crate::function::FunctionIdentifier;
```

Public re_export placement for FunctionIdentifier.

### FundamentalMatrix

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsystemmethod_fundamentalmatrix_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemmethod_fundamentalmatrix.6cf114159bc5"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemMethod variant</p>

```rust signature
FundamentalMatrix,
```

Public variant placement for FundamentalMatrix.

### FundamentalMatrix

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsystemroute_fundamentalmatrix_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemroute_fundamentalmatrix.aef6001db575"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemRoute variant</p>

```rust signature
FundamentalMatrix,
```

Public variant placement for FundamentalMatrix.

### FundamentalMatrixUnavailable

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolvedecline_fundamentalmatrixunavailable_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemsolvedecline_fundamentalmatrixunavailable.852f878e1aa1"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveDecline variant</p>

```rust signature
FundamentalMatrixUnavailable,
```

Public variant placement for FundamentalMatrixUnavailable.

### Gegenbauer

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_options_orthogonalpolynomialfamily_gegenbauer_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_options_orthogonalpolynomialfamily_gegenbauer.b87109555ffa"></a>
<p class="symi-entry-owner">api::options::OrthogonalPolynomialFamily variant</p>

```rust signature
Gegenbauer,
```

Public variant placement for Gegenbauer.

### General

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_differentialequationsolutionscope_general_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_differentialequationsolutionscope_general.25d78a5b7872"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::DifferentialEquationSolutionScope variant</p>

```rust signature
General,
```

Public variant placement for General.

### GeneralFamilyNotEstablished

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_generalfamilynotestablished_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_generalfamilynotestablished.935df98571c9"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline variant</p>

```rust signature
GeneralFamilyNotEstablished,
```

Public variant placement for GeneralFamilyNotEstablished.

### GeneralFamilyRankUndecided

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_generalfamilyrankundecided_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_generalfamilyrankundecided.f8a4c1a4e10d"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline variant</p>

```rust signature
GeneralFamilyRankUndecided,
```

Public variant placement for GeneralFamilyRankUndecided.

### GeneralizedLaguerre

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_options_orthogonalpolynomialfamily_generalizedlaguerre_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_options_orthogonalpolynomialfamily_generalizedlaguerre.ec30b467ff32"></a>
<p class="symi-entry-owner">api::options::OrthogonalPolynomialFamily variant</p>

```rust signature
GeneralizedLaguerre,
```

Public variant placement for GeneralizedLaguerre.

### GenerationExhausted

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_apierror_generationexhausted_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_apierror_generationexhausted.ce4b9a8939bf"></a>
<p class="symi-entry-owner">api::ApiError variant</p>

```rust signature
GenerationExhausted,
```

Public variant placement for GenerationExhausted.

### GeneratorNotASymmetry

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsimilarityreductiondecline_generatornotasymmetry_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsimilarityreductiondecline_generatornotasymmetry.cd6ea868c573"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSimilarityReductionDecline variant</p>

```rust signature
GeneratorNotASymmetry,
```

Public variant placement for GeneratorNotASymmetry.

### GeneratorNotFiberLinear

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsimilarityreductiondecline_generatornotfiberlinear_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsimilarityreductiondecline_generatornotfiberlinear.fdebfb31092d"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSimilarityReductionDecline variant</p>

```rust signature
GeneratorNotFiberLinear,
```

Public variant placement for GeneratorNotFiberLinear.

### GeneratorNotVerified

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationpointsymmetrydecline_generatornotverified_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetrydecline_generatornotverified.99b3665fe3b6"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryDecline variant</p>

```rust signature
GeneratorNotVerified,
```

Public variant placement for GeneratorNotVerified.

### GeneratorsDoNotSpanTheAlgebra

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsymmetryactiondecline_generatorsdonotspanthealgebra_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsymmetryactiondecline_generatorsdonotspanthealgebra.14d9b87968ec"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSymmetryActionDecline variant</p>

```rust signature
GeneratorsDoNotSpanTheAlgebra,
```

Public variant placement for GeneratorsDoNotSpanTheAlgebra.

### Geometry2d

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_geometry2d_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_geometry2d.551b4ea24caf"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum Geometry2d
```

Public type placement for Geometry2d.

### GeometryError

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_geometryerror_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_geometryerror.18a8acf3c6ca"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use crate::geometry::GeometryError;
```

Public re_export placement for GeometryError.

### GeometryError

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_apierror_geometryerror_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_apierror_geometryerror.a8dd7e05851c"></a>
<p class="symi-entry-owner">api::ApiError variant</p>

```rust signature
GeometryError(GeometryError)
```

Public variant placement for GeometryError.

### GeometryIntersectionComponent

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_geometryintersectioncomponent_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_geometryintersectioncomponent.bea12b24e800"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum GeometryIntersectionComponent
```

Public type placement for GeometryIntersectionComponent.

### GoverningEquationIsNotDifferential

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationproblemerror_governingequationisnotdifferential_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproblemerror_governingequationisnotdifferential.46c0c9da5164"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProblemError variant</p>

```rust signature
GoverningEquationIsNotDifferential,
```

Public variant placement for GoverningEquationIsNotDifferential.

### HOST_CANCELLATION_SLOT_COUNT

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_host_cancellation_host_cancellation_slot_count_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_host_cancellation_host_cancellation_slot_count.f5287d76c346"></a>
<p class="symi-entry-owner">api::host_cancellation re_export</p>

```rust signature
pub use crate::operation::HOST_CANCELLATION_SLOT_COUNT;
```

Public re_export placement for HOST_CANCELLATION_SLOT_COUNT.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_host_cancellation_host_cancellation_slot_count.795cc31346fd"></a>
<p class="symi-entry-owner">api::host_cancellation re_export: <code>api::host_cancellation::host_cancellation_slot_count</code></p>

```rust signature
pub use crate::operation::host_cancellation_slot_count;
```

</details>

### Hermite

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_options_orthogonalpolynomialfamily_hermite_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_options_orthogonalpolynomialfamily_hermite.79244af84bf2"></a>
<p class="symi-entry-owner">api::options::OrthogonalPolynomialFamily variant</p>

```rust signature
Hermite,
```

Public variant placement for Hermite.

### HermiteNormalFormDecomposition

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_results_hermitenormalformdecomposition_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_hermitenormalformdecomposition.46167c5baa66"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct HermiteNormalFormDecomposition
```

Public type placement for HermiteNormalFormDecomposition.

### HermiteNormalFormDecomposition

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_hermitenormalformdecomposition_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_hermitenormalformdecomposition.da28a11eed57"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use results::HermiteNormalFormDecomposition;
```

Public re_export placement for HermiteNormalFormDecomposition.

### HostCancellationSlot

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_hostcancellationslot_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_hostcancellationslot.ac946375a5fc"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use host_cancellation::HostCancellationSlot;
```

Public re_export placement for HostCancellationSlot.

### HostCancellationSlot

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_host_cancellation_hostcancellationslot_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_host_cancellation_hostcancellationslot.19ecc960eaf6"></a>
<p class="symi-entry-owner">api::host_cancellation re_export</p>

```rust signature
pub use crate::operation::HostCancellationSlot;
```

Public re_export placement for HostCancellationSlot.

### Hyperbolic

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_options_trigonometricbasis_hyperbolic_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_options_trigonometricbasis_hyperbolic.7e3b74521ebd"></a>
<p class="symi-entry-owner">api::options::TrigonometricBasis variant</p>

```rust signature
Hyperbolic,
```

Public variant placement for Hyperbolic.

### Hyperbolic

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsecondordertype_hyperbolic_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondordertype_hyperbolic.4d2734f15512"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSecondOrderType variant</p>

```rust signature
Hyperbolic,
```

Public variant placement for Hyperbolic.

### HyperbolicMixedSecondDerivative

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationcanonicalprincipalform_hyperbolicmixedsecondderivative_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcanonicalprincipalform_hyperbolicmixedsecondderivative.fe8e30c6d0d9"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationCanonicalPrincipalForm variant</p>

```rust signature
HyperbolicMixedSecondDerivative,
```

Public variant placement for HyperbolicMixedSecondDerivative.

### Implicit

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsolutionform_implicit_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolutionform_implicit.ee0d83b8817f"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolutionForm variant</p>

```rust signature
Implicit,
```

Public variant placement for Implicit.

### Implicit

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsolutionform_implicit_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolutionform_implicit.5dd3f21882bc"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolutionForm variant</p>

```rust signature
Implicit(Expression)
```

Public variant placement for Implicit.

### ImplicitSolutionContainsDerivative

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationverificationinconclusivereason_implicitsolutioncontainsderivative_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationverificationinconclusivereason_implicitsolutioncontainsderivative.5580af305835"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationVerificationInconclusiveReason variant</p>

```rust signature
ImplicitSolutionContainsDerivative,
```

Public variant placement for ImplicitSolutionContainsDerivative.

### ImplicitSolutionNotIsolatable

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationverificationinconclusivereason_implicitsolutionnotisolatable_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationverificationinconclusivereason_implicitsolutionnotisolatable.fc1fedf0e417"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationVerificationInconclusiveReason variant</p>

```rust signature
ImplicitSolutionNotIsolatable,
```

Public variant placement for ImplicitSolutionNotIsolatable.

### IncompatibleTransformations

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsymmetryactiondecline_incompatibletransformations_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsymmetryactiondecline_incompatibletransformations.b75f8e5c1403"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSymmetryActionDecline variant</p>

```rust signature
IncompatibleTransformations,
```

Public variant placement for IncompatibleTransformations.

### Inconclusive

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationgeneralityverdict_inconclusive_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationgeneralityverdict_inconclusive.1b20c61515b4"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationGeneralityVerdict variant</p>

```rust signature
Inconclusive,
```

Public variant placement for Inconclusive.

### Inconclusive

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationverificationverdict_inconclusive_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationverificationverdict_inconclusive.765ed001e56f"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationVerificationVerdict variant</p>

```rust signature
Inconclusive,
```

Public variant placement for Inconclusive.

### Inconclusive

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationverificationverdict_inconclusive_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationverificationverdict_inconclusive.e55383b11326"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationVerificationVerdict variant</p>

```rust signature
Inconclusive,
```

Public variant placement for Inconclusive.

### Inconclusive

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_results_extremumclassification_inconclusive_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_extremumclassification_inconclusive.fe5432e31620"></a>
<p class="symi-entry-owner">api::results::ExtremumClassification variant</p>

```rust signature
Inconclusive,
```

Public variant placement for Inconclusive.

### InconsistentAssumptions

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsecondorderclassificationdecline_inconsistentassumptions_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondorderclassificationdecline_inconsistentassumptions.1672c68a8967"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSecondOrderClassificationDecline variant</p>

```rust signature
InconsistentAssumptions,
```

Public variant placement for InconsistentAssumptions.

### InconsistentCharacteristicData

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsolvedecline_inconsistentcharacteristicdata_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolvedecline_inconsistentcharacteristicdata.aa50647d2ee1"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolveDecline variant</p>

```rust signature
InconsistentCharacteristicData,
```

Public variant placement for InconsistentCharacteristicData.

### InconsistentConstraint

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_apierror_inconsistentconstraint_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_apierror_inconsistentconstraint.116fc0871a8e"></a>
<p class="symi-entry-owner">api::ApiError variant</p>

```rust signature
InconsistentConstraint,
```

Public variant placement for InconsistentConstraint.

### InconsistentDependentFunctionArguments

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationproblemerror_inconsistentdependentfunctionarguments_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproblemerror_inconsistentdependentfunctionarguments.07d892b83a86"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProblemError variant</p>

```rust signature
InconsistentDependentFunctionArguments,
```

Public variant placement for InconsistentDependentFunctionArguments.

### InitialDataConvolution

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationmethod_initialdataconvolution_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationmethod_initialdataconvolution.0f515a576b39"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationMethod variant</p>

```rust signature
InitialDataConvolution,
```

Public variant placement for InitialDataConvolution.

### InitialDataConvolutionDeclined

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsolvedecline_initialdataconvolutiondeclined_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolvedecline_initialdataconvolutiondeclined.2c32f1cf679b"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolveDecline variant</p>

```rust signature
InitialDataConvolutionDeclined,
```

Public variant placement for InitialDataConvolutionDeclined.

### InitialOrBoundaryDataNotSupported

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationpointsymmetrydecline_initialorboundarydatanotsupported_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetrydecline_initialorboundarydatanotsupported.6bc410ec8508"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryDecline variant</p>

```rust signature
InitialOrBoundaryDataNotSupported,
```

Public variant placement for InitialOrBoundaryDataNotSupported.

### InitialTraceAttainedInTheAdmissibleClass

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationproofobligation_initialtraceattainedintheadmissibleclass_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproofobligation_initialtraceattainedintheadmissibleclass.2d284a13cdaf"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProofObligation variant</p>

```rust signature
InitialTraceAttainedInTheAdmissibleClass,
```

Public variant placement for InitialTraceAttainedInTheAdmissibleClass.

### InitializationFailed

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_parallelism_parallelismunavailablereason_initializationfailed_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_parallelism_parallelismunavailablereason_initializationfailed.a7b27ab068e8"></a>
<p class="symi-entry-owner">api::parallelism::ParallelismUnavailableReason variant</p>

```rust signature
InitializationFailed,
```

Public variant placement for InitializationFailed.

### Initialized

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_parallelism_parallelisminitialization_initialized_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_parallelism_parallelisminitialization_initialized.a1076f6e5b78"></a>
<p class="symi-entry-owner">api::parallelism::ParallelismInitialization variant</p>

```rust signature
Initialized,
```

Public variant placement for Initialized.

### InsufficientIndependentVariables

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationproblemerror_insufficientindependentvariables_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproblemerror_insufficientindependentvariables.1cddbb3990df"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProblemError variant</p>

```rust signature
InsufficientIndependentVariables,
```

Public variant placement for InsufficientIndependentVariables.

### IntegerCokernelData

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_results_integercokerneldata_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_integercokerneldata.1a7d1dec43c0"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct IntegerCokernelData
```

Public type placement for IntegerCokernelData.

### IntegerCokernelData

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_integercokerneldata_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_integercokerneldata.22af874ea59c"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use results::IntegerCokernelData;
```

Public re_export placement for IntegerCokernelData.

### IntegerRequired

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_apierror_integerrequired_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_apierror_integerrequired.9f351a0e69a4"></a>
<p class="symi-entry-owner">api::ApiError variant</p>

```rust signature
IntegerRequired,
```

Public variant placement for IntegerRequired.

### InvalidAssumption

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_apierror_invalidassumption_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_apierror_invalidassumption.46d9163ba2d5"></a>
<p class="symi-entry-owner">api::ApiError variant</p>

```rust signature
InvalidAssumption,
```

Public variant placement for InvalidAssumption.

### InvalidConstraint

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_apierror_invalidconstraint_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_apierror_invalidconstraint.6fb962c45b7e"></a>
<p class="symi-entry-owner">api::ApiError variant</p>

```rust signature
InvalidConstraint,
```

Public variant placement for InvalidConstraint.

### InvariantNotFound

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsimilarityreductiondecline_invariantnotfound_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsimilarityreductiondecline_invariantnotfound.56ce6a94758f"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSimilarityReductionDecline variant</p>

```rust signature
InvariantNotFound,
```

Public variant placement for InvariantNotFound.

### InverseMapInconclusive

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationtransformationdecline_inversemapinconclusive_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationdecline_inversemapinconclusive.34253ff044f6"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformationDecline variant</p>

```rust signature
InverseMapInconclusive,
```

Public variant placement for InverseMapInconclusive.

### InverseMapRejected

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationtransformationdecline_inversemaprejected_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationdecline_inversemaprejected.10fbe7da6507"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformationDecline variant</p>

```rust signature
InverseMapRejected,
```

Public variant placement for InverseMapRejected.

### InverseNotRecovered

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationtransformationdecline_inversenotrecovered_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationdecline_inversenotrecovered.1cced9fd1abd"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformationDecline variant</p>

```rust signature
InverseNotRecovered,
```

Public variant placement for InverseNotRecovered.

### IsolatingInterval

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_results_isolatinginterval_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_isolatinginterval.c0b0a61df2d7"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct IsolatingInterval
```

Public type placement for IsolatingInterval.

### IsolatingInterval

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_isolatinginterval_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_isolatinginterval.40248483e9b4"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use results::IsolatingInterval;
```

Public re_export placement for IsolatingInterval.

### Italic

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_serialization_multilettersymbolpresentation_italic_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_serialization_multilettersymbolpresentation_italic.613a4af820c1"></a>
<p class="symi-entry-owner">api::serialization::MultiletterSymbolPresentation variant</p>

```rust signature
Italic,
```

Public variant placement for Italic.

### Jacobi

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_options_orthogonalpolynomialfamily_jacobi_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_options_orthogonalpolynomialfamily_jacobi.dbde0db1762c"></a>
<p class="symi-entry-owner">api::options::OrthogonalPolynomialFamily variant</p>

```rust signature
Jacobi,
```

Public variant placement for Jacobi.

### JacobianIsZero

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationtransformationdecline_jacobianiszero_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationdecline_jacobianiszero.493416d7333d"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformationDecline variant</p>

```rust signature
JacobianIsZero,
```

Public variant placement for JacobianIsZero.

### JacobianNonzeroNotProved

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationtransformationdecline_jacobiannonzeronotproved_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationdecline_jacobiannonzeronotproved.86aa8dc4d559"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformationDecline variant</p>

```rust signature
JacobianNonzeroNotProved,
```

Public variant placement for JacobianNonzeroNotProved.

### JetCoordinatesNotRecognized

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationpointsymmetrydecline_jetcoordinatesnotrecognized_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetrydecline_jetcoordinatesnotrecognized.23f82c8c86f1"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryDecline variant</p>

```rust signature
JetCoordinatesNotRecognized,
```

Public variant placement for JetCoordinatesNotRecognized.

### JordanBlock

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_results_jordanblock_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_jordanblock.4ef0bb921405"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct JordanBlock
```

Public type placement for JordanBlock.

### JordanBlock

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_jordanblock_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_jordanblock.7050f236eba4"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use results::JordanBlock;
```

Public re_export placement for JordanBlock.

### JordanDecomposition

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_results_jordandecomposition_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_jordandecomposition.efdbcf9efe1c"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct JordanDecomposition
```

Public type placement for JordanDecomposition.

### JordanDecomposition

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_jordandecomposition_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_jordandecomposition.2f6da81c8578"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use results::JordanDecomposition;
```

Public re_export placement for JordanDecomposition.

### LaplaceNonnegativeHalfLine

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationtransformaxiskind_laplacenonnegativehalfline_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformaxiskind_laplacenonnegativehalfline.dc2d1cb94ed2"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformAxisKind variant</p>

```rust signature
LaplaceNonnegativeHalfLine,
```

Public variant placement for LaplaceNonnegativeHalfLine.

### LaplaceTransform

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationmethod_laplacetransform_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationmethod_laplacetransform.fcf7addbfb15"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationMethod variant</p>

```rust signature
LaplaceTransform,
```

Public variant placement for LaplaceTransform.

### LaplaceTransform

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationmethod_laplacetransform_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationmethod_laplacetransform.52913c8005d8"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationMethod variant</p>

```rust signature
LaplaceTransform,
```

Public variant placement for LaplaceTransform.

### LatexParseError

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_apierror_latexparseerror_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_apierror_latexparseerror.30158bc7538a"></a>
<p class="symi-entry-owner">api::ApiError variant</p>

```rust signature
LatexParseError(String)
```

Public variant placement for LatexParseError.

### LatexPresentationOptions

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_serialization_latexpresentationoptions_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_serialization_latexpresentationoptions.8d9e846d1a6c"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct LatexPresentationOptions
```

Public type placement for LatexPresentationOptions.

### LatexPresentationOptions

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_latexpresentationoptions_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_latexpresentationoptions.686f1d6bbb5c"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use serialization::LatexPresentationOptions;
```

Public re_export placement for LatexPresentationOptions.

### Legendre

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_options_orthogonalpolynomialfamily_legendre_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_options_orthogonalpolynomialfamily_legendre.8405507b168d"></a>
<p class="symi-entry-owner">api::options::OrthogonalPolynomialFamily variant</p>

```rust signature
Legendre,
```

Public variant placement for Legendre.

### LentContext

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_lentcontext_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_lentcontext.cd0e60803125"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct LentContext<'session>
```

Public type placement for LentContext.

### Lexicographic

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_options_monomialordering_lexicographic_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_options_monomialordering_lexicographic.88f77b3d2878"></a>
<p class="symi-entry-owner">api::options::MonomialOrdering variant</p>

```rust signature
Lexicographic,
```

Public variant placement for Lexicographic.

### LiftedFamilyNotVerified

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsimilarityreductiondecline_liftedfamilynotverified_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsimilarityreductiondecline_liftedfamilynotverified.f0e918b31607"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSimilarityReductionDecline variant</p>

```rust signature
LiftedFamilyNotVerified,
```

Public variant placement for LiftedFamilyNotVerified.

### LimitDirection

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_limitdirection_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_limitdirection.e823bae61aba"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use crate::limit::LimitDirection;
```

Public re_export placement for LimitDirection.

### Linear

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationlinearity_linear_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationlinearity_linear.73fcf74e95f5"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationLinearity variant</p>

```rust signature
Linear,
```

Public variant placement for Linear.

### Ln

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_serialization_naturallogarithmpresentation_ln_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_serialization_naturallogarithmpresentation_ln.766b573c6b7f"></a>
<p class="symi-entry-owner">api::serialization::NaturalLogarithmPresentation variant</p>

```rust signature
Ln,
```

Public variant placement for Ln.

### LocalMaximum

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_results_extremumclassification_localmaximum_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_extremumclassification_localmaximum.87cd035cd73f"></a>
<p class="symi-entry-owner">api::results::ExtremumClassification variant</p>

```rust signature
LocalMaximum,
```

Public variant placement for LocalMaximum.

### LocalMinimum

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_results_extremumclassification_localminimum_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_extremumclassification_localminimum.9d19c7248e90"></a>
<p class="symi-entry-owner">api::results::ExtremumClassification variant</p>

```rust signature
LocalMinimum,
```

Public variant placement for LocalMinimum.

### LogicalExpressionRequired

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_apierror_logicalexpressionrequired_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_apierror_logicalexpressionrequired.87cb857b2cb1"></a>
<p class="symi-entry-owner">api::ApiError variant</p>

```rust signature
LogicalExpressionRequired,
```

Public variant placement for LogicalExpressionRequired.

### MalformedDependentOccurrence

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationverificationinconclusivereason_malformeddependentoccurrence_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationverificationinconclusivereason_malformeddependentoccurrence.5472f1f2b189"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationVerificationInconclusiveReason variant</p>

```rust signature
MalformedDependentOccurrence,
```

Public variant placement for MalformedDependentOccurrence.

### MathematicalObject

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_serialization_mathematicalobject_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_serialization_mathematicalobject.4f696f4d2785"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum MathematicalObject
```

Public type placement for MathematicalObject.

### MathematicalObject

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_mathematicalobject_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_mathematicalobject.c76e26ad0ff3"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use serialization::MathematicalObject;
```

Public re_export placement for MathematicalObject.

### MatrixError

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_matrixerror_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_matrixerror.47a6016f85ff"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use crate::matrix::MatrixError;
```

Public re_export placement for MatrixError.

### MatrixError

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_apierror_matrixerror_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_apierror_matrixerror.d593d0655271"></a>
<p class="symi-entry-owner">api::ApiError variant</p>

```rust signature
MatrixError(MatrixError)
```

Public variant placement for MatrixError.

### MatrixPredicate

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_matrixpredicate_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_matrixpredicate.043471865d1c"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use crate::assumptions::MatrixPredicate;
```

Public re_export placement for MatrixPredicate.

### MatrixPredicateApplication

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_matrixpredicateapplication_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_matrixpredicateapplication.77f031b3d5fd"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use crate::assumptions::MatrixPredicateApplication;
```

Public re_export placement for MatrixPredicateApplication.

### Maximize

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_solving_optimizationdirection_maximize_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_solving_optimizationdirection_maximize.c226a76d3ee4"></a>
<p class="symi-entry-owner">api::solving::OptimizationDirection variant</p>

```rust signature
Maximize,
```

Public variant placement for Maximize.

### MethodNotImplemented

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsolvedecline_methodnotimplemented_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolvedecline_methodnotimplemented.20f693085bd8"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolveDecline variant</p>

```rust signature
MethodNotImplemented,
```

Public variant placement for MethodNotImplemented.

### Minimize

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_solving_optimizationdirection_minimize_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_solving_optimizationdirection_minimize.b5bb0bf386da"></a>
<p class="symi-entry-owner">api::solving::OptimizationDirection variant</p>

```rust signature
Minimize,
```

Public variant placement for Minimize.

### MonomialOrdering

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_options_monomialordering_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_options_monomialordering.b021b8be344d"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum MonomialOrdering
```

Public type placement for MonomialOrdering.

### MonomialOrdering

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_monomialordering_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_monomialordering.be5473e1854c"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use options::MonomialOrdering;
```

Public re_export placement for MonomialOrdering.

### MultiletterSymbolPresentation

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_serialization_multilettersymbolpresentation_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_serialization_multilettersymbolpresentation.2735d7d8dbb7"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum MultiletterSymbolPresentation
```

Public type placement for MultiletterSymbolPresentation.

### Multiplicative

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationseparationstrategy_multiplicative_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationseparationstrategy_multiplicative.5f565c187c99"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSeparationStrategy variant</p>

```rust signature
Multiplicative,
```

Public variant placement for Multiplicative.

### Name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_variablelike_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_variablelike_name.7d48ee710203"></a>
<p class="symi-entry-owner">api::VariableLike variant</p>

```rust signature
Name(&'a str)
```

Public variant placement for Name.

### NaturalLogarithmPresentation

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_serialization_naturallogarithmpresentation_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_serialization_naturallogarithmpresentation.ff67e4844e8b"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum NaturalLogarithmPresentation
```

Public type placement for NaturalLogarithmPresentation.

### NoDependentFunctionOccurrence

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationproblemerror_nodependentfunctionoccurrence_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproblemerror_nodependentfunctionoccurrence.95083d8bf05d"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProblemError variant</p>

```rust signature
NoDependentFunctionOccurrence,
```

Public variant placement for NoDependentFunctionOccurrence.

### NoImplementedMethodClosed

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsolvedecline_noimplementedmethodclosed_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolvedecline_noimplementedmethodclosed.e85de1dc8479"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolveDecline variant</p>

```rust signature
NoImplementedMethodClosed,
```

Public variant placement for NoImplementedMethodClosed.

### NoRouteRecognizedTheEquation

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_norouterecognizedtheequation_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_norouterecognizedtheequation.ea034136a624"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline variant</p>

```rust signature
NoRouteRecognizedTheEquation,
```

Public variant placement for NoRouteRecognizedTheEquation.

### NoSafePrincipalPivot

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationcanonicalizationdecline_nosafeprincipalpivot_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcanonicalizationdecline_nosafeprincipalpivot.d514d8076a03"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationCanonicalizationDecline variant</p>

```rust signature
NoSafePrincipalPivot,
```

Public variant placement for NoSafePrincipalPivot.

### NoSequentialOrderingExists

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolvedecline_nosequentialorderingexists_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemsolvedecline_nosequentialorderingexists.5cd2eca927c4"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveDecline variant</p>

```rust signature
NoSequentialOrderingExists,
```

Public variant placement for NoSequentialOrderingExists.

### Nonlinear

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationlinearity_nonlinear_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationlinearity_nonlinear.1041a151f7e9"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationLinearity variant</p>

```rust signature
Nonlinear,
```

Public variant placement for Nonlinear.

### NotCompiled

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_parallelism_parallelismunavailablereason_notcompiled_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_parallelism_parallelismunavailablereason_notcompiled.6c042cdae0dc"></a>
<p class="symi-entry-owner">api::parallelism::ParallelismUnavailableReason variant</p>

```rust signature
NotCompiled,
```

Public variant placement for NotCompiled.

### NotInitialized

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_parallelism_parallelismunavailablereason_notinitialized_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_parallelism_parallelismunavailablereason_notinitialized.b9a0aa42bae1"></a>
<p class="symi-entry-owner">api::parallelism::ParallelismUnavailableReason variant</p>

```rust signature
NotInitialized,
```

Public variant placement for NotInitialized.

### NotTheIdentityAtTheOrigin

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsymmetryactiondecline_nottheidentityattheorigin_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsymmetryactiondecline_nottheidentityattheorigin.f0f09c72134c"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSymmetryActionDecline variant</p>

```rust signature
NotTheIdentityAtTheOrigin,
```

Public variant placement for NotTheIdentityAtTheOrigin.

### NotTwoVariableSecondOrderLinear

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsecondorderclassificationdecline_nottwovariablesecondorderlinear_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondorderclassificationdecline_nottwovariablesecondorderlinear.1dc467a29222"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSecondOrderClassificationDecline variant</p>

```rust signature
NotTwoVariableSecondOrderLinear,
```

Public variant placement for NotTwoVariableSecondOrderLinear.

### NumeratorDenominator

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_results_numeratordenominator_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_numeratordenominator.96a9f701a304"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct NumeratorDenominator
```

Public type placement for NumeratorDenominator.

### NumeratorDenominator

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_numeratordenominator_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_numeratordenominator.b86f97da0e84"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use results::NumeratorDenominator;
```

Public re_export placement for NumeratorDenominator.

### OneParameterGroupNotIntegrated

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsymmetryactiondecline_oneparametergroupnotintegrated_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsymmetryactiondecline_oneparametergroupnotintegrated.49a031724394"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSymmetryActionDecline variant</p>

```rust signature
OneParameterGroupNotIntegrated,
```

Public variant placement for OneParameterGroupNotIntegrated.

### OperationCancelled

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_apierror_operationcancelled_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_apierror_operationcancelled.10e87e6684cb"></a>
<p class="symi-entry-owner">api::ApiError variant</p>

```rust signature
OperationCancelled,
```

Public variant placement for OperationCancelled.

### OperationConfiguration

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_operationconfiguration_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_operationconfiguration.52862b5f0493"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use crate::operation::OperationConfiguration;
```

Public re_export placement for OperationConfiguration.

### OperationContext

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_operationcontext_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_operationcontext.b26c41e6274d"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use crate::operation::OperationContext;
```

Public re_export placement for OperationContext.

### OperationDefaults

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_operationdefaults_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_operationdefaults.146798a519f4"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use crate::operation::OperationDefaults;
```

Public re_export placement for OperationDefaults.

### OperationEvent

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_operationevent_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_operationevent.059eab0ba582"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use crate::operation::OperationEvent;
```

Public re_export placement for OperationEvent.

### OperationIdentifier

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_operationidentifier_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_operationidentifier.7c6a7ecfc74e"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use crate::operation::OperationIdentifier;
```

Public re_export placement for OperationIdentifier.

### OperationRecord

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_operationrecord_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_operationrecord.5c8ce64a7c41"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use crate::operation::OperationRecord;
```

Public re_export placement for OperationRecord.

### OperationStage

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_operationstage_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_operationstage.a0eea2eb9dc1"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use crate::operation::OperationStage;
```

Public re_export placement for OperationStage.

### OptimizationDirection

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_solving_optimizationdirection_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_solving_optimizationdirection.126e02b5cefb"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum OptimizationDirection
```

Public type placement for OptimizationDirection.

### OptimizationOutcome

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_results_optimizationoutcome_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_optimizationoutcome.b8d619afb7e1"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct OptimizationOutcome
```

Public type placement for OptimizationOutcome.

### OptimizationOutcome

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_optimizationoutcome_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_optimizationoutcome.8f0c2b119170"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use results::OptimizationOutcome;
```

Public re_export placement for OptimizationOutcome.

### OptimizationVerdict

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_results_optimizationverdict_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_optimizationverdict.490ecc8b5b8a"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum OptimizationVerdict
```

Public type placement for OptimizationVerdict.

### OptimizationVerdict

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_optimizationverdict_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_optimizationverdict.02c319d61a22"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use results::OptimizationVerdict;
```

Public re_export placement for OptimizationVerdict.

### OrderNotSupported

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationpointsymmetrydecline_ordernotsupported_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetrydecline_ordernotsupported.66cdfd177225"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryDecline variant</p>

```rust signature
OrderNotSupported,
```

Public variant placement for OrderNotSupported.

### OrdinaryDifferentialEquationGeneralityVerdict

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationgeneralityverdict_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationgeneralityverdict.756670f9ca05"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum OrdinaryDifferentialEquationGeneralityVerdict
```

Public type placement for OrdinaryDifferentialEquationGeneralityVerdict.

### OrdinaryDifferentialEquationGeneralityVerdict

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinarydifferentialequationgeneralityverdict_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinarydifferentialequationgeneralityverdict.5a6c08909b64"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use ordinary_differential_equations::OrdinaryDifferentialEquationGeneralityVerdict;
```

Public re_export placement for OrdinaryDifferentialEquationGeneralityVerdict.

### OrdinaryDifferentialEquationMethod

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationmethod_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationmethod.321d5f690dc2"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum OrdinaryDifferentialEquationMethod
```

Public type placement for OrdinaryDifferentialEquationMethod.

### OrdinaryDifferentialEquationMethod

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinarydifferentialequationmethod_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinarydifferentialequationmethod.f77be30e55a1"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use ordinary_differential_equations::OrdinaryDifferentialEquationMethod;
```

Public re_export placement for OrdinaryDifferentialEquationMethod.

### OrdinaryDifferentialEquationRegularity

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationregularity_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationregularity.7235b2896423"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum OrdinaryDifferentialEquationRegularity
```

Public type placement for OrdinaryDifferentialEquationRegularity.

### OrdinaryDifferentialEquationRegularity

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinarydifferentialequationregularity_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinarydifferentialequationregularity.ab1013672e36"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use ordinary_differential_equations::OrdinaryDifferentialEquationRegularity;
```

Public re_export placement for OrdinaryDifferentialEquationRegularity.

### OrdinaryDifferentialEquationSolutionForm

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsolutionform_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolutionform.b5eec4ffd453"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum OrdinaryDifferentialEquationSolutionForm
```

Public type placement for OrdinaryDifferentialEquationSolutionForm.

### OrdinaryDifferentialEquationSolutionForm

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinarydifferentialequationsolutionform_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinarydifferentialequationsolutionform.66825351f463"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use ordinary_differential_equations::OrdinaryDifferentialEquationSolutionForm;
```

Public re_export placement for OrdinaryDifferentialEquationSolutionForm.

### OrdinaryDifferentialEquationSolveDecline

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline.8b53ff20f3ff"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum OrdinaryDifferentialEquationSolveDecline
```

Public type placement for OrdinaryDifferentialEquationSolveDecline.

### OrdinaryDifferentialEquationSolveDecline

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinarydifferentialequationsolvedecline_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinarydifferentialequationsolvedecline.32ecdcabed85"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline;
```

Public re_export placement for OrdinaryDifferentialEquationSolveDecline.

### OrdinaryDifferentialEquationSolveVerdict

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsolveverdict_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolveverdict.3c2cf5c9c482"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum OrdinaryDifferentialEquationSolveVerdict
```

Public type placement for OrdinaryDifferentialEquationSolveVerdict.

### OrdinaryDifferentialEquationSolveVerdict

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinarydifferentialequationsolveverdict_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinarydifferentialequationsolveverdict.a774d454dba7"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use ordinary_differential_equations::OrdinaryDifferentialEquationSolveVerdict;
```

Public re_export placement for OrdinaryDifferentialEquationSolveVerdict.

### OrdinaryDifferentialEquationSystemMethod

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsystemmethod_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemmethod.12281da804cb"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum OrdinaryDifferentialEquationSystemMethod
```

Public type placement for OrdinaryDifferentialEquationSystemMethod.

### OrdinaryDifferentialEquationSystemMethod

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinarydifferentialequationsystemmethod_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinarydifferentialequationsystemmethod.3053234e93b0"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use ordinary_differential_equations::OrdinaryDifferentialEquationSystemMethod;
```

Public re_export placement for OrdinaryDifferentialEquationSystemMethod.

### OrdinaryDifferentialEquationSystemRoute

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsystemroute_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemroute.c500ade1be07"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum OrdinaryDifferentialEquationSystemRoute
```

Public type placement for OrdinaryDifferentialEquationSystemRoute.

### OrdinaryDifferentialEquationSystemRoute

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinarydifferentialequationsystemroute_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinarydifferentialequationsystemroute.c94b7c719c33"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use ordinary_differential_equations::OrdinaryDifferentialEquationSystemRoute;
```

Public re_export placement for OrdinaryDifferentialEquationSystemRoute.

### OrdinaryDifferentialEquationSystemSolveDecline

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolvedecline_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemsolvedecline.7b01e381ac16"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum OrdinaryDifferentialEquationSystemSolveDecline
```

Public type placement for OrdinaryDifferentialEquationSystemSolveDecline.

### OrdinaryDifferentialEquationSystemSolveDecline

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinarydifferentialequationsystemsolvedecline_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinarydifferentialequationsystemsolvedecline.9253307f5f75"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveDecline;
```

Public re_export placement for OrdinaryDifferentialEquationSystemSolveDecline.

### OrdinaryDifferentialEquationVerificationVerdict

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationverificationverdict_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationverificationverdict.dca6b46825a4"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum OrdinaryDifferentialEquationVerificationVerdict
```

Public type placement for OrdinaryDifferentialEquationVerificationVerdict.

### OrdinaryDifferentialEquationVerificationVerdict

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinarydifferentialequationverificationverdict_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinarydifferentialequationverificationverdict.077b7b545f63"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use ordinary_differential_equations::OrdinaryDifferentialEquationVerificationVerdict;
```

Public re_export placement for OrdinaryDifferentialEquationVerificationVerdict.

### OriginRegularAngularPeriodic

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationregularity_originregularangularperiodic_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationregularity_originregularangularperiodic.2aa61b4299f5"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationRegularity variant</p>

```rust signature
OriginRegularAngularPeriodic,
```

Public variant placement for OriginRegularAngularPeriodic.

### OriginTraceEstablished

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationproofobligation_origintraceestablished_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproofobligation_origintraceestablished.020e33fd0e11"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProofObligation variant</p>

```rust signature
OriginTraceEstablished,
```

Public variant placement for OriginTraceEstablished.

### OrthogonalPolynomialBasis

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_options_orthogonalpolynomialbasis_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_options_orthogonalpolynomialbasis.04fb9abf1806"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct OrthogonalPolynomialBasis
```

Public type placement for OrthogonalPolynomialBasis.

### OrthogonalPolynomialBasis

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_orthogonalpolynomialbasis_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_orthogonalpolynomialbasis.370251607a5b"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use options::OrthogonalPolynomialBasis;
```

Public re_export placement for OrthogonalPolynomialBasis.

### OrthogonalPolynomialFamily

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_options_orthogonalpolynomialfamily_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_options_orthogonalpolynomialfamily.44acbda7c6fa"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum OrthogonalPolynomialFamily
```

Public type placement for OrthogonalPolynomialFamily.

### OrthogonalPolynomialFamily

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_orthogonalpolynomialfamily_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_orthogonalpolynomialfamily.34934096529d"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use options::OrthogonalPolynomialFamily;
```

Public re_export placement for OrthogonalPolynomialFamily.

### Parabolic

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsecondordertype_parabolic_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondordertype_parabolic.0a5ff4cb4e77"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSecondOrderType variant</p>

```rust signature
Parabolic,
```

Public variant placement for Parabolic.

### ParabolicSinglePureSecondDerivative

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationcanonicalprincipalform_parabolicsinglepuresecondderivative_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcanonicalprincipalform_parabolicsinglepuresecondderivative.9d44e20b92cd"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationCanonicalPrincipalForm variant</p>

```rust signature
ParabolicSinglePureSecondDerivative,
```

Public variant placement for ParabolicSinglePureSecondDerivative.

### ParallelBackend

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_parallelism_parallelbackend_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_parallelism_parallelbackend.8ffc266e8d65"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum ParallelBackend
```

Public type placement for ParallelBackend.

### ParallelBackend

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_parallelbackend_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_parallelbackend.631a5d437186"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use parallelism::ParallelBackend;
```

Public re_export placement for ParallelBackend.

### ParallelismCapability

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_parallelism_parallelismcapability_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_parallelism_parallelismcapability.77961bf650dd"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct ParallelismCapability
```

Public type placement for ParallelismCapability.

### ParallelismCapability

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_parallelismcapability_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_parallelismcapability.2be8205af335"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use parallelism::ParallelismCapability;
```

Public re_export placement for ParallelismCapability.

### ParallelismInitialization

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_parallelism_parallelisminitialization_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_parallelism_parallelisminitialization.30fdfc4d0acd"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum ParallelismInitialization
```

Public type placement for ParallelismInitialization.

### ParallelismInitialization

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_parallelisminitialization_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_parallelisminitialization.b4fa065a8693"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use parallelism::ParallelismInitialization;
```

Public re_export placement for ParallelismInitialization.

### ParallelismInitializationFailed

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_apierror_parallelisminitializationfailed_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_apierror_parallelisminitializationfailed.b5f5408f3837"></a>
<p class="symi-entry-owner">api::ApiError variant</p>

```rust signature
ParallelismInitializationFailed,
```

Public variant placement for ParallelismInitializationFailed.

### ParallelismNotCompiled

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_apierror_parallelismnotcompiled_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_apierror_parallelismnotcompiled.f1a8c981e3dd"></a>
<p class="symi-entry-owner">api::ApiError variant</p>

```rust signature
ParallelismNotCompiled,
```

Public variant placement for ParallelismNotCompiled.

### ParallelismRequiresAsyncInitialization

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_apierror_parallelismrequiresasyncinitialization_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_apierror_parallelismrequiresasyncinitialization.5891e2aea66a"></a>
<p class="symi-entry-owner">api::ApiError variant</p>

```rust signature
ParallelismRequiresAsyncInitialization,
```

Public variant placement for ParallelismRequiresAsyncInitialization.

### ParallelismUnavailableReason

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_parallelism_parallelismunavailablereason_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_parallelism_parallelismunavailablereason.d739bec642e8"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum ParallelismUnavailableReason
```

Public type placement for ParallelismUnavailableReason.

### ParallelismUnavailableReason

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_parallelismunavailablereason_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_parallelismunavailablereason.4f8b71e82a2d"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use parallelism::ParallelismUnavailableReason;
```

Public re_export placement for ParallelismUnavailableReason.

### ParseError

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_parseerror_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_parseerror.4e012c26c04e"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use crate::interactive::parser::ParseError;
```

Public re_export placement for ParseError.

### ParseError

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_apierror_parseerror_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_apierror_parseerror.630734a69a9c"></a>
<p class="symi-entry-owner">api::ApiError variant</p>

```rust signature
ParseError(ParseError)
```

Public variant placement for ParseError.

### PartialDifferentialEquation

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_serialization_mathematicalobject_partialdifferentialequation_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_serialization_mathematicalobject_partialdifferentialequation.e0ed9fee767e"></a>
<p class="symi-entry-owner">api::serialization::MathematicalObject variant</p>

```rust signature
PartialDifferentialEquation(crate::api::PartialDifferentialEquationProblem)
```

Public variant placement for PartialDifferentialEquation.

### PartialDifferentialEquationArbitraryFunction

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationarbitraryfunction_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationarbitraryfunction.a32372f373b8"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct PartialDifferentialEquationArbitraryFunction
```

Public type placement for PartialDifferentialEquationArbitraryFunction.

### PartialDifferentialEquationArbitraryFunction

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partialdifferentialequationarbitraryfunction_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationarbitraryfunction.91118ba9af6d"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationArbitraryFunction;
```

Public re_export placement for PartialDifferentialEquationArbitraryFunction.

### PartialDifferentialEquationCanonicalPrincipalForm

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationcanonicalprincipalform_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcanonicalprincipalform.79acc4e914c1"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum PartialDifferentialEquationCanonicalPrincipalForm
```

Public type placement for PartialDifferentialEquationCanonicalPrincipalForm.

### PartialDifferentialEquationCanonicalPrincipalForm

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partialdifferentialequationcanonicalprincipalform_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationcanonicalprincipalform.f3eeef9a2e5e"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationCanonicalPrincipalForm;
```

Public re_export placement for PartialDifferentialEquationCanonicalPrincipalForm.

### PartialDifferentialEquationCanonicalizationDecline

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationcanonicalizationdecline_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcanonicalizationdecline.1ec311beaf58"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum PartialDifferentialEquationCanonicalizationDecline
```

Public type placement for PartialDifferentialEquationCanonicalizationDecline.

### PartialDifferentialEquationCanonicalizationDecline

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partialdifferentialequationcanonicalizationdecline_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationcanonicalizationdecline.9b204764b187"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationCanonicalizationDecline;
```

Public re_export placement for PartialDifferentialEquationCanonicalizationDecline.

### PartialDifferentialEquationCanonicalizationResult

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationcanonicalizationresult_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcanonicalizationresult.c6e640cb4914"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct PartialDifferentialEquationCanonicalizationResult
```

Public type placement for PartialDifferentialEquationCanonicalizationResult.

### PartialDifferentialEquationCanonicalizationResult

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partialdifferentialequationcanonicalizationresult_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationcanonicalizationresult.6d4c0e8bcf04"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationCanonicalizationResult;
```

Public re_export placement for PartialDifferentialEquationCanonicalizationResult.

### PartialDifferentialEquationClassification

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationclassification_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationclassification.d1b3a10e0059"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct PartialDifferentialEquationClassification
```

Public type placement for PartialDifferentialEquationClassification.

### PartialDifferentialEquationClassification

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partialdifferentialequationclassification_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationclassification.a926b63b6178"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationClassification;
```

Public re_export placement for PartialDifferentialEquationClassification.

### PartialDifferentialEquationCoefficientData

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationcoefficientdata_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcoefficientdata.2b605d307d97"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct PartialDifferentialEquationCoefficientData
```

Public type placement for PartialDifferentialEquationCoefficientData.

### PartialDifferentialEquationCoefficientData

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partialdifferentialequationcoefficientdata_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationcoefficientdata.a7c537de52fe"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationCoefficientData;
```

Public re_export placement for PartialDifferentialEquationCoefficientData.

### PartialDifferentialEquationCoordinateChange

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationcoordinatechange_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcoordinatechange.92ae567822e3"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct PartialDifferentialEquationCoordinateChange
```

Public type placement for PartialDifferentialEquationCoordinateChange.

### PartialDifferentialEquationCoordinateChange

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partialdifferentialequationcoordinatechange_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationcoordinatechange.94dc5395fd9d"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationCoordinateChange;
```

Public re_export placement for PartialDifferentialEquationCoordinateChange.

### PartialDifferentialEquationGeometricDomain

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationgeometricdomain_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationgeometricdomain.8956295f5b1c"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum PartialDifferentialEquationGeometricDomain
```

Public type placement for PartialDifferentialEquationGeometricDomain.

### PartialDifferentialEquationGeometricDomain

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partialdifferentialequationgeometricdomain_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationgeometricdomain.511aa3743dac"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationGeometricDomain;
```

Public re_export placement for PartialDifferentialEquationGeometricDomain.

### PartialDifferentialEquationJet

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationjet_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationjet.01cfcd830fd3"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct PartialDifferentialEquationJet
```

Public type placement for PartialDifferentialEquationJet.

### PartialDifferentialEquationJet

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partialdifferentialequationjet_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationjet.537ed3464f32"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationJet;
```

Public re_export placement for PartialDifferentialEquationJet.

### PartialDifferentialEquationJetCoefficient

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationjetcoefficient_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationjetcoefficient.a41d5999cfac"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct PartialDifferentialEquationJetCoefficient
```

Public type placement for PartialDifferentialEquationJetCoefficient.

### PartialDifferentialEquationJetCoefficient

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partialdifferentialequationjetcoefficient_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationjetcoefficient.b78dabebc6f0"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationJetCoefficient;
```

Public re_export placement for PartialDifferentialEquationJetCoefficient.

### PartialDifferentialEquationLinearity

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationlinearity_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationlinearity.c2346dbaee0f"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum PartialDifferentialEquationLinearity
```

Public type placement for PartialDifferentialEquationLinearity.

### PartialDifferentialEquationLinearity

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partialdifferentialequationlinearity_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationlinearity.ea1364ef81a1"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationLinearity;
```

Public re_export placement for PartialDifferentialEquationLinearity.

### PartialDifferentialEquationMethod

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationmethod_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationmethod.93a455ee0f77"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum PartialDifferentialEquationMethod
```

Public type placement for PartialDifferentialEquationMethod.

### PartialDifferentialEquationMethod

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partialdifferentialequationmethod_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationmethod.460b6952e247"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationMethod;
```

Public re_export placement for PartialDifferentialEquationMethod.

### PartialDifferentialEquationMethodCandidate

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationmethodcandidate_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationmethodcandidate.c0b9bbad0016"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct PartialDifferentialEquationMethodCandidate
```

Public type placement for PartialDifferentialEquationMethodCandidate.

### PartialDifferentialEquationMethodCandidate

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partialdifferentialequationmethodcandidate_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationmethodcandidate.689a93461bc3"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationMethodCandidate;
```

Public re_export placement for PartialDifferentialEquationMethodCandidate.

### PartialDifferentialEquationPointSymmetryAction

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetryaction.c6bed10d6ea1"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct PartialDifferentialEquationPointSymmetryAction
```

Public type placement for PartialDifferentialEquationPointSymmetryAction.

### PartialDifferentialEquationPointSymmetryAction

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partialdifferentialequationpointsymmetryaction_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationpointsymmetryaction.fbb3ba92e188"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationPointSymmetryAction;
```

Public re_export placement for PartialDifferentialEquationPointSymmetryAction.

### PartialDifferentialEquationPointSymmetryAlgebra

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra.47ab2650da3a"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct PartialDifferentialEquationPointSymmetryAlgebra
```

Public type placement for PartialDifferentialEquationPointSymmetryAlgebra.

### PartialDifferentialEquationPointSymmetryAlgebra

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partialdifferentialequationpointsymmetryalgebra_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationpointsymmetryalgebra.37cf5d6cab7b"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationPointSymmetryAlgebra;
```

Public re_export placement for PartialDifferentialEquationPointSymmetryAlgebra.

### PartialDifferentialEquationPointSymmetryDecline

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationpointsymmetrydecline_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetrydecline.c495e6e8c3ed"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum PartialDifferentialEquationPointSymmetryDecline
```

Public type placement for PartialDifferentialEquationPointSymmetryDecline.

### PartialDifferentialEquationPointSymmetryDecline

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partialdifferentialequationpointsymmetrydecline_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationpointsymmetrydecline.aaee732a0ea5"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationPointSymmetryDecline;
```

Public re_export placement for PartialDifferentialEquationPointSymmetryDecline.

### PartialDifferentialEquationPointSymmetryGenerator

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationpointsymmetrygenerator_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetrygenerator.06697c4329c1"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct PartialDifferentialEquationPointSymmetryGenerator
```

Public type placement for PartialDifferentialEquationPointSymmetryGenerator.

### PartialDifferentialEquationPointSymmetryGenerator

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partialdifferentialequationpointsymmetrygenerator_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationpointsymmetrygenerator.8b5a0ed57492"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationPointSymmetryGenerator;
```

Public re_export placement for PartialDifferentialEquationPointSymmetryGenerator.

### PartialDifferentialEquationPortfolioDecline

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationportfoliodecline_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationportfoliodecline.39e4394337b8"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct PartialDifferentialEquationPortfolioDecline
```

Public type placement for PartialDifferentialEquationPortfolioDecline.

### PartialDifferentialEquationPortfolioDecline

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partialdifferentialequationportfoliodecline_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationportfoliodecline.90b25abf0e88"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationPortfolioDecline;
```

Public re_export placement for PartialDifferentialEquationPortfolioDecline.

### PartialDifferentialEquationPrincipalCoefficient

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationprincipalcoefficient_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationprincipalcoefficient.05e75a1695c6"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct PartialDifferentialEquationPrincipalCoefficient
```

Public type placement for PartialDifferentialEquationPrincipalCoefficient.

### PartialDifferentialEquationPrincipalCoefficient

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partialdifferentialequationprincipalcoefficient_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationprincipalcoefficient.9c3fe6843512"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationPrincipalCoefficient;
```

Public re_export placement for PartialDifferentialEquationPrincipalCoefficient.

### PartialDifferentialEquationPrincipalPart

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationprincipalpart_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationprincipalpart.de711ed5c59a"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct PartialDifferentialEquationPrincipalPart
```

Public type placement for PartialDifferentialEquationPrincipalPart.

### PartialDifferentialEquationPrincipalPart

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partialdifferentialequationprincipalpart_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationprincipalpart.d527b862a307"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationPrincipalPart;
```

Public re_export placement for PartialDifferentialEquationPrincipalPart.

### PartialDifferentialEquationProblem

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationproblem_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproblem.c31fb0399b81"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct PartialDifferentialEquationProblem
```

Public type placement for PartialDifferentialEquationProblem.

### PartialDifferentialEquationProblem

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partialdifferentialequationproblem_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationproblem.d68142b5813b"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationProblem;
```

Public re_export placement for PartialDifferentialEquationProblem.

### PartialDifferentialEquationProblem

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_apierror_partialdifferentialequationproblem_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_apierror_partialdifferentialequationproblem.48ff0de0c1dd"></a>
<p class="symi-entry-owner">api::ApiError variant</p>

```rust signature
PartialDifferentialEquationProblem(PartialDifferentialEquationProblemError)
```

Public variant placement for PartialDifferentialEquationProblem.

### PartialDifferentialEquationProblemError

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationproblemerror_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproblemerror.f3e10f59c22d"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum PartialDifferentialEquationProblemError
```

Public type placement for PartialDifferentialEquationProblemError.

### PartialDifferentialEquationProblemError

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partialdifferentialequationproblemerror_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationproblemerror.37dcb62980cb"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationProblemError;
```

Public re_export placement for PartialDifferentialEquationProblemError.

### PartialDifferentialEquationProofObligation

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationproofobligation_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproofobligation.274c6e6669a6"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum PartialDifferentialEquationProofObligation
```

Public type placement for PartialDifferentialEquationProofObligation.

### PartialDifferentialEquationProofObligation

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partialdifferentialequationproofobligation_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationproofobligation.88661a642926"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationProofObligation;
```

Public re_export placement for PartialDifferentialEquationProofObligation.

### PartialDifferentialEquationRegularity

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationregularity_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationregularity.224a7acb1b38"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum PartialDifferentialEquationRegularity
```

Public type placement for PartialDifferentialEquationRegularity.

### PartialDifferentialEquationRegularity

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partialdifferentialequationregularity_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationregularity.cbe830aa2be4"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationRegularity;
```

Public re_export placement for PartialDifferentialEquationRegularity.

### PartialDifferentialEquationSecondOrderClassification

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsecondorderclassification_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondorderclassification.bf097da4dd39"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct PartialDifferentialEquationSecondOrderClassification
```

Public type placement for PartialDifferentialEquationSecondOrderClassification.

### PartialDifferentialEquationSecondOrderClassification

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partialdifferentialequationsecondorderclassification_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationsecondorderclassification.0e61b326a25a"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationSecondOrderClassification;
```

Public re_export placement for PartialDifferentialEquationSecondOrderClassification.

### PartialDifferentialEquationSecondOrderClassificationDecline

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsecondorderclassificationdecline_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondorderclassificationdecline.52b6ee42e76f"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum PartialDifferentialEquationSecondOrderClassificationDecline
```

Public type placement for PartialDifferentialEquationSecondOrderClassificationDecline.

### PartialDifferentialEquationSecondOrderClassificationDecline

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partialdifferentialequationsecondorderclassificationdecline_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationsecondorderclassificationdecline.9bc4439cee42"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationSecondOrderClassificationDecline;
```

Public re_export placement for PartialDifferentialEquationSecondOrderClassificationDecline.

### PartialDifferentialEquationSecondOrderType

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsecondordertype_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondordertype.41e35cf99ab8"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum PartialDifferentialEquationSecondOrderType
```

Public type placement for PartialDifferentialEquationSecondOrderType.

### PartialDifferentialEquationSecondOrderType

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partialdifferentialequationsecondordertype_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationsecondordertype.5c3ab1194b6d"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationSecondOrderType;
```

Public re_export placement for PartialDifferentialEquationSecondOrderType.

### PartialDifferentialEquationSecondOrderTypeCase

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsecondordertypecase_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondordertypecase.ee791ec6ee9f"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct PartialDifferentialEquationSecondOrderTypeCase
```

Public type placement for PartialDifferentialEquationSecondOrderTypeCase.

### PartialDifferentialEquationSecondOrderTypeCase

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partialdifferentialequationsecondordertypecase_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationsecondordertypecase.e7f6788cffc5"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationSecondOrderTypeCase;
```

Public re_export placement for PartialDifferentialEquationSecondOrderTypeCase.

### PartialDifferentialEquationSecondOrderTypeVerdict

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsecondordertypeverdict_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondordertypeverdict.242476bc9524"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum PartialDifferentialEquationSecondOrderTypeVerdict
```

Public type placement for PartialDifferentialEquationSecondOrderTypeVerdict.

### PartialDifferentialEquationSecondOrderTypeVerdict

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partialdifferentialequationsecondordertypeverdict_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationsecondordertypeverdict.64bfe49776d9"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationSecondOrderTypeVerdict;
```

Public re_export placement for PartialDifferentialEquationSecondOrderTypeVerdict.

### PartialDifferentialEquationSeparatedEquation

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationseparatedequation_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationseparatedequation.be9236b0d4b6"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct PartialDifferentialEquationSeparatedEquation
```

Public type placement for PartialDifferentialEquationSeparatedEquation.

### PartialDifferentialEquationSeparatedEquation

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partialdifferentialequationseparatedequation_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationseparatedequation.d0c9cb9fab78"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationSeparatedEquation;
```

Public re_export placement for PartialDifferentialEquationSeparatedEquation.

### PartialDifferentialEquationSeparationResult

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationseparationresult_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationseparationresult.d01a2ffde823"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct PartialDifferentialEquationSeparationResult
```

Public type placement for PartialDifferentialEquationSeparationResult.

### PartialDifferentialEquationSeparationResult

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partialdifferentialequationseparationresult_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationseparationresult.7c49dec9cbf7"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationSeparationResult;
```

Public re_export placement for PartialDifferentialEquationSeparationResult.

### PartialDifferentialEquationSeparationStrategy

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationseparationstrategy_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationseparationstrategy.8190247026af"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum PartialDifferentialEquationSeparationStrategy
```

Public type placement for PartialDifferentialEquationSeparationStrategy.

### PartialDifferentialEquationSeparationStrategy

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partialdifferentialequationseparationstrategy_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationseparationstrategy.eead9d0f99f8"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationSeparationStrategy;
```

Public re_export placement for PartialDifferentialEquationSeparationStrategy.

### PartialDifferentialEquationSimilarityReductionDecline

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsimilarityreductiondecline_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsimilarityreductiondecline.1e468220b819"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum PartialDifferentialEquationSimilarityReductionDecline
```

Public type placement for PartialDifferentialEquationSimilarityReductionDecline.

### PartialDifferentialEquationSimilarityReductionDecline

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partialdifferentialequationsimilarityreductiondecline_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationsimilarityreductiondecline.205a2a8816ca"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationSimilarityReductionDecline;
```

Public re_export placement for PartialDifferentialEquationSimilarityReductionDecline.

### PartialDifferentialEquationSimilaritySolution

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsimilaritysolution.4463528c49f4"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct PartialDifferentialEquationSimilaritySolution
```

Public type placement for PartialDifferentialEquationSimilaritySolution.

### PartialDifferentialEquationSimilaritySolution

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partialdifferentialequationsimilaritysolution_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationsimilaritysolution.691f4a9d0afd"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationSimilaritySolution;
```

Public re_export placement for PartialDifferentialEquationSimilaritySolution.

### PartialDifferentialEquationSolutionClass

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsolutionclass_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolutionclass.e08cdb8a5f09"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum PartialDifferentialEquationSolutionClass
```

Public type placement for PartialDifferentialEquationSolutionClass.

### PartialDifferentialEquationSolutionClass

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partialdifferentialequationsolutionclass_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationsolutionclass.99e3aebf8b38"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationSolutionClass;
```

Public re_export placement for PartialDifferentialEquationSolutionClass.

### PartialDifferentialEquationSolutionFamily

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsolutionfamily_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolutionfamily.9a014ebc7b60"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct PartialDifferentialEquationSolutionFamily
```

Public type placement for PartialDifferentialEquationSolutionFamily.

### PartialDifferentialEquationSolutionFamily

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partialdifferentialequationsolutionfamily_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationsolutionfamily.68a19ea58a2f"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationSolutionFamily;
```

Public re_export placement for PartialDifferentialEquationSolutionFamily.

### PartialDifferentialEquationSolutionForm

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsolutionform_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolutionform.ef80dbcdf0fc"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum PartialDifferentialEquationSolutionForm
```

Public type placement for PartialDifferentialEquationSolutionForm.

### PartialDifferentialEquationSolutionForm

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partialdifferentialequationsolutionform_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationsolutionform.3ba96c76fe61"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationSolutionForm;
```

Public re_export placement for PartialDifferentialEquationSolutionForm.

### PartialDifferentialEquationSolutionProvenance

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsolutionprovenance_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolutionprovenance.97cec4c6002f"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct PartialDifferentialEquationSolutionProvenance
```

Public type placement for PartialDifferentialEquationSolutionProvenance.

### PartialDifferentialEquationSolutionProvenance

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partialdifferentialequationsolutionprovenance_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationsolutionprovenance.21734bd8a97f"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationSolutionProvenance;
```

Public re_export placement for PartialDifferentialEquationSolutionProvenance.

### PartialDifferentialEquationSolveDecline

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsolvedecline_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolvedecline.90dbbeb355f6"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum PartialDifferentialEquationSolveDecline
```

Public type placement for PartialDifferentialEquationSolveDecline.

### PartialDifferentialEquationSolveDecline

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partialdifferentialequationsolvedecline_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationsolvedecline.6f0d5472c685"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationSolveDecline;
```

Public re_export placement for PartialDifferentialEquationSolveDecline.

### PartialDifferentialEquationSolveOptions

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsolveoptions_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolveoptions.010bdc291bad"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct PartialDifferentialEquationSolveOptions
```

Public type placement for PartialDifferentialEquationSolveOptions.

### PartialDifferentialEquationSolveOptions

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partialdifferentialequationsolveoptions_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationsolveoptions.6ba011602d40"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationSolveOptions;
```

Public re_export placement for PartialDifferentialEquationSolveOptions.

### PartialDifferentialEquationSolveResult

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsolveresult_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolveresult.e2f6e6a97f0a"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct PartialDifferentialEquationSolveResult
```

Public type placement for PartialDifferentialEquationSolveResult.

### PartialDifferentialEquationSolveResult

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partialdifferentialequationsolveresult_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationsolveresult.1dd016acd5e1"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationSolveResult;
```

Public re_export placement for PartialDifferentialEquationSolveResult.

### PartialDifferentialEquationSolveVerdict

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsolveverdict_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolveverdict.e058d56d56bc"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum PartialDifferentialEquationSolveVerdict
```

Public type placement for PartialDifferentialEquationSolveVerdict.

### PartialDifferentialEquationSolveVerdict

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partialdifferentialequationsolveverdict_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationsolveverdict.5928ab98516a"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationSolveVerdict;
```

Public re_export placement for PartialDifferentialEquationSolveVerdict.

### PartialDifferentialEquationSymmetryActionDecline

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsymmetryactiondecline_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsymmetryactiondecline.b2993e3d6474"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum PartialDifferentialEquationSymmetryActionDecline
```

Public type placement for PartialDifferentialEquationSymmetryActionDecline.

### PartialDifferentialEquationSymmetryActionDecline

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partialdifferentialequationsymmetryactiondecline_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationsymmetryactiondecline.3bab3c416d09"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationSymmetryActionDecline;
```

Public re_export placement for PartialDifferentialEquationSymmetryActionDecline.

### PartialDifferentialEquationSymmetryObligation

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsymmetryobligation_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsymmetryobligation.23a34e411f30"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum PartialDifferentialEquationSymmetryObligation
```

Public type placement for PartialDifferentialEquationSymmetryObligation.

### PartialDifferentialEquationSymmetryObligation

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partialdifferentialequationsymmetryobligation_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationsymmetryobligation.a6dd2f879c8e"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationSymmetryObligation;
```

Public re_export placement for PartialDifferentialEquationSymmetryObligation.

### PartialDifferentialEquationTransformAxisKind

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationtransformaxiskind_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformaxiskind.aede7dded2e3"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum PartialDifferentialEquationTransformAxisKind
```

Public type placement for PartialDifferentialEquationTransformAxisKind.

### PartialDifferentialEquationTransformAxisKind

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partialdifferentialequationtransformaxiskind_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationtransformaxiskind.55e352fe6f5d"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationTransformAxisKind;
```

Public re_export placement for PartialDifferentialEquationTransformAxisKind.

### PartialDifferentialEquationTransformAxisOption

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationtransformaxisoption_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformaxisoption.393ba5b222eb"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct PartialDifferentialEquationTransformAxisOption
```

Public type placement for PartialDifferentialEquationTransformAxisOption.

### PartialDifferentialEquationTransformAxisOption

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partialdifferentialequationtransformaxisoption_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationtransformaxisoption.d5d69ba37dc8"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationTransformAxisOption;
```

Public re_export placement for PartialDifferentialEquationTransformAxisOption.

### PartialDifferentialEquationTransformationDecline

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationtransformationdecline_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationdecline.6018d441431a"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum PartialDifferentialEquationTransformationDecline
```

Public type placement for PartialDifferentialEquationTransformationDecline.

### PartialDifferentialEquationTransformationDecline

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partialdifferentialequationtransformationdecline_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationtransformationdecline.817558a6f7d5"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationTransformationDecline;
```

Public re_export placement for PartialDifferentialEquationTransformationDecline.

### PartialDifferentialEquationTransformationResult

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationtransformationresult_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationresult.0ed51e0af405"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct PartialDifferentialEquationTransformationResult
```

Public type placement for PartialDifferentialEquationTransformationResult.

### PartialDifferentialEquationTransformationResult

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partialdifferentialequationtransformationresult_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationtransformationresult.b3c315cd45ee"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationTransformationResult;
```

Public re_export placement for PartialDifferentialEquationTransformationResult.

### PartialDifferentialEquationTransformationVerificationReport

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationtransformationverificationreport_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationverificationreport.709c5818cf06"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct PartialDifferentialEquationTransformationVerificationReport
```

Public type placement for PartialDifferentialEquationTransformationVerificationReport.

### PartialDifferentialEquationTransformationVerificationReport

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partialdifferentialequationtransformationverificationreport_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationtransformationverificationreport.b8192e677d6f"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationTransformationVerificationReport;
```

Public re_export placement for PartialDifferentialEquationTransformationVerificationReport.

### PartialDifferentialEquationVerificationInconclusiveReason

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationverificationinconclusivereason_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationverificationinconclusivereason.10d9bc5fb58b"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum PartialDifferentialEquationVerificationInconclusiveReason
```

Public type placement for PartialDifferentialEquationVerificationInconclusiveReason.

### PartialDifferentialEquationVerificationInconclusiveReason

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partialdifferentialequationverificationinconclusivereason_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationverificationinconclusivereason.fda115506444"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationVerificationInconclusiveReason;
```

Public re_export placement for PartialDifferentialEquationVerificationInconclusiveReason.

### PartialDifferentialEquationVerificationReport

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationverificationreport_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationverificationreport.28cb17ecc4cd"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct PartialDifferentialEquationVerificationReport
```

Public type placement for PartialDifferentialEquationVerificationReport.

### PartialDifferentialEquationVerificationReport

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partialdifferentialequationverificationreport_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationverificationreport.fc61d84cd6d9"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationVerificationReport;
```

Public re_export placement for PartialDifferentialEquationVerificationReport.

### PartialDifferentialEquationVerificationResidual

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationverificationresidual_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationverificationresidual.545b0342b538"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct PartialDifferentialEquationVerificationResidual
```

Public type placement for PartialDifferentialEquationVerificationResidual.

### PartialDifferentialEquationVerificationResidual

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partialdifferentialequationverificationresidual_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationverificationresidual.601fa0d168c5"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationVerificationResidual;
```

Public re_export placement for PartialDifferentialEquationVerificationResidual.

### PartialDifferentialEquationVerificationVerdict

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationverificationverdict_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationverificationverdict.0babd84d1943"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum PartialDifferentialEquationVerificationVerdict
```

Public type placement for PartialDifferentialEquationVerificationVerdict.

### PartialDifferentialEquationVerificationVerdict

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partialdifferentialequationverificationverdict_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partialdifferentialequationverificationverdict.79c2ad9012d0"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use partial_differential_equations::PartialDifferentialEquationVerificationVerdict;
```

Public re_export placement for PartialDifferentialEquationVerificationVerdict.

### Particular

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_differentialequationsolutionscope_particular_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_differentialequationsolutionscope_particular.6da519c69a4e"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::DifferentialEquationSolutionScope variant</p>

```rust signature
Particular,
```

Public variant placement for Particular.

### PiecewiseBranch

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_results_piecewisebranch_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_piecewisebranch.68c16bec8834"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct PiecewiseBranch
```

Public type placement for PiecewiseBranch.

### PiecewiseBranch

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_piecewisebranch_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_piecewisebranch.3ed16cef07a7"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use results::PiecewiseBranch;
```

Public re_export placement for PiecewiseBranch.

### PiecewiseClassical

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationregularity_piecewiseclassical_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationregularity_piecewiseclassical.755297d1f61a"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationRegularity variant</p>

```rust signature
PiecewiseClassical,
```

Public variant placement for PiecewiseClassical.

### Point

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_geometry2d_point_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_geometry2d_point.fedc40bfa628"></a>
<p class="symi-entry-owner">api::Geometry2d variant</p>

```rust signature
Point(Point2d)
```

Public variant placement for Point.

### Point

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_geometryintersectioncomponent_point_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_geometryintersectioncomponent_point.75b5164e7905"></a>
<p class="symi-entry-owner">api::GeometryIntersectionComponent variant</p>

```rust signature
Point(Point2d)
```

Public variant placement for Point.

### Point

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_serialization_mathematicalobject_point_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_serialization_mathematicalobject_point.c6758e35526d"></a>
<p class="symi-entry-owner">api::serialization::MathematicalObject variant</p>

```rust signature
Point(Point2d)
```

Public variant placement for Point.

### Point2d

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_point2d_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_point2d.dc4785314d67"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct Point2d
```

Public type placement for Point2d.

### PointSymmetryAlgebraNotDerived

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsymmetryactiondecline_pointsymmetryalgebranotderived_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsymmetryactiondecline_pointsymmetryalgebranotderived.7deee1979b03"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSymmetryActionDecline variant</p>

```rust signature
PointSymmetryAlgebraNotDerived,
```

Public variant placement for PointSymmetryAlgebraNotDerived.

### Points

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_results_optimizationverdict_points_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_optimizationverdict_points.8a31b18bf235"></a>
<p class="symi-entry-owner">api::results::OptimizationVerdict variant</p>

```rust signature
Points,
```

Public variant placement for Points.

### Polygon

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_geometry2d_polygon_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_geometry2d_polygon.686d625c8818"></a>
<p class="symi-entry-owner">api::Geometry2d variant</p>

```rust signature
Polygon(Polygon2d)
```

Public variant placement for Polygon.

### Polygon

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_serialization_mathematicalobject_polygon_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_serialization_mathematicalobject_polygon.5b39aaa939e2"></a>
<p class="symi-entry-owner">api::serialization::MathematicalObject variant</p>

```rust signature
Polygon(Polygon2d)
```

Public variant placement for Polygon.

### Polygon2d

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_polygon2d_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_polygon2d.665969172b46"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct Polygon2d
```

Public type placement for Polygon2d.

### PolynomialGrowth

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsolutionclass_polynomialgrowth_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolutionclass_polynomialgrowth.98bacca08be0"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolutionClass variant</p>

```rust signature
PolynomialGrowth,
```

Public variant placement for PolynomialGrowth.

### PolynomialRequired

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_apierror_polynomialrequired_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_apierror_polynomialrequired.570dce97a5bf"></a>
<p class="symi-entry-owner">api::ApiError variant</p>

```rust signature
PolynomialRequired,
```

Public variant placement for PolynomialRequired.

### PolynomialSystemSolution

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_results_polynomialsystemsolution_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_polynomialsystemsolution.c77d330e368f"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct PolynomialSystemSolution
```

Public type placement for PolynomialSystemSolution.

### PolynomialSystemSolution

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_polynomialsystemsolution_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_polynomialsystemsolution.d6a63a922248"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use results::PolynomialSystemSolution;
```

Public re_export placement for PolynomialSystemSolution.

### PositiveDimensional

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_results_systemverdict_positivedimensional_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_systemverdict_positivedimensional.13e672eed7bd"></a>
<p class="symi-entry-owner">api::results::SystemVerdict variant</p>

```rust signature
PositiveDimensional,
```

Public variant placement for PositiveDimensional.

### PrimeFactor

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_results_primefactor_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_primefactor.4536e31631ca"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct PrimeFactor
```

Public type placement for PrimeFactor.

### PrimeFactor

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_primefactor_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_primefactor.cd6af6c049d7"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use results::PrimeFactor;
```

Public re_export placement for PrimeFactor.

### PrincipalJetNotFound

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationpointsymmetrydecline_principaljetnotfound_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetrydecline_principaljetnotfound.01d0b872ce94"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryDecline variant</p>

```rust signature
PrincipalJetNotFound,
```

Public variant placement for PrincipalJetNotFound.

### PrincipalPartNotAvailable

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsecondorderclassificationdecline_principalpartnotavailable_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondorderclassificationdecline_principalpartnotavailable.a064d6c91c37"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSecondOrderClassificationDecline variant</p>

```rust signature
PrincipalPartNotAvailable,
```

Public variant placement for PrincipalPartNotAvailable.

### ProfileNotIsolated

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsimilarityreductiondecline_profilenotisolated_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsimilarityreductiondecline_profilenotisolated.165433edf565"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSimilarityReductionDecline variant</p>

```rust signature
ProfileNotIsolated,
```

Public variant placement for ProfileNotIsolated.

### QuadraticContinuedFractionExpansion

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_results_quadraticcontinuedfractionexpansion_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_quadraticcontinuedfractionexpansion.e1d00cd44a76"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct QuadraticContinuedFractionExpansion
```

Public type placement for QuadraticContinuedFractionExpansion.

### QuadraticContinuedFractionExpansion

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_quadraticcontinuedfractionexpansion_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_quadraticcontinuedfractionexpansion.18d86502274a"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use results::QuadraticContinuedFractionExpansion;
```

Public re_export placement for QuadraticContinuedFractionExpansion.

### Quantifier

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_logic_quantifier_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_logic_quantifier.b446560d7208"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum Quantifier
```

Public type placement for Quantifier.

### Quasilinear

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationlinearity_quasilinear_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationlinearity_quasilinear.8934da0107f4"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationLinearity variant</p>

```rust signature
Quasilinear,
```

Public variant placement for Quasilinear.

### RationalCanonicalForm

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_results_rationalcanonicalform_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_rationalcanonicalform.a3316a6d9a09"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct RationalCanonicalForm
```

Public type placement for RationalCanonicalForm.

### RationalCanonicalForm

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_rationalcanonicalform_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_rationalcanonicalform.c79ffa4b9038"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use results::RationalCanonicalForm;
```

Public re_export placement for RationalCanonicalForm.

### RayonNative

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_parallelism_parallelbackend_rayonnative_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_parallelism_parallelbackend_rayonnative.03ea657042db"></a>
<p class="symi-entry-owner">api::parallelism::ParallelBackend variant</p>

```rust signature
RayonNative,
```

Public variant placement for RayonNative.

### RayonWasm

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_parallelism_parallelbackend_rayonwasm_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_parallelism_parallelbackend_rayonwasm.fc9711924f04"></a>
<p class="symi-entry-owner">api::parallelism::ParallelBackend variant</p>

```rust signature
RayonWasm,
```

Public variant placement for RayonWasm.

### RealLineEvolution

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationgeometricdomain_reallineevolution_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationgeometricdomain_reallineevolution.1fb7c643e757"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationGeometricDomain variant</p>

```rust signature
RealLineEvolution,
```

Public variant placement for RealLineEvolution.

### RealPrincipalCoefficientsNotProved

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsecondorderclassificationdecline_realprincipalcoefficientsnotproved_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondorderclassificationdecline_realprincipalcoefficientsnotproved.30d7404afa4f"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSecondOrderClassificationDecline variant</p>

```rust signature
RealPrincipalCoefficientsNotProved,
```

Public variant placement for RealPrincipalCoefficientsNotProved.

### ReducedEquationNotSolved

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsimilarityreductiondecline_reducedequationnotsolved_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsimilarityreductiondecline_reducedequationnotsolved.4056ef82934d"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSimilarityReductionDecline variant</p>

```rust signature
ReducedEquationNotSolved,
```

Public variant placement for ReducedEquationNotSolved.

### ReductionDependsOnTheNonInvariantCoordinate

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsimilarityreductiondecline_reductiondependsonthenoninvariantcoordinate_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsimilarityreductiondecline_reductiondependsonthenoninvariantcoordinate.84e7083d41bd"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSimilarityReductionDecline variant</p>

```rust signature
ReductionDependsOnTheNonInvariantCoordinate,
```

Public variant placement for ReductionDependsOnTheNonInvariantCoordinate.

### Rejected

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationverificationverdict_rejected_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationverificationverdict_rejected.04e721d29182"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationVerificationVerdict variant</p>

```rust signature
Rejected,
```

Public variant placement for Rejected.

### Rejected

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationverificationverdict_rejected_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationverificationverdict_rejected.33293cdfc699"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationVerificationVerdict variant</p>

```rust signature
Rejected,
```

Public variant placement for Rejected.

### RepeatedIntegration

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationmethod_repeatedintegration_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationmethod_repeatedintegration.94792505586a"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationMethod variant</p>

```rust signature
RepeatedIntegration,
```

Public variant placement for RepeatedIntegration.

### RepeatedIntegrationDeclined

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsolvedecline_repeatedintegrationdeclined_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolvedecline_repeatedintegrationdeclined.6a22d61c0ad4"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolveDecline variant</p>

```rust signature
RepeatedIntegrationDeclined,
```

Public variant placement for RepeatedIntegrationDeclined.

### ResidualZeroNotProved

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationverificationinconclusivereason_residualzeronotproved_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationverificationinconclusivereason_residualzeronotproved.da8c9250304e"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationVerificationInconclusiveReason variant</p>

```rust signature
ResidualZeroNotProved,
```

Public variant placement for ResidualZeroNotProved.

### RisingFactorial

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_options_specialfunctionbasis_risingfactorial_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_options_specialfunctionbasis_risingfactorial.91ed4bccc8a5"></a>
<p class="symi-entry-owner">api::options::SpecialFunctionBasis variant</p>

```rust signature
RisingFactorial,
```

Public variant placement for RisingFactorial.

### RootMultiplicity

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_results_rootmultiplicity_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_rootmultiplicity.2fb3dfaa39d8"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct RootMultiplicity
```

Public type placement for RootMultiplicity.

### RootMultiplicity

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_rootmultiplicity_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_rootmultiplicity.23de5815d593"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use results::RootMultiplicity;
```

Public re_export placement for RootMultiplicity.

### SaddlePoint

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_results_extremumclassification_saddlepoint_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_extremumclassification_saddlepoint.363b4873c973"></a>
<p class="symi-entry-owner">api::results::ExtremumClassification variant</p>

```rust signature
SaddlePoint,
```

Public variant placement for SaddlePoint.

### SecondOrderTypeNotDefinite

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationcanonicalizationdecline_secondordertypenotdefinite_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcanonicalizationdecline_secondordertypenotdefinite.2c642da0e5a1"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationCanonicalizationDecline variant</p>

```rust signature
SecondOrderTypeNotDefinite,
```

Public variant placement for SecondOrderTypeNotDefinite.

### Section

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_cadcellkind_section_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_cadcellkind_section.f226207df5fa"></a>
<p class="symi-entry-owner">api::CadCellKind variant</p>

```rust signature
Section,
```

Public variant placement for Section.

### Sector

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_cadcellkind_sector_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_cadcellkind_sector.a091725c055c"></a>
<p class="symi-entry-owner">api::CadCellKind variant</p>

```rust signature
Sector,
```

Public variant placement for Sector.

### Segment

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_geometry2d_segment_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_geometry2d_segment.45c15b4daa30"></a>
<p class="symi-entry-owner">api::Geometry2d variant</p>

```rust signature
Segment(Segment2d)
```

Public variant placement for Segment.

### Segment

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_geometryintersectioncomponent_segment_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_geometryintersectioncomponent_segment.1bf6c05894c9"></a>
<p class="symi-entry-owner">api::GeometryIntersectionComponent variant</p>

```rust signature
Segment(Segment2d)
```

Public variant placement for Segment.

### Segment

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_serialization_mathematicalobject_segment_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_serialization_mathematicalobject_segment.7f5845611ba1"></a>
<p class="symi-entry-owner">api::serialization::MathematicalObject variant</p>

```rust signature
Segment(Segment2d)
```

Public variant placement for Segment.

### Segment2d

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_segment2d_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_segment2d.5bdf9bd952d3"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct Segment2d
```

Public type placement for Segment2d.

### Semilinear

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationlinearity_semilinear_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationlinearity_semilinear.be11c6d5502e"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationLinearity variant</p>

```rust signature
Semilinear,
```

Public variant placement for Semilinear.

### SeparabilityEstablished

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationproofobligation_separabilityestablished_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproofobligation_separabilityestablished.1ac596d66b3b"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProofObligation variant</p>

```rust signature
SeparabilityEstablished,
```

Public variant placement for SeparabilityEstablished.

### Separation

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationmethod_separation_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationmethod_separation.a81b8a0437b7"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationMethod variant</p>

```rust signature
Separation,
```

Public variant placement for Separation.

### Sequential

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsystemmethod_sequential_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemmethod_sequential.c7dd9aa34958"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemMethod variant</p>

```rust signature
Sequential,
```

Public variant placement for Sequential.

### Sequential

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsystemroute_sequential_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemroute_sequential.57400d958a4a"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemRoute variant</p>

```rust signature
Sequential,
```

Public variant placement for Sequential.

### Sequential

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_parallelism_parallelbackend_sequential_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_parallelism_parallelbackend_sequential.1665974981f0"></a>
<p class="symi-entry-owner">api::parallelism::ParallelBackend variant</p>

```rust signature
Sequential,
```

Public variant placement for Sequential.

### SerialRouteReason

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_serialroutereason_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_serialroutereason.a7b87d561fe7"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use crate::operation::SerialRouteReason;
```

Public re_export placement for SerialRouteReason.

### SerializedParseError

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_apierror_serializedparseerror_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_apierror_serializedparseerror.3f59a4d39f54"></a>
<p class="symi-entry-owner">api::ApiError variant</p>

```rust signature
SerializedParseError(String)
```

Public variant placement for SerializedParseError.

### Session

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session.8efaa178d4c8"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct Session
```

Public type placement for Session.

### SetEnumeration

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_results_setenumeration_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_setenumeration.4aec95aed032"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct SetEnumeration
```

Public type placement for SetEnumeration.

### SetEnumeration

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_setenumeration_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_setenumeration.460f4f0bf079"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use results::SetEnumeration;
```

Public re_export placement for SetEnumeration.

### SharedMemoryUnavailable

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_parallelism_parallelismunavailablereason_sharedmemoryunavailable_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_parallelism_parallelismunavailablereason_sharedmemoryunavailable.3b938d4ca57f"></a>
<p class="symi-entry-owner">api::parallelism::ParallelismUnavailableReason variant</p>

```rust signature
SharedMemoryUnavailable,
```

Public variant placement for SharedMemoryUnavailable.

### SimilarityFamilyIsNotTheGeneralSolution

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsymmetryobligation_similarityfamilyisnotthegeneralsolution_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsymmetryobligation_similarityfamilyisnotthegeneralsolution.26bc339f7ee7"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSymmetryObligation variant</p>

```rust signature
SimilarityFamilyIsNotTheGeneralSolution,
```

Public variant placement for SimilarityFamilyIsNotTheGeneralSolution.

### SimpleTransversalNonzeroNotProved

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationcanonicalizationdecline_simpletransversalnonzeronotproved_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcanonicalizationdecline_simpletransversalnonzeronotproved.c0ca27f3fccb"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationCanonicalizationDecline variant</p>

```rust signature
SimpleTransversalNonzeroNotProved,
```

Public variant placement for SimpleTransversalNonzeroNotProved.

### SineCosine

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_options_trigonometricbasis_sinecosine_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_options_trigonometricbasis_sinecosine.b88538ee3214"></a>
<p class="symi-entry-owner">api::options::TrigonometricBasis variant</p>

```rust signature
SineCosine,
```

Public variant placement for SineCosine.

### SingleWorker

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_parallelism_parallelismunavailablereason_singleworker_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_parallelism_parallelismunavailablereason_singleworker.1e375cb18c79"></a>
<p class="symi-entry-owner">api::parallelism::ParallelismUnavailableReason variant</p>

```rust signature
SingleWorker,
```

Public variant placement for SingleWorker.

### SmithNormalFormDecomposition

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_results_smithnormalformdecomposition_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_smithnormalformdecomposition.c4e461c4733c"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct SmithNormalFormDecomposition
```

Public type placement for SmithNormalFormDecomposition.

### SmithNormalFormDecomposition

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_smithnormalformdecomposition_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_smithnormalformdecomposition.8e955dc8ed70"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use results::SmithNormalFormDecomposition;
```

Public re_export placement for SmithNormalFormDecomposition.

### SolutionNotVerified

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolvedecline_solutionnotverified_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemsolvedecline_solutionnotverified.05201369d549"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveDecline variant</p>

```rust signature
SolutionNotVerified,
```

Public variant placement for SolutionNotVerified.

### Solved

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsolveverdict_solved_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolveverdict_solved.bd289a7877a5"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveVerdict variant</p>

```rust signature
Solved,
```

Public variant placement for Solved.

### Solved

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsolveverdict_solved_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolveverdict_solved.9767ff98d0d0"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolveVerdict variant</p>

```rust signature
Solved,
```

Public variant placement for Solved.

### SpecialFunctionBasis

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_options_specialfunctionbasis_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_options_specialfunctionbasis.8a938ead48ae"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum SpecialFunctionBasis
```

Public type placement for SpecialFunctionBasis.

### SpecialFunctionBasis

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_specialfunctionbasis_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_specialfunctionbasis.f2054adf6eff"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use options::SpecialFunctionBasis;
```

Public re_export placement for SpecialFunctionBasis.

### StaleObject

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_apierror_staleobject_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_apierror_staleobject.62dd826bad01"></a>
<p class="symi-entry-owner">api::ApiError variant</p>

```rust signature
StaleObject,
```

Public variant placement for StaleObject.

### StateFormUnavailable

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolvedecline_stateformunavailable_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemsolvedecline_stateformunavailable.5dbbe8c6c6a4"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveDecline variant</p>

```rust signature
StateFormUnavailable,
```

Public variant placement for StateFormUnavailable.

### SuperpositionNotVerified

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationpointsymmetrydecline_superpositionnotverified_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetrydecline_superpositionnotverified.e8e173f71b65"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryDecline variant</p>

```rust signature
SuperpositionNotVerified,
```

Public variant placement for SuperpositionNotVerified.

### SwitchedCoefficientsNotSolved

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_switchedcoefficientsnotsolved_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_switchedcoefficientsnotsolved.baa7ba577d6c"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline variant</p>

```rust signature
SwitchedCoefficientsNotSolved,
```

Public variant placement for SwitchedCoefficientsNotSolved.

### SymbolDeclaration

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_symboldeclaration_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_symboldeclaration.ea1f2e5c2494"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct SymbolDeclaration
```

Public type placement for SymbolDeclaration.

### SymbolRequired

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_apierror_symbolrequired_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_apierror_symbolrequired.d8c1a8d2f675"></a>
<p class="symi-entry-owner">api::ApiError variant</p>

```rust signature
SymbolRequired,
```

Public variant placement for SymbolRequired.

### SystemAssignment

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_results_systemassignment_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_systemassignment.4bfee6ae1646"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct SystemAssignment
```

Public type placement for SystemAssignment.

### SystemAssignment

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_systemassignment_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_systemassignment.833d65025fb7"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use results::SystemAssignment;
```

Public re_export placement for SystemAssignment.

### SystemVerdict

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_results_systemverdict_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_systemverdict.0e830866a9ee"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum SystemVerdict
```

Public type placement for SystemVerdict.

### SystemVerdict

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_systemverdict_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_systemverdict.5e7e5014ce50"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use results::SystemVerdict;
```

Public re_export placement for SystemVerdict.

### Tangent

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_options_trigonometricbasis_tangent_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_options_trigonometricbasis_tangent.88fc9383eac6"></a>
<p class="symi-entry-owner">api::options::TrigonometricBasis variant</p>

```rust signature
Tangent,
```

Public variant placement for Tangent.

### TargetDependentFunctionInvalid

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationtransformationdecline_targetdependentfunctioninvalid_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationdecline_targetdependentfunctioninvalid.03d916d18e4f"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformationDecline variant</p>

```rust signature
TargetDependentFunctionInvalid,
```

Public variant placement for TargetDependentFunctionInvalid.

### TargetProblemInvalid

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationtransformationdecline_targetprobleminvalid_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationdecline_targetprobleminvalid.9a79f5cd19c5"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformationDecline variant</p>

```rust signature
TargetProblemInvalid,
```

Public variant placement for TargetProblemInvalid.

### TransformAxisDomainEstablished

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationproofobligation_transformaxisdomainestablished_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproofobligation_transformaxisdomainestablished.d4b680be26ee"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProofObligation variant</p>

```rust signature
TransformAxisDomainEstablished,
```

Public variant placement for TransformAxisDomainEstablished.

### TransformDidNotReachTheFrequencyDomain

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_transformdidnotreachthefrequencydomain_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_transformdidnotreachthefrequencydomain.ced1d90970d7"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline variant</p>

```rust signature
TransformDidNotReachTheFrequencyDomain,
```

Public variant placement for TransformDidNotReachTheFrequencyDomain.

### TransformExistenceAndGrowth

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationproofobligation_transformexistenceandgrowth_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproofobligation_transformexistenceandgrowth.32abb759a783"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProofObligation variant</p>

```rust signature
TransformExistenceAndGrowth,
```

Public variant placement for TransformExistenceAndGrowth.

### TransformInversionDeclined

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_transforminversiondeclined_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_transforminversiondeclined.d693985a3999"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline variant</p>

```rust signature
TransformInversionDeclined,
```

Public variant placement for TransformInversionDeclined.

### TransformReductionExact

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationproofobligation_transformreductionexact_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproofobligation_transformreductionexact.83fc09b4be22"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProofObligation variant</p>

```rust signature
TransformReductionExact,
```

Public variant placement for TransformReductionExact.

### TransformRequiresCompleteOriginData

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_transformrequirescompleteorigindata_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_transformrequirescompleteorigindata.af96e62b28f7"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline variant</p>

```rust signature
TransformRequiresCompleteOriginData,
```

Public variant placement for TransformRequiresCompleteOriginData.

### TransformRequiresScalarSignature

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_transformrequiresscalarsignature_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_transformrequiresscalarsignature.6c236342059a"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline variant</p>

```rust signature
TransformRequiresScalarSignature,
```

Public variant placement for TransformRequiresScalarSignature.

### TransformationVerificationNotDefinite

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationcanonicalizationdecline_transformationverificationnotdefinite_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcanonicalizationdecline_transformationverificationnotdefinite.6f1e54e128eb"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationCanonicalizationDecline variant</p>

```rust signature
TransformationVerificationNotDefinite,
```

Public variant placement for TransformationVerificationNotDefinite.

### TransformedCoordinatesLieInTheSeedChart

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsymmetryobligation_transformedcoordinateslieintheseedchart_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsymmetryobligation_transformedcoordinateslieintheseedchart.fbc11be0361e"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSymmetryObligation variant</p>

```rust signature
TransformedCoordinatesLieInTheSeedChart,
```

Public variant placement for TransformedCoordinatesLieInTheSeedChart.

### TransformedEquationNotSolvable

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_transformedequationnotsolvable_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_transformedequationnotsolvable.7a1b5118775b"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline variant</p>

```rust signature
TransformedEquationNotSolvable,
```

Public variant placement for TransformedEquationNotSolvable.

### TransversalityUnknown

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsolvedecline_transversalityunknown_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolvedecline_transversalityunknown.6cd097c1c5bf"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolveDecline variant</p>

```rust signature
TransversalityUnknown,
```

Public variant placement for TransversalityUnknown.

### Triangle

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_geometry2d_triangle_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_geometry2d_triangle.a3b8e68f65a9"></a>
<p class="symi-entry-owner">api::Geometry2d variant</p>

```rust signature
Triangle(Triangle2d)
```

Public variant placement for Triangle.

### Triangle

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_serialization_mathematicalobject_triangle_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_serialization_mathematicalobject_triangle.732851d9fd10"></a>
<p class="symi-entry-owner">api::serialization::MathematicalObject variant</p>

```rust signature
Triangle(Triangle2d)
```

Public variant placement for Triangle.

### Triangle2d

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_triangle2d_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_triangle2d.a9eb12c7e721"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct Triangle2d
```

Public type placement for Triangle2d.

### Trigonometric

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_options_trigonometricbasis_trigonometric_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_options_trigonometricbasis_trigonometric.bd255fbdf7b1"></a>
<p class="symi-entry-owner">api::options::TrigonometricBasis variant</p>

```rust signature
Trigonometric,
```

Public variant placement for Trigonometric.

### TrigonometricBasis

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_options_trigonometricbasis_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_options_trigonometricbasis.6de4c69b8375"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum TrigonometricBasis
```

Public type placement for TrigonometricBasis.

### TrigonometricBasis

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_trigonometricbasis_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_trigonometricbasis.0380877356d6"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use options::TrigonometricBasis;
```

Public re_export placement for TrigonometricBasis.

### Truncated

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_results_enumerationverdict_truncated_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_enumerationverdict_truncated.2f87d82b9f5e"></a>
<p class="symi-entry-owner">api::results::EnumerationVerdict variant</p>

```rust signature
Truncated,
```

Public variant placement for Truncated.

### TruthValue

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_truthvalue_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_truthvalue.7c11ba8cd4c3"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use crate::assumptions::TruthValue;
```

Public re_export placement for TruthValue.

### TwoIndependentVariablesRequired

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsimilarityreductiondecline_twoindependentvariablesrequired_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsimilarityreductiondecline_twoindependentvariablesrequired.366181444f62"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSimilarityReductionDecline variant</p>

```rust signature
TwoIndependentVariablesRequired,
```

Public variant placement for TwoIndependentVariablesRequired.

### TwoSourceAndTargetVariablesRequired

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationtransformationdecline_twosourceandtargetvariablesrequired_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationdecline_twosourceandtargetvariablesrequired.4a90eaba2c47"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformationDecline variant</p>

```rust signature
TwoSourceAndTargetVariablesRequired,
```

Public variant placement for TwoSourceAndTargetVariablesRequired.

### TypeNotProved

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsecondorderclassificationdecline_typenotproved_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondorderclassificationdecline_typenotproved.438fd76e2d69"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSecondOrderClassificationDecline variant</p>

```rust signature
TypeNotProved,
```

Public variant placement for TypeNotProved.

### UndefinedFunction

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_undefinedfunction_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_undefinedfunction.1b4ddc574e06"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct UndefinedFunction
```

Public type placement for UndefinedFunction.

### UniquenessInTheAdmissibleClass

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationproofobligation_uniquenessintheadmissibleclass_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproofobligation_uniquenessintheadmissibleclass.6b2bb859078e"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProofObligation variant</p>

```rust signature
UniquenessInTheAdmissibleClass,
```

Public variant placement for UniquenessInTheAdmissibleClass.

### Unknown

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsecondordertypeverdict_unknown_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondordertypeverdict_unknown.093461344f61"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSecondOrderTypeVerdict variant</p>

```rust signature
Unknown,
```

Public variant placement for Unknown.

### Unrestricted

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationregularity_unrestricted_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationregularity_unrestricted.5f0fff43eb04"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationRegularity variant</p>

```rust signature
Unrestricted,
```

Public variant placement for Unrestricted.

### Unrestricted

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsolutionclass_unrestricted_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolutionclass_unrestricted.536f84c13aa0"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolutionClass variant</p>

```rust signature
Unrestricted,
```

Public variant placement for Unrestricted.

### Upright

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_serialization_multilettersymbolpresentation_upright_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_serialization_multilettersymbolpresentation_upright.96fb67c14ec7"></a>
<p class="symi-entry-owner">api::serialization::MultiletterSymbolPresentation variant</p>

```rust signature
Upright,
```

Public variant placement for Upright.

### VariableCoefficientEllipticCanonicalizationNotSupported

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationcanonicalizationdecline_variablecoefficientellipticcanonicalizationnotsupported_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcanonicalizationdecline_variablecoefficientellipticcanonicalizationnotsupported.d2b7a9232e88"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationCanonicalizationDecline variant</p>

```rust signature
VariableCoefficientEllipticCanonicalizationNotSupported,
```

Public variant placement for VariableCoefficientEllipticCanonicalizationNotSupported.

### VariableLike

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_variablelike_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_variablelike.c03e54602c77"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum VariableLike<'a>
```

Public type placement for VariableLike.

### VectorCalculusError

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_vectorcalculuserror_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_vectorcalculuserror.19ebd9726717"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use crate::vector_calculus::VectorCalculusError;
```

Public re_export placement for VectorCalculusError.

### Verified

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationverificationverdict_verified_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationverificationverdict_verified.0474fd98b8fc"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationVerificationVerdict variant</p>

```rust signature
Verified,
```

Public variant placement for Verified.

### Verified

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationverificationverdict_verified_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationverificationverdict_verified.429e1e27314a"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationVerificationVerdict variant</p>

```rust signature
Verified,
```

Public variant placement for Verified.

### VertexAngle

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_results_vertexangle_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_vertexangle.bc546d8b4bc4"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct VertexAngle
```

Public type placement for VertexAngle.

### VertexAngle

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_vertexangle_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_vertexangle.987f7208d846"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use results::VertexAngle;
```

Public re_export placement for VertexAngle.

### VolterraEndpointDataIncompatible

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_volterraendpointdataincompatible_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_volterraendpointdataincompatible.a26b5d3c2986"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline variant</p>

```rust signature
VolterraEndpointDataIncompatible,
```

Public variant placement for VolterraEndpointDataIncompatible.

### VolterraEndpointDataMissing

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_volterraendpointdatamissing_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_volterraendpointdatamissing.6ba9001c7959"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline variant</p>

```rust signature
VolterraEndpointDataMissing,
```

Public variant placement for VolterraEndpointDataMissing.

### VolterraKernelNotSupported

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_volterrakernelnotsupported_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_volterrakernelnotsupported.6e94d776539e"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline variant</p>

```rust signature
VolterraKernelNotSupported,
```

Public variant placement for VolterraKernelNotSupported.

### WeightNotFound

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsimilarityreductiondecline_weightnotfound_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsimilarityreductiondecline_weightnotfound.f5c6f241d052"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSimilarityReductionDecline variant</p>

```rust signature
WeightNotFound,
```

Public variant placement for WeightNotFound.

### WholeSpace

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationgeometricdomain_wholespace_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationgeometricdomain_wholespace.fcc84fc49e98"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationGeometricDomain variant</p>

```rust signature
WholeSpace,
```

Public variant placement for WholeSpace.

### WorkLimitExceeded

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationpointsymmetrydecline_worklimitexceeded_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetrydecline_worklimitexceeded.a376cda94816"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryDecline variant</p>

```rust signature
WorkLimitExceeded,
```

Public variant placement for WorkLimitExceeded.

### ZeroDenominator

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_apierror_zerodenominator_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_apierror_zerodenominator.47a42885c911"></a>
<p class="symi-entry-owner">api::ApiError variant</p>

```rust signature
ZeroDenominator,
```

Public variant placement for ZeroDenominator.

### ZeroEquivalenceVerdict

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_zeroequivalenceverdict_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_zeroequivalenceverdict.4803e7d8b36f"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use crate::zero_equivalence::ZeroEquivalenceVerdict;
```

Public re_export placement for ZeroEquivalenceVerdict.

### absolute_value

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_expression_absolute_value_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_expression_absolute_value.1284e138a72a"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn absolute_value(&self) -> Result<Expression, ApiError>
```

Public method placement for absolute_value.

### absolute_value

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_absolute_value_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_absolute_value.751e409e7a72"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn absolute_value(
    &self,
    argument: &Expression,
) -> Result<Expression, ApiError>
```

Public method placement for absolute_value.

### active

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_parallelism_parallelismcapability_active_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_parallelism_parallelismcapability_active.de58d178fa3a"></a>
<p class="symi-entry-owner">api::parallelism::ParallelismCapability field</p>

```rust signature
pub active:
```

Public field placement for active.

### active_operations

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_active_operations_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_active_operations.0d63af96f1d5"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn active_operations(&self) -> Vec<ActiveOperation>
```

Public method placement for active_operations.

### add

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_expression_add_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_expression_add.7edac7e49135"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn add(&self, other: &Expression) -> Result<Expression, ApiError>
```

Public method placement for add.

### add

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_matrix_add_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_matrix_add.72d0792acdec"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn add(&self, other: &Matrix) -> Result<Matrix, ApiError>
```

Public method placement for add.

### add

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_add_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_add.75e803892978"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn add(
    &self,
    left: &Expression,
    right: &Expression,
) -> Result<Expression, ApiError>
```

Public method placement for add.

### admits_additive_solution_symmetry

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_admits_additive_solution_symmetry_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_admits_additive_solution_symmetry.9eb0e58e1a2d"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAction method</p>

```rust signature
pub fn admits_additive_solution_symmetry(&self) -> bool
```

Public method placement for admits_additive_solution_symmetry.

### admits_additive_solution_symmetry

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_admits_additive_solution_symmetry_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_admits_additive_solution_symmetry.101c3957df78"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAlgebra method</p>

```rust signature
pub fn admits_additive_solution_symmetry(&self) -> bool
```

Public method placement for admits_additive_solution_symmetry.

### algebra

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_algebra_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_algebra.a63c75b9f5ab"></a>
<p class="symi-entry-owner">api module</p>

```rust signature
pub mod algebra;
```

Public module placement for algebra.

### algebraic

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_algebraic_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_algebraic.690bf727c8f0"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn algebraic(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Public method placement for algebraic.

### all_assumptions

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_all_assumptions_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_all_assumptions.bbcfdc6cd0a2"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn all_assumptions(&self) -> Result<AssumptionReport, ApiError>
```

Public method placement for all_assumptions.

### amplitude

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_amplitude_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_amplitude.28659aa27e68"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAction method</p>

```rust signature
pub fn amplitude(&self) -> Option<Expression>
```

Public method placement for amplitude.

### analysis

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_analysis_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_analysis.9c0eda85971b"></a>
<p class="symi-entry-owner">api module</p>

```rust signature
pub mod analysis;
```

Public module placement for analysis.

### applied_to_seed

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_applied_to_seed_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_applied_to_seed.df24827ff4d4"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAction method</p>

```rust signature
pub fn applied_to_seed(
    &self,
    seed: &UndefinedFunction,
) -> Result<Expression, ApiError>
```

Public method placement for applied_to_seed.

### applied_to_seed_with_additive_solution

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_applied_to_seed_with_additive_solution_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_applied_to_seed_with_additive_solution.5ffd6a37b8be"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAction method</p>

```rust signature
pub fn applied_to_seed_with_additive_solution(
    &self,
    seed: &UndefinedFunction,
    additive_solution: &UndefinedFunction,
) -> Result<Expression, ApiError>
```

Public method placement for applied_to_seed_with_additive_solution.

### arbitrary_functions

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsolutionfamily_arbitrary_functions_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolutionfamily_arbitrary_functions.3d684c89382c"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolutionFamily method</p>

```rust signature
pub fn arbitrary_functions(
    &self,
) -> Result<Vec<PartialDifferentialEquationArbitraryFunction>, ApiError>
```

Public method placement for arbitrary_functions.

### arity

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationarbitraryfunction_arity_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationarbitraryfunction_arity.2f38f6179949"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationArbitraryFunction method</p>

```rust signature
pub fn arity(&self) -> Result<usize, ApiError>
```

Public method placement for arity.

### assumption_report_of

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_assumption_report_of_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_assumption_report_of.d061fc78809b"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn assumption_report_of<'a, VariableType>(
    &self,
    variable: VariableType,
) -> Result<AssumptionReport, ApiError>
where
    VariableType: Into<VariableLike<'a>>,
```

Public method placement for assumption_report_of.

### assumptions

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_assumptionscope_assumptions_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_assumptionscope_assumptions.d531fb350c1b"></a>
<p class="symi-entry-owner">api::AssumptionScope method</p>

```rust signature
pub fn assumptions(&self) -> Result<AssumptionReport, ApiError>
```

Public method placement for assumptions.

### backend

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_parallelism_parallelismcapability_backend_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_parallelism_parallelismcapability_backend.dd12831f715d"></a>
<p class="symi-entry-owner">api::parallelism::ParallelismCapability field</p>

```rust signature
pub backend:
```

Public field placement for backend.

### basis

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_basis_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_basis.000a8be0ce7b"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAlgebra method</p>

```rust signature
pub fn basis(
    &self,
) -> Vec<PartialDifferentialEquationPointSymmetryGenerator>
```

Public method placement for basis.

### boundary_condition_residuals

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationverificationreport_boundary_condition_residuals_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationverificationreport_boundary_condition_residuals.ea74210cddf7"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationVerificationReport method</p>

```rust signature
pub fn boundary_condition_residuals(
    &self,
) -> Vec<PartialDifferentialEquationVerificationResidual>
```

Public method placement for boundary_condition_residuals.

### boundary_conditions

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationproblem_boundary_conditions_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproblem_boundary_conditions.c896e2d944e5"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProblem method</p>

```rust signature
pub fn boundary_conditions(&self) -> Result<Vec<Expression>, ApiError>
```

Public method placement for boundary_conditions.

### call_builtin

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_call_builtin_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_call_builtin.26c9dde29e05"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn call_builtin<'a, IteratorType>(
    &self,
    function: BuiltinFunction,
    arguments: IteratorType,
) -> Result<Expression, ApiError>
where
    IteratorType: IntoIterator<Item = &'a Expression>,
```

Public method placement for call_builtin.

### cancel_active_operations

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_cancel_active_operations_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_cancel_active_operations.1ecf381b94a9"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn cancel_active_operations(&self) -> usize
```

Public method placement for cancel_active_operations.

### cancel_operation

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_cancel_operation_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_cancel_operation.d7f763afed32"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn cancel_operation(&self, identifier: OperationIdentifier) -> bool
```

Public method placement for cancel_operation.

### cancelled_operation_count

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_completedoperationreport_cancelled_operation_count_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_completedoperationreport_cancelled_operation_count.7f2bb63addd8"></a>
<p class="symi-entry-owner">api::CompletedOperationReport field</p>

```rust signature
pub cancelled_operation_count:
```

Public field placement for cancelled_operation_count.

### canonicalize_partial_differential_equation

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_session_canonicalize_partial_differential_equation_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_session_canonicalize_partial_differential_equation.7ff9b2f0c73d"></a>
<p class="symi-entry-owner">api::partial_differential_equations::Session method</p>

```rust signature
pub fn canonicalize_partial_differential_equation(
    &self,
    problem: &PartialDifferentialEquationProblem,
) -> Result<PartialDifferentialEquationCanonicalizationResult, ApiError>
```

Public method placement for canonicalize_partial_differential_equation.

### canonicalized

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationcanonicalizationresult_canonicalized_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcanonicalizationresult_canonicalized.fc2ed08efd0e"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationCanonicalizationResult method</p>

```rust signature
pub fn canonicalized(&self) -> bool
```

Public method placement for canonicalized.

### carlson_rc

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_carlson_rc_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_carlson_rc.0ab5545bcced"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn carlson_rc(
    &self,
    first_argument: &Expression,
    second_argument: &Expression,
) -> Result<Expression, ApiError>
```

Public method placement for carlson_rc.

### carlson_rd

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_carlson_rd_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_carlson_rd.3e957170046d"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn carlson_rd(
    &self,
    first_argument: &Expression,
    second_argument: &Expression,
    third_argument: &Expression,
) -> Result<Expression, ApiError>
```

Public method placement for carlson_rd.

### carlson_rf

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_carlson_rf_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_carlson_rf.ec8d84b6a7e9"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn carlson_rf(
    &self,
    first_argument: &Expression,
    second_argument: &Expression,
    third_argument: &Expression,
) -> Result<Expression, ApiError>
```

Public method placement for carlson_rf.

### carlson_rj

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_carlson_rj_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_carlson_rj.66145e304c30"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn carlson_rj(
    &self,
    first_argument: &Expression,
    second_argument: &Expression,
    third_argument: &Expression,
    fourth_argument: &Expression,
) -> Result<Expression, ApiError>
```

Public method placement for carlson_rj.

### cases

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsecondorderclassification_cases_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondorderclassification_cases.83ce79873a09"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSecondOrderClassification method</p>

```rust signature
pub fn cases(
    &self,
) -> Vec<PartialDifferentialEquationSecondOrderTypeCase>
```

Public method placement for cases.

### category

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_apierror_category_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_apierror_category.9e363cd72dd1"></a>
<p class="symi-entry-owner">api::ApiError method</p>

```rust signature
pub fn category(&self) -> DiagnosticCategory
```

Public method placement for category.

### change_partial_differential_equation_variables

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_session_change_partial_differential_equation_variables_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_session_change_partial_differential_equation_variables.c80d78a69247"></a>
<p class="symi-entry-owner">api::partial_differential_equations::Session method</p>

```rust signature
pub fn change_partial_differential_equation_variables<'a, IteratorType, VariableType>(
    &self,
    problem: &PartialDifferentialEquationProblem,
    target_variables: IteratorType,
    forward_coordinates: Option<&[Expression]>,
    inverse_coordinates: Option<&[Expression]>,
    target_dependent_function: Option<&UndefinedFunction>,
) -> Result<PartialDifferentialEquationTransformationResult, ApiError>
where
    IteratorType: IntoIterator<Item = VariableType>,
    VariableType: Into<VariableLike<'a>>,
```

Public method placement for change_partial_differential_equation_variables.

### claimed_governing_residual

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationtransformationverificationreport_claimed_governing_residual_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationverificationreport_claimed_governing_residual.21616982fd79"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformationVerificationReport method</p>

```rust signature
pub fn claimed_governing_residual(&self) -> Expression
```

Public method placement for claimed_governing_residual.

### classify_partial_differential_equation

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_session_classify_partial_differential_equation_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_session_classify_partial_differential_equation.bb663f186946"></a>
<p class="symi-entry-owner">api::partial_differential_equations::Session method</p>

```rust signature
pub fn classify_partial_differential_equation(
    &self,
    problem: &PartialDifferentialEquationProblem,
) -> Result<PartialDifferentialEquationClassification, ApiError>
```

Public method placement for classify_partial_differential_equation.

### classify_second_order_partial_differential_equation

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_session_classify_second_order_partial_differential_equation_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_session_classify_second_order_partial_differential_equation.2ee401be960f"></a>
<p class="symi-entry-owner">api::partial_differential_equations::Session method</p>

```rust signature
pub fn classify_second_order_partial_differential_equation(
    &self,
    problem: &PartialDifferentialEquationProblem,
) -> Result<PartialDifferentialEquationSecondOrderClassification, ApiError>
```

Public method placement for classify_second_order_partial_differential_equation.

### coefficient_data

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationclassification_coefficient_data_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationclassification_coefficient_data.01ada8b809dd"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationClassification method</p>

```rust signature
pub fn coefficient_data(
    &self,
) -> Result<PartialDifferentialEquationCoefficientData, ApiError>
```

Public method placement for coefficient_data.

### compiled

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_parallelism_parallelismcapability_compiled_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_parallelism_parallelismcapability_compiled.b02ee3c2a3d6"></a>
<p class="symi-entry-owner">api::parallelism::ParallelismCapability field</p>

```rust signature
pub compiled:
```

Public field placement for compiled.

### complex

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_complex_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_complex.102c7307d2ec"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn complex(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Public method placement for complex.

### complex_entries

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_complex_entries_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_complex_entries.38771db69ebf"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn complex_entries(
    &self,
    subject: &Matrix,
) -> Result<AssumptionProposition, ApiError>
```

Build a proposition asserting that every matrix entry is a finite complex value.

### components

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_components_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_components.a2cc038c1a89"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveResult method</p>

```rust signature
pub fn components(&self) -> Vec<Expression>
```

Public method placement for components.

### composite

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_composite_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_composite.0831fb64ec85"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn composite(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Public method placement for composite.

### composition_residuals

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationtransformationverificationreport_composition_residuals_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationverificationreport_composition_residuals.5c83a3eccf18"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformationVerificationReport method</p>

```rust signature
pub fn composition_residuals(&self) -> Vec<Expression>
```

Public method placement for composition_residuals.

### condition

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsecondordertypecase_condition_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondordertypecase_condition.9f185b8e041d"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSecondOrderTypeCase method</p>

```rust signature
pub fn condition(&self) -> AssumptionProposition
```

Public method placement for condition.

### condition

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_results_piecewisebranch_condition_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_piecewisebranch_condition.f8212f6466a1"></a>
<p class="symi-entry-owner">api::results::PiecewiseBranch method</p>

```rust signature
pub fn condition(&self) -> Expression
```

Public method placement for condition.

### consumed_work_units

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_completedoperationreport_consumed_work_units_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_completedoperationreport_consumed_work_units.963af8ec5523"></a>
<p class="symi-entry-owner">api::CompletedOperationReport field</p>

```rust signature
pub consumed_work_units:
```

Public field placement for consumed_work_units.

### convert_polynomial_basis

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_expression_convert_polynomial_basis_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_expression_convert_polynomial_basis.df0c39510b5b"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn convert_polynomial_basis<'a, VariableType>(
    &self,
    variable: VariableType,
    basis: &OrthogonalPolynomialBasis,
) -> Result<Expression, ApiError>
where
    VariableType: Into<VariableLike<'a>>,
```

Public method placement for convert_polynomial_basis.

### convert_polynomial_basis

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_convert_polynomial_basis_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_convert_polynomial_basis.0da7efd61ecb"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn convert_polynomial_basis<'a, VariableType>(
    &self,
    target: &Expression,
    variable: VariableType,
    basis: &OrthogonalPolynomialBasis,
) -> Result<Expression, ApiError>
where
    VariableType: Into<VariableLike<'a>>,
```

Public method placement for convert_polynomial_basis.

### coordinate_change

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationtransformationresult_coordinate_change_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationresult_coordinate_change.e934f246e68d"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformationResult method</p>

```rust signature
pub fn coordinate_change(
    &self,
) -> Option<PartialDifferentialEquationCoordinateChange>
```

Public method placement for coordinate_change.

### coordinate_infinitesimals

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationpointsymmetrygenerator_coordinate_infinitesimals_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetrygenerator_coordinate_infinitesimals.4ebe62466a1b"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryGenerator method</p>

```rust signature
pub fn coordinate_infinitesimals(&self) -> Vec<Expression>
```

Public method placement for coordinate_infinitesimals.

### cosine_integral

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_cosine_integral_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_cosine_integral.5387585e9ae9"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn cosine_integral(
    &self,
    argument: &Expression,
) -> Result<Expression, ApiError>
```

Public method placement for cosine_integral.

### cylindrical_algebraic_decomposition

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_cylindrical_algebraic_decomposition_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_cylindrical_algebraic_decomposition.820163b507d9"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn cylindrical_algebraic_decomposition< 'a, ExpressionIterator, VariableIterator, VariableType, ConstraintIterator, >(
    &self,
    expressions: ExpressionIterator,
    variables: VariableIterator,
    equational_constraints: ConstraintIterator,
) -> Result<CylindricalAlgebraicDecomposition, ApiError>
where
    ExpressionIterator: IntoIterator<Item = Expression>,
    VariableIterator: IntoIterator<Item = VariableType>,
    VariableType: Into<VariableLike<'a>>,
    ConstraintIterator: IntoIterator<Item = usize>,
```

Public method placement for cylindrical_algebraic_decomposition.

### declared_symbol

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_declared_symbol_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_declared_symbol.88abf51b0332"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn declared_symbol(
    &self,
    name: &str,
    declaration: SymbolDeclaration,
) -> Result<Expression, ApiError>
```

Public method placement for declared_symbol.

### decline

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_decline_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_decline.cfda67cbfcd6"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveResult method</p>

```rust signature
pub fn decline(
    &self,
) -> Option<OrdinaryDifferentialEquationSolveDecline>
```

Public method placement for decline.

### decline

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_decline_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_decline.92acc8d04a31"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveResult method</p>

```rust signature
pub fn decline(
    &self,
) -> Option<OrdinaryDifferentialEquationSystemSolveDecline>
```

Public method placement for decline.

### decline

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationcanonicalizationresult_decline_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcanonicalizationresult_decline.47332ff339cc"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationCanonicalizationResult method</p>

```rust signature
pub fn decline(
    &self,
) -> Option<PartialDifferentialEquationCanonicalizationDecline>
```

Public method placement for decline.

### decline

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_decline_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_decline.22ed89cd0701"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAction method</p>

```rust signature
pub fn decline(
    &self,
) -> Option<PartialDifferentialEquationSymmetryActionDecline>
```

Public method placement for decline.

### decline

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_decline_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_decline.38c45623a3c6"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAlgebra method</p>

```rust signature
pub fn decline(
    &self,
) -> Option<PartialDifferentialEquationPointSymmetryDecline>
```

Public method placement for decline.

### decline

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationportfoliodecline_decline_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationportfoliodecline_decline.bf34e996266a"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPortfolioDecline method</p>

```rust signature
pub fn decline(&self) -> PartialDifferentialEquationSolveDecline
```

Public method placement for decline.

### decline

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsecondorderclassification_decline_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondorderclassification_decline.a99e842de357"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSecondOrderClassification method</p>

```rust signature
pub fn decline(
    &self,
) -> Option<PartialDifferentialEquationSecondOrderClassificationDecline>
```

Public method placement for decline.

### decline

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_decline_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsimilaritysolution_decline.148faa253285"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSimilaritySolution method</p>

```rust signature
pub fn decline(
    &self,
) -> Option<PartialDifferentialEquationSimilarityReductionDecline>
```

Public method placement for decline.

### decline

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsolveresult_decline_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolveresult_decline.2727b3d10ca2"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolveResult method</p>

```rust signature
pub fn decline(&self) -> Option<PartialDifferentialEquationSolveDecline>
```

Public method placement for decline.

### decline

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationtransformationresult_decline_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationresult_decline.63f4ccaca3a0"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformationResult method</p>

```rust signature
pub fn decline(
    &self,
) -> Option<PartialDifferentialEquationTransformationDecline>
```

Public method placement for decline.

### decline_reason

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_results_definiteintegrationresult_decline_reason_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_definiteintegrationresult_decline_reason.bef6643ab9c0"></a>
<p class="symi-entry-owner">api::results::DefiniteIntegrationResult method</p>

```rust signature
pub fn decline_reason(&self) -> Option<DefiniteIntegrationDeclineReason>
```

Public method placement for decline_reason.

### defaults

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_defaults_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_defaults.e20fc1a31890"></a>
<p class="symi-entry-owner">api module</p>

```rust signature
pub mod defaults;
```

Public module placement for defaults.

### defined

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_defined_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_defined.036eb495a286"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn defined(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Public method placement for defined.

### dependent_function

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationproblem_dependent_function_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproblem_dependent_function.dd22cc072e76"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProblem method</p>

```rust signature
pub fn dependent_function(&self) -> Result<String, ApiError>
```

Public method placement for dependent_function.

### dependent_infinitesimal

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationpointsymmetrygenerator_dependent_infinitesimal_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetrygenerator_dependent_infinitesimal.d66c7b59ea79"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryGenerator method</p>

```rust signature
pub fn dependent_infinitesimal(&self) -> Expression
```

Public method placement for dependent_infinitesimal.

### derivative_coefficients

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationprincipalpart_derivative_coefficients_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationprincipalpart_derivative_coefficients.c07d9607eba7"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPrincipalPart method</p>

```rust signature
pub fn derivative_coefficients(
    &self,
) -> Vec<PartialDifferentialEquationPrincipalCoefficient>
```

Public method placement for derivative_coefficients.

### derivative_orders

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationjet_derivative_orders_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationjet_derivative_orders.d092739146d5"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationJet method</p>

```rust signature
pub fn derivative_orders(&self) -> Vec<usize>
```

Public method placement for derivative_orders.

### determining_equations

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_determining_equations_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_determining_equations.026d397719c6"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAlgebra method</p>

```rust signature
pub fn determining_equations(&self) -> Vec<Expression>
```

Public method placement for determining_equations.

### diagnostic

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_apierror_diagnostic_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_apierror_diagnostic.63764bb0d720"></a>
<p class="symi-entry-owner">api::ApiError method</p>

```rust signature
pub fn diagnostic(&self, operation: &str) -> Diagnostic
```

Public method placement for diagnostic.

### diagnostic

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_parallelism_bulkexpressionoutcome_diagnostic_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_parallelism_bulkexpressionoutcome_diagnostic.c7ed3ce5f5a1"></a>
<p class="symi-entry-owner">api::parallelism::BulkExpressionOutcome method</p>

```rust signature
pub fn diagnostic(&self) -> Option<Diagnostic>
```

Public method placement for diagnostic.

### diagnostic

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_parallelism_bulktextoutcome_diagnostic_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_parallelism_bulktextoutcome_diagnostic.3944a0539397"></a>
<p class="symi-entry-owner">api::parallelism::BulkTextOutcome method</p>

```rust signature
pub fn diagnostic(&self) -> Option<Diagnostic>
```

Public method placement for diagnostic.

### diagonal_matrix

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_diagonal_matrix_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_diagonal_matrix.b17dbb2a54b5"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn diagonal_matrix(
    &self,
    subject: &Matrix,
) -> Result<AssumptionProposition, ApiError>
```

Build a proposition asserting that a matrix is diagonal.

### differentiate_bulk

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_differentiate_bulk_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_differentiate_bulk.ef98b9c3d3cb"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn differentiate_bulk(
    &self,
    targets: &[Expression],
    variable: &Expression,
) -> Result<Vec<BulkExpressionOutcome>, ApiError>
```

Public method placement for differentiate_bulk.

### dirac_delta

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_dirac_delta_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_dirac_delta.f63c613f326e"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn dirac_delta(
    &self,
    argument: &Expression,
) -> Result<Expression, ApiError>
```

Public method placement for dirac_delta.

### discharged_obligations

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsolutionprovenance_discharged_obligations_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolutionprovenance_discharged_obligations.4ada93ecd005"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolutionProvenance method</p>

```rust signature
pub fn discharged_obligations(
    &self,
) -> Vec<PartialDifferentialEquationProofObligation>
```

Public method placement for discharged_obligations.

### discover_partial_differential_equation

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_session_discover_partial_differential_equation_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_session_discover_partial_differential_equation.7d2fc1d996f7"></a>
<p class="symi-entry-owner">api::partial_differential_equations::Session method</p>

```rust signature
pub fn discover_partial_differential_equation(
    &self,
    equation: &Expression,
    initial_conditions: &[Expression],
    boundary_conditions: &[Expression],
) -> Result<PartialDifferentialEquationProblem, ApiError>
```

Public method placement for discover_partial_differential_equation.

### discriminant

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsecondorderclassification_discriminant_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondorderclassification_discriminant.4b84cbe471b5"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSecondOrderClassification method</p>

```rust signature
pub fn discriminant(&self) -> Expression
```

Public method placement for discriminant.

### divergence_direction

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_results_definiteintegrationresult_divergence_direction_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_definiteintegrationresult_divergence_direction.fa421fdafba6"></a>
<p class="symi-entry-owner">api::results::DefiniteIntegrationResult method</p>

```rust signature
pub fn divergence_direction(
    &self,
) -> Option<DefiniteIntegrationDivergenceDirection>
```

Public method placement for divergence_direction.

### elements

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_results_setenumeration_elements_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_setenumeration_elements.48ab406926b0"></a>
<p class="symi-entry-owner">api::results::SetEnumeration method</p>

```rust signature
pub fn elements(&self) -> Vec<Expression>
```

Public method placement for elements.

### elliptic_e_incomplete

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_elliptic_e_incomplete_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_elliptic_e_incomplete.2a983dd513db"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn elliptic_e_incomplete(
    &self,
    amplitude: &Expression,
    parameter: &Expression,
) -> Result<Expression, ApiError>
```

Public method placement for elliptic_e_incomplete.

### elliptic_f

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_elliptic_f_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_elliptic_f.ae653ac6c168"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn elliptic_f(
    &self,
    amplitude: &Expression,
    parameter: &Expression,
) -> Result<Expression, ApiError>
```

Public method placement for elliptic_f.

### elliptic_pi

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_elliptic_pi_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_elliptic_pi.830995e55ef4"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn elliptic_pi(
    &self,
    characteristic: &Expression,
    parameter: &Expression,
) -> Result<Expression, ApiError>
```

Public method placement for elliptic_pi.

### elliptic_pi_incomplete

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_elliptic_pi_incomplete_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_elliptic_pi_incomplete.20b3dafd3415"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn elliptic_pi_incomplete(
    &self,
    characteristic: &Expression,
    amplitude: &Expression,
    parameter: &Expression,
) -> Result<Expression, ApiError>
```

Public method placement for elliptic_pi_incomplete.

### equation_type

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsecondorderclassification_equation_type_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondorderclassification_equation_type.40c5dd64831d"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSecondOrderClassification method</p>

```rust signature
pub fn equation_type(
    &self,
) -> Option<PartialDifferentialEquationSecondOrderType>
```

Public method placement for equation_type.

### equation_type

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsecondordertypecase_equation_type_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondordertypecase_equation_type.c6e8d176a386"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSecondOrderTypeCase method</p>

```rust signature
pub fn equation_type(
    &self,
) -> PartialDifferentialEquationSecondOrderType
```

Public method placement for equation_type.

### error_function

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_error_function_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_error_function.2fa2f7f54f81"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn error_function(
    &self,
    argument: &Expression,
) -> Result<Expression, ApiError>
```

Public method placement for error_function.

### error_function_complementary

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_error_function_complementary_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_error_function_complementary.53631097dfd6"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn error_function_complementary(
    &self,
    argument: &Expression,
) -> Result<Expression, ApiError>
```

Public method placement for error_function_complementary.

### estimated_absolute_error

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_results_numericdefiniteintegrationresult_estimated_absolute_error_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_numericdefiniteintegrationresult_estimated_absolute_error.f336db645ee3"></a>
<p class="symi-entry-owner">api::results::NumericDefiniteIntegrationResult method</p>

```rust signature
pub fn estimated_absolute_error(&self) -> Option<f64>
```

Public method placement for estimated_absolute_error.

### evaluate_numeric_bulk

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_evaluate_numeric_bulk_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_evaluate_numeric_bulk.cfa8fbe9328e"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn evaluate_numeric_bulk(
    &self,
    targets: &[Expression],
) -> Result<Vec<BulkExpressionOutcome>, ApiError>
```

Public method placement for evaluate_numeric_bulk.

### even

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_even_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_even.9a4b6941f438"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn even(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Public method placement for even.

### expand_bulk

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_expand_bulk_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_expand_bulk.0632968f6fe5"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn expand_bulk(
    &self,
    targets: &[Expression],
) -> Result<Vec<BulkExpressionOutcome>, ApiError>
```

Public method placement for expand_bulk.

### expand_orthogonal_polynomial

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_expression_expand_orthogonal_polynomial_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_expression_expand_orthogonal_polynomial.7cfe147549d1"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn expand_orthogonal_polynomial(
    &self,
) -> Result<Expression, ApiError>
```

Public method placement for expand_orthogonal_polynomial.

### expand_orthogonal_polynomial

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_expand_orthogonal_polynomial_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_expand_orthogonal_polynomial.ebee9df86fc5"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn expand_orthogonal_polynomial(
    &self,
    target: &Expression,
) -> Result<Expression, ApiError>
```

Public method placement for expand_orthogonal_polynomial.

### explicit_branch

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationverificationreport_explicit_branch_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationverificationreport_explicit_branch.082001e89735"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationVerificationReport method</p>

```rust signature
pub fn explicit_branch(&self) -> Option<Expression>
```

Public method placement for explicit_branch.

### explicit_partial_differential_equation_solution

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_session_explicit_partial_differential_equation_solution_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_session_explicit_partial_differential_equation_solution.50aef34ccbd8"></a>
<p class="symi-entry-owner">api::partial_differential_equations::Session method</p>

```rust signature
pub fn explicit_partial_differential_equation_solution(
    &self,
    solution: &Expression,
) -> Result<PartialDifferentialEquationSolutionFamily, ApiError>
```

Public method placement for explicit_partial_differential_equation_solution.

### explicit_partial_differential_equation_solution_with_metadata

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_session_explicit_partial_differential_equation_solution_with_metadata_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_session_explicit_partial_differential_equation_solution_with_metadata.8ca27ce8ccd4"></a>
<p class="symi-entry-owner">api::partial_differential_equations::Session method</p>

```rust signature
pub fn explicit_partial_differential_equation_solution_with_metadata(
    &self,
    solution: &Expression,
    arbitrary_functions: &[PartialDifferentialEquationArbitraryFunction],
    proof_obligations: &[PartialDifferentialEquationProofObligation],
) -> Result<PartialDifferentialEquationSolutionFamily, ApiError>
```

Public method placement for explicit_partial_differential_equation_solution_with_metadata.

### exponential_integral

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_exponential_integral_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_exponential_integral.7259b91e9e27"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn exponential_integral(
    &self,
    argument: &Expression,
) -> Result<Expression, ApiError>
```

Public method placement for exponential_integral.

### expression_operations

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_expression_operations_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_expression_operations.ff692b0d6e6d"></a>
<p class="symi-entry-owner">api module</p>

```rust signature
pub mod expression_operations;
```

Public module placement for expression_operations.

### extend

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_extend_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_extend.8b7caca75ef6"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn extend<ReturnType>(
    &self,
    computation: impl FnOnce(LentContext<'_>) -> ReturnType,
) -> Result<ReturnType, ApiError>
```

Public method placement for extend.

### extended_real

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_extended_real_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_extended_real.1e55ef22238a"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn extended_real(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Public method placement for extended_real.

### factor_over_gaussian_integers

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_factor_over_gaussian_integers_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_factor_over_gaussian_integers.6a70e6be19ef"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn factor_over_gaussian_integers(
    &self,
    target: &Expression,
) -> Result<Expression, ApiError>
```

Public method placement for factor_over_gaussian_integers.

### family

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_options_orthogonalpolynomialbasis_family_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_options_orthogonalpolynomialbasis_family.5c6b79da197b"></a>
<p class="symi-entry-owner">api::options::OrthogonalPolynomialBasis field</p>

```rust signature
pub family:
```

Public field placement for family.

### fast_recognisers_enabled

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_fast_recognisers_enabled_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_fast_recognisers_enabled.e4bb9f9f1fcd"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn fast_recognisers_enabled(&self) -> bool
```

Public method placement for fast_recognisers_enabled.

### finite

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_finite_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_finite.eba9c4f1eba0"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn finite(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Public method placement for finite.

### finite

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_symboldeclaration_finite_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_symboldeclaration_finite.ba52d108961e"></a>
<p class="symi-entry-owner">api::SymbolDeclaration field</p>

```rust signature
pub finite:
```

Public field placement for finite.

### first_equation

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationseparationresult_first_equation_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationseparationresult_first_equation.a257b40a4b5e"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSeparationResult method</p>

```rust signature
pub fn first_equation(
    &self,
) -> PartialDifferentialEquationSeparatedEquation
```

Public method placement for first_equation.

### form

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_form_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_form.ff1a220bcc6d"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveResult method</p>

```rust signature
pub fn form(&self) -> Option<OrdinaryDifferentialEquationSolutionForm>
```

Public method placement for form.

### form

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsolutionfamily_form_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolutionfamily_form.83070b1c98b6"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolutionFamily method</p>

```rust signature
pub fn form(
    &self,
) -> Result<PartialDifferentialEquationSolutionForm, ApiError>
```

Public method placement for form.

### forward_coordinates

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationcoordinatechange_forward_coordinates_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcoordinatechange_forward_coordinates.054485ec37ca"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationCoordinateChange method</p>

```rust signature
pub fn forward_coordinates(&self) -> Result<Vec<Expression>, ApiError>
```

Public method placement for forward_coordinates.

### frequency_domain_equation

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_frequency_domain_equation_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_frequency_domain_equation.e9b8d505136f"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveResult method</p>

```rust signature
pub fn frequency_domain_equation(&self) -> Option<Expression>
```

Public method placement for frequency_domain_equation.

### from_name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_logic_quantifier_from_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_logic_quantifier_from_name.bd74c063277e"></a>
<p class="symi-entry-owner">api::logic::Quantifier method</p>

```rust signature
pub fn from_name(name: &str) -> Result<Self, ApiError>
```

Public method placement for from_name.

### from_name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_options_monomialordering_from_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_options_monomialordering_from_name.2ef0b3c4fa69"></a>
<p class="symi-entry-owner">api::options::MonomialOrdering method</p>

```rust signature
pub fn from_name(name: &str) -> Result<Self, ApiError>
```

Public method placement for from_name.

### from_name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_options_orthogonalpolynomialfamily_from_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_options_orthogonalpolynomialfamily_from_name.c56e40287b82"></a>
<p class="symi-entry-owner">api::options::OrthogonalPolynomialFamily method</p>

```rust signature
pub fn from_name(name: &str) -> Result<Self, ApiError>
```

Public method placement for from_name.

### from_name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_options_specialfunctionbasis_from_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_options_specialfunctionbasis_from_name.d93c2e65f252"></a>
<p class="symi-entry-owner">api::options::SpecialFunctionBasis method</p>

```rust signature
pub fn from_name(name: &str) -> Result<Self, ApiError>
```

Public method placement for from_name.

### from_name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_options_trigonometricbasis_from_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_options_trigonometricbasis_from_name.d0168bcf1b69"></a>
<p class="symi-entry-owner">api::options::TrigonometricBasis method</p>

```rust signature
pub fn from_name(name: &str) -> Result<Self, ApiError>
```

Public method placement for from_name.

### from_name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_differentialequationsolutionscope_from_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_differentialequationsolutionscope_from_name.52ad6eb58468"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::DifferentialEquationSolutionScope method</p>

```rust signature
pub fn from_name(name: &str) -> Result<Self, ApiError>
```

Public method placement for from_name.

### from_name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationmethod_from_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationmethod_from_name.bbf0326541ef"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationMethod method</p>

```rust signature
pub fn from_name(name: &str) -> Result<Self, ApiError>
```

Public method placement for from_name.

### from_name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationregularity_from_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationregularity_from_name.6d59418b38d5"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationRegularity method</p>

```rust signature
pub fn from_name(name: &str) -> Result<Self, ApiError>
```

Public method placement for from_name.

### from_name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsystemmethod_from_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemmethod_from_name.9dd28a30c61e"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemMethod method</p>

```rust signature
pub fn from_name(name: &str) -> Result<Self, ApiError>
```

Public method placement for from_name.

### from_name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationcanonicalprincipalform_from_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcanonicalprincipalform_from_name.122c8c298946"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationCanonicalPrincipalForm method</p>

```rust signature
pub fn from_name(name: &str) -> Result<Self, ApiError>
```

Public method placement for from_name.

### from_name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationgeometricdomain_from_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationgeometricdomain_from_name.7678ef494d56"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationGeometricDomain method</p>

```rust signature
pub fn from_name(name: &str) -> Result<Self, ApiError>
```

Public method placement for from_name.

### from_name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationmethod_from_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationmethod_from_name.0bc86f8d6d9d"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationMethod method</p>

```rust signature
pub fn from_name(name: &str) -> Result<Self, ApiError>
```

Public method placement for from_name.

### from_name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationproofobligation_from_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproofobligation_from_name.80981cf791e7"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProofObligation method</p>

```rust signature
pub fn from_name(name: &str) -> Result<Self, ApiError>
```

Public method placement for from_name.

### from_name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationregularity_from_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationregularity_from_name.5937b1d71eef"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationRegularity method</p>

```rust signature
pub fn from_name(name: &str) -> Result<Self, ApiError>
```

Public method placement for from_name.

### from_name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsecondordertype_from_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondordertype_from_name.aa38e3f7e727"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSecondOrderType method</p>

```rust signature
pub fn from_name(name: &str) -> Result<Self, ApiError>
```

Public method placement for from_name.

### from_name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsolutionclass_from_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolutionclass_from_name.0d66ece9ca79"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolutionClass method</p>

```rust signature
pub fn from_name(name: &str) -> Result<Self, ApiError>
```

Public method placement for from_name.

### from_name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationtransformaxiskind_from_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformaxiskind_from_name.465cc3ce7199"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformAxisKind method</p>

```rust signature
pub fn from_name(name: &str) -> Result<Self, ApiError>
```

Public method placement for from_name.

### from_name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_solving_optimizationdirection_from_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_solving_optimizationdirection_from_name.e0dce74498f2"></a>
<p class="symi-entry-owner">api::solving::OptimizationDirection method</p>

```rust signature
pub fn from_name(name: &str) -> Result<Self, ApiError>
```

Public method placement for from_name.

### from_style_names

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_serialization_latexpresentationoptions_from_style_names_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_serialization_latexpresentationoptions_from_style_names.060ff70117a1"></a>
<p class="symi-entry-owner">api::serialization::LatexPresentationOptions method</p>

```rust signature
pub fn from_style_names(
    exponential_style: &str,
    natural_logarithm_style: &str,
    multiletter_symbol_style: &str,
) -> Self
```

Public method placement for from_style_names.

### full_coefficients

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationcoefficientdata_full_coefficients_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcoefficientdata_full_coefficients.0886ab7ea2f5"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationCoefficientData method</p>

```rust signature
pub fn full_coefficients(
    &self,
) -> Option<Vec<PartialDifferentialEquationJetCoefficient>>
```

Public method placement for full_coefficients.

### full_rank_matrix

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_full_rank_matrix_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_full_rank_matrix.36a4a5ca8c68"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn full_rank_matrix(
    &self,
    subject: &Matrix,
) -> Result<AssumptionProposition, ApiError>
```

Build a proposition asserting that a matrix has full rank.

### general_generator

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_general_generator_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_general_generator.54f0738da4e1"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAlgebra method</p>

```rust signature
pub fn general_generator(
    &self,
) -> Option<PartialDifferentialEquationPointSymmetryGenerator>
```

Public method placement for general_generator.

### generality

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_generality_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_generality.80070a59f54e"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveResult method</p>

```rust signature
pub fn generality(
    &self,
) -> Option<OrdinaryDifferentialEquationGeneralityVerdict>
```

Public method placement for generality.

### generality

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_generality_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_generality.f69fe7509812"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveResult method</p>

```rust signature
pub fn generality(
    &self,
) -> Option<OrdinaryDifferentialEquationGeneralityVerdict>
```

Public method placement for generality.

### generality

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsystemverificationreport_generality_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemverificationreport_generality.935dc6a6df27"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemVerificationReport method</p>

```rust signature
pub fn generality(
    &self,
) -> OrdinaryDifferentialEquationGeneralityVerdict
```

Public method placement for generality.

### generated_constants

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_generated_constants_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_generated_constants.afb0e278f65d"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveResult method</p>

```rust signature
pub fn generated_constants(&self) -> Vec<Expression>
```

Public method placement for generated_constants.

### generated_constants

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_generated_constants_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_generated_constants.2039662fe54b"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveResult method</p>

```rust signature
pub fn generated_constants(&self) -> Vec<Expression>
```

Public method placement for generated_constants.

### generation

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_assumptionproposition_generation_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_assumptionproposition_generation.192022c49a50"></a>
<p class="symi-entry-owner">api::AssumptionProposition method</p>

```rust signature
pub fn generation(&self) -> u64
```

Public method placement for generation.

### generation

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_assumptionscope_generation_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_assumptionscope_generation.66c24c812dbe"></a>
<p class="symi-entry-owner">api::AssumptionScope method</p>

```rust signature
pub fn generation(&self) -> u64
```

Public method placement for generation.

### generation

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_circle2d_generation_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_circle2d_generation.c1d88396292e"></a>
<p class="symi-entry-owner">api::Circle2d method</p>

```rust signature
pub fn generation(&self) -> u64
```

Public method placement for generation.

### generation

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_cylindricalalgebraicdecomposition_generation_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_cylindricalalgebraicdecomposition_generation.7077173700ad"></a>
<p class="symi-entry-owner">api::CylindricalAlgebraicDecomposition method</p>

```rust signature
pub fn generation(&self) -> u64
```

Public method placement for generation.

### generation

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_expression_generation_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_expression_generation.3d1194bbcbec"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn generation(&self) -> u64
```

Public method placement for generation.

### generation

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_matrix_generation_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_matrix_generation.363da9dc804f"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn generation(&self) -> u64
```

Public method placement for generation.

### generation

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_point2d_generation_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_point2d_generation.16653c0cb131"></a>
<p class="symi-entry-owner">api::Point2d method</p>

```rust signature
pub fn generation(&self) -> u64
```

Public method placement for generation.

### generation

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_polygon2d_generation_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_polygon2d_generation.0e0f163c0ce0"></a>
<p class="symi-entry-owner">api::Polygon2d method</p>

```rust signature
pub fn generation(&self) -> u64
```

Public method placement for generation.

### generation

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_segment2d_generation_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_segment2d_generation.e8e8cb3c88cf"></a>
<p class="symi-entry-owner">api::Segment2d method</p>

```rust signature
pub fn generation(&self) -> u64
```

Public method placement for generation.

### generation

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_generation_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_generation.767349df4278"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn generation(&self) -> u64
```

Public method placement for generation.

### generation

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_triangle2d_generation_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_triangle2d_generation.aee85efd23e0"></a>
<p class="symi-entry-owner">api::Triangle2d method</p>

```rust signature
pub fn generation(&self) -> u64
```

Public method placement for generation.

### generation

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_undefinedfunction_generation_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_undefinedfunction_generation.45b7d62fbba7"></a>
<p class="symi-entry-owner">api::UndefinedFunction method</p>

```rust signature
pub fn generation(&self) -> u64
```

Public method placement for generation.

### generation

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationcoordinatechange_generation_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcoordinatechange_generation.672393aad2ad"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationCoordinateChange method</p>

```rust signature
pub fn generation(&self) -> u64
```

Public method placement for generation.

### generation

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationproblem_generation_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproblem_generation.402d11797774"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProblem method</p>

```rust signature
pub fn generation(&self) -> u64
```

Public method placement for generation.

### geometry_operations

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_geometry_operations_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_geometry_operations.a27159fde83b"></a>
<p class="symi-entry-owner">api module</p>

```rust signature
pub mod geometry_operations;
```

Public module placement for geometry_operations.

### governing_residual

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationverificationreport_governing_residual_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationverificationreport_governing_residual.db8606c912c7"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationVerificationReport method</p>

```rust signature
pub fn governing_residual(
    &self,
) -> PartialDifferentialEquationVerificationResidual
```

Public method placement for governing_residual.

### has_complex_entries

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_matrix_has_complex_entries_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_matrix_has_complex_entries.c19bfdf575e0"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn has_complex_entries(&self) -> Result<TruthValue, ApiError>
```

Public method placement for has_complex_entries.

### has_integer_entries

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_matrix_has_integer_entries_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_matrix_has_integer_entries.74cda62cb797"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn has_integer_entries(&self) -> Result<TruthValue, ApiError>
```

Public method placement for has_integer_entries.

### has_real_entries

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_matrix_has_real_entries_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_matrix_has_real_entries.29309a51fd42"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn has_real_entries(&self) -> Result<TruthValue, ApiError>
```

Public method placement for has_real_entries.

### heaviside_step

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_heaviside_step_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_heaviside_step.067936c12edd"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn heaviside_step(
    &self,
    argument: &Expression,
) -> Result<Expression, ApiError>
```

Public method placement for heaviside_step.

### hermitian_matrix

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_hermitian_matrix_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_hermitian_matrix.1161de5e9340"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn hermitian_matrix(
    &self,
    subject: &Matrix,
) -> Result<AssumptionProposition, ApiError>
```

Build a proposition asserting that a matrix equals its conjugate transpose.

### highest_order_coefficients

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationcoefficientdata_highest_order_coefficients_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcoefficientdata_highest_order_coefficients.f806b02ff82e"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationCoefficientData method</p>

```rust signature
pub fn highest_order_coefficients(
    &self,
) -> Option<Vec<PartialDifferentialEquationJetCoefficient>>
```

Public method placement for highest_order_coefficients.

### homogeneous

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationcoefficientdata_homogeneous_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcoefficientdata_homogeneous.07fbeaa5d200"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationCoefficientData method</p>

```rust signature
pub fn homogeneous(&self) -> Option<bool>
```

Public method placement for homogeneous.

### host_cancellation

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_host_cancellation_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_host_cancellation.3b3c4bbf0b8e"></a>
<p class="symi-entry-owner">api module</p>

```rust signature
pub mod host_cancellation;
```

Public module placement for host_cancellation.

### host_cancellation_control_address

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_host_cancellation_host_cancellation_control_address_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_host_cancellation_host_cancellation_control_address.bd34c3da6a95"></a>
<p class="symi-entry-owner">api::host_cancellation re_export</p>

```rust signature
pub use crate::operation::host_cancellation_control_address;
```

Public re_export placement for host_cancellation_control_address.

### host_cancellation_control_byte_length

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_host_cancellation_host_cancellation_control_byte_length_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_host_cancellation_host_cancellation_control_byte_length.1cabe0273b70"></a>
<p class="symi-entry-owner">api::host_cancellation re_export</p>

```rust signature
pub use crate::operation::host_cancellation_control_byte_length;
```

Public re_export placement for host_cancellation_control_byte_length.

### host_cancellation_requested

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_host_cancellation_host_cancellation_requested_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_host_cancellation_host_cancellation_requested.a94cac722ec6"></a>
<p class="symi-entry-owner">api::host_cancellation re_export</p>

```rust signature
pub use crate::operation::host_cancellation_requested;
```

Public re_export placement for host_cancellation_requested.

### host_cancellation_slot_ticket

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_host_cancellation_host_cancellation_slot_ticket_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_host_cancellation_host_cancellation_slot_ticket.63a220b5af16"></a>
<p class="symi-entry-owner">api::host_cancellation re_export</p>

```rust signature
pub use crate::operation::host_cancellation_slot_ticket;
```

Public re_export placement for host_cancellation_slot_ticket.

### identity

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_identity_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_identity.c52e436bef95"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn identity(&self) -> u64
```

Public method placement for identity.

### identity_matrix

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_identity_matrix_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_identity_matrix.933d2213969f"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn identity_matrix(
    &self,
    subject: &Matrix,
) -> Result<AssumptionProposition, ApiError>
```

Build a proposition asserting that a matrix is an identity matrix.

### image

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_image_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_image.e206a0f982f7"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveResult method</p>

```rust signature
pub fn image(&self) -> Option<Expression>
```

Public method placement for image.

### implicit_partial_differential_equation_solution

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_session_implicit_partial_differential_equation_solution_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_session_implicit_partial_differential_equation_solution.3c11fdbed7a5"></a>
<p class="symi-entry-owner">api::partial_differential_equations::Session method</p>

```rust signature
pub fn implicit_partial_differential_equation_solution(
    &self,
    residual: &Expression,
) -> Result<PartialDifferentialEquationSolutionFamily, ApiError>
```

Public method placement for implicit_partial_differential_equation_solution.

### implicit_partial_differential_equation_solution_with_metadata

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_session_implicit_partial_differential_equation_solution_with_metadata_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_session_implicit_partial_differential_equation_solution_with_metadata.5cb0eea1bd7b"></a>
<p class="symi-entry-owner">api::partial_differential_equations::Session method</p>

```rust signature
pub fn implicit_partial_differential_equation_solution_with_metadata(
    &self,
    residual: &Expression,
    arbitrary_functions: &[PartialDifferentialEquationArbitraryFunction],
    proof_obligations: &[PartialDifferentialEquationProofObligation],
) -> Result<PartialDifferentialEquationSolutionFamily, ApiError>
```

Public method placement for implicit_partial_differential_equation_solution_with_metadata.

### inconclusive_reason

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationverificationreport_inconclusive_reason_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationverificationreport_inconclusive_reason.eac51cb91309"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationVerificationReport method</p>

```rust signature
pub fn inconclusive_reason(
    &self,
) -> Option<PartialDifferentialEquationVerificationInconclusiveReason>
```

Public method placement for inconclusive_reason.

### independent_variable_name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationseparatedequation_independent_variable_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationseparatedequation_independent_variable_name.e85889e14cc6"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSeparatedEquation method</p>

```rust signature
pub fn independent_variable_name(&self) -> String
```

Public method placement for independent_variable_name.

### independent_variables

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationproblem_independent_variables_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproblem_independent_variables.7c2c23c9dcb4"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProblem method</p>

```rust signature
pub fn independent_variables(&self) -> Result<Vec<String>, ApiError>
```

Public method placement for independent_variables.

### index

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_parallelism_bulkexpressionoutcome_index_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_parallelism_bulkexpressionoutcome_index.b17b37fb3bea"></a>
<p class="symi-entry-owner">api::parallelism::BulkExpressionOutcome method</p>

```rust signature
pub fn index(&self) -> usize
```

Public method placement for index.

### index

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_parallelism_bulktextoutcome_index_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_parallelism_bulktextoutcome_index.5d89e00f654b"></a>
<p class="symi-entry-owner">api::parallelism::BulkTextOutcome method</p>

```rust signature
pub fn index(&self) -> usize
```

Public method placement for index.

### infinite

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_infinite_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_infinite.edea6c51e960"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn infinite(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Public method placement for infinite.

### initial_condition_residuals

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationverificationreport_initial_condition_residuals_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationverificationreport_initial_condition_residuals.51847cee7df3"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationVerificationReport method</p>

```rust signature
pub fn initial_condition_residuals(
    &self,
) -> Vec<PartialDifferentialEquationVerificationResidual>
```

Public method placement for initial_condition_residuals.

### initial_conditions

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationproblem_initial_conditions_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproblem_initial_conditions.c94edb0a7a80"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProblem method</p>

```rust signature
pub fn initial_conditions(&self) -> Result<Vec<Expression>, ApiError>
```

Public method placement for initial_conditions.

### initialize_parallelism

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_initialize_parallelism_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_initialize_parallelism.336580da287a"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn initialize_parallelism(
    &self,
    worker_count: usize,
) -> Result<ParallelismInitialization, ApiError>
```

Public method placement for initialize_parallelism.

### initialized

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_parallelism_parallelismcapability_initialized_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_parallelism_parallelismcapability_initialized.0738550bec7a"></a>
<p class="symi-entry-owner">api::parallelism::ParallelismCapability field</p>

```rust signature
pub initialized:
```

Public field placement for initialized.

### input

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_input_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_input.8a9e72fb40a6"></a>
<p class="symi-entry-owner">api module</p>

```rust signature
pub mod input;
```

Public module placement for input.

### integer_entries

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_integer_entries_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_integer_entries.597830ca262e"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn integer_entries(
    &self,
    subject: &Matrix,
) -> Result<AssumptionProposition, ApiError>
```

Build a proposition asserting that every matrix entry is an integer.

### integer_from_decimal

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_integer_from_decimal_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_integer_from_decimal.2d2b8493a55f"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn integer_from_decimal(
    &self,
    text: &str,
) -> Result<Expression, ApiError>
```

Public method placement for integer_from_decimal.

### integrate_definite_under_constraint

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_expression_integrate_definite_under_constraint_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_expression_integrate_definite_under_constraint.546138d50f65"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn integrate_definite_under_constraint<'a, VariableType>(
    &self,
    variable: VariableType,
    lower_bound: &Expression,
    upper_bound: &Expression,
    constraint: &Expression,
) -> Result<Expression, ApiError>
where
    VariableType: Into<VariableLike<'a>>,
```

Public method placement for integrate_definite_under_constraint.

### integrate_definite_under_constraint

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_integrate_definite_under_constraint_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_integrate_definite_under_constraint.2836b26c39be"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn integrate_definite_under_constraint<'a, VariableType>(
    &self,
    target: &Expression,
    variable: VariableType,
    lower_bound: &Expression,
    upper_bound: &Expression,
    constraint: &Expression,
) -> Result<Expression, ApiError>
where
    VariableType: Into<VariableLike<'a>>,
```

Public method placement for integrate_definite_under_constraint.

### interpretation

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_results_definiteintegrationresult_interpretation_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_definiteintegrationresult_interpretation.53873dc2da96"></a>
<p class="symi-entry-owner">api::results::DefiniteIntegrationResult method</p>

```rust signature
pub fn interpretation(&self) -> DefiniteIntegrationInterpretation
```

Public method placement for interpretation.

### intertwining

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_intertwining_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_intertwining.b63defeb84f8"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAction method</p>

```rust signature
pub fn intertwining(
    &self,
) -> Option<PartialDifferentialEquationVerificationVerdict>
```

Public method placement for intertwining.

### into_core

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_options_monomialordering_into_core_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_options_monomialordering_into_core.3fd1df78cd24"></a>
<p class="symi-entry-owner">api::options::MonomialOrdering method</p>

```rust signature
pub fn into_core(
    self,
) -> crate::polynomial::monomial_order::MonomialOrder
```

Public method placement for into_core.

### into_core

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_options_orthogonalpolynomialfamily_into_core_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_options_orthogonalpolynomialfamily_into_core.a609221c1904"></a>
<p class="symi-entry-owner">api::options::OrthogonalPolynomialFamily method</p>

```rust signature
pub fn into_core(self) -> core_family
```

Public method placement for into_core.

### into_core

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_options_specialfunctionbasis_into_core_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_options_specialfunctionbasis_into_core.75fb0f7731fe"></a>
<p class="symi-entry-owner">api::options::SpecialFunctionBasis method</p>

```rust signature
pub fn into_core(
    self,
) -> crate::special_function_basis::SpecialFunctionBasis
```

Public method placement for into_core.

### into_core

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_options_trigonometricbasis_into_core_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_options_trigonometricbasis_into_core.4cf22b1b58bd"></a>
<p class="symi-entry-owner">api::options::TrigonometricBasis method</p>

```rust signature
pub fn into_core(self) -> crate::trigonometry::TrigonometricBasis
```

Public method placement for into_core.

### invariant

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_invariant_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsimilaritysolution_invariant.ce6ba40a27c1"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSimilaritySolution method</p>

```rust signature
pub fn invariant(&self) -> Option<Expression>
```

Public method placement for invariant.

### inverse_coordinates

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationcoordinatechange_inverse_coordinates_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcoordinatechange_inverse_coordinates.aa83eaf2e909"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationCoordinateChange method</p>

```rust signature
pub fn inverse_coordinates(&self) -> Result<Vec<Expression>, ApiError>
```

Public method placement for inverse_coordinates.

### invertibility

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_invertibility_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_invertibility.0161df41aed3"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAction method</p>

```rust signature
pub fn invertibility(
    &self,
) -> Option<PartialDifferentialEquationVerificationVerdict>
```

Public method placement for invertibility.

### invertible_matrix

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_invertible_matrix_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_invertible_matrix.1f9b739b30b3"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn invertible_matrix(
    &self,
    subject: &Matrix,
) -> Result<AssumptionProposition, ApiError>
```

Build a proposition asserting that a matrix is square and invertible.

### irrational

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_irrational_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_irrational.8345b308ac1c"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn irrational(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Public method placement for irrational.

### is_algebraic

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_expression_is_algebraic_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_expression_is_algebraic.cf2df473a55a"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn is_algebraic(&self) -> Result<TruthValue, ApiError>
```

Public method placement for is_algebraic.

### is_complex

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_expression_is_complex_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_expression_is_complex.65ffe4c8455a"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn is_complex(&self) -> Result<TruthValue, ApiError>
```

Public method placement for is_complex.

### is_composite

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_expression_is_composite_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_expression_is_composite.57a713729970"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn is_composite(&self) -> Result<TruthValue, ApiError>
```

Public method placement for is_composite.

### is_diagonal_matrix

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_matrix_is_diagonal_matrix_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_matrix_is_diagonal_matrix.d84eeb527e21"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn is_diagonal_matrix(&self) -> Result<TruthValue, ApiError>
```

Public method placement for is_diagonal_matrix.

### is_even

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_expression_is_even_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_expression_is_even.125e8a552628"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn is_even(&self) -> Result<TruthValue, ApiError>
```

Public method placement for is_even.

### is_extended_real

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_expression_is_extended_real_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_expression_is_extended_real.0ba04d7edfe5"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn is_extended_real(&self) -> Result<TruthValue, ApiError>
```

Public method placement for is_extended_real.

### is_full_rank_matrix

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_matrix_is_full_rank_matrix_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_matrix_is_full_rank_matrix.2e34ed5f1419"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn is_full_rank_matrix(&self) -> Result<TruthValue, ApiError>
```

Public method placement for is_full_rank_matrix.

### is_hermitian_matrix

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_matrix_is_hermitian_matrix_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_matrix_is_hermitian_matrix.1ac87af99b6d"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn is_hermitian_matrix(&self) -> Result<TruthValue, ApiError>
```

Public method placement for is_hermitian_matrix.

### is_identity_matrix

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_matrix_is_identity_matrix_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_matrix_is_identity_matrix.d3c895037995"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn is_identity_matrix(&self) -> Result<TruthValue, ApiError>
```

Public method placement for is_identity_matrix.

### is_infinite

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_expression_is_infinite_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_expression_is_infinite.63e607e18a0b"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn is_infinite(&self) -> Result<TruthValue, ApiError>
```

Public method placement for is_infinite.

### is_invertible_matrix

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_matrix_is_invertible_matrix_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_matrix_is_invertible_matrix.36066ca74a0a"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn is_invertible_matrix(&self) -> Result<TruthValue, ApiError>
```

Public method placement for is_invertible_matrix.

### is_irrational

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_expression_is_irrational_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_expression_is_irrational.d1ecff92e3d3"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn is_irrational(&self) -> Result<TruthValue, ApiError>
```

Public method placement for is_irrational.

### is_natural

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_expression_is_natural_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_expression_is_natural.982e0afed79e"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn is_natural(&self) -> Result<TruthValue, ApiError>
```

Public method placement for is_natural.

### is_nonpositive

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_expression_is_nonpositive_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_expression_is_nonpositive.7b78e42e1dfc"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn is_nonpositive(&self) -> Result<TruthValue, ApiError>
```

Public method placement for is_nonpositive.

### is_nonpositive

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_is_nonpositive_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_is_nonpositive.2520e35c1258"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn is_nonpositive(
    &self,
    target: &Expression,
) -> Result<TruthValue, ApiError>
```

Public method placement for is_nonpositive.

### is_normal_matrix

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_matrix_is_normal_matrix_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_matrix_is_normal_matrix.d1e68a4c9593"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn is_normal_matrix(&self) -> Result<TruthValue, ApiError>
```

Public method placement for is_normal_matrix.

### is_odd

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_expression_is_odd_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_expression_is_odd.6c44f2c36801"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn is_odd(&self) -> Result<TruthValue, ApiError>
```

Public method placement for is_odd.

### is_orthogonal_matrix

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_matrix_is_orthogonal_matrix_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_matrix_is_orthogonal_matrix.745c6ff6762c"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn is_orthogonal_matrix(&self) -> Result<TruthValue, ApiError>
```

Public method placement for is_orthogonal_matrix.

### is_parallel

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_parallelism_parallelismcapability_is_parallel_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_parallelism_parallelismcapability_is_parallel.7df139ae72a4"></a>
<p class="symi-entry-owner">api::parallelism::ParallelismCapability method</p>

```rust signature
pub fn is_parallel(&self) -> bool
```

Public method placement for is_parallel.

### is_positive_definite_matrix

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_matrix_is_positive_definite_matrix_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_matrix_is_positive_definite_matrix.278db34dcf57"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn is_positive_definite_matrix(
    &self,
) -> Result<TruthValue, ApiError>
```

Public method placement for is_positive_definite_matrix.

### is_positive_integer

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_expression_is_positive_integer_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_expression_is_positive_integer.5ec97def8c30"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn is_positive_integer(&self) -> Result<TruthValue, ApiError>
```

Public method placement for is_positive_integer.

### is_positive_semidefinite_matrix

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_matrix_is_positive_semidefinite_matrix_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_matrix_is_positive_semidefinite_matrix.712d4bd582d1"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn is_positive_semidefinite_matrix(
    &self,
) -> Result<TruthValue, ApiError>
```

Public method placement for is_positive_semidefinite_matrix.

### is_singular_matrix

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_matrix_is_singular_matrix_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_matrix_is_singular_matrix.c1c6550f35e5"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn is_singular_matrix(&self) -> Result<TruthValue, ApiError>
```

Public method placement for is_singular_matrix.

### is_square

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_matrix_is_square_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_matrix_is_square.b6f45d8f29cf"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn is_square(&self) -> Result<TruthValue, ApiError>
```

Public method placement for is_square.

### is_symmetric_matrix

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_matrix_is_symmetric_matrix_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_matrix_is_symmetric_matrix.5e6c78d62b96"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn is_symmetric_matrix(&self) -> Result<TruthValue, ApiError>
```

Public method placement for is_symmetric_matrix.

### is_transcendental

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_expression_is_transcendental_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_expression_is_transcendental.30daff0e5849"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn is_transcendental(&self) -> Result<TruthValue, ApiError>
```

Public method placement for is_transcendental.

### is_unitary_matrix

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_matrix_is_unitary_matrix_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_matrix_is_unitary_matrix.7c320fe25b8b"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn is_unitary_matrix(&self) -> Result<TruthValue, ApiError>
```

Public method placement for is_unitary_matrix.

### is_value

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_parallelism_bulkexpressionoutcome_is_value_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_parallelism_bulkexpressionoutcome_is_value.18a97f7cb3a4"></a>
<p class="symi-entry-owner">api::parallelism::BulkExpressionOutcome method</p>

```rust signature
pub fn is_value(&self) -> bool
```

Public method placement for is_value.

### is_zero

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_expression_is_zero_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_expression_is_zero.d4f78047d4a1"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn is_zero(&self) -> Result<TruthValue, ApiError>
```

Public method placement for is_zero.

### is_zero_matrix

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_matrix_is_zero_matrix_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_matrix_is_zero_matrix.76a7d45973a7"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn is_zero_matrix(&self) -> Result<TruthValue, ApiError>
```

Public method placement for is_zero_matrix.

### jacobi_amplitude

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_jacobi_amplitude_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_jacobi_amplitude.59bfe76c4df5"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn jacobi_amplitude(
    &self,
    argument: &Expression,
    parameter: &Expression,
) -> Result<Expression, ApiError>
```

Public method placement for jacobi_amplitude.

### jacobi_cn

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_jacobi_cn_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_jacobi_cn.4ebe048b1499"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn jacobi_cn(
    &self,
    argument: &Expression,
    parameter: &Expression,
) -> Result<Expression, ApiError>
```

Public method placement for jacobi_cn.

### jacobi_dn

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_jacobi_dn_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_jacobi_dn.9140e04e4d83"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn jacobi_dn(
    &self,
    argument: &Expression,
    parameter: &Expression,
) -> Result<Expression, ApiError>
```

Public method placement for jacobi_dn.

### jacobi_sn

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_jacobi_sn_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_jacobi_sn.66357aebf510"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn jacobi_sn(
    &self,
    argument: &Expression,
    parameter: &Expression,
) -> Result<Expression, ApiError>
```

Public method placement for jacobi_sn.

### jacobi_theta_1

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_jacobi_theta_1_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_jacobi_theta_1.513b848b5e9a"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn jacobi_theta_1(
    &self,
    argument: &Expression,
    half_period_ratio: &Expression,
) -> Result<Expression, ApiError>
```

Public method placement for jacobi_theta_1.

### jacobi_theta_2

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_jacobi_theta_2_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_jacobi_theta_2.56f271faea65"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn jacobi_theta_2(
    &self,
    argument: &Expression,
    half_period_ratio: &Expression,
) -> Result<Expression, ApiError>
```

Public method placement for jacobi_theta_2.

### jacobi_theta_3

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_jacobi_theta_3_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_jacobi_theta_3.e177299887b8"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn jacobi_theta_3(
    &self,
    argument: &Expression,
    half_period_ratio: &Expression,
) -> Result<Expression, ApiError>
```

Public method placement for jacobi_theta_3.

### jacobi_theta_4

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_jacobi_theta_4_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_jacobi_theta_4.b4ae94e3aa37"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn jacobi_theta_4(
    &self,
    argument: &Expression,
    half_period_ratio: &Expression,
) -> Result<Expression, ApiError>
```

Public method placement for jacobi_theta_4.

### jet

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationjetcoefficient_jet_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationjetcoefficient_jet.a5f8edaf6f15"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationJetCoefficient method</p>

```rust signature
pub fn jet(&self) -> PartialDifferentialEquationJet
```

Public method placement for jet.

### jet

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationprincipalcoefficient_jet_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationprincipalcoefficient_jet.6a8b6da47161"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPrincipalCoefficient method</p>

```rust signature
pub fn jet(&self) -> PartialDifferentialEquationJet
```

Public method placement for jet.

### length

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_segment2d_length_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_segment2d_length.9f1685c15292"></a>
<p class="symi-entry-owner">api::Segment2d method</p>

```rust signature
pub fn length(&self) -> Result<Expression, ApiError>
```

Element count of a finite set (Python: `len(expression)`).

### length

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_expression_operations_expression_length_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_expression_operations_expression_length.667a066e0984"></a>
<p class="symi-entry-owner">api::expression_operations::Expression method</p>

```rust signature
pub fn length(&self) -> Result<usize, ApiError>
```

Element count of a finite set (Python: `len(expression)`).

### lifted_constants

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_lifted_constants_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsimilaritysolution_lifted_constants.fd74f4f11a63"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSimilaritySolution method</p>

```rust signature
pub fn lifted_constants(&self) -> Vec<Expression>
```

Public method placement for lifted_constants.

### lifted_family

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_lifted_family_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsimilaritysolution_lifted_family.6cf0b41518ce"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSimilaritySolution method</p>

```rust signature
pub fn lifted_family(
    &self,
) -> Option<PartialDifferentialEquationSolutionFamily>
```

Public method placement for lifted_family.

### lifted_family_verification

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_lifted_family_verification_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsimilaritysolution_lifted_family_verification.02c41330ac7b"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSimilaritySolution method</p>

```rust signature
pub fn lifted_family_verification(
    &self,
) -> Option<PartialDifferentialEquationVerificationVerdict>
```

Public method placement for lifted_family_verification.

### linearity

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationclassification_linearity_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationclassification_linearity.5b3905138d99"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationClassification method</p>

```rust signature
pub fn linearity(
    &self,
) -> Result<PartialDifferentialEquationLinearity, ApiError>
```

Public method placement for linearity.

### linearity

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsolutionprovenance_linearity_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolutionprovenance_linearity.ca56ec745e53"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolutionProvenance method</p>

```rust signature
pub fn linearity(&self) -> PartialDifferentialEquationLinearity
```

Public method placement for linearity.

### logarithmic_integral

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_logarithmic_integral_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_logarithmic_integral.c7cfc3614f77"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn logarithmic_integral(
    &self,
    argument: &Expression,
) -> Result<Expression, ApiError>
```

Public method placement for logarithmic_integral.

### logic

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_logic_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_logic.6fdadc26a67d"></a>
<p class="symi-entry-owner">api module</p>

```rust signature
pub mod logic;
```

Public module placement for logic.

### logical_assumption_and

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_logical_assumption_and_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_logical_assumption_and.e04edbc81167"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn logical_assumption_and<I>(
    &self,
    propositions: I,
) -> Result<AssumptionProposition, ApiError>
where
    I: IntoIterator<Item = AssumptionProposition>,
```

Public method placement for logical_assumption_and.

### logical_assumption_not

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_logical_assumption_not_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_logical_assumption_not.e7a57d8579eb"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn logical_assumption_not(
    &self,
    proposition: &AssumptionProposition,
) -> Result<AssumptionProposition, ApiError>
```

Public method placement for logical_assumption_not.

### logical_assumption_or

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_logical_assumption_or_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_logical_assumption_or.28be28d5c6b7"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn logical_assumption_or<I>(
    &self,
    propositions: I,
) -> Result<AssumptionProposition, ApiError>
where
    I: IntoIterator<Item = AssumptionProposition>,
```

Public method placement for logical_assumption_or.

### lower_triangular_matrix

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_lower_triangular_matrix_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_lower_triangular_matrix.85a2ce0f17ce"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn lower_triangular_matrix(
    &self,
    subject: &Matrix,
) -> Result<AssumptionProposition, ApiError>
```

Build a proposition asserting that a matrix is lower triangular.

### matrix_assumption

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_matrix_assumption_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_matrix_assumption.511d2c170c4c"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn matrix_assumption(
    &self,
    subject: &Matrix,
    predicate: MatrixPredicate,
) -> Result<AssumptionProposition, ApiError>
```

Public method placement for matrix_assumption.

### matrix_operations

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_matrix_operations_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_matrix_operations.6c27bc0ecbf7"></a>
<p class="symi-entry-owner">api module</p>

```rust signature
pub mod matrix_operations;
```

Public module placement for matrix_operations.

### matrix_shape

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_matrix_shape_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_matrix_shape.3774272c23ab"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn matrix_shape(
    &self,
    subject: &Matrix,
    rows: usize,
    columns: usize,
) -> Result<AssumptionProposition, ApiError>
```

Build a proposition asserting that a matrix has the requested positive row and column counts.

### maximum_operation_concurrency

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_parallelism_parallelismcapability_maximum_operation_concurrency_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_parallelism_parallelismcapability_maximum_operation_concurrency.40ba0134ec3e"></a>
<p class="symi-entry-owner">api::parallelism::ParallelismCapability field</p>

```rust signature
pub maximum_operation_concurrency:
```

Public field placement for maximum_operation_concurrency.

### method

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_method_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_method.515cb2bf6195"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveResult method</p>

```rust signature
pub fn method(&self) -> OrdinaryDifferentialEquationMethod
```

Public method placement for method.

### method

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_method_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_method.aaa17853183c"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveResult method</p>

```rust signature
pub fn method(&self) -> OrdinaryDifferentialEquationSystemMethod
```

Public method placement for method.

### method

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationmethodcandidate_method_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationmethodcandidate_method.b2de593d21fa"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationMethodCandidate method</p>

```rust signature
pub fn method(&self) -> PartialDifferentialEquationMethod
```

Public method placement for method.

### method

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationportfoliodecline_method_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationportfoliodecline_method.4aafa70da54c"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPortfolioDecline method</p>

```rust signature
pub fn method(&self) -> PartialDifferentialEquationMethod
```

Public method placement for method.

### method

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsolutionprovenance_method_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolutionprovenance_method.fbf2f7de244b"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolutionProvenance method</p>

```rust signature
pub fn method(&self) -> PartialDifferentialEquationMethod
```

Public method placement for method.

### method

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsolveoptions_method_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolveoptions_method.adb02ce51909"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolveOptions method</p>

```rust signature
pub fn method(&self) -> PartialDifferentialEquationMethod
```

Public method placement for method.

### method

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsolveresult_method_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolveresult_method.610447713a38"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolveResult method</p>

```rust signature
pub fn method(&self) -> Option<PartialDifferentialEquationMethod>
```

Public method placement for method.

### method_candidates

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationclassification_method_candidates_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationclassification_method_candidates.8b7632e45e6b"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationClassification method</p>

```rust signature
pub fn method_candidates(
    &self,
) -> Result<Vec<PartialDifferentialEquationMethodCandidate>, ApiError>
```

Public method placement for method_candidates.

### multiplier

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_multiplier_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_multiplier.061669b92b9b"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAction method</p>

```rust signature
pub fn multiplier(&self) -> Option<Expression>
```

Public method placement for multiplier.

### multiplier

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_multiplier_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsimilaritysolution_multiplier.17e491d34475"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSimilaritySolution method</p>

```rust signature
pub fn multiplier(&self) -> Option<Expression>
```

Public method placement for multiplier.

### multiply

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_expression_multiply_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_expression_multiply.b02aebaf76c1"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn multiply(
    &self,
    other: &Expression,
) -> Result<Expression, ApiError>
```

Matrix product; inner dimensions must agree.

### multiply

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_matrix_multiply_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_matrix_multiply.5ec431521e53"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn multiply(&self, other: &Matrix) -> Result<Matrix, ApiError>
```

Matrix product; inner dimensions must agree.

### multiply

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_multiply_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_multiply.1d925595bd82"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn multiply(
    &self,
    left: &Expression,
    right: &Expression,
) -> Result<Expression, ApiError>
```

Matrix product; inner dimensions must agree.

### name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_cadcellkind_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_cadcellkind_name.467c0e2363d3"></a>
<p class="symi-entry-owner">api::CadCellKind method</p>

```rust signature
pub fn name(&self) -> &'static str
```

Public method placement for name.

### name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_undefinedfunction_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_undefinedfunction_name.d204382a4ff2"></a>
<p class="symi-entry-owner">api::UndefinedFunction method</p>

```rust signature
pub fn name(&self) -> &str
```

Public method placement for name.

### name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_expression_operations_expressiontypename_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_expression_operations_expressiontypename_name.b3c454252ef3"></a>
<p class="symi-entry-owner">api::expression_operations::ExpressionTypeName method</p>

```rust signature
pub fn name(&self) -> &'static str
```

Public method placement for name.

### name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_logic_quantifier_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_logic_quantifier_name.313f614c038a"></a>
<p class="symi-entry-owner">api::logic::Quantifier method</p>

```rust signature
pub fn name(&self) -> &'static str
```

Public method placement for name.

### name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_options_monomialordering_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_options_monomialordering_name.b8d9abcd99e9"></a>
<p class="symi-entry-owner">api::options::MonomialOrdering method</p>

```rust signature
pub fn name(self) -> &'static str
```

Public method placement for name.

### name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_options_orthogonalpolynomialfamily_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_options_orthogonalpolynomialfamily_name.ae01d85e05b7"></a>
<p class="symi-entry-owner">api::options::OrthogonalPolynomialFamily method</p>

```rust signature
pub fn name(self) -> &'static str
```

Public method placement for name.

### name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_options_specialfunctionbasis_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_options_specialfunctionbasis_name.cd6b7c9cd288"></a>
<p class="symi-entry-owner">api::options::SpecialFunctionBasis method</p>

```rust signature
pub fn name(self) -> &'static str
```

Public method placement for name.

### name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_options_trigonometricbasis_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_options_trigonometricbasis_name.27b45cf14ace"></a>
<p class="symi-entry-owner">api::options::TrigonometricBasis method</p>

```rust signature
pub fn name(self) -> &'static str
```

Public method placement for name.

### name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_differentialequationsolutionscope_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_differentialequationsolutionscope_name.c53bd561c22d"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::DifferentialEquationSolutionScope method</p>

```rust signature
pub fn name(self) -> &'static str
```

Public method placement for name.

### name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationgeneralityverdict_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationgeneralityverdict_name.607d4290863a"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationGeneralityVerdict method</p>

```rust signature
pub fn name(self) -> &'static str
```

Public method placement for name.

### name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationmethod_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationmethod_name.e612cbbc3432"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationMethod method</p>

```rust signature
pub fn name(self) -> &'static str
```

Public method placement for name.

### name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationregularity_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationregularity_name.f5e9c20ca64b"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationRegularity method</p>

```rust signature
pub fn name(self) -> &'static str
```

Public method placement for name.

### name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsolutionform_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolutionform_name.c6d0d2c0ffc0"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolutionForm method</p>

```rust signature
pub fn name(self) -> &'static str
```

Public method placement for name.

### name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolvedecline_name.769c6a05c154"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveDecline method</p>

```rust signature
pub fn name(self) -> &'static str
```

Public method placement for name.

### name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsolveverdict_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolveverdict_name.b3e03d37c2c0"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveVerdict method</p>

```rust signature
pub fn name(self) -> &'static str
```

Public method placement for name.

### name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsystemmethod_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemmethod_name.d315f5ca90e2"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemMethod method</p>

```rust signature
pub fn name(self) -> &'static str
```

Public method placement for name.

### name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsystemroute_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemroute_name.dada940b6d44"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemRoute method</p>

```rust signature
pub fn name(self) -> &'static str
```

Public method placement for name.

### name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolvedecline_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemsolvedecline_name.23bc736f1eaf"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveDecline method</p>

```rust signature
pub fn name(self) -> &'static str
```

Public method placement for name.

### name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationverificationverdict_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationverificationverdict_name.e26bb16f05d1"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationVerificationVerdict method</p>

```rust signature
pub fn name(self) -> &'static str
```

Public method placement for name.

### name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_parallelism_parallelbackend_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_parallelism_parallelbackend_name.e82ae3d1897e"></a>
<p class="symi-entry-owner">api::parallelism::ParallelBackend method</p>

```rust signature
pub fn name(self) -> &'static str
```

Public method placement for name.

### name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_parallelism_parallelisminitialization_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_parallelism_parallelisminitialization_name.3283042fb037"></a>
<p class="symi-entry-owner">api::parallelism::ParallelismInitialization method</p>

```rust signature
pub fn name(self) -> &'static str
```

Public method placement for name.

### name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_parallelism_parallelismunavailablereason_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_parallelism_parallelismunavailablereason_name.ee580b70862d"></a>
<p class="symi-entry-owner">api::parallelism::ParallelismUnavailableReason method</p>

```rust signature
pub fn name(self) -> &'static str
```

Public method placement for name.

### name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationarbitraryfunction_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationarbitraryfunction_name.9c4a8cb9267b"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationArbitraryFunction method</p>

```rust signature
pub fn name(&self) -> Result<String, ApiError>
```

Public method placement for name.

### name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationcanonicalprincipalform_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcanonicalprincipalform_name.b50e87a5fe41"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationCanonicalPrincipalForm method</p>

```rust signature
pub fn name(self) -> &'static str
```

Public method placement for name.

### name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationcanonicalizationdecline_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcanonicalizationdecline_name.29e375e88f7b"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationCanonicalizationDecline method</p>

```rust signature
pub fn name(self) -> &'static str
```

Public method placement for name.

### name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationgeometricdomain_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationgeometricdomain_name.2f93c39f9c76"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationGeometricDomain method</p>

```rust signature
pub fn name(self) -> &'static str
```

Public method placement for name.

### name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationlinearity_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationlinearity_name.dd0c0018a9bb"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationLinearity method</p>

```rust signature
pub fn name(self) -> &'static str
```

Public method placement for name.

### name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationmethod_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationmethod_name.d49b5fbe15e5"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationMethod method</p>

```rust signature
pub fn name(self) -> &'static str
```

Public method placement for name.

### name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationpointsymmetrydecline_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetrydecline_name.9a9ab4532f8d"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryDecline method</p>

```rust signature
pub fn name(self) -> &'static str
```

Public method placement for name.

### name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationproofobligation_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproofobligation_name.1e7d942fd94a"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProofObligation method</p>

```rust signature
pub fn name(self) -> &'static str
```

Public method placement for name.

### name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationregularity_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationregularity_name.83178bfb844c"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationRegularity method</p>

```rust signature
pub fn name(self) -> &'static str
```

Public method placement for name.

### name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsecondorderclassificationdecline_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondorderclassificationdecline_name.fd32845307de"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSecondOrderClassificationDecline method</p>

```rust signature
pub fn name(self) -> &'static str
```

Public method placement for name.

### name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsecondordertype_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondordertype_name.db7389e9f3d9"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSecondOrderType method</p>

```rust signature
pub fn name(self) -> &'static str
```

Public method placement for name.

### name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsecondordertypeverdict_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondordertypeverdict_name.cf377152af55"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSecondOrderTypeVerdict method</p>

```rust signature
pub fn name(self) -> &'static str
```

Public method placement for name.

### name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationseparationstrategy_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationseparationstrategy_name.92c340b1af9d"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSeparationStrategy method</p>

```rust signature
pub fn name(self) -> &'static str
```

Public method placement for name.

### name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsimilarityreductiondecline_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsimilarityreductiondecline_name.e484d571f373"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSimilarityReductionDecline method</p>

```rust signature
pub fn name(self) -> &'static str
```

Public method placement for name.

### name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsolutionclass_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolutionclass_name.7fb7155cf71f"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolutionClass method</p>

```rust signature
pub fn name(self) -> &'static str
```

Public method placement for name.

### name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsolvedecline_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolvedecline_name.9af083e95c6d"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolveDecline method</p>

```rust signature
pub fn name(self) -> &'static str
```

Public method placement for name.

### name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsolveverdict_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolveverdict_name.5c5c2b87bcda"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolveVerdict method</p>

```rust signature
pub fn name(self) -> &'static str
```

Public method placement for name.

### name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsymmetryactiondecline_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsymmetryactiondecline_name.723da4ef12e3"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSymmetryActionDecline method</p>

```rust signature
pub fn name(self) -> &'static str
```

Public method placement for name.

### name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsymmetryobligation_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsymmetryobligation_name.f042604c0e91"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSymmetryObligation method</p>

```rust signature
pub fn name(self) -> &'static str
```

Public method placement for name.

### name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationtransformaxiskind_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformaxiskind_name.8153418b7865"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformAxisKind method</p>

```rust signature
pub fn name(self) -> &'static str
```

Public method placement for name.

### name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationtransformationdecline_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationdecline_name.7a860f374ae5"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformationDecline method</p>

```rust signature
pub fn name(self) -> &'static str
```

Public method placement for name.

### name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationverificationinconclusivereason_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationverificationinconclusivereason_name.3062db86760e"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationVerificationInconclusiveReason method</p>

```rust signature
pub fn name(self) -> &'static str
```

Public method placement for name.

### name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationverificationverdict_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationverificationverdict_name.9bb54d57e951"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationVerificationVerdict method</p>

```rust signature
pub fn name(self) -> &'static str
```

Public method placement for name.

### name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_results_definiteintegrationverdict_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_definiteintegrationverdict_name.6f3ee20610a1"></a>
<p class="symi-entry-owner">api::results::DefiniteIntegrationVerdict method</p>

```rust signature
pub fn name(&self) -> &'static str
```

Public method placement for name.

### name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_results_enumerationverdict_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_enumerationverdict_name.fffd1929b6e8"></a>
<p class="symi-entry-owner">api::results::EnumerationVerdict method</p>

```rust signature
pub fn name(&self) -> &'static str
```

Public method placement for name.

### name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_results_extremumclassification_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_extremumclassification_name.43c94fa83e7c"></a>
<p class="symi-entry-owner">api::results::ExtremumClassification method</p>

```rust signature
pub fn name(&self) -> &'static str
```

Public method placement for name.

### name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_results_optimizationverdict_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_optimizationverdict_name.ec82dab48a03"></a>
<p class="symi-entry-owner">api::results::OptimizationVerdict method</p>

```rust signature
pub fn name(&self) -> &'static str
```

Public method placement for name.

### name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_results_systemverdict_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_systemverdict_name.52713f604f2e"></a>
<p class="symi-entry-owner">api::results::SystemVerdict method</p>

```rust signature
pub fn name(&self) -> &'static str
```

Public method placement for name.

### name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_solving_optimizationdirection_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_solving_optimizationdirection_name.b4e0208816f5"></a>
<p class="symi-entry-owner">api::solving::OptimizationDirection method</p>

```rust signature
pub fn name(&self) -> &'static str
```

Public method placement for name.

### natural

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_natural_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_natural.724f305cdb42"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn natural(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Public method placement for natural.

### natural

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_symboldeclaration_natural_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_symboldeclaration_natural.455d307046dd"></a>
<p class="symi-entry-owner">api::SymbolDeclaration field</p>

```rust signature
pub natural:
```

Public field placement for natural.

### negative

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_negative_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_negative.1965e32857a3"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn negative(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Public method placement for negative.

### negative

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_symboldeclaration_negative_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_symboldeclaration_negative.564fad1f2247"></a>
<p class="symi-entry-owner">api::SymbolDeclaration field</p>

```rust signature
pub negative:
```

Public field placement for negative.

### new

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_new_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_new.c82e40e438c8"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn new() -> Self
```

Construct the CAD of the polynomials in the given variable order \(x_1,\ldots,x_n\); projection eliminates \(x_n\) first).

### new

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_options_orthogonalpolynomialbasis_new_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_options_orthogonalpolynomialbasis_new.c2f18c2e4f4e"></a>
<p class="symi-entry-owner">api::options::OrthogonalPolynomialBasis method</p>

```rust signature
pub fn new(
    family: OrthogonalPolynomialFamily,
    parameters: Vec<Expression>,
) -> Self
```

Construct the CAD of the polynomials in the given variable order \(x_1,\ldots,x_n\); projection eliminates \(x_n\) first).

### new

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsolveoptions_new_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolveoptions_new.515b2e254e91"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolveOptions method</p>

```rust signature
pub fn new(
    method: PartialDifferentialEquationMethod,
    transform_axes: Vec<PartialDifferentialEquationTransformAxisOption>,
) -> Self
```

Construct the CAD of the polynomials in the given variable order \(x_1,\ldots,x_n\); projection eliminates \(x_n\) first).

### new

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationtransformaxisoption_new_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformaxisoption_new.0890d6f0bf21"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformAxisOption method</p>

```rust signature
pub fn new(
    source_variable_name: impl Into<String>,
    transform_axis_kind: PartialDifferentialEquationTransformAxisKind,
    transform_variable_name: Option<String>,
) -> Self
```

Construct the CAD of the polynomials in the given variable order \(x_1,\ldots,x_n\); projection eliminates \(x_n\) first).

### new

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_results_piecewisebranch_new_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_piecewisebranch_new.bebdb94e35ae"></a>
<p class="symi-entry-owner">api::results::PiecewiseBranch method</p>

```rust signature
pub fn new(condition: &Expression, value: &Expression) -> Self
```

Construct the CAD of the polynomials in the given variable order \(x_1,\ldots,x_n\); projection eliminates \(x_n\) first).

### nonnegative

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_nonnegative_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_nonnegative.ed38f3760ae8"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn nonnegative(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Public method placement for nonnegative.

### nonnegative_assumption

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_nonnegative_assumption_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_nonnegative_assumption.3a54bd90ec6e"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn nonnegative_assumption(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Public method placement for nonnegative_assumption.

### nonpositive

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_nonpositive_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_nonpositive.dcfee4a791c2"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn nonpositive(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Public method placement for nonpositive.

### nonpositive_assumption

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_nonpositive_assumption_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_nonpositive_assumption.e2b4f0332782"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn nonpositive_assumption(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Public method placement for nonpositive_assumption.

### nonzero

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_nonzero_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_nonzero.4af60b679735"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn nonzero(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Public method placement for nonzero.

### nonzero

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_symboldeclaration_nonzero_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_symboldeclaration_nonzero.f19a4992ce86"></a>
<p class="symi-entry-owner">api::SymbolDeclaration field</p>

```rust signature
pub nonzero:
```

Public field placement for nonzero.

### normal_matrix

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_normal_matrix_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_normal_matrix.56ccf67124ee"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn normal_matrix(
    &self,
    subject: &Matrix,
) -> Result<AssumptionProposition, ApiError>
```

Build a proposition asserting that a square matrix commutes with its conjugate transpose.

### normalization_multiplier

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationtransformationresult_normalization_multiplier_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationresult_normalization_multiplier.795c2811c8a6"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformationResult method</p>

```rust signature
pub fn normalization_multiplier(&self) -> Option<Expression>
```

Public method placement for normalization_multiplier.

### number_theory

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_number_theory_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_number_theory.2093aae9a4f2"></a>
<p class="symi-entry-owner">api module</p>

```rust signature
pub mod number_theory;
```

Public module placement for number_theory.

### odd

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_odd_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_odd.026e44d816ab"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn odd(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Public method placement for odd.

### operation_context

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_operation_context_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_operation_context.d3a325a2dadc"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn operation_context(&self) -> OperationContext
```

Public method placement for operation_context.

### operation_count

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_completedoperationreport_operation_count_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_completedoperationreport_operation_count.b0c31211ead8"></a>
<p class="symi-entry-owner">api::CompletedOperationReport field</p>

```rust signature
pub operation_count:
```

Public field placement for operation_count.

### operation_defaults

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_operation_defaults_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_operation_defaults.c75f5e18ddb9"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn operation_defaults(&self) -> Arc<OperationDefaults>
```

Public method placement for operation_defaults.

### options

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_options_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_options.d99f6301ef41"></a>
<p class="symi-entry-owner">api module</p>

```rust signature
pub mod options;
```

Public module placement for options.

### order

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationclassification_order_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationclassification_order.9358aad8a5d5"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationClassification method</p>

```rust signature
pub fn order(&self) -> Result<usize, ApiError>
```

Public method placement for order.

### order

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsolutionprovenance_order_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolutionprovenance_order.b614cb9d30eb"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolutionProvenance method</p>

```rust signature
pub fn order(&self) -> usize
```

Public method placement for order.

### ordinary_differential_equations

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations.f3797eeb2ee3"></a>
<p class="symi-entry-owner">api module</p>

```rust signature
pub mod ordinary_differential_equations;
```

Public module placement for ordinary_differential_equations.

### orthogonal_matrix

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_orthogonal_matrix_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_orthogonal_matrix.330cc229c809"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn orthogonal_matrix(
    &self,
    subject: &Matrix,
) -> Result<AssumptionProposition, ApiError>
```

Build a proposition asserting that a real square matrix is orthogonal.

### orthogonal_polynomial_coefficient

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_expression_orthogonal_polynomial_coefficient_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_expression_orthogonal_polynomial_coefficient.6d3fff5ae9ce"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn orthogonal_polynomial_coefficient<'a, VariableType>(
    &self,
    variable: VariableType,
    basis: &OrthogonalPolynomialBasis,
    degree: usize,
) -> Result<Expression, ApiError>
where
    VariableType: Into<VariableLike<'a>>,
```

Public method placement for orthogonal_polynomial_coefficient.

### orthogonal_polynomial_coefficient

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_orthogonal_polynomial_coefficient_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_orthogonal_polynomial_coefficient.1b2ef4ad217a"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn orthogonal_polynomial_coefficient<'a, VariableType>(
    &self,
    target: &Expression,
    variable: VariableType,
    basis: &OrthogonalPolynomialBasis,
    degree: usize,
) -> Result<Expression, ApiError>
where
    VariableType: Into<VariableLike<'a>>,
```

Public method placement for orthogonal_polynomial_coefficient.

### outcome

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_results_setenumeration_outcome_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_setenumeration_outcome.ee18065997bc"></a>
<p class="symi-entry-owner">api::results::SetEnumeration method</p>

```rust signature
pub fn outcome(&self) -> EnumerationVerdict
```

Public method placement for outcome.

### outstanding_obligations

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_outstanding_obligations_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_outstanding_obligations.60b7ead9ab3d"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAction method</p>

```rust signature
pub fn outstanding_obligations(
    &self,
) -> Vec<PartialDifferentialEquationSymmetryObligation>
```

Public method placement for outstanding_obligations.

### outstanding_obligations

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_outstanding_obligations_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_outstanding_obligations.a468041f459e"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAlgebra method</p>

```rust signature
pub fn outstanding_obligations(
    &self,
) -> Vec<PartialDifferentialEquationSymmetryObligation>
```

Public method placement for outstanding_obligations.

### outstanding_obligations

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_outstanding_obligations_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsimilaritysolution_outstanding_obligations.a86725fee4fd"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSimilaritySolution method</p>

```rust signature
pub fn outstanding_obligations(
    &self,
) -> Vec<PartialDifferentialEquationSymmetryObligation>
```

Public method placement for outstanding_obligations.

### parallelism

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_parallelism_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_parallelism.0b8ef0c196d2"></a>
<p class="symi-entry-owner">api module</p>

```rust signature
pub mod parallelism;
```

Public module placement for parallelism.

### parallelism_capability

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_parallelism_capability_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_parallelism_capability.460744b25dc8"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn parallelism_capability(&self) -> ParallelismCapability
```

Public method placement for parallelism_capability.

### parameter_count

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_options_orthogonalpolynomialfamily_parameter_count_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_options_orthogonalpolynomialfamily_parameter_count.b0eccf408a90"></a>
<p class="symi-entry-owner">api::options::OrthogonalPolynomialFamily method</p>

```rust signature
pub fn parameter_count(self) -> usize
```

Public method placement for parameter_count.

### parameters

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_options_orthogonalpolynomialbasis_parameters_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_options_orthogonalpolynomialbasis_parameters.3ac78ae0483d"></a>
<p class="symi-entry-owner">api::options::OrthogonalPolynomialBasis field</p>

```rust signature
pub parameters:
```

Public field placement for parameters.

### parameters

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_parameters_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_parameters.456ce4e5daa7"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAction method</p>

```rust signature
pub fn parameters(&self) -> Vec<Expression>
```

Public method placement for parameters.

### parameters

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_parameters_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_parameters.5921e7b33c63"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAlgebra method</p>

```rust signature
pub fn parameters(&self) -> Vec<Expression>
```

Public method placement for parameters.

### partial_differential_equation

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_session_partial_differential_equation_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_session_partial_differential_equation.232200c4a999"></a>
<p class="symi-entry-owner">api::partial_differential_equations::Session method</p>

```rust signature
pub fn partial_differential_equation<'a, IteratorType, VariableType>(
    &self,
    equation: &Expression,
    dependent_function: &UndefinedFunction,
    independent_variables: IteratorType,
    initial_conditions: &[Expression],
    boundary_conditions: &[Expression],
) -> Result<PartialDifferentialEquationProblem, ApiError>
where
    IteratorType: IntoIterator<Item = VariableType>,
    VariableType: Into<VariableLike<'a>>,
```

Public method placement for partial_differential_equation.

### partial_differential_equation_arbitrary_function

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_session_partial_differential_equation_arbitrary_function_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_session_partial_differential_equation_arbitrary_function.e2d55b24894c"></a>
<p class="symi-entry-owner">api::partial_differential_equations::Session method</p>

```rust signature
pub fn partial_differential_equation_arbitrary_function(
    &self,
    preferred_name: &str,
    arity: usize,
) -> PartialDifferentialEquationArbitraryFunction
```

Public method placement for partial_differential_equation_arbitrary_function.

### partial_differential_equations

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations.2ddc370e6f3c"></a>
<p class="symi-entry-owner">api module</p>

```rust signature
pub mod partial_differential_equations;
```

Public module placement for partial_differential_equations.

### point_symmetry_decline

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_point_symmetry_decline_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_point_symmetry_decline.a3457b41aa47"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAction method</p>

```rust signature
pub fn point_symmetry_decline(
    &self,
) -> Option<PartialDifferentialEquationPointSymmetryDecline>
```

Public method placement for point_symmetry_decline.

### portfolio_declines

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsolveresult_portfolio_declines_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolveresult_portfolio_declines.da6c19fc27eb"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolveResult method</p>

```rust signature
pub fn portfolio_declines(
    &self,
) -> Vec<PartialDifferentialEquationPortfolioDecline>
```

Public method placement for portfolio_declines.

### positive

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_positive_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_positive.4da0298fa7ef"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn positive(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Public method placement for positive.

### positive

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_symboldeclaration_positive_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_symboldeclaration_positive.a3b681fcf1fc"></a>
<p class="symi-entry-owner">api::SymbolDeclaration field</p>

```rust signature
pub positive:
```

Public field placement for positive.

### positive_definite_matrix

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_positive_definite_matrix_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_positive_definite_matrix.c53aeb2815bf"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn positive_definite_matrix(
    &self,
    subject: &Matrix,
) -> Result<AssumptionProposition, ApiError>
```

Build a proposition asserting that a matrix is positive definite under the engine's exact Hermitian/real-domain convention.

### positive_integer

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_positive_integer_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_positive_integer.b7dc1f4a9e7a"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn positive_integer(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Public method placement for positive_integer.

### positive_semidefinite_matrix

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_positive_semidefinite_matrix_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_positive_semidefinite_matrix.15dc5c8e9dad"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn positive_semidefinite_matrix(
    &self,
    subject: &Matrix,
) -> Result<AssumptionProposition, ApiError>
```

Build a proposition asserting that a matrix is positive semidefinite under the engine's exact Hermitian/real-domain convention.

### precision_bits

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_results_numericdefiniteintegrationresult_precision_bits_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_numericdefiniteintegrationresult_precision_bits.e4215245ea04"></a>
<p class="symi-entry-owner">api::results::NumericDefiniteIntegrationResult method</p>

```rust signature
pub fn precision_bits(&self) -> Option<u32>
```

Public method placement for precision_bits.

### prelude

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_prelude_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_prelude.d7b47ad34767"></a>
<p class="symi-entry-owner">api module</p>

```rust signature
pub mod prelude;
```

Public module placement for prelude.

### presentation_search_enabled

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_presentation_search_enabled_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_presentation_search_enabled.967665feccd4"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn presentation_search_enabled(&self) -> bool
```

Public method placement for presentation_search_enabled.

### prime_factorization

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_number_theory_session_prime_factorization_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_number_theory_session_prime_factorization.61a7a4c2c18b"></a>
<p class="symi-entry-owner">api::number_theory::Session method</p>

```rust signature
pub fn prime_factorization(
    &self,
    value: &Expression,
) -> Result<Vec<PrimeFactor>, ApiError>
```

Public method placement for prime_factorization.

### principal_congruence_residuals

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationtransformationverificationreport_principal_congruence_residuals_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationverificationreport_principal_congruence_residuals.0dced90a5038"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformationVerificationReport method</p>

```rust signature
pub fn principal_congruence_residuals(&self) -> Vec<Expression>
```

Public method placement for principal_congruence_residuals.

### principal_form

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationcanonicalizationresult_principal_form_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcanonicalizationresult_principal_form.e2a43b7f9c40"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationCanonicalizationResult method</p>

```rust signature
pub fn principal_form(
    &self,
) -> Option<PartialDifferentialEquationCanonicalPrincipalForm>
```

Public method placement for principal_form.

### principal_matrix

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsecondorderclassification_principal_matrix_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondorderclassification_principal_matrix.61876332ffa8"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSecondOrderClassification method</p>

```rust signature
pub fn principal_matrix(&self) -> Matrix
```

Public method placement for principal_matrix.

### proof_obligations

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationmethodcandidate_proof_obligations_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationmethodcandidate_proof_obligations.2729ed41c873"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationMethodCandidate method</p>

```rust signature
pub fn proof_obligations(
    &self,
) -> Vec<PartialDifferentialEquationProofObligation>
```

Public method placement for proof_obligations.

### proof_obligations

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsecondorderclassification_proof_obligations_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondorderclassification_proof_obligations.a0c56a8ac86e"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSecondOrderClassification method</p>

```rust signature
pub fn proof_obligations(
    &self,
) -> Vec<PartialDifferentialEquationProofObligation>
```

Public method placement for proof_obligations.

### proof_obligations

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsolutionfamily_proof_obligations_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolutionfamily_proof_obligations.71d39adfc19c"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolutionFamily method</p>

```rust signature
pub fn proof_obligations(
    &self,
) -> Result<Vec<PartialDifferentialEquationProofObligation>, ApiError>
```

Public method placement for proof_obligations.

### proof_obligations

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationverificationreport_proof_obligations_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationverificationreport_proof_obligations.6001ca6b3edd"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationVerificationReport method</p>

```rust signature
pub fn proof_obligations(
    &self,
) -> Vec<PartialDifferentialEquationProofObligation>
```

Public method placement for proof_obligations.

### provenance

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsolveresult_provenance_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolveresult_provenance.b2e3c6340ff3"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolveResult method</p>

```rust signature
pub fn provenance(
    &self,
) -> Option<PartialDifferentialEquationSolutionProvenance>
```

Public method placement for provenance.

### rational_from_decimal

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_rational_from_decimal_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_rational_from_decimal.f6490051ed73"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn rational_from_decimal(
    &self,
    text: &str,
) -> Result<Expression, ApiError>
```

Public method placement for rational_from_decimal.

### rational_value

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_rational_value_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_rational_value.3ed6fbe3f4fb"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn rational_value(&self, value: exact_rational) -> Expression
```

Public method placement for rational_value.

### real

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_real_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_real.a9dfb6b509dc"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn real(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Public method placement for real.

### real

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_symboldeclaration_real_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_symboldeclaration_real.a208a60d0b05"></a>
<p class="symi-entry-owner">api::SymbolDeclaration field</p>

```rust signature
pub real:
```

Public field placement for real.

### real_entries

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_real_entries_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_real_entries.ccace0bb5dbb"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn real_entries(
    &self,
    subject: &Matrix,
) -> Result<AssumptionProposition, ApiError>
```

Build a proposition asserting that every matrix entry is real.

### reconstruction

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationseparationresult_reconstruction_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationseparationresult_reconstruction.2f3e77bafab6"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSeparationResult method</p>

```rust signature
pub fn reconstruction(&self) -> Expression
```

Public method placement for reconstruction.

### records

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_completedoperationreport_records_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_completedoperationreport_records.87db67d6f90d"></a>
<p class="symi-entry-owner">api::CompletedOperationReport field</p>

```rust signature
pub records:
```

Public field placement for records.

### reduced_equation

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_reduced_equation_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsimilaritysolution_reduced_equation.fffb06c6cf3b"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSimilaritySolution method</p>

```rust signature
pub fn reduced_equation(&self) -> Option<Expression>
```

Public method placement for reduced_equation.

### release_host_cancellation_slot

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_host_cancellation_release_host_cancellation_slot_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_host_cancellation_release_host_cancellation_slot.8aa0bf067ca0"></a>
<p class="symi-entry-owner">api::host_cancellation re_export</p>

```rust signature
pub use crate::operation::release_host_cancellation_slot;
```

Public re_export placement for release_host_cancellation_slot.

### remainder

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationcoefficientdata_remainder_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcoefficientdata_remainder.7e8afe2ea8b3"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationCoefficientData method</p>

```rust signature
pub fn remainder(&self) -> Option<Expression>
```

Public method placement for remainder.

### request_host_cancellation

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_host_cancellation_request_host_cancellation_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_host_cancellation_request_host_cancellation.e6ac55c76353"></a>
<p class="symi-entry-owner">api::host_cancellation re_export</p>

```rust signature
pub use crate::operation::request_host_cancellation;
```

Public re_export placement for request_host_cancellation.

### required_rank

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsystemverificationreport_required_rank_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemverificationreport_required_rank.b031b3cd46b7"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemVerificationReport method</p>

```rust signature
pub fn required_rank(&self) -> usize
```

Public method placement for required_rank.

### reserve_host_cancellation_slot

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_host_cancellation_reserve_host_cancellation_slot_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_host_cancellation_reserve_host_cancellation_slot.2156c8e6ba4c"></a>
<p class="symi-entry-owner">api::host_cancellation re_export</p>

```rust signature
pub use crate::operation::reserve_host_cancellation_slot;
```

Public re_export placement for reserve_host_cancellation_slot.

### reset

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_reset_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_reset.c8b7f54803ce"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn reset(&self) -> Result<(), ApiError>
```

Public method placement for reset.

### residual

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationseparatedequation_residual_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationseparatedequation_residual.d092ea3d760b"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSeparatedEquation method</p>

```rust signature
pub fn residual(&self) -> Expression
```

Public method placement for residual.

### residual

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationverificationresidual_residual_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationverificationresidual_residual.9fd3c54180dc"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationVerificationResidual method</p>

```rust signature
pub fn residual(&self) -> Expression
```

Public method placement for residual.

### resolve

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_input_expressioninput_resolve_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_input_expressioninput_resolve.8f8b607049d0"></a>
<p class="symi-entry-owner">api::input::ExpressionInput method</p>

```rust signature
pub fn resolve(self, session: &Session) -> Result<Expression, ApiError>
```

Public method placement for resolve.

### resolve

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_options_orthogonalpolynomialbasis_resolve_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_options_orthogonalpolynomialbasis_resolve.9db79e15663b"></a>
<p class="symi-entry-owner">api::options::OrthogonalPolynomialBasis method</p>

```rust signature
pub fn resolve(&self, session: &Session) -> Result<core_basis, ApiError>
```

Public method placement for resolve.

### results

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_results_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results.2330d8e2a9d7"></a>
<p class="symi-entry-owner">api module</p>

```rust signature
pub mod results;
```

Public module placement for results.

### route

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_route_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_route.ac7473fa22e8"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveResult method</p>

```rust signature
pub fn route(&self) -> Option<OrdinaryDifferentialEquationSystemRoute>
```

Public method placement for route.

### second_equation

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationseparationresult_second_equation_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationseparationresult_second_equation.f753bc0d3c33"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSeparationResult method</p>

```rust signature
pub fn second_equation(
    &self,
) -> PartialDifferentialEquationSeparatedEquation
```

Public method placement for second_equation.

### second_order_principal_part

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationclassification_second_order_principal_part_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationclassification_second_order_principal_part.2f9660b224cc"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationClassification method</p>

```rust signature
pub fn second_order_principal_part(
    &self,
) -> Result<Option<PartialDifferentialEquationPrincipalPart>, ApiError>
```

Public method placement for second_order_principal_part.

### selected_mode

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_parallelism_parallelismcapability_selected_mode_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_parallelism_parallelismcapability_selected_mode.ce31d9778409"></a>
<p class="symi-entry-owner">api::parallelism::ParallelismCapability field</p>

```rust signature
pub selected_mode:
```

Public field placement for selected_mode.

### separate_partial_differential_equation

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_session_separate_partial_differential_equation_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_session_separate_partial_differential_equation.ddd0270a3d84"></a>
<p class="symi-entry-owner">api::partial_differential_equations::Session method</p>

```rust signature
pub fn separate_partial_differential_equation(
    &self,
    problem: &PartialDifferentialEquationProblem,
) -> Result<PartialDifferentialEquationSeparationResult, ApiError>
```

Public method placement for separate_partial_differential_equation.

### separation_constant

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationseparationresult_separation_constant_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationseparationresult_separation_constant.0efad90534ea"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSeparationResult method</p>

```rust signature
pub fn separation_constant(&self) -> Expression
```

Public method placement for separation_constant.

### serialization

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_serialization_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_serialization.1bd8e0614b2c"></a>
<p class="symi-entry-owner">api module</p>

```rust signature
pub mod serialization;
```

Public module placement for serialization.

### serialize_bulk

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_serialize_bulk_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_serialize_bulk.d28521f7215e"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn serialize_bulk(
    &self,
    targets: &[Expression],
) -> Result<Vec<BulkTextOutcome>, ApiError>
```

Public method placement for serialize_bulk.

### serialized_parse_error

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_serialized_parse_error_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_serialized_parse_error.4472bdcf87de"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use crate::serialize::parse::ParseError as serialized_parse_error;
```

Public re_export placement for serialized_parse_error.

### session

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_assumptionproposition_session_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_assumptionproposition_session.f8f1033ba167"></a>
<p class="symi-entry-owner">api::AssumptionProposition method</p>

```rust signature
pub fn session(&self) -> Session
```

Public method placement for session.

### session

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_assumptionscope_session_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_assumptionscope_session.89928e809f93"></a>
<p class="symi-entry-owner">api::AssumptionScope method</p>

```rust signature
pub fn session(&self) -> Session
```

Public method placement for session.

### session

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_circle2d_session_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_circle2d_session.b01531190087"></a>
<p class="symi-entry-owner">api::Circle2d method</p>

```rust signature
pub fn session(&self) -> Session
```

Public method placement for session.

### session

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_cylindricalalgebraicdecomposition_session_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_cylindricalalgebraicdecomposition_session.feb66305bd29"></a>
<p class="symi-entry-owner">api::CylindricalAlgebraicDecomposition method</p>

```rust signature
pub fn session(&self) -> Session
```

Public method placement for session.

### session

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_expression_session_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_expression_session.9e6d3de19465"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn session(&self) -> Session
```

Public method placement for session.

### session

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_matrix_session_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_matrix_session.802181f9e17e"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn session(&self) -> Session
```

Public method placement for session.

### session

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_point2d_session_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_point2d_session.77a989e69dbf"></a>
<p class="symi-entry-owner">api::Point2d method</p>

```rust signature
pub fn session(&self) -> Session
```

Public method placement for session.

### session

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_polygon2d_session_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_polygon2d_session.f9ac45376164"></a>
<p class="symi-entry-owner">api::Polygon2d method</p>

```rust signature
pub fn session(&self) -> Session
```

Public method placement for session.

### session

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_segment2d_session_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_segment2d_session.667a8ffcd829"></a>
<p class="symi-entry-owner">api::Segment2d method</p>

```rust signature
pub fn session(&self) -> Session
```

Public method placement for session.

### session

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_triangle2d_session_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_triangle2d_session.bec818cb629d"></a>
<p class="symi-entry-owner">api::Triangle2d method</p>

```rust signature
pub fn session(&self) -> Session
```

Public method placement for session.

### session

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_undefinedfunction_session_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_undefinedfunction_session.4174a3770f77"></a>
<p class="symi-entry-owner">api::UndefinedFunction method</p>

```rust signature
pub fn session(&self) -> Session
```

Public method placement for session.

### session

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationarbitraryfunction_session_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationarbitraryfunction_session.ed67ff9b4ef5"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationArbitraryFunction method</p>

```rust signature
pub fn session(&self) -> Session
```

Public method placement for session.

### session

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationclassification_session_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationclassification_session.a297ecbd5972"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationClassification method</p>

```rust signature
pub fn session(&self) -> Session
```

Public method placement for session.

### session

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationcoordinatechange_session_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcoordinatechange_session.b3d0c9d2f725"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationCoordinateChange method</p>

```rust signature
pub fn session(&self) -> Session
```

Public method placement for session.

### session

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_session_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_session.a6aa978f8ba0"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAction method</p>

```rust signature
pub fn session(&self) -> Session
```

Public method placement for session.

### session

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationpointsymmetrygenerator_session_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetrygenerator_session.9b7563fa6af7"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryGenerator method</p>

```rust signature
pub fn session(&self) -> Session
```

Public method placement for session.

### session

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationproblem_session_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproblem_session.181c2e95695e"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProblem method</p>

```rust signature
pub fn session(&self) -> Session
```

Public method placement for session.

### session

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsolutionfamily_session_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolutionfamily_session.d8c44de431c8"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolutionFamily method</p>

```rust signature
pub fn session(&self) -> Session
```

Public method placement for session.

### set_execution_mode

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_set_execution_mode_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_set_execution_mode.591d8405a9d8"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn set_execution_mode(&self, execution_mode: ExecutionMode)
```

Public method placement for set_execution_mode.

### set_fast_recognisers_enabled

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_set_fast_recognisers_enabled_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_set_fast_recognisers_enabled.30533410a78b"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn set_fast_recognisers_enabled(&self, enabled: bool)
```

Public method placement for set_fast_recognisers_enabled.

### set_operation_configuration

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_set_operation_configuration_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_set_operation_configuration.578f5c49e821"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn set_operation_configuration(
    &self,
    configuration: OperationConfiguration,
)
```

Public method placement for set_operation_configuration.

### set_operation_defaults

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_set_operation_defaults_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_set_operation_defaults.695d36be2715"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn set_operation_defaults(&self, defaults: OperationDefaults)
```

Public method placement for set_operation_defaults.

### set_presentation_search_enabled

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_set_presentation_search_enabled_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_set_presentation_search_enabled.1e5a19f4a422"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn set_presentation_search_enabled(&self, enabled: bool)
```

Public method placement for set_presentation_search_enabled.

### sets

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_sets_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_sets.b5a4c72573ba"></a>
<p class="symi-entry-owner">api module</p>

```rust signature
pub mod sets;
```

Public module placement for sets.

### signum

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_signum_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_signum.9e1d5add1b0a"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn signum(
    &self,
    argument: &Expression,
) -> Result<Expression, ApiError>
```

Public method placement for signum.

### similarity_variable

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_similarity_variable_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsimilaritysolution_similarity_variable.d7325f16a24b"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSimilaritySolution method</p>

```rust signature
pub fn similarity_variable(&self) -> Option<Expression>
```

Public method placement for similarity_variable.

### simplify_under_constraint

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_expression_simplify_under_constraint_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_expression_simplify_under_constraint.c98d839b3add"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn simplify_under_constraint(
    &self,
    constraint: &Expression,
) -> Result<Expression, ApiError>
```

Public method placement for simplify_under_constraint.

### simplify_under_constraint

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_simplify_under_constraint_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_simplify_under_constraint.8c1e9af8cb29"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn simplify_under_constraint(
    &self,
    target: &Expression,
    constraint: &Expression,
) -> Result<Expression, ApiError>
```

Public method placement for simplify_under_constraint.

### sine_integral

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_sine_integral_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_sine_integral.a6389eb5d184"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn sine_integral(
    &self,
    argument: &Expression,
) -> Result<Expression, ApiError>
```

Public method placement for sine_integral.

### singular_matrix

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_singular_matrix_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_singular_matrix.94933a3eb298"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn singular_matrix(
    &self,
    subject: &Matrix,
) -> Result<AssumptionProposition, ApiError>
```

Build a proposition asserting that a matrix is square and singular.

### solution

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_solution_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_solution.c5fafb37ab2b"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveResult method</p>

```rust signature
pub fn solution(&self) -> Option<Expression>
```

Public method placement for solution.

### solution

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsolveresult_solution_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolveresult_solution.80a0766fb548"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolveResult method</p>

```rust signature
pub fn solution(
    &self,
) -> Option<PartialDifferentialEquationSolutionFamily>
```

Public method placement for solution.

### solve_as_set

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_expression_solve_as_set_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_expression_solve_as_set.f7ad33914707"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn solve_as_set<'a, VariableType>(
    &self,
    variable: VariableType,
) -> Result<Expression, ApiError>
where
    VariableType: Into<VariableLike<'a>>,
```

Public method placement for solve_as_set.

### solve_as_set

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_solve_as_set_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_solve_as_set.1c359dce5b1b"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn solve_as_set<'a, VariableType>(
    &self,
    equation: &Expression,
    variable: VariableType,
) -> Result<Expression, ApiError>
where
    VariableType: Into<VariableLike<'a>>,
```

Public method placement for solve_as_set.

### solve_ordinary_differential_equation_by_laplace_transform

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_solving_session_solve_ordinary_differential_equation_by_laplace_transform_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_solving_session_solve_ordinary_differential_equation_by_laplace_transform.59da8e2c987a"></a>
<p class="symi-entry-owner">api::solving::Session method</p>

```rust signature
pub fn solve_ordinary_differential_equation_by_laplace_transform<'a, VariableType>(
    &self,
    equation: &Expression,
    dependent_function_call: &Expression,
    independent_variable: VariableType,
    condition_residuals: &[Expression],
) -> Result<Expression, ApiError>
where
    VariableType: Into<VariableLike<'a>>,
```

Public method placement for solve_ordinary_differential_equation_by_laplace_transform.

### solve_ordinary_differential_equation_with_conditions

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_solving_session_solve_ordinary_differential_equation_with_conditions_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_solving_session_solve_ordinary_differential_equation_with_conditions.f47a5ad07ece"></a>
<p class="symi-entry-owner">api::solving::Session method</p>

```rust signature
pub fn solve_ordinary_differential_equation_with_conditions<'a, VariableType>(
    &self,
    equation: &Expression,
    dependent_function_call: &Expression,
    independent_variable: VariableType,
    condition_residuals: &[Expression],
) -> Result<Expression, ApiError>
where
    VariableType: Into<VariableLike<'a>>,
```

Public method placement for solve_ordinary_differential_equation_with_conditions.

### solve_partial_differential_equation

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_session_solve_partial_differential_equation_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_session_solve_partial_differential_equation.7580cd6977d1"></a>
<p class="symi-entry-owner">api::partial_differential_equations::Session method</p>

```rust signature
pub fn solve_partial_differential_equation(
    &self,
    problem: &PartialDifferentialEquationProblem,
    method: PartialDifferentialEquationMethod,
) -> Result<PartialDifferentialEquationSolveResult, ApiError>
```

Public method placement for solve_partial_differential_equation.

### solve_partial_differential_equation_with_options

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_session_solve_partial_differential_equation_with_options_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_session_solve_partial_differential_equation_with_options.b0b093a38ed9"></a>
<p class="symi-entry-owner">api::partial_differential_equations::Session method</p>

```rust signature
pub fn solve_partial_differential_equation_with_options(
    &self,
    problem: &PartialDifferentialEquationProblem,
    options: &PartialDifferentialEquationSolveOptions,
) -> Result<PartialDifferentialEquationSolveResult, ApiError>
```

Public method placement for solve_partial_differential_equation_with_options.

### solve_partial_differential_equation_with_transform_axes

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_session_solve_partial_differential_equation_with_transform_axes_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_session_solve_partial_differential_equation_with_transform_axes.96917e57c742"></a>
<p class="symi-entry-owner">api::partial_differential_equations::Session method</p>

```rust signature
pub fn solve_partial_differential_equation_with_transform_axes(
    &self,
    problem: &PartialDifferentialEquationProblem,
    method: PartialDifferentialEquationMethod,
    transform_axes: &[PartialDifferentialEquationTransformAxisOption],
) -> Result<PartialDifferentialEquationSolveResult, ApiError>
```

Public method placement for solve_partial_differential_equation_with_transform_axes.

### solve_partial_differential_equation_with_transform_axis_specifications

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_session_solve_partial_differential_equation_with_transform_axis_specifications_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_session_solve_partial_differential_equation_with_transform_axis_specifications.7adb19f35a38"></a>
<p class="symi-entry-owner">api::partial_differential_equations::Session method</p>

```rust signature
pub fn solve_partial_differential_equation_with_transform_axis_specifications(
    &self,
    problem: &PartialDifferentialEquationProblem,
    method: PartialDifferentialEquationMethod,
    transform_axis_specifications: Vec<String>,
) -> Result<PartialDifferentialEquationSolveResult, ApiError>
```

Public method placement for solve_partial_differential_equation_with_transform_axis_specifications.

### solving

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_solving_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_solving.6bef69d48bfe"></a>
<p class="symi-entry-owner">api module</p>

```rust signature
pub mod solving;
```

Public module placement for solving.

### source_variable_name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationtransformaxisoption_source_variable_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformaxisoption_source_variable_name.5a2985fb95df"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformAxisOption method</p>

```rust signature
pub fn source_variable_name(&self) -> &str
```

Public method placement for source_variable_name.

### source_variables

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationcoordinatechange_source_variables_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcoordinatechange_source_variables.e62ba6c6957c"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationCoordinateChange method</p>

```rust signature
pub fn source_variables(&self) -> Result<Vec<String>, ApiError>
```

Public method placement for source_variables.

### square_matrix

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_square_matrix_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_square_matrix.0a9931cc320f"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn square_matrix(
    &self,
    subject: &Matrix,
) -> Result<AssumptionProposition, ApiError>
```

Build a proposition asserting that a matrix is square.

### stable_text

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_assumptionproposition_stable_text_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_assumptionproposition_stable_text.4dde784fab76"></a>
<p class="symi-entry-owner">api::AssumptionProposition method</p>

```rust signature
pub fn stable_text(&self) -> Result<String, ApiError>
```

Public method placement for stable_text.

### strategy

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationseparationresult_strategy_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationseparationresult_strategy.b348b0bf4128"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSeparationResult method</p>

```rust signature
pub fn strategy(&self) -> PartialDifferentialEquationSeparationStrategy
```

Public method placement for strategy.

### structural_hash

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_expression_structural_hash_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_expression_structural_hash.e344a3bb6e06"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn structural_hash(&self) -> u64
```

Public method placement for structural_hash.

### substitute_bulk

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_substitute_bulk_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_substitute_bulk.35ba8d7ed1b5"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn substitute_bulk(
    &self,
    targets: &[Expression],
    variable: &Expression,
    value: &Expression,
) -> Result<Vec<BulkExpressionOutcome>, ApiError>
```

Public method placement for substitute_bulk.

### subtract

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_expression_subtract_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_expression_subtract.a1ad15afb2f1"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn subtract(
    &self,
    other: &Expression,
) -> Result<Expression, ApiError>
```

Public method placement for subtract.

### subtract

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_matrix_subtract_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_matrix_subtract.9c6f2565e43b"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn subtract(&self, other: &Matrix) -> Result<Matrix, ApiError>
```

Public method placement for subtract.

### subtract

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_subtract_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_subtract.f3fc4dd82d5e"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn subtract(
    &self,
    left: &Expression,
    right: &Expression,
) -> Result<Expression, ApiError>
```

Public method placement for subtract.

### symmetric_matrix

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_symmetric_matrix_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_symmetric_matrix.1873af1015d0"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn symmetric_matrix(
    &self,
    subject: &Matrix,
) -> Result<AssumptionProposition, ApiError>
```

Build a proposition asserting that a matrix equals its transpose.

### take_completed_operation_report

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_take_completed_operation_report_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_take_completed_operation_report.c84f6b628f83"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn take_completed_operation_report(
    &self,
) -> CompletedOperationReport
```

Public method placement for take_completed_operation_report.

### take_operation_records

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_take_operation_records_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_take_operation_records.75e98234f3e7"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn take_operation_records(&self) -> Vec<OperationRecord>
```

Public method placement for take_operation_records.

### target_dependent_function

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationcoordinatechange_target_dependent_function_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcoordinatechange_target_dependent_function.e0a7f5ceaa5f"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationCoordinateChange method</p>

```rust signature
pub fn target_dependent_function(&self) -> Result<String, ApiError>
```

Public method placement for target_dependent_function.

### target_problem

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationtransformationresult_target_problem_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationresult_target_problem.dc9c65d28d15"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformationResult method</p>

```rust signature
pub fn target_problem(
    &self,
) -> Option<PartialDifferentialEquationProblem>
```

Public method placement for target_problem.

### target_variables

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationcoordinatechange_target_variables_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcoordinatechange_target_variables.257eb130434b"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationCoordinateChange method</p>

```rust signature
pub fn target_variables(&self) -> Result<Vec<String>, ApiError>
```

Public method placement for target_variables.

### transcendental

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_transcendental_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_transcendental.d066b1b8a0c8"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn transcendental(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Public method placement for transcendental.

### transform_axes

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsolveoptions_transform_axes_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolveoptions_transform_axes.04c4a1c9e2d4"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolveOptions method</p>

```rust signature
pub fn transform_axes(
    &self,
) -> &[PartialDifferentialEquationTransformAxisOption]
```

Public method placement for transform_axes.

### transform_axis_kind

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationtransformaxisoption_transform_axis_kind_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformaxisoption_transform_axis_kind.0949f589db0e"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformAxisOption method</p>

```rust signature
pub fn transform_axis_kind(
    &self,
) -> PartialDifferentialEquationTransformAxisKind
```

Public method placement for transform_axis_kind.

### transform_variable_name

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationtransformaxisoption_transform_variable_name_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformaxisoption_transform_variable_name.51adcf09b461"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformAxisOption method</p>

```rust signature
pub fn transform_variable_name(&self) -> Option<&str>
```

Public method placement for transform_variable_name.

### transformation_decline

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationcanonicalizationresult_transformation_decline_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcanonicalizationresult_transformation_decline.ee103fe54ecc"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationCanonicalizationResult method</p>

```rust signature
pub fn transformation_decline(
    &self,
) -> Option<PartialDifferentialEquationTransformationDecline>
```

Public method placement for transformation_decline.

### transformed

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationtransformationresult_transformed_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationresult_transformed.0b2e82926dcb"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformationResult method</p>

```rust signature
pub fn transformed(&self) -> bool
```

Public method placement for transformed.

### transformed_coordinates

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_transformed_coordinates_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_transformed_coordinates.c1cbac3cfd8d"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationPointSymmetryAction method</p>

```rust signature
pub fn transformed_coordinates(&self) -> Vec<Expression>
```

Public method placement for transformed_coordinates.

### transformed_governing_residual

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationtransformationverificationreport_transformed_governing_residual_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationverificationreport_transformed_governing_residual.456735693b59"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformationVerificationReport method</p>

```rust signature
pub fn transformed_governing_residual(&self) -> Expression
```

Public method placement for transformed_governing_residual.

### unavailable_reason

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_parallelism_parallelismcapability_unavailable_reason_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_parallelism_parallelismcapability_unavailable_reason.3f95ef352ce9"></a>
<p class="symi-entry-owner">api::parallelism::ParallelismCapability field</p>

```rust signature
pub unavailable_reason:
```

Public field placement for unavailable_reason.

### unitary_matrix

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_unitary_matrix_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_unitary_matrix.8fc55fe6e6de"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn unitary_matrix(
    &self,
    subject: &Matrix,
) -> Result<AssumptionProposition, ApiError>
```

Build a proposition asserting that a square matrix is unitary.

### upper_triangular_matrix

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_upper_triangular_matrix_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_upper_triangular_matrix.c554627e13b3"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn upper_triangular_matrix(
    &self,
    subject: &Matrix,
) -> Result<AssumptionProposition, ApiError>
```

Build a proposition asserting that a matrix is upper triangular.

### validate_assumption_proposition

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_validate_assumption_proposition_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_validate_assumption_proposition.7fb68d9d2c8e"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn validate_assumption_proposition(
    &self,
    target: &AssumptionProposition,
) -> Result<(), ApiError>
```

Public method placement for validate_assumption_proposition.

### validate_circle_2d_object

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_validate_circle_2d_object_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_validate_circle_2d_object.19c6efde362d"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn validate_circle_2d_object(
    &self,
    target: &Circle2d,
) -> Result<(), ApiError>
```

Public method placement for validate_circle_2d_object.

### validate_cylindrical_algebraic_decomposition_object

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_validate_cylindrical_algebraic_decomposition_object_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_validate_cylindrical_algebraic_decomposition_object.52b6f06f720d"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn validate_cylindrical_algebraic_decomposition_object(
    &self,
    target: &CylindricalAlgebraicDecomposition,
) -> Result<(), ApiError>
```

Public method placement for validate_cylindrical_algebraic_decomposition_object.

### validate_expression

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_validate_expression_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_validate_expression.b54f4ae2a955"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn validate_expression(
    &self,
    target: &Expression,
) -> Result<(), ApiError>
```

Public method placement for validate_expression.

### validate_generation

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_validate_generation_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_validate_generation.e72fcf8c13dd"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn validate_generation(
    &self,
    generation: u64,
) -> Result<(), ApiError>
```

Public method placement for validate_generation.

### validate_matrix_object

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_validate_matrix_object_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_validate_matrix_object.a95bf225f1cd"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn validate_matrix_object(
    &self,
    target: &Matrix,
) -> Result<(), ApiError>
```

Public method placement for validate_matrix_object.

### validate_point_2d_object

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_validate_point_2d_object_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_validate_point_2d_object.add1fee81872"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn validate_point_2d_object(
    &self,
    target: &Point2d,
) -> Result<(), ApiError>
```

Public method placement for validate_point_2d_object.

### validate_polygon_2d_object

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_validate_polygon_2d_object_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_validate_polygon_2d_object.bd27507d5cc2"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn validate_polygon_2d_object(
    &self,
    target: &Polygon2d,
) -> Result<(), ApiError>
```

Public method placement for validate_polygon_2d_object.

### validate_segment_2d_object

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_validate_segment_2d_object_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_validate_segment_2d_object.e05b1e81d091"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn validate_segment_2d_object(
    &self,
    target: &Segment2d,
) -> Result<(), ApiError>
```

Public method placement for validate_segment_2d_object.

### validate_session_object

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_validate_session_object_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_validate_session_object.d3b9b21c2514"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn validate_session_object(
    &self,
    generation: u64,
    object_session: &Session,
    object_generation: u64,
) -> Result<(), ApiError>
```

Public method placement for validate_session_object.

### validate_triangle_2d_object

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_validate_triangle_2d_object_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_validate_triangle_2d_object.8bd60d305883"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn validate_triangle_2d_object(
    &self,
    target: &Triangle2d,
) -> Result<(), ApiError>
```

Public method placement for validate_triangle_2d_object.

### validate_undefined_function_object

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_validate_undefined_function_object_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_validate_undefined_function_object.442e90b7631e"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn validate_undefined_function_object(
    &self,
    target: &UndefinedFunction,
) -> Result<(), ApiError>
```

Public method placement for validate_undefined_function_object.

### value

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_parallelism_bulkexpressionoutcome_value_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_parallelism_bulkexpressionoutcome_value.5e821544b58e"></a>
<p class="symi-entry-owner">api::parallelism::BulkExpressionOutcome method</p>

```rust signature
pub fn value(&self) -> Option<Expression>
```

Public method placement for value.

### value

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_parallelism_bulktextoutcome_value_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_parallelism_bulktextoutcome_value.cff0adc3debe"></a>
<p class="symi-entry-owner">api::parallelism::BulkTextOutcome method</p>

```rust signature
pub fn value(&self) -> Option<String>
```

Public method placement for value.

### value

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_results_definiteintegrationresult_value_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_definiteintegrationresult_value.1f1a4c8d7f0a"></a>
<p class="symi-entry-owner">api::results::DefiniteIntegrationResult method</p>

```rust signature
pub fn value(&self) -> Option<Expression>
```

Public method placement for value.

### value

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_results_numericdefiniteintegrationresult_value_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_numericdefiniteintegrationresult_value.d0e154d26fc7"></a>
<p class="symi-entry-owner">api::results::NumericDefiniteIntegrationResult method</p>

```rust signature
pub fn value(&self) -> Option<(f64, f64)>
```

Public method placement for value.

### value

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_results_piecewisebranch_value_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_piecewisebranch_value.ab78d16de436"></a>
<p class="symi-entry-owner">api::results::PiecewiseBranch method</p>

```rust signature
pub fn value(&self) -> Expression
```

Public method placement for value.

### variable_identifiers

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_variable_identifiers_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_variable_identifiers.dcc3cb9dc75f"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn variable_identifiers<'a, IteratorType, VariableType>(
    &self,
    variables: IteratorType,
) -> Result<Vec<crate::symbol::SymbolIdentifier>, ApiError>
where
    IteratorType: IntoIterator<Item = VariableType>,
    VariableType: Into<VariableLike<'a>>,
```

Public method placement for variable_identifiers.

### verification

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_verification_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_verification.c3501e58ad3e"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveResult method</p>

```rust signature
pub fn verification(
    &self,
) -> Option<OrdinaryDifferentialEquationVerificationVerdict>
```

Public method placement for verification.

### verification

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_verification_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_verification.130b6dbdde8e"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveResult method</p>

```rust signature
pub fn verification(
    &self,
) -> Option<OrdinaryDifferentialEquationVerificationVerdict>
```

Public method placement for verification.

### verification

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationseparationresult_verification_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationseparationresult_verification.2b503dc66447"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSeparationResult method</p>

```rust signature
pub fn verification(
    &self,
) -> PartialDifferentialEquationVerificationVerdict
```

Public method placement for verification.

### verification

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsolveresult_verification_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolveresult_verification.55194f58b824"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolveResult method</p>

```rust signature
pub fn verification(
    &self,
) -> Option<PartialDifferentialEquationVerificationReport>
```

Public method placement for verification.

### verify_partial_differential_equation_coordinate_transformation

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_session_verify_partial_differential_equation_coordinate_transformation_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_session_verify_partial_differential_equation_coordinate_transformation.290b26e50ab4"></a>
<p class="symi-entry-owner">api::partial_differential_equations::Session method</p>

```rust signature
pub fn verify_partial_differential_equation_coordinate_transformation(
    &self,
    problem: &PartialDifferentialEquationProblem,
    transformation: &PartialDifferentialEquationTransformationResult,
) -> Result<PartialDifferentialEquationTransformationVerificationReport, ApiError>
```

Public method placement for verify_partial_differential_equation_coordinate_transformation.

### verify_partial_differential_equation_solution

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_session_verify_partial_differential_equation_solution_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_session_verify_partial_differential_equation_solution.0e65039416d6"></a>
<p class="symi-entry-owner">api::partial_differential_equations::Session method</p>

```rust signature
pub fn verify_partial_differential_equation_solution(
    &self,
    problem: &PartialDifferentialEquationProblem,
    solution: &PartialDifferentialEquationSolutionFamily,
) -> Result<PartialDifferentialEquationVerificationReport, ApiError>
```

Public method placement for verify_partial_differential_equation_solution.

### weight

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_weight_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsimilaritysolution_weight.b5785a4483b9"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSimilaritySolution method</p>

```rust signature
pub fn weight(&self) -> Option<Expression>
```

Public method placement for weight.

### worker_count

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_parallelism_parallelismcapability_worker_count_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_parallelism_parallelismcapability_worker_count.f5274b8258c2"></a>
<p class="symi-entry-owner">api::parallelism::ParallelismCapability field</p>

```rust signature
pub worker_count:
```

Public field placement for worker_count.

### zero

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_zero_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_zero.712a12abe984"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn zero(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Public method placement for zero.

### zero_matrix

<a id="entry-presentation_rust_object_model_capability_rust_native_rust_api_session_zero_matrix_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_zero_matrix.a2c72f8dc46d"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn zero_matrix(
    &self,
    subject: &Matrix,
) -> Result<AssumptionProposition, ApiError>
```

Build a proposition asserting that every matrix entry is zero.

