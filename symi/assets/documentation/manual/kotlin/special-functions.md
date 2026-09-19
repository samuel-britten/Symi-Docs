# Special functions

Special functions retain their symbolic form when a closed expression is not available.

## Gamma family

The first-tier gamma special functions. Symbolic special values, the
non-positive-integer poles, the recurrence/reflection identities, and
arbitrary-precision numeric evaluation (real and complex) all apply.

### gamma

<a id="entry-presentation_kotlin_special_functions_capability_special_functions_gamma_api_session_gamma"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_gamma.0ea210dcac94"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun gamma(argument: UniffiExpression): UniffiExpression
```


The gamma function \(\Gamma(x)\), the analytic continuation of `(x-1)!`.

### log_gamma

<a id="entry-presentation_kotlin_special_functions_capability_special_functions_log_gamma_api_session_log_gamma"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_loggamma.3781745228d8"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun logGamma(argument: UniffiExpression): UniffiExpression
```


The principal-branch log-gamma function (not `log(gamma(x))` off the real axis).

### digamma

<a id="entry-presentation_kotlin_special_functions_capability_special_functions_digamma_api_session_digamma"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_digamma.fb3d6022e93e"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun digamma(argument: UniffiExpression): UniffiExpression
```


The digamma function \(\psi(x) = \Gamma'(x)/\Gamma(x)\).

### polygamma

<a id="entry-presentation_kotlin_special_functions_capability_special_functions_polygamma_api_session_polygamma"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_polygamma.a91957c1d8a4"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun polygamma(
    order: UniffiExpression,
    argument: UniffiExpression,
): UniffiExpression
```


The polygamma function \(\psi^{(n)}(x)\), the order-th derivative of digamma;
`polygamma(0, x)` reduces to `digamma(x)`.

### beta

<a id="entry-presentation_kotlin_special_functions_capability_special_functions_beta_api_session_beta"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_beta.f772eea7d0c7"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun beta(
    left: UniffiExpression,
    right: UniffiExpression,
): UniffiExpression
```


The beta function \(\operatorname{B}(x, y) = \Gamma(x)\Gamma(y)/\Gamma(x+y)\).

### zeta

<a id="entry-presentation_kotlin_special_functions_capability_special_functions_zeta_api_session_zeta"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_zeta.ddd0af7f5ae2"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun zeta(argument: UniffiExpression): UniffiExpression
```


The Riemann zeta function \(\zeta(s) = \sum_{k\geq 1} k^{-s}\). Even positive integers fold to
the \(\pi\) closed forms (`zeta(2) = pi^2/6`, `zeta(4) = pi^4/90`, …), `zeta(0) = -1/2`,
negative integers to their rational functional values (`zeta(-1) = -1/12`,
`zeta(-2n) = 0`); `zeta(1)` is the simple pole (`undefined`). Odd positive
integers (`zeta(3)`, …) stay the symbolic head; every value evaluates to
arbitrary precision over \(\mathbb{R}\) and \(\mathbb{C}\).

### hurwitz_zeta

<a id="entry-presentation_kotlin_special_functions_capability_special_functions_hurwitz_zeta_api_session_hurwitz_zeta"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_hurwitzzeta.a96c3433a314"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun hurwitzZeta(
    s: UniffiExpression,
    a: UniffiExpression,
): UniffiExpression
```


The Hurwitz zeta function \(\zeta(s, a) = \sum_{k\geq 0} (k+a)^{-s}\), the numeric primitive of
the family. `hurwitz_zeta(s, 1)` folds to `zeta(s)`; `hurwitz_zeta(s, 1/2)` to
\((2^s - 1)\zeta(s)\); a positive integer second argument reduces to `zeta(s)` minus
the finite head; a non-positive integer first argument gives a Bernoulli
polynomial in `a`.

### polylogarithm

<a id="entry-presentation_kotlin_special_functions_capability_special_functions_polylogarithm_api_session_polylogarithm"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_polylogarithm.bfc4bf8c61ad"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun polylogarithm(
    order: UniffiExpression,
    argument: UniffiExpression,
): UniffiExpression
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

<a id="entry-presentation_kotlin_special_functions_capability_special_functions_lerch_phi_api_session_lerch_phi"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_lerchphi.5d17abc646b0"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun lerchPhi(
    argument: UniffiExpression,
    order: UniffiExpression,
    shift: UniffiExpression,
): UniffiExpression
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

<a id="entry-presentation_kotlin_special_functions_capability_special_functions_hypergeometric_pfq_api_session_hypergeometric_pfq"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_hypergeometricpfq.b529c61d79e9"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun hypergeometricPfq(
    upperParameters: List<UniffiExpression>,
    lowerParameters: List<UniffiExpression>,
    argument: UniffiExpression,
): UniffiExpression
```


