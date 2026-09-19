# Polynomial queries

These take ordinary expressions plus a variable name; the named variable
becomes the main polynomial variable and every other free variable rides
along symbolically in the coefficients. An expression that is not polynomial
in the variable (a transcendental call of it, a non-integer power of it)
makes the query decline — `None` for `degree`, an error for the others.

### degree

<a id="entry-presentation_wasm_polynomials_capability_algebra_degree_api_algebra_session_degree"></a>
<a id="placement-placement.wasm.wasm_module.module_degree.b2d823ac32d1"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
degree(
    input_expression: Expression,
    variable: string,
): number | undefined
```

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


Degree in `variable`. `None` when the expression is not polynomial in
`variable` **or is identically zero** (the zero polynomial has no degree
under the core convention).

### leading_coefficient

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.leading_coefficient`](/symi/python/polynomials#leading_coefficient) in Python, [`UniffiSession.leadingCoefficient`](/symi/kotlin/polynomials#leading_coefficient) in Kotlin, [`UniffiSession.leadingCoefficient`](/symi/swift/polynomials#leading_coefficient) in Swift, [`api::algebra::Session::leading_coefficient`](/symi/rust/polynomials#leading_coefficient) in Rust.*


Coefficient of the highest power of `variable`; may contain the other free
variables. Errors on non-polynomial or zero input.

### coefficient

Coefficient of `variable^power`; integer 0 when the term is absent. Errors
on non-polynomial input.

### polynomial_gcd

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.polynomial_gcd`](/symi/python/polynomials#polynomial_gcd) in Python, [`UniffiSession.polynomialGcd`](/symi/kotlin/polynomials#polynomial_gcd) in Kotlin, [`UniffiSession.polynomialGcd`](/symi/swift/polynomials#polynomial_gcd) in Swift, [`api::algebra::Session::polynomial_gcd`](/symi/rust/polynomials#polynomial_gcd) in Rust.*


Greatest common divisor of the two expressions as polynomials in `variable`
(primitive, with the core's sign normalisation). Errors when either input is
not polynomial in `variable`.

### resultant

<a id="entry-presentation_wasm_polynomials_capability_algebra_resultant_api_algebra_session_resultant"></a>
<a id="placement-placement.wasm.wasm_module.module_resultant.fd887f886ff7"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
resultant(a: Expression, b: Expression, variable: string): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_resultant.a85ac4158e89"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.resultant</code></p>

```typescript signature
resultant(a: Expression, b: Expression, variable: string): Expression
```

</details>


Resultant with respect to `variable`; zero exactly when the two polynomials
share a root (over the algebraic closure). Errors on non-polynomial input.

### isolate_real_roots

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.isolate_real_roots`](/symi/python/polynomials#isolate_real_roots) in Python, [`UniffiSession.isolateRealRoots`](/symi/kotlin/polynomials#isolate_real_roots) in Kotlin, [`UniffiSession.isolateRealRoots`](/symi/swift/polynomials#isolate_real_roots) in Swift, [`api::expression_operations::Expression::isolate_real_roots`](/symi/rust/polynomials#isolate_real_roots) in Rust.*


One `(lower, upper)` rational isolating interval per distinct real root,
sorted ascending; a collapsed pair `(r, r)` marks an exact rational root.
Requires a non-zero **univariate** polynomial with rational coefficients.
**Notes:** WASM returns `IsolatingInterval` objects with `lower`/`upper`
getters.

### isolating_interval (WASM result class)

### lower

<a id="entry-presentation_wasm_polynomials_capability_algebra_lower_api_results_isolatinginterval_lower"></a>
<a id="placement-placement.wasm.wasm_class.isolatinginterval_lower.fbc0bf3f0386"></a>
<p class="symi-entry-owner">IsolatingInterval property</p>

```typescript signature
readonly lower: Expression
```


### upper

<a id="entry-presentation_wasm_polynomials_capability_algebra_upper_api_results_isolatinginterval_upper"></a>
<a id="placement-placement.wasm.wasm_class.isolatinginterval_upper.c137d742d426"></a>
<p class="symi-entry-owner">IsolatingInterval property</p>

```typescript signature
readonly upper: Expression
```


## Gröbner bases and ideals

These operate over the polynomial ring \(\mathbb{Q}[\text{variables}]\). Generators are passed
as an expression list; the ring variables are named by a string list; the
monomial order is named by a string (`"lexicographic"` / `"lex"`,
`"degree_lexicographic"` / `"deglex"`, or `"degree_reverse_lexicographic"` /
`"degrevlex"`, the computational default). Any generator that is not a
polynomial over \(\mathbb{Q}\) in the named variables — a transcendental call, a non-integer
power, an unnamed symbol, or an irrational coefficient — makes the operation
decline cleanly (Python `None`, WASM `null`); it never returns a wrong or
partial answer. Within \(\mathbb{Q}[\text{variables}]\) the results are exact and complete: a
returned basis is the canonical reduced Gröbner basis, membership is a genuine
decision, and elimination is exact by the Elimination Theorem.

**Performance.** The basis is computed by **F4** (Faugère's
batched Macaulay-matrix reduction), with a signature-based engine (**F5 / GVW**)
available internally; the reference Buchberger algorithm is retained as the
differential oracle these are checked against. The choice of engine is an
internal acceleration only: the result is **identical** to the reference
Buchberger basis for every input, and the monomial-order argument and the whole
binding surface are unchanged. These entry points simply run faster — there is
no new method to call.

### groebner_basis

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.groebner_basis`](/symi/python/polynomials#groebner_basis) in Python, [`UniffiSession.groebnerBasis`](/symi/kotlin/polynomials#groebner_basis) in Kotlin, [`UniffiSession.groebnerBasis`](/symi/swift/polynomials#groebner_basis) in Swift, [`api::algebra::Session::groebner_basis`](/symi/rust/polynomials#groebner_basis) in Rust.*


The canonical reduced Gröbner basis of the ideal `<generators>` under the named
monomial order — monic, autoreduced, and sorted, so it is unique for the
`(ideal, order)` pair. `None` when any generator is outside \(\mathbb{Q}[\text{variables}]\).

### ideal_membership

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.ideal_membership`](/symi/python/polynomials#ideal_membership) in Python, [`UniffiSession.idealMembership`](/symi/kotlin/polynomials#ideal_membership) in Kotlin, [`UniffiSession.idealMembership`](/symi/swift/polynomials#ideal_membership) in Swift, [`api::algebra::Session::ideal_membership`](/symi/rust/polynomials#ideal_membership) in Rust.*


Whether `element` lies in the ideal `<generators>`, decided by reducing it to
its normal form modulo the Gröbner basis (zero exactly when it is a member).
The verdict is independent of the order. `None` when the element or a generator
is outside \(\mathbb{Q}[\text{variables}]\).

### ideal_sum

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.ideal_sum`](/symi/python/polynomials#ideal_sum) in Python, [`UniffiSession.idealSum`](/symi/kotlin/polynomials#ideal_sum) in Kotlin, [`UniffiSession.idealSum`](/symi/swift/polynomials#ideal_sum) in Swift, [`api::algebra::Session::ideal_sum`](/symi/rust/polynomials#ideal_sum) in Rust.*


A Gröbner basis of the ideal sum `I + J`, the ideal generated by the two
generator lists together. `None` on a non-\(\mathbb{Q}[\text{variables}]\) generator.

### ideal_product

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.ideal_product`](/symi/python/polynomials#ideal_product) in Python, [`UniffiSession.idealProduct`](/symi/kotlin/polynomials#ideal_product) in Kotlin, [`UniffiSession.idealProduct`](/symi/swift/polynomials#ideal_product) in Swift, [`api::algebra::Session::ideal_product`](/symi/rust/polynomials#ideal_product) in Rust.*


A Gröbner basis of the ideal product \(I J\), generated by all pairwise
products of the two generator lists. `None` on a non-\(\mathbb{Q}[\text{variables}]\) generator.

### ideal_intersection

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.ideal_intersection`](/symi/python/polynomials#ideal_intersection) in Python, [`UniffiSession.idealIntersection`](/symi/kotlin/polynomials#ideal_intersection) in Kotlin, [`UniffiSession.idealIntersection`](/symi/swift/polynomials#ideal_intersection) in Swift, [`api::algebra::Session::ideal_intersection`](/symi/rust/polynomials#ideal_intersection) in Rust.*


A generating set of the ideal intersection \(I \cap J\), computed by the standard
tag-variable elimination construction \(t I + (1-t) J\). `None` on a
non-\(\mathbb{Q}[\text{variables}]\) generator.

### elimination_ideal

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.elimination_ideal`](/symi/python/polynomials#elimination_ideal) in Python, [`UniffiSession.eliminationIdeal`](/symi/kotlin/polynomials#elimination_ideal) in Kotlin, [`UniffiSession.eliminationIdeal`](/symi/swift/polynomials#elimination_ideal) in Swift, [`api::algebra::Session::elimination_ideal`](/symi/rust/polynomials#elimination_ideal) in Rust.*


A Gröbner basis of the elimination ideal \(\langle\operatorname{generators}\rangle \cap
\mathbb{Q}[\text{surviving variables}]\), projecting away the variables named in `eliminate` via the
Elimination Theorem (a block order ranks the eliminated variables high and the
generators free of them are kept). Exact: it neither drops nor introduces
components. `None` on a non-\(\mathbb{Q}[\text{variables}]\) generator. Example: eliminating `t`
from \(\{x - t^2, y - t^3\}\) returns the twisted-cubic implicit equation \(y^2 - x^3\).

## Order change and implicitisation

These consume a Gröbner basis rather than compute one from scratch. The order
change runs the standard FGLM algorithm; implicitisation is parameter
elimination with the rational-parametrisation saturation wired in.

### change_monomial_order

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.change_monomial_order`](/symi/python/polynomials#change_monomial_order) in Python, [`UniffiSession.changeMonomialOrder`](/symi/kotlin/polynomials#change_monomial_order) in Kotlin, [`UniffiSession.changeMonomialOrder`](/symi/swift/polynomials#change_monomial_order) in Swift, [`api::algebra::Session::change_monomial_order`](/symi/rust/polynomials#change_monomial_order) in Rust.*


Convert a Gröbner basis of a **zero-dimensional** ideal from `source_order` to
`target_order` by FGLM (Faugère–Gianni–Lazard–Mora) — linear algebra in the
finite-dimensional quotient ring \(\mathbb{Q}[\text{variables}]/I\), far cheaper than computing
the target basis directly (the msolve route to a lexicographic basis is a cheap
`degrevlex` basis followed by this conversion). The result is the **canonical
reduced** Gröbner basis under `target_order`, identical to a direct
`groebner_basis` call. `None` when the ideal is positive-dimensional (the
quotient ring is infinite-dimensional, so FGLM does not apply) or any generator
is outside \(\mathbb{Q}[\text{variables}]\).

### implicitize

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


The implicit ideal of a parametric curve or surface \(x_i = f_i(\operatorname{parameters})\) (the
i-th coordinate paired with the i-th parametric expression), returned as a
generator list over \(\mathbb{Q}[\text{coordinates}]\) — the elimination of the parameters
(Cox–Little–O'Shea ch. 3). A **polynomial** parametrisation eliminates the
parameters directly; a **rational** one \(f_i = p_i/q_i\) clears denominators and
**saturates** by the denominator product through a fresh tag variable, so the
eliminant is the true implicit equation rather than a multiple carrying spurious
components. `None` when a parametric expression is outside \(\mathbb{Q}(\operatorname{parameters})\) or
there are no parameters. Examples: \(\{x = t^2, y = t^3\}\) returns \(y^2 - x^3\);
\(\{x = (1 - t^2)/(1 + t^2), y = 2t/(1 + t^2)\}\) returns \(x^2 + y^2 - 1\).

## Example

This family is not part of the recommended JavaScript facade in this release. Call it through the generated `symi.raw` layer, whose entries are listed with their wasm-bindgen signatures above, and read [Migration](migration.md) for the ownership rules that apply there.


## Additional API

### AssumptionProposition

<a id="entry-presentation_wasm_polynomials_capability_algebra_assumption_proposition_api_assumptionproposition"></a>
<a id="placement-placement.wasm.javascript_facade.assumptionproposition.b30925c7b0d9"></a>
<p class="symi-entry-owner">Type</p>

```typescript signature
class AssumptionProposition
```

Public type placement for AssumptionProposition.

### AssumptionScope

<a id="entry-presentation_wasm_polynomials_capability_algebra_assumption_scope_api_assumptionscope"></a>
<a id="placement-placement.wasm.javascript_facade.assumptionscope.6062700f9779"></a>
<p class="symi-entry-owner">Type</p>

```typescript signature
class AssumptionScope
```

Public type placement for AssumptionScope.

### Context

<a id="entry-presentation_wasm_polynomials_capability_algebra_context_unresolved"></a>
<a id="placement-placement.wasm.javascript_facade.symifacade_context.8eb8851d9fac"></a>
<p class="symi-entry-owner">SymiFacade property</p>

```typescript signature
Context: ContextConstructor
```

Public property placement for Context.

### Context

<a id="entry-presentation_wasm_polynomials_capability_algebra_context_api_session"></a>
<a id="placement-placement.wasm.javascript_facade.context.63263e1ca6f7"></a>
<p class="symi-entry-owner">Type</p>

```typescript signature
interface Context
```

Create an isolated context with its own symbol table, interner, and assumptions.

### ContextConstructor

<a id="entry-presentation_wasm_polynomials_capability_algebra_context_constructor_api_session"></a>
<a id="placement-placement.wasm.javascript_facade.contextconstructor.1350f1ba4da2"></a>
<p class="symi-entry-owner">Type</p>

```typescript signature
interface ContextConstructor
```

Public type placement for ContextConstructor.

### CylindricalAlgebraicDecomposition

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

### Expression

<a id="entry-presentation_wasm_polynomials_capability_algebra_expression_unresolved"></a>
<a id="placement-placement.wasm.javascript_facade.symifacade_expression.93094cdfa844"></a>
<p class="symi-entry-owner">SymiFacade property</p>

```typescript signature
Expression: unknown
```

Public property placement for Expression.

### Expression

<a id="entry-presentation_wasm_polynomials_capability_algebra_expression_api_expression"></a>
<a id="placement-placement.wasm.javascript_facade.expression.41c8e859d914"></a>
<p class="symi-entry-owner">Type</p>

```typescript signature
interface Expression
```

Public type placement for Expression.

### Matrix

<a id="entry-presentation_wasm_polynomials_capability_algebra_matrix_type_unresolved"></a>
<a id="placement-placement.wasm.javascript_facade.symifacade_matrix.7fe47f8c649d"></a>
<p class="symi-entry-owner">SymiFacade property</p>

```typescript signature
Matrix: unknown
```

Public property placement for Matrix.

### Matrix

<a id="entry-presentation_wasm_polynomials_capability_algebra_matrix_api_matrix"></a>
<a id="placement-placement.wasm.javascript_facade.matrix.75a04eacf90d"></a>
<p class="symi-entry-owner">Type</p>

```typescript signature
interface Matrix
```

Construct a matrix of the given shape from `entries` in row-major order.

### PiecewiseBranch

<a id="entry-presentation_wasm_polynomials_capability_algebra_piecewise_branch_api_results_piecewisebranch"></a>
<a id="placement-placement.wasm.javascript_facade.piecewisebranch.d690830b18b4"></a>
<p class="symi-entry-owner">Type</p>

```typescript signature
interface PiecewiseBranch
```

Public type placement for PiecewiseBranch.

### SymiContextError

<a id="entry-presentation_wasm_polynomials_capability_algebra_symicontexterror_unresolved"></a>
<a id="placement-placement.wasm.javascript_facade.symicontexterror.8a9c0b29d21a"></a>
<p class="symi-entry-owner">Type</p>

```typescript signature
class SymiContextError extends SymiError {}
```

Public type placement for SymiContextError.

### SymiDomainError

<a id="entry-presentation_wasm_polynomials_capability_algebra_symidomainerror_unresolved"></a>
<a id="placement-placement.wasm.javascript_facade.symidomainerror.ca3777e8db87"></a>
<p class="symi-entry-owner">Type</p>

```typescript signature
class SymiDomainError extends SymiError {}
```

Public type placement for SymiDomainError.

### SymiError

<a id="entry-presentation_wasm_polynomials_capability_algebra_symierror_unresolved"></a>
<a id="placement-placement.wasm.javascript_facade.symierror.4dd8ef89912f"></a>
<p class="symi-entry-owner">Type</p>

```typescript signature
class SymiError extends Error
```

Public type placement for SymiError.

### SymiInternalError

<a id="entry-presentation_wasm_polynomials_capability_algebra_symiinternalerror_unresolved"></a>
<a id="placement-placement.wasm.javascript_facade.symiinternalerror.9f964e7b647d"></a>
<p class="symi-entry-owner">Type</p>

```typescript signature
class SymiInternalError extends SymiError {}
```

Public type placement for SymiInternalError.

### SymiResourceError

<a id="entry-presentation_wasm_polynomials_capability_algebra_symiresourceerror_unresolved"></a>
<a id="placement-placement.wasm.javascript_facade.symiresourceerror.e63a87983441"></a>
<p class="symi-entry-owner">Type</p>

```typescript signature
class SymiResourceError extends SymiError {}
```

Public type placement for SymiResourceError.

### SymiTypeError

<a id="entry-presentation_wasm_polynomials_capability_algebra_symitypeerror_unresolved"></a>
<a id="placement-placement.wasm.javascript_facade.symitypeerror.f73719bf5950"></a>
<p class="symi-entry-owner">Type</p>

```typescript signature
class SymiTypeError extends SymiError {}
```

Public type placement for SymiTypeError.

### absoluteValue

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

### absoluteValue

<a id="entry-presentation_wasm_polynomials_capability_algebra_absolute_value_api_expression_absolute_value"></a>
<a id="placement-placement.wasm.javascript_facade.expression_absolutevalue.d16fc61f887a"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
absoluteValue(): Expression
```

Public method placement for absoluteValue.

### add

<a id="entry-presentation_wasm_polynomials_capability_algebra_add_api_expression_add"></a>
<a id="placement-placement.wasm.javascript_facade.expression_add.d9aaa9c8c688"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
add(other: ExpressionLike): Expression
```

Sum of this expression and `other`.

### add

<a id="entry-presentation_wasm_polynomials_capability_algebra_add_api_matrix_add"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_add.b4cbe00e9031"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
add(other: Matrix): Matrix
```

Entrywise sum of two matrices of the same shape.

### addAssumptions

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

### algebraicAssumption

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

### assumptionPropositionFromLogicalExpression

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

### category

<a id="entry-presentation_wasm_polynomials_capability_algebra_category_unresolved"></a>
<a id="placement-placement.wasm.javascript_facade.symierror_category.6b54a640412f"></a>
<p class="symi-entry-owner">SymiError property</p>

```typescript signature
readonly category: DiagnosticCategory
```

Public property placement for category.

### cellCount

<a id="entry-presentation_wasm_polynomials_capability_algebra_cell_count_api_cylindricalalgebraicdecomposition_cell_count"></a>
<a id="placement-placement.wasm.wasm_class.cylindricalalgebraicdecomposition_cellcount.2a3856c631ae"></a>
<p class="symi-entry-owner">CylindricalAlgebraicDecomposition method</p>

```typescript signature
cellCount(): number
```

The number of full-dimensional cells partitioning \(\mathbb{R}^n\).

### cellDimension

<a id="entry-presentation_wasm_polynomials_capability_algebra_cell_dimension_api_cylindricalalgebraicdecomposition_cell_dimension"></a>
<a id="placement-placement.wasm.wasm_class.cylindricalalgebraicdecomposition_celldimension.58941abd698b"></a>
<p class="symi-entry-owner">CylindricalAlgebraicDecomposition method</p>

```typescript signature
cellDimension(index: number): number
```

The geometric dimension of the full cell as a subset of \(\mathbb{R}^n\) (the number of sector coordinates along its cylindrical stack).

### cellKind

<a id="entry-presentation_wasm_polynomials_capability_algebra_cell_kind_api_cylindricalalgebraicdecomposition_cell_kind"></a>
<a id="placement-placement.wasm.wasm_class.cylindricalalgebraicdecomposition_cellkind.b0d16f9fc18f"></a>
<p class="symi-entry-owner">CylindricalAlgebraicDecomposition method</p>

```typescript signature
cellKind(index: number): string
```

`"section"` or `"sector"` — whether the cell is a root section or an open interval in its top variable.

### cellSamplePoint

<a id="entry-presentation_wasm_polynomials_capability_algebra_cell_sample_point_api_cylindricalalgebraicdecomposition_cell_sample_point"></a>
<a id="placement-placement.wasm.wasm_class.cylindricalalgebraicdecomposition_cellsamplepoint.fb99fcd53a5b"></a>
<p class="symi-entry-owner">CylindricalAlgebraicDecomposition method</p>

```typescript signature
cellSamplePoint(index: number): Float64Array
```

The coordinates of the full cell's sample point as floats — a numeric view via the multi-precision evaluator, not a decision.

### cellSignVector

<a id="entry-presentation_wasm_polynomials_capability_algebra_cell_sign_vector_api_cylindricalalgebraicdecomposition_cell_sign_vector"></a>
<a id="placement-placement.wasm.wasm_class.cylindricalalgebraicdecomposition_cellsignvector.1dd5b1c2f6cd"></a>
<p class="symi-entry-owner">CylindricalAlgebraicDecomposition method</p>

```typescript signature
cellSignVector(index: number): Int32Array
```

The exact sign (\(-1\), \(0\), or \(+1\)) of each input polynomial on the full cell, in input order.

### changeMonomialOrder

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

### clearAllAssumptions

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

### code

<a id="entry-presentation_wasm_polynomials_capability_algebra_code_unresolved"></a>
<a id="placement-placement.wasm.javascript_facade.symierror_code.30f9d8518f8d"></a>
<p class="symi-entry-owner">SymiError property</p>

```typescript signature
readonly code: DiagnosticCategory
```

Public property placement for code.

### coefficient

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

### coefficient

<a id="entry-presentation_wasm_polynomials_capability_algebra_coefficient_api_partial_differential_equations_partialdifferentialequationjetcoefficient_coefficient"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationjetcoefficient_coefficient.517fdfbfa0c1"></a>
<p class="symi-entry-owner">PartialDifferentialEquationJetCoefficient property</p>

```typescript signature
readonly coefficient: Expression
```

The exact coefficient expression.

### coefficient

<a id="entry-presentation_wasm_polynomials_capability_algebra_coefficient_api_partial_differential_equations_partialdifferentialequationprincipalcoefficient_coefficient"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationprincipalcoefficient_coefficient.c6dd1d226399"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPrincipalCoefficient property</p>

```typescript signature
readonly coefficient: Expression
```

The raw coefficient Expression, before mixed terms are halved.

### complexAssumption

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

### complexEntries

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

### compositeAssumption

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

### condition

<a id="entry-presentation_wasm_polynomials_capability_algebra_condition_api_results_piecewisebranch_condition"></a>
<a id="placement-placement.wasm.javascript_facade.piecewisebranch_condition.64f74fb11773"></a>
<p class="symi-entry-owner">PiecewiseBranch property</p>

```typescript signature
condition: ExpressionLike
```

Public property placement for condition.

### congruenceModulus

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

### congruentAssumption

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

### couldHold

<a id="entry-presentation_wasm_polynomials_capability_algebra_could_hold_api_assumptionscope_could_hold"></a>
<a id="placement-placement.wasm.javascript_facade.assumptionscope_couldhold.cd0ffcddc4c7"></a>
<p class="symi-entry-owner">AssumptionScope method</p>

```typescript signature
couldHold(proposition: AssumptionProposition): boolean | null
```

Ask whether a proposition is compatible with the immutable scope snapshot.

### couldHold

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

### definedAssumption

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

### deserializeAssumptionProposition

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

### diagonalMatrix

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

### eliminationIdeal

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

### equalAssumption

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

### evenAssumption

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

### expected

<a id="entry-presentation_wasm_polynomials_capability_algebra_expected_unresolved"></a>
<a id="placement-placement.wasm.javascript_facade.symierror_expected.a59eda760e94"></a>
<p class="symi-entry-owner">SymiError property</p>

```typescript signature
readonly expected: string | null
```

Public property placement for expected.

### extendedRealAssumption

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

### finiteAssumption

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

### free

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

### fullRankMatrix

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

### greaterAssumption

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

### greaterOrEqualAssumption

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

### groebnerBasis

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

### hasComplexEntries

<a id="entry-presentation_wasm_polynomials_capability_algebra_has_complex_entries_api_matrix_has_complex_entries"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_hascomplexentries.e62108844da5"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
hasComplexEntries(): boolean | null
```

Query whether every entry is finite complex.

### hasIntegerEntries

<a id="entry-presentation_wasm_polynomials_capability_algebra_has_integer_entries_api_matrix_has_integer_entries"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_hasintegerentries.2146ac2809b2"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
hasIntegerEntries(): boolean | null
```

Query whether every entry is an integer.

### hasRealEntries

<a id="entry-presentation_wasm_polynomials_capability_algebra_has_real_entries_api_matrix_has_real_entries"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_hasrealentries.b42db7a5a2d1"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
hasRealEntries(): boolean | null
```

Query whether every entry is real.

### hermitianMatrix

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

### hint

<a id="entry-presentation_wasm_polynomials_capability_algebra_hint_unresolved"></a>
<a id="placement-placement.wasm.javascript_facade.symierror_hint.dc290abb816b"></a>
<p class="symi-entry-owner">SymiError property</p>

```typescript signature
readonly hint: string | null
```

Public property placement for hint.

### idealIntersection

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

### idealMembership

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

### idealProduct

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

### idealSum

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

### identityMatrix

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

### infiniteAssumption

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

### integerAssumption

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

### integerEntries

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

### invertibleMatrix

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

### irrationalAssumption

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

### isAlgebraic

<a id="entry-presentation_wasm_polynomials_capability_algebra_is_algebraic_api_expression_is_algebraic"></a>
<a id="placement-placement.wasm.javascript_facade.expression_isalgebraic.166881d40821"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isAlgebraic(): boolean | null
```

Whether the expression is known to be algebraic.

### isComplex

<a id="entry-presentation_wasm_polynomials_capability_algebra_is_complex_api_expression_is_complex"></a>
<a id="placement-placement.wasm.javascript_facade.expression_iscomplex.cf239ae130b6"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isComplex(): boolean | null
```

Whether the expression is known to be finite complex.

### isComposite

<a id="entry-presentation_wasm_polynomials_capability_algebra_is_composite_api_expression_is_composite"></a>
<a id="placement-placement.wasm.javascript_facade.expression_iscomposite.acede8711f42"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isComposite(): boolean | null
```

Whether the expression is known to be composite.

### isDiagonalMatrix

<a id="entry-presentation_wasm_polynomials_capability_algebra_is_diagonal_matrix_api_matrix_is_diagonal_matrix"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_isdiagonalmatrix.415747dbf667"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isDiagonalMatrix(): boolean | null
```

Query whether this matrix is diagonal.

### isEven

<a id="entry-presentation_wasm_polynomials_capability_algebra_is_even_api_expression_is_even"></a>
<a id="placement-placement.wasm.javascript_facade.expression_iseven.c8395efaf78a"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isEven(): boolean | null
```

Whether the expression is known to be even.

### isExtendedReal

<a id="entry-presentation_wasm_polynomials_capability_algebra_is_extended_real_api_expression_is_extended_real"></a>
<a id="placement-placement.wasm.javascript_facade.expression_isextendedreal.8b90e63c733a"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isExtendedReal(): boolean | null
```

Whether the expression is known to be extended-real.

### isFullRankMatrix

<a id="entry-presentation_wasm_polynomials_capability_algebra_is_full_rank_matrix_api_matrix_is_full_rank_matrix"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_isfullrankmatrix.c1348883d7c3"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isFullRankMatrix(): boolean | null
```

Query whether this matrix has full rank.

### isHermitianMatrix

<a id="entry-presentation_wasm_polynomials_capability_algebra_is_hermitian_matrix_api_matrix_is_hermitian_matrix"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_ishermitianmatrix.5c0a1b02c764"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isHermitianMatrix(): boolean | null
```

Query whether this matrix is Hermitian.

### isIdentityMatrix

<a id="entry-presentation_wasm_polynomials_capability_algebra_is_identity_matrix_api_matrix_is_identity_matrix"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_isidentitymatrix.cae24290fdfb"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isIdentityMatrix(): boolean | null
```

Query whether this matrix is the identity matrix.

### isInfinite

<a id="entry-presentation_wasm_polynomials_capability_algebra_is_infinite_api_expression_is_infinite"></a>
<a id="placement-placement.wasm.javascript_facade.expression_isinfinite.baee2508c4d8"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isInfinite(): boolean | null
```

Whether the expression is known to be infinite.

### isInvertibleMatrix

<a id="entry-presentation_wasm_polynomials_capability_algebra_is_invertible_matrix_api_matrix_is_invertible_matrix"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_isinvertiblematrix.505c014c37f1"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isInvertibleMatrix(): boolean | null
```

Query whether this matrix is invertible.

### isIrrational

<a id="entry-presentation_wasm_polynomials_capability_algebra_is_irrational_api_expression_is_irrational"></a>
<a id="placement-placement.wasm.javascript_facade.expression_isirrational.f90590ac06dc"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isIrrational(): boolean | null
```

Whether the expression is known to be irrational.

### isNatural

<a id="entry-presentation_wasm_polynomials_capability_algebra_is_natural_api_expression_is_natural"></a>
<a id="placement-placement.wasm.javascript_facade.expression_isnatural.c7d8ac466cd4"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isNatural(): boolean | null
```

Whether the expression is known to be natural.

### isNonpositive

<a id="entry-presentation_wasm_polynomials_capability_algebra_is_nonpositive_api_expression_is_nonpositive"></a>
<a id="placement-placement.wasm.javascript_facade.expression_isnonpositive.15bf64f03f4c"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isNonpositive(): boolean | null
```

Whether the expression is known to be nonpositive.

### isNormalMatrix

<a id="entry-presentation_wasm_polynomials_capability_algebra_is_normal_matrix_api_matrix_is_normal_matrix"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_isnormalmatrix.98b51d7166e5"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isNormalMatrix(): boolean | null
```

Query whether this matrix is normal.

### isOdd

<a id="entry-presentation_wasm_polynomials_capability_algebra_is_odd_api_expression_is_odd"></a>
<a id="placement-placement.wasm.javascript_facade.expression_isodd.9cef0c32b06d"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isOdd(): boolean | null
```

Whether the expression is known to be odd.

### isOrthogonalMatrix

<a id="entry-presentation_wasm_polynomials_capability_algebra_is_orthogonal_matrix_api_matrix_is_orthogonal_matrix"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_isorthogonalmatrix.eda747c0fc34"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isOrthogonalMatrix(): boolean | null
```

Query whether this matrix is orthogonal.

### isPositiveDefiniteMatrix

<a id="entry-presentation_wasm_polynomials_capability_algebra_is_positive_definite_matrix_api_matrix_is_positive_definite_matrix"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_ispositivedefinitematrix.e2669501e27d"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isPositiveDefiniteMatrix(): boolean | null
```

Query whether this matrix is positive definite.

### isPositiveInteger

<a id="entry-presentation_wasm_polynomials_capability_algebra_is_positive_integer_api_expression_is_positive_integer"></a>
<a id="placement-placement.wasm.javascript_facade.expression_ispositiveinteger.d958deb107ee"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isPositiveInteger(): boolean | null
```

Whether the expression is known to be a positive integer.

### isPositiveSemidefiniteMatrix

<a id="entry-presentation_wasm_polynomials_capability_algebra_is_positive_semidefinite_matrix_api_matrix_is_positive_semidefinite_matrix"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_ispositivesemidefinitematrix.772c2ae7ee0e"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isPositiveSemidefiniteMatrix(): boolean | null
```

Query whether this matrix is positive semidefinite.

### isSingularMatrix

<a id="entry-presentation_wasm_polynomials_capability_algebra_is_singular_matrix_api_matrix_is_singular_matrix"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_issingularmatrix.873fe293b8c3"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isSingularMatrix(): boolean | null
```

Query whether this matrix is singular.

### isSquare

<a id="entry-presentation_wasm_polynomials_capability_algebra_is_square_api_matrix_is_square"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_issquare.efcc71c65d6c"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isSquare(): boolean | null
```

Query whether this matrix is square.

### isSymmetricMatrix

<a id="entry-presentation_wasm_polynomials_capability_algebra_is_symmetric_matrix_api_matrix_is_symmetric_matrix"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_issymmetricmatrix.c48f740a1f98"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isSymmetricMatrix(): boolean | null
```

Query whether this matrix is symmetric.

### isTranscendental

<a id="entry-presentation_wasm_polynomials_capability_algebra_is_transcendental_api_expression_is_transcendental"></a>
<a id="placement-placement.wasm.javascript_facade.expression_istranscendental.54d40bab7088"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isTranscendental(): boolean | null
```

Whether the expression is known to be transcendental.

### isUnitaryMatrix

<a id="entry-presentation_wasm_polynomials_capability_algebra_is_unitary_matrix_api_matrix_is_unitary_matrix"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_isunitarymatrix.53b189737152"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isUnitaryMatrix(): boolean | null
```

Query whether this matrix is unitary.

### isZero

<a id="entry-presentation_wasm_polynomials_capability_algebra_is_zero_api_expression_is_zero"></a>
<a id="placement-placement.wasm.javascript_facade.expression_iszero.4743ee8492f4"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isZero(): boolean | null
```

Whether the expression is known to be zero.

### isZeroMatrix

<a id="entry-presentation_wasm_polynomials_capability_algebra_is_zero_matrix_api_matrix_is_zero_matrix"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_iszeromatrix.311afbe0ef29"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isZeroMatrix(): boolean | null
```

Query whether this matrix is the zero matrix.

### isolateRealRoots

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

### leadingCoefficient

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

### leftOperand

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

### lessAssumption

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

### lessOrEqualAssumption

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

### lowerTriangularMatrix

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

### matrixDiagonal

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

### matrixIdentity

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

### matrixShape

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

### matrixZero

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

### memberAssumption

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

### membershipElement

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

### membershipSet

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

### multiply

<a id="entry-presentation_wasm_polynomials_capability_algebra_multiply_api_expression_multiply"></a>
<a id="placement-placement.wasm.javascript_facade.expression_multiply.6129ea2e7a04"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
multiply(other: ExpressionLike): Expression
```

Product of this expression and `other`.

### multiply

<a id="entry-presentation_wasm_polynomials_capability_algebra_multiply_api_matrix_multiply"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_multiply.2820cc1c77f6"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
multiply(other: Matrix): Matrix
```

Matrix product; inner dimensions must agree.

### naturalAssumption

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

### negativeAssumption

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

### new

<a id="entry-presentation_wasm_polynomials_capability_algebra_new_unresolved"></a>
<a id="placement-placement.wasm.javascript_facade.contextconstructor_new.0f9094d96686"></a>
<p class="symi-entry-owner">new constructor</p>

```typescript signature
new Context(): Context
```

Construct the CAD of the polynomials in the given variable order \(x_1,\ldots,x_n\); projection eliminates \(x_n\) first).

