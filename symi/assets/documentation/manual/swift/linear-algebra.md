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

<a id="entry-presentation_swift_linear_algebra_capability_algebra_scalar_multiply_api_matrix_scalar_multiply"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_scalarmultiply.bc5b1732bab2"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func scalarMultiply(scalar: UniffiExpression) -> UniffiMatrix
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

<a id="entry-presentation_swift_linear_algebra_capability_algebra_transpose_api_matrix_transpose"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_transpose.8ea115545f64"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func transpose() -> UniffiMatrix
```


### determinant

<a id="entry-presentation_swift_linear_algebra_capability_algebra_determinant_api_matrix_determinant"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_determinant.9b8b65dc12bf"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func determinant() -> UniffiExpression
```


Fraction-free (Berkowitz/Bareiss) determinant of a square matrix.

### trace

<a id="entry-presentation_swift_linear_algebra_capability_algebra_trace_api_matrix_trace"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_trace.a6f899cca95a"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func trace() -> UniffiExpression
```


### characteristic_polynomial

\(\det(\lambda I - M)\) as a polynomial in the named variable.

### minimal_polynomial

The monic minimal polynomial over the rationals. The matrix must have rational entries.

### eigenvalues

<a id="entry-presentation_swift_linear_algebra_capability_algebra_eigenvalues_api_matrix_eigenvalues"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_eigenvalues.5830e0c56f1e"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func eigenvalues() -> [UniffiExpression]
```


Eigenvalues with multiplicity, via the characteristic polynomial and the
root finder; eigenvalues the root finder cannot close remain as
exact first-class `polynomial_root` values.

### eigenvectors

<a id="entry-presentation_swift_linear_algebra_capability_algebra_eigenvectors_api_matrix_operations_matrix_eigenvectors"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_eigenvectors.7523a76aa65b"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func eigenvectors() -> [UniffiEigenpair]
```


For each eigenvalue, a basis of its eigenspace as column matrices.
**Notes:** WASM returns `Eigenpair` objects with `eigenvalue`/`vectors`
getters.

### eigenpair (WASM result class)

### eigenvalue

### vectors

<a id="entry-presentation_swift_linear_algebra_capability_algebra_vectors_api_results_eigenpair_vectors"></a>
<a id="placement-placement.swift.swift_object.uniffieigenpair_vectors.399dbcb28830"></a>
<p class="symi-entry-owner">UniffiEigenpair method</p>

```swift signature
func vectors() -> [UniffiMatrix]
```


### inverse

<a id="entry-presentation_swift_linear_algebra_capability_algebra_inverse_api_matrix_inverse"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_inverse.12b233d9d355"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func inverse() -> UniffiMatrix
```


Inverse via the adjugate; raises on singular input.

### rank

<a id="entry-presentation_swift_linear_algebra_capability_algebra_rank_api_matrix_rank"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_rank.ed86dd01e5b0"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func rank() -> UInt64
```


Rank via Bareiss fraction-free elimination.

### row_reduce

<a id="entry-presentation_swift_linear_algebra_capability_algebra_row_reduce_api_matrix_row_reduce"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_rowreduce.a7d394721331"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func rowReduce() -> UniffiMatrix
```


Bareiss row-reduced form (fraction-free; pivots remain on the diagonal).

### nullspace_basis

<a id="entry-presentation_swift_linear_algebra_capability_algebra_nullspace_basis_api_matrix_operations_matrix_nullspace_basis"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_nullspacebasis.6bc67090ce35"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func nullspaceBasis() -> [UniffiMatrix]
```


A basis of the kernel, as column matrices; empty list for full column rank.

### adjugate

<a id="entry-presentation_swift_linear_algebra_capability_algebra_adjugate_api_matrix_adjugate"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_adjugate.145c526eced5"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func adjugate() -> UniffiMatrix
```


The classical adjoint (transpose of the cofactor matrix); satisfies
\(M\operatorname{adj}(M) = \det(M) I\).

### cofactor_matrix

<a id="entry-presentation_swift_linear_algebra_capability_algebra_cofactor_matrix_api_matrix_cofactor_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_cofactormatrix.8edcab610a75"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func cofactorMatrix() -> UniffiMatrix
```


### lower_upper_decomposition

<a id="entry-presentation_swift_linear_algebra_capability_algebra_lower_upper_decomposition_api_matrix_operations_matrix_lower_upper_decomposition"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_lowerupperdecomposition.8013a4fff3b2"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func lowerUpperDecomposition() -> UniffiMatrixMatrixMatrixTuple
```


