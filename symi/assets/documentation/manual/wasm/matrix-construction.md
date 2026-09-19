# Matrix construction and access

Construct matrices from ordered rows or from identity, zero, and diagonal families. Shape and entry access preserve row-major ordering.

## Constructors

### matrix



Build a matrix from ordered rows. Direct Python construction and the facade
module function use the shared default context. The raw wasm-bindgen
compatibility layer retains `(rows, columns, flat_entries)`; new JavaScript
code should use the nested facade form.

### matrix_identity

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.matrix_identity`](/symi/python/matrix-construction#matrix_identity) in Python, [`UniffiSession.matrixIdentity`](/symi/kotlin/matrix-construction#matrix_identity) in Kotlin, [`UniffiSession.matrixIdentity`](/symi/swift/matrix-construction#matrix_identity) in Swift, [`api::Session::matrix_identity`](/symi/rust/matrix-construction#matrix_identity) in Rust.*


The \(\mathit{size}\times\mathit{size}\) identity; size 0 raises.

### matrix_zero

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.matrix_zero`](/symi/python/matrix-construction#matrix_zero) in Python, [`UniffiSession.matrixZero`](/symi/kotlin/matrix-construction#matrix_zero) in Kotlin, [`UniffiSession.matrixZero`](/symi/swift/matrix-construction#matrix_zero) in Swift, [`api::Session::matrix_zero`](/symi/rust/matrix-construction#matrix_zero) in Rust.*


The \(\mathit{rows}\times\mathit{columns}\) zero matrix.

### matrix_diagonal

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.matrix_diagonal`](/symi/python/matrix-construction#matrix_diagonal) in Python, [`UniffiSession.matrixDiagonal`](/symi/kotlin/matrix-construction#matrix_diagonal) in Kotlin, [`UniffiSession.matrixDiagonal`](/symi/swift/matrix-construction#matrix_diagonal) in Swift, [`api::Session::matrix_diagonal`](/symi/rust/matrix-construction#matrix_diagonal) in Rust.*


Square matrix with the given main diagonal and zeros elsewhere; the empty
list raises.

## Shape and access

### rows

<a id="entry-presentation_wasm_matrix_construction_capability_algebra_rows_api_matrix_rows"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_rows.5a09e96bea77"></a>
<p class="symi-entry-owner">Matrix property</p>

```typescript signature
readonly rows: number
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.matrix_rows.e17a7bb5b346"></a>
<p class="symi-entry-owner">Matrix property: <code>Matrix.rows</code></p>

```typescript signature
readonly rows: number
```

</details>


### columns

<a id="entry-presentation_wasm_matrix_construction_capability_algebra_columns_api_matrix_columns"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_columns.30f3e2e7c0cf"></a>
<p class="symi-entry-owner">Matrix property</p>

```typescript signature
readonly columns: number
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.matrix_columns.4b3f7bc5d61b"></a>
<p class="symi-entry-owner">Matrix property: <code>Matrix.columns</code></p>

```typescript signature
readonly columns: number
```

</details>


### entry

<a id="entry-presentation_wasm_matrix_construction_capability_algebra_entry_api_matrix_entry"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_entry.720b6a063946"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
entry(row: number, column: number): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.matrix_entry.53b08ca2f069"></a>
<p class="symi-entry-owner">Matrix method: <code>Matrix.entry</code></p>

```typescript signature
entry(row: number, column: number): Expression
```

</details>


Element access. **Notes:** Python uses indexing `m[row, column]` instead.

## Example

Build matrices from rows or from a structured constructor.

```javascript
const x = symi.symbol("x");
const matrix = symi.matrix([[1, x], [x, 1]]);

console.log(matrix.rows(), matrix.columns());
console.log(matrix.entry(0, 1).toString());
```


## Additional API

### matrix

<a id="entry-presentation_wasm_matrix_construction_capability_algebra_matrix_api_session_matrix"></a>
<a id="placement-placement.wasm.javascript_facade.context_matrix.31619139102f"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
matrix(rows: Iterable<Iterable<ExpressionLike>>): Matrix
```

Build a matrix from ordered rows. Direct Python construction and the facade module function use the shared default context. The raw wasm-bindgen compatibility layer retains `(rows, columns, flat_entries)`; new JavaScript code should use the nested facade form.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_matrix.6a9f56e8356c"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.matrix</code></p>

```typescript signature
matrix(rows: number, columns: number, entries: Expression[]): Matrix
```

<a id="placement-placement.wasm.javascript_facade.symifacade_matrix.e3d8245c690c"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.matrix</code></p>

```typescript signature
matrix(rows: Iterable<Iterable<ExpressionLike>>): Matrix
```

</details>

### matrix

<a id="entry-presentation_wasm_matrix_construction_capability_algebra_matrix_api_partial_differential_equations_partialdifferentialequationprincipalpart_matrix"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationprincipalpart_matrix.f4debc79ad6d"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPrincipalPart property</p>

```typescript signature
readonly matrix: Matrix
```

The symmetric principal matrix whose quadratic form is the exact principal symbol.

