# Specialized canonical forms

These transformations have a fixed normal-form contract: each one produces a
determined shape and never runs the heuristic search used by
[`simplify`](simplification-general.md#simplify). Use them when the output
shape matters more than minimal size.

Related rewrites are on [algebraic transforms](algebraic-transforms.md) and
[trigonometric and complex rewrites](trigonometric-complex-rewrites.md).

## Canonical presentation passes

### piecewise_fold

<a id="entry-presentation_wasm_api_session_piecewise_fold"></a>
<a id="placement-placement.wasm.wasm_module.module_piecewisefold.e933070f4d72"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
piecewiseFold(input_expression: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_piecewisefold.d8dc6b0c9df5"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.piecewiseFold</code></p>

```typescript signature
piecewiseFold(input_expression: Expression): Expression
```

<a id="placement-placement.wasm.wasm_class.expression_piecewisefold.3d9ec0c834c8"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.piecewiseFold</code></p>

```typescript signature
piecewiseFold(): Expression
```

</details>



Expand `abs`, `signum`, and `heaviside_step` definitions recursively and fold
piecewise operands of sums, products, powers, factorials, and ordinary function
calls into one top-level piecewise expression. For example, `x*abs(x - 1)`
becomes the exact two-branch definition with values `x*(x - 1)` and
`-x*(x - 1)`. Branch combinations retain first-match order and conditions are
conjoined exactly.

Each structural fold is limited to 16 branches and 128 stored nodes, with a
per-input growth limit of eight times the source node count. A node that would
exceed a limit remains unfolded; the operation still returns an exact,
equality-preserving expression and may therefore return the input unchanged.

### rewrite_special_functions

<a id="entry-presentation_wasm_api_session_rewrite_special_functions"></a>
<a id="placement-placement.wasm.wasm_module.module_rewritespecialfunctions.dc570b354656"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
rewriteSpecialFunctions(
    input_expression: Expression,
    basis: string,
): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_rewritespecialfunctions.9a756b368915"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.rewriteSpecialFunctions</code></p>

```typescript signature
rewriteSpecialFunctions(
    input_expression: Expression,
    basis: string,
): Expression
```

<a id="placement-placement.wasm.wasm_class.expression_rewritespecialfunctions.590d4aee2a54"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.rewriteSpecialFunctions</code></p>

```typescript signature
rewriteSpecialFunctions(basis: string): Expression
```

</details>



Rewrite beta, gamma, binomial, factorial, and rising-factorial representations
into the requested `"gamma"`, `"factorial"`, `"binomial"`, or
`"rising_factorial"` basis. The exact identities are applied only when their
domain gates are proven: factorial and binomial conversions require the
relevant non-negative integers, rising-factorial conversions additionally
require a positive base, and beta-to-gamma requires two positive arguments.
For example, with `n` declared a positive integer, `n!` may be rewritten into
the gamma basis and `gamma(n)` into the factorial basis. A site with
unconstrained arguments is returned unchanged. Gamma ratios with a literal
non-negative argument offset are minimized to their exact shifted product.

The context method, expression convenience method, and module function have
the same behavior. An unknown basis name raises an explicit error; there is no
force mode.

### presentation_normal_form

<a id="entry-presentation_wasm_api_session_presentation_normal_form"></a>
<a id="placement-placement.wasm.wasm_module.module_presentationnormalform.53908ce4871d"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
presentationNormalForm(input_expression: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_presentationnormalform.265113e13a9d"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.presentationNormalForm</code></p>

```typescript signature
presentationNormalForm(input_expression: Expression): Expression
```

<a id="placement-placement.wasm.wasm_class.expression_presentationnormalform.af5e499aeb25"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.presentationNormalForm</code></p>

```typescript signature
presentationNormalForm(): Expression
```

</details>



The cheap, bounded display-oriented pass run at solver output seams: rational
normal form only, kept only when the weighted complexity does not grow.
Unlike `simplify` it never runs the full heuristic ladder, so it is fast and
deterministic in shape.

## Example

This family is not part of the recommended JavaScript facade in this release. Call it through the generated `symi.raw` layer, whose entries are listed with their wasm-bindgen signatures above, and read [Migration](migration.md) for the ownership rules that apply there.

