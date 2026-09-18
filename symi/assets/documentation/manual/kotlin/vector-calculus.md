# Vector calculus

Coordinates are passed as a list of variable names; vector fields as a list
of component expressions in the same order. Empty variable lists and
component/variable count mismatches raise.

### gradient

<a id="placement-placement.kotlin.kotlin_object.uniffisession_gradient.147d5bf32dd9"></a>
`UniffiSession.gradient(scalarField: UniffiExpression, variables: List<kotlin.String>): List<UniffiExpression>`


\(\nabla f\): the partial derivatives in the order of `variables`.

### divergence

<a id="placement-placement.kotlin.kotlin_object.uniffisession_divergence.671cee580bd5"></a>
`UniffiSession.divergence(vectorComponents: List<UniffiExpression>, variables: List<kotlin.String>): UniffiExpression`


\(\nabla\cdot F = \sum_i \partial F_i/\partial x_i\); component and variable counts must match.

### curl

<a id="placement-placement.kotlin.kotlin_object.uniffisession_curl.83b8a2103af1"></a>
`UniffiSession.curl(vectorComponents: List<UniffiExpression>, variables: List<kotlin.String>): List<UniffiExpression>`


\(\nabla\times F\). **Requires exactly three components and three variables**; other
dimensions raise.

### laplacian

<a id="placement-placement.kotlin.kotlin_object.uniffisession_laplacian.b36a127d7b56"></a>
`UniffiSession.laplacian(scalarField: UniffiExpression, variables: List<kotlin.String>): UniffiExpression`


\(\Delta f = \nabla\cdot\nabla f\).

### jacobian

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationcoordinatechange_jacobian.03e9e1d0f7a8"></a>
`UniffiPartialDifferentialEquationCoordinateChange.jacobian(): UniffiExpression`

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationtransformationverificationreport_jacobian.78fa31bb90e2"></a>
`UniffiPartialDifferentialEquationTransformationVerificationReport.jacobian(): UniffiExpression`

<a id="placement-placement.kotlin.kotlin_object.uniffisession_jacobian.d74a86b4d3f2"></a>
`UniffiSession.jacobian(vectorComponents: List<UniffiExpression>, variables: List<kotlin.String>): UniffiMatrix`


The matrix with entry \((i, j) = \partial F_i/\partial x_j\) (rows index components, columns index
variables). Returned as a `Matrix` so the result composes with the matrix
methods.

### hessian

<a id="placement-placement.kotlin.kotlin_object.uniffisession_hessian.143c2b19f3f3"></a>
`UniffiSession.hessian(scalarField: UniffiExpression, variables: List<kotlin.String>): UniffiMatrix`


The \(n\times n\) matrix of second partials, computed as the Jacobian of the gradient;
structurally symmetric on smooth input.

## Example

