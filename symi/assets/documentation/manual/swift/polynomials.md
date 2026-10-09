# Polynomial queries

These take ordinary expressions plus a variable name; the named variable
becomes the main polynomial variable and every other free variable rides
along symbolically in the coefficients. An expression that is not polynomial
in the variable (a transcendental call of it, a non-integer power of it)
makes the query decline — `None` for `degree`, an error for the others.

### degree

<a id="placement-placement.swift.swift_object.uniffisession_degree.e65c61e5d63c"></a>
`UniffiSession.degree(inputExpression: UniffiExpression, variable: String) -> UInt64?`


Degree in `variable`. `None` when the expression is not polynomial in
`variable` **or is identically zero** (the zero polynomial has no degree
under the core convention).

### leading_coefficient

<a id="placement-placement.swift.swift_object.uniffisession_leadingcoefficient.8f2fc4c0f8dd"></a>
`UniffiSession.leadingCoefficient(inputExpression: UniffiExpression, variable: String) -> UniffiExpression`


Coefficient of the highest power of `variable`; may contain the other free
variables. Errors on non-polynomial or zero input.

### coefficient

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationjetcoefficient_coefficient.6ba74d2c787f"></a>
`UniffiPartialDifferentialEquationJetCoefficient.coefficient() -> UniffiExpression`

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationprincipalcoefficient_coefficient.db70f03f67e2"></a>
`UniffiPartialDifferentialEquationPrincipalCoefficient.coefficient() -> UniffiExpression`

<a id="placement-placement.swift.swift_object.uniffisession_coefficient.ec55f5d254c7"></a>
`UniffiSession.coefficient(inputExpression: UniffiExpression, variable: String, power: UInt64) -> UniffiExpression`


Coefficient of `variable^power`; integer 0 when the term is absent. Errors
on non-polynomial input.

### polynomial_gcd

<a id="placement-placement.swift.swift_object.uniffisession_polynomialgcd.3f202a50b626"></a>
`UniffiSession.polynomialGcd(left: UniffiExpression, right: UniffiExpression, variable: String) -> UniffiExpression`


