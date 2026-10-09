# Matrix construction and access

Construct matrices from ordered rows or from identity, zero, and diagonal families. Shape and entry access preserve row-major ordering.

## Constructors

### matrix

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationprincipalpart_matrix.5df8c1d237ca"></a>
`UniffiPartialDifferentialEquationPrincipalPart.matrix(): UniffiMatrix`

<a id="placement-placement.kotlin.kotlin_object.uniffisession_matrix.b51a2061d1a0"></a>
`UniffiSession.matrix(rows: List<List<UniffiExpression>>): UniffiMatrix`




Build a matrix from ordered rows. Direct Python construction and the facade
module function use the shared default context. The raw wasm-bindgen
compatibility layer retains `(rows, columns, flat_entries)`; new JavaScript
code should use the nested facade form.

### matrix_identity

<a id="placement-placement.kotlin.kotlin_object.uniffisession_matrixidentity.dc397d030507"></a>
`UniffiSession.matrixIdentity(size: kotlin.ULong): UniffiMatrix`


The \(\mathit{size}\times\mathit{size}\) identity; size 0 raises.

### matrix_zero

<a id="placement-placement.kotlin.kotlin_object.uniffisession_matrixzero.472641fbc456"></a>
`UniffiSession.matrixZero(rows: kotlin.ULong, columns: kotlin.ULong): UniffiMatrix`


The \(\mathit{rows}\times\mathit{columns}\) zero matrix.

### matrix_diagonal

<a id="placement-placement.kotlin.kotlin_object.uniffisession_matrixdiagonal.26b15bd32d7c"></a>
`UniffiSession.matrixDiagonal(entries: List<UniffiExpression>): UniffiMatrix`


Square matrix with the given main diagonal and zeros elsewhere; the empty
list raises.

## Shape and access

### rows

<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_rows.215533547a81"></a>
`UniffiMatrix.rows(): kotlin.ULong`


### columns

<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_columns.ca342880106f"></a>
`UniffiMatrix.columns(): kotlin.ULong`


### entry

<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_entry.db724b9f7f2b"></a>
`UniffiMatrix.entry(row: kotlin.ULong, column: kotlin.ULong): UniffiExpression`


Element access. **Notes:** Python uses indexing `m[row, column]` instead.

## Example

