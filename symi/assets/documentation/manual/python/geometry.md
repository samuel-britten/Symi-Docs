# Geometry

Exact symbolic plane geometry. Coordinates, lengths, and angles are
`Expression` values.

## Constructors

Constructing a geometry class directly uses the shared default context.
The matching `Context` method constructs the object in an explicit context.

### point_2d

<a id="placement-placement.python.python_class.context_point_2d.d9bef617e242"></a>
`Context.point_2d(x, y)`




### segment_2d

<a id="placement-placement.python.python_class.context_segment_2d.2b58460d9c77"></a>
`Context.segment_2d(start, end)`




### polygon_2d

<a id="placement-placement.python.python_class.context_polygon_2d.d8c8d3df3d19"></a>
`Context.polygon_2d(vertices)`




Simple polygon from its vertex list in order; degenerate inputs raise.

### triangle_2d

<a id="placement-placement.python.python_class.context_triangle_2d.a18dab1716eb"></a>
`Context.triangle_2d(point_a, point_b, point_c)`




Collinear vertices raise.

### circle_2d

<a id="placement-placement.python.python_class.context_circle_2d.fa59e94268b5"></a>
`Context.circle_2d(center, radius)`




## point_2d methods

### x

<a id="placement-placement.python.python_class.point2d_x.affc4d96fb49"></a>
`Point2d.x`


### y

<a id="placement-placement.python.python_class.point2d_y.69721eedd783"></a>
`Point2d.y`


### coordinates

<a id="placement-placement.python.python_class.point2d_coordinates.57a972dc52de"></a>
`Point2d.coordinates()`


### distance_to

<a id="placement-placement.python.python_class.point2d_distance_to.2efda0af0a60"></a>
`Point2d.distance_to(other)`


Euclidean distance, exact (a `sqrt` expression in general).

## segment_2d methods

### length

Also the finite-set length accessor on `Expression` in WASM; context
disambiguates.

### midpoint

<a id="placement-placement.python.python_class.segment2d_midpoint.aed94451d883"></a>
`Segment2d.midpoint()`


### perpendicular_bisector_equation

<a id="placement-placement.python.python_class.segment2d_perpendicular_bisector_equation.c50cf31224c2"></a>
`Segment2d.perpendicular_bisector_equation(variable_x, variable_y)`


The bisector line as an `equal` relation in x and y.

## polygon_2d and triangle_2d

### area

<a id="placement-placement.python.python_class.circle2d_area.62258c6d409d"></a>
`Circle2d.area()`

<a id="placement-placement.python.python_class.polygon2d_area.e4af71191e84"></a>
`Polygon2d.area()`

<a id="placement-placement.python.python_class.triangle2d_area.85b4e88e0921"></a>
`Triangle2d.area()`


Shoelace area (also on `Circle2d`).

### perimeter

<a id="placement-placement.python.python_class.polygon2d_perimeter.95a07f03ed62"></a>
`Polygon2d.perimeter()`

<a id="placement-placement.python.python_class.triangle2d_perimeter.81a3b4e357e1"></a>
`Triangle2d.perimeter()`


### centroid

<a id="placement-placement.python.python_class.polygon2d_centroid.99cf20e83389"></a>
`Polygon2d.centroid()`

<a id="placement-placement.python.python_class.triangle2d_centroid.e785148e690b"></a>
`Triangle2d.centroid()`


### interior_angles

<a id="placement-placement.python.python_class.polygon2d_interior_angles.b4642f1f180f"></a>
`Polygon2d.interior_angles()`

<a id="placement-placement.python.python_class.triangle2d_interior_angles.8c95a27939cc"></a>
`Triangle2d.interior_angles()`


Each vertex paired with its interior angle. **Notes:** WASM returns
`VertexAngle` objects with `vertex`/`angle` getters.

### vertex_angle (WASM result class)

### vertex