The generalized hypergeometric function \({}_pF_q(\mathbf a; \mathbf b; z)\). The two parameter
groups are ordered sequences: order and repetition are significant, so a set or frozenset is
rejected.

### hypergeometric_0f1

<a id="entry-presentation_kotlin_special_functions_capability_special_functions_hypergeometric_0f1_api_session_hypergeometric_0f1"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_hypergeometric0f1.6af9422ca67c"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun hypergeometric0f1(
    lowerParameter: UniffiExpression,
    argument: UniffiExpression,
): UniffiExpression
```


The confluent limit \({}_0F_1(; b; z)\), lowered to `hypergeometric_pfq`.

### hypergeometric_1f1

<a id="entry-presentation_kotlin_special_functions_capability_special_functions_hypergeometric_1f1_api_session_hypergeometric_1f1"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_hypergeometric1f1.9edaff1a660c"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun hypergeometric1f1(
    upperParameter: UniffiExpression,
    lowerParameter: UniffiExpression,
    argument: UniffiExpression,
): UniffiExpression
```


Kummer's confluent hypergeometric function \({}_1F_1(a; b; z)\).

### hypergeometric_2f1

<a id="entry-presentation_kotlin_special_functions_capability_special_functions_hypergeometric_2f1_api_session_hypergeometric_2f1"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_hypergeometric2f1.964e03970292"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun hypergeometric2f1(
    firstUpperParameter: UniffiExpression,
    secondUpperParameter: UniffiExpression,
    lowerParameter: UniffiExpression,
    argument: UniffiExpression,
): UniffiExpression
```


The Gauss hypergeometric function \({}_2F_1(a, b; c; z)\).

## Meijer G-function

### meijer_g

<a id="entry-presentation_kotlin_special_functions_capability_special_functions_meijer_g_api_session_meijer_g"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_meijerg.f0679bb70c4d"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun meijerG(
    upperNumeratorParameters: List<UniffiExpression>,
    upperDenominatorParameters: List<UniffiExpression>,
    lowerNumeratorParameters: List<UniffiExpression>,
    lowerDenominatorParameters: List<UniffiExpression>,
    argument: UniffiExpression,
): UniffiExpression
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

*Not exposed by the Kotlin bindings. Available as [`api::Session::bessel_j`](/symi/rust/special-functions#bessel_j) in Rust.*


The principal Bessel function \(J_\nu(z)\).

### bessel_y

*Not exposed by the Kotlin bindings. Available as [`api::Session::bessel_y`](/symi/rust/special-functions#bessel_y) in Rust.*


The principal Bessel function \(Y_\nu(z)\).

### bessel_i

*Not exposed by the Kotlin bindings. Available as [`api::Session::bessel_i`](/symi/rust/special-functions#bessel_i) in Rust.*


The principal modified Bessel function \(I_\nu(z)\).

### bessel_k

*Not exposed by the Kotlin bindings. Available as [`api::Session::bessel_k`](/symi/rust/special-functions#bessel_k) in Rust.*


The principal modified Bessel function \(K_\nu(z)\).

### hankel_first_kind

*Not exposed by the Kotlin bindings. Available as [`api::Session::hankel_first_kind`](/symi/rust/special-functions#hankel_first_kind) in Rust.*


The principal Hankel function \(H_\nu^{(1)}(z)\).

### hankel_second_kind

*Not exposed by the Kotlin bindings. Available as [`api::Session::hankel_second_kind`](/symi/rust/special-functions#hankel_second_kind) in Rust.*


The principal Hankel function \(H_\nu^{(2)}(z)\).

### spherical_bessel_j

*Not exposed by the Kotlin bindings. Available as [`api::Session::spherical_bessel_j`](/symi/rust/special-functions#spherical_bessel_j) in Rust.*


The spherical Bessel function \(\mathsf j_n(z)\), for \(n\in\mathbb N_0\).

### spherical_bessel_y

*Not exposed by the Kotlin bindings. Available as [`api::Session::spherical_bessel_y`](/symi/rust/special-functions#spherical_bessel_y) in Rust.*


The spherical Bessel function \(\mathsf y_n(z)\), for \(n\in\mathbb N_0\).

### spherical_hankel_first_kind

*Not exposed by the Kotlin bindings. Available as [`api::Session::spherical_hankel_first_kind`](/symi/rust/special-functions#spherical_hankel_first_kind) in Rust.*


The spherical Hankel function \(\mathsf h_n^{(1)}(z)\), for \(n\in\mathbb N_0\).

### spherical_hankel_second_kind

*Not exposed by the Kotlin bindings. Available as [`api::Session::spherical_hankel_second_kind`](/symi/rust/special-functions#spherical_hankel_second_kind) in Rust.*


The spherical Hankel function \(\mathsf h_n^{(2)}(z)\), for \(n\in\mathbb N_0\).

### airy_ai

*Not exposed by the Kotlin bindings. Available as [`api::Session::airy_ai`](/symi/rust/special-functions#airy_ai) in Rust.*


The Airy function \(\operatorname{Ai}(z)\).

### airy_bi

*Not exposed by the Kotlin bindings. Available as [`api::Session::airy_bi`](/symi/rust/special-functions#airy_bi) in Rust.*


The Airy function \(\operatorname{Bi}(z)\).

### airy_ai_prime

*Not exposed by the Kotlin bindings. Available as [`api::Session::airy_ai_prime`](/symi/rust/special-functions#airy_ai_prime) in Rust.*


The derivative \(\operatorname{Ai}'(z)\).

### airy_bi_prime

*Not exposed by the Kotlin bindings. Available as [`api::Session::airy_bi_prime`](/symi/rust/special-functions#airy_bi_prime) in Rust.*


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

<a id="entry-presentation_kotlin_special_functions_capability_special_functions_jacobi_polynomial_api_session_jacobi_polynomial"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_jacobipolynomial.2dd19850ed8a"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun jacobiPolynomial(
    degree: UniffiExpression,
    firstParameter: UniffiExpression,
    secondParameter: UniffiExpression,
    argument: UniffiExpression,
): UniffiExpression
```


