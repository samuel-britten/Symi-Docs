# Polynomial queries

These take ordinary expressions plus a variable name; the named variable
becomes the main polynomial variable and every other free variable rides
along symbolically in the coefficients. An expression that is not polynomial
in the variable (a transcendental call of it, a non-integer power of it)
makes the query decline — `None` for `degree`, an error for the others.

### degree

<a id="placement-placement.wasm.wasm_class.context_degree.d5afc93f0991"></a>
Raw WebAssembly: `pub fn degree(&self, input_expression: &Expression, variable: &str) -> Result<Option<usize>, JsError>`

<a id="placement-placement.wasm.wasm_module.module_degree.b2d823ac32d1"></a>
Raw WebAssembly: `fn degree(input_expression: &Expression, variable: &str) -> Result<Option<usize>, JsError>`


Degree in `variable`. `None` when the expression is not polynomial in
`variable` **or is identically zero** (the zero polynomial has no degree
under the core convention).

### leading_coefficient

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.leading_coefficient`](/symi/python/polynomials#leading_coefficient) in Python, [`UniffiSession.leadingCoefficient`](/symi/kotlin/polynomials#leading_coefficient) in Kotlin, [`UniffiSession.leadingCoefficient`](/symi/swift/polynomials#leading_coefficient) in Swift, [`api::algebra::Session::leading_coefficient`](/symi/rust/polynomials#leading_coefficient) in Rust.*


Coefficient of the highest power of `variable`; may contain the other free
variables. Errors on non-polynomial or zero input.

### coefficient

<a id="placement-placement.wasm.wasm_class.context_coefficient.8facb544769d"></a>
Raw WebAssembly: `pub fn coefficient(&self, input_expression: &Expression, variable: &str, power: usize) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationjetcoefficient_coefficient.517fdfbfa0c1"></a>
Raw WebAssembly: `pub fn coefficient(&self) -> Expression`

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationprincipalcoefficient_coefficient.c6dd1d226399"></a>
Raw WebAssembly: `pub fn coefficient(&self) -> Expression`

<a id="placement-placement.wasm.wasm_module.module_coefficient.b04c0fe2497b"></a>
Raw WebAssembly: `fn coefficient(input_expression: &Expression, variable: &str, power: usize) -> Result<Expression, JsError>`


Coefficient of `variable^power`; integer 0 when the term is absent. Errors
on non-polynomial input.

### polynomial_gcd

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.polynomial_gcd`](/symi/python/polynomials#polynomial_gcd) in Python, [`UniffiSession.polynomialGcd`](/symi/kotlin/polynomials#polynomial_gcd) in Kotlin, [`UniffiSession.polynomialGcd`](/symi/swift/polynomials#polynomial_gcd) in Swift, [`api::algebra::Session::polynomial_gcd`](/symi/rust/polynomials#polynomial_gcd) in Rust.*


Greatest common divisor of the two expressions as polynomials in `variable`
(primitive, with the core's sign normalisation). Errors when either input is
not polynomial in `variable`.

### resultant

<a id="placement-placement.wasm.wasm_class.context_resultant.a85ac4158e89"></a>
Raw WebAssembly: `pub fn resultant(&self, a: &Expression, b: &Expression, variable: &str) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_module.module_resultant.fd887f886ff7"></a>
Raw WebAssembly: `fn resultant(a: &Expression, b: &Expression, variable: &str) -> Result<Expression, JsError>`


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

<a id="placement-placement.wasm.wasm_class.isolatinginterval_lower.fbc0bf3f0386"></a>
Raw WebAssembly: `pub fn lower(&self) -> Expression`


### upper

<a id="placement-placement.wasm.wasm_class.isolatinginterval_upper.c137d742d426"></a>
Raw WebAssembly: `pub fn upper(&self) -> Expression`


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

<a id="placement-placement.wasm.wasm_class.context_implicitize.05ec5f6bd5e5"></a>
Raw WebAssembly: `pub fn implicitize(&self, coordinates: Vec<String>, parameters: Vec<String>, parametric_expressions: Vec<Expression>) -> Result<Option<Vec<Expression>>, JsError>`

<a id="placement-placement.wasm.wasm_module.module_implicitize.a997715b9750"></a>
Raw WebAssembly: `fn implicitize(coordinates: Vec<String>, parameters: Vec<String>, parametric_expressions: Vec<Expression>) -> Result<Option<Vec<Expression>>, JsError>`


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

<a id="placement-placement.wasm.javascript_facade.assumptionproposition.b30925c7b0d9"></a>
### AssumptionProposition

`export class AssumptionProposition {`

Returns `assumption_proposition`.

<a id="placement-placement.wasm.javascript_facade.assumptionproposition_congruencemodulus.958e75bacc16"></a>
### AssumptionProposition.congruenceModulus

`AssumptionProposition.congruenceModulus(): Expression | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.assumptionproposition_free.3aac53fe6166"></a>
### AssumptionProposition.free

`AssumptionProposition.free(): void`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.assumptionproposition_leftoperand.1cd6f2d84196"></a>
### AssumptionProposition.leftOperand

`AssumptionProposition.leftOperand(): Expression | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.assumptionproposition_membershipelement.e669e2bb3843"></a>
### AssumptionProposition.membershipElement

