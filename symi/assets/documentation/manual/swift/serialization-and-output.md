# Serialization and output

Serialization is a lossless interchange format for supported mathematical objects. Rendering is a presentation operation and does not change the object.

## Output and serialization

### to_latex

Render an expression as LaTeX. Matrices and geometry objects have their own
`to_latex` methods.

### to_latex_with_options

<a id="entry-presentation_swift_serialization_and_output_capability_construction_to_latex_with_options_api_serialization_session_to_latex_with_options"></a>
<a id="placement-placement.swift.swift_object.uniffisession_tolatexwithoptions.86dd51fbbfdc"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func toLatexWithOptions(
    inputExpression: UniffiExpression,
    options: UniffiLatexPresentationOptions,
) -> String
```

<a id="entry-presentation_swift_serialization_and_output_capability_construction_to_latex_with_options_api_serialization_expression_to_latex_with_options"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_tolatexwithoptions.e66acd1eb6b0"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func toLatexWithOptions(options: UniffiLatexPresentationOptions) -> String
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

<a id="entry-presentation_swift_serialization_and_output_capability_construction_parse_serialized_object_api_serialization_session_parse_serialized_object"></a>
<a id="placement-placement.swift.swift_object.uniffisession_parseserializedobject.dd9f2ff661be"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func parseSerializedObject(text: String) -> UniffiMathematicalObject
```


Inverse of `serialize_object`; returns the matching surface class.

## Example


## Additional API

### serialize_object

<a id="entry-presentation_swift_serialization_and_output_capability_construction_serialize_object_api_serialization_session_serialize_object"></a>
<a id="placement-placement.swift.swift_object.uniffisession_serializeobject.70fba8586dbf"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func serializeObject(object: UniffiMathematicalObject) -> String
```

Serialize an expression, matrix, or geometry object to the stable Symi serialization format, round-trippable via `parse_serialized_object`.

### serialize_object

<a id="entry-presentation_swift_serialization_and_output_capability_construction_serialize_object_api_serialization_expression_serialize_object"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_serializeobject.8169d8f5a4dc"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func serializeObject() -> String
```

Serialize an expression, matrix, or geometry object to the stable Symi serialization format, round-trippable via `parse_serialized_object`.

### serialize_object

<a id="entry-presentation_swift_serialization_and_output_capability_construction_serialize_object_api_serialization_circle2d_serialize_object"></a>
<a id="placement-placement.swift.swift_object.unifficircle2d_serializeobject.a3fbc2ce1ed1"></a>
<p class="symi-entry-owner">UniffiCircle2d method</p>

```swift signature
func serializeObject() -> String
```

Serialize an expression, matrix, or geometry object to the stable Symi serialization format, round-trippable via `parse_serialized_object`.

### serialize_object

<a id="entry-presentation_swift_serialization_and_output_capability_construction_serialize_object_api_serialization_matrix_serialize_object"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_serializeobject.21fb7eb86461"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func serializeObject() -> String
```

Serialize an expression, matrix, or geometry object to the stable Symi serialization format, round-trippable via `parse_serialized_object`.

### serialize_object

<a id="entry-presentation_swift_serialization_and_output_capability_construction_serialize_object_api_partial_differential_equations_partialdifferentialequationcoordinatechange_serialize_object"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationcoordinatechange_serializeobject.1b4d5aae1ef2"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationCoordinateChange method</p>

```swift signature
func serializeObject() -> String
```

Serialize this coordinate change in the versioned canonical object grammar.

### serialize_object

<a id="entry-presentation_swift_serialization_and_output_capability_construction_serialize_object_api_partial_differential_equations_partialdifferentialequationproblem_serialize_object"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationproblem_serializeobject.8e1e036fa0eb"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationProblem method</p>

```swift signature
func serializeObject() -> String
```

Serialize this problem in the versioned canonical object grammar.

### serialize_object

<a id="entry-presentation_swift_serialization_and_output_capability_construction_serialize_object_api_serialization_point2d_serialize_object"></a>
<a id="placement-placement.swift.swift_object.uniffipoint2d_serializeobject.a63681fb7fb4"></a>
<p class="symi-entry-owner">UniffiPoint2d method</p>

```swift signature
func serializeObject() -> String
```

Serialize an expression, matrix, or geometry object to the stable Symi serialization format, round-trippable via `parse_serialized_object`.

### serialize_object

<a id="entry-presentation_swift_serialization_and_output_capability_construction_serialize_object_api_serialization_polygon2d_serialize_object"></a>
<a id="placement-placement.swift.swift_object.uniffipolygon2d_serializeobject.bbb443b26008"></a>
<p class="symi-entry-owner">UniffiPolygon2d method</p>

```swift signature
func serializeObject() -> String
```

Serialize an expression, matrix, or geometry object to the stable Symi serialization format, round-trippable via `parse_serialized_object`.

### serialize_object

<a id="entry-presentation_swift_serialization_and_output_capability_construction_serialize_object_api_serialization_segment2d_serialize_object"></a>
<a id="placement-placement.swift.swift_object.uniffisegment2d_serializeobject.ccfb383a723e"></a>
<p class="symi-entry-owner">UniffiSegment2d method</p>

```swift signature
func serializeObject() -> String
```

Serialize an expression, matrix, or geometry object to the stable Symi serialization format, round-trippable via `parse_serialized_object`.

### serialize_object

<a id="entry-presentation_swift_serialization_and_output_capability_construction_serialize_object_api_serialization_triangle2d_serialize_object"></a>
<a id="placement-placement.swift.swift_object.uniffitriangle2d_serializeobject.f4199b03a835"></a>
<p class="symi-entry-owner">UniffiTriangle2d method</p>

```swift signature
func serializeObject() -> String
```

Serialize an expression, matrix, or geometry object to the stable Symi serialization format, round-trippable via `parse_serialized_object`.

### to_latex

<a id="entry-presentation_swift_serialization_and_output_capability_construction_to_latex_api_session_to_latex"></a>
<a id="placement-placement.swift.swift_object.uniffisession_tolatex.88c140d1a2fb"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func toLatex(target: UniffiExpression) -> String
```

