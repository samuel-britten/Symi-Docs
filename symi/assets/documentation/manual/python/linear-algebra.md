# Linear algebra

Matrix arithmetic and linear algebra operations are exact symbolic operations.

## Arithmetic

Python additionally overloads `+`, `-`, `*` (matrix product) over these
named methods.

### add

### subtract

### multiply

Matrix product; inner dimensions must agree.

### scalar_multiply

<a id="entry-presentation_python_linear_algebra_capability_algebra_scalar_multiply_api_matrix_scalar_multiply"></a>
<a id="placement-placement.python.python_class.matrix_scalar_multiply.8cedfc26e893"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
scalar_multiply(scalar: Any) -> Matrix
```


## Matrix assumptions

Matrix predicates are available as methods on `Matrix`, as constructors on an
explicit `Context`, and as default-context module functions in Python and WASM.
Native Rust uses the corresponding `Session` methods. Query methods return
`True`/`False`/`None` (or the native `TruthValue`), preserving unknown when
the exact symbolic engine cannot decide.

### matrix_shape
Assert or query an exact positive row and column count.

### square_matrix
Assert or query that the matrix has equal row and column counts.

### zero_matrix
Assert or query that all entries are zero.

### identity_matrix
Assert or query the identity-matrix structure.

### diagonal_matrix
Assert or query diagonal structure.

### upper_triangular_matrix
Assert or query upper-triangular structure.

### lower_triangular_matrix
Assert or query lower-triangular structure.

### symmetric_matrix
Assert or query equality with the transpose.

### hermitian_matrix
Assert or query equality with the conjugate transpose.

### orthogonal_matrix
Assert or query the real orthogonality condition.

### unitary_matrix
Assert or query the unitary condition.

### normal_matrix
Assert or query commutation with the conjugate transpose.

### full_rank_matrix
Assert or query full rank.

### invertible_matrix
Assert or query square invertibility.

### singular_matrix
Assert or query square singularity.

### integer_entries
Assert or query integer entries.

### real_entries
Assert or query real entries.

### complex_entries
Assert or query finite complex entries.

### positive_definite_matrix
Assert or query exact positive definiteness.

### positive_semidefinite_matrix
Assert or query exact positive semidefiniteness.

### transpose

<a id="entry-presentation_python_linear_algebra_capability_algebra_transpose_api_matrix_transpose"></a>
<a id="placement-placement.python.python_class.matrix_transpose.4c56e0021d90"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
transpose() -> Matrix
```


### determinant

<a id="entry-presentation_python_linear_algebra_capability_algebra_determinant_api_matrix_determinant"></a>
<a id="placement-placement.python.python_class.matrix_determinant.b887c342bd78"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
determinant() -> Expression
```


Fraction-free (Berkowitz/Bareiss) determinant of a square matrix.

### trace

<a id="entry-presentation_python_linear_algebra_capability_algebra_trace_api_matrix_trace"></a>
<a id="placement-placement.python.python_class.matrix_trace.5f494acccb6f"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
trace() -> Expression
```


### characteristic_polynomial

\(\det(\lambda I - M)\) as a polynomial in the named variable.

### minimal_polynomial

The monic minimal polynomial over the rationals. The matrix must have rational entries.

### eigenvalues

<a id="entry-presentation_python_linear_algebra_capability_algebra_eigenvalues_api_matrix_eigenvalues"></a>
<a id="placement-placement.python.python_class.matrix_eigenvalues.26e263ce0c69"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
eigenvalues() -> list[Expression]
```


Eigenvalues with multiplicity, via the characteristic polynomial and the
root finder; eigenvalues the root finder cannot close remain as
exact first-class `polynomial_root` values.

### eigenvectors

<a id="entry-presentation_python_linear_algebra_capability_algebra_eigenvectors_api_matrix_operations_matrix_eigenvectors"></a>
<a id="placement-placement.python.python_class.matrix_eigenvectors.7d29c9a5d872"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
eigenvectors() -> list[tuple[Expression, list[Matrix]]]
```


For each eigenvalue, a basis of its eigenspace as column matrices.
**Notes:** WASM returns `Eigenpair` objects with `eigenvalue`/`vectors`
getters.

