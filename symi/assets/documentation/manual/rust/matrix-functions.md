# Matrix functions and Jordan form

Matrix exponential, logarithm, trigonometric, hyperbolic, and Jordan operations are exact symbolic operations.


### exponential

<a id="entry-presentation_rust_api_matrix_exponential"></a>
<a id="placement-placement.rust.native_rust.api_matrix_operations_matrix_exponential.827eae5f8246"></a>
<p class="symi-entry-owner">api::matrix_operations::Matrix method</p>

```rust signature
pub fn exponential(&self) -> Result<Matrix, ApiError>
```


The matrix exponential `exp(M)`, evaluated through the certified Jordan
decomposition. Declines on inputs whose eigenvalues cannot be certified
exactly.

### logarithm

<a id="entry-presentation_rust_api_matrix_logarithm"></a>
<a id="placement-placement.rust.native_rust.api_matrix_operations_matrix_logarithm.9ffb8c11d04d"></a>
<p class="symi-entry-owner">api::matrix_operations::Matrix method</p>

```rust signature
pub fn logarithm(&self) -> Result<Matrix, ApiError>
```


The principal matrix logarithm `log(M)`. Raises on a zero or negative-real
eigenvalue (principal branch cut).

### square_root

<a id="entry-presentation_rust_api_matrix_square_root"></a>
<a id="placement-placement.rust.native_rust.api_matrix_operations_matrix_square_root.0a9925cf359c"></a>
<p class="symi-entry-owner">api::matrix_operations::Matrix method</p>

```rust signature
pub fn square_root(&self) -> Result<Matrix, ApiError>
```


The principal matrix square root `sqrt(M)`; the result is verified to square
back to `M`. Raises on a negative-real eigenvalue, or on a nontrivial zero
eigenblock (non-analytic).

### sine

<a id="entry-presentation_rust_api_matrix_sine"></a>
<a id="placement-placement.rust.native_rust.api_matrix_operations_matrix_sine.c5be46d0912d"></a>
<p class="symi-entry-owner">api::matrix_operations::Matrix method</p>

```rust signature
pub fn sine(&self) -> Result<Matrix, ApiError>
```


The primary matrix sine `sin(M)`, evaluated exactly through the certified
Jordan decomposition. The result is certified together with the matrix cosine
by `sin(M)^2 + cos(M)^2 = I`.

### cosine

<a id="entry-presentation_rust_api_matrix_cosine"></a>
<a id="placement-placement.rust.native_rust.api_matrix_operations_matrix_cosine.e14302ce4b37"></a>
<p class="symi-entry-owner">api::matrix_operations::Matrix method</p>

```rust signature
pub fn cosine(&self) -> Result<Matrix, ApiError>
```


The primary matrix cosine `cos(M)`, evaluated exactly through the certified
Jordan decomposition and the trigonometric identity certificate.

### hyperbolic_sine

<a id="entry-presentation_rust_api_matrix_hyperbolic_sine"></a>
<a id="placement-placement.rust.native_rust.api_matrix_operations_matrix_hyperbolic_sine.b02632102dc2"></a>
<p class="symi-entry-owner">api::matrix_operations::Matrix method</p>

```rust signature
pub fn hyperbolic_sine(&self) -> Result<Matrix, ApiError>
```


The primary hyperbolic matrix sine `sinh(M)`, evaluated exactly through the
certified Jordan decomposition. The result is certified together with the
hyperbolic matrix cosine by `cosh(M)^2 - sinh(M)^2 = I`.

### hyperbolic_cosine

<a id="entry-presentation_rust_api_matrix_hyperbolic_cosine"></a>
<a id="placement-placement.rust.native_rust.api_matrix_operations_matrix_hyperbolic_cosine.f8133f4d722f"></a>
<p class="symi-entry-owner">api::matrix_operations::Matrix method</p>

```rust signature
pub fn hyperbolic_cosine(&self) -> Result<Matrix, ApiError>
```


The primary hyperbolic matrix cosine `cosh(M)`, evaluated exactly through the
certified Jordan decomposition and the hyperbolic identity certificate.

### jordan_decomposition

