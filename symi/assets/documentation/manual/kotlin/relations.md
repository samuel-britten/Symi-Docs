# Relations and predicates

Relations construct symbolic formulas. They are distinct from host-language truth queries.

## Relations

Relation nodes are used as equations for `solve`/`solveset`, as piecewise
conditions, and as boolean-valued results.

### equal

<a id="entry-presentation_kotlin_api_session_equal"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_equal.81264b70ecf9"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun equal(
    left: UniffiExpression,
    right: UniffiExpression,
): UniffiExpression
```


### not_equal

<a id="entry-presentation_kotlin_api_session_not_equal"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_notequal.386f39ac6298"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun notEqual(
    left: UniffiExpression,
    right: UniffiExpression,
): UniffiExpression
```


### less_than

<a id="entry-presentation_kotlin_api_session_less_than"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_lessthan.8a0027f3a4ee"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun lessThan(
    left: UniffiExpression,
    right: UniffiExpression,
): UniffiExpression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_lessthan.8bdff1891c15"></a>
<p class="symi-entry-owner">Expression method: <code>UniffiExpression.lessThan</code></p>

```kotlin signature
fun lessThan(other: UniffiExpression): UniffiExpression
```

</details>


### less_than_or_equal

<a id="entry-presentation_kotlin_api_session_less_than_or_equal"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_lessthanorequal.9d4f9dcd3fb5"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun lessThanOrEqual(
    left: UniffiExpression,
    right: UniffiExpression,
): UniffiExpression
```


### greater_than

<a id="entry-presentation_kotlin_api_session_greater_than"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_greaterthan.fd60a4bf9b45"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun greaterThan(
    left: UniffiExpression,
    right: UniffiExpression,
): UniffiExpression
```


### greater_than_or_equal

<a id="entry-presentation_kotlin_api_session_greater_than_or_equal"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_greaterthanorequal.da5de082498a"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun greaterThanOrEqual(
    left: UniffiExpression,
    right: UniffiExpression,
): UniffiExpression
```


## Example

