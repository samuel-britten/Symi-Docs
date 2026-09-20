# Polynomial queries

These take ordinary expressions plus a variable name; the named variable
becomes the main polynomial variable and every other free variable rides
along symbolically in the coefficients. An expression that is not polynomial
in the variable (a transcendental call of it, a non-integer power of it)
makes the query decline — `None` for `degree`, an error for the others.

### degree

<a id="entry-presentation_kotlin_api_session_degree"></a>
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

<a id="entry-presentation_kotlin_api_session_leading_coefficient"></a>
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

<a id="entry-presentation_kotlin_api_session_coefficient"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_coefficient.60d73d3f8e8f"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun coefficient(
    inputExpression: UniffiExpression,
    variable: kotlin.String,
    power: kotlin.ULong,
): UniffiExpression
```


Coefficient of `variable^power`; integer 0 when the term is absent. Errors
on non-polynomial input.

### polynomial_gcd

<a id="entry-presentation_kotlin_api_session_polynomial_gcd"></a>
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

<a id="entry-presentation_kotlin_api_session_resultant"></a>
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

<a id="entry-presentation_kotlin_api_session_isolate_real_roots"></a>
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

<a id="entry-presentation_kotlin_api_isolatinginterval_lower"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiisolatinginterval_lower.cf5b4e1d548f"></a>
<p class="symi-entry-owner">UniffiIsolatingInterval method</p>

```kotlin signature
fun lower(): UniffiExpression
```

Lower endpoint of the isolating interval.

### upper

<a id="entry-presentation_kotlin_api_isolatinginterval_upper"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiisolatinginterval_upper.a7b5035db9e4"></a>
<p class="symi-entry-owner">UniffiIsolatingInterval method</p>

```kotlin signature
fun upper(): UniffiExpression
```

Upper endpoint of the isolating interval.

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

<a id="entry-presentation_kotlin_api_session_groebner_basis"></a>
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

<a id="entry-presentation_kotlin_api_session_ideal_membership"></a>
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

<a id="entry-presentation_kotlin_api_session_ideal_sum"></a>
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

<a id="entry-presentation_kotlin_api_session_ideal_product"></a>
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

<a id="entry-presentation_kotlin_api_session_ideal_intersection"></a>
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

<a id="entry-presentation_kotlin_api_session_elimination_ideal"></a>
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

<a id="entry-presentation_kotlin_api_session_change_monomial_order"></a>
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

<a id="entry-presentation_kotlin_api_session_implicitize"></a>
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

### cylindrical_algebraic_decomposition

<a id="entry-presentation_kotlin_api_session_cylindrical_algebraic_decomposition"></a>
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

### plain_text

<a id="entry-presentation_kotlin_api_expression_to_string"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_plaintext.c5a75d34dbdb"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun plainText(): kotlin.String
```

The canonical plain-text form of this expression.

