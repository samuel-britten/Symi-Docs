# Linear algebra

Matrix arithmetic and linear algebra operations are exact symbolic operations.

## Arithmetic

Python additionally overloads `+`, `-`, `*` (matrix product) over these
named methods.

### add

<a id="entry-presentation_wasm_api_matrix_add"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_add.b4cbe00e9031"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
add(other: Matrix): Matrix
```

Entrywise sum of two matrices of the same shape.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.matrix_add.99e6a9230b2d"></a>
<p class="symi-entry-owner">Raw WebAssembly: Matrix method: <code>Matrix.add</code></p>

```typescript signature
add(other: Matrix): Matrix
```

</details>

### subtract

<a id="entry-presentation_wasm_api_matrix_subtract"></a>
<a id="placement-placement.wasm.wasm_class.matrix_subtract.ac3ea3a61aeb"></a>
<p class="symi-entry-owner">Raw WebAssembly: Matrix method</p>

```typescript signature
subtract(other: Matrix): Matrix
```

Entrywise difference of two matrices of the same shape.

### multiply

Matrix product; inner dimensions must agree.

<a id="entry-presentation_wasm_api_matrix_multiply"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_multiply.2820cc1c77f6"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
multiply(other: Matrix): Matrix
```

Matrix product; inner dimensions must agree.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.matrix_multiply.ba14f611498e"></a>
<p class="symi-entry-owner">Raw WebAssembly: Matrix method: <code>Matrix.multiply</code></p>

```typescript signature
multiply(other: Matrix): Matrix
```

</details>

### scalar_multiply

