# Linear algebra

Matrix arithmetic and linear algebra operations are exact symbolic operations.

## Arithmetic

Python additionally overloads `+`, `-`, `*` (matrix product) over these
named methods.

### add

<a id="entry-presentation_kotlin_api_matrix_add"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_add.e9918d9e5882"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun add(other: UniffiMatrix): UniffiMatrix
```

Entrywise sum of two matrices of the same shape.

### subtract

<a id="entry-presentation_kotlin_api_matrix_subtract"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_subtract.9057cc530a0c"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun subtract(other: UniffiMatrix): UniffiMatrix
```

Entrywise difference of two matrices of the same shape.

### multiply

Matrix product; inner dimensions must agree.

<a id="entry-presentation_kotlin_api_matrix_multiply"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_multiply.228c6f858664"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun multiply(other: UniffiMatrix): UniffiMatrix
```

Matrix product; inner dimensions must agree.

### scalar_multiply

<a id="entry-presentation_kotlin_api_matrix_scalar_multiply"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_scalarmultiply.d75b11c9100d"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun scalarMultiply(scalar: UniffiExpression): UniffiMatrix
```

Scale every entry by `scalar`.

## Matrix assumptions

Matrix predicates are available as methods on `Matrix`, as constructors on an
explicit `Context`, and as default-context module functions in Python and WASM.
Native Rust uses the corresponding `Session` methods. Query methods return
`True`/`False`/`None` (or the native `TruthValue`), preserving unknown when
the exact symbolic engine cannot decide.

### matrix_shape

<a id="entry-presentation_kotlin_api_session_matrix_shape"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_matrixshape.c94e86cfc602"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun matrixShape(
    subject: UniffiMatrix,
    rows: kotlin.ULong,
    columns: kotlin.ULong,
): UniffiAssumptionProposition
```

Assert or query an exact positive row and column count.

### square_matrix

<a id="entry-presentation_kotlin_api_session_square_matrix"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_squarematrix.a4df2b5531ed"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun squareMatrix(subject: UniffiMatrix): UniffiAssumptionProposition
```

Assert or query that the matrix has equal row and column counts.

### zero_matrix
Assert or query that all entries are zero.

### identity_matrix
Assert or query the identity-matrix structure.

### diagonal_matrix
Assert or query diagonal structure.

### upper_triangular_matrix

<a id="entry-presentation_kotlin_api_session_upper_triangular_matrix"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_uppertriangularmatrix.cadbbfb1365e"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun upperTriangularMatrix(subject: UniffiMatrix): UniffiAssumptionProposition
```

Assert or query upper-triangular structure.

### lower_triangular_matrix

<a id="entry-presentation_kotlin_api_session_lower_triangular_matrix"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_lowertriangularmatrix.bc508203257f"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun lowerTriangularMatrix(subject: UniffiMatrix): UniffiAssumptionProposition
```

Assert or query lower-triangular structure.

### symmetric_matrix

<a id="entry-presentation_kotlin_api_session_symmetric_matrix"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_symmetricmatrix.997a978d221e"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun symmetricMatrix(subject: UniffiMatrix): UniffiAssumptionProposition
```

Assert or query equality with the transpose.

### hermitian_matrix

<a id="entry-presentation_kotlin_api_session_hermitian_matrix"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_hermitianmatrix.e161f2877462"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun hermitianMatrix(subject: UniffiMatrix): UniffiAssumptionProposition
```

Assert or query equality with the conjugate transpose.

### orthogonal_matrix

<a id="entry-presentation_kotlin_api_session_orthogonal_matrix"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_orthogonalmatrix.8106dc9178d6"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun orthogonalMatrix(subject: UniffiMatrix): UniffiAssumptionProposition
```

Assert or query the real orthogonality condition.

### unitary_matrix

<a id="entry-presentation_kotlin_api_session_unitary_matrix"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_unitarymatrix.0aa1e4df9fc1"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun unitaryMatrix(subject: UniffiMatrix): UniffiAssumptionProposition
```

Assert or query the unitary condition.

### normal_matrix

