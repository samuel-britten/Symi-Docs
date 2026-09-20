# Linear algebra

Matrix arithmetic and linear algebra operations are exact symbolic operations.

## Arithmetic

Python additionally overloads `+`, `-`, `*` (matrix product) over these
named methods.

### add

<a id="entry-presentation_swift_api_matrix_add"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_add.613832f65527"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func add(other: UniffiMatrix) -> UniffiMatrix
```

Entrywise sum of two matrices of the same shape.

### subtract

<a id="entry-presentation_swift_api_matrix_subtract"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_subtract.a3819adac83e"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func subtract(other: UniffiMatrix) -> UniffiMatrix
```

Entrywise difference of two matrices of the same shape.

### multiply

Matrix product; inner dimensions must agree.

<a id="entry-presentation_swift_api_matrix_multiply"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_multiply.8ba400c3e3b4"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func multiply(other: UniffiMatrix) -> UniffiMatrix
```

Matrix product; inner dimensions must agree.

### scalar_multiply

<a id="entry-presentation_swift_api_matrix_scalar_multiply"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_scalarmultiply.bc5b1732bab2"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func scalarMultiply(scalar: UniffiExpression) -> UniffiMatrix
```

Scale every entry by `scalar`.

## Matrix assumptions

Matrix predicates are available as methods on `Matrix`, as constructors on an
explicit `Context`, and as default-context module functions in Python and WASM.
Native Rust uses the corresponding `Session` methods. Query methods return
`True`/`False`/`None` (or the native `TruthValue`), preserving unknown when
the exact symbolic engine cannot decide.

### matrix_shape

<a id="entry-presentation_swift_api_session_matrix_shape"></a>
<a id="placement-placement.swift.swift_object.uniffisession_matrixshape.5cf7d0777af7"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func matrixShape(
    subject: UniffiMatrix,
    rows: UInt64,
    columns: UInt64,
) -> UniffiAssumptionProposition
```

Assert or query an exact positive row and column count.

### square_matrix

<a id="entry-presentation_swift_api_session_square_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffisession_squarematrix.1f0447943ee4"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func squareMatrix(subject: UniffiMatrix) -> UniffiAssumptionProposition
```

Assert or query that the matrix has equal row and column counts.

### zero_matrix
Assert or query that all entries are zero.

### identity_matrix
Assert or query the identity-matrix structure.

### diagonal_matrix
Assert or query diagonal structure.

### upper_triangular_matrix

<a id="entry-presentation_swift_api_session_upper_triangular_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffisession_uppertriangularmatrix.66284c751119"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func upperTriangularMatrix(subject: UniffiMatrix) -> UniffiAssumptionProposition
```

Assert or query upper-triangular structure.

### lower_triangular_matrix

<a id="entry-presentation_swift_api_session_lower_triangular_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffisession_lowertriangularmatrix.cc9c939311b8"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func lowerTriangularMatrix(subject: UniffiMatrix) -> UniffiAssumptionProposition
```

Assert or query lower-triangular structure.

### symmetric_matrix

<a id="entry-presentation_swift_api_session_symmetric_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffisession_symmetricmatrix.76919b542c94"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func symmetricMatrix(subject: UniffiMatrix) -> UniffiAssumptionProposition
```

Assert or query equality with the transpose.

### hermitian_matrix

<a id="entry-presentation_swift_api_session_hermitian_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffisession_hermitianmatrix.858453b2be51"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func hermitianMatrix(subject: UniffiMatrix) -> UniffiAssumptionProposition
```

Assert or query equality with the conjugate transpose.

### orthogonal_matrix

<a id="entry-presentation_swift_api_session_orthogonal_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffisession_orthogonalmatrix.9693c17657e1"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func orthogonalMatrix(subject: UniffiMatrix) -> UniffiAssumptionProposition
```

Assert or query the real orthogonality condition.

### unitary_matrix

<a id="entry-presentation_swift_api_session_unitary_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffisession_unitarymatrix.9bbcc7068ba8"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func unitaryMatrix(subject: UniffiMatrix) -> UniffiAssumptionProposition
```

