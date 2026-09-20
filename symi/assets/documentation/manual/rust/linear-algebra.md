# Linear algebra

Matrix arithmetic and linear algebra operations are exact symbolic operations.

## Arithmetic

Python additionally overloads `+`, `-`, `*` (matrix product) over these
named methods.

### add

<a id="entry-presentation_rust_api_matrix_add"></a>
<a id="placement-placement.rust.native_rust.api_matrix_add.72d0792acdec"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn add(&self, other: &Matrix) -> Result<Matrix, ApiError>
```

Provides the `add` operation on this native type.

### subtract

<a id="entry-presentation_rust_api_matrix_subtract"></a>
<a id="placement-placement.rust.native_rust.api_matrix_subtract.9c6f2565e43b"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn subtract(&self, other: &Matrix) -> Result<Matrix, ApiError>
```

Subtracts another same-session matrix from this matrix.

### multiply

Matrix product; inner dimensions must agree.

<a id="entry-presentation_rust_api_matrix_multiply"></a>
<a id="placement-placement.rust.native_rust.api_matrix_multiply.5ec431521e53"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn multiply(&self, other: &Matrix) -> Result<Matrix, ApiError>
```

Provides the `multiply` operation on this native type.

### scalar_multiply

<a id="entry-presentation_rust_api_matrix_scalar_multiply"></a>
<a id="placement-placement.rust.native_rust.api_matrix_scalar_multiply.9c4ac782d3c5"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn scalar_multiply(
    &self,
    scalar: &Expression,
) -> Result<Matrix, ApiError>
```

Multiplies this matrix by a same-session scalar expression.

## Matrix assumptions

Matrix predicates are available as methods on `Matrix`, as constructors on an
explicit `Context`, and as default-context module functions in Python and WASM.
Native Rust uses the corresponding `Session` methods. Query methods return
`True`/`False`/`None` (or the native `TruthValue`), preserving unknown when
the exact symbolic engine cannot decide.

### matrix_shape

<a id="entry-presentation_rust_api_session_matrix_shape"></a>
<a id="placement-placement.rust.native_rust.api_session_matrix_shape.3774272c23ab"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn matrix_shape(
    &self,
    subject: &Matrix,
    rows: usize,
    columns: usize,
) -> Result<AssumptionProposition, ApiError>
```

Assert or query an exact positive row and column count.

### square_matrix

<a id="entry-presentation_rust_api_session_square_matrix"></a>
<a id="placement-placement.rust.native_rust.api_session_square_matrix.0a9931cc320f"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn square_matrix(
    &self,
    subject: &Matrix,
) -> Result<AssumptionProposition, ApiError>
```

Assert or query that the matrix has equal row and column counts.

### zero_matrix
Assert or query that all entries are zero.

### identity_matrix
Assert or query the identity-matrix structure.

### diagonal_matrix
Assert or query diagonal structure.

### upper_triangular_matrix

<a id="entry-presentation_rust_api_session_upper_triangular_matrix"></a>
<a id="placement-placement.rust.native_rust.api_session_upper_triangular_matrix.c554627e13b3"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn upper_triangular_matrix(
    &self,
    subject: &Matrix,
) -> Result<AssumptionProposition, ApiError>
```

Assert or query upper-triangular structure.

### lower_triangular_matrix

<a id="entry-presentation_rust_api_session_lower_triangular_matrix"></a>
<a id="placement-placement.rust.native_rust.api_session_lower_triangular_matrix.85a2ce0f17ce"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn lower_triangular_matrix(
    &self,
    subject: &Matrix,
) -> Result<AssumptionProposition, ApiError>
```

Assert or query lower-triangular structure.

### symmetric_matrix

