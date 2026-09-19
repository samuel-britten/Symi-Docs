# Linear algebra

Matrix arithmetic and linear algebra operations are exact symbolic operations.

## Arithmetic

Python additionally overloads `+`, `-`, `*` (matrix product) over these
named methods.

### add

### subtract

### multiply

Matrix product; inner dimensions must agree.

### scalar_multiply

<a id="entry-presentation_rust_linear_algebra_capability_rust_native_rust_api_matrix_scalar_multiply_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_matrix_scalar_multiply.9c4ac782d3c5"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn scalar_multiply(
    &self,
    scalar: &Expression,
) -> Result<Matrix, ApiError>
```


## Matrix assumptions

Matrix predicates are available as methods on `Matrix`, as constructors on an
explicit `Context`, and as default-context module functions in Python and WASM.
Native Rust uses the corresponding `Session` methods. Query methods return
`True`/`False`/`None` (or the native `TruthValue`), preserving unknown when
the exact symbolic engine cannot decide.

### matrix_shape
Assert or query an exact positive row and column count.

### square_matrix
Assert or query that the matrix has equal row and column counts.

### zero_matrix
Assert or query that all entries are zero.

### identity_matrix
Assert or query the identity-matrix structure.

### diagonal_matrix
Assert or query diagonal structure.

### upper_triangular_matrix
Assert or query upper-triangular structure.

### lower_triangular_matrix
Assert or query lower-triangular structure.

### symmetric_matrix
Assert or query equality with the transpose.

### hermitian_matrix
Assert or query equality with the conjugate transpose.

### orthogonal_matrix
Assert or query the real orthogonality condition.

### unitary_matrix
Assert or query the unitary condition.

### normal_matrix
Assert or query commutation with the conjugate transpose.

### full_rank_matrix
Assert or query full rank.

### invertible_matrix
Assert or query square invertibility.

### singular_matrix
Assert or query square singularity.

### integer_entries
Assert or query integer entries.

### real_entries
Assert or query real entries.

### complex_entries
Assert or query finite complex entries.

### positive_definite_matrix
Assert or query exact positive definiteness.

### positive_semidefinite_matrix
Assert or query exact positive semidefiniteness.

### transpose

<a id="entry-presentation_rust_linear_algebra_capability_rust_native_rust_api_matrix_transpose_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_matrix_transpose.d2863d91a949"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn transpose(&self) -> Result<Matrix, ApiError>
```


### determinant

<a id="entry-presentation_rust_linear_algebra_capability_rust_native_rust_api_matrix_determinant_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_matrix_determinant.7802378e44d7"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn determinant(&self) -> Result<Expression, ApiError>
```


Fraction-free (Berkowitz/Bareiss) determinant of a square matrix.

### trace

<a id="entry-presentation_rust_linear_algebra_capability_rust_native_rust_api_matrix_trace_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_matrix_trace.17e62343e7e5"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn trace(&self) -> Result<Expression, ApiError>
```


### characteristic_polynomial

\(\det(\lambda I - M)\) as a polynomial in the named variable.

### minimal_polynomial

The monic minimal polynomial over the rationals. The matrix must have rational entries.

### eigenvalues

