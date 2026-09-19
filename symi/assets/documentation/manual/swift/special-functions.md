# Special functions

Special functions retain their symbolic form when a closed expression is not available.

## Gamma family

The first-tier gamma special functions. Symbolic special values, the
non-positive-integer poles, the recurrence/reflection identities, and
arbitrary-precision numeric evaluation (real and complex) all apply.

### gamma

<a id="entry-presentation_swift_special_functions_capability_special_functions_gamma_api_session_gamma"></a>
<a id="placement-placement.swift.swift_object.uniffisession_gamma.5e1040887cef"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func gamma(argument: UniffiExpression) -> UniffiExpression
```


The gamma function \(\Gamma(x)\), the analytic continuation of `(x-1)!`.

### log_gamma

<a id="entry-presentation_swift_special_functions_capability_special_functions_log_gamma_api_session_log_gamma"></a>
<a id="placement-placement.swift.swift_object.uniffisession_loggamma.d3d8b2917264"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func logGamma(argument: UniffiExpression) -> UniffiExpression
```


The principal-branch log-gamma function (not `log(gamma(x))` off the real axis).

### digamma

<a id="entry-presentation_swift_special_functions_capability_special_functions_digamma_api_session_digamma"></a>
<a id="placement-placement.swift.swift_object.uniffisession_digamma.6e7dc6f55806"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func digamma(argument: UniffiExpression) -> UniffiExpression
```


The digamma function \(\psi(x) = \Gamma'(x)/\Gamma(x)\).

### polygamma

<a id="entry-presentation_swift_special_functions_capability_special_functions_polygamma_api_session_polygamma"></a>
<a id="placement-placement.swift.swift_object.uniffisession_polygamma.ad163e50ac95"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func polygamma(
    order: UniffiExpression,
    argument: UniffiExpression,
) -> UniffiExpression
```


The polygamma function \(\psi^{(n)}(x)\), the order-th derivative of digamma;
`polygamma(0, x)` reduces to `digamma(x)`.

### beta

<a id="entry-presentation_swift_special_functions_capability_special_functions_beta_api_session_beta"></a>
<a id="placement-placement.swift.swift_object.uniffisession_beta.40c50c0fa055"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func beta(
    left: UniffiExpression,
    right: UniffiExpression,
) -> UniffiExpression
```


The beta function \(\operatorname{B}(x, y) = \Gamma(x)\Gamma(y)/\Gamma(x+y)\).

### zeta

<a id="entry-presentation_swift_special_functions_capability_special_functions_zeta_api_session_zeta"></a>
<a id="placement-placement.swift.swift_object.uniffisession_zeta.ca91cb3d34c1"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func zeta(argument: UniffiExpression) -> UniffiExpression
```


The Riemann zeta function \(\zeta(s) = \sum_{k\geq 1} k^{-s}\). Even positive integers fold to
the \(\pi\) closed forms (`zeta(2) = pi^2/6`, `zeta(4) = pi^4/90`, …), `zeta(0) = -1/2`,
negative integers to their rational functional values (`zeta(-1) = -1/12`,
`zeta(-2n) = 0`); `zeta(1)` is the simple pole (`undefined`). Odd positive
integers (`zeta(3)`, …) stay the symbolic head; every value evaluates to
arbitrary precision over \(\mathbb{R}\) and \(\mathbb{C}\).

### hurwitz_zeta

