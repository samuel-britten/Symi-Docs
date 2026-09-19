# Geometry

Exact symbolic plane geometry. Coordinates, lengths, and angles are
`Expression` values.

## Constructors

Constructing a geometry class directly uses the shared default context.
The matching `Context` method constructs the object in an explicit context.

### point_2d

<a id="entry-presentation_rust_geometry_capability_rust_native_rust_api_session_point_2d_unnamed"></a>
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

<a id="entry-presentation_rust_geometry_capability_rust_native_rust_api_session_segment_2d_unnamed"></a>
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

<a id="entry-presentation_rust_geometry_capability_rust_native_rust_api_session_polygon_2d_unnamed"></a>
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

<a id="entry-presentation_rust_geometry_capability_rust_native_rust_api_session_triangle_2d_unnamed"></a>
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

<a id="entry-presentation_rust_geometry_capability_rust_native_rust_api_session_circle_2d_unnamed"></a>
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

<a id="entry-presentation_rust_geometry_capability_rust_native_rust_api_point2d_x_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_point2d_x.40d3d8fb748f"></a>
<p class="symi-entry-owner">api::Point2d method</p>

```rust signature
pub fn x(&self) -> Result<Expression, ApiError>
```


### y

<a id="entry-presentation_rust_geometry_capability_rust_native_rust_api_point2d_y_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_point2d_y.24c9ed64c671"></a>
<p class="symi-entry-owner">api::Point2d method</p>

```rust signature
pub fn y(&self) -> Result<Expression, ApiError>
```


### coordinates

<a id="entry-presentation_rust_geometry_capability_rust_native_rust_api_point2d_coordinates_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_point2d_coordinates.113cf60decf0"></a>
<p class="symi-entry-owner">api::Point2d method</p>

```rust signature
pub fn coordinates(&self) -> Result<(Expression, Expression), ApiError>
```


### distance_to

<a id="entry-presentation_rust_geometry_capability_rust_native_rust_api_point2d_distance_to_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_point2d_distance_to.3db8aa5016b3"></a>
<p class="symi-entry-owner">api::Point2d method</p>

```rust signature
pub fn distance_to(
    &self,
    other: &Point2d,
) -> Result<Expression, ApiError>
```


Euclidean distance, exact (a `sqrt` expression in general).

## segment_2d methods

### length

Also the finite-set length accessor on `Expression` in WASM; context
disambiguates.

### midpoint

<a id="entry-presentation_rust_geometry_capability_rust_native_rust_api_segment2d_midpoint_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_segment2d_midpoint.c51969d1a676"></a>
<p class="symi-entry-owner">api::Segment2d method</p>

```rust signature
pub fn midpoint(&self) -> Result<Point2d, ApiError>
```


### perpendicular_bisector_equation

<a id="entry-presentation_rust_geometry_capability_rust_native_rust_api_geometry_operations_segment2d_perpendicular_bisector_equation_unnamed"></a>
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


The bisector line as an `equal` relation in x and y.

## polygon_2d and triangle_2d

### area

For a `Polygon2d` or `Triangle2d`, this is the unsigned shoelace area of the
ordered boundary. It is separate from `Circle2d.area()`, which returns
\(\pi r^2\). A polygon's orientation therefore does not change its area.

### Circle2d area

