# Combinatorics

Same convention as integer number theory: integer-leaf expressions in,
integer-leaf expressions out; non-integer input raises, as do arguments
outside each function's domain (negative counts, …).

### falling_factorial

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.falling_factorial`](/symi/python/combinatorics#falling_factorial) in Python, [`UniffiSession.fallingFactorial`](/symi/kotlin/combinatorics#falling_factorial) in Kotlin, [`UniffiSession.fallingFactorial`](/symi/swift/combinatorics#falling_factorial) in Swift, [`api::Session::falling_factorial`](/symi/rust/combinatorics#falling_factorial) in Rust.*


\(\operatorname{base}(\operatorname{base}-1)\cdots(\operatorname{base}-\operatorname{length}+1)\); `length` must be a non-negative integer,
`base` may be any integer.

### rising_factorial

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.rising_factorial`](/symi/python/combinatorics#rising_factorial) in Python, [`UniffiSession.risingFactorial`](/symi/kotlin/combinatorics#rising_factorial) in Kotlin, [`UniffiSession.risingFactorial`](/symi/swift/combinatorics#rising_factorial) in Swift, [`api::Session::rising_factorial`](/symi/rust/combinatorics#rising_factorial) in Rust.*


\(\operatorname{base}(\operatorname{base}+1)\cdots(\operatorname{base}+\operatorname{length}-1)\) (the Pochhammer symbol on integers).

### stirling_first_signed

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.stirling_first_signed`](/symi/python/combinatorics#stirling_first_signed) in Python, [`UniffiSession.stirlingFirstSigned`](/symi/kotlin/combinatorics#stirling_first_signed) in Kotlin, [`UniffiSession.stirlingFirstSigned`](/symi/swift/combinatorics#stirling_first_signed) in Swift, [`api::Session::stirling_first_signed`](/symi/rust/combinatorics#stirling_first_signed) in Rust.*


Signed Stirling number of the first kind s(n, k).

### stirling_second

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.stirling_second`](/symi/python/combinatorics#stirling_second) in Python, [`UniffiSession.stirlingSecond`](/symi/kotlin/combinatorics#stirling_second) in Kotlin, [`UniffiSession.stirlingSecond`](/symi/swift/combinatorics#stirling_second) in Swift, [`api::Session::stirling_second`](/symi/rust/combinatorics#stirling_second) in Rust.*


Stirling number of the second kind S(n, k).

### bell_number

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.bell_number`](/symi/python/combinatorics#bell_number) in Python, [`UniffiSession.bellNumber`](/symi/kotlin/combinatorics#bell_number) in Kotlin, [`UniffiSession.bellNumber`](/symi/swift/combinatorics#bell_number) in Swift, [`api::Session::bell_number`](/symi/rust/combinatorics#bell_number) in Rust.*


The n-th Bell number.

### catalan_number

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.catalan_number`](/symi/python/combinatorics#catalan_number) in Python, [`UniffiSession.catalanNumber`](/symi/kotlin/combinatorics#catalan_number) in Kotlin, [`UniffiSession.catalanNumber`](/symi/swift/combinatorics#catalan_number) in Swift, [`api::Session::catalan_number`](/symi/rust/combinatorics#catalan_number) in Rust.*


The n-th Catalan number.

### fibonacci_number

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.fibonacci_number`](/symi/python/combinatorics#fibonacci_number) in Python, [`UniffiSession.fibonacciNumber`](/symi/kotlin/combinatorics#fibonacci_number) in Kotlin, [`UniffiSession.fibonacciNumber`](/symi/swift/combinatorics#fibonacci_number) in Swift, [`api::Session::fibonacci_number`](/symi/rust/combinatorics#fibonacci_number) in Rust.*


The n-th Fibonacci number (F(0) = 0, F(1) = 1).

### partition_count

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.partition_count`](/symi/python/combinatorics#partition_count) in Python, [`UniffiSession.partitionCount`](/symi/kotlin/combinatorics#partition_count) in Kotlin, [`UniffiSession.partitionCount`](/symi/swift/combinatorics#partition_count) in Swift, [`api::Session::partition_count`](/symi/rust/combinatorics#partition_count) in Rust.*


Number of integer partitions p(n).

### multinomial

<a id="entry-presentation_wasm_api_session_multinomial"></a>
<a id="placement-placement.wasm.wasm_module.module_multinomial.9170c8108eb5"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
multinomial(parts: Expression[]): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_multinomial.2a15ecdfee92"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.multinomial</code></p>

```typescript signature
multinomial(parts: Expression[]): Expression
```

</details>


Multinomial coefficient \((\sum \operatorname{parts})! / \prod (\operatorname{part}_i!)\); parts must be non-negative
integers.

## Example

This family is not part of the recommended JavaScript facade in this release. Call it through the generated `symi.raw` layer, whose entries are listed with their wasm-bindgen signatures above, and read [Migration](migration.md) for the ownership rules that apply there.


## Additional API

### bellNumber

<a id="entry-presentation_wasm_api_session_bell_number"></a>
<a id="placement-placement.wasm.wasm_module.module_bellnumber.e556ba988a19"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
bellNumber(n: Expression): Expression
```

The n-th Bell number.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_bellnumber.b9d2d8d24cb1"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.bellNumber</code></p>

```typescript signature
bellNumber(n: Expression): Expression
```

</details>

### catalanNumber

<a id="entry-presentation_wasm_api_session_catalan_number"></a>
<a id="placement-placement.wasm.wasm_module.module_catalannumber.9e04d6cc190d"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
catalanNumber(n: Expression): Expression
```

The n-th Catalan number.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_catalannumber.97437d3ebb0e"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.catalanNumber</code></p>

```typescript signature
catalanNumber(n: Expression): Expression
```

</details>

### fallingFactorial

<a id="entry-presentation_wasm_api_session_falling_factorial"></a>
<a id="placement-placement.wasm.wasm_module.module_fallingfactorial.cf3717768829"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
fallingFactorial(base: Expression, length: Expression): Expression
```

\(\operatorname{base}(\operatorname{base}-1)\cdots(\operatorname{base}-\operatorname{length}+1)\); `length` must be a non-negative integer, `base` may be any integer.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_fallingfactorial.c7ebe77cd326"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.fallingFactorial</code></p>

```typescript signature
fallingFactorial(base: Expression, length: Expression): Expression
```

</details>

### fibonacciNumber

<a id="entry-presentation_wasm_api_session_fibonacci_number"></a>
<a id="placement-placement.wasm.wasm_module.module_fibonaccinumber.b645e018b9c3"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
fibonacciNumber(n: Expression): Expression
```

The n-th Fibonacci number (F(0) = 0, F(1) = 1).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_fibonaccinumber.bfba4fbe0c16"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.fibonacciNumber</code></p>

```typescript signature
fibonacciNumber(n: Expression): Expression
```

</details>

### partitionCount

<a id="entry-presentation_wasm_api_session_partition_count"></a>
<a id="placement-placement.wasm.wasm_module.module_partitioncount.626fcc1e58d6"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
partitionCount(n: Expression): Expression
```

Number of integer partitions p(n).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_partitioncount.adf34104cda8"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.partitionCount</code></p>

```typescript signature
partitionCount(n: Expression): Expression
```

</details>

### risingFactorial

<a id="entry-presentation_wasm_api_session_rising_factorial"></a>
<a id="placement-placement.wasm.wasm_module.module_risingfactorial.5558264a15ca"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
risingFactorial(base: Expression, length: Expression): Expression
```

\(\operatorname{base}(\operatorname{base}+1)\cdots(\operatorname{base}+\operatorname{length}-1)\) (the Pochhammer symbol on integers).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_risingfactorial.4d89d9f355ee"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.risingFactorial</code></p>

```typescript signature
risingFactorial(base: Expression, length: Expression): Expression
```

</details>

### stirlingFirstSigned

<a id="entry-presentation_wasm_api_session_stirling_first_signed"></a>
<a id="placement-placement.wasm.wasm_module.module_stirlingfirstsigned.5f73261d260b"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
stirlingFirstSigned(n: Expression, k: Expression): Expression
```

Signed Stirling number of the first kind s(n, k).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_stirlingfirstsigned.08afbe99e971"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.stirlingFirstSigned</code></p>

```typescript signature
stirlingFirstSigned(n: Expression, k: Expression): Expression
```

</details>

### stirlingSecond

<a id="entry-presentation_wasm_api_session_stirling_second"></a>
<a id="placement-placement.wasm.wasm_module.module_stirlingsecond.854182aab42c"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
stirlingSecond(n: Expression, k: Expression): Expression
```

Stirling number of the second kind S(n, k).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_stirlingsecond.3c96654ef70b"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.stirlingSecond</code></p>

```typescript signature
stirlingSecond(n: Expression, k: Expression): Expression
```

</details>

