# Construction and parsing

Build expressions, matrices, geometry values, and callable functions from exact host values or parsed text. Every value belongs to the context that created it.

## Context lifecycle

### new
`context()` (Python) / `new context()` (JS)

Create a fresh context with an empty symbol table and expression store.

### reset_context

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.reset_context`](/symi/python/construction-and-parsing#reset_context) in Python, [`UniffiSession.resetContext`](/symi/kotlin/construction-and-parsing#reset_context) in Kotlin, [`UniffiSession.resetContext`](/symi/swift/construction-and-parsing#reset_context) in Swift, [`api::Session::reset_context`](/symi/rust/construction-and-parsing#reset_context) in Rust.*


Replace the context's entire symbol table and expression store with fresh
empty ones. **Warning:** existing `Expression`/`Matrix`/geometry objects from
this context become stale and must not be used afterwards — their symbol
identifiers no longer resolve. Deliberately not available at module level:
resetting the shared default context would strand every live object, and the
weak expression store already keeps memory bounded by live objects (see
[the default context](default-context.md)).

## Parsing and building

### parse

<a id="entry-presentation_wasm_construction_and_parsing_capability_construction_parse_api_session_parse"></a>
<a id="placement-placement.wasm.wasm_module.module_parse.d3722c05cfb1"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
parse(text: string): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_parse.9232ed6b93ca"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.parse</code></p>

```typescript signature
parse(text: string): Expression
```

<a id="placement-placement.wasm.wasm_class.context_parse.6a687da40992"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.parse</code></p>

```typescript signature
parse(text: string): Expression
```

<a id="placement-placement.wasm.javascript_facade.symifacade_parse.b80ff0cf5eec"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.parse</code></p>

```typescript signature
parse(text: string): Expression
```

</details>


Parse Symi textual syntax into an expression. Accepts `^` and `**` for
powers; knows the builtin function names (`sin`, `log`, `sqrt`, …) and the
constants `pi`, `e`. Raises on syntax errors and on meta-command input.
Parsing is always explicit: strings are not converted by expression-like
parameters.

### parse_latex

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.parse_latex`](/symi/python/construction-and-parsing#parse_latex) in Python, [`UniffiSession.parseLatex`](/symi/kotlin/construction-and-parsing#parse_latex) in Kotlin, [`UniffiSession.parseLatex`](/symi/swift/construction-and-parsing#parse_latex) in Swift, [`api::serialization::Session::parse_latex`](/symi/rust/construction-and-parsing#parse_latex) in Rust.*


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

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.parse_latex_with_environment`](/symi/python/construction-and-parsing#parse_latex_with_environment) in Python, [`UniffiSession.parseLatexWithEnvironment`](/symi/kotlin/construction-and-parsing#parse_latex_with_environment) in Kotlin, [`UniffiSession.parseLatexWithEnvironment`](/symi/swift/construction-and-parsing#parse_latex_with_environment) in Swift, [`api::serialization::Session::parse_latex_with_environment`](/symi/rust/construction-and-parsing#parse_latex_with_environment) in Rust.*


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

<a id="entry-presentation_wasm_construction_and_parsing_capability_construction_symbol_api_session_symbol"></a>
<a id="placement-placement.wasm.wasm_module.module_symbol.acdb4c2a07a3"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
symbol(
    name: string,
    real?: boolean | null,
    positive?: boolean | null,
    negative?: boolean | null,
    integer?: boolean | null,
    finite?: boolean | null,
    rational?: boolean | null,
    natural?: boolean | null,
    nonzero?: boolean | null,
): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_symbol.00afc323719f"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.symbol</code></p>

```typescript signature
symbol(name: string): Expression
```

<a id="placement-placement.wasm.wasm_class.context_symbol.018ba3ea3259"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.symbol</code></p>

```typescript signature
symbol(
    name: string,
    real?: boolean | null,
    positive?: boolean | null,
    negative?: boolean | null,
    integer?: boolean | null,
    finite?: boolean | null,
    rational?: boolean | null,
    natural?: boolean | null,
    nonzero?: boolean | null,
): Expression
```

<a id="placement-placement.wasm.javascript_facade.symifacade_symbol.75a86a968259"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.symbol</code></p>

```typescript signature
symbol(name: string): Expression
```

</details>


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

<a id="entry-presentation_wasm_construction_and_parsing_capability_construction_integer_api_session_integer"></a>
<a id="placement-placement.wasm.wasm_module.module_integer.f6358fe8b988"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
integer(value: bigint): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_integer.00fd0a177c13"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.integer</code></p>

```typescript signature
integer(value: bigint | number): Expression
```

<a id="placement-placement.wasm.wasm_class.context_integer.adbc02ce5b38"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.integer</code></p>

```typescript signature
integer(value: bigint): Expression
```

<a id="placement-placement.wasm.javascript_facade.symifacade_integer.d5d69dc27b57"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.integer</code></p>

```typescript signature
integer(value: bigint | number): Expression
```

</details>


Build an arbitrary-precision exact integer. Python `bool` values are rejected. JavaScript's
recommended facade accepts `bigint` and safe integral `number` values.

### rational

<a id="entry-presentation_wasm_construction_and_parsing_capability_construction_rational_api_session_rational"></a>
<a id="placement-placement.wasm.wasm_module.module_rational.b3d3524e7701"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
rational(numerator: string, denominator: string): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_rational.bba5ba8e5c64"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.rational</code></p>

```typescript signature
rational(numerator: bigint | number, denominator: bigint | number): Expression
```

<a id="placement-placement.wasm.wasm_class.context_rational.b6817b148a9c"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.rational</code></p>

```typescript signature
rational(numerator: string, denominator: string): Expression
```

<a id="placement-placement.wasm.javascript_facade.symifacade_rational.fe5d8d04f54b"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.rational</code></p>

```typescript signature
rational(numerator: bigint | number, denominator: bigint | number): Expression
```

</details>



Constructs an exact reduced rational from arbitrary-size
integers. A zero denominator is an argument error. Python also accepts
`fractions.Fraction` wherever an expression-like input is accepted.

### integer_from_string

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.integer_from_string`](/symi/python/construction-and-parsing#integer_from_string) in Python, [`UniffiSession.integerFromString`](/symi/kotlin/construction-and-parsing#integer_from_string) in Kotlin, [`UniffiSession.integerFromString`](/symi/swift/construction-and-parsing#integer_from_string) in Swift, [`api::Session::integer_from_string`](/symi/rust/construction-and-parsing#integer_from_string) in Rust.*


Build an arbitrary-precision integer literal from its decimal string.

### rational_from_float

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.rational_from_float`](/symi/python/construction-and-parsing#rational_from_float) in Python, [`UniffiSession.rationalFromFloat`](/symi/kotlin/construction-and-parsing#rational_from_float) in Kotlin, [`UniffiSession.rationalFromFloat`](/symi/swift/construction-and-parsing#rational_from_float) in Swift, [`api::analysis::Session::rational_from_float`](/symi/rust/construction-and-parsing#rational_from_float) in Rust.*


Closest rational with denominator \(\leq\) `max_denominator` (the
`Fraction.limit_denominator` algorithm). Raises on non-finite input.

### undefined_function

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.undefined_function`](/symi/python/construction-and-parsing#undefined_function) in Python, [`UniffiSession.undefinedFunction`](/symi/kotlin/construction-and-parsing#undefined_function) in Kotlin, [`UniffiSession.undefinedFunction`](/symi/swift/construction-and-parsing#undefined_function) in Swift, [`api::Session::undefined_function`](/symi/rust/construction-and-parsing#undefined_function) in Rust.*


A callable proxy for a user-named function. Calling it with expression
arguments builds the function-call expression (see the object-model page and
the worked ODE example).

### call

<a id="entry-presentation_wasm_construction_and_parsing_capability_construction_call_api_undefinedfunction_call"></a>
<a id="placement-placement.wasm.wasm_class.undefinedfunction_call.b0d6218d5723"></a>
<p class="symi-entry-owner">UndefinedFunction method</p>

```typescript signature
call(args: Expression[]): Expression
```


WASM spelling of the Python `f(x, …)` call syntax on `UndefinedFunction`.

## Example

Build the same expression from a literal, a parse, and exact numeric constructors.

```javascript
const x = symi.symbol("x");

console.log(symi.parse("x^2 + 2*x + 1").toString());
console.log(x.power(2).add(x.multiply(2)).add(1).toString());
console.log(symi.rational(2n, 3n).add(symi.integer(1n)).toString());
```


## Additional API

### integerFromString

<a id="entry-presentation_wasm_construction_and_parsing_capability_construction_integer_from_string_api_session_integer_from_string"></a>
<a id="placement-placement.wasm.wasm_module.module_integerfromstring.f1a005df6d84"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
integerFromString(text: string): Expression
```

Build an arbitrary-precision integer literal from its decimal string.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_integerfromstring.dac330233bfa"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.integerFromString</code></p>

```typescript signature
integerFromString(text: string): Expression
```

</details>

### productIndefinite

<a id="entry-presentation_wasm_construction_and_parsing_capability_construction_product_indefinite_api_analysis_session_product_indefinite"></a>
<a id="placement-placement.wasm.wasm_module.module_productindefinite.fd08393adc04"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
productIndefinite(multiplicand: Expression, index: string): Expression
```

Indefinite (anti-quotient) product: the `P(k)` satisfying `P(k+1)/P(k) = multiplicand(k)`, the multiplicative analogue of `summation_indefinite`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_productindefinite.dac6a64f8b80"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.productIndefinite</code></p>

```typescript signature
productIndefinite(multiplicand: Expression, index: string): Expression
```

</details>

### rationalFromFloat

<a id="entry-presentation_wasm_construction_and_parsing_capability_construction_rational_from_float_api_analysis_session_rational_from_float"></a>
<a id="placement-placement.wasm.wasm_module.module_rationalfromfloat.2868d823dc35"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
rationalFromFloat(value: number, max_denominator: bigint): Expression
```

Closest rational with denominator \(\leq\) `max_denominator` (the `Fraction.limit_denominator` algorithm).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_rationalfromfloat.1fdc38cc830e"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.rationalFromFloat</code></p>

```typescript signature
rationalFromFloat(value: number, max_denominator: bigint): Expression
```

</details>

### resetContext

<a id="entry-presentation_wasm_construction_and_parsing_capability_construction_reset_context_api_session_reset_context"></a>
<a id="placement-placement.wasm.javascript_facade.context_resetcontext.71381bfb9d67"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
resetContext(): void
```

Replace the context's entire symbol table and expression store with fresh empty ones. Warning: existing `expression`/`matrix`/geometry objects from this context become stale and must not be used afterwards — their symbol identifiers no longer resolve. Deliberately not available at module level: resetting the shared default context would strand every live object, and the weak expression store already keeps memory bounded by live objects (see the default Context).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_resetcontext.31f34760faed"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.resetContext</code></p>

```typescript signature
resetContext(): void
```

</details>

### undefinedFunction

<a id="entry-presentation_wasm_construction_and_parsing_capability_construction_undefined_function_api_session_undefined_function"></a>
<a id="placement-placement.wasm.wasm_class.context_undefinedfunction.57b03936c6a5"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
undefinedFunction(name: string): UndefinedFunction
```

A callable proxy for a user-named function. Calling it with expression arguments builds the function-call expression (see the object-model page and the worked ODE example).

