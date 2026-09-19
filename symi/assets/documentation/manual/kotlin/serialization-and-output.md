# Serialization and output

Serialization is a lossless interchange format for supported mathematical objects. Rendering is a presentation operation and does not change the object.

## Output and serialization

### to_latex

Render an expression as LaTeX. Matrices and geometry objects have their own
`to_latex` methods.

### to_latex_with_options

<a id="entry-presentation_kotlin_serialization_and_output_capability_construction_to_latex_with_options_api_serialization_session_to_latex_with_options"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_tolatexwithoptions.24a077d9c39b"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun toLatexWithOptions(
    inputExpression: UniffiExpression,
    options: UniffiLatexPresentationOptions,
): kotlin.String
```

<a id="entry-presentation_kotlin_serialization_and_output_capability_construction_to_latex_with_options_api_serialization_expression_to_latex_with_options"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_tolatexwithoptions.211bf154729d"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun toLatexWithOptions(options: UniffiLatexPresentationOptions): kotlin.String
```


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

Serialize an expression, matrix, or geometry object to the stable Symi
serialization format, round-trippable via `parse_serialized_object`.

**Notes:** in WASM this is a per-object method because a single polymorphic
context method cannot downcast a JsValue back to an exported Rust type.

### parse_serialized_object

<a id="entry-presentation_kotlin_serialization_and_output_capability_construction_parse_serialized_object_api_serialization_session_parse_serialized_object"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_parseserializedobject.32556763e2ce"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun parseSerializedObject(text: kotlin.String): UniffiMathematicalObject
```


Inverse of `serialize_object`; returns the matching surface class.

## Example


## Additional API

### serialize_object

<a id="entry-presentation_kotlin_serialization_and_output_capability_construction_serialize_object_api_serialization_session_serialize_object"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_serializeobject.df97076f5e3a"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun serializeObject(object: UniffiMathematicalObject): kotlin.String
```

Serialize an expression, matrix, or geometry object to the stable Symi serialization format, round-trippable via `parse_serialized_object`.

### serialize_object

<a id="entry-presentation_kotlin_serialization_and_output_capability_construction_serialize_object_api_serialization_expression_serialize_object"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_serializeobject.594940937dc2"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun serializeObject(): kotlin.String
```

Serialize an expression, matrix, or geometry object to the stable Symi serialization format, round-trippable via `parse_serialized_object`.

### serialize_object

<a id="entry-presentation_kotlin_serialization_and_output_capability_construction_serialize_object_api_serialization_circle2d_serialize_object"></a>
<a id="placement-placement.kotlin.kotlin_object.unifficircle2d_serializeobject.7dfb48cd9293"></a>
<p class="symi-entry-owner">UniffiCircle2d method</p>

```kotlin signature
fun serializeObject(): kotlin.String
```

Serialize an expression, matrix, or geometry object to the stable Symi serialization format, round-trippable via `parse_serialized_object`.

### serialize_object

<a id="entry-presentation_kotlin_serialization_and_output_capability_construction_serialize_object_api_serialization_matrix_serialize_object"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_serializeobject.017b84005def"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun serializeObject(): kotlin.String
```

Serialize an expression, matrix, or geometry object to the stable Symi serialization format, round-trippable via `parse_serialized_object`.

### serialize_object

<a id="entry-presentation_kotlin_serialization_and_output_capability_construction_serialize_object_api_partial_differential_equations_partialdifferentialequationcoordinatechange_serialize_object"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationcoordinatechange_serializeobject.bad31d249550"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCoordinateChange method</p>

```kotlin signature
fun serializeObject(): kotlin.String
```

Serialize this coordinate change in the versioned canonical object grammar.

### serialize_object

<a id="entry-presentation_kotlin_serialization_and_output_capability_construction_serialize_object_api_partial_differential_equations_partialdifferentialequationproblem_serialize_object"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationproblem_serializeobject.2738e4601f5f"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationProblem method</p>

```kotlin signature
fun serializeObject(): kotlin.String
```

Serialize this problem in the versioned canonical object grammar.

### serialize_object

<a id="entry-presentation_kotlin_serialization_and_output_capability_construction_serialize_object_api_serialization_point2d_serialize_object"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipoint2d_serializeobject.2a0376c78e17"></a>
<p class="symi-entry-owner">UniffiPoint2d method</p>

```kotlin signature
fun serializeObject(): kotlin.String
```

Serialize an expression, matrix, or geometry object to the stable Symi serialization format, round-trippable via `parse_serialized_object`.

### serialize_object

<a id="entry-presentation_kotlin_serialization_and_output_capability_construction_serialize_object_api_serialization_polygon2d_serialize_object"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipolygon2d_serializeobject.f8e052334c30"></a>
<p class="symi-entry-owner">UniffiPolygon2d method</p>

