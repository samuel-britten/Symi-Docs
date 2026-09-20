# Series and residues

### taylor_series

<a id="entry-presentation_wasm_api_session_taylor_series"></a>
<a id="placement-placement.wasm.wasm_module.module_taylorseries.e1b8fff7e6aa"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
taylorSeries(
    input_expression: Expression,
    variable: string,
    expansion_point: Expression,
    order: number,
): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms and variants</summary>

<a id="placement-placement.wasm.wasm_class.context_taylorseries.2224e0e71344"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.taylorSeries</code></p>

```typescript signature
taylorSeries(
    input_expression: Expression,
    variable: string,
    expansion_point: Expression,
    order: number,
): Expression
```

<a id="placement-placement.wasm.wasm_class.expression_taylorseries.34401ae1c495"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.taylorSeries</code></p>

```typescript signature
taylorSeries(
    variable: string,
    expansion_point: Expression,
    order: number,
): Expression
```

<a id="placement-placement.wasm.wasm_class.assumptionscope_taylorseries.c3cad65c2ce1"></a>
<p class="symi-entry-owner">Variant using local assumptions — Raw WebAssembly: AssumptionScope method: <code>AssumptionScope.taylorSeries</code></p>

```typescript signature
taylorSeries(
    input_expression: Expression,
    variable: string,
    expansion_point: Expression,
    truncation_order: number,
): Expression
```

</details>


Truncated Taylor expansion about `expansion_point`, keeping terms of degree
**strictly less than** `order` (the remainder is
\(O((x-a)^{\operatorname{order}})\). Returns the truncated polynomial, not a series object;
`order = 0` returns zero. Coefficients are computed exactly by repeated
symbolic differentiation.

### maclaurin_series

<a id="entry-presentation_wasm_api_session_maclaurin_series"></a>
<a id="placement-placement.wasm.wasm_module.module_maclaurinseries.607a15898ae4"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
maclaurinSeries(
    input_expression: Expression,
    variable: string,
    order: number,
): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_maclaurinseries.9c0c4610a21a"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.maclaurinSeries</code></p>

```typescript signature
maclaurinSeries(
    input_expression: Expression,
    variable: string,
    order: number,
): Expression
```

<a id="placement-placement.wasm.wasm_class.expression_maclaurinseries.61e0610232f5"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.maclaurinSeries</code></p>

```typescript signature
maclaurinSeries(variable: string, order: number): Expression
```

</details>


`taylor_series` specialised to expansion point 0.

### laurent_series

<a id="entry-presentation_wasm_api_session_laurent_series"></a>
<a id="placement-placement.wasm.wasm_module.module_laurentseries.0b961aee8cd4"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
laurentSeries(
    input_expression: Expression,
    variable: string,
    center: Expression,
    order: number,
): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_laurentseries.e8316922ebf6"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.laurentSeries</code></p>

```typescript signature
laurentSeries(
    input_expression: Expression,
    variable: string,
    center: Expression,
    order: number,
): Expression
```

<a id="placement-placement.wasm.wasm_class.expression_laurentseries.d0f2974aa39d"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.laurentSeries</code></p>

```typescript signature
laurentSeries(
    variable: string,
    center: Expression,
    order: number,
): Expression
```

</details>


Truncated Laurent expansion at `center`: every \((\operatorname{variable} - \operatorname{center})^k\) term
with \(-m \le k < \operatorname{order}\), where `m` is the pole order. Analytic points degrade
to the Taylor expansion. At an essential singularity (where `pole_order`
declines) the result is an unevaluated `series_unevaluated(...)` placeholder,
because no finite truncation of the principal part is correct.

### residue

<a id="entry-presentation_wasm_api_session_residue"></a>
<a id="placement-placement.wasm.wasm_module.module_residue.7086b98f8e0d"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
residue(
    input_expression: Expression,
    variable: string,
    center: Expression,
): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_residue.d125c14f4192"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.residue</code></p>

```typescript signature
residue(
    input_expression: Expression,
    variable: string,
    center: Expression,
): Expression
```

<a id="placement-placement.wasm.wasm_class.expression_residue.8d5e9c55a6de"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.residue</code></p>

```typescript signature
residue(variable: string, center: Expression): Expression
```

</details>


Coefficient of \((\operatorname{variable} - \operatorname{center})^{-1}\) in the Laurent expansion at
`center`. Analytic/removable points give 0; simple poles use the limit of
\((x - c) f\); higher poles use the derivative formula. Essential singularities
return an unevaluated `residue_unevaluated(...)` placeholder. Rational
functions use exact polynomial valuations and formal series division, so
explicit algebraic centers do not need to occur as structural factors.

### pole_order

<a id="entry-presentation_wasm_api_session_pole_order"></a>
<a id="placement-placement.wasm.wasm_module.module_poleorder.13e4b7d7d589"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
poleOrder(
    input_expression: Expression,
    variable: string,
    center: Expression,
): bigint | undefined
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_poleorder.588f17fd3f20"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.poleOrder</code></p>

```typescript signature
poleOrder(
    input_expression: Expression,
    variable: string,
    center: Expression,
): bigint | undefined
```

<a id="placement-placement.wasm.wasm_class.expression_poleorder.b10295b45362"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.poleOrder</code></p>

```typescript signature
poleOrder(variable: string, center: Expression): bigint | undefined
```

</details>


Order of the singularity at `center`: `0` for analytic/removable points,
\(m \ge 1\) for a pole of order \(m\). Returns `None` (`undefined` in JS) when no
order \(\leq 16\) can be certified — the essential-singularity / undecidable
verdict. **Notes:** this is the one series entry returning a plain integer,
mirroring the core classifier; it never returns an unevaluated form. For a
rational function at an exact algebraic center, the order is obtained from
the square-free multiplicities of its numerator and denominator.

## Example

This family is not part of the recommended JavaScript facade in this release. Call it through the generated `symi.raw` layer, whose entries are listed with their wasm-bindgen signatures above, and read [Migration](migration.md) for the ownership rules that apply there.