The Jacobi polynomial \(P_n^{(\alpha,\beta)}(x)\).

### gegenbauer_polynomial

<a id="entry-presentation_kotlin_special_functions_capability_special_functions_gegenbauer_polynomial_api_session_gegenbauer_polynomial"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_gegenbauerpolynomial.a0fea350c5f6"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun gegenbauerPolynomial(
    degree: UniffiExpression,
    parameter: UniffiExpression,
    argument: UniffiExpression,
): UniffiExpression
```


The Gegenbauer polynomial \(C_n^{(\lambda)}(x)\).

### chebyshev_polynomial_first_kind

<a id="entry-presentation_kotlin_special_functions_capability_special_functions_chebyshev_polynomial_first_kind_api_session_chebyshev_polynomial_first_kind"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_chebyshevpolynomialfirstkind.51c2758ba02b"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun chebyshevPolynomialFirstKind(
    degree: UniffiExpression,
    argument: UniffiExpression,
): UniffiExpression
```


The Chebyshev polynomial of the first kind \(T_n(x)\).

### chebyshev_polynomial_second_kind

<a id="entry-presentation_kotlin_special_functions_capability_special_functions_chebyshev_polynomial_second_kind_api_session_chebyshev_polynomial_second_kind"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_chebyshevpolynomialsecondkind.c6d588c11e4c"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun chebyshevPolynomialSecondKind(
    degree: UniffiExpression,
    argument: UniffiExpression,
): UniffiExpression
```


The Chebyshev polynomial of the second kind \(U_n(x)\).

### legendre_polynomial

<a id="entry-presentation_kotlin_special_functions_capability_special_functions_legendre_polynomial_api_session_legendre_polynomial"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_legendrepolynomial.d1d7bac3f14b"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun legendrePolynomial(
    degree: UniffiExpression,
    argument: UniffiExpression,
): UniffiExpression
```


The Legendre polynomial \(P_n(x)\).

### generalized_laguerre_polynomial

<a id="entry-presentation_kotlin_special_functions_capability_special_functions_generalized_laguerre_polynomial_api_session_generalized_laguerre_polynomial"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_generalizedlaguerrepolynomial.ac84b4ed2920"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun generalizedLaguerrePolynomial(
    degree: UniffiExpression,
    parameter: UniffiExpression,
    argument: UniffiExpression,
): UniffiExpression
```


The generalized Laguerre polynomial \(L_n^{(\alpha)}(x)\).

### hermite_polynomial

<a id="entry-presentation_kotlin_special_functions_capability_special_functions_hermite_polynomial_api_session_hermite_polynomial"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_hermitepolynomial.011383b34c8c"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun hermitePolynomial(
    degree: UniffiExpression,
    argument: UniffiExpression,
): UniffiExpression
```