*Not exposed by the Python bindings. Available as [`UniffiVertexAngle.vertex`](/symi/kotlin/geometry#vertex) in Kotlin, [`UniffiVertexAngle.vertex`](/symi/swift/geometry#vertex) in Swift, [`api::results::VertexAngle::vertex`](/symi/rust/geometry#vertex) in Rust.*


### angle

*Not exposed by the Python bindings. Available as [`UniffiVertexAngle.angle`](/symi/kotlin/geometry#angle) in Kotlin, [`UniffiVertexAngle.angle`](/symi/swift/geometry#angle) in Swift, [`api::results::VertexAngle::angle`](/symi/rust/geometry#angle) in Rust.*


## circle_2d methods

### center

<a id="placement-placement.python.python_class.circle2d_center.64927d469d56"></a>
`Circle2d.center`


### radius

<a id="placement-placement.python.python_class.circle2d_radius.0d3f0082c2d0"></a>
`Circle2d.radius`


### circumference

<a id="placement-placement.python.python_class.circle2d_circumference.0e47a445fea7"></a>
`Circle2d.circumference()`


### equation

<a id="placement-placement.python.python_class.circle2d_equation.765e8748a8f0"></a>
`Circle2d.equation(variable_x, variable_y)`

<a id="placement-placement.python.python_class.partialdifferentialequationproblem_equation.86790941a045"></a>
`PartialDifferentialEquationProblem.equation`


The circle as an `equal` relation in x and y.

## Exact boundary intersections

### intersection

<a id="placement-placement.python.python_class.circle2d_intersection.5b868562e8f7"></a>
`Circle2d.intersection(other)`

<a id="placement-placement.python.python_class.point2d_intersection.9dd75de58565"></a>
`Point2d.intersection(other)`

<a id="placement-placement.python.python_class.polygon2d_intersection.beb34d128bc7"></a>
`Polygon2d.intersection(other)`

<a id="placement-placement.python.python_class.segment2d_intersection.7f191e5c0acb"></a>
`Segment2d.intersection(other)`

<a id="placement-placement.python.python_class.triangle2d_intersection.103be0069423"></a>
`Triangle2d.intersection(other)`


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

<a id="placement-placement.python.python_class.circle2d.6c9303592f3a"></a>
### Circle2d

`Circle2d(center, radius)`

Returns `circle_2d`.

<a id="placement-placement.python.python_class.circle2d_getattribute.4de339a907b9"></a>
### Circle2d.__getattribute__

`Circle2d.__getattribute__(receiver, name)`

Returns `PyAny`.

<a id="placement-placement.python.python_class.circle2d_repr.6e0e1433e6a7"></a>
### Circle2d.__repr__

`Circle2d.__repr__()`

Returns `str`.

<a id="placement-placement.python.python_class.point2d.153a29295a96"></a>
### Point2d

`Point2d(x, y)`

Returns `point_2d`.

<a id="placement-placement.python.python_class.point2d_getattribute.156c5902a8a3"></a>
### Point2d.__getattribute__

`Point2d.__getattribute__(receiver, name)`

Returns `PyAny`.

<a id="placement-placement.python.python_class.point2d_repr.17286d81f9e9"></a>
### Point2d.__repr__

`Point2d.__repr__()`

Returns `str`.

<a id="placement-placement.python.python_class.polygon2d.c3c332796a52"></a>
### Polygon2d

`Polygon2d(vertices)`

Returns `polygon_2d`.

<a id="placement-placement.python.python_class.polygon2d_getattribute.99cad6c2189d"></a>
### Polygon2d.__getattribute__

`Polygon2d.__getattribute__(receiver, name)`

Returns `PyAny`.

<a id="placement-placement.python.python_class.polygon2d_repr.294b5ad11963"></a>
### Polygon2d.__repr__

`Polygon2d.__repr__()`

Returns `str`.

<a id="placement-placement.python.python_class.segment2d.6a9df7cf01ed"></a>
### Segment2d

`Segment2d(start, end)`

Returns `segment_2d`.

<a id="placement-placement.python.python_class.segment2d_getattribute.8cfed938535c"></a>
### Segment2d.__getattribute__

`Segment2d.__getattribute__(receiver, name)`

Returns `PyAny`.

<a id="placement-placement.python.python_class.segment2d_repr.7652049b4002"></a>
### Segment2d.__repr__

`Segment2d.__repr__()`

Returns `str`.

<a id="placement-placement.python.python_class.triangle2d.af8da7a77c95"></a>
### Triangle2d

`Triangle2d(point_a, point_b, point_c)`

Returns `triangle_2d`.

<a id="placement-placement.python.python_class.triangle2d_getattribute.0c24333baf71"></a>
### Triangle2d.__getattribute__

`Triangle2d.__getattribute__(receiver, name)`

Returns `PyAny`.

<a id="placement-placement.python.python_class.triangle2d_repr.647cad2b16d7"></a>
### Triangle2d.__repr__

`Triangle2d.__repr__()`

Returns `str`.

