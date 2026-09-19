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

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.evaluate_truth`](/symi/python/logic#evaluate_truth) in Python, [`UniffiExpression.evaluateTruth`](/symi/kotlin/logic#evaluate_truth) in Kotlin, [`UniffiExpression.evaluateTruth`](/symi/swift/logic#evaluate_truth) in Swift, [`api::Expression::evaluate_truth`](/symi/rust/logic#evaluate_truth) in Rust.*


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

### eliminateDerivedLogicalConnectives

<a id="entry-presentation_wasm_logic_capability_discrete_mathematics_eliminate_derived_logical_connectives_api_logic_session_eliminate_derived_logical_connectives"></a>
<a id="placement-placement.wasm.wasm_module.module_eliminatederivedlogicalconnectives.86334ce1fe59"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
eliminateDerivedLogicalConnectives(input_expression: Expression): Expression
```

Rewrite every `implies`, `equivalent`, and `exclusive_or` occurrence into the `logical_and` / `logical_or` / `logical_not` basis. This is a directed presentation request, not a cost decision, so the result may be larger than the input; a formula already in the basis, and a conversion that would cross the fixed size ceiling, both return the input unchanged.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_eliminatederivedlogicalconnectives.fbf21e222b48"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.eliminateDerivedLogicalConnectives</code></p>

```typescript signature
eliminateDerivedLogicalConnectives(value: ExpressionLike): Expression
```

<a id="placement-placement.wasm.wasm_class.context_eliminatederivedlogicalconnectives.3556bcb58aec"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.eliminateDerivedLogicalConnectives</code></p>

```typescript signature
eliminateDerivedLogicalConnectives(input_expression: Expression): Expression
```

<a id="placement-placement.wasm.javascript_facade.symifacade_eliminatederivedlogicalconnectives.ac05ca331ca5"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.eliminateDerivedLogicalConnectives</code></p>

```typescript signature
eliminateDerivedLogicalConnectives(value: ExpressionLike): Expression
```

</details>

### eliminateDerivedLogicalConnectives

<a id="entry-presentation_wasm_logic_capability_discrete_mathematics_eliminate_derived_logical_connectives_api_expression_operations_expression_eliminate_derived_logical_connectives"></a>
<a id="placement-placement.wasm.javascript_facade.expression_eliminatederivedlogicalconnectives.03dbed4ef109"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
eliminateDerivedLogicalConnectives(): Expression
```

Rewrite every `implies`, `equivalent`, and `exclusive_or` occurrence in this formula into the `logical_and` / `logical_or` / `logical_not` basis. This is a directed presentation request, not a cost decision, so the result may be larger than the input; a formula already in the basis, and a conversion that would cross the fixed size ceiling, both return the input unchanged.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_eliminatederivedlogicalconnectives.1f7a9ae4427f"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.eliminateDerivedLogicalConnectives</code></p>

```typescript signature
eliminateDerivedLogicalConnectives(): Expression
```

</details>

### evaluateTruth

<a id="entry-presentation_wasm_logic_capability_discrete_mathematics_evaluate_truth_api_session_evaluate_truth"></a>
<a id="placement-placement.wasm.wasm_module.module_evaluatetruth.fb0e4e2d9223"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
evaluateTruth(input_expression: Expression): boolean | undefined
```

`evaluate_truth(predicate)` uses exact three-valued logic. Python returns `True`, `False`, or `None`; JavaScript returns `true`, `false`, or `null`; Rust returns `truth_value`. The third value means undecided, never false: a host-language `if` reads it as falsy, so compare against `True` / `False` explicitly. Order, equality and sign relations between closed-form real constants — rationals, `pi`, radicals and real algebraic numbers — are decided exactly by rational arithmetic; transcendental, symbolic and provably non-real operands decline rather than guess.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_evaluatetruth.a9ce02ce8752"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.evaluateTruth</code></p>

```typescript signature
evaluateTruth(predicate: ExpressionLike): boolean | null
```

