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

<a id="entry-presentation_wasm_combinatorics_capability_discrete_mathematics_multinomial_api_number_theory_session_multinomial"></a>
<a id="placement-placement.wasm.wasm_module.module_multinomial.9170c8108eb5"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
multinomial(parts: Expression[]): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_multinomial.2a15ecdfee92"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.multinomial</code></p>

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

<a id="entry-presentation_wasm_combinatorics_capability_discrete_mathematics_bell_number_api_session_bell_number"></a>
<a id="placement-placement.wasm.wasm_module.module_bellnumber.e556ba988a19"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
bellNumber(n: Expression): Expression
```

The n-th Bell number.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_bellnumber.b9d2d8d24cb1"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.bellNumber</code></p>

```typescript signature
bellNumber(n: Expression): Expression
```

</details>

### catalanNumber

<a id="entry-presentation_wasm_combinatorics_capability_discrete_mathematics_catalan_number_api_session_catalan_number"></a>
<a id="placement-placement.wasm.wasm_module.module_catalannumber.9e04d6cc190d"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
catalanNumber(n: Expression): Expression
```

The n-th Catalan number.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_catalannumber.97437d3ebb0e"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.catalanNumber</code></p>

```typescript signature
catalanNumber(n: Expression): Expression
```

</details>

### chineseRemainder

<a id="entry-presentation_wasm_combinatorics_capability_discrete_mathematics_chinese_remainder_api_number_theory_session_chinese_remainder"></a>
<a id="placement-placement.wasm.wasm_module.module_chineseremainder.f3bf8937649c"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
chineseRemainder(residues_and_moduli: Expression[]): Expression
```

The smallest non-negative solution of the simultaneous congruences \(x \equiv r_i \pmod{m_i}\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_chineseremainder.4aebe1e8fe59"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.chineseRemainder</code></p>

```typescript signature
chineseRemainder(residues_and_moduli: Expression[]): Expression
```

</details>

### complexPlane

<a id="entry-presentation_wasm_combinatorics_capability_discrete_mathematics_complex_plane_api_session_complex_plane"></a>
<a id="placement-placement.wasm.wasm_module.module_complexplane.a46c1c83bcc0"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
complexPlane(): Expression
```

The set \(\mathbb{C}\) — the ambient universe, and the domain a variable ranges over when it carries no realness assumption.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_complexplane.336fcef1c7a5"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.complexPlane</code></p>

```typescript signature
readonly complexPlane: Expression
```

<a id="placement-placement.wasm.wasm_class.context_complexplane.586e5589826d"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.complexPlane</code></p>

```typescript signature
complexPlane(): Expression
```

<a id="placement-placement.wasm.javascript_facade.symifacade_complexplane.64775d0049e5"></a>
<p class="symi-entry-owner">SymiFacade property: <code>SymiFacade.complexPlane</code></p>

```typescript signature
readonly complexPlane: Expression
```

</details>

### conjunctiveNormalForm

<a id="entry-presentation_wasm_combinatorics_capability_discrete_mathematics_conjunctive_normal_form_api_logic_session_conjunctive_normal_form"></a>
<a id="placement-placement.wasm.wasm_module.module_conjunctivenormalform.18125e7d91b4"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
conjunctiveNormalForm(input_expression: Expression): Expression
```

The dual of `disjunctive_normal_form`: a reduced conjunctive normal form (an AND of OR-clauses over literals).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_conjunctivenormalform.fd02ee7d14f1"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.conjunctiveNormalForm</code></p>

```typescript signature
conjunctiveNormalForm(input_expression: Expression): Expression
```

</details>

### conjunctiveNormalForm

<a id="entry-presentation_wasm_combinatorics_capability_discrete_mathematics_conjunctive_normal_form_api_expression_operations_expression_conjunctive_normal_form"></a>
<a id="placement-placement.wasm.wasm_class.expression_conjunctivenormalform.eef84cedcdfd"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
conjunctiveNormalForm(): Expression
```

The dual of `disjunctive_normal_form`: a reduced conjunctive normal form (an AND of OR-clauses over literals).

### continuedFractionQuadraticIrrational

<a id="entry-presentation_wasm_combinatorics_capability_discrete_mathematics_continued_fraction_quadratic_irrational_api_number_theory_session_continued_fraction_quadratic_irrational"></a>
<a id="placement-placement.wasm.wasm_module.module_continuedfractionquadraticirrational.dcf0d429e737"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
continuedFractionQuadraticIrrational(value: Expression): QuadraticContinuedFractionExpansion
```

Eventually-periodic expansion of \(\sqrt{d}\) for a non-negative integer d, returned as `(initial_terms, periodic_part)`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_continuedfractionquadraticirrational.4dd188c6160b"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.continuedFractionQuadraticIrrational</code></p>

```typescript signature
continuedFractionQuadraticIrrational(value: Expression): QuadraticContinuedFractionExpansion
```

</details>

### continuedFractionRational

<a id="entry-presentation_wasm_combinatorics_capability_discrete_mathematics_continued_fraction_rational_api_number_theory_session_continued_fraction_rational"></a>
<a id="placement-placement.wasm.wasm_module.module_continuedfractionrational.c51caff08918"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
continuedFractionRational(value: Expression): Expression[]
```

