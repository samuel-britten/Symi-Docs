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

<a id="entry-presentation_rust_matrix_canonical_forms_capability_rust_native_rust_api_matrix_operations_matrix_rational_canonical_form_unnamed"></a>
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

<a id="entry-presentation_rust_matrix_canonical_forms_capability_rust_native_rust_api_matrix_operations_matrix_rational_canonical_form_unnamed"></a>
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

<a id="entry-presentation_rust_matrix_canonical_forms_capability_rust_native_rust_api_results_rationalcanonicalform_canonical_form_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_rationalcanonicalform_canonical_form.ed269db003f0"></a>
<p class="symi-entry-owner">api::results::RationalCanonicalForm method</p>

```rust signature
pub fn canonical_form(&self) -> Matrix
```


### invariant_factors

The `similarity`, `minimal_polynomial`, and `characteristic_polynomial` getters return the
corresponding certified fields documented by their shared headings above.

### hermite_normal_form

<a id="entry-presentation_rust_matrix_canonical_forms_capability_rust_native_rust_api_matrix_operations_matrix_hermite_normal_form_unnamed"></a>
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

<a id="entry-presentation_rust_matrix_canonical_forms_capability_rust_native_rust_api_matrix_operations_matrix_column_hermite_normal_form_unnamed"></a>
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

<a id="entry-presentation_rust_matrix_canonical_forms_capability_rust_native_rust_api_matrix_operations_matrix_smith_normal_form_unnamed"></a>
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

<a id="entry-presentation_rust_matrix_canonical_forms_capability_rust_native_rust_api_matrix_operations_matrix_integer_cokernel_structure_unnamed"></a>
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

<a id="entry-presentation_rust_matrix_canonical_forms_capability_rust_native_rust_api_results_smithnormalformdecomposition_smith_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_smithnormalformdecomposition_smith.1366fd9a3396"></a>
<p class="symi-entry-owner">api::results::SmithNormalFormDecomposition method</p>

```rust signature
pub fn smith(&self) -> Matrix
```


### row_transformation

<a id="entry-presentation_rust_matrix_canonical_forms_capability_rust_native_rust_api_results_smithnormalformdecomposition_row_transformation_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_smithnormalformdecomposition_row_transformation.e6390f14313d"></a>
<p class="symi-entry-owner">api::results::SmithNormalFormDecomposition method</p>

```rust signature
pub fn row_transformation(&self) -> Matrix
```


### column_transformation

<a id="entry-presentation_rust_matrix_canonical_forms_capability_rust_native_rust_api_results_smithnormalformdecomposition_column_transformation_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_smithnormalformdecomposition_column_transformation.65ab1dc81433"></a>
<p class="symi-entry-owner">api::results::SmithNormalFormDecomposition method</p>

```rust signature
pub fn column_transformation(&self) -> Matrix
```


### smith_invariant_factors

### free_rank

<a id="entry-presentation_rust_matrix_canonical_forms_capability_rust_native_rust_api_results_integercokerneldata_free_rank_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_integercokerneldata_free_rank.0634b3398792"></a>
<p class="symi-entry-owner">api::results::IntegerCokernelData method</p>

```rust signature
pub fn free_rank(&self) -> usize
```


### torsion_invariant_factors

<a id="entry-presentation_rust_matrix_canonical_forms_capability_rust_native_rust_api_results_integercokerneldata_torsion_invariant_factors_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_integercokerneldata_torsion_invariant_factors.92d65a8c4b3f"></a>
<p class="symi-entry-owner">api::results::IntegerCokernelData method</p>

```rust signature
pub fn torsion_invariant_factors(&self) -> Vec<Expression>
```


### integer_kernel_basis

<a id="entry-presentation_rust_matrix_canonical_forms_capability_rust_native_rust_api_matrix_operations_matrix_integer_kernel_basis_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_matrix_operations_matrix_integer_kernel_basis.c1f0622c1d09"></a>
<p class="symi-entry-owner">api::matrix_operations::Matrix method</p>

