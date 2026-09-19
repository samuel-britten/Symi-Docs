# Complete placement index

## absolute_value

<a id="entry-presentation_swift_polynomials_capability_algebra_absolute_value_api_session_absolute_value"></a>
<a id="placement-placement.swift.swift_object.uniffisession_absolutevalue.e830fae29853"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func absoluteValue(argument: UniffiExpression) -> UniffiExpression
```

Provides the `absolute_value` operation on this mobile object.

## absolute_value

<a id="entry-presentation_swift_polynomials_capability_algebra_absolute_value_api_expression_absolute_value"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_absolutevalue.6dd3aae9d19d"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func absoluteValue() -> UniffiExpression
```

Provides the `absolute_value` operation on this mobile object.

## add

<a id="entry-presentation_swift_polynomials_capability_algebra_add_api_expression_add"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_add.2e029ecc008d"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func add(other: UniffiExpression) -> UniffiExpression
```

Entrywise sum of two matrices of the same shape.

## add

<a id="entry-presentation_swift_polynomials_capability_algebra_add_api_matrix_add"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_add.613832f65527"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func add(other: UniffiMatrix) -> UniffiMatrix
```

Entrywise sum of two matrices of the same shape.

## add_assumptions

<a id="entry-presentation_swift_assumptions_capability_algebra_add_assumptions_api_session_add_assumptions"></a>
<a id="placement-placement.swift.swift_object.uniffisession_addassumptions.fa255787959b"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func addAssumptions(proposition: UniffiAssumptionProposition) -> Void
```

Provides the `add_assumptions` operation on this mobile object.

## adjugate

<a id="entry-presentation_swift_linear_algebra_capability_algebra_adjugate_api_matrix_adjugate"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_adjugate.145c526eced5"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func adjugate() -> UniffiMatrix
```

The classical adjoint (transpose of the cofactor matrix); satisfies \(M\operatorname{adj}(M) = \det(M) I\).

## algebraic_assumption

<a id="entry-presentation_swift_assumptions_capability_algebra_algebraic_assumption_api_session_algebraic_assumption"></a>
<a id="placement-placement.swift.swift_object.uniffisession_algebraicassumption.6c368d6a57ac"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func algebraicAssumption(subject: UniffiExpression) -> UniffiAssumptionProposition
```

Provides the `algebraic_assumption` operation on this mobile object.

## and

<a id="entry-presentation_swift_assumptions_capability_algebra_and_api_assumptionproposition_and"></a>
<a id="placement-placement.swift.swift_object.uniffiassumptionproposition_and.6ac7a88ceb7d"></a>
<p class="symi-entry-owner">UniffiAssumptionProposition method</p>

```swift signature
func and(other: UniffiAssumptionProposition) -> UniffiAssumptionProposition
```

Provides the `and` operation on this mobile object.

## ask

<a id="entry-presentation_swift_assumptions_capability_algebra_ask_api_session_ask"></a>
<a id="placement-placement.swift.swift_object.uniffisession_ask.0c0006984973"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func ask(proposition: UniffiAssumptionProposition) -> UniffiTruthValue
```

Provides the `ask` operation on this mobile object.

## ask

<a id="entry-presentation_swift_assumptions_capability_algebra_ask_api_assumptionscope_ask"></a>
<a id="placement-placement.swift.swift_object.uniffiassumptionscope_ask.5025036e4885"></a>
<p class="symi-entry-owner">UniffiAssumptionScope method</p>

```swift signature
func ask(proposition: UniffiAssumptionProposition) -> UniffiTruthValue
```

Provides the `ask` operation on this mobile object.

## assuming

<a id="entry-presentation_swift_assumptions_capability_algebra_assuming_api_session_assuming"></a>
<a id="placement-placement.swift.swift_object.uniffisession_assuming.0c8d2bd1e320"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func assuming(proposition: UniffiAssumptionProposition) -> UniffiAssumptionScope
```

Provides the `assuming` operation on this mobile object.

## assuming

<a id="entry-presentation_swift_assumptions_capability_algebra_assuming_api_assumptionscope_assuming"></a>
<a id="placement-placement.swift.swift_object.uniffiassumptionscope_assuming.3cbffeb9c1ab"></a>
<p class="symi-entry-owner">UniffiAssumptionScope method</p>

```swift signature
func assuming(proposition: UniffiAssumptionProposition) -> UniffiAssumptionScope
```

Provides the `assuming` operation on this mobile object.

## assumption_proposition_from_logical_expression

<a id="entry-presentation_swift_assumptions_capability_algebra_assumption_proposition_from_logical_expression_api_session_assumption_proposition_from_logical_expression"></a>
<a id="placement-placement.swift.swift_object.uniffisession_assumptionpropositionfromlogicalexpression.31ad9b84f19a"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func assumptionPropositionFromLogicalExpression(logicalExpression: UniffiExpression) -> UniffiAssumptionProposition
```

Provides the `assumption_proposition_from_logical_expression` operation on this mobile object.

## blocks

<a id="entry-presentation_swift_matrix_functions_capability_algebra_blocks_api_results_jordandecomposition_blocks"></a>
<a id="placement-placement.swift.swift_object.uniffijordandecomposition_blocks.688d7d6a1aee"></a>
<p class="symi-entry-owner">UniffiJordanDecomposition method</p>

```swift signature
func blocks() -> [UniffiJordanBlock]
```

The Jordan blocks, in the order they appear on the diagonal.

## canonical_form

<a id="entry-presentation_swift_matrix_canonical_forms_capability_algebra_canonical_form_api_results_rationalcanonicalform_canonical_form"></a>
<a id="placement-placement.swift.swift_object.uniffirationalcanonicalform_canonicalform.6c5103ed459c"></a>
<p class="symi-entry-owner">UniffiRationalCanonicalForm method</p>

```swift signature
func canonicalForm() -> UniffiMatrix
```

The Frobenius canonical form of the decomposed matrix.

## cell_count

<a id="entry-presentation_swift_cad_capability_algebra_cell_count_api_cylindricalalgebraicdecomposition_cell_count"></a>
<a id="placement-placement.swift.swift_object.unifficylindricalalgebraicdecomposition_cellcount.a9de1a02311a"></a>
<p class="symi-entry-owner">UniffiCylindricalAlgebraicDecomposition method</p>

```swift signature
func cellCount() -> UInt64
```

The number of full-dimensional cells partitioning \(\mathbb{R}^n\).

## cell_dimension

<a id="entry-presentation_swift_cad_capability_algebra_cell_dimension_api_cylindricalalgebraicdecomposition_cell_dimension"></a>
<a id="placement-placement.swift.swift_object.unifficylindricalalgebraicdecomposition_celldimension.9a37261324c3"></a>
<p class="symi-entry-owner">UniffiCylindricalAlgebraicDecomposition method</p>

```swift signature
func cellDimension(index: UInt64) -> UInt64
```

The geometric dimension of the full cell as a subset of \(\mathbb{R}^n\) (the number of sector coordinates along its cylindrical stack).

## cell_kind

<a id="entry-presentation_swift_cad_capability_algebra_cell_kind_api_cylindricalalgebraicdecomposition_cell_kind"></a>
<a id="placement-placement.swift.swift_object.unifficylindricalalgebraicdecomposition_cellkind.1c34be926a47"></a>
<p class="symi-entry-owner">UniffiCylindricalAlgebraicDecomposition method</p>

```swift signature
func cellKind(index: UInt64) -> UniffiCadCellKind
```

`"section"` or `"sector"` — whether the cell is a root section or an open interval in its top variable.

## cell_sample_point

<a id="entry-presentation_swift_cad_capability_algebra_cell_sample_point_api_cylindricalalgebraicdecomposition_cell_sample_point"></a>
<a id="placement-placement.swift.swift_object.unifficylindricalalgebraicdecomposition_cellsamplepoint.424e7d4d53a3"></a>
<p class="symi-entry-owner">UniffiCylindricalAlgebraicDecomposition method</p>

```swift signature
func cellSamplePoint(index: UInt64) -> [Double]
```

The coordinates of the full cell's sample point as floats — a numeric view via the multi-precision evaluator, not a decision.

## cell_sign_vector

<a id="entry-presentation_swift_cad_capability_algebra_cell_sign_vector_api_cylindricalalgebraicdecomposition_cell_sign_vector"></a>
<a id="placement-placement.swift.swift_object.unifficylindricalalgebraicdecomposition_cellsignvector.885efaa61bef"></a>
<p class="symi-entry-owner">UniffiCylindricalAlgebraicDecomposition method</p>

```swift signature
func cellSignVector(index: UInt64) -> [Int64]
```

The exact sign (\(-1\), \(0\), or \(+1\)) of each input polynomial on the full cell, in input order.

## change_monomial_order

<a id="entry-presentation_swift_polynomials_capability_algebra_change_monomial_order_api_algebra_session_change_monomial_order"></a>
<a id="placement-placement.swift.swift_object.uniffisession_changemonomialorder.affdcb526086"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func changeMonomialOrder(
    basis: [UniffiExpression],
    variables: [String],
    sourceOrder: UniffiMonomialOrdering,
    targetOrder: UniffiMonomialOrdering,
) -> [UniffiExpression]?
```

Convert a Gröbner basis of a zero-dimensional ideal from `source_order` to `target_order` by FGLM (Faugère–Gianni–Lazard–Mora) — linear algebra in the finite-dimensional quotient ring \(\mathbb{Q}[\text{variables}]/I\), far cheaper than computing the target basis directly (the msolve route to a lexicographic basis is a cheap `degrevlex` basis followed by this conversion).

## characteristic_polynomial

<a id="entry-presentation_swift_linear_algebra_capability_algebra_characteristic_polynomial_api_matrix_operations_matrix_characteristic_polynomial"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_characteristicpolynomial.4fe0c9f2b400"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func characteristicPolynomial(variable: String) -> UniffiExpression
```

\(\det(\lambda I - M)\) as a polynomial in the named variable.

## characteristic_polynomial

<a id="entry-presentation_swift_linear_algebra_capability_algebra_characteristic_polynomial_api_results_rationalcanonicalform_characteristic_polynomial"></a>
<a id="placement-placement.swift.swift_object.uniffirationalcanonicalform_characteristicpolynomial.c12f82010f35"></a>
<p class="symi-entry-owner">UniffiRationalCanonicalForm method</p>

```swift signature
func characteristicPolynomial() -> UniffiExpression
```

\(\det(\lambda I - M)\) as a polynomial in the named variable.

## clear_all_assumptions

<a id="entry-presentation_swift_assumptions_capability_algebra_clear_all_assumptions_api_session_clear_all_assumptions"></a>
<a id="placement-placement.swift.swift_object.uniffisession_clearallassumptions.718b639c5307"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func clearAllAssumptions() -> Void
```

Provides the `clear_all_assumptions` operation on this mobile object.

## coefficient

<a id="entry-presentation_swift_polynomials_capability_algebra_coefficient_api_algebra_session_coefficient"></a>
<a id="placement-placement.swift.swift_object.uniffisession_coefficient.ec55f5d254c7"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func coefficient(
    inputExpression: UniffiExpression,
    variable: String,
    power: UInt64,
) -> UniffiExpression
```

Coefficient of `variable^power`; integer 0 when the term is absent. Errors on non-polynomial input.

## coefficient

<a id="entry-presentation_swift_polynomials_capability_algebra_coefficient_api_partial_differential_equations_partialdifferentialequationjetcoefficient_coefficient"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationjetcoefficient_coefficient.6ba74d2c787f"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationJetCoefficient method</p>

```swift signature
func coefficient() -> UniffiExpression
```

The exact coefficient expression.

## coefficient

<a id="entry-presentation_swift_polynomials_capability_algebra_coefficient_api_partial_differential_equations_partialdifferentialequationprincipalcoefficient_coefficient"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationprincipalcoefficient_coefficient.db70f03f67e2"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPrincipalCoefficient method</p>

```swift signature
func coefficient() -> UniffiExpression
```

The raw coefficient expression, before mixed terms are halved.

## cofactor_matrix

<a id="entry-presentation_swift_linear_algebra_capability_algebra_cofactor_matrix_api_matrix_cofactor_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_cofactormatrix.8edcab610a75"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func cofactorMatrix() -> UniffiMatrix
```

The matrix of cofactors, whose transpose is the adjugate.

## column_hermite_normal_form

<a id="entry-presentation_swift_matrix_canonical_forms_capability_algebra_column_hermite_normal_form_api_matrix_operations_matrix_column_hermite_normal_form"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_columnhermitenormalform.45ba72ee7456"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func columnHermiteNormalForm() -> UniffiHermiteNormalFormDecomposition
```

The transpose-dual column form, returning `H`, a unimodular `V` satisfying \(M V = H\), the rank, and pivot metadata. Notes: WASM returns a `hermite_normal_form_decomposition` object.

## column_transformation

<a id="entry-presentation_swift_matrix_canonical_forms_capability_algebra_column_transformation_api_results_smithnormalformdecomposition_column_transformation"></a>
<a id="placement-placement.swift.swift_object.uniffismithnormalformdecomposition_columntransformation.f57ef026d390"></a>
<p class="symi-entry-owner">UniffiSmithNormalFormDecomposition method</p>

```swift signature
func columnTransformation() -> UniffiMatrix
```

The unimodular column transformation `V` satisfying `U * matrix * V == S`.

## columns

<a id="entry-presentation_swift_matrix_construction_capability_algebra_columns_api_matrix_columns"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_columns.4d50379839e3"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func columns() -> UInt64
```

Number of columns.

## complex_assumption

<a id="entry-presentation_swift_assumptions_capability_algebra_complex_assumption_api_session_complex_assumption"></a>
<a id="placement-placement.swift.swift_object.uniffisession_complexassumption.14b12126c031"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func complexAssumption(subject: UniffiExpression) -> UniffiAssumptionProposition
```

Provides the `complex_assumption` operation on this mobile object.

## complex_entries

<a id="entry-presentation_swift_polynomials_capability_algebra_complex_entries_api_session_complex_entries"></a>
<a id="placement-placement.swift.swift_object.uniffisession_complexentries.99b7925b679e"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func complexEntries(subject: UniffiMatrix) -> UniffiAssumptionProposition
```

Provides the `complex_entries` operation on this mobile object.

## composite_assumption

<a id="entry-presentation_swift_assumptions_capability_algebra_composite_assumption_api_session_composite_assumption"></a>
<a id="placement-placement.swift.swift_object.uniffisession_compositeassumption.db30dc0b9a45"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func compositeAssumption(subject: UniffiExpression) -> UniffiAssumptionProposition
```

Provides the `composite_assumption` operation on this mobile object.

## congruence_modulus

<a id="entry-presentation_swift_assumptions_capability_algebra_congruence_modulus_api_assumptionproposition_congruence_modulus"></a>
<a id="placement-placement.swift.swift_object.uniffiassumptionproposition_congruencemodulus.5dff126ededb"></a>
<p class="symi-entry-owner">UniffiAssumptionProposition method</p>

```swift signature
func congruenceModulus() -> UniffiExpression?
```

Provides the `congruence_modulus` operation on this mobile object.

## congruent_assumption

<a id="entry-presentation_swift_assumptions_capability_algebra_congruent_assumption_api_defaults_session_congruent_assumption"></a>
<a id="placement-placement.swift.swift_object.uniffisession_congruentassumption.ddedeba63093"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func congruentAssumption(
    left: UniffiExpression,
    right: UniffiExpression,
    modulus: UniffiExpression,
) -> UniffiAssumptionProposition
```

Provides the `congruent_assumption` operation on this mobile object.

## cosine

<a id="entry-presentation_swift_matrix_functions_capability_algebra_cosine_api_matrix_operations_matrix_cosine"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_cosine.d438b40efe5f"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func cosine() -> UniffiMatrix
```

The primary matrix cosine `cos(M)`, evaluated exactly through the certified Jordan decomposition and the trigonometric identity certificate.

## could_hold

<a id="entry-presentation_swift_assumptions_capability_algebra_could_hold_api_session_could_hold"></a>
<a id="placement-placement.swift.swift_object.uniffisession_couldhold.298e72c27693"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func couldHold(proposition: UniffiAssumptionProposition) -> UniffiTruthValue
```

Provides the `could_hold` operation on this mobile object.

## could_hold

<a id="entry-presentation_swift_assumptions_capability_algebra_could_hold_api_assumptionscope_could_hold"></a>
<a id="placement-placement.swift.swift_object.uniffiassumptionscope_couldhold.0f01d9d1216a"></a>
<p class="symi-entry-owner">UniffiAssumptionScope method</p>

```swift signature
func couldHold(proposition: UniffiAssumptionProposition) -> UniffiTruthValue
```

Provides the `could_hold` operation on this mobile object.

## cylindrical_algebraic_decomposition

<a id="entry-presentation_swift_polynomials_capability_algebra_cylindrical_algebraic_decomposition_api_session_cylindrical_algebraic_decomposition"></a>
<a id="placement-placement.swift.swift_object.uniffisession_cylindricalalgebraicdecomposition.848e026e0115"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func cylindricalAlgebraicDecomposition(
    expressions: [UniffiExpression],
    variables: [String],
    equationalConstraints: [UInt64],
) -> UniffiCylindricalAlgebraicDecomposition
```

Construct the CAD of the polynomials in the given variable order \(x_1,\ldots,x_n\); projection eliminates \(x_n\) first).

## defined_assumption

<a id="entry-presentation_swift_assumptions_capability_algebra_defined_assumption_api_session_defined_assumption"></a>
<a id="placement-placement.swift.swift_object.uniffisession_definedassumption.1f2338dbf585"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func definedAssumption(subject: UniffiExpression) -> UniffiAssumptionProposition
```

Provides the `defined_assumption` operation on this mobile object.

## degree

<a id="entry-presentation_swift_polynomials_capability_algebra_degree_api_algebra_session_degree"></a>
<a id="placement-placement.swift.swift_object.uniffisession_degree.e65c61e5d63c"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func degree(
    inputExpression: UniffiExpression,
    variable: String,
) -> UInt64?
```

Degree in `variable`.

## deserialize_assumption_proposition

<a id="entry-presentation_swift_assumptions_capability_algebra_deserialize_assumption_proposition_api_session_deserialize_assumption_proposition"></a>
<a id="placement-placement.swift.swift_object.uniffisession_deserializeassumptionproposition.2b2cc7ba0175"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func deserializeAssumptionProposition(text: String) -> UniffiAssumptionProposition
```

Provides the `deserialize_assumption_proposition` operation on this mobile object.

## determinant

<a id="entry-presentation_swift_linear_algebra_capability_algebra_determinant_api_matrix_determinant"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_determinant.9b8b65dc12bf"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func determinant() -> UniffiExpression
```

Fraction-free (Berkowitz/Bareiss) determinant of a square matrix.

## diagonal_matrix

<a id="entry-presentation_swift_polynomials_capability_algebra_diagonal_matrix_api_session_diagonal_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffisession_diagonalmatrix.23ce19207678"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func diagonalMatrix(subject: UniffiMatrix) -> UniffiAssumptionProposition
```

Provides the `diagonal_matrix` operation on this mobile object.

## eigenvalue

<a id="entry-presentation_swift_linear_algebra_capability_algebra_eigenvalue_api_results_eigenpair_eigenvalue"></a>
<a id="placement-placement.swift.swift_object.uniffieigenpair_eigenvalue.213006073e3e"></a>
<p class="symi-entry-owner">UniffiEigenpair method</p>

```swift signature
func eigenvalue() -> UniffiExpression
```

The eigenvalue of the pair.

## eigenvalue

<a id="entry-presentation_swift_linear_algebra_capability_algebra_eigenvalue_api_results_jordanblock_eigenvalue"></a>
<a id="placement-placement.swift.swift_object.uniffijordanblock_eigenvalue.50b40ad7d71e"></a>
<p class="symi-entry-owner">UniffiJordanBlock method</p>

```swift signature
func eigenvalue() -> UniffiExpression
```

The eigenvalue this Jordan block belongs to.

## eigenvalues

<a id="entry-presentation_swift_linear_algebra_capability_algebra_eigenvalues_api_matrix_eigenvalues"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_eigenvalues.5830e0c56f1e"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func eigenvalues() -> [UniffiExpression]
```

Eigenvalues with multiplicity, via the characteristic polynomial and the root finder; eigenvalues the root finder cannot close remain as exact first-class `polynomial_root` values.

## eigenvectors

<a id="entry-presentation_swift_linear_algebra_capability_algebra_eigenvectors_api_matrix_operations_matrix_eigenvectors"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_eigenvectors.7523a76aa65b"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func eigenvectors() -> [UniffiEigenpair]
```

For each eigenvalue, a basis of its eigenspace as column matrices. Notes: WASM returns `eigenpair` objects with `eigenvalue`/`vectors` getters.

## elimination_ideal

<a id="entry-presentation_swift_polynomials_capability_algebra_elimination_ideal_api_algebra_session_elimination_ideal"></a>
<a id="placement-placement.swift.swift_object.uniffisession_eliminationideal.ba376abbbe63"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func eliminationIdeal(
    generators: [UniffiExpression],
    variables: [String],
    eliminate: [String],
) -> [UniffiExpression]?
```

A Gröbner basis of the elimination ideal \(\langle\operatorname{generators}\rangle \cap \mathbb{Q}[\text{surviving variables}]\), projecting away the variables named in `eliminate` via the Elimination Theorem (a block order ranks the eliminated variables high and the generators free of them are kept).

## entry

<a id="entry-presentation_swift_matrix_construction_capability_algebra_entry_api_matrix_entry"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_entry.7eb42040599b"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func entry(row: UInt64, column: UInt64) -> UniffiExpression
```

Element access. Notes: Python uses indexing `m[row, column]` instead.

## equal_assumption

<a id="entry-presentation_swift_assumptions_capability_algebra_equal_assumption_api_defaults_session_equal_assumption"></a>
<a id="placement-placement.swift.swift_object.uniffisession_equalassumption.7f6a866dd7d2"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func equalAssumption(
    left: UniffiExpression,
    right: UniffiExpression,
) -> UniffiAssumptionProposition
```

Provides the `equal_assumption` operation on this mobile object.

## even_assumption

<a id="entry-presentation_swift_assumptions_capability_algebra_even_assumption_api_session_even_assumption"></a>
<a id="placement-placement.swift.swift_object.uniffisession_evenassumption.eb455d3c7e37"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func evenAssumption(subject: UniffiExpression) -> UniffiAssumptionProposition
```

Provides the `even_assumption` operation on this mobile object.

## exponential

<a id="entry-presentation_swift_matrix_functions_capability_algebra_exponential_api_matrix_operations_matrix_exponential"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_exponential.93ee82df1e80"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func exponential() -> UniffiMatrix
```

The matrix exponential `exp(M)`, evaluated through the certified Jordan decomposition. Declines on inputs whose eigenvalues cannot be certified exactly.

## extended_real_assumption

<a id="entry-presentation_swift_assumptions_capability_algebra_extended_real_assumption_api_session_extended_real_assumption"></a>
<a id="placement-placement.swift.swift_object.uniffisession_extendedrealassumption.93149f42d6ca"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func extendedRealAssumption(subject: UniffiExpression) -> UniffiAssumptionProposition
```

Provides the `extended_real_assumption` operation on this mobile object.

## finite_assumption

<a id="entry-presentation_swift_assumptions_capability_algebra_finite_assumption_api_session_finite_assumption"></a>
<a id="placement-placement.swift.swift_object.uniffisession_finiteassumption.dd3e29eb286b"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func finiteAssumption(subject: UniffiExpression) -> UniffiAssumptionProposition
```

Provides the `finite_assumption` operation on this mobile object.

## free_rank

<a id="entry-presentation_swift_matrix_canonical_forms_capability_algebra_free_rank_api_results_integercokerneldata_free_rank"></a>
<a id="placement-placement.swift.swift_object.uniffiintegercokerneldata_freerank.55f161ee19c3"></a>
<p class="symi-entry-owner">UniffiIntegerCokernelData method</p>

```swift signature
func freeRank() -> UInt64
```

Rank of the free part of the cokernel.

## full_rank_matrix

<a id="entry-presentation_swift_polynomials_capability_algebra_full_rank_matrix_api_session_full_rank_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffisession_fullrankmatrix.55c31ae64b31"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func fullRankMatrix(subject: UniffiMatrix) -> UniffiAssumptionProposition
```

Provides the `full_rank_matrix` operation on this mobile object.

## greater_assumption

<a id="entry-presentation_swift_assumptions_capability_algebra_greater_assumption_api_defaults_session_greater_assumption"></a>
<a id="placement-placement.swift.swift_object.uniffisession_greaterassumption.7e82fd06ea5e"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func greaterAssumption(
    left: UniffiExpression,
    right: UniffiExpression,
) -> UniffiAssumptionProposition
```

Provides the `greater_assumption` operation on this mobile object.

## greater_or_equal_assumption

<a id="entry-presentation_swift_assumptions_capability_algebra_greater_or_equal_assumption_api_defaults_session_greater_or_equal_assumption"></a>
<a id="placement-placement.swift.swift_object.uniffisession_greaterorequalassumption.82a8d9a0ba56"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func greaterOrEqualAssumption(
    left: UniffiExpression,
    right: UniffiExpression,
) -> UniffiAssumptionProposition
```

Provides the `greater_or_equal_assumption` operation on this mobile object.

## groebner_basis

<a id="entry-presentation_swift_polynomials_capability_algebra_groebner_basis_api_algebra_session_groebner_basis"></a>
<a id="placement-placement.swift.swift_object.uniffisession_groebnerbasis.41e30f4970c9"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func groebnerBasis(
    generators: [UniffiExpression],
    variables: [String],
    order: UniffiMonomialOrdering,
) -> [UniffiExpression]?
```

The canonical reduced Gröbner basis of the ideal `<generators>` under the named monomial order — monic, autoreduced, and sorted, so it is unique for the `(ideal, order)` pair. `None` when any generator is outside \(\mathbb{Q}[\text{variables}]\).

## has_complex_entries

<a id="entry-presentation_swift_polynomials_capability_algebra_has_complex_entries_api_matrix_has_complex_entries"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_hascomplexentries.0eade1c68cde"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func hasComplexEntries() -> UniffiTruthValue
```

Query whether every entry is finite complex.

## has_integer_entries

<a id="entry-presentation_swift_polynomials_capability_algebra_has_integer_entries_api_matrix_has_integer_entries"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_hasintegerentries.a6abde96fe2f"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func hasIntegerEntries() -> UniffiTruthValue
```

Query whether every entry is an integer.

## has_real_entries

<a id="entry-presentation_swift_polynomials_capability_algebra_has_real_entries_api_matrix_has_real_entries"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_hasrealentries.2454112d2884"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func hasRealEntries() -> UniffiTruthValue
```

Query whether every entry is real.

## hermite

<a id="entry-presentation_swift_matrix_canonical_forms_capability_algebra_hermite_api_results_hermitenormalformdecomposition_hermite"></a>
<a id="placement-placement.swift.swift_object.uniffihermitenormalformdecomposition_hermite.91fdd7e3561d"></a>
<p class="symi-entry-owner">UniffiHermiteNormalFormDecomposition method</p>

```swift signature
func hermite() -> UniffiMatrix
```

The Hermite normal form `H`.

## hermite_normal_form

<a id="entry-presentation_swift_matrix_canonical_forms_capability_algebra_hermite_normal_form_api_matrix_operations_matrix_hermite_normal_form"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_hermitenormalform.16925cab8962"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func hermiteNormalForm() -> UniffiHermiteNormalFormDecomposition
```

Returns the canonical row-oriented Hermite normal form `H`, a unimodular transformation `U` satisfying \(U M = H\), the rank, and the strictly increasing pivot-column indices. Entries must be exact integers. Every result is verified for Hermite shape, the certificate identity, and unimodularity before return. Notes: WASM returns a `hermite_normal_form_decomposition` object carrying the same four results as getters.

## hermitian_matrix

<a id="entry-presentation_swift_polynomials_capability_algebra_hermitian_matrix_api_session_hermitian_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffisession_hermitianmatrix.858453b2be51"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func hermitianMatrix(subject: UniffiMatrix) -> UniffiAssumptionProposition
```

Provides the `hermitian_matrix` operation on this mobile object.

## hyperbolic_cosine

<a id="entry-presentation_swift_matrix_functions_capability_algebra_hyperbolic_cosine_api_matrix_operations_matrix_hyperbolic_cosine"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_hyperboliccosine.53096969265f"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func hyperbolicCosine() -> UniffiMatrix
```

The primary hyperbolic matrix cosine `cosh(M)`, evaluated exactly through the certified Jordan decomposition and the hyperbolic identity certificate.

## hyperbolic_sine

<a id="entry-presentation_swift_matrix_functions_capability_algebra_hyperbolic_sine_api_matrix_operations_matrix_hyperbolic_sine"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_hyperbolicsine.7e06201f4b13"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func hyperbolicSine() -> UniffiMatrix
```

The primary hyperbolic matrix sine `sinh(M)`, evaluated exactly through the certified Jordan decomposition. The result is certified together with the hyperbolic matrix cosine by `cosh(M)^2 - sinh(M)^2 = I`.

## ideal_intersection

<a id="entry-presentation_swift_polynomials_capability_algebra_ideal_intersection_api_algebra_session_ideal_intersection"></a>
<a id="placement-placement.swift.swift_object.uniffisession_idealintersection.df75b54ba807"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func idealIntersection(
    generatorsLeft: [UniffiExpression],
    generatorsRight: [UniffiExpression],
    variables: [String],
    order: UniffiMonomialOrdering,
) -> [UniffiExpression]?
```

A generating set of the ideal intersection \(I \cap J\), computed by the standard tag-variable elimination construction \(t I + (1-t) J\).

## ideal_membership

<a id="entry-presentation_swift_polynomials_capability_algebra_ideal_membership_api_algebra_session_ideal_membership"></a>
<a id="placement-placement.swift.swift_object.uniffisession_idealmembership.c210256aa1ae"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func idealMembership(
    element: UniffiExpression,
    generators: [UniffiExpression],
    variables: [String],
    order: UniffiMonomialOrdering,
) -> Bool?
```

Whether `element` lies in the ideal `<generators>`, decided by reducing it to its normal form modulo the Gröbner basis (zero exactly when it is a member).

## ideal_product

<a id="entry-presentation_swift_polynomials_capability_algebra_ideal_product_api_algebra_session_ideal_product"></a>
<a id="placement-placement.swift.swift_object.uniffisession_idealproduct.fb08f53b3c6d"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func idealProduct(
    generatorsLeft: [UniffiExpression],
    generatorsRight: [UniffiExpression],
    variables: [String],
    order: UniffiMonomialOrdering,
) -> [UniffiExpression]?
```

A Gröbner basis of the ideal product \(I J\), generated by all pairwise products of the two generator lists. `None` on a non-\(\mathbb{Q}[\text{variables}]\) generator.

## ideal_sum

<a id="entry-presentation_swift_polynomials_capability_algebra_ideal_sum_api_algebra_session_ideal_sum"></a>
<a id="placement-placement.swift.swift_object.uniffisession_idealsum.f6c76cfd9b80"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func idealSum(
    generatorsLeft: [UniffiExpression],
    generatorsRight: [UniffiExpression],
    variables: [String],
    order: UniffiMonomialOrdering,
) -> [UniffiExpression]?
```

A Gröbner basis of the ideal sum `I + J`, the ideal generated by the two generator lists together. `None` on a non-\(\mathbb{Q}[\text{variables}]\) generator.

## identity_matrix

<a id="entry-presentation_swift_polynomials_capability_algebra_identity_matrix_api_session_identity_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffisession_identitymatrix.796c1008fa8e"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func identityMatrix(subject: UniffiMatrix) -> UniffiAssumptionProposition
```

Provides the `identity_matrix` operation on this mobile object.

## implicitize

<a id="entry-presentation_swift_polynomials_capability_algebra_implicitize_api_algebra_session_implicitize"></a>
<a id="placement-placement.swift.swift_object.uniffisession_implicitize.a9f78d345293"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func implicitize(
    coordinates: [String],
    parameters: [String],
    parametricExpressions: [UniffiExpression],
) -> [UniffiExpression]?
```

The implicit ideal of a parametric curve or surface \(x_i = f_i(\operatorname{parameters})\) (the i-th coordinate paired with the i-th parametric expression), returned as a generator list over \(\mathbb{Q}[\text{coordinates}]\) — the elimination of the parameters (Cox–Little–O'Shea ch. 3).

## infinite_assumption

<a id="entry-presentation_swift_assumptions_capability_algebra_infinite_assumption_api_session_infinite_assumption"></a>
<a id="placement-placement.swift.swift_object.uniffisession_infiniteassumption.5f0ffd93265c"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func infiniteAssumption(subject: UniffiExpression) -> UniffiAssumptionProposition
```

Provides the `infinite_assumption` operation on this mobile object.

## integer_assumption

<a id="entry-presentation_swift_assumptions_capability_algebra_integer_assumption_api_session_integer_assumption"></a>
<a id="placement-placement.swift.swift_object.uniffisession_integerassumption.42b0ac0add7b"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func integerAssumption(subject: UniffiExpression) -> UniffiAssumptionProposition
```

Provides the `integer_assumption` operation on this mobile object.

## integer_cokernel_structure

<a id="entry-presentation_swift_matrix_canonical_forms_capability_algebra_integer_cokernel_structure_api_matrix_operations_matrix_integer_cokernel_structure"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_integercokernelstructure.eedc8e2f2d6d"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func integerCokernelStructure() -> UniffiIntegerCokernelData
```

Returns the free rank and nontrivial torsion invariant factors of `Z^m / M Z^n`.

## integer_entries

<a id="entry-presentation_swift_polynomials_capability_algebra_integer_entries_api_session_integer_entries"></a>
<a id="placement-placement.swift.swift_object.uniffisession_integerentries.7c1e9edc5402"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func integerEntries(subject: UniffiMatrix) -> UniffiAssumptionProposition
```

Provides the `integer_entries` operation on this mobile object.

## integer_image_lattice_basis

<a id="entry-presentation_swift_matrix_canonical_forms_capability_algebra_integer_image_lattice_basis_api_matrix_operations_matrix_integer_image_lattice_basis"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_integerimagelatticebasis.d83919f36d6a"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func integerImageLatticeBasis() -> [UniffiMatrix]
```

The nonzero columns of the column Hermite form, returned as column matrices; these form the canonical basis of `M Z^n`.

## integer_kernel_basis

<a id="entry-presentation_swift_matrix_canonical_forms_capability_algebra_integer_kernel_basis_api_matrix_operations_matrix_integer_kernel_basis"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_integerkernelbasis.e889877e3636"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func integerKernelBasis() -> [UniffiMatrix]
```

A canonical basis of the integer kernel \(\{x \in \mathbb{Z}^n : M x = 0\}\), returned as column matrices.

## integer_row_lattice_basis

<a id="entry-presentation_swift_matrix_canonical_forms_capability_algebra_integer_row_lattice_basis_api_matrix_operations_matrix_integer_row_lattice_basis"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_integerrowlatticebasis.6e5b82d21c83"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func integerRowLatticeBasis() -> [UniffiMatrix]
```

The nonzero rows of the row Hermite form, returned as row matrices; these form the canonical basis of the integer row lattice.

## invariant_factors

<a id="entry-presentation_swift_matrix_canonical_forms_capability_algebra_invariant_factors_api_results_rationalcanonicalform_invariant_factors"></a>
<a id="placement-placement.swift.swift_object.uniffirationalcanonicalform_invariantfactors.b71e616e9a67"></a>
<p class="symi-entry-owner">UniffiRationalCanonicalForm method</p>

```swift signature
func invariantFactors() -> [UniffiExpression]
```

The certified invariant factors, monic and ordered by divisibility.

## invariant_factors

<a id="entry-presentation_swift_matrix_canonical_forms_capability_algebra_invariant_factors_api_results_smithnormalformdecomposition_invariant_factors"></a>
<a id="placement-placement.swift.swift_object.uniffismithnormalformdecomposition_invariantfactors.f66390cfec57"></a>
<p class="symi-entry-owner">UniffiSmithNormalFormDecomposition method</p>

```swift signature
func invariantFactors() -> [UniffiExpression]
```

The certified invariant factors, monic and ordered by divisibility.

## inverse

<a id="entry-presentation_swift_linear_algebra_capability_algebra_inverse_api_matrix_inverse"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_inverse.12b233d9d355"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func inverse() -> UniffiMatrix
```

Inverse via the adjugate; raises on singular input.

## invertible_matrix

<a id="entry-presentation_swift_polynomials_capability_algebra_invertible_matrix_api_session_invertible_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffisession_invertiblematrix.fac62ff7dabd"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func invertibleMatrix(subject: UniffiMatrix) -> UniffiAssumptionProposition
```

Provides the `invertible_matrix` operation on this mobile object.

## irrational_assumption

<a id="entry-presentation_swift_assumptions_capability_algebra_irrational_assumption_api_session_irrational_assumption"></a>
<a id="placement-placement.swift.swift_object.uniffisession_irrationalassumption.4a60885215fb"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func irrationalAssumption(subject: UniffiExpression) -> UniffiAssumptionProposition
```

Provides the `irrational_assumption` operation on this mobile object.

## is_algebraic

<a id="entry-presentation_swift_polynomials_capability_algebra_is_algebraic_api_expression_is_algebraic"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_isalgebraic.72f4eab85a10"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func isAlgebraic() -> UniffiTruthValue
```

Provides the `is_algebraic` operation on this mobile object.

## is_complex

<a id="entry-presentation_swift_polynomials_capability_algebra_is_complex_api_expression_is_complex"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_iscomplex.e71c8146d2ec"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func isComplex() -> UniffiTruthValue
```

Provides the `is_complex` operation on this mobile object.

## is_composite

<a id="entry-presentation_swift_polynomials_capability_algebra_is_composite_api_expression_is_composite"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_iscomposite.f7042f26b81b"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func isComposite() -> UniffiTruthValue
```

Provides the `is_composite` operation on this mobile object.

## is_diagonal_matrix

<a id="entry-presentation_swift_polynomials_capability_algebra_is_diagonal_matrix_api_matrix_is_diagonal_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_isdiagonalmatrix.ea18d09ee5bc"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isDiagonalMatrix() -> UniffiTruthValue
```

Query whether this matrix is diagonal.

## is_even

<a id="entry-presentation_swift_polynomials_capability_algebra_is_even_api_expression_is_even"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_iseven.bed013946585"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func isEven() -> UniffiTruthValue
```

Provides the `is_even` operation on this mobile object.

## is_extended_real

<a id="entry-presentation_swift_polynomials_capability_algebra_is_extended_real_api_expression_is_extended_real"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_isextendedreal.58bc63368ee6"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func isExtendedReal() -> UniffiTruthValue
```

Provides the `is_extended_real` operation on this mobile object.

## is_full_rank_matrix

<a id="entry-presentation_swift_polynomials_capability_algebra_is_full_rank_matrix_api_matrix_is_full_rank_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_isfullrankmatrix.5a9d9beef2f9"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isFullRankMatrix() -> UniffiTruthValue
```

Query whether this matrix has full rank.

## is_hermitian_matrix

<a id="entry-presentation_swift_polynomials_capability_algebra_is_hermitian_matrix_api_matrix_is_hermitian_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_ishermitianmatrix.8462cf6ea34d"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isHermitianMatrix() -> UniffiTruthValue
```

Query whether this matrix is Hermitian.

## is_identity_matrix

<a id="entry-presentation_swift_polynomials_capability_algebra_is_identity_matrix_api_matrix_is_identity_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_isidentitymatrix.903693a73d88"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isIdentityMatrix() -> UniffiTruthValue
```

Query whether this matrix is the identity matrix.

## is_infinite

<a id="entry-presentation_swift_polynomials_capability_algebra_is_infinite_api_expression_is_infinite"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_isinfinite.29a4e28f3559"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func isInfinite() -> UniffiTruthValue
```

Provides the `is_infinite` operation on this mobile object.

## is_invertible_matrix

<a id="entry-presentation_swift_polynomials_capability_algebra_is_invertible_matrix_api_matrix_is_invertible_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_isinvertiblematrix.d1b4453361d0"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isInvertibleMatrix() -> UniffiTruthValue
```

Query whether this matrix is invertible.

## is_irrational

<a id="entry-presentation_swift_polynomials_capability_algebra_is_irrational_api_expression_is_irrational"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_isirrational.a94d46360445"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func isIrrational() -> UniffiTruthValue
```

Provides the `is_irrational` operation on this mobile object.

## is_natural

<a id="entry-presentation_swift_polynomials_capability_algebra_is_natural_api_expression_is_natural"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_isnatural.6f9a6b9a4c41"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func isNatural() -> UniffiTruthValue
```

Provides the `is_natural` operation on this mobile object.

## is_nonpositive

<a id="entry-presentation_swift_polynomials_capability_algebra_is_nonpositive_api_expression_is_nonpositive"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_isnonpositive.00742e6005ef"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func isNonpositive() -> UniffiTruthValue
```

Provides the `is_nonpositive` operation on this mobile object.

## is_normal_matrix

<a id="entry-presentation_swift_polynomials_capability_algebra_is_normal_matrix_api_matrix_is_normal_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_isnormalmatrix.9c02bdab42e7"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isNormalMatrix() -> UniffiTruthValue
```

Query whether this matrix is normal.

## is_odd

<a id="entry-presentation_swift_polynomials_capability_algebra_is_odd_api_expression_is_odd"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_isodd.f6f6de227cc7"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func isOdd() -> UniffiTruthValue
```

Provides the `is_odd` operation on this mobile object.

## is_orthogonal_matrix

<a id="entry-presentation_swift_polynomials_capability_algebra_is_orthogonal_matrix_api_matrix_is_orthogonal_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_isorthogonalmatrix.1d4c8b67cd16"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isOrthogonalMatrix() -> UniffiTruthValue
```

Query whether this matrix is orthogonal.

## is_positive_definite_matrix

<a id="entry-presentation_swift_polynomials_capability_algebra_is_positive_definite_matrix_api_matrix_is_positive_definite_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_ispositivedefinitematrix.bcbe40ae88c7"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isPositiveDefiniteMatrix() -> UniffiTruthValue
```

Query whether this matrix is positive definite.

## is_positive_integer

<a id="entry-presentation_swift_polynomials_capability_algebra_is_positive_integer_api_expression_is_positive_integer"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_ispositiveinteger.b25c5fe306b0"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func isPositiveInteger() -> UniffiTruthValue
```

Provides the `is_positive_integer` operation on this mobile object.

## is_positive_semidefinite_matrix

<a id="entry-presentation_swift_polynomials_capability_algebra_is_positive_semidefinite_matrix_api_matrix_is_positive_semidefinite_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_ispositivesemidefinitematrix.cd1bbc63a9b2"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isPositiveSemidefiniteMatrix() -> UniffiTruthValue
```

Query whether this matrix is positive semidefinite.

## is_singular_matrix

<a id="entry-presentation_swift_polynomials_capability_algebra_is_singular_matrix_api_matrix_is_singular_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_issingularmatrix.a0a49c18a476"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isSingularMatrix() -> UniffiTruthValue
```

Query whether this matrix is singular.

## is_square

<a id="entry-presentation_swift_polynomials_capability_algebra_is_square_api_matrix_is_square"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_issquare.2d76800f71bb"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isSquare() -> UniffiTruthValue
```

Query whether this matrix is square.

## is_symmetric_matrix

<a id="entry-presentation_swift_polynomials_capability_algebra_is_symmetric_matrix_api_matrix_is_symmetric_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_issymmetricmatrix.271072821211"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isSymmetricMatrix() -> UniffiTruthValue
```

Query whether this matrix is symmetric.

## is_transcendental

<a id="entry-presentation_swift_polynomials_capability_algebra_is_transcendental_api_expression_is_transcendental"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_istranscendental.8b5be476d346"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func isTranscendental() -> UniffiTruthValue
```

Provides the `is_transcendental` operation on this mobile object.

## is_unitary_matrix

<a id="entry-presentation_swift_polynomials_capability_algebra_is_unitary_matrix_api_matrix_is_unitary_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_isunitarymatrix.6b8f914e2c6f"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isUnitaryMatrix() -> UniffiTruthValue
```

Query whether this matrix is unitary.

## is_zero

<a id="entry-presentation_swift_polynomials_capability_algebra_is_zero_api_expression_is_zero"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_iszero.ddbfc5afa668"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func isZero() -> UniffiTruthValue
```

Provides the `is_zero` operation on this mobile object.

## is_zero_matrix

<a id="entry-presentation_swift_polynomials_capability_algebra_is_zero_matrix_api_matrix_is_zero_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_iszeromatrix.7910f4f523cb"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isZeroMatrix() -> UniffiTruthValue
```

Query whether this matrix is the zero matrix.

## isolate_real_roots

<a id="entry-presentation_swift_polynomials_capability_algebra_isolate_real_roots_api_solving_session_isolate_real_roots"></a>
<a id="placement-placement.swift.swift_object.uniffisession_isolaterealroots.a0d8a4cf5f07"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func isolateRealRoots(
    inputExpression: UniffiExpression,
    variable: String,
) -> [UniffiIsolatingInterval]
```

One `(lower, upper)` rational isolating interval per distinct real root, sorted ascending; a collapsed pair `(r, r)` marks an exact rational root. Requires a non-zero univariate polynomial with rational coefficients. Notes: WASM returns `isolating_interval` objects with `lower`/`upper` getters.

## jordan_decomposition

<a id="entry-presentation_swift_matrix_functions_capability_algebra_jordan_decomposition_api_matrix_operations_matrix_jordan_decomposition"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_jordandecomposition.3be6d4b0c785"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func jordanDecomposition() -> UniffiJordanDecomposition
```

The Jordan decomposition returned as `(similarity, jordan_form, blocks)` with \(\operatorname{similarity} \operatorname{jordan\_form} \operatorname{similarity}^{-1} = M\), where `blocks` lists each Jordan block as an `(eigenvalue, size)` pair. Every root is certified over an exact algebraic field. Notes: WASM returns a `jordan_decomposition` result class with `similarity`/`jordan_form`/`blocks` getters, each block a `jordan_block` with `eigenvalue`/`size` getters.

## jordan_form

<a id="entry-presentation_swift_matrix_functions_capability_algebra_jordan_form_api_results_jordandecomposition_jordan_form"></a>
<a id="placement-placement.swift.swift_object.uniffijordandecomposition_jordanform.ad7b8688791a"></a>
<p class="symi-entry-owner">UniffiJordanDecomposition method</p>

```swift signature
func jordanForm() -> UniffiMatrix
```

The Jordan form `J` of the decomposed matrix.

## leading_coefficient

<a id="entry-presentation_swift_polynomials_capability_algebra_leading_coefficient_api_algebra_session_leading_coefficient"></a>
<a id="placement-placement.swift.swift_object.uniffisession_leadingcoefficient.8f2fc4c0f8dd"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func leadingCoefficient(
    inputExpression: UniffiExpression,
    variable: String,
) -> UniffiExpression
```

Coefficient of the highest power of `variable`; may contain the other free variables. Errors on non-polynomial or zero input.

## left_operand

<a id="entry-presentation_swift_assumptions_capability_algebra_left_operand_api_assumptionproposition_left_operand"></a>
<a id="placement-placement.swift.swift_object.uniffiassumptionproposition_leftoperand.d99a11a816a2"></a>
<p class="symi-entry-owner">UniffiAssumptionProposition method</p>

```swift signature
func leftOperand() -> UniffiExpression?
```

Provides the `left_operand` operation on this mobile object.

## less_assumption

<a id="entry-presentation_swift_assumptions_capability_algebra_less_assumption_api_defaults_session_less_assumption"></a>
<a id="placement-placement.swift.swift_object.uniffisession_lessassumption.16f33e296e90"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func lessAssumption(
    left: UniffiExpression,
    right: UniffiExpression,
) -> UniffiAssumptionProposition
```

Provides the `less_assumption` operation on this mobile object.

## less_or_equal_assumption

<a id="entry-presentation_swift_assumptions_capability_algebra_less_or_equal_assumption_api_defaults_session_less_or_equal_assumption"></a>
<a id="placement-placement.swift.swift_object.uniffisession_lessorequalassumption.62cbd18952df"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func lessOrEqualAssumption(
    left: UniffiExpression,
    right: UniffiExpression,
) -> UniffiAssumptionProposition
```

Provides the `less_or_equal_assumption` operation on this mobile object.

## logarithm

<a id="entry-presentation_swift_matrix_functions_capability_algebra_logarithm_api_matrix_operations_matrix_logarithm"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_logarithm.ea4f03aadbb3"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func logarithm() -> UniffiMatrix
```

The principal matrix logarithm `log(M)`.

## lower

<a id="entry-presentation_swift_polynomials_capability_algebra_lower_api_results_isolatinginterval_lower"></a>
<a id="placement-placement.swift.swift_object.uniffiisolatinginterval_lower.d52095c5b42d"></a>
<p class="symi-entry-owner">UniffiIsolatingInterval method</p>

```swift signature
func lower() -> UniffiExpression
```

Lower endpoint of the isolating interval.

## lower_triangular_matrix

<a id="entry-presentation_swift_polynomials_capability_algebra_lower_triangular_matrix_api_session_lower_triangular_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffisession_lowertriangularmatrix.cc9c939311b8"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func lowerTriangularMatrix(subject: UniffiMatrix) -> UniffiAssumptionProposition
```

Provides the `lower_triangular_matrix` operation on this mobile object.

## lower_upper_decomposition

<a id="entry-presentation_swift_linear_algebra_capability_algebra_lower_upper_decomposition_api_matrix_operations_matrix_lower_upper_decomposition"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_lowerupperdecomposition.8013a4fff3b2"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func lowerUpperDecomposition() -> UniffiMatrixMatrixMatrixTuple
```

Partial-pivoting LU decomposition returned as `(permutation, lower, upper)` with \(\operatorname{permutation} M = \operatorname{lower}\,\operatorname{upper}\).

## matrix

<a id="entry-presentation_swift_matrix_construction_capability_algebra_matrix_api_session_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffisession_matrix.437fcad3cd31"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func matrix(rows: [[UniffiExpression]]) -> UniffiMatrix
```

Build a matrix from ordered rows. Direct Python construction and the facade module function use the shared default context. The raw wasm-bindgen compatibility layer retains `(rows, columns, flat_entries)`; new JavaScript code should use the nested facade form.

## matrix

<a id="entry-presentation_swift_matrix_construction_capability_algebra_matrix_api_partial_differential_equations_partialdifferentialequationprincipalpart_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationprincipalpart_matrix.373467e897b0"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPrincipalPart method</p>

```swift signature
func matrix() -> UniffiMatrix
```

The symmetric principal matrix whose quadratic form is the exact principal symbol.

## matrix_diagonal

<a id="entry-presentation_swift_matrix_construction_capability_algebra_matrix_diagonal_api_session_matrix_diagonal"></a>
<a id="placement-placement.swift.swift_object.uniffisession_matrixdiagonal.83729260e711"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func matrixDiagonal(entries: [UniffiExpression]) -> UniffiMatrix
```

Square matrix with the given main diagonal and zeros elsewhere; the empty list raises.

## matrix_identity

<a id="entry-presentation_swift_matrix_construction_capability_algebra_matrix_identity_api_session_matrix_identity"></a>
<a id="placement-placement.swift.swift_object.uniffisession_matrixidentity.9b53fbdd535c"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func matrixIdentity(size: UInt64) -> UniffiMatrix
```

The \(\mathit{size}\times\mathit{size}\) identity; size 0 raises.

## matrix_shape

<a id="entry-presentation_swift_polynomials_capability_algebra_matrix_shape_api_session_matrix_shape"></a>
<a id="placement-placement.swift.swift_object.uniffisession_matrixshape.5cf7d0777af7"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func matrixShape(
    subject: UniffiMatrix,
    rows: UInt64,
    columns: UInt64,
) -> UniffiAssumptionProposition
```

Provides the `matrix_shape` operation on this mobile object.

## matrix_zero

<a id="entry-presentation_swift_matrix_construction_capability_algebra_matrix_zero_api_session_matrix_zero"></a>
<a id="placement-placement.swift.swift_object.uniffisession_matrixzero.955e0bac4afd"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func matrixZero(rows: UInt64, columns: UInt64) -> UniffiMatrix
```

The \(\mathit{rows}\times\mathit{columns}\) zero matrix.

## member_assumption

<a id="entry-presentation_swift_assumptions_capability_algebra_member_assumption_api_defaults_session_member_assumption"></a>
<a id="placement-placement.swift.swift_object.uniffisession_memberassumption.9fbbc0c96b78"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func memberAssumption(
    element: UniffiExpression,
    setExpression: UniffiExpression,
) -> UniffiAssumptionProposition
```

Provides the `member_assumption` operation on this mobile object.

## membership_element

<a id="entry-presentation_swift_assumptions_capability_algebra_membership_element_api_assumptionproposition_membership_element"></a>
<a id="placement-placement.swift.swift_object.uniffiassumptionproposition_membershipelement.9171da3c3f16"></a>
<p class="symi-entry-owner">UniffiAssumptionProposition method</p>

```swift signature
func membershipElement() -> UniffiExpression?
```

Provides the `membership_element` operation on this mobile object.

## membership_set

<a id="entry-presentation_swift_assumptions_capability_algebra_membership_set_api_assumptionproposition_membership_set"></a>
<a id="placement-placement.swift.swift_object.uniffiassumptionproposition_membershipset.834f9ae1b814"></a>
<p class="symi-entry-owner">UniffiAssumptionProposition method</p>

```swift signature
func membershipSet() -> UniffiExpression?
```

Provides the `membership_set` operation on this mobile object.

## minimal_polynomial

<a id="entry-presentation_swift_linear_algebra_capability_algebra_minimal_polynomial_api_matrix_operations_matrix_minimal_polynomial"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_minimalpolynomial.b3f8d9c350e5"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func minimalPolynomial(variable: String) -> UniffiExpression
```

The monic minimal polynomial over the rationals. The matrix must have rational entries.

## minimal_polynomial

<a id="entry-presentation_swift_linear_algebra_capability_algebra_minimal_polynomial_api_results_rationalcanonicalform_minimal_polynomial"></a>
<a id="placement-placement.swift.swift_object.uniffirationalcanonicalform_minimalpolynomial.4ae4807d758a"></a>
<p class="symi-entry-owner">UniffiRationalCanonicalForm method</p>

```swift signature
func minimalPolynomial() -> UniffiExpression
```

The monic minimal polynomial over the rationals. The matrix must have rational entries.

## multiply

<a id="entry-presentation_swift_polynomials_capability_algebra_multiply_api_expression_multiply"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_multiply.f3d9b9955593"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func multiply(other: UniffiExpression) -> UniffiExpression
```

Matrix product; inner dimensions must agree.

## multiply

<a id="entry-presentation_swift_polynomials_capability_algebra_multiply_api_matrix_multiply"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_multiply.8ba400c3e3b4"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func multiply(other: UniffiMatrix) -> UniffiMatrix
```

Matrix product; inner dimensions must agree.

## natural_assumption

<a id="entry-presentation_swift_assumptions_capability_algebra_natural_assumption_api_session_natural_assumption"></a>
<a id="placement-placement.swift.swift_object.uniffisession_naturalassumption.5256556afcd7"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func naturalAssumption(subject: UniffiExpression) -> UniffiAssumptionProposition
```

Provides the `natural_assumption` operation on this mobile object.

## negative_assumption

<a id="entry-presentation_swift_assumptions_capability_algebra_negative_assumption_api_session_negative_assumption"></a>
<a id="placement-placement.swift.swift_object.uniffisession_negativeassumption.e4b6ed74ebc5"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func negativeAssumption(subject: UniffiExpression) -> UniffiAssumptionProposition
```

Provides the `negative_assumption` operation on this mobile object.

## nonnegative_assumption

<a id="entry-presentation_swift_polynomials_capability_algebra_nonnegative_assumption_api_session_nonnegative_assumption"></a>
<a id="placement-placement.swift.swift_object.uniffisession_nonnegativeassumption.a41710fe92e9"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func nonnegativeAssumption(subject: UniffiExpression) -> UniffiAssumptionProposition
```

Provides the `nonnegative_assumption` operation on this mobile object.

## nonpositive_assumption

<a id="entry-presentation_swift_polynomials_capability_algebra_nonpositive_assumption_api_session_nonpositive_assumption"></a>
<a id="placement-placement.swift.swift_object.uniffisession_nonpositiveassumption.6769adc459db"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func nonpositiveAssumption(subject: UniffiExpression) -> UniffiAssumptionProposition
```

Provides the `nonpositive_assumption` operation on this mobile object.

## nonzero_assumption

<a id="entry-presentation_swift_assumptions_capability_algebra_nonzero_assumption_api_session_nonzero_assumption"></a>
<a id="placement-placement.swift.swift_object.uniffisession_nonzeroassumption.ce8b24f738de"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func nonzeroAssumption(subject: UniffiExpression) -> UniffiAssumptionProposition
```

Provides the `nonzero_assumption` operation on this mobile object.

## normal_matrix

<a id="entry-presentation_swift_polynomials_capability_algebra_normal_matrix_api_session_normal_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffisession_normalmatrix.2c35c2ffc9ab"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func normalMatrix(subject: UniffiMatrix) -> UniffiAssumptionProposition
```

Provides the `normal_matrix` operation on this mobile object.

## not

<a id="entry-presentation_swift_assumptions_capability_algebra_not_api_assumptionproposition_not"></a>
<a id="placement-placement.swift.swift_object.uniffiassumptionproposition_not.4c7fd8190b0b"></a>
<p class="symi-entry-owner">UniffiAssumptionProposition method</p>

```swift signature
func not() -> UniffiAssumptionProposition
```

Provides the `not` operation on this mobile object.

## not_equal_assumption

<a id="entry-presentation_swift_assumptions_capability_algebra_not_equal_assumption_api_defaults_session_not_equal_assumption"></a>
<a id="placement-placement.swift.swift_object.uniffisession_notequalassumption.5dd2a6d5af7d"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func notEqualAssumption(
    left: UniffiExpression,
    right: UniffiExpression,
) -> UniffiAssumptionProposition
```

Provides the `not_equal_assumption` operation on this mobile object.

## nullspace_basis

<a id="entry-presentation_swift_linear_algebra_capability_algebra_nullspace_basis_api_matrix_operations_matrix_nullspace_basis"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_nullspacebasis.6bc67090ce35"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func nullspaceBasis() -> [UniffiMatrix]
```

A basis of the kernel, as column matrices; empty list for full column rank.

## odd_assumption

<a id="entry-presentation_swift_assumptions_capability_algebra_odd_assumption_api_session_odd_assumption"></a>
<a id="placement-placement.swift.swift_object.uniffisession_oddassumption.3839750742e9"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func oddAssumption(subject: UniffiExpression) -> UniffiAssumptionProposition
```

Provides the `odd_assumption` operation on this mobile object.

## or

<a id="entry-presentation_swift_assumptions_capability_algebra_or_api_assumptionproposition_or"></a>
<a id="placement-placement.swift.swift_object.uniffiassumptionproposition_or.1c0024fcb508"></a>
<p class="symi-entry-owner">UniffiAssumptionProposition method</p>

```swift signature
func or(other: UniffiAssumptionProposition) -> UniffiAssumptionProposition
```

Provides the `or` operation on this mobile object.

## orthogonal_matrix

<a id="entry-presentation_swift_polynomials_capability_algebra_orthogonal_matrix_api_session_orthogonal_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffisession_orthogonalmatrix.9693c17657e1"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func orthogonalMatrix(subject: UniffiMatrix) -> UniffiAssumptionProposition
```

Provides the `orthogonal_matrix` operation on this mobile object.

## pivot_columns

<a id="entry-presentation_swift_matrix_canonical_forms_capability_algebra_pivot_columns_api_results_hermitenormalformdecomposition_pivot_columns"></a>
<a id="placement-placement.swift.swift_object.uniffihermitenormalformdecomposition_pivotcolumns.6515a6f95d4e"></a>
<p class="symi-entry-owner">UniffiHermiteNormalFormDecomposition method</p>

```swift signature
func pivotColumns() -> [UInt64]
```

The `rank` getter reuses the matrix `rank` heading above.

## plain_text

<a id="entry-presentation_swift_polynomials_capability_algebra_tostring_api_expression_to_string"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_plaintext.602e518f6cca"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func plainText() -> String
```

The canonical plain-text form of this expression.

## plain_text

<a id="entry-presentation_swift_polynomials_capability_algebra_tostring_api_assumptionproposition_to_string"></a>
<a id="placement-placement.swift.swift_object.uniffiassumptionproposition_plaintext.33fcfe3515b2"></a>
<p class="symi-entry-owner">UniffiAssumptionProposition method</p>

```swift signature
func plainText() -> String
```

The canonical plain-text form of this assumption proposition.

## polynomial_gcd

<a id="entry-presentation_swift_polynomials_capability_algebra_polynomial_gcd_api_algebra_session_polynomial_gcd"></a>
<a id="placement-placement.swift.swift_object.uniffisession_polynomialgcd.3f202a50b626"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func polynomialGcd(
    left: UniffiExpression,
    right: UniffiExpression,
    variable: String,
) -> UniffiExpression
```

Greatest common divisor of the two expressions as polynomials in `variable` (primitive, with the core's sign normalisation).

## positive_assumption

<a id="entry-presentation_swift_assumptions_capability_algebra_positive_assumption_api_session_positive_assumption"></a>
<a id="placement-placement.swift.swift_object.uniffisession_positiveassumption.b77092a60c87"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func positiveAssumption(subject: UniffiExpression) -> UniffiAssumptionProposition
```

Provides the `positive_assumption` operation on this mobile object.

## positive_definite_matrix

<a id="entry-presentation_swift_polynomials_capability_algebra_positive_definite_matrix_api_session_positive_definite_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffisession_positivedefinitematrix.ab2c7a4e0b9f"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func positiveDefiniteMatrix(subject: UniffiMatrix) -> UniffiAssumptionProposition
```

Provides the `positive_definite_matrix` operation on this mobile object.

## positive_integer_assumption

<a id="entry-presentation_swift_assumptions_capability_algebra_positive_integer_assumption_api_session_positive_integer_assumption"></a>
<a id="placement-placement.swift.swift_object.uniffisession_positiveintegerassumption.54531ccb0bec"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func positiveIntegerAssumption(subject: UniffiExpression) -> UniffiAssumptionProposition
```

Provides the `positive_integer_assumption` operation on this mobile object.

## positive_semidefinite_matrix

<a id="entry-presentation_swift_polynomials_capability_algebra_positive_semidefinite_matrix_api_session_positive_semidefinite_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffisession_positivesemidefinitematrix.8d5eff06726d"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func positiveSemidefiniteMatrix(subject: UniffiMatrix) -> UniffiAssumptionProposition
```

Provides the `positive_semidefinite_matrix` operation on this mobile object.

## prime_assumption

<a id="entry-presentation_swift_assumptions_capability_algebra_prime_assumption_api_session_prime_assumption"></a>
<a id="placement-placement.swift.swift_object.uniffisession_primeassumption.6ca6c19ac317"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func primeAssumption(subject: UniffiExpression) -> UniffiAssumptionProposition
```

Provides the `prime_assumption` operation on this mobile object.

## projection_operator_used

<a id="entry-presentation_swift_cad_capability_algebra_projection_operator_used_api_cylindricalalgebraicdecomposition_projection_operator_used"></a>
<a id="placement-placement.swift.swift_object.unifficylindricalalgebraicdecomposition_projectionoperatorused.cfc90e8c3fd9"></a>
<p class="symi-entry-owner">UniffiCylindricalAlgebraicDecomposition method</p>

```swift signature
func projectionOperatorUsed() -> String
```

The projection operator the decomposition was built with: `"brown"` for the well-oriented fast path, `"lazard"` when the well-orientedness guard forced the complete fallback, `"equational_constraint"` for an equational-constraint CAD.

## rank

<a id="entry-presentation_swift_linear_algebra_capability_algebra_rank_api_results_hermitenormalformdecomposition_rank"></a>
<a id="placement-placement.swift.swift_object.uniffihermitenormalformdecomposition_rank.11ddb031a40e"></a>
<p class="symi-entry-owner">UniffiHermiteNormalFormDecomposition method</p>

```swift signature
func rank() -> UInt64
```

Rank via Bareiss fraction-free elimination.

## rank

<a id="entry-presentation_swift_linear_algebra_capability_algebra_rank_api_matrix_rank"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_rank.ed86dd01e5b0"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func rank() -> UInt64
```

Rank via Bareiss fraction-free elimination.

## rank

<a id="entry-presentation_swift_linear_algebra_capability_algebra_rank_api_results_smithnormalformdecomposition_rank"></a>
<a id="placement-placement.swift.swift_object.uniffismithnormalformdecomposition_rank.c8c1faa7c22b"></a>
<p class="symi-entry-owner">UniffiSmithNormalFormDecomposition method</p>

```swift signature
func rank() -> UInt64
```

Rank via Bareiss fraction-free elimination.

## rational_assumption

<a id="entry-presentation_swift_assumptions_capability_algebra_rational_assumption_api_session_rational_assumption"></a>
<a id="placement-placement.swift.swift_object.uniffisession_rationalassumption.29a77ad6ce79"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func rationalAssumption(subject: UniffiExpression) -> UniffiAssumptionProposition
```

Provides the `rational_assumption` operation on this mobile object.

## rational_canonical_form

<a id="entry-presentation_swift_matrix_canonical_forms_capability_algebra_rational_canonical_form_api_matrix_operations_matrix_rational_canonical_form"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_rationalcanonicalform.7b4daab24b35"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func rationalCanonicalForm(variable: String) -> UniffiRationalCanonicalForm
```

Returns the certified Frobenius canonical form over the rationals. Its invariant factors are monic and ordered by divisibility, and `similarity` satisfies \(\operatorname{matrix}\,\operatorname{similarity} = \operatorname{similarity}\,\operatorname{canonical\_form}\) exactly.

## real_assumption

<a id="entry-presentation_swift_assumptions_capability_algebra_real_assumption_api_session_real_assumption"></a>
<a id="placement-placement.swift.swift_object.uniffisession_realassumption.bbf444970b17"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func realAssumption(subject: UniffiExpression) -> UniffiAssumptionProposition
```

Provides the `real_assumption` operation on this mobile object.

## real_entries

<a id="entry-presentation_swift_polynomials_capability_algebra_real_entries_api_session_real_entries"></a>
<a id="placement-placement.swift.swift_object.uniffisession_realentries.490b89e3be20"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func realEntries(subject: UniffiMatrix) -> UniffiAssumptionProposition
```

Provides the `real_entries` operation on this mobile object.

## refine

<a id="entry-presentation_swift_assumptions_capability_algebra_refine_api_session_refine"></a>
<a id="placement-placement.swift.swift_object.uniffisession_refine.ccb92f973860"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func refine(
    target: UniffiExpression,
    assumptions: UniffiAssumptionProposition?,
) -> UniffiExpression
```

Provides the `refine` operation on this mobile object.

## refine

<a id="entry-presentation_swift_assumptions_capability_algebra_refine_api_expression_refine"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_refine.198c320bf37e"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func refine(assumptions: UniffiAssumptionProposition?) -> UniffiExpression
```

Provides the `refine` operation on this mobile object.

## refine

<a id="entry-presentation_swift_assumptions_capability_algebra_refine_api_assumptionscope_refine"></a>
<a id="placement-placement.swift.swift_object.uniffiassumptionscope_refine.53a6330a7e27"></a>
<p class="symi-entry-owner">UniffiAssumptionScope method</p>

```swift signature
func refine(target: UniffiExpression) -> UniffiExpression
```

Provides the `refine` operation on this mobile object.

## relation_kind

<a id="entry-presentation_swift_assumptions_capability_algebra_relation_kind_api_assumptionproposition_relation_kind"></a>
<a id="placement-placement.swift.swift_object.uniffiassumptionproposition_relationkind.605f26847e27"></a>
<p class="symi-entry-owner">UniffiAssumptionProposition method</p>

```swift signature
func relationKind() -> String?
```

Provides the `relation_kind` operation on this mobile object.

## resultant

<a id="entry-presentation_swift_polynomials_capability_algebra_resultant_api_algebra_session_resultant"></a>
<a id="placement-placement.swift.swift_object.uniffisession_resultant.40e15ea63790"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func resultant(
    left: UniffiExpression,
    right: UniffiExpression,
    variable: String,
) -> UniffiExpression
```

Resultant with respect to `variable`; zero exactly when the two polynomials share a root (over the algebraic closure).

## right_operand

<a id="entry-presentation_swift_assumptions_capability_algebra_right_operand_api_assumptionproposition_right_operand"></a>
<a id="placement-placement.swift.swift_object.uniffiassumptionproposition_rightoperand.1597382b6322"></a>
<p class="symi-entry-owner">UniffiAssumptionProposition method</p>

```swift signature
func rightOperand() -> UniffiExpression?
```

Provides the `right_operand` operation on this mobile object.

## row_reduce

<a id="entry-presentation_swift_linear_algebra_capability_algebra_row_reduce_api_matrix_row_reduce"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_rowreduce.a7d394721331"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func rowReduce() -> UniffiMatrix
```

Bareiss row-reduced form (fraction-free; pivots remain on the diagonal).

## row_transformation

<a id="entry-presentation_swift_matrix_canonical_forms_capability_algebra_row_transformation_api_results_smithnormalformdecomposition_row_transformation"></a>
<a id="placement-placement.swift.swift_object.uniffismithnormalformdecomposition_rowtransformation.fd4d7867eef5"></a>
<p class="symi-entry-owner">UniffiSmithNormalFormDecomposition method</p>

```swift signature
func rowTransformation() -> UniffiMatrix
```

The unimodular row transformation `U` satisfying `U * matrix * V == S`.

## rows

<a id="entry-presentation_swift_matrix_construction_capability_algebra_rows_api_matrix_rows"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_rows.35b7b4b5025b"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func rows() -> UInt64
```

Number of rows.

## scalar_multiply

<a id="entry-presentation_swift_linear_algebra_capability_algebra_scalar_multiply_api_matrix_scalar_multiply"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_scalarmultiply.bc5b1732bab2"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func scalarMultiply(scalar: UniffiExpression) -> UniffiMatrix
```

Scale every entry by `scalar`.

## serialize

<a id="entry-presentation_swift_assumptions_capability_algebra_serialize_api_assumptionproposition_serialize"></a>
<a id="placement-placement.swift.swift_object.uniffiassumptionproposition_serialize.f2074b7cca5d"></a>
<p class="symi-entry-owner">UniffiAssumptionProposition method</p>

```swift signature
func serialize() -> String
```

Provides the `serialize` operation on this mobile object.

## similarity

<a id="entry-presentation_swift_matrix_functions_capability_algebra_similarity_api_results_jordandecomposition_similarity"></a>
<a id="placement-placement.swift.swift_object.uniffijordandecomposition_similarity.096b4a92743d"></a>
<p class="symi-entry-owner">UniffiJordanDecomposition method</p>

```swift signature
func similarity() -> UniffiMatrix
```

The change of basis `S`, satisfying `matrix * S == S * jordan_form`.

## similarity

<a id="entry-presentation_swift_matrix_functions_capability_algebra_similarity_api_results_rationalcanonicalform_similarity"></a>
<a id="placement-placement.swift.swift_object.uniffirationalcanonicalform_similarity.acd220afd952"></a>
<p class="symi-entry-owner">UniffiRationalCanonicalForm method</p>

```swift signature
func similarity() -> UniffiMatrix
```

The certified change of basis `S`, satisfying `matrix * S == S * canonical_form`.

## sine

<a id="entry-presentation_swift_matrix_functions_capability_algebra_sine_api_matrix_operations_matrix_sine"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_sine.33c353074925"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func sine() -> UniffiMatrix
```

The primary matrix sine `sin(M)`, evaluated exactly through the certified Jordan decomposition. The result is certified together with the matrix cosine by `sin(M)^2 + cos(M)^2 = I`.

## singular_matrix

<a id="entry-presentation_swift_polynomials_capability_algebra_singular_matrix_api_session_singular_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffisession_singularmatrix.1ec8021176dc"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func singularMatrix(subject: UniffiMatrix) -> UniffiAssumptionProposition
```

Provides the `singular_matrix` operation on this mobile object.

## size

<a id="entry-presentation_swift_matrix_functions_capability_algebra_size_api_results_jordanblock_size"></a>
<a id="placement-placement.swift.swift_object.uniffijordanblock_size.c9867f385d8b"></a>
<p class="symi-entry-owner">UniffiJordanBlock method</p>

```swift signature
func size() -> UInt64
```

The size of this Jordan block.

## smith

<a id="entry-presentation_swift_matrix_canonical_forms_capability_algebra_smith_api_results_smithnormalformdecomposition_smith"></a>
<a id="placement-placement.swift.swift_object.uniffismithnormalformdecomposition_smith.c0a431630649"></a>
<p class="symi-entry-owner">UniffiSmithNormalFormDecomposition method</p>

```swift signature
func smith() -> UniffiMatrix
```

The Smith normal form `S`.

## smith_normal_form

<a id="entry-presentation_swift_matrix_canonical_forms_capability_algebra_smith_normal_form_api_matrix_operations_matrix_smith_normal_form"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_smithnormalform.8f12c4b9688e"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func smithNormalForm() -> UniffiSmithNormalFormDecomposition
```

Returns the canonical integer Smith normal form `D`, unimodular transformations `U` and `V` satisfying \(U M V = D\), the rank, and the invariant factors including trailing zeros. The nonnegative positive prefix is divisibility-ordered. Every result is verified for diagonal shape, divisibility, the exact certificate, and unimodularity of both transformations before return. Notes: WASM returns a `smith_normal_form_decomposition` object carrying the same results as getters.

## square_matrix

<a id="entry-presentation_swift_polynomials_capability_algebra_square_matrix_api_session_square_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffisession_squarematrix.1f0447943ee4"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func squareMatrix(subject: UniffiMatrix) -> UniffiAssumptionProposition
```

Provides the `square_matrix` operation on this mobile object.

## square_root

<a id="entry-presentation_swift_matrix_functions_capability_algebra_square_root_api_matrix_operations_matrix_square_root"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_squareroot.784836f31e57"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func squareRoot() -> UniffiMatrix
```

The principal matrix square root `sqrt(M)`; the result is verified to square back to `M`.

## subtract

<a id="entry-presentation_swift_polynomials_capability_algebra_subtract_api_expression_subtract"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_subtract.83f9546e2830"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func subtract(other: UniffiExpression) -> UniffiExpression
```

Entrywise difference of two matrices of the same shape.

## subtract

<a id="entry-presentation_swift_polynomials_capability_algebra_subtract_api_matrix_subtract"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_subtract.a3819adac83e"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func subtract(other: UniffiMatrix) -> UniffiMatrix
```

Entrywise difference of two matrices of the same shape.

## symmetric_matrix

<a id="entry-presentation_swift_polynomials_capability_algebra_symmetric_matrix_api_session_symmetric_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffisession_symmetricmatrix.76919b542c94"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func symmetricMatrix(subject: UniffiMatrix) -> UniffiAssumptionProposition
```

Provides the `symmetric_matrix` operation on this mobile object.

## torsion_invariant_factors

<a id="entry-presentation_swift_matrix_canonical_forms_capability_algebra_torsion_invariant_factors_api_results_integercokerneldata_torsion_invariant_factors"></a>
<a id="placement-placement.swift.swift_object.uniffiintegercokerneldata_torsioninvariantfactors.5ca19d04444a"></a>
<p class="symi-entry-owner">UniffiIntegerCokernelData method</p>

```swift signature
func torsionInvariantFactors() -> [UniffiExpression]
```

The invariant factors of the torsion part of the cokernel.

## trace

<a id="entry-presentation_swift_linear_algebra_capability_algebra_trace_api_matrix_trace"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_trace.a6f899cca95a"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func trace() -> UniffiExpression
```

Sum of the diagonal entries of a square matrix.

## transcendental_assumption

<a id="entry-presentation_swift_assumptions_capability_algebra_transcendental_assumption_api_session_transcendental_assumption"></a>
<a id="placement-placement.swift.swift_object.uniffisession_transcendentalassumption.ad9c5fdb0497"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func transcendentalAssumption(subject: UniffiExpression) -> UniffiAssumptionProposition
```

Provides the `transcendental_assumption` operation on this mobile object.

## transformation

<a id="entry-presentation_swift_matrix_canonical_forms_capability_algebra_transformation_api_results_hermitenormalformdecomposition_transformation"></a>
<a id="placement-placement.swift.swift_object.uniffihermitenormalformdecomposition_transformation.5f85a0030596"></a>
<p class="symi-entry-owner">UniffiHermiteNormalFormDecomposition method</p>

```swift signature
func transformation() -> UniffiMatrix
```

The unimodular transformation `U` satisfying `U * matrix == H`.

## transformation

<a id="entry-presentation_swift_matrix_canonical_forms_capability_algebra_transformation_api_partial_differential_equations_partialdifferentialequationcanonicalizationresult_transformation"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationcanonicalizationresult_transformation.e6d1a1488442"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCanonicalizationResult method</p>

```swift signature
func transformation() -> UniffiPartialDifferentialEquationTransformationResult?
```

The verified coordinate transformation of a successful canonicalization.

## transpose

<a id="entry-presentation_swift_linear_algebra_capability_algebra_transpose_api_matrix_transpose"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_transpose.8ea115545f64"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func transpose() -> UniffiMatrix
```

The transpose, with rows and columns exchanged.

## unitary_matrix

<a id="entry-presentation_swift_polynomials_capability_algebra_unitary_matrix_api_session_unitary_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffisession_unitarymatrix.9bbcc7068ba8"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func unitaryMatrix(subject: UniffiMatrix) -> UniffiAssumptionProposition
```

Provides the `unitary_matrix` operation on this mobile object.

## upper

<a id="entry-presentation_swift_polynomials_capability_algebra_upper_api_results_isolatinginterval_upper"></a>
<a id="placement-placement.swift.swift_object.uniffiisolatinginterval_upper.42681029cd3e"></a>
<p class="symi-entry-owner">UniffiIsolatingInterval method</p>

```swift signature
func upper() -> UniffiExpression
```

Upper endpoint of the isolating interval.

## upper_triangular_matrix

<a id="entry-presentation_swift_polynomials_capability_algebra_upper_triangular_matrix_api_session_upper_triangular_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffisession_uppertriangularmatrix.66284c751119"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func upperTriangularMatrix(subject: UniffiMatrix) -> UniffiAssumptionProposition
```

Provides the `upper_triangular_matrix` operation on this mobile object.

## vectors

<a id="entry-presentation_swift_linear_algebra_capability_algebra_vectors_api_results_eigenpair_vectors"></a>
<a id="placement-placement.swift.swift_object.uniffieigenpair_vectors.399dbcb28830"></a>
<p class="symi-entry-owner">UniffiEigenpair method</p>

```swift signature
func vectors() -> [UniffiMatrix]
```

A basis of the eigenspace, as column matrices.

## zero_assumption

<a id="entry-presentation_swift_assumptions_capability_algebra_zero_assumption_api_session_zero_assumption"></a>
<a id="placement-placement.swift.swift_object.uniffisession_zeroassumption.2df7ff800b3f"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func zeroAssumption(subject: UniffiExpression) -> UniffiAssumptionProposition
```

Provides the `zero_assumption` operation on this mobile object.

## zero_equivalent

<a id="entry-presentation_swift_zero_equivalence_capability_algebra_zero_equivalent_api_session_zero_equivalent"></a>
<a id="placement-placement.swift.swift_object.uniffisession_zeroequivalent.15dad0925fdd"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func zeroEquivalent(
    target: UniffiExpression,
    constraint: UniffiExpression?,
) -> UniffiZeroEquivalenceVerdict
```

Provides the `zero_equivalent` operation on this mobile object.

## zero_equivalent

<a id="entry-presentation_swift_zero_equivalence_capability_algebra_zero_equivalent_api_expression_zero_equivalent"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_zeroequivalent.742441c0a4e3"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func zeroEquivalent(constraint: UniffiExpression?) -> UniffiZeroEquivalenceVerdict
```

Provides the `zero_equivalent` operation on this mobile object.

## zero_matrix

<a id="entry-presentation_swift_polynomials_capability_algebra_zero_matrix_api_session_zero_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffisession_zeromatrix.3cd60fff040e"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func zeroMatrix(subject: UniffiMatrix) -> UniffiAssumptionProposition
```

Provides the `zero_matrix` operation on this mobile object.

## continuous_domain

<a id="entry-presentation_swift_calculus_capability_calculus_continuous_domain_api_session_continuous_domain"></a>
<a id="placement-placement.swift.swift_object.uniffisession_continuousdomain.e695bde9bb07"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func continuousDomain(
    target: UniffiExpression,
    variable: String,
) -> UniffiExpression
```

The subset of the real line on which the expression is continuous in `variable`, as a set expression. Compound rational square-root radicands are lowered to an exact univariate semialgebraic condition when supported, so, for example, `sqrt(x + 1/x - 2)` has continuous real domain `(0, infinity)`.

## continuous_domain

<a id="entry-presentation_swift_calculus_capability_calculus_continuous_domain_api_expression_continuous_domain"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_continuousdomain.8206aae6ab5b"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func continuousDomain(variable: String) -> UniffiExpression
```

The subset of the real line on which the expression is continuous in `variable`, as a set expression. Compound rational square-root radicands are lowered to an exact univariate semialgebraic condition when supported, so, for example, `sqrt(x + 1/x - 2)` has continuous real domain `(0, infinity)`.

## continuous_domain

<a id="entry-presentation_swift_calculus_capability_calculus_continuous_domain_api_assumptionscope_continuous_domain"></a>
<a id="placement-placement.swift.swift_object.uniffiassumptionscope_continuousdomain.959fabd23724"></a>
<p class="symi-entry-owner">UniffiAssumptionScope method</p>

```swift signature
func continuousDomain(
    target: UniffiExpression,
    variable: String,
) -> UniffiExpression
```

Return the real continuous domain using the scope's immutable assumptions.

## decline_reason

<a id="entry-presentation_swift_calculus_capability_calculus_decline_reason_api_results_definiteintegrationresult_decline_reason"></a>
<a id="placement-placement.swift.swift_object.uniffidefiniteintegrationresult_declinereason.aa60e5f176db"></a>
<p class="symi-entry-owner">UniffiDefiniteIntegrationResult method</p>

```swift signature
func declineReason() -> UniffiDefiniteIntegrationDeclineReason?
```

The reason, present exactly when the verdict is `declined`.

## derivative

<a id="entry-presentation_swift_calculus_capability_calculus_derivative_api_session_derivative"></a>
<a id="placement-placement.swift.swift_object.uniffisession_derivative.dd3badc82f1f"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func derivative(
    target: UniffiExpression,
    variable: String,
    order: UInt64,
) -> UniffiExpression
```

Constructs a deferred derivative. The variable may be a name or a same-context symbol expression. Use `execute` to evaluate it.

## derivative

<a id="entry-presentation_swift_calculus_capability_calculus_derivative_api_expression_derivative"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_derivative.23688abd353a"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func derivative(variable: String, order: UInt64) -> UniffiExpression
```

Constructs a deferred derivative. The variable may be a name or a same-context symbol expression. Use `execute` to evaluate it.

## derivative

<a id="entry-presentation_swift_calculus_capability_calculus_derivative_api_undefinedfunction_derivative"></a>
<a id="placement-placement.swift.swift_object.uniffiundefinedfunction_derivative.85027e44f996"></a>
<p class="symi-entry-owner">UniffiUndefinedFunction method</p>

```swift signature
func derivative(
    orders: [UInt64],
    arguments: [UniffiExpression],
) -> UniffiExpression
```

Constructs a deferred derivative. The variable may be a name or a same-context symbol expression. Use `execute` to evaluate it.

## differentiate

<a id="entry-presentation_swift_calculus_capability_calculus_differentiate_api_session_differentiate"></a>
<a id="placement-placement.swift.swift_object.uniffisession_differentiate.4dcb32c214fb"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func differentiate(
    target: UniffiExpression,
    variable: String,
) -> UniffiExpression
```

Symbolic derivative with respect to `variable`.

## differentiate

<a id="entry-presentation_swift_calculus_capability_calculus_differentiate_api_expression_differentiate"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_differentiate.9a9eda0d1d84"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func differentiate(variable: String) -> UniffiExpression
```

Symbolic derivative with respect to `variable`.

## divergence_direction

<a id="entry-presentation_swift_calculus_capability_calculus_divergence_direction_api_results_definiteintegrationresult_divergence_direction"></a>
<a id="placement-placement.swift.swift_object.uniffidefiniteintegrationresult_divergencedirection.89b81cab8553"></a>
<p class="symi-entry-owner">UniffiDefiniteIntegrationResult method</p>

```swift signature
func divergenceDirection() -> UniffiDefiniteIntegrationDivergenceDirection?
```

The signed infinity of a divergent request, when a single direction was established.

## evaluate_limit

<a id="entry-presentation_swift_calculus_capability_calculus_evaluate_limit_api_session_evaluate_limit"></a>
<a id="placement-placement.swift.swift_object.uniffisession_evaluatelimit.844e7fee1517"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func evaluateLimit(
    target: UniffiExpression,
    variable: String,
    point: UniffiExpression,
    direction: UniffiLimitDirection,
) -> UniffiExpression
```

`evaluate_limit(expression, variable, point, direction="two_sided")` runs the eager limit engine. It returns an unevaluated limit when the engine cannot close the result.

## evaluate_limit

<a id="entry-presentation_swift_calculus_capability_calculus_evaluate_limit_api_expression_evaluate_limit"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_evaluatelimit.40edaf1e9fd5"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func evaluateLimit(
    variable: String,
    point: UniffiExpression,
    direction: UniffiLimitDirection,
) -> UniffiExpression
```

`evaluate_limit(expression, variable, point, direction="two_sided")` runs the eager limit engine. It returns an unevaluated limit when the engine cannot close the result.

## evaluate_limit

<a id="entry-presentation_swift_calculus_capability_calculus_evaluate_limit_api_assumptionscope_evaluate_limit"></a>
<a id="placement-placement.swift.swift_object.uniffiassumptionscope_evaluatelimit.7ae3b6d9dfe0"></a>
<p class="symi-entry-owner">UniffiAssumptionScope method</p>

```swift signature
func evaluateLimit(
    target: UniffiExpression,
    variable: String,
    point: UniffiExpression,
    direction: UniffiLimitDirection,
) -> UniffiExpression
```

Evaluate a limit using the scope's immutable assumptions.

## evaluate_numeric

<a id="entry-presentation_swift_calculus_capability_calculus_evaluate_numeric_api_analysis_session_evaluate_numeric"></a>
<a id="placement-placement.swift.swift_object.uniffisession_evaluatenumeric.3950de319d77"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func evaluateNumeric(inputExpression: UniffiExpression) -> UniffiExpression
```

Numerically evaluate to a float and re-encode as an exact rational literal; returns the input unchanged when the expression has no numeric value. For direct float output use `expression.evaluate_to_float`.

## evaluate_numeric

<a id="entry-presentation_swift_calculus_capability_calculus_evaluate_numeric_api_expression_operations_expression_evaluate_numeric"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_evaluatenumeric.9177eadb23d8"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func evaluateNumeric() -> UniffiExpression
```

Numerically evaluate to a float and re-encode as an exact rational literal; returns the input unchanged when the expression has no numeric value. For direct float output use `expression.evaluate_to_float`.

## evaluate_on_grid

<a id="entry-presentation_swift_calculus_capability_calculus_evaluate_on_grid_api_analysis_session_evaluate_on_grid"></a>
<a id="placement-placement.swift.swift_object.uniffisession_evaluateongrid.654e56df9f74"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func evaluateOnGrid(
    inputExpression: UniffiExpression,
    variable: String,
    grid: [Double],
) -> [Double]
```

Evaluate at each grid point, substituting `variable`.

## evaluate_on_grid_points

<a id="entry-presentation_swift_calculus_capability_calculus_evaluate_on_grid_points_api_analysis_session_evaluate_on_grid_points"></a>
<a id="placement-placement.swift.swift_object.uniffisession_evaluateongridpoints.b19cb4cb951a"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func evaluateOnGridPoints(
    inputExpression: UniffiExpression,
    variables: [String],
    points: [Double],
) -> [Double]
```

Multi-variable companion to `evaluate_on_grid`: evaluate at each point of a flat row-major coordinate array (one coordinate per variable, so the points length must be a multiple of the variable count), returning one float per point. Positions where evaluation fails hold NaN. Raises when `variables` is empty or the lengths disagree. Intended for sampling surfaces and implicit curves.

## execute

<a id="entry-presentation_swift_calculus_capability_calculus_execute_api_session_execute"></a>
<a id="placement-placement.swift.swift_object.uniffisession_execute.01ea3451df6b"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func execute(target: UniffiExpression) -> UniffiExpression
```

Re-dispatch every unevaluated node (integral, derivative, summation, transform, ODE/recurrence placeholder) in the expression; useful after substitution has changed the inputs.

## execute

<a id="entry-presentation_swift_calculus_capability_calculus_execute_api_expression_execute"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_execute.2b8f6b002d16"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func execute() -> UniffiExpression
```

Re-dispatch every unevaluated node (integral, derivative, summation, transform, ODE/recurrence placeholder) in the expression; useful after substitution has changed the inputs.

## execute

<a id="entry-presentation_swift_calculus_capability_calculus_execute_api_matrix_execute"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_execute.df9725c5afee"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func execute() -> UniffiMatrix
```

Re-dispatch every unevaluated node (integral, derivative, summation, transform, ODE/recurrence placeholder) in the expression; useful after substitution has changed the inputs.

## fourier_transform

<a id="entry-presentation_swift_integral_transforms_capability_calculus_fourier_transform_api_session_fourier_transform"></a>
<a id="placement-placement.swift.swift_object.uniffisession_fouriertransform.1e10abe971af"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func fourierTransform(
    target: UniffiExpression,
    timeVariable: String,
    frequencyVariable: String,
) -> UniffiExpression
```

Forward Fourier transform in the angular-frequency convention \(F(\omega) = \int f(t)e^{-i\omega t}\,dt\).

## fourier_transform

<a id="entry-presentation_swift_integral_transforms_capability_calculus_fourier_transform_api_assumptionscope_fourier_transform"></a>
<a id="placement-placement.swift.swift_object.uniffiassumptionscope_fouriertransform.aea4f0c4d33f"></a>
<p class="symi-entry-owner">UniffiAssumptionScope method</p>

```swift signature
func fourierTransform(
    target: UniffiExpression,
    timeVariable: String,
    frequencyVariable: String,
) -> UniffiExpression
```

Compute a forward Fourier transform using the scope's immutable assumptions.

## integrate

<a id="entry-presentation_swift_calculus_capability_calculus_integrate_api_session_integrate"></a>
<a id="placement-placement.swift.swift_object.uniffisession_integrate.2cb7ddd1dc4e"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func integrate(
    target: UniffiExpression,
    variable: String,
) -> UniffiExpression
```

Indefinite integration (no constant of integration).

## integrate

<a id="entry-presentation_swift_calculus_capability_calculus_integrate_api_expression_integrate"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_integrate.650b842ae015"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func integrate(variable: String) -> UniffiExpression
```

Indefinite integration (no constant of integration).

## integrate

<a id="entry-presentation_swift_calculus_capability_calculus_integrate_api_assumptionscope_integrate"></a>
<a id="placement-placement.swift.swift_object.uniffiassumptionscope_integrate.8bdaf1409091"></a>
<p class="symi-entry-owner">UniffiAssumptionScope method</p>

```swift signature
func integrate(
    target: UniffiExpression,
    variable: String,
) -> UniffiExpression
```

Integrate an expression using the scope's immutable assumptions.

## integrate_definite

<a id="entry-presentation_swift_calculus_capability_calculus_integrate_definite_api_analysis_session_integrate_definite"></a>
<a id="placement-placement.swift.swift_object.uniffisession_integratedefinite.7e00cd35f77a"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func integrateDefinite(
    inputExpression: UniffiExpression,
    variable: String,
    lower: UniffiExpression,
    upper: UniffiExpression,
) -> UniffiExpression
```

Definite integration over `[lower, upper]` (bounds may be infinite).

## integrate_definite

<a id="entry-presentation_swift_calculus_capability_calculus_integrate_definite_api_expression_operations_expression_integrate_definite"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_integratedefinite.0f61d8ee9bc0"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func integrateDefinite(
    variable: String,
    lower: UniffiExpression,
    upper: UniffiExpression,
) -> UniffiExpression
```

Definite integration over `[lower, upper]` (bounds may be infinite).

## integrate_definite

<a id="entry-presentation_swift_calculus_capability_calculus_integrate_definite_api_assumptionscope_integrate_definite"></a>
<a id="placement-placement.swift.swift_object.uniffiassumptionscope_integratedefinite.8ea5c2eb647b"></a>
<p class="symi-entry-owner">UniffiAssumptionScope method</p>

```swift signature
func integrateDefinite(
    target: UniffiExpression,
    variable: String,
    lowerBound: UniffiExpression,
    upperBound: UniffiExpression,
) -> UniffiExpression
```

Integrate a definite expression using the scope's immutable assumptions.

## integrate_definite_detailed

<a id="entry-presentation_swift_calculus_capability_calculus_integrate_definite_detailed_api_session_integrate_definite_detailed"></a>
<a id="placement-placement.swift.swift_object.uniffisession_integratedefinitedetailed.09c04ae5e760"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func integrateDefiniteDetailed(
    target: UniffiExpression,
    variable: String,
    lowerBound: UniffiExpression,
    upperBound: UniffiExpression,
    interpretation: UniffiDefiniteIntegrationInterpretation,
    constraint: UniffiExpression?,
) -> UniffiDefiniteIntegrationResult
```

Evaluate a definite integral under an interpretation and an optional declared region, retaining whether it was evaluated, proved divergent, or declined.

## integrate_definite_numeric

<a id="entry-presentation_swift_calculus_capability_calculus_integrate_definite_numeric_api_analysis_session_integrate_definite_numeric"></a>
<a id="placement-placement.swift.swift_object.uniffisession_integratedefinitenumeric.2ffa56cf5a15"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func integrateDefiniteNumeric(
    inputExpression: UniffiExpression,
    variable: String,
    lower: UniffiExpression,
    upper: UniffiExpression,
    precisionBits: UInt64,
) -> UniffiNumericDefiniteIntegrationResult
```

Numerically integrate a finite interval without invoking symbolic integration.

## integrate_iterated

<a id="entry-presentation_swift_calculus_capability_calculus_integrate_iterated_api_analysis_session_integrate_iterated"></a>
<a id="placement-placement.swift.swift_object.uniffisession_integrateiterated.56eb5e52ec72"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func integrateIterated(
    inputExpression: UniffiExpression,
    variables: [String],
) -> UniffiExpression
```

Iterated indefinite integration, applying the single-variable pipeline once per entry of `variables` in left-to-right order (innermost binder first).

## integrate_iterated

<a id="entry-presentation_swift_calculus_capability_calculus_integrate_iterated_api_expression_operations_expression_integrate_iterated"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_integrateiterated.48a41d441e29"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func integrateIterated(variables: [String]) -> UniffiExpression
```

Iterated indefinite integration, applying the single-variable pipeline once per entry of `variables` in left-to-right order (innermost binder first).

## interpretation

<a id="entry-presentation_swift_calculus_capability_calculus_interpretation_api_results_definiteintegrationresult_interpretation"></a>
<a id="placement-placement.swift.swift_object.uniffidefiniteintegrationresult_interpretation.563835a94b44"></a>
<p class="symi-entry-owner">UniffiDefiniteIntegrationResult method</p>

```swift signature
func interpretation() -> UniffiDefiniteIntegrationInterpretation
```

The interpretation under which the request was answered.

## inverse_fourier_transform

<a id="entry-presentation_swift_integral_transforms_capability_calculus_inverse_fourier_transform_api_session_inverse_fourier_transform"></a>
<a id="placement-placement.swift.swift_object.uniffisession_inversefouriertransform.d4b7c77719cf"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func inverseFourierTransform(
    target: UniffiExpression,
    frequencyVariable: String,
    timeVariable: String,
) -> UniffiExpression
```

Inverse Fourier transform of the same convention.

## inverse_laplace_transform

<a id="entry-presentation_swift_integral_transforms_capability_calculus_inverse_laplace_transform_api_session_inverse_laplace_transform"></a>
<a id="placement-placement.swift.swift_object.uniffisession_inverselaplacetransform.f2a6d78c0eb6"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func inverseLaplaceTransform(
    target: UniffiExpression,
    frequencyVariable: String,
    timeVariable: String,
) -> UniffiExpression
```

Inverse Laplace transform; rational inputs route through a partial-fraction reverse lookup.

## laplace_transform

<a id="entry-presentation_swift_integral_transforms_capability_calculus_laplace_transform_api_session_laplace_transform"></a>
<a id="placement-placement.swift.swift_object.uniffisession_laplacetransform.4e3ba76aaeeb"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func laplaceTransform(
    target: UniffiExpression,
    timeVariable: String,
    frequencyVariable: String,
) -> UniffiExpression
```

Forward Laplace transform \(F(s) = \int_0^\infty f(t)e^{-st}\,dt\).

## laplace_transform

<a id="entry-presentation_swift_integral_transforms_capability_calculus_laplace_transform_api_assumptionscope_laplace_transform"></a>
<a id="placement-placement.swift.swift_object.uniffiassumptionscope_laplacetransform.15f1bc3978b9"></a>
<p class="symi-entry-owner">UniffiAssumptionScope method</p>

```swift signature
func laplaceTransform(
    target: UniffiExpression,
    timeVariable: String,
    frequencyVariable: String,
) -> UniffiExpression
```

Compute a forward Laplace transform using the scope's immutable assumptions.

## laurent_series

<a id="entry-presentation_swift_series_capability_calculus_laurent_series_api_session_laurent_series"></a>
<a id="placement-placement.swift.swift_object.uniffisession_laurentseries.bd7b8d506246"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func laurentSeries(
    target: UniffiExpression,
    variable: String,
    center: UniffiExpression,
    order: UInt64,
) -> UniffiExpression
```

Truncated Laurent expansion at `center`: every \((\operatorname{variable} - \operatorname{center})^k\) term with \(-m \le k < \operatorname{order}\), where `m` is the pole order. Analytic points degrade to the Taylor expansion. At an essential singularity (where `pole_order` declines) the result is an unevaluated `series_unevaluated(...)` placeholder, because no finite truncation of the principal part is correct.

## laurent_series

<a id="entry-presentation_swift_series_capability_calculus_laurent_series_api_expression_laurent_series"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_laurentseries.9153ae2f020c"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func laurentSeries(
    variable: String,
    center: UniffiExpression,
    order: UInt64,
) -> UniffiExpression
```

Truncated Laurent expansion at `center`: every \((\operatorname{variable} - \operatorname{center})^k\) term with \(-m \le k < \operatorname{order}\), where `m` is the pole order. Analytic points degrade to the Taylor expansion. At an essential singularity (where `pole_order` declines) the result is an unevaluated `series_unevaluated(...)` placeholder, because no finite truncation of the principal part is correct.

## limit

<a id="entry-presentation_swift_calculus_capability_calculus_limit_api_session_limit"></a>
<a id="placement-placement.swift.swift_object.uniffisession_limit.ecfe3d60c60b"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func limit(
    target: UniffiExpression,
    variable: String,
    point: UniffiExpression,
    direction: UniffiLimitDirection,
) -> UniffiExpression
```

`limit(expression, variable, point, direction="two_sided")` constructs a deferred limit.

## limit

<a id="entry-presentation_swift_calculus_capability_calculus_limit_api_expression_limit"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_limit.203d10bb9d38"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func limit(
    variable: String,
    point: UniffiExpression,
    direction: UniffiLimitDirection,
) -> UniffiExpression
```

`limit(expression, variable, point, direction="two_sided")` constructs a deferred limit.

## maclaurin_series

<a id="entry-presentation_swift_series_capability_calculus_maclaurin_series_api_analysis_session_maclaurin_series"></a>
<a id="placement-placement.swift.swift_object.uniffisession_maclaurinseries.39fc85963c95"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func maclaurinSeries(
    inputExpression: UniffiExpression,
    variable: String,
    truncationOrder: UInt64,
) -> UniffiExpression
```

`taylor_series` specialised to expansion point 0.

## maclaurin_series

<a id="entry-presentation_swift_series_capability_calculus_maclaurin_series_api_expression_operations_expression_maclaurin_series"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_maclaurinseries.035f86cc2349"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func maclaurinSeries(
    variable: String,
    truncationOrder: UInt64,
) -> UniffiExpression
```

`taylor_series` specialised to expansion point 0.

## pole_order

<a id="entry-presentation_swift_series_capability_calculus_pole_order_api_analysis_session_pole_order"></a>
<a id="placement-placement.swift.swift_object.uniffisession_poleorder.8838e6a5ee33"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func poleOrder(
    inputExpression: UniffiExpression,
    variable: String,
    center: UniffiExpression,
) -> Int64?
```

Order of the singularity at `center`: `0` for analytic/removable points, \(m \ge 1\) for a pole of order \(m\).

## pole_order

<a id="entry-presentation_swift_series_capability_calculus_pole_order_api_expression_operations_expression_pole_order"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_poleorder.ea07a8936648"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func poleOrder(variable: String, center: UniffiExpression) -> Int64?
```

Order of the singularity at `center`: `0` for analytic/removable points, \(m \ge 1\) for a pole of order \(m\).

## residue

<a id="entry-presentation_swift_series_capability_calculus_residue_api_analysis_session_residue"></a>
<a id="placement-placement.swift.swift_object.uniffisession_residue.7c671367a502"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func residue(
    inputExpression: UniffiExpression,
    variable: String,
    center: UniffiExpression,
) -> UniffiExpression
```

Coefficient of \((\operatorname{variable} - \operatorname{center})^{-1}\) in the Laurent expansion at `center`.

## residue

<a id="entry-presentation_swift_series_capability_calculus_residue_api_expression_operations_expression_residue"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_residue.e33263b37c5a"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func residue(
    variable: String,
    center: UniffiExpression,
) -> UniffiExpression
```

Coefficient of \((\operatorname{variable} - \operatorname{center})^{-1}\) in the Laurent expansion at `center`.

## singularities

<a id="entry-presentation_swift_calculus_capability_calculus_singularities_api_session_singularities"></a>
<a id="placement-placement.swift.swift_object.uniffisession_singularities.f4ea5f254036"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func singularities(
    target: UniffiExpression,
    variable: String,
) -> UniffiExpression
```

The singular points of the expression in the complex plane, as a set expression (finite set, union, image set for periodic families, …).

## singularities

<a id="entry-presentation_swift_calculus_capability_calculus_singularities_api_expression_singularities"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_singularities.71f0bb930b6a"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func singularities(variable: String) -> UniffiExpression
```

The singular points of the expression in the complex plane, as a set expression (finite set, union, image set for periodic families, …).

## singularities

<a id="entry-presentation_swift_calculus_capability_calculus_singularities_api_assumptionscope_singularities"></a>
<a id="placement-placement.swift.swift_object.uniffiassumptionscope_singularities.ab625a156d0e"></a>
<p class="symi-entry-owner">UniffiAssumptionScope method</p>

```swift signature
func singularities(
    target: UniffiExpression,
    variable: String,
) -> UniffiExpression
```

Return the isolated complex singularities using the scope's immutable assumptions.

## summation_indefinite

<a id="entry-presentation_swift_calculus_capability_calculus_summation_indefinite_api_analysis_session_summation_indefinite"></a>
<a id="placement-placement.swift.swift_object.uniffisession_summationindefinite.2f706335b0f8"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func summationIndefinite(
    summand: UniffiExpression,
    index: String,
) -> UniffiExpression
```

Anti-difference: a closed form \(F\) with \(F(\operatorname{index}+1) - F(\operatorname{index}) = \operatorname{summand}\).

## summation_indefinite

<a id="entry-presentation_swift_calculus_capability_calculus_summation_indefinite_api_expression_operations_expression_summation_indefinite"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_summationindefinite.89114388c93b"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func summationIndefinite(index: String) -> UniffiExpression
```

Anti-difference: a closed form \(F\) with \(F(\operatorname{index}+1) - F(\operatorname{index}) = \operatorname{summand}\).

## taylor_series

<a id="entry-presentation_swift_series_capability_calculus_taylor_series_api_session_taylor_series"></a>
<a id="placement-placement.swift.swift_object.uniffisession_taylorseries.b5a9243f757b"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func taylorSeries(
    target: UniffiExpression,
    variable: String,
    expansionPoint: UniffiExpression,
    truncationOrder: UInt64,
) -> UniffiExpression
```

Truncated Taylor expansion about `expansion_point`, keeping terms of degree strictly less than `order` (the remainder is \(O((x-a)^{\operatorname{order}})\).

## taylor_series

<a id="entry-presentation_swift_series_capability_calculus_taylor_series_api_expression_taylor_series"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_taylorseries.c30668e0ffad"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func taylorSeries(
    variable: String,
    expansionPoint: UniffiExpression,
    truncationOrder: UInt64,
) -> UniffiExpression
```

Truncated Taylor expansion about `expansion_point`, keeping terms of degree strictly less than `order` (the remainder is \(O((x-a)^{\operatorname{order}})\).

## taylor_series

<a id="entry-presentation_swift_series_capability_calculus_taylor_series_api_assumptionscope_taylor_series"></a>
<a id="placement-placement.swift.swift_object.uniffiassumptionscope_taylorseries.bbd730d2a172"></a>
<p class="symi-entry-owner">UniffiAssumptionScope method</p>

```swift signature
func taylorSeries(
    target: UniffiExpression,
    variable: String,
    expansionPoint: UniffiExpression,
    truncationOrder: UInt64,
) -> UniffiExpression
```

Compute a Taylor polynomial using the scope's immutable assumptions.

## value

<a id="entry-presentation_swift_calculus_capability_calculus_value_api_results_definiteintegrationresult_value"></a>
<a id="placement-placement.swift.swift_object.uniffidefiniteintegrationresult_value.dd8c3d0d37a0"></a>
<p class="symi-entry-owner">UniffiDefiniteIntegrationResult method</p>

```swift signature
func value() -> UniffiExpression?
```

The exact value, present exactly when the verdict is `evaluated`.

## e

<a id="entry-presentation_swift_evaluation_and_constants_capability_constants_e_api_session_e"></a>
<a id="placement-placement.swift.swift_object.uniffisession_e.0a37694253d9"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func e() -> UniffiExpression
```

Euler's number \(e\), the base of the natural logarithm. `exp(1)` and this constant are the same expression.

## euler_gamma

<a id="entry-presentation_swift_evaluation_and_constants_capability_constants_euler_gamma_api_session_euler_gamma"></a>
<a id="placement-placement.swift.swift_object.uniffisession_eulergamma.e86e7eafac44"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func eulerGamma() -> UniffiExpression
```

The Euler–Mascheroni constant \(\gamma\).

## imaginary_unit

<a id="entry-presentation_swift_evaluation_and_constants_capability_constants_imaginary_unit_api_session_imaginary_unit"></a>
<a id="placement-placement.swift.swift_object.uniffisession_imaginaryunit.2eeb81ac47dc"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func imaginaryUnit() -> UniffiExpression
```

The imaginary unit \(i\) with \(i^2 = -1\).

## infinity

<a id="entry-presentation_swift_evaluation_and_constants_capability_constants_infinity_api_session_infinity"></a>
<a id="placement-placement.swift.swift_object.uniffisession_infinity.1ec42ec6dc32"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func infinity() -> UniffiExpression
```

Unsigned positive infinity \(\infty\).

## pi

<a id="entry-presentation_swift_evaluation_and_constants_capability_constants_pi_api_session_pi"></a>
<a id="placement-placement.swift.swift_object.uniffisession_pi.a7ec0ad34999"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func pi() -> UniffiExpression
```

The circle constant \(\pi\).

## call

<a id="entry-presentation_swift_construction_and_parsing_capability_construction_call_api_undefinedfunction_call"></a>
<a id="placement-placement.swift.swift_object.uniffiundefinedfunction_call.feef249df282"></a>
<p class="symi-entry-owner">UniffiUndefinedFunction method</p>

```swift signature
func call(arguments: [UniffiExpression]) -> UniffiExpression
```

WASM spelling of the Python `f(x, …)` call syntax on `undefined_function`.

## integer

<a id="entry-presentation_swift_construction_and_parsing_capability_construction_integer_api_session_integer"></a>
<a id="placement-placement.swift.swift_object.uniffisession_integer.a403f6f0d9d6"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func integer(value: Int64) -> UniffiExpression
```

Build an arbitrary-precision exact integer. Python `bool` values are rejected. JavaScript's recommended facade accepts `bigint` and safe integral `number` values.

## integer_from_string

<a id="entry-presentation_swift_construction_and_parsing_capability_construction_integer_from_string_api_session_integer_from_string"></a>
<a id="placement-placement.swift.swift_object.uniffisession_integerfromstring.7bbdff04fb08"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func integerFromString(text: String) -> UniffiExpression
```

Build an arbitrary-precision integer literal from its decimal string.

## integral

<a id="entry-presentation_swift_deferred_forms_capability_construction_integral_api_analysis_session_integral"></a>
<a id="placement-placement.swift.swift_object.uniffisession_integral.b86a5ce3c649"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func integral(
    integrand: UniffiExpression,
    variable: String,
    lower: UniffiExpression?,
    upper: UniffiExpression?,
) -> UniffiExpression
```

Build an unevaluated integral node (indefinite when bounds are omitted).

## parse

<a id="entry-presentation_swift_construction_and_parsing_capability_construction_parse_api_session_parse"></a>
<a id="placement-placement.swift.swift_object.uniffisession_parse.020527a7a8e8"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func parse(text: String) -> UniffiExpression
```

Parse Symi textual syntax into an expression. Accepts `^` and `**` for powers; knows the builtin function names (`sin`, `log`, `sqrt`, …) and the constants `pi`, `e`.

## parse_latex

<a id="entry-presentation_swift_construction_and_parsing_capability_construction_parse_latex_api_serialization_session_parse_latex"></a>
<a id="placement-placement.swift.swift_object.uniffisession_parselatex.c6c593fb2b63"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func parseLatex(latex: String) -> UniffiMathematicalObject
```

Parse a LaTeX string in Symi's canonical input dialect — the inverse of `to_latex` and the parser the Symi frontend uses. Returns whichever top-level object the input denotes: an ordinary expression, a `\begin{matrix}…\end{matrix}`, or a geometry figure (`(x, y)` point, segment, polygon, or circle), wrapped in the matching exported class exactly as `parse_serialized_object` does. Coverage spans arithmetic, powers, fractions, roots, the elementary and many special functions, comparisons, integrals (including the bare-`d` differential), Leibniz derivatives (`\frac{d}{dx}` — differentiated eagerly), limits, summations, products, determinants, and actuarial annuities. The resolution is context-aware in a way `parse` is not: a bare `i` is the imaginary unit and a bare `e` is Euler's number unless the letter is a bound index (a summation / product / limit index shadows the constant), and `\mathrm{d}` — or a bare `d` that closes an integral — is the differential operator while a bare `d` elsewhere is an ordinary variable. Raises on syntax errors.

## parse_latex_with_environment

<a id="entry-presentation_swift_construction_and_parsing_capability_construction_parse_latex_with_environment_api_serialization_session_parse_latex_with_environment"></a>
<a id="placement-placement.swift.swift_object.uniffisession_parselatexwithenvironment.c877ae885b71"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func parseLatexWithEnvironment(
    latex: String,
    serializedDefinitions: [String],
) -> UniffiMathematicalObject
```

Parse LaTeX after building an ordered definition environment. Each serialized definition is a string with four fields separated by ASCII Unit Separator (`U+001F`): `kind`, `name`, `parameters`, and `body_latex`.

## parse_serialized_object

<a id="entry-presentation_swift_serialization_and_output_capability_construction_parse_serialized_object_api_serialization_session_parse_serialized_object"></a>
<a id="placement-placement.swift.swift_object.uniffisession_parseserializedobject.dd9f2ff661be"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func parseSerializedObject(text: String) -> UniffiMathematicalObject
```

Inverse of `serialize_object`; returns the matching surface class.

## product

<a id="entry-presentation_swift_deferred_forms_capability_construction_product_api_analysis_session_product"></a>
<a id="placement-placement.swift.swift_object.uniffisession_product.2f4593fd98e4"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func product(
    multiplicand: UniffiExpression,
    index: String,
    lower: UniffiExpression,
    upper: UniffiExpression,
) -> UniffiExpression
```

Definite indexed product \(\prod_{\mathit{index}=\mathit{lower}}^{\mathit{upper}} \mathit{multiplicand}\), a first-class `indexed_product` binder (rendered `\prod` in LaTeX).

## product_indefinite

<a id="entry-presentation_swift_deferred_forms_capability_construction_product_indefinite_api_analysis_session_product_indefinite"></a>
<a id="placement-placement.swift.swift_object.uniffisession_productindefinite.705e037b04c5"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func productIndefinite(
    multiplicand: UniffiExpression,
    index: String,
) -> UniffiExpression
```

Indefinite (anti-quotient) product: the `P(k)` satisfying `P(k+1)/P(k) = multiplicand(k)`, the multiplicative analogue of `summation_indefinite`.

## rational

<a id="entry-presentation_swift_construction_and_parsing_capability_construction_rational_api_session_rational"></a>
<a id="placement-placement.swift.swift_object.uniffisession_rational.91a4056839d6"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func rational(numerator: Int64, denominator: Int64) -> UniffiExpression
```

Constructs an exact reduced rational from arbitrary-size integers. A zero denominator is an argument error. Python also accepts `fractions.Fraction` wherever an expression-like input is accepted.

## rational_from_float

<a id="entry-presentation_swift_construction_and_parsing_capability_construction_rational_from_float_api_analysis_session_rational_from_float"></a>
<a id="placement-placement.swift.swift_object.uniffisession_rationalfromfloat.f14c84b372ca"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func rationalFromFloat(
    value: Double,
    maximumDenominator: UInt64,
) -> UniffiExpression
```

Closest rational with denominator \(\leq\) `max_denominator` (the `Fraction.limit_denominator` algorithm).

## reset_context

<a id="entry-presentation_swift_construction_and_parsing_capability_construction_reset_context_api_session_reset_context"></a>
<a id="placement-placement.swift.swift_object.uniffisession_resetcontext.cff4e8511c86"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func resetContext() -> Void
```

Replace the context's entire symbol table and expression store with fresh empty ones. Warning: existing `expression`/`matrix`/geometry objects from this context become stale and must not be used afterwards — their symbol identifiers no longer resolve. Deliberately not available at module level: resetting the shared default context would strand every live object, and the weak expression store already keeps memory bounded by live objects (see the default context).

## serialize_object

<a id="entry-presentation_swift_serialization_and_output_capability_construction_serialize_object_api_serialization_session_serialize_object"></a>
<a id="placement-placement.swift.swift_object.uniffisession_serializeobject.70fba8586dbf"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func serializeObject(object: UniffiMathematicalObject) -> String
```

Serialize an expression, matrix, or geometry object to the stable Symi serialization format, round-trippable via `parse_serialized_object`.

## serialize_object

<a id="entry-presentation_swift_serialization_and_output_capability_construction_serialize_object_api_serialization_expression_serialize_object"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_serializeobject.8169d8f5a4dc"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func serializeObject() -> String
```

Serialize an expression, matrix, or geometry object to the stable Symi serialization format, round-trippable via `parse_serialized_object`.

## serialize_object

<a id="entry-presentation_swift_serialization_and_output_capability_construction_serialize_object_api_serialization_circle2d_serialize_object"></a>
<a id="placement-placement.swift.swift_object.unifficircle2d_serializeobject.a3fbc2ce1ed1"></a>
<p class="symi-entry-owner">UniffiCircle2d method</p>

```swift signature
func serializeObject() -> String
```

Serialize an expression, matrix, or geometry object to the stable Symi serialization format, round-trippable via `parse_serialized_object`.

## serialize_object

<a id="entry-presentation_swift_serialization_and_output_capability_construction_serialize_object_api_serialization_matrix_serialize_object"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_serializeobject.21fb7eb86461"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func serializeObject() -> String
```

Serialize an expression, matrix, or geometry object to the stable Symi serialization format, round-trippable via `parse_serialized_object`.

## serialize_object

<a id="entry-presentation_swift_serialization_and_output_capability_construction_serialize_object_api_partial_differential_equations_partialdifferentialequationcoordinatechange_serialize_object"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationcoordinatechange_serializeobject.1b4d5aae1ef2"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCoordinateChange method</p>

```swift signature
func serializeObject() -> String
```

Serialize this coordinate change in the versioned canonical object grammar.

## serialize_object

<a id="entry-presentation_swift_serialization_and_output_capability_construction_serialize_object_api_partial_differential_equations_partialdifferentialequationproblem_serialize_object"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationproblem_serializeobject.8e1e036fa0eb"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationProblem method</p>

```swift signature
func serializeObject() -> String
```

Serialize this problem in the versioned canonical object grammar.

## serialize_object

<a id="entry-presentation_swift_serialization_and_output_capability_construction_serialize_object_api_serialization_point2d_serialize_object"></a>
<a id="placement-placement.swift.swift_object.uniffipoint2d_serializeobject.a63681fb7fb4"></a>
<p class="symi-entry-owner">UniffiPoint2d method</p>

```swift signature
func serializeObject() -> String
```

Serialize an expression, matrix, or geometry object to the stable Symi serialization format, round-trippable via `parse_serialized_object`.

## serialize_object

<a id="entry-presentation_swift_serialization_and_output_capability_construction_serialize_object_api_serialization_polygon2d_serialize_object"></a>
<a id="placement-placement.swift.swift_object.uniffipolygon2d_serializeobject.bbb443b26008"></a>
<p class="symi-entry-owner">UniffiPolygon2d method</p>

```swift signature
func serializeObject() -> String
```

Serialize an expression, matrix, or geometry object to the stable Symi serialization format, round-trippable via `parse_serialized_object`.

## serialize_object

<a id="entry-presentation_swift_serialization_and_output_capability_construction_serialize_object_api_serialization_segment2d_serialize_object"></a>
<a id="placement-placement.swift.swift_object.uniffisegment2d_serializeobject.ccfb383a723e"></a>
<p class="symi-entry-owner">UniffiSegment2d method</p>

```swift signature
func serializeObject() -> String
```

Serialize an expression, matrix, or geometry object to the stable Symi serialization format, round-trippable via `parse_serialized_object`.

## serialize_object

<a id="entry-presentation_swift_serialization_and_output_capability_construction_serialize_object_api_serialization_triangle2d_serialize_object"></a>
<a id="placement-placement.swift.swift_object.uniffitriangle2d_serializeobject.f4199b03a835"></a>
<p class="symi-entry-owner">UniffiTriangle2d method</p>

```swift signature
func serializeObject() -> String
```

Serialize an expression, matrix, or geometry object to the stable Symi serialization format, round-trippable via `parse_serialized_object`.

## summation

<a id="entry-presentation_swift_deferred_forms_capability_construction_summation_api_analysis_session_summation"></a>
<a id="placement-placement.swift.swift_object.uniffisession_summation.4a767531b0be"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func summation(
    summand: UniffiExpression,
    index: String,
    lower: UniffiExpression,
    upper: UniffiExpression,
) -> UniffiExpression
```

Build a summation node \(\sum\).

## symbol

<a id="entry-presentation_swift_construction_and_parsing_capability_construction_symbol_api_session_symbol"></a>
<a id="placement-placement.swift.swift_object.uniffisession_symbol.d55684481496"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func symbol(name: String) -> UniffiExpression
```

Intern a symbol and (optionally) attach assumptions used by the assumption engine and the simplifier. Domain flags refine in the order `natural` \(\to\) `integer` \(\to\) `rational` \(\to\) `real`; `positive`/`negative` also set nonzero, and `nonzero` may be requested independently.

## to_latex

<a id="entry-presentation_swift_serialization_and_output_capability_construction_to_latex_api_session_to_latex"></a>
<a id="placement-placement.swift.swift_object.uniffisession_tolatex.88c140d1a2fb"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func toLatex(target: UniffiExpression) -> String
```

Render an expression as LaTeX. Matrices and geometry objects have their own `to_latex` methods.

## to_latex

<a id="entry-presentation_swift_serialization_and_output_capability_construction_to_latex_api_expression_to_latex"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_tolatex.8a9dd2119a1f"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func toLatex() -> String
```

Render an expression as LaTeX. Matrices and geometry objects have their own `to_latex` methods.

## to_latex

<a id="entry-presentation_swift_serialization_and_output_capability_construction_to_latex_api_circle2d_to_latex"></a>
<a id="placement-placement.swift.swift_object.unifficircle2d_tolatex.64aa2b211805"></a>
<p class="symi-entry-owner">UniffiCircle2d method</p>

```swift signature
func toLatex() -> String
```

Render an expression as LaTeX. Matrices and geometry objects have their own `to_latex` methods.

## to_latex

<a id="entry-presentation_swift_serialization_and_output_capability_construction_to_latex_api_serialization_matrix_to_latex"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_tolatex.97b22797efad"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func toLatex() -> String
```

Render an expression as LaTeX. Matrices and geometry objects have their own `to_latex` methods.

## to_latex

<a id="entry-presentation_swift_serialization_and_output_capability_construction_to_latex_api_partial_differential_equations_partialdifferentialequationproblem_to_latex"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationproblem_tolatex.20a0b38477dc"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationProblem method</p>

```swift signature
func toLatex() -> String
```

Render this problem as LaTeX, as a system when it carries conditions.

## to_latex

<a id="entry-presentation_swift_serialization_and_output_capability_construction_to_latex_api_point2d_to_latex"></a>
<a id="placement-placement.swift.swift_object.uniffipoint2d_tolatex.8922f1a82f65"></a>
<p class="symi-entry-owner">UniffiPoint2d method</p>

```swift signature
func toLatex() -> String
```

Render an expression as LaTeX. Matrices and geometry objects have their own `to_latex` methods.

## to_latex

<a id="entry-presentation_swift_serialization_and_output_capability_construction_to_latex_api_polygon2d_to_latex"></a>
<a id="placement-placement.swift.swift_object.uniffipolygon2d_tolatex.5b046a98938b"></a>
<p class="symi-entry-owner">UniffiPolygon2d method</p>

```swift signature
func toLatex() -> String
```

Render an expression as LaTeX. Matrices and geometry objects have their own `to_latex` methods.

## to_latex

<a id="entry-presentation_swift_serialization_and_output_capability_construction_to_latex_api_segment2d_to_latex"></a>
<a id="placement-placement.swift.swift_object.uniffisegment2d_tolatex.70f79655cf03"></a>
<p class="symi-entry-owner">UniffiSegment2d method</p>

```swift signature
func toLatex() -> String
```

Render an expression as LaTeX. Matrices and geometry objects have their own `to_latex` methods.

## to_latex

<a id="entry-presentation_swift_serialization_and_output_capability_construction_to_latex_api_geometry_operations_triangle2d_to_latex"></a>
<a id="placement-placement.swift.swift_object.uniffitriangle2d_tolatex.59870f7a2694"></a>
<p class="symi-entry-owner">UniffiTriangle2d method</p>

```swift signature
func toLatex() -> String
```

Render an expression as LaTeX. Matrices and geometry objects have their own `to_latex` methods.

## to_latex_with_options

<a id="entry-presentation_swift_serialization_and_output_capability_construction_to_latex_with_options_api_serialization_session_to_latex_with_options"></a>
<a id="placement-placement.swift.swift_object.uniffisession_tolatexwithoptions.86dd51fbbfdc"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func toLatexWithOptions(
    inputExpression: UniffiExpression,
    options: UniffiLatexPresentationOptions,
) -> String
```

Render an expression as LaTeX with presentation flags. Each argument is a string naming the choice for one flag; an unrecognized name falls back to that flag's canonical default (so `to_latex_with_options(e, "", "", "")` equals `to_latex(e)`):

## to_latex_with_options

<a id="entry-presentation_swift_serialization_and_output_capability_construction_to_latex_with_options_api_serialization_expression_to_latex_with_options"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_tolatexwithoptions.e66acd1eb6b0"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func toLatexWithOptions(options: UniffiLatexPresentationOptions) -> String
```

Render an expression as LaTeX with presentation flags. Each argument is a string naming the choice for one flag; an unrecognized name falls back to that flag's canonical default (so `to_latex_with_options(e, "", "", "")` equals `to_latex(e)`):

## undefined_function

<a id="entry-presentation_swift_construction_and_parsing_capability_construction_undefined_function_api_session_undefined_function"></a>
<a id="placement-placement.swift.swift_object.uniffisession_undefinedfunction.69ab34c3796f"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func undefinedFunction(name: String) -> UniffiUndefinedFunction
```

A callable proxy for a user-named function. Calling it with expression arguments builds the function-call expression (see the object-model page and the worked ODE example).

## admits_additive_solution_symmetry

<a id="entry-presentation_swift_object_model_capability_contexts_admits_additive_solution_symmetry_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_admits_additive_solution_symmetry"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryaction_admitsadditivesolutionsymmetry.7976f19bff6b"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAction method</p>

```swift signature
func admitsAdditiveSolutionSymmetry() -> Bool
```

Whether the action adds an arbitrary solution by linear superposition.

## admits_additive_solution_symmetry

<a id="entry-presentation_swift_object_model_capability_contexts_admits_additive_solution_symmetry_api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_admits_additive_solution_symmetry"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryalgebra_admitsadditivesolutionsymmetry.c4abee53fc7a"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAlgebra method</p>

```swift signature
func admitsAdditiveSolutionSymmetry() -> Bool
```

Whether adding any solution of the linear homogeneous equation is also a symmetry.

## amplitude

<a id="entry-presentation_swift_object_model_capability_contexts_amplitude_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_amplitude"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryaction_amplitude.0db9a431fa3c"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAction method</p>

```swift signature
func amplitude() -> UniffiExpression?
```

The amplitude multiplying the transformed seed.

## applied_to_seed

<a id="entry-presentation_swift_object_model_capability_contexts_applied_to_seed_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_applied_to_seed"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryaction_appliedtoseed.89a4fee91394"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAction method</p>

```swift signature
func appliedToSeed(seed: UniffiUndefinedFunction) -> UniffiExpression
```

The transformed seed solution under the action.

## applied_to_seed_with_additive_solution

<a id="entry-presentation_swift_object_model_capability_contexts_applied_to_seed_with_additive_solution_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_applied_to_seed_with_additive_solution"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryaction_appliedtoseedwithadditivesolution.05d7e781170a"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAction method</p>

```swift signature
func appliedToSeedWithAdditiveSolution(
    seed: UniffiUndefinedFunction,
    additiveSolution: UniffiUndefinedFunction,
) -> UniffiExpression
```

The transformed seed solution plus an added solution under the action.

## arbitrary_functions

<a id="entry-presentation_swift_object_model_capability_contexts_arbitrary_functions_api_partial_differential_equations_partialdifferentialequationsolutionfamily_arbitrary_functions"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsolutionfamily_arbitraryfunctions.76d0cef27815"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolutionFamily method</p>

```swift signature
func arbitraryFunctions() -> [UniffiPartialDifferentialEquationArbitraryFunction]
```

The functions that stay arbitrary and opaque throughout verification.

## arity

<a id="entry-presentation_swift_object_model_capability_contexts_arity_api_partial_differential_equations_partialdifferentialequationarbitraryfunction_arity"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationarbitraryfunction_arity.d7098d5b5c09"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationArbitraryFunction method</p>

```swift signature
func arity() -> UInt64
```

The recorded and validated function arity.

## assumptions_of

<a id="entry-presentation_swift_default_context_capability_contexts_assumptions_of_api_session_assumptions_of"></a>
<a id="placement-placement.swift.swift_object.uniffisession_assumptionsof.22498f424ef9"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func assumptionsOf(variable: String) -> [UniffiAssumptionProposition]
```

Return every assumption declared about one symbol, as a list of proposition texts such as `"real(x)"` or `"prime(n)"`. The variable may be a name or same-context symbol. The list is what was declared, not what can be proved; use `ask` for a three-valued verdict.

## basis

<a id="entry-presentation_swift_object_model_capability_contexts_basis_api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_basis"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryalgebra_basis.dbbaab5c9c1a"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAlgebra method</p>

```swift signature
func basis() -> [UniffiPartialDifferentialEquationPointSymmetryGenerator]
```

The independently verified basis generators, one per parameter.

## boundary_condition_residuals

<a id="entry-presentation_swift_object_model_capability_contexts_boundary_condition_residuals_api_partial_differential_equations_partialdifferentialequationverificationreport_boundary_condition_residuals"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationverificationreport_boundaryconditionresiduals.168c81e2b6d2"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationVerificationReport method</p>

```swift signature
func boundaryConditionResiduals() -> [UniffiPartialDifferentialEquationVerificationResidual]
```

One reduced residual per boundary condition, in insertion order.

## boundary_conditions

<a id="entry-presentation_swift_object_model_capability_contexts_boundary_conditions_api_partial_differential_equations_partialdifferentialequationproblem_boundary_conditions"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationproblem_boundaryconditions.774c95254359"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationProblem method</p>

```swift signature
func boundaryConditions() -> [UniffiExpression]
```

The boundary-condition residuals in insertion order.

## canonicalize_partial_differential_equation

<a id="entry-presentation_swift_object_model_capability_contexts_canonicalize_partial_differential_equation_api_partial_differential_equations_session_canonicalize_partial_differential_equation"></a>
<a id="placement-placement.swift.swift_object.uniffisession_canonicalizepartialdifferentialequation.7daa77ef8913"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func canonicalizePartialDifferentialEquation(problem: UniffiPartialDifferentialEquationProblem) -> UniffiPartialDifferentialEquationCanonicalizationResult
```

Construct and independently verify exact canonical coordinates for a supported PDE.

## canonicalized

<a id="entry-presentation_swift_object_model_capability_contexts_canonicalized_api_partial_differential_equations_partialdifferentialequationcanonicalizationresult_canonicalized"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationcanonicalizationresult_canonicalized.8e6192a90220"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCanonicalizationResult method</p>

```swift signature
func canonicalized() -> Bool
```

Whether verified canonical coordinates were constructed.

## cases

<a id="entry-presentation_swift_object_model_capability_contexts_cases_api_partial_differential_equations_partialdifferentialequationsecondorderclassification_cases"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsecondorderclassification_cases.15b6f1441a7b"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSecondOrderClassification method</p>

```swift signature
func cases() -> [UniffiPartialDifferentialEquationSecondOrderTypeCase]
```

The complete exact case table, when the verdict is conditional.

## change_partial_differential_equation_variables

<a id="entry-presentation_swift_object_model_capability_contexts_change_partial_differential_equation_variables_api_partial_differential_equations_session_change_partial_differential_equation_variables"></a>
<a id="placement-placement.swift.swift_object.uniffisession_changepartialdifferentialequationvariables.b517199f1857"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func changePartialDifferentialEquationVariables(
    problem: UniffiPartialDifferentialEquationProblem,
    targetVariables: [String],
    forwardCoordinates: [UniffiExpression]?,
    inverseCoordinates: [UniffiExpression]?,
    targetDependentFunction: UniffiUndefinedFunction?,
) -> UniffiPartialDifferentialEquationTransformationResult
```

Transform a two-variable PDE through an exact user-supplied change of variables.

## claimed_governing_residual

<a id="entry-presentation_swift_object_model_capability_contexts_claimed_governing_residual_api_partial_differential_equations_partialdifferentialequationtransformationverificationreport_claimed_governing_residual"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationtransformationverificationreport_claimedgoverningresidual.632e1d8c0c0c"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationTransformationVerificationReport method</p>

```swift signature
func claimedGoverningResidual() -> UniffiExpression
```

The governing residual the transformation claimed.

## classify_partial_differential_equation

<a id="entry-presentation_swift_object_model_capability_contexts_classify_partial_differential_equation_api_partial_differential_equations_session_classify_partial_differential_equation"></a>
<a id="placement-placement.swift.swift_object.uniffisession_classifypartialdifferentialequation.f1e10f4a1990"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func classifyPartialDifferentialEquation(problem: UniffiPartialDifferentialEquationProblem) -> UniffiPartialDifferentialEquationClassification
```

Classify a validated scalar partial differential equation with exact structural analysis.

## classify_second_order_partial_differential_equation

<a id="entry-presentation_swift_object_model_capability_contexts_classify_second_order_partial_differential_equation_api_partial_differential_equations_session_classify_second_order_partial_differential_equation"></a>
<a id="placement-placement.swift.swift_object.uniffisession_classifysecondorderpartialdifferentialequation.569e13201a4f"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func classifySecondOrderPartialDifferentialEquation(problem: UniffiPartialDifferentialEquationProblem) -> UniffiPartialDifferentialEquationSecondOrderClassification
```

Classify a two-variable linear second-order PDE over real coordinates.

## clear_assumptions

<a id="entry-presentation_swift_default_context_capability_contexts_clear_assumptions_api_session_clear_assumptions"></a>
<a id="placement-placement.swift.swift_object.uniffisession_clearassumptions.e21da5386c09"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func clearAssumptions(variable: String) -> Void
```

Reset one symbol's assumptions to the default (complex domain, every property unknown).

## coefficient_data

<a id="entry-presentation_swift_object_model_capability_contexts_coefficient_data_api_partial_differential_equations_partialdifferentialequationclassification_coefficient_data"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationclassification_coefficientdata.334110672947"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationClassification method</p>

```swift signature
func coefficientData() -> UniffiPartialDifferentialEquationCoefficientData
```

The exact affine coefficient data extracted from the governing residual.

## components

<a id="entry-presentation_swift_object_model_capability_contexts_components_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_components"></a>
<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsystemsolveresult_components.6f4a994b1287"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSystemSolveResult method</p>

```swift signature
func components() -> [UniffiExpression]
```

One explicit value per declared unknown, in declaration order, when solved.

## composition_residuals

<a id="entry-presentation_swift_object_model_capability_contexts_composition_residuals_api_partial_differential_equations_partialdifferentialequationtransformationverificationreport_composition_residuals"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationtransformationverificationreport_compositionresiduals.b4f3ca3499e3"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationTransformationVerificationReport method</p>

```swift signature
func compositionResiduals() -> [UniffiExpression]
```

Every forward and inverse map-composition residual.

## condition

<a id="entry-presentation_swift_object_model_capability_contexts_condition_api_partial_differential_equations_partialdifferentialequationsecondordertypecase_condition"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsecondordertypecase_condition.7cb5b6f97f36"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSecondOrderTypeCase method</p>

```swift signature
func condition() -> UniffiAssumptionProposition
```

The exact condition under which this case's classical type holds.

## coordinate_change

<a id="entry-presentation_swift_object_model_capability_contexts_coordinate_change_api_partial_differential_equations_partialdifferentialequationtransformationresult_coordinate_change"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationtransformationresult_coordinatechange.62f1538f1b99"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationTransformationResult method</p>

```swift signature
func coordinateChange() -> UniffiPartialDifferentialEquationCoordinateChange?
```

The validated coordinate change of a successful transformation.

## coordinate_infinitesimals

<a id="entry-presentation_swift_object_model_capability_contexts_coordinate_infinitesimals_api_partial_differential_equations_partialdifferentialequationpointsymmetrygenerator_coordinate_infinitesimals"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetrygenerator_coordinateinfinitesimals.107a614fa25b"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryGenerator method</p>

```swift signature
func coordinateInfinitesimals() -> [UniffiExpression]
```

The coordinate infinitesimals in the problem's independent-variable order.

## decline

<a id="entry-presentation_swift_object_model_capability_contexts_decline_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_decline"></a>
<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsolveresult_decline.7fc8dae94615"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSolveResult method</p>

```swift signature
func decline() -> UniffiOrdinaryDifferentialEquationSolveDecline?
```

The typed reason no certified candidate was produced.

## decline

<a id="entry-presentation_swift_object_model_capability_contexts_decline_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_decline"></a>
<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsystemsolveresult_decline.501e319777e8"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSystemSolveResult method</p>

```swift signature
func decline() -> UniffiOrdinaryDifferentialEquationSystemSolveDecline?
```

The typed reason no certified assignment was produced.

## decline

<a id="entry-presentation_swift_object_model_capability_contexts_decline_api_partial_differential_equations_partialdifferentialequationcanonicalizationresult_decline"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationcanonicalizationresult_decline.a56f5af0e1f1"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCanonicalizationResult method</p>

```swift signature
func decline() -> UniffiPartialDifferentialEquationCanonicalizationDecline?
```

The exact reason automatic canonicalization declined.

## decline

<a id="entry-presentation_swift_object_model_capability_contexts_decline_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_decline"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryaction_decline.7c4c09e94b1a"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAction method</p>

```swift signature
func decline() -> UniffiPartialDifferentialEquationSymmetryActionDecline?
```

The typed reason the action was not constructed.

## decline

<a id="entry-presentation_swift_object_model_capability_contexts_decline_api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_decline"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryalgebra_decline.564c4afc012a"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAlgebra method</p>

```swift signature
func decline() -> UniffiPartialDifferentialEquationPointSymmetryDecline?
```

The typed reason the algebra was not derived.

## decline

<a id="entry-presentation_swift_object_model_capability_contexts_decline_api_partial_differential_equations_partialdifferentialequationsecondorderclassification_decline"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsecondorderclassification_decline.f2ddeb353378"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSecondOrderClassification method</p>

```swift signature
func decline() -> UniffiPartialDifferentialEquationSecondOrderClassificationDecline?
```

The exact reason an unknown analysis could not be completed.

## decline

<a id="entry-presentation_swift_object_model_capability_contexts_decline_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_decline"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsimilaritysolution_decline.464ecef9e63a"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSimilaritySolution method</p>

```swift signature
func decline() -> UniffiPartialDifferentialEquationSimilarityReductionDecline?
```

The typed reason no similarity family was produced.

## decline

<a id="entry-presentation_swift_object_model_capability_contexts_decline_api_partial_differential_equations_partialdifferentialequationsolveresult_decline"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsolveresult_decline.e852c6112d04"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolveResult method</p>

```swift signature
func decline() -> UniffiPartialDifferentialEquationSolveDecline?
```

The stable decline reason, when no solution was produced.

## decline

<a id="entry-presentation_swift_object_model_capability_contexts_decline_api_partial_differential_equations_partialdifferentialequationtransformationresult_decline"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationtransformationresult_decline.08f4f6acb1c8"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationTransformationResult method</p>

```swift signature
func decline() -> UniffiPartialDifferentialEquationTransformationDecline?
```

The exact reason no transformation was produced.

## dependent_function

<a id="entry-presentation_swift_object_model_capability_contexts_dependent_function_api_partial_differential_equations_partialdifferentialequationproblem_dependent_function"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationproblem_dependentfunction.296b16c673cc"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationProblem method</p>

```swift signature
func dependentFunction() -> String
```

The declared dependent-function name.

## dependent_infinitesimal

<a id="entry-presentation_swift_object_model_capability_contexts_dependent_infinitesimal_api_partial_differential_equations_partialdifferentialequationpointsymmetrygenerator_dependent_infinitesimal"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetrygenerator_dependentinfinitesimal.96e64d3f77cd"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryGenerator method</p>

```swift signature
func dependentInfinitesimal() -> UniffiExpression
```

The dependent infinitesimal of the generator.

## derivative_coefficients

<a id="entry-presentation_swift_object_model_capability_contexts_derivative_coefficients_api_partial_differential_equations_partialdifferentialequationprincipalpart_derivative_coefficients"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationprincipalpart_derivativecoefficients.105a14258c6c"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPrincipalPart method</p>

```swift signature
func derivativeCoefficients() -> [UniffiPartialDifferentialEquationPrincipalCoefficient]
```

The raw mixed-derivative coefficients, before symmetrization halves them.

## determining_equations

<a id="entry-presentation_swift_object_model_capability_contexts_determining_equations_api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_determining_equations"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryalgebra_determiningequations.effc248aebdb"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAlgebra method</p>

```swift signature
func determiningEquations() -> [UniffiExpression]
```

The determining equations exactly as derived, before any reduction.

## discharged_obligations

<a id="entry-presentation_swift_object_model_capability_contexts_discharged_obligations_api_partial_differential_equations_partialdifferentialequationsolutionprovenance_discharged_obligations"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsolutionprovenance_dischargedobligations.c5b3b10e891a"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolutionProvenance method</p>

```swift signature
func dischargedObligations() -> [UniffiPartialDifferentialEquationProofObligation]
```

The obligations discharged by exact query before the solution was returned.

## discover_partial_differential_equation

<a id="entry-presentation_swift_object_model_capability_contexts_discover_partial_differential_equation_api_partial_differential_equations_session_discover_partial_differential_equation"></a>
<a id="placement-placement.swift.swift_object.uniffisession_discoverpartialdifferentialequation.913a679faaf7"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func discoverPartialDifferentialEquation(
    equation: UniffiExpression,
    initialConditions: [UniffiExpression],
    boundaryConditions: [UniffiExpression],
) -> UniffiPartialDifferentialEquationProblem
```

Discover the unique scalar partial differential equation signature from one governing residual, in the default context.

## discriminant

<a id="entry-presentation_swift_object_model_capability_contexts_discriminant_api_partial_differential_equations_partialdifferentialequationsecondorderclassification_discriminant"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsecondorderclassification_discriminant.68a96438e85d"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSecondOrderClassification method</p>

```swift signature
func discriminant() -> UniffiExpression
```

The exact discriminant `b^2 - a*c` of the symmetric principal matrix.

## elements

<a id="entry-presentation_swift_object_model_capability_contexts_elements_api_results_setenumeration_elements"></a>
<a id="placement-placement.swift.swift_object.uniffisetenumeration_elements.475cb4a9700e"></a>
<p class="symi-entry-owner">UniffiSetEnumeration method</p>

```swift signature
func elements() -> [UniffiExpression]
```

The exact elements produced, in increasing order.

## equation_type

<a id="entry-presentation_swift_object_model_capability_contexts_equation_type_api_partial_differential_equations_partialdifferentialequationsecondorderclassification_equation_type"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsecondorderclassification_equationtype.66b8c90a7bdd"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSecondOrderClassification method</p>

```swift signature
func equationType() -> UniffiPartialDifferentialEquationSecondOrderType?
```

The single proved classical type, when the verdict is definite.

## equation_type

<a id="entry-presentation_swift_object_model_capability_contexts_equation_type_api_partial_differential_equations_partialdifferentialequationsecondordertypecase_equation_type"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsecondordertypecase_equationtype.5ce65123765a"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSecondOrderTypeCase method</p>

```swift signature
func equationType() -> UniffiPartialDifferentialEquationSecondOrderType
```

The classical type proved under this case's condition.

## explicit_branch

<a id="entry-presentation_swift_object_model_capability_contexts_explicit_branch_api_partial_differential_equations_partialdifferentialequationverificationreport_explicit_branch"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationverificationreport_explicitbranch.8d09a327aafd"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationVerificationReport method</p>

```swift signature
func explicitBranch() -> UniffiExpression?
```

The isolated explicit branch checked for an implicit candidate.

## explicit_partial_differential_equation_solution

<a id="entry-presentation_swift_object_model_capability_contexts_explicit_partial_differential_equation_solution_api_partial_differential_equations_session_explicit_partial_differential_equation_solution"></a>
<a id="placement-placement.swift.swift_object.uniffisession_explicitpartialdifferentialequationsolution.6dd157a18a6b"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func explicitPartialDifferentialEquationSolution(solution: UniffiExpression) -> UniffiPartialDifferentialEquationSolutionFamily
```

Create an explicit partial differential equation solution family in the default context.

## first_equation

<a id="entry-presentation_swift_object_model_capability_contexts_first_equation_api_partial_differential_equations_partialdifferentialequationseparationresult_first_equation"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationseparationresult_firstequation.31e30b5ffe71"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSeparationResult method</p>

```swift signature
func firstEquation() -> UniffiPartialDifferentialEquationSeparatedEquation
```

The first exact one-variable ordinary differential equation.

## form

<a id="entry-presentation_swift_object_model_capability_contexts_form_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_form"></a>
<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsolveresult_form.e26ff097e5db"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSolveResult method</p>

```swift signature
func form() -> UniffiOrdinaryDifferentialEquationSolutionForm?
```

Whether the solution is the value of the unknown or a relation read as zero.

## form

<a id="entry-presentation_swift_object_model_capability_contexts_form_api_partial_differential_equations_partialdifferentialequationsolutionfamily_form"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsolutionfamily_form.c9f40376ce85"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolutionFamily method</p>

```swift signature
func form() -> UniffiPartialDifferentialEquationSolutionForm
```

Whether this candidate is an `explicit` value or an `implicit` residual.

## forward_coordinates

<a id="entry-presentation_swift_object_model_capability_contexts_forward_coordinates_api_partial_differential_equations_partialdifferentialequationcoordinatechange_forward_coordinates"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationcoordinatechange_forwardcoordinates.952f9b134fad"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCoordinateChange method</p>

```swift signature
func forwardCoordinates() -> [UniffiExpression]
```

The ordered source-to-target coordinate expressions.

## frequency_domain_equation

<a id="entry-presentation_swift_object_model_capability_contexts_frequency_domain_equation_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_frequency_domain_equation"></a>
<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsolveresult_frequencydomainequation.90969cddd80a"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSolveResult method</p>

```swift signature
func frequencyDomainEquation() -> UniffiExpression?
```

The frequency-domain equation of a Laplace transform solution, read as zero.

## full_coefficients

<a id="entry-presentation_swift_object_model_capability_contexts_full_coefficients_api_partial_differential_equations_partialdifferentialequationcoefficientdata_full_coefficients"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationcoefficientdata_fullcoefficients.844a146b8746"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCoefficientData method</p>

```swift signature
func fullCoefficients() -> [UniffiPartialDifferentialEquationJetCoefficient]?
```

Every jet coefficient, when the equation is exactly linear.

## general_generator

<a id="entry-presentation_swift_object_model_capability_contexts_general_generator_api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_general_generator"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryalgebra_generalgenerator.d4a6cd5b775a"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAlgebra method</p>

```swift signature
func generalGenerator() -> UniffiPartialDifferentialEquationPointSymmetryGenerator?
```

The general generator, a combination of the basis through the parameters.

## generality

<a id="entry-presentation_swift_object_model_capability_contexts_generality_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_generality"></a>
<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsolveresult_generality.4e08359261dd"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSolveResult method</p>

```swift signature
func generality() -> UniffiOrdinaryDifferentialEquationGeneralityVerdict?
```

The rank decision behind a complete-family claim, when the request required one.

## generality

<a id="entry-presentation_swift_object_model_capability_contexts_generality_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_generality"></a>
<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsystemsolveresult_generality.821666cd0fd2"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSystemSolveResult method</p>

```swift signature
func generality() -> UniffiOrdinaryDifferentialEquationGeneralityVerdict?
```

The rank decision on the constants-to-initial-jet map, when verification ran.

## generality

<a id="entry-presentation_swift_object_model_capability_contexts_generality_api_ordinary_differential_equations_ordinarydifferentialequationsystemverificationreport_generality"></a>
<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsystemverificationreport_generality.80fcf261d1af"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSystemVerificationReport method</p>

```swift signature
func generality() -> UniffiOrdinaryDifferentialEquationGeneralityVerdict
```

The rank decision on the map from the supplied constants to the initial jet.

## generated_constants

<a id="entry-presentation_swift_object_model_capability_contexts_generated_constants_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_generated_constants"></a>
<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsolveresult_generatedconstants.80c0ae97cab9"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSolveResult method</p>

```swift signature
func generatedConstants() -> [UniffiExpression]
```

Exactly the constants the solution treats as free.

## generated_constants

<a id="entry-presentation_swift_object_model_capability_contexts_generated_constants_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_generated_constants"></a>
<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsystemsolveresult_generatedconstants.2c6c8993ba19"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSystemSolveResult method</p>

```swift signature
func generatedConstants() -> [UniffiExpression]
```

Exactly the constants the assignment treats as free.

## governing_residual

<a id="entry-presentation_swift_object_model_capability_contexts_governing_residual_api_partial_differential_equations_partialdifferentialequationverificationreport_governing_residual"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationverificationreport_governingresidual.93f4bd65187b"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationVerificationReport method</p>

```swift signature
func governingResidual() -> UniffiPartialDifferentialEquationVerificationResidual
```

Independently reduced governing-equation evidence.

## highest_order_coefficients

<a id="entry-presentation_swift_object_model_capability_contexts_highest_order_coefficients_api_partial_differential_equations_partialdifferentialequationcoefficientdata_highest_order_coefficients"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationcoefficientdata_highestordercoefficients.4dc7ac67412a"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCoefficientData method</p>

```swift signature
func highestOrderCoefficients() -> [UniffiPartialDifferentialEquationJetCoefficient]?
```

The highest-order jet coefficients, when the equation is affine in them.

## homogeneous

<a id="entry-presentation_swift_object_model_capability_contexts_homogeneous_api_partial_differential_equations_partialdifferentialequationcoefficientdata_homogeneous"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationcoefficientdata_homogeneous.ef0401236d6f"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCoefficientData method</p>

```swift signature
func homogeneous() -> Bool?
```

Whether the equation was proved homogeneous, when that statement is meaningful.

## image

<a id="entry-presentation_swift_object_model_capability_contexts_image_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_image"></a>
<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsolveresult_image.271c4e1715b5"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSolveResult method</p>

```swift signature
func image() -> UniffiExpression?
```

The image of the unknown a Laplace transform solution solved for.

## implicit_partial_differential_equation_solution

<a id="entry-presentation_swift_object_model_capability_contexts_implicit_partial_differential_equation_solution_api_partial_differential_equations_session_implicit_partial_differential_equation_solution"></a>
<a id="placement-placement.swift.swift_object.uniffisession_implicitpartialdifferentialequationsolution.ba46261688e5"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func implicitPartialDifferentialEquationSolution(residual: UniffiExpression) -> UniffiPartialDifferentialEquationSolutionFamily
```

Create an implicit partial differential equation solution family in the default context.

## inconclusive_reason

<a id="entry-presentation_swift_object_model_capability_contexts_inconclusive_reason_api_partial_differential_equations_partialdifferentialequationverificationreport_inconclusive_reason"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationverificationreport_inconclusivereason.971c18d050d7"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationVerificationReport method</p>

```swift signature
func inconclusiveReason() -> UniffiPartialDifferentialEquationVerificationInconclusiveReason?
```

The deterministic reason verification could not reach a proof.

## independent_variable_name

<a id="entry-presentation_swift_object_model_capability_contexts_independent_variable_name_api_partial_differential_equations_partialdifferentialequationseparatedequation_independent_variable_name"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationseparatedequation_independentvariablename.07f2843e035b"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSeparatedEquation method</p>

```swift signature
func independentVariableName() -> String
```

The name of this equation's independent variable.

## independent_variables

<a id="entry-presentation_swift_object_model_capability_contexts_independent_variables_api_partial_differential_equations_partialdifferentialequationproblem_independent_variables"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationproblem_independentvariables.4db1e71be871"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationProblem method</p>

```swift signature
func independentVariables() -> [String]
```

The independent variables in their semantic declared order.

## initial_condition_residuals

<a id="entry-presentation_swift_object_model_capability_contexts_initial_condition_residuals_api_partial_differential_equations_partialdifferentialequationverificationreport_initial_condition_residuals"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationverificationreport_initialconditionresiduals.210fdcda8e7a"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationVerificationReport method</p>

```swift signature
func initialConditionResiduals() -> [UniffiPartialDifferentialEquationVerificationResidual]
```

One reduced residual per initial condition, in insertion order.

## initial_conditions

<a id="entry-presentation_swift_object_model_capability_contexts_initial_conditions_api_partial_differential_equations_partialdifferentialequationproblem_initial_conditions"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationproblem_initialconditions.e9f03394edf1"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationProblem method</p>

```swift signature
func initialConditions() -> [UniffiExpression]
```

The initial-condition residuals in insertion order.

## integrate_definite_under_constraint

<a id="entry-presentation_swift_object_model_capability_contexts_integrate_definite_under_constraint_api_session_integrate_definite_under_constraint"></a>
<a id="placement-placement.swift.swift_object.uniffisession_integratedefiniteunderconstraint.c9f35c0a4198"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func integrateDefiniteUnderConstraint(
    target: UniffiExpression,
    variable: String,
    lowerBound: UniffiExpression,
    upperBound: UniffiExpression,
    constraint: UniffiExpression,
) -> UniffiExpression
```

Definite integration under a local bounded logical constraint.

## integrate_definite_under_constraint

<a id="entry-presentation_swift_object_model_capability_contexts_integrate_definite_under_constraint_api_expression_integrate_definite_under_constraint"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_integratedefiniteunderconstraint.7c97ffe7ae03"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func integrateDefiniteUnderConstraint(
    variable: String,
    lowerBound: UniffiExpression,
    upperBound: UniffiExpression,
    constraint: UniffiExpression,
) -> UniffiExpression
```

Definite integration under a local bounded logical constraint.

## interner_length

<a id="entry-presentation_swift_default_context_capability_contexts_interner_length_api_session_interner_length"></a>
<a id="placement-placement.swift.swift_object.uniffisession_internerlength.d0d12ba22b0c"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func internerLength() -> UInt64
```

Number of live expressions currently interned in the context. Dead entries awaiting the amortized sweep are not counted. Useful for observing memory in long-running sessions and in tests that assert the store stays bounded.

## intertwining

<a id="entry-presentation_swift_object_model_capability_contexts_intertwining_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_intertwining"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryaction_intertwining.ea1d5bbc74f6"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAction method</p>

```swift signature
func intertwining() -> UniffiPartialDifferentialEquationVerificationVerdict?
```

The exact decision on the intertwining identity.

## invariant

<a id="entry-presentation_swift_object_model_capability_contexts_invariant_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_invariant"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsimilaritysolution_invariant.777c267fc2fd"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSimilaritySolution method</p>

```swift signature
func invariant() -> UniffiExpression?
```

The invariant of the generator's base field.

## inverse_coordinates

<a id="entry-presentation_swift_object_model_capability_contexts_inverse_coordinates_api_partial_differential_equations_partialdifferentialequationcoordinatechange_inverse_coordinates"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationcoordinatechange_inversecoordinates.71b2ceb4b935"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCoordinateChange method</p>

```swift signature
func inverseCoordinates() -> [UniffiExpression]
```

The ordered target-to-source coordinate expressions.

## invertibility

<a id="entry-presentation_swift_object_model_capability_contexts_invertibility_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_invertibility"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryaction_invertibility.c3a911864067"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAction method</p>

```swift signature
func invertibility() -> UniffiPartialDifferentialEquationVerificationVerdict?
```

The exact decision that the coordinate map is invertible on its chart.

## length

<a id="entry-presentation_swift_object_model_capability_contexts_length_api_expression_operations_expression_length"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_length.5fd4ad9833c8"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func length() -> UInt64
```

Number of elements of a finite-set expression.

## length

<a id="entry-presentation_swift_object_model_capability_contexts_length_api_segment2d_length"></a>
<a id="placement-placement.swift.swift_object.uniffisegment2d_length.e4c6f33fcd4d"></a>
<p class="symi-entry-owner">UniffiSegment2d method</p>

```swift signature
func length() -> UniffiExpression
```

Also the finite-set length accessor on `expression` in WASM; context disambiguates.

## lifted_constants

<a id="entry-presentation_swift_object_model_capability_contexts_lifted_constants_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_lifted_constants"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsimilaritysolution_liftedconstants.1134a189dec3"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSimilaritySolution method</p>

```swift signature
func liftedConstants() -> [UniffiExpression]
```

The constants the lifted family is parameterized by.

## lifted_family

<a id="entry-presentation_swift_object_model_capability_contexts_lifted_family_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_lifted_family"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsimilaritysolution_liftedfamily.60253ad39228"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSimilaritySolution method</p>

```swift signature
func liftedFamily() -> UniffiPartialDifferentialEquationSolutionFamily?
```

The invariant solutions of the original equation.

## lifted_family_verification

<a id="entry-presentation_swift_object_model_capability_contexts_lifted_family_verification_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_lifted_family_verification"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsimilaritysolution_liftedfamilyverification.ed76c37d76db"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSimilaritySolution method</p>

```swift signature
func liftedFamilyVerification() -> UniffiPartialDifferentialEquationVerificationVerdict?
```

The exact decision that the lifted family solves the original equation.

## linearity

<a id="entry-presentation_swift_object_model_capability_contexts_linearity_api_partial_differential_equations_partialdifferentialequationclassification_linearity"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationclassification_linearity.b0a0e5b456e2"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationClassification method</p>

```swift signature
func linearity() -> UniffiPartialDifferentialEquationLinearity
```

The most-specific exact linearity class.

## linearity

<a id="entry-presentation_swift_object_model_capability_contexts_linearity_api_partial_differential_equations_partialdifferentialequationsolutionprovenance_linearity"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsolutionprovenance_linearity.4fcd63b62e1e"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolutionProvenance method</p>

```swift signature
func linearity() -> UniffiPartialDifferentialEquationLinearity
```

The exact linearity class recorded at the time the candidate was produced.

## method

<a id="entry-presentation_swift_object_model_capability_contexts_method_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_method"></a>
<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsolveresult_method.9769ce64ef1e"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSolveResult method</p>

```swift signature
func method() -> UniffiOrdinaryDifferentialEquationMethod
```

The method the request actually ran.

## method

<a id="entry-presentation_swift_object_model_capability_contexts_method_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_method"></a>
<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsystemsolveresult_method.17db00cad874"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSystemSolveResult method</p>

```swift signature
func method() -> UniffiOrdinaryDifferentialEquationSystemMethod
```

The method the system request actually ran.

## method

<a id="entry-presentation_swift_object_model_capability_contexts_method_api_partial_differential_equations_partialdifferentialequationmethodcandidate_method"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationmethodcandidate_method.f63da59d04bd"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationMethodCandidate method</p>

```swift signature
func method() -> UniffiPartialDifferentialEquationMethod
```

The stable advisory method name.

## method

<a id="entry-presentation_swift_object_model_capability_contexts_method_api_partial_differential_equations_partialdifferentialequationsolutionprovenance_method"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsolutionprovenance_method.4b6d74cfcbed"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolutionProvenance method</p>

```swift signature
func method() -> UniffiPartialDifferentialEquationMethod
```

The method identity this solution was produced by.

## method

<a id="entry-presentation_swift_object_model_capability_contexts_method_api_partial_differential_equations_partialdifferentialequationsolveresult_method"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsolveresult_method.2c59267e2d84"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolveResult method</p>

```swift signature
func method() -> UniffiPartialDifferentialEquationMethod?
```

The method that produced a solution, when one did.

## method_candidates

<a id="entry-presentation_swift_object_model_capability_contexts_method_candidates_api_partial_differential_equations_partialdifferentialequationclassification_method_candidates"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationclassification_methodcandidates.3fb146f8cc4b"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationClassification method</p>

```swift signature
func methodCandidates() -> [UniffiPartialDifferentialEquationMethodCandidate]
```

The advisory methods in deterministic preference order.

## multiplier

<a id="entry-presentation_swift_object_model_capability_contexts_multiplier_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_multiplier"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryaction_multiplier.faef52f6b90b"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAction method</p>

```swift signature
func multiplier() -> UniffiExpression?
```

The multiplier of the intertwining identity.

## multiplier

<a id="entry-presentation_swift_object_model_capability_contexts_multiplier_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_multiplier"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsimilaritysolution_multiplier.d9e470d51354"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSimilaritySolution method</p>

```swift signature
func multiplier() -> UniffiExpression?
```

The multiplier of the reduction identity.

## name

<a id="entry-presentation_swift_object_model_capability_contexts_name_api_partial_differential_equations_partialdifferentialequationarbitraryfunction_name"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationarbitraryfunction_name.b128ef3985d7"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationArbitraryFunction method</p>

```swift signature
func name() -> String
```

The collision-free allocated function name.

## normalization_multiplier

<a id="entry-presentation_swift_object_model_capability_contexts_normalization_multiplier_api_partial_differential_equations_partialdifferentialequationtransformationresult_normalization_multiplier"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationtransformationresult_normalizationmultiplier.c8faee7149b6"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationTransformationResult method</p>

```swift signature
func normalizationMultiplier() -> UniffiExpression?
```

The proved-nonzero residual-normalization multiplier.

## order

<a id="entry-presentation_swift_object_model_capability_contexts_order_api_partial_differential_equations_partialdifferentialequationclassification_order"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationclassification_order.c888f6a7423f"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationClassification method</p>

```swift signature
func order() -> UInt64
```

The exact highest derivative order.

## order

<a id="entry-presentation_swift_object_model_capability_contexts_order_api_partial_differential_equations_partialdifferentialequationsolutionprovenance_order"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsolutionprovenance_order.de0eb8e5daac"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolutionProvenance method</p>

```swift signature
func order() -> UInt64
```

The exact order recorded at the time the candidate was produced.

## outcome

<a id="entry-presentation_swift_object_model_capability_contexts_outcome_api_results_setenumeration_outcome"></a>
<a id="placement-placement.swift.swift_object.uniffisetenumeration_outcome.feca7c08f98c"></a>
<p class="symi-entry-owner">UniffiSetEnumeration method</p>

```swift signature
func outcome() -> UniffiEnumerationVerdict
```

`"complete"`, `"truncated"`, or `"declined"`.

## outstanding_obligations

<a id="entry-presentation_swift_object_model_capability_contexts_outstanding_obligations_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_outstanding_obligations"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryaction_outstandingobligations.63b0fae73713"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAction method</p>

```swift signature
func outstandingObligations() -> [UniffiPartialDifferentialEquationSymmetryObligation]
```

The claims the action explicitly does not make.

## outstanding_obligations

<a id="entry-presentation_swift_object_model_capability_contexts_outstanding_obligations_api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_outstanding_obligations"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryalgebra_outstandingobligations.162fde4da8c6"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAlgebra method</p>

```swift signature
func outstandingObligations() -> [UniffiPartialDifferentialEquationSymmetryObligation]
```

The claims the algebra explicitly does not make.

## outstanding_obligations

<a id="entry-presentation_swift_object_model_capability_contexts_outstanding_obligations_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_outstanding_obligations"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsimilaritysolution_outstandingobligations.c7c07be4104f"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSimilaritySolution method</p>

```swift signature
func outstandingObligations() -> [UniffiPartialDifferentialEquationSymmetryObligation]
```

The claims the family explicitly does not make.

## parameters

<a id="entry-presentation_swift_object_model_capability_contexts_parameters_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_parameters"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryaction_parameters.8072339a2f4e"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAction method</p>

```swift signature
func parameters() -> [UniffiExpression]
```

The group parameters the closed forms depend on.

## parameters

<a id="entry-presentation_swift_object_model_capability_contexts_parameters_api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_parameters"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryalgebra_parameters.08880abc4d8c"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAlgebra method</p>

```swift signature
func parameters() -> [UniffiExpression]
```

The constants of the general generator, one per basis generator.

## partial_differential_equation

<a id="entry-presentation_swift_object_model_capability_contexts_partial_differential_equation_api_partial_differential_equations_session_partial_differential_equation"></a>
<a id="placement-placement.swift.swift_object.uniffisession_partialdifferentialequation.2fa4c014f127"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func partialDifferentialEquation(
    equation: UniffiExpression,
    dependentFunction: UniffiUndefinedFunction,
    independentVariables: [String],
    initialConditions: [UniffiExpression],
    boundaryConditions: [UniffiExpression],
) -> UniffiPartialDifferentialEquationProblem
```

Construct a validated scalar partial differential equation in the default context, with an explicit dependent function and independent-variable order.

## partial_differential_equation_arbitrary_function

<a id="entry-presentation_swift_object_model_capability_contexts_partial_differential_equation_arbitrary_function_api_partial_differential_equations_session_partial_differential_equation_arbitrary_function"></a>
<a id="placement-placement.swift.swift_object.uniffisession_partialdifferentialequationarbitraryfunction.8dfddf062adc"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func partialDifferentialEquationArbitraryFunction(
    preferredName: String,
    arity: UInt64,
) -> UniffiPartialDifferentialEquationArbitraryFunction
```

Allocate a collision-free arbitrary function for a PDE candidate family.

## point_symmetry_decline

<a id="entry-presentation_swift_object_model_capability_contexts_point_symmetry_decline_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_point_symmetry_decline"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryaction_pointsymmetrydecline.de5fe0e89971"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAction method</p>

```swift signature
func pointSymmetryDecline() -> UniffiPartialDifferentialEquationPointSymmetryDecline?
```

The reason the underlying point-symmetry algebra was not derived, when it was not.

## principal_congruence_residuals

<a id="entry-presentation_swift_object_model_capability_contexts_principal_congruence_residuals_api_partial_differential_equations_partialdifferentialequationtransformationverificationreport_principal_congruence_residuals"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationtransformationverificationreport_principalcongruenceresiduals.08515ecc11e5"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationTransformationVerificationReport method</p>

```swift signature
func principalCongruenceResiduals() -> [UniffiExpression]
```

The exact principal-matrix congruence residuals.

## principal_form

<a id="entry-presentation_swift_object_model_capability_contexts_principal_form_api_partial_differential_equations_partialdifferentialequationcanonicalizationresult_principal_form"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationcanonicalizationresult_principalform.1644701a914e"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCanonicalizationResult method</p>

```swift signature
func principalForm() -> UniffiPartialDifferentialEquationCanonicalPrincipalForm?
```

The exact canonical principal form that was reached.

## principal_matrix

<a id="entry-presentation_swift_object_model_capability_contexts_principal_matrix_api_partial_differential_equations_partialdifferentialequationsecondorderclassification_principal_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsecondorderclassification_principalmatrix.313013cc467a"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSecondOrderClassification method</p>

```swift signature
func principalMatrix() -> UniffiMatrix
```

The frozen symmetric principal matrix this analysis classified.

## proof_obligations

<a id="entry-presentation_swift_object_model_capability_contexts_proof_obligations_api_partial_differential_equations_partialdifferentialequationmethodcandidate_proof_obligations"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationmethodcandidate_proofobligations.42322db9cf26"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationMethodCandidate method</p>

```swift signature
func proofObligations() -> [UniffiPartialDifferentialEquationProofObligation]
```

The exact obligations this method must discharge before it may solve.

## proof_obligations

<a id="entry-presentation_swift_object_model_capability_contexts_proof_obligations_api_partial_differential_equations_partialdifferentialequationsecondorderclassification_proof_obligations"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsecondorderclassification_proofobligations.e043d67cbefa"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSecondOrderClassification method</p>

```swift signature
func proofObligations() -> [UniffiPartialDifferentialEquationProofObligation]
```

The obligations a downstream canonical-coordinate route must discharge.

## proof_obligations

<a id="entry-presentation_swift_object_model_capability_contexts_proof_obligations_api_partial_differential_equations_partialdifferentialequationsolutionfamily_proof_obligations"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsolutionfamily_proofobligations.8f7163874900"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolutionFamily method</p>

```swift signature
func proofObligations() -> [UniffiPartialDifferentialEquationProofObligation]
```

The obligations recorded against this candidate family.

## proof_obligations

<a id="entry-presentation_swift_object_model_capability_contexts_proof_obligations_api_partial_differential_equations_partialdifferentialequationverificationreport_proof_obligations"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationverificationreport_proofobligations.5e8244fd76a9"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationVerificationReport method</p>

```swift signature
func proofObligations() -> [UniffiPartialDifferentialEquationProofObligation]
```

The obligations consulted or left unresolved by this verification.

## provenance

<a id="entry-presentation_swift_object_model_capability_contexts_provenance_api_partial_differential_equations_partialdifferentialequationsolveresult_provenance"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsolveresult_provenance.e4ec2ca33795"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolveResult method</p>

```swift signature
func provenance() -> UniffiPartialDifferentialEquationSolutionProvenance?
```

The mathematical provenance a verified solution carries.

## reconstruction

<a id="entry-presentation_swift_object_model_capability_contexts_reconstruction_api_partial_differential_equations_partialdifferentialequationseparationresult_reconstruction"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationseparationresult_reconstruction.77e1b13e81e0"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSeparationResult method</p>

```swift signature
func reconstruction() -> UniffiExpression
```

The exact reconstruction expression for the separated factors.

## reduced_equation

<a id="entry-presentation_swift_object_model_capability_contexts_reduced_equation_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_reduced_equation"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsimilaritysolution_reducedequation.507fe9810c62"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSimilaritySolution method</p>

```swift signature
func reducedEquation() -> UniffiExpression?
```

The reduced ordinary differential equation for the profile, read as zero.

## remainder

<a id="entry-presentation_swift_object_model_capability_contexts_remainder_api_partial_differential_equations_partialdifferentialequationcoefficientdata_remainder"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationcoefficientdata_remainder.a5833d1eaffc"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCoefficientData method</p>

```swift signature
func remainder() -> UniffiExpression?
```

The exact jet-free remainder term, when one was extracted.

## required_rank

<a id="entry-presentation_swift_object_model_capability_contexts_required_rank_api_ordinary_differential_equations_ordinarydifferentialequationsystemverificationreport_required_rank"></a>
<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsystemverificationreport_requiredrank.265c29b5d9a0"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSystemVerificationReport method</p>

```swift signature
func requiredRank() -> UInt64
```

The dimension a complete family of the system must span.

## residual

<a id="entry-presentation_swift_object_model_capability_contexts_residual_api_partial_differential_equations_partialdifferentialequationseparatedequation_residual"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationseparatedequation_residual.cf2ee0b6af1d"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSeparatedEquation method</p>

```swift signature
func residual() -> UniffiExpression
```

The exact residual of this one-variable ordinary differential equation.

## residual

<a id="entry-presentation_swift_object_model_capability_contexts_residual_api_partial_differential_equations_partialdifferentialequationverificationresidual_residual"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationverificationresidual_residual.637f1e20a309"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationVerificationResidual method</p>

```swift signature
func residual() -> UniffiExpression
```

The independently reduced residual expression.

## route

<a id="entry-presentation_swift_object_model_capability_contexts_route_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_route"></a>
<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsystemsolveresult_route.66d2847e769e"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSystemSolveResult method</p>

```swift signature
func route() -> UniffiOrdinaryDifferentialEquationSystemRoute?
```

The route the certified assignment came from.

## second_equation

<a id="entry-presentation_swift_object_model_capability_contexts_second_equation_api_partial_differential_equations_partialdifferentialequationseparationresult_second_equation"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationseparationresult_secondequation.d1a5abe1dd18"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSeparationResult method</p>

```swift signature
func secondEquation() -> UniffiPartialDifferentialEquationSeparatedEquation
```

The second exact one-variable ordinary differential equation.

## second_order_principal_part

<a id="entry-presentation_swift_object_model_capability_contexts_second_order_principal_part_api_partial_differential_equations_partialdifferentialequationclassification_second_order_principal_part"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationclassification_secondorderprincipalpart.c325550bb2cb"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationClassification method</p>

```swift signature
func secondOrderPrincipalPart() -> UniffiPartialDifferentialEquationPrincipalPart?
```

The exact second-order principal metadata, when the equation has one.

## separate_partial_differential_equation

<a id="entry-presentation_swift_object_model_capability_contexts_separate_partial_differential_equation_api_partial_differential_equations_session_separate_partial_differential_equation"></a>
<a id="placement-placement.swift.swift_object.uniffisession_separatepartialdifferentialequation.9102c154da51"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func separatePartialDifferentialEquation(problem: UniffiPartialDifferentialEquationProblem) -> UniffiPartialDifferentialEquationSeparationResult
```

Separate a supported PDE and return its independently verified one-variable equations.

## separation_constant

<a id="entry-presentation_swift_object_model_capability_contexts_separation_constant_api_partial_differential_equations_partialdifferentialequationseparationresult_separation_constant"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationseparationresult_separationconstant.467c97c73cfb"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSeparationResult method</p>

```swift signature
func separationConstant() -> UniffiExpression
```

The fresh exact separation constant.

## similarity_variable

<a id="entry-presentation_swift_object_model_capability_contexts_similarity_variable_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_similarity_variable"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsimilaritysolution_similarityvariable.d1f2f25e94e1"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSimilaritySolution method</p>

```swift signature
func similarityVariable() -> UniffiExpression?
```

The coordinate of the reduced equation, standing for the invariant.

## simplify_under_constraint

<a id="entry-presentation_swift_object_model_capability_contexts_simplify_under_constraint_api_session_simplify_under_constraint"></a>
<a id="placement-placement.swift.swift_object.uniffisession_simplifyunderconstraint.96f7054738cf"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func simplifyUnderConstraint(
    target: UniffiExpression,
    constraint: UniffiExpression,
) -> UniffiExpression
```

Simplify an expression under a local bounded logical constraint without changing symbol assumptions.

## simplify_under_constraint

<a id="entry-presentation_swift_object_model_capability_contexts_simplify_under_constraint_api_expression_simplify_under_constraint"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_simplifyunderconstraint.a6c17f95a494"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func simplifyUnderConstraint(constraint: UniffiExpression) -> UniffiExpression
```

Simplify this expression under a local bounded logical constraint without changing symbol assumptions.

## solution

<a id="entry-presentation_swift_object_model_capability_contexts_solution_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_solution"></a>
<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsolveresult_solution.3c2cdbe4b260"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSolveResult method</p>

```swift signature
func solution() -> UniffiExpression?
```

The certified solution, which no declined request carries.

## solution

<a id="entry-presentation_swift_object_model_capability_contexts_solution_api_partial_differential_equations_partialdifferentialequationsolveresult_solution"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsolveresult_solution.2d2b086fc48f"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolveResult method</p>

```swift signature
func solution() -> UniffiPartialDifferentialEquationSolutionFamily?
```

The verified solution family, which no declined route may carry.

## solve_partial_differential_equation

<a id="entry-presentation_swift_object_model_capability_contexts_solve_partial_differential_equation_api_partial_differential_equations_session_solve_partial_differential_equation"></a>
<a id="placement-placement.swift.swift_object.uniffisession_solvepartialdifferentialequation.805999f7480e"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func solvePartialDifferentialEquation(
    problem: UniffiPartialDifferentialEquationProblem,
    method: UniffiPartialDifferentialEquationMethod,
) -> UniffiPartialDifferentialEquationSolveResult
```

Run the sound partial differential equation dispatcher under a stable method name.

## solve_partial_differential_equation_with_transform_axis_specifications

<a id="entry-presentation_swift_object_model_capability_contexts_solve_partial_differential_equation_with_transform_axis_specifications_api_partial_differential_equations_session_solve_partial_differential_equation_with_transform_axis_specifications"></a>
<a id="placement-placement.swift.swift_object.uniffisession_solvepartialdifferentialequationwithtransformaxisspecifications.a99bf7540672"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func solvePartialDifferentialEquationWithTransformAxisSpecifications(
    problem: UniffiPartialDifferentialEquationProblem,
    method: UniffiPartialDifferentialEquationMethod,
    transformAxisSpecifications: [String],
) -> UniffiPartialDifferentialEquationSolveResult
```

Solve a PDE with ordered explicit transform-axis specifications.

## source_variables

<a id="entry-presentation_swift_object_model_capability_contexts_source_variables_api_partial_differential_equations_partialdifferentialequationcoordinatechange_source_variables"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationcoordinatechange_sourcevariables.e6e2ae880173"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCoordinateChange method</p>

```swift signature
func sourceVariables() -> [String]
```

The ordered source coordinate names.

## target_dependent_function

<a id="entry-presentation_swift_object_model_capability_contexts_target_dependent_function_api_partial_differential_equations_partialdifferentialequationcoordinatechange_target_dependent_function"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationcoordinatechange_targetdependentfunction.2140561272c4"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCoordinateChange method</p>

```swift signature
func targetDependentFunction() -> String
```

The target unknown-function name.

## target_problem

<a id="entry-presentation_swift_object_model_capability_contexts_target_problem_api_partial_differential_equations_partialdifferentialequationtransformationresult_target_problem"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationtransformationresult_targetproblem.2bde3f7246c5"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationTransformationResult method</p>

```swift signature
func targetProblem() -> UniffiPartialDifferentialEquationProblem?
```

The transformed PDE problem stated in the target coordinates.

## target_variables

<a id="entry-presentation_swift_object_model_capability_contexts_target_variables_api_partial_differential_equations_partialdifferentialequationcoordinatechange_target_variables"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationcoordinatechange_targetvariables.7e57c181e4da"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCoordinateChange method</p>

```swift signature
func targetVariables() -> [String]
```

The ordered target coordinate names.

## transformation_decline

<a id="entry-presentation_swift_object_model_capability_contexts_transformation_decline_api_partial_differential_equations_partialdifferentialequationcanonicalizationresult_transformation_decline"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationcanonicalizationresult_transformationdecline.764fe16c1fbf"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCanonicalizationResult method</p>

```swift signature
func transformationDecline() -> UniffiPartialDifferentialEquationTransformationDecline?
```

The underlying coordinate-transformation decline, when one caused the decline.

## transformed

<a id="entry-presentation_swift_object_model_capability_contexts_transformed_api_partial_differential_equations_partialdifferentialequationtransformationresult_transformed"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationtransformationresult_transformed.72c8b0825faa"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationTransformationResult method</p>

```swift signature
func transformed() -> Bool
```

Whether a verified transformation was produced.

## transformed_coordinates

<a id="entry-presentation_swift_object_model_capability_contexts_transformed_coordinates_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_transformed_coordinates"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationpointsymmetryaction_transformedcoordinates.642f7c949700"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPointSymmetryAction method</p>

```swift signature
func transformedCoordinates() -> [UniffiExpression]
```

The coordinates at which a seed solution is evaluated.

## transformed_governing_residual

<a id="entry-presentation_swift_object_model_capability_contexts_transformed_governing_residual_api_partial_differential_equations_partialdifferentialequationtransformationverificationreport_transformed_governing_residual"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationtransformationverificationreport_transformedgoverningresidual.499a207e532f"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationTransformationVerificationReport method</p>

```swift signature
func transformedGoverningResidual() -> UniffiExpression
```

The independently transformed source governing residual.

## verification

<a id="entry-presentation_swift_object_model_capability_contexts_verification_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_verification"></a>
<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsolveresult_verification.cb32d6774cc3"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSolveResult method</p>

```swift signature
func verification() -> UniffiOrdinaryDifferentialEquationVerificationVerdict?
```

The independent verifier's decision on the candidate, when verification ran.

## verification

<a id="entry-presentation_swift_object_model_capability_contexts_verification_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_verification"></a>
<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsystemsolveresult_verification.8e43cdf46416"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSystemSolveResult method</p>

```swift signature
func verification() -> UniffiOrdinaryDifferentialEquationVerificationVerdict?
```

The independent verifier's decision on the assignment, when verification ran.

## verification

<a id="entry-presentation_swift_object_model_capability_contexts_verification_api_partial_differential_equations_partialdifferentialequationseparationresult_verification"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationseparationresult_verification.da63f20d9178"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSeparationResult method</p>

```swift signature
func verification() -> UniffiPartialDifferentialEquationVerificationVerdict
```

The aggregate verdict of the independently replayed separation certificate.

## verification

<a id="entry-presentation_swift_object_model_capability_contexts_verification_api_partial_differential_equations_partialdifferentialequationsolveresult_verification"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsolveresult_verification.f26765f2ac14"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolveResult method</p>

```swift signature
func verification() -> UniffiPartialDifferentialEquationVerificationReport?
```

The independent verification report a solved result must carry.

## verify_partial_differential_equation_coordinate_transformation

<a id="entry-presentation_swift_object_model_capability_contexts_verify_partial_differential_equation_coordinate_transformation_api_partial_differential_equations_session_verify_partial_differential_equation_coordinate_transformation"></a>
<a id="placement-placement.swift.swift_object.uniffisession_verifypartialdifferentialequationcoordinatetransformation.10d84376769a"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func verifyPartialDifferentialEquationCoordinateTransformation(
    problem: UniffiPartialDifferentialEquationProblem,
    transformation: UniffiPartialDifferentialEquationTransformationResult,
) -> UniffiPartialDifferentialEquationTransformationVerificationReport
```

Independently verify an exact PDE coordinate transformation.

## verify_partial_differential_equation_solution

<a id="entry-presentation_swift_object_model_capability_contexts_verify_partial_differential_equation_solution_api_partial_differential_equations_session_verify_partial_differential_equation_solution"></a>
<a id="placement-placement.swift.swift_object.uniffisession_verifypartialdifferentialequationsolution.f427ba8dd3ba"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func verifyPartialDifferentialEquationSolution(
    problem: UniffiPartialDifferentialEquationProblem,
    solution: UniffiPartialDifferentialEquationSolutionFamily,
) -> UniffiPartialDifferentialEquationVerificationReport
```

Independently verify a partial differential equation candidate with exact residual reasoning.

## weight

<a id="entry-presentation_swift_object_model_capability_contexts_weight_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_weight"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsimilaritysolution_weight.dfa064be35c6"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSimilaritySolution method</p>

```swift signature
func weight() -> UniffiExpression?
```

The weight of invariant solutions.

## bell_number

<a id="entry-presentation_swift_combinatorics_capability_discrete_mathematics_bell_number_api_session_bell_number"></a>
<a id="placement-placement.swift.swift_object.uniffisession_bellnumber.b17a48e37829"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func bellNumber(argument: UniffiExpression) -> UniffiExpression
```

The n-th Bell number.

## catalan_number

<a id="entry-presentation_swift_combinatorics_capability_discrete_mathematics_catalan_number_api_session_catalan_number"></a>
<a id="placement-placement.swift.swift_object.uniffisession_catalannumber.1e5f49d5b1dd"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func catalanNumber(argument: UniffiExpression) -> UniffiExpression
```

The n-th Catalan number.

## chinese_remainder

<a id="entry-presentation_swift_number_theory_capability_discrete_mathematics_chinese_remainder_api_number_theory_session_chinese_remainder"></a>
<a id="placement-placement.swift.swift_object.uniffisession_chineseremainder.a648470927fe"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func chineseRemainder(residuesAndModuli: [UniffiExpressionExpressionTuple]) -> UniffiExpression
```

The smallest non-negative solution of the simultaneous congruences \(x \equiv r_i \pmod{m_i}\).

## complex_plane

<a id="entry-presentation_swift_sets_capability_discrete_mathematics_complex_plane_api_session_complex_plane"></a>
<a id="placement-placement.swift.swift_object.uniffisession_complexplane.68f6883a0853"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func complexPlane() -> UniffiExpression
```

The set \(\mathbb{C}\) — the ambient universe, and the domain a variable ranges over when it carries no realness assumption.

## condition_set

<a id="entry-presentation_swift_sets_capability_discrete_mathematics_condition_set_api_sets_session_condition_set"></a>
<a id="placement-placement.swift.swift_object.uniffisession_conditionset.1c69d332f022"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func conditionSet(
    variable: String,
    condition: UniffiExpression,
    domain: UniffiExpression,
) -> UniffiExpression
```

The set \(\{\operatorname{variable} \in \operatorname{domain} : \operatorname{condition}\}\).

## conjunctive_normal_form

<a id="entry-presentation_swift_logical_transforms_capability_discrete_mathematics_conjunctive_normal_form_api_logic_session_conjunctive_normal_form"></a>
<a id="placement-placement.swift.swift_object.uniffisession_conjunctivenormalform.fbd29ab4e82b"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func conjunctiveNormalForm(inputExpression: UniffiExpression) -> UniffiExpression
```

The dual of `disjunctive_normal_form`: a reduced conjunctive normal form (an AND of OR-clauses over literals).

## conjunctive_normal_form

<a id="entry-presentation_swift_logical_transforms_capability_discrete_mathematics_conjunctive_normal_form_api_expression_operations_expression_conjunctive_normal_form"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_conjunctivenormalform.0bb096f8b61e"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func conjunctiveNormalForm() -> UniffiExpression
```

The dual of `disjunctive_normal_form`: a reduced conjunctive normal form (an AND of OR-clauses over literals).

## continued_fraction_quadratic_irrational

<a id="entry-presentation_swift_number_theory_capability_discrete_mathematics_continued_fraction_quadratic_irrational_api_number_theory_session_continued_fraction_quadratic_irrational"></a>
<a id="placement-placement.swift.swift_object.uniffisession_continuedfractionquadraticirrational.f6d018a4694a"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func continuedFractionQuadraticIrrational(value: UniffiExpression) -> UniffiQuadraticContinuedFractionExpansion
```

Eventually-periodic expansion of \(\sqrt{d}\) for a non-negative integer d, returned as `(initial_terms, periodic_part)`.

## continued_fraction_rational

<a id="entry-presentation_swift_number_theory_capability_discrete_mathematics_continued_fraction_rational_api_number_theory_session_continued_fraction_rational"></a>
<a id="placement-placement.swift.swift_object.uniffisession_continuedfractionrational.9db7bb0f1f4a"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func continuedFractionRational(value: UniffiExpression) -> [UniffiExpression]
```

Terminating continued-fraction expansion `[a0; a1, a2, ...]` of an integer or rational expression leaf.

## disjunctive_normal_form

<a id="entry-presentation_swift_logical_transforms_capability_discrete_mathematics_disjunctive_normal_form_api_logic_session_disjunctive_normal_form"></a>
<a id="placement-placement.swift.swift_object.uniffisession_disjunctivenormalform.d7fbc2e09d23"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func disjunctiveNormalForm(inputExpression: UniffiExpression) -> UniffiExpression
```

Rewrite a propositional formula into a reduced disjunctive normal form (an OR of AND-terms over literals): derived connectives are eliminated, negations are pushed to the atoms, the formula is distributed, and contradictory, duplicate, and subsumed terms are dropped.

## disjunctive_normal_form

<a id="entry-presentation_swift_logical_transforms_capability_discrete_mathematics_disjunctive_normal_form_api_expression_operations_expression_disjunctive_normal_form"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_disjunctivenormalform.6ff7181c01d1"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func disjunctiveNormalForm() -> UniffiExpression
```

Rewrite a propositional formula into a reduced disjunctive normal form (an OR of AND-terms over literals): derived connectives are eliminated, negations are pushed to the atoms, the formula is distributed, and contradictory, duplicate, and subsumed terms are dropped.

## divisor_count

<a id="entry-presentation_swift_number_theory_capability_discrete_mathematics_divisor_count_api_session_divisor_count"></a>
<a id="placement-placement.swift.swift_object.uniffisession_divisorcount.d6068cea368d"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func divisorCount(argument: UniffiExpression) -> UniffiExpression
```

Number of positive divisors \(\tau(n)\).

## divisor_sigma

<a id="entry-presentation_swift_number_theory_capability_discrete_mathematics_divisor_sigma_api_session_divisor_sigma"></a>
<a id="placement-placement.swift.swift_object.uniffisession_divisorsigma.087ab5d723f0"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func divisorSigma(
    argument: UniffiExpression,
    power: UInt64,
) -> UniffiExpression
```

Sum of the `power`-th powers of the positive divisors \(\sigma_{\mathit{power}}(n)\); `power = 0` gives `divisor_count`, `power = 1` the divisor sum.

## eliminate_derived_logical_connectives

<a id="entry-presentation_swift_logical_transforms_capability_discrete_mathematics_eliminate_derived_logical_connectives_api_logic_session_eliminate_derived_logical_connectives"></a>
<a id="placement-placement.swift.swift_object.uniffisession_eliminatederivedlogicalconnectives.861d478ba8ed"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func eliminateDerivedLogicalConnectives(inputExpression: UniffiExpression) -> UniffiExpression
```

Rewrite every `implies`, `equivalent`, and `exclusive_or` occurrence into the `logical_and` / `logical_or` / `logical_not` basis. This is a directed presentation request, not a cost decision, so the result may be larger than the input; a formula already in the basis, and a conversion that would cross the fixed size ceiling, both return the input unchanged.

## eliminate_derived_logical_connectives

<a id="entry-presentation_swift_logical_transforms_capability_discrete_mathematics_eliminate_derived_logical_connectives_api_expression_operations_expression_eliminate_derived_logical_connectives"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_eliminatederivedlogicalconnectives.6e3674e0a7cc"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func eliminateDerivedLogicalConnectives() -> UniffiExpression
```

Rewrite every `implies`, `equivalent`, and `exclusive_or` occurrence in this formula into the `logical_and` / `logical_or` / `logical_not` basis. This is a directed presentation request, not a cost decision, so the result may be larger than the input; a formula already in the basis, and a conversion that would cross the fixed size ceiling, both return the input unchanged.

## empty_set

<a id="entry-presentation_swift_sets_capability_discrete_mathematics_empty_set_api_session_empty_set"></a>
<a id="placement-placement.swift.swift_object.uniffisession_emptyset.b24b44b080ee"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func emptySet() -> UniffiExpression
```

The empty set \(\varnothing\).

## enumerate_set_in_interval

<a id="entry-presentation_swift_sets_capability_discrete_mathematics_enumerate_set_in_interval_api_sets_session_enumerate_set_in_interval"></a>
<a id="placement-placement.swift.swift_object.uniffisession_enumeratesetininterval.6d91fa32b30b"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func enumerateSetInInterval(
    set: UniffiExpression,
    lower: UniffiExpression,
    upper: UniffiExpression,
    lowerInclusive: Bool,
    upperInclusive: Bool,
    limit: UInt64?,
) -> UniffiSetEnumeration
```

Exact elements of a set inside \([\operatorname{lower}, \operatorname{upper}]\), in increasing order, as `{"outcome": str, "elements": list[expression]}`. `outcome` is `"complete"` when those are exactly the elements in the interval, `"truncated"` when `limit` cut the list short (the family is still solved), and `"declined"` when the set's shape is not enumerable — never a licence to approximate.

## euler_totient

<a id="entry-presentation_swift_number_theory_capability_discrete_mathematics_euler_totient_api_number_theory_session_euler_totient"></a>
<a id="placement-placement.swift.swift_object.uniffisession_eulertotient.df6ed38a0dc1"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func eulerTotient(value: UniffiExpression) -> UniffiExpression
```

Euler's \(\varphi(n)\); requires a positive integer.

## evaluate_truth

<a id="entry-presentation_swift_logic_capability_discrete_mathematics_evaluate_truth_api_session_evaluate_truth"></a>
<a id="placement-placement.swift.swift_object.uniffisession_evaluatetruth.793bd49e7d4e"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func evaluateTruth(target: UniffiExpression) -> UniffiTruthValue
```

`evaluate_truth(predicate)` uses exact three-valued logic. Python returns `True`, `False`, or `None`; JavaScript returns `true`, `false`, or `null`; Rust returns `truth_value`. The third value means undecided, never false: a host-language `if` reads it as falsy, so compare against `True` / `False` explicitly. Order, equality and sign relations between closed-form real constants — rationals, `pi`, radicals and real algebraic numbers — are decided exactly by rational arithmetic; transcendental, symbolic and provably non-real operands decline rather than guess.

## evaluate_truth

<a id="entry-presentation_swift_logic_capability_discrete_mathematics_evaluate_truth_api_expression_evaluate_truth"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_evaluatetruth.88a628a26ac3"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func evaluateTruth() -> UniffiTruthValue
```

`evaluate_truth(predicate)` uses exact three-valued logic. Python returns `True`, `False`, or `None`; JavaScript returns `true`, `false`, or `null`; Rust returns `truth_value`. The third value means undecided, never false: a host-language `if` reads it as falsy, so compare against `True` / `False` explicitly. Order, equality and sign relations between closed-form real constants — rationals, `pi`, radicals and real algebraic numbers — are decided exactly by rational arithmetic; transcendental, symbolic and provably non-real operands decline rather than guess.

## extended_euclidean

<a id="entry-presentation_swift_number_theory_capability_discrete_mathematics_extended_euclidean_api_number_theory_session_extended_euclidean"></a>
<a id="placement-placement.swift.swift_object.uniffisession_extendedeuclidean.b6bf9a4d4512"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func extendedEuclidean(
    left: UniffiExpression,
    right: UniffiExpression,
) -> UniffiExpressionExpressionExpressionTuple
```

`(gcd, x, y)` with \(a x + b y = \operatorname{gcd}\).

## factor_integer

<a id="entry-presentation_swift_number_theory_capability_discrete_mathematics_factor_integer_api_session_factor_integer"></a>
<a id="placement-placement.swift.swift_object.uniffisession_factorinteger.350bd0565b6d"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func factorInteger(argument: UniffiExpression) -> [UniffiExpressionUnsignedIntegerTuple]
```

Prime factorization as `(prime, multiplicity)` pairs, ascending. Errors on zero. Notes: WASM returns `prime_factor` objects with `prime`/`multiplicity` getters; the sign \(-1\) of a negative input is carried as a leading `(-1, 1)` factor exactly as the core reports it.

## falling_factorial

<a id="entry-presentation_swift_combinatorics_capability_discrete_mathematics_falling_factorial_api_session_falling_factorial"></a>
<a id="placement-placement.swift.swift_object.uniffisession_fallingfactorial.76e7e1fc715e"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func fallingFactorial(
    value: UniffiExpression,
    order: UniffiExpression,
) -> UniffiExpression
```

\(\operatorname{base}(\operatorname{base}-1)\cdots(\operatorname{base}-\operatorname{length}+1)\); `length` must be a non-negative integer, `base` may be any integer.

## fibonacci_number

<a id="entry-presentation_swift_combinatorics_capability_discrete_mathematics_fibonacci_number_api_session_fibonacci_number"></a>
<a id="placement-placement.swift.swift_object.uniffisession_fibonaccinumber.2a95e7020e06"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func fibonacciNumber(argument: UniffiExpression) -> UniffiExpression
```

The n-th Fibonacci number (F(0) = 0, F(1) = 1).

## finite_set

<a id="entry-presentation_swift_sets_capability_discrete_mathematics_finite_set_api_session_finite_set"></a>
<a id="placement-placement.swift.swift_object.uniffisession_finiteset.2f6e260ded78"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func finiteSet(elements: [UniffiExpression]) -> UniffiExpression
```

Finite set; elements are deduplicated and canonically ordered. An empty list gives the empty set.

## image_set

<a id="entry-presentation_swift_sets_capability_discrete_mathematics_image_set_api_sets_session_image_set"></a>
<a id="placement-placement.swift.swift_object.uniffisession_imageset.5fea8fa8cf7a"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func imageSet(
    lambdaExpression: UniffiExpression,
    variable: String,
    domain: UniffiExpression,
) -> UniffiExpression
```

The set \(\{\operatorname{lambda\_expression} : \operatorname{variable} \in \operatorname{domain}\}\); `variable` is a binder over `lambda_expression`.

## initial_terms

<a id="entry-presentation_swift_number_theory_capability_discrete_mathematics_initial_terms_api_results_quadraticcontinuedfractionexpansion_initial_terms"></a>
<a id="placement-placement.swift.swift_object.uniffiquadraticcontinuedfractionexpansion_initialterms.43bd40428d8f"></a>
<p class="symi-entry-owner">UniffiQuadraticContinuedFractionExpansion method</p>

```swift signature
func initialTerms() -> [UniffiExpression]
```

The terms preceding the periodic part of the expansion.

## integer_gcd

<a id="entry-presentation_swift_number_theory_capability_discrete_mathematics_integer_gcd_api_session_integer_gcd"></a>
<a id="placement-placement.swift.swift_object.uniffisession_integergcd.61aee7337f17"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func integerGcd(
    left: UniffiExpression,
    right: UniffiExpression,
) -> UniffiExpression
```

Greatest common divisor (non-negative).

## integer_lcm

<a id="entry-presentation_swift_number_theory_capability_discrete_mathematics_integer_lcm_api_session_integer_lcm"></a>
<a id="placement-placement.swift.swift_object.uniffisession_integerlcm.51d36249f078"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func integerLcm(
    left: UniffiExpression,
    right: UniffiExpression,
) -> UniffiExpression
```

Least common multiple.

## integer_nth_root

<a id="entry-presentation_swift_number_theory_capability_discrete_mathematics_integer_nth_root_api_session_integer_nth_root"></a>
<a id="placement-placement.swift.swift_object.uniffisession_integernthroot.3a7e6e833dee"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func integerNthRoot(
    argument: UniffiExpression,
    rootIndex: UInt64,
) -> UniffiExpression
```

\(\lfloor n^{1/\mathit{root\_index}}\rfloor\); odd indices accept negative n. Errors when no real root exists (even index, negative n).

## integer_set

<a id="entry-presentation_swift_sets_capability_discrete_mathematics_integer_set_api_session_integer_set"></a>
<a id="placement-placement.swift.swift_object.uniffisession_integerset.3ed935c8e6aa"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func integerSet() -> UniffiExpression
```

The set \(\mathbb{Z}\).

## integer_square_root

<a id="entry-presentation_swift_number_theory_capability_discrete_mathematics_integer_square_root_api_session_integer_square_root"></a>
<a id="placement-placement.swift.swift_object.uniffisession_integersquareroot.abe6004ca75a"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func integerSquareRoot(argument: UniffiExpression) -> UniffiExpression
```

\(\lfloor\sqrt{n}\rfloor\) for non-negative n.

## interval

<a id="entry-presentation_swift_sets_capability_discrete_mathematics_interval_api_sets_session_interval"></a>
<a id="placement-placement.swift.swift_object.uniffisession_interval.3d25cad4506c"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func interval(
    lower: UniffiExpression,
    upper: UniffiExpression,
    lowerInclusive: Bool,
    upperInclusive: Bool,
) -> UniffiExpression
```

Real-line interval. Closed by default; endpoints at infinity are forced open. Degenerate shapes collapse (empty interval \(\to\) empty set, single point \(\to\) finite set, \((-\infty, \infty)\to\) real line).

## introduce_derived_logical_connectives

<a id="entry-presentation_swift_logical_transforms_capability_discrete_mathematics_introduce_derived_logical_connectives_api_logic_session_introduce_derived_logical_connectives"></a>
<a id="placement-placement.swift.swift_object.uniffisession_introducederivedlogicalconnectives.9692fcb4ad9f"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func introduceDerivedLogicalConnectives(inputExpression: UniffiExpression) -> UniffiExpression
```

Recognise the exact canonical definitions of implication, equivalence, and exclusive-or inside an and/or/not formula and replace each match with the derived connective, but only where the replacement is strictly smaller. It is a local structural compressor: a formula merely equivalent to a definition, without matching it, is left unchanged.

## introduce_derived_logical_connectives

<a id="entry-presentation_swift_logical_transforms_capability_discrete_mathematics_introduce_derived_logical_connectives_api_expression_operations_expression_introduce_derived_logical_connectives"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_introducederivedlogicalconnectives.53bf85f1bdd1"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func introduceDerivedLogicalConnectives() -> UniffiExpression
```

Recognise the exact canonical definitions of implication, equivalence, and exclusive-or inside this and/or/not formula and replace each match with the derived connective, but only where the replacement is strictly smaller. It is a local structural compressor: a formula merely equivalent to a definition, without matching it, is left unchanged.

## is_member

<a id="entry-presentation_swift_sets_capability_discrete_mathematics_is_member_api_sets_session_is_member"></a>
<a id="placement-placement.swift.swift_object.uniffisession_ismember.17be7781f5f8"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func isMember(
    element: UniffiExpression,
    set: UniffiExpression,
) -> UniffiTruthValue
```

Three-valued membership: `True` only on structural proof, `False` only on a structural counterexample, `None` otherwise. Covers \(\varnothing\), \(\mathbb{R}\), finite sets, intervals, unions, intersections, complements.

## is_prime

<a id="entry-presentation_swift_number_theory_capability_discrete_mathematics_is_prime_api_session_is_prime"></a>
<a id="placement-placement.swift.swift_object.uniffisession_isprime.c4146f51c4d3"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func isPrime(argument: UniffiExpression) -> Bool?
```

Deterministic primality verdict; `None` when the input is outside the classifier's domain (e.g. not a natural number \(\geq 0\) representation it handles).

## is_prime

<a id="entry-presentation_swift_number_theory_capability_discrete_mathematics_is_prime_api_expression_is_prime"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_isprime.c6375de91a36"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func isPrime() -> UniffiTruthValue
```

Whether the expression is known to be prime.

## is_subset

<a id="entry-presentation_swift_sets_capability_discrete_mathematics_is_subset_api_sets_session_is_subset"></a>
<a id="placement-placement.swift.swift_object.uniffisession_issubset.059d490835a8"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func isSubset(
    smaller: UniffiExpression,
    larger: UniffiExpression,
) -> UniffiTruthValue
```

Three-valued subset query: \(\varnothing \subseteq\) anything, structural equality, finite-set element checks, interval-in-interval endpoint tests; `None` otherwise.

## jacobi_symbol

<a id="entry-presentation_swift_number_theory_capability_discrete_mathematics_jacobi_symbol_api_session_jacobi_symbol"></a>
<a id="placement-placement.swift.swift_object.uniffisession_jacobisymbol.9ded1d210a74"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func jacobiSymbol(
    numerator: UniffiExpression,
    denominator: UniffiExpression,
) -> Int64
```

The Jacobi symbol \((n/d) \in \{-1, 0, 1\}\); the denominator must be a positive odd integer.

## kronecker_symbol

<a id="entry-presentation_swift_number_theory_capability_discrete_mathematics_kronecker_symbol_api_session_kronecker_symbol"></a>
<a id="placement-placement.swift.swift_object.uniffisession_kroneckersymbol.6f559281ec6b"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func kroneckerSymbol(
    numerator: UniffiExpression,
    denominator: UniffiExpression,
) -> Int64
```

The Kronecker extension of the Jacobi symbol to all integer denominators.

## legendre_symbol

<a id="entry-presentation_swift_number_theory_capability_discrete_mathematics_legendre_symbol_api_session_legendre_symbol"></a>
<a id="placement-placement.swift.swift_object.uniffisession_legendresymbol.f04c28794125"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func legendreSymbol(
    numerator: UniffiExpression,
    prime: UniffiExpression,
) -> Int64
```

The Legendre symbol; the second argument must be an odd prime.

## logical_false

<a id="entry-presentation_swift_logic_capability_discrete_mathematics_logical_false_api_session_logical_false"></a>
<a id="placement-placement.swift.swift_object.uniffisession_logicalfalse.30325dfe08df"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func logicalFalse() -> UniffiExpression
```

The Boolean constant false (\(\bot\)).

## logical_true

<a id="entry-presentation_swift_logic_capability_discrete_mathematics_logical_true_api_session_logical_true"></a>
<a id="placement-placement.swift.swift_object.uniffisession_logicaltrue.ea8fb89b97aa"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func logicalTrue() -> UniffiExpression
```

The Boolean constant true (\(\top\)).

## minimize_logical

<a id="entry-presentation_swift_logical_transforms_capability_discrete_mathematics_minimize_logical_api_logic_session_minimize_logical"></a>
<a id="placement-placement.swift.swift_object.uniffisession_minimizelogical.0ecf4ae38ecf"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func minimizeLogical(inputExpression: UniffiExpression) -> UniffiExpression
```

The smaller of the minimum sum-of-products and product-of-sums two-level forms. Within a practical atom bound this is the exact Quine–McCluskey minimum (prime implicants, essential extraction, and Petrick's method on the residual chart); above it, an Espresso-style heuristic returns a good — not provably minimal — cover.

## minimize_logical

<a id="entry-presentation_swift_logical_transforms_capability_discrete_mathematics_minimize_logical_api_expression_operations_expression_minimize_logical"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_minimizelogical.b8ad7ddea25e"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func minimizeLogical() -> UniffiExpression
```

The smaller of the minimum sum-of-products and product-of-sums two-level forms. Within a practical atom bound this is the exact Quine–McCluskey minimum (prime implicants, essential extraction, and Petrick's method on the residual chart); above it, an Espresso-style heuristic returns a good — not provably minimal — cover.

## mobius

<a id="entry-presentation_swift_number_theory_capability_discrete_mathematics_mobius_api_session_mobius"></a>
<a id="placement-placement.swift.swift_object.uniffisession_mobius.519a8065b3b0"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func mobius(argument: UniffiExpression) -> UniffiExpression
```

Möbius \(\mu(n) \in \{-1, 0, 1\}\); requires a positive integer.

## modular_inverse

<a id="entry-presentation_swift_number_theory_capability_discrete_mathematics_modular_inverse_api_number_theory_session_modular_inverse"></a>
<a id="placement-placement.swift.swift_object.uniffisession_modularinverse.e7b51d17375e"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func modularInverse(
    value: UniffiExpression,
    modulus: UniffiExpression,
) -> UniffiExpression
```

Multiplicative inverse of `value` modulo `modulus`; errors when \(\operatorname{gcd}(\operatorname{value}, \operatorname{modulus}) \ne 1\).

## modular_power

<a id="entry-presentation_swift_number_theory_capability_discrete_mathematics_modular_power_api_number_theory_session_modular_power"></a>
<a id="placement-placement.swift.swift_object.uniffisession_modularpower.08ac4da6105b"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func modularPower(
    base: UniffiExpression,
    exponent: UniffiExpression,
    modulus: UniffiExpression,
) -> UniffiExpression
```

`base^exponent mod modulus` by square-and-multiply; requires positive modulus and non-negative exponent.

## multinomial

<a id="entry-presentation_swift_combinatorics_capability_discrete_mathematics_multinomial_api_number_theory_session_multinomial"></a>
<a id="placement-placement.swift.swift_object.uniffisession_multinomial.8e485807ecc0"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func multinomial(parts: [UniffiExpression]) -> UniffiExpression
```

Multinomial coefficient \((\sum \operatorname{parts})! / \prod (\operatorname{part}_i!)\); parts must be non-negative integers.

## multiplicity

<a id="entry-presentation_swift_number_theory_capability_discrete_mathematics_multiplicity_api_results_rootmultiplicity_multiplicity"></a>
<a id="placement-placement.swift.swift_object.uniffirootmultiplicity_multiplicity.fe1b2d03c27f"></a>
<p class="symi-entry-owner">UniffiRootMultiplicity method</p>

```swift signature
func multiplicity() -> UInt64
```

The multiplicity of the root.

## partition_count

<a id="entry-presentation_swift_combinatorics_capability_discrete_mathematics_partition_count_api_session_partition_count"></a>
<a id="placement-placement.swift.swift_object.uniffisession_partitioncount.2c6c6762fbc2"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func partitionCount(argument: UniffiExpression) -> UniffiExpression
```

Number of integer partitions p(n).

## pell_solutions

<a id="entry-presentation_swift_number_theory_capability_discrete_mathematics_pell_solutions_api_number_theory_session_pell_solutions"></a>
<a id="placement-placement.swift.swift_object.uniffisession_pellsolutions.934a2bc20441"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func pellSolutions(
    radicand: UniffiExpression,
    count: UInt64,
) -> [UniffiExpression]
```

The first `count` positive solutions of \(x^2 - D y^2 = 1\), materialised from the fundamental solution by the Pell recurrence and returned as a flat list \([x_1, y_1, x_2, y_2, \ldots]\).

## periodic_terms

<a id="entry-presentation_swift_number_theory_capability_discrete_mathematics_periodic_terms_api_results_quadraticcontinuedfractionexpansion_periodic_terms"></a>
<a id="placement-placement.swift.swift_object.uniffiquadraticcontinuedfractionexpansion_periodicterms.c2a273f9ba2e"></a>
<p class="symi-entry-owner">UniffiQuadraticContinuedFractionExpansion method</p>

```swift signature
func periodicTerms() -> [UniffiExpression]
```

The repeating terms of the expansion.

## real_line

<a id="entry-presentation_swift_sets_capability_discrete_mathematics_real_line_api_session_real_line"></a>
<a id="placement-placement.swift.swift_object.uniffisession_realline.f2340b577b3b"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func realLine() -> UniffiExpression
```

The set \(\mathbb{R}\).

## rising_factorial

<a id="entry-presentation_swift_combinatorics_capability_discrete_mathematics_rising_factorial_api_session_rising_factorial"></a>
<a id="placement-placement.swift.swift_object.uniffisession_risingfactorial.a9a8e1fb806d"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func risingFactorial(
    value: UniffiExpression,
    order: UniffiExpression,
) -> UniffiExpression
```

\(\operatorname{base}(\operatorname{base}+1)\cdots(\operatorname{base}+\operatorname{length}-1)\) (the Pochhammer symbol on integers).

## set_complement

<a id="entry-presentation_swift_sets_capability_discrete_mathematics_set_complement_api_sets_session_set_complement"></a>
<a id="placement-placement.swift.swift_object.uniffisession_setcomplement.d96e49c60156"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func setComplement(
    left: UniffiExpression,
    right: UniffiExpression,
) -> UniffiExpression
```

The relative complement \(a \setminus b\).

## set_intersection

<a id="entry-presentation_swift_sets_capability_discrete_mathematics_set_intersection_api_sets_session_set_intersection"></a>
<a id="placement-placement.swift.swift_object.uniffisession_setintersection.f56710deeb53"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func setIntersection(
    left: UniffiExpression,
    right: UniffiExpression,
) -> UniffiExpression
```

Intersection, computed eagerly where the structural rules allow (interval pairs, finite-set membership filtering; \(\mathbb{R}\) drops, \(\varnothing\) absorbs); otherwise the structural `set_intersection` node.

## set_union

<a id="entry-presentation_swift_sets_capability_discrete_mathematics_set_union_api_sets_session_set_union"></a>
<a id="placement-placement.swift.swift_object.uniffisession_setunion.8e884c96fab8"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func setUnion(
    left: UniffiExpression,
    right: UniffiExpression,
) -> UniffiExpression
```

Union, computed eagerly where the structural rules allow (overlapping or touching interval pairs merge; nested unions splice, \(\varnothing\) drops, \(\mathbb{R}\) absorbs); otherwise the structural `set_union` node.

## simplify_logical

<a id="entry-presentation_swift_logical_transforms_capability_discrete_mathematics_simplify_logical_api_logic_session_simplify_logical"></a>
<a id="placement-placement.swift.swift_object.uniffisession_simplifylogical.5c4e301d1b64"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func simplifyLogical(inputExpression: UniffiExpression) -> UniffiExpression
```

Return whichever of the original form, the disjunctive and conjunctive normal forms, and the two minimal two-level forms has the smallest weighted size.

## simplify_logical

<a id="entry-presentation_swift_logical_transforms_capability_discrete_mathematics_simplify_logical_api_expression_operations_expression_simplify_logical"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_simplifylogical.d7244d884a0c"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func simplifyLogical() -> UniffiExpression
```

Return whichever of the original form, the disjunctive and conjunctive normal forms, and the two minimal two-level forms has the smallest weighted size.

## solve_linear_diophantine

<a id="entry-presentation_swift_number_theory_capability_discrete_mathematics_solve_linear_diophantine_api_number_theory_session_solve_linear_diophantine"></a>
<a id="placement-placement.swift.swift_object.uniffisession_solvelineardiophantine.4b7729095ddf"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func solveLinearDiophantine(
    coefficients: [UniffiExpression],
    constant: UniffiExpression,
) -> [UniffiExpression]
```

General integer solution of \(a_1 x_1 + \ldots + a_n x_n = c\), returned as the parametric coordinates — one expression per unknown, affine in fresh integer parameter symbols (`diophantine_parameter_k`) shared across the coordinates so that choosing any integers for the parameters yields a solution tuple. The list is empty when the equation has no integer solution (\(\gcd(a_i) \nmid c\)).

## solve_linear_diophantine_system

<a id="entry-presentation_swift_number_theory_capability_discrete_mathematics_solve_linear_diophantine_system_api_number_theory_session_solve_linear_diophantine_system"></a>
<a id="placement-placement.swift.swift_object.uniffisession_solvelineardiophantinesystem.7d6df1747441"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func solveLinearDiophantineSystem(
    coefficientMatrix: UniffiMatrix,
    constants: [UniffiExpression],
) -> [UniffiExpression]
```

General integer solution of the rectangular system \(A x = b\), returned as one parametric coordinate expression per column of `A`.

## solve_negative_pell

<a id="entry-presentation_swift_number_theory_capability_discrete_mathematics_solve_negative_pell_api_number_theory_session_solve_negative_pell"></a>
<a id="placement-placement.swift.swift_object.uniffisession_solvenegativepell.4ecb2cae5323"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func solveNegativePell(radicand: UniffiExpression) -> [UniffiExpression]
```

Fundamental solution `[x, y]` of the negative-Pell equation \(x^2 - D y^2 = -1\) when it is solvable (exactly when the continued fraction of \(\sqrt{D}\) has odd period), and an empty list otherwise.

## solve_pell

<a id="entry-presentation_swift_number_theory_capability_discrete_mathematics_solve_pell_api_number_theory_session_solve_pell"></a>
<a id="placement-placement.swift.swift_object.uniffisession_solvepell.57d589d1c5fd"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func solvePell(radicand: UniffiExpression) -> [UniffiExpression]
```

Fundamental solution `[x, y]` of \(x^2 - D y^2 = 1\) for a positive non-square integer `D`, the smallest positive solution from which all others are generated by the recurrence \(x_{k+1} = x_1 x_k + D y_1 y_k\), \(y_{k+1} = x_1 y_k + y_1 x_k\).

## stirling_first_signed

<a id="entry-presentation_swift_combinatorics_capability_discrete_mathematics_stirling_first_signed_api_session_stirling_first_signed"></a>
<a id="placement-placement.swift.swift_object.uniffisession_stirlingfirstsigned.a68dc6e30cb9"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func stirlingFirstSigned(
    upper: UniffiExpression,
    lower: UniffiExpression,
) -> UniffiExpression
```

Signed Stirling number of the first kind s(n, k).

## stirling_second

<a id="entry-presentation_swift_combinatorics_capability_discrete_mathematics_stirling_second_api_session_stirling_second"></a>
<a id="placement-placement.swift.swift_object.uniffisession_stirlingsecond.25007d5c9a81"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func stirlingSecond(
    upper: UniffiExpression,
    lower: UniffiExpression,
) -> UniffiExpression
```

Stirling number of the second kind S(n, k).

## abs

<a id="entry-presentation_swift_elementary_functions_capability_elementary_functions_abs_api_session_abs"></a>
<a id="placement-placement.swift.swift_object.uniffisession_abs.dd9267509aa4"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func abs(argument: UniffiExpression) -> UniffiExpression
```

Absolute value of `x`.

## arccos

<a id="entry-presentation_swift_elementary_functions_capability_elementary_functions_arccos_api_session_arccos"></a>
<a id="placement-placement.swift.swift_object.uniffisession_arccos.873a014414b3"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func arccos(argument: UniffiExpression) -> UniffiExpression
```

Inverse cosine of `x`.

## arccosh

<a id="entry-presentation_swift_elementary_functions_capability_elementary_functions_arccosh_api_session_arccosh"></a>
<a id="placement-placement.swift.swift_object.uniffisession_arccosh.7f0395225cdb"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func arccosh(argument: UniffiExpression) -> UniffiExpression
```

Inverse hyperbolic cosine of `x`.

## arccot

<a id="entry-presentation_swift_elementary_functions_capability_elementary_functions_arccot_api_session_arccot"></a>
<a id="placement-placement.swift.swift_object.uniffisession_arccot.9b0d534c00dc"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func arccot(argument: UniffiExpression) -> UniffiExpression
```

Inverse cotangent of `x`.

## arccoth

<a id="entry-presentation_swift_elementary_functions_capability_elementary_functions_arccoth_api_session_arccoth"></a>
<a id="placement-placement.swift.swift_object.uniffisession_arccoth.d461e89715fa"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func arccoth(argument: UniffiExpression) -> UniffiExpression
```

Inverse hyperbolic cotangent of `x`.

## arccsc

<a id="entry-presentation_swift_elementary_functions_capability_elementary_functions_arccsc_api_session_arccsc"></a>
<a id="placement-placement.swift.swift_object.uniffisession_arccsc.27a9d43f9a25"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func arccsc(argument: UniffiExpression) -> UniffiExpression
```

Inverse cosecant of `x`.

## arccsch

<a id="entry-presentation_swift_elementary_functions_capability_elementary_functions_arccsch_api_session_arccsch"></a>
<a id="placement-placement.swift.swift_object.uniffisession_arccsch.f5c64d3b4305"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func arccsch(argument: UniffiExpression) -> UniffiExpression
```

Inverse hyperbolic cosecant of `x`.

## arcsec

<a id="entry-presentation_swift_elementary_functions_capability_elementary_functions_arcsec_api_session_arcsec"></a>
<a id="placement-placement.swift.swift_object.uniffisession_arcsec.002cb0ce2eeb"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func arcsec(argument: UniffiExpression) -> UniffiExpression
```

Inverse secant of `x`.

## arcsech

<a id="entry-presentation_swift_elementary_functions_capability_elementary_functions_arcsech_api_session_arcsech"></a>
<a id="placement-placement.swift.swift_object.uniffisession_arcsech.aa9d73ebdb85"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func arcsech(argument: UniffiExpression) -> UniffiExpression
```

Inverse hyperbolic secant of `x`.

## arcsin

<a id="entry-presentation_swift_elementary_functions_capability_elementary_functions_arcsin_api_session_arcsin"></a>
<a id="placement-placement.swift.swift_object.uniffisession_arcsin.7d17db4f886a"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func arcsin(argument: UniffiExpression) -> UniffiExpression
```

Inverse sine of `x`.

## arcsinh

<a id="entry-presentation_swift_elementary_functions_capability_elementary_functions_arcsinh_api_session_arcsinh"></a>
<a id="placement-placement.swift.swift_object.uniffisession_arcsinh.cb8516bb48eb"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func arcsinh(argument: UniffiExpression) -> UniffiExpression
```

Inverse hyperbolic sine of `x`.

## arctan

<a id="entry-presentation_swift_elementary_functions_capability_elementary_functions_arctan_api_session_arctan"></a>
<a id="placement-placement.swift.swift_object.uniffisession_arctan.4e8a93014c68"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func arctan(argument: UniffiExpression) -> UniffiExpression
```

Inverse tangent of `x`.

## arctanh

<a id="entry-presentation_swift_elementary_functions_capability_elementary_functions_arctanh_api_session_arctanh"></a>
<a id="placement-placement.swift.swift_object.uniffisession_arctanh.d92df5a25d9f"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func arctanh(argument: UniffiExpression) -> UniffiExpression
```

Inverse hyperbolic tangent of `x`.

## binomial

<a id="entry-presentation_swift_elementary_functions_capability_elementary_functions_binomial_api_session_binomial"></a>
<a id="placement-placement.swift.swift_object.uniffisession_binomial.6424961e17af"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func binomial(
    upper: UniffiExpression,
    lower: UniffiExpression,
) -> UniffiExpression
```

Binomial coefficient C(n, k).

## ceiling

<a id="entry-presentation_swift_elementary_functions_capability_elementary_functions_ceiling_api_session_ceiling"></a>
<a id="placement-placement.swift.swift_object.uniffisession_ceiling.90e7123537d5"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func ceiling(argument: UniffiExpression) -> UniffiExpression
```

Least integer greater than or equal to `x`.

## conjugate

<a id="entry-presentation_swift_elementary_functions_capability_elementary_functions_conjugate_api_session_conjugate"></a>
<a id="placement-placement.swift.swift_object.uniffisession_conjugate.f4aff69bd1f7"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func conjugate(argument: UniffiExpression) -> UniffiExpression
```

Complex conjugate.

## cos

<a id="entry-presentation_swift_elementary_functions_capability_elementary_functions_cos_api_session_cos"></a>
<a id="placement-placement.swift.swift_object.uniffisession_cos.c9df262f5328"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func cos(argument: UniffiExpression) -> UniffiExpression
```

Cosine of `x`.

## cos

<a id="entry-presentation_swift_elementary_functions_capability_elementary_functions_cos_api_expression_cos"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_cos.35fee6110943"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func cos() -> UniffiExpression
```

Cosine of `x`.

## cosh

<a id="entry-presentation_swift_elementary_functions_capability_elementary_functions_cosh_api_session_cosh"></a>
<a id="placement-placement.swift.swift_object.uniffisession_cosh.470bd71c936c"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func cosh(argument: UniffiExpression) -> UniffiExpression
```

Hyperbolic cosine of `x`.

## cot

<a id="entry-presentation_swift_elementary_functions_capability_elementary_functions_cot_api_session_cot"></a>
<a id="placement-placement.swift.swift_object.uniffisession_cot.b577453ff703"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func cot(argument: UniffiExpression) -> UniffiExpression
```

Cotangent of `x`, the reciprocal of the tangent.

## coth

<a id="entry-presentation_swift_elementary_functions_capability_elementary_functions_coth_api_session_coth"></a>
<a id="placement-placement.swift.swift_object.uniffisession_coth.57a98e776dfd"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func coth(argument: UniffiExpression) -> UniffiExpression
```

Hyperbolic cotangent of `x`, the reciprocal of the hyperbolic tangent.

## csc

<a id="entry-presentation_swift_elementary_functions_capability_elementary_functions_csc_api_session_csc"></a>
<a id="placement-placement.swift.swift_object.uniffisession_csc.97312d88f534"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func csc(argument: UniffiExpression) -> UniffiExpression
```

Cosecant of `x`, the reciprocal of the sine.

## csch

<a id="entry-presentation_swift_elementary_functions_capability_elementary_functions_csch_api_session_csch"></a>
<a id="placement-placement.swift.swift_object.uniffisession_csch.ba0508357fff"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func csch(argument: UniffiExpression) -> UniffiExpression
```

Hyperbolic cosecant of `x`, the reciprocal of the hyperbolic sine.

## equal

<a id="entry-presentation_swift_relations_capability_elementary_functions_equal_api_session_equal"></a>
<a id="placement-placement.swift.swift_object.uniffisession_equal.7d4350b67c9e"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func equal(
    left: UniffiExpression,
    right: UniffiExpression,
) -> UniffiExpression
```

Build the relation `left = right` without deciding its truth.

## exp

<a id="entry-presentation_swift_elementary_functions_capability_elementary_functions_exp_api_session_exp"></a>
<a id="placement-placement.swift.swift_object.uniffisession_exp.96fa2cf9a8a0"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func exp(argument: UniffiExpression) -> UniffiExpression
```

The natural exponential.

## exp

<a id="entry-presentation_swift_elementary_functions_capability_elementary_functions_exp_api_expression_exp"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_exp.112ee239c8ce"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func exp() -> UniffiExpression
```

The natural exponential.

## factorial

<a id="entry-presentation_swift_elementary_functions_capability_elementary_functions_factorial_api_session_factorial"></a>
<a id="placement-placement.swift.swift_object.uniffisession_factorial.804228dc077f"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func factorial(argument: UniffiExpression) -> UniffiExpression
```

Factorial of `x`, evaluated exactly on nonnegative integers.

## floor

<a id="entry-presentation_swift_elementary_functions_capability_elementary_functions_floor_api_session_floor"></a>
<a id="placement-placement.swift.swift_object.uniffisession_floor.c2df3fd00241"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func floor(argument: UniffiExpression) -> UniffiExpression
```

Greatest integer less than or equal to `x`.

## greater_than

<a id="entry-presentation_swift_relations_capability_elementary_functions_greater_than_api_session_greater_than"></a>
<a id="placement-placement.swift.swift_object.uniffisession_greaterthan.ab85fc7a461b"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func greaterThan(
    left: UniffiExpression,
    right: UniffiExpression,
) -> UniffiExpression
```

Build the relation `left > right` without deciding its truth.

## greater_than_or_equal

<a id="entry-presentation_swift_relations_capability_elementary_functions_greater_than_or_equal_api_session_greater_than_or_equal"></a>
<a id="placement-placement.swift.swift_object.uniffisession_greaterthanorequal.1905a29db601"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func greaterThanOrEqual(
    left: UniffiExpression,
    right: UniffiExpression,
) -> UniffiExpression
```

Build the relation `left >= right` without deciding its truth.

## less_than

<a id="entry-presentation_swift_relations_capability_elementary_functions_less_than_api_session_less_than"></a>
<a id="placement-placement.swift.swift_object.uniffisession_lessthan.329be8dc7f24"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func lessThan(
    left: UniffiExpression,
    right: UniffiExpression,
) -> UniffiExpression
```

Build the relation `left < right` without deciding its truth.

## less_than

<a id="entry-presentation_swift_relations_capability_elementary_functions_less_than_api_expression_operations_expression_less_than"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_lessthan.7403803b9676"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func lessThan(other: UniffiExpression) -> UniffiExpression
```

Build the relation `left < right` without deciding its truth.

## less_than_or_equal

<a id="entry-presentation_swift_relations_capability_elementary_functions_less_than_or_equal_api_session_less_than_or_equal"></a>
<a id="placement-placement.swift.swift_object.uniffisession_lessthanorequal.8fe9c0e0ca4b"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func lessThanOrEqual(
    left: UniffiExpression,
    right: UniffiExpression,
) -> UniffiExpression
```

Build the relation `left <= right` without deciding its truth.

## log

<a id="entry-presentation_swift_elementary_functions_capability_elementary_functions_log_api_session_log"></a>
<a id="placement-placement.swift.swift_object.uniffisession_log.56e8cba0f445"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func log(
    argument: UniffiExpression,
    base: UniffiExpression?,
) -> UniffiExpression
```

Natural logarithm; with `base` given, `log(x)/log(base)`.

## max

<a id="entry-presentation_swift_elementary_functions_capability_elementary_functions_max_api_session_max"></a>
<a id="placement-placement.swift.swift_object.uniffisession_max.a8a8d7405982"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func max(arguments: [UniffiExpression]) -> UniffiExpression
```

Maximum of the arguments (variadic in Python; a JS array in WASM).

## min

<a id="entry-presentation_swift_elementary_functions_capability_elementary_functions_min_api_session_min"></a>
<a id="placement-placement.swift.swift_object.uniffisession_min.2e33a44befc8"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func min(arguments: [UniffiExpression]) -> UniffiExpression
```

Minimum of the arguments (variadic in Python; a JS array in WASM).

## not_equal

<a id="entry-presentation_swift_relations_capability_elementary_functions_not_equal_api_session_not_equal"></a>
<a id="placement-placement.swift.swift_object.uniffisession_notequal.44068533f7a7"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func notEqual(
    left: UniffiExpression,
    right: UniffiExpression,
) -> UniffiExpression
```

Build the relation `left != right` without deciding its truth.

## root

<a id="entry-presentation_swift_elementary_functions_capability_elementary_functions_root_api_session_root"></a>
<a id="placement-placement.swift.swift_object.uniffisession_root.619b5fda1909"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func root(
    radicand: UniffiExpression,
    index: UniffiExpression,
) -> UniffiExpression
```

Principal n-th root, stored as `x^(1/n)`.

## root

<a id="entry-presentation_swift_elementary_functions_capability_elementary_functions_root_api_results_rootmultiplicity_root"></a>
<a id="placement-placement.swift.swift_object.uniffirootmultiplicity_root.9988be4aaad7"></a>
<p class="symi-entry-owner">UniffiRootMultiplicity method</p>

```swift signature
func root() -> UniffiExpression
```

Principal n-th root, stored as `x^(1/n)`.

## sec

<a id="entry-presentation_swift_elementary_functions_capability_elementary_functions_sec_api_session_sec"></a>
<a id="placement-placement.swift.swift_object.uniffisession_sec.796dc3e13f1a"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func sec(argument: UniffiExpression) -> UniffiExpression
```

Secant of `x`, the reciprocal of the cosine.

## sech

<a id="entry-presentation_swift_elementary_functions_capability_elementary_functions_sech_api_session_sech"></a>
<a id="placement-placement.swift.swift_object.uniffisession_sech.7653b59db837"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func sech(argument: UniffiExpression) -> UniffiExpression
```

Hyperbolic secant of `x`, the reciprocal of the hyperbolic cosine.

## sin

<a id="entry-presentation_swift_elementary_functions_capability_elementary_functions_sin_api_session_sin"></a>
<a id="placement-placement.swift.swift_object.uniffisession_sin.d38469b1a956"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func sin(argument: UniffiExpression) -> UniffiExpression
```

Sine of `x`.

## sin

<a id="entry-presentation_swift_elementary_functions_capability_elementary_functions_sin_api_expression_sin"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_sin.51d54b8378d7"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func sin() -> UniffiExpression
```

Sine of `x`.

## sinh

<a id="entry-presentation_swift_elementary_functions_capability_elementary_functions_sinh_api_session_sinh"></a>
<a id="placement-placement.swift.swift_object.uniffisession_sinh.154d05746423"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func sinh(argument: UniffiExpression) -> UniffiExpression
```

Hyperbolic sine of `x`.

## sqrt

<a id="entry-presentation_swift_elementary_functions_capability_elementary_functions_sqrt_api_session_sqrt"></a>
<a id="placement-placement.swift.swift_object.uniffisession_sqrt.3a06fe6228b3"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func sqrt(argument: UniffiExpression) -> UniffiExpression
```

Principal square root, stored as `x^(1/2)`.

## sqrt

<a id="entry-presentation_swift_elementary_functions_capability_elementary_functions_sqrt_api_expression_sqrt"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_sqrt.e590a327a79f"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func sqrt() -> UniffiExpression
```

Principal square root, stored as `x^(1/2)`.

## tan

<a id="entry-presentation_swift_elementary_functions_capability_elementary_functions_tan_api_session_tan"></a>
<a id="placement-placement.swift.swift_object.uniffisession_tan.4a38bbc6a305"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func tan(argument: UniffiExpression) -> UniffiExpression
```

Tangent of `x`.

## tanh

<a id="entry-presentation_swift_elementary_functions_capability_elementary_functions_tanh_api_session_tanh"></a>
<a id="placement-placement.swift.swift_object.uniffisession_tanh.06a5b797a74c"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func tanh(argument: UniffiExpression) -> UniffiExpression
```

Hyperbolic tangent of `x`.

## classification

<a id="entry-presentation_swift_optimization_capability_equations_classification_api_results_criticalpoint_classification"></a>
<a id="placement-placement.swift.swift_object.unifficriticalpoint_classification.c2bf55f4b1fd"></a>
<p class="symi-entry-owner">UniffiCriticalPoint method</p>

```swift signature
func classification() -> UniffiExtremumClassification
```

The verdict string of a critical point: `"local_minimum"`, `"local_maximum"`, `"saddle_point"`, or `"inconclusive"`.

## classification

<a id="entry-presentation_swift_optimization_capability_equations_classification_api_partial_differential_equations_partialdifferentialequationsolveresult_classification"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsolveresult_classification.4b964331ecbf"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolveResult method</p>

```swift signature
func classification() -> UniffiPartialDifferentialEquationClassification?
```

The exact classification the dispatcher established, when it reached one.

## classify_unconstrained

<a id="entry-presentation_swift_optimization_capability_equations_classify_unconstrained_api_solving_session_classify_unconstrained"></a>
<a id="placement-placement.swift.swift_object.uniffisession_classifyunconstrained.f03aa36b26c0"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func classifyUnconstrained(
    objective: UniffiExpression,
    variables: [String],
    pointVariables: [String],
    pointValues: [UniffiExpression],
) -> UniffiExtremumClassification
```

Classify one given interior point — supplied as the parallel `point_variables` / `point_values` lists — by Hessian definiteness, returning the verdict string.

## compare_real_roots

<a id="entry-presentation_swift_solving_capability_equations_compare_real_roots_api_solving_session_compare_real_roots"></a>
<a id="placement-placement.swift.swift_object.uniffisession_comparerealroots.f2a28e78106c"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func compareRealRoots(
    firstExpression: UniffiExpression,
    firstVariable: String,
    firstIndex: UInt64,
    secondExpression: UniffiExpression,
    secondVariable: String,
    secondIndex: UInt64,
) -> Int64?
```

Compare two real algebraic numbers exactly, each given as the `index`-th smallest real root of a univariate polynomial over the rationals. Returns `-1`, `0`, or `1` according to whether the first is less than, equal to, or greater than the second — a total order decided exactly (for example `compare_real_roots` of \(\sqrt{2}\) and \(\sqrt[3]{3}\) returns `-1`).

## complete

<a id="entry-presentation_swift_solving_capability_equations_complete_api_results_optimizationoutcome_complete"></a>
<a id="placement-placement.swift.swift_object.uniffioptimizationoutcome_complete.d61284d43b81"></a>
<p class="symi-entry-owner">UniffiOptimizationOutcome method</p>

```swift signature
func complete() -> Bool
```

Getter on `polynomial_system_solution`: whether the solver certified it found every solution.

## complete

<a id="entry-presentation_swift_solving_capability_equations_complete_api_results_polynomialsystemsolution_complete"></a>
<a id="placement-placement.swift.swift_object.uniffipolynomialsystemsolution_complete.70709b31af7b"></a>
<p class="symi-entry-owner">UniffiPolynomialSystemSolution method</p>

```swift signature
func complete() -> Bool
```

Getter on `polynomial_system_solution`: whether the solver certified it found every solution.

## construct_partial_differential_equation_point_symmetry_action

<a id="entry-presentation_swift_differential_equations_capability_contexts_construct_partial_differential_equation_point_symmetry_action_api_partial_differential_equations_session_construct_partial_differential_equation_point_symmetry_action"></a>
<a id="placement-placement.swift.swift_object.uniffisession_constructpartialdifferentialequationpointsymmetryaction.2a5c44859f49"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func constructPartialDifferentialEquationPointSymmetryAction(problem: UniffiPartialDifferentialEquationProblem) -> UniffiPartialDifferentialEquationPointSymmetryAction
```

Integrate and compose the point-symmetry algebra of a PDE into its connected local action.

## count_distinct_real_roots

<a id="entry-presentation_swift_solving_capability_equations_count_distinct_real_roots_api_solving_session_count_distinct_real_roots"></a>
<a id="placement-placement.swift.swift_object.uniffisession_countdistinctrealroots.746e9915fd31"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func countDistinctRealRoots(
    inputExpression: UniffiExpression,
    variable: String,
) -> UInt64?
```

Number of distinct real roots over all of \(\mathbb{R}\).

## derive_partial_differential_equation_point_symmetries

<a id="entry-presentation_swift_differential_equations_capability_contexts_derive_partial_differential_equation_point_symmetries_api_partial_differential_equations_session_derive_partial_differential_equation_point_symmetries"></a>
<a id="placement-placement.swift.swift_object.uniffisession_derivepartialdifferentialequationpointsymmetries.ab5aad630d79"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func derivePartialDifferentialEquationPointSymmetries(problem: UniffiPartialDifferentialEquationProblem) -> UniffiPartialDifferentialEquationPointSymmetryAlgebra
```

Derive the point-symmetry algebra of a scalar PDE, each basis generator independently verified.

## eliminate_quantifiers

<a id="entry-presentation_swift_solving_capability_equations_eliminate_quantifiers_api_logic_session_eliminate_quantifiers"></a>
<a id="placement-placement.swift.swift_object.uniffisession_eliminatequantifiers.166dad9757a8"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func eliminateQuantifiers(
    matrix: UniffiExpression,
    quantifiers: [UniffiQuantifier],
    variables: [String],
) -> UniffiExpression
```

`context.eliminate_quantifiers(matrix, quantifiers: list[str], variables: list[VariableLike])`

## establishes_completeness

<a id="entry-presentation_swift_differential_equations_capability_contexts_establishes_completeness_api_partial_differential_equations_partialdifferentialequationsolutionfamily_establishes_completeness"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsolutionfamily_establishescompleteness.2b72b820437b"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolutionFamily method</p>

```swift signature
func establishesCompleteness() -> Bool
```

Whether the family carries a completeness theorem whose every identity was proved.

## global_optimum_on_semialgebraic

<a id="entry-presentation_swift_optimization_capability_equations_global_optimum_on_semialgebraic_api_solving_session_global_optimum_on_semialgebraic"></a>
<a id="placement-placement.swift.swift_object.uniffisession_globaloptimumonsemialgebraic.771c66e25891"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func globalOptimumOnSemialgebraic(
    objective: UniffiExpression,
    constraints: UniffiExpression,
    variables: [String],
    direction: UniffiOptimizationDirection,
) -> UniffiOptimizationOutcome
```

`context.global_optimum_on_semialgebraic(objective, constraints, variables: list[VariableLike], direction: str)`

## karush_kuhn_tucker_points

<a id="entry-presentation_swift_optimization_capability_equations_karush_kuhn_tucker_points_api_solving_session_karush_kuhn_tucker_points"></a>
<a id="placement-placement.swift.swift_object.uniffisession_karushkuhntuckerpoints.c955fb78bdce"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func karushKuhnTuckerPoints(
    objective: UniffiExpression,
    inequalityConstraints: [UniffiExpression],
    equalityConstraints: [UniffiExpression],
    variables: [String],
) -> UniffiOptimizationOutcome
```

The Karush–Kuhn–Tucker points found by active-set enumeration. Each inequality is read as \(\operatorname{inequality} \le 0\) and each equality as `equality = 0`.

## lagrange_critical_points

<a id="entry-presentation_swift_optimization_capability_equations_lagrange_critical_points_api_solving_session_lagrange_critical_points"></a>
<a id="placement-placement.swift.swift_object.uniffisession_lagrangecriticalpoints.6c80f289d173"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func lagrangeCriticalPoints(
    objective: UniffiExpression,
    constraints: [UniffiExpression],
    variables: [String],
) -> UniffiOptimizationOutcome
```

The equality-constrained critical points via Lagrange multipliers: stationarity of \(L = f + \sum_i \lambda_i g_i\) together with each `constraint = 0`, classified by the bordered Hessian. The solved multiplier values appear in each point's multipliers.

## minimal_polynomial_of

<a id="entry-presentation_swift_solving_capability_equations_minimal_polynomial_of_api_algebra_session_minimal_polynomial_of"></a>
<a id="placement-placement.swift.swift_object.uniffisession_minimalpolynomialof.9ce9d06c3680"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func minimalPolynomialOf(
    inputExpression: UniffiExpression,
    variable: String,
) -> UniffiExpression?
```

Return an exact polynomial in the requested variable for a first-class polynomial-root atom. Its dense primitive integer coefficients are independent of the source variable, coefficient scale, and current isolation precision.

## multiplier_values

<a id="entry-presentation_swift_optimization_capability_equations_multiplier_values_api_results_criticalpoint_multiplier_values"></a>
<a id="placement-placement.swift.swift_object.unifficriticalpoint_multipliervalues.0bc87f3dcf31"></a>
<p class="symi-entry-owner">UniffiCriticalPoint method</p>

```swift signature
func multiplierValues() -> [UniffiExpression]
```

The solved values of those multipliers, in the same order as `multiplier_variables`.

## multiplier_variables

<a id="entry-presentation_swift_optimization_capability_equations_multiplier_variables_api_results_criticalpoint_multiplier_variables"></a>
<a id="placement-placement.swift.swift_object.unifficriticalpoint_multipliervariables.a46f5fe2919e"></a>
<p class="symi-entry-owner">UniffiCriticalPoint method</p>

```swift signature
func multiplierVariables() -> [String]
```

The names of the introduced Lagrange / KKT multipliers at a constrained critical point (empty for the unconstrained case).

## partial_differential_equation_point_symmetry_generator

<a id="entry-presentation_swift_differential_equations_capability_contexts_partial_differential_equation_point_symmetry_generator_api_partial_differential_equations_session_partial_differential_equation_point_symmetry_generator"></a>
<a id="placement-placement.swift.swift_object.uniffisession_partialdifferentialequationpointsymmetrygenerator.5fa81229de42"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func partialDifferentialEquationPointSymmetryGenerator(
    problem: UniffiPartialDifferentialEquationProblem,
    coordinateInfinitesimals: [UniffiExpression],
    dependentInfinitesimal: UniffiExpression,
) -> UniffiPartialDifferentialEquationPointSymmetryGenerator
```

Construct a candidate point-symmetry generator of a PDE from its infinitesimals.

## points

<a id="entry-presentation_swift_optimization_capability_equations_points_api_results_optimizationoutcome_points"></a>
<a id="placement-placement.swift.swift_object.uniffioptimizationoutcome_points.82c3e6eb8433"></a>
<p class="symi-entry-owner">UniffiOptimizationOutcome method</p>

```swift signature
func points() -> [UniffiCriticalPoint]
```

The list of `critical_point` objects in an `optimization_outcome` (WASM).

## polynomial_root

<a id="entry-presentation_swift_solving_capability_equations_polynomial_root_api_solving_session_polynomial_root"></a>
<a id="placement-placement.swift.swift_object.uniffisession_polynomialroot.d6dd82e2a4bf"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func polynomialRoot(
    inputExpression: UniffiExpression,
    variable: String,
    index: UInt64,
) -> UniffiExpression?
```

Construct the zero-based `index`-th exact root of a univariate rational polynomial. Roots use canonical mathematical order: increasing real roots first, then non-real roots ordered by exact real part and exact imaginary part; indexing counts multiplicity. Coefficient scale and the variable name do not affect the resulting atom. Invalid, constant, non-rational, out-of-range, or uncertifiable inputs return `None`.

## real_root_count

<a id="entry-presentation_swift_solving_capability_equations_real_root_count_api_solving_session_real_root_count"></a>
<a id="placement-placement.swift.swift_object.uniffisession_realrootcount.e76b0567b4fa"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func realRootCount(
    inputExpression: UniffiExpression,
    variable: String,
    lower: Int64,
    upper: Int64,
) -> UInt64?
```

Number of distinct real roots of a univariate polynomial in the interval `(lower, upper]` via Sturm sequences. `None` when the expression is not a univariate polynomial over the rationals.

## real_root_sign

<a id="entry-presentation_swift_solving_capability_equations_real_root_sign_api_solving_session_real_root_sign"></a>
<a id="placement-placement.swift.swift_object.uniffisession_realrootsign.efd61d7845dc"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func realRootSign(
    inputExpression: UniffiExpression,
    variable: String,
    index: UInt64,
) -> Int64?
```

The exact sign (`-1`, `0`, or `1`) of the `index`-th smallest real root of a univariate polynomial over the rationals, decided exactly through the real algebraic number layer rather than by numeric evaluation. `None` when the expression is not a univariate polynomial over the rationals or `index` is out of range.

## roots_with_multiplicities

<a id="entry-presentation_swift_solving_capability_equations_roots_with_multiplicities_api_solving_session_roots_with_multiplicities"></a>
<a id="placement-placement.swift.swift_object.uniffisession_rootswithmultiplicities.a4c3f3bed9ab"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func rootsWithMultiplicities(
    inputExpression: UniffiExpression,
    variable: String,
) -> [UniffiRootMultiplicity]
```

Roots of a polynomial with their multiplicities. Notes: Python returns a dict keyed by root; WASM returns an array of `root_multiplicity` objects.

## roots_with_multiplicities

<a id="entry-presentation_swift_solving_capability_equations_roots_with_multiplicities_api_expression_operations_expression_roots_with_multiplicities"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_rootswithmultiplicities.f3a60625db71"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func rootsWithMultiplicities(variable: String) -> [UniffiRootMultiplicity]
```

Roots of a polynomial with their multiplicities. Notes: Python returns a dict keyed by root; WASM returns an array of `root_multiplicity` objects.

## solutions

<a id="entry-presentation_swift_solving_capability_equations_solutions_api_results_polynomialsystemsolution_solutions"></a>
<a id="placement-placement.swift.swift_object.uniffipolynomialsystemsolution_solutions.d568d9eb844c"></a>
<p class="symi-entry-owner">UniffiPolynomialSystemSolution method</p>

```swift signature
func solutions() -> [UniffiSystemAssignment]
```

Getter on `polynomial_system_solution`: the array of `system_assignment` tuples (empty for the non-finite verdicts).

## solve

<a id="entry-presentation_swift_solving_capability_equations_solve_api_solving_session_solve"></a>
<a id="placement-placement.swift.swift_object.uniffisession_solve.807ed3270ad9"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func solve(
    inputExpression: UniffiExpression,
    variable: String,
) -> [UniffiExpression]
```

Solve an equation (an `equal` node, or an expression implicitly equated to zero) for `variable`, returning a list of solutions. Solutions outside the solver's reach are simply absent — prefer `solveset` when you need an honest "unsolved" residue.

## solve

<a id="entry-presentation_swift_solving_capability_equations_solve_api_expression_operations_expression_solve"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_solve.6b9c187c4cac"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func solve(variable: String) -> [UniffiExpression]
```

Solve an equation (an `equal` node, or an expression implicitly equated to zero) for `variable`, returning a list of solutions. Solutions outside the solver's reach are simply absent — prefer `solveset` when you need an honest "unsolved" residue.

## solve_linear_recurrence

<a id="entry-presentation_swift_differential_equations_capability_equations_solve_linear_recurrence_api_solving_session_solve_linear_recurrence"></a>
<a id="placement-placement.swift.swift_object.uniffisession_solvelinearrecurrence.0ea7bb33e69a"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func solveLinearRecurrence(
    equation: UniffiExpression,
    sequenceCall: UniffiExpression,
    indexVariable: String,
    initialConditions: [UniffiExpressionExpressionTuple]?,
) -> UniffiExpression
```

Solve a linear recurrence with polynomial coefficients for the unknown sequence named by `sequence_call` (e.g. `a(n)`), via Petkovšek's Hyper algorithm. The general solution carries one fresh symbolic constant per basis element; `initial_conditions` is a list of `(index, value)` pairs fitted by back-substitution. Constant-coefficient polynomial-exponential forcing and coefficients rational in `n` and `c^n` are also solved; other shapes return the unevaluated `recurrence_equation` placeholder. WASM passes a flat interleaved array.

## solve_ordinary_differential_equation

<a id="entry-presentation_swift_differential_equations_capability_equations_solve_ordinary_differential_equation_api_solving_session_solve_ordinary_differential_equation"></a>
<a id="placement-placement.swift.swift_object.uniffisession_solveordinarydifferentialequation.cad98ea962d9"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func solveOrdinaryDifferentialEquation(
    equation: UniffiExpression,
    dependentFunctionCall: UniffiExpression,
    independentVariable: String,
    initialConditions: [UniffiExpressionExpressionTuple]?,
) -> UniffiExpression
```

Solve an ODE for the unknown function named by `dependent_function_call` (e.g. `y(x)`).

## solve_ordinary_differential_equation_request

<a id="entry-presentation_swift_differential_equations_capability_contexts_solve_ordinary_differential_equation_request_api_ordinary_differential_equations_session_solve_ordinary_differential_equation_request"></a>
<a id="placement-placement.swift.swift_object.uniffisession_solveordinarydifferentialequationrequest.8857696c6519"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func solveOrdinaryDifferentialEquationRequest(
    equation: UniffiExpression,
    dependentFunctionCall: UniffiExpression,
    independentVariable: String,
    scope: UniffiDifferentialEquationSolutionScope,
    conditionResiduals: [UniffiExpression],
    method: UniffiOrdinaryDifferentialEquationMethod,
    regularity: UniffiOrdinaryDifferentialEquationRegularity,
) -> UniffiOrdinaryDifferentialEquationSolveResult
```

Solve one scalar ODE request with its data, method, scope, and regularity, keeping the evidence behind the answer.

## solve_ordinary_differential_equation_system_request

<a id="entry-presentation_swift_differential_equations_capability_contexts_solve_ordinary_differential_equation_system_request_api_ordinary_differential_equations_session_solve_ordinary_differential_equation_system_request"></a>
<a id="placement-placement.swift.swift_object.uniffisession_solveordinarydifferentialequationsystemrequest.679e85c7d64a"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func solveOrdinaryDifferentialEquationSystemRequest(
    equations: [UniffiExpression],
    dependentFunctionCalls: [UniffiExpression],
    independentVariable: String,
    conditionResiduals: [UniffiExpression],
    method: UniffiOrdinaryDifferentialEquationSystemMethod,
) -> UniffiOrdinaryDifferentialEquationSystemSolveResult
```

Solve a system of ODEs in one coordinate through the requested route, keeping the evidence behind the assignment.

## solve_ordinary_differential_equation_with_history

<a id="entry-presentation_swift_differential_equations_capability_contexts_solve_ordinary_differential_equation_with_history_api_ordinary_differential_equations_session_solve_ordinary_differential_equation_with_history"></a>
<a id="placement-placement.swift.swift_object.uniffisession_solveordinarydifferentialequationwithhistory.c81f91692ead"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func solveOrdinaryDifferentialEquationWithHistory(
    equation: UniffiExpression,
    dependentFunctionCall: UniffiExpression,
    independentVariable: String,
    historyValue: UniffiExpression,
    historyStart: UniffiExpression,
    historyEnd: UniffiExpression,
) -> UniffiOrdinaryDifferentialEquationSolveResult
```

Solve a retarded delay ODE from a constant history stated on an explicit interval.

## solve_ordinary_differential_equation_with_particular_solution

<a id="entry-presentation_swift_differential_equations_capability_equations_solve_ordinary_differential_equation_with_particular_solution_api_solving_session_solve_ordinary_differential_equation_with_particular_solution"></a>
<a id="placement-placement.swift.swift_object.uniffisession_solveordinarydifferentialequationwithparticularsolution.a9d91e602cce"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func solveOrdinaryDifferentialEquationWithParticularSolution(
    equation: UniffiExpression,
    dependentFunctionCall: UniffiExpression,
    independentVariable: String,
    particularSolution: UniffiExpression,
) -> UniffiExpression
```

Riccati-specific entry: with a known particular solution \(y_1\), the substitution \(y = y_1 + 1/v\) reduces the Riccati equation to a linear first-order ODE. Falls back to the unevaluated placeholder when the shape is not Riccati.

## solve_partial_differential_equation_by_similarity_reduction

<a id="entry-presentation_swift_differential_equations_capability_contexts_solve_partial_differential_equation_by_similarity_reduction_api_partial_differential_equations_session_solve_partial_differential_equation_by_similarity_reduction"></a>
<a id="placement-placement.swift.swift_object.uniffisession_solvepartialdifferentialequationbysimilarityreduction.0e7f570c4d72"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func solvePartialDifferentialEquationBySimilarityReduction(
    problem: UniffiPartialDifferentialEquationProblem,
    generator: UniffiPartialDifferentialEquationPointSymmetryGenerator,
) -> UniffiPartialDifferentialEquationSimilaritySolution
```

Reduce a two-variable PDE by a point symmetry, solve the reduction, and lift its family.

## solve_partial_differential_equation_request

<a id="entry-presentation_swift_differential_equations_capability_contexts_solve_partial_differential_equation_request_api_partial_differential_equations_session_solve_partial_differential_equation_request"></a>
<a id="placement-placement.swift.swift_object.uniffisession_solvepartialdifferentialequationrequest.e31d00b727dc"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func solvePartialDifferentialEquationRequest(
    problem: UniffiPartialDifferentialEquationProblem,
    scope: UniffiDifferentialEquationSolutionScope,
    geometricDomain: UniffiPartialDifferentialEquationGeometricDomain,
    regularity: UniffiPartialDifferentialEquationRegularity,
    solutionClass: UniffiPartialDifferentialEquationSolutionClass,
    method: UniffiPartialDifferentialEquationMethod,
) -> UniffiPartialDifferentialEquationSolveResult
```

Solve a PDE request whose scope, geometry, regularity, and solution class are part of the question.

## solve_polynomial_system

<a id="entry-presentation_swift_solving_capability_equations_solve_polynomial_system_api_solving_session_solve_polynomial_system"></a>
<a id="placement-placement.swift.swift_object.uniffisession_solvepolynomialsystem.de631d9ea95b"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func solvePolynomialSystem(
    equations: [UniffiExpression],
    variables: [String],
) -> UniffiPolynomialSystemSolution
```

Solve a multivariate polynomial system `{ equation_i = 0 }` for the named unknowns. Every other free symbol is a parameter carried symbolically in the coefficient ring. The solver is sound and honestly incomplete: every returned tuple has been back-substituted into every equation and reduced to a provable zero, and the verdict never overstates completeness.

## solve_semialgebraic

<a id="entry-presentation_swift_solving_capability_equations_solve_semialgebraic_api_logic_session_solve_semialgebraic"></a>
<a id="placement-placement.swift.swift_object.uniffisession_solvesemialgebraic.388d55b98a04"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func solveSemialgebraic(
    matrix: UniffiExpression,
    variables: [String],
) -> UniffiExpression
```

`context.solve_semialgebraic(matrix, variables: list[VariableLike])`

## solveset

<a id="entry-presentation_swift_solving_capability_equations_solveset_api_solving_session_solveset"></a>
<a id="placement-placement.swift.swift_object.uniffisession_solveset.da46b979785b"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func solveset(
    inputExpression: UniffiExpression,
    variable: String,
) -> UniffiExpression
```

Solution set of the equation or inequality: a finite set, interval, union, image set (periodic families), or condition set (the honest "unsolved" residue).

## solveset

<a id="entry-presentation_swift_solving_capability_equations_solveset_api_expression_operations_expression_solveset"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_solveset.4fc2f7162e15"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func solveset(variable: String) -> UniffiExpression
```

Solution set of the equation or inequality: a finite set, interval, union, image set (periodic families), or condition set (the honest "unsolved" residue).

## solveset_in_domain

<a id="entry-presentation_swift_solving_capability_equations_solveset_in_domain_api_solving_session_solveset_in_domain"></a>
<a id="placement-placement.swift.swift_object.uniffisession_solvesetindomain.ff107f8e84d4"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func solvesetInDomain(
    inputExpression: UniffiExpression,
    variable: String,
    domain: UniffiExpression,
) -> UniffiExpression
```

`solveset` restricted to an explicit domain set (e.g. `real_line()`, `integer_set()`, an interval).

## unconstrained_critical_points

<a id="entry-presentation_swift_optimization_capability_equations_unconstrained_critical_points_api_solving_session_unconstrained_critical_points"></a>
<a id="placement-placement.swift.swift_object.uniffisession_unconstrainedcriticalpoints.b6a6ab295c94"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func unconstrainedCriticalPoints(
    objective: UniffiExpression,
    variables: [String],
) -> UniffiOptimizationOutcome
```

The critical points of `objective` as the solutions of \(\nabla f = 0\), each classified by the definiteness of the Hessian (Sylvester's criterion on the leading principal minors).

## values

<a id="entry-presentation_swift_solving_capability_equations_values_api_results_criticalpoint_values"></a>
<a id="placement-placement.swift.swift_object.unifficriticalpoint_values.0245850eedd6"></a>
<p class="symi-entry-owner">UniffiCriticalPoint method</p>

```swift signature
func values() -> [UniffiExpression]
```

Getter on `system_assignment`: the assigned value expressions, aligned with `variables`.

## values

<a id="entry-presentation_swift_solving_capability_equations_values_api_results_systemassignment_values"></a>
<a id="placement-placement.swift.swift_object.uniffisystemassignment_values.f7d5c838b23e"></a>
<p class="symi-entry-owner">UniffiSystemAssignment method</p>

```swift signature
func values() -> [UniffiExpression]
```

Getter on `system_assignment`: the assigned value expressions, aligned with `variables`.

## variables

<a id="entry-presentation_swift_solving_capability_equations_variables_api_results_criticalpoint_variables"></a>
<a id="placement-placement.swift.swift_object.unifficriticalpoint_variables.b171a28deb56"></a>
<p class="symi-entry-owner">UniffiCriticalPoint method</p>

```swift signature
func variables() -> [String]
```

Getter on `system_assignment`: the unknown names, in order.

## variables

<a id="entry-presentation_swift_solving_capability_equations_variables_api_results_systemassignment_variables"></a>
<a id="placement-placement.swift.swift_object.uniffisystemassignment_variables.71ff36bfc65c"></a>
<p class="symi-entry-owner">UniffiSystemAssignment method</p>

```swift signature
func variables() -> [String]
```

Getter on `system_assignment`: the unknown names, in order.

## verdict

<a id="entry-presentation_swift_solving_capability_calculus_verdict_api_results_definiteintegrationresult_verdict"></a>
<a id="placement-placement.swift.swift_object.uniffidefiniteintegrationresult_verdict.1fb02e380bc6"></a>
<p class="symi-entry-owner">UniffiDefiniteIntegrationResult method</p>

```swift signature
func verdict() -> UniffiDefiniteIntegrationVerdict
```

Whether the request was evaluated, proved divergent, or declined.

## verdict

<a id="entry-presentation_swift_solving_capability_equations_verdict_api_results_optimizationoutcome_verdict"></a>
<a id="placement-placement.swift.swift_object.uniffioptimizationoutcome_verdict.b5e76d513ad8"></a>
<p class="symi-entry-owner">UniffiOptimizationOutcome method</p>

```swift signature
func verdict() -> UniffiOptimizationVerdict
```

The optimization result classification.

## verdict

<a id="entry-presentation_swift_solving_capability_equations_verdict_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_verdict"></a>
<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsolveresult_verdict.81cb94d2d66c"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSolveResult method</p>

```swift signature
func verdict() -> UniffiOrdinaryDifferentialEquationSolveVerdict
```

Whether the request was solved or declined.

## verdict

<a id="entry-presentation_swift_solving_capability_equations_verdict_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_verdict"></a>
<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsystemsolveresult_verdict.117302a57408"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSystemSolveResult method</p>

```swift signature
func verdict() -> UniffiOrdinaryDifferentialEquationSolveVerdict
```

Whether the system was solved or declined.

## verdict

<a id="entry-presentation_swift_solving_capability_equations_verdict_api_ordinary_differential_equations_ordinarydifferentialequationsystemverificationreport_verdict"></a>
<a id="placement-placement.swift.swift_object.uniffiordinarydifferentialequationsystemverificationreport_verdict.7c5ee7f5ddca"></a>
<p class="symi-entry-owner">UniffiOrdinaryDifferentialEquationSystemVerificationReport method</p>

```swift signature
func verdict() -> UniffiOrdinaryDifferentialEquationVerificationVerdict
```

The decision on every equation residual and every datum of the supplied assignment.

## verdict

<a id="entry-presentation_swift_solving_capability_equations_verdict_api_partial_differential_equations_partialdifferentialequationsecondorderclassification_verdict"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsecondorderclassification_verdict.729b5a35345e"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSecondOrderClassification method</p>

```swift signature
func verdict() -> UniffiPartialDifferentialEquationSecondOrderTypeVerdict
```

Whether one type, a complete case table, or neither was proved.

## verdict

<a id="entry-presentation_swift_solving_capability_equations_verdict_api_partial_differential_equations_partialdifferentialequationsolveresult_verdict"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsolveresult_verdict.12cdc8ab2c66"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolveResult method</p>

```swift signature
func verdict() -> UniffiPartialDifferentialEquationSolveVerdict
```

Whether the dispatcher solved or honestly declined.

## verdict

<a id="entry-presentation_swift_solving_capability_equations_verdict_api_partial_differential_equations_partialdifferentialequationtransformationverificationreport_verdict"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationtransformationverificationreport_verdict.271d02a40a76"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationTransformationVerificationReport method</p>

```swift signature
func verdict() -> UniffiPartialDifferentialEquationVerificationVerdict
```

The aggregate exact verification verdict.

## verdict

<a id="entry-presentation_swift_solving_capability_equations_verdict_api_partial_differential_equations_partialdifferentialequationverificationreport_verdict"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationverificationreport_verdict.9f59c565ef60"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationVerificationReport method</p>

```swift signature
func verdict() -> UniffiPartialDifferentialEquationVerificationVerdict
```

The aggregate exact verification verdict.

## verdict

<a id="entry-presentation_swift_solving_capability_equations_verdict_api_partial_differential_equations_partialdifferentialequationverificationresidual_verdict"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationverificationresidual_verdict.a2cbb6427ec2"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationVerificationResidual method</p>

```swift signature
func verdict() -> UniffiPartialDifferentialEquationVerificationVerdict
```

The exact verdict proved about this one residual.

## verdict

<a id="entry-presentation_swift_solving_capability_equations_verdict_api_results_polynomialsystemsolution_verdict"></a>
<a id="placement-placement.swift.swift_object.uniffipolynomialsystemsolution_verdict.eeb0a1b04507"></a>
<p class="symi-entry-owner">UniffiPolynomialSystemSolution method</p>

```swift signature
func verdict() -> UniffiSystemVerdict
```

Getter on `polynomial_system_solution`: the verdict string, one of `"finite"`, `"empty"`, `"positive_dimensional"`, or `"declined"`.

## verify_ordinary_differential_equation_system_solution

<a id="entry-presentation_swift_differential_equations_capability_contexts_verify_ordinary_differential_equation_system_solution_api_ordinary_differential_equations_session_verify_ordinary_differential_equation_system_solution"></a>
<a id="placement-placement.swift.swift_object.uniffisession_verifyordinarydifferentialequationsystemsolution.ce4739e5761d"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func verifyOrdinaryDifferentialEquationSystemSolution(
    equations: [UniffiExpression],
    dependentFunctionCalls: [UniffiExpression],
    independentVariable: String,
    components: [UniffiExpression],
    generatedConstants: [UniffiExpression],
    conditionResiduals: [UniffiExpression],
) -> UniffiOrdinaryDifferentialEquationSystemVerificationReport
```

Verify a supplied assignment for a system of ODEs without solving it again.

## cancel

<a id="entry-presentation_swift_simplification_general_capability_expression_transformations_cancel_api_session_cancel"></a>
<a id="placement-placement.swift.swift_object.uniffisession_cancel.1ced49e0fc6d"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func cancel(target: UniffiExpression) -> UniffiExpression
```

Rational normal form: write as a single fraction and divide out the polynomial GCD of numerator and denominator.

## cancel

<a id="entry-presentation_swift_simplification_general_capability_expression_transformations_cancel_api_expression_cancel"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_cancel.602b185ecf1a"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func cancel() -> UniffiExpression
```

Rational normal form: write as a single fraction and divide out the polynomial GCD of numerator and denominator.

## collect

<a id="entry-presentation_swift_algebraic_transforms_capability_expression_transformations_collect_api_algebra_session_collect"></a>
<a id="placement-placement.swift.swift_object.uniffisession_collect.41ea0e93f668"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func collect(
    inputExpression: UniffiExpression,
    generator: UniffiExpression,
) -> UniffiExpression
```

Regroup the additive terms of `expression` by the numeric (integer or rational) powers of a single `generator`, which may be a variable or an arbitrary subexpression, writing the result as a sum of `generator^k coefficient(k)` terms without expanding the coefficients. For example, collecting `ax^2 + bx^2 + ax - bx + c` by `x` yields `x^2(a + b) + x(a - b) + c`.

## collect

<a id="entry-presentation_swift_algebraic_transforms_capability_expression_transformations_collect_api_expression_operations_expression_collect"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_collect.436e7c6f877f"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func collect(generator: UniffiExpression) -> UniffiExpression
```

Regroup the additive terms of `expression` by the numeric (integer or rational) powers of a single `generator`, which may be a variable or an arbitrary subexpression, writing the result as a sum of `generator^k coefficient(k)` terms without expanding the coefficients. For example, collecting `ax^2 + bx^2 + ax - bx + c` by `x` yields `x^2(a + b) + x(a - b) + c`.

## collect_radicals

<a id="entry-presentation_swift_algebraic_transforms_capability_expression_transformations_collect_radicals_api_algebra_session_collect_radicals"></a>
<a id="placement-placement.swift.swift_object.uniffisession_collectradicals.65e775e096f6"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func collectRadicals(inputExpression: UniffiExpression) -> UniffiExpression
```

Collect like numeric radical kernels in a top-level sum. For example, `a*sqrt(2) + b*sqrt(2) + 3` becomes `(a + b)*sqrt(2) + 3`.

## collect_radicals

<a id="entry-presentation_swift_algebraic_transforms_capability_expression_transformations_collect_radicals_api_expression_operations_expression_collect_radicals"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_collectradicals.8a12c9e64189"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func collectRadicals() -> UniffiExpression
```

Collect like numeric radical kernels in a top-level sum. For example, `a*sqrt(2) + b*sqrt(2) + 3` becomes `(a + b)*sqrt(2) + 3`.

## combine_logarithm

<a id="entry-presentation_swift_trigonometric_complex_rewrites_capability_expression_transformations_combine_logarithm_api_algebra_session_combine_logarithm"></a>
<a id="placement-placement.swift.swift_object.uniffisession_combinelogarithm.76ac0d3a69ea"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func combineLogarithm(inputExpression: UniffiExpression) -> UniffiExpression
```

\(\log a + \log b \rightarrow \log(a b)\) and \(n\log a \rightarrow \log(a^n)\) when the transformation preserves the expression's domain.

## combine_logarithm

<a id="entry-presentation_swift_trigonometric_complex_rewrites_capability_expression_transformations_combine_logarithm_api_expression_operations_expression_combine_logarithm"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_combinelogarithm.0bdc7eb3a1f8"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func combineLogarithm() -> UniffiExpression
```

\(\log a + \log b \rightarrow \log(a b)\) and \(n\log a \rightarrow \log(a^n)\) when the transformation preserves the expression's domain.

## combine_powers

<a id="entry-presentation_swift_trigonometric_complex_rewrites_capability_expression_transformations_combine_powers_api_algebra_session_combine_powers"></a>
<a id="placement-placement.swift.swift_object.uniffisession_combinepowers.d59fd8e67728"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func combinePowers(inputExpression: UniffiExpression) -> UniffiExpression
```

Combine same-exponent powers into a single power of the merged base (`x^a y^a -> (xy)^a`) at every product node where the rewrite is provably valid. This identity is false across the branch cut of the complex logarithm — at `x = y = -1` and `a = 1/2` the left side is `ii = -1` while the right side is `sqrt(1) = 1` — so it fires only when the exponent is provably an integer or when every combined base is provably positive. Positivity of the merged base is not enough: `(-2)^x (-3)^x` is left alone, because at `x = 1/2` combining it to `6^x` would flip the sign of the result. Positive numeric-literal bases need no assumptions at all, so `2^x 3^x` becomes `6^x` and `(1/2)^x 3^x` becomes `(3/2)^x`.

## combine_powers

<a id="entry-presentation_swift_trigonometric_complex_rewrites_capability_expression_transformations_combine_powers_api_expression_operations_expression_combine_powers"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_combinepowers.0c443e507fad"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func combinePowers() -> UniffiExpression
```

Combine same-exponent powers into a single power of the merged base (`x^a y^a -> (xy)^a`) at every product node where the rewrite is provably valid. This identity is false across the branch cut of the complex logarithm — at `x = y = -1` and `a = 1/2` the left side is `ii = -1` while the right side is `sqrt(1) = 1` — so it fires only when the exponent is provably an integer or when every combined base is provably positive. Positivity of the merged base is not enough: `(-2)^x (-3)^x` is left alone, because at `x = 1/2` combining it to `6^x` would flip the sign of the result. Positive numeric-literal bases need no assumptions at all, so `2^x 3^x` becomes `6^x` and `(1/2)^x 3^x` becomes `(3/2)^x`.

## combine_trigonometric

<a id="entry-presentation_swift_trigonometric_complex_rewrites_capability_expression_transformations_combine_trigonometric_api_session_combine_trigonometric"></a>
<a id="placement-placement.swift.swift_object.uniffisession_combinetrigonometric.d451139c9e39"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func combineTrigonometric(target: UniffiExpression) -> UniffiExpression
```

Inverse direction of `expand_trigonometric`: product-to-sum and angle-recombination rules.

## combine_trigonometric

<a id="entry-presentation_swift_trigonometric_complex_rewrites_capability_expression_transformations_combine_trigonometric_api_expression_combine_trigonometric"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_combinetrigonometric.fc6b740ce454"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func combineTrigonometric() -> UniffiExpression
```

Inverse direction of `expand_trigonometric`: product-to-sum and angle-recombination rules.

## complete_the_square

<a id="entry-presentation_swift_algebraic_transforms_capability_expression_transformations_complete_the_square_api_algebra_session_complete_the_square"></a>
<a id="placement-placement.swift.swift_object.uniffisession_completethesquare.f649ec0ef170"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func completeTheSquare(
    inputExpression: UniffiExpression,
    variable: UniffiExpression,
) -> UniffiExpression
```

Rewrite an expression that is quadratic in `variable` into the exact vertex form `a*(variable - h)^2 + k`, with `h = -b/(2*a)` and `k = c - b^2/(4*a)` built from the degree-2, degree-1 and degree-0 coefficients `a`, `b`, `c` of the expression collected in `variable`.

## complete_the_square

<a id="entry-presentation_swift_algebraic_transforms_capability_expression_transformations_complete_the_square_api_expression_operations_expression_complete_the_square"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_completethesquare.a76877cb15a3"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func completeTheSquare(variable: UniffiExpression) -> UniffiExpression
```

Rewrite an expression that is quadratic in `variable` into the exact vertex form `a*(variable - h)^2 + k`, with `h = -b/(2*a)` and `k = c - b^2/(4*a)` built from the degree-2, degree-1 and degree-0 coefficients `a`, `b`, `c` of the expression collected in `variable`.

## denest_powers

<a id="entry-presentation_swift_trigonometric_complex_rewrites_capability_expression_transformations_denest_powers_api_algebra_session_denest_powers"></a>
<a id="placement-placement.swift.swift_object.uniffisession_denestpowers.bc71d1e41188"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func denestPowers(inputExpression: UniffiExpression) -> UniffiExpression
```

Flatten a power of a power into a single power (`(x^a)^b -> x^(a*b)`) at every power node whose outer exponent is provably an integer, which is valid on the principal branch because an integer power never routes through `log`.

## denest_powers

<a id="entry-presentation_swift_trigonometric_complex_rewrites_capability_expression_transformations_denest_powers_api_expression_operations_expression_denest_powers"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_denestpowers.98e0069e9002"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func denestPowers() -> UniffiExpression
```

Flatten a power of a power into a single power (`(x^a)^b -> x^(a*b)`) at every power node whose outer exponent is provably an integer, which is valid on the principal branch because an integer power never routes through `log`.

## denest_radicals

<a id="entry-presentation_swift_algebraic_transforms_capability_expression_transformations_denest_radicals_api_algebra_session_denest_radicals"></a>
<a id="placement-placement.swift.swift_object.uniffisession_denestradicals.9508d93c545f"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func denestRadicals(inputExpression: UniffiExpression) -> UniffiExpression
```

Denest the bounded depth-two real-radical subset bottom-up: rational quadratic surds, up to three inner quadratic surds, and `cbrt(a + b*sqrt(c))` when its exact resolvent has a rational root. For example, `sqrt(3 + 2*sqrt(2))` becomes `1 + sqrt(2)` and `cbrt(2 + sqrt(5))` becomes `(1 + sqrt(5))/2`.

## denest_radicals

<a id="entry-presentation_swift_algebraic_transforms_capability_expression_transformations_denest_radicals_api_expression_operations_expression_denest_radicals"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_denestradicals.ef465d8224e8"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func denestRadicals() -> UniffiExpression
```

Denest the bounded depth-two real-radical subset bottom-up: rational quadratic surds, up to three inner quadratic surds, and `cbrt(a + b*sqrt(c))` when its exact resolvent has a rational root. For example, `sqrt(3 + 2*sqrt(2))` becomes `1 + sqrt(2)` and `cbrt(2 + sqrt(5))` becomes `(1 + sqrt(5))/2`.

## denominator

<a id="entry-presentation_swift_expressions_capability_expression_transformations_denominator_api_session_denominator"></a>
<a id="placement-placement.swift.swift_object.uniffisession_denominator.f8b517d89880"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func denominator(target: UniffiExpression) -> UniffiExpression
```

Returns the structural denominator from `numerator_denominator`.

## denominator

<a id="entry-presentation_swift_expressions_capability_expression_transformations_denominator_api_expression_denominator"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_denominator.4254a3f8a578"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func denominator() -> UniffiExpression
```

Returns the structural denominator from `numerator_denominator`.

## divide

<a id="entry-presentation_swift_expressions_capability_expression_transformations_divide_api_expression_divide"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_divide.348880b74d1e"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func divide(other: UniffiExpression) -> UniffiExpression
```

Quotient of this expression and `other`.

## duplicate

<a id="entry-presentation_swift_expressions_capability_expression_transformations_duplicate_api_expression_duplicate"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_duplicate.5da15dafb7a9"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func duplicate() -> UniffiExpression
```

An independent handle to the same underlying expression. The recommended JavaScript facade duplicates values before passing them through ownership-transferring raw WASM arrays, so ordinary facade calls are non-destructive. Callers using `facade.raw` directly must still duplicate a handle they intend to retain. Python arguments are borrowed.

## equals

<a id="entry-presentation_swift_expressions_capability_expression_transformations_equals_api_expression_operations_expression_equals"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_equals.b8c03f8e5282"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func equals(other: UniffiExpression) -> Bool
```

Mathematical equality test: \(\operatorname{simplify}(\operatorname{self} - \operatorname{other}) = 0\).

## evaluate_to_complex_inexact

<a id="entry-presentation_swift_expressions_capability_expression_transformations_evaluate_to_complex_inexact_api_expression_operations_expression_evaluate_to_complex_inexact"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_evaluatetocomplexinexact.197078c91a42"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func evaluateToComplexInexact() -> UniffiFloatingPointFloatingPointTuple
```

Complex evaluation at the default working precision under the documented principal-value branch cuts, as (real, imaginary).

## evaluate_to_complex_inexact_at_precision

<a id="entry-presentation_swift_expressions_capability_expression_transformations_evaluate_to_complex_inexact_at_precision_api_expression_operations_expression_evaluate_to_complex_inexact_at_precision"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_evaluatetocomplexinexactatprecision.bfb52393fcc1"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func evaluateToComplexInexactAtPrecision(precisionBits: UInt64) -> UniffiFloatingPointFloatingPointTuple
```

Same with an explicit working precision in bits.

## evaluate_to_float

<a id="entry-presentation_swift_expressions_capability_expression_transformations_evaluate_to_float_api_expression_operations_expression_evaluate_to_float"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_evaluatetofloat.9518d5ce1912"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func evaluateToFloat() -> Double
```

Real double-precision value; raises when the expression has no real numeric value (free symbols, complex value, pole).

## expand

<a id="entry-presentation_swift_algebraic_transforms_capability_expression_transformations_expand_api_session_expand"></a>
<a id="placement-placement.swift.swift_object.uniffisession_expand.2e4777fb7b27"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func expand(target: UniffiExpression) -> UniffiExpression
```

Expand products, integer powers, and supported algebraic forms.

## expand

<a id="entry-presentation_swift_algebraic_transforms_capability_expression_transformations_expand_api_expression_expand"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_expand.f186951724c4"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func expand() -> UniffiExpression
```

Expand products, integer powers, and supported algebraic forms.

## expand_complex

<a id="entry-presentation_swift_trigonometric_complex_rewrites_capability_expression_transformations_expand_complex_api_algebra_session_expand_complex"></a>
<a id="placement-placement.swift.swift_object.uniffisession_expandcomplex.10e7c2d7d775"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func expandComplex(inputExpression: UniffiExpression) -> UniffiExpression
```

Decompose an expression exactly as `real_part(expression) + i*imaginary_part(expression)`.

## expand_complex

<a id="entry-presentation_swift_trigonometric_complex_rewrites_capability_expression_transformations_expand_complex_api_expression_operations_expression_expand_complex"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_expandcomplex.a6ec49c593ff"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func expandComplex() -> UniffiExpression
```

Decompose an expression exactly as `real_part(expression) + i*imaginary_part(expression)`.

## expand_logarithm

<a id="entry-presentation_swift_trigonometric_complex_rewrites_capability_expression_transformations_expand_logarithm_api_algebra_session_expand_logarithm"></a>
<a id="placement-placement.swift.swift_object.uniffisession_expandlogarithm.962f51c8cd33"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func expandLogarithm(inputExpression: UniffiExpression) -> UniffiExpression
```

\(\log(a b) \rightarrow \log a + \log b\) and \(\log(a^n) \rightarrow n\log a\), applied only where the operands are provably positive. Operands of unknown sign pass through unchanged.

## expand_logarithm

<a id="entry-presentation_swift_trigonometric_complex_rewrites_capability_expression_transformations_expand_logarithm_api_expression_operations_expression_expand_logarithm"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_expandlogarithm.3539d6fcf19f"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func expandLogarithm() -> UniffiExpression
```

\(\log(a b) \rightarrow \log a + \log b\) and \(\log(a^n) \rightarrow n\log a\), applied only where the operands are provably positive. Operands of unknown sign pass through unchanged.

## expand_power_base

<a id="entry-presentation_swift_trigonometric_complex_rewrites_capability_expression_transformations_expand_power_base_api_algebra_session_expand_power_base"></a>
<a id="placement-placement.swift.swift_object.uniffisession_expandpowerbase.9795002c6ea7"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func expandPowerBase(inputExpression: UniffiExpression) -> UniffiExpression
```

Split a power whose base is structurally a product into a product of powers (`(xy)^a -> x^a y^a`) at every power node whose exponent is provably an integer — the only unconditionally valid gate for this direction, since the split introduces `x^a` and `y^a` individually and each needs its own base off the cut. With `n` declared an integer, `(xy)^n` becomes `x^n y^n`.

## expand_power_base

<a id="entry-presentation_swift_trigonometric_complex_rewrites_capability_expression_transformations_expand_power_base_api_expression_operations_expression_expand_power_base"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_expandpowerbase.18638e0afc1d"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func expandPowerBase() -> UniffiExpression
```

Split a power whose base is structurally a product into a product of powers (`(xy)^a -> x^a y^a`) at every power node whose exponent is provably an integer — the only unconditionally valid gate for this direction, since the split introduces `x^a` and `y^a` individually and each needs its own base off the cut. With `n` declared an integer, `(xy)^n` becomes `x^n y^n`.

## expand_trigonometric

<a id="entry-presentation_swift_trigonometric_complex_rewrites_capability_expression_transformations_expand_trigonometric_api_session_expand_trigonometric"></a>
<a id="placement-placement.swift.swift_object.uniffisession_expandtrigonometric.ddeaea8cce53"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func expandTrigonometric(target: UniffiExpression) -> UniffiExpression
```

Expand trig/hyperbolic functions of sums and multiple angles.

## expand_trigonometric

<a id="entry-presentation_swift_trigonometric_complex_rewrites_capability_expression_transformations_expand_trigonometric_api_expression_expand_trigonometric"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_expandtrigonometric.49913e755db6"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func expandTrigonometric() -> UniffiExpression
```

Expand trig/hyperbolic functions of sums and multiple angles.

## expression_type

<a id="entry-presentation_swift_expressions_capability_expression_transformations_expression_type_api_expression_operations_expression_expression_type"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_expressiontype.6d4e11222f3c"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func expressionType() -> String
```

Top-level node kind: one of `integer`, `rational`, `symbol`, `constant`, `sum`, `product`, `power`, `factorial`, `function_call`, `derivative`, `integral`, `summation`, `laplace_transform`, `inverse_laplace_transform`, `fourier_transform`, `inverse_fourier_transform`, `piecewise`, `ordinary_differential_equation`, `recurrence_equation`, `interval`, `finite_set`, `set_union`, `set_intersection`, `set_complement`, `image_set`, `condition_set`.

## factor

<a id="entry-presentation_swift_algebraic_transforms_capability_expression_transformations_factor_api_session_factor"></a>
<a id="placement-placement.swift.swift_object.uniffisession_factor.92c9acc8f887"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func factor(target: UniffiExpression) -> UniffiExpression
```

Polynomial factorization over the rationals (full multivariate).

## factor

<a id="entry-presentation_swift_algebraic_transforms_capability_expression_transformations_factor_api_expression_factor"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_factor.d040ed6cbf42"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func factor() -> UniffiExpression
```

Polynomial factorization over the rationals (full multivariate).

## factor_common_terms

<a id="entry-presentation_swift_algebraic_transforms_capability_expression_transformations_factor_common_terms_api_algebra_session_factor_common_terms"></a>
<a id="placement-placement.swift.swift_object.uniffisession_factorcommonterms.c6dfda75a394"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func factorCommonTerms(inputExpression: UniffiExpression) -> UniffiExpression
```

Pull the greatest common monomial and exact rational content out of the terms of a general — not necessarily polynomial — sum, producing a single product of a common factor and a reduced sum, without invoking full polynomial factorization. For example, `6*x*y + 9*x^2*sin(z)` becomes `3*x*(2*y + 3*x*sin(z))`.

## factor_common_terms

<a id="entry-presentation_swift_algebraic_transforms_capability_expression_transformations_factor_common_terms_api_expression_operations_expression_factor_common_terms"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_factorcommonterms.193b5e9165e5"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func factorCommonTerms() -> UniffiExpression
```

Pull the greatest common monomial and exact rational content out of the terms of a general — not necessarily polynomial — sum, producing a single product of a common factor and a reduced sum, without invoking full polynomial factorization. For example, `6*x*y + 9*x^2*sin(z)` becomes `3*x*(2*y + 3*x*sin(z))`.

## free_variables

<a id="entry-presentation_swift_expressions_capability_expression_transformations_free_variables_api_expression_free_variables"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_freevariables.c72f19c47c45"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func freeVariables() -> [String]
```

Sorted names of the free symbols. Bound binders (integration variables, image-set parameters) are excluded; the constants pi/e are not symbols.

## image_set_domain

<a id="entry-presentation_swift_expressions_capability_expression_transformations_image_set_domain_api_expression_image_set_domain"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_imagesetdomain.8374f5c6ce04"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func imageSetDomain() -> UniffiExpression
```

The domain an `image_set` expression maps over.

## image_set_lambda_expression

<a id="entry-presentation_swift_expressions_capability_expression_transformations_image_set_lambda_expression_api_expression_image_set_lambda_expression"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_imagesetlambdaexpression.e27bb6c7245f"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func imageSetLambdaExpression() -> UniffiExpression
```

The body an `image_set` expression applies to its bound variable.

## image_set_variable

<a id="entry-presentation_swift_expressions_capability_expression_transformations_image_set_variable_api_expression_image_set_variable"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_imagesetvariable.a66e6728ce93"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func imageSetVariable() -> String
```

The name of the variable an `image_set` expression binds.

## imaginary_part

<a id="entry-presentation_swift_trigonometric_complex_rewrites_capability_expression_transformations_imaginary_part_api_session_imaginary_part"></a>
<a id="placement-placement.swift.swift_object.uniffisession_imaginarypart.cb7731527162"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func imaginaryPart(target: UniffiExpression) -> UniffiExpression
```

Return the exact imaginary component of an expression. For example, if `y` is declared real, `imaginary_part(exp(i*y))` is `sin(y)`.

## imaginary_part

<a id="entry-presentation_swift_trigonometric_complex_rewrites_capability_expression_transformations_imaginary_part_api_expression_imaginary_part"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_imaginarypart.53a60ee88b34"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func imaginaryPart() -> UniffiExpression
```

Return the exact imaginary component of an expression. For example, if `y` is declared real, `imaginary_part(exp(i*y))` is `sin(y)`.

## integral_integrand

<a id="entry-presentation_swift_expressions_capability_expression_transformations_integral_integrand_api_expression_integral_integrand"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_integralintegrand.e3eb51b1f253"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func integralIntegrand() -> UniffiExpression
```

The integrand of an unevaluated `integral` expression.

## integral_lower_bound

<a id="entry-presentation_swift_expressions_capability_expression_transformations_integral_lower_bound_api_expression_integral_lower_bound"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_integrallowerbound.4a02d4563d08"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func integralLowerBound() -> UniffiExpression?
```

`None` for indefinite integrals.

## integral_upper_bound

<a id="entry-presentation_swift_expressions_capability_expression_transformations_integral_upper_bound_api_expression_integral_upper_bound"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_integralupperbound.93f83b199f94"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func integralUpperBound() -> UniffiExpression?
```

The upper bound of an unevaluated `integral`, or `None` when it is indefinite.

## integral_variable

<a id="entry-presentation_swift_expressions_capability_expression_transformations_integral_variable_api_expression_integral_variable"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_integralvariable.92a69411221a"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func integralVariable() -> String
```

The name of the variable an unevaluated `integral` integrates over.

## interval_lower

<a id="entry-presentation_swift_expressions_capability_expression_transformations_interval_lower_api_expression_interval_lower"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_intervallower.bf74a308696a"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func intervalLower() -> UniffiExpression
```

Lower endpoint of an interval node; raises on other shapes.

## interval_upper

<a id="entry-presentation_swift_expressions_capability_expression_transformations_interval_upper_api_expression_interval_upper"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_intervalupper.b86ea95a628c"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func intervalUpper() -> UniffiExpression
```

The upper endpoint of an `interval` expression.

## is_defined

<a id="entry-presentation_swift_expressions_capability_expression_transformations_is_defined_api_expression_is_defined"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_isdefined.4ea4bf253e9c"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func isDefined() -> UniffiTruthValue
```

Whether the expression is known to denote one scalar value at the active point.

## is_equality

<a id="entry-presentation_swift_expressions_capability_expression_transformations_is_equality_api_expression_is_equality"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_isequality.e075530f04db"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func isEquality() -> Bool
```

True for `equal(a, b)` relation nodes.

## is_equality

<a id="entry-presentation_swift_expressions_capability_expression_transformations_is_equality_api_matrix_operations_matrix_is_equality"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_isequality.85c001b53f7d"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isEquality() -> Bool
```

Always false: a matrix is never an `equal` relation node.

## is_finite

<a id="entry-presentation_swift_expressions_capability_expression_transformations_is_finite_api_expression_is_finite"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_isfinite.9d786e1474e3"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func isFinite() -> UniffiTruthValue
```

Whether the expression is known finite, or `None` when the assumptions cannot decide it.

## is_finite_set

<a id="entry-presentation_swift_expressions_capability_expression_transformations_is_finite_set_api_expression_is_finite_set"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_isfiniteset.ca548443b525"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func isFiniteSet() -> Bool
```

Whether this expression is a `finite_set`.

## is_finite_set

<a id="entry-presentation_swift_expressions_capability_expression_transformations_is_finite_set_api_matrix_operations_matrix_is_finite_set"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_isfiniteset.0807f84c62b6"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isFiniteSet() -> Bool
```

Always false: a matrix is never a finite set.

## is_image_set

<a id="entry-presentation_swift_expressions_capability_expression_transformations_is_image_set_api_expression_is_image_set"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_isimageset.fc4113f8479d"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func isImageSet() -> Bool
```

Whether this expression is an `image_set`.

## is_image_set

<a id="entry-presentation_swift_expressions_capability_expression_transformations_is_image_set_api_matrix_operations_matrix_is_image_set"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_isimageset.4b16afb2638e"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isImageSet() -> Bool
```

Always false: a matrix is never an image set.

## is_integer

<a id="entry-presentation_swift_expressions_capability_expression_transformations_is_integer_api_expression_is_integer"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_isinteger.c43f8f6a0595"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func isInteger() -> UniffiTruthValue
```

Whether the expression is known to be an integer, or `None` when the assumptions cannot decide it.

## is_integral

<a id="entry-presentation_swift_expressions_capability_expression_transformations_is_integral_api_expression_is_integral"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_isintegral.671569e9a192"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func isIntegral() -> Bool
```

True for unevaluated integral nodes. (Distinct from the assumption query `is_integer`.)

## is_integral

<a id="entry-presentation_swift_expressions_capability_expression_transformations_is_integral_api_matrix_operations_matrix_is_integral"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_isintegral.67259d6cc3c3"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isIntegral() -> Bool
```

Always false: a matrix is never an unevaluated integral node.

## is_interval

<a id="entry-presentation_swift_expressions_capability_expression_transformations_is_interval_api_expression_is_interval"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_isinterval.bca93c4bc4fc"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func isInterval() -> Bool
```

Whether this expression is an `interval`.

## is_matrix

<a id="entry-presentation_swift_expressions_capability_expression_transformations_is_matrix_api_expression_is_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_ismatrix.cd8eb878fdd4"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func isMatrix() -> Bool
```

Always `False` on expressions and `True` on `matrix` objects, so mixed result streams can be discriminated.

## is_matrix

<a id="entry-presentation_swift_expressions_capability_expression_transformations_is_matrix_api_matrix_operations_matrix_is_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_ismatrix.d12275ab42be"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isMatrix() -> Bool
```

Always `False` on expressions and `True` on `matrix` objects, so mixed result streams can be discriminated.

## is_negative

<a id="entry-presentation_swift_expressions_capability_expression_transformations_is_negative_api_expression_is_negative"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_isnegative.de1946398389"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func isNegative() -> UniffiTruthValue
```

Whether the expression is known to be negative, or `None` when the assumptions cannot decide it.

## is_nonnegative

<a id="entry-presentation_swift_expressions_capability_expression_transformations_is_nonnegative_api_expression_is_nonnegative"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_isnonnegative.a617e48ca745"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func isNonnegative() -> UniffiTruthValue
```

Answers whether the expression is nonnegative in the extended-real universe. Non-real values are refuted; unsupported real expressions remain `None`.

## is_nonzero

<a id="entry-presentation_swift_expressions_capability_expression_transformations_is_nonzero_api_expression_is_nonzero"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_isnonzero.55e004c06139"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func isNonzero() -> UniffiTruthValue
```

Whether the expression is known to be nonzero, or `None` when the assumptions cannot decide it.

## is_positive

<a id="entry-presentation_swift_expressions_capability_expression_transformations_is_positive_api_expression_is_positive"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_ispositive.18e0b918f081"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func isPositive() -> UniffiTruthValue
```

Whether the expression is known to be positive, or `None` when the assumptions cannot decide it.

## is_positive

<a id="entry-presentation_swift_expressions_capability_expression_transformations_is_positive_api_matrix_operations_matrix_is_positive"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_ispositive.c44c5cbbbbbf"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isPositive() -> Bool?
```

Always `None`: positivity is a property of the entries, not of the matrix.

## is_rational

<a id="entry-presentation_swift_expressions_capability_expression_transformations_is_rational_api_expression_is_rational"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_isrational.9fda842a2a4f"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func isRational() -> UniffiTruthValue
```

Whether the expression is known to be rational, or `None` when the assumptions cannot decide it.

## is_real

<a id="entry-presentation_swift_expressions_capability_expression_transformations_is_real_api_expression_is_real"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_isreal.f42ff634684d"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func isReal() -> UniffiTruthValue
```

Whether the expression is known to be real, or `None` when the assumptions cannot decide it.

## is_real

<a id="entry-presentation_swift_expressions_capability_expression_transformations_is_real_api_matrix_operations_matrix_is_real"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_isreal.228c4dfae781"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isReal() -> Bool?
```

Always `None`: realness is a property of the entries, not of the matrix.

## is_stale

<a id="entry-presentation_swift_expressions_capability_expression_transformations_is_stale_api_expression_is_stale"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_isstale.c7de0edcfa53"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func isStale() -> Bool
```

Reports whether resetting the owning context invalidated the expression. All other operations reject a stale receiver with an actionable error.

## is_stale

<a id="entry-presentation_swift_expressions_capability_expression_transformations_is_stale_api_geometry_operations_circle2d_is_stale"></a>
<a id="placement-placement.swift.swift_object.unifficircle2d_isstale.197cf4ee1773"></a>
<p class="symi-entry-owner">UniffiCircle2d method</p>

```swift signature
func isStale() -> Bool
```

Reports whether resetting the owning context invalidated the expression. All other operations reject a stale receiver with an actionable error.

## is_stale

<a id="entry-presentation_swift_expressions_capability_expression_transformations_is_stale_api_matrix_is_stale"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_isstale.53cba65746d3"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isStale() -> Bool
```

Reports whether resetting the owning context invalidated the expression. All other operations reject a stale receiver with an actionable error.

## is_stale

<a id="entry-presentation_swift_expressions_capability_expression_transformations_is_stale_api_point2d_is_stale"></a>
<a id="placement-placement.swift.swift_object.uniffipoint2d_isstale.6204e470b4d1"></a>
<p class="symi-entry-owner">UniffiPoint2d method</p>

```swift signature
func isStale() -> Bool
```

Reports whether resetting the owning context invalidated the expression. All other operations reject a stale receiver with an actionable error.

## is_stale

<a id="entry-presentation_swift_expressions_capability_expression_transformations_is_stale_api_geometry_operations_polygon2d_is_stale"></a>
<a id="placement-placement.swift.swift_object.uniffipolygon2d_isstale.3e170f2b6a4b"></a>
<p class="symi-entry-owner">UniffiPolygon2d method</p>

```swift signature
func isStale() -> Bool
```

Reports whether resetting the owning context invalidated the expression. All other operations reject a stale receiver with an actionable error.

## is_stale

<a id="entry-presentation_swift_expressions_capability_expression_transformations_is_stale_api_geometry_operations_segment2d_is_stale"></a>
<a id="placement-placement.swift.swift_object.uniffisegment2d_isstale.aa90766378bc"></a>
<p class="symi-entry-owner">UniffiSegment2d method</p>

```swift signature
func isStale() -> Bool
```

Reports whether resetting the owning context invalidated the expression. All other operations reject a stale receiver with an actionable error.

## is_stale

<a id="entry-presentation_swift_expressions_capability_expression_transformations_is_stale_api_geometry_operations_triangle2d_is_stale"></a>
<a id="placement-placement.swift.swift_object.uniffitriangle2d_isstale.c0b0c4615df5"></a>
<p class="symi-entry-owner">UniffiTriangle2d method</p>

```swift signature
func isStale() -> Bool
```

Reports whether resetting the owning context invalidated the expression. All other operations reject a stale receiver with an actionable error.

## is_union

<a id="entry-presentation_swift_expressions_capability_expression_transformations_is_union_api_expression_is_union"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_isunion.89223c30349c"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func isUnion() -> Bool
```

Whether this expression is a union of sets.

## is_union

<a id="entry-presentation_swift_expressions_capability_expression_transformations_is_union_api_matrix_operations_matrix_is_union"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_isunion.4e9a812714cc"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isUnion() -> Bool
```

Always false: a matrix is never a union of sets.

## negate

<a id="entry-presentation_swift_expressions_capability_expression_transformations_negate_api_expression_negate"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_negate.0f69aa0ddb6c"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func negate() -> UniffiExpression
```

Negation of this expression.

## node_count

<a id="entry-presentation_swift_expressions_capability_expression_transformations_node_count_api_expression_node_count"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_nodecount.fad53b5cf4a4"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func nodeCount() -> UInt64
```

Number of nodes in the expression tree — the size measure used by the simplifier; useful for comparing alternative forms.

## node_count

<a id="entry-presentation_swift_expressions_capability_numeric_definite_integration_node_count_api_results_numericdefiniteintegrationresult_node_count"></a>
<a id="placement-placement.swift.swift_object.uniffinumericdefiniteintegrationresult_nodecount.7cfe01382f21"></a>
<p class="symi-entry-owner">UniffiNumericDefiniteIntegrationResult method</p>

```swift signature
func nodeCount() -> UInt64?
```

The node count of the accepted Gauss--Legendre rule.

## numerator

<a id="entry-presentation_swift_expressions_capability_expression_transformations_numerator_api_session_numerator"></a>
<a id="placement-placement.swift.swift_object.uniffisession_numerator.9f5a074b3246"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func numerator(target: UniffiExpression) -> UniffiExpression
```

Returns the structural numerator from `numerator_denominator`.

## numerator

<a id="entry-presentation_swift_expressions_capability_expression_transformations_numerator_api_expression_numerator"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_numerator.e77eb927a498"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func numerator() -> UniffiExpression
```

Returns the structural numerator from `numerator_denominator`.

## numerator_denominator

<a id="entry-presentation_swift_expressions_capability_expression_transformations_numerator_denominator_api_session_numerator_denominator"></a>
<a id="placement-placement.swift.swift_object.uniffisession_numeratordenominator.be999967dfa0"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func numeratorDenominator(target: UniffiExpression) -> UniffiExpressionExpressionTuple
```

Returns the exact structural numerator and denominator without combining sums or cancelling factors. Python returns a two-tuple and the JavaScript facade returns a record.

## numerator_denominator

<a id="entry-presentation_swift_expressions_capability_expression_transformations_numerator_denominator_api_expression_numerator_denominator"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_numeratordenominator.196fddc48c58"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func numeratorDenominator() -> UniffiExpressionExpressionTuple
```

Returns the exact structural numerator and denominator without combining sums or cancelling factors. Python returns a two-tuple and the JavaScript facade returns a record.

## partial_fractions

<a id="entry-presentation_swift_algebraic_transforms_capability_expression_transformations_partial_fractions_api_algebra_session_partial_fractions"></a>
<a id="placement-placement.swift.swift_object.uniffisession_partialfractions.a7050c197af0"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func partialFractions(
    inputExpression: UniffiExpression,
    variable: String,
) -> UniffiExpression
```

Decompose a rational expression into polynomial and proper-fraction terms over the named variable.

## partial_fractions

<a id="entry-presentation_swift_algebraic_transforms_capability_expression_transformations_partial_fractions_api_expression_operations_expression_partial_fractions"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_partialfractions.ef670b01ea84"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func partialFractions(variable: String) -> UniffiExpression
```

Decompose a rational expression into polynomial and proper-fraction terms over the named variable.

## piecewise_fold

<a id="entry-presentation_swift_specialized_canonical_forms_capability_expression_transformations_piecewise_fold_api_solving_session_piecewise_fold"></a>
<a id="placement-placement.swift.swift_object.uniffisession_piecewisefold.ad7f0c837ae1"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func piecewiseFold(inputExpression: UniffiExpression) -> UniffiExpression
```

Expand `abs`, `signum`, and `heaviside_step` definitions recursively and fold piecewise operands of sums, products, powers, factorials, and ordinary function calls into one top-level piecewise expression. For example, `x*abs(x - 1)` becomes the exact two-branch definition with values `x*(x - 1)` and `-x*(x - 1)`.

## piecewise_fold

<a id="entry-presentation_swift_specialized_canonical_forms_capability_expression_transformations_piecewise_fold_api_expression_operations_expression_piecewise_fold"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_piecewisefold.0c8ba9c78761"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func piecewiseFold() -> UniffiExpression
```

Expand `abs`, `signum`, and `heaviside_step` definitions recursively and fold piecewise operands of sums, products, powers, factorials, and ordinary function calls into one top-level piecewise expression. For example, `x*abs(x - 1)` becomes the exact two-branch definition with values `x*(x - 1)` and `-x*(x - 1)`.

## power

<a id="entry-presentation_swift_expressions_capability_expression_transformations_power_api_expression_power"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_power.a5bba90b9b09"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func power(exponent: UniffiExpression) -> UniffiExpression
```

This expression raised to `exponent`.

## presentation_normal_form

<a id="entry-presentation_swift_specialized_canonical_forms_capability_expression_transformations_presentation_normal_form_api_algebra_session_presentation_normal_form"></a>
<a id="placement-placement.swift.swift_object.uniffisession_presentationnormalform.ba6e3a1e8f5c"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func presentationNormalForm(inputExpression: UniffiExpression) -> UniffiExpression
```

The cheap, bounded display-oriented pass run at solver output seams: rational normal form only, kept only when the weighted complexity does not grow. Unlike `simplify` it never runs the full heuristic ladder, so it is fast and deterministic in shape.

## presentation_normal_form

<a id="entry-presentation_swift_specialized_canonical_forms_capability_expression_transformations_presentation_normal_form_api_expression_operations_expression_presentation_normal_form"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_presentationnormalform.bd719e9b0743"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func presentationNormalForm() -> UniffiExpression
```

The cheap, bounded display-oriented pass run at solver output seams: rational normal form only, kept only when the weighted complexity does not grow. Unlike `simplify` it never runs the full heuristic ladder, so it is fast and deterministic in shape.

## rationalize_denominator

<a id="entry-presentation_swift_algebraic_transforms_capability_expression_transformations_rationalize_denominator_api_algebra_session_rationalize_denominator"></a>
<a id="placement-placement.swift.swift_object.uniffisession_rationalizedenominator.6701348299e5"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func rationalizeDenominator(inputExpression: UniffiExpression) -> UniffiExpression
```

Rationalize a radical denominator through exact multiquadratic conjugation or extended-Euclidean inversion in one rational n-th-root extension. For example, `1 / (sqrt(3) - sqrt(2))` becomes `sqrt(3) + sqrt(2)`, and `1 / (1 + 2^(1/3))` becomes `(1 - 2^(1/3) + 2^(2/3))/3`.

## rationalize_denominator

<a id="entry-presentation_swift_algebraic_transforms_capability_expression_transformations_rationalize_denominator_api_expression_operations_expression_rationalize_denominator"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_rationalizedenominator.4bc227a3475e"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func rationalizeDenominator() -> UniffiExpression
```

Rationalize a radical denominator through exact multiquadratic conjugation or extended-Euclidean inversion in one rational n-th-root extension. For example, `1 / (sqrt(3) - sqrt(2))` becomes `sqrt(3) + sqrt(2)`, and `1 / (1 + 2^(1/3))` becomes `(1 - 2^(1/3) + 2^(2/3))/3`.

## real_part

<a id="entry-presentation_swift_trigonometric_complex_rewrites_capability_expression_transformations_real_part_api_session_real_part"></a>
<a id="placement-placement.swift.swift_object.uniffisession_realpart.5f1a5e54e6b6"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func realPart(target: UniffiExpression) -> UniffiExpression
```

Return the exact real component of an expression. For example, if `y` is declared real, `real_part(exp(i*y))` is `cos(y)`.

## real_part

<a id="entry-presentation_swift_trigonometric_complex_rewrites_capability_expression_transformations_real_part_api_expression_real_part"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_realpart.ba36a259050e"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func realPart() -> UniffiExpression
```

Return the exact real component of an expression. For example, if `y` is declared real, `real_part(exp(i*y))` is `cos(y)`.

## rewrite_as_exponential

<a id="entry-presentation_swift_trigonometric_complex_rewrites_capability_expression_transformations_rewrite_as_exponential_api_algebra_session_rewrite_as_exponential"></a>
<a id="placement-placement.swift.swift_object.uniffisession_rewriteasexponential.7f6c80832b9d"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func rewriteAsExponential(inputExpression: UniffiExpression) -> UniffiExpression
```

Euler-form rewriter: replace every trigonometric/hyperbolic call with the equivalent complex-exponential expression (bottom-up).

## rewrite_as_exponential

<a id="entry-presentation_swift_trigonometric_complex_rewrites_capability_expression_transformations_rewrite_as_exponential_api_expression_operations_expression_rewrite_as_exponential"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_rewriteasexponential.63699520e6e6"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func rewriteAsExponential() -> UniffiExpression
```

Euler-form rewriter: replace every trigonometric/hyperbolic call with the equivalent complex-exponential expression (bottom-up).

## rewrite_as_trigonometric

<a id="entry-presentation_swift_trigonometric_complex_rewrites_capability_expression_transformations_rewrite_as_trigonometric_api_algebra_session_rewrite_as_trigonometric"></a>
<a id="placement-placement.swift.swift_object.uniffisession_rewriteastrigonometric.a7e77f830197"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func rewriteAsTrigonometric(inputExpression: UniffiExpression) -> UniffiExpression
```

Inverse of `rewrite_as_exponential`.

## rewrite_as_trigonometric

<a id="entry-presentation_swift_trigonometric_complex_rewrites_capability_expression_transformations_rewrite_as_trigonometric_api_expression_operations_expression_rewrite_as_trigonometric"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_rewriteastrigonometric.8c5e139dc49d"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func rewriteAsTrigonometric() -> UniffiExpression
```

Inverse of `rewrite_as_exponential`.

## rewrite_in_terms_of

<a id="entry-presentation_swift_expressions_capability_expression_transformations_rewrite_in_terms_of_api_algebra_session_rewrite_in_terms_of"></a>
<a id="placement-placement.swift.swift_object.uniffisession_rewriteintermsof.9748be3ce393"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func rewriteInTermsOf(
    target: UniffiExpression,
    source: UniffiExpression,
    replacement: UniffiExpression,
) -> UniffiExpression
```

Rewrite the target in terms of `replacement` under the caller-supplied formal relation `replacement = source`.

## rewrite_in_terms_of

<a id="entry-presentation_swift_expressions_capability_expression_transformations_rewrite_in_terms_of_api_expression_operations_expression_rewrite_in_terms_of"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_rewriteintermsof.142547bbdf71"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func rewriteInTermsOf(
    source: UniffiExpression,
    replacement: UniffiExpression,
) -> UniffiExpression
```

Rewrite the target in terms of `replacement` under the caller-supplied formal relation `replacement = source`.

## rewrite_special_functions

<a id="entry-presentation_swift_specialized_canonical_forms_capability_expression_transformations_rewrite_special_functions_api_session_rewrite_special_functions"></a>
<a id="placement-placement.swift.swift_object.uniffisession_rewritespecialfunctions.a5cfcdf7d801"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func rewriteSpecialFunctions(
    target: UniffiExpression,
    basis: UniffiSpecialFunctionBasis,
) -> UniffiExpression
```

Rewrite beta, gamma, binomial, factorial, and rising-factorial representations into the requested `"gamma"`, `"factorial"`, `"binomial"`, or `"rising_factorial"` basis. The exact identities are applied only when their domain gates are proven: factorial and binomial conversions require the relevant non-negative integers, rising-factorial conversions additionally require a positive base, and beta-to-gamma requires two positive arguments. For example, with `n` declared a positive integer, `n!` may be rewritten into the gamma basis and `gamma(n)` into the factorial basis. A site with unconstrained arguments is returned unchanged. Gamma ratios with a literal non-negative argument offset are minimized to their exact shifted product.

## rewrite_special_functions

<a id="entry-presentation_swift_specialized_canonical_forms_capability_expression_transformations_rewrite_special_functions_api_expression_rewrite_special_functions"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_rewritespecialfunctions.3d399f43f7ae"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func rewriteSpecialFunctions(basis: UniffiSpecialFunctionBasis) -> UniffiExpression
```

Rewrite beta, gamma, binomial, factorial, and rising-factorial representations into the requested `"gamma"`, `"factorial"`, `"binomial"`, or `"rising_factorial"` basis. The exact identities are applied only when their domain gates are proven: factorial and binomial conversions require the relevant non-negative integers, rising-factorial conversions additionally require a positive base, and beta-to-gamma requires two positive arguments. For example, with `n` declared a positive integer, `n!` may be rewritten into the gamma basis and `gamma(n)` into the factorial basis. A site with unconstrained arguments is returned unchanged. Gamma ratios with a literal non-negative argument offset are minimized to their exact shifted product.

## rewrite_trigonometric_basis

<a id="entry-presentation_swift_trigonometric_complex_rewrites_capability_expression_transformations_rewrite_trigonometric_basis_api_session_rewrite_trigonometric_basis"></a>
<a id="placement-placement.swift.swift_object.uniffisession_rewritetrigonometricbasis.a113505204d1"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func rewriteTrigonometricBasis(
    target: UniffiExpression,
    basis: UniffiTrigonometricBasis,
) -> UniffiExpression
```

Rewrite trigonometric and hyperbolic calls toward one of five named bases: `sine_cosine`, `tangent`, `exponential`, `trigonometric`, or `hyperbolic`.

## rewrite_trigonometric_basis

<a id="entry-presentation_swift_trigonometric_complex_rewrites_capability_expression_transformations_rewrite_trigonometric_basis_api_expression_rewrite_trigonometric_basis"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_rewritetrigonometricbasis.1e0cbfd99f8f"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func rewriteTrigonometricBasis(basis: UniffiTrigonometricBasis) -> UniffiExpression
```

Rewrite trigonometric and hyperbolic calls toward one of five named bases: `sine_cosine`, `tangent`, `exponential`, `trigonometric`, or `hyperbolic`.

## simplify

<a id="entry-presentation_swift_simplification_general_capability_expression_transformations_simplify_api_session_simplify"></a>
<a id="placement-placement.swift.swift_object.uniffisession_simplify.809faad16187"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func simplify(target: UniffiExpression) -> UniffiExpression
```

The full heuristic simplification ladder: weighted-complexity-guided search over rational normal form, radical denesting, trigonometric/log rewrites, parity and absolute-value rules. The result is never accepted if its weighted complexity grows. Principal square roots extract structural square content only under a realness proof: `sqrt(x^2)` becomes `abs(x)` for real `x`, while `sqrt(z^2)` remains unchanged for a default-complex `z`.

## simplify

<a id="entry-presentation_swift_simplification_general_capability_expression_transformations_simplify_api_expression_simplify"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_simplify.981c0cc8505d"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func simplify() -> UniffiExpression
```

The full heuristic simplification ladder: weighted-complexity-guided search over rational normal form, radical denesting, trigonometric/log rewrites, parity and absolute-value rules. The result is never accepted if its weighted complexity grows. Principal square roots extract structural square content only under a realness proof: `sqrt(x^2)` becomes `abs(x)` for real `x`, while `sqrt(z^2)` remains unchanged for a default-complex `z`.

## simplify

<a id="entry-presentation_swift_simplification_general_capability_expression_transformations_simplify_api_assumptionscope_simplify"></a>
<a id="placement-placement.swift.swift_object.uniffiassumptionscope_simplify.7723216756b6"></a>
<p class="symi-entry-owner">UniffiAssumptionScope method</p>

```swift signature
func simplify(target: UniffiExpression) -> UniffiExpression
```

Simplify an expression using the scope's immutable assumptions.

## simplify_trigonometric

<a id="entry-presentation_swift_trigonometric_complex_rewrites_capability_expression_transformations_simplify_trigonometric_api_session_simplify_trigonometric"></a>
<a id="placement-placement.swift.swift_object.uniffisession_simplifytrigonometric.7e8037005fde"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func simplifyTrigonometric(target: UniffiExpression) -> UniffiExpression
```

Fu-style trigonometric simplification toward fewer/cheaper trig calls.

## simplify_trigonometric

<a id="entry-presentation_swift_trigonometric_complex_rewrites_capability_expression_transformations_simplify_trigonometric_api_expression_simplify_trigonometric"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_simplifytrigonometric.9aaf2cdb41e2"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func simplifyTrigonometric() -> UniffiExpression
```

Fu-style trigonometric simplification toward fewer/cheaper trig calls.

## substitute

<a id="entry-presentation_swift_expressions_capability_expression_transformations_substitute_api_expression_substitute"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_substitute.512aa017763a"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func substitute(
    variable: UniffiExpression,
    value: UniffiExpression,
) -> UniffiExpression
```

Replace every free occurrence of the named symbol with `value`, re-running auto-simplification.

## symbol_name

<a id="entry-presentation_swift_expressions_capability_expression_transformations_symbol_name_api_expression_symbol_name"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_symbolname.93adace4b937"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func symbolName() -> String
```

Returns the name of a symbol expression and rejects every other expression kind.

## to_list

<a id="entry-presentation_swift_expressions_capability_expression_transformations_to_list_api_expression_to_list"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_tolist.fb9651785a68"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func toList() -> [UniffiExpression]
```

Elements of a finite set; raises on other shapes. Python finite sets also support `len()` and iteration.

## together

<a id="entry-presentation_swift_simplification_general_capability_expression_transformations_together_api_session_together"></a>
<a id="placement-placement.swift.swift_object.uniffisession_together.2e844db94287"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func together(target: UniffiExpression) -> UniffiExpression
```

Combine a sum of fractions over a common denominator. On Symi's representation `together` and `cancel` coincide; both names exist because they are distinct user intents.

## together

<a id="entry-presentation_swift_simplification_general_capability_expression_transformations_together_api_expression_together"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_together.3d006fc5c43a"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func together() -> UniffiExpression
```

Combine a sum of fractions over a common denominator. On Symi's representation `together` and `cancel` coincide; both names exist because they are distinct user intents.

## union_components

<a id="entry-presentation_swift_expressions_capability_expression_transformations_union_components_api_expression_union_components"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_unioncomponents.13d127c4cffa"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func unionComponents() -> [UniffiExpression]
```

The components of a set union, as a list of expressions.

## angle

<a id="entry-presentation_swift_geometry_capability_geometry_angle_api_results_vertexangle_angle"></a>
<a id="placement-placement.swift.swift_object.uniffivertexangle_angle.e1a0c8f03fdf"></a>
<p class="symi-entry-owner">UniffiVertexAngle method</p>

```swift signature
func angle() -> UniffiExpression
```

The interior angle at the vertex.

## area

<a id="entry-presentation_swift_geometry_capability_geometry_area_api_circle2d_area"></a>
<a id="placement-placement.swift.swift_object.unifficircle2d_area.4db07d536230"></a>
<p class="symi-entry-owner">UniffiCircle2d method</p>

```swift signature
func area() -> UniffiExpression
```

Area of the circle, \(\pi r^2\).

## area

<a id="entry-presentation_swift_geometry_capability_geometry_area_api_polygon2d_area"></a>
<a id="placement-placement.swift.swift_object.uniffipolygon2d_area.032aa3c0b868"></a>
<p class="symi-entry-owner">UniffiPolygon2d method</p>

```swift signature
func area() -> UniffiExpression
```

Shoelace area of the polygon.

## area

<a id="entry-presentation_swift_geometry_capability_geometry_area_api_triangle2d_area"></a>
<a id="placement-placement.swift.swift_object.uniffitriangle2d_area.cd5b24d6194a"></a>
<p class="symi-entry-owner">UniffiTriangle2d method</p>

```swift signature
func area() -> UniffiExpression
```

Shoelace area of the triangle.

## center

<a id="entry-presentation_swift_geometry_capability_geometry_center_api_circle2d_center"></a>
<a id="placement-placement.swift.swift_object.unifficircle2d_center.9333ca418819"></a>
<p class="symi-entry-owner">UniffiCircle2d method</p>

```swift signature
func center() -> UniffiPoint2d
```

The center of the circle.

## centroid

<a id="entry-presentation_swift_geometry_capability_geometry_centroid_api_polygon2d_centroid"></a>
<a id="placement-placement.swift.swift_object.uniffipolygon2d_centroid.32c4cf63dc46"></a>
<p class="symi-entry-owner">UniffiPolygon2d method</p>

```swift signature
func centroid() -> UniffiPoint2d
```

Centroid of the polygon's vertices.

## centroid

<a id="entry-presentation_swift_geometry_capability_geometry_centroid_api_geometry_operations_triangle2d_centroid"></a>
<a id="placement-placement.swift.swift_object.uniffitriangle2d_centroid.96b8698ac325"></a>
<p class="symi-entry-owner">UniffiTriangle2d method</p>

```swift signature
func centroid() -> UniffiPoint2d
```

Centroid of the triangle's vertices.

## circle_2d

<a id="entry-presentation_swift_geometry_capability_geometry_circle_2d_api_session_circle_2d"></a>
<a id="placement-placement.swift.swift_object.uniffisession_circle2d.7ad6661b3c5f"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func circle2d(
    center: UniffiPoint2d,
    radius: UniffiExpression,
) -> UniffiCircle2d
```

Construct the circle with the given center and radius.

## circumference

<a id="entry-presentation_swift_geometry_capability_geometry_circumference_api_circle2d_circumference"></a>
<a id="placement-placement.swift.swift_object.unifficircle2d_circumference.256d4f26d4a3"></a>
<p class="symi-entry-owner">UniffiCircle2d method</p>

```swift signature
func circumference() -> UniffiExpression
```

Circumference of the circle.

## coordinates

<a id="entry-presentation_swift_geometry_capability_geometry_coordinates_api_point2d_coordinates"></a>
<a id="placement-placement.swift.swift_object.uniffipoint2d_coordinates.f5db58b8ad15"></a>
<p class="symi-entry-owner">UniffiPoint2d method</p>

```swift signature
func coordinates() -> UniffiExpressionExpressionTuple
```

The `(x, y)` coordinate pair of the point.

## distance_to

<a id="entry-presentation_swift_geometry_capability_geometry_distance_to_api_point2d_distance_to"></a>
<a id="placement-placement.swift.swift_object.uniffipoint2d_distanceto.6761c5ee2620"></a>
<p class="symi-entry-owner">UniffiPoint2d method</p>

```swift signature
func distanceTo(other: UniffiPoint2d) -> UniffiExpression
```

Euclidean distance, exact (a `sqrt` expression in general).

## equation

<a id="entry-presentation_swift_geometry_capability_geometry_equation_api_geometry_operations_circle2d_equation"></a>
<a id="placement-placement.swift.swift_object.unifficircle2d_equation.a3c977955091"></a>
<p class="symi-entry-owner">UniffiCircle2d method</p>

```swift signature
func equation(variableX: String, variableY: String) -> UniffiExpression
```

The circle as an `equal` relation in x and y.

## equation

<a id="entry-presentation_swift_geometry_capability_geometry_equation_api_partial_differential_equations_partialdifferentialequationproblem_equation"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationproblem_equation.ec9c58168b92"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationProblem method</p>

```swift signature
func equation() -> UniffiExpression
```

The governing residual, interpreted as equal to zero.

## interior_angles

<a id="entry-presentation_swift_geometry_capability_geometry_interior_angles_api_geometry_operations_polygon2d_interior_angles"></a>
<a id="placement-placement.swift.swift_object.uniffipolygon2d_interiorangles.aa84c2fad989"></a>
<p class="symi-entry-owner">UniffiPolygon2d method</p>

```swift signature
func interiorAngles() -> [UniffiVertexAngle]
```

Each vertex paired with its interior angle. Notes: WASM returns `vertex_angle` objects with `vertex`/`angle` getters.

## interior_angles

<a id="entry-presentation_swift_geometry_capability_geometry_interior_angles_api_geometry_operations_triangle2d_interior_angles"></a>
<a id="placement-placement.swift.swift_object.uniffitriangle2d_interiorangles.9b867172f544"></a>
<p class="symi-entry-owner">UniffiTriangle2d method</p>

```swift signature
func interiorAngles() -> [UniffiVertexAngle]
```

Each vertex paired with its interior angle. Notes: WASM returns `vertex_angle` objects with `vertex`/`angle` getters.

## intersection

<a id="entry-presentation_swift_geometry_capability_geometry_intersection_api_circle2d_intersection"></a>
<a id="placement-placement.swift.swift_object.unifficircle2d_intersection.4e76d8e58778"></a>
<p class="symi-entry-owner">UniffiCircle2d method</p>

```swift signature
func intersection(other: UniffiGeometry2d) -> [UniffiGeometryIntersectionComponent]
```

Return the complete exact boundary intersection with another supported plane geometry.

## intersection

<a id="entry-presentation_swift_geometry_capability_geometry_intersection_api_point2d_intersection"></a>
<a id="placement-placement.swift.swift_object.uniffipoint2d_intersection.5db7c2c61e0b"></a>
<p class="symi-entry-owner">UniffiPoint2d method</p>

```swift signature
func intersection(other: UniffiGeometry2d) -> [UniffiGeometryIntersectionComponent]
```

Return the complete exact boundary intersection with another supported plane geometry.

## intersection

<a id="entry-presentation_swift_geometry_capability_geometry_intersection_api_polygon2d_intersection"></a>
<a id="placement-placement.swift.swift_object.uniffipolygon2d_intersection.6690e8cb9d3d"></a>
<p class="symi-entry-owner">UniffiPolygon2d method</p>

```swift signature
func intersection(other: UniffiGeometry2d) -> [UniffiGeometryIntersectionComponent]
```

Return the complete exact boundary intersection with another supported plane geometry.

## intersection

<a id="entry-presentation_swift_geometry_capability_geometry_intersection_api_segment2d_intersection"></a>
<a id="placement-placement.swift.swift_object.uniffisegment2d_intersection.884f766e8f08"></a>
<p class="symi-entry-owner">UniffiSegment2d method</p>

```swift signature
func intersection(other: UniffiGeometry2d) -> [UniffiGeometryIntersectionComponent]
```

Return the complete exact boundary intersection with another supported plane geometry.

## intersection

<a id="entry-presentation_swift_geometry_capability_geometry_intersection_api_triangle2d_intersection"></a>
<a id="placement-placement.swift.swift_object.uniffitriangle2d_intersection.dc34220764fe"></a>
<p class="symi-entry-owner">UniffiTriangle2d method</p>

```swift signature
func intersection(other: UniffiGeometry2d) -> [UniffiGeometryIntersectionComponent]
```

Return the complete exact boundary intersection with another supported plane geometry.

## midpoint

<a id="entry-presentation_swift_geometry_capability_geometry_midpoint_api_segment2d_midpoint"></a>
<a id="placement-placement.swift.swift_object.uniffisegment2d_midpoint.f047888a4b6b"></a>
<p class="symi-entry-owner">UniffiSegment2d method</p>

```swift signature
func midpoint() -> UniffiPoint2d
```

Midpoint of the segment.

## perimeter

<a id="entry-presentation_swift_geometry_capability_geometry_perimeter_api_polygon2d_perimeter"></a>
<a id="placement-placement.swift.swift_object.uniffipolygon2d_perimeter.58be7a3d3af3"></a>
<p class="symi-entry-owner">UniffiPolygon2d method</p>

```swift signature
func perimeter() -> UniffiExpression
```

Perimeter of the polygon, the sum of its edge lengths.

## perimeter

<a id="entry-presentation_swift_geometry_capability_geometry_perimeter_api_triangle2d_perimeter"></a>
<a id="placement-placement.swift.swift_object.uniffitriangle2d_perimeter.fdd4770c89cf"></a>
<p class="symi-entry-owner">UniffiTriangle2d method</p>

```swift signature
func perimeter() -> UniffiExpression
```

Perimeter of the triangle, the sum of its side lengths.

## perpendicular_bisector_equation

<a id="entry-presentation_swift_geometry_capability_geometry_perpendicular_bisector_equation_api_geometry_operations_segment2d_perpendicular_bisector_equation"></a>
<a id="placement-placement.swift.swift_object.uniffisegment2d_perpendicularbisectorequation.3df29bde8f4d"></a>
<p class="symi-entry-owner">UniffiSegment2d method</p>

```swift signature
func perpendicularBisectorEquation(
    variableX: String,
    variableY: String,
) -> UniffiExpression
```

The bisector line as an `equal` relation in x and y.

## point_2d

<a id="entry-presentation_swift_geometry_capability_geometry_point_2d_api_session_point_2d"></a>
<a id="placement-placement.swift.swift_object.uniffisession_point2d.429601595489"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func point2d(
    coordinateX: UniffiExpression,
    coordinateY: UniffiExpression,
) -> UniffiPoint2d
```

Construct the point `(x, y)`.

## polygon_2d

<a id="entry-presentation_swift_geometry_capability_geometry_polygon_2d_api_session_polygon_2d"></a>
<a id="placement-placement.swift.swift_object.uniffisession_polygon2d.1ac41d341131"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func polygon2d(vertices: [UniffiPoint2d]) -> UniffiPolygon2d
```

Simple polygon from its vertex list in order; degenerate inputs raise.

## radius

<a id="entry-presentation_swift_geometry_capability_geometry_radius_api_circle2d_radius"></a>
<a id="placement-placement.swift.swift_object.unifficircle2d_radius.330a91d8d4dc"></a>
<p class="symi-entry-owner">UniffiCircle2d method</p>

```swift signature
func radius() -> UniffiExpression
```

The radius of the circle.

## segment_2d

<a id="entry-presentation_swift_geometry_capability_geometry_segment_2d_api_session_segment_2d"></a>
<a id="placement-placement.swift.swift_object.uniffisession_segment2d.746a17d01409"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func segment2d(
    start: UniffiPoint2d,
    end: UniffiPoint2d,
) -> UniffiSegment2d
```

Construct the segment running from `start` to `end`.

## triangle_2d

<a id="entry-presentation_swift_geometry_capability_geometry_triangle_2d_api_session_triangle_2d"></a>
<a id="placement-placement.swift.swift_object.uniffisession_triangle2d.12422bd9a32e"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func triangle2d(
    first: UniffiPoint2d,
    second: UniffiPoint2d,
    third: UniffiPoint2d,
) -> UniffiTriangle2d
```

Collinear vertices raise.

## vertex

<a id="entry-presentation_swift_geometry_capability_geometry_vertex_api_results_vertexangle_vertex"></a>
<a id="placement-placement.swift.swift_object.uniffivertexangle_vertex.77d6f6c98bb9"></a>
<p class="symi-entry-owner">UniffiVertexAngle method</p>

```swift signature
func vertex() -> UniffiPoint2d
```

The vertex the angle is measured at.

## x

<a id="entry-presentation_swift_geometry_capability_geometry_x_api_point2d_x"></a>
<a id="placement-placement.swift.swift_object.uniffipoint2d_x.e4b7e4083adf"></a>
<p class="symi-entry-owner">UniffiPoint2d method</p>

```swift signature
func x() -> UniffiExpression
```

The x coordinate of the point.

## y

<a id="entry-presentation_swift_geometry_capability_geometry_y_api_point2d_y"></a>
<a id="placement-placement.swift.swift_object.uniffipoint2d_y.4e32112a02e0"></a>
<p class="symi-entry-owner">UniffiPoint2d method</p>

```swift signature
func y() -> UniffiExpression
```

The y coordinate of the point.

## estimated_absolute_error

<a id="entry-presentation_swift_api_reference_capability_numeric_definite_integration_estimated_absolute_error_api_results_numericdefiniteintegrationresult_estimated_absolute_error"></a>
<a id="placement-placement.swift.swift_object.uniffinumericdefiniteintegrationresult_estimatedabsoluteerror.fa20c4320234"></a>
<p class="symi-entry-owner">UniffiNumericDefiniteIntegrationResult method</p>

```swift signature
func estimatedAbsoluteError() -> Double?
```

The final difference between successive quadrature rules.

## precision_bits

<a id="entry-presentation_swift_api_reference_capability_numeric_definite_integration_precision_bits_api_results_numericdefiniteintegrationresult_precision_bits"></a>
<a id="placement-placement.swift.swift_object.uniffinumericdefiniteintegrationresult_precisionbits.e4d43a5a94f3"></a>
<p class="symi-entry-owner">UniffiNumericDefiniteIntegrationResult method</p>

```swift signature
func precisionBits() -> UInt64?
```

The arithmetic precision used for the result.

## value

<a id="entry-presentation_swift_api_reference_capability_numeric_definite_integration_value_api_results_numericdefiniteintegrationresult_value"></a>
<a id="placement-placement.swift.swift_object.uniffinumericdefiniteintegrationresult_value.394895eca044"></a>
<p class="symi-entry-owner">UniffiNumericDefiniteIntegrationResult method</p>

```swift signature
func value() -> UniffiFloatingPointFloatingPointTuple?
```

The complex value as real and imaginary components, when convergence was established.

## characteristic_function

<a id="entry-presentation_swift_statistics_capability_probability_characteristic_function_api_probability_session_characteristic_function"></a>
<a id="placement-placement.swift.swift_object.uniffisession_characteristicfunction.1fb4c7e2a146"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func characteristicFunction(
    randomVariable: UniffiExpression,
    auxiliaryVariable: String,
) -> UniffiExpression
```

Closed-form characteristic function \(\varphi_X(t)\) of `random_variable` in the named auxiliary variable, when elementary; otherwise an unevaluated structural form.

## covariance

<a id="entry-presentation_swift_statistics_capability_probability_covariance_api_probability_session_covariance"></a>
<a id="placement-placement.swift.swift_object.uniffisession_covariance.f5db046933dc"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func covariance(
    left: UniffiExpression,
    right: UniffiExpression,
    randomVariables: [UniffiExpression],
) -> UniffiExpression
```

Covariance of `left` and `right` over the listed independent random variables; zero for independent operands.

## cumulant

<a id="entry-presentation_swift_statistics_capability_probability_cumulant_api_probability_session_cumulant"></a>
<a id="placement-placement.swift.swift_object.uniffisession_cumulant.ba585e9987db"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func cumulant(
    randomVariable: UniffiExpression,
    order: UniffiExpression,
) -> UniffiExpression
```

The `order`-th cumulant of `random_variable`.

## cumulative_distribution

<a id="entry-presentation_swift_statistics_capability_probability_cumulative_distribution_api_probability_session_cumulative_distribution"></a>
<a id="placement-placement.swift.swift_object.uniffisession_cumulativedistribution.8a99f24af11e"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func cumulativeDistribution(
    randomVariable: UniffiExpression,
    point: UniffiExpression,
) -> UniffiExpression
```

Cumulative distribution function of `random_variable` evaluated at `point`.

## density

<a id="entry-presentation_swift_statistics_capability_probability_density_api_probability_session_density"></a>
<a id="placement-placement.swift.swift_object.uniffisession_density.0031b4533fa5"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func density(
    randomVariable: UniffiExpression,
    point: UniffiExpression,
) -> UniffiExpression
```

Probability density (continuous families) or probability mass (discrete families) of `random_variable` evaluated at `point`.

## distribution

<a id="entry-presentation_swift_statistics_capability_probability_distribution_api_probability_session_distribution"></a>
<a id="placement-placement.swift.swift_object.uniffisession_distribution.aef0037ef8c7"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func distribution(
    name: String,
    parameters: [UniffiExpression],
) -> UniffiExpression
```

Build a distribution node from a family name and its ordered parameter list (e.g. `distribution("normal", [mean, standard_deviation])`).

## expectation

<a id="entry-presentation_swift_statistics_capability_probability_expectation_api_probability_session_expectation"></a>
<a id="placement-placement.swift.swift_object.uniffisession_expectation.c3eb386bf012"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func expectation(
    target: UniffiExpression,
    randomVariables: [UniffiExpression],
) -> UniffiExpression
```

Expectation of `target` over the listed independent random variables. Linearity and the constant-factor lift are applied; bare and power-of-random-variable leaves consume the distribution's mean and raw moments.

## moment

<a id="entry-presentation_swift_statistics_capability_probability_moment_api_probability_session_moment"></a>
<a id="placement-placement.swift.swift_object.uniffisession_moment.f2180be3a028"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func moment(
    randomVariable: UniffiExpression,
    order: UniffiExpression,
) -> UniffiExpression
```

The `order`-th raw moment `E[X^order]` of `random_variable`.

## moment_generating_function

<a id="entry-presentation_swift_statistics_capability_probability_moment_generating_function_api_probability_session_moment_generating_function"></a>
<a id="placement-placement.swift.swift_object.uniffisession_momentgeneratingfunction.9f389e3f99af"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func momentGeneratingFunction(
    randomVariable: UniffiExpression,
    auxiliaryVariable: String,
) -> UniffiExpression
```

Closed-form moment generating function `M_X(t)` of `random_variable` in the named auxiliary variable, when elementary; otherwise an unevaluated structural form.

## probability

<a id="entry-presentation_swift_statistics_capability_probability_probability_api_probability_session_probability"></a>
<a id="placement-placement.swift.swift_object.uniffisession_probability.61449e6a041e"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func probability(
    predicate: UniffiExpression,
    randomVariables: [UniffiExpression],
) -> UniffiExpression
```

Probability that `predicate` (a tail comparison such as `X > t`) holds over the listed independent random variables.

## random_variable

<a id="entry-presentation_swift_statistics_capability_probability_random_variable_api_probability_session_random_variable"></a>
<a id="placement-placement.swift.swift_object.uniffisession_randomvariable.96a5db7056ac"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func randomVariable(
    name: String,
    distribution: UniffiExpression,
) -> UniffiExpression
```

Build a random variable named `name` drawn from `distribution`.

## variance

<a id="entry-presentation_swift_statistics_capability_probability_variance_api_probability_session_variance"></a>
<a id="placement-placement.swift.swift_object.uniffisession_variance.175852baf981"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func variance(
    target: UniffiExpression,
    randomVariables: [UniffiExpression],
) -> UniffiExpression
```

Variance of `target` over the listed independent random variables.

## beta

<a id="entry-presentation_swift_special_functions_capability_special_functions_beta_api_session_beta"></a>
<a id="placement-placement.swift.swift_object.uniffisession_beta.40c50c0fa055"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func beta(
    left: UniffiExpression,
    right: UniffiExpression,
) -> UniffiExpression
```

The beta function \(\operatorname{B}(x, y) = \Gamma(x)\Gamma(y)/\Gamma(x+y)\).

## carlson_rc

<a id="entry-presentation_swift_special_functions_capability_special_functions_carlson_rc_api_session_carlson_rc"></a>
<a id="placement-placement.swift.swift_object.uniffisession_carlsonrc.e915c608fd8d"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func carlsonRc(
    firstArgument: UniffiExpression,
    secondArgument: UniffiExpression,
) -> UniffiExpression
```

Carlson's degenerate symmetric elliptic integral \(R_C(x,y)\).

## carlson_rd

<a id="entry-presentation_swift_special_functions_capability_special_functions_carlson_rd_api_session_carlson_rd"></a>
<a id="placement-placement.swift.swift_object.uniffisession_carlsonrd.e61f4245cf04"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func carlsonRd(
    firstArgument: UniffiExpression,
    secondArgument: UniffiExpression,
    thirdArgument: UniffiExpression,
) -> UniffiExpression
```

Carlson's symmetric elliptic integral \(R_D(x,y,z)\).

## carlson_rf

<a id="entry-presentation_swift_special_functions_capability_special_functions_carlson_rf_api_session_carlson_rf"></a>
<a id="placement-placement.swift.swift_object.uniffisession_carlsonrf.2f0815dd0fe8"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func carlsonRf(
    firstArgument: UniffiExpression,
    secondArgument: UniffiExpression,
    thirdArgument: UniffiExpression,
) -> UniffiExpression
```

Carlson's symmetric elliptic integral \(R_F(x,y,z)\).

## carlson_rj

<a id="entry-presentation_swift_special_functions_capability_special_functions_carlson_rj_api_session_carlson_rj"></a>
<a id="placement-placement.swift.swift_object.uniffisession_carlsonrj.92222a0ed573"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func carlsonRj(
    firstArgument: UniffiExpression,
    secondArgument: UniffiExpression,
    thirdArgument: UniffiExpression,
    fourthArgument: UniffiExpression,
) -> UniffiExpression
```

Carlson's symmetric elliptic integral \(R_J(x,y,z,p)\).

## chebyshev_polynomial_first_kind

<a id="entry-presentation_swift_special_functions_capability_special_functions_chebyshev_polynomial_first_kind_api_session_chebyshev_polynomial_first_kind"></a>
<a id="placement-placement.swift.swift_object.uniffisession_chebyshevpolynomialfirstkind.ce946e50f2ec"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func chebyshevPolynomialFirstKind(
    degree: UniffiExpression,
    argument: UniffiExpression,
) -> UniffiExpression
```

The Chebyshev polynomial \(T_n(x)\).

## chebyshev_polynomial_second_kind

<a id="entry-presentation_swift_special_functions_capability_special_functions_chebyshev_polynomial_second_kind_api_session_chebyshev_polynomial_second_kind"></a>
<a id="placement-placement.swift.swift_object.uniffisession_chebyshevpolynomialsecondkind.1d926819dba5"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func chebyshevPolynomialSecondKind(
    degree: UniffiExpression,
    argument: UniffiExpression,
) -> UniffiExpression
```

The Chebyshev polynomial \(U_n(x)\).

## digamma

<a id="entry-presentation_swift_special_functions_capability_special_functions_digamma_api_session_digamma"></a>
<a id="placement-placement.swift.swift_object.uniffisession_digamma.6e7dc6f55806"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func digamma(argument: UniffiExpression) -> UniffiExpression
```

The digamma function \(\psi(x) = \Gamma'(x)/\Gamma(x)\).

## elliptic_e

<a id="entry-presentation_swift_special_functions_capability_special_functions_elliptic_e_api_session_elliptic_e"></a>
<a id="placement-placement.swift.swift_object.uniffisession_elliptice.cf5a42b30d76"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func ellipticE(parameter: UniffiExpression) -> UniffiExpression
```

The complete second-kind elliptic integral \(E(m)\), with parameter \(m=k^2\).

## elliptic_e_incomplete

<a id="entry-presentation_swift_special_functions_capability_special_functions_elliptic_e_incomplete_api_session_elliptic_e_incomplete"></a>
<a id="placement-placement.swift.swift_object.uniffisession_ellipticeincomplete.d94f9c32b90b"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func ellipticEIncomplete(
    amplitude: UniffiExpression,
    parameter: UniffiExpression,
) -> UniffiExpression
```

The incomplete second-kind elliptic integral \(E(\phi\mid m)\), with parameter \(m=k^2\).

## elliptic_f

<a id="entry-presentation_swift_special_functions_capability_special_functions_elliptic_f_api_session_elliptic_f"></a>
<a id="placement-placement.swift.swift_object.uniffisession_ellipticf.97b11e7c5598"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func ellipticF(
    amplitude: UniffiExpression,
    parameter: UniffiExpression,
) -> UniffiExpression
```

The incomplete first-kind elliptic integral \(F(\phi\mid m)\), with parameter \(m=k^2\).

## elliptic_k

<a id="entry-presentation_swift_special_functions_capability_special_functions_elliptic_k_api_session_elliptic_k"></a>
<a id="placement-placement.swift.swift_object.uniffisession_elliptick.f833a54d5966"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func ellipticK(parameter: UniffiExpression) -> UniffiExpression
```

The complete first-kind elliptic integral \(K(m)\), with parameter \(m=k^2\).

## elliptic_pi

<a id="entry-presentation_swift_special_functions_capability_special_functions_elliptic_pi_api_session_elliptic_pi"></a>
<a id="placement-placement.swift.swift_object.uniffisession_ellipticpi.9add60e9df2b"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func ellipticPi(
    characteristic: UniffiExpression,
    parameter: UniffiExpression,
) -> UniffiExpression
```

The complete third-kind elliptic integral \(\Pi(n\mid m)\), with parameter \(m=k^2\).

## elliptic_pi_incomplete

<a id="entry-presentation_swift_special_functions_capability_special_functions_elliptic_pi_incomplete_api_session_elliptic_pi_incomplete"></a>
<a id="placement-placement.swift.swift_object.uniffisession_ellipticpiincomplete.7006379e79cc"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func ellipticPiIncomplete(
    characteristic: UniffiExpression,
    amplitude: UniffiExpression,
    parameter: UniffiExpression,
) -> UniffiExpression
```

The incomplete third-kind elliptic integral \(\Pi(n;\phi\mid m)\), with parameter \(m=k^2\).

## gamma

<a id="entry-presentation_swift_special_functions_capability_special_functions_gamma_api_session_gamma"></a>
<a id="placement-placement.swift.swift_object.uniffisession_gamma.5e1040887cef"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func gamma(argument: UniffiExpression) -> UniffiExpression
```

The gamma function \(\Gamma(x)\), the analytic continuation of `(x-1)!`.

## gegenbauer_polynomial

<a id="entry-presentation_swift_special_functions_capability_special_functions_gegenbauer_polynomial_api_session_gegenbauer_polynomial"></a>
<a id="placement-placement.swift.swift_object.uniffisession_gegenbauerpolynomial.b0d601ea9dd1"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func gegenbauerPolynomial(
    degree: UniffiExpression,
    parameter: UniffiExpression,
    argument: UniffiExpression,
) -> UniffiExpression
```

The Gegenbauer polynomial \(C_n^{(\lambda)}(x)\).

## generalized_laguerre_polynomial

<a id="entry-presentation_swift_special_functions_capability_special_functions_generalized_laguerre_polynomial_api_session_generalized_laguerre_polynomial"></a>
<a id="placement-placement.swift.swift_object.uniffisession_generalizedlaguerrepolynomial.45f5c032564b"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func generalizedLaguerrePolynomial(
    degree: UniffiExpression,
    parameter: UniffiExpression,
    argument: UniffiExpression,
) -> UniffiExpression
```

The generalized Laguerre polynomial \(L_n^{(\alpha)}(x)\).

## hermite_polynomial

<a id="entry-presentation_swift_special_functions_capability_special_functions_hermite_polynomial_api_session_hermite_polynomial"></a>
<a id="placement-placement.swift.swift_object.uniffisession_hermitepolynomial.aa63d58adf88"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func hermitePolynomial(
    degree: UniffiExpression,
    argument: UniffiExpression,
) -> UniffiExpression
```

The physicists' Hermite polynomial \(H_n(x)\).

## hurwitz_zeta

<a id="entry-presentation_swift_special_functions_capability_special_functions_hurwitz_zeta_api_session_hurwitz_zeta"></a>
<a id="placement-placement.swift.swift_object.uniffisession_hurwitzzeta.9184e588028c"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func hurwitzZeta(
    s: UniffiExpression,
    a: UniffiExpression,
) -> UniffiExpression
```

The Hurwitz zeta function \(\zeta(s, a) = \sum_{k\geq 0} (k+a)^{-s}\), the numeric primitive of the family. `hurwitz_zeta(s, 1)` folds to `zeta(s)`; `hurwitz_zeta(s, 1/2)` to \((2^s - 1)\zeta(s)\); a positive integer second argument reduces to `zeta(s)` minus the finite head; a non-positive integer first argument gives a Bernoulli polynomial in `a`.

## hypergeometric_0f1

<a id="entry-presentation_swift_special_functions_capability_special_functions_hypergeometric_0f1_api_session_hypergeometric_0f1"></a>
<a id="placement-placement.swift.swift_object.uniffisession_hypergeometric0f1.d1bbb1fd9665"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func hypergeometric0f1(
    lowerParameter: UniffiExpression,
    argument: UniffiExpression,
) -> UniffiExpression
```

The confluent limit \({}_0F_1(; b; z)\), lowered to `hypergeometric_pfq`.

## hypergeometric_1f1

<a id="entry-presentation_swift_special_functions_capability_special_functions_hypergeometric_1f1_api_session_hypergeometric_1f1"></a>
<a id="placement-placement.swift.swift_object.uniffisession_hypergeometric1f1.97d99f29d4a7"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func hypergeometric1f1(
    upperParameter: UniffiExpression,
    lowerParameter: UniffiExpression,
    argument: UniffiExpression,
) -> UniffiExpression
```

Kummer's confluent hypergeometric function \({}_1F_1(a; b; z)\).

## hypergeometric_2f1

<a id="entry-presentation_swift_special_functions_capability_special_functions_hypergeometric_2f1_api_session_hypergeometric_2f1"></a>
<a id="placement-placement.swift.swift_object.uniffisession_hypergeometric2f1.d9cde3d644c1"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func hypergeometric2f1(
    firstUpperParameter: UniffiExpression,
    secondUpperParameter: UniffiExpression,
    lowerParameter: UniffiExpression,
    argument: UniffiExpression,
) -> UniffiExpression
```

The Gauss hypergeometric function \({}_2F_1(a, b; c; z)\).

## hypergeometric_pfq

<a id="entry-presentation_swift_special_functions_capability_special_functions_hypergeometric_pfq_api_session_hypergeometric_pfq"></a>
<a id="placement-placement.swift.swift_object.uniffisession_hypergeometricpfq.ad7b0213f884"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func hypergeometricPfq(
    upperParameters: [UniffiExpression],
    lowerParameters: [UniffiExpression],
    argument: UniffiExpression,
) -> UniffiExpression
```

The generalized hypergeometric function \({}_pF_q(\mathbf a; \mathbf b; z)\). The two parameter groups are ordered sequences: order and repetition are significant, so a set or frozenset is rejected.

## jacobi_amplitude

<a id="entry-presentation_swift_special_functions_capability_special_functions_jacobi_amplitude_api_session_jacobi_amplitude"></a>
<a id="placement-placement.swift.swift_object.uniffisession_jacobiamplitude.bb4745d9af75"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func jacobiAmplitude(
    argument: UniffiExpression,
    parameter: UniffiExpression,
) -> UniffiExpression
```

The pinned Jacobi amplitude \(\operatorname{am}(u\mid m)\), with parameter \(m=k^2\).

## jacobi_cn

<a id="entry-presentation_swift_special_functions_capability_special_functions_jacobi_cn_api_session_jacobi_cn"></a>
<a id="placement-placement.swift.swift_object.uniffisession_jacobicn.c9222575f34d"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func jacobiCn(
    argument: UniffiExpression,
    parameter: UniffiExpression,
) -> UniffiExpression
```

Jacobi's elliptic function \(\operatorname{cn}(u\mid m)\), with parameter \(m=k^2\).

## jacobi_dn

<a id="entry-presentation_swift_special_functions_capability_special_functions_jacobi_dn_api_session_jacobi_dn"></a>
<a id="placement-placement.swift.swift_object.uniffisession_jacobidn.2df0068956e5"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func jacobiDn(
    argument: UniffiExpression,
    parameter: UniffiExpression,
) -> UniffiExpression
```

Jacobi's elliptic function \(\operatorname{dn}(u\mid m)\), with parameter \(m=k^2\).

## jacobi_polynomial

<a id="entry-presentation_swift_special_functions_capability_special_functions_jacobi_polynomial_api_session_jacobi_polynomial"></a>
<a id="placement-placement.swift.swift_object.uniffisession_jacobipolynomial.4a5121ca3733"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func jacobiPolynomial(
    degree: UniffiExpression,
    firstParameter: UniffiExpression,
    secondParameter: UniffiExpression,
    argument: UniffiExpression,
) -> UniffiExpression
```

The Jacobi polynomial \(P_n^{(\alpha,\beta)}(x)\).

## jacobi_sn

<a id="entry-presentation_swift_special_functions_capability_special_functions_jacobi_sn_api_session_jacobi_sn"></a>
<a id="placement-placement.swift.swift_object.uniffisession_jacobisn.1f2ed097af66"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func jacobiSn(
    argument: UniffiExpression,
    parameter: UniffiExpression,
) -> UniffiExpression
```

Jacobi's elliptic function \(\operatorname{sn}(u\mid m)\), with parameter \(m=k^2\).

## jacobi_theta_1

<a id="entry-presentation_swift_special_functions_capability_special_functions_jacobi_theta_1_api_session_jacobi_theta_1"></a>
<a id="placement-placement.swift.swift_object.uniffisession_jacobitheta1.f139b23a8a32"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func jacobiTheta1(
    argument: UniffiExpression,
    halfPeriodRatio: UniffiExpression,
) -> UniffiExpression
```

Jacobi's first theta function \(\theta_1(z\mid\tau)\), with half-period ratio \(\tau\).

## jacobi_theta_2

<a id="entry-presentation_swift_special_functions_capability_special_functions_jacobi_theta_2_api_session_jacobi_theta_2"></a>
<a id="placement-placement.swift.swift_object.uniffisession_jacobitheta2.bf44bd13abee"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func jacobiTheta2(
    argument: UniffiExpression,
    halfPeriodRatio: UniffiExpression,
) -> UniffiExpression
```

Jacobi's second theta function \(\theta_2(z\mid\tau)\), with half-period ratio \(\tau\).

## jacobi_theta_3

<a id="entry-presentation_swift_special_functions_capability_special_functions_jacobi_theta_3_api_session_jacobi_theta_3"></a>
<a id="placement-placement.swift.swift_object.uniffisession_jacobitheta3.481c68b94053"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func jacobiTheta3(
    argument: UniffiExpression,
    halfPeriodRatio: UniffiExpression,
) -> UniffiExpression
```

Jacobi's third theta function \(\theta_3(z\mid\tau)\), with half-period ratio \(\tau\).

## jacobi_theta_4

<a id="entry-presentation_swift_special_functions_capability_special_functions_jacobi_theta_4_api_session_jacobi_theta_4"></a>
<a id="placement-placement.swift.swift_object.uniffisession_jacobitheta4.444826350c97"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func jacobiTheta4(
    argument: UniffiExpression,
    halfPeriodRatio: UniffiExpression,
) -> UniffiExpression
```

Jacobi's fourth theta function \(\theta_4(z\mid\tau)\), with half-period ratio \(\tau\).

## laguerre_polynomial

<a id="entry-presentation_swift_special_functions_capability_special_functions_laguerre_polynomial_api_session_laguerre_polynomial"></a>
<a id="placement-placement.swift.swift_object.uniffisession_laguerrepolynomial.6d371ca7ab4a"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func laguerrePolynomial(
    degree: UniffiExpression,
    argument: UniffiExpression,
) -> UniffiExpression
```

The Laguerre polynomial, lowered to generalized Laguerre with parameter zero.

## legendre_polynomial

<a id="entry-presentation_swift_special_functions_capability_special_functions_legendre_polynomial_api_session_legendre_polynomial"></a>
<a id="placement-placement.swift.swift_object.uniffisession_legendrepolynomial.e714550087dc"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func legendrePolynomial(
    degree: UniffiExpression,
    argument: UniffiExpression,
) -> UniffiExpression
```

The Legendre polynomial \(P_n(x)\).

## lerch_phi

<a id="entry-presentation_swift_special_functions_capability_special_functions_lerch_phi_api_session_lerch_phi"></a>
<a id="placement-placement.swift.swift_object.uniffisession_lerchphi.52818c9ab1da"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func lerchPhi(
    argument: UniffiExpression,
    order: UniffiExpression,
    shift: UniffiExpression,
) -> UniffiExpression
```

The principal Lerch transcendent \(\Phi(z, s, a)\).

## log_gamma

<a id="entry-presentation_swift_special_functions_capability_special_functions_log_gamma_api_session_log_gamma"></a>
<a id="placement-placement.swift.swift_object.uniffisession_loggamma.d3d8b2917264"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func logGamma(argument: UniffiExpression) -> UniffiExpression
```

The principal-branch log-gamma function (not `log(gamma(x))` off the real axis).

## meijer_g

<a id="entry-presentation_swift_special_functions_capability_special_functions_meijer_g_api_session_meijer_g"></a>
<a id="placement-placement.swift.swift_object.uniffisession_meijerg.7f9bbc27e31d"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func meijerG(
    upperNumeratorParameters: [UniffiExpression],
    upperDenominatorParameters: [UniffiExpression],
    lowerNumeratorParameters: [UniffiExpression],
    lowerDenominatorParameters: [UniffiExpression],
    argument: UniffiExpression,
) -> UniffiExpression
```

The Meijer G-function \(G_{p,q}^{m,n}\) from its four ordered parameter groups. The orders `m`, `n`, `p`, and `q` are read from the group lengths and are never supplied separately.

## polygamma

<a id="entry-presentation_swift_special_functions_capability_special_functions_polygamma_api_session_polygamma"></a>
<a id="placement-placement.swift.swift_object.uniffisession_polygamma.ad163e50ac95"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func polygamma(
    order: UniffiExpression,
    argument: UniffiExpression,
) -> UniffiExpression
```

The polygamma function \(\psi^{(n)}(x)\), the order-th derivative of digamma; `polygamma(0, x)` reduces to `digamma(x)`.

## polylogarithm

<a id="entry-presentation_swift_special_functions_capability_special_functions_polylogarithm_api_session_polylogarithm"></a>
<a id="placement-placement.swift.swift_object.uniffisession_polylogarithm.ba44f655ad31"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func polylogarithm(
    order: UniffiExpression,
    argument: UniffiExpression,
) -> UniffiExpression
```

The principal-branch polylogarithm \(\operatorname{Li}_s(z)\).

## ultraspherical_polynomial

<a id="entry-presentation_swift_special_functions_capability_special_functions_ultraspherical_polynomial_api_session_ultraspherical_polynomial"></a>
<a id="placement-placement.swift.swift_object.uniffisession_ultrasphericalpolynomial.1b625b189f2a"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func ultrasphericalPolynomial(
    degree: UniffiExpression,
    parameter: UniffiExpression,
    argument: UniffiExpression,
) -> UniffiExpression
```

The ultraspherical polynomial, lowered to the Gegenbauer head.

## zeta

<a id="entry-presentation_swift_special_functions_capability_special_functions_zeta_api_session_zeta"></a>
<a id="placement-placement.swift.swift_object.uniffisession_zeta.ca91cb3d34c1"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func zeta(argument: UniffiExpression) -> UniffiExpression
```

The Riemann zeta function \(\zeta(s) = \sum_{k\geq 1} k^{-s}\).

## curl

<a id="entry-presentation_swift_vector_calculus_capability_vector_calculus_curl_api_analysis_session_curl"></a>
<a id="placement-placement.swift.swift_object.uniffisession_curl.1e42c2e78f8c"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func curl(
    vectorComponents: [UniffiExpression],
    variables: [String],
) -> [UniffiExpression]
```

\(\nabla\times F\).

## divergence

<a id="entry-presentation_swift_vector_calculus_capability_vector_calculus_divergence_api_analysis_session_divergence"></a>
<a id="placement-placement.swift.swift_object.uniffisession_divergence.73d0a21cd21f"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func divergence(
    vectorComponents: [UniffiExpression],
    variables: [String],
) -> UniffiExpression
```

\(\nabla\cdot F = \sum_i \partial F_i/\partial x_i\); component and variable counts must match.

## gradient

<a id="entry-presentation_swift_vector_calculus_capability_vector_calculus_gradient_api_analysis_session_gradient"></a>
<a id="placement-placement.swift.swift_object.uniffisession_gradient.9f407a66624d"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func gradient(
    scalarField: UniffiExpression,
    variables: [String],
) -> [UniffiExpression]
```

\(\nabla f\): the partial derivatives in the order of `variables`.

## hessian

<a id="entry-presentation_swift_vector_calculus_capability_vector_calculus_hessian_api_analysis_session_hessian"></a>
<a id="placement-placement.swift.swift_object.uniffisession_hessian.b6f8866fe421"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func hessian(
    scalarField: UniffiExpression,
    variables: [String],
) -> UniffiMatrix
```

The \(n\times n\) matrix of second partials, computed as the Jacobian of the gradient; structurally symmetric on smooth input.

## jacobian

<a id="entry-presentation_swift_vector_calculus_capability_vector_calculus_jacobian_api_analysis_session_jacobian"></a>
<a id="placement-placement.swift.swift_object.uniffisession_jacobian.b537465903e8"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func jacobian(
    vectorComponents: [UniffiExpression],
    variables: [String],
) -> UniffiMatrix
```

The matrix with entry \((i, j) = \partial F_i/\partial x_j\) (rows index components, columns index variables).

## jacobian

<a id="entry-presentation_swift_vector_calculus_capability_vector_calculus_jacobian_api_partial_differential_equations_partialdifferentialequationcoordinatechange_jacobian"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationcoordinatechange_jacobian.b76dac810eaf"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCoordinateChange method</p>

```swift signature
func jacobian() -> UniffiExpression
```

The exact forward-map Jacobian determinant.

## jacobian

<a id="entry-presentation_swift_vector_calculus_capability_vector_calculus_jacobian_api_partial_differential_equations_partialdifferentialequationtransformationverificationreport_jacobian"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationtransformationverificationreport_jacobian.a3eb7f7e1993"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationTransformationVerificationReport method</p>

```swift signature
func jacobian() -> UniffiExpression
```

The independently recomputed forward-map Jacobian.

## laplacian

<a id="entry-presentation_swift_vector_calculus_capability_vector_calculus_laplacian_api_analysis_session_laplacian"></a>
<a id="placement-placement.swift.swift_object.uniffisession_laplacian.3392c7843249"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func laplacian(
    scalarField: UniffiExpression,
    variables: [String],
) -> UniffiExpression
```

\(\Delta f = \nabla\cdot\nabla f\).
