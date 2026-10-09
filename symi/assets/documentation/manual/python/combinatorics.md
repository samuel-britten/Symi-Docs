# Combinatorics

Same convention as integer number theory: integer-leaf expressions in,
integer-leaf expressions out; non-integer input raises, as do arguments
outside each function's domain (negative counts, …).

### falling_factorial

<a id="placement-placement.python.python_class.context_falling_factorial.3b495b9019e2"></a>
`Context.falling_factorial(base, length)`

<a id="placement-placement.python.python_module.module_falling_factorial.e2846cb97c6c"></a>
`symi.falling_factorial(base, length)`


\(\operatorname{base}(\operatorname{base}-1)\cdots(\operatorname{base}-\operatorname{length}+1)\); `length` must be a non-negative integer,
`base` may be any integer.

### rising_factorial

<a id="placement-placement.python.python_class.context_rising_factorial.888782f865ba"></a>
`Context.rising_factorial(base, length)`

<a id="placement-placement.python.python_module.module_rising_factorial.7e0957e016de"></a>
`symi.rising_factorial(base, length)`


\(\operatorname{base}(\operatorname{base}+1)\cdots(\operatorname{base}+\operatorname{length}-1)\) (the Pochhammer symbol on integers).

### stirling_first_signed

<a id="placement-placement.python.python_class.context_stirling_first_signed.0b00fa2e27c8"></a>
`Context.stirling_first_signed(n, k)`

<a id="placement-placement.python.python_module.module_stirling_first_signed.d5d42ca8d378"></a>
`symi.stirling_first_signed(n, k)`


Signed Stirling number of the first kind s(n, k).

### stirling_second

<a id="placement-placement.python.python_class.context_stirling_second.b0c8e016daea"></a>
`Context.stirling_second(n, k)`

<a id="placement-placement.python.python_module.module_stirling_second.23f7af4a94cb"></a>
`symi.stirling_second(n, k)`


Stirling number of the second kind S(n, k).

### bell_number

<a id="placement-placement.python.python_class.context_bell_number.e718c3b67449"></a>
`Context.bell_number(n)`

<a id="placement-placement.python.python_module.module_bell_number.f7d58f32ca00"></a>
`symi.bell_number(n)`


The n-th Bell number.

### catalan_number

<a id="placement-placement.python.python_class.context_catalan_number.4c8621b2964f"></a>
`Context.catalan_number(n)`

<a id="placement-placement.python.python_module.module_catalan_number.7e0b0b19f4db"></a>
`symi.catalan_number(n)`


The n-th Catalan number.

### fibonacci_number

<a id="placement-placement.python.python_class.context_fibonacci_number.7da2a509045b"></a>
`Context.fibonacci_number(n)`

<a id="placement-placement.python.python_module.module_fibonacci_number.dc4758ad1625"></a>
`symi.fibonacci_number(n)`


The n-th Fibonacci number (F(0) = 0, F(1) = 1).

### partition_count

<a id="placement-placement.python.python_class.context_partition_count.7c6e3db07a36"></a>
`Context.partition_count(n)`

<a id="placement-placement.python.python_module.module_partition_count.54165d480956"></a>
`symi.partition_count(n)`


Number of integer partitions p(n).

### multinomial

<a id="placement-placement.python.python_class.context_multinomial.74bc4ac64f30"></a>
`Context.multinomial(parts)`

<a id="placement-placement.python.python_module.module_multinomial.b098da2587e9"></a>
`symi.multinomial(parts)`


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

