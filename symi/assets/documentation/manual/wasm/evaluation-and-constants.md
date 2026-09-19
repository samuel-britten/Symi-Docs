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

<a id="entry-presentation_wasm_evaluation_and_constants_capability_constants_pi_api_session_pi"></a>
<a id="placement-placement.wasm.wasm_module.module_pi.0a6bfb246d23"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
pi(): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_pi.eadf6aa4f2e3"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.pi</code></p>

```typescript signature
readonly pi: Expression
```

<a id="placement-placement.wasm.wasm_class.context_pi.a8999ab0df5a"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.pi</code></p>

```typescript signature
readonly pi: Expression
```

<a id="placement-placement.wasm.javascript_facade.symifacade_pi.650aba83836c"></a>
<p class="symi-entry-owner">SymiFacade property: <code>SymiFacade.pi</code></p>

```typescript signature
readonly pi: Expression
```

</details>


The circle constant \(\pi\). Exact in every arithmetic operation; use
[`evaluate_numeric`](calculus.md#evaluate_numeric) for an arbitrary-precision
decimal value.

### e

<a id="entry-presentation_wasm_evaluation_and_constants_capability_constants_e_api_session_e"></a>
<a id="placement-placement.wasm.wasm_module.module_e.52105aa78b4d"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
e(): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_e.44cbd15853e1"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.e</code></p>

```typescript signature
readonly e: Expression
```

<a id="placement-placement.wasm.wasm_class.context_e.8c51aa37c2b8"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.e</code></p>

```typescript signature
readonly e: Expression
```

<a id="placement-placement.wasm.javascript_facade.symifacade_e.e814399adf66"></a>
<p class="symi-entry-owner">SymiFacade property: <code>SymiFacade.e</code></p>

```typescript signature
readonly e: Expression
```

</details>


Euler's number \(e\), the base of the natural logarithm. `exp(1)` and this
constant are the same expression.

### euler_gamma

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.euler_gamma`](/symi/python/evaluation-and-constants#euler_gamma) in Python, [`UniffiSession.eulerGamma`](/symi/kotlin/evaluation-and-constants#euler_gamma) in Kotlin, [`UniffiSession.eulerGamma`](/symi/swift/evaluation-and-constants#euler_gamma) in Swift, [`api::Session::euler_gamma`](/symi/rust/evaluation-and-constants#euler_gamma) in Rust.*


The Euler–Mascheroni constant \(\gamma\). It appears in closed forms produced by
[`digamma`](special-functions.md#digamma) and related special functions.

### imaginary_unit

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.imaginary_unit`](/symi/python/evaluation-and-constants#imaginary_unit) in Python, [`UniffiSession.imaginaryUnit`](/symi/kotlin/evaluation-and-constants#imaginary_unit) in Kotlin, [`UniffiSession.imaginaryUnit`](/symi/swift/evaluation-and-constants#imaginary_unit) in Swift, [`api::Session::imaginary_unit`](/symi/rust/evaluation-and-constants#imaginary_unit) in Rust.*


The imaginary unit \(i\) with \(i^2 = -1\). Use
[`real_part`](trigonometric-complex-rewrites.md#real_part) and
[`imaginary_part`](trigonometric-complex-rewrites.md#imaginary_part) to
decompose a complex expression.

### infinity

<a id="entry-presentation_wasm_evaluation_and_constants_capability_constants_infinity_api_session_infinity"></a>
<a id="placement-placement.wasm.wasm_module.module_infinity.d225021217a9"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
infinity(): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_infinity.43c79a8d626e"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.infinity</code></p>

```typescript signature
readonly infinity: Expression
```

<a id="placement-placement.wasm.wasm_class.context_infinity.bfd6a5bf4701"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.infinity</code></p>

```typescript signature
readonly infinity: Expression
```

<a id="placement-placement.wasm.javascript_facade.symifacade_infinity.bf44254ac060"></a>
<p class="symi-entry-owner">SymiFacade property: <code>SymiFacade.infinity</code></p>

```typescript signature
readonly infinity: Expression
```

</details>


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

```javascript
const relation = symi.lessThan(symi.rational(1n, 3n), 1);

console.log(relation.toString());
console.log(relation.execute().toString());
console.log(symi.evaluateTruth(relation));
console.log(symi.pi.multiply(2).toString());
```