Render an expression as LaTeX. Matrices and geometry objects have their own `to_latex` methods.

### to_latex

<a id="entry-presentation_swift_serialization_and_output_capability_construction_to_latex_api_expression_to_latex"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_tolatex.8a9dd2119a1f"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func toLatex() -> String
```

Render an expression as LaTeX. Matrices and geometry objects have their own `to_latex` methods.

### to_latex

<a id="entry-presentation_swift_serialization_and_output_capability_construction_to_latex_api_circle2d_to_latex"></a>
<a id="placement-placement.swift.swift_object.unifficircle2d_tolatex.64aa2b211805"></a>
<p class="symi-entry-owner">UniffiCircle2d method</p>

```swift signature
func toLatex() -> String
```

Render an expression as LaTeX. Matrices and geometry objects have their own `to_latex` methods.

### to_latex

<a id="entry-presentation_swift_serialization_and_output_capability_construction_to_latex_api_serialization_matrix_to_latex"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_tolatex.97b22797efad"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func toLatex() -> String
```

Render an expression as LaTeX. Matrices and geometry objects have their own `to_latex` methods.

### to_latex

<a id="entry-presentation_swift_serialization_and_output_capability_construction_to_latex_api_partial_differential_equations_partialdifferentialequationproblem_to_latex"></a>
<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationproblem_tolatex.20a0b38477dc"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationProblem method</p>

```swift signature
func toLatex() -> String
```

Render this problem as LaTeX, as a system when it carries conditions.

### to_latex

<a id="entry-presentation_swift_serialization_and_output_capability_construction_to_latex_api_point2d_to_latex"></a>
<a id="placement-placement.swift.swift_object.uniffipoint2d_tolatex.8922f1a82f65"></a>
<p class="symi-entry-owner">UniffiPoint2d method</p>

```swift signature
func toLatex() -> String
```

Render an expression as LaTeX. Matrices and geometry objects have their own `to_latex` methods.

### to_latex

<a id="entry-presentation_swift_serialization_and_output_capability_construction_to_latex_api_polygon2d_to_latex"></a>
<a id="placement-placement.swift.swift_object.uniffipolygon2d_tolatex.5b046a98938b"></a>
<p class="symi-entry-owner">UniffiPolygon2d method</p>

```swift signature
func toLatex() -> String
```

Render an expression as LaTeX. Matrices and geometry objects have their own `to_latex` methods.

### to_latex

<a id="entry-presentation_swift_serialization_and_output_capability_construction_to_latex_api_segment2d_to_latex"></a>
<a id="placement-placement.swift.swift_object.uniffisegment2d_tolatex.70f79655cf03"></a>
<p class="symi-entry-owner">UniffiSegment2d method</p>

```swift signature
func toLatex() -> String
```

Render an expression as LaTeX. Matrices and geometry objects have their own `to_latex` methods.

### to_latex

<a id="entry-presentation_swift_serialization_and_output_capability_construction_to_latex_api_geometry_operations_triangle2d_to_latex"></a>
<a id="placement-placement.swift.swift_object.uniffitriangle2d_tolatex.59870f7a2694"></a>
<p class="symi-entry-owner">UniffiTriangle2d method</p>

```swift signature
func toLatex() -> String
```

Render an expression as LaTeX. Matrices and geometry objects have their own `to_latex` methods.