<a id="entry-presentation_rust_api_session_symmetric_matrix"></a>
<a id="placement-placement.rust.native_rust.api_session_symmetric_matrix.1873af1015d0"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn symmetric_matrix(
    &self,
    subject: &Matrix,
) -> Result<AssumptionProposition, ApiError>
```

Assert or query equality with the transpose.

### hermitian_matrix

<a id="entry-presentation_rust_api_session_hermitian_matrix"></a>
<a id="placement-placement.rust.native_rust.api_session_hermitian_matrix.1161de5e9340"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn hermitian_matrix(
    &self,
    subject: &Matrix,
) -> Result<AssumptionProposition, ApiError>
```

Assert or query equality with the conjugate transpose.

### orthogonal_matrix

<a id="entry-presentation_rust_api_session_orthogonal_matrix"></a>
<a id="placement-placement.rust.native_rust.api_session_orthogonal_matrix.330cc229c809"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn orthogonal_matrix(
    &self,
    subject: &Matrix,
) -> Result<AssumptionProposition, ApiError>
```

Assert or query the real orthogonality condition.

### unitary_matrix

<a id="entry-presentation_rust_api_session_unitary_matrix"></a>
<a id="placement-placement.rust.native_rust.api_session_unitary_matrix.8fc55fe6e6de"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn unitary_matrix(
    &self,
    subject: &Matrix,
) -> Result<AssumptionProposition, ApiError>
```

Assert or query the unitary condition.

### normal_matrix

<a id="entry-presentation_rust_api_session_normal_matrix"></a>
<a id="placement-placement.rust.native_rust.api_session_normal_matrix.56ccf67124ee"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn normal_matrix(
    &self,
    subject: &Matrix,
) -> Result<AssumptionProposition, ApiError>
```

Assert or query commutation with the conjugate transpose.

### full_rank_matrix

<a id="entry-presentation_rust_api_session_full_rank_matrix"></a>
<a id="placement-placement.rust.native_rust.api_session_full_rank_matrix.36a4a5ca8c68"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn full_rank_matrix(
    &self,
    subject: &Matrix,
) -> Result<AssumptionProposition, ApiError>
```

Assert or query full rank.

### invertible_matrix

<a id="entry-presentation_rust_api_session_invertible_matrix"></a>
<a id="placement-placement.rust.native_rust.api_session_invertible_matrix.1f9b739b30b3"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn invertible_matrix(
    &self,
    subject: &Matrix,
) -> Result<AssumptionProposition, ApiError>
```

Assert or query square invertibility.

### singular_matrix

<a id="entry-presentation_rust_api_session_singular_matrix"></a>
<a id="placement-placement.rust.native_rust.api_session_singular_matrix.94933a3eb298"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn singular_matrix(
    &self,
    subject: &Matrix,
) -> Result<AssumptionProposition, ApiError>
```

Assert or query square singularity.

### integer_entries

<a id="entry-presentation_rust_api_session_integer_entries"></a>
<a id="placement-placement.rust.native_rust.api_session_integer_entries.597830ca262e"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn integer_entries(
    &self,
    subject: &Matrix,
) -> Result<AssumptionProposition, ApiError>
```

Assert or query integer entries.

### real_entries

<a id="entry-presentation_rust_api_session_real_entries"></a>
<a id="placement-placement.rust.native_rust.api_session_real_entries.ccace0bb5dbb"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn real_entries(
    &self,
    subject: &Matrix,
) -> Result<AssumptionProposition, ApiError>
```

Assert or query real entries.

### complex_entries

<a id="entry-presentation_rust_api_session_complex_entries"></a>
<a id="placement-placement.rust.native_rust.api_session_complex_entries.38771db69ebf"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn complex_entries(
    &self,
    subject: &Matrix,
) -> Result<AssumptionProposition, ApiError>
```

Assert or query finite complex entries.

### positive_definite_matrix

<a id="entry-presentation_rust_api_session_positive_definite_matrix"></a>
<a id="placement-placement.rust.native_rust.api_session_positive_definite_matrix.c53aeb2815bf"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn positive_definite_matrix(
    &self,
    subject: &Matrix,
) -> Result<AssumptionProposition, ApiError>
```

Assert or query exact positive definiteness.

### positive_semidefinite_matrix