Greatest common divisor of the two expressions as polynomials in `variable`
(primitive, with the core's sign normalisation). Errors when either input is
not polynomial in `variable`.

### resultant

<a id="placement-placement.swift.swift_object.uniffisession_resultant.40e15ea63790"></a>
`UniffiSession.resultant(left: UniffiExpression, right: UniffiExpression, variable: String) -> UniffiExpression`


Resultant with respect to `variable`; zero exactly when the two polynomials
share a root (over the algebraic closure). Errors on non-polynomial input.

### isolate_real_roots

<a id="placement-placement.swift.swift_object.uniffisession_isolaterealroots.a0d8a4cf5f07"></a>
`UniffiSession.isolateRealRoots(inputExpression: UniffiExpression, variable: String) -> [UniffiIsolatingInterval]`


One `(lower, upper)` rational isolating interval per distinct real root,
sorted ascending; a collapsed pair `(r, r)` marks an exact rational root.
Requires a non-zero **univariate** polynomial with rational coefficients.
**Notes:** WASM returns `IsolatingInterval` objects with `lower`/`upper`
getters.

### isolating_interval (WASM result class)

### lower

<a id="placement-placement.swift.swift_object.uniffiisolatinginterval_lower.d52095c5b42d"></a>
`UniffiIsolatingInterval.lower() -> UniffiExpression`


### upper

<a id="placement-placement.swift.swift_object.uniffiisolatinginterval_upper.42681029cd3e"></a>
`UniffiIsolatingInterval.upper() -> UniffiExpression`


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

<a id="placement-placement.swift.swift_object.uniffisession_groebnerbasis.41e30f4970c9"></a>
`UniffiSession.groebnerBasis(generators: [UniffiExpression], variables: [String], order: UniffiMonomialOrdering) -> [UniffiExpression]?`


The canonical reduced Gröbner basis of the ideal `<generators>` under the named
monomial order — monic, autoreduced, and sorted, so it is unique for the
`(ideal, order)` pair. `None` when any generator is outside \(\mathbb{Q}[\text{variables}]\).

### ideal_membership

<a id="placement-placement.swift.swift_object.uniffisession_idealmembership.c210256aa1ae"></a>
`UniffiSession.idealMembership(element: UniffiExpression, generators: [UniffiExpression], variables: [String], order: UniffiMonomialOrdering) -> Bool?`


Whether `element` lies in the ideal `<generators>`, decided by reducing it to
its normal form modulo the Gröbner basis (zero exactly when it is a member).
The verdict is independent of the order. `None` when the element or a generator
is outside \(\mathbb{Q}[\text{variables}]\).

### ideal_sum

<a id="placement-placement.swift.swift_object.uniffisession_idealsum.f6c76cfd9b80"></a>
`UniffiSession.idealSum(generatorsLeft: [UniffiExpression], generatorsRight: [UniffiExpression], variables: [String], order: UniffiMonomialOrdering) -> [UniffiExpression]?`


A Gröbner basis of the ideal sum `I + J`, the ideal generated by the two
generator lists together. `None` on a non-\(\mathbb{Q}[\text{variables}]\) generator.

### ideal_product

<a id="placement-placement.swift.swift_object.uniffisession_idealproduct.fb08f53b3c6d"></a>
`UniffiSession.idealProduct(generatorsLeft: [UniffiExpression], generatorsRight: [UniffiExpression], variables: [String], order: UniffiMonomialOrdering) -> [UniffiExpression]?`


A Gröbner basis of the ideal product \(I J\), generated by all pairwise
products of the two generator lists. `None` on a non-\(\mathbb{Q}[\text{variables}]\) generator.

### ideal_intersection

<a id="placement-placement.swift.swift_object.uniffisession_idealintersection.df75b54ba807"></a>
`UniffiSession.idealIntersection(generatorsLeft: [UniffiExpression], generatorsRight: [UniffiExpression], variables: [String], order: UniffiMonomialOrdering) -> [UniffiExpression]?`


A generating set of the ideal intersection \(I \cap J\), computed by the standard
tag-variable elimination construction \(t I + (1-t) J\). `None` on a
non-\(\mathbb{Q}[\text{variables}]\) generator.

### elimination_ideal

<a id="placement-placement.swift.swift_object.uniffisession_eliminationideal.ba376abbbe63"></a>
`UniffiSession.eliminationIdeal(generators: [UniffiExpression], variables: [String], eliminate: [String]) -> [UniffiExpression]?`


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

<a id="placement-placement.swift.swift_object.uniffisession_changemonomialorder.affdcb526086"></a>
`UniffiSession.changeMonomialOrder(basis: [UniffiExpression], variables: [String], sourceOrder: UniffiMonomialOrdering, targetOrder: UniffiMonomialOrdering) -> [UniffiExpression]?`


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

<a id="placement-placement.swift.swift_object.uniffisession_implicitize.a9f78d345293"></a>
`UniffiSession.implicitize(coordinates: [String], parameters: [String], parametricExpressions: [UniffiExpression]) -> [UniffiExpression]?`


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

<a id="placement-placement.swift.swift_object.uniffiassumptionproposition_plaintext.33fcfe3515b2"></a>
### UniffiAssumptionProposition.plainText

`UniffiAssumptionProposition.plainText() -> String`

Returns `String`.

<a id="placement-placement.swift.swift_object.uniffiexpression_absolutevalue.6dd3aae9d19d"></a>
### UniffiExpression.absoluteValue

`UniffiExpression.absoluteValue() -> UniffiExpression`

Returns `UniffiExpression`.

<a id="placement-placement.swift.swift_object.uniffiexpression_add.2e029ecc008d"></a>
### UniffiExpression.add

`UniffiExpression.add(other: UniffiExpression) -> UniffiExpression`

Returns `UniffiExpression`.

<a id="placement-placement.swift.swift_object.uniffiexpression_isalgebraic.72f4eab85a10"></a>
### UniffiExpression.isAlgebraic

`UniffiExpression.isAlgebraic() -> UniffiTruthValue`

Returns `UniffiTruthValue`.

<a id="placement-placement.swift.swift_object.uniffiexpression_iscomplex.e71c8146d2ec"></a>
### UniffiExpression.isComplex

`UniffiExpression.isComplex() -> UniffiTruthValue`

Returns `UniffiTruthValue`.

<a id="placement-placement.swift.swift_object.uniffiexpression_iscomposite.f7042f26b81b"></a>
### UniffiExpression.isComposite

`UniffiExpression.isComposite() -> UniffiTruthValue`

Returns `UniffiTruthValue`.

<a id="placement-placement.swift.swift_object.uniffiexpression_iseven.bed013946585"></a>
### UniffiExpression.isEven

`UniffiExpression.isEven() -> UniffiTruthValue`

Returns `UniffiTruthValue`.

<a id="placement-placement.swift.swift_object.uniffiexpression_isextendedreal.58bc63368ee6"></a>
### UniffiExpression.isExtendedReal

`UniffiExpression.isExtendedReal() -> UniffiTruthValue`

Returns `UniffiTruthValue`.

<a id="placement-placement.swift.swift_object.uniffiexpression_isinfinite.29a4e28f3559"></a>
### UniffiExpression.isInfinite

`UniffiExpression.isInfinite() -> UniffiTruthValue`

Returns `UniffiTruthValue`.

<a id="placement-placement.swift.swift_object.uniffiexpression_isirrational.a94d46360445"></a>
### UniffiExpression.isIrrational

`UniffiExpression.isIrrational() -> UniffiTruthValue`

Returns `UniffiTruthValue`.

<a id="placement-placement.swift.swift_object.uniffiexpression_isnatural.6f9a6b9a4c41"></a>
### UniffiExpression.isNatural

`UniffiExpression.isNatural() -> UniffiTruthValue`

Returns `UniffiTruthValue`.

<a id="placement-placement.swift.swift_object.uniffiexpression_isnonpositive.00742e6005ef"></a>
### UniffiExpression.isNonpositive

`UniffiExpression.isNonpositive() -> UniffiTruthValue`

Returns `UniffiTruthValue`.

<a id="placement-placement.swift.swift_object.uniffiexpression_isodd.f6f6de227cc7"></a>
### UniffiExpression.isOdd

`UniffiExpression.isOdd() -> UniffiTruthValue`

Returns `UniffiTruthValue`.

<a id="placement-placement.swift.swift_object.uniffiexpression_ispositiveinteger.b25c5fe306b0"></a>
### UniffiExpression.isPositiveInteger

`UniffiExpression.isPositiveInteger() -> UniffiTruthValue`

Returns `UniffiTruthValue`.

<a id="placement-placement.swift.swift_object.uniffiexpression_istranscendental.8b5be476d346"></a>
### UniffiExpression.isTranscendental

`UniffiExpression.isTranscendental() -> UniffiTruthValue`

Returns `UniffiTruthValue`.

<a id="placement-placement.swift.swift_object.uniffiexpression_iszero.ddbfc5afa668"></a>
### UniffiExpression.isZero

`UniffiExpression.isZero() -> UniffiTruthValue`

Returns `UniffiTruthValue`.

<a id="placement-placement.swift.swift_object.uniffiexpression_multiply.f3d9b9955593"></a>
### UniffiExpression.multiply

`UniffiExpression.multiply(other: UniffiExpression) -> UniffiExpression`

Returns `UniffiExpression`.

<a id="placement-placement.swift.swift_object.uniffiexpression_plaintext.602e518f6cca"></a>
### UniffiExpression.plainText

`UniffiExpression.plainText() -> String`

Returns `String`.

<a id="placement-placement.swift.swift_object.uniffiexpression_subtract.83f9546e2830"></a>
### UniffiExpression.subtract

`UniffiExpression.subtract(other: UniffiExpression) -> UniffiExpression`

Returns `UniffiExpression`.

<a id="placement-placement.swift.swift_object.uniffimatrix_add.613832f65527"></a>
### UniffiMatrix.add

`UniffiMatrix.add(other: UniffiMatrix) -> UniffiMatrix`

Returns `UniffiMatrix`.

<a id="placement-placement.swift.swift_object.uniffimatrix_hascomplexentries.0eade1c68cde"></a>
### UniffiMatrix.hasComplexEntries

`UniffiMatrix.hasComplexEntries() -> UniffiTruthValue`

Returns `UniffiTruthValue`.

<a id="placement-placement.swift.swift_object.uniffimatrix_hasintegerentries.a6abde96fe2f"></a>
### UniffiMatrix.hasIntegerEntries

`UniffiMatrix.hasIntegerEntries() -> UniffiTruthValue`

Returns `UniffiTruthValue`.

<a id="placement-placement.swift.swift_object.uniffimatrix_hasrealentries.2454112d2884"></a>
### UniffiMatrix.hasRealEntries

`UniffiMatrix.hasRealEntries() -> UniffiTruthValue`

Returns `UniffiTruthValue`.

<a id="placement-placement.swift.swift_object.uniffimatrix_isdiagonalmatrix.ea18d09ee5bc"></a>
### UniffiMatrix.isDiagonalMatrix

`UniffiMatrix.isDiagonalMatrix() -> UniffiTruthValue`

Returns `UniffiTruthValue`.

<a id="placement-placement.swift.swift_object.uniffimatrix_isfullrankmatrix.5a9d9beef2f9"></a>
### UniffiMatrix.isFullRankMatrix

`UniffiMatrix.isFullRankMatrix() -> UniffiTruthValue`

Returns `UniffiTruthValue`.

<a id="placement-placement.swift.swift_object.uniffimatrix_ishermitianmatrix.8462cf6ea34d"></a>
### UniffiMatrix.isHermitianMatrix

`UniffiMatrix.isHermitianMatrix() -> UniffiTruthValue`

Returns `UniffiTruthValue`.

<a id="placement-placement.swift.swift_object.uniffimatrix_isidentitymatrix.903693a73d88"></a>
### UniffiMatrix.isIdentityMatrix

`UniffiMatrix.isIdentityMatrix() -> UniffiTruthValue`

Returns `UniffiTruthValue`.

<a id="placement-placement.swift.swift_object.uniffimatrix_isinvertiblematrix.d1b4453361d0"></a>
### UniffiMatrix.isInvertibleMatrix

`UniffiMatrix.isInvertibleMatrix() -> UniffiTruthValue`

Returns `UniffiTruthValue`.

<a id="placement-placement.swift.swift_object.uniffimatrix_isnormalmatrix.9c02bdab42e7"></a>
### UniffiMatrix.isNormalMatrix

`UniffiMatrix.isNormalMatrix() -> UniffiTruthValue`

Returns `UniffiTruthValue`.

<a id="placement-placement.swift.swift_object.uniffimatrix_isorthogonalmatrix.1d4c8b67cd16"></a>
### UniffiMatrix.isOrthogonalMatrix

`UniffiMatrix.isOrthogonalMatrix() -> UniffiTruthValue`

Returns `UniffiTruthValue`.

<a id="placement-placement.swift.swift_object.uniffimatrix_ispositivedefinitematrix.bcbe40ae88c7"></a>
### UniffiMatrix.isPositiveDefiniteMatrix

`UniffiMatrix.isPositiveDefiniteMatrix() -> UniffiTruthValue`

Returns `UniffiTruthValue`.

<a id="placement-placement.swift.swift_object.uniffimatrix_ispositivesemidefinitematrix.cd1bbc63a9b2"></a>
### UniffiMatrix.isPositiveSemidefiniteMatrix

`UniffiMatrix.isPositiveSemidefiniteMatrix() -> UniffiTruthValue`

Returns `UniffiTruthValue`.

<a id="placement-placement.swift.swift_object.uniffimatrix_issingularmatrix.a0a49c18a476"></a>
### UniffiMatrix.isSingularMatrix

`UniffiMatrix.isSingularMatrix() -> UniffiTruthValue`

Returns `UniffiTruthValue`.

<a id="placement-placement.swift.swift_object.uniffimatrix_issquare.2d76800f71bb"></a>
### UniffiMatrix.isSquare

`UniffiMatrix.isSquare() -> UniffiTruthValue`

Returns `UniffiTruthValue`.

<a id="placement-placement.swift.swift_object.uniffimatrix_issymmetricmatrix.271072821211"></a>
### UniffiMatrix.isSymmetricMatrix

`UniffiMatrix.isSymmetricMatrix() -> UniffiTruthValue`

Returns `UniffiTruthValue`.

<a id="placement-placement.swift.swift_object.uniffimatrix_isunitarymatrix.6b8f914e2c6f"></a>
### UniffiMatrix.isUnitaryMatrix

`UniffiMatrix.isUnitaryMatrix() -> UniffiTruthValue`

Returns `UniffiTruthValue`.

<a id="placement-placement.swift.swift_object.uniffimatrix_iszeromatrix.7910f4f523cb"></a>
### UniffiMatrix.isZeroMatrix

`UniffiMatrix.isZeroMatrix() -> UniffiTruthValue`

Returns `UniffiTruthValue`.

<a id="placement-placement.swift.swift_object.uniffimatrix_multiply.8ba400c3e3b4"></a>
### UniffiMatrix.multiply

`UniffiMatrix.multiply(other: UniffiMatrix) -> UniffiMatrix`

Returns `UniffiMatrix`.

<a id="placement-placement.swift.swift_object.uniffimatrix_subtract.a3819adac83e"></a>
### UniffiMatrix.subtract

`UniffiMatrix.subtract(other: UniffiMatrix) -> UniffiMatrix`

Returns `UniffiMatrix`.

<a id="placement-placement.swift.swift_object.uniffisession_absolutevalue.e830fae29853"></a>
### UniffiSession.absoluteValue

`UniffiSession.absoluteValue(argument: UniffiExpression) -> UniffiExpression`

Returns `UniffiExpression`.

<a id="placement-placement.swift.swift_object.uniffisession_complexentries.99b7925b679e"></a>
### UniffiSession.complexEntries

`UniffiSession.complexEntries(subject: UniffiMatrix) -> UniffiAssumptionProposition`

Returns `UniffiAssumptionProposition`.

<a id="placement-placement.swift.swift_object.uniffisession_cylindricalalgebraicdecomposition.848e026e0115"></a>
### UniffiSession.cylindricalAlgebraicDecomposition

`UniffiSession.cylindricalAlgebraicDecomposition(expressions: [UniffiExpression], variables: [String], equationalConstraints: [UInt64]) -> UniffiCylindricalAlgebraicDecomposition`

Returns `UniffiCylindricalAlgebraicDecomposition`.

<a id="placement-placement.swift.swift_object.uniffisession_diagonalmatrix.23ce19207678"></a>
### UniffiSession.diagonalMatrix

`UniffiSession.diagonalMatrix(subject: UniffiMatrix) -> UniffiAssumptionProposition`

Returns `UniffiAssumptionProposition`.

<a id="placement-placement.swift.swift_object.uniffisession_fullrankmatrix.55c31ae64b31"></a>
### UniffiSession.fullRankMatrix

`UniffiSession.fullRankMatrix(subject: UniffiMatrix) -> UniffiAssumptionProposition`

Returns `UniffiAssumptionProposition`.

<a id="placement-placement.swift.swift_object.uniffisession_hermitianmatrix.858453b2be51"></a>
### UniffiSession.hermitianMatrix

`UniffiSession.hermitianMatrix(subject: UniffiMatrix) -> UniffiAssumptionProposition`

Returns `UniffiAssumptionProposition`.

<a id="placement-placement.swift.swift_object.uniffisession_identitymatrix.796c1008fa8e"></a>
### UniffiSession.identityMatrix

`UniffiSession.identityMatrix(subject: UniffiMatrix) -> UniffiAssumptionProposition`

Returns `UniffiAssumptionProposition`.

<a id="placement-placement.swift.swift_object.uniffisession_integerentries.7c1e9edc5402"></a>
### UniffiSession.integerEntries

`UniffiSession.integerEntries(subject: UniffiMatrix) -> UniffiAssumptionProposition`

Returns `UniffiAssumptionProposition`.

<a id="placement-placement.swift.swift_object.uniffisession_invertiblematrix.fac62ff7dabd"></a>
### UniffiSession.invertibleMatrix

`UniffiSession.invertibleMatrix(subject: UniffiMatrix) -> UniffiAssumptionProposition`

Returns `UniffiAssumptionProposition`.

<a id="placement-placement.swift.swift_object.uniffisession_lowertriangularmatrix.cc9c939311b8"></a>
### UniffiSession.lowerTriangularMatrix

`UniffiSession.lowerTriangularMatrix(subject: UniffiMatrix) -> UniffiAssumptionProposition`

Returns `UniffiAssumptionProposition`.

<a id="placement-placement.swift.swift_object.uniffisession_matrixshape.5cf7d0777af7"></a>
### UniffiSession.matrixShape

`UniffiSession.matrixShape(subject: UniffiMatrix, rows: UInt64, columns: UInt64) -> UniffiAssumptionProposition`

Returns `UniffiAssumptionProposition`.

<a id="placement-placement.swift.swift_object.uniffisession_nonnegativeassumption.a41710fe92e9"></a>
### UniffiSession.nonnegativeAssumption

`UniffiSession.nonnegativeAssumption(subject: UniffiExpression) -> UniffiAssumptionProposition`

Returns `UniffiAssumptionProposition`.

<a id="placement-placement.swift.swift_object.uniffisession_nonpositiveassumption.6769adc459db"></a>
### UniffiSession.nonpositiveAssumption

`UniffiSession.nonpositiveAssumption(subject: UniffiExpression) -> UniffiAssumptionProposition`

Returns `UniffiAssumptionProposition`.

<a id="placement-placement.swift.swift_object.uniffisession_normalmatrix.2c35c2ffc9ab"></a>
### UniffiSession.normalMatrix

`UniffiSession.normalMatrix(subject: UniffiMatrix) -> UniffiAssumptionProposition`

Returns `UniffiAssumptionProposition`.

<a id="placement-placement.swift.swift_object.uniffisession_orthogonalmatrix.9693c17657e1"></a>
### UniffiSession.orthogonalMatrix

`UniffiSession.orthogonalMatrix(subject: UniffiMatrix) -> UniffiAssumptionProposition`

Returns `UniffiAssumptionProposition`.

<a id="placement-placement.swift.swift_object.uniffisession_positivedefinitematrix.ab2c7a4e0b9f"></a>
### UniffiSession.positiveDefiniteMatrix

`UniffiSession.positiveDefiniteMatrix(subject: UniffiMatrix) -> UniffiAssumptionProposition`

Returns `UniffiAssumptionProposition`.

<a id="placement-placement.swift.swift_object.uniffisession_positivesemidefinitematrix.8d5eff06726d"></a>
### UniffiSession.positiveSemidefiniteMatrix

`UniffiSession.positiveSemidefiniteMatrix(subject: UniffiMatrix) -> UniffiAssumptionProposition`

Returns `UniffiAssumptionProposition`.

<a id="placement-placement.swift.swift_object.uniffisession_realentries.490b89e3be20"></a>
### UniffiSession.realEntries

`UniffiSession.realEntries(subject: UniffiMatrix) -> UniffiAssumptionProposition`

Returns `UniffiAssumptionProposition`.

<a id="placement-placement.swift.swift_object.uniffisession_singularmatrix.1ec8021176dc"></a>
### UniffiSession.singularMatrix

`UniffiSession.singularMatrix(subject: UniffiMatrix) -> UniffiAssumptionProposition`

Returns `UniffiAssumptionProposition`.

<a id="placement-placement.swift.swift_object.uniffisession_squarematrix.1f0447943ee4"></a>
### UniffiSession.squareMatrix

`UniffiSession.squareMatrix(subject: UniffiMatrix) -> UniffiAssumptionProposition`

Returns `UniffiAssumptionProposition`.

<a id="placement-placement.swift.swift_object.uniffisession_symmetricmatrix.76919b542c94"></a>
### UniffiSession.symmetricMatrix

`UniffiSession.symmetricMatrix(subject: UniffiMatrix) -> UniffiAssumptionProposition`

Returns `UniffiAssumptionProposition`.

<a id="placement-placement.swift.swift_object.uniffisession_unitarymatrix.9bbcc7068ba8"></a>
### UniffiSession.unitaryMatrix

`UniffiSession.unitaryMatrix(subject: UniffiMatrix) -> UniffiAssumptionProposition`

Returns `UniffiAssumptionProposition`.

<a id="placement-placement.swift.swift_object.uniffisession_uppertriangularmatrix.66284c751119"></a>
### UniffiSession.upperTriangularMatrix

`UniffiSession.upperTriangularMatrix(subject: UniffiMatrix) -> UniffiAssumptionProposition`

Returns `UniffiAssumptionProposition`.

<a id="placement-placement.swift.swift_object.uniffisession_zeromatrix.3cd60fff040e"></a>
### UniffiSession.zeroMatrix

`UniffiSession.zeroMatrix(subject: UniffiMatrix) -> UniffiAssumptionProposition`

Returns `UniffiAssumptionProposition`.

