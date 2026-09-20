# Relations and predicates

Relations construct symbolic formulas. They are distinct from host-language truth queries.

## Relations

Relation nodes are used as equations for `solve`/`solveset`, as piecewise
conditions, and as boolean-valued results.

### equal

<a id="entry-presentation_python_api_session_equal"></a>
<a id="placement-placement.python.python_module.module_equal.326e1221df85"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
equal(left: Any, right: Any) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_equal.113873573950"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.equal</code></p>

```python signature
equal(left: Any, right: Any) -> Expression
```

</details>


### not_equal

<a id="entry-presentation_python_api_session_not_equal"></a>
<a id="placement-placement.python.python_module.module_not_equal.e47c657bdbb8"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
not_equal(left: Any, right: Any) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_not_equal.6276e7a52c0e"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.not_equal</code></p>

```python signature
not_equal(left: Any, right: Any) -> Expression
```

</details>


### less_than

<a id="entry-presentation_python_api_session_less_than"></a>
<a id="placement-placement.python.python_module.module_less_than.1210afe36701"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
less_than(left: Any, right: Any) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_less_than.e74aa8108647"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.less_than</code></p>

```python signature
less_than(left: Any, right: Any) -> Expression
```

</details>


### less_than_or_equal

<a id="entry-presentation_python_api_session_less_than_or_equal"></a>
<a id="placement-placement.python.python_module.module_less_than_or_equal.b08ae5aa68dc"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
less_than_or_equal(left: Any, right: Any) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_less_than_or_equal.a048e14083e2"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.less_than_or_equal</code></p>

```python signature
less_than_or_equal(left: Any, right: Any) -> Expression
```

</details>


### greater_than

<a id="entry-presentation_python_api_session_greater_than"></a>
<a id="placement-placement.python.python_module.module_greater_than.6e179ea266ec"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
greater_than(left: Any, right: Any) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_greater_than.5acfd54292ba"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.greater_than</code></p>

```python signature
greater_than(left: Any, right: Any) -> Expression
```

</details>


### greater_than_or_equal

<a id="entry-presentation_python_api_session_greater_than_or_equal"></a>
<a id="placement-placement.python.python_module.module_greater_than_or_equal.0519fede2619"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
greater_than_or_equal(left: Any, right: Any) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_greater_than_or_equal.01cfcff3fa0b"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.greater_than_or_equal</code></p>

```python signature
greater_than_or_equal(left: Any, right: Any) -> Expression
```

</details>


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

