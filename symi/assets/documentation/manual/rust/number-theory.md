# Integer number theory

All functions take and return `Expression` objects holding integer leaves,
so arbitrary precision flows through the existing machinery; passing a
non-integer expression raises. (Exception: `continued_fraction_rational`
also accepts rational leaves; the three symbol functions return plain
machine integers.)

### is_prime

<a id="entry-presentation_rust_api_session_is_prime"></a>
<a id="placement-placement.rust.native_rust.api_session_is_prime.6ee08885c070"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn is_prime(
    &self,
    argument: &Expression,
) -> Result<Option<bool>, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_expression_is_prime.97b7d44ac9fc"></a>
<p class="symi-entry-owner">api::Expression method: <code>api::Expression::is_prime</code></p>

```rust signature
pub fn is_prime(&self) -> Result<TruthValue, ApiError>
```

</details>


Deterministic primality verdict; `None` when the input is outside the
classifier's domain (e.g. not a natural number \(\geq 0\) representation it
handles).

### factor_integer

<a id="entry-presentation_rust_api_session_factor_integer"></a>
<a id="placement-placement.rust.native_rust.api_session_factor_integer.5b4d36ec2cb1"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn factor_integer(
    &self,
    argument: &Expression,
) -> Result<Vec<(Expression, u32)>, ApiError>
```


Prime factorization as `(prime, multiplicity)` pairs, ascending. Errors on
zero. **Notes:** WASM returns `PrimeFactor` objects with
`prime`/`multiplicity` getters; the sign \(-1\) of a negative input is carried
as a leading `(-1, 1)` factor exactly as the core reports it.

### prime_factor (WASM result class)

### prime

<a id="entry-presentation_rust_api_primefactor_prime"></a>
<a id="placement-placement.rust.native_rust.api_results_primefactor_prime.3a2e508734a8"></a>
<p class="symi-entry-owner">api::results::PrimeFactor method</p>

```rust signature
pub fn prime(&self) -> Expression
```

The prime itself.

### multiplicity

<a id="entry-presentation_rust_api_primefactor_multiplicity"></a>
<a id="placement-placement.rust.native_rust.api_results_primefactor_multiplicity.4b907330b738"></a>
<p class="symi-entry-owner">api::results::PrimeFactor method</p>

```rust signature
pub fn multiplicity(&self) -> u32
```

<details class="symi-calling-forms">
<summary>Calling forms and variants</summary>

<a id="placement-placement.rust.native_rust.api_results_rootmultiplicity_multiplicity.7415f4bc8d5d"></a>
<p class="symi-entry-owner">Variant for this object — api::results::RootMultiplicity method: <code>api::results::RootMultiplicity::multiplicity</code></p>

```rust signature
pub fn multiplicity(&self) -> usize
```

</details>


### integer_gcd

<a id="entry-presentation_rust_api_session_integer_gcd"></a>
<a id="placement-placement.rust.native_rust.api_session_integer_gcd.150b6749a670"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn integer_gcd(
    &self,
    left: &Expression,
    right: &Expression,
) -> Result<Expression, ApiError>
```


Greatest common divisor (non-negative).

### integer_lcm