Terminating continued-fraction expansion `[a0; a1, a2, ...]` of an integer or rational expression leaf.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_continuedfractionrational.cf59a95f002b"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.continuedFractionRational</code></p>

```typescript signature
continuedFractionRational(value: Expression): Expression[]
```

</details>

### disjunctiveNormalForm

<a id="entry-presentation_wasm_combinatorics_capability_discrete_mathematics_disjunctive_normal_form_api_logic_session_disjunctive_normal_form"></a>
<a id="placement-placement.wasm.wasm_module.module_disjunctivenormalform.5d44449a582f"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
disjunctiveNormalForm(input_expression: Expression): Expression
```

Rewrite a propositional formula into a reduced disjunctive normal form (an OR of AND-terms over literals): derived connectives are eliminated, negations are pushed to the atoms, the formula is distributed, and contradictory, duplicate, and subsumed terms are dropped.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_disjunctivenormalform.08f586ff9227"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.disjunctiveNormalForm</code></p>

```typescript signature
disjunctiveNormalForm(input_expression: Expression): Expression
```

</details>

### disjunctiveNormalForm

<a id="entry-presentation_wasm_combinatorics_capability_discrete_mathematics_disjunctive_normal_form_api_expression_operations_expression_disjunctive_normal_form"></a>
<a id="placement-placement.wasm.wasm_class.expression_disjunctivenormalform.9a756d79b061"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
disjunctiveNormalForm(): Expression
```

Rewrite a propositional formula into a reduced disjunctive normal form (an OR of AND-terms over literals): derived connectives are eliminated, negations are pushed to the atoms, the formula is distributed, and contradictory, duplicate, and subsumed terms are dropped.

### eulerTotient

<a id="entry-presentation_wasm_combinatorics_capability_discrete_mathematics_euler_totient_api_number_theory_session_euler_totient"></a>
<a id="placement-placement.wasm.wasm_module.module_eulertotient.4cd7de9cfaf0"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
eulerTotient(n: Expression): Expression
```

Euler's \(\varphi(n)\); requires a positive integer.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_eulertotient.0e9516a9c2bb"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.eulerTotient</code></p>

```typescript signature
eulerTotient(n: Expression): Expression
```

</details>

### extendedEuclidean

<a id="entry-presentation_wasm_combinatorics_capability_discrete_mathematics_extended_euclidean_api_number_theory_session_extended_euclidean"></a>
<a id="placement-placement.wasm.wasm_module.module_extendedeuclidean.83f8fd6d7934"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
extendedEuclidean(a: Expression, b: Expression): Expression[]
```

