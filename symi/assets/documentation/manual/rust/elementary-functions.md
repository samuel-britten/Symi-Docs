# Elementary functions

Elementary functions simplify when their arguments provide enough exact information.


All routed through the auto-simplifying builders, so the result is in
canonical ASAE form (e.g. `sqrt(x)` is stored as `x^(1/2)`, known special
values collapse).

### sin

<a id="entry-presentation_rust_api_session_sin"></a>
<a id="placement-placement.rust.native_rust.api_session_sin.48775e99956a"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn sin(&self, argument: &Expression) -> Result<Expression, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_expression_sin.784298390a00"></a>
<p class="symi-entry-owner">api::Expression method: <code>api::Expression::sin</code></p>

```rust signature
pub fn sin(&self) -> Result<Expression, ApiError>
```

</details>


### cos

<a id="entry-presentation_rust_api_session_cos"></a>
<a id="placement-placement.rust.native_rust.api_session_cos.052a85edbb1e"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn cos(&self, argument: &Expression) -> Result<Expression, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_expression_cos.7d5f529c3697"></a>
<p class="symi-entry-owner">api::Expression method: <code>api::Expression::cos</code></p>

```rust signature
pub fn cos(&self) -> Result<Expression, ApiError>
```

</details>


### tan

<a id="entry-presentation_rust_api_session_tan"></a>
<a id="placement-placement.rust.native_rust.api_session_tan.9b5cc68ab9d6"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn tan(&self, argument: &Expression) -> Result<Expression, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_expression_tan.57e7d4137b54"></a>
<p class="symi-entry-owner">api::Expression method: <code>api::Expression::tan</code></p>

```rust signature
pub fn tan(&self) -> Result<Expression, ApiError>
```

</details>


### sec

<a id="entry-presentation_rust_api_session_sec"></a>
<a id="placement-placement.rust.native_rust.api_session_sec.06b7f8c585e0"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn sec(&self, argument: &Expression) -> Result<Expression, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_expression_sec.e028269effb3"></a>
<p class="symi-entry-owner">api::Expression method: <code>api::Expression::sec</code></p>

```rust signature
pub fn sec(&self) -> Result<Expression, ApiError>
```

</details>


### csc

<a id="entry-presentation_rust_api_session_csc"></a>
<a id="placement-placement.rust.native_rust.api_session_csc.a5d79de408ae"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn csc(&self, argument: &Expression) -> Result<Expression, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_expression_csc.dedfddfa959f"></a>
<p class="symi-entry-owner">api::Expression method: <code>api::Expression::csc</code></p>

```rust signature
pub fn csc(&self) -> Result<Expression, ApiError>
```

</details>


### cot

<a id="entry-presentation_rust_api_session_cot"></a>
<a id="placement-placement.rust.native_rust.api_session_cot.73e3744aa33f"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn cot(&self, argument: &Expression) -> Result<Expression, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_expression_cot.65d1894ef7c9"></a>
<p class="symi-entry-owner">api::Expression method: <code>api::Expression::cot</code></p>

```rust signature
pub fn cot(&self) -> Result<Expression, ApiError>
```

</details>


### arcsin

<a id="entry-presentation_rust_api_session_arcsin"></a>
<a id="placement-placement.rust.native_rust.api_session_arcsin.a6bb8641feac"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn arcsin(
    &self,
    argument: &Expression,
) -> Result<Expression, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_expression_arcsin.3c48b9e1ccfb"></a>
<p class="symi-entry-owner">api::Expression method: <code>api::Expression::arcsin</code></p>

```rust signature
pub fn arcsin(&self) -> Result<Expression, ApiError>
```

</details>


### arccos

<a id="entry-presentation_rust_api_session_arccos"></a>
<a id="placement-placement.rust.native_rust.api_session_arccos.ac4e2b98dbd8"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn arccos(
    &self,
    argument: &Expression,
) -> Result<Expression, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_expression_arccos.a0b3fb29df5f"></a>
<p class="symi-entry-owner">api::Expression method: <code>api::Expression::arccos</code></p>

