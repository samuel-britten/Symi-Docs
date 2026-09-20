# Special functions

Special functions retain their symbolic form when a closed expression is not available.

## Gamma family

The first-tier gamma special functions. Symbolic special values, the
non-positive-integer poles, the recurrence/reflection identities, and
arbitrary-precision numeric evaluation (real and complex) all apply.

### gamma

<a id="entry-presentation_rust_api_session_gamma"></a>
<a id="placement-placement.rust.native_rust.api_session_gamma.59dc77ac52f1"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn gamma(
    &self,
    argument: &Expression,
) -> Result<Expression, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_expression_gamma.29eb55104888"></a>
<p class="symi-entry-owner">api::Expression method: <code>api::Expression::gamma</code></p>

```rust signature
pub fn gamma(&self) -> Result<Expression, ApiError>
```

</details>


The gamma function \(\Gamma(x)\), the analytic continuation of `(x-1)!`.

### log_gamma

<a id="entry-presentation_rust_api_session_log_gamma"></a>
<a id="placement-placement.rust.native_rust.api_session_log_gamma.574ab2a1c976"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn log_gamma(
    &self,
    argument: &Expression,
) -> Result<Expression, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_expression_log_gamma.ab07da665db2"></a>
<p class="symi-entry-owner">api::Expression method: <code>api::Expression::log_gamma</code></p>

```rust signature
pub fn log_gamma(&self) -> Result<Expression, ApiError>
```

</details>


The principal-branch log-gamma function (not `log(gamma(x))` off the real axis).

### digamma

<a id="entry-presentation_rust_api_session_digamma"></a>
<a id="placement-placement.rust.native_rust.api_session_digamma.931bf2b66a09"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn digamma(
    &self,
    argument: &Expression,
) -> Result<Expression, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_expression_digamma.a874b51f95cc"></a>
<p class="symi-entry-owner">api::Expression method: <code>api::Expression::digamma</code></p>

```rust signature
pub fn digamma(&self) -> Result<Expression, ApiError>
```

</details>


