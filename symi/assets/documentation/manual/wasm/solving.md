# Solving

### solve

<a id="placement-placement.wasm.wasm_class.context_solve.eb0bbb7e6086"></a>
Raw WebAssembly: `pub fn solve(&self, input_expression: &Expression, variable: &str) -> Result<Vec<Expression>, JsError>`

<a id="placement-placement.wasm.wasm_class.expression_solve.e98546cf948d"></a>
Raw WebAssembly: `pub fn solve(&self, variable: &str) -> Result<Vec<Expression>, JsError>`

<a id="placement-placement.wasm.wasm_module.module_solve.3fdf003ed9a5"></a>
Raw WebAssembly: `fn solve(input_expression: &Expression, variable: &str) -> Result<Vec<Expression>, JsError>`


Solve an equation (an `equal` node, or an expression implicitly equated to
zero) for `variable`, returning a list of solutions. Solutions outside the
solver's reach are simply absent — prefer `solveset` when you need an honest
"unsolved" residue.

### solveset

<a id="placement-placement.wasm.wasm_class.context_solveset.a0c5b9375be1"></a>
Raw WebAssembly: `pub fn solveset(&self, input_expression: &Expression, variable: &str, domain: Option<Expression>) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_class.expression_solveset.24afaaf366dc"></a>
Raw WebAssembly: `pub fn solveset(&self, variable: &str, domain: Option<Expression>) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_module.module_solveset.c4d048ff1df8"></a>
Raw WebAssembly: `fn solveset(input_expression: &Expression, variable: &str, domain: Option<Expression>) -> Result<Expression, JsError>`


Solution **set** of the equation or inequality: a finite set, interval,
union, image set (periodic families), or condition set (the honest
"unsolved" residue). With `domain` given, solutions are intersected with it
(same as `solveset_in_domain`).

The result's set shape carries an exact contract. An `empty_set` is a
**proof** that no solution exists over the stated domain (for example a
non-zero constant, or a polynomial whose only roots the realness filter
removes for a real variable) — never the mere absence of a found solution. A
decline is reported as a `condition_set`
\(\{\operatorname{variable} \in \operatorname{domain} : \operatorname{equation} = 0\}\), the honest "unsolved" residue, whose
base set is `real_line()` for a variable assumed real and `complex_plane()`
otherwise. A `finite_set` remains the **complete** solution set over the
stated domain. Consumers must treat `condition_set` as *unknown* (hide or
skip it), never as "no solutions".

Complex exponential equations use complete periodic families rather than a
single principal-logarithm value. In particular, `exp(z) = c` with a provably
non-zero constant `c` returns the image set
`log(c) + 2*pi*i*k`, `k` in the integers; `exp(z) = 0` returns `empty_set`.
For a real-assumed variable, the corresponding equation returns the real
singleton when the target is provably positive, proves `empty_set` when the
target is provably non-positive, and otherwise declines.

Zero products are decomposed only when doing so preserves both completeness
and definedness. Variable-free factors must be provably non-zero, every
variable-bearing factor must have a complete solution set, and a candidate
zero is retained only when all remaining factors are proved defined there.
Consequently `(x - 1)*log(x - 1) = 0` excludes the undefined point `x = 1`
and returns only `x = 2`; an undecidable cofactor causes an honest decline.

For a real-assumed variable, or when `real_line()` is supplied explicitly,
`solveset` completely solves the supported exact univariate algebraic-function
class: rational and exact real-algebraic constants, sums, products, integer and
rational powers, rational functions, and absolute values. Radical domains,
negative-power poles, and absolute-value sign boundaries are part of the exact
formula. Thus `x + sqrt(x) - 2` returns `{1}`, `abs(x - 1) - 2` returns
`{-1, 3}`, and `sqrt(x) + 1` proves `empty_set`. Powered candidates are never
accepted without their original sign and definedness conditions. Results may
use exact algebraic roots when no smaller radical form is available.

The explicit domain takes precedence over symbol assumptions. This capability
is real-domain only: general principal complex rational-power equations and
nonzero complex modulus level sets currently return a `condition_set` unless an
older exact equivalence closes them. In particular, the real sign partition is
never applied to complex `abs`, which denotes modulus rather than ordered-field
absolute value.