<a id="entry-presentation_rust_api_session_integer_lcm"></a>
<a id="placement-placement.rust.native_rust.api_session_integer_lcm.11d2e05b697f"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn integer_lcm(
    &self,
    left: &Expression,
    right: &Expression,
) -> Result<Expression, ApiError>
```


Least common multiple.

### extended_euclidean

<a id="entry-presentation_rust_api_session_extended_euclidean"></a>
<a id="placement-placement.rust.native_rust.api_number_theory_session_extended_euclidean.90f30ce6180f"></a>
<p class="symi-entry-owner">api::number_theory::Session method</p>

```rust signature
pub fn extended_euclidean(
    &self,
    left: &Expression,
    right: &Expression,
) -> Result<(Expression, Expression, Expression), ApiError>
```


`(gcd, x, y)` with \(a x + b y = \operatorname{gcd}\). **Notes:** WASM returns a 3-element
array `[gcd, x, y]`.

### modular_power

<a id="entry-presentation_rust_api_session_modular_power"></a>
<a id="placement-placement.rust.native_rust.api_number_theory_session_modular_power.886d6455cfab"></a>
<p class="symi-entry-owner">api::number_theory::Session method</p>

```rust signature
pub fn modular_power(
    &self,
    base: &Expression,
    exponent: &Expression,
    modulus: &Expression,
) -> Result<Expression, ApiError>
```


`base^exponent mod modulus` by square-and-multiply; requires positive
modulus and non-negative exponent.

### modular_inverse

<a id="entry-presentation_rust_api_session_modular_inverse"></a>
<a id="placement-placement.rust.native_rust.api_number_theory_session_modular_inverse.c12965305873"></a>
<p class="symi-entry-owner">api::number_theory::Session method</p>

```rust signature
pub fn modular_inverse(
    &self,
    value: &Expression,
    modulus: &Expression,
) -> Result<Expression, ApiError>
```


Multiplicative inverse of `value` modulo `modulus`; errors when
\(\operatorname{gcd}(\operatorname{value}, \operatorname{modulus}) \ne 1\).

### chinese_remainder

<a id="entry-presentation_rust_api_session_chinese_remainder"></a>
<a id="placement-placement.rust.native_rust.api_number_theory_session_chinese_remainder.a8b821e21bbc"></a>
<p class="symi-entry-owner">api::number_theory::Session method</p>

```rust signature
pub fn chinese_remainder(
    &self,
    residues_and_moduli: &[(Expression, Expression)],
) -> Result<Expression, ApiError>
```


The smallest non-negative solution of the simultaneous congruences
\(x \equiv r_i \pmod{m_i}\). Moduli need not be pairwise coprime; inconsistent systems
raise. **Notes:** WASM passes a flat interleaved array
`[residue_0, modulus_0, ...]`.

### euler_totient

<a id="entry-presentation_rust_api_session_euler_totient"></a>
<a id="placement-placement.rust.native_rust.api_number_theory_session_euler_totient.595b9915aee0"></a>
<p class="symi-entry-owner">api::number_theory::Session method</p>

```rust signature
pub fn euler_totient(
    &self,
    value: &Expression,
) -> Result<Expression, ApiError>
```


Euler's \(\varphi(n)\); requires a positive integer.

### mobius

<a id="entry-presentation_rust_api_session_mobius"></a>
<a id="placement-placement.rust.native_rust.api_session_mobius.e1b3170998d8"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn mobius(
    &self,
    argument: &Expression,
) -> Result<Expression, ApiError>
```


Möbius \(\mu(n) \in \{-1, 0, 1\}\); requires a positive integer.

### divisor_count

<a id="entry-presentation_rust_api_session_divisor_count"></a>
<a id="placement-placement.rust.native_rust.api_session_divisor_count.8676833c6be4"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn divisor_count(
    &self,
    argument: &Expression,
) -> Result<Expression, ApiError>
```


Number of positive divisors \(\tau(n)\).

### divisor_sigma

<a id="entry-presentation_rust_api_session_divisor_sigma"></a>
<a id="placement-placement.rust.native_rust.api_session_divisor_sigma.874d3f946fd9"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn divisor_sigma(
    &self,
    argument: &Expression,
    power: u32,
) -> Result<Expression, ApiError>
```


Sum of the `power`-th powers of the positive divisors \(\sigma_{\mathit{power}}(n)\);
`power = 0` gives `divisor_count`, `power = 1` the divisor sum.

### jacobi_symbol

