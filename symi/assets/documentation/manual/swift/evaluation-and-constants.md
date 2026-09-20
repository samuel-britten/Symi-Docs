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

<a id="entry-presentation_swift_api_session_pi"></a>
<a id="placement-placement.swift.swift_object.uniffisession_pi.a7ec0ad34999"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func pi() -> UniffiExpression
```


The circle constant \(\pi\). Exact in every arithmetic operation; use
[`evaluate_numeric`](calculus.md#evaluate_numeric) for an arbitrary-precision
decimal value.

### e

<a id="entry-presentation_swift_api_session_e"></a>
<a id="placement-placement.swift.swift_object.uniffisession_e.0a37694253d9"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func e() -> UniffiExpression
```


Euler's number \(e\), the base of the natural logarithm. `exp(1)` and this
constant are the same expression.

### euler_gamma

<a id="entry-presentation_swift_api_session_euler_gamma"></a>
<a id="placement-placement.swift.swift_object.uniffisession_eulergamma.e86e7eafac44"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func eulerGamma() -> UniffiExpression
```


The Euler–Mascheroni constant \(\gamma\). It appears in closed forms produced by
[`digamma`](special-functions.md#digamma) and related special functions.

### imaginary_unit

<a id="entry-presentation_swift_api_session_imaginary_unit"></a>
<a id="placement-placement.swift.swift_object.uniffisession_imaginaryunit.2eeb81ac47dc"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func imaginaryUnit() -> UniffiExpression
```


The imaginary unit \(i\) with \(i^2 = -1\). Use
[`real_part`](trigonometric-complex-rewrites.md#real_part) and
[`imaginary_part`](trigonometric-complex-rewrites.md#imaginary_part) to
decompose a complex expression.

### infinity

<a id="entry-presentation_swift_api_session_infinity"></a>
<a id="placement-placement.swift.swift_object.uniffisession_infinity.1ec42ec6dc32"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func infinity() -> UniffiExpression
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