<a id="entry-presentation_rust_api_matrix_jordan_decomposition"></a>
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

<a id="entry-presentation_rust_api_matrix_jordan_decomposition"></a>
<a id="placement-placement.rust.native_rust.api_matrix_operations_matrix_jordan_decomposition.bc07f7af1f05"></a>
<p class="symi-entry-owner">api::matrix_operations::Matrix method</p>

```rust signature
pub fn jordan_decomposition(
    &self,
) -> Result<JordanDecomposition, ApiError>
```


### similarity

<a id="entry-presentation_rust_api_jordandecomposition_similarity"></a>
<a id="placement-placement.rust.native_rust.api_results_jordandecomposition_similarity.4dc02615ef14"></a>
<p class="symi-entry-owner">api::results::JordanDecomposition method</p>

```rust signature
pub fn similarity(&self) -> Matrix
```


### jordan_form

<a id="entry-presentation_rust_api_jordandecomposition_jordan_form"></a>
<a id="placement-placement.rust.native_rust.api_results_jordandecomposition_jordan_form.b7324b2e5153"></a>
<p class="symi-entry-owner">api::results::JordanDecomposition method</p>

```rust signature
pub fn jordan_form(&self) -> Matrix
```

The Jordan form itself.

### blocks

<a id="entry-presentation_rust_api_jordandecomposition_blocks"></a>
<a id="placement-placement.rust.native_rust.api_results_jordandecomposition_blocks.fdee4b1f1074"></a>
<p class="symi-entry-owner">api::results::JordanDecomposition method</p>

```rust signature
pub fn blocks(&self) -> Vec<JordanBlock>
```

The Jordan blocks, in the order they appear on the diagonal.

### jordan_block (WASM result class)

### size

The `jordan_block.eigenvalue -> Expression` getter reuses the shared
`eigenvalue` heading documented above.

<a id="entry-presentation_rust_api_jordanblock_size"></a>
<a id="placement-placement.rust.native_rust.api_results_jordanblock_size.43c8e580da27"></a>
<p class="symi-entry-owner">api::results::JordanBlock method</p>

```rust signature
pub fn size(&self) -> usize
```

The block's side length.

## Example

This family is not part of the recommended `symi::api` facade in this release. Call it through the native modules in the [native Rust API reference](/symi/rust/api/symi/).


## Additional API

### api::matrix_operations

<a id="entry-presentation_rust_native_module_api_matrix_operations"></a>
<a id="placement-placement.rust.native_rust.api_matrix_operations.6c27bc0ecbf7"></a>
<p class="symi-entry-owner">api module</p>

```rust signature
pub mod matrix_operations;
```

Matrix function and decomposition operations of the native API.

### JordanBlock

<a id="entry-presentation_rust_api_jordanblock"></a>
<a id="placement-placement.rust.native_rust.api_jordanblock.7050f236eba4"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use results::JordanBlock;
```

One Jordan block of a Jordan decomposition.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_results_jordanblock.4ef0bb921405"></a>
<p class="symi-entry-owner">Type: <code>api::results::JordanBlock</code></p>

```rust signature
pub struct JordanBlock
```

</details>

#### JordanBlock.eigenvalue

<a id="entry-presentation_rust_api_jordanblock_eigenvalue"></a>
<a id="placement-placement.rust.native_rust.api_results_jordanblock_eigenvalue.cd77f75f5ebd"></a>
<p class="symi-entry-owner">api::results::JordanBlock method</p>

```rust signature
pub fn eigenvalue(&self) -> Expression
```

The eigenvalue on the block's diagonal.

### JordanDecomposition

<a id="entry-presentation_rust_api_jordandecomposition"></a>
<a id="placement-placement.rust.native_rust.api_jordandecomposition.2f6da81c8578"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use results::JordanDecomposition;
```

A Jordan decomposition `similarity * jordan_form * similarity^-1`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_results_jordandecomposition.efdbcf9efe1c"></a>
<p class="symi-entry-owner">Type: <code>api::results::JordanDecomposition</code></p>

```rust signature
pub struct JordanDecomposition
```

</details>

