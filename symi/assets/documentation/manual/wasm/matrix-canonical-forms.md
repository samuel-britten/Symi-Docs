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

<a id="entry-presentation_wasm_api_matrix_rational_canonical_form"></a>
<a id="placement-placement.wasm.wasm_class.matrix_rationalcanonicalform.4965226d4f23"></a>
<p class="symi-entry-owner">Raw WebAssembly: Matrix method</p>

```typescript signature
rationalCanonicalForm(variable: string): RationalCanonicalForm
```


Returns the certified Frobenius canonical form over the rationals. Its invariant factors are
monic and ordered by divisibility, and `similarity` satisfies
\(\operatorname{matrix}\,\operatorname{similarity} = \operatorname{similarity}\,\operatorname{canonical\_form}\) exactly.

### rational_canonical_form (result class)

*Not exposed by the WASM / JavaScript bindings. Available as [`Matrix.rational_canonical_form`](/symi/python/matrix-canonical-forms#rational_canonical_form_result_class) in Python, [`UniffiMatrix.rationalCanonicalForm`](/symi/kotlin/matrix-canonical-forms#rational_canonical_form_result_class) in Kotlin, [`UniffiMatrix.rationalCanonicalForm`](/symi/swift/matrix-canonical-forms#rational_canonical_form_result_class) in Swift, [`api::matrix_operations::Matrix::rational_canonical_form`](/symi/rust/matrix-canonical-forms#rational_canonical_form_result_class) in Rust.*


### canonical_form

*Not exposed by the WASM / JavaScript bindings. Available as [`RationalCanonicalForm.canonical_form`](/symi/python/matrix-canonical-forms#canonical_form) in Python, [`UniffiRationalCanonicalForm.canonicalForm`](/symi/kotlin/matrix-canonical-forms#canonical_form) in Kotlin, [`UniffiRationalCanonicalForm.canonicalForm`](/symi/swift/matrix-canonical-forms#canonical_form) in Swift, [`api::results::RationalCanonicalForm::canonical_form`](/symi/rust/matrix-canonical-forms#canonical_form) in Rust.*


### invariant_factors

*Not exposed by the WASM / JavaScript bindings. Available as [`RationalCanonicalForm.invariant_factors`](/symi/python/matrix-canonical-forms#invariant_factors) in Python, [`UniffiRationalCanonicalForm.invariantFactors`](/symi/kotlin/matrix-canonical-forms#invariant_factors) in Kotlin, [`UniffiRationalCanonicalForm.invariantFactors`](/symi/swift/matrix-canonical-forms#invariant_factors) in Swift, [`api::results::RationalCanonicalForm::invariant_factors`](/symi/rust/matrix-canonical-forms#invariant_factors) in Rust.*


The `similarity`, `minimal_polynomial`, and `characteristic_polynomial` getters return the
corresponding certified fields documented by their shared headings above.

### hermite_normal_form

<a id="entry-presentation_wasm_api_matrix_hermite_normal_form"></a>
<a id="placement-placement.wasm.wasm_class.matrix_hermitenormalform.5ca2e19e0780"></a>
<p class="symi-entry-owner">Raw WebAssembly: Matrix method</p>

```typescript signature
hermiteNormalForm(): HermiteNormalFormDecomposition
```


Returns the canonical row-oriented Hermite normal form `H`, a unimodular
transformation `U` satisfying \(U M = H\), the rank, and the strictly increasing
pivot-column indices. Entries must be exact integers. Every result is verified
for Hermite shape, the certificate identity, and unimodularity before return.
**Notes:** WASM returns a `HermiteNormalFormDecomposition` object with the
getters documented below.

### column_hermite_normal_form

<a id="entry-presentation_wasm_api_matrix_column_hermite_normal_form"></a>
<a id="placement-placement.wasm.wasm_class.matrix_columnhermitenormalform.d56e378a6a37"></a>
<p class="symi-entry-owner">Raw WebAssembly: Matrix method</p>

```typescript signature
columnHermiteNormalForm(): HermiteNormalFormDecomposition
```


The transpose-dual column form, returning `H`, a unimodular `V` satisfying
\(M V = H\), the rank, and pivot metadata. **Notes:** WASM returns a
`HermiteNormalFormDecomposition` object.

### smith_normal_form

<a id="entry-presentation_wasm_api_matrix_smith_normal_form"></a>
<a id="placement-placement.wasm.wasm_class.matrix_smithnormalform.6d537d6b9035"></a>
<p class="symi-entry-owner">Raw WebAssembly: Matrix method</p>

```typescript signature
smithNormalForm(): SmithNormalFormDecomposition
```


Returns the canonical integer Smith normal form `D`, unimodular transformations
`U` and `V` satisfying \(U M V = D\), the rank, and the invariant factors including
trailing zeros. The nonnegative positive prefix is divisibility-ordered. Every
result is verified for diagonal shape, divisibility, the exact certificate, and
unimodularity of both transformations before return. **Notes:** WASM returns a
`SmithNormalFormDecomposition` object with the getters documented below.

### integer_cokernel_structure

<a id="entry-presentation_wasm_api_matrix_integer_cokernel_structure"></a>
<a id="placement-placement.wasm.wasm_class.matrix_integercokernelstructure.6531796e2d45"></a>
<p class="symi-entry-owner">Raw WebAssembly: Matrix method</p>

```typescript signature
integerCokernelStructure(): IntegerCokernelData
```


Returns the free rank and nontrivial torsion invariant factors of
`Z^m / M Z^n`. **Notes:** WASM returns an `IntegerCokernelData` object.

### smith

<a id="entry-presentation_wasm_api_smithnormalformdecomposition_smith"></a>
<a id="placement-placement.wasm.wasm_class.smithnormalformdecomposition_smith.a82ae363b1ec"></a>
<p class="symi-entry-owner">Raw WebAssembly: SmithNormalFormDecomposition property</p>

```typescript signature
readonly smith: Matrix
```

The Smith normal form `S`.

### row_transformation

*Not exposed by the WASM / JavaScript bindings. Available as [`UniffiSmithNormalFormDecomposition.rowTransformation`](/symi/kotlin/matrix-canonical-forms#row_transformation) in Kotlin, [`UniffiSmithNormalFormDecomposition.rowTransformation`](/symi/swift/matrix-canonical-forms#row_transformation) in Swift, [`api::results::SmithNormalFormDecomposition::row_transformation`](/symi/rust/matrix-canonical-forms#row_transformation) in Rust.*


### column_transformation

*Not exposed by the WASM / JavaScript bindings. Available as [`UniffiSmithNormalFormDecomposition.columnTransformation`](/symi/kotlin/matrix-canonical-forms#column_transformation) in Kotlin, [`UniffiSmithNormalFormDecomposition.columnTransformation`](/symi/swift/matrix-canonical-forms#column_transformation) in Swift, [`api::results::SmithNormalFormDecomposition::column_transformation`](/symi/rust/matrix-canonical-forms#column_transformation) in Rust.*


### smith_invariant_factors

### free_rank

### torsion_invariant_factors

### integer_kernel_basis

<a id="entry-presentation_wasm_api_matrix_integer_kernel_basis"></a>
<a id="placement-placement.wasm.wasm_class.matrix_integerkernelbasis.01cee525f219"></a>
<p class="symi-entry-owner">Raw WebAssembly: Matrix method</p>

```typescript signature
integerKernelBasis(): Matrix[]
```


A canonical basis of the integer kernel \(\{x \in \mathbb{Z}^n : M x = 0\}\), returned as
column matrices.

### integer_row_lattice_basis

<a id="entry-presentation_wasm_api_matrix_integer_row_lattice_basis"></a>
<a id="placement-placement.wasm.wasm_class.matrix_integerrowlatticebasis.81f8585c2e8d"></a>
<p class="symi-entry-owner">Raw WebAssembly: Matrix method</p>

```typescript signature
integerRowLatticeBasis(): Matrix[]
```


The nonzero rows of the row Hermite form, returned as row matrices; these form
the canonical basis of the integer row lattice.

### integer_image_lattice_basis

<a id="entry-presentation_wasm_api_matrix_integer_image_lattice_basis"></a>
<a id="placement-placement.wasm.wasm_class.matrix_integerimagelatticebasis.5e205115c515"></a>
<p class="symi-entry-owner">Raw WebAssembly: Matrix method</p>

```typescript signature
integerImageLatticeBasis(): Matrix[]
```


The nonzero columns of the column Hermite form, returned as column matrices;
these form the canonical basis of `M Z^n`.

### hermite

<a id="entry-presentation_wasm_api_hermitenormalformdecomposition_hermite"></a>
<a id="placement-placement.wasm.wasm_class.hermitenormalformdecomposition_hermite.f2a2b5ea8b10"></a>
<p class="symi-entry-owner">Raw WebAssembly: HermiteNormalFormDecomposition property</p>

```typescript signature
readonly hermite: Matrix
```

The Hermite normal form `H`.

### transformation

<a id="entry-presentation_wasm_api_hermitenormalformdecomposition_transformation"></a>
<a id="placement-placement.wasm.wasm_class.hermitenormalformdecomposition_transformation.d7078a78935f"></a>
<p class="symi-entry-owner">Raw WebAssembly: HermiteNormalFormDecomposition property</p>

```typescript signature
readonly transformation: Matrix
```


### pivot_columns

*Not exposed by the WASM / JavaScript bindings. Available as [`UniffiHermiteNormalFormDecomposition.pivotColumns`](/symi/kotlin/matrix-canonical-forms#pivot_columns) in Kotlin, [`UniffiHermiteNormalFormDecomposition.pivotColumns`](/symi/swift/matrix-canonical-forms#pivot_columns) in Swift, [`api::results::HermiteNormalFormDecomposition::pivot_columns`](/symi/rust/matrix-canonical-forms#pivot_columns) in Rust.*


The `rank` getter reuses the matrix `rank` heading above.


## Example

This family is not part of the recommended JavaScript facade in this release. Call it through the generated `symi.raw` layer, whose entries are listed with their wasm-bindgen signatures above, and read [Migration](migration.md) for the ownership rules that apply there.


## Additional API

### HermiteNormalFormDecomposition

#### HermiteNormalFormDecomposition.pivotColumns

<a id="entry-presentation_wasm_api_hermitenormalformdecomposition_pivot_columns"></a>
<a id="placement-placement.wasm.wasm_class.hermitenormalformdecomposition_pivotcolumns.310dd3184c24"></a>
<p class="symi-entry-owner">Raw WebAssembly: HermiteNormalFormDecomposition property</p>

```typescript signature
readonly pivotColumns: Uint32Array
```

The `rank` getter reuses the matrix `rank` heading above.

#### HermiteNormalFormDecomposition.rank

<a id="entry-presentation_wasm_api_hermitenormalformdecomposition_rank"></a>
<a id="placement-placement.wasm.wasm_class.hermitenormalformdecomposition_rank.93db89cc480a"></a>
<p class="symi-entry-owner">Raw WebAssembly: HermiteNormalFormDecomposition property</p>

```typescript signature
readonly rank: number
```

Rank via Bareiss fraction-free elimination.

### RationalCanonicalForm

#### RationalCanonicalForm.canonicalForm

<a id="entry-presentation_wasm_api_rationalcanonicalform_canonical_form"></a>
<a id="placement-placement.wasm.wasm_class.rationalcanonicalform_canonicalform.fa5f7876399d"></a>
<p class="symi-entry-owner">Raw WebAssembly: RationalCanonicalForm property</p>

```typescript signature
readonly canonicalForm: Matrix
```

The Frobenius canonical form of the decomposed matrix.

#### RationalCanonicalForm.characteristicPolynomial

<a id="entry-presentation_wasm_api_rationalcanonicalform_characteristic_polynomial"></a>
<a id="placement-placement.wasm.wasm_class.rationalcanonicalform_characteristicpolynomial.62eae1d83074"></a>
<p class="symi-entry-owner">Raw WebAssembly: RationalCanonicalForm property</p>

```typescript signature
readonly characteristicPolynomial: Expression
```

\(\det(\lambda I - M)\) as a polynomial in the named variable.

#### RationalCanonicalForm.invariantFactors

<a id="entry-presentation_wasm_api_rationalcanonicalform_invariant_factors"></a>
<a id="placement-placement.wasm.wasm_class.rationalcanonicalform_invariantfactors.ab13f6a73bd5"></a>
<p class="symi-entry-owner">Raw WebAssembly: RationalCanonicalForm property</p>

```typescript signature
readonly invariantFactors: Expression[]
```

The certified invariant factors, monic and ordered by divisibility.

#### RationalCanonicalForm.minimalPolynomial

<a id="entry-presentation_wasm_api_rationalcanonicalform_minimal_polynomial"></a>
<a id="placement-placement.wasm.wasm_class.rationalcanonicalform_minimalpolynomial.78ee02aaf497"></a>
<p class="symi-entry-owner">Raw WebAssembly: RationalCanonicalForm property</p>

```typescript signature
readonly minimalPolynomial: Expression
```

The monic minimal polynomial over the rationals. The matrix must have rational entries.

#### RationalCanonicalForm.similarity

<a id="entry-presentation_wasm_api_rationalcanonicalform_similarity"></a>
<a id="placement-placement.wasm.wasm_class.rationalcanonicalform_similarity.d2577308ef20"></a>
<p class="symi-entry-owner">Raw WebAssembly: RationalCanonicalForm property</p>

```typescript signature
readonly similarity: Matrix
```

The certified change of basis `S`, satisfying `matrix * S == S * canonical_form`.

### SmithNormalFormDecomposition

#### SmithNormalFormDecomposition.columnTransformation

<a id="entry-presentation_wasm_api_smithnormalformdecomposition_column_transformation"></a>
<a id="placement-placement.wasm.wasm_class.smithnormalformdecomposition_columntransformation.9b91a0b807db"></a>
<p class="symi-entry-owner">Raw WebAssembly: SmithNormalFormDecomposition property</p>

```typescript signature
readonly columnTransformation: Matrix
```

The unimodular column transformation `V` satisfying `U * matrix * V == S`.

#### SmithNormalFormDecomposition.invariantFactors

<a id="entry-presentation_wasm_api_smithnormalformdecomposition_invariant_factors"></a>
<a id="placement-placement.wasm.wasm_class.smithnormalformdecomposition_invariantfactors.429da175d3de"></a>
<p class="symi-entry-owner">Raw WebAssembly: SmithNormalFormDecomposition property</p>

```typescript signature
readonly invariantFactors: Expression[]
```

The certified invariant factors, monic and ordered by divisibility.

#### SmithNormalFormDecomposition.rank

<a id="entry-presentation_wasm_api_smithnormalformdecomposition_rank"></a>
<a id="placement-placement.wasm.wasm_class.smithnormalformdecomposition_rank.25c1ef898b6b"></a>
<p class="symi-entry-owner">Raw WebAssembly: SmithNormalFormDecomposition property</p>

```typescript signature
readonly rank: number
```

Rank via Bareiss fraction-free elimination.

#### SmithNormalFormDecomposition.rowTransformation

<a id="entry-presentation_wasm_api_smithnormalformdecomposition_row_transformation"></a>
<a id="placement-placement.wasm.wasm_class.smithnormalformdecomposition_rowtransformation.29118694c1ef"></a>
<p class="symi-entry-owner">Raw WebAssembly: SmithNormalFormDecomposition property</p>

```typescript signature
readonly rowTransformation: Matrix
```

The unimodular row transformation `U` satisfying `U * matrix * V == S`.

