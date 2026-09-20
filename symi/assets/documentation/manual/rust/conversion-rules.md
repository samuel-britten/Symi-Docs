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

## Additional API

### ExactIntegerInput

<a id="entry-presentation_rust_api_exactintegerinput"></a>
<a id="placement-placement.rust.native_rust.api_exactintegerinput.29bcf30db214"></a>
<p class="symi-entry-owner">api trait</p>

```rust signature
pub trait ExactIntegerInput
```

Public native trait named `exact_integer_input`.

### ExpressionInput

<a id="entry-presentation_rust_api_expressioninput"></a>
<a id="placement-placement.rust.native_rust.api_expressioninput.c6a9fbb55915"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use input::ExpressionInput;
```

A binding-neutral value classified by a host adapter before native resolution.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_input_expressioninput.aaee2f91e0a9"></a>
<p class="symi-entry-owner">Type: <code>api::input::ExpressionInput</code></p>

```rust signature
pub enum ExpressionInput
```

</details>

#### ExpressionInput.ExactIntegerText

<a id="entry-presentation_rust_api_expressioninput_exactintegertext"></a>
<a id="placement-placement.rust.native_rust.api_input_expressioninput_exactintegertext.de2b684ab811"></a>
<p class="symi-entry-owner">api::input::ExpressionInput variant</p>

```rust signature
ExactIntegerText(String)
```

A base-ten exact integer literal.

#### ExpressionInput.ExactRationalText

<a id="entry-presentation_rust_api_expressioninput_exactrationaltext"></a>
<a id="placement-placement.rust.native_rust.api_input_expressioninput_exactrationaltext.da969c41ea0d"></a>
<p class="symi-entry-owner">api::input::ExpressionInput variant</p>

```rust signature
ExactRationalText(String)
```

A base-ten exact rational literal in integer or `numerator/denominator` form.

#### ExpressionInput.Expression

<a id="entry-presentation_rust_api_expressioninput_expression"></a>
<a id="placement-placement.rust.native_rust.api_input_expressioninput_expression.392f34bb53e6"></a>
<p class="symi-entry-owner">api::input::ExpressionInput variant</p>

```rust signature
Expression(Expression)
```

An expression handle that must belong to the receiving session.

#### ExpressionInput.ExpressionText

<a id="entry-presentation_rust_api_expressioninput_expressiontext"></a>
<a id="placement-placement.rust.native_rust.api_input_expressioninput_expressiontext.acbd8005e1a3"></a>
<p class="symi-entry-owner">api::input::ExpressionInput variant</p>

```rust signature
ExpressionText(String)
```

Text that is parsed as a Symi expression.

#### ExpressionInput.resolve

<a id="entry-presentation_rust_api_expressioninput_resolve"></a>
<a id="placement-placement.rust.native_rust.api_input_expressioninput_resolve.8f8b607049d0"></a>
<p class="symi-entry-owner">api::input::ExpressionInput method</p>

```rust signature
pub fn resolve(self, session: &Session) -> Result<Expression, ApiError>
```

Resolves this classified input in `session` while enforcing native ownership rules.

### VariableLike

<a id="entry-presentation_rust_api_variablelike"></a>
<a id="placement-placement.rust.native_rust.api_variablelike.c03e54602c77"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum VariableLike<'a>
```

Public native enumeration named `variable_like`.

#### VariableLike.Name

<a id="entry-presentation_rust_api_variablelike_name"></a>
<a id="placement-placement.rust.native_rust.api_variablelike_name.7d48ee710203"></a>
<p class="symi-entry-owner">api::VariableLike variant</p>

```rust signature
Name(&'a str)
```

Represents the `name` case.

#### VariableLike.Symbol

<a id="entry-presentation_rust_api_variablelike_symbol"></a>
<a id="placement-placement.rust.native_rust.api_variablelike_symbol.ea108610c8bd"></a>
<p class="symi-entry-owner">api::VariableLike variant</p>

```rust signature
Symbol(&'a Expression)
```

Represents the `symbol` case.

