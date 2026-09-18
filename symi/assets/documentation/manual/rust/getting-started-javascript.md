# Getting started: JavaScript / WASM

From the repository root, build the raw WebAssembly package with the
project-local helper, then wrap it with the recommended facade. The helper runs
`wasm-pack` and restores the direct names of `sin`, `cos`, `sqrt`, and the other
functions the bindings export under a namespace so they cannot shadow the
compiler's own math routines; a bare `wasm-pack build` publishes those only as
`raw.mathematical_functions.sin` and so on.

```bash
python tools/wasm_universal.py --target nodejs --output symi-wasm/pkg-node
```


From the repository root, build the atomic browser package with the
project-local helper. Then initialize the raw worker adapter before starting
automatic bulk work. The browser must be cross-origin isolated so that
`SharedArrayBuffer` is available:

```bash
python tools/wasm_atomic.py
```


Both steps are needed. The workers are a process-wide resource, while the
execution mode is the session's permission to use them, and a session starts in
`sequential` mode; a bootstrapped pool no session has been switched to
`automatic` runs nothing in parallel. Use `context.parallelismCapability()` to
observe whether initialization completed and which mode the session will apply.
The universal package remains serial and uses the same mathematical API.

Expression-like inputs are facade expressions, `bigint`, and safe integral
`number` values. Use `bigint` for arbitrary-precision values. Nonintegral and
unsafe `number` values are rejected rather than rounded.

The facade duplicates owned handles before calling the raw wasm-bindgen layer,
so iterable arguments do not consume the caller's objects:


Pair-like inputs use records rather than flat interleaved arrays:


Constants are properties. Classes are PascalCase and members are camelCase,
so the Symi name `evaluate_truth` is reached as `evaluateTruth`, and
`numerator_denominator`, `real_part`, and `imaginary_part` as
`numeratorDenominator`, `realPart`, and `imaginaryPart`. The supplied
`symi.d.ts` describes the facade.

Use `new symi.Context()` for an isolated session. A facade expression from
another context, or one invalidated by `resetContext()`, produces a
`SymiContextError`. Other errors derive from `SymiError` and expose
`category`, `operation`, `parameterPath`, `received`, `expected`, and `hint`.

The generated wasm-bindgen module remains available as `symi.raw` for
advanced callers and compatibility. Its arrays follow wasm-bindgen ownership
rules and its ABI-shaped signatures are not the recommended public interface.
See [Migration](migration.md) for the shape changes.