<a id="entry-presentation_kotlin_api_session_normal_matrix"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_normalmatrix.06e6e1e76254"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun normalMatrix(subject: UniffiMatrix): UniffiAssumptionProposition
```

Assert or query commutation with the conjugate transpose.

### full_rank_matrix

<a id="entry-presentation_kotlin_api_session_full_rank_matrix"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_fullrankmatrix.7c90405d0df0"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun fullRankMatrix(subject: UniffiMatrix): UniffiAssumptionProposition
```

Assert or query full rank.

### invertible_matrix

<a id="entry-presentation_kotlin_api_session_invertible_matrix"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_invertiblematrix.14c1a3d8463c"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun invertibleMatrix(subject: UniffiMatrix): UniffiAssumptionProposition
```

Assert or query square invertibility.

### singular_matrix

<a id="entry-presentation_kotlin_api_session_singular_matrix"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_singularmatrix.ffcf9f898aee"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun singularMatrix(subject: UniffiMatrix): UniffiAssumptionProposition
```

Assert or query square singularity.

### integer_entries

<a id="entry-presentation_kotlin_api_session_integer_entries"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_integerentries.701f4dd04462"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun integerEntries(subject: UniffiMatrix): UniffiAssumptionProposition
```

Assert or query integer entries.

### real_entries

<a id="entry-presentation_kotlin_api_session_real_entries"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_realentries.498a75b3322f"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun realEntries(subject: UniffiMatrix): UniffiAssumptionProposition
```

Assert or query real entries.

### complex_entries

<a id="entry-presentation_kotlin_api_session_complex_entries"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_complexentries.fe5c0641bf45"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun complexEntries(subject: UniffiMatrix): UniffiAssumptionProposition
```

Assert or query finite complex entries.

### positive_definite_matrix

<a id="entry-presentation_kotlin_api_session_positive_definite_matrix"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_positivedefinitematrix.2042265f2628"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun positiveDefiniteMatrix(subject: UniffiMatrix): UniffiAssumptionProposition
```

Assert or query exact positive definiteness.

### positive_semidefinite_matrix

<a id="entry-presentation_kotlin_api_session_positive_semidefinite_matrix"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_positivesemidefinitematrix.56570518213e"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun positiveSemidefiniteMatrix(subject: UniffiMatrix): UniffiAssumptionProposition
```

Assert or query exact positive semidefiniteness.

### transpose

<a id="entry-presentation_kotlin_api_matrix_transpose"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_transpose.5b4535678fda"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun transpose(): UniffiMatrix
```

The transpose, with rows and columns exchanged.

### determinant

Fraction-free (Berkowitz/Bareiss) determinant of a square matrix.

<a id="entry-presentation_kotlin_api_matrix_determinant"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_determinant.ca2b3af014cb"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun determinant(): UniffiExpression
```

Fraction-free (Berkowitz/Bareiss) determinant of a square matrix.

### trace

<a id="entry-presentation_kotlin_api_matrix_trace"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_trace.18eb50506d87"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun trace(): UniffiExpression
```

Sum of the diagonal entries of a square matrix.

### characteristic_polynomial

<a id="entry-presentation_kotlin_api_matrix_characteristic_polynomial"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_characteristicpolynomial.f41c2d1c118c"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun characteristicPolynomial(variable: kotlin.String): UniffiExpression
```


\(\det(\lambda I - M)\) as a polynomial in the named variable.

### minimal_polynomial

<a id="entry-presentation_kotlin_api_matrix_minimal_polynomial"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_minimalpolynomial.ad76bb05f7e5"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun minimalPolynomial(variable: kotlin.String): UniffiExpression
```


The monic minimal polynomial over the rationals. The matrix must have rational entries.

### eigenvalues

Eigenvalues with multiplicity, via the characteristic polynomial and the
root finder; eigenvalues the root finder cannot close remain as
exact first-class `polynomial_root` values.

