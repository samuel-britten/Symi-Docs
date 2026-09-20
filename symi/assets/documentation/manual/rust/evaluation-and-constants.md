# Evaluation and constants

Symi distinguishes construction, symbolic execution, direct eager
evaluation, and host-language truth queries.

| Operation | Result |
|---|---|
| comparison or Boolean constructor | symbolic relation or formula |
| `evaluate_truth(predicate)` | exact three-valued host result |
| `predicate.execute()` | symbolic `logical_true`, `logical_false`, or an unevaluated expression |
| `simplify_logical(predicate)` | logical form simplification, not a host Boolean conversion |
| `limit(...)` | deferred limit expression |
| `evaluate_limit(...)` | explicitly eager limit computation |
| `derivative(...)` | deferred derivative expression |
| `differentiate(...)` | eager differentiation |
| `integral(...)` | deferred integral expression |
| `integrate(...)` | eager integration |

Three-valued results are `True`, `False`, or `None` in Python;
`true`, `false`, or `null` in the JavaScript facade; and `TruthValue` in the
Rust facade. Unknown means the proposition was not proved or disproved. It is
not false and does not indicate invalid input.

`execute` recursively evaluates executable symbolic forms. It is the uniform
way to evaluate a deferred derivative, integral, limit, sum, product, or
decidable predicate while retaining a symbolic result when exact
evaluation declines.

## Constants

| Constant | Python | JavaScript facade | Rust facade |
|---|---|---|---|
| pi | `symi.pi` / `context.pi` | `symi.pi` / `context.pi` | `session.pi()` |
| Euler's number | `symi.e` / `context.e` | `symi.e` / `context.e` | `session.e()` |
| Euler–Mascheroni | `symi.euler_gamma` | `symi.euler_gamma` | `session.euler_gamma()` |
| imaginary unit | `symi.imaginary_unit` | `symi.imaginary_unit` | `session.imaginary_unit()` |
| infinities and common sets | module/context properties | facade/context properties | session methods |

Python and JavaScript constants are immutable properties, not zero-argument
functions. Each access returns a handle in the owning default or explicit
context, so normal provenance rules still apply. Code using `pi()`, `e()`, or
other former module calls must remove the parentheses.

### pi

<a id="entry-presentation_rust_api_session_pi"></a>
<a id="placement-placement.rust.native_rust.api_session_pi.02cbb18c2379"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn pi(&self) -> Expression
```


The circle constant \(\pi\). Exact in every arithmetic operation; use
[`evaluate_numeric`](calculus.md#evaluate_numeric) for an arbitrary-precision
decimal value.

### e

<a id="entry-presentation_rust_api_session_e"></a>
<a id="placement-placement.rust.native_rust.api_session_e.b04b7e5a352f"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn e(&self) -> Expression
```


Euler's number \(e\), the base of the natural logarithm. `exp(1)` and this
constant are the same expression.

### euler_gamma

<a id="entry-presentation_rust_api_session_euler_gamma"></a>
<a id="placement-placement.rust.native_rust.api_session_euler_gamma.08f463463607"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn euler_gamma(&self) -> Expression
```


The Euler–Mascheroni constant \(\gamma\). It appears in closed forms produced by
[`digamma`](special-functions.md#digamma) and related special functions.

### imaginary_unit

<a id="entry-presentation_rust_api_session_imaginary_unit"></a>
<a id="placement-placement.rust.native_rust.api_session_imaginary_unit.881d435c4ff5"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn imaginary_unit(&self) -> Expression
```


The imaginary unit \(i\) with \(i^2 = -1\). Use
[`real_part`](trigonometric-complex-rewrites.md#real_part) and
[`imaginary_part`](trigonometric-complex-rewrites.md#imaginary_part) to
decompose a complex expression.

### infinity

<a id="entry-presentation_rust_api_session_infinity"></a>
<a id="placement-placement.rust.native_rust.api_session_infinity.f236decb2758"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn infinity(&self) -> Expression
```


Unsigned positive infinity \(\infty\). Negate it for \(-\infty\). Both are accepted
as bounds by [`integrate_definite`](calculus.md#integrate_definite) and as
approach points by [`limit`](calculus.md#limit).

The remaining constants are documented with the structures that use them:
[`logical_true`](logic.md#logical_true) and
[`logical_false`](logic.md#logical_false) with Boolean algebra, and
[`empty_set`](sets.md#empty_set), [`real_line`](sets.md#real_line),
[`complex_plane`](sets.md#complex_plane), and
[`integer_set`](sets.md#integer_set) with sets.

Exact structural decomposition uses `numerator_denominator`, `numerator`, and
`denominator`. Complex decomposition uses the existing complete names
`real_part` and `imaginary_part`; no `re` or `im` aliases are provided.

## Example

Construction, symbolic execution, and the exact host query are three separate steps.

```rust
use symi::api::prelude::*;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let session = Session::new();
    let relation = session.less_than(&session.rational(1, 3)?, &session.integer(1))?;

    println!("{}", relation);
    println!("{}", relation.execute()?);
    println!("{:?}", session.evaluate_truth(&relation)?);
    println!("{}", session.multiply(&session.pi(), &session.integer(2))?);
    Ok(())
}
```


## Additional API

### DEFAULT_PRECISION_BITS

<a id="entry-presentation_rust_api_default_precision_bits"></a>
<a id="placement-placement.rust.native_rust.api_analysis_default_precision_bits.cfb131343a71"></a>
<p class="symi-entry-owner">api::analysis constant</p>

```rust signature
pub const DEFAULT_PRECISION_BITS: u32 = numeric::DEFAULT_PRECISION_BITS;
```

The default working precision, in bits, of the inexact numeric evaluator.

