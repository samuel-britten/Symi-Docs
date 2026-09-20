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

<a id="entry-presentation_wasm_api_point2d_x"></a>
<a id="placement-placement.wasm.wasm_class.point2d_x.c0a31a0b13c6"></a>
<p class="symi-entry-owner">Raw WebAssembly: Point2d property</p>

```typescript signature
readonly x: Expression
```

The x coordinate of the point.

### y

<a id="entry-presentation_wasm_api_point2d_y"></a>
<a id="placement-placement.wasm.wasm_class.point2d_y.09cc1987c90a"></a>
<p class="symi-entry-owner">Raw WebAssembly: Point2d property</p>

```typescript signature
readonly y: Expression
```

The y coordinate of the point.

### coordinates

<a id="entry-presentation_wasm_api_point2d_coordinates"></a>
<a id="placement-placement.wasm.wasm_class.point2d_coordinates.16f05ca0798a"></a>
<p class="symi-entry-owner">Raw WebAssembly: Point2d method</p>

```typescript signature
coordinates(): Expression[]
```

The `(x, y)` coordinate pair of the point.

### distance_to

*Not exposed by the WASM / JavaScript bindings. Available as [`Point2d.distance_to`](/symi/python/geometry#distance_to) in Python, [`UniffiPoint2d.distanceTo`](/symi/kotlin/geometry#distance_to) in Kotlin, [`UniffiPoint2d.distanceTo`](/symi/swift/geometry#distance_to) in Swift, [`api::Point2d::distance_to`](/symi/rust/geometry#distance_to) in Rust.*


Euclidean distance, exact (a `sqrt` expression in general).

## segment_2d methods

### length

Also the finite-set length accessor on `Expression` in WASM; context
disambiguates.

<a id="entry-presentation_wasm_api_segment2d_length"></a>
<a id="placement-placement.wasm.wasm_class.segment2d_length.b45e4ea3f5e4"></a>
<p class="symi-entry-owner">Raw WebAssembly: Segment2d method</p>

```typescript signature
length(): Expression
```

Length of the segment.

### midpoint

<a id="entry-presentation_wasm_api_segment2d_midpoint"></a>
<a id="placement-placement.wasm.wasm_class.segment2d_midpoint.62abdcfc22e3"></a>
<p class="symi-entry-owner">Raw WebAssembly: Segment2d method</p>

```typescript signature
midpoint(): Point2d
```

Midpoint of the segment.

### perpendicular_bisector_equation

*Not exposed by the WASM / JavaScript bindings. Available as [`Segment2d.perpendicular_bisector_equation`](/symi/python/geometry#perpendicular_bisector_equation) in Python, [`UniffiSegment2d.perpendicularBisectorEquation`](/symi/kotlin/geometry#perpendicular_bisector_equation) in Kotlin, [`UniffiSegment2d.perpendicularBisectorEquation`](/symi/swift/geometry#perpendicular_bisector_equation) in Swift, [`api::geometry_operations::Segment2d::perpendicular_bisector_equation`](/symi/rust/geometry#perpendicular_bisector_equation) in Rust.*


The bisector line as an `equal` relation in x and y.

## polygon_2d and triangle_2d

### area

<a id="entry-presentation_wasm_api_polygon2d_area"></a>
<a id="placement-placement.wasm.wasm_class.polygon2d_area.7c6f2cf22633"></a>
<p class="symi-entry-owner">Raw WebAssembly: Polygon2d method</p>

```typescript signature
area(): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms and variants</summary>

<a id="placement-placement.wasm.wasm_class.triangle2d_area.33cc19cca2b3"></a>
<p class="symi-entry-owner">Variant for this object — Raw WebAssembly: Triangle2d method: <code>Triangle2d.area</code></p>

```typescript signature
area(): Expression
```

</details>


For a `Polygon2d` or `Triangle2d`, this is the unsigned shoelace area of the
ordered boundary, so a polygon's orientation does not change its area. A
circle's area is a different formula under a different owner; see
[`Circle2d.area`](#circle2d_area).

### perimeter

<a id="entry-presentation_wasm_api_polygon2d_perimeter"></a>
<a id="placement-placement.wasm.wasm_class.polygon2d_perimeter.a5ef1f895818"></a>
<p class="symi-entry-owner">Raw WebAssembly: Polygon2d method</p>

```typescript signature
perimeter(): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms and variants</summary>

<a id="placement-placement.wasm.wasm_class.triangle2d_perimeter.227221b7c2c3"></a>
<p class="symi-entry-owner">Variant for this object — Raw WebAssembly: Triangle2d method: <code>Triangle2d.perimeter</code></p>

```typescript signature
perimeter(): Expression
```

</details>


### centroid

<a id="entry-presentation_wasm_api_polygon2d_centroid"></a>
<a id="placement-placement.wasm.wasm_class.polygon2d_centroid.5adb349efb75"></a>
<p class="symi-entry-owner">Raw WebAssembly: Polygon2d method</p>

```typescript signature
centroid(): Point2d
```

<details class="symi-calling-forms">
<summary>Calling forms and variants</summary>

<a id="placement-placement.wasm.wasm_class.triangle2d_centroid.7503e63742f6"></a>
<p class="symi-entry-owner">Variant for this object — Raw WebAssembly: Triangle2d method: <code>Triangle2d.centroid</code></p>

```typescript signature
centroid(): Point2d
```

</details>


### interior_angles

<a id="entry-presentation_wasm_api_polygon2d_interior_angles"></a>
<a id="placement-placement.wasm.wasm_class.polygon2d_interiorangles.d871d0f39590"></a>
<p class="symi-entry-owner">Raw WebAssembly: Polygon2d method</p>

```typescript signature
interiorAngles(): VertexAngle[]
```

<details class="symi-calling-forms">
<summary>Calling forms and variants</summary>

<a id="placement-placement.wasm.wasm_class.triangle2d_interiorangles.4cd4d0d93fa8"></a>
<p class="symi-entry-owner">Variant for this object — Raw WebAssembly: Triangle2d method: <code>Triangle2d.interiorAngles</code></p>

```typescript signature
interiorAngles(): VertexAngle[]
```

</details>


Each vertex paired with its interior angle. **Notes:** WASM returns
`VertexAngle` objects with `vertex`/`angle` getters.

### vertex_angle (WASM result class)

### vertex

<a id="entry-presentation_wasm_api_vertexangle_vertex"></a>
<a id="placement-placement.wasm.wasm_class.vertexangle_vertex.bbfbe7953588"></a>
<p class="symi-entry-owner">Raw WebAssembly: VertexAngle property</p>

```typescript signature
readonly vertex: Point2d
```

The vertex the angle is measured at.

### angle

<a id="entry-presentation_wasm_api_vertexangle_angle"></a>
<a id="placement-placement.wasm.wasm_class.vertexangle_angle.987977655236"></a>
<p class="symi-entry-owner">Raw WebAssembly: VertexAngle property</p>

```typescript signature
readonly angle: Expression
```

The interior angle at the vertex.

## circle_2d methods

### center

<a id="entry-presentation_wasm_api_circle2d_center"></a>
<a id="placement-placement.wasm.wasm_class.circle2d_center.0e20868fec4f"></a>
<p class="symi-entry-owner">Raw WebAssembly: Circle2d property</p>

```typescript signature
readonly center: Point2d
```

The center of the circle.

### radius

<a id="entry-presentation_wasm_api_circle2d_radius"></a>
<a id="placement-placement.wasm.wasm_class.circle2d_radius.fa13be61ae3c"></a>
<p class="symi-entry-owner">Raw WebAssembly: Circle2d property</p>

```typescript signature
readonly radius: Expression
```

The radius of the circle.

### Circle2d.area

<a id="entry-presentation_wasm_api_circle2d_area"></a>
<a id="placement-placement.wasm.wasm_class.circle2d_area.743b71e37a1b"></a>
<p class="symi-entry-owner">Raw WebAssembly: Circle2d method</p>

```typescript signature
area(): Expression
```


The exact disk area \(\pi r^2\), from the circle's symbolic radius. This is not
the polygon and triangle shoelace operation of [`area`](#area) above; the two
share a member name and nothing else.

### circumference

<a id="entry-presentation_wasm_api_circle2d_circumference"></a>
<a id="placement-placement.wasm.wasm_class.circle2d_circumference.6d0e340e969d"></a>
<p class="symi-entry-owner">Raw WebAssembly: Circle2d method</p>

```typescript signature
circumference(): Expression
```

Circumference of the circle.

### equation

<a id="entry-presentation_wasm_api_circle2d_equation"></a>
<a id="placement-placement.wasm.wasm_class.circle2d_equation.f2d8bb126725"></a>
<p class="symi-entry-owner">Raw WebAssembly: Circle2d method</p>

```typescript signature
equation(variable_x: string, variable_y: string): Expression
```


The circle as an `equal` relation in x and y.

## Exact boundary intersections

### intersection

<a id="entry-presentation_wasm_api_point2d_intersection"></a>
<a id="placement-placement.wasm.wasm_class.point2d_intersection.031a02927b5c"></a>
<p class="symi-entry-owner">Raw WebAssembly: Point2d method</p>

```typescript signature
intersection(other: any): any[]
```

<details class="symi-calling-forms">
<summary>Calling forms and variants</summary>

<a id="placement-placement.wasm.wasm_class.circle2d_intersection.a7bed6c77edd"></a>
<p class="symi-entry-owner">Variant for this object — Raw WebAssembly: Circle2d method: <code>Circle2d.intersection</code></p>

```typescript signature
intersection(other: any): any[]
```

<a id="placement-placement.wasm.wasm_class.polygon2d_intersection.5d3e8cf15ec1"></a>
<p class="symi-entry-owner">Variant for this object — Raw WebAssembly: Polygon2d method: <code>Polygon2d.intersection</code></p>

```typescript signature
intersection(other: any): any[]
```

<a id="placement-placement.wasm.wasm_class.segment2d_intersection.f98c7d6bf866"></a>
<p class="symi-entry-owner">Variant for this object — Raw WebAssembly: Segment2d method: <code>Segment2d.intersection</code></p>

```typescript signature
intersection(other: any): any[]
```

<a id="placement-placement.wasm.wasm_class.triangle2d_intersection.bbb401de2277"></a>
<p class="symi-entry-owner">Variant for this object — Raw WebAssembly: Triangle2d method: <code>Triangle2d.intersection</code></p>

```typescript signature
intersection(other: any): any[]
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

This family is not part of the recommended JavaScript facade in this release. Call it through the generated `symi.raw` layer, whose entries are listed with their wasm-bindgen signatures above, and read [Migration](migration.md) for the ownership rules that apply there.


## Additional API

### circle2d

<a id="entry-presentation_wasm_api_session_circle_2d"></a>
<a id="placement-placement.wasm.wasm_class.context_circle2d.b6b5bff08685"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context</p>

```typescript signature
circle2d(center: Point2d, radius: Expression): Circle2d
```

Construct the circle with the given center and radius.

### point2d

<a id="entry-presentation_wasm_api_session_point_2d"></a>
<a id="placement-placement.wasm.wasm_class.context_point2d.7290572ebc0b"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context</p>

```typescript signature
point2d(x: Expression, y: Expression): Point2d
```

Construct the point `(x, y)`.

### polygon2d

<a id="entry-presentation_wasm_api_session_polygon_2d"></a>
<a id="placement-placement.wasm.wasm_class.context_polygon2d.7769a1368f42"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context</p>

```typescript signature
polygon2d(vertices: Point2d[]): Polygon2d
```

Simple polygon from its vertex list in order; degenerate inputs raise.

### segment2d

<a id="entry-presentation_wasm_api_session_segment_2d"></a>
<a id="placement-placement.wasm.wasm_class.context_segment2d.bdd743314ff7"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context</p>

```typescript signature
segment2d(start: Point2d, end: Point2d): Segment2d
```

Construct the segment running from `start` to `end`.

### triangle2d

<a id="entry-presentation_wasm_api_session_triangle_2d"></a>
<a id="placement-placement.wasm.wasm_class.context_triangle2d.c3cf16ee529a"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context</p>

```typescript signature
triangle2d(
    point_a: Point2d,
    point_b: Point2d,
    point_c: Point2d,
): Triangle2d
```

Collinear vertices raise.

### Circle2d

<a id="entry-presentation_wasm_api_circle2d"></a>
<a id="placement-placement.wasm.wasm_class.circle2d.b811b7e71dd1"></a>
<p class="symi-entry-owner">Raw WebAssembly: Circle2d constructor</p>

```typescript signature
new Circle2d(center: Point2d, radius: Expression)
```

Construct the circle with the given center and radius.

#### Circle2d.toString

<a id="entry-presentation_wasm_host_wasm_circle2d_tostring"></a>
<a id="placement-placement.wasm.wasm_class.circle2d_tostring.fc0197c0b351"></a>
<p class="symi-entry-owner">Raw WebAssembly: Circle2d method</p>

```typescript signature
toString(): string
```

The mathematical text of this object, as a JavaScript string.

### Point2d

<a id="entry-presentation_wasm_api_point2d"></a>
<a id="placement-placement.wasm.wasm_class.point2d.dca54a617fe2"></a>
<p class="symi-entry-owner">Raw WebAssembly: Point2d constructor</p>

```typescript signature
new Point2d(x: Expression, y: Expression)
```

Construct the point `(x, y)`.

#### Point2d.distanceTo

<a id="entry-presentation_wasm_api_point2d_distance_to"></a>
<a id="placement-placement.wasm.wasm_class.point2d_distanceto.7fec84f47201"></a>
<p class="symi-entry-owner">Raw WebAssembly: Point2d method</p>

```typescript signature
distanceTo(other: Point2d): Expression
```

Euclidean distance, exact (a `sqrt` expression in general).

#### Point2d.toString

<a id="entry-presentation_wasm_host_wasm_point2d_tostring"></a>
<a id="placement-placement.wasm.wasm_class.point2d_tostring.dcea6d65a5d8"></a>
<p class="symi-entry-owner">Raw WebAssembly: Point2d method</p>

```typescript signature
toString(): string
```

The mathematical text of this object, as a JavaScript string.

### Polygon2d

<a id="entry-presentation_wasm_api_polygon2d"></a>
<a id="placement-placement.wasm.wasm_class.polygon2d.4810488732bd"></a>
<p class="symi-entry-owner">Raw WebAssembly: Polygon2d constructor</p>

```typescript signature
new Polygon2d(vertices: Point2d[])
```

Construct the polygon with the given vertices, in order.

#### Polygon2d.toString

<a id="entry-presentation_wasm_host_wasm_polygon2d_tostring"></a>
<a id="placement-placement.wasm.wasm_class.polygon2d_tostring.1f9c721c2fbb"></a>
<p class="symi-entry-owner">Raw WebAssembly: Polygon2d method</p>

```typescript signature
toString(): string
```

The mathematical text of this object, as a JavaScript string.

### Segment2d

<a id="entry-presentation_wasm_api_segment2d"></a>
<a id="placement-placement.wasm.wasm_class.segment2d.119b443ccd78"></a>
<p class="symi-entry-owner">Raw WebAssembly: Segment2d constructor</p>

```typescript signature
new Segment2d(start: Point2d, end: Point2d)
```

Construct the segment running from `start` to `end`.

#### Segment2d.perpendicularBisectorEquation

<a id="entry-presentation_wasm_api_segment2d_perpendicular_bisector_equation"></a>
<a id="placement-placement.wasm.wasm_class.segment2d_perpendicularbisectorequation.d8f930147b9c"></a>
<p class="symi-entry-owner">Raw WebAssembly: Segment2d method</p>

```typescript signature
perpendicularBisectorEquation(
    variable_x: string,
    variable_y: string,
): Expression
```

The bisector line as an `equal` relation in x and y.

#### Segment2d.toString

<a id="entry-presentation_wasm_host_wasm_segment2d_tostring"></a>
<a id="placement-placement.wasm.wasm_class.segment2d_tostring.e994a8c59a1e"></a>
<p class="symi-entry-owner">Raw WebAssembly: Segment2d method</p>

```typescript signature
toString(): string
```

The mathematical text of this object, as a JavaScript string.

### Triangle2d

<a id="entry-presentation_wasm_api_triangle2d"></a>
<a id="placement-placement.wasm.wasm_class.triangle2d.73179d4e894b"></a>
<p class="symi-entry-owner">Raw WebAssembly: Triangle2d constructor</p>

```typescript signature
new Triangle2d(point_a: Point2d, point_b: Point2d, point_c: Point2d)
```

Construct the triangle with the given vertices.

#### Triangle2d.toString

<a id="entry-presentation_wasm_host_wasm_triangle2d_tostring"></a>
<a id="placement-placement.wasm.wasm_class.triangle2d_tostring.63289bc04e2d"></a>
<p class="symi-entry-owner">Raw WebAssembly: Triangle2d method</p>

```typescript signature
toString(): string
```

The mathematical text of this object, as a JavaScript string.