<a id="entry-presentation_rust_linear_algebra_capability_rust_native_rust_api_matrix_eigenvalues_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_matrix_eigenvalues.1b82e17db150"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn eigenvalues(&self) -> Result<Vec<Expression>, ApiError>
```


Eigenvalues with multiplicity, via the characteristic polynomial and the
root finder; eigenvalues the root finder cannot close remain as
exact first-class `polynomial_root` values.

### eigenvectors

<a id="entry-presentation_rust_linear_algebra_capability_rust_native_rust_api_matrix_operations_matrix_eigenvectors_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_matrix_operations_matrix_eigenvectors.4278876de9a0"></a>
<p class="symi-entry-owner">api::matrix_operations::Matrix method</p>

```rust signature
pub fn eigenvectors(&self) -> Result<Vec<Eigenpair>, ApiError>
```


For each eigenvalue, a basis of its eigenspace as column matrices.
**Notes:** WASM returns `Eigenpair` objects with `eigenvalue`/`vectors`
getters.

### eigenpair (WASM result class)

### eigenvalue

### vectors

<a id="entry-presentation_rust_linear_algebra_capability_rust_native_rust_api_results_eigenpair_vectors_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_eigenpair_vectors.83b1d79a80eb"></a>
<p class="symi-entry-owner">api::results::Eigenpair method</p>

```rust signature
pub fn vectors(&self) -> Vec<Matrix>
```


### inverse

<a id="entry-presentation_rust_linear_algebra_capability_rust_native_rust_api_matrix_inverse_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_matrix_inverse.6323c6ef9b79"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn inverse(&self) -> Result<Matrix, ApiError>
```


Inverse via the adjugate; raises on singular input.

### rank

Rank via Bareiss fraction-free elimination.

### row_reduce

<a id="entry-presentation_rust_linear_algebra_capability_rust_native_rust_api_matrix_row_reduce_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_matrix_row_reduce.01c0b7b2b2d3"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn row_reduce(&self) -> Result<Matrix, ApiError>
```


Bareiss row-reduced form (fraction-free; pivots remain on the diagonal).

### nullspace_basis

<a id="entry-presentation_rust_linear_algebra_capability_rust_native_rust_api_matrix_operations_matrix_nullspace_basis_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_matrix_operations_matrix_nullspace_basis.4f7d082fcdc5"></a>
<p class="symi-entry-owner">api::matrix_operations::Matrix method</p>

```rust signature
pub fn nullspace_basis(&self) -> Result<Vec<Matrix>, ApiError>
```


A basis of the kernel, as column matrices; empty list for full column rank.

### adjugate

<a id="entry-presentation_rust_linear_algebra_capability_rust_native_rust_api_matrix_adjugate_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_matrix_adjugate.ae05426aaf70"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn adjugate(&self) -> Result<Matrix, ApiError>
```


The classical adjoint (transpose of the cofactor matrix); satisfies
\(M\operatorname{adj}(M) = \det(M) I\).

### cofactor_matrix

<a id="entry-presentation_rust_linear_algebra_capability_rust_native_rust_api_matrix_cofactor_matrix_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_matrix_cofactor_matrix.210ffa8ee903"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn cofactor_matrix(&self) -> Result<Matrix, ApiError>
```


### lower_upper_decomposition

<a id="entry-presentation_rust_linear_algebra_capability_rust_native_rust_api_matrix_operations_matrix_lower_upper_decomposition_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_matrix_operations_matrix_lower_upper_decomposition.ddd6ce007949"></a>
<p class="symi-entry-owner">api::matrix_operations::Matrix method</p>

```rust signature
pub fn lower_upper_decomposition(
    &self,
) -> Result<(Matrix, Matrix, Matrix), ApiError>
```


Partial-pivoting LU decomposition returned as
`(permutation, lower, upper)` with \(\operatorname{permutation} M = \operatorname{lower}\,\operatorname{upper}\). The
permutation matrix is reconstructed from the pivoting row-swap record.
**Notes:** WASM returns a 3-element array `[permutation, lower, upper]`.

## Example

Exact matrix arithmetic and spectral data.

```rust
use symi::api::prelude::*;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let session = Session::new();
    let matrix = session.matrix([
        [session.integer(1), session.integer(2)],
        [session.integer(3), session.integer(4)],
    ])?;

    println!("{}", matrix.determinant()?);
    println!("{}", matrix.trace()?);
    println!("{}", matrix.transpose()?);
    Ok(())
}
```


## Additional API

### characteristic_polynomial

<a id="entry-presentation_rust_linear_algebra_capability_rust_native_rust_api_matrix_operations_matrix_characteristic_polynomial_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_matrix_operations_matrix_characteristic_polynomial.f339c5d48e3e"></a>
<p class="symi-entry-owner">api::matrix_operations::Matrix method</p>

```rust signature
pub fn characteristic_polynomial<'a, VariableType>(
    &self,
    variable: VariableType,
) -> Result<Expression, ApiError>
where
    VariableType: Into<VariableLike<'a>>,