The digamma function \(\psi(x) = \Gamma'(x)/\Gamma(x)\).

### polygamma

<a id="entry-presentation_rust_api_session_polygamma"></a>
<a id="placement-placement.rust.native_rust.api_session_polygamma.4c2bdd651ecb"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn polygamma(
    &self,
    order: &Expression,
    argument: &Expression,
) -> Result<Expression, ApiError>
```


The polygamma function \(\psi^{(n)}(x)\), the order-th derivative of digamma;
`polygamma(0, x)` reduces to `digamma(x)`.

### beta

<a id="entry-presentation_rust_api_session_beta"></a>
<a id="placement-placement.rust.native_rust.api_session_beta.b5bd59498226"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn beta(
    &self,
    left: &Expression,
    right: &Expression,
) -> Result<Expression, ApiError>
```


The beta function \(\operatorname{B}(x, y) = \Gamma(x)\Gamma(y)/\Gamma(x+y)\).

### zeta

<a id="entry-presentation_rust_api_session_zeta"></a>
<a id="placement-placement.rust.native_rust.api_session_zeta.5933429e5c9b"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn zeta(
    &self,
    argument: &Expression,
) -> Result<Expression, ApiError>
```


The Riemann zeta function \(\zeta(s) = \sum_{k\geq 1} k^{-s}\). Even positive integers fold to
the \(\pi\) closed forms (`zeta(2) = pi^2/6`, `zeta(4) = pi^4/90`, …), `zeta(0) = -1/2`,
negative integers to their rational functional values (`zeta(-1) = -1/12`,
`zeta(-2n) = 0`); `zeta(1)` is the simple pole (`undefined`). Odd positive
integers (`zeta(3)`, …) stay the symbolic head; every value evaluates to
arbitrary precision over \(\mathbb{R}\) and \(\mathbb{C}\).

### hurwitz_zeta

<a id="entry-presentation_rust_api_session_hurwitz_zeta"></a>
<a id="placement-placement.rust.native_rust.api_session_hurwitz_zeta.ea751077131a"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn hurwitz_zeta(
    &self,
    s: &Expression,
    a: &Expression,
) -> Result<Expression, ApiError>
```


The Hurwitz zeta function \(\zeta(s, a) = \sum_{k\geq 0} (k+a)^{-s}\), the numeric primitive of
the family. `hurwitz_zeta(s, 1)` folds to `zeta(s)`; `hurwitz_zeta(s, 1/2)` to
\((2^s - 1)\zeta(s)\); a positive integer second argument reduces to `zeta(s)` minus
the finite head; a non-positive integer first argument gives a Bernoulli
polynomial in `a`.

### polylogarithm

<a id="entry-presentation_rust_api_session_polylogarithm"></a>
<a id="placement-placement.rust.native_rust.api_session_polylogarithm.99795f2d020b"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn polylogarithm(
    &self,
    order: &Expression,
    argument: &Expression,
) -> Result<Expression, ApiError>
```


The principal-branch polylogarithm \(\operatorname{Li}_s(z)\). The defining-series values
`polylogarithm(s, 0) = 0`, `polylogarithm(s, 1) = zeta(s)` for integer
`s > 1`, and `polylogarithm(1, z) = -log(1-z)` reduce exactly.
`polylogarithm(2, 1/2)` uses the branch-safe real dilogarithm reflection
identity and reduces to `pi^2/12 - log(2)^2/2`.
Numeric evaluation uses defining and near-one series in their certified regions,
Hurwitz-zeta continuation for general exterior orders, and a bounded Bernoulli
inversion formula for positive integer orders. Regions outside those certified
routes decline numerically rather than returning a low-confidence value.

### lerch_phi

<a id="entry-presentation_rust_api_session_lerch_phi"></a>
<a id="placement-placement.rust.native_rust.api_session_lerch_phi.9d9db6667641"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn lerch_phi(
    &self,
    argument: &Expression,
    order: &Expression,
    shift: &Expression,
) -> Result<Expression, ApiError>
```


The principal Lerch transcendent \(\Phi(z, s, a)\), whose canonical argument order is
`(argument, order, shift)`. Numeric evaluation uses the defining and near-one
continuation kernels where their hypotheses hold. Exact nonpositive integer shifts
are normalized through the finite-prefix recurrence before those kernels are selected;
other unsupported continuation regions decline numerically.

## Generalized hypergeometric family

Symi implements the **ordinary** \({}_pF_q\), not the regularized (Olver-normalized) form.

Both parameter groups are **ordered sequences**: order and repetition are significant, because
`p` and `q` are the group lengths and a repeated parameter changes the function. A Python `set`
or `frozenset` is rejected; pass a list or tuple. An empty group is valid and is how `0F0` and
`0F1` are written.

A call terminates into an exact polynomial when an upper parameter is a non-positive integer.
The lower parameters must avoid the non-positive integers, because those make a Pochhammer
denominator vanish; when a lower parameter is a non-positive integer but the series terminates
strictly before that denominator is reached, the polynomial is still well defined and is
returned. An uncancelled denominator singularity gives `undefined`.

Numeric evaluation sums the defining series where DLMF 16.2 guarantees convergence: everywhere
for \(p \leq q\), and strictly inside the unit disk with a margin for \(p = q+1\). Beyond that
disk the Gauss function \({}_2F_1\) is continued through three principal-branch transformations —
Pfaff's (DLMF 15.8.1), the expansion in \(1-z\) (DLMF 15.8.4), and the expansion in \(1/z\)
(DLMF 15.8.2) — and the confluent function \({}_1F_1\) uses Kummer's transformation
(DLMF 13.2.39) for a negative real part, where the direct terms alternate and lose digits to
cancellation. The route is chosen deterministically from the parameters and the argument.

Evaluation **declines** rather than returning a value whenever:

- the nonterminating \(p > q+1\) series is divergent — it is not assigned a value by a hidden
  summability convention;
- an argument lies on, or indistinguishably near, the principal cut from \(1\) to \(+\infty\),
  where the function has two different boundary values;
- a continuation's parameter combination is at or near an integer, the resonance at which the two
  solutions coincide and the true expansion acquires logarithmic terms;
- no implemented route covers the region — a general \(pF_q\) with \(p = q+1\) outside its disk,
  for instance, has no continuation in this release.

A returned value is accepted only when two evaluations at different working precisions agree to
the precision that was requested, so a result hollowed out by cancellation declines instead of
being reported. Exact simplification never falls back to a numeric result.

`error_function` and `error_function_complementary` are evaluated through their DLMF 7.11.1
confluent representation, which gives them the same arbitrary-precision complex behaviour.

Exact reductions that run automatically are limited to the globally safe ones — \({}_0F_0\) to the
exponential, a zero argument to one, safe parameter cancellation, terminating expansion within a
size budget — plus Gauss's summation at \(z = 1\) (DLMF 15.4.20) when \(\Re(c-a-b) > 0\) is
**proved**; with the condition unproved the call stays symbolic, because the series there
genuinely diverges when it fails.

### hypergeometric_pfq

<a id="entry-presentation_rust_api_session_hypergeometric_pfq"></a>
<a id="placement-placement.rust.native_rust.api_session_hypergeometric_pfq.9c858dc3a117"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn hypergeometric_pfq<UpperType, LowerType>(
    &self,
    upper_parameters: UpperType,
    lower_parameters: LowerType,
    argument: &Expression,
) -> Result<Expression, ApiError>
where
    UpperType: IntoIterator<Item = Expression>,
    LowerType: IntoIterator<Item = Expression>,
```


The generalized hypergeometric function \({}_pF_q(\mathbf a; \mathbf b; z)\). The two parameter
groups are ordered sequences: order and repetition are significant, so a set or frozenset is
rejected.

### hypergeometric_0f1

<a id="entry-presentation_rust_api_session_hypergeometric_0f1"></a>
<a id="placement-placement.rust.native_rust.api_session_hypergeometric_0f1.5bd6276d462c"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn hypergeometric_0f1(
    &self,
    lower_parameter: &Expression,
    argument: &Expression,
) -> Result<Expression, ApiError>
```


The confluent limit \({}_0F_1(; b; z)\), lowered to `hypergeometric_pfq`.

### hypergeometric_1f1

<a id="entry-presentation_rust_api_session_hypergeometric_1f1"></a>
<a id="placement-placement.rust.native_rust.api_session_hypergeometric_1f1.8cfe5c4e24b4"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn hypergeometric_1f1(
    &self,
    upper_parameter: &Expression,
    lower_parameter: &Expression,
    argument: &Expression,
) -> Result<Expression, ApiError>
```


Kummer's confluent hypergeometric function \({}_1F_1(a; b; z)\).

### hypergeometric_2f1

<a id="entry-presentation_rust_api_session_hypergeometric_2f1"></a>
<a id="placement-placement.rust.native_rust.api_session_hypergeometric_2f1.d16bd353849e"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn hypergeometric_2f1(
    &self,
    first_upper_parameter: &Expression,
    second_upper_parameter: &Expression,
    lower_parameter: &Expression,
    argument: &Expression,
) -> Result<Expression, ApiError>
```


The Gauss hypergeometric function \({}_2F_1(a, b; c; z)\).

## Meijer G-function

### meijer_g

<a id="entry-presentation_rust_api_session_meijer_g"></a>
<a id="placement-placement.rust.native_rust.api_session_meijer_g.ce43935b3f3c"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn meijer_g<FirstType, SecondType, ThirdType, FourthType>(
    &self,
    upper_numerator_parameters: FirstType,
    upper_denominator_parameters: SecondType,
    lower_numerator_parameters: ThirdType,
    lower_denominator_parameters: FourthType,
    argument: &Expression,
) -> Result<Expression, ApiError>
where
    FirstType: IntoIterator<Item = Expression>,
    SecondType: IntoIterator<Item = Expression>,
    ThirdType: IntoIterator<Item = Expression>,
    FourthType: IntoIterator<Item = Expression>,
```


The Meijer G-function \(G_{p,q}^{m,n}\) from its four ordered parameter groups. The orders `m`,
`n`, `p`, and `q` are read from the group lengths and are never supplied separately.

The four groups follow the DLMF 16.17 partition: the first `n` upper parameters, the remaining
`p - n` upper parameters, the first `m` lower parameters, and the remaining `q - m` lower
parameters. Any group may be empty.

A configuration in which some upper-numerator parameter minus some lower-numerator parameter is a
positive integer has colliding pole families and no separating contour, and gives `undefined`.
General Mellin–Barnes contour construction and evaluation are outside this release: a
syntactically valid call whose contour conditions are unsettled stays a symbolic head, and numeric
evaluation of it declines.

The one route into and out of the G head is the residue expansion of DLMF 16.17.2, which writes
the call as a finite sum of \({}_pF_{q-1}\) terms. It applies when \(p < q\), or \(p = q\) with the
argument strictly inside the unit disk, and when no two of the first \(m\) lower parameters differ
by an integer — at an integer difference the poles merge and the true expansion carries
logarithms, so the reduction declines instead. Numeric evaluation of a Meijer-G call runs through
exactly that reduction and declines when it does not apply.

The reduction and its inverse are **directed** rewrites, requested through the special-function
basis rather than applied automatically:

- `generalized_hypergeometric` reduces an eligible `meijer_g` call to its finite \({}_pF_q\) sum,
  and rewrites `error_function` into its DLMF 7.11.1 confluent form;
- `meijer_g` rewrites a \({}_pF_q\) call into the single G function of DLMF 16.18.1 with its gamma
  prefactor, declining when a parameter sits on a pole of its own gamma factor.

## Bessel, Hankel, spherical-Bessel, and Airy families

The cylinder functions use their principal branches. `bessel_j` and `bessel_i` become entire in
their argument at proved integer order; `bessel_y`, `bessel_k`, and the Hankel functions retain
their principal cut. Spherical functions require a nonnegative integer order and do not inherit a
spurious cut from their half-integer cylinder representation. Airy functions are entire.

### bessel_j

<a id="entry-presentation_rust_api_session_bessel_j"></a>
<a id="placement-placement.rust.native_rust.api_session_bessel_j.47f75d1984f8"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn bessel_j(
    &self,
    order: &Expression,
    argument: &Expression,
) -> Result<Expression, ApiError>
```


The principal Bessel function \(J_\nu(z)\).

### bessel_y

<a id="entry-presentation_rust_api_session_bessel_y"></a>
<a id="placement-placement.rust.native_rust.api_session_bessel_y.968465448244"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn bessel_y(
    &self,
    order: &Expression,
    argument: &Expression,
) -> Result<Expression, ApiError>
```


The principal Bessel function \(Y_\nu(z)\).

### bessel_i

<a id="entry-presentation_rust_api_session_bessel_i"></a>
<a id="placement-placement.rust.native_rust.api_session_bessel_i.ddbee38041f7"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn bessel_i(
    &self,
    order: &Expression,
    argument: &Expression,
) -> Result<Expression, ApiError>
```


The principal modified Bessel function \(I_\nu(z)\).

### bessel_k

<a id="entry-presentation_rust_api_session_bessel_k"></a>
<a id="placement-placement.rust.native_rust.api_session_bessel_k.f2b6aa38cdf4"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn bessel_k(
    &self,
    order: &Expression,
    argument: &Expression,
) -> Result<Expression, ApiError>
```


The principal modified Bessel function \(K_\nu(z)\).

### hankel_first_kind

<a id="entry-presentation_rust_api_session_hankel_first_kind"></a>
<a id="placement-placement.rust.native_rust.api_session_hankel_first_kind.06660d0840d2"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn hankel_first_kind(
    &self,
    order: &Expression,
    argument: &Expression,
) -> Result<Expression, ApiError>
```


The principal Hankel function \(H_\nu^{(1)}(z)\).

### hankel_second_kind

<a id="entry-presentation_rust_api_session_hankel_second_kind"></a>
<a id="placement-placement.rust.native_rust.api_session_hankel_second_kind.5fbd0ff066f5"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn hankel_second_kind(
    &self,
    order: &Expression,
    argument: &Expression,
) -> Result<Expression, ApiError>
```


The principal Hankel function \(H_\nu^{(2)}(z)\).

### spherical_bessel_j

<a id="entry-presentation_rust_api_session_spherical_bessel_j"></a>
<a id="placement-placement.rust.native_rust.api_session_spherical_bessel_j.d6675f419838"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn spherical_bessel_j(
    &self,
    order: &Expression,
    argument: &Expression,
) -> Result<Expression, ApiError>
```


The spherical Bessel function \(\mathsf j_n(z)\), for \(n\in\mathbb N_0\).

### spherical_bessel_y

<a id="entry-presentation_rust_api_session_spherical_bessel_y"></a>
<a id="placement-placement.rust.native_rust.api_session_spherical_bessel_y.5bf1ea40bd24"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn spherical_bessel_y(
    &self,
    order: &Expression,
    argument: &Expression,
) -> Result<Expression, ApiError>
```


The spherical Bessel function \(\mathsf y_n(z)\), for \(n\in\mathbb N_0\).

### spherical_hankel_first_kind

<a id="entry-presentation_rust_api_session_spherical_hankel_first_kind"></a>
<a id="placement-placement.rust.native_rust.api_session_spherical_hankel_first_kind.e0a1b4b5e616"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn spherical_hankel_first_kind(
    &self,
    order: &Expression,
    argument: &Expression,
) -> Result<Expression, ApiError>
```


The spherical Hankel function \(\mathsf h_n^{(1)}(z)\), for \(n\in\mathbb N_0\).

### spherical_hankel_second_kind

<a id="entry-presentation_rust_api_session_spherical_hankel_second_kind"></a>
<a id="placement-placement.rust.native_rust.api_session_spherical_hankel_second_kind.c5bffb2aa370"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn spherical_hankel_second_kind(
    &self,
    order: &Expression,
    argument: &Expression,
) -> Result<Expression, ApiError>
```


The spherical Hankel function \(\mathsf h_n^{(2)}(z)\), for \(n\in\mathbb N_0\).

### airy_ai

<a id="entry-presentation_rust_api_session_airy_ai"></a>
<a id="placement-placement.rust.native_rust.api_session_airy_ai.a75fdb366456"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn airy_ai(
    &self,
    argument: &Expression,
) -> Result<Expression, ApiError>
```


The Airy function \(\operatorname{Ai}(z)\).

### airy_bi

<a id="entry-presentation_rust_api_session_airy_bi"></a>
<a id="placement-placement.rust.native_rust.api_session_airy_bi.f34f9c8539f1"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn airy_bi(
    &self,
    argument: &Expression,
) -> Result<Expression, ApiError>
```


The Airy function \(\operatorname{Bi}(z)\).

### airy_ai_prime

<a id="entry-presentation_rust_api_session_airy_ai_prime"></a>
<a id="placement-placement.rust.native_rust.api_session_airy_ai_prime.d3eb69c71709"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn airy_ai_prime(
    &self,
    argument: &Expression,
) -> Result<Expression, ApiError>
```


The derivative \(\operatorname{Ai}'(z)\).

### airy_bi_prime

<a id="entry-presentation_rust_api_session_airy_bi_prime"></a>
<a id="placement-placement.rust.native_rust.api_session_airy_bi_prime.a6ae3e4a474e"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn airy_bi_prime(
    &self,
    argument: &Expression,
) -> Result<Expression, ApiError>
```


The derivative \(\operatorname{Bi}'(z)\).

## Classical orthogonal polynomials

Every family in this group is the classical polynomial sequence at a non-negative integer degree,
following DLMF Chapter 18. A degree proved not to be a non-negative integer gives `undefined`, and a
degree that cannot be classified leaves the call symbolic. Once the degree is admissible the value
is a finite polynomial and therefore entire in its argument, whatever the family parameters are: the
orthogonality hypotheses \(\alpha>-1\), \(\beta>-1\), and \(\lambda>-1/2\) are conditions of the
weighted-inner-product theorems, not conditions for the polynomial to have a value. `hermite_polynomial`
is the physicists' \(H_n\).

### jacobi_polynomial

<a id="entry-presentation_rust_api_session_jacobi_polynomial"></a>
<a id="placement-placement.rust.native_rust.api_session_jacobi_polynomial.00d0c408d6fc"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn jacobi_polynomial(
    &self,
    degree: &Expression,
    first_parameter: &Expression,
    second_parameter: &Expression,
    argument: &Expression,
) -> Result<Expression, ApiError>
```


The Jacobi polynomial \(P_n^{(\alpha,\beta)}(x)\).

### gegenbauer_polynomial

<a id="entry-presentation_rust_api_session_gegenbauer_polynomial"></a>
<a id="placement-placement.rust.native_rust.api_session_gegenbauer_polynomial.1c7fa9a2584c"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn gegenbauer_polynomial(
    &self,
    degree: &Expression,
    parameter: &Expression,
    argument: &Expression,
) -> Result<Expression, ApiError>
```


The Gegenbauer polynomial \(C_n^{(\lambda)}(x)\).

### chebyshev_polynomial_first_kind

<a id="entry-presentation_rust_api_session_chebyshev_polynomial_first_kind"></a>
<a id="placement-placement.rust.native_rust.api_session_chebyshev_polynomial_first_kind.83f338bfe9af"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn chebyshev_polynomial_first_kind(
    &self,
    degree: &Expression,
    argument: &Expression,
) -> Result<Expression, ApiError>
```


The Chebyshev polynomial of the first kind \(T_n(x)\).

### chebyshev_polynomial_second_kind

<a id="entry-presentation_rust_api_session_chebyshev_polynomial_second_kind"></a>
<a id="placement-placement.rust.native_rust.api_session_chebyshev_polynomial_second_kind.b240a9102eeb"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn chebyshev_polynomial_second_kind(
    &self,
    degree: &Expression,
    argument: &Expression,
) -> Result<Expression, ApiError>
```


The Chebyshev polynomial of the second kind \(U_n(x)\).

### legendre_polynomial

<a id="entry-presentation_rust_api_session_legendre_polynomial"></a>
<a id="placement-placement.rust.native_rust.api_session_legendre_polynomial.e2028898db05"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn legendre_polynomial(
    &self,
    degree: &Expression,
    argument: &Expression,
) -> Result<Expression, ApiError>
```


The Legendre polynomial \(P_n(x)\).

### generalized_laguerre_polynomial

<a id="entry-presentation_rust_api_session_generalized_laguerre_polynomial"></a>
<a id="placement-placement.rust.native_rust.api_session_generalized_laguerre_polynomial.234d3baaf3fe"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn generalized_laguerre_polynomial(
    &self,
    degree: &Expression,
    parameter: &Expression,
    argument: &Expression,
) -> Result<Expression, ApiError>
```


The generalized Laguerre polynomial \(L_n^{(\alpha)}(x)\).

### hermite_polynomial

<a id="entry-presentation_rust_api_session_hermite_polynomial"></a>
<a id="placement-placement.rust.native_rust.api_session_hermite_polynomial.11463cebdf3a"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn hermite_polynomial(
    &self,
    degree: &Expression,
    argument: &Expression,
) -> Result<Expression, ApiError>
```


The physicists' Hermite polynomial \(H_n(x)\).

### ultraspherical_polynomial

<a id="entry-presentation_rust_api_session_ultraspherical_polynomial"></a>
<a id="placement-placement.rust.native_rust.api_session_ultraspherical_polynomial.fa3dd3fd84eb"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn ultraspherical_polynomial(
    &self,
    degree: &Expression,
    parameter: &Expression,
    argument: &Expression,
) -> Result<Expression, ApiError>
```


The ultraspherical polynomial, lowered to its canonical Gegenbauer head.

### laguerre_polynomial

<a id="entry-presentation_rust_api_session_laguerre_polynomial"></a>
<a id="placement-placement.rust.native_rust.api_session_laguerre_polynomial.fd40d0978c75"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn laguerre_polynomial(
    &self,
    degree: &Expression,
    argument: &Expression,
) -> Result<Expression, ApiError>
```


The Laguerre polynomial, lowered to its canonical generalized Laguerre head.

## Example

Special functions reduce at recognised arguments.

```rust
use symi::api::prelude::*;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let session = Session::new();

    println!("{}", session.gamma(&session.rational(1, 2)?)?);
    println!("{}", session.zeta(&session.integer(2))?);
    println!("{}", session.beta(&session.integer(2), &session.integer(3))?);
    println!("{}", session.digamma(&session.integer(1))?);
    Ok(())
}
```


### convert_polynomial_basis

<a id="entry-presentation_rust_api_session_convert_polynomial_basis"></a>
<a id="placement-placement.rust.native_rust.api_session_convert_polynomial_basis.0da7efd61ecb"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn convert_polynomial_basis<'a, VariableType>(
    &self,
    target: &Expression,
    variable: VariableType,
    basis: &OrthogonalPolynomialBasis,
) -> Result<Expression, ApiError>
where
    VariableType: Into<VariableLike<'a>>,
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_expression_convert_polynomial_basis.df0c39510b5b"></a>
<p class="symi-entry-owner">api::Expression method: <code>api::Expression::convert_polynomial_basis</code></p>

```rust signature
pub fn convert_polynomial_basis<'a, VariableType>(
    &self,
    variable: VariableType,
    basis: &OrthogonalPolynomialBasis,
) -> Result<Expression, ApiError>
where
    VariableType: Into<VariableLike<'a>>,
```

</details>


Express a finite univariate polynomial in a classical orthogonal basis — as a
combination of Chebyshev, Legendre, Hermite, Laguerre, Gegenbauer, or Jacobi
polynomials rather than powers of the variable. The conversion is exact; a
target that is not a finite univariate polynomial in `variable` declines.

### orthogonal_polynomial_coefficient

<a id="entry-presentation_rust_api_session_orthogonal_polynomial_coefficient"></a>
<a id="placement-placement.rust.native_rust.api_session_orthogonal_polynomial_coefficient.1b2ef4ad217a"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn orthogonal_polynomial_coefficient<'a, VariableType>(
    &self,
    target: &Expression,
    variable: VariableType,
    basis: &OrthogonalPolynomialBasis,
    degree: usize,
) -> Result<Expression, ApiError>
where
    VariableType: Into<VariableLike<'a>>,
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_expression_orthogonal_polynomial_coefficient.6d3fff5ae9ce"></a>
<p class="symi-entry-owner">api::Expression method: <code>api::Expression::orthogonal_polynomial_coefficient</code></p>