### nonnegativeAssumption

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

### nonpositiveAssumption

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

### nonzeroAssumption

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

### normalMatrix

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

### notEqualAssumption

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

### oddAssumption

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

### operation

<a id="entry-presentation_wasm_polynomials_capability_algebra_operation_unresolved"></a>
<a id="placement-placement.wasm.javascript_facade.symierror_operation.27d0151a414d"></a>
<p class="symi-entry-owner">SymiError property</p>

```typescript signature
readonly operation: string | null
```

Public property placement for operation.

### orthogonalMatrix

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

### parameterPath

<a id="entry-presentation_wasm_polynomials_capability_algebra_parameter_path_unresolved"></a>
<a id="placement-placement.wasm.javascript_facade.symierror_parameterpath.4560085cfcfd"></a>
<p class="symi-entry-owner">SymiError property</p>

```typescript signature
readonly parameterPath: string | null
```

Public property placement for parameterPath.

### polynomialGcd

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

### positiveAssumption

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

### positiveDefiniteMatrix

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

### positiveIntegerAssumption

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

### positiveSemidefiniteMatrix

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

### primeAssumption

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

### projectionOperatorUsed

<a id="entry-presentation_wasm_polynomials_capability_algebra_projection_operator_used_api_cylindricalalgebraicdecomposition_projection_operator_used"></a>
<a id="placement-placement.wasm.wasm_class.cylindricalalgebraicdecomposition_projectionoperatorused.34f87e17828d"></a>
<p class="symi-entry-owner">CylindricalAlgebraicDecomposition method</p>

