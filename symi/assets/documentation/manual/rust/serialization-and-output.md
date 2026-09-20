# Serialization and output

Serialization is a lossless interchange format for supported mathematical objects. Rendering is a presentation operation and does not change the object.

## Output and serialization

### to_latex

<a id="entry-presentation_rust_api_session_to_latex"></a>
<a id="placement-placement.rust.native_rust.api_session_to_latex.c0ccfa975d90"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn to_latex(&self, target: &Expression) -> Result<String, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms and variants</summary>

<a id="placement-placement.rust.native_rust.api_expression_to_latex.ce433b7f9d2b"></a>
<p class="symi-entry-owner">api::Expression method: <code>api::Expression::to_latex</code></p>

```rust signature
pub fn to_latex(&self) -> Result<String, ApiError>
```

<a id="placement-placement.rust.native_rust.api_circle2d_to_latex.3130c44834de"></a>
<p class="symi-entry-owner">Variant for this object — api::Circle2d method: <code>api::Circle2d::to_latex</code></p>

```rust signature
pub fn to_latex(&self) -> Result<String, ApiError>
```

<a id="placement-placement.rust.native_rust.api_point2d_to_latex.a2ed16f2341f"></a>
<p class="symi-entry-owner">Variant for this object — api::Point2d method: <code>api::Point2d::to_latex</code></p>

```rust signature
pub fn to_latex(&self) -> Result<String, ApiError>
```

<a id="placement-placement.rust.native_rust.api_polygon2d_to_latex.62a1ae089e8e"></a>
<p class="symi-entry-owner">Variant for this object — api::Polygon2d method: <code>api::Polygon2d::to_latex</code></p>

```rust signature
pub fn to_latex(&self) -> Result<String, ApiError>
```

<a id="placement-placement.rust.native_rust.api_segment2d_to_latex.3052276a28d9"></a>
<p class="symi-entry-owner">Variant for this object — api::Segment2d method: <code>api::Segment2d::to_latex</code></p>

```rust signature
pub fn to_latex(&self) -> Result<String, ApiError>
```

<a id="placement-placement.rust.native_rust.api_geometry_operations_triangle2d_to_latex.ef87a3202942"></a>
<p class="symi-entry-owner">Variant for this object — api::geometry_operations::Triangle2d method: <code>api::geometry_operations::Triangle2d::to_latex</code></p>

```rust signature
pub fn to_latex(&self) -> Result<String, ApiError>
```

<a id="placement-placement.rust.native_rust.api_serialization_matrix_to_latex.c536139d9ac7"></a>
<p class="symi-entry-owner">Variant for this object — api::serialization::Matrix method: <code>api::serialization::Matrix::to_latex</code></p>

```rust signature
pub fn to_latex(&self) -> Result<String, ApiError>
```

</details>


Render an expression as LaTeX. Matrices and geometry objects have their own
`to_latex` methods.

### to_latex_with_options

<a id="entry-presentation_rust_api_session_to_latex_with_options"></a>
<a id="placement-placement.rust.native_rust.api_serialization_session_to_latex_with_options.70c9eb1ff95b"></a>
<p class="symi-entry-owner">api::serialization::Session method</p>

```rust signature
pub fn to_latex_with_options(
    &self,
    input_expression: &Expression,
    options: LatexPresentationOptions,
) -> Result<String, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_serialization_expression_to_latex_with_options.51c62a0e9808"></a>
<p class="symi-entry-owner">api::serialization::Expression method: <code>api::serialization::Expression::to_latex_with_options</code></p>

```rust signature
pub fn to_latex_with_options(
    &self,
    options: LatexPresentationOptions,
) -> Result<String, ApiError>
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

<a id="entry-presentation_rust_api_session_serialize_object"></a>
<a id="placement-placement.rust.native_rust.api_serialization_session_serialize_object.0e62fa6ce0a4"></a>
<p class="symi-entry-owner">api::serialization::Session method</p>