<a id="entry-presentation_rust_api_session_jacobi_symbol"></a>
<a id="placement-placement.rust.native_rust.api_session_jacobi_symbol.82e869a6ea54"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn jacobi_symbol(
    &self,
    numerator: &Expression,
    denominator: &Expression,
) -> Result<i32, ApiError>
```


The Jacobi symbol \((n/d) \in \{-1, 0, 1\}\); the denominator must be a positive odd
integer.

### legendre_symbol

<a id="entry-presentation_rust_api_session_legendre_symbol"></a>
<a id="placement-placement.rust.native_rust.api_session_legendre_symbol.e686798e8607"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn legendre_symbol(
    &self,
    numerator: &Expression,
    prime: &Expression,
) -> Result<i32, ApiError>
```


The Legendre symbol; the second argument must be an odd prime.

### kronecker_symbol

<a id="entry-presentation_rust_api_session_kronecker_symbol"></a>
<a id="placement-placement.rust.native_rust.api_session_kronecker_symbol.bd2b32ad3219"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn kronecker_symbol(
    &self,
    numerator: &Expression,
    denominator: &Expression,
) -> Result<i32, ApiError>
```


The Kronecker extension of the Jacobi symbol to all integer denominators.

### integer_square_root

<a id="entry-presentation_rust_api_session_integer_square_root"></a>
<a id="placement-placement.rust.native_rust.api_session_integer_square_root.86d8755e771b"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn integer_square_root(
    &self,
    argument: &Expression,
) -> Result<Expression, ApiError>
```


\(\lfloor\sqrt{n}\rfloor\) for non-negative n.

### integer_nth_root

