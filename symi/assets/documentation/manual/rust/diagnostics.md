# Diagnostics and outcomes

Public failures use a shared diagnostic taxonomy:

| Category | Meaning |
|---|---|
| `wrong_host_type` | host value has the wrong kind |
| `invalid_exact_conversion` | conversion would be lossy or ambiguous |
| `wrong_collection_shape_or_length` | nesting, dimensions, or paired lengths are invalid |
| `wrong_expression_kind` | a symbolic value is not the required structural kind |
| `context_mismatch` | objects have different owners |
| `stale_object` | a reset or free invalidated the handle |
| `invalid_option` | closed-vocabulary spelling is invalid |
| `mathematical_domain_error` | input is outside the operation's domain |
| `unsupported_or_declined_computation` | the operation could not produce a supported result |
| `indeterminate_proof` | a proposition was neither proved nor disproved |
| `resource_budget_exhaustion` | an explicit materialization or computation budget was reached |
| `internal_verification_failure` | an invariant or result certification failed |

Messages name the operation and parameter path, describe the received and
expected values, and provide a hint when a reliable remediation exists.
Parser diagnostics include a source excerpt and caret.

Python errors use the nearest built-in family while adding the attributes
`category`, `operation`, `parameter_path`, `received`, `expected`, and `hint`.
JavaScript facade errors derive from `SymiError`; specialized subclasses
distinguish type, context, domain, resource, and internal failures. Rust
returns `ApiError`, which implements `std::error::Error` and produces the same
structured diagnostic record.

Invalid input is never encoded as a mathematical `undefined`, empty list, or
`None`. Conversely, a declined computation is not automatically an exception:
operations whose mathematical contract permits an unevaluated result return
that expression, and algorithms with distinct outcome states use structured
`solved`, `empty`, `positive_dimensional`, and `declined` variants. A
three-valued logical `None`/`null` means unknown, not malformed input.

## Example

Failures carry a stable category, parameter path, and hint.

```rust
use symi::api::prelude::*;

fn main() {
    let first = Session::new();
    let second = Session::new();
    let x = first.symbol("x");
    if let Err(error) = second.differentiate(&x, "x") {
        println!("{:?}", error.category());
        println!("{:?}", error.diagnostic("differentiate"));
    }
}
```


## Additional API

### api::serialized_parse_error

<a id="entry-presentation_rust_native_re_export_api_serialized_parse_error"></a>
<a id="placement-placement.rust.native_rust.api_serialized_parse_error.4472bdcf87de"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use crate::serialize::parse::ParseError as serialized_parse_error;
```

Re-exports the serialized-object parse error type reported by object parsing.

### ApiError

<a id="entry-presentation_rust_api_apierror"></a>
<a id="placement-placement.rust.native_rust.api_apierror.951a1018882e"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum ApiError
```

Public native enumeration named `api_error`.

#### ApiError.AssumptionConflict

<a id="entry-presentation_rust_api_apierror_assumptionconflict"></a>
<a id="placement-placement.rust.native_rust.api_apierror_assumptionconflict.8d8efd563b1d"></a>
<p class="symi-entry-owner">api::ApiError variant</p>

```rust signature
AssumptionConflict(String)
```

Represents a rejected assumption mutation.

#### ApiError.AssumptionResourceExhausted

<a id="entry-presentation_rust_api_apierror_assumptionresourceexhausted"></a>
<a id="placement-placement.rust.native_rust.api_apierror_assumptionresourceexhausted.e992b8c60a0c"></a>
<p class="symi-entry-owner">api::ApiError variant</p>

```rust signature
AssumptionResourceExhausted,
```

Represents an assumption query or mutation beyond the bounded engine.

#### ApiError.ComputationDeclined

<a id="entry-presentation_rust_api_apierror_computationdeclined"></a>
<a id="placement-placement.rust.native_rust.api_apierror_computationdeclined.bd73f20e2488"></a>
<p class="symi-entry-owner">api::ApiError variant</p>

```rust signature
ComputationDeclined,
```

Represents the `computation_declined` case.

#### ApiError.ContextMismatch

<a id="entry-presentation_rust_api_apierror_contextmismatch"></a>
<a id="placement-placement.rust.native_rust.api_apierror_contextmismatch.b77bde918b68"></a>
<p class="symi-entry-owner">api::ApiError variant</p>

```rust signature
ContextMismatch,
```

Represents the `context_mismatch` case.

#### ApiError.ExpressionRequired

<a id="entry-presentation_rust_api_apierror_expressionrequired"></a>
<a id="placement-placement.rust.native_rust.api_apierror_expressionrequired.41d112b35431"></a>
<p class="symi-entry-owner">api::ApiError variant</p>

```rust signature
ExpressionRequired,
```

Represents the `expression_required` case.

#### ApiError.GenerationExhausted

<a id="entry-presentation_rust_api_apierror_generationexhausted"></a>
<a id="placement-placement.rust.native_rust.api_apierror_generationexhausted.ce4b9a8939bf"></a>
<p class="symi-entry-owner">api::ApiError variant</p>

