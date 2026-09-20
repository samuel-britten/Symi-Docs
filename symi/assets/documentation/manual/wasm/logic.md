# Boolean algebra and logic

See [Evaluation and constants](evaluation-and-constants.md) for the distinction
between symbolic relations, `execute`, logical simplification, and the exact
three-valued host query.

Logical formulas are built from the connective heads `logical_and`,
`logical_or`, `logical_not`, `implies`, `equivalent` (the n-ary "all
arguments equal" biconditional), and `exclusive_or` (n-ary parity), applied
through `parse` or `call`/`function_call` over the relational atoms
(`equal`, `less_than`, …) and ordinary symbols treated as Boolean
variables. The associative-commutative connectives auto-simplify to a flat,
sorted, deduplicated, constant- and complement-folded canonical form. The
two Boolean constants are `logical_true` and `logical_false`.

Normal forms and Boolean simplification are documented in
[logical transforms](logical-transforms.md).

### logical_true

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.logical_true`](/symi/python/logic#logical_true) in Python, [`UniffiSession.logicalTrue`](/symi/kotlin/logic#logical_true) in Kotlin, [`UniffiSession.logicalTrue`](/symi/swift/logic#logical_true) in Swift, [`api::Session::logical_true`](/symi/rust/logic#logical_true) in Rust.*


The Boolean constant true (\(\top\)).

### logical_false

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.logical_false`](/symi/python/logic#logical_false) in Python, [`UniffiSession.logicalFalse`](/symi/kotlin/logic#logical_false) in Kotlin, [`UniffiSession.logicalFalse`](/symi/swift/logic#logical_false) in Swift, [`api::Session::logical_false`](/symi/rust/logic#logical_false) in Rust.*


The Boolean constant false (\(\bot\)).

### evaluate_truth

<a id="entry-presentation_wasm_api_session_evaluate_truth"></a>
<a id="placement-placement.wasm.wasm_module.module_evaluatetruth.fb0e4e2d9223"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
evaluateTruth(input_expression: Expression): boolean | undefined
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_evaluatetruth.a9ce02ce8752"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.evaluateTruth</code></p>

```typescript signature
evaluateTruth(predicate: ExpressionLike): boolean | null
```

<a id="placement-placement.wasm.wasm_class.context_evaluatetruth.863d04a2419d"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.evaluateTruth</code></p>

```typescript signature
evaluateTruth(input_expression: Expression): boolean | undefined
```

<a id="placement-placement.wasm.javascript_facade.symifacade_evaluatetruth.b770fcd9faa8"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.evaluateTruth</code></p>

```typescript signature
evaluateTruth(predicate: ExpressionLike): boolean | null
```

<a id="placement-placement.wasm.javascript_facade.expression_evaluatetruth.e2bc58e39b58"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.evaluateTruth</code></p>

```typescript signature
evaluateTruth(): boolean | null
```

<a id="placement-placement.wasm.wasm_class.expression_evaluatetruth.1071ae13c246"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.evaluateTruth</code></p>

```typescript signature
evaluateTruth(): boolean | undefined
```

</details>


`evaluate_truth(predicate)` uses exact three-valued logic. Python returns `True`, `False`, or
`None`; JavaScript returns `true`, `false`, or `null`; Rust returns `TruthValue`. Non-logical
numeric expressions are rejected.

**The third value means undecided, never false.** A `None` / `null` / `unknown` result says the
procedure could not prove either verdict — not that the predicate is false. This distinction is
load-bearing at the call site, because a host-language `if` treats `None` and `null` as falsy: a
test written `if evaluate_truth(...)` silently reads every undecided relation as false. Compare
against `True` / `False` (or `true` / `false`) explicitly whenever the undecided case matters.

Order, equality and sign relations are decided exactly, by rational and polynomial arithmetic
only — no floating point ever enters the decision. The decided class is the closed-form real
constants: integer and rational literals, `pi`, real algebraic numbers, sums, products, integer
powers, and rational powers of a positive base (so `sqrt` and nested radicals), together with
`abs` and `signum` over those. Within that class a comparison is decided in full, including
values that need term collection to become constant at all, such as `x + sqrt(5) < x + 3`.

Outside it the answer is `unknown` by design, not by accident: comparisons whose difference
involves `e`, `log 2` or a special-function value, order between unassumed symbols, and any
relation with a provably non-real operand — `sqrt(-4)` is `2i`, about which no order verdict is
meaningful — all decline rather than guess.

## Example

Logical expressions carry a three-valued outcome.

```javascript
const x = symi.symbol("x");

console.log(symi.evaluateTruth(symi.lessThan(symi.rational(1n, 3n), 1)));
console.log(symi.evaluateTruth(symi.lessThan(x, 1)));
```


## Additional API

### logicalFalse

<a id="entry-presentation_wasm_api_session_logical_false"></a>
<a id="placement-placement.wasm.wasm_module.module_logicalfalse.6aee9d3550be"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
logicalFalse(): Expression
```

The Boolean constant false (\(\bot\)).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_logicalfalse.9bc67d1ef760"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.logicalFalse</code></p>

```typescript signature
readonly logicalFalse: Expression
```

<a id="placement-placement.wasm.wasm_class.context_logicalfalse.94e8b3dd883e"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.logicalFalse</code></p>

```typescript signature
logicalFalse(): Expression
```

<a id="placement-placement.wasm.javascript_facade.symifacade_logicalfalse.2e267b20bbb1"></a>
<p class="symi-entry-owner">SymiFacade property: <code>SymiFacade.logicalFalse</code></p>

```typescript signature
readonly logicalFalse: Expression
```

</details>

### logicalTrue

<a id="entry-presentation_wasm_api_session_logical_true"></a>
<a id="placement-placement.wasm.wasm_module.module_logicaltrue.8c894af8e323"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
logicalTrue(): Expression
```

The Boolean constant true (\(\top\)).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_logicaltrue.9727eb1248c1"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.logicalTrue</code></p>

```typescript signature
readonly logicalTrue: Expression
```

<a id="placement-placement.wasm.wasm_class.context_logicaltrue.e8dfff3d592b"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.logicalTrue</code></p>

```typescript signature
logicalTrue(): Expression
```

<a id="placement-placement.wasm.javascript_facade.symifacade_logicaltrue.42cc56407238"></a>
<p class="symi-entry-owner">SymiFacade property: <code>SymiFacade.logicalTrue</code></p>

```typescript signature
readonly logicalTrue: Expression
```

</details>

