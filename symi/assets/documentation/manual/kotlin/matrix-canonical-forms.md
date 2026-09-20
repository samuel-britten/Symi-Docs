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

<a id="entry-presentation_kotlin_api_matrix_rational_canonical_form"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_rationalcanonicalform.fc7e6603f66e"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun rationalCanonicalForm(variable: kotlin.String): UniffiRationalCanonicalForm
```


Returns the certified Frobenius canonical form over the rationals. Its invariant factors are
monic and ordered by divisibility, and `similarity` satisfies
\(\operatorname{matrix}\,\operatorname{similarity} = \operatorname{similarity}\,\operatorname{canonical\_form}\) exactly.

### rational_canonical_form (result class)

<a id="entry-presentation_kotlin_api_matrix_rational_canonical_form"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_rationalcanonicalform.fc7e6603f66e"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun rationalCanonicalForm(variable: kotlin.String): UniffiRationalCanonicalForm
```


### canonical_form

<a id="entry-presentation_kotlin_api_rationalcanonicalform_canonical_form"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffirationalcanonicalform_canonicalform.20e6020a9227"></a>
<p class="symi-entry-owner">UniffiRationalCanonicalForm method</p>

```kotlin signature
fun canonicalForm(): UniffiMatrix
```

The Frobenius canonical form of the decomposed matrix.

### invariant_factors

The `similarity`, `minimal_polynomial`, and `characteristic_polynomial` getters return the
corresponding certified fields documented by their shared headings above.

### hermite_normal_form

<a id="entry-presentation_kotlin_api_matrix_hermite_normal_form"></a>
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

<a id="entry-presentation_kotlin_api_matrix_column_hermite_normal_form"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_columnhermitenormalform.167a4f47f2e2"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun columnHermiteNormalForm(): UniffiHermiteNormalFormDecomposition
```


The transpose-dual column form, returning `H`, a unimodular `V` satisfying
\(M V = H\), the rank, and pivot metadata. **Notes:** WASM returns a
`HermiteNormalFormDecomposition` object.

### smith_normal_form

<a id="entry-presentation_kotlin_api_matrix_smith_normal_form"></a>
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

<a id="entry-presentation_kotlin_api_matrix_integer_cokernel_structure"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_integercokernelstructure.d232fa16f98d"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun integerCokernelStructure(): UniffiIntegerCokernelData
```


Returns the free rank and nontrivial torsion invariant factors of
`Z^m / M Z^n`. **Notes:** WASM returns an `IntegerCokernelData` object.

### smith

<a id="entry-presentation_kotlin_api_smithnormalformdecomposition_smith"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffismithnormalformdecomposition_smith.8a6d66f42368"></a>
<p class="symi-entry-owner">UniffiSmithNormalFormDecomposition method</p>

```kotlin signature
fun smith(): UniffiMatrix
```

The Smith normal form `S`.

### row_transformation

<a id="entry-presentation_kotlin_api_smithnormalformdecomposition_row_transformation"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffismithnormalformdecomposition_rowtransformation.2a6edeff08d3"></a>
<p class="symi-entry-owner">UniffiSmithNormalFormDecomposition method</p>

```kotlin signature
fun rowTransformation(): UniffiMatrix
```

The unimodular row transformation `U` satisfying `U * matrix * V == S`.

### column_transformation

<a id="entry-presentation_kotlin_api_smithnormalformdecomposition_column_transformation"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffismithnormalformdecomposition_columntransformation.6e255fc4f09c"></a>
<p class="symi-entry-owner">UniffiSmithNormalFormDecomposition method</p>

```kotlin signature
fun columnTransformation(): UniffiMatrix
```

The unimodular column transformation `V` satisfying `U * matrix * V == S`.

### smith_invariant_factors

### free_rank

### torsion_invariant_factors

### integer_kernel_basis

<a id="entry-presentation_kotlin_api_matrix_integer_kernel_basis"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_integerkernelbasis.51919ec297af"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun integerKernelBasis(): List<UniffiMatrix>
```


A canonical basis of the integer kernel \(\{x \in \mathbb{Z}^n : M x = 0\}\), returned as
column matrices.

### integer_row_lattice_basis

<a id="entry-presentation_kotlin_api_matrix_integer_row_lattice_basis"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_integerrowlatticebasis.2be738c80e61"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun integerRowLatticeBasis(): List<UniffiMatrix>
```


The nonzero rows of the row Hermite form, returned as row matrices; these form
the canonical basis of the integer row lattice.

### integer_image_lattice_basis