### eigenpair (WASM result class)

### eigenvalue

*Not exposed by the Python bindings. Available as [`UniffiEigenpair.eigenvalue`](/symi/kotlin/linear-algebra#eigenvalue) in Kotlin, [`UniffiEigenpair.eigenvalue`](/symi/swift/linear-algebra#eigenvalue) in Swift, [`api::results::Eigenpair::eigenvalue`](/symi/rust/linear-algebra#eigenvalue) in Rust.*


### vectors

*Not exposed by the Python bindings. Available as [`UniffiEigenpair.vectors`](/symi/kotlin/linear-algebra#vectors) in Kotlin, [`UniffiEigenpair.vectors`](/symi/swift/linear-algebra#vectors) in Swift, [`api::results::Eigenpair::vectors`](/symi/rust/linear-algebra#vectors) in Rust.*


### inverse

<a id="entry-presentation_python_linear_algebra_capability_algebra_inverse_api_matrix_inverse"></a>
<a id="placement-placement.python.python_class.matrix_inverse.95246f393e6d"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
inverse() -> Matrix
```


Inverse via the adjugate; raises on singular input.

### rank

<a id="entry-presentation_python_linear_algebra_capability_algebra_rank_api_matrix_rank"></a>
<a id="placement-placement.python.python_class.matrix_rank.28ffc9a82f94"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
rank() -> int
```


Rank via Bareiss fraction-free elimination.

### row_reduce

<a id="entry-presentation_python_linear_algebra_capability_algebra_row_reduce_api_matrix_row_reduce"></a>
<a id="placement-placement.python.python_class.matrix_row_reduce.57833ebdc403"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
row_reduce() -> Matrix
```


Bareiss row-reduced form (fraction-free; pivots remain on the diagonal).

### nullspace_basis

<a id="entry-presentation_python_linear_algebra_capability_algebra_nullspace_basis_api_matrix_operations_matrix_nullspace_basis"></a>
<a id="placement-placement.python.python_class.matrix_nullspace_basis.68f2a4bc4fb1"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
nullspace_basis() -> list[Matrix]
```


A basis of the kernel, as column matrices; empty list for full column rank.

### adjugate

<a id="entry-presentation_python_linear_algebra_capability_algebra_adjugate_api_matrix_adjugate"></a>
<a id="placement-placement.python.python_class.matrix_adjugate.d708788c7c2c"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
adjugate() -> Matrix
```


The classical adjoint (transpose of the cofactor matrix); satisfies
\(M\operatorname{adj}(M) = \det(M) I\).

### cofactor_matrix

<a id="entry-presentation_python_linear_algebra_capability_algebra_cofactor_matrix_api_matrix_cofactor_matrix"></a>
<a id="placement-placement.python.python_class.matrix_cofactor_matrix.dcf3b762a329"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
cofactor_matrix() -> Matrix
```


### lower_upper_decomposition

<a id="entry-presentation_python_linear_algebra_capability_algebra_lower_upper_decomposition_api_matrix_operations_matrix_lower_upper_decomposition"></a>
<a id="placement-placement.python.python_class.matrix_lower_upper_decomposition.683e9b0dc74c"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
lower_upper_decomposition() -> tuple[Matrix, Matrix, Matrix]
```


Partial-pivoting LU decomposition returned as
`(permutation, lower, upper)` with \(\operatorname{permutation} M = \operatorname{lower}\,\operatorname{upper}\). The
permutation matrix is reconstructed from the pivoting row-swap record.
**Notes:** WASM returns a 3-element array `[permutation, lower, upper]`.

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

<a id="entry-presentation_python_linear_algebra_capability_algebra_matrix_api_matrix"></a>
<a id="placement-placement.python.python_class.matrix.f54d88232d81"></a>
<p class="symi-entry-owner">Matrix constructor</p>

```python signature
Matrix(rows: Any)
```

Build a matrix from ordered rows. Direct Python construction and the facade module function use the shared default context. The raw wasm-bindgen compatibility layer retains `(rows, columns, flat_entries)`; new JavaScript code should use the nested facade form.

### RationalCanonicalForm

<a id="entry-presentation_python_linear_algebra_capability_algebra_rational_canonical_form_api_results_rationalcanonicalform"></a>
<a id="placement-placement.python.python_class.rationalcanonicalform.5ca9682302fa"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class RationalCanonicalForm
```

Returns the certified Frobenius canonical form over the rationals. Its invariant factors are monic and ordered by divisibility, and `similarity` satisfies \(\operatorname{matrix}\,\operatorname{similarity} = \operatorname{similarity}\,\operatorname{canonical\_form}\) exactly.

### __add__

<a id="entry-presentation_python_linear_algebra_capability_algebra_add_unresolved"></a>
<a id="placement-placement.python.python_class.matrix_add.583870cd6186"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
__add__(other: Matrix) -> Matrix
```

Entrywise sum `self + other` of two matrices of the same shape.

### __getattribute__

<a id="entry-presentation_python_linear_algebra_capability_algebra_getattribute_unresolved"></a>
<a id="placement-placement.python.python_class.matrix_getattribute.db356f719d90"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
__getattribute__(name: str) -> Any
```

Reject attribute access on a stale object before delegating to the default lookup.

### __getitem__

<a id="entry-presentation_python_linear_algebra_capability_algebra_getitem_unresolved"></a>
<a id="placement-placement.python.python_class.matrix_getitem.beea523b18e1"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
__getitem__(index: tuple[int, int]) -> Expression
```

The entry at the `(row, column)` index pair.

### __mul__

<a id="entry-presentation_python_linear_algebra_capability_algebra_mul_unresolved"></a>
<a id="placement-placement.python.python_class.matrix_mul.b606f52568d3"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
__mul__(other: Matrix) -> Matrix
```

Matrix product `self * other`, or scaling when `other` is a scalar.

### __repr__

<a id="entry-presentation_python_linear_algebra_capability_algebra_repr_unresolved"></a>
<a id="placement-placement.python.python_class.matrix_repr.bcdc21e31fb5"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
__repr__() -> str
```

The `repr()` text, which reports staleness instead of failing.

### __sub__

<a id="entry-presentation_python_linear_algebra_capability_algebra_sub_unresolved"></a>
<a id="placement-placement.python.python_class.matrix_sub.fda31a9db39d"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
__sub__(other: Matrix) -> Matrix
```

Entrywise difference `self - other` of two matrices of the same shape.

### characteristic_polynomial

<a id="entry-presentation_python_linear_algebra_capability_algebra_characteristic_polynomial_api_matrix_operations_matrix_characteristic_polynomial"></a>
<a id="placement-placement.python.python_class.matrix_characteristic_polynomial.5c65acc6ead0"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
characteristic_polynomial(variable: Any) -> Expression
```

\(\det(\lambda I - M)\) as a polynomial in the named variable.

### characteristic_polynomial

<a id="entry-presentation_python_linear_algebra_capability_algebra_characteristic_polynomial_api_results_rationalcanonicalform_characteristic_polynomial"></a>
<a id="placement-placement.python.python_class.rationalcanonicalform_characteristic_polynomial.826282413414"></a>
<p class="symi-entry-owner">RationalCanonicalForm property</p>

```python signature
characteristic_polynomial: Expression
```

\(\det(\lambda I - M)\) as a polynomial in the named variable.

### minimal_polynomial

<a id="entry-presentation_python_linear_algebra_capability_algebra_minimal_polynomial_api_matrix_operations_matrix_minimal_polynomial"></a>
<a id="placement-placement.python.python_class.matrix_minimal_polynomial.f6b7179bce87"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
minimal_polynomial(variable: Any) -> Expression
```

The monic minimal polynomial over the rationals. The matrix must have rational entries.

### minimal_polynomial

<a id="entry-presentation_python_linear_algebra_capability_algebra_minimal_polynomial_api_results_rationalcanonicalform_minimal_polynomial"></a>
<a id="placement-placement.python.python_class.rationalcanonicalform_minimal_polynomial.cb3f7ef16a61"></a>
<p class="symi-entry-owner">RationalCanonicalForm property</p>

```python signature
minimal_polynomial: Expression
```

The monic minimal polynomial over the rationals. The matrix must have rational entries.

