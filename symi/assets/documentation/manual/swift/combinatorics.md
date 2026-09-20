# Combinatorics

Same convention as integer number theory: integer-leaf expressions in,
integer-leaf expressions out; non-integer input raises, as do arguments
outside each function's domain (negative counts, …).

### falling_factorial

<a id="entry-presentation_swift_api_session_falling_factorial"></a>
<a id="placement-placement.swift.swift_object.uniffisession_fallingfactorial.76e7e1fc715e"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func fallingFactorial(
    value: UniffiExpression,
    order: UniffiExpression,
) -> UniffiExpression
```


\(\operatorname{base}(\operatorname{base}-1)\cdots(\operatorname{base}-\operatorname{length}+1)\); `length` must be a non-negative integer,
`base` may be any integer.

### rising_factorial

<a id="entry-presentation_swift_api_session_rising_factorial"></a>
<a id="placement-placement.swift.swift_object.uniffisession_risingfactorial.a9a8e1fb806d"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func risingFactorial(
    value: UniffiExpression,
    order: UniffiExpression,
) -> UniffiExpression
```


\(\operatorname{base}(\operatorname{base}+1)\cdots(\operatorname{base}+\operatorname{length}-1)\) (the Pochhammer symbol on integers).

### stirling_first_signed

<a id="entry-presentation_swift_api_session_stirling_first_signed"></a>
<a id="placement-placement.swift.swift_object.uniffisession_stirlingfirstsigned.a68dc6e30cb9"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func stirlingFirstSigned(
    upper: UniffiExpression,
    lower: UniffiExpression,
) -> UniffiExpression
```


Signed Stirling number of the first kind s(n, k).

### stirling_second

<a id="entry-presentation_swift_api_session_stirling_second"></a>
<a id="placement-placement.swift.swift_object.uniffisession_stirlingsecond.25007d5c9a81"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func stirlingSecond(
    upper: UniffiExpression,
    lower: UniffiExpression,
) -> UniffiExpression
```


Stirling number of the second kind S(n, k).

### bell_number

<a id="entry-presentation_swift_api_session_bell_number"></a>
<a id="placement-placement.swift.swift_object.uniffisession_bellnumber.b17a48e37829"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func bellNumber(argument: UniffiExpression) -> UniffiExpression
```


The n-th Bell number.

### catalan_number

<a id="entry-presentation_swift_api_session_catalan_number"></a>
<a id="placement-placement.swift.swift_object.uniffisession_catalannumber.1e5f49d5b1dd"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func catalanNumber(argument: UniffiExpression) -> UniffiExpression
```


The n-th Catalan number.

### fibonacci_number

<a id="entry-presentation_swift_api_session_fibonacci_number"></a>
<a id="placement-placement.swift.swift_object.uniffisession_fibonaccinumber.2a95e7020e06"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func fibonacciNumber(argument: UniffiExpression) -> UniffiExpression
```


The n-th Fibonacci number (F(0) = 0, F(1) = 1).

### partition_count

<a id="entry-presentation_swift_api_session_partition_count"></a>
<a id="placement-placement.swift.swift_object.uniffisession_partitioncount.2c6c6762fbc2"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func partitionCount(argument: UniffiExpression) -> UniffiExpression
```


Number of integer partitions p(n).

### multinomial

<a id="entry-presentation_swift_api_session_multinomial"></a>
<a id="placement-placement.swift.swift_object.uniffisession_multinomial.8e485807ecc0"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func multinomial(parts: [UniffiExpression]) -> UniffiExpression
```


Multinomial coefficient \((\sum \operatorname{parts})! / \prod (\operatorname{part}_i!)\); parts must be non-negative
integers.

## Example

