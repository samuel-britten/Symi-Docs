# Matrix functions and Jordan form

Matrix exponential, logarithm, trigonometric, hyperbolic, and Jordan operations are exact symbolic operations.


### exponential

<a id="entry-presentation_swift_api_matrix_exponential"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_exponential.93ee82df1e80"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func exponential() -> UniffiMatrix
```


The matrix exponential `exp(M)`, evaluated through the certified Jordan
decomposition. Declines on inputs whose eigenvalues cannot be certified
exactly.

### logarithm

<a id="entry-presentation_swift_api_matrix_logarithm"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_logarithm.ea4f03aadbb3"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func logarithm() -> UniffiMatrix
```


The principal matrix logarithm `log(M)`. Raises on a zero or negative-real
eigenvalue (principal branch cut).

### square_root

<a id="entry-presentation_swift_api_matrix_square_root"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_squareroot.784836f31e57"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func squareRoot() -> UniffiMatrix
```


The principal matrix square root `sqrt(M)`; the result is verified to square
back to `M`. Raises on a negative-real eigenvalue, or on a nontrivial zero
eigenblock (non-analytic).

### sine

<a id="entry-presentation_swift_api_matrix_sine"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_sine.33c353074925"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func sine() -> UniffiMatrix
```


The primary matrix sine `sin(M)`, evaluated exactly through the certified
Jordan decomposition. The result is certified together with the matrix cosine
by `sin(M)^2 + cos(M)^2 = I`.

### cosine

<a id="entry-presentation_swift_api_matrix_cosine"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_cosine.d438b40efe5f"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func cosine() -> UniffiMatrix
```


The primary matrix cosine `cos(M)`, evaluated exactly through the certified
Jordan decomposition and the trigonometric identity certificate.

### hyperbolic_sine

<a id="entry-presentation_swift_api_matrix_hyperbolic_sine"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_hyperbolicsine.7e06201f4b13"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func hyperbolicSine() -> UniffiMatrix
```


The primary hyperbolic matrix sine `sinh(M)`, evaluated exactly through the
certified Jordan decomposition. The result is certified together with the
hyperbolic matrix cosine by `cosh(M)^2 - sinh(M)^2 = I`.

### hyperbolic_cosine

<a id="entry-presentation_swift_api_matrix_hyperbolic_cosine"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_hyperboliccosine.53096969265f"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func hyperbolicCosine() -> UniffiMatrix
```


The primary hyperbolic matrix cosine `cosh(M)`, evaluated exactly through the
certified Jordan decomposition and the hyperbolic identity certificate.

### jordan_decomposition

<a id="entry-presentation_swift_api_matrix_jordan_decomposition"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_jordandecomposition.3be6d4b0c785"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func jordanDecomposition() -> UniffiJordanDecomposition
```


The Jordan decomposition returned as `(similarity, jordan_form, blocks)` with
\(\operatorname{similarity} \operatorname{jordan\_form} \operatorname{similarity}^{-1} = M\), where `blocks` lists each
Jordan block as an `(eigenvalue, size)` pair. Every root is certified over an
exact algebraic field. **Notes:** WASM returns a `JordanDecomposition`
result class with `similarity`/`jordan_form`/`blocks` getters, each block a
`JordanBlock` with `eigenvalue`/`size` getters.

### jordan_decomposition (WASM result class)

<a id="entry-presentation_swift_api_matrix_jordan_decomposition"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_jordandecomposition.3be6d4b0c785"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func jordanDecomposition() -> UniffiJordanDecomposition
```


### similarity

<a id="entry-presentation_swift_api_jordandecomposition_similarity"></a>
<a id="placement-placement.swift.swift_object.uniffijordandecomposition_similarity.096b4a92743d"></a>
<p class="symi-entry-owner">UniffiJordanDecomposition method</p>

```swift signature
func similarity() -> UniffiMatrix
```


### jordan_form

<a id="entry-presentation_swift_api_jordandecomposition_jordan_form"></a>
<a id="placement-placement.swift.swift_object.uniffijordandecomposition_jordanform.ad7b8688791a"></a>
<p class="symi-entry-owner">UniffiJordanDecomposition method</p>

```swift signature
func jordanForm() -> UniffiMatrix
```

The Jordan form `J` of the decomposed matrix.

### blocks

<a id="entry-presentation_swift_api_jordandecomposition_blocks"></a>
<a id="placement-placement.swift.swift_object.uniffijordandecomposition_blocks.688d7d6a1aee"></a>
<p class="symi-entry-owner">UniffiJordanDecomposition method</p>

```swift signature
func blocks() -> [UniffiJordanBlock]
```

The Jordan blocks, in the order they appear on the diagonal.

### jordan_block (WASM result class)

### size

The `jordan_block.eigenvalue -> Expression` getter reuses the shared
`eigenvalue` heading documented above.

<a id="entry-presentation_swift_api_jordanblock_size"></a>
<a id="placement-placement.swift.swift_object.uniffijordanblock_size.c9867f385d8b"></a>
<p class="symi-entry-owner">UniffiJordanBlock method</p>

```swift signature
func size() -> UInt64
```

The size of this Jordan block.

## Example


## Additional API

### JordanBlock

#### JordanBlock.eigenvalue

<a id="entry-presentation_swift_api_jordanblock_eigenvalue"></a>
<a id="placement-placement.swift.swift_object.uniffijordanblock_eigenvalue.50b40ad7d71e"></a>
<p class="symi-entry-owner">UniffiJordanBlock method</p>

```swift signature
func eigenvalue() -> UniffiExpression
```

The eigenvalue this Jordan block belongs to.