<a id="entry-presentation_rust_api_session_positive_semidefinite_matrix"></a>
<a id="placement-placement.rust.native_rust.api_session_positive_semidefinite_matrix.15dc5c8e9dad"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn positive_semidefinite_matrix(
    &self,
    subject: &Matrix,
) -> Result<AssumptionProposition, ApiError>
```

Assert or query exact positive semidefiniteness.

### transpose

<a id="entry-presentation_rust_api_matrix_transpose"></a>
<a id="placement-placement.rust.native_rust.api_matrix_transpose.d2863d91a949"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn transpose(&self) -> Result<Matrix, ApiError>
```

Provides the `transpose` operation on this native type.

### determinant

Fraction-free (Berkowitz/Bareiss) determinant of a square matrix.

<a id="entry-presentation_rust_api_matrix_determinant"></a>
<a id="placement-placement.rust.native_rust.api_matrix_determinant.7802378e44d7"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn determinant(&self) -> Result<Expression, ApiError>
```

Provides the `determinant` operation on this native type.

### trace

<a id="entry-presentation_rust_api_matrix_trace"></a>
<a id="placement-placement.rust.native_rust.api_matrix_trace.17e62343e7e5"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn trace(&self) -> Result<Expression, ApiError>
```

Provides the `trace` operation on this native type.

### characteristic_polynomial

<a id="entry-presentation_rust_api_matrix_characteristic_polynomial"></a>
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

### minimal_polynomial

<a id="entry-presentation_rust_api_matrix_minimal_polynomial"></a>
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

### eigenvalues

Eigenvalues with multiplicity, via the characteristic polynomial and the
root finder; eigenvalues the root finder cannot close remain as
exact first-class `polynomial_root` values.

<a id="entry-presentation_rust_api_matrix_eigenvalues"></a>
<a id="placement-placement.rust.native_rust.api_matrix_eigenvalues.1b82e17db150"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn eigenvalues(&self) -> Result<Vec<Expression>, ApiError>
```

Returns the eigenvalues established by the exact characteristic-polynomial path.

### eigenvectors

For each eigenvalue, a basis of its eigenspace as column matrices.
**Notes:** WASM returns `Eigenpair` objects with `eigenvalue`/`vectors`
getters.

<a id="entry-presentation_rust_api_matrix_eigenvectors"></a>
<a id="placement-placement.rust.native_rust.api_matrix_operations_matrix_eigenvectors.4278876de9a0"></a>
<p class="symi-entry-owner">api::matrix_operations::Matrix method</p>

```rust signature
pub fn eigenvectors(&self) -> Result<Vec<Eigenpair>, ApiError>
```

The eigenvalues of this matrix paired with a basis of each eigenspace.

### eigenpair (WASM result class)

### eigenvalue

<a id="entry-presentation_rust_api_eigenpair_eigenvalue"></a>
<a id="placement-placement.rust.native_rust.api_results_eigenpair_eigenvalue.61771f6a3057"></a>
<p class="symi-entry-owner">api::results::Eigenpair method</p>

```rust signature
pub fn eigenvalue(&self) -> Expression
```


### vectors

<a id="entry-presentation_rust_api_eigenpair_vectors"></a>
<a id="placement-placement.rust.native_rust.api_results_eigenpair_vectors.83b1d79a80eb"></a>
<p class="symi-entry-owner">api::results::Eigenpair method</p>

```rust signature
pub fn vectors(&self) -> Vec<Matrix>
```

A basis of the eigenspace, each vector a single-column matrix.

### inverse

Inverse via the adjugate; raises on singular input.

<a id="entry-presentation_rust_api_matrix_inverse"></a>
<a id="placement-placement.rust.native_rust.api_matrix_inverse.6323c6ef9b79"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn inverse(&self) -> Result<Matrix, ApiError>
```

Returns this matrix's exact inverse when the engine can construct one.

### rank

