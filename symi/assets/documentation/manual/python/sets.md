# Sets

Sets are ordinary `Expression` values; constructors route through
auto-simplification (degenerate intervals collapse, unions splice and
deduplicate, etc.). Take results apart with the structural accessors on the
expressions page.

### interval

<a id="placement-placement.python.python_class.context_interval.b521c8b318eb"></a>
`Context.interval(lower, upper, lower_open = False, upper_open = False)`

<a id="placement-placement.python.python_module.module_interval.321e53c8b2dc"></a>
`symi.interval(lower, upper, lower_open = False, upper_open = False)`


Real-line interval. Closed by default; endpoints at infinity are forced
open. Degenerate shapes collapse (empty interval \(\to\) empty set, single point \(\to\)
finite set, \((-\infty, \infty)\to\) real line).

### real_line

<a id="placement-placement.python.python_class.context_real_line.5cf887e6a01d"></a>
`Context.real_line`

<a id="placement-placement.python.python_module.module_real_line.db620c0c71e9"></a>
`symi.real_line`


The set \(\mathbb{R}\).

### complex_plane

<a id="placement-placement.python.python_class.context_complex_plane.69efb1c1c303"></a>
`Context.complex_plane`

<a id="placement-placement.python.python_module.module_complex_plane.aad43e847872"></a>
`symi.complex_plane`


The set \(\mathbb{C}\) — the ambient universe, and the domain a variable ranges over when it
carries no realness assumption.

### integer_set

<a id="placement-placement.python.python_class.context_integer_set.95cf130dd07a"></a>
`Context.integer_set`

<a id="placement-placement.python.python_module.module_integer_set.612a8761539e"></a>
`symi.integer_set`


The set \(\mathbb{Z}\).

### empty_set

<a id="placement-placement.python.python_class.context_empty_set.039059383aa5"></a>
`Context.empty_set`

<a id="placement-placement.python.python_module.module_empty_set.031dbed53002"></a>
`symi.empty_set`


The empty set \(\varnothing\).

### finite_set

<a id="placement-placement.python.python_class.context_finite_set.2461ab4bb6d2"></a>
`Context.finite_set(elements)`

<a id="placement-placement.python.python_module.module_finite_set.36a203ac265d"></a>
`symi.finite_set(elements)`


Finite set; elements are deduplicated and canonically ordered. An empty list
gives the empty set.

### set_union

<a id="placement-placement.python.python_class.context_set_union.ec45d9337ffd"></a>
`Context.set_union(set_a, set_b)`

<a id="placement-placement.python.python_module.module_set_union.d504e85aca47"></a>
`symi.set_union(set_a, set_b)`


Union, computed eagerly where the structural rules allow (overlapping or
touching interval pairs merge; nested unions splice, \(\varnothing\) drops, \(\mathbb{R}\) absorbs);
otherwise the structural `set_union` node.

### set_intersection

<a id="placement-placement.python.python_class.context_set_intersection.472a09b9587f"></a>
`Context.set_intersection(set_a, set_b)`

<a id="placement-placement.python.python_module.module_set_intersection.6b4737780adb"></a>
`symi.set_intersection(set_a, set_b)`


Intersection, computed eagerly where the structural rules allow (interval
pairs, finite-set membership filtering; \(\mathbb{R}\) drops, \(\varnothing\) absorbs); otherwise the
structural `set_intersection` node.

### set_complement

<a id="placement-placement.python.python_class.context_set_complement.e014b0241cf8"></a>
`Context.set_complement(set_a, set_b)`

<a id="placement-placement.python.python_module.module_set_complement.f606e0cf50e3"></a>
`symi.set_complement(set_a, set_b)`


The relative complement \(a \setminus b\).

### image_set

<a id="placement-placement.python.python_class.context_image_set.dfa323774f39"></a>
`Context.image_set(lambda_expression, variable, domain)`

<a id="placement-placement.python.python_module.module_image_set.55f32b042201"></a>
`symi.image_set(lambda_expression, variable, domain)`


The set \(\{\operatorname{lambda\_expression} : \operatorname{variable} \in \operatorname{domain}\}\); `variable` is a binder
over `lambda_expression`. Finite domains are enumerated element-wise at
construction.

### condition_set

<a id="placement-placement.python.python_class.context_condition_set.c049b7dcd734"></a>
`Context.condition_set(variable, condition, domain)`

<a id="placement-placement.python.python_module.module_condition_set.44c87329a459"></a>
`symi.condition_set(variable, condition, domain)`


The set \(\{\operatorname{variable} \in \operatorname{domain} : \operatorname{condition}\}\). This is also `solveset`'s honest
"unsolved" residue shape.

### is_member

<a id="placement-placement.python.python_class.context_is_member.db3842495732"></a>
`Context.is_member(element, set)`

<a id="placement-placement.python.python_module.module_is_member.7226309c7029"></a>
`symi.is_member(element, set)`


Three-valued membership: `True` only on structural proof, `False` only on a
structural counterexample, `None` otherwise. Covers \(\varnothing\), \(\mathbb{R}\), finite sets,
intervals, unions, intersections, complements.

### is_subset

<a id="placement-placement.python.python_class.context_is_subset.bb5f672f5888"></a>
`Context.is_subset(set_a, set_b)`

<a id="placement-placement.python.python_module.module_is_subset.c736daad2ea6"></a>
`symi.is_subset(set_a, set_b)`


Three-valued subset query: \(\varnothing \subseteq\) anything, structural equality, finite-set
element checks, interval-in-interval endpoint tests; `None` otherwise.

### enumerate_set_in_interval

<a id="placement-placement.python.python_class.context_enumerate_set_in_interval.6f907bbd66be"></a>
`Context.enumerate_set_in_interval(set, lower, upper, lower_inclusive=True, upper_inclusive=True, limit=None)`

<a id="placement-placement.python.python_module.module_enumerate_set_in_interval.abc35f2617b9"></a>
`symi.enumerate_set_in_interval(set, lower, upper, lower_inclusive=True, upper_inclusive=True, limit=None)`


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

