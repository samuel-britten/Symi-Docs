# Solving

### solve

<a id="entry-presentation_rust_solving_capability_rust_native_rust_api_expression_operations_expression_solve_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_expression_operations_expression_solve.41dd6fdfd259"></a>
<p class="symi-entry-owner">api::expression_operations::Expression method</p>

```rust signature
pub fn solve<'a, VariableType>(
    &self,
    variable: VariableType,
) -> Result<Vec<Expression>, ApiError>
where
    VariableType: Into<VariableLike<'a>>,
```

<a id="entry-presentation_rust_solving_capability_rust_native_rust_api_solving_session_solve_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_solving_session_solve.4f174656bd13"></a>
<p class="symi-entry-owner">api::solving::Session method</p>

```rust signature
pub fn solve<'a, VariableType>(
    &self,
    input_expression: &Expression,
    variable: VariableType,
) -> Result<Vec<Expression>, ApiError>
where
    VariableType: Into<VariableLike<'a>>,
```


Solve an equation (an `equal` node, or an expression implicitly equated to
zero) for `variable`, returning a list of solutions. Solutions outside the
solver's reach are simply absent — prefer `solveset` when you need an honest
"unsolved" residue.

### solveset

<a id="entry-presentation_rust_solving_capability_rust_native_rust_api_expression_operations_expression_solveset_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_expression_operations_expression_solveset.6ccdeb8785dd"></a>
<p class="symi-entry-owner">api::expression_operations::Expression method</p>

```rust signature
pub fn solveset<'a, VariableType>(
    &self,
    variable: VariableType,
) -> Result<Expression, ApiError>
where
    VariableType: Into<VariableLike<'a>>,
```

<a id="entry-presentation_rust_solving_capability_rust_native_rust_api_solving_session_solveset_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_solving_session_solveset.a55c6810eed4"></a>
<p class="symi-entry-owner">api::solving::Session method</p>

```rust signature
pub fn solveset<'a, VariableType>(
    &self,
    input_expression: &Expression,
    variable: VariableType,
) -> Result<Expression, ApiError>
where
    VariableType: Into<VariableLike<'a>>,
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

<a id="entry-presentation_rust_solving_capability_rust_native_rust_api_solving_session_solveset_in_domain_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_solving_session_solveset_in_domain.53c9937247f3"></a>
<p class="symi-entry-owner">api::solving::Session method</p>

```rust signature
pub fn solveset_in_domain<'a, VariableType>(
    &self,
    input_expression: &Expression,
    variable: VariableType,
    domain: &Expression,
) -> Result<Expression, ApiError>
where
    VariableType: Into<VariableLike<'a>>,
```


`solveset` restricted to an explicit domain set (e.g. `real_line()`,
`integer_set()`, an interval).

### roots_with_multiplicities

<a id="entry-presentation_rust_solving_capability_rust_native_rust_api_expression_operations_expression_roots_with_multiplicities_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_expression_operations_expression_roots_with_multiplicities.e3f124509357"></a>
<p class="symi-entry-owner">api::expression_operations::Expression method</p>

```rust signature
pub fn roots_with_multiplicities<'a, VariableType>(
    &self,
    variable: VariableType,
) -> Result<Vec<RootMultiplicity>, ApiError>
where
    VariableType: Into<VariableLike<'a>>,
```

<a id="entry-presentation_rust_solving_capability_rust_native_rust_api_solving_session_roots_with_multiplicities_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_solving_session_roots_with_multiplicities.d3864d0f9154"></a>
<p class="symi-entry-owner">api::solving::Session method</p>

```rust signature
pub fn roots_with_multiplicities<'a, VariableType>(
    &self,
    input_expression: &Expression,
    variable: VariableType,
) -> Result<Vec<RootMultiplicity>, ApiError>
where
    VariableType: Into<VariableLike<'a>>,