<a id="entry-presentation_swift_special_functions_capability_special_functions_hurwitz_zeta_api_session_hurwitz_zeta"></a>
<a id="placement-placement.swift.swift_object.uniffisession_hurwitzzeta.9184e588028c"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func hurwitzZeta(
    s: UniffiExpression,
    a: UniffiExpression,
) -> UniffiExpression
```


The Hurwitz zeta function \(\zeta(s, a) = \sum_{k\geq 0} (k+a)^{-s}\), the numeric primitive of
the family. `hurwitz_zeta(s, 1)` folds to `zeta(s)`; `hurwitz_zeta(s, 1/2)` to
\((2^s - 1)\zeta(s)\); a positive integer second argument reduces to `zeta(s)` minus
the finite head; a non-positive integer first argument gives a Bernoulli
polynomial in `a`.

### polylogarithm

<a id="entry-presentation_swift_special_functions_capability_special_functions_polylogarithm_api_session_polylogarithm"></a>
<a id="placement-placement.swift.swift_object.uniffisession_polylogarithm.ba44f655ad31"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func polylogarithm(
    order: UniffiExpression,
    argument: UniffiExpression,
) -> UniffiExpression
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

<a id="entry-presentation_swift_special_functions_capability_special_functions_lerch_phi_api_session_lerch_phi"></a>
<a id="placement-placement.swift.swift_object.uniffisession_lerchphi.52818c9ab1da"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func lerchPhi(
    argument: UniffiExpression,
    order: UniffiExpression,
    shift: UniffiExpression,
) -> UniffiExpression
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

<a id="entry-presentation_swift_special_functions_capability_special_functions_hypergeometric_pfq_api_session_hypergeometric_pfq"></a>
<a id="placement-placement.swift.swift_object.uniffisession_hypergeometricpfq.ad7b0213f884"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func hypergeometricPfq(
    upperParameters: [UniffiExpression],
    lowerParameters: [UniffiExpression],
    argument: UniffiExpression,
) -> UniffiExpression
```


The generalized hypergeometric function \({}_pF_q(\mathbf a; \mathbf b; z)\). The two parameter
groups are ordered sequences: order and repetition are significant, so a set or frozenset is
rejected.

### hypergeometric_0f1

<a id="entry-presentation_swift_special_functions_capability_special_functions_hypergeometric_0f1_api_session_hypergeometric_0f1"></a>
<a id="placement-placement.swift.swift_object.uniffisession_hypergeometric0f1.d1bbb1fd9665"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func hypergeometric0f1(
    lowerParameter: UniffiExpression,
    argument: UniffiExpression,
) -> UniffiExpression
```


The confluent limit \({}_0F_1(; b; z)\), lowered to `hypergeometric_pfq`.

### hypergeometric_1f1

<a id="entry-presentation_swift_special_functions_capability_special_functions_hypergeometric_1f1_api_session_hypergeometric_1f1"></a>
<a id="placement-placement.swift.swift_object.uniffisession_hypergeometric1f1.97d99f29d4a7"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func hypergeometric1f1(
    upperParameter: UniffiExpression,
    lowerParameter: UniffiExpression,
    argument: UniffiExpression,
) -> UniffiExpression
```


Kummer's confluent hypergeometric function \({}_1F_1(a; b; z)\).

### hypergeometric_2f1

