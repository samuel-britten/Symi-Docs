# Linear algebra

Matrix arithmetic and linear algebra operations are exact symbolic operations.

## Arithmetic

Python additionally overloads `+`, `-`, `*` (matrix product) over these
named methods.

### add

<a id="entry-presentation_python_api_matrix_add"></a>
<a id="placement-placement.python.python_class.matrix_add.ab8ce536842a"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
add(other: Matrix) -> Matrix
```

Entrywise sum of two matrices of the same shape.

### subtract

<a id="entry-presentation_python_api_matrix_subtract"></a>
<a id="placement-placement.python.python_class.matrix_subtract.689f072cd263"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
subtract(other: Matrix) -> Matrix
```

Entrywise difference of two matrices of the same shape.

### multiply

Matrix product; inner dimensions must agree.

<a id="entry-presentation_python_api_matrix_multiply"></a>
<a id="placement-placement.python.python_class.matrix_multiply.b71d7e16636b"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
multiply(other: Matrix) -> Matrix
```

Matrix product; inner dimensions must agree.

### scalar_multiply

<a id="entry-presentation_python_api_matrix_scalar_multiply"></a>
<a id="placement-placement.python.python_class.matrix_scalar_multiply.8cedfc26e893"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
scalar_multiply(scalar: Any) -> Matrix
```

Scale every entry by `scalar`.

## Matrix assumptions

Matrix predicates are available as methods on `Matrix`, as constructors on an
explicit `Context`, and as default-context module functions in Python and WASM.
Native Rust uses the corresponding `Session` methods. Query methods return
`True`/`False`/`None` (or the native `TruthValue`), preserving unknown when
the exact symbolic engine cannot decide.

### matrix_shape

<a id="entry-presentation_python_api_session_matrix_shape"></a>
<a id="placement-placement.python.python_module.module_matrix_shape.169fd16e9013"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
matrix_shape(
    subject: Matrix,
    rows: int,
    columns: int,
) -> AssumptionProposition
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_matrix_shape.1d55b535ae28"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.matrix_shape</code></p>

```python signature
matrix_shape(
    subject: Matrix,
    rows: int,
    columns: int,
) -> AssumptionProposition
```

</details>

Assert or query an exact positive row and column count.

### square_matrix

<a id="entry-presentation_python_api_session_square_matrix"></a>
<a id="placement-placement.python.python_module.module_square_matrix.10c4c7e8efa1"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
square_matrix(subject: Matrix) -> AssumptionProposition
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_square_matrix.7e18aef128a6"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.square_matrix</code></p>