```rust signature
pub fn orthogonal_polynomial_coefficient<'a, VariableType>(
    &self,
    variable: VariableType,
    basis: &OrthogonalPolynomialBasis,
    degree: usize,
) -> Result<Expression, ApiError>
where
    VariableType: Into<VariableLike<'a>>,
```

</details>


One exact coefficient of that expansion, without forming the whole of it: the
coefficient of the basis polynomial of the given degree.

### expand_orthogonal_polynomial

<a id="entry-presentation_rust_api_session_expand_orthogonal_polynomial"></a>
<a id="placement-placement.rust.native_rust.api_session_expand_orthogonal_polynomial.ebee9df86fc5"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn expand_orthogonal_polynomial(
    &self,
    target: &Expression,
) -> Result<Expression, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_expression_expand_orthogonal_polynomial.7cfe147549d1"></a>
<p class="symi-entry-owner">api::Expression method: <code>api::Expression::expand_orthogonal_polynomial</code></p>

```rust signature
pub fn expand_orthogonal_polynomial(
    &self,
) -> Result<Expression, ApiError>
```

</details>


The inverse direction: expand every classical orthogonal polynomial call in the
expression into an ordinary polynomial in its variable.

## Additional API

### carlson_rc

<a id="entry-presentation_rust_api_session_carlson_rc"></a>
<a id="placement-placement.rust.native_rust.api_session_carlson_rc.0ab5545bcced"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn carlson_rc(
    &self,
    first_argument: &Expression,
    second_argument: &Expression,
) -> Result<Expression, ApiError>
```

Carlson's degenerate symmetric elliptic integral \(R_C(x,y)\).

### carlson_rd

<a id="entry-presentation_rust_api_session_carlson_rd"></a>
<a id="placement-placement.rust.native_rust.api_session_carlson_rd.3e957170046d"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn carlson_rd(
    &self,
    first_argument: &Expression,
    second_argument: &Expression,
    third_argument: &Expression,
) -> Result<Expression, ApiError>
```