<a id="entry-presentation_kotlin_api_matrix_integer_image_lattice_basis"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_integerimagelatticebasis.4a2c0c0715f8"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun integerImageLatticeBasis(): List<UniffiMatrix>
```


The nonzero columns of the column Hermite form, returned as column matrices;
these form the canonical basis of `M Z^n`.

### hermite

<a id="entry-presentation_kotlin_api_hermitenormalformdecomposition_hermite"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffihermitenormalformdecomposition_hermite.15d9b54470a1"></a>
<p class="symi-entry-owner">UniffiHermiteNormalFormDecomposition method</p>

```kotlin signature
fun hermite(): UniffiMatrix
```

The Hermite normal form `H`.

### transformation

<a id="entry-presentation_kotlin_api_hermitenormalformdecomposition_transformation"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffihermitenormalformdecomposition_transformation.fb751487d247"></a>
<p class="symi-entry-owner">UniffiHermiteNormalFormDecomposition method</p>

```kotlin signature
fun transformation(): UniffiMatrix
```


### pivot_columns

The `rank` getter reuses the matrix `rank` heading above.


<a id="entry-presentation_kotlin_api_hermitenormalformdecomposition_pivot_columns"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffihermitenormalformdecomposition_pivotcolumns.dd5720a5996d"></a>
<p class="symi-entry-owner">UniffiHermiteNormalFormDecomposition method</p>

```kotlin signature
fun pivotColumns(): List<kotlin.ULong>
```

The `rank` getter reuses the matrix `rank` heading above.

## Example


## Additional API

### HermiteNormalFormDecomposition

#### HermiteNormalFormDecomposition.rank

<a id="entry-presentation_kotlin_api_hermitenormalformdecomposition_rank"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffihermitenormalformdecomposition_rank.4699573d3177"></a>
<p class="symi-entry-owner">UniffiHermiteNormalFormDecomposition method</p>

```kotlin signature
fun rank(): kotlin.ULong
```

Rank via Bareiss fraction-free elimination.

### RationalCanonicalForm

#### RationalCanonicalForm.characteristic_polynomial

<a id="entry-presentation_kotlin_api_rationalcanonicalform_characteristic_polynomial"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffirationalcanonicalform_characteristicpolynomial.9d3983183ffc"></a>
<p class="symi-entry-owner">UniffiRationalCanonicalForm method</p>

```kotlin signature
fun characteristicPolynomial(): UniffiExpression
```

\(\det(\lambda I - M)\) as a polynomial in the named variable.

#### RationalCanonicalForm.invariant_factors

<a id="entry-presentation_kotlin_api_rationalcanonicalform_invariant_factors"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffirationalcanonicalform_invariantfactors.d00f51e929e8"></a>
<p class="symi-entry-owner">UniffiRationalCanonicalForm method</p>

```kotlin signature
fun invariantFactors(): List<UniffiExpression>
```

The certified invariant factors, monic and ordered by divisibility.

#### RationalCanonicalForm.minimal_polynomial

<a id="entry-presentation_kotlin_api_rationalcanonicalform_minimal_polynomial"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffirationalcanonicalform_minimalpolynomial.2fc03c27e348"></a>
<p class="symi-entry-owner">UniffiRationalCanonicalForm method</p>

```kotlin signature
fun minimalPolynomial(): UniffiExpression
```

The monic minimal polynomial over the rationals. The matrix must have rational entries.

#### RationalCanonicalForm.similarity

<a id="entry-presentation_kotlin_api_rationalcanonicalform_similarity"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffirationalcanonicalform_similarity.a791d80567bb"></a>
<p class="symi-entry-owner">UniffiRationalCanonicalForm method</p>

```kotlin signature
fun similarity(): UniffiMatrix
```

The certified change of basis `S`, satisfying `matrix * S == S * canonical_form`.

### SmithNormalFormDecomposition

#### SmithNormalFormDecomposition.invariant_factors

<a id="entry-presentation_kotlin_api_smithnormalformdecomposition_invariant_factors"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffismithnormalformdecomposition_invariantfactors.d4344bc748b4"></a>
<p class="symi-entry-owner">UniffiSmithNormalFormDecomposition method</p>

```kotlin signature
fun invariantFactors(): List<UniffiExpression>
```

The certified invariant factors, monic and ordered by divisibility.

#### SmithNormalFormDecomposition.rank

<a id="entry-presentation_kotlin_api_smithnormalformdecomposition_rank"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffismithnormalformdecomposition_rank.9cd28780bbf1"></a>
<p class="symi-entry-owner">UniffiSmithNormalFormDecomposition method</p>

```kotlin signature
fun rank(): kotlin.ULong
```

Rank via Bareiss fraction-free elimination.

