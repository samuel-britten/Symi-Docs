# Integer number theory

All functions take and return `Expression` objects holding integer leaves,
so arbitrary precision flows through the existing machinery; passing a
non-integer expression raises. (Exception: `continued_fraction_rational`
also accepts rational leaves; the three symbol functions return plain
machine integers.)

### is_prime

<a id="entry-presentation_python_api_session_is_prime"></a>
<a id="placement-placement.python.python_module.module_is_prime.267824491e40"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
is_prime(n: ExpressionLike) -> Optional[bool]
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_is_prime.2e068135d74b"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.is_prime</code></p>

```python signature
is_prime(n: ExpressionLike) -> Optional[bool]
```

<a id="placement-placement.python.python_class.expression_is_prime.67e50f5358ce"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.is_prime</code></p>

```python signature
is_prime() -> Optional[bool]
```

</details>


Deterministic primality verdict; `None` when the input is outside the
classifier's domain (e.g. not a natural number \(\geq 0\) representation it
handles).

### factor_integer

<a id="entry-presentation_python_api_session_factor_integer"></a>
<a id="placement-placement.python.python_module.module_factor_integer.cb82c971d037"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
factor_integer(n: ExpressionLike) -> list[tuple[Expression, int]]
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_factor_integer.085954d7463a"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.factor_integer</code></p>

```python signature
factor_integer(n: ExpressionLike) -> list[tuple[Expression, int]]
```

</details>


Prime factorization as `(prime, multiplicity)` pairs, ascending. Errors on
zero. **Notes:** WASM returns `PrimeFactor` objects with
`prime`/`multiplicity` getters; the sign \(-1\) of a negative input is carried
as a leading `(-1, 1)` factor exactly as the core reports it.

### prime_factor (WASM result class)

### prime

