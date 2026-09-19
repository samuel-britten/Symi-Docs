# Linear algebra

Matrix arithmetic and linear algebra operations are exact symbolic operations.

## Arithmetic

Python additionally overloads `+`, `-`, `*` (matrix product) over these
named methods.

### add

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_add_api_matrix_add"></a>
<a id="placement-placement.wasm.wasm_class.matrix_add.99e6a9230b2d"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
add(other: Matrix): Matrix
```


### subtract

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_subtract_api_matrix_subtract"></a>
<a id="placement-placement.wasm.wasm_class.matrix_subtract.ac3ea3a61aeb"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
subtract(other: Matrix): Matrix
```


### multiply

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_multiply_api_matrix_multiply"></a>
<a id="placement-placement.wasm.wasm_class.matrix_multiply.ba14f611498e"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
multiply(other: Matrix): Matrix
```


Matrix product; inner dimensions must agree.

### scalar_multiply

*Not exposed by the WASM / JavaScript bindings. Available as [`Matrix.scalar_multiply`](/symi/python/linear-algebra#scalar_multiply) in Python, [`UniffiMatrix.scalarMultiply`](/symi/kotlin/linear-algebra#scalar_multiply) in Kotlin, [`UniffiMatrix.scalarMultiply`](/symi/swift/linear-algebra#scalar_multiply) in Swift, [`api::Matrix::scalar_multiply`](/symi/rust/linear-algebra#scalar_multiply) in Rust.*


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

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_transpose_api_matrix_transpose"></a>
<a id="placement-placement.wasm.wasm_class.matrix_transpose.d8c363407dfa"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
transpose(): Matrix
```


### determinant

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_determinant_api_matrix_determinant"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_determinant.375ed98dc9f9"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
determinant(): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.matrix_determinant.9cca0ed72b2e"></a>
<p class="symi-entry-owner">Matrix method: <code>Matrix.determinant</code></p>

```typescript signature
determinant(): Expression
```

</details>


Fraction-free (Berkowitz/Bareiss) determinant of a square matrix.

### trace

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_trace_api_matrix_trace"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_trace.520d7f729d12"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
trace(): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.matrix_trace.061991085cfa"></a>
<p class="symi-entry-owner">Matrix method: <code>Matrix.trace</code></p>

```typescript signature
trace(): Expression
```

</details>


### characteristic_polynomial