<a id="placement-placement.wasm.wasm_class.context_evaluatetruth.863d04a2419d"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.evaluateTruth</code></p>

```typescript signature
evaluateTruth(input_expression: Expression): boolean | undefined
```

<a id="placement-placement.wasm.javascript_facade.symifacade_evaluatetruth.b770fcd9faa8"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.evaluateTruth</code></p>

```typescript signature
evaluateTruth(predicate: ExpressionLike): boolean | null
```

</details>

### evaluateTruth

<a id="entry-presentation_wasm_logic_capability_discrete_mathematics_evaluate_truth_api_expression_evaluate_truth"></a>
<a id="placement-placement.wasm.javascript_facade.expression_evaluatetruth.e2bc58e39b58"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
evaluateTruth(): boolean | null
```

`evaluate_truth(predicate)` uses exact three-valued logic. Python returns `True`, `False`, or `None`; JavaScript returns `true`, `false`, or `null`; Rust returns `truth_value`. The third value means undecided, never false: a host-language `if` reads it as falsy, so compare against `True` / `False` explicitly. Order, equality and sign relations between closed-form real constants — rationals, `pi`, radicals and real algebraic numbers — are decided exactly by rational arithmetic; transcendental, symbolic and provably non-real operands decline rather than guess.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_evaluatetruth.1071ae13c246"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.evaluateTruth</code></p>

```typescript signature
evaluateTruth(): boolean | undefined
```

</details>

### introduceDerivedLogicalConnectives

<a id="entry-presentation_wasm_logic_capability_discrete_mathematics_introduce_derived_logical_connectives_api_logic_session_introduce_derived_logical_connectives"></a>
<a id="placement-placement.wasm.wasm_module.module_introducederivedlogicalconnectives.83816a1b06a4"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
introduceDerivedLogicalConnectives(input_expression: Expression): Expression
```

Recognise the exact canonical definitions of implication, equivalence, and exclusive-or inside an and/or/not formula and replace each match with the derived connective, but only where the replacement is strictly smaller. It is a local structural compressor: a formula merely equivalent to a definition, without matching it, is left unchanged.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_introducederivedlogicalconnectives.1178bb7be801"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.introduceDerivedLogicalConnectives</code></p>

```typescript signature
introduceDerivedLogicalConnectives(value: ExpressionLike): Expression
```

<a id="placement-placement.wasm.wasm_class.context_introducederivedlogicalconnectives.b3bbbe9c8c71"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.introduceDerivedLogicalConnectives</code></p>

```typescript signature
introduceDerivedLogicalConnectives(input_expression: Expression): Expression
```

<a id="placement-placement.wasm.javascript_facade.symifacade_introducederivedlogicalconnectives.d87c58b06818"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.introduceDerivedLogicalConnectives</code></p>

```typescript signature
introduceDerivedLogicalConnectives(value: ExpressionLike): Expression
```

</details>

### introduceDerivedLogicalConnectives

