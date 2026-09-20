# Special functions

Special functions retain their symbolic form when a closed expression is not available.

## Gamma family

The first-tier gamma special functions. Symbolic special values, the
non-positive-integer poles, the recurrence/reflection identities, and
arbitrary-precision numeric evaluation (real and complex) all apply.

### gamma

<a id="entry-presentation_wasm_api_session_gamma"></a>
<a id="placement-placement.wasm.wasm_module.module_gamma.c6aee0f501e6"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
gamma(x: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_gamma.15bd4b87da3c"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.gamma</code></p>

```typescript signature
gamma(x: Expression): Expression
```

</details>


The gamma function \(\Gamma(x)\), the analytic continuation of `(x-1)!`.

### log_gamma

<a id="entry-presentation_wasm_api_session_log_gamma"></a>
<a id="placement-placement.wasm.wasm_module.module_loggamma.9e2c3da58bd0"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
logGamma(x: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_loggamma.5ec5f03b6584"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.logGamma</code></p>

```typescript signature
logGamma(x: Expression): Expression
```

</details>


The principal-branch log-gamma function (not `log(gamma(x))` off the real axis).

### digamma

<a id="entry-presentation_wasm_api_session_digamma"></a>
<a id="placement-placement.wasm.wasm_module.module_digamma.0d3732417250"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
digamma(x: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_digamma.8058ef2c8766"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.digamma</code></p>

```typescript signature
digamma(x: Expression): Expression
```

</details>


The digamma function \(\psi(x) = \Gamma'(x)/\Gamma(x)\).

### polygamma

<a id="entry-presentation_wasm_api_session_polygamma"></a>
<a id="placement-placement.wasm.wasm_module.module_polygamma.79d3cb4f4460"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
polygamma(order: Expression, x: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_polygamma.21297ea61e06"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.polygamma</code></p>

```typescript signature
polygamma(order: Expression, x: Expression): Expression
```

</details>


The polygamma function \(\psi^{(n)}(x)\), the order-th derivative of digamma;
`polygamma(0, x)` reduces to `digamma(x)`.

### beta

<a id="entry-presentation_wasm_api_session_beta"></a>
<a id="placement-placement.wasm.wasm_module.module_beta.f91b83241a08"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
beta(x: Expression, y: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_beta.10022cde03c3"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.beta</code></p>

```typescript signature
beta(x: Expression, y: Expression): Expression
```

</details>


The beta function \(\operatorname{B}(x, y) = \Gamma(x)\Gamma(y)/\Gamma(x+y)\).

### zeta

<a id="entry-presentation_wasm_api_session_zeta"></a>
<a id="placement-placement.wasm.wasm_module.module_zeta.25f1de1c8802"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
zeta(s: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_zeta.e838a7754a4e"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.zeta</code></p>

```typescript signature
zeta(s: Expression): Expression
```

</details>


The Riemann zeta function \(\zeta(s) = \sum_{k\geq 1} k^{-s}\). Even positive integers fold to
the \(\pi\) closed forms (`zeta(2) = pi^2/6`, `zeta(4) = pi^4/90`, …), `zeta(0) = -1/2`,
negative integers to their rational functional values (`zeta(-1) = -1/12`,
`zeta(-2n) = 0`); `zeta(1)` is the simple pole (`undefined`). Odd positive
integers (`zeta(3)`, …) stay the symbolic head; every value evaluates to
arbitrary precision over \(\mathbb{R}\) and \(\mathbb{C}\).

### hurwitz_zeta

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.hurwitz_zeta`](/symi/python/special-functions#hurwitz_zeta) in Python, [`UniffiSession.hurwitzZeta`](/symi/kotlin/special-functions#hurwitz_zeta) in Kotlin, [`UniffiSession.hurwitzZeta`](/symi/swift/special-functions#hurwitz_zeta) in Swift, [`api::Session::hurwitz_zeta`](/symi/rust/special-functions#hurwitz_zeta) in Rust.*


The Hurwitz zeta function \(\zeta(s, a) = \sum_{k\geq 0} (k+a)^{-s}\), the numeric primitive of
the family. `hurwitz_zeta(s, 1)` folds to `zeta(s)`; `hurwitz_zeta(s, 1/2)` to
\((2^s - 1)\zeta(s)\); a positive integer second argument reduces to `zeta(s)` minus
the finite head; a non-positive integer first argument gives a Bernoulli
polynomial in `a`.

### polylogarithm

<a id="entry-presentation_wasm_api_session_polylogarithm"></a>
<a id="placement-placement.wasm.wasm_module.module_polylogarithm.8ff9e7750a6e"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
polylogarithm(order: Expression, argument: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_polylogarithm.dc47bff1e1fe"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.polylogarithm</code></p>

```typescript signature
polylogarithm(order: Expression, argument: Expression): Expression
```

</details>


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

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.lerch_phi`](/symi/python/special-functions#lerch_phi) in Python, [`UniffiSession.lerchPhi`](/symi/kotlin/special-functions#lerch_phi) in Kotlin, [`UniffiSession.lerchPhi`](/symi/swift/special-functions#lerch_phi) in Swift, [`api::Session::lerch_phi`](/symi/rust/special-functions#lerch_phi) in Rust.*


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

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.hypergeometric_pfq`](/symi/python/special-functions#hypergeometric_pfq) in Python, [`UniffiSession.hypergeometricPfq`](/symi/kotlin/special-functions#hypergeometric_pfq) in Kotlin, [`UniffiSession.hypergeometricPfq`](/symi/swift/special-functions#hypergeometric_pfq) in Swift, [`api::Session::hypergeometric_pfq`](/symi/rust/special-functions#hypergeometric_pfq) in Rust.*


The generalized hypergeometric function \({}_pF_q(\mathbf a; \mathbf b; z)\). The two parameter
groups are ordered sequences: order and repetition are significant, so a set or frozenset is
rejected.

### hypergeometric_0f1

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.hypergeometric_0f1`](/symi/python/special-functions#hypergeometric_0f1) in Python, [`UniffiSession.hypergeometric0f1`](/symi/kotlin/special-functions#hypergeometric_0f1) in Kotlin, [`UniffiSession.hypergeometric0f1`](/symi/swift/special-functions#hypergeometric_0f1) in Swift, [`api::Session::hypergeometric_0f1`](/symi/rust/special-functions#hypergeometric_0f1) in Rust.*


The confluent limit \({}_0F_1(; b; z)\), lowered to `hypergeometric_pfq`.

### hypergeometric_1f1

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.hypergeometric_1f1`](/symi/python/special-functions#hypergeometric_1f1) in Python, [`UniffiSession.hypergeometric1f1`](/symi/kotlin/special-functions#hypergeometric_1f1) in Kotlin, [`UniffiSession.hypergeometric1f1`](/symi/swift/special-functions#hypergeometric_1f1) in Swift, [`api::Session::hypergeometric_1f1`](/symi/rust/special-functions#hypergeometric_1f1) in Rust.*


Kummer's confluent hypergeometric function \({}_1F_1(a; b; z)\).

### hypergeometric_2f1

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.hypergeometric_2f1`](/symi/python/special-functions#hypergeometric_2f1) in Python, [`UniffiSession.hypergeometric2f1`](/symi/kotlin/special-functions#hypergeometric_2f1) in Kotlin, [`UniffiSession.hypergeometric2f1`](/symi/swift/special-functions#hypergeometric_2f1) in Swift, [`api::Session::hypergeometric_2f1`](/symi/rust/special-functions#hypergeometric_2f1) in Rust.*


The Gauss hypergeometric function \({}_2F_1(a, b; c; z)\).

## Meijer G-function

### meijer_g

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.meijer_g`](/symi/python/special-functions#meijer_g) in Python, [`UniffiSession.meijerG`](/symi/kotlin/special-functions#meijer_g) in Kotlin, [`UniffiSession.meijerG`](/symi/swift/special-functions#meijer_g) in Swift, [`api::Session::meijer_g`](/symi/rust/special-functions#meijer_g) in Rust.*


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

*Not exposed by the WASM / JavaScript bindings. Available as [`api::Session::bessel_j`](/symi/rust/special-functions#bessel_j) in Rust.*


The principal Bessel function \(J_\nu(z)\).

### bessel_y

*Not exposed by the WASM / JavaScript bindings. Available as [`api::Session::bessel_y`](/symi/rust/special-functions#bessel_y) in Rust.*


The principal Bessel function \(Y_\nu(z)\).

### bessel_i

*Not exposed by the WASM / JavaScript bindings. Available as [`api::Session::bessel_i`](/symi/rust/special-functions#bessel_i) in Rust.*


The principal modified Bessel function \(I_\nu(z)\).

### bessel_k

*Not exposed by the WASM / JavaScript bindings. Available as [`api::Session::bessel_k`](/symi/rust/special-functions#bessel_k) in Rust.*


The principal modified Bessel function \(K_\nu(z)\).

### hankel_first_kind

*Not exposed by the WASM / JavaScript bindings. Available as [`api::Session::hankel_first_kind`](/symi/rust/special-functions#hankel_first_kind) in Rust.*


The principal Hankel function \(H_\nu^{(1)}(z)\).

### hankel_second_kind

*Not exposed by the WASM / JavaScript bindings. Available as [`api::Session::hankel_second_kind`](/symi/rust/special-functions#hankel_second_kind) in Rust.*


The principal Hankel function \(H_\nu^{(2)}(z)\).

### spherical_bessel_j

*Not exposed by the WASM / JavaScript bindings. Available as [`api::Session::spherical_bessel_j`](/symi/rust/special-functions#spherical_bessel_j) in Rust.*


The spherical Bessel function \(\mathsf j_n(z)\), for \(n\in\mathbb N_0\).

### spherical_bessel_y

*Not exposed by the WASM / JavaScript bindings. Available as [`api::Session::spherical_bessel_y`](/symi/rust/special-functions#spherical_bessel_y) in Rust.*


The spherical Bessel function \(\mathsf y_n(z)\), for \(n\in\mathbb N_0\).

### spherical_hankel_first_kind

*Not exposed by the WASM / JavaScript bindings. Available as [`api::Session::spherical_hankel_first_kind`](/symi/rust/special-functions#spherical_hankel_first_kind) in Rust.*


The spherical Hankel function \(\mathsf h_n^{(1)}(z)\), for \(n\in\mathbb N_0\).

### spherical_hankel_second_kind

*Not exposed by the WASM / JavaScript bindings. Available as [`api::Session::spherical_hankel_second_kind`](/symi/rust/special-functions#spherical_hankel_second_kind) in Rust.*


The spherical Hankel function \(\mathsf h_n^{(2)}(z)\), for \(n\in\mathbb N_0\).

### airy_ai

*Not exposed by the WASM / JavaScript bindings. Available as [`api::Session::airy_ai`](/symi/rust/special-functions#airy_ai) in Rust.*


The Airy function \(\operatorname{Ai}(z)\).

### airy_bi

*Not exposed by the WASM / JavaScript bindings. Available as [`api::Session::airy_bi`](/symi/rust/special-functions#airy_bi) in Rust.*


The Airy function \(\operatorname{Bi}(z)\).

### airy_ai_prime

*Not exposed by the WASM / JavaScript bindings. Available as [`api::Session::airy_ai_prime`](/symi/rust/special-functions#airy_ai_prime) in Rust.*


The derivative \(\operatorname{Ai}'(z)\).

### airy_bi_prime

*Not exposed by the WASM / JavaScript bindings. Available as [`api::Session::airy_bi_prime`](/symi/rust/special-functions#airy_bi_prime) in Rust.*


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

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.jacobi_polynomial`](/symi/python/special-functions#jacobi_polynomial) in Python, [`UniffiSession.jacobiPolynomial`](/symi/kotlin/special-functions#jacobi_polynomial) in Kotlin, [`UniffiSession.jacobiPolynomial`](/symi/swift/special-functions#jacobi_polynomial) in Swift, [`api::Session::jacobi_polynomial`](/symi/rust/special-functions#jacobi_polynomial) in Rust.*


The Jacobi polynomial \(P_n^{(\alpha,\beta)}(x)\).

### gegenbauer_polynomial

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.gegenbauer_polynomial`](/symi/python/special-functions#gegenbauer_polynomial) in Python, [`UniffiSession.gegenbauerPolynomial`](/symi/kotlin/special-functions#gegenbauer_polynomial) in Kotlin, [`UniffiSession.gegenbauerPolynomial`](/symi/swift/special-functions#gegenbauer_polynomial) in Swift, [`api::Session::gegenbauer_polynomial`](/symi/rust/special-functions#gegenbauer_polynomial) in Rust.*


The Gegenbauer polynomial \(C_n^{(\lambda)}(x)\).

### chebyshev_polynomial_first_kind

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.chebyshev_polynomial_first_kind`](/symi/python/special-functions#chebyshev_polynomial_first_kind) in Python, [`UniffiSession.chebyshevPolynomialFirstKind`](/symi/kotlin/special-functions#chebyshev_polynomial_first_kind) in Kotlin, [`UniffiSession.chebyshevPolynomialFirstKind`](/symi/swift/special-functions#chebyshev_polynomial_first_kind) in Swift, [`api::Session::chebyshev_polynomial_first_kind`](/symi/rust/special-functions#chebyshev_polynomial_first_kind) in Rust.*


The Chebyshev polynomial of the first kind \(T_n(x)\).

### chebyshev_polynomial_second_kind

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.chebyshev_polynomial_second_kind`](/symi/python/special-functions#chebyshev_polynomial_second_kind) in Python, [`UniffiSession.chebyshevPolynomialSecondKind`](/symi/kotlin/special-functions#chebyshev_polynomial_second_kind) in Kotlin, [`UniffiSession.chebyshevPolynomialSecondKind`](/symi/swift/special-functions#chebyshev_polynomial_second_kind) in Swift, [`api::Session::chebyshev_polynomial_second_kind`](/symi/rust/special-functions#chebyshev_polynomial_second_kind) in Rust.*


The Chebyshev polynomial of the second kind \(U_n(x)\).

### legendre_polynomial

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.legendre_polynomial`](/symi/python/special-functions#legendre_polynomial) in Python, [`UniffiSession.legendrePolynomial`](/symi/kotlin/special-functions#legendre_polynomial) in Kotlin, [`UniffiSession.legendrePolynomial`](/symi/swift/special-functions#legendre_polynomial) in Swift, [`api::Session::legendre_polynomial`](/symi/rust/special-functions#legendre_polynomial) in Rust.*


The Legendre polynomial \(P_n(x)\).

### generalized_laguerre_polynomial

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.generalized_laguerre_polynomial`](/symi/python/special-functions#generalized_laguerre_polynomial) in Python, [`UniffiSession.generalizedLaguerrePolynomial`](/symi/kotlin/special-functions#generalized_laguerre_polynomial) in Kotlin, [`UniffiSession.generalizedLaguerrePolynomial`](/symi/swift/special-functions#generalized_laguerre_polynomial) in Swift, [`api::Session::generalized_laguerre_polynomial`](/symi/rust/special-functions#generalized_laguerre_polynomial) in Rust.*


The generalized Laguerre polynomial \(L_n^{(\alpha)}(x)\).

### hermite_polynomial

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.hermite_polynomial`](/symi/python/special-functions#hermite_polynomial) in Python, [`UniffiSession.hermitePolynomial`](/symi/kotlin/special-functions#hermite_polynomial) in Kotlin, [`UniffiSession.hermitePolynomial`](/symi/swift/special-functions#hermite_polynomial) in Swift, [`api::Session::hermite_polynomial`](/symi/rust/special-functions#hermite_polynomial) in Rust.*


The physicists' Hermite polynomial \(H_n(x)\).

### ultraspherical_polynomial

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.ultraspherical_polynomial`](/symi/python/special-functions#ultraspherical_polynomial) in Python, [`UniffiSession.ultrasphericalPolynomial`](/symi/kotlin/special-functions#ultraspherical_polynomial) in Kotlin, [`UniffiSession.ultrasphericalPolynomial`](/symi/swift/special-functions#ultraspherical_polynomial) in Swift, [`api::Session::ultraspherical_polynomial`](/symi/rust/special-functions#ultraspherical_polynomial) in Rust.*


The ultraspherical polynomial, lowered to its canonical Gegenbauer head.

### laguerre_polynomial

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.laguerre_polynomial`](/symi/python/special-functions#laguerre_polynomial) in Python, [`UniffiSession.laguerrePolynomial`](/symi/kotlin/special-functions#laguerre_polynomial) in Kotlin, [`UniffiSession.laguerrePolynomial`](/symi/swift/special-functions#laguerre_polynomial) in Swift, [`api::Session::laguerre_polynomial`](/symi/rust/special-functions#laguerre_polynomial) in Rust.*


The Laguerre polynomial, lowered to its canonical generalized Laguerre head.

## Example

This family is not part of the recommended JavaScript facade in this release. Call it through the generated `symi.raw` layer, whose entries are listed with their wasm-bindgen signatures above, and read [Migration](migration.md) for the ownership rules that apply there.


### convert_polynomial_basis

*Not exposed by the WASM / JavaScript bindings. Available as [`api::Expression::convert_polynomial_basis`](/symi/rust/special-functions#convert_polynomial_basis) in Rust.*


Express a finite univariate polynomial in a classical orthogonal basis — as a
combination of Chebyshev, Legendre, Hermite, Laguerre, Gegenbauer, or Jacobi
polynomials rather than powers of the variable. The conversion is exact; a
target that is not a finite univariate polynomial in `variable` declines.

### orthogonal_polynomial_coefficient

*Not exposed by the WASM / JavaScript bindings. Available as [`api::Expression::orthogonal_polynomial_coefficient`](/symi/rust/special-functions#orthogonal_polynomial_coefficient) in Rust.*


One exact coefficient of that expansion, without forming the whole of it: the
coefficient of the basis polynomial of the given degree.

### expand_orthogonal_polynomial

*Not exposed by the WASM / JavaScript bindings. Available as [`api::Expression::expand_orthogonal_polynomial`](/symi/rust/special-functions#expand_orthogonal_polynomial) in Rust.*


The inverse direction: expand every classical orthogonal polynomial call in the
expression into an ordinary polynomial in its variable.

## Additional API

### carlsonRc

<a id="entry-presentation_wasm_api_session_carlson_rc"></a>
<a id="placement-placement.wasm.wasm_module.module_carlsonrc.dd3341aeb043"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
carlsonRc(
    first_argument: Expression,
    second_argument: Expression,
): Expression
```

Carlson's degenerate symmetric elliptic integral \(R_C(x,y)\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_carlsonrc.903b0b7b6b2b"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.carlsonRc</code></p>

```typescript signature
carlsonRc(
    first_argument: Expression,
    second_argument: Expression,
): Expression
```

</details>

### carlsonRd

<a id="entry-presentation_wasm_api_session_carlson_rd"></a>
<a id="placement-placement.wasm.wasm_module.module_carlsonrd.26b89bd7eade"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
carlsonRd(
    first_argument: Expression,
    second_argument: Expression,
    third_argument: Expression,
): Expression
```

Carlson's symmetric elliptic integral \(R_D(x,y,z)\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_carlsonrd.11aac1f3979a"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.carlsonRd</code></p>

```typescript signature
carlsonRd(
    first_argument: Expression,
    second_argument: Expression,
    third_argument: Expression,
): Expression
```

</details>

### carlsonRf

<a id="entry-presentation_wasm_api_session_carlson_rf"></a>
<a id="placement-placement.wasm.wasm_module.module_carlsonrf.8415cba14475"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
carlsonRf(
    first_argument: Expression,
    second_argument: Expression,
    third_argument: Expression,
): Expression
```

Carlson's symmetric elliptic integral \(R_F(x,y,z)\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_carlsonrf.6d094605d199"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.carlsonRf</code></p>

```typescript signature
carlsonRf(
    first_argument: Expression,
    second_argument: Expression,
    third_argument: Expression,
): Expression
```

</details>

### carlsonRj

<a id="entry-presentation_wasm_api_session_carlson_rj"></a>
<a id="placement-placement.wasm.wasm_module.module_carlsonrj.6686de7356a8"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
carlsonRj(
    first_argument: Expression,
    second_argument: Expression,
    third_argument: Expression,
    fourth_argument: Expression,
): Expression
```

Carlson's symmetric elliptic integral \(R_J(x,y,z,p)\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_carlsonrj.a4fb7ba28bd8"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.carlsonRj</code></p>

```typescript signature
carlsonRj(
    first_argument: Expression,
    second_argument: Expression,
    third_argument: Expression,
    fourth_argument: Expression,
): Expression
```

</details>

### chebyshevPolynomialFirstKind

<a id="entry-presentation_wasm_api_session_chebyshev_polynomial_first_kind"></a>
<a id="placement-placement.wasm.wasm_module.module_chebyshevpolynomialfirstkind.ebde5c207b56"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
chebyshevPolynomialFirstKind(
    degree: Expression,
    argument: Expression,
): Expression
```

The Chebyshev polynomial \(T_n(x)\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_chebyshevpolynomialfirstkind.0a328846aedc"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.chebyshevPolynomialFirstKind</code></p>

```typescript signature
chebyshevPolynomialFirstKind(
    degree: Expression,
    argument: Expression,
): Expression
```

</details>

### chebyshevPolynomialSecondKind

<a id="entry-presentation_wasm_api_session_chebyshev_polynomial_second_kind"></a>
<a id="placement-placement.wasm.wasm_module.module_chebyshevpolynomialsecondkind.c943050fbb05"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
chebyshevPolynomialSecondKind(
    degree: Expression,
    argument: Expression,
): Expression
```

The Chebyshev polynomial \(U_n(x)\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_chebyshevpolynomialsecondkind.e583655d7674"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.chebyshevPolynomialSecondKind</code></p>

```typescript signature
chebyshevPolynomialSecondKind(
    degree: Expression,
    argument: Expression,
): Expression
```

</details>

### ellipticE

<a id="entry-presentation_wasm_api_session_elliptic_e"></a>
<a id="placement-placement.wasm.wasm_module.module_elliptice.77784ec06567"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
ellipticE(parameter: Expression): Expression
```

The complete second-kind elliptic integral \(E(m)\), with parameter \(m=k^2\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_elliptice.5532b3804b95"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.ellipticE</code></p>

```typescript signature
ellipticE(parameter: Expression): Expression
```

</details>

### ellipticEIncomplete

<a id="entry-presentation_wasm_api_session_elliptic_e_incomplete"></a>
<a id="placement-placement.wasm.wasm_module.module_ellipticeincomplete.07191f89a2c0"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
ellipticEIncomplete(
    amplitude: Expression,
    parameter: Expression,
): Expression
```

The incomplete second-kind elliptic integral \(E(\phi\mid m)\), with parameter \(m=k^2\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_ellipticeincomplete.25cb5b0479c7"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.ellipticEIncomplete</code></p>

```typescript signature
ellipticEIncomplete(
    amplitude: Expression,
    parameter: Expression,
): Expression
```

</details>

### ellipticF

<a id="entry-presentation_wasm_api_session_elliptic_f"></a>
<a id="placement-placement.wasm.wasm_module.module_ellipticf.7cc3c6a31f32"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
ellipticF(amplitude: Expression, parameter: Expression): Expression
```

The incomplete first-kind elliptic integral \(F(\phi\mid m)\), with parameter \(m=k^2\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_ellipticf.33bd7036e7c9"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.ellipticF</code></p>

```typescript signature
ellipticF(amplitude: Expression, parameter: Expression): Expression
```

</details>

### ellipticK

<a id="entry-presentation_wasm_api_session_elliptic_k"></a>
<a id="placement-placement.wasm.wasm_module.module_elliptick.89c8ca5ccda5"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
ellipticK(parameter: Expression): Expression
```

The complete first-kind elliptic integral \(K(m)\), with parameter \(m=k^2\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_elliptick.629bbeb8e11c"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.ellipticK</code></p>

```typescript signature
ellipticK(parameter: Expression): Expression
```

</details>

### ellipticPi

<a id="entry-presentation_wasm_api_session_elliptic_pi"></a>
<a id="placement-placement.wasm.wasm_module.module_ellipticpi.eb8d10ebaaa5"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
ellipticPi(
    characteristic: Expression,
    parameter: Expression,
): Expression
```

The complete third-kind elliptic integral \(\Pi(n\mid m)\), with parameter \(m=k^2\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_ellipticpi.c988463102bc"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.ellipticPi</code></p>

```typescript signature
ellipticPi(
    characteristic: Expression,
    parameter: Expression,
): Expression
```

</details>

### ellipticPiIncomplete

<a id="entry-presentation_wasm_api_session_elliptic_pi_incomplete"></a>
<a id="placement-placement.wasm.wasm_module.module_ellipticpiincomplete.9b0df8832d4d"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
ellipticPiIncomplete(
    characteristic: Expression,
    amplitude: Expression,
    parameter: Expression,
): Expression
```

The incomplete third-kind elliptic integral \(\Pi(n;\phi\mid m)\), with parameter \(m=k^2\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_ellipticpiincomplete.719e94d7de55"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.ellipticPiIncomplete</code></p>

```typescript signature
ellipticPiIncomplete(
    characteristic: Expression,
    amplitude: Expression,
    parameter: Expression,
): Expression
```

</details>

### gegenbauerPolynomial

<a id="entry-presentation_wasm_api_session_gegenbauer_polynomial"></a>
<a id="placement-placement.wasm.wasm_module.module_gegenbauerpolynomial.2785173f26a1"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
gegenbauerPolynomial(
    degree: Expression,
    parameter: Expression,
    argument: Expression,
): Expression
```

The Gegenbauer polynomial \(C_n^{(\lambda)}(x)\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_gegenbauerpolynomial.9c0b54be20d8"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.gegenbauerPolynomial</code></p>

```typescript signature
gegenbauerPolynomial(
    degree: Expression,
    parameter: Expression,
    argument: Expression,
): Expression
```

</details>

### generalizedLaguerrePolynomial

<a id="entry-presentation_wasm_api_session_generalized_laguerre_polynomial"></a>
<a id="placement-placement.wasm.wasm_module.module_generalizedlaguerrepolynomial.4f16cbeb161f"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
generalizedLaguerrePolynomial(
    degree: Expression,
    parameter: Expression,
    argument: Expression,
): Expression
```

The generalized Laguerre polynomial \(L_n^{(\alpha)}(x)\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_generalizedlaguerrepolynomial.2aafcd528a5f"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.generalizedLaguerrePolynomial</code></p>

```typescript signature
generalizedLaguerrePolynomial(
    degree: Expression,
    parameter: Expression,
    argument: Expression,
): Expression
```

</details>

### hermitePolynomial

<a id="entry-presentation_wasm_api_session_hermite_polynomial"></a>
<a id="placement-placement.wasm.wasm_module.module_hermitepolynomial.748805216715"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
hermitePolynomial(degree: Expression, argument: Expression): Expression
```

The physicists' Hermite polynomial \(H_n(x)\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_hermitepolynomial.68f367f719e9"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.hermitePolynomial</code></p>

```typescript signature
hermitePolynomial(degree: Expression, argument: Expression): Expression
```

</details>

### hurwitzZeta

<a id="entry-presentation_wasm_api_session_hurwitz_zeta"></a>
<a id="placement-placement.wasm.wasm_module.module_hurwitzzeta.729040f89142"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
hurwitzZeta(s: Expression, a: Expression): Expression
```

The Hurwitz zeta function \(\zeta(s, a) = \sum_{k\geq 0} (k+a)^{-s}\), the numeric primitive of the family. `hurwitz_zeta(s, 1)` folds to `zeta(s)`; `hurwitz_zeta(s, 1/2)` to \((2^s - 1)\zeta(s)\); a positive integer second argument reduces to `zeta(s)` minus the finite head; a non-positive integer first argument gives a Bernoulli polynomial in `a`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_hurwitzzeta.faec90c9388d"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.hurwitzZeta</code></p>

```typescript signature
hurwitzZeta(s: Expression, a: Expression): Expression
```

</details>

### hypergeometric0f1

<a id="entry-presentation_wasm_api_session_hypergeometric_0f1"></a>
<a id="placement-placement.wasm.wasm_module.module_hypergeometric0f1.cef7a55e5327"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
hypergeometric0f1(
    lower_parameter: Expression,
    argument: Expression,
): Expression
```

The confluent limit \({}_0F_1(; b; z)\), lowered to `hypergeometric_pfq`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_hypergeometric0f1.eb8ad3cf9c53"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.hypergeometric0f1</code></p>

```typescript signature
hypergeometric0f1(
    lower_parameter: Expression,
    argument: Expression,
): Expression
```

</details>

### hypergeometric1f1

<a id="entry-presentation_wasm_api_session_hypergeometric_1f1"></a>
<a id="placement-placement.wasm.wasm_module.module_hypergeometric1f1.f872b9c5d868"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
hypergeometric1f1(
    upper_parameter: Expression,
    lower_parameter: Expression,
    argument: Expression,
): Expression
```

Kummer's confluent hypergeometric function \({}_1F_1(a; b; z)\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_hypergeometric1f1.658e3f7743d5"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.hypergeometric1f1</code></p>

```typescript signature
hypergeometric1f1(
    upper_parameter: Expression,
    lower_parameter: Expression,
    argument: Expression,
): Expression
```

</details>

### hypergeometric2f1

<a id="entry-presentation_wasm_api_session_hypergeometric_2f1"></a>
<a id="placement-placement.wasm.wasm_module.module_hypergeometric2f1.b66e8a62c1b1"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
hypergeometric2f1(
    first_upper_parameter: Expression,
    second_upper_parameter: Expression,
    lower_parameter: Expression,
    argument: Expression,
): Expression
```

The Gauss hypergeometric function \({}_2F_1(a, b; c; z)\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_hypergeometric2f1.941040609faf"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.hypergeometric2f1</code></p>

```typescript signature
hypergeometric2f1(
    first_upper_parameter: Expression,
    second_upper_parameter: Expression,
    lower_parameter: Expression,
    argument: Expression,
): Expression
```

</details>

### hypergeometricPfq

<a id="entry-presentation_wasm_api_session_hypergeometric_pfq"></a>
<a id="placement-placement.wasm.wasm_module.module_hypergeometricpfq.10c7ad6981f0"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
hypergeometricPfq(
    upper_parameters: Expression[],
    lower_parameters: Expression[],
    argument: Expression,
): Expression
```

The generalized hypergeometric function \({}_pF_q(\mathbf a; \mathbf b; z)\). The two parameter groups are ordered sequences: order and repetition are significant, so a set or frozenset is rejected.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_hypergeometricpfq.2b937c3c8db4"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.hypergeometricPfq</code></p>

```typescript signature
hypergeometricPfq(
    upper_parameters: Expression[],
    lower_parameters: Expression[],
    argument: Expression,
): Expression
```

</details>

### jacobiAmplitude

<a id="entry-presentation_wasm_api_session_jacobi_amplitude"></a>
<a id="placement-placement.wasm.wasm_module.module_jacobiamplitude.d177051aba22"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
jacobiAmplitude(argument: Expression, parameter: Expression): Expression
```

The pinned Jacobi amplitude \(\operatorname{am}(u\mid m)\), with parameter \(m=k^2\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_jacobiamplitude.a587330f092b"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.jacobiAmplitude</code></p>

```typescript signature
jacobiAmplitude(argument: Expression, parameter: Expression): Expression
```

</details>

### jacobiCn

<a id="entry-presentation_wasm_api_session_jacobi_cn"></a>
<a id="placement-placement.wasm.wasm_module.module_jacobicn.17eb37a567b9"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
jacobiCn(argument: Expression, parameter: Expression): Expression
```

Jacobi's elliptic function \(\operatorname{cn}(u\mid m)\), with parameter \(m=k^2\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_jacobicn.f58ebda31a50"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.jacobiCn</code></p>

```typescript signature
jacobiCn(argument: Expression, parameter: Expression): Expression
```

</details>

### jacobiDn

<a id="entry-presentation_wasm_api_session_jacobi_dn"></a>
<a id="placement-placement.wasm.wasm_module.module_jacobidn.e6c3ec6d7a4e"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
jacobiDn(argument: Expression, parameter: Expression): Expression
```

Jacobi's elliptic function \(\operatorname{dn}(u\mid m)\), with parameter \(m=k^2\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_jacobidn.00819f251239"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.jacobiDn</code></p>

```typescript signature
jacobiDn(argument: Expression, parameter: Expression): Expression
```

</details>

### jacobiPolynomial

<a id="entry-presentation_wasm_api_session_jacobi_polynomial"></a>
<a id="placement-placement.wasm.wasm_module.module_jacobipolynomial.74ad8252890c"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
jacobiPolynomial(
    degree: Expression,
    first_parameter: Expression,
    second_parameter: Expression,
    argument: Expression,
): Expression
```

The Jacobi polynomial \(P_n^{(\alpha,\beta)}(x)\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_jacobipolynomial.efcf62ec673a"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.jacobiPolynomial</code></p>

```typescript signature
jacobiPolynomial(
    degree: Expression,
    first_parameter: Expression,
    second_parameter: Expression,
    argument: Expression,
): Expression
```

</details>

### jacobiSn

<a id="entry-presentation_wasm_api_session_jacobi_sn"></a>
<a id="placement-placement.wasm.wasm_module.module_jacobisn.a5c00c764a10"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
jacobiSn(argument: Expression, parameter: Expression): Expression
```

Jacobi's elliptic function \(\operatorname{sn}(u\mid m)\), with parameter \(m=k^2\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_jacobisn.74cfc885f96f"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.jacobiSn</code></p>

```typescript signature
jacobiSn(argument: Expression, parameter: Expression): Expression
```

</details>

### jacobiTheta1

<a id="entry-presentation_wasm_api_session_jacobi_theta_1"></a>
<a id="placement-placement.wasm.wasm_module.module_jacobitheta1.7a2497134f65"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
jacobiTheta1(argument: Expression, tau: Expression): Expression
```

Jacobi's first theta function \(\theta_1(z\mid\tau)\), with half-period ratio \(\tau\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_jacobitheta1.c4d23116584e"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.jacobiTheta1</code></p>

```typescript signature
jacobiTheta1(argument: Expression, tau: Expression): Expression
```

</details>

### jacobiTheta2

<a id="entry-presentation_wasm_api_session_jacobi_theta_2"></a>
<a id="placement-placement.wasm.wasm_module.module_jacobitheta2.be1168718010"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
jacobiTheta2(argument: Expression, tau: Expression): Expression
```

Jacobi's second theta function \(\theta_2(z\mid\tau)\), with half-period ratio \(\tau\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_jacobitheta2.189cc40aeeea"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.jacobiTheta2</code></p>

```typescript signature
jacobiTheta2(argument: Expression, tau: Expression): Expression
```

</details>

### jacobiTheta3

<a id="entry-presentation_wasm_api_session_jacobi_theta_3"></a>
<a id="placement-placement.wasm.wasm_module.module_jacobitheta3.00271ffa7a15"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
jacobiTheta3(argument: Expression, tau: Expression): Expression
```

Jacobi's third theta function \(\theta_3(z\mid\tau)\), with half-period ratio \(\tau\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_jacobitheta3.0a910e4dfec6"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.jacobiTheta3</code></p>

```typescript signature
jacobiTheta3(argument: Expression, tau: Expression): Expression
```

</details>

### jacobiTheta4

<a id="entry-presentation_wasm_api_session_jacobi_theta_4"></a>
<a id="placement-placement.wasm.wasm_module.module_jacobitheta4.1dd493afad49"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
jacobiTheta4(argument: Expression, tau: Expression): Expression
```

Jacobi's fourth theta function \(\theta_4(z\mid\tau)\), with half-period ratio \(\tau\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_jacobitheta4.4a26c72700a2"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.jacobiTheta4</code></p>

```typescript signature
jacobiTheta4(argument: Expression, tau: Expression): Expression
```

</details>

### laguerrePolynomial

<a id="entry-presentation_wasm_api_session_laguerre_polynomial"></a>
<a id="placement-placement.wasm.wasm_module.module_laguerrepolynomial.52100b9b20ee"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
laguerrePolynomial(degree: Expression, argument: Expression): Expression
```

The Laguerre polynomial, lowered to generalized Laguerre with parameter zero.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_laguerrepolynomial.62995c0f2327"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.laguerrePolynomial</code></p>

```typescript signature
laguerrePolynomial(degree: Expression, argument: Expression): Expression
```

</details>

### legendrePolynomial

<a id="entry-presentation_wasm_api_session_legendre_polynomial"></a>
<a id="placement-placement.wasm.wasm_module.module_legendrepolynomial.50ac16a05e94"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
legendrePolynomial(degree: Expression, argument: Expression): Expression
```

The Legendre polynomial \(P_n(x)\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_legendrepolynomial.28ff6dbacc69"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.legendrePolynomial</code></p>

```typescript signature
legendrePolynomial(degree: Expression, argument: Expression): Expression
```

</details>

### lerchPhi

<a id="entry-presentation_wasm_api_session_lerch_phi"></a>
<a id="placement-placement.wasm.wasm_module.module_lerchphi.81f4f0c65935"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
lerchPhi(
    argument: Expression,
    order: Expression,
    shift: Expression,
): Expression
```

The principal Lerch transcendent \(\Phi(z, s, a)\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_lerchphi.1a43d0de986c"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.lerchPhi</code></p>

```typescript signature
lerchPhi(
    argument: Expression,
    order: Expression,
    shift: Expression,
): Expression
```

</details>

### meijerG

<a id="entry-presentation_wasm_api_session_meijer_g"></a>
<a id="placement-placement.wasm.wasm_module.module_meijerg.c09fa2551e5f"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
meijerG(
    upper_numerator_parameters: Expression[],
    upper_denominator_parameters: Expression[],
    lower_numerator_parameters: Expression[],
    lower_denominator_parameters: Expression[],
    argument: Expression,
): Expression
```

The Meijer G-function \(G_{p,q}^{m,n}\) from its four ordered parameter groups. The orders `m`, `n`, `p`, and `q` are read from the group lengths and are never supplied separately.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_meijerg.ab8f46bb2c1a"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.meijerG</code></p>

```typescript signature
meijerG(
    upper_numerator_parameters: Expression[],
    upper_denominator_parameters: Expression[],
    lower_numerator_parameters: Expression[],
    lower_denominator_parameters: Expression[],
    argument: Expression,
): Expression
```

</details>

### ultrasphericalPolynomial

<a id="entry-presentation_wasm_api_session_ultraspherical_polynomial"></a>
<a id="placement-placement.wasm.wasm_module.module_ultrasphericalpolynomial.bb8eb9784e52"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
ultrasphericalPolynomial(
    degree: Expression,
    parameter: Expression,
    argument: Expression,
): Expression
```

The ultraspherical polynomial, lowered to the Gegenbauer head.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_ultrasphericalpolynomial.0086e7e17f60"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.ultrasphericalPolynomial</code></p>

```typescript signature
ultrasphericalPolynomial(
    degree: Expression,
    parameter: Expression,
    argument: Expression,
): Expression
```

</details>

