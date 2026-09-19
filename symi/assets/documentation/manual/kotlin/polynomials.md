# Polynomial queries

These take ordinary expressions plus a variable name; the named variable
becomes the main polynomial variable and every other free variable rides
along symbolically in the coefficients. An expression that is not polynomial
in the variable (a transcendental call of it, a non-integer power of it)
makes the query decline — `None` for `degree`, an error for the others.

### degree

<a id="entry-presentation_kotlin_polynomials_capability_algebra_degree_api_algebra_session_degree"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_degree.1eca64a7ebc5"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun degree(
    inputExpression: UniffiExpression,
    variable: kotlin.String,
): kotlin.ULong?
```


Degree in `variable`. `None` when the expression is not polynomial in
`variable` **or is identically zero** (the zero polynomial has no degree
under the core convention).

### leading_coefficient

<a id="entry-presentation_kotlin_polynomials_capability_algebra_leading_coefficient_api_algebra_session_leading_coefficient"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_leadingcoefficient.e9dfe4aeb2af"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun leadingCoefficient(
    inputExpression: UniffiExpression,
    variable: kotlin.String,
): UniffiExpression
```


Coefficient of the highest power of `variable`; may contain the other free
variables. Errors on non-polynomial or zero input.

### coefficient

Coefficient of `variable^power`; integer 0 when the term is absent. Errors
on non-polynomial input.

### polynomial_gcd

<a id="entry-presentation_kotlin_polynomials_capability_algebra_polynomial_gcd_api_algebra_session_polynomial_gcd"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_polynomialgcd.5b17fffe0faf"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun polynomialGcd(
    left: UniffiExpression,
    right: UniffiExpression,
    variable: kotlin.String,
): UniffiExpression
```


Greatest common divisor of the two expressions as polynomials in `variable`
(primitive, with the core's sign normalisation). Errors when either input is
not polynomial in `variable`.

### resultant

<a id="entry-presentation_kotlin_polynomials_capability_algebra_resultant_api_algebra_session_resultant"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_resultant.cb67aabd72fd"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun resultant(
    left: UniffiExpression,
    right: UniffiExpression,
    variable: kotlin.String,
): UniffiExpression
```


Resultant with respect to `variable`; zero exactly when the two polynomials
share a root (over the algebraic closure). Errors on non-polynomial input.

### isolate_real_roots

<a id="entry-presentation_kotlin_polynomials_capability_algebra_isolate_real_roots_api_solving_session_isolate_real_roots"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_isolaterealroots.70445057ba8a"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun isolateRealRoots(
    inputExpression: UniffiExpression,
    variable: kotlin.String,
): List<UniffiIsolatingInterval>
```


One `(lower, upper)` rational isolating interval per distinct real root,
sorted ascending; a collapsed pair `(r, r)` marks an exact rational root.
Requires a non-zero **univariate** polynomial with rational coefficients.
**Notes:** WASM returns `IsolatingInterval` objects with `lower`/`upper`
getters.

### isolating_interval (WASM result class)

### lower

<a id="entry-presentation_kotlin_polynomials_capability_algebra_lower_api_results_isolatinginterval_lower"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiisolatinginterval_lower.cf5b4e1d548f"></a>
<p class="symi-entry-owner">UniffiIsolatingInterval method</p>

```kotlin signature
fun lower(): UniffiExpression
```


### upper

<a id="entry-presentation_kotlin_polynomials_capability_algebra_upper_api_results_isolatinginterval_upper"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiisolatinginterval_upper.a7b5035db9e4"></a>
<p class="symi-entry-owner">UniffiIsolatingInterval method</p>

```kotlin signature
fun upper(): UniffiExpression
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

<a id="entry-presentation_kotlin_polynomials_capability_algebra_groebner_basis_api_algebra_session_groebner_basis"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_groebnerbasis.0649413af112"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun groebnerBasis(
    generators: List<UniffiExpression>,
    variables: List<kotlin.String>,
    order: UniffiMonomialOrdering,
): List<UniffiExpression>?
```


The canonical reduced Gröbner basis of the ideal `<generators>` under the named
monomial order — monic, autoreduced, and sorted, so it is unique for the
`(ideal, order)` pair. `None` when any generator is outside \(\mathbb{Q}[\text{variables}]\).

### ideal_membership

<a id="entry-presentation_kotlin_polynomials_capability_algebra_ideal_membership_api_algebra_session_ideal_membership"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_idealmembership.cc0474e382fd"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun idealMembership(
    element: UniffiExpression,
    generators: List<UniffiExpression>,
    variables: List<kotlin.String>,
    order: UniffiMonomialOrdering,
): kotlin.Boolean?
```


