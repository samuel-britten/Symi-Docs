# Series and residues

### taylor_series

<a id="placement-placement.kotlin.kotlin_object.uniffiassumptionscope_taylorseries.65181fdaeff1"></a>
`UniffiAssumptionScope.taylorSeries(target: UniffiExpression, variable: kotlin.String, expansionPoint: UniffiExpression, truncationOrder: kotlin.ULong): UniffiExpression`

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_taylorseries.72e783cf8686"></a>
`UniffiExpression.taylorSeries(variable: kotlin.String, expansionPoint: UniffiExpression, truncationOrder: kotlin.ULong): UniffiExpression`

<a id="placement-placement.kotlin.kotlin_object.uniffisession_taylorseries.f835609b1b61"></a>
`UniffiSession.taylorSeries(target: UniffiExpression, variable: kotlin.String, expansionPoint: UniffiExpression, truncationOrder: kotlin.ULong): UniffiExpression`


Truncated Taylor expansion about `expansion_point`, keeping terms of degree
**strictly less than** `order` (the remainder is
\(O((x-a)^{\operatorname{order}})\). Returns the truncated polynomial, not a series object;
`order = 0` returns zero. Coefficients are computed exactly by repeated
symbolic differentiation.

### maclaurin_series

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_maclaurinseries.fc5bf7108e4f"></a>
`UniffiExpression.maclaurinSeries(variable: kotlin.String, truncationOrder: kotlin.ULong): UniffiExpression`

<a id="placement-placement.kotlin.kotlin_object.uniffisession_maclaurinseries.c9fc0d37af7d"></a>
`UniffiSession.maclaurinSeries(inputExpression: UniffiExpression, variable: kotlin.String, truncationOrder: kotlin.ULong): UniffiExpression`


`taylor_series` specialised to expansion point 0.

### laurent_series

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_laurentseries.a8ed35729442"></a>
`UniffiExpression.laurentSeries(variable: kotlin.String, center: UniffiExpression, order: kotlin.ULong): UniffiExpression`

<a id="placement-placement.kotlin.kotlin_object.uniffisession_laurentseries.1693796918d8"></a>
`UniffiSession.laurentSeries(target: UniffiExpression, variable: kotlin.String, center: UniffiExpression, order: kotlin.ULong): UniffiExpression`


Truncated Laurent expansion at `center`: every \((\operatorname{variable} - \operatorname{center})^k\) term
with \(-m \le k < \operatorname{order}\), where `m` is the pole order. Analytic points degrade
to the Taylor expansion. At an essential singularity (where `pole_order`
declines) the result is an unevaluated `series_unevaluated(...)` placeholder,
because no finite truncation of the principal part is correct.

### residue

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_residue.b8182a841444"></a>
`UniffiExpression.residue(variable: kotlin.String, center: UniffiExpression): UniffiExpression`

<a id="placement-placement.kotlin.kotlin_object.uniffisession_residue.674253add0e1"></a>
`UniffiSession.residue(inputExpression: UniffiExpression, variable: kotlin.String, center: UniffiExpression): UniffiExpression`


Coefficient of \((\operatorname{variable} - \operatorname{center})^{-1}\) in the Laurent expansion at
`center`. Analytic/removable points give 0; simple poles use the limit of
\((x - c) f\); higher poles use the derivative formula. Essential singularities
return an unevaluated `residue_unevaluated(...)` placeholder. Rational
functions use exact polynomial valuations and formal series division, so
explicit algebraic centers do not need to occur as structural factors.

### pole_order

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_poleorder.9bcda1debf7f"></a>
`UniffiExpression.poleOrder(variable: kotlin.String, center: UniffiExpression): kotlin.Long?`

<a id="placement-placement.kotlin.kotlin_object.uniffisession_poleorder.5bc5c7db6166"></a>
`UniffiSession.poleOrder(inputExpression: UniffiExpression, variable: kotlin.String, center: UniffiExpression): kotlin.Long?`


Order of the singularity at `center`: `0` for analytic/removable points,
\(m \ge 1\) for a pole of order \(m\). Returns `None` (`undefined` in JS) when no
order \(\leq 16\) can be certified — the essential-singularity / undecidable
verdict. **Notes:** this is the one series entry returning a plain integer,
mirroring the core classifier; it never returns an unevaluated form. For a
rational function at an exact algebraic center, the order is obtained from
the square-free multiplicities of its numerator and denominator.

## Example