The physicists' Hermite polynomial \(H_n(x)\).

### ultraspherical_polynomial

<a id="entry-presentation_kotlin_special_functions_capability_special_functions_ultraspherical_polynomial_api_session_ultraspherical_polynomial"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_ultrasphericalpolynomial.cd996735a154"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun ultrasphericalPolynomial(
    degree: UniffiExpression,
    parameter: UniffiExpression,
    argument: UniffiExpression,
): UniffiExpression
```


The ultraspherical polynomial, lowered to its canonical Gegenbauer head.

### laguerre_polynomial

<a id="entry-presentation_kotlin_special_functions_capability_special_functions_laguerre_polynomial_api_session_laguerre_polynomial"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_laguerrepolynomial.fe38a29e3055"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun laguerrePolynomial(
    degree: UniffiExpression,
    argument: UniffiExpression,
): UniffiExpression
```


The Laguerre polynomial, lowered to its canonical generalized Laguerre head.

## Example


## Additional API

### carlson_rc

<a id="entry-presentation_kotlin_special_functions_capability_special_functions_carlson_rc_api_session_carlson_rc"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_carlsonrc.140da4918c5f"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun carlsonRc(
    firstArgument: UniffiExpression,
    secondArgument: UniffiExpression,
): UniffiExpression
```

Carlson's degenerate symmetric elliptic integral \(R_C(x,y)\).

### carlson_rd

<a id="entry-presentation_kotlin_special_functions_capability_special_functions_carlson_rd_api_session_carlson_rd"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_carlsonrd.20a56d4e221b"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun carlsonRd(
    firstArgument: UniffiExpression,
    secondArgument: UniffiExpression,
    thirdArgument: UniffiExpression,
): UniffiExpression
```

Carlson's symmetric elliptic integral \(R_D(x,y,z)\).

### carlson_rf

<a id="entry-presentation_kotlin_special_functions_capability_special_functions_carlson_rf_api_session_carlson_rf"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_carlsonrf.8906097bfa7f"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun carlsonRf(
    firstArgument: UniffiExpression,
    secondArgument: UniffiExpression,
    thirdArgument: UniffiExpression,
): UniffiExpression
```

Carlson's symmetric elliptic integral \(R_F(x,y,z)\).

### carlson_rj

<a id="entry-presentation_kotlin_special_functions_capability_special_functions_carlson_rj_api_session_carlson_rj"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_carlsonrj.5a50dc61e4b3"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun carlsonRj(
    firstArgument: UniffiExpression,
    secondArgument: UniffiExpression,
    thirdArgument: UniffiExpression,
    fourthArgument: UniffiExpression,
): UniffiExpression
```

Carlson's symmetric elliptic integral \(R_J(x,y,z,p)\).

### elliptic_e

<a id="entry-presentation_kotlin_special_functions_capability_special_functions_elliptic_e_api_session_elliptic_e"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_elliptice.45a7fa42c7f7"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun ellipticE(parameter: UniffiExpression): UniffiExpression
```

The complete second-kind elliptic integral \(E(m)\), with parameter \(m=k^2\).

### elliptic_e_incomplete

<a id="entry-presentation_kotlin_special_functions_capability_special_functions_elliptic_e_incomplete_api_session_elliptic_e_incomplete"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_ellipticeincomplete.7652a9d63332"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun ellipticEIncomplete(
    amplitude: UniffiExpression,
    parameter: UniffiExpression,
): UniffiExpression
```

The incomplete second-kind elliptic integral \(E(\phi\mid m)\), with parameter \(m=k^2\).

### elliptic_f

<a id="entry-presentation_kotlin_special_functions_capability_special_functions_elliptic_f_api_session_elliptic_f"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_ellipticf.43a71a02fc9f"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun ellipticF(
    amplitude: UniffiExpression,
    parameter: UniffiExpression,
): UniffiExpression
```

The incomplete first-kind elliptic integral \(F(\phi\mid m)\), with parameter \(m=k^2\).

### elliptic_k

<a id="entry-presentation_kotlin_special_functions_capability_special_functions_elliptic_k_api_session_elliptic_k"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_elliptick.24c586722edf"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun ellipticK(parameter: UniffiExpression): UniffiExpression
```

The complete first-kind elliptic integral \(K(m)\), with parameter \(m=k^2\).

### elliptic_pi

