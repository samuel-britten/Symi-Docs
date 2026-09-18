# Sets

Sets are ordinary `Expression` values; constructors route through
auto-simplification (degenerate intervals collapse, unions splice and
deduplicate, etc.). Take results apart with the structural accessors on the
expressions page.

### interval

<a id="placement-placement.kotlin.kotlin_object.uniffisession_interval.f091d18a794c"></a>
`UniffiSession.interval(lower: UniffiExpression, upper: UniffiExpression, lowerInclusive: kotlin.Boolean, upperInclusive: kotlin.Boolean): UniffiExpression`


Real-line interval. Closed by default; endpoints at infinity are forced
open. Degenerate shapes collapse (empty interval \(\to\) empty set, single point \(\to\)
finite set, \((-\infty, \infty)\to\) real line).

### real_line

<a id="placement-placement.kotlin.kotlin_object.uniffisession_realline.9e872af171c9"></a>
`UniffiSession.realLine(): UniffiExpression`


The set \(\mathbb{R}\).

### complex_plane

<a id="placement-placement.kotlin.kotlin_object.uniffisession_complexplane.ab266cb0b1e6"></a>
`UniffiSession.complexPlane(): UniffiExpression`


The set \(\mathbb{C}\) — the ambient universe, and the domain a variable ranges over when it
carries no realness assumption.

### integer_set

<a id="placement-placement.kotlin.kotlin_object.uniffisession_integerset.530e3b41baed"></a>
`UniffiSession.integerSet(): UniffiExpression`


The set \(\mathbb{Z}\).

### empty_set

<a id="placement-placement.kotlin.kotlin_object.uniffisession_emptyset.eab879e43a43"></a>
`UniffiSession.emptySet(): UniffiExpression`


The empty set \(\varnothing\).

### finite_set

<a id="placement-placement.kotlin.kotlin_object.uniffisession_finiteset.f199387d8dba"></a>
`UniffiSession.finiteSet(elements: List<UniffiExpression>): UniffiExpression`


Finite set; elements are deduplicated and canonically ordered. An empty list
gives the empty set.

### set_union

<a id="placement-placement.kotlin.kotlin_object.uniffisession_setunion.abb99420dce4"></a>
`UniffiSession.setUnion(left: UniffiExpression, right: UniffiExpression): UniffiExpression`


Union, computed eagerly where the structural rules allow (overlapping or
touching interval pairs merge; nested unions splice, \(\varnothing\) drops, \(\mathbb{R}\) absorbs);
otherwise the structural `set_union` node.

### set_intersection

<a id="placement-placement.kotlin.kotlin_object.uniffisession_setintersection.2b93d390c913"></a>
`UniffiSession.setIntersection(left: UniffiExpression, right: UniffiExpression): UniffiExpression`


Intersection, computed eagerly where the structural rules allow (interval
pairs, finite-set membership filtering; \(\mathbb{R}\) drops, \(\varnothing\) absorbs); otherwise the
structural `set_intersection` node.

### set_complement

<a id="placement-placement.kotlin.kotlin_object.uniffisession_setcomplement.f08454831514"></a>
`UniffiSession.setComplement(left: UniffiExpression, right: UniffiExpression): UniffiExpression`


The relative complement \(a \setminus b\).

### image_set

<a id="placement-placement.kotlin.kotlin_object.uniffisession_imageset.961ae79216f2"></a>
`UniffiSession.imageSet(lambdaExpression: UniffiExpression, variable: kotlin.String, domain: UniffiExpression): UniffiExpression`


The set \(\{\operatorname{lambda\_expression} : \operatorname{variable} \in \operatorname{domain}\}\); `variable` is a binder
over `lambda_expression`. Finite domains are enumerated element-wise at
construction.

### condition_set

<a id="placement-placement.kotlin.kotlin_object.uniffisession_conditionset.08dd194d5410"></a>
`UniffiSession.conditionSet(variable: kotlin.String, condition: UniffiExpression, domain: UniffiExpression): UniffiExpression`


The set \(\{\operatorname{variable} \in \operatorname{domain} : \operatorname{condition}\}\). This is also `solveset`'s honest
"unsolved" residue shape.

### is_member

<a id="placement-placement.kotlin.kotlin_object.uniffisession_ismember.59e399086565"></a>
`UniffiSession.isMember(element: UniffiExpression, set: UniffiExpression): UniffiTruthValue`


Three-valued membership: `True` only on structural proof, `False` only on a
structural counterexample, `None` otherwise. Covers \(\varnothing\), \(\mathbb{R}\), finite sets,
intervals, unions, intersections, complements.

### is_subset

<a id="placement-placement.kotlin.kotlin_object.uniffisession_issubset.a67c3cdae226"></a>
`UniffiSession.isSubset(smaller: UniffiExpression, larger: UniffiExpression): UniffiTruthValue`


Three-valued subset query: \(\varnothing \subseteq\) anything, structural equality, finite-set
element checks, interval-in-interval endpoint tests; `None` otherwise.

### enumerate_set_in_interval

<a id="placement-placement.kotlin.kotlin_object.uniffisession_enumeratesetininterval.0e608a7a6528"></a>
`UniffiSession.enumerateSetInInterval(set: UniffiExpression, lower: UniffiExpression, upper: UniffiExpression, lowerInclusive: kotlin.Boolean, upperInclusive: kotlin.Boolean, limit: kotlin.ULong?): UniffiSetEnumeration`


Exact elements of a set inside \([\operatorname{lower}, \operatorname{upper}]\), in increasing
order, as `{"outcome": str, "elements": list[Expression]}`. `outcome` is `"complete"` when those
are exactly the elements in the interval, `"truncated"` when `limit` cut the list short (the
family is still solved), and `"declined"` when the set's shape is not enumerable — never a
licence to approximate. Handles finite sets, affine image sets over \(\mathbb{Z}\), unions,
complements, and the unevaluated `set_intersection(interval, image_set)` shape `solveset_in_domain`
returns for a lattice too wide to materialize. `limit` defaults to 64. WASM returns a
`SetEnumeration` object with `outcome` and `elements` getters.

## Example

