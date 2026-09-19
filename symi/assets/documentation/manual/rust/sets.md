# Sets

Sets are ordinary `Expression` values; constructors route through
auto-simplification (degenerate intervals collapse, unions splice and
deduplicate, etc.). Take results apart with the structural accessors on the
expressions page.

### interval

<a id="entry-presentation_rust_sets_capability_rust_native_rust_api_sets_session_interval_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_sets_session_interval.0fb8a8e8b211"></a>
<p class="symi-entry-owner">api::sets::Session method</p>

```rust signature
pub fn interval(
    &self,
    lower: &Expression,
    upper: &Expression,
    lower_inclusive: bool,
    upper_inclusive: bool,
) -> Result<Expression, ApiError>
```


Real-line interval. Closed by default; endpoints at infinity are forced
open. Degenerate shapes collapse (empty interval \(\to\) empty set, single point \(\to\)
finite set, \((-\infty, \infty)\to\) real line).

### real_line

<a id="entry-presentation_rust_sets_capability_rust_native_rust_api_session_real_line_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_real_line.97caa0126b7a"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn real_line(&self) -> Expression
```


The set \(\mathbb{R}\).

### complex_plane

<a id="entry-presentation_rust_sets_capability_rust_native_rust_api_session_complex_plane_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_complex_plane.a1030aed9369"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn complex_plane(&self) -> Expression
```


The set \(\mathbb{C}\) — the ambient universe, and the domain a variable ranges over when it
carries no realness assumption.

### integer_set

<a id="entry-presentation_rust_sets_capability_rust_native_rust_api_session_integer_set_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_integer_set.324b2c52c222"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn integer_set(&self) -> Expression
```


The set \(\mathbb{Z}\).

### empty_set

<a id="entry-presentation_rust_sets_capability_rust_native_rust_api_session_empty_set_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_empty_set.f5d1aecf87be"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn empty_set(&self) -> Expression
```


The empty set \(\varnothing\).

### finite_set

<a id="entry-presentation_rust_sets_capability_finite_set_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_finite_set.ffa78e198f13"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn finite_set<IteratorType>(
    &self,
    elements: IteratorType,
) -> Result<Expression, ApiError>
where
    IteratorType: IntoIterator<Item = Expression>,
```


Finite set; elements are deduplicated and canonically ordered. An empty list
gives the empty set.

### set_union

<a id="entry-presentation_rust_sets_capability_rust_native_rust_api_sets_session_set_union_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_sets_session_set_union.c8d393fb4f1b"></a>
<p class="symi-entry-owner">api::sets::Session method</p>

```rust signature
pub fn set_union(
    &self,
    left: &Expression,
    right: &Expression,
) -> Result<Expression, ApiError>
```


Union, computed eagerly where the structural rules allow (overlapping or
touching interval pairs merge; nested unions splice, \(\varnothing\) drops, \(\mathbb{R}\) absorbs);
otherwise the structural `set_union` node.

### set_intersection

<a id="entry-presentation_rust_sets_capability_rust_native_rust_api_sets_session_set_intersection_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_sets_session_set_intersection.d202d1009e21"></a>
<p class="symi-entry-owner">api::sets::Session method</p>

```rust signature
pub fn set_intersection(
    &self,
    left: &Expression,
    right: &Expression,
) -> Result<Expression, ApiError>
```


Intersection, computed eagerly where the structural rules allow (interval
pairs, finite-set membership filtering; \(\mathbb{R}\) drops, \(\varnothing\) absorbs); otherwise the
structural `set_intersection` node.

### set_complement

<a id="entry-presentation_rust_sets_capability_rust_native_rust_api_sets_session_set_complement_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_sets_session_set_complement.43bde2d836af"></a>
<p class="symi-entry-owner">api::sets::Session method</p>

```rust signature
pub fn set_complement(
    &self,
    left: &Expression,
    right: &Expression,
) -> Result<Expression, ApiError>
```


The relative complement \(a \setminus b\).

### image_set

<a id="entry-presentation_rust_sets_capability_rust_native_rust_api_sets_session_image_set_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_sets_session_image_set.3665196ad7ea"></a>
<p class="symi-entry-owner">api::sets::Session method</p>

```rust signature
pub fn image_set<'a, VariableType>(
    &self,
    lambda_expression: &Expression,
    variable: VariableType,
    domain: &Expression,
) -> Result<Expression, ApiError>
where
    VariableType: Into<VariableLike<'a>>,