Carlson's symmetric elliptic integral \(R_D(x,y,z)\).

### carlson_rf

<a id="entry-presentation_rust_api_session_carlson_rf"></a>
<a id="placement-placement.rust.native_rust.api_session_carlson_rf.ec8d84b6a7e9"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn carlson_rf(
    &self,
    first_argument: &Expression,
    second_argument: &Expression,
    third_argument: &Expression,
) -> Result<Expression, ApiError>
```

Carlson's symmetric elliptic integral \(R_F(x,y,z)\).

### carlson_rj

<a id="entry-presentation_rust_api_session_carlson_rj"></a>
<a id="placement-placement.rust.native_rust.api_session_carlson_rj.66145e304c30"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn carlson_rj(
    &self,
    first_argument: &Expression,
    second_argument: &Expression,
    third_argument: &Expression,
    fourth_argument: &Expression,
) -> Result<Expression, ApiError>
```

Carlson's symmetric elliptic integral \(R_J(x,y,z,p)\).

### cosine_integral

<a id="entry-presentation_rust_api_session_cosine_integral"></a>
<a id="placement-placement.rust.native_rust.api_session_cosine_integral.5387585e9ae9"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn cosine_integral(
    &self,
    argument: &Expression,
) -> Result<Expression, ApiError>
```

Provides the `cosine_integral` operation on this native type.

### dirac_delta

<a id="entry-presentation_rust_api_session_dirac_delta"></a>
<a id="placement-placement.rust.native_rust.api_session_dirac_delta.f63c613f326e"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn dirac_delta(
    &self,
    argument: &Expression,
) -> Result<Expression, ApiError>
```

