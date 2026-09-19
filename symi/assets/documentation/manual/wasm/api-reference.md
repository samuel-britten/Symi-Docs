# Complete placement index

## AssumptionProposition

<a id="entry-presentation_wasm_polynomials_capability_algebra_assumption_proposition_api_assumptionproposition"></a>
<a id="placement-placement.wasm.javascript_facade.assumptionproposition.b30925c7b0d9"></a>
<p class="symi-entry-owner">Type</p>

```typescript signature
class AssumptionProposition
```

Public type placement for AssumptionProposition.

## AssumptionScope

<a id="entry-presentation_wasm_polynomials_capability_algebra_assumption_scope_api_assumptionscope"></a>
<a id="placement-placement.wasm.javascript_facade.assumptionscope.6062700f9779"></a>
<p class="symi-entry-owner">Type</p>

```typescript signature
class AssumptionScope
```

Public type placement for AssumptionScope.

## Context

<a id="entry-presentation_wasm_polynomials_capability_algebra_context_unresolved"></a>
<a id="placement-placement.wasm.javascript_facade.symifacade_context.8eb8851d9fac"></a>
<p class="symi-entry-owner">SymiFacade property</p>

```typescript signature
Context: ContextConstructor
```

Public property placement for Context.

## Context

<a id="entry-presentation_wasm_polynomials_capability_algebra_context_api_session"></a>
<a id="placement-placement.wasm.javascript_facade.context.63263e1ca6f7"></a>
<p class="symi-entry-owner">Type</p>

```typescript signature
interface Context
```

Create an isolated context with its own symbol table, interner, and assumptions.

## ContextConstructor

<a id="entry-presentation_wasm_polynomials_capability_algebra_context_constructor_api_session"></a>
<a id="placement-placement.wasm.javascript_facade.contextconstructor.1350f1ba4da2"></a>
<p class="symi-entry-owner">Type</p>

```typescript signature
interface ContextConstructor
```

Public type placement for ContextConstructor.

## CylindricalAlgebraicDecomposition

<a id="entry-presentation_wasm_polynomials_capability_algebra_cylindrical_algebraic_decomposition_api_cylindricalalgebraicdecomposition"></a>
<a id="placement-placement.wasm.wasm_class.cylindricalalgebraicdecomposition.8d211ca9a1c3"></a>
<p class="symi-entry-owner">CylindricalAlgebraicDecomposition constructor</p>

```typescript signature
new CylindricalAlgebraicDecomposition(
    expressions: Expression[],
    variables: string[],
    equational_constraints?: Uint32Array | null,
)
```

Construct the CAD of the polynomials in the given variable order \(x_1,\ldots,x_n\); projection eliminates \(x_n\) first).

## Expression

<a id="entry-presentation_wasm_polynomials_capability_algebra_expression_unresolved"></a>
<a id="placement-placement.wasm.javascript_facade.symifacade_expression.93094cdfa844"></a>
<p class="symi-entry-owner">SymiFacade property</p>

```typescript signature
Expression: unknown
```

Public property placement for Expression.

## Expression

<a id="entry-presentation_wasm_polynomials_capability_algebra_expression_api_expression"></a>
<a id="placement-placement.wasm.javascript_facade.expression.41c8e859d914"></a>
<p class="symi-entry-owner">Type</p>

```typescript signature
interface Expression
```

Public type placement for Expression.

## Matrix

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_matrix_api_matrix"></a>
<a id="placement-placement.wasm.wasm_class.matrix.9d9ffff314ec"></a>
<p class="symi-entry-owner">Matrix constructor</p>

```typescript signature
new Matrix(rows: number, columns: number, entries: Expression[])
```

Construct a matrix of the given shape from `entries` in row-major order.

## Matrix

<a id="entry-presentation_wasm_polynomials_capability_algebra_matrix_type_unresolved"></a>
<a id="placement-placement.wasm.javascript_facade.symifacade_matrix.7fe47f8c649d"></a>
<p class="symi-entry-owner">SymiFacade property</p>

```typescript signature
Matrix: unknown
```

Public property placement for Matrix.

## Matrix

<a id="entry-presentation_wasm_polynomials_capability_algebra_matrix_api_matrix"></a>
<a id="placement-placement.wasm.javascript_facade.matrix.75a04eacf90d"></a>
<p class="symi-entry-owner">Type</p>

```typescript signature
interface Matrix
```

Construct a matrix of the given shape from `entries` in row-major order.

## PiecewiseBranch

<a id="entry-presentation_wasm_polynomials_capability_algebra_piecewise_branch_api_results_piecewisebranch"></a>
<a id="placement-placement.wasm.javascript_facade.piecewisebranch.d690830b18b4"></a>
<p class="symi-entry-owner">Type</p>

```typescript signature
interface PiecewiseBranch
```

Public type placement for PiecewiseBranch.

## SymiContextError

<a id="entry-presentation_wasm_polynomials_capability_algebra_symicontexterror_unresolved"></a>
<a id="placement-placement.wasm.javascript_facade.symicontexterror.8a9c0b29d21a"></a>
<p class="symi-entry-owner">Type</p>

```typescript signature
class SymiContextError extends SymiError {}
```

Public type placement for SymiContextError.

## SymiDomainError

<a id="entry-presentation_wasm_polynomials_capability_algebra_symidomainerror_unresolved"></a>
<a id="placement-placement.wasm.javascript_facade.symidomainerror.ca3777e8db87"></a>
<p class="symi-entry-owner">Type</p>

```typescript signature
class SymiDomainError extends SymiError {}
```

Public type placement for SymiDomainError.

## SymiError

<a id="entry-presentation_wasm_polynomials_capability_algebra_symierror_unresolved"></a>
<a id="placement-placement.wasm.javascript_facade.symierror.4dd8ef89912f"></a>
<p class="symi-entry-owner">Type</p>

```typescript signature
class SymiError extends Error
```

Public type placement for SymiError.

## SymiFacade

<a id="entry-presentation_wasm_cad_capability_algebra_symi_facade_unresolved"></a>
<a id="placement-placement.wasm.javascript_facade.symifacade.ff8eea78fa52"></a>
<p class="symi-entry-owner">Type</p>

```typescript signature
interface SymiFacade
```

Public type placement for SymiFacade.

## SymiInternalError

<a id="entry-presentation_wasm_polynomials_capability_algebra_symiinternalerror_unresolved"></a>
<a id="placement-placement.wasm.javascript_facade.symiinternalerror.9f964e7b647d"></a>
<p class="symi-entry-owner">Type</p>

```typescript signature
class SymiInternalError extends SymiError {}
```

Public type placement for SymiInternalError.

## SymiResourceError

<a id="entry-presentation_wasm_polynomials_capability_algebra_symiresourceerror_unresolved"></a>
<a id="placement-placement.wasm.javascript_facade.symiresourceerror.e63a87983441"></a>
<p class="symi-entry-owner">Type</p>

```typescript signature
class SymiResourceError extends SymiError {}
```

Public type placement for SymiResourceError.

## SymiTypeError

<a id="entry-presentation_wasm_polynomials_capability_algebra_symitypeerror_unresolved"></a>
<a id="placement-placement.wasm.javascript_facade.symitypeerror.f73719bf5950"></a>
<p class="symi-entry-owner">Type</p>

```typescript signature
class SymiTypeError extends SymiError {}
```

Public type placement for SymiTypeError.

## absoluteValue

<a id="entry-presentation_wasm_polynomials_capability_algebra_absolute_value_api_session_absolute_value"></a>
<a id="placement-placement.wasm.javascript_facade.context_absolutevalue.ef3837cbe2e9"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
absoluteValue(value: ExpressionLike): Expression
```

Public method placement for absoluteValue.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_absolutevalue.0f6b9a8f80d5"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.absoluteValue</code></p>

```typescript signature
absoluteValue(value: ExpressionLike): Expression
```

</details>

## absoluteValue

<a id="entry-presentation_wasm_polynomials_capability_algebra_absolute_value_api_expression_absolute_value"></a>
<a id="placement-placement.wasm.javascript_facade.expression_absolutevalue.d16fc61f887a"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
absoluteValue(): Expression
```

Public method placement for absoluteValue.

## add

<a id="entry-presentation_wasm_polynomials_capability_algebra_add_api_expression_add"></a>
<a id="placement-placement.wasm.javascript_facade.expression_add.d9aaa9c8c688"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
add(other: ExpressionLike): Expression
```

Sum of this expression and `other`.

## add

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_add_api_matrix_add"></a>
<a id="placement-placement.wasm.wasm_class.matrix_add.99e6a9230b2d"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
add(other: Matrix): Matrix
```

Entrywise sum of two matrices of the same shape.

## add

<a id="entry-presentation_wasm_polynomials_capability_algebra_add_api_matrix_add"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_add.b4cbe00e9031"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
add(other: Matrix): Matrix
```

Entrywise sum of two matrices of the same shape.

## addAssumptions

<a id="entry-presentation_wasm_polynomials_capability_algebra_add_assumptions_api_session_add_assumptions"></a>
<a id="placement-placement.wasm.javascript_facade.context_addassumptions.bd466d03ca25"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
addAssumptions(proposition: AssumptionProposition): void
```

Add a proposition to the durable assumption context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_addassumptions.73e3352ec9e9"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.addAssumptions</code></p>

```typescript signature
addAssumptions(proposition: AssumptionProposition): void
```

</details>

## adjugate

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_adjugate_api_matrix_adjugate"></a>
<a id="placement-placement.wasm.wasm_class.matrix_adjugate.3b29f0eaf4e7"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
adjugate(): Matrix
```

The classical adjoint (transpose of the cofactor Matrix); satisfies \(M\operatorname{adj}(M) = \det(M) I\).

## algebraicAssumption

<a id="entry-presentation_wasm_polynomials_capability_algebra_algebraic_assumption_api_session_algebraic_assumption"></a>
<a id="placement-placement.wasm.javascript_facade.context_algebraicassumption.13f584dcd297"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
algebraicAssumption(value: ExpressionLike): AssumptionProposition
```

Build an algebraicity proposition for a scalar expression.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_algebraicassumption.f4ce6f6c9968"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.algebraicAssumption</code></p>

```typescript signature
algebraicAssumption(value: ExpressionLike): AssumptionProposition
```

</details>

## and

<a id="entry-presentation_wasm_assumptions_capability_algebra_and_api_assumptionproposition_and"></a>
<a id="placement-placement.wasm.javascript_facade.assumptionproposition_and.dd2edebafd49"></a>
<p class="symi-entry-owner">AssumptionProposition method</p>

```typescript signature
and(other: AssumptionProposition): AssumptionProposition
```

Conjoin two propositions.

## ask

<a id="entry-presentation_wasm_assumptions_capability_algebra_ask_api_assumptionscope_ask"></a>
<a id="placement-placement.wasm.javascript_facade.assumptionscope_ask.39f17daa4a26"></a>
<p class="symi-entry-owner">AssumptionScope method</p>

```typescript signature
ask(proposition: AssumptionProposition): boolean | null
```

Ask a proposition against the immutable scope snapshot.

## ask

<a id="entry-presentation_wasm_assumptions_capability_algebra_ask_api_session_ask"></a>
<a id="placement-placement.wasm.javascript_facade.context_ask.dd678b45582e"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
ask(proposition: AssumptionProposition): boolean | null
```

Ask whether a proposition is entailed by durable assumptions.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_ask.3efd93c29c40"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.ask</code></p>

```typescript signature
ask(proposition: AssumptionProposition): boolean | null
```

</details>

## assuming

<a id="entry-presentation_wasm_assumptions_capability_algebra_assuming_api_assumptionscope_assuming"></a>
<a id="placement-placement.wasm.javascript_facade.assumptionscope_assuming.448cb5db38c4"></a>
<p class="symi-entry-owner">AssumptionScope method</p>

```typescript signature
assuming(proposition: AssumptionProposition): AssumptionScope
```

Compose a further immutable overlay.

## assuming

<a id="entry-presentation_wasm_assumptions_capability_algebra_assuming_api_session_assuming"></a>
<a id="placement-placement.wasm.javascript_facade.context_assuming.b1b313002885"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
assuming(proposition: AssumptionProposition): AssumptionScope
```

Create an immutable local assumption scope.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_assuming.40c4ee1c859b"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.assuming</code></p>

```typescript signature
assuming(proposition: AssumptionProposition): AssumptionScope
```

</details>

## assumptionPropositionFromLogicalExpression

<a id="entry-presentation_wasm_polynomials_capability_algebra_assumption_proposition_from_logical_expression_api_session_assumption_proposition_from_logical_expression"></a>
<a id="placement-placement.wasm.javascript_facade.context_assumptionpropositionfromlogicalexpression.2634b9a120ce"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
assumptionPropositionFromLogicalExpression(logicalExpression: ExpressionLike): AssumptionProposition
```

Convert a supported logical expression to a typed assumption proposition.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_assumptionpropositionfromlogicalexpression.296cef2c3834"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.assumptionPropositionFromLogicalExpression</code></p>

```typescript signature
assumptionPropositionFromLogicalExpression(logicalExpression: ExpressionLike): AssumptionProposition
```

</details>

## blocks

<a id="entry-presentation_wasm_matrix_functions_capability_algebra_blocks_api_results_jordandecomposition_blocks"></a>
<a id="placement-placement.wasm.wasm_class.jordandecomposition_blocks.ac7057508f51"></a>
<p class="symi-entry-owner">JordanDecomposition property</p>

```typescript signature
readonly blocks: JordanBlock[]
```

The Jordan blocks, in the order they appear on the diagonal.

## canonicalForm

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_canonical_form_api_results_rationalcanonicalform_canonical_form"></a>
<a id="placement-placement.wasm.wasm_class.rationalcanonicalform_canonicalform.fa5f7876399d"></a>
<p class="symi-entry-owner">RationalCanonicalForm property</p>

```typescript signature
readonly canonicalForm: Matrix
```

The Frobenius canonical form of the decomposed matrix.

## category

<a id="entry-presentation_wasm_polynomials_capability_algebra_category_unresolved"></a>
<a id="placement-placement.wasm.javascript_facade.symierror_category.6b54a640412f"></a>
<p class="symi-entry-owner">SymiError property</p>

```typescript signature
readonly category: DiagnosticCategory
```

Public property placement for category.

## cellCount

<a id="entry-presentation_wasm_polynomials_capability_algebra_cell_count_api_cylindricalalgebraicdecomposition_cell_count"></a>
<a id="placement-placement.wasm.wasm_class.cylindricalalgebraicdecomposition_cellcount.2a3856c631ae"></a>
<p class="symi-entry-owner">CylindricalAlgebraicDecomposition method</p>

```typescript signature
cellCount(): number
```

The number of full-dimensional cells partitioning \(\mathbb{R}^n\).

## cellDimension

<a id="entry-presentation_wasm_polynomials_capability_algebra_cell_dimension_api_cylindricalalgebraicdecomposition_cell_dimension"></a>
<a id="placement-placement.wasm.wasm_class.cylindricalalgebraicdecomposition_celldimension.58941abd698b"></a>
<p class="symi-entry-owner">CylindricalAlgebraicDecomposition method</p>

```typescript signature
cellDimension(index: number): number
```

The geometric dimension of the full cell as a subset of \(\mathbb{R}^n\) (the number of sector coordinates along its cylindrical stack).

## cellKind

<a id="entry-presentation_wasm_polynomials_capability_algebra_cell_kind_api_cylindricalalgebraicdecomposition_cell_kind"></a>
<a id="placement-placement.wasm.wasm_class.cylindricalalgebraicdecomposition_cellkind.b0d16f9fc18f"></a>
<p class="symi-entry-owner">CylindricalAlgebraicDecomposition method</p>

```typescript signature
cellKind(index: number): string
```

`"section"` or `"sector"` — whether the cell is a root section or an open interval in its top variable.

## cellSamplePoint

<a id="entry-presentation_wasm_polynomials_capability_algebra_cell_sample_point_api_cylindricalalgebraicdecomposition_cell_sample_point"></a>
<a id="placement-placement.wasm.wasm_class.cylindricalalgebraicdecomposition_cellsamplepoint.fb99fcd53a5b"></a>
<p class="symi-entry-owner">CylindricalAlgebraicDecomposition method</p>

```typescript signature
cellSamplePoint(index: number): Float64Array
```

The coordinates of the full cell's sample point as floats — a numeric view via the multi-precision evaluator, not a decision.

## cellSignVector

<a id="entry-presentation_wasm_polynomials_capability_algebra_cell_sign_vector_api_cylindricalalgebraicdecomposition_cell_sign_vector"></a>
<a id="placement-placement.wasm.wasm_class.cylindricalalgebraicdecomposition_cellsignvector.1dd5b1c2f6cd"></a>
<p class="symi-entry-owner">CylindricalAlgebraicDecomposition method</p>

```typescript signature
cellSignVector(index: number): Int32Array
```

The exact sign (\(-1\), \(0\), or \(+1\)) of each input polynomial on the full cell, in input order.

## changeMonomialOrder

<a id="entry-presentation_wasm_polynomials_capability_algebra_change_monomial_order_api_algebra_session_change_monomial_order"></a>
<a id="placement-placement.wasm.wasm_module.module_changemonomialorder.fd8d2e8526b4"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
changeMonomialOrder(
    basis: Expression[],
    variables: string[],
    source_order: string,
    target_order: string,
): Expression[] | undefined
```

Convert a Gröbner basis of a zero-dimensional ideal from `source_order` to `target_order` by FGLM (Faugère–Gianni–Lazard–Mora) — linear algebra in the finite-dimensional quotient ring \(\mathbb{Q}[\text{variables}]/I\), far cheaper than computing the target basis directly (the msolve route to a lexicographic basis is a cheap `degrevlex` basis followed by this conversion).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_changemonomialorder.e2a57ba75287"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.changeMonomialOrder</code></p>

```typescript signature
changeMonomialOrder(
    basis: Expression[],
    variables: string[],
    source_order: string,
    target_order: string,
): Expression[] | undefined
```

</details>

## characteristicPolynomial

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_characteristic_polynomial_api_matrix_operations_matrix_characteristic_polynomial"></a>
<a id="placement-placement.wasm.wasm_class.matrix_characteristicpolynomial.b52d432283bf"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
characteristicPolynomial(variable: string): Expression
```

\(\det(\lambda I - M)\) as a polynomial in the named variable.

## characteristicPolynomial

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_characteristic_polynomial_api_results_rationalcanonicalform_characteristic_polynomial"></a>
<a id="placement-placement.wasm.wasm_class.rationalcanonicalform_characteristicpolynomial.62eae1d83074"></a>
<p class="symi-entry-owner">RationalCanonicalForm property</p>

```typescript signature
readonly characteristicPolynomial: Expression
```

\(\det(\lambda I - M)\) as a polynomial in the named variable.

## clearAllAssumptions

<a id="entry-presentation_wasm_polynomials_capability_algebra_clear_all_assumptions_api_session_clear_all_assumptions"></a>
<a id="placement-placement.wasm.javascript_facade.context_clearallassumptions.a0d7b8978517"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
clearAllAssumptions(): void
```

Clear all durable assumptions.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_clearallassumptions.759cb89d46d9"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.clearAllAssumptions</code></p>

```typescript signature
clearAllAssumptions(): void
```

</details>

## code

<a id="entry-presentation_wasm_polynomials_capability_algebra_code_unresolved"></a>
<a id="placement-placement.wasm.javascript_facade.symierror_code.30f9d8518f8d"></a>
<p class="symi-entry-owner">SymiError property</p>

```typescript signature
readonly code: DiagnosticCategory
```

Public property placement for code.

## coefficient

<a id="entry-presentation_wasm_polynomials_capability_algebra_coefficient_api_algebra_session_coefficient"></a>
<a id="placement-placement.wasm.wasm_module.module_coefficient.b04c0fe2497b"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
coefficient(
    input_expression: Expression,
    variable: string,
    power: number,
): Expression
```

Coefficient of `variable^power`; integer 0 when the term is absent. Errors on non-polynomial input.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_coefficient.8facb544769d"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.coefficient</code></p>

```typescript signature
coefficient(
    input_expression: Expression,
    variable: string,
    power: number,
): Expression
```

</details>

## coefficient

<a id="entry-presentation_wasm_polynomials_capability_algebra_coefficient_api_partial_differential_equations_partialdifferentialequationjetcoefficient_coefficient"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationjetcoefficient_coefficient.517fdfbfa0c1"></a>
<p class="symi-entry-owner">PartialDifferentialEquationJetCoefficient property</p>

```typescript signature
readonly coefficient: Expression
```

The exact coefficient expression.

## coefficient

<a id="entry-presentation_wasm_polynomials_capability_algebra_coefficient_api_partial_differential_equations_partialdifferentialequationprincipalcoefficient_coefficient"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationprincipalcoefficient_coefficient.c6dd1d226399"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPrincipalCoefficient property</p>

```typescript signature
readonly coefficient: Expression
```

The raw coefficient Expression, before mixed terms are halved.

## cofactorMatrix

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_cofactor_matrix_api_matrix_cofactor_matrix"></a>
<a id="placement-placement.wasm.wasm_class.matrix_cofactormatrix.f7cc2238f180"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
cofactorMatrix(): Matrix
```

The matrix of cofactors, whose transpose is the adjugate.

## columnHermiteNormalForm

<a id="entry-presentation_wasm_matrix_canonical_forms_capability_algebra_column_hermite_normal_form_api_matrix_operations_matrix_column_hermite_normal_form"></a>
<a id="placement-placement.wasm.wasm_class.matrix_columnhermitenormalform.d56e378a6a37"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
columnHermiteNormalForm(): HermiteNormalFormDecomposition
```

The transpose-dual column form, returning `H`, a unimodular `V` satisfying \(M V = H\), the rank, and pivot metadata. Notes: WASM returns a `hermite_normal_form_decomposition` object.

## columnTransformation

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_column_transformation_api_results_smithnormalformdecomposition_column_transformation"></a>
<a id="placement-placement.wasm.wasm_class.smithnormalformdecomposition_columntransformation.9b91a0b807db"></a>
<p class="symi-entry-owner">SmithNormalFormDecomposition property</p>

```typescript signature
readonly columnTransformation: Matrix
```

The unimodular column transformation `V` satisfying `U * matrix * V == S`.

## columns

<a id="entry-presentation_wasm_matrix_construction_capability_algebra_columns_api_matrix_columns"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_columns.30f3e2e7c0cf"></a>
<p class="symi-entry-owner">Matrix property</p>

```typescript signature
readonly columns: number
```

Number of columns.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.matrix_columns.4b3f7bc5d61b"></a>
<p class="symi-entry-owner">Matrix property: <code>Matrix.columns</code></p>

```typescript signature
readonly columns: number
```

</details>

## complexAssumption

<a id="entry-presentation_wasm_polynomials_capability_algebra_complex_assumption_api_session_complex_assumption"></a>
<a id="placement-placement.wasm.javascript_facade.context_complexassumption.de9b2d0d5a6b"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
complexAssumption(value: ExpressionLike): AssumptionProposition
```

Build a finite-complex proposition for a scalar expression.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_complexassumption.6e9580247a40"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.complexAssumption</code></p>

```typescript signature
complexAssumption(value: ExpressionLike): AssumptionProposition
```

</details>

## complexEntries

<a id="entry-presentation_wasm_polynomials_capability_algebra_complex_entries_api_session_complex_entries"></a>
<a id="placement-placement.wasm.javascript_facade.context_complexentries.8ea406d31c90"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
complexEntries(value: Matrix): AssumptionProposition
```

Build a finite-complex-entry proposition.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_complexentries.7d80eaa5cce4"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.complexEntries</code></p>

```typescript signature
complexEntries(value: Matrix): AssumptionProposition
```

</details>

## compositeAssumption

<a id="entry-presentation_wasm_polynomials_capability_algebra_composite_assumption_api_session_composite_assumption"></a>
<a id="placement-placement.wasm.javascript_facade.context_compositeassumption.7fafa23ed771"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
compositeAssumption(value: ExpressionLike): AssumptionProposition
```

Build a compositeness proposition for a scalar expression.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_compositeassumption.c21be76bc301"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.compositeAssumption</code></p>

```typescript signature
compositeAssumption(value: ExpressionLike): AssumptionProposition
```

</details>

## condition

<a id="entry-presentation_wasm_polynomials_capability_algebra_condition_api_results_piecewisebranch_condition"></a>
<a id="placement-placement.wasm.javascript_facade.piecewisebranch_condition.64f74fb11773"></a>
<p class="symi-entry-owner">PiecewiseBranch property</p>

```typescript signature
condition: ExpressionLike
```

Public property placement for condition.

## congruenceModulus

<a id="entry-presentation_wasm_polynomials_capability_algebra_congruence_modulus_api_assumptionproposition_congruence_modulus"></a>
<a id="placement-placement.wasm.javascript_facade.assumptionproposition_congruencemodulus.958e75bacc16"></a>
<p class="symi-entry-owner">AssumptionProposition method</p>

```typescript signature
congruenceModulus(): Expression | null
```

Return the modulus when this proposition is one congruence atom.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_congruencemodulus.5433d54422f2"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.congruenceModulus</code></p>

```typescript signature
congruenceModulus(proposition: AssumptionProposition): Expression | null
```

</details>

## congruentAssumption

<a id="entry-presentation_wasm_polynomials_capability_algebra_congruent_assumption_api_defaults_session_congruent_assumption"></a>
<a id="placement-placement.wasm.javascript_facade.context_congruentassumption.ba23c40226c0"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
congruentAssumption(left: ExpressionLike, right: ExpressionLike, modulus: ExpressionLike): AssumptionProposition
```

Build an integer-congruence proposition.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_congruentassumption.cc5d155981f1"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.congruentAssumption</code></p>

```typescript signature
congruentAssumption(left: ExpressionLike, right: ExpressionLike, modulus: ExpressionLike): AssumptionProposition
```

</details>

## cosine

<a id="entry-presentation_wasm_matrix_functions_capability_algebra_cosine_api_matrix_operations_matrix_cosine"></a>
<a id="placement-placement.wasm.wasm_class.matrix_cosine.0f588e01221c"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
cosine(): Matrix
```

The primary matrix cosine `cos(M)`, evaluated exactly through the certified Jordan decomposition and the trigonometric identity certificate.

## couldHold

<a id="entry-presentation_wasm_polynomials_capability_algebra_could_hold_api_assumptionscope_could_hold"></a>
<a id="placement-placement.wasm.javascript_facade.assumptionscope_couldhold.cd0ffcddc4c7"></a>
<p class="symi-entry-owner">AssumptionScope method</p>

```typescript signature
couldHold(proposition: AssumptionProposition): boolean | null
```

Ask whether a proposition is compatible with the immutable scope snapshot.

## couldHold

<a id="entry-presentation_wasm_polynomials_capability_algebra_could_hold_api_session_could_hold"></a>
<a id="placement-placement.wasm.javascript_facade.context_couldhold.07dbc6c95fcb"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
couldHold(proposition: AssumptionProposition): boolean | null
```

Ask whether a proposition has a checked compatible model.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_couldhold.c5541088e29c"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.couldHold</code></p>

```typescript signature
couldHold(proposition: AssumptionProposition): boolean | null
```

</details>

## createFacade

<a id="entry-presentation_wasm_cad_capability_algebra_create_facade_unresolved"></a>
<a id="placement-placement.wasm.javascript_facade.module_createfacade.ec941be21075"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
function createFacade(rawModule: unknown): SymiFacade
```

Public function placement for createFacade.

## definedAssumption

<a id="entry-presentation_wasm_polynomials_capability_algebra_defined_assumption_api_session_defined_assumption"></a>
<a id="placement-placement.wasm.javascript_facade.context_definedassumption.a6b8cd5e249d"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
definedAssumption(value: ExpressionLike): AssumptionProposition
```

Build a pointwise definedness proposition for a scalar expression.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_definedassumption.d16c9ffedf97"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.definedAssumption</code></p>

```typescript signature
definedAssumption(value: ExpressionLike): AssumptionProposition
```

</details>

## degree

<a id="entry-presentation_wasm_polynomials_capability_algebra_degree_api_algebra_session_degree"></a>
<a id="placement-placement.wasm.wasm_module.module_degree.b2d823ac32d1"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
degree(
    input_expression: Expression,
    variable: string,
): number | undefined
```

Degree in `variable`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_degree.d5afc93f0991"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.degree</code></p>

```typescript signature
degree(
    input_expression: Expression,
    variable: string,
): number | undefined
```

</details>

## deserializeAssumptionProposition

<a id="entry-presentation_wasm_polynomials_capability_algebra_deserialize_assumption_proposition_api_session_deserialize_assumption_proposition"></a>
<a id="placement-placement.wasm.javascript_facade.context_deserializeassumptionproposition.a3cd68aa2883"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
deserializeAssumptionProposition(text: string): AssumptionProposition
```

Parse a versioned canonical assumption proposition.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_deserializeassumptionproposition.baf0e5199161"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.deserializeAssumptionProposition</code></p>

```typescript signature
deserializeAssumptionProposition(text: string): AssumptionProposition
```

</details>

## determinant

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_determinant_api_matrix_determinant"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_determinant.375ed98dc9f9"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
determinant(): Expression
```

Fraction-free (Berkowitz/Bareiss) determinant of a square matrix.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.matrix_determinant.9cca0ed72b2e"></a>
<p class="symi-entry-owner">Matrix method: <code>Matrix.determinant</code></p>

```typescript signature
determinant(): Expression
```

</details>

## diagonalMatrix

<a id="entry-presentation_wasm_polynomials_capability_algebra_diagonal_matrix_api_session_diagonal_matrix"></a>
<a id="placement-placement.wasm.javascript_facade.context_diagonalmatrix.4a508bb260ba"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
diagonalMatrix(value: Matrix): AssumptionProposition
```

Build a diagonal-matrix proposition.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_diagonalmatrix.bdd963190e9d"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.diagonalMatrix</code></p>

```typescript signature
diagonalMatrix(value: Matrix): AssumptionProposition
```

</details>

## eigenvalue

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_eigenvalue_api_results_eigenpair_eigenvalue"></a>
<a id="placement-placement.wasm.wasm_class.eigenpair_eigenvalue.843c70c4d195"></a>
<p class="symi-entry-owner">Eigenpair property</p>

```typescript signature
readonly eigenvalue: Expression
```

The eigenvalue of the pair.

## eigenvalue

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_eigenvalue_api_results_jordanblock_eigenvalue"></a>
<a id="placement-placement.wasm.wasm_class.jordanblock_eigenvalue.709dd40eb76c"></a>
<p class="symi-entry-owner">JordanBlock property</p>

```typescript signature
readonly eigenvalue: Expression
```

The eigenvalue this Jordan block belongs to.

## eigenvalues

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_eigenvalues_api_matrix_eigenvalues"></a>
<a id="placement-placement.wasm.wasm_class.matrix_eigenvalues.6b4706f57bbf"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
eigenvalues(): Expression[]
```

Eigenvalues with multiplicity, via the characteristic polynomial and the root finder; eigenvalues the root finder cannot close remain as exact first-class `polynomial_root` values.

## eigenvectors

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_eigenvectors_api_matrix_operations_matrix_eigenvectors"></a>
<a id="placement-placement.wasm.wasm_class.matrix_eigenvectors.c6bb314d0780"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
eigenvectors(): Eigenpair[]
```

For each eigenvalue, a basis of its eigenspace as column matrices. Notes: WASM returns `eigenpair` objects with `eigenvalue`/`vectors` getters.

## eliminationIdeal

<a id="entry-presentation_wasm_polynomials_capability_algebra_elimination_ideal_api_algebra_session_elimination_ideal"></a>
<a id="placement-placement.wasm.wasm_module.module_eliminationideal.99af73451cd1"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
eliminationIdeal(
    generators: Expression[],
    variables: string[],
    eliminate: string[],
): Expression[] | undefined
```

A Gröbner basis of the elimination ideal \(\langle\operatorname{generators}\rangle \cap \mathbb{Q}[\text{surviving variables}]\), projecting away the variables named in `eliminate` via the Elimination Theorem (a block order ranks the eliminated variables high and the generators free of them are kept).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_eliminationideal.04f94bd7d8f1"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.eliminationIdeal</code></p>

```typescript signature
eliminationIdeal(
    generators: Expression[],
    variables: string[],
    eliminate: string[],
): Expression[] | undefined
```

</details>

## entry

<a id="entry-presentation_wasm_matrix_construction_capability_algebra_entry_api_matrix_entry"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_entry.720b6a063946"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
entry(row: number, column: number): Expression
```

Element access. Notes: Python uses indexing `m[row, column]` instead.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.matrix_entry.53b08ca2f069"></a>
<p class="symi-entry-owner">Matrix method: <code>Matrix.entry</code></p>

```typescript signature
entry(row: number, column: number): Expression
```

</details>

## equalAssumption

<a id="entry-presentation_wasm_polynomials_capability_algebra_equal_assumption_api_defaults_session_equal_assumption"></a>
<a id="placement-placement.wasm.javascript_facade.context_equalassumption.e2385c0eb338"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
equalAssumption(left: ExpressionLike, right: ExpressionLike): AssumptionProposition
```

Build an equality proposition between two scalar expressions.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_equalassumption.24f0c321944b"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.equalAssumption</code></p>

```typescript signature
equalAssumption(left: ExpressionLike, right: ExpressionLike): AssumptionProposition
```

</details>

## evenAssumption

<a id="entry-presentation_wasm_polynomials_capability_algebra_even_assumption_api_session_even_assumption"></a>
<a id="placement-placement.wasm.javascript_facade.context_evenassumption.e7be2f22f2fa"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
evenAssumption(value: ExpressionLike): AssumptionProposition
```

Build an evenness proposition for a scalar expression.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_evenassumption.d98feb706c03"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.evenAssumption</code></p>

```typescript signature
evenAssumption(value: ExpressionLike): AssumptionProposition
```

</details>

## expected

<a id="entry-presentation_wasm_polynomials_capability_algebra_expected_unresolved"></a>
<a id="placement-placement.wasm.javascript_facade.symierror_expected.a59eda760e94"></a>
<p class="symi-entry-owner">SymiError property</p>

```typescript signature
readonly expected: string | null
```

Public property placement for expected.

## exponential

<a id="entry-presentation_wasm_matrix_functions_capability_algebra_exponential_api_matrix_operations_matrix_exponential"></a>
<a id="placement-placement.wasm.wasm_class.matrix_exponential.b7bab335ac58"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
exponential(): Matrix
```

The matrix exponential `exp(M)`, evaluated through the certified Jordan decomposition. Declines on inputs whose eigenvalues cannot be certified exactly.

## extendedRealAssumption

<a id="entry-presentation_wasm_polynomials_capability_algebra_extended_real_assumption_api_session_extended_real_assumption"></a>
<a id="placement-placement.wasm.javascript_facade.context_extendedrealassumption.24a10286e28a"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
extendedRealAssumption(value: ExpressionLike): AssumptionProposition
```

Build an extended-real proposition for a scalar expression.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_extendedrealassumption.13b9ce694b78"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.extendedRealAssumption</code></p>

```typescript signature
extendedRealAssumption(value: ExpressionLike): AssumptionProposition
```

</details>

## finiteAssumption

<a id="entry-presentation_wasm_polynomials_capability_algebra_finite_assumption_api_session_finite_assumption"></a>
<a id="placement-placement.wasm.javascript_facade.context_finiteassumption.53a61f54e11a"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
finiteAssumption(value: ExpressionLike): AssumptionProposition
```

Build a finiteness proposition for a scalar expression.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_finiteassumption.d74e89873ec3"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.finiteAssumption</code></p>

```typescript signature
finiteAssumption(value: ExpressionLike): AssumptionProposition
```

</details>

## free

<a id="entry-presentation_wasm_polynomials_capability_algebra_free_unresolved"></a>
<a id="placement-placement.wasm.javascript_facade.expression_free.04d9e93ee17b"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
free(): void
```

Public method placement for free.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.assumptionproposition_free.3aac53fe6166"></a>
<p class="symi-entry-owner">AssumptionProposition method: <code>AssumptionProposition.free</code></p>

```typescript signature
free(): void
```

<a id="placement-placement.wasm.javascript_facade.assumptionscope_free.0065977a775c"></a>
<p class="symi-entry-owner">AssumptionScope method: <code>AssumptionScope.free</code></p>

```typescript signature
free(): void
```

<a id="placement-placement.wasm.javascript_facade.matrix_free.26db4cf3b6c5"></a>
<p class="symi-entry-owner">Matrix method: <code>Matrix.free</code></p>

```typescript signature
free(): void
```

</details>

## freeRank

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_free_rank_api_results_integercokerneldata_free_rank"></a>
<a id="placement-placement.wasm.wasm_class.integercokerneldata_freerank.58e60eaffcc6"></a>
<p class="symi-entry-owner">IntegerCokernelData property</p>

```typescript signature
readonly freeRank: number
```

Rank of the free part of the cokernel.

## fullRankMatrix

<a id="entry-presentation_wasm_polynomials_capability_algebra_full_rank_matrix_api_session_full_rank_matrix"></a>
<a id="placement-placement.wasm.javascript_facade.context_fullrankmatrix.9ea5686dda2d"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
fullRankMatrix(value: Matrix): AssumptionProposition
```

Build a full-rank-matrix proposition.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_fullrankmatrix.661d3f99feb1"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.fullRankMatrix</code></p>

```typescript signature
fullRankMatrix(value: Matrix): AssumptionProposition
```

</details>

## greaterAssumption

<a id="entry-presentation_wasm_polynomials_capability_algebra_greater_assumption_api_defaults_session_greater_assumption"></a>
<a id="placement-placement.wasm.javascript_facade.context_greaterassumption.b5c7e745dc87"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
greaterAssumption(left: ExpressionLike, right: ExpressionLike): AssumptionProposition
```

Build a strict scalar-order proposition with reversed operands.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_greaterassumption.5d34c5df780d"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.greaterAssumption</code></p>

```typescript signature
greaterAssumption(left: ExpressionLike, right: ExpressionLike): AssumptionProposition
```

</details>

## greaterOrEqualAssumption

<a id="entry-presentation_wasm_polynomials_capability_algebra_greater_or_equal_assumption_api_defaults_session_greater_or_equal_assumption"></a>
<a id="placement-placement.wasm.javascript_facade.context_greaterorequalassumption.533a8f9c54be"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
greaterOrEqualAssumption(left: ExpressionLike, right: ExpressionLike): AssumptionProposition
```

Build a non-strict scalar-order proposition with reversed operands.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_greaterorequalassumption.71bfbd4b9653"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.greaterOrEqualAssumption</code></p>

```typescript signature
greaterOrEqualAssumption(left: ExpressionLike, right: ExpressionLike): AssumptionProposition
```

</details>

## groebnerBasis

<a id="entry-presentation_wasm_polynomials_capability_algebra_groebner_basis_api_algebra_session_groebner_basis"></a>
<a id="placement-placement.wasm.wasm_module.module_groebnerbasis.5de4c9b11109"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
groebnerBasis(
    generators: Expression[],
    variables: string[],
    order?: string | null,
): Expression[] | undefined
```

The canonical reduced Gröbner basis of the ideal `<generators>` under the named monomial order — monic, autoreduced, and sorted, so it is unique for the `(ideal, order)` pair. `None` when any generator is outside \(\mathbb{Q}[\text{variables}]\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_groebnerbasis.888872534bf7"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.groebnerBasis</code></p>

```typescript signature
groebnerBasis(
    generators: Expression[],
    variables: string[],
    order?: string | null,
): Expression[] | undefined
```

</details>

## hasComplexEntries

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_has_complex_entries_api_matrix_has_complex_entries"></a>
<a id="placement-placement.wasm.wasm_class.matrix_hascomplexentries.fc89a0fa64ba"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
hasComplexEntries(): boolean | undefined
```

Query whether every entry is finite complex.

## hasComplexEntries

<a id="entry-presentation_wasm_polynomials_capability_algebra_has_complex_entries_api_matrix_has_complex_entries"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_hascomplexentries.e62108844da5"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
hasComplexEntries(): boolean | null
```

Query whether every entry is finite complex.

## hasIntegerEntries

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_has_integer_entries_api_matrix_has_integer_entries"></a>
<a id="placement-placement.wasm.wasm_class.matrix_hasintegerentries.c6f9d9a6c203"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
hasIntegerEntries(): boolean | undefined
```

Query whether every entry is an integer.

## hasIntegerEntries

<a id="entry-presentation_wasm_polynomials_capability_algebra_has_integer_entries_api_matrix_has_integer_entries"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_hasintegerentries.2146ac2809b2"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
hasIntegerEntries(): boolean | null
```

Query whether every entry is an integer.

## hasRealEntries

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_has_real_entries_api_matrix_has_real_entries"></a>
<a id="placement-placement.wasm.wasm_class.matrix_hasrealentries.bfd277113306"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
hasRealEntries(): boolean | undefined
```

Query whether every entry is real.

## hasRealEntries

<a id="entry-presentation_wasm_polynomials_capability_algebra_has_real_entries_api_matrix_has_real_entries"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_hasrealentries.b42db7a5a2d1"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
hasRealEntries(): boolean | null
```

Query whether every entry is real.

## hermite

<a id="entry-presentation_wasm_matrix_canonical_forms_capability_algebra_hermite_api_results_hermitenormalformdecomposition_hermite"></a>
<a id="placement-placement.wasm.wasm_class.hermitenormalformdecomposition_hermite.f2a2b5ea8b10"></a>
<p class="symi-entry-owner">HermiteNormalFormDecomposition property</p>

```typescript signature
readonly hermite: Matrix
```

The Hermite normal form `H`.

## hermiteNormalForm

<a id="entry-presentation_wasm_matrix_canonical_forms_capability_algebra_hermite_normal_form_api_matrix_operations_matrix_hermite_normal_form"></a>
<a id="placement-placement.wasm.wasm_class.matrix_hermitenormalform.5ca2e19e0780"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
hermiteNormalForm(): HermiteNormalFormDecomposition
```

Returns the canonical row-oriented Hermite normal form `H`, a unimodular transformation `U` satisfying \(U M = H\), the rank, and the strictly increasing pivot-column indices. Entries must be exact integers. Every result is verified for Hermite shape, the certificate identity, and unimodularity before return. Notes: WASM returns a `hermite_normal_form_decomposition` object carrying the same four results as getters.

## hermitianMatrix

<a id="entry-presentation_wasm_polynomials_capability_algebra_hermitian_matrix_api_session_hermitian_matrix"></a>
<a id="placement-placement.wasm.javascript_facade.context_hermitianmatrix.b40f37562f34"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
hermitianMatrix(value: Matrix): AssumptionProposition
```

Build a Hermitian-matrix proposition.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_hermitianmatrix.75fe3584e710"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.hermitianMatrix</code></p>

```typescript signature
hermitianMatrix(value: Matrix): AssumptionProposition
```

</details>

## hint

<a id="entry-presentation_wasm_polynomials_capability_algebra_hint_unresolved"></a>
<a id="placement-placement.wasm.javascript_facade.symierror_hint.dc290abb816b"></a>
<p class="symi-entry-owner">SymiError property</p>

```typescript signature
readonly hint: string | null
```

Public property placement for hint.

## hyperbolicCosine

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_hyperbolic_cosine_api_matrix_operations_matrix_hyperbolic_cosine"></a>
<a id="placement-placement.wasm.wasm_class.matrix_hyperboliccosine.9883f6ac95ea"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
hyperbolicCosine(): Matrix
```

The primary hyperbolic matrix cosine `cosh(M)`, evaluated exactly through the certified Jordan decomposition and the hyperbolic identity certificate.

## hyperbolicSine

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_hyperbolic_sine_api_matrix_operations_matrix_hyperbolic_sine"></a>
<a id="placement-placement.wasm.wasm_class.matrix_hyperbolicsine.8c14f73a4915"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
hyperbolicSine(): Matrix
```

The primary hyperbolic matrix sine `sinh(M)`, evaluated exactly through the certified Jordan decomposition. The result is certified together with the hyperbolic matrix cosine by `cosh(M)^2 - sinh(M)^2 = I`.

## idealIntersection

<a id="entry-presentation_wasm_polynomials_capability_algebra_ideal_intersection_api_algebra_session_ideal_intersection"></a>
<a id="placement-placement.wasm.wasm_module.module_idealintersection.6e49de3034aa"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
idealIntersection(
    generators_left: Expression[],
    generators_right: Expression[],
    variables: string[],
    order?: string | null,
): Expression[] | undefined
```

A generating set of the ideal intersection \(I \cap J\), computed by the standard tag-variable elimination construction \(t I + (1-t) J\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_idealintersection.acbee9138efd"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.idealIntersection</code></p>

```typescript signature
idealIntersection(
    generators_left: Expression[],
    generators_right: Expression[],
    variables: string[],
    order?: string | null,
): Expression[] | undefined
```

</details>

## idealMembership

<a id="entry-presentation_wasm_polynomials_capability_algebra_ideal_membership_api_algebra_session_ideal_membership"></a>
<a id="placement-placement.wasm.wasm_module.module_idealmembership.c719b9f17e53"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
idealMembership(
    element: Expression,
    generators: Expression[],
    variables: string[],
    order?: string | null,
): boolean | undefined
```

Whether `element` lies in the ideal `<generators>`, decided by reducing it to its normal form modulo the Gröbner basis (zero exactly when it is a member).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_idealmembership.c32c85f3e675"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.idealMembership</code></p>

```typescript signature
idealMembership(
    element: Expression,
    generators: Expression[],
    variables: string[],
    order?: string | null,
): boolean | undefined
```

</details>

## idealProduct

<a id="entry-presentation_wasm_polynomials_capability_algebra_ideal_product_api_algebra_session_ideal_product"></a>
<a id="placement-placement.wasm.wasm_module.module_idealproduct.fe3132e266f0"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
idealProduct(
    generators_left: Expression[],
    generators_right: Expression[],
    variables: string[],
    order?: string | null,
): Expression[] | undefined
```

A Gröbner basis of the ideal product \(I J\), generated by all pairwise products of the two generator lists. `None` on a non-\(\mathbb{Q}[\text{variables}]\) generator.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_idealproduct.a99fc7e4c6bf"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.idealProduct</code></p>

```typescript signature
idealProduct(
    generators_left: Expression[],
    generators_right: Expression[],
    variables: string[],
    order?: string | null,
): Expression[] | undefined
```

</details>

## idealSum

<a id="entry-presentation_wasm_polynomials_capability_algebra_ideal_sum_api_algebra_session_ideal_sum"></a>
<a id="placement-placement.wasm.wasm_module.module_idealsum.0fe68881ed36"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
idealSum(
    generators_left: Expression[],
    generators_right: Expression[],
    variables: string[],
    order?: string | null,
): Expression[] | undefined
```

A Gröbner basis of the ideal sum `I + J`, the ideal generated by the two generator lists together. `None` on a non-\(\mathbb{Q}[\text{variables}]\) generator.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_idealsum.cd86d2191b7e"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.idealSum</code></p>

```typescript signature
idealSum(
    generators_left: Expression[],
    generators_right: Expression[],
    variables: string[],
    order?: string | null,
): Expression[] | undefined
```

</details>

## identityMatrix

<a id="entry-presentation_wasm_polynomials_capability_algebra_identity_matrix_api_session_identity_matrix"></a>
<a id="placement-placement.wasm.javascript_facade.context_identitymatrix.a1cf6abb115b"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
identityMatrix(value: Matrix): AssumptionProposition
```

Build an identity-matrix proposition.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_identitymatrix.a0eea0b9ad1a"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.identityMatrix</code></p>

```typescript signature
identityMatrix(value: Matrix): AssumptionProposition
```

</details>

## implicitize

<a id="entry-presentation_wasm_polynomials_capability_algebra_implicitize_api_algebra_session_implicitize"></a>
<a id="placement-placement.wasm.wasm_module.module_implicitize.a997715b9750"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
implicitize(
    coordinates: string[],
    parameters: string[],
    parametric_expressions: Expression[],
): Expression[] | undefined
```

The implicit ideal of a parametric curve or surface \(x_i = f_i(\operatorname{parameters})\) (the i-th coordinate paired with the i-th parametric Expression), returned as a generator list over \(\mathbb{Q}[\text{coordinates}]\) — the elimination of the parameters (Cox–Little–O'Shea ch. 3).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_implicitize.05ec5f6bd5e5"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.implicitize</code></p>

```typescript signature
implicitize(
    coordinates: string[],
    parameters: string[],
    parametric_expressions: Expression[],
): Expression[] | undefined
```

</details>

## infiniteAssumption

<a id="entry-presentation_wasm_polynomials_capability_algebra_infinite_assumption_api_session_infinite_assumption"></a>
<a id="placement-placement.wasm.javascript_facade.context_infiniteassumption.1f8d8206b5d4"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
infiniteAssumption(value: ExpressionLike): AssumptionProposition
```

Build an infinity proposition for a scalar expression.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_infiniteassumption.c08c0dd8e0f7"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.infiniteAssumption</code></p>

```typescript signature
infiniteAssumption(value: ExpressionLike): AssumptionProposition
```

</details>

## integerAssumption

<a id="entry-presentation_wasm_polynomials_capability_algebra_integer_assumption_api_session_integer_assumption"></a>
<a id="placement-placement.wasm.javascript_facade.context_integerassumption.cf3033b261f3"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
integerAssumption(value: ExpressionLike): AssumptionProposition
```

Build an integer proposition for a scalar expression.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_integerassumption.8d164e5dcee5"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.integerAssumption</code></p>

```typescript signature
integerAssumption(value: ExpressionLike): AssumptionProposition
```

</details>

## integerCokernelStructure

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_integer_cokernel_structure_api_matrix_operations_matrix_integer_cokernel_structure"></a>
<a id="placement-placement.wasm.wasm_class.matrix_integercokernelstructure.6531796e2d45"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
integerCokernelStructure(): IntegerCokernelData
```

Returns the free rank and nontrivial torsion invariant factors of `Z^m / M Z^n`.

## integerEntries

<a id="entry-presentation_wasm_polynomials_capability_algebra_integer_entries_api_session_integer_entries"></a>
<a id="placement-placement.wasm.javascript_facade.context_integerentries.1bfe48d4d7e5"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
integerEntries(value: Matrix): AssumptionProposition
```

Build an integer-entry proposition.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_integerentries.177ca0ebd539"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.integerEntries</code></p>

```typescript signature
integerEntries(value: Matrix): AssumptionProposition
```

</details>

## integerImageLatticeBasis

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_integer_image_lattice_basis_api_matrix_operations_matrix_integer_image_lattice_basis"></a>
<a id="placement-placement.wasm.wasm_class.matrix_integerimagelatticebasis.5e205115c515"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
integerImageLatticeBasis(): Matrix[]
```

The nonzero columns of the column Hermite form, returned as column matrices; these form the canonical basis of `M Z^n`.

## integerKernelBasis

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_integer_kernel_basis_api_matrix_operations_matrix_integer_kernel_basis"></a>
<a id="placement-placement.wasm.wasm_class.matrix_integerkernelbasis.01cee525f219"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
integerKernelBasis(): Matrix[]
```

A canonical basis of the integer kernel \(\{x \in \mathbb{Z}^n : M x = 0\}\), returned as column matrices.

## integerRowLatticeBasis

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_integer_row_lattice_basis_api_matrix_operations_matrix_integer_row_lattice_basis"></a>
<a id="placement-placement.wasm.wasm_class.matrix_integerrowlatticebasis.81f8585c2e8d"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
integerRowLatticeBasis(): Matrix[]
```

The nonzero rows of the row Hermite form, returned as row matrices; these form the canonical basis of the integer row lattice.

## invariantFactors

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_invariant_factors_api_results_rationalcanonicalform_invariant_factors"></a>
<a id="placement-placement.wasm.wasm_class.rationalcanonicalform_invariantfactors.ab13f6a73bd5"></a>
<p class="symi-entry-owner">RationalCanonicalForm property</p>

```typescript signature
readonly invariantFactors: Expression[]
```

The certified invariant factors, monic and ordered by divisibility.

## invariantFactors

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_invariant_factors_api_results_smithnormalformdecomposition_invariant_factors"></a>
<a id="placement-placement.wasm.wasm_class.smithnormalformdecomposition_invariantfactors.429da175d3de"></a>
<p class="symi-entry-owner">SmithNormalFormDecomposition property</p>

```typescript signature
readonly invariantFactors: Expression[]
```

The certified invariant factors, monic and ordered by divisibility.

## inverse

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_inverse_api_matrix_inverse"></a>
<a id="placement-placement.wasm.wasm_class.matrix_inverse.b9c203ead0bb"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
inverse(): Matrix
```

Inverse via the adjugate; raises on singular input.

## invertibleMatrix

<a id="entry-presentation_wasm_polynomials_capability_algebra_invertible_matrix_api_session_invertible_matrix"></a>
<a id="placement-placement.wasm.javascript_facade.context_invertiblematrix.3f2a5f363550"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
invertibleMatrix(value: Matrix): AssumptionProposition
```

Build an invertible-matrix proposition.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_invertiblematrix.2a836dfb9d2c"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.invertibleMatrix</code></p>

```typescript signature
invertibleMatrix(value: Matrix): AssumptionProposition
```

</details>

## irrationalAssumption

<a id="entry-presentation_wasm_polynomials_capability_algebra_irrational_assumption_api_session_irrational_assumption"></a>
<a id="placement-placement.wasm.javascript_facade.context_irrationalassumption.55887270e7fd"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
irrationalAssumption(value: ExpressionLike): AssumptionProposition
```

Build an irrationality proposition for a scalar expression.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_irrationalassumption.cb191b491b47"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.irrationalAssumption</code></p>

```typescript signature
irrationalAssumption(value: ExpressionLike): AssumptionProposition
```

</details>

## isAlgebraic

<a id="entry-presentation_wasm_polynomials_capability_algebra_is_algebraic_api_expression_is_algebraic"></a>
<a id="placement-placement.wasm.javascript_facade.expression_isalgebraic.166881d40821"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isAlgebraic(): boolean | null
```

Whether the expression is known to be algebraic.

## isComplex

<a id="entry-presentation_wasm_polynomials_capability_algebra_is_complex_api_expression_is_complex"></a>
<a id="placement-placement.wasm.javascript_facade.expression_iscomplex.cf239ae130b6"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isComplex(): boolean | null
```

Whether the expression is known to be finite complex.

## isComposite

<a id="entry-presentation_wasm_polynomials_capability_algebra_is_composite_api_expression_is_composite"></a>
<a id="placement-placement.wasm.javascript_facade.expression_iscomposite.acede8711f42"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isComposite(): boolean | null
```

Whether the expression is known to be composite.

## isDiagonalMatrix

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_is_diagonal_matrix_api_matrix_is_diagonal_matrix"></a>
<a id="placement-placement.wasm.wasm_class.matrix_isdiagonalmatrix.71327370540b"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isDiagonalMatrix(): boolean | undefined
```

Query whether this matrix is diagonal.

## isDiagonalMatrix

<a id="entry-presentation_wasm_polynomials_capability_algebra_is_diagonal_matrix_api_matrix_is_diagonal_matrix"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_isdiagonalmatrix.415747dbf667"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isDiagonalMatrix(): boolean | null
```

Query whether this matrix is diagonal.

## isEven

<a id="entry-presentation_wasm_polynomials_capability_algebra_is_even_api_expression_is_even"></a>
<a id="placement-placement.wasm.javascript_facade.expression_iseven.c8395efaf78a"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isEven(): boolean | null
```

Whether the expression is known to be even.

## isExtendedReal

<a id="entry-presentation_wasm_polynomials_capability_algebra_is_extended_real_api_expression_is_extended_real"></a>
<a id="placement-placement.wasm.javascript_facade.expression_isextendedreal.8b90e63c733a"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isExtendedReal(): boolean | null
```

Whether the expression is known to be extended-real.

## isFullRankMatrix

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_is_full_rank_matrix_api_matrix_is_full_rank_matrix"></a>
<a id="placement-placement.wasm.wasm_class.matrix_isfullrankmatrix.5bbfcbc6c1e0"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isFullRankMatrix(): boolean | undefined
```

Query whether this matrix has full rank.

## isFullRankMatrix

<a id="entry-presentation_wasm_polynomials_capability_algebra_is_full_rank_matrix_api_matrix_is_full_rank_matrix"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_isfullrankmatrix.c1348883d7c3"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isFullRankMatrix(): boolean | null
```

Query whether this matrix has full rank.

## isHermitianMatrix

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_is_hermitian_matrix_api_matrix_is_hermitian_matrix"></a>
<a id="placement-placement.wasm.wasm_class.matrix_ishermitianmatrix.1cb5739b20b5"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isHermitianMatrix(): boolean | undefined
```

Query whether this matrix is Hermitian.

## isHermitianMatrix

<a id="entry-presentation_wasm_polynomials_capability_algebra_is_hermitian_matrix_api_matrix_is_hermitian_matrix"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_ishermitianmatrix.5c0a1b02c764"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isHermitianMatrix(): boolean | null
```

Query whether this matrix is Hermitian.

## isIdentityMatrix

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_is_identity_matrix_api_matrix_is_identity_matrix"></a>
<a id="placement-placement.wasm.wasm_class.matrix_isidentitymatrix.9ff399f20293"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isIdentityMatrix(): boolean | undefined
```

Query whether this matrix is the identity matrix.

## isIdentityMatrix

<a id="entry-presentation_wasm_polynomials_capability_algebra_is_identity_matrix_api_matrix_is_identity_matrix"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_isidentitymatrix.cae24290fdfb"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isIdentityMatrix(): boolean | null
```

Query whether this matrix is the identity matrix.

## isInfinite

<a id="entry-presentation_wasm_polynomials_capability_algebra_is_infinite_api_expression_is_infinite"></a>
<a id="placement-placement.wasm.javascript_facade.expression_isinfinite.baee2508c4d8"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isInfinite(): boolean | null
```

Whether the expression is known to be infinite.

## isInvertibleMatrix

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_is_invertible_matrix_api_matrix_is_invertible_matrix"></a>
<a id="placement-placement.wasm.wasm_class.matrix_isinvertiblematrix.6352f593e5f7"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isInvertibleMatrix(): boolean | undefined
```

Query whether this matrix is invertible.

## isInvertibleMatrix

<a id="entry-presentation_wasm_polynomials_capability_algebra_is_invertible_matrix_api_matrix_is_invertible_matrix"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_isinvertiblematrix.505c014c37f1"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isInvertibleMatrix(): boolean | null
```

Query whether this matrix is invertible.

## isIrrational

<a id="entry-presentation_wasm_polynomials_capability_algebra_is_irrational_api_expression_is_irrational"></a>
<a id="placement-placement.wasm.javascript_facade.expression_isirrational.f90590ac06dc"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isIrrational(): boolean | null
```

Whether the expression is known to be irrational.

## isNatural

<a id="entry-presentation_wasm_polynomials_capability_algebra_is_natural_api_expression_is_natural"></a>
<a id="placement-placement.wasm.javascript_facade.expression_isnatural.c7d8ac466cd4"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isNatural(): boolean | null
```

Whether the expression is known to be natural.

## isNonpositive

<a id="entry-presentation_wasm_polynomials_capability_algebra_is_nonpositive_api_expression_is_nonpositive"></a>
<a id="placement-placement.wasm.javascript_facade.expression_isnonpositive.15bf64f03f4c"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isNonpositive(): boolean | null
```

Whether the expression is known to be nonpositive.

## isNormalMatrix

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_is_normal_matrix_api_matrix_is_normal_matrix"></a>
<a id="placement-placement.wasm.wasm_class.matrix_isnormalmatrix.3db937ca961a"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isNormalMatrix(): boolean | undefined
```

Query whether this matrix is normal.

## isNormalMatrix

<a id="entry-presentation_wasm_polynomials_capability_algebra_is_normal_matrix_api_matrix_is_normal_matrix"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_isnormalmatrix.98b51d7166e5"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isNormalMatrix(): boolean | null
```

Query whether this matrix is normal.

## isOdd

<a id="entry-presentation_wasm_polynomials_capability_algebra_is_odd_api_expression_is_odd"></a>
<a id="placement-placement.wasm.javascript_facade.expression_isodd.9cef0c32b06d"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isOdd(): boolean | null
```

Whether the expression is known to be odd.

## isOrthogonalMatrix

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_is_orthogonal_matrix_api_matrix_is_orthogonal_matrix"></a>
<a id="placement-placement.wasm.wasm_class.matrix_isorthogonalmatrix.d6a1f86db429"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isOrthogonalMatrix(): boolean | undefined
```

Query whether this matrix is orthogonal.

## isOrthogonalMatrix

<a id="entry-presentation_wasm_polynomials_capability_algebra_is_orthogonal_matrix_api_matrix_is_orthogonal_matrix"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_isorthogonalmatrix.eda747c0fc34"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isOrthogonalMatrix(): boolean | null
```

Query whether this matrix is orthogonal.

## isPositiveDefiniteMatrix

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_is_positive_definite_matrix_api_matrix_is_positive_definite_matrix"></a>
<a id="placement-placement.wasm.wasm_class.matrix_ispositivedefinitematrix.6bcc9f90fd7c"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isPositiveDefiniteMatrix(): boolean | undefined
```

Query whether this matrix is positive definite.

## isPositiveDefiniteMatrix

<a id="entry-presentation_wasm_polynomials_capability_algebra_is_positive_definite_matrix_api_matrix_is_positive_definite_matrix"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_ispositivedefinitematrix.e2669501e27d"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isPositiveDefiniteMatrix(): boolean | null
```

Query whether this matrix is positive definite.

## isPositiveInteger

<a id="entry-presentation_wasm_polynomials_capability_algebra_is_positive_integer_api_expression_is_positive_integer"></a>
<a id="placement-placement.wasm.javascript_facade.expression_ispositiveinteger.d958deb107ee"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isPositiveInteger(): boolean | null
```

Whether the expression is known to be a positive integer.

## isPositiveSemidefiniteMatrix

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_is_positive_semidefinite_matrix_api_matrix_is_positive_semidefinite_matrix"></a>
<a id="placement-placement.wasm.wasm_class.matrix_ispositivesemidefinitematrix.3397ae9b1bcd"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isPositiveSemidefiniteMatrix(): boolean | undefined
```

Query whether this matrix is positive semidefinite.

## isPositiveSemidefiniteMatrix

<a id="entry-presentation_wasm_polynomials_capability_algebra_is_positive_semidefinite_matrix_api_matrix_is_positive_semidefinite_matrix"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_ispositivesemidefinitematrix.772c2ae7ee0e"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isPositiveSemidefiniteMatrix(): boolean | null
```

Query whether this matrix is positive semidefinite.

## isSingularMatrix

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_is_singular_matrix_api_matrix_is_singular_matrix"></a>
<a id="placement-placement.wasm.wasm_class.matrix_issingularmatrix.06b2135448ac"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isSingularMatrix(): boolean | undefined
```

Query whether this matrix is singular.

## isSingularMatrix

<a id="entry-presentation_wasm_polynomials_capability_algebra_is_singular_matrix_api_matrix_is_singular_matrix"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_issingularmatrix.873fe293b8c3"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isSingularMatrix(): boolean | null
```

Query whether this matrix is singular.

## isSquare

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_is_square_api_matrix_is_square"></a>
<a id="placement-placement.wasm.wasm_class.matrix_issquare.24b993354b1d"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isSquare(): boolean | undefined
```

Query whether this matrix is square.

## isSquare

<a id="entry-presentation_wasm_polynomials_capability_algebra_is_square_api_matrix_is_square"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_issquare.efcc71c65d6c"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isSquare(): boolean | null
```

Query whether this matrix is square.

## isSymmetricMatrix

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_is_symmetric_matrix_api_matrix_is_symmetric_matrix"></a>
<a id="placement-placement.wasm.wasm_class.matrix_issymmetricmatrix.90f4b9ccfa27"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isSymmetricMatrix(): boolean | undefined
```

Query whether this matrix is symmetric.

## isSymmetricMatrix

<a id="entry-presentation_wasm_polynomials_capability_algebra_is_symmetric_matrix_api_matrix_is_symmetric_matrix"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_issymmetricmatrix.c48f740a1f98"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isSymmetricMatrix(): boolean | null
```

Query whether this matrix is symmetric.

## isTranscendental

<a id="entry-presentation_wasm_polynomials_capability_algebra_is_transcendental_api_expression_is_transcendental"></a>
<a id="placement-placement.wasm.javascript_facade.expression_istranscendental.54d40bab7088"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isTranscendental(): boolean | null
```

Whether the expression is known to be transcendental.

## isUnitaryMatrix

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_is_unitary_matrix_api_matrix_is_unitary_matrix"></a>
<a id="placement-placement.wasm.wasm_class.matrix_isunitarymatrix.c6089d647a19"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isUnitaryMatrix(): boolean | undefined
```

Query whether this matrix is unitary.

## isUnitaryMatrix

<a id="entry-presentation_wasm_polynomials_capability_algebra_is_unitary_matrix_api_matrix_is_unitary_matrix"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_isunitarymatrix.53b189737152"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isUnitaryMatrix(): boolean | null
```

Query whether this matrix is unitary.

## isZero

<a id="entry-presentation_wasm_polynomials_capability_algebra_is_zero_api_expression_is_zero"></a>
<a id="placement-placement.wasm.javascript_facade.expression_iszero.4743ee8492f4"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isZero(): boolean | null
```

Whether the expression is known to be zero.

## isZeroMatrix

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_is_zero_matrix_api_matrix_is_zero_matrix"></a>
<a id="placement-placement.wasm.wasm_class.matrix_iszeromatrix.5f52a26d7e19"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isZeroMatrix(): boolean | undefined
```

Query whether this matrix is the zero matrix.

## isZeroMatrix

<a id="entry-presentation_wasm_polynomials_capability_algebra_is_zero_matrix_api_matrix_is_zero_matrix"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_iszeromatrix.311afbe0ef29"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isZeroMatrix(): boolean | null
```

Query whether this matrix is the zero matrix.

## isolateRealRoots

<a id="entry-presentation_wasm_polynomials_capability_algebra_isolate_real_roots_api_solving_session_isolate_real_roots"></a>
<a id="placement-placement.wasm.wasm_module.module_isolaterealroots.fdc9ee498713"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
isolateRealRoots(
    input_expression: Expression,
    variable: string,
): IsolatingInterval[]
```

One `(lower, upper)` rational isolating interval per distinct real root, sorted ascending; a collapsed pair `(r, r)` marks an exact rational root. Requires a non-zero univariate polynomial with rational coefficients. Notes: WASM returns `isolating_interval` objects with `lower`/`upper` getters.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_isolaterealroots.67ba1eadfe31"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.isolateRealRoots</code></p>

```typescript signature
isolateRealRoots(
    input_expression: Expression,
    variable: string,
): IsolatingInterval[]
```

</details>

## jordanDecomposition

<a id="entry-presentation_wasm_matrix_functions_capability_algebra_jordan_decomposition_api_matrix_operations_matrix_jordan_decomposition"></a>
<a id="placement-placement.wasm.wasm_class.matrix_jordandecomposition.5ed7e5466201"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
jordanDecomposition(): JordanDecomposition
```

The Jordan decomposition returned as `(similarity, jordan_form, blocks)` with \(\operatorname{similarity} \operatorname{jordan\_form} \operatorname{similarity}^{-1} = M\), where `blocks` lists each Jordan block as an `(eigenvalue, size)` pair. Every root is certified over an exact algebraic field. Notes: WASM returns a `jordan_decomposition` result class with `similarity`/`jordan_form`/`blocks` getters, each block a `jordan_block` with `eigenvalue`/`size` getters.

## jordanForm

<a id="entry-presentation_wasm_matrix_functions_capability_algebra_jordan_form_api_results_jordandecomposition_jordan_form"></a>
<a id="placement-placement.wasm.wasm_class.jordandecomposition_jordanform.1ae72807329f"></a>
<p class="symi-entry-owner">JordanDecomposition property</p>

```typescript signature
readonly jordanForm: Matrix
```

The Jordan form `J` of the decomposed matrix.

## leadingCoefficient

<a id="entry-presentation_wasm_polynomials_capability_algebra_leading_coefficient_api_algebra_session_leading_coefficient"></a>
<a id="placement-placement.wasm.wasm_module.module_leadingcoefficient.612cd4c6aaf2"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
leadingCoefficient(
    input_expression: Expression,
    variable: string,
): Expression
```

Coefficient of the highest power of `variable`; may contain the other free variables. Errors on non-polynomial or zero input.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_leadingcoefficient.fa8ae548276b"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.leadingCoefficient</code></p>

```typescript signature
leadingCoefficient(
    input_expression: Expression,
    variable: string,
): Expression
```

</details>

## leftOperand

<a id="entry-presentation_wasm_polynomials_capability_algebra_left_operand_api_assumptionproposition_left_operand"></a>
<a id="placement-placement.wasm.javascript_facade.assumptionproposition_leftoperand.1cd6f2d84196"></a>
<p class="symi-entry-owner">AssumptionProposition method</p>

```typescript signature
leftOperand(): Expression | null
```

Return the left relation or congruence operand when present.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_leftoperand.7b6a1f8eac18"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.leftOperand</code></p>

```typescript signature
leftOperand(proposition: AssumptionProposition): Expression | null
```

</details>

## lessAssumption

<a id="entry-presentation_wasm_polynomials_capability_algebra_less_assumption_api_defaults_session_less_assumption"></a>
<a id="placement-placement.wasm.javascript_facade.context_lessassumption.c8f4215c1aeb"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
lessAssumption(left: ExpressionLike, right: ExpressionLike): AssumptionProposition
```

Build a strict scalar-order proposition.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_lessassumption.208b6241d635"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.lessAssumption</code></p>

```typescript signature
lessAssumption(left: ExpressionLike, right: ExpressionLike): AssumptionProposition
```

</details>

## lessOrEqualAssumption

<a id="entry-presentation_wasm_polynomials_capability_algebra_less_or_equal_assumption_api_defaults_session_less_or_equal_assumption"></a>
<a id="placement-placement.wasm.javascript_facade.context_lessorequalassumption.54b87c34ad81"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
lessOrEqualAssumption(left: ExpressionLike, right: ExpressionLike): AssumptionProposition
```

Build a non-strict scalar-order proposition.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_lessorequalassumption.9a7358375559"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.lessOrEqualAssumption</code></p>

```typescript signature
lessOrEqualAssumption(left: ExpressionLike, right: ExpressionLike): AssumptionProposition
```

</details>

## logarithm

<a id="entry-presentation_wasm_matrix_functions_capability_algebra_logarithm_api_matrix_operations_matrix_logarithm"></a>
<a id="placement-placement.wasm.wasm_class.matrix_logarithm.2fe62d179d7e"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
logarithm(): Matrix
```

The principal matrix logarithm `log(M)`.

## lower

<a id="entry-presentation_wasm_polynomials_capability_algebra_lower_api_results_isolatinginterval_lower"></a>
<a id="placement-placement.wasm.wasm_class.isolatinginterval_lower.fbc0bf3f0386"></a>
<p class="symi-entry-owner">IsolatingInterval property</p>

```typescript signature
readonly lower: Expression
```

Lower endpoint of the isolating interval.

## lowerTriangularMatrix

<a id="entry-presentation_wasm_polynomials_capability_algebra_lower_triangular_matrix_api_session_lower_triangular_matrix"></a>
<a id="placement-placement.wasm.javascript_facade.context_lowertriangularmatrix.f6b8f881e801"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
lowerTriangularMatrix(value: Matrix): AssumptionProposition
```

Build a lower-triangular-matrix proposition.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_lowertriangularmatrix.17896f244489"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.lowerTriangularMatrix</code></p>

```typescript signature
lowerTriangularMatrix(value: Matrix): AssumptionProposition
```

</details>

## lowerUpperDecomposition

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_lower_upper_decomposition_api_matrix_operations_matrix_lower_upper_decomposition"></a>
<a id="placement-placement.wasm.wasm_class.matrix_lowerupperdecomposition.49bcf14289a6"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
lowerUpperDecomposition(): Matrix[]
```

Partial-pivoting LU decomposition returned as `(permutation, lower, upper)` with \(\operatorname{permutation} M = \operatorname{lower}\,\operatorname{upper}\).

## matrix

<a id="entry-presentation_wasm_matrix_construction_capability_algebra_matrix_api_session_matrix"></a>
<a id="placement-placement.wasm.javascript_facade.context_matrix.31619139102f"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
matrix(rows: Iterable<Iterable<ExpressionLike>>): Matrix
```

Build a matrix from ordered rows. Direct Python construction and the facade module function use the shared default context. The raw wasm-bindgen compatibility layer retains `(rows, columns, flat_entries)`; new JavaScript code should use the nested facade form.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_matrix.6a9f56e8356c"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.matrix</code></p>

```typescript signature
matrix(rows: number, columns: number, entries: Expression[]): Matrix
```

<a id="placement-placement.wasm.javascript_facade.symifacade_matrix.e3d8245c690c"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.matrix</code></p>

```typescript signature
matrix(rows: Iterable<Iterable<ExpressionLike>>): Matrix
```

</details>

## matrix

<a id="entry-presentation_wasm_matrix_construction_capability_algebra_matrix_api_partial_differential_equations_partialdifferentialequationprincipalpart_matrix"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationprincipalpart_matrix.f4debc79ad6d"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPrincipalPart property</p>

```typescript signature
readonly matrix: Matrix
```

The symmetric principal matrix whose quadratic form is the exact principal symbol.

## matrixDiagonal

<a id="entry-presentation_wasm_polynomials_capability_algebra_matrix_diagonal_api_session_matrix_diagonal"></a>
<a id="placement-placement.wasm.wasm_module.module_matrixdiagonal.05ae03868956"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
matrixDiagonal(entries: Expression[]): Matrix
```

Square matrix with the given main diagonal and zeros elsewhere; the empty list raises.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_matrixdiagonal.dba54c60749f"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.matrixDiagonal</code></p>

```typescript signature
matrixDiagonal(entries: Expression[]): Matrix
```

</details>

## matrixIdentity

<a id="entry-presentation_wasm_polynomials_capability_algebra_matrix_identity_api_session_matrix_identity"></a>
<a id="placement-placement.wasm.wasm_module.module_matrixidentity.80b062f41bf7"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
matrixIdentity(size: number): Matrix
```

The \(\mathit{size}\times\mathit{size}\) identity; size 0 raises.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_matrixidentity.843c4412d2b9"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.matrixIdentity</code></p>

```typescript signature
matrixIdentity(size: number): Matrix
```

</details>

## matrixShape

<a id="entry-presentation_wasm_polynomials_capability_algebra_matrix_shape_api_session_matrix_shape"></a>
<a id="placement-placement.wasm.javascript_facade.context_matrixshape.36881a4eaa96"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
matrixShape(value: Matrix, rows: number, columns: number): AssumptionProposition
```

Build a matrix shape proposition with positive dimensions.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_matrixshape.ba060181fcb1"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.matrixShape</code></p>

```typescript signature
matrixShape(value: Matrix, rows: number, columns: number): AssumptionProposition
```

</details>

## matrixZero

<a id="entry-presentation_wasm_polynomials_capability_algebra_matrix_zero_api_session_matrix_zero"></a>
<a id="placement-placement.wasm.wasm_module.module_matrixzero.47364d1ef8a0"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
matrixZero(rows: number, columns: number): Matrix
```

The \(\mathit{rows}\times\mathit{columns}\) zero matrix.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_matrixzero.3576687a68ef"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.matrixZero</code></p>

```typescript signature
matrixZero(rows: number, columns: number): Matrix
```

</details>

## memberAssumption

<a id="entry-presentation_wasm_polynomials_capability_algebra_member_assumption_api_defaults_session_member_assumption"></a>
<a id="placement-placement.wasm.javascript_facade.context_memberassumption.4bb9ab611722"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
memberAssumption(element: ExpressionLike, setExpression: ExpressionLike): AssumptionProposition
```

Build a scalar-membership proposition.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_memberassumption.faafe5efd4c4"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.memberAssumption</code></p>

```typescript signature
memberAssumption(element: ExpressionLike, setExpression: ExpressionLike): AssumptionProposition
```

</details>

## membershipElement

<a id="entry-presentation_wasm_polynomials_capability_algebra_membership_element_api_assumptionproposition_membership_element"></a>
<a id="placement-placement.wasm.javascript_facade.assumptionproposition_membershipelement.e669e2bb3843"></a>
<p class="symi-entry-owner">AssumptionProposition method</p>

```typescript signature
membershipElement(): Expression | null
```

Return the membership element when this proposition is one membership atom.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_membershipelement.0fc6fd43e584"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.membershipElement</code></p>

```typescript signature
membershipElement(proposition: AssumptionProposition): Expression | null
```

</details>

## membershipSet

<a id="entry-presentation_wasm_polynomials_capability_algebra_membership_set_api_assumptionproposition_membership_set"></a>
<a id="placement-placement.wasm.javascript_facade.assumptionproposition_membershipset.56fd05efb36b"></a>
<p class="symi-entry-owner">AssumptionProposition method</p>

```typescript signature
membershipSet(): Expression | null
```

Return the membership set when this proposition is one membership atom.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_membershipset.4cc3c059c77b"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.membershipSet</code></p>

```typescript signature
membershipSet(proposition: AssumptionProposition): Expression | null
```

</details>

## minimalPolynomial

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_minimal_polynomial_api_matrix_operations_matrix_minimal_polynomial"></a>
<a id="placement-placement.wasm.wasm_class.matrix_minimalpolynomial.404814deeca3"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
minimalPolynomial(variable: string): Expression
```

The monic minimal polynomial over the rationals. The matrix must have rational entries.

## minimalPolynomial

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_minimal_polynomial_api_results_rationalcanonicalform_minimal_polynomial"></a>
<a id="placement-placement.wasm.wasm_class.rationalcanonicalform_minimalpolynomial.78ee02aaf497"></a>
<p class="symi-entry-owner">RationalCanonicalForm property</p>

```typescript signature
readonly minimalPolynomial: Expression
```

The monic minimal polynomial over the rationals. The matrix must have rational entries.

## multiply

<a id="entry-presentation_wasm_polynomials_capability_algebra_multiply_api_expression_multiply"></a>
<a id="placement-placement.wasm.javascript_facade.expression_multiply.6129ea2e7a04"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
multiply(other: ExpressionLike): Expression
```

Product of this expression and `other`.

## multiply

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_multiply_api_matrix_multiply"></a>
<a id="placement-placement.wasm.wasm_class.matrix_multiply.ba14f611498e"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
multiply(other: Matrix): Matrix
```

Matrix product; inner dimensions must agree.

## multiply

<a id="entry-presentation_wasm_polynomials_capability_algebra_multiply_api_matrix_multiply"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_multiply.2820cc1c77f6"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
multiply(other: Matrix): Matrix
```

Matrix product; inner dimensions must agree.

## naturalAssumption

<a id="entry-presentation_wasm_polynomials_capability_algebra_natural_assumption_api_session_natural_assumption"></a>
<a id="placement-placement.wasm.javascript_facade.context_naturalassumption.19c46f121eb7"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
naturalAssumption(value: ExpressionLike): AssumptionProposition
```

Build a natural-number proposition for a scalar expression.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_naturalassumption.545c396a1a8a"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.naturalAssumption</code></p>

```typescript signature
naturalAssumption(value: ExpressionLike): AssumptionProposition
```

</details>

## negativeAssumption

<a id="entry-presentation_wasm_polynomials_capability_algebra_negative_assumption_api_session_negative_assumption"></a>
<a id="placement-placement.wasm.javascript_facade.context_negativeassumption.4f548122612d"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
negativeAssumption(value: ExpressionLike): AssumptionProposition
```

Build a strict-negativity proposition for a scalar expression.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_negativeassumption.a1faca33e449"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.negativeAssumption</code></p>

```typescript signature
negativeAssumption(value: ExpressionLike): AssumptionProposition
```

</details>

## new

<a id="entry-presentation_wasm_polynomials_capability_algebra_new_unresolved"></a>
<a id="placement-placement.wasm.javascript_facade.contextconstructor_new.0f9094d96686"></a>
<p class="symi-entry-owner">new constructor</p>

```typescript signature
new Context(): Context
```

Construct the CAD of the polynomials in the given variable order \(x_1,\ldots,x_n\); projection eliminates \(x_n\) first).

## nonnegativeAssumption

<a id="entry-presentation_wasm_polynomials_capability_algebra_nonnegative_assumption_api_session_nonnegative_assumption"></a>
<a id="placement-placement.wasm.javascript_facade.context_nonnegativeassumption.d5fe84f63a4f"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
nonnegativeAssumption(value: ExpressionLike): AssumptionProposition
```

Build the universe-guarded nonnegative proposition for a scalar expression.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_nonnegativeassumption.fc8db15a6f1a"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.nonnegativeAssumption</code></p>

```typescript signature
nonnegativeAssumption(value: ExpressionLike): AssumptionProposition
```

</details>

## nonpositiveAssumption

<a id="entry-presentation_wasm_polynomials_capability_algebra_nonpositive_assumption_api_session_nonpositive_assumption"></a>
<a id="placement-placement.wasm.javascript_facade.context_nonpositiveassumption.bbd2f123adaa"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
nonpositiveAssumption(value: ExpressionLike): AssumptionProposition
```

Build the universe-guarded nonpositive proposition for a scalar expression.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_nonpositiveassumption.48fdc398654b"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.nonpositiveAssumption</code></p>

```typescript signature
nonpositiveAssumption(value: ExpressionLike): AssumptionProposition
```

</details>

## nonzeroAssumption

<a id="entry-presentation_wasm_polynomials_capability_algebra_nonzero_assumption_api_session_nonzero_assumption"></a>
<a id="placement-placement.wasm.javascript_facade.context_nonzeroassumption.13c24e7f7a6e"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
nonzeroAssumption(value: ExpressionLike): AssumptionProposition
```

Build a nonzero proposition for a scalar expression.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_nonzeroassumption.dab21ea932d8"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.nonzeroAssumption</code></p>

```typescript signature
nonzeroAssumption(value: ExpressionLike): AssumptionProposition
```

</details>

## normalMatrix

<a id="entry-presentation_wasm_polynomials_capability_algebra_normal_matrix_api_session_normal_matrix"></a>
<a id="placement-placement.wasm.javascript_facade.context_normalmatrix.1dab2bd7e17a"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
normalMatrix(value: Matrix): AssumptionProposition
```

Build a normal-matrix proposition.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_normalmatrix.ab26f6537ccc"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.normalMatrix</code></p>

```typescript signature
normalMatrix(value: Matrix): AssumptionProposition
```

</details>

## not

<a id="entry-presentation_wasm_assumptions_capability_algebra_not_api_assumptionproposition_not"></a>
<a id="placement-placement.wasm.javascript_facade.assumptionproposition_not.5d5485850aaf"></a>
<p class="symi-entry-owner">AssumptionProposition method</p>

```typescript signature
not(): AssumptionProposition
```

Negate a proposition in canonical negation-normal form.

## notEqualAssumption

<a id="entry-presentation_wasm_polynomials_capability_algebra_not_equal_assumption_api_defaults_session_not_equal_assumption"></a>
<a id="placement-placement.wasm.javascript_facade.context_notequalassumption.67d2e7f5e08e"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
notEqualAssumption(left: ExpressionLike, right: ExpressionLike): AssumptionProposition
```

Build a disequality proposition between two scalar expressions.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_notequalassumption.7f22dc0529bc"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.notEqualAssumption</code></p>

```typescript signature
notEqualAssumption(left: ExpressionLike, right: ExpressionLike): AssumptionProposition
```

</details>

## nullspaceBasis

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_nullspace_basis_api_matrix_operations_matrix_nullspace_basis"></a>
<a id="placement-placement.wasm.wasm_class.matrix_nullspacebasis.3c29893c97be"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
nullspaceBasis(): Matrix[]
```

A basis of the kernel, as column matrices; empty list for full column rank.

## oddAssumption

<a id="entry-presentation_wasm_polynomials_capability_algebra_odd_assumption_api_session_odd_assumption"></a>
<a id="placement-placement.wasm.javascript_facade.context_oddassumption.4c7823e1efdb"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
oddAssumption(value: ExpressionLike): AssumptionProposition
```

Build an oddness proposition for a scalar expression.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_oddassumption.31a0bcf1ea66"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.oddAssumption</code></p>

```typescript signature
oddAssumption(value: ExpressionLike): AssumptionProposition
```

</details>

## operation

<a id="entry-presentation_wasm_polynomials_capability_algebra_operation_unresolved"></a>
<a id="placement-placement.wasm.javascript_facade.symierror_operation.27d0151a414d"></a>
<p class="symi-entry-owner">SymiError property</p>

```typescript signature
readonly operation: string | null
```

Public property placement for operation.

## or

<a id="entry-presentation_wasm_assumptions_capability_algebra_or_api_assumptionproposition_or"></a>
<a id="placement-placement.wasm.javascript_facade.assumptionproposition_or.68746ec790ae"></a>
<p class="symi-entry-owner">AssumptionProposition method</p>

```typescript signature
or(other: AssumptionProposition): AssumptionProposition
```

Disjoin two propositions.

## orthogonalMatrix

<a id="entry-presentation_wasm_polynomials_capability_algebra_orthogonal_matrix_api_session_orthogonal_matrix"></a>
<a id="placement-placement.wasm.javascript_facade.context_orthogonalmatrix.d64d9afbebcd"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
orthogonalMatrix(value: Matrix): AssumptionProposition
```

Build an orthogonal-matrix proposition.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_orthogonalmatrix.5479e2dfb83c"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.orthogonalMatrix</code></p>

```typescript signature
orthogonalMatrix(value: Matrix): AssumptionProposition
```

</details>

## parameterPath

<a id="entry-presentation_wasm_polynomials_capability_algebra_parameter_path_unresolved"></a>
<a id="placement-placement.wasm.javascript_facade.symierror_parameterpath.4560085cfcfd"></a>
<p class="symi-entry-owner">SymiError property</p>

```typescript signature
readonly parameterPath: string | null
```

Public property placement for parameterPath.

## pivotColumns

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_pivot_columns_api_results_hermitenormalformdecomposition_pivot_columns"></a>
<a id="placement-placement.wasm.wasm_class.hermitenormalformdecomposition_pivotcolumns.310dd3184c24"></a>
<p class="symi-entry-owner">HermiteNormalFormDecomposition property</p>

```typescript signature
readonly pivotColumns: Uint32Array
```

The `rank` getter reuses the matrix `rank` heading above.

## polynomialGcd

<a id="entry-presentation_wasm_polynomials_capability_algebra_polynomial_gcd_api_algebra_session_polynomial_gcd"></a>
<a id="placement-placement.wasm.wasm_module.module_polynomialgcd.5dff4635a3c4"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
polynomialGcd(
    a: Expression,
    b: Expression,
    variable: string,
): Expression
```

Greatest common divisor of the two expressions as polynomials in `variable` (primitive, with the core's sign normalisation).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_polynomialgcd.32c4a46fd180"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.polynomialGcd</code></p>

```typescript signature
polynomialGcd(
    a: Expression,
    b: Expression,
    variable: string,
): Expression
```

</details>

## positiveAssumption

<a id="entry-presentation_wasm_polynomials_capability_algebra_positive_assumption_api_session_positive_assumption"></a>
<a id="placement-placement.wasm.javascript_facade.context_positiveassumption.78c5b78a1489"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
positiveAssumption(value: ExpressionLike): AssumptionProposition
```

Build a strict-positivity proposition for a scalar expression.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_positiveassumption.88eeb1edfead"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.positiveAssumption</code></p>

```typescript signature
positiveAssumption(value: ExpressionLike): AssumptionProposition
```

</details>

## positiveDefiniteMatrix

<a id="entry-presentation_wasm_polynomials_capability_algebra_positive_definite_matrix_api_session_positive_definite_matrix"></a>
<a id="placement-placement.wasm.javascript_facade.context_positivedefinitematrix.7dbac73d84be"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
positiveDefiniteMatrix(value: Matrix): AssumptionProposition
```

Build a positive-definite-matrix proposition.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_positivedefinitematrix.5fa32eb988b6"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.positiveDefiniteMatrix</code></p>

```typescript signature
positiveDefiniteMatrix(value: Matrix): AssumptionProposition
```

</details>

## positiveIntegerAssumption

<a id="entry-presentation_wasm_polynomials_capability_algebra_positive_integer_assumption_api_session_positive_integer_assumption"></a>
<a id="placement-placement.wasm.javascript_facade.context_positiveintegerassumption.18b9666cbeb9"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
positiveIntegerAssumption(value: ExpressionLike): AssumptionProposition
```

Build a positive-integer proposition for a scalar expression.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_positiveintegerassumption.fa356b4ace52"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.positiveIntegerAssumption</code></p>

```typescript signature
positiveIntegerAssumption(value: ExpressionLike): AssumptionProposition
```

</details>

## positiveSemidefiniteMatrix

<a id="entry-presentation_wasm_polynomials_capability_algebra_positive_semidefinite_matrix_api_session_positive_semidefinite_matrix"></a>
<a id="placement-placement.wasm.javascript_facade.context_positivesemidefinitematrix.c0dc57765934"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
positiveSemidefiniteMatrix(value: Matrix): AssumptionProposition
```

Build a positive-semidefinite-matrix proposition.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_positivesemidefinitematrix.06f230347a8f"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.positiveSemidefiniteMatrix</code></p>

```typescript signature
positiveSemidefiniteMatrix(value: Matrix): AssumptionProposition
```

</details>

## primeAssumption

<a id="entry-presentation_wasm_polynomials_capability_algebra_prime_assumption_api_session_prime_assumption"></a>
<a id="placement-placement.wasm.javascript_facade.context_primeassumption.c38a13dbad3a"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
primeAssumption(value: ExpressionLike): AssumptionProposition
```

Build a primality proposition for a scalar expression.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_primeassumption.20ac88ea9ecd"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.primeAssumption</code></p>

```typescript signature
primeAssumption(value: ExpressionLike): AssumptionProposition
```

</details>

## projectionOperatorUsed

<a id="entry-presentation_wasm_polynomials_capability_algebra_projection_operator_used_api_cylindricalalgebraicdecomposition_projection_operator_used"></a>
<a id="placement-placement.wasm.wasm_class.cylindricalalgebraicdecomposition_projectionoperatorused.34f87e17828d"></a>
<p class="symi-entry-owner">CylindricalAlgebraicDecomposition method</p>

```typescript signature
projectionOperatorUsed(): string
```

The projection operator the decomposition was built with: `"brown"` for the well-oriented fast path, `"lazard"` when the well-orientedness guard forced the complete fallback, `"equational_constraint"` for an equational-constraint CAD.

## rank

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_rank_api_results_hermitenormalformdecomposition_rank"></a>
<a id="placement-placement.wasm.wasm_class.hermitenormalformdecomposition_rank.93db89cc480a"></a>
<p class="symi-entry-owner">HermiteNormalFormDecomposition property</p>

```typescript signature
readonly rank: number
```

Rank via Bareiss fraction-free elimination.

## rank

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_rank_api_matrix_rank"></a>
<a id="placement-placement.wasm.wasm_class.matrix_rank.488612d9f940"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
rank(): number
```

Rank via Bareiss fraction-free elimination.

## rank

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_rank_api_results_smithnormalformdecomposition_rank"></a>
<a id="placement-placement.wasm.wasm_class.smithnormalformdecomposition_rank.25c1ef898b6b"></a>
<p class="symi-entry-owner">SmithNormalFormDecomposition property</p>

```typescript signature
readonly rank: number
```

Rank via Bareiss fraction-free elimination.

## rationalAssumption

<a id="entry-presentation_wasm_polynomials_capability_algebra_rational_assumption_api_session_rational_assumption"></a>
<a id="placement-placement.wasm.javascript_facade.context_rationalassumption.bd30ce74bea3"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
rationalAssumption(value: ExpressionLike): AssumptionProposition
```

Build a rationality proposition for a scalar expression.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_rationalassumption.50a8e1879939"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.rationalAssumption</code></p>

```typescript signature
rationalAssumption(value: ExpressionLike): AssumptionProposition
```

</details>

## rationalCanonicalForm

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_rational_canonical_form_api_matrix_operations_matrix_rational_canonical_form"></a>
<a id="placement-placement.wasm.wasm_class.matrix_rationalcanonicalform.4965226d4f23"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
rationalCanonicalForm(variable: string): RationalCanonicalForm
```

Returns the certified Frobenius canonical form over the rationals. Its invariant factors are monic and ordered by divisibility, and `similarity` satisfies \(\operatorname{matrix}\,\operatorname{similarity} = \operatorname{similarity}\,\operatorname{canonical\_form}\) exactly.

## raw

<a id="entry-presentation_wasm_polynomials_capability_algebra_raw_unresolved"></a>
<a id="placement-placement.wasm.javascript_facade.symifacade_raw.aef6294b0f07"></a>
<p class="symi-entry-owner">SymiFacade property</p>

```typescript signature
readonly raw: unknown
```

Public property placement for raw.

## realAssumption

<a id="entry-presentation_wasm_polynomials_capability_algebra_real_assumption_api_session_real_assumption"></a>
<a id="placement-placement.wasm.javascript_facade.context_realassumption.9a2fc4517edb"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
realAssumption(value: ExpressionLike): AssumptionProposition
```

Build a realness proposition for a scalar expression.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_realassumption.a407a99bc207"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.realAssumption</code></p>

```typescript signature
realAssumption(value: ExpressionLike): AssumptionProposition
```

</details>

## realEntries

<a id="entry-presentation_wasm_polynomials_capability_algebra_real_entries_api_session_real_entries"></a>
<a id="placement-placement.wasm.javascript_facade.context_realentries.bdb9034606ef"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
realEntries(value: Matrix): AssumptionProposition
```

Build a real-entry proposition.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_realentries.0dc13fbd48dc"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.realEntries</code></p>

```typescript signature
realEntries(value: Matrix): AssumptionProposition
```

</details>

## received

<a id="entry-presentation_wasm_polynomials_capability_algebra_received_unresolved"></a>
<a id="placement-placement.wasm.javascript_facade.symierror_received.ae703f25576e"></a>
<p class="symi-entry-owner">SymiError property</p>

```typescript signature
readonly received: string | null
```

Public property placement for received.

## refine

<a id="entry-presentation_wasm_assumptions_capability_algebra_refine_api_assumptionscope_refine"></a>
<a id="placement-placement.wasm.javascript_facade.assumptionscope_refine.eb9700297138"></a>
<p class="symi-entry-owner">AssumptionScope method</p>

```typescript signature
refine(value: ExpressionLike): Expression
```

Refine an expression against this immutable local assumption scope.

## refine

<a id="entry-presentation_wasm_assumptions_capability_algebra_refine_api_session_refine"></a>
<a id="placement-placement.wasm.javascript_facade.context_refine.d5f9062ecb2d"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
refine(value: ExpressionLike, assumptions?: AssumptionProposition | null): Expression
```

Refine an expression using durable assumptions or one checked local proposition.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_refine.07d92cdc7343"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.refine</code></p>

```typescript signature
refine(value: ExpressionLike, assumptions?: AssumptionProposition | null): Expression
```

</details>

## refine

<a id="entry-presentation_wasm_assumptions_capability_algebra_refine_api_expression_refine"></a>
<a id="placement-placement.wasm.javascript_facade.expression_refine.70673247d439"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
refine(assumptions?: AssumptionProposition | null): Expression
```

Refine this expression using durable assumptions or one checked local proposition.

## relationKind

<a id="entry-presentation_wasm_polynomials_capability_algebra_relation_kind_api_assumptionproposition_relation_kind"></a>
<a id="placement-placement.wasm.javascript_facade.assumptionproposition_relationkind.077f50cc3ca4"></a>
<p class="symi-entry-owner">AssumptionProposition method</p>

```typescript signature
relationKind(): "equal" | "not_equal" | "less" | "less_or_equal" | null
```

Return the canonical relation kind when this proposition is one relation atom.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_relationkind.bb3ed2b1488e"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.relationKind</code></p>

```typescript signature
relationKind(proposition: AssumptionProposition): "equal" | "not_equal" | "less" | "less_or_equal" | null
```

</details>

## resultant

<a id="entry-presentation_wasm_polynomials_capability_algebra_resultant_api_algebra_session_resultant"></a>
<a id="placement-placement.wasm.wasm_module.module_resultant.fd887f886ff7"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
resultant(a: Expression, b: Expression, variable: string): Expression
```

Resultant with respect to `variable`; zero exactly when the two polynomials share a root (over the algebraic closure).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_resultant.a85ac4158e89"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.resultant</code></p>

```typescript signature
resultant(a: Expression, b: Expression, variable: string): Expression
```

</details>

## rightOperand

<a id="entry-presentation_wasm_polynomials_capability_algebra_right_operand_api_assumptionproposition_right_operand"></a>
<a id="placement-placement.wasm.javascript_facade.assumptionproposition_rightoperand.cd1d8db9f940"></a>
<p class="symi-entry-owner">AssumptionProposition method</p>

```typescript signature
rightOperand(): Expression | null
```

Return the right relation or congruence operand when present.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_rightoperand.48bc4bcc6b14"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.rightOperand</code></p>

```typescript signature
rightOperand(proposition: AssumptionProposition): Expression | null
```

</details>

## rowReduce

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_row_reduce_api_matrix_row_reduce"></a>
<a id="placement-placement.wasm.wasm_class.matrix_rowreduce.f6176e0e6403"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
rowReduce(): Matrix
```

Bareiss row-reduced form (fraction-free; pivots remain on the diagonal).

## rowTransformation

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_row_transformation_api_results_smithnormalformdecomposition_row_transformation"></a>
<a id="placement-placement.wasm.wasm_class.smithnormalformdecomposition_rowtransformation.29118694c1ef"></a>
<p class="symi-entry-owner">SmithNormalFormDecomposition property</p>

```typescript signature
readonly rowTransformation: Matrix
```

The unimodular row transformation `U` satisfying `U * matrix * V == S`.

## rows

<a id="entry-presentation_wasm_matrix_construction_capability_algebra_rows_api_matrix_rows"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_rows.5a09e96bea77"></a>
<p class="symi-entry-owner">Matrix property</p>

```typescript signature
readonly rows: number
```

Number of rows.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.matrix_rows.e17a7bb5b346"></a>
<p class="symi-entry-owner">Matrix property: <code>Matrix.rows</code></p>

```typescript signature
readonly rows: number
```

</details>

## scalarMultiply

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_scalar_multiply_api_matrix_scalar_multiply"></a>
<a id="placement-placement.wasm.wasm_class.matrix_scalarmultiply.ec2353182aff"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
scalarMultiply(scalar: Expression): Matrix
```

Scale every entry by `scalar`.

## serialize

<a id="entry-presentation_wasm_assumptions_capability_algebra_serialize_api_assumptionproposition_serialize"></a>
<a id="placement-placement.wasm.javascript_facade.assumptionproposition_serialize.185b0e9cccac"></a>
<p class="symi-entry-owner">AssumptionProposition method</p>

```typescript signature
serialize(): string
```

Serialize this proposition in the versioned canonical formula grammar.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_serialize.7f47221634d0"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.serialize</code></p>

```typescript signature
serialize(proposition: AssumptionProposition): string
```

</details>

## similarity

<a id="entry-presentation_wasm_matrix_functions_capability_algebra_similarity_api_results_jordandecomposition_similarity"></a>
<a id="placement-placement.wasm.wasm_class.jordandecomposition_similarity.2c685ecdfb79"></a>
<p class="symi-entry-owner">JordanDecomposition property</p>

```typescript signature
readonly similarity: Matrix
```

The change of basis `S`, satisfying `matrix * S == S * jordan_form`.

## similarity

<a id="entry-presentation_wasm_matrix_functions_capability_algebra_similarity_api_results_rationalcanonicalform_similarity"></a>
<a id="placement-placement.wasm.wasm_class.rationalcanonicalform_similarity.d2577308ef20"></a>
<p class="symi-entry-owner">RationalCanonicalForm property</p>

```typescript signature
readonly similarity: Matrix
```

The certified change of basis `S`, satisfying `matrix * S == S * canonical_form`.

## sine

<a id="entry-presentation_wasm_matrix_functions_capability_algebra_sine_api_matrix_operations_matrix_sine"></a>
<a id="placement-placement.wasm.wasm_class.matrix_sine.07e03f4d756a"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
sine(): Matrix
```

The primary matrix sine `sin(M)`, evaluated exactly through the certified Jordan decomposition. The result is certified together with the matrix cosine by `sin(M)^2 + cos(M)^2 = I`.

## singularMatrix

<a id="entry-presentation_wasm_polynomials_capability_algebra_singular_matrix_api_session_singular_matrix"></a>
<a id="placement-placement.wasm.javascript_facade.context_singularmatrix.4d8f48a378b9"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
singularMatrix(value: Matrix): AssumptionProposition
```

Build a singular-matrix proposition.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_singularmatrix.5c788f7b7710"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.singularMatrix</code></p>

```typescript signature
singularMatrix(value: Matrix): AssumptionProposition
```

</details>

## size

<a id="entry-presentation_wasm_matrix_functions_capability_algebra_size_api_results_jordanblock_size"></a>
<a id="placement-placement.wasm.wasm_class.jordanblock_size.cd7512c4a332"></a>
<p class="symi-entry-owner">JordanBlock property</p>

```typescript signature
readonly size: number
```

The size of this Jordan block.

## smith

<a id="entry-presentation_wasm_matrix_canonical_forms_capability_algebra_smith_api_results_smithnormalformdecomposition_smith"></a>
<a id="placement-placement.wasm.wasm_class.smithnormalformdecomposition_smith.a82ae363b1ec"></a>
<p class="symi-entry-owner">SmithNormalFormDecomposition property</p>

```typescript signature
readonly smith: Matrix
```

The Smith normal form `S`.

## smithNormalForm

<a id="entry-presentation_wasm_matrix_canonical_forms_capability_algebra_smith_normal_form_api_matrix_operations_matrix_smith_normal_form"></a>
<a id="placement-placement.wasm.wasm_class.matrix_smithnormalform.6d537d6b9035"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
smithNormalForm(): SmithNormalFormDecomposition
```

Returns the canonical integer Smith normal form `D`, unimodular transformations `U` and `V` satisfying \(U M V = D\), the rank, and the invariant factors including trailing zeros. The nonnegative positive prefix is divisibility-ordered. Every result is verified for diagonal shape, divisibility, the exact certificate, and unimodularity of both transformations before return. Notes: WASM returns a `smith_normal_form_decomposition` object carrying the same results as getters.

## squareMatrix

<a id="entry-presentation_wasm_polynomials_capability_algebra_square_matrix_api_session_square_matrix"></a>
<a id="placement-placement.wasm.javascript_facade.context_squarematrix.ca6d22aeb8ae"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
squareMatrix(value: Matrix): AssumptionProposition
```

Build a square-matrix proposition.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_squarematrix.07006ba57e12"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.squareMatrix</code></p>

```typescript signature
squareMatrix(value: Matrix): AssumptionProposition
```

</details>

## squareRoot

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_square_root_api_matrix_operations_matrix_square_root"></a>
<a id="placement-placement.wasm.wasm_class.matrix_squareroot.1c60c29e8e88"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
squareRoot(): Matrix
```

The principal matrix square root `sqrt(M)`; the result is verified to square back to `M`.

## subtract

<a id="entry-presentation_wasm_polynomials_capability_algebra_subtract_api_expression_subtract"></a>
<a id="placement-placement.wasm.javascript_facade.expression_subtract.01fa19892c94"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
subtract(other: ExpressionLike): Expression
```

Difference of this expression and `other`.

## subtract

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_subtract_api_matrix_subtract"></a>
<a id="placement-placement.wasm.wasm_class.matrix_subtract.ac3ea3a61aeb"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
subtract(other: Matrix): Matrix
```

Entrywise difference of two matrices of the same shape.

## symmetricMatrix

<a id="entry-presentation_wasm_polynomials_capability_algebra_symmetric_matrix_api_session_symmetric_matrix"></a>
<a id="placement-placement.wasm.javascript_facade.context_symmetricmatrix.29a86f11f324"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
symmetricMatrix(value: Matrix): AssumptionProposition
```

Build a symmetric-matrix proposition.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_symmetricmatrix.72efdbcc7ebb"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.symmetricMatrix</code></p>

```typescript signature
symmetricMatrix(value: Matrix): AssumptionProposition
```

</details>

## toString

<a id="entry-presentation_wasm_polynomials_capability_algebra_tostring_api_assumptionproposition_to_string"></a>
<a id="placement-placement.wasm.javascript_facade.assumptionproposition_tostring.1bef2e8fdf8b"></a>
<p class="symi-entry-owner">AssumptionProposition method</p>

```typescript signature
toString(): string
```

Return the canonical formula spelling.

## toString

<a id="entry-presentation_wasm_polynomials_capability_algebra_tostring_api_expression_to_string"></a>
<a id="placement-placement.wasm.javascript_facade.expression_tostring.f0177b10aa8c"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
toString(): string
```

The mathematical text of the expression.

## toString

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_to_js_string_unresolved"></a>
<a id="placement-placement.wasm.wasm_class.matrix_tostring.78e216ff9504"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
toString(): string
```

The mathematical text of this object, as a JavaScript string.

## toString

<a id="entry-presentation_wasm_polynomials_capability_algebra_tostring_unresolved"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_tostring.afeb8a997d5b"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
toString(): string
```

The mathematical text of this object, as a JavaScript string.

## torsionInvariantFactors

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_torsion_invariant_factors_api_results_integercokerneldata_torsion_invariant_factors"></a>
<a id="placement-placement.wasm.wasm_class.integercokerneldata_torsioninvariantfactors.0963695946a9"></a>
<p class="symi-entry-owner">IntegerCokernelData property</p>

```typescript signature
readonly torsionInvariantFactors: Expression[]
```

The invariant factors of the torsion part of the cokernel.

## trace

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_trace_api_matrix_trace"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_trace.520d7f729d12"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
trace(): Expression
```

Sum of the diagonal entries of a square matrix.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.matrix_trace.061991085cfa"></a>
<p class="symi-entry-owner">Matrix method: <code>Matrix.trace</code></p>

```typescript signature
trace(): Expression
```

</details>

## transcendentalAssumption

<a id="entry-presentation_wasm_polynomials_capability_algebra_transcendental_assumption_api_session_transcendental_assumption"></a>
<a id="placement-placement.wasm.javascript_facade.context_transcendentalassumption.0a4b799a5b1c"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
transcendentalAssumption(value: ExpressionLike): AssumptionProposition
```

Build a transcendence proposition for a scalar expression.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_transcendentalassumption.59b1bbba7112"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.transcendentalAssumption</code></p>

```typescript signature
transcendentalAssumption(value: ExpressionLike): AssumptionProposition
```

</details>

## transformation

<a id="entry-presentation_wasm_matrix_canonical_forms_capability_algebra_transformation_api_results_hermitenormalformdecomposition_transformation"></a>
<a id="placement-placement.wasm.wasm_class.hermitenormalformdecomposition_transformation.d7078a78935f"></a>
<p class="symi-entry-owner">HermiteNormalFormDecomposition property</p>

```typescript signature
readonly transformation: Matrix
```

The unimodular transformation `U` satisfying `U * matrix == H`.

## transformation

<a id="entry-presentation_wasm_matrix_canonical_forms_capability_algebra_transformation_api_partial_differential_equations_partialdifferentialequationcanonicalizationresult_transformation"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcanonicalizationresult_transformation.4b578977217f"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCanonicalizationResult property</p>

```typescript signature
readonly transformation: PartialDifferentialEquationTransformationResult | undefined
```

The verified coordinate transformation of a successful canonicalization.

## transpose

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_transpose_api_matrix_transpose"></a>
<a id="placement-placement.wasm.wasm_class.matrix_transpose.d8c363407dfa"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
transpose(): Matrix
```

The transpose, with rows and columns exchanged.

## unitaryMatrix

<a id="entry-presentation_wasm_polynomials_capability_algebra_unitary_matrix_api_session_unitary_matrix"></a>
<a id="placement-placement.wasm.javascript_facade.context_unitarymatrix.0d68d571cdb5"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
unitaryMatrix(value: Matrix): AssumptionProposition
```

Build a unitary-matrix proposition.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_unitarymatrix.a1c207d3bd64"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.unitaryMatrix</code></p>

```typescript signature
unitaryMatrix(value: Matrix): AssumptionProposition
```

</details>

## upper

<a id="entry-presentation_wasm_polynomials_capability_algebra_upper_api_results_isolatinginterval_upper"></a>
<a id="placement-placement.wasm.wasm_class.isolatinginterval_upper.c137d742d426"></a>
<p class="symi-entry-owner">IsolatingInterval property</p>

```typescript signature
readonly upper: Expression
```

Upper endpoint of the isolating interval.

## upperTriangularMatrix

<a id="entry-presentation_wasm_polynomials_capability_algebra_upper_triangular_matrix_api_session_upper_triangular_matrix"></a>
<a id="placement-placement.wasm.javascript_facade.context_uppertriangularmatrix.fa854937bbdc"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
upperTriangularMatrix(value: Matrix): AssumptionProposition
```

Build an upper-triangular-matrix proposition.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_uppertriangularmatrix.7fc7c36b3f9a"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.upperTriangularMatrix</code></p>

```typescript signature
upperTriangularMatrix(value: Matrix): AssumptionProposition
```

</details>

## value

<a id="entry-presentation_wasm_polynomials_capability_algebra_value_api_results_piecewisebranch_value"></a>
<a id="placement-placement.wasm.javascript_facade.piecewisebranch_value.801f7c3c6459"></a>
<p class="symi-entry-owner">PiecewiseBranch property</p>

```typescript signature
value: ExpressionLike
```

Public property placement for value.

## vectors

<a id="entry-presentation_wasm_linear_algebra_capability_algebra_vectors_api_results_eigenpair_vectors"></a>
<a id="placement-placement.wasm.wasm_class.eigenpair_vectors.cddaa6ad5fe1"></a>
<p class="symi-entry-owner">Eigenpair property</p>

```typescript signature
readonly vectors: Matrix[]
```

A basis of the eigenspace, as column matrices.

## zeroAssumption

<a id="entry-presentation_wasm_polynomials_capability_algebra_zero_assumption_api_session_zero_assumption"></a>
<a id="placement-placement.wasm.javascript_facade.context_zeroassumption.e6f179fd3a86"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
zeroAssumption(value: ExpressionLike): AssumptionProposition
```

Build a zero proposition for a scalar expression.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_zeroassumption.750741382236"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.zeroAssumption</code></p>

```typescript signature
zeroAssumption(value: ExpressionLike): AssumptionProposition
```

</details>

## zeroEquivalent

<a id="entry-presentation_wasm_polynomials_capability_algebra_zero_equivalent_api_session_zero_equivalent"></a>
<a id="placement-placement.wasm.javascript_facade.context_zeroequivalent.4c2cfbd43500"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
zeroEquivalent(value: ExpressionLike, constraint?: ExpressionLike | null): "true" | "false" | "unknown"
```

Prove whether an expression is zero wherever it is defined, returning `"true"`, `"false"`, or `"unknown"`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_zeroequivalent.5b941b0c7ab2"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.zeroEquivalent</code></p>

```typescript signature
zeroEquivalent(value: ExpressionLike, constraint?: ExpressionLike | null): "true" | "false" | "unknown"
```

</details>

## zeroEquivalent

<a id="entry-presentation_wasm_polynomials_capability_algebra_zero_equivalent_api_expression_zero_equivalent"></a>
<a id="placement-placement.wasm.javascript_facade.expression_zeroequivalent.03483f9201c5"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
zeroEquivalent(constraint?: ExpressionLike | null): "true" | "false" | "unknown"
```

Prove whether this expression is zero wherever it is defined, returning `"true"`, `"false"`, or `"unknown"`.

## zeroMatrix

<a id="entry-presentation_wasm_polynomials_capability_algebra_zero_matrix_api_session_zero_matrix"></a>
<a id="placement-placement.wasm.javascript_facade.context_zeromatrix.a94420588464"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
zeroMatrix(value: Matrix): AssumptionProposition
```

Build a zero-matrix proposition.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_zeromatrix.c57cdcbf6784"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.zeroMatrix</code></p>

```typescript signature
zeroMatrix(value: Matrix): AssumptionProposition
```

</details>

## continuousDomain

<a id="entry-presentation_wasm_calculus_capability_calculus_continuous_domain_api_assumptionscope_continuous_domain"></a>
<a id="placement-placement.wasm.javascript_facade.assumptionscope_continuousdomain.6d9849f22085"></a>
<p class="symi-entry-owner">AssumptionScope method</p>

```typescript signature
continuousDomain(value: ExpressionLike, variable: VariableLike): Expression
```

Return the real continuous domain using the scope's immutable assumptions.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.assumptionscope_continuousdomain.24bf52c8474b"></a>
<p class="symi-entry-owner">AssumptionScope method: <code>AssumptionScope.continuousDomain</code></p>

```typescript signature
continuousDomain(
    input_expression: Expression,
    variable: string,
): Expression
```

</details>

## continuousDomain

<a id="entry-presentation_wasm_calculus_capability_calculus_continuous_domain_api_session_continuous_domain"></a>
<a id="placement-placement.wasm.wasm_module.module_continuousdomain.d9adfbfd1afb"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
continuousDomain(
    input_expression: Expression,
    variable: string,
): Expression
```

The subset of the real line on which the expression is continuous in `variable`, as a set expression. Compound rational square-root radicands are lowered to an exact univariate semialgebraic condition when supported, so, for example, `sqrt(x + 1/x - 2)` has continuous real domain `(0, infinity)`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_continuousdomain.b3456b9e12a2"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.continuousDomain</code></p>

```typescript signature
continuousDomain(
    input_expression: Expression,
    variable: string,
): Expression
```

</details>

## continuousDomain

<a id="entry-presentation_wasm_calculus_capability_calculus_continuous_domain_api_expression_continuous_domain"></a>
<a id="placement-placement.wasm.wasm_class.expression_continuousdomain.29a27663a8c8"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
continuousDomain(variable: string): Expression
```

The subset of the real line on which the expression is continuous in `variable`, as a set expression. Compound rational square-root radicands are lowered to an exact univariate semialgebraic condition when supported, so, for example, `sqrt(x + 1/x - 2)` has continuous real domain `(0, infinity)`.

## declineReason

<a id="entry-presentation_wasm_calculus_capability_calculus_decline_reason_api_results_definiteintegrationresult_decline_reason"></a>
<a id="placement-placement.wasm.wasm_class.definiteintegrationresult_declinereason.2ab13fa31859"></a>
<p class="symi-entry-owner">DefiniteIntegrationResult property</p>

```typescript signature
readonly declineReason: string | undefined
```

The reason, present exactly when the verdict is `declined`.

## derivative

<a id="entry-presentation_wasm_calculus_capability_calculus_derivative_api_session_derivative"></a>
<a id="placement-placement.wasm.wasm_module.module_derivative.6c2f52be0c02"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
derivative(
    input_expression: Expression,
    variable: string,
    order?: number | null,
): Expression
```

Constructs a deferred derivative. The variable may be a name or a same-context symbol expression. Use `execute` to evaluate it.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_derivative.50bdfc4c863b"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.derivative</code></p>

```typescript signature
derivative(
    input_expression: Expression,
    variable: string,
    order?: number | null,
): Expression
```

</details>

## derivative

<a id="entry-presentation_wasm_calculus_capability_calculus_derivative_api_expression_derivative"></a>
<a id="placement-placement.wasm.javascript_facade.expression_derivative.71488970b451"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
derivative(variable: VariableLike, order?: number): Expression
```

Constructs a deferred derivative. The variable may be a name or a same-context symbol expression. Use `execute` to evaluate it.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_derivative.5e5f3f1fdacd"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.derivative</code></p>

```typescript signature
derivative(variable: string, order?: number | null): Expression
```

</details>

## derivative

<a id="entry-presentation_wasm_calculus_capability_calculus_derivative_api_undefinedfunction_derivative"></a>
<a id="placement-placement.wasm.wasm_class.undefinedfunction_derivative.19e919814456"></a>
<p class="symi-entry-owner">UndefinedFunction method</p>

```typescript signature
derivative(orders: Uint32Array, arguments: Expression[]): Expression
```

Constructs a deferred derivative. The variable may be a name or a same-context symbol expression. Use `execute` to evaluate it.

## differentiate

<a id="entry-presentation_wasm_calculus_capability_calculus_differentiate_api_session_differentiate"></a>
<a id="placement-placement.wasm.wasm_module.module_differentiate.4f7ff0e7c9f8"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
differentiate(
    input_expression: Expression,
    variable: string,
): Expression
```

Symbolic derivative with respect to `variable`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_differentiate.02b9812493bf"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.differentiate</code></p>

```typescript signature
differentiate(value: ExpressionLike, variable: VariableLike): Expression
```

<a id="placement-placement.wasm.wasm_class.context_differentiate.df81a03aa1ac"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.differentiate</code></p>

```typescript signature
differentiate(
    input_expression: Expression,
    variable: string,
): Expression
```

<a id="placement-placement.wasm.javascript_facade.symifacade_differentiate.e4a123823c8a"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.differentiate</code></p>

```typescript signature
differentiate(value: ExpressionLike, variable: VariableLike): Expression
```

</details>

## differentiate

<a id="entry-presentation_wasm_calculus_capability_calculus_differentiate_api_expression_differentiate"></a>
<a id="placement-placement.wasm.javascript_facade.expression_differentiate.85cf43e1ce4c"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
differentiate(variable: VariableLike): Expression
```

Symbolic derivative with respect to `variable`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_differentiate.aadc0cf2928a"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.differentiate</code></p>

```typescript signature
differentiate(variable: string): Expression
```

</details>

## divergenceDirection

<a id="entry-presentation_wasm_calculus_capability_calculus_divergence_direction_api_results_definiteintegrationresult_divergence_direction"></a>
<a id="placement-placement.wasm.wasm_class.definiteintegrationresult_divergencedirection.23c571e1dfe7"></a>
<p class="symi-entry-owner">DefiniteIntegrationResult property</p>

```typescript signature
readonly divergenceDirection: string | undefined
```

The signed infinity of a divergent request, when a single direction was established.

## evaluateLimit

<a id="entry-presentation_wasm_calculus_capability_calculus_evaluate_limit_api_assumptionscope_evaluate_limit"></a>
<a id="placement-placement.wasm.wasm_class.assumptionscope_evaluatelimit.8126d7e3bcbd"></a>
<p class="symi-entry-owner">AssumptionScope method</p>

```typescript signature
evaluateLimit(
    input_expression: Expression,
    variable: string,
    point: Expression,
    direction?: string | null,
): Expression
```

Evaluate a limit using the scope's immutable assumptions.

## evaluateLimit

<a id="entry-presentation_wasm_calculus_capability_calculus_evaluate_limit_api_session_evaluate_limit"></a>
<a id="placement-placement.wasm.wasm_module.module_evaluatelimit.0f1c024103e7"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
evaluateLimit(
    input_expression: Expression,
    variable: string,
    point: Expression,
    direction?: string | null,
): Expression
```

`evaluate_limit(Expression, variable, point, direction="two_sided")` runs the eager limit engine. It returns an unevaluated limit when the engine cannot close the result.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_evaluatelimit.198af56c4c62"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.evaluateLimit</code></p>

```typescript signature
evaluateLimit(
    input_expression: Expression,
    variable: string,
    point: Expression,
    direction?: string | null,
): Expression
```

</details>

## evaluateLimit

<a id="entry-presentation_wasm_calculus_capability_calculus_evaluate_limit_api_expression_evaluate_limit"></a>
<a id="placement-placement.wasm.wasm_class.expression_evaluatelimit.ad4f2188ca80"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
evaluateLimit(
    variable: string,
    point: Expression,
    direction?: string | null,
): Expression
```

`evaluate_limit(Expression, variable, point, direction="two_sided")` runs the eager limit engine. It returns an unevaluated limit when the engine cannot close the result.

## evaluateNumeric

<a id="entry-presentation_wasm_calculus_capability_calculus_evaluate_numeric_api_analysis_session_evaluate_numeric"></a>
<a id="placement-placement.wasm.wasm_module.module_evaluatenumeric.b3592a20461b"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
evaluateNumeric(input_expression: Expression): Expression
```

Numerically evaluate to a float and re-encode as an exact rational literal; returns the input unchanged when the expression has no numeric value. For direct float output use `expression.evaluate_to_float`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_evaluatenumeric.cf32bb7a03b5"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.evaluateNumeric</code></p>

```typescript signature
evaluateNumeric(input_expression: Expression): Expression
```

</details>

## evaluateNumeric

<a id="entry-presentation_wasm_calculus_capability_calculus_evaluate_numeric_api_expression_operations_expression_evaluate_numeric"></a>
<a id="placement-placement.wasm.wasm_class.expression_evaluatenumeric.b483cb974774"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
evaluateNumeric(): Expression
```

Numerically evaluate to a float and re-encode as an exact rational literal; returns the input unchanged when the expression has no numeric value. For direct float output use `expression.evaluate_to_float`.

## evaluateOnGrid

<a id="entry-presentation_wasm_calculus_capability_calculus_evaluate_on_grid_api_analysis_session_evaluate_on_grid"></a>
<a id="placement-placement.wasm.wasm_module.module_evaluateongrid.68b32c74ae82"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
evaluateOnGrid(
    input_expression: Expression,
    variable: string,
    x_values: Float64Array,
): Float64Array
```

Evaluate at each grid point, substituting `variable`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_evaluateongrid.58241f8651c5"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.evaluateOnGrid</code></p>

```typescript signature
evaluateOnGrid(
    input_expression: Expression,
    variable: string,
    x_values: Float64Array,
): Float64Array
```

</details>

## evaluateOnGridPoints

<a id="entry-presentation_wasm_calculus_capability_calculus_evaluate_on_grid_points_api_analysis_session_evaluate_on_grid_points"></a>
<a id="placement-placement.wasm.wasm_module.module_evaluateongridpoints.dee0c2c92540"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
evaluateOnGridPoints(
    input_expression: Expression,
    variables: string[],
    points: Float64Array,
): Float64Array
```

Multi-variable companion to `evaluate_on_grid`: evaluate at each point of a flat row-major coordinate array (one coordinate per variable, so the points length must be a multiple of the variable count), returning one float per point. Positions where evaluation fails hold NaN. Raises when `variables` is empty or the lengths disagree. Intended for sampling surfaces and implicit curves.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_evaluateongridpoints.883efda52e22"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.evaluateOnGridPoints</code></p>

```typescript signature
evaluateOnGridPoints(
    input_expression: Expression,
    variables: string[],
    points: Float64Array,
): Float64Array
```

</details>

## execute

<a id="entry-presentation_wasm_calculus_capability_calculus_execute_api_session_execute"></a>
<a id="placement-placement.wasm.wasm_module.module_execute.046976fb1643"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
execute(input_expression: Expression): Expression
```

Re-dispatch every unevaluated node (integral, derivative, summation, transform, ODE/recurrence placeholder) in the expression; useful after substitution has changed the inputs.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_execute.f750d4ad1a52"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.execute</code></p>

```typescript signature
execute(value: ExpressionLike): Expression
```

<a id="placement-placement.wasm.wasm_class.context_execute.8f16d95e4225"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.execute</code></p>

```typescript signature
execute(input_expression: Expression): Expression
```

<a id="placement-placement.wasm.javascript_facade.symifacade_execute.899a0953de4b"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.execute</code></p>

```typescript signature
execute(value: ExpressionLike): Expression
```

</details>

## execute

<a id="entry-presentation_wasm_calculus_capability_calculus_execute_api_expression_execute"></a>
<a id="placement-placement.wasm.javascript_facade.expression_execute.8b9ac9285061"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
execute(): Expression
```

Re-dispatch every unevaluated node (integral, derivative, summation, transform, ODE/recurrence placeholder) in the expression; useful after substitution has changed the inputs.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_execute.863a3e670c60"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.execute</code></p>

```typescript signature
execute(): Expression
```

</details>

## execute

<a id="entry-presentation_wasm_calculus_capability_calculus_execute_api_matrix_execute"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_execute.28422f05de37"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
execute(): Matrix
```

Re-dispatch every unevaluated node (integral, derivative, summation, transform, ODE/recurrence placeholder) in the expression; useful after substitution has changed the inputs.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.matrix_execute.cd3080e5f4bd"></a>
<p class="symi-entry-owner">Matrix method: <code>Matrix.execute</code></p>

```typescript signature
execute(): Matrix
```

</details>

## fourierTransform

<a id="entry-presentation_wasm_calculus_capability_calculus_fourier_transform_api_assumptionscope_fourier_transform"></a>
<a id="placement-placement.wasm.wasm_class.assumptionscope_fouriertransform.5a22c0081730"></a>
<p class="symi-entry-owner">AssumptionScope method</p>

```typescript signature
fourierTransform(
    input_expression: Expression,
    time_variable: string,
    frequency_variable: string,
): Expression
```

Compute a forward Fourier transform using the scope's immutable assumptions.

## fourierTransform

<a id="entry-presentation_wasm_calculus_capability_calculus_fourier_transform_api_session_fourier_transform"></a>
<a id="placement-placement.wasm.wasm_module.module_fouriertransform.7a1b272e817d"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
fourierTransform(
    input_expression: Expression,
    time_variable: string,
    frequency_variable: string,
): Expression
```

Forward Fourier transform in the angular-frequency convention \(F(\omega) = \int f(t)e^{-i\omega t}\,dt\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_fouriertransform.6e6cbfb61d2f"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.fourierTransform</code></p>

```typescript signature
fourierTransform(
    input_expression: Expression,
    time_variable: string,
    frequency_variable: string,
): Expression
```

</details>

## integrate

<a id="entry-presentation_wasm_calculus_capability_calculus_integrate_api_assumptionscope_integrate"></a>
<a id="placement-placement.wasm.javascript_facade.assumptionscope_integrate.2a66e4d0ee6f"></a>
<p class="symi-entry-owner">AssumptionScope method</p>

```typescript signature
integrate(value: ExpressionLike, variable: VariableLike): Expression
```

Integrate an expression using the scope's immutable assumptions.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.assumptionscope_integrate.2fdd7c0dfbd7"></a>
<p class="symi-entry-owner">AssumptionScope method: <code>AssumptionScope.integrate</code></p>

```typescript signature
integrate(input_expression: Expression, variable: string): Expression
```

</details>

## integrate

<a id="entry-presentation_wasm_calculus_capability_calculus_integrate_api_session_integrate"></a>
<a id="placement-placement.wasm.wasm_module.module_integrate.ba7c5019b6c5"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
integrate(input_expression: Expression, variable: string): Expression
```

Indefinite integration (no constant of integration).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_integrate.c7366cddca9f"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.integrate</code></p>

```typescript signature
integrate(value: ExpressionLike, variable: VariableLike): Expression
```

<a id="placement-placement.wasm.wasm_class.context_integrate.7ea7e1c842ce"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.integrate</code></p>

```typescript signature
integrate(input_expression: Expression, variable: string): Expression
```

<a id="placement-placement.wasm.javascript_facade.symifacade_integrate.23b97ff9965a"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.integrate</code></p>

```typescript signature
integrate(value: ExpressionLike, variable: VariableLike): Expression
```

</details>

## integrate

<a id="entry-presentation_wasm_calculus_capability_calculus_integrate_api_expression_integrate"></a>
<a id="placement-placement.wasm.javascript_facade.expression_integrate.d67955658e24"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
integrate(variable: VariableLike): Expression
```

Indefinite integration (no constant of integration).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_integrate.d04377e90f5e"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.integrate</code></p>

```typescript signature
integrate(variable: string): Expression
```

</details>

## integrateDefinite

<a id="entry-presentation_wasm_calculus_capability_calculus_integrate_definite_api_assumptionscope_integrate_definite"></a>
<a id="placement-placement.wasm.wasm_class.assumptionscope_integratedefinite.f892481fe20c"></a>
<p class="symi-entry-owner">AssumptionScope method</p>

```typescript signature
integrateDefinite(
    input_expression: Expression,
    variable: string,
    lower_bound: Expression,
    upper_bound: Expression,
): Expression
```

Integrate a definite expression using the scope's immutable assumptions.

## integrateDefinite

<a id="entry-presentation_wasm_calculus_capability_calculus_integrate_definite_api_analysis_session_integrate_definite"></a>
<a id="placement-placement.wasm.wasm_module.module_integratedefinite.580dccd9f9e3"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
integrateDefinite(
    input_expression: Expression,
    variable: string,
    lower: Expression,
    upper: Expression,
): Expression
```

Definite integration over `[lower, upper]` (bounds may be infinite).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_integratedefinite.c23e8611ea36"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.integrateDefinite</code></p>

```typescript signature
integrateDefinite(
    input_expression: Expression,
    variable: string,
    lower: Expression,
    upper: Expression,
): Expression
```

</details>

## integrateDefinite

<a id="entry-presentation_wasm_calculus_capability_calculus_integrate_definite_api_expression_operations_expression_integrate_definite"></a>
<a id="placement-placement.wasm.wasm_class.expression_integratedefinite.4e404c54ad75"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
integrateDefinite(
    variable: string,
    lower: Expression,
    upper: Expression,
): Expression
```

Definite integration over `[lower, upper]` (bounds may be infinite).

## integrateDefiniteDetailed

<a id="entry-presentation_wasm_calculus_capability_calculus_integrate_definite_detailed_api_session_integrate_definite_detailed"></a>
<a id="placement-placement.wasm.wasm_module.module_integratedefinitedetailed.249aed840c82"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
integrateDefiniteDetailed(
    input_expression: Expression,
    variable: string,
    lower: Expression,
    upper: Expression,
    interpretation?: string | null,
    constraint?: Expression | null,
): DefiniteIntegrationResult
```

Evaluate a definite integral under an interpretation and an optional declared region, retaining whether it was evaluated, proved divergent, or declined.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_integratedefinitedetailed.d4e91bc937ad"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.integrateDefiniteDetailed</code></p>

```typescript signature
integrateDefiniteDetailed(
    input_expression: Expression,
    variable: string,
    lower: Expression,
    upper: Expression,
    interpretation?: string | null,
    constraint?: Expression | null,
): DefiniteIntegrationResult
```

</details>

## integrateDefiniteNumeric

<a id="entry-presentation_wasm_calculus_capability_calculus_integrate_definite_numeric_api_analysis_session_integrate_definite_numeric"></a>
<a id="placement-placement.wasm.wasm_module.module_integratedefinitenumeric.57c38757b75e"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
integrateDefiniteNumeric(
    input_expression: Expression,
    variable: string,
    lower: Expression,
    upper: Expression,
    precision_bits: number,
): NumericDefiniteIntegrationResult
```

Numerically integrate a finite interval without invoking symbolic integration.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_integratedefinitenumeric.b394f4572330"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.integrateDefiniteNumeric</code></p>

```typescript signature
integrateDefiniteNumeric(
    input_expression: Expression,
    variable: string,
    lower: Expression,
    upper: Expression,
    precision_bits: number,
): NumericDefiniteIntegrationResult
```

</details>

## integrateIterated

<a id="entry-presentation_wasm_calculus_capability_calculus_integrate_iterated_api_analysis_session_integrate_iterated"></a>
<a id="placement-placement.wasm.wasm_module.module_integrateiterated.a2a1f9fb1ef7"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
integrateIterated(
    input_expression: Expression,
    variables: string[],
): Expression
```

Iterated indefinite integration, applying the single-variable pipeline once per entry of `variables` in left-to-right order (innermost binder first).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_integrateiterated.d5ecdfc91bda"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.integrateIterated</code></p>

```typescript signature
integrateIterated(
    input_expression: Expression,
    variables: string[],
): Expression
```

</details>

## integrateIterated

<a id="entry-presentation_wasm_calculus_capability_calculus_integrate_iterated_api_expression_operations_expression_integrate_iterated"></a>
<a id="placement-placement.wasm.wasm_class.expression_integrateiterated.f095d7ba5219"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
integrateIterated(variables: string[]): Expression
```

Iterated indefinite integration, applying the single-variable pipeline once per entry of `variables` in left-to-right order (innermost binder first).

## interpretation

<a id="entry-presentation_wasm_calculus_capability_calculus_interpretation_api_results_definiteintegrationresult_interpretation"></a>
<a id="placement-placement.wasm.wasm_class.definiteintegrationresult_interpretation.e916f910c54f"></a>
<p class="symi-entry-owner">DefiniteIntegrationResult property</p>

```typescript signature
readonly interpretation: string
```

The interpretation under which the request was answered.

## inverseFourierTransform

<a id="entry-presentation_wasm_calculus_capability_calculus_inverse_fourier_transform_api_session_inverse_fourier_transform"></a>
<a id="placement-placement.wasm.wasm_module.module_inversefouriertransform.c756e25c95bb"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
inverseFourierTransform(
    input_expression: Expression,
    frequency_variable: string,
    time_variable: string,
): Expression
```

Inverse Fourier transform of the same convention.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_inversefouriertransform.1256b676d4cd"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.inverseFourierTransform</code></p>

```typescript signature
inverseFourierTransform(
    input_expression: Expression,
    frequency_variable: string,
    time_variable: string,
): Expression
```

</details>

## inverseLaplaceTransform

<a id="entry-presentation_wasm_calculus_capability_calculus_inverse_laplace_transform_api_session_inverse_laplace_transform"></a>
<a id="placement-placement.wasm.wasm_module.module_inverselaplacetransform.b9494a36f07b"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
inverseLaplaceTransform(
    input_expression: Expression,
    frequency_variable: string,
    time_variable: string,
): Expression
```

Inverse Laplace transform; rational inputs route through a partial-fraction reverse lookup.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_inverselaplacetransform.12be5bd7a8d7"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.inverseLaplaceTransform</code></p>

```typescript signature
inverseLaplaceTransform(
    input_expression: Expression,
    frequency_variable: string,
    time_variable: string,
): Expression
```

</details>

## laplaceTransform

<a id="entry-presentation_wasm_calculus_capability_calculus_laplace_transform_api_assumptionscope_laplace_transform"></a>
<a id="placement-placement.wasm.wasm_class.assumptionscope_laplacetransform.ec1051a0196b"></a>
<p class="symi-entry-owner">AssumptionScope method</p>

```typescript signature
laplaceTransform(
    input_expression: Expression,
    time_variable: string,
    frequency_variable: string,
): Expression
```

Compute a forward Laplace transform using the scope's immutable assumptions.

## laplaceTransform

<a id="entry-presentation_wasm_calculus_capability_calculus_laplace_transform_api_session_laplace_transform"></a>
<a id="placement-placement.wasm.wasm_module.module_laplacetransform.e8b317b65c63"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
laplaceTransform(
    input_expression: Expression,
    time_variable: string,
    frequency_variable: string,
): Expression
```

Forward Laplace transform \(F(s) = \int_0^\infty f(t)e^{-st}\,dt\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_laplacetransform.eaa99d3405c1"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.laplaceTransform</code></p>

```typescript signature
laplaceTransform(
    input_expression: Expression,
    time_variable: string,
    frequency_variable: string,
): Expression
```

</details>

## laurentSeries

<a id="entry-presentation_wasm_series_capability_calculus_laurent_series_api_session_laurent_series"></a>
<a id="placement-placement.wasm.wasm_module.module_laurentseries.0b961aee8cd4"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
laurentSeries(
    input_expression: Expression,
    variable: string,
    center: Expression,
    order: number,
): Expression
```

Truncated Laurent expansion at `center`: every \((\operatorname{variable} - \operatorname{center})^k\) term with \(-m \le k < \operatorname{order}\), where `m` is the pole order. Analytic points degrade to the Taylor expansion. At an essential singularity (where `pole_order` declines) the result is an unevaluated `series_unevaluated(...)` placeholder, because no finite truncation of the principal part is correct.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_laurentseries.e8316922ebf6"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.laurentSeries</code></p>

```typescript signature
laurentSeries(
    input_expression: Expression,
    variable: string,
    center: Expression,
    order: number,
): Expression
```

</details>

## laurentSeries

<a id="entry-presentation_wasm_series_capability_calculus_laurent_series_api_expression_laurent_series"></a>
<a id="placement-placement.wasm.wasm_class.expression_laurentseries.d0f2974aa39d"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
laurentSeries(
    variable: string,
    center: Expression,
    order: number,
): Expression
```

Truncated Laurent expansion at `center`: every \((\operatorname{variable} - \operatorname{center})^k\) term with \(-m \le k < \operatorname{order}\), where `m` is the pole order. Analytic points degrade to the Taylor expansion. At an essential singularity (where `pole_order` declines) the result is an unevaluated `series_unevaluated(...)` placeholder, because no finite truncation of the principal part is correct.

## limit

<a id="entry-presentation_wasm_calculus_capability_calculus_limit_api_session_limit"></a>
<a id="placement-placement.wasm.wasm_module.module_limit.09bfaf02cffb"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
limit(
    input_expression: Expression,
    variable: string,
    point: Expression,
    direction?: string | null,
): Expression
```

`limit(Expression, variable, point, direction="two_sided")` constructs a deferred limit.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_limit.6bf8a3ae36bb"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.limit</code></p>

```typescript signature
limit(
    input_expression: Expression,
    variable: string,
    point: Expression,
    direction?: string | null,
): Expression
```

</details>

## limit

<a id="entry-presentation_wasm_calculus_capability_calculus_limit_api_expression_limit"></a>
<a id="placement-placement.wasm.wasm_class.expression_limit.ef276e5bcd5f"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
limit(
    variable: string,
    point: Expression,
    direction?: string | null,
): Expression
```

`limit(Expression, variable, point, direction="two_sided")` constructs a deferred limit.

## maclaurinSeries

<a id="entry-presentation_wasm_series_capability_calculus_maclaurin_series_api_analysis_session_maclaurin_series"></a>
<a id="placement-placement.wasm.wasm_module.module_maclaurinseries.607a15898ae4"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
maclaurinSeries(
    input_expression: Expression,
    variable: string,
    order: number,
): Expression
```

`taylor_series` specialised to expansion point 0.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_maclaurinseries.9c0c4610a21a"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.maclaurinSeries</code></p>

```typescript signature
maclaurinSeries(
    input_expression: Expression,
    variable: string,
    order: number,
): Expression
```

</details>

## maclaurinSeries

<a id="entry-presentation_wasm_series_capability_calculus_maclaurin_series_api_expression_operations_expression_maclaurin_series"></a>
<a id="placement-placement.wasm.wasm_class.expression_maclaurinseries.61e0610232f5"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
maclaurinSeries(variable: string, order: number): Expression
```

`taylor_series` specialised to expansion point 0.

## poleOrder

<a id="entry-presentation_wasm_calculus_capability_calculus_pole_order_api_analysis_session_pole_order"></a>
<a id="placement-placement.wasm.wasm_module.module_poleorder.13e4b7d7d589"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
poleOrder(
    input_expression: Expression,
    variable: string,
    center: Expression,
): bigint | undefined
```

Order of the singularity at `center`: `0` for analytic/removable points, \(m \ge 1\) for a pole of order \(m\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_poleorder.588f17fd3f20"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.poleOrder</code></p>

```typescript signature
poleOrder(
    input_expression: Expression,
    variable: string,
    center: Expression,
): bigint | undefined
```

</details>

## poleOrder

<a id="entry-presentation_wasm_calculus_capability_calculus_pole_order_api_expression_operations_expression_pole_order"></a>
<a id="placement-placement.wasm.wasm_class.expression_poleorder.b10295b45362"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
poleOrder(variable: string, center: Expression): bigint | undefined
```

Order of the singularity at `center`: `0` for analytic/removable points, \(m \ge 1\) for a pole of order \(m\).

## residue

<a id="entry-presentation_wasm_series_capability_calculus_residue_api_analysis_session_residue"></a>
<a id="placement-placement.wasm.wasm_module.module_residue.7086b98f8e0d"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
residue(
    input_expression: Expression,
    variable: string,
    center: Expression,
): Expression
```

Coefficient of \((\operatorname{variable} - \operatorname{center})^{-1}\) in the Laurent expansion at `center`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_residue.d125c14f4192"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.residue</code></p>

```typescript signature
residue(
    input_expression: Expression,
    variable: string,
    center: Expression,
): Expression
```

</details>

## residue

<a id="entry-presentation_wasm_series_capability_calculus_residue_api_expression_operations_expression_residue"></a>
<a id="placement-placement.wasm.wasm_class.expression_residue.8d5e9c55a6de"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
residue(variable: string, center: Expression): Expression
```

Coefficient of \((\operatorname{variable} - \operatorname{center})^{-1}\) in the Laurent expansion at `center`.

## singularities

<a id="entry-presentation_wasm_calculus_capability_calculus_singularities_api_assumptionscope_singularities"></a>
<a id="placement-placement.wasm.javascript_facade.assumptionscope_singularities.227597e63d8e"></a>
<p class="symi-entry-owner">AssumptionScope method</p>

```typescript signature
singularities(value: ExpressionLike, variable: VariableLike): Expression
```

Return the isolated complex singularities using the scope's immutable assumptions.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.assumptionscope_singularities.f24ea8f03f44"></a>
<p class="symi-entry-owner">AssumptionScope method: <code>AssumptionScope.singularities</code></p>

```typescript signature
singularities(
    input_expression: Expression,
    variable: string,
): Expression
```

</details>

## singularities

<a id="entry-presentation_wasm_calculus_capability_calculus_singularities_api_session_singularities"></a>
<a id="placement-placement.wasm.wasm_module.module_singularities.5894dcc61a6b"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
singularities(
    input_expression: Expression,
    variable: string,
): Expression
```

The singular points of the expression in the complex plane, as a set expression (finite set, union, image set for periodic families, …).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_singularities.6066a1b62d30"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.singularities</code></p>

```typescript signature
singularities(
    input_expression: Expression,
    variable: string,
): Expression
```

</details>

## singularities

<a id="entry-presentation_wasm_calculus_capability_calculus_singularities_api_expression_singularities"></a>
<a id="placement-placement.wasm.wasm_class.expression_singularities.3f1ebf570aaf"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
singularities(variable: string): Expression
```

The singular points of the expression in the complex plane, as a set expression (finite set, union, image set for periodic families, …).

## summationIndefinite

<a id="entry-presentation_wasm_calculus_capability_calculus_summation_indefinite_api_analysis_session_summation_indefinite"></a>
<a id="placement-placement.wasm.wasm_module.module_summationindefinite.45acee68c513"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
summationIndefinite(summand: Expression, index: string): Expression
```

Anti-difference: a closed form \(F\) with \(F(\operatorname{index}+1) - F(\operatorname{index}) = \operatorname{summand}\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_summationindefinite.1d9f974c7467"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.summationIndefinite</code></p>

```typescript signature
summationIndefinite(summand: Expression, index: string): Expression
```

</details>

## summationIndefinite

<a id="entry-presentation_wasm_calculus_capability_calculus_summation_indefinite_api_expression_operations_expression_summation_indefinite"></a>
<a id="placement-placement.wasm.wasm_class.expression_summationindefinite.98722b7aa268"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
summationIndefinite(index: string): Expression
```

Anti-difference: a closed form \(F\) with \(F(\operatorname{index}+1) - F(\operatorname{index}) = \operatorname{summand}\).

## taylorSeries

<a id="entry-presentation_wasm_series_capability_calculus_taylor_series_api_assumptionscope_taylor_series"></a>
<a id="placement-placement.wasm.wasm_class.assumptionscope_taylorseries.c3cad65c2ce1"></a>
<p class="symi-entry-owner">AssumptionScope method</p>

```typescript signature
taylorSeries(
    input_expression: Expression,
    variable: string,
    expansion_point: Expression,
    truncation_order: number,
): Expression
```

Compute a Taylor polynomial using the scope's immutable assumptions.

## taylorSeries

<a id="entry-presentation_wasm_series_capability_calculus_taylor_series_api_session_taylor_series"></a>
<a id="placement-placement.wasm.wasm_module.module_taylorseries.e1b8fff7e6aa"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
taylorSeries(
    input_expression: Expression,
    variable: string,
    expansion_point: Expression,
    order: number,
): Expression
```

Truncated Taylor expansion about `expansion_point`, keeping terms of degree strictly less than `order` (the remainder is \(O((x-a)^{\operatorname{order}})\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_taylorseries.2224e0e71344"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.taylorSeries</code></p>

```typescript signature
taylorSeries(
    input_expression: Expression,
    variable: string,
    expansion_point: Expression,
    order: number,
): Expression
```

</details>

## taylorSeries

<a id="entry-presentation_wasm_series_capability_calculus_taylor_series_api_expression_taylor_series"></a>
<a id="placement-placement.wasm.wasm_class.expression_taylorseries.34401ae1c495"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
taylorSeries(
    variable: string,
    expansion_point: Expression,
    order: number,
): Expression
```

Truncated Taylor expansion about `expansion_point`, keeping terms of degree strictly less than `order` (the remainder is \(O((x-a)^{\operatorname{order}})\).

## value

<a id="entry-presentation_wasm_calculus_capability_calculus_value_api_results_definiteintegrationresult_value"></a>
<a id="placement-placement.wasm.wasm_class.definiteintegrationresult_value.a1ac38a1d17c"></a>
<p class="symi-entry-owner">DefiniteIntegrationResult property</p>

```typescript signature
readonly value: Expression | undefined
```

The exact value, present exactly when the verdict is `evaluated`.

## e

<a id="entry-presentation_wasm_evaluation_and_constants_capability_constants_e_api_session_e"></a>
<a id="placement-placement.wasm.wasm_module.module_e.52105aa78b4d"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
e(): Expression
```

Euler's number \(e\), the base of the natural logarithm. `exp(1)` and this constant are the same expression.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_e.44cbd15853e1"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.e</code></p>

```typescript signature
readonly e: Expression
```

<a id="placement-placement.wasm.wasm_class.context_e.8c51aa37c2b8"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.e</code></p>

```typescript signature
readonly e: Expression
```

<a id="placement-placement.wasm.javascript_facade.symifacade_e.e814399adf66"></a>
<p class="symi-entry-owner">SymiFacade property: <code>SymiFacade.e</code></p>

```typescript signature
readonly e: Expression
```

</details>

## eulerGamma

<a id="entry-presentation_wasm_api_reference_capability_constants_euler_gamma_api_session_euler_gamma"></a>
<a id="placement-placement.wasm.wasm_module.module_eulergamma.d492a76c1776"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
eulerGamma(): Expression
```

The Euler–Mascheroni constant \(\gamma\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_eulergamma.1ff2ebfe65bd"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.eulerGamma</code></p>

```typescript signature
readonly eulerGamma: Expression
```

<a id="placement-placement.wasm.wasm_class.context_eulergamma.f3ad231b2543"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.eulerGamma</code></p>

```typescript signature
eulerGamma(): Expression
```

<a id="placement-placement.wasm.javascript_facade.symifacade_eulergamma.f378f98b8d47"></a>
<p class="symi-entry-owner">SymiFacade property: <code>SymiFacade.eulerGamma</code></p>

```typescript signature
readonly eulerGamma: Expression
```

</details>

## imaginaryUnit

<a id="entry-presentation_wasm_api_reference_capability_constants_imaginary_unit_api_session_imaginary_unit"></a>
<a id="placement-placement.wasm.wasm_module.module_imaginaryunit.ca0641437159"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
imaginaryUnit(): Expression
```

The imaginary unit \(i\) with \(i^2 = -1\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_imaginaryunit.1b78ce4eaae2"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.imaginaryUnit</code></p>

```typescript signature
readonly imaginaryUnit: Expression
```

<a id="placement-placement.wasm.wasm_class.context_imaginaryunit.deec42261320"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.imaginaryUnit</code></p>

```typescript signature
readonly imaginaryUnit: Expression
```

<a id="placement-placement.wasm.javascript_facade.symifacade_imaginaryunit.43ca2d94269d"></a>
<p class="symi-entry-owner">SymiFacade property: <code>SymiFacade.imaginaryUnit</code></p>

```typescript signature
readonly imaginaryUnit: Expression
```

</details>

## infinity

<a id="entry-presentation_wasm_evaluation_and_constants_capability_constants_infinity_api_session_infinity"></a>
<a id="placement-placement.wasm.wasm_module.module_infinity.d225021217a9"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
infinity(): Expression
```

Unsigned positive infinity \(\infty\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_infinity.43c79a8d626e"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.infinity</code></p>

```typescript signature
readonly infinity: Expression
```

<a id="placement-placement.wasm.wasm_class.context_infinity.bfd6a5bf4701"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.infinity</code></p>

```typescript signature
readonly infinity: Expression
```

<a id="placement-placement.wasm.javascript_facade.symifacade_infinity.bf44254ac060"></a>
<p class="symi-entry-owner">SymiFacade property: <code>SymiFacade.infinity</code></p>

```typescript signature
readonly infinity: Expression
```

</details>

## pi

<a id="entry-presentation_wasm_evaluation_and_constants_capability_constants_pi_api_session_pi"></a>
<a id="placement-placement.wasm.wasm_module.module_pi.0a6bfb246d23"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
pi(): Expression
```

The circle constant \(\pi\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_pi.eadf6aa4f2e3"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.pi</code></p>

```typescript signature
readonly pi: Expression
```

<a id="placement-placement.wasm.wasm_class.context_pi.a8999ab0df5a"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.pi</code></p>

```typescript signature
readonly pi: Expression
```

<a id="placement-placement.wasm.javascript_facade.symifacade_pi.650aba83836c"></a>
<p class="symi-entry-owner">SymiFacade property: <code>SymiFacade.pi</code></p>

```typescript signature
readonly pi: Expression
```

</details>

## call

<a id="entry-presentation_wasm_construction_and_parsing_capability_construction_call_api_undefinedfunction_call"></a>
<a id="placement-placement.wasm.wasm_class.undefinedfunction_call.b0d6218d5723"></a>
<p class="symi-entry-owner">UndefinedFunction method</p>

```typescript signature
call(args: Expression[]): Expression
```

WASM spelling of the Python `f(x, …)` call syntax on `undefined_function`.

## integer

<a id="entry-presentation_wasm_construction_and_parsing_capability_construction_integer_api_session_integer"></a>
<a id="placement-placement.wasm.wasm_module.module_integer.f6358fe8b988"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
integer(value: bigint): Expression
```

Build an arbitrary-precision exact integer. Python `bool` values are rejected. JavaScript's recommended facade accepts `bigint` and safe integral `number` values.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_integer.00fd0a177c13"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.integer</code></p>

```typescript signature
integer(value: bigint | number): Expression
```

<a id="placement-placement.wasm.wasm_class.context_integer.adbc02ce5b38"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.integer</code></p>

```typescript signature
integer(value: bigint): Expression
```

<a id="placement-placement.wasm.javascript_facade.symifacade_integer.d5d69dc27b57"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.integer</code></p>

```typescript signature
integer(value: bigint | number): Expression
```

</details>

## integerFromString

<a id="entry-presentation_wasm_construction_and_parsing_capability_construction_integer_from_string_api_session_integer_from_string"></a>
<a id="placement-placement.wasm.wasm_module.module_integerfromstring.f1a005df6d84"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
integerFromString(text: string): Expression
```

Build an arbitrary-precision integer literal from its decimal string.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_integerfromstring.dac330233bfa"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.integerFromString</code></p>

```typescript signature
integerFromString(text: string): Expression
```

</details>

## integral

<a id="entry-presentation_wasm_deferred_forms_capability_construction_integral_api_analysis_session_integral"></a>
<a id="placement-placement.wasm.wasm_module.module_integral.eee25ebf5a0e"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
integral(
    integrand: Expression,
    variable: string,
    lower?: Expression | null,
    upper?: Expression | null,
): Expression
```

Build an unevaluated integral node (indefinite when bounds are omitted).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_integral.f6129c72c596"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.integral</code></p>

```typescript signature
integral(
    integrand: Expression,
    variable: string,
    lower?: Expression | null,
    upper?: Expression | null,
): Expression
```

</details>

## parse

<a id="entry-presentation_wasm_construction_and_parsing_capability_construction_parse_api_session_parse"></a>
<a id="placement-placement.wasm.wasm_module.module_parse.d3722c05cfb1"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
parse(text: string): Expression
```

Parse Symi textual syntax into an expression. Accepts `^` and `**` for powers; knows the builtin function names (`sin`, `log`, `sqrt`, …) and the constants `pi`, `e`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_parse.9232ed6b93ca"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.parse</code></p>

```typescript signature
parse(text: string): Expression
```

<a id="placement-placement.wasm.wasm_class.context_parse.6a687da40992"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.parse</code></p>

```typescript signature
parse(text: string): Expression
```

<a id="placement-placement.wasm.javascript_facade.symifacade_parse.b80ff0cf5eec"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.parse</code></p>

```typescript signature
parse(text: string): Expression
```

</details>

## parseLatex

<a id="entry-presentation_wasm_serialization_and_output_capability_construction_parse_latex_api_serialization_session_parse_latex"></a>
<a id="placement-placement.wasm.wasm_module.module_parselatex.f6216d8e0b47"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
parseLatex(latex: string): any
```

Parse a LaTeX string in Symi's canonical input dialect — the inverse of `to_latex` and the parser the Symi frontend uses. Returns whichever top-level object the input denotes: an ordinary Expression, a `\begin{matrix}…\end{matrix}`, or a geometry figure (`(x, y)` point, segment, polygon, or circle), wrapped in the matching exported class exactly as `parse_serialized_object` does. Coverage spans arithmetic, powers, fractions, roots, the elementary and many special functions, comparisons, integrals (including the bare-`d` differential), Leibniz derivatives (`\frac{d}{dx}` — differentiated eagerly), limits, summations, products, determinants, and actuarial annuities. The resolution is context-aware in a way `parse` is not: a bare `i` is the imaginary unit and a bare `e` is Euler's number unless the letter is a bound index (a summation / product / limit index shadows the constant), and `\mathrm{d}` — or a bare `d` that closes an integral — is the differential operator while a bare `d` elsewhere is an ordinary variable. Raises on syntax errors.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_parselatex.691f111b5629"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.parseLatex</code></p>

```typescript signature
parseLatex(latex: string): any
```

</details>

## parseLatexWithEnvironment

<a id="entry-presentation_wasm_serialization_and_output_capability_construction_parse_latex_with_environment_api_serialization_session_parse_latex_with_environment"></a>
<a id="placement-placement.wasm.wasm_module.module_parselatexwithenvironment.0d0f63f757f1"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
parseLatexWithEnvironment(
    latex: string,
    serialized_definitions: any[],
): any
```

Parse LaTeX after building an ordered definition environment. Each serialized definition is a string with four fields separated by ASCII Unit Separator (`U+001F`): `kind`, `name`, `parameters`, and `body_latex`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_parselatexwithenvironment.3e3cebf3e09b"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.parseLatexWithEnvironment</code></p>

```typescript signature
parseLatexWithEnvironment(
    latex: string,
    serialized_definitions: any[],
): any
```

</details>

## parseSerializedObject

<a id="entry-presentation_wasm_serialization_and_output_capability_construction_parse_serialized_object_api_serialization_session_parse_serialized_object"></a>
<a id="placement-placement.wasm.wasm_module.module_parseserializedobject.d18b5b415e87"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
parseSerializedObject(text: string): any
```

Inverse of `serialize_object`; returns the matching surface class.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_parseserializedobject.c34fdf0f8316"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.parseSerializedObject</code></p>

```typescript signature
parseSerializedObject(text: string): any
```

</details>

## piecewise

<a id="entry-presentation_wasm_deferred_forms_capability_construction_piecewise_api_solving_session_piecewise"></a>
<a id="placement-placement.wasm.wasm_module.module_piecewise.c246b4400df8"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
piecewise(
    branches: Expression[],
    otherwise?: Expression | null,
): Expression
```

Build a piecewise expression from `(value, condition)` pairs with first-match semantics; `otherwise` appends an always-true final branch. Branches whose condition is provably false are dropped at construction; if every condition fails the result is the undefined sentinel.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_piecewise.2001a04b252e"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.piecewise</code></p>

```typescript signature
piecewise(branches: Iterable<PiecewiseBranch>): Expression
```

<a id="placement-placement.wasm.wasm_class.context_piecewise.9a8f7205a7fd"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.piecewise</code></p>

```typescript signature
piecewise(
    branches: Expression[],
    otherwise?: Expression | null,
): Expression
```

<a id="placement-placement.wasm.javascript_facade.symifacade_piecewise.e54e812abd39"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.piecewise</code></p>

```typescript signature
piecewise(branches: Iterable<PiecewiseBranch>): Expression
```

</details>

## product

<a id="entry-presentation_wasm_deferred_forms_capability_construction_product_api_analysis_session_product"></a>
<a id="placement-placement.wasm.wasm_module.module_product.4b346b85255f"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
product(
    multiplicand: Expression,
    index: string,
    lower: Expression,
    upper: Expression,
): Expression
```

Definite indexed product \(\prod_{\mathit{index}=\mathit{lower}}^{\mathit{upper}} \mathit{multiplicand}\), a first-class `indexed_product` binder (rendered `\prod` in LaTeX).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_product.37cc779e76ed"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.product</code></p>

```typescript signature
product(
    multiplicand: Expression,
    index: string,
    lower: Expression,
    upper: Expression,
): Expression
```

</details>

## productIndefinite

<a id="entry-presentation_wasm_construction_and_parsing_capability_construction_product_indefinite_api_analysis_session_product_indefinite"></a>
<a id="placement-placement.wasm.wasm_module.module_productindefinite.fd08393adc04"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
productIndefinite(multiplicand: Expression, index: string): Expression
```

Indefinite (anti-quotient) product: the `P(k)` satisfying `P(k+1)/P(k) = multiplicand(k)`, the multiplicative analogue of `summation_indefinite`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_productindefinite.dac6a64f8b80"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.productIndefinite</code></p>

```typescript signature
productIndefinite(multiplicand: Expression, index: string): Expression
```

</details>

## rational

<a id="entry-presentation_wasm_construction_and_parsing_capability_construction_rational_api_session_rational"></a>
<a id="placement-placement.wasm.wasm_module.module_rational.b3d3524e7701"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
rational(numerator: string, denominator: string): Expression
```

Constructs an exact reduced rational from arbitrary-size integers. A zero denominator is an argument error. Python also accepts `fractions.Fraction` wherever an expression-like input is accepted.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_rational.bba5ba8e5c64"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.rational</code></p>

```typescript signature
rational(numerator: bigint | number, denominator: bigint | number): Expression
```

<a id="placement-placement.wasm.wasm_class.context_rational.b6817b148a9c"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.rational</code></p>

```typescript signature
rational(numerator: string, denominator: string): Expression
```

<a id="placement-placement.wasm.javascript_facade.symifacade_rational.fe5d8d04f54b"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.rational</code></p>

```typescript signature
rational(numerator: bigint | number, denominator: bigint | number): Expression
```

</details>

## rationalFromFloat

<a id="entry-presentation_wasm_construction_and_parsing_capability_construction_rational_from_float_api_analysis_session_rational_from_float"></a>
<a id="placement-placement.wasm.wasm_module.module_rationalfromfloat.2868d823dc35"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
rationalFromFloat(value: number, max_denominator: bigint): Expression
```

Closest rational with denominator \(\leq\) `max_denominator` (the `Fraction.limit_denominator` algorithm).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_rationalfromfloat.1fdc38cc830e"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.rationalFromFloat</code></p>

```typescript signature
rationalFromFloat(value: number, max_denominator: bigint): Expression
```

</details>

## resetContext

<a id="entry-presentation_wasm_construction_and_parsing_capability_construction_reset_context_api_session_reset_context"></a>
<a id="placement-placement.wasm.javascript_facade.context_resetcontext.71381bfb9d67"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
resetContext(): void
```

Replace the context's entire symbol table and expression store with fresh empty ones. Warning: existing `expression`/`matrix`/geometry objects from this context become stale and must not be used afterwards — their symbol identifiers no longer resolve. Deliberately not available at module level: resetting the shared default context would strand every live object, and the weak expression store already keeps memory bounded by live objects (see the default Context).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_resetcontext.31f34760faed"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.resetContext</code></p>

```typescript signature
resetContext(): void
```

</details>

## serializeObject

<a id="entry-presentation_wasm_serialization_and_output_capability_construction_serialize_object_api_serialization_circle2d_serialize_object"></a>
<a id="placement-placement.wasm.wasm_class.circle2d_serializeobject.4ffca9023185"></a>
<p class="symi-entry-owner">Circle2d method</p>

```typescript signature
serializeObject(): string
```

Serialize an Expression, Matrix, or geometry object to the stable Symi serialization format, round-trippable via `parse_serialized_object`.

## serializeObject

<a id="entry-presentation_wasm_serialization_and_output_capability_construction_serialize_object_api_serialization_expression_serialize_object"></a>
<a id="placement-placement.wasm.wasm_class.expression_serializeobject.0e7634ac3af8"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
serializeObject(): string
```

Serialize an Expression, Matrix, or geometry object to the stable Symi serialization format, round-trippable via `parse_serialized_object`.

## serializeObject

<a id="entry-presentation_wasm_serialization_and_output_capability_construction_serialize_object_api_serialization_matrix_serialize_object"></a>
<a id="placement-placement.wasm.wasm_class.matrix_serializeobject.da3d7d802113"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
serializeObject(): string
```

Serialize an Expression, Matrix, or geometry object to the stable Symi serialization format, round-trippable via `parse_serialized_object`.

## serializeObject

<a id="entry-presentation_wasm_serialization_and_output_capability_construction_serialize_object_api_partial_differential_equations_partialdifferentialequationcoordinatechange_serialize_object"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcoordinatechange_serializeobject.15bd50391c28"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCoordinateChange method</p>

```typescript signature
serializeObject(): string
```

Serialize this coordinate change in the versioned canonical object grammar.

## serializeObject

<a id="entry-presentation_wasm_serialization_and_output_capability_construction_serialize_object_api_partial_differential_equations_partialdifferentialequationproblem_serialize_object"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationproblem_serializeobject.cf6d279e96f9"></a>
<p class="symi-entry-owner">PartialDifferentialEquationProblem method</p>

```typescript signature
serializeObject(): string
```

Serialize this problem in the versioned canonical object grammar.

## serializeObject

<a id="entry-presentation_wasm_serialization_and_output_capability_construction_serialize_object_api_serialization_point2d_serialize_object"></a>
<a id="placement-placement.wasm.wasm_class.point2d_serializeobject.aa39b3c501d6"></a>
<p class="symi-entry-owner">Point2d method</p>

```typescript signature
serializeObject(): string
```

Serialize an Expression, Matrix, or geometry object to the stable Symi serialization format, round-trippable via `parse_serialized_object`.

## serializeObject

<a id="entry-presentation_wasm_serialization_and_output_capability_construction_serialize_object_api_serialization_polygon2d_serialize_object"></a>
<a id="placement-placement.wasm.wasm_class.polygon2d_serializeobject.db8e31e4b335"></a>
<p class="symi-entry-owner">Polygon2d method</p>

```typescript signature
serializeObject(): string
```

Serialize an Expression, Matrix, or geometry object to the stable Symi serialization format, round-trippable via `parse_serialized_object`.

## serializeObject

<a id="entry-presentation_wasm_serialization_and_output_capability_construction_serialize_object_api_serialization_segment2d_serialize_object"></a>
<a id="placement-placement.wasm.wasm_class.segment2d_serializeobject.47c37e175e6d"></a>
<p class="symi-entry-owner">Segment2d method</p>

```typescript signature
serializeObject(): string
```

Serialize an Expression, Matrix, or geometry object to the stable Symi serialization format, round-trippable via `parse_serialized_object`.

## serializeObject

<a id="entry-presentation_wasm_serialization_and_output_capability_construction_serialize_object_api_serialization_triangle2d_serialize_object"></a>
<a id="placement-placement.wasm.wasm_class.triangle2d_serializeobject.75e809239ee9"></a>
<p class="symi-entry-owner">Triangle2d method</p>

```typescript signature
serializeObject(): string
```

Serialize an Expression, Matrix, or geometry object to the stable Symi serialization format, round-trippable via `parse_serialized_object`.

## summation

<a id="entry-presentation_wasm_deferred_forms_capability_construction_summation_api_analysis_session_summation"></a>
<a id="placement-placement.wasm.wasm_module.module_summation.49ecda1cfd0a"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
summation(
    summand: Expression,
    index: string,
    lower: Expression,
    upper: Expression,
): Expression
```

Build a summation node \(\sum\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_summation.008385ac03bb"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.summation</code></p>

```typescript signature
summation(
    summand: Expression,
    index: string,
    lower: Expression,
    upper: Expression,
): Expression
```

</details>

## symbol

<a id="entry-presentation_wasm_construction_and_parsing_capability_construction_symbol_api_session_symbol"></a>
<a id="placement-placement.wasm.wasm_module.module_symbol.acdb4c2a07a3"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
symbol(
    name: string,
    real?: boolean | null,
    positive?: boolean | null,
    negative?: boolean | null,
    integer?: boolean | null,
    finite?: boolean | null,
    rational?: boolean | null,
    natural?: boolean | null,
    nonzero?: boolean | null,
): Expression
```

Intern a symbol and (optionally) attach assumptions used by the assumption engine and the simplifier. Domain flags refine in the order `natural` \(\to\) `integer` \(\to\) `rational` \(\to\) `real`; `positive`/`negative` also set nonzero, and `nonzero` may be requested independently.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_symbol.00afc323719f"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.symbol</code></p>

```typescript signature
symbol(name: string): Expression
```

<a id="placement-placement.wasm.wasm_class.context_symbol.018ba3ea3259"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.symbol</code></p>

```typescript signature
symbol(
    name: string,
    real?: boolean | null,
    positive?: boolean | null,
    negative?: boolean | null,
    integer?: boolean | null,
    finite?: boolean | null,
    rational?: boolean | null,
    natural?: boolean | null,
    nonzero?: boolean | null,
): Expression
```

<a id="placement-placement.wasm.javascript_facade.symifacade_symbol.75a86a968259"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.symbol</code></p>

```typescript signature
symbol(name: string): Expression
```

</details>

## toLatex

<a id="entry-presentation_wasm_serialization_and_output_capability_construction_to_latex_api_circle2d_to_latex"></a>
<a id="placement-placement.wasm.wasm_class.circle2d_tolatex.2d6cae698d4b"></a>
<p class="symi-entry-owner">Circle2d method</p>

```typescript signature
toLatex(): string
```

Render an expression as LaTeX. Matrices and geometry objects have their own `to_latex` methods.

## toLatex

<a id="entry-presentation_wasm_serialization_and_output_capability_construction_to_latex_api_session_to_latex"></a>
<a id="placement-placement.wasm.wasm_module.module_tolatex.9d339325aaff"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
toLatex(input_expression: Expression): string
```

Render an expression as LaTeX. Matrices and geometry objects have their own `to_latex` methods.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_tolatex.be83ad30b575"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.toLatex</code></p>

```typescript signature
toLatex(input_expression: Expression): string
```

</details>

## toLatex

<a id="entry-presentation_wasm_serialization_and_output_capability_construction_to_latex_api_expression_to_latex"></a>
<a id="placement-placement.wasm.wasm_class.expression_tolatex.1ec6388c2f23"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
toLatex(): string
```

Render an expression as LaTeX. Matrices and geometry objects have their own `to_latex` methods.

## toLatex

<a id="entry-presentation_wasm_serialization_and_output_capability_construction_to_latex_api_serialization_matrix_to_latex"></a>
<a id="placement-placement.wasm.wasm_class.matrix_tolatex.c244544a6fc7"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
toLatex(): string
```

Render an expression as LaTeX. Matrices and geometry objects have their own `to_latex` methods.

## toLatex

<a id="entry-presentation_wasm_serialization_and_output_capability_construction_to_latex_api_partial_differential_equations_partialdifferentialequationproblem_to_latex"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationproblem_tolatex.101fc04fe4e5"></a>
<p class="symi-entry-owner">PartialDifferentialEquationProblem method</p>

```typescript signature
toLatex(): string
```

Render this problem as LaTeX, as a system when it carries conditions.

## toLatex

<a id="entry-presentation_wasm_serialization_and_output_capability_construction_to_latex_api_point2d_to_latex"></a>
<a id="placement-placement.wasm.wasm_class.point2d_tolatex.f41c507935a0"></a>
<p class="symi-entry-owner">Point2d method</p>

```typescript signature
toLatex(): string
```

Render an expression as LaTeX. Matrices and geometry objects have their own `to_latex` methods.

## toLatex

<a id="entry-presentation_wasm_serialization_and_output_capability_construction_to_latex_api_polygon2d_to_latex"></a>
<a id="placement-placement.wasm.wasm_class.polygon2d_tolatex.b367ecb5ca3c"></a>
<p class="symi-entry-owner">Polygon2d method</p>

```typescript signature
toLatex(): string
```

Render an expression as LaTeX. Matrices and geometry objects have their own `to_latex` methods.

## toLatex

<a id="entry-presentation_wasm_serialization_and_output_capability_construction_to_latex_api_segment2d_to_latex"></a>
<a id="placement-placement.wasm.wasm_class.segment2d_tolatex.e2e4c68ded95"></a>
<p class="symi-entry-owner">Segment2d method</p>

```typescript signature
toLatex(): string
```

Render an expression as LaTeX. Matrices and geometry objects have their own `to_latex` methods.

## toLatex

<a id="entry-presentation_wasm_serialization_and_output_capability_construction_to_latex_api_geometry_operations_triangle2d_to_latex"></a>
<a id="placement-placement.wasm.wasm_class.triangle2d_tolatex.2dd59c291c87"></a>
<p class="symi-entry-owner">Triangle2d method</p>

```typescript signature
toLatex(): string
```

Render an expression as LaTeX. Matrices and geometry objects have their own `to_latex` methods.

## toLatexWithOptions

<a id="entry-presentation_wasm_serialization_and_output_capability_construction_to_latex_with_options_api_serialization_session_to_latex_with_options"></a>
<a id="placement-placement.wasm.wasm_module.module_tolatexwithoptions.91e728aa5fb0"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
toLatexWithOptions(
    input_expression: Expression,
    exponential_style: string,
    natural_logarithm_style: string,
    multiletter_symbol_style: string,
): string
```

Render an expression as LaTeX with presentation flags. Each argument is a string naming the choice for one flag; an unrecognized name falls back to that flag's canonical default (so `to_latex_with_options(e, "", "", "")` equals `to_latex(e)`):

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_tolatexwithoptions.1022577595e7"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.toLatexWithOptions</code></p>

```typescript signature
toLatexWithOptions(
    input_expression: Expression,
    exponential_style: string,
    natural_logarithm_style: string,
    multiletter_symbol_style: string,
): string
```

</details>

## toLatexWithOptions

<a id="entry-presentation_wasm_serialization_and_output_capability_construction_to_latex_with_options_api_serialization_expression_to_latex_with_options"></a>
<a id="placement-placement.wasm.wasm_class.expression_tolatexwithoptions.e10c150aa233"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
toLatexWithOptions(
    exponential_style: string,
    natural_logarithm_style: string,
    multiletter_symbol_style: string,
): string
```

Render an expression as LaTeX with presentation flags. Each argument is a string naming the choice for one flag; an unrecognized name falls back to that flag's canonical default (so `to_latex_with_options(e, "", "", "")` equals `to_latex(e)`):

## undefinedFunction

<a id="entry-presentation_wasm_construction_and_parsing_capability_construction_undefined_function_api_session_undefined_function"></a>
<a id="placement-placement.wasm.wasm_class.context_undefinedfunction.57b03936c6a5"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
undefinedFunction(name: string): UndefinedFunction
```

A callable proxy for a user-named function. Calling it with expression arguments builds the function-call expression (see the object-model page and the worked ODE example).

## Context

<a id="entry-presentation_wasm_object_model_capability_contexts_context_api_session"></a>
<a id="placement-placement.wasm.wasm_class.context.bae89741122f"></a>
<p class="symi-entry-owner">Context constructor</p>

```typescript signature
new Context()
```

Create an isolated context with its own symbol table, interner, and assumptions.

## active

<a id="entry-presentation_wasm_object_model_capability_contexts_active_api_parallelism_parallelismcapability_active"></a>
<a id="placement-placement.wasm.wasm_class.parallelismcapability_active.7a56c9003ea3"></a>
<p class="symi-entry-owner">ParallelismCapability property</p>

```typescript signature
readonly active: boolean
```

Whether the selected backend can currently execute parallel work.

## add

<a id="entry-presentation_wasm_object_model_capability_contexts_add_api_expression_add"></a>
<a id="placement-placement.wasm.wasm_class.expression_add.96a43fe08167"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
add(other: Expression): Expression
```

Sum of this expression and `other`.

## addAssumptions

<a id="entry-presentation_wasm_object_model_capability_contexts_add_assumptions_api_session_add_assumptions"></a>
<a id="placement-placement.wasm.wasm_module.module_addassumptions.4a919b81fb21"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
addAssumptions(proposition: AssumptionProposition): void
```

Add a proposition to the default context's durable assumption store.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_addassumptions.b31f141c59eb"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.addAssumptions</code></p>

```typescript signature
addAssumptions(proposition: AssumptionProposition): void
```

</details>

## admitsAdditiveSolutionSymmetry

<a id="entry-presentation_wasm_object_model_capability_contexts_admits_additive_solution_symmetry_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_admits_additive_solution_symmetry"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryaction_admitsadditivesolutionsymmetry.330e9c43133f"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAction property</p>

```typescript signature
readonly admitsAdditiveSolutionSymmetry: boolean
```

Whether the action adds an arbitrary solution by linear superposition.

## admitsAdditiveSolutionSymmetry

<a id="entry-presentation_wasm_object_model_capability_contexts_admits_additive_solution_symmetry_api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_admits_additive_solution_symmetry"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryalgebra_admitsadditivesolutionsymmetry.f5647b5468e6"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAlgebra property</p>

```typescript signature
readonly admitsAdditiveSolutionSymmetry: boolean
```

Whether adding any solution of the linear homogeneous equation is also a symmetry.

## algebraicAssumption

<a id="entry-presentation_wasm_object_model_capability_contexts_algebraic_assumption_api_session_algebraic_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_algebraicassumption.cadab791299a"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
algebraicAssumption(subject: Expression): AssumptionProposition
```

Build an algebraicity assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_algebraicassumption.2224c5ffdadb"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.algebraicAssumption</code></p>

```typescript signature
algebraicAssumption(subject: Expression): AssumptionProposition
```

</details>

## amplitude

<a id="entry-presentation_wasm_object_model_capability_contexts_amplitude_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_amplitude"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryaction_amplitude.2730e8b0bc62"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAction property</p>

```typescript signature
readonly amplitude: Expression | undefined
```

The amplitude multiplying the transformed seed.

## and

<a id="entry-presentation_wasm_assumptions_capability_contexts_and_api_assumptionproposition_and"></a>
<a id="placement-placement.wasm.wasm_class.assumptionproposition_and.52d50e36a4e0"></a>
<p class="symi-entry-owner">AssumptionProposition method</p>

```typescript signature
and(other: AssumptionProposition): AssumptionProposition
```

Conjoin two propositions.

## appliedToSeed

<a id="entry-presentation_wasm_object_model_capability_contexts_applied_to_seed_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_applied_to_seed"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryaction_appliedtoseed.219eb332d48f"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAction method</p>

```typescript signature
appliedToSeed(seed: UndefinedFunction): Expression
```

The transformed seed solution under the action.

## appliedToSeedWithAdditiveSolution

<a id="entry-presentation_wasm_object_model_capability_contexts_applied_to_seed_with_additive_solution_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_applied_to_seed_with_additive_solution"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryaction_appliedtoseedwithadditivesolution.8948049973bd"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAction method</p>

```typescript signature
appliedToSeedWithAdditiveSolution(
    seed: UndefinedFunction,
    additive_solution: UndefinedFunction,
): Expression
```

The transformed seed solution plus an added solution under the action.

## arbitraryFunctions

<a id="entry-presentation_wasm_object_model_capability_contexts_arbitrary_functions_api_partial_differential_equations_partialdifferentialequationsolutionfamily_arbitrary_functions"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolutionfamily_arbitraryfunctions.65e4b98a96a7"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolutionFamily property</p>

```typescript signature
readonly arbitraryFunctions: PartialDifferentialEquationArbitraryFunction[]
```

The functions that stay arbitrary and opaque throughout verification.

## arity

<a id="entry-presentation_wasm_object_model_capability_contexts_arity_api_partial_differential_equations_partialdifferentialequationarbitraryfunction_arity"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationarbitraryfunction_arity.d1caa458c863"></a>
<p class="symi-entry-owner">PartialDifferentialEquationArbitraryFunction property</p>

```typescript signature
readonly arity: number
```

The recorded and validated function arity.

## ask

<a id="entry-presentation_wasm_assumptions_capability_contexts_ask_api_assumptionscope_ask"></a>
<a id="placement-placement.wasm.wasm_class.assumptionscope_ask.49091dce105c"></a>
<p class="symi-entry-owner">AssumptionScope method</p>

```typescript signature
ask(proposition: AssumptionProposition): boolean | undefined
```

Ask a proposition against the immutable scope snapshot.

## ask

<a id="entry-presentation_wasm_assumptions_capability_contexts_ask_api_session_ask"></a>
<a id="placement-placement.wasm.wasm_module.module_ask.610563575f46"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
ask(proposition: AssumptionProposition): boolean | undefined
```

Ask whether a proposition is entailed by the default context's assumptions.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_ask.d8318137f075"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.ask</code></p>

```typescript signature
ask(proposition: AssumptionProposition): boolean | undefined
```

</details>

## assuming

<a id="entry-presentation_wasm_assumptions_capability_contexts_assuming_api_assumptionscope_assuming"></a>
<a id="placement-placement.wasm.wasm_class.assumptionscope_assuming.bc3feb0b14d3"></a>
<p class="symi-entry-owner">AssumptionScope method</p>

```typescript signature
assuming(proposition: AssumptionProposition): AssumptionScope
```

Compose a further immutable overlay.

## assuming

<a id="entry-presentation_wasm_assumptions_capability_contexts_assuming_api_session_assuming"></a>
<a id="placement-placement.wasm.wasm_module.module_assuming.57d83b3bc98a"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
assuming(proposition: AssumptionProposition): AssumptionScope
```

Create an immutable local assumption scope in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_assuming.d69718f8316b"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.assuming</code></p>

```typescript signature
assuming(proposition: AssumptionProposition): AssumptionScope
```

</details>

## assumptionPropositionFromLogicalExpression

<a id="entry-presentation_wasm_object_model_capability_contexts_assumption_proposition_from_logical_expression_api_session_assumption_proposition_from_logical_expression"></a>
<a id="placement-placement.wasm.wasm_module.module_assumptionpropositionfromlogicalexpression.135c42fd1172"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
assumptionPropositionFromLogicalExpression(logical_expression: Expression): AssumptionProposition
```

Convert a supported logical expression to a typed assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_assumptionpropositionfromlogicalexpression.5ea25bd33b20"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.assumptionPropositionFromLogicalExpression</code></p>

```typescript signature
assumptionPropositionFromLogicalExpression(logical_expression: Expression): AssumptionProposition
```

</details>

## assumptionsOf

<a id="entry-presentation_wasm_object_model_capability_contexts_assumptions_of_api_session_assumptions_of"></a>
<a id="placement-placement.wasm.wasm_module.module_assumptionsof.55389b6d8956"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
assumptionsOf(name: string): string
```

Return every assumption declared about one symbol, as a list of proposition texts such as `"real(x)"` or `"prime(n)"`. The variable may be a name or same-context symbol. The list is what was declared, not what can be proved; use `ask` for a three-valued verdict.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_assumptionsof.3e2500baccd2"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.assumptionsOf</code></p>

```typescript signature
assumptionsOf(value: VariableLike): Record<string, string>
```

<a id="placement-placement.wasm.wasm_class.context_assumptionsof.66a8eb453c55"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.assumptionsOf</code></p>

```typescript signature
assumptionsOf(name: string): string
```

<a id="placement-placement.wasm.javascript_facade.symifacade_assumptionsof.b9741e10cd22"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.assumptionsOf</code></p>

```typescript signature
assumptionsOf(value: VariableLike): Record<string, string>
```

</details>

## backend

<a id="entry-presentation_wasm_object_model_capability_contexts_backend_api_parallelism_parallelismcapability_backend"></a>
<a id="placement-placement.wasm.wasm_class.parallelismcapability_backend.6ace752fbfa8"></a>
<p class="symi-entry-owner">ParallelismCapability property</p>

```typescript signature
readonly backend: string
```

Return the backend selected for this target.

## basis

<a id="entry-presentation_wasm_object_model_capability_contexts_basis_api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_basis"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryalgebra_basis.eddc9c0c01b2"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAlgebra property</p>

```typescript signature
readonly basis: PartialDifferentialEquationPointSymmetryGenerator[]
```

The independently verified basis generators, one per parameter.

## boundaryConditionResiduals

<a id="entry-presentation_wasm_object_model_capability_contexts_boundary_condition_residuals_api_partial_differential_equations_partialdifferentialequationverificationreport_boundary_condition_residuals"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationverificationreport_boundaryconditionresiduals.1c35c85c2d81"></a>
<p class="symi-entry-owner">PartialDifferentialEquationVerificationReport property</p>

```typescript signature
readonly boundaryConditionResiduals: PartialDifferentialEquationVerificationResidual[]
```

One reduced residual per boundary condition, in insertion order.

## boundaryConditions

<a id="entry-presentation_wasm_object_model_capability_contexts_boundary_conditions_api_partial_differential_equations_partialdifferentialequationproblem_boundary_conditions"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationproblem_boundaryconditions.b75ca8d49cd1"></a>
<p class="symi-entry-owner">PartialDifferentialEquationProblem property</p>

```typescript signature
readonly boundaryConditions: Expression[]
```

The boundary-condition residuals in insertion order.

## canonicalizePartialDifferentialEquation

<a id="entry-presentation_wasm_object_model_capability_contexts_canonicalize_partial_differential_equation_api_partial_differential_equations_session_canonicalize_partial_differential_equation"></a>
<a id="placement-placement.wasm.wasm_module.module_canonicalizepartialdifferentialequation.be642e9771be"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
canonicalizePartialDifferentialEquation(problem: PartialDifferentialEquationProblem): PartialDifferentialEquationCanonicalizationResult
```

Construct and independently verify exact canonical coordinates for a supported PDE.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_canonicalizepartialdifferentialequation.f516f4268b31"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.canonicalizePartialDifferentialEquation</code></p>

```typescript signature
canonicalizePartialDifferentialEquation(problem: PartialDifferentialEquationProblem): PartialDifferentialEquationCanonicalizationResult
```

</details>

## canonicalized

<a id="entry-presentation_wasm_object_model_capability_contexts_canonicalized_api_partial_differential_equations_partialdifferentialequationcanonicalizationresult_canonicalized"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcanonicalizationresult_canonicalized.a1fcbcf36d91"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCanonicalizationResult property</p>

```typescript signature
readonly canonicalized: boolean
```

Whether verified canonical coordinates were constructed.

## cases

<a id="entry-presentation_wasm_object_model_capability_contexts_cases_api_partial_differential_equations_partialdifferentialequationsecondorderclassification_cases"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsecondorderclassification_cases.f4b384b5a07a"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSecondOrderClassification property</p>

```typescript signature
readonly cases: PartialDifferentialEquationSecondOrderTypeCase[]
```

The complete exact case table, when the verdict is conditional.

## changePartialDifferentialEquationVariables

<a id="entry-presentation_wasm_object_model_capability_contexts_change_partial_differential_equation_variables_api_partial_differential_equations_session_change_partial_differential_equation_variables"></a>
<a id="placement-placement.wasm.wasm_module.module_changepartialdifferentialequationvariables.9fe6a5fa1ccc"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
changePartialDifferentialEquationVariables(
    problem: PartialDifferentialEquationProblem,
    target_variables: string[],
    forward_coordinates?: Expression[] | null,
    inverse_coordinates?: Expression[] | null,
    target_dependent_function?: UndefinedFunction | null,
): PartialDifferentialEquationTransformationResult
```

Transform a two-variable PDE through an exact user-supplied change of variables.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_changepartialdifferentialequationvariables.2b70c639987b"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.changePartialDifferentialEquationVariables</code></p>

```typescript signature
changePartialDifferentialEquationVariables(
    problem: PartialDifferentialEquationProblem,
    target_variables: string[],
    forward_coordinates?: Expression[] | null,
    inverse_coordinates?: Expression[] | null,
    target_dependent_function?: UndefinedFunction | null,
): PartialDifferentialEquationTransformationResult
```

</details>

## claimedGoverningResidual

<a id="entry-presentation_wasm_object_model_capability_contexts_claimed_governing_residual_api_partial_differential_equations_partialdifferentialequationtransformationverificationreport_claimed_governing_residual"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationtransformationverificationreport_claimedgoverningresidual.0461d4db2c4c"></a>
<p class="symi-entry-owner">PartialDifferentialEquationTransformationVerificationReport property</p>

```typescript signature
readonly claimedGoverningResidual: Expression
```

The governing residual the transformation claimed.

## classifyPartialDifferentialEquation

<a id="entry-presentation_wasm_object_model_capability_contexts_classify_partial_differential_equation_api_partial_differential_equations_session_classify_partial_differential_equation"></a>
<a id="placement-placement.wasm.wasm_module.module_classifypartialdifferentialequation.a666c997e176"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
classifyPartialDifferentialEquation(problem: PartialDifferentialEquationProblem): PartialDifferentialEquationClassification
```

Classify a validated scalar partial differential equation with exact structural analysis.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_classifypartialdifferentialequation.e650f9bebef6"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.classifyPartialDifferentialEquation</code></p>

```typescript signature
classifyPartialDifferentialEquation(problem: PartialDifferentialEquationProblem): PartialDifferentialEquationClassification
```

</details>

## classifySecondOrderPartialDifferentialEquation

<a id="entry-presentation_wasm_object_model_capability_contexts_classify_second_order_partial_differential_equation_api_partial_differential_equations_session_classify_second_order_partial_differential_equation"></a>
<a id="placement-placement.wasm.wasm_module.module_classifysecondorderpartialdifferentialequation.37e1c5283f6c"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
classifySecondOrderPartialDifferentialEquation(problem: PartialDifferentialEquationProblem): PartialDifferentialEquationSecondOrderClassification
```

Classify a two-variable linear second-order PDE over real coordinates.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_classifysecondorderpartialdifferentialequation.278c33c7f044"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.classifySecondOrderPartialDifferentialEquation</code></p>

```typescript signature
classifySecondOrderPartialDifferentialEquation(problem: PartialDifferentialEquationProblem): PartialDifferentialEquationSecondOrderClassification
```

</details>

## clearAllAssumptions

<a id="entry-presentation_wasm_object_model_capability_contexts_clear_all_assumptions_api_session_clear_all_assumptions"></a>
<a id="placement-placement.wasm.wasm_module.module_clearallassumptions.0db5db87e18d"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
clearAllAssumptions(): void
```

Clear all assumptions in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_clearallassumptions.bd79ad9a9a16"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.clearAllAssumptions</code></p>

```typescript signature
clearAllAssumptions(): void
```

</details>

## clearAssumptions

<a id="entry-presentation_wasm_object_model_capability_contexts_clear_assumptions_api_session_clear_assumptions"></a>
<a id="placement-placement.wasm.wasm_module.module_clearassumptions.b12f408b3470"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
clearAssumptions(name: string): void
```

Reset one symbol's assumptions to the default (complex domain, every property unknown).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_clearassumptions.5956b856933d"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.clearAssumptions</code></p>

```typescript signature
clearAssumptions(name: string): void
```

</details>

## coefficientData

<a id="entry-presentation_wasm_object_model_capability_contexts_coefficient_data_api_partial_differential_equations_partialdifferentialequationclassification_coefficient_data"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationclassification_coefficientdata.8e7c41f8826b"></a>
<p class="symi-entry-owner">PartialDifferentialEquationClassification property</p>

```typescript signature
readonly coefficientData: PartialDifferentialEquationCoefficientData
```

The exact affine coefficient data extracted from the governing residual.

## compiled

<a id="entry-presentation_wasm_object_model_capability_contexts_compiled_api_parallelism_parallelismcapability_compiled"></a>
<a id="placement-placement.wasm.wasm_class.parallelismcapability_compiled.cdc011ae2a95"></a>
<p class="symi-entry-owner">ParallelismCapability property</p>

```typescript signature
readonly compiled: boolean
```

Whether this target was compiled with a parallel backend.

## complexAssumption

<a id="entry-presentation_wasm_object_model_capability_contexts_complex_assumption_api_session_complex_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_complexassumption.1304cbe2e12a"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
complexAssumption(subject: Expression): AssumptionProposition
```

Build a finite-complex assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_complexassumption.da3971bb10ac"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.complexAssumption</code></p>

```typescript signature
complexAssumption(subject: Expression): AssumptionProposition
```

</details>

## complexEntries

<a id="entry-presentation_wasm_object_model_capability_contexts_complex_entries_api_session_complex_entries"></a>
<a id="placement-placement.wasm.wasm_module.module_complexentries.e48f22cc70fa"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
complexEntries(subject: Matrix): AssumptionProposition
```

Build a finite-complex-entry proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_complexentries.6d9dfd9287af"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.complexEntries</code></p>

```typescript signature
complexEntries(subject: Matrix): AssumptionProposition
```

</details>

## components

<a id="entry-presentation_wasm_object_model_capability_contexts_components_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_components"></a>
<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsystemsolveresult_components.b446bfacdaad"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSystemSolveResult property</p>

```typescript signature
readonly components: Expression[]
```

One explicit value per declared unknown, in declaration order, when solved.

## compositeAssumption

<a id="entry-presentation_wasm_object_model_capability_contexts_composite_assumption_api_session_composite_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_compositeassumption.3b1dc4123512"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
compositeAssumption(subject: Expression): AssumptionProposition
```

Build a compositeness assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_compositeassumption.fa27370d4eed"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.compositeAssumption</code></p>

```typescript signature
compositeAssumption(subject: Expression): AssumptionProposition
```

</details>

## compositionResiduals

<a id="entry-presentation_wasm_object_model_capability_contexts_composition_residuals_api_partial_differential_equations_partialdifferentialequationtransformationverificationreport_composition_residuals"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationtransformationverificationreport_compositionresiduals.d94d4f97f722"></a>
<p class="symi-entry-owner">PartialDifferentialEquationTransformationVerificationReport property</p>

```typescript signature
readonly compositionResiduals: Expression[]
```

Every forward and inverse map-composition residual.

## condition

<a id="entry-presentation_wasm_object_model_capability_contexts_condition_api_partial_differential_equations_partialdifferentialequationsecondordertypecase_condition"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsecondordertypecase_condition.742ceaffa3e1"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSecondOrderTypeCase property</p>

```typescript signature
readonly condition: AssumptionProposition
```

The exact condition under which this case's classical type holds.

## congruenceModulus

<a id="entry-presentation_wasm_object_model_capability_contexts_congruence_modulus_api_assumptionproposition_congruence_modulus"></a>
<a id="placement-placement.wasm.wasm_module.module_congruencemodulus.17e549d7616a"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
congruenceModulus(proposition: AssumptionProposition): Expression | undefined
```

Return the congruence modulus when present.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.assumptionproposition_congruencemodulus.ec7759ccca4c"></a>
<p class="symi-entry-owner">AssumptionProposition method: <code>AssumptionProposition.congruenceModulus</code></p>

```typescript signature
congruenceModulus(): Expression | undefined
```

</details>

## congruentAssumption

<a id="entry-presentation_wasm_object_model_capability_contexts_congruent_assumption_api_defaults_session_congruent_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_congruentassumption.906a88486d5e"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
congruentAssumption(
    left: Expression,
    right: Expression,
    modulus: Expression,
): AssumptionProposition
```

Build an integer-congruence assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_congruentassumption.f6180c227f00"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.congruentAssumption</code></p>

```typescript signature
congruentAssumption(
    left: Expression,
    right: Expression,
    modulus: Expression,
): AssumptionProposition
```

</details>

## constructPartialDifferentialEquationPointSymmetryAction

<a id="entry-presentation_wasm_object_model_capability_contexts_construct_partial_differential_equation_point_symmetry_action_api_partial_differential_equations_session_construct_partial_differential_equation_point_symmetry_action"></a>
<a id="placement-placement.wasm.wasm_module.module_constructpartialdifferentialequationpointsymmetryaction.6b50472b60fd"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
constructPartialDifferentialEquationPointSymmetryAction(problem: PartialDifferentialEquationProblem): PartialDifferentialEquationPointSymmetryAction
```

Integrate and compose the point-symmetry algebra of a PDE into its connected local action.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_constructpartialdifferentialequationpointsymmetryaction.54cba3ee5909"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.constructPartialDifferentialEquationPointSymmetryAction</code></p>

```typescript signature
constructPartialDifferentialEquationPointSymmetryAction(problem: PartialDifferentialEquationProblem): PartialDifferentialEquationPointSymmetryAction
```

</details>

## coordinateChange

<a id="entry-presentation_wasm_object_model_capability_contexts_coordinate_change_api_partial_differential_equations_partialdifferentialequationtransformationresult_coordinate_change"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationtransformationresult_coordinatechange.8d17b2f53859"></a>
<p class="symi-entry-owner">PartialDifferentialEquationTransformationResult property</p>

```typescript signature
readonly coordinateChange: PartialDifferentialEquationCoordinateChange | undefined
```

The validated coordinate change of a successful transformation.

## coordinateInfinitesimals

<a id="entry-presentation_wasm_object_model_capability_contexts_coordinate_infinitesimals_api_partial_differential_equations_partialdifferentialequationpointsymmetrygenerator_coordinate_infinitesimals"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetrygenerator_coordinateinfinitesimals.abdbda70555b"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryGenerator property</p>

```typescript signature
readonly coordinateInfinitesimals: Expression[]
```

The coordinate infinitesimals in the problem's independent-variable order.

## couldHold

<a id="entry-presentation_wasm_object_model_capability_contexts_could_hold_api_assumptionscope_could_hold"></a>
<a id="placement-placement.wasm.wasm_class.assumptionscope_couldhold.2d2a6b64246b"></a>
<p class="symi-entry-owner">AssumptionScope method</p>

```typescript signature
couldHold(proposition: AssumptionProposition): boolean | undefined
```

Ask whether a proposition is compatible with the immutable scope snapshot.

## couldHold

<a id="entry-presentation_wasm_object_model_capability_contexts_could_hold_api_session_could_hold"></a>
<a id="placement-placement.wasm.wasm_module.module_couldhold.4201d9b1b3bb"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
couldHold(proposition: AssumptionProposition): boolean | undefined
```

Ask whether a proposition is compatible with the default context's assumptions.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_couldhold.66586843bd55"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.couldHold</code></p>

```typescript signature
couldHold(proposition: AssumptionProposition): boolean | undefined
```

</details>

## decline

<a id="entry-presentation_wasm_object_model_capability_contexts_decline_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_decline"></a>
<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsolveresult_decline.24f117c6e555"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSolveResult property</p>

```typescript signature
readonly decline: string | undefined
```

The typed reason no certified candidate was produced.

## decline

<a id="entry-presentation_wasm_object_model_capability_contexts_decline_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_decline"></a>
<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsystemsolveresult_decline.a04d9d49a2dc"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSystemSolveResult property</p>

```typescript signature
readonly decline: string | undefined
```

The typed reason no certified assignment was produced.

## decline

<a id="entry-presentation_wasm_object_model_capability_contexts_decline_api_partial_differential_equations_partialdifferentialequationcanonicalizationresult_decline"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcanonicalizationresult_decline.864bf76b4827"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCanonicalizationResult property</p>

```typescript signature
readonly decline: string | undefined
```

The exact reason automatic canonicalization declined.

## decline

<a id="entry-presentation_wasm_object_model_capability_contexts_decline_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_decline"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryaction_decline.f20fea2d2f62"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAction property</p>

```typescript signature
readonly decline: string | undefined
```

The typed reason the action was not constructed.

## decline

<a id="entry-presentation_wasm_object_model_capability_contexts_decline_api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_decline"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryalgebra_decline.5d9e716a25c4"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAlgebra property</p>

```typescript signature
readonly decline: string | undefined
```

The typed reason the algebra was not derived.

## decline

<a id="entry-presentation_wasm_object_model_capability_contexts_decline_api_partial_differential_equations_partialdifferentialequationsecondorderclassification_decline"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsecondorderclassification_decline.db4e6719bf15"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSecondOrderClassification property</p>

```typescript signature
readonly decline: string | undefined
```

The exact reason an unknown analysis could not be completed.

## decline

<a id="entry-presentation_wasm_object_model_capability_contexts_decline_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_decline"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsimilaritysolution_decline.852cf946c2d7"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSimilaritySolution property</p>

```typescript signature
readonly decline: string | undefined
```

The typed reason no similarity family was produced.

## decline

<a id="entry-presentation_wasm_object_model_capability_contexts_decline_api_partial_differential_equations_partialdifferentialequationsolveresult_decline"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolveresult_decline.661f84740037"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolveResult property</p>

```typescript signature
readonly decline: string | undefined
```

The stable decline reason, when no solution was produced.

## decline

<a id="entry-presentation_wasm_object_model_capability_contexts_decline_api_partial_differential_equations_partialdifferentialequationtransformationresult_decline"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationtransformationresult_decline.421dc5aa6263"></a>
<p class="symi-entry-owner">PartialDifferentialEquationTransformationResult property</p>

```typescript signature
readonly decline: string | undefined
```

The exact reason no transformation was produced.

## defaultContext

<a id="entry-presentation_wasm_object_model_capability_contexts_default_context_api_defaults_session_default_context"></a>
<a id="placement-placement.wasm.wasm_module.module_defaultcontext.6f6779c9ec73"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
defaultContext(): Context
```

Return a handle to the thread's default context — the same context every module-level function and direct structural-class constructor uses. Use it for `undefined_function`, or to pass to code written against the explicit-context API. Each call returns a new handle to the same underlying context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_defaultcontext.9502059e3f0c"></a>
<p class="symi-entry-owner">SymiFacade property: <code>SymiFacade.defaultContext</code></p>

```typescript signature
defaultContext: Context
```

</details>

## definedAssumption

<a id="entry-presentation_wasm_object_model_capability_contexts_defined_assumption_api_session_defined_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_definedassumption.5219edfb0174"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
definedAssumption(subject: Expression): AssumptionProposition
```

Build a pointwise definedness assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_definedassumption.8c5bd258ba52"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.definedAssumption</code></p>

```typescript signature
definedAssumption(subject: Expression): AssumptionProposition
```

</details>

## dependentFunction

<a id="entry-presentation_wasm_object_model_capability_contexts_dependent_function_api_partial_differential_equations_partialdifferentialequationproblem_dependent_function"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationproblem_dependentfunction.9db624a214dc"></a>
<p class="symi-entry-owner">PartialDifferentialEquationProblem property</p>

```typescript signature
readonly dependentFunction: string
```

The declared dependent-function name.

## dependentInfinitesimal

<a id="entry-presentation_wasm_object_model_capability_contexts_dependent_infinitesimal_api_partial_differential_equations_partialdifferentialequationpointsymmetrygenerator_dependent_infinitesimal"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetrygenerator_dependentinfinitesimal.f8f04bc3c924"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryGenerator property</p>

```typescript signature
readonly dependentInfinitesimal: Expression
```

The dependent infinitesimal of the generator.

## derivativeCoefficients

<a id="entry-presentation_wasm_object_model_capability_contexts_derivative_coefficients_api_partial_differential_equations_partialdifferentialequationprincipalpart_derivative_coefficients"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationprincipalpart_derivativecoefficients.6a4bbb5c5d56"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPrincipalPart property</p>

```typescript signature
readonly derivativeCoefficients: PartialDifferentialEquationPrincipalCoefficient[]
```

The raw mixed-derivative coefficients, before symmetrization halves them.

## derivativeOrders

<a id="entry-presentation_wasm_object_model_capability_contexts_derivative_orders_unresolved"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationjetcoefficient_derivativeorders.e19d6b4d3f6d"></a>
<p class="symi-entry-owner">PartialDifferentialEquationJetCoefficient property</p>

```typescript signature
readonly derivativeOrders: Uint32Array
```

The derivative multi-index of the jet this coefficient multiplies.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationprincipalcoefficient_derivativeorders.e1f27e9ced4d"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPrincipalCoefficient property: <code>PartialDifferentialEquationPrincipalCoefficient.derivativeOrders</code></p>

```typescript signature
readonly derivativeOrders: Uint32Array
```

</details>

## derivePartialDifferentialEquationPointSymmetries

<a id="entry-presentation_wasm_object_model_capability_contexts_derive_partial_differential_equation_point_symmetries_api_partial_differential_equations_session_derive_partial_differential_equation_point_symmetries"></a>
<a id="placement-placement.wasm.wasm_module.module_derivepartialdifferentialequationpointsymmetries.772574d4d35d"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
derivePartialDifferentialEquationPointSymmetries(problem: PartialDifferentialEquationProblem): PartialDifferentialEquationPointSymmetryAlgebra
```

Derive the point-symmetry algebra of a scalar PDE, each basis generator independently verified.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_derivepartialdifferentialequationpointsymmetries.9b48ce1a250b"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.derivePartialDifferentialEquationPointSymmetries</code></p>

```typescript signature
derivePartialDifferentialEquationPointSymmetries(problem: PartialDifferentialEquationProblem): PartialDifferentialEquationPointSymmetryAlgebra
```

</details>

## deserializeAssumptionProposition

<a id="entry-presentation_wasm_object_model_capability_contexts_deserialize_assumption_proposition_api_session_deserialize_assumption_proposition"></a>
<a id="placement-placement.wasm.wasm_module.module_deserializeassumptionproposition.4165a4b54429"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
deserializeAssumptionProposition(text: string): AssumptionProposition
```

Parse a versioned canonical assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_deserializeassumptionproposition.aff4c5500d99"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.deserializeAssumptionProposition</code></p>

```typescript signature
deserializeAssumptionProposition(text: string): AssumptionProposition
```

</details>

## determiningEquations

<a id="entry-presentation_wasm_object_model_capability_contexts_determining_equations_api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_determining_equations"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryalgebra_determiningequations.f099cf8497a9"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAlgebra property</p>

```typescript signature
readonly determiningEquations: Expression[]
```

The determining equations exactly as derived, before any reduction.

## diagnostic

<a id="entry-presentation_wasm_object_model_capability_contexts_diagnostic_api_parallelism_bulkexpressionoutcome_diagnostic"></a>
<a id="placement-placement.wasm.wasm_class.bulkexpressionoutcome_diagnostic.3aff803bd40b"></a>
<p class="symi-entry-owner">BulkExpressionOutcome property</p>

```typescript signature
readonly diagnostic: string | undefined
```

Return the item diagnostic when the operation declined or failed.

## diagnostic

<a id="entry-presentation_wasm_object_model_capability_contexts_diagnostic_api_parallelism_bulktextoutcome_diagnostic"></a>
<a id="placement-placement.wasm.wasm_class.bulktextoutcome_diagnostic.1f99261ae9a5"></a>
<p class="symi-entry-owner">BulkTextOutcome property</p>

```typescript signature
readonly diagnostic: string | undefined
```

Return the item diagnostic when the operation declined or failed.

## diagonalMatrix

<a id="entry-presentation_wasm_object_model_capability_contexts_diagonal_matrix_api_session_diagonal_matrix"></a>
<a id="placement-placement.wasm.wasm_module.module_diagonalmatrix.0b4ff30c00c6"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
diagonalMatrix(subject: Matrix): AssumptionProposition
```

Build a diagonal-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_diagonalmatrix.25c6eea29c73"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.diagonalMatrix</code></p>

```typescript signature
diagonalMatrix(subject: Matrix): AssumptionProposition
```

</details>

## differentiateBulk

<a id="entry-presentation_wasm_object_model_capability_contexts_differentiate_bulk_api_session_differentiate_bulk"></a>
<a id="placement-placement.wasm.wasm_module.module_differentiatebulk.88e9636eaec7"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
differentiateBulk(
    targets: Expression[],
    variable: Expression,
): BulkExpressionOutcome[]
```

Differentiate an ordered collection in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_differentiatebulk.60c81c04a52a"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.differentiateBulk</code></p>

```typescript signature
differentiateBulk(
    targets: Expression[],
    variable: Expression,
): BulkExpressionOutcome[]
```

</details>

## dischargedObligations

<a id="entry-presentation_wasm_object_model_capability_contexts_discharged_obligations_api_partial_differential_equations_partialdifferentialequationsolutionprovenance_discharged_obligations"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolutionprovenance_dischargedobligations.346e920762b6"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolutionProvenance property</p>

```typescript signature
readonly dischargedObligations: string[]
```

The obligations discharged by exact query before the solution was returned.

## discoverPartialDifferentialEquation

<a id="entry-presentation_wasm_object_model_capability_contexts_discover_partial_differential_equation_api_partial_differential_equations_session_discover_partial_differential_equation"></a>
<a id="placement-placement.wasm.wasm_module.module_discoverpartialdifferentialequation.8b0d6696025b"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
discoverPartialDifferentialEquation(
    equation: Expression,
    initial_conditions?: Expression[] | null,
    boundary_conditions?: Expression[] | null,
): PartialDifferentialEquationProblem
```

Discover the unique scalar partial differential equation signature from one governing residual, in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_discoverpartialdifferentialequation.466949e3ded0"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.discoverPartialDifferentialEquation</code></p>

```typescript signature
discoverPartialDifferentialEquation(
    equation: Expression,
    initial_conditions?: Expression[] | null,
    boundary_conditions?: Expression[] | null,
): PartialDifferentialEquationProblem
```

</details>

## discriminant

<a id="entry-presentation_wasm_object_model_capability_contexts_discriminant_api_partial_differential_equations_partialdifferentialequationsecondorderclassification_discriminant"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsecondorderclassification_discriminant.153d7de9dec8"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSecondOrderClassification property</p>

```typescript signature
readonly discriminant: Expression
```

The exact discriminant `b^2 - a*c` of the symmetric principal matrix.

## elements

<a id="entry-presentation_wasm_object_model_capability_contexts_elements_api_results_setenumeration_elements"></a>
<a id="placement-placement.wasm.wasm_class.setenumeration_elements.521d21fa5162"></a>
<p class="symi-entry-owner">SetEnumeration property</p>

```typescript signature
readonly elements: Expression[]
```

The exact elements produced, in increasing order.

## equalAssumption

<a id="entry-presentation_wasm_object_model_capability_contexts_equal_assumption_api_defaults_session_equal_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_equalassumption.24d5230bded4"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
equalAssumption(
    left: Expression,
    right: Expression,
): AssumptionProposition
```

Build an equality assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_equalassumption.8c5d0d48bbee"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.equalAssumption</code></p>

```typescript signature
equalAssumption(
    left: Expression,
    right: Expression,
): AssumptionProposition
```

</details>

## equationType

<a id="entry-presentation_wasm_object_model_capability_contexts_equation_type_api_partial_differential_equations_partialdifferentialequationsecondorderclassification_equation_type"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsecondorderclassification_equationtype.5766d4f3f662"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSecondOrderClassification property</p>

```typescript signature
readonly equationType: string | undefined
```

The single proved classical type, when the verdict is definite.

## equationType

<a id="entry-presentation_wasm_object_model_capability_contexts_equation_type_api_partial_differential_equations_partialdifferentialequationsecondordertypecase_equation_type"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsecondordertypecase_equationtype.46e990429976"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSecondOrderTypeCase property</p>

```typescript signature
readonly equationType: string
```

The classical type proved under this case's condition.

## establishesCompleteness

<a id="entry-presentation_wasm_object_model_capability_contexts_establishes_completeness_api_partial_differential_equations_partialdifferentialequationsolutionfamily_establishes_completeness"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolutionfamily_establishescompleteness.57026acb665d"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolutionFamily property</p>

```typescript signature
readonly establishesCompleteness: boolean
```

Whether the family carries a completeness theorem whose every identity was proved.

## evaluateNumericBulk

<a id="entry-presentation_wasm_object_model_capability_contexts_evaluate_numeric_bulk_api_session_evaluate_numeric_bulk"></a>
<a id="placement-placement.wasm.wasm_module.module_evaluatenumericbulk.408fe965e833"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
evaluateNumericBulk(targets: Expression[]): BulkExpressionOutcome[]
```

Evaluate an ordered collection numerically in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_evaluatenumericbulk.1d8e7313ad2a"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.evaluateNumericBulk</code></p>

```typescript signature
evaluateNumericBulk(targets: Expression[]): BulkExpressionOutcome[]
```

</details>

## evenAssumption

<a id="entry-presentation_wasm_object_model_capability_contexts_even_assumption_api_session_even_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_evenassumption.edd68ccb590f"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
evenAssumption(subject: Expression): AssumptionProposition
```

Build an evenness assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_evenassumption.bb78156582ab"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.evenAssumption</code></p>

```typescript signature
evenAssumption(subject: Expression): AssumptionProposition
```

</details>

## executionMode

<a id="entry-presentation_wasm_object_model_capability_contexts_execution_mode_api_session_execution_mode"></a>
<a id="placement-placement.wasm.wasm_module.module_executionmode.d4cea0f8949e"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
executionMode(): string
```

Return the execution mode of the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_executionmode.fb37feb3b5e7"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.executionMode</code></p>

```typescript signature
executionMode(): string
```

</details>

## expandBulk

<a id="entry-presentation_wasm_object_model_capability_contexts_expand_bulk_api_session_expand_bulk"></a>
<a id="placement-placement.wasm.wasm_module.module_expandbulk.9bd6e6330993"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
expandBulk(targets: Expression[]): BulkExpressionOutcome[]
```

Expand an ordered collection in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_expandbulk.ddbf38f0af39"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.expandBulk</code></p>

```typescript signature
expandBulk(targets: Expression[]): BulkExpressionOutcome[]
```

</details>

## explicitBranch

<a id="entry-presentation_wasm_object_model_capability_contexts_explicit_branch_api_partial_differential_equations_partialdifferentialequationverificationreport_explicit_branch"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationverificationreport_explicitbranch.4065ca30e756"></a>
<p class="symi-entry-owner">PartialDifferentialEquationVerificationReport property</p>

```typescript signature
readonly explicitBranch: Expression | undefined
```

The isolated explicit branch checked for an implicit candidate.

## explicitPartialDifferentialEquationSolution

<a id="entry-presentation_wasm_object_model_capability_contexts_explicit_partial_differential_equation_solution_api_partial_differential_equations_session_explicit_partial_differential_equation_solution"></a>
<a id="placement-placement.wasm.wasm_module.module_explicitpartialdifferentialequationsolution.71efe41cb42c"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
explicitPartialDifferentialEquationSolution(
    solution: Expression,
    arbitrary_functions?: PartialDifferentialEquationArbitraryFunction[] | null,
    proof_obligations?: string[] | null,
): PartialDifferentialEquationSolutionFamily
```

Create an explicit partial differential equation solution family in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_explicitpartialdifferentialequationsolution.36080a4f3827"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.explicitPartialDifferentialEquationSolution</code></p>

```typescript signature
explicitPartialDifferentialEquationSolution(
    solution: Expression,
    arbitrary_functions?: PartialDifferentialEquationArbitraryFunction[] | null,
    proof_obligations?: string[] | null,
): PartialDifferentialEquationSolutionFamily
```

</details>

## expression

<a id="entry-presentation_wasm_object_model_capability_contexts_expression_unresolved"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolutionfamily_expression.466f56fd3a0c"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolutionFamily property</p>

```typescript signature
readonly expression: Expression
```

The exact candidate expression carried by this family.

## extendedRealAssumption

<a id="entry-presentation_wasm_object_model_capability_contexts_extended_real_assumption_api_session_extended_real_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_extendedrealassumption.b6b7622d86b1"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
extendedRealAssumption(subject: Expression): AssumptionProposition
```

Build an extended-real assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_extendedrealassumption.ae5e7bb5a3e9"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.extendedRealAssumption</code></p>

```typescript signature
extendedRealAssumption(subject: Expression): AssumptionProposition
```

</details>

## finiteAssumption

<a id="entry-presentation_wasm_object_model_capability_contexts_finite_assumption_api_session_finite_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_finiteassumption.6ae53821afcc"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
finiteAssumption(subject: Expression): AssumptionProposition
```

Build a finiteness assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_finiteassumption.f2b7a40022a4"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.finiteAssumption</code></p>

```typescript signature
finiteAssumption(subject: Expression): AssumptionProposition
```

</details>

## firstEquation

<a id="entry-presentation_wasm_object_model_capability_contexts_first_equation_api_partial_differential_equations_partialdifferentialequationseparationresult_first_equation"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationseparationresult_firstequation.14ab74e83d20"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSeparationResult property</p>

```typescript signature
readonly firstEquation: PartialDifferentialEquationSeparatedEquation
```

The first exact one-variable ordinary differential equation.

## form

<a id="entry-presentation_wasm_object_model_capability_contexts_form_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_form"></a>
<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsolveresult_form.ed5c138e707a"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSolveResult property</p>

```typescript signature
readonly form: string | undefined
```

Whether the solution is the value of the unknown or a relation read as zero.

## form

<a id="entry-presentation_wasm_object_model_capability_contexts_form_api_partial_differential_equations_partialdifferentialequationsolutionfamily_form"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolutionfamily_form.8966e9fa5d06"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolutionFamily property</p>

```typescript signature
readonly form: string
```

Whether this candidate is an `explicit` value or an `implicit` residual.

## forwardCoordinates

<a id="entry-presentation_wasm_object_model_capability_contexts_forward_coordinates_api_partial_differential_equations_partialdifferentialequationcoordinatechange_forward_coordinates"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcoordinatechange_forwardcoordinates.0aa8930b1189"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCoordinateChange property</p>

```typescript signature
readonly forwardCoordinates: Expression[]
```

The ordered source-to-target coordinate expressions.

## frequencyDomainEquation

<a id="entry-presentation_wasm_object_model_capability_contexts_frequency_domain_equation_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_frequency_domain_equation"></a>
<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsolveresult_frequencydomainequation.4b988fcde71e"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSolveResult property</p>

```typescript signature
readonly frequencyDomainEquation: Expression | undefined
```

The frequency-domain equation of a Laplace transform solution, read as zero.

## fullCoefficients

<a id="entry-presentation_wasm_object_model_capability_contexts_full_coefficients_api_partial_differential_equations_partialdifferentialequationcoefficientdata_full_coefficients"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcoefficientdata_fullcoefficients.2156a699a3a9"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCoefficientData property</p>

```typescript signature
readonly fullCoefficients: PartialDifferentialEquationJetCoefficient[] | undefined
```

Every jet coefficient, when the equation is exactly linear.

## fullRankMatrix

<a id="entry-presentation_wasm_object_model_capability_contexts_full_rank_matrix_api_session_full_rank_matrix"></a>
<a id="placement-placement.wasm.wasm_module.module_fullrankmatrix.545a4d2aa24c"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
fullRankMatrix(subject: Matrix): AssumptionProposition
```

Build a full-rank-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_fullrankmatrix.d4dda0c1ae74"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.fullRankMatrix</code></p>

```typescript signature
fullRankMatrix(subject: Matrix): AssumptionProposition
```

</details>

## generalGenerator

<a id="entry-presentation_wasm_object_model_capability_contexts_general_generator_api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_general_generator"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryalgebra_generalgenerator.2a0fc0383ec8"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAlgebra property</p>

```typescript signature
readonly generalGenerator: PartialDifferentialEquationPointSymmetryGenerator | undefined
```

The general generator, a combination of the basis through the parameters.

## generality

<a id="entry-presentation_wasm_object_model_capability_contexts_generality_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_generality"></a>
<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsolveresult_generality.0acc7843fcff"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSolveResult property</p>

```typescript signature
readonly generality: string | undefined
```

The rank decision behind a complete-family claim, when the request required one.

## generality

<a id="entry-presentation_wasm_object_model_capability_contexts_generality_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_generality"></a>
<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsystemsolveresult_generality.b6dedec50021"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSystemSolveResult property</p>

```typescript signature
readonly generality: string | undefined
```

The rank decision on the constants-to-initial-jet map, when verification ran.

## generality

<a id="entry-presentation_wasm_object_model_capability_contexts_generality_api_ordinary_differential_equations_ordinarydifferentialequationsystemverificationreport_generality"></a>
<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsystemverificationreport_generality.06f7e5f0bc1b"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSystemVerificationReport property</p>

```typescript signature
readonly generality: string
```

The rank decision on the map from the supplied constants to the initial jet.

## generatedConstants

<a id="entry-presentation_wasm_object_model_capability_contexts_generated_constants_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_generated_constants"></a>
<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsolveresult_generatedconstants.b24b49acc560"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSolveResult property</p>

```typescript signature
readonly generatedConstants: Expression[]
```

Exactly the constants the solution treats as free.

## generatedConstants

<a id="entry-presentation_wasm_object_model_capability_contexts_generated_constants_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_generated_constants"></a>
<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsystemsolveresult_generatedconstants.918ffd7b6ed6"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSystemSolveResult property</p>

```typescript signature
readonly generatedConstants: Expression[]
```

Exactly the constants the assignment treats as free.

## governingResidual

<a id="entry-presentation_wasm_object_model_capability_contexts_governing_residual_api_partial_differential_equations_partialdifferentialequationverificationreport_governing_residual"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationverificationreport_governingresidual.816de73fe328"></a>
<p class="symi-entry-owner">PartialDifferentialEquationVerificationReport property</p>

```typescript signature
readonly governingResidual: PartialDifferentialEquationVerificationResidual
```

Independently reduced governing-equation evidence.

## greaterAssumption

<a id="entry-presentation_wasm_object_model_capability_contexts_greater_assumption_api_defaults_session_greater_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_greaterassumption.a5eb42bf8f9c"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
greaterAssumption(
    left: Expression,
    right: Expression,
): AssumptionProposition
```

Build a strict scalar-order assumption proposition with reversed operands in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_greaterassumption.7d33f6430cf1"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.greaterAssumption</code></p>

```typescript signature
greaterAssumption(
    left: Expression,
    right: Expression,
): AssumptionProposition
```

</details>

## greaterOrEqualAssumption

<a id="entry-presentation_wasm_object_model_capability_contexts_greater_or_equal_assumption_api_defaults_session_greater_or_equal_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_greaterorequalassumption.775238806940"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
greaterOrEqualAssumption(
    left: Expression,
    right: Expression,
): AssumptionProposition
```

Build a non-strict scalar-order assumption proposition with reversed operands in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_greaterorequalassumption.45d6551d24b9"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.greaterOrEqualAssumption</code></p>

```typescript signature
greaterOrEqualAssumption(
    left: Expression,
    right: Expression,
): AssumptionProposition
```

</details>

## hermitianMatrix

<a id="entry-presentation_wasm_object_model_capability_contexts_hermitian_matrix_api_session_hermitian_matrix"></a>
<a id="placement-placement.wasm.wasm_module.module_hermitianmatrix.561dfa80b073"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
hermitianMatrix(subject: Matrix): AssumptionProposition
```

Build a Hermitian-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_hermitianmatrix.ad07d380df99"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.hermitianMatrix</code></p>

```typescript signature
hermitianMatrix(subject: Matrix): AssumptionProposition
```

</details>

## highestOrderCoefficients

<a id="entry-presentation_wasm_object_model_capability_contexts_highest_order_coefficients_api_partial_differential_equations_partialdifferentialequationcoefficientdata_highest_order_coefficients"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcoefficientdata_highestordercoefficients.5bfc08a1eccb"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCoefficientData property</p>

```typescript signature
readonly highestOrderCoefficients: PartialDifferentialEquationJetCoefficient[] | undefined
```

The highest-order jet coefficients, when the equation is affine in them.

## homogeneous

<a id="entry-presentation_wasm_object_model_capability_contexts_homogeneous_api_partial_differential_equations_partialdifferentialequationcoefficientdata_homogeneous"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcoefficientdata_homogeneous.a3fec03b183d"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCoefficientData property</p>

```typescript signature
readonly homogeneous: boolean | undefined
```

Whether the equation was proved homogeneous, when that statement is meaningful.

## hostCancellationControlAddress

<a id="entry-presentation_wasm_object_model_capability_contexts_host_cancellation_control_address_unresolved"></a>
<a id="placement-placement.wasm.wasm_module.module_hostcancellationcontroladdress.a36df668e7b8"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
hostCancellationControlAddress(): number
```

Return the address in linear memory of the control record an embedder writes to stop a call.

## hostCancellationControlByteLength

<a id="entry-presentation_wasm_object_model_capability_contexts_host_cancellation_control_byte_length_unresolved"></a>
<a id="placement-placement.wasm.wasm_module.module_hostcancellationcontrolbytelength.eedb6cf20393"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
hostCancellationControlByteLength(): number
```

Return how many bytes of linear memory the host cancellation control record occupies.

## hostCancellationRequested

<a id="entry-presentation_wasm_object_model_capability_contexts_host_cancellation_requested_unresolved"></a>
<a id="placement-placement.wasm.wasm_module.module_hostcancellationrequested.254657584a52"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
hostCancellationRequested(slot_index: number, ticket: number): boolean
```

Return whether a stop request stands against one control-record reservation.

## hostCancellationSlotCount

<a id="entry-presentation_wasm_object_model_capability_contexts_host_cancellation_slot_count_unresolved"></a>
<a id="placement-placement.wasm.wasm_module.module_hostcancellationslotcount.4101f6d428a3"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
hostCancellationSlotCount(): number
```

Return how many reservations the host cancellation control record holds.

## hostCancellationSlotTicket

<a id="entry-presentation_wasm_object_model_capability_contexts_host_cancellation_slot_ticket_unresolved"></a>
<a id="placement-placement.wasm.wasm_module.module_hostcancellationslotticket.31ee528c4115"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
hostCancellationSlotTicket(slot_index: number): number
```

Return the ticket a reserved control-record slot answers to, or zero when it is not reserved.

## identityMatrix

<a id="entry-presentation_wasm_object_model_capability_contexts_identity_matrix_api_session_identity_matrix"></a>
<a id="placement-placement.wasm.wasm_module.module_identitymatrix.06589077f324"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
identityMatrix(subject: Matrix): AssumptionProposition
```

Build an identity-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_identitymatrix.b3b15b6e67fd"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.identityMatrix</code></p>

```typescript signature
identityMatrix(subject: Matrix): AssumptionProposition
```

</details>

## image

<a id="entry-presentation_wasm_object_model_capability_contexts_image_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_image"></a>
<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsolveresult_image.2505758202af"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSolveResult property</p>

```typescript signature
readonly image: Expression | undefined
```

The image of the unknown a Laplace transform solution solved for.

## implicitPartialDifferentialEquationSolution

<a id="entry-presentation_wasm_object_model_capability_contexts_implicit_partial_differential_equation_solution_api_partial_differential_equations_session_implicit_partial_differential_equation_solution"></a>
<a id="placement-placement.wasm.wasm_module.module_implicitpartialdifferentialequationsolution.c7079e45bc6e"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
implicitPartialDifferentialEquationSolution(
    residual: Expression,
    arbitrary_functions?: PartialDifferentialEquationArbitraryFunction[] | null,
    proof_obligations?: string[] | null,
): PartialDifferentialEquationSolutionFamily
```

Create an implicit partial differential equation solution family in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_implicitpartialdifferentialequationsolution.32e5eb5b6dde"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.implicitPartialDifferentialEquationSolution</code></p>

```typescript signature
implicitPartialDifferentialEquationSolution(
    residual: Expression,
    arbitrary_functions?: PartialDifferentialEquationArbitraryFunction[] | null,
    proof_obligations?: string[] | null,
): PartialDifferentialEquationSolutionFamily
```

</details>

## inconclusiveReason

<a id="entry-presentation_wasm_object_model_capability_contexts_inconclusive_reason_api_partial_differential_equations_partialdifferentialequationverificationreport_inconclusive_reason"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationverificationreport_inconclusivereason.31d73a309d82"></a>
<p class="symi-entry-owner">PartialDifferentialEquationVerificationReport property</p>

```typescript signature
readonly inconclusiveReason: string | undefined
```

The deterministic reason verification could not reach a proof.

## independentVariableName

<a id="entry-presentation_wasm_object_model_capability_contexts_independent_variable_name_api_partial_differential_equations_partialdifferentialequationseparatedequation_independent_variable_name"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationseparatedequation_independentvariablename.a79c661191a7"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSeparatedEquation property</p>

```typescript signature
readonly independentVariableName: string
```

The name of this equation's independent variable.

## independentVariables

<a id="entry-presentation_wasm_object_model_capability_contexts_independent_variables_api_partial_differential_equations_partialdifferentialequationproblem_independent_variables"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationproblem_independentvariables.99881275f85e"></a>
<p class="symi-entry-owner">PartialDifferentialEquationProblem property</p>

```typescript signature
readonly independentVariables: string[]
```

The independent variables in their semantic declared order.

## index

<a id="entry-presentation_wasm_object_model_capability_contexts_index_api_parallelism_bulkexpressionoutcome_index"></a>
<a id="placement-placement.wasm.wasm_class.bulkexpressionoutcome_index.9565b7871b49"></a>
<p class="symi-entry-owner">BulkExpressionOutcome property</p>

```typescript signature
readonly index: number
```

Return the original input position of this outcome.

## index

<a id="entry-presentation_wasm_object_model_capability_contexts_index_api_parallelism_bulktextoutcome_index"></a>
<a id="placement-placement.wasm.wasm_class.bulktextoutcome_index.eb506bca8e60"></a>
<p class="symi-entry-owner">BulkTextOutcome property</p>

```typescript signature
readonly index: number
```

Return the original input position of this outcome.

## infiniteAssumption

<a id="entry-presentation_wasm_object_model_capability_contexts_infinite_assumption_api_session_infinite_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_infiniteassumption.30902fe0a9f6"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
infiniteAssumption(subject: Expression): AssumptionProposition
```

Build an infinity assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_infiniteassumption.930992139804"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.infiniteAssumption</code></p>

```typescript signature
infiniteAssumption(subject: Expression): AssumptionProposition
```

</details>

## initThreadPoolWithCapability

<a id="entry-presentation_wasm_object_model_capability_contexts_init_thread_pool_with_capability_unresolved"></a>
<a id="placement-placement.wasm.wasm_module.module_initthreadpoolwithcapability.356307fe3c6a"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
initThreadPoolWithCapability(worker_count: number): Promise
```

Start the shared WebAssembly Rayon pool and publish its capability after startup succeeds.

## initialConditionResiduals

<a id="entry-presentation_wasm_object_model_capability_contexts_initial_condition_residuals_api_partial_differential_equations_partialdifferentialequationverificationreport_initial_condition_residuals"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationverificationreport_initialconditionresiduals.84ad90fe1dfe"></a>
<p class="symi-entry-owner">PartialDifferentialEquationVerificationReport property</p>

```typescript signature
readonly initialConditionResiduals: PartialDifferentialEquationVerificationResidual[]
```

One reduced residual per initial condition, in insertion order.

## initialConditions

<a id="entry-presentation_wasm_object_model_capability_contexts_initial_conditions_api_partial_differential_equations_partialdifferentialequationproblem_initial_conditions"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationproblem_initialconditions.de63373e4edb"></a>
<p class="symi-entry-owner">PartialDifferentialEquationProblem property</p>

```typescript signature
readonly initialConditions: Expression[]
```

The initial-condition residuals in insertion order.

## initializeParallelism

<a id="entry-presentation_wasm_object_model_capability_contexts_initialize_parallelism_api_session_initialize_parallelism"></a>
<a id="placement-placement.wasm.wasm_module.module_initializeparallelism.cf57f2d301bc"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
initializeParallelism(worker_count: number): string
```

Initialize parallel execution for the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_initializeparallelism.b65737d204fb"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.initializeParallelism</code></p>

```typescript signature
initializeParallelism(worker_count: number): string
```

</details>

## initialized

<a id="entry-presentation_wasm_object_model_capability_contexts_initialized_api_parallelism_parallelismcapability_initialized"></a>
<a id="placement-placement.wasm.wasm_class.parallelismcapability_initialized.4f99d93e07ed"></a>
<p class="symi-entry-owner">ParallelismCapability property</p>

```typescript signature
readonly initialized: boolean
```

Whether the process-wide parallel backend has been initialized.

## integerAssumption

<a id="entry-presentation_wasm_object_model_capability_contexts_integer_assumption_api_session_integer_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_integerassumption.bf2080c26dc3"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
integerAssumption(subject: Expression): AssumptionProposition
```

Build an integer assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_integerassumption.cd89ea0aeab3"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.integerAssumption</code></p>

```typescript signature
integerAssumption(subject: Expression): AssumptionProposition
```

</details>

## integerEntries

<a id="entry-presentation_wasm_object_model_capability_contexts_integer_entries_api_session_integer_entries"></a>
<a id="placement-placement.wasm.wasm_module.module_integerentries.98584eadce94"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
integerEntries(subject: Matrix): AssumptionProposition
```

Build an integer-entry proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_integerentries.24804dca8290"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.integerEntries</code></p>

```typescript signature
integerEntries(subject: Matrix): AssumptionProposition
```

</details>

## integrateDefiniteUnderConstraint

<a id="entry-presentation_wasm_object_model_capability_contexts_integrate_definite_under_constraint_api_session_integrate_definite_under_constraint"></a>
<a id="placement-placement.wasm.wasm_module.module_integratedefiniteunderconstraint.b38208ce9b58"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
integrateDefiniteUnderConstraint(
    input_expression: Expression,
    variable: string,
    lower: Expression,
    upper: Expression,
    constraint: Expression,
): Expression
```

Definite integration under a local bounded logical constraint.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_integratedefiniteunderconstraint.162de4dfe5ac"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.integrateDefiniteUnderConstraint</code></p>

```typescript signature
integrateDefiniteUnderConstraint(
    input_expression: Expression,
    variable: string,
    lower: Expression,
    upper: Expression,
    constraint: Expression,
): Expression
```

</details>

## integrateDefiniteUnderConstraint

<a id="entry-presentation_wasm_object_model_capability_contexts_integrate_definite_under_constraint_api_expression_integrate_definite_under_constraint"></a>
<a id="placement-placement.wasm.wasm_class.expression_integratedefiniteunderconstraint.ae1d271eaed2"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
integrateDefiniteUnderConstraint(
    variable: string,
    lower: Expression,
    upper: Expression,
    constraint: Expression,
): Expression
```

Definite integration under a local bounded logical constraint.

## internerLength

<a id="entry-presentation_wasm_object_model_capability_contexts_interner_length_api_session_interner_length"></a>
<a id="placement-placement.wasm.wasm_module.module_internerlength.16f9ad37f8f3"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
internerLength(): number
```

Number of live expressions currently interned in the context. Dead entries awaiting the amortized sweep are not counted. Useful for observing memory in long-running sessions and in tests that assert the store stays bounded.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_internerlength.eae1ce3bb1ac"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.internerLength</code></p>

```typescript signature
internerLength(): number
```

</details>

## intertwining

<a id="entry-presentation_wasm_object_model_capability_contexts_intertwining_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_intertwining"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryaction_intertwining.0394334328b6"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAction property</p>

```typescript signature
readonly intertwining: string | undefined
```

The exact decision on the intertwining identity.

## invariant

<a id="entry-presentation_wasm_object_model_capability_contexts_invariant_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_invariant"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsimilaritysolution_invariant.4e6ff8b4195d"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSimilaritySolution property</p>

```typescript signature
readonly invariant: Expression | undefined
```

The invariant of the generator's base field.

## inverseCoordinates

<a id="entry-presentation_wasm_object_model_capability_contexts_inverse_coordinates_api_partial_differential_equations_partialdifferentialequationcoordinatechange_inverse_coordinates"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcoordinatechange_inversecoordinates.97aaa96afdd2"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCoordinateChange property</p>

```typescript signature
readonly inverseCoordinates: Expression[]
```

The ordered target-to-source coordinate expressions.

## invertibility

<a id="entry-presentation_wasm_object_model_capability_contexts_invertibility_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_invertibility"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryaction_invertibility.47467c701e0d"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAction property</p>

```typescript signature
readonly invertibility: string | undefined
```

The exact decision that the coordinate map is invertible on its chart.

## invertibleMatrix

<a id="entry-presentation_wasm_object_model_capability_contexts_invertible_matrix_api_session_invertible_matrix"></a>
<a id="placement-placement.wasm.wasm_module.module_invertiblematrix.f6ca9c5a4fd1"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
invertibleMatrix(subject: Matrix): AssumptionProposition
```

Build an invertible-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_invertiblematrix.64db4aef0074"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.invertibleMatrix</code></p>

```typescript signature
invertibleMatrix(subject: Matrix): AssumptionProposition
```

</details>

## irrationalAssumption

<a id="entry-presentation_wasm_object_model_capability_contexts_irrational_assumption_api_session_irrational_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_irrationalassumption.a422ee432156"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
irrationalAssumption(subject: Expression): AssumptionProposition
```

Build an irrationality assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_irrationalassumption.563f0ff3e367"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.irrationalAssumption</code></p>

```typescript signature
irrationalAssumption(subject: Expression): AssumptionProposition
```

</details>

## isAlgebraic

<a id="entry-presentation_wasm_object_model_capability_contexts_is_algebraic_api_expression_is_algebraic"></a>
<a id="placement-placement.wasm.wasm_class.expression_isalgebraic.7f69c43994c4"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isAlgebraic(): boolean | undefined
```

Whether the expression is known to be algebraic.

## isComplex

<a id="entry-presentation_wasm_object_model_capability_contexts_is_complex_api_expression_is_complex"></a>
<a id="placement-placement.wasm.wasm_class.expression_iscomplex.cb55f33afdac"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isComplex(): boolean | undefined
```

Whether the expression is known to be finite complex.

## isComposite

<a id="entry-presentation_wasm_object_model_capability_contexts_is_composite_api_expression_is_composite"></a>
<a id="placement-placement.wasm.wasm_class.expression_iscomposite.9305add4812c"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isComposite(): boolean | undefined
```

Whether the expression is known to be composite.

## isEven

<a id="entry-presentation_wasm_object_model_capability_contexts_is_even_api_expression_is_even"></a>
<a id="placement-placement.wasm.wasm_class.expression_iseven.79ec01947e1b"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isEven(): boolean | undefined
```

Whether the expression is known to be even.

## isExtendedReal

<a id="entry-presentation_wasm_object_model_capability_contexts_is_extended_real_api_expression_is_extended_real"></a>
<a id="placement-placement.wasm.wasm_class.expression_isextendedreal.172c09a6da36"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isExtendedReal(): boolean | undefined
```

Whether the expression is known to be extended-real.

## isInfinite

<a id="entry-presentation_wasm_object_model_capability_contexts_is_infinite_api_expression_is_infinite"></a>
<a id="placement-placement.wasm.wasm_class.expression_isinfinite.859baf12b120"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isInfinite(): boolean | undefined
```

Whether the expression is known to be infinite.

## isIrrational

<a id="entry-presentation_wasm_object_model_capability_contexts_is_irrational_api_expression_is_irrational"></a>
<a id="placement-placement.wasm.wasm_class.expression_isirrational.6d6714833660"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isIrrational(): boolean | undefined
```

Whether the expression is known to be irrational.

## isNatural

<a id="entry-presentation_wasm_object_model_capability_contexts_is_natural_api_expression_is_natural"></a>
<a id="placement-placement.wasm.wasm_class.expression_isnatural.08b113b0d6b1"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isNatural(): boolean | undefined
```

Whether the expression is known to be natural.

## isNonpositive

<a id="entry-presentation_wasm_object_model_capability_contexts_is_nonpositive_api_expression_is_nonpositive"></a>
<a id="placement-placement.wasm.wasm_class.expression_isnonpositive.43f76142cb65"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isNonpositive(): boolean | undefined
```

Whether the expression is known to be nonpositive.

## isOdd

<a id="entry-presentation_wasm_object_model_capability_contexts_is_odd_api_expression_is_odd"></a>
<a id="placement-placement.wasm.wasm_class.expression_isodd.1296c406043e"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isOdd(): boolean | undefined
```

Whether the expression is known to be odd.

## isPositiveInteger

<a id="entry-presentation_wasm_object_model_capability_contexts_is_positive_integer_api_expression_is_positive_integer"></a>
<a id="placement-placement.wasm.wasm_class.expression_ispositiveinteger.de9efbe8d022"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isPositiveInteger(): boolean | undefined
```

Whether the expression is known to be a positive integer.

## isTranscendental

<a id="entry-presentation_wasm_object_model_capability_contexts_is_transcendental_api_expression_is_transcendental"></a>
<a id="placement-placement.wasm.wasm_class.expression_istranscendental.7bafdf46504b"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isTranscendental(): boolean | undefined
```

Whether the expression is known to be transcendental.

## isZero

<a id="entry-presentation_wasm_object_model_capability_contexts_is_zero_api_expression_is_zero"></a>
<a id="placement-placement.wasm.wasm_class.expression_iszero.39d9a4da2056"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isZero(): boolean | undefined
```

Whether the expression is known to be zero.

## leftOperand

<a id="entry-presentation_wasm_object_model_capability_contexts_left_operand_api_assumptionproposition_left_operand"></a>
<a id="placement-placement.wasm.wasm_module.module_leftoperand.76fb7332aadf"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
leftOperand(proposition: AssumptionProposition): Expression | undefined
```

Return the left relation or congruence operand when present.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.assumptionproposition_leftoperand.746fdb26e50b"></a>
<p class="symi-entry-owner">AssumptionProposition method: <code>AssumptionProposition.leftOperand</code></p>

```typescript signature
leftOperand(): Expression | undefined
```

</details>

## length

<a id="entry-presentation_wasm_object_model_capability_contexts_length_api_expression_operations_expression_length"></a>
<a id="placement-placement.wasm.wasm_class.expression_length.45f409e47bab"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
readonly length: number
```

Number of elements of a finite-set expression.

## lessAssumption

<a id="entry-presentation_wasm_object_model_capability_contexts_less_assumption_api_defaults_session_less_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_lessassumption.8fc95f457c3b"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
lessAssumption(
    left: Expression,
    right: Expression,
): AssumptionProposition
```

Build a strict scalar-order assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_lessassumption.ca0ff78010a6"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.lessAssumption</code></p>

```typescript signature
lessAssumption(
    left: Expression,
    right: Expression,
): AssumptionProposition
```

</details>

## lessOrEqualAssumption

<a id="entry-presentation_wasm_object_model_capability_contexts_less_or_equal_assumption_api_defaults_session_less_or_equal_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_lessorequalassumption.9485a709d841"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
lessOrEqualAssumption(
    left: Expression,
    right: Expression,
): AssumptionProposition
```

Build a non-strict scalar-order assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_lessorequalassumption.11ee484d439d"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.lessOrEqualAssumption</code></p>

```typescript signature
lessOrEqualAssumption(
    left: Expression,
    right: Expression,
): AssumptionProposition
```

</details>

## liftedConstants

<a id="entry-presentation_wasm_object_model_capability_contexts_lifted_constants_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_lifted_constants"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsimilaritysolution_liftedconstants.d399bdf3e958"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSimilaritySolution property</p>

```typescript signature
readonly liftedConstants: Expression[]
```

The constants the lifted family is parameterized by.

## liftedFamily

<a id="entry-presentation_wasm_object_model_capability_contexts_lifted_family_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_lifted_family"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsimilaritysolution_liftedfamily.16b78a7aae96"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSimilaritySolution property</p>

```typescript signature
readonly liftedFamily: PartialDifferentialEquationSolutionFamily | undefined
```

The invariant solutions of the original equation.

## liftedFamilyVerification

<a id="entry-presentation_wasm_object_model_capability_contexts_lifted_family_verification_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_lifted_family_verification"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsimilaritysolution_liftedfamilyverification.1f24d4d5c876"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSimilaritySolution property</p>

```typescript signature
readonly liftedFamilyVerification: string | undefined
```

The exact decision that the lifted family solves the original equation.

## linearity

<a id="entry-presentation_wasm_object_model_capability_contexts_linearity_api_partial_differential_equations_partialdifferentialequationclassification_linearity"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationclassification_linearity.a6e667e25ec5"></a>
<p class="symi-entry-owner">PartialDifferentialEquationClassification property</p>

```typescript signature
readonly linearity: string
```

The most-specific exact linearity class.

## linearity

<a id="entry-presentation_wasm_object_model_capability_contexts_linearity_api_partial_differential_equations_partialdifferentialequationsolutionprovenance_linearity"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolutionprovenance_linearity.1ab08a772397"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolutionProvenance property</p>

```typescript signature
readonly linearity: string
```

The exact linearity class recorded at the time the candidate was produced.

## lowerTriangularMatrix

<a id="entry-presentation_wasm_object_model_capability_contexts_lower_triangular_matrix_api_session_lower_triangular_matrix"></a>
<a id="placement-placement.wasm.wasm_module.module_lowertriangularmatrix.3932d732657f"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
lowerTriangularMatrix(subject: Matrix): AssumptionProposition
```

Build a lower-triangular-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_lowertriangularmatrix.022cfbba3773"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.lowerTriangularMatrix</code></p>

```typescript signature
lowerTriangularMatrix(subject: Matrix): AssumptionProposition
```

</details>

## matrixShape

<a id="entry-presentation_wasm_object_model_capability_contexts_matrix_shape_api_session_matrix_shape"></a>
<a id="placement-placement.wasm.wasm_module.module_matrixshape.3371cecbb4ef"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
matrixShape(
    subject: Matrix,
    rows: number,
    columns: number,
): AssumptionProposition
```

Build a matrix shape proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_matrixshape.459aae814946"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.matrixShape</code></p>

```typescript signature
matrixShape(
    subject: Matrix,
    rows: number,
    columns: number,
): AssumptionProposition
```

</details>

## maximumOperationConcurrency

<a id="entry-presentation_wasm_object_model_capability_contexts_maximumoperationconcurrency_api_parallelism_parallelismcapability_maximum_operation_concurrency"></a>
<a id="placement-placement.wasm.wasm_class.parallelismcapability_maximumoperationconcurrency.0130e4f9bd13"></a>
<p class="symi-entry-owner">ParallelismCapability property</p>

```typescript signature
readonly maximumOperationConcurrency: number
```

Return the largest task batch one operation may admit.

## memberAssumption

<a id="entry-presentation_wasm_object_model_capability_contexts_member_assumption_api_defaults_session_member_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_memberassumption.d3aa17ab5d8c"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
memberAssumption(
    element: Expression,
    set_expression: Expression,
): AssumptionProposition
```

Build a scalar-membership assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_memberassumption.1ba404fedc2d"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.memberAssumption</code></p>

```typescript signature
memberAssumption(
    element: Expression,
    set_expression: Expression,
): AssumptionProposition
```

</details>

## membershipElement

<a id="entry-presentation_wasm_object_model_capability_contexts_membership_element_api_assumptionproposition_membership_element"></a>
<a id="placement-placement.wasm.wasm_module.module_membershipelement.8ef3bf1bc659"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
membershipElement(proposition: AssumptionProposition): Expression | undefined
```

Return the membership element when present.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.assumptionproposition_membershipelement.aae55444ab1f"></a>
<p class="symi-entry-owner">AssumptionProposition method: <code>AssumptionProposition.membershipElement</code></p>

```typescript signature
membershipElement(): Expression | undefined
```

</details>

## membershipSet

<a id="entry-presentation_wasm_object_model_capability_contexts_membership_set_api_assumptionproposition_membership_set"></a>
<a id="placement-placement.wasm.wasm_module.module_membershipset.b2235c74f247"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
membershipSet(proposition: AssumptionProposition): Expression | undefined
```

Return the membership set expression when present.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.assumptionproposition_membershipset.7ce41b1bc776"></a>
<p class="symi-entry-owner">AssumptionProposition method: <code>AssumptionProposition.membershipSet</code></p>

```typescript signature
membershipSet(): Expression | undefined
```

</details>

## method

<a id="entry-presentation_wasm_object_model_capability_contexts_method_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_method"></a>
<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsolveresult_method.2a36ab088dab"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSolveResult property</p>

```typescript signature
readonly method: string
```

The method the request actually ran.

## method

<a id="entry-presentation_wasm_object_model_capability_contexts_method_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_method"></a>
<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsystemsolveresult_method.85f1db18a22f"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSystemSolveResult property</p>

```typescript signature
readonly method: string
```

The method the system request actually ran.

## method

<a id="entry-presentation_wasm_object_model_capability_contexts_method_api_partial_differential_equations_partialdifferentialequationmethodcandidate_method"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationmethodcandidate_method.e9c325f17c27"></a>
<p class="symi-entry-owner">PartialDifferentialEquationMethodCandidate property</p>

```typescript signature
readonly method: string
```

The stable advisory method name.

## method

<a id="entry-presentation_wasm_object_model_capability_contexts_method_api_partial_differential_equations_partialdifferentialequationsolutionprovenance_method"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolutionprovenance_method.4df0ae777fd3"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolutionProvenance property</p>

```typescript signature
readonly method: string
```

The method identity this solution was produced by.

## method

<a id="entry-presentation_wasm_object_model_capability_contexts_method_api_partial_differential_equations_partialdifferentialequationsolveresult_method"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolveresult_method.f888cfb04f38"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolveResult property</p>

```typescript signature
readonly method: string | undefined
```

The method that produced a solution, when one did.

## methodCandidates

<a id="entry-presentation_wasm_object_model_capability_contexts_method_candidates_api_partial_differential_equations_partialdifferentialequationclassification_method_candidates"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationclassification_methodcandidates.f9f5eeb37c13"></a>
<p class="symi-entry-owner">PartialDifferentialEquationClassification property</p>

```typescript signature
readonly methodCandidates: PartialDifferentialEquationMethodCandidate[]
```

The advisory methods in deterministic preference order.

## multiplier

<a id="entry-presentation_wasm_object_model_capability_contexts_multiplier_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_multiplier"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryaction_multiplier.fdf69e36ea5d"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAction property</p>

```typescript signature
readonly multiplier: Expression | undefined
```

The multiplier of the intertwining identity.

## multiplier

<a id="entry-presentation_wasm_object_model_capability_contexts_multiplier_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_multiplier"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsimilaritysolution_multiplier.700502405026"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSimilaritySolution property</p>

```typescript signature
readonly multiplier: Expression | undefined
```

The multiplier of the reduction identity.

## multiply

<a id="entry-presentation_wasm_object_model_capability_contexts_multiply_api_expression_multiply"></a>
<a id="placement-placement.wasm.wasm_class.expression_multiply.f2a3f2cee0c1"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
multiply(other: Expression): Expression
```

Product of this expression and `other`.

## name

<a id="entry-presentation_wasm_object_model_capability_contexts_name_api_partial_differential_equations_partialdifferentialequationarbitraryfunction_name"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationarbitraryfunction_name.42b1c3bd0a16"></a>
<p class="symi-entry-owner">PartialDifferentialEquationArbitraryFunction property</p>

```typescript signature
readonly name: string
```

The collision-free allocated function name.

## naturalAssumption

<a id="entry-presentation_wasm_object_model_capability_contexts_natural_assumption_api_session_natural_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_naturalassumption.3ab80dcb8d03"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
naturalAssumption(subject: Expression): AssumptionProposition
```

Build a natural-number assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_naturalassumption.38e1c8e1981a"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.naturalAssumption</code></p>

```typescript signature
naturalAssumption(subject: Expression): AssumptionProposition
```

</details>

## negativeAssumption

<a id="entry-presentation_wasm_object_model_capability_contexts_negative_assumption_api_session_negative_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_negativeassumption.a7d23b923406"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
negativeAssumption(subject: Expression): AssumptionProposition
```

Build a strict-negativity assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_negativeassumption.2f61c8b3c7a1"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.negativeAssumption</code></p>

```typescript signature
negativeAssumption(subject: Expression): AssumptionProposition
```

</details>

## nonnegativeAssumption

<a id="entry-presentation_wasm_object_model_capability_contexts_nonnegative_assumption_api_session_nonnegative_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_nonnegativeassumption.cd1162dab735"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
nonnegativeAssumption(subject: Expression): AssumptionProposition
```

Build a universe-guarded nonnegative assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_nonnegativeassumption.64680640bb6a"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.nonnegativeAssumption</code></p>

```typescript signature
nonnegativeAssumption(subject: Expression): AssumptionProposition
```

</details>

## nonpositiveAssumption

<a id="entry-presentation_wasm_object_model_capability_contexts_nonpositive_assumption_api_session_nonpositive_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_nonpositiveassumption.d8eddd870b43"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
nonpositiveAssumption(subject: Expression): AssumptionProposition
```

Build a universe-guarded nonpositive assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_nonpositiveassumption.a68756b4e98f"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.nonpositiveAssumption</code></p>

```typescript signature
nonpositiveAssumption(subject: Expression): AssumptionProposition
```

</details>

## nonzeroAssumption

<a id="entry-presentation_wasm_object_model_capability_contexts_nonzero_assumption_api_session_nonzero_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_nonzeroassumption.76b8b5800ccd"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
nonzeroAssumption(subject: Expression): AssumptionProposition
```

Build a nonzero assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_nonzeroassumption.3c73be02c09e"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.nonzeroAssumption</code></p>

```typescript signature
nonzeroAssumption(subject: Expression): AssumptionProposition
```

</details>

## normalMatrix

<a id="entry-presentation_wasm_object_model_capability_contexts_normal_matrix_api_session_normal_matrix"></a>
<a id="placement-placement.wasm.wasm_module.module_normalmatrix.73c5d372a8ef"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
normalMatrix(subject: Matrix): AssumptionProposition
```

Build a normal-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_normalmatrix.22c1df434daa"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.normalMatrix</code></p>

```typescript signature
normalMatrix(subject: Matrix): AssumptionProposition
```

</details>

## normalizationMultiplier

<a id="entry-presentation_wasm_object_model_capability_contexts_normalization_multiplier_api_partial_differential_equations_partialdifferentialequationtransformationresult_normalization_multiplier"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationtransformationresult_normalizationmultiplier.1196debbcaa4"></a>
<p class="symi-entry-owner">PartialDifferentialEquationTransformationResult property</p>

```typescript signature
readonly normalizationMultiplier: Expression | undefined
```

The proved-nonzero residual-normalization multiplier.

## not

<a id="entry-presentation_wasm_assumptions_capability_contexts_not_api_assumptionproposition_not"></a>
<a id="placement-placement.wasm.wasm_class.assumptionproposition_not.b60f9be810dc"></a>
<p class="symi-entry-owner">AssumptionProposition method</p>

```typescript signature
not(): AssumptionProposition
```

Negate a proposition in canonical negation-normal form.

## notEqualAssumption

<a id="entry-presentation_wasm_object_model_capability_contexts_not_equal_assumption_api_defaults_session_not_equal_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_notequalassumption.c25dc8a01655"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
notEqualAssumption(
    left: Expression,
    right: Expression,
): AssumptionProposition
```

Build a disequality assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_notequalassumption.9cf43d15c370"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.notEqualAssumption</code></p>

```typescript signature
notEqualAssumption(
    left: Expression,
    right: Expression,
): AssumptionProposition
```

</details>

## oddAssumption

<a id="entry-presentation_wasm_object_model_capability_contexts_odd_assumption_api_session_odd_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_oddassumption.6299ce7886a7"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
oddAssumption(subject: Expression): AssumptionProposition
```

Build an oddness assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_oddassumption.5565fb3aa853"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.oddAssumption</code></p>

```typescript signature
oddAssumption(subject: Expression): AssumptionProposition
```

</details>

## or

<a id="entry-presentation_wasm_assumptions_capability_contexts_or_api_assumptionproposition_or"></a>
<a id="placement-placement.wasm.wasm_class.assumptionproposition_or.5d7229fdfdb9"></a>
<p class="symi-entry-owner">AssumptionProposition method</p>

```typescript signature
or(other: AssumptionProposition): AssumptionProposition
```

Disjoin two propositions.

## order

<a id="entry-presentation_wasm_object_model_capability_contexts_order_api_partial_differential_equations_partialdifferentialequationclassification_order"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationclassification_order.bd643506262a"></a>
<p class="symi-entry-owner">PartialDifferentialEquationClassification property</p>

```typescript signature
readonly order: number
```

The exact highest derivative order.

## order

<a id="entry-presentation_wasm_object_model_capability_contexts_order_api_partial_differential_equations_partialdifferentialequationsolutionprovenance_order"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolutionprovenance_order.988d5c9e0775"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolutionProvenance property</p>

```typescript signature
readonly order: number
```

The exact order recorded at the time the candidate was produced.

## orthogonalMatrix

<a id="entry-presentation_wasm_object_model_capability_contexts_orthogonal_matrix_api_session_orthogonal_matrix"></a>
<a id="placement-placement.wasm.wasm_module.module_orthogonalmatrix.5841526b40e6"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
orthogonalMatrix(subject: Matrix): AssumptionProposition
```

Build an orthogonal-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_orthogonalmatrix.ff1dc519eda5"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.orthogonalMatrix</code></p>

```typescript signature
orthogonalMatrix(subject: Matrix): AssumptionProposition
```

</details>

## outcome

<a id="entry-presentation_wasm_object_model_capability_contexts_outcome_api_results_setenumeration_outcome"></a>
<a id="placement-placement.wasm.wasm_class.setenumeration_outcome.7db4df413ad1"></a>
<p class="symi-entry-owner">SetEnumeration property</p>

```typescript signature
readonly outcome: string
```

`"complete"`, `"truncated"`, or `"declined"`.

## outstandingObligations

<a id="entry-presentation_wasm_object_model_capability_contexts_outstanding_obligations_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_outstanding_obligations"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryaction_outstandingobligations.38f9613fa70d"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAction property</p>

```typescript signature
readonly outstandingObligations: string[]
```

The claims the action explicitly does not make.

## outstandingObligations

<a id="entry-presentation_wasm_object_model_capability_contexts_outstanding_obligations_api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_outstanding_obligations"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryalgebra_outstandingobligations.824f1b8956b3"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAlgebra property</p>

```typescript signature
readonly outstandingObligations: string[]
```

The claims the algebra explicitly does not make.

## outstandingObligations

<a id="entry-presentation_wasm_object_model_capability_contexts_outstanding_obligations_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_outstanding_obligations"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsimilaritysolution_outstandingobligations.e0f2330fa97f"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSimilaritySolution property</p>

```typescript signature
readonly outstandingObligations: string[]
```

The claims the family explicitly does not make.

## parallelismCapability

<a id="entry-presentation_wasm_object_model_capability_contexts_parallelism_capability_api_session_parallelism_capability"></a>
<a id="placement-placement.wasm.wasm_module.module_parallelismcapability.1e9632969c40"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
parallelismCapability(): ParallelismCapability
```

Return the parallel execution capability of the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_parallelismcapability.3ffc3c2aeaf5"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.parallelismCapability</code></p>

```typescript signature
parallelismCapability(): ParallelismCapability
```

</details>

## parameters

<a id="entry-presentation_wasm_object_model_capability_contexts_parameters_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_parameters"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryaction_parameters.05581d4b2818"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAction property</p>

```typescript signature
readonly parameters: Expression[]
```

The group parameters the closed forms depend on.

## parameters

<a id="entry-presentation_wasm_object_model_capability_contexts_parameters_api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_parameters"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryalgebra_parameters.0390dacb6c08"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAlgebra property</p>

```typescript signature
readonly parameters: Expression[]
```

The constants of the general generator, one per basis generator.

## partialDifferentialEquation

<a id="entry-presentation_wasm_object_model_capability_contexts_partial_differential_equation_api_partial_differential_equations_session_partial_differential_equation"></a>
<a id="placement-placement.wasm.wasm_module.module_partialdifferentialequation.cbe5f4689b94"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
partialDifferentialEquation(
    equation: Expression,
    dependent_function: UndefinedFunction,
    independent_variables: string[],
    initial_conditions?: Expression[] | null,
    boundary_conditions?: Expression[] | null,
): PartialDifferentialEquationProblem
```

Construct a validated scalar partial differential equation in the default Context, with an explicit dependent function and independent-variable order.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_partialdifferentialequation.a755ce3b66b1"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.partialDifferentialEquation</code></p>

```typescript signature
partialDifferentialEquation(
    equation: Expression,
    dependent_function: UndefinedFunction,
    independent_variables: string[],
    initial_conditions?: Expression[] | null,
    boundary_conditions?: Expression[] | null,
): PartialDifferentialEquationProblem
```

</details>

## partialDifferentialEquationArbitraryFunction

<a id="entry-presentation_wasm_object_model_capability_contexts_partial_differential_equation_arbitrary_function_api_partial_differential_equations_session_partial_differential_equation_arbitrary_function"></a>
<a id="placement-placement.wasm.wasm_class.context_partialdifferentialequationarbitraryfunction.95275c8112f7"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
partialDifferentialEquationArbitraryFunction(
    preferred_name: string,
    arity: number,
): PartialDifferentialEquationArbitraryFunction
```

Allocate a collision-free arbitrary function for a PDE candidate family.

## partialDifferentialEquationPointSymmetryGenerator

<a id="entry-presentation_wasm_object_model_capability_contexts_partial_differential_equation_point_symmetry_generator_api_partial_differential_equations_session_partial_differential_equation_point_symmetry_generator"></a>
<a id="placement-placement.wasm.wasm_module.module_partialdifferentialequationpointsymmetrygenerator.90c8b91663b5"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
partialDifferentialEquationPointSymmetryGenerator(
    problem: PartialDifferentialEquationProblem,
    coordinate_infinitesimals: Expression[],
    dependent_infinitesimal: Expression,
): PartialDifferentialEquationPointSymmetryGenerator
```

Construct a candidate point-symmetry generator of a PDE from its infinitesimals.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_partialdifferentialequationpointsymmetrygenerator.507e6f5d1b4d"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.partialDifferentialEquationPointSymmetryGenerator</code></p>

```typescript signature
partialDifferentialEquationPointSymmetryGenerator(
    problem: PartialDifferentialEquationProblem,
    coordinate_infinitesimals: Expression[],
    dependent_infinitesimal: Expression,
): PartialDifferentialEquationPointSymmetryGenerator
```

</details>

## pointSymmetryDecline

<a id="entry-presentation_wasm_object_model_capability_contexts_point_symmetry_decline_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_point_symmetry_decline"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryaction_pointsymmetrydecline.6d0421f48d8e"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAction property</p>

```typescript signature
readonly pointSymmetryDecline: string | undefined
```

The reason the underlying point-symmetry algebra was not derived, when it was not.

## positiveAssumption

<a id="entry-presentation_wasm_object_model_capability_contexts_positive_assumption_api_session_positive_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_positiveassumption.c2f3eab58e85"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
positiveAssumption(subject: Expression): AssumptionProposition
```

Build a strict-positivity assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_positiveassumption.f031f0dc6351"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.positiveAssumption</code></p>

```typescript signature
positiveAssumption(subject: Expression): AssumptionProposition
```

</details>

## positiveDefiniteMatrix

<a id="entry-presentation_wasm_object_model_capability_contexts_positive_definite_matrix_api_session_positive_definite_matrix"></a>
<a id="placement-placement.wasm.wasm_module.module_positivedefinitematrix.3e3360ff18c5"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
positiveDefiniteMatrix(subject: Matrix): AssumptionProposition
```

Build a positive-definite-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_positivedefinitematrix.b2c5736061fa"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.positiveDefiniteMatrix</code></p>

```typescript signature
positiveDefiniteMatrix(subject: Matrix): AssumptionProposition
```

</details>

## positiveIntegerAssumption

<a id="entry-presentation_wasm_object_model_capability_contexts_positive_integer_assumption_api_session_positive_integer_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_positiveintegerassumption.25753e25c658"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
positiveIntegerAssumption(subject: Expression): AssumptionProposition
```

Build a positive-integer assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_positiveintegerassumption.213d99d5dc51"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.positiveIntegerAssumption</code></p>

```typescript signature
positiveIntegerAssumption(subject: Expression): AssumptionProposition
```

</details>

## positiveSemidefiniteMatrix

<a id="entry-presentation_wasm_object_model_capability_contexts_positive_semidefinite_matrix_api_session_positive_semidefinite_matrix"></a>
<a id="placement-placement.wasm.wasm_module.module_positivesemidefinitematrix.6e762c686132"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
positiveSemidefiniteMatrix(subject: Matrix): AssumptionProposition
```

Build a positive-semidefinite-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_positivesemidefinitematrix.29521df6b267"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.positiveSemidefiniteMatrix</code></p>

```typescript signature
positiveSemidefiniteMatrix(subject: Matrix): AssumptionProposition
```

</details>

## primeAssumption

<a id="entry-presentation_wasm_object_model_capability_contexts_prime_assumption_api_session_prime_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_primeassumption.048f5e3f9f7a"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
primeAssumption(subject: Expression): AssumptionProposition
```

Build a primality assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_primeassumption.dea59522d9b3"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.primeAssumption</code></p>

```typescript signature
primeAssumption(subject: Expression): AssumptionProposition
```

</details>

## principalCongruenceResiduals

<a id="entry-presentation_wasm_object_model_capability_contexts_principal_congruence_residuals_api_partial_differential_equations_partialdifferentialequationtransformationverificationreport_principal_congruence_residuals"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationtransformationverificationreport_principalcongruenceresiduals.83be7441a1af"></a>
<p class="symi-entry-owner">PartialDifferentialEquationTransformationVerificationReport property</p>

```typescript signature
readonly principalCongruenceResiduals: Expression[]
```

The exact principal-matrix congruence residuals.

## principalForm

<a id="entry-presentation_wasm_object_model_capability_contexts_principal_form_api_partial_differential_equations_partialdifferentialequationcanonicalizationresult_principal_form"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcanonicalizationresult_principalform.56b9d4fecb56"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCanonicalizationResult property</p>

```typescript signature
readonly principalForm: string | undefined
```

The exact canonical principal form that was reached.

## principalMatrix

<a id="entry-presentation_wasm_object_model_capability_contexts_principal_matrix_api_partial_differential_equations_partialdifferentialequationsecondorderclassification_principal_matrix"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsecondorderclassification_principalmatrix.b9bafb7174f6"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSecondOrderClassification property</p>

```typescript signature
readonly principalMatrix: Matrix
```

The frozen symmetric principal matrix this analysis classified.

## proofObligations

<a id="entry-presentation_wasm_object_model_capability_contexts_proof_obligations_api_partial_differential_equations_partialdifferentialequationmethodcandidate_proof_obligations"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationmethodcandidate_proofobligations.11ee48d0dcf5"></a>
<p class="symi-entry-owner">PartialDifferentialEquationMethodCandidate property</p>

```typescript signature
readonly proofObligations: string[]
```

The exact obligations this method must discharge before it may solve.

## proofObligations

<a id="entry-presentation_wasm_object_model_capability_contexts_proof_obligations_api_partial_differential_equations_partialdifferentialequationsecondorderclassification_proof_obligations"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsecondorderclassification_proofobligations.76f844e0e913"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSecondOrderClassification property</p>

```typescript signature
readonly proofObligations: string[]
```

The obligations a downstream canonical-coordinate route must discharge.

## proofObligations

<a id="entry-presentation_wasm_object_model_capability_contexts_proof_obligations_api_partial_differential_equations_partialdifferentialequationsolutionfamily_proof_obligations"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolutionfamily_proofobligations.e5dda376598b"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolutionFamily property</p>

```typescript signature
readonly proofObligations: string[]
```

The obligations recorded against this candidate family.

## proofObligations

<a id="entry-presentation_wasm_object_model_capability_contexts_proof_obligations_api_partial_differential_equations_partialdifferentialequationverificationreport_proof_obligations"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationverificationreport_proofobligations.b11b03c7f975"></a>
<p class="symi-entry-owner">PartialDifferentialEquationVerificationReport property</p>

```typescript signature
readonly proofObligations: string[]
```

The obligations consulted or left unresolved by this verification.

## provenance

<a id="entry-presentation_wasm_object_model_capability_contexts_provenance_api_partial_differential_equations_partialdifferentialequationsolveresult_provenance"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolveresult_provenance.df5113fd5021"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolveResult property</p>

```typescript signature
readonly provenance: PartialDifferentialEquationSolutionProvenance | undefined
```

The mathematical provenance a verified solution carries.

## rationalAssumption

<a id="entry-presentation_wasm_object_model_capability_contexts_rational_assumption_api_session_rational_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_rationalassumption.12ebaab24804"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
rationalAssumption(subject: Expression): AssumptionProposition
```

Build a rationality assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_rationalassumption.66ad2d17a4bd"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.rationalAssumption</code></p>

```typescript signature
rationalAssumption(subject: Expression): AssumptionProposition
```

</details>

## realAssumption

<a id="entry-presentation_wasm_object_model_capability_contexts_real_assumption_api_session_real_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_realassumption.926ab7bf4766"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
realAssumption(subject: Expression): AssumptionProposition
```

Build a realness assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_realassumption.973d612c8247"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.realAssumption</code></p>

```typescript signature
realAssumption(subject: Expression): AssumptionProposition
```

</details>

## realEntries

<a id="entry-presentation_wasm_object_model_capability_contexts_real_entries_api_session_real_entries"></a>
<a id="placement-placement.wasm.wasm_module.module_realentries.7d6debcfcb29"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
realEntries(subject: Matrix): AssumptionProposition
```

Build a real-entry proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_realentries.1307176acf67"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.realEntries</code></p>

```typescript signature
realEntries(subject: Matrix): AssumptionProposition
```

</details>

## reconstruction

<a id="entry-presentation_wasm_object_model_capability_contexts_reconstruction_api_partial_differential_equations_partialdifferentialequationseparationresult_reconstruction"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationseparationresult_reconstruction.b551c6f2c2ad"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSeparationResult property</p>

```typescript signature
readonly reconstruction: Expression
```

The exact reconstruction expression for the separated factors.

## reducedEquation

<a id="entry-presentation_wasm_object_model_capability_contexts_reduced_equation_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_reduced_equation"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsimilaritysolution_reducedequation.cbe6c8378679"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSimilaritySolution property</p>

```typescript signature
readonly reducedEquation: Expression | undefined
```

The reduced ordinary differential equation for the profile, read as zero.

## refine

<a id="entry-presentation_wasm_assumptions_capability_contexts_refine_api_assumptionscope_refine"></a>
<a id="placement-placement.wasm.wasm_class.assumptionscope_refine.a34fe51a40a7"></a>
<p class="symi-entry-owner">AssumptionScope method</p>

```typescript signature
refine(input_expression: Expression): Expression
```

Refine an expression against this immutable local assumption scope.

## refine

<a id="entry-presentation_wasm_assumptions_capability_contexts_refine_api_session_refine"></a>
<a id="placement-placement.wasm.wasm_module.module_refine.5ab1dc89ad54"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
refine(
    input_expression: Expression,
    assumptions?: AssumptionProposition | null,
): Expression
```

Refine an expression using durable assumptions or one checked local proposition.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_refine.823a6652f5ca"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.refine</code></p>

```typescript signature
refine(
    input_expression: Expression,
    assumptions?: AssumptionProposition | null,
): Expression
```

</details>

## refine

<a id="entry-presentation_wasm_assumptions_capability_contexts_refine_api_expression_refine"></a>
<a id="placement-placement.wasm.wasm_class.expression_refine.851cb332f433"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
refine(assumptions?: AssumptionProposition | null): Expression
```

Refine this expression using durable assumptions or one checked local proposition.

## relationKind

<a id="entry-presentation_wasm_object_model_capability_contexts_relation_kind_api_assumptionproposition_relation_kind"></a>
<a id="placement-placement.wasm.wasm_module.module_relationkind.7ff1b1cd4c30"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
relationKind(proposition: AssumptionProposition): string | undefined
```

Return the canonical relation kind for an assumption proposition.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.assumptionproposition_relationkind.e790b4e9fc3f"></a>
<p class="symi-entry-owner">AssumptionProposition method: <code>AssumptionProposition.relationKind</code></p>

```typescript signature
relationKind(): string | undefined
```

</details>

## releaseHostCancellationSlot

<a id="entry-presentation_wasm_object_model_capability_contexts_release_host_cancellation_slot_unresolved"></a>
<a id="placement-placement.wasm.wasm_module.module_releasehostcancellationslot.0cdb4a4c9d2b"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
releaseHostCancellationSlot(slot_index: number, ticket: number): void
```

Release one control-record reservation and clear any stop request standing against it.

## remainder

<a id="entry-presentation_wasm_object_model_capability_contexts_remainder_api_partial_differential_equations_partialdifferentialequationcoefficientdata_remainder"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcoefficientdata_remainder.a984a804d378"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCoefficientData property</p>

```typescript signature
readonly remainder: Expression | undefined
```

The exact jet-free remainder term, when one was extracted.

## requiredRank

<a id="entry-presentation_wasm_object_model_capability_contexts_required_rank_api_ordinary_differential_equations_ordinarydifferentialequationsystemverificationreport_required_rank"></a>
<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsystemverificationreport_requiredrank.28c5e9d61fa5"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSystemVerificationReport property</p>

```typescript signature
readonly requiredRank: number
```

The dimension a complete family of the system must span.

## reserveHostCancellationSlot

<a id="entry-presentation_wasm_object_model_capability_contexts_reserve_host_cancellation_slot_unresolved"></a>
<a id="placement-placement.wasm.wasm_module.module_reservehostcancellationslot.081bf1bf35ab"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
reserveHostCancellationSlot(): number
```

Reserve one control-record slot for the calls this thread starts next, or -1 when none is free.

## residual

<a id="entry-presentation_wasm_object_model_capability_contexts_residual_api_partial_differential_equations_partialdifferentialequationseparatedequation_residual"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationseparatedequation_residual.72f18ca86550"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSeparatedEquation property</p>

```typescript signature
readonly residual: Expression
```

The exact residual of this one-variable ordinary differential equation.

## residual

<a id="entry-presentation_wasm_object_model_capability_contexts_residual_api_partial_differential_equations_partialdifferentialequationverificationresidual_residual"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationverificationresidual_residual.7de4cbc4eaa6"></a>
<p class="symi-entry-owner">PartialDifferentialEquationVerificationResidual property</p>

```typescript signature
readonly residual: Expression
```

The independently reduced residual expression.

## rightOperand

<a id="entry-presentation_wasm_object_model_capability_contexts_right_operand_api_assumptionproposition_right_operand"></a>
<a id="placement-placement.wasm.wasm_module.module_rightoperand.e696bf40887d"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
rightOperand(proposition: AssumptionProposition): Expression | undefined
```

Return the right relation or congruence operand when present.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.assumptionproposition_rightoperand.c7d9f00cb532"></a>
<p class="symi-entry-owner">AssumptionProposition method: <code>AssumptionProposition.rightOperand</code></p>

```typescript signature
rightOperand(): Expression | undefined
```

</details>

## route

<a id="entry-presentation_wasm_object_model_capability_contexts_route_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_route"></a>
<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsystemsolveresult_route.ad4fa4980543"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSystemSolveResult property</p>

```typescript signature
readonly route: string | undefined
```

The route the certified assignment came from.

## secondEquation

<a id="entry-presentation_wasm_object_model_capability_contexts_second_equation_api_partial_differential_equations_partialdifferentialequationseparationresult_second_equation"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationseparationresult_secondequation.f18381889044"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSeparationResult property</p>

```typescript signature
readonly secondEquation: PartialDifferentialEquationSeparatedEquation
```

The second exact one-variable ordinary differential equation.

## secondOrderPrincipalPart

<a id="entry-presentation_wasm_object_model_capability_contexts_second_order_principal_part_api_partial_differential_equations_partialdifferentialequationclassification_second_order_principal_part"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationclassification_secondorderprincipalpart.b59823cebdcb"></a>
<p class="symi-entry-owner">PartialDifferentialEquationClassification property</p>

```typescript signature
readonly secondOrderPrincipalPart: PartialDifferentialEquationPrincipalPart | undefined
```

The exact second-order principal metadata, when the equation has one.

## selectedMode

<a id="entry-presentation_wasm_object_model_capability_contexts_selectedmode_api_parallelism_parallelismcapability_selected_mode"></a>
<a id="placement-placement.wasm.wasm_class.parallelismcapability_selectedmode.42c75b8ac175"></a>
<p class="symi-entry-owner">ParallelismCapability property</p>

```typescript signature
readonly selectedMode: string
```

Return the execution mode selected for later operations.

## separatePartialDifferentialEquation

<a id="entry-presentation_wasm_object_model_capability_contexts_separate_partial_differential_equation_api_partial_differential_equations_session_separate_partial_differential_equation"></a>
<a id="placement-placement.wasm.wasm_module.module_separatepartialdifferentialequation.39acc8c74690"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
separatePartialDifferentialEquation(problem: PartialDifferentialEquationProblem): PartialDifferentialEquationSeparationResult
```

Separate a supported PDE in the default context into exact one-variable ODEs.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_separatepartialdifferentialequation.bc377ea512aa"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.separatePartialDifferentialEquation</code></p>

```typescript signature
separatePartialDifferentialEquation(problem: PartialDifferentialEquationProblem): PartialDifferentialEquationSeparationResult
```

</details>

## separationConstant

<a id="entry-presentation_wasm_object_model_capability_contexts_separation_constant_api_partial_differential_equations_partialdifferentialequationseparationresult_separation_constant"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationseparationresult_separationconstant.338e7b674f0f"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSeparationResult property</p>

```typescript signature
readonly separationConstant: Expression
```

The fresh exact separation constant.

## serialize

<a id="entry-presentation_wasm_assumptions_capability_contexts_serialize_api_assumptionproposition_serialize"></a>
<a id="placement-placement.wasm.wasm_module.module_serialize.7eefdbffab95"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
serialize(proposition: AssumptionProposition): string
```

Serialize an assumption proposition in the versioned canonical grammar.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.assumptionproposition_serialize.765c7dd6b46b"></a>
<p class="symi-entry-owner">AssumptionProposition method: <code>AssumptionProposition.serialize</code></p>

```typescript signature
serialize(): string
```

</details>

## serializeBulk

<a id="entry-presentation_wasm_object_model_capability_contexts_serialize_bulk_api_session_serialize_bulk"></a>
<a id="placement-placement.wasm.wasm_module.module_serializebulk.d66dc15ad809"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
serializeBulk(targets: Expression[]): BulkTextOutcome[]
```

Serialize an ordered collection in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_serializebulk.6da9c7d96404"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.serializeBulk</code></p>

```typescript signature
serializeBulk(targets: Expression[]): BulkTextOutcome[]
```

</details>

## setExecutionMode

<a id="entry-presentation_wasm_object_model_capability_contexts_set_execution_mode_api_session_set_execution_mode"></a>
<a id="placement-placement.wasm.wasm_module.module_setexecutionmode.eb3bb85ec56d"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
setExecutionMode(name: string): void
```

Select the execution mode of the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_setexecutionmode.8558c817b7d7"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.setExecutionMode</code></p>

```typescript signature
setExecutionMode(name: string): void
```

</details>

## similarityVariable

<a id="entry-presentation_wasm_object_model_capability_contexts_similarity_variable_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_similarity_variable"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsimilaritysolution_similarityvariable.434aacc2d08e"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSimilaritySolution property</p>

```typescript signature
readonly similarityVariable: Expression | undefined
```

The coordinate of the reduced equation, standing for the invariant.

## simplifyBulk

<a id="entry-presentation_wasm_object_model_capability_contexts_simplify_bulk_api_session_simplify_bulk"></a>
<a id="placement-placement.wasm.wasm_module.module_simplifybulk.410bd7966c46"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
simplifyBulk(targets: Expression[]): BulkExpressionOutcome[]
```

Simplify an ordered collection in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_simplifybulk.f58e98df3b0c"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.simplifyBulk</code></p>

```typescript signature
simplifyBulk(targets: Expression[]): BulkExpressionOutcome[]
```

</details>

## simplifyUnderConstraint

<a id="entry-presentation_wasm_object_model_capability_contexts_simplify_under_constraint_api_session_simplify_under_constraint"></a>
<a id="placement-placement.wasm.wasm_module.module_simplifyunderconstraint.cd9e5a6a75e2"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
simplifyUnderConstraint(
    input_expression: Expression,
    constraint: Expression,
): Expression
```

Simplify an expression under a local bounded logical constraint without changing symbol assumptions.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_simplifyunderconstraint.d6de0069cdb2"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.simplifyUnderConstraint</code></p>

```typescript signature
simplifyUnderConstraint(
    input_expression: Expression,
    constraint: Expression,
): Expression
```

</details>

## simplifyUnderConstraint

<a id="entry-presentation_wasm_object_model_capability_contexts_simplify_under_constraint_api_expression_simplify_under_constraint"></a>
<a id="placement-placement.wasm.wasm_class.expression_simplifyunderconstraint.1623bd3f02f7"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
simplifyUnderConstraint(constraint: Expression): Expression
```

Simplify this expression under a local bounded logical constraint without changing symbol assumptions.

## singularMatrix

<a id="entry-presentation_wasm_object_model_capability_contexts_singular_matrix_api_session_singular_matrix"></a>
<a id="placement-placement.wasm.wasm_module.module_singularmatrix.3fe01d91e635"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
singularMatrix(subject: Matrix): AssumptionProposition
```

Build a singular-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_singularmatrix.95862437c4bc"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.singularMatrix</code></p>

```typescript signature
singularMatrix(subject: Matrix): AssumptionProposition
```

</details>

## solution

<a id="entry-presentation_wasm_object_model_capability_contexts_solution_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_solution"></a>
<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsolveresult_solution.095194c1e3e8"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSolveResult property</p>

```typescript signature
readonly solution: Expression | undefined
```

The certified solution, which no declined request carries.

## solution

<a id="entry-presentation_wasm_object_model_capability_contexts_solution_api_partial_differential_equations_partialdifferentialequationsolveresult_solution"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolveresult_solution.9dcf8cda0dd0"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolveResult property</p>

```typescript signature
readonly solution: PartialDifferentialEquationSolutionFamily | undefined
```

The verified solution family, which no declined route may carry.

## solveOrdinaryDifferentialEquationRequest

<a id="entry-presentation_wasm_object_model_capability_contexts_solve_ordinary_differential_equation_request_api_ordinary_differential_equations_session_solve_ordinary_differential_equation_request"></a>
<a id="placement-placement.wasm.wasm_module.module_solveordinarydifferentialequationrequest.ccf38368c860"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
solveOrdinaryDifferentialEquationRequest(
    equation: Expression,
    dependent_function_call: Expression,
    independent_variable: string,
    scope: string,
    condition_residuals?: Expression[] | null,
    method?: string | null,
    regularity?: string | null,
): OrdinaryDifferentialEquationSolveResult
```

Solve one scalar ODE request with its data, method, scope, and regularity, keeping the evidence behind the answer.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_solveordinarydifferentialequationrequest.0d10418c0664"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.solveOrdinaryDifferentialEquationRequest</code></p>

```typescript signature
solveOrdinaryDifferentialEquationRequest(
    equation: Expression,
    dependent_function_call: Expression,
    independent_variable: string,
    scope: string,
    condition_residuals?: Expression[] | null,
    method?: string | null,
    regularity?: string | null,
): OrdinaryDifferentialEquationSolveResult
```

</details>

## solveOrdinaryDifferentialEquationSystemRequest

<a id="entry-presentation_wasm_object_model_capability_contexts_solve_ordinary_differential_equation_system_request_api_ordinary_differential_equations_session_solve_ordinary_differential_equation_system_request"></a>
<a id="placement-placement.wasm.wasm_module.module_solveordinarydifferentialequationsystemrequest.8607f77ab0ac"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
solveOrdinaryDifferentialEquationSystemRequest(
    equations: Expression[],
    dependent_function_calls: Expression[],
    independent_variable: string,
    condition_residuals?: Expression[] | null,
    method?: string | null,
): OrdinaryDifferentialEquationSystemSolveResult
```

Solve a system of ODEs in one coordinate through the requested route, keeping the evidence behind the assignment.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_solveordinarydifferentialequationsystemrequest.b14fb515da40"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.solveOrdinaryDifferentialEquationSystemRequest</code></p>

```typescript signature
solveOrdinaryDifferentialEquationSystemRequest(
    equations: Expression[],
    dependent_function_calls: Expression[],
    independent_variable: string,
    condition_residuals?: Expression[] | null,
    method?: string | null,
): OrdinaryDifferentialEquationSystemSolveResult
```

</details>

## solveOrdinaryDifferentialEquationWithHistory

<a id="entry-presentation_wasm_object_model_capability_contexts_solve_ordinary_differential_equation_with_history_api_ordinary_differential_equations_session_solve_ordinary_differential_equation_with_history"></a>
<a id="placement-placement.wasm.wasm_module.module_solveordinarydifferentialequationwithhistory.5f497de66d83"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
solveOrdinaryDifferentialEquationWithHistory(
    equation: Expression,
    dependent_function_call: Expression,
    independent_variable: string,
    history_value: Expression,
    history_start: Expression,
    history_end: Expression,
): OrdinaryDifferentialEquationSolveResult
```

Solve a retarded delay ODE from a constant history stated on an explicit interval.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_solveordinarydifferentialequationwithhistory.213a3190a46e"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.solveOrdinaryDifferentialEquationWithHistory</code></p>

```typescript signature
solveOrdinaryDifferentialEquationWithHistory(
    equation: Expression,
    dependent_function_call: Expression,
    independent_variable: string,
    history_value: Expression,
    history_start: Expression,
    history_end: Expression,
): OrdinaryDifferentialEquationSolveResult
```

</details>

## solvePartialDifferentialEquation

<a id="entry-presentation_wasm_object_model_capability_contexts_solve_partial_differential_equation_api_partial_differential_equations_session_solve_partial_differential_equation"></a>
<a id="placement-placement.wasm.wasm_module.module_solvepartialdifferentialequation.4ef3f7b147c7"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
solvePartialDifferentialEquation(
    problem: PartialDifferentialEquationProblem,
    method?: string | null,
): PartialDifferentialEquationSolveResult
```

Run the sound partial differential equation dispatcher under a stable method name.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_solvepartialdifferentialequation.e4cfd20f1895"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.solvePartialDifferentialEquation</code></p>

```typescript signature
solvePartialDifferentialEquation(
    problem: PartialDifferentialEquationProblem,
    method?: string | null,
): PartialDifferentialEquationSolveResult
```

</details>

## solvePartialDifferentialEquationBySimilarityReduction

<a id="entry-presentation_wasm_object_model_capability_contexts_solve_partial_differential_equation_by_similarity_reduction_api_partial_differential_equations_session_solve_partial_differential_equation_by_similarity_reduction"></a>
<a id="placement-placement.wasm.wasm_module.module_solvepartialdifferentialequationbysimilarityreduction.f25716664764"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
solvePartialDifferentialEquationBySimilarityReduction(
    problem: PartialDifferentialEquationProblem,
    generator: PartialDifferentialEquationPointSymmetryGenerator,
): PartialDifferentialEquationSimilaritySolution
```

Reduce a two-variable PDE by a point symmetry, solve the reduction, and lift its family.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_solvepartialdifferentialequationbysimilarityreduction.cbb1d2d4f631"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.solvePartialDifferentialEquationBySimilarityReduction</code></p>

```typescript signature
solvePartialDifferentialEquationBySimilarityReduction(
    problem: PartialDifferentialEquationProblem,
    generator: PartialDifferentialEquationPointSymmetryGenerator,
): PartialDifferentialEquationSimilaritySolution
```

</details>

## solvePartialDifferentialEquationRequest

<a id="entry-presentation_wasm_object_model_capability_contexts_solve_partial_differential_equation_request_api_partial_differential_equations_session_solve_partial_differential_equation_request"></a>
<a id="placement-placement.wasm.wasm_module.module_solvepartialdifferentialequationrequest.cd6c143bbccf"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
solvePartialDifferentialEquationRequest(
    problem: PartialDifferentialEquationProblem,
    scope: string,
    geometric_domain?: string | null,
    regularity?: string | null,
    solution_class?: string | null,
    method?: string | null,
): PartialDifferentialEquationSolveResult
```

Solve a PDE request whose scope, geometry, regularity, and solution class are part of the question.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_solvepartialdifferentialequationrequest.9454cbc9afee"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.solvePartialDifferentialEquationRequest</code></p>

```typescript signature
solvePartialDifferentialEquationRequest(
    problem: PartialDifferentialEquationProblem,
    scope: string,
    geometric_domain?: string | null,
    regularity?: string | null,
    solution_class?: string | null,
    method?: string | null,
): PartialDifferentialEquationSolveResult
```

</details>

## solvePartialDifferentialEquationWithTransformAxisSpecifications

<a id="entry-presentation_wasm_object_model_capability_contexts_solve_partial_differential_equation_with_transform_axis_specifications_api_partial_differential_equations_session_solve_partial_differential_equation_with_transform_axis_specifications"></a>
<a id="placement-placement.wasm.wasm_module.module_solvepartialdifferentialequationwithtransformaxisspecifications.ec65b3a1b0a4"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
solvePartialDifferentialEquationWithTransformAxisSpecifications(
    problem: PartialDifferentialEquationProblem,
    method: string,
    transform_axis_specifications: string[],
): PartialDifferentialEquationSolveResult
```

Solve a PDE with ordered explicit transform-axis specifications.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_solvepartialdifferentialequationwithtransformaxisspecifications.662e82df8c14"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.solvePartialDifferentialEquationWithTransformAxisSpecifications</code></p>

```typescript signature
solvePartialDifferentialEquationWithTransformAxisSpecifications(
    problem: PartialDifferentialEquationProblem,
    method: string,
    transform_axis_specifications: string[],
): PartialDifferentialEquationSolveResult
```

</details>

## sourceVariables

<a id="entry-presentation_wasm_object_model_capability_contexts_source_variables_api_partial_differential_equations_partialdifferentialequationcoordinatechange_source_variables"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcoordinatechange_sourcevariables.5479a3ea67d3"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCoordinateChange property</p>

```typescript signature
readonly sourceVariables: string[]
```

The ordered source coordinate names.

## squareMatrix

<a id="entry-presentation_wasm_object_model_capability_contexts_square_matrix_api_session_square_matrix"></a>
<a id="placement-placement.wasm.wasm_module.module_squarematrix.dd03175ad835"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
squareMatrix(subject: Matrix): AssumptionProposition
```

Build a square-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_squarematrix.10a5804efa2d"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.squareMatrix</code></p>

```typescript signature
squareMatrix(subject: Matrix): AssumptionProposition
```

</details>

## strategy

<a id="entry-presentation_wasm_object_model_capability_contexts_strategy_api_partial_differential_equations_partialdifferentialequationseparationresult_strategy"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationseparationresult_strategy.4d4c9656d5f2"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSeparationResult property</p>

```typescript signature
readonly strategy: string
```

The selected separation strategy under its stable lowercase spelling.

## substituteBulk

<a id="entry-presentation_wasm_object_model_capability_contexts_substitute_bulk_api_session_substitute_bulk"></a>
<a id="placement-placement.wasm.wasm_module.module_substitutebulk.80cd62071bc5"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
substituteBulk(
    targets: Expression[],
    variable: Expression,
    value: Expression,
): BulkExpressionOutcome[]
```

Substitute throughout an ordered collection in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_substitutebulk.23b4102b48c2"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.substituteBulk</code></p>

```typescript signature
substituteBulk(
    targets: Expression[],
    variable: Expression,
    value: Expression,
): BulkExpressionOutcome[]
```

</details>

## subtract

<a id="entry-presentation_wasm_object_model_capability_contexts_subtract_api_expression_subtract"></a>
<a id="placement-placement.wasm.wasm_class.expression_subtract.792ca56d060e"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
subtract(other: Expression): Expression
```

Difference of this expression and `other`.

## symmetricMatrix

<a id="entry-presentation_wasm_object_model_capability_contexts_symmetric_matrix_api_session_symmetric_matrix"></a>
<a id="placement-placement.wasm.wasm_module.module_symmetricmatrix.503a37665d86"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
symmetricMatrix(subject: Matrix): AssumptionProposition
```

Build a symmetric-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_symmetricmatrix.fef52053eed2"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.symmetricMatrix</code></p>

```typescript signature
symmetricMatrix(subject: Matrix): AssumptionProposition
```

</details>

## targetDependentFunction

<a id="entry-presentation_wasm_object_model_capability_contexts_target_dependent_function_api_partial_differential_equations_partialdifferentialequationcoordinatechange_target_dependent_function"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcoordinatechange_targetdependentfunction.8f8a6f1e66f4"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCoordinateChange property</p>

```typescript signature
readonly targetDependentFunction: string
```

The target unknown-function name.

## targetProblem

<a id="entry-presentation_wasm_object_model_capability_contexts_target_problem_api_partial_differential_equations_partialdifferentialequationtransformationresult_target_problem"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationtransformationresult_targetproblem.b42721033cee"></a>
<p class="symi-entry-owner">PartialDifferentialEquationTransformationResult property</p>

```typescript signature
readonly targetProblem: PartialDifferentialEquationProblem | undefined
```

The transformed PDE problem stated in the target coordinates.

## targetVariables

<a id="entry-presentation_wasm_object_model_capability_contexts_target_variables_api_partial_differential_equations_partialdifferentialequationcoordinatechange_target_variables"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcoordinatechange_targetvariables.f70dbe969aba"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCoordinateChange property</p>

```typescript signature
readonly targetVariables: string[]
```

The ordered target coordinate names.

## toString

<a id="entry-presentation_wasm_object_model_capability_contexts_to_js_string_unresolved"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcoordinatechange_tostring.1cfabe94bc27"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCoordinateChange method</p>

```typescript signature
toString(): string
```

The mathematical text of this object, as a JavaScript string.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationproblem_tostring.fe62b42acbb0"></a>
<p class="symi-entry-owner">PartialDifferentialEquationProblem method: <code>PartialDifferentialEquationProblem.toString</code></p>

```typescript signature
toString(): string
```

<a id="placement-placement.wasm.wasm_class.undefinedfunction_tostring.e24a69e52de8"></a>
<p class="symi-entry-owner">UndefinedFunction method: <code>UndefinedFunction.toString</code></p>

```typescript signature
toString(): string
```

</details>

## transcendentalAssumption

<a id="entry-presentation_wasm_object_model_capability_contexts_transcendental_assumption_api_session_transcendental_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_transcendentalassumption.685160fbab59"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
transcendentalAssumption(subject: Expression): AssumptionProposition
```

Build a transcendence assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_transcendentalassumption.6d339804210b"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.transcendentalAssumption</code></p>

```typescript signature
transcendentalAssumption(subject: Expression): AssumptionProposition
```

</details>

## transformationDecline

<a id="entry-presentation_wasm_object_model_capability_contexts_transformation_decline_api_partial_differential_equations_partialdifferentialequationcanonicalizationresult_transformation_decline"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcanonicalizationresult_transformationdecline.bbfd366c8896"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCanonicalizationResult property</p>

```typescript signature
readonly transformationDecline: string | undefined
```

The underlying coordinate-transformation decline, when one caused the decline.

## transformed

<a id="entry-presentation_wasm_object_model_capability_contexts_transformed_api_partial_differential_equations_partialdifferentialequationtransformationresult_transformed"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationtransformationresult_transformed.7b1b402944f8"></a>
<p class="symi-entry-owner">PartialDifferentialEquationTransformationResult property</p>

```typescript signature
readonly transformed: boolean
```

Whether a verified transformation was produced.

## transformedCoordinates

<a id="entry-presentation_wasm_object_model_capability_contexts_transformed_coordinates_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_transformed_coordinates"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryaction_transformedcoordinates.52e1713096aa"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAction property</p>

```typescript signature
readonly transformedCoordinates: Expression[]
```

The coordinates at which a seed solution is evaluated.

## transformedGoverningResidual

<a id="entry-presentation_wasm_object_model_capability_contexts_transformed_governing_residual_api_partial_differential_equations_partialdifferentialequationtransformationverificationreport_transformed_governing_residual"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationtransformationverificationreport_transformedgoverningresidual.d3784149f15e"></a>
<p class="symi-entry-owner">PartialDifferentialEquationTransformationVerificationReport property</p>

```typescript signature
readonly transformedGoverningResidual: Expression
```

The independently transformed source governing residual.

## unavailableReason

<a id="entry-presentation_wasm_object_model_capability_contexts_unavailablereason_api_parallelism_parallelismcapability_unavailable_reason"></a>
<a id="placement-placement.wasm.wasm_class.parallelismcapability_unavailablereason.07bb1c3498ad"></a>
<p class="symi-entry-owner">ParallelismCapability property</p>

```typescript signature
readonly unavailableReason: string | undefined
```

Return the stable reason parallel execution is unavailable, if any.

## unitaryMatrix

<a id="entry-presentation_wasm_object_model_capability_contexts_unitary_matrix_api_session_unitary_matrix"></a>
<a id="placement-placement.wasm.wasm_module.module_unitarymatrix.5678eb6d4ccd"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
unitaryMatrix(subject: Matrix): AssumptionProposition
```

Build a unitary-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_unitarymatrix.4eef4d42ba96"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.unitaryMatrix</code></p>

```typescript signature
unitaryMatrix(subject: Matrix): AssumptionProposition
```

</details>

## upperTriangularMatrix

<a id="entry-presentation_wasm_object_model_capability_contexts_upper_triangular_matrix_api_session_upper_triangular_matrix"></a>
<a id="placement-placement.wasm.wasm_module.module_uppertriangularmatrix.14d1fd7d94d6"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
upperTriangularMatrix(subject: Matrix): AssumptionProposition
```

Build a upper-triangular-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_uppertriangularmatrix.5ff14f5d2604"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.upperTriangularMatrix</code></p>

```typescript signature
upperTriangularMatrix(subject: Matrix): AssumptionProposition
```

</details>

## value

<a id="entry-presentation_wasm_object_model_capability_contexts_value_api_parallelism_bulkexpressionoutcome_value"></a>
<a id="placement-placement.wasm.wasm_class.bulkexpressionoutcome_value.a88ab5dae37a"></a>
<p class="symi-entry-owner">BulkExpressionOutcome property</p>

```typescript signature
readonly value: Expression | undefined
```

Return the expression value when the item succeeded.

## value

<a id="entry-presentation_wasm_object_model_capability_contexts_value_api_parallelism_bulktextoutcome_value"></a>
<a id="placement-placement.wasm.wasm_class.bulktextoutcome_value.e25bb45ec6a7"></a>
<p class="symi-entry-owner">BulkTextOutcome property</p>

```typescript signature
readonly value: string | undefined
```

Return the canonical text when the item succeeded.

## verification

<a id="entry-presentation_wasm_object_model_capability_contexts_verification_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_verification"></a>
<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsolveresult_verification.98a3c08527f6"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSolveResult property</p>

```typescript signature
readonly verification: string | undefined
```

The independent verifier's decision on the candidate, when verification ran.

## verification

<a id="entry-presentation_wasm_object_model_capability_contexts_verification_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_verification"></a>
<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsystemsolveresult_verification.21b83effc580"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSystemSolveResult property</p>

```typescript signature
readonly verification: string | undefined
```

The independent verifier's decision on the assignment, when verification ran.

## verification

<a id="entry-presentation_wasm_object_model_capability_contexts_verification_api_partial_differential_equations_partialdifferentialequationseparationresult_verification"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationseparationresult_verification.af2ce21b75f8"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSeparationResult property</p>

```typescript signature
readonly verification: string
```

The aggregate verdict of the independently replayed separation certificate.

## verification

<a id="entry-presentation_wasm_object_model_capability_contexts_verification_api_partial_differential_equations_partialdifferentialequationsolveresult_verification"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolveresult_verification.625c06465450"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolveResult property</p>

```typescript signature
readonly verification: PartialDifferentialEquationVerificationReport | undefined
```

The independent verification report a solved result must carry.

## verifyOrdinaryDifferentialEquationSystemSolution

<a id="entry-presentation_wasm_object_model_capability_contexts_verify_ordinary_differential_equation_system_solution_api_ordinary_differential_equations_session_verify_ordinary_differential_equation_system_solution"></a>
<a id="placement-placement.wasm.wasm_module.module_verifyordinarydifferentialequationsystemsolution.d73b5971c92e"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
verifyOrdinaryDifferentialEquationSystemSolution(
    equations: Expression[],
    dependent_function_calls: Expression[],
    independent_variable: string,
    components: Expression[],
    generated_constants: Expression[],
    condition_residuals?: Expression[] | null,
): OrdinaryDifferentialEquationSystemVerificationReport
```

Verify a supplied assignment for a system of ODEs without solving it again.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_verifyordinarydifferentialequationsystemsolution.6259425d8a18"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.verifyOrdinaryDifferentialEquationSystemSolution</code></p>

```typescript signature
verifyOrdinaryDifferentialEquationSystemSolution(
    equations: Expression[],
    dependent_function_calls: Expression[],
    independent_variable: string,
    components: Expression[],
    generated_constants: Expression[],
    condition_residuals?: Expression[] | null,
): OrdinaryDifferentialEquationSystemVerificationReport
```

</details>

## verifyPartialDifferentialEquationCoordinateTransformation

<a id="entry-presentation_wasm_object_model_capability_contexts_verify_partial_differential_equation_coordinate_transformation_api_partial_differential_equations_session_verify_partial_differential_equation_coordinate_transformation"></a>
<a id="placement-placement.wasm.wasm_module.module_verifypartialdifferentialequationcoordinatetransformation.723f0853a676"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
verifyPartialDifferentialEquationCoordinateTransformation(
    problem: PartialDifferentialEquationProblem,
    transformation: PartialDifferentialEquationTransformationResult,
): PartialDifferentialEquationTransformationVerificationReport
```

Independently verify an exact PDE coordinate transformation.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_verifypartialdifferentialequationcoordinatetransformation.8d606f34fd5e"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.verifyPartialDifferentialEquationCoordinateTransformation</code></p>

```typescript signature
verifyPartialDifferentialEquationCoordinateTransformation(
    problem: PartialDifferentialEquationProblem,
    transformation: PartialDifferentialEquationTransformationResult,
): PartialDifferentialEquationTransformationVerificationReport
```

</details>

## verifyPartialDifferentialEquationSolution

<a id="entry-presentation_wasm_object_model_capability_contexts_verify_partial_differential_equation_solution_api_partial_differential_equations_session_verify_partial_differential_equation_solution"></a>
<a id="placement-placement.wasm.wasm_module.module_verifypartialdifferentialequationsolution.b86bfbc069d4"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
verifyPartialDifferentialEquationSolution(
    problem: PartialDifferentialEquationProblem,
    solution: PartialDifferentialEquationSolutionFamily,
): PartialDifferentialEquationVerificationReport
```

Independently verify a partial differential equation candidate with exact residual reasoning.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_verifypartialdifferentialequationsolution.9d784d900bb6"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.verifyPartialDifferentialEquationSolution</code></p>

```typescript signature
verifyPartialDifferentialEquationSolution(
    problem: PartialDifferentialEquationProblem,
    solution: PartialDifferentialEquationSolutionFamily,
): PartialDifferentialEquationVerificationReport
```

</details>

## weight

<a id="entry-presentation_wasm_object_model_capability_contexts_weight_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_weight"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsimilaritysolution_weight.1ec0dcff27a1"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSimilaritySolution property</p>

```typescript signature
readonly weight: Expression | undefined
```

The weight of invariant solutions.

## workerCount

<a id="entry-presentation_wasm_object_model_capability_contexts_workercount_api_parallelism_parallelismcapability_worker_count"></a>
<a id="placement-placement.wasm.wasm_class.parallelismcapability_workercount.2182d20e0f67"></a>
<p class="symi-entry-owner">ParallelismCapability property</p>

```typescript signature
readonly workerCount: number
```

Return the configured worker count.

## zeroAssumption

<a id="entry-presentation_wasm_object_model_capability_contexts_zero_assumption_api_session_zero_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_zeroassumption.999da512137e"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
zeroAssumption(subject: Expression): AssumptionProposition
```

Build a zero assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_zeroassumption.e80b6e21b307"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.zeroAssumption</code></p>

```typescript signature
zeroAssumption(subject: Expression): AssumptionProposition
```

</details>

## zeroEquivalent

<a id="entry-presentation_wasm_object_model_capability_contexts_zero_equivalent_api_session_zero_equivalent"></a>
<a id="placement-placement.wasm.wasm_module.module_zeroequivalent.cab9fc362970"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
zeroEquivalent(
    input_expression: Expression,
    constraint?: Expression | null,
): string
```

Prove whether an expression is zero wherever it is defined, returning `"true"`, `"false"`, or `"unknown"`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_zeroequivalent.9d78dbb91e75"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.zeroEquivalent</code></p>

```typescript signature
zeroEquivalent(
    input_expression: Expression,
    constraint?: Expression | null,
): string
```

</details>

## zeroEquivalent

<a id="entry-presentation_wasm_object_model_capability_contexts_zero_equivalent_api_expression_zero_equivalent"></a>
<a id="placement-placement.wasm.wasm_class.expression_zeroequivalent.d55b1b33dd0a"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
zeroEquivalent(constraint?: Expression | null): string
```

Prove whether this expression is zero wherever it is defined, returning `"true"`, `"false"`, or `"unknown"`.

## zeroMatrix

<a id="entry-presentation_wasm_object_model_capability_contexts_zero_matrix_api_session_zero_matrix"></a>
<a id="placement-placement.wasm.wasm_module.module_zeromatrix.3561defba5d5"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
zeroMatrix(subject: Matrix): AssumptionProposition
```

Build a zero-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_zeromatrix.2e74a285fae1"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.zeroMatrix</code></p>

```typescript signature
zeroMatrix(subject: Matrix): AssumptionProposition
```

</details>

## bellNumber

<a id="entry-presentation_wasm_combinatorics_capability_discrete_mathematics_bell_number_api_session_bell_number"></a>
<a id="placement-placement.wasm.wasm_module.module_bellnumber.e556ba988a19"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
bellNumber(n: Expression): Expression
```

The n-th Bell number.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_bellnumber.b9d2d8d24cb1"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.bellNumber</code></p>

```typescript signature
bellNumber(n: Expression): Expression
```

</details>

## catalanNumber

<a id="entry-presentation_wasm_combinatorics_capability_discrete_mathematics_catalan_number_api_session_catalan_number"></a>
<a id="placement-placement.wasm.wasm_module.module_catalannumber.9e04d6cc190d"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
catalanNumber(n: Expression): Expression
```

The n-th Catalan number.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_catalannumber.97437d3ebb0e"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.catalanNumber</code></p>

```typescript signature
catalanNumber(n: Expression): Expression
```

</details>

## chineseRemainder

<a id="entry-presentation_wasm_combinatorics_capability_discrete_mathematics_chinese_remainder_api_number_theory_session_chinese_remainder"></a>
<a id="placement-placement.wasm.wasm_module.module_chineseremainder.f3bf8937649c"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
chineseRemainder(residues_and_moduli: Expression[]): Expression
```

The smallest non-negative solution of the simultaneous congruences \(x \equiv r_i \pmod{m_i}\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_chineseremainder.4aebe1e8fe59"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.chineseRemainder</code></p>

```typescript signature
chineseRemainder(residues_and_moduli: Expression[]): Expression
```

</details>

## complexPlane

<a id="entry-presentation_wasm_combinatorics_capability_discrete_mathematics_complex_plane_api_session_complex_plane"></a>
<a id="placement-placement.wasm.wasm_module.module_complexplane.a46c1c83bcc0"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
complexPlane(): Expression
```

The set \(\mathbb{C}\) — the ambient universe, and the domain a variable ranges over when it carries no realness assumption.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_complexplane.336fcef1c7a5"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.complexPlane</code></p>

```typescript signature
readonly complexPlane: Expression
```

<a id="placement-placement.wasm.wasm_class.context_complexplane.586e5589826d"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.complexPlane</code></p>

```typescript signature
complexPlane(): Expression
```

<a id="placement-placement.wasm.javascript_facade.symifacade_complexplane.64775d0049e5"></a>
<p class="symi-entry-owner">SymiFacade property: <code>SymiFacade.complexPlane</code></p>

```typescript signature
readonly complexPlane: Expression
```

</details>

## conditionSet

<a id="entry-presentation_wasm_sets_capability_discrete_mathematics_condition_set_api_sets_session_condition_set"></a>
<a id="placement-placement.wasm.wasm_module.module_conditionset.ea293f0d117b"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
conditionSet(
    variable: string,
    condition: Expression,
    domain: Expression,
): Expression
```

The set \(\{\operatorname{variable} \in \operatorname{domain} : \operatorname{condition}\}\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_conditionset.ca3ed9f0ad48"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.conditionSet</code></p>

```typescript signature
conditionSet(
    variable: string,
    condition: Expression,
    domain: Expression,
): Expression
```

</details>

## conjunctiveNormalForm

<a id="entry-presentation_wasm_combinatorics_capability_discrete_mathematics_conjunctive_normal_form_api_logic_session_conjunctive_normal_form"></a>
<a id="placement-placement.wasm.wasm_module.module_conjunctivenormalform.18125e7d91b4"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
conjunctiveNormalForm(input_expression: Expression): Expression
```

The dual of `disjunctive_normal_form`: a reduced conjunctive normal form (an AND of OR-clauses over literals).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_conjunctivenormalform.fd02ee7d14f1"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.conjunctiveNormalForm</code></p>

```typescript signature
conjunctiveNormalForm(input_expression: Expression): Expression
```

</details>

## conjunctiveNormalForm

<a id="entry-presentation_wasm_combinatorics_capability_discrete_mathematics_conjunctive_normal_form_api_expression_operations_expression_conjunctive_normal_form"></a>
<a id="placement-placement.wasm.wasm_class.expression_conjunctivenormalform.eef84cedcdfd"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
conjunctiveNormalForm(): Expression
```

The dual of `disjunctive_normal_form`: a reduced conjunctive normal form (an AND of OR-clauses over literals).

## continuedFractionQuadraticIrrational

<a id="entry-presentation_wasm_combinatorics_capability_discrete_mathematics_continued_fraction_quadratic_irrational_api_number_theory_session_continued_fraction_quadratic_irrational"></a>
<a id="placement-placement.wasm.wasm_module.module_continuedfractionquadraticirrational.dcf0d429e737"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
continuedFractionQuadraticIrrational(value: Expression): QuadraticContinuedFractionExpansion
```

Eventually-periodic expansion of \(\sqrt{d}\) for a non-negative integer d, returned as `(initial_terms, periodic_part)`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_continuedfractionquadraticirrational.4dd188c6160b"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.continuedFractionQuadraticIrrational</code></p>

```typescript signature
continuedFractionQuadraticIrrational(value: Expression): QuadraticContinuedFractionExpansion
```

</details>

## continuedFractionRational

<a id="entry-presentation_wasm_combinatorics_capability_discrete_mathematics_continued_fraction_rational_api_number_theory_session_continued_fraction_rational"></a>
<a id="placement-placement.wasm.wasm_module.module_continuedfractionrational.c51caff08918"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
continuedFractionRational(value: Expression): Expression[]
```

Terminating continued-fraction expansion `[a0; a1, a2, ...]` of an integer or rational expression leaf.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_continuedfractionrational.cf59a95f002b"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.continuedFractionRational</code></p>

```typescript signature
continuedFractionRational(value: Expression): Expression[]
```

</details>

## disjunctiveNormalForm

<a id="entry-presentation_wasm_combinatorics_capability_discrete_mathematics_disjunctive_normal_form_api_logic_session_disjunctive_normal_form"></a>
<a id="placement-placement.wasm.wasm_module.module_disjunctivenormalform.5d44449a582f"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
disjunctiveNormalForm(input_expression: Expression): Expression
```

Rewrite a propositional formula into a reduced disjunctive normal form (an OR of AND-terms over literals): derived connectives are eliminated, negations are pushed to the atoms, the formula is distributed, and contradictory, duplicate, and subsumed terms are dropped.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_disjunctivenormalform.08f586ff9227"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.disjunctiveNormalForm</code></p>

```typescript signature
disjunctiveNormalForm(input_expression: Expression): Expression
```

</details>

## disjunctiveNormalForm

<a id="entry-presentation_wasm_combinatorics_capability_discrete_mathematics_disjunctive_normal_form_api_expression_operations_expression_disjunctive_normal_form"></a>
<a id="placement-placement.wasm.wasm_class.expression_disjunctivenormalform.9a756d79b061"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
disjunctiveNormalForm(): Expression
```

Rewrite a propositional formula into a reduced disjunctive normal form (an OR of AND-terms over literals): derived connectives are eliminated, negations are pushed to the atoms, the formula is distributed, and contradictory, duplicate, and subsumed terms are dropped.

## divisorCount

<a id="entry-presentation_wasm_number_theory_capability_discrete_mathematics_divisor_count_api_session_divisor_count"></a>
<a id="placement-placement.wasm.wasm_module.module_divisorcount.3d6aaad82ca7"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
divisorCount(n: Expression): Expression
```

Number of positive divisors \(\tau(n)\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_divisorcount.51c87db41fb4"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.divisorCount</code></p>

```typescript signature
divisorCount(n: Expression): Expression
```

</details>

## divisorSigma

<a id="entry-presentation_wasm_number_theory_capability_discrete_mathematics_divisor_sigma_api_session_divisor_sigma"></a>
<a id="placement-placement.wasm.wasm_module.module_divisorsigma.2a53ddc533d7"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
divisorSigma(n: Expression, power: number): Expression
```

Sum of the `power`-th powers of the positive divisors \(\sigma_{\mathit{power}}(n)\); `power = 0` gives `divisor_count`, `power = 1` the divisor sum.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_divisorsigma.189d83e734c5"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.divisorSigma</code></p>

```typescript signature
divisorSigma(n: Expression, power: number): Expression
```

</details>

## eliminateDerivedLogicalConnectives

<a id="entry-presentation_wasm_logic_capability_discrete_mathematics_eliminate_derived_logical_connectives_api_logic_session_eliminate_derived_logical_connectives"></a>
<a id="placement-placement.wasm.wasm_module.module_eliminatederivedlogicalconnectives.86334ce1fe59"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
eliminateDerivedLogicalConnectives(input_expression: Expression): Expression
```

Rewrite every `implies`, `equivalent`, and `exclusive_or` occurrence into the `logical_and` / `logical_or` / `logical_not` basis. This is a directed presentation request, not a cost decision, so the result may be larger than the input; a formula already in the basis, and a conversion that would cross the fixed size ceiling, both return the input unchanged.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_eliminatederivedlogicalconnectives.fbf21e222b48"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.eliminateDerivedLogicalConnectives</code></p>

```typescript signature
eliminateDerivedLogicalConnectives(value: ExpressionLike): Expression
```

<a id="placement-placement.wasm.wasm_class.context_eliminatederivedlogicalconnectives.3556bcb58aec"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.eliminateDerivedLogicalConnectives</code></p>

```typescript signature
eliminateDerivedLogicalConnectives(input_expression: Expression): Expression
```

<a id="placement-placement.wasm.javascript_facade.symifacade_eliminatederivedlogicalconnectives.ac05ca331ca5"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.eliminateDerivedLogicalConnectives</code></p>

```typescript signature
eliminateDerivedLogicalConnectives(value: ExpressionLike): Expression
```

</details>

## eliminateDerivedLogicalConnectives

<a id="entry-presentation_wasm_logic_capability_discrete_mathematics_eliminate_derived_logical_connectives_api_expression_operations_expression_eliminate_derived_logical_connectives"></a>
<a id="placement-placement.wasm.javascript_facade.expression_eliminatederivedlogicalconnectives.03dbed4ef109"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
eliminateDerivedLogicalConnectives(): Expression
```

Rewrite every `implies`, `equivalent`, and `exclusive_or` occurrence in this formula into the `logical_and` / `logical_or` / `logical_not` basis. This is a directed presentation request, not a cost decision, so the result may be larger than the input; a formula already in the basis, and a conversion that would cross the fixed size ceiling, both return the input unchanged.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_eliminatederivedlogicalconnectives.1f7a9ae4427f"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.eliminateDerivedLogicalConnectives</code></p>

```typescript signature
eliminateDerivedLogicalConnectives(): Expression
```

</details>

## emptySet

<a id="entry-presentation_wasm_sets_capability_discrete_mathematics_empty_set_api_session_empty_set"></a>
<a id="placement-placement.wasm.wasm_module.module_emptyset.bc3dac94e421"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
emptySet(): Expression
```

The empty set \(\varnothing\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_emptyset.4bb6a4877195"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.emptySet</code></p>

```typescript signature
readonly emptySet: Expression
```

<a id="placement-placement.wasm.wasm_class.context_emptyset.a28d7059ab50"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.emptySet</code></p>

```typescript signature
emptySet(): Expression
```

<a id="placement-placement.wasm.javascript_facade.symifacade_emptyset.9c24ad3939de"></a>
<p class="symi-entry-owner">SymiFacade property: <code>SymiFacade.emptySet</code></p>

```typescript signature
readonly emptySet: Expression
```

</details>

## enumerateSetInInterval

<a id="entry-presentation_wasm_sets_capability_discrete_mathematics_enumerate_set_in_interval_api_sets_session_enumerate_set_in_interval"></a>
<a id="placement-placement.wasm.wasm_module.module_enumeratesetininterval.389b8414264e"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
enumerateSetInInterval(
    set: Expression,
    lower: Expression,
    upper: Expression,
    lower_inclusive?: boolean | null,
    upper_inclusive?: boolean | null,
    limit?: number | null,
): SetEnumeration
```

Exact elements of a set inside \([\operatorname{lower}, \operatorname{upper}]\), in increasing order, as a `set_enumeration`. Its `outcome` is `"complete"` when those are exactly the elements in the interval, `"truncated"` when `limit` cut the list short (the family is still solved), and `"declined"` when the set's shape is not enumerable — never a licence to approximate.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_enumeratesetininterval.b6c6fc34da8d"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.enumerateSetInInterval</code></p>

```typescript signature
enumerateSetInInterval(
    set: Expression,
    lower: Expression,
    upper: Expression,
    lower_inclusive?: boolean | null,
    upper_inclusive?: boolean | null,
    limit?: number | null,
): SetEnumeration
```

</details>

## eulerTotient

<a id="entry-presentation_wasm_combinatorics_capability_discrete_mathematics_euler_totient_api_number_theory_session_euler_totient"></a>
<a id="placement-placement.wasm.wasm_module.module_eulertotient.4cd7de9cfaf0"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
eulerTotient(n: Expression): Expression
```

Euler's \(\varphi(n)\); requires a positive integer.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_eulertotient.0e9516a9c2bb"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.eulerTotient</code></p>

```typescript signature
eulerTotient(n: Expression): Expression
```

</details>

## evaluateTruth

<a id="entry-presentation_wasm_logic_capability_discrete_mathematics_evaluate_truth_api_session_evaluate_truth"></a>
<a id="placement-placement.wasm.wasm_module.module_evaluatetruth.fb0e4e2d9223"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
evaluateTruth(input_expression: Expression): boolean | undefined
```

`evaluate_truth(predicate)` uses exact three-valued logic. Python returns `True`, `False`, or `None`; JavaScript returns `true`, `false`, or `null`; Rust returns `truth_value`. The third value means undecided, never false: a host-language `if` reads it as falsy, so compare against `True` / `False` explicitly. Order, equality and sign relations between closed-form real constants — rationals, `pi`, radicals and real algebraic numbers — are decided exactly by rational arithmetic; transcendental, symbolic and provably non-real operands decline rather than guess.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_evaluatetruth.a9ce02ce8752"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.evaluateTruth</code></p>

```typescript signature
evaluateTruth(predicate: ExpressionLike): boolean | null
```

<a id="placement-placement.wasm.wasm_class.context_evaluatetruth.863d04a2419d"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.evaluateTruth</code></p>

```typescript signature
evaluateTruth(input_expression: Expression): boolean | undefined
```

<a id="placement-placement.wasm.javascript_facade.symifacade_evaluatetruth.b770fcd9faa8"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.evaluateTruth</code></p>

```typescript signature
evaluateTruth(predicate: ExpressionLike): boolean | null
```

</details>

## evaluateTruth

<a id="entry-presentation_wasm_logic_capability_discrete_mathematics_evaluate_truth_api_expression_evaluate_truth"></a>
<a id="placement-placement.wasm.javascript_facade.expression_evaluatetruth.e2bc58e39b58"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
evaluateTruth(): boolean | null
```

`evaluate_truth(predicate)` uses exact three-valued logic. Python returns `True`, `False`, or `None`; JavaScript returns `true`, `false`, or `null`; Rust returns `truth_value`. The third value means undecided, never false: a host-language `if` reads it as falsy, so compare against `True` / `False` explicitly. Order, equality and sign relations between closed-form real constants — rationals, `pi`, radicals and real algebraic numbers — are decided exactly by rational arithmetic; transcendental, symbolic and provably non-real operands decline rather than guess.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_evaluatetruth.1071ae13c246"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.evaluateTruth</code></p>

```typescript signature
evaluateTruth(): boolean | undefined
```

</details>

## extendedEuclidean

<a id="entry-presentation_wasm_combinatorics_capability_discrete_mathematics_extended_euclidean_api_number_theory_session_extended_euclidean"></a>
<a id="placement-placement.wasm.wasm_module.module_extendedeuclidean.83f8fd6d7934"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
extendedEuclidean(a: Expression, b: Expression): Expression[]
```

`(gcd, x, y)` with \(a x + b y = \operatorname{gcd}\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_extendedeuclidean.2caeb9577112"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.extendedEuclidean</code></p>

```typescript signature
extendedEuclidean(a: Expression, b: Expression): Expression[]
```

</details>

## factorInteger

<a id="entry-presentation_wasm_number_theory_capability_discrete_mathematics_factor_integer_api_session_factor_integer"></a>
<a id="placement-placement.wasm.wasm_module.module_factorinteger.7be59b319dec"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
factorInteger(n: Expression): PrimeFactor[]
```

Prime factorization as `(prime, multiplicity)` pairs, ascending. Errors on zero. Notes: WASM returns `prime_factor` objects with `prime`/`multiplicity` getters; the sign \(-1\) of a negative input is carried as a leading `(-1, 1)` factor exactly as the core reports it.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_factorinteger.3224abb06726"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.factorInteger</code></p>

```typescript signature
factorInteger(n: Expression): PrimeFactor[]
```

</details>

## fallingFactorial

<a id="entry-presentation_wasm_combinatorics_capability_discrete_mathematics_falling_factorial_api_session_falling_factorial"></a>
<a id="placement-placement.wasm.wasm_module.module_fallingfactorial.cf3717768829"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
fallingFactorial(base: Expression, length: Expression): Expression
```

\(\operatorname{base}(\operatorname{base}-1)\cdots(\operatorname{base}-\operatorname{length}+1)\); `length` must be a non-negative integer, `base` may be any integer.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_fallingfactorial.c7ebe77cd326"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.fallingFactorial</code></p>

```typescript signature
fallingFactorial(base: Expression, length: Expression): Expression
```

</details>

## fibonacciNumber

<a id="entry-presentation_wasm_combinatorics_capability_discrete_mathematics_fibonacci_number_api_session_fibonacci_number"></a>
<a id="placement-placement.wasm.wasm_module.module_fibonaccinumber.b645e018b9c3"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
fibonacciNumber(n: Expression): Expression
```

The n-th Fibonacci number (F(0) = 0, F(1) = 1).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_fibonaccinumber.bfba4fbe0c16"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.fibonacciNumber</code></p>

```typescript signature
fibonacciNumber(n: Expression): Expression
```

</details>

## finiteSet

<a id="entry-presentation_wasm_sets_capability_discrete_mathematics_finite_set_api_session_finite_set"></a>
<a id="placement-placement.wasm.wasm_module.module_finiteset.149f36c22cd9"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
finiteSet(elements: Expression[]): Expression
```

Finite set; elements are deduplicated and canonically ordered. An empty list gives the empty set.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_finiteset.e1e1955cbc02"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.finiteSet</code></p>

```typescript signature
finiteSet(values: Iterable<ExpressionLike>): Expression
```

<a id="placement-placement.wasm.wasm_class.context_finiteset.3a45883a0e93"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.finiteSet</code></p>

```typescript signature
finiteSet(elements: Expression[]): Expression
```

<a id="placement-placement.wasm.javascript_facade.symifacade_finiteset.1387548559b6"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.finiteSet</code></p>

```typescript signature
finiteSet(values: Iterable<ExpressionLike>): Expression
```

</details>

## imageSet

<a id="entry-presentation_wasm_sets_capability_discrete_mathematics_image_set_api_sets_session_image_set"></a>
<a id="placement-placement.wasm.wasm_module.module_imageset.d648714b36fe"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
imageSet(
    lambda_expression: Expression,
    variable: string,
    domain: Expression,
): Expression
```

The set \(\{\operatorname{lambda\_expression} : \operatorname{variable} \in \operatorname{domain}\}\); `variable` is a binder over `lambda_expression`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_imageset.5630fa218da7"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.imageSet</code></p>

```typescript signature
imageSet(
    lambda_expression: Expression,
    variable: string,
    domain: Expression,
): Expression
```

</details>

## initialTerms

<a id="entry-presentation_wasm_combinatorics_capability_discrete_mathematics_initial_terms_api_results_quadraticcontinuedfractionexpansion_initial_terms"></a>
<a id="placement-placement.wasm.wasm_class.quadraticcontinuedfractionexpansion_initialterms.c0053bbd2c9d"></a>
<p class="symi-entry-owner">QuadraticContinuedFractionExpansion property</p>

```typescript signature
readonly initialTerms: Expression[]
```

The terms preceding the periodic part of the expansion.

## integerGcd

<a id="entry-presentation_wasm_number_theory_capability_discrete_mathematics_integer_gcd_api_session_integer_gcd"></a>
<a id="placement-placement.wasm.wasm_module.module_integergcd.880435e4defa"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
integerGcd(a: Expression, b: Expression): Expression
```

Greatest common divisor (non-negative).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_integergcd.dd986d1b30ec"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.integerGcd</code></p>

```typescript signature
integerGcd(a: Expression, b: Expression): Expression
```

</details>

## integerLcm

<a id="entry-presentation_wasm_number_theory_capability_discrete_mathematics_integer_lcm_api_session_integer_lcm"></a>
<a id="placement-placement.wasm.wasm_module.module_integerlcm.da4013a527d4"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
integerLcm(a: Expression, b: Expression): Expression
```

Least common multiple.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_integerlcm.cbbcb09e9de0"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.integerLcm</code></p>

```typescript signature
integerLcm(a: Expression, b: Expression): Expression
```

</details>

## integerNthRoot

<a id="entry-presentation_wasm_number_theory_capability_discrete_mathematics_integer_nth_root_api_session_integer_nth_root"></a>
<a id="placement-placement.wasm.wasm_module.module_integernthroot.93c0396df8ee"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
integerNthRoot(n: Expression, root_index: bigint): Expression
```

\(\lfloor n^{1/\mathit{root\_index}}\rfloor\); odd indices accept negative n. Errors when no real root exists (even index, negative n).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_integernthroot.937d47a1b8bd"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.integerNthRoot</code></p>

```typescript signature
integerNthRoot(n: Expression, root_index: bigint): Expression
```

</details>

## integerSet

<a id="entry-presentation_wasm_sets_capability_discrete_mathematics_integer_set_api_session_integer_set"></a>
<a id="placement-placement.wasm.wasm_module.module_integerset.5179601c652e"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
integerSet(): Expression
```

The set \(\mathbb{Z}\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_integerset.d4dc80555db9"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.integerSet</code></p>

```typescript signature
readonly integerSet: Expression
```

<a id="placement-placement.wasm.wasm_class.context_integerset.85a66913c2aa"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.integerSet</code></p>

```typescript signature
integerSet(): Expression
```

<a id="placement-placement.wasm.javascript_facade.symifacade_integerset.f9cb1be0989f"></a>
<p class="symi-entry-owner">SymiFacade property: <code>SymiFacade.integerSet</code></p>

```typescript signature
readonly integerSet: Expression
```

</details>

## integerSquareRoot

<a id="entry-presentation_wasm_number_theory_capability_discrete_mathematics_integer_square_root_api_session_integer_square_root"></a>
<a id="placement-placement.wasm.wasm_module.module_integersquareroot.061948d4b3be"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
integerSquareRoot(n: Expression): Expression
```

\(\lfloor\sqrt{n}\rfloor\) for non-negative n.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_integersquareroot.a1377fb2624b"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.integerSquareRoot</code></p>

```typescript signature
integerSquareRoot(n: Expression): Expression
```

</details>

## interval

<a id="entry-presentation_wasm_sets_capability_discrete_mathematics_interval_api_sets_session_interval"></a>
<a id="placement-placement.wasm.wasm_module.module_interval.9788b55cf0be"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
interval(
    lower: Expression,
    upper: Expression,
    lower_open?: boolean | null,
    upper_open?: boolean | null,
): Expression
```

Real-line interval. Closed by default; endpoints at infinity are forced open. Degenerate shapes collapse (empty interval \(\to\) empty set, single point \(\to\) finite set, \((-\infty, \infty)\to\) real line).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_interval.abdb397ea405"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.interval</code></p>

```typescript signature
interval(
    lower: Expression,
    upper: Expression,
    lower_open?: boolean | null,
    upper_open?: boolean | null,
): Expression
```

</details>

## introduceDerivedLogicalConnectives

<a id="entry-presentation_wasm_logic_capability_discrete_mathematics_introduce_derived_logical_connectives_api_logic_session_introduce_derived_logical_connectives"></a>
<a id="placement-placement.wasm.wasm_module.module_introducederivedlogicalconnectives.83816a1b06a4"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
introduceDerivedLogicalConnectives(input_expression: Expression): Expression
```

Recognise the exact canonical definitions of implication, equivalence, and exclusive-or inside an and/or/not formula and replace each match with the derived connective, but only where the replacement is strictly smaller. It is a local structural compressor: a formula merely equivalent to a definition, without matching it, is left unchanged.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_introducederivedlogicalconnectives.1178bb7be801"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.introduceDerivedLogicalConnectives</code></p>

```typescript signature
introduceDerivedLogicalConnectives(value: ExpressionLike): Expression
```

<a id="placement-placement.wasm.wasm_class.context_introducederivedlogicalconnectives.b3bbbe9c8c71"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.introduceDerivedLogicalConnectives</code></p>

```typescript signature
introduceDerivedLogicalConnectives(input_expression: Expression): Expression
```

<a id="placement-placement.wasm.javascript_facade.symifacade_introducederivedlogicalconnectives.d87c58b06818"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.introduceDerivedLogicalConnectives</code></p>

```typescript signature
introduceDerivedLogicalConnectives(value: ExpressionLike): Expression
```

</details>

## introduceDerivedLogicalConnectives

<a id="entry-presentation_wasm_logic_capability_discrete_mathematics_introduce_derived_logical_connectives_api_expression_operations_expression_introduce_derived_logical_connectives"></a>
<a id="placement-placement.wasm.javascript_facade.expression_introducederivedlogicalconnectives.d61df7a5125f"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
introduceDerivedLogicalConnectives(): Expression
```

Recognise the exact canonical definitions of implication, equivalence, and exclusive-or inside this and/or/not formula and replace each match with the derived connective, but only where the replacement is strictly smaller. It is a local structural compressor: a formula merely equivalent to a definition, without matching it, is left unchanged.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_introducederivedlogicalconnectives.174398edf818"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.introduceDerivedLogicalConnectives</code></p>

```typescript signature
introduceDerivedLogicalConnectives(): Expression
```

</details>

## isMember

<a id="entry-presentation_wasm_combinatorics_capability_discrete_mathematics_is_member_api_sets_session_is_member"></a>
<a id="placement-placement.wasm.wasm_module.module_ismember.1e1e670a4cc3"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
isMember(element: Expression, set: Expression): boolean | undefined
```

Three-valued membership: `True` only on structural proof, `False` only on a structural counterexample, `None` otherwise. Covers \(\varnothing\), \(\mathbb{R}\), finite sets, intervals, unions, intersections, complements.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_ismember.c95641df7e1f"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.isMember</code></p>

```typescript signature
isMember(element: Expression, set: Expression): boolean | undefined
```

</details>

## isPrime

<a id="entry-presentation_wasm_number_theory_capability_discrete_mathematics_is_prime_api_session_is_prime"></a>
<a id="placement-placement.wasm.wasm_module.module_isprime.2c60d7745885"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
isPrime(n: Expression): boolean | undefined
```

Deterministic primality verdict; `None` when the input is outside the classifier's domain (e.g. not a natural number \(\geq 0\) representation it handles).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_isprime.8164fbb41a14"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.isPrime</code></p>

```typescript signature
isPrime(n: Expression): boolean | undefined
```

</details>

## isPrime

<a id="entry-presentation_wasm_number_theory_capability_discrete_mathematics_is_prime_api_expression_is_prime"></a>
<a id="placement-placement.wasm.javascript_facade.expression_isprime.988dd0cf28d7"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isPrime(): boolean | null
```

Whether the expression is known to be prime.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_isprime.bea4c3dd89fc"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.isPrime</code></p>

```typescript signature
isPrime(): boolean | undefined
```

</details>

## isSubset

<a id="entry-presentation_wasm_sets_capability_discrete_mathematics_is_subset_api_sets_session_is_subset"></a>
<a id="placement-placement.wasm.wasm_module.module_issubset.895b73859022"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
isSubset(set_a: Expression, set_b: Expression): boolean | undefined
```

Three-valued subset query: \(\varnothing \subseteq\) anything, structural equality, finite-set element checks, interval-in-interval endpoint tests; `None` otherwise.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_issubset.f566fef15352"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.isSubset</code></p>

```typescript signature
isSubset(set_a: Expression, set_b: Expression): boolean | undefined
```

</details>

## jacobiSymbol

<a id="entry-presentation_wasm_combinatorics_capability_discrete_mathematics_jacobi_symbol_api_session_jacobi_symbol"></a>
<a id="placement-placement.wasm.wasm_module.module_jacobisymbol.c3f360d8c1d2"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
jacobiSymbol(numerator: Expression, denominator: Expression): number
```

The Jacobi symbol \((n/d) \in \{-1, 0, 1\}\); the denominator must be a positive odd integer.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_jacobisymbol.7c5f47880345"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.jacobiSymbol</code></p>

```typescript signature
jacobiSymbol(numerator: Expression, denominator: Expression): number
```

</details>

## kroneckerSymbol

<a id="entry-presentation_wasm_combinatorics_capability_discrete_mathematics_kronecker_symbol_api_session_kronecker_symbol"></a>
<a id="placement-placement.wasm.wasm_module.module_kroneckersymbol.fe2e8066bdaf"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
kroneckerSymbol(numerator: Expression, denominator: Expression): number
```

The Kronecker extension of the Jacobi symbol to all integer denominators.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_kroneckersymbol.5fb205f9197f"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.kroneckerSymbol</code></p>

```typescript signature
kroneckerSymbol(numerator: Expression, denominator: Expression): number
```

</details>

## legendreSymbol

<a id="entry-presentation_wasm_combinatorics_capability_discrete_mathematics_legendre_symbol_api_session_legendre_symbol"></a>
<a id="placement-placement.wasm.wasm_module.module_legendresymbol.d3d4b7dcbf1d"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
legendreSymbol(numerator: Expression, prime: Expression): number
```

The Legendre symbol; the second argument must be an odd prime.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_legendresymbol.573f83890b5c"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.legendreSymbol</code></p>

```typescript signature
legendreSymbol(numerator: Expression, prime: Expression): number
```

</details>

## logicalFalse

<a id="entry-presentation_wasm_logic_capability_discrete_mathematics_logical_false_api_session_logical_false"></a>
<a id="placement-placement.wasm.wasm_module.module_logicalfalse.6aee9d3550be"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
logicalFalse(): Expression
```

The Boolean constant false (\(\bot\)).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_logicalfalse.9bc67d1ef760"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.logicalFalse</code></p>

```typescript signature
readonly logicalFalse: Expression
```

<a id="placement-placement.wasm.wasm_class.context_logicalfalse.94e8b3dd883e"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.logicalFalse</code></p>

```typescript signature
logicalFalse(): Expression
```

<a id="placement-placement.wasm.javascript_facade.symifacade_logicalfalse.2e267b20bbb1"></a>
<p class="symi-entry-owner">SymiFacade property: <code>SymiFacade.logicalFalse</code></p>

```typescript signature
readonly logicalFalse: Expression
```

</details>

## logicalTrue

<a id="entry-presentation_wasm_logic_capability_discrete_mathematics_logical_true_api_session_logical_true"></a>
<a id="placement-placement.wasm.wasm_module.module_logicaltrue.8c894af8e323"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
logicalTrue(): Expression
```

The Boolean constant true (\(\top\)).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_logicaltrue.9727eb1248c1"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.logicalTrue</code></p>

```typescript signature
readonly logicalTrue: Expression
```

<a id="placement-placement.wasm.wasm_class.context_logicaltrue.e8dfff3d592b"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.logicalTrue</code></p>

```typescript signature
logicalTrue(): Expression
```

<a id="placement-placement.wasm.javascript_facade.symifacade_logicaltrue.42cc56407238"></a>
<p class="symi-entry-owner">SymiFacade property: <code>SymiFacade.logicalTrue</code></p>

```typescript signature
readonly logicalTrue: Expression
```

</details>

## minimizeLogical

<a id="entry-presentation_wasm_logic_capability_discrete_mathematics_minimize_logical_api_logic_session_minimize_logical"></a>
<a id="placement-placement.wasm.wasm_module.module_minimizelogical.b1927e04de80"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
minimizeLogical(input_expression: Expression): Expression
```

The smaller of the minimum sum-of-products and product-of-sums two-level forms. Within a practical atom bound this is the exact Quine–McCluskey minimum (prime implicants, essential extraction, and Petrick's method on the residual chart); above it, an Espresso-style heuristic returns a good — not provably minimal — cover.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_minimizelogical.e8634cea64ca"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.minimizeLogical</code></p>

```typescript signature
minimizeLogical(input_expression: Expression): Expression
```

</details>

## minimizeLogical

<a id="entry-presentation_wasm_logic_capability_discrete_mathematics_minimize_logical_api_expression_operations_expression_minimize_logical"></a>
<a id="placement-placement.wasm.wasm_class.expression_minimizelogical.1eeedfe07389"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
minimizeLogical(): Expression
```

The smaller of the minimum sum-of-products and product-of-sums two-level forms. Within a practical atom bound this is the exact Quine–McCluskey minimum (prime implicants, essential extraction, and Petrick's method on the residual chart); above it, an Espresso-style heuristic returns a good — not provably minimal — cover.

## mobius

<a id="entry-presentation_wasm_number_theory_capability_discrete_mathematics_mobius_api_session_mobius"></a>
<a id="placement-placement.wasm.wasm_module.module_mobius.eb52d1e05d93"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
mobius(n: Expression): Expression
```

Möbius \(\mu(n) \in \{-1, 0, 1\}\); requires a positive integer.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_mobius.d9f853017575"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.mobius</code></p>

```typescript signature
mobius(n: Expression): Expression
```

</details>

## modularInverse

<a id="entry-presentation_wasm_combinatorics_capability_discrete_mathematics_modular_inverse_api_number_theory_session_modular_inverse"></a>
<a id="placement-placement.wasm.wasm_module.module_modularinverse.89b1fb456696"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
modularInverse(value: Expression, modulus: Expression): Expression
```

Multiplicative inverse of `value` modulo `modulus`; errors when \(\operatorname{gcd}(\operatorname{value}, \operatorname{modulus}) \ne 1\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_modularinverse.58167e0fe801"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.modularInverse</code></p>

```typescript signature
modularInverse(value: Expression, modulus: Expression): Expression
```

</details>

## modularPower

<a id="entry-presentation_wasm_combinatorics_capability_discrete_mathematics_modular_power_api_number_theory_session_modular_power"></a>
<a id="placement-placement.wasm.wasm_module.module_modularpower.c5fc06c4c577"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
modularPower(
    base: Expression,
    exponent: Expression,
    modulus: Expression,
): Expression
```

`base^exponent mod modulus` by square-and-multiply; requires positive modulus and non-negative exponent.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_modularpower.f0c98dd7bb85"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.modularPower</code></p>

```typescript signature
modularPower(
    base: Expression,
    exponent: Expression,
    modulus: Expression,
): Expression
```

</details>

## multinomial

<a id="entry-presentation_wasm_combinatorics_capability_discrete_mathematics_multinomial_api_number_theory_session_multinomial"></a>
<a id="placement-placement.wasm.wasm_module.module_multinomial.9170c8108eb5"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
multinomial(parts: Expression[]): Expression
```

Multinomial coefficient \((\sum \operatorname{parts})! / \prod (\operatorname{part}_i!)\); parts must be non-negative integers.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_multinomial.2a15ecdfee92"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.multinomial</code></p>

```typescript signature
multinomial(parts: Expression[]): Expression
```

</details>

## multiplicity

<a id="entry-presentation_wasm_number_theory_capability_discrete_mathematics_multiplicity_api_results_primefactor_multiplicity"></a>
<a id="placement-placement.wasm.wasm_class.primefactor_multiplicity.97bc281ba687"></a>
<p class="symi-entry-owner">PrimeFactor property</p>

```typescript signature
readonly multiplicity: number
```

The exponent the prime carries in the factorization.

## multiplicity

<a id="entry-presentation_wasm_number_theory_capability_discrete_mathematics_multiplicity_api_results_rootmultiplicity_multiplicity"></a>
<a id="placement-placement.wasm.wasm_class.rootmultiplicity_multiplicity.38126e35ea48"></a>
<p class="symi-entry-owner">RootMultiplicity property</p>

```typescript signature
readonly multiplicity: number
```

The multiplicity of the root.

## partitionCount

<a id="entry-presentation_wasm_combinatorics_capability_discrete_mathematics_partition_count_api_session_partition_count"></a>
<a id="placement-placement.wasm.wasm_module.module_partitioncount.626fcc1e58d6"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
partitionCount(n: Expression): Expression
```

Number of integer partitions p(n).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_partitioncount.adf34104cda8"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.partitionCount</code></p>

```typescript signature
partitionCount(n: Expression): Expression
```

</details>

## pellSolutions

<a id="entry-presentation_wasm_number_theory_capability_discrete_mathematics_pell_solutions_api_number_theory_session_pell_solutions"></a>
<a id="placement-placement.wasm.wasm_module.module_pellsolutions.746cfa175fdd"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
pellSolutions(radicand: Expression, count: number): Expression[]
```

The first `count` positive solutions of \(x^2 - D y^2 = 1\), materialised from the fundamental solution by the Pell recurrence and returned as a flat list \([x_1, y_1, x_2, y_2, \ldots]\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_pellsolutions.91be0218332c"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.pellSolutions</code></p>

```typescript signature
pellSolutions(radicand: Expression, count: number): Expression[]
```

</details>

## periodicTerms

<a id="entry-presentation_wasm_combinatorics_capability_discrete_mathematics_periodic_terms_api_results_quadraticcontinuedfractionexpansion_periodic_terms"></a>
<a id="placement-placement.wasm.wasm_class.quadraticcontinuedfractionexpansion_periodicterms.c7ae5216de14"></a>
<p class="symi-entry-owner">QuadraticContinuedFractionExpansion property</p>

```typescript signature
readonly periodicTerms: Expression[]
```

The repeating terms of the expansion.

## prime

<a id="entry-presentation_wasm_number_theory_capability_discrete_mathematics_prime_api_results_primefactor_prime"></a>
<a id="placement-placement.wasm.wasm_class.primefactor_prime.9007ad578131"></a>
<p class="symi-entry-owner">PrimeFactor property</p>

```typescript signature
readonly prime: Expression
```

The prime.

## realLine

<a id="entry-presentation_wasm_combinatorics_capability_discrete_mathematics_real_line_api_session_real_line"></a>
<a id="placement-placement.wasm.wasm_module.module_realline.d150784a3d9d"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
realLine(): Expression
```

The set \(\mathbb{R}\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_realline.04c11e555295"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.realLine</code></p>

```typescript signature
readonly realLine: Expression
```

<a id="placement-placement.wasm.wasm_class.context_realline.f9ddcef2c243"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.realLine</code></p>

```typescript signature
realLine(): Expression
```

<a id="placement-placement.wasm.javascript_facade.symifacade_realline.84c2087be448"></a>
<p class="symi-entry-owner">SymiFacade property: <code>SymiFacade.realLine</code></p>

```typescript signature
readonly realLine: Expression
```

</details>

## risingFactorial

<a id="entry-presentation_wasm_combinatorics_capability_discrete_mathematics_rising_factorial_api_session_rising_factorial"></a>
<a id="placement-placement.wasm.wasm_module.module_risingfactorial.5558264a15ca"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
risingFactorial(base: Expression, length: Expression): Expression
```

\(\operatorname{base}(\operatorname{base}+1)\cdots(\operatorname{base}+\operatorname{length}-1)\) (the Pochhammer symbol on integers).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_risingfactorial.4d89d9f355ee"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.risingFactorial</code></p>

```typescript signature
risingFactorial(base: Expression, length: Expression): Expression
```

</details>

## setComplement

<a id="entry-presentation_wasm_sets_capability_discrete_mathematics_set_complement_api_sets_session_set_complement"></a>
<a id="placement-placement.wasm.wasm_module.module_setcomplement.2a16985668e3"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
setComplement(set_a: Expression, set_b: Expression): Expression
```

The relative complement \(a \setminus b\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_setcomplement.0e0d00ff962c"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.setComplement</code></p>

```typescript signature
setComplement(set_a: Expression, set_b: Expression): Expression
```

</details>

## setIntersection

<a id="entry-presentation_wasm_sets_capability_discrete_mathematics_set_intersection_api_sets_session_set_intersection"></a>
<a id="placement-placement.wasm.wasm_module.module_setintersection.2a72a9ce82c8"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
setIntersection(set_a: Expression, set_b: Expression): Expression
```

Intersection, computed eagerly where the structural rules allow (interval pairs, finite-set membership filtering; \(\mathbb{R}\) drops, \(\varnothing\) absorbs); otherwise the structural `set_intersection` node.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_setintersection.007766d08e05"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.setIntersection</code></p>

```typescript signature
setIntersection(set_a: Expression, set_b: Expression): Expression
```

</details>

## setUnion

<a id="entry-presentation_wasm_sets_capability_discrete_mathematics_set_union_api_sets_session_set_union"></a>
<a id="placement-placement.wasm.wasm_module.module_setunion.5d97c0bd64f6"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
setUnion(set_a: Expression, set_b: Expression): Expression
```

Union, computed eagerly where the structural rules allow (overlapping or touching interval pairs merge; nested unions splice, \(\varnothing\) drops, \(\mathbb{R}\) absorbs); otherwise the structural `set_union` node.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_setunion.107649293a43"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.setUnion</code></p>

```typescript signature
setUnion(set_a: Expression, set_b: Expression): Expression
```

</details>

## simplifyLogical

<a id="entry-presentation_wasm_logic_capability_discrete_mathematics_simplify_logical_api_logic_session_simplify_logical"></a>
<a id="placement-placement.wasm.wasm_module.module_simplifylogical.c91f7d3e4b36"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
simplifyLogical(input_expression: Expression): Expression
```

Return whichever of the original form, the disjunctive and conjunctive normal forms, and the two minimal two-level forms has the smallest weighted size.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_simplifylogical.d5a84750401d"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.simplifyLogical</code></p>

```typescript signature
simplifyLogical(value: ExpressionLike): Expression
```

<a id="placement-placement.wasm.wasm_class.context_simplifylogical.0449b898501d"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.simplifyLogical</code></p>

```typescript signature
simplifyLogical(input_expression: Expression): Expression
```

<a id="placement-placement.wasm.javascript_facade.symifacade_simplifylogical.7e8c3741add9"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.simplifyLogical</code></p>

```typescript signature
simplifyLogical(value: ExpressionLike): Expression
```

</details>

## simplifyLogical

<a id="entry-presentation_wasm_logic_capability_discrete_mathematics_simplify_logical_api_expression_operations_expression_simplify_logical"></a>
<a id="placement-placement.wasm.javascript_facade.expression_simplifylogical.dce05b71d665"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
simplifyLogical(): Expression
```

Return whichever of the original form, the disjunctive and conjunctive normal forms, and the two minimal two-level forms has the smallest weighted size.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_simplifylogical.b150d8671266"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.simplifyLogical</code></p>

```typescript signature
simplifyLogical(): Expression
```

</details>

## solveLinearDiophantine

<a id="entry-presentation_wasm_combinatorics_capability_discrete_mathematics_solve_linear_diophantine_api_number_theory_session_solve_linear_diophantine"></a>
<a id="placement-placement.wasm.wasm_module.module_solvelineardiophantine.c44d14859433"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
solveLinearDiophantine(
    coefficients: Expression[],
    constant: Expression,
): Expression[]
```

General integer solution of \(a_1 x_1 + \ldots + a_n x_n = c\), returned as the parametric coordinates — one expression per unknown, affine in fresh integer parameter symbols (`diophantine_parameter_k`) shared across the coordinates so that choosing any integers for the parameters yields a solution tuple. The list is empty when the equation has no integer solution (\(\gcd(a_i) \nmid c\)).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_solvelineardiophantine.a71e6e2e49cd"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.solveLinearDiophantine</code></p>

```typescript signature
solveLinearDiophantine(
    coefficients: Expression[],
    constant: Expression,
): Expression[]
```

</details>

## solveLinearDiophantineSystem

<a id="entry-presentation_wasm_combinatorics_capability_discrete_mathematics_solve_linear_diophantine_system_api_number_theory_session_solve_linear_diophantine_system"></a>
<a id="placement-placement.wasm.wasm_module.module_solvelineardiophantinesystem.f6937abefeef"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
solveLinearDiophantineSystem(
    coefficient_matrix: Matrix,
    constants: Expression[],
): Expression[]
```

General integer solution of the rectangular system \(A x = b\), returned as one parametric coordinate expression per column of `A`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_solvelineardiophantinesystem.8fa55d464929"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.solveLinearDiophantineSystem</code></p>

```typescript signature
solveLinearDiophantineSystem(
    coefficient_matrix: Matrix,
    constants: Expression[],
): Expression[]
```

</details>

## solveNegativePell

<a id="entry-presentation_wasm_number_theory_capability_discrete_mathematics_solve_negative_pell_api_number_theory_session_solve_negative_pell"></a>
<a id="placement-placement.wasm.wasm_module.module_solvenegativepell.de4fc4dc84c0"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
solveNegativePell(radicand: Expression): Expression[]
```

Fundamental solution `[x, y]` of the negative-Pell equation \(x^2 - D y^2 = -1\) when it is solvable (exactly when the continued fraction of \(\sqrt{D}\) has odd period), and an empty list otherwise.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_solvenegativepell.eaf011c3b227"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.solveNegativePell</code></p>

```typescript signature
solveNegativePell(radicand: Expression): Expression[]
```

</details>

## solvePell

<a id="entry-presentation_wasm_number_theory_capability_discrete_mathematics_solve_pell_api_number_theory_session_solve_pell"></a>
<a id="placement-placement.wasm.wasm_module.module_solvepell.e3e4a8d13447"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
solvePell(radicand: Expression): Expression[]
```

Fundamental solution `[x, y]` of \(x^2 - D y^2 = 1\) for a positive non-square integer `D`, the smallest positive solution from which all others are generated by the recurrence \(x_{k+1} = x_1 x_k + D y_1 y_k\), \(y_{k+1} = x_1 y_k + y_1 x_k\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_solvepell.259181184189"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.solvePell</code></p>

```typescript signature
solvePell(radicand: Expression): Expression[]
```

</details>

## stirlingFirstSigned

<a id="entry-presentation_wasm_combinatorics_capability_discrete_mathematics_stirling_first_signed_api_session_stirling_first_signed"></a>
<a id="placement-placement.wasm.wasm_module.module_stirlingfirstsigned.5f73261d260b"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
stirlingFirstSigned(n: Expression, k: Expression): Expression
```

Signed Stirling number of the first kind s(n, k).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_stirlingfirstsigned.08afbe99e971"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.stirlingFirstSigned</code></p>

```typescript signature
stirlingFirstSigned(n: Expression, k: Expression): Expression
```

</details>

## stirlingSecond

<a id="entry-presentation_wasm_combinatorics_capability_discrete_mathematics_stirling_second_api_session_stirling_second"></a>
<a id="placement-placement.wasm.wasm_module.module_stirlingsecond.854182aab42c"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
stirlingSecond(n: Expression, k: Expression): Expression
```

Stirling number of the second kind S(n, k).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_stirlingsecond.3c96654ef70b"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.stirlingSecond</code></p>

```typescript signature
stirlingSecond(n: Expression, k: Expression): Expression
```

</details>

## abs

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_abs_api_session_abs"></a>
<a id="placement-placement.wasm.wasm_module.module_abs.3346979e2e3e"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
abs(x: Expression): Expression
```

Absolute value of `x`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_abs.8becf99ffac2"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.abs</code></p>

```typescript signature
abs(x: Expression): Expression
```

</details>

## arccos

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_arccos_api_session_arccos"></a>
<a id="placement-placement.wasm.wasm_module.module_arccos.64eb38298d92"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
arccos(x: Expression): Expression
```

Inverse cosine of `x`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_arccos.6f986d1187f1"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.arccos</code></p>

```typescript signature
arccos(x: Expression): Expression
```

</details>

## arccosh

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_arccosh_api_session_arccosh"></a>
<a id="placement-placement.wasm.wasm_module.module_arccosh.c9cc3fd80813"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
arccosh(x: Expression): Expression
```

Inverse hyperbolic cosine of `x`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_arccosh.cb2cbcc3f028"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.arccosh</code></p>

```typescript signature
arccosh(x: Expression): Expression
```

</details>

## arccot

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_arccot_api_session_arccot"></a>
<a id="placement-placement.wasm.wasm_module.module_arccot.d67736f7d772"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
arccot(x: Expression): Expression
```

Inverse cotangent of `x`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_arccot.d6212e82ac65"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.arccot</code></p>

```typescript signature
arccot(x: Expression): Expression
```

</details>

## arccoth

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_arccoth_api_session_arccoth"></a>
<a id="placement-placement.wasm.wasm_module.module_arccoth.53ec83d35724"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
arccoth(x: Expression): Expression
```

Inverse hyperbolic cotangent of `x`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_arccoth.ccfaaed98446"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.arccoth</code></p>

```typescript signature
arccoth(x: Expression): Expression
```

</details>

## arccsc

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_arccsc_api_session_arccsc"></a>
<a id="placement-placement.wasm.wasm_module.module_arccsc.963a346a021c"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
arccsc(x: Expression): Expression
```

Inverse cosecant of `x`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_arccsc.42ee39a70f76"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.arccsc</code></p>

```typescript signature
arccsc(x: Expression): Expression
```

</details>

## arccsch

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_arccsch_api_session_arccsch"></a>
<a id="placement-placement.wasm.wasm_module.module_arccsch.24e8a1e67daf"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
arccsch(x: Expression): Expression
```

Inverse hyperbolic cosecant of `x`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_arccsch.637eb86bfbe6"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.arccsch</code></p>

```typescript signature
arccsch(x: Expression): Expression
```

</details>

## arcsec

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_arcsec_api_session_arcsec"></a>
<a id="placement-placement.wasm.wasm_module.module_arcsec.c8a0041cc409"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
arcsec(x: Expression): Expression
```

Inverse secant of `x`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_arcsec.3ca9b48826c7"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.arcsec</code></p>

```typescript signature
arcsec(x: Expression): Expression
```

</details>

## arcsech

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_arcsech_api_session_arcsech"></a>
<a id="placement-placement.wasm.wasm_module.module_arcsech.47496bc1390d"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
arcsech(x: Expression): Expression
```

Inverse hyperbolic secant of `x`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_arcsech.4b7994e5ad8d"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.arcsech</code></p>

```typescript signature
arcsech(x: Expression): Expression
```

</details>

## arcsin

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_arcsin_api_session_arcsin"></a>
<a id="placement-placement.wasm.wasm_module.module_arcsin.e6003a8e88b5"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
arcsin(x: Expression): Expression
```

Inverse sine of `x`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_arcsin.b32e227f2b04"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.arcsin</code></p>

```typescript signature
arcsin(x: Expression): Expression
```

</details>

## arcsinh

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_arcsinh_api_session_arcsinh"></a>
<a id="placement-placement.wasm.wasm_module.module_arcsinh.93841ccf5c75"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
arcsinh(x: Expression): Expression
```

Inverse hyperbolic sine of `x`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_arcsinh.fa148850e60c"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.arcsinh</code></p>

```typescript signature
arcsinh(x: Expression): Expression
```

</details>

## arctan

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_arctan_api_session_arctan"></a>
<a id="placement-placement.wasm.wasm_module.module_arctan.94640543b210"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
arctan(x: Expression): Expression
```

Inverse tangent of `x`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_arctan.7dadd625290a"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.arctan</code></p>

```typescript signature
arctan(x: Expression): Expression
```

</details>

## arctanh

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_arctanh_api_session_arctanh"></a>
<a id="placement-placement.wasm.wasm_module.module_arctanh.9edfb410a017"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
arctanh(x: Expression): Expression
```

Inverse hyperbolic tangent of `x`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_arctanh.446dade022fb"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.arctanh</code></p>

```typescript signature
arctanh(x: Expression): Expression
```

</details>

## binomial

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_binomial_api_session_binomial"></a>
<a id="placement-placement.wasm.wasm_module.module_binomial.730ef71fff39"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
binomial(n: Expression, k: Expression): Expression
```

Binomial coefficient C(n, k).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_binomial.bff558909372"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.binomial</code></p>

```typescript signature
binomial(n: Expression, k: Expression): Expression
```

</details>

## ceiling

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_ceiling_api_session_ceiling"></a>
<a id="placement-placement.wasm.wasm_module.module_ceiling.ea4214d28a60"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
ceiling(x: Expression): Expression
```

Least integer greater than or equal to `x`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_ceiling.b28033129d91"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.ceiling</code></p>

```typescript signature
ceiling(x: Expression): Expression
```

</details>

## conjugate

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_conjugate_api_session_conjugate"></a>
<a id="placement-placement.wasm.wasm_module.module_conjugate.6c7c642fd60f"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
conjugate(x: Expression): Expression
```

Complex conjugate.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_conjugate.adbaa68a1d9c"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.conjugate</code></p>

```typescript signature
conjugate(x: Expression): Expression
```

</details>

## cos

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_cos_api_session_cos"></a>
<a id="placement-placement.wasm.wasm_module.module_cos.e22dd1cddf4b"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
cos(x: Expression): Expression
```

Cosine of `x`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_cos.127007f1d3bb"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.cos</code></p>

```typescript signature
cos(value: ExpressionLike): Expression
```

<a id="placement-placement.wasm.wasm_class.context_cos.8e8798a224e7"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.cos</code></p>

```typescript signature
cos(x: Expression): Expression
```

<a id="placement-placement.wasm.javascript_facade.symifacade_cos.08b219c1578f"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.cos</code></p>

```typescript signature
cos(value: ExpressionLike): Expression
```

</details>

## cos

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_cos_api_expression_cos"></a>
<a id="placement-placement.wasm.javascript_facade.expression_cos.9c05351df5a5"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
cos(): Expression
```

Public method placement for cos.

## cosh

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_cosh_api_session_cosh"></a>
<a id="placement-placement.wasm.wasm_module.module_cosh.7a957d886cb2"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
cosh(x: Expression): Expression
```

Hyperbolic cosine of `x`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_cosh.0d0d2c183bbe"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.cosh</code></p>

```typescript signature
cosh(x: Expression): Expression
```

</details>

## cot

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_cot_api_session_cot"></a>
<a id="placement-placement.wasm.wasm_module.module_cot.5f368ffa03f9"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
cot(x: Expression): Expression
```

Cotangent of `x`, the reciprocal of the tangent.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_cot.38747a13906c"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.cot</code></p>

```typescript signature
cot(x: Expression): Expression
```

</details>

## coth

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_coth_api_session_coth"></a>
<a id="placement-placement.wasm.wasm_module.module_coth.1dcf0ef2fba2"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
coth(x: Expression): Expression
```

Hyperbolic cotangent of `x`, the reciprocal of the hyperbolic tangent.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_coth.9ca2309ec1d6"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.coth</code></p>

```typescript signature
coth(x: Expression): Expression
```

</details>

## csc

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_csc_api_session_csc"></a>
<a id="placement-placement.wasm.wasm_module.module_csc.7065ea694039"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
csc(x: Expression): Expression
```

Cosecant of `x`, the reciprocal of the sine.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_csc.b24c53b2bf57"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.csc</code></p>

```typescript signature
csc(x: Expression): Expression
```

</details>

## csch

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_csch_api_session_csch"></a>
<a id="placement-placement.wasm.wasm_module.module_csch.4d44335294b8"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
csch(x: Expression): Expression
```

Hyperbolic cosecant of `x`, the reciprocal of the hyperbolic sine.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_csch.f2d967560733"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.csch</code></p>

```typescript signature
csch(x: Expression): Expression
```

</details>

## equal

<a id="entry-presentation_wasm_relations_capability_elementary_functions_equal_api_session_equal"></a>
<a id="placement-placement.wasm.wasm_module.module_equal.8d132f8ca4bd"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
equal(left: Expression, right: Expression): Expression
```

Build the relation `left = right` without deciding its truth.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_equal.2dce7bc44567"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.equal</code></p>

```typescript signature
equal(left: Expression, right: Expression): Expression
```

</details>

## exp

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_exp_api_session_exp"></a>
<a id="placement-placement.wasm.wasm_module.module_exp.8b7300d911be"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
exp(x: Expression): Expression
```

The natural exponential.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_exp.2ab79692a3cc"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.exp</code></p>

```typescript signature
exp(value: ExpressionLike): Expression
```

<a id="placement-placement.wasm.wasm_class.context_exp.560a294e8805"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.exp</code></p>

```typescript signature
exp(x: Expression): Expression
```

<a id="placement-placement.wasm.javascript_facade.symifacade_exp.c26368174598"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.exp</code></p>

```typescript signature
exp(value: ExpressionLike): Expression
```

</details>

## exp

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_exp_api_expression_exp"></a>
<a id="placement-placement.wasm.javascript_facade.expression_exp.11a12106d9fb"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
exp(): Expression
```

The natural exponential.

## factorial

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_factorial_api_session_factorial"></a>
<a id="placement-placement.wasm.wasm_module.module_factorial.5a0581f6a74d"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
factorial(x: Expression): Expression
```

Factorial of `x`, evaluated exactly on nonnegative integers.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_factorial.9cd8cb495318"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.factorial</code></p>

```typescript signature
factorial(x: Expression): Expression
```

</details>

## floor

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_floor_api_session_floor"></a>
<a id="placement-placement.wasm.wasm_module.module_floor.44548369db27"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
floor(x: Expression): Expression
```

Greatest integer less than or equal to `x`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_floor.106fcc90d473"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.floor</code></p>

```typescript signature
floor(x: Expression): Expression
```

</details>

## greaterThan

<a id="entry-presentation_wasm_relations_capability_elementary_functions_greater_than_api_session_greater_than"></a>
<a id="placement-placement.wasm.wasm_module.module_greaterthan.3093032cb367"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
greaterThan(left: Expression, right: Expression): Expression
```

Build the relation `left > right` without deciding its truth.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_greaterthan.f224f387e805"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.greaterThan</code></p>

```typescript signature
greaterThan(left: Expression, right: Expression): Expression
```

</details>

## greaterThanOrEqual

<a id="entry-presentation_wasm_relations_capability_elementary_functions_greater_than_or_equal_api_session_greater_than_or_equal"></a>
<a id="placement-placement.wasm.wasm_module.module_greaterthanorequal.50b0a6698716"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
greaterThanOrEqual(left: Expression, right: Expression): Expression
```

Build the relation `left >= right` without deciding its truth.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_greaterthanorequal.ec8578b13d6e"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.greaterThanOrEqual</code></p>

```typescript signature
greaterThanOrEqual(left: Expression, right: Expression): Expression
```

</details>

## lessThan

<a id="entry-presentation_wasm_relations_capability_elementary_functions_less_than_api_session_less_than"></a>
<a id="placement-placement.wasm.wasm_module.module_lessthan.bc55302e0173"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
lessThan(left: Expression, right: Expression): Expression
```

Build the relation `left < right` without deciding its truth.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_lessthan.893ab0968b8e"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.lessThan</code></p>

```typescript signature
lessThan(left: ExpressionLike, right: ExpressionLike): Expression
```

<a id="placement-placement.wasm.wasm_class.context_lessthan.5f7e2595fdc8"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.lessThan</code></p>

```typescript signature
lessThan(left: Expression, right: Expression): Expression
```

<a id="placement-placement.wasm.javascript_facade.symifacade_lessthan.8b815324871d"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.lessThan</code></p>

```typescript signature
lessThan(left: ExpressionLike, right: ExpressionLike): Expression
```

</details>

## lessThan

<a id="entry-presentation_wasm_relations_capability_elementary_functions_less_than_api_expression_operations_expression_less_than"></a>
<a id="placement-placement.wasm.javascript_facade.expression_lessthan.556075d96973"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
lessThan(other: ExpressionLike): Expression
```

Public method placement for lessThan.

## lessThanOrEqual

<a id="entry-presentation_wasm_relations_capability_elementary_functions_less_than_or_equal_api_session_less_than_or_equal"></a>
<a id="placement-placement.wasm.wasm_module.module_lessthanorequal.c97b335533ab"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
lessThanOrEqual(left: Expression, right: Expression): Expression
```

Build the relation `left <= right` without deciding its truth.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_lessthanorequal.14b771192996"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.lessThanOrEqual</code></p>

```typescript signature
lessThanOrEqual(left: Expression, right: Expression): Expression
```

</details>

## log

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_log_api_session_log"></a>
<a id="placement-placement.wasm.wasm_module.module_log.38cd13720085"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
log(x: Expression, base?: Expression | null): Expression
```

Natural logarithm; with `base` given, `log(x)/log(base)`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_log.70c0987461a7"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.log</code></p>

```typescript signature
log(x: Expression, base?: Expression | null): Expression
```

</details>

## max

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_max_api_session_max"></a>
<a id="placement-placement.wasm.wasm_module.module_max.9ad2a66d39c5"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
max(arguments: Expression[]): Expression
```

Maximum of the arguments (variadic in Python; a JS array in WASM).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_max.c8df78797a62"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.max</code></p>

```typescript signature
max(arguments: Expression[]): Expression
```

</details>

## min

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_min_api_session_min"></a>
<a id="placement-placement.wasm.wasm_module.module_min.079bca1de077"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
min(arguments: Expression[]): Expression
```

Minimum of the arguments (variadic in Python; a JS array in WASM).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_min.4481c194c547"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.min</code></p>

```typescript signature
min(arguments: Expression[]): Expression
```

</details>

## notEqual

<a id="entry-presentation_wasm_relations_capability_elementary_functions_not_equal_api_session_not_equal"></a>
<a id="placement-placement.wasm.wasm_module.module_notequal.e71bd58fd421"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
notEqual(left: Expression, right: Expression): Expression
```

Build the relation `left != right` without deciding its truth.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_notequal.e274c6ff26f1"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.notEqual</code></p>

```typescript signature
notEqual(left: Expression, right: Expression): Expression
```

</details>

## root

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_root_api_session_root"></a>
<a id="placement-placement.wasm.wasm_module.module_root.305a53c2acc8"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
root(x: Expression, n: Expression): Expression
```

Principal n-th root, stored as `x^(1/n)`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_root.0a936cd66ba7"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.root</code></p>

```typescript signature
root(x: Expression, n: Expression): Expression
```

</details>

## root

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_root_api_results_rootmultiplicity_root"></a>
<a id="placement-placement.wasm.wasm_class.rootmultiplicity_root.27ae91435854"></a>
<p class="symi-entry-owner">RootMultiplicity property</p>

```typescript signature
readonly root: Expression
```

Principal n-th root, stored as `x^(1/n)`.

## sec

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_sec_api_session_sec"></a>
<a id="placement-placement.wasm.wasm_module.module_sec.4d68af5f0033"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
sec(x: Expression): Expression
```

Secant of `x`, the reciprocal of the cosine.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_sec.84f267f90796"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.sec</code></p>

```typescript signature
sec(x: Expression): Expression
```

</details>

## sech

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_sech_api_session_sech"></a>
<a id="placement-placement.wasm.wasm_module.module_sech.6fb6206e0865"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
sech(x: Expression): Expression
```

Hyperbolic secant of `x`, the reciprocal of the hyperbolic cosine.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_sech.b5b9ba43e0b5"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.sech</code></p>

```typescript signature
sech(x: Expression): Expression
```

</details>

## sin

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_sin_api_session_sin"></a>
<a id="placement-placement.wasm.wasm_module.module_sin.6bd3d48fdeac"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
sin(x: Expression): Expression
```

Sine of `x`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_sin.e186cd596931"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.sin</code></p>

```typescript signature
sin(value: ExpressionLike): Expression
```

<a id="placement-placement.wasm.wasm_class.context_sin.5b5f3d82ecc5"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.sin</code></p>

```typescript signature
sin(x: Expression): Expression
```

<a id="placement-placement.wasm.javascript_facade.symifacade_sin.64ed29b5aabf"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.sin</code></p>

```typescript signature
sin(value: ExpressionLike): Expression
```

</details>

## sin

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_sin_api_expression_sin"></a>
<a id="placement-placement.wasm.javascript_facade.expression_sin.8da54b319d95"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
sin(): Expression
```

Public method placement for sin.

## sinh

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_sinh_api_session_sinh"></a>
<a id="placement-placement.wasm.wasm_module.module_sinh.1ff5a391d068"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
sinh(x: Expression): Expression
```

Hyperbolic sine of `x`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_sinh.5db01c5a733c"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.sinh</code></p>

```typescript signature
sinh(x: Expression): Expression
```

</details>

## sqrt

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_sqrt_api_session_sqrt"></a>
<a id="placement-placement.wasm.wasm_module.module_sqrt.31de3cfa5500"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
sqrt(x: Expression): Expression
```

Principal square root, stored as `x^(1/2)`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_sqrt.2a25fe213571"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.sqrt</code></p>

```typescript signature
sqrt(value: ExpressionLike): Expression
```

<a id="placement-placement.wasm.wasm_class.context_sqrt.e93f423ac79b"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.sqrt</code></p>

```typescript signature
sqrt(x: Expression): Expression
```

<a id="placement-placement.wasm.javascript_facade.symifacade_sqrt.39062d897204"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.sqrt</code></p>

```typescript signature
sqrt(value: ExpressionLike): Expression
```

</details>

## sqrt

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_sqrt_api_expression_sqrt"></a>
<a id="placement-placement.wasm.javascript_facade.expression_sqrt.8adbabb8c608"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
sqrt(): Expression
```

Principal square root, stored as `x^(1/2)`.

## tan

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_tan_api_session_tan"></a>
<a id="placement-placement.wasm.wasm_module.module_tan.8842ce8669b1"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
tan(x: Expression): Expression
```

Tangent of `x`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_tan.96c4a114dc95"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.tan</code></p>

```typescript signature
tan(x: Expression): Expression
```

</details>

## tanh

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_tanh_api_session_tanh"></a>
<a id="placement-placement.wasm.wasm_module.module_tanh.efb975b6dbc0"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
tanh(x: Expression): Expression
```

Hyperbolic tangent of `x`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_tanh.fcfd055b99f5"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.tanh</code></p>

```typescript signature
tanh(x: Expression): Expression
```

</details>

## classification

<a id="entry-presentation_wasm_optimization_capability_equations_classification_api_results_criticalpoint_classification"></a>
<a id="placement-placement.wasm.wasm_class.criticalpoint_classification.978862e13473"></a>
<p class="symi-entry-owner">CriticalPoint property</p>

```typescript signature
readonly classification: string
```

The verdict string of a critical point: `"local_minimum"`, `"local_maximum"`, `"saddle_point"`, or `"inconclusive"`.

## classification

<a id="entry-presentation_wasm_optimization_capability_equations_classification_api_partial_differential_equations_partialdifferentialequationsolveresult_classification"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolveresult_classification.2086e21405ea"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolveResult property</p>

```typescript signature
readonly classification: PartialDifferentialEquationClassification | undefined
```

The exact classification the dispatcher established, when it reached one.

## classifyUnconstrained

<a id="entry-presentation_wasm_solving_capability_equations_classify_unconstrained_api_solving_session_classify_unconstrained"></a>
<a id="placement-placement.wasm.wasm_module.module_classifyunconstrained.016594913f0d"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
classifyUnconstrained(
    objective: Expression,
    variables: string[],
    point_variables: string[],
    point_values: Expression[],
): string
```

Classify one given interior point — supplied as the parallel `point_variables` / `point_values` lists — by Hessian definiteness, returning the verdict string.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_classifyunconstrained.5099f86e57ff"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.classifyUnconstrained</code></p>

```typescript signature
classifyUnconstrained(
    objective: Expression,
    variables: string[],
    point_variables: string[],
    point_values: Expression[],
): string
```

</details>

## compareRealRoots

<a id="entry-presentation_wasm_solving_capability_equations_compare_real_roots_api_solving_session_compare_real_roots"></a>
<a id="placement-placement.wasm.wasm_module.module_comparerealroots.f56fb469e237"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
compareRealRoots(
    first_expression: Expression,
    first_variable: string,
    first_index: number,
    second_expression: Expression,
    second_variable: string,
    second_index: number,
): bigint | undefined
```

Compare two real algebraic numbers exactly, each given as the `index`-th smallest real root of a univariate polynomial over the rationals. Returns `-1`, `0`, or `1` according to whether the first is less than, equal to, or greater than the second — a total order decided exactly (for example `compare_real_roots` of \(\sqrt{2}\) and \(\sqrt[3]{3}\) returns `-1`).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_comparerealroots.fb4df4838464"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.compareRealRoots</code></p>

```typescript signature
compareRealRoots(
    first_expression: Expression,
    first_variable: string,
    first_index: number,
    second_expression: Expression,
    second_variable: string,
    second_index: number,
): bigint | undefined
```

</details>

## complete

<a id="entry-presentation_wasm_solving_capability_equations_complete_api_results_optimizationoutcome_complete"></a>
<a id="placement-placement.wasm.wasm_class.optimizationoutcome_complete.21af5824d96d"></a>
<p class="symi-entry-owner">OptimizationOutcome property</p>

```typescript signature
readonly complete: boolean
```

Getter on `polynomial_system_solution`: whether the solver certified it found every solution.

## complete

<a id="entry-presentation_wasm_solving_capability_equations_complete_api_results_polynomialsystemsolution_complete"></a>
<a id="placement-placement.wasm.wasm_class.polynomialsystemsolution_complete.106326740c8a"></a>
<p class="symi-entry-owner">PolynomialSystemSolution property</p>

```typescript signature
readonly complete: boolean
```

Getter on `polynomial_system_solution`: whether the solver certified it found every solution.

## countDistinctRealRoots

<a id="entry-presentation_wasm_solving_capability_equations_count_distinct_real_roots_api_solving_session_count_distinct_real_roots"></a>
<a id="placement-placement.wasm.wasm_module.module_countdistinctrealroots.ea05a875dba1"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
countDistinctRealRoots(
    input_expression: Expression,
    variable: string,
): number | undefined
```

Number of distinct real roots over all of \(\mathbb{R}\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_countdistinctrealroots.7ee1d266c9eb"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.countDistinctRealRoots</code></p>

```typescript signature
countDistinctRealRoots(
    input_expression: Expression,
    variable: string,
): number | undefined
```

</details>

## eliminateQuantifiers

<a id="entry-presentation_wasm_solving_capability_equations_eliminate_quantifiers_api_logic_session_eliminate_quantifiers"></a>
<a id="placement-placement.wasm.wasm_module.module_eliminatequantifiers.7b682b252104"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
eliminateQuantifiers(
    matrix: Expression,
    quantifiers: string[],
    variables: string[],
): Expression
```

`context.eliminate_quantifiers(Matrix, quantifiers: list[str], variables: list[VariableLike])`

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_eliminatequantifiers.943addcee9cd"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.eliminateQuantifiers</code></p>

```typescript signature
eliminateQuantifiers(
    matrix: Expression,
    quantifiers: string[],
    variables: string[],
): Expression
```

</details>

## globalOptimumOnSemialgebraic

<a id="entry-presentation_wasm_optimization_capability_equations_global_optimum_on_semialgebraic_api_solving_session_global_optimum_on_semialgebraic"></a>
<a id="placement-placement.wasm.wasm_module.module_globaloptimumonsemialgebraic.22ed79a5f317"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
globalOptimumOnSemialgebraic(
    objective: Expression,
    constraints: Expression,
    variables: string[],
    direction: string,
): OptimizationOutcome
```

`context.global_optimum_on_semialgebraic(objective, constraints, variables: list[VariableLike], direction: str)`

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_globaloptimumonsemialgebraic.479ea3494935"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.globalOptimumOnSemialgebraic</code></p>

```typescript signature
globalOptimumOnSemialgebraic(
    objective: Expression,
    constraints: Expression,
    variables: string[],
    direction: string,
): OptimizationOutcome
```

</details>

## karushKuhnTuckerPoints

<a id="entry-presentation_wasm_optimization_capability_equations_karush_kuhn_tucker_points_api_solving_session_karush_kuhn_tucker_points"></a>
<a id="placement-placement.wasm.wasm_module.module_karushkuhntuckerpoints.a8ef1c2fbad2"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
karushKuhnTuckerPoints(
    objective: Expression,
    inequality_constraints: Expression[],
    equality_constraints: Expression[],
    variables: string[],
): OptimizationOutcome
```

The Karush–Kuhn–Tucker points found by active-set enumeration. Each inequality is read as \(\operatorname{inequality} \le 0\) and each equality as `equality = 0`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_karushkuhntuckerpoints.fa6b84d46fc0"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.karushKuhnTuckerPoints</code></p>

```typescript signature
karushKuhnTuckerPoints(
    objective: Expression,
    inequality_constraints: Expression[],
    equality_constraints: Expression[],
    variables: string[],
): OptimizationOutcome
```

</details>

## lagrangeCriticalPoints

<a id="entry-presentation_wasm_optimization_capability_equations_lagrange_critical_points_api_solving_session_lagrange_critical_points"></a>
<a id="placement-placement.wasm.wasm_module.module_lagrangecriticalpoints.bc240aa51629"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
lagrangeCriticalPoints(
    objective: Expression,
    constraints: Expression[],
    variables: string[],
): OptimizationOutcome
```

The equality-constrained critical points via Lagrange multipliers: stationarity of \(L = f + \sum_i \lambda_i g_i\) together with each `constraint = 0`, classified by the bordered Hessian. The solved multiplier values appear in each point's multipliers.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_lagrangecriticalpoints.e80a858e03b0"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.lagrangeCriticalPoints</code></p>

```typescript signature
lagrangeCriticalPoints(
    objective: Expression,
    constraints: Expression[],
    variables: string[],
): OptimizationOutcome
```

</details>

## minimalPolynomialOf

<a id="entry-presentation_wasm_solving_capability_equations_minimal_polynomial_of_api_algebra_session_minimal_polynomial_of"></a>
<a id="placement-placement.wasm.wasm_module.module_minimalpolynomialof.79c2bb8f41d9"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
minimalPolynomialOf(
    input_expression: Expression,
    variable: string,
): Expression | undefined
```

Return an exact polynomial in the requested variable for a first-class polynomial-root atom. Its dense primitive integer coefficients are independent of the source variable, coefficient scale, and current isolation precision.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_minimalpolynomialof.c8632b82c23c"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.minimalPolynomialOf</code></p>

```typescript signature
minimalPolynomialOf(
    input_expression: Expression,
    variable: string,
): Expression | undefined
```

</details>

## multiplierValues

<a id="entry-presentation_wasm_solving_capability_equations_multiplier_values_api_results_criticalpoint_multiplier_values"></a>
<a id="placement-placement.wasm.wasm_class.criticalpoint_multipliervalues.7e963e9a8ba9"></a>
<p class="symi-entry-owner">CriticalPoint property</p>

```typescript signature
readonly multiplierValues: Expression[]
```

The solved values of those multipliers, in the same order as `multiplier_variables`.

## multiplierVariables

<a id="entry-presentation_wasm_solving_capability_equations_multiplier_variables_api_results_criticalpoint_multiplier_variables"></a>
<a id="placement-placement.wasm.wasm_class.criticalpoint_multipliervariables.ec621ff22453"></a>
<p class="symi-entry-owner">CriticalPoint property</p>

```typescript signature
readonly multiplierVariables: string[]
```

The names of the introduced Lagrange / KKT multipliers at a constrained critical point (empty for the unconstrained case).

## points

<a id="entry-presentation_wasm_optimization_capability_equations_points_api_results_optimizationoutcome_points"></a>
<a id="placement-placement.wasm.wasm_class.optimizationoutcome_points.3545def4598f"></a>
<p class="symi-entry-owner">OptimizationOutcome property</p>

```typescript signature
readonly points: CriticalPoint[]
```

The list of `critical_point` objects in an `optimization_outcome` (WASM).

## polynomialRoot

<a id="entry-presentation_wasm_solving_capability_equations_polynomial_root_api_solving_session_polynomial_root"></a>
<a id="placement-placement.wasm.wasm_module.module_polynomialroot.72fc790efc20"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
polynomialRoot(
    input_expression: Expression,
    variable: string,
    index: number,
): Expression | undefined
```

Construct the zero-based `index`-th exact root of a univariate rational polynomial. Roots use canonical mathematical order: increasing real roots first, then non-real roots ordered by exact real part and exact imaginary part; indexing counts multiplicity. Coefficient scale and the variable name do not affect the resulting atom. Invalid, constant, non-rational, out-of-range, or uncertifiable inputs return `None`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_polynomialroot.3cf9a61c8318"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.polynomialRoot</code></p>

```typescript signature
polynomialRoot(
    input_expression: Expression,
    variable: string,
    index: number,
): Expression | undefined
```

</details>

## realRootCount

<a id="entry-presentation_wasm_solving_capability_equations_real_root_count_api_solving_session_real_root_count"></a>
<a id="placement-placement.wasm.wasm_module.module_realrootcount.73ae1dfc30f1"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
realRootCount(
    input_expression: Expression,
    variable: string,
    lower: bigint,
    upper: bigint,
): number | undefined
```

Number of distinct real roots of a univariate polynomial in the interval `(lower, upper]` via Sturm sequences. `None` when the expression is not a univariate polynomial over the rationals.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_realrootcount.0c2cc95c5fce"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.realRootCount</code></p>

```typescript signature
realRootCount(
    input_expression: Expression,
    variable: string,
    lower: bigint,
    upper: bigint,
): number | undefined
```

</details>

## realRootSign

<a id="entry-presentation_wasm_solving_capability_equations_real_root_sign_api_solving_session_real_root_sign"></a>
<a id="placement-placement.wasm.wasm_module.module_realrootsign.0daf97e8a58c"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
realRootSign(
    input_expression: Expression,
    variable: string,
    index: number,
): bigint | undefined
```

The exact sign (`-1`, `0`, or `1`) of the `index`-th smallest real root of a univariate polynomial over the rationals, decided exactly through the real algebraic number layer rather than by numeric evaluation. `None` when the expression is not a univariate polynomial over the rationals or `index` is out of range.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_realrootsign.ce30c7914074"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.realRootSign</code></p>

```typescript signature
realRootSign(
    input_expression: Expression,
    variable: string,
    index: number,
): bigint | undefined
```

</details>

## rootsWithMultiplicities

<a id="entry-presentation_wasm_solving_capability_equations_roots_with_multiplicities_api_solving_session_roots_with_multiplicities"></a>
<a id="placement-placement.wasm.wasm_module.module_rootswithmultiplicities.64f20afdbaa6"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
rootsWithMultiplicities(
    input_expression: Expression,
    variable: string,
): RootMultiplicity[]
```

Roots of a polynomial with their multiplicities. Notes: Python returns a dict keyed by root; WASM returns an array of `root_multiplicity` objects.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_rootswithmultiplicities.1685afb5181e"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.rootsWithMultiplicities</code></p>

```typescript signature
rootsWithMultiplicities(
    input_expression: Expression,
    variable: string,
): RootMultiplicity[]
```

</details>

## rootsWithMultiplicities

<a id="entry-presentation_wasm_solving_capability_equations_roots_with_multiplicities_api_expression_operations_expression_roots_with_multiplicities"></a>
<a id="placement-placement.wasm.wasm_class.expression_rootswithmultiplicities.e1d29f981fe3"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
rootsWithMultiplicities(variable: string): RootMultiplicity[]
```

Roots of a polynomial with their multiplicities. Notes: Python returns a dict keyed by root; WASM returns an array of `root_multiplicity` objects.

## solutions

<a id="entry-presentation_wasm_solving_capability_equations_solutions_api_results_polynomialsystemsolution_solutions"></a>
<a id="placement-placement.wasm.wasm_class.polynomialsystemsolution_solutions.5cd1b9755b44"></a>
<p class="symi-entry-owner">PolynomialSystemSolution property</p>

```typescript signature
readonly solutions: SystemAssignment[]
```

Getter on `polynomial_system_solution`: the array of `system_assignment` tuples (empty for the non-finite verdicts).

## solve

<a id="entry-presentation_wasm_solving_capability_equations_solve_api_solving_session_solve"></a>
<a id="placement-placement.wasm.wasm_module.module_solve.3fdf003ed9a5"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
solve(input_expression: Expression, variable: string): Expression[]
```

Solve an equation (an `equal` node, or an expression implicitly equated to zero) for `variable`, returning a list of solutions. Solutions outside the solver's reach are simply absent — prefer `solveset` when you need an honest "unsolved" residue.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_solve.eb0bbb7e6086"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.solve</code></p>

```typescript signature
solve(input_expression: Expression, variable: string): Expression[]
```

</details>

## solve

<a id="entry-presentation_wasm_solving_capability_equations_solve_api_expression_operations_expression_solve"></a>
<a id="placement-placement.wasm.wasm_class.expression_solve.e98546cf948d"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
solve(variable: string): Expression[]
```

Solve an equation (an `equal` node, or an expression implicitly equated to zero) for `variable`, returning a list of solutions. Solutions outside the solver's reach are simply absent — prefer `solveset` when you need an honest "unsolved" residue.

## solveLinearRecurrence

<a id="entry-presentation_wasm_differential_equations_capability_equations_solve_linear_recurrence_api_solving_session_solve_linear_recurrence"></a>
<a id="placement-placement.wasm.wasm_module.module_solvelinearrecurrence.84dcdba77acf"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
solveLinearRecurrence(
    equation: Expression,
    sequence_call: Expression,
    index_variable: string,
    initial_conditions?: Expression[] | null,
): Expression
```

Solve a linear recurrence with polynomial coefficients for the unknown sequence named by `sequence_call` (e.g. `a(n)`), via Petkovšek's Hyper algorithm. The general solution carries one fresh symbolic constant per basis element; `initial_conditions` is a list of `(index, value)` pairs fitted by back-substitution. Constant-coefficient polynomial-exponential forcing and coefficients rational in `n` and `c^n` are also solved; other shapes return the unevaluated `recurrence_equation` placeholder. WASM passes a flat interleaved array.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_solvelinearrecurrence.8809c44f6227"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.solveLinearRecurrence</code></p>

```typescript signature
solveLinearRecurrence(
    equation: Expression,
    sequence_call: Expression,
    index_variable: string,
    initial_conditions?: Expression[] | null,
): Expression
```

</details>

## solveOrdinaryDifferentialEquation

<a id="entry-presentation_wasm_differential_equations_capability_equations_solve_ordinary_differential_equation_api_solving_session_solve_ordinary_differential_equation"></a>
<a id="placement-placement.wasm.wasm_module.module_solveordinarydifferentialequation.79ae565de443"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
solveOrdinaryDifferentialEquation(
    equation: Expression,
    dependent_function_call: Expression,
    independent_variable: string,
    initial_conditions?: Expression[] | null,
): Expression
```

Solve an ODE for the unknown function named by `dependent_function_call` (e.g. `y(x)`).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_solveordinarydifferentialequation.efb98185cf3b"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.solveOrdinaryDifferentialEquation</code></p>

```typescript signature
solveOrdinaryDifferentialEquation(
    equation: Expression,
    dependent_function_call: Expression,
    independent_variable: string,
    initial_conditions?: Expression[] | null,
): Expression
```

</details>

## solveOrdinaryDifferentialEquationWithParticularSolution

<a id="entry-presentation_wasm_differential_equations_capability_equations_solve_ordinary_differential_equation_with_particular_solution_api_solving_session_solve_ordinary_differential_equation_with_particular_solution"></a>
<a id="placement-placement.wasm.wasm_module.module_solveordinarydifferentialequationwithparticularsolution.9f86687333f8"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
solveOrdinaryDifferentialEquationWithParticularSolution(
    equation: Expression,
    dependent_function_call: Expression,
    independent_variable: string,
    particular_solution: Expression,
): Expression
```

Riccati-specific entry: with a known particular solution \(y_1\), the substitution \(y = y_1 + 1/v\) reduces the Riccati equation to a linear first-order ODE. Falls back to the unevaluated placeholder when the shape is not Riccati.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_solveordinarydifferentialequationwithparticularsolution.a068b73acc6d"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.solveOrdinaryDifferentialEquationWithParticularSolution</code></p>

```typescript signature
solveOrdinaryDifferentialEquationWithParticularSolution(
    equation: Expression,
    dependent_function_call: Expression,
    independent_variable: string,
    particular_solution: Expression,
): Expression
```

</details>

## solvePolynomialSystem

<a id="entry-presentation_wasm_solving_capability_equations_solve_polynomial_system_api_solving_session_solve_polynomial_system"></a>
<a id="placement-placement.wasm.wasm_module.module_solvepolynomialsystem.e6845dfe5212"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
solvePolynomialSystem(
    equations: Expression[],
    variables: string[],
): PolynomialSystemSolution
```

Solve a multivariate polynomial system `{ equation_i = 0 }` for the named unknowns. Every other free symbol is a parameter carried symbolically in the coefficient ring. The solver is sound and honestly incomplete: every returned tuple has been back-substituted into every equation and reduced to a provable zero, and the verdict never overstates completeness.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_solvepolynomialsystem.1a9a483b3105"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.solvePolynomialSystem</code></p>

```typescript signature
solvePolynomialSystem(
    equations: Expression[],
    variables: string[],
): PolynomialSystemSolution
```

</details>

## solveSemialgebraic

<a id="entry-presentation_wasm_solving_capability_equations_solve_semialgebraic_api_logic_session_solve_semialgebraic"></a>
<a id="placement-placement.wasm.wasm_module.module_solvesemialgebraic.bc85f1234db9"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
solveSemialgebraic(matrix: Expression, variables: string[]): Expression
```

`context.solve_semialgebraic(Matrix, variables: list[VariableLike])`

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_solvesemialgebraic.d516cccae289"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.solveSemialgebraic</code></p>

```typescript signature
solveSemialgebraic(matrix: Expression, variables: string[]): Expression
```

</details>

## solveset

<a id="entry-presentation_wasm_solving_capability_equations_solveset_api_solving_session_solveset"></a>
<a id="placement-placement.wasm.wasm_module.module_solveset.c4d048ff1df8"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
solveset(
    input_expression: Expression,
    variable: string,
    domain?: Expression | null,
): Expression
```

Solution set of the equation or inequality: a finite set, interval, union, image set (periodic families), or condition set (the honest "unsolved" residue).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_solveset.a0c5b9375be1"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.solveset</code></p>

```typescript signature
solveset(
    input_expression: Expression,
    variable: string,
    domain?: Expression | null,
): Expression
```

</details>

## solveset

<a id="entry-presentation_wasm_solving_capability_equations_solveset_api_expression_operations_expression_solveset"></a>
<a id="placement-placement.wasm.wasm_class.expression_solveset.24afaaf366dc"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
solveset(variable: string, domain?: Expression | null): Expression
```

Solution set of the equation or inequality: a finite set, interval, union, image set (periodic families), or condition set (the honest "unsolved" residue).

## solvesetInDomain

<a id="entry-presentation_wasm_solving_capability_equations_solveset_in_domain_api_solving_session_solveset_in_domain"></a>
<a id="placement-placement.wasm.wasm_module.module_solvesetindomain.d47c4f18f7ba"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
solvesetInDomain(
    equation: Expression,
    variable: string,
    domain: Expression,
): Expression
```

`solveset` restricted to an explicit domain set (e.g. `real_line()`, `integer_set()`, an interval).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_solvesetindomain.1a3d09ece50e"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.solvesetInDomain</code></p>

```typescript signature
solvesetInDomain(
    equation: Expression,
    variable: string,
    domain: Expression,
): Expression
```

</details>

## unconstrainedCriticalPoints

<a id="entry-presentation_wasm_optimization_capability_equations_unconstrained_critical_points_api_solving_session_unconstrained_critical_points"></a>
<a id="placement-placement.wasm.wasm_module.module_unconstrainedcriticalpoints.73c270b9471a"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
unconstrainedCriticalPoints(
    objective: Expression,
    variables: string[],
): OptimizationOutcome
```

The critical points of `objective` as the solutions of \(\nabla f = 0\), each classified by the definiteness of the Hessian (Sylvester's criterion on the leading principal minors).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_unconstrainedcriticalpoints.40bf18e8ff10"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.unconstrainedCriticalPoints</code></p>

```typescript signature
unconstrainedCriticalPoints(
    objective: Expression,
    variables: string[],
): OptimizationOutcome
```

</details>

## values

<a id="entry-presentation_wasm_solving_capability_equations_values_api_results_criticalpoint_values"></a>
<a id="placement-placement.wasm.wasm_class.criticalpoint_values.6894bda84e82"></a>
<p class="symi-entry-owner">CriticalPoint property</p>

```typescript signature
readonly values: Expression[]
```

Getter on `system_assignment`: the assigned value expressions, aligned with `variables`.

## values

<a id="entry-presentation_wasm_solving_capability_equations_values_api_results_systemassignment_values"></a>
<a id="placement-placement.wasm.wasm_class.systemassignment_values.6def767a335c"></a>
<p class="symi-entry-owner">SystemAssignment property</p>

```typescript signature
readonly values: Expression[]
```

Getter on `system_assignment`: the assigned value expressions, aligned with `variables`.

## variables

<a id="entry-presentation_wasm_solving_capability_equations_variables_api_results_criticalpoint_variables"></a>
<a id="placement-placement.wasm.wasm_class.criticalpoint_variables.daa72a0ef83f"></a>
<p class="symi-entry-owner">CriticalPoint property</p>

```typescript signature
readonly variables: string[]
```

Getter on `system_assignment`: the unknown names, in order.

## variables

<a id="entry-presentation_wasm_solving_capability_equations_variables_api_results_systemassignment_variables"></a>
<a id="placement-placement.wasm.wasm_class.systemassignment_variables.b13c40d79d8c"></a>
<p class="symi-entry-owner">SystemAssignment property</p>

```typescript signature
readonly variables: string[]
```

Getter on `system_assignment`: the unknown names, in order.

## verdict

<a id="entry-presentation_wasm_solving_capability_calculus_verdict_api_results_definiteintegrationresult_verdict"></a>
<a id="placement-placement.wasm.wasm_class.definiteintegrationresult_verdict.ef5d425f12c2"></a>
<p class="symi-entry-owner">DefiniteIntegrationResult property</p>

```typescript signature
readonly verdict: string
```

Whether the request was evaluated, proved divergent, or declined.

## verdict

<a id="entry-presentation_wasm_solving_capability_equations_verdict_api_results_optimizationoutcome_verdict"></a>
<a id="placement-placement.wasm.wasm_class.optimizationoutcome_verdict.a8e3195ed418"></a>
<p class="symi-entry-owner">OptimizationOutcome property</p>

```typescript signature
readonly verdict: string
```

The optimization result classification.

## verdict

<a id="entry-presentation_wasm_solving_capability_equations_verdict_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_verdict"></a>
<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsolveresult_verdict.be6fec5ffae5"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSolveResult property</p>

```typescript signature
readonly verdict: string
```

Whether the request was solved or declined.

## verdict

<a id="entry-presentation_wasm_solving_capability_equations_verdict_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_verdict"></a>
<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsystemsolveresult_verdict.cc0fd5062ade"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSystemSolveResult property</p>

```typescript signature
readonly verdict: string
```

Whether the system was solved or declined.

## verdict

<a id="entry-presentation_wasm_solving_capability_equations_verdict_api_ordinary_differential_equations_ordinarydifferentialequationsystemverificationreport_verdict"></a>
<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsystemverificationreport_verdict.ee29fc9bbe84"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSystemVerificationReport property</p>

```typescript signature
readonly verdict: string
```

The decision on every equation residual and every datum of the supplied assignment.

## verdict

<a id="entry-presentation_wasm_solving_capability_equations_verdict_api_partial_differential_equations_partialdifferentialequationsecondorderclassification_verdict"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsecondorderclassification_verdict.46c046f2c01d"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSecondOrderClassification property</p>

```typescript signature
readonly verdict: string
```

Whether one type, a complete case table, or neither was proved.

## verdict

<a id="entry-presentation_wasm_solving_capability_equations_verdict_api_partial_differential_equations_partialdifferentialequationsolveresult_verdict"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolveresult_verdict.ddbb1f7390b2"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolveResult property</p>

```typescript signature
readonly verdict: string
```

Whether the dispatcher solved or honestly declined.

## verdict

<a id="entry-presentation_wasm_solving_capability_equations_verdict_api_partial_differential_equations_partialdifferentialequationtransformationverificationreport_verdict"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationtransformationverificationreport_verdict.b1e430c993fe"></a>
<p class="symi-entry-owner">PartialDifferentialEquationTransformationVerificationReport property</p>

```typescript signature
readonly verdict: string
```

The aggregate exact verification verdict.

## verdict

<a id="entry-presentation_wasm_solving_capability_equations_verdict_api_partial_differential_equations_partialdifferentialequationverificationreport_verdict"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationverificationreport_verdict.2c5adb81b6f5"></a>
<p class="symi-entry-owner">PartialDifferentialEquationVerificationReport property</p>

```typescript signature
readonly verdict: string
```

The aggregate exact verification verdict.

## verdict

<a id="entry-presentation_wasm_solving_capability_equations_verdict_api_partial_differential_equations_partialdifferentialequationverificationresidual_verdict"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationverificationresidual_verdict.f1c9965647a6"></a>
<p class="symi-entry-owner">PartialDifferentialEquationVerificationResidual property</p>

```typescript signature
readonly verdict: string
```

The exact verdict proved about this one residual.

## verdict

<a id="entry-presentation_wasm_solving_capability_equations_verdict_api_results_polynomialsystemsolution_verdict"></a>
<a id="placement-placement.wasm.wasm_class.polynomialsystemsolution_verdict.b9cd1af2a7ce"></a>
<p class="symi-entry-owner">PolynomialSystemSolution property</p>

```typescript signature
readonly verdict: string
```

Getter on `polynomial_system_solution`: the verdict string, one of `"finite"`, `"empty"`, `"positive_dimensional"`, or `"declined"`.

## NumeratorDenominator

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_numerator_denominator_api_results_numeratordenominator"></a>
<a id="placement-placement.wasm.javascript_facade.numeratordenominator.7ceff7e08454"></a>
<p class="symi-entry-owner">Type</p>

```typescript signature
interface NumeratorDenominator
```

Public type placement for NumeratorDenominator.

## cancel

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_cancel_api_session_cancel"></a>
<a id="placement-placement.wasm.wasm_module.module_cancel.a2f399282cbb"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
cancel(input_expression: Expression): Expression
```

Rational normal form: write as a single fraction and divide out the polynomial GCD of numerator and denominator.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_cancel.932c8c84c37d"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.cancel</code></p>

```typescript signature
cancel(input_expression: Expression): Expression
```

</details>

## cancel

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_cancel_api_expression_cancel"></a>
<a id="placement-placement.wasm.wasm_class.expression_cancel.1ccb3725a645"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
cancel(): Expression
```

Rational normal form: write as a single fraction and divide out the polynomial GCD of numerator and denominator.

## collect

<a id="entry-presentation_wasm_algebraic_transforms_capability_expression_transformations_collect_api_algebra_session_collect"></a>
<a id="placement-placement.wasm.wasm_module.module_collect.891acef02c13"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
collect(input_expression: Expression, generator: Expression): Expression
```

Regroup the additive terms of `expression` by the numeric (integer or rational) powers of a single `generator`, which may be a variable or an arbitrary subexpression, writing the result as a sum of `generator^k coefficient(k)` terms without expanding the coefficients. For example, collecting `ax^2 + bx^2 + ax - bx + c` by `x` yields `x^2(a + b) + x(a - b) + c`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_collect.bdcb1b32b44d"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.collect</code></p>

```typescript signature
collect(input_expression: Expression, generator: Expression): Expression
```

</details>

## collect

<a id="entry-presentation_wasm_algebraic_transforms_capability_expression_transformations_collect_api_expression_operations_expression_collect"></a>
<a id="placement-placement.wasm.wasm_class.expression_collect.077961f6224f"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
collect(generator: Expression): Expression
```

Regroup the additive terms of `expression` by the numeric (integer or rational) powers of a single `generator`, which may be a variable or an arbitrary subexpression, writing the result as a sum of `generator^k coefficient(k)` terms without expanding the coefficients. For example, collecting `ax^2 + bx^2 + ax - bx + c` by `x` yields `x^2(a + b) + x(a - b) + c`.

## collectRadicals

<a id="entry-presentation_wasm_algebraic_transforms_capability_expression_transformations_collect_radicals_api_algebra_session_collect_radicals"></a>
<a id="placement-placement.wasm.wasm_module.module_collectradicals.618f2f1f120b"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
collectRadicals(input_expression: Expression): Expression
```

Collect like numeric radical kernels in a top-level sum. For example, `a*sqrt(2) + b*sqrt(2) + 3` becomes `(a + b)*sqrt(2) + 3`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_collectradicals.8882f588936f"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.collectRadicals</code></p>

```typescript signature
collectRadicals(input_expression: Expression): Expression
```

</details>

## collectRadicals

<a id="entry-presentation_wasm_algebraic_transforms_capability_expression_transformations_collect_radicals_api_expression_operations_expression_collect_radicals"></a>
<a id="placement-placement.wasm.wasm_class.expression_collectradicals.c887746fcdff"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
collectRadicals(): Expression
```

Collect like numeric radical kernels in a top-level sum. For example, `a*sqrt(2) + b*sqrt(2) + 3` becomes `(a + b)*sqrt(2) + 3`.

## combineLogarithm

<a id="entry-presentation_wasm_trigonometric_complex_rewrites_capability_expression_transformations_combine_logarithm_api_algebra_session_combine_logarithm"></a>
<a id="placement-placement.wasm.wasm_module.module_combinelogarithm.660beda16ea9"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
combineLogarithm(input_expression: Expression): Expression
```

\(\log a + \log b \rightarrow \log(a b)\) and \(n\log a \rightarrow \log(a^n)\) when the transformation preserves the expression's domain.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_combinelogarithm.d75c6b7bb203"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.combineLogarithm</code></p>

```typescript signature
combineLogarithm(input_expression: Expression): Expression
```

</details>

## combineLogarithm

<a id="entry-presentation_wasm_trigonometric_complex_rewrites_capability_expression_transformations_combine_logarithm_api_expression_operations_expression_combine_logarithm"></a>
<a id="placement-placement.wasm.wasm_class.expression_combinelogarithm.a13ee73e1e1d"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
combineLogarithm(): Expression
```

\(\log a + \log b \rightarrow \log(a b)\) and \(n\log a \rightarrow \log(a^n)\) when the transformation preserves the expression's domain.

## combinePowers

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_combine_powers_api_algebra_session_combine_powers"></a>
<a id="placement-placement.wasm.wasm_module.module_combinepowers.0e25bed4eaab"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
combinePowers(input_expression: Expression): Expression
```

Combine same-exponent powers into a single power of the merged base (`x^a y^a -> (xy)^a`) at every product node where the rewrite is provably valid. This identity is false across the branch cut of the complex logarithm — at `x = y = -1` and `a = 1/2` the left side is `ii = -1` while the right side is `sqrt(1) = 1` — so it fires only when the exponent is provably an integer or when every combined base is provably positive. Positivity of the merged base is not enough: `(-2)^x (-3)^x` is left alone, because at `x = 1/2` combining it to `6^x` would flip the sign of the result. Positive numeric-literal bases need no assumptions at all, so `2^x 3^x` becomes `6^x` and `(1/2)^x 3^x` becomes `(3/2)^x`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_combinepowers.7c10205ea9cd"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.combinePowers</code></p>

```typescript signature
combinePowers(input_expression: Expression): Expression
```

</details>

## combinePowers

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_combine_powers_api_expression_operations_expression_combine_powers"></a>
<a id="placement-placement.wasm.wasm_class.expression_combinepowers.fbbb9d6d14ef"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
combinePowers(): Expression
```

Combine same-exponent powers into a single power of the merged base (`x^a y^a -> (xy)^a`) at every product node where the rewrite is provably valid. This identity is false across the branch cut of the complex logarithm — at `x = y = -1` and `a = 1/2` the left side is `ii = -1` while the right side is `sqrt(1) = 1` — so it fires only when the exponent is provably an integer or when every combined base is provably positive. Positivity of the merged base is not enough: `(-2)^x (-3)^x` is left alone, because at `x = 1/2` combining it to `6^x` would flip the sign of the result. Positive numeric-literal bases need no assumptions at all, so `2^x 3^x` becomes `6^x` and `(1/2)^x 3^x` becomes `(3/2)^x`.

## combineTrigonometric

<a id="entry-presentation_wasm_trigonometric_complex_rewrites_capability_expression_transformations_combine_trigonometric_api_session_combine_trigonometric"></a>
<a id="placement-placement.wasm.wasm_module.module_combinetrigonometric.82565a45a596"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
combineTrigonometric(input_expression: Expression): Expression
```

Inverse direction of `expand_trigonometric`: product-to-sum and angle-recombination rules.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_combinetrigonometric.741f4fcc74d0"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.combineTrigonometric</code></p>

```typescript signature
combineTrigonometric(input_expression: Expression): Expression
```

</details>

## combineTrigonometric

<a id="entry-presentation_wasm_trigonometric_complex_rewrites_capability_expression_transformations_combine_trigonometric_api_expression_combine_trigonometric"></a>
<a id="placement-placement.wasm.wasm_class.expression_combinetrigonometric.379f033759d1"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
combineTrigonometric(): Expression
```

Inverse direction of `expand_trigonometric`: product-to-sum and angle-recombination rules.

## completeTheSquare

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_complete_the_square_api_algebra_session_complete_the_square"></a>
<a id="placement-placement.wasm.wasm_module.module_completethesquare.bf40d9a8b764"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
completeTheSquare(
    input_expression: Expression,
    variable: Expression,
): Expression
```

Rewrite an expression that is quadratic in `variable` into the exact vertex form `a*(variable - h)^2 + k`, with `h = -b/(2*a)` and `k = c - b^2/(4*a)` built from the degree-2, degree-1 and degree-0 coefficients `a`, `b`, `c` of the expression collected in `variable`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_completethesquare.7c0eae8e0253"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.completeTheSquare</code></p>

```typescript signature
completeTheSquare(
    input_expression: Expression,
    variable: Expression,
): Expression
```

</details>

## completeTheSquare

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_complete_the_square_api_expression_operations_expression_complete_the_square"></a>
<a id="placement-placement.wasm.wasm_class.expression_completethesquare.3d862f31a1ce"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
completeTheSquare(variable: Expression): Expression
```

Rewrite an expression that is quadratic in `variable` into the exact vertex form `a*(variable - h)^2 + k`, with `h = -b/(2*a)` and `k = c - b^2/(4*a)` built from the degree-2, degree-1 and degree-0 coefficients `a`, `b`, `c` of the expression collected in `variable`.

## denestPowers

<a id="entry-presentation_wasm_algebraic_transforms_capability_expression_transformations_denest_powers_api_algebra_session_denest_powers"></a>
<a id="placement-placement.wasm.wasm_module.module_denestpowers.73ac4ed785a7"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
denestPowers(input_expression: Expression): Expression
```

Flatten a power of a power into a single power (`(x^a)^b -> x^(a*b)`) at every power node whose outer exponent is provably an integer, which is valid on the principal branch because an integer power never routes through `log`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_denestpowers.4c2e62cdb07a"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.denestPowers</code></p>

```typescript signature
denestPowers(input_expression: Expression): Expression
```

</details>

## denestPowers

<a id="entry-presentation_wasm_algebraic_transforms_capability_expression_transformations_denest_powers_api_expression_operations_expression_denest_powers"></a>
<a id="placement-placement.wasm.wasm_class.expression_denestpowers.9316950a8123"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
denestPowers(): Expression
```

Flatten a power of a power into a single power (`(x^a)^b -> x^(a*b)`) at every power node whose outer exponent is provably an integer, which is valid on the principal branch because an integer power never routes through `log`.

## denestRadicals

<a id="entry-presentation_wasm_algebraic_transforms_capability_expression_transformations_denest_radicals_api_algebra_session_denest_radicals"></a>
<a id="placement-placement.wasm.wasm_module.module_denestradicals.56dce14cb552"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
denestRadicals(input_expression: Expression): Expression
```

Denest the bounded depth-two real-radical subset bottom-up: rational quadratic surds, up to three inner quadratic surds, and `cbrt(a + b*sqrt(c))` when its exact resolvent has a rational root. For example, `sqrt(3 + 2*sqrt(2))` becomes `1 + sqrt(2)` and `cbrt(2 + sqrt(5))` becomes `(1 + sqrt(5))/2`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_denestradicals.2a3aa905082a"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.denestRadicals</code></p>

```typescript signature
denestRadicals(input_expression: Expression): Expression
```

</details>

## denestRadicals

<a id="entry-presentation_wasm_algebraic_transforms_capability_expression_transformations_denest_radicals_api_expression_operations_expression_denest_radicals"></a>
<a id="placement-placement.wasm.wasm_class.expression_denestradicals.d11a0ba4842a"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
denestRadicals(): Expression
```

Denest the bounded depth-two real-radical subset bottom-up: rational quadratic surds, up to three inner quadratic surds, and `cbrt(a + b*sqrt(c))` when its exact resolvent has a rational root. For example, `sqrt(3 + 2*sqrt(2))` becomes `1 + sqrt(2)` and `cbrt(2 + sqrt(5))` becomes `(1 + sqrt(5))/2`.

## denominator

<a id="entry-presentation_wasm_expressions_capability_expression_transformations_denominator_api_session_denominator"></a>
<a id="placement-placement.wasm.wasm_module.module_denominator.b4393447d319"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
denominator(input_expression: Expression): Expression
```

Returns the structural denominator from `numerator_denominator`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_denominator.fed5cc8af821"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.denominator</code></p>

```typescript signature
denominator(input_expression: Expression): Expression
```

</details>

## denominator

<a id="entry-presentation_wasm_expressions_capability_expression_transformations_denominator_api_expression_denominator"></a>
<a id="placement-placement.wasm.javascript_facade.expression_denominator.9d6d160c4432"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
denominator(): Expression
```

Returns the structural denominator from `numerator_denominator`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_denominator.4666a5313067"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.denominator</code></p>

```typescript signature
denominator(): Expression
```

</details>

## denominator

<a id="entry-presentation_wasm_expressions_capability_expression_transformations_denominator_api_results_numeratordenominator_denominator"></a>
<a id="placement-placement.wasm.javascript_facade.numeratordenominator_denominator.9141100064f1"></a>
<p class="symi-entry-owner">NumeratorDenominator property</p>

```typescript signature
denominator: Expression
```

Returns the structural denominator from `numerator_denominator`.

## divide

<a id="entry-presentation_wasm_expressions_capability_expression_transformations_divide_api_expression_divide"></a>
<a id="placement-placement.wasm.javascript_facade.expression_divide.0b155bc736f4"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
divide(other: ExpressionLike): Expression
```

Quotient of this expression and `other`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_divide.5255284e4cf1"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.divide</code></p>

```typescript signature
divide(other: Expression): Expression
```

</details>

## duplicate

<a id="entry-presentation_wasm_expressions_capability_expression_transformations_duplicate_api_expression_duplicate"></a>
<a id="placement-placement.wasm.javascript_facade.expression_duplicate.d4be0ef54df8"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
duplicate(): Expression
```

An independent handle to the same underlying expression. The recommended JavaScript facade duplicates values before passing them through ownership-transferring raw WASM arrays, so ordinary facade calls are non-destructive. Callers using `facade.raw` directly must still duplicate a handle they intend to retain. Python arguments are borrowed.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_duplicate.97b5cc29d8db"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.duplicate</code></p>

```typescript signature
duplicate(): Expression
```

</details>

## equals

<a id="entry-presentation_wasm_expressions_capability_expression_transformations_equals_api_expression_operations_expression_equals"></a>
<a id="placement-placement.wasm.wasm_class.expression_equals.48b56c74b7ad"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
equals(other: Expression): boolean
```

Mathematical equality test: \(\operatorname{simplify}(\operatorname{self} - \operatorname{other}) = 0\).

## evaluateToComplexInexact

<a id="entry-presentation_wasm_trigonometric_complex_rewrites_capability_expression_transformations_evaluate_to_complex_inexact_api_expression_operations_expression_evaluate_to_complex_inexact"></a>
<a id="placement-placement.wasm.wasm_class.expression_evaluatetocomplexinexact.315e742a4077"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
evaluateToComplexInexact(): Float64Array
```

Complex evaluation at the default working precision under the documented principal-value branch cuts, as (real, imaginary).

## evaluateToComplexInexactAtPrecision

<a id="entry-presentation_wasm_trigonometric_complex_rewrites_capability_expression_transformations_evaluate_to_complex_inexact_at_precision_api_expression_operations_expression_evaluate_to_complex_inexact_at_precision"></a>
<a id="placement-placement.wasm.wasm_class.expression_evaluatetocomplexinexactatprecision.84d0eabab4f4"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
evaluateToComplexInexactAtPrecision(precision_bits: number): Float64Array
```

Same with an explicit working precision in bits.

## evaluateToFloat

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_evaluate_to_float_api_expression_operations_expression_evaluate_to_float"></a>
<a id="placement-placement.wasm.wasm_class.expression_evaluatetofloat.397b7c48c0f3"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
evaluateToFloat(): number
```

Real double-precision value; raises when the expression has no real numeric value (free symbols, complex value, pole).

## expand

<a id="entry-presentation_wasm_algebraic_transforms_capability_expression_transformations_expand_api_session_expand"></a>
<a id="placement-placement.wasm.wasm_module.module_expand.debe9b25c914"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
expand(input_expression: Expression): Expression
```

Expand products, integer powers, and supported algebraic forms.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_expand.d98009438d4a"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.expand</code></p>

```typescript signature
expand(input_expression: Expression): Expression
```

</details>

## expand

<a id="entry-presentation_wasm_algebraic_transforms_capability_expression_transformations_expand_api_expression_expand"></a>
<a id="placement-placement.wasm.wasm_class.expression_expand.3ba03dbd7b00"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
expand(): Expression
```

Expand products, integer powers, and supported algebraic forms.

## expandComplex

<a id="entry-presentation_wasm_trigonometric_complex_rewrites_capability_expression_transformations_expand_complex_api_algebra_session_expand_complex"></a>
<a id="placement-placement.wasm.wasm_module.module_expandcomplex.882987d16cbf"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
expandComplex(input_expression: Expression): Expression
```

Decompose an expression exactly as `real_part(Expression) + i*imaginary_part(Expression)`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_expandcomplex.ec1c84d2cb66"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.expandComplex</code></p>

```typescript signature
expandComplex(input_expression: Expression): Expression
```

</details>

## expandComplex

<a id="entry-presentation_wasm_trigonometric_complex_rewrites_capability_expression_transformations_expand_complex_api_expression_operations_expression_expand_complex"></a>
<a id="placement-placement.wasm.wasm_class.expression_expandcomplex.7c66ec5fb625"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
expandComplex(): Expression
```

Decompose an expression exactly as `real_part(Expression) + i*imaginary_part(Expression)`.

## expandLogarithm

<a id="entry-presentation_wasm_trigonometric_complex_rewrites_capability_expression_transformations_expand_logarithm_api_algebra_session_expand_logarithm"></a>
<a id="placement-placement.wasm.wasm_module.module_expandlogarithm.c138343492e9"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
expandLogarithm(input_expression: Expression): Expression
```

\(\log(a b) \rightarrow \log a + \log b\) and \(\log(a^n) \rightarrow n\log a\), applied only where the operands are provably positive. Operands of unknown sign pass through unchanged.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_expandlogarithm.edb9385b56d9"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.expandLogarithm</code></p>

```typescript signature
expandLogarithm(input_expression: Expression): Expression
```

</details>

## expandLogarithm

<a id="entry-presentation_wasm_trigonometric_complex_rewrites_capability_expression_transformations_expand_logarithm_api_expression_operations_expression_expand_logarithm"></a>
<a id="placement-placement.wasm.wasm_class.expression_expandlogarithm.abcb3401c393"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
expandLogarithm(): Expression
```

\(\log(a b) \rightarrow \log a + \log b\) and \(\log(a^n) \rightarrow n\log a\), applied only where the operands are provably positive. Operands of unknown sign pass through unchanged.

## expandPowerBase

<a id="entry-presentation_wasm_algebraic_transforms_capability_expression_transformations_expand_power_base_api_algebra_session_expand_power_base"></a>
<a id="placement-placement.wasm.wasm_module.module_expandpowerbase.b3c245130f9d"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
expandPowerBase(input_expression: Expression): Expression
```

Split a power whose base is structurally a product into a product of powers (`(xy)^a -> x^a y^a`) at every power node whose exponent is provably an integer — the only unconditionally valid gate for this direction, since the split introduces `x^a` and `y^a` individually and each needs its own base off the cut. With `n` declared an integer, `(xy)^n` becomes `x^n y^n`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_expandpowerbase.d498d0612d9b"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.expandPowerBase</code></p>

```typescript signature
expandPowerBase(input_expression: Expression): Expression
```

</details>

## expandPowerBase

<a id="entry-presentation_wasm_algebraic_transforms_capability_expression_transformations_expand_power_base_api_expression_operations_expression_expand_power_base"></a>
<a id="placement-placement.wasm.wasm_class.expression_expandpowerbase.6ea9637348b8"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
expandPowerBase(): Expression
```

Split a power whose base is structurally a product into a product of powers (`(xy)^a -> x^a y^a`) at every power node whose exponent is provably an integer — the only unconditionally valid gate for this direction, since the split introduces `x^a` and `y^a` individually and each needs its own base off the cut. With `n` declared an integer, `(xy)^n` becomes `x^n y^n`.

## expandTrigonometric

<a id="entry-presentation_wasm_trigonometric_complex_rewrites_capability_expression_transformations_expand_trigonometric_api_session_expand_trigonometric"></a>
<a id="placement-placement.wasm.wasm_module.module_expandtrigonometric.af837d1e113e"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
expandTrigonometric(input_expression: Expression): Expression
```

Expand trig/hyperbolic functions of sums and multiple angles.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_expandtrigonometric.a896374747a3"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.expandTrigonometric</code></p>

```typescript signature
expandTrigonometric(input_expression: Expression): Expression
```

</details>

## expandTrigonometric

<a id="entry-presentation_wasm_trigonometric_complex_rewrites_capability_expression_transformations_expand_trigonometric_api_expression_expand_trigonometric"></a>
<a id="placement-placement.wasm.wasm_class.expression_expandtrigonometric.1154bf16d311"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
expandTrigonometric(): Expression
```

Expand trig/hyperbolic functions of sums and multiple angles.

## expressionType

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_expression_type_api_expression_operations_expression_expression_type"></a>
<a id="placement-placement.wasm.wasm_class.expression_expressiontype.9ef64c5b0bbb"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
expressionType(): string
```

Top-level node kind: one of `integer`, `rational`, `symbol`, `constant`, `sum`, `product`, `power`, `factorial`, `function_call`, `derivative`, `integral`, `summation`, `laplace_transform`, `inverse_laplace_transform`, `fourier_transform`, `inverse_fourier_transform`, `piecewise`, `ordinary_differential_equation`, `recurrence_equation`, `interval`, `finite_set`, `set_union`, `set_intersection`, `set_complement`, `image_set`, `condition_set`.

## factor

<a id="entry-presentation_wasm_algebraic_transforms_capability_expression_transformations_factor_api_session_factor"></a>
<a id="placement-placement.wasm.wasm_module.module_factor.1a856a4538bd"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
factor(
    input_expression: Expression,
    gaussian?: boolean | null,
): Expression
```

Polynomial factorization over the rationals (full multivariate).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_factor.631689a43337"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.factor</code></p>

```typescript signature
factor(
    input_expression: Expression,
    gaussian?: boolean | null,
): Expression
```

</details>

## factor

<a id="entry-presentation_wasm_algebraic_transforms_capability_expression_transformations_factor_api_expression_factor"></a>
<a id="placement-placement.wasm.wasm_class.expression_factor.86dbcc9c348d"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
factor(gaussian?: boolean | null): Expression
```

Polynomial factorization over the rationals (full multivariate).

## factorCommonTerms

<a id="entry-presentation_wasm_algebraic_transforms_capability_expression_transformations_factor_common_terms_api_algebra_session_factor_common_terms"></a>
<a id="placement-placement.wasm.wasm_module.module_factorcommonterms.83f0674fae02"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
factorCommonTerms(input_expression: Expression): Expression
```

Pull the greatest common monomial and exact rational content out of the terms of a general — not necessarily polynomial — sum, producing a single product of a common factor and a reduced sum, without invoking full polynomial factorization. For example, `6*x*y + 9*x^2*sin(z)` becomes `3*x*(2*y + 3*x*sin(z))`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_factorcommonterms.1a2013256c21"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.factorCommonTerms</code></p>

```typescript signature
factorCommonTerms(input_expression: Expression): Expression
```

</details>

## factorCommonTerms

<a id="entry-presentation_wasm_algebraic_transforms_capability_expression_transformations_factor_common_terms_api_expression_operations_expression_factor_common_terms"></a>
<a id="placement-placement.wasm.wasm_class.expression_factorcommonterms.b46aa49b5edb"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
factorCommonTerms(): Expression
```

Pull the greatest common monomial and exact rational content out of the terms of a general — not necessarily polynomial — sum, producing a single product of a common factor and a reduced sum, without invoking full polynomial factorization. For example, `6*x*y + 9*x^2*sin(z)` becomes `3*x*(2*y + 3*x*sin(z))`.

## freeVariables

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_free_variables_api_expression_free_variables"></a>
<a id="placement-placement.wasm.wasm_class.expression_freevariables.2b831cd5640c"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
freeVariables(): string[]
```

Sorted names of the free symbols. Bound binders (integration variables, image-set parameters) are excluded; the constants pi/e are not symbols.

## imageSetDomain

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_image_set_domain_api_expression_image_set_domain"></a>
<a id="placement-placement.wasm.wasm_class.expression_imagesetdomain.894cf5996d73"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
imageSetDomain(): Expression
```

The domain an `image_set` expression maps over.

## imageSetLambdaExpression

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_image_set_lambda_expression_api_expression_image_set_lambda_expression"></a>
<a id="placement-placement.wasm.wasm_class.expression_imagesetlambdaexpression.9537a3075b6e"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
imageSetLambdaExpression(): Expression
```

The body an `image_set` expression applies to its bound variable.

## imageSetVariable

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_image_set_variable_api_expression_image_set_variable"></a>
<a id="placement-placement.wasm.wasm_class.expression_imagesetvariable.c23ad4dbf4cb"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
imageSetVariable(): string
```

The name of the variable an `image_set` expression binds.

## imaginaryPart

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_imaginary_part_api_session_imaginary_part"></a>
<a id="placement-placement.wasm.wasm_module.module_imaginarypart.8a82c066b15a"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
imaginaryPart(input_expression: Expression): Expression
```

Return the exact imaginary component of an expression. For example, if `y` is declared real, `imaginary_part(exp(i*y))` is `sin(y)`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_imaginarypart.617f7b6602bb"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.imaginaryPart</code></p>

```typescript signature
imaginaryPart(value: ExpressionLike): Expression
```

<a id="placement-placement.wasm.wasm_class.context_imaginarypart.776c5cf4f0e7"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.imaginaryPart</code></p>

```typescript signature
imaginaryPart(input_expression: Expression): Expression
```

<a id="placement-placement.wasm.javascript_facade.symifacade_imaginarypart.5d66750ea9bf"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.imaginaryPart</code></p>

```typescript signature
imaginaryPart(value: ExpressionLike): Expression
```

</details>

## imaginaryPart

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_imaginary_part_api_expression_imaginary_part"></a>
<a id="placement-placement.wasm.javascript_facade.expression_imaginarypart.869495f47a9a"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
imaginaryPart(): Expression
```

Return the exact imaginary component of an expression. For example, if `y` is declared real, `imaginary_part(exp(i*y))` is `sin(y)`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_imaginarypart.8aff7315b620"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.imaginaryPart</code></p>

```typescript signature
imaginaryPart(): Expression
```

</details>

## integralIntegrand

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_integral_integrand_api_expression_integral_integrand"></a>
<a id="placement-placement.wasm.wasm_class.expression_integralintegrand.e27ba8e9a388"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
integralIntegrand(): Expression
```

The integrand of an unevaluated `integral` expression.

## integralLowerBound

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_integral_lower_bound_api_expression_integral_lower_bound"></a>
<a id="placement-placement.wasm.wasm_class.expression_integrallowerbound.9922f04b09ad"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
integralLowerBound(): Expression | undefined
```

`None` for indefinite integrals.

## integralUpperBound

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_integral_upper_bound_api_expression_integral_upper_bound"></a>
<a id="placement-placement.wasm.wasm_class.expression_integralupperbound.e819ab900c26"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
integralUpperBound(): Expression | undefined
```

The upper bound of an unevaluated `integral`, or `None` when it is indefinite.

## integralVariable

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_integral_variable_api_expression_integral_variable"></a>
<a id="placement-placement.wasm.wasm_class.expression_integralvariable.5d2186957c4e"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
integralVariable(): string
```

The name of the variable an unevaluated `integral` integrates over.

## intervalLower

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_interval_lower_api_expression_interval_lower"></a>
<a id="placement-placement.wasm.wasm_class.expression_intervallower.36837bbd1eec"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
intervalLower(): Expression
```

Lower endpoint of an interval node; raises on other shapes.

## intervalUpper

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_interval_upper_api_expression_interval_upper"></a>
<a id="placement-placement.wasm.wasm_class.expression_intervalupper.dfbef6dc04bc"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
intervalUpper(): Expression
```

The upper endpoint of an `interval` expression.

## isDefined

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_is_defined_api_expression_is_defined"></a>
<a id="placement-placement.wasm.javascript_facade.expression_isdefined.ba68953821c2"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isDefined(): boolean | null
```

Whether the expression is known to denote one scalar value at the active point.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_isdefined.767be28c2b33"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.isDefined</code></p>

```typescript signature
isDefined(): boolean | undefined
```

</details>

## isEquality

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_is_equality_api_expression_is_equality"></a>
<a id="placement-placement.wasm.wasm_class.expression_isequality.86f4b29381a0"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isEquality(): boolean
```

True for `equal(a, b)` relation nodes.

## isEquality

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_is_equality_api_matrix_operations_matrix_is_equality"></a>
<a id="placement-placement.wasm.wasm_class.matrix_isequality.df1325fbf5f8"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isEquality(): boolean
```

Always false: a matrix is never an `equal` relation node.

## isFinite

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_is_finite_api_expression_is_finite"></a>
<a id="placement-placement.wasm.javascript_facade.expression_isfinite.ec4bd13d38ab"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isFinite(): boolean | null
```

Whether the expression is known finite, or `None` when the assumptions cannot decide it.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_isfinite.424570d72876"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.isFinite</code></p>

```typescript signature
isFinite(): boolean | undefined
```

</details>

## isFiniteSet

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_is_finite_set_api_expression_is_finite_set"></a>
<a id="placement-placement.wasm.wasm_class.expression_isfiniteset.90bfc2fdaf03"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isFiniteSet(): boolean
```

Whether this expression is a `finite_set`.

## isFiniteSet

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_is_finite_set_api_matrix_operations_matrix_is_finite_set"></a>
<a id="placement-placement.wasm.wasm_class.matrix_isfiniteset.bb89df6933ea"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isFiniteSet(): boolean
```

Always false: a matrix is never a finite set.

## isImageSet

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_is_image_set_api_expression_is_image_set"></a>
<a id="placement-placement.wasm.wasm_class.expression_isimageset.5466d3ce260e"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isImageSet(): boolean
```

Whether this expression is an `image_set`.

## isImageSet

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_is_image_set_api_matrix_operations_matrix_is_image_set"></a>
<a id="placement-placement.wasm.wasm_class.matrix_isimageset.3fe74cafdfc3"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isImageSet(): boolean
```

Always false: a matrix is never an image set.

## isInteger

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_is_integer_api_expression_is_integer"></a>
<a id="placement-placement.wasm.javascript_facade.expression_isinteger.a645e50fd6f0"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isInteger(): boolean | null
```

Whether the expression is known to be an integer, or `None` when the assumptions cannot decide it.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_isinteger.97d2a50d8429"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.isInteger</code></p>

```typescript signature
isInteger(): boolean | undefined
```

</details>

## isIntegral

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_is_integral_api_expression_is_integral"></a>
<a id="placement-placement.wasm.wasm_class.expression_isintegral.aaf3a7607ea0"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isIntegral(): boolean
```

True for unevaluated integral nodes. (Distinct from the assumption query `is_integer`.)

## isIntegral

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_is_integral_api_matrix_operations_matrix_is_integral"></a>
<a id="placement-placement.wasm.wasm_class.matrix_isintegral.9e71f8fe0c10"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isIntegral(): boolean
```

Always false: a matrix is never an unevaluated integral node.

## isInterval

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_is_interval_api_expression_is_interval"></a>
<a id="placement-placement.wasm.wasm_class.expression_isinterval.c4ea28ca3bf2"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isInterval(): boolean
```

Whether this expression is an `interval`.

## isMatrix

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_is_matrix_api_expression_is_matrix"></a>
<a id="placement-placement.wasm.wasm_class.expression_ismatrix.c4b71b990067"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
readonly isMatrix: boolean
```

Always `False` on expressions and `True` on `matrix` objects, so mixed result streams can be discriminated.

## isMatrix

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_is_matrix_api_matrix_operations_matrix_is_matrix"></a>
<a id="placement-placement.wasm.wasm_class.matrix_ismatrix.49764165c804"></a>
<p class="symi-entry-owner">Matrix property</p>

```typescript signature
readonly isMatrix: boolean
```

Always `False` on expressions and `True` on `matrix` objects, so mixed result streams can be discriminated.

## isNegative

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_is_negative_api_expression_is_negative"></a>
<a id="placement-placement.wasm.javascript_facade.expression_isnegative.215cc4b539f3"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isNegative(): boolean | null
```

Whether the expression is known to be negative, or `None` when the assumptions cannot decide it.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_isnegative.575a1576c858"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.isNegative</code></p>

```typescript signature
isNegative(): boolean | undefined
```

</details>

## isNonnegative

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_is_nonnegative_api_expression_is_nonnegative"></a>
<a id="placement-placement.wasm.javascript_facade.expression_isnonnegative.a0bbd36976fc"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isNonnegative(): boolean | null
```

Answers whether the expression is nonnegative in the extended-real universe. Non-real values are refuted; unsupported real expressions remain `None`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_isnonnegative.05a865e90f81"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.isNonnegative</code></p>

```typescript signature
isNonnegative(): boolean | undefined
```

</details>

## isNonzero

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_is_nonzero_api_expression_is_nonzero"></a>
<a id="placement-placement.wasm.javascript_facade.expression_isnonzero.cee90ac676f3"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isNonzero(): boolean | null
```

Whether the expression is known to be nonzero, or `None` when the assumptions cannot decide it.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_isnonzero.a92613e21491"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.isNonzero</code></p>

```typescript signature
isNonzero(): boolean | undefined
```

</details>

## isPositive

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_is_positive_api_expression_is_positive"></a>
<a id="placement-placement.wasm.javascript_facade.expression_ispositive.5a6cf1d747f2"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isPositive(): boolean | null
```

Whether the expression is known to be positive, or `None` when the assumptions cannot decide it.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_ispositive.f0a589e1849f"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.isPositive</code></p>

```typescript signature
isPositive(): boolean | undefined
```

</details>

## isPositive

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_is_positive_api_matrix_operations_matrix_is_positive"></a>
<a id="placement-placement.wasm.wasm_class.matrix_ispositive.27aac02052db"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isPositive(): boolean | undefined
```

Always `None`: positivity is a property of the entries, not of the matrix.

## isRational

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_is_rational_api_expression_is_rational"></a>
<a id="placement-placement.wasm.javascript_facade.expression_isrational.c5942929964d"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isRational(): boolean | null
```

Whether the expression is known to be rational, or `None` when the assumptions cannot decide it.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_isrational.86f2ab150cd1"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.isRational</code></p>

```typescript signature
isRational(): boolean | undefined
```

</details>

## isReal

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_is_real_api_expression_is_real"></a>
<a id="placement-placement.wasm.javascript_facade.expression_isreal.418cb2d56d52"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isReal(): boolean | null
```

Whether the expression is known to be real, or `None` when the assumptions cannot decide it.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_isreal.f26c33fb44d3"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.isReal</code></p>

```typescript signature
isReal(): boolean | undefined
```

</details>

## isReal

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_is_real_api_matrix_operations_matrix_is_real"></a>
<a id="placement-placement.wasm.wasm_class.matrix_isreal.6f1011db22cc"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isReal(): boolean | undefined
```

Always `None`: realness is a property of the entries, not of the matrix.

## isStale

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_is_stale_api_expression_is_stale"></a>
<a id="placement-placement.wasm.wasm_class.expression_isstale.71f8cf8528d5"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isStale(): boolean
```

Reports whether resetting the owning context invalidated the expression. All other operations reject a stale receiver with an actionable error.

## isUnion

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_is_union_api_expression_is_union"></a>
<a id="placement-placement.wasm.wasm_class.expression_isunion.b55d87d040a7"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isUnion(): boolean
```

Whether this expression is a union of sets.

## isUnion

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_is_union_api_matrix_operations_matrix_is_union"></a>
<a id="placement-placement.wasm.wasm_class.matrix_isunion.7e398215393b"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isUnion(): boolean
```

Always false: a matrix is never a union of sets.

## negate

<a id="entry-presentation_wasm_expressions_capability_expression_transformations_negate_api_expression_negate"></a>
<a id="placement-placement.wasm.javascript_facade.expression_negate.1e2d3469633f"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
negate(): Expression
```

Negation of this expression.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_negate.2e41e0b07df3"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.negate</code></p>

```typescript signature
negate(): Expression
```

</details>

## nodeCount

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_node_count_api_expression_node_count"></a>
<a id="placement-placement.wasm.wasm_class.expression_nodecount.81983e8a3143"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
nodeCount(): number
```

Number of nodes in the expression tree — the size measure used by the simplifier; useful for comparing alternative forms.

## numerator

<a id="entry-presentation_wasm_expressions_capability_expression_transformations_numerator_api_session_numerator"></a>
<a id="placement-placement.wasm.wasm_module.module_numerator.86af5abc3af7"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
numerator(input_expression: Expression): Expression
```

Returns the structural numerator from `numerator_denominator`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_numerator.9937af07591e"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.numerator</code></p>

```typescript signature
numerator(input_expression: Expression): Expression
```

</details>

## numerator

<a id="entry-presentation_wasm_expressions_capability_expression_transformations_numerator_api_expression_numerator"></a>
<a id="placement-placement.wasm.javascript_facade.expression_numerator.3d9f01a0881d"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
numerator(): Expression
```

Returns the structural numerator from `numerator_denominator`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_numerator.093c06d610d6"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.numerator</code></p>

```typescript signature
numerator(): Expression
```

</details>

## numerator

<a id="entry-presentation_wasm_expressions_capability_expression_transformations_numerator_api_results_numeratordenominator_numerator"></a>
<a id="placement-placement.wasm.javascript_facade.numeratordenominator_numerator.875fb10bce86"></a>
<p class="symi-entry-owner">NumeratorDenominator property</p>

```typescript signature
numerator: Expression
```

Returns the structural numerator from `numerator_denominator`.

## numeratorDenominator

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_numerator_denominator_api_session_numerator_denominator"></a>
<a id="placement-placement.wasm.wasm_module.module_numeratordenominator.ed37930aa207"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
numeratorDenominator(input_expression: Expression): Expression[]
```

Returns the exact structural numerator and denominator without combining sums or cancelling factors. Python returns a two-tuple and the JavaScript facade returns a record.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_numeratordenominator.4d682728a341"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.numeratorDenominator</code></p>

```typescript signature
numeratorDenominator(value: ExpressionLike): NumeratorDenominator
```

<a id="placement-placement.wasm.wasm_class.context_numeratordenominator.1958e57cd14a"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.numeratorDenominator</code></p>

```typescript signature
numeratorDenominator(input_expression: Expression): Expression[]
```

<a id="placement-placement.wasm.javascript_facade.symifacade_numeratordenominator.52fe19194901"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.numeratorDenominator</code></p>

```typescript signature
numeratorDenominator(value: ExpressionLike): NumeratorDenominator
```

</details>

## numeratorDenominator

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_numerator_denominator_api_expression_numerator_denominator"></a>
<a id="placement-placement.wasm.javascript_facade.expression_numeratordenominator.a6fbcb7d0d59"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
numeratorDenominator(): NumeratorDenominator
```

Returns the exact structural numerator and denominator without combining sums or cancelling factors. Python returns a two-tuple and the JavaScript facade returns a record.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_numeratordenominator.016a31025e26"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.numeratorDenominator</code></p>

```typescript signature
numeratorDenominator(): Expression[]
```

</details>

## partialFractions

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_partial_fractions_api_algebra_session_partial_fractions"></a>
<a id="placement-placement.wasm.wasm_module.module_partialfractions.35aaeff54bae"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
partialFractions(
    input_expression: Expression,
    variable: string,
): Expression
```

Decompose a rational expression into polynomial and proper-fraction terms over the named variable.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_partialfractions.c9e0f734b93a"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.partialFractions</code></p>

```typescript signature
partialFractions(
    input_expression: Expression,
    variable: string,
): Expression
```

</details>

## partialFractions

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_partial_fractions_api_expression_operations_expression_partial_fractions"></a>
<a id="placement-placement.wasm.wasm_class.expression_partialfractions.cd98977fa321"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
partialFractions(variable: string): Expression
```

Decompose a rational expression into polynomial and proper-fraction terms over the named variable.

## piecewiseFold

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_piecewise_fold_api_solving_session_piecewise_fold"></a>
<a id="placement-placement.wasm.wasm_module.module_piecewisefold.e933070f4d72"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
piecewiseFold(input_expression: Expression): Expression
```

Expand `abs`, `signum`, and `heaviside_step` definitions recursively and fold piecewise operands of sums, products, powers, factorials, and ordinary function calls into one top-level piecewise expression. For example, `x*abs(x - 1)` becomes the exact two-branch definition with values `x*(x - 1)` and `-x*(x - 1)`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_piecewisefold.d8dc6b0c9df5"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.piecewiseFold</code></p>

```typescript signature
piecewiseFold(input_expression: Expression): Expression
```

</details>

## piecewiseFold

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_piecewise_fold_api_expression_operations_expression_piecewise_fold"></a>
<a id="placement-placement.wasm.wasm_class.expression_piecewisefold.3d9ec0c834c8"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
piecewiseFold(): Expression
```

Expand `abs`, `signum`, and `heaviside_step` definitions recursively and fold piecewise operands of sums, products, powers, factorials, and ordinary function calls into one top-level piecewise expression. For example, `x*abs(x - 1)` becomes the exact two-branch definition with values `x*(x - 1)` and `-x*(x - 1)`.

## power

<a id="entry-presentation_wasm_expressions_capability_expression_transformations_power_api_expression_power"></a>
<a id="placement-placement.wasm.javascript_facade.expression_power.87eb729715d1"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
power(exponent: ExpressionLike): Expression
```

This expression raised to `exponent`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_power.61c34f700b84"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.power</code></p>

```typescript signature
power(exponent: Expression): Expression
```

</details>

## presentationNormalForm

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_presentation_normal_form_api_algebra_session_presentation_normal_form"></a>
<a id="placement-placement.wasm.wasm_module.module_presentationnormalform.53908ce4871d"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
presentationNormalForm(input_expression: Expression): Expression
```

The cheap, bounded display-oriented pass run at solver output seams: rational normal form only, kept only when the weighted complexity does not grow. Unlike `simplify` it never runs the full heuristic ladder, so it is fast and deterministic in shape.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_presentationnormalform.265113e13a9d"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.presentationNormalForm</code></p>

```typescript signature
presentationNormalForm(input_expression: Expression): Expression
```

</details>

## presentationNormalForm

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_presentation_normal_form_api_expression_operations_expression_presentation_normal_form"></a>
<a id="placement-placement.wasm.wasm_class.expression_presentationnormalform.af5e499aeb25"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
presentationNormalForm(): Expression
```

The cheap, bounded display-oriented pass run at solver output seams: rational normal form only, kept only when the weighted complexity does not grow. Unlike `simplify` it never runs the full heuristic ladder, so it is fast and deterministic in shape.

## rationalizeDenominator

<a id="entry-presentation_wasm_algebraic_transforms_capability_expression_transformations_rationalize_denominator_api_algebra_session_rationalize_denominator"></a>
<a id="placement-placement.wasm.wasm_module.module_rationalizedenominator.ba11f83ec318"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
rationalizeDenominator(input_expression: Expression): Expression
```

Rationalize a radical denominator through exact multiquadratic conjugation or extended-Euclidean inversion in one rational n-th-root extension. For example, `1 / (sqrt(3) - sqrt(2))` becomes `sqrt(3) + sqrt(2)`, and `1 / (1 + 2^(1/3))` becomes `(1 - 2^(1/3) + 2^(2/3))/3`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_rationalizedenominator.651ecc69ab9f"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.rationalizeDenominator</code></p>

```typescript signature
rationalizeDenominator(input_expression: Expression): Expression
```

</details>

## rationalizeDenominator

<a id="entry-presentation_wasm_algebraic_transforms_capability_expression_transformations_rationalize_denominator_api_expression_operations_expression_rationalize_denominator"></a>
<a id="placement-placement.wasm.wasm_class.expression_rationalizedenominator.9a1f6b3cc535"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
rationalizeDenominator(): Expression
```

Rationalize a radical denominator through exact multiquadratic conjugation or extended-Euclidean inversion in one rational n-th-root extension. For example, `1 / (sqrt(3) - sqrt(2))` becomes `sqrt(3) + sqrt(2)`, and `1 / (1 + 2^(1/3))` becomes `(1 - 2^(1/3) + 2^(2/3))/3`.

## realPart

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_real_part_api_session_real_part"></a>
<a id="placement-placement.wasm.wasm_module.module_realpart.030dff7e14eb"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
realPart(input_expression: Expression): Expression
```

Return the exact real component of an expression. For example, if `y` is declared real, `real_part(exp(i*y))` is `cos(y)`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_realpart.dde44e15175b"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.realPart</code></p>

```typescript signature
realPart(value: ExpressionLike): Expression
```

<a id="placement-placement.wasm.wasm_class.context_realpart.ef73b6cb1c14"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.realPart</code></p>

```typescript signature
realPart(input_expression: Expression): Expression
```

<a id="placement-placement.wasm.javascript_facade.symifacade_realpart.24ce21e1ba1d"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.realPart</code></p>

```typescript signature
realPart(value: ExpressionLike): Expression
```

</details>

## realPart

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_real_part_api_expression_real_part"></a>
<a id="placement-placement.wasm.javascript_facade.expression_realpart.96ac58cb8855"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
realPart(): Expression
```

Return the exact real component of an expression. For example, if `y` is declared real, `real_part(exp(i*y))` is `cos(y)`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_realpart.0ae125d73af1"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.realPart</code></p>

```typescript signature
realPart(): Expression
```

</details>

## rewriteAsExponential

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_rewrite_as_exponential_api_algebra_session_rewrite_as_exponential"></a>
<a id="placement-placement.wasm.wasm_module.module_rewriteasexponential.2432173e98c8"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
rewriteAsExponential(input_expression: Expression): Expression
```

Euler-form rewriter: replace every trigonometric/hyperbolic call with the equivalent complex-exponential expression (bottom-up).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_rewriteasexponential.ead7eee76381"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.rewriteAsExponential</code></p>

```typescript signature
rewriteAsExponential(input_expression: Expression): Expression
```

</details>

## rewriteAsExponential

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_rewrite_as_exponential_api_expression_operations_expression_rewrite_as_exponential"></a>
<a id="placement-placement.wasm.wasm_class.expression_rewriteasexponential.4b402839fe68"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
rewriteAsExponential(): Expression
```

Euler-form rewriter: replace every trigonometric/hyperbolic call with the equivalent complex-exponential expression (bottom-up).

## rewriteAsTrigonometric

<a id="entry-presentation_wasm_trigonometric_complex_rewrites_capability_expression_transformations_rewrite_as_trigonometric_api_algebra_session_rewrite_as_trigonometric"></a>
<a id="placement-placement.wasm.wasm_module.module_rewriteastrigonometric.144585f41e3f"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
rewriteAsTrigonometric(input_expression: Expression): Expression
```

Inverse of `rewrite_as_exponential`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_rewriteastrigonometric.90428578b902"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.rewriteAsTrigonometric</code></p>

```typescript signature
rewriteAsTrigonometric(input_expression: Expression): Expression
```

</details>

## rewriteAsTrigonometric

<a id="entry-presentation_wasm_trigonometric_complex_rewrites_capability_expression_transformations_rewrite_as_trigonometric_api_expression_operations_expression_rewrite_as_trigonometric"></a>
<a id="placement-placement.wasm.wasm_class.expression_rewriteastrigonometric.825595943505"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
rewriteAsTrigonometric(): Expression
```

Inverse of `rewrite_as_exponential`.

## rewriteInTermsOf

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_rewrite_in_terms_of_api_algebra_session_rewrite_in_terms_of"></a>
<a id="placement-placement.wasm.wasm_module.module_rewriteintermsof.6b03bacbc907"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
rewriteInTermsOf(
    target: Expression,
    source: Expression,
    replacement: Expression,
): Expression
```

Rewrite the target in terms of `replacement` under the caller-supplied formal relation `replacement = source`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_rewriteintermsof.0eada73db806"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.rewriteInTermsOf</code></p>

```typescript signature
rewriteInTermsOf(
    target: Expression,
    source: Expression,
    replacement: Expression,
): Expression
```

</details>

## rewriteInTermsOf

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_rewrite_in_terms_of_api_expression_operations_expression_rewrite_in_terms_of"></a>
<a id="placement-placement.wasm.wasm_class.expression_rewriteintermsof.d205de912a41"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
rewriteInTermsOf(
    source: Expression,
    replacement: Expression,
): Expression
```

Rewrite the target in terms of `replacement` under the caller-supplied formal relation `replacement = source`.

## rewriteSpecialFunctions

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_rewrite_special_functions_api_session_rewrite_special_functions"></a>
<a id="placement-placement.wasm.wasm_module.module_rewritespecialfunctions.dc570b354656"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
rewriteSpecialFunctions(
    input_expression: Expression,
    basis: string,
): Expression
```

Rewrite beta, gamma, binomial, factorial, and rising-factorial representations into the requested `"gamma"`, `"factorial"`, `"binomial"`, or `"rising_factorial"` basis. The exact identities are applied only when their domain gates are proven: factorial and binomial conversions require the relevant non-negative integers, rising-factorial conversions additionally require a positive base, and beta-to-gamma requires two positive arguments. For example, with `n` declared a positive integer, `n!` may be rewritten into the gamma basis and `gamma(n)` into the factorial basis. A site with unconstrained arguments is returned unchanged. Gamma ratios with a literal non-negative argument offset are minimized to their exact shifted product.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_rewritespecialfunctions.9a756b368915"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.rewriteSpecialFunctions</code></p>

```typescript signature
rewriteSpecialFunctions(
    input_expression: Expression,
    basis: string,
): Expression
```

</details>

## rewriteSpecialFunctions

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_rewrite_special_functions_api_expression_rewrite_special_functions"></a>
<a id="placement-placement.wasm.wasm_class.expression_rewritespecialfunctions.590d4aee2a54"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
rewriteSpecialFunctions(basis: string): Expression
```

Rewrite beta, gamma, binomial, factorial, and rising-factorial representations into the requested `"gamma"`, `"factorial"`, `"binomial"`, or `"rising_factorial"` basis. The exact identities are applied only when their domain gates are proven: factorial and binomial conversions require the relevant non-negative integers, rising-factorial conversions additionally require a positive base, and beta-to-gamma requires two positive arguments. For example, with `n` declared a positive integer, `n!` may be rewritten into the gamma basis and `gamma(n)` into the factorial basis. A site with unconstrained arguments is returned unchanged. Gamma ratios with a literal non-negative argument offset are minimized to their exact shifted product.

## rewriteTrigonometricBasis

<a id="entry-presentation_wasm_trigonometric_complex_rewrites_capability_expression_transformations_rewrite_trigonometric_basis_api_session_rewrite_trigonometric_basis"></a>
<a id="placement-placement.wasm.wasm_module.module_rewritetrigonometricbasis.5eb3b463d234"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
rewriteTrigonometricBasis(
    input_expression: Expression,
    basis: string,
): Expression
```

Rewrite trigonometric and hyperbolic calls toward one of five named bases: `sine_cosine`, `tangent`, `exponential`, `trigonometric`, or `hyperbolic`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_rewritetrigonometricbasis.9ea791c98c65"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.rewriteTrigonometricBasis</code></p>

```typescript signature
rewriteTrigonometricBasis(
    input_expression: Expression,
    basis: string,
): Expression
```

</details>

## rewriteTrigonometricBasis

<a id="entry-presentation_wasm_trigonometric_complex_rewrites_capability_expression_transformations_rewrite_trigonometric_basis_api_expression_rewrite_trigonometric_basis"></a>
<a id="placement-placement.wasm.wasm_class.expression_rewritetrigonometricbasis.874f98eb58f4"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
rewriteTrigonometricBasis(basis: string): Expression
```

Rewrite trigonometric and hyperbolic calls toward one of five named bases: `sine_cosine`, `tangent`, `exponential`, `trigonometric`, or `hyperbolic`.

## simplify

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_simplify_api_assumptionscope_simplify"></a>
<a id="placement-placement.wasm.javascript_facade.assumptionscope_simplify.76d00d707442"></a>
<p class="symi-entry-owner">AssumptionScope method</p>

```typescript signature
simplify(value: ExpressionLike): Expression
```

Simplify an expression using the scope's immutable assumptions.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.assumptionscope_simplify.08324753316d"></a>
<p class="symi-entry-owner">AssumptionScope method: <code>AssumptionScope.simplify</code></p>

```typescript signature
simplify(input_expression: Expression): Expression
```

</details>

## simplify

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_simplify_api_session_simplify"></a>
<a id="placement-placement.wasm.wasm_module.module_simplify.fc6200454a69"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
simplify(input_expression: Expression): Expression
```

The full heuristic simplification ladder: weighted-complexity-guided search over rational normal form, radical denesting, trigonometric/log rewrites, parity and absolute-value rules. The result is never accepted if its weighted complexity grows. Principal square roots extract structural square content only under a realness proof: `sqrt(x^2)` becomes `abs(x)` for real `x`, while `sqrt(z^2)` remains unchanged for a default-complex `z`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_simplify.2c562eb70380"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.simplify</code></p>

```typescript signature
simplify(input_expression: Expression): Expression
```

</details>

## simplify

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_simplify_api_expression_simplify"></a>
<a id="placement-placement.wasm.wasm_class.expression_simplify.c10646d9d93b"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
simplify(): Expression
```

The full heuristic simplification ladder: weighted-complexity-guided search over rational normal form, radical denesting, trigonometric/log rewrites, parity and absolute-value rules. The result is never accepted if its weighted complexity grows. Principal square roots extract structural square content only under a realness proof: `sqrt(x^2)` becomes `abs(x)` for real `x`, while `sqrt(z^2)` remains unchanged for a default-complex `z`.

## simplifyTrigonometric

<a id="entry-presentation_wasm_trigonometric_complex_rewrites_capability_expression_transformations_simplify_trigonometric_api_session_simplify_trigonometric"></a>
<a id="placement-placement.wasm.wasm_module.module_simplifytrigonometric.ad2187f785f4"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
simplifyTrigonometric(input_expression: Expression): Expression
```

Fu-style trigonometric simplification toward fewer/cheaper trig calls.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_simplifytrigonometric.7691da56d683"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.simplifyTrigonometric</code></p>

```typescript signature
simplifyTrigonometric(input_expression: Expression): Expression
```

</details>

## simplifyTrigonometric

<a id="entry-presentation_wasm_trigonometric_complex_rewrites_capability_expression_transformations_simplify_trigonometric_api_expression_simplify_trigonometric"></a>
<a id="placement-placement.wasm.wasm_class.expression_simplifytrigonometric.f20902a32327"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
simplifyTrigonometric(): Expression
```

Fu-style trigonometric simplification toward fewer/cheaper trig calls.

## substitute

<a id="entry-presentation_wasm_expressions_capability_expression_transformations_substitute_api_expression_substitute"></a>
<a id="placement-placement.wasm.wasm_class.expression_substitute.617d58709370"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
substitute(variable: string, value: Expression): Expression
```

Replace every free occurrence of the named symbol with `value`, re-running auto-simplification.

## symbolName

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_symbol_name_api_expression_symbol_name"></a>
<a id="placement-placement.wasm.javascript_facade.expression_symbolname.5aadc5ef70f0"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
symbolName(): string
```

Returns the name of a symbol expression and rejects every other expression kind.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_symbolname.4c98a64aafac"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.symbolName</code></p>

```typescript signature
symbolName(): string
```

</details>

## toList

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_to_list_api_expression_to_list"></a>
<a id="placement-placement.wasm.wasm_class.expression_tolist.448f0522ff8b"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
toList(): Expression[]
```

Elements of a finite set; raises on other shapes. Python finite sets also support `len()` and iteration.

## toString

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_to_string_api_assumptionproposition_to_string"></a>
<a id="placement-placement.wasm.wasm_class.assumptionproposition_tostring.ac1a37e09f72"></a>
<p class="symi-entry-owner">AssumptionProposition method</p>

```typescript signature
toString(): string
```

Return the canonical formula spelling.

## toString

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_to_string_api_expression_to_string"></a>
<a id="placement-placement.wasm.wasm_class.expression_tostring.f64870e2f750"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
toString(): string
```

The mathematical text of the expression.

## together

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_together_api_session_together"></a>
<a id="placement-placement.wasm.wasm_module.module_together.6ebbfd66d49a"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
together(input_expression: Expression): Expression
```

Combine a sum of fractions over a common denominator. On Symi's representation `together` and `cancel` coincide; both names exist because they are distinct user intents.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_together.9e3d503c834f"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.together</code></p>

```typescript signature
together(value: ExpressionLike): Expression
```

<a id="placement-placement.wasm.wasm_class.context_together.5c7d3ca8458a"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.together</code></p>

```typescript signature
together(input_expression: Expression): Expression
```

<a id="placement-placement.wasm.javascript_facade.symifacade_together.63d6c1df067d"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.together</code></p>

```typescript signature
together(value: ExpressionLike): Expression
```

</details>

## together

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_together_api_expression_together"></a>
<a id="placement-placement.wasm.javascript_facade.expression_together.d11878327d8a"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
together(): Expression
```

Combine a sum of fractions over a common denominator. On Symi's representation `together` and `cancel` coincide; both names exist because they are distinct user intents.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_together.25148d8a4726"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.together</code></p>

```typescript signature
together(): Expression
```

</details>

## unionComponents

<a id="entry-presentation_wasm_simplification_general_capability_expression_transformations_union_components_api_expression_union_components"></a>
<a id="placement-placement.wasm.wasm_class.expression_unioncomponents.ba40c4145e3b"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
unionComponents(): Expression[]
```

The components of a set union, as a list of expressions.

## Circle2d

<a id="entry-presentation_wasm_geometry_capability_geometry_circle_2d_api_circle2d"></a>
<a id="placement-placement.wasm.wasm_class.circle2d.b811b7e71dd1"></a>
<p class="symi-entry-owner">Circle2d constructor</p>

```typescript signature
new Circle2d(center: Point2d, radius: Expression)
```

Construct the circle with the given center and radius.

## Point2d

<a id="entry-presentation_wasm_geometry_capability_geometry_point_2d_api_point2d"></a>
<a id="placement-placement.wasm.wasm_class.point2d.dca54a617fe2"></a>
<p class="symi-entry-owner">Point2d constructor</p>

```typescript signature
new Point2d(x: Expression, y: Expression)
```

Construct the point `(x, y)`.

## Polygon2d

<a id="entry-presentation_wasm_geometry_capability_geometry_polygon_2d_api_polygon2d"></a>
<a id="placement-placement.wasm.wasm_class.polygon2d.4810488732bd"></a>
<p class="symi-entry-owner">Polygon2d constructor</p>

```typescript signature
new Polygon2d(vertices: Point2d[])
```

Construct the polygon with the given vertices, in order.

## Segment2d

<a id="entry-presentation_wasm_geometry_capability_geometry_segment_2d_api_segment2d"></a>
<a id="placement-placement.wasm.wasm_class.segment2d.119b443ccd78"></a>
<p class="symi-entry-owner">Segment2d constructor</p>

```typescript signature
new Segment2d(start: Point2d, end: Point2d)
```

Construct the segment running from `start` to `end`.

## Triangle2d

<a id="entry-presentation_wasm_geometry_capability_geometry_triangle_2d_api_triangle2d"></a>
<a id="placement-placement.wasm.wasm_class.triangle2d.73179d4e894b"></a>
<p class="symi-entry-owner">Triangle2d constructor</p>

```typescript signature
new Triangle2d(point_a: Point2d, point_b: Point2d, point_c: Point2d)
```

Construct the triangle with the given vertices.

## angle

<a id="entry-presentation_wasm_geometry_capability_geometry_angle_api_results_vertexangle_angle"></a>
<a id="placement-placement.wasm.wasm_class.vertexangle_angle.987977655236"></a>
<p class="symi-entry-owner">VertexAngle property</p>

```typescript signature
readonly angle: Expression
```

The interior angle at the vertex.

## area

<a id="entry-presentation_wasm_geometry_capability_geometry_area_api_circle2d_area"></a>
<a id="placement-placement.wasm.wasm_class.circle2d_area.743b71e37a1b"></a>
<p class="symi-entry-owner">Circle2d method</p>

```typescript signature
area(): Expression
```

Area of the circle, \(\pi r^2\).

## area

<a id="entry-presentation_wasm_geometry_capability_geometry_area_api_polygon2d_area"></a>
<a id="placement-placement.wasm.wasm_class.polygon2d_area.7c6f2cf22633"></a>
<p class="symi-entry-owner">Polygon2d method</p>

```typescript signature
area(): Expression
```

Shoelace area of the polygon.

## area

<a id="entry-presentation_wasm_geometry_capability_geometry_area_api_triangle2d_area"></a>
<a id="placement-placement.wasm.wasm_class.triangle2d_area.33cc19cca2b3"></a>
<p class="symi-entry-owner">Triangle2d method</p>

```typescript signature
area(): Expression
```

Shoelace area of the triangle.

## center

<a id="entry-presentation_wasm_geometry_capability_geometry_center_api_circle2d_center"></a>
<a id="placement-placement.wasm.wasm_class.circle2d_center.0e20868fec4f"></a>
<p class="symi-entry-owner">Circle2d property</p>

```typescript signature
readonly center: Point2d
```

The center of the circle.

## centroid

<a id="entry-presentation_wasm_geometry_capability_geometry_centroid_api_polygon2d_centroid"></a>
<a id="placement-placement.wasm.wasm_class.polygon2d_centroid.5adb349efb75"></a>
<p class="symi-entry-owner">Polygon2d method</p>

```typescript signature
centroid(): Point2d
```

Centroid of the polygon's vertices.

## centroid

<a id="entry-presentation_wasm_geometry_capability_geometry_centroid_api_geometry_operations_triangle2d_centroid"></a>
<a id="placement-placement.wasm.wasm_class.triangle2d_centroid.7503e63742f6"></a>
<p class="symi-entry-owner">Triangle2d method</p>

```typescript signature
centroid(): Point2d
```

Centroid of the triangle's vertices.

## circle2d

<a id="entry-presentation_wasm_geometry_capability_geometry_circle_2d_api_session_circle_2d"></a>
<a id="placement-placement.wasm.wasm_class.context_circle2d.b6b5bff08685"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
circle2d(center: Point2d, radius: Expression): Circle2d
```

Construct the circle with the given center and radius.

## circumference

<a id="entry-presentation_wasm_geometry_capability_geometry_circumference_api_circle2d_circumference"></a>
<a id="placement-placement.wasm.wasm_class.circle2d_circumference.6d0e340e969d"></a>
<p class="symi-entry-owner">Circle2d method</p>

```typescript signature
circumference(): Expression
```

Circumference of the circle.

## coordinates

<a id="entry-presentation_wasm_geometry_capability_geometry_coordinates_api_point2d_coordinates"></a>
<a id="placement-placement.wasm.wasm_class.point2d_coordinates.16f05ca0798a"></a>
<p class="symi-entry-owner">Point2d method</p>

```typescript signature
coordinates(): Expression[]
```

The `(x, y)` coordinate pair of the point.

## distanceTo

<a id="entry-presentation_wasm_geometry_capability_geometry_distance_to_api_point2d_distance_to"></a>
<a id="placement-placement.wasm.wasm_class.point2d_distanceto.7fec84f47201"></a>
<p class="symi-entry-owner">Point2d method</p>

```typescript signature
distanceTo(other: Point2d): Expression
```

Euclidean distance, exact (a `sqrt` expression in general).

## equation

<a id="entry-presentation_wasm_geometry_capability_geometry_equation_api_geometry_operations_circle2d_equation"></a>
<a id="placement-placement.wasm.wasm_class.circle2d_equation.f2d8bb126725"></a>
<p class="symi-entry-owner">Circle2d method</p>

```typescript signature
equation(variable_x: string, variable_y: string): Expression
```

The circle as an `equal` relation in x and y.

## equation

<a id="entry-presentation_wasm_geometry_capability_geometry_equation_api_partial_differential_equations_partialdifferentialequationproblem_equation"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationproblem_equation.f2fc4e648569"></a>
<p class="symi-entry-owner">PartialDifferentialEquationProblem property</p>

```typescript signature
readonly equation: Expression
```

The governing residual, interpreted as equal to zero.

## interiorAngles

<a id="entry-presentation_wasm_geometry_capability_geometry_interior_angles_api_geometry_operations_polygon2d_interior_angles"></a>
<a id="placement-placement.wasm.wasm_class.polygon2d_interiorangles.d871d0f39590"></a>
<p class="symi-entry-owner">Polygon2d method</p>

```typescript signature
interiorAngles(): VertexAngle[]
```

Each vertex paired with its interior angle. Notes: WASM returns `vertex_angle` objects with `vertex`/`angle` getters.

## interiorAngles

<a id="entry-presentation_wasm_geometry_capability_geometry_interior_angles_api_geometry_operations_triangle2d_interior_angles"></a>
<a id="placement-placement.wasm.wasm_class.triangle2d_interiorangles.4cd4d0d93fa8"></a>
<p class="symi-entry-owner">Triangle2d method</p>

```typescript signature
interiorAngles(): VertexAngle[]
```

Each vertex paired with its interior angle. Notes: WASM returns `vertex_angle` objects with `vertex`/`angle` getters.

## intersection

<a id="entry-presentation_wasm_geometry_capability_geometry_intersection_api_circle2d_intersection"></a>
<a id="placement-placement.wasm.wasm_class.circle2d_intersection.a7bed6c77edd"></a>
<p class="symi-entry-owner">Circle2d method</p>

```typescript signature
intersection(other: any): any[]
```

Return the complete exact boundary intersection with another supported plane geometry.

## intersection

<a id="entry-presentation_wasm_geometry_capability_geometry_intersection_api_point2d_intersection"></a>
<a id="placement-placement.wasm.wasm_class.point2d_intersection.031a02927b5c"></a>
<p class="symi-entry-owner">Point2d method</p>

```typescript signature
intersection(other: any): any[]
```

Return the complete exact boundary intersection with another supported plane geometry.

## intersection

<a id="entry-presentation_wasm_geometry_capability_geometry_intersection_api_polygon2d_intersection"></a>
<a id="placement-placement.wasm.wasm_class.polygon2d_intersection.5d3e8cf15ec1"></a>
<p class="symi-entry-owner">Polygon2d method</p>

```typescript signature
intersection(other: any): any[]
```

Return the complete exact boundary intersection with another supported plane geometry.

## intersection

<a id="entry-presentation_wasm_geometry_capability_geometry_intersection_api_segment2d_intersection"></a>
<a id="placement-placement.wasm.wasm_class.segment2d_intersection.f98c7d6bf866"></a>
<p class="symi-entry-owner">Segment2d method</p>

```typescript signature
intersection(other: any): any[]
```

Return the complete exact boundary intersection with another supported plane geometry.

## intersection

<a id="entry-presentation_wasm_geometry_capability_geometry_intersection_api_triangle2d_intersection"></a>
<a id="placement-placement.wasm.wasm_class.triangle2d_intersection.bbb401de2277"></a>
<p class="symi-entry-owner">Triangle2d method</p>

```typescript signature
intersection(other: any): any[]
```

Return the complete exact boundary intersection with another supported plane geometry.

## length

<a id="entry-presentation_wasm_geometry_capability_geometry_length_api_segment2d_length"></a>
<a id="placement-placement.wasm.wasm_class.segment2d_length.b45e4ea3f5e4"></a>
<p class="symi-entry-owner">Segment2d method</p>

```typescript signature
length(): Expression
```

Length of the segment.

## midpoint

<a id="entry-presentation_wasm_geometry_capability_geometry_midpoint_api_segment2d_midpoint"></a>
<a id="placement-placement.wasm.wasm_class.segment2d_midpoint.62abdcfc22e3"></a>
<p class="symi-entry-owner">Segment2d method</p>

```typescript signature
midpoint(): Point2d
```

Midpoint of the segment.

## perimeter

<a id="entry-presentation_wasm_geometry_capability_geometry_perimeter_api_polygon2d_perimeter"></a>
<a id="placement-placement.wasm.wasm_class.polygon2d_perimeter.a5ef1f895818"></a>
<p class="symi-entry-owner">Polygon2d method</p>

```typescript signature
perimeter(): Expression
```

Perimeter of the polygon, the sum of its edge lengths.

## perimeter

<a id="entry-presentation_wasm_geometry_capability_geometry_perimeter_api_triangle2d_perimeter"></a>
<a id="placement-placement.wasm.wasm_class.triangle2d_perimeter.227221b7c2c3"></a>
<p class="symi-entry-owner">Triangle2d method</p>

```typescript signature
perimeter(): Expression
```

Perimeter of the triangle, the sum of its side lengths.

## perpendicularBisectorEquation

<a id="entry-presentation_wasm_geometry_capability_geometry_perpendicular_bisector_equation_api_geometry_operations_segment2d_perpendicular_bisector_equation"></a>
<a id="placement-placement.wasm.wasm_class.segment2d_perpendicularbisectorequation.d8f930147b9c"></a>
<p class="symi-entry-owner">Segment2d method</p>

```typescript signature
perpendicularBisectorEquation(
    variable_x: string,
    variable_y: string,
): Expression
```

The bisector line as an `equal` relation in x and y.

## point2d

<a id="entry-presentation_wasm_geometry_capability_geometry_point_2d_api_session_point_2d"></a>
<a id="placement-placement.wasm.wasm_class.context_point2d.7290572ebc0b"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
point2d(x: Expression, y: Expression): Point2d
```

Construct the point `(x, y)`.

## polygon2d

<a id="entry-presentation_wasm_geometry_capability_geometry_polygon_2d_api_session_polygon_2d"></a>
<a id="placement-placement.wasm.wasm_class.context_polygon2d.7769a1368f42"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
polygon2d(vertices: Point2d[]): Polygon2d
```

Simple polygon from its vertex list in order; degenerate inputs raise.

## radius

<a id="entry-presentation_wasm_geometry_capability_geometry_radius_api_circle2d_radius"></a>
<a id="placement-placement.wasm.wasm_class.circle2d_radius.fa13be61ae3c"></a>
<p class="symi-entry-owner">Circle2d property</p>

```typescript signature
readonly radius: Expression
```

The radius of the circle.

## segment2d

<a id="entry-presentation_wasm_geometry_capability_geometry_segment_2d_api_session_segment_2d"></a>
<a id="placement-placement.wasm.wasm_class.context_segment2d.bdd743314ff7"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
segment2d(start: Point2d, end: Point2d): Segment2d
```

Construct the segment running from `start` to `end`.

## toString

<a id="entry-presentation_wasm_geometry_capability_geometry_to_js_string_unresolved"></a>
<a id="placement-placement.wasm.wasm_class.circle2d_tostring.fc0197c0b351"></a>
<p class="symi-entry-owner">Circle2d method</p>

```typescript signature
toString(): string
```

The mathematical text of this object, as a JavaScript string.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.point2d_tostring.dcea6d65a5d8"></a>
<p class="symi-entry-owner">Point2d method: <code>Point2d.toString</code></p>

```typescript signature
toString(): string
```

<a id="placement-placement.wasm.wasm_class.polygon2d_tostring.1f9c721c2fbb"></a>
<p class="symi-entry-owner">Polygon2d method: <code>Polygon2d.toString</code></p>

```typescript signature
toString(): string
```

<a id="placement-placement.wasm.wasm_class.segment2d_tostring.e994a8c59a1e"></a>
<p class="symi-entry-owner">Segment2d method: <code>Segment2d.toString</code></p>

```typescript signature
toString(): string
```

<a id="placement-placement.wasm.wasm_class.triangle2d_tostring.63289bc04e2d"></a>
<p class="symi-entry-owner">Triangle2d method: <code>Triangle2d.toString</code></p>

```typescript signature
toString(): string
```

</details>

## triangle2d

<a id="entry-presentation_wasm_geometry_capability_geometry_triangle_2d_api_session_triangle_2d"></a>
<a id="placement-placement.wasm.wasm_class.context_triangle2d.c3cf16ee529a"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
triangle2d(
    point_a: Point2d,
    point_b: Point2d,
    point_c: Point2d,
): Triangle2d
```

Collinear vertices raise.

## vertex

<a id="entry-presentation_wasm_geometry_capability_geometry_vertex_api_results_vertexangle_vertex"></a>
<a id="placement-placement.wasm.wasm_class.vertexangle_vertex.bbfbe7953588"></a>
<p class="symi-entry-owner">VertexAngle property</p>

```typescript signature
readonly vertex: Point2d
```

The vertex the angle is measured at.

## x

<a id="entry-presentation_wasm_geometry_capability_geometry_x_api_point2d_x"></a>
<a id="placement-placement.wasm.wasm_class.point2d_x.c0a31a0b13c6"></a>
<p class="symi-entry-owner">Point2d property</p>

```typescript signature
readonly x: Expression
```

The x coordinate of the point.

## y

<a id="entry-presentation_wasm_geometry_capability_geometry_y_api_point2d_y"></a>
<a id="placement-placement.wasm.wasm_class.point2d_y.09cc1987c90a"></a>
<p class="symi-entry-owner">Point2d property</p>

```typescript signature
readonly y: Expression
```

The y coordinate of the point.

## estimatedAbsoluteError

<a id="entry-presentation_wasm_api_reference_capability_numeric_definite_integration_estimated_absolute_error_api_results_numericdefiniteintegrationresult_estimated_absolute_error"></a>
<a id="placement-placement.wasm.wasm_class.numericdefiniteintegrationresult_estimatedabsoluteerror.3ab4c6a54ed4"></a>
<p class="symi-entry-owner">NumericDefiniteIntegrationResult property</p>

```typescript signature
readonly estimatedAbsoluteError: number | undefined
```

The final difference between successive quadrature rules.

## nodeCount

<a id="entry-presentation_wasm_api_reference_capability_numeric_definite_integration_node_count_api_results_numericdefiniteintegrationresult_node_count"></a>
<a id="placement-placement.wasm.wasm_class.numericdefiniteintegrationresult_nodecount.d6365edd307f"></a>
<p class="symi-entry-owner">NumericDefiniteIntegrationResult property</p>

```typescript signature
readonly nodeCount: number | undefined
```

The node count of the accepted Gauss--Legendre rule.

## precisionBits

<a id="entry-presentation_wasm_api_reference_capability_numeric_definite_integration_precision_bits_api_results_numericdefiniteintegrationresult_precision_bits"></a>
<a id="placement-placement.wasm.wasm_class.numericdefiniteintegrationresult_precisionbits.38eaaf674f8b"></a>
<p class="symi-entry-owner">NumericDefiniteIntegrationResult property</p>

```typescript signature
readonly precisionBits: number | undefined
```

The arithmetic precision used for the result.

## value

<a id="entry-presentation_wasm_api_reference_capability_numeric_definite_integration_value_api_results_numericdefiniteintegrationresult_value"></a>
<a id="placement-placement.wasm.wasm_class.numericdefiniteintegrationresult_value.5d248a24cc0f"></a>
<p class="symi-entry-owner">NumericDefiniteIntegrationResult property</p>

```typescript signature
readonly value: Float64Array | undefined
```

The complex value as real and imaginary components, when convergence was established.

## characteristicFunction

<a id="entry-presentation_wasm_statistics_capability_probability_characteristic_function_api_probability_session_characteristic_function"></a>
<a id="placement-placement.wasm.wasm_module.module_characteristicfunction.6bcf8578c6fc"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
characteristicFunction(
    random_variable: Expression,
    auxiliary_variable: string,
): Expression
```

Closed-form characteristic function \(\varphi_X(t)\) of `random_variable` in the named auxiliary variable, when elementary; otherwise an unevaluated structural form.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_characteristicfunction.67fa97a031f0"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.characteristicFunction</code></p>

```typescript signature
characteristicFunction(
    random_variable: Expression,
    auxiliary_variable: string,
): Expression
```

</details>

## covariance

<a id="entry-presentation_wasm_statistics_capability_probability_covariance_api_probability_session_covariance"></a>
<a id="placement-placement.wasm.wasm_module.module_covariance.7f07c38ba9fc"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
covariance(
    left: Expression,
    right: Expression,
    random_variables: Expression[],
): Expression
```

Covariance of `left` and `right` over the listed independent random variables; zero for independent operands.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_covariance.cf6b9f0ac1bf"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.covariance</code></p>

```typescript signature
covariance(
    left: Expression,
    right: Expression,
    random_variables: Expression[],
): Expression
```

</details>

## cumulant

<a id="entry-presentation_wasm_statistics_capability_probability_cumulant_api_probability_session_cumulant"></a>
<a id="placement-placement.wasm.wasm_module.module_cumulant.81f780dfe410"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
cumulant(random_variable: Expression, order: Expression): Expression
```

The `order`-th cumulant of `random_variable`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_cumulant.842dc00f3798"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.cumulant</code></p>

```typescript signature
cumulant(random_variable: Expression, order: Expression): Expression
```

</details>

## cumulativeDistribution

<a id="entry-presentation_wasm_statistics_capability_probability_cumulative_distribution_api_probability_session_cumulative_distribution"></a>
<a id="placement-placement.wasm.wasm_module.module_cumulativedistribution.6fed2a150b33"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
cumulativeDistribution(
    random_variable: Expression,
    point: Expression,
): Expression
```

Cumulative distribution function of `random_variable` evaluated at `point`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_cumulativedistribution.437149c7bc0e"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.cumulativeDistribution</code></p>

```typescript signature
cumulativeDistribution(
    random_variable: Expression,
    point: Expression,
): Expression
```

</details>

## density

<a id="entry-presentation_wasm_statistics_capability_probability_density_api_probability_session_density"></a>
<a id="placement-placement.wasm.wasm_module.module_density.cd2642291cfe"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
density(random_variable: Expression, point: Expression): Expression
```

Probability density (continuous families) or probability mass (discrete families) of `random_variable` evaluated at `point`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_density.4a13b738d461"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.density</code></p>

```typescript signature
density(random_variable: Expression, point: Expression): Expression
```

</details>

## distribution

<a id="entry-presentation_wasm_statistics_capability_probability_distribution_api_probability_session_distribution"></a>
<a id="placement-placement.wasm.wasm_module.module_distribution.a8ab95ab5293"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
distribution(name: string, parameters: Expression[]): Expression
```

Build a distribution node from a family name and its ordered parameter list (e.g. `distribution("normal", [mean, standard_deviation])`).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_distribution.8db68bce15d8"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.distribution</code></p>

```typescript signature
distribution(name: string, parameters: Expression[]): Expression
```

</details>

## expectation

<a id="entry-presentation_wasm_statistics_capability_probability_expectation_api_probability_session_expectation"></a>
<a id="placement-placement.wasm.wasm_module.module_expectation.4574bc9e8615"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
expectation(
    target: Expression,
    random_variables: Expression[],
): Expression
```

Expectation of `target` over the listed independent random variables. Linearity and the constant-factor lift are applied; bare and power-of-random-variable leaves consume the distribution's mean and raw moments.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_expectation.67e8bae93912"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.expectation</code></p>

```typescript signature
expectation(
    target: Expression,
    random_variables: Expression[],
): Expression
```

</details>

## moment

<a id="entry-presentation_wasm_statistics_capability_probability_moment_api_probability_session_moment"></a>
<a id="placement-placement.wasm.wasm_module.module_moment.2520aabf6538"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
moment(random_variable: Expression, order: Expression): Expression
```

The `order`-th raw moment `E[X^order]` of `random_variable`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_moment.39df9a0ae11b"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.moment</code></p>

```typescript signature
moment(random_variable: Expression, order: Expression): Expression
```

</details>

## momentGeneratingFunction

<a id="entry-presentation_wasm_statistics_capability_probability_moment_generating_function_api_probability_session_moment_generating_function"></a>
<a id="placement-placement.wasm.wasm_module.module_momentgeneratingfunction.7320c47b4aec"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
momentGeneratingFunction(
    random_variable: Expression,
    auxiliary_variable: string,
): Expression
```

Closed-form moment generating function `M_X(t)` of `random_variable` in the named auxiliary variable, when elementary; otherwise an unevaluated structural form.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_momentgeneratingfunction.5c1a2bc41ac9"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.momentGeneratingFunction</code></p>

```typescript signature
momentGeneratingFunction(
    random_variable: Expression,
    auxiliary_variable: string,
): Expression
```

</details>

## probability

<a id="entry-presentation_wasm_statistics_capability_probability_probability_api_probability_session_probability"></a>
<a id="placement-placement.wasm.wasm_module.module_probability.048a1136670a"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
probability(
    predicate: Expression,
    random_variables: Expression[],
): Expression
```

Probability that `predicate` (a tail comparison such as `X > t`) holds over the listed independent random variables.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_probability.7ba12c2caf78"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.probability</code></p>

```typescript signature
probability(
    predicate: Expression,
    random_variables: Expression[],
): Expression
```

</details>

## randomVariable

<a id="entry-presentation_wasm_statistics_capability_probability_random_variable_api_probability_session_random_variable"></a>
<a id="placement-placement.wasm.wasm_module.module_randomvariable.88bac8365ef0"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
randomVariable(name: string, distribution: Expression): Expression
```

Build a random variable named `name` drawn from `distribution`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_randomvariable.2116c1217247"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.randomVariable</code></p>

```typescript signature
randomVariable(name: string, distribution: Expression): Expression
```

</details>

## variance

<a id="entry-presentation_wasm_statistics_capability_probability_variance_api_probability_session_variance"></a>
<a id="placement-placement.wasm.wasm_module.module_variance.1e88b3e35c6d"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
variance(target: Expression, random_variables: Expression[]): Expression
```

Variance of `target` over the listed independent random variables.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_variance.f8ef1aa2b2f3"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.variance</code></p>

```typescript signature
variance(target: Expression, random_variables: Expression[]): Expression
```

</details>

## beta

<a id="entry-presentation_wasm_special_functions_capability_special_functions_beta_api_session_beta"></a>
<a id="placement-placement.wasm.wasm_module.module_beta.f91b83241a08"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
beta(x: Expression, y: Expression): Expression
```

The beta function \(\operatorname{B}(x, y) = \Gamma(x)\Gamma(y)/\Gamma(x+y)\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_beta.10022cde03c3"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.beta</code></p>

```typescript signature
beta(x: Expression, y: Expression): Expression
```

</details>

## carlsonRc

<a id="entry-presentation_wasm_special_functions_capability_special_functions_carlson_rc_api_session_carlson_rc"></a>
<a id="placement-placement.wasm.wasm_module.module_carlsonrc.dd3341aeb043"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
carlsonRc(
    first_argument: Expression,
    second_argument: Expression,
): Expression
```

Carlson's degenerate symmetric elliptic integral \(R_C(x,y)\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_carlsonrc.903b0b7b6b2b"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.carlsonRc</code></p>

```typescript signature
carlsonRc(
    first_argument: Expression,
    second_argument: Expression,
): Expression
```

</details>

## carlsonRd

<a id="entry-presentation_wasm_special_functions_capability_special_functions_carlson_rd_api_session_carlson_rd"></a>
<a id="placement-placement.wasm.wasm_module.module_carlsonrd.26b89bd7eade"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
carlsonRd(
    first_argument: Expression,
    second_argument: Expression,
    third_argument: Expression,
): Expression
```

Carlson's symmetric elliptic integral \(R_D(x,y,z)\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_carlsonrd.11aac1f3979a"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.carlsonRd</code></p>

```typescript signature
carlsonRd(
    first_argument: Expression,
    second_argument: Expression,
    third_argument: Expression,
): Expression
```

</details>

## carlsonRf

<a id="entry-presentation_wasm_special_functions_capability_special_functions_carlson_rf_api_session_carlson_rf"></a>
<a id="placement-placement.wasm.wasm_module.module_carlsonrf.8415cba14475"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
carlsonRf(
    first_argument: Expression,
    second_argument: Expression,
    third_argument: Expression,
): Expression
```

Carlson's symmetric elliptic integral \(R_F(x,y,z)\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_carlsonrf.6d094605d199"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.carlsonRf</code></p>

```typescript signature
carlsonRf(
    first_argument: Expression,
    second_argument: Expression,
    third_argument: Expression,
): Expression
```

</details>

## carlsonRj

<a id="entry-presentation_wasm_special_functions_capability_special_functions_carlson_rj_api_session_carlson_rj"></a>
<a id="placement-placement.wasm.wasm_module.module_carlsonrj.6686de7356a8"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
carlsonRj(
    first_argument: Expression,
    second_argument: Expression,
    third_argument: Expression,
    fourth_argument: Expression,
): Expression
```

Carlson's symmetric elliptic integral \(R_J(x,y,z,p)\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_carlsonrj.a4fb7ba28bd8"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.carlsonRj</code></p>

```typescript signature
carlsonRj(
    first_argument: Expression,
    second_argument: Expression,
    third_argument: Expression,
    fourth_argument: Expression,
): Expression
```

</details>

## chebyshevPolynomialFirstKind

<a id="entry-presentation_wasm_special_functions_capability_special_functions_chebyshev_polynomial_first_kind_api_session_chebyshev_polynomial_first_kind"></a>
<a id="placement-placement.wasm.wasm_module.module_chebyshevpolynomialfirstkind.ebde5c207b56"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
chebyshevPolynomialFirstKind(
    degree: Expression,
    argument: Expression,
): Expression
```

The Chebyshev polynomial \(T_n(x)\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_chebyshevpolynomialfirstkind.0a328846aedc"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.chebyshevPolynomialFirstKind</code></p>

```typescript signature
chebyshevPolynomialFirstKind(
    degree: Expression,
    argument: Expression,
): Expression
```

</details>

## chebyshevPolynomialSecondKind

<a id="entry-presentation_wasm_special_functions_capability_special_functions_chebyshev_polynomial_second_kind_api_session_chebyshev_polynomial_second_kind"></a>
<a id="placement-placement.wasm.wasm_module.module_chebyshevpolynomialsecondkind.c943050fbb05"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
chebyshevPolynomialSecondKind(
    degree: Expression,
    argument: Expression,
): Expression
```

The Chebyshev polynomial \(U_n(x)\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_chebyshevpolynomialsecondkind.e583655d7674"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.chebyshevPolynomialSecondKind</code></p>

```typescript signature
chebyshevPolynomialSecondKind(
    degree: Expression,
    argument: Expression,
): Expression
```

</details>

## digamma

<a id="entry-presentation_wasm_special_functions_capability_special_functions_digamma_api_session_digamma"></a>
<a id="placement-placement.wasm.wasm_module.module_digamma.0d3732417250"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
digamma(x: Expression): Expression
```

The digamma function \(\psi(x) = \Gamma'(x)/\Gamma(x)\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_digamma.8058ef2c8766"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.digamma</code></p>

```typescript signature
digamma(x: Expression): Expression
```

</details>

## ellipticE

<a id="entry-presentation_wasm_special_functions_capability_special_functions_elliptic_e_api_session_elliptic_e"></a>
<a id="placement-placement.wasm.wasm_module.module_elliptice.77784ec06567"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
ellipticE(parameter: Expression): Expression
```

The complete second-kind elliptic integral \(E(m)\), with parameter \(m=k^2\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_elliptice.5532b3804b95"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.ellipticE</code></p>

```typescript signature
ellipticE(parameter: Expression): Expression
```

</details>

## ellipticEIncomplete

<a id="entry-presentation_wasm_special_functions_capability_special_functions_elliptic_e_incomplete_api_session_elliptic_e_incomplete"></a>
<a id="placement-placement.wasm.wasm_module.module_ellipticeincomplete.07191f89a2c0"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
ellipticEIncomplete(
    amplitude: Expression,
    parameter: Expression,
): Expression
```

The incomplete second-kind elliptic integral \(E(\phi\mid m)\), with parameter \(m=k^2\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_ellipticeincomplete.25cb5b0479c7"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.ellipticEIncomplete</code></p>

```typescript signature
ellipticEIncomplete(
    amplitude: Expression,
    parameter: Expression,
): Expression
```

</details>

## ellipticF

<a id="entry-presentation_wasm_special_functions_capability_special_functions_elliptic_f_api_session_elliptic_f"></a>
<a id="placement-placement.wasm.wasm_module.module_ellipticf.7cc3c6a31f32"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
ellipticF(amplitude: Expression, parameter: Expression): Expression
```

The incomplete first-kind elliptic integral \(F(\phi\mid m)\), with parameter \(m=k^2\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_ellipticf.33bd7036e7c9"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.ellipticF</code></p>

```typescript signature
ellipticF(amplitude: Expression, parameter: Expression): Expression
```

</details>

## ellipticK

<a id="entry-presentation_wasm_special_functions_capability_special_functions_elliptic_k_api_session_elliptic_k"></a>
<a id="placement-placement.wasm.wasm_module.module_elliptick.89c8ca5ccda5"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
ellipticK(parameter: Expression): Expression
```

The complete first-kind elliptic integral \(K(m)\), with parameter \(m=k^2\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_elliptick.629bbeb8e11c"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.ellipticK</code></p>

```typescript signature
ellipticK(parameter: Expression): Expression
```

</details>

## ellipticPi

<a id="entry-presentation_wasm_special_functions_capability_special_functions_elliptic_pi_api_session_elliptic_pi"></a>
<a id="placement-placement.wasm.wasm_module.module_ellipticpi.eb8d10ebaaa5"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
ellipticPi(
    characteristic: Expression,
    parameter: Expression,
): Expression
```

The complete third-kind elliptic integral \(\Pi(n\mid m)\), with parameter \(m=k^2\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_ellipticpi.c988463102bc"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.ellipticPi</code></p>

```typescript signature
ellipticPi(
    characteristic: Expression,
    parameter: Expression,
): Expression
```

</details>

## ellipticPiIncomplete

<a id="entry-presentation_wasm_special_functions_capability_special_functions_elliptic_pi_incomplete_api_session_elliptic_pi_incomplete"></a>
<a id="placement-placement.wasm.wasm_module.module_ellipticpiincomplete.9b0df8832d4d"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
ellipticPiIncomplete(
    characteristic: Expression,
    amplitude: Expression,
    parameter: Expression,
): Expression
```

The incomplete third-kind elliptic integral \(\Pi(n;\phi\mid m)\), with parameter \(m=k^2\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_ellipticpiincomplete.719e94d7de55"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.ellipticPiIncomplete</code></p>

```typescript signature
ellipticPiIncomplete(
    characteristic: Expression,
    amplitude: Expression,
    parameter: Expression,
): Expression
```

</details>

## gamma

<a id="entry-presentation_wasm_special_functions_capability_special_functions_gamma_api_session_gamma"></a>
<a id="placement-placement.wasm.wasm_module.module_gamma.c6aee0f501e6"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
gamma(x: Expression): Expression
```

The gamma function \(\Gamma(x)\), the analytic continuation of `(x-1)!`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_gamma.15bd4b87da3c"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.gamma</code></p>

```typescript signature
gamma(x: Expression): Expression
```

</details>

## gegenbauerPolynomial

<a id="entry-presentation_wasm_special_functions_capability_special_functions_gegenbauer_polynomial_api_session_gegenbauer_polynomial"></a>
<a id="placement-placement.wasm.wasm_module.module_gegenbauerpolynomial.2785173f26a1"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
gegenbauerPolynomial(
    degree: Expression,
    parameter: Expression,
    argument: Expression,
): Expression
```

The Gegenbauer polynomial \(C_n^{(\lambda)}(x)\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_gegenbauerpolynomial.9c0b54be20d8"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.gegenbauerPolynomial</code></p>

```typescript signature
gegenbauerPolynomial(
    degree: Expression,
    parameter: Expression,
    argument: Expression,
): Expression
```

</details>

## generalizedLaguerrePolynomial

<a id="entry-presentation_wasm_special_functions_capability_special_functions_generalized_laguerre_polynomial_api_session_generalized_laguerre_polynomial"></a>
<a id="placement-placement.wasm.wasm_module.module_generalizedlaguerrepolynomial.4f16cbeb161f"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
generalizedLaguerrePolynomial(
    degree: Expression,
    parameter: Expression,
    argument: Expression,
): Expression
```

The generalized Laguerre polynomial \(L_n^{(\alpha)}(x)\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_generalizedlaguerrepolynomial.2aafcd528a5f"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.generalizedLaguerrePolynomial</code></p>

```typescript signature
generalizedLaguerrePolynomial(
    degree: Expression,
    parameter: Expression,
    argument: Expression,
): Expression
```

</details>

## hermitePolynomial

<a id="entry-presentation_wasm_special_functions_capability_special_functions_hermite_polynomial_api_session_hermite_polynomial"></a>
<a id="placement-placement.wasm.wasm_module.module_hermitepolynomial.748805216715"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
hermitePolynomial(degree: Expression, argument: Expression): Expression
```

The physicists' Hermite polynomial \(H_n(x)\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_hermitepolynomial.68f367f719e9"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.hermitePolynomial</code></p>

```typescript signature
hermitePolynomial(degree: Expression, argument: Expression): Expression
```

</details>

## hurwitzZeta

<a id="entry-presentation_wasm_special_functions_capability_special_functions_hurwitz_zeta_api_session_hurwitz_zeta"></a>
<a id="placement-placement.wasm.wasm_module.module_hurwitzzeta.729040f89142"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
hurwitzZeta(s: Expression, a: Expression): Expression
```

The Hurwitz zeta function \(\zeta(s, a) = \sum_{k\geq 0} (k+a)^{-s}\), the numeric primitive of the family. `hurwitz_zeta(s, 1)` folds to `zeta(s)`; `hurwitz_zeta(s, 1/2)` to \((2^s - 1)\zeta(s)\); a positive integer second argument reduces to `zeta(s)` minus the finite head; a non-positive integer first argument gives a Bernoulli polynomial in `a`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_hurwitzzeta.faec90c9388d"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.hurwitzZeta</code></p>

```typescript signature
hurwitzZeta(s: Expression, a: Expression): Expression
```

</details>

## hypergeometric0f1

<a id="entry-presentation_wasm_special_functions_capability_special_functions_hypergeometric_0f1_api_session_hypergeometric_0f1"></a>
<a id="placement-placement.wasm.wasm_module.module_hypergeometric0f1.cef7a55e5327"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
hypergeometric0f1(
    lower_parameter: Expression,
    argument: Expression,
): Expression
```

The confluent limit \({}_0F_1(; b; z)\), lowered to `hypergeometric_pfq`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_hypergeometric0f1.eb8ad3cf9c53"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.hypergeometric0f1</code></p>

```typescript signature
hypergeometric0f1(
    lower_parameter: Expression,
    argument: Expression,
): Expression
```

</details>

## hypergeometric1f1

<a id="entry-presentation_wasm_special_functions_capability_special_functions_hypergeometric_1f1_api_session_hypergeometric_1f1"></a>
<a id="placement-placement.wasm.wasm_module.module_hypergeometric1f1.f872b9c5d868"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
hypergeometric1f1(
    upper_parameter: Expression,
    lower_parameter: Expression,
    argument: Expression,
): Expression
```

Kummer's confluent hypergeometric function \({}_1F_1(a; b; z)\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_hypergeometric1f1.658e3f7743d5"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.hypergeometric1f1</code></p>

```typescript signature
hypergeometric1f1(
    upper_parameter: Expression,
    lower_parameter: Expression,
    argument: Expression,
): Expression
```

</details>

## hypergeometric2f1

<a id="entry-presentation_wasm_special_functions_capability_special_functions_hypergeometric_2f1_api_session_hypergeometric_2f1"></a>
<a id="placement-placement.wasm.wasm_module.module_hypergeometric2f1.b66e8a62c1b1"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
hypergeometric2f1(
    first_upper_parameter: Expression,
    second_upper_parameter: Expression,
    lower_parameter: Expression,
    argument: Expression,
): Expression
```

The Gauss hypergeometric function \({}_2F_1(a, b; c; z)\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_hypergeometric2f1.941040609faf"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.hypergeometric2f1</code></p>

```typescript signature
hypergeometric2f1(
    first_upper_parameter: Expression,
    second_upper_parameter: Expression,
    lower_parameter: Expression,
    argument: Expression,
): Expression
```

</details>

## hypergeometricPfq

<a id="entry-presentation_wasm_special_functions_capability_special_functions_hypergeometric_pfq_api_session_hypergeometric_pfq"></a>
<a id="placement-placement.wasm.wasm_module.module_hypergeometricpfq.10c7ad6981f0"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
hypergeometricPfq(
    upper_parameters: Expression[],
    lower_parameters: Expression[],
    argument: Expression,
): Expression
```

The generalized hypergeometric function \({}_pF_q(\mathbf a; \mathbf b; z)\). The two parameter groups are ordered sequences: order and repetition are significant, so a set or frozenset is rejected.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_hypergeometricpfq.2b937c3c8db4"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.hypergeometricPfq</code></p>

```typescript signature
hypergeometricPfq(
    upper_parameters: Expression[],
    lower_parameters: Expression[],
    argument: Expression,
): Expression
```

</details>

## jacobiAmplitude

<a id="entry-presentation_wasm_special_functions_capability_special_functions_jacobi_amplitude_api_session_jacobi_amplitude"></a>
<a id="placement-placement.wasm.wasm_module.module_jacobiamplitude.d177051aba22"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
jacobiAmplitude(argument: Expression, parameter: Expression): Expression
```

The pinned Jacobi amplitude \(\operatorname{am}(u\mid m)\), with parameter \(m=k^2\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_jacobiamplitude.a587330f092b"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.jacobiAmplitude</code></p>

```typescript signature
jacobiAmplitude(argument: Expression, parameter: Expression): Expression
```

</details>

## jacobiCn

<a id="entry-presentation_wasm_special_functions_capability_special_functions_jacobi_cn_api_session_jacobi_cn"></a>
<a id="placement-placement.wasm.wasm_module.module_jacobicn.17eb37a567b9"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
jacobiCn(argument: Expression, parameter: Expression): Expression
```

Jacobi's elliptic function \(\operatorname{cn}(u\mid m)\), with parameter \(m=k^2\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_jacobicn.f58ebda31a50"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.jacobiCn</code></p>

```typescript signature
jacobiCn(argument: Expression, parameter: Expression): Expression
```

</details>

## jacobiDn

<a id="entry-presentation_wasm_special_functions_capability_special_functions_jacobi_dn_api_session_jacobi_dn"></a>
<a id="placement-placement.wasm.wasm_module.module_jacobidn.e6c3ec6d7a4e"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
jacobiDn(argument: Expression, parameter: Expression): Expression
```

Jacobi's elliptic function \(\operatorname{dn}(u\mid m)\), with parameter \(m=k^2\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_jacobidn.00819f251239"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.jacobiDn</code></p>

```typescript signature
jacobiDn(argument: Expression, parameter: Expression): Expression
```

</details>

## jacobiPolynomial

<a id="entry-presentation_wasm_special_functions_capability_special_functions_jacobi_polynomial_api_session_jacobi_polynomial"></a>
<a id="placement-placement.wasm.wasm_module.module_jacobipolynomial.74ad8252890c"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
jacobiPolynomial(
    degree: Expression,
    first_parameter: Expression,
    second_parameter: Expression,
    argument: Expression,
): Expression
```

The Jacobi polynomial \(P_n^{(\alpha,\beta)}(x)\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_jacobipolynomial.efcf62ec673a"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.jacobiPolynomial</code></p>

```typescript signature
jacobiPolynomial(
    degree: Expression,
    first_parameter: Expression,
    second_parameter: Expression,
    argument: Expression,
): Expression
```

</details>

## jacobiSn

<a id="entry-presentation_wasm_special_functions_capability_special_functions_jacobi_sn_api_session_jacobi_sn"></a>
<a id="placement-placement.wasm.wasm_module.module_jacobisn.a5c00c764a10"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
jacobiSn(argument: Expression, parameter: Expression): Expression
```

Jacobi's elliptic function \(\operatorname{sn}(u\mid m)\), with parameter \(m=k^2\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_jacobisn.74cfc885f96f"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.jacobiSn</code></p>

```typescript signature
jacobiSn(argument: Expression, parameter: Expression): Expression
```

</details>

## jacobiTheta1

<a id="entry-presentation_wasm_special_functions_capability_special_functions_jacobi_theta_1_api_session_jacobi_theta_1"></a>
<a id="placement-placement.wasm.wasm_module.module_jacobitheta1.7a2497134f65"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
jacobiTheta1(argument: Expression, tau: Expression): Expression
```

Jacobi's first theta function \(\theta_1(z\mid\tau)\), with half-period ratio \(\tau\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_jacobitheta1.c4d23116584e"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.jacobiTheta1</code></p>

```typescript signature
jacobiTheta1(argument: Expression, tau: Expression): Expression
```

</details>

## jacobiTheta2

<a id="entry-presentation_wasm_special_functions_capability_special_functions_jacobi_theta_2_api_session_jacobi_theta_2"></a>
<a id="placement-placement.wasm.wasm_module.module_jacobitheta2.be1168718010"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
jacobiTheta2(argument: Expression, tau: Expression): Expression
```

Jacobi's second theta function \(\theta_2(z\mid\tau)\), with half-period ratio \(\tau\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_jacobitheta2.189cc40aeeea"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.jacobiTheta2</code></p>

```typescript signature
jacobiTheta2(argument: Expression, tau: Expression): Expression
```

</details>

## jacobiTheta3

<a id="entry-presentation_wasm_special_functions_capability_special_functions_jacobi_theta_3_api_session_jacobi_theta_3"></a>
<a id="placement-placement.wasm.wasm_module.module_jacobitheta3.00271ffa7a15"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
jacobiTheta3(argument: Expression, tau: Expression): Expression
```

Jacobi's third theta function \(\theta_3(z\mid\tau)\), with half-period ratio \(\tau\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_jacobitheta3.0a910e4dfec6"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.jacobiTheta3</code></p>

```typescript signature
jacobiTheta3(argument: Expression, tau: Expression): Expression
```

</details>

## jacobiTheta4

<a id="entry-presentation_wasm_special_functions_capability_special_functions_jacobi_theta_4_api_session_jacobi_theta_4"></a>
<a id="placement-placement.wasm.wasm_module.module_jacobitheta4.1dd493afad49"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
jacobiTheta4(argument: Expression, tau: Expression): Expression
```

Jacobi's fourth theta function \(\theta_4(z\mid\tau)\), with half-period ratio \(\tau\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_jacobitheta4.4a26c72700a2"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.jacobiTheta4</code></p>

```typescript signature
jacobiTheta4(argument: Expression, tau: Expression): Expression
```

</details>

## laguerrePolynomial

<a id="entry-presentation_wasm_special_functions_capability_special_functions_laguerre_polynomial_api_session_laguerre_polynomial"></a>
<a id="placement-placement.wasm.wasm_module.module_laguerrepolynomial.52100b9b20ee"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
laguerrePolynomial(degree: Expression, argument: Expression): Expression
```

The Laguerre polynomial, lowered to generalized Laguerre with parameter zero.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_laguerrepolynomial.62995c0f2327"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.laguerrePolynomial</code></p>

```typescript signature
laguerrePolynomial(degree: Expression, argument: Expression): Expression
```

</details>

## legendrePolynomial

<a id="entry-presentation_wasm_special_functions_capability_special_functions_legendre_polynomial_api_session_legendre_polynomial"></a>
<a id="placement-placement.wasm.wasm_module.module_legendrepolynomial.50ac16a05e94"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
legendrePolynomial(degree: Expression, argument: Expression): Expression
```

The Legendre polynomial \(P_n(x)\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_legendrepolynomial.28ff6dbacc69"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.legendrePolynomial</code></p>

```typescript signature
legendrePolynomial(degree: Expression, argument: Expression): Expression
```

</details>

## lerchPhi

<a id="entry-presentation_wasm_special_functions_capability_special_functions_lerch_phi_api_session_lerch_phi"></a>
<a id="placement-placement.wasm.wasm_module.module_lerchphi.81f4f0c65935"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
lerchPhi(
    argument: Expression,
    order: Expression,
    shift: Expression,
): Expression
```

The principal Lerch transcendent \(\Phi(z, s, a)\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_lerchphi.1a43d0de986c"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.lerchPhi</code></p>

```typescript signature
lerchPhi(
    argument: Expression,
    order: Expression,
    shift: Expression,
): Expression
```

</details>

## logGamma

<a id="entry-presentation_wasm_special_functions_capability_special_functions_log_gamma_api_session_log_gamma"></a>
<a id="placement-placement.wasm.wasm_module.module_loggamma.9e2c3da58bd0"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
logGamma(x: Expression): Expression
```

The principal-branch log-gamma function (not `log(gamma(x))` off the real axis).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_loggamma.5ec5f03b6584"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.logGamma</code></p>

```typescript signature
logGamma(x: Expression): Expression
```

</details>

## meijerG

<a id="entry-presentation_wasm_special_functions_capability_special_functions_meijer_g_api_session_meijer_g"></a>
<a id="placement-placement.wasm.wasm_module.module_meijerg.c09fa2551e5f"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
meijerG(
    upper_numerator_parameters: Expression[],
    upper_denominator_parameters: Expression[],
    lower_numerator_parameters: Expression[],
    lower_denominator_parameters: Expression[],
    argument: Expression,
): Expression
```

The Meijer G-function \(G_{p,q}^{m,n}\) from its four ordered parameter groups. The orders `m`, `n`, `p`, and `q` are read from the group lengths and are never supplied separately.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_meijerg.ab8f46bb2c1a"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.meijerG</code></p>

```typescript signature
meijerG(
    upper_numerator_parameters: Expression[],
    upper_denominator_parameters: Expression[],
    lower_numerator_parameters: Expression[],
    lower_denominator_parameters: Expression[],
    argument: Expression,
): Expression
```

</details>

## polygamma

<a id="entry-presentation_wasm_special_functions_capability_special_functions_polygamma_api_session_polygamma"></a>
<a id="placement-placement.wasm.wasm_module.module_polygamma.79d3cb4f4460"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
polygamma(order: Expression, x: Expression): Expression
```

The polygamma function \(\psi^{(n)}(x)\), the order-th derivative of digamma; `polygamma(0, x)` reduces to `digamma(x)`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_polygamma.21297ea61e06"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.polygamma</code></p>

```typescript signature
polygamma(order: Expression, x: Expression): Expression
```

</details>

## polylogarithm

<a id="entry-presentation_wasm_special_functions_capability_special_functions_polylogarithm_api_session_polylogarithm"></a>
<a id="placement-placement.wasm.wasm_module.module_polylogarithm.8ff9e7750a6e"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
polylogarithm(order: Expression, argument: Expression): Expression
```

The principal-branch polylogarithm \(\operatorname{Li}_s(z)\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_polylogarithm.dc47bff1e1fe"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.polylogarithm</code></p>

```typescript signature
polylogarithm(order: Expression, argument: Expression): Expression
```

</details>

## ultrasphericalPolynomial

<a id="entry-presentation_wasm_special_functions_capability_special_functions_ultraspherical_polynomial_api_session_ultraspherical_polynomial"></a>
<a id="placement-placement.wasm.wasm_module.module_ultrasphericalpolynomial.bb8eb9784e52"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
ultrasphericalPolynomial(
    degree: Expression,
    parameter: Expression,
    argument: Expression,
): Expression
```

The ultraspherical polynomial, lowered to the Gegenbauer head.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_ultrasphericalpolynomial.0086e7e17f60"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.ultrasphericalPolynomial</code></p>

```typescript signature
ultrasphericalPolynomial(
    degree: Expression,
    parameter: Expression,
    argument: Expression,
): Expression
```

</details>

## zeta

<a id="entry-presentation_wasm_special_functions_capability_special_functions_zeta_api_session_zeta"></a>
<a id="placement-placement.wasm.wasm_module.module_zeta.25f1de1c8802"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
zeta(s: Expression): Expression
```

The Riemann zeta function \(\zeta(s) = \sum_{k\geq 1} k^{-s}\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_zeta.e838a7754a4e"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.zeta</code></p>

```typescript signature
zeta(s: Expression): Expression
```

</details>

## curl

<a id="entry-presentation_wasm_vector_calculus_capability_vector_calculus_curl_api_analysis_session_curl"></a>
<a id="placement-placement.wasm.wasm_module.module_curl.04cc2d24b092"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
curl(vector_components: Expression[], variables: string[]): Expression[]
```

\(\nabla\times F\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_curl.4644328f1a4b"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.curl</code></p>

```typescript signature
curl(vector_components: Expression[], variables: string[]): Expression[]
```

</details>

## divergence

<a id="entry-presentation_wasm_vector_calculus_capability_vector_calculus_divergence_api_analysis_session_divergence"></a>
<a id="placement-placement.wasm.wasm_module.module_divergence.22455ef9ce79"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
divergence(
    vector_components: Expression[],
    variables: string[],
): Expression
```

\(\nabla\cdot F = \sum_i \partial F_i/\partial x_i\); component and variable counts must match.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_divergence.b0dfa0093378"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.divergence</code></p>

```typescript signature
divergence(
    vector_components: Expression[],
    variables: string[],
): Expression
```

</details>

## gradient

<a id="entry-presentation_wasm_vector_calculus_capability_vector_calculus_gradient_api_analysis_session_gradient"></a>
<a id="placement-placement.wasm.wasm_module.module_gradient.5e6c59111568"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
gradient(scalar_field: Expression, variables: string[]): Expression[]
```

\(\nabla f\): the partial derivatives in the order of `variables`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_gradient.61111b1393d7"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.gradient</code></p>

```typescript signature
gradient(scalar_field: Expression, variables: string[]): Expression[]
```

</details>

## hessian

<a id="entry-presentation_wasm_vector_calculus_capability_vector_calculus_hessian_api_analysis_session_hessian"></a>
<a id="placement-placement.wasm.wasm_module.module_hessian.c1073609193d"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
hessian(scalar_field: Expression, variables: string[]): Matrix
```

The \(n\times n\) matrix of second partials, computed as the Jacobian of the gradient; structurally symmetric on smooth input.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_hessian.20761aa7d61e"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.hessian</code></p>

```typescript signature
hessian(scalar_field: Expression, variables: string[]): Matrix
```

</details>

## jacobian

<a id="entry-presentation_wasm_vector_calculus_capability_vector_calculus_jacobian_api_analysis_session_jacobian"></a>
<a id="placement-placement.wasm.wasm_module.module_jacobian.9371d4f76961"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
jacobian(vector_components: Expression[], variables: string[]): Matrix
```

The matrix with entry \((i, j) = \partial F_i/\partial x_j\) (rows index components, columns index variables).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_jacobian.a16e01c96433"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.jacobian</code></p>

```typescript signature
jacobian(vector_components: Expression[], variables: string[]): Matrix
```

</details>

## jacobian

<a id="entry-presentation_wasm_vector_calculus_capability_vector_calculus_jacobian_api_partial_differential_equations_partialdifferentialequationcoordinatechange_jacobian"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcoordinatechange_jacobian.598b8fca5781"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCoordinateChange property</p>

```typescript signature
readonly jacobian: Expression
```

The exact forward-map Jacobian determinant.

## jacobian

<a id="entry-presentation_wasm_vector_calculus_capability_vector_calculus_jacobian_api_partial_differential_equations_partialdifferentialequationtransformationverificationreport_jacobian"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationtransformationverificationreport_jacobian.59d33834bad1"></a>
<p class="symi-entry-owner">PartialDifferentialEquationTransformationVerificationReport property</p>

```typescript signature
readonly jacobian: Expression
```

The independently recomputed forward-map Jacobian.

## laplacian

<a id="entry-presentation_wasm_vector_calculus_capability_vector_calculus_laplacian_api_analysis_session_laplacian"></a>
<a id="placement-placement.wasm.wasm_module.module_laplacian.441c89e28847"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
laplacian(scalar_field: Expression, variables: string[]): Expression
```

\(\Delta f = \nabla\cdot\nabla f\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_laplacian.d47f5d0355d4"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.laplacian</code></p>

```typescript signature
laplacian(scalar_field: Expression, variables: string[]): Expression
```

</details>
