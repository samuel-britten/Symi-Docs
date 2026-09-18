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

<a id="placement-placement.swift.swift_object.uniffimatrix_scalarmultiply.bc5b1732bab2"></a>
`UniffiMatrix.scalarMultiply(scalar: UniffiExpression) -> UniffiMatrix`


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

<a id="placement-placement.swift.swift_object.uniffimatrix_transpose.8ea115545f64"></a>
`UniffiMatrix.transpose() -> UniffiMatrix`


### determinant

<a id="placement-placement.swift.swift_object.uniffimatrix_determinant.9b8b65dc12bf"></a>
`UniffiMatrix.determinant() -> UniffiExpression`


Fraction-free (Berkowitz/Bareiss) determinant of a square matrix.

### trace

<a id="placement-placement.swift.swift_object.uniffimatrix_trace.a6f899cca95a"></a>
`UniffiMatrix.trace() -> UniffiExpression`


### characteristic_polynomial

<a id="placement-placement.swift.swift_object.uniffimatrix_characteristicpolynomial.4fe0c9f2b400"></a>
`UniffiMatrix.characteristicPolynomial(variable: String) -> UniffiExpression`

<a id="placement-placement.swift.swift_object.uniffirationalcanonicalform_characteristicpolynomial.c12f82010f35"></a>
`UniffiRationalCanonicalForm.characteristicPolynomial() -> UniffiExpression`


\(\det(\lambda I - M)\) as a polynomial in the named variable.

### minimal_polynomial

<a id="placement-placement.swift.swift_object.uniffimatrix_minimalpolynomial.b3f8d9c350e5"></a>
`UniffiMatrix.minimalPolynomial(variable: String) -> UniffiExpression`

<a id="placement-placement.swift.swift_object.uniffirationalcanonicalform_minimalpolynomial.4ae4807d758a"></a>
`UniffiRationalCanonicalForm.minimalPolynomial() -> UniffiExpression`


The monic minimal polynomial over the rationals. The matrix must have rational entries.

### eigenvalues

<a id="placement-placement.swift.swift_object.uniffimatrix_eigenvalues.5830e0c56f1e"></a>
`UniffiMatrix.eigenvalues() -> [UniffiExpression]`


Eigenvalues with multiplicity, via the characteristic polynomial and the
root finder; eigenvalues the root finder cannot close remain as
exact first-class `polynomial_root` values.

### eigenvectors

<a id="placement-placement.swift.swift_object.uniffimatrix_eigenvectors.7523a76aa65b"></a>
`UniffiMatrix.eigenvectors() -> [UniffiEigenpair]`


For each eigenvalue, a basis of its eigenspace as column matrices.
**Notes:** WASM returns `Eigenpair` objects with `eigenvalue`/`vectors`
getters.

### eigenpair (WASM result class)

### eigenvalue

<a id="placement-placement.swift.swift_object.uniffieigenpair_eigenvalue.213006073e3e"></a>
`UniffiEigenpair.eigenvalue() -> UniffiExpression`

<a id="placement-placement.swift.swift_object.uniffijordanblock_eigenvalue.50b40ad7d71e"></a>
`UniffiJordanBlock.eigenvalue() -> UniffiExpression`


### vectors

<a id="placement-placement.swift.swift_object.uniffieigenpair_vectors.399dbcb28830"></a>
`UniffiEigenpair.vectors() -> [UniffiMatrix]`


### inverse

<a id="placement-placement.swift.swift_object.uniffimatrix_inverse.12b233d9d355"></a>
`UniffiMatrix.inverse() -> UniffiMatrix`


Inverse via the adjugate; raises on singular input.

### rank

<a id="placement-placement.swift.swift_object.uniffihermitenormalformdecomposition_rank.11ddb031a40e"></a>
`UniffiHermiteNormalFormDecomposition.rank() -> UInt64`

<a id="placement-placement.swift.swift_object.uniffimatrix_rank.ed86dd01e5b0"></a>
`UniffiMatrix.rank() -> UInt64`

<a id="placement-placement.swift.swift_object.uniffismithnormalformdecomposition_rank.c8c1faa7c22b"></a>
`UniffiSmithNormalFormDecomposition.rank() -> UInt64`


Rank via Bareiss fraction-free elimination.

### row_reduce

<a id="placement-placement.swift.swift_object.uniffimatrix_rowreduce.a7d394721331"></a>
`UniffiMatrix.rowReduce() -> UniffiMatrix`


Bareiss row-reduced form (fraction-free; pivots remain on the diagonal).

### nullspace_basis

<a id="placement-placement.swift.swift_object.uniffimatrix_nullspacebasis.6bc67090ce35"></a>
`UniffiMatrix.nullspaceBasis() -> [UniffiMatrix]`


A basis of the kernel, as column matrices; empty list for full column rank.

### adjugate

<a id="placement-placement.swift.swift_object.uniffimatrix_adjugate.145c526eced5"></a>
`UniffiMatrix.adjugate() -> UniffiMatrix`


The classical adjoint (transpose of the cofactor matrix); satisfies
\(M\operatorname{adj}(M) = \det(M) I\).

### cofactor_matrix

<a id="placement-placement.swift.swift_object.uniffimatrix_cofactormatrix.8edcab610a75"></a>
`UniffiMatrix.cofactorMatrix() -> UniffiMatrix`


### lower_upper_decomposition

<a id="placement-placement.swift.swift_object.uniffimatrix_lowerupperdecomposition.8013a4fff3b2"></a>
`UniffiMatrix.lowerUpperDecomposition() -> UniffiMatrixMatrixMatrixTuple`


Partial-pivoting LU decomposition returned as
`(permutation, lower, upper)` with \(\operatorname{permutation} M = \operatorname{lower}\,\operatorname{upper}\). The
permutation matrix is reconstructed from the pivoting row-swap record.
**Notes:** WASM returns a 3-element array `[permutation, lower, upper]`.

## Example