<a id="entry-presentation_wasm_logic_capability_discrete_mathematics_introduce_derived_logical_connectives_api_expression_operations_expression_introduce_derived_logical_connectives"></a>
<a id="placement-placement.wasm.javascript_facade.expression_introducederivedlogicalconnectives.d61df7a5125f"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
introduceDerivedLogicalConnectives(): Expression
```

Recognise the exact canonical definitions of implication, equivalence, and exclusive-or inside this and/or/not formula and replace each match with the derived connective, but only where the replacement is strictly smaller. It is a local structural compressor: a formula merely equivalent to a definition, without matching it, is left unchanged.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_introducederivedlogicalconnectives.174398edf818"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.introduceDerivedLogicalConnectives</code></p>

```typescript signature
introduceDerivedLogicalConnectives(): Expression
```

</details>

### logicalFalse

<a id="entry-presentation_wasm_logic_capability_discrete_mathematics_logical_false_api_session_logical_false"></a>
<a id="placement-placement.wasm.wasm_module.module_logicalfalse.6aee9d3550be"></a>
<p class="symi-entry-owner">Default context</p>

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
<p class="symi-entry-owner">Explicit context: <code>Context.logicalFalse</code></p>

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

<a id="entry-presentation_wasm_logic_capability_discrete_mathematics_logical_true_api_session_logical_true"></a>
<a id="placement-placement.wasm.wasm_module.module_logicaltrue.8c894af8e323"></a>
<p class="symi-entry-owner">Default context</p>

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
<p class="symi-entry-owner">Explicit context: <code>Context.logicalTrue</code></p>

```typescript signature
logicalTrue(): Expression
```

<a id="placement-placement.wasm.javascript_facade.symifacade_logicaltrue.42cc56407238"></a>
<p class="symi-entry-owner">SymiFacade property: <code>SymiFacade.logicalTrue</code></p>

```typescript signature
readonly logicalTrue: Expression
```

</details>

### minimizeLogical

<a id="entry-presentation_wasm_logic_capability_discrete_mathematics_minimize_logical_api_logic_session_minimize_logical"></a>
<a id="placement-placement.wasm.wasm_module.module_minimizelogical.b1927e04de80"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
minimizeLogical(input_expression: Expression): Expression
```

The smaller of the minimum sum-of-products and product-of-sums two-level forms. Within a practical atom bound this is the exact Quine–McCluskey minimum (prime implicants, essential extraction, and Petrick's method on the residual chart); above it, an Espresso-style heuristic returns a good — not provably minimal — cover.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_minimizelogical.e8634cea64ca"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.minimizeLogical</code></p>

```typescript signature
minimizeLogical(input_expression: Expression): Expression
```

</details>

### minimizeLogical

<a id="entry-presentation_wasm_logic_capability_discrete_mathematics_minimize_logical_api_expression_operations_expression_minimize_logical"></a>
<a id="placement-placement.wasm.wasm_class.expression_minimizelogical.1eeedfe07389"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
minimizeLogical(): Expression
```

The smaller of the minimum sum-of-products and product-of-sums two-level forms. Within a practical atom bound this is the exact Quine–McCluskey minimum (prime implicants, essential extraction, and Petrick's method on the residual chart); above it, an Espresso-style heuristic returns a good — not provably minimal — cover.

### simplifyLogical

<a id="entry-presentation_wasm_logic_capability_discrete_mathematics_simplify_logical_api_logic_session_simplify_logical"></a>
<a id="placement-placement.wasm.wasm_module.module_simplifylogical.c91f7d3e4b36"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
simplifyLogical(input_expression: Expression): Expression
```

Return whichever of the original form, the disjunctive and conjunctive normal forms, and the two minimal two-level forms has the smallest weighted size.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_simplifylogical.d5a84750401d"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.simplifyLogical</code></p>

```typescript signature
simplifyLogical(value: ExpressionLike): Expression
```

<a id="placement-placement.wasm.wasm_class.context_simplifylogical.0449b898501d"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.simplifyLogical</code></p>

```typescript signature
simplifyLogical(input_expression: Expression): Expression
```

<a id="placement-placement.wasm.javascript_facade.symifacade_simplifylogical.7e8c3741add9"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.simplifyLogical</code></p>

```typescript signature
simplifyLogical(value: ExpressionLike): Expression
```

</details>

### simplifyLogical

<a id="entry-presentation_wasm_logic_capability_discrete_mathematics_simplify_logical_api_expression_operations_expression_simplify_logical"></a>
<a id="placement-placement.wasm.javascript_facade.expression_simplifylogical.dce05b71d665"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
simplifyLogical(): Expression
```

Return whichever of the original form, the disjunctive and conjunctive normal forms, and the two minimal two-level forms has the smallest weighted size.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_simplifylogical.b150d8671266"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.simplifyLogical</code></p>

```typescript signature
simplifyLogical(): Expression
```

</details>

