# Sets

Sets are ordinary `Expression` values; constructors route through
auto-simplification (degenerate intervals collapse, unions splice and
deduplicate, etc.). Take results apart with the structural accessors on the
expressions page.

### interval

<a id="entry-presentation_wasm_api_session_interval"></a>
<a id="placement-placement.wasm.wasm_module.module_interval.9788b55cf0be"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
interval(
    lower: Expression,
    upper: Expression,
    lower_open?: boolean | null,
    upper_open?: boolean | null,
): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_interval.abdb397ea405"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.interval</code></p>

```typescript signature
interval(
    lower: Expression,
    upper: Expression,
    lower_open?: boolean | null,
    upper_open?: boolean | null,
): Expression
```

</details>


Real-line interval. Closed by default; endpoints at infinity are forced
open. Degenerate shapes collapse (empty interval \(\to\) empty set, single point \(\to\)
finite set, \((-\infty, \infty)\to\) real line).

### real_line

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.real_line`](/symi/python/sets#real_line) in Python, [`UniffiSession.realLine`](/symi/kotlin/sets#real_line) in Kotlin, [`UniffiSession.realLine`](/symi/swift/sets#real_line) in Swift, [`api::Session::real_line`](/symi/rust/sets#real_line) in Rust.*


The set \(\mathbb{R}\).

### complex_plane

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.complex_plane`](/symi/python/sets#complex_plane) in Python, [`UniffiSession.complexPlane`](/symi/kotlin/sets#complex_plane) in Kotlin, [`UniffiSession.complexPlane`](/symi/swift/sets#complex_plane) in Swift, [`api::Session::complex_plane`](/symi/rust/sets#complex_plane) in Rust.*


The set \(\mathbb{C}\) — the ambient universe, and the domain a variable ranges over when it
carries no realness assumption.

### integer_set

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.integer_set`](/symi/python/sets#integer_set) in Python, [`UniffiSession.integerSet`](/symi/kotlin/sets#integer_set) in Kotlin, [`UniffiSession.integerSet`](/symi/swift/sets#integer_set) in Swift, [`api::Session::integer_set`](/symi/rust/sets#integer_set) in Rust.*


The set \(\mathbb{Z}\).

### empty_set

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.empty_set`](/symi/python/sets#empty_set) in Python, [`UniffiSession.emptySet`](/symi/kotlin/sets#empty_set) in Kotlin, [`UniffiSession.emptySet`](/symi/swift/sets#empty_set) in Swift, [`api::Session::empty_set`](/symi/rust/sets#empty_set) in Rust.*


The empty set \(\varnothing\).

### finite_set

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.finite_set`](/symi/python/sets#finite_set) in Python, [`UniffiSession.finiteSet`](/symi/kotlin/sets#finite_set) in Kotlin, [`UniffiSession.finiteSet`](/symi/swift/sets#finite_set) in Swift, [`api::Session::finite_set`](/symi/rust/sets#finite_set) in Rust.*


Finite set; elements are deduplicated and canonically ordered. An empty list
gives the empty set.

### set_union

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.set_union`](/symi/python/sets#set_union) in Python, [`UniffiSession.setUnion`](/symi/kotlin/sets#set_union) in Kotlin, [`UniffiSession.setUnion`](/symi/swift/sets#set_union) in Swift, [`api::sets::Session::set_union`](/symi/rust/sets#set_union) in Rust.*


Union, computed eagerly where the structural rules allow (overlapping or
touching interval pairs merge; nested unions splice, \(\varnothing\) drops, \(\mathbb{R}\) absorbs);
otherwise the structural `set_union` node.

### set_intersection

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.set_intersection`](/symi/python/sets#set_intersection) in Python, [`UniffiSession.setIntersection`](/symi/kotlin/sets#set_intersection) in Kotlin, [`UniffiSession.setIntersection`](/symi/swift/sets#set_intersection) in Swift, [`api::sets::Session::set_intersection`](/symi/rust/sets#set_intersection) in Rust.*


Intersection, computed eagerly where the structural rules allow (interval
pairs, finite-set membership filtering; \(\mathbb{R}\) drops, \(\varnothing\) absorbs); otherwise the
structural `set_intersection` node.

### set_complement

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.set_complement`](/symi/python/sets#set_complement) in Python, [`UniffiSession.setComplement`](/symi/kotlin/sets#set_complement) in Kotlin, [`UniffiSession.setComplement`](/symi/swift/sets#set_complement) in Swift, [`api::sets::Session::set_complement`](/symi/rust/sets#set_complement) in Rust.*


The relative complement \(a \setminus b\).

### image_set

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.image_set`](/symi/python/sets#image_set) in Python, [`UniffiSession.imageSet`](/symi/kotlin/sets#image_set) in Kotlin, [`UniffiSession.imageSet`](/symi/swift/sets#image_set) in Swift, [`api::sets::Session::image_set`](/symi/rust/sets#image_set) in Rust.*


The set \(\{\operatorname{lambda\_expression} : \operatorname{variable} \in \operatorname{domain}\}\); `variable` is a binder
over `lambda_expression`. Finite domains are enumerated element-wise at
construction.

### condition_set

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.condition_set`](/symi/python/sets#condition_set) in Python, [`UniffiSession.conditionSet`](/symi/kotlin/sets#condition_set) in Kotlin, [`UniffiSession.conditionSet`](/symi/swift/sets#condition_set) in Swift, [`api::sets::Session::condition_set`](/symi/rust/sets#condition_set) in Rust.*


The set \(\{\operatorname{variable} \in \operatorname{domain} : \operatorname{condition}\}\). This is also `solveset`'s honest
"unsolved" residue shape.

### is_member

<a id="entry-presentation_wasm_api_session_is_member"></a>
<a id="placement-placement.wasm.wasm_module.module_ismember.1e1e670a4cc3"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
isMember(element: Expression, set: Expression): boolean | undefined
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_ismember.c95641df7e1f"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.isMember</code></p>

```typescript signature
isMember(element: Expression, set: Expression): boolean | undefined
```

</details>


Three-valued membership: `True` only on structural proof, `False` only on a
structural counterexample, `None` otherwise. Covers \(\varnothing\), \(\mathbb{R}\), finite sets,
intervals, unions, intersections, complements.

### is_subset

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.is_subset`](/symi/python/sets#is_subset) in Python, [`UniffiSession.isSubset`](/symi/kotlin/sets#is_subset) in Kotlin, [`UniffiSession.isSubset`](/symi/swift/sets#is_subset) in Swift, [`api::sets::Session::is_subset`](/symi/rust/sets#is_subset) in Rust.*


Three-valued subset query: \(\varnothing \subseteq\) anything, structural equality, finite-set
element checks, interval-in-interval endpoint tests; `None` otherwise.

### enumerate_set_in_interval

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.enumerate_set_in_interval`](/symi/python/sets#enumerate_set_in_interval) in Python, [`UniffiSession.enumerateSetInInterval`](/symi/kotlin/sets#enumerate_set_in_interval) in Kotlin, [`UniffiSession.enumerateSetInInterval`](/symi/swift/sets#enumerate_set_in_interval) in Swift, [`api::sets::Session::enumerate_set_in_interval`](/symi/rust/sets#enumerate_set_in_interval) in Rust.*


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

```javascript
const left = symi.finiteSet([1, 2, 3]);
const right = symi.finiteSet([2, 3, 4]);

console.log(left.toString());
console.log(right.toString());
console.log(symi.emptySet.toString());
```


## Additional API

### complexPlane

<a id="entry-presentation_wasm_api_session_complex_plane"></a>
<a id="placement-placement.wasm.wasm_module.module_complexplane.a46c1c83bcc0"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
complexPlane(): Expression
```

The set \(\mathbb{C}\) — the ambient universe, and the domain a variable ranges over when it carries no realness assumption.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_complexplane.336fcef1c7a5"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.complexPlane</code></p>

```typescript signature
readonly complexPlane: Expression
```

<a id="placement-placement.wasm.wasm_class.context_complexplane.586e5589826d"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.complexPlane</code></p>

```typescript signature
complexPlane(): Expression
```

<a id="placement-placement.wasm.javascript_facade.symifacade_complexplane.64775d0049e5"></a>
<p class="symi-entry-owner">SymiFacade property: <code>SymiFacade.complexPlane</code></p>

```typescript signature
readonly complexPlane: Expression
```

</details>

### conditionSet

<a id="entry-presentation_wasm_api_session_condition_set"></a>
<a id="placement-placement.wasm.wasm_module.module_conditionset.ea293f0d117b"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
conditionSet(
    variable: string,
    condition: Expression,
    domain: Expression,
): Expression
```

The set \(\{\operatorname{variable} \in \operatorname{domain} : \operatorname{condition}\}\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_conditionset.ca3ed9f0ad48"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.conditionSet</code></p>

```typescript signature
conditionSet(
    variable: string,
    condition: Expression,
    domain: Expression,
): Expression
```

</details>

### emptySet

<a id="entry-presentation_wasm_api_session_empty_set"></a>
<a id="placement-placement.wasm.wasm_module.module_emptyset.bc3dac94e421"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
emptySet(): Expression
```

The empty set \(\varnothing\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_emptyset.4bb6a4877195"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.emptySet</code></p>

```typescript signature
readonly emptySet: Expression
```

<a id="placement-placement.wasm.wasm_class.context_emptyset.a28d7059ab50"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.emptySet</code></p>

```typescript signature
emptySet(): Expression
```

<a id="placement-placement.wasm.javascript_facade.symifacade_emptyset.9c24ad3939de"></a>
<p class="symi-entry-owner">SymiFacade property: <code>SymiFacade.emptySet</code></p>

```typescript signature
readonly emptySet: Expression
```

</details>

### enumerateSetInInterval

<a id="entry-presentation_wasm_api_session_enumerate_set_in_interval"></a>
<a id="placement-placement.wasm.wasm_module.module_enumeratesetininterval.389b8414264e"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
enumerateSetInInterval(
    set: Expression,
    lower: Expression,
    upper: Expression,
    lower_inclusive?: boolean | null,
    upper_inclusive?: boolean | null,
    limit?: number | null,
): SetEnumeration
```

Exact elements of a set inside \([\operatorname{lower}, \operatorname{upper}]\), in increasing order, as a `set_enumeration`. Its `outcome` is `"complete"` when those are exactly the elements in the interval, `"truncated"` when `limit` cut the list short (the family is still solved), and `"declined"` when the set's shape is not enumerable — never a licence to approximate.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_enumeratesetininterval.b6c6fc34da8d"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.enumerateSetInInterval</code></p>

```typescript signature
enumerateSetInInterval(
    set: Expression,
    lower: Expression,
    upper: Expression,
    lower_inclusive?: boolean | null,
    upper_inclusive?: boolean | null,
    limit?: number | null,
): SetEnumeration
```

</details>

### finiteSet

<a id="entry-presentation_wasm_api_session_finite_set"></a>
<a id="placement-placement.wasm.wasm_module.module_finiteset.149f36c22cd9"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
finiteSet(elements: Expression[]): Expression
```

Finite set; elements are deduplicated and canonically ordered. An empty list gives the empty set.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_finiteset.e1e1955cbc02"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.finiteSet</code></p>

```typescript signature
finiteSet(values: Iterable<ExpressionLike>): Expression
```

<a id="placement-placement.wasm.wasm_class.context_finiteset.3a45883a0e93"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.finiteSet</code></p>

```typescript signature
finiteSet(elements: Expression[]): Expression
```

<a id="placement-placement.wasm.javascript_facade.symifacade_finiteset.1387548559b6"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.finiteSet</code></p>

```typescript signature
finiteSet(values: Iterable<ExpressionLike>): Expression
```

</details>

### imageSet

<a id="entry-presentation_wasm_api_session_image_set"></a>
<a id="placement-placement.wasm.wasm_module.module_imageset.d648714b36fe"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
imageSet(
    lambda_expression: Expression,
    variable: string,
    domain: Expression,
): Expression
```

The set \(\{\operatorname{lambda\_expression} : \operatorname{variable} \in \operatorname{domain}\}\); `variable` is a binder over `lambda_expression`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_imageset.5630fa218da7"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.imageSet</code></p>

```typescript signature
imageSet(
    lambda_expression: Expression,
    variable: string,
    domain: Expression,
): Expression
```

</details>

### integerSet

<a id="entry-presentation_wasm_api_session_integer_set"></a>
<a id="placement-placement.wasm.wasm_module.module_integerset.5179601c652e"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
integerSet(): Expression
```

The set \(\mathbb{Z}\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_integerset.d4dc80555db9"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.integerSet</code></p>

```typescript signature
readonly integerSet: Expression
```

<a id="placement-placement.wasm.wasm_class.context_integerset.85a66913c2aa"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.integerSet</code></p>

```typescript signature
integerSet(): Expression
```

<a id="placement-placement.wasm.javascript_facade.symifacade_integerset.f9cb1be0989f"></a>
<p class="symi-entry-owner">SymiFacade property: <code>SymiFacade.integerSet</code></p>

```typescript signature
readonly integerSet: Expression
```

</details>

### isSubset

<a id="entry-presentation_wasm_api_session_is_subset"></a>
<a id="placement-placement.wasm.wasm_module.module_issubset.895b73859022"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
isSubset(set_a: Expression, set_b: Expression): boolean | undefined
```

Three-valued subset query: \(\varnothing \subseteq\) anything, structural equality, finite-set element checks, interval-in-interval endpoint tests; `None` otherwise.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_issubset.f566fef15352"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.isSubset</code></p>

```typescript signature
isSubset(set_a: Expression, set_b: Expression): boolean | undefined
```

</details>

### length

<a id="entry-presentation_wasm_api_expression_length"></a>
<a id="placement-placement.wasm.wasm_class.expression_length.45f409e47bab"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method</p>

```typescript signature
readonly length: number
```

Number of elements of a finite-set expression.

### realLine

<a id="entry-presentation_wasm_api_session_real_line"></a>
<a id="placement-placement.wasm.wasm_module.module_realline.d150784a3d9d"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
realLine(): Expression
```

The set \(\mathbb{R}\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_realline.04c11e555295"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.realLine</code></p>

```typescript signature
readonly realLine: Expression
```

<a id="placement-placement.wasm.wasm_class.context_realline.f9ddcef2c243"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.realLine</code></p>

```typescript signature
realLine(): Expression
```

<a id="placement-placement.wasm.javascript_facade.symifacade_realline.84c2087be448"></a>
<p class="symi-entry-owner">SymiFacade property: <code>SymiFacade.realLine</code></p>

```typescript signature
readonly realLine: Expression
```

</details>

### setComplement

<a id="entry-presentation_wasm_api_session_set_complement"></a>
<a id="placement-placement.wasm.wasm_module.module_setcomplement.2a16985668e3"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
setComplement(set_a: Expression, set_b: Expression): Expression
```

The relative complement \(a \setminus b\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_setcomplement.0e0d00ff962c"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.setComplement</code></p>

```typescript signature
setComplement(set_a: Expression, set_b: Expression): Expression
```

</details>

### setIntersection

<a id="entry-presentation_wasm_api_session_set_intersection"></a>
<a id="placement-placement.wasm.wasm_module.module_setintersection.2a72a9ce82c8"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
setIntersection(set_a: Expression, set_b: Expression): Expression
```

Intersection, computed eagerly where the structural rules allow (interval pairs, finite-set membership filtering; \(\mathbb{R}\) drops, \(\varnothing\) absorbs); otherwise the structural `set_intersection` node.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_setintersection.007766d08e05"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.setIntersection</code></p>

```typescript signature
setIntersection(set_a: Expression, set_b: Expression): Expression
```

</details>

### setUnion

<a id="entry-presentation_wasm_api_session_set_union"></a>
<a id="placement-placement.wasm.wasm_module.module_setunion.5d97c0bd64f6"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
setUnion(set_a: Expression, set_b: Expression): Expression
```

Union, computed eagerly where the structural rules allow (overlapping or touching interval pairs merge; nested unions splice, \(\varnothing\) drops, \(\mathbb{R}\) absorbs); otherwise the structural `set_union` node.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_setunion.107649293a43"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.setUnion</code></p>

```typescript signature
setUnion(set_a: Expression, set_b: Expression): Expression
```

</details>

### SetEnumeration

#### SetEnumeration.elements

<a id="entry-presentation_wasm_api_setenumeration_elements"></a>
<a id="placement-placement.wasm.wasm_class.setenumeration_elements.521d21fa5162"></a>
<p class="symi-entry-owner">Raw WebAssembly: SetEnumeration property</p>

```typescript signature
readonly elements: Expression[]
```

The exact elements produced, in increasing order.

#### SetEnumeration.outcome

<a id="entry-presentation_wasm_api_setenumeration_outcome"></a>
<a id="placement-placement.wasm.wasm_class.setenumeration_outcome.7db4df413ad1"></a>
<p class="symi-entry-owner">Raw WebAssembly: SetEnumeration property</p>

```typescript signature
readonly outcome: string
```

`"complete"`, `"truncated"`, or `"declined"`.

