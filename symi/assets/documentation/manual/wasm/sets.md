# Sets

Sets are ordinary `Expression` values; constructors route through
auto-simplification (degenerate intervals collapse, unions splice and
deduplicate, etc.). Take results apart with the structural accessors on the
expressions page.

### interval

<a id="placement-placement.wasm.wasm_class.context_interval.abdb397ea405"></a>
Raw WebAssembly: `pub fn interval(&self, lower: &Expression, upper: &Expression, lower_open: Option<bool>, upper_open: Option<bool>) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_module.module_interval.9788b55cf0be"></a>
Raw WebAssembly: `fn interval(lower: &Expression, upper: &Expression, lower_open: Option<bool>, upper_open: Option<bool>) -> Result<Expression, JsError>`


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

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.is_member`](/symi/python/sets#is_member) in Python, [`UniffiSession.isMember`](/symi/kotlin/sets#is_member) in Kotlin, [`UniffiSession.isMember`](/symi/swift/sets#is_member) in Swift, [`api::expression_operations::Expression::is_member`](/symi/rust/sets#is_member) in Rust.*


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

<a id="placement-placement.wasm.javascript_facade.context_emptyset.4bb6a4877195"></a>
### Context.emptySet

`Context.readonly emptySet: Expression`

Returns `expression`.

<a id="placement-placement.wasm.javascript_facade.context_finiteset.e1e1955cbc02"></a>
### Context.finiteSet

`Context.finiteSet(values: Iterable<ExpressionLike>): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_integerset.d4dc80555db9"></a>
### Context.integerSet

`Context.readonly integerSet: Expression`

Returns `expression`.

<a id="placement-placement.wasm.javascript_facade.symifacade_emptyset.9c24ad3939de"></a>
### SymiFacade.emptySet

`SymiFacade.readonly emptySet: Expression`

Returns `expression`.

<a id="placement-placement.wasm.javascript_facade.symifacade_finiteset.1387548559b6"></a>
### SymiFacade.finiteSet

`SymiFacade.finiteSet(values: Iterable<ExpressionLike>): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_integerset.f9cb1be0989f"></a>
### SymiFacade.integerSet

`SymiFacade.readonly integerSet: Expression`

Returns `expression`.

<a id="placement-placement.wasm.wasm_class.context_conditionset.ca3ed9f0ad48"></a>
### Context.conditionSet

`pub fn condition_set(&self, variable: &str, condition: &Expression, domain: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_emptyset.a28d7059ab50"></a>
### Context.emptySet

`pub fn empty_set(&self) -> Expression`

Returns `expression`.

<a id="placement-placement.wasm.wasm_class.context_enumeratesetininterval.b6c6fc34da8d"></a>
### Context.enumerateSetInInterval

`pub fn enumerate_set_in_interval(&self, set: &Expression, lower: &Expression, upper: &Expression, lower_inclusive: Option<bool>, upper_inclusive: Option<bool>, limit: Option<usize>) -> Result<SetEnumeration, JsError>`

Returns `Result<set_enumeration, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_finiteset.3a45883a0e93"></a>
### Context.finiteSet

`pub fn finite_set(&self, elements: Vec<Expression>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_imageset.5630fa218da7"></a>
### Context.imageSet

`pub fn image_set(&self, lambda_expression: &Expression, variable: &str, domain: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_integerset.85a66913c2aa"></a>
### Context.integerSet

`pub fn integer_set(&self) -> Expression`

Returns `expression`.

<a id="placement-placement.wasm.wasm_class.context_issubset.f566fef15352"></a>
### Context.isSubset

`pub fn is_subset(&self, set_a: &Expression, set_b: &Expression) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_setcomplement.0e0d00ff962c"></a>
### Context.setComplement

`pub fn set_complement(&self, set_a: &Expression, set_b: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_setintersection.007766d08e05"></a>
### Context.setIntersection

`pub fn set_intersection(&self, set_a: &Expression, set_b: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_setunion.107649293a43"></a>
### Context.setUnion

`pub fn set_union(&self, set_a: &Expression, set_b: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_conditionset.ea293f0d117b"></a>
### module.conditionSet

`fn condition_set(variable: &str, condition: &Expression, domain: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_emptyset.bc3dac94e421"></a>
### module.emptySet

`fn empty_set() -> Expression`

Returns `expression`.

<a id="placement-placement.wasm.wasm_module.module_enumeratesetininterval.389b8414264e"></a>
### module.enumerateSetInInterval

`fn enumerate_set_in_interval(set: &Expression, lower: &Expression, upper: &Expression, lower_inclusive: Option<bool>, upper_inclusive: Option<bool>, limit: Option<usize>) -> Result<SetEnumeration, JsError>`

Returns `Result<set_enumeration, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_finiteset.149f36c22cd9"></a>
### module.finiteSet

`fn finite_set(elements: Vec<Expression>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_imageset.d648714b36fe"></a>
### module.imageSet

`fn image_set(lambda_expression: &Expression, variable: &str, domain: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_integerset.5179601c652e"></a>
### module.integerSet

`fn integer_set() -> Expression`

Returns `expression`.

<a id="placement-placement.wasm.wasm_module.module_issubset.895b73859022"></a>
### module.isSubset

`fn is_subset(set_a: &Expression, set_b: &Expression) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_setcomplement.2a16985668e3"></a>
### module.setComplement

`fn set_complement(set_a: &Expression, set_b: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_setintersection.2a72a9ce82c8"></a>
### module.setIntersection

`fn set_intersection(set_a: &Expression, set_b: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_setunion.5d97c0bd64f6"></a>
### module.setUnion

`fn set_union(set_a: &Expression, set_b: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

