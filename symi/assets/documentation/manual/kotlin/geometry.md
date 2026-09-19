# Geometry

Exact symbolic plane geometry. Coordinates, lengths, and angles are
`Expression` values.

## Constructors

Constructing a geometry class directly uses the shared default context.
The matching `Context` method constructs the object in an explicit context.

### point_2d

<a id="entry-presentation_kotlin_geometry_capability_geometry_point_2d_api_session_point_2d"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_point2d.a95ff94a2da5"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun point2d(
    coordinateX: UniffiExpression,
    coordinateY: UniffiExpression,
): UniffiPoint2d
```




### segment_2d

<a id="entry-presentation_kotlin_geometry_capability_geometry_segment_2d_api_session_segment_2d"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_segment2d.a3a41b1eca42"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun segment2d(start: UniffiPoint2d, end: UniffiPoint2d): UniffiSegment2d
```




### polygon_2d

<a id="entry-presentation_kotlin_geometry_capability_geometry_polygon_2d_api_session_polygon_2d"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_polygon2d.eb38ed7a2ecc"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun polygon2d(vertices: List<UniffiPoint2d>): UniffiPolygon2d
```




Simple polygon from its vertex list in order; degenerate inputs raise.

### triangle_2d

<a id="entry-presentation_kotlin_geometry_capability_geometry_triangle_2d_api_session_triangle_2d"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_triangle2d.12f5289687f4"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun triangle2d(
    first: UniffiPoint2d,
    second: UniffiPoint2d,
    third: UniffiPoint2d,
): UniffiTriangle2d
```




Collinear vertices raise.

### circle_2d

<a id="entry-presentation_kotlin_geometry_capability_geometry_circle_2d_api_session_circle_2d"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_circle2d.d4cd9fc5fe03"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun circle2d(
    center: UniffiPoint2d,
    radius: UniffiExpression,
): UniffiCircle2d
```




## point_2d methods

### x

<a id="entry-presentation_kotlin_geometry_capability_geometry_x_api_point2d_x"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipoint2d_x.cd870d02e628"></a>
<p class="symi-entry-owner">UniffiPoint2d method</p>

```kotlin signature
fun x(): UniffiExpression
```


### y

<a id="entry-presentation_kotlin_geometry_capability_geometry_y_api_point2d_y"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipoint2d_y.8d94a5aafc04"></a>
<p class="symi-entry-owner">UniffiPoint2d method</p>

```kotlin signature
fun y(): UniffiExpression
```


### coordinates

<a id="entry-presentation_kotlin_geometry_capability_geometry_coordinates_api_point2d_coordinates"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipoint2d_coordinates.de2393382fa8"></a>
<p class="symi-entry-owner">UniffiPoint2d method</p>

```kotlin signature
fun coordinates(): UniffiExpressionExpressionTuple
```


### distance_to

<a id="entry-presentation_kotlin_geometry_capability_geometry_distance_to_api_point2d_distance_to"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipoint2d_distanceto.b73c3ca8a5bc"></a>
<p class="symi-entry-owner">UniffiPoint2d method</p>

```kotlin signature
fun distanceTo(other: UniffiPoint2d): UniffiExpression
```


Euclidean distance, exact (a `sqrt` expression in general).

## segment_2d methods

### length

Also the finite-set length accessor on `Expression` in WASM; context
disambiguates.

### midpoint

<a id="entry-presentation_kotlin_geometry_capability_geometry_midpoint_api_segment2d_midpoint"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisegment2d_midpoint.0cbea9c460e5"></a>
<p class="symi-entry-owner">UniffiSegment2d method</p>

```kotlin signature
fun midpoint(): UniffiPoint2d
```


### perpendicular_bisector_equation

<a id="entry-presentation_kotlin_geometry_capability_geometry_perpendicular_bisector_equation_api_geometry_operations_segment2d_perpendicular_bisector_equation"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisegment2d_perpendicularbisectorequation.379a33df74eb"></a>
<p class="symi-entry-owner">UniffiSegment2d method</p>

```kotlin signature
fun perpendicularBisectorEquation(
    variableX: kotlin.String,
    variableY: kotlin.String,
): UniffiExpression
```


The bisector line as an `equal` relation in x and y.

## polygon_2d and triangle_2d

### area

<a id="entry-presentation_kotlin_geometry_capability_geometry_area_api_polygon2d_area"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipolygon2d_area.fe54e1c1c37d"></a>
<p class="symi-entry-owner">UniffiPolygon2d method</p>

```kotlin signature
fun area(): UniffiExpression
```

<a id="entry-presentation_kotlin_geometry_capability_geometry_area_api_triangle2d_area"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffitriangle2d_area.3622dc419db1"></a>
<p class="symi-entry-owner">UniffiTriangle2d method</p>

```kotlin signature
fun area(): UniffiExpression
```


For a `Polygon2d` or `Triangle2d`, this is the unsigned shoelace area of the
ordered boundary. It is separate from `Circle2d.area()`, which returns
\(\pi r^2\). A polygon's orientation therefore does not change its area.

### Circle2d area

*Not exposed by the Kotlin bindings. Available as [`Circle2d`](/symi/python/geometry#Circle2d) in Python.*



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

<a id="entry-presentation_kotlin_geometry_capability_geometry_vertex_api_results_vertexangle_vertex"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffivertexangle_vertex.82cd075c3eb4"></a>
<p class="symi-entry-owner">UniffiVertexAngle method</p>

```kotlin signature
fun vertex(): UniffiPoint2d
```


### angle

<a id="entry-presentation_kotlin_geometry_capability_geometry_angle_api_results_vertexangle_angle"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffivertexangle_angle.6d2308122bfc"></a>
<p class="symi-entry-owner">UniffiVertexAngle method</p>

```kotlin signature
fun angle(): UniffiExpression
```


## circle_2d methods

### center

<a id="entry-presentation_kotlin_geometry_capability_geometry_center_api_circle2d_center"></a>
<a id="placement-placement.kotlin.kotlin_object.unifficircle2d_center.36bc0556f1b6"></a>
<p class="symi-entry-owner">UniffiCircle2d method</p>

```kotlin signature
fun center(): UniffiPoint2d
```


### radius

<a id="entry-presentation_kotlin_geometry_capability_geometry_radius_api_circle2d_radius"></a>
<a id="placement-placement.kotlin.kotlin_object.unifficircle2d_radius.99ad69762a14"></a>
<p class="symi-entry-owner">UniffiCircle2d method</p>

```kotlin signature
fun radius(): UniffiExpression
```


### circumference

<a id="entry-presentation_kotlin_geometry_capability_geometry_circumference_api_circle2d_circumference"></a>
<a id="placement-placement.kotlin.kotlin_object.unifficircle2d_circumference.af55a46b3517"></a>
<p class="symi-entry-owner">UniffiCircle2d method</p>

```kotlin signature
fun circumference(): UniffiExpression
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