<a id="entry-presentation_kotlin_api_matrix_eigenvalues"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_eigenvalues.a1bc8d917d77"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun eigenvalues(): List<UniffiExpression>
```

Eigenvalues with multiplicity, via the characteristic polynomial and the root finder; eigenvalues the root finder cannot close remain as exact first-class `polynomial_root` values.

### eigenvectors

For each eigenvalue, a basis of its eigenspace as column matrices.
**Notes:** WASM returns `Eigenpair` objects with `eigenvalue`/`vectors`
getters.

<a id="entry-presentation_kotlin_api_matrix_eigenvectors"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_eigenvectors.dbb1b4946bba"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun eigenvectors(): List<UniffiEigenpair>
```

For each eigenvalue, a basis of its eigenspace as column matrices. Notes: WASM returns `eigenpair` objects with `eigenvalue`/`vectors` getters.

### eigenpair (WASM result class)

### eigenvalue

<a id="entry-presentation_kotlin_api_eigenpair_eigenvalue"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffieigenpair_eigenvalue.c1c10d53ea0b"></a>
<p class="symi-entry-owner">UniffiEigenpair method</p>

```kotlin signature
fun eigenvalue(): UniffiExpression
```


### vectors

<a id="entry-presentation_kotlin_api_eigenpair_vectors"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffieigenpair_vectors.5fdde444c7d4"></a>
<p class="symi-entry-owner">UniffiEigenpair method</p>

```kotlin signature
fun vectors(): List<UniffiMatrix>
```

A basis of the eigenspace, as column matrices.

### inverse

Inverse via the adjugate; raises on singular input.

<a id="entry-presentation_kotlin_api_matrix_inverse"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_inverse.ee74ca3b5f51"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun inverse(): UniffiMatrix
```

Inverse via the adjugate; raises on singular input.

### rank

<a id="entry-presentation_kotlin_api_matrix_rank"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_rank.db4ccf3dadbf"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun rank(): kotlin.ULong
```


Rank via Bareiss fraction-free elimination.

### row_reduce

Bareiss row-reduced form (fraction-free; pivots remain on the diagonal).

<a id="entry-presentation_kotlin_api_matrix_row_reduce"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_rowreduce.1e80a96b1dca"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun rowReduce(): UniffiMatrix
```

Bareiss row-reduced form (fraction-free; pivots remain on the diagonal).

### nullspace_basis

A basis of the kernel, as column matrices; empty list for full column rank.

<a id="entry-presentation_kotlin_api_matrix_nullspace_basis"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_nullspacebasis.e6ee6b35aa92"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun nullspaceBasis(): List<UniffiMatrix>
```

A basis of the kernel, as column matrices; empty list for full column rank.

### adjugate

The classical adjoint (transpose of the cofactor matrix); satisfies
\(M\operatorname{adj}(M) = \det(M) I\).

<a id="entry-presentation_kotlin_api_matrix_adjugate"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_adjugate.20d5ac2569c1"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun adjugate(): UniffiMatrix
```

The classical adjoint (transpose of the cofactor matrix); satisfies \(M\operatorname{adj}(M) = \det(M) I\).

### cofactor_matrix

<a id="entry-presentation_kotlin_api_matrix_cofactor_matrix"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_cofactormatrix.bf542ff8cf8c"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun cofactorMatrix(): UniffiMatrix
```

The matrix of cofactors, whose transpose is the adjugate.

### lower_upper_decomposition

Partial-pivoting LU decomposition returned as
`(permutation, lower, upper)` with \(\operatorname{permutation} M = \operatorname{lower}\,\operatorname{upper}\). The
permutation matrix is reconstructed from the pivoting row-swap record.
**Notes:** WASM returns a 3-element array `[permutation, lower, upper]`.