*Not exposed by the Python bindings. Available as [`api::Session::prime`](/symi/rust/number-theory#prime) in Rust.*


### multiplicity

*Not exposed by the Python bindings. Available as [`UniffiRootMultiplicity.multiplicity`](/symi/kotlin/number-theory#multiplicity) in Kotlin, [`UniffiRootMultiplicity.multiplicity`](/symi/swift/number-theory#multiplicity) in Swift, [`api::results::PrimeFactor::multiplicity`](/symi/rust/number-theory#multiplicity) in Rust.*


### integer_gcd

<a id="entry-presentation_python_api_session_integer_gcd"></a>
<a id="placement-placement.python.python_module.module_integer_gcd.231de115dd56"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
integer_gcd(a: ExpressionLike, b: ExpressionLike) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_integer_gcd.f3d856dce62b"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.integer_gcd</code></p>

```python signature
integer_gcd(a: ExpressionLike, b: ExpressionLike) -> Expression
```

</details>


Greatest common divisor (non-negative).

### integer_lcm

<a id="entry-presentation_python_api_session_integer_lcm"></a>
<a id="placement-placement.python.python_module.module_integer_lcm.4761d486032c"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
integer_lcm(a: ExpressionLike, b: ExpressionLike) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_integer_lcm.c26747e79a2c"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.integer_lcm</code></p>

```python signature
integer_lcm(a: ExpressionLike, b: ExpressionLike) -> Expression
```

</details>


Least common multiple.

### extended_euclidean

<a id="entry-presentation_python_api_session_extended_euclidean"></a>
<a id="placement-placement.python.python_module.module_extended_euclidean.3ff42fc31d43"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
extended_euclidean(
    a: ExpressionLike,
    b: ExpressionLike,
) -> tuple[Expression, Expression, Expression]
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_extended_euclidean.1f012fd73085"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.extended_euclidean</code></p>

```python signature
extended_euclidean(
    a: ExpressionLike,
    b: ExpressionLike,
) -> tuple[Expression, Expression, Expression]
```

</details>


`(gcd, x, y)` with \(a x + b y = \operatorname{gcd}\). **Notes:** WASM returns a 3-element
array `[gcd, x, y]`.

### modular_power

<a id="entry-presentation_python_api_session_modular_power"></a>
<a id="placement-placement.python.python_module.module_modular_power.1505cbbc3865"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
modular_power(
    base: ExpressionLike,
    exponent: ExpressionLike,
    modulus: ExpressionLike,
) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_modular_power.12c8754b0333"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.modular_power</code></p>

```python signature
modular_power(
    base: ExpressionLike,
    exponent: ExpressionLike,
    modulus: ExpressionLike,
) -> Expression
```

</details>


`base^exponent mod modulus` by square-and-multiply; requires positive
modulus and non-negative exponent.

### modular_inverse

<a id="entry-presentation_python_api_session_modular_inverse"></a>
<a id="placement-placement.python.python_module.module_modular_inverse.2972f88b7411"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
modular_inverse(
    value: ExpressionLike,
    modulus: ExpressionLike,
) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_modular_inverse.eb9b0277dc09"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.modular_inverse</code></p>

```python signature
modular_inverse(
    value: ExpressionLike,
    modulus: ExpressionLike,
) -> Expression
```

</details>


Multiplicative inverse of `value` modulo `modulus`; errors when
\(\operatorname{gcd}(\operatorname{value}, \operatorname{modulus}) \ne 1\).

### chinese_remainder

<a id="entry-presentation_python_api_session_chinese_remainder"></a>
<a id="placement-placement.python.python_module.module_chinese_remainder.c5672ded2bce"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
chinese_remainder(residues_and_moduli: Iterable[tuple[ExpressionLike, ExpressionLike]]) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_chinese_remainder.7ec8d6a4e123"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.chinese_remainder</code></p>

```python signature
chinese_remainder(residues_and_moduli: Iterable[tuple[ExpressionLike, ExpressionLike]]) -> Expression
```

</details>


The smallest non-negative solution of the simultaneous congruences
\(x \equiv r_i \pmod{m_i}\). Moduli need not be pairwise coprime; inconsistent systems
raise. **Notes:** WASM passes a flat interleaved array
`[residue_0, modulus_0, ...]`.

### euler_totient

<a id="entry-presentation_python_api_session_euler_totient"></a>
<a id="placement-placement.python.python_module.module_euler_totient.3a7b17b90a02"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
euler_totient(n: ExpressionLike) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_euler_totient.392cc7c29a3f"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.euler_totient</code></p>

```python signature
euler_totient(n: ExpressionLike) -> Expression
```

</details>


Euler's \(\varphi(n)\); requires a positive integer.

### mobius

<a id="entry-presentation_python_api_session_mobius"></a>
<a id="placement-placement.python.python_module.module_mobius.daacb524f5df"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
mobius(n: ExpressionLike) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_mobius.11e20bdee77b"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.mobius</code></p>

```python signature
mobius(n: ExpressionLike) -> Expression
```

</details>


Möbius \(\mu(n) \in \{-1, 0, 1\}\); requires a positive integer.

### divisor_count

<a id="entry-presentation_python_api_session_divisor_count"></a>
<a id="placement-placement.python.python_module.module_divisor_count.2864c9c4aff9"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
divisor_count(n: ExpressionLike) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_divisor_count.0c22d3ae80f2"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.divisor_count</code></p>

```python signature
divisor_count(n: ExpressionLike) -> Expression
```

</details>


Number of positive divisors \(\tau(n)\).

### divisor_sigma

<a id="entry-presentation_python_api_session_divisor_sigma"></a>
<a id="placement-placement.python.python_module.module_divisor_sigma.3d6e1bf67cc5"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
divisor_sigma(n: ExpressionLike, power: int) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_divisor_sigma.b6600fa851fa"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.divisor_sigma</code></p>

```python signature
divisor_sigma(n: ExpressionLike, power: int) -> Expression
```

</details>


Sum of the `power`-th powers of the positive divisors \(\sigma_{\mathit{power}}(n)\);
`power = 0` gives `divisor_count`, `power = 1` the divisor sum.

### jacobi_symbol

<a id="entry-presentation_python_api_session_jacobi_symbol"></a>
<a id="placement-placement.python.python_module.module_jacobi_symbol.6dbcccc83c42"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
jacobi_symbol(
    numerator: ExpressionLike,
    denominator: ExpressionLike,
) -> int
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_jacobi_symbol.e5766f96841a"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.jacobi_symbol</code></p>

```python signature
jacobi_symbol(
    numerator: ExpressionLike,
    denominator: ExpressionLike,
) -> int
```

</details>


The Jacobi symbol \((n/d) \in \{-1, 0, 1\}\); the denominator must be a positive odd
integer.

### legendre_symbol

<a id="entry-presentation_python_api_session_legendre_symbol"></a>
<a id="placement-placement.python.python_module.module_legendre_symbol.2b0685ef4d51"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
legendre_symbol(numerator: ExpressionLike, prime: ExpressionLike) -> int
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_legendre_symbol.b57e83aa7af5"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.legendre_symbol</code></p>

```python signature
legendre_symbol(numerator: ExpressionLike, prime: ExpressionLike) -> int
```

</details>


The Legendre symbol; the second argument must be an odd prime.

### kronecker_symbol

<a id="entry-presentation_python_api_session_kronecker_symbol"></a>
<a id="placement-placement.python.python_module.module_kronecker_symbol.2a7455ff34c3"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
kronecker_symbol(
    numerator: ExpressionLike,
    denominator: ExpressionLike,
) -> int
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_kronecker_symbol.002f7796fee6"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.kronecker_symbol</code></p>

```python signature
kronecker_symbol(
    numerator: ExpressionLike,
    denominator: ExpressionLike,
) -> int
```

</details>


The Kronecker extension of the Jacobi symbol to all integer denominators.

### integer_square_root

<a id="entry-presentation_python_api_session_integer_square_root"></a>
<a id="placement-placement.python.python_module.module_integer_square_root.dd9d0f1b24e5"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
integer_square_root(n: ExpressionLike) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_integer_square_root.24e8406f4423"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.integer_square_root</code></p>

```python signature
integer_square_root(n: ExpressionLike) -> Expression
```

</details>


\(\lfloor\sqrt{n}\rfloor\) for non-negative n.

### integer_nth_root

<a id="entry-presentation_python_api_session_integer_nth_root"></a>
<a id="placement-placement.python.python_module.module_integer_nth_root.98fb5209c8f6"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
integer_nth_root(n: ExpressionLike, root_index: int) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_integer_nth_root.40c2ad06325a"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.integer_nth_root</code></p>

```python signature
integer_nth_root(n: ExpressionLike, root_index: int) -> Expression
```

</details>


\(\lfloor n^{1/\mathit{root\_index}}\rfloor\); odd indices accept negative n. Errors when no real root
exists (even index, negative n).

### continued_fraction_rational

<a id="entry-presentation_python_api_session_continued_fraction_rational"></a>
<a id="placement-placement.python.python_module.module_continued_fraction_rational.b0f12992fa4e"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
continued_fraction_rational(value: ExpressionLike) -> list[Expression]
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_continued_fraction_rational.99942e7d43f5"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.continued_fraction_rational</code></p>

```python signature
continued_fraction_rational(value: ExpressionLike) -> list[Expression]
```

</details>


Terminating continued-fraction expansion `[a0; a1, a2, ...]` of an integer
or rational expression leaf.

### continued_fraction_quadratic_irrational

<a id="entry-presentation_python_api_session_continued_fraction_quadratic_irrational"></a>
<a id="placement-placement.python.python_module.module_continued_fraction_quadratic_irrational.2c040008a65d"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
continued_fraction_quadratic_irrational(value: ExpressionLike) -> tuple[list[Expression], list[Expression]]
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_continued_fraction_quadratic_irrational.d8d8e3b800fc"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.continued_fraction_quadratic_irrational</code></p>

```python signature
continued_fraction_quadratic_irrational(value: ExpressionLike) -> tuple[list[Expression], list[Expression]]
```

</details>


Eventually-periodic expansion of \(\sqrt{d}\) for a non-negative integer d, returned
as `(initial_terms, periodic_part)`. Perfect squares give a one-element
initial part and an empty period. **Notes:** WASM returns a
`QuadraticContinuedFractionExpansion` object with
`initial_terms`/`periodic_terms` getters.

### quadratic_continued_fraction_expansion (WASM result class)

### initial_terms

*Not exposed by the Python bindings. Available as [`UniffiQuadraticContinuedFractionExpansion.initialTerms`](/symi/kotlin/number-theory#initial_terms) in Kotlin, [`UniffiQuadraticContinuedFractionExpansion.initialTerms`](/symi/swift/number-theory#initial_terms) in Swift, [`api::results::QuadraticContinuedFractionExpansion::initial_terms`](/symi/rust/number-theory#initial_terms) in Rust.*


### periodic_terms

*Not exposed by the Python bindings. Available as [`UniffiQuadraticContinuedFractionExpansion.periodicTerms`](/symi/kotlin/number-theory#periodic_terms) in Kotlin, [`UniffiQuadraticContinuedFractionExpansion.periodicTerms`](/symi/swift/number-theory#periodic_terms) in Swift, [`api::results::QuadraticContinuedFractionExpansion::periodic_terms`](/symi/rust/number-theory#periodic_terms) in Rust.*


## Diophantine equations

The two supported Diophantine subclasses are linear
equations via the extended Euclidean algorithm and Pell's equation via the
continued fraction of \(\sqrt{D}\). General Diophantine solving is undecidable
(Matiyasevich–Robinson–Davis–Putnam) and is out of scope; the solvers return
exact integers and never guess.

### solve_linear_diophantine

<a id="entry-presentation_python_api_session_solve_linear_diophantine"></a>
<a id="placement-placement.python.python_module.module_solve_linear_diophantine.e608e787a9af"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
solve_linear_diophantine(
    coefficients: Iterable[ExpressionLike],
    constant: ExpressionLike,
) -> list[Expression]
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_solve_linear_diophantine.dd63ac50f29d"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.solve_linear_diophantine</code></p>

```python signature
solve_linear_diophantine(
    coefficients: Iterable[ExpressionLike],
    constant: ExpressionLike,
) -> list[Expression]
```

</details>


General integer solution of \(a_1 x_1 + \ldots + a_n x_n = c\), returned as the parametric
coordinates — one expression per unknown, affine in fresh integer parameter
symbols (`diophantine_parameter_k`) shared across the coordinates so that
choosing any integers for the parameters yields a solution tuple. The list is
**empty** when the equation has no integer solution (\(\gcd(a_i) \nmid c\)). All
coefficients and the constant must be integer expression leaves.

### solve_linear_diophantine_system

<a id="entry-presentation_python_api_session_solve_linear_diophantine_system"></a>
<a id="placement-placement.python.python_module.module_solve_linear_diophantine_system.c23ef0041f98"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
solve_linear_diophantine_system(
    coefficient_matrix: Matrix,
    constants: Iterable[ExpressionLike],
) -> list[Expression]
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_solve_linear_diophantine_system.d9bf4fb883c1"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.solve_linear_diophantine_system</code></p>

```python signature
solve_linear_diophantine_system(
    coefficient_matrix: Matrix,
    constants: Iterable[ExpressionLike],
) -> list[Expression]
```

</details>


General integer solution of the rectangular system \(A x = b\), returned as one
parametric coordinate expression per column of `A`. The coordinates share fresh
integer parameter symbols and describe the complete affine integer lattice of
solutions. The list is empty when the system has no integer solution, an entry is
not an integer expression leaf, or the dimensions do not agree.

### solve_pell

<a id="entry-presentation_python_api_session_solve_pell"></a>
<a id="placement-placement.python.python_module.module_solve_pell.1ed2c97e92c4"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
solve_pell(radicand: ExpressionLike) -> list[Expression]
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_solve_pell.aed0c23393b3"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.solve_pell</code></p>

```python signature
solve_pell(radicand: ExpressionLike) -> list[Expression]
```

</details>


Fundamental solution `[x, y]` of \(x^2 - D y^2 = 1\) for a positive non-square
integer `D`, the smallest positive solution from which all others are generated
by the recurrence \(x_{k+1} = x_1 x_k + D y_1 y_k\), \(y_{k+1} = x_1 y_k + y_1 x_k\). The list is
empty when `D` is a perfect square or non-positive (no nontrivial fundamental
solution).

### solve_negative_pell

<a id="entry-presentation_python_api_session_solve_negative_pell"></a>
<a id="placement-placement.python.python_module.module_solve_negative_pell.8a2a60487fe4"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
solve_negative_pell(radicand: ExpressionLike) -> list[Expression]
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_solve_negative_pell.c5c6d7b87834"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.solve_negative_pell</code></p>

```python signature
solve_negative_pell(radicand: ExpressionLike) -> list[Expression]
```

</details>


Fundamental solution `[x, y]` of the negative-Pell equation \(x^2 - D y^2 = -1\)
when it is solvable (exactly when the continued fraction of \(\sqrt{D}\) has odd period),
and an empty list otherwise.

### pell_solutions

<a id="entry-presentation_python_api_session_pell_solutions"></a>
<a id="placement-placement.python.python_module.module_pell_solutions.2e80efa05d03"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
pell_solutions(radicand: ExpressionLike, count: int) -> list[Expression]
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_pell_solutions.0fb4da361212"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.pell_solutions</code></p>

```python signature
pell_solutions(radicand: ExpressionLike, count: int) -> list[Expression]
```

</details>


The first `count` positive solutions of \(x^2 - D y^2 = 1\), materialised from the
fundamental solution by the Pell recurrence and returned as a flat list
\([x_1, y_1, x_2, y_2, \ldots]\). Empty when `D` has no fundamental solution.

## Example

Arbitrary-precision integer arithmetic with exact structure.

```python
import symi

print(symi.is_prime(2**61 - 1))
print(symi.factor_integer(360))
print(symi.euler_totient(360))
print(symi.extended_euclidean(240, 46))
print(symi.modular_power(7, 1000, 13))
```

