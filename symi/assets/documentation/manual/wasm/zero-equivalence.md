# Zero equivalence

### zero_equivalent

<a id="entry-presentation_wasm_api_session_zero_equivalent"></a>
<a id="placement-placement.wasm.wasm_module.module_zeroequivalent.cab9fc362970"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
zeroEquivalent(
    input_expression: Expression,
    constraint?: Expression | null,
): string
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_zeroequivalent.4c2cfbd43500"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.zeroEquivalent</code></p>

```typescript signature
zeroEquivalent(value: ExpressionLike, constraint?: ExpressionLike | null): "true" | "false" | "unknown"
```

<a id="placement-placement.wasm.wasm_class.context_zeroequivalent.9d78dbb91e75"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.zeroEquivalent</code></p>

```typescript signature
zeroEquivalent(
    input_expression: Expression,
    constraint?: Expression | null,
): string
```

<a id="placement-placement.wasm.javascript_facade.symifacade_zeroequivalent.5b941b0c7ab2"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.zeroEquivalent</code></p>

```typescript signature
zeroEquivalent(value: ExpressionLike, constraint?: ExpressionLike | null): "true" | "false" | "unknown"
```

<a id="placement-placement.wasm.javascript_facade.expression_zeroequivalent.03483f9201c5"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.zeroEquivalent</code></p>

```typescript signature
zeroEquivalent(constraint?: ExpressionLike | null): "true" | "false" | "unknown"
```

<a id="placement-placement.wasm.wasm_class.expression_zeroequivalent.d55b1b33dd0a"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.zeroEquivalent</code></p>

```typescript signature
zeroEquivalent(constraint?: Expression | null): string
```

</details>



Proves whether an expression is zero at every point where the input expression is defined within
the declared region. `"true"` is an exact theorem replay, `"false"` has an exact counterexample,
and `"unknown"` is an honest decline. Numeric evaluation is never proof evidence.

The optional logical `constraint` is combined with existing symbol assumptions without changing
them. A `"true"` result does not mean `simplify(expression)` may replace the expression by the
literal `0`: that stricter transformation also needs the expression to be defined everywhere in
the declared region.

The initial admitted routes are the principal-branch Gudermannian identity for a real variable on
`-pi/2 < x < pi/2`, and the Riemann zeta reflection relation. The latter remains a nonzero-shaped
expression under ordinary simplification because its written factors have exceptional points.


```javascript
const relation = context.parse("2^(1-z)*cos(pi*z/2)*gamma(z)*zeta(z) - pi^z*zeta(1-z)");
console.log(context.zeroEquivalent(relation));
```

