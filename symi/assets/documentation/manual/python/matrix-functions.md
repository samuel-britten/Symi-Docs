# Matrix functions and Jordan form

Matrix exponential, logarithm, trigonometric, hyperbolic, and Jordan operations are exact symbolic operations.


### exponential

<a id="entry-presentation_python_api_matrix_exponential"></a>
<a id="placement-placement.python.python_class.matrix_exponential.7d6e158a0a7b"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
exponential() -> Matrix
```


The matrix exponential `exp(M)`, evaluated through the certified Jordan
decomposition. Declines on inputs whose eigenvalues cannot be certified
exactly.

### logarithm

<a id="entry-presentation_python_api_matrix_logarithm"></a>
<a id="placement-placement.python.python_class.matrix_logarithm.a05822635c14"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
logarithm() -> Matrix
```


The principal matrix logarithm `log(M)`. Raises on a zero or negative-real
eigenvalue (principal branch cut).

### square_root

<a id="entry-presentation_python_api_matrix_square_root"></a>
<a id="placement-placement.python.python_class.matrix_square_root.2ee200ff9ec2"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
square_root() -> Matrix
```


The principal matrix square root `sqrt(M)`; the result is verified to square
back to `M`. Raises on a negative-real eigenvalue, or on a nontrivial zero
eigenblock (non-analytic).

### sine

<a id="entry-presentation_python_api_matrix_sine"></a>
<a id="placement-placement.python.python_class.matrix_sine.0de13f4135d8"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
sine() -> Matrix
```


The primary matrix sine `sin(M)`, evaluated exactly through the certified
Jordan decomposition. The result is certified together with the matrix cosine
by `sin(M)^2 + cos(M)^2 = I`.

### cosine

<a id="entry-presentation_python_api_matrix_cosine"></a>
<a id="placement-placement.python.python_class.matrix_cosine.5dc77fea11d2"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
cosine() -> Matrix
```


The primary matrix cosine `cos(M)`, evaluated exactly through the certified
Jordan decomposition and the trigonometric identity certificate.

### hyperbolic_sine

<a id="entry-presentation_python_api_matrix_hyperbolic_sine"></a>
<a id="placement-placement.python.python_class.matrix_hyperbolic_sine.85e1bc19a042"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
hyperbolic_sine() -> Matrix
```


The primary hyperbolic matrix sine `sinh(M)`, evaluated exactly through the
certified Jordan decomposition. The result is certified together with the
hyperbolic matrix cosine by `cosh(M)^2 - sinh(M)^2 = I`.

### hyperbolic_cosine

<a id="entry-presentation_python_api_matrix_hyperbolic_cosine"></a>
<a id="placement-placement.python.python_class.matrix_hyperbolic_cosine.00c37ee8827b"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
hyperbolic_cosine() -> Matrix
```


The primary hyperbolic matrix cosine `cosh(M)`, evaluated exactly through the
certified Jordan decomposition and the hyperbolic identity certificate.

### jordan_decomposition

<a id="entry-presentation_python_api_matrix_jordan_decomposition"></a>
<a id="placement-placement.python.python_class.matrix_jordan_decomposition.53a3aeac78c1"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
jordan_decomposition() -> tuple[Matrix, Matrix, list[tuple[Expression, int]]]
```


The Jordan decomposition returned as `(similarity, jordan_form, blocks)` with
\(\operatorname{similarity} \operatorname{jordan\_form} \operatorname{similarity}^{-1} = M\), where `blocks` lists each
Jordan block as an `(eigenvalue, size)` pair. Every root is certified over an
exact algebraic field. **Notes:** WASM returns a `JordanDecomposition`
result class with `similarity`/`jordan_form`/`blocks` getters, each block a
`JordanBlock` with `eigenvalue`/`size` getters.

### jordan_decomposition (WASM result class)

<a id="entry-presentation_python_api_matrix_jordan_decomposition"></a>
<a id="placement-placement.python.python_class.matrix_jordan_decomposition.53a3aeac78c1"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
jordan_decomposition() -> tuple[Matrix, Matrix, list[tuple[Expression, int]]]
```


### similarity

*Not exposed by the Python bindings. Available as [`UniffiJordanDecomposition.similarity`](/symi/kotlin/matrix-functions#similarity) in Kotlin, [`UniffiJordanDecomposition.similarity`](/symi/swift/matrix-functions#similarity) in Swift, [`api::results::JordanDecomposition::similarity`](/symi/rust/matrix-functions#similarity) in Rust.*


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