*Not exposed by the WASM / JavaScript bindings. Available as [`Matrix.characteristic_polynomial`](/symi/python/linear-algebra#characteristic_polynomial) in Python, [`UniffiMatrix.characteristicPolynomial`](/symi/kotlin/linear-algebra#characteristic_polynomial) in Kotlin, [`UniffiMatrix.characteristicPolynomial`](/symi/swift/linear-algebra#characteristic_polynomial) in Swift, [`api::matrix_operations::Matrix::characteristic_polynomial`](/symi/rust/linear-algebra#characteristic_polynomial) in Rust.*


\(\det(\lambda I - M)\) as a polynomial in the named variable.

### minimal_polynomial

*Not exposed by the WASM / JavaScript bindings. Available as [`Matrix.minimal_polynomial`](/symi/python/linear-algebra#minimal_polynomial) in Python, [`UniffiMatrix.minimalPolynomial`](/symi/kotlin/linear-algebra#minimal_polynomial) in Kotlin, [`UniffiMatrix.minimalPolynomial`](/symi/swift/linear-algebra#minimal_polynomial) in Swift, [`api::matrix_operations::Matrix::minimal_polynomial`](/symi/rust/linear-algebra#minimal_polynomial) in Rust.*


The monic minimal polynomial over the rationals. The matrix must have rational entries.

### eigenvalues

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_eigenvalues_api_matrix_eigenvalues"></a>
<a id="placement-placement.wasm.wasm_class.matrix_eigenvalues.6b4706f57bbf"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
eigenvalues(): Expression[]
```


Eigenvalues with multiplicity, via the characteristic polynomial and the
root finder; eigenvalues the root finder cannot close remain as
exact first-class `polynomial_root` values.

### eigenvectors

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_eigenvectors_api_matrix_operations_matrix_eigenvectors"></a>
<a id="placement-placement.wasm.wasm_class.matrix_eigenvectors.c6bb314d0780"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
eigenvectors(): Eigenpair[]
```


For each eigenvalue, a basis of its eigenspace as column matrices.
**Notes:** WASM returns `Eigenpair` objects with `eigenvalue`/`vectors`
getters.

### eigenpair (WASM result class)

### eigenvalue

### vectors

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_vectors_api_results_eigenpair_vectors"></a>
<a id="placement-placement.wasm.wasm_class.eigenpair_vectors.cddaa6ad5fe1"></a>
<p class="symi-entry-owner">Eigenpair property</p>

```typescript signature
readonly vectors: Matrix[]
```


### inverse

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_inverse_api_matrix_inverse"></a>
<a id="placement-placement.wasm.wasm_class.matrix_inverse.b9c203ead0bb"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
inverse(): Matrix
```


Inverse via the adjugate; raises on singular input.

### rank

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_rank_api_matrix_rank"></a>
<a id="placement-placement.wasm.wasm_class.matrix_rank.488612d9f940"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
rank(): number
```


Rank via Bareiss fraction-free elimination.

### row_reduce

*Not exposed by the WASM / JavaScript bindings. Available as [`Matrix.row_reduce`](/symi/python/linear-algebra#row_reduce) in Python, [`UniffiMatrix.rowReduce`](/symi/kotlin/linear-algebra#row_reduce) in Kotlin, [`UniffiMatrix.rowReduce`](/symi/swift/linear-algebra#row_reduce) in Swift, [`api::Matrix::row_reduce`](/symi/rust/linear-algebra#row_reduce) in Rust.*


Bareiss row-reduced form (fraction-free; pivots remain on the diagonal).

### nullspace_basis

*Not exposed by the WASM / JavaScript bindings. Available as [`Matrix.nullspace_basis`](/symi/python/linear-algebra#nullspace_basis) in Python, [`UniffiMatrix.nullspaceBasis`](/symi/kotlin/linear-algebra#nullspace_basis) in Kotlin, [`UniffiMatrix.nullspaceBasis`](/symi/swift/linear-algebra#nullspace_basis) in Swift, [`api::matrix_operations::Matrix::nullspace_basis`](/symi/rust/linear-algebra#nullspace_basis) in Rust.*


A basis of the kernel, as column matrices; empty list for full column rank.

### adjugate

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_adjugate_api_matrix_adjugate"></a>
<a id="placement-placement.wasm.wasm_class.matrix_adjugate.3b29f0eaf4e7"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
adjugate(): Matrix
```


The classical adjoint (transpose of the cofactor matrix); satisfies
\(M\operatorname{adj}(M) = \det(M) I\).

### cofactor_matrix

*Not exposed by the WASM / JavaScript bindings. Available as [`Matrix.cofactor_matrix`](/symi/python/linear-algebra#cofactor_matrix) in Python, [`UniffiMatrix.cofactorMatrix`](/symi/kotlin/linear-algebra#cofactor_matrix) in Kotlin, [`UniffiMatrix.cofactorMatrix`](/symi/swift/linear-algebra#cofactor_matrix) in Swift, [`api::Matrix::cofactor_matrix`](/symi/rust/linear-algebra#cofactor_matrix) in Rust.*


### lower_upper_decomposition

*Not exposed by the WASM / JavaScript bindings. Available as [`Matrix.lower_upper_decomposition`](/symi/python/linear-algebra#lower_upper_decomposition) in Python, [`UniffiMatrix.lowerUpperDecomposition`](/symi/kotlin/linear-algebra#lower_upper_decomposition) in Kotlin, [`UniffiMatrix.lowerUpperDecomposition`](/symi/swift/linear-algebra#lower_upper_decomposition) in Swift, [`api::matrix_operations::Matrix::lower_upper_decomposition`](/symi/rust/linear-algebra#lower_upper_decomposition) in Rust.*


Partial-pivoting LU decomposition returned as
`(permutation, lower, upper)` with \(\operatorname{permutation} M = \operatorname{lower}\,\operatorname{upper}\). The
permutation matrix is reconstructed from the pivoting row-swap record.
**Notes:** WASM returns a 3-element array `[permutation, lower, upper]`.

## Example

Exact matrix arithmetic and spectral data.

```javascript
const matrix = symi.matrix([[1, 2], [3, 4]]);

console.log(matrix.determinant().toString());
console.log(matrix.trace().toString());
console.log(matrix.multiply(matrix).toString());
```


## Additional API

### Matrix

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_matrix_api_matrix"></a>
<a id="placement-placement.wasm.wasm_class.matrix.9d9ffff314ec"></a>
<p class="symi-entry-owner">Matrix constructor</p>

```typescript signature
new Matrix(rows: number, columns: number, entries: Expression[])
```

Construct a matrix of the given shape from `entries` in row-major order.

### canonicalForm

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_canonical_form_api_results_rationalcanonicalform_canonical_form"></a>
<a id="placement-placement.wasm.wasm_class.rationalcanonicalform_canonicalform.fa5f7876399d"></a>
<p class="symi-entry-owner">RationalCanonicalForm property</p>

```typescript signature
readonly canonicalForm: Matrix
```

The Frobenius canonical form of the decomposed matrix.

### characteristicPolynomial

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_characteristic_polynomial_api_matrix_operations_matrix_characteristic_polynomial"></a>
<a id="placement-placement.wasm.wasm_class.matrix_characteristicpolynomial.b52d432283bf"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
characteristicPolynomial(variable: string): Expression
```

\(\det(\lambda I - M)\) as a polynomial in the named variable.

### characteristicPolynomial

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_characteristic_polynomial_api_results_rationalcanonicalform_characteristic_polynomial"></a>
<a id="placement-placement.wasm.wasm_class.rationalcanonicalform_characteristicpolynomial.62eae1d83074"></a>
<p class="symi-entry-owner">RationalCanonicalForm property</p>

```typescript signature
readonly characteristicPolynomial: Expression
```

\(\det(\lambda I - M)\) as a polynomial in the named variable.

### cofactorMatrix

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_cofactor_matrix_api_matrix_cofactor_matrix"></a>
<a id="placement-placement.wasm.wasm_class.matrix_cofactormatrix.f7cc2238f180"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
cofactorMatrix(): Matrix
```

The matrix of cofactors, whose transpose is the adjugate.

### columnTransformation

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_column_transformation_api_results_smithnormalformdecomposition_column_transformation"></a>
<a id="placement-placement.wasm.wasm_class.smithnormalformdecomposition_columntransformation.9b91a0b807db"></a>
<p class="symi-entry-owner">SmithNormalFormDecomposition property</p>

```typescript signature
readonly columnTransformation: Matrix
```

The unimodular column transformation `V` satisfying `U * matrix * V == S`.

### eigenvalue

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_eigenvalue_api_results_eigenpair_eigenvalue"></a>
<a id="placement-placement.wasm.wasm_class.eigenpair_eigenvalue.843c70c4d195"></a>
<p class="symi-entry-owner">Eigenpair property</p>

```typescript signature
readonly eigenvalue: Expression
```

The eigenvalue of the pair.

### eigenvalue

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_eigenvalue_api_results_jordanblock_eigenvalue"></a>
<a id="placement-placement.wasm.wasm_class.jordanblock_eigenvalue.709dd40eb76c"></a>
<p class="symi-entry-owner">JordanBlock property</p>

```typescript signature
readonly eigenvalue: Expression
```

The eigenvalue this Jordan block belongs to.

### freeRank

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_free_rank_api_results_integercokerneldata_free_rank"></a>
<a id="placement-placement.wasm.wasm_class.integercokerneldata_freerank.58e60eaffcc6"></a>
<p class="symi-entry-owner">IntegerCokernelData property</p>

```typescript signature
readonly freeRank: number
```

Rank of the free part of the cokernel.

### hasComplexEntries

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_has_complex_entries_api_matrix_has_complex_entries"></a>
<a id="placement-placement.wasm.wasm_class.matrix_hascomplexentries.fc89a0fa64ba"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
hasComplexEntries(): boolean | undefined
```

Query whether every entry is finite complex.

### hasIntegerEntries

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_has_integer_entries_api_matrix_has_integer_entries"></a>
<a id="placement-placement.wasm.wasm_class.matrix_hasintegerentries.c6f9d9a6c203"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
hasIntegerEntries(): boolean | undefined
```

Query whether every entry is an integer.

### hasRealEntries

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_has_real_entries_api_matrix_has_real_entries"></a>
<a id="placement-placement.wasm.wasm_class.matrix_hasrealentries.bfd277113306"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
hasRealEntries(): boolean | undefined
```

Query whether every entry is real.

### hyperbolicCosine

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_hyperbolic_cosine_api_matrix_operations_matrix_hyperbolic_cosine"></a>
<a id="placement-placement.wasm.wasm_class.matrix_hyperboliccosine.9883f6ac95ea"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
hyperbolicCosine(): Matrix
```

The primary hyperbolic matrix cosine `cosh(M)`, evaluated exactly through the certified Jordan decomposition and the hyperbolic identity certificate.

### hyperbolicSine

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_hyperbolic_sine_api_matrix_operations_matrix_hyperbolic_sine"></a>
<a id="placement-placement.wasm.wasm_class.matrix_hyperbolicsine.8c14f73a4915"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
hyperbolicSine(): Matrix
```

The primary hyperbolic matrix sine `sinh(M)`, evaluated exactly through the certified Jordan decomposition. The result is certified together with the hyperbolic matrix cosine by `cosh(M)^2 - sinh(M)^2 = I`.

### integerCokernelStructure

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_integer_cokernel_structure_api_matrix_operations_matrix_integer_cokernel_structure"></a>
<a id="placement-placement.wasm.wasm_class.matrix_integercokernelstructure.6531796e2d45"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
integerCokernelStructure(): IntegerCokernelData
```

Returns the free rank and nontrivial torsion invariant factors of `Z^m / M Z^n`.

### integerImageLatticeBasis

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_integer_image_lattice_basis_api_matrix_operations_matrix_integer_image_lattice_basis"></a>
<a id="placement-placement.wasm.wasm_class.matrix_integerimagelatticebasis.5e205115c515"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
integerImageLatticeBasis(): Matrix[]
```

The nonzero columns of the column Hermite form, returned as column matrices; these form the canonical basis of `M Z^n`.

### integerKernelBasis

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_integer_kernel_basis_api_matrix_operations_matrix_integer_kernel_basis"></a>
<a id="placement-placement.wasm.wasm_class.matrix_integerkernelbasis.01cee525f219"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
integerKernelBasis(): Matrix[]
```

A canonical basis of the integer kernel \(\{x \in \mathbb{Z}^n : M x = 0\}\), returned as column matrices.

### integerRowLatticeBasis

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_integer_row_lattice_basis_api_matrix_operations_matrix_integer_row_lattice_basis"></a>
<a id="placement-placement.wasm.wasm_class.matrix_integerrowlatticebasis.81f8585c2e8d"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
integerRowLatticeBasis(): Matrix[]
```

The nonzero rows of the row Hermite form, returned as row matrices; these form the canonical basis of the integer row lattice.

### invariantFactors

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_invariant_factors_api_results_rationalcanonicalform_invariant_factors"></a>
<a id="placement-placement.wasm.wasm_class.rationalcanonicalform_invariantfactors.ab13f6a73bd5"></a>
<p class="symi-entry-owner">RationalCanonicalForm property</p>

```typescript signature
readonly invariantFactors: Expression[]
```

The certified invariant factors, monic and ordered by divisibility.

### invariantFactors

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_invariant_factors_api_results_smithnormalformdecomposition_invariant_factors"></a>
<a id="placement-placement.wasm.wasm_class.smithnormalformdecomposition_invariantfactors.429da175d3de"></a>
<p class="symi-entry-owner">SmithNormalFormDecomposition property</p>

```typescript signature
readonly invariantFactors: Expression[]
```

The certified invariant factors, monic and ordered by divisibility.

### isDiagonalMatrix

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_is_diagonal_matrix_api_matrix_is_diagonal_matrix"></a>
<a id="placement-placement.wasm.wasm_class.matrix_isdiagonalmatrix.71327370540b"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isDiagonalMatrix(): boolean | undefined
```

Query whether this matrix is diagonal.

### isFullRankMatrix

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_is_full_rank_matrix_api_matrix_is_full_rank_matrix"></a>
<a id="placement-placement.wasm.wasm_class.matrix_isfullrankmatrix.5bbfcbc6c1e0"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isFullRankMatrix(): boolean | undefined
```

Query whether this matrix has full rank.

### isHermitianMatrix

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_is_hermitian_matrix_api_matrix_is_hermitian_matrix"></a>
<a id="placement-placement.wasm.wasm_class.matrix_ishermitianmatrix.1cb5739b20b5"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isHermitianMatrix(): boolean | undefined
```

Query whether this matrix is Hermitian.

### isIdentityMatrix

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_is_identity_matrix_api_matrix_is_identity_matrix"></a>
<a id="placement-placement.wasm.wasm_class.matrix_isidentitymatrix.9ff399f20293"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isIdentityMatrix(): boolean | undefined
```

Query whether this matrix is the identity matrix.

### isInvertibleMatrix

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_is_invertible_matrix_api_matrix_is_invertible_matrix"></a>
<a id="placement-placement.wasm.wasm_class.matrix_isinvertiblematrix.6352f593e5f7"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isInvertibleMatrix(): boolean | undefined
```

Query whether this matrix is invertible.

### isNormalMatrix

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_is_normal_matrix_api_matrix_is_normal_matrix"></a>
<a id="placement-placement.wasm.wasm_class.matrix_isnormalmatrix.3db937ca961a"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isNormalMatrix(): boolean | undefined
```

Query whether this matrix is normal.

### isOrthogonalMatrix

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_is_orthogonal_matrix_api_matrix_is_orthogonal_matrix"></a>
<a id="placement-placement.wasm.wasm_class.matrix_isorthogonalmatrix.d6a1f86db429"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isOrthogonalMatrix(): boolean | undefined
```

Query whether this matrix is orthogonal.

### isPositiveDefiniteMatrix

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_is_positive_definite_matrix_api_matrix_is_positive_definite_matrix"></a>
<a id="placement-placement.wasm.wasm_class.matrix_ispositivedefinitematrix.6bcc9f90fd7c"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isPositiveDefiniteMatrix(): boolean | undefined
```

Query whether this matrix is positive definite.

### isPositiveSemidefiniteMatrix

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_is_positive_semidefinite_matrix_api_matrix_is_positive_semidefinite_matrix"></a>
<a id="placement-placement.wasm.wasm_class.matrix_ispositivesemidefinitematrix.3397ae9b1bcd"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isPositiveSemidefiniteMatrix(): boolean | undefined
```

Query whether this matrix is positive semidefinite.

### isSingularMatrix

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_is_singular_matrix_api_matrix_is_singular_matrix"></a>
<a id="placement-placement.wasm.wasm_class.matrix_issingularmatrix.06b2135448ac"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isSingularMatrix(): boolean | undefined
```

Query whether this matrix is singular.

### isSquare

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_is_square_api_matrix_is_square"></a>
<a id="placement-placement.wasm.wasm_class.matrix_issquare.24b993354b1d"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isSquare(): boolean | undefined
```

Query whether this matrix is square.

### isSymmetricMatrix

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_is_symmetric_matrix_api_matrix_is_symmetric_matrix"></a>
<a id="placement-placement.wasm.wasm_class.matrix_issymmetricmatrix.90f4b9ccfa27"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isSymmetricMatrix(): boolean | undefined
```

Query whether this matrix is symmetric.

### isUnitaryMatrix

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_is_unitary_matrix_api_matrix_is_unitary_matrix"></a>
<a id="placement-placement.wasm.wasm_class.matrix_isunitarymatrix.c6089d647a19"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isUnitaryMatrix(): boolean | undefined
```

Query whether this matrix is unitary.

### isZeroMatrix

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_is_zero_matrix_api_matrix_is_zero_matrix"></a>
<a id="placement-placement.wasm.wasm_class.matrix_iszeromatrix.5f52a26d7e19"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isZeroMatrix(): boolean | undefined
```

Query whether this matrix is the zero matrix.

### lowerUpperDecomposition

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_lower_upper_decomposition_api_matrix_operations_matrix_lower_upper_decomposition"></a>
<a id="placement-placement.wasm.wasm_class.matrix_lowerupperdecomposition.49bcf14289a6"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
lowerUpperDecomposition(): Matrix[]
```

Partial-pivoting LU decomposition returned as `(permutation, lower, upper)` with \(\operatorname{permutation} M = \operatorname{lower}\,\operatorname{upper}\).

### minimalPolynomial

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_minimal_polynomial_api_matrix_operations_matrix_minimal_polynomial"></a>
<a id="placement-placement.wasm.wasm_class.matrix_minimalpolynomial.404814deeca3"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
minimalPolynomial(variable: string): Expression
```

The monic minimal polynomial over the rationals. The matrix must have rational entries.

### minimalPolynomial

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_minimal_polynomial_api_results_rationalcanonicalform_minimal_polynomial"></a>
<a id="placement-placement.wasm.wasm_class.rationalcanonicalform_minimalpolynomial.78ee02aaf497"></a>
<p class="symi-entry-owner">RationalCanonicalForm property</p>

```typescript signature
readonly minimalPolynomial: Expression
```

The monic minimal polynomial over the rationals. The matrix must have rational entries.

### nullspaceBasis

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_nullspace_basis_api_matrix_operations_matrix_nullspace_basis"></a>
<a id="placement-placement.wasm.wasm_class.matrix_nullspacebasis.3c29893c97be"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
nullspaceBasis(): Matrix[]
```

A basis of the kernel, as column matrices; empty list for full column rank.

### pivotColumns

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_pivot_columns_api_results_hermitenormalformdecomposition_pivot_columns"></a>
<a id="placement-placement.wasm.wasm_class.hermitenormalformdecomposition_pivotcolumns.310dd3184c24"></a>
<p class="symi-entry-owner">HermiteNormalFormDecomposition property</p>

```typescript signature
readonly pivotColumns: Uint32Array
```

The `rank` getter reuses the matrix `rank` heading above.

### rank

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_rank_api_results_hermitenormalformdecomposition_rank"></a>
<a id="placement-placement.wasm.wasm_class.hermitenormalformdecomposition_rank.93db89cc480a"></a>
<p class="symi-entry-owner">HermiteNormalFormDecomposition property</p>

```typescript signature
readonly rank: number
```

Rank via Bareiss fraction-free elimination.

### rank

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_rank_api_results_smithnormalformdecomposition_rank"></a>
<a id="placement-placement.wasm.wasm_class.smithnormalformdecomposition_rank.25c1ef898b6b"></a>
<p class="symi-entry-owner">SmithNormalFormDecomposition property</p>

```typescript signature
readonly rank: number
```

Rank via Bareiss fraction-free elimination.

### rationalCanonicalForm

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_rational_canonical_form_api_matrix_operations_matrix_rational_canonical_form"></a>
<a id="placement-placement.wasm.wasm_class.matrix_rationalcanonicalform.4965226d4f23"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
rationalCanonicalForm(variable: string): RationalCanonicalForm
```

Returns the certified Frobenius canonical form over the rationals. Its invariant factors are monic and ordered by divisibility, and `similarity` satisfies \(\operatorname{matrix}\,\operatorname{similarity} = \operatorname{similarity}\,\operatorname{canonical\_form}\) exactly.

### rowReduce

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_row_reduce_api_matrix_row_reduce"></a>
<a id="placement-placement.wasm.wasm_class.matrix_rowreduce.f6176e0e6403"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
rowReduce(): Matrix
```

Bareiss row-reduced form (fraction-free; pivots remain on the diagonal).

### rowTransformation

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_row_transformation_api_results_smithnormalformdecomposition_row_transformation"></a>
<a id="placement-placement.wasm.wasm_class.smithnormalformdecomposition_rowtransformation.29118694c1ef"></a>
<p class="symi-entry-owner">SmithNormalFormDecomposition property</p>

```typescript signature
readonly rowTransformation: Matrix
```

The unimodular row transformation `U` satisfying `U * matrix * V == S`.

### scalarMultiply

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_scalar_multiply_api_matrix_scalar_multiply"></a>
<a id="placement-placement.wasm.wasm_class.matrix_scalarmultiply.ec2353182aff"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
scalarMultiply(scalar: Expression): Matrix
```

Scale every entry by `scalar`.

### squareRoot

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_square_root_api_matrix_operations_matrix_square_root"></a>
<a id="placement-placement.wasm.wasm_class.matrix_squareroot.1c60c29e8e88"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
squareRoot(): Matrix
```

The principal matrix square root `sqrt(M)`; the result is verified to square back to `M`.

### toString

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_to_js_string_unresolved"></a>
<a id="placement-placement.wasm.wasm_class.matrix_tostring.78e216ff9504"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
toString(): string
```

The mathematical text of this object, as a JavaScript string.

### torsionInvariantFactors

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_torsion_invariant_factors_api_results_integercokerneldata_torsion_invariant_factors"></a>
<a id="placement-placement.wasm.wasm_class.integercokerneldata_torsioninvariantfactors.0963695946a9"></a>
<p class="symi-entry-owner">IntegerCokernelData property</p>

```typescript signature
readonly torsionInvariantFactors: Expression[]
```

The invariant factors of the torsion part of the cokernel.

