# Structured results

Some operations return a result record rather than one expression. A record
keeps the mathematical value separate from information needed to interpret it:
whether an answer is complete, whether a request was declined, the order of a
decomposition, or a certified error estimate. Inspect that information before
using a field as though it were an unconditional answer.

Python commonly represents a record as a mapping or a small binding class.
The JavaScript/WASM surface uses a class with getters. Kotlin and Swift use
generated `Uniffi...` objects and throwing accessors. Native Rust returns a
typed result model. The operation page is the authority for the exact host
shape; the same mathematical field can have a different host spelling.

## Outcome records

`DefiniteIntegrationResult` distinguishes three cases. Its `verdict` is
`evaluated`, `divergent`, or `declined`; `value` exists only for `evaluated`.
`divergence_direction` is meaningful only for a proved one-sided signed
infinity, and `decline_reason` is meaningful only for `declined`. Code must
branch on `verdict`, rather than treating a missing `value` as zero or as a
convergent integral. See [definite integration](calculus.md#definiteintegrationresult).

Solver and optimization outcomes similarly separate returned candidates from
completeness. A `complete` flag says whether the operation proved that the
published candidate list covers its documented domain. It does not turn an
incomplete list into an empty solution set. `PolynomialSystemSolution` keeps
assignments and its solver verdict together; `OptimizationOutcome` keeps its
critical points, their classifications, and its verdict together. See
[solving](solving.md) and [optimization](optimization.md).

## Ordered components and paired fields

Some records encode a correspondence by position. `Eigenpair` has one
eigenvalue and the vectors associated with it. `RootMultiplicity` pairs a root
with its multiplicity. `CriticalPoint` keeps `multiplier_variables` and
`multiplier_values` in the same order. Do not sort or filter one member of one
of these pairs without applying the same transformation to its counterpart.

When a result exposes a lower and upper endpoint, such as an isolating interval,
the endpoints are exact symbolic values. They are bounds, not decimal samples;
use the associated operation's contract to learn whether the interval is open,
closed, or an enclosure with additional guarantees.

## A result-handling workflow

The following Python example checks the outcome before reading its optional
value. The same ordering applies in every language: call the producer, inspect
its status, then consume the fields documented for that status.


Use the generated [result-type index](result-type-index.md) to locate every
published result type and its producer. Accessor entries link back to their
owner-specific operation pages; identical field names on different result types
do not share a result contract.

## Additional API

### api::results

<a id="entry-presentation_rust_native_module_api_results"></a>
<a id="placement-placement.rust.native_rust.api_results.2330d8e2a9d7"></a>
<p class="symi-entry-owner">api module</p>

```rust signature
pub mod results;
```

Binding-neutral structured result records returned by the native API.

### ComputationOutcome

<a id="entry-presentation_rust_api_computationoutcome"></a>
<a id="placement-placement.rust.native_rust.api_computationoutcome.74a0e3d9b651"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum ComputationOutcome<ValueType>
```

Public native enumeration named `computation_outcome`.

#### ComputationOutcome.Declined

<a id="entry-presentation_rust_api_computationoutcome_declined"></a>
<a id="placement-placement.rust.native_rust.api_computationoutcome_declined.218b6a88acd3"></a>
<p class="symi-entry-owner">api::ComputationOutcome variant</p>

```rust signature
Declined,
```

Represents the `declined` case.