Assert or query the unitary condition.

### normal_matrix

<a id="entry-presentation_swift_api_session_normal_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffisession_normalmatrix.2c35c2ffc9ab"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func normalMatrix(subject: UniffiMatrix) -> UniffiAssumptionProposition
```

Assert or query commutation with the conjugate transpose.

### full_rank_matrix

<a id="entry-presentation_swift_api_session_full_rank_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffisession_fullrankmatrix.55c31ae64b31"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func fullRankMatrix(subject: UniffiMatrix) -> UniffiAssumptionProposition
```

Assert or query full rank.

### invertible_matrix

<a id="entry-presentation_swift_api_session_invertible_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffisession_invertiblematrix.fac62ff7dabd"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func invertibleMatrix(subject: UniffiMatrix) -> UniffiAssumptionProposition
```

Assert or query square invertibility.

### singular_matrix

<a id="entry-presentation_swift_api_session_singular_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffisession_singularmatrix.1ec8021176dc"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func singularMatrix(subject: UniffiMatrix) -> UniffiAssumptionProposition
```

Assert or query square singularity.

### integer_entries

<a id="entry-presentation_swift_api_session_integer_entries"></a>
<a id="placement-placement.swift.swift_object.uniffisession_integerentries.7c1e9edc5402"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func integerEntries(subject: UniffiMatrix) -> UniffiAssumptionProposition
```

Assert or query integer entries.

### real_entries

<a id="entry-presentation_swift_api_session_real_entries"></a>
<a id="placement-placement.swift.swift_object.uniffisession_realentries.490b89e3be20"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func realEntries(subject: UniffiMatrix) -> UniffiAssumptionProposition
```

Assert or query real entries.

### complex_entries

<a id="entry-presentation_swift_api_session_complex_entries"></a>
<a id="placement-placement.swift.swift_object.uniffisession_complexentries.99b7925b679e"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func complexEntries(subject: UniffiMatrix) -> UniffiAssumptionProposition
```

Assert or query finite complex entries.

### positive_definite_matrix

<a id="entry-presentation_swift_api_session_positive_definite_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffisession_positivedefinitematrix.ab2c7a4e0b9f"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func positiveDefiniteMatrix(subject: UniffiMatrix) -> UniffiAssumptionProposition
```

Assert or query exact positive definiteness.

### positive_semidefinite_matrix

<a id="entry-presentation_swift_api_session_positive_semidefinite_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffisession_positivesemidefinitematrix.8d5eff06726d"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func positiveSemidefiniteMatrix(subject: UniffiMatrix) -> UniffiAssumptionProposition
```

Assert or query exact positive semidefiniteness.

### transpose

<a id="entry-presentation_swift_api_matrix_transpose"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_transpose.8ea115545f64"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func transpose() -> UniffiMatrix
```

The transpose, with rows and columns exchanged.

### determinant

Fraction-free (Berkowitz/Bareiss) determinant of a square matrix.

<a id="entry-presentation_swift_api_matrix_determinant"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_determinant.9b8b65dc12bf"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func determinant() -> UniffiExpression
```

Fraction-free (Berkowitz/Bareiss) determinant of a square matrix.

### trace

<a id="entry-presentation_swift_api_matrix_trace"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_trace.a6f899cca95a"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func trace() -> UniffiExpression
```

Sum of the diagonal entries of a square matrix.

### characteristic_polynomial

<a id="entry-presentation_swift_api_matrix_characteristic_polynomial"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_characteristicpolynomial.4fe0c9f2b400"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func characteristicPolynomial(variable: String) -> UniffiExpression
```


\(\det(\lambda I - M)\) as a polynomial in the named variable.

### minimal_polynomial

<a id="entry-presentation_swift_api_matrix_minimal_polynomial"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_minimalpolynomial.b3f8d9c350e5"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func minimalPolynomial(variable: String) -> UniffiExpression
```


The monic minimal polynomial over the rationals. The matrix must have rational entries.

### eigenvalues

