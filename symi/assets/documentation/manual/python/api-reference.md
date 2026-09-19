# Complete placement index

## CylindricalAlgebraicDecomposition

<a id="entry-presentation_python_polynomials_capability_algebra_cylindrical_algebraic_decomposition_api_cylindricalalgebraicdecomposition"></a>
<a id="placement-placement.python.python_class.cylindricalalgebraicdecomposition.6f69ff9d363f"></a>
<p class="symi-entry-owner">CylindricalAlgebraicDecomposition constructor</p>

```python signature
CylindricalAlgebraicDecomposition(
    expressions: Iterable[ExpressionLike],
    variables: Iterable[VariableLike],
    equational_constraints: list[int] = [],
)
```

Decompose real space into sign-invariant cells for the given polynomials, in the given variable order.

## Matrix

<a id="entry-presentation_python_linear_algebra_capability_algebra_matrix_api_matrix"></a>
<a id="placement-placement.python.python_class.matrix.f54d88232d81"></a>
<p class="symi-entry-owner">Matrix constructor</p>

```python signature
Matrix(rows: Any)
```

Build a matrix from ordered rows. Direct Python construction and the facade module function use the shared default context. The raw wasm-bindgen compatibility layer retains `(rows, columns, flat_entries)`; new JavaScript code should use the nested facade form.

## RationalCanonicalForm

<a id="entry-presentation_python_linear_algebra_capability_algebra_rational_canonical_form_api_results_rationalcanonicalform"></a>
<a id="placement-placement.python.python_class.rationalcanonicalform.5ca9682302fa"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class RationalCanonicalForm
```

Returns the certified Frobenius canonical form over the rationals. Its invariant factors are monic and ordered by divisibility, and `similarity` satisfies \(\operatorname{matrix}\,\operatorname{similarity} = \operatorname{similarity}\,\operatorname{canonical\_form}\) exactly.

## __add__

<a id="entry-presentation_python_linear_algebra_capability_algebra_add_unresolved"></a>
<a id="placement-placement.python.python_class.matrix_add.583870cd6186"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
__add__(other: Matrix) -> Matrix
```

Entrywise sum `self + other` of two matrices of the same shape.

## __getattribute__

<a id="entry-presentation_python_linear_algebra_capability_algebra_getattribute_unresolved"></a>
<a id="placement-placement.python.python_class.matrix_getattribute.db356f719d90"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
__getattribute__(name: str) -> Any
```

Reject attribute access on a stale object before delegating to the default lookup.

## __getitem__

<a id="entry-presentation_python_linear_algebra_capability_algebra_getitem_unresolved"></a>
<a id="placement-placement.python.python_class.matrix_getitem.beea523b18e1"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
__getitem__(index: tuple[int, int]) -> Expression
```

The entry at the `(row, column)` index pair.

## __mul__

<a id="entry-presentation_python_linear_algebra_capability_algebra_mul_unresolved"></a>
<a id="placement-placement.python.python_class.matrix_mul.b606f52568d3"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
__mul__(other: Matrix) -> Matrix
```

Matrix product `self * other`, or scaling when `other` is a scalar.

## __repr__

<a id="entry-presentation_python_linear_algebra_capability_algebra_repr_unresolved"></a>
<a id="placement-placement.python.python_class.matrix_repr.bcdc21e31fb5"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
__repr__() -> str
```

The `repr()` text, which reports staleness instead of failing.

## __sub__

<a id="entry-presentation_python_linear_algebra_capability_algebra_sub_unresolved"></a>
<a id="placement-placement.python.python_class.matrix_sub.fda31a9db39d"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
__sub__(other: Matrix) -> Matrix
```

Entrywise difference `self - other` of two matrices of the same shape.

## adjugate

<a id="entry-presentation_python_linear_algebra_capability_algebra_adjugate_api_matrix_adjugate"></a>
<a id="placement-placement.python.python_class.matrix_adjugate.d708788c7c2c"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
adjugate() -> Matrix
```

The classical adjoint (transpose of the cofactor matrix); satisfies \(M\operatorname{adj}(M) = \det(M) I\).

## canonical_form

<a id="entry-presentation_python_matrix_canonical_forms_capability_algebra_canonical_form_api_results_rationalcanonicalform_canonical_form"></a>
<a id="placement-placement.python.python_class.rationalcanonicalform_canonical_form.c95066d8356a"></a>
<p class="symi-entry-owner">RationalCanonicalForm property</p>

```python signature
canonical_form: Matrix
```

The Frobenius canonical form of the decomposed matrix.

## cell_count

<a id="entry-presentation_python_cad_capability_algebra_cell_count_api_cylindricalalgebraicdecomposition_cell_count"></a>
<a id="placement-placement.python.python_class.cylindricalalgebraicdecomposition_cell_count.ce7f976fc884"></a>
<p class="symi-entry-owner">CylindricalAlgebraicDecomposition method</p>

```python signature
cell_count() -> int
```

The number of full-dimensional cells partitioning \(\mathbb{R}^n\).

## cell_dimension

<a id="entry-presentation_python_cad_capability_algebra_cell_dimension_api_cylindricalalgebraicdecomposition_cell_dimension"></a>
<a id="placement-placement.python.python_class.cylindricalalgebraicdecomposition_cell_dimension.e876ea130017"></a>
<p class="symi-entry-owner">CylindricalAlgebraicDecomposition method</p>

```python signature
cell_dimension(index: int) -> int
```

The geometric dimension of the full cell as a subset of \(\mathbb{R}^n\) (the number of sector coordinates along its cylindrical stack).

## cell_kind

<a id="entry-presentation_python_cad_capability_algebra_cell_kind_api_cylindricalalgebraicdecomposition_cell_kind"></a>
<a id="placement-placement.python.python_class.cylindricalalgebraicdecomposition_cell_kind.afe9210a3869"></a>
<p class="symi-entry-owner">CylindricalAlgebraicDecomposition method</p>

```python signature
cell_kind(index: int) -> str
```

`"section"` or `"sector"` — whether the cell is a root section or an open interval in its top variable.

## cell_sample_point

<a id="entry-presentation_python_cad_capability_algebra_cell_sample_point_api_cylindricalalgebraicdecomposition_cell_sample_point"></a>
<a id="placement-placement.python.python_class.cylindricalalgebraicdecomposition_cell_sample_point.3dbe888269b7"></a>
<p class="symi-entry-owner">CylindricalAlgebraicDecomposition method</p>

```python signature
cell_sample_point(index: int) -> list[float]
```

The coordinates of the full cell's sample point as floats — a numeric view via the multi-precision evaluator, not a decision.

## cell_sign_vector

<a id="entry-presentation_python_cad_capability_algebra_cell_sign_vector_api_cylindricalalgebraicdecomposition_cell_sign_vector"></a>
<a id="placement-placement.python.python_class.cylindricalalgebraicdecomposition_cell_sign_vector.ef6a2c072c0f"></a>
<p class="symi-entry-owner">CylindricalAlgebraicDecomposition method</p>

```python signature
cell_sign_vector(index: int) -> list[int]
```

The exact sign (\(-1\), \(0\), or \(+1\)) of each input polynomial on the full cell, in input order.

## change_monomial_order

<a id="entry-presentation_python_polynomials_capability_algebra_change_monomial_order_api_algebra_session_change_monomial_order"></a>
<a id="placement-placement.python.python_module.module_change_monomial_order.25caa642bc5b"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
change_monomial_order(
    basis: Iterable[ExpressionLike],
    variables: Iterable[VariableLike],
    source_order: str,
    target_order: str,
) -> Optional[list[Expression]]
```

Convert a Gröbner basis of a zero-dimensional ideal from `source_order` to `target_order` by FGLM (Faugère–Gianni–Lazard–Mora) — linear algebra in the finite-dimensional quotient ring \(\mathbb{Q}[\text{variables}]/I\), far cheaper than computing the target basis directly (the msolve route to a lexicographic basis is a cheap `degrevlex` basis followed by this conversion).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_change_monomial_order.ba2a72818a67"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.change_monomial_order</code></p>

```python signature
change_monomial_order(
    basis: Iterable[ExpressionLike],
    variables: Iterable[VariableLike],
    source_order: str,
    target_order: str,
) -> Optional[list[Expression]]
```

</details>

## characteristic_polynomial

<a id="entry-presentation_python_linear_algebra_capability_algebra_characteristic_polynomial_api_matrix_operations_matrix_characteristic_polynomial"></a>
<a id="placement-placement.python.python_class.matrix_characteristic_polynomial.5c65acc6ead0"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
characteristic_polynomial(variable: Any) -> Expression
```

\(\det(\lambda I - M)\) as a polynomial in the named variable.

## characteristic_polynomial

<a id="entry-presentation_python_linear_algebra_capability_algebra_characteristic_polynomial_api_results_rationalcanonicalform_characteristic_polynomial"></a>
<a id="placement-placement.python.python_class.rationalcanonicalform_characteristic_polynomial.826282413414"></a>
<p class="symi-entry-owner">RationalCanonicalForm property</p>

```python signature
characteristic_polynomial: Expression
```

\(\det(\lambda I - M)\) as a polynomial in the named variable.

## coefficient

<a id="entry-presentation_python_polynomials_capability_algebra_coefficient_api_algebra_session_coefficient"></a>
<a id="placement-placement.python.python_module.module_coefficient.c4dd39a9eb50"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
coefficient(
    input_expression: ExpressionLike,
    variable: VariableLike,
    power: int,
) -> Expression
```

Coefficient of `variable^power`; integer 0 when the term is absent. Errors on non-polynomial input.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_coefficient.40e75eb53350"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.coefficient</code></p>

```python signature
coefficient(
    input_expression: ExpressionLike,
    variable: VariableLike,
    power: int,
) -> Expression
```

</details>

## coefficient

<a id="entry-presentation_python_polynomials_capability_algebra_coefficient_api_partial_differential_equations_partialdifferentialequationjetcoefficient_coefficient"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationjetcoefficient_coefficient.8e9e167c35d1"></a>
<p class="symi-entry-owner">PartialDifferentialEquationJetCoefficient property</p>

```python signature
coefficient: Expression
```

The exact coefficient expression.

## coefficient

<a id="entry-presentation_python_polynomials_capability_algebra_coefficient_api_partial_differential_equations_partialdifferentialequationprincipalcoefficient_coefficient"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationprincipalcoefficient_coefficient.2b29c8576cbc"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPrincipalCoefficient property</p>

```python signature
coefficient: Expression
```

The raw coefficient expression, before mixed terms are halved.

## cofactor_matrix

<a id="entry-presentation_python_linear_algebra_capability_algebra_cofactor_matrix_api_matrix_cofactor_matrix"></a>
<a id="placement-placement.python.python_class.matrix_cofactor_matrix.dcf3b762a329"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
cofactor_matrix() -> Matrix
```

The matrix of cofactors, whose transpose is the adjugate.

## column_hermite_normal_form

<a id="entry-presentation_python_matrix_canonical_forms_capability_algebra_column_hermite_normal_form_api_matrix_operations_matrix_column_hermite_normal_form"></a>
<a id="placement-placement.python.python_class.matrix_column_hermite_normal_form.494657fe3753"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
column_hermite_normal_form() -> tuple[Matrix, Matrix, int, list[int]]
```

The transpose-dual column form, returning `H`, a unimodular `V` satisfying \(M V = H\), the rank, and pivot metadata. Notes: WASM returns a `hermite_normal_form_decomposition` object.

## columns

<a id="entry-presentation_python_matrix_construction_capability_algebra_columns_api_matrix_columns"></a>
<a id="placement-placement.python.python_class.matrix_columns.195d51432dc4"></a>
<p class="symi-entry-owner">Matrix property</p>

```python signature
columns: int
```

Number of columns.

## cosine

<a id="entry-presentation_python_matrix_functions_capability_algebra_cosine_api_matrix_operations_matrix_cosine"></a>
<a id="placement-placement.python.python_class.matrix_cosine.5dc77fea11d2"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
cosine() -> Matrix
```

The primary matrix cosine `cos(M)`, evaluated exactly through the certified Jordan decomposition and the trigonometric identity certificate.

## degree

<a id="entry-presentation_python_polynomials_capability_algebra_degree_api_algebra_session_degree"></a>
<a id="placement-placement.python.python_module.module_degree.255ff853162b"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
degree(
    input_expression: ExpressionLike,
    variable: VariableLike,
) -> Optional[int]
```

Degree in `variable`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_degree.bb4b6eca0c20"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.degree</code></p>

```python signature
degree(
    input_expression: ExpressionLike,
    variable: VariableLike,
) -> Optional[int]
```

</details>

## determinant

<a id="entry-presentation_python_linear_algebra_capability_algebra_determinant_api_matrix_determinant"></a>
<a id="placement-placement.python.python_class.matrix_determinant.b887c342bd78"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
determinant() -> Expression
```

Fraction-free (Berkowitz/Bareiss) determinant of a square matrix.

## eigenvalues

<a id="entry-presentation_python_linear_algebra_capability_algebra_eigenvalues_api_matrix_eigenvalues"></a>
<a id="placement-placement.python.python_class.matrix_eigenvalues.26e263ce0c69"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
eigenvalues() -> list[Expression]
```

Eigenvalues with multiplicity, via the characteristic polynomial and the root finder; eigenvalues the root finder cannot close remain as exact first-class `polynomial_root` values.

## eigenvectors

<a id="entry-presentation_python_linear_algebra_capability_algebra_eigenvectors_api_matrix_operations_matrix_eigenvectors"></a>
<a id="placement-placement.python.python_class.matrix_eigenvectors.7d29c9a5d872"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
eigenvectors() -> list[tuple[Expression, list[Matrix]]]
```

For each eigenvalue, a basis of its eigenspace as column matrices. Notes: WASM returns `eigenpair` objects with `eigenvalue`/`vectors` getters.

## elimination_ideal

<a id="entry-presentation_python_polynomials_capability_algebra_elimination_ideal_api_algebra_session_elimination_ideal"></a>
<a id="placement-placement.python.python_module.module_elimination_ideal.2e1c0485c830"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
elimination_ideal(
    generators: Iterable[ExpressionLike],
    variables: Iterable[VariableLike],
    eliminate: Iterable[VariableLike],
) -> Optional[list[Expression]]
```

A Gröbner basis of the elimination ideal \(\langle\operatorname{generators}\rangle \cap \mathbb{Q}[\text{surviving variables}]\), projecting away the variables named in `eliminate` via the Elimination Theorem (a block order ranks the eliminated variables high and the generators free of them are kept).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_elimination_ideal.bf56d3bbbcfa"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.elimination_ideal</code></p>

```python signature
elimination_ideal(
    generators: Iterable[ExpressionLike],
    variables: Iterable[VariableLike],
    eliminate: Iterable[VariableLike],
) -> Optional[list[Expression]]
```

</details>

## exponential

<a id="entry-presentation_python_matrix_functions_capability_algebra_exponential_api_matrix_operations_matrix_exponential"></a>
<a id="placement-placement.python.python_class.matrix_exponential.7d6e158a0a7b"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
exponential() -> Matrix
```

The matrix exponential `exp(M)`, evaluated through the certified Jordan decomposition. Declines on inputs whose eigenvalues cannot be certified exactly.

## groebner_basis

<a id="entry-presentation_python_polynomials_capability_algebra_groebner_basis_api_algebra_session_groebner_basis"></a>
<a id="placement-placement.python.python_module.module_groebner_basis.4a0b56aabfeb"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
groebner_basis(
    generators: Iterable[ExpressionLike],
    variables: Iterable[VariableLike],
    order: Optional[str] = None,
) -> Optional[list[Expression]]
```

The canonical reduced Gröbner basis of the ideal `<generators>` under the named monomial order — monic, autoreduced, and sorted, so it is unique for the `(ideal, order)` pair. `None` when any generator is outside \(\mathbb{Q}[\text{variables}]\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_groebner_basis.4684f56c6f16"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.groebner_basis</code></p>

```python signature
groebner_basis(
    generators: Iterable[ExpressionLike],
    variables: Iterable[VariableLike],
    order: Optional[str] = None,
) -> Optional[list[Expression]]
```

</details>

## hermite_normal_form

<a id="entry-presentation_python_matrix_canonical_forms_capability_algebra_hermite_normal_form_api_matrix_operations_matrix_hermite_normal_form"></a>
<a id="placement-placement.python.python_class.matrix_hermite_normal_form.6e0943f7cb13"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
hermite_normal_form() -> tuple[Matrix, Matrix, int, list[int]]
```

Returns the canonical row-oriented Hermite normal form `H`, a unimodular transformation `U` satisfying \(U M = H\), the rank, and the strictly increasing pivot-column indices. Entries must be exact integers. Every result is verified for Hermite shape, the certificate identity, and unimodularity before return. Notes: WASM returns a `hermite_normal_form_decomposition` object carrying the same four results as getters.

## hyperbolic_cosine

<a id="entry-presentation_python_matrix_functions_capability_algebra_hyperbolic_cosine_api_matrix_operations_matrix_hyperbolic_cosine"></a>
<a id="placement-placement.python.python_class.matrix_hyperbolic_cosine.00c37ee8827b"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
hyperbolic_cosine() -> Matrix
```

The primary hyperbolic matrix cosine `cosh(M)`, evaluated exactly through the certified Jordan decomposition and the hyperbolic identity certificate.

## hyperbolic_sine

<a id="entry-presentation_python_matrix_functions_capability_algebra_hyperbolic_sine_api_matrix_operations_matrix_hyperbolic_sine"></a>
<a id="placement-placement.python.python_class.matrix_hyperbolic_sine.85e1bc19a042"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
hyperbolic_sine() -> Matrix
```

The primary hyperbolic matrix sine `sinh(M)`, evaluated exactly through the certified Jordan decomposition. The result is certified together with the hyperbolic matrix cosine by `cosh(M)^2 - sinh(M)^2 = I`.

## ideal_intersection

<a id="entry-presentation_python_polynomials_capability_algebra_ideal_intersection_api_algebra_session_ideal_intersection"></a>
<a id="placement-placement.python.python_module.module_ideal_intersection.2d3eef499cec"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
ideal_intersection(
    generators_left: Iterable[ExpressionLike],
    generators_right: Iterable[ExpressionLike],
    variables: Iterable[VariableLike],
    order: Optional[str] = None,
) -> Optional[list[Expression]]
```

A generating set of the ideal intersection \(I \cap J\), computed by the standard tag-variable elimination construction \(t I + (1-t) J\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_ideal_intersection.b6fbace27013"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.ideal_intersection</code></p>

```python signature
ideal_intersection(
    generators_left: Iterable[ExpressionLike],
    generators_right: Iterable[ExpressionLike],
    variables: Iterable[VariableLike],
    order: Optional[str] = None,
) -> Optional[list[Expression]]
```

</details>

## ideal_membership

<a id="entry-presentation_python_polynomials_capability_algebra_ideal_membership_api_algebra_session_ideal_membership"></a>
<a id="placement-placement.python.python_module.module_ideal_membership.69c4c3618634"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
ideal_membership(
    element: ExpressionLike,
    generators: Iterable[ExpressionLike],
    variables: Iterable[VariableLike],
    order: Optional[str] = None,
) -> Optional[bool]
```

Whether `element` lies in the ideal `<generators>`, decided by reducing it to its normal form modulo the Gröbner basis (zero exactly when it is a member).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_ideal_membership.4dd014fcdee3"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.ideal_membership</code></p>

```python signature
ideal_membership(
    element: ExpressionLike,
    generators: Iterable[ExpressionLike],
    variables: Iterable[VariableLike],
    order: Optional[str] = None,
) -> Optional[bool]
```

</details>

## ideal_product

<a id="entry-presentation_python_polynomials_capability_algebra_ideal_product_api_algebra_session_ideal_product"></a>
<a id="placement-placement.python.python_module.module_ideal_product.975bfdbced05"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
ideal_product(
    generators_left: Iterable[ExpressionLike],
    generators_right: Iterable[ExpressionLike],
    variables: Iterable[VariableLike],
    order: Optional[str] = None,
) -> Optional[list[Expression]]
```

A Gröbner basis of the ideal product \(I J\), generated by all pairwise products of the two generator lists. `None` on a non-\(\mathbb{Q}[\text{variables}]\) generator.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_ideal_product.398939b3253f"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.ideal_product</code></p>

```python signature
ideal_product(
    generators_left: Iterable[ExpressionLike],
    generators_right: Iterable[ExpressionLike],
    variables: Iterable[VariableLike],
    order: Optional[str] = None,
) -> Optional[list[Expression]]
```

</details>

## ideal_sum

<a id="entry-presentation_python_polynomials_capability_algebra_ideal_sum_api_algebra_session_ideal_sum"></a>
<a id="placement-placement.python.python_module.module_ideal_sum.c9e7495dc415"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
ideal_sum(
    generators_left: Iterable[ExpressionLike],
    generators_right: Iterable[ExpressionLike],
    variables: Iterable[VariableLike],
    order: Optional[str] = None,
) -> Optional[list[Expression]]
```

A Gröbner basis of the ideal sum `I + J`, the ideal generated by the two generator lists together. `None` on a non-\(\mathbb{Q}[\text{variables}]\) generator.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_ideal_sum.a325e677c420"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.ideal_sum</code></p>

```python signature
ideal_sum(
    generators_left: Iterable[ExpressionLike],
    generators_right: Iterable[ExpressionLike],
    variables: Iterable[VariableLike],
    order: Optional[str] = None,
) -> Optional[list[Expression]]
```

</details>

## implicitize

<a id="entry-presentation_python_polynomials_capability_algebra_implicitize_api_algebra_session_implicitize"></a>
<a id="placement-placement.python.python_module.module_implicitize.5dc8d52f5239"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
implicitize(
    coordinates: Iterable[VariableLike],
    parameters: Iterable[VariableLike],
    parametric_expressions: Iterable[ExpressionLike],
) -> Optional[list[Expression]]
```

The implicit ideal of a parametric curve or surface \(x_i = f_i(\operatorname{parameters})\) (the i-th coordinate paired with the i-th parametric expression), returned as a generator list over \(\mathbb{Q}[\text{coordinates}]\) — the elimination of the parameters (Cox–Little–O'Shea ch. 3).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_implicitize.3f4088cb5f55"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.implicitize</code></p>

```python signature
implicitize(
    coordinates: Iterable[VariableLike],
    parameters: Iterable[VariableLike],
    parametric_expressions: Iterable[ExpressionLike],
) -> Optional[list[Expression]]
```

</details>

## integer_cokernel_structure

<a id="entry-presentation_python_matrix_canonical_forms_capability_algebra_integer_cokernel_structure_api_matrix_operations_matrix_integer_cokernel_structure"></a>
<a id="placement-placement.python.python_class.matrix_integer_cokernel_structure.46ed9149d406"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
integer_cokernel_structure() -> tuple[int, list[Expression]]
```

Returns the free rank and nontrivial torsion invariant factors of `Z^m / M Z^n`.

## integer_image_lattice_basis

<a id="entry-presentation_python_matrix_canonical_forms_capability_algebra_integer_image_lattice_basis_api_matrix_operations_matrix_integer_image_lattice_basis"></a>
<a id="placement-placement.python.python_class.matrix_integer_image_lattice_basis.8445cfbcb469"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
integer_image_lattice_basis() -> list[Matrix]
```

The nonzero columns of the column Hermite form, returned as column matrices; these form the canonical basis of `M Z^n`.

## integer_kernel_basis

<a id="entry-presentation_python_matrix_canonical_forms_capability_algebra_integer_kernel_basis_api_matrix_operations_matrix_integer_kernel_basis"></a>
<a id="placement-placement.python.python_class.matrix_integer_kernel_basis.39ab05072ba4"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
integer_kernel_basis() -> list[Matrix]
```

A canonical basis of the integer kernel \(\{x \in \mathbb{Z}^n : M x = 0\}\), returned as column matrices.

## integer_row_lattice_basis

<a id="entry-presentation_python_matrix_canonical_forms_capability_algebra_integer_row_lattice_basis_api_matrix_operations_matrix_integer_row_lattice_basis"></a>
<a id="placement-placement.python.python_class.matrix_integer_row_lattice_basis.256b909cfbed"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
integer_row_lattice_basis() -> list[Matrix]
```

The nonzero rows of the row Hermite form, returned as row matrices; these form the canonical basis of the integer row lattice.

## invariant_factors

<a id="entry-presentation_python_matrix_canonical_forms_capability_algebra_invariant_factors_api_results_rationalcanonicalform_invariant_factors"></a>
<a id="placement-placement.python.python_class.rationalcanonicalform_invariant_factors.e2626e62fc61"></a>
<p class="symi-entry-owner">RationalCanonicalForm property</p>

```python signature
invariant_factors: list[Expression]
```

The certified invariant factors, monic and ordered by divisibility.

## inverse

<a id="entry-presentation_python_linear_algebra_capability_algebra_inverse_api_matrix_inverse"></a>
<a id="placement-placement.python.python_class.matrix_inverse.95246f393e6d"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
inverse() -> Matrix
```

Inverse via the adjugate; raises on singular input.

## isolate_real_roots

<a id="entry-presentation_python_polynomials_capability_algebra_isolate_real_roots_api_solving_session_isolate_real_roots"></a>
<a id="placement-placement.python.python_module.module_isolate_real_roots.685131c37adf"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
isolate_real_roots(
    input_expression: ExpressionLike,
    variable: VariableLike,
) -> list[tuple[Expression, Expression]]
```

One `(lower, upper)` rational isolating interval per distinct real root, sorted ascending; a collapsed pair `(r, r)` marks an exact rational root. Requires a non-zero univariate polynomial with rational coefficients. Notes: WASM returns `isolating_interval` objects with `lower`/`upper` getters.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_isolate_real_roots.e790d9fc2a3c"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.isolate_real_roots</code></p>

```python signature
isolate_real_roots(
    input_expression: ExpressionLike,
    variable: VariableLike,
) -> list[tuple[Expression, Expression]]
```

</details>

## jordan_decomposition

<a id="entry-presentation_python_matrix_functions_capability_algebra_jordan_decomposition_api_matrix_operations_matrix_jordan_decomposition"></a>
<a id="placement-placement.python.python_class.matrix_jordan_decomposition.53a3aeac78c1"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
jordan_decomposition() -> tuple[Matrix, Matrix, list[tuple[Expression, int]]]
```

The Jordan decomposition returned as `(similarity, jordan_form, blocks)` with \(\operatorname{similarity} \operatorname{jordan\_form} \operatorname{similarity}^{-1} = M\), where `blocks` lists each Jordan block as an `(eigenvalue, size)` pair. Every root is certified over an exact algebraic field. Notes: WASM returns a `jordan_decomposition` result class with `similarity`/`jordan_form`/`blocks` getters, each block a `jordan_block` with `eigenvalue`/`size` getters.

## leading_coefficient

<a id="entry-presentation_python_polynomials_capability_algebra_leading_coefficient_api_algebra_session_leading_coefficient"></a>
<a id="placement-placement.python.python_module.module_leading_coefficient.30ccbe4ce993"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
leading_coefficient(
    input_expression: ExpressionLike,
    variable: VariableLike,
) -> Expression
```

Coefficient of the highest power of `variable`; may contain the other free variables. Errors on non-polynomial or zero input.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_leading_coefficient.41a3fe2ba55f"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.leading_coefficient</code></p>

```python signature
leading_coefficient(
    input_expression: ExpressionLike,
    variable: VariableLike,
) -> Expression
```

</details>

## logarithm

<a id="entry-presentation_python_matrix_functions_capability_algebra_logarithm_api_matrix_operations_matrix_logarithm"></a>
<a id="placement-placement.python.python_class.matrix_logarithm.a05822635c14"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
logarithm() -> Matrix
```

The principal matrix logarithm `log(M)`.

## lower_upper_decomposition

<a id="entry-presentation_python_linear_algebra_capability_algebra_lower_upper_decomposition_api_matrix_operations_matrix_lower_upper_decomposition"></a>
<a id="placement-placement.python.python_class.matrix_lower_upper_decomposition.683e9b0dc74c"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
lower_upper_decomposition() -> tuple[Matrix, Matrix, Matrix]
```

Partial-pivoting LU decomposition returned as `(permutation, lower, upper)` with \(\operatorname{permutation} M = \operatorname{lower}\,\operatorname{upper}\).

## matrix

<a id="entry-presentation_python_matrix_construction_capability_algebra_matrix_api_session_matrix"></a>
<a id="placement-placement.python.python_class.context_matrix.2fa42d359b64"></a>
<p class="symi-entry-owner">Explicit context</p>

```python signature
matrix(rows: Any) -> Matrix
```

Build a matrix from ordered rows. Direct Python construction and the facade module function use the shared default context. The raw wasm-bindgen compatibility layer retains `(rows, columns, flat_entries)`; new JavaScript code should use the nested facade form.

## matrix

<a id="entry-presentation_python_matrix_construction_capability_algebra_matrix_api_partial_differential_equations_partialdifferentialequationprincipalpart_matrix"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationprincipalpart_matrix.b3778ce1892c"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPrincipalPart property</p>

```python signature
matrix: Matrix
```

The symmetric principal matrix whose quadratic form is the exact principal symbol.

## matrix_diagonal

<a id="entry-presentation_python_matrix_construction_capability_algebra_matrix_diagonal_api_session_matrix_diagonal"></a>
<a id="placement-placement.python.python_module.module_matrix_diagonal.2c66b85938ea"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
matrix_diagonal(entries: Iterable[ExpressionLike]) -> Matrix
```

Square matrix with the given main diagonal and zeros elsewhere; the empty list raises.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_matrix_diagonal.8199af723487"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.matrix_diagonal</code></p>

```python signature
matrix_diagonal(entries: Iterable[ExpressionLike]) -> Matrix
```

</details>

## matrix_identity

<a id="entry-presentation_python_matrix_construction_capability_algebra_matrix_identity_api_session_matrix_identity"></a>
<a id="placement-placement.python.python_module.module_matrix_identity.98fcb671a0ca"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
matrix_identity(size: int) -> Matrix
```

The \(\mathit{size}\times\mathit{size}\) identity; size 0 raises.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_matrix_identity.f33c94ef789a"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.matrix_identity</code></p>

```python signature
matrix_identity(size: int) -> Matrix
```

</details>

## matrix_zero

<a id="entry-presentation_python_matrix_construction_capability_algebra_matrix_zero_api_session_matrix_zero"></a>
<a id="placement-placement.python.python_module.module_matrix_zero.898b7b05a3f0"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
matrix_zero(rows: int, columns: int) -> Matrix
```

The \(\mathit{rows}\times\mathit{columns}\) zero matrix.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_matrix_zero.82b28b613f59"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.matrix_zero</code></p>

```python signature
matrix_zero(rows: int, columns: int) -> Matrix
```

</details>

## minimal_polynomial

<a id="entry-presentation_python_linear_algebra_capability_algebra_minimal_polynomial_api_matrix_operations_matrix_minimal_polynomial"></a>
<a id="placement-placement.python.python_class.matrix_minimal_polynomial.f6b7179bce87"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
minimal_polynomial(variable: Any) -> Expression
```

The monic minimal polynomial over the rationals. The matrix must have rational entries.

## minimal_polynomial

<a id="entry-presentation_python_linear_algebra_capability_algebra_minimal_polynomial_api_results_rationalcanonicalform_minimal_polynomial"></a>
<a id="placement-placement.python.python_class.rationalcanonicalform_minimal_polynomial.cb3f7ef16a61"></a>
<p class="symi-entry-owner">RationalCanonicalForm property</p>

```python signature
minimal_polynomial: Expression
```

The monic minimal polynomial over the rationals. The matrix must have rational entries.

## nullspace_basis

<a id="entry-presentation_python_linear_algebra_capability_algebra_nullspace_basis_api_matrix_operations_matrix_nullspace_basis"></a>
<a id="placement-placement.python.python_class.matrix_nullspace_basis.68f2a4bc4fb1"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
nullspace_basis() -> list[Matrix]
```

A basis of the kernel, as column matrices; empty list for full column rank.

## polynomial_gcd

<a id="entry-presentation_python_polynomials_capability_algebra_polynomial_gcd_api_algebra_session_polynomial_gcd"></a>
<a id="placement-placement.python.python_module.module_polynomial_gcd.39fa5994e834"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
polynomial_gcd(
    a: ExpressionLike,
    b: ExpressionLike,
    variable: VariableLike,
) -> Expression
```

Greatest common divisor of the two expressions as polynomials in `variable` (primitive, with the core's sign normalisation).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_polynomial_gcd.30ceebd4dcdb"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.polynomial_gcd</code></p>

```python signature
polynomial_gcd(
    a: ExpressionLike,
    b: ExpressionLike,
    variable: VariableLike,
) -> Expression
```

</details>

## projection_operator_used

<a id="entry-presentation_python_cad_capability_algebra_projection_operator_used_api_cylindricalalgebraicdecomposition_projection_operator_used"></a>
<a id="placement-placement.python.python_class.cylindricalalgebraicdecomposition_projection_operator_used.fd0ecd398fb8"></a>
<p class="symi-entry-owner">CylindricalAlgebraicDecomposition method</p>

```python signature
projection_operator_used() -> str
```

The projection operator the decomposition was built with: `"brown"` for the well-oriented fast path, `"lazard"` when the well-orientedness guard forced the complete fallback, `"equational_constraint"` for an equational-constraint CAD.

## rank

<a id="entry-presentation_python_linear_algebra_capability_algebra_rank_api_matrix_rank"></a>
<a id="placement-placement.python.python_class.matrix_rank.28ffc9a82f94"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
rank() -> int
```

Rank via Bareiss fraction-free elimination.

## rational_canonical_form

<a id="entry-presentation_python_matrix_canonical_forms_capability_algebra_rational_canonical_form_api_matrix_operations_matrix_rational_canonical_form"></a>
<a id="placement-placement.python.python_class.matrix_rational_canonical_form.a83bbc378fda"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
rational_canonical_form(variable: VariableLike) -> RationalCanonicalForm
```

Returns the certified Frobenius canonical form over the rationals. Its invariant factors are monic and ordered by divisibility, and `similarity` satisfies \(\operatorname{matrix}\,\operatorname{similarity} = \operatorname{similarity}\,\operatorname{canonical\_form}\) exactly.

## resultant

<a id="entry-presentation_python_polynomials_capability_algebra_resultant_api_algebra_session_resultant"></a>
<a id="placement-placement.python.python_module.module_resultant.e405fc22394a"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
resultant(
    a: ExpressionLike,
    b: ExpressionLike,
    variable: VariableLike,
) -> Expression
```

Resultant with respect to `variable`; zero exactly when the two polynomials share a root (over the algebraic closure).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_resultant.ee06f245060a"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.resultant</code></p>

```python signature
resultant(
    a: ExpressionLike,
    b: ExpressionLike,
    variable: VariableLike,
) -> Expression
```

</details>

## row_reduce

<a id="entry-presentation_python_linear_algebra_capability_algebra_row_reduce_api_matrix_row_reduce"></a>
<a id="placement-placement.python.python_class.matrix_row_reduce.57833ebdc403"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
row_reduce() -> Matrix
```

Bareiss row-reduced form (fraction-free; pivots remain on the diagonal).

## rows

<a id="entry-presentation_python_matrix_construction_capability_algebra_rows_api_matrix_rows"></a>
<a id="placement-placement.python.python_class.matrix_rows.61f364edfdc5"></a>
<p class="symi-entry-owner">Matrix property</p>

```python signature
rows: int
```

Number of rows.

## scalar_multiply

<a id="entry-presentation_python_linear_algebra_capability_algebra_scalar_multiply_api_matrix_scalar_multiply"></a>
<a id="placement-placement.python.python_class.matrix_scalar_multiply.8cedfc26e893"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
scalar_multiply(scalar: Any) -> Matrix
```

Scale every entry by `scalar`.

## similarity

<a id="entry-presentation_python_matrix_functions_capability_algebra_similarity_api_results_rationalcanonicalform_similarity"></a>
<a id="placement-placement.python.python_class.rationalcanonicalform_similarity.40c9ac5f68c3"></a>
<p class="symi-entry-owner">RationalCanonicalForm property</p>

```python signature
similarity: Matrix
```

The certified change of basis `S`, satisfying `matrix * S == S * canonical_form`.

## sine

<a id="entry-presentation_python_matrix_functions_capability_algebra_sine_api_matrix_operations_matrix_sine"></a>
<a id="placement-placement.python.python_class.matrix_sine.0de13f4135d8"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
sine() -> Matrix
```

The primary matrix sine `sin(M)`, evaluated exactly through the certified Jordan decomposition. The result is certified together with the matrix cosine by `sin(M)^2 + cos(M)^2 = I`.

## smith_normal_form

<a id="entry-presentation_python_matrix_canonical_forms_capability_algebra_smith_normal_form_api_matrix_operations_matrix_smith_normal_form"></a>
<a id="placement-placement.python.python_class.matrix_smith_normal_form.5e31028e67eb"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
smith_normal_form() -> tuple[Matrix, Matrix, Matrix, int, list[Expression]]
```

Returns the canonical integer Smith normal form `D`, unimodular transformations `U` and `V` satisfying \(U M V = D\), the rank, and the invariant factors including trailing zeros. The nonnegative positive prefix is divisibility-ordered. Every result is verified for diagonal shape, divisibility, the exact certificate, and unimodularity of both transformations before return. Notes: WASM returns a `smith_normal_form_decomposition` object carrying the same results as getters.

## square_root

<a id="entry-presentation_python_matrix_functions_capability_algebra_square_root_api_matrix_operations_matrix_square_root"></a>
<a id="placement-placement.python.python_class.matrix_square_root.2ee200ff9ec2"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
square_root() -> Matrix
```

The principal matrix square root `sqrt(M)`; the result is verified to square back to `M`.

## trace

<a id="entry-presentation_python_linear_algebra_capability_algebra_trace_api_matrix_trace"></a>
<a id="placement-placement.python.python_class.matrix_trace.5f494acccb6f"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
trace() -> Expression
```

Sum of the diagonal entries of a square matrix.

## transformation

<a id="entry-presentation_python_matrix_canonical_forms_capability_algebra_transformation_api_partial_differential_equations_partialdifferentialequationcanonicalizationresult_transformation"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationcanonicalizationresult_transformation.d064b2135ddc"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCanonicalizationResult property</p>

```python signature
transformation: Optional[PartialDifferentialEquationTransformationResult]
```

The verified coordinate transformation of a successful canonicalization.

## transpose

<a id="entry-presentation_python_linear_algebra_capability_algebra_transpose_api_matrix_transpose"></a>
<a id="placement-placement.python.python_class.matrix_transpose.4c56e0021d90"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
transpose() -> Matrix
```

The transpose, with rows and columns exchanged.

## DefiniteIntegrationResult

<a id="entry-presentation_python_calculus_capability_calculus_definiteintegrationresult_api_results_definiteintegrationresult"></a>
<a id="placement-placement.python.python_class.definiteintegrationresult.6d8d92994a74"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class DefiniteIntegrationResult
```

A definite-integration outcome that keeps its verdict distinct from its value.

## NumericDefiniteIntegrationResult

<a id="entry-presentation_python_calculus_capability_numeric_definite_integration_numericdefiniteintegrationresult_api_results_numericdefiniteintegrationresult"></a>
<a id="placement-placement.python.python_class.numericdefiniteintegrationresult.da707d04f6dd"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class NumericDefiniteIntegrationResult
```

The convergence report from an explicitly requested numerical definite integral.

## continuous_domain

<a id="entry-presentation_python_calculus_capability_calculus_continuous_domain_api_assumptionscope_continuous_domain"></a>
<a id="placement-placement.python.python_class.assumptionscope_continuous_domain.ec2ba8638f35"></a>
<p class="symi-entry-owner">AssumptionScope method</p>

```python signature
continuous_domain(
    input_expression: ExpressionLike,
    variable: VariableLike,
) -> Expression
```

Return the real continuous domain using the scope's immutable assumptions.

## continuous_domain

<a id="entry-presentation_python_calculus_capability_calculus_continuous_domain_api_session_continuous_domain"></a>
<a id="placement-placement.python.python_module.module_continuous_domain.c1003e4cd9b5"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
continuous_domain(
    input_expression: ExpressionLike,
    variable: VariableLike,
) -> Expression
```

The subset of the real line on which the expression is continuous in `variable`, as a set expression. Compound rational square-root radicands are lowered to an exact univariate semialgebraic condition when supported, so, for example, `sqrt(x + 1/x - 2)` has continuous real domain `(0, infinity)`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_continuous_domain.ea8bd346dd36"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.continuous_domain</code></p>

```python signature
continuous_domain(
    input_expression: ExpressionLike,
    variable: VariableLike,
) -> Expression
```

</details>

## continuous_domain

<a id="entry-presentation_python_calculus_capability_calculus_continuous_domain_api_expression_continuous_domain"></a>
<a id="placement-placement.python.python_class.expression_continuous_domain.54925718dbca"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
continuous_domain(variable: VariableLike) -> Expression
```

The subset of the real line on which the expression is continuous in `variable`, as a set expression. Compound rational square-root radicands are lowered to an exact univariate semialgebraic condition when supported, so, for example, `sqrt(x + 1/x - 2)` has continuous real domain `(0, infinity)`.

## decline_reason

<a id="entry-presentation_python_calculus_capability_calculus_decline_reason_api_results_definiteintegrationresult_decline_reason"></a>
<a id="placement-placement.python.python_class.definiteintegrationresult_decline_reason.82b173fec92c"></a>
<p class="symi-entry-owner">DefiniteIntegrationResult property</p>

```python signature
decline_reason: Optional[str]
```

The reason, present exactly when the verdict is `declined`.

## derivative

<a id="entry-presentation_python_calculus_capability_calculus_derivative_api_session_derivative"></a>
<a id="placement-placement.python.python_module.module_derivative.08baabd8e4c8"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
derivative(
    input_expression: ExpressionLike,
    variable: Any,
    order: int = 1,
) -> Expression
```

Constructs a deferred derivative. The variable may be a name or a same-context symbol expression. Use `execute` to evaluate it.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_derivative.633b339a3392"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.derivative</code></p>

```python signature
derivative(
    input_expression: ExpressionLike,
    variable: Any,
    order: int = 1,
) -> Expression
```

</details>

## derivative

<a id="entry-presentation_python_calculus_capability_calculus_derivative_api_expression_derivative"></a>
<a id="placement-placement.python.python_class.expression_derivative.951691ecb4fa"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
derivative(variable: Any, order: int = 1) -> Expression
```

Constructs a deferred derivative. The variable may be a name or a same-context symbol expression. Use `execute` to evaluate it.

## derivative

<a id="entry-presentation_python_calculus_capability_calculus_derivative_api_undefinedfunction_derivative"></a>
<a id="placement-placement.python.python_class.undefinedfunction_derivative.580eee1c1ebe"></a>
<p class="symi-entry-owner">UndefinedFunction method</p>

```python signature
derivative(
    orders: list[int],
    arguments: Iterable[ExpressionLike],
) -> Expression
```

Constructs a deferred derivative. The variable may be a name or a same-context symbol expression. Use `execute` to evaluate it.

## differentiate

<a id="entry-presentation_python_calculus_capability_calculus_differentiate_api_session_differentiate"></a>
<a id="placement-placement.python.python_module.module_differentiate.b10bec594052"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
differentiate(
    input_expression: ExpressionLike,
    variable: Any,
) -> Expression
```

Symbolic derivative with respect to `variable`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_differentiate.6e195b56ed15"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.differentiate</code></p>

```python signature
differentiate(
    input_expression: ExpressionLike,
    variable: Any,
) -> Expression
```

</details>

## differentiate

<a id="entry-presentation_python_calculus_capability_calculus_differentiate_api_expression_differentiate"></a>
<a id="placement-placement.python.python_class.expression_differentiate.2973c32a3cc7"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
differentiate(variable: Any) -> Expression
```

Symbolic derivative with respect to `variable`.

## divergence_direction

<a id="entry-presentation_python_calculus_capability_calculus_divergence_direction_api_results_definiteintegrationresult_divergence_direction"></a>
<a id="placement-placement.python.python_class.definiteintegrationresult_divergence_direction.8fe2f7cb6aaa"></a>
<p class="symi-entry-owner">DefiniteIntegrationResult property</p>

```python signature
divergence_direction: Optional[str]
```

The signed infinity of a divergent request, when a single direction was established.

## evaluate_limit

<a id="entry-presentation_python_calculus_capability_calculus_evaluate_limit_api_assumptionscope_evaluate_limit"></a>
<a id="placement-placement.python.python_class.assumptionscope_evaluate_limit.48f291b296b5"></a>
<p class="symi-entry-owner">AssumptionScope method</p>

```python signature
evaluate_limit(
    input_expression: ExpressionLike,
    variable: VariableLike,
    point: ExpressionLike,
    direction: str = "two_sided",
) -> Expression
```

Evaluate a limit using the scope's immutable assumptions.

## evaluate_limit

<a id="entry-presentation_python_calculus_capability_calculus_evaluate_limit_api_session_evaluate_limit"></a>
<a id="placement-placement.python.python_module.module_evaluate_limit.9cd17950469f"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
evaluate_limit(
    input_expression: ExpressionLike,
    variable: Any,
    point: ExpressionLike,
    direction: str = "two_sided",
) -> Expression
```

`evaluate_limit(expression, variable, point, direction="two_sided")` runs the eager limit engine. It returns an unevaluated limit when the engine cannot close the result.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_evaluate_limit.e24b1d0b64f7"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.evaluate_limit</code></p>

```python signature
evaluate_limit(
    input_expression: ExpressionLike,
    variable: Any,
    point: ExpressionLike,
    direction: str = "two_sided",
) -> Expression
```

</details>

## evaluate_limit

<a id="entry-presentation_python_calculus_capability_calculus_evaluate_limit_api_expression_evaluate_limit"></a>
<a id="placement-placement.python.python_class.expression_evaluate_limit.5925b8ab1ea7"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
evaluate_limit(
    variable: Any,
    point: ExpressionLike,
    direction: str = "two_sided",
) -> Expression
```

`evaluate_limit(expression, variable, point, direction="two_sided")` runs the eager limit engine. It returns an unevaluated limit when the engine cannot close the result.

## evaluate_numeric

<a id="entry-presentation_python_calculus_capability_calculus_evaluate_numeric_api_analysis_session_evaluate_numeric"></a>
<a id="placement-placement.python.python_module.module_evaluate_numeric.3eb61a875464"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
evaluate_numeric(input_expression: ExpressionLike) -> Expression
```

Numerically evaluate to a float and re-encode as an exact rational literal; returns the input unchanged when the expression has no numeric value. For direct float output use `expression.evaluate_to_float`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_evaluate_numeric.d18ac03b53cc"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.evaluate_numeric</code></p>

```python signature
evaluate_numeric(input_expression: ExpressionLike) -> Expression
```

</details>

## evaluate_numeric

<a id="entry-presentation_python_calculus_capability_calculus_evaluate_numeric_api_expression_operations_expression_evaluate_numeric"></a>
<a id="placement-placement.python.python_class.expression_evaluate_numeric.21c9e88d0379"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
evaluate_numeric() -> Expression
```

Numerically evaluate to a float and re-encode as an exact rational literal; returns the input unchanged when the expression has no numeric value. For direct float output use `expression.evaluate_to_float`.

## evaluate_on_grid

<a id="entry-presentation_python_calculus_capability_calculus_evaluate_on_grid_api_analysis_session_evaluate_on_grid"></a>
<a id="placement-placement.python.python_module.module_evaluate_on_grid.4864558e3681"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
evaluate_on_grid(
    input_expression: ExpressionLike,
    variable: VariableLike,
    x_values: list[float],
) -> list[float]
```

Evaluate at each grid point, substituting `variable`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_evaluate_on_grid.99cfe3f8ca50"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.evaluate_on_grid</code></p>

```python signature
evaluate_on_grid(
    input_expression: ExpressionLike,
    variable: VariableLike,
    x_values: list[float],
) -> list[float]
```

</details>

## evaluate_on_grid_points

<a id="entry-presentation_python_calculus_capability_calculus_evaluate_on_grid_points_api_analysis_session_evaluate_on_grid_points"></a>
<a id="placement-placement.python.python_module.module_evaluate_on_grid_points.acd59204b0a8"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
evaluate_on_grid_points(
    input_expression: ExpressionLike,
    variables: Iterable[VariableLike],
    points: list[float],
) -> list[float]
```

Multi-variable companion to `evaluate_on_grid`: evaluate at each point of a flat row-major coordinate array (one coordinate per variable, so the points length must be a multiple of the variable count), returning one float per point. Positions where evaluation fails hold NaN. Raises when `variables` is empty or the lengths disagree. Intended for sampling surfaces and implicit curves.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_evaluate_on_grid_points.ca76aea7253e"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.evaluate_on_grid_points</code></p>

```python signature
evaluate_on_grid_points(
    input_expression: ExpressionLike,
    variables: Iterable[VariableLike],
    points: list[float],
) -> list[float]
```

</details>

## execute

<a id="entry-presentation_python_calculus_capability_calculus_execute_api_session_execute"></a>
<a id="placement-placement.python.python_module.module_execute.c73e94e486fa"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
execute(input_expression: ExpressionLike) -> Expression
```

Re-dispatch every unevaluated node (integral, derivative, summation, transform, ODE/recurrence placeholder) in the expression; useful after substitution has changed the inputs.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_execute.462735a27ec8"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.execute</code></p>

```python signature
execute(input_expression: ExpressionLike) -> Expression
```

</details>

## execute

<a id="entry-presentation_python_calculus_capability_calculus_execute_api_expression_execute"></a>
<a id="placement-placement.python.python_class.expression_execute.90c4ad741f6a"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
execute() -> Expression
```

Re-dispatch every unevaluated node (integral, derivative, summation, transform, ODE/recurrence placeholder) in the expression; useful after substitution has changed the inputs.

## execute

<a id="entry-presentation_python_calculus_capability_calculus_execute_api_matrix_execute"></a>
<a id="placement-placement.python.python_class.matrix_execute.5773d9583bc1"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
execute() -> Matrix
```

Re-dispatch every unevaluated node (integral, derivative, summation, transform, ODE/recurrence placeholder) in the expression; useful after substitution has changed the inputs.

## fourier_transform

<a id="entry-presentation_python_integral_transforms_capability_calculus_fourier_transform_api_assumptionscope_fourier_transform"></a>
<a id="placement-placement.python.python_class.assumptionscope_fourier_transform.cc7330dbb6d2"></a>
<p class="symi-entry-owner">AssumptionScope method</p>

```python signature
fourier_transform(
    input_expression: ExpressionLike,
    time_variable: VariableLike,
    frequency_variable: VariableLike,
) -> Expression
```

Compute a forward Fourier transform using the scope's immutable assumptions.

## fourier_transform

<a id="entry-presentation_python_integral_transforms_capability_calculus_fourier_transform_api_session_fourier_transform"></a>
<a id="placement-placement.python.python_module.module_fourier_transform.375647690920"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
fourier_transform(
    input_expression: ExpressionLike,
    time_variable: VariableLike,
    frequency_variable: VariableLike,
) -> Expression
```

Forward Fourier transform in the angular-frequency convention \(F(\omega) = \int f(t)e^{-i\omega t}\,dt\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_fourier_transform.5c9b70ec96fe"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.fourier_transform</code></p>

```python signature
fourier_transform(
    input_expression: ExpressionLike,
    time_variable: VariableLike,
    frequency_variable: VariableLike,
) -> Expression
```

</details>

## integrate

<a id="entry-presentation_python_calculus_capability_calculus_integrate_api_assumptionscope_integrate"></a>
<a id="placement-placement.python.python_class.assumptionscope_integrate.493edf4a76f0"></a>
<p class="symi-entry-owner">AssumptionScope method</p>

```python signature
integrate(
    input_expression: ExpressionLike,
    variable: VariableLike,
) -> Expression
```

Integrate an expression using the scope's immutable assumptions.

## integrate

<a id="entry-presentation_python_calculus_capability_calculus_integrate_api_session_integrate"></a>
<a id="placement-placement.python.python_module.module_integrate.135ca8b1419e"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
integrate(input_expression: ExpressionLike, variable: Any) -> Expression
```

Indefinite integration (no constant of integration).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_integrate.93acac9d5819"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.integrate</code></p>

```python signature
integrate(input_expression: ExpressionLike, variable: Any) -> Expression
```

</details>

## integrate

<a id="entry-presentation_python_calculus_capability_calculus_integrate_api_expression_integrate"></a>
<a id="placement-placement.python.python_class.expression_integrate.09e1fca46e0a"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
integrate(variable: Any) -> Expression
```

Indefinite integration (no constant of integration).

## integrate_definite

<a id="entry-presentation_python_calculus_capability_calculus_integrate_definite_api_assumptionscope_integrate_definite"></a>
<a id="placement-placement.python.python_class.assumptionscope_integrate_definite.a1301e99f793"></a>
<p class="symi-entry-owner">AssumptionScope method</p>

```python signature
integrate_definite(
    input_expression: ExpressionLike,
    variable: VariableLike,
    lower_bound: ExpressionLike,
    upper_bound: ExpressionLike,
) -> Expression
```

Integrate a definite expression using the scope's immutable assumptions.

## integrate_definite

<a id="entry-presentation_python_calculus_capability_calculus_integrate_definite_api_analysis_session_integrate_definite"></a>
<a id="placement-placement.python.python_module.module_integrate_definite.7bfa8a1356f9"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
integrate_definite(
    input_expression: ExpressionLike,
    variable: Any,
    lower: ExpressionLike,
    upper: ExpressionLike,
) -> Expression
```

Definite integration over `[lower, upper]` (bounds may be infinite).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_integrate_definite.24cd89a9489d"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.integrate_definite</code></p>

```python signature
integrate_definite(
    input_expression: ExpressionLike,
    variable: Any,
    lower: ExpressionLike,
    upper: ExpressionLike,
) -> Expression
```

</details>

## integrate_definite

<a id="entry-presentation_python_calculus_capability_calculus_integrate_definite_api_expression_operations_expression_integrate_definite"></a>
<a id="placement-placement.python.python_class.expression_integrate_definite.ac5c1e93f09c"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
integrate_definite(
    variable: Any,
    lower: ExpressionLike,
    upper: ExpressionLike,
) -> Expression
```

Definite integration over `[lower, upper]` (bounds may be infinite).

## integrate_definite_detailed

<a id="entry-presentation_python_calculus_capability_calculus_integrate_definite_detailed_api_session_integrate_definite_detailed"></a>
<a id="placement-placement.python.python_module.module_integrate_definite_detailed.66cf65c5d3a6"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
integrate_definite_detailed(
    input_expression: expression_input,
    variable: variable_input,
    lower: expression_input,
    upper: expression_input,
    interpretation: str = "ordinary",
    constraint: Optional[expression_input] = None,
) -> definite_integration_result
```

Evaluate a definite integral under an interpretation and an optional declared region, retaining whether it was evaluated, proved divergent, or declined.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_integrate_definite_detailed.c7c3a5dbfe3a"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.integrate_definite_detailed</code></p>

```python signature
integrate_definite_detailed(
    input_expression: expression_input,
    variable: variable_input,
    lower: expression_input,
    upper: expression_input,
    interpretation: str = "ordinary",
    constraint: Optional[expression_input] = None,
) -> definite_integration_result
```

</details>

## integrate_definite_numeric

<a id="entry-presentation_python_calculus_capability_calculus_integrate_definite_numeric_api_analysis_session_integrate_definite_numeric"></a>
<a id="placement-placement.python.python_module.module_integrate_definite_numeric.83640c560763"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
integrate_definite_numeric(
    input_expression: PythonExpressionInput,
    variable: PythonVariableInput,
    lower: PythonExpressionInput,
    upper: PythonExpressionInput,
    precision_bits: int,
) -> PythonNumericDefiniteIntegrationResult
```

Numerically integrate a finite interval without invoking symbolic integration.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_integrate_definite_numeric.d753d392701b"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.integrate_definite_numeric</code></p>

```python signature
integrate_definite_numeric(
    input_expression: PythonExpressionInput,
    variable: PythonVariableInput,
    lower: PythonExpressionInput,
    upper: PythonExpressionInput,
    precision_bits: int,
) -> PythonNumericDefiniteIntegrationResult
```

</details>

## integrate_iterated

<a id="entry-presentation_python_calculus_capability_calculus_integrate_iterated_api_analysis_session_integrate_iterated"></a>
<a id="placement-placement.python.python_module.module_integrate_iterated.d1e73fdf5d7f"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
integrate_iterated(
    input_expression: ExpressionLike,
    variables: Iterable[VariableLike],
) -> Expression
```

Iterated indefinite integration, applying the single-variable pipeline once per entry of `variables` in left-to-right order (innermost binder first).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_integrate_iterated.379471cff5dc"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.integrate_iterated</code></p>

```python signature
integrate_iterated(
    input_expression: ExpressionLike,
    variables: Iterable[VariableLike],
) -> Expression
```

</details>

## integrate_iterated

<a id="entry-presentation_python_calculus_capability_calculus_integrate_iterated_api_expression_operations_expression_integrate_iterated"></a>
<a id="placement-placement.python.python_class.expression_integrate_iterated.5aad0907df72"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
integrate_iterated(variables: Iterable[VariableLike]) -> Expression
```

Iterated indefinite integration, applying the single-variable pipeline once per entry of `variables` in left-to-right order (innermost binder first).

## interpretation

<a id="entry-presentation_python_calculus_capability_calculus_interpretation_api_results_definiteintegrationresult_interpretation"></a>
<a id="placement-placement.python.python_class.definiteintegrationresult_interpretation.b68b8d35b6f5"></a>
<p class="symi-entry-owner">DefiniteIntegrationResult property</p>

```python signature
interpretation: str
```

The interpretation under which the request was answered.

## inverse_fourier_transform

<a id="entry-presentation_python_integral_transforms_capability_calculus_inverse_fourier_transform_api_session_inverse_fourier_transform"></a>
<a id="placement-placement.python.python_module.module_inverse_fourier_transform.06558807e56e"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
inverse_fourier_transform(
    input_expression: ExpressionLike,
    frequency_variable: VariableLike,
    time_variable: VariableLike,
) -> Expression
```

Inverse Fourier transform of the same convention.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_inverse_fourier_transform.29d769d0809a"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.inverse_fourier_transform</code></p>

```python signature
inverse_fourier_transform(
    input_expression: ExpressionLike,
    frequency_variable: VariableLike,
    time_variable: VariableLike,
) -> Expression
```

</details>

## inverse_laplace_transform

<a id="entry-presentation_python_integral_transforms_capability_calculus_inverse_laplace_transform_api_session_inverse_laplace_transform"></a>
<a id="placement-placement.python.python_module.module_inverse_laplace_transform.bc68714d6dad"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
inverse_laplace_transform(
    input_expression: ExpressionLike,
    frequency_variable: VariableLike,
    time_variable: VariableLike,
) -> Expression
```

Inverse Laplace transform; rational inputs route through a partial-fraction reverse lookup.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_inverse_laplace_transform.521646ce2181"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.inverse_laplace_transform</code></p>

```python signature
inverse_laplace_transform(
    input_expression: ExpressionLike,
    frequency_variable: VariableLike,
    time_variable: VariableLike,
) -> Expression
```

</details>

## laplace_transform

<a id="entry-presentation_python_integral_transforms_capability_calculus_laplace_transform_api_assumptionscope_laplace_transform"></a>
<a id="placement-placement.python.python_class.assumptionscope_laplace_transform.0f605205d58d"></a>
<p class="symi-entry-owner">AssumptionScope method</p>

```python signature
laplace_transform(
    input_expression: ExpressionLike,
    time_variable: VariableLike,
    frequency_variable: VariableLike,
) -> Expression
```

Compute a forward Laplace transform using the scope's immutable assumptions.

## laplace_transform

<a id="entry-presentation_python_integral_transforms_capability_calculus_laplace_transform_api_session_laplace_transform"></a>
<a id="placement-placement.python.python_module.module_laplace_transform.8e6f0172be4d"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
laplace_transform(
    input_expression: ExpressionLike,
    time_variable: VariableLike,
    frequency_variable: VariableLike,
) -> Expression
```

Forward Laplace transform \(F(s) = \int_0^\infty f(t)e^{-st}\,dt\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_laplace_transform.76780a9c25d4"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.laplace_transform</code></p>

```python signature
laplace_transform(
    input_expression: ExpressionLike,
    time_variable: VariableLike,
    frequency_variable: VariableLike,
) -> Expression
```

</details>

## laurent_series

<a id="entry-presentation_python_series_capability_calculus_laurent_series_api_session_laurent_series"></a>
<a id="placement-placement.python.python_module.module_laurent_series.d619a8cfcae9"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
laurent_series(
    input_expression: ExpressionLike,
    variable: VariableLike,
    center: ExpressionLike,
    order: int,
) -> Expression
```

Truncated Laurent expansion at `center`: every \((\operatorname{variable} - \operatorname{center})^k\) term with \(-m \le k < \operatorname{order}\), where `m` is the pole order. Analytic points degrade to the Taylor expansion. At an essential singularity (where `pole_order` declines) the result is an unevaluated `series_unevaluated(...)` placeholder, because no finite truncation of the principal part is correct.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_laurent_series.20501b6592dd"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.laurent_series</code></p>

```python signature
laurent_series(
    input_expression: ExpressionLike,
    variable: VariableLike,
    center: ExpressionLike,
    order: int,
) -> Expression
```

</details>

## laurent_series

<a id="entry-presentation_python_series_capability_calculus_laurent_series_api_expression_laurent_series"></a>
<a id="placement-placement.python.python_class.expression_laurent_series.1eabdc09f426"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
laurent_series(
    variable: VariableLike,
    center: ExpressionLike,
    order: int,
) -> Expression
```

Truncated Laurent expansion at `center`: every \((\operatorname{variable} - \operatorname{center})^k\) term with \(-m \le k < \operatorname{order}\), where `m` is the pole order. Analytic points degrade to the Taylor expansion. At an essential singularity (where `pole_order` declines) the result is an unevaluated `series_unevaluated(...)` placeholder, because no finite truncation of the principal part is correct.

## limit

<a id="entry-presentation_python_calculus_capability_calculus_limit_api_session_limit"></a>
<a id="placement-placement.python.python_module.module_limit.a84a0de5bb4d"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
limit(
    input_expression: ExpressionLike,
    variable: Any,
    point: ExpressionLike,
    direction: str = "two_sided",
) -> Expression
```

`limit(expression, variable, point, direction="two_sided")` constructs a deferred limit.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_limit.1f6f559907b4"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.limit</code></p>

```python signature
limit(
    input_expression: ExpressionLike,
    variable: Any,
    point: ExpressionLike,
    direction: str = "two_sided",
) -> Expression
```

</details>

## limit

<a id="entry-presentation_python_calculus_capability_calculus_limit_api_expression_limit"></a>
<a id="placement-placement.python.python_class.expression_limit.327c6d9dfd86"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
limit(
    variable: Any,
    point: ExpressionLike,
    direction: str = "two_sided",
) -> Expression
```

`limit(expression, variable, point, direction="two_sided")` constructs a deferred limit.

## maclaurin_series

<a id="entry-presentation_python_series_capability_calculus_maclaurin_series_api_analysis_session_maclaurin_series"></a>
<a id="placement-placement.python.python_module.module_maclaurin_series.5223942bba31"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
maclaurin_series(
    input_expression: ExpressionLike,
    variable: VariableLike,
    order: int,
) -> Expression
```

`taylor_series` specialised to expansion point 0.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_maclaurin_series.e8542b678e16"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.maclaurin_series</code></p>

```python signature
maclaurin_series(
    input_expression: ExpressionLike,
    variable: VariableLike,
    order: int,
) -> Expression
```

</details>

## maclaurin_series

<a id="entry-presentation_python_series_capability_calculus_maclaurin_series_api_expression_operations_expression_maclaurin_series"></a>
<a id="placement-placement.python.python_class.expression_maclaurin_series.5db0d2e0e680"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
maclaurin_series(variable: VariableLike, order: int) -> Expression
```

`taylor_series` specialised to expansion point 0.

## pole_order

<a id="entry-presentation_python_series_capability_calculus_pole_order_api_analysis_session_pole_order"></a>
<a id="placement-placement.python.python_module.module_pole_order.9ba61a8cd618"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
pole_order(
    input_expression: ExpressionLike,
    variable: VariableLike,
    center: ExpressionLike,
) -> Optional[int]
```

Order of the singularity at `center`: `0` for analytic/removable points, \(m \ge 1\) for a pole of order \(m\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_pole_order.fbcfe73bae51"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.pole_order</code></p>

```python signature
pole_order(
    input_expression: ExpressionLike,
    variable: VariableLike,
    center: ExpressionLike,
) -> Optional[int]
```

</details>

## pole_order

<a id="entry-presentation_python_series_capability_calculus_pole_order_api_expression_operations_expression_pole_order"></a>
<a id="placement-placement.python.python_class.expression_pole_order.412f4c586190"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
pole_order(
    variable: VariableLike,
    center: ExpressionLike,
) -> Optional[int]
```

Order of the singularity at `center`: `0` for analytic/removable points, \(m \ge 1\) for a pole of order \(m\).

## residue

<a id="entry-presentation_python_series_capability_calculus_residue_api_analysis_session_residue"></a>
<a id="placement-placement.python.python_module.module_residue.a318d22183f0"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
residue(
    input_expression: ExpressionLike,
    variable: Any,
    center: Any,
) -> Expression
```

Coefficient of \((\operatorname{variable} - \operatorname{center})^{-1}\) in the Laurent expansion at `center`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_residue.8809e0c25093"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.residue</code></p>

```python signature
residue(
    input_expression: ExpressionLike,
    variable: Any,
    center: Any,
) -> Expression
```

</details>

## residue

<a id="entry-presentation_python_series_capability_calculus_residue_api_expression_operations_expression_residue"></a>
<a id="placement-placement.python.python_class.expression_residue.bf75be4b16ee"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
residue(variable: Any, center: Any) -> Expression
```

Coefficient of \((\operatorname{variable} - \operatorname{center})^{-1}\) in the Laurent expansion at `center`.

## singularities

<a id="entry-presentation_python_calculus_capability_calculus_singularities_api_assumptionscope_singularities"></a>
<a id="placement-placement.python.python_class.assumptionscope_singularities.0a11eb0cae36"></a>
<p class="symi-entry-owner">AssumptionScope method</p>

```python signature
singularities(
    input_expression: ExpressionLike,
    variable: VariableLike,
) -> Expression
```

Return the isolated complex singularities using the scope's immutable assumptions.

## singularities

<a id="entry-presentation_python_calculus_capability_calculus_singularities_api_session_singularities"></a>
<a id="placement-placement.python.python_module.module_singularities.4395acf809c5"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
singularities(
    input_expression: ExpressionLike,
    variable: Any,
) -> Expression
```

The singular points of the expression in the complex plane, as a set expression (finite set, union, image set for periodic families, …).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_singularities.69a45d708ca7"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.singularities</code></p>

```python signature
singularities(
    input_expression: ExpressionLike,
    variable: Any,
) -> Expression
```

</details>

## singularities

<a id="entry-presentation_python_calculus_capability_calculus_singularities_api_expression_singularities"></a>
<a id="placement-placement.python.python_class.expression_singularities.088b99d67385"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
singularities(variable: Any) -> Expression
```

The singular points of the expression in the complex plane, as a set expression (finite set, union, image set for periodic families, …).

## summation_indefinite

<a id="entry-presentation_python_calculus_capability_calculus_summation_indefinite_api_analysis_session_summation_indefinite"></a>
<a id="placement-placement.python.python_module.module_summation_indefinite.e10335856b70"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
summation_indefinite(
    summand: ExpressionLike,
    index: VariableLike,
) -> Expression
```

Anti-difference: a closed form \(F\) with \(F(\operatorname{index}+1) - F(\operatorname{index}) = \operatorname{summand}\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_summation_indefinite.decc1b81d5c2"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.summation_indefinite</code></p>

```python signature
summation_indefinite(
    summand: ExpressionLike,
    index: VariableLike,
) -> Expression
```

</details>

## summation_indefinite

<a id="entry-presentation_python_calculus_capability_calculus_summation_indefinite_api_expression_operations_expression_summation_indefinite"></a>
<a id="placement-placement.python.python_class.expression_summation_indefinite.36082f1ae900"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
summation_indefinite(index: VariableLike) -> Expression
```

Anti-difference: a closed form \(F\) with \(F(\operatorname{index}+1) - F(\operatorname{index}) = \operatorname{summand}\).

## taylor_series

<a id="entry-presentation_python_series_capability_calculus_taylor_series_api_assumptionscope_taylor_series"></a>
<a id="placement-placement.python.python_class.assumptionscope_taylor_series.5736549b4857"></a>
<p class="symi-entry-owner">AssumptionScope method</p>

```python signature
taylor_series(
    input_expression: ExpressionLike,
    variable: VariableLike,
    expansion_point: ExpressionLike,
    truncation_order: int,
) -> Expression
```

Compute a Taylor polynomial using the scope's immutable assumptions.

## taylor_series

<a id="entry-presentation_python_series_capability_calculus_taylor_series_api_session_taylor_series"></a>
<a id="placement-placement.python.python_module.module_taylor_series.0b4cd2addb32"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
taylor_series(
    input_expression: ExpressionLike,
    variable: VariableLike,
    expansion_point: ExpressionLike,
    order: int,
) -> Expression
```

Truncated Taylor expansion about `expansion_point`, keeping terms of degree strictly less than `order` (the remainder is \(O((x-a)^{\operatorname{order}})\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_taylor_series.751307bc3e60"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.taylor_series</code></p>

```python signature
taylor_series(
    input_expression: ExpressionLike,
    variable: VariableLike,
    expansion_point: ExpressionLike,
    order: int,
) -> Expression
```

</details>

## taylor_series

<a id="entry-presentation_python_series_capability_calculus_taylor_series_api_expression_taylor_series"></a>
<a id="placement-placement.python.python_class.expression_taylor_series.3fcdb5395680"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
taylor_series(
    variable: VariableLike,
    expansion_point: ExpressionLike,
    order: int,
) -> Expression
```

Truncated Taylor expansion about `expansion_point`, keeping terms of degree strictly less than `order` (the remainder is \(O((x-a)^{\operatorname{order}})\).

## value

<a id="entry-presentation_python_calculus_capability_calculus_value_api_results_definiteintegrationresult_value"></a>
<a id="placement-placement.python.python_class.definiteintegrationresult_value.c9323ba3f053"></a>
<p class="symi-entry-owner">DefiniteIntegrationResult property</p>

```python signature
value: Optional[Expression]
```

The exact value, present exactly when the verdict is `evaluated`.

## e

<a id="entry-presentation_python_evaluation_and_constants_capability_constants_e_api_session_e"></a>
<a id="placement-placement.python.python_module.module_e.ca9b49b3b5c4"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
e: expression
```

Euler's number \(e\), the base of the natural logarithm. `exp(1)` and this constant are the same expression.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_e.0b54eb1f2bd4"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.e</code></p>

```python signature
e: Expression
```

</details>

## euler_gamma

<a id="entry-presentation_python_evaluation_and_constants_capability_constants_euler_gamma_api_session_euler_gamma"></a>
<a id="placement-placement.python.python_module.module_euler_gamma.4e84cb2dd7bd"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
euler_gamma: expression
```

The Euler–Mascheroni constant \(\gamma\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_euler_gamma.8bc94932469c"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.euler_gamma</code></p>

```python signature
euler_gamma: Expression
```

</details>

## imaginary_unit

<a id="entry-presentation_python_evaluation_and_constants_capability_constants_imaginary_unit_api_session_imaginary_unit"></a>
<a id="placement-placement.python.python_module.module_imaginary_unit.be4f2bad8c68"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
imaginary_unit: expression
```

The imaginary unit \(i\) with \(i^2 = -1\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_imaginary_unit.5b7cac4e8c05"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.imaginary_unit</code></p>

```python signature
imaginary_unit: Expression
```

</details>

## infinity

<a id="entry-presentation_python_evaluation_and_constants_capability_constants_infinity_api_session_infinity"></a>
<a id="placement-placement.python.python_module.module_infinity.078e1f396c68"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
infinity: expression
```

Unsigned positive infinity \(\infty\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_infinity.ee6849fe5746"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.infinity</code></p>

```python signature
infinity: Expression
```

</details>

## pi

<a id="entry-presentation_python_evaluation_and_constants_capability_constants_pi_api_session_pi"></a>
<a id="placement-placement.python.python_module.module_pi.b74b97bbdd43"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
pi: expression
```

The circle constant \(\pi\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_pi.93793c5ebb94"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.pi</code></p>

```python signature
pi: Expression
```

</details>

## UndefinedFunction

<a id="entry-presentation_python_construction_and_parsing_capability_construction_undefined_function_api_undefinedfunction"></a>
<a id="placement-placement.python.python_class.undefinedfunction.28fd52ba99ea"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class UndefinedFunction
```

A callable proxy for user-defined named functions. `context.undefined_function("f")` returns one of these; calling it with `expression` arguments builds a `function_call` node in the context's interner.

## integer

<a id="entry-presentation_python_construction_and_parsing_capability_construction_integer_api_session_integer"></a>
<a id="placement-placement.python.python_module.module_integer.49c85c5856ea"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
integer(value: Any) -> Expression
```

Build an arbitrary-precision exact integer. Python `bool` values are rejected. JavaScript's recommended facade accepts `bigint` and safe integral `number` values.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_integer.efdfe76bbc61"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.integer</code></p>

```python signature
integer(value: Any) -> Expression
```

</details>

## integer_from_string

<a id="entry-presentation_python_construction_and_parsing_capability_construction_integer_from_string_api_session_integer_from_string"></a>
<a id="placement-placement.python.python_module.module_integer_from_string.552ac2e82ab4"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
integer_from_string(text: str) -> Expression
```

Build an arbitrary-precision integer literal from its decimal string.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_integer_from_string.f35e45ba7140"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.integer_from_string</code></p>

```python signature
integer_from_string(text: str) -> Expression
```

</details>

## integral

<a id="entry-presentation_python_deferred_forms_capability_construction_integral_api_analysis_session_integral"></a>
<a id="placement-placement.python.python_module.module_integral.4a92f50512c2"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
integral(
    integrand: ExpressionLike,
    variable: Any,
    lower: Optional[ExpressionLike] = None,
    upper: Optional[ExpressionLike] = None,
) -> Expression
```

Build an unevaluated integral node (indefinite when bounds are omitted).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_integral.9e5fb95348ec"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.integral</code></p>

```python signature
integral(
    integrand: ExpressionLike,
    variable: Any,
    lower: Optional[ExpressionLike] = None,
    upper: Optional[ExpressionLike] = None,
) -> Expression
```

</details>

## parse

<a id="entry-presentation_python_construction_and_parsing_capability_construction_parse_api_session_parse"></a>
<a id="placement-placement.python.python_module.module_parse.5ce2d5b2fa9b"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
parse(text: str) -> Expression
```

Parse Symi textual syntax into an expression. Accepts `^` and `**` for powers; knows the builtin function names (`sin`, `log`, `sqrt`, …) and the constants `pi`, `e`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_parse.8bb4dfb283da"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.parse</code></p>

```python signature
parse(text: str) -> Expression
```

</details>

## parse_latex

<a id="entry-presentation_python_construction_and_parsing_capability_construction_parse_latex_api_serialization_session_parse_latex"></a>
<a id="placement-placement.python.python_module.module_parse_latex.aafb58fb41c7"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
parse_latex(latex: str) -> Any
```

Parse a LaTeX string in Symi's canonical input dialect — the inverse of `to_latex` and the parser the Symi frontend uses. Returns whichever top-level object the input denotes: an ordinary expression, a `\begin{matrix}…\end{matrix}`, or a geometry figure (`(x, y)` point, segment, polygon, or circle), wrapped in the matching exported class exactly as `parse_serialized_object` does. Coverage spans arithmetic, powers, fractions, roots, the elementary and many special functions, comparisons, integrals (including the bare-`d` differential), Leibniz derivatives (`\frac{d}{dx}` — differentiated eagerly), limits, summations, products, determinants, and actuarial annuities. The resolution is context-aware in a way `parse` is not: a bare `i` is the imaginary unit and a bare `e` is Euler's number unless the letter is a bound index (a summation / product / limit index shadows the constant), and `\mathrm{d}` — or a bare `d` that closes an integral — is the differential operator while a bare `d` elsewhere is an ordinary variable. Raises on syntax errors.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_parse_latex.3bc82c724992"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.parse_latex</code></p>

```python signature
parse_latex(latex: str) -> Any
```

</details>

## parse_latex_with_environment

<a id="entry-presentation_python_construction_and_parsing_capability_construction_parse_latex_with_environment_api_serialization_session_parse_latex_with_environment"></a>
<a id="placement-placement.python.python_module.module_parse_latex_with_environment.217e1bf2dc8a"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
parse_latex_with_environment(
    latex: str,
    serialized_definitions: list[str],
) -> Any
```

Parse LaTeX after building an ordered definition environment. Each serialized definition is a string with four fields separated by ASCII Unit Separator (`U+001F`): `kind`, `name`, `parameters`, and `body_latex`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_parse_latex_with_environment.e2b51d1a6af8"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.parse_latex_with_environment</code></p>

```python signature
parse_latex_with_environment(
    latex: str,
    serialized_definitions: list[str],
) -> Any
```

</details>

## parse_serialized_object

<a id="entry-presentation_python_serialization_and_output_capability_construction_parse_serialized_object_api_serialization_session_parse_serialized_object"></a>
<a id="placement-placement.python.python_module.module_parse_serialized_object.4e2ecb9bb139"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
parse_serialized_object(text: str) -> Any
```

Inverse of `serialize_object`; returns the matching surface class.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_parse_serialized_object.cdcae6e05edc"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.parse_serialized_object</code></p>

```python signature
parse_serialized_object(text: str) -> Any
```

</details>

## piecewise

<a id="entry-presentation_python_deferred_forms_capability_construction_piecewise_api_solving_session_piecewise"></a>
<a id="placement-placement.python.python_module.module_piecewise.719dafd5ae7f"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
piecewise(
    branches: Iterable[tuple[ExpressionLike, ExpressionLike]],
    otherwise: Optional[ExpressionLike] = None,
) -> Expression
```

Build a piecewise expression from `(value, condition)` pairs with first-match semantics; `otherwise` appends an always-true final branch. Branches whose condition is provably false are dropped at construction; if every condition fails the result is the undefined sentinel.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_piecewise.b462ccfbb1b0"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.piecewise</code></p>

```python signature
piecewise(
    branches: Iterable[tuple[ExpressionLike, ExpressionLike]],
    otherwise: Optional[ExpressionLike] = None,
) -> Expression
```

</details>

## product

<a id="entry-presentation_python_deferred_forms_capability_construction_product_api_analysis_session_product"></a>
<a id="placement-placement.python.python_module.module_product.c378ecc8918b"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
product(
    multiplicand: ExpressionLike,
    index: VariableLike,
    lower: ExpressionLike,
    upper: ExpressionLike,
) -> Expression
```

Definite indexed product \(\prod_{\mathit{index}=\mathit{lower}}^{\mathit{upper}} \mathit{multiplicand}\), a first-class `indexed_product` binder (rendered `\prod` in LaTeX).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_product.116ff8b1c0bd"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.product</code></p>

```python signature
product(
    multiplicand: ExpressionLike,
    index: VariableLike,
    lower: ExpressionLike,
    upper: ExpressionLike,
) -> Expression
```

</details>

## product_indefinite

<a id="entry-presentation_python_deferred_forms_capability_construction_product_indefinite_api_analysis_session_product_indefinite"></a>
<a id="placement-placement.python.python_module.module_product_indefinite.36ca96c3eab2"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
product_indefinite(
    multiplicand: ExpressionLike,
    index: VariableLike,
) -> Expression
```

Indefinite (anti-quotient) product: the `P(k)` satisfying `P(k+1)/P(k) = multiplicand(k)`, the multiplicative analogue of `summation_indefinite`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_product_indefinite.55b696a1a6cf"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.product_indefinite</code></p>

```python signature
product_indefinite(
    multiplicand: ExpressionLike,
    index: VariableLike,
) -> Expression
```

</details>

## rational

<a id="entry-presentation_python_construction_and_parsing_capability_construction_rational_api_session_rational"></a>
<a id="placement-placement.python.python_module.module_rational.21ee0367e6e1"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
rational(numerator: Any, denominator: Any) -> Expression
```

Constructs an exact reduced rational from arbitrary-size integers. A zero denominator is an argument error. Python also accepts `fractions.Fraction` wherever an expression-like input is accepted.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_rational.8866c3776b8e"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.rational</code></p>

```python signature
rational(numerator: Any, denominator: Any) -> Expression
```

</details>

## rational_from_float

<a id="entry-presentation_python_construction_and_parsing_capability_construction_rational_from_float_api_analysis_session_rational_from_float"></a>
<a id="placement-placement.python.python_module.module_rational_from_float.30ffeabe86b0"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
rational_from_float(value: float, max_denominator: int) -> Expression
```

Closest rational with denominator \(\leq\) `max_denominator` (the `Fraction.limit_denominator` algorithm).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_rational_from_float.08b0f2b8a5dc"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.rational_from_float</code></p>

```python signature
rational_from_float(value: float, max_denominator: int) -> Expression
```

</details>

## reset_context

<a id="entry-presentation_python_construction_and_parsing_capability_construction_reset_context_api_session_reset_context"></a>
<a id="placement-placement.python.python_class.context_reset_context.7c05f08677d0"></a>
<p class="symi-entry-owner">Explicit context</p>

```python signature
reset_context() -> None
```

Replace the context's entire symbol table and expression store with fresh empty ones. Warning: existing `expression`/`matrix`/geometry objects from this context become stale and must not be used afterwards — their symbol identifiers no longer resolve. Deliberately not available at module level: resetting the shared default context would strand every live object, and the weak expression store already keeps memory bounded by live objects (see the default context).

## serialize_object

<a id="entry-presentation_python_serialization_and_output_capability_construction_serialize_object_api_serialization_session_serialize_object"></a>
<a id="placement-placement.python.python_module.module_serialize_object.96b1122ae355"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
serialize_object(object: Any) -> str
```

Serialize an expression, matrix, or geometry object to the stable Symi serialization format, round-trippable via `parse_serialized_object`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_serialize_object.4db46f297a23"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.serialize_object</code></p>

```python signature
serialize_object(object: Any) -> str
```

</details>

## serialize_object

<a id="entry-presentation_python_serialization_and_output_capability_construction_serialize_object_api_partial_differential_equations_partialdifferentialequationcoordinatechange_serialize_object"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationcoordinatechange_serialize_object.622ee8029a68"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCoordinateChange method</p>

```python signature
serialize_object() -> str
```

Serialize this coordinate change in the versioned canonical object grammar.

## serialize_object

<a id="entry-presentation_python_serialization_and_output_capability_construction_serialize_object_api_partial_differential_equations_partialdifferentialequationproblem_serialize_object"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationproblem_serialize_object.41a1ab74e1fa"></a>
<p class="symi-entry-owner">PartialDifferentialEquationProblem method</p>

```python signature
serialize_object() -> str
```

Serialize this problem in the versioned canonical object grammar.

## summation

<a id="entry-presentation_python_deferred_forms_capability_construction_summation_api_analysis_session_summation"></a>
<a id="placement-placement.python.python_module.module_summation.d765c39f40a8"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
summation(
    summand: ExpressionLike,
    index: VariableLike,
    lower: ExpressionLike,
    upper: ExpressionLike,
) -> Expression
```

Build a summation node \(\sum\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_summation.7f35de11ba7a"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.summation</code></p>

```python signature
summation(
    summand: ExpressionLike,
    index: VariableLike,
    lower: ExpressionLike,
    upper: ExpressionLike,
) -> Expression
```

</details>

## symbol

<a id="entry-presentation_python_construction_and_parsing_capability_construction_symbol_api_session_symbol"></a>
<a id="placement-placement.python.python_module.module_symbol.13b49e0351f9"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
symbol(
    name: str,
    real: bool = False,
    positive: bool = False,
    negative: bool = False,
    integer: bool = False,
    finite: bool = False,
    rational: bool = False,
    natural: bool = False,
    nonzero: bool = False,
) -> Expression
```

Intern a symbol and (optionally) attach assumptions used by the assumption engine and the simplifier. Domain flags refine in the order `natural` \(\to\) `integer` \(\to\) `rational` \(\to\) `real`; `positive`/`negative` also set nonzero, and `nonzero` may be requested independently.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_symbol.fdaf791acf11"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.symbol</code></p>

```python signature
symbol(
    name: str,
    real: bool = False,
    positive: bool = False,
    negative: bool = False,
    integer: bool = False,
    finite: bool = False,
    rational: bool = False,
    natural: bool = False,
    nonzero: bool = False,
) -> Expression
```

</details>

## to_latex

<a id="entry-presentation_python_serialization_and_output_capability_construction_to_latex_api_circle2d_to_latex"></a>
<a id="placement-placement.python.python_class.circle2d_to_latex.efe70de1b2c3"></a>
<p class="symi-entry-owner">Circle2d method</p>

```python signature
to_latex() -> str
```

Render an expression as LaTeX. Matrices and geometry objects have their own `to_latex` methods.

## to_latex

<a id="entry-presentation_python_serialization_and_output_capability_construction_to_latex_api_session_to_latex"></a>
<a id="placement-placement.python.python_module.module_to_latex.a095e60f7b7e"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
to_latex(input_expression: ExpressionLike) -> str
```

Render an expression as LaTeX. Matrices and geometry objects have their own `to_latex` methods.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_to_latex.73b190bf3fc4"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.to_latex</code></p>

```python signature
to_latex(input_expression: ExpressionLike) -> str
```

</details>

## to_latex

<a id="entry-presentation_python_serialization_and_output_capability_construction_to_latex_api_expression_to_latex"></a>
<a id="placement-placement.python.python_class.expression_to_latex.e9dc20d35844"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
to_latex() -> str
```

Render an expression as LaTeX. Matrices and geometry objects have their own `to_latex` methods.

## to_latex

<a id="entry-presentation_python_serialization_and_output_capability_construction_to_latex_api_serialization_matrix_to_latex"></a>
<a id="placement-placement.python.python_class.matrix_to_latex.90b107e6733a"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
to_latex() -> str
```

Render an expression as LaTeX. Matrices and geometry objects have their own `to_latex` methods.

## to_latex

<a id="entry-presentation_python_serialization_and_output_capability_construction_to_latex_api_partial_differential_equations_partialdifferentialequationproblem_to_latex"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationproblem_to_latex.c404806e4912"></a>
<p class="symi-entry-owner">PartialDifferentialEquationProblem method</p>

```python signature
to_latex() -> str
```

Render this problem as LaTeX, as a system when it carries conditions.

## to_latex

<a id="entry-presentation_python_serialization_and_output_capability_construction_to_latex_api_point2d_to_latex"></a>
<a id="placement-placement.python.python_class.point2d_to_latex.1fd2ddc37371"></a>
<p class="symi-entry-owner">Point2d method</p>

```python signature
to_latex() -> str
```

Render an expression as LaTeX. Matrices and geometry objects have their own `to_latex` methods.

## to_latex

<a id="entry-presentation_python_serialization_and_output_capability_construction_to_latex_api_polygon2d_to_latex"></a>
<a id="placement-placement.python.python_class.polygon2d_to_latex.815f587a7564"></a>
<p class="symi-entry-owner">Polygon2d method</p>

```python signature
to_latex() -> str
```

Render an expression as LaTeX. Matrices and geometry objects have their own `to_latex` methods.

## to_latex

<a id="entry-presentation_python_serialization_and_output_capability_construction_to_latex_api_segment2d_to_latex"></a>
<a id="placement-placement.python.python_class.segment2d_to_latex.9f28261e9a69"></a>
<p class="symi-entry-owner">Segment2d method</p>

```python signature
to_latex() -> str
```

Render an expression as LaTeX. Matrices and geometry objects have their own `to_latex` methods.

## to_latex

<a id="entry-presentation_python_serialization_and_output_capability_construction_to_latex_api_geometry_operations_triangle2d_to_latex"></a>
<a id="placement-placement.python.python_class.triangle2d_to_latex.b2372ec98eca"></a>
<p class="symi-entry-owner">Triangle2d method</p>

```python signature
to_latex() -> str
```

Render an expression as LaTeX. Matrices and geometry objects have their own `to_latex` methods.

## to_latex_with_options

<a id="entry-presentation_python_serialization_and_output_capability_construction_to_latex_with_options_api_serialization_session_to_latex_with_options"></a>
<a id="placement-placement.python.python_module.module_to_latex_with_options.170d636f4702"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
to_latex_with_options(
    input_expression: ExpressionLike,
    exponential_style: str,
    natural_logarithm_style: str,
    multiletter_symbol_style: str,
) -> str
```

Render an expression as LaTeX with presentation flags. Each argument is a string naming the choice for one flag; an unrecognized name falls back to that flag's canonical default (so `to_latex_with_options(e, "", "", "")` equals `to_latex(e)`):

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_to_latex_with_options.808365ac2597"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.to_latex_with_options</code></p>

```python signature
to_latex_with_options(
    input_expression: ExpressionLike,
    exponential_style: str,
    natural_logarithm_style: str,
    multiletter_symbol_style: str,
) -> str
```

</details>

## to_latex_with_options

<a id="entry-presentation_python_serialization_and_output_capability_construction_to_latex_with_options_api_serialization_expression_to_latex_with_options"></a>
<a id="placement-placement.python.python_class.expression_to_latex_with_options.a846d94eb017"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
to_latex_with_options(
    exponential_style: str,
    natural_logarithm_style: str,
    multiletter_symbol_style: str,
) -> str
```

Render an expression as LaTeX with presentation flags. Each argument is a string naming the choice for one flag; an unrecognized name falls back to that flag's canonical default (so `to_latex_with_options(e, "", "", "")` equals `to_latex(e)`):

## undefined_function

<a id="entry-presentation_python_construction_and_parsing_capability_construction_undefined_function_api_session_undefined_function"></a>
<a id="placement-placement.python.python_class.context_undefined_function.69ef6c5c895b"></a>
<p class="symi-entry-owner">Explicit context</p>

```python signature
undefined_function(name: str) -> UndefinedFunction
```

A callable proxy for a user-named function. Calling it with expression arguments builds the function-call expression (see the object-model page and the worked ODE example).

## AssumptionProposition

<a id="entry-presentation_python_object_model_capability_contexts_assumption_proposition_api_assumptionproposition"></a>
<a id="placement-placement.python.python_class.assumptionproposition.dbbb3effee02"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class AssumptionProposition
```

A typed immutable assumption proposition owned by a Python context.

## AssumptionScope

<a id="entry-presentation_python_object_model_capability_contexts_assumption_scope_api_assumptionscope"></a>
<a id="placement-placement.python.python_class.assumptionscope.f98eede99dab"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class AssumptionScope
```

An immutable local assumption scope owned by a Python context.

## Context

<a id="entry-presentation_python_object_model_capability_contexts_context_api_session"></a>
<a id="placement-placement.python.python_class.context.a37e22f21fdc"></a>
<p class="symi-entry-owner">Context constructor</p>

```python signature
Context()
```

Create an isolated context with its own symbol table, interner, and assumptions.

## Expression

<a id="entry-presentation_python_object_model_capability_contexts_expression_api_expression"></a>
<a id="placement-placement.python.python_class.expression.f1defafa2138"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class Expression
```

A symbolic expression owned by the context that built it.

## PartialDifferentialEquationArbitraryFunction

<a id="entry-presentation_python_object_model_capability_contexts_partial_differential_equation_arbitrary_function_api_partial_differential_equations_partialdifferentialequationarbitraryfunction"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationarbitraryfunction.bf6b31e5359a"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class PartialDifferentialEquationArbitraryFunction
```

A collision-free arbitrary function allocated for a PDE candidate.

## PartialDifferentialEquationCanonicalizationResult

<a id="entry-presentation_python_object_model_capability_contexts_partial_differential_equation_canonicalization_result_api_partial_differential_equations_partialdifferentialequationcanonicalizationresult"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationcanonicalizationresult.db76eb5b02c5"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class PartialDifferentialEquationCanonicalizationResult
```

The verified canonical coordinates or typed decline from automatic canonicalization.

## PartialDifferentialEquationClassification

<a id="entry-presentation_python_object_model_capability_contexts_partial_differential_equation_classification_api_partial_differential_equations_partialdifferentialequationclassification"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationclassification.2853e3416a17"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class PartialDifferentialEquationClassification
```

Exact structural analysis data for one scalar partial differential equation.

## PartialDifferentialEquationCoordinateChange

<a id="entry-presentation_python_object_model_capability_contexts_partial_differential_equation_coordinate_change_api_partial_differential_equations_partialdifferentialequationcoordinatechange"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationcoordinatechange.a6259e7fc3ae"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class PartialDifferentialEquationCoordinateChange
```

A validated exact two-variable change of independent variables.

## PartialDifferentialEquationPointSymmetryAction

<a id="entry-presentation_python_object_model_capability_contexts_partialdifferentialequationpointsymmetryaction_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryaction.054567b401b6"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class PartialDifferentialEquationPointSymmetryAction
```

The connected local point-symmetry action of a PDE, or its typed decline.

## PartialDifferentialEquationPointSymmetryAlgebra

<a id="entry-presentation_python_object_model_capability_contexts_partialdifferentialequationpointsymmetryalgebra_api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryalgebra.43e8e8506d73"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class PartialDifferentialEquationPointSymmetryAlgebra
```

The derived point-symmetry algebra of a PDE, or its typed decline.

## PartialDifferentialEquationPointSymmetryGenerator

<a id="entry-presentation_python_object_model_capability_contexts_partialdifferentialequationpointsymmetrygenerator_api_partial_differential_equations_partialdifferentialequationpointsymmetrygenerator"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetrygenerator.46dc178a0b19"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class PartialDifferentialEquationPointSymmetryGenerator
```

One point-symmetry generator of a PDE, given by its infinitesimals.

## PartialDifferentialEquationProblem

<a id="entry-presentation_python_object_model_capability_contexts_partial_differential_equation_problem_api_partial_differential_equations_partialdifferentialequationproblem"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationproblem.814ddc0a0b7c"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class PartialDifferentialEquationProblem
```

A validated scalar partial differential equation owned by one Python context.

## PartialDifferentialEquationSecondOrderClassification

<a id="entry-presentation_python_object_model_capability_contexts_partial_differential_equation_second_order_classification_api_partial_differential_equations_partialdifferentialequationsecondorderclassification"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsecondorderclassification.79bcc28d4c8c"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class PartialDifferentialEquationSecondOrderClassification
```

Exact real elliptic, parabolic, or hyperbolic analysis of a second-order equation.

## PartialDifferentialEquationSecondOrderTypeCase

<a id="entry-presentation_python_object_model_capability_contexts_partial_differential_equation_second_order_type_case_api_partial_differential_equations_partialdifferentialequationsecondordertypecase"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsecondordertypecase.937ad2b74813"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class PartialDifferentialEquationSecondOrderTypeCase
```

One exact condition and the classical second-order type proved under it.

## PartialDifferentialEquationSeparatedEquation

<a id="entry-presentation_python_object_model_capability_contexts_partial_differential_equation_separated_equation_api_partial_differential_equations_partialdifferentialequationseparatedequation"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationseparatedequation.363214c4f25b"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class PartialDifferentialEquationSeparatedEquation
```

One exact separated ordinary differential equation exposed by a PDE transformation.

## PartialDifferentialEquationSeparationResult

<a id="entry-presentation_python_object_model_capability_contexts_partial_differential_equation_separation_result_api_partial_differential_equations_partialdifferentialequationseparationresult"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationseparationresult.6eb4b5859523"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class PartialDifferentialEquationSeparationResult
```

A verified directed separation transformation with its two exact ODE factors.

## PartialDifferentialEquationSimilaritySolution

<a id="entry-presentation_python_object_model_capability_contexts_partialdifferentialequationsimilaritysolution_api_partial_differential_equations_partialdifferentialequationsimilaritysolution"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsimilaritysolution.63b8526ae52f"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class PartialDifferentialEquationSimilaritySolution
```

The invariant solutions of a PDE under one point symmetry, or a typed decline.

## PartialDifferentialEquationSolutionFamily

<a id="entry-presentation_python_object_model_capability_contexts_partial_differential_equation_solution_family_api_partial_differential_equations_partialdifferentialequationsolutionfamily"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsolutionfamily.342004c3830c"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class PartialDifferentialEquationSolutionFamily
```

An explicit or implicit PDE candidate solution family.

## PartialDifferentialEquationSolveResult

<a id="entry-presentation_python_object_model_capability_contexts_partial_differential_equation_solve_result_api_partial_differential_equations_partialdifferentialequationsolveresult"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsolveresult.9ba510b691a3"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class PartialDifferentialEquationSolveResult
```

The sound result or typed decline from PDE dispatch.

## PartialDifferentialEquationTransformationResult

<a id="entry-presentation_python_object_model_capability_contexts_partial_differential_equation_transformation_result_api_partial_differential_equations_partialdifferentialequationtransformationresult"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationtransformationresult.d20831abed72"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class PartialDifferentialEquationTransformationResult
```

The transformed problem or typed decline from an exact change of variables.

## PartialDifferentialEquationTransformationVerificationReport

<a id="entry-presentation_python_object_model_capability_contexts_partial_differential_equation_transformation_verification_report_api_partial_differential_equations_partialdifferentialequationtransformationverificationreport"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationtransformationverificationreport.d3734a054b14"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class PartialDifferentialEquationTransformationVerificationReport
```

Independent exact evidence that a coordinate transformation is correct.

## PartialDifferentialEquationVerificationReport

<a id="entry-presentation_python_object_model_capability_contexts_partial_differential_equation_verification_report_api_partial_differential_equations_partialdifferentialequationverificationreport"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationverificationreport.53d4e9c949a7"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class PartialDifferentialEquationVerificationReport
```

Independent exact verification evidence for a PDE candidate solution.

## __add__

<a id="entry-presentation_python_object_model_capability_contexts_add_unresolved"></a>
<a id="placement-placement.python.python_class.expression_add.58a4bd4dd71b"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
__add__(other: Any) -> Expression
```

Sum `self + other`, returning a new expression.

## __bool__

<a id="entry-presentation_python_object_model_capability_contexts_bool_unresolved"></a>
<a id="placement-placement.python.python_class.expression_bool.69418ace2aed"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
__bool__() -> bool
```

Always raises: symbolic truth is three-valued, so use `evaluate_truth` instead.

## __call__

<a id="entry-presentation_python_object_model_capability_contexts_call_unresolved"></a>
<a id="placement-placement.python.python_class.undefinedfunction_call.e796dd930962"></a>
<p class="symi-entry-owner">UndefinedFunction method</p>

```python signature
__call__(*arguments: Any) -> Expression
```

Apply the named function to `arguments`, building an unevaluated `function_call`.

## __eq__

<a id="entry-presentation_python_object_model_capability_contexts_eq_unresolved"></a>
<a id="placement-placement.python.python_class.expression_eq.5a2d56342b69"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
__eq__(other: Any) -> bool
```

Structural equality of two expressions from the same live context; use `equal` to build a relation.

## __getattribute__

<a id="entry-presentation_python_object_model_capability_contexts_getattribute_unresolved"></a>
<a id="placement-placement.python.python_class.expression_getattribute.76962b06f74d"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
__getattribute__(name: str) -> Any
```

Reject attribute access on a stale object before delegating to the default lookup.

## __hash__

<a id="entry-presentation_python_object_model_capability_contexts_hash_unresolved"></a>
<a id="placement-placement.python.python_class.expression_hash.fcf6ce555e16"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
__hash__() -> int
```

Hash consistent with structural equality, so expressions can key a dict or set.

## __iter__

<a id="entry-presentation_python_object_model_capability_contexts_iter_unresolved"></a>
<a id="placement-placement.python.python_class.expression_iter.f81354937f72"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
__iter__() -> Any
```

Iterate the elements of a `finite_set` expression.

## __len__

<a id="entry-presentation_python_object_model_capability_contexts_len_unresolved"></a>
<a id="placement-placement.python.python_class.expression_len.d43139256aa0"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
__len__() -> int
```

Number of elements of a `finite_set` expression.

## __mul__

<a id="entry-presentation_python_object_model_capability_contexts_mul_unresolved"></a>
<a id="placement-placement.python.python_class.expression_mul.605ba0478e43"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
__mul__(other: Any) -> Expression
```

Product `self * other`, returning a new expression.

## __ne__

<a id="entry-presentation_python_object_model_capability_contexts_ne_unresolved"></a>
<a id="placement-placement.python.python_class.expression_ne.8cbf473dc2ff"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
__ne__(other: Any) -> bool
```

Structural inequality, the negation of `__eq__`.

## __neg__

<a id="entry-presentation_python_object_model_capability_contexts_neg_unresolved"></a>
<a id="placement-placement.python.python_class.expression_neg.ef8096e95741"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
__neg__() -> Expression
```

Negation `-self`, returning a new expression.

## __pow__

<a id="entry-presentation_python_object_model_capability_contexts_pow_unresolved"></a>
<a id="placement-placement.python.python_class.expression_pow.ac2cb53ba3dc"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
__pow__(exponent: Any, modulo: Optional[Any] = ...) -> Expression
```

Power `self ** exponent`; the three-argument form is rejected.

## __radd__

<a id="entry-presentation_python_object_model_capability_contexts_radd_unresolved"></a>
<a id="placement-placement.python.python_class.expression_radd.b3f9590b78f9"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
__radd__(other: Any) -> Expression
```

Sum `other + self`, returning a new expression.

## __repr__

<a id="entry-presentation_python_object_model_capability_contexts_repr_unresolved"></a>
<a id="placement-placement.python.python_class.expression_repr.51e3a215dd82"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
__repr__() -> str
```

The `repr()` text, which reports staleness instead of failing.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.partialdifferentialequationproblem_repr.b3dee485a3ee"></a>
<p class="symi-entry-owner">PartialDifferentialEquationProblem method: <code>PartialDifferentialEquationProblem.__repr__</code></p>

```python signature
__repr__() -> str
```

<a id="placement-placement.python.python_class.undefinedfunction_repr.8398a418ad39"></a>
<p class="symi-entry-owner">UndefinedFunction method: <code>UndefinedFunction.__repr__</code></p>

```python signature
__repr__() -> str
```

</details>

## __rmul__

<a id="entry-presentation_python_object_model_capability_contexts_rmul_unresolved"></a>
<a id="placement-placement.python.python_class.expression_rmul.fd487c5f63ce"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
__rmul__(other: Any) -> Expression
```

Product `other * self`, returning a new expression.

## __rpow__

<a id="entry-presentation_python_object_model_capability_contexts_rpow_unresolved"></a>
<a id="placement-placement.python.python_class.expression_rpow.ea98d5ba5b89"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
__rpow__(base: Any, modulo: Optional[Any] = ...) -> Expression
```

Power `base ** self`; the three-argument form is rejected.

## __rsub__

<a id="entry-presentation_python_object_model_capability_contexts_rsub_unresolved"></a>
<a id="placement-placement.python.python_class.expression_rsub.2815deb80733"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
__rsub__(other: Any) -> Expression
```

Difference `other - self`, returning a new expression.

## __rtruediv__

<a id="entry-presentation_python_object_model_capability_contexts_rtruediv_unresolved"></a>
<a id="placement-placement.python.python_class.expression_rtruediv.f1cdc35ec1fa"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
__rtruediv__(other: Any) -> Expression
```

Quotient `other / self`, returning a new expression.

## __str__

<a id="entry-presentation_python_object_model_capability_contexts_str_unresolved"></a>
<a id="placement-placement.python.python_class.expression_str.329819f4a97c"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
__str__() -> str
```

The mathematical text of the expression.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.assumptionproposition_str.4c1fd8746e1e"></a>
<p class="symi-entry-owner">AssumptionProposition method: <code>AssumptionProposition.__str__</code></p>

```python signature
__str__() -> str
```

<a id="placement-placement.python.python_class.partialdifferentialequationproblem_str.6a17cc0d3853"></a>
<p class="symi-entry-owner">PartialDifferentialEquationProblem method: <code>PartialDifferentialEquationProblem.__str__</code></p>

```python signature
__str__() -> str
```

</details>

## __sub__

<a id="entry-presentation_python_object_model_capability_contexts_sub_unresolved"></a>
<a id="placement-placement.python.python_class.expression_sub.f0d35560c2a2"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
__sub__(other: Any) -> Expression
```

Difference `self - other`, returning a new expression.

## __truediv__

<a id="entry-presentation_python_object_model_capability_contexts_truediv_unresolved"></a>
<a id="placement-placement.python.python_class.expression_truediv.14a00eccae14"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
__truediv__(other: Any) -> Expression
```

Quotient `self / other`, returning a new expression.

## add

<a id="entry-presentation_python_object_model_capability_contexts_add_api_matrix_add"></a>
<a id="placement-placement.python.python_class.matrix_add.ab8ce536842a"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
add(other: Matrix) -> Matrix
```

Entrywise sum of two matrices of the same shape.

## add_assumptions

<a id="entry-presentation_python_assumptions_capability_contexts_add_assumptions_api_session_add_assumptions"></a>
<a id="placement-placement.python.python_module.module_add_assumptions.5534bc9705a0"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
add_assumptions(proposition: Any) -> None
```

Add a proposition to the default context's durable assumption store.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_add_assumptions.3c5c1e06a162"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.add_assumptions</code></p>

```python signature
add_assumptions(proposition: Any) -> None
```

</details>

## admits_additive_solution_symmetry

<a id="entry-presentation_python_object_model_capability_contexts_admits_additive_solution_symmetry_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_admits_additive_solution_symmetry"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryaction_admits_additive_solution_symmetry.a40e17458d0a"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAction property</p>

```python signature
admits_additive_solution_symmetry: bool
```

Whether the action adds an arbitrary solution by linear superposition.

## admits_additive_solution_symmetry

<a id="entry-presentation_python_object_model_capability_contexts_admits_additive_solution_symmetry_api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_admits_additive_solution_symmetry"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryalgebra_admits_additive_solution_symmetry.0efa3cd7d81a"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAlgebra property</p>

```python signature
admits_additive_solution_symmetry: bool
```

Whether adding any solution of the linear homogeneous equation is also a symmetry.

## algebraic_assumption

<a id="entry-presentation_python_assumptions_capability_contexts_algebraic_assumption_api_session_algebraic_assumption"></a>
<a id="placement-placement.python.python_module.module_algebraic_assumption.3e42ce87f0c8"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
algebraic_assumption(input_expression: ExpressionLike) -> AssumptionProposition
```

Build an algebraicity assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_algebraic_assumption.6668f28bbcab"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.algebraic_assumption</code></p>

```python signature
algebraic_assumption(subject: ExpressionLike) -> AssumptionProposition
```

</details>

## amplitude

<a id="entry-presentation_python_object_model_capability_contexts_amplitude_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_amplitude"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryaction_amplitude.0452aee1f4e0"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAction property</p>

```python signature
amplitude: Optional[expression]
```

The amplitude multiplying the transformed seed.

## and

<a id="entry-presentation_python_assumptions_capability_contexts_and_api_assumptionproposition_and"></a>
<a id="placement-placement.python.python_class.assumptionproposition_and.6f0fb9535ca0"></a>
<p class="symi-entry-owner">AssumptionProposition method</p>

```python signature
and(other)
```

Conjoin two propositions.

## applied_to_seed

<a id="entry-presentation_python_object_model_capability_contexts_applied_to_seed_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_applied_to_seed"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryaction_applied_to_seed.43551abec47e"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAction method</p>

```python signature
applied_to_seed(seed: undefined_function) -> expression
```

The transformed seed solution under the action.

## applied_to_seed_with_additive_solution

<a id="entry-presentation_python_object_model_capability_contexts_applied_to_seed_with_additive_solution_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_applied_to_seed_with_additive_solution"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryaction_applied_to_seed_with_additive_solution.68bd4a5f4310"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAction method</p>

```python signature
applied_to_seed_with_additive_solution(
    seed: undefined_function,
    additive_solution: undefined_function,
) -> expression
```

The transformed seed solution plus an added solution under the action.

## arbitrary_functions

<a id="entry-presentation_python_object_model_capability_contexts_arbitrary_functions_api_partial_differential_equations_partialdifferentialequationsolutionfamily_arbitrary_functions"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsolutionfamily_arbitrary_functions.299cc635305d"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolutionFamily property</p>

```python signature
arbitrary_functions: list[PartialDifferentialEquationArbitraryFunction]
```

The functions that stay arbitrary and opaque throughout verification.

## arity

<a id="entry-presentation_python_object_model_capability_contexts_arity_api_partial_differential_equations_partialdifferentialequationarbitraryfunction_arity"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationarbitraryfunction_arity.84a63ebfd4de"></a>
<p class="symi-entry-owner">PartialDifferentialEquationArbitraryFunction property</p>

```python signature
arity: int
```

The recorded and validated function arity.

## ask

<a id="entry-presentation_python_assumptions_capability_contexts_ask_api_assumptionscope_ask"></a>
<a id="placement-placement.python.python_class.assumptionscope_ask.8b509b1e4374"></a>
<p class="symi-entry-owner">AssumptionScope method</p>

```python signature
ask(proposition: Any) -> Optional[bool]
```

Ask a proposition against the immutable scope snapshot.

## ask

<a id="entry-presentation_python_assumptions_capability_contexts_ask_api_session_ask"></a>
<a id="placement-placement.python.python_module.module_ask.46448bddac9d"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
ask(proposition: Any) -> Optional[bool]
```

Ask whether a proposition is entailed by the default context's assumptions.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_ask.5e7d1d8a46a1"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.ask</code></p>

```python signature
ask(proposition: Any) -> Optional[bool]
```

</details>

## assuming

<a id="entry-presentation_python_assumptions_capability_contexts_assuming_api_assumptionscope_assuming"></a>
<a id="placement-placement.python.python_class.assumptionscope_assuming.8472ace80b00"></a>
<p class="symi-entry-owner">AssumptionScope method</p>

```python signature
assuming(proposition: Any) -> AssumptionScope
```

Compose a further immutable overlay.

## assuming

<a id="entry-presentation_python_assumptions_capability_contexts_assuming_api_session_assuming"></a>
<a id="placement-placement.python.python_module.module_assuming.d8dc7c25ca26"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
assuming(proposition: Any) -> AssumptionScope
```

Create an immutable local assumption scope in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_assuming.428587b6ed47"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.assuming</code></p>

```python signature
assuming(proposition: Any) -> AssumptionScope
```

</details>

## assumption_proposition_from_logical_expression

<a id="entry-presentation_python_assumptions_capability_contexts_assumption_proposition_from_logical_expression_api_session_assumption_proposition_from_logical_expression"></a>
<a id="placement-placement.python.python_module.module_assumption_proposition_from_logical_expression.75701bde4184"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
assumption_proposition_from_logical_expression(logical_expression: ExpressionLike) -> AssumptionProposition
```

Convert a supported logical expression to a typed assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_assumption_proposition_from_logical_expression.6bb099358e64"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.assumption_proposition_from_logical_expression</code></p>

```python signature
assumption_proposition_from_logical_expression(logical_expression: ExpressionLike) -> AssumptionProposition
```

</details>

## assumptions_of

<a id="entry-presentation_python_default_context_capability_contexts_assumptions_of_api_session_assumptions_of"></a>
<a id="placement-placement.python.python_module.module_assumptions_of.424be849193d"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
assumptions_of(variable: Any) -> list[str]
```

Return every assumption declared about one symbol, as a list of proposition texts such as `"real(x)"` or `"prime(n)"`. The variable may be a name or same-context symbol. The list is what was declared, not what can be proved; use `ask` for a three-valued verdict.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_assumptions_of.e7cbe7b56f50"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.assumptions_of</code></p>

```python signature
assumptions_of(variable: Any) -> list[str]
```

</details>

## basis

<a id="entry-presentation_python_object_model_capability_contexts_basis_api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_basis"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryalgebra_basis.6303fe70e9f9"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAlgebra property</p>

```python signature
basis: list[partial_differential_equation_point_symmetry_generator]
```

The independently verified basis generators, one per parameter.

## boundary_condition_residuals

<a id="entry-presentation_python_object_model_capability_contexts_boundary_condition_residuals_api_partial_differential_equations_partialdifferentialequationverificationreport_boundary_condition_residuals"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationverificationreport_boundary_condition_residuals.d27e4537a107"></a>
<p class="symi-entry-owner">PartialDifferentialEquationVerificationReport property</p>

```python signature
boundary_condition_residuals: list[PartialDifferentialEquationVerificationResidual]
```

One reduced residual per boundary condition, in insertion order.

## boundary_conditions

<a id="entry-presentation_python_object_model_capability_contexts_boundary_conditions_api_partial_differential_equations_partialdifferentialequationproblem_boundary_conditions"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationproblem_boundary_conditions.8f03369049ed"></a>
<p class="symi-entry-owner">PartialDifferentialEquationProblem property</p>

```python signature
boundary_conditions: list[Expression]
```

The boundary-condition residuals in insertion order.

## canonicalize_partial_differential_equation

<a id="entry-presentation_python_object_model_capability_contexts_canonicalize_partial_differential_equation_api_partial_differential_equations_session_canonicalize_partial_differential_equation"></a>
<a id="placement-placement.python.python_module.module_canonicalize_partial_differential_equation.a52ec715a39a"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
canonicalize_partial_differential_equation(problem: PartialDifferentialEquationProblem) -> PartialDifferentialEquationCanonicalizationResult
```

Construct and independently verify exact canonical coordinates for a supported PDE.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_canonicalize_partial_differential_equation.c15668c55ef8"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.canonicalize_partial_differential_equation</code></p>

```python signature
canonicalize_partial_differential_equation(problem: PartialDifferentialEquationProblem) -> PartialDifferentialEquationCanonicalizationResult
```

</details>

## canonicalized

<a id="entry-presentation_python_object_model_capability_contexts_canonicalized_api_partial_differential_equations_partialdifferentialequationcanonicalizationresult_canonicalized"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationcanonicalizationresult_canonicalized.b7cda59605f4"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCanonicalizationResult property</p>

```python signature
canonicalized: bool
```

Whether verified canonical coordinates were constructed.

## cases

<a id="entry-presentation_python_object_model_capability_contexts_cases_api_partial_differential_equations_partialdifferentialequationsecondorderclassification_cases"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsecondorderclassification_cases.f2ecce2bacf2"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSecondOrderClassification property</p>

```python signature
cases: list[PartialDifferentialEquationSecondOrderTypeCase]
```

The complete exact case table, when the verdict is conditional.

## change_partial_differential_equation_variables

<a id="entry-presentation_python_object_model_capability_contexts_change_partial_differential_equation_variables_api_partial_differential_equations_session_change_partial_differential_equation_variables"></a>
<a id="placement-placement.python.python_module.module_change_partial_differential_equation_variables.ea81302fbc97"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
change_partial_differential_equation_variables(
    problem: PartialDifferentialEquationProblem,
    target_variables: Iterable[VariableLike],
    forward_coordinates: Optional[Iterable[ExpressionLike]] = None,
    inverse_coordinates: Optional[Iterable[ExpressionLike]] = None,
    target_dependent_function: Optional[Any] = None,
) -> PartialDifferentialEquationTransformationResult
```

Transform a two-variable PDE through an exact user-supplied change of variables.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_change_partial_differential_equation_variables.2c37631230c9"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.change_partial_differential_equation_variables</code></p>

```python signature
change_partial_differential_equation_variables(
    problem: PartialDifferentialEquationProblem,
    target_variables: Iterable[VariableLike],
    forward_coordinates: Optional[Iterable[ExpressionLike]] = None,
    inverse_coordinates: Optional[Iterable[ExpressionLike]] = None,
    target_dependent_function: Optional[Any] = None,
) -> PartialDifferentialEquationTransformationResult
```

</details>

## claimed_governing_residual

<a id="entry-presentation_python_object_model_capability_contexts_claimed_governing_residual_api_partial_differential_equations_partialdifferentialequationtransformationverificationreport_claimed_governing_residual"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationtransformationverificationreport_claimed_governing_residual.feccf290837c"></a>
<p class="symi-entry-owner">PartialDifferentialEquationTransformationVerificationReport property</p>

```python signature
claimed_governing_residual: Expression
```

The governing residual the transformation claimed.

## classify_partial_differential_equation

<a id="entry-presentation_python_object_model_capability_contexts_classify_partial_differential_equation_api_partial_differential_equations_session_classify_partial_differential_equation"></a>
<a id="placement-placement.python.python_module.module_classify_partial_differential_equation.35014b001694"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
classify_partial_differential_equation(problem: PartialDifferentialEquationProblem) -> PartialDifferentialEquationClassification
```

Classify a validated scalar partial differential equation with exact structural analysis.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_classify_partial_differential_equation.f80771a4e3c1"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.classify_partial_differential_equation</code></p>

```python signature
classify_partial_differential_equation(problem: PartialDifferentialEquationProblem) -> PartialDifferentialEquationClassification
```

</details>

## classify_second_order_partial_differential_equation

<a id="entry-presentation_python_object_model_capability_contexts_classify_second_order_partial_differential_equation_api_partial_differential_equations_session_classify_second_order_partial_differential_equation"></a>
<a id="placement-placement.python.python_module.module_classify_second_order_partial_differential_equation.4366ea8e6378"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
classify_second_order_partial_differential_equation(problem: PartialDifferentialEquationProblem) -> PartialDifferentialEquationSecondOrderClassification
```

Classify a two-variable linear second-order PDE over real coordinates.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_classify_second_order_partial_differential_equation.7f924f5a5610"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.classify_second_order_partial_differential_equation</code></p>

```python signature
classify_second_order_partial_differential_equation(problem: PartialDifferentialEquationProblem) -> PartialDifferentialEquationSecondOrderClassification
```

</details>

## clear_all_assumptions

<a id="entry-presentation_python_assumptions_capability_contexts_clear_all_assumptions_api_session_clear_all_assumptions"></a>
<a id="placement-placement.python.python_module.module_clear_all_assumptions.118de91197c2"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
clear_all_assumptions() -> None
```

Clear all assumptions in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_clear_all_assumptions.f74c63d49ce3"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.clear_all_assumptions</code></p>

```python signature
clear_all_assumptions() -> None
```

</details>

## clear_assumptions

<a id="entry-presentation_python_default_context_capability_contexts_clear_assumptions_api_session_clear_assumptions"></a>
<a id="placement-placement.python.python_module.module_clear_assumptions.398dca35137b"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
clear_assumptions(variable: VariableLike) -> None
```

Reset one symbol's assumptions to the default (complex domain, every property unknown).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_clear_assumptions.771138d405c3"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.clear_assumptions</code></p>

```python signature
clear_assumptions(variable: VariableLike) -> None
```

</details>

## coefficient_data

<a id="entry-presentation_python_object_model_capability_contexts_coefficient_data_api_partial_differential_equations_partialdifferentialequationclassification_coefficient_data"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationclassification_coefficient_data.d0f091b30ed3"></a>
<p class="symi-entry-owner">PartialDifferentialEquationClassification property</p>

```python signature
coefficient_data: PartialDifferentialEquationCoefficientData
```

The exact affine coefficient data extracted from the governing residual.

## complex_assumption

<a id="entry-presentation_python_assumptions_capability_contexts_complex_assumption_api_session_complex_assumption"></a>
<a id="placement-placement.python.python_module.module_complex_assumption.5e420f8c1172"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
complex_assumption(input_expression: ExpressionLike) -> AssumptionProposition
```

Build a finite-complex assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_complex_assumption.83b9529b0377"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.complex_assumption</code></p>

```python signature
complex_assumption(subject: ExpressionLike) -> AssumptionProposition
```

</details>

## complex_entries

<a id="entry-presentation_python_object_model_capability_contexts_complex_entries_api_session_complex_entries"></a>
<a id="placement-placement.python.python_module.module_complex_entries.ad74d94f6a7e"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
complex_entries(subject: Matrix) -> AssumptionProposition
```

Build a finite-complex-entry proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_complex_entries.5f2958b71aba"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.complex_entries</code></p>

```python signature
complex_entries(subject: Matrix) -> AssumptionProposition
```

</details>

## components

<a id="entry-presentation_python_object_model_capability_contexts_components_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_components"></a>
<a id="placement-placement.python.python_class.ordinarydifferentialequationsystemsolveresult_components.ce8bfaadda21"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSystemSolveResult property</p>

```python signature
components: list[expression]
```

One explicit value per declared unknown, in declaration order, when solved.

## composite_assumption

<a id="entry-presentation_python_assumptions_capability_contexts_composite_assumption_api_session_composite_assumption"></a>
<a id="placement-placement.python.python_module.module_composite_assumption.30dbacb9ae11"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
composite_assumption(input_expression: ExpressionLike) -> AssumptionProposition
```

Build a compositeness assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_composite_assumption.aebcd0430cc3"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.composite_assumption</code></p>

```python signature
composite_assumption(subject: ExpressionLike) -> AssumptionProposition
```

</details>

## composition_residuals

<a id="entry-presentation_python_object_model_capability_contexts_composition_residuals_api_partial_differential_equations_partialdifferentialequationtransformationverificationreport_composition_residuals"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationtransformationverificationreport_composition_residuals.d9fedd58e205"></a>
<p class="symi-entry-owner">PartialDifferentialEquationTransformationVerificationReport property</p>

```python signature
composition_residuals: list[Expression]
```

Every forward and inverse map-composition residual.

## condition

<a id="entry-presentation_python_object_model_capability_contexts_condition_api_partial_differential_equations_partialdifferentialequationsecondordertypecase_condition"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsecondordertypecase_condition.2de3ae8d0f76"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSecondOrderTypeCase property</p>

```python signature
condition: AssumptionProposition
```

The exact condition under which this case's classical type holds.

## congruence_modulus

<a id="entry-presentation_python_assumptions_capability_contexts_congruence_modulus_api_assumptionproposition_congruence_modulus"></a>
<a id="placement-placement.python.python_module.module_congruence_modulus.0d5d260ad39c"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
congruence_modulus(proposition: Any) -> Optional[Expression]
```

Return the congruence modulus when present.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.assumptionproposition_congruence_modulus.5c6a48aa27a2"></a>
<p class="symi-entry-owner">AssumptionProposition method: <code>AssumptionProposition.congruence_modulus</code></p>

```python signature
congruence_modulus() -> Optional[Expression]
```

</details>

## congruent_assumption

<a id="entry-presentation_python_assumptions_capability_contexts_congruent_assumption_api_defaults_session_congruent_assumption"></a>
<a id="placement-placement.python.python_module.module_congruent_assumption.c97dfd2fafe9"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
congruent_assumption(
    left: ExpressionLike,
    right: ExpressionLike,
    modulus: ExpressionLike,
) -> AssumptionProposition
```

Build an integer-congruence assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_congruent_assumption.2b5d2841f8f7"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.congruent_assumption</code></p>

```python signature
congruent_assumption(
    left: ExpressionLike,
    right: ExpressionLike,
    modulus: ExpressionLike,
) -> AssumptionProposition
```

</details>

## coordinate_change

<a id="entry-presentation_python_object_model_capability_contexts_coordinate_change_api_partial_differential_equations_partialdifferentialequationtransformationresult_coordinate_change"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationtransformationresult_coordinate_change.c0a6c7f8c2c7"></a>
<p class="symi-entry-owner">PartialDifferentialEquationTransformationResult property</p>

```python signature
coordinate_change: Optional[PartialDifferentialEquationCoordinateChange]
```

The validated coordinate change of a successful transformation.

## coordinate_infinitesimals

<a id="entry-presentation_python_object_model_capability_contexts_coordinate_infinitesimals_api_partial_differential_equations_partialdifferentialequationpointsymmetrygenerator_coordinate_infinitesimals"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetrygenerator_coordinate_infinitesimals.433d9a3c7be8"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryGenerator property</p>

```python signature
coordinate_infinitesimals: list[expression]
```

The coordinate infinitesimals in the problem's independent-variable order.

## could_hold

<a id="entry-presentation_python_assumptions_capability_contexts_could_hold_api_assumptionscope_could_hold"></a>
<a id="placement-placement.python.python_class.assumptionscope_could_hold.79ec09546b09"></a>
<p class="symi-entry-owner">AssumptionScope method</p>

```python signature
could_hold(proposition: Any) -> Optional[bool]
```

Ask whether a proposition is compatible with the immutable scope snapshot.

## could_hold

<a id="entry-presentation_python_assumptions_capability_contexts_could_hold_api_session_could_hold"></a>
<a id="placement-placement.python.python_module.module_could_hold.7a7a59f32b15"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
could_hold(proposition: Any) -> Optional[bool]
```

Ask whether a proposition is compatible with the default context's assumptions.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_could_hold.e4f6b1a8f31f"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.could_hold</code></p>

```python signature
could_hold(proposition: Any) -> Optional[bool]
```

</details>

## decline

<a id="entry-presentation_python_object_model_capability_contexts_decline_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_decline"></a>
<a id="placement-placement.python.python_class.ordinarydifferentialequationsolveresult_decline.97b6a3b080c9"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSolveResult property</p>

```python signature
decline: Optional[str]
```

The typed reason no certified candidate was produced.

## decline

<a id="entry-presentation_python_object_model_capability_contexts_decline_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_decline"></a>
<a id="placement-placement.python.python_class.ordinarydifferentialequationsystemsolveresult_decline.73605e35c453"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSystemSolveResult property</p>

```python signature
decline: Optional[str]
```

The typed reason no certified assignment was produced.

## decline

<a id="entry-presentation_python_object_model_capability_contexts_decline_api_partial_differential_equations_partialdifferentialequationcanonicalizationresult_decline"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationcanonicalizationresult_decline.209eebc522b0"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCanonicalizationResult property</p>

```python signature
decline: Optional[str]
```

The exact reason automatic canonicalization declined.

## decline

<a id="entry-presentation_python_object_model_capability_contexts_decline_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_decline"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryaction_decline.ec0449047038"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAction property</p>

```python signature
decline: Optional[str]
```

The typed reason the action was not constructed.

## decline

<a id="entry-presentation_python_object_model_capability_contexts_decline_api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_decline"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryalgebra_decline.926d29357a74"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAlgebra property</p>

```python signature
decline: Optional[str]
```

The typed reason the algebra was not derived.

## decline

<a id="entry-presentation_python_object_model_capability_contexts_decline_api_partial_differential_equations_partialdifferentialequationsecondorderclassification_decline"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsecondorderclassification_decline.66efe7a284d8"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSecondOrderClassification property</p>

```python signature
decline: Optional[str]
```

The exact reason an unknown analysis could not be completed.

## decline

<a id="entry-presentation_python_object_model_capability_contexts_decline_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_decline"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsimilaritysolution_decline.1993ab6269f4"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSimilaritySolution property</p>

```python signature
decline: Optional[str]
```

The typed reason no similarity family was produced.

## decline

<a id="entry-presentation_python_object_model_capability_contexts_decline_api_partial_differential_equations_partialdifferentialequationsolveresult_decline"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsolveresult_decline.5ec3951f6b50"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolveResult property</p>

```python signature
decline: Optional[str]
```

The stable decline reason, when no solution was produced.

## decline

<a id="entry-presentation_python_object_model_capability_contexts_decline_api_partial_differential_equations_partialdifferentialequationtransformationresult_decline"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationtransformationresult_decline.51f4aa097b90"></a>
<p class="symi-entry-owner">PartialDifferentialEquationTransformationResult property</p>

```python signature
decline: Optional[str]
```

The exact reason no transformation was produced.

## default_context

<a id="entry-presentation_python_default_context_capability_contexts_default_context_api_defaults_session_default_context"></a>
<a id="placement-placement.python.python_module.module_default_context.4c78b13e3560"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
default_context() -> Context
```

Return a handle to the thread's default context — the same context every module-level function and direct structural-class constructor uses. Use it for `undefined_function`, or to pass to code written against the explicit-context API. Each call returns a new handle to the same underlying context.

## defined_assumption

<a id="entry-presentation_python_assumptions_capability_contexts_defined_assumption_api_session_defined_assumption"></a>
<a id="placement-placement.python.python_module.module_defined_assumption.c4e03a95c53d"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
defined_assumption(input_expression: ExpressionLike) -> AssumptionProposition
```

Build a pointwise definedness assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_defined_assumption.11fa043594f7"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.defined_assumption</code></p>

```python signature
defined_assumption(subject: ExpressionLike) -> AssumptionProposition
```

</details>

## dependent_function

<a id="entry-presentation_python_object_model_capability_contexts_dependent_function_api_partial_differential_equations_partialdifferentialequationproblem_dependent_function"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationproblem_dependent_function.b24dfa1c2033"></a>
<p class="symi-entry-owner">PartialDifferentialEquationProblem property</p>

```python signature
dependent_function: str
```

The declared dependent-function name.

## dependent_infinitesimal

<a id="entry-presentation_python_object_model_capability_contexts_dependent_infinitesimal_api_partial_differential_equations_partialdifferentialequationpointsymmetrygenerator_dependent_infinitesimal"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetrygenerator_dependent_infinitesimal.418e6bc28927"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryGenerator property</p>

```python signature
dependent_infinitesimal: expression
```

The dependent infinitesimal of the generator.

## derivative_coefficients

<a id="entry-presentation_python_object_model_capability_contexts_derivative_coefficients_api_partial_differential_equations_partialdifferentialequationprincipalpart_derivative_coefficients"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationprincipalpart_derivative_coefficients.1a0212ab6c98"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPrincipalPart property</p>

```python signature
derivative_coefficients: list[PartialDifferentialEquationPrincipalCoefficient]
```

The raw mixed-derivative coefficients, before symmetrization halves them.

## derivative_orders

<a id="entry-presentation_python_object_model_capability_contexts_derivative_orders_unresolved"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationjetcoefficient_derivative_orders.f1ad7bc43c9f"></a>
<p class="symi-entry-owner">PartialDifferentialEquationJetCoefficient property</p>

```python signature
derivative_orders: list[int]
```

The derivative multi-index of the jet this coefficient multiplies.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.partialdifferentialequationprincipalcoefficient_derivative_orders.a56dfe30a372"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPrincipalCoefficient property: <code>PartialDifferentialEquationPrincipalCoefficient.derivative_orders</code></p>

```python signature
derivative_orders: list[int]
```

</details>

## deserialize_assumption_proposition

<a id="entry-presentation_python_assumptions_capability_contexts_deserialize_assumption_proposition_api_session_deserialize_assumption_proposition"></a>
<a id="placement-placement.python.python_module.module_deserialize_assumption_proposition.ef24a2ce4ba6"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
deserialize_assumption_proposition(text: str) -> AssumptionProposition
```

Parse a versioned canonical assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_deserialize_assumption_proposition.e74c9fe0297b"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.deserialize_assumption_proposition</code></p>

```python signature
deserialize_assumption_proposition(text: str) -> AssumptionProposition
```

</details>

## determining_equations

<a id="entry-presentation_python_object_model_capability_contexts_determining_equations_api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_determining_equations"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryalgebra_determining_equations.41a1666298dc"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAlgebra property</p>

```python signature
determining_equations: list[expression]
```

The determining equations exactly as derived, before any reduction.

## diagonal_matrix

<a id="entry-presentation_python_object_model_capability_contexts_diagonal_matrix_api_session_diagonal_matrix"></a>
<a id="placement-placement.python.python_module.module_diagonal_matrix.cb2bd3eae1d2"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
diagonal_matrix(subject: Matrix) -> AssumptionProposition
```

Build a diagonal-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_diagonal_matrix.d5c6b8521631"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.diagonal_matrix</code></p>

```python signature
diagonal_matrix(subject: Matrix) -> AssumptionProposition
```

</details>

## differentiate_bulk

<a id="entry-presentation_python_object_model_capability_contexts_differentiate_bulk_api_session_differentiate_bulk"></a>
<a id="placement-placement.python.python_module.module_differentiate_bulk.362ccffbf089"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
differentiate_bulk(
    targets: PythonExpressionCollectionInput,
    variable: PythonExpressionInput,
) -> Any
```

Differentiate an ordered collection in the thread's default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_differentiate_bulk.2900b36d44c8"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.differentiate_bulk</code></p>

```python signature
differentiate_bulk(
    targets: PythonExpressionCollectionInput,
    variable: PythonExpressionInput,
) -> Any
```

</details>

## discharged_obligations

<a id="entry-presentation_python_object_model_capability_contexts_discharged_obligations_api_partial_differential_equations_partialdifferentialequationsolutionprovenance_discharged_obligations"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsolutionprovenance_discharged_obligations.4dd3fc6c7d13"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolutionProvenance property</p>

```python signature
discharged_obligations: list[str]
```

The obligations discharged by exact query before the solution was returned.

## discover_partial_differential_equation

<a id="entry-presentation_python_object_model_capability_contexts_discover_partial_differential_equation_api_partial_differential_equations_session_discover_partial_differential_equation"></a>
<a id="placement-placement.python.python_module.module_discover_partial_differential_equation.52ddbbb333c3"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
discover_partial_differential_equation(
    equation: ExpressionInput,
    initial_conditions: Optional[ExpressionCollectionInput] = None,
    boundary_conditions: Optional[ExpressionCollectionInput] = None,
) -> PartialDifferentialEquationProblem
```

Discover the unique scalar partial differential equation signature from one governing residual, in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_discover_partial_differential_equation.65f033d1c9b8"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.discover_partial_differential_equation</code></p>

```python signature
discover_partial_differential_equation(
    equation: ExpressionLike,
    initial_conditions: Iterable[ExpressionLike] = None,
    boundary_conditions: Iterable[ExpressionLike] = None,
) -> PartialDifferentialEquationProblem
```

</details>

## discriminant

<a id="entry-presentation_python_object_model_capability_contexts_discriminant_api_partial_differential_equations_partialdifferentialequationsecondorderclassification_discriminant"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsecondorderclassification_discriminant.eb5014c76a4a"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSecondOrderClassification property</p>

```python signature
discriminant: Expression
```

The exact discriminant `b^2 - a*c` of the symmetric principal matrix.

## equal_assumption

<a id="entry-presentation_python_assumptions_capability_contexts_equal_assumption_api_defaults_session_equal_assumption"></a>
<a id="placement-placement.python.python_module.module_equal_assumption.167e0c4b07ea"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
equal_assumption(
    left: ExpressionLike,
    right: ExpressionLike,
) -> AssumptionProposition
```

Build an equality assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_equal_assumption.c01ebdd8014d"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.equal_assumption</code></p>

```python signature
equal_assumption(
    left: ExpressionLike,
    right: ExpressionLike,
) -> AssumptionProposition
```

</details>

## equation_type

<a id="entry-presentation_python_object_model_capability_contexts_equation_type_api_partial_differential_equations_partialdifferentialequationsecondorderclassification_equation_type"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsecondorderclassification_equation_type.e904ef6cfc4d"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSecondOrderClassification property</p>

```python signature
equation_type: Optional[str]
```

The single proved classical type, when the verdict is definite.

## equation_type

<a id="entry-presentation_python_object_model_capability_contexts_equation_type_api_partial_differential_equations_partialdifferentialequationsecondordertypecase_equation_type"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsecondordertypecase_equation_type.e9d6236bfae8"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSecondOrderTypeCase property</p>

```python signature
equation_type: str
```

The classical type proved under this case's condition.

## evaluate_numeric_bulk

<a id="entry-presentation_python_object_model_capability_contexts_evaluate_numeric_bulk_api_session_evaluate_numeric_bulk"></a>
<a id="placement-placement.python.python_module.module_evaluate_numeric_bulk.80f5ed832fcb"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
evaluate_numeric_bulk(targets: PythonExpressionCollectionInput) -> Any
```

Evaluate an ordered collection numerically in the thread's default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_evaluate_numeric_bulk.98a931a15f6a"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.evaluate_numeric_bulk</code></p>

```python signature
evaluate_numeric_bulk(targets: PythonExpressionCollectionInput) -> Any
```

</details>

## even_assumption

<a id="entry-presentation_python_assumptions_capability_contexts_even_assumption_api_session_even_assumption"></a>
<a id="placement-placement.python.python_module.module_even_assumption.0344d2eb9537"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
even_assumption(input_expression: ExpressionLike) -> AssumptionProposition
```

Build an evenness assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_even_assumption.12ea745ce233"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.even_assumption</code></p>

```python signature
even_assumption(subject: ExpressionLike) -> AssumptionProposition
```

</details>

## execution_mode

<a id="entry-presentation_python_context_safety_capability_contexts_execution_mode_api_session_execution_mode"></a>
<a id="placement-placement.python.python_module.module_execution_mode.bc3844c8b07c"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
execution_mode() -> str
```

Return the execution mode selected by the thread's default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_execution_mode.3d2eb694420d"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.execution_mode</code></p>

```python signature
execution_mode() -> str
```

</details>

## expand_bulk

<a id="entry-presentation_python_object_model_capability_contexts_expand_bulk_api_session_expand_bulk"></a>
<a id="placement-placement.python.python_module.module_expand_bulk.dfeb447b0fd8"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
expand_bulk(targets: PythonExpressionCollectionInput) -> Any
```

Expand an ordered collection in the thread's default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_expand_bulk.0e3995efc016"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.expand_bulk</code></p>

```python signature
expand_bulk(targets: PythonExpressionCollectionInput) -> Any
```

</details>

## explicit_branch

<a id="entry-presentation_python_object_model_capability_contexts_explicit_branch_api_partial_differential_equations_partialdifferentialequationverificationreport_explicit_branch"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationverificationreport_explicit_branch.c215fb42d5ba"></a>
<p class="symi-entry-owner">PartialDifferentialEquationVerificationReport property</p>

```python signature
explicit_branch: Optional[Expression]
```

The isolated explicit branch checked for an implicit candidate.

## explicit_partial_differential_equation_solution

<a id="entry-presentation_python_object_model_capability_contexts_explicit_partial_differential_equation_solution_api_partial_differential_equations_session_explicit_partial_differential_equation_solution"></a>
<a id="placement-placement.python.python_module.module_explicit_partial_differential_equation_solution.2a00578eaf74"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
explicit_partial_differential_equation_solution(
    solution: ExpressionInput,
    arbitrary_functions: Optional[list[PartialDifferentialEquationArbitraryFunction]] = None,
    proof_obligations: Optional[list[str]] = None,
) -> PartialDifferentialEquationSolutionFamily
```

Create an explicit partial differential equation solution family in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_explicit_partial_differential_equation_solution.ed2a21850eb6"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.explicit_partial_differential_equation_solution</code></p>

```python signature
explicit_partial_differential_equation_solution(
    solution: ExpressionLike,
    arbitrary_functions: Any = ...,
    proof_obligations: Any = ...,
) -> PartialDifferentialEquationSolutionFamily
```

</details>

## expression

<a id="entry-presentation_python_object_model_capability_contexts_expression_unresolved"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsolutionfamily_expression.c54e5da11722"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolutionFamily property</p>

```python signature
expression: Expression
```

The exact candidate expression carried by this family.

## extended_real_assumption

<a id="entry-presentation_python_assumptions_capability_contexts_extended_real_assumption_api_session_extended_real_assumption"></a>
<a id="placement-placement.python.python_module.module_extended_real_assumption.1e226df989bd"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
extended_real_assumption(input_expression: ExpressionLike) -> AssumptionProposition
```

Build an extended-real assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_extended_real_assumption.07eea67a7a45"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.extended_real_assumption</code></p>

```python signature
extended_real_assumption(subject: ExpressionLike) -> AssumptionProposition
```

</details>

## finite_assumption

<a id="entry-presentation_python_assumptions_capability_contexts_finite_assumption_api_session_finite_assumption"></a>
<a id="placement-placement.python.python_module.module_finite_assumption.ff3558f6b171"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
finite_assumption(input_expression: ExpressionLike) -> AssumptionProposition
```

Build a finiteness assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_finite_assumption.81e9cb0c27c6"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.finite_assumption</code></p>

```python signature
finite_assumption(subject: ExpressionLike) -> AssumptionProposition
```

</details>

## first_equation

<a id="entry-presentation_python_object_model_capability_contexts_first_equation_api_partial_differential_equations_partialdifferentialequationseparationresult_first_equation"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationseparationresult_first_equation.da9731e36890"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSeparationResult property</p>

```python signature
first_equation: PartialDifferentialEquationSeparatedEquation
```

The first exact separated ODE.

## form

<a id="entry-presentation_python_object_model_capability_contexts_form_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_form"></a>
<a id="placement-placement.python.python_class.ordinarydifferentialequationsolveresult_form.fb9c33113e1f"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSolveResult property</p>

```python signature
form: Optional[str]
```

Whether the solution is the value of the unknown or a relation read as zero.

## form

<a id="entry-presentation_python_object_model_capability_contexts_form_api_partial_differential_equations_partialdifferentialequationsolutionfamily_form"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsolutionfamily_form.1c89bcadafda"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolutionFamily property</p>

```python signature
form: Any
```

Whether this candidate is an `explicit` value or an `implicit` residual.

## forward_coordinates

<a id="entry-presentation_python_object_model_capability_contexts_forward_coordinates_api_partial_differential_equations_partialdifferentialequationcoordinatechange_forward_coordinates"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationcoordinatechange_forward_coordinates.02503a3a9116"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCoordinateChange property</p>

```python signature
forward_coordinates: list[Expression]
```

The ordered source-to-target coordinate expressions.

## frequency_domain_equation

<a id="entry-presentation_python_object_model_capability_contexts_frequency_domain_equation_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_frequency_domain_equation"></a>
<a id="placement-placement.python.python_class.ordinarydifferentialequationsolveresult_frequency_domain_equation.d67bda0a2e26"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSolveResult property</p>

```python signature
frequency_domain_equation: Optional[expression]
```

The frequency-domain equation of a Laplace transform solution, read as zero.

## full_coefficients

<a id="entry-presentation_python_object_model_capability_contexts_full_coefficients_api_partial_differential_equations_partialdifferentialequationcoefficientdata_full_coefficients"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationcoefficientdata_full_coefficients.daaae70574cb"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCoefficientData property</p>

```python signature
full_coefficients: Optional[list[PartialDifferentialEquationJetCoefficient]]
```

Every jet coefficient, when the equation is exactly linear.

## full_rank_matrix

<a id="entry-presentation_python_object_model_capability_contexts_full_rank_matrix_api_session_full_rank_matrix"></a>
<a id="placement-placement.python.python_module.module_full_rank_matrix.bca25f7ee25a"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
full_rank_matrix(subject: Matrix) -> AssumptionProposition
```

Build a full-rank-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_full_rank_matrix.927198cb7f5e"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.full_rank_matrix</code></p>

```python signature
full_rank_matrix(subject: Matrix) -> AssumptionProposition
```

</details>

## general_generator

<a id="entry-presentation_python_object_model_capability_contexts_general_generator_api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_general_generator"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryalgebra_general_generator.606696d514c2"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAlgebra property</p>

```python signature
general_generator: Optional[partial_differential_equation_point_symmetry_generator]
```

The general generator, a combination of the basis through the parameters.

## generality

<a id="entry-presentation_python_object_model_capability_contexts_generality_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_generality"></a>
<a id="placement-placement.python.python_class.ordinarydifferentialequationsolveresult_generality.69c1f19a3095"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSolveResult property</p>

```python signature
generality: Optional[str]
```

The rank decision behind a complete-family claim, when the request required one.

## generality

<a id="entry-presentation_python_object_model_capability_contexts_generality_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_generality"></a>
<a id="placement-placement.python.python_class.ordinarydifferentialequationsystemsolveresult_generality.29335d39f0fd"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSystemSolveResult property</p>

```python signature
generality: Optional[str]
```

The rank decision on the constants-to-initial-jet map, when verification ran.

## generality

<a id="entry-presentation_python_object_model_capability_contexts_generality_api_ordinary_differential_equations_ordinarydifferentialequationsystemverificationreport_generality"></a>
<a id="placement-placement.python.python_class.ordinarydifferentialequationsystemverificationreport_generality.dc50930dc8fc"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSystemVerificationReport property</p>

```python signature
generality: str
```

The rank decision on the map from the supplied constants to the initial jet.

## generated_constants

<a id="entry-presentation_python_object_model_capability_contexts_generated_constants_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_generated_constants"></a>
<a id="placement-placement.python.python_class.ordinarydifferentialequationsolveresult_generated_constants.76586028281a"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSolveResult property</p>

```python signature
generated_constants: list[expression]
```

Exactly the constants the solution treats as free.

## generated_constants

<a id="entry-presentation_python_object_model_capability_contexts_generated_constants_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_generated_constants"></a>
<a id="placement-placement.python.python_class.ordinarydifferentialequationsystemsolveresult_generated_constants.f8b463ed4cc5"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSystemSolveResult property</p>

```python signature
generated_constants: list[expression]
```

Exactly the constants the assignment treats as free.

## governing_residual

<a id="entry-presentation_python_object_model_capability_contexts_governing_residual_api_partial_differential_equations_partialdifferentialequationverificationreport_governing_residual"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationverificationreport_governing_residual.174594f9f244"></a>
<p class="symi-entry-owner">PartialDifferentialEquationVerificationReport property</p>

```python signature
governing_residual: Any
```

Independently reduced governing-equation evidence.

## greater_assumption

<a id="entry-presentation_python_assumptions_capability_contexts_greater_assumption_api_defaults_session_greater_assumption"></a>
<a id="placement-placement.python.python_module.module_greater_assumption.1ba0f7d7ae7d"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
greater_assumption(
    left: ExpressionLike,
    right: ExpressionLike,
) -> AssumptionProposition
```

Build a strict scalar-order assumption proposition with reversed operands in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_greater_assumption.1cc4159f5617"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.greater_assumption</code></p>

```python signature
greater_assumption(
    left: ExpressionLike,
    right: ExpressionLike,
) -> AssumptionProposition
```

</details>

## greater_or_equal_assumption

<a id="entry-presentation_python_assumptions_capability_contexts_greater_or_equal_assumption_api_defaults_session_greater_or_equal_assumption"></a>
<a id="placement-placement.python.python_module.module_greater_or_equal_assumption.26650392c272"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
greater_or_equal_assumption(
    left: ExpressionLike,
    right: ExpressionLike,
) -> AssumptionProposition
```

Build a non-strict scalar-order assumption proposition with reversed operands in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_greater_or_equal_assumption.3917a98caf90"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.greater_or_equal_assumption</code></p>

```python signature
greater_or_equal_assumption(
    left: ExpressionLike,
    right: ExpressionLike,
) -> AssumptionProposition
```

</details>

## has_complex_entries

<a id="entry-presentation_python_object_model_capability_contexts_has_complex_entries_api_matrix_has_complex_entries"></a>
<a id="placement-placement.python.python_class.matrix_has_complex_entries.e69d7e187678"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
has_complex_entries() -> Optional[bool]
```

Query whether every entry is finite complex.

## has_integer_entries

<a id="entry-presentation_python_object_model_capability_contexts_has_integer_entries_api_matrix_has_integer_entries"></a>
<a id="placement-placement.python.python_class.matrix_has_integer_entries.3fe8e758b6ff"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
has_integer_entries() -> Optional[bool]
```

Query whether every entry is an integer.

## has_real_entries

<a id="entry-presentation_python_object_model_capability_contexts_has_real_entries_api_matrix_has_real_entries"></a>
<a id="placement-placement.python.python_class.matrix_has_real_entries.5b15ebbe5ce6"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
has_real_entries() -> Optional[bool]
```

Query whether every entry is real.

## hermitian_matrix

<a id="entry-presentation_python_object_model_capability_contexts_hermitian_matrix_api_session_hermitian_matrix"></a>
<a id="placement-placement.python.python_module.module_hermitian_matrix.9fe4c0c586b6"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
hermitian_matrix(subject: Matrix) -> AssumptionProposition
```

Build a Hermitian-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_hermitian_matrix.b735ad83a78d"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.hermitian_matrix</code></p>

```python signature
hermitian_matrix(subject: Matrix) -> AssumptionProposition
```

</details>

## highest_order_coefficients

<a id="entry-presentation_python_object_model_capability_contexts_highest_order_coefficients_api_partial_differential_equations_partialdifferentialequationcoefficientdata_highest_order_coefficients"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationcoefficientdata_highest_order_coefficients.8b4789085db5"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCoefficientData property</p>

```python signature
highest_order_coefficients: Optional[list[PartialDifferentialEquationJetCoefficient]]
```

The highest-order jet coefficients, when the equation is affine in them.

## homogeneous

<a id="entry-presentation_python_object_model_capability_contexts_homogeneous_api_partial_differential_equations_partialdifferentialequationcoefficientdata_homogeneous"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationcoefficientdata_homogeneous.dbe994183f40"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCoefficientData property</p>

```python signature
homogeneous: Optional[bool]
```

Whether the equation was proved homogeneous, when that statement is meaningful.

## identity_matrix

<a id="entry-presentation_python_object_model_capability_contexts_identity_matrix_api_session_identity_matrix"></a>
<a id="placement-placement.python.python_module.module_identity_matrix.4d6c93f48f1e"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
identity_matrix(subject: Matrix) -> AssumptionProposition
```

Build an identity-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_identity_matrix.0ebf4e138e96"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.identity_matrix</code></p>

```python signature
identity_matrix(subject: Matrix) -> AssumptionProposition
```

</details>

## image

<a id="entry-presentation_python_object_model_capability_contexts_image_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_image"></a>
<a id="placement-placement.python.python_class.ordinarydifferentialequationsolveresult_image.423aa8e2cc90"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSolveResult property</p>

```python signature
image: Optional[expression]
```

The image of the unknown a Laplace transform solution solved for.

## implicit_partial_differential_equation_solution

<a id="entry-presentation_python_object_model_capability_contexts_implicit_partial_differential_equation_solution_api_partial_differential_equations_session_implicit_partial_differential_equation_solution"></a>
<a id="placement-placement.python.python_module.module_implicit_partial_differential_equation_solution.192367f01daf"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
implicit_partial_differential_equation_solution(
    residual: ExpressionInput,
    arbitrary_functions: Optional[list[PartialDifferentialEquationArbitraryFunction]] = None,
    proof_obligations: Optional[list[str]] = None,
) -> PartialDifferentialEquationSolutionFamily
```

Create an implicit partial differential equation solution family in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_implicit_partial_differential_equation_solution.d565ff6b0430"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.implicit_partial_differential_equation_solution</code></p>

```python signature
implicit_partial_differential_equation_solution(
    residual: ExpressionLike,
    arbitrary_functions: Any = ...,
    proof_obligations: Any = ...,
) -> PartialDifferentialEquationSolutionFamily
```

</details>

## inconclusive_reason

<a id="entry-presentation_python_object_model_capability_contexts_inconclusive_reason_api_partial_differential_equations_partialdifferentialequationverificationreport_inconclusive_reason"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationverificationreport_inconclusive_reason.b874f0a79d2b"></a>
<p class="symi-entry-owner">PartialDifferentialEquationVerificationReport property</p>

```python signature
inconclusive_reason: Optional[str]
```

The deterministic reason verification could not reach a proof.

## independent_variable_name

<a id="entry-presentation_python_object_model_capability_contexts_independent_variable_name_api_partial_differential_equations_partialdifferentialequationseparatedequation_independent_variable_name"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationseparatedequation_independent_variable_name.bd1a8a824c6d"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSeparatedEquation property</p>

```python signature
independent_variable_name: str
```

The name of this ODE's independent variable.

## independent_variables

<a id="entry-presentation_python_object_model_capability_contexts_independent_variables_api_partial_differential_equations_partialdifferentialequationproblem_independent_variables"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationproblem_independent_variables.fbea44b1e2dd"></a>
<p class="symi-entry-owner">PartialDifferentialEquationProblem property</p>

```python signature
independent_variables: list[str]
```

The independent variables in their semantic declared order.

## infinite_assumption

<a id="entry-presentation_python_assumptions_capability_contexts_infinite_assumption_api_session_infinite_assumption"></a>
<a id="placement-placement.python.python_module.module_infinite_assumption.cbda15e8b727"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
infinite_assumption(input_expression: ExpressionLike) -> AssumptionProposition
```

Build an infinity assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_infinite_assumption.2d77e250a82b"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.infinite_assumption</code></p>

```python signature
infinite_assumption(subject: ExpressionLike) -> AssumptionProposition
```

</details>

## initial_condition_residuals

<a id="entry-presentation_python_object_model_capability_contexts_initial_condition_residuals_api_partial_differential_equations_partialdifferentialequationverificationreport_initial_condition_residuals"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationverificationreport_initial_condition_residuals.32a899a2e2b1"></a>
<p class="symi-entry-owner">PartialDifferentialEquationVerificationReport property</p>

```python signature
initial_condition_residuals: list[PartialDifferentialEquationVerificationResidual]
```

One reduced residual per initial condition, in insertion order.

## initial_conditions

<a id="entry-presentation_python_object_model_capability_contexts_initial_conditions_api_partial_differential_equations_partialdifferentialequationproblem_initial_conditions"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationproblem_initial_conditions.36dcc6dd1e1d"></a>
<p class="symi-entry-owner">PartialDifferentialEquationProblem property</p>

```python signature
initial_conditions: list[Expression]
```

The initial-condition residuals in insertion order.

## initialize_parallelism

<a id="entry-presentation_python_object_model_capability_contexts_initialize_parallelism_api_session_initialize_parallelism"></a>
<a id="placement-placement.python.python_module.module_initialize_parallelism.4ce7fbe05c03"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
initialize_parallelism(worker_count: int) -> str
```

Initialize the process-wide parallel backend from the thread's default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_initialize_parallelism.b18527ef97b9"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.initialize_parallelism</code></p>

```python signature
initialize_parallelism(worker_count: int) -> str
```

</details>

## integer_assumption

<a id="entry-presentation_python_assumptions_capability_contexts_integer_assumption_api_session_integer_assumption"></a>
<a id="placement-placement.python.python_module.module_integer_assumption.f185036b04c6"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
integer_assumption(input_expression: ExpressionLike) -> AssumptionProposition
```

Build an integer assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_integer_assumption.85a64395b991"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.integer_assumption</code></p>

```python signature
integer_assumption(subject: ExpressionLike) -> AssumptionProposition
```

</details>

## integer_entries

<a id="entry-presentation_python_object_model_capability_contexts_integer_entries_api_session_integer_entries"></a>
<a id="placement-placement.python.python_module.module_integer_entries.d6ab920262bc"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
integer_entries(subject: Matrix) -> AssumptionProposition
```

Build an integer-entry proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_integer_entries.f379e76f46af"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.integer_entries</code></p>

```python signature
integer_entries(subject: Matrix) -> AssumptionProposition
```

</details>

## integrate_definite_under_constraint

<a id="entry-presentation_python_object_model_capability_contexts_integrate_definite_under_constraint_api_session_integrate_definite_under_constraint"></a>
<a id="placement-placement.python.python_module.module_integrate_definite_under_constraint.8f9a35858e9d"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
integrate_definite_under_constraint(
    input_expression: ExpressionLike,
    variable: Any,
    lower: ExpressionLike,
    upper: ExpressionLike,
    constraint: ExpressionLike,
) -> Expression
```

Definite integration under a local bounded logical constraint.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_integrate_definite_under_constraint.69fda3541ccd"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.integrate_definite_under_constraint</code></p>

```python signature
integrate_definite_under_constraint(
    input_expression: ExpressionLike,
    variable: Any,
    lower: ExpressionLike,
    upper: ExpressionLike,
    constraint: ExpressionLike,
) -> Expression
```

</details>

## integrate_definite_under_constraint

<a id="entry-presentation_python_object_model_capability_contexts_integrate_definite_under_constraint_api_expression_integrate_definite_under_constraint"></a>
<a id="placement-placement.python.python_class.expression_integrate_definite_under_constraint.360d68b2ae2c"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
integrate_definite_under_constraint(
    variable: Any,
    lower: ExpressionLike,
    upper: ExpressionLike,
    constraint: ExpressionLike,
) -> Expression
```

Definite integration under a local bounded logical constraint.

## interner_length

<a id="entry-presentation_python_default_context_capability_contexts_interner_length_api_session_interner_length"></a>
<a id="placement-placement.python.python_module.module_interner_length.6d201fc0bf07"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
interner_length() -> int
```

Number of live expressions currently interned in the context. Dead entries awaiting the amortized sweep are not counted. Useful for observing memory in long-running sessions and in tests that assert the store stays bounded.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_interner_length.39934db2a23f"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.interner_length</code></p>

```python signature
interner_length() -> int
```

</details>

## intertwining

<a id="entry-presentation_python_object_model_capability_contexts_intertwining_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_intertwining"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryaction_intertwining.e228d1a0b73d"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAction property</p>

```python signature
intertwining: Optional[str]
```

The exact decision on the intertwining identity.

## invariant

<a id="entry-presentation_python_object_model_capability_contexts_invariant_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_invariant"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsimilaritysolution_invariant.e7c03a6b811a"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSimilaritySolution property</p>

```python signature
invariant: Optional[expression]
```

The invariant of the generator's base field.

## inverse_coordinates

<a id="entry-presentation_python_object_model_capability_contexts_inverse_coordinates_api_partial_differential_equations_partialdifferentialequationcoordinatechange_inverse_coordinates"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationcoordinatechange_inverse_coordinates.b11eb810ac1f"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCoordinateChange property</p>

```python signature
inverse_coordinates: list[Expression]
```

The ordered target-to-source coordinate expressions.

## invertibility

<a id="entry-presentation_python_object_model_capability_contexts_invertibility_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_invertibility"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryaction_invertibility.9065eb9a060b"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAction property</p>

```python signature
invertibility: Optional[str]
```

The exact decision that the coordinate map is invertible on its chart.

## invertible_matrix

<a id="entry-presentation_python_object_model_capability_contexts_invertible_matrix_api_session_invertible_matrix"></a>
<a id="placement-placement.python.python_module.module_invertible_matrix.4d17a3ac74e2"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
invertible_matrix(subject: Matrix) -> AssumptionProposition
```

Build an invertible-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_invertible_matrix.ad8b55dfcfb8"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.invertible_matrix</code></p>

```python signature
invertible_matrix(subject: Matrix) -> AssumptionProposition
```

</details>

## irrational_assumption

<a id="entry-presentation_python_assumptions_capability_contexts_irrational_assumption_api_session_irrational_assumption"></a>
<a id="placement-placement.python.python_module.module_irrational_assumption.3e0ac49ac535"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
irrational_assumption(input_expression: ExpressionLike) -> AssumptionProposition
```

Build an irrationality assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_irrational_assumption.66f194e38ebe"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.irrational_assumption</code></p>

```python signature
irrational_assumption(subject: ExpressionLike) -> AssumptionProposition
```

</details>

## is_algebraic

<a id="entry-presentation_python_object_model_capability_contexts_is_algebraic_api_expression_is_algebraic"></a>
<a id="placement-placement.python.python_class.expression_is_algebraic.68ea1091eca2"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_algebraic() -> Optional[bool]
```

Whether the expression is known to be algebraic.

## is_complex

<a id="entry-presentation_python_object_model_capability_contexts_is_complex_api_expression_is_complex"></a>
<a id="placement-placement.python.python_class.expression_is_complex.c64638be3cc5"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_complex() -> Optional[bool]
```

Whether the expression is known to be finite complex.

## is_composite

<a id="entry-presentation_python_object_model_capability_contexts_is_composite_api_expression_is_composite"></a>
<a id="placement-placement.python.python_class.expression_is_composite.5048052ad74b"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_composite() -> Optional[bool]
```

Whether the expression is known to be composite.

## is_diagonal_matrix

<a id="entry-presentation_python_object_model_capability_contexts_is_diagonal_matrix_api_matrix_is_diagonal_matrix"></a>
<a id="placement-placement.python.python_class.matrix_is_diagonal_matrix.5335fe934256"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
is_diagonal_matrix() -> Optional[bool]
```

Query whether this matrix is diagonal.

## is_even

<a id="entry-presentation_python_object_model_capability_contexts_is_even_api_expression_is_even"></a>
<a id="placement-placement.python.python_class.expression_is_even.b24e23216d5b"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_even() -> Optional[bool]
```

Whether the expression is known to be even.

## is_extended_real

<a id="entry-presentation_python_object_model_capability_contexts_is_extended_real_api_expression_is_extended_real"></a>
<a id="placement-placement.python.python_class.expression_is_extended_real.80f714a04d07"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_extended_real() -> Optional[bool]
```

Whether the expression is known to be extended-real.

## is_full_rank_matrix

<a id="entry-presentation_python_object_model_capability_contexts_is_full_rank_matrix_api_matrix_is_full_rank_matrix"></a>
<a id="placement-placement.python.python_class.matrix_is_full_rank_matrix.26e1c2964606"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
is_full_rank_matrix() -> Optional[bool]
```

Query whether this matrix has full rank.

## is_hermitian_matrix

<a id="entry-presentation_python_object_model_capability_contexts_is_hermitian_matrix_api_matrix_is_hermitian_matrix"></a>
<a id="placement-placement.python.python_class.matrix_is_hermitian_matrix.0f20491b19a5"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
is_hermitian_matrix() -> Optional[bool]
```

Query whether this matrix is Hermitian.

## is_identity_matrix

<a id="entry-presentation_python_object_model_capability_contexts_is_identity_matrix_api_matrix_is_identity_matrix"></a>
<a id="placement-placement.python.python_class.matrix_is_identity_matrix.fe1d1afefd5e"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
is_identity_matrix() -> Optional[bool]
```

Query whether this matrix is the identity matrix.

## is_infinite

<a id="entry-presentation_python_object_model_capability_contexts_is_infinite_api_expression_is_infinite"></a>
<a id="placement-placement.python.python_class.expression_is_infinite.db44c70207f2"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_infinite() -> Optional[bool]
```

Whether the expression is known to be infinite.

## is_invertible_matrix

<a id="entry-presentation_python_object_model_capability_contexts_is_invertible_matrix_api_matrix_is_invertible_matrix"></a>
<a id="placement-placement.python.python_class.matrix_is_invertible_matrix.5784807b0f4c"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
is_invertible_matrix() -> Optional[bool]
```

Query whether this matrix is invertible.

## is_irrational

<a id="entry-presentation_python_object_model_capability_contexts_is_irrational_api_expression_is_irrational"></a>
<a id="placement-placement.python.python_class.expression_is_irrational.97edaad6ba30"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_irrational() -> Optional[bool]
```

Whether the expression is known to be irrational.

## is_natural

<a id="entry-presentation_python_object_model_capability_contexts_is_natural_api_expression_is_natural"></a>
<a id="placement-placement.python.python_class.expression_is_natural.8c704553368c"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_natural() -> Optional[bool]
```

Whether the expression is known to be natural.

## is_nonpositive

<a id="entry-presentation_python_object_model_capability_contexts_is_nonpositive_api_expression_is_nonpositive"></a>
<a id="placement-placement.python.python_class.expression_is_nonpositive.69a4edec7757"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_nonpositive() -> Optional[bool]
```

Whether the expression is known to be nonpositive.

## is_normal_matrix

<a id="entry-presentation_python_object_model_capability_contexts_is_normal_matrix_api_matrix_is_normal_matrix"></a>
<a id="placement-placement.python.python_class.matrix_is_normal_matrix.d4f3f3ee2a5b"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
is_normal_matrix() -> Optional[bool]
```

Query whether this matrix is normal.

## is_odd

<a id="entry-presentation_python_object_model_capability_contexts_is_odd_api_expression_is_odd"></a>
<a id="placement-placement.python.python_class.expression_is_odd.279898eb431e"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_odd() -> Optional[bool]
```

Whether the expression is known to be odd.

## is_orthogonal_matrix

<a id="entry-presentation_python_object_model_capability_contexts_is_orthogonal_matrix_api_matrix_is_orthogonal_matrix"></a>
<a id="placement-placement.python.python_class.matrix_is_orthogonal_matrix.f38fd03d9581"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
is_orthogonal_matrix() -> Optional[bool]
```

Query whether this matrix is orthogonal.

## is_positive_definite_matrix

<a id="entry-presentation_python_object_model_capability_contexts_is_positive_definite_matrix_api_matrix_is_positive_definite_matrix"></a>
<a id="placement-placement.python.python_class.matrix_is_positive_definite_matrix.c44e8e2495dc"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
is_positive_definite_matrix() -> Optional[bool]
```

Query whether this matrix is positive definite.

## is_positive_integer

<a id="entry-presentation_python_object_model_capability_contexts_is_positive_integer_api_expression_is_positive_integer"></a>
<a id="placement-placement.python.python_class.expression_is_positive_integer.d43ced293292"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_positive_integer() -> Optional[bool]
```

Whether the expression is known to be a positive integer.

## is_positive_semidefinite_matrix

<a id="entry-presentation_python_object_model_capability_contexts_is_positive_semidefinite_matrix_api_matrix_is_positive_semidefinite_matrix"></a>
<a id="placement-placement.python.python_class.matrix_is_positive_semidefinite_matrix.f902a6aeabc1"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
is_positive_semidefinite_matrix() -> Optional[bool]
```

Query whether this matrix is positive semidefinite.

## is_singular_matrix

<a id="entry-presentation_python_object_model_capability_contexts_is_singular_matrix_api_matrix_is_singular_matrix"></a>
<a id="placement-placement.python.python_class.matrix_is_singular_matrix.a489349163d9"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
is_singular_matrix() -> Optional[bool]
```

Query whether this matrix is singular.

## is_square

<a id="entry-presentation_python_object_model_capability_contexts_is_square_api_matrix_is_square"></a>
<a id="placement-placement.python.python_class.matrix_is_square.6f63c0a768ab"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
is_square() -> Optional[bool]
```

Query whether this matrix is square.

## is_symmetric_matrix

<a id="entry-presentation_python_object_model_capability_contexts_is_symmetric_matrix_api_matrix_is_symmetric_matrix"></a>
<a id="placement-placement.python.python_class.matrix_is_symmetric_matrix.5a6e2021d34f"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
is_symmetric_matrix() -> Optional[bool]
```

Query whether this matrix is symmetric.

## is_transcendental

<a id="entry-presentation_python_object_model_capability_contexts_is_transcendental_api_expression_is_transcendental"></a>
<a id="placement-placement.python.python_class.expression_is_transcendental.51397fc05a1d"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_transcendental() -> Optional[bool]
```

Whether the expression is known to be transcendental.

## is_unitary_matrix

<a id="entry-presentation_python_object_model_capability_contexts_is_unitary_matrix_api_matrix_is_unitary_matrix"></a>
<a id="placement-placement.python.python_class.matrix_is_unitary_matrix.25b4cc412898"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
is_unitary_matrix() -> Optional[bool]
```

Query whether this matrix is unitary.

## is_zero

<a id="entry-presentation_python_object_model_capability_contexts_is_zero_api_expression_is_zero"></a>
<a id="placement-placement.python.python_class.expression_is_zero.e8cc82d31054"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_zero() -> Optional[bool]
```

Whether the expression is known to be zero.

## is_zero_matrix

<a id="entry-presentation_python_object_model_capability_contexts_is_zero_matrix_api_matrix_is_zero_matrix"></a>
<a id="placement-placement.python.python_class.matrix_is_zero_matrix.d4bf84b7ef84"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
is_zero_matrix() -> Optional[bool]
```

Query whether this matrix is the zero matrix.

## left_operand

<a id="entry-presentation_python_assumptions_capability_contexts_left_operand_api_assumptionproposition_left_operand"></a>
<a id="placement-placement.python.python_module.module_left_operand.4e66dcfbd33f"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
left_operand(proposition: Any) -> Optional[Expression]
```

Return the left relation or congruence operand when present.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.assumptionproposition_left_operand.cee13cef016d"></a>
<p class="symi-entry-owner">AssumptionProposition method: <code>AssumptionProposition.left_operand</code></p>

```python signature
left_operand() -> Optional[Expression]
```

</details>

## length

<a id="entry-presentation_python_object_model_capability_contexts_length_api_segment2d_length"></a>
<a id="placement-placement.python.python_class.segment2d_length.dd559e0e77a3"></a>
<p class="symi-entry-owner">Segment2d method</p>

```python signature
length() -> Expression
```

Also the finite-set length accessor on `expression` in WASM; context disambiguates.

## less_assumption

<a id="entry-presentation_python_assumptions_capability_contexts_less_assumption_api_defaults_session_less_assumption"></a>
<a id="placement-placement.python.python_module.module_less_assumption.dedb60ca39a9"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
less_assumption(
    left: ExpressionLike,
    right: ExpressionLike,
) -> AssumptionProposition
```

Build a strict scalar-order assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_less_assumption.119dbf671dc9"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.less_assumption</code></p>

```python signature
less_assumption(
    left: ExpressionLike,
    right: ExpressionLike,
) -> AssumptionProposition
```

</details>

## less_or_equal_assumption

<a id="entry-presentation_python_assumptions_capability_contexts_less_or_equal_assumption_api_defaults_session_less_or_equal_assumption"></a>
<a id="placement-placement.python.python_module.module_less_or_equal_assumption.e524819ec09a"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
less_or_equal_assumption(
    left: ExpressionLike,
    right: ExpressionLike,
) -> AssumptionProposition
```

Build a non-strict scalar-order assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_less_or_equal_assumption.ad44558346d3"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.less_or_equal_assumption</code></p>

```python signature
less_or_equal_assumption(
    left: ExpressionLike,
    right: ExpressionLike,
) -> AssumptionProposition
```

</details>

## lifted_constants

<a id="entry-presentation_python_object_model_capability_contexts_lifted_constants_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_lifted_constants"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsimilaritysolution_lifted_constants.0a1697f7c174"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSimilaritySolution property</p>

```python signature
lifted_constants: list[expression]
```

The constants the lifted family is parameterized by.

## lifted_family

<a id="entry-presentation_python_object_model_capability_contexts_lifted_family_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_lifted_family"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsimilaritysolution_lifted_family.0c52fcf52fa4"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSimilaritySolution property</p>

```python signature
lifted_family: Optional[partial_differential_equation_solution_family]
```

The invariant solutions of the original equation.

## lifted_family_verification

<a id="entry-presentation_python_object_model_capability_contexts_lifted_family_verification_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_lifted_family_verification"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsimilaritysolution_lifted_family_verification.df253a79ee32"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSimilaritySolution property</p>

```python signature
lifted_family_verification: Optional[str]
```

The exact decision that the lifted family solves the original equation.

## linearity

<a id="entry-presentation_python_object_model_capability_contexts_linearity_api_partial_differential_equations_partialdifferentialequationclassification_linearity"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationclassification_linearity.56f639c46019"></a>
<p class="symi-entry-owner">PartialDifferentialEquationClassification property</p>

```python signature
linearity: str
```

The most-specific exact linearity class.

## linearity

<a id="entry-presentation_python_object_model_capability_contexts_linearity_api_partial_differential_equations_partialdifferentialequationsolutionprovenance_linearity"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsolutionprovenance_linearity.689837d85d4d"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolutionProvenance property</p>

```python signature
linearity: str
```

The exact linearity class recorded at the time the candidate was produced.

## lower_triangular_matrix

<a id="entry-presentation_python_object_model_capability_contexts_lower_triangular_matrix_api_session_lower_triangular_matrix"></a>
<a id="placement-placement.python.python_module.module_lower_triangular_matrix.f7364e2611f4"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
lower_triangular_matrix(subject: Matrix) -> AssumptionProposition
```

Build a lower-triangular-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_lower_triangular_matrix.320e7251eef5"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.lower_triangular_matrix</code></p>

```python signature
lower_triangular_matrix(subject: Matrix) -> AssumptionProposition
```

</details>

## matrix_shape

<a id="entry-presentation_python_object_model_capability_contexts_matrix_shape_api_session_matrix_shape"></a>
<a id="placement-placement.python.python_module.module_matrix_shape.169fd16e9013"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
matrix_shape(
    subject: Matrix,
    rows: int,
    columns: int,
) -> AssumptionProposition
```

Build a matrix shape proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_matrix_shape.1d55b535ae28"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.matrix_shape</code></p>

```python signature
matrix_shape(
    subject: Matrix,
    rows: int,
    columns: int,
) -> AssumptionProposition
```

</details>

## member_assumption

<a id="entry-presentation_python_assumptions_capability_contexts_member_assumption_api_defaults_session_member_assumption"></a>
<a id="placement-placement.python.python_module.module_member_assumption.a60e8dee72bc"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
member_assumption(
    element: ExpressionLike,
    set_expression: ExpressionLike,
) -> AssumptionProposition
```

Build a scalar-membership assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_member_assumption.70329535155f"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.member_assumption</code></p>

```python signature
member_assumption(
    element: ExpressionLike,
    set_expression: ExpressionLike,
) -> AssumptionProposition
```

</details>

## membership_element

<a id="entry-presentation_python_assumptions_capability_contexts_membership_element_api_assumptionproposition_membership_element"></a>
<a id="placement-placement.python.python_module.module_membership_element.eefd24abb000"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
membership_element(proposition: Any) -> Optional[Expression]
```

Return the membership element when present.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.assumptionproposition_membership_element.af61b3a44cd8"></a>
<p class="symi-entry-owner">AssumptionProposition method: <code>AssumptionProposition.membership_element</code></p>

```python signature
membership_element() -> Optional[Expression]
```

</details>

## membership_set

<a id="entry-presentation_python_assumptions_capability_contexts_membership_set_api_assumptionproposition_membership_set"></a>
<a id="placement-placement.python.python_module.module_membership_set.a1132ccbd58a"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
membership_set(proposition: Any) -> Optional[Expression]
```

Return the membership set expression when present.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.assumptionproposition_membership_set.86537461a6a8"></a>
<p class="symi-entry-owner">AssumptionProposition method: <code>AssumptionProposition.membership_set</code></p>

```python signature
membership_set() -> Optional[Expression]
```

</details>

## method

<a id="entry-presentation_python_object_model_capability_contexts_method_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_method"></a>
<a id="placement-placement.python.python_class.ordinarydifferentialequationsolveresult_method.75a7820ecba4"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSolveResult property</p>

```python signature
method: str
```

The method the request actually ran.

## method

<a id="entry-presentation_python_object_model_capability_contexts_method_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_method"></a>
<a id="placement-placement.python.python_class.ordinarydifferentialequationsystemsolveresult_method.e890e7536e13"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSystemSolveResult property</p>

```python signature
method: str
```

The method the system request actually ran.

## method

<a id="entry-presentation_python_object_model_capability_contexts_method_api_partial_differential_equations_partialdifferentialequationmethodcandidate_method"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationmethodcandidate_method.5c046b720aee"></a>
<p class="symi-entry-owner">PartialDifferentialEquationMethodCandidate property</p>

```python signature
method: str
```

The stable advisory method name.

## method

<a id="entry-presentation_python_object_model_capability_contexts_method_api_partial_differential_equations_partialdifferentialequationsolutionprovenance_method"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsolutionprovenance_method.eb18b6c344a2"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolutionProvenance property</p>

```python signature
method: str
```

The method identity this solution was produced by.

## method

<a id="entry-presentation_python_object_model_capability_contexts_method_api_partial_differential_equations_partialdifferentialequationsolveresult_method"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsolveresult_method.99e32f6d4621"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolveResult property</p>

```python signature
method: Optional[str]
```

The method that produced a solution, when one did.

## method_candidates

<a id="entry-presentation_python_object_model_capability_contexts_method_candidates_api_partial_differential_equations_partialdifferentialequationclassification_method_candidates"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationclassification_method_candidates.cb1e50b6f94c"></a>
<p class="symi-entry-owner">PartialDifferentialEquationClassification property</p>

```python signature
method_candidates: Any
```

The advisory methods in deterministic preference order.

## multiplier

<a id="entry-presentation_python_object_model_capability_contexts_multiplier_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_multiplier"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryaction_multiplier.3aadf88e1108"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAction property</p>

```python signature
multiplier: Optional[expression]
```

The multiplier of the intertwining identity.

## multiplier

<a id="entry-presentation_python_object_model_capability_contexts_multiplier_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_multiplier"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsimilaritysolution_multiplier.bb4222681cd4"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSimilaritySolution property</p>

```python signature
multiplier: Optional[expression]
```

The multiplier of the reduction identity.

## multiply

<a id="entry-presentation_python_object_model_capability_contexts_multiply_api_matrix_multiply"></a>
<a id="placement-placement.python.python_class.matrix_multiply.b71d7e16636b"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
multiply(other: Matrix) -> Matrix
```

Matrix product; inner dimensions must agree.

## name

<a id="entry-presentation_python_object_model_capability_contexts_name_api_partial_differential_equations_partialdifferentialequationarbitraryfunction_name"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationarbitraryfunction_name.49a7f2bf3c70"></a>
<p class="symi-entry-owner">PartialDifferentialEquationArbitraryFunction property</p>

```python signature
name: str
```

The collision-free allocated function name.

## natural_assumption

<a id="entry-presentation_python_assumptions_capability_contexts_natural_assumption_api_session_natural_assumption"></a>
<a id="placement-placement.python.python_module.module_natural_assumption.c1a9825dc555"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
natural_assumption(input_expression: ExpressionLike) -> AssumptionProposition
```

Build a natural-number assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_natural_assumption.8a2217ce89fb"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.natural_assumption</code></p>

```python signature
natural_assumption(subject: ExpressionLike) -> AssumptionProposition
```

</details>

## negative_assumption

<a id="entry-presentation_python_assumptions_capability_contexts_negative_assumption_api_session_negative_assumption"></a>
<a id="placement-placement.python.python_module.module_negative_assumption.c1ee3fb881dd"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
negative_assumption(input_expression: ExpressionLike) -> AssumptionProposition
```

Build a strict-negativity assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_negative_assumption.ee80216da503"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.negative_assumption</code></p>

```python signature
negative_assumption(subject: ExpressionLike) -> AssumptionProposition
```

</details>

## nonnegative_assumption

<a id="entry-presentation_python_object_model_capability_contexts_nonnegative_assumption_api_session_nonnegative_assumption"></a>
<a id="placement-placement.python.python_module.module_nonnegative_assumption.7c69dc7cf6b5"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
nonnegative_assumption(input_expression: ExpressionLike) -> AssumptionProposition
```

Build a universe-guarded nonnegative assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_nonnegative_assumption.c0947f110757"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.nonnegative_assumption</code></p>

```python signature
nonnegative_assumption(subject: ExpressionLike) -> AssumptionProposition
```

</details>

## nonpositive_assumption

<a id="entry-presentation_python_object_model_capability_contexts_nonpositive_assumption_api_session_nonpositive_assumption"></a>
<a id="placement-placement.python.python_module.module_nonpositive_assumption.e2a94e839e39"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
nonpositive_assumption(input_expression: ExpressionLike) -> AssumptionProposition
```

Build a universe-guarded nonpositive assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_nonpositive_assumption.efacdb59df5d"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.nonpositive_assumption</code></p>

```python signature
nonpositive_assumption(subject: ExpressionLike) -> AssumptionProposition
```

</details>

## nonzero_assumption

<a id="entry-presentation_python_assumptions_capability_contexts_nonzero_assumption_api_session_nonzero_assumption"></a>
<a id="placement-placement.python.python_module.module_nonzero_assumption.8b80885792a9"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
nonzero_assumption(input_expression: ExpressionLike) -> AssumptionProposition
```

Build a nonzero assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_nonzero_assumption.d99730d01532"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.nonzero_assumption</code></p>

```python signature
nonzero_assumption(subject: ExpressionLike) -> AssumptionProposition
```

</details>

## normal_matrix

<a id="entry-presentation_python_object_model_capability_contexts_normal_matrix_api_session_normal_matrix"></a>
<a id="placement-placement.python.python_module.module_normal_matrix.b8fd28bfb4a1"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
normal_matrix(subject: Matrix) -> AssumptionProposition
```

Build a normal-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_normal_matrix.57490eb83d5d"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.normal_matrix</code></p>

```python signature
normal_matrix(subject: Matrix) -> AssumptionProposition
```

</details>

## normalization_multiplier

<a id="entry-presentation_python_object_model_capability_contexts_normalization_multiplier_api_partial_differential_equations_partialdifferentialequationtransformationresult_normalization_multiplier"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationtransformationresult_normalization_multiplier.0a7d0a2ec99b"></a>
<p class="symi-entry-owner">PartialDifferentialEquationTransformationResult property</p>

```python signature
normalization_multiplier: Optional[Expression]
```

The proved-nonzero residual-normalization multiplier.

## not

<a id="entry-presentation_python_assumptions_capability_contexts_not_api_assumptionproposition_not"></a>
<a id="placement-placement.python.python_class.assumptionproposition_not.045676b20152"></a>
<p class="symi-entry-owner">AssumptionProposition method</p>

```python signature
not()
```

Negate a proposition.

## not_equal_assumption

<a id="entry-presentation_python_assumptions_capability_contexts_not_equal_assumption_api_defaults_session_not_equal_assumption"></a>
<a id="placement-placement.python.python_module.module_not_equal_assumption.78a9f583401a"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
not_equal_assumption(
    left: ExpressionLike,
    right: ExpressionLike,
) -> AssumptionProposition
```

Build a disequality assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_not_equal_assumption.2f875ce168e2"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.not_equal_assumption</code></p>

```python signature
not_equal_assumption(
    left: ExpressionLike,
    right: ExpressionLike,
) -> AssumptionProposition
```

</details>

## odd_assumption

<a id="entry-presentation_python_assumptions_capability_contexts_odd_assumption_api_session_odd_assumption"></a>
<a id="placement-placement.python.python_module.module_odd_assumption.7248f3f6e827"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
odd_assumption(input_expression: ExpressionLike) -> AssumptionProposition
```

Build an oddness assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_odd_assumption.d9cf44c4ac2d"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.odd_assumption</code></p>

```python signature
odd_assumption(subject: ExpressionLike) -> AssumptionProposition
```

</details>

## or

<a id="entry-presentation_python_assumptions_capability_contexts_or_api_assumptionproposition_or"></a>
<a id="placement-placement.python.python_class.assumptionproposition_or.de6031767101"></a>
<p class="symi-entry-owner">AssumptionProposition method</p>

```python signature
or(other)
```

Disjoin two propositions.

## order

<a id="entry-presentation_python_object_model_capability_contexts_order_api_partial_differential_equations_partialdifferentialequationclassification_order"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationclassification_order.7d5c5173ea9b"></a>
<p class="symi-entry-owner">PartialDifferentialEquationClassification property</p>

```python signature
order: int
```

The exact highest derivative order.

## order

<a id="entry-presentation_python_object_model_capability_contexts_order_api_partial_differential_equations_partialdifferentialequationsolutionprovenance_order"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsolutionprovenance_order.80c7a59ef077"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolutionProvenance property</p>

```python signature
order: int
```

The exact order recorded at the time the candidate was produced.

## orthogonal_matrix

<a id="entry-presentation_python_object_model_capability_contexts_orthogonal_matrix_api_session_orthogonal_matrix"></a>
<a id="placement-placement.python.python_module.module_orthogonal_matrix.36bf053e5933"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
orthogonal_matrix(subject: Matrix) -> AssumptionProposition
```

Build an orthogonal-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_orthogonal_matrix.2380b9db6cd3"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.orthogonal_matrix</code></p>

```python signature
orthogonal_matrix(subject: Matrix) -> AssumptionProposition
```

</details>

## outstanding_obligations

<a id="entry-presentation_python_object_model_capability_contexts_outstanding_obligations_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_outstanding_obligations"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryaction_outstanding_obligations.524c89762767"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAction property</p>

```python signature
outstanding_obligations: list[str]
```

The claims the action explicitly does not make.

## outstanding_obligations

<a id="entry-presentation_python_object_model_capability_contexts_outstanding_obligations_api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_outstanding_obligations"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryalgebra_outstanding_obligations.38353b8499cb"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAlgebra property</p>

```python signature
outstanding_obligations: list[str]
```

The claims the algebra explicitly does not make.

## outstanding_obligations

<a id="entry-presentation_python_object_model_capability_contexts_outstanding_obligations_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_outstanding_obligations"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsimilaritysolution_outstanding_obligations.d4bee98b7e50"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSimilaritySolution property</p>

```python signature
outstanding_obligations: list[str]
```

The claims the family explicitly does not make.

## parallelism_capability

<a id="entry-presentation_python_object_model_capability_contexts_parallelism_capability_api_session_parallelism_capability"></a>
<a id="placement-placement.python.python_module.module_parallelism_capability.462cfa180ab0"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
parallelism_capability() -> Any
```

Return capability facts for the thread's default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_parallelism_capability.cbcbdf5e5bf5"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.parallelism_capability</code></p>

```python signature
parallelism_capability() -> Any
```

</details>

## parameters

<a id="entry-presentation_python_object_model_capability_contexts_parameters_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_parameters"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryaction_parameters.6783e40857bf"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAction property</p>

```python signature
parameters: list[expression]
```

The group parameters the closed forms depend on.

## parameters

<a id="entry-presentation_python_object_model_capability_contexts_parameters_api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_parameters"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryalgebra_parameters.f071852ff56f"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAlgebra property</p>

```python signature
parameters: list[expression]
```

The constants of the general generator, one per basis generator.

## partial_differential_equation

<a id="entry-presentation_python_object_model_capability_contexts_partial_differential_equation_api_partial_differential_equations_session_partial_differential_equation"></a>
<a id="placement-placement.python.python_module.module_partial_differential_equation.ba416b0ca935"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
partial_differential_equation(
    equation: ExpressionInput,
    dependent_function: Any,
    independent_variables: VariableCollectionInput,
    initial_conditions: Optional[ExpressionCollectionInput] = None,
    boundary_conditions: Optional[ExpressionCollectionInput] = None,
) -> PartialDifferentialEquationProblem
```

Construct a validated scalar partial differential equation in the default context, with an explicit dependent function and independent-variable order.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_partial_differential_equation.38acc6e956d8"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.partial_differential_equation</code></p>

```python signature
partial_differential_equation(
    equation: ExpressionLike,
    dependent_function: Any,
    independent_variables: Iterable[VariableLike],
    initial_conditions: Iterable[ExpressionLike] = None,
    boundary_conditions: Iterable[ExpressionLike] = None,
) -> PartialDifferentialEquationProblem
```

</details>

## partial_differential_equation_arbitrary_function

<a id="entry-presentation_python_object_model_capability_contexts_partial_differential_equation_arbitrary_function_api_partial_differential_equations_session_partial_differential_equation_arbitrary_function"></a>
<a id="placement-placement.python.python_class.context_partial_differential_equation_arbitrary_function.06a37767e111"></a>
<p class="symi-entry-owner">Explicit context</p>

```python signature
partial_differential_equation_arbitrary_function(
    preferred_name: str,
    arity: int,
) -> PartialDifferentialEquationArbitraryFunction
```

Allocate a collision-free arbitrary function for a PDE candidate family.

## point_symmetry_decline

<a id="entry-presentation_python_object_model_capability_contexts_point_symmetry_decline_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_point_symmetry_decline"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryaction_point_symmetry_decline.b8e4947aa41a"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAction property</p>

```python signature
point_symmetry_decline: Optional[str]
```

The reason the underlying point-symmetry algebra was not derived, when it was not.

## positive_assumption

<a id="entry-presentation_python_assumptions_capability_contexts_positive_assumption_api_session_positive_assumption"></a>
<a id="placement-placement.python.python_module.module_positive_assumption.74db6e80f453"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
positive_assumption(input_expression: ExpressionLike) -> AssumptionProposition
```

Build a strict-positivity assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_positive_assumption.e0bc55b6fd65"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.positive_assumption</code></p>

```python signature
positive_assumption(subject: ExpressionLike) -> AssumptionProposition
```

</details>

## positive_definite_matrix

<a id="entry-presentation_python_object_model_capability_contexts_positive_definite_matrix_api_session_positive_definite_matrix"></a>
<a id="placement-placement.python.python_module.module_positive_definite_matrix.5a24f83b14d4"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
positive_definite_matrix(subject: Matrix) -> AssumptionProposition
```

Build a positive-definite-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_positive_definite_matrix.a998f31168b7"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.positive_definite_matrix</code></p>

```python signature
positive_definite_matrix(subject: Matrix) -> AssumptionProposition
```

</details>

## positive_integer_assumption

<a id="entry-presentation_python_assumptions_capability_contexts_positive_integer_assumption_api_session_positive_integer_assumption"></a>
<a id="placement-placement.python.python_module.module_positive_integer_assumption.e64875fe5bab"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
positive_integer_assumption(input_expression: ExpressionLike) -> AssumptionProposition
```

Build a positive-integer assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_positive_integer_assumption.b4f90bffcfa8"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.positive_integer_assumption</code></p>

```python signature
positive_integer_assumption(subject: ExpressionLike) -> AssumptionProposition
```

</details>

## positive_semidefinite_matrix

<a id="entry-presentation_python_object_model_capability_contexts_positive_semidefinite_matrix_api_session_positive_semidefinite_matrix"></a>
<a id="placement-placement.python.python_module.module_positive_semidefinite_matrix.4cc39df663df"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
positive_semidefinite_matrix(subject: Matrix) -> AssumptionProposition
```

Build a positive-semidefinite-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_positive_semidefinite_matrix.1f8443e9fb0f"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.positive_semidefinite_matrix</code></p>

```python signature
positive_semidefinite_matrix(subject: Matrix) -> AssumptionProposition
```

</details>

## prime_assumption

<a id="entry-presentation_python_assumptions_capability_contexts_prime_assumption_api_session_prime_assumption"></a>
<a id="placement-placement.python.python_module.module_prime_assumption.f13a223f22ed"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
prime_assumption(input_expression: ExpressionLike) -> AssumptionProposition
```

Build a primality assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_prime_assumption.86c9cf48fa82"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.prime_assumption</code></p>

```python signature
prime_assumption(subject: ExpressionLike) -> AssumptionProposition
```

</details>

## principal_congruence_residuals

<a id="entry-presentation_python_object_model_capability_contexts_principal_congruence_residuals_api_partial_differential_equations_partialdifferentialequationtransformationverificationreport_principal_congruence_residuals"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationtransformationverificationreport_principal_congruence_residuals.a939bfb16497"></a>
<p class="symi-entry-owner">PartialDifferentialEquationTransformationVerificationReport property</p>

```python signature
principal_congruence_residuals: list[Expression]
```

The exact principal-matrix congruence residuals.

## principal_form

<a id="entry-presentation_python_object_model_capability_contexts_principal_form_api_partial_differential_equations_partialdifferentialequationcanonicalizationresult_principal_form"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationcanonicalizationresult_principal_form.55eaca035913"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCanonicalizationResult property</p>

```python signature
principal_form: Optional[str]
```

The exact canonical principal form that was reached.

## principal_matrix

<a id="entry-presentation_python_object_model_capability_contexts_principal_matrix_api_partial_differential_equations_partialdifferentialequationsecondorderclassification_principal_matrix"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsecondorderclassification_principal_matrix.83b6ad0b8925"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSecondOrderClassification property</p>

```python signature
principal_matrix: Matrix
```

The frozen symmetric principal matrix this analysis classified.

## proof_obligations

<a id="entry-presentation_python_object_model_capability_contexts_proof_obligations_api_partial_differential_equations_partialdifferentialequationmethodcandidate_proof_obligations"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationmethodcandidate_proof_obligations.62b639706f98"></a>
<p class="symi-entry-owner">PartialDifferentialEquationMethodCandidate property</p>

```python signature
proof_obligations: list[str]
```

The exact obligations this method must discharge before it may solve.

## proof_obligations

<a id="entry-presentation_python_object_model_capability_contexts_proof_obligations_api_partial_differential_equations_partialdifferentialequationsecondorderclassification_proof_obligations"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsecondorderclassification_proof_obligations.f0afe69b27f4"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSecondOrderClassification property</p>

```python signature
proof_obligations: list[str]
```

The obligations a downstream canonical-coordinate route must discharge.

## proof_obligations

<a id="entry-presentation_python_object_model_capability_contexts_proof_obligations_api_partial_differential_equations_partialdifferentialequationsolutionfamily_proof_obligations"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsolutionfamily_proof_obligations.2e0bde41df8e"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolutionFamily property</p>

```python signature
proof_obligations: list[str]
```

The obligations recorded against this candidate family.

## proof_obligations

<a id="entry-presentation_python_object_model_capability_contexts_proof_obligations_api_partial_differential_equations_partialdifferentialequationverificationreport_proof_obligations"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationverificationreport_proof_obligations.f9ea81ab6102"></a>
<p class="symi-entry-owner">PartialDifferentialEquationVerificationReport property</p>

```python signature
proof_obligations: list[str]
```

The obligations consulted or left unresolved by this verification.

## provenance

<a id="entry-presentation_python_object_model_capability_contexts_provenance_api_partial_differential_equations_partialdifferentialequationsolveresult_provenance"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsolveresult_provenance.de3205aa6707"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolveResult property</p>

```python signature
provenance: Optional[PartialDifferentialEquationSolutionProvenance]
```

The mathematical provenance a verified solution carries.

## rational_assumption

<a id="entry-presentation_python_assumptions_capability_contexts_rational_assumption_api_session_rational_assumption"></a>
<a id="placement-placement.python.python_module.module_rational_assumption.260550d8ea71"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
rational_assumption(input_expression: ExpressionLike) -> AssumptionProposition
```

Build a rationality assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_rational_assumption.c917db27f8ab"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.rational_assumption</code></p>

```python signature
rational_assumption(subject: ExpressionLike) -> AssumptionProposition
```

</details>

## real_assumption

<a id="entry-presentation_python_assumptions_capability_contexts_real_assumption_api_session_real_assumption"></a>
<a id="placement-placement.python.python_module.module_real_assumption.fc6de2b878b6"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
real_assumption(input_expression: ExpressionLike) -> AssumptionProposition
```

Build a realness assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_real_assumption.5548ec725f23"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.real_assumption</code></p>

```python signature
real_assumption(subject: ExpressionLike) -> AssumptionProposition
```

</details>

## real_entries

<a id="entry-presentation_python_object_model_capability_contexts_real_entries_api_session_real_entries"></a>
<a id="placement-placement.python.python_module.module_real_entries.1b5d05fc8a93"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
real_entries(subject: Matrix) -> AssumptionProposition
```

Build a real-entry proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_real_entries.844c105ddebe"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.real_entries</code></p>

```python signature
real_entries(subject: Matrix) -> AssumptionProposition
```

</details>

## reconstruction

<a id="entry-presentation_python_object_model_capability_contexts_reconstruction_api_partial_differential_equations_partialdifferentialequationseparationresult_reconstruction"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationseparationresult_reconstruction.09d3fa1dfefd"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSeparationResult property</p>

```python signature
reconstruction: Expression
```

The product or sum reconstruction of the working unknown.

## reduced_equation

<a id="entry-presentation_python_object_model_capability_contexts_reduced_equation_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_reduced_equation"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsimilaritysolution_reduced_equation.65c060212fc5"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSimilaritySolution property</p>

```python signature
reduced_equation: Optional[expression]
```

The reduced ordinary differential equation for the profile, read as zero.

## refine

<a id="entry-presentation_python_assumptions_capability_contexts_refine_api_assumptionscope_refine"></a>
<a id="placement-placement.python.python_class.assumptionscope_refine.36067d324ccf"></a>
<p class="symi-entry-owner">AssumptionScope method</p>

```python signature
refine(input_expression: ExpressionLike) -> Expression
```

Refine an expression against this immutable local assumption scope.

## refine

<a id="entry-presentation_python_assumptions_capability_contexts_refine_api_session_refine"></a>
<a id="placement-placement.python.python_module.module_refine.071351212302"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
refine(
    input_expression: ExpressionLike,
    assumptions: Optional[Any] = None,
) -> Expression
```

Refine an expression using durable assumptions or one checked local proposition.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_refine.76378dcfe8ec"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.refine</code></p>

```python signature
refine(
    input_expression: ExpressionLike,
    assumptions: Optional[Any] = None,
) -> Expression
```

</details>

## refine

<a id="entry-presentation_python_assumptions_capability_contexts_refine_api_expression_refine"></a>
<a id="placement-placement.python.python_class.expression_refine.ce9953b90828"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
refine(assumptions: Optional[Any] = None) -> Expression
```

Refine this expression using durable assumptions or one checked local proposition.

## relation_kind

<a id="entry-presentation_python_assumptions_capability_contexts_relation_kind_api_assumptionproposition_relation_kind"></a>
<a id="placement-placement.python.python_module.module_relation_kind.632a4e37f4c7"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
relation_kind(proposition: Any) -> Optional[str]
```

Return the canonical relation kind for an assumption proposition.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.assumptionproposition_relation_kind.f8984b08a241"></a>
<p class="symi-entry-owner">AssumptionProposition method: <code>AssumptionProposition.relation_kind</code></p>

```python signature
relation_kind() -> Optional[str]
```

</details>

## remainder

<a id="entry-presentation_python_object_model_capability_contexts_remainder_api_partial_differential_equations_partialdifferentialequationcoefficientdata_remainder"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationcoefficientdata_remainder.49809b3ca92f"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCoefficientData property</p>

```python signature
remainder: Optional[Expression]
```

The exact jet-free remainder term, when one was extracted.

## required_rank

<a id="entry-presentation_python_object_model_capability_contexts_required_rank_api_ordinary_differential_equations_ordinarydifferentialequationsystemverificationreport_required_rank"></a>
<a id="placement-placement.python.python_class.ordinarydifferentialequationsystemverificationreport_required_rank.95834db51730"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSystemVerificationReport property</p>

```python signature
required_rank: int
```

The dimension a complete family of the system must span.

## residual

<a id="entry-presentation_python_object_model_capability_contexts_residual_api_partial_differential_equations_partialdifferentialequationseparatedequation_residual"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationseparatedequation_residual.b55d79fdd2b3"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSeparatedEquation property</p>

```python signature
residual: Expression
```

The exact ODE residual, interpreted as equal to zero.

## residual

<a id="entry-presentation_python_object_model_capability_contexts_residual_api_partial_differential_equations_partialdifferentialequationverificationresidual_residual"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationverificationresidual_residual.fe62a14ffa59"></a>
<p class="symi-entry-owner">PartialDifferentialEquationVerificationResidual property</p>

```python signature
residual: Expression
```

The independently reduced residual expression.

## right_operand

<a id="entry-presentation_python_assumptions_capability_contexts_right_operand_api_assumptionproposition_right_operand"></a>
<a id="placement-placement.python.python_module.module_right_operand.a6ef7e813657"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
right_operand(proposition: Any) -> Optional[Expression]
```

Return the right relation or congruence operand when present.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.assumptionproposition_right_operand.bc39fbcb538e"></a>
<p class="symi-entry-owner">AssumptionProposition method: <code>AssumptionProposition.right_operand</code></p>

```python signature
right_operand() -> Optional[Expression]
```

</details>

## route

<a id="entry-presentation_python_object_model_capability_contexts_route_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_route"></a>
<a id="placement-placement.python.python_class.ordinarydifferentialequationsystemsolveresult_route.ebc67035a80d"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSystemSolveResult property</p>

```python signature
route: Optional[str]
```

The route the certified assignment came from.

## second_equation

<a id="entry-presentation_python_object_model_capability_contexts_second_equation_api_partial_differential_equations_partialdifferentialequationseparationresult_second_equation"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationseparationresult_second_equation.b2cd436c137a"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSeparationResult property</p>

```python signature
second_equation: PartialDifferentialEquationSeparatedEquation
```

The second exact separated ODE.

## second_order_principal_part

<a id="entry-presentation_python_object_model_capability_contexts_second_order_principal_part_api_partial_differential_equations_partialdifferentialequationclassification_second_order_principal_part"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationclassification_second_order_principal_part.1c993426e743"></a>
<p class="symi-entry-owner">PartialDifferentialEquationClassification property</p>

```python signature
second_order_principal_part: Optional[PartialDifferentialEquationPrincipalPart]
```

The exact second-order principal metadata, when the equation has one.

## separate_partial_differential_equation

<a id="entry-presentation_python_object_model_capability_contexts_separate_partial_differential_equation_api_partial_differential_equations_session_separate_partial_differential_equation"></a>
<a id="placement-placement.python.python_module.module_separate_partial_differential_equation.7ed47d2f874d"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
separate_partial_differential_equation(problem: PartialDifferentialEquationProblem) -> PartialDifferentialEquationSeparationResult
```

Separate a supported PDE in the default context into exact one-variable ODEs.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_separate_partial_differential_equation.0863e9a4a752"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.separate_partial_differential_equation</code></p>

```python signature
separate_partial_differential_equation(problem: PartialDifferentialEquationProblem) -> PartialDifferentialEquationSeparationResult
```

</details>

## separation_constant

<a id="entry-presentation_python_object_model_capability_contexts_separation_constant_api_partial_differential_equations_partialdifferentialequationseparationresult_separation_constant"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationseparationresult_separation_constant.0ac14df0a67a"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSeparationResult property</p>

```python signature
separation_constant: Expression
```

The fresh exact separation constant.

## serialize

<a id="entry-presentation_python_assumptions_capability_contexts_serialize_api_assumptionproposition_serialize"></a>
<a id="placement-placement.python.python_module.module_serialize.f5b62eedbe49"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
serialize(proposition: Any) -> str
```

Serialize an assumption proposition in the versioned canonical grammar.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.assumptionproposition_serialize.4c8a55f22281"></a>
<p class="symi-entry-owner">AssumptionProposition method: <code>AssumptionProposition.serialize</code></p>

```python signature
serialize() -> str
```

</details>

## serialize_bulk

<a id="entry-presentation_python_object_model_capability_contexts_serialize_bulk_api_session_serialize_bulk"></a>
<a id="placement-placement.python.python_module.module_serialize_bulk.afaf64d0cab2"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
serialize_bulk(targets: PythonExpressionCollectionInput) -> Any
```

Serialize an ordered collection in the thread's default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_serialize_bulk.6f42f6f244f3"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.serialize_bulk</code></p>

```python signature
serialize_bulk(targets: PythonExpressionCollectionInput) -> Any
```

</details>

## set_execution_mode

<a id="entry-presentation_python_object_model_capability_contexts_set_execution_mode_api_session_set_execution_mode"></a>
<a id="placement-placement.python.python_module.module_set_execution_mode.972044f1676d"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
set_execution_mode(name: str) -> None
```

Select the execution mode used by the thread's default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_set_execution_mode.597c8bd411fc"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.set_execution_mode</code></p>

```python signature
set_execution_mode(name: str) -> None
```

</details>

## similarity_variable

<a id="entry-presentation_python_object_model_capability_contexts_similarity_variable_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_similarity_variable"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsimilaritysolution_similarity_variable.a5e2d49e4f89"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSimilaritySolution property</p>

```python signature
similarity_variable: Optional[expression]
```

The coordinate of the reduced equation, standing for the invariant.

## simplify_bulk

<a id="entry-presentation_python_context_safety_capability_contexts_simplify_bulk_api_session_simplify_bulk"></a>
<a id="placement-placement.python.python_module.module_simplify_bulk.07f45cc975b7"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
simplify_bulk(targets: PythonExpressionCollectionInput) -> Any
```

Simplify an ordered collection in the thread's default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_simplify_bulk.03140b18b094"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.simplify_bulk</code></p>

```python signature
simplify_bulk(targets: PythonExpressionCollectionInput) -> Any
```

</details>

## simplify_under_constraint

<a id="entry-presentation_python_object_model_capability_contexts_simplify_under_constraint_api_session_simplify_under_constraint"></a>
<a id="placement-placement.python.python_module.module_simplify_under_constraint.24b8db7c930a"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
simplify_under_constraint(
    input_expression: ExpressionLike,
    constraint: ExpressionLike,
) -> Expression
```

Simplify an expression under a local bounded logical constraint without changing symbol assumptions.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_simplify_under_constraint.f9667336f9db"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.simplify_under_constraint</code></p>

```python signature
simplify_under_constraint(
    input_expression: ExpressionLike,
    constraint: ExpressionLike,
) -> Expression
```

</details>

## simplify_under_constraint

<a id="entry-presentation_python_object_model_capability_contexts_simplify_under_constraint_api_expression_simplify_under_constraint"></a>
<a id="placement-placement.python.python_class.expression_simplify_under_constraint.2ab59e8546d9"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
simplify_under_constraint(constraint: ExpressionLike) -> Expression
```

Simplify this expression under a local bounded logical constraint without changing symbol assumptions.

## singular_matrix

<a id="entry-presentation_python_object_model_capability_contexts_singular_matrix_api_session_singular_matrix"></a>
<a id="placement-placement.python.python_module.module_singular_matrix.6e5632e57c3f"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
singular_matrix(subject: Matrix) -> AssumptionProposition
```

Build a singular-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_singular_matrix.4b9069dcd876"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.singular_matrix</code></p>

```python signature
singular_matrix(subject: Matrix) -> AssumptionProposition
```

</details>

## solution

<a id="entry-presentation_python_object_model_capability_contexts_solution_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_solution"></a>
<a id="placement-placement.python.python_class.ordinarydifferentialequationsolveresult_solution.6d23f2ed61c8"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSolveResult property</p>

```python signature
solution: Optional[expression]
```

The certified solution, which no declined request carries.

## solution

<a id="entry-presentation_python_object_model_capability_contexts_solution_api_partial_differential_equations_partialdifferentialequationsolveresult_solution"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsolveresult_solution.1f292346c9da"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolveResult property</p>

```python signature
solution: Optional[PartialDifferentialEquationSolutionFamily]
```

The verified solution family, which no declined route may carry.

## solve_partial_differential_equation

<a id="entry-presentation_python_object_model_capability_contexts_solve_partial_differential_equation_api_partial_differential_equations_session_solve_partial_differential_equation"></a>
<a id="placement-placement.python.python_module.module_solve_partial_differential_equation.ac810cee7c6f"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
solve_partial_differential_equation(
    problem: PartialDifferentialEquationProblem,
    method: str = "automatic",
) -> PartialDifferentialEquationSolveResult
```

Run the sound partial differential equation dispatcher under a stable method name.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_solve_partial_differential_equation.810caa3f1554"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.solve_partial_differential_equation</code></p>

```python signature
solve_partial_differential_equation(
    problem: PartialDifferentialEquationProblem,
    method: str = "automatic",
) -> PartialDifferentialEquationSolveResult
```

</details>

## solve_partial_differential_equation_with_transform_axis_specifications

<a id="entry-presentation_python_object_model_capability_contexts_solve_partial_differential_equation_with_transform_axis_specifications_api_partial_differential_equations_session_solve_partial_differential_equation_with_transform_axis_specifications"></a>
<a id="placement-placement.python.python_module.module_solve_partial_differential_equation_with_transform_axis_specifications.6445539720cf"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
solve_partial_differential_equation_with_transform_axis_specifications(
    problem: PartialDifferentialEquationProblem,
    method: str,
    transform_axis_specifications: list[str],
) -> PartialDifferentialEquationSolveResult
```

Solve a PDE with ordered explicit transform-axis specifications.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_solve_partial_differential_equation_with_transform_axis_specifications.12163ffe7cb2"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.solve_partial_differential_equation_with_transform_axis_specifications</code></p>

```python signature
solve_partial_differential_equation_with_transform_axis_specifications(
    problem: PartialDifferentialEquationProblem,
    method: str,
    transform_axis_specifications: list[str],
) -> PartialDifferentialEquationSolveResult
```

</details>

## source_variables

<a id="entry-presentation_python_object_model_capability_contexts_source_variables_api_partial_differential_equations_partialdifferentialequationcoordinatechange_source_variables"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationcoordinatechange_source_variables.5711dea1f360"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCoordinateChange property</p>

```python signature
source_variables: list[str]
```

The ordered source coordinate names.

## square_matrix

<a id="entry-presentation_python_object_model_capability_contexts_square_matrix_api_session_square_matrix"></a>
<a id="placement-placement.python.python_module.module_square_matrix.10c4c7e8efa1"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
square_matrix(subject: Matrix) -> AssumptionProposition
```

Build a square-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_square_matrix.7e18aef128a6"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.square_matrix</code></p>

```python signature
square_matrix(subject: Matrix) -> AssumptionProposition
```

</details>

## strategy

<a id="entry-presentation_python_object_model_capability_contexts_strategy_api_partial_differential_equations_partialdifferentialequationseparationresult_strategy"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationseparationresult_strategy.fb54b0c578b5"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSeparationResult property</p>

```python signature
strategy: str
```

The directed separation strategy selected by exact analysis.

## substitute_bulk

<a id="entry-presentation_python_object_model_capability_contexts_substitute_bulk_api_session_substitute_bulk"></a>
<a id="placement-placement.python.python_module.module_substitute_bulk.865d6094216b"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
substitute_bulk(
    targets: PythonExpressionCollectionInput,
    variable: PythonExpressionInput,
    value: PythonExpressionInput,
) -> Any
```

Substitute one symbol and value throughout an ordered collection in the thread's default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_substitute_bulk.7da95161fa74"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.substitute_bulk</code></p>

```python signature
substitute_bulk(
    targets: PythonExpressionCollectionInput,
    variable: PythonExpressionInput,
    value: PythonExpressionInput,
) -> Any
```

</details>

## subtract

<a id="entry-presentation_python_object_model_capability_contexts_subtract_api_matrix_subtract"></a>
<a id="placement-placement.python.python_class.matrix_subtract.689f072cd263"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
subtract(other: Matrix) -> Matrix
```

Entrywise difference of two matrices of the same shape.

## symmetric_matrix

<a id="entry-presentation_python_object_model_capability_contexts_symmetric_matrix_api_session_symmetric_matrix"></a>
<a id="placement-placement.python.python_module.module_symmetric_matrix.9e1bebd0ea64"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
symmetric_matrix(subject: Matrix) -> AssumptionProposition
```

Build a symmetric-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_symmetric_matrix.5f7f01de4d22"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.symmetric_matrix</code></p>

```python signature
symmetric_matrix(subject: Matrix) -> AssumptionProposition
```

</details>

## target_dependent_function

<a id="entry-presentation_python_object_model_capability_contexts_target_dependent_function_api_partial_differential_equations_partialdifferentialequationcoordinatechange_target_dependent_function"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationcoordinatechange_target_dependent_function.121412f8190e"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCoordinateChange property</p>

```python signature
target_dependent_function: str
```

The target unknown-function name.

## target_problem

<a id="entry-presentation_python_object_model_capability_contexts_target_problem_api_partial_differential_equations_partialdifferentialequationtransformationresult_target_problem"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationtransformationresult_target_problem.2d8d6a9199f5"></a>
<p class="symi-entry-owner">PartialDifferentialEquationTransformationResult property</p>

```python signature
target_problem: Optional[PartialDifferentialEquationProblem]
```

The transformed PDE problem stated in the target coordinates.

## target_variables

<a id="entry-presentation_python_object_model_capability_contexts_target_variables_api_partial_differential_equations_partialdifferentialequationcoordinatechange_target_variables"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationcoordinatechange_target_variables.418691a17ebb"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCoordinateChange property</p>

```python signature
target_variables: list[str]
```

The ordered target coordinate names.

## transcendental_assumption

<a id="entry-presentation_python_assumptions_capability_contexts_transcendental_assumption_api_session_transcendental_assumption"></a>
<a id="placement-placement.python.python_module.module_transcendental_assumption.f93ee0ffe954"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
transcendental_assumption(input_expression: ExpressionLike) -> AssumptionProposition
```

Build a transcendence assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_transcendental_assumption.f04ad245af9e"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.transcendental_assumption</code></p>

```python signature
transcendental_assumption(subject: ExpressionLike) -> AssumptionProposition
```

</details>

## transformation_decline

<a id="entry-presentation_python_object_model_capability_contexts_transformation_decline_api_partial_differential_equations_partialdifferentialequationcanonicalizationresult_transformation_decline"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationcanonicalizationresult_transformation_decline.e4758cff1d65"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCanonicalizationResult property</p>

```python signature
transformation_decline: Optional[str]
```

The underlying coordinate-transformation decline, when one caused the decline.

## transformed

<a id="entry-presentation_python_object_model_capability_contexts_transformed_api_partial_differential_equations_partialdifferentialequationtransformationresult_transformed"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationtransformationresult_transformed.afa1507c2444"></a>
<p class="symi-entry-owner">PartialDifferentialEquationTransformationResult property</p>

```python signature
transformed: bool
```

Whether a verified transformation was produced.

## transformed_coordinates

<a id="entry-presentation_python_object_model_capability_contexts_transformed_coordinates_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_transformed_coordinates"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryaction_transformed_coordinates.a43527f3e30b"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAction property</p>

```python signature
transformed_coordinates: list[expression]
```

The coordinates at which a seed solution is evaluated.

## transformed_governing_residual

<a id="entry-presentation_python_object_model_capability_contexts_transformed_governing_residual_api_partial_differential_equations_partialdifferentialequationtransformationverificationreport_transformed_governing_residual"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationtransformationverificationreport_transformed_governing_residual.de21233fe125"></a>
<p class="symi-entry-owner">PartialDifferentialEquationTransformationVerificationReport property</p>

```python signature
transformed_governing_residual: Expression
```

The independently transformed source governing residual.

## unitary_matrix

<a id="entry-presentation_python_object_model_capability_contexts_unitary_matrix_api_session_unitary_matrix"></a>
<a id="placement-placement.python.python_module.module_unitary_matrix.1e1e98f0779f"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
unitary_matrix(subject: Matrix) -> AssumptionProposition
```

Build a unitary-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_unitary_matrix.0c1eaabf71ca"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.unitary_matrix</code></p>

```python signature
unitary_matrix(subject: Matrix) -> AssumptionProposition
```

</details>

## upper_triangular_matrix

<a id="entry-presentation_python_object_model_capability_contexts_upper_triangular_matrix_api_session_upper_triangular_matrix"></a>
<a id="placement-placement.python.python_module.module_upper_triangular_matrix.fc245841334f"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
upper_triangular_matrix(subject: Matrix) -> AssumptionProposition
```

Build a upper-triangular-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_upper_triangular_matrix.d74ef8f77475"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.upper_triangular_matrix</code></p>

```python signature
upper_triangular_matrix(subject: Matrix) -> AssumptionProposition
```

</details>

## verification

<a id="entry-presentation_python_object_model_capability_contexts_verification_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_verification"></a>
<a id="placement-placement.python.python_class.ordinarydifferentialequationsolveresult_verification.d464f1a7ea4c"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSolveResult property</p>

```python signature
verification: Optional[str]
```

The independent verifier's decision on the candidate, when verification ran.

## verification

<a id="entry-presentation_python_object_model_capability_contexts_verification_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_verification"></a>
<a id="placement-placement.python.python_class.ordinarydifferentialequationsystemsolveresult_verification.9d0a62131f4c"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSystemSolveResult property</p>

```python signature
verification: Optional[str]
```

The independent verifier's decision on the assignment, when verification ran.

## verification

<a id="entry-presentation_python_object_model_capability_contexts_verification_api_partial_differential_equations_partialdifferentialequationseparationresult_verification"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationseparationresult_verification.1e52e66e28d5"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSeparationResult property</p>

```python signature
verification: str
```

The independent recombination-verification verdict.

## verification

<a id="entry-presentation_python_object_model_capability_contexts_verification_api_partial_differential_equations_partialdifferentialequationsolveresult_verification"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsolveresult_verification.c6c44ab3ef2a"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolveResult property</p>

```python signature
verification: Optional[PartialDifferentialEquationVerificationReport]
```

The independent verification report a solved result must carry.

## verify_partial_differential_equation_coordinate_transformation

<a id="entry-presentation_python_object_model_capability_contexts_verify_partial_differential_equation_coordinate_transformation_api_partial_differential_equations_session_verify_partial_differential_equation_coordinate_transformation"></a>
<a id="placement-placement.python.python_module.module_verify_partial_differential_equation_coordinate_transformation.894d29fe74aa"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
verify_partial_differential_equation_coordinate_transformation(
    problem: PartialDifferentialEquationProblem,
    transformation: PartialDifferentialEquationTransformationResult,
) -> PartialDifferentialEquationTransformationVerificationReport
```

Independently verify an exact PDE coordinate transformation.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_verify_partial_differential_equation_coordinate_transformation.542bb424361e"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.verify_partial_differential_equation_coordinate_transformation</code></p>

```python signature
verify_partial_differential_equation_coordinate_transformation(
    problem: PartialDifferentialEquationProblem,
    transformation: PartialDifferentialEquationTransformationResult,
) -> PartialDifferentialEquationTransformationVerificationReport
```

</details>

## verify_partial_differential_equation_solution

<a id="entry-presentation_python_object_model_capability_contexts_verify_partial_differential_equation_solution_api_partial_differential_equations_session_verify_partial_differential_equation_solution"></a>
<a id="placement-placement.python.python_module.module_verify_partial_differential_equation_solution.b40079d9e42a"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
verify_partial_differential_equation_solution(
    problem: PartialDifferentialEquationProblem,
    solution: PartialDifferentialEquationSolutionFamily,
) -> PartialDifferentialEquationVerificationReport
```

Independently verify a partial differential equation candidate with exact residual reasoning.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_verify_partial_differential_equation_solution.6fcadf40257f"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.verify_partial_differential_equation_solution</code></p>

```python signature
verify_partial_differential_equation_solution(
    problem: PartialDifferentialEquationProblem,
    solution: PartialDifferentialEquationSolutionFamily,
) -> PartialDifferentialEquationVerificationReport
```

</details>

## weight

<a id="entry-presentation_python_object_model_capability_contexts_weight_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_weight"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsimilaritysolution_weight.43eaeb3aa2a4"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSimilaritySolution property</p>

```python signature
weight: Optional[expression]
```

The weight of invariant solutions.

## zero_assumption

<a id="entry-presentation_python_assumptions_capability_contexts_zero_assumption_api_session_zero_assumption"></a>
<a id="placement-placement.python.python_module.module_zero_assumption.3f481767b689"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
zero_assumption(input_expression: ExpressionLike) -> AssumptionProposition
```

Build a zero assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_zero_assumption.2beb552c0ca5"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.zero_assumption</code></p>

```python signature
zero_assumption(subject: ExpressionLike) -> AssumptionProposition
```

</details>

## zero_equivalent

<a id="entry-presentation_python_zero_equivalence_capability_contexts_zero_equivalent_api_session_zero_equivalent"></a>
<a id="placement-placement.python.python_module.module_zero_equivalent.aaeebc6d5dc1"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
zero_equivalent(
    input_expression: ExpressionLike,
    constraint: Optional[ExpressionLike] = None,
) -> str
```

Prove whether an expression is zero wherever it is defined, returning `"true"`, `"false"`, or `"unknown"`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_zero_equivalent.2f51d1ad2169"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.zero_equivalent</code></p>

```python signature
zero_equivalent(
    input_expression: ExpressionLike,
    constraint: Optional[ExpressionLike] = None,
) -> str
```

</details>

## zero_equivalent

<a id="entry-presentation_python_zero_equivalence_capability_contexts_zero_equivalent_api_expression_zero_equivalent"></a>
<a id="placement-placement.python.python_class.expression_zero_equivalent.d00f93757677"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
zero_equivalent(constraint: Optional[ExpressionLike] = None) -> str
```

Prove whether this expression is zero wherever it is defined, returning `"true"`, `"false"`, or `"unknown"`.

## zero_matrix

<a id="entry-presentation_python_object_model_capability_contexts_zero_matrix_api_session_zero_matrix"></a>
<a id="placement-placement.python.python_module.module_zero_matrix.c698818abd16"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
zero_matrix(subject: Matrix) -> AssumptionProposition
```

Build a zero-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_zero_matrix.7b8066c05383"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.zero_matrix</code></p>

```python signature
zero_matrix(subject: Matrix) -> AssumptionProposition
```

</details>

## bell_number

<a id="entry-presentation_python_combinatorics_capability_discrete_mathematics_bell_number_api_session_bell_number"></a>
<a id="placement-placement.python.python_module.module_bell_number.f7d58f32ca00"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
bell_number(n: ExpressionLike) -> Expression
```

The n-th Bell number.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_bell_number.e718c3b67449"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.bell_number</code></p>

```python signature
bell_number(n: ExpressionLike) -> Expression
```

</details>

## catalan_number

<a id="entry-presentation_python_combinatorics_capability_discrete_mathematics_catalan_number_api_session_catalan_number"></a>
<a id="placement-placement.python.python_module.module_catalan_number.7e0b0b19f4db"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
catalan_number(n: ExpressionLike) -> Expression
```

The n-th Catalan number.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_catalan_number.4c8621b2964f"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.catalan_number</code></p>

```python signature
catalan_number(n: ExpressionLike) -> Expression
```

</details>

## chinese_remainder

<a id="entry-presentation_python_number_theory_capability_discrete_mathematics_chinese_remainder_api_number_theory_session_chinese_remainder"></a>
<a id="placement-placement.python.python_module.module_chinese_remainder.c5672ded2bce"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
chinese_remainder(residues_and_moduli: Iterable[tuple[ExpressionLike, ExpressionLike]]) -> Expression
```

The smallest non-negative solution of the simultaneous congruences \(x \equiv r_i \pmod{m_i}\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_chinese_remainder.7ec8d6a4e123"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.chinese_remainder</code></p>

```python signature
chinese_remainder(residues_and_moduli: Iterable[tuple[ExpressionLike, ExpressionLike]]) -> Expression
```

</details>

## complex_plane

<a id="entry-presentation_python_sets_capability_discrete_mathematics_complex_plane_api_session_complex_plane"></a>
<a id="placement-placement.python.python_module.module_complex_plane.aad43e847872"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
complex_plane: expression
```

The set \(\mathbb{C}\) — the ambient universe, and the domain a variable ranges over when it carries no realness assumption.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_complex_plane.69efb1c1c303"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.complex_plane</code></p>

```python signature
complex_plane: Expression
```

</details>

## condition_set

<a id="entry-presentation_python_sets_capability_discrete_mathematics_condition_set_api_sets_session_condition_set"></a>
<a id="placement-placement.python.python_module.module_condition_set.44c87329a459"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
condition_set(
    variable: VariableLike,
    condition: ExpressionLike,
    domain: ExpressionLike,
) -> Expression
```

The set \(\{\operatorname{variable} \in \operatorname{domain} : \operatorname{condition}\}\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_condition_set.c049b7dcd734"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.condition_set</code></p>

```python signature
condition_set(
    variable: VariableLike,
    condition: ExpressionLike,
    domain: ExpressionLike,
) -> Expression
```

</details>

## conjunctive_normal_form

<a id="entry-presentation_python_logical_transforms_capability_discrete_mathematics_conjunctive_normal_form_api_logic_session_conjunctive_normal_form"></a>
<a id="placement-placement.python.python_module.module_conjunctive_normal_form.f4432ad40575"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
conjunctive_normal_form(input_expression: ExpressionLike) -> Expression
```

The dual of `disjunctive_normal_form`: a reduced conjunctive normal form (an AND of OR-clauses over literals).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_conjunctive_normal_form.2c1714cc1f76"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.conjunctive_normal_form</code></p>

```python signature
conjunctive_normal_form(input_expression: ExpressionLike) -> Expression
```

</details>

## conjunctive_normal_form

<a id="entry-presentation_python_logical_transforms_capability_discrete_mathematics_conjunctive_normal_form_api_expression_operations_expression_conjunctive_normal_form"></a>
<a id="placement-placement.python.python_class.expression_conjunctive_normal_form.f887d3e3aba7"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
conjunctive_normal_form() -> Expression
```

The dual of `disjunctive_normal_form`: a reduced conjunctive normal form (an AND of OR-clauses over literals).

## continued_fraction_quadratic_irrational

<a id="entry-presentation_python_number_theory_capability_discrete_mathematics_continued_fraction_quadratic_irrational_api_number_theory_session_continued_fraction_quadratic_irrational"></a>
<a id="placement-placement.python.python_module.module_continued_fraction_quadratic_irrational.2c040008a65d"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
continued_fraction_quadratic_irrational(value: ExpressionLike) -> tuple[list[Expression], list[Expression]]
```

Eventually-periodic expansion of \(\sqrt{d}\) for a non-negative integer d, returned as `(initial_terms, periodic_part)`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_continued_fraction_quadratic_irrational.d8d8e3b800fc"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.continued_fraction_quadratic_irrational</code></p>

```python signature
continued_fraction_quadratic_irrational(value: ExpressionLike) -> tuple[list[Expression], list[Expression]]
```

</details>

## continued_fraction_rational

<a id="entry-presentation_python_number_theory_capability_discrete_mathematics_continued_fraction_rational_api_number_theory_session_continued_fraction_rational"></a>
<a id="placement-placement.python.python_module.module_continued_fraction_rational.b0f12992fa4e"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
continued_fraction_rational(value: ExpressionLike) -> list[Expression]
```

Terminating continued-fraction expansion `[a0; a1, a2, ...]` of an integer or rational expression leaf.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_continued_fraction_rational.99942e7d43f5"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.continued_fraction_rational</code></p>

```python signature
continued_fraction_rational(value: ExpressionLike) -> list[Expression]
```

</details>

## disjunctive_normal_form

<a id="entry-presentation_python_logical_transforms_capability_discrete_mathematics_disjunctive_normal_form_api_logic_session_disjunctive_normal_form"></a>
<a id="placement-placement.python.python_module.module_disjunctive_normal_form.fdced179b826"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
disjunctive_normal_form(input_expression: ExpressionLike) -> Expression
```

Rewrite a propositional formula into a reduced disjunctive normal form (an OR of AND-terms over literals): derived connectives are eliminated, negations are pushed to the atoms, the formula is distributed, and contradictory, duplicate, and subsumed terms are dropped.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_disjunctive_normal_form.84e7ccb90232"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.disjunctive_normal_form</code></p>

```python signature
disjunctive_normal_form(input_expression: ExpressionLike) -> Expression
```

</details>

## disjunctive_normal_form

<a id="entry-presentation_python_logical_transforms_capability_discrete_mathematics_disjunctive_normal_form_api_expression_operations_expression_disjunctive_normal_form"></a>
<a id="placement-placement.python.python_class.expression_disjunctive_normal_form.f2c63596196e"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
disjunctive_normal_form() -> Expression
```

Rewrite a propositional formula into a reduced disjunctive normal form (an OR of AND-terms over literals): derived connectives are eliminated, negations are pushed to the atoms, the formula is distributed, and contradictory, duplicate, and subsumed terms are dropped.

## divisor_count

<a id="entry-presentation_python_number_theory_capability_discrete_mathematics_divisor_count_api_session_divisor_count"></a>
<a id="placement-placement.python.python_module.module_divisor_count.2864c9c4aff9"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
divisor_count(n: ExpressionLike) -> Expression
```

Number of positive divisors \(\tau(n)\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_divisor_count.0c22d3ae80f2"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.divisor_count</code></p>

```python signature
divisor_count(n: ExpressionLike) -> Expression
```

</details>

## divisor_sigma

<a id="entry-presentation_python_number_theory_capability_discrete_mathematics_divisor_sigma_api_session_divisor_sigma"></a>
<a id="placement-placement.python.python_module.module_divisor_sigma.3d6e1bf67cc5"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
divisor_sigma(n: ExpressionLike, power: int) -> Expression
```

Sum of the `power`-th powers of the positive divisors \(\sigma_{\mathit{power}}(n)\); `power = 0` gives `divisor_count`, `power = 1` the divisor sum.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_divisor_sigma.b6600fa851fa"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.divisor_sigma</code></p>

```python signature
divisor_sigma(n: ExpressionLike, power: int) -> Expression
```

</details>

## eliminate_derived_logical_connectives

<a id="entry-presentation_python_logical_transforms_capability_discrete_mathematics_eliminate_derived_logical_connectives_api_logic_session_eliminate_derived_logical_connectives"></a>
<a id="placement-placement.python.python_module.module_eliminate_derived_logical_connectives.c9c77eaa3fb7"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
eliminate_derived_logical_connectives(input_expression: ExpressionLike) -> Expression
```

Rewrite every `implies`, `equivalent`, and `exclusive_or` occurrence into the `logical_and` / `logical_or` / `logical_not` basis. This is a directed presentation request, not a cost decision, so the result may be larger than the input; a formula already in the basis, and a conversion that would cross the fixed size ceiling, both return the input unchanged.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_eliminate_derived_logical_connectives.ec9eb455b7d3"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.eliminate_derived_logical_connectives</code></p>

```python signature
eliminate_derived_logical_connectives(input_expression: ExpressionLike) -> Expression
```

</details>

## eliminate_derived_logical_connectives

<a id="entry-presentation_python_logical_transforms_capability_discrete_mathematics_eliminate_derived_logical_connectives_api_expression_operations_expression_eliminate_derived_logical_connectives"></a>
<a id="placement-placement.python.python_class.expression_eliminate_derived_logical_connectives.05b5e44aa2e4"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
eliminate_derived_logical_connectives() -> Expression
```

Rewrite every `implies`, `equivalent`, and `exclusive_or` occurrence in this formula into the `logical_and` / `logical_or` / `logical_not` basis. This is a directed presentation request, not a cost decision, so the result may be larger than the input; a formula already in the basis, and a conversion that would cross the fixed size ceiling, both return the input unchanged.

## empty_set

<a id="entry-presentation_python_sets_capability_discrete_mathematics_empty_set_api_session_empty_set"></a>
<a id="placement-placement.python.python_module.module_empty_set.031dbed53002"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
empty_set: expression
```

The empty set \(\varnothing\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_empty_set.039059383aa5"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.empty_set</code></p>

```python signature
empty_set: Expression
```

</details>

## enumerate_set_in_interval

<a id="entry-presentation_python_sets_capability_discrete_mathematics_enumerate_set_in_interval_api_sets_session_enumerate_set_in_interval"></a>
<a id="placement-placement.python.python_module.module_enumerate_set_in_interval.abc35f2617b9"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
enumerate_set_in_interval(
    set: ExpressionLike,
    lower: ExpressionLike,
    upper: ExpressionLike,
    lower_inclusive: bool = True,
    upper_inclusive: bool = True,
    limit: Optional[int] = None,
) -> Any
```

Exact elements of a set inside \([\operatorname{lower}, \operatorname{upper}]\), in increasing order, as `{"outcome": str, "elements": list[expression]}`. `outcome` is `"complete"` when those are exactly the elements in the interval, `"truncated"` when `limit` cut the list short (the family is still solved), and `"declined"` when the set's shape is not enumerable — never a licence to approximate.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_enumerate_set_in_interval.6f907bbd66be"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.enumerate_set_in_interval</code></p>

```python signature
enumerate_set_in_interval(
    set: ExpressionLike,
    lower: ExpressionLike,
    upper: ExpressionLike,
    lower_inclusive: bool = True,
    upper_inclusive: bool = True,
    limit: Optional[int] = None,
) -> Any
```

</details>

## euler_totient

<a id="entry-presentation_python_number_theory_capability_discrete_mathematics_euler_totient_api_number_theory_session_euler_totient"></a>
<a id="placement-placement.python.python_module.module_euler_totient.3a7b17b90a02"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
euler_totient(n: ExpressionLike) -> Expression
```

Euler's \(\varphi(n)\); requires a positive integer.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_euler_totient.392cc7c29a3f"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.euler_totient</code></p>

```python signature
euler_totient(n: ExpressionLike) -> Expression
```

</details>

## evaluate_truth

<a id="entry-presentation_python_logic_capability_discrete_mathematics_evaluate_truth_api_session_evaluate_truth"></a>
<a id="placement-placement.python.python_module.module_evaluate_truth.973391b33da4"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
evaluate_truth(input_expression: ExpressionLike) -> Optional[bool]
```

`evaluate_truth(predicate)` uses exact three-valued logic. Python returns `True`, `False`, or `None`; JavaScript returns `true`, `false`, or `null`; Rust returns `truth_value`. The third value means undecided, never false: a host-language `if` reads it as falsy, so compare against `True` / `False` explicitly. Order, equality and sign relations between closed-form real constants — rationals, `pi`, radicals and real algebraic numbers — are decided exactly by rational arithmetic; transcendental, symbolic and provably non-real operands decline rather than guess.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_evaluate_truth.a421c2b10040"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.evaluate_truth</code></p>

```python signature
evaluate_truth(input_expression: ExpressionLike) -> Optional[bool]
```

</details>

## evaluate_truth

<a id="entry-presentation_python_logic_capability_discrete_mathematics_evaluate_truth_api_expression_evaluate_truth"></a>
<a id="placement-placement.python.python_class.expression_evaluate_truth.2acfc1c52e62"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
evaluate_truth() -> Optional[bool]
```

`evaluate_truth(predicate)` uses exact three-valued logic. Python returns `True`, `False`, or `None`; JavaScript returns `true`, `false`, or `null`; Rust returns `truth_value`. The third value means undecided, never false: a host-language `if` reads it as falsy, so compare against `True` / `False` explicitly. Order, equality and sign relations between closed-form real constants — rationals, `pi`, radicals and real algebraic numbers — are decided exactly by rational arithmetic; transcendental, symbolic and provably non-real operands decline rather than guess.

## extended_euclidean

<a id="entry-presentation_python_number_theory_capability_discrete_mathematics_extended_euclidean_api_number_theory_session_extended_euclidean"></a>
<a id="placement-placement.python.python_module.module_extended_euclidean.3ff42fc31d43"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
extended_euclidean(
    a: ExpressionLike,
    b: ExpressionLike,
) -> tuple[Expression, Expression, Expression]
```

`(gcd, x, y)` with \(a x + b y = \operatorname{gcd}\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_extended_euclidean.1f012fd73085"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.extended_euclidean</code></p>

```python signature
extended_euclidean(
    a: ExpressionLike,
    b: ExpressionLike,
) -> tuple[Expression, Expression, Expression]
```

</details>

## factor_integer

<a id="entry-presentation_python_number_theory_capability_discrete_mathematics_factor_integer_api_session_factor_integer"></a>
<a id="placement-placement.python.python_module.module_factor_integer.cb82c971d037"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
factor_integer(n: ExpressionLike) -> list[tuple[Expression, int]]
```

Prime factorization as `(prime, multiplicity)` pairs, ascending. Errors on zero. Notes: WASM returns `prime_factor` objects with `prime`/`multiplicity` getters; the sign \(-1\) of a negative input is carried as a leading `(-1, 1)` factor exactly as the core reports it.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_factor_integer.085954d7463a"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.factor_integer</code></p>

```python signature
factor_integer(n: ExpressionLike) -> list[tuple[Expression, int]]
```

</details>

## falling_factorial

<a id="entry-presentation_python_combinatorics_capability_discrete_mathematics_falling_factorial_api_session_falling_factorial"></a>
<a id="placement-placement.python.python_module.module_falling_factorial.e2846cb97c6c"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
falling_factorial(
    base: ExpressionLike,
    length: ExpressionLike,
) -> Expression
```

\(\operatorname{base}(\operatorname{base}-1)\cdots(\operatorname{base}-\operatorname{length}+1)\); `length` must be a non-negative integer, `base` may be any integer.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_falling_factorial.3b495b9019e2"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.falling_factorial</code></p>

```python signature
falling_factorial(
    base: ExpressionLike,
    length: ExpressionLike,
) -> Expression
```

</details>

## fibonacci_number

<a id="entry-presentation_python_combinatorics_capability_discrete_mathematics_fibonacci_number_api_session_fibonacci_number"></a>
<a id="placement-placement.python.python_module.module_fibonacci_number.dc4758ad1625"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
fibonacci_number(n: ExpressionLike) -> Expression
```

The n-th Fibonacci number (F(0) = 0, F(1) = 1).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_fibonacci_number.7da2a509045b"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.fibonacci_number</code></p>

```python signature
fibonacci_number(n: ExpressionLike) -> Expression
```

</details>

## finite_set

<a id="entry-presentation_python_sets_capability_discrete_mathematics_finite_set_api_session_finite_set"></a>
<a id="placement-placement.python.python_module.module_finite_set.36a203ac265d"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
finite_set(elements: Any) -> Expression
```

Finite set; elements are deduplicated and canonically ordered. An empty list gives the empty set.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_finite_set.2461ab4bb6d2"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.finite_set</code></p>

```python signature
finite_set(elements: Any) -> Expression
```

</details>

## image_set

<a id="entry-presentation_python_sets_capability_discrete_mathematics_image_set_api_sets_session_image_set"></a>
<a id="placement-placement.python.python_module.module_image_set.55f32b042201"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
image_set(
    lambda_expression: ExpressionLike,
    variable: VariableLike,
    domain: ExpressionLike,
) -> Expression
```

The set \(\{\operatorname{lambda\_expression} : \operatorname{variable} \in \operatorname{domain}\}\); `variable` is a binder over `lambda_expression`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_image_set.dfa323774f39"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.image_set</code></p>

```python signature
image_set(
    lambda_expression: ExpressionLike,
    variable: VariableLike,
    domain: ExpressionLike,
) -> Expression
```

</details>

## integer_gcd

<a id="entry-presentation_python_number_theory_capability_discrete_mathematics_integer_gcd_api_session_integer_gcd"></a>
<a id="placement-placement.python.python_module.module_integer_gcd.231de115dd56"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
integer_gcd(a: ExpressionLike, b: ExpressionLike) -> Expression
```

Greatest common divisor (non-negative).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_integer_gcd.f3d856dce62b"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.integer_gcd</code></p>

```python signature
integer_gcd(a: ExpressionLike, b: ExpressionLike) -> Expression
```

</details>

## integer_lcm

<a id="entry-presentation_python_number_theory_capability_discrete_mathematics_integer_lcm_api_session_integer_lcm"></a>
<a id="placement-placement.python.python_module.module_integer_lcm.4761d486032c"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
integer_lcm(a: ExpressionLike, b: ExpressionLike) -> Expression
```

Least common multiple.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_integer_lcm.c26747e79a2c"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.integer_lcm</code></p>

```python signature
integer_lcm(a: ExpressionLike, b: ExpressionLike) -> Expression
```

</details>

## integer_nth_root

<a id="entry-presentation_python_number_theory_capability_discrete_mathematics_integer_nth_root_api_session_integer_nth_root"></a>
<a id="placement-placement.python.python_module.module_integer_nth_root.98fb5209c8f6"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
integer_nth_root(n: ExpressionLike, root_index: int) -> Expression
```

\(\lfloor n^{1/\mathit{root\_index}}\rfloor\); odd indices accept negative n. Errors when no real root exists (even index, negative n).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_integer_nth_root.40c2ad06325a"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.integer_nth_root</code></p>

```python signature
integer_nth_root(n: ExpressionLike, root_index: int) -> Expression
```

</details>

## integer_set

<a id="entry-presentation_python_sets_capability_discrete_mathematics_integer_set_api_session_integer_set"></a>
<a id="placement-placement.python.python_module.module_integer_set.612a8761539e"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
integer_set: expression
```

The set \(\mathbb{Z}\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_integer_set.95cf130dd07a"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.integer_set</code></p>

```python signature
integer_set: Expression
```

</details>

## integer_square_root

<a id="entry-presentation_python_number_theory_capability_discrete_mathematics_integer_square_root_api_session_integer_square_root"></a>
<a id="placement-placement.python.python_module.module_integer_square_root.dd9d0f1b24e5"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
integer_square_root(n: ExpressionLike) -> Expression
```

\(\lfloor\sqrt{n}\rfloor\) for non-negative n.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_integer_square_root.24e8406f4423"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.integer_square_root</code></p>

```python signature
integer_square_root(n: ExpressionLike) -> Expression
```

</details>

## interval

<a id="entry-presentation_python_sets_capability_discrete_mathematics_interval_api_sets_session_interval"></a>
<a id="placement-placement.python.python_module.module_interval.321e53c8b2dc"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
interval(
    lower: ExpressionLike,
    upper: ExpressionLike,
    lower_open: bool = False,
    upper_open: bool = False,
) -> Expression
```

Real-line interval. Closed by default; endpoints at infinity are forced open. Degenerate shapes collapse (empty interval \(\to\) empty set, single point \(\to\) finite set, \((-\infty, \infty)\to\) real line).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_interval.b521c8b318eb"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.interval</code></p>

```python signature
interval(
    lower: ExpressionLike,
    upper: ExpressionLike,
    lower_open: bool = False,
    upper_open: bool = False,
) -> Expression
```

</details>

## introduce_derived_logical_connectives

<a id="entry-presentation_python_logical_transforms_capability_discrete_mathematics_introduce_derived_logical_connectives_api_logic_session_introduce_derived_logical_connectives"></a>
<a id="placement-placement.python.python_module.module_introduce_derived_logical_connectives.f87b90e17341"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
introduce_derived_logical_connectives(input_expression: ExpressionLike) -> Expression
```

Recognise the exact canonical definitions of implication, equivalence, and exclusive-or inside an and/or/not formula and replace each match with the derived connective, but only where the replacement is strictly smaller. It is a local structural compressor: a formula merely equivalent to a definition, without matching it, is left unchanged.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_introduce_derived_logical_connectives.11e2a6a6022f"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.introduce_derived_logical_connectives</code></p>

```python signature
introduce_derived_logical_connectives(input_expression: ExpressionLike) -> Expression
```

</details>

## introduce_derived_logical_connectives

<a id="entry-presentation_python_logical_transforms_capability_discrete_mathematics_introduce_derived_logical_connectives_api_expression_operations_expression_introduce_derived_logical_connectives"></a>
<a id="placement-placement.python.python_class.expression_introduce_derived_logical_connectives.8f28ec501589"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
introduce_derived_logical_connectives() -> Expression
```

Recognise the exact canonical definitions of implication, equivalence, and exclusive-or inside this and/or/not formula and replace each match with the derived connective, but only where the replacement is strictly smaller. It is a local structural compressor: a formula merely equivalent to a definition, without matching it, is left unchanged.

## is_member

<a id="entry-presentation_python_sets_capability_discrete_mathematics_is_member_api_sets_session_is_member"></a>
<a id="placement-placement.python.python_module.module_is_member.7226309c7029"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
is_member(
    element: ExpressionLike,
    set: ExpressionLike,
) -> Optional[bool]
```

Three-valued membership: `True` only on structural proof, `False` only on a structural counterexample, `None` otherwise. Covers \(\varnothing\), \(\mathbb{R}\), finite sets, intervals, unions, intersections, complements.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_is_member.db3842495732"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.is_member</code></p>

```python signature
is_member(
    element: ExpressionLike,
    set: ExpressionLike,
) -> Optional[bool]
```

</details>

## is_prime

<a id="entry-presentation_python_number_theory_capability_discrete_mathematics_is_prime_api_session_is_prime"></a>
<a id="placement-placement.python.python_module.module_is_prime.267824491e40"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
is_prime(n: ExpressionLike) -> Optional[bool]
```

Deterministic primality verdict; `None` when the input is outside the classifier's domain (e.g. not a natural number \(\geq 0\) representation it handles).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_is_prime.2e068135d74b"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.is_prime</code></p>

```python signature
is_prime(n: ExpressionLike) -> Optional[bool]
```

</details>

## is_prime

<a id="entry-presentation_python_number_theory_capability_discrete_mathematics_is_prime_api_expression_is_prime"></a>
<a id="placement-placement.python.python_class.expression_is_prime.67e50f5358ce"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_prime() -> Optional[bool]
```

Whether the expression is known to be prime.

## is_subset

<a id="entry-presentation_python_sets_capability_discrete_mathematics_is_subset_api_sets_session_is_subset"></a>
<a id="placement-placement.python.python_module.module_is_subset.c736daad2ea6"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
is_subset(
    set_a: ExpressionLike,
    set_b: ExpressionLike,
) -> Optional[bool]
```

Three-valued subset query: \(\varnothing \subseteq\) anything, structural equality, finite-set element checks, interval-in-interval endpoint tests; `None` otherwise.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_is_subset.bb5f672f5888"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.is_subset</code></p>

```python signature
is_subset(
    set_a: ExpressionLike,
    set_b: ExpressionLike,
) -> Optional[bool]
```

</details>

## jacobi_symbol

<a id="entry-presentation_python_number_theory_capability_discrete_mathematics_jacobi_symbol_api_session_jacobi_symbol"></a>
<a id="placement-placement.python.python_module.module_jacobi_symbol.6dbcccc83c42"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
jacobi_symbol(
    numerator: ExpressionLike,
    denominator: ExpressionLike,
) -> int
```

The Jacobi symbol \((n/d) \in \{-1, 0, 1\}\); the denominator must be a positive odd integer.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_jacobi_symbol.e5766f96841a"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.jacobi_symbol</code></p>

```python signature
jacobi_symbol(
    numerator: ExpressionLike,
    denominator: ExpressionLike,
) -> int
```

</details>

## kronecker_symbol

<a id="entry-presentation_python_number_theory_capability_discrete_mathematics_kronecker_symbol_api_session_kronecker_symbol"></a>
<a id="placement-placement.python.python_module.module_kronecker_symbol.2a7455ff34c3"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
kronecker_symbol(
    numerator: ExpressionLike,
    denominator: ExpressionLike,
) -> int
```

The Kronecker extension of the Jacobi symbol to all integer denominators.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_kronecker_symbol.002f7796fee6"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.kronecker_symbol</code></p>

```python signature
kronecker_symbol(
    numerator: ExpressionLike,
    denominator: ExpressionLike,
) -> int
```

</details>

## legendre_symbol

<a id="entry-presentation_python_number_theory_capability_discrete_mathematics_legendre_symbol_api_session_legendre_symbol"></a>
<a id="placement-placement.python.python_module.module_legendre_symbol.2b0685ef4d51"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
legendre_symbol(numerator: ExpressionLike, prime: ExpressionLike) -> int
```

The Legendre symbol; the second argument must be an odd prime.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_legendre_symbol.b57e83aa7af5"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.legendre_symbol</code></p>

```python signature
legendre_symbol(numerator: ExpressionLike, prime: ExpressionLike) -> int
```

</details>

## logical_false

<a id="entry-presentation_python_logic_capability_discrete_mathematics_logical_false_api_session_logical_false"></a>
<a id="placement-placement.python.python_module.module_logical_false.35969dae5f4e"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
logical_false: expression
```

The Boolean constant false (\(\bot\)).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_logical_false.2a29c31f903d"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.logical_false</code></p>

```python signature
logical_false: Expression
```

</details>

## logical_true

<a id="entry-presentation_python_logic_capability_discrete_mathematics_logical_true_api_session_logical_true"></a>
<a id="placement-placement.python.python_module.module_logical_true.ef761df9ca2e"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
logical_true: expression
```

The Boolean constant true (\(\top\)).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_logical_true.2245ad3a5ca6"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.logical_true</code></p>

```python signature
logical_true: Expression
```

</details>

## minimize_logical

<a id="entry-presentation_python_logical_transforms_capability_discrete_mathematics_minimize_logical_api_logic_session_minimize_logical"></a>
<a id="placement-placement.python.python_module.module_minimize_logical.6aa7301c62f6"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
minimize_logical(input_expression: ExpressionLike) -> Expression
```

The smaller of the minimum sum-of-products and product-of-sums two-level forms. Within a practical atom bound this is the exact Quine–McCluskey minimum (prime implicants, essential extraction, and Petrick's method on the residual chart); above it, an Espresso-style heuristic returns a good — not provably minimal — cover.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_minimize_logical.922db5217a78"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.minimize_logical</code></p>

```python signature
minimize_logical(input_expression: ExpressionLike) -> Expression
```

</details>

## minimize_logical

<a id="entry-presentation_python_logical_transforms_capability_discrete_mathematics_minimize_logical_api_expression_operations_expression_minimize_logical"></a>
<a id="placement-placement.python.python_class.expression_minimize_logical.b25a9a94bc0a"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
minimize_logical() -> Expression
```

The smaller of the minimum sum-of-products and product-of-sums two-level forms. Within a practical atom bound this is the exact Quine–McCluskey minimum (prime implicants, essential extraction, and Petrick's method on the residual chart); above it, an Espresso-style heuristic returns a good — not provably minimal — cover.

## mobius

<a id="entry-presentation_python_number_theory_capability_discrete_mathematics_mobius_api_session_mobius"></a>
<a id="placement-placement.python.python_module.module_mobius.daacb524f5df"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
mobius(n: ExpressionLike) -> Expression
```

Möbius \(\mu(n) \in \{-1, 0, 1\}\); requires a positive integer.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_mobius.11e20bdee77b"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.mobius</code></p>

```python signature
mobius(n: ExpressionLike) -> Expression
```

</details>

## modular_inverse

<a id="entry-presentation_python_number_theory_capability_discrete_mathematics_modular_inverse_api_number_theory_session_modular_inverse"></a>
<a id="placement-placement.python.python_module.module_modular_inverse.2972f88b7411"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
modular_inverse(
    value: ExpressionLike,
    modulus: ExpressionLike,
) -> Expression
```

Multiplicative inverse of `value` modulo `modulus`; errors when \(\operatorname{gcd}(\operatorname{value}, \operatorname{modulus}) \ne 1\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_modular_inverse.eb9b0277dc09"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.modular_inverse</code></p>

```python signature
modular_inverse(
    value: ExpressionLike,
    modulus: ExpressionLike,
) -> Expression
```

</details>

## modular_power

<a id="entry-presentation_python_number_theory_capability_discrete_mathematics_modular_power_api_number_theory_session_modular_power"></a>
<a id="placement-placement.python.python_module.module_modular_power.1505cbbc3865"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
modular_power(
    base: ExpressionLike,
    exponent: ExpressionLike,
    modulus: ExpressionLike,
) -> Expression
```

`base^exponent mod modulus` by square-and-multiply; requires positive modulus and non-negative exponent.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_modular_power.12c8754b0333"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.modular_power</code></p>

```python signature
modular_power(
    base: ExpressionLike,
    exponent: ExpressionLike,
    modulus: ExpressionLike,
) -> Expression
```

</details>

## multinomial

<a id="entry-presentation_python_combinatorics_capability_discrete_mathematics_multinomial_api_number_theory_session_multinomial"></a>
<a id="placement-placement.python.python_module.module_multinomial.b098da2587e9"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
multinomial(parts: Iterable[ExpressionLike]) -> Expression
```

Multinomial coefficient \((\sum \operatorname{parts})! / \prod (\operatorname{part}_i!)\); parts must be non-negative integers.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_multinomial.74bc4ac64f30"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.multinomial</code></p>

```python signature
multinomial(parts: Iterable[ExpressionLike]) -> Expression
```

</details>

## partition_count

<a id="entry-presentation_python_combinatorics_capability_discrete_mathematics_partition_count_api_session_partition_count"></a>
<a id="placement-placement.python.python_module.module_partition_count.54165d480956"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
partition_count(n: ExpressionLike) -> Expression
```

Number of integer partitions p(n).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_partition_count.7c6e3db07a36"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.partition_count</code></p>

```python signature
partition_count(n: ExpressionLike) -> Expression
```

</details>

## pell_solutions

<a id="entry-presentation_python_number_theory_capability_discrete_mathematics_pell_solutions_api_number_theory_session_pell_solutions"></a>
<a id="placement-placement.python.python_module.module_pell_solutions.2e80efa05d03"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
pell_solutions(radicand: ExpressionLike, count: int) -> list[Expression]
```

The first `count` positive solutions of \(x^2 - D y^2 = 1\), materialised from the fundamental solution by the Pell recurrence and returned as a flat list \([x_1, y_1, x_2, y_2, \ldots]\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_pell_solutions.0fb4da361212"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.pell_solutions</code></p>

```python signature
pell_solutions(radicand: ExpressionLike, count: int) -> list[Expression]
```

</details>

## real_line

<a id="entry-presentation_python_sets_capability_discrete_mathematics_real_line_api_session_real_line"></a>
<a id="placement-placement.python.python_module.module_real_line.db620c0c71e9"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
real_line: expression
```

The set \(\mathbb{R}\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_real_line.5cf887e6a01d"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.real_line</code></p>

```python signature
real_line: Expression
```

</details>

## rising_factorial

<a id="entry-presentation_python_combinatorics_capability_discrete_mathematics_rising_factorial_api_session_rising_factorial"></a>
<a id="placement-placement.python.python_module.module_rising_factorial.7e0957e016de"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
rising_factorial(
    base: ExpressionLike,
    length: ExpressionLike,
) -> Expression
```

\(\operatorname{base}(\operatorname{base}+1)\cdots(\operatorname{base}+\operatorname{length}-1)\) (the Pochhammer symbol on integers).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_rising_factorial.888782f865ba"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.rising_factorial</code></p>

```python signature
rising_factorial(
    base: ExpressionLike,
    length: ExpressionLike,
) -> Expression
```

</details>

## set_complement

<a id="entry-presentation_python_sets_capability_discrete_mathematics_set_complement_api_sets_session_set_complement"></a>
<a id="placement-placement.python.python_module.module_set_complement.f606e0cf50e3"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
set_complement(
    set_a: ExpressionLike,
    set_b: ExpressionLike,
) -> Expression
```

The relative complement \(a \setminus b\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_set_complement.e014b0241cf8"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.set_complement</code></p>

```python signature
set_complement(
    set_a: ExpressionLike,
    set_b: ExpressionLike,
) -> Expression
```

</details>

## set_intersection

<a id="entry-presentation_python_sets_capability_discrete_mathematics_set_intersection_api_sets_session_set_intersection"></a>
<a id="placement-placement.python.python_module.module_set_intersection.6b4737780adb"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
set_intersection(
    set_a: ExpressionLike,
    set_b: ExpressionLike,
) -> Expression
```

Intersection, computed eagerly where the structural rules allow (interval pairs, finite-set membership filtering; \(\mathbb{R}\) drops, \(\varnothing\) absorbs); otherwise the structural `set_intersection` node.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_set_intersection.472a09b9587f"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.set_intersection</code></p>

```python signature
set_intersection(
    set_a: ExpressionLike,
    set_b: ExpressionLike,
) -> Expression
```

</details>

## set_union

<a id="entry-presentation_python_sets_capability_discrete_mathematics_set_union_api_sets_session_set_union"></a>
<a id="placement-placement.python.python_module.module_set_union.d504e85aca47"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
set_union(set_a: ExpressionLike, set_b: ExpressionLike) -> Expression
```

Union, computed eagerly where the structural rules allow (overlapping or touching interval pairs merge; nested unions splice, \(\varnothing\) drops, \(\mathbb{R}\) absorbs); otherwise the structural `set_union` node.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_set_union.ec45d9337ffd"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.set_union</code></p>

```python signature
set_union(set_a: ExpressionLike, set_b: ExpressionLike) -> Expression
```

</details>

## simplify_logical

<a id="entry-presentation_python_logical_transforms_capability_discrete_mathematics_simplify_logical_api_logic_session_simplify_logical"></a>
<a id="placement-placement.python.python_module.module_simplify_logical.106a43a65d64"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
simplify_logical(input_expression: ExpressionLike) -> Expression
```

Return whichever of the original form, the disjunctive and conjunctive normal forms, and the two minimal two-level forms has the smallest weighted size.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_simplify_logical.33bcfe6e72e2"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.simplify_logical</code></p>

```python signature
simplify_logical(input_expression: ExpressionLike) -> Expression
```

</details>

## simplify_logical

<a id="entry-presentation_python_logical_transforms_capability_discrete_mathematics_simplify_logical_api_expression_operations_expression_simplify_logical"></a>
<a id="placement-placement.python.python_class.expression_simplify_logical.b7532204a234"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
simplify_logical() -> Expression
```

Return whichever of the original form, the disjunctive and conjunctive normal forms, and the two minimal two-level forms has the smallest weighted size.

## solve_linear_diophantine

<a id="entry-presentation_python_number_theory_capability_discrete_mathematics_solve_linear_diophantine_api_number_theory_session_solve_linear_diophantine"></a>
<a id="placement-placement.python.python_module.module_solve_linear_diophantine.e608e787a9af"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
solve_linear_diophantine(
    coefficients: Iterable[ExpressionLike],
    constant: ExpressionLike,
) -> list[Expression]
```

General integer solution of \(a_1 x_1 + \ldots + a_n x_n = c\), returned as the parametric coordinates — one expression per unknown, affine in fresh integer parameter symbols (`diophantine_parameter_k`) shared across the coordinates so that choosing any integers for the parameters yields a solution tuple. The list is empty when the equation has no integer solution (\(\gcd(a_i) \nmid c\)).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_solve_linear_diophantine.dd63ac50f29d"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.solve_linear_diophantine</code></p>

```python signature
solve_linear_diophantine(
    coefficients: Iterable[ExpressionLike],
    constant: ExpressionLike,
) -> list[Expression]
```

</details>

## solve_linear_diophantine_system

<a id="entry-presentation_python_number_theory_capability_discrete_mathematics_solve_linear_diophantine_system_api_number_theory_session_solve_linear_diophantine_system"></a>
<a id="placement-placement.python.python_module.module_solve_linear_diophantine_system.c23ef0041f98"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
solve_linear_diophantine_system(
    coefficient_matrix: Matrix,
    constants: Iterable[ExpressionLike],
) -> list[Expression]
```

General integer solution of the rectangular system \(A x = b\), returned as one parametric coordinate expression per column of `A`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_solve_linear_diophantine_system.d9bf4fb883c1"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.solve_linear_diophantine_system</code></p>

```python signature
solve_linear_diophantine_system(
    coefficient_matrix: Matrix,
    constants: Iterable[ExpressionLike],
) -> list[Expression]
```

</details>

## solve_negative_pell

<a id="entry-presentation_python_number_theory_capability_discrete_mathematics_solve_negative_pell_api_number_theory_session_solve_negative_pell"></a>
<a id="placement-placement.python.python_module.module_solve_negative_pell.8a2a60487fe4"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
solve_negative_pell(radicand: ExpressionLike) -> list[Expression]
```

Fundamental solution `[x, y]` of the negative-Pell equation \(x^2 - D y^2 = -1\) when it is solvable (exactly when the continued fraction of \(\sqrt{D}\) has odd period), and an empty list otherwise.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_solve_negative_pell.c5c6d7b87834"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.solve_negative_pell</code></p>

```python signature
solve_negative_pell(radicand: ExpressionLike) -> list[Expression]
```

</details>

## solve_pell

<a id="entry-presentation_python_number_theory_capability_discrete_mathematics_solve_pell_api_number_theory_session_solve_pell"></a>
<a id="placement-placement.python.python_module.module_solve_pell.1ed2c97e92c4"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
solve_pell(radicand: ExpressionLike) -> list[Expression]
```

Fundamental solution `[x, y]` of \(x^2 - D y^2 = 1\) for a positive non-square integer `D`, the smallest positive solution from which all others are generated by the recurrence \(x_{k+1} = x_1 x_k + D y_1 y_k\), \(y_{k+1} = x_1 y_k + y_1 x_k\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_solve_pell.aed0c23393b3"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.solve_pell</code></p>

```python signature
solve_pell(radicand: ExpressionLike) -> list[Expression]
```

</details>

## stirling_first_signed

<a id="entry-presentation_python_combinatorics_capability_discrete_mathematics_stirling_first_signed_api_session_stirling_first_signed"></a>
<a id="placement-placement.python.python_module.module_stirling_first_signed.d5d42ca8d378"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
stirling_first_signed(
    n: ExpressionLike,
    k: ExpressionLike,
) -> Expression
```

Signed Stirling number of the first kind s(n, k).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_stirling_first_signed.0b00fa2e27c8"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.stirling_first_signed</code></p>

```python signature
stirling_first_signed(
    n: ExpressionLike,
    k: ExpressionLike,
) -> Expression
```

</details>

## stirling_second

<a id="entry-presentation_python_combinatorics_capability_discrete_mathematics_stirling_second_api_session_stirling_second"></a>
<a id="placement-placement.python.python_module.module_stirling_second.23f7af4a94cb"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
stirling_second(n: ExpressionLike, k: ExpressionLike) -> Expression
```

Stirling number of the second kind S(n, k).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_stirling_second.b0c8e016daea"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.stirling_second</code></p>

```python signature
stirling_second(n: ExpressionLike, k: ExpressionLike) -> Expression
```

</details>

## abs

<a id="entry-presentation_python_elementary_functions_capability_elementary_functions_abs_api_session_abs"></a>
<a id="placement-placement.python.python_module.module_abs.6f3b77996e02"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
abs(x: Any) -> Expression
```

Absolute value of `x`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_abs.30bcdde85299"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.abs</code></p>

```python signature
abs(x: Any) -> Expression
```

</details>

## arccos

<a id="entry-presentation_python_elementary_functions_capability_elementary_functions_arccos_api_session_arccos"></a>
<a id="placement-placement.python.python_module.module_arccos.5a6d3f515812"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
arccos(x: Any) -> Expression
```

Inverse cosine of `x`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_arccos.7a70dfacc33a"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.arccos</code></p>

```python signature
arccos(x: Any) -> Expression
```

</details>

## arccosh

<a id="entry-presentation_python_elementary_functions_capability_elementary_functions_arccosh_api_session_arccosh"></a>
<a id="placement-placement.python.python_module.module_arccosh.77048ca2ecca"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
arccosh(x: Any) -> Expression
```

Inverse hyperbolic cosine of `x`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_arccosh.4417e35d0262"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.arccosh</code></p>

```python signature
arccosh(x: Any) -> Expression
```

</details>

## arccot

<a id="entry-presentation_python_elementary_functions_capability_elementary_functions_arccot_api_session_arccot"></a>
<a id="placement-placement.python.python_module.module_arccot.bd3e2f94ee3a"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
arccot(x: Any) -> Expression
```

Inverse cotangent of `x`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_arccot.b294575b88f2"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.arccot</code></p>

```python signature
arccot(x: Any) -> Expression
```

</details>

## arccoth

<a id="entry-presentation_python_elementary_functions_capability_elementary_functions_arccoth_api_session_arccoth"></a>
<a id="placement-placement.python.python_module.module_arccoth.06f21dde5a9f"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
arccoth(x: Any) -> Expression
```

Inverse hyperbolic cotangent of `x`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_arccoth.8d0062b5a482"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.arccoth</code></p>

```python signature
arccoth(x: Any) -> Expression
```

</details>

## arccsc

<a id="entry-presentation_python_elementary_functions_capability_elementary_functions_arccsc_api_session_arccsc"></a>
<a id="placement-placement.python.python_module.module_arccsc.a6d872d21bc4"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
arccsc(x: Any) -> Expression
```

Inverse cosecant of `x`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_arccsc.cea8fd29a633"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.arccsc</code></p>

```python signature
arccsc(x: Any) -> Expression
```

</details>

## arccsch

<a id="entry-presentation_python_elementary_functions_capability_elementary_functions_arccsch_api_session_arccsch"></a>
<a id="placement-placement.python.python_module.module_arccsch.8c8f91d0bb39"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
arccsch(x: Any) -> Expression
```

Inverse hyperbolic cosecant of `x`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_arccsch.d9ba906b70cb"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.arccsch</code></p>

```python signature
arccsch(x: Any) -> Expression
```

</details>

## arcsec

<a id="entry-presentation_python_elementary_functions_capability_elementary_functions_arcsec_api_session_arcsec"></a>
<a id="placement-placement.python.python_module.module_arcsec.23126297ab40"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
arcsec(x: Any) -> Expression
```

Inverse secant of `x`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_arcsec.0f67c01737e8"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.arcsec</code></p>

```python signature
arcsec(x: Any) -> Expression
```

</details>

## arcsech

<a id="entry-presentation_python_elementary_functions_capability_elementary_functions_arcsech_api_session_arcsech"></a>
<a id="placement-placement.python.python_module.module_arcsech.a9e154a6bf97"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
arcsech(x: Any) -> Expression
```

Inverse hyperbolic secant of `x`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_arcsech.971cd467aa7d"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.arcsech</code></p>

```python signature
arcsech(x: Any) -> Expression
```

</details>

## arcsin

<a id="entry-presentation_python_elementary_functions_capability_elementary_functions_arcsin_api_session_arcsin"></a>
<a id="placement-placement.python.python_module.module_arcsin.b01f3ac42b69"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
arcsin(x: Any) -> Expression
```

Inverse sine of `x`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_arcsin.6eebc93d57ab"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.arcsin</code></p>

```python signature
arcsin(x: Any) -> Expression
```

</details>

## arcsinh

<a id="entry-presentation_python_elementary_functions_capability_elementary_functions_arcsinh_api_session_arcsinh"></a>
<a id="placement-placement.python.python_module.module_arcsinh.4a3c7bc6a6de"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
arcsinh(x: Any) -> Expression
```

Inverse hyperbolic sine of `x`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_arcsinh.390040699211"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.arcsinh</code></p>

```python signature
arcsinh(x: Any) -> Expression
```

</details>

## arctan

<a id="entry-presentation_python_elementary_functions_capability_elementary_functions_arctan_api_session_arctan"></a>
<a id="placement-placement.python.python_module.module_arctan.a24571248c9c"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
arctan(x: Any) -> Expression
```

Inverse tangent of `x`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_arctan.a3656d151bdf"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.arctan</code></p>

```python signature
arctan(x: Any) -> Expression
```

</details>

## arctanh

<a id="entry-presentation_python_elementary_functions_capability_elementary_functions_arctanh_api_session_arctanh"></a>
<a id="placement-placement.python.python_module.module_arctanh.a2b27862e4bf"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
arctanh(x: Any) -> Expression
```

Inverse hyperbolic tangent of `x`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_arctanh.a24914572fb2"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.arctanh</code></p>

```python signature
arctanh(x: Any) -> Expression
```

</details>

## binomial

<a id="entry-presentation_python_elementary_functions_capability_elementary_functions_binomial_api_session_binomial"></a>
<a id="placement-placement.python.python_module.module_binomial.ab64d16a8122"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
binomial(n: Any, k: Any) -> Expression
```

Binomial coefficient C(n, k).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_binomial.9e951960bd95"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.binomial</code></p>

```python signature
binomial(n: Any, k: Any) -> Expression
```

</details>

## ceiling

<a id="entry-presentation_python_elementary_functions_capability_elementary_functions_ceiling_api_session_ceiling"></a>
<a id="placement-placement.python.python_module.module_ceiling.e087a8cc32e2"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
ceiling(x: Any) -> Expression
```

Least integer greater than or equal to `x`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_ceiling.c1476dcc23b6"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.ceiling</code></p>

```python signature
ceiling(x: Any) -> Expression
```

</details>

## conjugate

<a id="entry-presentation_python_elementary_functions_capability_elementary_functions_conjugate_api_session_conjugate"></a>
<a id="placement-placement.python.python_module.module_conjugate.c7807f5c5e11"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
conjugate(x: Any) -> Expression
```

Complex conjugate.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_conjugate.cc53e6001b50"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.conjugate</code></p>

```python signature
conjugate(x: Any) -> Expression
```

</details>

## cos

<a id="entry-presentation_python_elementary_functions_capability_elementary_functions_cos_api_session_cos"></a>
<a id="placement-placement.python.python_module.module_cos.aab118ba9fe6"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
cos(x: Any) -> Expression
```

Cosine of `x`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_cos.dfaf66ba5973"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.cos</code></p>

```python signature
cos(x: Any) -> Expression
```

</details>

## cosh

<a id="entry-presentation_python_elementary_functions_capability_elementary_functions_cosh_api_session_cosh"></a>
<a id="placement-placement.python.python_module.module_cosh.be83315a3e0f"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
cosh(x: Any) -> Expression
```

Hyperbolic cosine of `x`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_cosh.ef36b0aadab9"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.cosh</code></p>

```python signature
cosh(x: Any) -> Expression
```

</details>

## cot

<a id="entry-presentation_python_elementary_functions_capability_elementary_functions_cot_api_session_cot"></a>
<a id="placement-placement.python.python_module.module_cot.12bfc26ea435"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
cot(x: Any) -> Expression
```

Cotangent of `x`, the reciprocal of the tangent.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_cot.95a1f651309c"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.cot</code></p>

```python signature
cot(x: Any) -> Expression
```

</details>

## coth

<a id="entry-presentation_python_elementary_functions_capability_elementary_functions_coth_api_session_coth"></a>
<a id="placement-placement.python.python_module.module_coth.9c8ef48fce23"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
coth(x: Any) -> Expression
```

Hyperbolic cotangent of `x`, the reciprocal of the hyperbolic tangent.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_coth.1e2137ed4ad6"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.coth</code></p>

```python signature
coth(x: Any) -> Expression
```

</details>

## csc

<a id="entry-presentation_python_elementary_functions_capability_elementary_functions_csc_api_session_csc"></a>
<a id="placement-placement.python.python_module.module_csc.396a68c8eb00"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
csc(x: Any) -> Expression
```

Cosecant of `x`, the reciprocal of the sine.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_csc.94f822d148c7"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.csc</code></p>

```python signature
csc(x: Any) -> Expression
```

</details>

## csch

<a id="entry-presentation_python_elementary_functions_capability_elementary_functions_csch_api_session_csch"></a>
<a id="placement-placement.python.python_module.module_csch.ccb0150d4407"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
csch(x: Any) -> Expression
```

Hyperbolic cosecant of `x`, the reciprocal of the hyperbolic sine.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_csch.d71f0f3b5241"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.csch</code></p>

```python signature
csch(x: Any) -> Expression
```

</details>

## equal

<a id="entry-presentation_python_relations_capability_elementary_functions_equal_api_session_equal"></a>
<a id="placement-placement.python.python_module.module_equal.326e1221df85"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
equal(left: Any, right: Any) -> Expression
```

Build the relation `left = right` without deciding its truth.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_equal.113873573950"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.equal</code></p>

```python signature
equal(left: Any, right: Any) -> Expression
```

</details>

## exp

<a id="entry-presentation_python_elementary_functions_capability_elementary_functions_exp_api_session_exp"></a>
<a id="placement-placement.python.python_module.module_exp.e532b27d6488"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
exp(x: Any) -> Expression
```

The natural exponential.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_exp.dcfcdebc426d"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.exp</code></p>

```python signature
exp(x: Any) -> Expression
```

</details>

## factorial

<a id="entry-presentation_python_elementary_functions_capability_elementary_functions_factorial_api_session_factorial"></a>
<a id="placement-placement.python.python_module.module_factorial.ccb203177540"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
factorial(x: Any) -> Expression
```

Factorial of `x`, evaluated exactly on nonnegative integers.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_factorial.74ad55426f3c"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.factorial</code></p>

```python signature
factorial(x: Any) -> Expression
```

</details>

## floor

<a id="entry-presentation_python_elementary_functions_capability_elementary_functions_floor_api_session_floor"></a>
<a id="placement-placement.python.python_module.module_floor.c0e8a9897349"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
floor(x: Any) -> Expression
```

Greatest integer less than or equal to `x`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_floor.a32b850359e8"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.floor</code></p>

```python signature
floor(x: Any) -> Expression
```

</details>

## greater_than

<a id="entry-presentation_python_relations_capability_elementary_functions_greater_than_api_session_greater_than"></a>
<a id="placement-placement.python.python_module.module_greater_than.6e179ea266ec"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
greater_than(left: Any, right: Any) -> Expression
```

Build the relation `left > right` without deciding its truth.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_greater_than.5acfd54292ba"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.greater_than</code></p>

```python signature
greater_than(left: Any, right: Any) -> Expression
```

</details>

## greater_than_or_equal

<a id="entry-presentation_python_relations_capability_elementary_functions_greater_than_or_equal_api_session_greater_than_or_equal"></a>
<a id="placement-placement.python.python_module.module_greater_than_or_equal.0519fede2619"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
greater_than_or_equal(left: Any, right: Any) -> Expression
```

Build the relation `left >= right` without deciding its truth.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_greater_than_or_equal.01cfcff3fa0b"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.greater_than_or_equal</code></p>

```python signature
greater_than_or_equal(left: Any, right: Any) -> Expression
```

</details>

## less_than

<a id="entry-presentation_python_relations_capability_elementary_functions_less_than_api_session_less_than"></a>
<a id="placement-placement.python.python_module.module_less_than.1210afe36701"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
less_than(left: Any, right: Any) -> Expression
```

Build the relation `left < right` without deciding its truth.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_less_than.e74aa8108647"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.less_than</code></p>

```python signature
less_than(left: Any, right: Any) -> Expression
```

</details>

## less_than_or_equal

<a id="entry-presentation_python_relations_capability_elementary_functions_less_than_or_equal_api_session_less_than_or_equal"></a>
<a id="placement-placement.python.python_module.module_less_than_or_equal.b08ae5aa68dc"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
less_than_or_equal(left: Any, right: Any) -> Expression
```

Build the relation `left <= right` without deciding its truth.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_less_than_or_equal.a048e14083e2"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.less_than_or_equal</code></p>

```python signature
less_than_or_equal(left: Any, right: Any) -> Expression
```

</details>

## log

<a id="entry-presentation_python_elementary_functions_capability_elementary_functions_log_api_session_log"></a>
<a id="placement-placement.python.python_module.module_log.eb7092dd1433"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
log(x: Any, base: Optional[Any] = None) -> Expression
```

Natural logarithm; with `base` given, `log(x)/log(base)`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_log.bb93a92c850a"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.log</code></p>

```python signature
log(x: Any, base: Optional[Any] = None) -> Expression
```

</details>

## max

<a id="entry-presentation_python_elementary_functions_capability_elementary_functions_max_api_session_max"></a>
<a id="placement-placement.python.python_module.module_max.0cc6820370cc"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
max(*arguments: Any) -> Expression
```

Maximum of the arguments (variadic in Python; a JS array in WASM).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_max.e4c165d1c2dc"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.max</code></p>

```python signature
max(*arguments: Any) -> Expression
```

</details>

## min

<a id="entry-presentation_python_elementary_functions_capability_elementary_functions_min_api_session_min"></a>
<a id="placement-placement.python.python_module.module_min.97099ca58e67"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
min(*arguments: Any) -> Expression
```

Minimum of the arguments (variadic in Python; a JS array in WASM).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_min.b6ea4603a340"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.min</code></p>

```python signature
min(*arguments: Any) -> Expression
```

</details>

## not_equal

<a id="entry-presentation_python_relations_capability_elementary_functions_not_equal_api_session_not_equal"></a>
<a id="placement-placement.python.python_module.module_not_equal.e47c657bdbb8"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
not_equal(left: Any, right: Any) -> Expression
```

Build the relation `left != right` without deciding its truth.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_not_equal.6276e7a52c0e"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.not_equal</code></p>

```python signature
not_equal(left: Any, right: Any) -> Expression
```

</details>

## root

<a id="entry-presentation_python_elementary_functions_capability_elementary_functions_root_api_session_root"></a>
<a id="placement-placement.python.python_module.module_root.697cfeeca0f3"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
root(x: Any, n: Any) -> Expression
```

Principal n-th root, stored as `x^(1/n)`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_root.5391a5fd8b88"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.root</code></p>

```python signature
root(x: Any, n: Any) -> Expression
```

</details>

## sec

<a id="entry-presentation_python_elementary_functions_capability_elementary_functions_sec_api_session_sec"></a>
<a id="placement-placement.python.python_module.module_sec.6b218dd1fd77"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
sec(x: Any) -> Expression
```

Secant of `x`, the reciprocal of the cosine.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_sec.358f44f42f0e"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.sec</code></p>

```python signature
sec(x: Any) -> Expression
```

</details>

## sech

<a id="entry-presentation_python_elementary_functions_capability_elementary_functions_sech_api_session_sech"></a>
<a id="placement-placement.python.python_module.module_sech.ca19dea9b1db"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
sech(x: Any) -> Expression
```

Hyperbolic secant of `x`, the reciprocal of the hyperbolic cosine.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_sech.d5ddd8a5cb01"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.sech</code></p>

```python signature
sech(x: Any) -> Expression
```

</details>

## sin

<a id="entry-presentation_python_elementary_functions_capability_elementary_functions_sin_api_session_sin"></a>
<a id="placement-placement.python.python_module.module_sin.09bf174f4afd"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
sin(x: Any) -> Expression
```

Sine of `x`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_sin.2f717839986d"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.sin</code></p>

```python signature
sin(x: Any) -> Expression
```

</details>

## sinh

<a id="entry-presentation_python_elementary_functions_capability_elementary_functions_sinh_api_session_sinh"></a>
<a id="placement-placement.python.python_module.module_sinh.28622dd64fd0"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
sinh(x: Any) -> Expression
```

Hyperbolic sine of `x`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_sinh.838f987dadf3"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.sinh</code></p>

```python signature
sinh(x: Any) -> Expression
```

</details>

## sqrt

<a id="entry-presentation_python_elementary_functions_capability_elementary_functions_sqrt_api_session_sqrt"></a>
<a id="placement-placement.python.python_module.module_sqrt.e389cc7b7e6b"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
sqrt(x: Any) -> Expression
```

Principal square root, stored as `x^(1/2)`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_sqrt.6b42de61b736"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.sqrt</code></p>

```python signature
sqrt(x: Any) -> Expression
```

</details>

## tan

<a id="entry-presentation_python_elementary_functions_capability_elementary_functions_tan_api_session_tan"></a>
<a id="placement-placement.python.python_module.module_tan.ac6870bc257c"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
tan(x: Any) -> Expression
```

Tangent of `x`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_tan.77638081a2fd"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.tan</code></p>

```python signature
tan(x: Any) -> Expression
```

</details>

## tanh

<a id="entry-presentation_python_elementary_functions_capability_elementary_functions_tanh_api_session_tanh"></a>
<a id="placement-placement.python.python_module.module_tanh.e4b9688d975c"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
tanh(x: Any) -> Expression
```

Hyperbolic tangent of `x`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_tanh.afa470665527"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.tanh</code></p>

```python signature
tanh(x: Any) -> Expression
```

</details>

## OrdinaryDifferentialEquationSolveResult

<a id="entry-presentation_python_differential_equations_capability_contexts_ordinarydifferentialequationsolveresult_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult"></a>
<a id="placement-placement.python.python_class.ordinarydifferentialequationsolveresult.d2d24a57b343"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class OrdinaryDifferentialEquationSolveResult
```

A scalar ordinary differential equation outcome that keeps the evidence behind its answer.

## OrdinaryDifferentialEquationSystemSolveResult

<a id="entry-presentation_python_differential_equations_capability_contexts_ordinarydifferentialequationsystemsolveresult_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult"></a>
<a id="placement-placement.python.python_class.ordinarydifferentialequationsystemsolveresult.0c154c915822"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class OrdinaryDifferentialEquationSystemSolveResult
```

A system of ordinary differential equations outcome that keeps the evidence behind its answer.

## OrdinaryDifferentialEquationSystemVerificationReport

<a id="entry-presentation_python_differential_equations_capability_contexts_ordinarydifferentialequationsystemverificationreport_api_ordinary_differential_equations_ordinarydifferentialequationsystemverificationreport"></a>
<a id="placement-placement.python.python_class.ordinarydifferentialequationsystemverificationreport.92e863cb4a59"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class OrdinaryDifferentialEquationSystemVerificationReport
```

Independent exact evidence about a supplied assignment for a system of ordinary differential equations.

## classification

<a id="entry-presentation_python_optimization_capability_equations_classification_api_partial_differential_equations_partialdifferentialequationsolveresult_classification"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsolveresult_classification.0c853e3e8c67"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolveResult property</p>

```python signature
classification: Optional[PartialDifferentialEquationClassification]
```

The exact classification the dispatcher established, when it reached one.

## classify_unconstrained

<a id="entry-presentation_python_optimization_capability_equations_classify_unconstrained_api_solving_session_classify_unconstrained"></a>
<a id="placement-placement.python.python_module.module_classify_unconstrained.d8b4216e7503"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
classify_unconstrained(
    objective: ExpressionLike,
    variables: Iterable[VariableLike],
    point_variables: Iterable[VariableLike],
    point_values: Iterable[ExpressionLike],
) -> str
```

Classify one given interior point — supplied as the parallel `point_variables` / `point_values` lists — by Hessian definiteness, returning the verdict string.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_classify_unconstrained.98d2bf8b8ec1"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.classify_unconstrained</code></p>

```python signature
classify_unconstrained(
    objective: ExpressionLike,
    variables: Iterable[VariableLike],
    point_variables: Iterable[VariableLike],
    point_values: Iterable[ExpressionLike],
) -> str
```

</details>

## compare_real_roots

<a id="entry-presentation_python_solving_capability_equations_compare_real_roots_api_solving_session_compare_real_roots"></a>
<a id="placement-placement.python.python_module.module_compare_real_roots.64c6a3af0b12"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
compare_real_roots(
    first_expression: ExpressionLike,
    first_variable: VariableLike,
    first_index: int,
    second_expression: ExpressionLike,
    second_variable: VariableLike,
    second_index: int,
) -> Optional[int]
```

Compare two real algebraic numbers exactly, each given as the `index`-th smallest real root of a univariate polynomial over the rationals. Returns `-1`, `0`, or `1` according to whether the first is less than, equal to, or greater than the second — a total order decided exactly (for example `compare_real_roots` of \(\sqrt{2}\) and \(\sqrt[3]{3}\) returns `-1`).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_compare_real_roots.d672290897f7"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.compare_real_roots</code></p>

```python signature
compare_real_roots(
    first_expression: ExpressionLike,
    first_variable: VariableLike,
    first_index: int,
    second_expression: ExpressionLike,
    second_variable: VariableLike,
    second_index: int,
) -> Optional[int]
```

</details>

## construct_partial_differential_equation_point_symmetry_action

<a id="entry-presentation_python_differential_equations_capability_contexts_construct_partial_differential_equation_point_symmetry_action_api_partial_differential_equations_session_construct_partial_differential_equation_point_symmetry_action"></a>
<a id="placement-placement.python.python_module.module_construct_partial_differential_equation_point_symmetry_action.d6484ffbc4bd"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
construct_partial_differential_equation_point_symmetry_action(problem: partial_differential_equation_problem) -> partial_differential_equation_point_symmetry_action
```

Integrate and compose the point-symmetry algebra of a PDE into its connected local action.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_construct_partial_differential_equation_point_symmetry_action.7eeb86f85ac4"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.construct_partial_differential_equation_point_symmetry_action</code></p>

```python signature
construct_partial_differential_equation_point_symmetry_action(problem: partial_differential_equation_problem) -> partial_differential_equation_point_symmetry_action
```

</details>

## count_distinct_real_roots

<a id="entry-presentation_python_solving_capability_equations_count_distinct_real_roots_api_solving_session_count_distinct_real_roots"></a>
<a id="placement-placement.python.python_module.module_count_distinct_real_roots.a838a3619f68"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
count_distinct_real_roots(
    input_expression: ExpressionLike,
    variable: VariableLike,
) -> Optional[int]
```

Number of distinct real roots over all of \(\mathbb{R}\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_count_distinct_real_roots.cb5e1140209d"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.count_distinct_real_roots</code></p>

```python signature
count_distinct_real_roots(
    input_expression: ExpressionLike,
    variable: VariableLike,
) -> Optional[int]
```

</details>

## derive_partial_differential_equation_point_symmetries

<a id="entry-presentation_python_differential_equations_capability_contexts_derive_partial_differential_equation_point_symmetries_api_partial_differential_equations_session_derive_partial_differential_equation_point_symmetries"></a>
<a id="placement-placement.python.python_module.module_derive_partial_differential_equation_point_symmetries.d34c8c04e073"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
derive_partial_differential_equation_point_symmetries(problem: partial_differential_equation_problem) -> partial_differential_equation_point_symmetry_algebra
```

Derive the point-symmetry algebra of a scalar PDE, each basis generator independently verified.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_derive_partial_differential_equation_point_symmetries.ee176ee754ab"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.derive_partial_differential_equation_point_symmetries</code></p>

```python signature
derive_partial_differential_equation_point_symmetries(problem: partial_differential_equation_problem) -> partial_differential_equation_point_symmetry_algebra
```

</details>

## eliminate_quantifiers

<a id="entry-presentation_python_solving_capability_equations_eliminate_quantifiers_api_logic_session_eliminate_quantifiers"></a>
<a id="placement-placement.python.python_module.module_eliminate_quantifiers.671ab41c3767"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
eliminate_quantifiers(
    matrix: ExpressionLike,
    quantifiers: list[str],
    variables: Iterable[VariableLike],
) -> Expression
```

`context.eliminate_quantifiers(matrix, quantifiers: list[str], variables: list[VariableLike])`

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_eliminate_quantifiers.a0758faf0945"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.eliminate_quantifiers</code></p>

```python signature
eliminate_quantifiers(
    matrix: ExpressionLike,
    quantifiers: list[str],
    variables: Iterable[VariableLike],
) -> Expression
```

</details>

## establishes_completeness

<a id="entry-presentation_python_differential_equations_capability_contexts_establishes_completeness_api_partial_differential_equations_partialdifferentialequationsolutionfamily_establishes_completeness"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsolutionfamily_establishes_completeness.d0d1c58db829"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolutionFamily property</p>

```python signature
establishes_completeness: bool
```

Whether the family carries a completeness theorem whose every identity was proved.

## global_optimum_on_semialgebraic

<a id="entry-presentation_python_optimization_capability_equations_global_optimum_on_semialgebraic_api_solving_session_global_optimum_on_semialgebraic"></a>
<a id="placement-placement.python.python_module.module_global_optimum_on_semialgebraic.0c8e65687986"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
global_optimum_on_semialgebraic(
    objective: ExpressionLike,
    constraints: ExpressionLike,
    variables: Iterable[VariableLike],
    direction: str,
) -> Any
```

`context.global_optimum_on_semialgebraic(objective, constraints, variables: list[VariableLike], direction: str)`

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_global_optimum_on_semialgebraic.b1474df83839"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.global_optimum_on_semialgebraic</code></p>

```python signature
global_optimum_on_semialgebraic(
    objective: ExpressionLike,
    constraints: ExpressionLike,
    variables: Iterable[VariableLike],
    direction: str,
) -> Any
```

</details>

## karush_kuhn_tucker_points

<a id="entry-presentation_python_optimization_capability_equations_karush_kuhn_tucker_points_api_solving_session_karush_kuhn_tucker_points"></a>
<a id="placement-placement.python.python_module.module_karush_kuhn_tucker_points.71459e1b55c5"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
karush_kuhn_tucker_points(
    objective: ExpressionLike,
    inequality_constraints: Iterable[ExpressionLike],
    equality_constraints: Iterable[ExpressionLike],
    variables: Iterable[VariableLike],
) -> Any
```

The Karush–Kuhn–Tucker points found by active-set enumeration. Each inequality is read as \(\operatorname{inequality} \le 0\) and each equality as `equality = 0`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_karush_kuhn_tucker_points.690ab946c747"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.karush_kuhn_tucker_points</code></p>

```python signature
karush_kuhn_tucker_points(
    objective: ExpressionLike,
    inequality_constraints: Iterable[ExpressionLike],
    equality_constraints: Iterable[ExpressionLike],
    variables: Iterable[VariableLike],
) -> Any
```

</details>

## lagrange_critical_points

<a id="entry-presentation_python_optimization_capability_equations_lagrange_critical_points_api_solving_session_lagrange_critical_points"></a>
<a id="placement-placement.python.python_module.module_lagrange_critical_points.f93e590e2972"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
lagrange_critical_points(
    objective: ExpressionLike,
    constraints: Iterable[ExpressionLike],
    variables: Iterable[VariableLike],
) -> Any
```

The equality-constrained critical points via Lagrange multipliers: stationarity of \(L = f + \sum_i \lambda_i g_i\) together with each `constraint = 0`, classified by the bordered Hessian. The solved multiplier values appear in each point's multipliers.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_lagrange_critical_points.bd839c800683"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.lagrange_critical_points</code></p>

```python signature
lagrange_critical_points(
    objective: ExpressionLike,
    constraints: Iterable[ExpressionLike],
    variables: Iterable[VariableLike],
) -> Any
```

</details>

## minimal_polynomial_of

<a id="entry-presentation_python_solving_capability_equations_minimal_polynomial_of_api_algebra_session_minimal_polynomial_of"></a>
<a id="placement-placement.python.python_module.module_minimal_polynomial_of.55b3ebd83e25"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
minimal_polynomial_of(
    input_expression: ExpressionLike,
    variable: VariableLike,
) -> Optional[Expression]
```

Return an exact polynomial in the requested variable for a first-class polynomial-root atom. Its dense primitive integer coefficients are independent of the source variable, coefficient scale, and current isolation precision.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_minimal_polynomial_of.0f4e1c41aa2a"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.minimal_polynomial_of</code></p>

```python signature
minimal_polynomial_of(
    input_expression: ExpressionLike,
    variable: VariableLike,
) -> Optional[Expression]
```

</details>

## partial_differential_equation_point_symmetry_generator

<a id="entry-presentation_python_differential_equations_capability_contexts_partial_differential_equation_point_symmetry_generator_api_partial_differential_equations_session_partial_differential_equation_point_symmetry_generator"></a>
<a id="placement-placement.python.python_module.module_partial_differential_equation_point_symmetry_generator.780b1859c271"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
partial_differential_equation_point_symmetry_generator(
    problem: partial_differential_equation_problem,
    coordinate_infinitesimals: expression_collection_input,
    dependent_infinitesimal: expression_input,
) -> partial_differential_equation_point_symmetry_generator
```

Construct a candidate point-symmetry generator of a PDE from its infinitesimals.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_partial_differential_equation_point_symmetry_generator.29e8c6c05930"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.partial_differential_equation_point_symmetry_generator</code></p>

```python signature
partial_differential_equation_point_symmetry_generator(
    problem: partial_differential_equation_problem,
    coordinate_infinitesimals: expression_collection_input,
    dependent_infinitesimal: expression_input,
) -> partial_differential_equation_point_symmetry_generator
```

</details>

## polynomial_root

<a id="entry-presentation_python_solving_capability_equations_polynomial_root_api_solving_session_polynomial_root"></a>
<a id="placement-placement.python.python_module.module_polynomial_root.078947de5378"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
polynomial_root(
    input_expression: ExpressionLike,
    variable: VariableLike,
    index: int,
) -> Optional[Expression]
```

Construct the zero-based `index`-th exact root of a univariate rational polynomial. Roots use canonical mathematical order: increasing real roots first, then non-real roots ordered by exact real part and exact imaginary part; indexing counts multiplicity. Coefficient scale and the variable name do not affect the resulting atom. Invalid, constant, non-rational, out-of-range, or uncertifiable inputs return `None`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_polynomial_root.5cdc7cff6490"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.polynomial_root</code></p>

```python signature
polynomial_root(
    input_expression: ExpressionLike,
    variable: VariableLike,
    index: int,
) -> Optional[Expression]
```

</details>

## real_root_count

<a id="entry-presentation_python_solving_capability_equations_real_root_count_api_solving_session_real_root_count"></a>
<a id="placement-placement.python.python_module.module_real_root_count.85194a5b19fc"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
real_root_count(
    input_expression: ExpressionLike,
    variable: VariableLike,
    lower: int,
    upper: int,
) -> Optional[int]
```

Number of distinct real roots of a univariate polynomial in the interval `(lower, upper]` via Sturm sequences. `None` when the expression is not a univariate polynomial over the rationals.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_real_root_count.c9cb8cec0801"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.real_root_count</code></p>

```python signature
real_root_count(
    input_expression: ExpressionLike,
    variable: VariableLike,
    lower: int,
    upper: int,
) -> Optional[int]
```

</details>

## real_root_sign

<a id="entry-presentation_python_solving_capability_equations_real_root_sign_api_solving_session_real_root_sign"></a>
<a id="placement-placement.python.python_module.module_real_root_sign.c8e22d8c4a52"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
real_root_sign(
    input_expression: ExpressionLike,
    variable: VariableLike,
    index: int,
) -> Optional[int]
```

The exact sign (`-1`, `0`, or `1`) of the `index`-th smallest real root of a univariate polynomial over the rationals, decided exactly through the real algebraic number layer rather than by numeric evaluation. `None` when the expression is not a univariate polynomial over the rationals or `index` is out of range.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_real_root_sign.806570800d2b"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.real_root_sign</code></p>

```python signature
real_root_sign(
    input_expression: ExpressionLike,
    variable: VariableLike,
    index: int,
) -> Optional[int]
```

</details>

## roots_with_multiplicities

<a id="entry-presentation_python_solving_capability_equations_roots_with_multiplicities_api_solving_session_roots_with_multiplicities"></a>
<a id="placement-placement.python.python_module.module_roots_with_multiplicities.a15c88775319"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
roots_with_multiplicities(
    input_expression: ExpressionLike,
    variable: VariableLike,
) -> Any
```

Roots of a polynomial with their multiplicities. Notes: Python returns a dict keyed by root; WASM returns an array of `root_multiplicity` objects.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_roots_with_multiplicities.9ad8376a40ce"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.roots_with_multiplicities</code></p>

```python signature
roots_with_multiplicities(
    input_expression: ExpressionLike,
    variable: VariableLike,
) -> Any
```

</details>

## roots_with_multiplicities

<a id="entry-presentation_python_solving_capability_equations_roots_with_multiplicities_api_expression_operations_expression_roots_with_multiplicities"></a>
<a id="placement-placement.python.python_class.expression_roots_with_multiplicities.30879349c706"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
roots_with_multiplicities(variable: VariableLike) -> Any
```

Roots of a polynomial with their multiplicities. Notes: Python returns a dict keyed by root; WASM returns an array of `root_multiplicity` objects.

## solve

<a id="entry-presentation_python_solving_capability_equations_solve_api_solving_session_solve"></a>
<a id="placement-placement.python.python_module.module_solve.644a18093e3a"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
solve(
    input_expression: ExpressionLike,
    variable: VariableLike,
) -> list[Expression]
```

Solve an equation (an `equal` node, or an expression implicitly equated to zero) for `variable`, returning a list of solutions. Solutions outside the solver's reach are simply absent — prefer `solveset` when you need an honest "unsolved" residue.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_solve.a86d08ec4a06"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.solve</code></p>

```python signature
solve(
    input_expression: ExpressionLike,
    variable: VariableLike,
) -> list[Expression]
```

</details>

## solve

<a id="entry-presentation_python_solving_capability_equations_solve_api_expression_operations_expression_solve"></a>
<a id="placement-placement.python.python_class.expression_solve.a98fe09639f3"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
solve(variable: VariableLike) -> list[Expression]
```

Solve an equation (an `equal` node, or an expression implicitly equated to zero) for `variable`, returning a list of solutions. Solutions outside the solver's reach are simply absent — prefer `solveset` when you need an honest "unsolved" residue.

## solve_linear_recurrence

<a id="entry-presentation_python_differential_equations_capability_equations_solve_linear_recurrence_api_solving_session_solve_linear_recurrence"></a>
<a id="placement-placement.python.python_module.module_solve_linear_recurrence.7c6ba50bd5f2"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
solve_linear_recurrence(
    equation: ExpressionLike,
    sequence_call: ExpressionLike,
    index_variable: VariableLike,
    initial_conditions: Optional[Iterable[tuple[ExpressionLike, ExpressionLike]]] = None,
) -> Expression
```

Solve a linear recurrence with polynomial coefficients for the unknown sequence named by `sequence_call` (e.g. `a(n)`), via Petkovšek's Hyper algorithm. The general solution carries one fresh symbolic constant per basis element; `initial_conditions` is a list of `(index, value)` pairs fitted by back-substitution. Constant-coefficient polynomial-exponential forcing and coefficients rational in `n` and `c^n` are also solved; other shapes return the unevaluated `recurrence_equation` placeholder. WASM passes a flat interleaved array.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_solve_linear_recurrence.4787f699ed82"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.solve_linear_recurrence</code></p>

```python signature
solve_linear_recurrence(
    equation: ExpressionLike,
    sequence_call: ExpressionLike,
    index_variable: VariableLike,
    initial_conditions: Optional[Iterable[tuple[ExpressionLike, ExpressionLike]]] = None,
) -> Expression
```

</details>

## solve_ordinary_differential_equation

<a id="entry-presentation_python_differential_equations_capability_equations_solve_ordinary_differential_equation_api_solving_session_solve_ordinary_differential_equation"></a>
<a id="placement-placement.python.python_module.module_solve_ordinary_differential_equation.34bcba790969"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
solve_ordinary_differential_equation(
    equation: ExpressionLike,
    dependent_function_call: ExpressionLike,
    independent_variable: VariableLike,
    initial_conditions: Optional[Iterable[tuple[ExpressionLike, ExpressionLike]]] = None,
) -> Expression
```

Solve an ODE for the unknown function named by `dependent_function_call` (e.g. `y(x)`).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_solve_ordinary_differential_equation.8b5bb9481206"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.solve_ordinary_differential_equation</code></p>

```python signature
solve_ordinary_differential_equation(
    equation: ExpressionLike,
    dependent_function_call: ExpressionLike,
    independent_variable: VariableLike,
    initial_conditions: Optional[Iterable[tuple[ExpressionLike, ExpressionLike]]] = None,
) -> Expression
```

</details>

## solve_ordinary_differential_equation_request

<a id="entry-presentation_python_differential_equations_capability_contexts_solve_ordinary_differential_equation_request_api_ordinary_differential_equations_session_solve_ordinary_differential_equation_request"></a>
<a id="placement-placement.python.python_module.module_solve_ordinary_differential_equation_request.162390703771"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
solve_ordinary_differential_equation_request(
    equation: expression_input,
    dependent_function_call: expression_input,
    independent_variable: variable_input,
    scope: str,
    condition_residuals: Optional[expression_collection_input] = None,
    method: str = "automatic",
    regularity: str = "classical",
) -> ordinary_differential_equation_solve_result
```

Solve one scalar ODE request with its data, method, scope, and regularity, keeping the evidence behind the answer.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_solve_ordinary_differential_equation_request.9b6e95f2b190"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.solve_ordinary_differential_equation_request</code></p>

```python signature
solve_ordinary_differential_equation_request(
    equation: expression_input,
    dependent_function_call: expression_input,
    independent_variable: variable_input,
    scope: str,
    condition_residuals: Optional[expression_collection_input] = None,
    method: str = "automatic",
    regularity: str = "classical",
) -> ordinary_differential_equation_solve_result
```

</details>

## solve_ordinary_differential_equation_system_request

<a id="entry-presentation_python_differential_equations_capability_contexts_solve_ordinary_differential_equation_system_request_api_ordinary_differential_equations_session_solve_ordinary_differential_equation_system_request"></a>
<a id="placement-placement.python.python_module.module_solve_ordinary_differential_equation_system_request.7413c2777014"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
solve_ordinary_differential_equation_system_request(
    equations: expression_collection_input,
    dependent_function_calls: expression_collection_input,
    independent_variable: variable_input,
    condition_residuals: Optional[expression_collection_input] = None,
    method: str = "automatic",
) -> ordinary_differential_equation_system_solve_result
```

Solve a system of ODEs in one coordinate through the requested route, keeping the evidence behind the assignment.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_solve_ordinary_differential_equation_system_request.a85a23b83559"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.solve_ordinary_differential_equation_system_request</code></p>

```python signature
solve_ordinary_differential_equation_system_request(
    equations: expression_collection_input,
    dependent_function_calls: expression_collection_input,
    independent_variable: variable_input,
    condition_residuals: Optional[expression_collection_input] = None,
    method: str = "automatic",
) -> ordinary_differential_equation_system_solve_result
```

</details>

## solve_ordinary_differential_equation_with_history

<a id="entry-presentation_python_differential_equations_capability_contexts_solve_ordinary_differential_equation_with_history_api_ordinary_differential_equations_session_solve_ordinary_differential_equation_with_history"></a>
<a id="placement-placement.python.python_module.module_solve_ordinary_differential_equation_with_history.92044eea17ea"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
solve_ordinary_differential_equation_with_history(
    equation: expression_input,
    dependent_function_call: expression_input,
    independent_variable: variable_input,
    history_value: expression_input,
    history_start: expression_input,
    history_end: expression_input,
) -> ordinary_differential_equation_solve_result
```

Solve a retarded delay ODE from a constant history stated on an explicit interval.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_solve_ordinary_differential_equation_with_history.44447471321c"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.solve_ordinary_differential_equation_with_history</code></p>

```python signature
solve_ordinary_differential_equation_with_history(
    equation: expression_input,
    dependent_function_call: expression_input,
    independent_variable: variable_input,
    history_value: expression_input,
    history_start: expression_input,
    history_end: expression_input,
) -> ordinary_differential_equation_solve_result
```

</details>

## solve_ordinary_differential_equation_with_particular_solution

<a id="entry-presentation_python_differential_equations_capability_equations_solve_ordinary_differential_equation_with_particular_solution_api_solving_session_solve_ordinary_differential_equation_with_particular_solution"></a>
<a id="placement-placement.python.python_module.module_solve_ordinary_differential_equation_with_particular_solution.5526cb26f075"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
solve_ordinary_differential_equation_with_particular_solution(
    equation: ExpressionLike,
    dependent_function_call: ExpressionLike,
    independent_variable: VariableLike,
    particular_solution: ExpressionLike,
) -> Expression
```

Riccati-specific entry: with a known particular solution \(y_1\), the substitution \(y = y_1 + 1/v\) reduces the Riccati equation to a linear first-order ODE. Falls back to the unevaluated placeholder when the shape is not Riccati.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_solve_ordinary_differential_equation_with_particular_solution.81aaefb22c81"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.solve_ordinary_differential_equation_with_particular_solution</code></p>

```python signature
solve_ordinary_differential_equation_with_particular_solution(
    equation: ExpressionLike,
    dependent_function_call: ExpressionLike,
    independent_variable: VariableLike,
    particular_solution: ExpressionLike,
) -> Expression
```

</details>

## solve_partial_differential_equation_by_similarity_reduction

<a id="entry-presentation_python_differential_equations_capability_contexts_solve_partial_differential_equation_by_similarity_reduction_api_partial_differential_equations_session_solve_partial_differential_equation_by_similarity_reduction"></a>
<a id="placement-placement.python.python_module.module_solve_partial_differential_equation_by_similarity_reduction.f01d7b81443a"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
solve_partial_differential_equation_by_similarity_reduction(
    problem: partial_differential_equation_problem,
    generator: partial_differential_equation_point_symmetry_generator,
) -> partial_differential_equation_similarity_solution
```

Reduce a two-variable PDE by a point symmetry, solve the reduction, and lift its family.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_solve_partial_differential_equation_by_similarity_reduction.e866455641db"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.solve_partial_differential_equation_by_similarity_reduction</code></p>

```python signature
solve_partial_differential_equation_by_similarity_reduction(
    problem: partial_differential_equation_problem,
    generator: partial_differential_equation_point_symmetry_generator,
) -> partial_differential_equation_similarity_solution
```

</details>

## solve_partial_differential_equation_request

<a id="entry-presentation_python_differential_equations_capability_contexts_solve_partial_differential_equation_request_api_partial_differential_equations_session_solve_partial_differential_equation_request"></a>
<a id="placement-placement.python.python_module.module_solve_partial_differential_equation_request.cc18fc38960b"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
solve_partial_differential_equation_request(
    problem: partial_differential_equation_problem,
    scope: str,
    geometric_domain: str = "whole_space",
    regularity: str = "unrestricted",
    solution_class: str = "unrestricted",
    method: str = "automatic",
) -> partial_differential_equation_solve_result
```

Solve a PDE request whose scope, geometry, regularity, and solution class are part of the question.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_solve_partial_differential_equation_request.0c3a5e7d1260"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.solve_partial_differential_equation_request</code></p>

```python signature
solve_partial_differential_equation_request(
    problem: partial_differential_equation_problem,
    scope: str,
    geometric_domain: str = "whole_space",
    regularity: str = "unrestricted",
    solution_class: str = "unrestricted",
    method: str = "automatic",
) -> partial_differential_equation_solve_result
```

</details>

## solve_polynomial_system

<a id="entry-presentation_python_solving_capability_equations_solve_polynomial_system_api_solving_session_solve_polynomial_system"></a>
<a id="placement-placement.python.python_module.module_solve_polynomial_system.2a04d647f98e"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
solve_polynomial_system(
    equations: Iterable[ExpressionLike],
    variables: Iterable[VariableLike],
) -> Any
```

Solve a multivariate polynomial system `{ equation_i = 0 }` for the named unknowns. Every other free symbol is a parameter carried symbolically in the coefficient ring. The solver is sound and honestly incomplete: every returned tuple has been back-substituted into every equation and reduced to a provable zero, and the verdict never overstates completeness.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_solve_polynomial_system.2f65455835ec"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.solve_polynomial_system</code></p>

```python signature
solve_polynomial_system(
    equations: Iterable[ExpressionLike],
    variables: Iterable[VariableLike],
) -> Any
```

</details>

## solve_semialgebraic

<a id="entry-presentation_python_solving_capability_equations_solve_semialgebraic_api_logic_session_solve_semialgebraic"></a>
<a id="placement-placement.python.python_module.module_solve_semialgebraic.150db5c326a7"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
solve_semialgebraic(
    matrix: ExpressionLike,
    variables: Iterable[VariableLike],
) -> Expression
```

`context.solve_semialgebraic(matrix, variables: list[VariableLike])`

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_solve_semialgebraic.6453846cb1b9"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.solve_semialgebraic</code></p>

```python signature
solve_semialgebraic(
    matrix: ExpressionLike,
    variables: Iterable[VariableLike],
) -> Expression
```

</details>

## solveset

<a id="entry-presentation_python_solving_capability_equations_solveset_api_solving_session_solveset"></a>
<a id="placement-placement.python.python_module.module_solveset.d687000dc23c"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
solveset(
    input_expression: ExpressionLike,
    variable: VariableLike,
    domain: Optional[ExpressionLike] = None,
) -> Expression
```

Solution set of the equation or inequality: a finite set, interval, union, image set (periodic families), or condition set (the honest "unsolved" residue).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_solveset.18f6f50c216e"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.solveset</code></p>

```python signature
solveset(
    input_expression: ExpressionLike,
    variable: VariableLike,
    domain: Optional[ExpressionLike] = None,
) -> Expression
```

</details>

## solveset

<a id="entry-presentation_python_solving_capability_equations_solveset_api_expression_operations_expression_solveset"></a>
<a id="placement-placement.python.python_class.expression_solveset.e204d9960687"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
solveset(
    variable: VariableLike,
    domain: Optional[ExpressionLike] = None,
) -> Expression
```

Solution set of the equation or inequality: a finite set, interval, union, image set (periodic families), or condition set (the honest "unsolved" residue).

## solveset_in_domain

<a id="entry-presentation_python_solving_capability_equations_solveset_in_domain_api_solving_session_solveset_in_domain"></a>
<a id="placement-placement.python.python_module.module_solveset_in_domain.5dc47cc84338"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
solveset_in_domain(
    equation: ExpressionLike,
    variable: VariableLike,
    domain: ExpressionLike,
) -> Expression
```

`solveset` restricted to an explicit domain set (e.g. `real_line()`, `integer_set()`, an interval).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_solveset_in_domain.8f623844d249"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.solveset_in_domain</code></p>

```python signature
solveset_in_domain(
    equation: ExpressionLike,
    variable: VariableLike,
    domain: ExpressionLike,
) -> Expression
```

</details>

## unconstrained_critical_points

<a id="entry-presentation_python_optimization_capability_equations_unconstrained_critical_points_api_solving_session_unconstrained_critical_points"></a>
<a id="placement-placement.python.python_module.module_unconstrained_critical_points.031d7a3baf3c"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
unconstrained_critical_points(
    objective: ExpressionLike,
    variables: Iterable[VariableLike],
) -> Any
```

The critical points of `objective` as the solutions of \(\nabla f = 0\), each classified by the definiteness of the Hessian (Sylvester's criterion on the leading principal minors).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_unconstrained_critical_points.ea2542856ae2"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.unconstrained_critical_points</code></p>

```python signature
unconstrained_critical_points(
    objective: ExpressionLike,
    variables: Iterable[VariableLike],
) -> Any
```

</details>

## verdict

<a id="entry-presentation_python_solving_capability_calculus_verdict_api_results_definiteintegrationresult_verdict"></a>
<a id="placement-placement.python.python_class.definiteintegrationresult_verdict.be0b21cf7d5e"></a>
<p class="symi-entry-owner">DefiniteIntegrationResult property</p>

```python signature
verdict: str
```

Whether the request was evaluated, proved divergent, or declined.

## verdict

<a id="entry-presentation_python_solving_capability_equations_verdict_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_verdict"></a>
<a id="placement-placement.python.python_class.ordinarydifferentialequationsolveresult_verdict.592a8fe7421b"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSolveResult property</p>

```python signature
verdict: str
```

Whether the request was solved or declined.

## verdict

<a id="entry-presentation_python_solving_capability_equations_verdict_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_verdict"></a>
<a id="placement-placement.python.python_class.ordinarydifferentialequationsystemsolveresult_verdict.ee565ebcb9d3"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSystemSolveResult property</p>

```python signature
verdict: str
```

Whether the system was solved or declined.

## verdict

<a id="entry-presentation_python_solving_capability_equations_verdict_api_ordinary_differential_equations_ordinarydifferentialequationsystemverificationreport_verdict"></a>
<a id="placement-placement.python.python_class.ordinarydifferentialequationsystemverificationreport_verdict.c3b045f19390"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSystemVerificationReport property</p>

```python signature
verdict: str
```

The decision on every equation residual and every datum of the supplied assignment.

## verdict

<a id="entry-presentation_python_solving_capability_equations_verdict_api_partial_differential_equations_partialdifferentialequationsecondorderclassification_verdict"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsecondorderclassification_verdict.b16642fd9fa2"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSecondOrderClassification property</p>

```python signature
verdict: str
```

Whether one type, a complete case table, or neither was proved.

## verdict

<a id="entry-presentation_python_solving_capability_equations_verdict_api_partial_differential_equations_partialdifferentialequationsolveresult_verdict"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsolveresult_verdict.a23066465fd2"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolveResult property</p>

```python signature
verdict: str
```

Whether the dispatcher solved or honestly declined.

## verdict

<a id="entry-presentation_python_solving_capability_equations_verdict_api_partial_differential_equations_partialdifferentialequationtransformationverificationreport_verdict"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationtransformationverificationreport_verdict.9f9cab5a462b"></a>
<p class="symi-entry-owner">PartialDifferentialEquationTransformationVerificationReport property</p>

```python signature
verdict: str
```

The aggregate exact verification verdict.

## verdict

<a id="entry-presentation_python_solving_capability_equations_verdict_api_partial_differential_equations_partialdifferentialequationverificationreport_verdict"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationverificationreport_verdict.92b062023cbc"></a>
<p class="symi-entry-owner">PartialDifferentialEquationVerificationReport property</p>

```python signature
verdict: str
```

The aggregate exact verification verdict.

## verdict

<a id="entry-presentation_python_solving_capability_equations_verdict_api_partial_differential_equations_partialdifferentialequationverificationresidual_verdict"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationverificationresidual_verdict.24f8a5481097"></a>
<p class="symi-entry-owner">PartialDifferentialEquationVerificationResidual property</p>

```python signature
verdict: str
```

The exact verdict proved about this one residual.

## verify_ordinary_differential_equation_system_solution

<a id="entry-presentation_python_differential_equations_capability_contexts_verify_ordinary_differential_equation_system_solution_api_ordinary_differential_equations_session_verify_ordinary_differential_equation_system_solution"></a>
<a id="placement-placement.python.python_module.module_verify_ordinary_differential_equation_system_solution.e89c19aef2c2"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
verify_ordinary_differential_equation_system_solution(
    equations: expression_collection_input,
    dependent_function_calls: expression_collection_input,
    independent_variable: variable_input,
    components: expression_collection_input,
    generated_constants: expression_collection_input,
    condition_residuals: Optional[expression_collection_input] = None,
) -> ordinary_differential_equation_system_verification_report
```

Verify a supplied assignment for a system of ODEs without solving it again.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_verify_ordinary_differential_equation_system_solution.8454d965cf59"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.verify_ordinary_differential_equation_system_solution</code></p>

```python signature
verify_ordinary_differential_equation_system_solution(
    equations: expression_collection_input,
    dependent_function_calls: expression_collection_input,
    independent_variable: variable_input,
    components: expression_collection_input,
    generated_constants: expression_collection_input,
    condition_residuals: Optional[expression_collection_input] = None,
) -> ordinary_differential_equation_system_verification_report
```

</details>

## cancel

<a id="entry-presentation_python_simplification_general_capability_expression_transformations_cancel_api_session_cancel"></a>
<a id="placement-placement.python.python_module.module_cancel.0b37541fa3f5"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
cancel(input_expression: ExpressionLike) -> Expression
```

Rational normal form: write as a single fraction and divide out the polynomial GCD of numerator and denominator.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_cancel.3f7f3f6e0396"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.cancel</code></p>

```python signature
cancel(input_expression: ExpressionLike) -> Expression
```

</details>

## cancel

<a id="entry-presentation_python_simplification_general_capability_expression_transformations_cancel_api_expression_cancel"></a>
<a id="placement-placement.python.python_class.expression_cancel.2f5d9901ac77"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
cancel() -> Expression
```

Rational normal form: write as a single fraction and divide out the polynomial GCD of numerator and denominator.

## collect

<a id="entry-presentation_python_algebraic_transforms_capability_expression_transformations_collect_api_algebra_session_collect"></a>
<a id="placement-placement.python.python_module.module_collect.e27d1ac4f0a7"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
collect(
    input_expression: ExpressionLike,
    generator: ExpressionLike,
) -> Expression
```

Regroup the additive terms of `expression` by the numeric (integer or rational) powers of a single `generator`, which may be a variable or an arbitrary subexpression, writing the result as a sum of `generator^k coefficient(k)` terms without expanding the coefficients. For example, collecting `ax^2 + bx^2 + ax - bx + c` by `x` yields `x^2(a + b) + x(a - b) + c`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_collect.11eea93b82f8"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.collect</code></p>

```python signature
collect(
    input_expression: ExpressionLike,
    generator: ExpressionLike,
) -> Expression
```

</details>

## collect

<a id="entry-presentation_python_algebraic_transforms_capability_expression_transformations_collect_api_expression_operations_expression_collect"></a>
<a id="placement-placement.python.python_class.expression_collect.fc2b21333cc6"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
collect(generator: ExpressionLike) -> Expression
```

Regroup the additive terms of `expression` by the numeric (integer or rational) powers of a single `generator`, which may be a variable or an arbitrary subexpression, writing the result as a sum of `generator^k coefficient(k)` terms without expanding the coefficients. For example, collecting `ax^2 + bx^2 + ax - bx + c` by `x` yields `x^2(a + b) + x(a - b) + c`.

## collect_radicals

<a id="entry-presentation_python_algebraic_transforms_capability_expression_transformations_collect_radicals_api_algebra_session_collect_radicals"></a>
<a id="placement-placement.python.python_module.module_collect_radicals.2166b63cfde2"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
collect_radicals(input_expression: ExpressionLike) -> Expression
```

Collect like numeric radical kernels in a top-level sum. For example, `a*sqrt(2) + b*sqrt(2) + 3` becomes `(a + b)*sqrt(2) + 3`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_collect_radicals.b801115ab1d4"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.collect_radicals</code></p>

```python signature
collect_radicals(input_expression: ExpressionLike) -> Expression
```

</details>

## collect_radicals

<a id="entry-presentation_python_algebraic_transforms_capability_expression_transformations_collect_radicals_api_expression_operations_expression_collect_radicals"></a>
<a id="placement-placement.python.python_class.expression_collect_radicals.a98951be6352"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
collect_radicals() -> Expression
```

Collect like numeric radical kernels in a top-level sum. For example, `a*sqrt(2) + b*sqrt(2) + 3` becomes `(a + b)*sqrt(2) + 3`.

## combine_logarithm

<a id="entry-presentation_python_trigonometric_complex_rewrites_capability_expression_transformations_combine_logarithm_api_algebra_session_combine_logarithm"></a>
<a id="placement-placement.python.python_module.module_combine_logarithm.3159ff3b58d2"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
combine_logarithm(input_expression: ExpressionLike) -> Expression
```

\(\log a + \log b \rightarrow \log(a b)\) and \(n\log a \rightarrow \log(a^n)\) when the transformation preserves the expression's domain.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_combine_logarithm.fce01721c35a"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.combine_logarithm</code></p>

```python signature
combine_logarithm(input_expression: ExpressionLike) -> Expression
```

</details>

## combine_logarithm

<a id="entry-presentation_python_trigonometric_complex_rewrites_capability_expression_transformations_combine_logarithm_api_expression_operations_expression_combine_logarithm"></a>
<a id="placement-placement.python.python_class.expression_combine_logarithm.0d0e22017360"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
combine_logarithm() -> Expression
```

\(\log a + \log b \rightarrow \log(a b)\) and \(n\log a \rightarrow \log(a^n)\) when the transformation preserves the expression's domain.

## combine_powers

<a id="entry-presentation_python_trigonometric_complex_rewrites_capability_expression_transformations_combine_powers_api_algebra_session_combine_powers"></a>
<a id="placement-placement.python.python_module.module_combine_powers.83da2ec24bad"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
combine_powers(input_expression: ExpressionLike) -> Expression
```

Combine same-exponent powers into a single power of the merged base (`x^a y^a -> (xy)^a`) at every product node where the rewrite is provably valid. This identity is false across the branch cut of the complex logarithm — at `x = y = -1` and `a = 1/2` the left side is `ii = -1` while the right side is `sqrt(1) = 1` — so it fires only when the exponent is provably an integer or when every combined base is provably positive. Positivity of the merged base is not enough: `(-2)^x (-3)^x` is left alone, because at `x = 1/2` combining it to `6^x` would flip the sign of the result. Positive numeric-literal bases need no assumptions at all, so `2^x 3^x` becomes `6^x` and `(1/2)^x 3^x` becomes `(3/2)^x`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_combine_powers.3d08b0eb70f3"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.combine_powers</code></p>

```python signature
combine_powers(input_expression: ExpressionLike) -> Expression
```

</details>

## combine_powers

<a id="entry-presentation_python_trigonometric_complex_rewrites_capability_expression_transformations_combine_powers_api_expression_operations_expression_combine_powers"></a>
<a id="placement-placement.python.python_class.expression_combine_powers.6a279c49f326"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
combine_powers() -> Expression
```

Combine same-exponent powers into a single power of the merged base (`x^a y^a -> (xy)^a`) at every product node where the rewrite is provably valid. This identity is false across the branch cut of the complex logarithm — at `x = y = -1` and `a = 1/2` the left side is `ii = -1` while the right side is `sqrt(1) = 1` — so it fires only when the exponent is provably an integer or when every combined base is provably positive. Positivity of the merged base is not enough: `(-2)^x (-3)^x` is left alone, because at `x = 1/2` combining it to `6^x` would flip the sign of the result. Positive numeric-literal bases need no assumptions at all, so `2^x 3^x` becomes `6^x` and `(1/2)^x 3^x` becomes `(3/2)^x`.

## combine_trigonometric

<a id="entry-presentation_python_trigonometric_complex_rewrites_capability_expression_transformations_combine_trigonometric_api_session_combine_trigonometric"></a>
<a id="placement-placement.python.python_module.module_combine_trigonometric.ba50be65caaa"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
combine_trigonometric(input_expression: ExpressionLike) -> Expression
```

Inverse direction of `expand_trigonometric`: product-to-sum and angle-recombination rules.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_combine_trigonometric.528c0bb60743"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.combine_trigonometric</code></p>

```python signature
combine_trigonometric(input_expression: ExpressionLike) -> Expression
```

</details>

## combine_trigonometric

<a id="entry-presentation_python_trigonometric_complex_rewrites_capability_expression_transformations_combine_trigonometric_api_expression_combine_trigonometric"></a>
<a id="placement-placement.python.python_class.expression_combine_trigonometric.009ca5b2de75"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
combine_trigonometric() -> Expression
```

Inverse direction of `expand_trigonometric`: product-to-sum and angle-recombination rules.

## complete_the_square

<a id="entry-presentation_python_algebraic_transforms_capability_expression_transformations_complete_the_square_api_algebra_session_complete_the_square"></a>
<a id="placement-placement.python.python_module.module_complete_the_square.0af89b745f9f"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
complete_the_square(
    input_expression: ExpressionLike,
    variable: ExpressionLike,
) -> Expression
```

Rewrite an expression that is quadratic in `variable` into the exact vertex form `a*(variable - h)^2 + k`, with `h = -b/(2*a)` and `k = c - b^2/(4*a)` built from the degree-2, degree-1 and degree-0 coefficients `a`, `b`, `c` of the expression collected in `variable`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_complete_the_square.0b69c1ad269a"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.complete_the_square</code></p>

```python signature
complete_the_square(
    input_expression: ExpressionLike,
    variable: ExpressionLike,
) -> Expression
```

</details>

## complete_the_square

<a id="entry-presentation_python_algebraic_transforms_capability_expression_transformations_complete_the_square_api_expression_operations_expression_complete_the_square"></a>
<a id="placement-placement.python.python_class.expression_complete_the_square.db1de38470f1"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
complete_the_square(variable: ExpressionLike) -> Expression
```

Rewrite an expression that is quadratic in `variable` into the exact vertex form `a*(variable - h)^2 + k`, with `h = -b/(2*a)` and `k = c - b^2/(4*a)` built from the degree-2, degree-1 and degree-0 coefficients `a`, `b`, `c` of the expression collected in `variable`.

## denest_powers

<a id="entry-presentation_python_trigonometric_complex_rewrites_capability_expression_transformations_denest_powers_api_algebra_session_denest_powers"></a>
<a id="placement-placement.python.python_module.module_denest_powers.0cb7e0cca77f"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
denest_powers(input_expression: ExpressionLike) -> Expression
```

Flatten a power of a power into a single power (`(x^a)^b -> x^(a*b)`) at every power node whose outer exponent is provably an integer, which is valid on the principal branch because an integer power never routes through `log`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_denest_powers.ea466f1a68ac"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.denest_powers</code></p>

```python signature
denest_powers(input_expression: ExpressionLike) -> Expression
```

</details>

## denest_powers

<a id="entry-presentation_python_trigonometric_complex_rewrites_capability_expression_transformations_denest_powers_api_expression_operations_expression_denest_powers"></a>
<a id="placement-placement.python.python_class.expression_denest_powers.74ee941efff8"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
denest_powers() -> Expression
```

Flatten a power of a power into a single power (`(x^a)^b -> x^(a*b)`) at every power node whose outer exponent is provably an integer, which is valid on the principal branch because an integer power never routes through `log`.

## denest_radicals

<a id="entry-presentation_python_algebraic_transforms_capability_expression_transformations_denest_radicals_api_algebra_session_denest_radicals"></a>
<a id="placement-placement.python.python_module.module_denest_radicals.44c973e4db68"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
denest_radicals(input_expression: ExpressionLike) -> Expression
```

Denest the bounded depth-two real-radical subset bottom-up: rational quadratic surds, up to three inner quadratic surds, and `cbrt(a + b*sqrt(c))` when its exact resolvent has a rational root. For example, `sqrt(3 + 2*sqrt(2))` becomes `1 + sqrt(2)` and `cbrt(2 + sqrt(5))` becomes `(1 + sqrt(5))/2`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_denest_radicals.dae89df7c52f"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.denest_radicals</code></p>

```python signature
denest_radicals(input_expression: ExpressionLike) -> Expression
```

</details>

## denest_radicals

<a id="entry-presentation_python_algebraic_transforms_capability_expression_transformations_denest_radicals_api_expression_operations_expression_denest_radicals"></a>
<a id="placement-placement.python.python_class.expression_denest_radicals.c120755a651c"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
denest_radicals() -> Expression
```

Denest the bounded depth-two real-radical subset bottom-up: rational quadratic surds, up to three inner quadratic surds, and `cbrt(a + b*sqrt(c))` when its exact resolvent has a rational root. For example, `sqrt(3 + 2*sqrt(2))` becomes `1 + sqrt(2)` and `cbrt(2 + sqrt(5))` becomes `(1 + sqrt(5))/2`.

## denominator

<a id="entry-presentation_python_expressions_capability_expression_transformations_denominator_api_session_denominator"></a>
<a id="placement-placement.python.python_module.module_denominator.71e7ade8eb22"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
denominator(input_expression: ExpressionLike) -> Expression
```

Returns the structural denominator from `numerator_denominator`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_denominator.22b00f2edc7d"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.denominator</code></p>

```python signature
denominator(input_expression: ExpressionLike) -> Expression
```

</details>

## denominator

<a id="entry-presentation_python_expressions_capability_expression_transformations_denominator_api_expression_denominator"></a>
<a id="placement-placement.python.python_class.expression_denominator.a0ef83627ae0"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
denominator() -> Expression
```

Returns the structural denominator from `numerator_denominator`.

## duplicate

<a id="entry-presentation_python_expressions_capability_expression_transformations_duplicate_api_expression_duplicate"></a>
<a id="placement-placement.python.python_class.expression_duplicate.cce507a6c8ba"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
duplicate() -> Expression
```

An independent handle to the same underlying expression. The recommended JavaScript facade duplicates values before passing them through ownership-transferring raw WASM arrays, so ordinary facade calls are non-destructive. Callers using `facade.raw` directly must still duplicate a handle they intend to retain. Python arguments are borrowed.

## equals

<a id="entry-presentation_python_expressions_capability_expression_transformations_equals_api_expression_operations_expression_equals"></a>
<a id="placement-placement.python.python_class.expression_equals.533a8641b35b"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
equals(other: ExpressionLike) -> bool
```

Mathematical equality test: \(\operatorname{simplify}(\operatorname{self} - \operatorname{other}) = 0\).

## evaluate_to_complex_inexact

<a id="entry-presentation_python_expressions_capability_expression_transformations_evaluate_to_complex_inexact_api_expression_operations_expression_evaluate_to_complex_inexact"></a>
<a id="placement-placement.python.python_class.expression_evaluate_to_complex_inexact.b1200e883600"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
evaluate_to_complex_inexact() -> tuple[float, float]
```

Complex evaluation at the default working precision under the documented principal-value branch cuts, as (real, imaginary).

## evaluate_to_complex_inexact_at_precision

<a id="entry-presentation_python_expressions_capability_expression_transformations_evaluate_to_complex_inexact_at_precision_api_expression_operations_expression_evaluate_to_complex_inexact_at_precision"></a>
<a id="placement-placement.python.python_class.expression_evaluate_to_complex_inexact_at_precision.8080ec68eb86"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
evaluate_to_complex_inexact_at_precision(precision_bits: int) -> tuple[float, float]
```

Same with an explicit working precision in bits.

## evaluate_to_float

<a id="entry-presentation_python_expressions_capability_expression_transformations_evaluate_to_float_api_expression_operations_expression_evaluate_to_float"></a>
<a id="placement-placement.python.python_class.expression_evaluate_to_float.418b3101a583"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
evaluate_to_float() -> float
```

Real double-precision value; raises when the expression has no real numeric value (free symbols, complex value, pole).

## expand

<a id="entry-presentation_python_algebraic_transforms_capability_expression_transformations_expand_api_session_expand"></a>
<a id="placement-placement.python.python_module.module_expand.bf48fd44714c"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
expand(input_expression: ExpressionLike) -> Expression
```

Expand products, integer powers, and supported algebraic forms.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_expand.585710e373a6"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.expand</code></p>

```python signature
expand(input_expression: ExpressionLike) -> Expression
```

</details>

## expand

<a id="entry-presentation_python_algebraic_transforms_capability_expression_transformations_expand_api_expression_expand"></a>
<a id="placement-placement.python.python_class.expression_expand.208ce69fd96e"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
expand() -> Expression
```

Expand products, integer powers, and supported algebraic forms.

## expand_complex

<a id="entry-presentation_python_trigonometric_complex_rewrites_capability_expression_transformations_expand_complex_api_algebra_session_expand_complex"></a>
<a id="placement-placement.python.python_module.module_expand_complex.48934d5e4596"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
expand_complex(input_expression: ExpressionLike) -> Expression
```

Decompose an expression exactly as `real_part(expression) + i*imaginary_part(expression)`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_expand_complex.5cce2f91f5a4"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.expand_complex</code></p>

```python signature
expand_complex(input_expression: ExpressionLike) -> Expression
```

</details>

## expand_complex

<a id="entry-presentation_python_trigonometric_complex_rewrites_capability_expression_transformations_expand_complex_api_expression_operations_expression_expand_complex"></a>
<a id="placement-placement.python.python_class.expression_expand_complex.9dc96a72c703"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
expand_complex() -> Expression
```

Decompose an expression exactly as `real_part(expression) + i*imaginary_part(expression)`.

## expand_logarithm

<a id="entry-presentation_python_trigonometric_complex_rewrites_capability_expression_transformations_expand_logarithm_api_algebra_session_expand_logarithm"></a>
<a id="placement-placement.python.python_module.module_expand_logarithm.bb1c9442f963"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
expand_logarithm(input_expression: ExpressionLike) -> Expression
```

\(\log(a b) \rightarrow \log a + \log b\) and \(\log(a^n) \rightarrow n\log a\), applied only where the operands are provably positive. Operands of unknown sign pass through unchanged.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_expand_logarithm.1266a07c68f1"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.expand_logarithm</code></p>

```python signature
expand_logarithm(input_expression: ExpressionLike) -> Expression
```

</details>

## expand_logarithm

<a id="entry-presentation_python_trigonometric_complex_rewrites_capability_expression_transformations_expand_logarithm_api_expression_operations_expression_expand_logarithm"></a>
<a id="placement-placement.python.python_class.expression_expand_logarithm.5d63a3ff43d6"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
expand_logarithm() -> Expression
```

\(\log(a b) \rightarrow \log a + \log b\) and \(\log(a^n) \rightarrow n\log a\), applied only where the operands are provably positive. Operands of unknown sign pass through unchanged.

## expand_power_base

<a id="entry-presentation_python_trigonometric_complex_rewrites_capability_expression_transformations_expand_power_base_api_algebra_session_expand_power_base"></a>
<a id="placement-placement.python.python_module.module_expand_power_base.5ba9f9674a72"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
expand_power_base(input_expression: ExpressionLike) -> Expression
```

Split a power whose base is structurally a product into a product of powers (`(xy)^a -> x^a y^a`) at every power node whose exponent is provably an integer — the only unconditionally valid gate for this direction, since the split introduces `x^a` and `y^a` individually and each needs its own base off the cut. With `n` declared an integer, `(xy)^n` becomes `x^n y^n`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_expand_power_base.10c08191ec05"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.expand_power_base</code></p>

```python signature
expand_power_base(input_expression: ExpressionLike) -> Expression
```

</details>

## expand_power_base

<a id="entry-presentation_python_trigonometric_complex_rewrites_capability_expression_transformations_expand_power_base_api_expression_operations_expression_expand_power_base"></a>
<a id="placement-placement.python.python_class.expression_expand_power_base.897bf3a2aa16"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
expand_power_base() -> Expression
```

Split a power whose base is structurally a product into a product of powers (`(xy)^a -> x^a y^a`) at every power node whose exponent is provably an integer — the only unconditionally valid gate for this direction, since the split introduces `x^a` and `y^a` individually and each needs its own base off the cut. With `n` declared an integer, `(xy)^n` becomes `x^n y^n`.

## expand_trigonometric

<a id="entry-presentation_python_trigonometric_complex_rewrites_capability_expression_transformations_expand_trigonometric_api_session_expand_trigonometric"></a>
<a id="placement-placement.python.python_module.module_expand_trigonometric.78c99da95053"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
expand_trigonometric(input_expression: ExpressionLike) -> Expression
```

Expand trig/hyperbolic functions of sums and multiple angles.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_expand_trigonometric.5e3ea8b7e8c2"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.expand_trigonometric</code></p>

```python signature
expand_trigonometric(input_expression: ExpressionLike) -> Expression
```

</details>

## expand_trigonometric

<a id="entry-presentation_python_trigonometric_complex_rewrites_capability_expression_transformations_expand_trigonometric_api_expression_expand_trigonometric"></a>
<a id="placement-placement.python.python_class.expression_expand_trigonometric.7f2d954796d3"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
expand_trigonometric() -> Expression
```

Expand trig/hyperbolic functions of sums and multiple angles.

## expression_type

<a id="entry-presentation_python_expressions_capability_expression_transformations_expression_type_api_expression_operations_expression_expression_type"></a>
<a id="placement-placement.python.python_class.expression_expression_type.4b37960ff6b7"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
expression_type() -> str
```

Top-level node kind: one of `integer`, `rational`, `symbol`, `constant`, `sum`, `product`, `power`, `factorial`, `function_call`, `derivative`, `integral`, `summation`, `laplace_transform`, `inverse_laplace_transform`, `fourier_transform`, `inverse_fourier_transform`, `piecewise`, `ordinary_differential_equation`, `recurrence_equation`, `interval`, `finite_set`, `set_union`, `set_intersection`, `set_complement`, `image_set`, `condition_set`.

## factor

<a id="entry-presentation_python_algebraic_transforms_capability_expression_transformations_factor_api_session_factor"></a>
<a id="placement-placement.python.python_module.module_factor.8c065906aae5"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
factor(
    input_expression: ExpressionLike,
    gaussian: bool = False,
) -> Expression
```

Polynomial factorization over the rationals (full multivariate).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_factor.46063153da4a"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.factor</code></p>

```python signature
factor(
    input_expression: ExpressionLike,
    gaussian: bool = False,
) -> Expression
```

</details>

## factor

<a id="entry-presentation_python_algebraic_transforms_capability_expression_transformations_factor_api_expression_factor"></a>
<a id="placement-placement.python.python_class.expression_factor.a7b06dfc4e7c"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
factor(gaussian: bool = False) -> Expression
```

Polynomial factorization over the rationals (full multivariate).

## factor_common_terms

<a id="entry-presentation_python_algebraic_transforms_capability_expression_transformations_factor_common_terms_api_algebra_session_factor_common_terms"></a>
<a id="placement-placement.python.python_module.module_factor_common_terms.7a3852d245ce"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
factor_common_terms(input_expression: ExpressionLike) -> Expression
```

Pull the greatest common monomial and exact rational content out of the terms of a general — not necessarily polynomial — sum, producing a single product of a common factor and a reduced sum, without invoking full polynomial factorization. For example, `6*x*y + 9*x^2*sin(z)` becomes `3*x*(2*y + 3*x*sin(z))`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_factor_common_terms.0ebab65aba2b"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.factor_common_terms</code></p>

```python signature
factor_common_terms(input_expression: ExpressionLike) -> Expression
```

</details>

## factor_common_terms

<a id="entry-presentation_python_algebraic_transforms_capability_expression_transformations_factor_common_terms_api_expression_operations_expression_factor_common_terms"></a>
<a id="placement-placement.python.python_class.expression_factor_common_terms.4d5c920b9d2c"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
factor_common_terms() -> Expression
```

Pull the greatest common monomial and exact rational content out of the terms of a general — not necessarily polynomial — sum, producing a single product of a common factor and a reduced sum, without invoking full polynomial factorization. For example, `6*x*y + 9*x^2*sin(z)` becomes `3*x*(2*y + 3*x*sin(z))`.

## free_variables

<a id="entry-presentation_python_expressions_capability_expression_transformations_free_variables_api_expression_free_variables"></a>
<a id="placement-placement.python.python_class.expression_free_variables.3120c4c59801"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
free_variables() -> list[str]
```

Sorted names of the free symbols. Bound binders (integration variables, image-set parameters) are excluded; the constants pi/e are not symbols.

## image_set_domain

<a id="entry-presentation_python_expressions_capability_expression_transformations_image_set_domain_api_expression_image_set_domain"></a>
<a id="placement-placement.python.python_class.expression_image_set_domain.f5bf94922f92"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
image_set_domain() -> Expression
```

The domain an `image_set` expression maps over.

## image_set_lambda_expression

<a id="entry-presentation_python_expressions_capability_expression_transformations_image_set_lambda_expression_api_expression_image_set_lambda_expression"></a>
<a id="placement-placement.python.python_class.expression_image_set_lambda_expression.210d2d46c870"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
image_set_lambda_expression() -> Expression
```

The body an `image_set` expression applies to its bound variable.

## image_set_variable

<a id="entry-presentation_python_expressions_capability_expression_transformations_image_set_variable_api_expression_image_set_variable"></a>
<a id="placement-placement.python.python_class.expression_image_set_variable.a2bc136da797"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
image_set_variable() -> str
```

The name of the variable an `image_set` expression binds.

## imaginary_part

<a id="entry-presentation_python_trigonometric_complex_rewrites_capability_expression_transformations_imaginary_part_api_session_imaginary_part"></a>
<a id="placement-placement.python.python_module.module_imaginary_part.87cf9d85d535"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
imaginary_part(input_expression: ExpressionLike) -> Expression
```

Return the exact imaginary component of an expression. For example, if `y` is declared real, `imaginary_part(exp(i*y))` is `sin(y)`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_imaginary_part.3e12080db6bd"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.imaginary_part</code></p>

```python signature
imaginary_part(input_expression: ExpressionLike) -> Expression
```

</details>

## imaginary_part

<a id="entry-presentation_python_trigonometric_complex_rewrites_capability_expression_transformations_imaginary_part_api_expression_imaginary_part"></a>
<a id="placement-placement.python.python_class.expression_imaginary_part.3bfb3098c9bd"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
imaginary_part() -> Expression
```

Return the exact imaginary component of an expression. For example, if `y` is declared real, `imaginary_part(exp(i*y))` is `sin(y)`.

## integral_integrand

<a id="entry-presentation_python_expressions_capability_expression_transformations_integral_integrand_api_expression_integral_integrand"></a>
<a id="placement-placement.python.python_class.expression_integral_integrand.6f4db735f08b"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
integral_integrand() -> Expression
```

The integrand of an unevaluated `integral` expression.

## integral_lower_bound

<a id="entry-presentation_python_expressions_capability_expression_transformations_integral_lower_bound_api_expression_integral_lower_bound"></a>
<a id="placement-placement.python.python_class.expression_integral_lower_bound.e12ad46f3453"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
integral_lower_bound() -> Optional[Expression]
```

`None` for indefinite integrals.

## integral_upper_bound

<a id="entry-presentation_python_expressions_capability_expression_transformations_integral_upper_bound_api_expression_integral_upper_bound"></a>
<a id="placement-placement.python.python_class.expression_integral_upper_bound.f2d897362ebe"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
integral_upper_bound() -> Optional[Expression]
```

The upper bound of an unevaluated `integral`, or `None` when it is indefinite.

## integral_variable

<a id="entry-presentation_python_expressions_capability_expression_transformations_integral_variable_api_expression_integral_variable"></a>
<a id="placement-placement.python.python_class.expression_integral_variable.4900f1a20525"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
integral_variable() -> str
```

The name of the variable an unevaluated `integral` integrates over.

## interval_lower

<a id="entry-presentation_python_expressions_capability_expression_transformations_interval_lower_api_expression_interval_lower"></a>
<a id="placement-placement.python.python_class.expression_interval_lower.2a8531122802"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
interval_lower() -> Expression
```

Lower endpoint of an interval node; raises on other shapes.

## interval_upper

<a id="entry-presentation_python_expressions_capability_expression_transformations_interval_upper_api_expression_interval_upper"></a>
<a id="placement-placement.python.python_class.expression_interval_upper.f9ce0cc9c300"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
interval_upper() -> Expression
```

The upper endpoint of an `interval` expression.

## is_defined

<a id="entry-presentation_python_expressions_capability_expression_transformations_is_defined_api_expression_is_defined"></a>
<a id="placement-placement.python.python_class.expression_is_defined.7f503b8898c6"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_defined() -> Optional[bool]
```

Whether the expression is known to denote one scalar value at the active point.

## is_equality

<a id="entry-presentation_python_expressions_capability_expression_transformations_is_equality_api_expression_is_equality"></a>
<a id="placement-placement.python.python_class.expression_is_equality.e989bcf4fd97"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_equality() -> bool
```

True for `equal(a, b)` relation nodes.

## is_equality

<a id="entry-presentation_python_expressions_capability_expression_transformations_is_equality_api_matrix_operations_matrix_is_equality"></a>
<a id="placement-placement.python.python_class.matrix_is_equality.fef51ea43875"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
is_equality() -> bool
```

Always false: a matrix is never an `equal` relation node.

## is_finite

<a id="entry-presentation_python_expressions_capability_expression_transformations_is_finite_api_expression_is_finite"></a>
<a id="placement-placement.python.python_class.expression_is_finite.afd2d2c8868f"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_finite() -> Optional[bool]
```

Whether the expression is known finite, or `None` when the assumptions cannot decide it.

## is_finite_set

<a id="entry-presentation_python_expressions_capability_expression_transformations_is_finite_set_api_expression_is_finite_set"></a>
<a id="placement-placement.python.python_class.expression_is_finite_set.f011174eecec"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_finite_set() -> bool
```

Whether this expression is a `finite_set`.

## is_finite_set

<a id="entry-presentation_python_expressions_capability_expression_transformations_is_finite_set_api_matrix_operations_matrix_is_finite_set"></a>
<a id="placement-placement.python.python_class.matrix_is_finite_set.7dc9734ea9f1"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
is_finite_set() -> bool
```

Always false: a matrix is never a finite set.

## is_image_set

<a id="entry-presentation_python_expressions_capability_expression_transformations_is_image_set_api_expression_is_image_set"></a>
<a id="placement-placement.python.python_class.expression_is_image_set.628821d951a2"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_image_set() -> bool
```

Whether this expression is an `image_set`.

## is_image_set

<a id="entry-presentation_python_expressions_capability_expression_transformations_is_image_set_api_matrix_operations_matrix_is_image_set"></a>
<a id="placement-placement.python.python_class.matrix_is_image_set.32d92ebd96fa"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
is_image_set() -> bool
```

Always false: a matrix is never an image set.

## is_integer

<a id="entry-presentation_python_expressions_capability_expression_transformations_is_integer_api_expression_is_integer"></a>
<a id="placement-placement.python.python_class.expression_is_integer.265875f28f3d"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_integer() -> Optional[bool]
```

Whether the expression is known to be an integer, or `None` when the assumptions cannot decide it.

## is_integral

<a id="entry-presentation_python_expressions_capability_expression_transformations_is_integral_api_expression_is_integral"></a>
<a id="placement-placement.python.python_class.expression_is_integral.d403fe18e20d"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_integral() -> bool
```

True for unevaluated integral nodes. (Distinct from the assumption query `is_integer`.)

## is_integral

<a id="entry-presentation_python_expressions_capability_expression_transformations_is_integral_api_matrix_operations_matrix_is_integral"></a>
<a id="placement-placement.python.python_class.matrix_is_integral.2aa435a6ae20"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
is_integral() -> bool
```

Always false: a matrix is never an unevaluated integral node.

## is_interval

<a id="entry-presentation_python_expressions_capability_expression_transformations_is_interval_api_expression_is_interval"></a>
<a id="placement-placement.python.python_class.expression_is_interval.16264a9ea34f"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_interval() -> bool
```

Whether this expression is an `interval`.

## is_matrix

<a id="entry-presentation_python_expressions_capability_expression_transformations_is_matrix_api_expression_is_matrix"></a>
<a id="placement-placement.python.python_class.expression_is_matrix.e2b72bb17444"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_matrix: bool
```

Always `False` on expressions and `True` on `matrix` objects, so mixed result streams can be discriminated.

## is_matrix

<a id="entry-presentation_python_expressions_capability_expression_transformations_is_matrix_api_matrix_operations_matrix_is_matrix"></a>
<a id="placement-placement.python.python_class.matrix_is_matrix.0636baf5cb88"></a>
<p class="symi-entry-owner">Matrix property</p>

```python signature
is_matrix: bool
```

Always `False` on expressions and `True` on `matrix` objects, so mixed result streams can be discriminated.

## is_negative

<a id="entry-presentation_python_expressions_capability_expression_transformations_is_negative_api_expression_is_negative"></a>
<a id="placement-placement.python.python_class.expression_is_negative.66463cf8c5bf"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_negative() -> Optional[bool]
```

Whether the expression is known to be negative, or `None` when the assumptions cannot decide it.

## is_nonnegative

<a id="entry-presentation_python_expressions_capability_expression_transformations_is_nonnegative_api_expression_is_nonnegative"></a>
<a id="placement-placement.python.python_class.expression_is_nonnegative.b1caa420f328"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_nonnegative() -> Optional[bool]
```

Answers whether the expression is nonnegative in the extended-real universe. Non-real values are refuted; unsupported real expressions remain `None`.

## is_nonzero

<a id="entry-presentation_python_expressions_capability_expression_transformations_is_nonzero_api_expression_is_nonzero"></a>
<a id="placement-placement.python.python_class.expression_is_nonzero.5023122e6b9d"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_nonzero() -> Optional[bool]
```

Whether the expression is known to be nonzero, or `None` when the assumptions cannot decide it.

## is_positive

<a id="entry-presentation_python_expressions_capability_expression_transformations_is_positive_api_expression_is_positive"></a>
<a id="placement-placement.python.python_class.expression_is_positive.fd253073651b"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_positive() -> Optional[bool]
```

Whether the expression is known to be positive, or `None` when the assumptions cannot decide it.

## is_positive

<a id="entry-presentation_python_expressions_capability_expression_transformations_is_positive_api_matrix_operations_matrix_is_positive"></a>
<a id="placement-placement.python.python_class.matrix_is_positive.cb6bef131b19"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
is_positive() -> Optional[bool]
```

Always `None`: positivity is a property of the entries, not of the matrix.

## is_rational

<a id="entry-presentation_python_expressions_capability_expression_transformations_is_rational_api_expression_is_rational"></a>
<a id="placement-placement.python.python_class.expression_is_rational.ebebd5f8b150"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_rational() -> Optional[bool]
```

Whether the expression is known to be rational, or `None` when the assumptions cannot decide it.

## is_real

<a id="entry-presentation_python_expressions_capability_expression_transformations_is_real_api_expression_is_real"></a>
<a id="placement-placement.python.python_class.expression_is_real.223807c3891d"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_real() -> Optional[bool]
```

Whether the expression is known to be real, or `None` when the assumptions cannot decide it.

## is_real

<a id="entry-presentation_python_expressions_capability_expression_transformations_is_real_api_matrix_operations_matrix_is_real"></a>
<a id="placement-placement.python.python_class.matrix_is_real.dc7c5bc1210e"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
is_real() -> Optional[bool]
```

Always `None`: realness is a property of the entries, not of the matrix.

## is_stale

<a id="entry-presentation_python_expressions_capability_expression_transformations_is_stale_api_geometry_operations_circle2d_is_stale"></a>
<a id="placement-placement.python.python_class.circle2d_is_stale.514afb52527f"></a>
<p class="symi-entry-owner">Circle2d property</p>

```python signature
is_stale: bool
```

Reports whether resetting the owning context invalidated the expression. All other operations reject a stale receiver with an actionable error.

## is_stale

<a id="entry-presentation_python_expressions_capability_expression_transformations_is_stale_api_expression_is_stale"></a>
<a id="placement-placement.python.python_class.expression_is_stale.6ece7ad947d1"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_stale: bool
```

Reports whether resetting the owning context invalidated the expression. All other operations reject a stale receiver with an actionable error.

## is_stale

<a id="entry-presentation_python_expressions_capability_expression_transformations_is_stale_api_matrix_is_stale"></a>
<a id="placement-placement.python.python_class.matrix_is_stale.35f51b1ba5a7"></a>
<p class="symi-entry-owner">Matrix property</p>

```python signature
is_stale: bool
```

Reports whether resetting the owning context invalidated the expression. All other operations reject a stale receiver with an actionable error.

## is_stale

<a id="entry-presentation_python_expressions_capability_expression_transformations_is_stale_api_point2d_is_stale"></a>
<a id="placement-placement.python.python_class.point2d_is_stale.f4483d6e8c73"></a>
<p class="symi-entry-owner">Point2d property</p>

```python signature
is_stale: bool
```

Reports whether resetting the owning context invalidated the expression. All other operations reject a stale receiver with an actionable error.

## is_stale

<a id="entry-presentation_python_expressions_capability_expression_transformations_is_stale_api_geometry_operations_polygon2d_is_stale"></a>
<a id="placement-placement.python.python_class.polygon2d_is_stale.8876b4907ddb"></a>
<p class="symi-entry-owner">Polygon2d property</p>

```python signature
is_stale: bool
```

Reports whether resetting the owning context invalidated the expression. All other operations reject a stale receiver with an actionable error.

## is_stale

<a id="entry-presentation_python_expressions_capability_expression_transformations_is_stale_api_geometry_operations_segment2d_is_stale"></a>
<a id="placement-placement.python.python_class.segment2d_is_stale.5e1e8d6f44eb"></a>
<p class="symi-entry-owner">Segment2d property</p>

```python signature
is_stale: bool
```

Reports whether resetting the owning context invalidated the expression. All other operations reject a stale receiver with an actionable error.

## is_stale

<a id="entry-presentation_python_expressions_capability_expression_transformations_is_stale_api_geometry_operations_triangle2d_is_stale"></a>
<a id="placement-placement.python.python_class.triangle2d_is_stale.7e5281830311"></a>
<p class="symi-entry-owner">Triangle2d property</p>

```python signature
is_stale: bool
```

Reports whether resetting the owning context invalidated the expression. All other operations reject a stale receiver with an actionable error.

## is_union

<a id="entry-presentation_python_expressions_capability_expression_transformations_is_union_api_expression_is_union"></a>
<a id="placement-placement.python.python_class.expression_is_union.d192a68a8238"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_union() -> bool
```

Whether this expression is a union of sets.

## is_union

<a id="entry-presentation_python_expressions_capability_expression_transformations_is_union_api_matrix_operations_matrix_is_union"></a>
<a id="placement-placement.python.python_class.matrix_is_union.1e6b493d466b"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
is_union() -> bool
```

Always false: a matrix is never a union of sets.

## node_count

<a id="entry-presentation_python_expressions_capability_expression_transformations_node_count_api_expression_node_count"></a>
<a id="placement-placement.python.python_class.expression_node_count.f64ab1a8a1d5"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
node_count() -> int
```

Number of nodes in the expression tree — the size measure used by the simplifier; useful for comparing alternative forms.

## node_count

<a id="entry-presentation_python_expressions_capability_numeric_definite_integration_node_count_api_results_numericdefiniteintegrationresult_node_count"></a>
<a id="placement-placement.python.python_class.numericdefiniteintegrationresult_node_count.50ccc5af81cc"></a>
<p class="symi-entry-owner">NumericDefiniteIntegrationResult property</p>

```python signature
node_count: Optional[int]
```

The node count of the accepted Gauss--Legendre rule.

## numerator

<a id="entry-presentation_python_expressions_capability_expression_transformations_numerator_api_session_numerator"></a>
<a id="placement-placement.python.python_module.module_numerator.7b439c7018e9"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
numerator(input_expression: ExpressionLike) -> Expression
```

Returns the structural numerator from `numerator_denominator`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_numerator.e4e7432a577f"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.numerator</code></p>

```python signature
numerator(input_expression: ExpressionLike) -> Expression
```

</details>

## numerator

<a id="entry-presentation_python_expressions_capability_expression_transformations_numerator_api_expression_numerator"></a>
<a id="placement-placement.python.python_class.expression_numerator.814cd8437587"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
numerator() -> Expression
```

Returns the structural numerator from `numerator_denominator`.

## numerator_denominator

<a id="entry-presentation_python_expressions_capability_expression_transformations_numerator_denominator_api_session_numerator_denominator"></a>
<a id="placement-placement.python.python_module.module_numerator_denominator.b5d4f5877417"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
numerator_denominator(input_expression: ExpressionLike) -> tuple[Expression, Expression]
```

Returns the exact structural numerator and denominator without combining sums or cancelling factors. Python returns a two-tuple and the JavaScript facade returns a record.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_numerator_denominator.68bd70aacf35"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.numerator_denominator</code></p>

```python signature
numerator_denominator(input_expression: ExpressionLike) -> tuple[Expression, Expression]
```

</details>

## numerator_denominator

<a id="entry-presentation_python_expressions_capability_expression_transformations_numerator_denominator_api_expression_numerator_denominator"></a>
<a id="placement-placement.python.python_class.expression_numerator_denominator.46a81fe90444"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
numerator_denominator() -> tuple[Expression, Expression]
```

Returns the exact structural numerator and denominator without combining sums or cancelling factors. Python returns a two-tuple and the JavaScript facade returns a record.

## partial_fractions

<a id="entry-presentation_python_algebraic_transforms_capability_expression_transformations_partial_fractions_api_algebra_session_partial_fractions"></a>
<a id="placement-placement.python.python_module.module_partial_fractions.77aeeee3940d"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
partial_fractions(
    input_expression: ExpressionLike,
    variable: VariableLike,
) -> Expression
```

Decompose a rational expression into polynomial and proper-fraction terms over the named variable.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_partial_fractions.1771414a71ed"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.partial_fractions</code></p>

```python signature
partial_fractions(
    input_expression: ExpressionLike,
    variable: VariableLike,
) -> Expression
```

</details>

## partial_fractions

<a id="entry-presentation_python_algebraic_transforms_capability_expression_transformations_partial_fractions_api_expression_operations_expression_partial_fractions"></a>
<a id="placement-placement.python.python_class.expression_partial_fractions.1ab445c3df44"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
partial_fractions(variable: VariableLike) -> Expression
```

Decompose a rational expression into polynomial and proper-fraction terms over the named variable.

## piecewise_fold

<a id="entry-presentation_python_specialized_canonical_forms_capability_expression_transformations_piecewise_fold_api_solving_session_piecewise_fold"></a>
<a id="placement-placement.python.python_module.module_piecewise_fold.e1827f0a9a92"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
piecewise_fold(input_expression: ExpressionLike) -> Expression
```

Expand `abs`, `signum`, and `heaviside_step` definitions recursively and fold piecewise operands of sums, products, powers, factorials, and ordinary function calls into one top-level piecewise expression. For example, `x*abs(x - 1)` becomes the exact two-branch definition with values `x*(x - 1)` and `-x*(x - 1)`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_piecewise_fold.3809a811317d"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.piecewise_fold</code></p>

```python signature
piecewise_fold(input_expression: ExpressionLike) -> Expression
```

</details>

## piecewise_fold

<a id="entry-presentation_python_specialized_canonical_forms_capability_expression_transformations_piecewise_fold_api_expression_operations_expression_piecewise_fold"></a>
<a id="placement-placement.python.python_class.expression_piecewise_fold.e463070ebd17"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
piecewise_fold() -> Expression
```

Expand `abs`, `signum`, and `heaviside_step` definitions recursively and fold piecewise operands of sums, products, powers, factorials, and ordinary function calls into one top-level piecewise expression. For example, `x*abs(x - 1)` becomes the exact two-branch definition with values `x*(x - 1)` and `-x*(x - 1)`.

## presentation_normal_form

<a id="entry-presentation_python_specialized_canonical_forms_capability_expression_transformations_presentation_normal_form_api_algebra_session_presentation_normal_form"></a>
<a id="placement-placement.python.python_module.module_presentation_normal_form.f7b7b62a0b39"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
presentation_normal_form(input_expression: ExpressionLike) -> Expression
```

The cheap, bounded display-oriented pass run at solver output seams: rational normal form only, kept only when the weighted complexity does not grow. Unlike `simplify` it never runs the full heuristic ladder, so it is fast and deterministic in shape.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_presentation_normal_form.46db54a811e3"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.presentation_normal_form</code></p>

```python signature
presentation_normal_form(input_expression: ExpressionLike) -> Expression
```

</details>

## presentation_normal_form

<a id="entry-presentation_python_specialized_canonical_forms_capability_expression_transformations_presentation_normal_form_api_expression_operations_expression_presentation_normal_form"></a>
<a id="placement-placement.python.python_class.expression_presentation_normal_form.56042dc7923e"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
presentation_normal_form() -> Expression
```

The cheap, bounded display-oriented pass run at solver output seams: rational normal form only, kept only when the weighted complexity does not grow. Unlike `simplify` it never runs the full heuristic ladder, so it is fast and deterministic in shape.

## rationalize_denominator

<a id="entry-presentation_python_algebraic_transforms_capability_expression_transformations_rationalize_denominator_api_algebra_session_rationalize_denominator"></a>
<a id="placement-placement.python.python_module.module_rationalize_denominator.0d2e5bcc5c21"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
rationalize_denominator(input_expression: ExpressionLike) -> Expression
```

Rationalize a radical denominator through exact multiquadratic conjugation or extended-Euclidean inversion in one rational n-th-root extension. For example, `1 / (sqrt(3) - sqrt(2))` becomes `sqrt(3) + sqrt(2)`, and `1 / (1 + 2^(1/3))` becomes `(1 - 2^(1/3) + 2^(2/3))/3`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_rationalize_denominator.0bb0cd8bf012"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.rationalize_denominator</code></p>

```python signature
rationalize_denominator(input_expression: ExpressionLike) -> Expression
```

</details>

## rationalize_denominator

<a id="entry-presentation_python_algebraic_transforms_capability_expression_transformations_rationalize_denominator_api_expression_operations_expression_rationalize_denominator"></a>
<a id="placement-placement.python.python_class.expression_rationalize_denominator.5a59210169df"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
rationalize_denominator() -> Expression
```

Rationalize a radical denominator through exact multiquadratic conjugation or extended-Euclidean inversion in one rational n-th-root extension. For example, `1 / (sqrt(3) - sqrt(2))` becomes `sqrt(3) + sqrt(2)`, and `1 / (1 + 2^(1/3))` becomes `(1 - 2^(1/3) + 2^(2/3))/3`.

## real_part

<a id="entry-presentation_python_trigonometric_complex_rewrites_capability_expression_transformations_real_part_api_session_real_part"></a>
<a id="placement-placement.python.python_module.module_real_part.fdfe4738148e"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
real_part(input_expression: ExpressionLike) -> Expression
```

Return the exact real component of an expression. For example, if `y` is declared real, `real_part(exp(i*y))` is `cos(y)`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_real_part.85087b3f0063"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.real_part</code></p>

```python signature
real_part(input_expression: ExpressionLike) -> Expression
```

</details>

## real_part

<a id="entry-presentation_python_trigonometric_complex_rewrites_capability_expression_transformations_real_part_api_expression_real_part"></a>
<a id="placement-placement.python.python_class.expression_real_part.640391445fee"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
real_part() -> Expression
```

Return the exact real component of an expression. For example, if `y` is declared real, `real_part(exp(i*y))` is `cos(y)`.

## rewrite_as_exponential

<a id="entry-presentation_python_trigonometric_complex_rewrites_capability_expression_transformations_rewrite_as_exponential_api_algebra_session_rewrite_as_exponential"></a>
<a id="placement-placement.python.python_module.module_rewrite_as_exponential.8570bd3a9aaf"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
rewrite_as_exponential(input_expression: ExpressionLike) -> Expression
```

Euler-form rewriter: replace every trigonometric/hyperbolic call with the equivalent complex-exponential expression (bottom-up).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_rewrite_as_exponential.ab4bcf0ccd8a"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.rewrite_as_exponential</code></p>

```python signature
rewrite_as_exponential(input_expression: ExpressionLike) -> Expression
```

</details>

## rewrite_as_exponential

<a id="entry-presentation_python_trigonometric_complex_rewrites_capability_expression_transformations_rewrite_as_exponential_api_expression_operations_expression_rewrite_as_exponential"></a>
<a id="placement-placement.python.python_class.expression_rewrite_as_exponential.9a80406d27c9"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
rewrite_as_exponential() -> Expression
```

Euler-form rewriter: replace every trigonometric/hyperbolic call with the equivalent complex-exponential expression (bottom-up).

## rewrite_as_trigonometric

<a id="entry-presentation_python_trigonometric_complex_rewrites_capability_expression_transformations_rewrite_as_trigonometric_api_algebra_session_rewrite_as_trigonometric"></a>
<a id="placement-placement.python.python_module.module_rewrite_as_trigonometric.44edbc7644c2"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
rewrite_as_trigonometric(input_expression: ExpressionLike) -> Expression
```

Inverse of `rewrite_as_exponential`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_rewrite_as_trigonometric.eabe12481c11"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.rewrite_as_trigonometric</code></p>

```python signature
rewrite_as_trigonometric(input_expression: ExpressionLike) -> Expression
```

</details>

## rewrite_as_trigonometric

<a id="entry-presentation_python_trigonometric_complex_rewrites_capability_expression_transformations_rewrite_as_trigonometric_api_expression_operations_expression_rewrite_as_trigonometric"></a>
<a id="placement-placement.python.python_class.expression_rewrite_as_trigonometric.686d620052f0"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
rewrite_as_trigonometric() -> Expression
```

Inverse of `rewrite_as_exponential`.

## rewrite_in_terms_of

<a id="entry-presentation_python_expressions_capability_expression_transformations_rewrite_in_terms_of_api_algebra_session_rewrite_in_terms_of"></a>
<a id="placement-placement.python.python_module.module_rewrite_in_terms_of.00ba7f5f5ee7"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
rewrite_in_terms_of(
    target: ExpressionLike,
    source: ExpressionLike,
    replacement: ExpressionLike,
) -> Expression
```

Rewrite the target in terms of `replacement` under the caller-supplied formal relation `replacement = source`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_rewrite_in_terms_of.f16a697494a8"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.rewrite_in_terms_of</code></p>

```python signature
rewrite_in_terms_of(
    target: ExpressionLike,
    source: ExpressionLike,
    replacement: ExpressionLike,
) -> Expression
```

</details>

## rewrite_in_terms_of

<a id="entry-presentation_python_expressions_capability_expression_transformations_rewrite_in_terms_of_api_expression_operations_expression_rewrite_in_terms_of"></a>
<a id="placement-placement.python.python_class.expression_rewrite_in_terms_of.e75adcb7ae07"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
rewrite_in_terms_of(
    source: ExpressionLike,
    replacement: ExpressionLike,
) -> Expression
```

Rewrite the target in terms of `replacement` under the caller-supplied formal relation `replacement = source`.

## rewrite_special_functions

<a id="entry-presentation_python_specialized_canonical_forms_capability_expression_transformations_rewrite_special_functions_api_session_rewrite_special_functions"></a>
<a id="placement-placement.python.python_module.module_rewrite_special_functions.36605b379310"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
rewrite_special_functions(
    input_expression: ExpressionLike,
    basis: str,
) -> Expression
```

Rewrite beta, gamma, binomial, factorial, and rising-factorial representations into the requested `"gamma"`, `"factorial"`, `"binomial"`, or `"rising_factorial"` basis. The exact identities are applied only when their domain gates are proven: factorial and binomial conversions require the relevant non-negative integers, rising-factorial conversions additionally require a positive base, and beta-to-gamma requires two positive arguments. For example, with `n` declared a positive integer, `n!` may be rewritten into the gamma basis and `gamma(n)` into the factorial basis. A site with unconstrained arguments is returned unchanged. Gamma ratios with a literal non-negative argument offset are minimized to their exact shifted product.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_rewrite_special_functions.958e24eee5dd"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.rewrite_special_functions</code></p>

```python signature
rewrite_special_functions(
    input_expression: ExpressionLike,
    basis: str,
) -> Expression
```

</details>

## rewrite_special_functions

<a id="entry-presentation_python_specialized_canonical_forms_capability_expression_transformations_rewrite_special_functions_api_expression_rewrite_special_functions"></a>
<a id="placement-placement.python.python_class.expression_rewrite_special_functions.35eeabf2bebb"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
rewrite_special_functions(basis: str) -> Expression
```

Rewrite beta, gamma, binomial, factorial, and rising-factorial representations into the requested `"gamma"`, `"factorial"`, `"binomial"`, or `"rising_factorial"` basis. The exact identities are applied only when their domain gates are proven: factorial and binomial conversions require the relevant non-negative integers, rising-factorial conversions additionally require a positive base, and beta-to-gamma requires two positive arguments. For example, with `n` declared a positive integer, `n!` may be rewritten into the gamma basis and `gamma(n)` into the factorial basis. A site with unconstrained arguments is returned unchanged. Gamma ratios with a literal non-negative argument offset are minimized to their exact shifted product.

## rewrite_trigonometric_basis

<a id="entry-presentation_python_trigonometric_complex_rewrites_capability_expression_transformations_rewrite_trigonometric_basis_api_session_rewrite_trigonometric_basis"></a>
<a id="placement-placement.python.python_module.module_rewrite_trigonometric_basis.db34b852b91c"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
rewrite_trigonometric_basis(
    input_expression: ExpressionLike,
    basis: str,
) -> Expression
```

Rewrite trigonometric and hyperbolic calls toward one of five named bases: `sine_cosine`, `tangent`, `exponential`, `trigonometric`, or `hyperbolic`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_rewrite_trigonometric_basis.bf0965118280"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.rewrite_trigonometric_basis</code></p>

```python signature
rewrite_trigonometric_basis(
    input_expression: ExpressionLike,
    basis: str,
) -> Expression
```

</details>

## rewrite_trigonometric_basis

<a id="entry-presentation_python_trigonometric_complex_rewrites_capability_expression_transformations_rewrite_trigonometric_basis_api_expression_rewrite_trigonometric_basis"></a>
<a id="placement-placement.python.python_class.expression_rewrite_trigonometric_basis.343f21c131d1"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
rewrite_trigonometric_basis(basis: str) -> Expression
```

Rewrite trigonometric and hyperbolic calls toward one of five named bases: `sine_cosine`, `tangent`, `exponential`, `trigonometric`, or `hyperbolic`.

## simplify

<a id="entry-presentation_python_simplification_general_capability_expression_transformations_simplify_api_assumptionscope_simplify"></a>
<a id="placement-placement.python.python_class.assumptionscope_simplify.623d7017e342"></a>
<p class="symi-entry-owner">AssumptionScope method</p>

```python signature
simplify(input_expression: ExpressionLike) -> Expression
```

Simplify an expression using the scope's immutable assumptions.

## simplify

<a id="entry-presentation_python_simplification_general_capability_expression_transformations_simplify_api_session_simplify"></a>
<a id="placement-placement.python.python_module.module_simplify.62fac3beaaac"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
simplify(input_expression: ExpressionLike) -> Expression
```

The full heuristic simplification ladder: weighted-complexity-guided search over rational normal form, radical denesting, trigonometric/log rewrites, parity and absolute-value rules. The result is never accepted if its weighted complexity grows. Principal square roots extract structural square content only under a realness proof: `sqrt(x^2)` becomes `abs(x)` for real `x`, while `sqrt(z^2)` remains unchanged for a default-complex `z`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_simplify.f7e121b1c5bc"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.simplify</code></p>

```python signature
simplify(input_expression: ExpressionLike) -> Expression
```

</details>

## simplify

<a id="entry-presentation_python_simplification_general_capability_expression_transformations_simplify_api_expression_simplify"></a>
<a id="placement-placement.python.python_class.expression_simplify.38b2371c5a4e"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
simplify() -> Expression
```

The full heuristic simplification ladder: weighted-complexity-guided search over rational normal form, radical denesting, trigonometric/log rewrites, parity and absolute-value rules. The result is never accepted if its weighted complexity grows. Principal square roots extract structural square content only under a realness proof: `sqrt(x^2)` becomes `abs(x)` for real `x`, while `sqrt(z^2)` remains unchanged for a default-complex `z`.

## simplify_trigonometric

<a id="entry-presentation_python_trigonometric_complex_rewrites_capability_expression_transformations_simplify_trigonometric_api_session_simplify_trigonometric"></a>
<a id="placement-placement.python.python_module.module_simplify_trigonometric.9708f5a823b7"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
simplify_trigonometric(input_expression: ExpressionLike) -> Expression
```

Fu-style trigonometric simplification toward fewer/cheaper trig calls.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_simplify_trigonometric.4b10b216b085"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.simplify_trigonometric</code></p>

```python signature
simplify_trigonometric(input_expression: ExpressionLike) -> Expression
```

</details>

## simplify_trigonometric

<a id="entry-presentation_python_trigonometric_complex_rewrites_capability_expression_transformations_simplify_trigonometric_api_expression_simplify_trigonometric"></a>
<a id="placement-placement.python.python_class.expression_simplify_trigonometric.452d1a9aa6e7"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
simplify_trigonometric() -> Expression
```

Fu-style trigonometric simplification toward fewer/cheaper trig calls.

## substitute

<a id="entry-presentation_python_expressions_capability_expression_transformations_substitute_api_expression_substitute"></a>
<a id="placement-placement.python.python_class.expression_substitute.bb8b8e243847"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
substitute(variable: VariableLike, value: ExpressionLike) -> Expression
```

Replace every free occurrence of the named symbol with `value`, re-running auto-simplification.

## symbol_name

<a id="entry-presentation_python_expressions_capability_expression_transformations_symbol_name_api_expression_symbol_name"></a>
<a id="placement-placement.python.python_class.expression_symbol_name.984257e5d5ea"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
symbol_name() -> str
```

Returns the name of a symbol expression and rejects every other expression kind.

## to_list

<a id="entry-presentation_python_expressions_capability_expression_transformations_to_list_api_expression_to_list"></a>
<a id="placement-placement.python.python_class.expression_to_list.f4ac813ef225"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
to_list() -> list[Any]
```

Elements of a finite set; raises on other shapes. Python finite sets also support `len()` and iteration.

## together

<a id="entry-presentation_python_simplification_general_capability_expression_transformations_together_api_session_together"></a>
<a id="placement-placement.python.python_module.module_together.dff63b559f8f"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
together(input_expression: ExpressionLike) -> Expression
```

Combine a sum of fractions over a common denominator. On Symi's representation `together` and `cancel` coincide; both names exist because they are distinct user intents.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_together.1765f4684f37"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.together</code></p>

```python signature
together(input_expression: ExpressionLike) -> Expression
```

</details>

## together

<a id="entry-presentation_python_simplification_general_capability_expression_transformations_together_api_expression_together"></a>
<a id="placement-placement.python.python_class.expression_together.94692be30b5a"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
together() -> Expression
```

Combine a sum of fractions over a common denominator. On Symi's representation `together` and `cancel` coincide; both names exist because they are distinct user intents.

## union_components

<a id="entry-presentation_python_expressions_capability_expression_transformations_union_components_api_expression_union_components"></a>
<a id="placement-placement.python.python_class.expression_union_components.d7ba76739d4b"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
union_components() -> list[Any]
```

The components of a set union, as a list of expressions.

## Circle2d

<a id="entry-presentation_python_geometry_capability_geometry_circle_2d_api_circle2d"></a>
<a id="placement-placement.python.python_class.circle2d.6c9303592f3a"></a>
<p class="symi-entry-owner">Circle2d constructor</p>

```python signature
Circle2d(center: Point2d, radius: Any)
```

Construct the circle with the given center and radius.

## Point2d

<a id="entry-presentation_python_geometry_capability_geometry_point_2d_api_point2d"></a>
<a id="placement-placement.python.python_class.point2d.153a29295a96"></a>
<p class="symi-entry-owner">Point2d constructor</p>

```python signature
Point2d(x: Any, y: Any)
```

Construct the point `(x, y)`.

## Polygon2d

<a id="entry-presentation_python_geometry_capability_geometry_polygon_2d_api_polygon2d"></a>
<a id="placement-placement.python.python_class.polygon2d.c3c332796a52"></a>
<p class="symi-entry-owner">Polygon2d constructor</p>

```python signature
Polygon2d(vertices: list[Point2d])
```

Simple polygon from its vertex list in order; degenerate inputs raise.

## Segment2d

<a id="entry-presentation_python_geometry_capability_geometry_segment_2d_api_segment2d"></a>
<a id="placement-placement.python.python_class.segment2d.6a9df7cf01ed"></a>
<p class="symi-entry-owner">Segment2d constructor</p>

```python signature
Segment2d(start: Point2d, end: Point2d)
```

Construct the segment running from `start` to `end`.

## Triangle2d

<a id="entry-presentation_python_geometry_capability_geometry_triangle_2d_api_triangle2d"></a>
<a id="placement-placement.python.python_class.triangle2d.af8da7a77c95"></a>
<p class="symi-entry-owner">Triangle2d constructor</p>

```python signature
Triangle2d(point_a: Point2d, point_b: Point2d, point_c: Point2d)
```

Collinear vertices raise.

## __getattribute__

<a id="entry-presentation_python_geometry_capability_geometry_getattribute_unresolved"></a>
<a id="placement-placement.python.python_class.circle2d_getattribute.4de339a907b9"></a>
<p class="symi-entry-owner">Circle2d method</p>

```python signature
__getattribute__(name: str) -> Any
```

Reject attribute access on a stale object before delegating to the default lookup.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.point2d_getattribute.156c5902a8a3"></a>
<p class="symi-entry-owner">Point2d method: <code>Point2d.__getattribute__</code></p>

```python signature
__getattribute__(name: str) -> Any
```

<a id="placement-placement.python.python_class.polygon2d_getattribute.99cad6c2189d"></a>
<p class="symi-entry-owner">Polygon2d method: <code>Polygon2d.__getattribute__</code></p>

```python signature
__getattribute__(name: str) -> Any
```

<a id="placement-placement.python.python_class.segment2d_getattribute.8cfed938535c"></a>
<p class="symi-entry-owner">Segment2d method: <code>Segment2d.__getattribute__</code></p>

```python signature
__getattribute__(name: str) -> Any
```

<a id="placement-placement.python.python_class.triangle2d_getattribute.0c24333baf71"></a>
<p class="symi-entry-owner">Triangle2d method: <code>Triangle2d.__getattribute__</code></p>

```python signature
__getattribute__(name: str) -> Any
```

</details>

## __repr__

<a id="entry-presentation_python_geometry_capability_geometry_repr_unresolved"></a>
<a id="placement-placement.python.python_class.circle2d_repr.6e0e1433e6a7"></a>
<p class="symi-entry-owner">Circle2d method</p>

```python signature
__repr__() -> str
```

The `repr()` text, which reports staleness instead of failing.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.point2d_repr.17286d81f9e9"></a>
<p class="symi-entry-owner">Point2d method: <code>Point2d.__repr__</code></p>

```python signature
__repr__() -> str
```

<a id="placement-placement.python.python_class.polygon2d_repr.294b5ad11963"></a>
<p class="symi-entry-owner">Polygon2d method: <code>Polygon2d.__repr__</code></p>

```python signature
__repr__() -> str
```

<a id="placement-placement.python.python_class.segment2d_repr.7652049b4002"></a>
<p class="symi-entry-owner">Segment2d method: <code>Segment2d.__repr__</code></p>

```python signature
__repr__() -> str
```

<a id="placement-placement.python.python_class.triangle2d_repr.647cad2b16d7"></a>
<p class="symi-entry-owner">Triangle2d method: <code>Triangle2d.__repr__</code></p>

```python signature
__repr__() -> str
```

</details>

## area

<a id="entry-presentation_python_geometry_capability_geometry_area_api_circle2d_area"></a>
<a id="placement-placement.python.python_class.circle2d_area.62258c6d409d"></a>
<p class="symi-entry-owner">Circle2d method</p>

```python signature
area() -> Expression
```

Area of the circle, \(\pi r^2\).

## area

<a id="entry-presentation_python_geometry_capability_geometry_area_api_polygon2d_area"></a>
<a id="placement-placement.python.python_class.polygon2d_area.e4af71191e84"></a>
<p class="symi-entry-owner">Polygon2d method</p>

```python signature
area() -> Expression
```

Shoelace area of the polygon.

## area

<a id="entry-presentation_python_geometry_capability_geometry_area_api_triangle2d_area"></a>
<a id="placement-placement.python.python_class.triangle2d_area.85b4e88e0921"></a>
<p class="symi-entry-owner">Triangle2d method</p>

```python signature
area() -> Expression
```

Shoelace area of the triangle.

## center

<a id="entry-presentation_python_geometry_capability_geometry_center_api_circle2d_center"></a>
<a id="placement-placement.python.python_class.circle2d_center.64927d469d56"></a>
<p class="symi-entry-owner">Circle2d property</p>

```python signature
center: Point2d
```

The center of the circle.

## centroid

<a id="entry-presentation_python_geometry_capability_geometry_centroid_api_polygon2d_centroid"></a>
<a id="placement-placement.python.python_class.polygon2d_centroid.99cf20e83389"></a>
<p class="symi-entry-owner">Polygon2d method</p>

```python signature
centroid() -> Point2d
```

Centroid of the polygon's vertices.

## centroid

<a id="entry-presentation_python_geometry_capability_geometry_centroid_api_geometry_operations_triangle2d_centroid"></a>
<a id="placement-placement.python.python_class.triangle2d_centroid.e785148e690b"></a>
<p class="symi-entry-owner">Triangle2d method</p>

```python signature
centroid() -> Point2d
```

Centroid of the triangle's vertices.

## circle_2d

<a id="entry-presentation_python_geometry_capability_geometry_circle_2d_api_session_circle_2d"></a>
<a id="placement-placement.python.python_class.context_circle_2d.fa59e94268b5"></a>
<p class="symi-entry-owner">Explicit context</p>

```python signature
circle_2d(center: Point2d, radius: Any) -> Circle2d
```

Construct the circle with the given center and radius.

## circumference

<a id="entry-presentation_python_geometry_capability_geometry_circumference_api_circle2d_circumference"></a>
<a id="placement-placement.python.python_class.circle2d_circumference.0e47a445fea7"></a>
<p class="symi-entry-owner">Circle2d method</p>

```python signature
circumference() -> Expression
```

Circumference of the circle.

## coordinates

<a id="entry-presentation_python_geometry_capability_geometry_coordinates_api_point2d_coordinates"></a>
<a id="placement-placement.python.python_class.point2d_coordinates.57a972dc52de"></a>
<p class="symi-entry-owner">Point2d method</p>

```python signature
coordinates() -> tuple[Expression, Expression]
```

The `(x, y)` coordinate pair of the point.

## distance_to

<a id="entry-presentation_python_geometry_capability_geometry_distance_to_api_point2d_distance_to"></a>
<a id="placement-placement.python.python_class.point2d_distance_to.2efda0af0a60"></a>
<p class="symi-entry-owner">Point2d method</p>

```python signature
distance_to(other: Point2d) -> Expression
```

Euclidean distance, exact (a `sqrt` expression in general).

## equation

<a id="entry-presentation_python_geometry_capability_geometry_equation_api_geometry_operations_circle2d_equation"></a>
<a id="placement-placement.python.python_class.circle2d_equation.765e8748a8f0"></a>
<p class="symi-entry-owner">Circle2d method</p>

```python signature
equation(variable_x: Any, variable_y: Any) -> Expression
```

The circle as an `equal` relation in x and y.

## equation

<a id="entry-presentation_python_geometry_capability_geometry_equation_api_partial_differential_equations_partialdifferentialequationproblem_equation"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationproblem_equation.86790941a045"></a>
<p class="symi-entry-owner">PartialDifferentialEquationProblem property</p>

```python signature
equation: Expression
```

The governing residual, interpreted as equal to zero.

## interior_angles

<a id="entry-presentation_python_geometry_capability_geometry_interior_angles_api_geometry_operations_polygon2d_interior_angles"></a>
<a id="placement-placement.python.python_class.polygon2d_interior_angles.b4642f1f180f"></a>
<p class="symi-entry-owner">Polygon2d method</p>

```python signature
interior_angles() -> list[tuple[Point2d, Expression]]
```

Each vertex paired with its interior angle. Notes: WASM returns `vertex_angle` objects with `vertex`/`angle` getters.

## interior_angles

<a id="entry-presentation_python_geometry_capability_geometry_interior_angles_api_geometry_operations_triangle2d_interior_angles"></a>
<a id="placement-placement.python.python_class.triangle2d_interior_angles.8c95a27939cc"></a>
<p class="symi-entry-owner">Triangle2d method</p>

```python signature
interior_angles() -> list[tuple[Point2d, Expression]]
```

Each vertex paired with its interior angle. Notes: WASM returns `vertex_angle` objects with `vertex`/`angle` getters.

## intersection

<a id="entry-presentation_python_geometry_capability_geometry_intersection_api_circle2d_intersection"></a>
<a id="placement-placement.python.python_class.circle2d_intersection.5b868562e8f7"></a>
<p class="symi-entry-owner">Circle2d method</p>

```python signature
intersection(other: Geometry2D) -> list[GeometryIntersectionComponent]
```

Return the complete exact boundary intersection with another supported plane geometry.

## intersection

<a id="entry-presentation_python_geometry_capability_geometry_intersection_api_point2d_intersection"></a>
<a id="placement-placement.python.python_class.point2d_intersection.9dd75de58565"></a>
<p class="symi-entry-owner">Point2d method</p>

```python signature
intersection(other: Geometry2D) -> list[GeometryIntersectionComponent]
```

Return the complete exact boundary intersection with another supported plane geometry.

## intersection

<a id="entry-presentation_python_geometry_capability_geometry_intersection_api_polygon2d_intersection"></a>
<a id="placement-placement.python.python_class.polygon2d_intersection.beb34d128bc7"></a>
<p class="symi-entry-owner">Polygon2d method</p>

```python signature
intersection(other: Geometry2D) -> list[GeometryIntersectionComponent]
```

Return the complete exact boundary intersection with another supported plane geometry.

## intersection

<a id="entry-presentation_python_geometry_capability_geometry_intersection_api_segment2d_intersection"></a>
<a id="placement-placement.python.python_class.segment2d_intersection.7f191e5c0acb"></a>
<p class="symi-entry-owner">Segment2d method</p>

```python signature
intersection(other: Geometry2D) -> list[GeometryIntersectionComponent]
```

Return the complete exact boundary intersection with another supported plane geometry.

## intersection

<a id="entry-presentation_python_geometry_capability_geometry_intersection_api_triangle2d_intersection"></a>
<a id="placement-placement.python.python_class.triangle2d_intersection.103be0069423"></a>
<p class="symi-entry-owner">Triangle2d method</p>

```python signature
intersection(other: Geometry2D) -> list[GeometryIntersectionComponent]
```

Return the complete exact boundary intersection with another supported plane geometry.

## midpoint

<a id="entry-presentation_python_geometry_capability_geometry_midpoint_api_segment2d_midpoint"></a>
<a id="placement-placement.python.python_class.segment2d_midpoint.aed94451d883"></a>
<p class="symi-entry-owner">Segment2d method</p>

```python signature
midpoint() -> Point2d
```

Midpoint of the segment.

## perimeter

<a id="entry-presentation_python_geometry_capability_geometry_perimeter_api_polygon2d_perimeter"></a>
<a id="placement-placement.python.python_class.polygon2d_perimeter.95a07f03ed62"></a>
<p class="symi-entry-owner">Polygon2d method</p>

```python signature
perimeter() -> Expression
```

Perimeter of the polygon, the sum of its edge lengths.

## perimeter

<a id="entry-presentation_python_geometry_capability_geometry_perimeter_api_triangle2d_perimeter"></a>
<a id="placement-placement.python.python_class.triangle2d_perimeter.81a3b4e357e1"></a>
<p class="symi-entry-owner">Triangle2d method</p>

```python signature
perimeter() -> Expression
```

Perimeter of the triangle, the sum of its side lengths.

## perpendicular_bisector_equation

<a id="entry-presentation_python_geometry_capability_geometry_perpendicular_bisector_equation_api_geometry_operations_segment2d_perpendicular_bisector_equation"></a>
<a id="placement-placement.python.python_class.segment2d_perpendicular_bisector_equation.c50cf31224c2"></a>
<p class="symi-entry-owner">Segment2d method</p>

```python signature
perpendicular_bisector_equation(
    variable_x: Any,
    variable_y: Any,
) -> Expression
```

The bisector line as an `equal` relation in x and y.

## point_2d

<a id="entry-presentation_python_geometry_capability_geometry_point_2d_api_session_point_2d"></a>
<a id="placement-placement.python.python_class.context_point_2d.d9bef617e242"></a>
<p class="symi-entry-owner">Explicit context</p>

```python signature
point_2d(x: Any, y: Any) -> Point2d
```

Construct the point `(x, y)`.

## polygon_2d

<a id="entry-presentation_python_geometry_capability_geometry_polygon_2d_api_session_polygon_2d"></a>
<a id="placement-placement.python.python_class.context_polygon_2d.d8c8d3df3d19"></a>
<p class="symi-entry-owner">Explicit context</p>

```python signature
polygon_2d(vertices: list[Point2d]) -> Polygon2d
```

Simple polygon from its vertex list in order; degenerate inputs raise.

## radius

<a id="entry-presentation_python_geometry_capability_geometry_radius_api_circle2d_radius"></a>
<a id="placement-placement.python.python_class.circle2d_radius.0d3f0082c2d0"></a>
<p class="symi-entry-owner">Circle2d property</p>

```python signature
radius: Expression
```

The radius of the circle.

## segment_2d

<a id="entry-presentation_python_geometry_capability_geometry_segment_2d_api_session_segment_2d"></a>
<a id="placement-placement.python.python_class.context_segment_2d.2b58460d9c77"></a>
<p class="symi-entry-owner">Explicit context</p>

```python signature
segment_2d(start: Point2d, end: Point2d) -> Segment2d
```

Construct the segment running from `start` to `end`.

## triangle_2d

<a id="entry-presentation_python_geometry_capability_geometry_triangle_2d_api_session_triangle_2d"></a>
<a id="placement-placement.python.python_class.context_triangle_2d.a18dab1716eb"></a>
<p class="symi-entry-owner">Explicit context</p>

```python signature
triangle_2d(
    point_a: Point2d,
    point_b: Point2d,
    point_c: Point2d,
) -> Triangle2d
```

Collinear vertices raise.

## x

<a id="entry-presentation_python_geometry_capability_geometry_x_api_point2d_x"></a>
<a id="placement-placement.python.python_class.point2d_x.affc4d96fb49"></a>
<p class="symi-entry-owner">Point2d property</p>

```python signature
x: Expression
```

The x coordinate of the point.

## y

<a id="entry-presentation_python_geometry_capability_geometry_y_api_point2d_y"></a>
<a id="placement-placement.python.python_class.point2d_y.69721eedd783"></a>
<p class="symi-entry-owner">Point2d property</p>

```python signature
y: Expression
```

The y coordinate of the point.

## estimated_absolute_error

<a id="entry-presentation_python_api_reference_capability_numeric_definite_integration_estimated_absolute_error_api_results_numericdefiniteintegrationresult_estimated_absolute_error"></a>
<a id="placement-placement.python.python_class.numericdefiniteintegrationresult_estimated_absolute_error.b333c7c02e31"></a>
<p class="symi-entry-owner">NumericDefiniteIntegrationResult property</p>

```python signature
estimated_absolute_error: Optional[float]
```

The final difference between successive quadrature rules.

## precision_bits

<a id="entry-presentation_python_api_reference_capability_numeric_definite_integration_precision_bits_api_results_numericdefiniteintegrationresult_precision_bits"></a>
<a id="placement-placement.python.python_class.numericdefiniteintegrationresult_precision_bits.4b58d8fe9120"></a>
<p class="symi-entry-owner">NumericDefiniteIntegrationResult property</p>

```python signature
precision_bits: Optional[int]
```

The arithmetic precision used for the result.

## value

<a id="entry-presentation_python_api_reference_capability_numeric_definite_integration_value_api_results_numericdefiniteintegrationresult_value"></a>
<a id="placement-placement.python.python_class.numericdefiniteintegrationresult_value.47635fdec488"></a>
<p class="symi-entry-owner">NumericDefiniteIntegrationResult property</p>

```python signature
value: Optional[tuple[float, float]]
```

The complex value as real and imaginary components, when convergence was established.

## characteristic_function

<a id="entry-presentation_python_statistics_capability_probability_characteristic_function_api_probability_session_characteristic_function"></a>
<a id="placement-placement.python.python_module.module_characteristic_function.1b31581d27c3"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
characteristic_function(
    random_variable: ExpressionLike,
    auxiliary_variable: VariableLike,
) -> Expression
```

Closed-form characteristic function \(\varphi_X(t)\) of `random_variable` in the named auxiliary variable, when elementary; otherwise an unevaluated structural form.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_characteristic_function.8299398476e6"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.characteristic_function</code></p>

```python signature
characteristic_function(
    random_variable: ExpressionLike,
    auxiliary_variable: VariableLike,
) -> Expression
```

</details>

## covariance

<a id="entry-presentation_python_statistics_capability_probability_covariance_api_probability_session_covariance"></a>
<a id="placement-placement.python.python_module.module_covariance.1d9bb3cec96e"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
covariance(
    left: ExpressionLike,
    right: ExpressionLike,
    random_variables: Iterable[ExpressionLike],
) -> Expression
```

Covariance of `left` and `right` over the listed independent random variables; zero for independent operands.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_covariance.a6be9e049ae6"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.covariance</code></p>

```python signature
covariance(
    left: ExpressionLike,
    right: ExpressionLike,
    random_variables: Iterable[ExpressionLike],
) -> Expression
```

</details>

## cumulant

<a id="entry-presentation_python_statistics_capability_probability_cumulant_api_probability_session_cumulant"></a>
<a id="placement-placement.python.python_module.module_cumulant.03a574ea9dbd"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
cumulant(
    random_variable: ExpressionLike,
    order: ExpressionLike,
) -> Expression
```

The `order`-th cumulant of `random_variable`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_cumulant.90245cc0ca22"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.cumulant</code></p>

```python signature
cumulant(
    random_variable: ExpressionLike,
    order: ExpressionLike,
) -> Expression
```

</details>

## cumulative_distribution

<a id="entry-presentation_python_statistics_capability_probability_cumulative_distribution_api_probability_session_cumulative_distribution"></a>
<a id="placement-placement.python.python_module.module_cumulative_distribution.fed9e9b364fa"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
cumulative_distribution(
    random_variable: ExpressionLike,
    point: ExpressionLike,
) -> Expression
```

Cumulative distribution function of `random_variable` evaluated at `point`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_cumulative_distribution.2c15953c82f4"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.cumulative_distribution</code></p>

```python signature
cumulative_distribution(
    random_variable: ExpressionLike,
    point: ExpressionLike,
) -> Expression
```

</details>

## density

<a id="entry-presentation_python_statistics_capability_probability_density_api_probability_session_density"></a>
<a id="placement-placement.python.python_module.module_density.44b9d8513f98"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
density(
    random_variable: ExpressionLike,
    point: ExpressionLike,
) -> Expression
```

Probability density (continuous families) or probability mass (discrete families) of `random_variable` evaluated at `point`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_density.1024ad42d312"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.density</code></p>

```python signature
density(
    random_variable: ExpressionLike,
    point: ExpressionLike,
) -> Expression
```

</details>

## distribution

<a id="entry-presentation_python_statistics_capability_probability_distribution_api_probability_session_distribution"></a>
<a id="placement-placement.python.python_module.module_distribution.99e19fa872d0"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
distribution(
    name: str,
    parameters: Iterable[ExpressionLike],
) -> Expression
```

Build a distribution node from a family name and its ordered parameter list (e.g. `distribution("normal", [mean, standard_deviation])`).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_distribution.ab03278ee9a0"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.distribution</code></p>

```python signature
distribution(
    name: str,
    parameters: Iterable[ExpressionLike],
) -> Expression
```

</details>

## expectation

<a id="entry-presentation_python_statistics_capability_probability_expectation_api_probability_session_expectation"></a>
<a id="placement-placement.python.python_module.module_expectation.18ccccad83ac"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
expectation(
    target: ExpressionLike,
    random_variables: Iterable[ExpressionLike],
) -> Expression
```

Expectation of `target` over the listed independent random variables. Linearity and the constant-factor lift are applied; bare and power-of-random-variable leaves consume the distribution's mean and raw moments.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_expectation.8318ca750073"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.expectation</code></p>

```python signature
expectation(
    target: ExpressionLike,
    random_variables: Iterable[ExpressionLike],
) -> Expression
```

</details>

## moment

<a id="entry-presentation_python_statistics_capability_probability_moment_api_probability_session_moment"></a>
<a id="placement-placement.python.python_module.module_moment.fa9725983b7b"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
moment(
    random_variable: ExpressionLike,
    order: ExpressionLike,
) -> Expression
```

The `order`-th raw moment `E[X^order]` of `random_variable`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_moment.a6493217bef6"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.moment</code></p>

```python signature
moment(
    random_variable: ExpressionLike,
    order: ExpressionLike,
) -> Expression
```

</details>

## moment_generating_function

<a id="entry-presentation_python_statistics_capability_probability_moment_generating_function_api_probability_session_moment_generating_function"></a>
<a id="placement-placement.python.python_module.module_moment_generating_function.9346d977ea00"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
moment_generating_function(
    random_variable: ExpressionLike,
    auxiliary_variable: VariableLike,
) -> Expression
```

Closed-form moment generating function `M_X(t)` of `random_variable` in the named auxiliary variable, when elementary; otherwise an unevaluated structural form.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_moment_generating_function.2b624dc66039"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.moment_generating_function</code></p>

```python signature
moment_generating_function(
    random_variable: ExpressionLike,
    auxiliary_variable: VariableLike,
) -> Expression
```

</details>

## probability

<a id="entry-presentation_python_statistics_capability_probability_probability_api_probability_session_probability"></a>
<a id="placement-placement.python.python_module.module_probability.1fd29c23b842"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
probability(
    predicate: ExpressionLike,
    random_variables: Iterable[ExpressionLike],
) -> Expression
```

Probability that `predicate` (a tail comparison such as `X > t`) holds over the listed independent random variables.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_probability.ac4050c8baed"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.probability</code></p>

```python signature
probability(
    predicate: ExpressionLike,
    random_variables: Iterable[ExpressionLike],
) -> Expression
```

</details>

## random_variable

<a id="entry-presentation_python_statistics_capability_probability_random_variable_api_probability_session_random_variable"></a>
<a id="placement-placement.python.python_module.module_random_variable.e8379bd928e7"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
random_variable(name: str, distribution: ExpressionLike) -> Expression
```

Build a random variable named `name` drawn from `distribution`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_random_variable.8afa72c52272"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.random_variable</code></p>

```python signature
random_variable(name: str, distribution: ExpressionLike) -> Expression
```

</details>

## variance

<a id="entry-presentation_python_statistics_capability_probability_variance_api_probability_session_variance"></a>
<a id="placement-placement.python.python_module.module_variance.c842ecc5717d"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
variance(
    target: ExpressionLike,
    random_variables: Iterable[ExpressionLike],
) -> Expression
```

Variance of `target` over the listed independent random variables.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_variance.d35f662e74b6"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.variance</code></p>

```python signature
variance(
    target: ExpressionLike,
    random_variables: Iterable[ExpressionLike],
) -> Expression
```

</details>

## beta

<a id="entry-presentation_python_special_functions_capability_special_functions_beta_api_session_beta"></a>
<a id="placement-placement.python.python_module.module_beta.d5028cced6a3"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
beta(x: Any, y: Any) -> Expression
```

The beta function \(\operatorname{B}(x, y) = \Gamma(x)\Gamma(y)/\Gamma(x+y)\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_beta.cb0ca7293444"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.beta</code></p>

```python signature
beta(x: Any, y: Any) -> Expression
```

</details>

## carlson_rc

<a id="entry-presentation_python_special_functions_capability_special_functions_carlson_rc_api_session_carlson_rc"></a>
<a id="placement-placement.python.python_module.module_carlson_rc.7a62fd509b45"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
carlson_rc(
    first_argument: ExpressionLike,
    second_argument: ExpressionLike,
) -> Expression
```

Carlson's degenerate symmetric elliptic integral \(R_C(x,y)\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_carlson_rc.1f21e8d8e888"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.carlson_rc</code></p>

```python signature
carlson_rc(
    first_argument: ExpressionLike,
    second_argument: ExpressionLike,
) -> Expression
```

</details>

## carlson_rd

<a id="entry-presentation_python_special_functions_capability_special_functions_carlson_rd_api_session_carlson_rd"></a>
<a id="placement-placement.python.python_module.module_carlson_rd.b8aad0a4cb2d"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
carlson_rd(
    first_argument: ExpressionLike,
    second_argument: ExpressionLike,
    third_argument: ExpressionLike,
) -> Expression
```

Carlson's symmetric elliptic integral \(R_D(x,y,z)\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_carlson_rd.bf2f40edb4fe"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.carlson_rd</code></p>

```python signature
carlson_rd(
    first_argument: ExpressionLike,
    second_argument: ExpressionLike,
    third_argument: ExpressionLike,
) -> Expression
```

</details>

## carlson_rf

<a id="entry-presentation_python_special_functions_capability_special_functions_carlson_rf_api_session_carlson_rf"></a>
<a id="placement-placement.python.python_module.module_carlson_rf.e1b92d7a3eb3"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
carlson_rf(
    first_argument: ExpressionLike,
    second_argument: ExpressionLike,
    third_argument: ExpressionLike,
) -> Expression
```

Carlson's symmetric elliptic integral \(R_F(x,y,z)\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_carlson_rf.4916bc8c8484"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.carlson_rf</code></p>

```python signature
carlson_rf(
    first_argument: ExpressionLike,
    second_argument: ExpressionLike,
    third_argument: ExpressionLike,
) -> Expression
```

</details>

## carlson_rj

<a id="entry-presentation_python_special_functions_capability_special_functions_carlson_rj_api_session_carlson_rj"></a>
<a id="placement-placement.python.python_module.module_carlson_rj.92717308a5ed"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
carlson_rj(
    first_argument: ExpressionLike,
    second_argument: ExpressionLike,
    third_argument: ExpressionLike,
    fourth_argument: ExpressionLike,
) -> Expression
```

Carlson's symmetric elliptic integral \(R_J(x,y,z,p)\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_carlson_rj.23f9fee36cbe"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.carlson_rj</code></p>

```python signature
carlson_rj(
    first_argument: ExpressionLike,
    second_argument: ExpressionLike,
    third_argument: ExpressionLike,
    fourth_argument: ExpressionLike,
) -> Expression
```

</details>

## chebyshev_polynomial_first_kind

<a id="entry-presentation_python_special_functions_capability_special_functions_chebyshev_polynomial_first_kind_api_session_chebyshev_polynomial_first_kind"></a>
<a id="placement-placement.python.python_module.module_chebyshev_polynomial_first_kind.14d02036658d"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
chebyshev_polynomial_first_kind(
    degree: ExpressionLike,
    argument: ExpressionLike,
) -> Expression
```

The Chebyshev polynomial \(T_n(x)\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_chebyshev_polynomial_first_kind.ce659e770f44"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.chebyshev_polynomial_first_kind</code></p>

```python signature
chebyshev_polynomial_first_kind(
    degree: ExpressionLike,
    argument: ExpressionLike,
) -> Expression
```

</details>

## chebyshev_polynomial_second_kind

<a id="entry-presentation_python_special_functions_capability_special_functions_chebyshev_polynomial_second_kind_api_session_chebyshev_polynomial_second_kind"></a>
<a id="placement-placement.python.python_module.module_chebyshev_polynomial_second_kind.72deb4c741ac"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
chebyshev_polynomial_second_kind(
    degree: ExpressionLike,
    argument: ExpressionLike,
) -> Expression
```

The Chebyshev polynomial \(U_n(x)\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_chebyshev_polynomial_second_kind.7d9175943d75"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.chebyshev_polynomial_second_kind</code></p>

```python signature
chebyshev_polynomial_second_kind(
    degree: ExpressionLike,
    argument: ExpressionLike,
) -> Expression
```

</details>

## digamma

<a id="entry-presentation_python_special_functions_capability_special_functions_digamma_api_session_digamma"></a>
<a id="placement-placement.python.python_module.module_digamma.483bce136a30"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
digamma(x: Any) -> Expression
```

The digamma function \(\psi(x) = \Gamma'(x)/\Gamma(x)\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_digamma.9d7c3431a68a"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.digamma</code></p>

```python signature
digamma(x: Any) -> Expression
```

</details>

## elliptic_e

<a id="entry-presentation_python_special_functions_capability_special_functions_elliptic_e_api_session_elliptic_e"></a>
<a id="placement-placement.python.python_module.module_elliptic_e.d2350530f40b"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
elliptic_e(parameter: ExpressionLike) -> Expression
```

The complete second-kind elliptic integral \(E(m)\), with parameter \(m=k^2\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_elliptic_e.9dfd1152c911"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.elliptic_e</code></p>

```python signature
elliptic_e(parameter: ExpressionLike) -> Expression
```

</details>

## elliptic_e_incomplete

<a id="entry-presentation_python_special_functions_capability_special_functions_elliptic_e_incomplete_api_session_elliptic_e_incomplete"></a>
<a id="placement-placement.python.python_module.module_elliptic_e_incomplete.9daed527f7c1"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
elliptic_e_incomplete(
    amplitude: ExpressionLike,
    parameter: ExpressionLike,
) -> Expression
```

The incomplete second-kind elliptic integral \(E(\phi\mid m)\), with parameter \(m=k^2\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_elliptic_e_incomplete.7586b09c4274"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.elliptic_e_incomplete</code></p>

```python signature
elliptic_e_incomplete(
    amplitude: ExpressionLike,
    parameter: ExpressionLike,
) -> Expression
```

</details>

## elliptic_f

<a id="entry-presentation_python_special_functions_capability_special_functions_elliptic_f_api_session_elliptic_f"></a>
<a id="placement-placement.python.python_module.module_elliptic_f.9ae910ef2fdf"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
elliptic_f(
    amplitude: ExpressionLike,
    parameter: ExpressionLike,
) -> Expression
```

The incomplete first-kind elliptic integral \(F(\phi\mid m)\), with parameter \(m=k^2\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_elliptic_f.4c30eecd1dd7"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.elliptic_f</code></p>

```python signature
elliptic_f(
    amplitude: ExpressionLike,
    parameter: ExpressionLike,
) -> Expression
```

</details>

## elliptic_k

<a id="entry-presentation_python_special_functions_capability_special_functions_elliptic_k_api_session_elliptic_k"></a>
<a id="placement-placement.python.python_module.module_elliptic_k.f59acccd7929"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
elliptic_k(parameter: ExpressionLike) -> Expression
```

The complete first-kind elliptic integral \(K(m)\), with parameter \(m=k^2\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_elliptic_k.8ad4e51cb50b"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.elliptic_k</code></p>

```python signature
elliptic_k(parameter: ExpressionLike) -> Expression
```

</details>

## elliptic_pi

<a id="entry-presentation_python_special_functions_capability_special_functions_elliptic_pi_api_session_elliptic_pi"></a>
<a id="placement-placement.python.python_module.module_elliptic_pi.b2caf9b2f483"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
elliptic_pi(
    characteristic: ExpressionLike,
    parameter: ExpressionLike,
) -> Expression
```

The complete third-kind elliptic integral \(\Pi(n\mid m)\), with parameter \(m=k^2\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_elliptic_pi.9a25def03094"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.elliptic_pi</code></p>

```python signature
elliptic_pi(
    characteristic: ExpressionLike,
    parameter: ExpressionLike,
) -> Expression
```

</details>

## elliptic_pi_incomplete

<a id="entry-presentation_python_special_functions_capability_special_functions_elliptic_pi_incomplete_api_session_elliptic_pi_incomplete"></a>
<a id="placement-placement.python.python_module.module_elliptic_pi_incomplete.6998450e30c4"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
elliptic_pi_incomplete(
    characteristic: ExpressionLike,
    amplitude: ExpressionLike,
    parameter: ExpressionLike,
) -> Expression
```

The incomplete third-kind elliptic integral \(\Pi(n;\phi\mid m)\), with parameter \(m=k^2\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_elliptic_pi_incomplete.07e6d87d5004"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.elliptic_pi_incomplete</code></p>

```python signature
elliptic_pi_incomplete(
    characteristic: ExpressionLike,
    amplitude: ExpressionLike,
    parameter: ExpressionLike,
) -> Expression
```

</details>

## gamma

<a id="entry-presentation_python_special_functions_capability_special_functions_gamma_api_session_gamma"></a>
<a id="placement-placement.python.python_module.module_gamma.3519c91de883"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
gamma(x: Any) -> Expression
```

The gamma function \(\Gamma(x)\), the analytic continuation of `(x-1)!`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_gamma.aad9a3424c1f"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.gamma</code></p>

```python signature
gamma(x: Any) -> Expression
```

</details>

## gegenbauer_polynomial

<a id="entry-presentation_python_special_functions_capability_special_functions_gegenbauer_polynomial_api_session_gegenbauer_polynomial"></a>
<a id="placement-placement.python.python_module.module_gegenbauer_polynomial.7c074bcbda06"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
gegenbauer_polynomial(
    degree: ExpressionLike,
    parameter: ExpressionLike,
    argument: ExpressionLike,
) -> Expression
```

The Gegenbauer polynomial \(C_n^{(\lambda)}(x)\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_gegenbauer_polynomial.f06cf4026ee5"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.gegenbauer_polynomial</code></p>

```python signature
gegenbauer_polynomial(
    degree: ExpressionLike,
    parameter: ExpressionLike,
    argument: ExpressionLike,
) -> Expression
```

</details>

## generalized_laguerre_polynomial

<a id="entry-presentation_python_special_functions_capability_special_functions_generalized_laguerre_polynomial_api_session_generalized_laguerre_polynomial"></a>
<a id="placement-placement.python.python_module.module_generalized_laguerre_polynomial.474a0697b788"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
generalized_laguerre_polynomial(
    degree: ExpressionLike,
    parameter: ExpressionLike,
    argument: ExpressionLike,
) -> Expression
```

The generalized Laguerre polynomial \(L_n^{(\alpha)}(x)\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_generalized_laguerre_polynomial.d6199cb6c12a"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.generalized_laguerre_polynomial</code></p>

```python signature
generalized_laguerre_polynomial(
    degree: ExpressionLike,
    parameter: ExpressionLike,
    argument: ExpressionLike,
) -> Expression
```

</details>

## hermite_polynomial

<a id="entry-presentation_python_special_functions_capability_special_functions_hermite_polynomial_api_session_hermite_polynomial"></a>
<a id="placement-placement.python.python_module.module_hermite_polynomial.69f56e849918"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
hermite_polynomial(
    degree: ExpressionLike,
    argument: ExpressionLike,
) -> Expression
```

The physicists' Hermite polynomial \(H_n(x)\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_hermite_polynomial.2a58c9ae6e11"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.hermite_polynomial</code></p>

```python signature
hermite_polynomial(
    degree: ExpressionLike,
    argument: ExpressionLike,
) -> Expression
```

</details>

## hurwitz_zeta

<a id="entry-presentation_python_special_functions_capability_special_functions_hurwitz_zeta_api_session_hurwitz_zeta"></a>
<a id="placement-placement.python.python_module.module_hurwitz_zeta.21812eff4922"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
hurwitz_zeta(s: Any, a: Any) -> Expression
```

The Hurwitz zeta function \(\zeta(s, a) = \sum_{k\geq 0} (k+a)^{-s}\), the numeric primitive of the family. `hurwitz_zeta(s, 1)` folds to `zeta(s)`; `hurwitz_zeta(s, 1/2)` to \((2^s - 1)\zeta(s)\); a positive integer second argument reduces to `zeta(s)` minus the finite head; a non-positive integer first argument gives a Bernoulli polynomial in `a`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_hurwitz_zeta.38cdd5341786"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.hurwitz_zeta</code></p>

```python signature
hurwitz_zeta(s: Any, a: Any) -> Expression
```

</details>

## hypergeometric_0f1

<a id="entry-presentation_python_special_functions_capability_special_functions_hypergeometric_0f1_api_session_hypergeometric_0f1"></a>
<a id="placement-placement.python.python_module.module_hypergeometric_0f1.e8b6f213dd26"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
hypergeometric_0f1(lower_parameter: Any, argument: Any) -> Expression
```

The confluent limit \({}_0F_1(; b; z)\), lowered to `hypergeometric_pfq`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_hypergeometric_0f1.ee153e00052e"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.hypergeometric_0f1</code></p>

```python signature
hypergeometric_0f1(lower_parameter: Any, argument: Any) -> Expression
```

</details>

## hypergeometric_1f1

<a id="entry-presentation_python_special_functions_capability_special_functions_hypergeometric_1f1_api_session_hypergeometric_1f1"></a>
<a id="placement-placement.python.python_module.module_hypergeometric_1f1.69ebe7116c8a"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
hypergeometric_1f1(
    upper_parameter: Any,
    lower_parameter: Any,
    argument: Any,
) -> Expression
```

Kummer's confluent hypergeometric function \({}_1F_1(a; b; z)\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_hypergeometric_1f1.b74f5b16e6ae"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.hypergeometric_1f1</code></p>

```python signature
hypergeometric_1f1(
    upper_parameter: Any,
    lower_parameter: Any,
    argument: Any,
) -> Expression
```

</details>

## hypergeometric_2f1

<a id="entry-presentation_python_special_functions_capability_special_functions_hypergeometric_2f1_api_session_hypergeometric_2f1"></a>
<a id="placement-placement.python.python_module.module_hypergeometric_2f1.5e19c8c8c3b3"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
hypergeometric_2f1(
    first_upper_parameter: Any,
    second_upper_parameter: Any,
    lower_parameter: Any,
    argument: Any,
) -> Expression
```

The Gauss hypergeometric function \({}_2F_1(a, b; c; z)\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_hypergeometric_2f1.bc54ac19e954"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.hypergeometric_2f1</code></p>

```python signature
hypergeometric_2f1(
    first_upper_parameter: Any,
    second_upper_parameter: Any,
    lower_parameter: Any,
    argument: Any,
) -> Expression
```

</details>

## hypergeometric_pfq

<a id="entry-presentation_python_special_functions_capability_special_functions_hypergeometric_pfq_api_session_hypergeometric_pfq"></a>
<a id="placement-placement.python.python_module.module_hypergeometric_pfq.02a265af88b6"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
hypergeometric_pfq(
    upper_parameters: Any,
    lower_parameters: Any,
    argument: Any,
) -> Expression
```

The generalized hypergeometric function \({}_pF_q(\mathbf a; \mathbf b; z)\). The two parameter groups are ordered sequences: order and repetition are significant, so a set or frozenset is rejected.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_hypergeometric_pfq.547a7193c550"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.hypergeometric_pfq</code></p>

```python signature
hypergeometric_pfq(
    upper_parameters: Any,
    lower_parameters: Any,
    argument: Any,
) -> Expression
```

</details>

## jacobi_amplitude

<a id="entry-presentation_python_special_functions_capability_special_functions_jacobi_amplitude_api_session_jacobi_amplitude"></a>
<a id="placement-placement.python.python_module.module_jacobi_amplitude.bcc9ba96ede7"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
jacobi_amplitude(
    argument: ExpressionLike,
    parameter: ExpressionLike,
) -> Expression
```

The pinned Jacobi amplitude \(\operatorname{am}(u\mid m)\), with parameter \(m=k^2\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_jacobi_amplitude.033cc0b6ade5"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.jacobi_amplitude</code></p>

```python signature
jacobi_amplitude(
    argument: ExpressionLike,
    parameter: ExpressionLike,
) -> Expression
```

</details>

## jacobi_cn

<a id="entry-presentation_python_special_functions_capability_special_functions_jacobi_cn_api_session_jacobi_cn"></a>
<a id="placement-placement.python.python_module.module_jacobi_cn.ef9f43c6c15b"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
jacobi_cn(
    argument: ExpressionLike,
    parameter: ExpressionLike,
) -> Expression
```

Jacobi's elliptic function \(\operatorname{cn}(u\mid m)\), with parameter \(m=k^2\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_jacobi_cn.838844e73195"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.jacobi_cn</code></p>

```python signature
jacobi_cn(
    argument: ExpressionLike,
    parameter: ExpressionLike,
) -> Expression
```

</details>

## jacobi_dn

<a id="entry-presentation_python_special_functions_capability_special_functions_jacobi_dn_api_session_jacobi_dn"></a>
<a id="placement-placement.python.python_module.module_jacobi_dn.0d987137c1d8"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
jacobi_dn(
    argument: ExpressionLike,
    parameter: ExpressionLike,
) -> Expression
```

Jacobi's elliptic function \(\operatorname{dn}(u\mid m)\), with parameter \(m=k^2\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_jacobi_dn.d9719f1481c2"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.jacobi_dn</code></p>

```python signature
jacobi_dn(
    argument: ExpressionLike,
    parameter: ExpressionLike,
) -> Expression
```

</details>

## jacobi_polynomial

<a id="entry-presentation_python_special_functions_capability_special_functions_jacobi_polynomial_api_session_jacobi_polynomial"></a>
<a id="placement-placement.python.python_module.module_jacobi_polynomial.5d9827799e23"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
jacobi_polynomial(
    degree: ExpressionLike,
    first_parameter: ExpressionLike,
    second_parameter: ExpressionLike,
    argument: ExpressionLike,
) -> Expression
```

The Jacobi polynomial \(P_n^{(\alpha,\beta)}(x)\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_jacobi_polynomial.64fc0d037154"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.jacobi_polynomial</code></p>

```python signature
jacobi_polynomial(
    degree: ExpressionLike,
    first_parameter: ExpressionLike,
    second_parameter: ExpressionLike,
    argument: ExpressionLike,
) -> Expression
```

</details>

## jacobi_sn

<a id="entry-presentation_python_special_functions_capability_special_functions_jacobi_sn_api_session_jacobi_sn"></a>
<a id="placement-placement.python.python_module.module_jacobi_sn.acd020b3768d"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
jacobi_sn(
    argument: ExpressionLike,
    parameter: ExpressionLike,
) -> Expression
```

Jacobi's elliptic function \(\operatorname{sn}(u\mid m)\), with parameter \(m=k^2\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_jacobi_sn.42e4320c635b"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.jacobi_sn</code></p>

```python signature
jacobi_sn(
    argument: ExpressionLike,
    parameter: ExpressionLike,
) -> Expression
```

</details>

## jacobi_theta_1

<a id="entry-presentation_python_special_functions_capability_special_functions_jacobi_theta_1_api_session_jacobi_theta_1"></a>
<a id="placement-placement.python.python_module.module_jacobi_theta_1.2824d6af6ed1"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
jacobi_theta_1(
    argument: ExpressionLike,
    tau: ExpressionLike,
) -> Expression
```

Jacobi's first theta function \(\theta_1(z\mid\tau)\), with half-period ratio \(\tau\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_jacobi_theta_1.433614f2018d"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.jacobi_theta_1</code></p>

```python signature
jacobi_theta_1(
    argument: ExpressionLike,
    tau: ExpressionLike,
) -> Expression
```

</details>

## jacobi_theta_2

<a id="entry-presentation_python_special_functions_capability_special_functions_jacobi_theta_2_api_session_jacobi_theta_2"></a>
<a id="placement-placement.python.python_module.module_jacobi_theta_2.47ed91301e1f"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
jacobi_theta_2(
    argument: ExpressionLike,
    tau: ExpressionLike,
) -> Expression
```

Jacobi's second theta function \(\theta_2(z\mid\tau)\), with half-period ratio \(\tau\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_jacobi_theta_2.7f97046acb10"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.jacobi_theta_2</code></p>

```python signature
jacobi_theta_2(
    argument: ExpressionLike,
    tau: ExpressionLike,
) -> Expression
```

</details>

## jacobi_theta_3

<a id="entry-presentation_python_special_functions_capability_special_functions_jacobi_theta_3_api_session_jacobi_theta_3"></a>
<a id="placement-placement.python.python_module.module_jacobi_theta_3.40b6b95af764"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
jacobi_theta_3(
    argument: ExpressionLike,
    tau: ExpressionLike,
) -> Expression
```

Jacobi's third theta function \(\theta_3(z\mid\tau)\), with half-period ratio \(\tau\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_jacobi_theta_3.ceee5bc43fc4"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.jacobi_theta_3</code></p>

```python signature
jacobi_theta_3(
    argument: ExpressionLike,
    tau: ExpressionLike,
) -> Expression
```

</details>

## jacobi_theta_4

<a id="entry-presentation_python_special_functions_capability_special_functions_jacobi_theta_4_api_session_jacobi_theta_4"></a>
<a id="placement-placement.python.python_module.module_jacobi_theta_4.63583e3ae5cc"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
jacobi_theta_4(
    argument: ExpressionLike,
    tau: ExpressionLike,
) -> Expression
```

Jacobi's fourth theta function \(\theta_4(z\mid\tau)\), with half-period ratio \(\tau\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_jacobi_theta_4.d4c146604932"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.jacobi_theta_4</code></p>

```python signature
jacobi_theta_4(
    argument: ExpressionLike,
    tau: ExpressionLike,
) -> Expression
```

</details>

## laguerre_polynomial

<a id="entry-presentation_python_special_functions_capability_special_functions_laguerre_polynomial_api_session_laguerre_polynomial"></a>
<a id="placement-placement.python.python_module.module_laguerre_polynomial.fa6a108a7e43"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
laguerre_polynomial(
    degree: ExpressionLike,
    argument: ExpressionLike,
) -> Expression
```

The Laguerre polynomial, lowered to generalized Laguerre with parameter zero.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_laguerre_polynomial.26db128f463a"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.laguerre_polynomial</code></p>

```python signature
laguerre_polynomial(
    degree: ExpressionLike,
    argument: ExpressionLike,
) -> Expression
```

</details>

## legendre_polynomial

<a id="entry-presentation_python_special_functions_capability_special_functions_legendre_polynomial_api_session_legendre_polynomial"></a>
<a id="placement-placement.python.python_module.module_legendre_polynomial.e888215e86b2"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
legendre_polynomial(
    degree: ExpressionLike,
    argument: ExpressionLike,
) -> Expression
```

The Legendre polynomial \(P_n(x)\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_legendre_polynomial.d36238a04be6"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.legendre_polynomial</code></p>

```python signature
legendre_polynomial(
    degree: ExpressionLike,
    argument: ExpressionLike,
) -> Expression
```

</details>

## lerch_phi

<a id="entry-presentation_python_special_functions_capability_special_functions_lerch_phi_api_session_lerch_phi"></a>
<a id="placement-placement.python.python_module.module_lerch_phi.1dc5c9bba868"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
lerch_phi(argument: Any, order: Any, shift: Any) -> Expression
```

The principal Lerch transcendent \(\Phi(z, s, a)\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_lerch_phi.46a90ad2c2da"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.lerch_phi</code></p>

```python signature
lerch_phi(
    argument: ExpressionLike,
    order: ExpressionLike,
    shift: ExpressionLike,
) -> Expression
```

</details>

## log_gamma

<a id="entry-presentation_python_special_functions_capability_special_functions_log_gamma_api_session_log_gamma"></a>
<a id="placement-placement.python.python_module.module_log_gamma.72b9b1adff8c"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
log_gamma(x: Any) -> Expression
```

The principal-branch log-gamma function (not `log(gamma(x))` off the real axis).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_log_gamma.8d10f8895f42"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.log_gamma</code></p>

```python signature
log_gamma(x: Any) -> Expression
```

</details>

## meijer_g

<a id="entry-presentation_python_special_functions_capability_special_functions_meijer_g_api_session_meijer_g"></a>
<a id="placement-placement.python.python_module.module_meijer_g.e1235747d7bb"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
meijer_g(
    upper_numerator_parameters: Any,
    upper_denominator_parameters: Any,
    lower_numerator_parameters: Any,
    lower_denominator_parameters: Any,
    argument: Any,
) -> Expression
```

The Meijer G-function \(G_{p,q}^{m,n}\) from its four ordered parameter groups. The orders `m`, `n`, `p`, and `q` are read from the group lengths and are never supplied separately.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_meijer_g.7e3dafcc8ee5"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.meijer_g</code></p>

```python signature
meijer_g(
    upper_numerator_parameters: Any,
    upper_denominator_parameters: Any,
    lower_numerator_parameters: Any,
    lower_denominator_parameters: Any,
    argument: Any,
) -> Expression
```

</details>

## polygamma

<a id="entry-presentation_python_special_functions_capability_special_functions_polygamma_api_session_polygamma"></a>
<a id="placement-placement.python.python_module.module_polygamma.c31121e20084"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
polygamma(order: Any, x: Any) -> Expression
```

The polygamma function \(\psi^{(n)}(x)\), the order-th derivative of digamma; `polygamma(0, x)` reduces to `digamma(x)`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_polygamma.e82a3d78a52c"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.polygamma</code></p>

```python signature
polygamma(order: Any, x: Any) -> Expression
```

</details>

## polylogarithm

<a id="entry-presentation_python_special_functions_capability_special_functions_polylogarithm_api_session_polylogarithm"></a>
<a id="placement-placement.python.python_module.module_polylogarithm.9a8d6c19e530"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
polylogarithm(order: Any, argument: Any) -> Expression
```

The principal-branch polylogarithm \(\operatorname{Li}_s(z)\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_polylogarithm.6e31a0b33842"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.polylogarithm</code></p>

```python signature
polylogarithm(order: Any, argument: Any) -> Expression
```

</details>

## ultraspherical_polynomial

<a id="entry-presentation_python_special_functions_capability_special_functions_ultraspherical_polynomial_api_session_ultraspherical_polynomial"></a>
<a id="placement-placement.python.python_module.module_ultraspherical_polynomial.8990d481e4a3"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
ultraspherical_polynomial(
    degree: ExpressionLike,
    parameter: ExpressionLike,
    argument: ExpressionLike,
) -> Expression
```

The ultraspherical polynomial, lowered to the Gegenbauer head.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_ultraspherical_polynomial.8d171095fa05"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.ultraspherical_polynomial</code></p>

```python signature
ultraspherical_polynomial(
    degree: ExpressionLike,
    parameter: ExpressionLike,
    argument: ExpressionLike,
) -> Expression
```

</details>

## zeta

<a id="entry-presentation_python_special_functions_capability_special_functions_zeta_api_session_zeta"></a>
<a id="placement-placement.python.python_module.module_zeta.0c28cf4de55a"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
zeta(s: Any) -> Expression
```

The Riemann zeta function \(\zeta(s) = \sum_{k\geq 1} k^{-s}\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_zeta.ac939043bdfd"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.zeta</code></p>

```python signature
zeta(s: Any) -> Expression
```

</details>

## curl

<a id="entry-presentation_python_vector_calculus_capability_vector_calculus_curl_api_analysis_session_curl"></a>
<a id="placement-placement.python.python_module.module_curl.e9aa60545c09"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
curl(
    vector_components: Iterable[ExpressionLike],
    variables: Iterable[VariableLike],
) -> list[Expression]
```

\(\nabla\times F\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_curl.3670b00adb89"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.curl</code></p>

```python signature
curl(
    vector_components: Iterable[ExpressionLike],
    variables: Iterable[VariableLike],
) -> list[Expression]
```

</details>

## divergence

<a id="entry-presentation_python_vector_calculus_capability_vector_calculus_divergence_api_analysis_session_divergence"></a>
<a id="placement-placement.python.python_module.module_divergence.125245034036"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
divergence(
    vector_components: Iterable[ExpressionLike],
    variables: Iterable[VariableLike],
) -> Expression
```

\(\nabla\cdot F = \sum_i \partial F_i/\partial x_i\); component and variable counts must match.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_divergence.ecf6e1f2f1f8"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.divergence</code></p>

```python signature
divergence(
    vector_components: Iterable[ExpressionLike],
    variables: Iterable[VariableLike],
) -> Expression
```

</details>

## gradient

<a id="entry-presentation_python_vector_calculus_capability_vector_calculus_gradient_api_analysis_session_gradient"></a>
<a id="placement-placement.python.python_module.module_gradient.985a8845f0b7"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
gradient(
    scalar_field: ExpressionLike,
    variables: Iterable[VariableLike],
) -> list[Expression]
```

\(\nabla f\): the partial derivatives in the order of `variables`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_gradient.18e156275d2d"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.gradient</code></p>

```python signature
gradient(
    scalar_field: ExpressionLike,
    variables: Iterable[VariableLike],
) -> list[Expression]
```

</details>

## hessian

<a id="entry-presentation_python_vector_calculus_capability_vector_calculus_hessian_api_analysis_session_hessian"></a>
<a id="placement-placement.python.python_module.module_hessian.811dac19f650"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
hessian(
    scalar_field: ExpressionLike,
    variables: Iterable[VariableLike],
) -> Matrix
```

The \(n\times n\) matrix of second partials, computed as the Jacobian of the gradient; structurally symmetric on smooth input.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_hessian.2d3d09380b62"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.hessian</code></p>

```python signature
hessian(
    scalar_field: ExpressionLike,
    variables: Iterable[VariableLike],
) -> Matrix
```

</details>

## jacobian

<a id="entry-presentation_python_vector_calculus_capability_vector_calculus_jacobian_api_analysis_session_jacobian"></a>
<a id="placement-placement.python.python_module.module_jacobian.6c0a8d9d3157"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
jacobian(
    vector_components: Iterable[ExpressionLike],
    variables: Iterable[VariableLike],
) -> Matrix
```

The matrix with entry \((i, j) = \partial F_i/\partial x_j\) (rows index components, columns index variables).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_jacobian.87e30f06c196"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.jacobian</code></p>

```python signature
jacobian(
    vector_components: Iterable[ExpressionLike],
    variables: Iterable[VariableLike],
) -> Matrix
```

</details>

## jacobian

<a id="entry-presentation_python_vector_calculus_capability_vector_calculus_jacobian_api_partial_differential_equations_partialdifferentialequationcoordinatechange_jacobian"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationcoordinatechange_jacobian.bdb804adb3d1"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCoordinateChange property</p>

```python signature
jacobian: Expression
```

The exact forward-map Jacobian determinant.

## jacobian

<a id="entry-presentation_python_vector_calculus_capability_vector_calculus_jacobian_api_partial_differential_equations_partialdifferentialequationtransformationverificationreport_jacobian"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationtransformationverificationreport_jacobian.c4f07bc2066c"></a>
<p class="symi-entry-owner">PartialDifferentialEquationTransformationVerificationReport property</p>

```python signature
jacobian: Expression
```

The independently recomputed forward-map Jacobian.

## laplacian

<a id="entry-presentation_python_vector_calculus_capability_vector_calculus_laplacian_api_analysis_session_laplacian"></a>
<a id="placement-placement.python.python_module.module_laplacian.09b06509e9d5"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
laplacian(
    scalar_field: ExpressionLike,
    variables: Iterable[VariableLike],
) -> Expression
```

\(\Delta f = \nabla\cdot\nabla f\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_laplacian.4044f30b106a"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.laplacian</code></p>

```python signature
laplacian(
    scalar_field: ExpressionLike,
    variables: Iterable[VariableLike],
) -> Expression
```

</details>
