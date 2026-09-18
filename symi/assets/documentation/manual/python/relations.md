# Relations and predicates

Relations construct symbolic formulas. They are distinct from host-language truth queries.

## Relations

Relation nodes are used as equations for `solve`/`solveset`, as piecewise
conditions, and as boolean-valued results.

### equal

<a id="placement-placement.python.python_class.context_equal.113873573950"></a>
`Context.equal(left, right)`

<a id="placement-placement.python.python_module.module_equal.326e1221df85"></a>
`symi.equal(left, right)`


### not_equal

<a id="placement-placement.python.python_class.context_not_equal.6276e7a52c0e"></a>
`Context.not_equal(left, right)`

<a id="placement-placement.python.python_module.module_not_equal.e47c657bdbb8"></a>
`symi.not_equal(left, right)`


### less_than

<a id="placement-placement.python.python_class.context_less_than.e74aa8108647"></a>
`Context.less_than(left, right)`

<a id="placement-placement.python.python_module.module_less_than.1210afe36701"></a>
`symi.less_than(left, right)`


### less_than_or_equal

<a id="placement-placement.python.python_class.context_less_than_or_equal.a048e14083e2"></a>
`Context.less_than_or_equal(left, right)`

<a id="placement-placement.python.python_module.module_less_than_or_equal.b08ae5aa68dc"></a>
`symi.less_than_or_equal(left, right)`


### greater_than

<a id="placement-placement.python.python_class.context_greater_than.5acfd54292ba"></a>
`Context.greater_than(left, right)`

<a id="placement-placement.python.python_module.module_greater_than.6e179ea266ec"></a>
`symi.greater_than(left, right)`


### greater_than_or_equal

<a id="placement-placement.python.python_class.context_greater_than_or_equal.01cfcff3fa0b"></a>
`Context.greater_than_or_equal(left, right)`

<a id="placement-placement.python.python_module.module_greater_than_or_equal.0519fede2619"></a>
`symi.greater_than_or_equal(left, right)`


## Example

Relations are symbolic expressions until they are evaluated.

```python
import symi

x = symi.symbol("x")
relation = symi.less_than(x, 1)

print(relation)
print(symi.evaluate_truth(relation))
print(symi.evaluate_truth(symi.equal(symi.rational(2, 4), symi.rational(1, 2))))
```

