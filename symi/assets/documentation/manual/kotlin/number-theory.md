# Integer number theory

All functions take and return `Expression` objects holding integer leaves,
so arbitrary precision flows through the existing machinery; passing a
non-integer expression raises. (Exception: `continued_fraction_rational`
also accepts rational leaves; the three symbol functions return plain
machine integers.)

### is_prime

<a id="entry-presentation_kotlin_api_session_is_prime"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_isprime.b0f36c30749a"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun isPrime(argument: UniffiExpression): kotlin.Boolean?
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_isprime.9aed864942c2"></a>
<p class="symi-entry-owner">Expression method: <code>UniffiExpression.isPrime</code></p>

```kotlin signature
fun isPrime(): UniffiTruthValue
```

</details>


Deterministic primality verdict; `None` when the input is outside the
classifier's domain (e.g. not a natural number \(\geq 0\) representation it
handles).

### factor_integer

<a id="entry-presentation_kotlin_api_session_factor_integer"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_factorinteger.0baecae5faa4"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun factorInteger(argument: UniffiExpression): List<UniffiExpressionUnsignedIntegerTuple>
```


Prime factorization as `(prime, multiplicity)` pairs, ascending. Errors on
zero. **Notes:** WASM returns `PrimeFactor` objects with
`prime`/`multiplicity` getters; the sign \(-1\) of a negative input is carried
as a leading `(-1, 1)` factor exactly as the core reports it.

### prime_factor (WASM result class)

### prime

*Not exposed by the Kotlin bindings. Available as [`api::Session::prime`](/symi/rust/number-theory#prime) in Rust.*


### multiplicity

<a id="entry-presentation_kotlin_api_primefactor_multiplicity"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffirootmultiplicity_multiplicity.29f288438545"></a>
<p class="symi-entry-owner">UniffiRootMultiplicity method</p>

```kotlin signature
fun multiplicity(): kotlin.ULong
```


### integer_gcd

<a id="entry-presentation_kotlin_api_session_integer_gcd"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_integergcd.32ddfe367a56"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun integerGcd(
    left: UniffiExpression,
    right: UniffiExpression,
): UniffiExpression
```


Greatest common divisor (non-negative).

### integer_lcm

<a id="entry-presentation_kotlin_api_session_integer_lcm"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_integerlcm.08067ba2d3d5"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun integerLcm(
    left: UniffiExpression,
    right: UniffiExpression,
): UniffiExpression
```


Least common multiple.

### extended_euclidean

<a id="entry-presentation_kotlin_api_session_extended_euclidean"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_extendedeuclidean.70ef9fb35191"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun extendedEuclidean(
    left: UniffiExpression,
    right: UniffiExpression,
): UniffiExpressionExpressionExpressionTuple
```


`(gcd, x, y)` with \(a x + b y = \operatorname{gcd}\). **Notes:** WASM returns a 3-element
array `[gcd, x, y]`.

### modular_power

<a id="entry-presentation_kotlin_api_session_modular_power"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_modularpower.fc439983a127"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun modularPower(
    base: UniffiExpression,
    exponent: UniffiExpression,
    modulus: UniffiExpression,
): UniffiExpression
```


`base^exponent mod modulus` by square-and-multiply; requires positive
modulus and non-negative exponent.

### modular_inverse

<a id="entry-presentation_kotlin_api_session_modular_inverse"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_modularinverse.d53565e1aca8"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun modularInverse(
    value: UniffiExpression,
    modulus: UniffiExpression,
): UniffiExpression
```


Multiplicative inverse of `value` modulo `modulus`; errors when
\(\operatorname{gcd}(\operatorname{value}, \operatorname{modulus}) \ne 1\).

### chinese_remainder

<a id="entry-presentation_kotlin_api_session_chinese_remainder"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_chineseremainder.323db1c3013e"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun chineseRemainder(residuesAndModuli: List<UniffiExpressionExpressionTuple>): UniffiExpression
```


The smallest non-negative solution of the simultaneous congruences
\(x \equiv r_i \pmod{m_i}\). Moduli need not be pairwise coprime; inconsistent systems
raise. **Notes:** WASM passes a flat interleaved array
`[residue_0, modulus_0, ...]`.

### euler_totient

<a id="entry-presentation_kotlin_api_session_euler_totient"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_eulertotient.ea56578bd5ba"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun eulerTotient(value: UniffiExpression): UniffiExpression
```