*Not exposed by the WASM / JavaScript bindings. Available as [`Matrix.scalar_multiply`](/symi/python/linear-algebra#scalar_multiply) in Python, [`UniffiMatrix.scalarMultiply`](/symi/kotlin/linear-algebra#scalar_multiply) in Kotlin, [`UniffiMatrix.scalarMultiply`](/symi/swift/linear-algebra#scalar_multiply) in Swift, [`api::Matrix::scalar_multiply`](/symi/rust/linear-algebra#scalar_multiply) in Rust.*


## Matrix assumptions

Matrix predicates are available as methods on `Matrix`, as constructors on an
explicit `Context`, and as default-context module functions in Python and WASM.
Native Rust uses the corresponding `Session` methods. Query methods return
`True`/`False`/`None` (or the native `TruthValue`), preserving unknown when
the exact symbolic engine cannot decide.

### matrix_shape

<a id="entry-presentation_wasm_api_session_matrix_shape"></a>
<a id="placement-placement.wasm.wasm_module.module_matrixshape.3371cecbb4ef"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
matrixShape(
    subject: Matrix,
    rows: number,
    columns: number,
): AssumptionProposition
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_matrixshape.36881a4eaa96"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.matrixShape</code></p>

```typescript signature
matrixShape(value: Matrix, rows: number, columns: number): AssumptionProposition
```

<a id="placement-placement.wasm.wasm_class.context_matrixshape.459aae814946"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.matrixShape</code></p>

```typescript signature
matrixShape(
    subject: Matrix,
    rows: number,
    columns: number,
): AssumptionProposition
```

<a id="placement-placement.wasm.javascript_facade.symifacade_matrixshape.ba060181fcb1"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.matrixShape</code></p>

```typescript signature
matrixShape(value: Matrix, rows: number, columns: number): AssumptionProposition
```

</details>

Assert or query an exact positive row and column count.

### square_matrix

<a id="entry-presentation_wasm_api_session_square_matrix"></a>
<a id="placement-placement.wasm.wasm_module.module_squarematrix.dd03175ad835"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
squareMatrix(subject: Matrix): AssumptionProposition
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_squarematrix.ca6d22aeb8ae"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.squareMatrix</code></p>

```typescript signature
squareMatrix(value: Matrix): AssumptionProposition
```

<a id="placement-placement.wasm.wasm_class.context_squarematrix.10a5804efa2d"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.squareMatrix</code></p>

```typescript signature
squareMatrix(subject: Matrix): AssumptionProposition
```

<a id="placement-placement.wasm.javascript_facade.symifacade_squarematrix.07006ba57e12"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.squareMatrix</code></p>

```typescript signature
squareMatrix(value: Matrix): AssumptionProposition
```

</details>

Assert or query that the matrix has equal row and column counts.

### zero_matrix
Assert or query that all entries are zero.

### identity_matrix
Assert or query the identity-matrix structure.

### diagonal_matrix
Assert or query diagonal structure.

### upper_triangular_matrix

<a id="entry-presentation_wasm_api_session_upper_triangular_matrix"></a>
<a id="placement-placement.wasm.wasm_module.module_uppertriangularmatrix.14d1fd7d94d6"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
upperTriangularMatrix(subject: Matrix): AssumptionProposition
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_uppertriangularmatrix.fa854937bbdc"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.upperTriangularMatrix</code></p>

```typescript signature
upperTriangularMatrix(value: Matrix): AssumptionProposition
```

<a id="placement-placement.wasm.wasm_class.context_uppertriangularmatrix.5ff14f5d2604"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.upperTriangularMatrix</code></p>

```typescript signature
upperTriangularMatrix(subject: Matrix): AssumptionProposition
```

<a id="placement-placement.wasm.javascript_facade.symifacade_uppertriangularmatrix.7fc7c36b3f9a"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.upperTriangularMatrix</code></p>

```typescript signature
upperTriangularMatrix(value: Matrix): AssumptionProposition
```

</details>

Assert or query upper-triangular structure.

### lower_triangular_matrix

<a id="entry-presentation_wasm_api_session_lower_triangular_matrix"></a>
<a id="placement-placement.wasm.wasm_module.module_lowertriangularmatrix.3932d732657f"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
lowerTriangularMatrix(subject: Matrix): AssumptionProposition
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_lowertriangularmatrix.f6b8f881e801"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.lowerTriangularMatrix</code></p>

```typescript signature
lowerTriangularMatrix(value: Matrix): AssumptionProposition
```

<a id="placement-placement.wasm.wasm_class.context_lowertriangularmatrix.022cfbba3773"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.lowerTriangularMatrix</code></p>

```typescript signature
lowerTriangularMatrix(subject: Matrix): AssumptionProposition
```

<a id="placement-placement.wasm.javascript_facade.symifacade_lowertriangularmatrix.17896f244489"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.lowerTriangularMatrix</code></p>

```typescript signature
lowerTriangularMatrix(value: Matrix): AssumptionProposition
```

</details>

Assert or query lower-triangular structure.

### symmetric_matrix

<a id="entry-presentation_wasm_api_session_symmetric_matrix"></a>
<a id="placement-placement.wasm.wasm_module.module_symmetricmatrix.503a37665d86"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
symmetricMatrix(subject: Matrix): AssumptionProposition
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_symmetricmatrix.29a86f11f324"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.symmetricMatrix</code></p>

```typescript signature
symmetricMatrix(value: Matrix): AssumptionProposition
```

<a id="placement-placement.wasm.wasm_class.context_symmetricmatrix.fef52053eed2"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.symmetricMatrix</code></p>

```typescript signature
symmetricMatrix(subject: Matrix): AssumptionProposition
```

<a id="placement-placement.wasm.javascript_facade.symifacade_symmetricmatrix.72efdbcc7ebb"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.symmetricMatrix</code></p>

```typescript signature
symmetricMatrix(value: Matrix): AssumptionProposition
```

</details>

Assert or query equality with the transpose.

### hermitian_matrix

<a id="entry-presentation_wasm_api_session_hermitian_matrix"></a>
<a id="placement-placement.wasm.wasm_module.module_hermitianmatrix.561dfa80b073"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
hermitianMatrix(subject: Matrix): AssumptionProposition
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_hermitianmatrix.b40f37562f34"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.hermitianMatrix</code></p>

```typescript signature
hermitianMatrix(value: Matrix): AssumptionProposition
```

<a id="placement-placement.wasm.wasm_class.context_hermitianmatrix.ad07d380df99"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.hermitianMatrix</code></p>

```typescript signature
hermitianMatrix(subject: Matrix): AssumptionProposition
```

<a id="placement-placement.wasm.javascript_facade.symifacade_hermitianmatrix.75fe3584e710"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.hermitianMatrix</code></p>

```typescript signature
hermitianMatrix(value: Matrix): AssumptionProposition
```

</details>

Assert or query equality with the conjugate transpose.

### orthogonal_matrix

<a id="entry-presentation_wasm_api_session_orthogonal_matrix"></a>
<a id="placement-placement.wasm.wasm_module.module_orthogonalmatrix.5841526b40e6"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
orthogonalMatrix(subject: Matrix): AssumptionProposition
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_orthogonalmatrix.d64d9afbebcd"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.orthogonalMatrix</code></p>

```typescript signature
orthogonalMatrix(value: Matrix): AssumptionProposition
```

<a id="placement-placement.wasm.wasm_class.context_orthogonalmatrix.ff1dc519eda5"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.orthogonalMatrix</code></p>

```typescript signature
orthogonalMatrix(subject: Matrix): AssumptionProposition
```

<a id="placement-placement.wasm.javascript_facade.symifacade_orthogonalmatrix.5479e2dfb83c"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.orthogonalMatrix</code></p>

```typescript signature
orthogonalMatrix(value: Matrix): AssumptionProposition
```

</details>

Assert or query the real orthogonality condition.

### unitary_matrix

<a id="entry-presentation_wasm_api_session_unitary_matrix"></a>
<a id="placement-placement.wasm.wasm_module.module_unitarymatrix.5678eb6d4ccd"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
unitaryMatrix(subject: Matrix): AssumptionProposition
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_unitarymatrix.0d68d571cdb5"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.unitaryMatrix</code></p>

```typescript signature
unitaryMatrix(value: Matrix): AssumptionProposition
```

<a id="placement-placement.wasm.wasm_class.context_unitarymatrix.4eef4d42ba96"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.unitaryMatrix</code></p>

```typescript signature
unitaryMatrix(subject: Matrix): AssumptionProposition
```

<a id="placement-placement.wasm.javascript_facade.symifacade_unitarymatrix.a1c207d3bd64"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.unitaryMatrix</code></p>

```typescript signature
unitaryMatrix(value: Matrix): AssumptionProposition
```

</details>

Assert or query the unitary condition.

### normal_matrix

<a id="entry-presentation_wasm_api_session_normal_matrix"></a>
<a id="placement-placement.wasm.wasm_module.module_normalmatrix.73c5d372a8ef"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
normalMatrix(subject: Matrix): AssumptionProposition
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_normalmatrix.1dab2bd7e17a"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.normalMatrix</code></p>

```typescript signature
normalMatrix(value: Matrix): AssumptionProposition
```

<a id="placement-placement.wasm.wasm_class.context_normalmatrix.22c1df434daa"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.normalMatrix</code></p>

```typescript signature
normalMatrix(subject: Matrix): AssumptionProposition
```

<a id="placement-placement.wasm.javascript_facade.symifacade_normalmatrix.ab26f6537ccc"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.normalMatrix</code></p>

```typescript signature
normalMatrix(value: Matrix): AssumptionProposition
```

</details>

Assert or query commutation with the conjugate transpose.

### full_rank_matrix

<a id="entry-presentation_wasm_api_session_full_rank_matrix"></a>
<a id="placement-placement.wasm.wasm_module.module_fullrankmatrix.545a4d2aa24c"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
fullRankMatrix(subject: Matrix): AssumptionProposition
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_fullrankmatrix.9ea5686dda2d"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.fullRankMatrix</code></p>

```typescript signature
fullRankMatrix(value: Matrix): AssumptionProposition
```

<a id="placement-placement.wasm.wasm_class.context_fullrankmatrix.d4dda0c1ae74"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.fullRankMatrix</code></p>

```typescript signature
fullRankMatrix(subject: Matrix): AssumptionProposition
```

<a id="placement-placement.wasm.javascript_facade.symifacade_fullrankmatrix.661d3f99feb1"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.fullRankMatrix</code></p>

```typescript signature
fullRankMatrix(value: Matrix): AssumptionProposition
```

</details>

Assert or query full rank.

### invertible_matrix

<a id="entry-presentation_wasm_api_session_invertible_matrix"></a>
<a id="placement-placement.wasm.wasm_module.module_invertiblematrix.f6ca9c5a4fd1"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
invertibleMatrix(subject: Matrix): AssumptionProposition
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_invertiblematrix.3f2a5f363550"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.invertibleMatrix</code></p>

```typescript signature
invertibleMatrix(value: Matrix): AssumptionProposition
```

<a id="placement-placement.wasm.wasm_class.context_invertiblematrix.64db4aef0074"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.invertibleMatrix</code></p>

```typescript signature
invertibleMatrix(subject: Matrix): AssumptionProposition
```

<a id="placement-placement.wasm.javascript_facade.symifacade_invertiblematrix.2a836dfb9d2c"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.invertibleMatrix</code></p>

```typescript signature
invertibleMatrix(value: Matrix): AssumptionProposition
```

</details>

Assert or query square invertibility.

### singular_matrix

<a id="entry-presentation_wasm_api_session_singular_matrix"></a>
<a id="placement-placement.wasm.wasm_module.module_singularmatrix.3fe01d91e635"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
singularMatrix(subject: Matrix): AssumptionProposition
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_singularmatrix.4d8f48a378b9"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.singularMatrix</code></p>

```typescript signature
singularMatrix(value: Matrix): AssumptionProposition
```

<a id="placement-placement.wasm.wasm_class.context_singularmatrix.95862437c4bc"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.singularMatrix</code></p>

```typescript signature
singularMatrix(subject: Matrix): AssumptionProposition
```

<a id="placement-placement.wasm.javascript_facade.symifacade_singularmatrix.5c788f7b7710"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.singularMatrix</code></p>

```typescript signature
singularMatrix(value: Matrix): AssumptionProposition
```

</details>

Assert or query square singularity.

### integer_entries

<a id="entry-presentation_wasm_api_session_integer_entries"></a>
<a id="placement-placement.wasm.wasm_module.module_integerentries.98584eadce94"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
integerEntries(subject: Matrix): AssumptionProposition
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_integerentries.1bfe48d4d7e5"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.integerEntries</code></p>

```typescript signature
integerEntries(value: Matrix): AssumptionProposition
```

<a id="placement-placement.wasm.wasm_class.context_integerentries.24804dca8290"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.integerEntries</code></p>

```typescript signature
integerEntries(subject: Matrix): AssumptionProposition
```

<a id="placement-placement.wasm.javascript_facade.symifacade_integerentries.177ca0ebd539"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.integerEntries</code></p>

```typescript signature
integerEntries(value: Matrix): AssumptionProposition
```

</details>

Assert or query integer entries.

### real_entries

<a id="entry-presentation_wasm_api_session_real_entries"></a>
<a id="placement-placement.wasm.wasm_module.module_realentries.7d6debcfcb29"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
realEntries(subject: Matrix): AssumptionProposition
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_realentries.bdb9034606ef"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.realEntries</code></p>

```typescript signature
realEntries(value: Matrix): AssumptionProposition
```

<a id="placement-placement.wasm.wasm_class.context_realentries.1307176acf67"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.realEntries</code></p>

```typescript signature
realEntries(subject: Matrix): AssumptionProposition
```

<a id="placement-placement.wasm.javascript_facade.symifacade_realentries.0dc13fbd48dc"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.realEntries</code></p>

```typescript signature
realEntries(value: Matrix): AssumptionProposition
```

</details>

Assert or query real entries.

### complex_entries

<a id="entry-presentation_wasm_api_session_complex_entries"></a>
<a id="placement-placement.wasm.wasm_module.module_complexentries.e48f22cc70fa"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
complexEntries(subject: Matrix): AssumptionProposition
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_complexentries.8ea406d31c90"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.complexEntries</code></p>

```typescript signature
complexEntries(value: Matrix): AssumptionProposition
```

<a id="placement-placement.wasm.wasm_class.context_complexentries.6d9dfd9287af"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.complexEntries</code></p>

```typescript signature
complexEntries(subject: Matrix): AssumptionProposition
```

<a id="placement-placement.wasm.javascript_facade.symifacade_complexentries.7d80eaa5cce4"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.complexEntries</code></p>

```typescript signature
complexEntries(value: Matrix): AssumptionProposition
```

</details>

Assert or query finite complex entries.

### positive_definite_matrix

<a id="entry-presentation_wasm_api_session_positive_definite_matrix"></a>
<a id="placement-placement.wasm.wasm_module.module_positivedefinitematrix.3e3360ff18c5"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
positiveDefiniteMatrix(subject: Matrix): AssumptionProposition
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_positivedefinitematrix.7dbac73d84be"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.positiveDefiniteMatrix</code></p>

```typescript signature
positiveDefiniteMatrix(value: Matrix): AssumptionProposition
```

<a id="placement-placement.wasm.wasm_class.context_positivedefinitematrix.b2c5736061fa"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.positiveDefiniteMatrix</code></p>

```typescript signature
positiveDefiniteMatrix(subject: Matrix): AssumptionProposition
```

<a id="placement-placement.wasm.javascript_facade.symifacade_positivedefinitematrix.5fa32eb988b6"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.positiveDefiniteMatrix</code></p>

```typescript signature
positiveDefiniteMatrix(value: Matrix): AssumptionProposition
```

</details>

Assert or query exact positive definiteness.

### positive_semidefinite_matrix

<a id="entry-presentation_wasm_api_session_positive_semidefinite_matrix"></a>
<a id="placement-placement.wasm.wasm_module.module_positivesemidefinitematrix.6e762c686132"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
positiveSemidefiniteMatrix(subject: Matrix): AssumptionProposition
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_positivesemidefinitematrix.c0dc57765934"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.positiveSemidefiniteMatrix</code></p>

```typescript signature
positiveSemidefiniteMatrix(value: Matrix): AssumptionProposition
```

<a id="placement-placement.wasm.wasm_class.context_positivesemidefinitematrix.29521df6b267"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.positiveSemidefiniteMatrix</code></p>

```typescript signature
positiveSemidefiniteMatrix(subject: Matrix): AssumptionProposition
```

<a id="placement-placement.wasm.javascript_facade.symifacade_positivesemidefinitematrix.06f230347a8f"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.positiveSemidefiniteMatrix</code></p>

```typescript signature
positiveSemidefiniteMatrix(value: Matrix): AssumptionProposition
```

</details>

Assert or query exact positive semidefiniteness.

### transpose

<a id="entry-presentation_wasm_api_matrix_transpose"></a>
<a id="placement-placement.wasm.wasm_class.matrix_transpose.d8c363407dfa"></a>
<p class="symi-entry-owner">Raw WebAssembly: Matrix method</p>

```typescript signature
transpose(): Matrix
```

The transpose, with rows and columns exchanged.

### determinant

Fraction-free (Berkowitz/Bareiss) determinant of a square matrix.

<a id="entry-presentation_wasm_api_matrix_determinant"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_determinant.375ed98dc9f9"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
determinant(): Expression
```

Fraction-free (Berkowitz/Bareiss) determinant of a square matrix.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.matrix_determinant.9cca0ed72b2e"></a>
<p class="symi-entry-owner">Raw WebAssembly: Matrix method: <code>Matrix.determinant</code></p>

```typescript signature
determinant(): Expression
```

</details>

### trace

<a id="entry-presentation_wasm_api_matrix_trace"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_trace.520d7f729d12"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
trace(): Expression
```

Sum of the diagonal entries of a square matrix.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.matrix_trace.061991085cfa"></a>
<p class="symi-entry-owner">Raw WebAssembly: Matrix method: <code>Matrix.trace</code></p>

```typescript signature
trace(): Expression
```

</details>

### characteristic_polynomial

<a id="entry-presentation_wasm_api_matrix_characteristic_polynomial"></a>
<a id="placement-placement.wasm.wasm_class.matrix_characteristicpolynomial.b52d432283bf"></a>
<p class="symi-entry-owner">Raw WebAssembly: Matrix method</p>

```typescript signature
characteristicPolynomial(variable: string): Expression
```


\(\det(\lambda I - M)\) as a polynomial in the named variable.

### minimal_polynomial

<a id="entry-presentation_wasm_api_matrix_minimal_polynomial"></a>
<a id="placement-placement.wasm.wasm_class.matrix_minimalpolynomial.404814deeca3"></a>
<p class="symi-entry-owner">Raw WebAssembly: Matrix method</p>

```typescript signature
minimalPolynomial(variable: string): Expression
```


The monic minimal polynomial over the rationals. The matrix must have rational entries.

### eigenvalues

Eigenvalues with multiplicity, via the characteristic polynomial and the
root finder; eigenvalues the root finder cannot close remain as
exact first-class `polynomial_root` values.

<a id="entry-presentation_wasm_api_matrix_eigenvalues"></a>
<a id="placement-placement.wasm.wasm_class.matrix_eigenvalues.6b4706f57bbf"></a>
<p class="symi-entry-owner">Raw WebAssembly: Matrix method</p>

```typescript signature
eigenvalues(): Expression[]
```

Eigenvalues with multiplicity, via the characteristic polynomial and the root finder; eigenvalues the root finder cannot close remain as exact first-class `polynomial_root` values.

### eigenvectors

For each eigenvalue, a basis of its eigenspace as column matrices.
**Notes:** WASM returns `Eigenpair` objects with `eigenvalue`/`vectors`
getters.

<a id="entry-presentation_wasm_api_matrix_eigenvectors"></a>
<a id="placement-placement.wasm.wasm_class.matrix_eigenvectors.c6bb314d0780"></a>
<p class="symi-entry-owner">Raw WebAssembly: Matrix method</p>

```typescript signature
eigenvectors(): Eigenpair[]
```

For each eigenvalue, a basis of its eigenspace as column matrices. Notes: WASM returns `eigenpair` objects with `eigenvalue`/`vectors` getters.

### eigenpair (WASM result class)

### eigenvalue

<a id="entry-presentation_wasm_api_eigenpair_eigenvalue"></a>
<a id="placement-placement.wasm.wasm_class.eigenpair_eigenvalue.843c70c4d195"></a>
<p class="symi-entry-owner">Raw WebAssembly: Eigenpair property</p>

```typescript signature
readonly eigenvalue: Expression
```


### vectors

<a id="entry-presentation_wasm_api_eigenpair_vectors"></a>
<a id="placement-placement.wasm.wasm_class.eigenpair_vectors.cddaa6ad5fe1"></a>
<p class="symi-entry-owner">Raw WebAssembly: Eigenpair property</p>

```typescript signature
readonly vectors: Matrix[]
```

A basis of the eigenspace, as column matrices.

### inverse

Inverse via the adjugate; raises on singular input.

<a id="entry-presentation_wasm_api_matrix_inverse"></a>
<a id="placement-placement.wasm.wasm_class.matrix_inverse.b9c203ead0bb"></a>
<p class="symi-entry-owner">Raw WebAssembly: Matrix method</p>

```typescript signature
inverse(): Matrix
```

Inverse via the adjugate; raises on singular input.

### rank

<a id="entry-presentation_wasm_api_matrix_rank"></a>
<a id="placement-placement.wasm.wasm_class.matrix_rank.488612d9f940"></a>
<p class="symi-entry-owner">Raw WebAssembly: Matrix method</p>

```typescript signature
rank(): number
```


Rank via Bareiss fraction-free elimination.

### row_reduce

*Not exposed by the WASM / JavaScript bindings. Available as [`Matrix.row_reduce`](/symi/python/linear-algebra#row_reduce) in Python, [`UniffiMatrix.rowReduce`](/symi/kotlin/linear-algebra#row_reduce) in Kotlin, [`UniffiMatrix.rowReduce`](/symi/swift/linear-algebra#row_reduce) in Swift, [`api::Matrix::row_reduce`](/symi/rust/linear-algebra#row_reduce) in Rust.*


Bareiss row-reduced form (fraction-free; pivots remain on the diagonal).

### nullspace_basis

*Not exposed by the WASM / JavaScript bindings. Available as [`Matrix.nullspace_basis`](/symi/python/linear-algebra#nullspace_basis) in Python, [`UniffiMatrix.nullspaceBasis`](/symi/kotlin/linear-algebra#nullspace_basis) in Kotlin, [`UniffiMatrix.nullspaceBasis`](/symi/swift/linear-algebra#nullspace_basis) in Swift, [`api::matrix_operations::Matrix::nullspace_basis`](/symi/rust/linear-algebra#nullspace_basis) in Rust.*


A basis of the kernel, as column matrices; empty list for full column rank.

### adjugate

The classical adjoint (transpose of the cofactor matrix); satisfies
\(M\operatorname{adj}(M) = \det(M) I\).

<a id="entry-presentation_wasm_api_matrix_adjugate"></a>
<a id="placement-placement.wasm.wasm_class.matrix_adjugate.3b29f0eaf4e7"></a>
<p class="symi-entry-owner">Raw WebAssembly: Matrix method</p>

```typescript signature
adjugate(): Matrix
```

The classical adjoint (transpose of the cofactor Matrix); satisfies \(M\operatorname{adj}(M) = \det(M) I\).

### cofactor_matrix

*Not exposed by the WASM / JavaScript bindings. Available as [`Matrix.cofactor_matrix`](/symi/python/linear-algebra#cofactor_matrix) in Python, [`UniffiMatrix.cofactorMatrix`](/symi/kotlin/linear-algebra#cofactor_matrix) in Kotlin, [`UniffiMatrix.cofactorMatrix`](/symi/swift/linear-algebra#cofactor_matrix) in Swift, [`api::Matrix::cofactor_matrix`](/symi/rust/linear-algebra#cofactor_matrix) in Rust.*


### lower_upper_decomposition

*Not exposed by the WASM / JavaScript bindings. Available as [`Matrix.lower_upper_decomposition`](/symi/python/linear-algebra#lower_upper_decomposition) in Python, [`UniffiMatrix.lowerUpperDecomposition`](/symi/kotlin/linear-algebra#lower_upper_decomposition) in Kotlin, [`UniffiMatrix.lowerUpperDecomposition`](/symi/swift/linear-algebra#lower_upper_decomposition) in Swift, [`api::matrix_operations::Matrix::lower_upper_decomposition`](/symi/rust/linear-algebra#lower_upper_decomposition) in Rust.*


Partial-pivoting LU decomposition returned as
`(permutation, lower, upper)` with \(\operatorname{permutation} M = \operatorname{lower}\,\operatorname{upper}\). The
permutation matrix is reconstructed from the pivoting row-swap record.
**Notes:** WASM returns a 3-element array `[permutation, lower, upper]`.

## Example

Exact matrix arithmetic and spectral data.

```javascript
const matrix = symi.matrix([[1, 2], [3, 4]]);

console.log(matrix.determinant().toString());
console.log(matrix.trace().toString());
console.log(matrix.multiply(matrix).toString());
```


## Additional API

### IntegerCokernelData

#### IntegerCokernelData.freeRank

<a id="entry-presentation_wasm_api_integercokerneldata_free_rank"></a>
<a id="placement-placement.wasm.wasm_class.integercokerneldata_freerank.58e60eaffcc6"></a>
<p class="symi-entry-owner">Raw WebAssembly: IntegerCokernelData property</p>

```typescript signature
readonly freeRank: number
```

Rank of the free part of the cokernel.

#### IntegerCokernelData.torsionInvariantFactors

<a id="entry-presentation_wasm_api_integercokerneldata_torsion_invariant_factors"></a>
<a id="placement-placement.wasm.wasm_class.integercokerneldata_torsioninvariantfactors.0963695946a9"></a>
<p class="symi-entry-owner">Raw WebAssembly: IntegerCokernelData property</p>

```typescript signature
readonly torsionInvariantFactors: Expression[]
```

The invariant factors of the torsion part of the cokernel.

### Matrix

<a id="entry-presentation_wasm_api_matrix"></a>
<a id="placement-placement.wasm.javascript_facade.matrix.75a04eacf90d"></a>
<p class="symi-entry-owner">Type</p>

```typescript signature
interface Matrix
```

Construct a matrix of the given shape from `entries` in row-major order.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.matrix.9d9ffff314ec"></a>
<p class="symi-entry-owner">Raw WebAssembly: Matrix constructor: <code>Matrix</code></p>

```typescript signature
new Matrix(rows: number, columns: number, entries: Expression[])
```

</details>

#### Matrix.cofactorMatrix

<a id="entry-presentation_wasm_api_matrix_cofactor_matrix"></a>
<a id="placement-placement.wasm.wasm_class.matrix_cofactormatrix.f7cc2238f180"></a>
<p class="symi-entry-owner">Raw WebAssembly: Matrix method</p>

```typescript signature
cofactorMatrix(): Matrix
```

The matrix of cofactors, whose transpose is the adjugate.

#### Matrix.execute

<a id="entry-presentation_wasm_api_matrix_execute"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_execute.28422f05de37"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
execute(): Matrix
```

Re-dispatch every unevaluated node (integral, derivative, summation, transform, ODE/recurrence placeholder) in the expression; useful after substitution has changed the inputs.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.matrix_execute.cd3080e5f4bd"></a>
<p class="symi-entry-owner">Raw WebAssembly: Matrix method: <code>Matrix.execute</code></p>

```typescript signature
execute(): Matrix
```

</details>

#### Matrix.free

<a id="entry-presentation_wasm_host_wasm_matrix_free"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_free.26db4cf3b6c5"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
free(): void
```

Public method placement for free.

#### Matrix.hasComplexEntries

<a id="entry-presentation_wasm_api_matrix_has_complex_entries"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_hascomplexentries.e62108844da5"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
hasComplexEntries(): boolean | null
```

Query whether every entry is finite complex.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.matrix_hascomplexentries.fc89a0fa64ba"></a>
<p class="symi-entry-owner">Raw WebAssembly: Matrix method: <code>Matrix.hasComplexEntries</code></p>

```typescript signature
hasComplexEntries(): boolean | undefined
```

</details>

#### Matrix.hasIntegerEntries

<a id="entry-presentation_wasm_api_matrix_has_integer_entries"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_hasintegerentries.2146ac2809b2"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
hasIntegerEntries(): boolean | null
```

Query whether every entry is an integer.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.matrix_hasintegerentries.c6f9d9a6c203"></a>
<p class="symi-entry-owner">Raw WebAssembly: Matrix method: <code>Matrix.hasIntegerEntries</code></p>

```typescript signature
hasIntegerEntries(): boolean | undefined
```

</details>

#### Matrix.hasRealEntries

<a id="entry-presentation_wasm_api_matrix_has_real_entries"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_hasrealentries.b42db7a5a2d1"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
hasRealEntries(): boolean | null
```

Query whether every entry is real.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.matrix_hasrealentries.bfd277113306"></a>
<p class="symi-entry-owner">Raw WebAssembly: Matrix method: <code>Matrix.hasRealEntries</code></p>

```typescript signature
hasRealEntries(): boolean | undefined
```

</details>

#### Matrix.isDiagonalMatrix

<a id="entry-presentation_wasm_api_matrix_is_diagonal_matrix"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_isdiagonalmatrix.415747dbf667"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isDiagonalMatrix(): boolean | null
```

Query whether this matrix is diagonal.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.matrix_isdiagonalmatrix.71327370540b"></a>
<p class="symi-entry-owner">Raw WebAssembly: Matrix method: <code>Matrix.isDiagonalMatrix</code></p>

```typescript signature
isDiagonalMatrix(): boolean | undefined
```

</details>

#### Matrix.isEquality

<a id="entry-presentation_wasm_api_matrix_is_equality"></a>
<a id="placement-placement.wasm.wasm_class.matrix_isequality.df1325fbf5f8"></a>
<p class="symi-entry-owner">Raw WebAssembly: Matrix method</p>

```typescript signature
isEquality(): boolean
```

Always false: a matrix is never an `equal` relation node.

#### Matrix.isFiniteSet

<a id="entry-presentation_wasm_api_matrix_is_finite_set"></a>
<a id="placement-placement.wasm.wasm_class.matrix_isfiniteset.bb89df6933ea"></a>
<p class="symi-entry-owner">Raw WebAssembly: Matrix method</p>

```typescript signature
isFiniteSet(): boolean
```

Always false: a matrix is never a finite set.

#### Matrix.isFullRankMatrix

<a id="entry-presentation_wasm_api_matrix_is_full_rank_matrix"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_isfullrankmatrix.c1348883d7c3"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isFullRankMatrix(): boolean | null
```

Query whether this matrix has full rank.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.matrix_isfullrankmatrix.5bbfcbc6c1e0"></a>
<p class="symi-entry-owner">Raw WebAssembly: Matrix method: <code>Matrix.isFullRankMatrix</code></p>

```typescript signature
isFullRankMatrix(): boolean | undefined
```

</details>

#### Matrix.isHermitianMatrix

<a id="entry-presentation_wasm_api_matrix_is_hermitian_matrix"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_ishermitianmatrix.5c0a1b02c764"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isHermitianMatrix(): boolean | null
```

Query whether this matrix is Hermitian.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.matrix_ishermitianmatrix.1cb5739b20b5"></a>
<p class="symi-entry-owner">Raw WebAssembly: Matrix method: <code>Matrix.isHermitianMatrix</code></p>

```typescript signature
isHermitianMatrix(): boolean | undefined
```

</details>

#### Matrix.isIdentityMatrix

<a id="entry-presentation_wasm_api_matrix_is_identity_matrix"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_isidentitymatrix.cae24290fdfb"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isIdentityMatrix(): boolean | null
```

Query whether this matrix is the identity matrix.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.matrix_isidentitymatrix.9ff399f20293"></a>
<p class="symi-entry-owner">Raw WebAssembly: Matrix method: <code>Matrix.isIdentityMatrix</code></p>

```typescript signature
isIdentityMatrix(): boolean | undefined
```

</details>

#### Matrix.isImageSet

<a id="entry-presentation_wasm_api_matrix_is_image_set"></a>
<a id="placement-placement.wasm.wasm_class.matrix_isimageset.3fe74cafdfc3"></a>
<p class="symi-entry-owner">Raw WebAssembly: Matrix method</p>

```typescript signature
isImageSet(): boolean
```

Always false: a matrix is never an image set.

#### Matrix.isIntegral

<a id="entry-presentation_wasm_api_matrix_is_integral"></a>
<a id="placement-placement.wasm.wasm_class.matrix_isintegral.9e71f8fe0c10"></a>
<p class="symi-entry-owner">Raw WebAssembly: Matrix method</p>

```typescript signature
isIntegral(): boolean
```

Always false: a matrix is never an unevaluated integral node.

#### Matrix.isInvertibleMatrix

<a id="entry-presentation_wasm_api_matrix_is_invertible_matrix"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_isinvertiblematrix.505c014c37f1"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isInvertibleMatrix(): boolean | null
```

Query whether this matrix is invertible.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.matrix_isinvertiblematrix.6352f593e5f7"></a>
<p class="symi-entry-owner">Raw WebAssembly: Matrix method: <code>Matrix.isInvertibleMatrix</code></p>

```typescript signature
isInvertibleMatrix(): boolean | undefined
```

</details>

#### Matrix.isMatrix

<a id="entry-presentation_wasm_api_matrix_is_matrix"></a>
<a id="placement-placement.wasm.wasm_class.matrix_ismatrix.49764165c804"></a>
<p class="symi-entry-owner">Raw WebAssembly: Matrix property</p>

```typescript signature
readonly isMatrix: boolean
```

Always `False` on expressions and `True` on `matrix` objects, so mixed result streams can be discriminated.

#### Matrix.isNormalMatrix

<a id="entry-presentation_wasm_api_matrix_is_normal_matrix"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_isnormalmatrix.98b51d7166e5"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isNormalMatrix(): boolean | null
```

Query whether this matrix is normal.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.matrix_isnormalmatrix.3db937ca961a"></a>
<p class="symi-entry-owner">Raw WebAssembly: Matrix method: <code>Matrix.isNormalMatrix</code></p>

```typescript signature
isNormalMatrix(): boolean | undefined
```

</details>

#### Matrix.isOrthogonalMatrix

<a id="entry-presentation_wasm_api_matrix_is_orthogonal_matrix"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_isorthogonalmatrix.eda747c0fc34"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isOrthogonalMatrix(): boolean | null
```

Query whether this matrix is orthogonal.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.matrix_isorthogonalmatrix.d6a1f86db429"></a>
<p class="symi-entry-owner">Raw WebAssembly: Matrix method: <code>Matrix.isOrthogonalMatrix</code></p>

```typescript signature
isOrthogonalMatrix(): boolean | undefined
```

</details>

#### Matrix.isPositive

<a id="entry-presentation_wasm_api_matrix_is_positive"></a>
<a id="placement-placement.wasm.wasm_class.matrix_ispositive.27aac02052db"></a>
<p class="symi-entry-owner">Raw WebAssembly: Matrix method</p>

```typescript signature
isPositive(): boolean | undefined
```

Always `None`: positivity is a property of the entries, not of the matrix.

#### Matrix.isPositiveDefiniteMatrix

<a id="entry-presentation_wasm_api_matrix_is_positive_definite_matrix"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_ispositivedefinitematrix.e2669501e27d"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isPositiveDefiniteMatrix(): boolean | null
```

Query whether this matrix is positive definite.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.matrix_ispositivedefinitematrix.6bcc9f90fd7c"></a>
<p class="symi-entry-owner">Raw WebAssembly: Matrix method: <code>Matrix.isPositiveDefiniteMatrix</code></p>

```typescript signature
isPositiveDefiniteMatrix(): boolean | undefined
```

</details>

#### Matrix.isPositiveSemidefiniteMatrix

<a id="entry-presentation_wasm_api_matrix_is_positive_semidefinite_matrix"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_ispositivesemidefinitematrix.772c2ae7ee0e"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isPositiveSemidefiniteMatrix(): boolean | null
```

Query whether this matrix is positive semidefinite.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.matrix_ispositivesemidefinitematrix.3397ae9b1bcd"></a>
<p class="symi-entry-owner">Raw WebAssembly: Matrix method: <code>Matrix.isPositiveSemidefiniteMatrix</code></p>

```typescript signature
isPositiveSemidefiniteMatrix(): boolean | undefined
```

</details>

#### Matrix.isReal

<a id="entry-presentation_wasm_api_matrix_is_real"></a>
<a id="placement-placement.wasm.wasm_class.matrix_isreal.6f1011db22cc"></a>
<p class="symi-entry-owner">Raw WebAssembly: Matrix method</p>

```typescript signature
isReal(): boolean | undefined
```

Always `None`: realness is a property of the entries, not of the matrix.

#### Matrix.isSingularMatrix

<a id="entry-presentation_wasm_api_matrix_is_singular_matrix"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_issingularmatrix.873fe293b8c3"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isSingularMatrix(): boolean | null
```

Query whether this matrix is singular.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.matrix_issingularmatrix.06b2135448ac"></a>
<p class="symi-entry-owner">Raw WebAssembly: Matrix method: <code>Matrix.isSingularMatrix</code></p>

```typescript signature
isSingularMatrix(): boolean | undefined
```

</details>

#### Matrix.isSquare

<a id="entry-presentation_wasm_api_matrix_is_square"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_issquare.efcc71c65d6c"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isSquare(): boolean | null
```

Query whether this matrix is square.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.matrix_issquare.24b993354b1d"></a>
<p class="symi-entry-owner">Raw WebAssembly: Matrix method: <code>Matrix.isSquare</code></p>

```typescript signature
isSquare(): boolean | undefined
```

</details>

#### Matrix.isSymmetricMatrix

<a id="entry-presentation_wasm_api_matrix_is_symmetric_matrix"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_issymmetricmatrix.c48f740a1f98"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isSymmetricMatrix(): boolean | null
```

Query whether this matrix is symmetric.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.matrix_issymmetricmatrix.90f4b9ccfa27"></a>
<p class="symi-entry-owner">Raw WebAssembly: Matrix method: <code>Matrix.isSymmetricMatrix</code></p>

```typescript signature
isSymmetricMatrix(): boolean | undefined
```

</details>

#### Matrix.isUnion

<a id="entry-presentation_wasm_api_matrix_is_union"></a>
<a id="placement-placement.wasm.wasm_class.matrix_isunion.7e398215393b"></a>
<p class="symi-entry-owner">Raw WebAssembly: Matrix method</p>

```typescript signature
isUnion(): boolean
```

Always false: a matrix is never a union of sets.

#### Matrix.isUnitaryMatrix

<a id="entry-presentation_wasm_api_matrix_is_unitary_matrix"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_isunitarymatrix.53b189737152"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isUnitaryMatrix(): boolean | null
```

Query whether this matrix is unitary.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.matrix_isunitarymatrix.c6089d647a19"></a>
<p class="symi-entry-owner">Raw WebAssembly: Matrix method: <code>Matrix.isUnitaryMatrix</code></p>

```typescript signature
isUnitaryMatrix(): boolean | undefined
```

</details>

#### Matrix.isZeroMatrix

<a id="entry-presentation_wasm_api_matrix_is_zero_matrix"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_iszeromatrix.311afbe0ef29"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
isZeroMatrix(): boolean | null
```

Query whether this matrix is the zero matrix.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.matrix_iszeromatrix.5f52a26d7e19"></a>
<p class="symi-entry-owner">Raw WebAssembly: Matrix method: <code>Matrix.isZeroMatrix</code></p>

```typescript signature
isZeroMatrix(): boolean | undefined
```

</details>

#### Matrix.lowerUpperDecomposition

<a id="entry-presentation_wasm_api_matrix_lower_upper_decomposition"></a>
<a id="placement-placement.wasm.wasm_class.matrix_lowerupperdecomposition.49bcf14289a6"></a>
<p class="symi-entry-owner">Raw WebAssembly: Matrix method</p>

```typescript signature
lowerUpperDecomposition(): Matrix[]
```

Partial-pivoting LU decomposition returned as `(permutation, lower, upper)` with \(\operatorname{permutation} M = \operatorname{lower}\,\operatorname{upper}\).

#### Matrix.nullspaceBasis

<a id="entry-presentation_wasm_api_matrix_nullspace_basis"></a>
<a id="placement-placement.wasm.wasm_class.matrix_nullspacebasis.3c29893c97be"></a>
<p class="symi-entry-owner">Raw WebAssembly: Matrix method</p>

```typescript signature
nullspaceBasis(): Matrix[]
```

A basis of the kernel, as column matrices; empty list for full column rank.

#### Matrix.rowReduce

<a id="entry-presentation_wasm_api_matrix_row_reduce"></a>
<a id="placement-placement.wasm.wasm_class.matrix_rowreduce.f6176e0e6403"></a>
<p class="symi-entry-owner">Raw WebAssembly: Matrix method</p>

```typescript signature
rowReduce(): Matrix
```

Bareiss row-reduced form (fraction-free; pivots remain on the diagonal).

#### Matrix.scalarMultiply

<a id="entry-presentation_wasm_api_matrix_scalar_multiply"></a>
<a id="placement-placement.wasm.wasm_class.matrix_scalarmultiply.ec2353182aff"></a>
<p class="symi-entry-owner">Raw WebAssembly: Matrix method</p>

```typescript signature
scalarMultiply(scalar: Expression): Matrix
```

Scale every entry by `scalar`.

#### Matrix.toString

<a id="entry-presentation_wasm_host_wasm_matrix_tostring"></a>
<a id="placement-placement.wasm.javascript_facade.matrix_tostring.afeb8a997d5b"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
toString(): string
```

The mathematical text of this object, as a JavaScript string.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.matrix_tostring.78e216ff9504"></a>
<p class="symi-entry-owner">Raw WebAssembly: Matrix method: <code>Matrix.toString</code></p>

```typescript signature
toString(): string
```

</details>

