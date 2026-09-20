# Construction and parsing

Build expressions, matrices, geometry values, and callable functions from exact host values or parsed text. Every value belongs to the context that created it.

## Context lifecycle

### new
`context()` (Python) / `new context()` (JS)

Create a fresh context with an empty symbol table and expression store.

### reset_context

<a id="entry-presentation_rust_api_session_reset_context"></a>
<a id="placement-placement.rust.native_rust.api_session_reset_context.a0cb4531009e"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn reset_context(&self) -> Result<(), ApiError>
```


Replace the context's entire symbol table and expression store with fresh
empty ones. **Warning:** existing `Expression`/`Matrix`/geometry objects from
this context become stale and must not be used afterwards — their symbol
identifiers no longer resolve. Deliberately not available at module level:
resetting the shared default context would strand every live object, and the
weak expression store already keeps memory bounded by live objects (see
[the default context](default-context.md)).

## Parsing and building

### parse

<a id="entry-presentation_rust_api_session_parse"></a>
<a id="placement-placement.rust.native_rust.api_session_parse.98b4924e2023"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn parse(&self, text: &str) -> Result<Expression, ApiError>
```


Parse Symi textual syntax into an expression. Accepts `^` and `**` for
powers; knows the builtin function names (`sin`, `log`, `sqrt`, …) and the
constants `pi`, `e`. Raises on syntax errors and on meta-command input.
Parsing is always explicit: strings are not converted by expression-like
parameters.

### parse_latex

<a id="entry-presentation_rust_api_session_parse_latex"></a>
<a id="placement-placement.rust.native_rust.api_serialization_session_parse_latex.79a92eea5dd7"></a>
<p class="symi-entry-owner">api::serialization::Session method</p>

```rust signature
pub fn parse_latex(
    &self,
    latex: &str,
) -> Result<MathematicalObject, ApiError>
```


