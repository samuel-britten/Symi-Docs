# Geometry

Exact symbolic plane geometry. Coordinates, lengths, and angles are
`Expression` values.

## Constructors

Constructing a geometry class directly uses the shared default context.
The matching `Context` method constructs the object in an explicit context.

### point_2d

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.point_2d`](/symi/python/geometry#point_2d) in Python, [`UniffiSession.point2d`](/symi/kotlin/geometry#point_2d) in Kotlin, [`UniffiSession.point2d`](/symi/swift/geometry#point_2d) in Swift, [`api::Session::point_2d`](/symi/rust/geometry#point_2d) in Rust.*




### segment_2d

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.segment_2d`](/symi/python/geometry#segment_2d) in Python, [`UniffiSession.segment2d`](/symi/kotlin/geometry#segment_2d) in Kotlin, [`UniffiSession.segment2d`](/symi/swift/geometry#segment_2d) in Swift, [`api::Session::segment_2d`](/symi/rust/geometry#segment_2d) in Rust.*




### polygon_2d

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.polygon_2d`](/symi/python/geometry#polygon_2d) in Python, [`UniffiSession.polygon2d`](/symi/kotlin/geometry#polygon_2d) in Kotlin, [`UniffiSession.polygon2d`](/symi/swift/geometry#polygon_2d) in Swift, [`api::Session::polygon_2d`](/symi/rust/geometry#polygon_2d) in Rust.*




Simple polygon from its vertex list in order; degenerate inputs raise.

### triangle_2d

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.triangle_2d`](/symi/python/geometry#triangle_2d) in Python, [`UniffiSession.triangle2d`](/symi/kotlin/geometry#triangle_2d) in Kotlin, [`UniffiSession.triangle2d`](/symi/swift/geometry#triangle_2d) in Swift, [`api::Session::triangle_2d`](/symi/rust/geometry#triangle_2d) in Rust.*




Collinear vertices raise.

### circle_2d

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.circle_2d`](/symi/python/geometry#circle_2d) in Python, [`UniffiSession.circle2d`](/symi/kotlin/geometry#circle_2d) in Kotlin, [`UniffiSession.circle2d`](/symi/swift/geometry#circle_2d) in Swift, [`api::Session::circle_2d`](/symi/rust/geometry#circle_2d) in Rust.*




## point_2d methods

### x

<a id="placement-placement.wasm.wasm_class.point2d_x.c0a31a0b13c6"></a>
Raw WebAssembly: `pub fn x(&self) -> Result<Expression, JsError>`


### y

<a id="placement-placement.wasm.wasm_class.point2d_y.09cc1987c90a"></a>
Raw WebAssembly: `pub fn y(&self) -> Result<Expression, JsError>`


### coordinates

<a id="placement-placement.wasm.wasm_class.point2d_coordinates.16f05ca0798a"></a>
Raw WebAssembly: `pub fn coordinates(&self) -> Result<Vec<Expression>, JsError>`


### distance_to

*Not exposed by the WASM / JavaScript bindings. Available as [`Point2d.distance_to`](/symi/python/geometry#distance_to) in Python, [`UniffiPoint2d.distanceTo`](/symi/kotlin/geometry#distance_to) in Kotlin, [`UniffiPoint2d.distanceTo`](/symi/swift/geometry#distance_to) in Swift, [`api::Point2d::distance_to`](/symi/rust/geometry#distance_to) in Rust.*


Euclidean distance, exact (a `sqrt` expression in general).

## segment_2d methods

### length

<a id="placement-placement.wasm.wasm_class.segment2d_length.b45e4ea3f5e4"></a>
Raw WebAssembly: `pub fn length(&self) -> Result<Expression, JsError>`


Also the finite-set length accessor on `Expression` in WASM; context
disambiguates.

### midpoint

<a id="placement-placement.wasm.wasm_class.segment2d_midpoint.62abdcfc22e3"></a>
Raw WebAssembly: `pub fn midpoint(&self) -> Result<Point2d, JsError>`


### perpendicular_bisector_equation

*Not exposed by the WASM / JavaScript bindings. Available as [`Segment2d.perpendicular_bisector_equation`](/symi/python/geometry#perpendicular_bisector_equation) in Python, [`UniffiSegment2d.perpendicularBisectorEquation`](/symi/kotlin/geometry#perpendicular_bisector_equation) in Kotlin, [`UniffiSegment2d.perpendicularBisectorEquation`](/symi/swift/geometry#perpendicular_bisector_equation) in Swift, [`api::geometry_operations::Segment2d::perpendicular_bisector_equation`](/symi/rust/geometry#perpendicular_bisector_equation) in Rust.*


The bisector line as an `equal` relation in x and y.

## polygon_2d and triangle_2d

### area

<a id="placement-placement.wasm.wasm_class.circle2d_area.743b71e37a1b"></a>
Raw WebAssembly: `pub fn area(&self) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_class.polygon2d_area.7c6f2cf22633"></a>
Raw WebAssembly: `pub fn area(&self) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_class.triangle2d_area.33cc19cca2b3"></a>
Raw WebAssembly: `pub fn area(&self) -> Result<Expression, JsError>`


Shoelace area (also on `Circle2d`).

### perimeter

<a id="placement-placement.wasm.wasm_class.polygon2d_perimeter.a5ef1f895818"></a>
Raw WebAssembly: `pub fn perimeter(&self) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_class.triangle2d_perimeter.227221b7c2c3"></a>
Raw WebAssembly: `pub fn perimeter(&self) -> Result<Expression, JsError>`


### centroid

<a id="placement-placement.wasm.wasm_class.polygon2d_centroid.5adb349efb75"></a>
Raw WebAssembly: `pub fn centroid(&self) -> Result<Point2d, JsError>`

<a id="placement-placement.wasm.wasm_class.triangle2d_centroid.7503e63742f6"></a>
Raw WebAssembly: `pub fn centroid(&self) -> Result<Point2d, JsError>`


### interior_angles

*Not exposed by the WASM / JavaScript bindings. Available as [`Polygon2d.interior_angles`](/symi/python/geometry#interior_angles) in Python, [`UniffiPolygon2d.interiorAngles`](/symi/kotlin/geometry#interior_angles) in Kotlin, [`UniffiPolygon2d.interiorAngles`](/symi/swift/geometry#interior_angles) in Swift, [`api::geometry_operations::Polygon2d::interior_angles`](/symi/rust/geometry#interior_angles) in Rust.*


Each vertex paired with its interior angle. **Notes:** WASM returns
`VertexAngle` objects with `vertex`/`angle` getters.

### vertex_angle (WASM result class)

### vertex

<a id="placement-placement.wasm.wasm_class.vertexangle_vertex.bbfbe7953588"></a>
Raw WebAssembly: `pub fn vertex(&self) -> Point2d`


### angle

<a id="placement-placement.wasm.wasm_class.vertexangle_angle.987977655236"></a>
Raw WebAssembly: `pub fn angle(&self) -> Expression`


## circle_2d methods

### center

<a id="placement-placement.wasm.wasm_class.circle2d_center.0e20868fec4f"></a>
Raw WebAssembly: `pub fn center(&self) -> Result<Point2d, JsError>`


### radius

<a id="placement-placement.wasm.wasm_class.circle2d_radius.fa13be61ae3c"></a>
Raw WebAssembly: `pub fn radius(&self) -> Result<Expression, JsError>`


### circumference

<a id="placement-placement.wasm.wasm_class.circle2d_circumference.6d0e340e969d"></a>
Raw WebAssembly: `pub fn circumference(&self) -> Result<Expression, JsError>`


### equation

<a id="placement-placement.wasm.wasm_class.circle2d_equation.f2d8bb126725"></a>
Raw WebAssembly: `pub fn equation(&self, variable_x: &str, variable_y: &str) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationproblem_equation.f2fc4e648569"></a>
Raw WebAssembly: `pub fn equation(&self) -> Result<Expression, JsError>`


The circle as an `equal` relation in x and y.

## Exact boundary intersections

### intersection

<a id="placement-placement.wasm.wasm_class.circle2d_intersection.a7bed6c77edd"></a>
Raw WebAssembly: `pub fn intersection(&self, other: &JsValue) -> Result<Box<[JsValue]>, JsError>`

<a id="placement-placement.wasm.wasm_class.point2d_intersection.031a02927b5c"></a>
Raw WebAssembly: `pub fn intersection(&self, other: &JsValue) -> Result<Box<[JsValue]>, JsError>`

<a id="placement-placement.wasm.wasm_class.polygon2d_intersection.5d3e8cf15ec1"></a>
Raw WebAssembly: `pub fn intersection(&self, other: &JsValue) -> Result<Box<[JsValue]>, JsError>`

<a id="placement-placement.wasm.wasm_class.segment2d_intersection.f98c7d6bf866"></a>
Raw WebAssembly: `pub fn intersection(&self, other: &JsValue) -> Result<Box<[JsValue]>, JsError>`

<a id="placement-placement.wasm.wasm_class.triangle2d_intersection.bbb401de2277"></a>
Raw WebAssembly: `pub fn intersection(&self, other: &JsValue) -> Result<Box<[JsValue]>, JsError>`


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

This family is not part of the recommended JavaScript facade in this release. Call it through the generated `symi.raw` layer, whose entries are listed with their wasm-bindgen signatures above, and read [Migration](migration.md) for the ownership rules that apply there.


## Additional API

<a id="placement-placement.wasm.wasm_class.circle2d.b811b7e71dd1"></a>
### Circle2d

`pub fn new(center: &Point2d, radius: &Expression) -> Result<Circle2d, JsError>`

Returns `Result<circle_2d, JsError>`.

<a id="placement-placement.wasm.wasm_class.circle2d_tostring.fc0197c0b351"></a>
### Circle2d.toString

`pub fn to_js_string(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_circle2d.b6b5bff08685"></a>
### Context.circle2d

`pub fn circle_2d(&self, center: &Point2d, radius: &Expression) -> Result<Circle2d, JsError>`

Returns `Result<circle_2d, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_point2d.7290572ebc0b"></a>
### Context.point2d

`pub fn point_2d(&self, x: &Expression, y: &Expression) -> Result<Point2d, JsError>`

Returns `Result<point_2d, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_polygon2d.7769a1368f42"></a>
### Context.polygon2d

`pub fn polygon_2d(&self, vertices: Vec<Point2d>) -> Result<Polygon2d, JsError>`

Returns `Result<polygon_2d, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_segment2d.bdd743314ff7"></a>
### Context.segment2d

`pub fn segment_2d(&self, start: &Point2d, end: &Point2d) -> Result<Segment2d, JsError>`

Returns `Result<segment_2d, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_triangle2d.c3cf16ee529a"></a>
### Context.triangle2d

`pub fn triangle_2d(&self, point_a: &Point2d, point_b: &Point2d, point_c: &Point2d) -> Result<Triangle2d, JsError>`

Returns `Result<triangle_2d, JsError>`.

<a id="placement-placement.wasm.wasm_class.point2d.dca54a617fe2"></a>
### Point2d

`pub fn new(x: &Expression, y: &Expression) -> Result<Point2d, JsError>`

Returns `Result<point_2d, JsError>`.

<a id="placement-placement.wasm.wasm_class.point2d_distanceto.7fec84f47201"></a>
### Point2d.distanceTo

`pub fn distance_to(&self, other: &Point2d) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.point2d_tostring.dcea6d65a5d8"></a>
### Point2d.toString

`pub fn to_js_string(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.polygon2d.4810488732bd"></a>
### Polygon2d

`pub fn new(vertices: Vec<Point2d>) -> Result<Polygon2d, JsError>`

Returns `Result<polygon_2d, JsError>`.

<a id="placement-placement.wasm.wasm_class.polygon2d_interiorangles.d871d0f39590"></a>
### Polygon2d.interiorAngles

`pub fn interior_angles(&self) -> Result<Vec<VertexAngle>, JsError>`

Returns `Result<Vec<vertex_angle>, JsError>`.

<a id="placement-placement.wasm.wasm_class.polygon2d_tostring.1f9c721c2fbb"></a>
### Polygon2d.toString

`pub fn to_js_string(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.segment2d.119b443ccd78"></a>
### Segment2d

`pub fn new(start: &Point2d, end: &Point2d) -> Result<Segment2d, JsError>`

Returns `Result<segment_2d, JsError>`.

<a id="placement-placement.wasm.wasm_class.segment2d_perpendicularbisectorequation.d8f930147b9c"></a>
### Segment2d.perpendicularBisectorEquation

`pub fn perpendicular_bisector_equation(&self, variable_x: &str, variable_y: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.segment2d_tostring.e994a8c59a1e"></a>
### Segment2d.toString

`pub fn to_js_string(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.triangle2d.73179d4e894b"></a>
### Triangle2d

`pub fn new(point_a: &Point2d, point_b: &Point2d, point_c: &Point2d) -> Result<Triangle2d, JsError>`

Returns `Result<triangle_2d, JsError>`.

<a id="placement-placement.wasm.wasm_class.triangle2d_interiorangles.4cd4d0d93fa8"></a>
### Triangle2d.interiorAngles

`pub fn interior_angles(&self) -> Result<Vec<VertexAngle>, JsError>`

Returns `Result<Vec<vertex_angle>, JsError>`.

<a id="placement-placement.wasm.wasm_class.triangle2d_tostring.63289bc04e2d"></a>
### Triangle2d.toString

`pub fn to_js_string(&self) -> String`

Returns `String`.