```


Roots of a polynomial with their multiplicities. **Notes:** Python returns a
dict keyed by root; WASM returns an array of `RootMultiplicity` objects.

### polynomial_root

<a id="entry-presentation_rust_solving_capability_rust_native_rust_api_solving_session_polynomial_root_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_solving_session_polynomial_root.948e1374c79d"></a>
<p class="symi-entry-owner">api::solving::Session method</p>

```rust signature
pub fn polynomial_root<'a, VariableType>(
    &self,
    input_expression: &Expression,
    variable: VariableType,
    index: usize,
) -> Result<Option<Expression>, ApiError>
where
    VariableType: Into<VariableLike<'a>>,
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

<a id="entry-presentation_rust_solving_capability_rust_native_rust_api_algebra_session_minimal_polynomial_of_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_algebra_session_minimal_polynomial_of.0fbb6052e6d7"></a>
<p class="symi-entry-owner">api::algebra::Session method</p>

```rust signature
pub fn minimal_polynomial_of<'a, VariableType>(
    &self,
    input_expression: &Expression,
    variable: VariableType,
) -> Result<Option<Expression>, ApiError>
where
    VariableType: Into<VariableLike<'a>>,
```


Return an exact polynomial in the requested variable for a first-class
polynomial-root atom. Its dense primitive integer coefficients are independent
of the source variable, coefficient scale, and current isolation precision.

### root_multiplicity (WASM result class)

Has `root` and `multiplicity` getters; see object model.

### solve_polynomial_system

<a id="entry-presentation_rust_solving_capability_rust_native_rust_api_solving_session_solve_polynomial_system_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_solving_session_solve_polynomial_system.2ea4a3ecf5e0"></a>
<p class="symi-entry-owner">api::solving::Session method</p>

```rust signature
pub fn solve_polynomial_system<'a, IteratorType, VariableType>(
    &self,
    equations: &[Expression],
    variables: IteratorType,
) -> Result<PolynomialSystemSolution, ApiError>
where
    IteratorType: IntoIterator<Item = VariableType>,
    VariableType: Into<VariableLike<'a>>,
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
Getter on `PolynomialSystemSolution`: the verdict string, one of `"finite"`,
`"empty"`, `"positive_dimensional"`, or `"declined"`.

### complete
Getter on `PolynomialSystemSolution`: whether the solver certified it found
every solution.

### solutions

<a id="entry-presentation_rust_solving_capability_rust_native_rust_api_results_polynomialsystemsolution_solutions_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_polynomialsystemsolution_solutions.88ee482802c7"></a>
<p class="symi-entry-owner">api::results::PolynomialSystemSolution method</p>

```rust signature
pub fn solutions(&self) -> Vec<SystemAssignment>
```

Getter on `PolynomialSystemSolution`: the array of `SystemAssignment` tuples
(empty for the non-finite verdicts).

### system_assignment (WASM result class)

One solution tuple of a polynomial system, pairing each unknown with its value.

### variables
Getter on `SystemAssignment`: the unknown names, in order.

### values
Getter on `SystemAssignment`: the assigned value expressions, aligned with
`variables`.

### real_root_count

<a id="entry-presentation_rust_solving_capability_rust_native_rust_api_solving_session_real_root_count_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_solving_session_real_root_count.9e780400281d"></a>
<p class="symi-entry-owner">api::solving::Session method</p>

```rust signature
pub fn real_root_count<'a, VariableType>(
    &self,
    input_expression: &Expression,
    variable: VariableType,
    lower: i64,
    upper: i64,
) -> Result<Option<usize>, ApiError>
where
    VariableType: Into<VariableLike<'a>>,
```


Number of distinct real roots of a univariate polynomial in the interval
`(lower, upper]` via Sturm sequences. `None` when the expression is not a
univariate polynomial over the rationals.

### count_distinct_real_roots

<a id="entry-presentation_rust_solving_capability_rust_native_rust_api_solving_session_count_distinct_real_roots_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_solving_session_count_distinct_real_roots.51d733a2074a"></a>
<p class="symi-entry-owner">api::solving::Session method</p>

```rust signature
pub fn count_distinct_real_roots<'a, VariableType>(
    &self,
    input_expression: &Expression,
    variable: VariableType,
) -> Result<Option<usize>, ApiError>
where
    VariableType: Into<VariableLike<'a>>,
