# Series and residues

### taylor_series

<a id="entry-presentation_swift_series_capability_calculus_taylor_series_api_session_taylor_series"></a>
<a id="placement-placement.swift.swift_object.uniffisession_taylorseries.b5a9243f757b"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func taylorSeries(
    target: UniffiExpression,
    variable: String,
    expansionPoint: UniffiExpression,
    truncationOrder: UInt64,
) -> UniffiExpression
```

<a id="entry-presentation_swift_series_capability_calculus_taylor_series_api_expression_taylor_series"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_taylorseries.c30668e0ffad"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func taylorSeries(
    variable: String,
    expansionPoint: UniffiExpression,
    truncationOrder: UInt64,
) -> UniffiExpression
```

<a id="entry-presentation_swift_series_capability_calculus_taylor_series_api_assumptionscope_taylor_series"></a>
<a id="placement-placement.swift.swift_object.uniffiassumptionscope_taylorseries.bbd730d2a172"></a>
<p class="symi-entry-owner">UniffiAssumptionScope method</p>

```swift signature
func taylorSeries(
    target: UniffiExpression,
    variable: String,
    expansionPoint: UniffiExpression,
    truncationOrder: UInt64,
) -> UniffiExpression
```


Truncated Taylor expansion about `expansion_point`, keeping terms of degree
**strictly less than** `order` (the remainder is
\(O((x-a)^{\operatorname{order}})\). Returns the truncated polynomial, not a series object;
`order = 0` returns zero. Coefficients are computed exactly by repeated
symbolic differentiation.

### maclaurin_series

<a id="entry-presentation_swift_series_capability_calculus_maclaurin_series_api_analysis_session_maclaurin_series"></a>
<a id="placement-placement.swift.swift_object.uniffisession_maclaurinseries.39fc85963c95"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func maclaurinSeries(
    inputExpression: UniffiExpression,
    variable: String,
    truncationOrder: UInt64,
) -> UniffiExpression
```

<a id="entry-presentation_swift_series_capability_calculus_maclaurin_series_api_expression_operations_expression_maclaurin_series"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_maclaurinseries.035f86cc2349"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func maclaurinSeries(
    variable: String,
    truncationOrder: UInt64,
) -> UniffiExpression
```


`taylor_series` specialised to expansion point 0.

### laurent_series

<a id="entry-presentation_swift_series_capability_calculus_laurent_series_api_session_laurent_series"></a>
<a id="placement-placement.swift.swift_object.uniffisession_laurentseries.bd7b8d506246"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func laurentSeries(
    target: UniffiExpression,
    variable: String,
    center: UniffiExpression,
    order: UInt64,
) -> UniffiExpression
```

<a id="entry-presentation_swift_series_capability_calculus_laurent_series_api_expression_laurent_series"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_laurentseries.9153ae2f020c"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func laurentSeries(
    variable: String,
    center: UniffiExpression,
    order: UInt64,
) -> UniffiExpression
```


Truncated Laurent expansion at `center`: every \((\operatorname{variable} - \operatorname{center})^k\) term
with \(-m \le k < \operatorname{order}\), where `m` is the pole order. Analytic points degrade
to the Taylor expansion. At an essential singularity (where `pole_order`
declines) the result is an unevaluated `series_unevaluated(...)` placeholder,
because no finite truncation of the principal part is correct.

### residue

<a id="entry-presentation_swift_series_capability_calculus_residue_api_analysis_session_residue"></a>
<a id="placement-placement.swift.swift_object.uniffisession_residue.7c671367a502"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func residue(
    inputExpression: UniffiExpression,
    variable: String,
    center: UniffiExpression,
) -> UniffiExpression
```

<a id="entry-presentation_swift_series_capability_calculus_residue_api_expression_operations_expression_residue"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_residue.e33263b37c5a"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func residue(
    variable: String,
    center: UniffiExpression,
) -> UniffiExpression
```


Coefficient of \((\operatorname{variable} - \operatorname{center})^{-1}\) in the Laurent expansion at
`center`. Analytic/removable points give 0; simple poles use the limit of
\((x - c) f\); higher poles use the derivative formula. Essential singularities
return an unevaluated `residue_unevaluated(...)` placeholder. Rational
functions use exact polynomial valuations and formal series division, so
explicit algebraic centers do not need to occur as structural factors.

### pole_order

<a id="entry-presentation_swift_series_capability_calculus_pole_order_api_analysis_session_pole_order"></a>
<a id="placement-placement.swift.swift_object.uniffisession_poleorder.8838e6a5ee33"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func poleOrder(
    inputExpression: UniffiExpression,
    variable: String,
    center: UniffiExpression,
) -> Int64?
```

<a id="entry-presentation_swift_series_capability_calculus_pole_order_api_expression_operations_expression_pole_order"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_poleorder.ea07a8936648"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func poleOrder(variable: String, center: UniffiExpression) -> Int64?
```


Order of the singularity at `center`: `0` for analytic/removable points,
\(m \ge 1\) for a pole of order \(m\). Returns `None` (`undefined` in JS) when no
order \(\leq 16\) can be certified — the essential-singularity / undecidable
verdict. **Notes:** this is the one series entry returning a plain integer,
mirroring the core classifier; it never returns an unevaluated form. For a
rational function at an exact algebraic center, the order is obtained from
the square-free multiplicities of its numerator and denominator.

## Example

