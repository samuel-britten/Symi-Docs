# Combinatorics

Same convention as integer number theory: integer-leaf expressions in,
integer-leaf expressions out; non-integer input raises, as do arguments
outside each function's domain (negative counts, …).

### falling_factorial

<a id="entry-presentation_kotlin_combinatorics_capability_discrete_mathematics_falling_factorial_api_session_falling_factorial"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_fallingfactorial.1c7fd218ebea"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun fallingFactorial(
    value: UniffiExpression,
    order: UniffiExpression,
): UniffiExpression
```


\(\operatorname{base}(\operatorname{base}-1)\cdots(\operatorname{base}-\operatorname{length}+1)\); `length` must be a non-negative integer,
`base` may be any integer.

### rising_factorial

<a id="entry-presentation_kotlin_combinatorics_capability_discrete_mathematics_rising_factorial_api_session_rising_factorial"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_risingfactorial.f25335cc2f8a"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun risingFactorial(
    value: UniffiExpression,
    order: UniffiExpression,
): UniffiExpression
```


\(\operatorname{base}(\operatorname{base}+1)\cdots(\operatorname{base}+\operatorname{length}-1)\) (the Pochhammer symbol on integers).

### stirling_first_signed

<a id="entry-presentation_kotlin_combinatorics_capability_discrete_mathematics_stirling_first_signed_api_session_stirling_first_signed"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_stirlingfirstsigned.027966283e96"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun stirlingFirstSigned(
    upper: UniffiExpression,
    lower: UniffiExpression,
): UniffiExpression
```


Signed Stirling number of the first kind s(n, k).

### stirling_second

<a id="entry-presentation_kotlin_combinatorics_capability_discrete_mathematics_stirling_second_api_session_stirling_second"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_stirlingsecond.7408ddaedee1"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun stirlingSecond(
    upper: UniffiExpression,
    lower: UniffiExpression,
): UniffiExpression
```


Stirling number of the second kind S(n, k).

### bell_number

<a id="entry-presentation_kotlin_combinatorics_capability_discrete_mathematics_bell_number_api_session_bell_number"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_bellnumber.8577ae30e037"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun bellNumber(argument: UniffiExpression): UniffiExpression
```


The n-th Bell number.

### catalan_number

<a id="entry-presentation_kotlin_combinatorics_capability_discrete_mathematics_catalan_number_api_session_catalan_number"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_catalannumber.a2962d5f8f80"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun catalanNumber(argument: UniffiExpression): UniffiExpression
```


The n-th Catalan number.

### fibonacci_number

<a id="entry-presentation_kotlin_combinatorics_capability_discrete_mathematics_fibonacci_number_api_session_fibonacci_number"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_fibonaccinumber.f6f8de78bebe"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun fibonacciNumber(argument: UniffiExpression): UniffiExpression
```


The n-th Fibonacci number (F(0) = 0, F(1) = 1).

### partition_count

<a id="entry-presentation_kotlin_combinatorics_capability_discrete_mathematics_partition_count_api_session_partition_count"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_partitioncount.ab73cbebe9f0"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun partitionCount(argument: UniffiExpression): UniffiExpression
```


Number of integer partitions p(n).

### multinomial

<a id="entry-presentation_kotlin_combinatorics_capability_discrete_mathematics_multinomial_api_number_theory_session_multinomial"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_multinomial.e948c0b56eaa"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun multinomial(parts: List<UniffiExpression>): UniffiExpression
```


Multinomial coefficient \((\sum \operatorname{parts})! / \prod (\operatorname{part}_i!)\); parts must be non-negative
integers.

## Example

