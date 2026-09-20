# Context safety

A context owns its symbols, assumptions, interned expressions, and structural
objects. Rust calls this owner a `Session`. Every returned expression, matrix,
geometry object, undefined function, and CAD result records both owner identity
and reset generation.

The public surfaces validate provenance before reading or mutating
mathematical state:

- direct operands must have the receiver's owner;
- variable expressions must be same-owner symbols;
- every nested collection member is checked;
- matrices and geometry values retain their owner;
- callable undefined functions validate every argument;
- reset invalidates all earlier handles.

Mixing contexts raises `context_mismatch`. Using an object after
`reset_context()` or `Session::reset()` raises `stale_object`. Symi never
reinterprets a foreign symbol identifier through the receiving symbol table.



Default-context objects and objects from an explicit context also do not mix.
Use one explicit context throughout an isolated computation. To transfer
mathematics intentionally, serialize it and parse it in the destination
context; assumptions are context state and must be established separately.

Releasing or freeing a JavaScript handle is also terminal for that handle.
The recommended facade duplicates handles needed by raw iterable calls, so
passing a value in an array does not unexpectedly free the caller's value.

### execution_mode

<a id="entry-presentation_rust_api_session_execution_mode"></a>
<a id="placement-placement.rust.native_rust.api_session_execution_mode.8304b6ac3006"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn execution_mode(&self) -> ExecutionMode
```


Sessions expose `sequential` and `automatic` execution modes and start in
`sequential`. Automatic mode permits the runtime to use its process-wide bounded
backend; it does not promise a worker count. Initializing the backend does not
by itself change how any session runs, so a caller wanting internal parallelism
selects `automatic` as well. The mode is captured when an operation begins, so a
mode change affects later operations only.

`parallelism_capability()` reports whether the target compiled a backend, whether
it has been initialized, its pool worker count, the maximum concurrency one operation
may use, and the stable reason for a serial fallback. Explicit contexts and their expressions remain the unit of ownership;
the capability record is runtime metadata and is not part of a mathematical
object or its serialization.

Native Python calls convert host values while the interpreter is attached, then
detach it for pure Symi work before constructing Python results. An explicit
`Context` and its immutable objects may therefore be shared by Python threads;
module-level defaults remain thread-local. When a Python job system already
provides outer worker threads, use sequential mode for those jobs or keep the
outer worker count bounded so it does not multiply the internal Rayon workers.
The automatic mode is a permission and does not promise a particular worker
count.

### init_thread_pool_with_capability

The atomic browser package includes the canonical `initThreadPool(worker_count)` export
from `wasm-bindgen-rayon`. Symi also exposes the generated
`initThreadPoolWithCapability(worker_count)` adapter; call this adapter when using the
Symi package so the runtime capability is published only after the shared Rayon workers
are ready. Capability queries before that point report `not_initialized` and bulk operations
use the serial implementation. A rejected bootstrap is recorded as `initialization_failed`
and does not enable a fallback thread pool. The universal WASM package does not expose either
thread bootstrap and reports `not_compiled`.

Kotlin and Swift calls retain the dedicated worker bridge for session and object
ownership. Foreign calls through one mobile session are serialized at that
bridge, while an operation running there may use the shared internal Rayon
pool. Keep surrounding dispatch queues bounded and avoid adding a second
per-operation worker pool; otherwise outer queue width and internal workers
can oversubscribe the device.

### simplify_bulk

<a id="entry-presentation_rust_api_session_simplify_bulk"></a>
<a id="placement-placement.rust.native_rust.api_session_simplify_bulk.c1dc33b71c3d"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn simplify_bulk(
    &self,
    targets: &[Expression],
) -> Result<Vec<BulkExpressionOutcome>, ApiError>
```


The ordered bulk operations `simplify_bulk`, `expand_bulk`,
`differentiate_bulk`, `substitute_bulk`, `evaluate_numeric_bulk`, and
`serialize_bulk` validate every input against one context and generation before
work begins. Results retain input order and use one captured operation
configuration. A reset during the call rejects publication rather than
returning a partially completed collection. An item-level decline or
diagnostic does not reorder or cancel unrelated items.

### generation

<a id="entry-presentation_rust_api_session_generation"></a>
<a id="placement-placement.rust.native_rust.api_session_generation.767349df4278"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn generation(&self) -> u64
```

<details class="symi-calling-forms">
<summary>Calling forms and variants</summary>

<a id="placement-placement.rust.native_rust.api_expression_generation.3d1194bbcbec"></a>
<p class="symi-entry-owner">api::Expression method: <code>api::Expression::generation</code></p>

```rust signature
pub fn generation(&self) -> u64
```

<a id="placement-placement.rust.native_rust.api_assumptionscope_generation.66c24c812dbe"></a>
<p class="symi-entry-owner">Variant using local assumptions — api::AssumptionScope method: <code>api::AssumptionScope::generation</code></p>

```rust signature
pub fn generation(&self) -> u64
```

</details>


The generation objects currently produced by this context belong to. Resetting
a context advances its generation, which is what makes every object made before
the reset stale. The same accessor exists on the objects themselves, reporting
the generation the object was created in; comparing the two is exactly what
`is_stale` does.

### session

<a id="entry-presentation_rust_api_expression_session"></a>
<a id="placement-placement.rust.native_rust.api_expression_session.9e6d3de19465"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn session(&self) -> Session
```

<details class="symi-calling-forms">
<summary>Calling forms and variants</summary>

<a id="placement-placement.rust.native_rust.api_assumptionscope_session.89928e809f93"></a>
<p class="symi-entry-owner">Variant using local assumptions — api::AssumptionScope method: <code>api::AssumptionScope::session</code></p>

```rust signature
pub fn session(&self) -> Session
```

