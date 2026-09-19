# Matrix canonical forms

Canonical and integer forms return structured decompositions when metadata such
as transformations, rank, pivots, or invariant factors is part of the result.
Every decomposition on this page carries the transformation matrices that
certify it, so the defining identity can be replayed exactly.

Ordinary matrix arithmetic, determinants, and spectral data are on
[linear algebra](linear-algebra.md); the shape of each returned record is
listed in [structured results](structured-results.md) and the generated
[result-type index](result-type-index.md).

## Canonical and integer forms

### rational_canonical_form

*Not exposed by the WASM / JavaScript bindings. Available as [`Matrix.rational_canonical_form`](/symi/python/matrix-canonical-forms#rational_canonical_form) in Python, [`UniffiMatrix.rationalCanonicalForm`](/symi/kotlin/matrix-canonical-forms#rational_canonical_form) in Kotlin, [`UniffiMatrix.rationalCanonicalForm`](/symi/swift/matrix-canonical-forms#rational_canonical_form) in Swift, [`api::matrix_operations::Matrix::rational_canonical_form`](/symi/rust/matrix-canonical-forms#rational_canonical_form) in Rust.*


Returns the certified Frobenius canonical form over the rationals. Its invariant factors are
monic and ordered by divisibility, and `similarity` satisfies
\(\operatorname{matrix}\,\operatorname{similarity} = \operatorname{similarity}\,\operatorname{canonical\_form}\) exactly.

### rational_canonical_form (result class)

*Not exposed by the WASM / JavaScript bindings. Available as [`Matrix.rational_canonical_form`](/symi/python/matrix-canonical-forms#rational_canonical_form) in Python, [`UniffiMatrix.rationalCanonicalForm`](/symi/kotlin/matrix-canonical-forms#rational_canonical_form) in Kotlin, [`UniffiMatrix.rationalCanonicalForm`](/symi/swift/matrix-canonical-forms#rational_canonical_form) in Swift, [`api::matrix_operations::Matrix::rational_canonical_form`](/symi/rust/matrix-canonical-forms#rational_canonical_form) in Rust.*


### canonical_form

*Not exposed by the WASM / JavaScript bindings. Available as [`RationalCanonicalForm.canonical_form`](/symi/python/matrix-canonical-forms#canonical_form) in Python, [`UniffiRationalCanonicalForm.canonicalForm`](/symi/kotlin/matrix-canonical-forms#canonical_form) in Kotlin, [`UniffiRationalCanonicalForm.canonicalForm`](/symi/swift/matrix-canonical-forms#canonical_form) in Swift, [`api::results::RationalCanonicalForm::canonical_form`](/symi/rust/matrix-canonical-forms#canonical_form) in Rust.*


### invariant_factors

*Not exposed by the WASM / JavaScript bindings. Available as [`RationalCanonicalForm.invariant_factors`](/symi/python/matrix-canonical-forms#invariant_factors) in Python, [`UniffiRationalCanonicalForm.invariantFactors`](/symi/kotlin/matrix-canonical-forms#invariant_factors) in Kotlin, [`UniffiRationalCanonicalForm.invariantFactors`](/symi/swift/matrix-canonical-forms#invariant_factors) in Swift, [`api::results::RationalCanonicalForm::invariant_factors`](/symi/rust/matrix-canonical-forms#invariant_factors) in Rust.*


The `similarity`, `minimal_polynomial`, and `characteristic_polynomial` getters return the
corresponding certified fields documented by their shared headings above.

### hermite_normal_form

*Not exposed by the WASM / JavaScript bindings. Available as [`Matrix.hermite_normal_form`](/symi/python/matrix-canonical-forms#hermite_normal_form) in Python, [`UniffiMatrix.hermiteNormalForm`](/symi/kotlin/matrix-canonical-forms#hermite_normal_form) in Kotlin, [`UniffiMatrix.hermiteNormalForm`](/symi/swift/matrix-canonical-forms#hermite_normal_form) in Swift, [`api::matrix_operations::Matrix::hermite_normal_form`](/symi/rust/matrix-canonical-forms#hermite_normal_form) in Rust.*


Returns the canonical row-oriented Hermite normal form `H`, a unimodular
transformation `U` satisfying \(U M = H\), the rank, and the strictly increasing
pivot-column indices. Entries must be exact integers. Every result is verified
for Hermite shape, the certificate identity, and unimodularity before return.
**Notes:** WASM returns a `HermiteNormalFormDecomposition` object with the
getters documented below.

### column_hermite_normal_form

*Not exposed by the WASM / JavaScript bindings. Available as [`Matrix.column_hermite_normal_form`](/symi/python/matrix-canonical-forms#column_hermite_normal_form) in Python, [`UniffiMatrix.columnHermiteNormalForm`](/symi/kotlin/matrix-canonical-forms#column_hermite_normal_form) in Kotlin, [`UniffiMatrix.columnHermiteNormalForm`](/symi/swift/matrix-canonical-forms#column_hermite_normal_form) in Swift, [`api::matrix_operations::Matrix::column_hermite_normal_form`](/symi/rust/matrix-canonical-forms#column_hermite_normal_form) in Rust.*


The transpose-dual column form, returning `H`, a unimodular `V` satisfying
\(M V = H\), the rank, and pivot metadata. **Notes:** WASM returns a
`HermiteNormalFormDecomposition` object.

### smith_normal_form

*Not exposed by the WASM / JavaScript bindings. Available as [`Matrix.smith_normal_form`](/symi/python/matrix-canonical-forms#smith_normal_form) in Python, [`UniffiMatrix.smithNormalForm`](/symi/kotlin/matrix-canonical-forms#smith_normal_form) in Kotlin, [`UniffiMatrix.smithNormalForm`](/symi/swift/matrix-canonical-forms#smith_normal_form) in Swift, [`api::matrix_operations::Matrix::smith_normal_form`](/symi/rust/matrix-canonical-forms#smith_normal_form) in Rust.*


Returns the canonical integer Smith normal form `D`, unimodular transformations
`U` and `V` satisfying \(U M V = D\), the rank, and the invariant factors including
trailing zeros. The nonnegative positive prefix is divisibility-ordered. Every
result is verified for diagonal shape, divisibility, the exact certificate, and
unimodularity of both transformations before return. **Notes:** WASM returns a
`SmithNormalFormDecomposition` object with the getters documented below.

### integer_cokernel_structure

*Not exposed by the WASM / JavaScript bindings. Available as [`Matrix.integer_cokernel_structure`](/symi/python/matrix-canonical-forms#integer_cokernel_structure) in Python, [`UniffiMatrix.integerCokernelStructure`](/symi/kotlin/matrix-canonical-forms#integer_cokernel_structure) in Kotlin, [`UniffiMatrix.integerCokernelStructure`](/symi/swift/matrix-canonical-forms#integer_cokernel_structure) in Swift, [`api::matrix_operations::Matrix::integer_cokernel_structure`](/symi/rust/matrix-canonical-forms#integer_cokernel_structure) in Rust.*


Returns the free rank and nontrivial torsion invariant factors of
`Z^m / M Z^n`. **Notes:** WASM returns an `IntegerCokernelData` object.

### smith

<a id="entry-presentation_wasm_matrix_canonical_forms_capability_algebra_smith_api_results_smithnormalformdecomposition_smith"></a>
<a id="placement-placement.wasm.wasm_class.smithnormalformdecomposition_smith.a82ae363b1ec"></a>
<p class="symi-entry-owner">SmithNormalFormDecomposition property</p>

```typescript signature
readonly smith: Matrix
```


### row_transformation

*Not exposed by the WASM / JavaScript bindings. Available as [`UniffiSmithNormalFormDecomposition.rowTransformation`](/symi/kotlin/matrix-canonical-forms#row_transformation) in Kotlin, [`UniffiSmithNormalFormDecomposition.rowTransformation`](/symi/swift/matrix-canonical-forms#row_transformation) in Swift, [`api::results::SmithNormalFormDecomposition::row_transformation`](/symi/rust/matrix-canonical-forms#row_transformation) in Rust.*


### column_transformation

*Not exposed by the WASM / JavaScript bindings. Available as [`UniffiSmithNormalFormDecomposition.columnTransformation`](/symi/kotlin/matrix-canonical-forms#column_transformation) in Kotlin, [`UniffiSmithNormalFormDecomposition.columnTransformation`](/symi/swift/matrix-canonical-forms#column_transformation) in Swift, [`api::results::SmithNormalFormDecomposition::column_transformation`](/symi/rust/matrix-canonical-forms#column_transformation) in Rust.*


### smith_invariant_factors

### free_rank

*Not exposed by the WASM / JavaScript bindings. Available as [`UniffiIntegerCokernelData.freeRank`](/symi/kotlin/matrix-canonical-forms#free_rank) in Kotlin, [`UniffiIntegerCokernelData.freeRank`](/symi/swift/matrix-canonical-forms#free_rank) in Swift, [`api::results::IntegerCokernelData::free_rank`](/symi/rust/matrix-canonical-forms#free_rank) in Rust.*


### torsion_invariant_factors

*Not exposed by the WASM / JavaScript bindings. Available as [`UniffiIntegerCokernelData.torsionInvariantFactors`](/symi/kotlin/matrix-canonical-forms#torsion_invariant_factors) in Kotlin, [`UniffiIntegerCokernelData.torsionInvariantFactors`](/symi/swift/matrix-canonical-forms#torsion_invariant_factors) in Swift, [`api::results::IntegerCokernelData::torsion_invariant_factors`](/symi/rust/matrix-canonical-forms#torsion_invariant_factors) in Rust.*


### integer_kernel_basis

*Not exposed by the WASM / JavaScript bindings. Available as [`Matrix.integer_kernel_basis`](/symi/python/matrix-canonical-forms#integer_kernel_basis) in Python, [`UniffiMatrix.integerKernelBasis`](/symi/kotlin/matrix-canonical-forms#integer_kernel_basis) in Kotlin, [`UniffiMatrix.integerKernelBasis`](/symi/swift/matrix-canonical-forms#integer_kernel_basis) in Swift, [`api::matrix_operations::Matrix::integer_kernel_basis`](/symi/rust/matrix-canonical-forms#integer_kernel_basis) in Rust.*


A canonical basis of the integer kernel \(\{x \in \mathbb{Z}^n : M x = 0\}\), returned as
column matrices.

### integer_row_lattice_basis

*Not exposed by the WASM / JavaScript bindings. Available as [`Matrix.integer_row_lattice_basis`](/symi/python/matrix-canonical-forms#integer_row_lattice_basis) in Python, [`UniffiMatrix.integerRowLatticeBasis`](/symi/kotlin/matrix-canonical-forms#integer_row_lattice_basis) in Kotlin, [`UniffiMatrix.integerRowLatticeBasis`](/symi/swift/matrix-canonical-forms#integer_row_lattice_basis) in Swift, [`api::matrix_operations::Matrix::integer_row_lattice_basis`](/symi/rust/matrix-canonical-forms#integer_row_lattice_basis) in Rust.*


The nonzero rows of the row Hermite form, returned as row matrices; these form
the canonical basis of the integer row lattice.

### integer_image_lattice_basis

*Not exposed by the WASM / JavaScript bindings. Available as [`Matrix.integer_image_lattice_basis`](/symi/python/matrix-canonical-forms#integer_image_lattice_basis) in Python, [`UniffiMatrix.integerImageLatticeBasis`](/symi/kotlin/matrix-canonical-forms#integer_image_lattice_basis) in Kotlin, [`UniffiMatrix.integerImageLatticeBasis`](/symi/swift/matrix-canonical-forms#integer_image_lattice_basis) in Swift, [`api::matrix_operations::Matrix::integer_image_lattice_basis`](/symi/rust/matrix-canonical-forms#integer_image_lattice_basis) in Rust.*


The nonzero columns of the column Hermite form, returned as column matrices;
these form the canonical basis of `M Z^n`.

### hermite

<a id="entry-presentation_wasm_matrix_canonical_forms_capability_algebra_hermite_api_results_hermitenormalformdecomposition_hermite"></a>
<a id="placement-placement.wasm.wasm_class.hermitenormalformdecomposition_hermite.f2a2b5ea8b10"></a>
<p class="symi-entry-owner">HermiteNormalFormDecomposition property</p>

```typescript signature
readonly hermite: Matrix
```


### transformation

### pivot_columns

*Not exposed by the WASM / JavaScript bindings. Available as [`UniffiHermiteNormalFormDecomposition.pivotColumns`](/symi/kotlin/matrix-canonical-forms#pivot_columns) in Kotlin, [`UniffiHermiteNormalFormDecomposition.pivotColumns`](/symi/swift/matrix-canonical-forms#pivot_columns) in Swift, [`api::results::HermiteNormalFormDecomposition::pivot_columns`](/symi/rust/matrix-canonical-forms#pivot_columns) in Rust.*


The `rank` getter reuses the matrix `rank` heading above.


## Example

This family is not part of the recommended JavaScript facade in this release. Call it through the generated `symi.raw` layer, whose entries are listed with their wasm-bindgen signatures above, and read [Migration](migration.md) for the ownership rules that apply there.


## Additional API

### columnHermiteNormalForm

<a id="entry-presentation_wasm_matrix_canonical_forms_capability_algebra_column_hermite_normal_form_api_matrix_operations_matrix_column_hermite_normal_form"></a>
<a id="placement-placement.wasm.wasm_class.matrix_columnhermitenormalform.d56e378a6a37"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
columnHermiteNormalForm(): HermiteNormalFormDecomposition
```

The transpose-dual column form, returning `H`, a unimodular `V` satisfying \(M V = H\), the rank, and pivot metadata. Notes: WASM returns a `hermite_normal_form_decomposition` object.

### hermiteNormalForm

<a id="entry-presentation_wasm_matrix_canonical_forms_capability_algebra_hermite_normal_form_api_matrix_operations_matrix_hermite_normal_form"></a>
<a id="placement-placement.wasm.wasm_class.matrix_hermitenormalform.5ca2e19e0780"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
hermiteNormalForm(): HermiteNormalFormDecomposition
```

Returns the canonical row-oriented Hermite normal form `H`, a unimodular transformation `U` satisfying \(U M = H\), the rank, and the strictly increasing pivot-column indices. Entries must be exact integers. Every result is verified for Hermite shape, the certificate identity, and unimodularity before return. Notes: WASM returns a `hermite_normal_form_decomposition` object carrying the same four results as getters.

### smithNormalForm

<a id="entry-presentation_wasm_matrix_canonical_forms_capability_algebra_smith_normal_form_api_matrix_operations_matrix_smith_normal_form"></a>
<a id="placement-placement.wasm.wasm_class.matrix_smithnormalform.6d537d6b9035"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
smithNormalForm(): SmithNormalFormDecomposition
```

Returns the canonical integer Smith normal form `D`, unimodular transformations `U` and `V` satisfying \(U M V = D\), the rank, and the invariant factors including trailing zeros. The nonnegative positive prefix is divisibility-ordered. Every result is verified for diagonal shape, divisibility, the exact certificate, and unimodularity of both transformations before return. Notes: WASM returns a `smith_normal_form_decomposition` object carrying the same results as getters.

### transformation

<a id="entry-presentation_wasm_matrix_canonical_forms_capability_algebra_transformation_api_results_hermitenormalformdecomposition_transformation"></a>
<a id="placement-placement.wasm.wasm_class.hermitenormalformdecomposition_transformation.d7078a78935f"></a>
<p class="symi-entry-owner">HermiteNormalFormDecomposition property</p>

```typescript signature
readonly transformation: Matrix
```

The unimodular transformation `U` satisfying `U * matrix == H`.

### transformation

<a id="entry-presentation_wasm_matrix_canonical_forms_capability_algebra_transformation_api_partial_differential_equations_partialdifferentialequationcanonicalizationresult_transformation"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcanonicalizationresult_transformation.4b578977217f"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCanonicalizationResult property</p>

```typescript signature
readonly transformation: PartialDifferentialEquationTransformationResult | undefined
```

The verified coordinate transformation of a successful canonicalization.

