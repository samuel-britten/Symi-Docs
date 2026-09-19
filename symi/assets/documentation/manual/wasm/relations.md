# Relations and predicates

Relations construct symbolic formulas. They are distinct from host-language truth queries.

## Relations

Relation nodes are used as equations for `solve`/`solveset`, as piecewise
conditions, and as boolean-valued results.

### equal

<a id="entry-presentation_wasm_relations_capability_elementary_functions_equal_api_session_equal"></a>
<a id="placement-placement.wasm.wasm_module.module_equal.8d132f8ca4bd"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
equal(left: Expression, right: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_equal.2dce7bc44567"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.equal</code></p>

```typescript signature
equal(left: Expression, right: Expression): Expression
```

</details>


### not_equal

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.not_equal`](/symi/python/relations#not_equal) in Python, [`UniffiSession.notEqual`](/symi/kotlin/relations#not_equal) in Kotlin, [`UniffiSession.notEqual`](/symi/swift/relations#not_equal) in Swift, [`api::Session::not_equal`](/symi/rust/relations#not_equal) in Rust.*


### less_than

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.less_than`](/symi/python/relations#less_than) in Python, [`UniffiExpression.lessThan`](/symi/kotlin/relations#less_than) in Kotlin, [`UniffiExpression.lessThan`](/symi/swift/relations#less_than) in Swift, [`api::Session::less_than`](/symi/rust/relations#less_than) in Rust.*


### less_than_or_equal

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.less_than_or_equal`](/symi/python/relations#less_than_or_equal) in Python, [`UniffiSession.lessThanOrEqual`](/symi/kotlin/relations#less_than_or_equal) in Kotlin, [`UniffiSession.lessThanOrEqual`](/symi/swift/relations#less_than_or_equal) in Swift, [`api::Session::less_than_or_equal`](/symi/rust/relations#less_than_or_equal) in Rust.*


### greater_than

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.greater_than`](/symi/python/relations#greater_than) in Python, [`UniffiSession.greaterThan`](/symi/kotlin/relations#greater_than) in Kotlin, [`UniffiSession.greaterThan`](/symi/swift/relations#greater_than) in Swift, [`api::Session::greater_than`](/symi/rust/relations#greater_than) in Rust.*


### greater_than_or_equal

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.greater_than_or_equal`](/symi/python/relations#greater_than_or_equal) in Python, [`UniffiSession.greaterThanOrEqual`](/symi/kotlin/relations#greater_than_or_equal) in Kotlin, [`UniffiSession.greaterThanOrEqual`](/symi/swift/relations#greater_than_or_equal) in Swift, [`api::Session::greater_than_or_equal`](/symi/rust/relations#greater_than_or_equal) in Rust.*


## Example

Relations are symbolic expressions until they are evaluated.

```javascript
const x = symi.symbol("x");

console.log(symi.lessThan(x, 1).toString());
console.log(symi.evaluateTruth(symi.lessThan(symi.integer(1n), 2)));
```


## Additional API

### greaterThan

<a id="entry-presentation_wasm_relations_capability_elementary_functions_greater_than_api_session_greater_than"></a>
<a id="placement-placement.wasm.wasm_module.module_greaterthan.3093032cb367"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
greaterThan(left: Expression, right: Expression): Expression
```

Build the relation `left > right` without deciding its truth.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_greaterthan.f224f387e805"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.greaterThan</code></p>

```typescript signature
greaterThan(left: Expression, right: Expression): Expression
```

</details>

### greaterThanOrEqual

<a id="entry-presentation_wasm_relations_capability_elementary_functions_greater_than_or_equal_api_session_greater_than_or_equal"></a>
<a id="placement-placement.wasm.wasm_module.module_greaterthanorequal.50b0a6698716"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
greaterThanOrEqual(left: Expression, right: Expression): Expression
```

Build the relation `left >= right` without deciding its truth.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_greaterthanorequal.ec8578b13d6e"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.greaterThanOrEqual</code></p>

```typescript signature
greaterThanOrEqual(left: Expression, right: Expression): Expression
```

</details>

### lessThan

<a id="entry-presentation_wasm_relations_capability_elementary_functions_less_than_api_session_less_than"></a>
<a id="placement-placement.wasm.wasm_module.module_lessthan.bc55302e0173"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
lessThan(left: Expression, right: Expression): Expression
```

Build the relation `left < right` without deciding its truth.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_lessthan.893ab0968b8e"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.lessThan</code></p>

```typescript signature
lessThan(left: ExpressionLike, right: ExpressionLike): Expression
```

<a id="placement-placement.wasm.wasm_class.context_lessthan.5f7e2595fdc8"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.lessThan</code></p>

```typescript signature
lessThan(left: Expression, right: Expression): Expression
```

<a id="placement-placement.wasm.javascript_facade.symifacade_lessthan.8b815324871d"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.lessThan</code></p>

```typescript signature
lessThan(left: ExpressionLike, right: ExpressionLike): Expression
```

</details>

### lessThan

<a id="entry-presentation_wasm_relations_capability_elementary_functions_less_than_api_expression_operations_expression_less_than"></a>
<a id="placement-placement.wasm.javascript_facade.expression_lessthan.556075d96973"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
lessThan(other: ExpressionLike): Expression
```

Public method placement for lessThan.

### lessThanOrEqual

<a id="entry-presentation_wasm_relations_capability_elementary_functions_less_than_or_equal_api_session_less_than_or_equal"></a>
<a id="placement-placement.wasm.wasm_module.module_lessthanorequal.c97b335533ab"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
lessThanOrEqual(left: Expression, right: Expression): Expression
```

Build the relation `left <= right` without deciding its truth.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_lessthanorequal.14b771192996"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.lessThanOrEqual</code></p>

```typescript signature
lessThanOrEqual(left: Expression, right: Expression): Expression
```

</details>

### notEqual

<a id="entry-presentation_wasm_relations_capability_elementary_functions_not_equal_api_session_not_equal"></a>
<a id="placement-placement.wasm.wasm_module.module_notequal.e71bd58fd421"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
notEqual(left: Expression, right: Expression): Expression
```

Build the relation `left != right` without deciding its truth.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_notequal.e274c6ff26f1"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.notEqual</code></p>

```typescript signature
notEqual(left: Expression, right: Expression): Expression
```

</details>