`AssumptionProposition.membershipElement(): Expression | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.assumptionproposition_membershipset.56fd05efb36b"></a>
### AssumptionProposition.membershipSet

`AssumptionProposition.membershipSet(): Expression | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.assumptionproposition_relationkind.077f50cc3ca4"></a>
### AssumptionProposition.relationKind

`AssumptionProposition.relationKind(): "equal" | "not_equal" | "less" | "less_or_equal" | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.assumptionproposition_rightoperand.cd1d8db9f940"></a>
### AssumptionProposition.rightOperand

`AssumptionProposition.rightOperand(): Expression | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.assumptionproposition_tostring.1bef2e8fdf8b"></a>
### AssumptionProposition.toString

`AssumptionProposition.toString(): string`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.assumptionscope.6062700f9779"></a>
### AssumptionScope

`export class AssumptionScope {`

Returns `assumption_scope`.

<a id="placement-placement.wasm.javascript_facade.assumptionscope_couldhold.cd0ffcddc4c7"></a>
### AssumptionScope.couldHold

`AssumptionScope.couldHold(proposition: AssumptionProposition): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.assumptionscope_free.0065977a775c"></a>
### AssumptionScope.free

`AssumptionScope.free(): void`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context.63263e1ca6f7"></a>
### Context

`export interface Context {`

Returns `context`.

<a id="placement-placement.wasm.javascript_facade.context_absolutevalue.ef3837cbe2e9"></a>
### Context.absoluteValue

`Context.absoluteValue(value: ExpressionLike): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_addassumptions.bd466d03ca25"></a>
### Context.addAssumptions

`Context.addAssumptions(proposition: AssumptionProposition): void`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_algebraicassumption.13f584dcd297"></a>
### Context.algebraicAssumption

`Context.algebraicAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_assumptionpropositionfromlogicalexpression.2634b9a120ce"></a>
### Context.assumptionPropositionFromLogicalExpression

`Context.assumptionPropositionFromLogicalExpression(logicalExpression: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_clearallassumptions.a0d7b8978517"></a>
### Context.clearAllAssumptions

`Context.clearAllAssumptions(): void`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_complexassumption.de9b2d0d5a6b"></a>
### Context.complexAssumption

`Context.complexAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_complexentries.8ea406d31c90"></a>
### Context.complexEntries

`Context.complexEntries(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_compositeassumption.7fafa23ed771"></a>
### Context.compositeAssumption

`Context.compositeAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_congruentassumption.ba23c40226c0"></a>
### Context.congruentAssumption

`Context.congruentAssumption(left: ExpressionLike, right: ExpressionLike, modulus: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_couldhold.07dbc6c95fcb"></a>
### Context.couldHold

`Context.couldHold(proposition: AssumptionProposition): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_definedassumption.a6b8cd5e249d"></a>
### Context.definedAssumption

`Context.definedAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_deserializeassumptionproposition.a3cd68aa2883"></a>
### Context.deserializeAssumptionProposition

`Context.deserializeAssumptionProposition(text: string): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_diagonalmatrix.4a508bb260ba"></a>
### Context.diagonalMatrix

`Context.diagonalMatrix(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_equalassumption.e2385c0eb338"></a>
### Context.equalAssumption

`Context.equalAssumption(left: ExpressionLike, right: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_evenassumption.e7be2f22f2fa"></a>
### Context.evenAssumption

`Context.evenAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_extendedrealassumption.24a10286e28a"></a>
### Context.extendedRealAssumption

`Context.extendedRealAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_finiteassumption.53a61f54e11a"></a>
### Context.finiteAssumption

`Context.finiteAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_fullrankmatrix.9ea5686dda2d"></a>
### Context.fullRankMatrix

`Context.fullRankMatrix(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_greaterassumption.b5c7e745dc87"></a>
### Context.greaterAssumption

`Context.greaterAssumption(left: ExpressionLike, right: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_greaterorequalassumption.533a8f9c54be"></a>
### Context.greaterOrEqualAssumption

`Context.greaterOrEqualAssumption(left: ExpressionLike, right: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_hermitianmatrix.b40f37562f34"></a>
### Context.hermitianMatrix

`Context.hermitianMatrix(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_identitymatrix.a1cf6abb115b"></a>
### Context.identityMatrix

`Context.identityMatrix(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_infiniteassumption.1f8d8206b5d4"></a>
### Context.infiniteAssumption

`Context.infiniteAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_integerassumption.cf3033b261f3"></a>
### Context.integerAssumption

`Context.integerAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_integerentries.1bfe48d4d7e5"></a>
### Context.integerEntries

`Context.integerEntries(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_invertiblematrix.3f2a5f363550"></a>
### Context.invertibleMatrix

`Context.invertibleMatrix(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_irrationalassumption.55887270e7fd"></a>
### Context.irrationalAssumption

`Context.irrationalAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_lessassumption.c8f4215c1aeb"></a>
### Context.lessAssumption

`Context.lessAssumption(left: ExpressionLike, right: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_lessorequalassumption.54b87c34ad81"></a>
### Context.lessOrEqualAssumption

`Context.lessOrEqualAssumption(left: ExpressionLike, right: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_lowertriangularmatrix.f6b8f881e801"></a>
### Context.lowerTriangularMatrix

`Context.lowerTriangularMatrix(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_matrixshape.36881a4eaa96"></a>
### Context.matrixShape

`Context.matrixShape(value: Matrix, rows: number, columns: number): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_memberassumption.4bb9ab611722"></a>
### Context.memberAssumption

`Context.memberAssumption(element: ExpressionLike, setExpression: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_naturalassumption.19c46f121eb7"></a>
### Context.naturalAssumption

`Context.naturalAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_negativeassumption.4f548122612d"></a>
### Context.negativeAssumption

`Context.negativeAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_nonnegativeassumption.d5fe84f63a4f"></a>
### Context.nonnegativeAssumption

`Context.nonnegativeAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_nonpositiveassumption.bbd2f123adaa"></a>
### Context.nonpositiveAssumption

`Context.nonpositiveAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_nonzeroassumption.13c24e7f7a6e"></a>
### Context.nonzeroAssumption

`Context.nonzeroAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_normalmatrix.1dab2bd7e17a"></a>
### Context.normalMatrix

`Context.normalMatrix(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_notequalassumption.67d2e7f5e08e"></a>
### Context.notEqualAssumption

`Context.notEqualAssumption(left: ExpressionLike, right: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_oddassumption.4c7823e1efdb"></a>
### Context.oddAssumption

`Context.oddAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_orthogonalmatrix.d64d9afbebcd"></a>
### Context.orthogonalMatrix

`Context.orthogonalMatrix(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_positiveassumption.78c5b78a1489"></a>
### Context.positiveAssumption

`Context.positiveAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_positivedefinitematrix.7dbac73d84be"></a>
### Context.positiveDefiniteMatrix

`Context.positiveDefiniteMatrix(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_positiveintegerassumption.18b9666cbeb9"></a>
### Context.positiveIntegerAssumption

`Context.positiveIntegerAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_positivesemidefinitematrix.c0dc57765934"></a>
### Context.positiveSemidefiniteMatrix

`Context.positiveSemidefiniteMatrix(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_primeassumption.c38a13dbad3a"></a>
### Context.primeAssumption

`Context.primeAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_rationalassumption.bd30ce74bea3"></a>
### Context.rationalAssumption

`Context.rationalAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_realassumption.9a2fc4517edb"></a>
### Context.realAssumption

`Context.realAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_realentries.bdb9034606ef"></a>
### Context.realEntries

`Context.realEntries(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_singularmatrix.4d8f48a378b9"></a>
### Context.singularMatrix

`Context.singularMatrix(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_squarematrix.ca6d22aeb8ae"></a>
### Context.squareMatrix

`Context.squareMatrix(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_symmetricmatrix.29a86f11f324"></a>
### Context.symmetricMatrix

`Context.symmetricMatrix(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_transcendentalassumption.0a4b799a5b1c"></a>
### Context.transcendentalAssumption

`Context.transcendentalAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_unitarymatrix.0d68d571cdb5"></a>
### Context.unitaryMatrix

`Context.unitaryMatrix(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_uppertriangularmatrix.fa854937bbdc"></a>
### Context.upperTriangularMatrix

`Context.upperTriangularMatrix(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_zeroassumption.e6f179fd3a86"></a>
### Context.zeroAssumption

`Context.zeroAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_zeroequivalent.4c2cfbd43500"></a>
### Context.zeroEquivalent

`Context.zeroEquivalent(value: ExpressionLike, constraint?: ExpressionLike | null): "true" | "false" | "unknown"`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_zeromatrix.a94420588464"></a>
### Context.zeroMatrix

`Context.zeroMatrix(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.contextconstructor.1350f1ba4da2"></a>
### ContextConstructor

`export interface ContextConstructor {`

Returns `context_constructor`.

<a id="placement-placement.wasm.javascript_facade.contextconstructor_new.0f9094d96686"></a>
### ContextConstructor.new

`ContextConstructor.new(): Context`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression.41c8e859d914"></a>
### Expression

`export interface Expression {`

Returns `expression`.

<a id="placement-placement.wasm.javascript_facade.expression_absolutevalue.d16fc61f887a"></a>
### Expression.absoluteValue

`Expression.absoluteValue(): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_add.d9aaa9c8c688"></a>
### Expression.add

`Expression.add(other: ExpressionLike): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_free.04d9e93ee17b"></a>
### Expression.free

`Expression.free(): void`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_isalgebraic.166881d40821"></a>
### Expression.isAlgebraic

`Expression.isAlgebraic(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_iscomplex.cf239ae130b6"></a>
### Expression.isComplex

`Expression.isComplex(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_iscomposite.acede8711f42"></a>
### Expression.isComposite

`Expression.isComposite(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_iseven.c8395efaf78a"></a>
### Expression.isEven

`Expression.isEven(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_isextendedreal.8b90e63c733a"></a>
### Expression.isExtendedReal

`Expression.isExtendedReal(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_isinfinite.baee2508c4d8"></a>
### Expression.isInfinite

`Expression.isInfinite(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_isirrational.f90590ac06dc"></a>
### Expression.isIrrational

`Expression.isIrrational(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_isnatural.c7d8ac466cd4"></a>
### Expression.isNatural

`Expression.isNatural(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_isnonpositive.15bf64f03f4c"></a>
### Expression.isNonpositive

`Expression.isNonpositive(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_isodd.9cef0c32b06d"></a>
### Expression.isOdd

`Expression.isOdd(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_ispositiveinteger.d958deb107ee"></a>
### Expression.isPositiveInteger

`Expression.isPositiveInteger(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_istranscendental.54d40bab7088"></a>
### Expression.isTranscendental

`Expression.isTranscendental(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_iszero.4743ee8492f4"></a>
### Expression.isZero

`Expression.isZero(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_multiply.6129ea2e7a04"></a>
### Expression.multiply

`Expression.multiply(other: ExpressionLike): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_subtract.01fa19892c94"></a>
### Expression.subtract

`Expression.subtract(other: ExpressionLike): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_tostring.f0177b10aa8c"></a>
### Expression.toString

`Expression.toString(): string`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_zeroequivalent.03483f9201c5"></a>
### Expression.zeroEquivalent

`Expression.zeroEquivalent(constraint?: ExpressionLike | null): "true" | "false" | "unknown"`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.matrix.75a04eacf90d"></a>
### Matrix

`export interface Matrix {`

Returns `matrix`.

<a id="placement-placement.wasm.javascript_facade.matrix_add.b4cbe00e9031"></a>
### Matrix.add

`Matrix.add(other: Matrix): Matrix`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.matrix_free.26db4cf3b6c5"></a>
### Matrix.free

`Matrix.free(): void`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.matrix_hascomplexentries.e62108844da5"></a>
### Matrix.hasComplexEntries

`Matrix.hasComplexEntries(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.matrix_hasintegerentries.2146ac2809b2"></a>
### Matrix.hasIntegerEntries

`Matrix.hasIntegerEntries(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.matrix_hasrealentries.b42db7a5a2d1"></a>
### Matrix.hasRealEntries

`Matrix.hasRealEntries(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.matrix_isdiagonalmatrix.415747dbf667"></a>
### Matrix.isDiagonalMatrix

`Matrix.isDiagonalMatrix(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.matrix_isfullrankmatrix.c1348883d7c3"></a>
### Matrix.isFullRankMatrix

`Matrix.isFullRankMatrix(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.matrix_ishermitianmatrix.5c0a1b02c764"></a>
### Matrix.isHermitianMatrix

`Matrix.isHermitianMatrix(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.matrix_isidentitymatrix.cae24290fdfb"></a>
### Matrix.isIdentityMatrix

`Matrix.isIdentityMatrix(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.matrix_isinvertiblematrix.505c014c37f1"></a>
### Matrix.isInvertibleMatrix

`Matrix.isInvertibleMatrix(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.matrix_isnormalmatrix.98b51d7166e5"></a>
### Matrix.isNormalMatrix

`Matrix.isNormalMatrix(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.matrix_isorthogonalmatrix.eda747c0fc34"></a>
### Matrix.isOrthogonalMatrix

`Matrix.isOrthogonalMatrix(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.matrix_ispositivedefinitematrix.e2669501e27d"></a>
### Matrix.isPositiveDefiniteMatrix

`Matrix.isPositiveDefiniteMatrix(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.matrix_ispositivesemidefinitematrix.772c2ae7ee0e"></a>
### Matrix.isPositiveSemidefiniteMatrix

`Matrix.isPositiveSemidefiniteMatrix(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.matrix_issingularmatrix.873fe293b8c3"></a>
### Matrix.isSingularMatrix

`Matrix.isSingularMatrix(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.matrix_issquare.efcc71c65d6c"></a>
### Matrix.isSquare

`Matrix.isSquare(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.matrix_issymmetricmatrix.c48f740a1f98"></a>
### Matrix.isSymmetricMatrix

`Matrix.isSymmetricMatrix(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.matrix_isunitarymatrix.53b189737152"></a>
### Matrix.isUnitaryMatrix

`Matrix.isUnitaryMatrix(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.matrix_iszeromatrix.311afbe0ef29"></a>
### Matrix.isZeroMatrix

`Matrix.isZeroMatrix(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.matrix_multiply.2820cc1c77f6"></a>
### Matrix.multiply

`Matrix.multiply(other: Matrix): Matrix`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.matrix_tostring.afeb8a997d5b"></a>
### Matrix.toString

`Matrix.toString(): string`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.piecewisebranch.d690830b18b4"></a>
### PiecewiseBranch

`export interface PiecewiseBranch {`

Returns `piecewise_branch`.

<a id="placement-placement.wasm.javascript_facade.piecewisebranch_condition.64f74fb11773"></a>
### PiecewiseBranch.condition

`PiecewiseBranch.condition: ExpressionLike`

Returns `expression_like`.

<a id="placement-placement.wasm.javascript_facade.piecewisebranch_value.801f7c3c6459"></a>
### PiecewiseBranch.value

`PiecewiseBranch.value: ExpressionLike`

Returns `expression_like`.

<a id="placement-placement.wasm.javascript_facade.symicontexterror.8a9c0b29d21a"></a>
### SymiContextError

`export class SymiContextError extends SymiError {}`

Returns `SymiContextError`.

<a id="placement-placement.wasm.javascript_facade.symidomainerror.ca3777e8db87"></a>
### SymiDomainError

`export class SymiDomainError extends SymiError {}`

Returns `SymiDomainError`.

<a id="placement-placement.wasm.javascript_facade.symierror.4dd8ef89912f"></a>
### SymiError

`export class SymiError extends Error {`

Returns `SymiError`.

<a id="placement-placement.wasm.javascript_facade.symierror_category.6b54a640412f"></a>
### SymiError.category

`SymiError.readonly category: DiagnosticCategory`

Returns `diagnostic_category`.

<a id="placement-placement.wasm.javascript_facade.symierror_code.30f9d8518f8d"></a>
### SymiError.code

`SymiError.readonly code: DiagnosticCategory`

Returns `diagnostic_category`.

<a id="placement-placement.wasm.javascript_facade.symierror_expected.a59eda760e94"></a>
### SymiError.expected

`SymiError.readonly expected: string | null`

Returns `string | null`.

<a id="placement-placement.wasm.javascript_facade.symierror_hint.dc290abb816b"></a>
### SymiError.hint

`SymiError.readonly hint: string | null`

Returns `string | null`.

<a id="placement-placement.wasm.javascript_facade.symierror_operation.27d0151a414d"></a>
### SymiError.operation

`SymiError.readonly operation: string | null`

Returns `string | null`.

<a id="placement-placement.wasm.javascript_facade.symierror_parameterpath.4560085cfcfd"></a>
### SymiError.parameterPath

`SymiError.readonly parameterPath: string | null`

Returns `string | null`.

<a id="placement-placement.wasm.javascript_facade.symierror_received.ae703f25576e"></a>
### SymiError.received

`SymiError.readonly received: string | null`

Returns `string | null`.

<a id="placement-placement.wasm.javascript_facade.symifacade_context.8eb8851d9fac"></a>
### SymiFacade.Context

`SymiFacade.Context: ContextConstructor`

Returns `context_constructor`.

<a id="placement-placement.wasm.javascript_facade.symifacade_expression.93094cdfa844"></a>
### SymiFacade.Expression

`SymiFacade.Expression: unknown`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_matrix.7fe47f8c649d"></a>
### SymiFacade.Matrix

`SymiFacade.Matrix: unknown`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_absolutevalue.0f6b9a8f80d5"></a>
### SymiFacade.absoluteValue

`SymiFacade.absoluteValue(value: ExpressionLike): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_addassumptions.73e3352ec9e9"></a>
### SymiFacade.addAssumptions

`SymiFacade.addAssumptions(proposition: AssumptionProposition): void`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_algebraicassumption.f4ce6f6c9968"></a>
### SymiFacade.algebraicAssumption

`SymiFacade.algebraicAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_assumptionpropositionfromlogicalexpression.296cef2c3834"></a>
### SymiFacade.assumptionPropositionFromLogicalExpression

`SymiFacade.assumptionPropositionFromLogicalExpression(logicalExpression: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_clearallassumptions.759cb89d46d9"></a>
### SymiFacade.clearAllAssumptions

`SymiFacade.clearAllAssumptions(): void`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_complexassumption.6e9580247a40"></a>
### SymiFacade.complexAssumption

`SymiFacade.complexAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_complexentries.7d80eaa5cce4"></a>
### SymiFacade.complexEntries

`SymiFacade.complexEntries(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_compositeassumption.c21be76bc301"></a>
### SymiFacade.compositeAssumption

`SymiFacade.compositeAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_congruencemodulus.5433d54422f2"></a>
### SymiFacade.congruenceModulus

`SymiFacade.congruenceModulus(proposition: AssumptionProposition): Expression | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_congruentassumption.cc5d155981f1"></a>
### SymiFacade.congruentAssumption

`SymiFacade.congruentAssumption(left: ExpressionLike, right: ExpressionLike, modulus: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_couldhold.c5541088e29c"></a>
### SymiFacade.couldHold

`SymiFacade.couldHold(proposition: AssumptionProposition): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_definedassumption.d16c9ffedf97"></a>
### SymiFacade.definedAssumption

`SymiFacade.definedAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_deserializeassumptionproposition.baf0e5199161"></a>
### SymiFacade.deserializeAssumptionProposition

`SymiFacade.deserializeAssumptionProposition(text: string): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_diagonalmatrix.bdd963190e9d"></a>
### SymiFacade.diagonalMatrix

`SymiFacade.diagonalMatrix(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_equalassumption.24f0c321944b"></a>
### SymiFacade.equalAssumption

`SymiFacade.equalAssumption(left: ExpressionLike, right: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_evenassumption.d98feb706c03"></a>
### SymiFacade.evenAssumption

`SymiFacade.evenAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_extendedrealassumption.13b9ce694b78"></a>
### SymiFacade.extendedRealAssumption

`SymiFacade.extendedRealAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_finiteassumption.d74e89873ec3"></a>
### SymiFacade.finiteAssumption

`SymiFacade.finiteAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_fullrankmatrix.661d3f99feb1"></a>
### SymiFacade.fullRankMatrix

`SymiFacade.fullRankMatrix(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_greaterassumption.5d34c5df780d"></a>
### SymiFacade.greaterAssumption

`SymiFacade.greaterAssumption(left: ExpressionLike, right: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_greaterorequalassumption.71bfbd4b9653"></a>
### SymiFacade.greaterOrEqualAssumption

`SymiFacade.greaterOrEqualAssumption(left: ExpressionLike, right: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_hermitianmatrix.75fe3584e710"></a>
### SymiFacade.hermitianMatrix

`SymiFacade.hermitianMatrix(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_identitymatrix.a0eea0b9ad1a"></a>
### SymiFacade.identityMatrix

`SymiFacade.identityMatrix(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_infiniteassumption.c08c0dd8e0f7"></a>
### SymiFacade.infiniteAssumption

`SymiFacade.infiniteAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_integerassumption.8d164e5dcee5"></a>
### SymiFacade.integerAssumption

`SymiFacade.integerAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_integerentries.177ca0ebd539"></a>
### SymiFacade.integerEntries

`SymiFacade.integerEntries(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_invertiblematrix.2a836dfb9d2c"></a>
### SymiFacade.invertibleMatrix

`SymiFacade.invertibleMatrix(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_irrationalassumption.cb191b491b47"></a>
### SymiFacade.irrationalAssumption

`SymiFacade.irrationalAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_leftoperand.7b6a1f8eac18"></a>
### SymiFacade.leftOperand

`SymiFacade.leftOperand(proposition: AssumptionProposition): Expression | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_lessassumption.208b6241d635"></a>
### SymiFacade.lessAssumption

`SymiFacade.lessAssumption(left: ExpressionLike, right: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_lessorequalassumption.9a7358375559"></a>
### SymiFacade.lessOrEqualAssumption

`SymiFacade.lessOrEqualAssumption(left: ExpressionLike, right: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_lowertriangularmatrix.17896f244489"></a>
### SymiFacade.lowerTriangularMatrix

`SymiFacade.lowerTriangularMatrix(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_matrixshape.ba060181fcb1"></a>
### SymiFacade.matrixShape

`SymiFacade.matrixShape(value: Matrix, rows: number, columns: number): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_memberassumption.faafe5efd4c4"></a>
### SymiFacade.memberAssumption

`SymiFacade.memberAssumption(element: ExpressionLike, setExpression: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_membershipelement.0fc6fd43e584"></a>
### SymiFacade.membershipElement

`SymiFacade.membershipElement(proposition: AssumptionProposition): Expression | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_membershipset.4cc3c059c77b"></a>
### SymiFacade.membershipSet

`SymiFacade.membershipSet(proposition: AssumptionProposition): Expression | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_naturalassumption.545c396a1a8a"></a>
### SymiFacade.naturalAssumption

`SymiFacade.naturalAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_negativeassumption.a1faca33e449"></a>
### SymiFacade.negativeAssumption

`SymiFacade.negativeAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_nonnegativeassumption.fc8db15a6f1a"></a>
### SymiFacade.nonnegativeAssumption

`SymiFacade.nonnegativeAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_nonpositiveassumption.48fdc398654b"></a>
### SymiFacade.nonpositiveAssumption

`SymiFacade.nonpositiveAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_nonzeroassumption.dab21ea932d8"></a>
### SymiFacade.nonzeroAssumption

`SymiFacade.nonzeroAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_normalmatrix.ab26f6537ccc"></a>
### SymiFacade.normalMatrix

`SymiFacade.normalMatrix(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_notequalassumption.7f22dc0529bc"></a>
### SymiFacade.notEqualAssumption

`SymiFacade.notEqualAssumption(left: ExpressionLike, right: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_oddassumption.31a0bcf1ea66"></a>
### SymiFacade.oddAssumption

`SymiFacade.oddAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_orthogonalmatrix.5479e2dfb83c"></a>
### SymiFacade.orthogonalMatrix

`SymiFacade.orthogonalMatrix(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_positiveassumption.88eeb1edfead"></a>
### SymiFacade.positiveAssumption

`SymiFacade.positiveAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_positivedefinitematrix.5fa32eb988b6"></a>
### SymiFacade.positiveDefiniteMatrix

`SymiFacade.positiveDefiniteMatrix(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_positiveintegerassumption.fa356b4ace52"></a>
### SymiFacade.positiveIntegerAssumption

`SymiFacade.positiveIntegerAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_positivesemidefinitematrix.06f230347a8f"></a>
### SymiFacade.positiveSemidefiniteMatrix

`SymiFacade.positiveSemidefiniteMatrix(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_primeassumption.20ac88ea9ecd"></a>
### SymiFacade.primeAssumption

`SymiFacade.primeAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_rationalassumption.50a8e1879939"></a>
### SymiFacade.rationalAssumption

`SymiFacade.rationalAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_raw.aef6294b0f07"></a>
### SymiFacade.raw

`SymiFacade.readonly raw: unknown`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_realassumption.a407a99bc207"></a>
### SymiFacade.realAssumption

`SymiFacade.realAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_realentries.0dc13fbd48dc"></a>
### SymiFacade.realEntries

`SymiFacade.realEntries(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_relationkind.bb3ed2b1488e"></a>
### SymiFacade.relationKind

`SymiFacade.relationKind(proposition: AssumptionProposition): "equal" | "not_equal" | "less" | "less_or_equal" | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_rightoperand.48bc4bcc6b14"></a>
### SymiFacade.rightOperand

`SymiFacade.rightOperand(proposition: AssumptionProposition): Expression | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_singularmatrix.5c788f7b7710"></a>
### SymiFacade.singularMatrix

`SymiFacade.singularMatrix(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_squarematrix.07006ba57e12"></a>
### SymiFacade.squareMatrix

`SymiFacade.squareMatrix(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_symmetricmatrix.72efdbcc7ebb"></a>
### SymiFacade.symmetricMatrix

`SymiFacade.symmetricMatrix(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_transcendentalassumption.59b1bbba7112"></a>
### SymiFacade.transcendentalAssumption

`SymiFacade.transcendentalAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_unitarymatrix.a1c207d3bd64"></a>
### SymiFacade.unitaryMatrix

`SymiFacade.unitaryMatrix(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_uppertriangularmatrix.7fc7c36b3f9a"></a>
### SymiFacade.upperTriangularMatrix

`SymiFacade.upperTriangularMatrix(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_zeroassumption.750741382236"></a>
### SymiFacade.zeroAssumption

`SymiFacade.zeroAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_zeroequivalent.5b941b0c7ab2"></a>
### SymiFacade.zeroEquivalent

`SymiFacade.zeroEquivalent(value: ExpressionLike, constraint?: ExpressionLike | null): "true" | "false" | "unknown"`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_zeromatrix.c57cdcbf6784"></a>
### SymiFacade.zeroMatrix

`SymiFacade.zeroMatrix(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symiinternalerror.9f964e7b647d"></a>
### SymiInternalError

`export class SymiInternalError extends SymiError {}`

Returns `SymiInternalError`.

<a id="placement-placement.wasm.javascript_facade.symiresourceerror.e63a87983441"></a>
### SymiResourceError

`export class SymiResourceError extends SymiError {}`

Returns `SymiResourceError`.

<a id="placement-placement.wasm.javascript_facade.symitypeerror.f73719bf5950"></a>
### SymiTypeError

`export class SymiTypeError extends SymiError {}`

Returns `SymiTypeError`.

<a id="placement-placement.wasm.wasm_class.context_changemonomialorder.e2a57ba75287"></a>
### Context.changeMonomialOrder

`pub fn change_monomial_order(&self, basis: Vec<Expression>, variables: Vec<String>, source_order: String, target_order: String) -> Result<Option<Vec<Expression>>, JsError>`

Returns `Result<Option<Vec<expression>>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_eliminationideal.04f94bd7d8f1"></a>
### Context.eliminationIdeal

`pub fn elimination_ideal(&self, generators: Vec<Expression>, variables: Vec<String>, eliminate: Vec<String>) -> Result<Option<Vec<Expression>>, JsError>`

Returns `Result<Option<Vec<expression>>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_groebnerbasis.888872534bf7"></a>
### Context.groebnerBasis

`pub fn groebner_basis(&self, generators: Vec<Expression>, variables: Vec<String>, order: Option<String>) -> Result<Option<Vec<Expression>>, JsError>`

Returns `Result<Option<Vec<expression>>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_idealintersection.acbee9138efd"></a>
### Context.idealIntersection

`pub fn ideal_intersection(&self, generators_left: Vec<Expression>, generators_right: Vec<Expression>, variables: Vec<String>, order: Option<String>) -> Result<Option<Vec<Expression>>, JsError>`

Returns `Result<Option<Vec<expression>>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_idealmembership.c32c85f3e675"></a>
### Context.idealMembership

`pub fn ideal_membership(&self, element: &Expression, generators: Vec<Expression>, variables: Vec<String>, order: Option<String>) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_idealproduct.a99fc7e4c6bf"></a>
### Context.idealProduct

`pub fn ideal_product(&self, generators_left: Vec<Expression>, generators_right: Vec<Expression>, variables: Vec<String>, order: Option<String>) -> Result<Option<Vec<Expression>>, JsError>`

Returns `Result<Option<Vec<expression>>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_idealsum.cd86d2191b7e"></a>
### Context.idealSum

`pub fn ideal_sum(&self, generators_left: Vec<Expression>, generators_right: Vec<Expression>, variables: Vec<String>, order: Option<String>) -> Result<Option<Vec<Expression>>, JsError>`

Returns `Result<Option<Vec<expression>>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_isolaterealroots.67ba1eadfe31"></a>
### Context.isolateRealRoots

`pub fn isolate_real_roots(&self, input_expression: &Expression, variable: &str) -> Result<Vec<IsolatingInterval>, JsError>`

Returns `Result<Vec<isolating_interval>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_leadingcoefficient.fa8ae548276b"></a>
### Context.leadingCoefficient

`pub fn leading_coefficient(&self, input_expression: &Expression, variable: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_matrixdiagonal.dba54c60749f"></a>
### Context.matrixDiagonal

`pub fn matrix_diagonal(&self, entries: Vec<Expression>) -> Result<Matrix, JsError>`

Returns `Result<matrix, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_matrixidentity.843c4412d2b9"></a>
### Context.matrixIdentity

`pub fn matrix_identity(&self, size: usize) -> Result<Matrix, JsError>`

Returns `Result<matrix, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_matrixzero.3576687a68ef"></a>
### Context.matrixZero

`pub fn matrix_zero(&self, rows: usize, columns: usize) -> Result<Matrix, JsError>`

Returns `Result<matrix, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_polynomialgcd.32c4a46fd180"></a>
### Context.polynomialGcd

`pub fn polynomial_gcd(&self, a: &Expression, b: &Expression, variable: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.cylindricalalgebraicdecomposition.8d211ca9a1c3"></a>
### CylindricalAlgebraicDecomposition

`pub fn new(expressions: Vec<Expression>, variables: Vec<String>, equational_constraints: Option<Vec<usize>>) -> Result<CylindricalAlgebraicDecomposition, JsError>`

Returns `Result<cylindrical_algebraic_decomposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.cylindricalalgebraicdecomposition_cellcount.2a3856c631ae"></a>
### CylindricalAlgebraicDecomposition.cellCount

`pub fn cell_count(&self) -> Result<usize, JsError>`

Returns `Result<usize, JsError>`.

<a id="placement-placement.wasm.wasm_class.cylindricalalgebraicdecomposition_celldimension.58941abd698b"></a>
### CylindricalAlgebraicDecomposition.cellDimension

`pub fn cell_dimension(&self, index: usize) -> Result<usize, JsError>`

Returns `Result<usize, JsError>`.

<a id="placement-placement.wasm.wasm_class.cylindricalalgebraicdecomposition_cellkind.b0d16f9fc18f"></a>
### CylindricalAlgebraicDecomposition.cellKind

`pub fn cell_kind(&self, index: usize) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.cylindricalalgebraicdecomposition_cellsamplepoint.fb99fcd53a5b"></a>
### CylindricalAlgebraicDecomposition.cellSamplePoint

`pub fn cell_sample_point(&self, index: usize) -> Result<Vec<f64>, JsError>`

Returns `Result<Vec<f64>, JsError>`.

<a id="placement-placement.wasm.wasm_class.cylindricalalgebraicdecomposition_cellsignvector.1dd5b1c2f6cd"></a>
### CylindricalAlgebraicDecomposition.cellSignVector

`pub fn cell_sign_vector(&self, index: usize) -> Result<Vec<i32>, JsError>`

Returns `Result<Vec<i32>, JsError>`.

<a id="placement-placement.wasm.wasm_class.cylindricalalgebraicdecomposition_projectionoperatorused.34f87e17828d"></a>
### CylindricalAlgebraicDecomposition.projectionOperatorUsed

`pub fn projection_operator_used(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_changemonomialorder.fd8d2e8526b4"></a>
### module.changeMonomialOrder

`fn change_monomial_order(basis: Vec<Expression>, variables: Vec<String>, source_order: String, target_order: String) -> Result<Option<Vec<Expression>>, JsError>`

Returns `Result<Option<Vec<expression>>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_eliminationideal.99af73451cd1"></a>
### module.eliminationIdeal

`fn elimination_ideal(generators: Vec<Expression>, variables: Vec<String>, eliminate: Vec<String>) -> Result<Option<Vec<Expression>>, JsError>`

Returns `Result<Option<Vec<expression>>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_groebnerbasis.5de4c9b11109"></a>
### module.groebnerBasis

`fn groebner_basis(generators: Vec<Expression>, variables: Vec<String>, order: Option<String>) -> Result<Option<Vec<Expression>>, JsError>`

Returns `Result<Option<Vec<expression>>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_idealintersection.6e49de3034aa"></a>
### module.idealIntersection

`fn ideal_intersection(generators_left: Vec<Expression>, generators_right: Vec<Expression>, variables: Vec<String>, order: Option<String>) -> Result<Option<Vec<Expression>>, JsError>`

Returns `Result<Option<Vec<expression>>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_idealmembership.c719b9f17e53"></a>
### module.idealMembership

`fn ideal_membership(element: &Expression, generators: Vec<Expression>, variables: Vec<String>, order: Option<String>) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_idealproduct.fe3132e266f0"></a>
### module.idealProduct

`fn ideal_product(generators_left: Vec<Expression>, generators_right: Vec<Expression>, variables: Vec<String>, order: Option<String>) -> Result<Option<Vec<Expression>>, JsError>`

Returns `Result<Option<Vec<expression>>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_idealsum.0fe68881ed36"></a>
### module.idealSum

`fn ideal_sum(generators_left: Vec<Expression>, generators_right: Vec<Expression>, variables: Vec<String>, order: Option<String>) -> Result<Option<Vec<Expression>>, JsError>`

Returns `Result<Option<Vec<expression>>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_isolaterealroots.fdc9ee498713"></a>
### module.isolateRealRoots

`fn isolate_real_roots(input_expression: &Expression, variable: &str) -> Result<Vec<IsolatingInterval>, JsError>`

Returns `Result<Vec<isolating_interval>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_leadingcoefficient.612cd4c6aaf2"></a>
### module.leadingCoefficient

`fn leading_coefficient(input_expression: &Expression, variable: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_matrixdiagonal.05ae03868956"></a>
### module.matrixDiagonal

`fn matrix_diagonal(entries: Vec<Expression>) -> Result<Matrix, JsError>`

Returns `Result<matrix, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_matrixidentity.80b062f41bf7"></a>
### module.matrixIdentity

`fn matrix_identity(size: usize) -> Result<Matrix, JsError>`

Returns `Result<matrix, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_matrixzero.47364d1ef8a0"></a>
### module.matrixZero

`fn matrix_zero(rows: usize, columns: usize) -> Result<Matrix, JsError>`

Returns `Result<matrix, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_polynomialgcd.5dff4635a3c4"></a>
### module.polynomialGcd

`fn polynomial_gcd(a: &Expression, b: &Expression, variable: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

