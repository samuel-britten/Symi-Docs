# Serialization and output

Serialization is a lossless interchange format for supported mathematical objects. Rendering is a presentation operation and does not change the object.

## Output and serialization

### to_latex

<a id="entry-presentation_swift_api_session_to_latex"></a>
<a id="placement-placement.swift.swift_object.uniffisession_tolatex.88c140d1a2fb"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func toLatex(target: UniffiExpression) -> String
```

<details class="symi-calling-forms">
<summary>Calling forms and variants</summary>

<a id="placement-placement.swift.swift_object.uniffiexpression_tolatex.8a9dd2119a1f"></a>
<p class="symi-entry-owner">Expression method: <code>UniffiExpression.toLatex</code></p>

```swift signature
func toLatex() -> String
```

<a id="placement-placement.swift.swift_object.unifficircle2d_tolatex.64aa2b211805"></a>
<p class="symi-entry-owner">Variant for this object — UniffiCircle2d method: <code>UniffiCircle2d.toLatex</code></p>

```swift signature
func toLatex() -> String
```

<a id="placement-placement.swift.swift_object.uniffimatrix_tolatex.97b22797efad"></a>
<p class="symi-entry-owner">Variant for this object — UniffiMatrix method: <code>UniffiMatrix.toLatex</code></p>

```swift signature
func toLatex() -> String
```

<a id="placement-placement.swift.swift_object.uniffipoint2d_tolatex.8922f1a82f65"></a>
<p class="symi-entry-owner">Variant for this object — UniffiPoint2d method: <code>UniffiPoint2d.toLatex</code></p>

```swift signature
func toLatex() -> String
```

<a id="placement-placement.swift.swift_object.uniffipolygon2d_tolatex.5b046a98938b"></a>
<p class="symi-entry-owner">Variant for this object — UniffiPolygon2d method: <code>UniffiPolygon2d.toLatex</code></p>

```swift signature
func toLatex() -> String
```

<a id="placement-placement.swift.swift_object.uniffisegment2d_tolatex.70f79655cf03"></a>
<p class="symi-entry-owner">Variant for this object — UniffiSegment2d method: <code>UniffiSegment2d.toLatex</code></p>

```swift signature
func toLatex() -> String
```

<a id="placement-placement.swift.swift_object.uniffitriangle2d_tolatex.59870f7a2694"></a>
<p class="symi-entry-owner">Variant for this object — UniffiTriangle2d method: <code>UniffiTriangle2d.toLatex</code></p>

```swift signature
func toLatex() -> String
```

</details>


Render an expression as LaTeX. Matrices and geometry objects have their own
`to_latex` methods.

### to_latex_with_options

<a id="entry-presentation_swift_api_session_to_latex_with_options"></a>
<a id="placement-placement.swift.swift_object.uniffisession_tolatexwithoptions.86dd51fbbfdc"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func toLatexWithOptions(
    inputExpression: UniffiExpression,
    options: UniffiLatexPresentationOptions,
) -> String
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.swift.swift_object.uniffiexpression_tolatexwithoptions.e66acd1eb6b0"></a>
<p class="symi-entry-owner">Expression method: <code>UniffiExpression.toLatexWithOptions</code></p>

```swift signature
func toLatexWithOptions(options: UniffiLatexPresentationOptions) -> String
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

<a id="entry-presentation_swift_api_session_serialize_object"></a>
<a id="placement-placement.swift.swift_object.uniffisession_serializeobject.70fba8586dbf"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func serializeObject(object: UniffiMathematicalObject) -> String
```

<details class="symi-calling-forms">
<summary>Calling forms and variants</summary>

<a id="placement-placement.swift.swift_object.uniffiexpression_serializeobject.8169d8f5a4dc"></a>
<p class="symi-entry-owner">Expression method: <code>UniffiExpression.serializeObject</code></p>

```swift signature
func serializeObject() -> String
```

<a id="placement-placement.swift.swift_object.unifficircle2d_serializeobject.a3fbc2ce1ed1"></a>
<p class="symi-entry-owner">Variant for this object — UniffiCircle2d method: <code>UniffiCircle2d.serializeObject</code></p>

```swift signature
func serializeObject() -> String
```

<a id="placement-placement.swift.swift_object.uniffimatrix_serializeobject.21fb7eb86461"></a>
<p class="symi-entry-owner">Variant for this object — UniffiMatrix method: <code>UniffiMatrix.serializeObject</code></p>

```swift signature
func serializeObject() -> String
```

<a id="placement-placement.swift.swift_object.uniffipoint2d_serializeobject.a63681fb7fb4"></a>
<p class="symi-entry-owner">Variant for this object — UniffiPoint2d method: <code>UniffiPoint2d.serializeObject</code></p>

```swift signature
func serializeObject() -> String
```

<a id="placement-placement.swift.swift_object.uniffipolygon2d_serializeobject.bbb443b26008"></a>
<p class="symi-entry-owner">Variant for this object — UniffiPolygon2d method: <code>UniffiPolygon2d.serializeObject</code></p>

```swift signature
func serializeObject() -> String
```

<a id="placement-placement.swift.swift_object.uniffisegment2d_serializeobject.ccfb383a723e"></a>
<p class="symi-entry-owner">Variant for this object — UniffiSegment2d method: <code>UniffiSegment2d.serializeObject</code></p>

```swift signature
func serializeObject() -> String
```

<a id="placement-placement.swift.swift_object.uniffitriangle2d_serializeobject.f4199b03a835"></a>
<p class="symi-entry-owner">Variant for this object — UniffiTriangle2d method: <code>UniffiTriangle2d.serializeObject</code></p>

```swift signature
func serializeObject() -> String
```

</details>


Serialize an expression, matrix, or geometry object to the stable Symi
serialization format, round-trippable via `parse_serialized_object`.

**Notes:** in WASM this is a per-object method because a single polymorphic
context method cannot downcast a JsValue back to an exported Rust type.

### parse_serialized_object

<a id="entry-presentation_swift_api_session_parse_serialized_object"></a>
<a id="placement-placement.swift.swift_object.uniffisession_parseserializedobject.dd9f2ff661be"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func parseSerializedObject(text: String) -> UniffiMathematicalObject
```


Inverse of `serialize_object`; returns the matching surface class.

## Example

