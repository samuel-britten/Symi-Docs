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

```python
import symi

try:
    symi.integer(1.5)
except TypeError as error:
    print(error.category, error.operation, error.parameter_path)
    print(error.received, error.expected)
    print(error.hint)
```

