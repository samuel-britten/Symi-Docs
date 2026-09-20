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

<a id="entry-presentation_rust_api_matrix_rational_canonical_form"></a>
<a id="placement-placement.rust.native_rust.api_matrix_operations_matrix_rational_canonical_form.80610bd46671"></a>
<p class="symi-entry-owner">api::matrix_operations::Matrix method</p>

```rust signature
pub fn rational_canonical_form<'a, VariableType>(
    &self,
    variable: VariableType,
) -> Result<RationalCanonicalForm, ApiError>
where
    VariableType: Into<VariableLike<'a>>,
```


Returns the certified Frobenius canonical form over the rationals. Its invariant factors are
monic and ordered by divisibility, and `similarity` satisfies
\(\operatorname{matrix}\,\operatorname{similarity} = \operatorname{similarity}\,\operatorname{canonical\_form}\) exactly.

### rational_canonical_form (result class)

<a id="entry-presentation_rust_api_matrix_rational_canonical_form"></a>
<a id="placement-placement.rust.native_rust.api_matrix_operations_matrix_rational_canonical_form.80610bd46671"></a>
<p class="symi-entry-owner">api::matrix_operations::Matrix method</p>

```rust signature
pub fn rational_canonical_form<'a, VariableType>(
    &self,
    variable: VariableType,
) -> Result<RationalCanonicalForm, ApiError>
where
    VariableType: Into<VariableLike<'a>>,
```


### canonical_form

<a id="entry-presentation_rust_api_rationalcanonicalform_canonical_form"></a>
<a id="placement-placement.rust.native_rust.api_results_rationalcanonicalform_canonical_form.ed269db003f0"></a>
<p class="symi-entry-owner">api::results::RationalCanonicalForm method</p>

```rust signature
pub fn canonical_form(&self) -> Matrix
```

The canonical form itself.

### invariant_factors

The `similarity`, `minimal_polynomial`, and `characteristic_polynomial` getters return the
corresponding certified fields documented by their shared headings above.

### hermite_normal_form

<a id="entry-presentation_rust_api_matrix_hermite_normal_form"></a>
<a id="placement-placement.rust.native_rust.api_matrix_operations_matrix_hermite_normal_form.cc0f452c0368"></a>
<p class="symi-entry-owner">api::matrix_operations::Matrix method</p>

```rust signature
pub fn hermite_normal_form(
    &self,
) -> Result<HermiteNormalFormDecomposition, ApiError>
```


Returns the canonical row-oriented Hermite normal form `H`, a unimodular
transformation `U` satisfying \(U M = H\), the rank, and the strictly increasing
pivot-column indices. Entries must be exact integers. Every result is verified
for Hermite shape, the certificate identity, and unimodularity before return.
**Notes:** WASM returns a `HermiteNormalFormDecomposition` object with the
getters documented below.

### column_hermite_normal_form

<a id="entry-presentation_rust_api_matrix_column_hermite_normal_form"></a>
<a id="placement-placement.rust.native_rust.api_matrix_operations_matrix_column_hermite_normal_form.a1205f741663"></a>
<p class="symi-entry-owner">api::matrix_operations::Matrix method</p>

```rust signature
pub fn column_hermite_normal_form(
    &self,
) -> Result<HermiteNormalFormDecomposition, ApiError>
```


The transpose-dual column form, returning `H`, a unimodular `V` satisfying
\(M V = H\), the rank, and pivot metadata. **Notes:** WASM returns a
`HermiteNormalFormDecomposition` object.

### smith_normal_form

<a id="entry-presentation_rust_api_matrix_smith_normal_form"></a>
<a id="placement-placement.rust.native_rust.api_matrix_operations_matrix_smith_normal_form.e391c0a2f209"></a>
<p class="symi-entry-owner">api::matrix_operations::Matrix method</p>

```rust signature
pub fn smith_normal_form(
    &self,
) -> Result<SmithNormalFormDecomposition, ApiError>
```


Returns the canonical integer Smith normal form `D`, unimodular transformations
`U` and `V` satisfying \(U M V = D\), the rank, and the invariant factors including
trailing zeros. The nonnegative positive prefix is divisibility-ordered. Every
result is verified for diagonal shape, divisibility, the exact certificate, and
unimodularity of both transformations before return. **Notes:** WASM returns a
`SmithNormalFormDecomposition` object with the getters documented below.

### integer_cokernel_structure

<a id="entry-presentation_rust_api_matrix_integer_cokernel_structure"></a>
<a id="placement-placement.rust.native_rust.api_matrix_operations_matrix_integer_cokernel_structure.01d9cd9471e6"></a>
<p class="symi-entry-owner">api::matrix_operations::Matrix method</p>

```rust signature
pub fn integer_cokernel_structure(
    &self,
) -> Result<IntegerCokernelData, ApiError>
```


