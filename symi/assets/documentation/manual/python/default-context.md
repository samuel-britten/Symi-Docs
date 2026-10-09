# The default context and module-level functions

Every operation in Symi runs against a *context* — the symbol table, the
assumption records, and the hash-consed expression store. You can manage
contexts explicitly (see [Construction and parsing](construction-and-parsing.md)), but
for everyday use the bindings provide a **default context**: a context created
automatically per thread (per module instance in WASM), shared by a set of
module-level functions that mirror the `Context` class methods one-for-one.

```python
import symi

x = symi.symbol("x", positive=True)
print(symi.factor(x**2 + 2*x + 1))       # (1 + x)^2
print(symi.integrate(symi.sin(x), x))
print(symi.pi * x**2)                    # constants are values
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

<a id="placement-placement.python.python_module.module_default_context.4c78b13e3560"></a>
`symi.default_context()`


Return a handle to the thread's default context — the same context every
module-level function and direct structural-class constructor uses. Use it for
`undefined_function`, or to pass to code written against the explicit-context
API. Each call returns a new handle to the same underlying context.

### clear_assumptions

<a id="placement-placement.python.python_class.context_clear_assumptions.771138d405c3"></a>
`Context.clear_assumptions(variable)`

<a id="placement-placement.python.python_module.module_clear_assumptions.398dca35137b"></a>
`symi.clear_assumptions(variable)`


Reset one symbol's assumptions to the default (complex domain, every property
unknown). This is the only sanctioned widening operation: it is explicit and
per-symbol, and the symbol's identity is untouched, so existing expressions
remain structurally valid. Use it when a monotonic-refinement conflict blocks
a re-declaration you actually intend.

### assumptions_of

<a id="placement-placement.python.python_class.context_assumptions_of.e7cbe7b56f50"></a>
`Context.assumptions_of(variable)`

<a id="placement-placement.python.python_module.module_assumptions_of.424be849193d"></a>
`symi.assumptions_of(variable)`


Return the symbol's current assumptions as a native Python mapping or
JavaScript record with `domain`, `positive`, `negative`, `nonzero`, and
`finite` fields. The variable may be a name or same-context symbol. The domain
is one of `complex`, `real`, `rational`, `integer`, `natural`, or
`positive_integer`; truth-valued fields are `yes`, `no`, or `unknown`.

### interner_length

<a id="placement-placement.python.python_class.context_interner_length.39934db2a23f"></a>
`Context.interner_length()`

<a id="placement-placement.python.python_module.module_interner_length.6d201fc0bf07"></a>
`symi.interner_length()`


Number of live expressions currently interned in the context. Dead entries
awaiting the amortized sweep are not counted. Useful for observing memory in
long-running sessions and in tests that assert the store stays bounded.

## Example

Module-level calls share one context; an explicit context isolates a computation.

```python
import symi

shared = symi.symbol("shared")
print(symi.default_context().integrate(shared, "shared"))

isolated = symi.Context()
isolated_symbol = isolated.symbol("shared")
print(isolated.integrate(isolated_symbol, "shared"))
```

