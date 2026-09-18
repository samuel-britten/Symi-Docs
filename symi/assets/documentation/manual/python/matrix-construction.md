# Matrix construction and access

Construct matrices from ordered rows or from identity, zero, and diagonal families. Shape and entry access preserve row-major ordering.

## Constructors

### matrix

<a id="placement-placement.python.python_class.context_matrix.2fa42d359b64"></a>
`Context.matrix(rows)`

<a id="placement-placement.python.python_class.partialdifferentialequationprincipalpart_matrix.b3778ce1892c"></a>
`PartialDifferentialEquationPrincipalPart.matrix`




Build a matrix from ordered rows. Direct Python construction and the facade
module function use the shared default context. The raw wasm-bindgen
compatibility layer retains `(rows, columns, flat_entries)`; new JavaScript
code should use the nested facade form.

### matrix_identity

<a id="placement-placement.python.python_class.context_matrix_identity.f33c94ef789a"></a>
`Context.matrix_identity(size)`

<a id="placement-placement.python.python_module.module_matrix_identity.98fcb671a0ca"></a>
`symi.matrix_identity(size)`


The \(\mathit{size}\times\mathit{size}\) identity; size 0 raises.

### matrix_zero

<a id="placement-placement.python.python_class.context_matrix_zero.82b28b613f59"></a>
`Context.matrix_zero(rows, columns)`

<a id="placement-placement.python.python_module.module_matrix_zero.898b7b05a3f0"></a>
`symi.matrix_zero(rows, columns)`


The \(\mathit{rows}\times\mathit{columns}\) zero matrix.

### matrix_diagonal

<a id="placement-placement.python.python_class.context_matrix_diagonal.8199af723487"></a>
`Context.matrix_diagonal(entries)`

<a id="placement-placement.python.python_module.module_matrix_diagonal.2c66b85938ea"></a>
`symi.matrix_diagonal(entries)`


Square matrix with the given main diagonal and zeros elsewhere; the empty
list raises.

## Shape and access

### rows

<a id="placement-placement.python.python_class.matrix_rows.61f364edfdc5"></a>
`Matrix.rows`


### columns

<a id="placement-placement.python.python_class.matrix_columns.195d51432dc4"></a>
`Matrix.columns`


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

