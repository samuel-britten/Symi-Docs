# Serialization and output

Serialization is a lossless interchange format for supported mathematical objects. Rendering is a presentation operation and does not change the object.

## Output and serialization

### to_latex

*Not exposed by the WASM / JavaScript bindings. Available as [`Circle2d.to_latex`](/symi/python/serialization-and-output#to_latex) in Python, [`UniffiCircle2d.toLatex`](/symi/kotlin/serialization-and-output#to_latex) in Kotlin, [`UniffiCircle2d.toLatex`](/symi/swift/serialization-and-output#to_latex) in Swift, [`api::Circle2d::to_latex`](/symi/rust/serialization-and-output#to_latex) in Rust.*


Render an expression as LaTeX. Matrices and geometry objects have their own
`to_latex` methods.

### to_latex_with_options

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.to_latex_with_options`](/symi/python/serialization-and-output#to_latex_with_options) in Python, [`UniffiExpression.toLatexWithOptions`](/symi/kotlin/serialization-and-output#to_latex_with_options) in Kotlin, [`UniffiExpression.toLatexWithOptions`](/symi/swift/serialization-and-output#to_latex_with_options) in Swift, [`api::serialization::Expression::to_latex_with_options`](/symi/rust/serialization-and-output#to_latex_with_options) in Rust.*


Render an expression as LaTeX with presentation flags. Each argument is a string
naming the choice for one flag; an unrecognized name falls back to that flag's
canonical default (so `to_latex_with_options(e, "", "", "")` equals
`to_latex(e)`):

- `exponential_style`: `"exp_function"` (default, `\exp(u)`) or `"e_caret"`
  (`e^{u}`, the form the LaTeX parser reads back as exponentiation).
- `natural_logarithm_style`: `"log"` (default, `\log`) or `"ln"` (`\ln`).
- `multiletter_symbol_style`: `"italic"` (default, `\mathit{name}`) or
  `"upright"` (`\mathrm{name}`).

The defaults are fixed, content-independent canonical choices. Readability
heuristics (for example, switching a tall exponent to `\exp`) belong in the
caller, via the render-twice pattern: render with the default, test the result,
and re-render with the other flag value if it violates the heuristic.

### serialize_object

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.serialize_object`](/symi/python/serialization-and-output#serialize_object) in Python, [`UniffiCircle2d.serializeObject`](/symi/kotlin/serialization-and-output#serialize_object) in Kotlin, [`UniffiCircle2d.serializeObject`](/symi/swift/serialization-and-output#serialize_object) in Swift, [`api::partial_differential_equations::PartialDifferentialEquationCoordinateChange::serialize_object`](/symi/rust/serialization-and-output#serialize_object) in Rust.*


Serialize an expression, matrix, or geometry object to the stable Symi
serialization format, round-trippable via `parse_serialized_object`.

**Notes:** in WASM this is a per-object method because a single polymorphic
context method cannot downcast a JsValue back to an exported Rust type.

### parse_serialized_object

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.parse_serialized_object`](/symi/python/serialization-and-output#parse_serialized_object) in Python, [`UniffiSession.parseSerializedObject`](/symi/kotlin/serialization-and-output#parse_serialized_object) in Kotlin, [`UniffiSession.parseSerializedObject`](/symi/swift/serialization-and-output#parse_serialized_object) in Swift, [`api::serialization::Session::parse_serialized_object`](/symi/rust/serialization-and-output#parse_serialized_object) in Rust.*


Inverse of `serialize_object`; returns the matching surface class.

## Example

This family is not part of the recommended JavaScript facade in this release. Call it through the generated `symi.raw` layer, whose entries are listed with their wasm-bindgen signatures above, and read [Migration](migration.md) for the ownership rules that apply there.


## Additional API

### parseLatex

<a id="entry-presentation_wasm_serialization_and_output_capability_construction_parse_latex_api_serialization_session_parse_latex"></a>
<a id="placement-placement.wasm.wasm_module.module_parselatex.f6216d8e0b47"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
parseLatex(latex: string): any
```

Parse a LaTeX string in Symi's canonical input dialect — the inverse of `to_latex` and the parser the Symi frontend uses. Returns whichever top-level object the input denotes: an ordinary Expression, a `\begin{matrix}…\end{matrix}`, or a geometry figure (`(x, y)` point, segment, polygon, or circle), wrapped in the matching exported class exactly as `parse_serialized_object` does. Coverage spans arithmetic, powers, fractions, roots, the elementary and many special functions, comparisons, integrals (including the bare-`d` differential), Leibniz derivatives (`\frac{d}{dx}` — differentiated eagerly), limits, summations, products, determinants, and actuarial annuities. The resolution is context-aware in a way `parse` is not: a bare `i` is the imaginary unit and a bare `e` is Euler's number unless the letter is a bound index (a summation / product / limit index shadows the constant), and `\mathrm{d}` — or a bare `d` that closes an integral — is the differential operator while a bare `d` elsewhere is an ordinary variable. Raises on syntax errors.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_parselatex.691f111b5629"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.parseLatex</code></p>

```typescript signature
parseLatex(latex: string): any
```

</details>

### parseLatexWithEnvironment

<a id="entry-presentation_wasm_serialization_and_output_capability_construction_parse_latex_with_environment_api_serialization_session_parse_latex_with_environment"></a>
<a id="placement-placement.wasm.wasm_module.module_parselatexwithenvironment.0d0f63f757f1"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
parseLatexWithEnvironment(
    latex: string,
    serialized_definitions: any[],
): any
```

Parse LaTeX after building an ordered definition environment. Each serialized definition is a string with four fields separated by ASCII Unit Separator (`U+001F`): `kind`, `name`, `parameters`, and `body_latex`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_parselatexwithenvironment.3e3cebf3e09b"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.parseLatexWithEnvironment</code></p>

```typescript signature
parseLatexWithEnvironment(
    latex: string,
    serialized_definitions: any[],
): any
```

</details>

### parseSerializedObject

<a id="entry-presentation_wasm_serialization_and_output_capability_construction_parse_serialized_object_api_serialization_session_parse_serialized_object"></a>
<a id="placement-placement.wasm.wasm_module.module_parseserializedobject.d18b5b415e87"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
parseSerializedObject(text: string): any
```

Inverse of `serialize_object`; returns the matching surface class.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_parseserializedobject.c34fdf0f8316"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.parseSerializedObject</code></p>

```typescript signature
parseSerializedObject(text: string): any
```

</details>

### serializeObject

<a id="entry-presentation_wasm_serialization_and_output_capability_construction_serialize_object_api_serialization_circle2d_serialize_object"></a>
<a id="placement-placement.wasm.wasm_class.circle2d_serializeobject.4ffca9023185"></a>
<p class="symi-entry-owner">Circle2d method</p>

```typescript signature
serializeObject(): string
```

Serialize an Expression, Matrix, or geometry object to the stable Symi serialization format, round-trippable via `parse_serialized_object`.

### serializeObject

<a id="entry-presentation_wasm_serialization_and_output_capability_construction_serialize_object_api_serialization_expression_serialize_object"></a>
<a id="placement-placement.wasm.wasm_class.expression_serializeobject.0e7634ac3af8"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
serializeObject(): string
```

Serialize an Expression, Matrix, or geometry object to the stable Symi serialization format, round-trippable via `parse_serialized_object`.

### serializeObject

<a id="entry-presentation_wasm_serialization_and_output_capability_construction_serialize_object_api_serialization_matrix_serialize_object"></a>
<a id="placement-placement.wasm.wasm_class.matrix_serializeobject.da3d7d802113"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
serializeObject(): string
```

Serialize an Expression, Matrix, or geometry object to the stable Symi serialization format, round-trippable via `parse_serialized_object`.

### serializeObject

<a id="entry-presentation_wasm_serialization_and_output_capability_construction_serialize_object_api_partial_differential_equations_partialdifferentialequationcoordinatechange_serialize_object"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcoordinatechange_serializeobject.15bd50391c28"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCoordinateChange method</p>

```typescript signature
serializeObject(): string
```

Serialize this coordinate change in the versioned canonical object grammar.

### serializeObject

<a id="entry-presentation_wasm_serialization_and_output_capability_construction_serialize_object_api_partial_differential_equations_partialdifferentialequationproblem_serialize_object"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationproblem_serializeobject.cf6d279e96f9"></a>
<p class="symi-entry-owner">PartialDifferentialEquationProblem method</p>

```typescript signature
serializeObject(): string
```

Serialize this problem in the versioned canonical object grammar.

### serializeObject

<a id="entry-presentation_wasm_serialization_and_output_capability_construction_serialize_object_api_serialization_point2d_serialize_object"></a>
<a id="placement-placement.wasm.wasm_class.point2d_serializeobject.aa39b3c501d6"></a>
<p class="symi-entry-owner">Point2d method</p>

```typescript signature
serializeObject(): string
```

Serialize an Expression, Matrix, or geometry object to the stable Symi serialization format, round-trippable via `parse_serialized_object`.

### serializeObject

<a id="entry-presentation_wasm_serialization_and_output_capability_construction_serialize_object_api_serialization_polygon2d_serialize_object"></a>
<a id="placement-placement.wasm.wasm_class.polygon2d_serializeobject.db8e31e4b335"></a>
<p class="symi-entry-owner">Polygon2d method</p>

```typescript signature
serializeObject(): string
```

Serialize an Expression, Matrix, or geometry object to the stable Symi serialization format, round-trippable via `parse_serialized_object`.

### serializeObject

<a id="entry-presentation_wasm_serialization_and_output_capability_construction_serialize_object_api_serialization_segment2d_serialize_object"></a>
<a id="placement-placement.wasm.wasm_class.segment2d_serializeobject.47c37e175e6d"></a>
<p class="symi-entry-owner">Segment2d method</p>

```typescript signature
serializeObject(): string
```

Serialize an Expression, Matrix, or geometry object to the stable Symi serialization format, round-trippable via `parse_serialized_object`.

### serializeObject

<a id="entry-presentation_wasm_serialization_and_output_capability_construction_serialize_object_api_serialization_triangle2d_serialize_object"></a>
<a id="placement-placement.wasm.wasm_class.triangle2d_serializeobject.75e809239ee9"></a>
<p class="symi-entry-owner">Triangle2d method</p>

```typescript signature
serializeObject(): string
```

Serialize an Expression, Matrix, or geometry object to the stable Symi serialization format, round-trippable via `parse_serialized_object`.

### toLatex

<a id="entry-presentation_wasm_serialization_and_output_capability_construction_to_latex_api_circle2d_to_latex"></a>
<a id="placement-placement.wasm.wasm_class.circle2d_tolatex.2d6cae698d4b"></a>
<p class="symi-entry-owner">Circle2d method</p>

```typescript signature
toLatex(): string
```

Render an expression as LaTeX. Matrices and geometry objects have their own `to_latex` methods.

### toLatex

<a id="entry-presentation_wasm_serialization_and_output_capability_construction_to_latex_api_session_to_latex"></a>
<a id="placement-placement.wasm.wasm_module.module_tolatex.9d339325aaff"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
toLatex(input_expression: Expression): string
```

Render an expression as LaTeX. Matrices and geometry objects have their own `to_latex` methods.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_tolatex.be83ad30b575"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.toLatex</code></p>

```typescript signature
toLatex(input_expression: Expression): string
```

</details>

### toLatex

<a id="entry-presentation_wasm_serialization_and_output_capability_construction_to_latex_api_expression_to_latex"></a>
<a id="placement-placement.wasm.wasm_class.expression_tolatex.1ec6388c2f23"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
toLatex(): string
```

Render an expression as LaTeX. Matrices and geometry objects have their own `to_latex` methods.

### toLatex

<a id="entry-presentation_wasm_serialization_and_output_capability_construction_to_latex_api_serialization_matrix_to_latex"></a>
<a id="placement-placement.wasm.wasm_class.matrix_tolatex.c244544a6fc7"></a>
<p class="symi-entry-owner">Matrix method</p>

```typescript signature
toLatex(): string
```

Render an expression as LaTeX. Matrices and geometry objects have their own `to_latex` methods.

### toLatex

<a id="entry-presentation_wasm_serialization_and_output_capability_construction_to_latex_api_partial_differential_equations_partialdifferentialequationproblem_to_latex"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationproblem_tolatex.101fc04fe4e5"></a>
<p class="symi-entry-owner">PartialDifferentialEquationProblem method</p>

```typescript signature
toLatex(): string
```

Render this problem as LaTeX, as a system when it carries conditions.

### toLatex

<a id="entry-presentation_wasm_serialization_and_output_capability_construction_to_latex_api_point2d_to_latex"></a>
<a id="placement-placement.wasm.wasm_class.point2d_tolatex.f41c507935a0"></a>
<p class="symi-entry-owner">Point2d method</p>

```typescript signature
toLatex(): string
```

Render an expression as LaTeX. Matrices and geometry objects have their own `to_latex` methods.

### toLatex

<a id="entry-presentation_wasm_serialization_and_output_capability_construction_to_latex_api_polygon2d_to_latex"></a>
<a id="placement-placement.wasm.wasm_class.polygon2d_tolatex.b367ecb5ca3c"></a>
<p class="symi-entry-owner">Polygon2d method</p>

```typescript signature
toLatex(): string
```

Render an expression as LaTeX. Matrices and geometry objects have their own `to_latex` methods.

### toLatex

<a id="entry-presentation_wasm_serialization_and_output_capability_construction_to_latex_api_segment2d_to_latex"></a>
<a id="placement-placement.wasm.wasm_class.segment2d_tolatex.e2e4c68ded95"></a>
<p class="symi-entry-owner">Segment2d method</p>

```typescript signature
toLatex(): string
```

Render an expression as LaTeX. Matrices and geometry objects have their own `to_latex` methods.

### toLatex

<a id="entry-presentation_wasm_serialization_and_output_capability_construction_to_latex_api_geometry_operations_triangle2d_to_latex"></a>
<a id="placement-placement.wasm.wasm_class.triangle2d_tolatex.2dd59c291c87"></a>
<p class="symi-entry-owner">Triangle2d method</p>

```typescript signature
toLatex(): string
```

Render an expression as LaTeX. Matrices and geometry objects have their own `to_latex` methods.

### toLatexWithOptions

<a id="entry-presentation_wasm_serialization_and_output_capability_construction_to_latex_with_options_api_serialization_session_to_latex_with_options"></a>
<a id="placement-placement.wasm.wasm_module.module_tolatexwithoptions.91e728aa5fb0"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
toLatexWithOptions(
    input_expression: Expression,
    exponential_style: string,
    natural_logarithm_style: string,
    multiletter_symbol_style: string,
): string
```

Render an expression as LaTeX with presentation flags. Each argument is a string naming the choice for one flag; an unrecognized name falls back to that flag's canonical default (so `to_latex_with_options(e, "", "", "")` equals `to_latex(e)`):

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_tolatexwithoptions.1022577595e7"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.toLatexWithOptions</code></p>

```typescript signature
toLatexWithOptions(
    input_expression: Expression,
    exponential_style: string,
    natural_logarithm_style: string,
    multiletter_symbol_style: string,
): string
```

</details>

### toLatexWithOptions

<a id="entry-presentation_wasm_serialization_and_output_capability_construction_to_latex_with_options_api_serialization_expression_to_latex_with_options"></a>
<a id="placement-placement.wasm.wasm_class.expression_tolatexwithoptions.e10c150aa233"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
toLatexWithOptions(
    exponential_style: string,
    natural_logarithm_style: string,
    multiletter_symbol_style: string,
): string
```

Render an expression as LaTeX with presentation flags. Each argument is a string naming the choice for one flag; an unrecognized name falls back to that flag's canonical default (so `to_latex_with_options(e, "", "", "")` equals `to_latex(e)`):

