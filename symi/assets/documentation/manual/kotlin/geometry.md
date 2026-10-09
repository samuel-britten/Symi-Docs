# Geometry

Exact symbolic plane geometry. Coordinates, lengths, and angles are
`Expression` values.

## Constructors

Constructing a geometry class directly uses the shared default context.
The matching `Context` method constructs the object in an explicit context.

### point_2d

<a id="placement-placement.kotlin.kotlin_object.uniffisession_point2d.a95ff94a2da5"></a>
`UniffiSession.point2d(coordinateX: UniffiExpression, coordinateY: UniffiExpression): UniffiPoint2d`




### segment_2d

<a id="placement-placement.kotlin.kotlin_object.uniffisession_segment2d.a3a41b1eca42"></a>
`UniffiSession.segment2d(start: UniffiPoint2d, end: UniffiPoint2d): UniffiSegment2d`




### polygon_2d

<a id="placement-placement.kotlin.kotlin_object.uniffisession_polygon2d.eb38ed7a2ecc"></a>
`UniffiSession.polygon2d(vertices: List<UniffiPoint2d>): UniffiPolygon2d`




Simple polygon from its vertex list in order; degenerate inputs raise.

### triangle_2d

<a id="placement-placement.kotlin.kotlin_object.uniffisession_triangle2d.12f5289687f4"></a>
`UniffiSession.triangle2d(first: UniffiPoint2d, second: UniffiPoint2d, third: UniffiPoint2d): UniffiTriangle2d`




Collinear vertices raise.

### circle_2d

<a id="placement-placement.kotlin.kotlin_object.uniffisession_circle2d.d4cd9fc5fe03"></a>
`UniffiSession.circle2d(center: UniffiPoint2d, radius: UniffiExpression): UniffiCircle2d`




## point_2d methods

### x

<a id="placement-placement.kotlin.kotlin_object.uniffipoint2d_x.cd870d02e628"></a>
`UniffiPoint2d.x(): UniffiExpression`


### y

<a id="placement-placement.kotlin.kotlin_object.uniffipoint2d_y.8d94a5aafc04"></a>
`UniffiPoint2d.y(): UniffiExpression`


### coordinates

<a id="placement-placement.kotlin.kotlin_object.uniffipoint2d_coordinates.de2393382fa8"></a>
`UniffiPoint2d.coordinates(): UniffiExpressionExpressionTuple`


### distance_to

<a id="placement-placement.kotlin.kotlin_object.uniffipoint2d_distanceto.b73c3ca8a5bc"></a>
`UniffiPoint2d.distanceTo(other: UniffiPoint2d): UniffiExpression`


Euclidean distance, exact (a `sqrt` expression in general).

## segment_2d methods

### length

Also the finite-set length accessor on `Expression` in WASM; context
disambiguates.

### midpoint

<a id="placement-placement.kotlin.kotlin_object.uniffisegment2d_midpoint.0cbea9c460e5"></a>
`UniffiSegment2d.midpoint(): UniffiPoint2d`


### perpendicular_bisector_equation

<a id="placement-placement.kotlin.kotlin_object.uniffisegment2d_perpendicularbisectorequation.379a33df74eb"></a>
`UniffiSegment2d.perpendicularBisectorEquation(variableX: kotlin.String, variableY: kotlin.String): UniffiExpression`


The bisector line as an `equal` relation in x and y.

## polygon_2d and triangle_2d

### area

<a id="placement-placement.kotlin.kotlin_object.unifficircle2d_area.37be5e2d8bfd"></a>
`UniffiCircle2d.area(): UniffiExpression`

<a id="placement-placement.kotlin.kotlin_object.uniffipolygon2d_area.fe54e1c1c37d"></a>
`UniffiPolygon2d.area(): UniffiExpression`

<a id="placement-placement.kotlin.kotlin_object.uniffitriangle2d_area.3622dc419db1"></a>
`UniffiTriangle2d.area(): UniffiExpression`


Shoelace area (also on `Circle2d`).

### perimeter