```


Number of distinct real roots over all of \(\mathbb{R}\). Same `None` conditions as
`real_root_count`.

### real_root_sign

<a id="entry-presentation_rust_solving_capability_rust_native_rust_api_solving_session_real_root_sign_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_solving_session_real_root_sign.15e3dd9c35b8"></a>
<p class="symi-entry-owner">api::solving::Session method</p>

```rust signature
pub fn real_root_sign<'a, VariableType>(
    &self,
    input_expression: &Expression,
    variable: VariableType,
    index: usize,
) -> Result<Option<i64>, ApiError>
where
    VariableType: Into<VariableLike<'a>>,
```


The exact sign (`-1`, `0`, or `1`) of the `index`-th smallest real root of a
univariate polynomial over the rationals, decided exactly through the real
algebraic number layer rather than by numeric evaluation. `None`
when the expression is not a univariate polynomial over the rationals or `index`
is out of range.

### compare_real_roots

<a id="entry-presentation_rust_solving_capability_rust_native_rust_api_solving_session_compare_real_roots_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_solving_session_compare_real_roots.8096f9e6b134"></a>
<p class="symi-entry-owner">api::solving::Session method</p>

```rust signature
pub fn compare_real_roots<'a, 'b, FirstVariableType, SecondVariableType>(
    &self,
    first_expression: &Expression,
    first_variable: FirstVariableType,
    first_index: usize,
    second_expression: &Expression,
    second_variable: SecondVariableType,
    second_index: usize,
) -> Result<Option<i64>, ApiError>
where
    FirstVariableType: Into<VariableLike<'a>>,
    SecondVariableType: Into<VariableLike<'b>>,
```


Compare two real algebraic numbers exactly, each given as the `index`-th smallest
real root of a univariate polynomial over the rationals. Returns `-1`, `0`, or
`1` according to whether the first is less than, equal to, or greater than the
second — a total order decided exactly (for example `compare_real_roots` of
\(\sqrt{2}\) and \(\sqrt[3]{3}\) returns `-1`). `None` when either operand is not a univariate
polynomial over the rationals or an index is out of range.

## Real quantifier elimination and semialgebraic solving

### eliminate_quantifiers

<a id="entry-presentation_rust_solving_capability_rust_native_rust_api_logic_session_eliminate_quantifiers_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_logic_session_eliminate_quantifiers.8d40588f7af2"></a>
<p class="symi-entry-owner">api::logic::Session method</p>

```rust signature
pub fn eliminate_quantifiers<'a, IteratorType, VariableType>(
    &self,
    matrix: &Expression,
    quantifiers: &[Quantifier],
    variables: IteratorType,
) -> Result<Expression, ApiError>
where
    IteratorType: IntoIterator<Item = VariableType>,
    VariableType: Into<VariableLike<'a>>,
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

<a id="entry-presentation_rust_solving_capability_rust_native_rust_api_logic_session_solve_semialgebraic_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_logic_session_solve_semialgebraic.00013bc94d61"></a>
<p class="symi-entry-owner">api::logic::Session method</p>

