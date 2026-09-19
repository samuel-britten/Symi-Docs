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

<a id="entry-presentation_swift_matrix_canonical_forms_capability_algebra_rational_canonical_form_api_matrix_operations_matrix_rational_canonical_form"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_rationalcanonicalform.7b4daab24b35"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func rationalCanonicalForm(variable: String) -> UniffiRationalCanonicalForm
```


Returns the certified Frobenius canonical form over the rationals. Its invariant factors are
monic and ordered by divisibility, and `similarity` satisfies
\(\operatorname{matrix}\,\operatorname{similarity} = \operatorname{similarity}\,\operatorname{canonical\_form}\) exactly.

### rational_canonical_form (result class)

<a id="entry-presentation_swift_matrix_canonical_forms_capability_algebra_rational_canonical_form_api_matrix_operations_matrix_rational_canonical_form"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_rationalcanonicalform.7b4daab24b35"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func rationalCanonicalForm(variable: String) -> UniffiRationalCanonicalForm
```


### canonical_form

<a id="entry-presentation_swift_matrix_canonical_forms_capability_algebra_canonical_form_api_results_rationalcanonicalform_canonical_form"></a>
<a id="placement-placement.swift.swift_object.uniffirationalcanonicalform_canonicalform.6c5103ed459c"></a>
<p class="symi-entry-owner">UniffiRationalCanonicalForm method</p>

```swift signature
func canonicalForm() -> UniffiMatrix
```


### invariant_factors

The `similarity`, `minimal_polynomial`, and `characteristic_polynomial` getters return the
corresponding certified fields documented by their shared headings above.

### hermite_normal_form

<a id="entry-presentation_swift_matrix_canonical_forms_capability_algebra_hermite_normal_form_api_matrix_operations_matrix_hermite_normal_form"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_hermitenormalform.16925cab8962"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func hermiteNormalForm() -> UniffiHermiteNormalFormDecomposition
```


Returns the canonical row-oriented Hermite normal form `H`, a unimodular
transformation `U` satisfying \(U M = H\), the rank, and the strictly increasing
pivot-column indices. Entries must be exact integers. Every result is verified
for Hermite shape, the certificate identity, and unimodularity before return.
**Notes:** WASM returns a `HermiteNormalFormDecomposition` object with the
getters documented below.

### column_hermite_normal_form

<a id="entry-presentation_swift_matrix_canonical_forms_capability_algebra_column_hermite_normal_form_api_matrix_operations_matrix_column_hermite_normal_form"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_columnhermitenormalform.45ba72ee7456"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func columnHermiteNormalForm() -> UniffiHermiteNormalFormDecomposition
```


The transpose-dual column form, returning `H`, a unimodular `V` satisfying
\(M V = H\), the rank, and pivot metadata. **Notes:** WASM returns a
`HermiteNormalFormDecomposition` object.

### smith_normal_form

<a id="entry-presentation_swift_matrix_canonical_forms_capability_algebra_smith_normal_form_api_matrix_operations_matrix_smith_normal_form"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_smithnormalform.8f12c4b9688e"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func smithNormalForm() -> UniffiSmithNormalFormDecomposition
```


Returns the canonical integer Smith normal form `D`, unimodular transformations
`U` and `V` satisfying \(U M V = D\), the rank, and the invariant factors including
trailing zeros. The nonnegative positive prefix is divisibility-ordered. Every
result is verified for diagonal shape, divisibility, the exact certificate, and
unimodularity of both transformations before return. **Notes:** WASM returns a
`SmithNormalFormDecomposition` object with the getters documented below.

### integer_cokernel_structure

<a id="entry-presentation_swift_matrix_canonical_forms_capability_algebra_integer_cokernel_structure_api_matrix_operations_matrix_integer_cokernel_structure"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_integercokernelstructure.eedc8e2f2d6d"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func integerCokernelStructure() -> UniffiIntegerCokernelData
```


Returns the free rank and nontrivial torsion invariant factors of
`Z^m / M Z^n`. **Notes:** WASM returns an `IntegerCokernelData` object.

### smith

<a id="entry-presentation_swift_matrix_canonical_forms_capability_algebra_smith_api_results_smithnormalformdecomposition_smith"></a>
<a id="placement-placement.swift.swift_object.uniffismithnormalformdecomposition_smith.c0a431630649"></a>
<p class="symi-entry-owner">UniffiSmithNormalFormDecomposition method</p>

```swift signature
func smith() -> UniffiMatrix
```


### row_transformation

<a id="entry-presentation_swift_matrix_canonical_forms_capability_algebra_row_transformation_api_results_smithnormalformdecomposition_row_transformation"></a>
<a id="placement-placement.swift.swift_object.uniffismithnormalformdecomposition_rowtransformation.fd4d7867eef5"></a>
<p class="symi-entry-owner">UniffiSmithNormalFormDecomposition method</p>

```swift signature
func rowTransformation() -> UniffiMatrix
```


### column_transformation

<a id="entry-presentation_swift_matrix_canonical_forms_capability_algebra_column_transformation_api_results_smithnormalformdecomposition_column_transformation"></a>
<a id="placement-placement.swift.swift_object.uniffismithnormalformdecomposition_columntransformation.f57ef026d390"></a>
<p class="symi-entry-owner">UniffiSmithNormalFormDecomposition method</p>

