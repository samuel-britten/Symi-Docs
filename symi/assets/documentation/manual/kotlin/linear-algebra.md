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

<a id="entry-presentation_kotlin_linear_algebra_capability_algebra_scalar_multiply_api_matrix_scalar_multiply"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_scalarmultiply.d75b11c9100d"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun scalarMultiply(scalar: UniffiExpression): UniffiMatrix
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

<a id="entry-presentation_kotlin_linear_algebra_capability_algebra_transpose_api_matrix_transpose"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_transpose.5b4535678fda"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun transpose(): UniffiMatrix
```


### determinant

<a id="entry-presentation_kotlin_linear_algebra_capability_algebra_determinant_api_matrix_determinant"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_determinant.ca2b3af014cb"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun determinant(): UniffiExpression
```


Fraction-free (Berkowitz/Bareiss) determinant of a square matrix.

### trace

<a id="entry-presentation_kotlin_linear_algebra_capability_algebra_trace_api_matrix_trace"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_trace.18eb50506d87"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun trace(): UniffiExpression
```


### characteristic_polynomial

\(\det(\lambda I - M)\) as a polynomial in the named variable.

### minimal_polynomial

The monic minimal polynomial over the rationals. The matrix must have rational entries.

### eigenvalues

<a id="entry-presentation_kotlin_linear_algebra_capability_algebra_eigenvalues_api_matrix_eigenvalues"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_eigenvalues.a1bc8d917d77"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun eigenvalues(): List<UniffiExpression>
```


Eigenvalues with multiplicity, via the characteristic polynomial and the
root finder; eigenvalues the root finder cannot close remain as
exact first-class `polynomial_root` values.

### eigenvectors

<a id="entry-presentation_kotlin_linear_algebra_capability_algebra_eigenvectors_api_matrix_operations_matrix_eigenvectors"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_eigenvectors.dbb1b4946bba"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun eigenvectors(): List<UniffiEigenpair>
```


For each eigenvalue, a basis of its eigenspace as column matrices.
**Notes:** WASM returns `Eigenpair` objects with `eigenvalue`/`vectors`
getters.

### eigenpair (WASM result class)

### eigenvalue

### vectors

<a id="entry-presentation_kotlin_linear_algebra_capability_algebra_vectors_api_results_eigenpair_vectors"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffieigenpair_vectors.5fdde444c7d4"></a>
<p class="symi-entry-owner">UniffiEigenpair method</p>

```kotlin signature
fun vectors(): List<UniffiMatrix>
```


### inverse

<a id="entry-presentation_kotlin_linear_algebra_capability_algebra_inverse_api_matrix_inverse"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_inverse.ee74ca3b5f51"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun inverse(): UniffiMatrix
```


Inverse via the adjugate; raises on singular input.

### rank

<a id="entry-presentation_kotlin_linear_algebra_capability_algebra_rank_api_matrix_rank"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_rank.db4ccf3dadbf"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun rank(): kotlin.ULong
```


Rank via Bareiss fraction-free elimination.

### row_reduce

<a id="entry-presentation_kotlin_linear_algebra_capability_algebra_row_reduce_api_matrix_row_reduce"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_rowreduce.1e80a96b1dca"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun rowReduce(): UniffiMatrix
```


Bareiss row-reduced form (fraction-free; pivots remain on the diagonal).

### nullspace_basis

<a id="entry-presentation_kotlin_linear_algebra_capability_algebra_nullspace_basis_api_matrix_operations_matrix_nullspace_basis"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_nullspacebasis.e6ee6b35aa92"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun nullspaceBasis(): List<UniffiMatrix>
```


A basis of the kernel, as column matrices; empty list for full column rank.

### adjugate

<a id="entry-presentation_kotlin_linear_algebra_capability_algebra_adjugate_api_matrix_adjugate"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_adjugate.20d5ac2569c1"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun adjugate(): UniffiMatrix
```


The classical adjoint (transpose of the cofactor matrix); satisfies
\(M\operatorname{adj}(M) = \det(M) I\).

### cofactor_matrix

