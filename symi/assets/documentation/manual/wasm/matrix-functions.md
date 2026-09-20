# Matrix functions and Jordan form

Matrix exponential, logarithm, trigonometric, hyperbolic, and Jordan operations are exact symbolic operations.


### exponential

<a id="entry-presentation_wasm_api_matrix_exponential"></a>
<a id="placement-placement.wasm.wasm_class.matrix_exponential.b7bab335ac58"></a>
<p class="symi-entry-owner">Raw WebAssembly: Matrix method</p>

```typescript signature
exponential(): Matrix
```


The matrix exponential `exp(M)`, evaluated through the certified Jordan
decomposition. Declines on inputs whose eigenvalues cannot be certified
exactly.

### logarithm

<a id="entry-presentation_wasm_api_matrix_logarithm"></a>
<a id="placement-placement.wasm.wasm_class.matrix_logarithm.2fe62d179d7e"></a>
<p class="symi-entry-owner">Raw WebAssembly: Matrix method</p>

```typescript signature
logarithm(): Matrix
```


The principal matrix logarithm `log(M)`. Raises on a zero or negative-real
eigenvalue (principal branch cut).

### square_root

<a id="entry-presentation_wasm_api_matrix_square_root"></a>
<a id="placement-placement.wasm.wasm_class.matrix_squareroot.1c60c29e8e88"></a>
<p class="symi-entry-owner">Raw WebAssembly: Matrix method</p>

```typescript signature
squareRoot(): Matrix
```


The principal matrix square root `sqrt(M)`; the result is verified to square
back to `M`. Raises on a negative-real eigenvalue, or on a nontrivial zero
eigenblock (non-analytic).

### sine

<a id="entry-presentation_wasm_api_matrix_sine"></a>
<a id="placement-placement.wasm.wasm_class.matrix_sine.07e03f4d756a"></a>
<p class="symi-entry-owner">Raw WebAssembly: Matrix method</p>

```typescript signature
sine(): Matrix
```


The primary matrix sine `sin(M)`, evaluated exactly through the certified
Jordan decomposition. The result is certified together with the matrix cosine
by `sin(M)^2 + cos(M)^2 = I`.

### cosine

<a id="entry-presentation_wasm_api_matrix_cosine"></a>
<a id="placement-placement.wasm.wasm_class.matrix_cosine.0f588e01221c"></a>
<p class="symi-entry-owner">Raw WebAssembly: Matrix method</p>

```typescript signature
cosine(): Matrix
```


The primary matrix cosine `cos(M)`, evaluated exactly through the certified
Jordan decomposition and the trigonometric identity certificate.

### hyperbolic_sine

<a id="entry-presentation_wasm_api_matrix_hyperbolic_sine"></a>
<a id="placement-placement.wasm.wasm_class.matrix_hyperbolicsine.8c14f73a4915"></a>
<p class="symi-entry-owner">Raw WebAssembly: Matrix method</p>

```typescript signature
hyperbolicSine(): Matrix
```


The primary hyperbolic matrix sine `sinh(M)`, evaluated exactly through the
certified Jordan decomposition. The result is certified together with the
hyperbolic matrix cosine by `cosh(M)^2 - sinh(M)^2 = I`.

### hyperbolic_cosine

<a id="entry-presentation_wasm_api_matrix_hyperbolic_cosine"></a>
<a id="placement-placement.wasm.wasm_class.matrix_hyperboliccosine.9883f6ac95ea"></a>
<p class="symi-entry-owner">Raw WebAssembly: Matrix method</p>

```typescript signature
hyperbolicCosine(): Matrix
```


The primary hyperbolic matrix cosine `cosh(M)`, evaluated exactly through the
certified Jordan decomposition and the hyperbolic identity certificate.

### jordan_decomposition

<a id="entry-presentation_wasm_api_matrix_jordan_decomposition"></a>
<a id="placement-placement.wasm.wasm_class.matrix_jordandecomposition.5ed7e5466201"></a>
<p class="symi-entry-owner">Raw WebAssembly: Matrix method</p>

```typescript signature
jordanDecomposition(): JordanDecomposition
```


