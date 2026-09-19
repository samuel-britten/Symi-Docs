# Zero equivalence

### zero_equivalent


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


## Additional API

### zero_equivalent

<a id="entry-presentation_python_zero_equivalence_capability_contexts_zero_equivalent_api_session_zero_equivalent"></a>
<a id="placement-placement.python.python_module.module_zero_equivalent.aaeebc6d5dc1"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
zero_equivalent(
    input_expression: ExpressionLike,
    constraint: Optional[ExpressionLike] = None,
) -> str
```

Prove whether an expression is zero wherever it is defined, returning `"true"`, `"false"`, or `"unknown"`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_zero_equivalent.2f51d1ad2169"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.zero_equivalent</code></p>

```python signature
zero_equivalent(
    input_expression: ExpressionLike,
    constraint: Optional[ExpressionLike] = None,
) -> str
```

</details>

### zero_equivalent

<a id="entry-presentation_python_zero_equivalence_capability_contexts_zero_equivalent_api_expression_zero_equivalent"></a>
<a id="placement-placement.python.python_class.expression_zero_equivalent.d00f93757677"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
zero_equivalent(constraint: Optional[ExpressionLike] = None) -> str
```

Prove whether this expression is zero wherever it is defined, returning `"true"`, `"false"`, or `"unknown"`.

