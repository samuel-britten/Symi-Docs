# Geometry

Exact symbolic plane geometry. Coordinates, lengths, and angles are
`Expression` values.

## Constructors

Constructing a geometry class directly uses the shared default context.
The matching `Context` method constructs the object in an explicit context.

### point_2d

<a id="entry-presentation_python_geometry_capability_geometry_point_2d_api_session_point_2d"></a>
<a id="placement-placement.python.python_class.context_point_2d.d9bef617e242"></a>
<p class="symi-entry-owner">Explicit context</p>

```python signature
point_2d(x: Any, y: Any) -> Point2d
```




### segment_2d

<a id="entry-presentation_python_geometry_capability_geometry_segment_2d_api_session_segment_2d"></a>
<a id="placement-placement.python.python_class.context_segment_2d.2b58460d9c77"></a>
<p class="symi-entry-owner">Explicit context</p>

```python signature
segment_2d(start: Point2d, end: Point2d) -> Segment2d
```




### polygon_2d

<a id="entry-presentation_python_geometry_capability_geometry_polygon_2d_api_session_polygon_2d"></a>
<a id="placement-placement.python.python_class.context_polygon_2d.d8c8d3df3d19"></a>
<p class="symi-entry-owner">Explicit context</p>

```python signature
polygon_2d(vertices: list[Point2d]) -> Polygon2d
```




Simple polygon from its vertex list in order; degenerate inputs raise.

### triangle_2d

<a id="entry-presentation_python_geometry_capability_geometry_triangle_2d_api_session_triangle_2d"></a>
<a id="placement-placement.python.python_class.context_triangle_2d.a18dab1716eb"></a>
<p class="symi-entry-owner">Explicit context</p>

```python signature
triangle_2d(
    point_a: Point2d,
    point_b: Point2d,
    point_c: Point2d,
) -> Triangle2d
```




Collinear vertices raise.

### circle_2d

<a id="entry-presentation_python_geometry_capability_geometry_circle_2d_api_session_circle_2d"></a>
<a id="placement-placement.python.python_class.context_circle_2d.fa59e94268b5"></a>
<p class="symi-entry-owner">Explicit context</p>

```python signature
circle_2d(center: Point2d, radius: Any) -> Circle2d
```




## point_2d methods

### x

<a id="entry-presentation_python_geometry_capability_geometry_x_api_point2d_x"></a>
<a id="placement-placement.python.python_class.point2d_x.affc4d96fb49"></a>
<p class="symi-entry-owner">Point2d property</p>

```python signature
x: Expression
```


### y

<a id="entry-presentation_python_geometry_capability_geometry_y_api_point2d_y"></a>
<a id="placement-placement.python.python_class.point2d_y.69721eedd783"></a>
<p class="symi-entry-owner">Point2d property</p>

```python signature
y: Expression
```


### coordinates

<a id="entry-presentation_python_geometry_capability_geometry_coordinates_api_point2d_coordinates"></a>
<a id="placement-placement.python.python_class.point2d_coordinates.57a972dc52de"></a>
<p class="symi-entry-owner">Point2d method</p>

```python signature
coordinates() -> tuple[Expression, Expression]
```


### distance_to

<a id="entry-presentation_python_geometry_capability_geometry_distance_to_api_point2d_distance_to"></a>
<a id="placement-placement.python.python_class.point2d_distance_to.2efda0af0a60"></a>
<p class="symi-entry-owner">Point2d method</p>

```python signature
distance_to(other: Point2d) -> Expression
```


Euclidean distance, exact (a `sqrt` expression in general).

## segment_2d methods

### length

Also the finite-set length accessor on `Expression` in WASM; context
disambiguates.

### midpoint

<a id="entry-presentation_python_geometry_capability_geometry_midpoint_api_segment2d_midpoint"></a>
<a id="placement-placement.python.python_class.segment2d_midpoint.aed94451d883"></a>
<p class="symi-entry-owner">Segment2d method</p>

```python signature
midpoint() -> Point2d
```


### perpendicular_bisector_equation

<a id="entry-presentation_python_geometry_capability_geometry_perpendicular_bisector_equation_api_geometry_operations_segment2d_perpendicular_bisector_equation"></a>
<a id="placement-placement.python.python_class.segment2d_perpendicular_bisector_equation.c50cf31224c2"></a>
<p class="symi-entry-owner">Segment2d method</p>

```python signature
perpendicular_bisector_equation(
    variable_x: Any,
    variable_y: Any,
) -> Expression
```


The bisector line as an `equal` relation in x and y.

## polygon_2d and triangle_2d

### area

<a id="entry-presentation_python_geometry_capability_geometry_area_api_polygon2d_area"></a>
<a id="placement-placement.python.python_class.polygon2d_area.e4af71191e84"></a>
<p class="symi-entry-owner">Polygon2d method</p>