`(gcd, x, y)` with \(a x + b y = \operatorname{gcd}\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_extendedeuclidean.2caeb9577112"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.extendedEuclidean</code></p>

```typescript signature
extendedEuclidean(a: Expression, b: Expression): Expression[]
```

</details>

### fallingFactorial

<a id="entry-presentation_wasm_combinatorics_capability_discrete_mathematics_falling_factorial_api_session_falling_factorial"></a>
<a id="placement-placement.wasm.wasm_module.module_fallingfactorial.cf3717768829"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
fallingFactorial(base: Expression, length: Expression): Expression
```

\(\operatorname{base}(\operatorname{base}-1)\cdots(\operatorname{base}-\operatorname{length}+1)\); `length` must be a non-negative integer, `base` may be any integer.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_fallingfactorial.c7ebe77cd326"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.fallingFactorial</code></p>

```typescript signature
fallingFactorial(base: Expression, length: Expression): Expression
```

</details>

### fibonacciNumber

<a id="entry-presentation_wasm_combinatorics_capability_discrete_mathematics_fibonacci_number_api_session_fibonacci_number"></a>
<a id="placement-placement.wasm.wasm_module.module_fibonaccinumber.b645e018b9c3"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
fibonacciNumber(n: Expression): Expression
```

The n-th Fibonacci number (F(0) = 0, F(1) = 1).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_fibonaccinumber.bfba4fbe0c16"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.fibonacciNumber</code></p>

```typescript signature
fibonacciNumber(n: Expression): Expression
```

</details>

### initialTerms

<a id="entry-presentation_wasm_combinatorics_capability_discrete_mathematics_initial_terms_api_results_quadraticcontinuedfractionexpansion_initial_terms"></a>
<a id="placement-placement.wasm.wasm_class.quadraticcontinuedfractionexpansion_initialterms.c0053bbd2c9d"></a>
<p class="symi-entry-owner">QuadraticContinuedFractionExpansion property</p>

```typescript signature
readonly initialTerms: Expression[]
```

The terms preceding the periodic part of the expansion.

### isMember

<a id="entry-presentation_wasm_combinatorics_capability_discrete_mathematics_is_member_api_sets_session_is_member"></a>
<a id="placement-placement.wasm.wasm_module.module_ismember.1e1e670a4cc3"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
isMember(element: Expression, set: Expression): boolean | undefined
```

Three-valued membership: `True` only on structural proof, `False` only on a structural counterexample, `None` otherwise. Covers \(\varnothing\), \(\mathbb{R}\), finite sets, intervals, unions, intersections, complements.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_ismember.c95641df7e1f"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.isMember</code></p>

```typescript signature
isMember(element: Expression, set: Expression): boolean | undefined
```

</details>

### jacobiSymbol

<a id="entry-presentation_wasm_combinatorics_capability_discrete_mathematics_jacobi_symbol_api_session_jacobi_symbol"></a>
<a id="placement-placement.wasm.wasm_module.module_jacobisymbol.c3f360d8c1d2"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
jacobiSymbol(numerator: Expression, denominator: Expression): number
```

The Jacobi symbol \((n/d) \in \{-1, 0, 1\}\); the denominator must be a positive odd integer.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_jacobisymbol.7c5f47880345"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.jacobiSymbol</code></p>

```typescript signature
jacobiSymbol(numerator: Expression, denominator: Expression): number
```

</details>

### kroneckerSymbol

<a id="entry-presentation_wasm_combinatorics_capability_discrete_mathematics_kronecker_symbol_api_session_kronecker_symbol"></a>
<a id="placement-placement.wasm.wasm_module.module_kroneckersymbol.fe2e8066bdaf"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
kroneckerSymbol(numerator: Expression, denominator: Expression): number
```

The Kronecker extension of the Jacobi symbol to all integer denominators.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_kroneckersymbol.5fb205f9197f"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.kroneckerSymbol</code></p>

```typescript signature
kroneckerSymbol(numerator: Expression, denominator: Expression): number
```

</details>

### legendreSymbol

<a id="entry-presentation_wasm_combinatorics_capability_discrete_mathematics_legendre_symbol_api_session_legendre_symbol"></a>
<a id="placement-placement.wasm.wasm_module.module_legendresymbol.d3d4b7dcbf1d"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
legendreSymbol(numerator: Expression, prime: Expression): number
```

The Legendre symbol; the second argument must be an odd prime.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_legendresymbol.573f83890b5c"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.legendreSymbol</code></p>

```typescript signature
legendreSymbol(numerator: Expression, prime: Expression): number
```

</details>

### modularInverse

<a id="entry-presentation_wasm_combinatorics_capability_discrete_mathematics_modular_inverse_api_number_theory_session_modular_inverse"></a>
<a id="placement-placement.wasm.wasm_module.module_modularinverse.89b1fb456696"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
modularInverse(value: Expression, modulus: Expression): Expression
```

Multiplicative inverse of `value` modulo `modulus`; errors when \(\operatorname{gcd}(\operatorname{value}, \operatorname{modulus}) \ne 1\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_modularinverse.58167e0fe801"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.modularInverse</code></p>

```typescript signature
modularInverse(value: Expression, modulus: Expression): Expression
```

</details>

### modularPower

<a id="entry-presentation_wasm_combinatorics_capability_discrete_mathematics_modular_power_api_number_theory_session_modular_power"></a>
<a id="placement-placement.wasm.wasm_module.module_modularpower.c5fc06c4c577"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
modularPower(
    base: Expression,
    exponent: Expression,
    modulus: Expression,
): Expression
```

`base^exponent mod modulus` by square-and-multiply; requires positive modulus and non-negative exponent.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_modularpower.f0c98dd7bb85"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.modularPower</code></p>

```typescript signature
modularPower(
    base: Expression,
    exponent: Expression,
    modulus: Expression,
): Expression
```

</details>

### partitionCount

<a id="entry-presentation_wasm_combinatorics_capability_discrete_mathematics_partition_count_api_session_partition_count"></a>
<a id="placement-placement.wasm.wasm_module.module_partitioncount.626fcc1e58d6"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
partitionCount(n: Expression): Expression
```

Number of integer partitions p(n).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_partitioncount.adf34104cda8"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.partitionCount</code></p>

```typescript signature
partitionCount(n: Expression): Expression
```

</details>

### periodicTerms

<a id="entry-presentation_wasm_combinatorics_capability_discrete_mathematics_periodic_terms_api_results_quadraticcontinuedfractionexpansion_periodic_terms"></a>
<a id="placement-placement.wasm.wasm_class.quadraticcontinuedfractionexpansion_periodicterms.c7ae5216de14"></a>
<p class="symi-entry-owner">QuadraticContinuedFractionExpansion property</p>

```typescript signature
readonly periodicTerms: Expression[]
```

The repeating terms of the expansion.

### realLine

<a id="entry-presentation_wasm_combinatorics_capability_discrete_mathematics_real_line_api_session_real_line"></a>
<a id="placement-placement.wasm.wasm_module.module_realline.d150784a3d9d"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
realLine(): Expression
```

The set \(\mathbb{R}\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_realline.04c11e555295"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.realLine</code></p>

```typescript signature
readonly realLine: Expression
```

<a id="placement-placement.wasm.wasm_class.context_realline.f9ddcef2c243"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.realLine</code></p>

```typescript signature
realLine(): Expression
```

<a id="placement-placement.wasm.javascript_facade.symifacade_realline.84c2087be448"></a>
<p class="symi-entry-owner">SymiFacade property: <code>SymiFacade.realLine</code></p>

```typescript signature
readonly realLine: Expression
```

</details>

### risingFactorial

<a id="entry-presentation_wasm_combinatorics_capability_discrete_mathematics_rising_factorial_api_session_rising_factorial"></a>
<a id="placement-placement.wasm.wasm_module.module_risingfactorial.5558264a15ca"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
risingFactorial(base: Expression, length: Expression): Expression
```

\(\operatorname{base}(\operatorname{base}+1)\cdots(\operatorname{base}+\operatorname{length}-1)\) (the Pochhammer symbol on integers).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_risingfactorial.4d89d9f355ee"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.risingFactorial</code></p>

```typescript signature
risingFactorial(base: Expression, length: Expression): Expression
```

</details>

### solveLinearDiophantine

<a id="entry-presentation_wasm_combinatorics_capability_discrete_mathematics_solve_linear_diophantine_api_number_theory_session_solve_linear_diophantine"></a>
<a id="placement-placement.wasm.wasm_module.module_solvelineardiophantine.c44d14859433"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
solveLinearDiophantine(
    coefficients: Expression[],
    constant: Expression,
): Expression[]
```

General integer solution of \(a_1 x_1 + \ldots + a_n x_n = c\), returned as the parametric coordinates — one expression per unknown, affine in fresh integer parameter symbols (`diophantine_parameter_k`) shared across the coordinates so that choosing any integers for the parameters yields a solution tuple. The list is empty when the equation has no integer solution (\(\gcd(a_i) \nmid c\)).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_solvelineardiophantine.a71e6e2e49cd"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.solveLinearDiophantine</code></p>

```typescript signature
solveLinearDiophantine(
    coefficients: Expression[],
    constant: Expression,
): Expression[]
```

</details>

### solveLinearDiophantineSystem

<a id="entry-presentation_wasm_combinatorics_capability_discrete_mathematics_solve_linear_diophantine_system_api_number_theory_session_solve_linear_diophantine_system"></a>
<a id="placement-placement.wasm.wasm_module.module_solvelineardiophantinesystem.f6937abefeef"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
solveLinearDiophantineSystem(
    coefficient_matrix: Matrix,
    constants: Expression[],
): Expression[]
```

General integer solution of the rectangular system \(A x = b\), returned as one parametric coordinate expression per column of `A`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_solvelineardiophantinesystem.8fa55d464929"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.solveLinearDiophantineSystem</code></p>

```typescript signature
solveLinearDiophantineSystem(
    coefficient_matrix: Matrix,
    constants: Expression[],
): Expression[]
```

</details>

### stirlingFirstSigned

<a id="entry-presentation_wasm_combinatorics_capability_discrete_mathematics_stirling_first_signed_api_session_stirling_first_signed"></a>
<a id="placement-placement.wasm.wasm_module.module_stirlingfirstsigned.5f73261d260b"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
stirlingFirstSigned(n: Expression, k: Expression): Expression
```

Signed Stirling number of the first kind s(n, k).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_stirlingfirstsigned.08afbe99e971"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.stirlingFirstSigned</code></p>

```typescript signature
stirlingFirstSigned(n: Expression, k: Expression): Expression
```

</details>

### stirlingSecond

<a id="entry-presentation_wasm_combinatorics_capability_discrete_mathematics_stirling_second_api_session_stirling_second"></a>
<a id="placement-placement.wasm.wasm_module.module_stirlingsecond.854182aab42c"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
stirlingSecond(n: Expression, k: Expression): Expression
```

Stirling number of the second kind S(n, k).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_stirlingsecond.3c96654ef70b"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.stirlingSecond</code></p>

```typescript signature
stirlingSecond(n: Expression, k: Expression): Expression
```

</details>

