# Cylindrical algebraic decomposition

A `CylindricalAlgebraicDecomposition` partitions \(\mathbb{R}^n\) into finitely many cells
on each of which every input polynomial has constant sign, with an exact sample
point in each cell. It is built over a list of polynomials
in a declared variable order. By default it uses the **Brown** projection — a
smaller, faster operator than the complete Lazard projection — and verifies its
result is well-oriented, falling back to the complete **Lazard** projection on
any failure, so the output is **always** a correct sign-invariant CAD, never an
orientation decline. It raises only when an input lies outside \(\mathbb{Q}[\text{variables}]\) or
when the exact arithmetic cannot co-reside a sample point's coordinates in one
extension.

Declaring **equational constraints** (indices into the polynomial list, via the
constructor's `equational_constraints` argument) selects the
equational-constraint CAD instead: a smaller decomposition that is sign-invariant
for the non-constraint polynomials **on the constraint variety** (where every
declared constraint is zero), the lever that makes constrained queries tractable.

The accessors below index the **full-dimensional** cells — the cells that
actually partition \(\mathbb{R}^n\) — by an ordinal `0 .. cell_count`. Every sign is decided
exactly by the real-algebraic-number layer; the float sample points are a
numeric *view*, never a decision.

## Construction

### new

Construct the CAD of the polynomials in the given variable order \(x_1,\ldots,x_n\);
projection eliminates \(x_n\) first). With an empty `equational_constraints` list this
is the full sign-invariant CAD (Brown fast path with Lazard fallback); listing
indices into `polynomials` selects the equational-constraint CAD on the variety
where those polynomials vanish. Raises when any polynomial is outside
\(\mathbb{Q}[\text{variables}]\) or the decomposition cannot be formed. **Notes:** the WASM
signature is `new cylindrical_algebraic_decomposition(polynomials: ExpressionLike[],
variables: string[], equational_constraints?: number[])`.

## Accessors

### cell_count

<a id="entry-presentation_python_cad_capability_algebra_cell_count_api_cylindricalalgebraicdecomposition_cell_count"></a>
<a id="placement-placement.python.python_class.cylindricalalgebraicdecomposition_cell_count.ce7f976fc884"></a>
<p class="symi-entry-owner">CylindricalAlgebraicDecomposition method</p>

```python signature
cell_count() -> int
```


The number of full-dimensional cells partitioning \(\mathbb{R}^n\).

### cell_sample_point

<a id="entry-presentation_python_cad_capability_algebra_cell_sample_point_api_cylindricalalgebraicdecomposition_cell_sample_point"></a>
<a id="placement-placement.python.python_class.cylindricalalgebraicdecomposition_cell_sample_point.3dbe888269b7"></a>
<p class="symi-entry-owner">CylindricalAlgebraicDecomposition method</p>

```python signature
cell_sample_point(index: int) -> list[float]
```


The coordinates of the full cell's sample point as floats — a numeric view via
the multi-precision evaluator, not a decision.

### cell_sign_vector

<a id="entry-presentation_python_cad_capability_algebra_cell_sign_vector_api_cylindricalalgebraicdecomposition_cell_sign_vector"></a>
<a id="placement-placement.python.python_class.cylindricalalgebraicdecomposition_cell_sign_vector.ef6a2c072c0f"></a>
<p class="symi-entry-owner">CylindricalAlgebraicDecomposition method</p>

```python signature
cell_sign_vector(index: int) -> list[int]
```


The exact sign (\(-1\), \(0\), or \(+1\)) of each input polynomial on the full cell, in
input order.

### cell_kind

<a id="entry-presentation_python_cad_capability_algebra_cell_kind_api_cylindricalalgebraicdecomposition_cell_kind"></a>
<a id="placement-placement.python.python_class.cylindricalalgebraicdecomposition_cell_kind.afe9210a3869"></a>
<p class="symi-entry-owner">CylindricalAlgebraicDecomposition method</p>

```python signature
cell_kind(index: int) -> str
```


`"section"` or `"sector"` — whether the cell is a root section or an open
interval in its top variable.

### cell_dimension

<a id="entry-presentation_python_cad_capability_algebra_cell_dimension_api_cylindricalalgebraicdecomposition_cell_dimension"></a>
<a id="placement-placement.python.python_class.cylindricalalgebraicdecomposition_cell_dimension.e876ea130017"></a>
<p class="symi-entry-owner">CylindricalAlgebraicDecomposition method</p>

```python signature
cell_dimension(index: int) -> int
```


The geometric dimension of the full cell as a subset of \(\mathbb{R}^n\) (the number of
sector coordinates along its cylindrical stack).

### projection_operator_used

<a id="entry-presentation_python_cad_capability_algebra_projection_operator_used_api_cylindricalalgebraicdecomposition_projection_operator_used"></a>
<a id="placement-placement.python.python_class.cylindricalalgebraicdecomposition_projection_operator_used.fd0ecd398fb8"></a>
<p class="symi-entry-owner">CylindricalAlgebraicDecomposition method</p>

```python signature
projection_operator_used() -> str
```


The projection operator the decomposition was built with:
`"brown"` for the well-oriented fast path, `"lazard"` when the well-orientedness
guard forced the complete fallback, `"equational_constraint"` for an
equational-constraint CAD.

## Example

Decompose the plane along one circle and inspect a cell.

```python
import symi

x = symi.symbol("x")
y = symi.symbol("y")
decomposition = symi.CylindricalAlgebraicDecomposition(
    [x**2 + y**2 - 1], ["x", "y"]
)

print(decomposition.cell_count())
print(decomposition.cell_kind(0))
print(decomposition.cell_sample_point(0))
```

