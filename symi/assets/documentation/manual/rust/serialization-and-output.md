# Serialization and output

Serialization is a lossless interchange format for supported mathematical objects. Rendering is a presentation operation and does not change the object.

## Output and serialization

### to_latex

<a id="placement-placement.rust.native_rust.api_circle2d_to_latex.3130c44834de"></a>
`symi::api::Circle2d — pub fn to_latex(&self) -> Result<String, ApiError>`

<a id="placement-placement.rust.native_rust.api_expression_to_latex.ce433b7f9d2b"></a>
`symi::api::Expression — pub fn to_latex(&self) -> Result<String, ApiError>`

<a id="placement-placement.rust.native_rust.api_point2d_to_latex.a2ed16f2341f"></a>
`symi::api::Point2d — pub fn to_latex(&self) -> Result<String, ApiError>`

<a id="placement-placement.rust.native_rust.api_polygon2d_to_latex.62a1ae089e8e"></a>
`symi::api::Polygon2d — pub fn to_latex(&self) -> Result<String, ApiError>`

<a id="placement-placement.rust.native_rust.api_segment2d_to_latex.3052276a28d9"></a>
`symi::api::Segment2d — pub fn to_latex(&self) -> Result<String, ApiError>`

<a id="placement-placement.rust.native_rust.api_session_to_latex.c0ccfa975d90"></a>
`symi::api::Session — pub fn to_latex(&self, target: &Expression) -> Result<String, ApiError>`

<a id="placement-placement.rust.native_rust.api_geometry_operations_triangle2d_to_latex.ef87a3202942"></a>
`symi::api::geometry_operations::Triangle2d — pub fn to_latex(&self) -> Result<String, ApiError>`

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproblem_to_latex.883e6885da77"></a>
`symi::api::partial_differential_equations::PartialDifferentialEquationProblem — pub fn to_latex(&self) -> Result<String, ApiError>`

<a id="placement-placement.rust.native_rust.api_serialization_matrix_to_latex.c536139d9ac7"></a>
`symi::api::serialization::Matrix — pub fn to_latex(&self) -> Result<String, ApiError>`


Render an expression as LaTeX. Matrices and geometry objects have their own
`to_latex` methods.

### to_latex_with_options

<a id="placement-placement.rust.native_rust.api_serialization_expression_to_latex_with_options.51c62a0e9808"></a>
`symi::api::serialization::Expression — pub fn to_latex_with_options(&self, options: LatexPresentationOptions) -> Result<String, ApiError>`

<a id="placement-placement.rust.native_rust.api_serialization_session_to_latex_with_options.70c9eb1ff95b"></a>
`symi::api::serialization::Session — pub fn to_latex_with_options(&self, input_expression: &Expression, options: LatexPresentationOptions) -> Result<String, ApiError>`


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

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationcoordinatechange_serialize_object.2793ded9db74"></a>
`symi::api::partial_differential_equations::PartialDifferentialEquationCoordinateChange — pub fn serialize_object(&self) -> Result<String, ApiError>`

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproblem_serialize_object.b2fffe00c843"></a>
`symi::api::partial_differential_equations::PartialDifferentialEquationProblem — pub fn serialize_object(&self) -> Result<String, ApiError>`

<a id="placement-placement.rust.native_rust.api_serialization_circle2d_serialize_object.54b3cdcfee3a"></a>
`symi::api::serialization::Circle2d — pub fn serialize_object(&self) -> Result<String, ApiError>`

<a id="placement-placement.rust.native_rust.api_serialization_expression_serialize_object.c14b52acb984"></a>
`symi::api::serialization::Expression — pub fn serialize_object(&self) -> Result<String, ApiError>`

<a id="placement-placement.rust.native_rust.api_serialization_matrix_serialize_object.52e17674d487"></a>
`symi::api::serialization::Matrix — pub fn serialize_object(&self) -> Result<String, ApiError>`

<a id="placement-placement.rust.native_rust.api_serialization_point2d_serialize_object.0d2708e257d3"></a>
`symi::api::serialization::Point2d — pub fn serialize_object(&self) -> Result<String, ApiError>`

<a id="placement-placement.rust.native_rust.api_serialization_polygon2d_serialize_object.e0c6b54c91bd"></a>
`symi::api::serialization::Polygon2d — pub fn serialize_object(&self) -> Result<String, ApiError>`

<a id="placement-placement.rust.native_rust.api_serialization_segment2d_serialize_object.6912c5cd4042"></a>
`symi::api::serialization::Segment2d — pub fn serialize_object(&self) -> Result<String, ApiError>`

<a id="placement-placement.rust.native_rust.api_serialization_session_serialize_object.0e62fa6ce0a4"></a>
`symi::api::serialization::Session — pub fn serialize_object(&self, object: &MathematicalObject) -> Result<String, ApiError>`

<a id="placement-placement.rust.native_rust.api_serialization_triangle2d_serialize_object.490ff325b12a"></a>
`symi::api::serialization::Triangle2d — pub fn serialize_object(&self) -> Result<String, ApiError>`


Serialize an expression, matrix, or geometry object to the stable Symi
serialization format, round-trippable via `parse_serialized_object`.

**Notes:** in WASM this is a per-object method because a single polymorphic
context method cannot downcast a JsValue back to an exported Rust type.

### parse_serialized_object

<a id="placement-placement.rust.native_rust.api_serialization_session_parse_serialized_object.6803210a8d14"></a>
`symi::api::serialization::Session — pub fn parse_serialized_object(&self, text: &str) -> Result<MathematicalObject, ApiError>`


Inverse of `serialize_object`; returns the matching surface class.

## Example

This family is not part of the recommended `symi::api` facade in this release. Call it through the native modules in the [native Rust API reference](/symi/rust/api/symi/).

