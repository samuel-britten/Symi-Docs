# Boolean algebra and logic

See [Evaluation and constants](evaluation-and-constants.md) for the distinction
between symbolic relations, `execute`, logical simplification, and the exact
three-valued host query.

Logical formulas are built from the connective heads `logical_and`,
`logical_or`, `logical_not`, `implies`, `equivalent` (the n-ary "all
arguments equal" biconditional), and `exclusive_or` (n-ary parity), applied
through `parse` or `call`/`function_call` over the relational atoms
(`equal`, `less_than`, …) and ordinary symbols treated as Boolean
variables. The associative-commutative connectives auto-simplify to a flat,
sorted, deduplicated, constant- and complement-folded canonical form. The
two Boolean constants are `logical_true` and `logical_false`.

Normal forms and Boolean simplification are documented in
[logical transforms](logical-transforms.md).

### logical_true

<a id="entry-presentation_rust_api_session_logical_true"></a>
<a id="placement-placement.rust.native_rust.api_session_logical_true.622bf65ac118"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn logical_true(&self) -> Expression
```


The Boolean constant true (\(\top\)).

### logical_false

<a id="entry-presentation_rust_api_session_logical_false"></a>
<a id="placement-placement.rust.native_rust.api_session_logical_false.73e7fda3fc79"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn logical_false(&self) -> Expression
```


The Boolean constant false (\(\bot\)).

### evaluate_truth

<a id="entry-presentation_rust_api_session_evaluate_truth"></a>
<a id="placement-placement.rust.native_rust.api_session_evaluate_truth.06c39256d903"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn evaluate_truth(
    &self,
    target: &Expression,
) -> Result<TruthValue, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_expression_evaluate_truth.175a083346f4"></a>
<p class="symi-entry-owner">api::Expression method: <code>api::Expression::evaluate_truth</code></p>

```rust signature
pub fn evaluate_truth(&self) -> Result<TruthValue, ApiError>
```

</details>


`evaluate_truth(predicate)` uses exact three-valued logic. Python returns `True`, `False`, or
`None`; JavaScript returns `true`, `false`, or `null`; Rust returns `TruthValue`. Non-logical
numeric expressions are rejected.

**The third value means undecided, never false.** A `None` / `null` / `unknown` result says the
procedure could not prove either verdict — not that the predicate is false. This distinction is
load-bearing at the call site, because a host-language `if` treats `None` and `null` as falsy: a
test written `if evaluate_truth(...)` silently reads every undecided relation as false. Compare
against `True` / `False` (or `true` / `false`) explicitly whenever the undecided case matters.

Order, equality and sign relations are decided exactly, by rational and polynomial arithmetic
only — no floating point ever enters the decision. The decided class is the closed-form real
constants: integer and rational literals, `pi`, real algebraic numbers, sums, products, integer
powers, and rational powers of a positive base (so `sqrt` and nested radicals), together with
`abs` and `signum` over those. Within that class a comparison is decided in full, including
values that need term collection to become constant at all, such as `x + sqrt(5) < x + 3`.

Outside it the answer is `unknown` by design, not by accident: comparisons whose difference
involves `e`, `log 2` or a special-function value, order between unassumed symbols, and any
relation with a provably non-real operand — `sqrt(-4)` is `2i`, about which no order verdict is
meaningful — all decline rather than guess.

## Example

Logical expressions carry a three-valued outcome.

```rust
use symi::api::prelude::*;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let session = Session::new();
    let x = session.symbol("x");
    let bounded = session.less_than(&session.rational(1, 3)?, &session.integer(1))?;

    println!("{:?}", session.evaluate_truth(&bounded)?);
    println!("{:?}", session.evaluate_truth(&session.less_than(&x, &session.integer(1))?)?);
    Ok(())
}
```


## Additional API

### api::logic

<a id="entry-presentation_rust_native_module_api_logic"></a>
<a id="placement-placement.rust.native_rust.api_logic.6fdadc26a67d"></a>
<p class="symi-entry-owner">api module</p>

```rust signature
pub mod logic;
```

Logical normal-form and quantifier operations of the native API.