Whether `element` lies in the ideal `<generators>`, decided by reducing it to
its normal form modulo the Gröbner basis (zero exactly when it is a member).
The verdict is independent of the order. `None` when the element or a generator
is outside \(\mathbb{Q}[\text{variables}]\).

### ideal_sum

<a id="entry-presentation_kotlin_polynomials_capability_algebra_ideal_sum_api_algebra_session_ideal_sum"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_idealsum.80c8c34aa7b9"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun idealSum(
    generatorsLeft: List<UniffiExpression>,
    generatorsRight: List<UniffiExpression>,
    variables: List<kotlin.String>,
    order: UniffiMonomialOrdering,
): List<UniffiExpression>?
```


A Gröbner basis of the ideal sum `I + J`, the ideal generated by the two
generator lists together. `None` on a non-\(\mathbb{Q}[\text{variables}]\) generator.

### ideal_product

<a id="entry-presentation_kotlin_polynomials_capability_algebra_ideal_product_api_algebra_session_ideal_product"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_idealproduct.ddd223f728ab"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun idealProduct(
    generatorsLeft: List<UniffiExpression>,
    generatorsRight: List<UniffiExpression>,
    variables: List<kotlin.String>,
    order: UniffiMonomialOrdering,
): List<UniffiExpression>?
```


A Gröbner basis of the ideal product \(I J\), generated by all pairwise
products of the two generator lists. `None` on a non-\(\mathbb{Q}[\text{variables}]\) generator.

### ideal_intersection

<a id="entry-presentation_kotlin_polynomials_capability_algebra_ideal_intersection_api_algebra_session_ideal_intersection"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_idealintersection.026f4a5cc424"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun idealIntersection(
    generatorsLeft: List<UniffiExpression>,
    generatorsRight: List<UniffiExpression>,
    variables: List<kotlin.String>,
    order: UniffiMonomialOrdering,
): List<UniffiExpression>?
```


A generating set of the ideal intersection \(I \cap J\), computed by the standard
tag-variable elimination construction \(t I + (1-t) J\). `None` on a
non-\(\mathbb{Q}[\text{variables}]\) generator.

### elimination_ideal

<a id="entry-presentation_kotlin_polynomials_capability_algebra_elimination_ideal_api_algebra_session_elimination_ideal"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_eliminationideal.8b6f1337e0dd"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun eliminationIdeal(
    generators: List<UniffiExpression>,
    variables: List<kotlin.String>,
    eliminate: List<kotlin.String>,
): List<UniffiExpression>?
```


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

<a id="entry-presentation_kotlin_polynomials_capability_algebra_change_monomial_order_api_algebra_session_change_monomial_order"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_changemonomialorder.79f1c2356ee4"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun changeMonomialOrder(
    basis: List<UniffiExpression>,
    variables: List<kotlin.String>,
    sourceOrder: UniffiMonomialOrdering,
    targetOrder: UniffiMonomialOrdering,
): List<UniffiExpression>?
```


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

<a id="entry-presentation_kotlin_polynomials_capability_algebra_implicitize_api_algebra_session_implicitize"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_implicitize.a298d789c7d4"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun implicitize(
    coordinates: List<kotlin.String>,
    parameters: List<kotlin.String>,
    parametricExpressions: List<UniffiExpression>,
): List<UniffiExpression>?
```


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


## Additional API

### absolute_value

<a id="entry-presentation_kotlin_polynomials_capability_algebra_absolute_value_api_session_absolute_value"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_absolutevalue.93275bfef33a"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun absoluteValue(argument: UniffiExpression): UniffiExpression
```

Provides the `absolute_value` operation on this mobile object.

### absolute_value

<a id="entry-presentation_kotlin_polynomials_capability_algebra_absolute_value_api_expression_absolute_value"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_absolutevalue.38c661010079"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun absoluteValue(): UniffiExpression
```

