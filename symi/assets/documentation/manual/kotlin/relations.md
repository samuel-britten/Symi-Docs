# Relations and predicates

Relations construct symbolic formulas. They are distinct from host-language truth queries.

## Relations

Relation nodes are used as equations for `solve`/`solveset`, as piecewise
conditions, and as boolean-valued results.

### equal

<a id="placement-placement.kotlin.kotlin_object.uniffisession_equal.81264b70ecf9"></a>
`UniffiSession.equal(left: UniffiExpression, right: UniffiExpression): UniffiExpression`


### not_equal

<a id="placement-placement.kotlin.kotlin_object.uniffisession_notequal.386f39ac6298"></a>
`UniffiSession.notEqual(left: UniffiExpression, right: UniffiExpression): UniffiExpression`


### less_than

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_lessthan.8bdff1891c15"></a>
`UniffiExpression.lessThan(other: UniffiExpression): UniffiExpression`

<a id="placement-placement.kotlin.kotlin_object.uniffisession_lessthan.8a0027f3a4ee"></a>
`UniffiSession.lessThan(left: UniffiExpression, right: UniffiExpression): UniffiExpression`


### less_than_or_equal

<a id="placement-placement.kotlin.kotlin_object.uniffisession_lessthanorequal.9d4f9dcd3fb5"></a>
`UniffiSession.lessThanOrEqual(left: UniffiExpression, right: UniffiExpression): UniffiExpression`


### greater_than

<a id="placement-placement.kotlin.kotlin_object.uniffisession_greaterthan.fd60a4bf9b45"></a>
`UniffiSession.greaterThan(left: UniffiExpression, right: UniffiExpression): UniffiExpression`


### greater_than_or_equal

<a id="placement-placement.kotlin.kotlin_object.uniffisession_greaterthanorequal.da5de082498a"></a>
`UniffiSession.greaterThanOrEqual(left: UniffiExpression, right: UniffiExpression): UniffiExpression`


## Example

