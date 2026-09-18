# Geometry

Exact symbolic plane geometry. Coordinates, lengths, and angles are
`Expression` values.

## Constructors

Constructing a geometry class directly uses the shared default context.
The matching `Context` method constructs the object in an explicit context.

### point_2d

<a id="placement-placement.swift.swift_object.uniffisession_point2d.429601595489"></a>
`UniffiSession.point2d(coordinateX: UniffiExpression, coordinateY: UniffiExpression) -> UniffiPoint2d`




### segment_2d

<a id="placement-placement.swift.swift_object.uniffisession_segment2d.746a17d01409"></a>
`UniffiSession.segment2d(start: UniffiPoint2d, end: UniffiPoint2d) -> UniffiSegment2d`




### polygon_2d

<a id="placement-placement.swift.swift_object.uniffisession_polygon2d.1ac41d341131"></a>
`UniffiSession.polygon2d(vertices: [UniffiPoint2d]) -> UniffiPolygon2d`




Simple polygon from its vertex list in order; degenerate inputs raise.

### triangle_2d

<a id="placement-placement.swift.swift_object.uniffisession_triangle2d.12422bd9a32e"></a>
`UniffiSession.triangle2d(first: UniffiPoint2d, second: UniffiPoint2d, third: UniffiPoint2d) -> UniffiTriangle2d`




Collinear vertices raise.

### circle_2d

<a id="placement-placement.swift.swift_object.uniffisession_circle2d.7ad6661b3c5f"></a>
`UniffiSession.circle2d(center: UniffiPoint2d, radius: UniffiExpression) -> UniffiCircle2d`




## point_2d methods

### x

<a id="placement-placement.swift.swift_object.uniffipoint2d_x.e4b7e4083adf"></a>
`UniffiPoint2d.x() -> UniffiExpression`


### y

<a id="placement-placement.swift.swift_object.uniffipoint2d_y.4e32112a02e0"></a>
`UniffiPoint2d.y() -> UniffiExpression`


### coordinates

<a id="placement-placement.swift.swift_object.uniffipoint2d_coordinates.f5db58b8ad15"></a>
`UniffiPoint2d.coordinates() -> UniffiExpressionExpressionTuple`


### distance_to

<a id="placement-placement.swift.swift_object.uniffipoint2d_distanceto.6761c5ee2620"></a>
`UniffiPoint2d.distanceTo(other: UniffiPoint2d) -> UniffiExpression`


Euclidean distance, exact (a `sqrt` expression in general).

## segment_2d methods

### length

Also the finite-set length accessor on `Expression` in WASM; context
disambiguates.

### midpoint

<a id="placement-placement.swift.swift_object.uniffisegment2d_midpoint.f047888a4b6b"></a>
`UniffiSegment2d.midpoint() -> UniffiPoint2d`


### perpendicular_bisector_equation

<a id="placement-placement.swift.swift_object.uniffisegment2d_perpendicularbisectorequation.3df29bde8f4d"></a>
`UniffiSegment2d.perpendicularBisectorEquation(variableX: String, variableY: String) -> UniffiExpression`


The bisector line as an `equal` relation in x and y.

## polygon_2d and triangle_2d

### area

<a id="placement-placement.swift.swift_object.unifficircle2d_area.4db07d536230"></a>
`UniffiCircle2d.area() -> UniffiExpression`

<a id="placement-placement.swift.swift_object.uniffipolygon2d_area.032aa3c0b868"></a>
`UniffiPolygon2d.area() -> UniffiExpression`

<a id="placement-placement.swift.swift_object.uniffitriangle2d_area.cd5b24d6194a"></a>
`UniffiTriangle2d.area() -> UniffiExpression`


Shoelace area (also on `Circle2d`).

### perimeter

<a id="placement-placement.swift.swift_object.uniffipolygon2d_perimeter.58be7a3d3af3"></a>
`UniffiPolygon2d.perimeter() -> UniffiExpression`

<a id="placement-placement.swift.swift_object.uniffitriangle2d_perimeter.fdd4770c89cf"></a>
`UniffiTriangle2d.perimeter() -> UniffiExpression`


### centroid

<a id="placement-placement.swift.swift_object.uniffipolygon2d_centroid.32c4cf63dc46"></a>
`UniffiPolygon2d.centroid() -> UniffiPoint2d`

<a id="placement-placement.swift.swift_object.uniffitriangle2d_centroid.96b8698ac325"></a>
`UniffiTriangle2d.centroid() -> UniffiPoint2d`


### interior_angles

<a id="placement-placement.swift.swift_object.uniffipolygon2d_interiorangles.aa84c2fad989"></a>
`UniffiPolygon2d.interiorAngles() -> [UniffiVertexAngle]`

<a id="placement-placement.swift.swift_object.uniffitriangle2d_interiorangles.9b867172f544"></a>
`UniffiTriangle2d.interiorAngles() -> [UniffiVertexAngle]`


Each vertex paired with its interior angle. **Notes:** WASM returns
`VertexAngle` objects with `vertex`/`angle` getters.

### vertex_angle (WASM result class)

### vertex

<a id="placement-placement.swift.swift_object.uniffivertexangle_vertex.77d6f6c98bb9"></a>
`UniffiVertexAngle.vertex() -> UniffiPoint2d`


### angle

<a id="placement-placement.swift.swift_object.uniffivertexangle_angle.e1a0c8f03fdf"></a>
`UniffiVertexAngle.angle() -> UniffiExpression`


## circle_2d methods

### center

<a id="placement-placement.swift.swift_object.unifficircle2d_center.9333ca418819"></a>
`UniffiCircle2d.center() -> UniffiPoint2d`


### radius

<a id="placement-placement.swift.swift_object.unifficircle2d_radius.330a91d8d4dc"></a>
`UniffiCircle2d.radius() -> UniffiExpression`


### circumference

<a id="placement-placement.swift.swift_object.unifficircle2d_circumference.256d4f26d4a3"></a>
`UniffiCircle2d.circumference() -> UniffiExpression`


### equation

<a id="placement-placement.swift.swift_object.unifficircle2d_equation.a3c977955091"></a>
`UniffiCircle2d.equation(variableX: String, variableY: String) -> UniffiExpression`

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationproblem_equation.ec9c58168b92"></a>
`UniffiPartialDifferentialEquationProblem.equation() -> UniffiExpression`


The circle as an `equal` relation in x and y.

## Exact boundary intersections

### intersection

<a id="placement-placement.swift.swift_object.unifficircle2d_intersection.4e76d8e58778"></a>
`UniffiCircle2d.intersection(other: UniffiGeometry2d) -> [UniffiGeometryIntersectionComponent]`

<a id="placement-placement.swift.swift_object.uniffipoint2d_intersection.5db7c2c61e0b"></a>
`UniffiPoint2d.intersection(other: UniffiGeometry2d) -> [UniffiGeometryIntersectionComponent]`

<a id="placement-placement.swift.swift_object.uniffipolygon2d_intersection.6690e8cb9d3d"></a>
`UniffiPolygon2d.intersection(other: UniffiGeometry2d) -> [UniffiGeometryIntersectionComponent]`

<a id="placement-placement.swift.swift_object.uniffisegment2d_intersection.884f766e8f08"></a>
`UniffiSegment2d.intersection(other: UniffiGeometry2d) -> [UniffiGeometryIntersectionComponent]`

<a id="placement-placement.swift.swift_object.uniffitriangle2d_intersection.dc34220764fe"></a>
`UniffiTriangle2d.intersection(other: UniffiGeometry2d) -> [UniffiGeometryIntersectionComponent]`


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

