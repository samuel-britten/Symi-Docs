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

<a id="entry-presentation_python_evaluation_and_constants_capability_constants_pi_api_session_pi"></a>
<a id="placement-placement.python.python_module.module_pi.b74b97bbdd43"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
pi: expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_pi.93793c5ebb94"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.pi</code></p>

```python signature
pi: Expression
```

</details>


The circle constant \(\pi\). Exact in every arithmetic operation; use
[`evaluate_numeric`](calculus.md#evaluate_numeric) for an arbitrary-precision
decimal value.

### e

<a id="entry-presentation_python_evaluation_and_constants_capability_constants_e_api_session_e"></a>
<a id="placement-placement.python.python_module.module_e.ca9b49b3b5c4"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
e: expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_e.0b54eb1f2bd4"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.e</code></p>

```python signature
e: Expression
```

</details>


Euler's number \(e\), the base of the natural logarithm. `exp(1)` and this
constant are the same expression.

### euler_gamma

<a id="entry-presentation_python_evaluation_and_constants_capability_constants_euler_gamma_api_session_euler_gamma"></a>
<a id="placement-placement.python.python_module.module_euler_gamma.4e84cb2dd7bd"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
euler_gamma: expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_euler_gamma.8bc94932469c"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.euler_gamma</code></p>

```python signature
euler_gamma: Expression
```

</details>


The Euler–Mascheroni constant \(\gamma\). It appears in closed forms produced by
[`digamma`](special-functions.md#digamma) and related special functions.

### imaginary_unit

<a id="entry-presentation_python_evaluation_and_constants_capability_constants_imaginary_unit_api_session_imaginary_unit"></a>
<a id="placement-placement.python.python_module.module_imaginary_unit.be4f2bad8c68"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
imaginary_unit: expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_imaginary_unit.5b7cac4e8c05"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.imaginary_unit</code></p>

```python signature
imaginary_unit: Expression
```

</details>


The imaginary unit \(i\) with \(i^2 = -1\). Use
[`real_part`](trigonometric-complex-rewrites.md#real_part) and
[`imaginary_part`](trigonometric-complex-rewrites.md#imaginary_part) to
decompose a complex expression.

### infinity

<a id="entry-presentation_python_evaluation_and_constants_capability_constants_infinity_api_session_infinity"></a>
<a id="placement-placement.python.python_module.module_infinity.078e1f396c68"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
infinity: expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_infinity.ee6849fe5746"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.infinity</code></p>

```python signature
infinity: Expression
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

```python
import symi

x = symi.symbol("x")
relation = symi.less_than(symi.rational(1, 3), 1)

print(relation)
print(relation.execute())
print(symi.evaluate_truth(relation))
print(symi.evaluate_truth(symi.less_than(x, 1)))
print(symi.pi * 2)
```

