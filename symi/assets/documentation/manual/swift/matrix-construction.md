# Matrix construction and access

Construct matrices from ordered rows or from identity, zero, and diagonal families. Shape and entry access preserve row-major ordering.

## Constructors

### matrix

<a id="entry-presentation_swift_api_session_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffisession_matrix.437fcad3cd31"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func matrix(rows: [[UniffiExpression]]) -> UniffiMatrix
```




Build a matrix from ordered rows. Direct Python construction and the facade
module function use the shared default context. The raw wasm-bindgen
compatibility layer retains `(rows, columns, flat_entries)`; new JavaScript
code should use the nested facade form.

### matrix_identity

<a id="entry-presentation_swift_api_session_matrix_identity"></a>
<a id="placement-placement.swift.swift_object.uniffisession_matrixidentity.9b53fbdd535c"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func matrixIdentity(size: UInt64) -> UniffiMatrix
```


The \(\mathit{size}\times\mathit{size}\) identity; size 0 raises.

### matrix_zero

<a id="entry-presentation_swift_api_session_matrix_zero"></a>
<a id="placement-placement.swift.swift_object.uniffisession_matrixzero.955e0bac4afd"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func matrixZero(rows: UInt64, columns: UInt64) -> UniffiMatrix
```


The \(\mathit{rows}\times\mathit{columns}\) zero matrix.

### matrix_diagonal

<a id="entry-presentation_swift_api_session_matrix_diagonal"></a>
<a id="placement-placement.swift.swift_object.uniffisession_matrixdiagonal.83729260e711"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func matrixDiagonal(entries: [UniffiExpression]) -> UniffiMatrix
```


Square matrix with the given main diagonal and zeros elsewhere; the empty
list raises.

## Shape and access

### rows

<a id="entry-presentation_swift_api_matrix_rows"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_rows.35b7b4b5025b"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func rows() -> UInt64
```


### columns

<a id="entry-presentation_swift_api_matrix_columns"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_columns.4d50379839e3"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func columns() -> UInt64
```


### entry

<a id="entry-presentation_swift_api_matrix_entry"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_entry.7eb42040599b"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func entry(row: UInt64, column: UInt64) -> UniffiExpression
```


Element access. **Notes:** Python uses indexing `m[row, column]` instead.

## Example


## Additional API

### diagonal_matrix

<a id="entry-presentation_swift_api_session_diagonal_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffisession_diagonalmatrix.23ce19207678"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func diagonalMatrix(subject: UniffiMatrix) -> UniffiAssumptionProposition
```

Provides the `diagonal_matrix` operation on this mobile object.

### identity_matrix

<a id="entry-presentation_swift_api_session_identity_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffisession_identitymatrix.796c1008fa8e"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func identityMatrix(subject: UniffiMatrix) -> UniffiAssumptionProposition
```

Provides the `identity_matrix` operation on this mobile object.

### zero_matrix

<a id="entry-presentation_swift_api_session_zero_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffisession_zeromatrix.3cd60fff040e"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func zeroMatrix(subject: UniffiMatrix) -> UniffiAssumptionProposition
```

Provides the `zero_matrix` operation on this mobile object.