Eigenvalues with multiplicity, via the characteristic polynomial and the
root finder; eigenvalues the root finder cannot close remain as
exact first-class `polynomial_root` values.

<a id="entry-presentation_swift_api_matrix_eigenvalues"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_eigenvalues.5830e0c56f1e"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func eigenvalues() -> [UniffiExpression]
```

Eigenvalues with multiplicity, via the characteristic polynomial and the root finder; eigenvalues the root finder cannot close remain as exact first-class `polynomial_root` values.

### eigenvectors

For each eigenvalue, a basis of its eigenspace as column matrices.
**Notes:** WASM returns `Eigenpair` objects with `eigenvalue`/`vectors`
getters.

<a id="entry-presentation_swift_api_matrix_eigenvectors"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_eigenvectors.7523a76aa65b"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func eigenvectors() -> [UniffiEigenpair]
```

For each eigenvalue, a basis of its eigenspace as column matrices. Notes: WASM returns `eigenpair` objects with `eigenvalue`/`vectors` getters.

### eigenpair (WASM result class)

### eigenvalue

<a id="entry-presentation_swift_api_eigenpair_eigenvalue"></a>
<a id="placement-placement.swift.swift_object.uniffieigenpair_eigenvalue.213006073e3e"></a>
<p class="symi-entry-owner">UniffiEigenpair method</p>

```swift signature
func eigenvalue() -> UniffiExpression
```


### vectors

<a id="entry-presentation_swift_api_eigenpair_vectors"></a>
<a id="placement-placement.swift.swift_object.uniffieigenpair_vectors.399dbcb28830"></a>
<p class="symi-entry-owner">UniffiEigenpair method</p>

```swift signature
func vectors() -> [UniffiMatrix]
```

A basis of the eigenspace, as column matrices.

### inverse

Inverse via the adjugate; raises on singular input.

<a id="entry-presentation_swift_api_matrix_inverse"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_inverse.12b233d9d355"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func inverse() -> UniffiMatrix
```

Inverse via the adjugate; raises on singular input.

### rank

<a id="entry-presentation_swift_api_matrix_rank"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_rank.ed86dd01e5b0"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func rank() -> UInt64
```


Rank via Bareiss fraction-free elimination.

### row_reduce

Bareiss row-reduced form (fraction-free; pivots remain on the diagonal).

<a id="entry-presentation_swift_api_matrix_row_reduce"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_rowreduce.a7d394721331"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func rowReduce() -> UniffiMatrix
```

Bareiss row-reduced form (fraction-free; pivots remain on the diagonal).

### nullspace_basis

A basis of the kernel, as column matrices; empty list for full column rank.

<a id="entry-presentation_swift_api_matrix_nullspace_basis"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_nullspacebasis.6bc67090ce35"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func nullspaceBasis() -> [UniffiMatrix]
```

A basis of the kernel, as column matrices; empty list for full column rank.

### adjugate

The classical adjoint (transpose of the cofactor matrix); satisfies
\(M\operatorname{adj}(M) = \det(M) I\).

<a id="entry-presentation_swift_api_matrix_adjugate"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_adjugate.145c526eced5"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func adjugate() -> UniffiMatrix
```

The classical adjoint (transpose of the cofactor matrix); satisfies \(M\operatorname{adj}(M) = \det(M) I\).

### cofactor_matrix

<a id="entry-presentation_swift_api_matrix_cofactor_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_cofactormatrix.8edcab610a75"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func cofactorMatrix() -> UniffiMatrix
```

The matrix of cofactors, whose transpose is the adjugate.

### lower_upper_decomposition

Partial-pivoting LU decomposition returned as
`(permutation, lower, upper)` with \(\operatorname{permutation} M = \operatorname{lower}\,\operatorname{upper}\). The
permutation matrix is reconstructed from the pivoting row-swap record.
**Notes:** WASM returns a 3-element array `[permutation, lower, upper]`.