</details>


The context that owns this object. Every mathematical object belongs to one
context for its whole life, and this accessor is how a host adapter carries the
owner alongside the object. Objects from two different contexts cannot be
combined; doing so is a context-mismatch error.

## Additional API

### active_operations

<a id="entry-presentation_rust_api_session_active_operations"></a>
<a id="placement-placement.rust.native_rust.api_session_active_operations.0d63af96f1d5"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn active_operations(&self) -> Vec<ActiveOperation>
```

Return the calls this session currently has running.

### cancel_active_operations

<a id="entry-presentation_rust_api_session_cancel_active_operations"></a>
<a id="placement-placement.rust.native_rust.api_session_cancel_active_operations.1ecf381b94a9"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn cancel_active_operations(&self) -> usize
```

Ask every running call of this session to stop, reporting how many were reached.

### cancel_operation

<a id="entry-presentation_rust_api_session_cancel_operation"></a>
<a id="placement-placement.rust.native_rust.api_session_cancel_operation.d7f763afed32"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn cancel_operation(&self, identifier: OperationIdentifier) -> bool
```

Ask one running call of this session to stop, reporting whether it was still running.

### differentiate_bulk

<a id="entry-presentation_rust_api_session_differentiate_bulk"></a>
<a id="placement-placement.rust.native_rust.api_session_differentiate_bulk.ef98b9c3d3cb"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn differentiate_bulk(
    &self,
    targets: &[Expression],
    variable: &Expression,
) -> Result<Vec<BulkExpressionOutcome>, ApiError>
```

Differentiate an ordered collection with one common symbol.

### evaluate_numeric_bulk

<a id="entry-presentation_rust_api_session_evaluate_numeric_bulk"></a>
<a id="placement-placement.rust.native_rust.api_session_evaluate_numeric_bulk.cfa8fbe9328e"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn evaluate_numeric_bulk(
    &self,
    targets: &[Expression],
) -> Result<Vec<BulkExpressionOutcome>, ApiError>
```

Evaluate an ordered collection numerically under one captured configuration.

### expand_bulk

<a id="entry-presentation_rust_api_session_expand_bulk"></a>
<a id="placement-placement.rust.native_rust.api_session_expand_bulk.0632968f6fe5"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn expand_bulk(
    &self,
    targets: &[Expression],
) -> Result<Vec<BulkExpressionOutcome>, ApiError>
```

Expand an ordered collection under one captured operation configuration.

### extend