```swift signature
func columnTransformation() -> UniffiMatrix
```


### smith_invariant_factors

### free_rank

<a id="entry-presentation_swift_matrix_canonical_forms_capability_algebra_free_rank_api_results_integercokerneldata_free_rank"></a>
<a id="placement-placement.swift.swift_object.uniffiintegercokerneldata_freerank.55f161ee19c3"></a>
<p class="symi-entry-owner">UniffiIntegerCokernelData method</p>

```swift signature
func freeRank() -> UInt64
```


### torsion_invariant_factors

<a id="entry-presentation_swift_matrix_canonical_forms_capability_algebra_torsion_invariant_factors_api_results_integercokerneldata_torsion_invariant_factors"></a>
<a id="placement-placement.swift.swift_object.uniffiintegercokerneldata_torsioninvariantfactors.5ca19d04444a"></a>
<p class="symi-entry-owner">UniffiIntegerCokernelData method</p>

```swift signature
func torsionInvariantFactors() -> [UniffiExpression]
```


### integer_kernel_basis

<a id="entry-presentation_swift_matrix_canonical_forms_capability_algebra_integer_kernel_basis_api_matrix_operations_matrix_integer_kernel_basis"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_integerkernelbasis.e889877e3636"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func integerKernelBasis() -> [UniffiMatrix]
```


A canonical basis of the integer kernel \(\{x \in \mathbb{Z}^n : M x = 0\}\), returned as
column matrices.

### integer_row_lattice_basis

<a id="entry-presentation_swift_matrix_canonical_forms_capability_algebra_integer_row_lattice_basis_api_matrix_operations_matrix_integer_row_lattice_basis"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_integerrowlatticebasis.6e5b82d21c83"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func integerRowLatticeBasis() -> [UniffiMatrix]
```


The nonzero rows of the row Hermite form, returned as row matrices; these form
the canonical basis of the integer row lattice.

### integer_image_lattice_basis

<a id="entry-presentation_swift_matrix_canonical_forms_capability_algebra_integer_image_lattice_basis_api_matrix_operations_matrix_integer_image_lattice_basis"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_integerimagelatticebasis.d83919f36d6a"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func integerImageLatticeBasis() -> [UniffiMatrix]
```


The nonzero columns of the column Hermite form, returned as column matrices;
these form the canonical basis of `M Z^n`.

### hermite

<a id="entry-presentation_swift_matrix_canonical_forms_capability_algebra_hermite_api_results_hermitenormalformdecomposition_hermite"></a>
<a id="placement-placement.swift.swift_object.uniffihermitenormalformdecomposition_hermite.91fdd7e3561d"></a>
<p class="symi-entry-owner">UniffiHermiteNormalFormDecomposition method</p>

```swift signature
func hermite() -> UniffiMatrix
```


### transformation

### pivot_columns

<a id="entry-presentation_swift_matrix_canonical_forms_capability_algebra_pivot_columns_api_results_hermitenormalformdecomposition_pivot_columns"></a>
<a id="placement-placement.swift.swift_object.uniffihermitenormalformdecomposition_pivotcolumns.6515a6f95d4e"></a>
<p class="symi-entry-owner">UniffiHermiteNormalFormDecomposition method</p>

```swift signature
func pivotColumns() -> [UInt64]
```


The `rank` getter reuses the matrix `rank` heading above.


## Example


## Additional API

### invariant_factors

<a id="entry-presentation_swift_matrix_canonical_forms_capability_algebra_invariant_factors_api_results_rationalcanonicalform_invariant_factors"></a>
<a id="placement-placement.swift.swift_object.uniffirationalcanonicalform_invariantfactors.b71e616e9a67"></a>
<p class="symi-entry-owner">UniffiRationalCanonicalForm method</p>

```swift signature
func invariantFactors() -> [UniffiExpression]
```

The certified invariant factors, monic and ordered by divisibility.

### invariant_factors

<a id="entry-presentation_swift_matrix_canonical_forms_capability_algebra_invariant_factors_api_results_smithnormalformdecomposition_invariant_factors"></a>
<a id="placement-placement.swift.swift_object.uniffismithnormalformdecomposition_invariantfactors.f66390cfec57"></a>
<p class="symi-entry-owner">UniffiSmithNormalFormDecomposition method</p>

```swift signature
func invariantFactors() -> [UniffiExpression]
```

The certified invariant factors, monic and ordered by divisibility.

### transformation

<a id="entry-presentation_swift_matrix_canonical_forms_capability_algebra_transformation_api_results_hermitenormalformdecomposition_transformation"></a>
<a id="placement-placement.swift.swift_object.uniffihermitenormalformdecomposition_transformation.5f85a0030596"></a>
<p class="symi-entry-owner">UniffiHermiteNormalFormDecomposition method</p>

```swift signature
func transformation() -> UniffiMatrix
```

The unimodular transformation `U` satisfying `U * matrix == H`.

### transformation

<a id="entry-presentation_swift_matrix_canonical_forms_capability_algebra_transformation_api_partial_differential_equations_partialdifferentialequationcanonicalizationresult_transformation"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationcanonicalizationresult_transformation.e6d1a1488442"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCanonicalizationResult method</p>

```swift signature
func transformation() -> UniffiPartialDifferentialEquationTransformationResult?
```

The verified coordinate transformation of a successful canonicalization.

