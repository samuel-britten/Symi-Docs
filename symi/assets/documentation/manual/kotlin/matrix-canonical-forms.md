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

<a id="entry-presentation_kotlin_matrix_canonical_forms_capability_algebra_rational_canonical_form_api_matrix_operations_matrix_rational_canonical_form"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_rationalcanonicalform.fc7e6603f66e"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun rationalCanonicalForm(variable: kotlin.String): UniffiRationalCanonicalForm
```


Returns the certified Frobenius canonical form over the rationals. Its invariant factors are
monic and ordered by divisibility, and `similarity` satisfies
\(\operatorname{matrix}\,\operatorname{similarity} = \operatorname{similarity}\,\operatorname{canonical\_form}\) exactly.

### rational_canonical_form (result class)

<a id="entry-presentation_kotlin_matrix_canonical_forms_capability_algebra_rational_canonical_form_api_matrix_operations_matrix_rational_canonical_form"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_rationalcanonicalform.fc7e6603f66e"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun rationalCanonicalForm(variable: kotlin.String): UniffiRationalCanonicalForm
```


### canonical_form

<a id="entry-presentation_kotlin_matrix_canonical_forms_capability_algebra_canonical_form_api_results_rationalcanonicalform_canonical_form"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffirationalcanonicalform_canonicalform.20e6020a9227"></a>
<p class="symi-entry-owner">UniffiRationalCanonicalForm method</p>

```kotlin signature
fun canonicalForm(): UniffiMatrix
```


### invariant_factors

The `similarity`, `minimal_polynomial`, and `characteristic_polynomial` getters return the
corresponding certified fields documented by their shared headings above.

### hermite_normal_form

<a id="entry-presentation_kotlin_matrix_canonical_forms_capability_algebra_hermite_normal_form_api_matrix_operations_matrix_hermite_normal_form"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_hermitenormalform.7b57a10440bc"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun hermiteNormalForm(): UniffiHermiteNormalFormDecomposition
```


Returns the canonical row-oriented Hermite normal form `H`, a unimodular
transformation `U` satisfying \(U M = H\), the rank, and the strictly increasing
pivot-column indices. Entries must be exact integers. Every result is verified
for Hermite shape, the certificate identity, and unimodularity before return.
**Notes:** WASM returns a `HermiteNormalFormDecomposition` object with the
getters documented below.

### column_hermite_normal_form

<a id="entry-presentation_kotlin_matrix_canonical_forms_capability_algebra_column_hermite_normal_form_api_matrix_operations_matrix_column_hermite_normal_form"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_columnhermitenormalform.167a4f47f2e2"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun columnHermiteNormalForm(): UniffiHermiteNormalFormDecomposition
```


The transpose-dual column form, returning `H`, a unimodular `V` satisfying
\(M V = H\), the rank, and pivot metadata. **Notes:** WASM returns a
`HermiteNormalFormDecomposition` object.

### smith_normal_form

<a id="entry-presentation_kotlin_matrix_canonical_forms_capability_algebra_smith_normal_form_api_matrix_operations_matrix_smith_normal_form"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_smithnormalform.1d0be782b3b8"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun smithNormalForm(): UniffiSmithNormalFormDecomposition
```


Returns the canonical integer Smith normal form `D`, unimodular transformations
`U` and `V` satisfying \(U M V = D\), the rank, and the invariant factors including
trailing zeros. The nonnegative positive prefix is divisibility-ordered. Every
result is verified for diagonal shape, divisibility, the exact certificate, and
unimodularity of both transformations before return. **Notes:** WASM returns a
`SmithNormalFormDecomposition` object with the getters documented below.

### integer_cokernel_structure

<a id="entry-presentation_kotlin_matrix_canonical_forms_capability_algebra_integer_cokernel_structure_api_matrix_operations_matrix_integer_cokernel_structure"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_integercokernelstructure.d232fa16f98d"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun integerCokernelStructure(): UniffiIntegerCokernelData
```


Returns the free rank and nontrivial torsion invariant factors of
`Z^m / M Z^n`. **Notes:** WASM returns an `IntegerCokernelData` object.

### smith

<a id="entry-presentation_kotlin_matrix_canonical_forms_capability_algebra_smith_api_results_smithnormalformdecomposition_smith"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffismithnormalformdecomposition_smith.8a6d66f42368"></a>
<p class="symi-entry-owner">UniffiSmithNormalFormDecomposition method</p>

```kotlin signature
fun smith(): UniffiMatrix
```


### row_transformation

<a id="entry-presentation_kotlin_matrix_canonical_forms_capability_algebra_row_transformation_api_results_smithnormalformdecomposition_row_transformation"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffismithnormalformdecomposition_rowtransformation.2a6edeff08d3"></a>
<p class="symi-entry-owner">UniffiSmithNormalFormDecomposition method</p>

```kotlin signature
fun rowTransformation(): UniffiMatrix
```


### column_transformation

<a id="entry-presentation_kotlin_matrix_canonical_forms_capability_algebra_column_transformation_api_results_smithnormalformdecomposition_column_transformation"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffismithnormalformdecomposition_columntransformation.6e255fc4f09c"></a>
<p class="symi-entry-owner">UniffiSmithNormalFormDecomposition method</p>

