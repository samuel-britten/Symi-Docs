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

<a id="placement-placement.wasm.wasm_class.circle2d_serializeobject.4ffca9023185"></a>
### Circle2d.serializeObject

`pub fn serialize_object(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.circle2d_tolatex.2d6cae698d4b"></a>
### Circle2d.toLatex

`pub fn to_latex(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_parselatex.691f111b5629"></a>
### Context.parseLatex

`pub fn parse_latex(&self, latex: &str) -> Result<JsValue, JsError>`

Returns `Result<JsValue, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_parselatexwithenvironment.3e3cebf3e09b"></a>
### Context.parseLatexWithEnvironment

`pub fn parse_latex_with_environment(&self, latex: &str, serialized_definitions: Box<[JsValue]>) -> Result<JsValue, JsError>`

Returns `Result<JsValue, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_parseserializedobject.c34fdf0f8316"></a>
### Context.parseSerializedObject

`pub fn parse_serialized_object(&self, text: &str) -> Result<JsValue, JsError>`

Returns `Result<JsValue, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_tolatex.be83ad30b575"></a>
### Context.toLatex

`pub fn to_latex(&self, input_expression: &Expression) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_tolatexwithoptions.1022577595e7"></a>
### Context.toLatexWithOptions

`pub fn to_latex_with_options(&self, input_expression: &Expression, exponential_style: &str, natural_logarithm_style: &str, multiletter_symbol_style: &str) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_serializeobject.0e7634ac3af8"></a>
### Expression.serializeObject

`pub fn serialize_object(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_tolatex.1ec6388c2f23"></a>
### Expression.toLatex

`pub fn to_latex(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_tolatexwithoptions.e10c150aa233"></a>
### Expression.toLatexWithOptions

`pub fn to_latex_with_options(&self, exponential_style: &str, natural_logarithm_style: &str, multiletter_symbol_style: &str) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_serializeobject.da3d7d802113"></a>
### Matrix.serializeObject

`pub fn serialize_object(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_tolatex.c244544a6fc7"></a>
### Matrix.toLatex

`pub fn to_latex(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcoordinatechange_serializeobject.15bd50391c28"></a>
### PartialDifferentialEquationCoordinateChange.serializeObject

`pub fn serialize_object(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationproblem_serializeobject.cf6d279e96f9"></a>
### PartialDifferentialEquationProblem.serializeObject

`pub fn serialize_object(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationproblem_tolatex.101fc04fe4e5"></a>
### PartialDifferentialEquationProblem.toLatex

`pub fn to_latex(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.point2d_serializeobject.aa39b3c501d6"></a>
### Point2d.serializeObject

`pub fn serialize_object(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.point2d_tolatex.f41c507935a0"></a>
### Point2d.toLatex

`pub fn to_latex(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.polygon2d_serializeobject.db8e31e4b335"></a>
### Polygon2d.serializeObject

`pub fn serialize_object(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.polygon2d_tolatex.b367ecb5ca3c"></a>
### Polygon2d.toLatex

`pub fn to_latex(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.segment2d_serializeobject.47c37e175e6d"></a>
### Segment2d.serializeObject

`pub fn serialize_object(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.segment2d_tolatex.e2e4c68ded95"></a>
### Segment2d.toLatex

`pub fn to_latex(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.triangle2d_serializeobject.75e809239ee9"></a>
### Triangle2d.serializeObject

`pub fn serialize_object(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.triangle2d_tolatex.2dd59c291c87"></a>
### Triangle2d.toLatex

`pub fn to_latex(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_parselatex.f6216d8e0b47"></a>
### module.parseLatex

`fn parse_latex(latex: &str) -> Result<JsValue, JsError>`

Returns `Result<JsValue, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_parselatexwithenvironment.0d0f63f757f1"></a>
### module.parseLatexWithEnvironment

`fn parse_latex_with_environment(latex: &str, serialized_definitions: Box<[JsValue]>) -> Result<JsValue, JsError>`

Returns `Result<JsValue, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_parseserializedobject.d18b5b415e87"></a>
### module.parseSerializedObject

`fn parse_serialized_object(text: &str) -> Result<JsValue, JsError>`

Returns `Result<JsValue, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_tolatex.9d339325aaff"></a>
### module.toLatex

`fn to_latex(input_expression: &Expression) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_tolatexwithoptions.91e728aa5fb0"></a>
### module.toLatexWithOptions

`fn to_latex_with_options(input_expression: &Expression, exponential_style: &str, natural_logarithm_style: &str, multiletter_symbol_style: &str) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

