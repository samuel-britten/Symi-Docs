# Polynomial queries

These take ordinary expressions plus a variable name; the named variable
becomes the main polynomial variable and every other free variable rides
along symbolically in the coefficients. An expression that is not polynomial
in the variable (a transcendental call of it, a non-integer power of it)
makes the query decline — `None` for `degree`, an error for the others.

### degree

<a id="entry-presentation_swift_polynomials_capability_algebra_degree_api_algebra_session_degree"></a>
<a id="placement-placement.swift.swift_object.uniffisession_degree.e65c61e5d63c"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func degree(
    inputExpression: UniffiExpression,
    variable: String,
) -> UInt64?
```


Degree in `variable`. `None` when the expression is not polynomial in
`variable` **or is identically zero** (the zero polynomial has no degree
under the core convention).

### leading_coefficient

<a id="entry-presentation_swift_polynomials_capability_algebra_leading_coefficient_api_algebra_session_leading_coefficient"></a>
<a id="placement-placement.swift.swift_object.uniffisession_leadingcoefficient.8f2fc4c0f8dd"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func leadingCoefficient(
    inputExpression: UniffiExpression,
    variable: String,
) -> UniffiExpression
```


Coefficient of the highest power of `variable`; may contain the other free
variables. Errors on non-polynomial or zero input.

### coefficient

Coefficient of `variable^power`; integer 0 when the term is absent. Errors
on non-polynomial input.

### polynomial_gcd

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


