# Matrix functions and Jordan form

Matrix exponential, logarithm, trigonometric, hyperbolic, and Jordan operations are exact symbolic operations.


### exponential

<a id="placement-placement.wasm.wasm_class.matrix_exponential.b7bab335ac58"></a>
Raw WebAssembly: `pub fn exponential(&self) -> Result<Matrix, JsError>`


The matrix exponential `exp(M)`, evaluated through the certified Jordan
decomposition. Declines on inputs whose eigenvalues cannot be certified
exactly.

### logarithm

<a id="placement-placement.wasm.wasm_class.matrix_logarithm.2fe62d179d7e"></a>
Raw WebAssembly: `pub fn logarithm(&self) -> Result<Matrix, JsError>`


The principal matrix logarithm `log(M)`. Raises on a zero or negative-real
eigenvalue (principal branch cut).

### square_root

*Not exposed by the WASM / JavaScript bindings. Available as [`Matrix.square_root`](/symi/python/matrix-functions#square_root) in Python, [`UniffiMatrix.squareRoot`](/symi/kotlin/matrix-functions#square_root) in Kotlin, [`UniffiMatrix.squareRoot`](/symi/swift/matrix-functions#square_root) in Swift, [`api::matrix_operations::Matrix::square_root`](/symi/rust/matrix-functions#square_root) in Rust.*


The principal matrix square root `sqrt(M)`; the result is verified to square
back to `M`. Raises on a negative-real eigenvalue, or on a nontrivial zero
eigenblock (non-analytic).

### sine

<a id="placement-placement.wasm.wasm_class.matrix_sine.07e03f4d756a"></a>
Raw WebAssembly: `pub fn sine(&self) -> Result<Matrix, JsError>`


The primary matrix sine `sin(M)`, evaluated exactly through the certified
Jordan decomposition. The result is certified together with the matrix cosine
by `sin(M)^2 + cos(M)^2 = I`.

### cosine

<a id="placement-placement.wasm.wasm_class.matrix_cosine.0f588e01221c"></a>
Raw WebAssembly: `pub fn cosine(&self) -> Result<Matrix, JsError>`


The primary matrix cosine `cos(M)`, evaluated exactly through the certified
Jordan decomposition and the trigonometric identity certificate.

### hyperbolic_sine

*Not exposed by the WASM / JavaScript bindings. Available as [`Matrix.hyperbolic_sine`](/symi/python/matrix-functions#hyperbolic_sine) in Python, [`UniffiMatrix.hyperbolicSine`](/symi/kotlin/matrix-functions#hyperbolic_sine) in Kotlin, [`UniffiMatrix.hyperbolicSine`](/symi/swift/matrix-functions#hyperbolic_sine) in Swift, [`api::matrix_operations::Matrix::hyperbolic_sine`](/symi/rust/matrix-functions#hyperbolic_sine) in Rust.*


The primary hyperbolic matrix sine `sinh(M)`, evaluated exactly through the
certified Jordan decomposition. The result is certified together with the
hyperbolic matrix cosine by `cosh(M)^2 - sinh(M)^2 = I`.

### hyperbolic_cosine

*Not exposed by the WASM / JavaScript bindings. Available as [`Matrix.hyperbolic_cosine`](/symi/python/matrix-functions#hyperbolic_cosine) in Python, [`UniffiMatrix.hyperbolicCosine`](/symi/kotlin/matrix-functions#hyperbolic_cosine) in Kotlin, [`UniffiMatrix.hyperbolicCosine`](/symi/swift/matrix-functions#hyperbolic_cosine) in Swift, [`api::matrix_operations::Matrix::hyperbolic_cosine`](/symi/rust/matrix-functions#hyperbolic_cosine) in Rust.*


The primary hyperbolic matrix cosine `cosh(M)`, evaluated exactly through the
certified Jordan decomposition and the hyperbolic identity certificate.

### jordan_decomposition

*Not exposed by the WASM / JavaScript bindings. Available as [`Matrix.jordan_decomposition`](/symi/python/matrix-functions#jordan_decomposition) in Python, [`UniffiMatrix.jordanDecomposition`](/symi/kotlin/matrix-functions#jordan_decomposition) in Kotlin, [`UniffiMatrix.jordanDecomposition`](/symi/swift/matrix-functions#jordan_decomposition) in Swift, [`api::matrix_operations::Matrix::jordan_decomposition`](/symi/rust/matrix-functions#jordan_decomposition) in Rust.*


The Jordan decomposition returned as `(similarity, jordan_form, blocks)` with
\(\operatorname{similarity} \operatorname{jordan\_form} \operatorname{similarity}^{-1} = M\), where `blocks` lists each
Jordan block as an `(eigenvalue, size)` pair. Every root is certified over an
exact algebraic field. **Notes:** WASM returns a `JordanDecomposition`
result class with `similarity`/`jordan_form`/`blocks` getters, each block a
`JordanBlock` with `eigenvalue`/`size` getters.

### jordan_decomposition (WASM result class)

*Not exposed by the WASM / JavaScript bindings. Available as [`Matrix.jordan_decomposition`](/symi/python/matrix-functions#jordan_decomposition) in Python, [`UniffiMatrix.jordanDecomposition`](/symi/kotlin/matrix-functions#jordan_decomposition) in Kotlin, [`UniffiMatrix.jordanDecomposition`](/symi/swift/matrix-functions#jordan_decomposition) in Swift, [`api::matrix_operations::Matrix::jordan_decomposition`](/symi/rust/matrix-functions#jordan_decomposition) in Rust.*


### similarity

<a id="placement-placement.wasm.wasm_class.jordandecomposition_similarity.2c685ecdfb79"></a>
Raw WebAssembly: `pub fn similarity(&self) -> Matrix`

<a id="placement-placement.wasm.wasm_class.rationalcanonicalform_similarity.d2577308ef20"></a>
Raw WebAssembly: `pub fn similarity(&self) -> Matrix`


### jordan_form

*Not exposed by the WASM / JavaScript bindings. Available as [`UniffiJordanDecomposition.jordanForm`](/symi/kotlin/matrix-functions#jordan_form) in Kotlin, [`UniffiJordanDecomposition.jordanForm`](/symi/swift/matrix-functions#jordan_form) in Swift, [`api::results::JordanDecomposition::jordan_form`](/symi/rust/matrix-functions#jordan_form) in Rust.*


### blocks

<a id="placement-placement.wasm.wasm_class.jordandecomposition_blocks.ac7057508f51"></a>
Raw WebAssembly: `pub fn blocks(&self) -> Vec<JordanBlock>`


### jordan_block (WASM result class)

### size

<a id="placement-placement.wasm.wasm_class.jordanblock_size.cd7512c4a332"></a>
Raw WebAssembly: `pub fn size(&self) -> usize`


The `jordan_block.eigenvalue -> Expression` getter reuses the shared
`eigenvalue` heading documented above.

## Example

This family is not part of the recommended JavaScript facade in this release. Call it through the generated `symi.raw` layer, whose entries are listed with their wasm-bindgen signatures above, and read [Migration](migration.md) for the ownership rules that apply there.


## Additional API

<a id="placement-placement.wasm.wasm_class.jordandecomposition_jordanform.1ae72807329f"></a>
### JordanDecomposition.jordanForm

`pub fn jordan_form(&self) -> Matrix`

Returns `matrix`.

<a id="placement-placement.wasm.wasm_class.matrix_jordandecomposition.5ed7e5466201"></a>
### Matrix.jordanDecomposition

`pub fn jordan_decomposition(&self) -> Result<JordanDecomposition, JsError>`

Returns `Result<jordan_decomposition, JsError>`.

