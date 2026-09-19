# Combinatorics

Same convention as integer number theory: integer-leaf expressions in,
integer-leaf expressions out; non-integer input raises, as do arguments
outside each function's domain (negative counts, …).

### falling_factorial

<a id="entry-presentation_python_combinatorics_capability_discrete_mathematics_falling_factorial_api_session_falling_factorial"></a>
<a id="placement-placement.python.python_module.module_falling_factorial.e2846cb97c6c"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
falling_factorial(
    base: ExpressionLike,
    length: ExpressionLike,
) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_falling_factorial.3b495b9019e2"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.falling_factorial</code></p>

```python signature
falling_factorial(
    base: ExpressionLike,
    length: ExpressionLike,
) -> Expression
```

</details>


\(\operatorname{base}(\operatorname{base}-1)\cdots(\operatorname{base}-\operatorname{length}+1)\); `length` must be a non-negative integer,
`base` may be any integer.

### rising_factorial

<a id="entry-presentation_python_combinatorics_capability_discrete_mathematics_rising_factorial_api_session_rising_factorial"></a>
<a id="placement-placement.python.python_module.module_rising_factorial.7e0957e016de"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
rising_factorial(
    base: ExpressionLike,
    length: ExpressionLike,
) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_rising_factorial.888782f865ba"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.rising_factorial</code></p>

```python signature
rising_factorial(
    base: ExpressionLike,
    length: ExpressionLike,
) -> Expression
```

</details>


\(\operatorname{base}(\operatorname{base}+1)\cdots(\operatorname{base}+\operatorname{length}-1)\) (the Pochhammer symbol on integers).

### stirling_first_signed

<a id="entry-presentation_python_combinatorics_capability_discrete_mathematics_stirling_first_signed_api_session_stirling_first_signed"></a>
<a id="placement-placement.python.python_module.module_stirling_first_signed.d5d42ca8d378"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
stirling_first_signed(
    n: ExpressionLike,
    k: ExpressionLike,
) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_stirling_first_signed.0b00fa2e27c8"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.stirling_first_signed</code></p>

```python signature
stirling_first_signed(
    n: ExpressionLike,
    k: ExpressionLike,
) -> Expression
```

</details>


Signed Stirling number of the first kind s(n, k).

### stirling_second

<a id="entry-presentation_python_combinatorics_capability_discrete_mathematics_stirling_second_api_session_stirling_second"></a>
<a id="placement-placement.python.python_module.module_stirling_second.23f7af4a94cb"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
stirling_second(n: ExpressionLike, k: ExpressionLike) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_stirling_second.b0c8e016daea"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.stirling_second</code></p>

```python signature
stirling_second(n: ExpressionLike, k: ExpressionLike) -> Expression
```

</details>


Stirling number of the second kind S(n, k).

### bell_number

<a id="entry-presentation_python_combinatorics_capability_discrete_mathematics_bell_number_api_session_bell_number"></a>
<a id="placement-placement.python.python_module.module_bell_number.f7d58f32ca00"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
bell_number(n: ExpressionLike) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_bell_number.e718c3b67449"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.bell_number</code></p>

```python signature
bell_number(n: ExpressionLike) -> Expression
```

</details>


The n-th Bell number.

### catalan_number

<a id="entry-presentation_python_combinatorics_capability_discrete_mathematics_catalan_number_api_session_catalan_number"></a>
<a id="placement-placement.python.python_module.module_catalan_number.7e0b0b19f4db"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
catalan_number(n: ExpressionLike) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_catalan_number.4c8621b2964f"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.catalan_number</code></p>

```python signature
catalan_number(n: ExpressionLike) -> Expression
```

</details>


The n-th Catalan number.

### fibonacci_number

<a id="entry-presentation_python_combinatorics_capability_discrete_mathematics_fibonacci_number_api_session_fibonacci_number"></a>
<a id="placement-placement.python.python_module.module_fibonacci_number.dc4758ad1625"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
fibonacci_number(n: ExpressionLike) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_fibonacci_number.7da2a509045b"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.fibonacci_number</code></p>

```python signature
fibonacci_number(n: ExpressionLike) -> Expression
```

</details>


The n-th Fibonacci number (F(0) = 0, F(1) = 1).

### partition_count

<a id="entry-presentation_python_combinatorics_capability_discrete_mathematics_partition_count_api_session_partition_count"></a>
<a id="placement-placement.python.python_module.module_partition_count.54165d480956"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
partition_count(n: ExpressionLike) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_partition_count.7c6e3db07a36"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.partition_count</code></p>

```python signature
partition_count(n: ExpressionLike) -> Expression
```

</details>


Number of integer partitions p(n).

### multinomial

<a id="entry-presentation_python_combinatorics_capability_discrete_mathematics_multinomial_api_number_theory_session_multinomial"></a>
<a id="placement-placement.python.python_module.module_multinomial.b098da2587e9"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
multinomial(parts: Iterable[ExpressionLike]) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_multinomial.74bc4ac64f30"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.multinomial</code></p>

```python signature
multinomial(parts: Iterable[ExpressionLike]) -> Expression
```

</details>


Multinomial coefficient \((\sum \operatorname{parts})! / \prod (\operatorname{part}_i!)\); parts must be non-negative
integers.

## Example

Exact counting sequences stay exact at any size.

```python
import symi

print(symi.binomial(52, 5))
print(symi.factorial(30))
print(symi.catalan_number(12))
print(symi.stirling_second(8, 3))
print(symi.partition_count(100))
```