```rust signature
pub fn arccos(&self) -> Result<Expression, ApiError>
```

</details>


### arctan

<a id="entry-presentation_rust_api_session_arctan"></a>
<a id="placement-placement.rust.native_rust.api_session_arctan.8b828e298135"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn arctan(
    &self,
    argument: &Expression,
) -> Result<Expression, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_expression_arctan.7d9f85b071ad"></a>
<p class="symi-entry-owner">api::Expression method: <code>api::Expression::arctan</code></p>

```rust signature
pub fn arctan(&self) -> Result<Expression, ApiError>
```

</details>


### arcsec

<a id="entry-presentation_rust_api_session_arcsec"></a>
<a id="placement-placement.rust.native_rust.api_session_arcsec.be853f3b4e58"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn arcsec(
    &self,
    argument: &Expression,
) -> Result<Expression, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_expression_arcsec.d4da0259d3df"></a>
<p class="symi-entry-owner">api::Expression method: <code>api::Expression::arcsec</code></p>

```rust signature
pub fn arcsec(&self) -> Result<Expression, ApiError>
```

</details>


### arccsc

<a id="entry-presentation_rust_api_session_arccsc"></a>
<a id="placement-placement.rust.native_rust.api_session_arccsc.9eb9623e7319"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn arccsc(
    &self,
    argument: &Expression,
) -> Result<Expression, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_expression_arccsc.01e625cd64e5"></a>
<p class="symi-entry-owner">api::Expression method: <code>api::Expression::arccsc</code></p>

```rust signature
pub fn arccsc(&self) -> Result<Expression, ApiError>
```

</details>


### arccot

<a id="entry-presentation_rust_api_session_arccot"></a>
<a id="placement-placement.rust.native_rust.api_session_arccot.088a0e2dd8e6"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn arccot(
    &self,
    argument: &Expression,
) -> Result<Expression, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_expression_arccot.9e91973581df"></a>
<p class="symi-entry-owner">api::Expression method: <code>api::Expression::arccot</code></p>

```rust signature
pub fn arccot(&self) -> Result<Expression, ApiError>
```

</details>


### sinh

<a id="entry-presentation_rust_api_session_sinh"></a>
<a id="placement-placement.rust.native_rust.api_session_sinh.a3f7b924fefd"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn sinh(
    &self,
    argument: &Expression,
) -> Result<Expression, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_expression_sinh.679ab2e9da49"></a>
<p class="symi-entry-owner">api::Expression method: <code>api::Expression::sinh</code></p>

```rust signature
pub fn sinh(&self) -> Result<Expression, ApiError>
```

</details>


### cosh

<a id="entry-presentation_rust_api_session_cosh"></a>
<a id="placement-placement.rust.native_rust.api_session_cosh.74f6d15815f1"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn cosh(
    &self,
    argument: &Expression,
) -> Result<Expression, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_expression_cosh.32e255b10e28"></a>
<p class="symi-entry-owner">api::Expression method: <code>api::Expression::cosh</code></p>

```rust signature
pub fn cosh(&self) -> Result<Expression, ApiError>
```

</details>


### tanh

<a id="entry-presentation_rust_api_session_tanh"></a>
<a id="placement-placement.rust.native_rust.api_session_tanh.96a80235a5a8"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn tanh(
    &self,
    argument: &Expression,
) -> Result<Expression, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_expression_tanh.0e6a1990345c"></a>
<p class="symi-entry-owner">api::Expression method: <code>api::Expression::tanh</code></p>

```rust signature
pub fn tanh(&self) -> Result<Expression, ApiError>
```

</details>


### sech

<a id="entry-presentation_rust_api_session_sech"></a>
<a id="placement-placement.rust.native_rust.api_session_sech.43d904f78136"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn sech(
    &self,
    argument: &Expression,
) -> Result<Expression, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_expression_sech.dbb2b7fe485f"></a>
<p class="symi-entry-owner">api::Expression method: <code>api::Expression::sech</code></p>

```rust signature
pub fn sech(&self) -> Result<Expression, ApiError>
```

</details>


### csch