<a id="entry-presentation_swift_special_functions_capability_special_functions_hypergeometric_2f1_api_session_hypergeometric_2f1"></a>
<a id="placement-placement.swift.swift_object.uniffisession_hypergeometric2f1.d9cde3d644c1"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func hypergeometric2f1(
    firstUpperParameter: UniffiExpression,
    secondUpperParameter: UniffiExpression,
    lowerParameter: UniffiExpression,
    argument: UniffiExpression,
) -> UniffiExpression
```


The Gauss hypergeometric function \({}_2F_1(a, b; c; z)\).

## Meijer G-function

### meijer_g

<a id="entry-presentation_swift_special_functions_capability_special_functions_meijer_g_api_session_meijer_g"></a>
<a id="placement-placement.swift.swift_object.uniffisession_meijerg.7f9bbc27e31d"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func meijerG(
    upperNumeratorParameters: [UniffiExpression],
    upperDenominatorParameters: [UniffiExpression],
    lowerNumeratorParameters: [UniffiExpression],
    lowerDenominatorParameters: [UniffiExpression],
    argument: UniffiExpression,
) -> UniffiExpression
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

*Not exposed by the Swift bindings. Available as [`api::Session::bessel_j`](/symi/rust/special-functions#bessel_j) in Rust.*


The principal Bessel function \(J_\nu(z)\).

### bessel_y

*Not exposed by the Swift bindings. Available as [`api::Session::bessel_y`](/symi/rust/special-functions#bessel_y) in Rust.*


The principal Bessel function \(Y_\nu(z)\).

### bessel_i

*Not exposed by the Swift bindings. Available as [`api::Session::bessel_i`](/symi/rust/special-functions#bessel_i) in Rust.*


The principal modified Bessel function \(I_\nu(z)\).

### bessel_k

*Not exposed by the Swift bindings. Available as [`api::Session::bessel_k`](/symi/rust/special-functions#bessel_k) in Rust.*


The principal modified Bessel function \(K_\nu(z)\).

### hankel_first_kind

*Not exposed by the Swift bindings. Available as [`api::Session::hankel_first_kind`](/symi/rust/special-functions#hankel_first_kind) in Rust.*


The principal Hankel function \(H_\nu^{(1)}(z)\).

### hankel_second_kind

*Not exposed by the Swift bindings. Available as [`api::Session::hankel_second_kind`](/symi/rust/special-functions#hankel_second_kind) in Rust.*


The principal Hankel function \(H_\nu^{(2)}(z)\).

### spherical_bessel_j

*Not exposed by the Swift bindings. Available as [`api::Session::spherical_bessel_j`](/symi/rust/special-functions#spherical_bessel_j) in Rust.*


The spherical Bessel function \(\mathsf j_n(z)\), for \(n\in\mathbb N_0\).

### spherical_bessel_y

*Not exposed by the Swift bindings. Available as [`api::Session::spherical_bessel_y`](/symi/rust/special-functions#spherical_bessel_y) in Rust.*


The spherical Bessel function \(\mathsf y_n(z)\), for \(n\in\mathbb N_0\).

### spherical_hankel_first_kind

*Not exposed by the Swift bindings. Available as [`api::Session::spherical_hankel_first_kind`](/symi/rust/special-functions#spherical_hankel_first_kind) in Rust.*


The spherical Hankel function \(\mathsf h_n^{(1)}(z)\), for \(n\in\mathbb N_0\).

### spherical_hankel_second_kind

*Not exposed by the Swift bindings. Available as [`api::Session::spherical_hankel_second_kind`](/symi/rust/special-functions#spherical_hankel_second_kind) in Rust.*


The spherical Hankel function \(\mathsf h_n^{(2)}(z)\), for \(n\in\mathbb N_0\).

### airy_ai

*Not exposed by the Swift bindings. Available as [`api::Session::airy_ai`](/symi/rust/special-functions#airy_ai) in Rust.*


The Airy function \(\operatorname{Ai}(z)\).

### airy_bi

*Not exposed by the Swift bindings. Available as [`api::Session::airy_bi`](/symi/rust/special-functions#airy_bi) in Rust.*


The Airy function \(\operatorname{Bi}(z)\).

### airy_ai_prime

*Not exposed by the Swift bindings. Available as [`api::Session::airy_ai_prime`](/symi/rust/special-functions#airy_ai_prime) in Rust.*


The derivative \(\operatorname{Ai}'(z)\).

### airy_bi_prime

*Not exposed by the Swift bindings. Available as [`api::Session::airy_bi_prime`](/symi/rust/special-functions#airy_bi_prime) in Rust.*


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

<a id="entry-presentation_swift_special_functions_capability_special_functions_jacobi_polynomial_api_session_jacobi_polynomial"></a>
<a id="placement-placement.swift.swift_object.uniffisession_jacobipolynomial.4a5121ca3733"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func jacobiPolynomial(
    degree: UniffiExpression,
    firstParameter: UniffiExpression,
    secondParameter: UniffiExpression,
    argument: UniffiExpression,
) -> UniffiExpression
```


The Jacobi polynomial \(P_n^{(\alpha,\beta)}(x)\).

### gegenbauer_polynomial

<a id="entry-presentation_swift_special_functions_capability_special_functions_gegenbauer_polynomial_api_session_gegenbauer_polynomial"></a>
<a id="placement-placement.swift.swift_object.uniffisession_gegenbauerpolynomial.b0d601ea9dd1"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func gegenbauerPolynomial(
    degree: UniffiExpression,
    parameter: UniffiExpression,
    argument: UniffiExpression,
) -> UniffiExpression
```


The Gegenbauer polynomial \(C_n^{(\lambda)}(x)\).

### chebyshev_polynomial_first_kind

<a id="entry-presentation_swift_special_functions_capability_special_functions_chebyshev_polynomial_first_kind_api_session_chebyshev_polynomial_first_kind"></a>
<a id="placement-placement.swift.swift_object.uniffisession_chebyshevpolynomialfirstkind.ce946e50f2ec"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func chebyshevPolynomialFirstKind(
    degree: UniffiExpression,
    argument: UniffiExpression,
) -> UniffiExpression
```


