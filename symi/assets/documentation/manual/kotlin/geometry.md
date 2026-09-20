# Geometry

Exact symbolic plane geometry. Coordinates, lengths, and angles are
`Expression` values.

## Constructors

Constructing a geometry class directly uses the shared default context.
The matching `Context` method constructs the object in an explicit context.

### point_2d

<a id="entry-presentation_kotlin_api_session_point_2d"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_point2d.a95ff94a2da5"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun point2d(
    coordinateX: UniffiExpression,
    coordinateY: UniffiExpression,
): UniffiPoint2d
```




### segment_2d

<a id="entry-presentation_kotlin_api_session_segment_2d"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_segment2d.a3a41b1eca42"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun segment2d(start: UniffiPoint2d, end: UniffiPoint2d): UniffiSegment2d
```




### polygon_2d

<a id="entry-presentation_kotlin_api_session_polygon_2d"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_polygon2d.eb38ed7a2ecc"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun polygon2d(vertices: List<UniffiPoint2d>): UniffiPolygon2d
```




Simple polygon from its vertex list in order; degenerate inputs raise.

### triangle_2d

<a id="entry-presentation_kotlin_api_session_triangle_2d"></a>
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

<a id="entry-presentation_kotlin_api_session_circle_2d"></a>
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

<a id="entry-presentation_kotlin_api_point2d_x"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipoint2d_x.cd870d02e628"></a>
<p class="symi-entry-owner">UniffiPoint2d method</p>

```kotlin signature
fun x(): UniffiExpression
```

The x coordinate of the point.

### y

<a id="entry-presentation_kotlin_api_point2d_y"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipoint2d_y.8d94a5aafc04"></a>
<p class="symi-entry-owner">UniffiPoint2d method</p>

```kotlin signature
fun y(): UniffiExpression
```

The y coordinate of the point.

### coordinates

<a id="entry-presentation_kotlin_api_point2d_coordinates"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipoint2d_coordinates.de2393382fa8"></a>
<p class="symi-entry-owner">UniffiPoint2d method</p>

```kotlin signature
fun coordinates(): UniffiExpressionExpressionTuple
```

The `(x, y)` coordinate pair of the point.

### distance_to

Euclidean distance, exact (a `sqrt` expression in general).

<a id="entry-presentation_kotlin_api_point2d_distance_to"></a>
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

<a id="entry-presentation_kotlin_api_segment2d_length"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisegment2d_length.2eb9b1d381fe"></a>
<p class="symi-entry-owner">UniffiSegment2d method</p>

```kotlin signature
fun length(): UniffiExpression
```

Also the finite-set length accessor on `expression` in WASM; context disambiguates.

### midpoint

<a id="entry-presentation_kotlin_api_segment2d_midpoint"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisegment2d_midpoint.0cbea9c460e5"></a>
<p class="symi-entry-owner">UniffiSegment2d method</p>

```kotlin signature
fun midpoint(): UniffiPoint2d
```

Midpoint of the segment.

### perpendicular_bisector_equation

The bisector line as an `equal` relation in x and y.

<a id="entry-presentation_kotlin_api_segment2d_perpendicular_bisector_equation"></a>
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

<a id="entry-presentation_kotlin_api_polygon2d_area"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipolygon2d_area.fe54e1c1c37d"></a>
<p class="symi-entry-owner">UniffiPolygon2d method</p>

```kotlin signature
fun area(): UniffiExpression
```

<details class="symi-calling-forms">
<summary>Calling forms and variants</summary>

<a id="placement-placement.kotlin.kotlin_object.uniffitriangle2d_area.3622dc419db1"></a>
<p class="symi-entry-owner">Variant for this object — UniffiTriangle2d method: <code>UniffiTriangle2d.area</code></p>

```kotlin signature
fun area(): UniffiExpression
```

</details>


For a `Polygon2d` or `Triangle2d`, this is the unsigned shoelace area of the
ordered boundary, so a polygon's orientation does not change its area. A
circle's area is a different formula under a different owner; see
[`Circle2d.area`](#circle2d_area).

### perimeter

<a id="entry-presentation_kotlin_api_polygon2d_perimeter"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipolygon2d_perimeter.c1eed6a02784"></a>
<p class="symi-entry-owner">UniffiPolygon2d method</p>

```kotlin signature
fun perimeter(): UniffiExpression
```

<details class="symi-calling-forms">
<summary>Calling forms and variants</summary>

<a id="placement-placement.kotlin.kotlin_object.uniffitriangle2d_perimeter.e2dfc54b1a39"></a>
<p class="symi-entry-owner">Variant for this object — UniffiTriangle2d method: <code>UniffiTriangle2d.perimeter</code></p>

```kotlin signature
fun perimeter(): UniffiExpression
```

</details>


### centroid

<a id="entry-presentation_kotlin_api_polygon2d_centroid"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipolygon2d_centroid.3c2dcc510b8f"></a>
<p class="symi-entry-owner">UniffiPolygon2d method</p>

```kotlin signature
fun centroid(): UniffiPoint2d
```

<details class="symi-calling-forms">
<summary>Calling forms and variants</summary>

<a id="placement-placement.kotlin.kotlin_object.uniffitriangle2d_centroid.c4189053ca61"></a>
<p class="symi-entry-owner">Variant for this object — UniffiTriangle2d method: <code>UniffiTriangle2d.centroid</code></p>

```kotlin signature
fun centroid(): UniffiPoint2d
```

</details>


### interior_angles

<a id="entry-presentation_kotlin_api_polygon2d_interior_angles"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipolygon2d_interiorangles.a4fdbe9a7c2b"></a>
<p class="symi-entry-owner">UniffiPolygon2d method</p>

```kotlin signature
fun interiorAngles(): List<UniffiVertexAngle>
```

<details class="symi-calling-forms">
<summary>Calling forms and variants</summary>

<a id="placement-placement.kotlin.kotlin_object.uniffitriangle2d_interiorangles.066e3c86663e"></a>
<p class="symi-entry-owner">Variant for this object — UniffiTriangle2d method: <code>UniffiTriangle2d.interiorAngles</code></p>

```kotlin signature
fun interiorAngles(): List<UniffiVertexAngle>
```

</details>


Each vertex paired with its interior angle. **Notes:** WASM returns
`VertexAngle` objects with `vertex`/`angle` getters.

### vertex_angle (WASM result class)

### vertex

<a id="entry-presentation_kotlin_api_vertexangle_vertex"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffivertexangle_vertex.82cd075c3eb4"></a>
<p class="symi-entry-owner">UniffiVertexAngle method</p>

```kotlin signature
fun vertex(): UniffiPoint2d
```

The vertex the angle is measured at.

### angle

<a id="entry-presentation_kotlin_api_vertexangle_angle"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffivertexangle_angle.6d2308122bfc"></a>
<p class="symi-entry-owner">UniffiVertexAngle method</p>

```kotlin signature
fun angle(): UniffiExpression
```

The interior angle at the vertex.

## circle_2d methods

### center

<a id="entry-presentation_kotlin_api_circle2d_center"></a>
<a id="placement-placement.kotlin.kotlin_object.unifficircle2d_center.36bc0556f1b6"></a>
<p class="symi-entry-owner">UniffiCircle2d method</p>

```kotlin signature
fun center(): UniffiPoint2d
```

The center of the circle.

### radius

<a id="entry-presentation_kotlin_api_circle2d_radius"></a>
<a id="placement-placement.kotlin.kotlin_object.unifficircle2d_radius.99ad69762a14"></a>
<p class="symi-entry-owner">UniffiCircle2d method</p>

```kotlin signature
fun radius(): UniffiExpression
```

The radius of the circle.

### Circle2d.area

<a id="entry-presentation_kotlin_api_circle2d_area"></a>
<a id="placement-placement.kotlin.kotlin_object.unifficircle2d_area.37be5e2d8bfd"></a>
<p class="symi-entry-owner">UniffiCircle2d method</p>

```kotlin signature
fun area(): UniffiExpression
```


The exact disk area \(\pi r^2\), from the circle's symbolic radius. This is not
the polygon and triangle shoelace operation of [`area`](#area) above; the two
share a member name and nothing else.

### circumference

<a id="entry-presentation_kotlin_api_circle2d_circumference"></a>
<a id="placement-placement.kotlin.kotlin_object.unifficircle2d_circumference.af55a46b3517"></a>
<p class="symi-entry-owner">UniffiCircle2d method</p>

```kotlin signature
fun circumference(): UniffiExpression
```

Circumference of the circle.

### equation

<a id="entry-presentation_kotlin_api_circle2d_equation"></a>
<a id="placement-placement.kotlin.kotlin_object.unifficircle2d_equation.71d7667afef2"></a>
<p class="symi-entry-owner">UniffiCircle2d method</p>

```kotlin signature
fun equation(
    variableX: kotlin.String,
    variableY: kotlin.String,
): UniffiExpression
```


The circle as an `equal` relation in x and y.

## Exact boundary intersections

### intersection

<a id="entry-presentation_kotlin_api_point2d_intersection"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipoint2d_intersection.67912ec3ca53"></a>
<p class="symi-entry-owner">UniffiPoint2d method</p>

```kotlin signature
fun intersection(other: UniffiGeometry2d): List<UniffiGeometryIntersectionComponent>
```

<details class="symi-calling-forms">
<summary>Calling forms and variants</summary>

<a id="placement-placement.kotlin.kotlin_object.unifficircle2d_intersection.d1f53faccdae"></a>
<p class="symi-entry-owner">Variant for this object — UniffiCircle2d method: <code>UniffiCircle2d.intersection</code></p>

```kotlin signature
fun intersection(other: UniffiGeometry2d): List<UniffiGeometryIntersectionComponent>
```

<a id="placement-placement.kotlin.kotlin_object.uniffipolygon2d_intersection.e877564eccfb"></a>
<p class="symi-entry-owner">Variant for this object — UniffiPolygon2d method: <code>UniffiPolygon2d.intersection</code></p>

```kotlin signature
fun intersection(other: UniffiGeometry2d): List<UniffiGeometryIntersectionComponent>
```

<a id="placement-placement.kotlin.kotlin_object.uniffisegment2d_intersection.6b7a95762b9b"></a>
<p class="symi-entry-owner">Variant for this object — UniffiSegment2d method: <code>UniffiSegment2d.intersection</code></p>

```kotlin signature
fun intersection(other: UniffiGeometry2d): List<UniffiGeometryIntersectionComponent>
```

<a id="placement-placement.kotlin.kotlin_object.uniffitriangle2d_intersection.f53046f71468"></a>
<p class="symi-entry-owner">Variant for this object — UniffiTriangle2d method: <code>UniffiTriangle2d.intersection</code></p>

```kotlin signature
fun intersection(other: UniffiGeometry2d): List<UniffiGeometryIntersectionComponent>
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


