# Geometry

Exact symbolic plane geometry. Coordinates, lengths, and angles are
`Expression` values.

## Constructors

Constructing a geometry class directly uses the shared default context.
The matching `Context` method constructs the object in an explicit context.

### point_2d

<a id="entry-presentation_rust_api_session_point_2d"></a>
<a id="placement-placement.rust.native_rust.api_session_point_2d.6700c583c615"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn point_2d(
    &self,
    coordinate_x: &Expression,
    coordinate_y: &Expression,
) -> Result<Point2d, ApiError>
```




### segment_2d

<a id="entry-presentation_rust_api_session_segment_2d"></a>
<a id="placement-placement.rust.native_rust.api_session_segment_2d.8e24c05debb2"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn segment_2d(
    &self,
    start: &Point2d,
    end: &Point2d,
) -> Result<Segment2d, ApiError>
```




### polygon_2d

<a id="entry-presentation_rust_api_session_polygon_2d"></a>
<a id="placement-placement.rust.native_rust.api_session_polygon_2d.a24dcf34a8db"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn polygon_2d<IteratorType>(
    &self,
    vertices: IteratorType,
) -> Result<Polygon2d, ApiError>
where
    IteratorType: IntoIterator<Item = Point2d>,
```




Simple polygon from its vertex list in order; degenerate inputs raise.

### triangle_2d

<a id="entry-presentation_rust_api_session_triangle_2d"></a>
<a id="placement-placement.rust.native_rust.api_session_triangle_2d.708c24dbaca0"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn triangle_2d(
    &self,
    first: &Point2d,
    second: &Point2d,
    third: &Point2d,
) -> Result<Triangle2d, ApiError>
```




Collinear vertices raise.

### circle_2d

<a id="entry-presentation_rust_api_session_circle_2d"></a>
<a id="placement-placement.rust.native_rust.api_session_circle_2d.faef56217e5d"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn circle_2d(
    &self,
    center: &Point2d,
    radius: &Expression,
) -> Result<Circle2d, ApiError>
```




## point_2d methods

### x

<a id="entry-presentation_rust_api_point2d_x"></a>
<a id="placement-placement.rust.native_rust.api_point2d_x.40d3d8fb748f"></a>
<p class="symi-entry-owner">api::Point2d method</p>

```rust signature
pub fn x(&self) -> Result<Expression, ApiError>
```

Returns this point's horizontal coordinate.

### y

<a id="entry-presentation_rust_api_point2d_y"></a>
<a id="placement-placement.rust.native_rust.api_point2d_y.24c9ed64c671"></a>
<p class="symi-entry-owner">api::Point2d method</p>

```rust signature
pub fn y(&self) -> Result<Expression, ApiError>
```

Returns this point's vertical coordinate.

### coordinates

<a id="entry-presentation_rust_api_point2d_coordinates"></a>
<a id="placement-placement.rust.native_rust.api_point2d_coordinates.113cf60decf0"></a>
<p class="symi-entry-owner">api::Point2d method</p>

```rust signature
pub fn coordinates(&self) -> Result<(Expression, Expression), ApiError>
```

Provides the `coordinates` operation on this native type.

### distance_to

Euclidean distance, exact (a `sqrt` expression in general).

<a id="entry-presentation_rust_api_point2d_distance_to"></a>
<a id="placement-placement.rust.native_rust.api_point2d_distance_to.3db8aa5016b3"></a>
<p class="symi-entry-owner">api::Point2d method</p>

```rust signature
pub fn distance_to(
    &self,
    other: &Point2d,
) -> Result<Expression, ApiError>
```

Provides the `distance_to` operation on this native type.

## segment_2d methods

### length

Also the finite-set length accessor on `Expression` in WASM; context
disambiguates.

<a id="entry-presentation_rust_api_segment2d_length"></a>
<a id="placement-placement.rust.native_rust.api_segment2d_length.9f1685c15292"></a>
<p class="symi-entry-owner">api::Segment2d method</p>

```rust signature
pub fn length(&self) -> Result<Expression, ApiError>
```

Provides the `length` operation on this native type.

### midpoint

<a id="entry-presentation_rust_api_segment2d_midpoint"></a>
<a id="placement-placement.rust.native_rust.api_segment2d_midpoint.c51969d1a676"></a>
<p class="symi-entry-owner">api::Segment2d method</p>

```rust signature
pub fn midpoint(&self) -> Result<Point2d, ApiError>
```

Provides the `midpoint` operation on this native type.

### perpendicular_bisector_equation

The bisector line as an `equal` relation in x and y.

<a id="entry-presentation_rust_api_segment2d_perpendicular_bisector_equation"></a>
<a id="placement-placement.rust.native_rust.api_geometry_operations_segment2d_perpendicular_bisector_equation.ac8854730991"></a>
<p class="symi-entry-owner">api::geometry_operations::Segment2d method</p>

```rust signature
pub fn perpendicular_bisector_equation<'a, 'b, XVariableType, YVariableType>(
    &self,
    variable_x: XVariableType,
    variable_y: YVariableType,
) -> Result<Expression, ApiError>
where
    XVariableType: Into<VariableLike<'a>>,
    YVariableType: Into<VariableLike<'b>>,
