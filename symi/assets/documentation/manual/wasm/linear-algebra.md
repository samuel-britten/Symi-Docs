# Linear algebra

Matrix arithmetic and linear algebra operations are exact symbolic operations.

## Arithmetic

Python additionally overloads `+`, `-`, `*` (matrix product) over these
named methods.

### add

<a id="placement-placement.wasm.wasm_class.matrix_add.99e6a9230b2d"></a>
Raw WebAssembly: `pub fn add(&self, other: &Matrix) -> Result<Matrix, JsError>`


### subtract

<a id="placement-placement.wasm.wasm_class.matrix_subtract.ac3ea3a61aeb"></a>
Raw WebAssembly: `pub fn subtract(&self, other: &Matrix) -> Result<Matrix, JsError>`


### multiply

<a id="placement-placement.wasm.wasm_class.matrix_multiply.ba14f611498e"></a>
Raw WebAssembly: `pub fn multiply(&self, other: &Matrix) -> Result<Matrix, JsError>`


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

<a id="placement-placement.wasm.wasm_class.matrix_transpose.d8c363407dfa"></a>
Raw WebAssembly: `pub fn transpose(&self) -> Result<Matrix, JsError>`


### determinant

<a id="placement-placement.wasm.javascript_facade.matrix_determinant.375ed98dc9f9"></a>
`Matrix.determinant(): Expression`

<a id="placement-placement.wasm.wasm_class.matrix_determinant.9cca0ed72b2e"></a>
Raw WebAssembly: `pub fn determinant(&self) -> Result<Expression, JsError>`


Fraction-free (Berkowitz/Bareiss) determinant of a square matrix.

### trace

<a id="placement-placement.wasm.javascript_facade.matrix_trace.520d7f729d12"></a>
`Matrix.trace(): Expression`

<a id="placement-placement.wasm.wasm_class.matrix_trace.061991085cfa"></a>
Raw WebAssembly: `pub fn trace(&self) -> Result<Expression, JsError>`


### characteristic_polynomial