Returns the free rank and nontrivial torsion invariant factors of
`Z^m / M Z^n`. **Notes:** WASM returns an `IntegerCokernelData` object.

### smith

<a id="entry-presentation_rust_api_smithnormalformdecomposition_smith"></a>
<a id="placement-placement.rust.native_rust.api_results_smithnormalformdecomposition_smith.1366fd9a3396"></a>
<p class="symi-entry-owner">api::results::SmithNormalFormDecomposition method</p>

```rust signature
pub fn smith(&self) -> Matrix
```

The Smith normal form itself.

### row_transformation

<a id="entry-presentation_rust_api_smithnormalformdecomposition_row_transformation"></a>
<a id="placement-placement.rust.native_rust.api_results_smithnormalformdecomposition_row_transformation.e6390f14313d"></a>
<p class="symi-entry-owner">api::results::SmithNormalFormDecomposition method</p>

```rust signature
pub fn row_transformation(&self) -> Matrix
```

The unimodular row transform.

### column_transformation

<a id="entry-presentation_rust_api_smithnormalformdecomposition_column_transformation"></a>
<a id="placement-placement.rust.native_rust.api_results_smithnormalformdecomposition_column_transformation.65ab1dc81433"></a>
<p class="symi-entry-owner">api::results::SmithNormalFormDecomposition method</p>

```rust signature
pub fn column_transformation(&self) -> Matrix
```

The unimodular column transform.

### smith_invariant_factors

### free_rank

### torsion_invariant_factors

### integer_kernel_basis

<a id="entry-presentation_rust_api_matrix_integer_kernel_basis"></a>
<a id="placement-placement.rust.native_rust.api_matrix_operations_matrix_integer_kernel_basis.c1f0622c1d09"></a>
<p class="symi-entry-owner">api::matrix_operations::Matrix method</p>

```rust signature
pub fn integer_kernel_basis(&self) -> Result<Vec<Matrix>, ApiError>
```


A canonical basis of the integer kernel \(\{x \in \mathbb{Z}^n : M x = 0\}\), returned as
column matrices.

### integer_row_lattice_basis

<a id="entry-presentation_rust_api_matrix_integer_row_lattice_basis"></a>
<a id="placement-placement.rust.native_rust.api_matrix_operations_matrix_integer_row_lattice_basis.db3df6f3c2d5"></a>
<p class="symi-entry-owner">api::matrix_operations::Matrix method</p>

```rust signature
pub fn integer_row_lattice_basis(&self) -> Result<Vec<Matrix>, ApiError>
```


The nonzero rows of the row Hermite form, returned as row matrices; these form
the canonical basis of the integer row lattice.

### integer_image_lattice_basis

<a id="entry-presentation_rust_api_matrix_integer_image_lattice_basis"></a>
<a id="placement-placement.rust.native_rust.api_matrix_operations_matrix_integer_image_lattice_basis.6a5d99116244"></a>
<p class="symi-entry-owner">api::matrix_operations::Matrix method</p>

```rust signature
pub fn integer_image_lattice_basis(
    &self,
) -> Result<Vec<Matrix>, ApiError>
```


The nonzero columns of the column Hermite form, returned as column matrices;
these form the canonical basis of `M Z^n`.

### hermite

<a id="entry-presentation_rust_api_hermitenormalformdecomposition_hermite"></a>
<a id="placement-placement.rust.native_rust.api_results_hermitenormalformdecomposition_hermite.fcdf0b32dc40"></a>
<p class="symi-entry-owner">api::results::HermiteNormalFormDecomposition method</p>

```rust signature
pub fn hermite(&self) -> Matrix
```

The Hermite normal form itself.

### transformation

<a id="entry-presentation_rust_api_hermitenormalformdecomposition_transformation"></a>
<a id="placement-placement.rust.native_rust.api_results_hermitenormalformdecomposition_transformation.9a92108cbf77"></a>
<p class="symi-entry-owner">api::results::HermiteNormalFormDecomposition method</p>

```rust signature
pub fn transformation(&self) -> Matrix
```


### pivot_columns

The `rank` getter reuses the matrix `rank` heading above.


<a id="entry-presentation_rust_api_hermitenormalformdecomposition_pivot_columns"></a>
<a id="placement-placement.rust.native_rust.api_results_hermitenormalformdecomposition_pivot_columns.06d279bfe80e"></a>
<p class="symi-entry-owner">api::results::HermiteNormalFormDecomposition method</p>

```rust signature
pub fn pivot_columns(&self) -> Vec<usize>
```

The pivot column indices.

## Example

This family is not part of the recommended `symi::api` facade in this release. Call it through the native modules in the [native Rust API reference](/symi/rust/api/symi/).


## Additional API

### HermiteNormalFormDecomposition