```typescript signature
projectionOperatorUsed(): string
```

The projection operator the decomposition was built with: `"brown"` for the well-oriented fast path, `"lazard"` when the well-orientedness guard forced the complete fallback, `"equational_constraint"` for an equational-constraint CAD.

### rationalAssumption

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

### raw

<a id="entry-presentation_wasm_polynomials_capability_algebra_raw_unresolved"></a>
<a id="placement-placement.wasm.javascript_facade.symifacade_raw.aef6294b0f07"></a>
<p class="symi-entry-owner">SymiFacade property</p>

```typescript signature
readonly raw: unknown
```

Public property placement for raw.

### realAssumption

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

### realEntries

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

### received

<a id="entry-presentation_wasm_polynomials_capability_algebra_received_unresolved"></a>
<a id="placement-placement.wasm.javascript_facade.symierror_received.ae703f25576e"></a>
<p class="symi-entry-owner">SymiError property</p>

```typescript signature
readonly received: string | null
```

Public property placement for received.

### relationKind

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

### rightOperand

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

### singularMatrix

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

### squareMatrix

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

### subtract

<a id="entry-presentation_wasm_polynomials_capability_algebra_subtract_api_expression_subtract"></a>
<a id="placement-placement.wasm.javascript_facade.expression_subtract.01fa19892c94"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
subtract(other: ExpressionLike): Expression
```

Difference of this expression and `other`.

### symmetricMatrix

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

### toString

<a id="entry-presentation_wasm_polynomials_capability_algebra_tostring_api_assumptionproposition_to_string"></a>
<a id="placement-placement.wasm.javascript_facade.assumptionproposition_tostring.1bef2e8fdf8b"></a>
<p class="symi-entry-owner">AssumptionProposition method</p>

```typescript signature
toString(): string
```

Return the canonical formula spelling.

### toString

<a id="entry-presentation_wasm_polynomials_capability_algebra_tostring_api_expression_to_string"></a>
<a id="placement-placement.wasm.javascript_facade.expression_tostring.f0177b10aa8c"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
toString(): string
```

The mathematical text of the expression.

### toString

<a id="entry-presentation_wasm_polynomials_capability_algebra_tostring_unresolved"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_tostring.afeb8a997d5b"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
toString(): string
```

The mathematical text of this object, as a JavaScript string.

### transcendentalAssumption

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

### unitaryMatrix

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

### upperTriangularMatrix

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

### value

<a id="entry-presentation_wasm_polynomials_capability_algebra_value_api_results_piecewisebranch_value"></a>
<a id="placement-placement.wasm.javascript_facade.piecewisebranch_value.801f7c3c6459"></a>
<p class="symi-entry-owner">PiecewiseBranch property</p>

```typescript signature
value: ExpressionLike
```

Public property placement for value.

### zeroAssumption

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

### zeroEquivalent

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

### zeroEquivalent

<a id="entry-presentation_wasm_polynomials_capability_algebra_zero_equivalent_api_expression_zero_equivalent"></a>
<a id="placement-placement.wasm.javascript_facade.expression_zeroequivalent.03483f9201c5"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
zeroEquivalent(constraint?: ExpressionLike | null): "true" | "false" | "unknown"
```

Prove whether this expression is zero wherever it is defined, returning `"true"`, `"false"`, or `"unknown"`.

### zeroMatrix

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