<a id="entry-presentation_rust_api_matrix_rank"></a>
<a id="placement-placement.rust.native_rust.api_matrix_rank.4026cef032d4"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn rank(&self) -> Result<usize, ApiError>
```


Rank via Bareiss fraction-free elimination.

### row_reduce

Bareiss row-reduced form (fraction-free; pivots remain on the diagonal).

<a id="entry-presentation_rust_api_matrix_row_reduce"></a>
<a id="placement-placement.rust.native_rust.api_matrix_row_reduce.01c0b7b2b2d3"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn row_reduce(&self) -> Result<Matrix, ApiError>
```

Returns the fraction-free row-reduced form of this matrix.

### nullspace_basis

A basis of the kernel, as column matrices; empty list for full column rank.

<a id="entry-presentation_rust_api_matrix_nullspace_basis"></a>
<a id="placement-placement.rust.native_rust.api_matrix_operations_matrix_nullspace_basis.4f7d082fcdc5"></a>
<p class="symi-entry-owner">api::matrix_operations::Matrix method</p>

```rust signature
pub fn nullspace_basis(&self) -> Result<Vec<Matrix>, ApiError>
```

A basis of the nullspace, each vector a single-column matrix.

### adjugate

The classical adjoint (transpose of the cofactor matrix); satisfies
\(M\operatorname{adj}(M) = \det(M) I\).

<a id="entry-presentation_rust_api_matrix_adjugate"></a>
<a id="placement-placement.rust.native_rust.api_matrix_adjugate.ae05426aaf70"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn adjugate(&self) -> Result<Matrix, ApiError>
```

Returns this matrix's classical adjugate.

### cofactor_matrix

<a id="entry-presentation_rust_api_matrix_cofactor_matrix"></a>
<a id="placement-placement.rust.native_rust.api_matrix_cofactor_matrix.210ffa8ee903"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn cofactor_matrix(&self) -> Result<Matrix, ApiError>
```

Returns this matrix's cofactor matrix.

### lower_upper_decomposition

Partial-pivoting LU decomposition returned as
`(permutation, lower, upper)` with \(\operatorname{permutation} M = \operatorname{lower}\,\operatorname{upper}\). The
permutation matrix is reconstructed from the pivoting row-swap record.
**Notes:** WASM returns a 3-element array `[permutation, lower, upper]`.

<a id="entry-presentation_rust_api_matrix_lower_upper_decomposition"></a>
<a id="placement-placement.rust.native_rust.api_matrix_operations_matrix_lower_upper_decomposition.ddd6ce007949"></a>
<p class="symi-entry-owner">api::matrix_operations::Matrix method</p>

```rust signature
pub fn lower_upper_decomposition(
    &self,
) -> Result<(Matrix, Matrix, Matrix), ApiError>
```

The LU decomposition as `(permutation, lower, upper)` with `permutation * self = lower * upper`.

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

### Eigenpair

<a id="entry-presentation_rust_api_eigenpair"></a>
<a id="placement-placement.rust.native_rust.api_eigenpair.75c3299d7833"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use results::Eigenpair;
```

One eigenvalue together with a basis of its eigenspace.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_results_eigenpair.88ea9fd6d929"></a>
<p class="symi-entry-owner">Type: <code>api::results::Eigenpair</code></p>

```rust signature
pub struct Eigenpair
```

</details>

### IntegerCokernelData

<a id="entry-presentation_rust_api_integercokerneldata"></a>
<a id="placement-placement.rust.native_rust.api_integercokerneldata.22af874ea59c"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use results::IntegerCokernelData;
```

The structure of the integer cokernel of a matrix.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_results_integercokerneldata.1a7d1dec43c0"></a>
<p class="symi-entry-owner">Type: <code>api::results::IntegerCokernelData</code></p>

```rust signature
pub struct IntegerCokernelData
```

</details>

#### IntegerCokernelData.free_rank

<a id="entry-presentation_rust_api_integercokerneldata_free_rank"></a>
<a id="placement-placement.rust.native_rust.api_results_integercokerneldata_free_rank.0634b3398792"></a>
<p class="symi-entry-owner">api::results::IntegerCokernelData method</p>

```rust signature
pub fn free_rank(&self) -> usize
```