<a id="entry-presentation_rust_api_session_csch"></a>
<a id="placement-placement.rust.native_rust.api_session_csch.496236b0de3e"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn csch(
    &self,
    argument: &Expression,
) -> Result<Expression, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_expression_csch.668a7eaeea0d"></a>
<p class="symi-entry-owner">api::Expression method: <code>api::Expression::csch</code></p>

```rust signature
pub fn csch(&self) -> Result<Expression, ApiError>
```

</details>


### coth

<a id="entry-presentation_rust_api_session_coth"></a>
<a id="placement-placement.rust.native_rust.api_session_coth.7308ff7b2d9b"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn coth(
    &self,
    argument: &Expression,
) -> Result<Expression, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_expression_coth.41cbb5f8f5c0"></a>
<p class="symi-entry-owner">api::Expression method: <code>api::Expression::coth</code></p>

```rust signature
pub fn coth(&self) -> Result<Expression, ApiError>
```

</details>


### arcsinh

<a id="entry-presentation_rust_api_session_arcsinh"></a>
<a id="placement-placement.rust.native_rust.api_session_arcsinh.2851f8b17aee"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn arcsinh(
    &self,
    argument: &Expression,
) -> Result<Expression, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_expression_arcsinh.c13f0896d550"></a>
<p class="symi-entry-owner">api::Expression method: <code>api::Expression::arcsinh</code></p>

```rust signature
pub fn arcsinh(&self) -> Result<Expression, ApiError>
```

</details>


### arccosh

<a id="entry-presentation_rust_api_session_arccosh"></a>
<a id="placement-placement.rust.native_rust.api_session_arccosh.4e8ee9ed7d9b"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn arccosh(
    &self,
    argument: &Expression,
) -> Result<Expression, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_expression_arccosh.120cc326e3e0"></a>
<p class="symi-entry-owner">api::Expression method: <code>api::Expression::arccosh</code></p>

```rust signature
pub fn arccosh(&self) -> Result<Expression, ApiError>
```

</details>


### arctanh

<a id="entry-presentation_rust_api_session_arctanh"></a>
<a id="placement-placement.rust.native_rust.api_session_arctanh.94eb57d50c43"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn arctanh(
    &self,
    argument: &Expression,
) -> Result<Expression, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_expression_arctanh.cce7a54ba246"></a>
<p class="symi-entry-owner">api::Expression method: <code>api::Expression::arctanh</code></p>

```rust signature
pub fn arctanh(&self) -> Result<Expression, ApiError>
```

</details>


### arcsech

<a id="entry-presentation_rust_api_session_arcsech"></a>
<a id="placement-placement.rust.native_rust.api_session_arcsech.1b8bc90eb3f2"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn arcsech(
    &self,
    argument: &Expression,
) -> Result<Expression, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_expression_arcsech.b7d7af7600db"></a>
<p class="symi-entry-owner">api::Expression method: <code>api::Expression::arcsech</code></p>

```rust signature
pub fn arcsech(&self) -> Result<Expression, ApiError>
```

</details>


### arccsch

<a id="entry-presentation_rust_api_session_arccsch"></a>
<a id="placement-placement.rust.native_rust.api_session_arccsch.2fc976472128"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn arccsch(
    &self,
    argument: &Expression,
) -> Result<Expression, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_expression_arccsch.201b9ef07ad5"></a>
<p class="symi-entry-owner">api::Expression method: <code>api::Expression::arccsch</code></p>

```rust signature
pub fn arccsch(&self) -> Result<Expression, ApiError>
```

</details>


### arccoth

<a id="entry-presentation_rust_api_session_arccoth"></a>
<a id="placement-placement.rust.native_rust.api_session_arccoth.6325c24f55bb"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn arccoth(
    &self,
    argument: &Expression,
) -> Result<Expression, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_expression_arccoth.fcb573c109bc"></a>
<p class="symi-entry-owner">api::Expression method: <code>api::Expression::arccoth</code></p>

```rust signature
pub fn arccoth(&self) -> Result<Expression, ApiError>
```

</details>


### exp