```kotlin signature
fun serializeObject(): kotlin.String
```

Serialize an expression, matrix, or geometry object to the stable Symi serialization format, round-trippable via `parse_serialized_object`.

### serialize_object

<a id="entry-presentation_kotlin_serialization_and_output_capability_construction_serialize_object_api_serialization_segment2d_serialize_object"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisegment2d_serializeobject.2b33df32bc7a"></a>
<p class="symi-entry-owner">UniffiSegment2d method</p>

```kotlin signature
fun serializeObject(): kotlin.String
```

Serialize an expression, matrix, or geometry object to the stable Symi serialization format, round-trippable via `parse_serialized_object`.

### serialize_object

<a id="entry-presentation_kotlin_serialization_and_output_capability_construction_serialize_object_api_serialization_triangle2d_serialize_object"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffitriangle2d_serializeobject.73d8b64a7fe4"></a>
<p class="symi-entry-owner">UniffiTriangle2d method</p>

```kotlin signature
fun serializeObject(): kotlin.String
```

Serialize an expression, matrix, or geometry object to the stable Symi serialization format, round-trippable via `parse_serialized_object`.

### to_latex

<a id="entry-presentation_kotlin_serialization_and_output_capability_construction_to_latex_api_session_to_latex"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_tolatex.3093075c98d7"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun toLatex(target: UniffiExpression): kotlin.String
```

Render an expression as LaTeX. Matrices and geometry objects have their own `to_latex` methods.

### to_latex

<a id="entry-presentation_kotlin_serialization_and_output_capability_construction_to_latex_api_expression_to_latex"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_tolatex.8b4e894b3ffd"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun toLatex(): kotlin.String
```

Render an expression as LaTeX. Matrices and geometry objects have their own `to_latex` methods.

### to_latex

<a id="entry-presentation_kotlin_serialization_and_output_capability_construction_to_latex_api_circle2d_to_latex"></a>
<a id="placement-placement.kotlin.kotlin_object.unifficircle2d_tolatex.a6799dc8867c"></a>
<p class="symi-entry-owner">UniffiCircle2d method</p>

```kotlin signature
fun toLatex(): kotlin.String
```

Render an expression as LaTeX. Matrices and geometry objects have their own `to_latex` methods.

### to_latex

<a id="entry-presentation_kotlin_serialization_and_output_capability_construction_to_latex_api_serialization_matrix_to_latex"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_tolatex.0c9624ca2cac"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```kotlin signature
fun toLatex(): kotlin.String
```

Render an expression as LaTeX. Matrices and geometry objects have their own `to_latex` methods.

### to_latex

<a id="entry-presentation_kotlin_serialization_and_output_capability_construction_to_latex_api_partial_differential_equations_partialdifferentialequationproblem_to_latex"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationproblem_tolatex.0af18b336fcf"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationProblem method</p>

```kotlin signature
fun toLatex(): kotlin.String
```

Render this problem as LaTeX, as a system when it carries conditions.

### to_latex

<a id="entry-presentation_kotlin_serialization_and_output_capability_construction_to_latex_api_point2d_to_latex"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipoint2d_tolatex.66dd1ba85bd2"></a>
<p class="symi-entry-owner">UniffiPoint2d method</p>

```kotlin signature
fun toLatex(): kotlin.String
```

Render an expression as LaTeX. Matrices and geometry objects have their own `to_latex` methods.

### to_latex

<a id="entry-presentation_kotlin_serialization_and_output_capability_construction_to_latex_api_polygon2d_to_latex"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipolygon2d_tolatex.943cd2f7031d"></a>
<p class="symi-entry-owner">UniffiPolygon2d method</p>

```kotlin signature
fun toLatex(): kotlin.String
```

Render an expression as LaTeX. Matrices and geometry objects have their own `to_latex` methods.

### to_latex

<a id="entry-presentation_kotlin_serialization_and_output_capability_construction_to_latex_api_segment2d_to_latex"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisegment2d_tolatex.55209d9b3e7d"></a>
<p class="symi-entry-owner">UniffiSegment2d method</p>

```kotlin signature
fun toLatex(): kotlin.String
```

Render an expression as LaTeX. Matrices and geometry objects have their own `to_latex` methods.

### to_latex

<a id="entry-presentation_kotlin_serialization_and_output_capability_construction_to_latex_api_geometry_operations_triangle2d_to_latex"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffitriangle2d_tolatex.f6213183855c"></a>
<p class="symi-entry-owner">UniffiTriangle2d method</p>

```kotlin signature
fun toLatex(): kotlin.String
```

Render an expression as LaTeX. Matrices and geometry objects have their own `to_latex` methods.

