# Geometry

Exact symbolic plane geometry. Coordinates, lengths, and angles are
`Expression` values.

## Constructors

Constructing a geometry class directly uses the shared default context.
The matching `Context` method constructs the object in an explicit context.

### point_2d

<a id="placement-placement.rust.native_rust.api_session_point_2d.6700c583c615"></a>
`symi::api::Session — pub fn point_2d(&self, coordinate_x: &Expression, coordinate_y: &Expression) -> Result<Point2d, ApiError>`




### segment_2d

<a id="placement-placement.rust.native_rust.api_session_segment_2d.8e24c05debb2"></a>
`symi::api::Session — pub fn segment_2d(&self, start: &Point2d, end: &Point2d) -> Result<Segment2d, ApiError>`




### polygon_2d

<a id="placement-placement.rust.native_rust.api_session_polygon_2d.a24dcf34a8db"></a>
`symi::api::Session — pub fn polygon_2d<IteratorType>(&self, vertices: IteratorType) -> Result<Polygon2d, ApiError> where IteratorType: IntoIterator<Item = Point2d>`




Simple polygon from its vertex list in order; degenerate inputs raise.

### triangle_2d

<a id="placement-placement.rust.native_rust.api_session_triangle_2d.708c24dbaca0"></a>
`symi::api::Session — pub fn triangle_2d(&self, first: &Point2d, second: &Point2d, third: &Point2d) -> Result<Triangle2d, ApiError>`




Collinear vertices raise.

### circle_2d

<a id="placement-placement.rust.native_rust.api_session_circle_2d.faef56217e5d"></a>
`symi::api::Session — pub fn circle_2d(&self, center: &Point2d, radius: &Expression) -> Result<Circle2d, ApiError>`




## point_2d methods

### x

<a id="placement-placement.rust.native_rust.api_point2d_x.40d3d8fb748f"></a>
`symi::api::Point2d — pub fn x(&self) -> Result<Expression, ApiError>`


### y

<a id="placement-placement.rust.native_rust.api_point2d_y.24c9ed64c671"></a>
`symi::api::Point2d — pub fn y(&self) -> Result<Expression, ApiError>`


### coordinates

<a id="placement-placement.rust.native_rust.api_point2d_coordinates.113cf60decf0"></a>
`symi::api::Point2d — pub fn coordinates(&self) -> Result<(Expression, Expression), ApiError>`


### distance_to

<a id="placement-placement.rust.native_rust.api_point2d_distance_to.3db8aa5016b3"></a>
`symi::api::Point2d — pub fn distance_to(&self, other: &Point2d) -> Result<Expression, ApiError>`


Euclidean distance, exact (a `sqrt` expression in general).

## segment_2d methods

### length

Also the finite-set length accessor on `Expression` in WASM; context
disambiguates.

### midpoint

<a id="placement-placement.rust.native_rust.api_segment2d_midpoint.c51969d1a676"></a>
`symi::api::Segment2d — pub fn midpoint(&self) -> Result<Point2d, ApiError>`


### perpendicular_bisector_equation

<a id="placement-placement.rust.native_rust.api_geometry_operations_segment2d_perpendicular_bisector_equation.ac8854730991"></a>
`symi::api::geometry_operations::Segment2d — pub fn perpendicular_bisector_equation<'a, 'b, XVariableType, YVariableType>(&self, variable_x: XVariableType, variable_y: YVariableType) -> Result<Expression, ApiError> where XVariableType: Into<VariableLike<'a>>, YVariableType: Into<VariableLike<'b>>`


The bisector line as an `equal` relation in x and y.

## polygon_2d and triangle_2d

### area

<a id="placement-placement.rust.native_rust.api_circle2d_area.a7721894e768"></a>
`symi::api::Circle2d — pub fn area(&self) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_polygon2d_area.d429c12a1618"></a>
`symi::api::Polygon2d — pub fn area(&self) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_triangle2d_area.e5d87e4ae7ef"></a>
`symi::api::Triangle2d — pub fn area(&self) -> Result<Expression, ApiError>`


Shoelace area (also on `Circle2d`).

### perimeter