Provides the `absolute_value` operation on this mobile object.

### add

<a id="entry-presentation_kotlin_polynomials_capability_algebra_add_api_expression_add"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_add.f11dd11a2684"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun add(other: UniffiExpression): UniffiExpression
```

Entrywise sum of two matrices of the same shape.

### add

<a id="entry-presentation_kotlin_polynomials_capability_algebra_add_api_matrix_add"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_add.e9918d9e5882"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun add(other: UniffiMatrix): UniffiMatrix
```

Entrywise sum of two matrices of the same shape.

### coefficient

<a id="entry-presentation_kotlin_polynomials_capability_algebra_coefficient_api_algebra_session_coefficient"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_coefficient.60d73d3f8e8f"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun coefficient(
    inputExpression: UniffiExpression,
    variable: kotlin.String,
    power: kotlin.ULong,
): UniffiExpression
```

Coefficient of `variable^power`; integer 0 when the term is absent. Errors on non-polynomial input.

### coefficient

<a id="entry-presentation_kotlin_polynomials_capability_algebra_coefficient_api_partial_differential_equations_partialdifferentialequationjetcoefficient_coefficient"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationjetcoefficient_coefficient.804d7d84b549"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationJetCoefficient method</p>

```kotlin signature
fun coefficient(): UniffiExpression
```

The exact coefficient expression.

### coefficient

<a id="entry-presentation_kotlin_polynomials_capability_algebra_coefficient_api_partial_differential_equations_partialdifferentialequationprincipalcoefficient_coefficient"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationprincipalcoefficient_coefficient.38d9336ec650"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPrincipalCoefficient method</p>

```kotlin signature
fun coefficient(): UniffiExpression
```

The raw coefficient expression, before mixed terms are halved.

### complex_entries

<a id="entry-presentation_kotlin_polynomials_capability_algebra_complex_entries_api_session_complex_entries"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_complexentries.fe5c0641bf45"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun complexEntries(subject: UniffiMatrix): UniffiAssumptionProposition
```

Provides the `complex_entries` operation on this mobile object.

### cylindrical_algebraic_decomposition

<a id="entry-presentation_kotlin_polynomials_capability_algebra_cylindrical_algebraic_decomposition_api_session_cylindrical_algebraic_decomposition"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_cylindricalalgebraicdecomposition.1a00effba0b1"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun cylindricalAlgebraicDecomposition(
    expressions: List<UniffiExpression>,
    variables: List<kotlin.String>,
    equationalConstraints: List<kotlin.ULong>,
): UniffiCylindricalAlgebraicDecomposition
```

Construct the CAD of the polynomials in the given variable order \(x_1,\ldots,x_n\); projection eliminates \(x_n\) first).

### diagonal_matrix

<a id="entry-presentation_kotlin_polynomials_capability_algebra_diagonal_matrix_api_session_diagonal_matrix"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_diagonalmatrix.9bff826f0672"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun diagonalMatrix(subject: UniffiMatrix): UniffiAssumptionProposition
```

Provides the `diagonal_matrix` operation on this mobile object.

### full_rank_matrix

<a id="entry-presentation_kotlin_polynomials_capability_algebra_full_rank_matrix_api_session_full_rank_matrix"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_fullrankmatrix.7c90405d0df0"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun fullRankMatrix(subject: UniffiMatrix): UniffiAssumptionProposition
```

Provides the `full_rank_matrix` operation on this mobile object.

### has_complex_entries

<a id="entry-presentation_kotlin_polynomials_capability_algebra_has_complex_entries_api_matrix_has_complex_entries"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_hascomplexentries.c984660638dc"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun hasComplexEntries(): UniffiTruthValue
```

Query whether every entry is finite complex.

### has_integer_entries

<a id="entry-presentation_kotlin_polynomials_capability_algebra_has_integer_entries_api_matrix_has_integer_entries"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_hasintegerentries.d9873706d9da"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun hasIntegerEntries(): UniffiTruthValue
```

Query whether every entry is an integer.

### has_real_entries

<a id="entry-presentation_kotlin_polynomials_capability_algebra_has_real_entries_api_matrix_has_real_entries"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_hasrealentries.a1264d659f9f"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun hasRealEntries(): UniffiTruthValue
```

