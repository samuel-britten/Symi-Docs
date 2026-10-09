# Matrix functions and Jordan form

Matrix exponential, logarithm, trigonometric, hyperbolic, and Jordan operations are exact symbolic operations.


### exponential

<a id="placement-placement.python.python_class.matrix_exponential.7d6e158a0a7b"></a>
`Matrix.exponential()`


The matrix exponential `exp(M)`, evaluated through the certified Jordan
decomposition. Declines on inputs whose eigenvalues cannot be certified
exactly.

### logarithm

<a id="placement-placement.python.python_class.matrix_logarithm.a05822635c14"></a>
`Matrix.logarithm()`


The principal matrix logarithm `log(M)`. Raises on a zero or negative-real
eigenvalue (principal branch cut).

### square_root

<a id="placement-placement.python.python_class.matrix_square_root.2ee200ff9ec2"></a>
`Matrix.square_root()`


The principal matrix square root `sqrt(M)`; the result is verified to square
back to `M`. Raises on a negative-real eigenvalue, or on a nontrivial zero
eigenblock (non-analytic).

### sine

<a id="placement-placement.python.python_class.matrix_sine.0de13f4135d8"></a>
`Matrix.sine()`


The primary matrix sine `sin(M)`, evaluated exactly through the certified
Jordan decomposition. The result is certified together with the matrix cosine
by `sin(M)^2 + cos(M)^2 = I`.

### cosine

<a id="placement-placement.python.python_class.matrix_cosine.5dc77fea11d2"></a>
`Matrix.cosine()`


The primary matrix cosine `cos(M)`, evaluated exactly through the certified
Jordan decomposition and the trigonometric identity certificate.

### hyperbolic_sine

<a id="placement-placement.python.python_class.matrix_hyperbolic_sine.85e1bc19a042"></a>
`Matrix.hyperbolic_sine()`


The primary hyperbolic matrix sine `sinh(M)`, evaluated exactly through the
certified Jordan decomposition. The result is certified together with the
hyperbolic matrix cosine by `cosh(M)^2 - sinh(M)^2 = I`.

### hyperbolic_cosine

<a id="placement-placement.python.python_class.matrix_hyperbolic_cosine.00c37ee8827b"></a>
`Matrix.hyperbolic_cosine()`


The primary hyperbolic matrix cosine `cosh(M)`, evaluated exactly through the
certified Jordan decomposition and the hyperbolic identity certificate.

### jordan_decomposition

<a id="placement-placement.python.python_class.matrix_jordan_decomposition.53a3aeac78c1"></a>
`Matrix.jordan_decomposition()`


The Jordan decomposition returned as `(similarity, jordan_form, blocks)` with
\(\operatorname{similarity} \operatorname{jordan\_form} \operatorname{similarity}^{-1} = M\), where `blocks` lists each
Jordan block as an `(eigenvalue, size)` pair. Every root is certified over an
exact algebraic field. **Notes:** WASM returns a `JordanDecomposition`
result class with `similarity`/`jordan_form`/`blocks` getters, each block a
`JordanBlock` with `eigenvalue`/`size` getters.

### jordan_decomposition (WASM result class)

<a id="placement-placement.python.python_class.matrix_jordan_decomposition.53a3aeac78c1"></a>
`Matrix.jordan_decomposition()`


### similarity

<a id="placement-placement.python.python_class.rationalcanonicalform_similarity.40c9ac5f68c3"></a>
`RationalCanonicalForm.similarity`


### jordan_form

*Not exposed by the Python bindings. Available as [`UniffiJordanDecomposition.jordanForm`](/symi/kotlin/matrix-functions#jordan_form) in Kotlin, [`UniffiJordanDecomposition.jordanForm`](/symi/swift/matrix-functions#jordan_form) in Swift, [`api::results::JordanDecomposition::jordan_form`](/symi/rust/matrix-functions#jordan_form) in Rust.*


### blocks

*Not exposed by the Python bindings. Available as [`UniffiJordanDecomposition.blocks`](/symi/kotlin/matrix-functions#blocks) in Kotlin, [`UniffiJordanDecomposition.blocks`](/symi/swift/matrix-functions#blocks) in Swift, [`api::results::JordanDecomposition::blocks`](/symi/rust/matrix-functions#blocks) in Rust.*


### jordan_block (WASM result class)

### size

*Not exposed by the Python bindings. Available as [`UniffiJordanBlock.size`](/symi/kotlin/matrix-functions#size) in Kotlin, [`UniffiJordanBlock.size`](/symi/swift/matrix-functions#size) in Swift, [`api::results::JordanBlock::size`](/symi/rust/matrix-functions#size) in Rust.*


The `jordan_block.eigenvalue -> Expression` getter reuses the shared
`eigenvalue` heading documented above.

## Example

Spectral decompositions of an exact matrix.

```python
import symi

matrix = symi.Matrix([[5, 4], [1, 2]])

similarity, jordan_form, blocks = matrix.jordan_decomposition()

print(matrix.eigenvalues())
print(matrix.characteristic_polynomial("x"))
print(blocks)
```

