# Construction and parsing

Build expressions, matrices, geometry values, and callable functions from exact host values or parsed text. Every value belongs to the context that created it.

## Context lifecycle

### new
`context()` (Python) / `new context()` (JS)

Create a fresh context with an empty symbol table and expression store.

### reset_context

<a id="placement-placement.python.python_class.context_reset_context.7c05f08677d0"></a>
`Context.reset_context()`


Replace the context's entire symbol table and expression store with fresh
empty ones. **Warning:** existing `Expression`/`Matrix`/geometry objects from
this context become stale and must not be used afterwards — their symbol
identifiers no longer resolve. Deliberately not available at module level:
resetting the shared default context would strand every live object, and the
weak expression store already keeps memory bounded by live objects (see
[the default context](default-context.md)).

## Parsing and building

### parse

<a id="placement-placement.python.python_class.context_parse.8bb4dfb283da"></a>
`Context.parse(text)`

<a id="placement-placement.python.python_module.module_parse.5ce2d5b2fa9b"></a>
`symi.parse(text)`


Parse Symi textual syntax into an expression. Accepts `^` and `**` for
powers; knows the builtin function names (`sin`, `log`, `sqrt`, …) and the
constants `pi`, `e`. Raises on syntax errors and on meta-command input.
Parsing is always explicit: strings are not converted by expression-like
parameters.

### parse_latex

<a id="placement-placement.python.python_class.context_parse_latex.3bc82c724992"></a>
`Context.parse_latex(latex)`

<a id="placement-placement.python.python_module.module_parse_latex.aafb58fb41c7"></a>
`symi.parse_latex(latex)`


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

<a id="placement-placement.python.python_class.context_parse_latex_with_environment.e2b51d1a6af8"></a>
`Context.parse_latex_with_environment(latex, serialized_definitions)`

<a id="placement-placement.python.python_module.module_parse_latex_with_environment.217e1bf2dc8a"></a>
`symi.parse_latex_with_environment(latex, serialized_definitions)`


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

<a id="placement-placement.python.python_class.context_symbol.fdaf791acf11"></a>
`Context.symbol(name, real=False, positive=False, negative=False, integer=False, finite=False, rational=False, natural=False, nonzero=False)`

<a id="placement-placement.python.python_module.module_symbol.13b49e0351f9"></a>
`symi.symbol(name, real=False, positive=False, negative=False, integer=False, finite=False, rational=False, natural=False, nonzero=False)`


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

<a id="placement-placement.python.python_class.context_integer.efdfe76bbc61"></a>
`Context.integer(value)`

<a id="placement-placement.python.python_module.module_integer.49c85c5856ea"></a>
`symi.integer(value)`


Build an arbitrary-precision exact integer. Python `bool` values are rejected. JavaScript's
recommended facade accepts `bigint` and safe integral `number` values.

### rational

<a id="placement-placement.python.python_class.context_rational.8866c3776b8e"></a>
`Context.rational(numerator, denominator)`

<a id="placement-placement.python.python_module.module_rational.21ee0367e6e1"></a>
`symi.rational(numerator, denominator)`



Constructs an exact reduced rational from arbitrary-size
integers. A zero denominator is an argument error. Python also accepts
`fractions.Fraction` wherever an expression-like input is accepted.

### integer_from_string

<a id="placement-placement.python.python_class.context_integer_from_string.f35e45ba7140"></a>
`Context.integer_from_string(text)`

<a id="placement-placement.python.python_module.module_integer_from_string.552ac2e82ab4"></a>
`symi.integer_from_string(text)`


Build an arbitrary-precision integer literal from its decimal string.

### rational_from_float

<a id="placement-placement.python.python_class.context_rational_from_float.08b0f2b8a5dc"></a>
`Context.rational_from_float(value, max_denominator)`

<a id="placement-placement.python.python_module.module_rational_from_float.30ffeabe86b0"></a>
`symi.rational_from_float(value, max_denominator)`


Closest rational with denominator \(\leq\) `max_denominator` (the
`Fraction.limit_denominator` algorithm). Raises on non-finite input.

### undefined_function

<a id="placement-placement.python.python_class.context_undefined_function.69ef6c5c895b"></a>
`Context.undefined_function(name)`


A callable proxy for a user-named function. Calling it with expression
arguments builds the function-call expression (see the object-model page and
the worked ODE example).

### call

*Not exposed by the Python bindings. Available as [`UniffiUndefinedFunction.call`](/symi/kotlin/construction-and-parsing#call) in Kotlin, [`UniffiUndefinedFunction.call`](/symi/swift/construction-and-parsing#call) in Swift, [`api::UndefinedFunction::call`](/symi/rust/construction-and-parsing#call) in Rust.*


WASM spelling of the Python `f(x, …)` call syntax on `UndefinedFunction`.

## Example

Build the same expression from a literal, a parse, and exact numeric constructors.

```python
import symi

x = symi.symbol("x", positive=True)

print(symi.parse("x^2 + 2*x + 1"))
print(x**2 + 2 * x + 1)
print(symi.rational(2, 3) + symi.integer(1))
print(symi.parse_latex(r"\frac{1}{2} + x"))
```


## Additional API

<a id="placement-placement.python.python_class.undefinedfunction.28fd52ba99ea"></a>
### UndefinedFunction

`class symi.UndefinedFunction`

Returns `undefined_function`.

