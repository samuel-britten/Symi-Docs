# Solving

### solve

<a id="entry-presentation_kotlin_api_session_solve"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_solve.6f896305e47e"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun solve(
    inputExpression: UniffiExpression,
    variable: kotlin.String,
): List<UniffiExpression>
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_solve.a09ec4f065d9"></a>
<p class="symi-entry-owner">Expression method: <code>UniffiExpression.solve</code></p>

```kotlin signature
fun solve(variable: kotlin.String): List<UniffiExpression>
```

</details>


Solve an equation (an `equal` node, or an expression implicitly equated to
zero) for `variable`, returning a list of solutions. Solutions outside the
solver's reach are simply absent — prefer `solveset` when you need an honest
"unsolved" residue.

### solveset

<a id="entry-presentation_kotlin_api_session_solveset"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_solveset.03d4bfbf04f7"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun solveset(
    inputExpression: UniffiExpression,
    variable: kotlin.String,
): UniffiExpression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_solveset.d8e8e661cefd"></a>
<p class="symi-entry-owner">Expression method: <code>UniffiExpression.solveset</code></p>

```kotlin signature
fun solveset(variable: kotlin.String): UniffiExpression
```

</details>


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

<a id="entry-presentation_kotlin_api_session_solveset_in_domain"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_solvesetindomain.75a22b19ab27"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun solvesetInDomain(
    inputExpression: UniffiExpression,
    variable: kotlin.String,
    domain: UniffiExpression,
): UniffiExpression
```


`solveset` restricted to an explicit domain set (e.g. `real_line()`,
`integer_set()`, an interval).

### roots_with_multiplicities

<a id="entry-presentation_kotlin_api_session_roots_with_multiplicities"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_rootswithmultiplicities.851ee65113f9"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun rootsWithMultiplicities(
    inputExpression: UniffiExpression,
    variable: kotlin.String,
): List<UniffiRootMultiplicity>
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_rootswithmultiplicities.a9c69445f1dc"></a>
<p class="symi-entry-owner">Expression method: <code>UniffiExpression.rootsWithMultiplicities</code></p>

```kotlin signature
fun rootsWithMultiplicities(variable: kotlin.String): List<UniffiRootMultiplicity>
```

</details>


Roots of a polynomial with their multiplicities. **Notes:** Python returns a
dict keyed by root; WASM returns an array of `RootMultiplicity` objects.

### polynomial_root

<a id="entry-presentation_kotlin_api_session_polynomial_root"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_polynomialroot.28a1d3f80945"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun polynomialRoot(
    inputExpression: UniffiExpression,
    variable: kotlin.String,
    index: kotlin.ULong,
): UniffiExpression?
```


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

<a id="entry-presentation_kotlin_api_session_minimal_polynomial_of"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_minimalpolynomialof.73c4186d1d09"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun minimalPolynomialOf(
    inputExpression: UniffiExpression,
    variable: kotlin.String,
): UniffiExpression?
```


Return an exact polynomial in the requested variable for a first-class
polynomial-root atom. Its dense primitive integer coefficients are independent
of the source variable, coefficient scale, and current isolation precision.

### root_multiplicity (WASM result class)

Has `root` and `multiplicity` getters; see object model.

### solve_polynomial_system

<a id="entry-presentation_kotlin_api_session_solve_polynomial_system"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_solvepolynomialsystem.e15e3e3f80ff"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun solvePolynomialSystem(
    equations: List<UniffiExpression>,
    variables: List<kotlin.String>,
): UniffiPolynomialSystemSolution
```


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

<a id="entry-presentation_kotlin_api_polynomialsystemsolution_verdict"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipolynomialsystemsolution_verdict.0006e878b626"></a>
<p class="symi-entry-owner">UniffiPolynomialSystemSolution method</p>

```kotlin signature
fun verdict(): UniffiSystemVerdict
```

Getter on `PolynomialSystemSolution`: the verdict string, one of `"finite"`,
`"empty"`, `"positive_dimensional"`, or `"declined"`.

### complete

<a id="entry-presentation_kotlin_api_polynomialsystemsolution_complete"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipolynomialsystemsolution_complete.f70c3c1d9eb9"></a>
<p class="symi-entry-owner">UniffiPolynomialSystemSolution method</p>

```kotlin signature
fun complete(): kotlin.Boolean
```

Getter on `PolynomialSystemSolution`: whether the solver certified it found
every solution.

### solutions
Getter on `PolynomialSystemSolution`: the array of `SystemAssignment` tuples
(empty for the non-finite verdicts).

<a id="entry-presentation_kotlin_api_polynomialsystemsolution_solutions"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipolynomialsystemsolution_solutions.a689a872e0cd"></a>
<p class="symi-entry-owner">UniffiPolynomialSystemSolution method</p>

```kotlin signature
fun solutions(): List<UniffiSystemAssignment>
```

Getter on `polynomial_system_solution`: the array of `system_assignment` tuples (empty for the non-finite verdicts).

