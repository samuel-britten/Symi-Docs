# Sets

Sets are ordinary `Expression` values; constructors route through
auto-simplification (degenerate intervals collapse, unions splice and
deduplicate, etc.). Take results apart with the structural accessors on the
expressions page.

### interval

<a id="entry-presentation_python_sets_capability_discrete_mathematics_interval_api_sets_session_interval"></a>
<a id="placement-placement.python.python_module.module_interval.321e53c8b2dc"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
interval(
    lower: ExpressionLike,
    upper: ExpressionLike,
    lower_open: bool = False,
    upper_open: bool = False,
) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_interval.b521c8b318eb"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.interval</code></p>

```python signature
interval(
    lower: ExpressionLike,
    upper: ExpressionLike,
    lower_open: bool = False,
    upper_open: bool = False,
) -> Expression
```

</details>


Real-line interval. Closed by default; endpoints at infinity are forced
open. Degenerate shapes collapse (empty interval \(\to\) empty set, single point \(\to\)
finite set, \((-\infty, \infty)\to\) real line).

### real_line

<a id="entry-presentation_python_sets_capability_discrete_mathematics_real_line_api_session_real_line"></a>
<a id="placement-placement.python.python_module.module_real_line.db620c0c71e9"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
real_line: expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_real_line.5cf887e6a01d"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.real_line</code></p>

```python signature
real_line: Expression
```

</details>


The set \(\mathbb{R}\).

### complex_plane

<a id="entry-presentation_python_sets_capability_discrete_mathematics_complex_plane_api_session_complex_plane"></a>
<a id="placement-placement.python.python_module.module_complex_plane.aad43e847872"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
complex_plane: expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_complex_plane.69efb1c1c303"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.complex_plane</code></p>

```python signature
complex_plane: Expression
```

</details>


The set \(\mathbb{C}\) — the ambient universe, and the domain a variable ranges over when it
carries no realness assumption.

### integer_set

<a id="entry-presentation_python_sets_capability_discrete_mathematics_integer_set_api_session_integer_set"></a>
<a id="placement-placement.python.python_module.module_integer_set.612a8761539e"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
integer_set: expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_integer_set.95cf130dd07a"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.integer_set</code></p>

```python signature
integer_set: Expression
```

</details>


The set \(\mathbb{Z}\).

### empty_set

<a id="entry-presentation_python_sets_capability_discrete_mathematics_empty_set_api_session_empty_set"></a>
<a id="placement-placement.python.python_module.module_empty_set.031dbed53002"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
empty_set: expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_empty_set.039059383aa5"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.empty_set</code></p>

```python signature
empty_set: Expression
```

</details>


The empty set \(\varnothing\).

### finite_set

<a id="entry-presentation_python_sets_capability_discrete_mathematics_finite_set_api_session_finite_set"></a>
<a id="placement-placement.python.python_module.module_finite_set.36a203ac265d"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
finite_set(elements: Any) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_finite_set.2461ab4bb6d2"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.finite_set</code></p>

```python signature
finite_set(elements: Any) -> Expression
```

</details>


Finite set; elements are deduplicated and canonically ordered. An empty list
gives the empty set.

### set_union

<a id="entry-presentation_python_sets_capability_discrete_mathematics_set_union_api_sets_session_set_union"></a>
<a id="placement-placement.python.python_module.module_set_union.d504e85aca47"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
set_union(set_a: ExpressionLike, set_b: ExpressionLike) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_set_union.ec45d9337ffd"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.set_union</code></p>

```python signature
set_union(set_a: ExpressionLike, set_b: ExpressionLike) -> Expression
```

</details>


Union, computed eagerly where the structural rules allow (overlapping or
touching interval pairs merge; nested unions splice, \(\varnothing\) drops, \(\mathbb{R}\) absorbs);
otherwise the structural `set_union` node.

### set_intersection

<a id="entry-presentation_python_sets_capability_discrete_mathematics_set_intersection_api_sets_session_set_intersection"></a>
<a id="placement-placement.python.python_module.module_set_intersection.6b4737780adb"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
set_intersection(
    set_a: ExpressionLike,
    set_b: ExpressionLike,
) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_set_intersection.472a09b9587f"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.set_intersection</code></p>

```python signature
set_intersection(
    set_a: ExpressionLike,
    set_b: ExpressionLike,
) -> Expression
```

</details>


Intersection, computed eagerly where the structural rules allow (interval
pairs, finite-set membership filtering; \(\mathbb{R}\) drops, \(\varnothing\) absorbs); otherwise the
structural `set_intersection` node.

### set_complement

<a id="entry-presentation_python_sets_capability_discrete_mathematics_set_complement_api_sets_session_set_complement"></a>
<a id="placement-placement.python.python_module.module_set_complement.f606e0cf50e3"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
set_complement(
    set_a: ExpressionLike,
    set_b: ExpressionLike,
) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_set_complement.e014b0241cf8"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.set_complement</code></p>