Proofs that depend on real-valued range restrictions remain real-domain
proofs. For example, `cos(x) = 2` proves `empty_set` for a real-assumed
variable, but the same bounded-range argument is invalid over the complex
plane, where the current solver declines with a `condition_set` unless it can
emit a complete complex family.

#### Transcendental reductions

A shared reduction layer handles equations in exponentials, principal
logarithms, variable-base powers, and Lambert W. It is a bounded, exactly
justified layer, not a general transcendental solver: unsupported shapes
decline with a `condition_set` rather than guessing, and no numeric
approximation is ever used to prove a sign, choose a branch, accept a root, or
certify emptiness.

**Equal exponentials.** `A*exp(f) + B*exp(g) = 0` with non-zero variable-free
`A` and `B` is exactly `exp(f - g) = -B/A`. Over the complex plane this yields
the full integer-parameter family; over the reals it collapses to a single
logarithm for a provably positive right side, proves `empty_set` for a provably
non-positive one, and declines when the sign is undecided. Thus
`exp(2 - x^2) - exp(-x)` returns `{-1, 2}` over `real_line()`, and over the
complex plane the union of the two complete families
\(x = (1 \pm \sqrt{9 + 8\pi i n}) / 2\), with `n` in the integers. Note that the reduction
keeps the `2*pi*i` period rather than applying the real-only injectivity of
`exp` over the complex plane.

**Equal principal logarithms.** `log(f) - log(g) = 0` reduces to `f = g`
together with the common non-zero definedness condition, so a root at which the
shared argument vanishes is dropped rather than returned. An undecided
definedness declines the completeness claim.

**Lambert W.** Affine and product exponential families, and the two
logarithmic families, reduce to `u*exp(u) = c`, whose solutions are exactly
`W_k(c)` over the integers `k`. Over the complex plane `solveset` returns the
complete branch family, for example `exp(x) - x` gives
`image_set(k, integers, -lambert_w(k, -1))`. Over the reals the branch count is
decided exactly against the branch point `-1/e`: no branch below it, the single
double root at it, both `W_0` and `W_-1` strictly between it and zero, and
`W_0` alone from zero upward. `x*exp(x) = -1/(2e)` therefore returns
`{W_0(-1/(2e)), W_-1(-1/(2e))}` over `real_line()`, while `x*exp(x) + 1` proves
`empty_set` there.

**Logarithmic generators.** An equation built from rational constants and
non-negative rational powers of one logarithm `log(g(x))` becomes a polynomial
in a generator, is solved completely, and each root is checked to be the
principal root and to lie in the image of the principal logarithm before being
lifted. `sqrt(log(x)) - log(sqrt(x))` returns `{1, exp(4)}`. The normalisation
`log(z^a) = a*log(z)` used there is admitted only for exact rational `a` with
`-1 < a <= 1`, or for a provably positive `z`; `log(z^2)` and `log(z^-1)` are
never rewritten without a positivity proof.

**Variable-base powers.** For `b(x)^u(x) = b(x)^v(x)` the equal-exponent,
`b = 1`, and `b = -1` fibres generate candidates, and every candidate must
reduce the *original* equation to canonical zero. `x^x = x` therefore gives the
exactly verified `{-1, 1}` from `solve` — never `0`, whose `0^0` is undefined —
while `solveset` still returns a `condition_set`, because the periodic fibre
`(u - v)*log(b) = 2*pi*i*n` is not solved. This is the clearest case of the
general rule below.

**Representatives versus complete sets.** `solve` may return sound closed-form
representatives for an equation whose complete solution set the solver cannot
express; `solveset` must decline there. Conversely a complete infinite family
is expressible as a set but not as a list, so `solve` reports only a
representative slice of it. When you need to know whether an answer is
complete, ask `solveset` (or `solve_as_set`, which routes through it): a finite
set, image set, union, or `empty_set` is a completeness claim, and a
`condition_set` is not.

