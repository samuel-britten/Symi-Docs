# Diagnostics and outcomes

Public failures use a shared diagnostic taxonomy:

| Category | Meaning |
|---|---|
| `wrong_host_type` | host value has the wrong kind |
| `invalid_exact_conversion` | conversion would be lossy or ambiguous |
| `wrong_collection_shape_or_length` | nesting, dimensions, or paired lengths are invalid |
| `wrong_expression_kind` | a symbolic value is not the required structural kind |
| `context_mismatch` | objects have different owners |
| `stale_object` | a reset or free invalidated the handle |
| `invalid_option` | closed-vocabulary spelling is invalid |
| `mathematical_domain_error` | input is outside the operation's domain |
| `unsupported_or_declined_computation` | the operation could not produce a supported result |
| `indeterminate_proof` | a proposition was neither proved nor disproved |
| `resource_budget_exhaustion` | an explicit materialization or computation budget was reached |
| `internal_verification_failure` | an invariant or result certification failed |

Messages name the operation and parameter path, describe the received and
expected values, and provide a hint when a reliable remediation exists.
Parser diagnostics include a source excerpt and caret.

Python errors use the nearest built-in family while adding the attributes
`category`, `operation`, `parameter_path`, `received`, `expected`, and `hint`.
JavaScript facade errors derive from `SymiError`; specialized subclasses
distinguish type, context, domain, resource, and internal failures. Rust
returns `ApiError`, which implements `std::error::Error` and produces the same
structured diagnostic record.

Invalid input is never encoded as a mathematical `undefined`, empty list, or
`None`. Conversely, a declined computation is not automatically an exception:
operations whose mathematical contract permits an unevaluated result return
that expression, and algorithms with distinct outcome states use structured
`solved`, `empty`, `positive_dimensional`, and `declined` variants. A
three-valued logical `None`/`null` means unknown, not malformed input.

## Example

Failures carry a stable category, parameter path, and hint.

```javascript
try {
    symi.integer(1.5);
} catch (error) {
    console.log(error.category, error.operation, error.parameterPath);
    console.log(error.received, error.expected, error.hint);
}
```


## Additional API

### SymiError

#### SymiError.category

<a id="entry-presentation_wasm_host_wasm_symierror_category"></a>
<a id="placement-placement.wasm.javascript_facade.symierror_category.6b54a640412f"></a>
<p class="symi-entry-owner">SymiError property</p>

```typescript signature
readonly category: DiagnosticCategory
```

Public property placement for category.

#### SymiError.code

<a id="entry-presentation_wasm_host_wasm_symierror_code"></a>
<a id="placement-placement.wasm.javascript_facade.symierror_code.30f9d8518f8d"></a>
<p class="symi-entry-owner">SymiError property</p>

```typescript signature
readonly code: DiagnosticCategory
```

Public property placement for code.

#### SymiError.expected

<a id="entry-presentation_wasm_host_wasm_symierror_expected"></a>
<a id="placement-placement.wasm.javascript_facade.symierror_expected.a59eda760e94"></a>
<p class="symi-entry-owner">SymiError property</p>

```typescript signature
readonly expected: string | null
```

Public property placement for expected.

#### SymiError.hint

<a id="entry-presentation_wasm_host_wasm_symierror_hint"></a>
<a id="placement-placement.wasm.javascript_facade.symierror_hint.dc290abb816b"></a>
<p class="symi-entry-owner">SymiError property</p>

```typescript signature
readonly hint: string | null
```

Public property placement for hint.

#### SymiError.operation

<a id="entry-presentation_wasm_host_wasm_symierror_operation"></a>
<a id="placement-placement.wasm.javascript_facade.symierror_operation.27d0151a414d"></a>
<p class="symi-entry-owner">SymiError property</p>

```typescript signature
readonly operation: string | null
```

Public property placement for operation.

#### SymiError.parameterPath

<a id="entry-presentation_wasm_host_wasm_symierror_parameterpath"></a>
<a id="placement-placement.wasm.javascript_facade.symierror_parameterpath.4560085cfcfd"></a>
<p class="symi-entry-owner">SymiError property</p>

```typescript signature
readonly parameterPath: string | null
```

Public property placement for parameterPath.

#### SymiError.received

<a id="entry-presentation_wasm_host_wasm_symierror_received"></a>
<a id="placement-placement.wasm.javascript_facade.symierror_received.ae703f25576e"></a>
<p class="symi-entry-owner">SymiError property</p>

```typescript signature
readonly received: string | null
```

Public property placement for received.