Euler's \(\varphi(n)\); requires a positive integer.

### mobius

<a id="entry-presentation_kotlin_api_session_mobius"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_mobius.2e4d134e5ec4"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun mobius(argument: UniffiExpression): UniffiExpression
```


Möbius \(\mu(n) \in \{-1, 0, 1\}\); requires a positive integer.

### divisor_count

<a id="entry-presentation_kotlin_api_session_divisor_count"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_divisorcount.fbea9d0be437"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun divisorCount(argument: UniffiExpression): UniffiExpression
```


Number of positive divisors \(\tau(n)\).

### divisor_sigma

<a id="entry-presentation_kotlin_api_session_divisor_sigma"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_divisorsigma.729d0f05781a"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun divisorSigma(
    argument: UniffiExpression,
    power: kotlin.ULong,
): UniffiExpression
```


Sum of the `power`-th powers of the positive divisors \(\sigma_{\mathit{power}}(n)\);
`power = 0` gives `divisor_count`, `power = 1` the divisor sum.

### jacobi_symbol

<a id="entry-presentation_kotlin_api_session_jacobi_symbol"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_jacobisymbol.c98c9bdec1d6"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun jacobiSymbol(
    numerator: UniffiExpression,
    denominator: UniffiExpression,
): kotlin.Long
```


The Jacobi symbol \((n/d) \in \{-1, 0, 1\}\); the denominator must be a positive odd
integer.

### legendre_symbol

<a id="entry-presentation_kotlin_api_session_legendre_symbol"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_legendresymbol.7bbe8ab3835d"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun legendreSymbol(
    numerator: UniffiExpression,
    prime: UniffiExpression,
): kotlin.Long
```


The Legendre symbol; the second argument must be an odd prime.

### kronecker_symbol

<a id="entry-presentation_kotlin_api_session_kronecker_symbol"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_kroneckersymbol.a80ed9239c66"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun kroneckerSymbol(
    numerator: UniffiExpression,
    denominator: UniffiExpression,
): kotlin.Long
```


The Kronecker extension of the Jacobi symbol to all integer denominators.

### integer_square_root

<a id="entry-presentation_kotlin_api_session_integer_square_root"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_integersquareroot.bf71f22139d3"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun integerSquareRoot(argument: UniffiExpression): UniffiExpression
```


\(\lfloor\sqrt{n}\rfloor\) for non-negative n.

### integer_nth_root

<a id="entry-presentation_kotlin_api_session_integer_nth_root"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_integernthroot.fd71e8e6f8af"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun integerNthRoot(
    argument: UniffiExpression,
    rootIndex: kotlin.ULong,
): UniffiExpression
```


\(\lfloor n^{1/\mathit{root\_index}}\rfloor\); odd indices accept negative n. Errors when no real root
exists (even index, negative n).

### continued_fraction_rational

<a id="entry-presentation_kotlin_api_session_continued_fraction_rational"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_continuedfractionrational.5a71df43a4f6"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun continuedFractionRational(value: UniffiExpression): List<UniffiExpression>
```


Terminating continued-fraction expansion `[a0; a1, a2, ...]` of an integer
or rational expression leaf.

### continued_fraction_quadratic_irrational

<a id="entry-presentation_kotlin_api_session_continued_fraction_quadratic_irrational"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_continuedfractionquadraticirrational.feb35840b853"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun continuedFractionQuadraticIrrational(value: UniffiExpression): UniffiQuadraticContinuedFractionExpansion
```


Eventually-periodic expansion of \(\sqrt{d}\) for a non-negative integer d, returned
as `(initial_terms, periodic_part)`. Perfect squares give a one-element
initial part and an empty period. **Notes:** WASM returns a
`QuadraticContinuedFractionExpansion` object with
`initial_terms`/`periodic_terms` getters.

### quadratic_continued_fraction_expansion (WASM result class)

### initial_terms

<a id="entry-presentation_kotlin_api_quadraticcontinuedfractionexpansion_initial_terms"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiquadraticcontinuedfractionexpansion_initialterms.896194d5448d"></a>
<p class="symi-entry-owner">UniffiQuadraticContinuedFractionExpansion method</p>

