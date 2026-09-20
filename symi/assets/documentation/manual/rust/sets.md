# Sets

Sets are ordinary `Expression` values; constructors route through
auto-simplification (degenerate intervals collapse, unions splice and
deduplicate, etc.). Take results apart with the structural accessors on the
expressions page.

### interval

<a id="entry-presentation_rust_api_session_interval"></a>
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

<a id="entry-presentation_rust_api_session_real_line"></a>
<a id="placement-placement.rust.native_rust.api_session_real_line.97caa0126b7a"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn real_line(&self) -> Expression
```


The set \(\mathbb{R}\).

### complex_plane

<a id="entry-presentation_rust_api_session_complex_plane"></a>
<a id="placement-placement.rust.native_rust.api_session_complex_plane.a1030aed9369"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn complex_plane(&self) -> Expression
```


The set \(\mathbb{C}\) — the ambient universe, and the domain a variable ranges over when it
carries no realness assumption.

### integer_set

<a id="entry-presentation_rust_api_session_integer_set"></a>
<a id="placement-placement.rust.native_rust.api_session_integer_set.324b2c52c222"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn integer_set(&self) -> Expression
```


The set \(\mathbb{Z}\).

### empty_set

<a id="entry-presentation_rust_api_session_empty_set"></a>
<a id="placement-placement.rust.native_rust.api_session_empty_set.f5d1aecf87be"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn empty_set(&self) -> Expression
```


The empty set \(\varnothing\).

### finite_set

<a id="entry-presentation_rust_api_session_finite_set"></a>
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

<a id="entry-presentation_rust_api_session_set_union"></a>
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

<a id="entry-presentation_rust_api_session_set_intersection"></a>
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

<a id="entry-presentation_rust_api_session_set_complement"></a>
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

<a id="entry-presentation_rust_api_session_image_set"></a>
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

<a id="entry-presentation_rust_api_session_condition_set"></a>
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

<a id="entry-presentation_rust_api_session_is_member"></a>
<a id="placement-placement.rust.native_rust.api_sets_session_is_member.1323c4fd38a7"></a>
<p class="symi-entry-owner">api::sets::Session method</p>

```rust signature
pub fn is_member(
    &self,
    element: &Expression,
    set: &Expression,
) -> Result<TruthValue, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_expression_operations_expression_is_member.8b34d4988457"></a>
<p class="symi-entry-owner">api::expression_operations::Expression method: <code>api::expression_operations::Expression::is_member</code></p>

```rust signature
pub fn is_member(
    &self,
    set: &Expression,
) -> Result<TruthValue, ApiError>
```

</details>


Three-valued membership: `True` only on structural proof, `False` only on a
structural counterexample, `None` otherwise. Covers \(\varnothing\), \(\mathbb{R}\), finite sets,
intervals, unions, intersections, complements.

### is_subset

<a id="entry-presentation_rust_api_session_is_subset"></a>
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

<a id="entry-presentation_rust_api_session_enumerate_set_in_interval"></a>
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

### length

<a id="entry-presentation_rust_api_expression_length"></a>
<a id="placement-placement.rust.native_rust.api_expression_operations_expression_length.667a066e0984"></a>
<p class="symi-entry-owner">api::expression_operations::Expression method</p>

```rust signature
pub fn length(&self) -> Result<usize, ApiError>
```

The number of elements of a finite-set expression.

### api::sets

<a id="entry-presentation_rust_native_module_api_sets"></a>
<a id="placement-placement.rust.native_rust.api_sets.b5a4c72573ba"></a>
<p class="symi-entry-owner">api module</p>

```rust signature
pub mod sets;
```

Set construction and query operations of the native API.

### DEFAULT_ENUMERATION_LIMIT

<a id="entry-presentation_rust_api_default_enumeration_limit"></a>
<a id="placement-placement.rust.native_rust.api_sets_default_enumeration_limit.d32dd647fd90"></a>
<p class="symi-entry-owner">api::sets constant</p>

```rust signature
pub const DEFAULT_ENUMERATION_LIMIT: usize = crate::sets::enumerate::DEFAULT_ENUMERATION_LIMIT;
```

The default ceiling on how many elements one set enumeration produces.

### EnumerationVerdict

<a id="entry-presentation_rust_api_enumerationverdict"></a>
<a id="placement-placement.rust.native_rust.api_enumerationverdict.ef75efed0e2a"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use results::EnumerationVerdict;
```

How far a set enumeration got.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_results_enumerationverdict.c117cf6662cb"></a>
<p class="symi-entry-owner">Type: <code>api::results::EnumerationVerdict</code></p>

```rust signature
pub enum EnumerationVerdict
```

</details>

#### EnumerationVerdict.Complete

<a id="entry-presentation_rust_api_enumerationverdict_complete"></a>
<a id="placement-placement.rust.native_rust.api_results_enumerationverdict_complete.b9b2bc3a9da0"></a>
<p class="symi-entry-owner">api::results::EnumerationVerdict variant</p>

```rust signature
Complete,
```

Every element inside the interval was produced.

#### EnumerationVerdict.Declined

<a id="entry-presentation_rust_api_enumerationverdict_declined"></a>
<a id="placement-placement.rust.native_rust.api_results_enumerationverdict_declined.35c0a632161a"></a>
<p class="symi-entry-owner">api::results::EnumerationVerdict variant</p>

```rust signature
Declined,
```

The set's shape is not enumerable by this procedure.

#### EnumerationVerdict.Truncated

<a id="entry-presentation_rust_api_enumerationverdict_truncated"></a>
<a id="placement-placement.rust.native_rust.api_results_enumerationverdict_truncated.2f87d82b9f5e"></a>
<p class="symi-entry-owner">api::results::EnumerationVerdict variant</p>

```rust signature
Truncated,
```

The requested limit was reached and more elements remain.

#### EnumerationVerdict.name

<a id="entry-presentation_rust_api_enumerationverdict_name"></a>
<a id="placement-placement.rust.native_rust.api_results_enumerationverdict_name.fffd1929b6e8"></a>
<p class="symi-entry-owner">api::results::EnumerationVerdict method</p>

```rust signature
pub fn name(&self) -> &'static str
```

The stable lowercase spelling shared by every binding.

### SetEnumeration

<a id="entry-presentation_rust_api_setenumeration"></a>
<a id="placement-placement.rust.native_rust.api_setenumeration.460f4f0bf079"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use results::SetEnumeration;
```

The elements a set enumeration produced inside an interval.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_results_setenumeration.4aec95aed032"></a>
<p class="symi-entry-owner">Type: <code>api::results::SetEnumeration</code></p>

```rust signature
pub struct SetEnumeration
```

</details>

#### SetEnumeration.elements

<a id="entry-presentation_rust_api_setenumeration_elements"></a>
<a id="placement-placement.rust.native_rust.api_results_setenumeration_elements.48ab406926b0"></a>
<p class="symi-entry-owner">api::results::SetEnumeration method</p>

```rust signature
pub fn elements(&self) -> Vec<Expression>
```

The enumerated elements in increasing order.

#### SetEnumeration.outcome

<a id="entry-presentation_rust_api_setenumeration_outcome"></a>
<a id="placement-placement.rust.native_rust.api_results_setenumeration_outcome.ee18065997bc"></a>
<p class="symi-entry-owner">api::results::SetEnumeration method</p>

```rust signature
pub fn outcome(&self) -> EnumerationVerdict
```

Whether the enumeration is complete, truncated, or declined.

