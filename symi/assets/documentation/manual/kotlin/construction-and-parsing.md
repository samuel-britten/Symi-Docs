# Construction and parsing

Build expressions, matrices, geometry values, and callable functions from exact host values or parsed text. Every value belongs to the context that created it.

## Context lifecycle

### new
`context()` (Python) / `new context()` (JS)

Create a fresh context with an empty symbol table and expression store.

### reset_context

<a id="entry-presentation_kotlin_api_session_reset_context"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_resetcontext.392250ac404c"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun resetContext(): Unit
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

<a id="entry-presentation_kotlin_api_session_parse"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_parse.ebc4967062dd"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun parse(text: kotlin.String): UniffiExpression
```


Parse Symi textual syntax into an expression. Accepts `^` and `**` for
powers; knows the builtin function names (`sin`, `log`, `sqrt`, …) and the
constants `pi`, `e`. Raises on syntax errors and on meta-command input.
Parsing is always explicit: strings are not converted by expression-like
parameters.

### parse_latex

<a id="entry-presentation_kotlin_api_session_parse_latex"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_parselatex.ca2875824277"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun parseLatex(latex: kotlin.String): UniffiMathematicalObject
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

<a id="entry-presentation_kotlin_api_session_parse_latex_with_environment"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_parselatexwithenvironment.990e26b1639f"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun parseLatexWithEnvironment(
    latex: kotlin.String,
    serializedDefinitions: List<kotlin.String>,
): UniffiMathematicalObject
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

<a id="entry-presentation_kotlin_api_session_symbol"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_symbol.657cd2aba89b"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun symbol(name: kotlin.String): UniffiExpression
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

<a id="entry-presentation_kotlin_api_session_integer"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_integer.0055610fa2fe"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun integer(value: kotlin.Long): UniffiExpression
```


Build an arbitrary-precision exact integer. Python `bool` values are rejected. JavaScript's
recommended facade accepts `bigint` and safe integral `number` values.

### rational

<a id="entry-presentation_kotlin_api_session_rational"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_rational.fa743ab2a27f"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun rational(
    numerator: kotlin.Long,
    denominator: kotlin.Long,
): UniffiExpression
```



Constructs an exact reduced rational from arbitrary-size
integers. A zero denominator is an argument error. Python also accepts
`fractions.Fraction` wherever an expression-like input is accepted.

### integer_from_string

<a id="entry-presentation_kotlin_api_session_integer_from_string"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_integerfromstring.ed506639aab3"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun integerFromString(text: kotlin.String): UniffiExpression
```


Build an arbitrary-precision integer literal from its decimal string.

### rational_from_float

<a id="entry-presentation_kotlin_api_session_rational_from_float"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_rationalfromfloat.8175ed80093c"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun rationalFromFloat(
    value: kotlin.Double,
    maximumDenominator: kotlin.ULong,
): UniffiExpression
```


Closest rational with denominator \(\leq\) `max_denominator` (the
`Fraction.limit_denominator` algorithm). Raises on non-finite input.

Named unknown functions are built with `undefined_function`, whose handle,
calls, and structural derivatives are documented together in
[Undefined functions](undefined-functions.md).

## Example

