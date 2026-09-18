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

<a id="placement-placement.python.python_class.matrix_scalar_multiply.8cedfc26e893"></a>
`Matrix.scalar_multiply(scalar)`


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

<a id="placement-placement.python.python_class.matrix_transpose.4c56e0021d90"></a>
`Matrix.transpose()`


### determinant

<a id="placement-placement.python.python_class.matrix_determinant.b887c342bd78"></a>
`Matrix.determinant()`


Fraction-free (Berkowitz/Bareiss) determinant of a square matrix.

### trace

<a id="placement-placement.python.python_class.matrix_trace.5f494acccb6f"></a>
`Matrix.trace()`


### characteristic_polynomial

<a id="placement-placement.python.python_class.matrix_characteristic_polynomial.5c65acc6ead0"></a>
`Matrix.characteristic_polynomial(variable)`

<a id="placement-placement.python.python_class.rationalcanonicalform_characteristic_polynomial.826282413414"></a>
`RationalCanonicalForm.characteristic_polynomial`


\(\det(\lambda I - M)\) as a polynomial in the named variable.

### minimal_polynomial

<a id="placement-placement.python.python_class.matrix_minimal_polynomial.f6b7179bce87"></a>
`Matrix.minimal_polynomial(variable)`

<a id="placement-placement.python.python_class.rationalcanonicalform_minimal_polynomial.cb3f7ef16a61"></a>
`RationalCanonicalForm.minimal_polynomial`


The monic minimal polynomial over the rationals. The matrix must have rational entries.

### eigenvalues

<a id="placement-placement.python.python_class.matrix_eigenvalues.26e263ce0c69"></a>
`Matrix.eigenvalues()`


Eigenvalues with multiplicity, via the characteristic polynomial and the
root finder; eigenvalues the root finder cannot close remain as
exact first-class `polynomial_root` values.

### eigenvectors

<a id="placement-placement.python.python_class.matrix_eigenvectors.7d29c9a5d872"></a>
`Matrix.eigenvectors()`


For each eigenvalue, a basis of its eigenspace as column matrices.
**Notes:** WASM returns `Eigenpair` objects with `eigenvalue`/`vectors`
getters.

### eigenpair (WASM result class)

### eigenvalue

*Not exposed by the Python bindings. Available as [`UniffiEigenpair.eigenvalue`](/symi/kotlin/linear-algebra#eigenvalue) in Kotlin, [`UniffiEigenpair.eigenvalue`](/symi/swift/linear-algebra#eigenvalue) in Swift, [`api::results::Eigenpair::eigenvalue`](/symi/rust/linear-algebra#eigenvalue) in Rust.*


### vectors

*Not exposed by the Python bindings. Available as [`UniffiEigenpair.vectors`](/symi/kotlin/linear-algebra#vectors) in Kotlin, [`UniffiEigenpair.vectors`](/symi/swift/linear-algebra#vectors) in Swift, [`api::results::Eigenpair::vectors`](/symi/rust/linear-algebra#vectors) in Rust.*


### inverse

<a id="placement-placement.python.python_class.matrix_inverse.95246f393e6d"></a>
`Matrix.inverse()`


Inverse via the adjugate; raises on singular input.

### rank

<a id="placement-placement.python.python_class.matrix_rank.28ffc9a82f94"></a>
`Matrix.rank()`


Rank via Bareiss fraction-free elimination.

### row_reduce

<a id="placement-placement.python.python_class.matrix_row_reduce.57833ebdc403"></a>
`Matrix.row_reduce()`


Bareiss row-reduced form (fraction-free; pivots remain on the diagonal).

### nullspace_basis

<a id="placement-placement.python.python_class.matrix_nullspace_basis.68f2a4bc4fb1"></a>
`Matrix.nullspace_basis()`


A basis of the kernel, as column matrices; empty list for full column rank.

### adjugate

<a id="placement-placement.python.python_class.matrix_adjugate.d708788c7c2c"></a>
`Matrix.adjugate()`


The classical adjoint (transpose of the cofactor matrix); satisfies
\(M\operatorname{adj}(M) = \det(M) I\).

### cofactor_matrix

<a id="placement-placement.python.python_class.matrix_cofactor_matrix.dcf3b762a329"></a>
`Matrix.cofactor_matrix()`


### lower_upper_decomposition

<a id="placement-placement.python.python_class.matrix_lower_upper_decomposition.683e9b0dc74c"></a>
`Matrix.lower_upper_decomposition()`


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

<a id="placement-placement.python.python_class.matrix.f54d88232d81"></a>
### Matrix

`Matrix(rows)`

Returns `matrix`.

<a id="placement-placement.python.python_class.matrix_add.583870cd6186"></a>
### Matrix.__add__

`Matrix.__add__(other)`

Returns `matrix`.

<a id="placement-placement.python.python_class.matrix_getattribute.db356f719d90"></a>
### Matrix.__getattribute__

`Matrix.__getattribute__(receiver, name)`

Returns `PyAny`.

<a id="placement-placement.python.python_class.matrix_getitem.beea523b18e1"></a>
### Matrix.__getitem__

`Matrix.__getitem__(index)`

Returns `expression`.

<a id="placement-placement.python.python_class.matrix_mul.b606f52568d3"></a>
### Matrix.__mul__

`Matrix.__mul__(other)`

Returns `matrix`.

<a id="placement-placement.python.python_class.matrix_repr.bcdc21e31fb5"></a>
### Matrix.__repr__

`Matrix.__repr__()`

Returns `str`.

<a id="placement-placement.python.python_class.matrix_sub.fda31a9db39d"></a>
### Matrix.__sub__

`Matrix.__sub__(other)`

Returns `matrix`.

<a id="placement-placement.python.python_class.rationalcanonicalform.5ca9682302fa"></a>
### RationalCanonicalForm

`class symi.RationalCanonicalForm`

Returns `rational_canonical_form`.

