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

<a id="entry-presentation_wasm_host_wasm_contextconstructor_new"></a>
<a id="placement-placement.wasm.javascript_facade.contextconstructor_new.0f9094d96686"></a>
<p class="symi-entry-owner">new constructor</p>

```typescript signature
new Context(): Context
```

Construct the CAD of the polynomials in the given variable order \(x_1,\ldots,x_n\); projection eliminates \(x_n\) first).

## Accessors

### cell_count

*Not exposed by the WASM / JavaScript bindings. Available as [`CylindricalAlgebraicDecomposition.cell_count`](/symi/python/cad#cell_count) in Python, [`UniffiCylindricalAlgebraicDecomposition.cellCount`](/symi/kotlin/cad#cell_count) in Kotlin, [`UniffiCylindricalAlgebraicDecomposition.cellCount`](/symi/swift/cad#cell_count) in Swift, [`api::CylindricalAlgebraicDecomposition::cell_count`](/symi/rust/cad#cell_count) in Rust.*


The number of full-dimensional cells partitioning \(\mathbb{R}^n\).

### cell_sample_point

*Not exposed by the WASM / JavaScript bindings. Available as [`CylindricalAlgebraicDecomposition.cell_sample_point`](/symi/python/cad#cell_sample_point) in Python, [`UniffiCylindricalAlgebraicDecomposition.cellSamplePoint`](/symi/kotlin/cad#cell_sample_point) in Kotlin, [`UniffiCylindricalAlgebraicDecomposition.cellSamplePoint`](/symi/swift/cad#cell_sample_point) in Swift, [`api::CylindricalAlgebraicDecomposition::cell_sample_point`](/symi/rust/cad#cell_sample_point) in Rust.*


The coordinates of the full cell's sample point as floats — a numeric view via
the multi-precision evaluator, not a decision.

### cell_sign_vector

*Not exposed by the WASM / JavaScript bindings. Available as [`CylindricalAlgebraicDecomposition.cell_sign_vector`](/symi/python/cad#cell_sign_vector) in Python, [`UniffiCylindricalAlgebraicDecomposition.cellSignVector`](/symi/kotlin/cad#cell_sign_vector) in Kotlin, [`UniffiCylindricalAlgebraicDecomposition.cellSignVector`](/symi/swift/cad#cell_sign_vector) in Swift, [`api::CylindricalAlgebraicDecomposition::cell_sign_vector`](/symi/rust/cad#cell_sign_vector) in Rust.*


The exact sign (\(-1\), \(0\), or \(+1\)) of each input polynomial on the full cell, in
input order.

### cell_kind

*Not exposed by the WASM / JavaScript bindings. Available as [`CylindricalAlgebraicDecomposition.cell_kind`](/symi/python/cad#cell_kind) in Python, [`UniffiCylindricalAlgebraicDecomposition.cellKind`](/symi/kotlin/cad#cell_kind) in Kotlin, [`UniffiCylindricalAlgebraicDecomposition.cellKind`](/symi/swift/cad#cell_kind) in Swift, [`api::CylindricalAlgebraicDecomposition::cell_kind`](/symi/rust/cad#cell_kind) in Rust.*


`"section"` or `"sector"` — whether the cell is a root section or an open
interval in its top variable.

### cell_dimension

*Not exposed by the WASM / JavaScript bindings. Available as [`CylindricalAlgebraicDecomposition.cell_dimension`](/symi/python/cad#cell_dimension) in Python, [`UniffiCylindricalAlgebraicDecomposition.cellDimension`](/symi/kotlin/cad#cell_dimension) in Kotlin, [`UniffiCylindricalAlgebraicDecomposition.cellDimension`](/symi/swift/cad#cell_dimension) in Swift, [`api::CylindricalAlgebraicDecomposition::cell_dimension`](/symi/rust/cad#cell_dimension) in Rust.*


The geometric dimension of the full cell as a subset of \(\mathbb{R}^n\) (the number of
sector coordinates along its cylindrical stack).

### projection_operator_used

*Not exposed by the WASM / JavaScript bindings. Available as [`CylindricalAlgebraicDecomposition.projection_operator_used`](/symi/python/cad#projection_operator_used) in Python, [`UniffiCylindricalAlgebraicDecomposition.projectionOperatorUsed`](/symi/kotlin/cad#projection_operator_used) in Kotlin, [`UniffiCylindricalAlgebraicDecomposition.projectionOperatorUsed`](/symi/swift/cad#projection_operator_used) in Swift, [`api::CylindricalAlgebraicDecomposition::projection_operator_used`](/symi/rust/cad#projection_operator_used) in Rust.*


The projection operator the decomposition was built with:
`"brown"` for the well-oriented fast path, `"lazard"` when the well-orientedness
guard forced the complete fallback, `"equational_constraint"` for an
equational-constraint CAD.

## Example

This family is not part of the recommended JavaScript facade in this release. Call it through the generated `symi.raw` layer, whose entries are listed with their wasm-bindgen signatures above, and read [Migration](migration.md) for the ownership rules that apply there.


## Additional API

### SymiFacade

<a id="entry-presentation_wasm_host_wasm_module_symifacade"></a>
<a id="placement-placement.wasm.javascript_facade.symifacade.ff8eea78fa52"></a>
<p class="symi-entry-owner">Type</p>

```typescript signature
interface SymiFacade
```

Public type placement for SymiFacade.

### createFacade

<a id="entry-presentation_wasm_host_wasm_module_createfacade"></a>
<a id="placement-placement.wasm.javascript_facade.module_createfacade.ec941be21075"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
function createFacade(rawModule: unknown): SymiFacade
```

Public function placement for createFacade.

### CylindricalAlgebraicDecomposition

<a id="entry-presentation_wasm_api_cylindricalalgebraicdecomposition"></a>
<a id="placement-placement.wasm.wasm_class.cylindricalalgebraicdecomposition.8d211ca9a1c3"></a>
<p class="symi-entry-owner">Raw WebAssembly: CylindricalAlgebraicDecomposition constructor</p>

```typescript signature
new CylindricalAlgebraicDecomposition(
    expressions: Expression[],
    variables: string[],
    equational_constraints?: Uint32Array | null,
)
```

Construct the CAD of the polynomials in the given variable order \(x_1,\ldots,x_n\); projection eliminates \(x_n\) first).

#### CylindricalAlgebraicDecomposition.cellCount

<a id="entry-presentation_wasm_api_cylindricalalgebraicdecomposition_cell_count"></a>
<a id="placement-placement.wasm.wasm_class.cylindricalalgebraicdecomposition_cellcount.2a3856c631ae"></a>
<p class="symi-entry-owner">Raw WebAssembly: CylindricalAlgebraicDecomposition method</p>

```typescript signature
cellCount(): number
```

The number of full-dimensional cells partitioning \(\mathbb{R}^n\).

#### CylindricalAlgebraicDecomposition.cellDimension

<a id="entry-presentation_wasm_api_cylindricalalgebraicdecomposition_cell_dimension"></a>
<a id="placement-placement.wasm.wasm_class.cylindricalalgebraicdecomposition_celldimension.58941abd698b"></a>
<p class="symi-entry-owner">Raw WebAssembly: CylindricalAlgebraicDecomposition method</p>

```typescript signature
cellDimension(index: number): number
```

The geometric dimension of the full cell as a subset of \(\mathbb{R}^n\) (the number of sector coordinates along its cylindrical stack).

#### CylindricalAlgebraicDecomposition.cellKind

<a id="entry-presentation_wasm_api_cylindricalalgebraicdecomposition_cell_kind"></a>
<a id="placement-placement.wasm.wasm_class.cylindricalalgebraicdecomposition_cellkind.b0d16f9fc18f"></a>
<p class="symi-entry-owner">Raw WebAssembly: CylindricalAlgebraicDecomposition method</p>

```typescript signature
cellKind(index: number): string
```

`"section"` or `"sector"` — whether the cell is a root section or an open interval in its top variable.

#### CylindricalAlgebraicDecomposition.cellSamplePoint

<a id="entry-presentation_wasm_api_cylindricalalgebraicdecomposition_cell_sample_point"></a>
<a id="placement-placement.wasm.wasm_class.cylindricalalgebraicdecomposition_cellsamplepoint.fb99fcd53a5b"></a>
<p class="symi-entry-owner">Raw WebAssembly: CylindricalAlgebraicDecomposition method</p>

```typescript signature
cellSamplePoint(index: number): Float64Array
```

The coordinates of the full cell's sample point as floats — a numeric view via the multi-precision evaluator, not a decision.

#### CylindricalAlgebraicDecomposition.cellSignVector

<a id="entry-presentation_wasm_api_cylindricalalgebraicdecomposition_cell_sign_vector"></a>
<a id="placement-placement.wasm.wasm_class.cylindricalalgebraicdecomposition_cellsignvector.1dd5b1c2f6cd"></a>
<p class="symi-entry-owner">Raw WebAssembly: CylindricalAlgebraicDecomposition method</p>

```typescript signature
cellSignVector(index: number): Int32Array
```

The exact sign (\(-1\), \(0\), or \(+1\)) of each input polynomial on the full cell, in input order.

#### CylindricalAlgebraicDecomposition.projectionOperatorUsed

<a id="entry-presentation_wasm_api_cylindricalalgebraicdecomposition_projection_operator_used"></a>
<a id="placement-placement.wasm.wasm_class.cylindricalalgebraicdecomposition_projectionoperatorused.34f87e17828d"></a>
<p class="symi-entry-owner">Raw WebAssembly: CylindricalAlgebraicDecomposition method</p>

```typescript signature
projectionOperatorUsed(): string
```

The projection operator the decomposition was built with: `"brown"` for the well-oriented fast path, `"lazard"` when the well-orientedness guard forced the complete fallback, `"equational_constraint"` for an equational-constraint CAD.