<a id="entry-presentation_kotlin_api_matrix_lower_upper_decomposition"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_lowerupperdecomposition.9dc8d2c3fb9f"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun lowerUpperDecomposition(): UniffiMatrixMatrixMatrixTuple
```

Partial-pivoting LU decomposition returned as `(permutation, lower, upper)` with \(\operatorname{permutation} M = \operatorname{lower}\,\operatorname{upper}\).

## Example


## Additional API

### IntegerCokernelData

#### IntegerCokernelData.free_rank

<a id="entry-presentation_kotlin_api_integercokerneldata_free_rank"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiintegercokerneldata_freerank.c01a82194b98"></a>
<p class="symi-entry-owner">UniffiIntegerCokernelData method</p>

```kotlin signature
fun freeRank(): kotlin.ULong
```

Rank of the free part of the cokernel.

#### IntegerCokernelData.torsion_invariant_factors

<a id="entry-presentation_kotlin_api_integercokerneldata_torsion_invariant_factors"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiintegercokerneldata_torsioninvariantfactors.ab1f7afab8be"></a>
<p class="symi-entry-owner">UniffiIntegerCokernelData method</p>

```kotlin signature
fun torsionInvariantFactors(): List<UniffiExpression>
```

The invariant factors of the torsion part of the cokernel.

### Matrix

#### Matrix.execute

<a id="entry-presentation_kotlin_api_matrix_execute"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_execute.c928aef513f8"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun execute(): UniffiMatrix
```

Re-dispatch every unevaluated node (integral, derivative, summation, transform, ODE/recurrence placeholder) in the expression; useful after substitution has changed the inputs.

#### Matrix.has_complex_entries

<a id="entry-presentation_kotlin_api_matrix_has_complex_entries"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_hascomplexentries.c984660638dc"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun hasComplexEntries(): UniffiTruthValue
```

Query whether every entry is finite complex.

#### Matrix.has_integer_entries

<a id="entry-presentation_kotlin_api_matrix_has_integer_entries"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_hasintegerentries.d9873706d9da"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun hasIntegerEntries(): UniffiTruthValue
```

Query whether every entry is an integer.

#### Matrix.has_real_entries

<a id="entry-presentation_kotlin_api_matrix_has_real_entries"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_hasrealentries.a1264d659f9f"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun hasRealEntries(): UniffiTruthValue
```

Query whether every entry is real.

#### Matrix.is_diagonal_matrix

<a id="entry-presentation_kotlin_api_matrix_is_diagonal_matrix"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_isdiagonalmatrix.5f102572ea2b"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun isDiagonalMatrix(): UniffiTruthValue
```

Query whether this matrix is diagonal.

#### Matrix.is_equality

<a id="entry-presentation_kotlin_api_matrix_is_equality"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_isequality.7dbc7e6ef13b"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun isEquality(): kotlin.Boolean
```

Always false: a matrix is never an `equal` relation node.

#### Matrix.is_finite_set

<a id="entry-presentation_kotlin_api_matrix_is_finite_set"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_isfiniteset.4438f54056d3"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun isFiniteSet(): kotlin.Boolean
```

Always false: a matrix is never a finite set.

#### Matrix.is_full_rank_matrix

<a id="entry-presentation_kotlin_api_matrix_is_full_rank_matrix"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_isfullrankmatrix.c82ad44621d3"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun isFullRankMatrix(): UniffiTruthValue
```

Query whether this matrix has full rank.

#### Matrix.is_hermitian_matrix

<a id="entry-presentation_kotlin_api_matrix_is_hermitian_matrix"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_ishermitianmatrix.26e7583f27f0"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun isHermitianMatrix(): UniffiTruthValue
```

Query whether this matrix is Hermitian.

#### Matrix.is_identity_matrix

<a id="entry-presentation_kotlin_api_matrix_is_identity_matrix"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_isidentitymatrix.304acfe1e92d"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun isIdentityMatrix(): UniffiTruthValue
```

Query whether this matrix is the identity matrix.

#### Matrix.is_image_set

<a id="entry-presentation_kotlin_api_matrix_is_image_set"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_isimageset.25932c5800c3"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun isImageSet(): kotlin.Boolean
```

Always false: a matrix is never an image set.

#### Matrix.is_integral

<a id="entry-presentation_kotlin_api_matrix_is_integral"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_isintegral.4f42cc54640f"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun isIntegral(): kotlin.Boolean
```

Always false: a matrix is never an unevaluated integral node.

#### Matrix.is_invertible_matrix

<a id="entry-presentation_kotlin_api_matrix_is_invertible_matrix"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_isinvertiblematrix.e6a08c287242"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun isInvertibleMatrix(): UniffiTruthValue
```

