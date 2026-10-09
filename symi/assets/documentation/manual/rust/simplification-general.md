# General simplification

The general simplification ladder and the two rational-form operations it is
built on. Directed algebraic rewrites are on
[algebraic transforms](algebraic-transforms.md), and the fixed-contract
presentation passes are on
[specialized canonical forms](specialized-canonical-forms.md).

### simplify

<a id="placement-placement.rust.native_rust.api_assumptionscope_simplify.763214b33bd0"></a>
`symi::api::AssumptionScope — pub fn simplify(&self, target: &Expression) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_expression_simplify.fc65f20d22e1"></a>
`symi::api::Expression — pub fn simplify(&self) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_session_simplify.64a0e68b22a8"></a>
`symi::api::Session — pub fn simplify(&self, target: &Expression) -> Result<Expression, ApiError>`



The full heuristic simplification ladder: weighted-complexity-guided search
over rational normal form, radical denesting, trigonometric/log rewrites,
parity and absolute-value rules. The result is never accepted if its weighted
complexity grows. Principal square roots extract structural square content
only under a realness proof: `sqrt(x^2)` becomes `abs(x)` for real `x`, while
`sqrt(z^2)` remains unchanged for a default-complex `z`.

Declared symbol assumptions also enable a small set of branch-aware principal-power reductions.
For a negative real `z`, `sqrt(1 / z)` normalizes to `-z ** (-1 / 2)`; for a strictly positive
factor `p`, `(u * p) ** w` may extract `p ** w`; and a declared-integer exponent distributes over
a product. Each rule declines without its exact guard. `abs(a + i*b)` can reduce through exact,
wrapper-free Cartesian components only when its squared norm simplifies to a smaller form, such as
`abs(3 - sqrt(7) + i*sqrt(6*sqrt(7) - 15)) == 1`.

#### Radicals and perfect powers

These four rules are applied by ordinary construction, so they hold for every
expression the library builds, not only for the results of `simplify`.

A **positive rational base under a rational exponent** has its perfect-power
content removed exactly whenever the degree of that content divides the
exponent's reduced denominator. So `991026973 ** Fraction(1, 6)` becomes
`sqrt(997)`, because `991026973 = 997^3` and `3` divides `6`; the base is never
factored, only exact integer roots of the degrees the denominator admits are
tried. A rational base reduces only when its numerator and denominator are both
exact roots of the same degree. Content whose degree does not divide the
denominator is left to the ordinary surd canonicalizer, so `sqrt(8)` is still
`2*sqrt(2)`. Negative and non-real bases are excluded: `(-8) ** Fraction(1, 3)`
stays a principal power, because extracting an odd perfect power from a
negative base does not preserve the principal argument.

An **expanded binomial square** — a three-term sum such as `1 + 4*sqrt(r) + 4*r`
— is recognised only through an exact replayed witness: a candidate binomial is
built from the square roots of two of the terms and is accepted only when
expanding its square reproduces the original sum exactly. Nothing is matched by
pattern, so a middle term that differs by one is refused rather than repaired.

The witness proves squareness, not a branch. Its two consumers carry separate
guards:

- under a **square root**, `sqrt(u^2)` returns `abs(u)` for a witness proved
  real, and the ordinary exact sign procedure then folds the absolute value
  when the sign is decided; and
- under **any other exponent**, `(u^2) ** a` becomes `u ** (2*a)` only for a
  witness proved *strictly positive*, because the principal-power composition
  law is available only on the positive real axis. A real witness of unknown
  sign reaches the absolute value but not the nested power.

### cancel

<a id="placement-placement.rust.native_rust.api_expression_cancel.14cbf888f35c"></a>
`symi::api::Expression — pub fn cancel(&self) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_session_cancel.aaaaae2b335c"></a>
`symi::api::Session — pub fn cancel(&self, target: &Expression) -> Result<Expression, ApiError>`



Rational normal form: write as a single fraction and divide out the
polynomial GCD of numerator and denominator.

### together

<a id="placement-placement.rust.native_rust.api_expression_together.d506a1bfefb0"></a>
`symi::api::Expression — pub fn together(&self) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_session_together.de0b5add18e1"></a>
`symi::api::Session — pub fn together(&self, target: &Expression) -> Result<Expression, ApiError>`



Combine a sum of fractions over a common denominator. On Symi's
representation `together` and `cancel` coincide; both names exist because
they are distinct user intents.

## Example

The general ladder chooses a smaller equivalent form.

```rust
use symi::api::prelude::*;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let session = Session::new();

    println!("{}", session.parse("sin(x)^2 + cos(x)^2")?.simplify()?);
    println!("{}", session.parse("1/x + 1/(x + 1)")?.together()?);
    println!("{}", session.parse("(x^2 - 1)/(x - 1)")?.cancel()?);
    Ok(())
}
```

