# Series and residues

### taylor_series

<a id="entry-presentation_python_api_session_taylor_series"></a>
<a id="placement-placement.python.python_module.module_taylor_series.0b4cd2addb32"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
taylor_series(
    input_expression: ExpressionLike,
    variable: VariableLike,
    expansion_point: ExpressionLike,
    order: int,
) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms and variants</summary>

<a id="placement-placement.python.python_class.context_taylor_series.751307bc3e60"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.taylor_series</code></p>

```python signature
taylor_series(
    input_expression: ExpressionLike,
    variable: VariableLike,
    expansion_point: ExpressionLike,
    order: int,
) -> Expression
```

<a id="placement-placement.python.python_class.expression_taylor_series.3fcdb5395680"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.taylor_series</code></p>

```python signature
taylor_series(
    variable: VariableLike,
    expansion_point: ExpressionLike,
    order: int,
) -> Expression
```

<a id="placement-placement.python.python_class.assumptionscope_taylor_series.5736549b4857"></a>
<p class="symi-entry-owner">Variant using local assumptions — AssumptionScope method: <code>AssumptionScope.taylor_series</code></p>

```python signature
taylor_series(
    input_expression: ExpressionLike,
    variable: VariableLike,
    expansion_point: ExpressionLike,
    truncation_order: int,
) -> Expression
```

</details>


Truncated Taylor expansion about `expansion_point`, keeping terms of degree
**strictly less than** `order` (the remainder is
\(O((x-a)^{\operatorname{order}})\). Returns the truncated polynomial, not a series object;
`order = 0` returns zero. Coefficients are computed exactly by repeated
symbolic differentiation.

### maclaurin_series

<a id="entry-presentation_python_api_session_maclaurin_series"></a>
<a id="placement-placement.python.python_module.module_maclaurin_series.5223942bba31"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
maclaurin_series(
    input_expression: ExpressionLike,
    variable: VariableLike,
    order: int,
) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_maclaurin_series.e8542b678e16"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.maclaurin_series</code></p>

```python signature
maclaurin_series(
    input_expression: ExpressionLike,
    variable: VariableLike,
    order: int,
) -> Expression
```

<a id="placement-placement.python.python_class.expression_maclaurin_series.5db0d2e0e680"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.maclaurin_series</code></p>

```python signature
maclaurin_series(variable: VariableLike, order: int) -> Expression
```

</details>


`taylor_series` specialised to expansion point 0.

### laurent_series

<a id="entry-presentation_python_api_session_laurent_series"></a>
<a id="placement-placement.python.python_module.module_laurent_series.d619a8cfcae9"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
laurent_series(
    input_expression: ExpressionLike,
    variable: VariableLike,
    center: ExpressionLike,
    order: int,
) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_laurent_series.20501b6592dd"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.laurent_series</code></p>

```python signature
laurent_series(
    input_expression: ExpressionLike,
    variable: VariableLike,
    center: ExpressionLike,
    order: int,
) -> Expression
```

<a id="placement-placement.python.python_class.expression_laurent_series.1eabdc09f426"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.laurent_series</code></p>

```python signature
laurent_series(
    variable: VariableLike,
    center: ExpressionLike,
    order: int,
) -> Expression
```

</details>


Truncated Laurent expansion at `center`: every \((\operatorname{variable} - \operatorname{center})^k\) term
with \(-m \le k < \operatorname{order}\), where `m` is the pole order. Analytic points degrade
to the Taylor expansion. At an essential singularity (where `pole_order`
declines) the result is an unevaluated `series_unevaluated(...)` placeholder,
because no finite truncation of the principal part is correct.

### residue

<a id="entry-presentation_python_api_session_residue"></a>
<a id="placement-placement.python.python_module.module_residue.a318d22183f0"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
residue(
    input_expression: ExpressionLike,
    variable: Any,
    center: Any,
) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_residue.8809e0c25093"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.residue</code></p>

```python signature
residue(
    input_expression: ExpressionLike,
    variable: Any,
    center: Any,
) -> Expression
```

<a id="placement-placement.python.python_class.expression_residue.bf75be4b16ee"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.residue</code></p>

```python signature
residue(variable: Any, center: Any) -> Expression
```

</details>


Coefficient of \((\operatorname{variable} - \operatorname{center})^{-1}\) in the Laurent expansion at
`center`. Analytic/removable points give 0; simple poles use the limit of
\((x - c) f\); higher poles use the derivative formula. Essential singularities
return an unevaluated `residue_unevaluated(...)` placeholder. Rational
functions use exact polynomial valuations and formal series division, so
explicit algebraic centers do not need to occur as structural factors.

### pole_order

<a id="entry-presentation_python_api_session_pole_order"></a>
<a id="placement-placement.python.python_module.module_pole_order.9ba61a8cd618"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
pole_order(
    input_expression: ExpressionLike,
    variable: VariableLike,
    center: ExpressionLike,
) -> Optional[int]
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_pole_order.fbcfe73bae51"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.pole_order</code></p>

```python signature
pole_order(
    input_expression: ExpressionLike,
    variable: VariableLike,
    center: ExpressionLike,
) -> Optional[int]
```

<a id="placement-placement.python.python_class.expression_pole_order.412f4c586190"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.pole_order</code></p>

```python signature
pole_order(
    variable: VariableLike,
    center: ExpressionLike,
) -> Optional[int]
```

</details>


Order of the singularity at `center`: `0` for analytic/removable points,
\(m \ge 1\) for a pole of order \(m\). Returns `None` (`undefined` in JS) when no
order \(\leq 16\) can be certified — the essential-singularity / undecidable
verdict. **Notes:** this is the one series entry returning a plain integer,
mirroring the core classifier; it never returns an unevaluated form. For a
rational function at an exact algebraic center, the order is obtained from
the square-free multiplicities of its numerator and denominator.

## Example

Series expansion, residues, and closed-form summation.

```python
import symi

x = symi.symbol("x")
k = symi.symbol("k", integer=True)
n = symi.symbol("n", integer=True)

print(symi.taylor_series(symi.exp(x), "x", 0, 4))
print(symi.residue(1 / (x**2 + 1), "x", symi.imaginary_unit))
print(symi.execute(symi.summation(k, "k", 0, n)))
```