```kotlin signature
fun initialTerms(): List<UniffiExpression>
```

The terms preceding the periodic part of the expansion.

### periodic_terms

<a id="entry-presentation_kotlin_api_quadraticcontinuedfractionexpansion_periodic_terms"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiquadraticcontinuedfractionexpansion_periodicterms.9cb7dc4ae611"></a>
<p class="symi-entry-owner">UniffiQuadraticContinuedFractionExpansion method</p>

```kotlin signature
fun periodicTerms(): List<UniffiExpression>
```

The repeating terms of the expansion.

## Diophantine equations

The two supported Diophantine subclasses are linear
equations via the extended Euclidean algorithm and Pell's equation via the
continued fraction of \(\sqrt{D}\). General Diophantine solving is undecidable
(Matiyasevich–Robinson–Davis–Putnam) and is out of scope; the solvers return
exact integers and never guess.

### solve_linear_diophantine

<a id="entry-presentation_kotlin_api_session_solve_linear_diophantine"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_solvelineardiophantine.56568b77374c"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun solveLinearDiophantine(
    coefficients: List<UniffiExpression>,
    constant: UniffiExpression,
): List<UniffiExpression>
```


General integer solution of \(a_1 x_1 + \ldots + a_n x_n = c\), returned as the parametric
coordinates — one expression per unknown, affine in fresh integer parameter
symbols (`diophantine_parameter_k`) shared across the coordinates so that
choosing any integers for the parameters yields a solution tuple. The list is
**empty** when the equation has no integer solution (\(\gcd(a_i) \nmid c\)). All
coefficients and the constant must be integer expression leaves.

### solve_linear_diophantine_system

<a id="entry-presentation_kotlin_api_session_solve_linear_diophantine_system"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_solvelineardiophantinesystem.2b0dfecb3ae3"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun solveLinearDiophantineSystem(
    coefficientMatrix: UniffiMatrix,
    constants: List<UniffiExpression>,
): List<UniffiExpression>
```


General integer solution of the rectangular system \(A x = b\), returned as one
parametric coordinate expression per column of `A`. The coordinates share fresh
integer parameter symbols and describe the complete affine integer lattice of
solutions. The list is empty when the system has no integer solution, an entry is
not an integer expression leaf, or the dimensions do not agree.

### solve_pell

<a id="entry-presentation_kotlin_api_session_solve_pell"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_solvepell.dc24f92dcc59"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun solvePell(radicand: UniffiExpression): List<UniffiExpression>
```


Fundamental solution `[x, y]` of \(x^2 - D y^2 = 1\) for a positive non-square
integer `D`, the smallest positive solution from which all others are generated
by the recurrence \(x_{k+1} = x_1 x_k + D y_1 y_k\), \(y_{k+1} = x_1 y_k + y_1 x_k\). The list is
empty when `D` is a perfect square or non-positive (no nontrivial fundamental
solution).

### solve_negative_pell

<a id="entry-presentation_kotlin_api_session_solve_negative_pell"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_solvenegativepell.cf4394f0c38b"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun solveNegativePell(radicand: UniffiExpression): List<UniffiExpression>
```


Fundamental solution `[x, y]` of the negative-Pell equation \(x^2 - D y^2 = -1\)
when it is solvable (exactly when the continued fraction of \(\sqrt{D}\) has odd period),
and an empty list otherwise.

### pell_solutions

<a id="entry-presentation_kotlin_api_session_pell_solutions"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_pellsolutions.220f97b2dcda"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun pellSolutions(
    radicand: UniffiExpression,
    count: kotlin.ULong,
): List<UniffiExpression>
```


The first `count` positive solutions of \(x^2 - D y^2 = 1\), materialised from the
fundamental solution by the Pell recurrence and returned as a flat list
\([x_1, y_1, x_2, y_2, \ldots]\). Empty when `D` has no fundamental solution.

## Example


## Additional API

### RootMultiplicity

#### RootMultiplicity.root

<a id="entry-presentation_kotlin_api_rootmultiplicity_root"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffirootmultiplicity_root.0c31d2602fb2"></a>
<p class="symi-entry-owner">UniffiRootMultiplicity method</p>

```kotlin signature
fun root(): UniffiExpression
```

Principal n-th root, stored as `x^(1/n)`.

