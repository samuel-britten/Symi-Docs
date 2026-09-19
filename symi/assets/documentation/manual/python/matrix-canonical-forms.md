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

<a id="entry-presentation_python_matrix_canonical_forms_capability_algebra_rational_canonical_form_api_matrix_operations_matrix_rational_canonical_form"></a>
<a id="placement-placement.python.python_class.matrix_rational_canonical_form.a83bbc378fda"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
rational_canonical_form(variable: VariableLike) -> RationalCanonicalForm
```


Returns the certified Frobenius canonical form over the rationals. Its invariant factors are
monic and ordered by divisibility, and `similarity` satisfies
\(\operatorname{matrix}\,\operatorname{similarity} = \operatorname{similarity}\,\operatorname{canonical\_form}\) exactly.

### rational_canonical_form (result class)

<a id="entry-presentation_python_matrix_canonical_forms_capability_algebra_rational_canonical_form_api_matrix_operations_matrix_rational_canonical_form"></a>
<a id="placement-placement.python.python_class.matrix_rational_canonical_form.a83bbc378fda"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
rational_canonical_form(variable: VariableLike) -> RationalCanonicalForm
```


### canonical_form

<a id="entry-presentation_python_matrix_canonical_forms_capability_algebra_canonical_form_api_results_rationalcanonicalform_canonical_form"></a>
<a id="placement-placement.python.python_class.rationalcanonicalform_canonical_form.c95066d8356a"></a>
<p class="symi-entry-owner">RationalCanonicalForm property</p>

```python signature
canonical_form: Matrix
```


### invariant_factors

The `similarity`, `minimal_polynomial`, and `characteristic_polynomial` getters return the
corresponding certified fields documented by their shared headings above.

### hermite_normal_form

<a id="entry-presentation_python_matrix_canonical_forms_capability_algebra_hermite_normal_form_api_matrix_operations_matrix_hermite_normal_form"></a>
<a id="placement-placement.python.python_class.matrix_hermite_normal_form.6e0943f7cb13"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
hermite_normal_form() -> tuple[Matrix, Matrix, int, list[int]]
```


Returns the canonical row-oriented Hermite normal form `H`, a unimodular
transformation `U` satisfying \(U M = H\), the rank, and the strictly increasing
pivot-column indices. Entries must be exact integers. Every result is verified
for Hermite shape, the certificate identity, and unimodularity before return.
**Notes:** WASM returns a `HermiteNormalFormDecomposition` object with the
getters documented below.

### column_hermite_normal_form

<a id="entry-presentation_python_matrix_canonical_forms_capability_algebra_column_hermite_normal_form_api_matrix_operations_matrix_column_hermite_normal_form"></a>
<a id="placement-placement.python.python_class.matrix_column_hermite_normal_form.494657fe3753"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
column_hermite_normal_form() -> tuple[Matrix, Matrix, int, list[int]]
```


The transpose-dual column form, returning `H`, a unimodular `V` satisfying
\(M V = H\), the rank, and pivot metadata. **Notes:** WASM returns a
`HermiteNormalFormDecomposition` object.

### smith_normal_form

<a id="entry-presentation_python_matrix_canonical_forms_capability_algebra_smith_normal_form_api_matrix_operations_matrix_smith_normal_form"></a>
<a id="placement-placement.python.python_class.matrix_smith_normal_form.5e31028e67eb"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
smith_normal_form() -> tuple[Matrix, Matrix, Matrix, int, list[Expression]]
```


Returns the canonical integer Smith normal form `D`, unimodular transformations
`U` and `V` satisfying \(U M V = D\), the rank, and the invariant factors including
trailing zeros. The nonnegative positive prefix is divisibility-ordered. Every
result is verified for diagonal shape, divisibility, the exact certificate, and
unimodularity of both transformations before return. **Notes:** WASM returns a
`SmithNormalFormDecomposition` object with the getters documented below.

### integer_cokernel_structure

<a id="entry-presentation_python_matrix_canonical_forms_capability_algebra_integer_cokernel_structure_api_matrix_operations_matrix_integer_cokernel_structure"></a>
<a id="placement-placement.python.python_class.matrix_integer_cokernel_structure.46ed9149d406"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
integer_cokernel_structure() -> tuple[int, list[Expression]]
```


Returns the free rank and nontrivial torsion invariant factors of
`Z^m / M Z^n`. **Notes:** WASM returns an `IntegerCokernelData` object.

### smith