*Not exposed by the WASM / JavaScript bindings. Available as [`Matrix.characteristic_polynomial`](/symi/python/linear-algebra#characteristic_polynomial) in Python, [`UniffiMatrix.characteristicPolynomial`](/symi/kotlin/linear-algebra#characteristic_polynomial) in Kotlin, [`UniffiMatrix.characteristicPolynomial`](/symi/swift/linear-algebra#characteristic_polynomial) in Swift, [`api::matrix_operations::Matrix::characteristic_polynomial`](/symi/rust/linear-algebra#characteristic_polynomial) in Rust.*


\(\det(\lambda I - M)\) as a polynomial in the named variable.

### minimal_polynomial

*Not exposed by the WASM / JavaScript bindings. Available as [`Matrix.minimal_polynomial`](/symi/python/linear-algebra#minimal_polynomial) in Python, [`UniffiMatrix.minimalPolynomial`](/symi/kotlin/linear-algebra#minimal_polynomial) in Kotlin, [`UniffiMatrix.minimalPolynomial`](/symi/swift/linear-algebra#minimal_polynomial) in Swift, [`api::matrix_operations::Matrix::minimal_polynomial`](/symi/rust/linear-algebra#minimal_polynomial) in Rust.*


The monic minimal polynomial over the rationals. The matrix must have rational entries.

### eigenvalues

<a id="placement-placement.wasm.wasm_class.matrix_eigenvalues.6b4706f57bbf"></a>
Raw WebAssembly: `pub fn eigenvalues(&self) -> Result<Vec<Expression>, JsError>`


Eigenvalues with multiplicity, via the characteristic polynomial and the
root finder; eigenvalues the root finder cannot close remain as
exact first-class `polynomial_root` values.

### eigenvectors

<a id="placement-placement.wasm.wasm_class.matrix_eigenvectors.c6bb314d0780"></a>
Raw WebAssembly: `pub fn eigenvectors(&self) -> Result<Vec<Eigenpair>, JsError>`


For each eigenvalue, a basis of its eigenspace as column matrices.
**Notes:** WASM returns `Eigenpair` objects with `eigenvalue`/`vectors`
getters.

### eigenpair (WASM result class)

### eigenvalue

<a id="placement-placement.wasm.wasm_class.eigenpair_eigenvalue.843c70c4d195"></a>
Raw WebAssembly: `pub fn eigenvalue(&self) -> Expression`

<a id="placement-placement.wasm.wasm_class.jordanblock_eigenvalue.709dd40eb76c"></a>
Raw WebAssembly: `pub fn eigenvalue(&self) -> Expression`


### vectors

<a id="placement-placement.wasm.wasm_class.eigenpair_vectors.cddaa6ad5fe1"></a>
Raw WebAssembly: `pub fn vectors(&self) -> Vec<Matrix>`


### inverse

<a id="placement-placement.wasm.wasm_class.matrix_inverse.b9c203ead0bb"></a>
Raw WebAssembly: `pub fn inverse(&self) -> Result<Matrix, JsError>`


Inverse via the adjugate; raises on singular input.

### rank

<a id="placement-placement.wasm.wasm_class.hermitenormalformdecomposition_rank.93db89cc480a"></a>
Raw WebAssembly: `pub fn rank(&self) -> usize`

<a id="placement-placement.wasm.wasm_class.matrix_rank.488612d9f940"></a>
Raw WebAssembly: `pub fn rank(&self) -> Result<usize, JsError>`

<a id="placement-placement.wasm.wasm_class.smithnormalformdecomposition_rank.25c1ef898b6b"></a>
Raw WebAssembly: `pub fn rank(&self) -> usize`


Rank via Bareiss fraction-free elimination.

### row_reduce

*Not exposed by the WASM / JavaScript bindings. Available as [`Matrix.row_reduce`](/symi/python/linear-algebra#row_reduce) in Python, [`UniffiMatrix.rowReduce`](/symi/kotlin/linear-algebra#row_reduce) in Kotlin, [`UniffiMatrix.rowReduce`](/symi/swift/linear-algebra#row_reduce) in Swift, [`api::Matrix::row_reduce`](/symi/rust/linear-algebra#row_reduce) in Rust.*


Bareiss row-reduced form (fraction-free; pivots remain on the diagonal).

### nullspace_basis

*Not exposed by the WASM / JavaScript bindings. Available as [`Matrix.nullspace_basis`](/symi/python/linear-algebra#nullspace_basis) in Python, [`UniffiMatrix.nullspaceBasis`](/symi/kotlin/linear-algebra#nullspace_basis) in Kotlin, [`UniffiMatrix.nullspaceBasis`](/symi/swift/linear-algebra#nullspace_basis) in Swift, [`api::matrix_operations::Matrix::nullspace_basis`](/symi/rust/linear-algebra#nullspace_basis) in Rust.*


A basis of the kernel, as column matrices; empty list for full column rank.

### adjugate

<a id="placement-placement.wasm.wasm_class.matrix_adjugate.3b29f0eaf4e7"></a>
Raw WebAssembly: `pub fn adjugate(&self) -> Result<Matrix, JsError>`


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

<a id="placement-placement.wasm.wasm_class.hermitenormalformdecomposition_pivotcolumns.310dd3184c24"></a>
### HermiteNormalFormDecomposition.pivotColumns

`pub fn pivot_columns(&self) -> Vec<usize>`

Returns `Vec<usize>`.

<a id="placement-placement.wasm.wasm_class.integercokerneldata_freerank.58e60eaffcc6"></a>
### IntegerCokernelData.freeRank

`pub fn free_rank(&self) -> usize`

Returns `usize`.

<a id="placement-placement.wasm.wasm_class.integercokerneldata_torsioninvariantfactors.0963695946a9"></a>
### IntegerCokernelData.torsionInvariantFactors

`pub fn torsion_invariant_factors(&self) -> Vec<Expression>`

Returns `Vec<expression>`.

<a id="placement-placement.wasm.wasm_class.matrix.9d9ffff314ec"></a>
### Matrix

`pub fn new(rows: usize, columns: usize, entries: Vec<Expression>) -> Result<Matrix, JsError>`

Returns `Result<matrix, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_characteristicpolynomial.b52d432283bf"></a>
### Matrix.characteristicPolynomial

`pub fn characteristic_polynomial(&self, variable: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_cofactormatrix.f7cc2238f180"></a>
### Matrix.cofactorMatrix

`pub fn cofactor_matrix(&self) -> Result<Matrix, JsError>`

Returns `Result<matrix, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_hascomplexentries.fc89a0fa64ba"></a>
### Matrix.hasComplexEntries

`pub fn has_complex_entries(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_hasintegerentries.c6f9d9a6c203"></a>
### Matrix.hasIntegerEntries

`pub fn has_integer_entries(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_hasrealentries.bfd277113306"></a>
### Matrix.hasRealEntries

`pub fn has_real_entries(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_hyperboliccosine.9883f6ac95ea"></a>
### Matrix.hyperbolicCosine

`pub fn hyperbolic_cosine(&self) -> Result<Matrix, JsError>`

Returns `Result<matrix, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_hyperbolicsine.8c14f73a4915"></a>
### Matrix.hyperbolicSine

`pub fn hyperbolic_sine(&self) -> Result<Matrix, JsError>`

Returns `Result<matrix, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_integercokernelstructure.6531796e2d45"></a>
### Matrix.integerCokernelStructure

`pub fn integer_cokernel_structure(&self) -> Result<IntegerCokernelData, JsError>`

Returns `Result<integer_cokernel_data, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_integerimagelatticebasis.5e205115c515"></a>
### Matrix.integerImageLatticeBasis

`pub fn integer_image_lattice_basis(&self) -> Result<Vec<Matrix>, JsError>`

Returns `Result<Vec<matrix>, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_integerkernelbasis.01cee525f219"></a>
### Matrix.integerKernelBasis

`pub fn integer_kernel_basis(&self) -> Result<Vec<Matrix>, JsError>`

Returns `Result<Vec<matrix>, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_integerrowlatticebasis.81f8585c2e8d"></a>
### Matrix.integerRowLatticeBasis

`pub fn integer_row_lattice_basis(&self) -> Result<Vec<Matrix>, JsError>`

Returns `Result<Vec<matrix>, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_isdiagonalmatrix.71327370540b"></a>
### Matrix.isDiagonalMatrix

`pub fn is_diagonal_matrix(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_isfullrankmatrix.5bbfcbc6c1e0"></a>
### Matrix.isFullRankMatrix

`pub fn is_full_rank_matrix(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_ishermitianmatrix.1cb5739b20b5"></a>
### Matrix.isHermitianMatrix

`pub fn is_hermitian_matrix(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_isidentitymatrix.9ff399f20293"></a>
### Matrix.isIdentityMatrix

`pub fn is_identity_matrix(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_isinvertiblematrix.6352f593e5f7"></a>
### Matrix.isInvertibleMatrix

`pub fn is_invertible_matrix(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_isnormalmatrix.3db937ca961a"></a>
### Matrix.isNormalMatrix

`pub fn is_normal_matrix(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_isorthogonalmatrix.d6a1f86db429"></a>
### Matrix.isOrthogonalMatrix

`pub fn is_orthogonal_matrix(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_ispositivedefinitematrix.6bcc9f90fd7c"></a>
### Matrix.isPositiveDefiniteMatrix

`pub fn is_positive_definite_matrix(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_ispositivesemidefinitematrix.3397ae9b1bcd"></a>
### Matrix.isPositiveSemidefiniteMatrix

`pub fn is_positive_semidefinite_matrix(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_issingularmatrix.06b2135448ac"></a>
### Matrix.isSingularMatrix

`pub fn is_singular_matrix(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_issquare.24b993354b1d"></a>
### Matrix.isSquare

`pub fn is_square(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_issymmetricmatrix.90f4b9ccfa27"></a>
### Matrix.isSymmetricMatrix

`pub fn is_symmetric_matrix(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_isunitarymatrix.c6089d647a19"></a>
### Matrix.isUnitaryMatrix

`pub fn is_unitary_matrix(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_iszeromatrix.5f52a26d7e19"></a>
### Matrix.isZeroMatrix

`pub fn is_zero_matrix(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_lowerupperdecomposition.49bcf14289a6"></a>
### Matrix.lowerUpperDecomposition

`pub fn lower_upper_decomposition(&self) -> Result<Vec<Matrix>, JsError>`

Returns `Result<Vec<matrix>, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_minimalpolynomial.404814deeca3"></a>
### Matrix.minimalPolynomial

`pub fn minimal_polynomial(&self, variable: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_nullspacebasis.3c29893c97be"></a>
### Matrix.nullspaceBasis

`pub fn nullspace_basis(&self) -> Result<Vec<Matrix>, JsError>`

Returns `Result<Vec<matrix>, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_rationalcanonicalform.4965226d4f23"></a>
### Matrix.rationalCanonicalForm

`pub fn rational_canonical_form(&self, variable: &str) -> Result<RationalCanonicalForm, JsError>`

Returns `Result<rational_canonical_form, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_rowreduce.f6176e0e6403"></a>
### Matrix.rowReduce

`pub fn row_reduce(&self) -> Result<Matrix, JsError>`

Returns `Result<matrix, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_scalarmultiply.ec2353182aff"></a>
### Matrix.scalarMultiply

`pub fn scalar_multiply(&self, scalar: &Expression) -> Result<Matrix, JsError>`

Returns `Result<matrix, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_squareroot.1c60c29e8e88"></a>
### Matrix.squareRoot

`pub fn square_root(&self) -> Result<Matrix, JsError>`

Returns `Result<matrix, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_tostring.78e216ff9504"></a>
### Matrix.toString

`pub fn to_js_string(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.rationalcanonicalform_canonicalform.fa5f7876399d"></a>
### RationalCanonicalForm.canonicalForm

`pub fn canonical_form(&self) -> Matrix`

Returns `matrix`.

<a id="placement-placement.wasm.wasm_class.rationalcanonicalform_characteristicpolynomial.62eae1d83074"></a>
### RationalCanonicalForm.characteristicPolynomial

`pub fn characteristic_polynomial(&self) -> Expression`

Returns `expression`.

<a id="placement-placement.wasm.wasm_class.rationalcanonicalform_invariantfactors.ab13f6a73bd5"></a>
### RationalCanonicalForm.invariantFactors

`pub fn invariant_factors(&self) -> Vec<Expression>`

Returns `Vec<expression>`.

<a id="placement-placement.wasm.wasm_class.rationalcanonicalform_minimalpolynomial.78ee02aaf497"></a>
### RationalCanonicalForm.minimalPolynomial

`pub fn minimal_polynomial(&self) -> Expression`

Returns `expression`.

<a id="placement-placement.wasm.wasm_class.smithnormalformdecomposition_columntransformation.9b91a0b807db"></a>
### SmithNormalFormDecomposition.columnTransformation

`pub fn column_transformation(&self) -> Matrix`

Returns `matrix`.

<a id="placement-placement.wasm.wasm_class.smithnormalformdecomposition_invariantfactors.429da175d3de"></a>
### SmithNormalFormDecomposition.invariantFactors

`pub fn invariant_factors(&self) -> Vec<Expression>`

Returns `Vec<expression>`.

<a id="placement-placement.wasm.wasm_class.smithnormalformdecomposition_rowtransformation.29118694c1ef"></a>
### SmithNormalFormDecomposition.rowTransformation

`pub fn row_transformation(&self) -> Matrix`

Returns `matrix`.