The rank of the free part.

#### IntegerCokernelData.torsion_invariant_factors

<a id="entry-presentation_rust_api_integercokerneldata_torsion_invariant_factors"></a>
<a id="placement-placement.rust.native_rust.api_results_integercokerneldata_torsion_invariant_factors.92d65a8c4b3f"></a>
<p class="symi-entry-owner">api::results::IntegerCokernelData method</p>

```rust signature
pub fn torsion_invariant_factors(&self) -> Vec<Expression>
```

The invariant factors of the torsion part.

### Matrix

<a id="entry-presentation_rust_api_matrix"></a>
<a id="placement-placement.rust.native_rust.api_matrix.2ba95f0af754"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct Matrix
```

Public native data structure named `matrix`.

#### Matrix.execute

<a id="entry-presentation_rust_api_matrix_execute"></a>
<a id="placement-placement.rust.native_rust.api_matrix_execute.2c2972cecb2e"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn execute(&self) -> Result<Matrix, ApiError>
```

Provides the `execute` operation on this native type.

#### Matrix.generation

<a id="entry-presentation_rust_api_matrix_generation"></a>
<a id="placement-placement.rust.native_rust.api_matrix_generation.363da9dc804f"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn generation(&self) -> u64
```

The session generation this object was created in.

#### Matrix.has_complex_entries

<a id="entry-presentation_rust_api_matrix_has_complex_entries"></a>
<a id="placement-placement.rust.native_rust.api_matrix_has_complex_entries.c19bfdf575e0"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn has_complex_entries(&self) -> Result<TruthValue, ApiError>
```

Query whether every entry is finite complex.

#### Matrix.has_integer_entries

<a id="entry-presentation_rust_api_matrix_has_integer_entries"></a>
<a id="placement-placement.rust.native_rust.api_matrix_has_integer_entries.74cda62cb797"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn has_integer_entries(&self) -> Result<TruthValue, ApiError>
```

Query whether every entry is an integer.

#### Matrix.has_real_entries

<a id="entry-presentation_rust_api_matrix_has_real_entries"></a>
<a id="placement-placement.rust.native_rust.api_matrix_has_real_entries.29309a51fd42"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn has_real_entries(&self) -> Result<TruthValue, ApiError>
```

Query whether every entry is real.

#### Matrix.is_diagonal_matrix

<a id="entry-presentation_rust_api_matrix_is_diagonal_matrix"></a>
<a id="placement-placement.rust.native_rust.api_matrix_is_diagonal_matrix.d84eeb527e21"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn is_diagonal_matrix(&self) -> Result<TruthValue, ApiError>
```

Query whether this matrix is diagonal.

#### Matrix.is_equality

<a id="entry-presentation_rust_api_matrix_is_equality"></a>
<a id="placement-placement.rust.native_rust.api_matrix_operations_matrix_is_equality.dd84978d1bc9"></a>
<p class="symi-entry-owner">api::matrix_operations::Matrix method</p>

```rust signature
pub fn is_equality(&self) -> bool
```

Always false on a matrix: a matrix is never an equality relation node.

#### Matrix.is_finite_set

<a id="entry-presentation_rust_api_matrix_is_finite_set"></a>
<a id="placement-placement.rust.native_rust.api_matrix_operations_matrix_is_finite_set.787d934b5474"></a>
<p class="symi-entry-owner">api::matrix_operations::Matrix method</p>

```rust signature
pub fn is_finite_set(&self) -> bool
```

Always false on a matrix: a matrix is never a finite set.

#### Matrix.is_full_rank_matrix

<a id="entry-presentation_rust_api_matrix_is_full_rank_matrix"></a>
<a id="placement-placement.rust.native_rust.api_matrix_is_full_rank_matrix.2e34ed5f1419"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn is_full_rank_matrix(&self) -> Result<TruthValue, ApiError>
```

Query whether this matrix has full rank.

#### Matrix.is_hermitian_matrix

