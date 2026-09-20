# Relations and predicates

Relations construct symbolic formulas. They are distinct from host-language truth queries.

## Relations

Relation nodes are used as equations for `solve`/`solveset`, as piecewise
conditions, and as boolean-valued results.

### equal

<a id="entry-presentation_swift_api_session_equal"></a>
<a id="placement-placement.swift.swift_object.uniffisession_equal.7d4350b67c9e"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func equal(
    left: UniffiExpression,
    right: UniffiExpression,
) -> UniffiExpression
```


### not_equal

<a id="entry-presentation_swift_api_session_not_equal"></a>
<a id="placement-placement.swift.swift_object.uniffisession_notequal.44068533f7a7"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func notEqual(
    left: UniffiExpression,
    right: UniffiExpression,
) -> UniffiExpression
```


### less_than

<a id="entry-presentation_swift_api_session_less_than"></a>
<a id="placement-placement.swift.swift_object.uniffisession_lessthan.329be8dc7f24"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func lessThan(
    left: UniffiExpression,
    right: UniffiExpression,
) -> UniffiExpression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.swift.swift_object.uniffiexpression_lessthan.7403803b9676"></a>
<p class="symi-entry-owner">Expression method: <code>UniffiExpression.lessThan</code></p>

```swift signature
func lessThan(other: UniffiExpression) -> UniffiExpression
```

</details>


### less_than_or_equal

<a id="entry-presentation_swift_api_session_less_than_or_equal"></a>
<a id="placement-placement.swift.swift_object.uniffisession_lessthanorequal.8fe9c0e0ca4b"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func lessThanOrEqual(
    left: UniffiExpression,
    right: UniffiExpression,
) -> UniffiExpression
```


### greater_than

<a id="entry-presentation_swift_api_session_greater_than"></a>
<a id="placement-placement.swift.swift_object.uniffisession_greaterthan.ab85fc7a461b"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func greaterThan(
    left: UniffiExpression,
    right: UniffiExpression,
) -> UniffiExpression
```


### greater_than_or_equal

<a id="entry-presentation_swift_api_session_greater_than_or_equal"></a>
<a id="placement-placement.swift.swift_object.uniffisession_greaterthanorequal.1905a29db601"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func greaterThanOrEqual(
    left: UniffiExpression,
    right: UniffiExpression,
) -> UniffiExpression
```


## Example

