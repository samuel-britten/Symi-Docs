# Vector calculus

Coordinates are passed as a list of variable names; vector fields as a list
of component expressions in the same order. Empty variable lists and
component/variable count mismatches raise.

### gradient

<a id="entry-presentation_swift_api_session_gradient"></a>
<a id="placement-placement.swift.swift_object.uniffisession_gradient.9f407a66624d"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func gradient(
    scalarField: UniffiExpression,
    variables: [String],
) -> [UniffiExpression]
```


\(\nabla f\): the partial derivatives in the order of `variables`.

### divergence

<a id="entry-presentation_swift_api_session_divergence"></a>
<a id="placement-placement.swift.swift_object.uniffisession_divergence.73d0a21cd21f"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func divergence(
    vectorComponents: [UniffiExpression],
    variables: [String],
) -> UniffiExpression
```


\(\nabla\cdot F = \sum_i \partial F_i/\partial x_i\); component and variable counts must match.

### curl

<a id="entry-presentation_swift_api_session_curl"></a>
<a id="placement-placement.swift.swift_object.uniffisession_curl.1e42c2e78f8c"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func curl(
    vectorComponents: [UniffiExpression],
    variables: [String],
) -> [UniffiExpression]
```


\(\nabla\times F\). **Requires exactly three components and three variables**; other
dimensions raise.

### laplacian

<a id="entry-presentation_swift_api_session_laplacian"></a>
<a id="placement-placement.swift.swift_object.uniffisession_laplacian.3392c7843249"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func laplacian(
    scalarField: UniffiExpression,
    variables: [String],
) -> UniffiExpression
```


\(\Delta f = \nabla\cdot\nabla f\).

### jacobian

<a id="entry-presentation_swift_api_session_jacobian"></a>
<a id="placement-placement.swift.swift_object.uniffisession_jacobian.b537465903e8"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func jacobian(
    vectorComponents: [UniffiExpression],
    variables: [String],
) -> UniffiMatrix
```


The matrix with entry \((i, j) = \partial F_i/\partial x_j\) (rows index components, columns index
variables). Returned as a `Matrix` so the result composes with the matrix
methods.

### hessian

<a id="entry-presentation_swift_api_session_hessian"></a>
<a id="placement-placement.swift.swift_object.uniffisession_hessian.b6f8866fe421"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func hessian(
    scalarField: UniffiExpression,
    variables: [String],
) -> UniffiMatrix
```


The \(n\times n\) matrix of second partials, computed as the Jacobian of the gradient;
structurally symmetric on smooth input.

## Example

