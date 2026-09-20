# Matrix construction and access

Construct matrices from ordered rows or from identity, zero, and diagonal families. Shape and entry access preserve row-major ordering.

## Constructors

### matrix

<a id="entry-presentation_python_api_session_matrix"></a>
<a id="placement-placement.python.python_class.context_matrix.2fa42d359b64"></a>
<p class="symi-entry-owner">Explicit context</p>

```python signature
matrix(rows: Any) -> Matrix
```




Build a matrix from ordered rows. Direct Python construction and the facade
module function use the shared default context. The raw wasm-bindgen
compatibility layer retains `(rows, columns, flat_entries)`; new JavaScript
code should use the nested facade form.

### matrix_identity

<a id="entry-presentation_python_api_session_matrix_identity"></a>
<a id="placement-placement.python.python_module.module_matrix_identity.98fcb671a0ca"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
matrix_identity(size: int) -> Matrix
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_matrix_identity.f33c94ef789a"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.matrix_identity</code></p>

```python signature
matrix_identity(size: int) -> Matrix
```

</details>


The \(\mathit{size}\times\mathit{size}\) identity; size 0 raises.

### matrix_zero

<a id="entry-presentation_python_api_session_matrix_zero"></a>
<a id="placement-placement.python.python_module.module_matrix_zero.898b7b05a3f0"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
matrix_zero(rows: int, columns: int) -> Matrix
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_matrix_zero.82b28b613f59"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.matrix_zero</code></p>

```python signature
matrix_zero(rows: int, columns: int) -> Matrix
```

</details>


The \(\mathit{rows}\times\mathit{columns}\) zero matrix.

### matrix_diagonal

<a id="entry-presentation_python_api_session_matrix_diagonal"></a>
<a id="placement-placement.python.python_module.module_matrix_diagonal.2c66b85938ea"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
matrix_diagonal(entries: Iterable[ExpressionLike]) -> Matrix
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_matrix_diagonal.8199af723487"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.matrix_diagonal</code></p>

```python signature
matrix_diagonal(entries: Iterable[ExpressionLike]) -> Matrix
```

</details>


Square matrix with the given main diagonal and zeros elsewhere; the empty
list raises.

## Shape and access

### rows

<a id="entry-presentation_python_api_matrix_rows"></a>
<a id="placement-placement.python.python_class.matrix_rows.61f364edfdc5"></a>
<p class="symi-entry-owner">Matrix property</p>

```python signature
rows: int
```


### columns

<a id="entry-presentation_python_api_matrix_columns"></a>
<a id="placement-placement.python.python_class.matrix_columns.195d51432dc4"></a>
<p class="symi-entry-owner">Matrix property</p>

```python signature
columns: int
```


### entry

*Not exposed by the Python bindings. Available as [`Matrix.entry`](/symi/wasm/matrix-construction#entry) in WASM / JavaScript, [`UniffiMatrix.entry`](/symi/kotlin/matrix-construction#entry) in Kotlin, [`UniffiMatrix.entry`](/symi/swift/matrix-construction#entry) in Swift, [`api::Matrix::entry`](/symi/rust/matrix-construction#entry) in Rust.*


Element access. **Notes:** Python uses indexing `m[row, column]` instead.

## Example

Build matrices from rows or from a structured constructor.

```python
import symi

x = symi.symbol("x")

print(symi.Matrix([[1, x], [x, 1]]))
print(symi.matrix_identity(3))
print(symi.matrix_zero(2, 3))
print(symi.matrix_diagonal([1, 2, 3]))
```


## Additional API

### diagonal_matrix

<a id="entry-presentation_python_api_session_diagonal_matrix"></a>
<a id="placement-placement.python.python_module.module_diagonal_matrix.cb2bd3eae1d2"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
diagonal_matrix(subject: Matrix) -> AssumptionProposition
```

Build a diagonal-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_diagonal_matrix.d5c6b8521631"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.diagonal_matrix</code></p>

```python signature
diagonal_matrix(subject: Matrix) -> AssumptionProposition
```

</details>

### identity_matrix

<a id="entry-presentation_python_api_session_identity_matrix"></a>
<a id="placement-placement.python.python_module.module_identity_matrix.4d6c93f48f1e"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
identity_matrix(subject: Matrix) -> AssumptionProposition
```

Build an identity-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_identity_matrix.0ebf4e138e96"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.identity_matrix</code></p>

```python signature
identity_matrix(subject: Matrix) -> AssumptionProposition
```

</details>

### zero_matrix

<a id="entry-presentation_python_api_session_zero_matrix"></a>
<a id="placement-placement.python.python_module.module_zero_matrix.c698818abd16"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
zero_matrix(subject: Matrix) -> AssumptionProposition
```

Build a zero-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_zero_matrix.7b8066c05383"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.zero_matrix</code></p>

```python signature
zero_matrix(subject: Matrix) -> AssumptionProposition
```

</details>

