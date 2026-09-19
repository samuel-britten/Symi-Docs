# Matrix construction and access

Construct matrices from ordered rows or from identity, zero, and diagonal families. Shape and entry access preserve row-major ordering.

## Constructors

### matrix



Build a matrix from ordered rows. Direct Python construction and the facade
module function use the shared default context. The raw wasm-bindgen
compatibility layer retains `(rows, columns, flat_entries)`; new JavaScript
code should use the nested facade form.

### matrix_identity

<a id="entry-presentation_swift_matrix_construction_capability_algebra_matrix_identity_api_session_matrix_identity"></a>
<a id="placement-placement.swift.swift_object.uniffisession_matrixidentity.9b53fbdd535c"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func matrixIdentity(size: UInt64) -> UniffiMatrix
```


The \(\mathit{size}\times\mathit{size}\) identity; size 0 raises.

### matrix_zero

<a id="entry-presentation_swift_matrix_construction_capability_algebra_matrix_zero_api_session_matrix_zero"></a>
<a id="placement-placement.swift.swift_object.uniffisession_matrixzero.955e0bac4afd"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func matrixZero(rows: UInt64, columns: UInt64) -> UniffiMatrix
```


The \(\mathit{rows}\times\mathit{columns}\) zero matrix.

### matrix_diagonal

<a id="entry-presentation_swift_matrix_construction_capability_algebra_matrix_diagonal_api_session_matrix_diagonal"></a>
<a id="placement-placement.swift.swift_object.uniffisession_matrixdiagonal.83729260e711"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func matrixDiagonal(entries: [UniffiExpression]) -> UniffiMatrix
```


Square matrix with the given main diagonal and zeros elsewhere; the empty
list raises.

## Shape and access

### rows

<a id="entry-presentation_swift_matrix_construction_capability_algebra_rows_api_matrix_rows"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_rows.35b7b4b5025b"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func rows() -> UInt64
```


### columns

<a id="entry-presentation_swift_matrix_construction_capability_algebra_columns_api_matrix_columns"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_columns.4d50379839e3"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func columns() -> UInt64
```


### entry

<a id="entry-presentation_swift_matrix_construction_capability_algebra_entry_api_matrix_entry"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_entry.7eb42040599b"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func entry(row: UInt64, column: UInt64) -> UniffiExpression
```


Element access. **Notes:** Python uses indexing `m[row, column]` instead.

## Example


## Additional API

### matrix

<a id="entry-presentation_swift_matrix_construction_capability_algebra_matrix_api_session_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffisession_matrix.437fcad3cd31"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func matrix(rows: [[UniffiExpression]]) -> UniffiMatrix
```

Build a matrix from ordered rows. Direct Python construction and the facade module function use the shared default context. The raw wasm-bindgen compatibility layer retains `(rows, columns, flat_entries)`; new JavaScript code should use the nested facade form.

### matrix

<a id="entry-presentation_swift_matrix_construction_capability_algebra_matrix_api_partial_differential_equations_partialdifferentialequationprincipalpart_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationprincipalpart_matrix.373467e897b0"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPrincipalPart method</p>

```swift signature
func matrix() -> UniffiMatrix
```

The symmetric principal matrix whose quadratic form is the exact principal symbol.

