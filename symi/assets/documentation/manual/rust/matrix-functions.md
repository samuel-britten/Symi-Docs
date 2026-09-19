# Matrix functions and Jordan form

Matrix exponential, logarithm, trigonometric, hyperbolic, and Jordan operations are exact symbolic operations.


### exponential

<a id="entry-presentation_rust_matrix_functions_capability_rust_native_rust_api_matrix_operations_matrix_exponential_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_matrix_operations_matrix_exponential.827eae5f8246"></a>
<p class="symi-entry-owner">api::matrix_operations::Matrix method</p>

```rust signature
pub fn exponential(&self) -> Result<Matrix, ApiError>
```


The matrix exponential `exp(M)`, evaluated through the certified Jordan
decomposition. Declines on inputs whose eigenvalues cannot be certified
exactly.

### logarithm

<a id="entry-presentation_rust_matrix_functions_capability_rust_native_rust_api_matrix_operations_matrix_logarithm_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_matrix_operations_matrix_logarithm.9ffb8c11d04d"></a>
<p class="symi-entry-owner">api::matrix_operations::Matrix method</p>

```rust signature
pub fn logarithm(&self) -> Result<Matrix, ApiError>
```


The principal matrix logarithm `log(M)`. Raises on a zero or negative-real
eigenvalue (principal branch cut).

### square_root

<a id="entry-presentation_rust_matrix_functions_capability_rust_native_rust_api_matrix_operations_matrix_square_root_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_matrix_operations_matrix_square_root.0a9925cf359c"></a>
<p class="symi-entry-owner">api::matrix_operations::Matrix method</p>

```rust signature
pub fn square_root(&self) -> Result<Matrix, ApiError>
```


The principal matrix square root `sqrt(M)`; the result is verified to square
back to `M`. Raises on a negative-real eigenvalue, or on a nontrivial zero
eigenblock (non-analytic).

### sine

<a id="entry-presentation_rust_matrix_functions_capability_rust_native_rust_api_matrix_operations_matrix_sine_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_matrix_operations_matrix_sine.c5be46d0912d"></a>
<p class="symi-entry-owner">api::matrix_operations::Matrix method</p>

```rust signature
pub fn sine(&self) -> Result<Matrix, ApiError>
```


The primary matrix sine `sin(M)`, evaluated exactly through the certified
Jordan decomposition. The result is certified together with the matrix cosine
by `sin(M)^2 + cos(M)^2 = I`.

### cosine

<a id="entry-presentation_rust_matrix_functions_capability_rust_native_rust_api_matrix_operations_matrix_cosine_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_matrix_operations_matrix_cosine.e14302ce4b37"></a>
<p class="symi-entry-owner">api::matrix_operations::Matrix method</p>

```rust signature
pub fn cosine(&self) -> Result<Matrix, ApiError>
```


The primary matrix cosine `cos(M)`, evaluated exactly through the certified
Jordan decomposition and the trigonometric identity certificate.

### hyperbolic_sine

<a id="entry-presentation_rust_matrix_functions_capability_rust_native_rust_api_matrix_operations_matrix_hyperbolic_sine_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_matrix_operations_matrix_hyperbolic_sine.b02632102dc2"></a>
<p class="symi-entry-owner">api::matrix_operations::Matrix method</p>

```rust signature
pub fn hyperbolic_sine(&self) -> Result<Matrix, ApiError>
```


The primary hyperbolic matrix sine `sinh(M)`, evaluated exactly through the
certified Jordan decomposition. The result is certified together with the
hyperbolic matrix cosine by `cosh(M)^2 - sinh(M)^2 = I`.

### hyperbolic_cosine

<a id="entry-presentation_rust_matrix_functions_capability_rust_native_rust_api_matrix_operations_matrix_hyperbolic_cosine_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_matrix_operations_matrix_hyperbolic_cosine.f8133f4d722f"></a>
<p class="symi-entry-owner">api::matrix_operations::Matrix method</p>

```rust signature
pub fn hyperbolic_cosine(&self) -> Result<Matrix, ApiError>
```


The primary hyperbolic matrix cosine `cosh(M)`, evaluated exactly through the
certified Jordan decomposition and the hyperbolic identity certificate.

### jordan_decomposition

<a id="entry-presentation_rust_matrix_functions_capability_rust_native_rust_api_matrix_operations_matrix_jordan_decomposition_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_matrix_operations_matrix_jordan_decomposition.bc07f7af1f05"></a>
<p class="symi-entry-owner">api::matrix_operations::Matrix method</p>

```rust signature
pub fn jordan_decomposition(
    &self,
) -> Result<JordanDecomposition, ApiError>
```


The Jordan decomposition returned as `(similarity, jordan_form, blocks)` with
\(\operatorname{similarity} \operatorname{jordan\_form} \operatorname{similarity}^{-1} = M\), where `blocks` lists each
Jordan block as an `(eigenvalue, size)` pair. Every root is certified over an
exact algebraic field. **Notes:** WASM returns a `JordanDecomposition`
result class with `similarity`/`jordan_form`/`blocks` getters, each block a
`JordanBlock` with `eigenvalue`/`size` getters.

### jordan_decomposition (WASM result class)

<a id="entry-presentation_rust_matrix_functions_capability_rust_native_rust_api_matrix_operations_matrix_jordan_decomposition_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_matrix_operations_matrix_jordan_decomposition.bc07f7af1f05"></a>
<p class="symi-entry-owner">api::matrix_operations::Matrix method</p>

```rust signature
pub fn jordan_decomposition(
    &self,
) -> Result<JordanDecomposition, ApiError>
```


### similarity

### jordan_form

<a id="entry-presentation_rust_matrix_functions_capability_rust_native_rust_api_results_jordandecomposition_jordan_form_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_jordandecomposition_jordan_form.b7324b2e5153"></a>
<p class="symi-entry-owner">api::results::JordanDecomposition method</p>

```rust signature
pub fn jordan_form(&self) -> Matrix
```


### blocks

<a id="entry-presentation_rust_matrix_functions_capability_rust_native_rust_api_results_jordandecomposition_blocks_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_jordandecomposition_blocks.fdee4b1f1074"></a>
<p class="symi-entry-owner">api::results::JordanDecomposition method</p>

```rust signature
pub fn blocks(&self) -> Vec<JordanBlock>
```


### jordan_block (WASM result class)

### size

<a id="entry-presentation_rust_matrix_functions_capability_rust_native_rust_api_results_jordanblock_size_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_jordanblock_size.43c8e580da27"></a>
<p class="symi-entry-owner">api::results::JordanBlock method</p>

```rust signature
pub fn size(&self) -> usize
```


The `jordan_block.eigenvalue -> Expression` getter reuses the shared
`eigenvalue` heading documented above.

## Example

This family is not part of the recommended `symi::api` facade in this release. Call it through the native modules in the [native Rust API reference](/symi/rust/api/symi/).


## Additional API

### similarity

<a id="entry-presentation_rust_matrix_functions_capability_rust_native_rust_api_results_jordandecomposition_similarity_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_jordandecomposition_similarity.4dc02615ef14"></a>
<p class="symi-entry-owner">api::results::JordanDecomposition method</p>

```rust signature
pub fn similarity(&self) -> Matrix
```

Public method placement for similarity.

### similarity

<a id="entry-presentation_rust_matrix_functions_capability_rust_native_rust_api_results_rationalcanonicalform_similarity_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_rationalcanonicalform_similarity.b1a2af40d387"></a>
<p class="symi-entry-owner">api::results::RationalCanonicalForm method</p>

```rust signature
pub fn similarity(&self) -> Matrix
```

Public method placement for similarity.