```rust signature
pub fn serialize_object(
    &self,
    object: &MathematicalObject,
) -> Result<String, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms and variants</summary>

<a id="placement-placement.rust.native_rust.api_serialization_expression_serialize_object.c14b52acb984"></a>
<p class="symi-entry-owner">api::serialization::Expression method: <code>api::serialization::Expression::serialize_object</code></p>

```rust signature
pub fn serialize_object(&self) -> Result<String, ApiError>
```

<a id="placement-placement.rust.native_rust.api_serialization_circle2d_serialize_object.54b3cdcfee3a"></a>
<p class="symi-entry-owner">Variant for this object — api::serialization::Circle2d method: <code>api::serialization::Circle2d::serialize_object</code></p>

```rust signature
pub fn serialize_object(&self) -> Result<String, ApiError>
```

<a id="placement-placement.rust.native_rust.api_serialization_matrix_serialize_object.52e17674d487"></a>
<p class="symi-entry-owner">Variant for this object — api::serialization::Matrix method: <code>api::serialization::Matrix::serialize_object</code></p>

```rust signature
pub fn serialize_object(&self) -> Result<String, ApiError>
```

<a id="placement-placement.rust.native_rust.api_serialization_point2d_serialize_object.0d2708e257d3"></a>
<p class="symi-entry-owner">Variant for this object — api::serialization::Point2d method: <code>api::serialization::Point2d::serialize_object</code></p>

```rust signature
pub fn serialize_object(&self) -> Result<String, ApiError>
```

<a id="placement-placement.rust.native_rust.api_serialization_polygon2d_serialize_object.e0c6b54c91bd"></a>
<p class="symi-entry-owner">Variant for this object — api::serialization::Polygon2d method: <code>api::serialization::Polygon2d::serialize_object</code></p>

```rust signature
pub fn serialize_object(&self) -> Result<String, ApiError>
```

<a id="placement-placement.rust.native_rust.api_serialization_segment2d_serialize_object.6912c5cd4042"></a>
<p class="symi-entry-owner">Variant for this object — api::serialization::Segment2d method: <code>api::serialization::Segment2d::serialize_object</code></p>

```rust signature
pub fn serialize_object(&self) -> Result<String, ApiError>
```

<a id="placement-placement.rust.native_rust.api_serialization_triangle2d_serialize_object.490ff325b12a"></a>
<p class="symi-entry-owner">Variant for this object — api::serialization::Triangle2d method: <code>api::serialization::Triangle2d::serialize_object</code></p>

```rust signature
pub fn serialize_object(&self) -> Result<String, ApiError>
```

</details>


Serialize an expression, matrix, or geometry object to the stable Symi
serialization format, round-trippable via `parse_serialized_object`.

**Notes:** in WASM this is a per-object method because a single polymorphic
context method cannot downcast a JsValue back to an exported Rust type.

### parse_serialized_object

<a id="entry-presentation_rust_api_session_parse_serialized_object"></a>
<a id="placement-placement.rust.native_rust.api_serialization_session_parse_serialized_object.6803210a8d14"></a>
<p class="symi-entry-owner">api::serialization::Session method</p>

```rust signature
pub fn parse_serialized_object(
    &self,
    text: &str,
) -> Result<MathematicalObject, ApiError>
```


Inverse of `serialize_object`; returns the matching surface class.

## Example

This family is not part of the recommended `symi::api` facade in this release. Call it through the native modules in the [native Rust API reference](/symi/rust/api/symi/).


## Additional API

### api::serialization

<a id="entry-presentation_rust_native_module_api_serialization"></a>
<a id="placement-placement.rust.native_rust.api_serialization.1bd8e0614b2c"></a>
<p class="symi-entry-owner">api module</p>

```rust signature
pub mod serialization;
```

Serialization, parsing, and presentation operations of the native API.

### ExponentialPresentation

<a id="entry-presentation_rust_api_exponentialpresentation"></a>
<a id="placement-placement.rust.native_rust.api_serialization_exponentialpresentation.f056ba2cf31c"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum ExponentialPresentation
```

How an exponential is rendered.

#### ExponentialPresentation.ECaret

<a id="entry-presentation_rust_api_exponentialpresentation_ecaret"></a>
<a id="placement-placement.rust.native_rust.api_serialization_exponentialpresentation_ecaret.fe482de56c20"></a>
<p class="symi-entry-owner">api::serialization::ExponentialPresentation variant</p>

