# Vector calculus

Coordinates are passed as a list of variable names; vector fields as a list
of component expressions in the same order. Empty variable lists and
component/variable count mismatches raise.

### gradient

<a id="entry-presentation_kotlin_vector_calculus_capability_vector_calculus_gradient_api_analysis_session_gradient"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_gradient.147d5bf32dd9"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun gradient(
    scalarField: UniffiExpression,
    variables: List<kotlin.String>,
): List<UniffiExpression>
```


\(\nabla f\): the partial derivatives in the order of `variables`.

### divergence

<a id="entry-presentation_kotlin_vector_calculus_capability_vector_calculus_divergence_api_analysis_session_divergence"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_divergence.671cee580bd5"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun divergence(
    vectorComponents: List<UniffiExpression>,
    variables: List<kotlin.String>,
): UniffiExpression
```


\(\nabla\cdot F = \sum_i \partial F_i/\partial x_i\); component and variable counts must match.

### curl

<a id="entry-presentation_kotlin_vector_calculus_capability_vector_calculus_curl_api_analysis_session_curl"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_curl.83b8a2103af1"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun curl(
    vectorComponents: List<UniffiExpression>,
    variables: List<kotlin.String>,
): List<UniffiExpression>
```


\(\nabla\times F\). **Requires exactly three components and three variables**; other
dimensions raise.

### laplacian

<a id="entry-presentation_kotlin_vector_calculus_capability_vector_calculus_laplacian_api_analysis_session_laplacian"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_laplacian.b36a127d7b56"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun laplacian(
    scalarField: UniffiExpression,
    variables: List<kotlin.String>,
): UniffiExpression
```


\(\Delta f = \nabla\cdot\nabla f\).

### jacobian

The matrix with entry \((i, j) = \partial F_i/\partial x_j\) (rows index components, columns index
variables). Returned as a `Matrix` so the result composes with the matrix
methods.

### hessian

<a id="entry-presentation_kotlin_vector_calculus_capability_vector_calculus_hessian_api_analysis_session_hessian"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_hessian.143c2b19f3f3"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun hessian(
    scalarField: UniffiExpression,
    variables: List<kotlin.String>,
): UniffiMatrix
```


The \(n\times n\) matrix of second partials, computed as the Jacobian of the gradient;
structurally symmetric on smooth input.

## Example


## Additional API

### jacobian

<a id="entry-presentation_kotlin_vector_calculus_capability_vector_calculus_jacobian_api_analysis_session_jacobian"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_jacobian.d74a86b4d3f2"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun jacobian(
    vectorComponents: List<UniffiExpression>,
    variables: List<kotlin.String>,
): UniffiMatrix
```

The matrix with entry \((i, j) = \partial F_i/\partial x_j\) (rows index components, columns index variables).

### jacobian

<a id="entry-presentation_kotlin_vector_calculus_capability_vector_calculus_jacobian_api_partial_differential_equations_partialdifferentialequationcoordinatechange_jacobian"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationcoordinatechange_jacobian.03e9e1d0f7a8"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCoordinateChange method</p>

```kotlin signature
fun jacobian(): UniffiExpression
```

The exact forward-map Jacobian determinant.

### jacobian

<a id="entry-presentation_kotlin_vector_calculus_capability_vector_calculus_jacobian_api_partial_differential_equations_partialdifferentialequationtransformationverificationreport_jacobian"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationtransformationverificationreport_jacobian.78fa31bb90e2"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationTransformationVerificationReport method</p>

```kotlin signature
fun jacobian(): UniffiExpression
```

The independently recomputed forward-map Jacobian.

