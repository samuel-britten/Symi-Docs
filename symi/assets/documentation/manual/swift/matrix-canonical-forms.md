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

<a id="placement-placement.swift.swift_object.uniffimatrix_rationalcanonicalform.7b4daab24b35"></a>
`UniffiMatrix.rationalCanonicalForm(variable: String) -> UniffiRationalCanonicalForm`


Returns the certified Frobenius canonical form over the rationals. Its invariant factors are
monic and ordered by divisibility, and `similarity` satisfies
\(\operatorname{matrix}\,\operatorname{similarity} = \operatorname{similarity}\,\operatorname{canonical\_form}\) exactly.

### rational_canonical_form (result class)

<a id="placement-placement.swift.swift_object.uniffimatrix_rationalcanonicalform.7b4daab24b35"></a>
`UniffiMatrix.rationalCanonicalForm(variable: String) -> UniffiRationalCanonicalForm`


### canonical_form

<a id="placement-placement.swift.swift_object.uniffirationalcanonicalform_canonicalform.6c5103ed459c"></a>
`UniffiRationalCanonicalForm.canonicalForm() -> UniffiMatrix`


### invariant_factors

<a id="placement-placement.swift.swift_object.uniffirationalcanonicalform_invariantfactors.b71e616e9a67"></a>
`UniffiRationalCanonicalForm.invariantFactors() -> [UniffiExpression]`

<a id="placement-placement.swift.swift_object.uniffismithnormalformdecomposition_invariantfactors.f66390cfec57"></a>
`UniffiSmithNormalFormDecomposition.invariantFactors() -> [UniffiExpression]`


The `similarity`, `minimal_polynomial`, and `characteristic_polynomial` getters return the
corresponding certified fields documented by their shared headings above.

### hermite_normal_form

<a id="placement-placement.swift.swift_object.uniffimatrix_hermitenormalform.16925cab8962"></a>
`UniffiMatrix.hermiteNormalForm() -> UniffiHermiteNormalFormDecomposition`


Returns the canonical row-oriented Hermite normal form `H`, a unimodular
transformation `U` satisfying \(U M = H\), the rank, and the strictly increasing
pivot-column indices. Entries must be exact integers. Every result is verified
for Hermite shape, the certificate identity, and unimodularity before return.
**Notes:** WASM returns a `HermiteNormalFormDecomposition` object with the
getters documented below.

### column_hermite_normal_form

<a id="placement-placement.swift.swift_object.uniffimatrix_columnhermitenormalform.45ba72ee7456"></a>
`UniffiMatrix.columnHermiteNormalForm() -> UniffiHermiteNormalFormDecomposition`


The transpose-dual column form, returning `H`, a unimodular `V` satisfying
\(M V = H\), the rank, and pivot metadata. **Notes:** WASM returns a
`HermiteNormalFormDecomposition` object.

### smith_normal_form

<a id="placement-placement.swift.swift_object.uniffimatrix_smithnormalform.8f12c4b9688e"></a>
`UniffiMatrix.smithNormalForm() -> UniffiSmithNormalFormDecomposition`


Returns the canonical integer Smith normal form `D`, unimodular transformations
`U` and `V` satisfying \(U M V = D\), the rank, and the invariant factors including
trailing zeros. The nonnegative positive prefix is divisibility-ordered. Every
result is verified for diagonal shape, divisibility, the exact certificate, and
unimodularity of both transformations before return. **Notes:** WASM returns a
`SmithNormalFormDecomposition` object with the getters documented below.

### integer_cokernel_structure

<a id="placement-placement.swift.swift_object.uniffimatrix_integercokernelstructure.eedc8e2f2d6d"></a>
`UniffiMatrix.integerCokernelStructure() -> UniffiIntegerCokernelData`


Returns the free rank and nontrivial torsion invariant factors of
`Z^m / M Z^n`. **Notes:** WASM returns an `IntegerCokernelData` object.

### smith

<a id="placement-placement.swift.swift_object.uniffismithnormalformdecomposition_smith.c0a431630649"></a>
`UniffiSmithNormalFormDecomposition.smith() -> UniffiMatrix`


### row_transformation

<a id="placement-placement.swift.swift_object.uniffismithnormalformdecomposition_rowtransformation.fd4d7867eef5"></a>
`UniffiSmithNormalFormDecomposition.rowTransformation() -> UniffiMatrix`


### column_transformation

<a id="placement-placement.swift.swift_object.uniffismithnormalformdecomposition_columntransformation.f57ef026d390"></a>
`UniffiSmithNormalFormDecomposition.columnTransformation() -> UniffiMatrix`


### smith_invariant_factors

### free_rank

<a id="placement-placement.swift.swift_object.uniffiintegercokerneldata_freerank.55f161ee19c3"></a>
`UniffiIntegerCokernelData.freeRank() -> UInt64`


### torsion_invariant_factors

<a id="placement-placement.swift.swift_object.uniffiintegercokerneldata_torsioninvariantfactors.5ca19d04444a"></a>
`UniffiIntegerCokernelData.torsionInvariantFactors() -> [UniffiExpression]`


### integer_kernel_basis

<a id="placement-placement.swift.swift_object.uniffimatrix_integerkernelbasis.e889877e3636"></a>
`UniffiMatrix.integerKernelBasis() -> [UniffiMatrix]`


A canonical basis of the integer kernel \(\{x \in \mathbb{Z}^n : M x = 0\}\), returned as
column matrices.

### integer_row_lattice_basis

<a id="placement-placement.swift.swift_object.uniffimatrix_integerrowlatticebasis.6e5b82d21c83"></a>
`UniffiMatrix.integerRowLatticeBasis() -> [UniffiMatrix]`


The nonzero rows of the row Hermite form, returned as row matrices; these form
the canonical basis of the integer row lattice.

### integer_image_lattice_basis

<a id="placement-placement.swift.swift_object.uniffimatrix_integerimagelatticebasis.d83919f36d6a"></a>
`UniffiMatrix.integerImageLatticeBasis() -> [UniffiMatrix]`


The nonzero columns of the column Hermite form, returned as column matrices;
these form the canonical basis of `M Z^n`.

### hermite

<a id="placement-placement.swift.swift_object.uniffihermitenormalformdecomposition_hermite.91fdd7e3561d"></a>
`UniffiHermiteNormalFormDecomposition.hermite() -> UniffiMatrix`


### transformation

<a id="placement-placement.swift.swift_object.uniffihermitenormalformdecomposition_transformation.5f85a0030596"></a>
`UniffiHermiteNormalFormDecomposition.transformation() -> UniffiMatrix`

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationcanonicalizationresult_transformation.e6d1a1488442"></a>
`UniffiPartialDifferentialEquationCanonicalizationResult.transformation() -> UniffiPartialDifferentialEquationTransformationResult?`


### pivot_columns

<a id="placement-placement.swift.swift_object.uniffihermitenormalformdecomposition_pivotcolumns.6515a6f95d4e"></a>
`UniffiHermiteNormalFormDecomposition.pivotColumns() -> [UInt64]`


The `rank` getter reuses the matrix `rank` heading above.


## Example

