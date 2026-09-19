# Integral transforms

All four entries are *eager* dispatchers: a table of closed-form atoms fires
first, then algebraic rules (linearity, shifts, scaling, derivative,
convolution), and inputs neither layer recognises return the **unevaluated
transform node** (composable via `execute` later). Unevaluated transform
nodes can also be built directly through `parse`.

### laplace_transform

<a id="entry-presentation_rust_integral_transforms_capability_rust_native_rust_api_assumptionscope_laplace_transform_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_assumptionscope_laplace_transform.4b2fe0937ff6"></a>
<p class="symi-entry-owner">api::AssumptionScope method</p>

```rust signature
pub fn laplace_transform<'a, TimeType, FrequencyType>(
    &self,
    target: &Expression,
    time_variable: TimeType,
    frequency_variable: FrequencyType,
) -> Result<Expression, ApiError>
where
    TimeType: Into<VariableLike<'a>>,
    FrequencyType: Into<VariableLike<'a>>,
```

<a id="entry-presentation_rust_integral_transforms_capability_rust_native_rust_api_session_laplace_transform_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_laplace_transform.9a67fc434d0d"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn laplace_transform<'a, TimeType, FrequencyType>(
    &self,
    target: &Expression,
    time_variable: TimeType,
    frequency_variable: FrequencyType,
) -> Result<Expression, ApiError>
where
    TimeType: Into<VariableLike<'a>>,
    FrequencyType: Into<VariableLike<'a>>,
```


Forward Laplace transform \(F(s) = \int_0^\infty f(t)e^{-st}\,dt\).

### inverse_laplace_transform

<a id="entry-presentation_rust_integral_transforms_capability_rust_native_rust_api_session_inverse_laplace_transform_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_inverse_laplace_transform.95b2a2191b36"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn inverse_laplace_transform<'a, FrequencyType, TimeType>(
    &self,
    target: &Expression,
    frequency_variable: FrequencyType,
    time_variable: TimeType,
) -> Result<Expression, ApiError>
where
    FrequencyType: Into<VariableLike<'a>>,
    TimeType: Into<VariableLike<'a>>,
```


Inverse Laplace transform; rational inputs route through a partial-fraction
reverse lookup.

### fourier_transform

<a id="entry-presentation_rust_integral_transforms_capability_rust_native_rust_api_assumptionscope_fourier_transform_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_assumptionscope_fourier_transform.216526520dd0"></a>
<p class="symi-entry-owner">api::AssumptionScope method</p>

```rust signature
pub fn fourier_transform<'a, TimeType, FrequencyType>(
    &self,
    target: &Expression,
    time_variable: TimeType,
    frequency_variable: FrequencyType,
) -> Result<Expression, ApiError>
where
    TimeType: Into<VariableLike<'a>>,
    FrequencyType: Into<VariableLike<'a>>,
```

<a id="entry-presentation_rust_integral_transforms_capability_rust_native_rust_api_session_fourier_transform_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_fourier_transform.d8e42f961b70"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn fourier_transform<'a, TimeType, FrequencyType>(
    &self,
    target: &Expression,
    time_variable: TimeType,
    frequency_variable: FrequencyType,
) -> Result<Expression, ApiError>
where
    TimeType: Into<VariableLike<'a>>,
    FrequencyType: Into<VariableLike<'a>>,
```


Forward Fourier transform in the angular-frequency convention
\(F(\omega) = \int f(t)e^{-i\omega t}\,dt\).

### inverse_fourier_transform

<a id="entry-presentation_rust_integral_transforms_capability_rust_native_rust_api_session_inverse_fourier_transform_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_inverse_fourier_transform.c7cd68862f07"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn inverse_fourier_transform<'a, FrequencyType, TimeType>(
    &self,
    target: &Expression,
    frequency_variable: FrequencyType,
    time_variable: TimeType,
) -> Result<Expression, ApiError>
where
    FrequencyType: Into<VariableLike<'a>>,
    TimeType: Into<VariableLike<'a>>,
```


Inverse Fourier transform of the same convention.

## Example

This family is not part of the recommended `symi::api` facade in this release. Call it through the native modules in the [native Rust API reference](/symi/rust/api/symi/).


## Additional API

### fourier_transform

<a id="entry-presentation_rust_integral_transforms_capability_rust_native_rust_api_expression_fourier_transform_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_expression_fourier_transform.8bf2fce29097"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn fourier_transform<'a, TimeType, FrequencyType>(
    &self,
    time_variable: TimeType,
    frequency_variable: FrequencyType,
) -> Result<Expression, ApiError>
where
    TimeType: Into<VariableLike<'a>>,
    FrequencyType: Into<VariableLike<'a>>,
```

Forward Fourier transform in the angular-frequency convention \(F(\omega) = \int f(t)e^{-i\omega t}\,dt\).

### inverse_fourier_transform

<a id="entry-presentation_rust_integral_transforms_capability_rust_native_rust_api_expression_inverse_fourier_transform_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_expression_inverse_fourier_transform.2dcd5563e752"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn inverse_fourier_transform<'a, FrequencyType, TimeType>(
    &self,
    frequency_variable: FrequencyType,
    time_variable: TimeType,
) -> Result<Expression, ApiError>
where
    FrequencyType: Into<VariableLike<'a>>,
    TimeType: Into<VariableLike<'a>>,
```

Inverse Fourier transform of the same convention.

### inverse_laplace_transform

<a id="entry-presentation_rust_integral_transforms_capability_rust_native_rust_api_expression_inverse_laplace_transform_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_expression_inverse_laplace_transform.a4034e2e49df"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn inverse_laplace_transform<'a, FrequencyType, TimeType>(
    &self,
    frequency_variable: FrequencyType,
    time_variable: TimeType,
) -> Result<Expression, ApiError>
where
    FrequencyType: Into<VariableLike<'a>>,
    TimeType: Into<VariableLike<'a>>,
```

Inverse Laplace transform; rational inputs route through a partial-fraction reverse lookup.

### laplace_transform

<a id="entry-presentation_rust_integral_transforms_capability_rust_native_rust_api_expression_laplace_transform_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_expression_laplace_transform.de620f406cc7"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn laplace_transform<'a, TimeType, FrequencyType>(
    &self,
    time_variable: TimeType,
    frequency_variable: FrequencyType,
) -> Result<Expression, ApiError>
where
    TimeType: Into<VariableLike<'a>>,
    FrequencyType: Into<VariableLike<'a>>,
```

Forward Laplace transform \(F(s) = \int_0^\infty f(t)e^{-st}\,dt\).

