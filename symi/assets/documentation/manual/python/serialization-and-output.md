# Serialization and output

Serialization is a lossless interchange format for supported mathematical objects. Rendering is a presentation operation and does not change the object.

## Output and serialization

### to_latex

<a id="entry-presentation_python_api_session_to_latex"></a>
<a id="placement-placement.python.python_module.module_to_latex.a095e60f7b7e"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
to_latex(input_expression: ExpressionLike) -> str
```

<details class="symi-calling-forms">
<summary>Calling forms and variants</summary>

<a id="placement-placement.python.python_class.context_to_latex.73b190bf3fc4"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.to_latex</code></p>

```python signature
to_latex(input_expression: ExpressionLike) -> str
```

<a id="placement-placement.python.python_class.expression_to_latex.e9dc20d35844"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.to_latex</code></p>

```python signature
to_latex() -> str
```

<a id="placement-placement.python.python_class.circle2d_to_latex.efe70de1b2c3"></a>
<p class="symi-entry-owner">Variant for this object — Circle2d method: <code>Circle2d.to_latex</code></p>

```python signature
to_latex() -> str
```

<a id="placement-placement.python.python_class.matrix_to_latex.90b107e6733a"></a>
<p class="symi-entry-owner">Variant for this object — Matrix method: <code>Matrix.to_latex</code></p>

```python signature
to_latex() -> str
```

<a id="placement-placement.python.python_class.point2d_to_latex.1fd2ddc37371"></a>
<p class="symi-entry-owner">Variant for this object — Point2d method: <code>Point2d.to_latex</code></p>

```python signature
to_latex() -> str
```

<a id="placement-placement.python.python_class.polygon2d_to_latex.815f587a7564"></a>
<p class="symi-entry-owner">Variant for this object — Polygon2d method: <code>Polygon2d.to_latex</code></p>

```python signature
to_latex() -> str
```

<a id="placement-placement.python.python_class.segment2d_to_latex.9f28261e9a69"></a>
<p class="symi-entry-owner">Variant for this object — Segment2d method: <code>Segment2d.to_latex</code></p>

```python signature
to_latex() -> str
```

<a id="placement-placement.python.python_class.triangle2d_to_latex.b2372ec98eca"></a>
<p class="symi-entry-owner">Variant for this object — Triangle2d method: <code>Triangle2d.to_latex</code></p>

```python signature
to_latex() -> str
```

</details>


Render an expression as LaTeX. Matrices and geometry objects have their own
`to_latex` methods.

### to_latex_with_options

<a id="entry-presentation_python_api_session_to_latex_with_options"></a>
<a id="placement-placement.python.python_module.module_to_latex_with_options.170d636f4702"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
to_latex_with_options(
    input_expression: ExpressionLike,
    exponential_style: str,
    natural_logarithm_style: str,
    multiletter_symbol_style: str,
) -> str
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_to_latex_with_options.808365ac2597"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.to_latex_with_options</code></p>

```python signature
to_latex_with_options(
    input_expression: ExpressionLike,
    exponential_style: str,
    natural_logarithm_style: str,
    multiletter_symbol_style: str,
) -> str
```

<a id="placement-placement.python.python_class.expression_to_latex_with_options.a846d94eb017"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.to_latex_with_options</code></p>

```python signature
to_latex_with_options(
    exponential_style: str,
    natural_logarithm_style: str,
    multiletter_symbol_style: str,
) -> str
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

<a id="entry-presentation_python_api_session_serialize_object"></a>
<a id="placement-placement.python.python_module.module_serialize_object.96b1122ae355"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
serialize_object(object: Any) -> str
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_serialize_object.4db46f297a23"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.serialize_object</code></p>

```python signature
serialize_object(object: Any) -> str
```

</details>


Serialize an expression, matrix, or geometry object to the stable Symi
serialization format, round-trippable via `parse_serialized_object`.

**Notes:** in WASM this is a per-object method because a single polymorphic
context method cannot downcast a JsValue back to an exported Rust type.

### parse_serialized_object

<a id="entry-presentation_python_api_session_parse_serialized_object"></a>
<a id="placement-placement.python.python_module.module_parse_serialized_object.4e2ecb9bb139"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
parse_serialized_object(text: str) -> Any
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_parse_serialized_object.cdcae6e05edc"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.parse_serialized_object</code></p>

```python signature
parse_serialized_object(text: str) -> Any
```

</details>


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