Provides the `dirac_delta` operation on this native type.

### elliptic_e

<a id="entry-presentation_rust_api_session_elliptic_e"></a>
<a id="placement-placement.rust.native_rust.api_session_elliptic_e.96e8718126a7"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn elliptic_e(
    &self,
    parameter: &Expression,
) -> Result<Expression, ApiError>
```

The complete second-kind elliptic integral \(E(m)\), with parameter \(m=k^2\).

### elliptic_e_incomplete

<a id="entry-presentation_rust_api_session_elliptic_e_incomplete"></a>
<a id="placement-placement.rust.native_rust.api_session_elliptic_e_incomplete.2a983dd513db"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn elliptic_e_incomplete(
    &self,
    amplitude: &Expression,
    parameter: &Expression,
) -> Result<Expression, ApiError>
```

The incomplete second-kind elliptic integral \(E(\phi\mid m)\), with parameter \(m=k^2\).

### elliptic_f

<a id="entry-presentation_rust_api_session_elliptic_f"></a>
<a id="placement-placement.rust.native_rust.api_session_elliptic_f.ae653ac6c168"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn elliptic_f(
    &self,
    amplitude: &Expression,
    parameter: &Expression,
) -> Result<Expression, ApiError>
```

The incomplete first-kind elliptic integral \(F(\phi\mid m)\), with parameter \(m=k^2\).

### elliptic_k

<a id="entry-presentation_rust_api_session_elliptic_k"></a>
<a id="placement-placement.rust.native_rust.api_session_elliptic_k.f8860285c852"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn elliptic_k(
    &self,
    parameter: &Expression,
) -> Result<Expression, ApiError>
```

