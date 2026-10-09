# Matrix functions and Jordan form

Matrix exponential, logarithm, trigonometric, hyperbolic, and Jordan operations are exact symbolic operations.


### exponential

<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_exponential.976b15247454"></a>
`UniffiMatrix.exponential(): UniffiMatrix`


The matrix exponential `exp(M)`, evaluated through the certified Jordan
decomposition. Declines on inputs whose eigenvalues cannot be certified
exactly.

### logarithm

<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_logarithm.fdab1a7b232f"></a>
`UniffiMatrix.logarithm(): UniffiMatrix`


The principal matrix logarithm `log(M)`. Raises on a zero or negative-real
eigenvalue (principal branch cut).

### square_root

<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_squareroot.78e2c9c3a2d7"></a>
`UniffiMatrix.squareRoot(): UniffiMatrix`


The principal matrix square root `sqrt(M)`; the result is verified to square
back to `M`. Raises on a negative-real eigenvalue, or on a nontrivial zero
eigenblock (non-analytic).

### sine

<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_sine.7d73c39ff349"></a>
`UniffiMatrix.sine(): UniffiMatrix`


The primary matrix sine `sin(M)`, evaluated exactly through the certified
Jordan decomposition. The result is certified together with the matrix cosine
by `sin(M)^2 + cos(M)^2 = I`.

### cosine

<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_cosine.c02036b27a06"></a>
`UniffiMatrix.cosine(): UniffiMatrix`


The primary matrix cosine `cos(M)`, evaluated exactly through the certified
Jordan decomposition and the trigonometric identity certificate.

### hyperbolic_sine

<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_hyperbolicsine.d89a2af4ae1e"></a>
`UniffiMatrix.hyperbolicSine(): UniffiMatrix`


The primary hyperbolic matrix sine `sinh(M)`, evaluated exactly through the
certified Jordan decomposition. The result is certified together with the
hyperbolic matrix cosine by `cosh(M)^2 - sinh(M)^2 = I`.

### hyperbolic_cosine

<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_hyperboliccosine.89f2af7cec41"></a>
`UniffiMatrix.hyperbolicCosine(): UniffiMatrix`


The primary hyperbolic matrix cosine `cosh(M)`, evaluated exactly through the
certified Jordan decomposition and the hyperbolic identity certificate.

### jordan_decomposition

<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_jordandecomposition.c27fc83366f2"></a>
`UniffiMatrix.jordanDecomposition(): UniffiJordanDecomposition`


The Jordan decomposition returned as `(similarity, jordan_form, blocks)` with
\(\operatorname{similarity} \operatorname{jordan\_form} \operatorname{similarity}^{-1} = M\), where `blocks` lists each
Jordan block as an `(eigenvalue, size)` pair. Every root is certified over an
exact algebraic field. **Notes:** WASM returns a `JordanDecomposition`
result class with `similarity`/`jordan_form`/`blocks` getters, each block a
`JordanBlock` with `eigenvalue`/`size` getters.

### jordan_decomposition (WASM result class)

<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_jordandecomposition.c27fc83366f2"></a>
`UniffiMatrix.jordanDecomposition(): UniffiJordanDecomposition`


### similarity

<a id="placement-placement.kotlin.kotlin_object.uniffijordandecomposition_similarity.37f4c5e11b98"></a>
`UniffiJordanDecomposition.similarity(): UniffiMatrix`

<a id="placement-placement.kotlin.kotlin_object.uniffirationalcanonicalform_similarity.a791d80567bb"></a>
`UniffiRationalCanonicalForm.similarity(): UniffiMatrix`


### jordan_form

<a id="placement-placement.kotlin.kotlin_object.uniffijordandecomposition_jordanform.330a34d4f248"></a>
`UniffiJordanDecomposition.jordanForm(): UniffiMatrix`


### blocks

<a id="placement-placement.kotlin.kotlin_object.uniffijordandecomposition_blocks.cd67f3018e42"></a>
`UniffiJordanDecomposition.blocks(): List<UniffiJordanBlock>`


### jordan_block (WASM result class)

### size

<a id="placement-placement.kotlin.kotlin_object.uniffijordanblock_size.9cfb051b2704"></a>
`UniffiJordanBlock.size(): kotlin.ULong`


The `jordan_block.eigenvalue -> Expression` getter reuses the shared
`eigenvalue` heading documented above.

## Example