<a id="entry-presentation_rust_api_session_exp"></a>
<a id="placement-placement.rust.native_rust.api_session_exp.e98de33a027b"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn exp(&self, argument: &Expression) -> Result<Expression, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_expression_exp.ff5fa41b181b"></a>
<p class="symi-entry-owner">api::Expression method: <code>api::Expression::exp</code></p>

```rust signature
pub fn exp(&self) -> Result<Expression, ApiError>
```

</details>


The natural exponential.

### log

<a id="entry-presentation_rust_api_session_log"></a>
<a id="placement-placement.rust.native_rust.api_session_log.a3726be10ad2"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn log(
    &self,
    argument: &Expression,
    base: Option<&Expression>,
) -> Result<Expression, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_expression_log.888fb6f25b04"></a>
<p class="symi-entry-owner">api::Expression method: <code>api::Expression::log</code></p>

```rust signature
pub fn log(
    &self,
    base: Option<&Expression>,
) -> Result<Expression, ApiError>
```

</details>


Natural logarithm; with `base` given, `log(x)/log(base)`.

### sqrt

<a id="entry-presentation_rust_api_session_sqrt"></a>
<a id="placement-placement.rust.native_rust.api_session_sqrt.d918e989f8f0"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn sqrt(
    &self,
    argument: &Expression,
) -> Result<Expression, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_expression_sqrt.cf4fde2cbb0e"></a>
<p class="symi-entry-owner">api::Expression method: <code>api::Expression::sqrt</code></p>

```rust signature
pub fn sqrt(&self) -> Result<Expression, ApiError>
```

</details>


Principal square root, stored as `x^(1/2)`.

### root

<a id="entry-presentation_rust_api_session_root"></a>
<a id="placement-placement.rust.native_rust.api_session_root.a7cf0d4b71c8"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn root(
    &self,
    radicand: &Expression,
    index: &Expression,
) -> Result<Expression, ApiError>
```


Principal n-th root, stored as `x^(1/n)`.

### abs

<a id="entry-presentation_rust_api_session_abs"></a>
<a id="placement-placement.rust.native_rust.api_session_abs.2f5fa046c68c"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn abs(&self, argument: &Expression) -> Result<Expression, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_expression_abs.dbf032d725d4"></a>
<p class="symi-entry-owner">api::Expression method: <code>api::Expression::abs</code></p>

```rust signature
pub fn abs(&self) -> Result<Expression, ApiError>
```

</details>


The absolute value. It folds to `x` or `-x` whenever the sign of `x` is decided by the exact real
order procedure — the same decided class `evaluate_truth` reports on — so `abs(sqrt(5) - 2)`
becomes `sqrt(5) - 2` rather than staying wrapped. A sign the procedure cannot prove leaves the
call symbolic; `signum` folds on exactly the same reach.

### floor

<a id="entry-presentation_rust_api_session_floor"></a>
<a id="placement-placement.rust.native_rust.api_session_floor.b4f591af5ec1"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn floor(
    &self,
    argument: &Expression,
) -> Result<Expression, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_expression_floor.59e4c6c50035"></a>
<p class="symi-entry-owner">api::Expression method: <code>api::Expression::floor</code></p>

```rust signature
pub fn floor(&self) -> Result<Expression, ApiError>
```

</details>


### ceiling

<a id="entry-presentation_rust_api_session_ceiling"></a>
<a id="placement-placement.rust.native_rust.api_session_ceiling.ec61aed10966"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn ceiling(
    &self,
    argument: &Expression,
) -> Result<Expression, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_expression_ceiling.170f64adfbca"></a>
<p class="symi-entry-owner">api::Expression method: <code>api::Expression::ceiling</code></p>

```rust signature
pub fn ceiling(&self) -> Result<Expression, ApiError>
```

</details>


### conjugate

<a id="entry-presentation_rust_api_session_conjugate"></a>
<a id="placement-placement.rust.native_rust.api_session_conjugate.9e7294cfba81"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn conjugate(
    &self,
    argument: &Expression,
) -> Result<Expression, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_expression_conjugate.d6c3175256ed"></a>
<p class="symi-entry-owner">api::Expression method: <code>api::Expression::conjugate</code></p>

```rust signature
pub fn conjugate(&self) -> Result<Expression, ApiError>
```

</details>


Complex conjugate.

### factorial

<a id="entry-presentation_rust_api_session_factorial"></a>
<a id="placement-placement.rust.native_rust.api_session_factorial.568299c74924"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn factorial(
    &self,
    argument: &Expression,
) -> Result<Expression, ApiError>
```


