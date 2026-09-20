# Series and residues

### taylor_series

<a id="entry-presentation_kotlin_api_session_taylor_series"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_taylorseries.f835609b1b61"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun taylorSeries(
    target: UniffiExpression,
    variable: kotlin.String,
    expansionPoint: UniffiExpression,
    truncationOrder: kotlin.ULong,
): UniffiExpression
```

<details class="symi-calling-forms">
<summary>Calling forms and variants</summary>

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_taylorseries.72e783cf8686"></a>
<p class="symi-entry-owner">Expression method: <code>UniffiExpression.taylorSeries</code></p>

```kotlin signature
fun taylorSeries(
    variable: kotlin.String,
    expansionPoint: UniffiExpression,
    truncationOrder: kotlin.ULong,
): UniffiExpression
```

<a id="placement-placement.kotlin.kotlin_object.uniffiassumptionscope_taylorseries.65181fdaeff1"></a>
<p class="symi-entry-owner">Variant using local assumptions — UniffiAssumptionScope method: <code>UniffiAssumptionScope.taylorSeries</code></p>

```kotlin signature
fun taylorSeries(
    target: UniffiExpression,
    variable: kotlin.String,
    expansionPoint: UniffiExpression,
    truncationOrder: kotlin.ULong,
): UniffiExpression
```

</details>


Truncated Taylor expansion about `expansion_point`, keeping terms of degree
**strictly less than** `order` (the remainder is
\(O((x-a)^{\operatorname{order}})\). Returns the truncated polynomial, not a series object;
`order = 0` returns zero. Coefficients are computed exactly by repeated
symbolic differentiation.

### maclaurin_series

<a id="entry-presentation_kotlin_api_session_maclaurin_series"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_maclaurinseries.c9fc0d37af7d"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun maclaurinSeries(
    inputExpression: UniffiExpression,
    variable: kotlin.String,
    truncationOrder: kotlin.ULong,
): UniffiExpression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_maclaurinseries.fc5bf7108e4f"></a>
<p class="symi-entry-owner">Expression method: <code>UniffiExpression.maclaurinSeries</code></p>

```kotlin signature
fun maclaurinSeries(
    variable: kotlin.String,
    truncationOrder: kotlin.ULong,
): UniffiExpression
```

</details>


`taylor_series` specialised to expansion point 0.

### laurent_series

<a id="entry-presentation_kotlin_api_session_laurent_series"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_laurentseries.1693796918d8"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun laurentSeries(
    target: UniffiExpression,
    variable: kotlin.String,
    center: UniffiExpression,
    order: kotlin.ULong,
): UniffiExpression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_laurentseries.a8ed35729442"></a>
<p class="symi-entry-owner">Expression method: <code>UniffiExpression.laurentSeries</code></p>

```kotlin signature
fun laurentSeries(
    variable: kotlin.String,
    center: UniffiExpression,
    order: kotlin.ULong,
): UniffiExpression
```

</details>


Truncated Laurent expansion at `center`: every \((\operatorname{variable} - \operatorname{center})^k\) term
with \(-m \le k < \operatorname{order}\), where `m` is the pole order. Analytic points degrade
to the Taylor expansion. At an essential singularity (where `pole_order`
declines) the result is an unevaluated `series_unevaluated(...)` placeholder,
because no finite truncation of the principal part is correct.

### residue

<a id="entry-presentation_kotlin_api_session_residue"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_residue.674253add0e1"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun residue(
    inputExpression: UniffiExpression,
    variable: kotlin.String,
    center: UniffiExpression,
): UniffiExpression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_residue.b8182a841444"></a>
<p class="symi-entry-owner">Expression method: <code>UniffiExpression.residue</code></p>

```kotlin signature
fun residue(
    variable: kotlin.String,
    center: UniffiExpression,
): UniffiExpression
```

</details>


Coefficient of \((\operatorname{variable} - \operatorname{center})^{-1}\) in the Laurent expansion at
`center`. Analytic/removable points give 0; simple poles use the limit of
\((x - c) f\); higher poles use the derivative formula. Essential singularities
return an unevaluated `residue_unevaluated(...)` placeholder. Rational
functions use exact polynomial valuations and formal series division, so
explicit algebraic centers do not need to occur as structural factors.

### pole_order

<a id="entry-presentation_kotlin_api_session_pole_order"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_poleorder.5bc5c7db6166"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun poleOrder(
    inputExpression: UniffiExpression,
    variable: kotlin.String,
    center: UniffiExpression,
): kotlin.Long?
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_poleorder.9bcda1debf7f"></a>
<p class="symi-entry-owner">Expression method: <code>UniffiExpression.poleOrder</code></p>

```kotlin signature
fun poleOrder(
    variable: kotlin.String,
    center: UniffiExpression,
): kotlin.Long?
```

</details>


Order of the singularity at `center`: `0` for analytic/removable points,
\(m \ge 1\) for a pole of order \(m\). Returns `None` (`undefined` in JS) when no
order \(\leq 16\) can be certified — the essential-singularity / undecidable
verdict. **Notes:** this is the one series entry returning a plain integer,
mirroring the core classifier; it never returns an unevaluated form. For a
rational function at an exact algebraic center, the order is obtained from
the square-free multiplicities of its numerator and denominator.

## Example