The Chebyshev polynomial of the first kind \(T_n(x)\).

### chebyshev_polynomial_second_kind

<a id="entry-presentation_swift_special_functions_capability_special_functions_chebyshev_polynomial_second_kind_api_session_chebyshev_polynomial_second_kind"></a>
<a id="placement-placement.swift.swift_object.uniffisession_chebyshevpolynomialsecondkind.1d926819dba5"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func chebyshevPolynomialSecondKind(
    degree: UniffiExpression,
    argument: UniffiExpression,
) -> UniffiExpression
```


The Chebyshev polynomial of the second kind \(U_n(x)\).

### legendre_polynomial

<a id="entry-presentation_swift_special_functions_capability_special_functions_legendre_polynomial_api_session_legendre_polynomial"></a>
<a id="placement-placement.swift.swift_object.uniffisession_legendrepolynomial.e714550087dc"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func legendrePolynomial(
    degree: UniffiExpression,
    argument: UniffiExpression,
) -> UniffiExpression
```


The Legendre polynomial \(P_n(x)\).

### generalized_laguerre_polynomial

<a id="entry-presentation_swift_special_functions_capability_special_functions_generalized_laguerre_polynomial_api_session_generalized_laguerre_polynomial"></a>
<a id="placement-placement.swift.swift_object.uniffisession_generalizedlaguerrepolynomial.45f5c032564b"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func generalizedLaguerrePolynomial(
    degree: UniffiExpression,
    parameter: UniffiExpression,
    argument: UniffiExpression,
) -> UniffiExpression
```


The generalized Laguerre polynomial \(L_n^{(\alpha)}(x)\).

### hermite_polynomial

<a id="entry-presentation_swift_special_functions_capability_special_functions_hermite_polynomial_api_session_hermite_polynomial"></a>
<a id="placement-placement.swift.swift_object.uniffisession_hermitepolynomial.aa63d58adf88"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func hermitePolynomial(
    degree: UniffiExpression,
    argument: UniffiExpression,
) -> UniffiExpression
```


The physicists' Hermite polynomial \(H_n(x)\).

### ultraspherical_polynomial

<a id="entry-presentation_swift_special_functions_capability_special_functions_ultraspherical_polynomial_api_session_ultraspherical_polynomial"></a>
<a id="placement-placement.swift.swift_object.uniffisession_ultrasphericalpolynomial.1b625b189f2a"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func ultrasphericalPolynomial(
    degree: UniffiExpression,
    parameter: UniffiExpression,
    argument: UniffiExpression,
) -> UniffiExpression
```


The ultraspherical polynomial, lowered to its canonical Gegenbauer head.

### laguerre_polynomial

<a id="entry-presentation_swift_special_functions_capability_special_functions_laguerre_polynomial_api_session_laguerre_polynomial"></a>
<a id="placement-placement.swift.swift_object.uniffisession_laguerrepolynomial.6d371ca7ab4a"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func laguerrePolynomial(
    degree: UniffiExpression,
    argument: UniffiExpression,
) -> UniffiExpression
```


The Laguerre polynomial, lowered to its canonical generalized Laguerre head.

## Example


## Additional API

### carlson_rc

<a id="entry-presentation_swift_special_functions_capability_special_functions_carlson_rc_api_session_carlson_rc"></a>
<a id="placement-placement.swift.swift_object.uniffisession_carlsonrc.e915c608fd8d"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func carlsonRc(
    firstArgument: UniffiExpression,
    secondArgument: UniffiExpression,
) -> UniffiExpression
```

Carlson's degenerate symmetric elliptic integral \(R_C(x,y)\).

### carlson_rd

<a id="entry-presentation_swift_special_functions_capability_special_functions_carlson_rd_api_session_carlson_rd"></a>
<a id="placement-placement.swift.swift_object.uniffisession_carlsonrd.e61f4245cf04"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func carlsonRd(
    firstArgument: UniffiExpression,
    secondArgument: UniffiExpression,
    thirdArgument: UniffiExpression,
) -> UniffiExpression
```

