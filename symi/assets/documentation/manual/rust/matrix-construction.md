# Matrix construction and access

Construct matrices from ordered rows or from identity, zero, and diagonal families. Shape and entry access preserve row-major ordering.

## Constructors

### matrix

<a id="entry-presentation_rust_api_session_matrix"></a>
<a id="placement-placement.rust.native_rust.api_session_matrix.d13bbbee86c8"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn matrix<RowsIterator, RowIterator>(
    &self,
    rows: RowsIterator,
) -> Result<Matrix, ApiError>
where
    RowsIterator: IntoIterator<Item = RowIterator>,
    RowIterator: IntoIterator<Item = Expression>,
```




Build a matrix from ordered rows. Direct Python construction and the facade
module function use the shared default context. The raw wasm-bindgen
compatibility layer retains `(rows, columns, flat_entries)`; new JavaScript
code should use the nested facade form.

### matrix_identity

<a id="entry-presentation_rust_api_session_matrix_identity"></a>
<a id="placement-placement.rust.native_rust.api_session_matrix_identity.65c23949077d"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn matrix_identity(&self, size: usize) -> Result<Matrix, ApiError>
```


The \(\mathit{size}\times\mathit{size}\) identity; size 0 raises.

### matrix_zero

<a id="entry-presentation_rust_api_session_matrix_zero"></a>
<a id="placement-placement.rust.native_rust.api_session_matrix_zero.bd99a851ae3d"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn matrix_zero(
    &self,
    rows: usize,
    columns: usize,
) -> Result<Matrix, ApiError>
```


The \(\mathit{rows}\times\mathit{columns}\) zero matrix.

### matrix_diagonal

<a id="entry-presentation_rust_api_session_matrix_diagonal"></a>
<a id="placement-placement.rust.native_rust.api_session_matrix_diagonal.3bc09915f562"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn matrix_diagonal<'a, IteratorType>(
    &self,
    entries: IteratorType,
) -> Result<Matrix, ApiError>
where
    IteratorType: IntoIterator<Item = &'a Expression>,
```


Square matrix with the given main diagonal and zeros elsewhere; the empty
list raises.

## Shape and access

### rows

<a id="entry-presentation_rust_api_matrix_rows"></a>
<a id="placement-placement.rust.native_rust.api_matrix_rows.15283dbbfdb7"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn rows(&self) -> usize
```


### columns

<a id="entry-presentation_rust_api_matrix_columns"></a>
<a id="placement-placement.rust.native_rust.api_matrix_columns.8b0f61863dc2"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn columns(&self) -> usize
```


### entry

<a id="entry-presentation_rust_api_matrix_entry"></a>
<a id="placement-placement.rust.native_rust.api_matrix_entry.3ffd9f4d1e96"></a>
<p class="symi-entry-owner">api::Matrix method</p>

```rust signature
pub fn entry(
    &self,
    row: usize,
    column: usize,
) -> Result<Expression, ApiError>
```


Element access. **Notes:** Python uses indexing `m[row, column]` instead.

## Example

Build matrices from rows or from a structured constructor.

```rust
use symi::api::prelude::*;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let session = Session::new();
    let x = session.symbol("x");
    let matrix = session.matrix([
        [session.integer(1), x.clone()],
        [x.clone(), session.integer(1)],
    ])?;

    println!("{} x {}", matrix.rows()?, matrix.columns()?);
    println!("{}", matrix.entry(0, 1)?);
    Ok(())
}
```


## Additional API

### diagonal_matrix

<a id="entry-presentation_rust_api_session_diagonal_matrix"></a>
<a id="placement-placement.rust.native_rust.api_session_diagonal_matrix.b17dbb2a54b5"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn diagonal_matrix(
    &self,
    subject: &Matrix,
) -> Result<AssumptionProposition, ApiError>
```

Construct a diagonal-matrix proposition.

### identity_matrix

<a id="entry-presentation_rust_api_session_identity_matrix"></a>
<a id="placement-placement.rust.native_rust.api_session_identity_matrix.933d2213969f"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn identity_matrix(
    &self,
    subject: &Matrix,
) -> Result<AssumptionProposition, ApiError>
```

Construct an identity-matrix proposition.

### zero_matrix

<a id="entry-presentation_rust_api_session_zero_matrix"></a>
<a id="placement-placement.rust.native_rust.api_session_zero_matrix.a2c72f8dc46d"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn zero_matrix(
    &self,
    subject: &Matrix,
) -> Result<AssumptionProposition, ApiError>
```

Construct a zero-matrix proposition.