<a id="entry-presentation_rust_api_session_integer_nth_root"></a>
<a id="placement-placement.rust.native_rust.api_session_integer_nth_root.769bf4217393"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn integer_nth_root(
    &self,
    argument: &Expression,
    root_index: u64,
) -> Result<Expression, ApiError>
```


\(\lfloor n^{1/\mathit{root\_index}}\rfloor\); odd indices accept negative n. Errors when no real root
exists (even index, negative n).

### continued_fraction_rational

<a id="entry-presentation_rust_api_session_continued_fraction_rational"></a>
<a id="placement-placement.rust.native_rust.api_number_theory_session_continued_fraction_rational.8ef169e6e23f"></a>
<p class="symi-entry-owner">api::number_theory::Session method</p>

```rust signature
pub fn continued_fraction_rational(
    &self,
    value: &Expression,
) -> Result<Vec<Expression>, ApiError>
```


Terminating continued-fraction expansion `[a0; a1, a2, ...]` of an integer
or rational expression leaf.

### continued_fraction_quadratic_irrational

<a id="entry-presentation_rust_api_session_continued_fraction_quadratic_irrational"></a>
<a id="placement-placement.rust.native_rust.api_number_theory_session_continued_fraction_quadratic_irrational.2d0be214961d"></a>
<p class="symi-entry-owner">api::number_theory::Session method</p>

```rust signature
pub fn continued_fraction_quadratic_irrational(
    &self,
    value: &Expression,
) -> Result<QuadraticContinuedFractionExpansion, ApiError>
```


Eventually-periodic expansion of \(\sqrt{d}\) for a non-negative integer d, returned
as `(initial_terms, periodic_part)`. Perfect squares give a one-element
initial part and an empty period. **Notes:** WASM returns a
`QuadraticContinuedFractionExpansion` object with
`initial_terms`/`periodic_terms` getters.

### quadratic_continued_fraction_expansion (WASM result class)

### initial_terms

<a id="entry-presentation_rust_api_quadraticcontinuedfractionexpansion_initial_terms"></a>
<a id="placement-placement.rust.native_rust.api_results_quadraticcontinuedfractionexpansion_initial_terms.bc0d78ba396d"></a>
<p class="symi-entry-owner">api::results::QuadraticContinuedFractionExpansion method</p>

```rust signature
pub fn initial_terms(&self) -> Vec<Expression>
```

The terms preceding the period.

### periodic_terms

<a id="entry-presentation_rust_api_quadraticcontinuedfractionexpansion_periodic_terms"></a>
<a id="placement-placement.rust.native_rust.api_results_quadraticcontinuedfractionexpansion_periodic_terms.a0da231d1228"></a>
<p class="symi-entry-owner">api::results::QuadraticContinuedFractionExpansion method</p>

```rust signature
pub fn periodic_terms(&self) -> Vec<Expression>
```

The repeating terms of the period.

## Diophantine equations

The two supported Diophantine subclasses are linear
equations via the extended Euclidean algorithm and Pell's equation via the
continued fraction of \(\sqrt{D}\). General Diophantine solving is undecidable
(Matiyasevich–Robinson–Davis–Putnam) and is out of scope; the solvers return
exact integers and never guess.

### solve_linear_diophantine

<a id="entry-presentation_rust_api_session_solve_linear_diophantine"></a>
<a id="placement-placement.rust.native_rust.api_number_theory_session_solve_linear_diophantine.fd859bd1308b"></a>
<p class="symi-entry-owner">api::number_theory::Session method</p>

```rust signature
pub fn solve_linear_diophantine(
    &self,
    coefficients: &[Expression],
    constant: &Expression,
) -> Result<Vec<Expression>, ApiError>
```


General integer solution of \(a_1 x_1 + \ldots + a_n x_n = c\), returned as the parametric
coordinates — one expression per unknown, affine in fresh integer parameter
symbols (`diophantine_parameter_k`) shared across the coordinates so that
choosing any integers for the parameters yields a solution tuple. The list is
**empty** when the equation has no integer solution (\(\gcd(a_i) \nmid c\)). All
coefficients and the constant must be integer expression leaves.

### solve_linear_diophantine_system

<a id="entry-presentation_rust_api_session_solve_linear_diophantine_system"></a>
<a id="placement-placement.rust.native_rust.api_number_theory_session_solve_linear_diophantine_system.9597aebf2e09"></a>
<p class="symi-entry-owner">api::number_theory::Session method</p>

```rust signature
pub fn solve_linear_diophantine_system(
    &self,
    coefficient_matrix: &Matrix,
    constants: &[Expression],
) -> Result<Vec<Expression>, ApiError>
```


General integer solution of the rectangular system \(A x = b\), returned as one
parametric coordinate expression per column of `A`. The coordinates share fresh
integer parameter symbols and describe the complete affine integer lattice of
solutions. The list is empty when the system has no integer solution, an entry is
not an integer expression leaf, or the dimensions do not agree.

### solve_pell

<a id="entry-presentation_rust_api_session_solve_pell"></a>
<a id="placement-placement.rust.native_rust.api_number_theory_session_solve_pell.452e3cd8deac"></a>
<p class="symi-entry-owner">api::number_theory::Session method</p>

```rust signature
pub fn solve_pell(
    &self,
    radicand: &Expression,
) -> Result<Vec<Expression>, ApiError>
```


Fundamental solution `[x, y]` of \(x^2 - D y^2 = 1\) for a positive non-square
integer `D`, the smallest positive solution from which all others are generated
by the recurrence \(x_{k+1} = x_1 x_k + D y_1 y_k\), \(y_{k+1} = x_1 y_k + y_1 x_k\). The list is
empty when `D` is a perfect square or non-positive (no nontrivial fundamental
solution).

### solve_negative_pell

<a id="entry-presentation_rust_api_session_solve_negative_pell"></a>
<a id="placement-placement.rust.native_rust.api_number_theory_session_solve_negative_pell.1ad5e94715af"></a>
<p class="symi-entry-owner">api::number_theory::Session method</p>

```rust signature
pub fn solve_negative_pell(
    &self,
    radicand: &Expression,
) -> Result<Vec<Expression>, ApiError>
```


Fundamental solution `[x, y]` of the negative-Pell equation \(x^2 - D y^2 = -1\)
when it is solvable (exactly when the continued fraction of \(\sqrt{D}\) has odd period),
and an empty list otherwise.

### pell_solutions

<a id="entry-presentation_rust_api_session_pell_solutions"></a>
<a id="placement-placement.rust.native_rust.api_number_theory_session_pell_solutions.78c73b5e93c4"></a>
<p class="symi-entry-owner">api::number_theory::Session method</p>

```rust signature
pub fn pell_solutions(
    &self,
    radicand: &Expression,
    count: usize,
) -> Result<Vec<Expression>, ApiError>
```


The first `count` positive solutions of \(x^2 - D y^2 = 1\), materialised from the
fundamental solution by the Pell recurrence and returned as a flat list
\([x_1, y_1, x_2, y_2, \ldots]\). Empty when `D` has no fundamental solution.

## Example

This family is not part of the recommended `symi::api` facade in this release. Call it through the native modules in the [native Rust API reference](/symi/rust/api/symi/).


## Additional API

### api::number_theory

<a id="entry-presentation_rust_native_module_api_number_theory"></a>
<a id="placement-placement.rust.native_rust.api_number_theory.2093aae9a4f2"></a>
<p class="symi-entry-owner">api module</p>

```rust signature
pub mod number_theory;
```

Integer and Diophantine operations of the native API.

### prime

<a id="entry-presentation_rust_api_session_prime"></a>
<a id="placement-placement.rust.native_rust.api_session_prime.bf74ec14320d"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn prime(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Construct a primality proposition for a scalar expression.

### prime_factorization

<a id="entry-presentation_rust_api_session_prime_factorization"></a>
<a id="placement-placement.rust.native_rust.api_number_theory_session_prime_factorization.61a7a4c2c18b"></a>
<p class="symi-entry-owner">api::number_theory::Session method</p>

```rust signature
pub fn prime_factorization(
    &self,
    value: &Expression,
) -> Result<Vec<PrimeFactor>, ApiError>
```

The prime factorization of an integer with each prime's exponent.

### PrimeFactor

<a id="entry-presentation_rust_api_primefactor"></a>
<a id="placement-placement.rust.native_rust.api_primefactor.cd6af6c049d7"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use results::PrimeFactor;
```

