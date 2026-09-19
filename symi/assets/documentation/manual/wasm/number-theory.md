# Integer number theory

All functions take and return `Expression` objects holding integer leaves,
so arbitrary precision flows through the existing machinery; passing a
non-integer expression raises. (Exception: `continued_fraction_rational`
also accepts rational leaves; the three symbol functions return plain
machine integers.)

### is_prime

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.is_prime`](/symi/python/number-theory#is_prime) in Python, [`UniffiExpression.isPrime`](/symi/kotlin/number-theory#is_prime) in Kotlin, [`UniffiExpression.isPrime`](/symi/swift/number-theory#is_prime) in Swift, [`api::Expression::is_prime`](/symi/rust/number-theory#is_prime) in Rust.*


Deterministic primality verdict; `None` when the input is outside the
classifier's domain (e.g. not a natural number \(\geq 0\) representation it
handles).

### factor_integer

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.factor_integer`](/symi/python/number-theory#factor_integer) in Python, [`UniffiSession.factorInteger`](/symi/kotlin/number-theory#factor_integer) in Kotlin, [`UniffiSession.factorInteger`](/symi/swift/number-theory#factor_integer) in Swift, [`api::Session::factor_integer`](/symi/rust/number-theory#factor_integer) in Rust.*


Prime factorization as `(prime, multiplicity)` pairs, ascending. Errors on
zero. **Notes:** WASM returns `PrimeFactor` objects with
`prime`/`multiplicity` getters; the sign \(-1\) of a negative input is carried
as a leading `(-1, 1)` factor exactly as the core reports it.

### prime_factor (WASM result class)

### prime

<a id="entry-presentation_wasm_number_theory_capability_discrete_mathematics_prime_api_results_primefactor_prime"></a>
<a id="placement-placement.wasm.wasm_class.primefactor_prime.9007ad578131"></a>
<p class="symi-entry-owner">PrimeFactor property</p>

```typescript signature
readonly prime: Expression
```


### multiplicity

### integer_gcd

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.integer_gcd`](/symi/python/number-theory#integer_gcd) in Python, [`UniffiSession.integerGcd`](/symi/kotlin/number-theory#integer_gcd) in Kotlin, [`UniffiSession.integerGcd`](/symi/swift/number-theory#integer_gcd) in Swift, [`api::Session::integer_gcd`](/symi/rust/number-theory#integer_gcd) in Rust.*


Greatest common divisor (non-negative).

### integer_lcm

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.integer_lcm`](/symi/python/number-theory#integer_lcm) in Python, [`UniffiSession.integerLcm`](/symi/kotlin/number-theory#integer_lcm) in Kotlin, [`UniffiSession.integerLcm`](/symi/swift/number-theory#integer_lcm) in Swift, [`api::Session::integer_lcm`](/symi/rust/number-theory#integer_lcm) in Rust.*


Least common multiple.

### extended_euclidean

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.extended_euclidean`](/symi/python/number-theory#extended_euclidean) in Python, [`UniffiSession.extendedEuclidean`](/symi/kotlin/number-theory#extended_euclidean) in Kotlin, [`UniffiSession.extendedEuclidean`](/symi/swift/number-theory#extended_euclidean) in Swift, [`api::number_theory::Session::extended_euclidean`](/symi/rust/number-theory#extended_euclidean) in Rust.*


`(gcd, x, y)` with \(a x + b y = \operatorname{gcd}\). **Notes:** WASM returns a 3-element
array `[gcd, x, y]`.

### modular_power

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.modular_power`](/symi/python/number-theory#modular_power) in Python, [`UniffiSession.modularPower`](/symi/kotlin/number-theory#modular_power) in Kotlin, [`UniffiSession.modularPower`](/symi/swift/number-theory#modular_power) in Swift, [`api::number_theory::Session::modular_power`](/symi/rust/number-theory#modular_power) in Rust.*


`base^exponent mod modulus` by square-and-multiply; requires positive
modulus and non-negative exponent.

### modular_inverse

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.modular_inverse`](/symi/python/number-theory#modular_inverse) in Python, [`UniffiSession.modularInverse`](/symi/kotlin/number-theory#modular_inverse) in Kotlin, [`UniffiSession.modularInverse`](/symi/swift/number-theory#modular_inverse) in Swift, [`api::number_theory::Session::modular_inverse`](/symi/rust/number-theory#modular_inverse) in Rust.*


Multiplicative inverse of `value` modulo `modulus`; errors when
\(\operatorname{gcd}(\operatorname{value}, \operatorname{modulus}) \ne 1\).

### chinese_remainder

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.chinese_remainder`](/symi/python/number-theory#chinese_remainder) in Python, [`UniffiSession.chineseRemainder`](/symi/kotlin/number-theory#chinese_remainder) in Kotlin, [`UniffiSession.chineseRemainder`](/symi/swift/number-theory#chinese_remainder) in Swift, [`api::number_theory::Session::chinese_remainder`](/symi/rust/number-theory#chinese_remainder) in Rust.*


The smallest non-negative solution of the simultaneous congruences
\(x \equiv r_i \pmod{m_i}\). Moduli need not be pairwise coprime; inconsistent systems
raise. **Notes:** WASM passes a flat interleaved array
`[residue_0, modulus_0, ...]`.

### euler_totient

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.euler_totient`](/symi/python/number-theory#euler_totient) in Python, [`UniffiSession.eulerTotient`](/symi/kotlin/number-theory#euler_totient) in Kotlin, [`UniffiSession.eulerTotient`](/symi/swift/number-theory#euler_totient) in Swift, [`api::number_theory::Session::euler_totient`](/symi/rust/number-theory#euler_totient) in Rust.*


Euler's \(\varphi(n)\); requires a positive integer.

### mobius

<a id="entry-presentation_wasm_number_theory_capability_discrete_mathematics_mobius_api_session_mobius"></a>
<a id="placement-placement.wasm.wasm_module.module_mobius.eb52d1e05d93"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
mobius(n: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_mobius.d9f853017575"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.mobius</code></p>

```typescript signature
mobius(n: Expression): Expression
```

</details>


Möbius \(\mu(n) \in \{-1, 0, 1\}\); requires a positive integer.

### divisor_count

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.divisor_count`](/symi/python/number-theory#divisor_count) in Python, [`UniffiSession.divisorCount`](/symi/kotlin/number-theory#divisor_count) in Kotlin, [`UniffiSession.divisorCount`](/symi/swift/number-theory#divisor_count) in Swift, [`api::Session::divisor_count`](/symi/rust/number-theory#divisor_count) in Rust.*


Number of positive divisors \(\tau(n)\).

### divisor_sigma

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.divisor_sigma`](/symi/python/number-theory#divisor_sigma) in Python, [`UniffiSession.divisorSigma`](/symi/kotlin/number-theory#divisor_sigma) in Kotlin, [`UniffiSession.divisorSigma`](/symi/swift/number-theory#divisor_sigma) in Swift, [`api::Session::divisor_sigma`](/symi/rust/number-theory#divisor_sigma) in Rust.*


Sum of the `power`-th powers of the positive divisors \(\sigma_{\mathit{power}}(n)\);
`power = 0` gives `divisor_count`, `power = 1` the divisor sum.

### jacobi_symbol

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.jacobi_symbol`](/symi/python/number-theory#jacobi_symbol) in Python, [`UniffiSession.jacobiSymbol`](/symi/kotlin/number-theory#jacobi_symbol) in Kotlin, [`UniffiSession.jacobiSymbol`](/symi/swift/number-theory#jacobi_symbol) in Swift, [`api::Session::jacobi_symbol`](/symi/rust/number-theory#jacobi_symbol) in Rust.*


The Jacobi symbol \((n/d) \in \{-1, 0, 1\}\); the denominator must be a positive odd
integer.

### legendre_symbol

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.legendre_symbol`](/symi/python/number-theory#legendre_symbol) in Python, [`UniffiSession.legendreSymbol`](/symi/kotlin/number-theory#legendre_symbol) in Kotlin, [`UniffiSession.legendreSymbol`](/symi/swift/number-theory#legendre_symbol) in Swift, [`api::Session::legendre_symbol`](/symi/rust/number-theory#legendre_symbol) in Rust.*


The Legendre symbol; the second argument must be an odd prime.

### kronecker_symbol

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.kronecker_symbol`](/symi/python/number-theory#kronecker_symbol) in Python, [`UniffiSession.kroneckerSymbol`](/symi/kotlin/number-theory#kronecker_symbol) in Kotlin, [`UniffiSession.kroneckerSymbol`](/symi/swift/number-theory#kronecker_symbol) in Swift, [`api::Session::kronecker_symbol`](/symi/rust/number-theory#kronecker_symbol) in Rust.*


The Kronecker extension of the Jacobi symbol to all integer denominators.

### integer_square_root

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.integer_square_root`](/symi/python/number-theory#integer_square_root) in Python, [`UniffiSession.integerSquareRoot`](/symi/kotlin/number-theory#integer_square_root) in Kotlin, [`UniffiSession.integerSquareRoot`](/symi/swift/number-theory#integer_square_root) in Swift, [`api::Session::integer_square_root`](/symi/rust/number-theory#integer_square_root) in Rust.*


\(\lfloor\sqrt{n}\rfloor\) for non-negative n.

### integer_nth_root

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.integer_nth_root`](/symi/python/number-theory#integer_nth_root) in Python, [`UniffiSession.integerNthRoot`](/symi/kotlin/number-theory#integer_nth_root) in Kotlin, [`UniffiSession.integerNthRoot`](/symi/swift/number-theory#integer_nth_root) in Swift, [`api::Session::integer_nth_root`](/symi/rust/number-theory#integer_nth_root) in Rust.*


\(\lfloor n^{1/\mathit{root\_index}}\rfloor\); odd indices accept negative n. Errors when no real root
exists (even index, negative n).

### continued_fraction_rational

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.continued_fraction_rational`](/symi/python/number-theory#continued_fraction_rational) in Python, [`UniffiSession.continuedFractionRational`](/symi/kotlin/number-theory#continued_fraction_rational) in Kotlin, [`UniffiSession.continuedFractionRational`](/symi/swift/number-theory#continued_fraction_rational) in Swift, [`api::number_theory::Session::continued_fraction_rational`](/symi/rust/number-theory#continued_fraction_rational) in Rust.*


Terminating continued-fraction expansion `[a0; a1, a2, ...]` of an integer
or rational expression leaf.

### continued_fraction_quadratic_irrational

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.continued_fraction_quadratic_irrational`](/symi/python/number-theory#continued_fraction_quadratic_irrational) in Python, [`UniffiSession.continuedFractionQuadraticIrrational`](/symi/kotlin/number-theory#continued_fraction_quadratic_irrational) in Kotlin, [`UniffiSession.continuedFractionQuadraticIrrational`](/symi/swift/number-theory#continued_fraction_quadratic_irrational) in Swift, [`api::number_theory::Session::continued_fraction_quadratic_irrational`](/symi/rust/number-theory#continued_fraction_quadratic_irrational) in Rust.*


Eventually-periodic expansion of \(\sqrt{d}\) for a non-negative integer d, returned
as `(initial_terms, periodic_part)`. Perfect squares give a one-element
initial part and an empty period. **Notes:** WASM returns a
`QuadraticContinuedFractionExpansion` object with
`initial_terms`/`periodic_terms` getters.

### quadratic_continued_fraction_expansion (WASM result class)

### initial_terms

*Not exposed by the WASM / JavaScript bindings. Available as [`UniffiQuadraticContinuedFractionExpansion.initialTerms`](/symi/kotlin/number-theory#initial_terms) in Kotlin, [`UniffiQuadraticContinuedFractionExpansion.initialTerms`](/symi/swift/number-theory#initial_terms) in Swift, [`api::results::QuadraticContinuedFractionExpansion::initial_terms`](/symi/rust/number-theory#initial_terms) in Rust.*


### periodic_terms

*Not exposed by the WASM / JavaScript bindings. Available as [`UniffiQuadraticContinuedFractionExpansion.periodicTerms`](/symi/kotlin/number-theory#periodic_terms) in Kotlin, [`UniffiQuadraticContinuedFractionExpansion.periodicTerms`](/symi/swift/number-theory#periodic_terms) in Swift, [`api::results::QuadraticContinuedFractionExpansion::periodic_terms`](/symi/rust/number-theory#periodic_terms) in Rust.*


## Diophantine equations

The two supported Diophantine subclasses are linear
equations via the extended Euclidean algorithm and Pell's equation via the
continued fraction of \(\sqrt{D}\). General Diophantine solving is undecidable
(Matiyasevich–Robinson–Davis–Putnam) and is out of scope; the solvers return
exact integers and never guess.

### solve_linear_diophantine

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.solve_linear_diophantine`](/symi/python/number-theory#solve_linear_diophantine) in Python, [`UniffiSession.solveLinearDiophantine`](/symi/kotlin/number-theory#solve_linear_diophantine) in Kotlin, [`UniffiSession.solveLinearDiophantine`](/symi/swift/number-theory#solve_linear_diophantine) in Swift, [`api::number_theory::Session::solve_linear_diophantine`](/symi/rust/number-theory#solve_linear_diophantine) in Rust.*


General integer solution of \(a_1 x_1 + \ldots + a_n x_n = c\), returned as the parametric
coordinates — one expression per unknown, affine in fresh integer parameter
symbols (`diophantine_parameter_k`) shared across the coordinates so that
choosing any integers for the parameters yields a solution tuple. The list is
**empty** when the equation has no integer solution (\(\gcd(a_i) \nmid c\)). All
coefficients and the constant must be integer expression leaves.

### solve_linear_diophantine_system

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.solve_linear_diophantine_system`](/symi/python/number-theory#solve_linear_diophantine_system) in Python, [`UniffiSession.solveLinearDiophantineSystem`](/symi/kotlin/number-theory#solve_linear_diophantine_system) in Kotlin, [`UniffiSession.solveLinearDiophantineSystem`](/symi/swift/number-theory#solve_linear_diophantine_system) in Swift, [`api::number_theory::Session::solve_linear_diophantine_system`](/symi/rust/number-theory#solve_linear_diophantine_system) in Rust.*


General integer solution of the rectangular system \(A x = b\), returned as one
parametric coordinate expression per column of `A`. The coordinates share fresh
integer parameter symbols and describe the complete affine integer lattice of
solutions. The list is empty when the system has no integer solution, an entry is
not an integer expression leaf, or the dimensions do not agree.

### solve_pell

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.solve_pell`](/symi/python/number-theory#solve_pell) in Python, [`UniffiSession.solvePell`](/symi/kotlin/number-theory#solve_pell) in Kotlin, [`UniffiSession.solvePell`](/symi/swift/number-theory#solve_pell) in Swift, [`api::number_theory::Session::solve_pell`](/symi/rust/number-theory#solve_pell) in Rust.*


Fundamental solution `[x, y]` of \(x^2 - D y^2 = 1\) for a positive non-square
integer `D`, the smallest positive solution from which all others are generated
by the recurrence \(x_{k+1} = x_1 x_k + D y_1 y_k\), \(y_{k+1} = x_1 y_k + y_1 x_k\). The list is
empty when `D` is a perfect square or non-positive (no nontrivial fundamental
solution).

### solve_negative_pell

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.solve_negative_pell`](/symi/python/number-theory#solve_negative_pell) in Python, [`UniffiSession.solveNegativePell`](/symi/kotlin/number-theory#solve_negative_pell) in Kotlin, [`UniffiSession.solveNegativePell`](/symi/swift/number-theory#solve_negative_pell) in Swift, [`api::number_theory::Session::solve_negative_pell`](/symi/rust/number-theory#solve_negative_pell) in Rust.*


Fundamental solution `[x, y]` of the negative-Pell equation \(x^2 - D y^2 = -1\)
when it is solvable (exactly when the continued fraction of \(\sqrt{D}\) has odd period),
and an empty list otherwise.

### pell_solutions

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.pell_solutions`](/symi/python/number-theory#pell_solutions) in Python, [`UniffiSession.pellSolutions`](/symi/kotlin/number-theory#pell_solutions) in Kotlin, [`UniffiSession.pellSolutions`](/symi/swift/number-theory#pell_solutions) in Swift, [`api::number_theory::Session::pell_solutions`](/symi/rust/number-theory#pell_solutions) in Rust.*


The first `count` positive solutions of \(x^2 - D y^2 = 1\), materialised from the
fundamental solution by the Pell recurrence and returned as a flat list
\([x_1, y_1, x_2, y_2, \ldots]\). Empty when `D` has no fundamental solution.

## Example

This family is not part of the recommended JavaScript facade in this release. Call it through the generated `symi.raw` layer, whose entries are listed with their wasm-bindgen signatures above, and read [Migration](migration.md) for the ownership rules that apply there.


## Additional API

### divisorCount

<a id="entry-presentation_wasm_number_theory_capability_discrete_mathematics_divisor_count_api_session_divisor_count"></a>
<a id="placement-placement.wasm.wasm_module.module_divisorcount.3d6aaad82ca7"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
divisorCount(n: Expression): Expression
```

Number of positive divisors \(\tau(n)\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_divisorcount.51c87db41fb4"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.divisorCount</code></p>

```typescript signature
divisorCount(n: Expression): Expression
```

</details>

### divisorSigma

<a id="entry-presentation_wasm_number_theory_capability_discrete_mathematics_divisor_sigma_api_session_divisor_sigma"></a>
<a id="placement-placement.wasm.wasm_module.module_divisorsigma.2a53ddc533d7"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
divisorSigma(n: Expression, power: number): Expression
```

Sum of the `power`-th powers of the positive divisors \(\sigma_{\mathit{power}}(n)\); `power = 0` gives `divisor_count`, `power = 1` the divisor sum.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_divisorsigma.189d83e734c5"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.divisorSigma</code></p>

```typescript signature
divisorSigma(n: Expression, power: number): Expression
```

</details>

### factorInteger

<a id="entry-presentation_wasm_number_theory_capability_discrete_mathematics_factor_integer_api_session_factor_integer"></a>
<a id="placement-placement.wasm.wasm_module.module_factorinteger.7be59b319dec"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
factorInteger(n: Expression): PrimeFactor[]
```

Prime factorization as `(prime, multiplicity)` pairs, ascending. Errors on zero. Notes: WASM returns `prime_factor` objects with `prime`/`multiplicity` getters; the sign \(-1\) of a negative input is carried as a leading `(-1, 1)` factor exactly as the core reports it.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_factorinteger.3224abb06726"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.factorInteger</code></p>

```typescript signature
factorInteger(n: Expression): PrimeFactor[]
```

</details>

### integerGcd

<a id="entry-presentation_wasm_number_theory_capability_discrete_mathematics_integer_gcd_api_session_integer_gcd"></a>
<a id="placement-placement.wasm.wasm_module.module_integergcd.880435e4defa"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
integerGcd(a: Expression, b: Expression): Expression
```

Greatest common divisor (non-negative).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_integergcd.dd986d1b30ec"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.integerGcd</code></p>

```typescript signature
integerGcd(a: Expression, b: Expression): Expression
```

</details>

### integerLcm

<a id="entry-presentation_wasm_number_theory_capability_discrete_mathematics_integer_lcm_api_session_integer_lcm"></a>
<a id="placement-placement.wasm.wasm_module.module_integerlcm.da4013a527d4"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
integerLcm(a: Expression, b: Expression): Expression
```

Least common multiple.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_integerlcm.cbbcb09e9de0"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.integerLcm</code></p>

```typescript signature
integerLcm(a: Expression, b: Expression): Expression
```

</details>

### integerNthRoot

<a id="entry-presentation_wasm_number_theory_capability_discrete_mathematics_integer_nth_root_api_session_integer_nth_root"></a>
<a id="placement-placement.wasm.wasm_module.module_integernthroot.93c0396df8ee"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
integerNthRoot(n: Expression, root_index: bigint): Expression
```

\(\lfloor n^{1/\mathit{root\_index}}\rfloor\); odd indices accept negative n. Errors when no real root exists (even index, negative n).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_integernthroot.937d47a1b8bd"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.integerNthRoot</code></p>

```typescript signature
integerNthRoot(n: Expression, root_index: bigint): Expression
```

</details>

### integerSquareRoot

<a id="entry-presentation_wasm_number_theory_capability_discrete_mathematics_integer_square_root_api_session_integer_square_root"></a>
<a id="placement-placement.wasm.wasm_module.module_integersquareroot.061948d4b3be"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
integerSquareRoot(n: Expression): Expression
```

\(\lfloor\sqrt{n}\rfloor\) for non-negative n.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_integersquareroot.a1377fb2624b"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.integerSquareRoot</code></p>

```typescript signature
integerSquareRoot(n: Expression): Expression
```

</details>

### isPrime

<a id="entry-presentation_wasm_number_theory_capability_discrete_mathematics_is_prime_api_session_is_prime"></a>
<a id="placement-placement.wasm.wasm_module.module_isprime.2c60d7745885"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
isPrime(n: Expression): boolean | undefined
```

Deterministic primality verdict; `None` when the input is outside the classifier's domain (e.g. not a natural number \(\geq 0\) representation it handles).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_isprime.8164fbb41a14"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.isPrime</code></p>

```typescript signature
isPrime(n: Expression): boolean | undefined
```

</details>

### isPrime

<a id="entry-presentation_wasm_number_theory_capability_discrete_mathematics_is_prime_api_expression_is_prime"></a>
<a id="placement-placement.wasm.javascript_facade.expression_isprime.988dd0cf28d7"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
isPrime(): boolean | null
```

Whether the expression is known to be prime.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_isprime.bea4c3dd89fc"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.isPrime</code></p>

```typescript signature
isPrime(): boolean | undefined
```

</details>

### multiplicity

<a id="entry-presentation_wasm_number_theory_capability_discrete_mathematics_multiplicity_api_results_primefactor_multiplicity"></a>
<a id="placement-placement.wasm.wasm_class.primefactor_multiplicity.97bc281ba687"></a>
<p class="symi-entry-owner">PrimeFactor property</p>

```typescript signature
readonly multiplicity: number
```

The exponent the prime carries in the factorization.

### multiplicity

<a id="entry-presentation_wasm_number_theory_capability_discrete_mathematics_multiplicity_api_results_rootmultiplicity_multiplicity"></a>
<a id="placement-placement.wasm.wasm_class.rootmultiplicity_multiplicity.38126e35ea48"></a>
<p class="symi-entry-owner">RootMultiplicity property</p>

```typescript signature
readonly multiplicity: number
```

The multiplicity of the root.

### pellSolutions

<a id="entry-presentation_wasm_number_theory_capability_discrete_mathematics_pell_solutions_api_number_theory_session_pell_solutions"></a>
<a id="placement-placement.wasm.wasm_module.module_pellsolutions.746cfa175fdd"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
pellSolutions(radicand: Expression, count: number): Expression[]
```

The first `count` positive solutions of \(x^2 - D y^2 = 1\), materialised from the fundamental solution by the Pell recurrence and returned as a flat list \([x_1, y_1, x_2, y_2, \ldots]\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_pellsolutions.91be0218332c"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.pellSolutions</code></p>

```typescript signature
pellSolutions(radicand: Expression, count: number): Expression[]
```

</details>

### solveNegativePell

<a id="entry-presentation_wasm_number_theory_capability_discrete_mathematics_solve_negative_pell_api_number_theory_session_solve_negative_pell"></a>
<a id="placement-placement.wasm.wasm_module.module_solvenegativepell.de4fc4dc84c0"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
solveNegativePell(radicand: Expression): Expression[]
```

Fundamental solution `[x, y]` of the negative-Pell equation \(x^2 - D y^2 = -1\) when it is solvable (exactly when the continued fraction of \(\sqrt{D}\) has odd period), and an empty list otherwise.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_solvenegativepell.eaf011c3b227"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.solveNegativePell</code></p>

```typescript signature
solveNegativePell(radicand: Expression): Expression[]
```

</details>

### solvePell

<a id="entry-presentation_wasm_number_theory_capability_discrete_mathematics_solve_pell_api_number_theory_session_solve_pell"></a>
<a id="placement-placement.wasm.wasm_module.module_solvepell.e3e4a8d13447"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
solvePell(radicand: Expression): Expression[]
```

Fundamental solution `[x, y]` of \(x^2 - D y^2 = 1\) for a positive non-square integer `D`, the smallest positive solution from which all others are generated by the recurrence \(x_{k+1} = x_1 x_k + D y_1 y_k\), \(y_{k+1} = x_1 y_k + y_1 x_k\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_solvepell.259181184189"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.solvePell</code></p>

```typescript signature
solvePell(radicand: Expression): Expression[]
```

</details>