Query whether this matrix is invertible.

#### Matrix.is_matrix

<a id="entry-presentation_kotlin_api_matrix_is_matrix"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_ismatrix.59c32a9ac155"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun isMatrix(): kotlin.Boolean
```

Always `False` on expressions and `True` on `matrix` objects, so mixed result streams can be discriminated.

#### Matrix.is_normal_matrix

<a id="entry-presentation_kotlin_api_matrix_is_normal_matrix"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_isnormalmatrix.119809d161b9"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun isNormalMatrix(): UniffiTruthValue
```

Query whether this matrix is normal.

#### Matrix.is_orthogonal_matrix

<a id="entry-presentation_kotlin_api_matrix_is_orthogonal_matrix"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_isorthogonalmatrix.5cf3f4c7b232"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun isOrthogonalMatrix(): UniffiTruthValue
```

Query whether this matrix is orthogonal.

#### Matrix.is_positive

<a id="entry-presentation_kotlin_api_matrix_is_positive"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_ispositive.8f0109bcd91e"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun isPositive(): kotlin.Boolean?
```

Always `None`: positivity is a property of the entries, not of the matrix.

#### Matrix.is_positive_definite_matrix

<a id="entry-presentation_kotlin_api_matrix_is_positive_definite_matrix"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_ispositivedefinitematrix.00d4b7e8012c"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun isPositiveDefiniteMatrix(): UniffiTruthValue
```

Query whether this matrix is positive definite.

#### Matrix.is_positive_semidefinite_matrix

<a id="entry-presentation_kotlin_api_matrix_is_positive_semidefinite_matrix"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_ispositivesemidefinitematrix.3612a5b3d33c"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun isPositiveSemidefiniteMatrix(): UniffiTruthValue
```

Query whether this matrix is positive semidefinite.

#### Matrix.is_real

<a id="entry-presentation_kotlin_api_matrix_is_real"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_isreal.61437e2036eb"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun isReal(): kotlin.Boolean?
```

Always `None`: realness is a property of the entries, not of the matrix.

#### Matrix.is_singular_matrix

<a id="entry-presentation_kotlin_api_matrix_is_singular_matrix"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_issingularmatrix.ce5cab5926c7"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun isSingularMatrix(): UniffiTruthValue
```

Query whether this matrix is singular.

#### Matrix.is_square

<a id="entry-presentation_kotlin_api_matrix_is_square"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_issquare.dd0c18be9363"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun isSquare(): UniffiTruthValue
```

Query whether this matrix is square.

#### Matrix.is_stale

<a id="entry-presentation_kotlin_api_matrix_is_stale"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_isstale.4e3766b91543"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun isStale(): kotlin.Boolean
```

Reports whether resetting the owning context invalidated the expression. All other operations reject a stale receiver with an actionable error.

#### Matrix.is_symmetric_matrix

<a id="entry-presentation_kotlin_api_matrix_is_symmetric_matrix"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_issymmetricmatrix.0b0caf050e55"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun isSymmetricMatrix(): UniffiTruthValue
```

Query whether this matrix is symmetric.

#### Matrix.is_union

<a id="entry-presentation_kotlin_api_matrix_is_union"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_isunion.9cad436fed6a"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun isUnion(): kotlin.Boolean
```

Always false: a matrix is never a union of sets.

#### Matrix.is_unitary_matrix

<a id="entry-presentation_kotlin_api_matrix_is_unitary_matrix"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_isunitarymatrix.002672d38688"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun isUnitaryMatrix(): UniffiTruthValue
```

Query whether this matrix is unitary.

#### Matrix.is_zero_matrix

<a id="entry-presentation_kotlin_api_matrix_is_zero_matrix"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_iszeromatrix.41be88536ed0"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun isZeroMatrix(): UniffiTruthValue
```

Query whether this matrix is the zero matrix.