*Not part of the recommended `symi::api` facade; the operation is reachable from the complete native crate in the [native Rust API reference](/symi/rust/api/symi/). Available as [`Circle2d`](/symi/python/geometry#Circle2d) in Python.*



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

<a id="entry-presentation_rust_geometry_capability_rust_native_rust_api_results_vertexangle_vertex_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_vertexangle_vertex.19c21ef7a520"></a>
<p class="symi-entry-owner">api::results::VertexAngle method</p>

```rust signature
pub fn vertex(&self) -> Point2d
```


### angle

<a id="entry-presentation_rust_geometry_capability_rust_native_rust_api_results_vertexangle_angle_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_vertexangle_angle.262583f0166a"></a>
<p class="symi-entry-owner">api::results::VertexAngle method</p>

```rust signature
pub fn angle(&self) -> Expression
```


## circle_2d methods

### center

<a id="entry-presentation_rust_geometry_capability_rust_native_rust_api_circle2d_center_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_circle2d_center.02eb99620206"></a>
<p class="symi-entry-owner">api::Circle2d method</p>

```rust signature
pub fn center(&self) -> Result<Point2d, ApiError>
```


### radius

<a id="entry-presentation_rust_geometry_capability_rust_native_rust_api_circle2d_radius_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_circle2d_radius.789baaf73229"></a>
<p class="symi-entry-owner">api::Circle2d method</p>

```rust signature
pub fn radius(&self) -> Result<Expression, ApiError>
```


### circumference

<a id="entry-presentation_rust_geometry_capability_rust_native_rust_api_circle2d_circumference_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_circle2d_circumference.32579f3e0242"></a>
<p class="symi-entry-owner">api::Circle2d method</p>

```rust signature
pub fn circumference(&self) -> Result<Expression, ApiError>
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

### area

<a id="entry-presentation_rust_geometry_capability_rust_native_rust_api_circle2d_area_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_circle2d_area.a7721894e768"></a>
<p class="symi-entry-owner">api::Circle2d method</p>

```rust signature
pub fn area(&self) -> Result<Expression, ApiError>
```

For a `Polygon2d` or `Triangle2d`, this is the unsigned shoelace area of the ordered boundary. It is separate from `Circle2d.area()`, which returns \(\pi r^2\).

### area

<a id="entry-presentation_rust_geometry_capability_rust_native_rust_api_polygon2d_area_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_polygon2d_area.d429c12a1618"></a>
<p class="symi-entry-owner">api::Polygon2d method</p>

```rust signature
pub fn area(&self) -> Result<Expression, ApiError>
```

For a `Polygon2d` or `Triangle2d`, this is the unsigned shoelace area of the ordered boundary. It is separate from `Circle2d.area()`, which returns \(\pi r^2\).

### area

<a id="entry-presentation_rust_geometry_capability_rust_native_rust_api_triangle2d_area_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_triangle2d_area.e5d87e4ae7ef"></a>
<p class="symi-entry-owner">api::Triangle2d method</p>

```rust signature
pub fn area(&self) -> Result<Expression, ApiError>
```

For a `Polygon2d` or `Triangle2d`, this is the unsigned shoelace area of the ordered boundary. It is separate from `Circle2d.area()`, which returns \(\pi r^2\).

### centroid

<a id="entry-presentation_rust_geometry_capability_rust_native_rust_api_polygon2d_centroid_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_polygon2d_centroid.d9a0bbccbda0"></a>
<p class="symi-entry-owner">api::Polygon2d method</p>

```rust signature
pub fn centroid(&self) -> Result<Point2d, ApiError>
```

Public method placement for centroid.

### centroid

<a id="entry-presentation_rust_geometry_capability_rust_native_rust_api_geometry_operations_triangle2d_centroid_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_geometry_operations_triangle2d_centroid.3c2405e22c07"></a>
<p class="symi-entry-owner">api::geometry_operations::Triangle2d method</p>

```rust signature
pub fn centroid(&self) -> Result<Point2d, ApiError>
```

Public method placement for centroid.

### equation

<a id="entry-presentation_rust_geometry_capability_rust_native_rust_api_geometry_operations_circle2d_equation_unnamed"></a>
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

### equation

<a id="entry-presentation_rust_geometry_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationproblem_equation_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationproblem_equation.345ea5c1476a"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationProblem method</p>

```rust signature
pub fn equation(&self) -> Result<Expression, ApiError>
```

The circle as an `equal` relation in x and y.

### interior_angles

<a id="entry-presentation_rust_geometry_capability_rust_native_rust_api_geometry_operations_polygon2d_interior_angles_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_geometry_operations_polygon2d_interior_angles.567d6a930dfa"></a>
<p class="symi-entry-owner">api::geometry_operations::Polygon2d method</p>

```rust signature
pub fn interior_angles(&self) -> Result<Vec<VertexAngle>, ApiError>
```

Each vertex paired with its interior angle. Notes: WASM returns `VertexAngle` objects with `vertex`/`angle` getters.

### interior_angles

<a id="entry-presentation_rust_geometry_capability_rust_native_rust_api_geometry_operations_triangle2d_interior_angles_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_geometry_operations_triangle2d_interior_angles.09f4f5eaf542"></a>
<p class="symi-entry-owner">api::geometry_operations::Triangle2d method</p>

```rust signature
pub fn interior_angles(&self) -> Result<Vec<VertexAngle>, ApiError>
```

Each vertex paired with its interior angle. Notes: WASM returns `VertexAngle` objects with `vertex`/`angle` getters.

### intersection

<a id="entry-presentation_rust_geometry_capability_rust_native_rust_api_circle2d_intersection_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_circle2d_intersection.ee759e69fc1f"></a>
<p class="symi-entry-owner">api::Circle2d method</p>

```rust signature
pub fn intersection<GeometryType>(
    &self,
    other: GeometryType,
) -> Result<Vec<GeometryIntersectionComponent>, ApiError>
where
    GeometryType: Into<Geometry2d>,
```

Every point, segment, polygon, triangle, and circle exposes the same symmetric `intersection` method. Polygon and triangle operands mean their closed boundary; circle operands mean their circumference. Isolated intersections are returned as `Point2d` objects, while a shared edge or coincident circle is returned as the corresponding `Segment2d` or `Circle2d` component instead of sampled points. The component sequence is exact and deterministic. If any required symbolic predicate cannot be decided, the operation declines instead of returning an incomplete list. Both operands must belong to the same context.

### intersection

<a id="entry-presentation_rust_geometry_capability_rust_native_rust_api_point2d_intersection_unnamed"></a>
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

Every point, segment, polygon, triangle, and circle exposes the same symmetric `intersection` method. Polygon and triangle operands mean their closed boundary; circle operands mean their circumference. Isolated intersections are returned as `Point2d` objects, while a shared edge or coincident circle is returned as the corresponding `Segment2d` or `Circle2d` component instead of sampled points. The component sequence is exact and deterministic. If any required symbolic predicate cannot be decided, the operation declines instead of returning an incomplete list. Both operands must belong to the same context.

### intersection

<a id="entry-presentation_rust_geometry_capability_rust_native_rust_api_polygon2d_intersection_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_polygon2d_intersection.8d3c9414026e"></a>
<p class="symi-entry-owner">api::Polygon2d method</p>

```rust signature
pub fn intersection<GeometryType>(
    &self,
    other: GeometryType,
) -> Result<Vec<GeometryIntersectionComponent>, ApiError>
where
    GeometryType: Into<Geometry2d>,
```

Every point, segment, polygon, triangle, and circle exposes the same symmetric `intersection` method. Polygon and triangle operands mean their closed boundary; circle operands mean their circumference. Isolated intersections are returned as `Point2d` objects, while a shared edge or coincident circle is returned as the corresponding `Segment2d` or `Circle2d` component instead of sampled points. The component sequence is exact and deterministic. If any required symbolic predicate cannot be decided, the operation declines instead of returning an incomplete list. Both operands must belong to the same context.

### intersection

<a id="entry-presentation_rust_geometry_capability_rust_native_rust_api_segment2d_intersection_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_segment2d_intersection.16dbf6b95763"></a>
<p class="symi-entry-owner">api::Segment2d method</p>

```rust signature
pub fn intersection<GeometryType>(
    &self,
    other: GeometryType,
) -> Result<Vec<GeometryIntersectionComponent>, ApiError>
where
    GeometryType: Into<Geometry2d>,
```

Every point, segment, polygon, triangle, and circle exposes the same symmetric `intersection` method. Polygon and triangle operands mean their closed boundary; circle operands mean their circumference. Isolated intersections are returned as `Point2d` objects, while a shared edge or coincident circle is returned as the corresponding `Segment2d` or `Circle2d` component instead of sampled points. The component sequence is exact and deterministic. If any required symbolic predicate cannot be decided, the operation declines instead of returning an incomplete list. Both operands must belong to the same context.

### intersection

<a id="entry-presentation_rust_geometry_capability_rust_native_rust_api_triangle2d_intersection_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_triangle2d_intersection.a3b299db7fbd"></a>
<p class="symi-entry-owner">api::Triangle2d method</p>

```rust signature
pub fn intersection<GeometryType>(
    &self,
    other: GeometryType,
) -> Result<Vec<GeometryIntersectionComponent>, ApiError>
where
    GeometryType: Into<Geometry2d>,
```

Every point, segment, polygon, triangle, and circle exposes the same symmetric `intersection` method. Polygon and triangle operands mean their closed boundary; circle operands mean their circumference. Isolated intersections are returned as `Point2d` objects, while a shared edge or coincident circle is returned as the corresponding `Segment2d` or `Circle2d` component instead of sampled points. The component sequence is exact and deterministic. If any required symbolic predicate cannot be decided, the operation declines instead of returning an incomplete list. Both operands must belong to the same context.

### perimeter

<a id="entry-presentation_rust_geometry_capability_rust_native_rust_api_polygon2d_perimeter_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_polygon2d_perimeter.e96a8af97eee"></a>
<p class="symi-entry-owner">api::Polygon2d method</p>

```rust signature
pub fn perimeter(&self) -> Result<Expression, ApiError>
```

Public method placement for perimeter.

### perimeter

<a id="entry-presentation_rust_geometry_capability_rust_native_rust_api_triangle2d_perimeter_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_triangle2d_perimeter.e890574f2a9f"></a>
<p class="symi-entry-owner">api::Triangle2d method</p>

```rust signature
pub fn perimeter(&self) -> Result<Expression, ApiError>
```

Public method placement for perimeter.

### vertex_count

<a id="entry-presentation_rust_geometry_capability_rust_native_rust_api_geometry_operations_polygon2d_vertex_count_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_geometry_operations_polygon2d_vertex_count.adcc92e62dc8"></a>
<p class="symi-entry-owner">api::geometry_operations::Polygon2d method</p>

```rust signature
pub fn vertex_count(&self) -> Result<usize, ApiError>
```

Public method placement for vertex_count.

