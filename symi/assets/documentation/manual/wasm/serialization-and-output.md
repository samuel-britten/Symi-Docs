# Serialization and output

Serialization is a lossless interchange format for supported mathematical objects. Rendering is a presentation operation and does not change the object.

## Output and serialization

### to_latex

<a id="entry-presentation_wasm_api_session_to_latex"></a>
<a id="placement-placement.wasm.wasm_module.module_tolatex.9d339325aaff"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
toLatex(input_expression: Expression): string
```

<details class="symi-calling-forms">
<summary>Calling forms and variants</summary>

<a id="placement-placement.wasm.wasm_class.context_tolatex.be83ad30b575"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.toLatex</code></p>

```typescript signature
toLatex(input_expression: Expression): string
```

<a id="placement-placement.wasm.wasm_class.expression_tolatex.1ec6388c2f23"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.toLatex</code></p>

```typescript signature
toLatex(): string
```

<a id="placement-placement.wasm.wasm_class.circle2d_tolatex.2d6cae698d4b"></a>
<p class="symi-entry-owner">Variant for this object — Raw WebAssembly: Circle2d method: <code>Circle2d.toLatex</code></p>

```typescript signature
toLatex(): string
```

<a id="placement-placement.wasm.wasm_class.matrix_tolatex.c244544a6fc7"></a>
<p class="symi-entry-owner">Variant for this object — Raw WebAssembly: Matrix method: <code>Matrix.toLatex</code></p>

```typescript signature
toLatex(): string
```

<a id="placement-placement.wasm.wasm_class.point2d_tolatex.f41c507935a0"></a>
<p class="symi-entry-owner">Variant for this object — Raw WebAssembly: Point2d method: <code>Point2d.toLatex</code></p>

```typescript signature
toLatex(): string
```

<a id="placement-placement.wasm.wasm_class.polygon2d_tolatex.b367ecb5ca3c"></a>
<p class="symi-entry-owner">Variant for this object — Raw WebAssembly: Polygon2d method: <code>Polygon2d.toLatex</code></p>

```typescript signature
toLatex(): string
```

<a id="placement-placement.wasm.wasm_class.segment2d_tolatex.e2e4c68ded95"></a>
<p class="symi-entry-owner">Variant for this object — Raw WebAssembly: Segment2d method: <code>Segment2d.toLatex</code></p>

```typescript signature
toLatex(): string
```

<a id="placement-placement.wasm.wasm_class.triangle2d_tolatex.2dd59c291c87"></a>
<p class="symi-entry-owner">Variant for this object — Raw WebAssembly: Triangle2d method: <code>Triangle2d.toLatex</code></p>

```typescript signature
toLatex(): string
```

</details>


Render an expression as LaTeX. Matrices and geometry objects have their own
`to_latex` methods.

### to_latex_with_options

<a id="entry-presentation_wasm_api_session_to_latex_with_options"></a>
<a id="placement-placement.wasm.wasm_module.module_tolatexwithoptions.91e728aa5fb0"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
toLatexWithOptions(
    input_expression: Expression,
    exponential_style: string,
    natural_logarithm_style: string,
    multiletter_symbol_style: string,
): string
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_tolatexwithoptions.1022577595e7"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.toLatexWithOptions</code></p>

```typescript signature
toLatexWithOptions(
    input_expression: Expression,
    exponential_style: string,
    natural_logarithm_style: string,
    multiletter_symbol_style: string,
): string
```

<a id="placement-placement.wasm.wasm_class.expression_tolatexwithoptions.e10c150aa233"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.toLatexWithOptions</code></p>

```typescript signature
toLatexWithOptions(
    exponential_style: string,
    natural_logarithm_style: string,
    multiletter_symbol_style: string,
): string
```

</details>


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

<a id="entry-presentation_wasm_api_session_serialize_object"></a>
<a id="placement-placement.wasm.wasm_class.expression_serializeobject.0e7634ac3af8"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method</p>

```typescript signature
serializeObject(): string
```

<details class="symi-calling-forms">
<summary>Calling forms and variants</summary>

<a id="placement-placement.wasm.wasm_class.circle2d_serializeobject.4ffca9023185"></a>
<p class="symi-entry-owner">Variant for this object — Raw WebAssembly: Circle2d method: <code>Circle2d.serializeObject</code></p>

```typescript signature
serializeObject(): string
```

<a id="placement-placement.wasm.wasm_class.matrix_serializeobject.da3d7d802113"></a>
<p class="symi-entry-owner">Variant for this object — Raw WebAssembly: Matrix method: <code>Matrix.serializeObject</code></p>

```typescript signature
serializeObject(): string
```

<a id="placement-placement.wasm.wasm_class.point2d_serializeobject.aa39b3c501d6"></a>
<p class="symi-entry-owner">Variant for this object — Raw WebAssembly: Point2d method: <code>Point2d.serializeObject</code></p>

```typescript signature
serializeObject(): string
```

<a id="placement-placement.wasm.wasm_class.polygon2d_serializeobject.db8e31e4b335"></a>
<p class="symi-entry-owner">Variant for this object — Raw WebAssembly: Polygon2d method: <code>Polygon2d.serializeObject</code></p>

```typescript signature
serializeObject(): string
```

<a id="placement-placement.wasm.wasm_class.segment2d_serializeobject.47c37e175e6d"></a>
<p class="symi-entry-owner">Variant for this object — Raw WebAssembly: Segment2d method: <code>Segment2d.serializeObject</code></p>

```typescript signature
serializeObject(): string
```

<a id="placement-placement.wasm.wasm_class.triangle2d_serializeobject.75e809239ee9"></a>
<p class="symi-entry-owner">Variant for this object — Raw WebAssembly: Triangle2d method: <code>Triangle2d.serializeObject</code></p>

```typescript signature
serializeObject(): string
```

</details>


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

### parseSerializedObject

<a id="entry-presentation_wasm_api_session_parse_serialized_object"></a>
<a id="placement-placement.wasm.wasm_module.module_parseserializedobject.d18b5b415e87"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
parseSerializedObject(text: string): any
```

Inverse of `serialize_object`; returns the matching surface class.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_parseserializedobject.c34fdf0f8316"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.parseSerializedObject</code></p>

```typescript signature
parseSerializedObject(text: string): any
```

</details>