<a id="placement-placement.kotlin.kotlin_object.uniffipolygon2d_perimeter.c1eed6a02784"></a>
`UniffiPolygon2d.perimeter(): UniffiExpression`

<a id="placement-placement.kotlin.kotlin_object.uniffitriangle2d_perimeter.e2dfc54b1a39"></a>
`UniffiTriangle2d.perimeter(): UniffiExpression`


### centroid

<a id="placement-placement.kotlin.kotlin_object.uniffipolygon2d_centroid.3c2dcc510b8f"></a>
`UniffiPolygon2d.centroid(): UniffiPoint2d`

<a id="placement-placement.kotlin.kotlin_object.uniffitriangle2d_centroid.c4189053ca61"></a>
`UniffiTriangle2d.centroid(): UniffiPoint2d`


### interior_angles

<a id="placement-placement.kotlin.kotlin_object.uniffipolygon2d_interiorangles.a4fdbe9a7c2b"></a>
`UniffiPolygon2d.interiorAngles(): List<UniffiVertexAngle>`

<a id="placement-placement.kotlin.kotlin_object.uniffitriangle2d_interiorangles.066e3c86663e"></a>
`UniffiTriangle2d.interiorAngles(): List<UniffiVertexAngle>`


Each vertex paired with its interior angle. **Notes:** WASM returns
`VertexAngle` objects with `vertex`/`angle` getters.

### vertex_angle (WASM result class)

### vertex

<a id="placement-placement.kotlin.kotlin_object.uniffivertexangle_vertex.82cd075c3eb4"></a>
`UniffiVertexAngle.vertex(): UniffiPoint2d`


### angle

<a id="placement-placement.kotlin.kotlin_object.uniffivertexangle_angle.6d2308122bfc"></a>
`UniffiVertexAngle.angle(): UniffiExpression`


## circle_2d methods

### center

<a id="placement-placement.kotlin.kotlin_object.unifficircle2d_center.36bc0556f1b6"></a>
`UniffiCircle2d.center(): UniffiPoint2d`


### radius

<a id="placement-placement.kotlin.kotlin_object.unifficircle2d_radius.99ad69762a14"></a>
`UniffiCircle2d.radius(): UniffiExpression`


### circumference

<a id="placement-placement.kotlin.kotlin_object.unifficircle2d_circumference.af55a46b3517"></a>
`UniffiCircle2d.circumference(): UniffiExpression`


### equation

<a id="placement-placement.kotlin.kotlin_object.unifficircle2d_equation.71d7667afef2"></a>
`UniffiCircle2d.equation(variableX: kotlin.String, variableY: kotlin.String): UniffiExpression`

<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationproblem_equation.1de24748e17f"></a>
`UniffiPartialDifferentialEquationProblem.equation(): UniffiExpression`


The circle as an `equal` relation in x and y.

## Exact boundary intersections

### intersection

<a id="placement-placement.kotlin.kotlin_object.unifficircle2d_intersection.d1f53faccdae"></a>
`UniffiCircle2d.intersection(other: UniffiGeometry2d): List<UniffiGeometryIntersectionComponent>`

<a id="placement-placement.kotlin.kotlin_object.uniffipoint2d_intersection.67912ec3ca53"></a>
`UniffiPoint2d.intersection(other: UniffiGeometry2d): List<UniffiGeometryIntersectionComponent>`

<a id="placement-placement.kotlin.kotlin_object.uniffipolygon2d_intersection.e877564eccfb"></a>
`UniffiPolygon2d.intersection(other: UniffiGeometry2d): List<UniffiGeometryIntersectionComponent>`

<a id="placement-placement.kotlin.kotlin_object.uniffisegment2d_intersection.6b7a95762b9b"></a>
`UniffiSegment2d.intersection(other: UniffiGeometry2d): List<UniffiGeometryIntersectionComponent>`

<a id="placement-placement.kotlin.kotlin_object.uniffitriangle2d_intersection.f53046f71468"></a>
`UniffiTriangle2d.intersection(other: UniffiGeometry2d): List<UniffiGeometryIntersectionComponent>`


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

