# Conversions and collections

Automatic conversion is limited to values whose symbolic meaning is exact,
unambiguous, context-safe, and unsurprising in the host language.

## Expression-like values

| Host | Accepted automatically | Rejected automatically |
|---|---|---|
| Python | same-context `Expression`, arbitrary-size `int` except `bool`, `fractions.Fraction` | `float`, `str`, `bool`, foreign or stale expressions |
| JavaScript facade | same-context expression, `bigint`, safe integral `number` | nonintegral or unsafe `number`, strings, foreign or stale expressions |
| Rust facade | same-session expression, primitive integers, exact integer/rational inputs | floats, foreign or stale handles |

Use `integer` and `rational(numerator, denominator)` for explicit exact
construction. A denominator of zero is a mathematical-domain error. Python
fractions and all rational constructors preserve arbitrary precision. The
legacy `rational_from_float` operation is explicitly approximate-to-exact and
is never used implicitly.

Text is parsed only by `parse`. A string supplied to an expression-like
parameter is not treated as mathematics.

## Variable-like values

A variable parameter accepts a name or a same-context expression whose
top-level kind is exactly a symbol:

```python
x = symi.symbol("x")
symi.differentiate(x**2, x)
symi.differentiate(x**2, "x")
```


A compound expression is not a variable. The resulting diagnostic identifies
the parameter and reports `wrong_expression_kind`. APIs that intentionally
accept a polynomial generator broader than a symbol document it as a
generator-like value.

## Collection categories

| Category | Python | JavaScript facade | Rust facade |
|---|---|---|---|
| Ordered sequence | finite ordered iterable; rejects `set` and `frozenset` | finite iterable; a `Set` is rejected where order matters | `IntoIterator` |
| Unordered mathematical collection | any finite iterable, including sets | any finite iterable, including `Set` | `IntoIterator`, canonicalized by the operation |
| Named logical records | mapping, dataclass-like object, or documented tuple compatibility form | object records | typed structs or tuples |
| Parallel ordered sequences | fully materialized; lengths must agree | fully materialized; lengths must agree | collected and length-checked |

Examples of ordered inputs are matrix rows, coordinates, piecewise branches,
and iterated binders. Finite-set members are unordered. A parameter that
expects a mathematical set accepts either a set expression or a host finite
collection converted to `finite_set`; an ordinary expression parameter does
not reinterpret a list as a set.

Strings and bytes are excluded from generic iterable conversion. Every
binding materializes and validates the whole iterable before mutating a
context. Materialization has a bounded entry budget, so an infinite iterator
reports `resource_budget_exhaustion` instead of hanging.

## Options

Closed vocabularies use canonical underscore spellings. Limit directions are
`two_sided`, `from_left`, and `from_right`. Invalid values identify the
received spelling and list the accepted choices; no option silently falls
back to a default.