<a id="entry-presentation_rust_api_matrix_is_hermitian_matrix"></a>
<a id="placement-placement.rust.native_rust.api_matrix_is_hermitian_matrix.1ac87af99b6d"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn is_hermitian_matrix(&self) -> Result<TruthValue, ApiError>
```

Query whether this matrix is Hermitian.

#### Matrix.is_identity_matrix

<a id="entry-presentation_rust_api_matrix_is_identity_matrix"></a>
<a id="placement-placement.rust.native_rust.api_matrix_is_identity_matrix.d3c895037995"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn is_identity_matrix(&self) -> Result<TruthValue, ApiError>
```

Query whether this matrix is the identity matrix.

#### Matrix.is_image_set

<a id="entry-presentation_rust_api_matrix_is_image_set"></a>
<a id="placement-placement.rust.native_rust.api_matrix_operations_matrix_is_image_set.1cdc2607a31c"></a>
<p class="symi-entry-owner">api::matrix_operations::Matrix method</p>

```rust signature
pub fn is_image_set(&self) -> bool
```

Always false on a matrix: a matrix is never an image set.

#### Matrix.is_integral

<a id="entry-presentation_rust_api_matrix_is_integral"></a>
<a id="placement-placement.rust.native_rust.api_matrix_operations_matrix_is_integral.e36dc3a283a3"></a>
<p class="symi-entry-owner">api::matrix_operations::Matrix method</p>

```rust signature
pub fn is_integral(&self) -> bool
```

Always false on a matrix: integrality is a property of scalar expressions.

#### Matrix.is_invertible_matrix

<a id="entry-presentation_rust_api_matrix_is_invertible_matrix"></a>
<a id="placement-placement.rust.native_rust.api_matrix_is_invertible_matrix.36066ca74a0a"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn is_invertible_matrix(&self) -> Result<TruthValue, ApiError>
```

Query whether this matrix is invertible.

#### Matrix.is_matrix

<a id="entry-presentation_rust_api_matrix_is_matrix"></a>
<a id="placement-placement.rust.native_rust.api_matrix_operations_matrix_is_matrix.616418ad9772"></a>
<p class="symi-entry-owner">api::matrix_operations::Matrix method</p>

```rust signature
pub fn is_matrix(&self) -> bool
```

Always true on a matrix, so a mixed result stream can be discriminated.

#### Matrix.is_normal_matrix

<a id="entry-presentation_rust_api_matrix_is_normal_matrix"></a>
<a id="placement-placement.rust.native_rust.api_matrix_is_normal_matrix.d1e68a4c9593"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn is_normal_matrix(&self) -> Result<TruthValue, ApiError>
```

Query whether this matrix is normal.

#### Matrix.is_orthogonal_matrix

<a id="entry-presentation_rust_api_matrix_is_orthogonal_matrix"></a>
<a id="placement-placement.rust.native_rust.api_matrix_is_orthogonal_matrix.745c6ff6762c"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn is_orthogonal_matrix(&self) -> Result<TruthValue, ApiError>
```

Query whether this matrix is orthogonal.

#### Matrix.is_positive

<a id="entry-presentation_rust_api_matrix_is_positive"></a>
<a id="placement-placement.rust.native_rust.api_matrix_operations_matrix_is_positive.aaf10598b731"></a>
<p class="symi-entry-owner">api::matrix_operations::Matrix method</p>

```rust signature
pub fn is_positive(&self) -> Option<bool>
```

Never settled on a matrix: positivity is a property of scalar expressions.

#### Matrix.is_positive_definite_matrix

<a id="entry-presentation_rust_api_matrix_is_positive_definite_matrix"></a>
<a id="placement-placement.rust.native_rust.api_matrix_is_positive_definite_matrix.278db34dcf57"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn is_positive_definite_matrix(
    &self,
) -> Result<TruthValue, ApiError>
```

Query whether this matrix is positive definite.

#### Matrix.is_positive_semidefinite_matrix