One prime of an integer factorization together with its exponent.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_results_primefactor.4536e31631ca"></a>
<p class="symi-entry-owner">Type: <code>api::results::PrimeFactor</code></p>

```rust signature
pub struct PrimeFactor
```

</details>

### QuadraticContinuedFractionExpansion

<a id="entry-presentation_rust_api_quadraticcontinuedfractionexpansion"></a>
<a id="placement-placement.rust.native_rust.api_quadraticcontinuedfractionexpansion.18d86502274a"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use results::QuadraticContinuedFractionExpansion;
```

The eventually periodic continued-fraction expansion of a quadratic irrational.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_results_quadraticcontinuedfractionexpansion.e1d00cd44a76"></a>
<p class="symi-entry-owner">Type: <code>api::results::QuadraticContinuedFractionExpansion</code></p>

```rust signature
pub struct QuadraticContinuedFractionExpansion
```

</details>

### RootMultiplicity

<a id="entry-presentation_rust_api_rootmultiplicity"></a>
<a id="placement-placement.rust.native_rust.api_rootmultiplicity.23de5815d593"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use results::RootMultiplicity;
```

One root of a polynomial together with its multiplicity.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_results_rootmultiplicity.2fb3dfaa39d8"></a>
<p class="symi-entry-owner">Type: <code>api::results::RootMultiplicity</code></p>

```rust signature
pub struct RootMultiplicity
```

</details>

#### RootMultiplicity.root

<a id="entry-presentation_rust_api_rootmultiplicity_root"></a>
<a id="placement-placement.rust.native_rust.api_results_rootmultiplicity_root.02cf359a422d"></a>
<p class="symi-entry-owner">api::results::RootMultiplicity method</p>

```rust signature
pub fn root(&self) -> Expression
```

The root itself.