### binomial

<a id="entry-presentation_rust_api_session_binomial"></a>
<a id="placement-placement.rust.native_rust.api_session_binomial.b6277398f2c5"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn binomial(
    &self,
    upper: &Expression,
    lower: &Expression,
) -> Result<Expression, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_expression_binomial.22f71a6a9c6f"></a>
<p class="symi-entry-owner">api::Expression method: <code>api::Expression::binomial</code></p>

```rust signature
pub fn binomial(
    &self,
    lower: &Expression,
) -> Result<Expression, ApiError>
```

</details>


Binomial coefficient C(n, k).

### min

<a id="entry-presentation_rust_api_session_min"></a>
<a id="placement-placement.rust.native_rust.api_session_min.d28470209f0e"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn min<'a, IteratorType>(
    &self,
    arguments: IteratorType,
) -> Result<Expression, ApiError>
where
    IteratorType: IntoIterator<Item = &'a Expression>,
```


Minimum of the arguments (variadic in Python; a JS array in WASM).

### max

<a id="entry-presentation_rust_api_session_max"></a>
<a id="placement-placement.rust.native_rust.api_session_max.8161cd9f6ac3"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn max<'a, IteratorType>(
    &self,
    arguments: IteratorType,
) -> Result<Expression, ApiError>
where
    IteratorType: IntoIterator<Item = &'a Expression>,
```


Maximum of the arguments (variadic in Python; a JS array in WASM).

## Example

This family is not part of the recommended `symi::api` facade in this release. Call it through the native modules in the [native Rust API reference](/symi/rust/api/symi/).


### absolute_value

<a id="entry-presentation_rust_api_session_absolute_value"></a>
<a id="placement-placement.rust.native_rust.api_session_absolute_value.751e409e7a72"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn absolute_value(
    &self,
    argument: &Expression,
) -> Result<Expression, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_expression_absolute_value.1284e138a72a"></a>
<p class="symi-entry-owner">api::Expression method: <code>api::Expression::absolute_value</code></p>

```rust signature
pub fn absolute_value(&self) -> Result<Expression, ApiError>
```

</details>


The absolute value \(|x|\), spelled in full. It is the same operation as
[`abs`](#abs); the two names exist because `abs` is the spelling the Python and
JavaScript hosts use for their own built-in, and the full name is the spelling
the mobile hosts generate.

## Additional API

### call_builtin

<a id="entry-presentation_rust_api_session_call_builtin"></a>
<a id="placement-placement.rust.native_rust.api_session_call_builtin.26c9dde29e05"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn call_builtin<'a, IteratorType>(
    &self,
    function: BuiltinFunction,
    arguments: IteratorType,
) -> Result<Expression, ApiError>
where
    IteratorType: IntoIterator<Item = &'a Expression>,
```

Applies a typed built-in function after validating every expression argument.

### signum

<a id="entry-presentation_rust_api_session_signum"></a>
<a id="placement-placement.rust.native_rust.api_session_signum.9e1d5add1b0a"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn signum(
    &self,
    argument: &Expression,
) -> Result<Expression, ApiError>
```

Provides the `signum` operation on this native type.

### BuiltinFunction

<a id="entry-presentation_rust_api_builtinfunction"></a>
<a id="placement-placement.rust.native_rust.api_builtinfunction.cc7e27000e26"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use crate::function::BuiltinFunction;
```

Public native enumeration named `builtin_function`.

### FunctionIdentifier

<a id="entry-presentation_rust_api_functionidentifier"></a>
<a id="placement-placement.rust.native_rust.api_functionidentifier.6fb5a71000dd"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use crate::function::FunctionIdentifier;
```

Public native enumeration named `FunctionIdentifier`.