<a id="entry-presentation_rust_api_matrix_is_positive_semidefinite_matrix"></a>
<a id="placement-placement.rust.native_rust.api_matrix_is_positive_semidefinite_matrix.712d4bd582d1"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn is_positive_semidefinite_matrix(
    &self,
) -> Result<TruthValue, ApiError>
```

Query whether this matrix is positive semidefinite.

#### Matrix.is_real

<a id="entry-presentation_rust_api_matrix_is_real"></a>
<a id="placement-placement.rust.native_rust.api_matrix_operations_matrix_is_real.ced97676a6a1"></a>
<p class="symi-entry-owner">api::matrix_operations::Matrix method</p>

```rust signature
pub fn is_real(&self) -> Option<bool>
```

Never settled on a matrix: realness is a property of scalar expressions.

#### Matrix.is_singular_matrix

<a id="entry-presentation_rust_api_matrix_is_singular_matrix"></a>
<a id="placement-placement.rust.native_rust.api_matrix_is_singular_matrix.c1c6550f35e5"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn is_singular_matrix(&self) -> Result<TruthValue, ApiError>
```

Query whether this matrix is singular.

#### Matrix.is_square

<a id="entry-presentation_rust_api_matrix_is_square"></a>
<a id="placement-placement.rust.native_rust.api_matrix_is_square.b6f45d8f29cf"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn is_square(&self) -> Result<TruthValue, ApiError>
```

Query whether this matrix is square.

#### Matrix.is_stale

<a id="entry-presentation_rust_api_matrix_is_stale"></a>
<a id="placement-placement.rust.native_rust.api_matrix_is_stale.b29dd5862e50"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn is_stale(&self) -> bool
```

Provides the `is_stale` operation on this native type.

#### Matrix.is_symmetric_matrix

<a id="entry-presentation_rust_api_matrix_is_symmetric_matrix"></a>
<a id="placement-placement.rust.native_rust.api_matrix_is_symmetric_matrix.5e6c78d62b96"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn is_symmetric_matrix(&self) -> Result<TruthValue, ApiError>
```

Query whether this matrix is symmetric.

#### Matrix.is_union

<a id="entry-presentation_rust_api_matrix_is_union"></a>
<a id="placement-placement.rust.native_rust.api_matrix_operations_matrix_is_union.650d5a6aface"></a>
<p class="symi-entry-owner">api::matrix_operations::Matrix method</p>

```rust signature
pub fn is_union(&self) -> bool
```

Always false on a matrix: a matrix is never a set union.

#### Matrix.is_unitary_matrix

<a id="entry-presentation_rust_api_matrix_is_unitary_matrix"></a>
<a id="placement-placement.rust.native_rust.api_matrix_is_unitary_matrix.7c320fe25b8b"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn is_unitary_matrix(&self) -> Result<TruthValue, ApiError>
```

Query whether this matrix is unitary.

#### Matrix.is_zero_matrix

<a id="entry-presentation_rust_api_matrix_is_zero_matrix"></a>
<a id="placement-placement.rust.native_rust.api_matrix_is_zero_matrix.76a7d45973a7"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn is_zero_matrix(&self) -> Result<TruthValue, ApiError>
```

Query whether this matrix is the zero matrix.

#### Matrix.session

<a id="entry-presentation_rust_api_matrix_session"></a>
<a id="placement-placement.rust.native_rust.api_matrix_session.802181f9e17e"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn session(&self) -> Session
```

The session that owns this object, for host adapters that carry the owner alongside it.

### MatrixPredicate

<a id="entry-presentation_rust_api_matrixpredicate"></a>
<a id="placement-placement.rust.native_rust.api_matrixpredicate.043471865d1c"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use crate::assumptions::MatrixPredicate;
```

Re-exports the matrix predicate vocabulary shared by every binding.

### MatrixPredicateApplication

<a id="entry-presentation_rust_api_matrixpredicateapplication"></a>
<a id="placement-placement.rust.native_rust.api_matrixpredicateapplication.77f031b3d5fd"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use crate::assumptions::MatrixPredicateApplication;
```

Re-exports the matrix predicate vocabulary shared by every binding.