```rust signature
GenerationExhausted,
```

Represents the `generation_exhausted` case.

#### ApiError.GeometryError

<a id="entry-presentation_rust_api_apierror_geometryerror"></a>
<a id="placement-placement.rust.native_rust.api_apierror_geometryerror.a8dd7e05851c"></a>
<p class="symi-entry-owner">api::ApiError variant</p>

```rust signature
GeometryError(GeometryError)
```

Represents the `geometry_error` case.

#### ApiError.InconsistentConstraint

<a id="entry-presentation_rust_api_apierror_inconsistentconstraint"></a>
<a id="placement-placement.rust.native_rust.api_apierror_inconsistentconstraint.116fc0871a8e"></a>
<p class="symi-entry-owner">api::ApiError variant</p>

```rust signature
InconsistentConstraint,
```

Represents the `inconsistent_constraint` case.

#### ApiError.IntegerRequired

<a id="entry-presentation_rust_api_apierror_integerrequired"></a>
<a id="placement-placement.rust.native_rust.api_apierror_integerrequired.9f351a0e69a4"></a>
<p class="symi-entry-owner">api::ApiError variant</p>

```rust signature
IntegerRequired,
```

Represents an operation that requires an exact integer expression.

#### ApiError.InvalidAssumption

<a id="entry-presentation_rust_api_apierror_invalidassumption"></a>
<a id="placement-placement.rust.native_rust.api_apierror_invalidassumption.46d9163ba2d5"></a>
<p class="symi-entry-owner">api::ApiError variant</p>

```rust signature
InvalidAssumption,
```

Represents an invalid assumption wrapper.

#### ApiError.InvalidConstraint

<a id="entry-presentation_rust_api_apierror_invalidconstraint"></a>
<a id="placement-placement.rust.native_rust.api_apierror_invalidconstraint.6fb962c45b7e"></a>
<p class="symi-entry-owner">api::ApiError variant</p>

```rust signature
InvalidConstraint,
```

Represents the `invalid_constraint` case.

#### ApiError.LatexParseError

<a id="entry-presentation_rust_api_apierror_latexparseerror"></a>
<a id="placement-placement.rust.native_rust.api_apierror_latexparseerror.30158bc7538a"></a>
<p class="symi-entry-owner">api::ApiError variant</p>

```rust signature
LatexParseError(String)
```

Represents input that the canonical LaTeX dialect could not parse.

#### ApiError.LogicalExpressionRequired

<a id="entry-presentation_rust_api_apierror_logicalexpressionrequired"></a>
<a id="placement-placement.rust.native_rust.api_apierror_logicalexpressionrequired.87cb857b2cb1"></a>
<p class="symi-entry-owner">api::ApiError variant</p>

```rust signature
LogicalExpressionRequired,
```

Represents the `logical_expression_required` case.

#### ApiError.MatrixError

<a id="entry-presentation_rust_api_apierror_matrixerror"></a>
<a id="placement-placement.rust.native_rust.api_apierror_matrixerror.d593d0655271"></a>
<p class="symi-entry-owner">api::ApiError variant</p>

```rust signature
MatrixError(MatrixError)
```

Represents the `MatrixError` case.

#### ApiError.OperationCancelled

<a id="entry-presentation_rust_api_apierror_operationcancelled"></a>
<a id="placement-placement.rust.native_rust.api_apierror_operationcancelled.10e87e6684cb"></a>
<p class="symi-entry-owner">api::ApiError variant</p>

```rust signature
OperationCancelled,
```

Represents an operation cancelled by its caller.

#### ApiError.ParallelismInitializationFailed

<a id="entry-presentation_rust_api_apierror_parallelisminitializationfailed"></a>
<a id="placement-placement.rust.native_rust.api_apierror_parallelisminitializationfailed.b5f5408f3837"></a>
<p class="symi-entry-owner">api::ApiError variant</p>

```rust signature
ParallelismInitializationFailed,
```

Represents a parallel backend that failed to initialize.

#### ApiError.ParallelismNotCompiled

<a id="entry-presentation_rust_api_apierror_parallelismnotcompiled"></a>
<a id="placement-placement.rust.native_rust.api_apierror_parallelismnotcompiled.f1a8c981e3dd"></a>
<p class="symi-entry-owner">api::ApiError variant</p>

```rust signature
ParallelismNotCompiled,
```

Represents a target without a compiled parallel backend.

#### ApiError.ParallelismRequiresAsyncInitialization

<a id="entry-presentation_rust_api_apierror_parallelismrequiresasyncinitialization"></a>
<a id="placement-placement.rust.native_rust.api_apierror_parallelismrequiresasyncinitialization.5891e2aea66a"></a>
<p class="symi-entry-owner">api::ApiError variant</p>

```rust signature
ParallelismRequiresAsyncInitialization,
```

Represents atomic WebAssembly that must be initialized through its asynchronous adapter.

#### ApiError.ParseError

<a id="entry-presentation_rust_api_apierror_parseerror"></a>
<a id="placement-placement.rust.native_rust.api_apierror_parseerror.630734a69a9c"></a>
<p class="symi-entry-owner">api::ApiError variant</p>