Greatest common divisor of the two expressions as polynomials in `variable`
(primitive, with the core's sign normalisation). Errors when either input is
not polynomial in `variable`.

### resultant

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


Resultant with respect to `variable`; zero exactly when the two polynomials
share a root (over the algebraic closure). Errors on non-polynomial input.

### isolate_real_roots

<a id="entry-presentation_swift_polynomials_capability_algebra_isolate_real_roots_api_solving_session_isolate_real_roots"></a>
<a id="placement-placement.swift.swift_object.uniffisession_isolaterealroots.a0d8a4cf5f07"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func isolateRealRoots(
    inputExpression: UniffiExpression,
    variable: String,
) -> [UniffiIsolatingInterval]
```


One `(lower, upper)` rational isolating interval per distinct real root,
sorted ascending; a collapsed pair `(r, r)` marks an exact rational root.
Requires a non-zero **univariate** polynomial with rational coefficients.
**Notes:** WASM returns `IsolatingInterval` objects with `lower`/`upper`
getters.

### isolating_interval (WASM result class)

### lower

<a id="entry-presentation_swift_polynomials_capability_algebra_lower_api_results_isolatinginterval_lower"></a>
<a id="placement-placement.swift.swift_object.uniffiisolatinginterval_lower.d52095c5b42d"></a>
<p class="symi-entry-owner">UniffiIsolatingInterval method</p>

```swift signature
func lower() -> UniffiExpression
```


### upper

<a id="entry-presentation_swift_polynomials_capability_algebra_upper_api_results_isolatinginterval_upper"></a>
<a id="placement-placement.swift.swift_object.uniffiisolatinginterval_upper.42681029cd3e"></a>
<p class="symi-entry-owner">UniffiIsolatingInterval method</p>

```swift signature
func upper() -> UniffiExpression
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


The canonical reduced Gröbner basis of the ideal `<generators>` under the named
monomial order — monic, autoreduced, and sorted, so it is unique for the
`(ideal, order)` pair. `None` when any generator is outside \(\mathbb{Q}[\text{variables}]\).

### ideal_membership

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


Whether `element` lies in the ideal `<generators>`, decided by reducing it to
its normal form modulo the Gröbner basis (zero exactly when it is a member).
The verdict is independent of the order. `None` when the element or a generator
is outside \(\mathbb{Q}[\text{variables}]\).

### ideal_sum

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


A Gröbner basis of the ideal sum `I + J`, the ideal generated by the two
generator lists together. `None` on a non-\(\mathbb{Q}[\text{variables}]\) generator.

### ideal_product

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


A Gröbner basis of the ideal product \(I J\), generated by all pairwise
products of the two generator lists. `None` on a non-\(\mathbb{Q}[\text{variables}]\) generator.

### ideal_intersection

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


A generating set of the ideal intersection \(I \cap J\), computed by the standard
tag-variable elimination construction \(t I + (1-t) J\). `None` on a
non-\(\mathbb{Q}[\text{variables}]\) generator.

### elimination_ideal

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

<a id="entry-presentation_swift_polynomials_capability_algebra_absolute_value_api_session_absolute_value"></a>
<a id="placement-placement.swift.swift_object.uniffisession_absolutevalue.e830fae29853"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func absoluteValue(argument: UniffiExpression) -> UniffiExpression
```

Provides the `absolute_value` operation on this mobile object.

### absolute_value

<a id="entry-presentation_swift_polynomials_capability_algebra_absolute_value_api_expression_absolute_value"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_absolutevalue.6dd3aae9d19d"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func absoluteValue() -> UniffiExpression
```

Provides the `absolute_value` operation on this mobile object.

### add

<a id="entry-presentation_swift_polynomials_capability_algebra_add_api_expression_add"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_add.2e029ecc008d"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func add(other: UniffiExpression) -> UniffiExpression
```

Entrywise sum of two matrices of the same shape.

### add

<a id="entry-presentation_swift_polynomials_capability_algebra_add_api_matrix_add"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_add.613832f65527"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func add(other: UniffiMatrix) -> UniffiMatrix
```

Entrywise sum of two matrices of the same shape.

### coefficient

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

### coefficient

<a id="entry-presentation_swift_polynomials_capability_algebra_coefficient_api_partial_differential_equations_partialdifferentialequationjetcoefficient_coefficient"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationjetcoefficient_coefficient.6ba74d2c787f"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationJetCoefficient method</p>

```swift signature
func coefficient() -> UniffiExpression
```

The exact coefficient expression.

### coefficient

<a id="entry-presentation_swift_polynomials_capability_algebra_coefficient_api_partial_differential_equations_partialdifferentialequationprincipalcoefficient_coefficient"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationprincipalcoefficient_coefficient.db70f03f67e2"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPrincipalCoefficient method</p>

```swift signature
func coefficient() -> UniffiExpression
```

The raw coefficient expression, before mixed terms are halved.

### complex_entries

<a id="entry-presentation_swift_polynomials_capability_algebra_complex_entries_api_session_complex_entries"></a>
<a id="placement-placement.swift.swift_object.uniffisession_complexentries.99b7925b679e"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func complexEntries(subject: UniffiMatrix) -> UniffiAssumptionProposition
```

Provides the `complex_entries` operation on this mobile object.

### cylindrical_algebraic_decomposition

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

### diagonal_matrix

<a id="entry-presentation_swift_polynomials_capability_algebra_diagonal_matrix_api_session_diagonal_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffisession_diagonalmatrix.23ce19207678"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func diagonalMatrix(subject: UniffiMatrix) -> UniffiAssumptionProposition
```

Provides the `diagonal_matrix` operation on this mobile object.

### full_rank_matrix

<a id="entry-presentation_swift_polynomials_capability_algebra_full_rank_matrix_api_session_full_rank_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffisession_fullrankmatrix.55c31ae64b31"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func fullRankMatrix(subject: UniffiMatrix) -> UniffiAssumptionProposition
```

Provides the `full_rank_matrix` operation on this mobile object.

### has_complex_entries

<a id="entry-presentation_swift_polynomials_capability_algebra_has_complex_entries_api_matrix_has_complex_entries"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_hascomplexentries.0eade1c68cde"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func hasComplexEntries() -> UniffiTruthValue
```

Query whether every entry is finite complex.

### has_integer_entries

<a id="entry-presentation_swift_polynomials_capability_algebra_has_integer_entries_api_matrix_has_integer_entries"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_hasintegerentries.a6abde96fe2f"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func hasIntegerEntries() -> UniffiTruthValue
```

Query whether every entry is an integer.

### has_real_entries

<a id="entry-presentation_swift_polynomials_capability_algebra_has_real_entries_api_matrix_has_real_entries"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_hasrealentries.2454112d2884"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func hasRealEntries() -> UniffiTruthValue
```

Query whether every entry is real.

### hermitian_matrix

<a id="entry-presentation_swift_polynomials_capability_algebra_hermitian_matrix_api_session_hermitian_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffisession_hermitianmatrix.858453b2be51"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func hermitianMatrix(subject: UniffiMatrix) -> UniffiAssumptionProposition
```

Provides the `hermitian_matrix` operation on this mobile object.

### identity_matrix

<a id="entry-presentation_swift_polynomials_capability_algebra_identity_matrix_api_session_identity_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffisession_identitymatrix.796c1008fa8e"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func identityMatrix(subject: UniffiMatrix) -> UniffiAssumptionProposition
```

Provides the `identity_matrix` operation on this mobile object.

### integer_entries

<a id="entry-presentation_swift_polynomials_capability_algebra_integer_entries_api_session_integer_entries"></a>
<a id="placement-placement.swift.swift_object.uniffisession_integerentries.7c1e9edc5402"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func integerEntries(subject: UniffiMatrix) -> UniffiAssumptionProposition
```

Provides the `integer_entries` operation on this mobile object.

### invertible_matrix

<a id="entry-presentation_swift_polynomials_capability_algebra_invertible_matrix_api_session_invertible_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffisession_invertiblematrix.fac62ff7dabd"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func invertibleMatrix(subject: UniffiMatrix) -> UniffiAssumptionProposition
```

Provides the `invertible_matrix` operation on this mobile object.

### is_algebraic

<a id="entry-presentation_swift_polynomials_capability_algebra_is_algebraic_api_expression_is_algebraic"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_isalgebraic.72f4eab85a10"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func isAlgebraic() -> UniffiTruthValue
```

Provides the `is_algebraic` operation on this mobile object.

### is_complex

<a id="entry-presentation_swift_polynomials_capability_algebra_is_complex_api_expression_is_complex"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_iscomplex.e71c8146d2ec"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func isComplex() -> UniffiTruthValue
```

Provides the `is_complex` operation on this mobile object.

### is_composite

<a id="entry-presentation_swift_polynomials_capability_algebra_is_composite_api_expression_is_composite"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_iscomposite.f7042f26b81b"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func isComposite() -> UniffiTruthValue
```

Provides the `is_composite` operation on this mobile object.

### is_diagonal_matrix

<a id="entry-presentation_swift_polynomials_capability_algebra_is_diagonal_matrix_api_matrix_is_diagonal_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_isdiagonalmatrix.ea18d09ee5bc"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isDiagonalMatrix() -> UniffiTruthValue
```

Query whether this matrix is diagonal.

### is_even

<a id="entry-presentation_swift_polynomials_capability_algebra_is_even_api_expression_is_even"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_iseven.bed013946585"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func isEven() -> UniffiTruthValue
```

Provides the `is_even` operation on this mobile object.

### is_extended_real

<a id="entry-presentation_swift_polynomials_capability_algebra_is_extended_real_api_expression_is_extended_real"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_isextendedreal.58bc63368ee6"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func isExtendedReal() -> UniffiTruthValue
```

Provides the `is_extended_real` operation on this mobile object.

### is_full_rank_matrix

<a id="entry-presentation_swift_polynomials_capability_algebra_is_full_rank_matrix_api_matrix_is_full_rank_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_isfullrankmatrix.5a9d9beef2f9"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isFullRankMatrix() -> UniffiTruthValue
```

Query whether this matrix has full rank.

### is_hermitian_matrix

<a id="entry-presentation_swift_polynomials_capability_algebra_is_hermitian_matrix_api_matrix_is_hermitian_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_ishermitianmatrix.8462cf6ea34d"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isHermitianMatrix() -> UniffiTruthValue
```

Query whether this matrix is Hermitian.

### is_identity_matrix

<a id="entry-presentation_swift_polynomials_capability_algebra_is_identity_matrix_api_matrix_is_identity_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_isidentitymatrix.903693a73d88"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isIdentityMatrix() -> UniffiTruthValue
```

Query whether this matrix is the identity matrix.

### is_infinite

<a id="entry-presentation_swift_polynomials_capability_algebra_is_infinite_api_expression_is_infinite"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_isinfinite.29a4e28f3559"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func isInfinite() -> UniffiTruthValue
```

Provides the `is_infinite` operation on this mobile object.

### is_invertible_matrix

<a id="entry-presentation_swift_polynomials_capability_algebra_is_invertible_matrix_api_matrix_is_invertible_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_isinvertiblematrix.d1b4453361d0"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isInvertibleMatrix() -> UniffiTruthValue
```

Query whether this matrix is invertible.

### is_irrational

<a id="entry-presentation_swift_polynomials_capability_algebra_is_irrational_api_expression_is_irrational"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_isirrational.a94d46360445"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func isIrrational() -> UniffiTruthValue
```

Provides the `is_irrational` operation on this mobile object.

### is_natural

<a id="entry-presentation_swift_polynomials_capability_algebra_is_natural_api_expression_is_natural"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_isnatural.6f9a6b9a4c41"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func isNatural() -> UniffiTruthValue
```

Provides the `is_natural` operation on this mobile object.

### is_nonpositive

<a id="entry-presentation_swift_polynomials_capability_algebra_is_nonpositive_api_expression_is_nonpositive"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_isnonpositive.00742e6005ef"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func isNonpositive() -> UniffiTruthValue
```

Provides the `is_nonpositive` operation on this mobile object.

### is_normal_matrix

<a id="entry-presentation_swift_polynomials_capability_algebra_is_normal_matrix_api_matrix_is_normal_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_isnormalmatrix.9c02bdab42e7"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isNormalMatrix() -> UniffiTruthValue
```

Query whether this matrix is normal.

### is_odd

<a id="entry-presentation_swift_polynomials_capability_algebra_is_odd_api_expression_is_odd"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_isodd.f6f6de227cc7"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func isOdd() -> UniffiTruthValue
```

Provides the `is_odd` operation on this mobile object.

### is_orthogonal_matrix

<a id="entry-presentation_swift_polynomials_capability_algebra_is_orthogonal_matrix_api_matrix_is_orthogonal_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_isorthogonalmatrix.1d4c8b67cd16"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isOrthogonalMatrix() -> UniffiTruthValue
```

Query whether this matrix is orthogonal.

### is_positive_definite_matrix

<a id="entry-presentation_swift_polynomials_capability_algebra_is_positive_definite_matrix_api_matrix_is_positive_definite_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_ispositivedefinitematrix.bcbe40ae88c7"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isPositiveDefiniteMatrix() -> UniffiTruthValue
```

Query whether this matrix is positive definite.

### is_positive_integer

<a id="entry-presentation_swift_polynomials_capability_algebra_is_positive_integer_api_expression_is_positive_integer"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_ispositiveinteger.b25c5fe306b0"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func isPositiveInteger() -> UniffiTruthValue
```

Provides the `is_positive_integer` operation on this mobile object.

### is_positive_semidefinite_matrix

<a id="entry-presentation_swift_polynomials_capability_algebra_is_positive_semidefinite_matrix_api_matrix_is_positive_semidefinite_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_ispositivesemidefinitematrix.cd1bbc63a9b2"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isPositiveSemidefiniteMatrix() -> UniffiTruthValue
```

Query whether this matrix is positive semidefinite.

### is_singular_matrix

<a id="entry-presentation_swift_polynomials_capability_algebra_is_singular_matrix_api_matrix_is_singular_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_issingularmatrix.a0a49c18a476"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isSingularMatrix() -> UniffiTruthValue
```

Query whether this matrix is singular.

### is_square

<a id="entry-presentation_swift_polynomials_capability_algebra_is_square_api_matrix_is_square"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_issquare.2d76800f71bb"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isSquare() -> UniffiTruthValue
```

Query whether this matrix is square.

### is_symmetric_matrix

<a id="entry-presentation_swift_polynomials_capability_algebra_is_symmetric_matrix_api_matrix_is_symmetric_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_issymmetricmatrix.271072821211"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isSymmetricMatrix() -> UniffiTruthValue
```

Query whether this matrix is symmetric.

### is_transcendental

<a id="entry-presentation_swift_polynomials_capability_algebra_is_transcendental_api_expression_is_transcendental"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_istranscendental.8b5be476d346"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func isTranscendental() -> UniffiTruthValue
```

Provides the `is_transcendental` operation on this mobile object.

### is_unitary_matrix

<a id="entry-presentation_swift_polynomials_capability_algebra_is_unitary_matrix_api_matrix_is_unitary_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_isunitarymatrix.6b8f914e2c6f"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isUnitaryMatrix() -> UniffiTruthValue
```

Query whether this matrix is unitary.

### is_zero

<a id="entry-presentation_swift_polynomials_capability_algebra_is_zero_api_expression_is_zero"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_iszero.ddbfc5afa668"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func isZero() -> UniffiTruthValue
```

Provides the `is_zero` operation on this mobile object.

### is_zero_matrix

<a id="entry-presentation_swift_polynomials_capability_algebra_is_zero_matrix_api_matrix_is_zero_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_iszeromatrix.7910f4f523cb"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isZeroMatrix() -> UniffiTruthValue
```

Query whether this matrix is the zero matrix.

### lower_triangular_matrix

<a id="entry-presentation_swift_polynomials_capability_algebra_lower_triangular_matrix_api_session_lower_triangular_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffisession_lowertriangularmatrix.cc9c939311b8"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func lowerTriangularMatrix(subject: UniffiMatrix) -> UniffiAssumptionProposition
```

Provides the `lower_triangular_matrix` operation on this mobile object.

### matrix_shape

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

### multiply

<a id="entry-presentation_swift_polynomials_capability_algebra_multiply_api_expression_multiply"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_multiply.f3d9b9955593"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func multiply(other: UniffiExpression) -> UniffiExpression
```

Matrix product; inner dimensions must agree.

### multiply

<a id="entry-presentation_swift_polynomials_capability_algebra_multiply_api_matrix_multiply"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_multiply.8ba400c3e3b4"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func multiply(other: UniffiMatrix) -> UniffiMatrix
```

Matrix product; inner dimensions must agree.

### nonnegative_assumption

<a id="entry-presentation_swift_polynomials_capability_algebra_nonnegative_assumption_api_session_nonnegative_assumption"></a>
<a id="placement-placement.swift.swift_object.uniffisession_nonnegativeassumption.a41710fe92e9"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func nonnegativeAssumption(subject: UniffiExpression) -> UniffiAssumptionProposition
```

Provides the `nonnegative_assumption` operation on this mobile object.

### nonpositive_assumption

<a id="entry-presentation_swift_polynomials_capability_algebra_nonpositive_assumption_api_session_nonpositive_assumption"></a>
<a id="placement-placement.swift.swift_object.uniffisession_nonpositiveassumption.6769adc459db"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func nonpositiveAssumption(subject: UniffiExpression) -> UniffiAssumptionProposition
```

Provides the `nonpositive_assumption` operation on this mobile object.

### normal_matrix

<a id="entry-presentation_swift_polynomials_capability_algebra_normal_matrix_api_session_normal_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffisession_normalmatrix.2c35c2ffc9ab"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func normalMatrix(subject: UniffiMatrix) -> UniffiAssumptionProposition
```

Provides the `normal_matrix` operation on this mobile object.

### orthogonal_matrix

<a id="entry-presentation_swift_polynomials_capability_algebra_orthogonal_matrix_api_session_orthogonal_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffisession_orthogonalmatrix.9693c17657e1"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func orthogonalMatrix(subject: UniffiMatrix) -> UniffiAssumptionProposition
```

Provides the `orthogonal_matrix` operation on this mobile object.

### plain_text

<a id="entry-presentation_swift_polynomials_capability_algebra_tostring_api_expression_to_string"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_plaintext.602e518f6cca"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func plainText() -> String
```

The canonical plain-text form of this expression.

### plain_text

<a id="entry-presentation_swift_polynomials_capability_algebra_tostring_api_assumptionproposition_to_string"></a>
<a id="placement-placement.swift.swift_object.uniffiassumptionproposition_plaintext.33fcfe3515b2"></a>
<p class="symi-entry-owner">UniffiAssumptionProposition method</p>

```swift signature
func plainText() -> String
```

The canonical plain-text form of this assumption proposition.

### positive_definite_matrix

<a id="entry-presentation_swift_polynomials_capability_algebra_positive_definite_matrix_api_session_positive_definite_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffisession_positivedefinitematrix.ab2c7a4e0b9f"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func positiveDefiniteMatrix(subject: UniffiMatrix) -> UniffiAssumptionProposition
```

Provides the `positive_definite_matrix` operation on this mobile object.

### positive_semidefinite_matrix

<a id="entry-presentation_swift_polynomials_capability_algebra_positive_semidefinite_matrix_api_session_positive_semidefinite_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffisession_positivesemidefinitematrix.8d5eff06726d"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func positiveSemidefiniteMatrix(subject: UniffiMatrix) -> UniffiAssumptionProposition
```

Provides the `positive_semidefinite_matrix` operation on this mobile object.

### real_entries

<a id="entry-presentation_swift_polynomials_capability_algebra_real_entries_api_session_real_entries"></a>
<a id="placement-placement.swift.swift_object.uniffisession_realentries.490b89e3be20"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func realEntries(subject: UniffiMatrix) -> UniffiAssumptionProposition
```

Provides the `real_entries` operation on this mobile object.

### singular_matrix

<a id="entry-presentation_swift_polynomials_capability_algebra_singular_matrix_api_session_singular_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffisession_singularmatrix.1ec8021176dc"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func singularMatrix(subject: UniffiMatrix) -> UniffiAssumptionProposition
```

Provides the `singular_matrix` operation on this mobile object.

### square_matrix

<a id="entry-presentation_swift_polynomials_capability_algebra_square_matrix_api_session_square_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffisession_squarematrix.1f0447943ee4"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func squareMatrix(subject: UniffiMatrix) -> UniffiAssumptionProposition
```

Provides the `square_matrix` operation on this mobile object.

### subtract

<a id="entry-presentation_swift_polynomials_capability_algebra_subtract_api_expression_subtract"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_subtract.83f9546e2830"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func subtract(other: UniffiExpression) -> UniffiExpression
```

Entrywise difference of two matrices of the same shape.

### subtract

<a id="entry-presentation_swift_polynomials_capability_algebra_subtract_api_matrix_subtract"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_subtract.a3819adac83e"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func subtract(other: UniffiMatrix) -> UniffiMatrix
```

Entrywise difference of two matrices of the same shape.

### symmetric_matrix

<a id="entry-presentation_swift_polynomials_capability_algebra_symmetric_matrix_api_session_symmetric_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffisession_symmetricmatrix.76919b542c94"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func symmetricMatrix(subject: UniffiMatrix) -> UniffiAssumptionProposition
```

Provides the `symmetric_matrix` operation on this mobile object.

### unitary_matrix

<a id="entry-presentation_swift_polynomials_capability_algebra_unitary_matrix_api_session_unitary_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffisession_unitarymatrix.9bbcc7068ba8"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func unitaryMatrix(subject: UniffiMatrix) -> UniffiAssumptionProposition
```

Provides the `unitary_matrix` operation on this mobile object.

### upper_triangular_matrix

<a id="entry-presentation_swift_polynomials_capability_algebra_upper_triangular_matrix_api_session_upper_triangular_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffisession_uppertriangularmatrix.66284c751119"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func upperTriangularMatrix(subject: UniffiMatrix) -> UniffiAssumptionProposition
```

Provides the `upper_triangular_matrix` operation on this mobile object.

### zero_matrix

<a id="entry-presentation_swift_polynomials_capability_algebra_zero_matrix_api_session_zero_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffisession_zeromatrix.3cd60fff040e"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func zeroMatrix(subject: UniffiMatrix) -> UniffiAssumptionProposition
```

Provides the `zero_matrix` operation on this mobile object.

