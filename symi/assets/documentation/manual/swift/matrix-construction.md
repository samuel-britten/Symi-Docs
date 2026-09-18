# Matrix construction and access

Construct matrices from ordered rows or from identity, zero, and diagonal families. Shape and entry access preserve row-major ordering.

## Constructors

### matrix

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationprincipalpart_matrix.373467e897b0"></a>
`UniffiPartialDifferentialEquationPrincipalPart.matrix() -> UniffiMatrix`

<a id="placement-placement.swift.swift_object.uniffisession_matrix.437fcad3cd31"></a>
`UniffiSession.matrix(rows: [[UniffiExpression]]) -> UniffiMatrix`




Build a matrix from ordered rows. Direct Python construction and the facade
module function use the shared default context. The raw wasm-bindgen
compatibility layer retains `(rows, columns, flat_entries)`; new JavaScript
code should use the nested facade form.

### matrix_identity

<a id="placement-placement.swift.swift_object.uniffisession_matrixidentity.9b53fbdd535c"></a>
`UniffiSession.matrixIdentity(size: UInt64) -> UniffiMatrix`


The \(\mathit{size}\times\mathit{size}\) identity; size 0 raises.

### matrix_zero

<a id="placement-placement.swift.swift_object.uniffisession_matrixzero.955e0bac4afd"></a>
`UniffiSession.matrixZero(rows: UInt64, columns: UInt64) -> UniffiMatrix`


The \(\mathit{rows}\times\mathit{columns}\) zero matrix.

### matrix_diagonal

<a id="placement-placement.swift.swift_object.uniffisession_matrixdiagonal.83729260e711"></a>
`UniffiSession.matrixDiagonal(entries: [UniffiExpression]) -> UniffiMatrix`


Square matrix with the given main diagonal and zeros elsewhere; the empty
list raises.

## Shape and access

### rows

<a id="placement-placement.swift.swift_object.uniffimatrix_rows.35b7b4b5025b"></a>
`UniffiMatrix.rows() -> UInt64`


### columns

<a id="placement-placement.swift.swift_object.uniffimatrix_columns.4d50379839e3"></a>
`UniffiMatrix.columns() -> UInt64`


### entry

<a id="placement-placement.swift.swift_object.uniffimatrix_entry.7eb42040599b"></a>
`UniffiMatrix.entry(row: UInt64, column: UInt64) -> UniffiExpression`


Element access. **Notes:** Python uses indexing `m[row, column]` instead.

## Example

