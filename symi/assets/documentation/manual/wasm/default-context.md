# The default context and module-level functions

Every operation in Symi runs against a *context* — the symbol table, the
assumption records, and the hash-consed expression store. You can manage
contexts explicitly (see [Construction and parsing](construction-and-parsing.md)), but
for everyday use the bindings provide a **default context**: a context created
automatically per thread (per module instance in WASM), shared by a set of
module-level functions that mirror the `Context` class methods one-for-one.


```javascript
const raw = require("./pkg-node/symi_wasm.js");
const { createFacade } = require("./facade/symi.js");
const symi = createFacade(raw);

const x = symi.symbol("x");
console.log(symi.parse("x^2 + 2*x + 1").toString());
console.log(symi.pi.multiply(x.power(2)).toString());
```

Rules of the model:

- **One default context per thread.** The Rust core is thread-safe and its
  public types are `Send + Sync`, but a *default* context is a convenience for
  a caller who did not make one, so each thread gets its own rather than
  sharing one implicitly. The Python classes are unsendable and WebAssembly is
  single-threaded today, so in those hosts objects never cross threads anyway. Objects made by module functions and by
  `default_context()` interoperate freely; objects from an explicit
  `context()` must not be mixed in (as ever, contexts do not mix).
- **Assumptions are per-name and session-wide.** `symbol("x", positive=True)`
  refines what `x` means everywhere in the default context, retroactively.
  Refinement is monotonic: strengthening an unknown property is allowed,
  contradicting an earlier declaration raises an error. `clear_assumptions`
  is the escape hatch; a fresh `context()` gives full isolation.
- **Memory is bounded by live objects.** The expression store holds weak
  references: expressions you no longer hold are reclaimed automatically, so
  there is no module-level `reset_context` and long sessions do not leak.
  `interner_length` reports the live count.
- **Structural constructors use the default context.**
  `matrix`, `point_2d`, `segment_2d`, `polygon_2d`, `triangle_2d`, and
  `circle_2d` are both exported classes and default-context constructors:
  call `Matrix([[x, y]])` in Python or `symi.matrix([[x, y]])` through the
  JavaScript facade. Their methods on an explicit `Context()` remain available
  for isolated construction. `undefined_function` remains context-only.
  `reset_context` is likewise context-only: resetting the shared default
  context would strand every live object, and the weak store removes the
  memory reason to do it.
- **Python `import *` shadows builtins.** The module exports `abs`, `min`,
  and `max`; use `import symi as sc` in code that also needs the Python
  builtins.

## Functions

### default_context

