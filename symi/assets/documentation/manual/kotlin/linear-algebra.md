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

<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_scalarmultiply.d75b11c9100d"></a>
`UniffiMatrix.scalarMultiply(scalar: UniffiExpression): UniffiMatrix`


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

<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_transpose.5b4535678fda"></a>
`UniffiMatrix.transpose(): UniffiMatrix`


### determinant

<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_determinant.ca2b3af014cb"></a>
`UniffiMatrix.determinant(): UniffiExpression`


Fraction-free (Berkowitz/Bareiss) determinant of a square matrix.

### trace

<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_trace.18eb50506d87"></a>
`UniffiMatrix.trace(): UniffiExpression`


### characteristic_polynomial

<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_characteristicpolynomial.f41c2d1c118c"></a>
`UniffiMatrix.characteristicPolynomial(variable: kotlin.String): UniffiExpression`

<a id="placement-placement.kotlin.kotlin_object.uniffirationalcanonicalform_characteristicpolynomial.9d3983183ffc"></a>
`UniffiRationalCanonicalForm.characteristicPolynomial(): UniffiExpression`


\(\det(\lambda I - M)\) as a polynomial in the named variable.

### minimal_polynomial

<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_minimalpolynomial.ad76bb05f7e5"></a>
`UniffiMatrix.minimalPolynomial(variable: kotlin.String): UniffiExpression`

<a id="placement-placement.kotlin.kotlin_object.uniffirationalcanonicalform_minimalpolynomial.2fc03c27e348"></a>
`UniffiRationalCanonicalForm.minimalPolynomial(): UniffiExpression`


The monic minimal polynomial over the rationals. The matrix must have rational entries.

### eigenvalues

<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_eigenvalues.a1bc8d917d77"></a>
`UniffiMatrix.eigenvalues(): List<UniffiExpression>`


Eigenvalues with multiplicity, via the characteristic polynomial and the
root finder; eigenvalues the root finder cannot close remain as
exact first-class `polynomial_root` values.

### eigenvectors

<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_eigenvectors.dbb1b4946bba"></a>
`UniffiMatrix.eigenvectors(): List<UniffiEigenpair>`


For each eigenvalue, a basis of its eigenspace as column matrices.
**Notes:** WASM returns `Eigenpair` objects with `eigenvalue`/`vectors`
getters.

### eigenpair (WASM result class)

### eigenvalue

<a id="placement-placement.kotlin.kotlin_object.uniffieigenpair_eigenvalue.c1c10d53ea0b"></a>
`UniffiEigenpair.eigenvalue(): UniffiExpression`

<a id="placement-placement.kotlin.kotlin_object.uniffijordanblock_eigenvalue.daf3faecb489"></a>
`UniffiJordanBlock.eigenvalue(): UniffiExpression`


### vectors

<a id="placement-placement.kotlin.kotlin_object.uniffieigenpair_vectors.5fdde444c7d4"></a>
`UniffiEigenpair.vectors(): List<UniffiMatrix>`


### inverse

<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_inverse.ee74ca3b5f51"></a>
`UniffiMatrix.inverse(): UniffiMatrix`


Inverse via the adjugate; raises on singular input.

### rank

<a id="placement-placement.kotlin.kotlin_object.uniffihermitenormalformdecomposition_rank.4699573d3177"></a>
`UniffiHermiteNormalFormDecomposition.rank(): kotlin.ULong`

<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_rank.db4ccf3dadbf"></a>
`UniffiMatrix.rank(): kotlin.ULong`

<a id="placement-placement.kotlin.kotlin_object.uniffismithnormalformdecomposition_rank.9cd28780bbf1"></a>
`UniffiSmithNormalFormDecomposition.rank(): kotlin.ULong`


Rank via Bareiss fraction-free elimination.

### row_reduce

<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_rowreduce.1e80a96b1dca"></a>
`UniffiMatrix.rowReduce(): UniffiMatrix`


Bareiss row-reduced form (fraction-free; pivots remain on the diagonal).

### nullspace_basis

<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_nullspacebasis.e6ee6b35aa92"></a>
`UniffiMatrix.nullspaceBasis(): List<UniffiMatrix>`


A basis of the kernel, as column matrices; empty list for full column rank.

### adjugate

<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_adjugate.20d5ac2569c1"></a>
`UniffiMatrix.adjugate(): UniffiMatrix`


The classical adjoint (transpose of the cofactor matrix); satisfies
\(M\operatorname{adj}(M) = \det(M) I\).

### cofactor_matrix

<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_cofactormatrix.bf542ff8cf8c"></a>
`UniffiMatrix.cofactorMatrix(): UniffiMatrix`


### lower_upper_decomposition

<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_lowerupperdecomposition.9dc8d2c3fb9f"></a>
`UniffiMatrix.lowerUpperDecomposition(): UniffiMatrixMatrixMatrixTuple`


Partial-pivoting LU decomposition returned as
`(permutation, lower, upper)` with \(\operatorname{permutation} M = \operatorname{lower}\,\operatorname{upper}\). The
permutation matrix is reconstructed from the pivoting row-swap record.
**Notes:** WASM returns a 3-element array `[permutation, lower, upper]`.

## Example

