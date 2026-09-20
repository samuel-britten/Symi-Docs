# Geometry

Exact symbolic plane geometry. Coordinates, lengths, and angles are
`Expression` values.

## Constructors

Constructing a geometry class directly uses the shared default context.
The matching `Context` method constructs the object in an explicit context.

### point_2d

<a id="entry-presentation_swift_api_session_point_2d"></a>
<a id="placement-placement.swift.swift_object.uniffisession_point2d.429601595489"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func point2d(
    coordinateX: UniffiExpression,
    coordinateY: UniffiExpression,
) -> UniffiPoint2d
```




### segment_2d

<a id="entry-presentation_swift_api_session_segment_2d"></a>
<a id="placement-placement.swift.swift_object.uniffisession_segment2d.746a17d01409"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func segment2d(
    start: UniffiPoint2d,
    end: UniffiPoint2d,
) -> UniffiSegment2d
```




### polygon_2d

<a id="entry-presentation_swift_api_session_polygon_2d"></a>
<a id="placement-placement.swift.swift_object.uniffisession_polygon2d.1ac41d341131"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func polygon2d(vertices: [UniffiPoint2d]) -> UniffiPolygon2d
```




Simple polygon from its vertex list in order; degenerate inputs raise.

### triangle_2d

<a id="entry-presentation_swift_api_session_triangle_2d"></a>
<a id="placement-placement.swift.swift_object.uniffisession_triangle2d.12422bd9a32e"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func triangle2d(
    first: UniffiPoint2d,
    second: UniffiPoint2d,
    third: UniffiPoint2d,
) -> UniffiTriangle2d
```




Collinear vertices raise.

### circle_2d

