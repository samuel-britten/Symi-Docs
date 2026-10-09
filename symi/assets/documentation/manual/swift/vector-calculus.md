# Vector calculus

Coordinates are passed as a list of variable names; vector fields as a list
of component expressions in the same order. Empty variable lists and
component/variable count mismatches raise.

### gradient

<a id="placement-placement.swift.swift_object.uniffisession_gradient.9f407a66624d"></a>
`UniffiSession.gradient(scalarField: UniffiExpression, variables: [String]) -> [UniffiExpression]`


\(\nabla f\): the partial derivatives in the order of `variables`.

### divergence

<a id="placement-placement.swift.swift_object.uniffisession_divergence.73d0a21cd21f"></a>
`UniffiSession.divergence(vectorComponents: [UniffiExpression], variables: [String]) -> UniffiExpression`


\(\nabla\cdot F = \sum_i \partial F_i/\partial x_i\); component and variable counts must match.

### curl

<a id="placement-placement.swift.swift_object.uniffisession_curl.1e42c2e78f8c"></a>
`UniffiSession.curl(vectorComponents: [UniffiExpression], variables: [String]) -> [UniffiExpression]`


\(\nabla\times F\). **Requires exactly three components and three variables**; other
dimensions raise.

### laplacian

<a id="placement-placement.swift.swift_object.uniffisession_laplacian.3392c7843249"></a>
`UniffiSession.laplacian(scalarField: UniffiExpression, variables: [String]) -> UniffiExpression`


\(\Delta f = \nabla\cdot\nabla f\).

### jacobian

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationcoordinatechange_jacobian.b76dac810eaf"></a>
`UniffiPartialDifferentialEquationCoordinateChange.jacobian() -> UniffiExpression`

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationtransformationverificationreport_jacobian.a3eb7f7e1993"></a>
`UniffiPartialDifferentialEquationTransformationVerificationReport.jacobian() -> UniffiExpression`

<a id="placement-placement.swift.swift_object.uniffisession_jacobian.b537465903e8"></a>
`UniffiSession.jacobian(vectorComponents: [UniffiExpression], variables: [String]) -> UniffiMatrix`


The matrix with entry \((i, j) = \partial F_i/\partial x_j\) (rows index components, columns index
variables). Returned as a `Matrix` so the result composes with the matrix
methods.

### hessian

<a id="placement-placement.swift.swift_object.uniffisession_hessian.b6f8866fe421"></a>
`UniffiSession.hessian(scalarField: UniffiExpression, variables: [String]) -> UniffiMatrix`


The \(n\times n\) matrix of second partials, computed as the Jacobian of the gradient;
structurally symmetric on smooth input.

## Example

