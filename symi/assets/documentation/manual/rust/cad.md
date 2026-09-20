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

*Not part of the recommended `symi::api` facade; the operation is reachable from the complete native crate in the [native Rust API reference](/symi/rust/api/symi/). Available as [`ContextConstructor.new`](/symi/wasm/cad#new) in WASM / JavaScript.*


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

The number of full-dimensional cells partitioning \(\mathbb{R}^n\).

<a id="entry-presentation_rust_api_cylindricalalgebraicdecomposition_cell_count"></a>
<a id="placement-placement.rust.native_rust.api_cylindricalalgebraicdecomposition_cell_count.fc916286f288"></a>
<p class="symi-entry-owner">api::CylindricalAlgebraicDecomposition method</p>

```rust signature
pub fn cell_count(&self) -> Result<usize, ApiError>
```

Provides the `cell_count` operation on this native type.

### cell_sample_point

The coordinates of the full cell's sample point as floats — a numeric view via
the multi-precision evaluator, not a decision.

<a id="entry-presentation_rust_api_cylindricalalgebraicdecomposition_cell_sample_point"></a>
<a id="placement-placement.rust.native_rust.api_cylindricalalgebraicdecomposition_cell_sample_point.1e6a248ad82d"></a>
<p class="symi-entry-owner">api::CylindricalAlgebraicDecomposition method</p>

```rust signature
pub fn cell_sample_point(
    &self,
    index: usize,
) -> Result<Vec<f64>, ApiError>
```

Provides the `cell_sample_point` operation on this native type.

### cell_sign_vector

The exact sign (\(-1\), \(0\), or \(+1\)) of each input polynomial on the full cell, in
input order.

<a id="entry-presentation_rust_api_cylindricalalgebraicdecomposition_cell_sign_vector"></a>
<a id="placement-placement.rust.native_rust.api_cylindricalalgebraicdecomposition_cell_sign_vector.aa269a747174"></a>
<p class="symi-entry-owner">api::CylindricalAlgebraicDecomposition method</p>

```rust signature
pub fn cell_sign_vector(
    &self,
    index: usize,
) -> Result<Vec<i32>, ApiError>
```

Provides the `cell_sign_vector` operation on this native type.

### cell_kind

`"section"` or `"sector"` — whether the cell is a root section or an open
interval in its top variable.

<a id="entry-presentation_rust_api_cylindricalalgebraicdecomposition_cell_kind"></a>
<a id="placement-placement.rust.native_rust.api_cylindricalalgebraicdecomposition_cell_kind.e3cde7428203"></a>
<p class="symi-entry-owner">api::CylindricalAlgebraicDecomposition method</p>

```rust signature
pub fn cell_kind(&self, index: usize) -> Result<CadCellKind, ApiError>
```

Provides the `cell_kind` operation on this native type.

### cell_dimension

The geometric dimension of the full cell as a subset of \(\mathbb{R}^n\) (the number of
sector coordinates along its cylindrical stack).

<a id="entry-presentation_rust_api_cylindricalalgebraicdecomposition_cell_dimension"></a>
<a id="placement-placement.rust.native_rust.api_cylindricalalgebraicdecomposition_cell_dimension.e800a2b5e7b0"></a>
<p class="symi-entry-owner">api::CylindricalAlgebraicDecomposition method</p>

```rust signature
pub fn cell_dimension(&self, index: usize) -> Result<usize, ApiError>
```

Provides the `cell_dimension` operation on this native type.

### projection_operator_used

The projection operator the decomposition was built with:
`"brown"` for the well-oriented fast path, `"lazard"` when the well-orientedness
guard forced the complete fallback, `"equational_constraint"` for an
equational-constraint CAD.

<a id="entry-presentation_rust_api_cylindricalalgebraicdecomposition_projection_operator_used"></a>
<a id="placement-placement.rust.native_rust.api_cylindricalalgebraicdecomposition_projection_operator_used.641e4df2cc8f"></a>
<p class="symi-entry-owner">api::CylindricalAlgebraicDecomposition method</p>

```rust signature
pub fn projection_operator_used(&self) -> Result<&str, ApiError>
```

Provides the `projection_operator_used` operation on this native type.

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


## Additional API

### CadCellKind

<a id="entry-presentation_rust_api_cadcellkind"></a>
<a id="placement-placement.rust.native_rust.api_cadcellkind.aba94638427b"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum CadCellKind
```

Public native enumeration named `cad_cell_kind`.

#### CadCellKind.Section

<a id="entry-presentation_rust_api_cadcellkind_section"></a>
<a id="placement-placement.rust.native_rust.api_cadcellkind_section.f226207df5fa"></a>
<p class="symi-entry-owner">api::CadCellKind variant</p>

```rust signature
Section,
```

Represents the `section` case.

#### CadCellKind.Sector

<a id="entry-presentation_rust_api_cadcellkind_sector"></a>
<a id="placement-placement.rust.native_rust.api_cadcellkind_sector.a091725c055c"></a>
<p class="symi-entry-owner">api::CadCellKind variant</p>

```rust signature
Sector,
```

Represents the `sector` case.

#### CadCellKind.name

<a id="entry-presentation_rust_api_cadcellkind_name"></a>
<a id="placement-placement.rust.native_rust.api_cadcellkind_name.467c0e2363d3"></a>
<p class="symi-entry-owner">api::CadCellKind method</p>

```rust signature
pub fn name(&self) -> &'static str
```

The stable binding spelling of this cell kind.

### CylindricalAlgebraicDecomposition

<a id="entry-presentation_rust_api_cylindricalalgebraicdecomposition"></a>
<a id="placement-placement.rust.native_rust.api_cylindricalalgebraicdecomposition.50354ca1971a"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct CylindricalAlgebraicDecomposition
```

Public native data structure named `cylindrical_algebraic_decomposition`.

#### CylindricalAlgebraicDecomposition.generation

<a id="entry-presentation_rust_api_cylindricalalgebraicdecomposition_generation"></a>
<a id="placement-placement.rust.native_rust.api_cylindricalalgebraicdecomposition_generation.7077173700ad"></a>
<p class="symi-entry-owner">api::CylindricalAlgebraicDecomposition method</p>

```rust signature
pub fn generation(&self) -> u64
```

The session generation this object was created in.

#### CylindricalAlgebraicDecomposition.is_stale

<a id="entry-presentation_rust_api_cylindricalalgebraicdecomposition_is_stale"></a>
<a id="placement-placement.rust.native_rust.api_cylindricalalgebraicdecomposition_is_stale.57ceaf990523"></a>
<p class="symi-entry-owner">api::CylindricalAlgebraicDecomposition method</p>

```rust signature
pub fn is_stale(&self) -> bool
```

Whether this object predates its session's most recent reset.

#### CylindricalAlgebraicDecomposition.session

<a id="entry-presentation_rust_api_cylindricalalgebraicdecomposition_session"></a>
<a id="placement-placement.rust.native_rust.api_cylindricalalgebraicdecomposition_session.feb66305bd29"></a>
<p class="symi-entry-owner">api::CylindricalAlgebraicDecomposition method</p>

```rust signature
pub fn session(&self) -> Session
```

The session that owns this object, for host adapters that carry the owner alongside it.