<a id="entry-presentation_swift_api_session_circle_2d"></a>
<a id="placement-placement.swift.swift_object.uniffisession_circle2d.7ad6661b3c5f"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func circle2d(
    center: UniffiPoint2d,
    radius: UniffiExpression,
) -> UniffiCircle2d
```




## point_2d methods

### x

<a id="entry-presentation_swift_api_point2d_x"></a>
<a id="placement-placement.swift.swift_object.uniffipoint2d_x.e4b7e4083adf"></a>
<p class="symi-entry-owner">UniffiPoint2d method</p>

```swift signature
func x() -> UniffiExpression
```

The x coordinate of the point.

### y

<a id="entry-presentation_swift_api_point2d_y"></a>
<a id="placement-placement.swift.swift_object.uniffipoint2d_y.4e32112a02e0"></a>
<p class="symi-entry-owner">UniffiPoint2d method</p>

```swift signature
func y() -> UniffiExpression
```

The y coordinate of the point.

### coordinates

<a id="entry-presentation_swift_api_point2d_coordinates"></a>
<a id="placement-placement.swift.swift_object.uniffipoint2d_coordinates.f5db58b8ad15"></a>
<p class="symi-entry-owner">UniffiPoint2d method</p>

```swift signature
func coordinates() -> UniffiExpressionExpressionTuple
```

The `(x, y)` coordinate pair of the point.

### distance_to

Euclidean distance, exact (a `sqrt` expression in general).

<a id="entry-presentation_swift_api_point2d_distance_to"></a>
<a id="placement-placement.swift.swift_object.uniffipoint2d_distanceto.6761c5ee2620"></a>
<p class="symi-entry-owner">UniffiPoint2d method</p>

```swift signature
func distanceTo(other: UniffiPoint2d) -> UniffiExpression
```

Euclidean distance, exact (a `sqrt` expression in general).

## segment_2d methods

### length

Also the finite-set length accessor on `Expression` in WASM; context
disambiguates.

<a id="entry-presentation_swift_api_segment2d_length"></a>
<a id="placement-placement.swift.swift_object.uniffisegment2d_length.e4c6f33fcd4d"></a>
<p class="symi-entry-owner">UniffiSegment2d method</p>

```swift signature
func length() -> UniffiExpression
```

Also the finite-set length accessor on `expression` in WASM; context disambiguates.

### midpoint

<a id="entry-presentation_swift_api_segment2d_midpoint"></a>
<a id="placement-placement.swift.swift_object.uniffisegment2d_midpoint.f047888a4b6b"></a>
<p class="symi-entry-owner">UniffiSegment2d method</p>

```swift signature
func midpoint() -> UniffiPoint2d
```

Midpoint of the segment.

### perpendicular_bisector_equation

The bisector line as an `equal` relation in x and y.

<a id="entry-presentation_swift_api_segment2d_perpendicular_bisector_equation"></a>
<a id="placement-placement.swift.swift_object.uniffisegment2d_perpendicularbisectorequation.3df29bde8f4d"></a>
<p class="symi-entry-owner">UniffiSegment2d method</p>

```swift signature
func perpendicularBisectorEquation(
    variableX: String,
    variableY: String,
) -> UniffiExpression
```

The bisector line as an `equal` relation in x and y.

## polygon_2d and triangle_2d

### area

<a id="entry-presentation_swift_api_polygon2d_area"></a>
<a id="placement-placement.swift.swift_object.uniffipolygon2d_area.032aa3c0b868"></a>
<p class="symi-entry-owner">UniffiPolygon2d method</p>

```swift signature
func area() -> UniffiExpression
```

<details class="symi-calling-forms">
<summary>Calling forms and variants</summary>

<a id="placement-placement.swift.swift_object.uniffitriangle2d_area.cd5b24d6194a"></a>
<p class="symi-entry-owner">Variant for this object — UniffiTriangle2d method: <code>UniffiTriangle2d.area</code></p>

```swift signature
func area() -> UniffiExpression
```

</details>


For a `Polygon2d` or `Triangle2d`, this is the unsigned shoelace area of the
ordered boundary, so a polygon's orientation does not change its area. A
circle's area is a different formula under a different owner; see
[`Circle2d.area`](#circle2d_area).

### perimeter

<a id="entry-presentation_swift_api_polygon2d_perimeter"></a>
<a id="placement-placement.swift.swift_object.uniffipolygon2d_perimeter.58be7a3d3af3"></a>
<p class="symi-entry-owner">UniffiPolygon2d method</p>

```swift signature
func perimeter() -> UniffiExpression
```

<details class="symi-calling-forms">
<summary>Calling forms and variants</summary>

<a id="placement-placement.swift.swift_object.uniffitriangle2d_perimeter.fdd4770c89cf"></a>
<p class="symi-entry-owner">Variant for this object — UniffiTriangle2d method: <code>UniffiTriangle2d.perimeter</code></p>

```swift signature
func perimeter() -> UniffiExpression
```

</details>


### centroid

<a id="entry-presentation_swift_api_polygon2d_centroid"></a>
<a id="placement-placement.swift.swift_object.uniffipolygon2d_centroid.32c4cf63dc46"></a>
<p class="symi-entry-owner">UniffiPolygon2d method</p>

```swift signature
func centroid() -> UniffiPoint2d
```

<details class="symi-calling-forms">
<summary>Calling forms and variants</summary>

<a id="placement-placement.swift.swift_object.uniffitriangle2d_centroid.96b8698ac325"></a>
<p class="symi-entry-owner">Variant for this object — UniffiTriangle2d method: <code>UniffiTriangle2d.centroid</code></p>

```swift signature
func centroid() -> UniffiPoint2d
```

</details>


### interior_angles

<a id="entry-presentation_swift_api_polygon2d_interior_angles"></a>
<a id="placement-placement.swift.swift_object.uniffipolygon2d_interiorangles.aa84c2fad989"></a>
<p class="symi-entry-owner">UniffiPolygon2d method</p>

```swift signature
func interiorAngles() -> [UniffiVertexAngle]
```

<details class="symi-calling-forms">
<summary>Calling forms and variants</summary>

<a id="placement-placement.swift.swift_object.uniffitriangle2d_interiorangles.9b867172f544"></a>
<p class="symi-entry-owner">Variant for this object — UniffiTriangle2d method: <code>UniffiTriangle2d.interiorAngles</code></p>

```swift signature
func interiorAngles() -> [UniffiVertexAngle]
```

</details>


Each vertex paired with its interior angle. **Notes:** WASM returns
`VertexAngle` objects with `vertex`/`angle` getters.

### vertex_angle (WASM result class)

### vertex

<a id="entry-presentation_swift_api_vertexangle_vertex"></a>
<a id="placement-placement.swift.swift_object.uniffivertexangle_vertex.77d6f6c98bb9"></a>
<p class="symi-entry-owner">UniffiVertexAngle method</p>

```swift signature
func vertex() -> UniffiPoint2d
```

The vertex the angle is measured at.

### angle

<a id="entry-presentation_swift_api_vertexangle_angle"></a>
<a id="placement-placement.swift.swift_object.uniffivertexangle_angle.e1a0c8f03fdf"></a>
<p class="symi-entry-owner">UniffiVertexAngle method</p>

```swift signature
func angle() -> UniffiExpression
```

The interior angle at the vertex.

## circle_2d methods

### center

<a id="entry-presentation_swift_api_circle2d_center"></a>
<a id="placement-placement.swift.swift_object.unifficircle2d_center.9333ca418819"></a>
<p class="symi-entry-owner">UniffiCircle2d method</p>

```swift signature
func center() -> UniffiPoint2d
```

The center of the circle.

### radius

<a id="entry-presentation_swift_api_circle2d_radius"></a>
<a id="placement-placement.swift.swift_object.unifficircle2d_radius.330a91d8d4dc"></a>
<p class="symi-entry-owner">UniffiCircle2d method</p>

```swift signature
func radius() -> UniffiExpression
```

The radius of the circle.

### Circle2d.area

<a id="entry-presentation_swift_api_circle2d_area"></a>
<a id="placement-placement.swift.swift_object.unifficircle2d_area.4db07d536230"></a>
<p class="symi-entry-owner">UniffiCircle2d method</p>

```swift signature
func area() -> UniffiExpression
```


The exact disk area \(\pi r^2\), from the circle's symbolic radius. This is not
the polygon and triangle shoelace operation of [`area`](#area) above; the two
share a member name and nothing else.

### circumference

<a id="entry-presentation_swift_api_circle2d_circumference"></a>
<a id="placement-placement.swift.swift_object.unifficircle2d_circumference.256d4f26d4a3"></a>
<p class="symi-entry-owner">UniffiCircle2d method</p>

```swift signature
func circumference() -> UniffiExpression
```

Circumference of the circle.

### equation

<a id="entry-presentation_swift_api_circle2d_equation"></a>
<a id="placement-placement.swift.swift_object.unifficircle2d_equation.a3c977955091"></a>
<p class="symi-entry-owner">UniffiCircle2d method</p>

```swift signature
func equation(variableX: String, variableY: String) -> UniffiExpression
```


The circle as an `equal` relation in x and y.

## Exact boundary intersections

### intersection

<a id="entry-presentation_swift_api_point2d_intersection"></a>
<a id="placement-placement.swift.swift_object.uniffipoint2d_intersection.5db7c2c61e0b"></a>
<p class="symi-entry-owner">UniffiPoint2d method</p>

```swift signature
func intersection(other: UniffiGeometry2d) -> [UniffiGeometryIntersectionComponent]
```

<details class="symi-calling-forms">
<summary>Calling forms and variants</summary>

<a id="placement-placement.swift.swift_object.unifficircle2d_intersection.4e76d8e58778"></a>
<p class="symi-entry-owner">Variant for this object — UniffiCircle2d method: <code>UniffiCircle2d.intersection</code></p>

```swift signature
func intersection(other: UniffiGeometry2d) -> [UniffiGeometryIntersectionComponent]
```

<a id="placement-placement.swift.swift_object.uniffipolygon2d_intersection.6690e8cb9d3d"></a>
<p class="symi-entry-owner">Variant for this object — UniffiPolygon2d method: <code>UniffiPolygon2d.intersection</code></p>

```swift signature
func intersection(other: UniffiGeometry2d) -> [UniffiGeometryIntersectionComponent]
```

<a id="placement-placement.swift.swift_object.uniffisegment2d_intersection.884f766e8f08"></a>
<p class="symi-entry-owner">Variant for this object — UniffiSegment2d method: <code>UniffiSegment2d.intersection</code></p>

```swift signature
func intersection(other: UniffiGeometry2d) -> [UniffiGeometryIntersectionComponent]
```

<a id="placement-placement.swift.swift_object.uniffitriangle2d_intersection.dc34220764fe"></a>
<p class="symi-entry-owner">Variant for this object — UniffiTriangle2d method: <code>UniffiTriangle2d.intersection</code></p>

```swift signature
func intersection(other: UniffiGeometry2d) -> [UniffiGeometryIntersectionComponent]
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