Carlson's symmetric elliptic integral \(R_D(x,y,z)\).

### carlson_rf

<a id="entry-presentation_swift_special_functions_capability_special_functions_carlson_rf_api_session_carlson_rf"></a>
<a id="placement-placement.swift.swift_object.uniffisession_carlsonrf.2f0815dd0fe8"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func carlsonRf(
    firstArgument: UniffiExpression,
    secondArgument: UniffiExpression,
    thirdArgument: UniffiExpression,
) -> UniffiExpression
```

Carlson's symmetric elliptic integral \(R_F(x,y,z)\).

### carlson_rj

<a id="entry-presentation_swift_special_functions_capability_special_functions_carlson_rj_api_session_carlson_rj"></a>
<a id="placement-placement.swift.swift_object.uniffisession_carlsonrj.92222a0ed573"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func carlsonRj(
    firstArgument: UniffiExpression,
    secondArgument: UniffiExpression,
    thirdArgument: UniffiExpression,
    fourthArgument: UniffiExpression,
) -> UniffiExpression
```

Carlson's symmetric elliptic integral \(R_J(x,y,z,p)\).

### elliptic_e

<a id="entry-presentation_swift_special_functions_capability_special_functions_elliptic_e_api_session_elliptic_e"></a>
<a id="placement-placement.swift.swift_object.uniffisession_elliptice.cf5a42b30d76"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func ellipticE(parameter: UniffiExpression) -> UniffiExpression
```

The complete second-kind elliptic integral \(E(m)\), with parameter \(m=k^2\).

### elliptic_e_incomplete

<a id="entry-presentation_swift_special_functions_capability_special_functions_elliptic_e_incomplete_api_session_elliptic_e_incomplete"></a>
<a id="placement-placement.swift.swift_object.uniffisession_ellipticeincomplete.d94f9c32b90b"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func ellipticEIncomplete(
    amplitude: UniffiExpression,
    parameter: UniffiExpression,
) -> UniffiExpression
```

The incomplete second-kind elliptic integral \(E(\phi\mid m)\), with parameter \(m=k^2\).

### elliptic_f

<a id="entry-presentation_swift_special_functions_capability_special_functions_elliptic_f_api_session_elliptic_f"></a>
<a id="placement-placement.swift.swift_object.uniffisession_ellipticf.97b11e7c5598"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func ellipticF(
    amplitude: UniffiExpression,
    parameter: UniffiExpression,
) -> UniffiExpression
```

The incomplete first-kind elliptic integral \(F(\phi\mid m)\), with parameter \(m=k^2\).

### elliptic_k

<a id="entry-presentation_swift_special_functions_capability_special_functions_elliptic_k_api_session_elliptic_k"></a>
<a id="placement-placement.swift.swift_object.uniffisession_elliptick.f833a54d5966"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func ellipticK(parameter: UniffiExpression) -> UniffiExpression
```

The complete first-kind elliptic integral \(K(m)\), with parameter \(m=k^2\).

### elliptic_pi

<a id="entry-presentation_swift_special_functions_capability_special_functions_elliptic_pi_api_session_elliptic_pi"></a>
<a id="placement-placement.swift.swift_object.uniffisession_ellipticpi.9add60e9df2b"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func ellipticPi(
    characteristic: UniffiExpression,
    parameter: UniffiExpression,
) -> UniffiExpression
```

The complete third-kind elliptic integral \(\Pi(n\mid m)\), with parameter \(m=k^2\).

### elliptic_pi_incomplete

<a id="entry-presentation_swift_special_functions_capability_special_functions_elliptic_pi_incomplete_api_session_elliptic_pi_incomplete"></a>
<a id="placement-placement.swift.swift_object.uniffisession_ellipticpiincomplete.7006379e79cc"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func ellipticPiIncomplete(
    characteristic: UniffiExpression,
    amplitude: UniffiExpression,
    parameter: UniffiExpression,
) -> UniffiExpression
```

