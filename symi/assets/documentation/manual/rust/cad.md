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

<a id="placement-placement.rust.native_rust.api_cylindricalalgebraicdecomposition_cell_count.fc916286f288"></a>
`symi::api::CylindricalAlgebraicDecomposition — pub fn cell_count(&self) -> Result<usize, ApiError>`


The number of full-dimensional cells partitioning \(\mathbb{R}^n\).

### cell_sample_point

<a id="placement-placement.rust.native_rust.api_cylindricalalgebraicdecomposition_cell_sample_point.1e6a248ad82d"></a>
`symi::api::CylindricalAlgebraicDecomposition — pub fn cell_sample_point(&self, index: usize) -> Result<Vec<f64>, ApiError>`


The coordinates of the full cell's sample point as floats — a numeric view via
the multi-precision evaluator, not a decision.

### cell_sign_vector

<a id="placement-placement.rust.native_rust.api_cylindricalalgebraicdecomposition_cell_sign_vector.aa269a747174"></a>
`symi::api::CylindricalAlgebraicDecomposition — pub fn cell_sign_vector(&self, index: usize) -> Result<Vec<i32>, ApiError>`


The exact sign (\(-1\), \(0\), or \(+1\)) of each input polynomial on the full cell, in
input order.

### cell_kind

<a id="placement-placement.rust.native_rust.api_cylindricalalgebraicdecomposition_cell_kind.e3cde7428203"></a>
`symi::api::CylindricalAlgebraicDecomposition — pub fn cell_kind(&self, index: usize) -> Result<CadCellKind, ApiError>`


`"section"` or `"sector"` — whether the cell is a root section or an open
interval in its top variable.

### cell_dimension

<a id="placement-placement.rust.native_rust.api_cylindricalalgebraicdecomposition_cell_dimension.e800a2b5e7b0"></a>
`symi::api::CylindricalAlgebraicDecomposition — pub fn cell_dimension(&self, index: usize) -> Result<usize, ApiError>`


The geometric dimension of the full cell as a subset of \(\mathbb{R}^n\) (the number of
sector coordinates along its cylindrical stack).

### projection_operator_used

<a id="placement-placement.rust.native_rust.api_cylindricalalgebraicdecomposition_projection_operator_used.641e4df2cc8f"></a>
`symi::api::CylindricalAlgebraicDecomposition — pub fn projection_operator_used(&self) -> Result<&str, ApiError>`


The projection operator the decomposition was built with:
`"brown"` for the well-oriented fast path, `"lazard"` when the well-orientedness
guard forced the complete fallback, `"equational_constraint"` for an
equational-constraint CAD.

## Example

Decompose the plane along one circle and inspect a cell.

```rust
use symi::api::prelude::*;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let session = Session::new();
    let circle = session.parse("x^2 + y^2 - 1")?;
    let decomposition =
        session.cylindrical_algebraic_decomposition(&[circle], &["x", "y"], &[])?;

    println!("{}", decomposition.cell_count()?);
    println!("{:?}", decomposition.cell_kind(0)?);
    Ok(())
}
```