<a id="entry-presentation_rust_api_hermitenormalformdecomposition"></a>
<a id="placement-placement.rust.native_rust.api_hermitenormalformdecomposition.da28a11eed57"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use results::HermiteNormalFormDecomposition;
```

A Hermite normal form together with its unimodular transform.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_results_hermitenormalformdecomposition.46167c5baa66"></a>
<p class="symi-entry-owner">Type: <code>api::results::HermiteNormalFormDecomposition</code></p>

```rust signature
pub struct HermiteNormalFormDecomposition
```

</details>

#### HermiteNormalFormDecomposition.rank

<a id="entry-presentation_rust_api_hermitenormalformdecomposition_rank"></a>
<a id="placement-placement.rust.native_rust.api_results_hermitenormalformdecomposition_rank.4611235cf342"></a>
<p class="symi-entry-owner">api::results::HermiteNormalFormDecomposition method</p>

```rust signature
pub fn rank(&self) -> usize
```

The rank of the source matrix.

### RationalCanonicalForm

<a id="entry-presentation_rust_api_rationalcanonicalform"></a>
<a id="placement-placement.rust.native_rust.api_rationalcanonicalform.c79ffa4b9038"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use results::RationalCanonicalForm;
```

A rational canonical form together with its similarity and invariants.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_results_rationalcanonicalform.a3316a6d9a09"></a>
<p class="symi-entry-owner">Type: <code>api::results::RationalCanonicalForm</code></p>

```rust signature
pub struct RationalCanonicalForm
```

</details>

#### RationalCanonicalForm.characteristic_polynomial

<a id="entry-presentation_rust_api_rationalcanonicalform_characteristic_polynomial"></a>
<a id="placement-placement.rust.native_rust.api_results_rationalcanonicalform_characteristic_polynomial.9575efa91bf9"></a>
<p class="symi-entry-owner">api::results::RationalCanonicalForm method</p>

```rust signature
pub fn characteristic_polynomial(&self) -> Expression
```

The characteristic polynomial of the source matrix.

#### RationalCanonicalForm.invariant_factors

<a id="entry-presentation_rust_api_rationalcanonicalform_invariant_factors"></a>
<a id="placement-placement.rust.native_rust.api_results_rationalcanonicalform_invariant_factors.02ef70378b17"></a>
<p class="symi-entry-owner">api::results::RationalCanonicalForm method</p>

```rust signature
pub fn invariant_factors(&self) -> Vec<Expression>
```

The invariant factors of the companion decomposition.

#### RationalCanonicalForm.minimal_polynomial

<a id="entry-presentation_rust_api_rationalcanonicalform_minimal_polynomial"></a>
<a id="placement-placement.rust.native_rust.api_results_rationalcanonicalform_minimal_polynomial.7e36f3c17445"></a>
<p class="symi-entry-owner">api::results::RationalCanonicalForm method</p>

```rust signature
pub fn minimal_polynomial(&self) -> Expression
```

The minimal polynomial of the source matrix.

#### RationalCanonicalForm.similarity

<a id="entry-presentation_rust_api_rationalcanonicalform_similarity"></a>
<a id="placement-placement.rust.native_rust.api_results_rationalcanonicalform_similarity.b1a2af40d387"></a>
<p class="symi-entry-owner">api::results::RationalCanonicalForm method</p>

```rust signature
pub fn similarity(&self) -> Matrix
```

The similarity transform.

### SmithNormalFormDecomposition

<a id="entry-presentation_rust_api_smithnormalformdecomposition"></a>
<a id="placement-placement.rust.native_rust.api_smithnormalformdecomposition.8e955dc8ed70"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use results::SmithNormalFormDecomposition;
```

A Smith normal form together with its unimodular transforms.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_results_smithnormalformdecomposition.c4e461c4733c"></a>
<p class="symi-entry-owner">Type: <code>api::results::SmithNormalFormDecomposition</code></p>

```rust signature
pub struct SmithNormalFormDecomposition
```

</details>

#### SmithNormalFormDecomposition.invariant_factors

<a id="entry-presentation_rust_api_smithnormalformdecomposition_invariant_factors"></a>
<a id="placement-placement.rust.native_rust.api_results_smithnormalformdecomposition_invariant_factors.53903f4cceec"></a>
<p class="symi-entry-owner">api::results::SmithNormalFormDecomposition method</p>

```rust signature
pub fn invariant_factors(&self) -> Vec<Expression>
```

The invariant factors on the diagonal.

#### SmithNormalFormDecomposition.rank

<a id="entry-presentation_rust_api_smithnormalformdecomposition_rank"></a>
<a id="placement-placement.rust.native_rust.api_results_smithnormalformdecomposition_rank.d82924340d22"></a>
<p class="symi-entry-owner">api::results::SmithNormalFormDecomposition method</p>

```rust signature
pub fn rank(&self) -> usize
```

The rank of the source matrix.