```python signature
square_matrix(subject: Matrix) -> AssumptionProposition
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

<a id="entry-presentation_python_api_session_upper_triangular_matrix"></a>
<a id="placement-placement.python.python_module.module_upper_triangular_matrix.fc245841334f"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
upper_triangular_matrix(subject: Matrix) -> AssumptionProposition
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_upper_triangular_matrix.d74ef8f77475"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.upper_triangular_matrix</code></p>

```python signature
upper_triangular_matrix(subject: Matrix) -> AssumptionProposition
```

</details>

Assert or query upper-triangular structure.

### lower_triangular_matrix

<a id="entry-presentation_python_api_session_lower_triangular_matrix"></a>
<a id="placement-placement.python.python_module.module_lower_triangular_matrix.f7364e2611f4"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
lower_triangular_matrix(subject: Matrix) -> AssumptionProposition
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_lower_triangular_matrix.320e7251eef5"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.lower_triangular_matrix</code></p>

```python signature
lower_triangular_matrix(subject: Matrix) -> AssumptionProposition
```

</details>

Assert or query lower-triangular structure.

### symmetric_matrix

<a id="entry-presentation_python_api_session_symmetric_matrix"></a>
<a id="placement-placement.python.python_module.module_symmetric_matrix.9e1bebd0ea64"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
symmetric_matrix(subject: Matrix) -> AssumptionProposition
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_symmetric_matrix.5f7f01de4d22"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.symmetric_matrix</code></p>

```python signature
symmetric_matrix(subject: Matrix) -> AssumptionProposition
```

</details>

Assert or query equality with the transpose.

### hermitian_matrix

<a id="entry-presentation_python_api_session_hermitian_matrix"></a>
<a id="placement-placement.python.python_module.module_hermitian_matrix.9fe4c0c586b6"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
hermitian_matrix(subject: Matrix) -> AssumptionProposition
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_hermitian_matrix.b735ad83a78d"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.hermitian_matrix</code></p>

```python signature
hermitian_matrix(subject: Matrix) -> AssumptionProposition
```

</details>

Assert or query equality with the conjugate transpose.

### orthogonal_matrix

<a id="entry-presentation_python_api_session_orthogonal_matrix"></a>
<a id="placement-placement.python.python_module.module_orthogonal_matrix.36bf053e5933"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
orthogonal_matrix(subject: Matrix) -> AssumptionProposition
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_orthogonal_matrix.2380b9db6cd3"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.orthogonal_matrix</code></p>

```python signature
orthogonal_matrix(subject: Matrix) -> AssumptionProposition
```

</details>

Assert or query the real orthogonality condition.

### unitary_matrix

<a id="entry-presentation_python_api_session_unitary_matrix"></a>
<a id="placement-placement.python.python_module.module_unitary_matrix.1e1e98f0779f"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
unitary_matrix(subject: Matrix) -> AssumptionProposition
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_unitary_matrix.0c1eaabf71ca"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.unitary_matrix</code></p>

```python signature
unitary_matrix(subject: Matrix) -> AssumptionProposition
```

</details>

Assert or query the unitary condition.

### normal_matrix

<a id="entry-presentation_python_api_session_normal_matrix"></a>
<a id="placement-placement.python.python_module.module_normal_matrix.b8fd28bfb4a1"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
normal_matrix(subject: Matrix) -> AssumptionProposition
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_normal_matrix.57490eb83d5d"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.normal_matrix</code></p>

```python signature
normal_matrix(subject: Matrix) -> AssumptionProposition
```

</details>

Assert or query commutation with the conjugate transpose.

### full_rank_matrix

<a id="entry-presentation_python_api_session_full_rank_matrix"></a>
<a id="placement-placement.python.python_module.module_full_rank_matrix.bca25f7ee25a"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
full_rank_matrix(subject: Matrix) -> AssumptionProposition
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_full_rank_matrix.927198cb7f5e"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.full_rank_matrix</code></p>

```python signature
full_rank_matrix(subject: Matrix) -> AssumptionProposition
```

</details>

Assert or query full rank.

### invertible_matrix

<a id="entry-presentation_python_api_session_invertible_matrix"></a>
<a id="placement-placement.python.python_module.module_invertible_matrix.4d17a3ac74e2"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
invertible_matrix(subject: Matrix) -> AssumptionProposition
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_invertible_matrix.ad8b55dfcfb8"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.invertible_matrix</code></p>

```python signature
invertible_matrix(subject: Matrix) -> AssumptionProposition
```

</details>

Assert or query square invertibility.

### singular_matrix

<a id="entry-presentation_python_api_session_singular_matrix"></a>
<a id="placement-placement.python.python_module.module_singular_matrix.6e5632e57c3f"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
singular_matrix(subject: Matrix) -> AssumptionProposition
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_singular_matrix.4b9069dcd876"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.singular_matrix</code></p>

```python signature
singular_matrix(subject: Matrix) -> AssumptionProposition
```

</details>

Assert or query square singularity.

### integer_entries

<a id="entry-presentation_python_api_session_integer_entries"></a>
<a id="placement-placement.python.python_module.module_integer_entries.d6ab920262bc"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
integer_entries(subject: Matrix) -> AssumptionProposition
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_integer_entries.f379e76f46af"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.integer_entries</code></p>

```python signature
integer_entries(subject: Matrix) -> AssumptionProposition
```

</details>

Assert or query integer entries.

### real_entries

<a id="entry-presentation_python_api_session_real_entries"></a>
<a id="placement-placement.python.python_module.module_real_entries.1b5d05fc8a93"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
real_entries(subject: Matrix) -> AssumptionProposition
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_real_entries.844c105ddebe"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.real_entries</code></p>

```python signature
real_entries(subject: Matrix) -> AssumptionProposition
```

</details>

Assert or query real entries.

### complex_entries

<a id="entry-presentation_python_api_session_complex_entries"></a>
<a id="placement-placement.python.python_module.module_complex_entries.ad74d94f6a7e"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
complex_entries(subject: Matrix) -> AssumptionProposition
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_complex_entries.5f2958b71aba"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.complex_entries</code></p>

```python signature
complex_entries(subject: Matrix) -> AssumptionProposition
```

</details>

Assert or query finite complex entries.

### positive_definite_matrix

<a id="entry-presentation_python_api_session_positive_definite_matrix"></a>
<a id="placement-placement.python.python_module.module_positive_definite_matrix.5a24f83b14d4"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
positive_definite_matrix(subject: Matrix) -> AssumptionProposition
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_positive_definite_matrix.a998f31168b7"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.positive_definite_matrix</code></p>

```python signature
positive_definite_matrix(subject: Matrix) -> AssumptionProposition
```

</details>

Assert or query exact positive definiteness.

### positive_semidefinite_matrix

<a id="entry-presentation_python_api_session_positive_semidefinite_matrix"></a>
<a id="placement-placement.python.python_module.module_positive_semidefinite_matrix.4cc39df663df"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
positive_semidefinite_matrix(subject: Matrix) -> AssumptionProposition
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_positive_semidefinite_matrix.1f8443e9fb0f"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.positive_semidefinite_matrix</code></p>

```python signature
positive_semidefinite_matrix(subject: Matrix) -> AssumptionProposition
```

</details>

Assert or query exact positive semidefiniteness.

### transpose

<a id="entry-presentation_python_api_matrix_transpose"></a>
<a id="placement-placement.python.python_class.matrix_transpose.4c56e0021d90"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
transpose() -> Matrix
```