```kotlin signature
fun columnTransformation(): UniffiMatrix
```


### smith_invariant_factors

### free_rank

<a id="entry-presentation_kotlin_matrix_canonical_forms_capability_algebra_free_rank_api_results_integercokerneldata_free_rank"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiintegercokerneldata_freerank.c01a82194b98"></a>
<p class="symi-entry-owner">UniffiIntegerCokernelData method</p>

```kotlin signature
fun freeRank(): kotlin.ULong
```


### torsion_invariant_factors

<a id="entry-presentation_kotlin_matrix_canonical_forms_capability_algebra_torsion_invariant_factors_api_results_integercokerneldata_torsion_invariant_factors"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiintegercokerneldata_torsioninvariantfactors.ab1f7afab8be"></a>
<p class="symi-entry-owner">UniffiIntegerCokernelData method</p>

```kotlin signature
fun torsionInvariantFactors(): List<UniffiExpression>
```


### integer_kernel_basis

<a id="entry-presentation_kotlin_matrix_canonical_forms_capability_algebra_integer_kernel_basis_api_matrix_operations_matrix_integer_kernel_basis"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_integerkernelbasis.51919ec297af"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun integerKernelBasis(): List<UniffiMatrix>
```


A canonical basis of the integer kernel \(\{x \in \mathbb{Z}^n : M x = 0\}\), returned as
column matrices.

### integer_row_lattice_basis

<a id="entry-presentation_kotlin_matrix_canonical_forms_capability_algebra_integer_row_lattice_basis_api_matrix_operations_matrix_integer_row_lattice_basis"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_integerrowlatticebasis.2be738c80e61"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun integerRowLatticeBasis(): List<UniffiMatrix>
```


The nonzero rows of the row Hermite form, returned as row matrices; these form
the canonical basis of the integer row lattice.

### integer_image_lattice_basis

<a id="entry-presentation_kotlin_matrix_canonical_forms_capability_algebra_integer_image_lattice_basis_api_matrix_operations_matrix_integer_image_lattice_basis"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_integerimagelatticebasis.4a2c0c0715f8"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun integerImageLatticeBasis(): List<UniffiMatrix>
```


The nonzero columns of the column Hermite form, returned as column matrices;
these form the canonical basis of `M Z^n`.

### hermite

<a id="entry-presentation_kotlin_matrix_canonical_forms_capability_algebra_hermite_api_results_hermitenormalformdecomposition_hermite"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffihermitenormalformdecomposition_hermite.15d9b54470a1"></a>
<p class="symi-entry-owner">UniffiHermiteNormalFormDecomposition method</p>

```kotlin signature
fun hermite(): UniffiMatrix
```


### transformation

### pivot_columns

<a id="entry-presentation_kotlin_matrix_canonical_forms_capability_algebra_pivot_columns_api_results_hermitenormalformdecomposition_pivot_columns"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffihermitenormalformdecomposition_pivotcolumns.dd5720a5996d"></a>
<p class="symi-entry-owner">UniffiHermiteNormalFormDecomposition method</p>

```kotlin signature
fun pivotColumns(): List<kotlin.ULong>
```


The `rank` getter reuses the matrix `rank` heading above.


## Example


## Additional API

### invariant_factors

<a id="entry-presentation_kotlin_matrix_canonical_forms_capability_algebra_invariant_factors_api_results_rationalcanonicalform_invariant_factors"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffirationalcanonicalform_invariantfactors.d00f51e929e8"></a>
<p class="symi-entry-owner">UniffiRationalCanonicalForm method</p>

```kotlin signature
fun invariantFactors(): List<UniffiExpression>
```

The certified invariant factors, monic and ordered by divisibility.

### invariant_factors

<a id="entry-presentation_kotlin_matrix_canonical_forms_capability_algebra_invariant_factors_api_results_smithnormalformdecomposition_invariant_factors"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffismithnormalformdecomposition_invariantfactors.d4344bc748b4"></a>
<p class="symi-entry-owner">UniffiSmithNormalFormDecomposition method</p>

```kotlin signature
fun invariantFactors(): List<UniffiExpression>
```

The certified invariant factors, monic and ordered by divisibility.

### transformation

<a id="entry-presentation_kotlin_matrix_canonical_forms_capability_algebra_transformation_api_results_hermitenormalformdecomposition_transformation"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffihermitenormalformdecomposition_transformation.fb751487d247"></a>
<p class="symi-entry-owner">UniffiHermiteNormalFormDecomposition method</p>

```kotlin signature
fun transformation(): UniffiMatrix
```

The unimodular transformation `U` satisfying `U * matrix == H`.

### transformation

<a id="entry-presentation_kotlin_matrix_canonical_forms_capability_algebra_transformation_api_partial_differential_equations_partialdifferentialequationcanonicalizationresult_transformation"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationcanonicalizationresult_transformation.1b0f087e8ace"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCanonicalizationResult method</p>

```kotlin signature
fun transformation(): UniffiPartialDifferentialEquationTransformationResult?
```

The verified coordinate transformation of a successful canonicalization.