The incomplete third-kind elliptic integral \(\Pi(n;\phi\mid m)\), with parameter \(m=k^2\).

### jacobi_amplitude

<a id="entry-presentation_swift_special_functions_capability_special_functions_jacobi_amplitude_api_session_jacobi_amplitude"></a>
<a id="placement-placement.swift.swift_object.uniffisession_jacobiamplitude.bb4745d9af75"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func jacobiAmplitude(
    argument: UniffiExpression,
    parameter: UniffiExpression,
) -> UniffiExpression
```

The pinned Jacobi amplitude \(\operatorname{am}(u\mid m)\), with parameter \(m=k^2\).

### jacobi_cn

<a id="entry-presentation_swift_special_functions_capability_special_functions_jacobi_cn_api_session_jacobi_cn"></a>
<a id="placement-placement.swift.swift_object.uniffisession_jacobicn.c9222575f34d"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func jacobiCn(
    argument: UniffiExpression,
    parameter: UniffiExpression,
) -> UniffiExpression
```

Jacobi's elliptic function \(\operatorname{cn}(u\mid m)\), with parameter \(m=k^2\).

### jacobi_dn

<a id="entry-presentation_swift_special_functions_capability_special_functions_jacobi_dn_api_session_jacobi_dn"></a>
<a id="placement-placement.swift.swift_object.uniffisession_jacobidn.2df0068956e5"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func jacobiDn(
    argument: UniffiExpression,
    parameter: UniffiExpression,
) -> UniffiExpression
```

Jacobi's elliptic function \(\operatorname{dn}(u\mid m)\), with parameter \(m=k^2\).

### jacobi_sn

<a id="entry-presentation_swift_special_functions_capability_special_functions_jacobi_sn_api_session_jacobi_sn"></a>
<a id="placement-placement.swift.swift_object.uniffisession_jacobisn.1f2ed097af66"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func jacobiSn(
    argument: UniffiExpression,
    parameter: UniffiExpression,
) -> UniffiExpression
```

Jacobi's elliptic function \(\operatorname{sn}(u\mid m)\), with parameter \(m=k^2\).

### jacobi_theta_1

<a id="entry-presentation_swift_special_functions_capability_special_functions_jacobi_theta_1_api_session_jacobi_theta_1"></a>
<a id="placement-placement.swift.swift_object.uniffisession_jacobitheta1.f139b23a8a32"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func jacobiTheta1(
    argument: UniffiExpression,
    halfPeriodRatio: UniffiExpression,
) -> UniffiExpression
```

Jacobi's first theta function \(\theta_1(z\mid\tau)\), with half-period ratio \(\tau\).

### jacobi_theta_2

<a id="entry-presentation_swift_special_functions_capability_special_functions_jacobi_theta_2_api_session_jacobi_theta_2"></a>
<a id="placement-placement.swift.swift_object.uniffisession_jacobitheta2.bf44bd13abee"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func jacobiTheta2(
    argument: UniffiExpression,
    halfPeriodRatio: UniffiExpression,
) -> UniffiExpression
```

Jacobi's second theta function \(\theta_2(z\mid\tau)\), with half-period ratio \(\tau\).

### jacobi_theta_3

<a id="entry-presentation_swift_special_functions_capability_special_functions_jacobi_theta_3_api_session_jacobi_theta_3"></a>
<a id="placement-placement.swift.swift_object.uniffisession_jacobitheta3.481c68b94053"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func jacobiTheta3(
    argument: UniffiExpression,
    halfPeriodRatio: UniffiExpression,
) -> UniffiExpression
```

Jacobi's third theta function \(\theta_3(z\mid\tau)\), with half-period ratio \(\tau\).

### jacobi_theta_4

<a id="entry-presentation_swift_special_functions_capability_special_functions_jacobi_theta_4_api_session_jacobi_theta_4"></a>
<a id="placement-placement.swift.swift_object.uniffisession_jacobitheta4.444826350c97"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func jacobiTheta4(
    argument: UniffiExpression,
    halfPeriodRatio: UniffiExpression,
) -> UniffiExpression
```

Jacobi's fourth theta function \(\theta_4(z\mid\tau)\), with half-period ratio \(\tau\).