```rust signature
ECaret,
```

Render as a power of `e`.

#### ExponentialPresentation.ExpFunction

<a id="entry-presentation_rust_api_exponentialpresentation_expfunction"></a>
<a id="placement-placement.rust.native_rust.api_serialization_exponentialpresentation_expfunction.86e02237e747"></a>
<p class="symi-entry-owner">api::serialization::ExponentialPresentation variant</p>

```rust signature
ExpFunction,
```

Render as the `exp` function.

### LatexPresentationOptions

<a id="entry-presentation_rust_api_latexpresentationoptions"></a>
<a id="placement-placement.rust.native_rust.api_latexpresentationoptions.686f1d6bbb5c"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use serialization::LatexPresentationOptions;
```

Presentation choices applied when rendering an expression as LaTeX.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_serialization_latexpresentationoptions.8d9e846d1a6c"></a>
<p class="symi-entry-owner">Type: <code>api::serialization::LatexPresentationOptions</code></p>

```rust signature
pub struct LatexPresentationOptions
```

</details>

#### LatexPresentationOptions.from_style_names

<a id="entry-presentation_rust_api_latexpresentationoptions_from_style_names"></a>
<a id="placement-placement.rust.native_rust.api_serialization_latexpresentationoptions_from_style_names.060ff70117a1"></a>
<p class="symi-entry-owner">api::serialization::LatexPresentationOptions method</p>

```rust signature
pub fn from_style_names(
    exponential_style: &str,
    natural_logarithm_style: &str,
    multiletter_symbol_style: &str,
) -> Self
```

Build presentation options from the stable style spellings used by every binding.

### MathematicalObject

<a id="entry-presentation_rust_api_mathematicalobject"></a>
<a id="placement-placement.rust.native_rust.api_mathematicalobject.c76e26ad0ff3"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use serialization::MathematicalObject;
```

Any top-level mathematical object a session can serialize or reconstruct.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_serialization_mathematicalobject.4f696f4d2785"></a>
<p class="symi-entry-owner">Type: <code>api::serialization::MathematicalObject</code></p>

```rust signature
pub enum MathematicalObject
```

</details>

#### MathematicalObject.Circle

<a id="entry-presentation_rust_api_mathematicalobject_circle"></a>
<a id="placement-placement.rust.native_rust.api_serialization_mathematicalobject_circle.110cd7875f7c"></a>
<p class="symi-entry-owner">api::serialization::MathematicalObject variant</p>

```rust signature
Circle(Circle2d)
```

A circle circumference.

#### MathematicalObject.DiophantineSolution

<a id="entry-presentation_rust_api_mathematicalobject_diophantinesolution"></a>
<a id="placement-placement.rust.native_rust.api_serialization_mathematicalobject_diophantinesolution.6c1a4d8aa9ca"></a>
<p class="symi-entry-owner">api::serialization::MathematicalObject variant</p>

```rust signature
DiophantineSolution(String)
```

A Diophantine solution family, carried in its lossless serialized text.

#### MathematicalObject.Expression

<a id="entry-presentation_rust_api_mathematicalobject_expression"></a>
<a id="placement-placement.rust.native_rust.api_serialization_mathematicalobject_expression.4cdfa1f13874"></a>
<p class="symi-entry-owner">api::serialization::MathematicalObject variant</p>

```rust signature
Expression(Expression)
```

An interned expression.

#### MathematicalObject.Matrix

<a id="entry-presentation_rust_api_mathematicalobject_matrix"></a>
<a id="placement-placement.rust.native_rust.api_serialization_mathematicalobject_matrix.183aef3672be"></a>
<p class="symi-entry-owner">api::serialization::MathematicalObject variant</p>

```rust signature
Matrix(Matrix)
```

A matrix.

#### MathematicalObject.PartialDifferentialEquation

<a id="entry-presentation_rust_api_mathematicalobject_partialdifferentialequation"></a>
<a id="placement-placement.rust.native_rust.api_serialization_mathematicalobject_partialdifferentialequation.e0ed9fee767e"></a>
<p class="symi-entry-owner">api::serialization::MathematicalObject variant</p>

