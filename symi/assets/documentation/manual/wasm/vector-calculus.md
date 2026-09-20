# Vector calculus

Coordinates are passed as a list of variable names; vector fields as a list
of component expressions in the same order. Empty variable lists and
component/variable count mismatches raise.

### gradient

<a id="entry-presentation_wasm_api_session_gradient"></a>
<a id="placement-placement.wasm.wasm_module.module_gradient.5e6c59111568"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
gradient(scalar_field: Expression, variables: string[]): Expression[]
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_gradient.61111b1393d7"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.gradient</code></p>

```typescript signature
gradient(scalar_field: Expression, variables: string[]): Expression[]
```

</details>


\(\nabla f\): the partial derivatives in the order of `variables`.

### divergence

<a id="entry-presentation_wasm_api_session_divergence"></a>
<a id="placement-placement.wasm.wasm_module.module_divergence.22455ef9ce79"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
divergence(
    vector_components: Expression[],
    variables: string[],
): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_divergence.b0dfa0093378"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.divergence</code></p>

```typescript signature
divergence(
    vector_components: Expression[],
    variables: string[],
): Expression
```

</details>


\(\nabla\cdot F = \sum_i \partial F_i/\partial x_i\); component and variable counts must match.

### curl

<a id="entry-presentation_wasm_api_session_curl"></a>
<a id="placement-placement.wasm.wasm_module.module_curl.04cc2d24b092"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
curl(vector_components: Expression[], variables: string[]): Expression[]
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_curl.4644328f1a4b"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.curl</code></p>

```typescript signature
curl(vector_components: Expression[], variables: string[]): Expression[]
```

</details>


\(\nabla\times F\). **Requires exactly three components and three variables**; other
dimensions raise.

### laplacian

<a id="entry-presentation_wasm_api_session_laplacian"></a>
<a id="placement-placement.wasm.wasm_module.module_laplacian.441c89e28847"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
laplacian(scalar_field: Expression, variables: string[]): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_laplacian.d47f5d0355d4"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.laplacian</code></p>

```typescript signature
laplacian(scalar_field: Expression, variables: string[]): Expression
```

</details>


\(\Delta f = \nabla\cdot\nabla f\).

### jacobian

<a id="entry-presentation_wasm_api_session_jacobian"></a>
<a id="placement-placement.wasm.wasm_module.module_jacobian.9371d4f76961"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
jacobian(vector_components: Expression[], variables: string[]): Matrix
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_jacobian.a16e01c96433"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.jacobian</code></p>

```typescript signature
jacobian(vector_components: Expression[], variables: string[]): Matrix
```

</details>


The matrix with entry \((i, j) = \partial F_i/\partial x_j\) (rows index components, columns index
variables). Returned as a `Matrix` so the result composes with the matrix
methods.

### hessian

<a id="entry-presentation_wasm_api_session_hessian"></a>
<a id="placement-placement.wasm.wasm_module.module_hessian.c1073609193d"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
hessian(scalar_field: Expression, variables: string[]): Matrix
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_hessian.20761aa7d61e"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.hessian</code></p>

```typescript signature
hessian(scalar_field: Expression, variables: string[]): Matrix
```

</details>


The \(n\times n\) matrix of second partials, computed as the Jacobian of the gradient;
structurally symmetric on smooth input.

## Example

This family is not part of the recommended JavaScript facade in this release. Call it through the generated `symi.raw` layer, whose entries are listed with their wasm-bindgen signatures above, and read [Migration](migration.md) for the ownership rules that apply there.

