# Matrix construction and access

Construct matrices from ordered rows or from identity, zero, and diagonal families. Shape and entry access preserve row-major ordering.

## Constructors

### matrix



Build a matrix from ordered rows. Direct Python construction and the facade
module function use the shared default context. The raw wasm-bindgen
compatibility layer retains `(rows, columns, flat_entries)`; new JavaScript
code should use the nested facade form.

### matrix_identity

<a id="entry-presentation_kotlin_matrix_construction_capability_algebra_matrix_identity_api_session_matrix_identity"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_matrixidentity.dc397d030507"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun matrixIdentity(size: kotlin.ULong): UniffiMatrix
```


The \(\mathit{size}\times\mathit{size}\) identity; size 0 raises.

### matrix_zero

<a id="entry-presentation_kotlin_matrix_construction_capability_algebra_matrix_zero_api_session_matrix_zero"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_matrixzero.472641fbc456"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun matrixZero(rows: kotlin.ULong, columns: kotlin.ULong): UniffiMatrix
```


The \(\mathit{rows}\times\mathit{columns}\) zero matrix.

### matrix_diagonal

<a id="entry-presentation_kotlin_matrix_construction_capability_algebra_matrix_diagonal_api_session_matrix_diagonal"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_matrixdiagonal.26b15bd32d7c"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun matrixDiagonal(entries: List<UniffiExpression>): UniffiMatrix
```


Square matrix with the given main diagonal and zeros elsewhere; the empty
list raises.

## Shape and access

### rows

<a id="entry-presentation_kotlin_matrix_construction_capability_algebra_rows_api_matrix_rows"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_rows.215533547a81"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun rows(): kotlin.ULong
```


### columns

<a id="entry-presentation_kotlin_matrix_construction_capability_algebra_columns_api_matrix_columns"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_columns.ca342880106f"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun columns(): kotlin.ULong
```


### entry

<a id="entry-presentation_kotlin_matrix_construction_capability_algebra_entry_api_matrix_entry"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_entry.db724b9f7f2b"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun entry(row: kotlin.ULong, column: kotlin.ULong): UniffiExpression
```


Element access. **Notes:** Python uses indexing `m[row, column]` instead.

## Example


## Additional API

### matrix

<a id="entry-presentation_kotlin_matrix_construction_capability_algebra_matrix_api_session_matrix"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_matrix.b51a2061d1a0"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun matrix(rows: List<List<UniffiExpression>>): UniffiMatrix
```

Build a matrix from ordered rows. Direct Python construction and the facade module function use the shared default context. The raw wasm-bindgen compatibility layer retains `(rows, columns, flat_entries)`; new JavaScript code should use the nested facade form.

### matrix

<a id="entry-presentation_kotlin_matrix_construction_capability_algebra_matrix_api_partial_differential_equations_partialdifferentialequationprincipalpart_matrix"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationprincipalpart_matrix.5df8c1d237ca"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationPrincipalPart method</p>

```kotlin signature
fun matrix(): UniffiMatrix
```

The symmetric principal matrix whose quadratic form is the exact principal symbol.