Query whether every entry is real.

### hermitian_matrix

<a id="entry-presentation_kotlin_polynomials_capability_algebra_hermitian_matrix_api_session_hermitian_matrix"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_hermitianmatrix.e161f2877462"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun hermitianMatrix(subject: UniffiMatrix): UniffiAssumptionProposition
```

Provides the `hermitian_matrix` operation on this mobile object.

### identity_matrix

<a id="entry-presentation_kotlin_polynomials_capability_algebra_identity_matrix_api_session_identity_matrix"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_identitymatrix.20d506bce27b"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun identityMatrix(subject: UniffiMatrix): UniffiAssumptionProposition
```

Provides the `identity_matrix` operation on this mobile object.

### integer_entries

<a id="entry-presentation_kotlin_polynomials_capability_algebra_integer_entries_api_session_integer_entries"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_integerentries.701f4dd04462"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun integerEntries(subject: UniffiMatrix): UniffiAssumptionProposition
```

Provides the `integer_entries` operation on this mobile object.

### invertible_matrix

<a id="entry-presentation_kotlin_polynomials_capability_algebra_invertible_matrix_api_session_invertible_matrix"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_invertiblematrix.14c1a3d8463c"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun invertibleMatrix(subject: UniffiMatrix): UniffiAssumptionProposition
```

Provides the `invertible_matrix` operation on this mobile object.

### is_algebraic

<a id="entry-presentation_kotlin_polynomials_capability_algebra_is_algebraic_api_expression_is_algebraic"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_isalgebraic.0d1e8911a82a"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun isAlgebraic(): UniffiTruthValue
```

Provides the `is_algebraic` operation on this mobile object.

### is_complex

<a id="entry-presentation_kotlin_polynomials_capability_algebra_is_complex_api_expression_is_complex"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_iscomplex.5be00393deb6"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun isComplex(): UniffiTruthValue
```

Provides the `is_complex` operation on this mobile object.

### is_composite

<a id="entry-presentation_kotlin_polynomials_capability_algebra_is_composite_api_expression_is_composite"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_iscomposite.d2a612ec2fdb"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun isComposite(): UniffiTruthValue
```

Provides the `is_composite` operation on this mobile object.

### is_diagonal_matrix

<a id="entry-presentation_kotlin_polynomials_capability_algebra_is_diagonal_matrix_api_matrix_is_diagonal_matrix"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_isdiagonalmatrix.5f102572ea2b"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun isDiagonalMatrix(): UniffiTruthValue
```

Query whether this matrix is diagonal.

### is_even

<a id="entry-presentation_kotlin_polynomials_capability_algebra_is_even_api_expression_is_even"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_iseven.305212864d97"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun isEven(): UniffiTruthValue
```

Provides the `is_even` operation on this mobile object.

### is_extended_real

<a id="entry-presentation_kotlin_polynomials_capability_algebra_is_extended_real_api_expression_is_extended_real"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_isextendedreal.c940074fb614"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun isExtendedReal(): UniffiTruthValue
```

Provides the `is_extended_real` operation on this mobile object.

### is_full_rank_matrix

<a id="entry-presentation_kotlin_polynomials_capability_algebra_is_full_rank_matrix_api_matrix_is_full_rank_matrix"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_isfullrankmatrix.c82ad44621d3"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun isFullRankMatrix(): UniffiTruthValue
```

Query whether this matrix has full rank.

### is_hermitian_matrix

<a id="entry-presentation_kotlin_polynomials_capability_algebra_is_hermitian_matrix_api_matrix_is_hermitian_matrix"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_ishermitianmatrix.26e7583f27f0"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun isHermitianMatrix(): UniffiTruthValue
```

Query whether this matrix is Hermitian.

### is_identity_matrix

