# Relations and predicates

Relations construct symbolic formulas. They are distinct from host-language truth queries.

## Relations

Relation nodes are used as equations for `solve`/`solveset`, as piecewise
conditions, and as boolean-valued results.

### equal

<a id="entry-presentation_rust_relations_capability_rust_native_rust_api_session_equal_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_equal.eeef94e2f603"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn equal(
    &self,
    left: &Expression,
    right: &Expression,
) -> Result<Expression, ApiError>
```


### not_equal

<a id="entry-presentation_rust_relations_capability_rust_native_rust_api_session_not_equal_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_not_equal.5c557c43a467"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn not_equal(
    &self,
    left: &Expression,
    right: &Expression,
) -> Result<Expression, ApiError>
```


### less_than

<a id="entry-presentation_rust_relations_capability_rust_native_rust_api_session_less_than_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_less_than.3a6123cc16eb"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn less_than(
    &self,
    left: &Expression,
    right: &Expression,
) -> Result<Expression, ApiError>
```

<a id="entry-presentation_rust_relations_capability_rust_native_rust_api_expression_operations_expression_less_than_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_expression_operations_expression_less_than.5104f51d812f"></a>
<p class="symi-entry-owner">api::expression_operations::Expression method</p>

```rust signature
pub fn less_than(
    &self,
    other: &Expression,
) -> Result<Expression, ApiError>
```


### less_than_or_equal

<a id="entry-presentation_rust_relations_capability_rust_native_rust_api_session_less_than_or_equal_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_less_than_or_equal.84a3cf06d28d"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn less_than_or_equal(
    &self,
    left: &Expression,
    right: &Expression,
) -> Result<Expression, ApiError>
```


### greater_than

<a id="entry-presentation_rust_relations_capability_rust_native_rust_api_session_greater_than_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_greater_than.406463643ad7"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn greater_than(
    &self,
    left: &Expression,
    right: &Expression,
) -> Result<Expression, ApiError>
```


### greater_than_or_equal

<a id="entry-presentation_rust_relations_capability_rust_native_rust_api_session_greater_than_or_equal_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_greater_than_or_equal.38854f9b5202"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn greater_than_or_equal(
    &self,
    left: &Expression,
    right: &Expression,
) -> Result<Expression, ApiError>
```


## Example

Relations are symbolic expressions until they are evaluated.

```rust
use symi::api::prelude::*;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let session = Session::new();
    let x = session.symbol("x");

    println!("{}", session.less_than(&x, &session.integer(1))?);
    println!("{}", session.equal(&session.rational(2, 4)?, &session.rational(1, 2)?)?);
    Ok(())
}
```