## Additional API

### area

<a id="entry-presentation_kotlin_geometry_capability_geometry_area_api_circle2d_area"></a>
<a id="placement-placement.kotlin.kotlin_object.unifficircle2d_area.37be5e2d8bfd"></a>
<p class="symi-entry-owner">UniffiCircle2d method</p>

```kotlin signature
fun area(): UniffiExpression
```

Area of the circle, \(\pi r^2\).

### centroid

<a id="entry-presentation_kotlin_geometry_capability_geometry_centroid_api_polygon2d_centroid"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipolygon2d_centroid.3c2dcc510b8f"></a>
<p class="symi-entry-owner">UniffiPolygon2d method</p>

```kotlin signature
fun centroid(): UniffiPoint2d
```

Centroid of the polygon's vertices.

### centroid

<a id="entry-presentation_kotlin_geometry_capability_geometry_centroid_api_geometry_operations_triangle2d_centroid"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffitriangle2d_centroid.c4189053ca61"></a>
<p class="symi-entry-owner">UniffiTriangle2d method</p>

```kotlin signature
fun centroid(): UniffiPoint2d
```

Centroid of the triangle's vertices.

### equation

<a id="entry-presentation_kotlin_geometry_capability_geometry_equation_api_geometry_operations_circle2d_equation"></a>
<a id="placement-placement.kotlin.kotlin_object.unifficircle2d_equation.71d7667afef2"></a>
<p class="symi-entry-owner">UniffiCircle2d method</p>

```kotlin signature
fun equation(
    variableX: kotlin.String,
    variableY: kotlin.String,
): UniffiExpression
```

The circle as an `equal` relation in x and y.

### equation

