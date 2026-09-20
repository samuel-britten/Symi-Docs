# Serialization and output

Serialization is a lossless interchange format for supported mathematical objects. Rendering is a presentation operation and does not change the object.

## Output and serialization

### to_latex

<a id="entry-presentation_kotlin_api_session_to_latex"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_tolatex.3093075c98d7"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun toLatex(target: UniffiExpression): kotlin.String
```

<details class="symi-calling-forms">
<summary>Calling forms and variants</summary>

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_tolatex.8b4e894b3ffd"></a>
<p class="symi-entry-owner">Expression method: <code>UniffiExpression.toLatex</code></p>

```kotlin signature
fun toLatex(): kotlin.String
```

<a id="placement-placement.kotlin.kotlin_object.unifficircle2d_tolatex.a6799dc8867c"></a>
<p class="symi-entry-owner">Variant for this object — UniffiCircle2d method: <code>UniffiCircle2d.toLatex</code></p>

```kotlin signature
fun toLatex(): kotlin.String
```

<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_tolatex.0c9624ca2cac"></a>
<p class="symi-entry-owner">Variant for this object — UniffiMatrix method: <code>UniffiMatrix.toLatex</code></p>

```kotlin signature
fun toLatex(): kotlin.String
```

<a id="placement-placement.kotlin.kotlin_object.uniffipoint2d_tolatex.66dd1ba85bd2"></a>
<p class="symi-entry-owner">Variant for this object — UniffiPoint2d method: <code>UniffiPoint2d.toLatex</code></p>

```kotlin signature
fun toLatex(): kotlin.String
```

<a id="placement-placement.kotlin.kotlin_object.uniffipolygon2d_tolatex.943cd2f7031d"></a>
<p class="symi-entry-owner">Variant for this object — UniffiPolygon2d method: <code>UniffiPolygon2d.toLatex</code></p>

```kotlin signature
fun toLatex(): kotlin.String
```

<a id="placement-placement.kotlin.kotlin_object.uniffisegment2d_tolatex.55209d9b3e7d"></a>
<p class="symi-entry-owner">Variant for this object — UniffiSegment2d method: <code>UniffiSegment2d.toLatex</code></p>

```kotlin signature
fun toLatex(): kotlin.String
```

<a id="placement-placement.kotlin.kotlin_object.uniffitriangle2d_tolatex.f6213183855c"></a>
<p class="symi-entry-owner">Variant for this object — UniffiTriangle2d method: <code>UniffiTriangle2d.toLatex</code></p>

```kotlin signature
fun toLatex(): kotlin.String
```

</details>


Render an expression as LaTeX. Matrices and geometry objects have their own
`to_latex` methods.

### to_latex_with_options

<a id="entry-presentation_kotlin_api_session_to_latex_with_options"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_tolatexwithoptions.24a077d9c39b"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun toLatexWithOptions(
    inputExpression: UniffiExpression,
    options: UniffiLatexPresentationOptions,
): kotlin.String
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_tolatexwithoptions.211bf154729d"></a>
<p class="symi-entry-owner">Expression method: <code>UniffiExpression.toLatexWithOptions</code></p>

```kotlin signature
fun toLatexWithOptions(options: UniffiLatexPresentationOptions): kotlin.String
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

<a id="entry-presentation_kotlin_api_session_serialize_object"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_serializeobject.df97076f5e3a"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun serializeObject(object: UniffiMathematicalObject): kotlin.String
```

<details class="symi-calling-forms">
<summary>Calling forms and variants</summary>

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_serializeobject.594940937dc2"></a>
<p class="symi-entry-owner">Expression method: <code>UniffiExpression.serializeObject</code></p>

```kotlin signature
fun serializeObject(): kotlin.String
```

<a id="placement-placement.kotlin.kotlin_object.unifficircle2d_serializeobject.7dfb48cd9293"></a>
<p class="symi-entry-owner">Variant for this object — UniffiCircle2d method: <code>UniffiCircle2d.serializeObject</code></p>

```kotlin signature
fun serializeObject(): kotlin.String
```

<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_serializeobject.017b84005def"></a>
<p class="symi-entry-owner">Variant for this object — UniffiMatrix method: <code>UniffiMatrix.serializeObject</code></p>

```kotlin signature
fun serializeObject(): kotlin.String
```

<a id="placement-placement.kotlin.kotlin_object.uniffipoint2d_serializeobject.2a0376c78e17"></a>
<p class="symi-entry-owner">Variant for this object — UniffiPoint2d method: <code>UniffiPoint2d.serializeObject</code></p>

```kotlin signature
fun serializeObject(): kotlin.String
```

<a id="placement-placement.kotlin.kotlin_object.uniffipolygon2d_serializeobject.f8e052334c30"></a>
<p class="symi-entry-owner">Variant for this object — UniffiPolygon2d method: <code>UniffiPolygon2d.serializeObject</code></p>

```kotlin signature
fun serializeObject(): kotlin.String
```

<a id="placement-placement.kotlin.kotlin_object.uniffisegment2d_serializeobject.2b33df32bc7a"></a>
<p class="symi-entry-owner">Variant for this object — UniffiSegment2d method: <code>UniffiSegment2d.serializeObject</code></p>

```kotlin signature
fun serializeObject(): kotlin.String
```

<a id="placement-placement.kotlin.kotlin_object.uniffitriangle2d_serializeobject.73d8b64a7fe4"></a>
<p class="symi-entry-owner">Variant for this object — UniffiTriangle2d method: <code>UniffiTriangle2d.serializeObject</code></p>

```kotlin signature
fun serializeObject(): kotlin.String
```

</details>


Serialize an expression, matrix, or geometry object to the stable Symi
serialization format, round-trippable via `parse_serialized_object`.

**Notes:** in WASM this is a per-object method because a single polymorphic
context method cannot downcast a JsValue back to an exported Rust type.

### parse_serialized_object

<a id="entry-presentation_kotlin_api_session_parse_serialized_object"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_parseserializedobject.32556763e2ce"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun parseSerializedObject(text: kotlin.String): UniffiMathematicalObject
```


Inverse of `serialize_object`; returns the matching surface class.

## Example

