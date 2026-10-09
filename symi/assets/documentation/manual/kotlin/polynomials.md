# Polynomial queries

These take ordinary expressions plus a variable name; the named variable
becomes the main polynomial variable and every other free variable rides
along symbolically in the coefficients. An expression that is not polynomial
in the variable (a transcendental call of it, a non-integer power of it)
makes the query decline — `None` for `degree`, an error for the others.

### degree

<a id="placement-placement.kotlin.kotlin_object.uniffisession_degree.1eca64a7ebc5"></a>
`UniffiSession.degree(inputExpression: UniffiExpression, variable: kotlin.String): kotlin.ULong?`


Degree in `variable`. `None` when the expression is not polynomial in
`variable` **or is identically zero** (the zero polynomial has no degree
under the core convention).

### leading_coefficient

<a id="placement-placement.kotlin.kotlin_object.uniffisession_leadingcoefficient.e9dfe4aeb2af"></a>
`UniffiSession.leadingCoefficient(inputExpression: UniffiExpression, variable: kotlin.String): UniffiExpression`


Coefficient of the highest power of `variable`; may contain the other free
variables. Errors on non-polynomial or zero input.

### coefficient

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationjetcoefficient_coefficient.804d7d84b549"></a>
`UniffiPartialDifferentialEquationJetCoefficient.coefficient(): UniffiExpression`

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationprincipalcoefficient_coefficient.38d9336ec650"></a>
`UniffiPartialDifferentialEquationPrincipalCoefficient.coefficient(): UniffiExpression`

<a id="placement-placement.kotlin.kotlin_object.uniffisession_coefficient.60d73d3f8e8f"></a>
`UniffiSession.coefficient(inputExpression: UniffiExpression, variable: kotlin.String, power: kotlin.ULong): UniffiExpression`


Coefficient of `variable^power`; integer 0 when the term is absent. Errors
on non-polynomial input.

### polynomial_gcd

<a id="placement-placement.kotlin.kotlin_object.uniffisession_polynomialgcd.5b17fffe0faf"></a>
`UniffiSession.polynomialGcd(left: UniffiExpression, right: UniffiExpression, variable: kotlin.String): UniffiExpression`