<a id="entry-presentation_kotlin_special_functions_capability_special_functions_elliptic_pi_api_session_elliptic_pi"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_ellipticpi.1786a6bd3216"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun ellipticPi(
    characteristic: UniffiExpression,
    parameter: UniffiExpression,
): UniffiExpression
```

The complete third-kind elliptic integral \(\Pi(n\mid m)\), with parameter \(m=k^2\).

### elliptic_pi_incomplete

<a id="entry-presentation_kotlin_special_functions_capability_special_functions_elliptic_pi_incomplete_api_session_elliptic_pi_incomplete"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_ellipticpiincomplete.5276092d1bce"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun ellipticPiIncomplete(
    characteristic: UniffiExpression,
    amplitude: UniffiExpression,
    parameter: UniffiExpression,
): UniffiExpression
```

The incomplete third-kind elliptic integral \(\Pi(n;\phi\mid m)\), with parameter \(m=k^2\).

### jacobi_amplitude

<a id="entry-presentation_kotlin_special_functions_capability_special_functions_jacobi_amplitude_api_session_jacobi_amplitude"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_jacobiamplitude.07ce4a670b4c"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun jacobiAmplitude(
    argument: UniffiExpression,
    parameter: UniffiExpression,
): UniffiExpression
```

The pinned Jacobi amplitude \(\operatorname{am}(u\mid m)\), with parameter \(m=k^2\).

### jacobi_cn

<a id="entry-presentation_kotlin_special_functions_capability_special_functions_jacobi_cn_api_session_jacobi_cn"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_jacobicn.441e0a7fd817"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun jacobiCn(
    argument: UniffiExpression,
    parameter: UniffiExpression,
): UniffiExpression
```

Jacobi's elliptic function \(\operatorname{cn}(u\mid m)\), with parameter \(m=k^2\).

### jacobi_dn

<a id="entry-presentation_kotlin_special_functions_capability_special_functions_jacobi_dn_api_session_jacobi_dn"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_jacobidn.28c9157b2421"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun jacobiDn(
    argument: UniffiExpression,
    parameter: UniffiExpression,
): UniffiExpression
```

Jacobi's elliptic function \(\operatorname{dn}(u\mid m)\), with parameter \(m=k^2\).

### jacobi_sn

<a id="entry-presentation_kotlin_special_functions_capability_special_functions_jacobi_sn_api_session_jacobi_sn"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_jacobisn.1f82c04da999"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun jacobiSn(
    argument: UniffiExpression,
    parameter: UniffiExpression,
): UniffiExpression
```

Jacobi's elliptic function \(\operatorname{sn}(u\mid m)\), with parameter \(m=k^2\).

### jacobi_theta_1

<a id="entry-presentation_kotlin_special_functions_capability_special_functions_jacobi_theta_1_api_session_jacobi_theta_1"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_jacobitheta1.5752a7d62167"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun jacobiTheta1(
    argument: UniffiExpression,
    halfPeriodRatio: UniffiExpression,
): UniffiExpression
```

Jacobi's first theta function \(\theta_1(z\mid\tau)\), with half-period ratio \(\tau\).

### jacobi_theta_2

<a id="entry-presentation_kotlin_special_functions_capability_special_functions_jacobi_theta_2_api_session_jacobi_theta_2"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_jacobitheta2.1477dfc0df8f"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun jacobiTheta2(
    argument: UniffiExpression,
    halfPeriodRatio: UniffiExpression,
): UniffiExpression
```

Jacobi's second theta function \(\theta_2(z\mid\tau)\), with half-period ratio \(\tau\).

### jacobi_theta_3

<a id="entry-presentation_kotlin_special_functions_capability_special_functions_jacobi_theta_3_api_session_jacobi_theta_3"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_jacobitheta3.70e7bcbeaecd"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun jacobiTheta3(
    argument: UniffiExpression,
    halfPeriodRatio: UniffiExpression,
): UniffiExpression
```

Jacobi's third theta function \(\theta_3(z\mid\tau)\), with half-period ratio \(\tau\).

### jacobi_theta_4

<a id="entry-presentation_kotlin_special_functions_capability_special_functions_jacobi_theta_4_api_session_jacobi_theta_4"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_jacobitheta4.c7b9cd1e231b"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun jacobiTheta4(
    argument: UniffiExpression,
    halfPeriodRatio: UniffiExpression,
): UniffiExpression
```

Jacobi's fourth theta function \(\theta_4(z\mid\tau)\), with half-period ratio \(\tau\).

