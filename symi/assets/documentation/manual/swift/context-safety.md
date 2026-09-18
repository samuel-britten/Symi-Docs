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

*Not exposed by the Swift bindings. Available as [`Context.execution_mode`](/symi/python/context-safety#execution_mode) in Python, [`api::Session::execution_mode`](/symi/rust/context-safety#execution_mode) in Rust.*


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

*Not exposed by the Swift bindings. Available as [`Context.simplify_bulk`](/symi/python/context-safety#simplify_bulk) in Python, [`api::Session::simplify_bulk`](/symi/rust/context-safety#simplify_bulk) in Rust.*


The ordered bulk operations `simplify_bulk`, `expand_bulk`,
`differentiate_bulk`, `substitute_bulk`, `evaluate_numeric_bulk`, and
`serialize_bulk` validate every input against one context and generation before
work begins. Results retain input order and use one captured operation
configuration. A reset during the call rejects publication rather than
returning a partially completed collection. An item-level decline or
diagnostic does not reorder or cancel unrelated items.