```python signature
set_complement(
    set_a: ExpressionLike,
    set_b: ExpressionLike,
) -> Expression
```

</details>


The relative complement \(a \setminus b\).

### image_set

<a id="entry-presentation_python_sets_capability_discrete_mathematics_image_set_api_sets_session_image_set"></a>
<a id="placement-placement.python.python_module.module_image_set.55f32b042201"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
image_set(
    lambda_expression: ExpressionLike,
    variable: VariableLike,
    domain: ExpressionLike,
) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_image_set.dfa323774f39"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.image_set</code></p>

```python signature
image_set(
    lambda_expression: ExpressionLike,
    variable: VariableLike,
    domain: ExpressionLike,
) -> Expression
```

</details>


The set \(\{\operatorname{lambda\_expression} : \operatorname{variable} \in \operatorname{domain}\}\); `variable` is a binder
over `lambda_expression`. Finite domains are enumerated element-wise at
construction.

### condition_set

<a id="entry-presentation_python_sets_capability_discrete_mathematics_condition_set_api_sets_session_condition_set"></a>
<a id="placement-placement.python.python_module.module_condition_set.44c87329a459"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
condition_set(
    variable: VariableLike,
    condition: ExpressionLike,
    domain: ExpressionLike,
) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_condition_set.c049b7dcd734"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.condition_set</code></p>

```python signature
condition_set(
    variable: VariableLike,
    condition: ExpressionLike,
    domain: ExpressionLike,
) -> Expression
```

</details>


The set \(\{\operatorname{variable} \in \operatorname{domain} : \operatorname{condition}\}\). This is also `solveset`'s honest
"unsolved" residue shape.

### is_member

<a id="entry-presentation_python_sets_capability_discrete_mathematics_is_member_api_sets_session_is_member"></a>
<a id="placement-placement.python.python_module.module_is_member.7226309c7029"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
is_member(
    element: ExpressionLike,
    set: ExpressionLike,
) -> Optional[bool]
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_is_member.db3842495732"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.is_member</code></p>

```python signature
is_member(
    element: ExpressionLike,
    set: ExpressionLike,
) -> Optional[bool]
```

</details>


Three-valued membership: `True` only on structural proof, `False` only on a
structural counterexample, `None` otherwise. Covers \(\varnothing\), \(\mathbb{R}\), finite sets,
intervals, unions, intersections, complements.

### is_subset

<a id="entry-presentation_python_sets_capability_discrete_mathematics_is_subset_api_sets_session_is_subset"></a>
<a id="placement-placement.python.python_module.module_is_subset.c736daad2ea6"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
is_subset(
    set_a: ExpressionLike,
    set_b: ExpressionLike,
) -> Optional[bool]
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_is_subset.bb5f672f5888"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.is_subset</code></p>

```python signature
is_subset(
    set_a: ExpressionLike,
    set_b: ExpressionLike,
) -> Optional[bool]
```

</details>


Three-valued subset query: \(\varnothing \subseteq\) anything, structural equality, finite-set
element checks, interval-in-interval endpoint tests; `None` otherwise.

### enumerate_set_in_interval

<a id="entry-presentation_python_sets_capability_discrete_mathematics_enumerate_set_in_interval_api_sets_session_enumerate_set_in_interval"></a>
<a id="placement-placement.python.python_module.module_enumerate_set_in_interval.abc35f2617b9"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
enumerate_set_in_interval(
    set: ExpressionLike,
    lower: ExpressionLike,
    upper: ExpressionLike,
    lower_inclusive: bool = True,
    upper_inclusive: bool = True,
    limit: Optional[int] = None,
) -> Any
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_enumerate_set_in_interval.6f907bbd66be"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.enumerate_set_in_interval</code></p>

```python signature
enumerate_set_in_interval(
    set: ExpressionLike,
    lower: ExpressionLike,
    upper: ExpressionLike,
    lower_inclusive: bool = True,
    upper_inclusive: bool = True,
    limit: Optional[int] = None,
) -> Any
```

</details>


Exact elements of a set inside \([\operatorname{lower}, \operatorname{upper}]\), in increasing
order, as `{"outcome": str, "elements": list[Expression]}`. `outcome` is `"complete"` when those
are exactly the elements in the interval, `"truncated"` when `limit` cut the list short (the
family is still solved), and `"declined"` when the set's shape is not enumerable — never a
licence to approximate. Handles finite sets, affine image sets over \(\mathbb{Z}\), unions,
complements, and the unevaluated `set_intersection(interval, image_set)` shape `solveset_in_domain`
returns for a lattice too wide to materialize. `limit` defaults to 64. WASM returns a
`SetEnumeration` object with `outcome` and `elements` getters.

## Example

Set construction and membership over exact elements.

```python
import symi

x = symi.symbol("x")
left = symi.finite_set([1, 2, 3])
right = symi.finite_set([2, 3, 4])

print(symi.set_union(left, right))
print(symi.set_intersection(left, right))
print(symi.is_member(2, left))
print(symi.solveset(symi.sin(x), "x"))
```