<a id="entry-presentation_kotlin_polynomials_capability_algebra_is_identity_matrix_api_matrix_is_identity_matrix"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_isidentitymatrix.304acfe1e92d"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun isIdentityMatrix(): UniffiTruthValue
```

Query whether this matrix is the identity matrix.

### is_infinite

<a id="entry-presentation_kotlin_polynomials_capability_algebra_is_infinite_api_expression_is_infinite"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_isinfinite.84eeca60a66f"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun isInfinite(): UniffiTruthValue
```

Provides the `is_infinite` operation on this mobile object.

### is_invertible_matrix

<a id="entry-presentation_kotlin_polynomials_capability_algebra_is_invertible_matrix_api_matrix_is_invertible_matrix"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_isinvertiblematrix.e6a08c287242"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun isInvertibleMatrix(): UniffiTruthValue
```

Query whether this matrix is invertible.

### is_irrational

<a id="entry-presentation_kotlin_polynomials_capability_algebra_is_irrational_api_expression_is_irrational"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_isirrational.b2a65654a1e2"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun isIrrational(): UniffiTruthValue
```

Provides the `is_irrational` operation on this mobile object.

### is_natural

<a id="entry-presentation_kotlin_polynomials_capability_algebra_is_natural_api_expression_is_natural"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_isnatural.8bb527677cb6"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun isNatural(): UniffiTruthValue
```

Provides the `is_natural` operation on this mobile object.

### is_nonpositive

<a id="entry-presentation_kotlin_polynomials_capability_algebra_is_nonpositive_api_expression_is_nonpositive"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_isnonpositive.d4bf0d2584d9"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun isNonpositive(): UniffiTruthValue
```

Provides the `is_nonpositive` operation on this mobile object.

### is_normal_matrix

<a id="entry-presentation_kotlin_polynomials_capability_algebra_is_normal_matrix_api_matrix_is_normal_matrix"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_isnormalmatrix.119809d161b9"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun isNormalMatrix(): UniffiTruthValue
```

Query whether this matrix is normal.

### is_odd

<a id="entry-presentation_kotlin_polynomials_capability_algebra_is_odd_api_expression_is_odd"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_isodd.ebefaade489f"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun isOdd(): UniffiTruthValue
```

Provides the `is_odd` operation on this mobile object.

### is_orthogonal_matrix

<a id="entry-presentation_kotlin_polynomials_capability_algebra_is_orthogonal_matrix_api_matrix_is_orthogonal_matrix"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_isorthogonalmatrix.5cf3f4c7b232"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun isOrthogonalMatrix(): UniffiTruthValue
```

Query whether this matrix is orthogonal.

### is_positive_definite_matrix

<a id="entry-presentation_kotlin_polynomials_capability_algebra_is_positive_definite_matrix_api_matrix_is_positive_definite_matrix"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_ispositivedefinitematrix.00d4b7e8012c"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun isPositiveDefiniteMatrix(): UniffiTruthValue
```

Query whether this matrix is positive definite.

### is_positive_integer

<a id="entry-presentation_kotlin_polynomials_capability_algebra_is_positive_integer_api_expression_is_positive_integer"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_ispositiveinteger.6dc5ac646d1b"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun isPositiveInteger(): UniffiTruthValue
```

Provides the `is_positive_integer` operation on this mobile object.

### is_positive_semidefinite_matrix

<a id="entry-presentation_kotlin_polynomials_capability_algebra_is_positive_semidefinite_matrix_api_matrix_is_positive_semidefinite_matrix"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_ispositivesemidefinitematrix.3612a5b3d33c"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun isPositiveSemidefiniteMatrix(): UniffiTruthValue
```

Query whether this matrix is positive semidefinite.

### is_singular_matrix

<a id="entry-presentation_kotlin_polynomials_capability_algebra_is_singular_matrix_api_matrix_is_singular_matrix"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_issingularmatrix.ce5cab5926c7"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun isSingularMatrix(): UniffiTruthValue
```

Query whether this matrix is singular.

### is_square

<a id="entry-presentation_kotlin_polynomials_capability_algebra_is_square_api_matrix_is_square"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_issquare.dd0c18be9363"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun isSquare(): UniffiTruthValue
```

Query whether this matrix is square.

### is_symmetric_matrix