```rust signature
PartialDifferentialEquation(crate::api::PartialDifferentialEquationProblem)
```

A validated scalar partial differential equation problem.

#### MathematicalObject.Point

<a id="entry-presentation_rust_api_mathematicalobject_point"></a>
<a id="placement-placement.rust.native_rust.api_serialization_mathematicalobject_point.c6758e35526d"></a>
<p class="symi-entry-owner">api::serialization::MathematicalObject variant</p>

```rust signature
Point(Point2d)
```

A point.

#### MathematicalObject.Polygon

<a id="entry-presentation_rust_api_mathematicalobject_polygon"></a>
<a id="placement-placement.rust.native_rust.api_serialization_mathematicalobject_polygon.5b39aaa939e2"></a>
<p class="symi-entry-owner">api::serialization::MathematicalObject variant</p>

```rust signature
Polygon(Polygon2d)
```

A polygon boundary.

#### MathematicalObject.Segment

<a id="entry-presentation_rust_api_mathematicalobject_segment"></a>
<a id="placement-placement.rust.native_rust.api_serialization_mathematicalobject_segment.7f5845611ba1"></a>
<p class="symi-entry-owner">api::serialization::MathematicalObject variant</p>

```rust signature
Segment(Segment2d)
```

A closed segment.

#### MathematicalObject.Triangle

<a id="entry-presentation_rust_api_mathematicalobject_triangle"></a>
<a id="placement-placement.rust.native_rust.api_serialization_mathematicalobject_triangle.732851d9fd10"></a>
<p class="symi-entry-owner">api::serialization::MathematicalObject variant</p>

```rust signature
Triangle(Triangle2d)
```

A triangle boundary.

### MultiletterSymbolPresentation

<a id="entry-presentation_rust_api_multilettersymbolpresentation"></a>
<a id="placement-placement.rust.native_rust.api_serialization_multilettersymbolpresentation.2735d7d8dbb7"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum MultiletterSymbolPresentation
```

How a multiple-letter symbol name is rendered.

#### MultiletterSymbolPresentation.Italic

<a id="entry-presentation_rust_api_multilettersymbolpresentation_italic"></a>
<a id="placement-placement.rust.native_rust.api_serialization_multilettersymbolpresentation_italic.613a4af820c1"></a>
<p class="symi-entry-owner">api::serialization::MultiletterSymbolPresentation variant</p>

```rust signature
Italic,
```

Render in italic.

#### MultiletterSymbolPresentation.Upright

<a id="entry-presentation_rust_api_multilettersymbolpresentation_upright"></a>
<a id="placement-placement.rust.native_rust.api_serialization_multilettersymbolpresentation_upright.96fb67c14ec7"></a>
<p class="symi-entry-owner">api::serialization::MultiletterSymbolPresentation variant</p>

```rust signature
Upright,
```

Render upright.

### NaturalLogarithmPresentation

<a id="entry-presentation_rust_api_naturallogarithmpresentation"></a>
<a id="placement-placement.rust.native_rust.api_serialization_naturallogarithmpresentation.ff67e4844e8b"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum NaturalLogarithmPresentation
```

How the natural logarithm is rendered.

#### NaturalLogarithmPresentation.Ln

<a id="entry-presentation_rust_api_naturallogarithmpresentation_ln"></a>
<a id="placement-placement.rust.native_rust.api_serialization_naturallogarithmpresentation_ln.766b573c6b7f"></a>
<p class="symi-entry-owner">api::serialization::NaturalLogarithmPresentation variant</p>

```rust signature
Ln,
```

Render as `ln`.

#### NaturalLogarithmPresentation.Log

<a id="entry-presentation_rust_api_naturallogarithmpresentation_log"></a>
<a id="placement-placement.rust.native_rust.api_serialization_naturallogarithmpresentation_log.a5e4d3205329"></a>
<p class="symi-entry-owner">api::serialization::NaturalLogarithmPresentation variant</p>

```rust signature
Log,
```

Render as `log`.