<a id="entry-presentation_swift_api_matrix_lower_upper_decomposition"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_lowerupperdecomposition.8013a4fff3b2"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func lowerUpperDecomposition() -> UniffiMatrixMatrixMatrixTuple
```

Partial-pivoting LU decomposition returned as `(permutation, lower, upper)` with \(\operatorname{permutation} M = \operatorname{lower}\,\operatorname{upper}\).

## Example


## Additional API

### IntegerCokernelData

#### IntegerCokernelData.free_rank

<a id="entry-presentation_swift_api_integercokerneldata_free_rank"></a>
<a id="placement-placement.swift.swift_object.uniffiintegercokerneldata_freerank.55f161ee19c3"></a>
<p class="symi-entry-owner">UniffiIntegerCokernelData method</p>

```swift signature
func freeRank() -> UInt64
```

Rank of the free part of the cokernel.

#### IntegerCokernelData.torsion_invariant_factors

<a id="entry-presentation_swift_api_integercokerneldata_torsion_invariant_factors"></a>
<a id="placement-placement.swift.swift_object.uniffiintegercokerneldata_torsioninvariantfactors.5ca19d04444a"></a>
<p class="symi-entry-owner">UniffiIntegerCokernelData method</p>

```swift signature
func torsionInvariantFactors() -> [UniffiExpression]
```

The invariant factors of the torsion part of the cokernel.

### Matrix

#### Matrix.execute

<a id="entry-presentation_swift_api_matrix_execute"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_execute.df9725c5afee"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func execute() -> UniffiMatrix
```

Re-dispatch every unevaluated node (integral, derivative, summation, transform, ODE/recurrence placeholder) in the expression; useful after substitution has changed the inputs.

#### Matrix.has_complex_entries

<a id="entry-presentation_swift_api_matrix_has_complex_entries"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_hascomplexentries.0eade1c68cde"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func hasComplexEntries() -> UniffiTruthValue
```

Query whether every entry is finite complex.

#### Matrix.has_integer_entries

<a id="entry-presentation_swift_api_matrix_has_integer_entries"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_hasintegerentries.a6abde96fe2f"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func hasIntegerEntries() -> UniffiTruthValue
```

Query whether every entry is an integer.

#### Matrix.has_real_entries

<a id="entry-presentation_swift_api_matrix_has_real_entries"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_hasrealentries.2454112d2884"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func hasRealEntries() -> UniffiTruthValue
```

Query whether every entry is real.

#### Matrix.is_diagonal_matrix

<a id="entry-presentation_swift_api_matrix_is_diagonal_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_isdiagonalmatrix.ea18d09ee5bc"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isDiagonalMatrix() -> UniffiTruthValue
```

Query whether this matrix is diagonal.

#### Matrix.is_equality

<a id="entry-presentation_swift_api_matrix_is_equality"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_isequality.85c001b53f7d"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isEquality() -> Bool
```

Always false: a matrix is never an `equal` relation node.

#### Matrix.is_finite_set

<a id="entry-presentation_swift_api_matrix_is_finite_set"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_isfiniteset.0807f84c62b6"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isFiniteSet() -> Bool
```

Always false: a matrix is never a finite set.

#### Matrix.is_full_rank_matrix

<a id="entry-presentation_swift_api_matrix_is_full_rank_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_isfullrankmatrix.5a9d9beef2f9"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isFullRankMatrix() -> UniffiTruthValue
```

Query whether this matrix has full rank.

#### Matrix.is_hermitian_matrix

<a id="entry-presentation_swift_api_matrix_is_hermitian_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_ishermitianmatrix.8462cf6ea34d"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isHermitianMatrix() -> UniffiTruthValue
```

Query whether this matrix is Hermitian.

#### Matrix.is_identity_matrix

<a id="entry-presentation_swift_api_matrix_is_identity_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_isidentitymatrix.903693a73d88"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isIdentityMatrix() -> UniffiTruthValue
```

Query whether this matrix is the identity matrix.

#### Matrix.is_image_set

<a id="entry-presentation_swift_api_matrix_is_image_set"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_isimageset.4b16afb2638e"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isImageSet() -> Bool
```

Always false: a matrix is never an image set.

#### Matrix.is_integral