<a id="entry-presentation_kotlin_polynomials_capability_algebra_is_symmetric_matrix_api_matrix_is_symmetric_matrix"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_issymmetricmatrix.0b0caf050e55"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun isSymmetricMatrix(): UniffiTruthValue
```

Query whether this matrix is symmetric.

### is_transcendental

<a id="entry-presentation_kotlin_polynomials_capability_algebra_is_transcendental_api_expression_is_transcendental"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_istranscendental.97faaec1993d"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun isTranscendental(): UniffiTruthValue
```

Provides the `is_transcendental` operation on this mobile object.

### is_unitary_matrix

<a id="entry-presentation_kotlin_polynomials_capability_algebra_is_unitary_matrix_api_matrix_is_unitary_matrix"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_isunitarymatrix.002672d38688"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun isUnitaryMatrix(): UniffiTruthValue
```

Query whether this matrix is unitary.

### is_zero

<a id="entry-presentation_kotlin_polynomials_capability_algebra_is_zero_api_expression_is_zero"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_iszero.4bb774ded5e1"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun isZero(): UniffiTruthValue
```

Provides the `is_zero` operation on this mobile object.

### is_zero_matrix

<a id="entry-presentation_kotlin_polynomials_capability_algebra_is_zero_matrix_api_matrix_is_zero_matrix"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_iszeromatrix.41be88536ed0"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun isZeroMatrix(): UniffiTruthValue
```

Query whether this matrix is the zero matrix.

### lower_triangular_matrix

<a id="entry-presentation_kotlin_polynomials_capability_algebra_lower_triangular_matrix_api_session_lower_triangular_matrix"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_lowertriangularmatrix.bc508203257f"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun lowerTriangularMatrix(subject: UniffiMatrix): UniffiAssumptionProposition
```

Provides the `lower_triangular_matrix` operation on this mobile object.

### matrix_shape

<a id="entry-presentation_kotlin_polynomials_capability_algebra_matrix_shape_api_session_matrix_shape"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_matrixshape.c94e86cfc602"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun matrixShape(
    subject: UniffiMatrix,
    rows: kotlin.ULong,
    columns: kotlin.ULong,
): UniffiAssumptionProposition
```

Provides the `matrix_shape` operation on this mobile object.

### multiply

<a id="entry-presentation_kotlin_polynomials_capability_algebra_multiply_api_expression_multiply"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_multiply.33f708624746"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun multiply(other: UniffiExpression): UniffiExpression
```

Matrix product; inner dimensions must agree.

### multiply

<a id="entry-presentation_kotlin_polynomials_capability_algebra_multiply_api_matrix_multiply"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_multiply.228c6f858664"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun multiply(other: UniffiMatrix): UniffiMatrix
```

Matrix product; inner dimensions must agree.

### nonnegative_assumption

<a id="entry-presentation_kotlin_polynomials_capability_algebra_nonnegative_assumption_api_session_nonnegative_assumption"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_nonnegativeassumption.8ddd4b3597f8"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun nonnegativeAssumption(subject: UniffiExpression): UniffiAssumptionProposition
```

Provides the `nonnegative_assumption` operation on this mobile object.

### nonpositive_assumption

<a id="entry-presentation_kotlin_polynomials_capability_algebra_nonpositive_assumption_api_session_nonpositive_assumption"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_nonpositiveassumption.60a3fb1bcce9"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun nonpositiveAssumption(subject: UniffiExpression): UniffiAssumptionProposition
```

Provides the `nonpositive_assumption` operation on this mobile object.

### normal_matrix

<a id="entry-presentation_kotlin_polynomials_capability_algebra_normal_matrix_api_session_normal_matrix"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_normalmatrix.06e6e1e76254"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun normalMatrix(subject: UniffiMatrix): UniffiAssumptionProposition
```

Provides the `normal_matrix` operation on this mobile object.

### orthogonal_matrix

<a id="entry-presentation_kotlin_polynomials_capability_algebra_orthogonal_matrix_api_session_orthogonal_matrix"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_orthogonalmatrix.8106dc9178d6"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun orthogonalMatrix(subject: UniffiMatrix): UniffiAssumptionProposition
```

Provides the `orthogonal_matrix` operation on this mobile object.

### plain_text

<a id="entry-presentation_kotlin_polynomials_capability_algebra_tostring_api_expression_to_string"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_plaintext.c5a75d34dbdb"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun plainText(): kotlin.String
```