The complete first-kind elliptic integral \(K(m)\), with parameter \(m=k^2\).

### elliptic_pi

<a id="entry-presentation_rust_api_session_elliptic_pi"></a>
<a id="placement-placement.rust.native_rust.api_session_elliptic_pi.830995e55ef4"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn elliptic_pi(
    &self,
    characteristic: &Expression,
    parameter: &Expression,
) -> Result<Expression, ApiError>
```

The complete third-kind elliptic integral \(\Pi(n\mid m)\), with parameter \(m=k^2\).

### elliptic_pi_incomplete

<a id="entry-presentation_rust_api_session_elliptic_pi_incomplete"></a>
<a id="placement-placement.rust.native_rust.api_session_elliptic_pi_incomplete.20b3dafd3415"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn elliptic_pi_incomplete(
    &self,
    characteristic: &Expression,
    amplitude: &Expression,
    parameter: &Expression,
) -> Result<Expression, ApiError>
```

The incomplete third-kind elliptic integral \(\Pi(n;\phi\mid m)\), with parameter \(m=k^2\).

### error_function

<a id="entry-presentation_rust_api_session_error_function"></a>
<a id="placement-placement.rust.native_rust.api_session_error_function.2fa2f7f54f81"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn error_function(
    &self,
    argument: &Expression,
) -> Result<Expression, ApiError>
```

Provides the `error_function` operation on this native type.

### error_function_complementary

<a id="entry-presentation_rust_api_session_error_function_complementary"></a>
<a id="placement-placement.rust.native_rust.api_session_error_function_complementary.53631097dfd6"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn error_function_complementary(
    &self,
    argument: &Expression,
) -> Result<Expression, ApiError>
```

Provides the `error_function_complementary` operation on this native type.

### exponential_integral

<a id="entry-presentation_rust_api_session_exponential_integral"></a>
<a id="placement-placement.rust.native_rust.api_session_exponential_integral.7259b91e9e27"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn exponential_integral(
    &self,
    argument: &Expression,
) -> Result<Expression, ApiError>
```

Provides the `exponential_integral` operation on this native type.

### heaviside_step

<a id="entry-presentation_rust_api_session_heaviside_step"></a>
<a id="placement-placement.rust.native_rust.api_session_heaviside_step.067936c12edd"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn heaviside_step(
    &self,
    argument: &Expression,
) -> Result<Expression, ApiError>
```

Provides the `heaviside_step` operation on this native type.

### jacobi_amplitude

<a id="entry-presentation_rust_api_session_jacobi_amplitude"></a>
<a id="placement-placement.rust.native_rust.api_session_jacobi_amplitude.59bfe76c4df5"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn jacobi_amplitude(
    &self,
    argument: &Expression,
    parameter: &Expression,
) -> Result<Expression, ApiError>
```

The pinned Jacobi amplitude \(\operatorname{am}(u\mid m)\), with parameter \(m=k^2\).

### jacobi_cn

<a id="entry-presentation_rust_api_session_jacobi_cn"></a>
<a id="placement-placement.rust.native_rust.api_session_jacobi_cn.4ebe048b1499"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn jacobi_cn(
    &self,
    argument: &Expression,
    parameter: &Expression,
) -> Result<Expression, ApiError>
```

Jacobi's elliptic function \(\operatorname{cn}(u\mid m)\), with parameter \(m=k^2\).

### jacobi_dn