<a id="entry-presentation_kotlin_geometry_capability_geometry_equation_api_partial_differential_equations_partialdifferentialequationproblem_equation"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationproblem_equation.1de24748e17f"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationProblem method</p>

```kotlin signature
fun equation(): UniffiExpression
```

The governing residual, interpreted as equal to zero.

### interior_angles

<a id="entry-presentation_kotlin_geometry_capability_geometry_interior_angles_api_geometry_operations_polygon2d_interior_angles"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipolygon2d_interiorangles.a4fdbe9a7c2b"></a>
<p class="symi-entry-owner">UniffiPolygon2d method</p>

```kotlin signature
fun interiorAngles(): List<UniffiVertexAngle>
```

Each vertex paired with its interior angle. Notes: WASM returns `vertex_angle` objects with `vertex`/`angle` getters.

### interior_angles

<a id="entry-presentation_kotlin_geometry_capability_geometry_interior_angles_api_geometry_operations_triangle2d_interior_angles"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffitriangle2d_interiorangles.066e3c86663e"></a>
<p class="symi-entry-owner">UniffiTriangle2d method</p>

```kotlin signature
fun interiorAngles(): List<UniffiVertexAngle>
```

Each vertex paired with its interior angle. Notes: WASM returns `vertex_angle` objects with `vertex`/`angle` getters.

### intersection

<a id="entry-presentation_kotlin_geometry_capability_geometry_intersection_api_circle2d_intersection"></a>
<a id="placement-placement.kotlin.kotlin_object.unifficircle2d_intersection.d1f53faccdae"></a>
<p class="symi-entry-owner">UniffiCircle2d method</p>

```kotlin signature
fun intersection(other: UniffiGeometry2d): List<UniffiGeometryIntersectionComponent>
```

Return the complete exact boundary intersection with another supported plane geometry.

### intersection

<a id="entry-presentation_kotlin_geometry_capability_geometry_intersection_api_point2d_intersection"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipoint2d_intersection.67912ec3ca53"></a>
<p class="symi-entry-owner">UniffiPoint2d method</p>

```kotlin signature
fun intersection(other: UniffiGeometry2d): List<UniffiGeometryIntersectionComponent>
```

Return the complete exact boundary intersection with another supported plane geometry.

### intersection

<a id="entry-presentation_kotlin_geometry_capability_geometry_intersection_api_polygon2d_intersection"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipolygon2d_intersection.e877564eccfb"></a>
<p class="symi-entry-owner">UniffiPolygon2d method</p>

```kotlin signature
fun intersection(other: UniffiGeometry2d): List<UniffiGeometryIntersectionComponent>
```

Return the complete exact boundary intersection with another supported plane geometry.

### intersection

<a id="entry-presentation_kotlin_geometry_capability_geometry_intersection_api_segment2d_intersection"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisegment2d_intersection.6b7a95762b9b"></a>
<p class="symi-entry-owner">UniffiSegment2d method</p>

```kotlin signature
fun intersection(other: UniffiGeometry2d): List<UniffiGeometryIntersectionComponent>
```

Return the complete exact boundary intersection with another supported plane geometry.

### intersection

<a id="entry-presentation_kotlin_geometry_capability_geometry_intersection_api_triangle2d_intersection"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffitriangle2d_intersection.f53046f71468"></a>
<p class="symi-entry-owner">UniffiTriangle2d method</p>

```kotlin signature
fun intersection(other: UniffiGeometry2d): List<UniffiGeometryIntersectionComponent>
```

Return the complete exact boundary intersection with another supported plane geometry.

### perimeter

<a id="entry-presentation_kotlin_geometry_capability_geometry_perimeter_api_polygon2d_perimeter"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipolygon2d_perimeter.c1eed6a02784"></a>
<p class="symi-entry-owner">UniffiPolygon2d method</p>

```kotlin signature
fun perimeter(): UniffiExpression
```

Perimeter of the polygon, the sum of its edge lengths.

### perimeter

<a id="entry-presentation_kotlin_geometry_capability_geometry_perimeter_api_triangle2d_perimeter"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffitriangle2d_perimeter.e2dfc54b1a39"></a>
<p class="symi-entry-owner">UniffiTriangle2d method</p>

```kotlin signature
fun perimeter(): UniffiExpression
```

Perimeter of the triangle, the sum of its side lengths.