The Jordan decomposition returned as `(similarity, jordan_form, blocks)` with
\(\operatorname{similarity} \operatorname{jordan\_form} \operatorname{similarity}^{-1} = M\), where `blocks` lists each
Jordan block as an `(eigenvalue, size)` pair. Every root is certified over an
exact algebraic field. **Notes:** WASM returns a `JordanDecomposition`
result class with `similarity`/`jordan_form`/`blocks` getters, each block a
`JordanBlock` with `eigenvalue`/`size` getters.

### jordan_decomposition (WASM result class)

*Not exposed by the WASM / JavaScript bindings. Available as [`Matrix.jordan_decomposition`](/symi/python/matrix-functions#jordan_decomposition_wasm_result_class) in Python, [`UniffiMatrix.jordanDecomposition`](/symi/kotlin/matrix-functions#jordan_decomposition_wasm_result_class) in Kotlin, [`UniffiMatrix.jordanDecomposition`](/symi/swift/matrix-functions#jordan_decomposition_wasm_result_class) in Swift, [`api::matrix_operations::Matrix::jordan_decomposition`](/symi/rust/matrix-functions#jordan_decomposition_wasm_result_class) in Rust.*


### similarity

<a id="entry-presentation_wasm_api_jordandecomposition_similarity"></a>
<a id="placement-placement.wasm.wasm_class.jordandecomposition_similarity.2c685ecdfb79"></a>
<p class="symi-entry-owner">Raw WebAssembly: JordanDecomposition property</p>

```typescript signature
readonly similarity: Matrix
```


### jordan_form

*Not exposed by the WASM / JavaScript bindings. Available as [`UniffiJordanDecomposition.jordanForm`](/symi/kotlin/matrix-functions#jordan_form) in Kotlin, [`UniffiJordanDecomposition.jordanForm`](/symi/swift/matrix-functions#jordan_form) in Swift, [`api::results::JordanDecomposition::jordan_form`](/symi/rust/matrix-functions#jordan_form) in Rust.*


### blocks

<a id="entry-presentation_wasm_api_jordandecomposition_blocks"></a>
<a id="placement-placement.wasm.wasm_class.jordandecomposition_blocks.ac7057508f51"></a>
<p class="symi-entry-owner">Raw WebAssembly: JordanDecomposition property</p>

```typescript signature
readonly blocks: JordanBlock[]
```

The Jordan blocks, in the order they appear on the diagonal.

### jordan_block (WASM result class)

### size

The `jordan_block.eigenvalue -> Expression` getter reuses the shared
`eigenvalue` heading documented above.

<a id="entry-presentation_wasm_api_jordanblock_size"></a>
<a id="placement-placement.wasm.wasm_class.jordanblock_size.cd7512c4a332"></a>
<p class="symi-entry-owner">Raw WebAssembly: JordanBlock property</p>

```typescript signature
readonly size: number
```

The size of this Jordan block.

## Example

This family is not part of the recommended JavaScript facade in this release. Call it through the generated `symi.raw` layer, whose entries are listed with their wasm-bindgen signatures above, and read [Migration](migration.md) for the ownership rules that apply there.


## Additional API

### JordanBlock

#### JordanBlock.eigenvalue

<a id="entry-presentation_wasm_api_jordanblock_eigenvalue"></a>
<a id="placement-placement.wasm.wasm_class.jordanblock_eigenvalue.709dd40eb76c"></a>
<p class="symi-entry-owner">Raw WebAssembly: JordanBlock property</p>

```typescript signature
readonly eigenvalue: Expression
```

The eigenvalue this Jordan block belongs to.

### JordanDecomposition

#### JordanDecomposition.jordanForm

<a id="entry-presentation_wasm_api_jordandecomposition_jordan_form"></a>
<a id="placement-placement.wasm.wasm_class.jordandecomposition_jordanform.1ae72807329f"></a>
<p class="symi-entry-owner">Raw WebAssembly: JordanDecomposition property</p>

```typescript signature
readonly jordanForm: Matrix
```

The Jordan form `J` of the decomposed matrix.