Greatest common divisor of the two expressions as polynomials in `variable`
(primitive, with the core's sign normalisation). Errors when either input is
not polynomial in `variable`.

### resultant

<a id="placement-placement.kotlin.kotlin_object.uniffisession_resultant.cb67aabd72fd"></a>
`UniffiSession.resultant(left: UniffiExpression, right: UniffiExpression, variable: kotlin.String): UniffiExpression`


Resultant with respect to `variable`; zero exactly when the two polynomials
share a root (over the algebraic closure). Errors on non-polynomial input.

### isolate_real_roots

<a id="placement-placement.kotlin.kotlin_object.uniffisession_isolaterealroots.70445057ba8a"></a>
`UniffiSession.isolateRealRoots(inputExpression: UniffiExpression, variable: kotlin.String): List<UniffiIsolatingInterval>`


One `(lower, upper)` rational isolating interval per distinct real root,
sorted ascending; a collapsed pair `(r, r)` marks an exact rational root.
Requires a non-zero **univariate** polynomial with rational coefficients.
**Notes:** WASM returns `IsolatingInterval` objects with `lower`/`upper`
getters.

### isolating_interval (WASM result class)

### lower

<a id="placement-placement.kotlin.kotlin_object.uniffiisolatinginterval_lower.cf5b4e1d548f"></a>
`UniffiIsolatingInterval.lower(): UniffiExpression`


### upper

<a id="placement-placement.kotlin.kotlin_object.uniffiisolatinginterval_upper.a7b5035db9e4"></a>
`UniffiIsolatingInterval.upper(): UniffiExpression`


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

<a id="placement-placement.kotlin.kotlin_object.uniffisession_groebnerbasis.0649413af112"></a>
`UniffiSession.groebnerBasis(generators: List<UniffiExpression>, variables: List<kotlin.String>, order: UniffiMonomialOrdering): List<UniffiExpression>?`


The canonical reduced Gröbner basis of the ideal `<generators>` under the named
monomial order — monic, autoreduced, and sorted, so it is unique for the
`(ideal, order)` pair. `None` when any generator is outside \(\mathbb{Q}[\text{variables}]\).

### ideal_membership

<a id="placement-placement.kotlin.kotlin_object.uniffisession_idealmembership.cc0474e382fd"></a>
`UniffiSession.idealMembership(element: UniffiExpression, generators: List<UniffiExpression>, variables: List<kotlin.String>, order: UniffiMonomialOrdering): kotlin.Boolean?`


Whether `element` lies in the ideal `<generators>`, decided by reducing it to
its normal form modulo the Gröbner basis (zero exactly when it is a member).
The verdict is independent of the order. `None` when the element or a generator
is outside \(\mathbb{Q}[\text{variables}]\).

### ideal_sum

<a id="placement-placement.kotlin.kotlin_object.uniffisession_idealsum.80c8c34aa7b9"></a>
`UniffiSession.idealSum(generatorsLeft: List<UniffiExpression>, generatorsRight: List<UniffiExpression>, variables: List<kotlin.String>, order: UniffiMonomialOrdering): List<UniffiExpression>?`


A Gröbner basis of the ideal sum `I + J`, the ideal generated by the two
generator lists together. `None` on a non-\(\mathbb{Q}[\text{variables}]\) generator.

### ideal_product

<a id="placement-placement.kotlin.kotlin_object.uniffisession_idealproduct.ddd223f728ab"></a>
`UniffiSession.idealProduct(generatorsLeft: List<UniffiExpression>, generatorsRight: List<UniffiExpression>, variables: List<kotlin.String>, order: UniffiMonomialOrdering): List<UniffiExpression>?`


A Gröbner basis of the ideal product \(I J\), generated by all pairwise
products of the two generator lists. `None` on a non-\(\mathbb{Q}[\text{variables}]\) generator.

### ideal_intersection

<a id="placement-placement.kotlin.kotlin_object.uniffisession_idealintersection.026f4a5cc424"></a>
`UniffiSession.idealIntersection(generatorsLeft: List<UniffiExpression>, generatorsRight: List<UniffiExpression>, variables: List<kotlin.String>, order: UniffiMonomialOrdering): List<UniffiExpression>?`


A generating set of the ideal intersection \(I \cap J\), computed by the standard
tag-variable elimination construction \(t I + (1-t) J\). `None` on a
non-\(\mathbb{Q}[\text{variables}]\) generator.

### elimination_ideal

<a id="placement-placement.kotlin.kotlin_object.uniffisession_eliminationideal.8b6f1337e0dd"></a>
`UniffiSession.eliminationIdeal(generators: List<UniffiExpression>, variables: List<kotlin.String>, eliminate: List<kotlin.String>): List<UniffiExpression>?`


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

<a id="placement-placement.kotlin.kotlin_object.uniffisession_changemonomialorder.79f1c2356ee4"></a>
`UniffiSession.changeMonomialOrder(basis: List<UniffiExpression>, variables: List<kotlin.String>, sourceOrder: UniffiMonomialOrdering, targetOrder: UniffiMonomialOrdering): List<UniffiExpression>?`


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

<a id="placement-placement.kotlin.kotlin_object.uniffisession_implicitize.a298d789c7d4"></a>
`UniffiSession.implicitize(coordinates: List<kotlin.String>, parameters: List<kotlin.String>, parametricExpressions: List<UniffiExpression>): List<UniffiExpression>?`


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

<a id="placement-placement.kotlin.kotlin_object.uniffiassumptionproposition_plaintext.33b41e02b205"></a>
### UniffiAssumptionProposition.plainText

`UniffiAssumptionProposition.plainText(): kotlin.String`

Returns `kotlin.String`.

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_absolutevalue.38c661010079"></a>
### UniffiExpression.absoluteValue

`UniffiExpression.absoluteValue(): UniffiExpression`

Returns `UniffiExpression`.

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_add.f11dd11a2684"></a>
### UniffiExpression.add

`UniffiExpression.add(other: UniffiExpression): UniffiExpression`

Returns `UniffiExpression`.

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_isalgebraic.0d1e8911a82a"></a>
### UniffiExpression.isAlgebraic

`UniffiExpression.isAlgebraic(): UniffiTruthValue`

Returns `UniffiTruthValue`.

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_iscomplex.5be00393deb6"></a>
### UniffiExpression.isComplex

`UniffiExpression.isComplex(): UniffiTruthValue`

Returns `UniffiTruthValue`.

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_iscomposite.d2a612ec2fdb"></a>
### UniffiExpression.isComposite

`UniffiExpression.isComposite(): UniffiTruthValue`

Returns `UniffiTruthValue`.

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_iseven.305212864d97"></a>
### UniffiExpression.isEven

`UniffiExpression.isEven(): UniffiTruthValue`

Returns `UniffiTruthValue`.

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_isextendedreal.c940074fb614"></a>
### UniffiExpression.isExtendedReal

`UniffiExpression.isExtendedReal(): UniffiTruthValue`

Returns `UniffiTruthValue`.

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_isinfinite.84eeca60a66f"></a>
### UniffiExpression.isInfinite

`UniffiExpression.isInfinite(): UniffiTruthValue`

Returns `UniffiTruthValue`.

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_isirrational.b2a65654a1e2"></a>
### UniffiExpression.isIrrational

`UniffiExpression.isIrrational(): UniffiTruthValue`

Returns `UniffiTruthValue`.

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_isnatural.8bb527677cb6"></a>
### UniffiExpression.isNatural

`UniffiExpression.isNatural(): UniffiTruthValue`

Returns `UniffiTruthValue`.

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_isnonpositive.d4bf0d2584d9"></a>
### UniffiExpression.isNonpositive

`UniffiExpression.isNonpositive(): UniffiTruthValue`

Returns `UniffiTruthValue`.

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_isodd.ebefaade489f"></a>
### UniffiExpression.isOdd

`UniffiExpression.isOdd(): UniffiTruthValue`

Returns `UniffiTruthValue`.

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_ispositiveinteger.6dc5ac646d1b"></a>
### UniffiExpression.isPositiveInteger

`UniffiExpression.isPositiveInteger(): UniffiTruthValue`

Returns `UniffiTruthValue`.

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_istranscendental.97faaec1993d"></a>
### UniffiExpression.isTranscendental

`UniffiExpression.isTranscendental(): UniffiTruthValue`

Returns `UniffiTruthValue`.

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_iszero.4bb774ded5e1"></a>
### UniffiExpression.isZero

`UniffiExpression.isZero(): UniffiTruthValue`

Returns `UniffiTruthValue`.

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_multiply.33f708624746"></a>
### UniffiExpression.multiply

`UniffiExpression.multiply(other: UniffiExpression): UniffiExpression`

Returns `UniffiExpression`.

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_plaintext.c5a75d34dbdb"></a>
### UniffiExpression.plainText

`UniffiExpression.plainText(): kotlin.String`

Returns `kotlin.String`.

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_subtract.628c23aea491"></a>
### UniffiExpression.subtract

`UniffiExpression.subtract(other: UniffiExpression): UniffiExpression`

Returns `UniffiExpression`.

<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_add.e9918d9e5882"></a>
### UniffiMatrix.add

`UniffiMatrix.add(other: UniffiMatrix): UniffiMatrix`

Returns `UniffiMatrix`.

<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_hascomplexentries.c984660638dc"></a>
### UniffiMatrix.hasComplexEntries

`UniffiMatrix.hasComplexEntries(): UniffiTruthValue`

Returns `UniffiTruthValue`.

<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_hasintegerentries.d9873706d9da"></a>
### UniffiMatrix.hasIntegerEntries

`UniffiMatrix.hasIntegerEntries(): UniffiTruthValue`

Returns `UniffiTruthValue`.

<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_hasrealentries.a1264d659f9f"></a>
### UniffiMatrix.hasRealEntries

`UniffiMatrix.hasRealEntries(): UniffiTruthValue`

Returns `UniffiTruthValue`.

<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_isdiagonalmatrix.5f102572ea2b"></a>
### UniffiMatrix.isDiagonalMatrix

`UniffiMatrix.isDiagonalMatrix(): UniffiTruthValue`

Returns `UniffiTruthValue`.

<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_isfullrankmatrix.c82ad44621d3"></a>
### UniffiMatrix.isFullRankMatrix

`UniffiMatrix.isFullRankMatrix(): UniffiTruthValue`

Returns `UniffiTruthValue`.

<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_ishermitianmatrix.26e7583f27f0"></a>
### UniffiMatrix.isHermitianMatrix

`UniffiMatrix.isHermitianMatrix(): UniffiTruthValue`

Returns `UniffiTruthValue`.

<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_isidentitymatrix.304acfe1e92d"></a>
### UniffiMatrix.isIdentityMatrix

`UniffiMatrix.isIdentityMatrix(): UniffiTruthValue`

Returns `UniffiTruthValue`.

<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_isinvertiblematrix.e6a08c287242"></a>
### UniffiMatrix.isInvertibleMatrix

`UniffiMatrix.isInvertibleMatrix(): UniffiTruthValue`

Returns `UniffiTruthValue`.

<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_isnormalmatrix.119809d161b9"></a>
### UniffiMatrix.isNormalMatrix

`UniffiMatrix.isNormalMatrix(): UniffiTruthValue`

Returns `UniffiTruthValue`.

<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_isorthogonalmatrix.5cf3f4c7b232"></a>
### UniffiMatrix.isOrthogonalMatrix

`UniffiMatrix.isOrthogonalMatrix(): UniffiTruthValue`

Returns `UniffiTruthValue`.

<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_ispositivedefinitematrix.00d4b7e8012c"></a>
### UniffiMatrix.isPositiveDefiniteMatrix

`UniffiMatrix.isPositiveDefiniteMatrix(): UniffiTruthValue`

Returns `UniffiTruthValue`.

<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_ispositivesemidefinitematrix.3612a5b3d33c"></a>
### UniffiMatrix.isPositiveSemidefiniteMatrix

`UniffiMatrix.isPositiveSemidefiniteMatrix(): UniffiTruthValue`

Returns `UniffiTruthValue`.

<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_issingularmatrix.ce5cab5926c7"></a>
### UniffiMatrix.isSingularMatrix

`UniffiMatrix.isSingularMatrix(): UniffiTruthValue`

Returns `UniffiTruthValue`.

<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_issquare.dd0c18be9363"></a>
### UniffiMatrix.isSquare

`UniffiMatrix.isSquare(): UniffiTruthValue`

Returns `UniffiTruthValue`.

<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_issymmetricmatrix.0b0caf050e55"></a>
### UniffiMatrix.isSymmetricMatrix

`UniffiMatrix.isSymmetricMatrix(): UniffiTruthValue`

Returns `UniffiTruthValue`.

<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_isunitarymatrix.002672d38688"></a>
### UniffiMatrix.isUnitaryMatrix

`UniffiMatrix.isUnitaryMatrix(): UniffiTruthValue`

Returns `UniffiTruthValue`.

<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_iszeromatrix.41be88536ed0"></a>
### UniffiMatrix.isZeroMatrix

`UniffiMatrix.isZeroMatrix(): UniffiTruthValue`

Returns `UniffiTruthValue`.

<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_multiply.228c6f858664"></a>
### UniffiMatrix.multiply

`UniffiMatrix.multiply(other: UniffiMatrix): UniffiMatrix`

Returns `UniffiMatrix`.

<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_subtract.9057cc530a0c"></a>
### UniffiMatrix.subtract

`UniffiMatrix.subtract(other: UniffiMatrix): UniffiMatrix`

Returns `UniffiMatrix`.

<a id="placement-placement.kotlin.kotlin_object.uniffisession_absolutevalue.93275bfef33a"></a>
### UniffiSession.absoluteValue

`UniffiSession.absoluteValue(argument: UniffiExpression): UniffiExpression`

Returns `UniffiExpression`.

<a id="placement-placement.kotlin.kotlin_object.uniffisession_complexentries.fe5c0641bf45"></a>
### UniffiSession.complexEntries

`UniffiSession.complexEntries(subject: UniffiMatrix): UniffiAssumptionProposition`

Returns `UniffiAssumptionProposition`.

<a id="placement-placement.kotlin.kotlin_object.uniffisession_cylindricalalgebraicdecomposition.1a00effba0b1"></a>
### UniffiSession.cylindricalAlgebraicDecomposition

`UniffiSession.cylindricalAlgebraicDecomposition(expressions: List<UniffiExpression>, variables: List<kotlin.String>, equationalConstraints: List<kotlin.ULong>): UniffiCylindricalAlgebraicDecomposition`

Returns `UniffiCylindricalAlgebraicDecomposition`.

<a id="placement-placement.kotlin.kotlin_object.uniffisession_diagonalmatrix.9bff826f0672"></a>
### UniffiSession.diagonalMatrix

`UniffiSession.diagonalMatrix(subject: UniffiMatrix): UniffiAssumptionProposition`

Returns `UniffiAssumptionProposition`.

<a id="placement-placement.kotlin.kotlin_object.uniffisession_fullrankmatrix.7c90405d0df0"></a>
### UniffiSession.fullRankMatrix

`UniffiSession.fullRankMatrix(subject: UniffiMatrix): UniffiAssumptionProposition`

Returns `UniffiAssumptionProposition`.

<a id="placement-placement.kotlin.kotlin_object.uniffisession_hermitianmatrix.e161f2877462"></a>
### UniffiSession.hermitianMatrix

`UniffiSession.hermitianMatrix(subject: UniffiMatrix): UniffiAssumptionProposition`

Returns `UniffiAssumptionProposition`.

<a id="placement-placement.kotlin.kotlin_object.uniffisession_identitymatrix.20d506bce27b"></a>
### UniffiSession.identityMatrix

`UniffiSession.identityMatrix(subject: UniffiMatrix): UniffiAssumptionProposition`

Returns `UniffiAssumptionProposition`.

<a id="placement-placement.kotlin.kotlin_object.uniffisession_integerentries.701f4dd04462"></a>
### UniffiSession.integerEntries

`UniffiSession.integerEntries(subject: UniffiMatrix): UniffiAssumptionProposition`

Returns `UniffiAssumptionProposition`.

<a id="placement-placement.kotlin.kotlin_object.uniffisession_invertiblematrix.14c1a3d8463c"></a>
### UniffiSession.invertibleMatrix

`UniffiSession.invertibleMatrix(subject: UniffiMatrix): UniffiAssumptionProposition`

Returns `UniffiAssumptionProposition`.

<a id="placement-placement.kotlin.kotlin_object.uniffisession_lowertriangularmatrix.bc508203257f"></a>
### UniffiSession.lowerTriangularMatrix

`UniffiSession.lowerTriangularMatrix(subject: UniffiMatrix): UniffiAssumptionProposition`

Returns `UniffiAssumptionProposition`.

<a id="placement-placement.kotlin.kotlin_object.uniffisession_matrixshape.c94e86cfc602"></a>
### UniffiSession.matrixShape

`UniffiSession.matrixShape(subject: UniffiMatrix, rows: kotlin.ULong, columns: kotlin.ULong): UniffiAssumptionProposition`

Returns `UniffiAssumptionProposition`.

<a id="placement-placement.kotlin.kotlin_object.uniffisession_nonnegativeassumption.8ddd4b3597f8"></a>
### UniffiSession.nonnegativeAssumption

`UniffiSession.nonnegativeAssumption(subject: UniffiExpression): UniffiAssumptionProposition`

Returns `UniffiAssumptionProposition`.

<a id="placement-placement.kotlin.kotlin_object.uniffisession_nonpositiveassumption.60a3fb1bcce9"></a>
### UniffiSession.nonpositiveAssumption

`UniffiSession.nonpositiveAssumption(subject: UniffiExpression): UniffiAssumptionProposition`

Returns `UniffiAssumptionProposition`.

<a id="placement-placement.kotlin.kotlin_object.uniffisession_normalmatrix.06e6e1e76254"></a>
### UniffiSession.normalMatrix

`UniffiSession.normalMatrix(subject: UniffiMatrix): UniffiAssumptionProposition`

Returns `UniffiAssumptionProposition`.

<a id="placement-placement.kotlin.kotlin_object.uniffisession_orthogonalmatrix.8106dc9178d6"></a>
### UniffiSession.orthogonalMatrix

`UniffiSession.orthogonalMatrix(subject: UniffiMatrix): UniffiAssumptionProposition`

Returns `UniffiAssumptionProposition`.

<a id="placement-placement.kotlin.kotlin_object.uniffisession_positivedefinitematrix.2042265f2628"></a>
### UniffiSession.positiveDefiniteMatrix

`UniffiSession.positiveDefiniteMatrix(subject: UniffiMatrix): UniffiAssumptionProposition`

Returns `UniffiAssumptionProposition`.

<a id="placement-placement.kotlin.kotlin_object.uniffisession_positivesemidefinitematrix.56570518213e"></a>
### UniffiSession.positiveSemidefiniteMatrix

`UniffiSession.positiveSemidefiniteMatrix(subject: UniffiMatrix): UniffiAssumptionProposition`

Returns `UniffiAssumptionProposition`.

<a id="placement-placement.kotlin.kotlin_object.uniffisession_realentries.498a75b3322f"></a>
### UniffiSession.realEntries

`UniffiSession.realEntries(subject: UniffiMatrix): UniffiAssumptionProposition`

Returns `UniffiAssumptionProposition`.

<a id="placement-placement.kotlin.kotlin_object.uniffisession_singularmatrix.ffcf9f898aee"></a>
### UniffiSession.singularMatrix

`UniffiSession.singularMatrix(subject: UniffiMatrix): UniffiAssumptionProposition`

Returns `UniffiAssumptionProposition`.

<a id="placement-placement.kotlin.kotlin_object.uniffisession_squarematrix.a4df2b5531ed"></a>
### UniffiSession.squareMatrix

`UniffiSession.squareMatrix(subject: UniffiMatrix): UniffiAssumptionProposition`

Returns `UniffiAssumptionProposition`.

<a id="placement-placement.kotlin.kotlin_object.uniffisession_symmetricmatrix.997a978d221e"></a>
### UniffiSession.symmetricMatrix

`UniffiSession.symmetricMatrix(subject: UniffiMatrix): UniffiAssumptionProposition`

Returns `UniffiAssumptionProposition`.

<a id="placement-placement.kotlin.kotlin_object.uniffisession_unitarymatrix.0aa1e4df9fc1"></a>
### UniffiSession.unitaryMatrix

`UniffiSession.unitaryMatrix(subject: UniffiMatrix): UniffiAssumptionProposition`

Returns `UniffiAssumptionProposition`.

<a id="placement-placement.kotlin.kotlin_object.uniffisession_uppertriangularmatrix.cadbbfb1365e"></a>
### UniffiSession.upperTriangularMatrix

`UniffiSession.upperTriangularMatrix(subject: UniffiMatrix): UniffiAssumptionProposition`

Returns `UniffiAssumptionProposition`.

<a id="placement-placement.kotlin.kotlin_object.uniffisession_zeromatrix.724b4ed94261"></a>
### UniffiSession.zeroMatrix

`UniffiSession.zeroMatrix(subject: UniffiMatrix): UniffiAssumptionProposition`

Returns `UniffiAssumptionProposition`.