The canonical plain-text form of this expression.

### plain_text

<a id="entry-presentation_kotlin_polynomials_capability_algebra_tostring_api_assumptionproposition_to_string"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiassumptionproposition_plaintext.33b41e02b205"></a>
<p class="symi-entry-owner">UniffiAssumptionProposition method</p>

```kotlin signature
fun plainText(): kotlin.String
```

The canonical plain-text form of this assumption proposition.

### positive_definite_matrix

<a id="entry-presentation_kotlin_polynomials_capability_algebra_positive_definite_matrix_api_session_positive_definite_matrix"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_positivedefinitematrix.2042265f2628"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun positiveDefiniteMatrix(subject: UniffiMatrix): UniffiAssumptionProposition
```

Provides the `positive_definite_matrix` operation on this mobile object.

### positive_semidefinite_matrix

<a id="entry-presentation_kotlin_polynomials_capability_algebra_positive_semidefinite_matrix_api_session_positive_semidefinite_matrix"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_positivesemidefinitematrix.56570518213e"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun positiveSemidefiniteMatrix(subject: UniffiMatrix): UniffiAssumptionProposition
```

Provides the `positive_semidefinite_matrix` operation on this mobile object.

### real_entries

<a id="entry-presentation_kotlin_polynomials_capability_algebra_real_entries_api_session_real_entries"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_realentries.498a75b3322f"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun realEntries(subject: UniffiMatrix): UniffiAssumptionProposition
```

Provides the `real_entries` operation on this mobile object.

### singular_matrix

<a id="entry-presentation_kotlin_polynomials_capability_algebra_singular_matrix_api_session_singular_matrix"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_singularmatrix.ffcf9f898aee"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun singularMatrix(subject: UniffiMatrix): UniffiAssumptionProposition
```

Provides the `singular_matrix` operation on this mobile object.

### square_matrix

<a id="entry-presentation_kotlin_polynomials_capability_algebra_square_matrix_api_session_square_matrix"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_squarematrix.a4df2b5531ed"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun squareMatrix(subject: UniffiMatrix): UniffiAssumptionProposition
```

Provides the `square_matrix` operation on this mobile object.

### subtract

<a id="entry-presentation_kotlin_polynomials_capability_algebra_subtract_api_expression_subtract"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_subtract.628c23aea491"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun subtract(other: UniffiExpression): UniffiExpression
```

Entrywise difference of two matrices of the same shape.

### subtract

<a id="entry-presentation_kotlin_polynomials_capability_algebra_subtract_api_matrix_subtract"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_subtract.9057cc530a0c"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun subtract(other: UniffiMatrix): UniffiMatrix
```

Entrywise difference of two matrices of the same shape.

### symmetric_matrix

<a id="entry-presentation_kotlin_polynomials_capability_algebra_symmetric_matrix_api_session_symmetric_matrix"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_symmetricmatrix.997a978d221e"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun symmetricMatrix(subject: UniffiMatrix): UniffiAssumptionProposition
```

Provides the `symmetric_matrix` operation on this mobile object.

### unitary_matrix

<a id="entry-presentation_kotlin_polynomials_capability_algebra_unitary_matrix_api_session_unitary_matrix"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_unitarymatrix.0aa1e4df9fc1"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun unitaryMatrix(subject: UniffiMatrix): UniffiAssumptionProposition
```

Provides the `unitary_matrix` operation on this mobile object.

### upper_triangular_matrix

<a id="entry-presentation_kotlin_polynomials_capability_algebra_upper_triangular_matrix_api_session_upper_triangular_matrix"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_uppertriangularmatrix.cadbbfb1365e"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun upperTriangularMatrix(subject: UniffiMatrix): UniffiAssumptionProposition
```

Provides the `upper_triangular_matrix` operation on this mobile object.

### zero_matrix

<a id="entry-presentation_kotlin_polynomials_capability_algebra_zero_matrix_api_session_zero_matrix"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_zeromatrix.724b4ed94261"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun zeroMatrix(subject: UniffiMatrix): UniffiAssumptionProposition
```

Provides the `zero_matrix` operation on this mobile object.