<a id="entry-presentation_kotlin_linear_algebra_capability_algebra_cofactor_matrix_api_matrix_cofactor_matrix"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_cofactormatrix.bf542ff8cf8c"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun cofactorMatrix(): UniffiMatrix
```


### lower_upper_decomposition

<a id="entry-presentation_kotlin_linear_algebra_capability_algebra_lower_upper_decomposition_api_matrix_operations_matrix_lower_upper_decomposition"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_lowerupperdecomposition.9dc8d2c3fb9f"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun lowerUpperDecomposition(): UniffiMatrixMatrixMatrixTuple
```


Partial-pivoting LU decomposition returned as
`(permutation, lower, upper)` with \(\operatorname{permutation} M = \operatorname{lower}\,\operatorname{upper}\). The
permutation matrix is reconstructed from the pivoting row-swap record.
**Notes:** WASM returns a 3-element array `[permutation, lower, upper]`.

## Example


## Additional API

### characteristic_polynomial

<a id="entry-presentation_kotlin_linear_algebra_capability_algebra_characteristic_polynomial_api_matrix_operations_matrix_characteristic_polynomial"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_characteristicpolynomial.f41c2d1c118c"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun characteristicPolynomial(variable: kotlin.String): UniffiExpression
```

\(\det(\lambda I - M)\) as a polynomial in the named variable.

### characteristic_polynomial

<a id="entry-presentation_kotlin_linear_algebra_capability_algebra_characteristic_polynomial_api_results_rationalcanonicalform_characteristic_polynomial"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffirationalcanonicalform_characteristicpolynomial.9d3983183ffc"></a>
<p class="symi-entry-owner">UniffiRationalCanonicalForm method</p>

```kotlin signature
fun characteristicPolynomial(): UniffiExpression
```

\(\det(\lambda I - M)\) as a polynomial in the named variable.

### eigenvalue

<a id="entry-presentation_kotlin_linear_algebra_capability_algebra_eigenvalue_api_results_eigenpair_eigenvalue"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffieigenpair_eigenvalue.c1c10d53ea0b"></a>
<p class="symi-entry-owner">UniffiEigenpair method</p>

```kotlin signature
fun eigenvalue(): UniffiExpression
```

The eigenvalue of the pair.

### eigenvalue

<a id="entry-presentation_kotlin_linear_algebra_capability_algebra_eigenvalue_api_results_jordanblock_eigenvalue"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffijordanblock_eigenvalue.daf3faecb489"></a>
<p class="symi-entry-owner">UniffiJordanBlock method</p>

```kotlin signature
fun eigenvalue(): UniffiExpression
```

The eigenvalue this Jordan block belongs to.

### minimal_polynomial

<a id="entry-presentation_kotlin_linear_algebra_capability_algebra_minimal_polynomial_api_matrix_operations_matrix_minimal_polynomial"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_minimalpolynomial.ad76bb05f7e5"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun minimalPolynomial(variable: kotlin.String): UniffiExpression
```

The monic minimal polynomial over the rationals. The matrix must have rational entries.

### minimal_polynomial

<a id="entry-presentation_kotlin_linear_algebra_capability_algebra_minimal_polynomial_api_results_rationalcanonicalform_minimal_polynomial"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffirationalcanonicalform_minimalpolynomial.2fc03c27e348"></a>
<p class="symi-entry-owner">UniffiRationalCanonicalForm method</p>

```kotlin signature
fun minimalPolynomial(): UniffiExpression
```

The monic minimal polynomial over the rationals. The matrix must have rational entries.

### rank

<a id="entry-presentation_kotlin_linear_algebra_capability_algebra_rank_api_results_hermitenormalformdecomposition_rank"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffihermitenormalformdecomposition_rank.4699573d3177"></a>
<p class="symi-entry-owner">UniffiHermiteNormalFormDecomposition method</p>

```kotlin signature
fun rank(): kotlin.ULong
```

Rank via Bareiss fraction-free elimination.

### rank

<a id="entry-presentation_kotlin_linear_algebra_capability_algebra_rank_api_results_smithnormalformdecomposition_rank"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffismithnormalformdecomposition_rank.9cd28780bbf1"></a>
<p class="symi-entry-owner">UniffiSmithNormalFormDecomposition method</p>

```kotlin signature
fun rank(): kotlin.ULong
```

Rank via Bareiss fraction-free elimination.

