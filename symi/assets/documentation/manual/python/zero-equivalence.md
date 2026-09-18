# Zero equivalence

### zero_equivalent

<a id="placement-placement.python.python_class.context_zero_equivalent.2f51d1ad2169"></a>
`Context.zero_equivalent(input_expression, constraint=None)`

<a id="placement-placement.python.python_class.expression_zero_equivalent.d00f93757677"></a>
`Expression.zero_equivalent(constraint=None)`

<a id="placement-placement.python.python_module.module_zero_equivalent.aaeebc6d5dc1"></a>
`symi.zero_equivalent(input_expression, constraint=None)`



Proves whether an expression is zero at every point where the input expression is defined within
the declared region. `"true"` is an exact theorem replay, `"false"` has an exact counterexample,
and `"unknown"` is an honest decline. Numeric evaluation is never proof evidence.

The optional logical `constraint` is combined with existing symbol assumptions without changing
them. A `"true"` result does not mean `simplify(expression)` may replace the expression by the
literal `0`: that stricter transformation also needs the expression to be defined everywhere in
the declared region.

The initial admitted routes are the principal-branch Gudermannian identity for a real variable on
`-pi/2 < x < pi/2`, and the Riemann zeta reflection relation. The latter remains a nonzero-shaped
expression under ordinary simplification because its written factors have exceptional points.


```python
import symi

context = symi.Context()
relation = context.parse("2^(1-z)*cos(pi*z/2)*gamma(z)*zeta(z) - pi^z*zeta(1-z)")
print(context.zero_equivalent(relation))
```