```rust signature
pub fn integer_kernel_basis(&self) -> Result<Vec<Matrix>, ApiError>
```


A canonical basis of the integer kernel \(\{x \in \mathbb{Z}^n : M x = 0\}\), returned as
column matrices.

### integer_row_lattice_basis

<a id="entry-presentation_rust_matrix_canonical_forms_capability_rust_native_rust_api_matrix_operations_matrix_integer_row_lattice_basis_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_matrix_operations_matrix_integer_row_lattice_basis.db3df6f3c2d5"></a>
<p class="symi-entry-owner">api::matrix_operations::Matrix method</p>

```rust signature
pub fn integer_row_lattice_basis(&self) -> Result<Vec<Matrix>, ApiError>
```


The nonzero rows of the row Hermite form, returned as row matrices; these form
the canonical basis of the integer row lattice.

### integer_image_lattice_basis

<a id="entry-presentation_rust_matrix_canonical_forms_capability_rust_native_rust_api_matrix_operations_matrix_integer_image_lattice_basis_unnamed"></a>
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

<a id="entry-presentation_rust_matrix_canonical_forms_capability_rust_native_rust_api_results_hermitenormalformdecomposition_hermite_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_hermitenormalformdecomposition_hermite.fcdf0b32dc40"></a>
<p class="symi-entry-owner">api::results::HermiteNormalFormDecomposition method</p>

```rust signature
pub fn hermite(&self) -> Matrix
```


### transformation

### pivot_columns

<a id="entry-presentation_rust_matrix_canonical_forms_capability_rust_native_rust_api_results_hermitenormalformdecomposition_pivot_columns_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_hermitenormalformdecomposition_pivot_columns.06d279bfe80e"></a>
<p class="symi-entry-owner">api::results::HermiteNormalFormDecomposition method</p>

```rust signature
pub fn pivot_columns(&self) -> Vec<usize>
```


The `rank` getter reuses the matrix `rank` heading above.


## Example

This family is not part of the recommended `symi::api` facade in this release. Call it through the native modules in the [native Rust API reference](/symi/rust/api/symi/).


## Additional API

### invariant_factors

<a id="entry-presentation_rust_matrix_canonical_forms_capability_rust_native_rust_api_results_rationalcanonicalform_invariant_factors_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_rationalcanonicalform_invariant_factors.02ef70378b17"></a>
<p class="symi-entry-owner">api::results::RationalCanonicalForm method</p>

```rust signature
pub fn invariant_factors(&self) -> Vec<Expression>
```

The `similarity`, `minimal_polynomial`, and `characteristic_polynomial` getters return the corresponding certified fields documented by their shared headings above.

### invariant_factors

<a id="entry-presentation_rust_matrix_canonical_forms_capability_rust_native_rust_api_results_smithnormalformdecomposition_invariant_factors_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_smithnormalformdecomposition_invariant_factors.53903f4cceec"></a>
<p class="symi-entry-owner">api::results::SmithNormalFormDecomposition method</p>

```rust signature
pub fn invariant_factors(&self) -> Vec<Expression>
```

The `similarity`, `minimal_polynomial`, and `characteristic_polynomial` getters return the corresponding certified fields documented by their shared headings above.

### transformation

<a id="entry-presentation_rust_matrix_canonical_forms_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationcanonicalizationresult_transformation_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcanonicalizationresult_transformation.671d0316f6aa"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationCanonicalizationResult method</p>

```rust signature
pub fn transformation(
    &self,
) -> Option<PartialDifferentialEquationTransformationResult>
```

Public method placement for transformation.

### transformation

<a id="entry-presentation_rust_matrix_canonical_forms_capability_rust_native_rust_api_results_hermitenormalformdecomposition_transformation_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_hermitenormalformdecomposition_transformation.9a92108cbf77"></a>
<p class="symi-entry-owner">api::results::HermiteNormalFormDecomposition method</p>

```rust signature
pub fn transformation(&self) -> Matrix
```

Public method placement for transformation.

