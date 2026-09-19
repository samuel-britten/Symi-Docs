# Construction and parsing

Build expressions, matrices, geometry values, and callable functions from exact host values or parsed text. Every value belongs to the context that created it.

## Context lifecycle

### new
`context()` (Python) / `new context()` (JS)

Create a fresh context with an empty symbol table and expression store.

### reset_context

<a id="entry-presentation_rust_construction_and_parsing_capability_rust_native_rust_api_session_reset_context_unnamed"></a>
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

<a id="entry-presentation_rust_construction_and_parsing_capability_rust_native_rust_api_session_parse_unnamed"></a>
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

<a id="entry-presentation_rust_construction_and_parsing_capability_rust_native_rust_api_serialization_session_parse_latex_unnamed"></a>
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

<a id="entry-presentation_rust_construction_and_parsing_capability_rust_native_rust_api_serialization_session_parse_latex_with_environment_unnamed"></a>
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

<a id="entry-presentation_rust_construction_and_parsing_capability_rust_native_rust_api_session_symbol_unnamed"></a>
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

<a id="entry-presentation_rust_construction_and_parsing_capability_integer_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_integer.b307d00d6db8"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn integer<IntegerType: ExactIntegerInput>(
    &self,
    value: IntegerType,
) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_symboldeclaration_integer.f5df3ac24a91"></a>
<p class="symi-entry-owner">api::SymbolDeclaration field: <code>api::SymbolDeclaration::integer</code></p>

```rust signature
pub integer:
```

</details>


Build an arbitrary-precision exact integer. Python `bool` values are rejected. JavaScript's
recommended facade accepts `bigint` and safe integral `number` values.

### rational

<a id="entry-presentation_rust_construction_and_parsing_capability_rational_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_rational.f8635006d2e3"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn rational<NumeratorType: ExactIntegerInput, DenominatorType: ExactIntegerInput>(
    &self,
    numerator: NumeratorType,
    denominator: DenominatorType,
) -> Result<Expression, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_symboldeclaration_rational.f7d69b438646"></a>
<p class="symi-entry-owner">api::SymbolDeclaration field: <code>api::SymbolDeclaration::rational</code></p>

```rust signature
pub rational:
```

</details>



Constructs an exact reduced rational from arbitrary-size
integers. A zero denominator is an argument error. Python also accepts
`fractions.Fraction` wherever an expression-like input is accepted.

### integer_from_string

<a id="entry-presentation_rust_construction_and_parsing_capability_rust_native_rust_api_session_integer_from_string_unnamed"></a>
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

<a id="entry-presentation_rust_construction_and_parsing_capability_rust_native_rust_api_analysis_session_rational_from_float_unnamed"></a>
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

### undefined_function

<a id="entry-presentation_rust_construction_and_parsing_capability_rust_native_rust_api_session_undefined_function_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_undefined_function.b08154793cea"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn undefined_function(
    &self,
    name: impl Into<String>,
) -> UndefinedFunction
```


A callable proxy for a user-named function. Calling it with expression
arguments builds the function-call expression (see the object-model page and
the worked ODE example).

### call

<a id="entry-presentation_rust_construction_and_parsing_capability_rust_native_rust_api_undefinedfunction_call_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_undefinedfunction_call.965b62005306"></a>
<p class="symi-entry-owner">api::UndefinedFunction method</p>

```rust signature
pub fn call<IteratorType>(
    &self,
    arguments: IteratorType,
) -> Result<Expression, ApiError>
where
    IteratorType: IntoIterator<Item = Expression>,
```


WASM spelling of the Python `f(x, …)` call syntax on `UndefinedFunction`.

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

### Symbol

<a id="entry-presentation_rust_construction_and_parsing_capability_rust_native_rust_api_variablelike_symbol_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_variablelike_symbol.ea108610c8bd"></a>
<p class="symi-entry-owner">api::VariableLike variant</p>

```rust signature
Symbol(&'a Expression)
```

Public variant placement for Symbol.

