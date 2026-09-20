# Undefined functions

An undefined function is a named unknown: a function symbol with no definition,
such as the `y` of an ordinary differential equation. It is not an expression.
It is a handle from which two things are built — a *call* `y(x)`, and a
*structural derivative* \(y''(x)\) — and those expressions are what the solvers,
classifiers, and verifiers read.

Three different operations in this manual are spelled `derivative` or
`differentiate`. They are not interchangeable:

| Task | Entry | Page |
|---|---|---|
| Differentiate an expression now | `differentiate` | [Calculus](calculus.md) |
| Wrap an expression in an unevaluated derivative | `derivative` | [Deferred forms](deferred-forms.md) |
| Build a derivative of a named unknown from argument orders | `derivative` below | This page |

## Constructing a named unknown

### undefined_function

<a id="entry-presentation_wasm_api_session_undefined_function"></a>
<a id="placement-placement.wasm.wasm_class.context_undefinedfunction.57b03936c6a5"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context</p>

```typescript signature
undefinedFunction(name: string): UndefinedFunction
```


A callable proxy for a user-named function. The handle belongs to the context
that made it, and every expression built from it belongs to that same context.

### UndefinedFunction

*Not exposed by the WASM / JavaScript bindings. Available as [`UndefinedFunction`](/symi/python/undefined-functions#undefinedfunction) in Python, [`api::UndefinedFunction`](/symi/rust/undefined-functions#undefinedfunction) in Rust.*


The handle itself. It carries no mathematical content beyond its name and its
context; all of its meaning appears in the expressions it builds.

## Calling the function

### call

<a id="entry-presentation_wasm_api_undefinedfunction_call"></a>
<a id="placement-placement.wasm.wasm_class.undefinedfunction_call.b0d6218d5723"></a>
<p class="symi-entry-owner">Raw WebAssembly: UndefinedFunction method</p>

```typescript signature
call(args: Expression[]): Expression
```


The function-call expression `name(arguments...)`. Argument order is the
function's own argument order and is preserved exactly; it is what
[`derivative`](#derivative) indexes its orders against. Python spells the same
operation as ordinary call syntax, `y(x)`.

## Structural derivatives

### derivative

<a id="entry-presentation_wasm_api_undefinedfunction_derivative"></a>
<a id="placement-placement.wasm.wasm_class.undefinedfunction_derivative.19e919814456"></a>
<p class="symi-entry-owner">Raw WebAssembly: UndefinedFunction method</p>

```typescript signature
derivative(orders: Uint32Array, arguments: Expression[]): Expression
```


The structural derivative node of the named function — the shape the ODE and
PDE classifiers recognise. There is **one order per argument**, matched
positionally against `arguments`: `y.derivative([1], [x])` is \(y'(x)\),
`y.derivative([2], [x])` is \(y''(x)\), and `u.derivative([1, 2], [x, t])` is
\(\partial_x \partial_t^2 u(x, t)\). An order list whose length differs from the
argument list is an error rather than a padded guess.

This is distinct from [`derivative`](deferred-forms.md#derivative) on a
context or an expression, which wraps an arbitrary *expression* in a deferred
differentiation placeholder. Equations built from that placeholder are not
recognised by the differential-equation classifiers, so an equation whose
unknown is a named function must use the operation on this page.

## Object identity and lifetime

These members are owner-qualified here because `name`, `session`, and
`is_stale` are member names many unrelated types share; each entry below
documents the `UndefinedFunction` member and nothing else.

### UndefinedFunction.name

*Not exposed by the WASM / JavaScript bindings. Available as [`api::UndefinedFunction::name`](/symi/rust/undefined-functions#undefinedfunction_name) in Rust.*


The name the handle was created with.

### UndefinedFunction.session

*Not exposed by the WASM / JavaScript bindings. Available as [`api::UndefinedFunction::session`](/symi/rust/undefined-functions#undefinedfunction_session) in Rust.*


The context that owns the handle. Expressions built from a handle belong to
that context, and mixing contexts is refused rather than silently rebased.

### UndefinedFunction.generation

*Not exposed by the WASM / JavaScript bindings. Available as [`api::UndefinedFunction::generation`](/symi/rust/undefined-functions#undefinedfunction_generation) in Rust.*


The context generation the handle was published in, which is what the
staleness check below compares against.

### UndefinedFunction.is_stale

*Not exposed by the WASM / JavaScript bindings. Available as [`api::UndefinedFunction::is_stale`](/symi/rust/undefined-functions#undefinedfunction_is_stale) in Rust.*


Whether the owning context has moved past the generation this handle belongs
to. The concept, and what to do about it, is explained once in
[Context safety](context-safety.md).

## Text output

### UndefinedFunction.__repr__

*Not exposed by the WASM / JavaScript bindings. Available as [`UndefinedFunction.__repr__`](/symi/python/undefined-functions#undefinedfunction_repr) in Python.*


The Python `repr()` text naming the undefined function.

### UndefinedFunction.toString

<a id="entry-presentation_wasm_host_wasm_undefinedfunction_tostring"></a>
<a id="placement-placement.wasm.wasm_class.undefinedfunction_tostring.e24a69e52de8"></a>
<p class="symi-entry-owner">Raw WebAssembly: UndefinedFunction method</p>

```typescript signature
toString(): string
```


The JavaScript text naming the undefined function.

## Example


```javascript
const context = new symi.Context();
const x = context.symbol("x");
const y = context.undefinedFunction("y");
console.log(y.toString());
const equation = y.derivative([1], [x]).subtract(y.call([x]));
console.log(context.solveOrdinaryDifferentialEquation(equation, y.call([x]), "x").toString());
```

