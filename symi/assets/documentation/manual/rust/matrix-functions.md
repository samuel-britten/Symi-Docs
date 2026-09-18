# Matrix functions and Jordan form

Matrix exponential, logarithm, trigonometric, hyperbolic, and Jordan operations are exact symbolic operations.


### exponential

<a id="placement-placement.rust.native_rust.api_matrix_operations_matrix_exponential.827eae5f8246"></a>
`symi::api::matrix_operations::Matrix — pub fn exponential(&self) -> Result<Matrix, ApiError>`


The matrix exponential `exp(M)`, evaluated through the certified Jordan
decomposition. Declines on inputs whose eigenvalues cannot be certified
exactly.

### logarithm

<a id="placement-placement.rust.native_rust.api_matrix_operations_matrix_logarithm.9ffb8c11d04d"></a>
`symi::api::matrix_operations::Matrix — pub fn logarithm(&self) -> Result<Matrix, ApiError>`


The principal matrix logarithm `log(M)`. Raises on a zero or negative-real
eigenvalue (principal branch cut).

### square_root

<a id="placement-placement.rust.native_rust.api_matrix_operations_matrix_square_root.0a9925cf359c"></a>
`symi::api::matrix_operations::Matrix — pub fn square_root(&self) -> Result<Matrix, ApiError>`


The principal matrix square root `sqrt(M)`; the result is verified to square
back to `M`. Raises on a negative-real eigenvalue, or on a nontrivial zero
eigenblock (non-analytic).

### sine

<a id="placement-placement.rust.native_rust.api_matrix_operations_matrix_sine.c5be46d0912d"></a>
`symi::api::matrix_operations::Matrix — pub fn sine(&self) -> Result<Matrix, ApiError>`


The primary matrix sine `sin(M)`, evaluated exactly through the certified
Jordan decomposition. The result is certified together with the matrix cosine
by `sin(M)^2 + cos(M)^2 = I`.

### cosine

<a id="placement-placement.rust.native_rust.api_matrix_operations_matrix_cosine.e14302ce4b37"></a>
`symi::api::matrix_operations::Matrix — pub fn cosine(&self) -> Result<Matrix, ApiError>`


The primary matrix cosine `cos(M)`, evaluated exactly through the certified
Jordan decomposition and the trigonometric identity certificate.

### hyperbolic_sine

<a id="placement-placement.rust.native_rust.api_matrix_operations_matrix_hyperbolic_sine.b02632102dc2"></a>
`symi::api::matrix_operations::Matrix — pub fn hyperbolic_sine(&self) -> Result<Matrix, ApiError>`


The primary hyperbolic matrix sine `sinh(M)`, evaluated exactly through the
certified Jordan decomposition. The result is certified together with the
hyperbolic matrix cosine by `cosh(M)^2 - sinh(M)^2 = I`.

### hyperbolic_cosine

<a id="placement-placement.rust.native_rust.api_matrix_operations_matrix_hyperbolic_cosine.f8133f4d722f"></a>
`symi::api::matrix_operations::Matrix — pub fn hyperbolic_cosine(&self) -> Result<Matrix, ApiError>`


The primary hyperbolic matrix cosine `cosh(M)`, evaluated exactly through the
certified Jordan decomposition and the hyperbolic identity certificate.

### jordan_decomposition

<a id="placement-placement.rust.native_rust.api_matrix_operations_matrix_jordan_decomposition.bc07f7af1f05"></a>
`symi::api::matrix_operations::Matrix — pub fn jordan_decomposition(&self) -> Result<JordanDecomposition, ApiError>`


The Jordan decomposition returned as `(similarity, jordan_form, blocks)` with
\(\operatorname{similarity} \operatorname{jordan\_form} \operatorname{similarity}^{-1} = M\), where `blocks` lists each
Jordan block as an `(eigenvalue, size)` pair. Every root is certified over an
exact algebraic field. **Notes:** WASM returns a `JordanDecomposition`
result class with `similarity`/`jordan_form`/`blocks` getters, each block a
`JordanBlock` with `eigenvalue`/`size` getters.

### jordan_decomposition (WASM result class)

<a id="placement-placement.rust.native_rust.api_matrix_operations_matrix_jordan_decomposition.bc07f7af1f05"></a>
`symi::api::matrix_operations::Matrix — pub fn jordan_decomposition(&self) -> Result<JordanDecomposition, ApiError>`


### similarity

<a id="placement-placement.rust.native_rust.api_results_jordandecomposition_similarity.4dc02615ef14"></a>
`symi::api::results::JordanDecomposition — pub fn similarity(&self) -> Matrix`

<a id="placement-placement.rust.native_rust.api_results_rationalcanonicalform_similarity.b1a2af40d387"></a>
`symi::api::results::RationalCanonicalForm — pub fn similarity(&self) -> Matrix`


### jordan_form

<a id="placement-placement.rust.native_rust.api_results_jordandecomposition_jordan_form.b7324b2e5153"></a>
`symi::api::results::JordanDecomposition — pub fn jordan_form(&self) -> Matrix`


### blocks

<a id="placement-placement.rust.native_rust.api_results_jordandecomposition_blocks.fdee4b1f1074"></a>
`symi::api::results::JordanDecomposition — pub fn blocks(&self) -> Vec<JordanBlock>`


### jordan_block (WASM result class)

### size

<a id="placement-placement.rust.native_rust.api_results_jordanblock_size.43c8e580da27"></a>
`symi::api::results::JordanBlock — pub fn size(&self) -> usize`


The `jordan_block.eigenvalue -> Expression` getter reuses the shared
`eigenvalue` heading documented above.

## Example

This family is not part of the recommended `symi::api` facade in this release. Call it through the native modules in the [native Rust API reference](/symi/rust/api/symi/).

