# Vector calculus

Coordinates are passed as a list of variable names; vector fields as a list
of component expressions in the same order. Empty variable lists and
component/variable count mismatches raise.

### gradient

<a id="entry-presentation_rust_vector_calculus_capability_rust_native_rust_api_analysis_session_gradient_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_analysis_session_gradient.2b492e8d72c8"></a>
<p class="symi-entry-owner">api::analysis::Session method</p>

```rust signature
pub fn gradient<'a, IteratorType, VariableType>(
    &self,
    scalar_field: &Expression,
    variables: IteratorType,
) -> Result<Vec<Expression>, ApiError>
where
    IteratorType: IntoIterator<Item = VariableType>,
    VariableType: Into<VariableLike<'a>>,
```


\(\nabla f\): the partial derivatives in the order of `variables`.

### divergence

<a id="entry-presentation_rust_vector_calculus_capability_rust_native_rust_api_analysis_session_divergence_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_analysis_session_divergence.d07e56c40a20"></a>
<p class="symi-entry-owner">api::analysis::Session method</p>

```rust signature
pub fn divergence<'a, IteratorType, VariableType>(
    &self,
    vector_components: &[Expression],
    variables: IteratorType,
) -> Result<Expression, ApiError>
where
    IteratorType: IntoIterator<Item = VariableType>,
    VariableType: Into<VariableLike<'a>>,
```


\(\nabla\cdot F = \sum_i \partial F_i/\partial x_i\); component and variable counts must match.

### curl

<a id="entry-presentation_rust_vector_calculus_capability_rust_native_rust_api_analysis_session_curl_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_analysis_session_curl.335005623aae"></a>
<p class="symi-entry-owner">api::analysis::Session method</p>

```rust signature
pub fn curl<'a, IteratorType, VariableType>(
    &self,
    vector_components: &[Expression],
    variables: IteratorType,
) -> Result<Vec<Expression>, ApiError>
where
    IteratorType: IntoIterator<Item = VariableType>,
    VariableType: Into<VariableLike<'a>>,
```


\(\nabla\times F\). **Requires exactly three components and three variables**; other
dimensions raise.

### laplacian

<a id="entry-presentation_rust_vector_calculus_capability_rust_native_rust_api_analysis_session_laplacian_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_analysis_session_laplacian.1a2ffe01f956"></a>
<p class="symi-entry-owner">api::analysis::Session method</p>

```rust signature
pub fn laplacian<'a, IteratorType, VariableType>(
    &self,
    scalar_field: &Expression,
    variables: IteratorType,
) -> Result<Expression, ApiError>
where
    IteratorType: IntoIterator<Item = VariableType>,
    VariableType: Into<VariableLike<'a>>,
```


\(\Delta f = \nabla\cdot\nabla f\).

### jacobian

The matrix with entry \((i, j) = \partial F_i/\partial x_j\) (rows index components, columns index
variables). Returned as a `Matrix` so the result composes with the matrix
methods.

### hessian

<a id="entry-presentation_rust_vector_calculus_capability_rust_native_rust_api_analysis_session_hessian_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_analysis_session_hessian.b5fe28e30b6f"></a>
<p class="symi-entry-owner">api::analysis::Session method</p>

```rust signature
pub fn hessian<'a, IteratorType, VariableType>(
    &self,
    scalar_field: &Expression,
    variables: IteratorType,
) -> Result<Matrix, ApiError>
where
    IteratorType: IntoIterator<Item = VariableType>,
    VariableType: Into<VariableLike<'a>>,
```


The \(n\times n\) matrix of second partials, computed as the Jacobian of the gradient;
structurally symmetric on smooth input.

## Example

Differential operators over an ordered coordinate list.

```rust
use symi::api::prelude::*;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let session = Session::new();
    let x = session.symbol("x");
    let y = session.symbol("y");
    let z = session.symbol("z");

    for component in session.gradient(&session.parse("x^2*y")?, ["x", "y"])? {
        println!("{}", component);
    }
    println!("{}", session.divergence(&[x, y, z], ["x", "y", "z"])?);
    println!("{}", session.laplacian(&session.parse("x^2 + y^2")?, ["x", "y"])?);
    println!("{}", session.hessian(&session.parse("x^2*y")?, ["x", "y"])?.to_latex()?);
    Ok(())
}
```


## Additional API

### jacobian

<a id="entry-presentation_rust_vector_calculus_capability_rust_native_rust_api_analysis_session_jacobian_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_analysis_session_jacobian.140daad0c881"></a>
<p class="symi-entry-owner">api::analysis::Session method</p>

```rust signature
pub fn jacobian<'a, IteratorType, VariableType>(
    &self,
    vector_components: &[Expression],
    variables: IteratorType,
) -> Result<Matrix, ApiError>
where
    IteratorType: IntoIterator<Item = VariableType>,
    VariableType: Into<VariableLike<'a>>,
```

The matrix with entry \((i, j) = \partial F_i/\partial x_j\) (rows index components, columns index variables).

### jacobian

<a id="entry-presentation_rust_vector_calculus_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationcoordinatechange_jacobian_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcoordinatechange_jacobian.dfba822c539c"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationCoordinateChange method</p>

```rust signature
pub fn jacobian(&self) -> Result<Expression, ApiError>
```

The matrix with entry \((i, j) = \partial F_i/\partial x_j\) (rows index components, columns index variables).

### jacobian

<a id="entry-presentation_rust_vector_calculus_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationtransformationverificationreport_jacobian_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationverificationreport_jacobian.571f823f8494"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformationVerificationReport method</p>

```rust signature
pub fn jacobian(&self) -> Expression
```

The matrix with entry \((i, j) = \partial F_i/\partial x_j\) (rows index components, columns index variables).

