# Getting started: Rust

The recommended native entry point is `symi::api::prelude`:


A `Session` owns the symbol table and expression store. Its `Expression`,
`Matrix`, geometry, undefined-function, and CAD handles retain provenance.
Cross-session and stale operations return `ApiError`.

Subject methods are preferred when one expression is clearly being operated
on; session methods are available for construction and multi-subject
operations. `VariableLike` accepts a name or same-session symbol, while exact
integer input supports signed and unsigned primitive integers. Explicit
`Session::rational` construction never passes through floating point.

The low-level modules re-exported from the crate root remain available to
Symi algorithms and advanced callers. They expose context-affine interners,
identifiers, and reference-counted nodes and are not the recommended
application API. Complete facade examples and the error contract appear in
the crate-level `symi::api` documentation.

The complete advanced native surface is generated from the same crate and is
available in the [native Rust API reference](/symi/rust/api/symi/). Each
placement in the [complete placement index](api-reference.md) links to its
corresponding Rustdoc page when the native Rust lens is selected.
