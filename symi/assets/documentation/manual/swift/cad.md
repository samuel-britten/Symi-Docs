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

<a id="entry-presentation_swift_cad_capability_algebra_cell_count_api_cylindricalalgebraicdecomposition_cell_count"></a>
<a id="placement-placement.swift.swift_object.unifficylindricalalgebraicdecomposition_cellcount.a9de1a02311a"></a>
<p class="symi-entry-owner">UniffiCylindricalAlgebraicDecomposition method</p>

```swift signature
func cellCount() -> UInt64
```


The number of full-dimensional cells partitioning \(\mathbb{R}^n\).

### cell_sample_point

<a id="entry-presentation_swift_cad_capability_algebra_cell_sample_point_api_cylindricalalgebraicdecomposition_cell_sample_point"></a>
<a id="placement-placement.swift.swift_object.unifficylindricalalgebraicdecomposition_cellsamplepoint.424e7d4d53a3"></a>
<p class="symi-entry-owner">UniffiCylindricalAlgebraicDecomposition method</p>

```swift signature
func cellSamplePoint(index: UInt64) -> [Double]
```


The coordinates of the full cell's sample point as floats — a numeric view via
the multi-precision evaluator, not a decision.

### cell_sign_vector

<a id="entry-presentation_swift_cad_capability_algebra_cell_sign_vector_api_cylindricalalgebraicdecomposition_cell_sign_vector"></a>
<a id="placement-placement.swift.swift_object.unifficylindricalalgebraicdecomposition_cellsignvector.885efaa61bef"></a>
<p class="symi-entry-owner">UniffiCylindricalAlgebraicDecomposition method</p>

```swift signature
func cellSignVector(index: UInt64) -> [Int64]
```


The exact sign (\(-1\), \(0\), or \(+1\)) of each input polynomial on the full cell, in
input order.

### cell_kind

<a id="entry-presentation_swift_cad_capability_algebra_cell_kind_api_cylindricalalgebraicdecomposition_cell_kind"></a>
<a id="placement-placement.swift.swift_object.unifficylindricalalgebraicdecomposition_cellkind.1c34be926a47"></a>
<p class="symi-entry-owner">UniffiCylindricalAlgebraicDecomposition method</p>

```swift signature
func cellKind(index: UInt64) -> UniffiCadCellKind
```


`"section"` or `"sector"` — whether the cell is a root section or an open
interval in its top variable.

### cell_dimension

<a id="entry-presentation_swift_cad_capability_algebra_cell_dimension_api_cylindricalalgebraicdecomposition_cell_dimension"></a>
<a id="placement-placement.swift.swift_object.unifficylindricalalgebraicdecomposition_celldimension.9a37261324c3"></a>
<p class="symi-entry-owner">UniffiCylindricalAlgebraicDecomposition method</p>

```swift signature
func cellDimension(index: UInt64) -> UInt64
```


The geometric dimension of the full cell as a subset of \(\mathbb{R}^n\) (the number of
sector coordinates along its cylindrical stack).

### projection_operator_used

<a id="entry-presentation_swift_cad_capability_algebra_projection_operator_used_api_cylindricalalgebraicdecomposition_projection_operator_used"></a>
<a id="placement-placement.swift.swift_object.unifficylindricalalgebraicdecomposition_projectionoperatorused.cfc90e8c3fd9"></a>
<p class="symi-entry-owner">UniffiCylindricalAlgebraicDecomposition method</p>

```swift signature
func projectionOperatorUsed() -> String
```


The projection operator the decomposition was built with:
`"brown"` for the well-oriented fast path, `"lazard"` when the well-orientedness
guard forced the complete fallback, `"equational_constraint"` for an
equational-constraint CAD.

## Example