<a id="entry-presentation_rust_api_session_jacobi_dn"></a>
<a id="placement-placement.rust.native_rust.api_session_jacobi_dn.9140e04e4d83"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn jacobi_dn(
    &self,
    argument: &Expression,
    parameter: &Expression,
) -> Result<Expression, ApiError>
```

Jacobi's elliptic function \(\operatorname{dn}(u\mid m)\), with parameter \(m=k^2\).

### jacobi_sn

<a id="entry-presentation_rust_api_session_jacobi_sn"></a>
<a id="placement-placement.rust.native_rust.api_session_jacobi_sn.66357aebf510"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn jacobi_sn(
    &self,
    argument: &Expression,
    parameter: &Expression,
) -> Result<Expression, ApiError>
```

Jacobi's elliptic function \(\operatorname{sn}(u\mid m)\), with parameter \(m=k^2\).

### jacobi_theta_1

<a id="entry-presentation_rust_api_session_jacobi_theta_1"></a>
<a id="placement-placement.rust.native_rust.api_session_jacobi_theta_1.513b848b5e9a"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn jacobi_theta_1(
    &self,
    argument: &Expression,
    half_period_ratio: &Expression,
) -> Result<Expression, ApiError>
```

Jacobi's first theta function \(\theta_1(z\mid\tau)\), with half-period ratio \(\tau\).

### jacobi_theta_2

<a id="entry-presentation_rust_api_session_jacobi_theta_2"></a>
<a id="placement-placement.rust.native_rust.api_session_jacobi_theta_2.56f271faea65"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn jacobi_theta_2(
    &self,
    argument: &Expression,
    half_period_ratio: &Expression,
) -> Result<Expression, ApiError>
```

Jacobi's second theta function \(\theta_2(z\mid\tau)\), with half-period ratio \(\tau\).

### jacobi_theta_3

<a id="entry-presentation_rust_api_session_jacobi_theta_3"></a>
<a id="placement-placement.rust.native_rust.api_session_jacobi_theta_3.e177299887b8"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn jacobi_theta_3(
    &self,
    argument: &Expression,
    half_period_ratio: &Expression,
) -> Result<Expression, ApiError>
```

Jacobi's third theta function \(\theta_3(z\mid\tau)\), with half-period ratio \(\tau\).

### jacobi_theta_4

<a id="entry-presentation_rust_api_session_jacobi_theta_4"></a>
<a id="placement-placement.rust.native_rust.api_session_jacobi_theta_4.b4ae94e3aa37"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn jacobi_theta_4(
    &self,
    argument: &Expression,
    half_period_ratio: &Expression,
) -> Result<Expression, ApiError>
```

Jacobi's fourth theta function \(\theta_4(z\mid\tau)\), with half-period ratio \(\tau\).

### lambert_w

<a id="entry-presentation_rust_api_session_lambert_w"></a>
<a id="placement-placement.rust.native_rust.api_session_lambert_w.39c757c31857"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn lambert_w(
    &self,
    argument: &Expression,
) -> Result<Expression, ApiError>
```

Provides the `lambert_w` operation on this native type.

### logarithmic_integral

<a id="entry-presentation_rust_api_session_logarithmic_integral"></a>
<a id="placement-placement.rust.native_rust.api_session_logarithmic_integral.c7cfc3614f77"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn logarithmic_integral(
    &self,
    argument: &Expression,
) -> Result<Expression, ApiError>
```

Provides the `logarithmic_integral` operation on this native type.

### sine_integral

<a id="entry-presentation_rust_api_session_sine_integral"></a>
<a id="placement-placement.rust.native_rust.api_session_sine_integral.a6389eb5d184"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn sine_integral(
    &self,
    argument: &Expression,
) -> Result<Expression, ApiError>
```

Provides the `sine_integral` operation on this native type.

### OrthogonalPolynomialBasis

<a id="entry-presentation_rust_api_orthogonalpolynomialbasis"></a>
<a id="placement-placement.rust.native_rust.api_orthogonalpolynomialbasis.370251607a5b"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use options::OrthogonalPolynomialBasis;
```

A requested classical orthogonal polynomial basis and its parameters.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_options_orthogonalpolynomialbasis.04fb9abf1806"></a>
<p class="symi-entry-owner">Type: <code>api::options::OrthogonalPolynomialBasis</code></p>

```rust signature
pub struct OrthogonalPolynomialBasis
```

</details>

#### OrthogonalPolynomialBasis.family

<a id="entry-presentation_rust_api_orthogonalpolynomialbasis_family"></a>
<a id="placement-placement.rust.native_rust.api_options_orthogonalpolynomialbasis_family.5c6b79da197b"></a>
<p class="symi-entry-owner">api::options::OrthogonalPolynomialBasis field</p>

```rust signature
pub family:
```

The requested family.

#### OrthogonalPolynomialBasis.new

<a id="entry-presentation_rust_api_orthogonalpolynomialbasis_new"></a>
<a id="placement-placement.rust.native_rust.api_options_orthogonalpolynomialbasis_new.c2f18c2e4f4e"></a>
<p class="symi-entry-owner">api::options::OrthogonalPolynomialBasis method</p>

```rust signature
pub fn new(
    family: OrthogonalPolynomialFamily,
    parameters: Vec<Expression>,
) -> Self
```

Names one basis and its parameters in canonical call order.

#### OrthogonalPolynomialBasis.parameters

<a id="entry-presentation_rust_api_orthogonalpolynomialbasis_parameters"></a>
<a id="placement-placement.rust.native_rust.api_options_orthogonalpolynomialbasis_parameters.3ac78ae0483d"></a>
<p class="symi-entry-owner">api::options::OrthogonalPolynomialBasis field</p>

```rust signature
pub parameters:
```

The family parameters, in canonical call order.

#### OrthogonalPolynomialBasis.resolve

<a id="entry-presentation_rust_api_orthogonalpolynomialbasis_resolve"></a>
<a id="placement-placement.rust.native_rust.api_options_orthogonalpolynomialbasis_resolve.9db79e15663b"></a>
<p class="symi-entry-owner">api::options::OrthogonalPolynomialBasis method</p>

```rust signature
pub fn resolve(&self, session: &Session) -> Result<core_basis, ApiError>
```