```python signature
area() -> Expression
```

<a id="entry-presentation_python_geometry_capability_geometry_area_api_triangle2d_area"></a>
<a id="placement-placement.python.python_class.triangle2d_area.85b4e88e0921"></a>
<p class="symi-entry-owner">Triangle2d method</p>

```python signature
area() -> Expression
```


For a `Polygon2d` or `Triangle2d`, this is the unsigned shoelace area of the
ordered boundary. It is separate from `Circle2d.area()`, which returns
\(\pi r^2\). A polygon's orientation therefore does not change its area.

### Circle2d area


The exact disk area \(\pi r^2\), using the circle's symbolic radius. This is
not the polygon/triangle shoelace operation; both are displayed as `area` in
the reference, under their distinct owners.

### perimeter

### centroid

### interior_angles

Each vertex paired with its interior angle. **Notes:** WASM returns
`VertexAngle` objects with `vertex`/`angle` getters.

### vertex_angle (WASM result class)

### vertex

*Not exposed by the Python bindings. Available as [`UniffiVertexAngle.vertex`](/symi/kotlin/geometry#vertex) in Kotlin, [`UniffiVertexAngle.vertex`](/symi/swift/geometry#vertex) in Swift, [`api::results::VertexAngle::vertex`](/symi/rust/geometry#vertex) in Rust.*


### angle

*Not exposed by the Python bindings. Available as [`UniffiVertexAngle.angle`](/symi/kotlin/geometry#angle) in Kotlin, [`UniffiVertexAngle.angle`](/symi/swift/geometry#angle) in Swift, [`api::results::VertexAngle::angle`](/symi/rust/geometry#angle) in Rust.*


## circle_2d methods

### center

<a id="entry-presentation_python_geometry_capability_geometry_center_api_circle2d_center"></a>
<a id="placement-placement.python.python_class.circle2d_center.64927d469d56"></a>
<p class="symi-entry-owner">Circle2d property</p>

```python signature
center: Point2d
```


### radius

<a id="entry-presentation_python_geometry_capability_geometry_radius_api_circle2d_radius"></a>
<a id="placement-placement.python.python_class.circle2d_radius.0d3f0082c2d0"></a>
<p class="symi-entry-owner">Circle2d property</p>

```python signature
radius: Expression
```


### circumference

<a id="entry-presentation_python_geometry_capability_geometry_circumference_api_circle2d_circumference"></a>
<a id="placement-placement.python.python_class.circle2d_circumference.0e47a445fea7"></a>
<p class="symi-entry-owner">Circle2d method</p>

```python signature
circumference() -> Expression
```


### equation

The circle as an `equal` relation in x and y.

## Exact boundary intersections

### intersection

Every point, segment, polygon, triangle, and circle exposes the same symmetric
`intersection` method. Polygon and triangle operands mean their closed boundary;
circle operands mean their circumference. Isolated intersections are returned as
`Point2d` objects, while a shared edge or coincident circle is returned as the
corresponding `Segment2d` or `Circle2d` component instead of sampled points.
The component sequence is exact and deterministic. If any required symbolic
predicate cannot be decided, the operation declines instead of returning an
incomplete list. Both operands must belong to the same context.

## Output

All geometry classes also provide `to_latex` (and `serialize_object` in
WASM; Python serializes through `Context.serializeObject`).

## Example

Geometry objects return exact symbolic measurements.

```python
import symi

context = symi.Context()
first = context.point_2d(0, 0)
second = context.point_2d(3, 4)
segment = context.segment_2d(first, second)

print(segment.length())
print(segment.midpoint().coordinates())
print(context.circle_2d(first, 2).area())
```


## Additional API

### Circle2d

<a id="entry-presentation_python_geometry_capability_geometry_circle_2d_api_circle2d"></a>
<a id="placement-placement.python.python_class.circle2d.6c9303592f3a"></a>
<p class="symi-entry-owner">Circle2d constructor</p>

```python signature
Circle2d(center: Point2d, radius: Any)
```

Construct the circle with the given center and radius.

### Point2d

<a id="entry-presentation_python_geometry_capability_geometry_point_2d_api_point2d"></a>
<a id="placement-placement.python.python_class.point2d.153a29295a96"></a>
<p class="symi-entry-owner">Point2d constructor</p>

```python signature
Point2d(x: Any, y: Any)
```

Construct the point `(x, y)`.

### Polygon2d

<a id="entry-presentation_python_geometry_capability_geometry_polygon_2d_api_polygon2d"></a>
<a id="placement-placement.python.python_class.polygon2d.c3c332796a52"></a>
<p class="symi-entry-owner">Polygon2d constructor</p>

```python signature
Polygon2d(vertices: list[Point2d])
```

Simple polygon from its vertex list in order; degenerate inputs raise.

### Segment2d

<a id="entry-presentation_python_geometry_capability_geometry_segment_2d_api_segment2d"></a>
<a id="placement-placement.python.python_class.segment2d.6a9df7cf01ed"></a>
<p class="symi-entry-owner">Segment2d constructor</p>

```python signature
Segment2d(start: Point2d, end: Point2d)
```

Construct the segment running from `start` to `end`.

### Triangle2d

<a id="entry-presentation_python_geometry_capability_geometry_triangle_2d_api_triangle2d"></a>
<a id="placement-placement.python.python_class.triangle2d.af8da7a77c95"></a>
<p class="symi-entry-owner">Triangle2d constructor</p>

```python signature
Triangle2d(point_a: Point2d, point_b: Point2d, point_c: Point2d)
```

Collinear vertices raise.

### __getattribute__

<a id="entry-presentation_python_geometry_capability_geometry_getattribute_unresolved"></a>
<a id="placement-placement.python.python_class.circle2d_getattribute.4de339a907b9"></a>
<p class="symi-entry-owner">Circle2d method</p>

```python signature
__getattribute__(name: str) -> Any
```

Reject attribute access on a stale object before delegating to the default lookup.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.point2d_getattribute.156c5902a8a3"></a>
<p class="symi-entry-owner">Point2d method: <code>Point2d.__getattribute__</code></p>

```python signature
__getattribute__(name: str) -> Any
```

<a id="placement-placement.python.python_class.polygon2d_getattribute.99cad6c2189d"></a>
<p class="symi-entry-owner">Polygon2d method: <code>Polygon2d.__getattribute__</code></p>

```python signature
__getattribute__(name: str) -> Any
```

<a id="placement-placement.python.python_class.segment2d_getattribute.8cfed938535c"></a>
<p class="symi-entry-owner">Segment2d method: <code>Segment2d.__getattribute__</code></p>

```python signature
__getattribute__(name: str) -> Any
```

<a id="placement-placement.python.python_class.triangle2d_getattribute.0c24333baf71"></a>
<p class="symi-entry-owner">Triangle2d method: <code>Triangle2d.__getattribute__</code></p>

```python signature
__getattribute__(name: str) -> Any
```

</details>

### __repr__

<a id="entry-presentation_python_geometry_capability_geometry_repr_unresolved"></a>
<a id="placement-placement.python.python_class.circle2d_repr.6e0e1433e6a7"></a>
<p class="symi-entry-owner">Circle2d method</p>

```python signature
__repr__() -> str
```

The `repr()` text, which reports staleness instead of failing.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.point2d_repr.17286d81f9e9"></a>
<p class="symi-entry-owner">Point2d method: <code>Point2d.__repr__</code></p>

```python signature
__repr__() -> str
```

<a id="placement-placement.python.python_class.polygon2d_repr.294b5ad11963"></a>
<p class="symi-entry-owner">Polygon2d method: <code>Polygon2d.__repr__</code></p>

```python signature
__repr__() -> str
```

<a id="placement-placement.python.python_class.segment2d_repr.7652049b4002"></a>
<p class="symi-entry-owner">Segment2d method: <code>Segment2d.__repr__</code></p>

```python signature
__repr__() -> str
```

<a id="placement-placement.python.python_class.triangle2d_repr.647cad2b16d7"></a>
<p class="symi-entry-owner">Triangle2d method: <code>Triangle2d.__repr__</code></p>

```python signature
__repr__() -> str
```

</details>

### area

<a id="entry-presentation_python_geometry_capability_geometry_area_api_circle2d_area"></a>
<a id="placement-placement.python.python_class.circle2d_area.62258c6d409d"></a>
<p class="symi-entry-owner">Circle2d method</p>

```python signature
area() -> Expression
```

Area of the circle, \(\pi r^2\).

### centroid

<a id="entry-presentation_python_geometry_capability_geometry_centroid_api_polygon2d_centroid"></a>
<a id="placement-placement.python.python_class.polygon2d_centroid.99cf20e83389"></a>
<p class="symi-entry-owner">Polygon2d method</p>

```python signature
centroid() -> Point2d
```

Centroid of the polygon's vertices.

### centroid

<a id="entry-presentation_python_geometry_capability_geometry_centroid_api_geometry_operations_triangle2d_centroid"></a>
<a id="placement-placement.python.python_class.triangle2d_centroid.e785148e690b"></a>
<p class="symi-entry-owner">Triangle2d method</p>

```python signature
centroid() -> Point2d
```

Centroid of the triangle's vertices.

### equation

<a id="entry-presentation_python_geometry_capability_geometry_equation_api_geometry_operations_circle2d_equation"></a>
<a id="placement-placement.python.python_class.circle2d_equation.765e8748a8f0"></a>
<p class="symi-entry-owner">Circle2d method</p>

```python signature
equation(variable_x: Any, variable_y: Any) -> Expression
```

The circle as an `equal` relation in x and y.

### equation

<a id="entry-presentation_python_geometry_capability_geometry_equation_api_partial_differential_equations_partialdifferentialequationproblem_equation"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationproblem_equation.86790941a045"></a>
<p class="symi-entry-owner">PartialDifferentialEquationProblem property</p>

```python signature
equation: Expression
```

The governing residual, interpreted as equal to zero.

### interior_angles

<a id="entry-presentation_python_geometry_capability_geometry_interior_angles_api_geometry_operations_polygon2d_interior_angles"></a>
<a id="placement-placement.python.python_class.polygon2d_interior_angles.b4642f1f180f"></a>
<p class="symi-entry-owner">Polygon2d method</p>

```python signature
interior_angles() -> list[tuple[Point2d, Expression]]
```

Each vertex paired with its interior angle. Notes: WASM returns `vertex_angle` objects with `vertex`/`angle` getters.

### interior_angles

<a id="entry-presentation_python_geometry_capability_geometry_interior_angles_api_geometry_operations_triangle2d_interior_angles"></a>
<a id="placement-placement.python.python_class.triangle2d_interior_angles.8c95a27939cc"></a>
<p class="symi-entry-owner">Triangle2d method</p>

```python signature
interior_angles() -> list[tuple[Point2d, Expression]]
```

Each vertex paired with its interior angle. Notes: WASM returns `vertex_angle` objects with `vertex`/`angle` getters.

### intersection

<a id="entry-presentation_python_geometry_capability_geometry_intersection_api_circle2d_intersection"></a>
<a id="placement-placement.python.python_class.circle2d_intersection.5b868562e8f7"></a>
<p class="symi-entry-owner">Circle2d method</p>

```python signature
intersection(other: Geometry2D) -> list[GeometryIntersectionComponent]
```

Return the complete exact boundary intersection with another supported plane geometry.

### intersection

<a id="entry-presentation_python_geometry_capability_geometry_intersection_api_point2d_intersection"></a>
<a id="placement-placement.python.python_class.point2d_intersection.9dd75de58565"></a>
<p class="symi-entry-owner">Point2d method</p>

```python signature
intersection(other: Geometry2D) -> list[GeometryIntersectionComponent]
```

Return the complete exact boundary intersection with another supported plane geometry.

### intersection

<a id="entry-presentation_python_geometry_capability_geometry_intersection_api_polygon2d_intersection"></a>
<a id="placement-placement.python.python_class.polygon2d_intersection.beb34d128bc7"></a>
<p class="symi-entry-owner">Polygon2d method</p>

```python signature
intersection(other: Geometry2D) -> list[GeometryIntersectionComponent]
```

Return the complete exact boundary intersection with another supported plane geometry.

### intersection

<a id="entry-presentation_python_geometry_capability_geometry_intersection_api_segment2d_intersection"></a>
<a id="placement-placement.python.python_class.segment2d_intersection.7f191e5c0acb"></a>
<p class="symi-entry-owner">Segment2d method</p>

```python signature
intersection(other: Geometry2D) -> list[GeometryIntersectionComponent]
```

Return the complete exact boundary intersection with another supported plane geometry.

### intersection

<a id="entry-presentation_python_geometry_capability_geometry_intersection_api_triangle2d_intersection"></a>
<a id="placement-placement.python.python_class.triangle2d_intersection.103be0069423"></a>
<p class="symi-entry-owner">Triangle2d method</p>

```python signature
intersection(other: Geometry2D) -> list[GeometryIntersectionComponent]
```

Return the complete exact boundary intersection with another supported plane geometry.

### perimeter

<a id="entry-presentation_python_geometry_capability_geometry_perimeter_api_polygon2d_perimeter"></a>
<a id="placement-placement.python.python_class.polygon2d_perimeter.95a07f03ed62"></a>
<p class="symi-entry-owner">Polygon2d method</p>

```python signature
perimeter() -> Expression
```

Perimeter of the polygon, the sum of its edge lengths.

### perimeter

<a id="entry-presentation_python_geometry_capability_geometry_perimeter_api_triangle2d_perimeter"></a>
<a id="placement-placement.python.python_class.triangle2d_perimeter.81a3b4e357e1"></a>
<p class="symi-entry-owner">Triangle2d method</p>

```python signature
perimeter() -> Expression
```

Perimeter of the triangle, the sum of its side lengths.