### solveset_in_domain

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.solveset_in_domain`](/symi/python/solving#solveset_in_domain) in Python, [`UniffiSession.solvesetInDomain`](/symi/kotlin/solving#solveset_in_domain) in Kotlin, [`UniffiSession.solvesetInDomain`](/symi/swift/solving#solveset_in_domain) in Swift, [`api::expression_operations::Expression::solveset_in_domain`](/symi/rust/solving#solveset_in_domain) in Rust.*


`solveset` restricted to an explicit domain set (e.g. `real_line()`,
`integer_set()`, an interval).

### roots_with_multiplicities

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.roots_with_multiplicities`](/symi/python/solving#roots_with_multiplicities) in Python, [`UniffiExpression.rootsWithMultiplicities`](/symi/kotlin/solving#roots_with_multiplicities) in Kotlin, [`UniffiExpression.rootsWithMultiplicities`](/symi/swift/solving#roots_with_multiplicities) in Swift, [`api::expression_operations::Expression::roots_with_multiplicities`](/symi/rust/solving#roots_with_multiplicities) in Rust.*


Roots of a polynomial with their multiplicities. **Notes:** Python returns a
dict keyed by root; WASM returns an array of `RootMultiplicity` objects.

### polynomial_root

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.polynomial_root`](/symi/python/solving#polynomial_root) in Python, [`UniffiSession.polynomialRoot`](/symi/kotlin/solving#polynomial_root) in Kotlin, [`UniffiSession.polynomialRoot`](/symi/swift/solving#polynomial_root) in Swift, [`api::solving::Session::polynomial_root`](/symi/rust/solving#polynomial_root) in Rust.*


Construct the zero-based `index`-th exact root of a univariate rational
polynomial. Roots use canonical mathematical order: increasing real roots
first, then non-real roots ordered by exact real part and exact imaginary part;
indexing counts multiplicity. Coefficient scale and the variable name do not
affect the resulting atom. Invalid, constant, non-rational, out-of-range, or
uncertifiable inputs return `None`.

The result is exact even when no radical or cyclotomic form is available. For
example, substituting any root of `x^5 - x - 1` back into that polynomial
reduces exactly to zero in its quotient ring. Approximate evaluation is an
explicit, separate operation.

### minimal_polynomial_of

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.minimal_polynomial_of`](/symi/python/solving#minimal_polynomial_of) in Python, [`UniffiSession.minimalPolynomialOf`](/symi/kotlin/solving#minimal_polynomial_of) in Kotlin, [`UniffiSession.minimalPolynomialOf`](/symi/swift/solving#minimal_polynomial_of) in Swift, [`api::algebra::Session::minimal_polynomial_of`](/symi/rust/solving#minimal_polynomial_of) in Rust.*


Return an exact polynomial in the requested variable for a first-class
polynomial-root atom. Its dense primitive integer coefficients are independent
of the source variable, coefficient scale, and current isolation precision.

### root_multiplicity (WASM result class)

Has `root` and `multiplicity` getters; see object model.

### solve_polynomial_system

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.solve_polynomial_system`](/symi/python/solving#solve_polynomial_system) in Python, [`UniffiSession.solvePolynomialSystem`](/symi/kotlin/solving#solve_polynomial_system) in Kotlin, [`UniffiSession.solvePolynomialSystem`](/symi/swift/solving#solve_polynomial_system) in Swift, [`api::solving::Session::solve_polynomial_system`](/symi/rust/solving#solve_polynomial_system) in Rust.*


Solve a multivariate polynomial system `{ equation_i = 0 }` for the named
unknowns. Every other free symbol is a parameter carried
symbolically in the coefficient ring. The solver is **sound and honestly
incomplete**: every returned tuple has been back-substituted into every equation
and reduced to a provable zero, and the verdict never overstates completeness.

The result reports one of four verdicts — `finite` (a list of solution tuples),
`empty` (certified no solutions), `positive_dimensional` (certified infinitely
many), or `declined` (could not close the system) — plus a `complete`
flag that is true only when the engine certified it found every solution.
**Notes:** Python returns a dict with keys `verdict` (str), `complete` (bool),
and `solutions` (a list of `{ unknown_name: ExpressionLike }` dicts); WASM returns a
`PolynomialSystemSolution` object.

### polynomial_system_solution (WASM result class)

The WASM return of `solve_polynomial_system`. Python returns a plain dict in its
place.

### verdict

<a id="placement-placement.wasm.wasm_class.definiteintegrationresult_verdict.ef5d425f12c2"></a>
Raw WebAssembly: `pub fn verdict(&self) -> String`

<a id="placement-placement.wasm.wasm_class.optimizationoutcome_verdict.a8e3195ed418"></a>
Raw WebAssembly: `pub fn verdict(&self) -> String`

<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsolveresult_verdict.be6fec5ffae5"></a>
Raw WebAssembly: `pub fn verdict(&self) -> String`

<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsystemsolveresult_verdict.cc0fd5062ade"></a>
Raw WebAssembly: `pub fn verdict(&self) -> String`

<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsystemverificationreport_verdict.ee29fc9bbe84"></a>
Raw WebAssembly: `pub fn verdict(&self) -> String`

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsecondorderclassification_verdict.46c046f2c01d"></a>
Raw WebAssembly: `pub fn verdict(&self) -> String`

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolveresult_verdict.ddbb1f7390b2"></a>
Raw WebAssembly: `pub fn verdict(&self) -> String`

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationtransformationverificationreport_verdict.b1e430c993fe"></a>
Raw WebAssembly: `pub fn verdict(&self) -> String`

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationverificationreport_verdict.2c5adb81b6f5"></a>
Raw WebAssembly: `pub fn verdict(&self) -> String`

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationverificationresidual_verdict.f1c9965647a6"></a>
Raw WebAssembly: `pub fn verdict(&self) -> String`

<a id="placement-placement.wasm.wasm_class.polynomialsystemsolution_verdict.b9cd1af2a7ce"></a>
Raw WebAssembly: `pub fn verdict(&self) -> String`

Getter on `PolynomialSystemSolution`: the verdict string, one of `"finite"`,
`"empty"`, `"positive_dimensional"`, or `"declined"`.

### complete

<a id="placement-placement.wasm.wasm_class.optimizationoutcome_complete.21af5824d96d"></a>
Raw WebAssembly: `pub fn complete(&self) -> bool`

<a id="placement-placement.wasm.wasm_class.polynomialsystemsolution_complete.106326740c8a"></a>
Raw WebAssembly: `pub fn complete(&self) -> bool`

Getter on `PolynomialSystemSolution`: whether the solver certified it found
every solution.

### solutions

<a id="placement-placement.wasm.wasm_class.polynomialsystemsolution_solutions.5cd1b9755b44"></a>
Raw WebAssembly: `pub fn solutions(&self) -> Vec<SystemAssignment>`

Getter on `PolynomialSystemSolution`: the array of `SystemAssignment` tuples
(empty for the non-finite verdicts).

### system_assignment (WASM result class)

One solution tuple of a polynomial system, pairing each unknown with its value.

### variables

<a id="placement-placement.wasm.wasm_class.criticalpoint_variables.daa72a0ef83f"></a>
Raw WebAssembly: `pub fn variables(&self) -> Vec<String>`

<a id="placement-placement.wasm.wasm_class.systemassignment_variables.b13c40d79d8c"></a>
Raw WebAssembly: `pub fn variables(&self) -> Vec<String>`

Getter on `SystemAssignment`: the unknown names, in order.

### values

<a id="placement-placement.wasm.wasm_class.criticalpoint_values.6894bda84e82"></a>
Raw WebAssembly: `pub fn values(&self) -> Vec<Expression>`

<a id="placement-placement.wasm.wasm_class.systemassignment_values.6def767a335c"></a>
Raw WebAssembly: `pub fn values(&self) -> Vec<Expression>`

Getter on `SystemAssignment`: the assigned value expressions, aligned with
`variables`.

### real_root_count

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.real_root_count`](/symi/python/solving#real_root_count) in Python, [`UniffiSession.realRootCount`](/symi/kotlin/solving#real_root_count) in Kotlin, [`UniffiSession.realRootCount`](/symi/swift/solving#real_root_count) in Swift, [`api::solving::Session::real_root_count`](/symi/rust/solving#real_root_count) in Rust.*


Number of distinct real roots of a univariate polynomial in the interval
`(lower, upper]` via Sturm sequences. `None` when the expression is not a
univariate polynomial over the rationals.

### count_distinct_real_roots

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.count_distinct_real_roots`](/symi/python/solving#count_distinct_real_roots) in Python, [`UniffiSession.countDistinctRealRoots`](/symi/kotlin/solving#count_distinct_real_roots) in Kotlin, [`UniffiSession.countDistinctRealRoots`](/symi/swift/solving#count_distinct_real_roots) in Swift, [`api::solving::Session::count_distinct_real_roots`](/symi/rust/solving#count_distinct_real_roots) in Rust.*


Number of distinct real roots over all of \(\mathbb{R}\). Same `None` conditions as
`real_root_count`.

### real_root_sign

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.real_root_sign`](/symi/python/solving#real_root_sign) in Python, [`UniffiSession.realRootSign`](/symi/kotlin/solving#real_root_sign) in Kotlin, [`UniffiSession.realRootSign`](/symi/swift/solving#real_root_sign) in Swift, [`api::solving::Session::real_root_sign`](/symi/rust/solving#real_root_sign) in Rust.*


The exact sign (`-1`, `0`, or `1`) of the `index`-th smallest real root of a
univariate polynomial over the rationals, decided exactly through the real
algebraic number layer rather than by numeric evaluation. `None`
when the expression is not a univariate polynomial over the rationals or `index`
is out of range.

### compare_real_roots

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.compare_real_roots`](/symi/python/solving#compare_real_roots) in Python, [`UniffiSession.compareRealRoots`](/symi/kotlin/solving#compare_real_roots) in Kotlin, [`UniffiSession.compareRealRoots`](/symi/swift/solving#compare_real_roots) in Swift, [`api::solving::Session::compare_real_roots`](/symi/rust/solving#compare_real_roots) in Rust.*


Compare two real algebraic numbers exactly, each given as the `index`-th smallest
real root of a univariate polynomial over the rationals. Returns `-1`, `0`, or
`1` according to whether the first is less than, equal to, or greater than the
second — a total order decided exactly (for example `compare_real_roots` of
\(\sqrt{2}\) and \(\sqrt[3]{3}\) returns `-1`). `None` when either operand is not a univariate
polynomial over the rationals or an index is out of range.

## Real quantifier elimination and semialgebraic solving

### eliminate_quantifiers

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.eliminate_quantifiers`](/symi/python/solving#eliminate_quantifiers) in Python, [`UniffiSession.eliminateQuantifiers`](/symi/kotlin/solving#eliminate_quantifiers) in Kotlin, [`UniffiSession.eliminateQuantifiers`](/symi/swift/solving#eliminate_quantifiers) in Swift, [`api::logic::Session::eliminate_quantifiers`](/symi/rust/solving#eliminate_quantifiers) in Rust.*

`context.eliminate_quantifiers(matrix, quantifiers: list[str], variables: list[VariableLike])`

Effective real quantifier elimination: returns a quantifier-free expression equivalent
over \(\mathbb{R}\) to the prenex formula whose quantifier-free `matrix` is a Boolean combination of
polynomial relations and whose `quantifiers` prefix (each `"forall"` or `"exists"`,
outermost first) binds the trailing `variables`. Built on the cylindrical algebraic
decomposition: the matrix's truth is evaluated on the sign-invariant cells and projected
through the quantifier prefix, then a solution formula in the free variables is
constructed and verified exact at every cell sample point. For example,
\(\forall x.\ x^2 + a x + 1 > 0\) eliminates to \(a^2 - 4 < 0\) (that is, \(-2 < a < 2\)); a fully-quantified
sentence returns a Boolean constant. Errors outside \(\mathbb{Q}[\text{variables}]\), on a decomposition
decline, or when the solution formula cannot be certified.

### solve_semialgebraic

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.solve_semialgebraic`](/symi/python/solving#solve_semialgebraic) in Python, [`UniffiSession.solveSemialgebraic`](/symi/kotlin/solving#solve_semialgebraic) in Kotlin, [`UniffiSession.solveSemialgebraic`](/symi/swift/solving#solve_semialgebraic) in Swift, [`api::logic::Session::solve_semialgebraic`](/symi/rust/solving#solve_semialgebraic) in Rust.*

`context.solve_semialgebraic(matrix, variables: list[VariableLike])`

Nonlinear polynomial constraint / inequality solving over \(\mathbb{R}^n\) — the no-quantifier case of
quantifier elimination. Given a Boolean combination of polynomial relations over
\(\mathbb{Q}[\text{variables}]\), returns the quantifier-free description of the real solution set
`{ x : matrix(x) }` (the disjunction of the satisfying CAD cells' sign conditions). This
generalises the univariate `solve` over inequalities to the multivariate semialgebraic
case (for example, \(\{(x, y) : x^2 - 1 < 0 \land y^2 - 1 < 0\}\) is the open square). Errors outside
\(\mathbb{Q}[\text{variables}]\) or on a decomposition decline.

## Example

This family is not part of the recommended JavaScript facade in this release. Call it through the generated `symi.raw` layer, whose entries are listed with their wasm-bindgen signatures above, and read [Migration](migration.md) for the ownership rules that apply there.


## Additional API

<a id="placement-placement.wasm.wasm_class.context_classifyunconstrained.5099f86e57ff"></a>
### Context.classifyUnconstrained

`pub fn classify_unconstrained(&self, objective: &Expression, variables: Vec<String>, point_variables: Vec<String>, point_values: Vec<Expression>) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_comparerealroots.fb4df4838464"></a>
### Context.compareRealRoots

`pub fn compare_real_roots(&self, first_expression: &Expression, first_variable: &str, first_index: usize, second_expression: &Expression, second_variable: &str, second_index: usize) -> Result<Option<i64>, JsError>`

Returns `Result<Option<i64>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_countdistinctrealroots.7ee1d266c9eb"></a>
### Context.countDistinctRealRoots

`pub fn count_distinct_real_roots(&self, input_expression: &Expression, variable: &str) -> Result<Option<usize>, JsError>`

Returns `Result<Option<usize>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_eliminatequantifiers.943addcee9cd"></a>
### Context.eliminateQuantifiers

`pub fn eliminate_quantifiers(&self, matrix: &Expression, quantifiers: Vec<String>, variables: Vec<String>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_minimalpolynomialof.c8632b82c23c"></a>
### Context.minimalPolynomialOf

`pub fn minimal_polynomial_of(&self, input_expression: &Expression, variable: &str) -> Result<Option<Expression>, JsError>`

Returns `Result<Option<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_polynomialroot.3cf9a61c8318"></a>
### Context.polynomialRoot

`pub fn polynomial_root(&self, input_expression: &Expression, variable: &str, index: usize) -> Result<Option<Expression>, JsError>`

Returns `Result<Option<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_realrootcount.0c2cc95c5fce"></a>
### Context.realRootCount

`pub fn real_root_count(&self, input_expression: &Expression, variable: &str, lower: i64, upper: i64) -> Result<Option<usize>, JsError>`

Returns `Result<Option<usize>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_realrootsign.ce30c7914074"></a>
### Context.realRootSign

`pub fn real_root_sign(&self, input_expression: &Expression, variable: &str, index: usize) -> Result<Option<i64>, JsError>`

Returns `Result<Option<i64>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_rootswithmultiplicities.1685afb5181e"></a>
### Context.rootsWithMultiplicities

`pub fn roots_with_multiplicities(&self, input_expression: &Expression, variable: &str) -> Result<Vec<RootMultiplicity>, JsError>`

Returns `Result<Vec<root_multiplicity>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_solvepolynomialsystem.1a9a483b3105"></a>
### Context.solvePolynomialSystem

`pub fn solve_polynomial_system(&self, equations: Vec<Expression>, variables: Vec<String>) -> Result<PolynomialSystemSolution, JsError>`

Returns `Result<polynomial_system_solution, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_solvesemialgebraic.d516cccae289"></a>
### Context.solveSemialgebraic

`pub fn solve_semialgebraic(&self, matrix: &Expression, variables: Vec<String>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_solvesetindomain.1a3d09ece50e"></a>
### Context.solvesetInDomain

`pub fn solveset_in_domain(&self, equation: &Expression, variable: &str, domain: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.criticalpoint_multipliervalues.7e963e9a8ba9"></a>
### CriticalPoint.multiplierValues

`pub fn multiplier_values(&self) -> Vec<Expression>`

Returns `Vec<expression>`.

<a id="placement-placement.wasm.wasm_class.criticalpoint_multipliervariables.ec621ff22453"></a>
### CriticalPoint.multiplierVariables

`pub fn multiplier_variables(&self) -> Vec<String>`

Returns `Vec<String>`.

<a id="placement-placement.wasm.wasm_class.expression_rootswithmultiplicities.e1d29f981fe3"></a>
### Expression.rootsWithMultiplicities

`pub fn roots_with_multiplicities(&self, variable: &str) -> Result<Vec<crate::context::RootMultiplicity>, JsError>`

Returns `Result<Vec<crate::context::root_multiplicity>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_classifyunconstrained.016594913f0d"></a>
### module.classifyUnconstrained

`fn classify_unconstrained(objective: &Expression, variables: Vec<String>, point_variables: Vec<String>, point_values: Vec<Expression>) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_comparerealroots.f56fb469e237"></a>
### module.compareRealRoots

`fn compare_real_roots(first_expression: &Expression, first_variable: &str, first_index: usize, second_expression: &Expression, second_variable: &str, second_index: usize) -> Result<Option<i64>, JsError>`

Returns `Result<Option<i64>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_countdistinctrealroots.ea05a875dba1"></a>
### module.countDistinctRealRoots

`fn count_distinct_real_roots(input_expression: &Expression, variable: &str) -> Result<Option<usize>, JsError>`

Returns `Result<Option<usize>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_eliminatequantifiers.7b682b252104"></a>
### module.eliminateQuantifiers

`fn eliminate_quantifiers(matrix: &Expression, quantifiers: Vec<String>, variables: Vec<String>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_minimalpolynomialof.79c2bb8f41d9"></a>
### module.minimalPolynomialOf

`fn minimal_polynomial_of(input_expression: &Expression, variable: &str) -> Result<Option<Expression>, JsError>`

Returns `Result<Option<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_polynomialroot.72fc790efc20"></a>
### module.polynomialRoot

`fn polynomial_root(input_expression: &Expression, variable: &str, index: usize) -> Result<Option<Expression>, JsError>`

Returns `Result<Option<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_realrootcount.73ae1dfc30f1"></a>
### module.realRootCount

`fn real_root_count(input_expression: &Expression, variable: &str, lower: i64, upper: i64) -> Result<Option<usize>, JsError>`

Returns `Result<Option<usize>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_realrootsign.0daf97e8a58c"></a>
### module.realRootSign

`fn real_root_sign(input_expression: &Expression, variable: &str, index: usize) -> Result<Option<i64>, JsError>`

Returns `Result<Option<i64>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_rootswithmultiplicities.64f20afdbaa6"></a>
### module.rootsWithMultiplicities

`fn roots_with_multiplicities(input_expression: &Expression, variable: &str) -> Result<Vec<RootMultiplicity>, JsError>`

Returns `Result<Vec<root_multiplicity>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_solvepolynomialsystem.e6845dfe5212"></a>
### module.solvePolynomialSystem

`fn solve_polynomial_system(equations: Vec<Expression>, variables: Vec<String>) -> Result<PolynomialSystemSolution, JsError>`

Returns `Result<polynomial_system_solution, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_solvesemialgebraic.bc85f1234db9"></a>
### module.solveSemialgebraic

`fn solve_semialgebraic(matrix: &Expression, variables: Vec<String>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_solvesetindomain.d47c4f18f7ba"></a>
### module.solvesetInDomain

`fn solveset_in_domain(equation: &Expression, variable: &str, domain: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

