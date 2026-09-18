# Sets

Sets are ordinary `Expression` values; constructors route through
auto-simplification (degenerate intervals collapse, unions splice and
deduplicate, etc.). Take results apart with the structural accessors on the
expressions page.

### interval

<a id="placement-placement.swift.swift_object.uniffisession_interval.3d25cad4506c"></a>
`UniffiSession.interval(lower: UniffiExpression, upper: UniffiExpression, lowerInclusive: Bool, upperInclusive: Bool) -> UniffiExpression`


Real-line interval. Closed by default; endpoints at infinity are forced
open. Degenerate shapes collapse (empty interval \(\to\) empty set, single point \(\to\)
finite set, \((-\infty, \infty)\to\) real line).

### real_line

<a id="placement-placement.swift.swift_object.uniffisession_realline.f2340b577b3b"></a>
`UniffiSession.realLine() -> UniffiExpression`


The set \(\mathbb{R}\).

### complex_plane

<a id="placement-placement.swift.swift_object.uniffisession_complexplane.68f6883a0853"></a>
`UniffiSession.complexPlane() -> UniffiExpression`


The set \(\mathbb{C}\) — the ambient universe, and the domain a variable ranges over when it
carries no realness assumption.

### integer_set

<a id="placement-placement.swift.swift_object.uniffisession_integerset.3ed935c8e6aa"></a>
`UniffiSession.integerSet() -> UniffiExpression`


The set \(\mathbb{Z}\).

### empty_set

<a id="placement-placement.swift.swift_object.uniffisession_emptyset.b24b44b080ee"></a>
`UniffiSession.emptySet() -> UniffiExpression`


The empty set \(\varnothing\).

### finite_set

<a id="placement-placement.swift.swift_object.uniffisession_finiteset.2f6e260ded78"></a>
`UniffiSession.finiteSet(elements: [UniffiExpression]) -> UniffiExpression`


Finite set; elements are deduplicated and canonically ordered. An empty list
gives the empty set.

### set_union

<a id="placement-placement.swift.swift_object.uniffisession_setunion.8e884c96fab8"></a>
`UniffiSession.setUnion(left: UniffiExpression, right: UniffiExpression) -> UniffiExpression`


Union, computed eagerly where the structural rules allow (overlapping or
touching interval pairs merge; nested unions splice, \(\varnothing\) drops, \(\mathbb{R}\) absorbs);
otherwise the structural `set_union` node.

### set_intersection

<a id="placement-placement.swift.swift_object.uniffisession_setintersection.f56710deeb53"></a>
`UniffiSession.setIntersection(left: UniffiExpression, right: UniffiExpression) -> UniffiExpression`


Intersection, computed eagerly where the structural rules allow (interval
pairs, finite-set membership filtering; \(\mathbb{R}\) drops, \(\varnothing\) absorbs); otherwise the
structural `set_intersection` node.

### set_complement

<a id="placement-placement.swift.swift_object.uniffisession_setcomplement.d96e49c60156"></a>
`UniffiSession.setComplement(left: UniffiExpression, right: UniffiExpression) -> UniffiExpression`


The relative complement \(a \setminus b\).

### image_set

<a id="placement-placement.swift.swift_object.uniffisession_imageset.5fea8fa8cf7a"></a>
`UniffiSession.imageSet(lambdaExpression: UniffiExpression, variable: String, domain: UniffiExpression) -> UniffiExpression`


The set \(\{\operatorname{lambda\_expression} : \operatorname{variable} \in \operatorname{domain}\}\); `variable` is a binder
over `lambda_expression`. Finite domains are enumerated element-wise at
construction.

### condition_set

<a id="placement-placement.swift.swift_object.uniffisession_conditionset.1c69d332f022"></a>
`UniffiSession.conditionSet(variable: String, condition: UniffiExpression, domain: UniffiExpression) -> UniffiExpression`


The set \(\{\operatorname{variable} \in \operatorname{domain} : \operatorname{condition}\}\). This is also `solveset`'s honest
"unsolved" residue shape.

### is_member

<a id="placement-placement.swift.swift_object.uniffisession_ismember.17be7781f5f8"></a>
`UniffiSession.isMember(element: UniffiExpression, set: UniffiExpression) -> UniffiTruthValue`


Three-valued membership: `True` only on structural proof, `False` only on a
structural counterexample, `None` otherwise. Covers \(\varnothing\), \(\mathbb{R}\), finite sets,
intervals, unions, intersections, complements.

### is_subset

<a id="placement-placement.swift.swift_object.uniffisession_issubset.059d490835a8"></a>
`UniffiSession.isSubset(smaller: UniffiExpression, larger: UniffiExpression) -> UniffiTruthValue`


Three-valued subset query: \(\varnothing \subseteq\) anything, structural equality, finite-set
element checks, interval-in-interval endpoint tests; `None` otherwise.

### enumerate_set_in_interval

<a id="placement-placement.swift.swift_object.uniffisession_enumeratesetininterval.6d91fa32b30b"></a>
`UniffiSession.enumerateSetInInterval(set: UniffiExpression, lower: UniffiExpression, upper: UniffiExpression, lowerInclusive: Bool, upperInclusive: Bool, limit: UInt64?) -> UniffiSetEnumeration`


Exact elements of a set inside \([\operatorname{lower}, \operatorname{upper}]\), in increasing
order, as `{"outcome": str, "elements": list[Expression]}`. `outcome` is `"complete"` when those
are exactly the elements in the interval, `"truncated"` when `limit` cut the list short (the
family is still solved), and `"declined"` when the set's shape is not enumerable — never a
licence to approximate. Handles finite sets, affine image sets over \(\mathbb{Z}\), unions,
complements, and the unevaluated `set_intersection(interval, image_set)` shape `solveset_in_domain`
returns for a lattice too wide to materialize. `limit` defaults to 64. WASM returns a
`SetEnumeration` object with `outcome` and `elements` getters.

## Example

