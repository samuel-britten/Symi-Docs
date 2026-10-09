# Serialization and output

Serialization is a lossless interchange format for supported mathematical objects. Rendering is a presentation operation and does not change the object.

## Output and serialization

### to_latex

<a id="placement-placement.python.python_class.circle2d_to_latex.efe70de1b2c3"></a>
`Circle2d.to_latex()`

<a id="placement-placement.python.python_class.context_to_latex.73b190bf3fc4"></a>
`Context.to_latex(input_expression)`

<a id="placement-placement.python.python_class.expression_to_latex.e9dc20d35844"></a>
`Expression.to_latex()`

<a id="placement-placement.python.python_class.matrix_to_latex.90b107e6733a"></a>
`Matrix.to_latex()`

<a id="placement-placement.python.python_class.partialdifferentialequationproblem_to_latex.c404806e4912"></a>
`PartialDifferentialEquationProblem.to_latex()`

<a id="placement-placement.python.python_class.point2d_to_latex.1fd2ddc37371"></a>
`Point2d.to_latex()`

<a id="placement-placement.python.python_class.polygon2d_to_latex.815f587a7564"></a>
`Polygon2d.to_latex()`

<a id="placement-placement.python.python_class.segment2d_to_latex.9f28261e9a69"></a>
`Segment2d.to_latex()`

<a id="placement-placement.python.python_class.triangle2d_to_latex.b2372ec98eca"></a>
`Triangle2d.to_latex()`

<a id="placement-placement.python.python_module.module_to_latex.a095e60f7b7e"></a>
`symi.to_latex(input_expression)`


Render an expression as LaTeX. Matrices and geometry objects have their own
`to_latex` methods.

### to_latex_with_options

<a id="placement-placement.python.python_class.context_to_latex_with_options.808365ac2597"></a>
`Context.to_latex_with_options(input_expression, exponential_style, natural_logarithm_style, multiletter_symbol_style)`

<a id="placement-placement.python.python_class.expression_to_latex_with_options.a846d94eb017"></a>
`Expression.to_latex_with_options(exponential_style, natural_logarithm_style, multiletter_symbol_style)`

<a id="placement-placement.python.python_module.module_to_latex_with_options.170d636f4702"></a>
`symi.to_latex_with_options(input_expression, exponential_style, natural_logarithm_style, multiletter_symbol_style)`


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

<a id="placement-placement.python.python_class.context_serialize_object.4db46f297a23"></a>
`Context.serialize_object(object)`

<a id="placement-placement.python.python_class.partialdifferentialequationcoordinatechange_serialize_object.622ee8029a68"></a>
`PartialDifferentialEquationCoordinateChange.serialize_object()`

<a id="placement-placement.python.python_class.partialdifferentialequationproblem_serialize_object.41a1ab74e1fa"></a>
`PartialDifferentialEquationProblem.serialize_object()`

<a id="placement-placement.python.python_module.module_serialize_object.96b1122ae355"></a>
`symi.serialize_object(object)`


Serialize an expression, matrix, or geometry object to the stable Symi
serialization format, round-trippable via `parse_serialized_object`.

**Notes:** in WASM this is a per-object method because a single polymorphic
context method cannot downcast a JsValue back to an exported Rust type.

### parse_serialized_object

<a id="placement-placement.python.python_class.context_parse_serialized_object.cdcae6e05edc"></a>
`Context.parse_serialized_object(text)`

<a id="placement-placement.python.python_module.module_parse_serialized_object.4e2ecb9bb139"></a>
`symi.parse_serialized_object(text)`


Inverse of `serialize_object`; returns the matching surface class.

## Example

Round-trip an expression through the serialized form and render it as LaTeX.

```python
import symi

x = symi.symbol("x")
target = symi.integrate(symi.sin(x), "x")

serialized = symi.serialize_object(target)
print(serialized)
print(symi.parse_serialized_object(serialized))
print(symi.to_latex(target))
```

