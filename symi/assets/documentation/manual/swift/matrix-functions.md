# Matrix functions and Jordan form

Matrix exponential, logarithm, trigonometric, hyperbolic, and Jordan operations are exact symbolic operations.


### exponential

<a id="placement-placement.swift.swift_object.uniffimatrix_exponential.93ee82df1e80"></a>
`UniffiMatrix.exponential() -> UniffiMatrix`


The matrix exponential `exp(M)`, evaluated through the certified Jordan
decomposition. Declines on inputs whose eigenvalues cannot be certified
exactly.

### logarithm

<a id="placement-placement.swift.swift_object.uniffimatrix_logarithm.ea4f03aadbb3"></a>
`UniffiMatrix.logarithm() -> UniffiMatrix`


The principal matrix logarithm `log(M)`. Raises on a zero or negative-real
eigenvalue (principal branch cut).

### square_root

<a id="placement-placement.swift.swift_object.uniffimatrix_squareroot.784836f31e57"></a>
`UniffiMatrix.squareRoot() -> UniffiMatrix`


The principal matrix square root `sqrt(M)`; the result is verified to square
back to `M`. Raises on a negative-real eigenvalue, or on a nontrivial zero
eigenblock (non-analytic).

### sine

<a id="placement-placement.swift.swift_object.uniffimatrix_sine.33c353074925"></a>
`UniffiMatrix.sine() -> UniffiMatrix`


The primary matrix sine `sin(M)`, evaluated exactly through the certified
Jordan decomposition. The result is certified together with the matrix cosine
by `sin(M)^2 + cos(M)^2 = I`.

### cosine

<a id="placement-placement.swift.swift_object.uniffimatrix_cosine.d438b40efe5f"></a>
`UniffiMatrix.cosine() -> UniffiMatrix`


The primary matrix cosine `cos(M)`, evaluated exactly through the certified
Jordan decomposition and the trigonometric identity certificate.

### hyperbolic_sine

<a id="placement-placement.swift.swift_object.uniffimatrix_hyperbolicsine.7e06201f4b13"></a>
`UniffiMatrix.hyperbolicSine() -> UniffiMatrix`


The primary hyperbolic matrix sine `sinh(M)`, evaluated exactly through the
certified Jordan decomposition. The result is certified together with the
hyperbolic matrix cosine by `cosh(M)^2 - sinh(M)^2 = I`.

### hyperbolic_cosine

<a id="placement-placement.swift.swift_object.uniffimatrix_hyperboliccosine.53096969265f"></a>
`UniffiMatrix.hyperbolicCosine() -> UniffiMatrix`


The primary hyperbolic matrix cosine `cosh(M)`, evaluated exactly through the
certified Jordan decomposition and the hyperbolic identity certificate.

### jordan_decomposition

<a id="placement-placement.swift.swift_object.uniffimatrix_jordandecomposition.3be6d4b0c785"></a>
`UniffiMatrix.jordanDecomposition() -> UniffiJordanDecomposition`


The Jordan decomposition returned as `(similarity, jordan_form, blocks)` with
\(\operatorname{similarity} \operatorname{jordan\_form} \operatorname{similarity}^{-1} = M\), where `blocks` lists each
Jordan block as an `(eigenvalue, size)` pair. Every root is certified over an
exact algebraic field. **Notes:** WASM returns a `JordanDecomposition`
result class with `similarity`/`jordan_form`/`blocks` getters, each block a
`JordanBlock` with `eigenvalue`/`size` getters.

### jordan_decomposition (WASM result class)

<a id="placement-placement.swift.swift_object.uniffimatrix_jordandecomposition.3be6d4b0c785"></a>
`UniffiMatrix.jordanDecomposition() -> UniffiJordanDecomposition`


### similarity

<a id="placement-placement.swift.swift_object.uniffijordandecomposition_similarity.096b4a92743d"></a>
`UniffiJordanDecomposition.similarity() -> UniffiMatrix`

<a id="placement-placement.swift.swift_object.uniffirationalcanonicalform_similarity.acd220afd952"></a>
`UniffiRationalCanonicalForm.similarity() -> UniffiMatrix`


### jordan_form

<a id="placement-placement.swift.swift_object.uniffijordandecomposition_jordanform.ad7b8688791a"></a>
`UniffiJordanDecomposition.jordanForm() -> UniffiMatrix`


### blocks

<a id="placement-placement.swift.swift_object.uniffijordandecomposition_blocks.688d7d6a1aee"></a>
`UniffiJordanDecomposition.blocks() -> [UniffiJordanBlock]`


### jordan_block (WASM result class)

### size

<a id="placement-placement.swift.swift_object.uniffijordanblock_size.c9867f385d8b"></a>
`UniffiJordanBlock.size() -> UInt64`


The `jordan_block.eigenvalue -> Expression` getter reuses the shared
`eigenvalue` heading documented above.

## Example