Resolves this requested basis against a session that owns its parameters.

### OrthogonalPolynomialFamily

<a id="entry-presentation_rust_api_orthogonalpolynomialfamily"></a>
<a id="placement-placement.rust.native_rust.api_orthogonalpolynomialfamily.34934096529d"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use options::OrthogonalPolynomialFamily;
```

A classical orthogonal polynomial family named at the API boundary.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_options_orthogonalpolynomialfamily.44acbda7c6fa"></a>
<p class="symi-entry-owner">Type: <code>api::options::OrthogonalPolynomialFamily</code></p>

```rust signature
pub enum OrthogonalPolynomialFamily
```

</details>

#### OrthogonalPolynomialFamily.ChebyshevFirstKind

<a id="entry-presentation_rust_api_orthogonalpolynomialfamily_chebyshevfirstkind"></a>
<a id="placement-placement.rust.native_rust.api_options_orthogonalpolynomialfamily_chebyshevfirstkind.f402e01d4aad"></a>
<p class="symi-entry-owner">api::options::OrthogonalPolynomialFamily variant</p>

```rust signature
ChebyshevFirstKind,
```

The Chebyshev family of the first kind.

#### OrthogonalPolynomialFamily.ChebyshevSecondKind

<a id="entry-presentation_rust_api_orthogonalpolynomialfamily_chebyshevsecondkind"></a>
<a id="placement-placement.rust.native_rust.api_options_orthogonalpolynomialfamily_chebyshevsecondkind.4dd13b2911ea"></a>
<p class="symi-entry-owner">api::options::OrthogonalPolynomialFamily variant</p>

```rust signature
ChebyshevSecondKind,
```

The Chebyshev family of the second kind.

#### OrthogonalPolynomialFamily.Gegenbauer

<a id="entry-presentation_rust_api_orthogonalpolynomialfamily_gegenbauer"></a>
<a id="placement-placement.rust.native_rust.api_options_orthogonalpolynomialfamily_gegenbauer.b87109555ffa"></a>
<p class="symi-entry-owner">api::options::OrthogonalPolynomialFamily variant</p>

```rust signature
Gegenbauer,
```

The Gegenbauer family, carrying one parameter.

#### OrthogonalPolynomialFamily.GeneralizedLaguerre

<a id="entry-presentation_rust_api_orthogonalpolynomialfamily_generalizedlaguerre"></a>
<a id="placement-placement.rust.native_rust.api_options_orthogonalpolynomialfamily_generalizedlaguerre.ec30b467ff32"></a>
<p class="symi-entry-owner">api::options::OrthogonalPolynomialFamily variant</p>

```rust signature
GeneralizedLaguerre,
```

The generalized Laguerre family, carrying one parameter.

#### OrthogonalPolynomialFamily.Hermite

<a id="entry-presentation_rust_api_orthogonalpolynomialfamily_hermite"></a>
<a id="placement-placement.rust.native_rust.api_options_orthogonalpolynomialfamily_hermite.79244af84bf2"></a>
<p class="symi-entry-owner">api::options::OrthogonalPolynomialFamily variant</p>

```rust signature
Hermite,
```

The physicists' Hermite family.

#### OrthogonalPolynomialFamily.Jacobi

<a id="entry-presentation_rust_api_orthogonalpolynomialfamily_jacobi"></a>
<a id="placement-placement.rust.native_rust.api_options_orthogonalpolynomialfamily_jacobi.dbde0db1762c"></a>
<p class="symi-entry-owner">api::options::OrthogonalPolynomialFamily variant</p>

```rust signature
Jacobi,
```

The Jacobi family, carrying two parameters.

#### OrthogonalPolynomialFamily.Legendre

<a id="entry-presentation_rust_api_orthogonalpolynomialfamily_legendre"></a>
<a id="placement-placement.rust.native_rust.api_options_orthogonalpolynomialfamily_legendre.8405507b168d"></a>
<p class="symi-entry-owner">api::options::OrthogonalPolynomialFamily variant</p>

```rust signature
Legendre,
```

The Legendre family.

#### OrthogonalPolynomialFamily.from_name

<a id="entry-presentation_rust_api_orthogonalpolynomialfamily_from_name"></a>
<a id="placement-placement.rust.native_rust.api_options_orthogonalpolynomialfamily_from_name.c56e40287b82"></a>
<p class="symi-entry-owner">api::options::OrthogonalPolynomialFamily method</p>

```rust signature
pub fn from_name(name: &str) -> Result<Self, ApiError>
```

Resolves the stable binding spelling of an orthogonal polynomial family.

#### OrthogonalPolynomialFamily.into_core

<a id="entry-presentation_rust_api_orthogonalpolynomialfamily_into_core"></a>
<a id="placement-placement.rust.native_rust.api_options_orthogonalpolynomialfamily_into_core.a609221c1904"></a>
<p class="symi-entry-owner">api::options::OrthogonalPolynomialFamily method</p>

```rust signature
pub fn into_core(self) -> core_family
```

Converts this binding-neutral value to the engine representation.

#### OrthogonalPolynomialFamily.name

<a id="entry-presentation_rust_api_orthogonalpolynomialfamily_name"></a>
<a id="placement-placement.rust.native_rust.api_options_orthogonalpolynomialfamily_name.ae01d85e05b7"></a>
<p class="symi-entry-owner">api::options::OrthogonalPolynomialFamily method</p>

```rust signature
pub fn name(self) -> &'static str
```

Returns the stable binding spelling of this orthogonal polynomial family.

#### OrthogonalPolynomialFamily.parameter_count

<a id="entry-presentation_rust_api_orthogonalpolynomialfamily_parameter_count"></a>
<a id="placement-placement.rust.native_rust.api_options_orthogonalpolynomialfamily_parameter_count.b0eccf408a90"></a>
<p class="symi-entry-owner">api::options::OrthogonalPolynomialFamily method</p>

```rust signature
pub fn parameter_count(self) -> usize
```

The number of family parameters this family carries.

