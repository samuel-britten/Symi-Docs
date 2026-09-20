# Zero equivalence

### zero_equivalent

<a id="entry-presentation_rust_api_session_zero_equivalent"></a>
<a id="placement-placement.rust.native_rust.api_session_zero_equivalent.58c8fe79d263"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn zero_equivalent(
    &self,
    target: &Expression,
    constraint: Option<&Expression>,
) -> Result<crate::zero_equivalence::ZeroEquivalenceVerdict, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_expression_zero_equivalent.ff80aa751848"></a>
<p class="symi-entry-owner">api::Expression method: <code>api::Expression::zero_equivalent</code></p>

```rust signature
pub fn zero_equivalent(
    &self,
    constraint: Option<&Expression>,
) -> Result<crate::zero_equivalence::ZeroEquivalenceVerdict, ApiError>
```

</details>



Proves whether an expression is zero at every point where the input expression is defined within
the declared region. `"true"` is an exact theorem replay, `"false"` has an exact counterexample,
and `"unknown"` is an honest decline. Numeric evaluation is never proof evidence.

The optional logical `constraint` is combined with existing symbol assumptions without changing
them. A `"true"` result does not mean `simplify(expression)` may replace the expression by the
literal `0`: that stricter transformation also needs the expression to be defined everywhere in
the declared region.

The initial admitted routes are the principal-branch Gudermannian identity for a real variable on
`-pi/2 < x < pi/2`, and the Riemann zeta reflection relation. The latter remains a nonzero-shaped
expression under ordinary simplification because its written factors have exceptional points.


```rust
use symi::api::prelude::*;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let session = Session::new();
    let relation = session.parse("2^(1-z)*cos(pi*z/2)*gamma(z)*zeta(z) - pi^z*zeta(1-z)")?;
    println!("{}", session.zero_equivalent(&relation, None)?.as_str());
    Ok(())
}
```


## Additional API

### ZeroEquivalenceVerdict

<a id="entry-presentation_rust_api_zeroequivalenceverdict"></a>
<a id="placement-placement.rust.native_rust.api_zeroequivalenceverdict.4803e7d8b36f"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use crate::zero_equivalence::ZeroEquivalenceVerdict;
```

Re-exports the three-valued zero-equivalence verdict returned by `zero_equivalent`.

