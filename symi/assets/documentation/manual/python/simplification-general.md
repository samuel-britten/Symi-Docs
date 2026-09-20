# General simplification

The general simplification ladder and the two rational-form operations it is
built on. Directed algebraic rewrites are on
[algebraic transforms](algebraic-transforms.md), and the fixed-contract
presentation passes are on
[specialized canonical forms](specialized-canonical-forms.md).

### simplify

<a id="entry-presentation_python_api_session_simplify"></a>
<a id="placement-placement.python.python_module.module_simplify.62fac3beaaac"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
simplify(input_expression: ExpressionLike) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms and variants</summary>

<a id="placement-placement.python.python_class.context_simplify.f7e121b1c5bc"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.simplify</code></p>

```python signature
simplify(input_expression: ExpressionLike) -> Expression
```

<a id="placement-placement.python.python_class.expression_simplify.38b2371c5a4e"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.simplify</code></p>

```python signature
simplify() -> Expression
```

<a id="placement-placement.python.python_class.assumptionscope_simplify.623d7017e342"></a>
<p class="symi-entry-owner">Variant using local assumptions — AssumptionScope method: <code>AssumptionScope.simplify</code></p>

```python signature
simplify(input_expression: ExpressionLike) -> Expression
```

</details>



The full heuristic simplification ladder: weighted-complexity-guided search
over rational normal form, radical denesting, trigonometric/log rewrites,
parity and absolute-value rules. The result is never accepted if its weighted
complexity grows. Principal square roots extract structural square content
only under a realness proof: `sqrt(x^2)` becomes `abs(x)` for real `x`, while
`sqrt(z^2)` remains unchanged for a default-complex `z`.

Declared symbol assumptions also enable a small set of branch-aware principal-power reductions.
For a negative real `z`, `sqrt(1 / z)` normalizes to `-z ** (-1 / 2)`; for a strictly positive
factor `p`, `(u * p) ** w` may extract `p ** w`; and a declared-integer exponent distributes over
a product. Each rule declines without its exact guard. `abs(a + i*b)` can reduce through exact,
wrapper-free Cartesian components only when its squared norm simplifies to a smaller form, such as
`abs(3 - sqrt(7) + i*sqrt(6*sqrt(7) - 15)) == 1`.

#### Radicals and perfect powers

These four rules are applied by ordinary construction, so they hold for every
expression the library builds, not only for the results of `simplify`.

A **positive rational base under a rational exponent** has its perfect-power
content removed exactly whenever the degree of that content divides the
exponent's reduced denominator. So `991026973 ** Fraction(1, 6)` becomes
`sqrt(997)`, because `991026973 = 997^3` and `3` divides `6`; the base is never
factored, only exact integer roots of the degrees the denominator admits are
tried. A rational base reduces only when its numerator and denominator are both
exact roots of the same degree. Content whose degree does not divide the
denominator is left to the ordinary surd canonicalizer, so `sqrt(8)` is still
`2*sqrt(2)`. Negative and non-real bases are excluded: `(-8) ** Fraction(1, 3)`
stays a principal power, because extracting an odd perfect power from a
negative base does not preserve the principal argument.

An **expanded binomial square** — a three-term sum such as `1 + 4*sqrt(r) + 4*r`
— is recognised only through an exact replayed witness: a candidate binomial is
built from the square roots of two of the terms and is accepted only when
expanding its square reproduces the original sum exactly. Nothing is matched by
pattern, so a middle term that differs by one is refused rather than repaired.

The witness proves squareness, not a branch. Its two consumers carry separate
guards:

- under a **square root**, `sqrt(u^2)` returns `abs(u)` for a witness proved
  real, and the ordinary exact sign procedure then folds the absolute value
  when the sign is decided; and
- under **any other exponent**, `(u^2) ** a` becomes `u ** (2*a)` only for a
  witness proved *strictly positive*, because the principal-power composition
  law is available only on the positive real axis. A real witness of unknown
  sign reaches the absolute value but not the nested power.

### cancel

<a id="entry-presentation_python_api_session_cancel"></a>
<a id="placement-placement.python.python_module.module_cancel.0b37541fa3f5"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
cancel(input_expression: ExpressionLike) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_cancel.3f7f3f6e0396"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.cancel</code></p>

```python signature
cancel(input_expression: ExpressionLike) -> Expression
```

<a id="placement-placement.python.python_class.expression_cancel.2f5d9901ac77"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.cancel</code></p>

```python signature
cancel() -> Expression
```

</details>



Rational normal form: write as a single fraction and divide out the
polynomial GCD of numerator and denominator.

### together

<a id="entry-presentation_python_api_session_together"></a>
<a id="placement-placement.python.python_module.module_together.dff63b559f8f"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
together(input_expression: ExpressionLike) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_together.1765f4684f37"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.together</code></p>

```python signature
together(input_expression: ExpressionLike) -> Expression
```

<a id="placement-placement.python.python_class.expression_together.94692be30b5a"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.together</code></p>

```python signature
together() -> Expression
```

</details>



Combine a sum of fractions over a common denominator. On Symi's
representation `together` and `cancel` coincide; both names exist because
they are distinct user intents.

## Example

The general ladder chooses a smaller equivalent form.

```python
import symi

x = symi.symbol("x")

print(symi.simplify(symi.sin(x) ** 2 + symi.cos(x) ** 2))
print(symi.together(1 / x + 1 / (x + 1)))
print(symi.cancel((x**2 - 1) / (x - 1)))
print(symi.simplify(symi.sqrt(3 + 2 * symi.sqrt(2))))
```

The radical rules are assumption-gated: the same expanded square reduces under
a positive parameter and stays untouched under an unrestricted one.

```python
import symi

r = symi.symbol("r", positive=True)
z = symi.symbol("z")

print(symi.integer(991026973) ** symi.rational(1, 6))
print(symi.integer(-8) ** symi.rational(1, 3))
print(symi.sqrt(1 + 4 * symi.sqrt(r) + 4 * r))
print(symi.sqrt(1 + 4 * symi.sqrt(z) + 4 * z))
print((1 + 4 * symi.sqrt(r) + 4 * r) ** symi.rational(-1, 2))
print(symi.sqrt(1 - 4 * symi.sqrt(r) + 4 * r))
```


### simplify_under_constraint

<a id="entry-presentation_python_api_session_simplify_under_constraint"></a>
<a id="placement-placement.python.python_module.module_simplify_under_constraint.24b8db7c930a"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
simplify_under_constraint(
    input_expression: ExpressionLike,
    constraint: ExpressionLike,
) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_simplify_under_constraint.f9667336f9db"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.simplify_under_constraint</code></p>

```python signature
simplify_under_constraint(
    input_expression: ExpressionLike,
    constraint: ExpressionLike,
) -> Expression
```

<a id="placement-placement.python.python_class.expression_simplify_under_constraint.2ab59e8546d9"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.simplify_under_constraint</code></p>

```python signature
simplify_under_constraint(constraint: ExpressionLike) -> Expression
```

</details>


Simplify under a local bounded logical constraint without changing symbol
assumptions. The constraint is in force for this call alone; nothing about it
survives into the context, so simplifying `sqrt(x**2)` under `x > 0` does not
make `x` positive for any later operation.
