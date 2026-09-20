# Specialized canonical forms

These transformations have a fixed normal-form contract: each one produces a
determined shape and never runs the heuristic search used by
[`simplify`](simplification-general.md#simplify). Use them when the output
shape matters more than minimal size.

Related rewrites are on [algebraic transforms](algebraic-transforms.md) and
[trigonometric and complex rewrites](trigonometric-complex-rewrites.md).

## Canonical presentation passes

### piecewise_fold

<a id="entry-presentation_rust_api_session_piecewise_fold"></a>
<a id="placement-placement.rust.native_rust.api_solving_session_piecewise_fold.d9d06877bd84"></a>
<p class="symi-entry-owner">api::solving::Session method</p>

```rust signature
pub fn piecewise_fold(
    &self,
    input_expression: &Expression,
) -> Result<Expression, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_expression_operations_expression_piecewise_fold.a5c09a8260de"></a>
<p class="symi-entry-owner">api::expression_operations::Expression method: <code>api::expression_operations::Expression::piecewise_fold</code></p>

```rust signature
pub fn piecewise_fold(&self) -> Result<Expression, ApiError>
```

</details>



Expand `abs`, `signum`, and `heaviside_step` definitions recursively and fold
piecewise operands of sums, products, powers, factorials, and ordinary function
calls into one top-level piecewise expression. For example, `x*abs(x - 1)`
becomes the exact two-branch definition with values `x*(x - 1)` and
`-x*(x - 1)`. Branch combinations retain first-match order and conditions are
conjoined exactly.

Each structural fold is limited to 16 branches and 128 stored nodes, with a
per-input growth limit of eight times the source node count. A node that would
exceed a limit remains unfolded; the operation still returns an exact,
equality-preserving expression and may therefore return the input unchanged.

### rewrite_special_functions

<a id="entry-presentation_rust_api_session_rewrite_special_functions"></a>
<a id="placement-placement.rust.native_rust.api_session_rewrite_special_functions.c348e1dbfa43"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn rewrite_special_functions(
    &self,
    target: &Expression,
    basis: SpecialFunctionBasis,
) -> Result<Expression, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_expression_rewrite_special_functions.862d5aececd0"></a>
<p class="symi-entry-owner">api::Expression method: <code>api::Expression::rewrite_special_functions</code></p>

```rust signature
pub fn rewrite_special_functions(
    &self,
    basis: SpecialFunctionBasis,
) -> Result<Expression, ApiError>
```

</details>



Rewrite beta, gamma, binomial, factorial, and rising-factorial representations
into the requested `"gamma"`, `"factorial"`, `"binomial"`, or
`"rising_factorial"` basis. The exact identities are applied only when their
domain gates are proven: factorial and binomial conversions require the
relevant non-negative integers, rising-factorial conversions additionally
require a positive base, and beta-to-gamma requires two positive arguments.
For example, with `n` declared a positive integer, `n!` may be rewritten into
the gamma basis and `gamma(n)` into the factorial basis. A site with
unconstrained arguments is returned unchanged. Gamma ratios with a literal
non-negative argument offset are minimized to their exact shifted product.

The context method, expression convenience method, and module function have
the same behavior. An unknown basis name raises an explicit error; there is no
force mode.

### presentation_normal_form

<a id="entry-presentation_rust_api_session_presentation_normal_form"></a>
<a id="placement-placement.rust.native_rust.api_algebra_session_presentation_normal_form.9876501ffad2"></a>
<p class="symi-entry-owner">api::algebra::Session method</p>

```rust signature
pub fn presentation_normal_form(
    &self,
    input_expression: &Expression,
) -> Result<Expression, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_expression_operations_expression_presentation_normal_form.2520484683fe"></a>
<p class="symi-entry-owner">api::expression_operations::Expression method: <code>api::expression_operations::Expression::presentation_normal_form</code></p>

```rust signature
pub fn presentation_normal_form(&self) -> Result<Expression, ApiError>
```

</details>



The cheap, bounded display-oriented pass run at solver output seams: rational
normal form only, kept only when the weighted complexity does not grow.
Unlike `simplify` it never runs the full heuristic ladder, so it is fast and
deterministic in shape.

## Example

This family is not part of the recommended `symi::api` facade in this release. Call it through the native modules in the [native Rust API reference](/symi/rust/api/symi/).


## Additional API

### SpecialFunctionBasis

<a id="entry-presentation_rust_api_specialfunctionbasis"></a>
<a id="placement-placement.rust.native_rust.api_specialfunctionbasis.f2054adf6eff"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use options::SpecialFunctionBasis;
```

A canonical target basis for special-function rewrites.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_options_specialfunctionbasis.8a938ead48ae"></a>
<p class="symi-entry-owner">Type: <code>api::options::SpecialFunctionBasis</code></p>

```rust signature
pub enum SpecialFunctionBasis
```

</details>

#### SpecialFunctionBasis.Binomial

<a id="entry-presentation_rust_api_specialfunctionbasis_binomial"></a>
<a id="placement-placement.rust.native_rust.api_options_specialfunctionbasis_binomial.8bf8d25d89d4"></a>
<p class="symi-entry-owner">api::options::SpecialFunctionBasis variant</p>

```rust signature
Binomial,
```

Rewrite toward binomial coefficients.

#### SpecialFunctionBasis.Factorial

<a id="entry-presentation_rust_api_specialfunctionbasis_factorial"></a>
<a id="placement-placement.rust.native_rust.api_options_specialfunctionbasis_factorial.dc6346dcbe28"></a>
<p class="symi-entry-owner">api::options::SpecialFunctionBasis variant</p>

```rust signature
Factorial,
```

Rewrite toward factorials.

#### SpecialFunctionBasis.Gamma

<a id="entry-presentation_rust_api_specialfunctionbasis_gamma"></a>
<a id="placement-placement.rust.native_rust.api_options_specialfunctionbasis_gamma.6ba024890f5d"></a>
<p class="symi-entry-owner">api::options::SpecialFunctionBasis variant</p>

```rust signature
Gamma,
```

Rewrite toward gamma functions.

#### SpecialFunctionBasis.RisingFactorial

<a id="entry-presentation_rust_api_specialfunctionbasis_risingfactorial"></a>
<a id="placement-placement.rust.native_rust.api_options_specialfunctionbasis_risingfactorial.91ed4bccc8a5"></a>
<p class="symi-entry-owner">api::options::SpecialFunctionBasis variant</p>

```rust signature
RisingFactorial,
```

Rewrite toward rising factorials.

#### SpecialFunctionBasis.from_name

<a id="entry-presentation_rust_api_specialfunctionbasis_from_name"></a>
<a id="placement-placement.rust.native_rust.api_options_specialfunctionbasis_from_name.d93c2e65f252"></a>
<p class="symi-entry-owner">api::options::SpecialFunctionBasis method</p>

```rust signature
pub fn from_name(name: &str) -> Result<Self, ApiError>
```

Resolves the stable binding spelling of a special-function basis.

#### SpecialFunctionBasis.into_core

<a id="entry-presentation_rust_api_specialfunctionbasis_into_core"></a>
<a id="placement-placement.rust.native_rust.api_options_specialfunctionbasis_into_core.75fb0f7731fe"></a>
<p class="symi-entry-owner">api::options::SpecialFunctionBasis method</p>

```rust signature
pub fn into_core(
    self,
) -> crate::special_function_basis::SpecialFunctionBasis
```

Converts this binding-neutral value to the engine representation.

#### SpecialFunctionBasis.name

<a id="entry-presentation_rust_api_specialfunctionbasis_name"></a>
<a id="placement-placement.rust.native_rust.api_options_specialfunctionbasis_name.cd6b7c9cd288"></a>
<p class="symi-entry-owner">api::options::SpecialFunctionBasis method</p>

```rust signature
pub fn name(self) -> &'static str
```

Returns the stable binding spelling of this special-function basis.