### system_assignment (WASM result class)

One solution tuple of a polynomial system, pairing each unknown with its value.

### variables

<a id="entry-presentation_kotlin_api_systemassignment_variables"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisystemassignment_variables.14a2fe9b3e80"></a>
<p class="symi-entry-owner">UniffiSystemAssignment method</p>

```kotlin signature
fun variables(): List<kotlin.String>
```

Getter on `SystemAssignment`: the unknown names, in order.

### values

<a id="entry-presentation_kotlin_api_systemassignment_values"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisystemassignment_values.1aff50b38568"></a>
<p class="symi-entry-owner">UniffiSystemAssignment method</p>

```kotlin signature
fun values(): List<UniffiExpression>
```

Getter on `SystemAssignment`: the assigned value expressions, aligned with
`variables`.

### real_root_count

<a id="entry-presentation_kotlin_api_session_real_root_count"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_realrootcount.5662ae54196a"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun realRootCount(
    inputExpression: UniffiExpression,
    variable: kotlin.String,
    lower: kotlin.Long,
    upper: kotlin.Long,
): kotlin.ULong?
```


Number of distinct real roots of a univariate polynomial in the interval
`(lower, upper]` via Sturm sequences. `None` when the expression is not a
univariate polynomial over the rationals.

### count_distinct_real_roots

<a id="entry-presentation_kotlin_api_session_count_distinct_real_roots"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_countdistinctrealroots.6ba1de8ecf81"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun countDistinctRealRoots(
    inputExpression: UniffiExpression,
    variable: kotlin.String,
): kotlin.ULong?
```


Number of distinct real roots over all of \(\mathbb{R}\). Same `None` conditions as
`real_root_count`.

### real_root_sign

<a id="entry-presentation_kotlin_api_session_real_root_sign"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_realrootsign.d4d8626c99cb"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun realRootSign(
    inputExpression: UniffiExpression,
    variable: kotlin.String,
    index: kotlin.ULong,
): kotlin.Long?
```


The exact sign (`-1`, `0`, or `1`) of the `index`-th smallest real root of a
univariate polynomial over the rationals, decided exactly through the real
algebraic number layer rather than by numeric evaluation. `None`
when the expression is not a univariate polynomial over the rationals or `index`
is out of range.

### compare_real_roots

<a id="entry-presentation_kotlin_api_session_compare_real_roots"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_comparerealroots.a4792011d011"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun compareRealRoots(
    firstExpression: UniffiExpression,
    firstVariable: kotlin.String,
    firstIndex: kotlin.ULong,
    secondExpression: UniffiExpression,
    secondVariable: kotlin.String,
    secondIndex: kotlin.ULong,
): kotlin.Long?
```


Compare two real algebraic numbers exactly, each given as the `index`-th smallest
real root of a univariate polynomial over the rationals. Returns `-1`, `0`, or
`1` according to whether the first is less than, equal to, or greater than the
second — a total order decided exactly (for example `compare_real_roots` of
\(\sqrt{2}\) and \(\sqrt[3]{3}\) returns `-1`). `None` when either operand is not a univariate
polynomial over the rationals or an index is out of range.

## Real quantifier elimination and semialgebraic solving

### eliminate_quantifiers

<a id="entry-presentation_kotlin_api_session_eliminate_quantifiers"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_eliminatequantifiers.130b76207fde"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun eliminateQuantifiers(
    matrix: UniffiExpression,
    quantifiers: List<UniffiQuantifier>,
    variables: List<kotlin.String>,
): UniffiExpression
```

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

<a id="entry-presentation_kotlin_api_session_solve_semialgebraic"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_solvesemialgebraic.0ee8355fa7b2"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun solveSemialgebraic(
    matrix: UniffiExpression,
    variables: List<kotlin.String>,
): UniffiExpression
```

`context.solve_semialgebraic(matrix, variables: list[VariableLike])`

Nonlinear polynomial constraint / inequality solving over \(\mathbb{R}^n\) — the no-quantifier case of
quantifier elimination. Given a Boolean combination of polynomial relations over
\(\mathbb{Q}[\text{variables}]\), returns the quantifier-free description of the real solution set
`{ x : matrix(x) }` (the disjunction of the satisfying CAD cells' sign conditions). This
generalises the univariate `solve` over inequalities to the multivariate semialgebraic
case (for example, \(\{(x, y) : x^2 - 1 < 0 \land y^2 - 1 < 0\}\) is the open square). Errors outside
\(\mathbb{Q}[\text{variables}]\) or on a decomposition decline.

## Example


### solve_as_set

*Not exposed by the Kotlin bindings. Available as [`api::Expression::solve_as_set`](/symi/rust/solving#solve_as_set) in Rust.*


The solution set of an equation as a set-valued expression, rather than the
list of solutions [`solve`](#solve) returns. A set answer can express solution
families a list cannot — an image set over the integers, or a union of several
families — so it is the right entry when the solution set may be infinite.
See [Sets](sets.md) for what can be done with the result.
