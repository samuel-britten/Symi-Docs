# Matrix construction and access

Construct matrices from ordered rows or from identity, zero, and diagonal families. Shape and entry access preserve row-major ordering.

## Constructors

### matrix

<a id="entry-presentation_wasm_api_session_matrix"></a>
<a id="placement-placement.wasm.javascript_facade.context_matrix.31619139102f"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
matrix(rows: Iterable<Iterable<ExpressionLike>>): Matrix
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_matrix.6a9f56e8356c"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.matrix</code></p>

```typescript signature
matrix(rows: number, columns: number, entries: Expression[]): Matrix
```

<a id="placement-placement.wasm.javascript_facade.symifacade_matrix.e3d8245c690c"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.matrix</code></p>

```typescript signature
matrix(rows: Iterable<Iterable<ExpressionLike>>): Matrix
```

</details>




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

<a id="entry-presentation_wasm_api_matrix_rows"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_rows.5a09e96bea77"></a>
<p class="symi-entry-owner">Matrix property</p>

```typescript signature
readonly rows: number
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.matrix_rows.e17a7bb5b346"></a>
<p class="symi-entry-owner">Raw WebAssembly: Matrix property: <code>Matrix.rows</code></p>

```typescript signature
readonly rows: number
```

</details>


### columns

<a id="entry-presentation_wasm_api_matrix_columns"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_columns.30f3e2e7c0cf"></a>
<p class="symi-entry-owner">Matrix property</p>

```typescript signature
readonly columns: number
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.matrix_columns.4b3f7bc5d61b"></a>
<p class="symi-entry-owner">Raw WebAssembly: Matrix property: <code>Matrix.columns</code></p>

```typescript signature
readonly columns: number
```

</details>


### entry

<a id="entry-presentation_wasm_api_matrix_entry"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_entry.720b6a063946"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
entry(row: number, column: number): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.matrix_entry.53b08ca2f069"></a>
<p class="symi-entry-owner">Raw WebAssembly: Matrix method: <code>Matrix.entry</code></p>

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

### diagonalMatrix

<a id="entry-presentation_wasm_api_session_diagonal_matrix"></a>
<a id="placement-placement.wasm.wasm_module.module_diagonalmatrix.0b4ff30c00c6"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
diagonalMatrix(subject: Matrix): AssumptionProposition
```

Build a diagonal-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_diagonalmatrix.4a508bb260ba"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.diagonalMatrix</code></p>

```typescript signature
diagonalMatrix(value: Matrix): AssumptionProposition
```

<a id="placement-placement.wasm.wasm_class.context_diagonalmatrix.25c6eea29c73"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.diagonalMatrix</code></p>

```typescript signature
diagonalMatrix(subject: Matrix): AssumptionProposition
```

<a id="placement-placement.wasm.javascript_facade.symifacade_diagonalmatrix.bdd963190e9d"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.diagonalMatrix</code></p>

```typescript signature
diagonalMatrix(value: Matrix): AssumptionProposition
```

</details>

### identityMatrix

<a id="entry-presentation_wasm_api_session_identity_matrix"></a>
<a id="placement-placement.wasm.wasm_module.module_identitymatrix.06589077f324"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
identityMatrix(subject: Matrix): AssumptionProposition
```

Build an identity-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_identitymatrix.a1cf6abb115b"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.identityMatrix</code></p>

```typescript signature
identityMatrix(value: Matrix): AssumptionProposition
```

<a id="placement-placement.wasm.wasm_class.context_identitymatrix.b3b15b6e67fd"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.identityMatrix</code></p>

```typescript signature
identityMatrix(subject: Matrix): AssumptionProposition
```

<a id="placement-placement.wasm.javascript_facade.symifacade_identitymatrix.a0eea0b9ad1a"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.identityMatrix</code></p>

```typescript signature
identityMatrix(value: Matrix): AssumptionProposition
```

</details>

### matrixDiagonal

<a id="entry-presentation_wasm_api_session_matrix_diagonal"></a>
<a id="placement-placement.wasm.wasm_module.module_matrixdiagonal.05ae03868956"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
matrixDiagonal(entries: Expression[]): Matrix
```

Square matrix with the given main diagonal and zeros elsewhere; the empty list raises.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_matrixdiagonal.dba54c60749f"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.matrixDiagonal</code></p>

```typescript signature
matrixDiagonal(entries: Expression[]): Matrix
```

</details>

### matrixIdentity

<a id="entry-presentation_wasm_api_session_matrix_identity"></a>
<a id="placement-placement.wasm.wasm_module.module_matrixidentity.80b062f41bf7"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
matrixIdentity(size: number): Matrix
```

The \(\mathit{size}\times\mathit{size}\) identity; size 0 raises.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_matrixidentity.843c4412d2b9"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.matrixIdentity</code></p>

```typescript signature
matrixIdentity(size: number): Matrix
```

</details>

### matrixZero

<a id="entry-presentation_wasm_api_session_matrix_zero"></a>
<a id="placement-placement.wasm.wasm_module.module_matrixzero.47364d1ef8a0"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
matrixZero(rows: number, columns: number): Matrix
```

The \(\mathit{rows}\times\mathit{columns}\) zero matrix.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_matrixzero.3576687a68ef"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.matrixZero</code></p>

```typescript signature
matrixZero(rows: number, columns: number): Matrix
```

</details>

### zeroMatrix

<a id="entry-presentation_wasm_api_session_zero_matrix"></a>
<a id="placement-placement.wasm.wasm_module.module_zeromatrix.3561defba5d5"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
zeroMatrix(subject: Matrix): AssumptionProposition
```

Build a zero-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_zeromatrix.a94420588464"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.zeroMatrix</code></p>

```typescript signature
zeroMatrix(value: Matrix): AssumptionProposition
```

<a id="placement-placement.wasm.wasm_class.context_zeromatrix.2e74a285fae1"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.zeroMatrix</code></p>

```typescript signature
zeroMatrix(subject: Matrix): AssumptionProposition
```

<a id="placement-placement.wasm.javascript_facade.symifacade_zeromatrix.c57cdcbf6784"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.zeroMatrix</code></p>

```typescript signature
zeroMatrix(value: Matrix): AssumptionProposition
```

</details>