```rust signature
pub fn solve_semialgebraic<'a, IteratorType, VariableType>(
    &self,
    matrix: &Expression,
    variables: IteratorType,
) -> Result<Expression, ApiError>
where
    IteratorType: IntoIterator<Item = VariableType>,
    VariableType: Into<VariableLike<'a>>,
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

Roots as a list, as a set, and with multiplicities.

```rust
use symi::api::prelude::*;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let session = Session::new();
    let x = session.symbol("x");

    println!("{}", session.parse("x^2 - 4")?.solve_as_set(&x)?);
    println!("{}", session.parse("sin(x)")?.solve_as_set(&x)?);
    Ok(())
}
```


## Additional API

### complete

<a id="entry-presentation_rust_solving_capability_rust_native_rust_api_results_optimizationoutcome_complete_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_optimizationoutcome_complete.59d38f151b43"></a>
<p class="symi-entry-owner">api::results::OptimizationOutcome method</p>

```rust signature
pub fn complete(&self) -> bool
```

Getter on `PolynomialSystemSolution`: whether the solver certified it found every solution.

### complete

<a id="entry-presentation_rust_solving_capability_rust_native_rust_api_results_polynomialsystemsolution_complete_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_polynomialsystemsolution_complete.7849113da2b0"></a>
<p class="symi-entry-owner">api::results::PolynomialSystemSolution method</p>

```rust signature
pub fn complete(&self) -> bool
```

Getter on `PolynomialSystemSolution`: whether the solver certified it found every solution.

### solveset_in_domain

<a id="entry-presentation_rust_solving_capability_rust_native_rust_api_expression_operations_expression_solveset_in_domain_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_expression_operations_expression_solveset_in_domain.fffc24879cfb"></a>
<p class="symi-entry-owner">api::expression_operations::Expression method</p>

```rust signature
pub fn solveset_in_domain<'a, VariableType>(
    &self,
    variable: VariableType,
    domain: &Expression,
) -> Result<Expression, ApiError>
where
    VariableType: Into<VariableLike<'a>>,