<a id="entry-presentation_swift_api_circle2d_is_stale"></a>
<a id="placement-placement.swift.swift_object.unifficircle2d_isstale.197cf4ee1773"></a>
<p class="symi-entry-owner">UniffiCircle2d method</p>

```swift signature
func isStale() -> Bool
```

Reports whether resetting the owning context invalidated the expression. All other operations reject a stale receiver with an actionable error.

### Point2d

#### Point2d.is_stale

<a id="entry-presentation_swift_api_point2d_is_stale"></a>
<a id="placement-placement.swift.swift_object.uniffipoint2d_isstale.6204e470b4d1"></a>
<p class="symi-entry-owner">UniffiPoint2d method</p>

```swift signature
func isStale() -> Bool
```

Reports whether resetting the owning context invalidated the expression. All other operations reject a stale receiver with an actionable error.

### Polygon2d

#### Polygon2d.is_stale

<a id="entry-presentation_swift_api_polygon2d_is_stale"></a>
<a id="placement-placement.swift.swift_object.uniffipolygon2d_isstale.3e170f2b6a4b"></a>
<p class="symi-entry-owner">UniffiPolygon2d method</p>

```swift signature
func isStale() -> Bool
```

Reports whether resetting the owning context invalidated the expression. All other operations reject a stale receiver with an actionable error.

### Segment2d

#### Segment2d.is_stale

<a id="entry-presentation_swift_api_segment2d_is_stale"></a>
<a id="placement-placement.swift.swift_object.uniffisegment2d_isstale.aa90766378bc"></a>
<p class="symi-entry-owner">UniffiSegment2d method</p>

```swift signature
func isStale() -> Bool
```

Reports whether resetting the owning context invalidated the expression. All other operations reject a stale receiver with an actionable error.

### Triangle2d

#### Triangle2d.is_stale

<a id="entry-presentation_swift_api_triangle2d_is_stale"></a>
<a id="placement-placement.swift.swift_object.uniffitriangle2d_isstale.c0b0c4615df5"></a>
<p class="symi-entry-owner">UniffiTriangle2d method</p>

```swift signature
func isStale() -> Bool
```

Reports whether resetting the owning context invalidated the expression. All other operations reject a stale receiver with an actionable error.

