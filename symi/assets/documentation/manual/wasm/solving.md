# Solving

### solve

<a id="entry-presentation_wasm_solving_capability_equations_solve_api_solving_session_solve"></a>
<a id="placement-placement.wasm.wasm_module.module_solve.3fdf003ed9a5"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
solve(input_expression: Expression, variable: string): Expression[]
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_solve.eb0bbb7e6086"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.solve</code></p>

```typescript signature
solve(input_expression: Expression, variable: string): Expression[]
```

</details>

<a id="entry-presentation_wasm_solving_capability_equations_solve_api_expression_operations_expression_solve"></a>
<a id="placement-placement.wasm.wasm_class.expression_solve.e98546cf948d"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
solve(variable: string): Expression[]
```


Solve an equation (an `equal` node, or an expression implicitly equated to
zero) for `variable`, returning a list of solutions. Solutions outside the
solver's reach are simply absent — prefer `solveset` when you need an honest
"unsolved" residue.

### solveset

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

<a id="entry-presentation_wasm_solving_capability_equations_solveset_api_expression_operations_expression_solveset"></a>
<a id="placement-placement.wasm.wasm_class.expression_solveset.24afaaf366dc"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
solveset(variable: string, domain?: Expression | null): Expression
```


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

<a id="entry-presentation_wasm_solving_capability_equations_verdict_api_results_polynomialsystemsolution_verdict"></a>
<a id="placement-placement.wasm.wasm_class.polynomialsystemsolution_verdict.b9cd1af2a7ce"></a>
<p class="symi-entry-owner">PolynomialSystemSolution property</p>

```typescript signature
readonly verdict: string
```

Getter on `PolynomialSystemSolution`: the verdict string, one of `"finite"`,
`"empty"`, `"positive_dimensional"`, or `"declined"`.

### complete
Getter on `PolynomialSystemSolution`: whether the solver certified it found
every solution.

### solutions

<a id="entry-presentation_wasm_solving_capability_equations_solutions_api_results_polynomialsystemsolution_solutions"></a>
<a id="placement-placement.wasm.wasm_class.polynomialsystemsolution_solutions.5cd1b9755b44"></a>
<p class="symi-entry-owner">PolynomialSystemSolution property</p>

```typescript signature
readonly solutions: SystemAssignment[]
```

Getter on `PolynomialSystemSolution`: the array of `SystemAssignment` tuples
(empty for the non-finite verdicts).

### system_assignment (WASM result class)

One solution tuple of a polynomial system, pairing each unknown with its value.

### variables

<a id="entry-presentation_wasm_solving_capability_equations_variables_api_results_systemassignment_variables"></a>
<a id="placement-placement.wasm.wasm_class.systemassignment_variables.b13c40d79d8c"></a>
<p class="symi-entry-owner">SystemAssignment property</p>

```typescript signature
readonly variables: string[]
```

Getter on `SystemAssignment`: the unknown names, in order.

### values

<a id="entry-presentation_wasm_solving_capability_equations_values_api_results_systemassignment_values"></a>
<a id="placement-placement.wasm.wasm_class.systemassignment_values.6def767a335c"></a>
<p class="symi-entry-owner">SystemAssignment property</p>

```typescript signature
readonly values: Expression[]
```

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

### classifyUnconstrained

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

### compareRealRoots

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

### complete

<a id="entry-presentation_wasm_solving_capability_equations_complete_api_results_optimizationoutcome_complete"></a>
<a id="placement-placement.wasm.wasm_class.optimizationoutcome_complete.21af5824d96d"></a>
<p class="symi-entry-owner">OptimizationOutcome property</p>

```typescript signature
readonly complete: boolean
```

Getter on `polynomial_system_solution`: whether the solver certified it found every solution.

### complete

<a id="entry-presentation_wasm_solving_capability_equations_complete_api_results_polynomialsystemsolution_complete"></a>
<a id="placement-placement.wasm.wasm_class.polynomialsystemsolution_complete.106326740c8a"></a>
<p class="symi-entry-owner">PolynomialSystemSolution property</p>

```typescript signature
readonly complete: boolean
```

Getter on `polynomial_system_solution`: whether the solver certified it found every solution.

### countDistinctRealRoots

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

### eliminateQuantifiers

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

### minimalPolynomialOf

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

### multiplierValues

<a id="entry-presentation_wasm_solving_capability_equations_multiplier_values_api_results_criticalpoint_multiplier_values"></a>
<a id="placement-placement.wasm.wasm_class.criticalpoint_multipliervalues.7e963e9a8ba9"></a>
<p class="symi-entry-owner">CriticalPoint property</p>

```typescript signature
readonly multiplierValues: Expression[]
```

The solved values of those multipliers, in the same order as `multiplier_variables`.

### multiplierVariables

<a id="entry-presentation_wasm_solving_capability_equations_multiplier_variables_api_results_criticalpoint_multiplier_variables"></a>
<a id="placement-placement.wasm.wasm_class.criticalpoint_multipliervariables.ec621ff22453"></a>
<p class="symi-entry-owner">CriticalPoint property</p>

```typescript signature
readonly multiplierVariables: string[]
```

The names of the introduced Lagrange / KKT multipliers at a constrained critical point (empty for the unconstrained case).