## Additional API

### Circle2d

#### Circle2d.is_stale

<a id="entry-presentation_kotlin_api_circle2d_is_stale"></a>
<a id="placement-placement.kotlin.kotlin_object.unifficircle2d_isstale.89a59ebaf786"></a>
<p class="symi-entry-owner">UniffiCircle2d method</p>

```kotlin signature
fun isStale(): kotlin.Boolean
```

Reports whether resetting the owning context invalidated the expression. All other operations reject a stale receiver with an actionable error.

### Point2d

#### Point2d.is_stale

<a id="entry-presentation_kotlin_api_point2d_is_stale"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipoint2d_isstale.33041b7d87c5"></a>
<p class="symi-entry-owner">UniffiPoint2d method</p>

```kotlin signature
fun isStale(): kotlin.Boolean
```

Reports whether resetting the owning context invalidated the expression. All other operations reject a stale receiver with an actionable error.

### Polygon2d

#### Polygon2d.is_stale

<a id="entry-presentation_kotlin_api_polygon2d_is_stale"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipolygon2d_isstale.f068d2a02790"></a>
<p class="symi-entry-owner">UniffiPolygon2d method</p>

```kotlin signature
fun isStale(): kotlin.Boolean
```

Reports whether resetting the owning context invalidated the expression. All other operations reject a stale receiver with an actionable error.

### Segment2d

#### Segment2d.is_stale

<a id="entry-presentation_kotlin_api_segment2d_is_stale"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisegment2d_isstale.74cd984edbd9"></a>
<p class="symi-entry-owner">UniffiSegment2d method</p>

```kotlin signature
fun isStale(): kotlin.Boolean
```

Reports whether resetting the owning context invalidated the expression. All other operations reject a stale receiver with an actionable error.

### Triangle2d

#### Triangle2d.is_stale

<a id="entry-presentation_kotlin_api_triangle2d_is_stale"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffitriangle2d_isstale.1975032c3e21"></a>
<p class="symi-entry-owner">UniffiTriangle2d method</p>

```kotlin signature
fun isStale(): kotlin.Boolean
```

Reports whether resetting the owning context invalidated the expression. All other operations reject a stale receiver with an actionable error.

