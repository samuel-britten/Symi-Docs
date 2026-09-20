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


```javascript
const first = new symi.Context();
const second = new symi.Context();
const x = first.symbol("x");
const y = second.symbol("y");

first.add(x, y);
first.resetContext();
x.add(1);
```

Default-context objects and objects from an explicit context also do not mix.
Use one explicit context throughout an isolated computation. To transfer
mathematics intentionally, serialize it and parse it in the destination
context; assumptions are context state and must be established separately.

Releasing or freeing a JavaScript handle is also terminal for that handle.
The recommended facade duplicates handles needed by raw iterable calls, so
passing a value in an array does not unexpectedly free the caller's value.

### execution_mode

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.execution_mode`](/symi/python/context-safety#execution_mode) in Python, [`api::Session::execution_mode`](/symi/rust/context-safety#execution_mode) in Rust.*


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

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.simplify_bulk`](/symi/python/context-safety#simplify_bulk) in Python, [`api::Session::simplify_bulk`](/symi/rust/context-safety#simplify_bulk) in Rust.*


The ordered bulk operations `simplify_bulk`, `expand_bulk`,
`differentiate_bulk`, `substitute_bulk`, `evaluate_numeric_bulk`, and
`serialize_bulk` validate every input against one context and generation before
work begins. Results retain input order and use one captured operation
configuration. A reset during the call rejects publication rather than
returning a partially completed collection. An item-level decline or
diagnostic does not reorder or cancel unrelated items.

### generation

*Not exposed by the WASM / JavaScript bindings. Available as [`api::AssumptionScope::generation`](/symi/rust/context-safety#generation) in Rust.*


The generation objects currently produced by this context belong to. Resetting
a context advances its generation, which is what makes every object made before
the reset stale. The same accessor exists on the objects themselves, reporting
the generation the object was created in; comparing the two is exactly what
`is_stale` does.

### session

*Not exposed by the WASM / JavaScript bindings. Available as [`api::AssumptionScope::session`](/symi/rust/context-safety#session) in Rust.*


The context that owns this object. Every mathematical object belongs to one
context for its whole life, and this accessor is how a host adapter carries the
owner alongside the object. Objects from two different contexts cannot be
combined; doing so is a context-mismatch error.

## Additional API

### differentiateBulk

<a id="entry-presentation_wasm_api_session_differentiate_bulk"></a>
<a id="placement-placement.wasm.wasm_module.module_differentiatebulk.88e9636eaec7"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
differentiateBulk(
    targets: Expression[],
    variable: Expression,
): BulkExpressionOutcome[]
```

Differentiate an ordered collection in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_differentiatebulk.60c81c04a52a"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.differentiateBulk</code></p>

```typescript signature
differentiateBulk(
    targets: Expression[],
    variable: Expression,
): BulkExpressionOutcome[]
```

</details>

### evaluateNumericBulk

<a id="entry-presentation_wasm_api_session_evaluate_numeric_bulk"></a>
<a id="placement-placement.wasm.wasm_module.module_evaluatenumericbulk.408fe965e833"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
evaluateNumericBulk(targets: Expression[]): BulkExpressionOutcome[]
```

Evaluate an ordered collection numerically in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_evaluatenumericbulk.1d8e7313ad2a"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.evaluateNumericBulk</code></p>

```typescript signature
evaluateNumericBulk(targets: Expression[]): BulkExpressionOutcome[]
```

</details>

### executionMode

<a id="entry-presentation_wasm_api_session_execution_mode"></a>
<a id="placement-placement.wasm.wasm_module.module_executionmode.d4cea0f8949e"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
executionMode(): string
```

Return the execution mode of the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_executionmode.fb37feb3b5e7"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.executionMode</code></p>

```typescript signature
executionMode(): string
```

</details>

### expandBulk

<a id="entry-presentation_wasm_api_session_expand_bulk"></a>
<a id="placement-placement.wasm.wasm_module.module_expandbulk.9bd6e6330993"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
expandBulk(targets: Expression[]): BulkExpressionOutcome[]
```

Expand an ordered collection in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_expandbulk.ddbf38f0af39"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.expandBulk</code></p>

```typescript signature
expandBulk(targets: Expression[]): BulkExpressionOutcome[]
```

</details>

### hostCancellationControlAddress

<a id="entry-presentation_wasm_host_wasm_module_hostcancellationcontroladdress"></a>
<a id="placement-placement.wasm.wasm_module.module_hostcancellationcontroladdress.a36df668e7b8"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
hostCancellationControlAddress(): number
```

Return the address in linear memory of the control record an embedder writes to stop a call.

### hostCancellationControlByteLength

<a id="entry-presentation_wasm_host_wasm_module_hostcancellationcontrolbytelength"></a>
<a id="placement-placement.wasm.wasm_module.module_hostcancellationcontrolbytelength.eedb6cf20393"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
hostCancellationControlByteLength(): number
```

Return how many bytes of linear memory the host cancellation control record occupies.

### hostCancellationRequested

<a id="entry-presentation_wasm_host_wasm_module_hostcancellationrequested"></a>
<a id="placement-placement.wasm.wasm_module.module_hostcancellationrequested.254657584a52"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
hostCancellationRequested(slot_index: number, ticket: number): boolean
```

Return whether a stop request stands against one control-record reservation.

### hostCancellationSlotCount

<a id="entry-presentation_wasm_host_wasm_module_hostcancellationslotcount"></a>
<a id="placement-placement.wasm.wasm_module.module_hostcancellationslotcount.4101f6d428a3"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
hostCancellationSlotCount(): number
```

Return how many reservations the host cancellation control record holds.

### hostCancellationSlotTicket

<a id="entry-presentation_wasm_host_wasm_module_hostcancellationslotticket"></a>
<a id="placement-placement.wasm.wasm_module.module_hostcancellationslotticket.31ee528c4115"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
hostCancellationSlotTicket(slot_index: number): number
```

Return the ticket a reserved control-record slot answers to, or zero when it is not reserved.

### initThreadPoolWithCapability

<a id="entry-presentation_wasm_host_wasm_module_initthreadpoolwithcapability"></a>
<a id="placement-placement.wasm.wasm_module.module_initthreadpoolwithcapability.356307fe3c6a"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
initThreadPoolWithCapability(worker_count: number): Promise
```

Start the shared WebAssembly Rayon pool and publish its capability after startup succeeds.

### initializeParallelism

<a id="entry-presentation_wasm_api_session_initialize_parallelism"></a>
<a id="placement-placement.wasm.wasm_module.module_initializeparallelism.cf57f2d301bc"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
initializeParallelism(worker_count: number): string
```

Initialize parallel execution for the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_initializeparallelism.b65737d204fb"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.initializeParallelism</code></p>

```typescript signature
initializeParallelism(worker_count: number): string
```

</details>

### parallelismCapability

<a id="entry-presentation_wasm_api_session_parallelism_capability"></a>
<a id="placement-placement.wasm.wasm_module.module_parallelismcapability.1e9632969c40"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
parallelismCapability(): ParallelismCapability
```

Return the parallel execution capability of the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_parallelismcapability.3ffc3c2aeaf5"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.parallelismCapability</code></p>

```typescript signature
parallelismCapability(): ParallelismCapability
```

</details>

### releaseHostCancellationSlot

<a id="entry-presentation_wasm_host_wasm_module_releasehostcancellationslot"></a>
<a id="placement-placement.wasm.wasm_module.module_releasehostcancellationslot.0cdb4a4c9d2b"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
releaseHostCancellationSlot(slot_index: number, ticket: number): void
```

Release one control-record reservation and clear any stop request standing against it.

### reserveHostCancellationSlot

<a id="entry-presentation_wasm_host_wasm_module_reservehostcancellationslot"></a>
<a id="placement-placement.wasm.wasm_module.module_reservehostcancellationslot.081bf1bf35ab"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
reserveHostCancellationSlot(): number
```

Reserve one control-record slot for the calls this thread starts next, or -1 when none is free.

### serializeBulk

<a id="entry-presentation_wasm_api_session_serialize_bulk"></a>
<a id="placement-placement.wasm.wasm_module.module_serializebulk.d66dc15ad809"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
serializeBulk(targets: Expression[]): BulkTextOutcome[]
```

Serialize an ordered collection in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_serializebulk.6da9c7d96404"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.serializeBulk</code></p>

```typescript signature
serializeBulk(targets: Expression[]): BulkTextOutcome[]
```

</details>

### setExecutionMode

<a id="entry-presentation_wasm_api_session_set_execution_mode"></a>
<a id="placement-placement.wasm.wasm_module.module_setexecutionmode.eb3bb85ec56d"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
setExecutionMode(name: string): void
```

Select the execution mode of the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_setexecutionmode.8558c817b7d7"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.setExecutionMode</code></p>

```typescript signature
setExecutionMode(name: string): void
```

</details>

### simplifyBulk

<a id="entry-presentation_wasm_api_session_simplify_bulk"></a>
<a id="placement-placement.wasm.wasm_module.module_simplifybulk.410bd7966c46"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
simplifyBulk(targets: Expression[]): BulkExpressionOutcome[]
```

Simplify an ordered collection in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_simplifybulk.f58e98df3b0c"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.simplifyBulk</code></p>

```typescript signature
simplifyBulk(targets: Expression[]): BulkExpressionOutcome[]
```

</details>

### substituteBulk

<a id="entry-presentation_wasm_api_session_substitute_bulk"></a>
<a id="placement-placement.wasm.wasm_module.module_substitutebulk.80cd62071bc5"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
substituteBulk(
    targets: Expression[],
    variable: Expression,
    value: Expression,
): BulkExpressionOutcome[]
```

Substitute throughout an ordered collection in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_substitutebulk.23b4102b48c2"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.substituteBulk</code></p>

```typescript signature
substituteBulk(
    targets: Expression[],
    variable: Expression,
    value: Expression,
): BulkExpressionOutcome[]
```

</details>

### BulkExpressionOutcome

#### BulkExpressionOutcome.diagnostic

<a id="entry-presentation_wasm_api_bulkexpressionoutcome_diagnostic"></a>
<a id="placement-placement.wasm.wasm_class.bulkexpressionoutcome_diagnostic.3aff803bd40b"></a>
<p class="symi-entry-owner">Raw WebAssembly: BulkExpressionOutcome property</p>

```typescript signature
readonly diagnostic: string | undefined
```

Return the item diagnostic when the operation declined or failed.

#### BulkExpressionOutcome.index

<a id="entry-presentation_wasm_api_bulkexpressionoutcome_index"></a>
<a id="placement-placement.wasm.wasm_class.bulkexpressionoutcome_index.9565b7871b49"></a>
<p class="symi-entry-owner">Raw WebAssembly: BulkExpressionOutcome property</p>

```typescript signature
readonly index: number
```

Return the original input position of this outcome.

#### BulkExpressionOutcome.value

<a id="entry-presentation_wasm_api_bulkexpressionoutcome_value"></a>
<a id="placement-placement.wasm.wasm_class.bulkexpressionoutcome_value.a88ab5dae37a"></a>
<p class="symi-entry-owner">Raw WebAssembly: BulkExpressionOutcome property</p>

```typescript signature
readonly value: Expression | undefined
```

Return the expression value when the item succeeded.

### BulkTextOutcome

#### BulkTextOutcome.diagnostic

<a id="entry-presentation_wasm_api_bulktextoutcome_diagnostic"></a>
<a id="placement-placement.wasm.wasm_class.bulktextoutcome_diagnostic.1f99261ae9a5"></a>
<p class="symi-entry-owner">Raw WebAssembly: BulkTextOutcome property</p>

```typescript signature
readonly diagnostic: string | undefined
```

Return the item diagnostic when the operation declined or failed.

#### BulkTextOutcome.index

<a id="entry-presentation_wasm_api_bulktextoutcome_index"></a>
<a id="placement-placement.wasm.wasm_class.bulktextoutcome_index.eb506bca8e60"></a>
<p class="symi-entry-owner">Raw WebAssembly: BulkTextOutcome property</p>

```typescript signature
readonly index: number
```

Return the original input position of this outcome.

#### BulkTextOutcome.value

<a id="entry-presentation_wasm_api_bulktextoutcome_value"></a>
<a id="placement-placement.wasm.wasm_class.bulktextoutcome_value.e25bb45ec6a7"></a>
<p class="symi-entry-owner">Raw WebAssembly: BulkTextOutcome property</p>

```typescript signature
readonly value: string | undefined
```

Return the canonical text when the item succeeded.

### ParallelismCapability

#### ParallelismCapability.active

<a id="entry-presentation_wasm_api_parallelismcapability_active"></a>
<a id="placement-placement.wasm.wasm_class.parallelismcapability_active.7a56c9003ea3"></a>
<p class="symi-entry-owner">Raw WebAssembly: ParallelismCapability property</p>

```typescript signature
readonly active: boolean
```

Whether the selected backend can currently execute parallel work.

#### ParallelismCapability.backend

<a id="entry-presentation_wasm_api_parallelismcapability_backend"></a>
<a id="placement-placement.wasm.wasm_class.parallelismcapability_backend.6ace752fbfa8"></a>
<p class="symi-entry-owner">Raw WebAssembly: ParallelismCapability property</p>

```typescript signature
readonly backend: string
```

Return the backend selected for this target.

#### ParallelismCapability.compiled

<a id="entry-presentation_wasm_api_parallelismcapability_compiled"></a>
<a id="placement-placement.wasm.wasm_class.parallelismcapability_compiled.cdc011ae2a95"></a>
<p class="symi-entry-owner">Raw WebAssembly: ParallelismCapability property</p>

```typescript signature
readonly compiled: boolean
```

Whether this target was compiled with a parallel backend.

#### ParallelismCapability.initialized

<a id="entry-presentation_wasm_api_parallelismcapability_initialized"></a>
<a id="placement-placement.wasm.wasm_class.parallelismcapability_initialized.4f99d93e07ed"></a>
<p class="symi-entry-owner">Raw WebAssembly: ParallelismCapability property</p>

```typescript signature
readonly initialized: boolean
```

Whether the process-wide parallel backend has been initialized.

#### ParallelismCapability.maximumOperationConcurrency

<a id="entry-presentation_wasm_api_parallelismcapability_maximum_operation_concurrency"></a>
<a id="placement-placement.wasm.wasm_class.parallelismcapability_maximumoperationconcurrency.0130e4f9bd13"></a>
<p class="symi-entry-owner">Raw WebAssembly: ParallelismCapability property</p>

```typescript signature
readonly maximumOperationConcurrency: number
```

Return the largest task batch one operation may admit.

#### ParallelismCapability.selectedMode

<a id="entry-presentation_wasm_api_parallelismcapability_selected_mode"></a>
<a id="placement-placement.wasm.wasm_class.parallelismcapability_selectedmode.42c75b8ac175"></a>
<p class="symi-entry-owner">Raw WebAssembly: ParallelismCapability property</p>

```typescript signature
readonly selectedMode: string
```

Return the execution mode selected for later operations.

#### ParallelismCapability.unavailableReason

<a id="entry-presentation_wasm_api_parallelismcapability_unavailable_reason"></a>
<a id="placement-placement.wasm.wasm_class.parallelismcapability_unavailablereason.07bb1c3498ad"></a>
<p class="symi-entry-owner">Raw WebAssembly: ParallelismCapability property</p>

```typescript signature
readonly unavailableReason: string | undefined
```

Return the stable reason parallel execution is unavailable, if any.

#### ParallelismCapability.workerCount

<a id="entry-presentation_wasm_api_parallelismcapability_worker_count"></a>
<a id="placement-placement.wasm.wasm_class.parallelismcapability_workercount.2182d20e0f67"></a>
<p class="symi-entry-owner">Raw WebAssembly: ParallelismCapability property</p>

```typescript signature
readonly workerCount: number
```

Return the configured worker count.