```

\(\det(\lambda I - M)\) as a polynomial in the named variable.

### characteristic_polynomial

<a id="entry-presentation_rust_linear_algebra_capability_rust_native_rust_api_results_rationalcanonicalform_characteristic_polynomial_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_rationalcanonicalform_characteristic_polynomial.9575efa91bf9"></a>
<p class="symi-entry-owner">api::results::RationalCanonicalForm method</p>

```rust signature
pub fn characteristic_polynomial(&self) -> Expression
```

\(\det(\lambda I - M)\) as a polynomial in the named variable.

### eigenvalue

<a id="entry-presentation_rust_linear_algebra_capability_rust_native_rust_api_results_eigenpair_eigenvalue_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_eigenpair_eigenvalue.61771f6a3057"></a>
<p class="symi-entry-owner">api::results::Eigenpair method</p>

```rust signature
pub fn eigenvalue(&self) -> Expression
```

Public method placement for eigenvalue.

### eigenvalue

<a id="entry-presentation_rust_linear_algebra_capability_rust_native_rust_api_results_jordanblock_eigenvalue_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_jordanblock_eigenvalue.cd77f75f5ebd"></a>
<p class="symi-entry-owner">api::results::JordanBlock method</p>

```rust signature
pub fn eigenvalue(&self) -> Expression
```

Public method placement for eigenvalue.

### minimal_polynomial

<a id="entry-presentation_rust_linear_algebra_capability_rust_native_rust_api_matrix_operations_matrix_minimal_polynomial_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_matrix_operations_matrix_minimal_polynomial.00c281d1fe78"></a>
<p class="symi-entry-owner">api::matrix_operations::Matrix method</p>

```rust signature
pub fn minimal_polynomial<'a, VariableType>(
    &self,
    variable: VariableType,
) -> Result<Expression, ApiError>
where
    VariableType: Into<VariableLike<'a>>,
```

The monic minimal polynomial over the rationals. The matrix must have rational entries.

### minimal_polynomial

<a id="entry-presentation_rust_linear_algebra_capability_rust_native_rust_api_results_rationalcanonicalform_minimal_polynomial_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_rationalcanonicalform_minimal_polynomial.7e36f3c17445"></a>
<p class="symi-entry-owner">api::results::RationalCanonicalForm method</p>

```rust signature
pub fn minimal_polynomial(&self) -> Expression
```

The monic minimal polynomial over the rationals. The matrix must have rational entries.

### rank

<a id="entry-presentation_rust_linear_algebra_capability_rust_native_rust_api_matrix_rank_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_matrix_rank.4026cef032d4"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn rank(&self) -> Result<usize, ApiError>
```

Rank via Bareiss fraction-free elimination.

### rank

<a id="entry-presentation_rust_linear_algebra_capability_rust_native_rust_api_results_hermitenormalformdecomposition_rank_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_hermitenormalformdecomposition_rank.4611235cf342"></a>
<p class="symi-entry-owner">api::results::HermiteNormalFormDecomposition method</p>

```rust signature
pub fn rank(&self) -> usize
```

Rank via Bareiss fraction-free elimination.

### rank

<a id="entry-presentation_rust_linear_algebra_capability_rust_native_rust_api_results_smithnormalformdecomposition_rank_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_smithnormalformdecomposition_rank.d82924340d22"></a>
<p class="symi-entry-owner">api::results::SmithNormalFormDecomposition method</p>

```rust signature
pub fn rank(&self) -> usize
```

Rank via Bareiss fraction-free elimination.

