# Relations and predicates

Relations construct symbolic formulas. They are distinct from host-language truth queries.

## Relations

Relation nodes are used as equations for `solve`/`solveset`, as piecewise
conditions, and as boolean-valued results.

### equal

<a id="placement-placement.swift.swift_object.uniffisession_equal.7d4350b67c9e"></a>
`UniffiSession.equal(left: UniffiExpression, right: UniffiExpression) -> UniffiExpression`


### not_equal

<a id="placement-placement.swift.swift_object.uniffisession_notequal.44068533f7a7"></a>
`UniffiSession.notEqual(left: UniffiExpression, right: UniffiExpression) -> UniffiExpression`


### less_than

<a id="placement-placement.swift.swift_object.uniffiexpression_lessthan.7403803b9676"></a>
`UniffiExpression.lessThan(other: UniffiExpression) -> UniffiExpression`

<a id="placement-placement.swift.swift_object.uniffisession_lessthan.329be8dc7f24"></a>
`UniffiSession.lessThan(left: UniffiExpression, right: UniffiExpression) -> UniffiExpression`


### less_than_or_equal

<a id="placement-placement.swift.swift_object.uniffisession_lessthanorequal.8fe9c0e0ca4b"></a>
`UniffiSession.lessThanOrEqual(left: UniffiExpression, right: UniffiExpression) -> UniffiExpression`


### greater_than

<a id="placement-placement.swift.swift_object.uniffisession_greaterthan.ab85fc7a461b"></a>
`UniffiSession.greaterThan(left: UniffiExpression, right: UniffiExpression) -> UniffiExpression`


### greater_than_or_equal

<a id="placement-placement.swift.swift_object.uniffisession_greaterthanorequal.1905a29db601"></a>
`UniffiSession.greaterThanOrEqual(left: UniffiExpression, right: UniffiExpression) -> UniffiExpression`


## Example

