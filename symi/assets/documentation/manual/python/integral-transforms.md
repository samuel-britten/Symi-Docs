# Integral transforms

All four entries are *eager* dispatchers: a table of closed-form atoms fires
first, then algebraic rules (linearity, shifts, scaling, derivative,
convolution), and inputs neither layer recognises return the **unevaluated
transform node** (composable via `execute` later). Unevaluated transform
nodes can also be built directly through `parse`.

### laplace_transform

<a id="entry-presentation_python_api_session_laplace_transform"></a>
<a id="placement-placement.python.python_module.module_laplace_transform.8e6f0172be4d"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
laplace_transform(
    input_expression: ExpressionLike,
    time_variable: VariableLike,
    frequency_variable: VariableLike,
) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms and variants</summary>

<a id="placement-placement.python.python_class.context_laplace_transform.76780a9c25d4"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.laplace_transform</code></p>

```python signature
laplace_transform(
    input_expression: ExpressionLike,
    time_variable: VariableLike,
    frequency_variable: VariableLike,
) -> Expression
```

<a id="placement-placement.python.python_class.assumptionscope_laplace_transform.0f605205d58d"></a>
<p class="symi-entry-owner">Variant using local assumptions — AssumptionScope method: <code>AssumptionScope.laplace_transform</code></p>

```python signature
laplace_transform(
    input_expression: ExpressionLike,
    time_variable: VariableLike,
    frequency_variable: VariableLike,
) -> Expression
```

</details>


Forward Laplace transform \(F(s) = \int_0^\infty f(t)e^{-st}\,dt\).

### inverse_laplace_transform

<a id="entry-presentation_python_api_session_inverse_laplace_transform"></a>
<a id="placement-placement.python.python_module.module_inverse_laplace_transform.bc68714d6dad"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
inverse_laplace_transform(
    input_expression: ExpressionLike,
    frequency_variable: VariableLike,
    time_variable: VariableLike,
) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_inverse_laplace_transform.521646ce2181"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.inverse_laplace_transform</code></p>

```python signature
inverse_laplace_transform(
    input_expression: ExpressionLike,
    frequency_variable: VariableLike,
    time_variable: VariableLike,
) -> Expression
```

</details>


Inverse Laplace transform; rational inputs route through a partial-fraction
reverse lookup.

### fourier_transform

<a id="entry-presentation_python_api_session_fourier_transform"></a>
<a id="placement-placement.python.python_module.module_fourier_transform.375647690920"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
fourier_transform(
    input_expression: ExpressionLike,
    time_variable: VariableLike,
    frequency_variable: VariableLike,
) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms and variants</summary>

<a id="placement-placement.python.python_class.context_fourier_transform.5c9b70ec96fe"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.fourier_transform</code></p>

```python signature
fourier_transform(
    input_expression: ExpressionLike,
    time_variable: VariableLike,
    frequency_variable: VariableLike,
) -> Expression
```

<a id="placement-placement.python.python_class.assumptionscope_fourier_transform.cc7330dbb6d2"></a>
<p class="symi-entry-owner">Variant using local assumptions — AssumptionScope method: <code>AssumptionScope.fourier_transform</code></p>

```python signature
fourier_transform(
    input_expression: ExpressionLike,
    time_variable: VariableLike,
    frequency_variable: VariableLike,
) -> Expression
```

</details>


Forward Fourier transform in the angular-frequency convention
\(F(\omega) = \int f(t)e^{-i\omega t}\,dt\).

### inverse_fourier_transform

<a id="entry-presentation_python_api_session_inverse_fourier_transform"></a>
<a id="placement-placement.python.python_module.module_inverse_fourier_transform.06558807e56e"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
inverse_fourier_transform(
    input_expression: ExpressionLike,
    frequency_variable: VariableLike,
    time_variable: VariableLike,
) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_inverse_fourier_transform.29d769d0809a"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.inverse_fourier_transform</code></p>

```python signature
inverse_fourier_transform(
    input_expression: ExpressionLike,
    frequency_variable: VariableLike,
    time_variable: VariableLike,
) -> Expression
```

</details>


Inverse Fourier transform of the same convention.

## Example

Transform a signal and invert the result.

```python
import symi

t = symi.symbol("t", positive=True)
s = symi.symbol("s")

transformed = symi.laplace_transform(symi.exp(-t), "t", "s")
print(transformed)
print(symi.inverse_laplace_transform(transformed, "s", "t"))
```