<a id="entry-presentation_swift_api_matrix_is_integral"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_isintegral.67259d6cc3c3"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isIntegral() -> Bool
```

Always false: a matrix is never an unevaluated integral node.

#### Matrix.is_invertible_matrix

<a id="entry-presentation_swift_api_matrix_is_invertible_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_isinvertiblematrix.d1b4453361d0"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isInvertibleMatrix() -> UniffiTruthValue
```

Query whether this matrix is invertible.

#### Matrix.is_matrix

<a id="entry-presentation_swift_api_matrix_is_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_ismatrix.d12275ab42be"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isMatrix() -> Bool
```

Always `False` on expressions and `True` on `matrix` objects, so mixed result streams can be discriminated.

#### Matrix.is_normal_matrix

<a id="entry-presentation_swift_api_matrix_is_normal_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_isnormalmatrix.9c02bdab42e7"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isNormalMatrix() -> UniffiTruthValue
```

Query whether this matrix is normal.

#### Matrix.is_orthogonal_matrix

<a id="entry-presentation_swift_api_matrix_is_orthogonal_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_isorthogonalmatrix.1d4c8b67cd16"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isOrthogonalMatrix() -> UniffiTruthValue
```

Query whether this matrix is orthogonal.

#### Matrix.is_positive

<a id="entry-presentation_swift_api_matrix_is_positive"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_ispositive.c44c5cbbbbbf"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isPositive() -> Bool?
```

Always `None`: positivity is a property of the entries, not of the matrix.

#### Matrix.is_positive_definite_matrix

<a id="entry-presentation_swift_api_matrix_is_positive_definite_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_ispositivedefinitematrix.bcbe40ae88c7"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isPositiveDefiniteMatrix() -> UniffiTruthValue
```

Query whether this matrix is positive definite.

#### Matrix.is_positive_semidefinite_matrix

<a id="entry-presentation_swift_api_matrix_is_positive_semidefinite_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_ispositivesemidefinitematrix.cd1bbc63a9b2"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isPositiveSemidefiniteMatrix() -> UniffiTruthValue
```

Query whether this matrix is positive semidefinite.

#### Matrix.is_real

<a id="entry-presentation_swift_api_matrix_is_real"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_isreal.228c4dfae781"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isReal() -> Bool?
```

Always `None`: realness is a property of the entries, not of the matrix.

#### Matrix.is_singular_matrix

<a id="entry-presentation_swift_api_matrix_is_singular_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_issingularmatrix.a0a49c18a476"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isSingularMatrix() -> UniffiTruthValue
```

Query whether this matrix is singular.

#### Matrix.is_square

<a id="entry-presentation_swift_api_matrix_is_square"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_issquare.2d76800f71bb"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isSquare() -> UniffiTruthValue
```

Query whether this matrix is square.

#### Matrix.is_stale

<a id="entry-presentation_swift_api_matrix_is_stale"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_isstale.53cba65746d3"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isStale() -> Bool
```

Reports whether resetting the owning context invalidated the expression. All other operations reject a stale receiver with an actionable error.

#### Matrix.is_symmetric_matrix

<a id="entry-presentation_swift_api_matrix_is_symmetric_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_issymmetricmatrix.271072821211"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isSymmetricMatrix() -> UniffiTruthValue
```

Query whether this matrix is symmetric.

#### Matrix.is_union

<a id="entry-presentation_swift_api_matrix_is_union"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_isunion.4e9a812714cc"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isUnion() -> Bool
```

Always false: a matrix is never a union of sets.

#### Matrix.is_unitary_matrix

<a id="entry-presentation_swift_api_matrix_is_unitary_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_isunitarymatrix.6b8f914e2c6f"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isUnitaryMatrix() -> UniffiTruthValue
```

Query whether this matrix is unitary.

#### Matrix.is_zero_matrix

<a id="entry-presentation_swift_api_matrix_is_zero_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_iszeromatrix.7910f4f523cb"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isZeroMatrix() -> UniffiTruthValue
```

Query whether this matrix is the zero matrix.