```


The set \(\{\operatorname{lambda\_expression} : \operatorname{variable} \in \operatorname{domain}\}\); `variable` is a binder
over `lambda_expression`. Finite domains are enumerated element-wise at
construction.

### condition_set

<a id="entry-presentation_rust_sets_capability_rust_native_rust_api_sets_session_condition_set_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_sets_session_condition_set.f1e310b1aa4c"></a>
<p class="symi-entry-owner">api::sets::Session method</p>

```rust signature
pub fn condition_set<'a, VariableType>(
    &self,
    variable: VariableType,
    condition: &Expression,
    domain: &Expression,
) -> Result<Expression, ApiError>
where
    VariableType: Into<VariableLike<'a>>,
```


The set \(\{\operatorname{variable} \in \operatorname{domain} : \operatorname{condition}\}\). This is also `solveset`'s honest
"unsolved" residue shape.

### is_member

<a id="entry-presentation_rust_sets_capability_rust_native_rust_api_sets_session_is_member_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_sets_session_is_member.1323c4fd38a7"></a>
<p class="symi-entry-owner">api::sets::Session method</p>

```rust signature
pub fn is_member(
    &self,
    element: &Expression,
    set: &Expression,
) -> Result<TruthValue, ApiError>
```


Three-valued membership: `True` only on structural proof, `False` only on a
structural counterexample, `None` otherwise. Covers \(\varnothing\), \(\mathbb{R}\), finite sets,
intervals, unions, intersections, complements.

### is_subset

<a id="entry-presentation_rust_sets_capability_rust_native_rust_api_sets_session_is_subset_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_sets_session_is_subset.4c4f1782c96d"></a>
<p class="symi-entry-owner">api::sets::Session method</p>

```rust signature
pub fn is_subset(
    &self,
    smaller: &Expression,
    larger: &Expression,
) -> Result<TruthValue, ApiError>
```


Three-valued subset query: \(\varnothing \subseteq\) anything, structural equality, finite-set
element checks, interval-in-interval endpoint tests; `None` otherwise.

### enumerate_set_in_interval

<a id="entry-presentation_rust_sets_capability_rust_native_rust_api_sets_session_enumerate_set_in_interval_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_sets_session_enumerate_set_in_interval.7d46f7e94610"></a>
<p class="symi-entry-owner">api::sets::Session method</p>

```rust signature
pub fn enumerate_set_in_interval(
    &self,
    set: &Expression,
    lower: &Expression,
    upper: &Expression,
    lower_inclusive: bool,
    upper_inclusive: bool,
    limit: Option<usize>,
) -> Result<SetEnumeration, ApiError>
```


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

```rust
use symi::api::prelude::*;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let session = Session::new();
    let elements = session.finite_set([
        session.integer(1),
        session.integer(2),
        session.integer(3),
    ])?;

    println!("{}", elements);
    println!("{}", session.parse("x^2 - 2")?.solve_as_set(&session.symbol("x"))?);
    Ok(())
}
```


## Additional API

### is_member

<a id="entry-presentation_rust_sets_capability_rust_native_rust_api_expression_operations_expression_is_member_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_expression_operations_expression_is_member.8b34d4988457"></a>
<p class="symi-entry-owner">api::expression_operations::Expression method</p>

```rust signature
pub fn is_member(
    &self,
    set: &Expression,
) -> Result<TruthValue, ApiError>
```

Three-valued membership: `True` only on structural proof, `False` only on a structural counterexample, `None` otherwise. Covers \(\varnothing\), \(\mathbb{R}\), finite sets, intervals, unions, intersections, complements.