```

The equation of the perpendicular bisector in the two named coordinates.

## polygon_2d and triangle_2d

### area

<a id="entry-presentation_rust_api_polygon2d_area"></a>
<a id="placement-placement.rust.native_rust.api_polygon2d_area.d429c12a1618"></a>
<p class="symi-entry-owner">api::Polygon2d method</p>

```rust signature
pub fn area(&self) -> Result<Expression, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms and variants</summary>

<a id="placement-placement.rust.native_rust.api_triangle2d_area.e5d87e4ae7ef"></a>
<p class="symi-entry-owner">Variant for this object — api::Triangle2d method: <code>api::Triangle2d::area</code></p>

```rust signature
pub fn area(&self) -> Result<Expression, ApiError>
```

</details>


For a `Polygon2d` or `Triangle2d`, this is the unsigned shoelace area of the
ordered boundary, so a polygon's orientation does not change its area. A
circle's area is a different formula under a different owner; see
[`Circle2d.area`](#circle2d_area).

### perimeter

<a id="entry-presentation_rust_api_polygon2d_perimeter"></a>
<a id="placement-placement.rust.native_rust.api_polygon2d_perimeter.e96a8af97eee"></a>
<p class="symi-entry-owner">api::Polygon2d method</p>

```rust signature
pub fn perimeter(&self) -> Result<Expression, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms and variants</summary>

<a id="placement-placement.rust.native_rust.api_triangle2d_perimeter.e890574f2a9f"></a>
<p class="symi-entry-owner">Variant for this object — api::Triangle2d method: <code>api::Triangle2d::perimeter</code></p>

```rust signature
pub fn perimeter(&self) -> Result<Expression, ApiError>
```

</details>


### centroid

<a id="entry-presentation_rust_api_polygon2d_centroid"></a>
<a id="placement-placement.rust.native_rust.api_polygon2d_centroid.d9a0bbccbda0"></a>
<p class="symi-entry-owner">api::Polygon2d method</p>

```rust signature
pub fn centroid(&self) -> Result<Point2d, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms and variants</summary>

<a id="placement-placement.rust.native_rust.api_geometry_operations_triangle2d_centroid.3c2405e22c07"></a>
<p class="symi-entry-owner">Variant for this object — api::geometry_operations::Triangle2d method: <code>api::geometry_operations::Triangle2d::centroid</code></p>

```rust signature
pub fn centroid(&self) -> Result<Point2d, ApiError>
```

</details>


### interior_angles

<a id="entry-presentation_rust_api_polygon2d_interior_angles"></a>
<a id="placement-placement.rust.native_rust.api_geometry_operations_polygon2d_interior_angles.567d6a930dfa"></a>
<p class="symi-entry-owner">api::geometry_operations::Polygon2d method</p>

```rust signature
pub fn interior_angles(&self) -> Result<Vec<VertexAngle>, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms and variants</summary>

<a id="placement-placement.rust.native_rust.api_geometry_operations_triangle2d_interior_angles.09f4f5eaf542"></a>
<p class="symi-entry-owner">Variant for this object — api::geometry_operations::Triangle2d method: <code>api::geometry_operations::Triangle2d::interior_angles</code></p>

```rust signature
pub fn interior_angles(&self) -> Result<Vec<VertexAngle>, ApiError>
```

</details>


Each vertex paired with its interior angle. **Notes:** WASM returns
`VertexAngle` objects with `vertex`/`angle` getters.

### vertex_angle (WASM result class)

### vertex

<a id="entry-presentation_rust_api_vertexangle_vertex"></a>
<a id="placement-placement.rust.native_rust.api_results_vertexangle_vertex.19c21ef7a520"></a>
<p class="symi-entry-owner">api::results::VertexAngle method</p>

```rust signature
pub fn vertex(&self) -> Point2d
```

The vertex.

### angle

<a id="entry-presentation_rust_api_vertexangle_angle"></a>
<a id="placement-placement.rust.native_rust.api_results_vertexangle_angle.262583f0166a"></a>
<p class="symi-entry-owner">api::results::VertexAngle method</p>

```rust signature
pub fn angle(&self) -> Expression
```

The interior angle at the vertex.

## circle_2d methods

### center

<a id="entry-presentation_rust_api_circle2d_center"></a>
<a id="placement-placement.rust.native_rust.api_circle2d_center.02eb99620206"></a>
<p class="symi-entry-owner">api::Circle2d method</p>

```rust signature
pub fn center(&self) -> Result<Point2d, ApiError>
```

Returns this circle's center point.

### radius

<a id="entry-presentation_rust_api_circle2d_radius"></a>
<a id="placement-placement.rust.native_rust.api_circle2d_radius.789baaf73229"></a>
<p class="symi-entry-owner">api::Circle2d method</p>

```rust signature
pub fn radius(&self) -> Result<Expression, ApiError>
```

Returns this circle's radius expression.

### Circle2d.area

<a id="entry-presentation_rust_api_circle2d_area"></a>
<a id="placement-placement.rust.native_rust.api_circle2d_area.a7721894e768"></a>
<p class="symi-entry-owner">api::Circle2d method</p>

```rust signature
pub fn area(&self) -> Result<Expression, ApiError>
```


The exact disk area \(\pi r^2\), from the circle's symbolic radius. This is not
the polygon and triangle shoelace operation of [`area`](#area) above; the two
share a member name and nothing else.

### circumference

<a id="entry-presentation_rust_api_circle2d_circumference"></a>
<a id="placement-placement.rust.native_rust.api_circle2d_circumference.32579f3e0242"></a>
<p class="symi-entry-owner">api::Circle2d method</p>

```rust signature
pub fn circumference(&self) -> Result<Expression, ApiError>
```

Provides the `circumference` operation on this native type.

### equation

<a id="entry-presentation_rust_api_circle2d_equation"></a>
<a id="placement-placement.rust.native_rust.api_geometry_operations_circle2d_equation.f4e2b1448427"></a>
<p class="symi-entry-owner">api::geometry_operations::Circle2d method</p>

```rust signature
pub fn equation<'a, 'b, XVariableType, YVariableType>(
    &self,
    variable_x: XVariableType,
    variable_y: YVariableType,
) -> Result<Expression, ApiError>
where
    XVariableType: Into<VariableLike<'a>>,
    YVariableType: Into<VariableLike<'b>>,
```


The circle as an `equal` relation in x and y.

## Exact boundary intersections

### intersection

<a id="entry-presentation_rust_api_point2d_intersection"></a>
<a id="placement-placement.rust.native_rust.api_point2d_intersection.93810c8a5dfd"></a>
<p class="symi-entry-owner">api::Point2d method</p>

```rust signature
pub fn intersection<GeometryType>(
    &self,
    other: GeometryType,
) -> Result<Vec<GeometryIntersectionComponent>, ApiError>
where
    GeometryType: Into<Geometry2d>,
```

<details class="symi-calling-forms">
<summary>Calling forms and variants</summary>

<a id="placement-placement.rust.native_rust.api_circle2d_intersection.ee759e69fc1f"></a>
<p class="symi-entry-owner">Variant for this object — api::Circle2d method: <code>api::Circle2d::intersection</code></p>

```rust signature
pub fn intersection<GeometryType>(
    &self,
    other: GeometryType,
) -> Result<Vec<GeometryIntersectionComponent>, ApiError>
where
    GeometryType: Into<Geometry2d>,
```

<a id="placement-placement.rust.native_rust.api_polygon2d_intersection.8d3c9414026e"></a>
<p class="symi-entry-owner">Variant for this object — api::Polygon2d method: <code>api::Polygon2d::intersection</code></p>

```rust signature
pub fn intersection<GeometryType>(
    &self,
    other: GeometryType,
) -> Result<Vec<GeometryIntersectionComponent>, ApiError>
where
    GeometryType: Into<Geometry2d>,
```

<a id="placement-placement.rust.native_rust.api_segment2d_intersection.16dbf6b95763"></a>
<p class="symi-entry-owner">Variant for this object — api::Segment2d method: <code>api::Segment2d::intersection</code></p>

```rust signature
pub fn intersection<GeometryType>(
    &self,
    other: GeometryType,
) -> Result<Vec<GeometryIntersectionComponent>, ApiError>
where
    GeometryType: Into<Geometry2d>,
```

<a id="placement-placement.rust.native_rust.api_triangle2d_intersection.a3b299db7fbd"></a>
<p class="symi-entry-owner">Variant for this object — api::Triangle2d method: <code>api::Triangle2d::intersection</code></p>

```rust signature
pub fn intersection<GeometryType>(
    &self,
    other: GeometryType,
) -> Result<Vec<GeometryIntersectionComponent>, ApiError>
where
    GeometryType: Into<Geometry2d>,
```

</details>


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

### api::geometry_operations

<a id="entry-presentation_rust_native_module_api_geometry_operations"></a>
<a id="placement-placement.rust.native_rust.api_geometry_operations.a27159fde83b"></a>
<p class="symi-entry-owner">api module</p>

```rust signature
pub mod geometry_operations;
```

Planar geometry operations of the native API.

### Circle2d

<a id="entry-presentation_rust_api_circle2d"></a>
<a id="placement-placement.rust.native_rust.api_circle2d.ea6315c85858"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct Circle2d
```

Public native data structure named `circle_2d`.

#### Circle2d.generation

<a id="entry-presentation_rust_api_circle2d_generation"></a>
<a id="placement-placement.rust.native_rust.api_circle2d_generation.c1d88396292e"></a>
<p class="symi-entry-owner">api::Circle2d method</p>

```rust signature
pub fn generation(&self) -> u64
```

The session generation this object was created in.

#### Circle2d.is_stale

<a id="entry-presentation_rust_api_circle2d_is_stale"></a>
<a id="placement-placement.rust.native_rust.api_geometry_operations_circle2d_is_stale.4b7eac64b284"></a>
<p class="symi-entry-owner">api::geometry_operations::Circle2d method</p>

```rust signature
pub fn is_stale(&self) -> bool
```

Whether this circle's session has been reset since the circle was made.

#### Circle2d.session

<a id="entry-presentation_rust_api_circle2d_session"></a>
<a id="placement-placement.rust.native_rust.api_circle2d_session.b01531190087"></a>
<p class="symi-entry-owner">api::Circle2d method</p>

```rust signature
pub fn session(&self) -> Session
```

The session that owns this object, for host adapters that carry the owner alongside it.

### Geometry2d

<a id="entry-presentation_rust_api_geometry2d"></a>
<a id="placement-placement.rust.native_rust.api_geometry2d.551b4ea24caf"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum Geometry2d
```

Public native enumeration of supported two-dimensional geometry operands.

#### Geometry2d.Circle

<a id="entry-presentation_rust_api_geometry2d_circle"></a>
<a id="placement-placement.rust.native_rust.api_geometry2d_circle.94e7828c74da"></a>
<p class="symi-entry-owner">api::Geometry2d variant</p>

```rust signature
Circle(Circle2d)
```

Stores a circle circumference operand.

#### Geometry2d.Point

<a id="entry-presentation_rust_api_geometry2d_point"></a>
<a id="placement-placement.rust.native_rust.api_geometry2d_point.fedc40bfa628"></a>
<p class="symi-entry-owner">api::Geometry2d variant</p>

```rust signature
Point(Point2d)
```

Stores a point operand.

#### Geometry2d.Polygon

<a id="entry-presentation_rust_api_geometry2d_polygon"></a>
<a id="placement-placement.rust.native_rust.api_geometry2d_polygon.686d625c8818"></a>
<p class="symi-entry-owner">api::Geometry2d variant</p>

```rust signature
Polygon(Polygon2d)
```

Stores a polygon boundary operand.

#### Geometry2d.Segment

<a id="entry-presentation_rust_api_geometry2d_segment"></a>
<a id="placement-placement.rust.native_rust.api_geometry2d_segment.45c15b4daa30"></a>
<p class="symi-entry-owner">api::Geometry2d variant</p>

```rust signature
Segment(Segment2d)
```

Stores a closed segment operand.

#### Geometry2d.Triangle

<a id="entry-presentation_rust_api_geometry2d_triangle"></a>
<a id="placement-placement.rust.native_rust.api_geometry2d_triangle.a3b8e68f65a9"></a>
<p class="symi-entry-owner">api::Geometry2d variant</p>

```rust signature
Triangle(Triangle2d)
```

Stores a triangle boundary operand.

### GeometryIntersectionComponent

<a id="entry-presentation_rust_api_geometryintersectioncomponent"></a>
<a id="placement-placement.rust.native_rust.api_geometryintersectioncomponent.bea12b24e800"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum GeometryIntersectionComponent
```

Public native enumeration of exact geometry intersection components.

#### GeometryIntersectionComponent.Circle

<a id="entry-presentation_rust_api_geometryintersectioncomponent_circle"></a>
<a id="placement-placement.rust.native_rust.api_geometryintersectioncomponent_circle.527411574024"></a>
<p class="symi-entry-owner">api::GeometryIntersectionComponent variant</p>

```rust signature
Circle(Circle2d)
```

Stores an overlapping circle component.

#### GeometryIntersectionComponent.Point

<a id="entry-presentation_rust_api_geometryintersectioncomponent_point"></a>
<a id="placement-placement.rust.native_rust.api_geometryintersectioncomponent_point.75b5164e7905"></a>
<p class="symi-entry-owner">api::GeometryIntersectionComponent variant</p>

```rust signature
Point(Point2d)
```

Stores an isolated point component.

#### GeometryIntersectionComponent.Segment

<a id="entry-presentation_rust_api_geometryintersectioncomponent_segment"></a>
<a id="placement-placement.rust.native_rust.api_geometryintersectioncomponent_segment.1bf6c05894c9"></a>
<p class="symi-entry-owner">api::GeometryIntersectionComponent variant</p>

```rust signature
Segment(Segment2d)
```

Stores an overlapping closed segment component.

### Point2d

<a id="entry-presentation_rust_api_point2d"></a>
<a id="placement-placement.rust.native_rust.api_point2d.dc4785314d67"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct Point2d
```

Public native data structure named `point_2d`.

#### Point2d.generation

<a id="entry-presentation_rust_api_point2d_generation"></a>
<a id="placement-placement.rust.native_rust.api_point2d_generation.16653c0cb131"></a>
<p class="symi-entry-owner">api::Point2d method</p>

```rust signature
pub fn generation(&self) -> u64
```

The session generation this object was created in.

#### Point2d.is_stale

<a id="entry-presentation_rust_api_point2d_is_stale"></a>
<a id="placement-placement.rust.native_rust.api_point2d_is_stale.d2f14787eb92"></a>
<p class="symi-entry-owner">api::Point2d method</p>

```rust signature
pub fn is_stale(&self) -> bool
```

Provides the `is_stale` operation on this native type.

#### Point2d.session

<a id="entry-presentation_rust_api_point2d_session"></a>
<a id="placement-placement.rust.native_rust.api_point2d_session.77a989e69dbf"></a>
<p class="symi-entry-owner">api::Point2d method</p>

```rust signature
pub fn session(&self) -> Session
```

The session that owns this object, for host adapters that carry the owner alongside it.

### Polygon2d

<a id="entry-presentation_rust_api_polygon2d"></a>
<a id="placement-placement.rust.native_rust.api_polygon2d.665969172b46"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct Polygon2d
```

Public native data structure named `polygon_2d`.

#### Polygon2d.generation

<a id="entry-presentation_rust_api_polygon2d_generation"></a>
<a id="placement-placement.rust.native_rust.api_polygon2d_generation.0e0f163c0ce0"></a>
<p class="symi-entry-owner">api::Polygon2d method</p>

```rust signature
pub fn generation(&self) -> u64
```

The session generation this object was created in.

#### Polygon2d.is_stale

<a id="entry-presentation_rust_api_polygon2d_is_stale"></a>
<a id="placement-placement.rust.native_rust.api_geometry_operations_polygon2d_is_stale.e72ccbf6a0c1"></a>
<p class="symi-entry-owner">api::geometry_operations::Polygon2d method</p>

```rust signature
pub fn is_stale(&self) -> bool
```

Whether this polygon's session has been reset since the polygon was made.

#### Polygon2d.session

<a id="entry-presentation_rust_api_polygon2d_session"></a>
<a id="placement-placement.rust.native_rust.api_polygon2d_session.f9ac45376164"></a>
<p class="symi-entry-owner">api::Polygon2d method</p>

```rust signature
pub fn session(&self) -> Session
```

The session that owns this object, for host adapters that carry the owner alongside it.

#### Polygon2d.vertex_count

<a id="entry-presentation_rust_api_polygon2d_vertex_count"></a>
<a id="placement-placement.rust.native_rust.api_geometry_operations_polygon2d_vertex_count.adcc92e62dc8"></a>
<p class="symi-entry-owner">api::geometry_operations::Polygon2d method</p>

```rust signature
pub fn vertex_count(&self) -> Result<usize, ApiError>
```

The number of vertices bounding this polygon.

### Segment2d

<a id="entry-presentation_rust_api_segment2d"></a>
<a id="placement-placement.rust.native_rust.api_segment2d.5bdf9bd952d3"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct Segment2d
```

Public native data structure named `segment_2d`.

#### Segment2d.generation

<a id="entry-presentation_rust_api_segment2d_generation"></a>
<a id="placement-placement.rust.native_rust.api_segment2d_generation.e8e8cb3c88cf"></a>
<p class="symi-entry-owner">api::Segment2d method</p>

```rust signature
pub fn generation(&self) -> u64
```

The session generation this object was created in.

#### Segment2d.is_stale

<a id="entry-presentation_rust_api_segment2d_is_stale"></a>
<a id="placement-placement.rust.native_rust.api_geometry_operations_segment2d_is_stale.3d5910d46210"></a>
<p class="symi-entry-owner">api::geometry_operations::Segment2d method</p>

```rust signature
pub fn is_stale(&self) -> bool
```

Whether this segment's session has been reset since the segment was made.

#### Segment2d.session

<a id="entry-presentation_rust_api_segment2d_session"></a>
<a id="placement-placement.rust.native_rust.api_segment2d_session.667a8ffcd829"></a>
<p class="symi-entry-owner">api::Segment2d method</p>

```rust signature
pub fn session(&self) -> Session
```

The session that owns this object, for host adapters that carry the owner alongside it.

### Triangle2d

<a id="entry-presentation_rust_api_triangle2d"></a>
<a id="placement-placement.rust.native_rust.api_triangle2d.a9eb12c7e721"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct Triangle2d
```

Public native data structure named `triangle_2d`.

#### Triangle2d.generation

<a id="entry-presentation_rust_api_triangle2d_generation"></a>
<a id="placement-placement.rust.native_rust.api_triangle2d_generation.aee85efd23e0"></a>
<p class="symi-entry-owner">api::Triangle2d method</p>

```rust signature
pub fn generation(&self) -> u64
```

The session generation this object was created in.

#### Triangle2d.is_stale

<a id="entry-presentation_rust_api_triangle2d_is_stale"></a>
<a id="placement-placement.rust.native_rust.api_geometry_operations_triangle2d_is_stale.7697d1da3f88"></a>
<p class="symi-entry-owner">api::geometry_operations::Triangle2d method</p>

```rust signature
pub fn is_stale(&self) -> bool
```

Whether this triangle's session has been reset since the triangle was made.

#### Triangle2d.session

<a id="entry-presentation_rust_api_triangle2d_session"></a>
<a id="placement-placement.rust.native_rust.api_triangle2d_session.bec818cb629d"></a>
<p class="symi-entry-owner">api::Triangle2d method</p>

```rust signature
pub fn session(&self) -> Session
```

The session that owns this object, for host adapters that carry the owner alongside it.

### VertexAngle

<a id="entry-presentation_rust_api_vertexangle"></a>
<a id="placement-placement.rust.native_rust.api_vertexangle.987f7208d846"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use results::VertexAngle;
```

One vertex of a figure together with the interior angle at that vertex.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_results_vertexangle.bc546d8b4bc4"></a>
<p class="symi-entry-owner">Type: <code>api::results::VertexAngle</code></p>

```rust signature
pub struct VertexAngle
```

</details>