<a id="entry-presentation_rust_api_session_extend"></a>
<a id="placement-placement.rust.native_rust.api_session_extend.8b7caca75ef6"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn extend<ReturnType>(
    &self,
    computation: impl FnOnce(LentContext<'_>) -> ReturnType,
) -> Result<ReturnType, ApiError>
```

Runs one embedder-supplied computation against this session's own context.

### fast_recognisers_enabled

<a id="entry-presentation_rust_api_session_fast_recognisers_enabled"></a>
<a id="placement-placement.rust.native_rust.api_session_fast_recognisers_enabled.e4bb9f9f1fcd"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn fast_recognisers_enabled(&self) -> bool
```

Return whether later calls of this session may run the structural recognizers.

### api::host_cancellation

<a id="entry-presentation_rust_native_module_api_host_cancellation"></a>
<a id="placement-placement.rust.native_rust.api_host_cancellation.3b3c4bbf0b8e"></a>
<p class="symi-entry-owner">api module</p>

```rust signature
pub mod host_cancellation;
```

The published control record an embedder writes to stop a call it cannot otherwise reach.

### api::host_cancellation::host_cancellation_control_address

<a id="entry-presentation_rust_native_re_export_api_host_cancellation_host_cancellation_control_address"></a>
<a id="placement-placement.rust.native_rust.api_host_cancellation_host_cancellation_control_address.bd34c3da6a95"></a>
<p class="symi-entry-owner">api::host_cancellation re_export</p>

```rust signature
pub use crate::operation::host_cancellation_control_address;
```

Public re_export placement for host_cancellation_control_address.

### api::host_cancellation::host_cancellation_control_byte_length

<a id="entry-presentation_rust_native_re_export_api_host_cancellation_host_cancellation_control_byte_length"></a>
<a id="placement-placement.rust.native_rust.api_host_cancellation_host_cancellation_control_byte_length.1cabe0273b70"></a>
<p class="symi-entry-owner">api::host_cancellation re_export</p>

```rust signature
pub use crate::operation::host_cancellation_control_byte_length;
```

Public re_export placement for host_cancellation_control_byte_length.

### api::host_cancellation::host_cancellation_requested

<a id="entry-presentation_rust_native_re_export_api_host_cancellation_host_cancellation_requested"></a>
<a id="placement-placement.rust.native_rust.api_host_cancellation_host_cancellation_requested.a94cac722ec6"></a>
<p class="symi-entry-owner">api::host_cancellation re_export</p>

```rust signature
pub use crate::operation::host_cancellation_requested;
```

Public re_export placement for host_cancellation_requested.

### api::host_cancellation::host_cancellation_slot_count

<a id="entry-presentation_rust_native_re_export_api_host_cancellation_host_cancellation_slot_count"></a>
<a id="placement-placement.rust.native_rust.api_host_cancellation_host_cancellation_slot_count.795cc31346fd"></a>
<p class="symi-entry-owner">api::host_cancellation re_export</p>

```rust signature
pub use crate::operation::host_cancellation_slot_count;
```

Public re_export placement for host_cancellation_slot_count.

### api::host_cancellation::host_cancellation_slot_ticket

<a id="entry-presentation_rust_native_re_export_api_host_cancellation_host_cancellation_slot_ticket"></a>
<a id="placement-placement.rust.native_rust.api_host_cancellation_host_cancellation_slot_ticket.63a220b5af16"></a>
<p class="symi-entry-owner">api::host_cancellation re_export</p>

```rust signature
pub use crate::operation::host_cancellation_slot_ticket;
```

Public re_export placement for host_cancellation_slot_ticket.

### identity

<a id="entry-presentation_rust_api_session_identity"></a>
<a id="placement-placement.rust.native_rust.api_session_identity.c52e436bef95"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn identity(&self) -> u64
```

Returns this session's stable identity for host object ownership checks.

### initialize_parallelism

<a id="entry-presentation_rust_api_session_initialize_parallelism"></a>
<a id="placement-placement.rust.native_rust.api_session_initialize_parallelism.336580da287a"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn initialize_parallelism(
    &self,
    worker_count: usize,
) -> Result<ParallelismInitialization, ApiError>
```

Initialize the one process-wide parallel backend with an explicit worker count.

### new

<a id="entry-presentation_rust_api_session_new"></a>
<a id="placement-placement.rust.native_rust.api_session_new.c82e40e438c8"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn new() -> Self
```

Provides the `new` operation on this native type.

### operation_context

<a id="entry-presentation_rust_api_session_operation_context"></a>
<a id="placement-placement.rust.native_rust.api_session_operation_context.d3a325a2dadc"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn operation_context(&self) -> OperationContext
```

Return an operation carrying this session's published defaults.

### operation_defaults

<a id="entry-presentation_rust_api_session_operation_defaults"></a>
<a id="placement-placement.rust.native_rust.api_session_operation_defaults.c75f5e18ddb9"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn operation_defaults(&self) -> Arc<OperationDefaults>
```

Return the execution policy this session publishes to the calls it starts.

### api::options

<a id="entry-presentation_rust_native_module_api_options"></a>
<a id="placement-placement.rust.native_rust.api_options.d99f6301ef41"></a>
<p class="symi-entry-owner">api module</p>

```rust signature
pub mod options;
```

Binding-neutral option types accepted by the native API.

### api::parallelism

<a id="entry-presentation_rust_native_module_api_parallelism"></a>
<a id="placement-placement.rust.native_rust.api_parallelism.0b8ef0c196d2"></a>
<p class="symi-entry-owner">api module</p>

```rust signature
pub mod parallelism;
```

Binding-neutral execution controls and ordered bulk result records.

### parallelism_capability

<a id="entry-presentation_rust_api_session_parallelism_capability"></a>
<a id="placement-placement.rust.native_rust.api_session_parallelism_capability.460744b25dc8"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn parallelism_capability(&self) -> ParallelismCapability
```

Return the target and session execution facts observed at this instant.

### presentation_search_enabled

<a id="entry-presentation_rust_api_session_presentation_search_enabled"></a>
<a id="placement-placement.rust.native_rust.api_session_presentation_search_enabled.967665feccd4"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn presentation_search_enabled(&self) -> bool
```

Return whether later calls of this session may run the presentation search.

### api::host_cancellation::release_host_cancellation_slot

<a id="entry-presentation_rust_native_re_export_api_host_cancellation_release_host_cancellation_slot"></a>
<a id="placement-placement.rust.native_rust.api_host_cancellation_release_host_cancellation_slot.8aa0bf067ca0"></a>
<p class="symi-entry-owner">api::host_cancellation re_export</p>

```rust signature
pub use crate::operation::release_host_cancellation_slot;
```

Public re_export placement for release_host_cancellation_slot.

### api::host_cancellation::request_host_cancellation

<a id="entry-presentation_rust_native_re_export_api_host_cancellation_request_host_cancellation"></a>
<a id="placement-placement.rust.native_rust.api_host_cancellation_request_host_cancellation.e6ac55c76353"></a>
<p class="symi-entry-owner">api::host_cancellation re_export</p>

```rust signature
pub use crate::operation::request_host_cancellation;
```

Public re_export placement for request_host_cancellation.

### api::host_cancellation::reserve_host_cancellation_slot

<a id="entry-presentation_rust_native_re_export_api_host_cancellation_reserve_host_cancellation_slot"></a>
<a id="placement-placement.rust.native_rust.api_host_cancellation_reserve_host_cancellation_slot.2156c8e6ba4c"></a>
<p class="symi-entry-owner">api::host_cancellation re_export</p>

```rust signature
pub use crate::operation::reserve_host_cancellation_slot;
```

Public re_export placement for reserve_host_cancellation_slot.

### reset

<a id="entry-presentation_rust_api_session_reset"></a>
<a id="placement-placement.rust.native_rust.api_session_reset.c8b7f54803ce"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn reset(&self) -> Result<(), ApiError>
```

Provides the `reset` operation on this native type.

### serialize_bulk

<a id="entry-presentation_rust_api_session_serialize_bulk"></a>
<a id="placement-placement.rust.native_rust.api_session_serialize_bulk.d28521f7215e"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn serialize_bulk(
    &self,
    targets: &[Expression],
) -> Result<Vec<BulkTextOutcome>, ApiError>
```

Serialize an ordered collection into canonical structural text.

### set_execution_mode

<a id="entry-presentation_rust_api_session_set_execution_mode"></a>
<a id="placement-placement.rust.native_rust.api_session_set_execution_mode.591d8405a9d8"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn set_execution_mode(&self, execution_mode: ExecutionMode)
```

Change the execution mode used by later operations.

### set_fast_recognisers_enabled

<a id="entry-presentation_rust_api_session_set_fast_recognisers_enabled"></a>
<a id="placement-placement.rust.native_rust.api_session_set_fast_recognisers_enabled.30533410a78b"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn set_fast_recognisers_enabled(&self, enabled: bool)
```

Select whether later calls of this session may run the structural recognizers.

### set_operation_configuration

<a id="entry-presentation_rust_api_session_set_operation_configuration"></a>
<a id="placement-placement.rust.native_rust.api_session_set_operation_configuration.578f5c49e821"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn set_operation_configuration(
    &self,
    configuration: OperationConfiguration,
)
```

Replace the configuration this session publishes to later calls.

### set_operation_defaults

<a id="entry-presentation_rust_api_session_set_operation_defaults"></a>
<a id="placement-placement.rust.native_rust.api_session_set_operation_defaults.695d36be2715"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn set_operation_defaults(&self, defaults: OperationDefaults)
```

Replace the execution policy this session publishes to later calls.

### set_presentation_search_enabled

<a id="entry-presentation_rust_api_session_set_presentation_search_enabled"></a>
<a id="placement-placement.rust.native_rust.api_session_set_presentation_search_enabled.1e5a19f4a422"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn set_presentation_search_enabled(&self, enabled: bool)
```

Select whether later calls of this session may run the presentation search.

### substitute_bulk

<a id="entry-presentation_rust_api_session_substitute_bulk"></a>
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

Substitute one common symbol and value throughout an ordered collection.

### take_completed_operation_report

<a id="entry-presentation_rust_api_session_take_completed_operation_report"></a>
<a id="placement-placement.rust.native_rust.api_session_take_completed_operation_report.c84f6b628f83"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn take_completed_operation_report(
    &self,
) -> CompletedOperationReport
```

Take the diagnostic tail the completed calls of this session left behind.

### take_operation_records

<a id="entry-presentation_rust_api_session_take_operation_records"></a>
<a id="placement-placement.rust.native_rust.api_session_take_operation_records.75e98234f3e7"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn take_operation_records(&self) -> Vec<OperationRecord>
```

Return the records the completed calls of this session emitted.

### validate_assumption_proposition

<a id="entry-presentation_rust_api_session_validate_assumption_proposition"></a>
<a id="placement-placement.rust.native_rust.api_session_validate_assumption_proposition.7fb68d9d2c8e"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn validate_assumption_proposition(
    &self,
    target: &AssumptionProposition,
) -> Result<(), ApiError>
```

Verifies that a host-held proposition belongs to this session and is still live.

### validate_circle_2d_object

<a id="entry-presentation_rust_api_session_validate_circle_2d_object"></a>
<a id="placement-placement.rust.native_rust.api_session_validate_circle_2d_object.19c6efde362d"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn validate_circle_2d_object(
    &self,
    target: &Circle2d,
) -> Result<(), ApiError>
```

Verifies that a host-held circle belongs to this session and is still live.

### validate_cylindrical_algebraic_decomposition_object

<a id="entry-presentation_rust_api_session_validate_cylindrical_algebraic_decomposition_object"></a>
<a id="placement-placement.rust.native_rust.api_session_validate_cylindrical_algebraic_decomposition_object.52b6f06f720d"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn validate_cylindrical_algebraic_decomposition_object(
    &self,
    target: &CylindricalAlgebraicDecomposition,
) -> Result<(), ApiError>
```

Verifies that a host-held decomposition belongs to this session and is still live.

### validate_expression

<a id="entry-presentation_rust_api_session_validate_expression"></a>
<a id="placement-placement.rust.native_rust.api_session_validate_expression.b54f4ae2a955"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn validate_expression(
    &self,
    target: &Expression,
) -> Result<(), ApiError>
```

Verifies that a host-held expression belongs to this session and is still live.

### validate_generation

<a id="entry-presentation_rust_api_session_validate_generation"></a>
<a id="placement-placement.rust.native_rust.api_session_validate_generation.e72fcf8c13dd"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn validate_generation(
    &self,
    generation: u64,
) -> Result<(), ApiError>
```

Verifies that an object generation is still live in this session.

### validate_matrix_object

<a id="entry-presentation_rust_api_session_validate_matrix_object"></a>
<a id="placement-placement.rust.native_rust.api_session_validate_matrix_object.a95bf225f1cd"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn validate_matrix_object(
    &self,
    target: &Matrix,
) -> Result<(), ApiError>
```

Verifies that a host-held matrix belongs to this session and is still live.

### validate_point_2d_object

<a id="entry-presentation_rust_api_session_validate_point_2d_object"></a>
<a id="placement-placement.rust.native_rust.api_session_validate_point_2d_object.add1fee81872"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn validate_point_2d_object(
    &self,
    target: &Point2d,
) -> Result<(), ApiError>
```

Verifies that a host-held point belongs to this session and is still live.

### validate_polygon_2d_object

<a id="entry-presentation_rust_api_session_validate_polygon_2d_object"></a>
<a id="placement-placement.rust.native_rust.api_session_validate_polygon_2d_object.bd27507d5cc2"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn validate_polygon_2d_object(
    &self,
    target: &Polygon2d,
) -> Result<(), ApiError>
```

Verifies that a host-held polygon belongs to this session and is still live.

### validate_segment_2d_object

<a id="entry-presentation_rust_api_session_validate_segment_2d_object"></a>
<a id="placement-placement.rust.native_rust.api_session_validate_segment_2d_object.e05b1e81d091"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn validate_segment_2d_object(
    &self,
    target: &Segment2d,
) -> Result<(), ApiError>
```

Verifies that a host-held segment belongs to this session and is still live.

### validate_session_object

<a id="entry-presentation_rust_api_session_validate_session_object"></a>
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

Verifies that a host object belongs to this session and is still live.

### validate_triangle_2d_object

<a id="entry-presentation_rust_api_session_validate_triangle_2d_object"></a>
<a id="placement-placement.rust.native_rust.api_session_validate_triangle_2d_object.8bd60d305883"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn validate_triangle_2d_object(
    &self,
    target: &Triangle2d,
) -> Result<(), ApiError>
```

Verifies that a host-held triangle belongs to this session and is still live.

### validate_undefined_function_object

<a id="entry-presentation_rust_api_session_validate_undefined_function_object"></a>
<a id="placement-placement.rust.native_rust.api_session_validate_undefined_function_object.442e90b7631e"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn validate_undefined_function_object(
    &self,
    target: &UndefinedFunction,
) -> Result<(), ApiError>
```

Verifies that a host-held undefined function belongs to this session and is still live.

### ActiveOperation

<a id="entry-presentation_rust_api_activeoperation"></a>
<a id="placement-placement.rust.native_rust.api_activeoperation.6e171b9679bf"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use crate::operation::ActiveOperation;
```

Public re_export placement for ActiveOperation.

### BulkExpressionOutcome

<a id="entry-presentation_rust_api_bulkexpressionoutcome"></a>
<a id="placement-placement.rust.native_rust.api_bulkexpressionoutcome.725b40b00b13"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use parallelism::BulkExpressionOutcome;
```

One ordered result from an expression bulk operation.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_parallelism_bulkexpressionoutcome.8f5cf62231be"></a>
<p class="symi-entry-owner">Type: <code>api::parallelism::BulkExpressionOutcome</code></p>

```rust signature
pub enum BulkExpressionOutcome
```

</details>

#### BulkExpressionOutcome.diagnostic

<a id="entry-presentation_rust_api_bulkexpressionoutcome_diagnostic"></a>
<a id="placement-placement.rust.native_rust.api_parallelism_bulkexpressionoutcome_diagnostic.c7ed3ce5f5a1"></a>
<p class="symi-entry-owner">api::parallelism::BulkExpressionOutcome method</p>

```rust signature
pub fn diagnostic(&self) -> Option<Diagnostic>
```

Return the item diagnostic, if the scalar operation did not produce a value.

#### BulkExpressionOutcome.index

<a id="entry-presentation_rust_api_bulkexpressionoutcome_index"></a>
<a id="placement-placement.rust.native_rust.api_parallelism_bulkexpressionoutcome_index.b17b37fb3bea"></a>
<p class="symi-entry-owner">api::parallelism::BulkExpressionOutcome method</p>

```rust signature
pub fn index(&self) -> usize
```

Return the original input position.

#### BulkExpressionOutcome.is_value

<a id="entry-presentation_rust_api_bulkexpressionoutcome_is_value"></a>
<a id="placement-placement.rust.native_rust.api_parallelism_bulkexpressionoutcome_is_value.18a97f7cb3a4"></a>
<p class="symi-entry-owner">api::parallelism::BulkExpressionOutcome method</p>

```rust signature
pub fn is_value(&self) -> bool
```

Return whether this item contains a value.

#### BulkExpressionOutcome.value

<a id="entry-presentation_rust_api_bulkexpressionoutcome_value"></a>
<a id="placement-placement.rust.native_rust.api_parallelism_bulkexpressionoutcome_value.5e821544b58e"></a>
<p class="symi-entry-owner">api::parallelism::BulkExpressionOutcome method</p>

```rust signature
pub fn value(&self) -> Option<Expression>
```

Return the successful value, if this item succeeded.

### BulkTextOutcome

<a id="entry-presentation_rust_api_bulktextoutcome"></a>
<a id="placement-placement.rust.native_rust.api_bulktextoutcome.31ba7387dc68"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use parallelism::BulkTextOutcome;
```

One ordered canonical-text result from an expression bulk operation.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_parallelism_bulktextoutcome.dfbfecf535bc"></a>
<p class="symi-entry-owner">Type: <code>api::parallelism::BulkTextOutcome</code></p>

```rust signature
pub enum BulkTextOutcome
```

</details>

#### BulkTextOutcome.diagnostic

<a id="entry-presentation_rust_api_bulktextoutcome_diagnostic"></a>
<a id="placement-placement.rust.native_rust.api_parallelism_bulktextoutcome_diagnostic.3944a0539397"></a>
<p class="symi-entry-owner">api::parallelism::BulkTextOutcome method</p>

```rust signature
pub fn diagnostic(&self) -> Option<Diagnostic>
```

Return the item diagnostic, if serialization did not produce text.

#### BulkTextOutcome.index

<a id="entry-presentation_rust_api_bulktextoutcome_index"></a>
<a id="placement-placement.rust.native_rust.api_parallelism_bulktextoutcome_index.5d89e00f654b"></a>
<p class="symi-entry-owner">api::parallelism::BulkTextOutcome method</p>

```rust signature
pub fn index(&self) -> usize
```

Return the original input position.

#### BulkTextOutcome.value

<a id="entry-presentation_rust_api_bulktextoutcome_value"></a>
<a id="placement-placement.rust.native_rust.api_parallelism_bulktextoutcome_value.cff0adc3debe"></a>
<p class="symi-entry-owner">api::parallelism::BulkTextOutcome method</p>

```rust signature
pub fn value(&self) -> Option<String>
```

Return the serialized text, if this item succeeded.

### CompletedOperationReport

<a id="entry-presentation_rust_api_completedoperationreport"></a>
<a id="placement-placement.rust.native_rust.api_completedoperationreport.39cc8ef0e465"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct CompletedOperationReport
```

What the completed calls of a session left behind for a caller to read.

#### CompletedOperationReport.cancelled_operation_count

<a id="entry-presentation_rust_api_completedoperationreport_cancelled_operation_count"></a>
<a id="placement-placement.rust.native_rust.api_completedoperationreport_cancelled_operation_count.7f2bb63addd8"></a>
<p class="symi-entry-owner">api::CompletedOperationReport field</p>

```rust signature
pub cancelled_operation_count:
```

Counts the completed calls that were asked to stop before they returned.

#### CompletedOperationReport.consumed_work_units

<a id="entry-presentation_rust_api_completedoperationreport_consumed_work_units"></a>
<a id="placement-placement.rust.native_rust.api_completedoperationreport_consumed_work_units.963af8ec5523"></a>
<p class="symi-entry-owner">api::CompletedOperationReport field</p>

```rust signature
pub consumed_work_units:
```

The deterministic work the completed calls charged.

#### CompletedOperationReport.operation_count

<a id="entry-presentation_rust_api_completedoperationreport_operation_count"></a>
<a id="placement-placement.rust.native_rust.api_completedoperationreport_operation_count.b0c31211ead8"></a>
<p class="symi-entry-owner">api::CompletedOperationReport field</p>

```rust signature
pub operation_count:
```

Counts the calls this report covers.

#### CompletedOperationReport.records

<a id="entry-presentation_rust_api_completedoperationreport_records"></a>
<a id="placement-placement.rust.native_rust.api_completedoperationreport_records.87db67d6f90d"></a>
<p class="symi-entry-owner">api::CompletedOperationReport field</p>

```rust signature
pub records:
```

The diagnostic records the completed calls emitted, in the order they emitted them.

### ExecutionMode

<a id="entry-presentation_rust_api_executionmode"></a>
<a id="placement-placement.rust.native_rust.api_executionmode.13ee30759072"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use crate::operation::ExecutionMode;
```

Selects the execution policy used by one mathematical operation.

### HOST_CANCELLATION_SLOT_COUNT

<a id="entry-presentation_rust_api_host_cancellation_slot_count"></a>
<a id="placement-placement.rust.native_rust.api_host_cancellation_host_cancellation_slot_count.f5287d76c346"></a>
<p class="symi-entry-owner">api::host_cancellation re_export</p>

```rust signature
pub use crate::operation::HOST_CANCELLATION_SLOT_COUNT;
```

Public re_export placement for HOST_CANCELLATION_SLOT_COUNT.

### HostCancellationSlot

<a id="entry-presentation_rust_api_hostcancellationslot"></a>
<a id="placement-placement.rust.native_rust.api_hostcancellationslot.ac946375a5fc"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use host_cancellation::HostCancellationSlot;
```

Public re_export placement for HostCancellationSlot.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_host_cancellation_hostcancellationslot.19ecc960eaf6"></a>
<p class="symi-entry-owner">api::host_cancellation re_export: <code>api::host_cancellation::HostCancellationSlot</code></p>

```rust signature
pub use crate::operation::HostCancellationSlot;
```

</details>

### LentContext

<a id="entry-presentation_rust_api_lentcontext"></a>
<a id="placement-placement.rust.native_rust.api_lentcontext.cd0e60803125"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct LentContext<'session>
```

The session's own context, lent to one embedder computation for the length of that call.

### OperationConfiguration

<a id="entry-presentation_rust_api_operationconfiguration"></a>
<a id="placement-placement.rust.native_rust.api_operationconfiguration.52862b5f0493"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use crate::operation::OperationConfiguration;
```

Immutable switches and resource defaults captured at operation entry.

### OperationContext

<a id="entry-presentation_rust_api_operationcontext"></a>
<a id="placement-placement.rust.native_rust.api_operationcontext.b26c41e6274d"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use crate::operation::OperationContext;
```

Explicit state belonging to one public mathematical call.

### OperationDefaults

<a id="entry-presentation_rust_api_operationdefaults"></a>
<a id="placement-placement.rust.native_rust.api_operationdefaults.146798a519f4"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use crate::operation::OperationDefaults;
```

The immutable execution policy a session publishes for the operations started under it.

### OperationEvent

<a id="entry-presentation_rust_api_operationevent"></a>
<a id="placement-placement.rust.native_rust.api_operationevent.059eab0ba582"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use crate::operation::OperationEvent;
```

What one compact record says, without the text that would describe it.

### OperationIdentifier

<a id="entry-presentation_rust_api_operationidentifier"></a>
<a id="placement-placement.rust.native_rust.api_operationidentifier.7c6a7ecfc74e"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use crate::operation::OperationIdentifier;
```

Public re_export placement for OperationIdentifier.

### OperationRecord

<a id="entry-presentation_rust_api_operationrecord"></a>
<a id="placement-placement.rust.native_rust.api_operationrecord.5c8ce64a7c41"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use crate::operation::OperationRecord;
```

A structured operation-local record for diagnostics and instrumentation.

### OperationStage

<a id="entry-presentation_rust_api_operationstage"></a>
<a id="placement-placement.rust.native_rust.api_operationstage.a0eea2eb9dc1"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use crate::operation::OperationStage;
```

The stage a compact record was emitted from.

### ParallelBackend

<a id="entry-presentation_rust_api_parallelbackend"></a>
<a id="placement-placement.rust.native_rust.api_parallelbackend.631a5d437186"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use parallelism::ParallelBackend;
```

Names the execution backend selected by the runtime.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_parallelism_parallelbackend.8ffc266e8d65"></a>
<p class="symi-entry-owner">Type: <code>api::parallelism::ParallelBackend</code></p>

```rust signature
pub enum ParallelBackend
```

</details>

#### ParallelBackend.RayonNative

<a id="entry-presentation_rust_api_parallelbackend_rayonnative"></a>
<a id="placement-placement.rust.native_rust.api_parallelism_parallelbackend_rayonnative.03ea657042db"></a>
<p class="symi-entry-owner">api::parallelism::ParallelBackend variant</p>

```rust signature
RayonNative,
```

An owned native Rayon thread pool.

#### ParallelBackend.RayonWasm

<a id="entry-presentation_rust_api_parallelbackend_rayonwasm"></a>
<a id="placement-placement.rust.native_rust.api_parallelism_parallelbackend_rayonwasm.fc9711924f04"></a>
<p class="symi-entry-owner">api::parallelism::ParallelBackend variant</p>

```rust signature
RayonWasm,
```

A Rayon pool bootstrapped for atomic WebAssembly.

#### ParallelBackend.Sequential

<a id="entry-presentation_rust_api_parallelbackend_sequential"></a>
<a id="placement-placement.rust.native_rust.api_parallelism_parallelbackend_sequential.1665974981f0"></a>
<p class="symi-entry-owner">api::parallelism::ParallelBackend variant</p>

```rust signature
Sequential,
```

The deterministic serial backend.

#### ParallelBackend.name

<a id="entry-presentation_rust_api_parallelbackend_name"></a>
<a id="placement-placement.rust.native_rust.api_parallelism_parallelbackend_name.e82ae3d1897e"></a>
<p class="symi-entry-owner">api::parallelism::ParallelBackend method</p>

```rust signature
pub fn name(self) -> &'static str
```

Return the stable lowercase backend spelling.

### ParallelismCapability

<a id="entry-presentation_rust_api_parallelismcapability"></a>
<a id="placement-placement.rust.native_rust.api_parallelismcapability.2be8205af335"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use parallelism::ParallelismCapability;
```

Reports the parallel runtime facts observed at one instant.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_parallelism_parallelismcapability.77961bf650dd"></a>
<p class="symi-entry-owner">Type: <code>api::parallelism::ParallelismCapability</code></p>

```rust signature
pub struct ParallelismCapability
```

</details>

#### ParallelismCapability.active

<a id="entry-presentation_rust_api_parallelismcapability_active"></a>
<a id="placement-placement.rust.native_rust.api_parallelism_parallelismcapability_active.de58d178fa3a"></a>
<p class="symi-entry-owner">api::parallelism::ParallelismCapability field</p>

```rust signature
pub active:
```

Indicates that parallel work can currently be admitted.

#### ParallelismCapability.backend

<a id="entry-presentation_rust_api_parallelismcapability_backend"></a>
<a id="placement-placement.rust.native_rust.api_parallelism_parallelismcapability_backend.dd12831f715d"></a>
<p class="symi-entry-owner">api::parallelism::ParallelismCapability field</p>

```rust signature
pub backend:
```

Reports the backend selected by the target.

#### ParallelismCapability.compiled

<a id="entry-presentation_rust_api_parallelismcapability_compiled"></a>
<a id="placement-placement.rust.native_rust.api_parallelism_parallelismcapability_compiled.b02ee3c2a3d6"></a>
<p class="symi-entry-owner">api::parallelism::ParallelismCapability field</p>

```rust signature
pub compiled:
```

Indicates that this target contains a threaded backend.

#### ParallelismCapability.initialized

<a id="entry-presentation_rust_api_parallelismcapability_initialized"></a>
<a id="placement-placement.rust.native_rust.api_parallelism_parallelismcapability_initialized.0738550bec7a"></a>
<p class="symi-entry-owner">api::parallelism::ParallelismCapability field</p>

```rust signature
pub initialized:
```

Indicates that backend initialization has completed.

#### ParallelismCapability.is_parallel

<a id="entry-presentation_rust_api_parallelismcapability_is_parallel"></a>
<a id="placement-placement.rust.native_rust.api_parallelism_parallelismcapability_is_parallel.7df139ae72a4"></a>
<p class="symi-entry-owner">api::parallelism::ParallelismCapability method</p>

```rust signature
pub fn is_parallel(&self) -> bool
```

Return whether this capability can admit parallel work.

#### ParallelismCapability.maximum_operation_concurrency

<a id="entry-presentation_rust_api_parallelismcapability_maximum_operation_concurrency"></a>
<a id="placement-placement.rust.native_rust.api_parallelism_parallelismcapability_maximum_operation_concurrency.40ba0134ec3e"></a>
<p class="symi-entry-owner">api::parallelism::ParallelismCapability field</p>

```rust signature
pub maximum_operation_concurrency:
```

Reports the largest task batch one operation may admit.

#### ParallelismCapability.selected_mode

<a id="entry-presentation_rust_api_parallelismcapability_selected_mode"></a>
<a id="placement-placement.rust.native_rust.api_parallelism_parallelismcapability_selected_mode.ce31d9778409"></a>
<p class="symi-entry-owner">api::parallelism::ParallelismCapability field</p>

```rust signature
pub selected_mode:
```

Reports the session mode captured for later operations.

#### ParallelismCapability.unavailable_reason

<a id="entry-presentation_rust_api_parallelismcapability_unavailable_reason"></a>
<a id="placement-placement.rust.native_rust.api_parallelism_parallelismcapability_unavailable_reason.3f95ef352ce9"></a>
<p class="symi-entry-owner">api::parallelism::ParallelismCapability field</p>

```rust signature
pub unavailable_reason:
```

Explains why parallel work is unavailable, when it is unavailable.

#### ParallelismCapability.worker_count

<a id="entry-presentation_rust_api_parallelismcapability_worker_count"></a>
<a id="placement-placement.rust.native_rust.api_parallelism_parallelismcapability_worker_count.f5274b8258c2"></a>
<p class="symi-entry-owner">api::parallelism::ParallelismCapability field</p>

```rust signature
pub worker_count:
```

Reports the number of runtime workers.

### ParallelismInitialization

<a id="entry-presentation_rust_api_parallelisminitialization"></a>
<a id="placement-placement.rust.native_rust.api_parallelisminitialization.b4fa065a8693"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use parallelism::ParallelismInitialization;
```

Reports the result of an explicit one-time runtime initialization request.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_parallelism_parallelisminitialization.30fdfc4d0acd"></a>
<p class="symi-entry-owner">Type: <code>api::parallelism::ParallelismInitialization</code></p>

```rust signature
pub enum ParallelismInitialization
```

</details>

#### ParallelismInitialization.AlreadyInitialized

<a id="entry-presentation_rust_api_parallelisminitialization_alreadyinitialized"></a>
<a id="placement-placement.rust.native_rust.api_parallelism_parallelisminitialization_alreadyinitialized.ca61a86e32b6"></a>
<p class="symi-entry-owner">api::parallelism::ParallelismInitialization variant</p>

```rust signature
AlreadyInitialized,
```

The requested configuration matched the existing backend.

#### ParallelismInitialization.Initialized

<a id="entry-presentation_rust_api_parallelisminitialization_initialized"></a>
<a id="placement-placement.rust.native_rust.api_parallelism_parallelisminitialization_initialized.a1076f6e5b78"></a>
<p class="symi-entry-owner">api::parallelism::ParallelismInitialization variant</p>

```rust signature
Initialized,
```

This request created the process-wide backend.

#### ParallelismInitialization.name

<a id="entry-presentation_rust_api_parallelisminitialization_name"></a>
<a id="placement-placement.rust.native_rust.api_parallelism_parallelisminitialization_name.3283042fb037"></a>
<p class="symi-entry-owner">api::parallelism::ParallelismInitialization method</p>

```rust signature
pub fn name(self) -> &'static str
```

Return the stable lowercase initialization spelling.

### ParallelismUnavailableReason

<a id="entry-presentation_rust_api_parallelismunavailablereason"></a>
<a id="placement-placement.rust.native_rust.api_parallelismunavailablereason.4f8b71e82a2d"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use parallelism::ParallelismUnavailableReason;
```

Explains why a parallel backend is not active.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_parallelism_parallelismunavailablereason.d739bec642e8"></a>
<p class="symi-entry-owner">Type: <code>api::parallelism::ParallelismUnavailableReason</code></p>

```rust signature
pub enum ParallelismUnavailableReason
```

</details>

#### ParallelismUnavailableReason.CrossOriginIsolationUnavailable

<a id="entry-presentation_rust_api_parallelismunavailablereason_crossoriginisolationunavailable"></a>
<a id="placement-placement.rust.native_rust.api_parallelism_parallelismunavailablereason_crossoriginisolationunavailable.141728a03495"></a>
<p class="symi-entry-owner">api::parallelism::ParallelismUnavailableReason variant</p>

```rust signature
CrossOriginIsolationUnavailable,
```

Browser cross-origin isolation is unavailable.

#### ParallelismUnavailableReason.InitializationFailed

<a id="entry-presentation_rust_api_parallelismunavailablereason_initializationfailed"></a>
<a id="placement-placement.rust.native_rust.api_parallelism_parallelismunavailablereason_initializationfailed.a7b27ab068e8"></a>
<p class="symi-entry-owner">api::parallelism::ParallelismUnavailableReason variant</p>

```rust signature
InitializationFailed,
```

Backend initialization recorded a stable failure.

#### ParallelismUnavailableReason.NotCompiled

<a id="entry-presentation_rust_api_parallelismunavailablereason_notcompiled"></a>
<a id="placement-placement.rust.native_rust.api_parallelism_parallelismunavailablereason_notcompiled.6c042cdae0dc"></a>
<p class="symi-entry-owner">api::parallelism::ParallelismUnavailableReason variant</p>

```rust signature
NotCompiled,
```

The target was compiled without a parallel backend.

#### ParallelismUnavailableReason.NotInitialized

<a id="entry-presentation_rust_api_parallelismunavailablereason_notinitialized"></a>
<a id="placement-placement.rust.native_rust.api_parallelism_parallelismunavailablereason_notinitialized.b9a0aa42bae1"></a>
<p class="symi-entry-owner">api::parallelism::ParallelismUnavailableReason variant</p>

```rust signature
NotInitialized,
```

A threaded backend exists but has not completed initialization.

#### ParallelismUnavailableReason.SharedMemoryUnavailable

<a id="entry-presentation_rust_api_parallelismunavailablereason_sharedmemoryunavailable"></a>
<a id="placement-placement.rust.native_rust.api_parallelism_parallelismunavailablereason_sharedmemoryunavailable.3b938d4ca57f"></a>
<p class="symi-entry-owner">api::parallelism::ParallelismUnavailableReason variant</p>

```rust signature
SharedMemoryUnavailable,
```

Shared WebAssembly memory is unavailable.

#### ParallelismUnavailableReason.SingleWorker

<a id="entry-presentation_rust_api_parallelismunavailablereason_singleworker"></a>
<a id="placement-placement.rust.native_rust.api_parallelism_parallelismunavailablereason_singleworker.1e375cb18c79"></a>
<p class="symi-entry-owner">api::parallelism::ParallelismUnavailableReason variant</p>

```rust signature
SingleWorker,
```

The backend has only one worker.

#### ParallelismUnavailableReason.name

<a id="entry-presentation_rust_api_parallelismunavailablereason_name"></a>
<a id="placement-placement.rust.native_rust.api_parallelism_parallelismunavailablereason_name.ee580b70862d"></a>
<p class="symi-entry-owner">api::parallelism::ParallelismUnavailableReason method</p>

```rust signature
pub fn name(self) -> &'static str
```

Return the stable lowercase reason spelling.

### SerialRouteReason

<a id="entry-presentation_rust_api_serialroutereason"></a>
<a id="placement-placement.rust.native_rust.api_serialroutereason.a7b87d561fe7"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use crate::operation::SerialRouteReason;
```

Why an execution decision selected the serial route.