*Not exposed by the WASM / JavaScript bindings. Available as [`module.default_context`](/symi/python/default-context#default_context) in Python, [`api::defaults::Session::default_context`](/symi/rust/default-context#default_context) in Rust.*


Return a handle to the thread's default context — the same context every
module-level function and direct structural-class constructor uses. Use it for
`undefined_function`, or to pass to code written against the explicit-context
API. Each call returns a new handle to the same underlying context.

### clear_assumptions

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.clear_assumptions`](/symi/python/default-context#clear_assumptions) in Python, [`UniffiSession.clearAssumptions`](/symi/kotlin/default-context#clear_assumptions) in Kotlin, [`UniffiSession.clearAssumptions`](/symi/swift/default-context#clear_assumptions) in Swift, [`api::Session::clear_assumptions`](/symi/rust/default-context#clear_assumptions) in Rust.*


Reset one symbol's assumptions to the default (complex domain, every property
unknown). This is the only sanctioned widening operation: it is explicit and
per-symbol, and the symbol's identity is untouched, so existing expressions
remain structurally valid. Use it when a monotonic-refinement conflict blocks
a re-declaration you actually intend.

### assumptions_of

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.assumptions_of`](/symi/python/default-context#assumptions_of) in Python, [`UniffiSession.assumptionsOf`](/symi/kotlin/default-context#assumptions_of) in Kotlin, [`UniffiSession.assumptionsOf`](/symi/swift/default-context#assumptions_of) in Swift, [`api::Session::assumptions_of`](/symi/rust/default-context#assumptions_of) in Rust.*


Return the symbol's current assumptions as a native Python mapping or
JavaScript record with `domain`, `positive`, `negative`, `nonzero`, and
`finite` fields. The variable may be a name or same-context symbol. The domain
is one of `complex`, `real`, `rational`, `integer`, `natural`, or
`positive_integer`; truth-valued fields are `yes`, `no`, or `unknown`.

### interner_length

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.interner_length`](/symi/python/default-context#interner_length) in Python, [`UniffiSession.internerLength`](/symi/kotlin/default-context#interner_length) in Kotlin, [`UniffiSession.internerLength`](/symi/swift/default-context#interner_length) in Swift, [`api::Session::interner_length`](/symi/rust/default-context#interner_length) in Rust.*


Number of live expressions currently interned in the context. Dead entries
awaiting the amortized sweep are not counted. Useful for observing memory in
long-running sessions and in tests that assert the store stays bounded.

## Example

This family is not part of the recommended JavaScript facade in this release. Call it through the generated `symi.raw` layer, whose entries are listed with their wasm-bindgen signatures above, and read [Migration](migration.md) for the ownership rules that apply there.


## Additional API

### assumptionsOf

<a id="entry-presentation_wasm_api_session_assumptions_of"></a>
<a id="placement-placement.wasm.wasm_module.module_assumptionsof.55389b6d8956"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
assumptionsOf(name: string): string
```

Return every assumption declared about one symbol, as a list of proposition texts such as `"real(x)"` or `"prime(n)"`. The variable may be a name or same-context symbol. The list is what was declared, not what can be proved; use `ask` for a three-valued verdict.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_assumptionsof.3e2500baccd2"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.assumptionsOf</code></p>

```typescript signature
assumptionsOf(value: VariableLike): Record<string, string>
```

<a id="placement-placement.wasm.wasm_class.context_assumptionsof.66a8eb453c55"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.assumptionsOf</code></p>

```typescript signature
assumptionsOf(name: string): string
```

<a id="placement-placement.wasm.javascript_facade.symifacade_assumptionsof.b9741e10cd22"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.assumptionsOf</code></p>

```typescript signature
assumptionsOf(value: VariableLike): Record<string, string>
```

</details>

### clearAssumptions

<a id="entry-presentation_wasm_api_session_clear_assumptions"></a>
<a id="placement-placement.wasm.wasm_module.module_clearassumptions.b12f408b3470"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
clearAssumptions(name: string): void
```

Reset one symbol's assumptions to the default (complex domain, every property unknown).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_clearassumptions.5956b856933d"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.clearAssumptions</code></p>

```typescript signature
clearAssumptions(name: string): void
```

</details>

### defaultContext

<a id="entry-presentation_wasm_api_session_default_context"></a>
<a id="placement-placement.wasm.wasm_module.module_defaultcontext.6f6779c9ec73"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
defaultContext(): Context
```

Return a handle to the thread's default context — the same context every module-level function and direct structural-class constructor uses. Use it for `undefined_function`, or to pass to code written against the explicit-context API. Each call returns a new handle to the same underlying context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_defaultcontext.9502059e3f0c"></a>
<p class="symi-entry-owner">SymiFacade property: <code>SymiFacade.defaultContext</code></p>

```typescript signature
defaultContext: Context
```

</details>

### internerLength

<a id="entry-presentation_wasm_api_session_interner_length"></a>
<a id="placement-placement.wasm.wasm_module.module_internerlength.16f9ad37f8f3"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
internerLength(): number
```

Number of live expressions currently interned in the context. Dead entries awaiting the amortized sweep are not counted. Useful for observing memory in long-running sessions and in tests that assert the store stays bounded.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_internerlength.eae1ce3bb1ac"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.internerLength</code></p>

```typescript signature
internerLength(): number
```

</details>

