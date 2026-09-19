# Vector calculus

Coordinates are passed as a list of variable names; vector fields as a list
of component expressions in the same order. Empty variable lists and
component/variable count mismatches raise.

### gradient

<a id="entry-presentation_python_vector_calculus_capability_vector_calculus_gradient_api_analysis_session_gradient"></a>
<a id="placement-placement.python.python_module.module_gradient.985a8845f0b7"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
gradient(
    scalar_field: ExpressionLike,
    variables: Iterable[VariableLike],
) -> list[Expression]
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_gradient.18e156275d2d"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.gradient</code></p>

```python signature
gradient(
    scalar_field: ExpressionLike,
    variables: Iterable[VariableLike],
) -> list[Expression]
```

</details>


\(\nabla f\): the partial derivatives in the order of `variables`.

### divergence

<a id="entry-presentation_python_vector_calculus_capability_vector_calculus_divergence_api_analysis_session_divergence"></a>
<a id="placement-placement.python.python_module.module_divergence.125245034036"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
divergence(
    vector_components: Iterable[ExpressionLike],
    variables: Iterable[VariableLike],
) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_divergence.ecf6e1f2f1f8"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.divergence</code></p>

```python signature
divergence(
    vector_components: Iterable[ExpressionLike],
    variables: Iterable[VariableLike],
) -> Expression
```

</details>


\(\nabla\cdot F = \sum_i \partial F_i/\partial x_i\); component and variable counts must match.

### curl

<a id="entry-presentation_python_vector_calculus_capability_vector_calculus_curl_api_analysis_session_curl"></a>
<a id="placement-placement.python.python_module.module_curl.e9aa60545c09"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
curl(
    vector_components: Iterable[ExpressionLike],
    variables: Iterable[VariableLike],
) -> list[Expression]
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_curl.3670b00adb89"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.curl</code></p>

```python signature
curl(
    vector_components: Iterable[ExpressionLike],
    variables: Iterable[VariableLike],
) -> list[Expression]
```

</details>


\(\nabla\times F\). **Requires exactly three components and three variables**; other
dimensions raise.

### laplacian

<a id="entry-presentation_python_vector_calculus_capability_vector_calculus_laplacian_api_analysis_session_laplacian"></a>
<a id="placement-placement.python.python_module.module_laplacian.09b06509e9d5"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
laplacian(
    scalar_field: ExpressionLike,
    variables: Iterable[VariableLike],
) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_laplacian.4044f30b106a"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.laplacian</code></p>

```python signature
laplacian(
    scalar_field: ExpressionLike,
    variables: Iterable[VariableLike],
) -> Expression
```

</details>


\(\Delta f = \nabla\cdot\nabla f\).

### jacobian

The matrix with entry \((i, j) = \partial F_i/\partial x_j\) (rows index components, columns index
variables). Returned as a `Matrix` so the result composes with the matrix
methods.

### hessian

<a id="entry-presentation_python_vector_calculus_capability_vector_calculus_hessian_api_analysis_session_hessian"></a>
<a id="placement-placement.python.python_module.module_hessian.811dac19f650"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
hessian(
    scalar_field: ExpressionLike,
    variables: Iterable[VariableLike],
) -> Matrix
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_hessian.2d3d09380b62"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.hessian</code></p>

```python signature
hessian(
    scalar_field: ExpressionLike,
    variables: Iterable[VariableLike],
) -> Matrix
```

</details>


The \(n\times n\) matrix of second partials, computed as the Jacobian of the gradient;
structurally symmetric on smooth input.

## Example

Differential operators over an ordered coordinate list.

```python
import symi

x = symi.symbol("x")
y = symi.symbol("y")
z = symi.symbol("z")

print(symi.gradient(x**2 * y, ["x", "y"]))
print(symi.divergence([x, y, z], ["x", "y", "z"]))
print(symi.curl([y, -x, 0], ["x", "y", "z"]))
print(symi.laplacian(x**2 + y**2, ["x", "y"]))
```


## Additional API

### jacobian

<a id="entry-presentation_python_vector_calculus_capability_vector_calculus_jacobian_api_analysis_session_jacobian"></a>
<a id="placement-placement.python.python_module.module_jacobian.6c0a8d9d3157"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
jacobian(
    vector_components: Iterable[ExpressionLike],
    variables: Iterable[VariableLike],
) -> Matrix
```

The matrix with entry \((i, j) = \partial F_i/\partial x_j\) (rows index components, columns index variables).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_jacobian.87e30f06c196"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.jacobian</code></p>

```python signature
jacobian(
    vector_components: Iterable[ExpressionLike],
    variables: Iterable[VariableLike],
) -> Matrix
```

</details>

### jacobian

<a id="entry-presentation_python_vector_calculus_capability_vector_calculus_jacobian_api_partial_differential_equations_partialdifferentialequationcoordinatechange_jacobian"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationcoordinatechange_jacobian.bdb804adb3d1"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCoordinateChange property</p>

```python signature
jacobian: Expression
```

The exact forward-map Jacobian determinant.

### jacobian

<a id="entry-presentation_python_vector_calculus_capability_vector_calculus_jacobian_api_partial_differential_equations_partialdifferentialequationtransformationverificationreport_jacobian"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationtransformationverificationreport_jacobian.c4f07bc2066c"></a>
<p class="symi-entry-owner">PartialDifferentialEquationTransformationVerificationReport property</p>

```python signature
jacobian: Expression
```

The independently recomputed forward-map Jacobian.