The transpose, with rows and columns exchanged.

### determinant

Fraction-free (Berkowitz/Bareiss) determinant of a square matrix.

<a id="entry-presentation_python_api_matrix_determinant"></a>
<a id="placement-placement.python.python_class.matrix_determinant.b887c342bd78"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
determinant() -> Expression
```

Fraction-free (Berkowitz/Bareiss) determinant of a square matrix.

### trace

<a id="entry-presentation_python_api_matrix_trace"></a>
<a id="placement-placement.python.python_class.matrix_trace.5f494acccb6f"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
trace() -> Expression
```

Sum of the diagonal entries of a square matrix.

### characteristic_polynomial

<a id="entry-presentation_python_api_matrix_characteristic_polynomial"></a>
<a id="placement-placement.python.python_class.matrix_characteristic_polynomial.5c65acc6ead0"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
characteristic_polynomial(variable: Any) -> Expression
```


\(\det(\lambda I - M)\) as a polynomial in the named variable.

### minimal_polynomial

<a id="entry-presentation_python_api_matrix_minimal_polynomial"></a>
<a id="placement-placement.python.python_class.matrix_minimal_polynomial.f6b7179bce87"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
minimal_polynomial(variable: Any) -> Expression
```


The monic minimal polynomial over the rationals. The matrix must have rational entries.

### eigenvalues

Eigenvalues with multiplicity, via the characteristic polynomial and the
root finder; eigenvalues the root finder cannot close remain as
exact first-class `polynomial_root` values.