Parse a LaTeX string in Symi's canonical input dialect — the inverse of
[`to_latex`](serialization-and-output.md#to_latex) and the parser the Symi frontend uses.
Returns whichever top-level object the input denotes: an ordinary expression, a
`\begin{matrix}…\end{matrix}`, or a geometry figure (`(x, y)` point, segment,
polygon, or circle), wrapped in the matching exported class exactly as
[`parse_serialized_object`](serialization-and-output.md#parse_serialized_object) does. Coverage spans
arithmetic, powers, fractions, roots, the elementary and many special functions,
comparisons, integrals (including the bare-`d` differential), Leibniz
derivatives (`\frac{d}{dx}` — differentiated eagerly), limits, summations,
products, determinants, and actuarial annuities. The resolution is
context-aware in a way `parse` is not: a bare `i` is the imaginary unit and a
bare `e` is Euler's number unless the letter is a bound index (a summation /
product / limit index shadows the constant), and `\mathrm{d}` — or a bare `d`
that closes an integral — is the differential operator while a bare `d`
elsewhere is an ordinary variable. Raises on syntax errors.

MathQuill-style one-character scripts may be bare or braced. For example,
`\int_a^2 xdx`, `\sum_{i=1}^a i`, `\prod_{i=1}^a i`, `\sin^a(x)`, and
`\log_a(x)` are equivalent to their braced forms. General script expressions
remain braced, such as `\log_{a+1}(x)`. Binder variables shadow definitions in
their bodies, while free names in bounds remain available for environment
expansion.

### parse_latex_with_environment

<a id="entry-presentation_rust_api_session_parse_latex_with_environment"></a>
<a id="placement-placement.rust.native_rust.api_serialization_session_parse_latex_with_environment.05017f9a72f3"></a>
<p class="symi-entry-owner">api::serialization::Session method</p>

```rust signature
pub fn parse_latex_with_environment(
    &self,
    latex: &str,
    serialized_definitions: &[String],
) -> Result<MathematicalObject, ApiError>
```


Parse LaTeX after building an ordered definition environment. Each serialized
definition is a string with four fields separated by ASCII Unit Separator
(`U+001F`): `kind`, `name`, `parameters`, and `body_latex`. `kind` is `object`
or `function`; object parameters are empty, while function parameters are
separated by ASCII Record Separator (`U+001E`). For example,
`object\x1fa\x1f\x1f5` followed by `function\x1ff\x1fx\x1fx^2` makes
`f(a)` parse to `25`. Definitions are parsed in list order using the environment
accumulated so far. The delimiters are rejected inside fields. Also available
as a module-level function.

### symbol

<a id="entry-presentation_rust_api_session_symbol"></a>
<a id="placement-placement.rust.native_rust.api_session_symbol.9302d6a9670a"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn symbol(&self, name: &str) -> Expression
```


Intern a symbol and (optionally) attach assumptions used by the assumption
engine and the simplifier. Domain flags refine in the order `natural` \(\to\)
`integer` \(\to\) `rational` \(\to\) `real`; `positive`/`negative` also set nonzero, and
`nonzero` may be requested independently.

**Notes:** assumptions are per-context, per-name, and sticky: re-interning the
same name keeps previously set assumptions, and a refinement applies
retroactively to every existing expression containing the symbol. Refinement
is monotonic — strengthening an unknown property is allowed; contradicting an
earlier declaration (e.g. `positive=True` after `negative=True`, or widening
the domain) raises an error naming the clash. Use
[`clear_assumptions`](default-context.md#clear_assumptions) to start a symbol
over.

### integer

<a id="entry-presentation_rust_api_session_integer"></a>
<a id="placement-placement.rust.native_rust.api_session_integer.b307d00d6db8"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn integer<IntegerType: ExactIntegerInput>(
    &self,
    value: IntegerType,
) -> Expression
```


Build an arbitrary-precision exact integer. Python `bool` values are rejected. JavaScript's
recommended facade accepts `bigint` and safe integral `number` values.

### rational

<a id="entry-presentation_rust_api_session_rational"></a>
<a id="placement-placement.rust.native_rust.api_session_rational.f8635006d2e3"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn rational<NumeratorType: ExactIntegerInput, DenominatorType: ExactIntegerInput>(
    &self,
    numerator: NumeratorType,
    denominator: DenominatorType,
) -> Result<Expression, ApiError>
```



Constructs an exact reduced rational from arbitrary-size
integers. A zero denominator is an argument error. Python also accepts
`fractions.Fraction` wherever an expression-like input is accepted.

### integer_from_string

<a id="entry-presentation_rust_api_session_integer_from_string"></a>
<a id="placement-placement.rust.native_rust.api_session_integer_from_string.4bd26e7f245f"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn integer_from_string(
    &self,
    text: &str,
) -> Result<Expression, ApiError>
```


Build an arbitrary-precision integer literal from its decimal string.

### rational_from_float

<a id="entry-presentation_rust_api_session_rational_from_float"></a>
<a id="placement-placement.rust.native_rust.api_analysis_session_rational_from_float.4700f138745f"></a>
<p class="symi-entry-owner">api::analysis::Session method</p>

```rust signature
pub fn rational_from_float(
    &self,
    value: f64,
    maximum_denominator: u64,
) -> Result<Expression, ApiError>
```


Closest rational with denominator \(\leq\) `max_denominator` (the
`Fraction.limit_denominator` algorithm). Raises on non-finite input.

Named unknown functions are built with `undefined_function`, whose handle,
calls, and structural derivatives are documented together in
[Undefined functions](undefined-functions.md).

## Example

Build the same expression from a literal, a parse, and exact numeric constructors.

```rust
use symi::api::prelude::*;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let session = Session::new();
    let x = session.symbol("x");

    println!("{}", session.parse("x^2 + 2*x + 1")?);
    println!("{}", session.power(&x, &session.integer(2))?);
    println!("{}", session.rational(2, 3)?);
    Ok(())
}
```


## Additional API

### api::input

<a id="entry-presentation_rust_native_module_api_input"></a>
<a id="placement-placement.rust.native_rust.api_input.8a9e72fb40a6"></a>
<p class="symi-entry-owner">api module</p>

```rust signature
pub mod input;
```

Binding-neutral input types resolved by the native API.

### integer_from_decimal

<a id="entry-presentation_rust_api_session_integer_from_decimal"></a>
<a id="placement-placement.rust.native_rust.api_session_integer_from_decimal.2d2b8493a55f"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn integer_from_decimal(
    &self,
    text: &str,
) -> Result<Expression, ApiError>
```

Constructs an exact integer expression from a base-ten literal.

### rational_from_decimal

<a id="entry-presentation_rust_api_session_rational_from_decimal"></a>
<a id="placement-placement.rust.native_rust.api_session_rational_from_decimal.f6490051ed73"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn rational_from_decimal(
    &self,
    text: &str,
) -> Result<Expression, ApiError>
```

Constructs an exact rational expression from a base-ten integer or fraction literal.

### rational_value

<a id="entry-presentation_rust_api_session_rational_value"></a>
<a id="placement-placement.rust.native_rust.api_session_rational_value.3ed6fbe3f4fb"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn rational_value(&self, value: exact_rational) -> Expression
```

Provides the `rational_value` operation on this native type.

### variable_identifiers

<a id="entry-presentation_rust_api_session_variable_identifiers"></a>
<a id="placement-placement.rust.native_rust.api_session_variable_identifiers.dcc3cb9dc75f"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn variable_identifiers<'a, IteratorType, VariableType>(
    &self,
    variables: IteratorType,
) -> Result<Vec<crate::symbol::SymbolIdentifier>, ApiError>
where
    IteratorType: IntoIterator<Item = VariableType>,
    VariableType: Into<VariableLike<'a>>,
```

Resolve a collection of variable operands to interned symbol identifiers.

### SymbolDeclaration

<a id="entry-presentation_rust_api_symboldeclaration"></a>
<a id="placement-placement.rust.native_rust.api_symboldeclaration.ea1f2e5c2494"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct SymbolDeclaration
```

Public native trait named `exact_integer_input`. The scalar facts a binding may attach to a symbol at interning time.

#### SymbolDeclaration.finite

<a id="entry-presentation_rust_api_symboldeclaration_finite"></a>
<a id="placement-placement.rust.native_rust.api_symboldeclaration_finite.ba52d108961e"></a>
<p class="symi-entry-owner">api::SymbolDeclaration field</p>

```rust signature
pub finite:
```

Declares the symbol finite.

#### SymbolDeclaration.integer

<a id="entry-presentation_rust_api_symboldeclaration_integer"></a>
<a id="placement-placement.rust.native_rust.api_symboldeclaration_integer.f5df3ac24a91"></a>
<p class="symi-entry-owner">api::SymbolDeclaration field</p>

```rust signature
pub integer:
```

Declares the symbol an integer.

#### SymbolDeclaration.natural

<a id="entry-presentation_rust_api_symboldeclaration_natural"></a>
<a id="placement-placement.rust.native_rust.api_symboldeclaration_natural.455d307046dd"></a>
<p class="symi-entry-owner">api::SymbolDeclaration field</p>

```rust signature
pub natural:
```

Declares the symbol a natural number.

#### SymbolDeclaration.negative

<a id="entry-presentation_rust_api_symboldeclaration_negative"></a>
<a id="placement-placement.rust.native_rust.api_symboldeclaration_negative.564fad1f2247"></a>
<p class="symi-entry-owner">api::SymbolDeclaration field</p>

```rust signature
pub negative:
```

Declares the symbol negative.

#### SymbolDeclaration.nonzero

<a id="entry-presentation_rust_api_symboldeclaration_nonzero"></a>
<a id="placement-placement.rust.native_rust.api_symboldeclaration_nonzero.f19a4992ce86"></a>
<p class="symi-entry-owner">api::SymbolDeclaration field</p>

```rust signature
pub nonzero:
```

Declares the symbol nonzero.

#### SymbolDeclaration.positive

<a id="entry-presentation_rust_api_symboldeclaration_positive"></a>
<a id="placement-placement.rust.native_rust.api_symboldeclaration_positive.a3b681fcf1fc"></a>
<p class="symi-entry-owner">api::SymbolDeclaration field</p>

```rust signature
pub positive:
```

Declares the symbol positive.

#### SymbolDeclaration.rational

<a id="entry-presentation_rust_api_symboldeclaration_rational"></a>
<a id="placement-placement.rust.native_rust.api_symboldeclaration_rational.f7d69b438646"></a>
<p class="symi-entry-owner">api::SymbolDeclaration field</p>

```rust signature
pub rational:
```

Declares the symbol rational.

#### SymbolDeclaration.real

<a id="entry-presentation_rust_api_symboldeclaration_real"></a>
<a id="placement-placement.rust.native_rust.api_symboldeclaration_real.a208a60d0b05"></a>
<p class="symi-entry-owner">api::SymbolDeclaration field</p>

```rust signature
pub real:
```

Declares the symbol real.

