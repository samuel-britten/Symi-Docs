# Series and residues

### taylor_series

<a id="placement-placement.python.python_class.assumptionscope_taylor_series.5736549b4857"></a>
`AssumptionScope.taylor_series(input_expression, variable, expansion_point, truncation_order)`

<a id="placement-placement.python.python_class.context_taylor_series.751307bc3e60"></a>
`Context.taylor_series(input_expression, variable, expansion_point, order)`

<a id="placement-placement.python.python_class.expression_taylor_series.3fcdb5395680"></a>
`Expression.taylor_series(variable, expansion_point, order)`

<a id="placement-placement.python.python_module.module_taylor_series.0b4cd2addb32"></a>
`symi.taylor_series(input_expression, variable, expansion_point, order)`


Truncated Taylor expansion about `expansion_point`, keeping terms of degree
**strictly less than** `order` (the remainder is
\(O((x-a)^{\operatorname{order}})\). Returns the truncated polynomial, not a series object;
`order = 0` returns zero. Coefficients are computed exactly by repeated
symbolic differentiation.

### maclaurin_series

<a id="placement-placement.python.python_class.context_maclaurin_series.e8542b678e16"></a>
`Context.maclaurin_series(input_expression, variable, order)`

<a id="placement-placement.python.python_class.expression_maclaurin_series.5db0d2e0e680"></a>
`Expression.maclaurin_series(variable, order)`

<a id="placement-placement.python.python_module.module_maclaurin_series.5223942bba31"></a>
`symi.maclaurin_series(input_expression, variable, order)`


`taylor_series` specialised to expansion point 0.

### laurent_series

<a id="placement-placement.python.python_class.context_laurent_series.20501b6592dd"></a>
`Context.laurent_series(input_expression, variable, center, order)`

<a id="placement-placement.python.python_class.expression_laurent_series.1eabdc09f426"></a>
`Expression.laurent_series(variable, center, order)`

<a id="placement-placement.python.python_module.module_laurent_series.d619a8cfcae9"></a>
`symi.laurent_series(input_expression, variable, center, order)`


Truncated Laurent expansion at `center`: every \((\operatorname{variable} - \operatorname{center})^k\) term
with \(-m \le k < \operatorname{order}\), where `m` is the pole order. Analytic points degrade
to the Taylor expansion. At an essential singularity (where `pole_order`
declines) the result is an unevaluated `series_unevaluated(...)` placeholder,
because no finite truncation of the principal part is correct.

### residue

<a id="placement-placement.python.python_class.context_residue.8809e0c25093"></a>
`Context.residue(input_expression, variable, center)`

<a id="placement-placement.python.python_class.expression_residue.bf75be4b16ee"></a>
`Expression.residue(variable, center)`

<a id="placement-placement.python.python_module.module_residue.a318d22183f0"></a>
`symi.residue(input_expression, variable, center)`


Coefficient of \((\operatorname{variable} - \operatorname{center})^{-1}\) in the Laurent expansion at
`center`. Analytic/removable points give 0; simple poles use the limit of
\((x - c) f\); higher poles use the derivative formula. Essential singularities
return an unevaluated `residue_unevaluated(...)` placeholder. Rational
functions use exact polynomial valuations and formal series division, so
explicit algebraic centers do not need to occur as structural factors.

### pole_order

<a id="placement-placement.python.python_class.context_pole_order.fbcfe73bae51"></a>
`Context.pole_order(input_expression, variable, center)`

<a id="placement-placement.python.python_class.expression_pole_order.412f4c586190"></a>
`Expression.pole_order(variable, center)`

<a id="placement-placement.python.python_module.module_pole_order.9ba61a8cd618"></a>
`symi.pole_order(input_expression, variable, center)`


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

