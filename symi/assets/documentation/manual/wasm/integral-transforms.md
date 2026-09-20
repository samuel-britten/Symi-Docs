# Integral transforms

All four entries are *eager* dispatchers: a table of closed-form atoms fires
first, then algebraic rules (linearity, shifts, scaling, derivative,
convolution), and inputs neither layer recognises return the **unevaluated
transform node** (composable via `execute` later). Unevaluated transform
nodes can also be built directly through `parse`.

### laplace_transform

<a id="entry-presentation_wasm_api_session_laplace_transform"></a>
<a id="placement-placement.wasm.wasm_module.module_laplacetransform.e8b317b65c63"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
laplaceTransform(
    input_expression: Expression,
    time_variable: string,
    frequency_variable: string,
): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms and variants</summary>

<a id="placement-placement.wasm.wasm_class.context_laplacetransform.eaa99d3405c1"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.laplaceTransform</code></p>

```typescript signature
laplaceTransform(
    input_expression: Expression,
    time_variable: string,
    frequency_variable: string,
): Expression
```

<a id="placement-placement.wasm.wasm_class.assumptionscope_laplacetransform.ec1051a0196b"></a>
<p class="symi-entry-owner">Variant using local assumptions — Raw WebAssembly: AssumptionScope method: <code>AssumptionScope.laplaceTransform</code></p>

```typescript signature
laplaceTransform(
    input_expression: Expression,
    time_variable: string,
    frequency_variable: string,
): Expression
```

</details>


Forward Laplace transform \(F(s) = \int_0^\infty f(t)e^{-st}\,dt\).

### inverse_laplace_transform

<a id="entry-presentation_wasm_api_session_inverse_laplace_transform"></a>
<a id="placement-placement.wasm.wasm_module.module_inverselaplacetransform.b9494a36f07b"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
inverseLaplaceTransform(
    input_expression: Expression,
    frequency_variable: string,
    time_variable: string,
): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_inverselaplacetransform.12be5bd7a8d7"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.inverseLaplaceTransform</code></p>

```typescript signature
inverseLaplaceTransform(
    input_expression: Expression,
    frequency_variable: string,
    time_variable: string,
): Expression
```

</details>


Inverse Laplace transform; rational inputs route through a partial-fraction
reverse lookup.

### fourier_transform

<a id="entry-presentation_wasm_api_session_fourier_transform"></a>
<a id="placement-placement.wasm.wasm_module.module_fouriertransform.7a1b272e817d"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
fourierTransform(
    input_expression: Expression,
    time_variable: string,
    frequency_variable: string,
): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms and variants</summary>

<a id="placement-placement.wasm.wasm_class.context_fouriertransform.6e6cbfb61d2f"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.fourierTransform</code></p>

```typescript signature
fourierTransform(
    input_expression: Expression,
    time_variable: string,
    frequency_variable: string,
): Expression
```

<a id="placement-placement.wasm.wasm_class.assumptionscope_fouriertransform.5a22c0081730"></a>
<p class="symi-entry-owner">Variant using local assumptions — Raw WebAssembly: AssumptionScope method: <code>AssumptionScope.fourierTransform</code></p>

```typescript signature
fourierTransform(
    input_expression: Expression,
    time_variable: string,
    frequency_variable: string,
): Expression
```

</details>


Forward Fourier transform in the angular-frequency convention
\(F(\omega) = \int f(t)e^{-i\omega t}\,dt\).

### inverse_fourier_transform

<a id="entry-presentation_wasm_api_session_inverse_fourier_transform"></a>
<a id="placement-placement.wasm.wasm_module.module_inversefouriertransform.c756e25c95bb"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
inverseFourierTransform(
    input_expression: Expression,
    frequency_variable: string,
    time_variable: string,
): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_inversefouriertransform.1256b676d4cd"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.inverseFourierTransform</code></p>

```typescript signature
inverseFourierTransform(
    input_expression: Expression,
    frequency_variable: string,
    time_variable: string,
): Expression
```

</details>


Inverse Fourier transform of the same convention.

## Example

This family is not part of the recommended JavaScript facade in this release. Call it through the generated `symi.raw` layer, whose entries are listed with their wasm-bindgen signatures above, and read [Migration](migration.md) for the ownership rules that apply there.