Partial-pivoting LU decomposition returned as
`(permutation, lower, upper)` with \(\operatorname{permutation} M = \operatorname{lower}\,\operatorname{upper}\). The
permutation matrix is reconstructed from the pivoting row-swap record.
**Notes:** WASM returns a 3-element array `[permutation, lower, upper]`.

## Example


## Additional API

### characteristic_polynomial

<a id="entry-presentation_swift_linear_algebra_capability_algebra_characteristic_polynomial_api_matrix_operations_matrix_characteristic_polynomial"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_characteristicpolynomial.4fe0c9f2b400"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func characteristicPolynomial(variable: String) -> UniffiExpression
```

\(\det(\lambda I - M)\) as a polynomial in the named variable.

### characteristic_polynomial

<a id="entry-presentation_swift_linear_algebra_capability_algebra_characteristic_polynomial_api_results_rationalcanonicalform_characteristic_polynomial"></a>
<a id="placement-placement.swift.swift_object.uniffirationalcanonicalform_characteristicpolynomial.c12f82010f35"></a>
<p class="symi-entry-owner">UniffiRationalCanonicalForm method</p>

```swift signature
func characteristicPolynomial() -> UniffiExpression
```

\(\det(\lambda I - M)\) as a polynomial in the named variable.

### eigenvalue

<a id="entry-presentation_swift_linear_algebra_capability_algebra_eigenvalue_api_results_eigenpair_eigenvalue"></a>
<a id="placement-placement.swift.swift_object.uniffieigenpair_eigenvalue.213006073e3e"></a>
<p class="symi-entry-owner">UniffiEigenpair method</p>

```swift signature
func eigenvalue() -> UniffiExpression
```

The eigenvalue of the pair.

### eigenvalue

<a id="entry-presentation_swift_linear_algebra_capability_algebra_eigenvalue_api_results_jordanblock_eigenvalue"></a>
<a id="placement-placement.swift.swift_object.uniffijordanblock_eigenvalue.50b40ad7d71e"></a>
<p class="symi-entry-owner">UniffiJordanBlock method</p>

```swift signature
func eigenvalue() -> UniffiExpression
```

The eigenvalue this Jordan block belongs to.

### minimal_polynomial

<a id="entry-presentation_swift_linear_algebra_capability_algebra_minimal_polynomial_api_matrix_operations_matrix_minimal_polynomial"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_minimalpolynomial.b3f8d9c350e5"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func minimalPolynomial(variable: String) -> UniffiExpression
```

The monic minimal polynomial over the rationals. The matrix must have rational entries.

### minimal_polynomial

<a id="entry-presentation_swift_linear_algebra_capability_algebra_minimal_polynomial_api_results_rationalcanonicalform_minimal_polynomial"></a>
<a id="placement-placement.swift.swift_object.uniffirationalcanonicalform_minimalpolynomial.4ae4807d758a"></a>
<p class="symi-entry-owner">UniffiRationalCanonicalForm method</p>

```swift signature
func minimalPolynomial() -> UniffiExpression
```

The monic minimal polynomial over the rationals. The matrix must have rational entries.

### rank

<a id="entry-presentation_swift_linear_algebra_capability_algebra_rank_api_results_hermitenormalformdecomposition_rank"></a>
<a id="placement-placement.swift.swift_object.uniffihermitenormalformdecomposition_rank.11ddb031a40e"></a>
<p class="symi-entry-owner">UniffiHermiteNormalFormDecomposition method</p>

```swift signature
func rank() -> UInt64
```

Rank via Bareiss fraction-free elimination.

### rank

<a id="entry-presentation_swift_linear_algebra_capability_algebra_rank_api_results_smithnormalformdecomposition_rank"></a>
<a id="placement-placement.swift.swift_object.uniffismithnormalformdecomposition_rank.c8c1faa7c22b"></a>
<p class="symi-entry-owner">UniffiSmithNormalFormDecomposition method</p>

```swift signature
func rank() -> UInt64
```

Rank via Bareiss fraction-free elimination.

