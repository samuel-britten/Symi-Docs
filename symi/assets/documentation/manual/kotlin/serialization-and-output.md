# Serialization and output

Serialization is a lossless interchange format for supported mathematical objects. Rendering is a presentation operation and does not change the object.

## Output and serialization

### to_latex

<a id="placement-placement.kotlin.kotlin_object.unifficircle2d_tolatex.a6799dc8867c"></a>
`UniffiCircle2d.toLatex(): kotlin.String`

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_tolatex.8b4e894b3ffd"></a>
`UniffiExpression.toLatex(): kotlin.String`

<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_tolatex.0c9624ca2cac"></a>
`UniffiMatrix.toLatex(): kotlin.String`

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationproblem_tolatex.0af18b336fcf"></a>
`UniffiPartialDifferentialEquationProblem.toLatex(): kotlin.String`

<a id="placement-placement.kotlin.kotlin_object.uniffipoint2d_tolatex.66dd1ba85bd2"></a>
`UniffiPoint2d.toLatex(): kotlin.String`

<a id="placement-placement.kotlin.kotlin_object.uniffipolygon2d_tolatex.943cd2f7031d"></a>
`UniffiPolygon2d.toLatex(): kotlin.String`

<a id="placement-placement.kotlin.kotlin_object.uniffisegment2d_tolatex.55209d9b3e7d"></a>
`UniffiSegment2d.toLatex(): kotlin.String`

<a id="placement-placement.kotlin.kotlin_object.uniffisession_tolatex.3093075c98d7"></a>
`UniffiSession.toLatex(target: UniffiExpression): kotlin.String`

<a id="placement-placement.kotlin.kotlin_object.uniffitriangle2d_tolatex.f6213183855c"></a>
`UniffiTriangle2d.toLatex(): kotlin.String`


Render an expression as LaTeX. Matrices and geometry objects have their own
`to_latex` methods.

### to_latex_with_options

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_tolatexwithoptions.211bf154729d"></a>
`UniffiExpression.toLatexWithOptions(options: UniffiLatexPresentationOptions): kotlin.String`

<a id="placement-placement.kotlin.kotlin_object.uniffisession_tolatexwithoptions.24a077d9c39b"></a>
`UniffiSession.toLatexWithOptions(inputExpression: UniffiExpression, options: UniffiLatexPresentationOptions): kotlin.String`


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

<a id="placement-placement.kotlin.kotlin_object.unifficircle2d_serializeobject.7dfb48cd9293"></a>
`UniffiCircle2d.serializeObject(): kotlin.String`

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_serializeobject.594940937dc2"></a>
`UniffiExpression.serializeObject(): kotlin.String`

<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_serializeobject.017b84005def"></a>
`UniffiMatrix.serializeObject(): kotlin.String`

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationcoordinatechange_serializeobject.bad31d249550"></a>
`UniffiPartialDifferentialEquationCoordinateChange.serializeObject(): kotlin.String`

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationproblem_serializeobject.2738e4601f5f"></a>
`UniffiPartialDifferentialEquationProblem.serializeObject(): kotlin.String`

<a id="placement-placement.kotlin.kotlin_object.uniffipoint2d_serializeobject.2a0376c78e17"></a>
`UniffiPoint2d.serializeObject(): kotlin.String`

<a id="placement-placement.kotlin.kotlin_object.uniffipolygon2d_serializeobject.f8e052334c30"></a>
`UniffiPolygon2d.serializeObject(): kotlin.String`

<a id="placement-placement.kotlin.kotlin_object.uniffisegment2d_serializeobject.2b33df32bc7a"></a>
`UniffiSegment2d.serializeObject(): kotlin.String`

<a id="placement-placement.kotlin.kotlin_object.uniffisession_serializeobject.df97076f5e3a"></a>
`UniffiSession.serializeObject(object: UniffiMathematicalObject): kotlin.String`

<a id="placement-placement.kotlin.kotlin_object.uniffitriangle2d_serializeobject.73d8b64a7fe4"></a>
`UniffiTriangle2d.serializeObject(): kotlin.String`


Serialize an expression, matrix, or geometry object to the stable Symi
serialization format, round-trippable via `parse_serialized_object`.

**Notes:** in WASM this is a per-object method because a single polymorphic
context method cannot downcast a JsValue back to an exported Rust type.

### parse_serialized_object

<a id="placement-placement.kotlin.kotlin_object.uniffisession_parseserializedobject.32556763e2ce"></a>
`UniffiSession.parseSerializedObject(text: kotlin.String): UniffiMathematicalObject`


Inverse of `serialize_object`; returns the matching surface class.

## Example