<a id="entry-presentation_python_api_matrix_eigenvalues"></a>
<a id="placement-placement.python.python_class.matrix_eigenvalues.26e263ce0c69"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
eigenvalues() -> list[Expression]
```

Eigenvalues with multiplicity, via the characteristic polynomial and the root finder; eigenvalues the root finder cannot close remain as exact first-class `polynomial_root` values.

### eigenvectors

For each eigenvalue, a basis of its eigenspace as column matrices.
**Notes:** WASM returns `Eigenpair` objects with `eigenvalue`/`vectors`
getters.

<a id="entry-presentation_python_api_matrix_eigenvectors"></a>
<a id="placement-placement.python.python_class.matrix_eigenvectors.7d29c9a5d872"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
eigenvectors() -> list[tuple[Expression, list[Matrix]]]
```

For each eigenvalue, a basis of its eigenspace as column matrices. Notes: WASM returns `eigenpair` objects with `eigenvalue`/`vectors` getters.

### eigenpair (WASM result class)

### eigenvalue

*Not exposed by the Python bindings. Available as [`UniffiEigenpair.eigenvalue`](/symi/kotlin/linear-algebra#eigenvalue) in Kotlin, [`UniffiEigenpair.eigenvalue`](/symi/swift/linear-algebra#eigenvalue) in Swift, [`api::results::Eigenpair::eigenvalue`](/symi/rust/linear-algebra#eigenvalue) in Rust.*


### vectors

*Not exposed by the Python bindings. Available as [`UniffiEigenpair.vectors`](/symi/kotlin/linear-algebra#vectors) in Kotlin, [`UniffiEigenpair.vectors`](/symi/swift/linear-algebra#vectors) in Swift, [`api::results::Eigenpair::vectors`](/symi/rust/linear-algebra#vectors) in Rust.*


### inverse

Inverse via the adjugate; raises on singular input.

<a id="entry-presentation_python_api_matrix_inverse"></a>
<a id="placement-placement.python.python_class.matrix_inverse.95246f393e6d"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
inverse() -> Matrix
```

Inverse via the adjugate; raises on singular input.

### rank

<a id="entry-presentation_python_api_matrix_rank"></a>
<a id="placement-placement.python.python_class.matrix_rank.28ffc9a82f94"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
rank() -> int
```


Rank via Bareiss fraction-free elimination.

### row_reduce

Bareiss row-reduced form (fraction-free; pivots remain on the diagonal).

<a id="entry-presentation_python_api_matrix_row_reduce"></a>
<a id="placement-placement.python.python_class.matrix_row_reduce.57833ebdc403"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
row_reduce() -> Matrix
```

Bareiss row-reduced form (fraction-free; pivots remain on the diagonal).

### nullspace_basis

A basis of the kernel, as column matrices; empty list for full column rank.

<a id="entry-presentation_python_api_matrix_nullspace_basis"></a>
<a id="placement-placement.python.python_class.matrix_nullspace_basis.68f2a4bc4fb1"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
nullspace_basis() -> list[Matrix]
```

A basis of the kernel, as column matrices; empty list for full column rank.

### adjugate

The classical adjoint (transpose of the cofactor matrix); satisfies
\(M\operatorname{adj}(M) = \det(M) I\).

<a id="entry-presentation_python_api_matrix_adjugate"></a>
<a id="placement-placement.python.python_class.matrix_adjugate.d708788c7c2c"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
adjugate() -> Matrix
```

The classical adjoint (transpose of the cofactor matrix); satisfies \(M\operatorname{adj}(M) = \det(M) I\).

### cofactor_matrix

<a id="entry-presentation_python_api_matrix_cofactor_matrix"></a>
<a id="placement-placement.python.python_class.matrix_cofactor_matrix.dcf3b762a329"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
cofactor_matrix() -> Matrix
```

The matrix of cofactors, whose transpose is the adjugate.

### lower_upper_decomposition

Partial-pivoting LU decomposition returned as
`(permutation, lower, upper)` with \(\operatorname{permutation} M = \operatorname{lower}\,\operatorname{upper}\). The
permutation matrix is reconstructed from the pivoting row-swap record.
**Notes:** WASM returns a 3-element array `[permutation, lower, upper]`.

<a id="entry-presentation_python_api_matrix_lower_upper_decomposition"></a>
<a id="placement-placement.python.python_class.matrix_lower_upper_decomposition.683e9b0dc74c"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
lower_upper_decomposition() -> tuple[Matrix, Matrix, Matrix]
```

Partial-pivoting LU decomposition returned as `(permutation, lower, upper)` with \(\operatorname{permutation} M = \operatorname{lower}\,\operatorname{upper}\).

## Example

Exact matrix arithmetic and spectral data.

```python
import symi

matrix = symi.Matrix([[1, 2], [3, 4]])

print(matrix.determinant())
print(matrix.trace())
print(matrix.transpose())
print(matrix.inverse())
print(matrix.eigenvalues())
```


## Additional API

### Matrix

<a id="entry-presentation_python_api_matrix"></a>
<a id="placement-placement.python.python_class.matrix.f54d88232d81"></a>
<p class="symi-entry-owner">Matrix constructor</p>

```python signature
Matrix(rows: Any)
```

Build a matrix from ordered rows. Direct Python construction and the facade module function use the shared default context. The raw wasm-bindgen compatibility layer retains `(rows, columns, flat_entries)`; new JavaScript code should use the nested facade form.

#### Matrix.__add__

<a id="entry-presentation_python_host_python_matrix_add"></a>
<a id="placement-placement.python.python_class.matrix_add.583870cd6186"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
__add__(other: Matrix) -> Matrix
```

Entrywise sum `self + other` of two matrices of the same shape.

#### Matrix.__getattribute__

<a id="entry-presentation_python_host_python_matrix_getattribute"></a>
<a id="placement-placement.python.python_class.matrix_getattribute.db356f719d90"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
__getattribute__(name: str) -> Any
```

Reject attribute access on a stale object before delegating to the default lookup.

#### Matrix.__getitem__

<a id="entry-presentation_python_host_python_matrix_getitem"></a>
<a id="placement-placement.python.python_class.matrix_getitem.beea523b18e1"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
__getitem__(index: tuple[int, int]) -> Expression
```

The entry at the `(row, column)` index pair.

#### Matrix.__mul__

<a id="entry-presentation_python_host_python_matrix_mul"></a>
<a id="placement-placement.python.python_class.matrix_mul.b606f52568d3"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
__mul__(other: Matrix) -> Matrix
```

Matrix product `self * other`, or scaling when `other` is a scalar.

#### Matrix.__repr__

<a id="entry-presentation_python_host_python_matrix_repr"></a>
<a id="placement-placement.python.python_class.matrix_repr.bcdc21e31fb5"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
__repr__() -> str
```

The `repr()` text, which reports staleness instead of failing.

#### Matrix.__sub__

<a id="entry-presentation_python_host_python_matrix_sub"></a>
<a id="placement-placement.python.python_class.matrix_sub.fda31a9db39d"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
__sub__(other: Matrix) -> Matrix
```

Entrywise difference `self - other` of two matrices of the same shape.

#### Matrix.execute

<a id="entry-presentation_python_api_matrix_execute"></a>
<a id="placement-placement.python.python_class.matrix_execute.5773d9583bc1"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
execute() -> Matrix
```

Re-dispatch every unevaluated node (integral, derivative, summation, transform, ODE/recurrence placeholder) in the expression; useful after substitution has changed the inputs.

#### Matrix.has_complex_entries

<a id="entry-presentation_python_api_matrix_has_complex_entries"></a>
<a id="placement-placement.python.python_class.matrix_has_complex_entries.e69d7e187678"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
has_complex_entries() -> Optional[bool]
```

Query whether every entry is finite complex.

#### Matrix.has_integer_entries

<a id="entry-presentation_python_api_matrix_has_integer_entries"></a>
<a id="placement-placement.python.python_class.matrix_has_integer_entries.3fe8e758b6ff"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
has_integer_entries() -> Optional[bool]
```

Query whether every entry is an integer.

#### Matrix.has_real_entries

<a id="entry-presentation_python_api_matrix_has_real_entries"></a>
<a id="placement-placement.python.python_class.matrix_has_real_entries.5b15ebbe5ce6"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
has_real_entries() -> Optional[bool]
```

Query whether every entry is real.

#### Matrix.is_diagonal_matrix

<a id="entry-presentation_python_api_matrix_is_diagonal_matrix"></a>
<a id="placement-placement.python.python_class.matrix_is_diagonal_matrix.5335fe934256"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
is_diagonal_matrix() -> Optional[bool]
```

Query whether this matrix is diagonal.

#### Matrix.is_equality

<a id="entry-presentation_python_api_matrix_is_equality"></a>
<a id="placement-placement.python.python_class.matrix_is_equality.fef51ea43875"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
is_equality() -> bool
```

Always false: a matrix is never an `equal` relation node.

#### Matrix.is_finite_set

<a id="entry-presentation_python_api_matrix_is_finite_set"></a>
<a id="placement-placement.python.python_class.matrix_is_finite_set.7dc9734ea9f1"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
is_finite_set() -> bool
```

Always false: a matrix is never a finite set.

#### Matrix.is_full_rank_matrix

<a id="entry-presentation_python_api_matrix_is_full_rank_matrix"></a>
<a id="placement-placement.python.python_class.matrix_is_full_rank_matrix.26e1c2964606"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
is_full_rank_matrix() -> Optional[bool]
```

Query whether this matrix has full rank.

#### Matrix.is_hermitian_matrix

<a id="entry-presentation_python_api_matrix_is_hermitian_matrix"></a>
<a id="placement-placement.python.python_class.matrix_is_hermitian_matrix.0f20491b19a5"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
is_hermitian_matrix() -> Optional[bool]
```

Query whether this matrix is Hermitian.

#### Matrix.is_identity_matrix

<a id="entry-presentation_python_api_matrix_is_identity_matrix"></a>
<a id="placement-placement.python.python_class.matrix_is_identity_matrix.fe1d1afefd5e"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
is_identity_matrix() -> Optional[bool]
```

Query whether this matrix is the identity matrix.

#### Matrix.is_image_set

<a id="entry-presentation_python_api_matrix_is_image_set"></a>
<a id="placement-placement.python.python_class.matrix_is_image_set.32d92ebd96fa"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
is_image_set() -> bool
```

Always false: a matrix is never an image set.

#### Matrix.is_integral

<a id="entry-presentation_python_api_matrix_is_integral"></a>
<a id="placement-placement.python.python_class.matrix_is_integral.2aa435a6ae20"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
is_integral() -> bool
```

Always false: a matrix is never an unevaluated integral node.

#### Matrix.is_invertible_matrix

<a id="entry-presentation_python_api_matrix_is_invertible_matrix"></a>
<a id="placement-placement.python.python_class.matrix_is_invertible_matrix.5784807b0f4c"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
is_invertible_matrix() -> Optional[bool]
```

Query whether this matrix is invertible.

#### Matrix.is_matrix

<a id="entry-presentation_python_api_matrix_is_matrix"></a>
<a id="placement-placement.python.python_class.matrix_is_matrix.0636baf5cb88"></a>
<p class="symi-entry-owner">Matrix property</p>

```python signature
is_matrix: bool
```

Always `False` on expressions and `True` on `matrix` objects, so mixed result streams can be discriminated.

#### Matrix.is_normal_matrix

<a id="entry-presentation_python_api_matrix_is_normal_matrix"></a>
<a id="placement-placement.python.python_class.matrix_is_normal_matrix.d4f3f3ee2a5b"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
is_normal_matrix() -> Optional[bool]
```

Query whether this matrix is normal.

#### Matrix.is_orthogonal_matrix

<a id="entry-presentation_python_api_matrix_is_orthogonal_matrix"></a>
<a id="placement-placement.python.python_class.matrix_is_orthogonal_matrix.f38fd03d9581"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
is_orthogonal_matrix() -> Optional[bool]
```

Query whether this matrix is orthogonal.

#### Matrix.is_positive

<a id="entry-presentation_python_api_matrix_is_positive"></a>
<a id="placement-placement.python.python_class.matrix_is_positive.cb6bef131b19"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
is_positive() -> Optional[bool]
```

Always `None`: positivity is a property of the entries, not of the matrix.

#### Matrix.is_positive_definite_matrix

<a id="entry-presentation_python_api_matrix_is_positive_definite_matrix"></a>
<a id="placement-placement.python.python_class.matrix_is_positive_definite_matrix.c44e8e2495dc"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
is_positive_definite_matrix() -> Optional[bool]
```

Query whether this matrix is positive definite.

#### Matrix.is_positive_semidefinite_matrix

<a id="entry-presentation_python_api_matrix_is_positive_semidefinite_matrix"></a>
<a id="placement-placement.python.python_class.matrix_is_positive_semidefinite_matrix.f902a6aeabc1"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
is_positive_semidefinite_matrix() -> Optional[bool]
```

Query whether this matrix is positive semidefinite.

#### Matrix.is_real

<a id="entry-presentation_python_api_matrix_is_real"></a>
<a id="placement-placement.python.python_class.matrix_is_real.dc7c5bc1210e"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
is_real() -> Optional[bool]
```

Always `None`: realness is a property of the entries, not of the matrix.

#### Matrix.is_singular_matrix

<a id="entry-presentation_python_api_matrix_is_singular_matrix"></a>
<a id="placement-placement.python.python_class.matrix_is_singular_matrix.a489349163d9"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
is_singular_matrix() -> Optional[bool]
```

Query whether this matrix is singular.

#### Matrix.is_square

<a id="entry-presentation_python_api_matrix_is_square"></a>
<a id="placement-placement.python.python_class.matrix_is_square.6f63c0a768ab"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
is_square() -> Optional[bool]
```

Query whether this matrix is square.

#### Matrix.is_stale

<a id="entry-presentation_python_api_matrix_is_stale"></a>
<a id="placement-placement.python.python_class.matrix_is_stale.35f51b1ba5a7"></a>
<p class="symi-entry-owner">Matrix property</p>

```python signature
is_stale: bool
```

Reports whether resetting the owning context invalidated the expression. All other operations reject a stale receiver with an actionable error.

#### Matrix.is_symmetric_matrix

<a id="entry-presentation_python_api_matrix_is_symmetric_matrix"></a>
<a id="placement-placement.python.python_class.matrix_is_symmetric_matrix.5a6e2021d34f"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
is_symmetric_matrix() -> Optional[bool]
```

Query whether this matrix is symmetric.

#### Matrix.is_union

<a id="entry-presentation_python_api_matrix_is_union"></a>
<a id="placement-placement.python.python_class.matrix_is_union.1e6b493d466b"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
is_union() -> bool
```

Always false: a matrix is never a union of sets.

#### Matrix.is_unitary_matrix

<a id="entry-presentation_python_api_matrix_is_unitary_matrix"></a>
<a id="placement-placement.python.python_class.matrix_is_unitary_matrix.25b4cc412898"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
is_unitary_matrix() -> Optional[bool]
```

Query whether this matrix is unitary.

#### Matrix.is_zero_matrix

<a id="entry-presentation_python_api_matrix_is_zero_matrix"></a>
<a id="placement-placement.python.python_class.matrix_is_zero_matrix.d4bf84b7ef84"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
is_zero_matrix() -> Optional[bool]
```

Query whether this matrix is the zero matrix.