### polynomialRoot

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

### realRootCount

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

### realRootSign

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

### rootsWithMultiplicities

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

### rootsWithMultiplicities

<a id="entry-presentation_wasm_solving_capability_equations_roots_with_multiplicities_api_expression_operations_expression_roots_with_multiplicities"></a>
<a id="placement-placement.wasm.wasm_class.expression_rootswithmultiplicities.e1d29f981fe3"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
rootsWithMultiplicities(variable: string): RootMultiplicity[]
```

Roots of a polynomial with their multiplicities. Notes: Python returns a dict keyed by root; WASM returns an array of `root_multiplicity` objects.

### solvePolynomialSystem

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

### solveSemialgebraic

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

### solvesetInDomain

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

### values

<a id="entry-presentation_wasm_solving_capability_equations_values_api_results_criticalpoint_values"></a>
<a id="placement-placement.wasm.wasm_class.criticalpoint_values.6894bda84e82"></a>
<p class="symi-entry-owner">CriticalPoint property</p>

```typescript signature
readonly values: Expression[]
```

Getter on `system_assignment`: the assigned value expressions, aligned with `variables`.

### variables

<a id="entry-presentation_wasm_solving_capability_equations_variables_api_results_criticalpoint_variables"></a>
<a id="placement-placement.wasm.wasm_class.criticalpoint_variables.daa72a0ef83f"></a>
<p class="symi-entry-owner">CriticalPoint property</p>

```typescript signature
readonly variables: string[]
```

Getter on `system_assignment`: the unknown names, in order.

### verdict

<a id="entry-presentation_wasm_solving_capability_calculus_verdict_api_results_definiteintegrationresult_verdict"></a>
<a id="placement-placement.wasm.wasm_class.definiteintegrationresult_verdict.ef5d425f12c2"></a>
<p class="symi-entry-owner">DefiniteIntegrationResult property</p>

```typescript signature
readonly verdict: string
```

Whether the request was evaluated, proved divergent, or declined.

### verdict

<a id="entry-presentation_wasm_solving_capability_equations_verdict_api_results_optimizationoutcome_verdict"></a>
<a id="placement-placement.wasm.wasm_class.optimizationoutcome_verdict.a8e3195ed418"></a>
<p class="symi-entry-owner">OptimizationOutcome property</p>

```typescript signature
readonly verdict: string
```

The optimization result classification.

### verdict

<a id="entry-presentation_wasm_solving_capability_equations_verdict_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_verdict"></a>
<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsolveresult_verdict.be6fec5ffae5"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSolveResult property</p>

```typescript signature
readonly verdict: string
```

Whether the request was solved or declined.

### verdict

<a id="entry-presentation_wasm_solving_capability_equations_verdict_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_verdict"></a>
<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsystemsolveresult_verdict.cc0fd5062ade"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSystemSolveResult property</p>

```typescript signature
readonly verdict: string
```

Whether the system was solved or declined.

### verdict

<a id="entry-presentation_wasm_solving_capability_equations_verdict_api_ordinary_differential_equations_ordinarydifferentialequationsystemverificationreport_verdict"></a>
<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsystemverificationreport_verdict.ee29fc9bbe84"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSystemVerificationReport property</p>

```typescript signature
readonly verdict: string
```

The decision on every equation residual and every datum of the supplied assignment.

### verdict

<a id="entry-presentation_wasm_solving_capability_equations_verdict_api_partial_differential_equations_partialdifferentialequationsecondorderclassification_verdict"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsecondorderclassification_verdict.46c046f2c01d"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSecondOrderClassification property</p>

```typescript signature
readonly verdict: string
```

Whether one type, a complete case table, or neither was proved.

### verdict

<a id="entry-presentation_wasm_solving_capability_equations_verdict_api_partial_differential_equations_partialdifferentialequationsolveresult_verdict"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolveresult_verdict.ddbb1f7390b2"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolveResult property</p>

```typescript signature
readonly verdict: string
```

Whether the dispatcher solved or honestly declined.

### verdict

<a id="entry-presentation_wasm_solving_capability_equations_verdict_api_partial_differential_equations_partialdifferentialequationtransformationverificationreport_verdict"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationtransformationverificationreport_verdict.b1e430c993fe"></a>
<p class="symi-entry-owner">PartialDifferentialEquationTransformationVerificationReport property</p>

```typescript signature
readonly verdict: string
```

The aggregate exact verification verdict.

### verdict

<a id="entry-presentation_wasm_solving_capability_equations_verdict_api_partial_differential_equations_partialdifferentialequationverificationreport_verdict"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationverificationreport_verdict.2c5adb81b6f5"></a>
<p class="symi-entry-owner">PartialDifferentialEquationVerificationReport property</p>

```typescript signature
readonly verdict: string
```

The aggregate exact verification verdict.

### verdict

<a id="entry-presentation_wasm_solving_capability_equations_verdict_api_partial_differential_equations_partialdifferentialequationverificationresidual_verdict"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationverificationresidual_verdict.f1c9965647a6"></a>
<p class="symi-entry-owner">PartialDifferentialEquationVerificationResidual property</p>

```typescript signature
readonly verdict: string
```

The exact verdict proved about this one residual.

