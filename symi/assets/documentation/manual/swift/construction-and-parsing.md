# Construction and parsing

Build expressions, matrices, geometry values, and callable functions from exact host values or parsed text. Every value belongs to the context that created it.

## Context lifecycle

### new
`context()` (Python) / `new context()` (JS)

Create a fresh context with an empty symbol table and expression store.

### reset_context

<a id="entry-presentation_swift_construction_and_parsing_capability_construction_reset_context_api_session_reset_context"></a>
<a id="placement-placement.swift.swift_object.uniffisession_resetcontext.cff4e8511c86"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func resetContext() -> Void
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

<a id="entry-presentation_swift_construction_and_parsing_capability_construction_parse_api_session_parse"></a>
<a id="placement-placement.swift.swift_object.uniffisession_parse.020527a7a8e8"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func parse(text: String) -> UniffiExpression
```


Parse Symi textual syntax into an expression. Accepts `^` and `**` for
powers; knows the builtin function names (`sin`, `log`, `sqrt`, …) and the
constants `pi`, `e`. Raises on syntax errors and on meta-command input.
Parsing is always explicit: strings are not converted by expression-like
parameters.

### parse_latex

<a id="entry-presentation_swift_construction_and_parsing_capability_construction_parse_latex_api_serialization_session_parse_latex"></a>
<a id="placement-placement.swift.swift_object.uniffisession_parselatex.c6c593fb2b63"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func parseLatex(latex: String) -> UniffiMathematicalObject
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

<a id="entry-presentation_swift_construction_and_parsing_capability_construction_parse_latex_with_environment_api_serialization_session_parse_latex_with_environment"></a>
<a id="placement-placement.swift.swift_object.uniffisession_parselatexwithenvironment.c877ae885b71"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func parseLatexWithEnvironment(
    latex: String,
    serializedDefinitions: [String],
) -> UniffiMathematicalObject
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

<a id="entry-presentation_swift_construction_and_parsing_capability_construction_symbol_api_session_symbol"></a>
<a id="placement-placement.swift.swift_object.uniffisession_symbol.d55684481496"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func symbol(name: String) -> UniffiExpression
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

<a id="entry-presentation_swift_construction_and_parsing_capability_construction_integer_api_session_integer"></a>
<a id="placement-placement.swift.swift_object.uniffisession_integer.a403f6f0d9d6"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func integer(value: Int64) -> UniffiExpression
```


Build an arbitrary-precision exact integer. Python `bool` values are rejected. JavaScript's
recommended facade accepts `bigint` and safe integral `number` values.

### rational

<a id="entry-presentation_swift_construction_and_parsing_capability_construction_rational_api_session_rational"></a>
<a id="placement-placement.swift.swift_object.uniffisession_rational.91a4056839d6"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func rational(numerator: Int64, denominator: Int64) -> UniffiExpression
```



Constructs an exact reduced rational from arbitrary-size
integers. A zero denominator is an argument error. Python also accepts
`fractions.Fraction` wherever an expression-like input is accepted.

### integer_from_string

<a id="entry-presentation_swift_construction_and_parsing_capability_construction_integer_from_string_api_session_integer_from_string"></a>
<a id="placement-placement.swift.swift_object.uniffisession_integerfromstring.7bbdff04fb08"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func integerFromString(text: String) -> UniffiExpression
```


Build an arbitrary-precision integer literal from its decimal string.

### rational_from_float

<a id="entry-presentation_swift_construction_and_parsing_capability_construction_rational_from_float_api_analysis_session_rational_from_float"></a>
<a id="placement-placement.swift.swift_object.uniffisession_rationalfromfloat.f14c84b372ca"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func rationalFromFloat(
    value: Double,
    maximumDenominator: UInt64,
) -> UniffiExpression
```


Closest rational with denominator \(\leq\) `max_denominator` (the
`Fraction.limit_denominator` algorithm). Raises on non-finite input.

### undefined_function

<a id="entry-presentation_swift_construction_and_parsing_capability_construction_undefined_function_api_session_undefined_function"></a>
<a id="placement-placement.swift.swift_object.uniffisession_undefinedfunction.69ab34c3796f"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func undefinedFunction(name: String) -> UniffiUndefinedFunction
```


A callable proxy for a user-named function. Calling it with expression
arguments builds the function-call expression (see the object-model page and
the worked ODE example).

### call

<a id="entry-presentation_swift_construction_and_parsing_capability_construction_call_api_undefinedfunction_call"></a>
<a id="placement-placement.swift.swift_object.uniffiundefinedfunction_call.feef249df282"></a>
<p class="symi-entry-owner">UniffiUndefinedFunction method</p>

```swift signature
func call(arguments: [UniffiExpression]) -> UniffiExpression
```


WASM spelling of the Python `f(x, …)` call syntax on `UndefinedFunction`.

## Example