<a id="placement-placement.rust.native_rust.api_polygon2d_perimeter.e96a8af97eee"></a>
`symi::api::Polygon2d — pub fn perimeter(&self) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_triangle2d_perimeter.e890574f2a9f"></a>
`symi::api::Triangle2d — pub fn perimeter(&self) -> Result<Expression, ApiError>`


### centroid

<a id="placement-placement.rust.native_rust.api_polygon2d_centroid.d9a0bbccbda0"></a>
`symi::api::Polygon2d — pub fn centroid(&self) -> Result<Point2d, ApiError>`

<a id="placement-placement.rust.native_rust.api_geometry_operations_triangle2d_centroid.3c2405e22c07"></a>
`symi::api::geometry_operations::Triangle2d — pub fn centroid(&self) -> Result<Point2d, ApiError>`


### interior_angles

<a id="placement-placement.rust.native_rust.api_geometry_operations_polygon2d_interior_angles.567d6a930dfa"></a>
`symi::api::geometry_operations::Polygon2d — pub fn interior_angles(&self) -> Result<Vec<VertexAngle>, ApiError>`

<a id="placement-placement.rust.native_rust.api_geometry_operations_triangle2d_interior_angles.09f4f5eaf542"></a>
`symi::api::geometry_operations::Triangle2d — pub fn interior_angles(&self) -> Result<Vec<VertexAngle>, ApiError>`


Each vertex paired with its interior angle. **Notes:** WASM returns
`VertexAngle` objects with `vertex`/`angle` getters.

### vertex_angle (WASM result class)

### vertex

<a id="placement-placement.rust.native_rust.api_results_vertexangle_vertex.19c21ef7a520"></a>
`symi::api::results::VertexAngle — pub fn vertex(&self) -> Point2d`


### angle

<a id="placement-placement.rust.native_rust.api_results_vertexangle_angle.262583f0166a"></a>
`symi::api::results::VertexAngle — pub fn angle(&self) -> Expression`


## circle_2d methods

### center

<a id="placement-placement.rust.native_rust.api_circle2d_center.02eb99620206"></a>
`symi::api::Circle2d — pub fn center(&self) -> Result<Point2d, ApiError>`


### radius

<a id="placement-placement.rust.native_rust.api_circle2d_radius.789baaf73229"></a>
`symi::api::Circle2d — pub fn radius(&self) -> Result<Expression, ApiError>`


### circumference

<a id="placement-placement.rust.native_rust.api_circle2d_circumference.32579f3e0242"></a>
`symi::api::Circle2d — pub fn circumference(&self) -> Result<Expression, ApiError>`


### equation

<a id="placement-placement.rust.native_rust.api_geometry_operations_circle2d_equation.f4e2b1448427"></a>
`symi::api::geometry_operations::Circle2d — pub fn equation<'a, 'b, XVariableType, YVariableType>(&self, variable_x: XVariableType, variable_y: YVariableType) -> Result<Expression, ApiError> where XVariableType: Into<VariableLike<'a>>, YVariableType: Into<VariableLike<'b>>`

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproblem_equation.345ea5c1476a"></a>
`symi::api::partial_differential_equations::PartialDifferentialEquationProblem — pub fn equation(&self) -> Result<Expression, ApiError>`


The circle as an `equal` relation in x and y.

## Exact boundary intersections

### intersection

<a id="placement-placement.rust.native_rust.api_circle2d_intersection.ee759e69fc1f"></a>
`symi::api::Circle2d — pub fn intersection<GeometryType>(&self, other: GeometryType) -> Result<Vec<GeometryIntersectionComponent>, ApiError> where GeometryType: Into<Geometry2d>`

<a id="placement-placement.rust.native_rust.api_point2d_intersection.93810c8a5dfd"></a>
`symi::api::Point2d — pub fn intersection<GeometryType>(&self, other: GeometryType) -> Result<Vec<GeometryIntersectionComponent>, ApiError> where GeometryType: Into<Geometry2d>`

<a id="placement-placement.rust.native_rust.api_polygon2d_intersection.8d3c9414026e"></a>
`symi::api::Polygon2d — pub fn intersection<GeometryType>(&self, other: GeometryType) -> Result<Vec<GeometryIntersectionComponent>, ApiError> where GeometryType: Into<Geometry2d>`

<a id="placement-placement.rust.native_rust.api_segment2d_intersection.16dbf6b95763"></a>
`symi::api::Segment2d — pub fn intersection<GeometryType>(&self, other: GeometryType) -> Result<Vec<GeometryIntersectionComponent>, ApiError> where GeometryType: Into<Geometry2d>`

<a id="placement-placement.rust.native_rust.api_triangle2d_intersection.a3b299db7fbd"></a>
`symi::api::Triangle2d — pub fn intersection<GeometryType>(&self, other: GeometryType) -> Result<Vec<GeometryIntersectionComponent>, ApiError> where GeometryType: Into<Geometry2d>`


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

```rust
use symi::api::prelude::*;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let session = Session::new();
    let first = session.point_2d(&session.integer(0), &session.integer(0))?;
    let second = session.point_2d(&session.integer(3), &session.integer(4))?;
    let segment = session.segment_2d(&first, &second)?;

    println!("{}", segment.length()?);
    println!("{}", session.circle_2d(&first, &session.integer(2))?.area()?);
    Ok(())
}
```


## Additional API

<a id="placement-placement.rust.native_rust.api_geometry_operations_polygon2d_vertex_count.adcc92e62dc8"></a>
### api::geometry_operations::Polygon2d::vertex_count

`symi::api::geometry_operations::Polygon2d — pub fn vertex_count(&self) -> Result<usize, ApiError>`

Returns `Result<usize, ApiError>`.

