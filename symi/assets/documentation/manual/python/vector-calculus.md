# Vector calculus

Coordinates are passed as a list of variable names; vector fields as a list
of component expressions in the same order. Empty variable lists and
component/variable count mismatches raise.

### gradient

<a id="placement-placement.python.python_class.context_gradient.18e156275d2d"></a>
`Context.gradient(scalar_field, variables)`

<a id="placement-placement.python.python_module.module_gradient.985a8845f0b7"></a>
`symi.gradient(scalar_field, variables)`


\(\nabla f\): the partial derivatives in the order of `variables`.

### divergence

<a id="placement-placement.python.python_class.context_divergence.ecf6e1f2f1f8"></a>
`Context.divergence(vector_components, variables)`

<a id="placement-placement.python.python_module.module_divergence.125245034036"></a>
`symi.divergence(vector_components, variables)`


\(\nabla\cdot F = \sum_i \partial F_i/\partial x_i\); component and variable counts must match.

### curl

<a id="placement-placement.python.python_class.context_curl.3670b00adb89"></a>
`Context.curl(vector_components, variables)`

<a id="placement-placement.python.python_module.module_curl.e9aa60545c09"></a>
`symi.curl(vector_components, variables)`


\(\nabla\times F\). **Requires exactly three components and three variables**; other
dimensions raise.

### laplacian

<a id="placement-placement.python.python_class.context_laplacian.4044f30b106a"></a>
`Context.laplacian(scalar_field, variables)`

<a id="placement-placement.python.python_module.module_laplacian.09b06509e9d5"></a>
`symi.laplacian(scalar_field, variables)`


\(\Delta f = \nabla\cdot\nabla f\).

### jacobian

<a id="placement-placement.python.python_class.context_jacobian.87e30f06c196"></a>
`Context.jacobian(vector_components, variables)`

<a id="placement-placement.python.python_class.partialdifferentialequationcoordinatechange_jacobian.bdb804adb3d1"></a>
`PartialDifferentialEquationCoordinateChange.jacobian`

<a id="placement-placement.python.python_class.partialdifferentialequationtransformationverificationreport_jacobian.c4f07bc2066c"></a>
`PartialDifferentialEquationTransformationVerificationReport.jacobian`

<a id="placement-placement.python.python_module.module_jacobian.6c0a8d9d3157"></a>
`symi.jacobian(vector_components, variables)`


The matrix with entry \((i, j) = \partial F_i/\partial x_j\) (rows index components, columns index
variables). Returned as a `Matrix` so the result composes with the matrix
methods.

### hessian

<a id="placement-placement.python.python_class.context_hessian.2d3d09380b62"></a>
`Context.hessian(scalar_field, variables)`

<a id="placement-placement.python.python_module.module_hessian.811dac19f650"></a>
`symi.hessian(scalar_field, variables)`


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