```rust signature
ParseError(ParseError)
```

Represents the `parse_error` case.

#### ApiError.PartialDifferentialEquationProblem

<a id="entry-presentation_rust_api_apierror_partialdifferentialequationproblem"></a>
<a id="placement-placement.rust.native_rust.api_apierror_partialdifferentialequationproblem.48ff0de0c1dd"></a>
<p class="symi-entry-owner">api::ApiError variant</p>

```rust signature
PartialDifferentialEquationProblem(PartialDifferentialEquationProblemError)
```

Represents a malformed scalar partial differential equation problem.

#### ApiError.PolynomialRequired

<a id="entry-presentation_rust_api_apierror_polynomialrequired"></a>
<a id="placement-placement.rust.native_rust.api_apierror_polynomialrequired.570dce97a5bf"></a>
<p class="symi-entry-owner">api::ApiError variant</p>

```rust signature
PolynomialRequired,
```

Represents the `polynomial_required` case.

#### ApiError.SerializedParseError

<a id="entry-presentation_rust_api_apierror_serializedparseerror"></a>
<a id="placement-placement.rust.native_rust.api_apierror_serializedparseerror.3f59a4d39f54"></a>
<p class="symi-entry-owner">api::ApiError variant</p>

```rust signature
SerializedParseError(String)
```

Represents input that the canonical serialized-object grammar could not parse.

#### ApiError.StaleObject

<a id="entry-presentation_rust_api_apierror_staleobject"></a>
<a id="placement-placement.rust.native_rust.api_apierror_staleobject.62dd826bad01"></a>
<p class="symi-entry-owner">api::ApiError variant</p>

```rust signature
StaleObject,
```

Represents the `stale_object` case.

#### ApiError.SymbolRequired

<a id="entry-presentation_rust_api_apierror_symbolrequired"></a>
<a id="placement-placement.rust.native_rust.api_apierror_symbolrequired.d8c1a8d2f675"></a>
<p class="symi-entry-owner">api::ApiError variant</p>

```rust signature
SymbolRequired,
```

Represents the `symbol_required` case.

#### ApiError.ZeroDenominator

<a id="entry-presentation_rust_api_apierror_zerodenominator"></a>
<a id="placement-placement.rust.native_rust.api_apierror_zerodenominator.47a42885c911"></a>
<p class="symi-entry-owner">api::ApiError variant</p>

```rust signature
ZeroDenominator,
```

Represents the `zero_denominator` case.

#### ApiError.category

<a id="entry-presentation_rust_api_apierror_category"></a>
<a id="placement-placement.rust.native_rust.api_apierror_category.9e363cd72dd1"></a>
<p class="symi-entry-owner">api::ApiError method</p>

```rust signature
pub fn category(&self) -> DiagnosticCategory
```

Provides the `category` operation on this native type.

#### ApiError.diagnostic

<a id="entry-presentation_rust_api_apierror_diagnostic"></a>
<a id="placement-placement.rust.native_rust.api_apierror_diagnostic.63764bb0d720"></a>
<p class="symi-entry-owner">api::ApiError method</p>

```rust signature
pub fn diagnostic(&self, operation: &str) -> Diagnostic
```

Provides the `diagnostic` operation on this native type.

### Diagnostic

<a id="entry-presentation_rust_api_diagnostic"></a>
<a id="placement-placement.rust.native_rust.api_diagnostic.ab2b304f6c92"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use crate::diagnostics::Diagnostic;
```

Re-exports the canonical diagnostic record and its category vocabulary.

### DiagnosticCategory

<a id="entry-presentation_rust_api_diagnosticcategory"></a>
<a id="placement-placement.rust.native_rust.api_diagnosticcategory.6bb9c9b2e86d"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use crate::diagnostics::DiagnosticCategory;
```

Re-exports the canonical diagnostic record and its category vocabulary.

### GeometryError

<a id="entry-presentation_rust_api_geometryerror"></a>
<a id="placement-placement.rust.native_rust.api_geometryerror.18a8acf3c6ca"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use crate::geometry::GeometryError;
```

Re-exports the exact-geometry error type carried by `api_error`.

### MatrixError

<a id="entry-presentation_rust_api_matrixerror"></a>
<a id="placement-placement.rust.native_rust.api_matrixerror.47a6016f85ff"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use crate::matrix::MatrixError;
```

Re-exports the matrix error type carried by `api_error`.

### ParseError

<a id="entry-presentation_rust_api_parseerror"></a>
<a id="placement-placement.rust.native_rust.api_parseerror.4e012c26c04e"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use crate::interactive::parser::ParseError;
```

Re-exports the interactive-parser error type carried by `api_error`.

### VectorCalculusError

<a id="entry-presentation_rust_api_vectorcalculuserror"></a>
<a id="placement-placement.rust.native_rust.api_vectorcalculuserror.19ebd9726717"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use crate::vector_calculus::VectorCalculusError;
```

Re-exports the vector-calculus error type reported by vector-calculus operations.