*Not exposed by the Python bindings. Available as [`UniffiSmithNormalFormDecomposition.smith`](/symi/kotlin/matrix-canonical-forms#smith) in Kotlin, [`UniffiSmithNormalFormDecomposition.smith`](/symi/swift/matrix-canonical-forms#smith) in Swift, [`api::results::SmithNormalFormDecomposition::smith`](/symi/rust/matrix-canonical-forms#smith) in Rust.*


### row_transformation

*Not exposed by the Python bindings. Available as [`UniffiSmithNormalFormDecomposition.rowTransformation`](/symi/kotlin/matrix-canonical-forms#row_transformation) in Kotlin, [`UniffiSmithNormalFormDecomposition.rowTransformation`](/symi/swift/matrix-canonical-forms#row_transformation) in Swift, [`api::results::SmithNormalFormDecomposition::row_transformation`](/symi/rust/matrix-canonical-forms#row_transformation) in Rust.*


### column_transformation

*Not exposed by the Python bindings. Available as [`UniffiSmithNormalFormDecomposition.columnTransformation`](/symi/kotlin/matrix-canonical-forms#column_transformation) in Kotlin, [`UniffiSmithNormalFormDecomposition.columnTransformation`](/symi/swift/matrix-canonical-forms#column_transformation) in Swift, [`api::results::SmithNormalFormDecomposition::column_transformation`](/symi/rust/matrix-canonical-forms#column_transformation) in Rust.*


### smith_invariant_factors

### free_rank

*Not exposed by the Python bindings. Available as [`UniffiIntegerCokernelData.freeRank`](/symi/kotlin/matrix-canonical-forms#free_rank) in Kotlin, [`UniffiIntegerCokernelData.freeRank`](/symi/swift/matrix-canonical-forms#free_rank) in Swift, [`api::results::IntegerCokernelData::free_rank`](/symi/rust/matrix-canonical-forms#free_rank) in Rust.*


### torsion_invariant_factors

*Not exposed by the Python bindings. Available as [`UniffiIntegerCokernelData.torsionInvariantFactors`](/symi/kotlin/matrix-canonical-forms#torsion_invariant_factors) in Kotlin, [`UniffiIntegerCokernelData.torsionInvariantFactors`](/symi/swift/matrix-canonical-forms#torsion_invariant_factors) in Swift, [`api::results::IntegerCokernelData::torsion_invariant_factors`](/symi/rust/matrix-canonical-forms#torsion_invariant_factors) in Rust.*


### integer_kernel_basis

<a id="entry-presentation_python_matrix_canonical_forms_capability_algebra_integer_kernel_basis_api_matrix_operations_matrix_integer_kernel_basis"></a>
<a id="placement-placement.python.python_class.matrix_integer_kernel_basis.39ab05072ba4"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
integer_kernel_basis() -> list[Matrix]
```


A canonical basis of the integer kernel \(\{x \in \mathbb{Z}^n : M x = 0\}\), returned as
column matrices.

### integer_row_lattice_basis

<a id="entry-presentation_python_matrix_canonical_forms_capability_algebra_integer_row_lattice_basis_api_matrix_operations_matrix_integer_row_lattice_basis"></a>
<a id="placement-placement.python.python_class.matrix_integer_row_lattice_basis.256b909cfbed"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
integer_row_lattice_basis() -> list[Matrix]
```


The nonzero rows of the row Hermite form, returned as row matrices; these form
the canonical basis of the integer row lattice.

### integer_image_lattice_basis

<a id="entry-presentation_python_matrix_canonical_forms_capability_algebra_integer_image_lattice_basis_api_matrix_operations_matrix_integer_image_lattice_basis"></a>
<a id="placement-placement.python.python_class.matrix_integer_image_lattice_basis.8445cfbcb469"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
integer_image_lattice_basis() -> list[Matrix]
```


The nonzero columns of the column Hermite form, returned as column matrices;
these form the canonical basis of `M Z^n`.

### hermite

*Not exposed by the Python bindings. Available as [`UniffiHermiteNormalFormDecomposition.hermite`](/symi/kotlin/matrix-canonical-forms#hermite) in Kotlin, [`UniffiHermiteNormalFormDecomposition.hermite`](/symi/swift/matrix-canonical-forms#hermite) in Swift, [`api::results::HermiteNormalFormDecomposition::hermite`](/symi/rust/matrix-canonical-forms#hermite) in Rust.*


### transformation

### pivot_columns

*Not exposed by the Python bindings. Available as [`UniffiHermiteNormalFormDecomposition.pivotColumns`](/symi/kotlin/matrix-canonical-forms#pivot_columns) in Kotlin, [`UniffiHermiteNormalFormDecomposition.pivotColumns`](/symi/swift/matrix-canonical-forms#pivot_columns) in Swift, [`api::results::HermiteNormalFormDecomposition::pivot_columns`](/symi/rust/matrix-canonical-forms#pivot_columns) in Rust.*


The `rank` getter reuses the matrix `rank` heading above.


## Example

Integer and polynomial canonical forms carry their transforming matrices.

```python
import symi

integer_matrix = symi.Matrix([[2, 4, 4], [-6, 6, 12], [10, 4, 16]])
smith, row_transformation, column_transformation, rank, invariant_factors = (
    integer_matrix.smith_normal_form()
)

print(rank)
print(invariant_factors)
print(integer_matrix.integer_cokernel_structure())
```


## Additional API

### invariant_factors

<a id="entry-presentation_python_matrix_canonical_forms_capability_algebra_invariant_factors_api_results_rationalcanonicalform_invariant_factors"></a>
<a id="placement-placement.python.python_class.rationalcanonicalform_invariant_factors.e2626e62fc61"></a>
<p class="symi-entry-owner">RationalCanonicalForm property</p>

```python signature
invariant_factors: list[Expression]
```

The certified invariant factors, monic and ordered by divisibility.

### transformation

<a id="entry-presentation_python_matrix_canonical_forms_capability_algebra_transformation_api_partial_differential_equations_partialdifferentialequationcanonicalizationresult_transformation"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationcanonicalizationresult_transformation.d064b2135ddc"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCanonicalizationResult property</p>

```python signature
transformation: Optional[PartialDifferentialEquationTransformationResult]
```

The verified coordinate transformation of a successful canonicalization.