```

`solveset` restricted to an explicit domain set (e.g. `real_line()`, `integer_set()`, an interval).

### values

<a id="entry-presentation_rust_solving_capability_rust_native_rust_api_results_criticalpoint_values_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_criticalpoint_values.bcdf7f87b478"></a>
<p class="symi-entry-owner">api::results::CriticalPoint method</p>

```rust signature
pub fn values(&self) -> Vec<Expression>
```

Getter on `SystemAssignment`: the assigned value expressions, aligned with `variables`.

### values

<a id="entry-presentation_rust_solving_capability_rust_native_rust_api_results_systemassignment_values_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_systemassignment_values.42d0df2c35d1"></a>
<p class="symi-entry-owner">api::results::SystemAssignment method</p>

```rust signature
pub fn values(&self) -> Vec<Expression>
```

Getter on `SystemAssignment`: the assigned value expressions, aligned with `variables`.

### variables

<a id="entry-presentation_rust_solving_capability_rust_native_rust_api_results_criticalpoint_variables_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_criticalpoint_variables.6d6886ffaaef"></a>
<p class="symi-entry-owner">api::results::CriticalPoint method</p>

```rust signature
pub fn variables(&self) -> Vec<String>
```

Getter on `SystemAssignment`: the unknown names, in order.

### variables

<a id="entry-presentation_rust_solving_capability_rust_native_rust_api_results_systemassignment_variables_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_systemassignment_variables.32f538264467"></a>
<p class="symi-entry-owner">api::results::SystemAssignment method</p>

```rust signature
pub fn variables(&self) -> Vec<String>
```

Getter on `SystemAssignment`: the unknown names, in order.

### verdict

<a id="entry-presentation_rust_solving_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_verdict_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_verdict.ad770dd183d8"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSolveResult method</p>

```rust signature
pub fn verdict(&self) -> OrdinaryDifferentialEquationSolveVerdict
```

Getter on `PolynomialSystemSolution`: the verdict string, one of `"finite"`, `"empty"`, `"positive_dimensional"`, or `"declined"`.

### verdict

<a id="entry-presentation_rust_solving_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_verdict_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_verdict.c2f53c117307"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemSolveResult method</p>

```rust signature
pub fn verdict(&self) -> OrdinaryDifferentialEquationSolveVerdict
```

Getter on `PolynomialSystemSolution`: the verdict string, one of `"finite"`, `"empty"`, `"positive_dimensional"`, or `"declined"`.

### verdict

<a id="entry-presentation_rust_solving_capability_rust_native_rust_api_ordinary_differential_equations_ordinarydifferentialequationsystemverificationreport_verdict_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_ordinarydifferentialequationsystemverificationreport_verdict.0244ad1caf67"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::OrdinaryDifferentialEquationSystemVerificationReport method</p>

```rust signature
pub fn verdict(&self) -> OrdinaryDifferentialEquationVerificationVerdict
```

Getter on `PolynomialSystemSolution`: the verdict string, one of `"finite"`, `"empty"`, `"positive_dimensional"`, or `"declined"`.

### verdict

<a id="entry-presentation_rust_solving_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsecondorderclassification_verdict_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsecondorderclassification_verdict.ab7028887c9e"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSecondOrderClassification method</p>

```rust signature
pub fn verdict(
    &self,
) -> PartialDifferentialEquationSecondOrderTypeVerdict
```

Getter on `PolynomialSystemSolution`: the verdict string, one of `"finite"`, `"empty"`, `"positive_dimensional"`, or `"declined"`.

### verdict

<a id="entry-presentation_rust_solving_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsolveresult_verdict_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolveresult_verdict.edb7687242c6"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolveResult method</p>

```rust signature
pub fn verdict(&self) -> PartialDifferentialEquationSolveVerdict
```

Getter on `PolynomialSystemSolution`: the verdict string, one of `"finite"`, `"empty"`, `"positive_dimensional"`, or `"declined"`.

### verdict

<a id="entry-presentation_rust_solving_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationtransformationverificationreport_verdict_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationtransformationverificationreport_verdict.2863448e1082"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationTransformationVerificationReport method</p>

```rust signature
pub fn verdict(&self) -> PartialDifferentialEquationVerificationVerdict
```

Getter on `PolynomialSystemSolution`: the verdict string, one of `"finite"`, `"empty"`, `"positive_dimensional"`, or `"declined"`.

### verdict

<a id="entry-presentation_rust_solving_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationverificationreport_verdict_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationverificationreport_verdict.c594b62c4cd1"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationVerificationReport method</p>

```rust signature
pub fn verdict(&self) -> PartialDifferentialEquationVerificationVerdict
```

Getter on `PolynomialSystemSolution`: the verdict string, one of `"finite"`, `"empty"`, `"positive_dimensional"`, or `"declined"`.

### verdict

<a id="entry-presentation_rust_solving_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationverificationresidual_verdict_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationverificationresidual_verdict.c2cee104eae5"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationVerificationResidual method</p>

```rust signature
pub fn verdict(&self) -> PartialDifferentialEquationVerificationVerdict
```

Getter on `PolynomialSystemSolution`: the verdict string, one of `"finite"`, `"empty"`, `"positive_dimensional"`, or `"declined"`.

### verdict

<a id="entry-presentation_rust_solving_capability_rust_native_rust_api_results_definiteintegrationresult_verdict_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_definiteintegrationresult_verdict.e47ff697c492"></a>
<p class="symi-entry-owner">api::results::DefiniteIntegrationResult method</p>

```rust signature
pub fn verdict(&self) -> DefiniteIntegrationVerdict
```

Getter on `PolynomialSystemSolution`: the verdict string, one of `"finite"`, `"empty"`, `"positive_dimensional"`, or `"declined"`.

### verdict

<a id="entry-presentation_rust_solving_capability_rust_native_rust_api_results_optimizationoutcome_verdict_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_optimizationoutcome_verdict.dca4ffa727c7"></a>
<p class="symi-entry-owner">api::results::OptimizationOutcome method</p>

```rust signature
pub fn verdict(&self) -> OptimizationVerdict
```

Getter on `PolynomialSystemSolution`: the verdict string, one of `"finite"`, `"empty"`, `"positive_dimensional"`, or `"declined"`.

### verdict

<a id="entry-presentation_rust_solving_capability_rust_native_rust_api_results_polynomialsystemsolution_verdict_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_polynomialsystemsolution_verdict.3a1a9e238f68"></a>
<p class="symi-entry-owner">api::results::PolynomialSystemSolution method</p>

```rust signature
pub fn verdict(&self) -> SystemVerdict
```

Getter on `PolynomialSystemSolution`: the verdict string, one of `"finite"`, `"empty"`, `"positive_dimensional"`, or `"declined"`.

